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
    if (typeof window !== 'undefined') {
      this.initializeAccessToken();
    }
    this.setupRequestInterceptors();
  }

  private setupRequestInterceptors() {
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
  }

  private initializeAccessToken() {
    const storedToken = localStorage.getItem('accessToken');
    if (storedToken) {
      ApiService.setAccessToken(storedToken);
    }
  }

  protected static getAccessToken(): string {
    return ApiService.accessToken;
  }

  static setAccessToken(accessToken: string) {
    const authorization =
      accessToken.length > 0 ? `Bearer ${accessToken}` : undefined;
    this.instance.defaults.headers.common['Authorization'] = authorization;
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
