import { render, screen } from '@testing-library/react';
import TagClock from './index';

describe('TagClock Component', () => {
  test('컴포넌트가 화면에 렌더링 된다.', () => {
    render(<TagClock message="오늘 21시 마감" />);
    const messageElement = screen.getByText('오늘 21시 마감');
    expect(messageElement).toBeInTheDocument();
  });

  test('variant가 default일 때 컴포넌트가 기본 스타일을 가진다.', () => {
    render(<TagClock message="오늘 21시 마감" variant="default" />);
    const tagClockElement = screen.getByTestId('tag-clock'); // data-testid로 요소 선택
    expect(tagClockElement).toHaveClass('rounded-bl-[12px]');
  });

  test('variant가 rounded일 때 컴포넌트가 둥근 스타일을 가진다.', () => {
    render(<TagClock message="오늘 21시 마감" variant="rounded" />);
    const tagClockElement = screen.getAllByTestId('tag-clock');
    expect(tagClockElement[0]).toHaveClass('rounded-tr-md');
  });

  test('아이콘이 화면에 렌더링 된다.', () => {
    render(<TagClock message="오늘 21시 마감" />);
    const iconElement = screen.getByAltText('Clock Icon');
    expect(iconElement).toBeInTheDocument();
  });
});
