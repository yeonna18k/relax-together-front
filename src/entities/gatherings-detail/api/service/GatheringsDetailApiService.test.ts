import {
  dummyGatheringsInfo,
  dummyParticipantList,
} from '@/shared/fixture/information';
import { dummyReviews } from '@/shared/fixture/reviews';
import { LIMIT } from '@/shared/lib/constants';
import { gatheringsDetailApiService } from './GatheringsDetailApiService';

describe('GatheringsDetailApiService', () => {
  describe('getGatheringsInfo를 호출하면', () => {
    it('모임 상세 조회를 할 수 있다.', async () => {
      const result = await gatheringsDetailApiService.getGatheringsInfo('0');
      const fixture = dummyGatheringsInfo;
      expect(result.id).toBe(fixture.id);
      expect(result.hostUser).toBe(fixture.hostUser);
      expect(result.location).toBe(fixture.location);
      expect(result.capacity).toBe(fixture.capacity);
      expect(result.imageUrl).toBe(fixture.imageUrl);
    });

    it('잘못된 id로 호출 시 에러가 발생한다.', async () => {
      await expect(
        gatheringsDetailApiService.getGatheringsInfo('invalid-id'),
      ).rejects.toThrow();
    });
  });

  describe('getParticipantList를 호출하면', () => {
    it('특정 모임의 참가자 목록 조회를 할 수 있다.', async () => {
      const result = await gatheringsDetailApiService.getParticipantList({
        id: '0',
        page: 0,
        size: LIMIT,
      });
      const response = result.participants[0];
      const fixture = dummyParticipantList.participants[0];
      expect(response.userId).toBe(fixture.userId);
      expect(response.name).toBe(fixture.name);
      expect(response.email).toBe(fixture.email);
      expect(response.companyName).toBe(fixture.companyName);
      expect(response.profileImage).toBe(fixture.profileImage);
      expect(response.joinedAt).toBe(fixture.joinedAt);
    });

    it('잘못된 id로 호출 시 에러가 발생한다.', async () => {
      await expect(
        gatheringsDetailApiService.getParticipantList({
          id: 'invalid-id',
          page: 0,
          size: LIMIT,
        }),
      ).rejects.toThrow();
    });
  });

  describe('getReviewList를 호출하면', () => {
    it('모임 리뷰 목록 조회를 할 수 있다.', async () => {
      const result = await gatheringsDetailApiService.getReviewList({
        id: '0',
        currentPage: 0,
      });
      const response = result.reviews[0];
      const fixture = dummyReviews.reviews[0];
      expect(response.score).toBe(fixture.score);
      expect(response.comment).toBe(fixture.comment);
      expect(response.userProfileImage).toBe(fixture.userProfileImage);
      expect(response.userName).toBe(fixture.userName);
      expect(response.createdDate).toBe(fixture.createdDate);
    });

    it('잘못된 id로 호출 시 에러가 발생한다.', async () => {
      await expect(
        gatheringsDetailApiService.getReviewList({
          id: 'invalid-id',
          currentPage: 0,
        }),
      ).rejects.toThrow();
    });
  });

  describe('joinGathering를 호출하면', () => {
    it('모임 참여를 할 수 있다.', async () => {
      const response = await gatheringsDetailApiService.joinGathering('0');
      expect(response.status).toBe(200);
    });

    it('잘못된 id로 호출 시 에러가 발생한다.', async () => {
      await expect(
        gatheringsDetailApiService.joinGathering('invalid-id'),
      ).rejects.toThrow();
    });
  });

  describe('leaveGathering를 호출하면', () => {
    it('모임 참여 취소를 할 수 있다.', async () => {
      const response = await gatheringsDetailApiService.leaveGathering('0');
      expect(response.status).toBe(200);
    });
  });

  describe('cancelGathering를 호출하면', () => {
    it('모임 취소를 할 수 있다.', async () => {
      const response = await gatheringsDetailApiService.cancelGathering('0');
      expect(response.status).toBe(200);
    });

    it('잘못된 id로 호출 시 에러가 발생한다.', async () => {
      await expect(
        gatheringsDetailApiService.cancelGathering('invalid-id'),
      ).rejects.toThrow();
    });
  });
});
