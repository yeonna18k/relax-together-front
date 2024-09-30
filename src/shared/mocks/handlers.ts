import {
  MyGathering,
  MyHostedGathering,
  WriteReviewRequest,
} from '@/entities/mypage/model';

import { myGatheringsContents } from '@/shared/fixture/my-gatherings';
import { myHostedGatheringsContents } from '@/shared/fixture/my-hoted-gatherings';
import { myWrittenReviewsContents } from '@/shared/fixture/my-written-reviews';
import { dummyUser } from '@/shared/fixture/user';
import { LIMIT, REVIEWS_PER_PAGE } from '@/shared/lib/constants';
import mockInfiniteResponse from '@/shared/mocks/mockInfiniteResponse';
import { Review } from '@/shared/model/review';
import { rest } from 'msw';
import {
  dummyGatheringsInfo,
  dummyParticipantList,
} from '../fixture/information';
import { dummyReviews } from '../fixture/reviews';

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

    const mockResponse = mockInfiniteResponse<MyGathering>(
      myGatheringsContents,
      page,
      size,
    );

    // 응답 반환
    return res(ctx.status(200), ctx.json(mockResponse));
  }),
  rest.get('/api/reviews/me', (req, res, ctx) => {
    // 쿼리 파라미터 가져오기
    const page = parseInt(req.url.searchParams.get('page') || '0');
    const size = parseInt(req.url.searchParams.get('size') || LIMIT.toString());

    const mockResponse = mockInfiniteResponse<Review>(
      myWrittenReviewsContents,
      page,
      size,
    );

    // 응답 반환
    return res(ctx.status(200), ctx.json(mockResponse));
  }),
  rest.get('/api/gatherings/my-hosted', (req, res, ctx) => {
    // 쿼리 파라미터 가져오기
    const page = parseInt(req.url.searchParams.get('page') || '0');
    const size = parseInt(req.url.searchParams.get('size') || LIMIT.toString());

    const mockResponse = mockInfiniteResponse<MyHostedGathering>(
      myHostedGatheringsContents,
      page,
      size,
    );

    // 응답 반환
    return res(ctx.status(200), ctx.json(mockResponse));
  }),
  rest.delete(`api/gatherings/:gatheringId/leave`, (req, res, ctx) => {
    const { gatheringId } = req.params;
    return res(
      ctx.status(200),
      ctx.json({
        message: `${gatheringId}의 모임 참여를 취소합니다.`,
      }),
    );
  }),
  rest.post(`/api/reviews`, async (req, res, ctx) => {
    const data = (await req.json()) as WriteReviewRequest;
    const { gatheringId, score, comment } = data;

    if (comment.length > 0 && score > 0 && gatheringId >= 0) {
      console.log('Received valid review data:', data);
      return res(
        ctx.status(200),
        ctx.json({ message: 'Review submitted successfully', data }),
      );
    } else {
      console.error('Invalid review data received:', data);
      return res(ctx.status(400), ctx.json({ error: 'Invalid review data' }));
    }
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
];

export default handlers;
