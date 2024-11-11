import {
  dummyGatheringsInfo,
  dummyParticipantList,
} from '@/shared/fixture/information';
import { dummyReviews } from '@/shared/fixture/reviews';
import { BASE_URL, REVIEWS_PER_PAGE } from '@/shared/lib/constants';
import { rest } from 'msw';

export const gatheringsDetailHandler = [
  // 모임 상세 조회
  rest.get(`${BASE_URL}/api/gatherings/:id`, (req, res, ctx) => {
    const { id } = req.params;
    if (id === 'invalid-id') {
      return res(
        ctx.status(404),
        ctx.json({ message: '잘못된 ID로 모임을 찾을 수 없습니다' }),
      );
    }
    return res(ctx.status(200), ctx.json(dummyGatheringsInfo));
  }),

  // 특정 모임의 참가자 목록 조회
  rest.get(`${BASE_URL}/api/gatherings/:id/participants`, (req, res, ctx) => {
    const { id } = req.params;
    if (id === 'invalid-id') {
      return res(
        ctx.status(404),
        ctx.json({ message: '잘못된 ID로 참가자 목록을 찾을 수 없습니다' }),
      );
    }
    return res(ctx.status(200), ctx.json(dummyParticipantList));
  }),

  // 모임 리뷰 목록 조회
  rest.get(`${BASE_URL}/api/gatherings/:id/reviews`, (req, res, ctx) => {
    const { id } = req.params;

    if (id === 'invalid-id') {
      return res(
        ctx.status(404),
        ctx.json({ message: '잘못된 ID로 리뷰 목록을 찾을 수 없습니다' }),
      );
    }

    const page = Number(req.url.searchParams.get('page')) || 0;
    const size = Number(req.url.searchParams.get('size')) || REVIEWS_PER_PAGE;

    const startIndex = page * size;
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

  // 모임 참여
  rest.post(`${BASE_URL}/api/gatherings/:id/join`, (req, res, ctx) => {
    const { id } = req.params;
    if (id === 'invalid-id') {
      return res(
        ctx.status(404),
        ctx.json({ data: '잘못된 ID로 모임에 참여할 수 없습니다' }),
      );
    }
    return res(
      ctx.status(200),
      ctx.json({
        data: '모임에 참여했습니다.',
      }),
    );
  }),

  // 모임 참여 취소
  rest.delete(`${BASE_URL}/api/gatherings/:id/leave`, (req, res, ctx) => {
    const { id } = req.params;
    if (id === 'invalid-id') {
      return res(
        ctx.status(404),
        ctx.json({ data: '잘못된 ID로 모임 참여를 취소할 수 없습니다' }),
      );
    }
    return res(
      ctx.status(200),
      ctx.json({
        data: '모임 참여를 취소 합니다.',
      }),
    );
  }),

  // 모임 취소
  rest.put(`${BASE_URL}/api/gatherings/:id/cancel`, (req, res, ctx) => {
    const { id } = req.params;
    if (id === 'invalid-id') {
      return res(
        ctx.status(404),
        ctx.json({ data: '잘못된 ID로 모임을 취소할 수 없습니다' }),
      );
    }
    return res(
      ctx.status(200),
      ctx.json({
        data: '모임을 취소했습니다.',
      }),
    );
  }),
];
