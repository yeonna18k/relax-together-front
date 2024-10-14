import CommonApiService from '@/shared/api/service/CommonApiService';
import { dummyUser } from '@/shared/fixture/user';

describe('CommonApiService', () => {
  let apiService: CommonApiService;

  beforeEach(() => {
    apiService = new CommonApiService();
  });

  it('토큰이 만료되었을 때 토큰을 갱신해야 한다', async () => {
    localStorage.setItem('accessToken', 'old-access-token');
    apiService.setAccessToken('old-access-token');

    const response = await apiService.getUserInfo();

    expect(response.data).toEqual(dummyUser); // 사용자 정보가 올바르게 반환되는지 확인
    expect(localStorage.getItem('accessToken')).toBe('new-access-token'); // 새로운 액세스 토큰이 저장되었는지 확인
  });

  it('로그아웃 요청이 성공적으로 이루어져야 한다', async () => {
    const response = await apiService.signout();

    expect(response.status).toBe(200);
  });

  it('사용자 정보를 성공적으로 가져와야 한다', async () => {
    localStorage.setItem('accessToken', 'access-token');
    apiService.setAccessToken('access-token');

    const response = await apiService.getUserInfo();

    expect(response.status).toBe(200);
    expect(response.data).toEqual(dummyUser);
  });

  it('모임에서 성공적으로 탈퇴해야 한다', async () => {
    const gatheringId = 123;

    const response = await apiService.leaveGatheringById(gatheringId);

    expect(response.status).toBe(200);
  });
});
