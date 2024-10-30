import { gatheringsContents } from '@/shared/fixture/gatherings';
import { dummyScore } from '@/shared/fixture/score';
import { BASE_URL, LIMIT } from '@/shared/lib/constants';
import { commonHandler } from '@/shared/mocks/handlers/common';
import { mypageHandler } from '@/shared/mocks/handlers/mypage';
import mockInfiniteResponse from '@/shared/mocks/mockInfiniteResponse';
import { Gathering } from '@/shared/model';
import { rest } from 'msw';
import { gatheringsDetailHandler } from './gatherings-detail';

const handlers = [
  ...commonHandler,
  ...mypageHandler,
  ...gatheringsDetailHandler,

  rest.post(`/api/auth/signup`, (req, res, ctx) =>
    res(ctx.status(201), ctx.json({ accessToken: 'Access-Token' })),
  ),

  rest.get(`/api/reviews/scores`, async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(dummyScore));
  }),

  rest.get(`${BASE_URL}/api/gatherings`, (req, res, ctx) => {
    const page = parseInt(req.url.searchParams.get('page') || '0');
    const size = parseInt(req.url.searchParams.get('size') || LIMIT.toString());

    const mockResponse = mockInfiniteResponse<Gathering>(
      gatheringsContents,
      page,
      size,
    );

    return res(ctx.status(200), ctx.json(mockResponse));
  }),
];

export default handlers;
