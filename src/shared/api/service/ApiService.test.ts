import AxiosMockAdapter from 'axios-mock-adapter';
import ApiService from './ApiService';

describe('ApiService', () => {
  let apiService: ApiService;
  let mock: AxiosMockAdapter;

  beforeEach(() => {
    apiService = ApiService.getInstance();
    mock = new AxiosMockAdapter(apiService['axiosInstance']);
  });

  afterEach(() => {
    mock.reset();
    jest.restoreAllMocks(); // 모든 모의함수를 초기화
  });

  it('액세스 토큰이 설정된 경우 권한 부여 헤더를 첨부해야 한다.', async () => {
    const token = 'test-token';
    apiService.setAccessToken(token);

    mock.onGet('/test').reply(config => {
      expect(config.headers?.['Authorization']).toBe(`Bearer ${token}`);
      return [200, {}];
    });

    await apiService.get('/test');
  });

  it('GET 요청을 하고 응답을 받아야 한다.', async () => {
    mock.onGet('/test').reply(200, { success: true });

    const response = await apiService.get('/test');
    expect(response.status).toBe(200);
    expect(response.data).toEqual({ success: true });
  });

  it('POST 요청을 하고 응답을 받아야 한다.', async () => {
    const postData = { name: 'John Doe' };
    mock.onPost('/test', postData).reply(201, { id: 1, ...postData });

    const response = await apiService.post('/test', postData);
    expect(response.status).toBe(201);
    expect(response.data).toEqual({ id: 1, name: 'John Doe' });
  });

  it('요청 interceptor 오류를 처리해야 한다.', async () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

    // 요청 인터셉터에서 직접 오류를 발생시키도록 설정
    apiService['axiosInstance'].interceptors.request.use(() => {
      throw new Error('Request Interceptor Error');
    });

    try {
      await apiService.get('/test');
    } catch (error) {
      // 여기서는 실제로 request interceptor에서 발생한 에러가 로그되는지 확인
      expect(consoleSpy).toHaveBeenCalledWith(
        'Request interceptor error',
        expect.objectContaining({
          message: 'Request Interceptor Error',
        }),
      );
    }

    consoleSpy.mockRestore();
  });
});
