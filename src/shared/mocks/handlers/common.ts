import { dummyUser } from '@/shared/fixture/user';
import { BASE_URL } from '@/shared/lib/constants';
import { rest } from 'msw';

export const commonHandler = [
  // 사용자 정보 가져오기 핸들러
  rest.get(`${BASE_URL}/api/auths/me`, (req, res, ctx) => {
    // 토큰 만료 응답 시뮬레이션
    if (req.headers.get('Authorization') === 'Bearer old-access-token') {
      return res(
        ctx.status(401),
        ctx.json({
          message: '해당 유저를 찾을 수 없습니다. 로그인 정보를 확인해 주세요.',
        }),
      );
    }
    // 성공적인 사용자 정보 응답 시뮬레이션
    return res(ctx.status(200), ctx.json(dummyUser));
  }),

  rest.get(`${BASE_URL}/api/auths/refresh-token`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ accessToken: 'new-access-token' }));
  }),

  // 로그아웃 핸들러
  rest.post(`${BASE_URL}/api/auths/logout`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),

  // 모임 탈퇴 핸들러
  rest.delete(
    `${BASE_URL}/api/gatherings/:gatheringId/leave`,
    (req, res, ctx) => {
      return res(ctx.status(200));
    },
  ),
];
