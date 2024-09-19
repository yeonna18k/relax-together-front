import { getISOTimeWithOffset } from '@/shared/lib/utils';

describe('getISOTimeWithOffset Function', () => {
  test('0을 넣으면 현재 시간과 동일한 ISOString이 생성된다.', () => {
    const offset = 0;
    const date = new Date();
    const expected = date.toISOString();

    const result = getISOTimeWithOffset(offset);

    expect(result).toBe(expected);
  });
  test('양수를 넣으면 추가한 양수만큼 증가한 ISOString이 생성된다.', () => {
    const offset = 1;
    const date = new Date();
    const expected = new Date(
      date.setHours(date.getHours() + offset),
    ).toISOString();

    const result = getISOTimeWithOffset(offset);

    expect(result).toBe(expected);
  });
  test('음수를 넣으면 추가한 음수만큼 감소한 ISOString이 생성된다.', () => {
    const offset = -1;
    const date = new Date();
    const expected = new Date(
      date.setHours(date.getHours() + offset),
    ).toISOString();

    const result = getISOTimeWithOffset(offset);

    expect(result).toBe(expected);
  });
});
