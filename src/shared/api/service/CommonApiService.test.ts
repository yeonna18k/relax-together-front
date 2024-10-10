import { BASE_URL } from '@/shared/lib/constants';
import { AxiosResponse } from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import CommonApiService from './CommonApiService';

describe('CommonApiService', () => {
  let apiService: CommonApiService;
  let mock: AxiosMockAdapter;

  beforeEach(() => {
    apiService = new CommonApiService();
    mock = new AxiosMockAdapter(apiService['axiosInstance']);
  });

  afterEach(() => {
    mock.reset();
    jest.restoreAllMocks(); // 모든 모의함수를 초기화
  });

  it('토큰이 만료되었을 때 토큰을 갱신해야 한다', async () => {
    // refreshToken 메서드를 모킹하여 새로운 액세스 토큰 반환
    const refreshTokenSpy = jest
      .spyOn(apiService, 'refreshToken')
      .mockResolvedValue({
        data: { accessToken: 'new-access-token' },
        status: 200,
        statusText: 'OK',
        headers: {},
        config: {},
      } as AxiosResponse);

    localStorage.setItem('accessToken', 'old-access-token');
    apiService.setAccessToken('old-access-token');

    // 첫 번째 요청은 401 응답을 시뮬레이션하여 토큰 만료를 나타냅니다.
    mock.onGet(`${BASE_URL}/api/auths/me`).replyOnce(401, {
      message: '해당 유저를 찾을 수 없습니다. 로그인 정보를 확인해 주세요.',
    });

    // 토큰 갱신 후 두 번째 요청은 성공적인 사용자 정보 응답을 시뮬레이션합니다.
    mock
      .onGet(`${BASE_URL}/api/auths/me`)
      .reply(200, { id: 1, name: 'Test User' });

    const response = await apiService.getUserInfo();

    expect(refreshTokenSpy).toHaveBeenCalled(); // refreshToken 메서드가 호출되었는지 확인
    expect(response.data).toEqual({ id: 1, name: 'Test User' }); // 사용자 정보가 올바르게 반환되는지 확인
    expect(localStorage.getItem('accessToken')).toBe('new-access-token'); // 새로운 액세스 토큰이 저장되었는지 확인
  });

  it('로그아웃 요청이 성공적으로 이루어져야 한다', async () => {
    mock.onPost(`${BASE_URL}/api/auths/logout`).reply(200);

    const response = await apiService.signout();

    expect(response.status).toBe(200);
  });

  it('사용자 정보를 성공적으로 가져와야 한다', async () => {
    mock
      .onGet(`${BASE_URL}/api/auths/me`)
      .reply(200, { id: 1, name: 'Test User' });

    const response = await apiService.getUserInfo();

    expect(response.status).toBe(200);
    expect(response.data).toEqual({ id: 1, name: 'Test User' });
  });

  it('모임에서 성공적으로 탈퇴해야 한다', async () => {
    const gatheringId = 123;
    mock.onDelete(`${BASE_URL}/api/gatherings/${gatheringId}/leave`).reply(200);

    const response = await apiService.leaveGatheringById(gatheringId);

    expect(response.status).toBe(200);
  });
});
