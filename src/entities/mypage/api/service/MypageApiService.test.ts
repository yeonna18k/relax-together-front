import { mypageApiService } from '@/entities/mypage/api/service/MypageApiService';
import ApiService from '@/shared/api/service/ApiService';
import { myGatheringsContents } from '@/shared/fixture/my-gatherings';
import { myHostedGatheringsContents } from '@/shared/fixture/my-hoted-gatherings';
import { myWrittenReviewsContents } from '@/shared/fixture/my-written-reviews';

describe('MypageApiService', () => {
  describe('getMyJoinedGatherings', () => {
    it('나의 모임의 목록이 정상적으로 호출된다.', async () => {
      const result = await mypageApiService.getMyJoinedGatherings({
        page: 0,
        size: 10,
      });
      expect(result.data.content).toHaveLength(10);
      expect(result.data.content[0].location).toBe(
        myGatheringsContents[0].location,
      );
    });
  });

  describe('getMyWrittenReviews', () => {
    it('나의 리뷰의 목록이 정상적으로 호출된다.', async () => {
      const result = await mypageApiService.getMyWrittenReviews({
        page: 0,
        size: 10,
      });
      expect(result.data.content).toHaveLength(10);
      expect(result.data.content[0].gatheringLocation).toBe(
        myWrittenReviewsContents[0].gatheringLocation,
      );
    });
  });

  describe('getMyHostedGatherings', () => {
    it('내가 만든 모임의 목록이 정상적으로 호출된다.', async () => {
      const result = await mypageApiService.getMyHostedGatherings({
        page: 0,
        size: 10,
      });
      expect(result.data.content).toHaveLength(10);
      expect(result.data.content[0].location).toBe(
        myHostedGatheringsContents[0].location,
      );
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
