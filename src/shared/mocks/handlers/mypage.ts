import {
  MyGathering,
  MyHostedGathering,
  WriteReviewRequest,
} from '@/entities/mypage/model';
import { myGatheringsContents } from '@/shared/fixture/my-gatherings';
import { myHostedGatheringsContents } from '@/shared/fixture/my-hoted-gatherings';
import { myWrittenReviewsContents } from '@/shared/fixture/my-written-reviews';
import { BASE_URL, LIMIT } from '@/shared/lib/constants';
import mockInfiniteResponse from '@/shared/mocks/mockInfiniteResponse';
import { Review, UpdateUserRequest } from '@/shared/model';
import { rest } from 'msw';

export const mypageHandler = [
  // 내가 주최한 모임 목록 조회
  rest.get(`${BASE_URL}/api/gatherings/my-hosted`, (req, res, ctx) => {
    const page = parseInt(req.url.searchParams.get('page') || '0');
    const size = parseInt(req.url.searchParams.get('size') || LIMIT.toString());

    const mockResponse = mockInfiniteResponse<MyHostedGathering>(
      myHostedGatheringsContents,
      page,
      size,
    );

    return res(ctx.status(200), ctx.json(mockResponse));
  }),
  // 내가 참여한 모임 목록 조회
  rest.get(`${BASE_URL}/api/gatherings/joined`, (req, res, ctx) => {
    const page = parseInt(req.url.searchParams.get('page') || '0');
    const size = parseInt(req.url.searchParams.get('size') || LIMIT.toString());

    const mockResponse = mockInfiniteResponse<MyGathering>(
      myGatheringsContents,
      page,
      size,
    );

    return res(ctx.status(200), ctx.json(mockResponse));
  }),
  // 내가 작성한 리뷰 목록 조회
  rest.get(`${BASE_URL}/api/reviews/me`, (req, res, ctx) => {
    // 쿼리 파라미터 가져오기
    const page = parseInt(req.url.searchParams.get('page') || '0');
    const size = parseInt(req.url.searchParams.get('size') || LIMIT.toString());

    const mockResponse = mockInfiniteResponse<Review>(
      myWrittenReviewsContents,
      page,
      size,
    );

    return res(ctx.status(200), ctx.json(mockResponse));
  }),
  // 리뷰 작성
  rest.post(`${BASE_URL}/api/reviews`, async (req, res, ctx) => {
    const data = (await req.json()) as WriteReviewRequest;
    const { gatheringId, score, comment } = data;

    if (comment.length > 0 && score > 0 && gatheringId >= 0) {
      return res(
        ctx.status(200),
        ctx.json({ message: 'Review submitted successfully', data }),
      );
    } else {
      return res(ctx.status(400), ctx.json({ error: 'Invalid review data' }));
    }
  }),
  rest.put(`${BASE_URL}/api/auths/me`, async (req, res, ctx) => {
    const data = (await req.json()) as UpdateUserRequest;
    const { companyName, profileImage } = data;

    return res(ctx.status(204));
  }),
];
