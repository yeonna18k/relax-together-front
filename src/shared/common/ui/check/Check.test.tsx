import Check from '@/shared/common/ui/check';
import { render, screen } from '@testing-library/react';

describe('Check Component', () => {
  test('참여자 수가 5명 이상일 때 렌더링 된다.', () => {
    render(<Check participantCount={5} isDark={false} />);

    const check = screen.getByTestId('check');

    expect(check).toBeInTheDocument();
    expect(check).toHaveClass(
      'h-[18px] w-[18px] bg-pink-500 flex cursor-pointer items-center justify-center rounded-full',
    );
  });

  test('참여자 수가 5명 미만일 때 렌더링 되지 않는다.', () => {
    render(<Check participantCount={4} isDark={false} />);

    const check = screen.queryByTestId('check'); //

    expect(check).not.toBeInTheDocument();
  });

  test('isDark가 true일 때 다크 테마로 렌더링 된다.', () => {
    render(<Check participantCount={5} isDark={true} />);

    const check = screen.getByTestId('check');

    expect(check).toBeInTheDocument();
    expect(check).toHaveClass('bg-gray-900');
  });

  test('isDark가 false일 때 라이트 테마로 렌더링 된다.', () => {
    render(<Check participantCount={5} isDark={false} />);

    const check = screen.getByTestId('check');

    expect(check).toBeInTheDocument();
    expect(check).toHaveClass(
      'h-[18px] w-[18px] bg-pink-500 flex cursor-pointer items-center justify-center rounded-full',
    );
  });

  test('isDark prop에 따라 CheckIcon에 색을 전달한다.', () => {
    const { rerender } = render(<Check participantCount={5} isDark={false} />);
    let checkIcon = screen.getByTestId('check-icon');
    expect(checkIcon).toHaveClass('stroke-white stroke-2');

    rerender(<Check participantCount={5} isDark={true} />);
    checkIcon = screen.getByTestId('check-icon');
    expect(checkIcon).toHaveClass('stroke-pink-500 stroke-2');
  });
});
