import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export default class ApiService {
  protected static instance: AxiosInstance = axios.create({
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  private static accessToken = '';
  constructor() {
    this.setupInterceptors();
  }

  private setupInterceptors() {
    // 요청 인터셉터
    ApiService.instance.interceptors.request.use(
      config => {
        if (ApiService.accessToken) {
          config.headers['Authorization'] = `Bearer ${ApiService.accessToken}`;
        }
        return config;
      },
      error => {
        console.error('Request interceptor error:', error);
        return Promise.reject(error);
      },
    );

    // 응답 인터셉터
    ApiService.instance.interceptors.response.use(
      response => response,
      async error => {
        const originalRequest = error.config;
        if (
          error.response &&
          error.response.status === 401 &&
          !originalRequest._retry
        ) {
          originalRequest._retry = true;
          try {
            const refreshResponse =
              await ApiService.instance.post('/refresh-token');
            const newAccessToken = refreshResponse.data.accessToken;
            // 새 accessToken을 localStorage에 저장
            localStorage.setItem('accessToken', newAccessToken);
            // 새 accessToken 저장
            ApiService.setAccessToken(newAccessToken);

            // 원래 요청의 헤더에 새 accessToken 설정
            originalRequest.headers['Authorization'] =
              `Bearer ${newAccessToken}`;

            // 실패한 요청 재시도
            return ApiService.instance(originalRequest);
          } catch (refreshError) {
            console.log('Refresh token expired, logging out...');
            // 여기에 로그아웃 로직 구현

            // localStorage.clear(); // localStorage 초기화
            ApiService.setAccessToken(''); // accessToken 제거
            return Promise.reject(refreshError);
          }
        }
        return Promise.reject(error);
      },
    );
  }

  static setAccessToken(accessToken: string) {
    this.accessToken = accessToken;
  }

  async get<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    config?: AxiosRequestConfig<D>,
  ) {
    return ApiService.instance.get<T, R, D>(url, config);
  }

  async post<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>,
  ) {
    return ApiService.instance.post<T, R, D>(url, data, config);
  }

  async put<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>,
  ) {
    return ApiService.instance.put<T, R, D>(url, data, config);
  }

  async delete<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    config?: AxiosRequestConfig<D>,
  ) {
    return ApiService.instance.delete<T, R, D>(url, config);
  }
}
