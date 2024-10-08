import ApiService from '@/shared/api/service/ApiService';
import { BASE_URL } from '@/shared/lib/constants';
import { User } from '@/shared/model';

class CommonApiService extends ApiService {
  constructor() {
    super();
    this.setupInterceptors();
  }

  private setupInterceptors() {
    CommonApiService.instance.interceptors.response.use(
      response => response,
      async error => {
        const originalRequest = error.config;

        if (
          error.response &&
          error.response.status === 401 &&
          !originalRequest._retry
        ) {
          console.log(
            '🚀 ~ CommonApiService ~ setupInterceptors ~ error.config.url:',
            error.config.url,
          );

          originalRequest._retry = true;

          try {
            const refreshResponse = await this.refreshToken();
            console.log(
              '🚀 ~ CommonApiService ~ setupInterceptors ~ refreshResponse:',
              refreshResponse,
            );
            const newAccessToken = refreshResponse.data.accessToken;
            localStorage.setItem('accessToken', newAccessToken);
            CommonApiService.setAccessToken(newAccessToken);
            originalRequest.headers['Authorization'] =
              `Bearer ${newAccessToken}`;
            return ApiService.instance(originalRequest);
          } catch (refreshError) {
            console.log(
              'Refresh token expired or max attempts reached, logging out...',
            );
            await this.signout();
            return Promise.reject(refreshError);
          }
        }

        return Promise.reject(error);
      },
    );
  }

  async signout() {
    try {
      await this.post(`${BASE_URL}/api/auths/logout`);
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      localStorage.removeItem('accessToken');
      CommonApiService.setAccessToken('');
    }
  }

  async leaveGatheringById(gatheringId: number) {
    const response = await this.delete(
      `${BASE_URL}/api/gatherings/${gatheringId}/leave`,
    );
    return response;
  }
  async refreshToken() {
    const response = await this.get(`${BASE_URL}/api/auths/refresh-token`);
    return response;
  }
  async getUserInfo() {
    const response = await this.get<User>(`${BASE_URL}/api/auths/me`);
    return response;
  }
}

export const commonApiService = new CommonApiService();
