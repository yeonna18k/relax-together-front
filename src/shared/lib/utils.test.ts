import { getKoreaTime, getTimeUntilDeadline } from '@/shared/lib/utils';
import { addDays, addHours, addMinutes } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';

const context = describe;
describe('utils', () => {
  const TEST_TIME = toZonedTime(new Date('2024-10-14 14:00:00'), 'Asia/Seoul');
  context('getTimeUntilDeadline function', () => {
    it('현재 시간보다 58분 더한 시간을 넣으면 "오늘 곧 마감"이 반환된다.', () => {
      const fiftyEightMinutesLater = addMinutes(getKoreaTime(TEST_TIME), 58);

      const result = getTimeUntilDeadline(fiftyEightMinutesLater, TEST_TIME);
      expect(result).toBe('오늘 곧 마감');
    });
    it('현재 시간보다 5시간 더한 시간을 넣으면 "오늘 5시간 후 마감"이 반환된다.', () => {
      const fiveHoursLater = addMinutes(
        addHours(getKoreaTime(TEST_TIME), 5),
        1,
      );
      const result = getTimeUntilDeadline(fiveHoursLater, TEST_TIME);
      expect(result).toBe('오늘 5시간 후 마감');
    });
    it('현재 시간보다 16시간 더한 시간을 넣으면 "16시간 후 마감"이 반환된다.', () => {
      const fourTeenHoursLater = addMinutes(
        addHours(getKoreaTime(TEST_TIME), 16),
        1,
      );
      const result = getTimeUntilDeadline(fourTeenHoursLater, TEST_TIME);
      expect(result).toBe('16시간 후 마감');
    });
    it('현재 시간보다 2일 더한 시간을 넣으면 "2일 후 마감"이 반환된다.', () => {
      const twoDaysLater = addDays(getKoreaTime(TEST_TIME), 2);
      const result = getTimeUntilDeadline(twoDaysLater, TEST_TIME);
      expect(result).toBe('2일 후 마감');
    });
    it('현재 시간보다 1시간을 뺀 시간을 넣으면 "마감되었습니다."이 반환된다.', () => {
      const minusOneHours = addHours(getKoreaTime(TEST_TIME), -1);
      const result = getTimeUntilDeadline(minusOneHours, TEST_TIME);
      expect(result).toBe('마감되었습니다');
    });
  });
});
