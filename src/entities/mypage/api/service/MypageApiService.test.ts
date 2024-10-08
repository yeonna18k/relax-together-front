import { mypageApiService } from '@/entities/mypage/api/service/MypageApiService';
import ApiService from '@/shared/api/service/ApiService';
import { myGatheringsContents } from '@/shared/fixture/my-gatherings';
import { myHostedGatheringsContents } from '@/shared/fixture/my-hoted-gatherings';
import { myWrittenReviewsContents } from '@/shared/fixture/my-written-reviews';
import { LIMIT } from '@/shared/lib/constants';

describe('MypageApiService', () => {
  describe('getMyJoinedGatherings를 호출하면', () => {
    it('나의 모임의 목록 데이터를 받을 수 있다.', async () => {
      const result = await mypageApiService.getMyJoinedGatherings({
        page: 0,
        size: LIMIT,
      });
      const response = result.data.content[0];
      const fixture = myGatheringsContents[0];
      expect(result.data.content).toHaveLength(LIMIT);
      expect(response.location).toBe(fixture.location);
      expect(response.capacity).toBe(fixture.capacity);
      expect(response.id).toBe(fixture.id);
      expect(response.imageUrl).toBe(fixture.imageUrl);
    });
  });

  describe('getMyWrittenReviews를 호출하면', () => {
    it('나의 리뷰의 목록 데이터를 받을 수 있다.', async () => {
      const result = await mypageApiService.getMyWrittenReviews({
        page: 0,
        size: LIMIT,
      });
      const response = result.data.content[0];
      const fixture = myWrittenReviewsContents[0];
      expect(result.data.content).toHaveLength(LIMIT);
      expect(response.gatheringLocation).toBe(fixture.gatheringLocation);
      expect(response.comment).toBe(fixture.comment);
      expect(response.gatheringType).toBe(fixture.gatheringType);
      expect(response.score).toBe(fixture.score);
    });
  });

  describe('getMyHostedGatherings를 호출하면 ', () => {
    it('내가 만든 모임의 목록 데이터를 받을 수 있다.', async () => {
      const result = await mypageApiService.getMyHostedGatherings({
        page: 0,
        size: LIMIT,
      });
      const response = result.data.content[0];
      const fixture = myHostedGatheringsContents[0];
      expect(result.data.content).toHaveLength(LIMIT);
      expect(response.location).toBe(fixture.location);
      expect(response.capacity).toBe(fixture.capacity);
      expect(response.id).toBe(fixture.id);
      expect(response.type).toBe(fixture.type);
    });
  });

  describe('updateUser', () => {
    it('회원 정보 수정이 정상적으로 된다.', async () => {
      ApiService.setAccessToken('access-token');
      const result = await mypageApiService.updateUser({
        companyName: 'New Company',
        profileImage: 'new-image.jpg',
      });
      expect(result.status).toBe(204);
    });
  });

  describe('writeReview', () => {
    it('리뷰 작성이 정상적으로 된다.', async () => {
      const result = await mypageApiService.writeReview({
        gatheringId: 1,
        score: 5,
        comment: 'Great gathering!',
      });
      expect(result.status).toBe(200);
    });

    it('리뷰 작성 조건을 충족하지 못하면 에러가 발생된다.', async () => {
      await expect(
        mypageApiService.writeReview({
          gatheringId: 1,
          score: 0,
          comment: '',
        }),
      ).rejects.toThrow();
    });
  });
});
