import CommonApiService from '@/shared/api/service/CommonApiService';
import { dummyUser } from '@/shared/fixture/user';
import useAccessToken from '@/shared/hooks/useAccessToken';

describe('CommonApiService', () => {
  const { setAccessToken } = useAccessToken();
  let apiService: CommonApiService;

  beforeEach(() => {
    apiService = new CommonApiService();
  });

  it('토큰이 만료되었을 때 토큰을 갱신해야 한다', async () => {
    setAccessToken('old-access-token');
    apiService.setAccessToken('old-access-token');

    const response = await apiService.getUserInfo();

    expect(response.data).toEqual(dummyUser);
  });

  it('로그아웃 요청이 성공적으로 이루어져야 한다', async () => {
    const response = await apiService.signout();

    expect(response.status).toBe(200);
  });

  it('사용자 정보를 성공적으로 가져와야 한다', async () => {
    setAccessToken('access-token');

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
