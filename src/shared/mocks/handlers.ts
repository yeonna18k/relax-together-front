import { MyGathering } from '@/entities/mypage/model/my-gatherings';
import { contents } from '@/shared/fixture/my-gatherings';
import { dummyUser } from '@/shared/fixture/user';
import { LIMIT } from '@/shared/lib/constants';
import { Response } from '@/shared/model/response';
import { rest } from 'msw';

const handlers = [
  rest.get(`/api/auths/user`, (req, res, ctx) => res(ctx.json(dummyUser))),
  rest.put(`/api/auths/user`, (req, res, ctx) => {
    console.log(req);
    return res(ctx.status(200));
  }),
  rest.post(`/api/auth/signup`, (req, res, ctx) =>
    res(ctx.status(201), ctx.json({ accessToken: 'Access-Token' })),
  ),
  rest.get('/api/gatherings/joined', (req, res, ctx) => {
    // 쿼리 파라미터 가져오기
    const page = parseInt(req.url.searchParams.get('page') || '0');
    const size = parseInt(req.url.searchParams.get('size') || LIMIT.toString());

    // 페이지네이션 처리
    const startIndex = page * size;
    const endIndex = startIndex + size;

    // 해당 페이지의 데이터를 추출
    const pageData = contents.slice(startIndex, endIndex);

    // 다음 페이지가 있는지 확인
    const hasNext = endIndex < contents.length;

    // Mock response 생성
    const mockResponse: Response<MyGathering> = {
      content: pageData,
      hasNext,
      totalElements: contents.length,
    };

    // 응답 반환
    return res(ctx.status(200), ctx.json(mockResponse));
  }),
];

export default handlers;
