import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export default class ApiService {
  protected static instance: ApiService;
  protected axiosInstance: AxiosInstance;
  private accessToken: string = '';

  protected constructor() {
    this.axiosInstance = axios.create({
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    });
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

  private setupRequestInterceptors() {
    this.axiosInstance.interceptors.request.use(
      config => {
        if (this.accessToken) {
          config.headers['Authorization'] = `Bearer ${this.accessToken}`;
        }
        return config;
      },
      error => {
        console.error('Request interceptor error', error);
        return Promise.reject(error);
      },
    );
  }

  private initializeAccessToken() {
    const storedToken = localStorage.getItem('accessToken');
    if (storedToken) {
      this.setAccessToken(storedToken);
    }
  }

  public getAccessToken(): string {
    return this.accessToken;
  }

  public setAccessToken(accessToken: string) {
    this.accessToken = accessToken;
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
