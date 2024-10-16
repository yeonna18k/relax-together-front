import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export default class ApiService {
  protected static instance: ApiService;
  protected axiosInstance: AxiosInstance = axios.create({
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  protected constructor() {
    if (typeof window !== 'undefined') {
      this.initializeAccessToken();
    }
    this.setupRequestInterceptors();
  }

  public static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
    }
    return ApiService.instance;
  }

  private initializeAccessToken() {
    if (typeof window !== 'undefined') {
      const storedToken = localStorage.getItem('accessToken');
      if (storedToken) {
        this.setAccessToken(storedToken);
      }
    }
  }

  private setupRequestInterceptors() {
    this.axiosInstance.interceptors.request.use(
      config => {
        if (typeof window !== 'undefined') {
          const token = localStorage.getItem('accessToken');
          if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
          }
        }
        return config;
      },
      error => {
        console.error('Request interceptor error', error);
        return Promise.reject(error);
      },
    );
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
}
