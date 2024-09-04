import add from '@/shared/utils';

describe('utils test', () => {
  test('add function', () => {
    const sum = add(1, 2);
    expect(sum).toBe(3);
  });
});
