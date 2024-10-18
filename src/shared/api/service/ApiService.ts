import { Tokens } from '@/entities/auth/api/service/AuthApiService';
import { ACCESS_TOKEN_KEY, BASE_URL } from '@/shared/lib/constants';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export default class ApiService {
  private static isServer = typeof window === 'undefined';
  private isRefreshing = false;
  private refreshSubscribers: Array<(token: string) => void> = [];
  protected static instance: ApiService;
  protected axiosInstance: AxiosInstance = axios.create({
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  protected constructor() {
    if (!ApiService.isServer) {
      this.initializeAccessToken();
      this.setupRequestInterceptors();
      this.setupResponseInterceptors();
    }
  }

  public static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
    }
    return ApiService.instance;
  }

  private initializeAccessToken() {
    const storedToken = localStorage.getItem('accessToken');
    if (storedToken) {
      this.setAccessToken(storedToken);
    }
  }

  private setupRequestInterceptors() {
    this.axiosInstance.interceptors.request.use(
      config => {
        const token = localStorage.getItem('accessToken');
        if (token) {
          config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
      },
      error => {
        console.error('Request interceptor error', error);
        return Promise.reject(error);
      },
    );
  }

  private setupResponseInterceptors() {
    const axiosInstance = this.axiosInstance;
    axiosInstance.interceptors.response.use(
      response => response,
      async error => {
        const originalRequest = error.config;

        if (
          error.config.url !== `${BASE_URL}/api/auths/login` &&
          error.response &&
          error.response.status === 401 &&
          !error.response.data.message.includes('토큰이 만료되었습니다') &&
          !originalRequest._retry
        ) {
          if (this.isRefreshing) {
            return new Promise(resolve => {
              this.refreshSubscribers.push((token: string) => {
                originalRequest.headers['Authorization'] = `Bearer ${token}`;
                resolve(axiosInstance(originalRequest));
              });
            });
          }

          originalRequest._retry = true;
          this.isRefreshing = true;

          try {
            const refreshResponse = await this.refreshToken();
            const newAccessToken = refreshResponse.data.accessToken;

            localStorage.setItem(ACCESS_TOKEN_KEY, newAccessToken);
            this.setAccessToken(newAccessToken);

            this.refreshSubscribers.forEach(callback =>
              callback(newAccessToken),
            );
            this.refreshSubscribers = [];

            originalRequest.headers['Authorization'] =
              `Bearer ${newAccessToken}`;
            return axiosInstance(originalRequest);
          } catch (refreshError) {
            this.clearTokens();
            window.location.href = '/';
            return Promise.reject(refreshError);
          } finally {
            this.isRefreshing = false;
          }
        }

        return Promise.reject(error);
      },
    );
  }

  private clearTokens() {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem('signin-user-data');
    this.axiosInstance.defaults.headers.common['Authorization'] = undefined;
    this.setupRequestInterceptors();
  }

  public setAccessToken(accessToken: string) {
    const newAuthorization = accessToken ? `Bearer ${accessToken}` : undefined;

    localStorage.setItem('accessToken', accessToken);
    this.axiosInstance.defaults.headers.common['Authorization'] =
      newAuthorization;
    this.setupRequestInterceptors();
  }

  async get<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    config?: AxiosRequestConfig<D>,
  ) {
    return this.axiosInstance.get<T, R, D>(url, config);
  }

  async post<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>,
  ) {
    return this.axiosInstance.post<T, R, D>(url, data, config);
  }

  async put<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>,
  ) {
    return this.axiosInstance.put<T, R, D>(url, data, config);
  }

  async delete<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    config?: AxiosRequestConfig<D>,
  ) {
    return this.axiosInstance.delete<T, R, D>(url, config);
  }

  private async refreshToken() {
    try {
      const response = await this.get<Tokens>(
        `${BASE_URL}/api/auths/refresh-token`,
      );
      return response;
    } catch (error) {
      throw error;
    }
  }
}
