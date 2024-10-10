import { getKoreaTime, getTimeUntilDeadline } from '@/shared/lib/utils';
import { addDays, addHours, addMinutes } from 'date-fns';

const context = describe;
describe('utils', () => {
  context('getTimeUntilDeadline function', () => {
    it('현재 시간보다 58분 더한 시간을 넣으면 "오늘 곧 마감"이 반환된다.', () => {
      const fiftyEightMinutesLater = addMinutes(getKoreaTime(), 58);
      const result = getTimeUntilDeadline(fiftyEightMinutesLater);
      expect(result).toBe('오늘 곧 마감');
    });
    it('현재 시간보다 1시간 더한 시간을 넣으면 "오늘 1시간 후 마감"이 반환된다.', () => {
      const fiveHoursLater = addMinutes(addHours(getKoreaTime(), 1), 1);
      const result = getTimeUntilDeadline(fiveHoursLater);
      expect(result).toBe('오늘 1시간 후 마감');
    });
    it('현재 시간보다 14시간 더한 시간을 넣으면 "14시간 후 마감"이 반환된다.', () => {
      const fourTeenHoursLater = addMinutes(addHours(getKoreaTime(), 14), 1);
      const result = getTimeUntilDeadline(fourTeenHoursLater);
      expect(result).toBe('14시간 후 마감');
    });
    it('현재 시간보다 2일 더한 시간을 넣으면 "2일 후 마감"이 반환된다.', () => {
      const twoDaysLater = addDays(getKoreaTime(), 2);
      const result = getTimeUntilDeadline(twoDaysLater);
      expect(result).toBe('2일 후 마감');
    });
    it('현재 시간보다 1시간을 뺀 시간을 넣으면 "마감되었습니다."이 반환된다.', () => {
      const minusOneHours = addHours(getKoreaTime(), -1);
      const result = getTimeUntilDeadline(minusOneHours);
      expect(result).toBe('마감되었습니다');
    });
  });
});
