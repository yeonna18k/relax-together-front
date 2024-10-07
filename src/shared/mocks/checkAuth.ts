import {
  MockedResponse,
  ResponseComposition,
  RestContext,
  RestRequest,
} from 'msw';
type MaybePromise<T> = T | Promise<T>;
type AuthResult = {
  isAuthenticated: boolean;
  errorResponse?: MaybePromise<MockedResponse<any>>;
};

export const checkAuth = (
  req: RestRequest,
  res: ResponseComposition,
  ctx: RestContext,
): AuthResult => {
  const authHeader = req.headers.get('Authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return {
      isAuthenticated: false,
      errorResponse: res(
        ctx.status(401),
        ctx.json({
          error: 'AUTHENTICATION_FAIL',
          message: '해당 유저를 찾을 수 없습니다. 로그인 정보를 확인해 주세요.',
        }),
      ),
    };
  }
  return { isAuthenticated: true };
};
