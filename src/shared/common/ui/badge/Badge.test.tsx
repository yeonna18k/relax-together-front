import CommonBadge from '@/shared/common/ui/badge';
import { render, screen } from '@testing-library/react';

describe('Badge Component', () => {
  test('count를 1을 전달하면 화면에 숫자 1 배지가 보인다', () => {
    render(<CommonBadge count={1} />);

    const badge = screen.getByText('1');
    expect(badge).toBeInTheDocument();
  });
  test('count를 1000을 전달하면 화면에 999+ 배지가 보인다', () => {
    render(<CommonBadge count={1000} />);

    const badge = screen.getByText('999+');
    expect(badge).toBeInTheDocument();
  });
});
