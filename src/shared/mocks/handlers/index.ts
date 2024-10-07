import { gatheringsContents } from '@/shared/fixture/gatherings';
import {
  dummyGatheringsInfo,
  dummyParticipantList,
} from '@/shared/fixture/information';
import { dummyReviews } from '@/shared/fixture/reviews';
import { BASE_URL, LIMIT, REVIEWS_PER_PAGE } from '@/shared/lib/constants';
import { commonHandler } from '@/shared/mocks/handlers/common';
import { mypageHandler } from '@/shared/mocks/handlers/mypage';
import mockInfiniteResponse from '@/shared/mocks/mockInfiniteResponse';
import { Gathering } from '@/shared/model';
import { rest } from 'msw';

const handlers = [
  ...commonHandler,
  ...mypageHandler,
  rest.post(`/api/auth/signup`, (req, res, ctx) =>
    res(ctx.status(201), ctx.json({ accessToken: 'Access-Token' })),
  ),

  rest.delete(`/api/gatherings/:gatheringId/leave`, (req, res, ctx) => {
    const { gatheringId } = req.params;
    return res(
      ctx.status(200),
      ctx.json({
        message: `${gatheringId}의 모임 참여를 취소합니다.`,
      }),
    );
  }),

  rest.get(`/api/gatherings/:id`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(dummyGatheringsInfo));
  }),
  rest.get(`/api/gatherings/:id/participants`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(dummyParticipantList));
  }),

  rest.get(`/api/gatherings/:id/reviews`, (req, res, ctx) => {
    const page = Number(req.url.searchParams.get('page')) || 1;
    const size = Number(req.url.searchParams.get('size')) || REVIEWS_PER_PAGE;

    const startIndex = (page - 1) * size;
    const endIndex = startIndex + size;
    const paginatedReviews = dummyReviews.reviews.slice(startIndex, endIndex);

    return res(
      ctx.status(200),
      ctx.json({
        reviews: paginatedReviews,
        totalElements: dummyReviews.totalElements,
      }),
    );
  }),

  rest.post('/api/gatherings/:id/join', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        message: '모임에 참여했습니다',
      }),
    );
  }),
  rest.delete('/api/gatherings/:id/leave', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        message: '모임 참여를 취소했습니다',
      }),
    );
  }),
  rest.put('/api/gatherings/:id/cancel', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        message: '모임을 취소했습니다',
      }),
    );
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
  rest.delete('/api/gatherings/:id/leave', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        message: '모임 참여를 취소했습니다',
      }),
    );
  }),
  rest.put('/api/gatherings/:id/cancel', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        message: '모임을 취소했습니다',
      }),
    );
  }),
];

export default handlers;
