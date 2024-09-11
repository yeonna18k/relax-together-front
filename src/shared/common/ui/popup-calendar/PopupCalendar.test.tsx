import PopupCalendar from '@/shared/common/ui/popup-calendar';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('PopupCalendar Component', () => {
  test('팝업 캘린더가 렌더링된다.', () => {
    const mockSetDate = jest.fn();
    const currentMonth = new Date().toLocaleString('en-US', { month: 'long' });
    const currentYear = new Date().getFullYear();
    render(<PopupCalendar setDate={mockSetDate} />);

    const headerLabel = screen.getByText(`${currentMonth} ${currentYear}`);
    expect(headerLabel).toBeInTheDocument();
  });

  test('적용 버튼을 누르면 mockSetDate 함수가 호출된다.', async () => {
    const mockSetDate = jest.fn();
    render(<PopupCalendar setDate={mockSetDate} />);

    const submitButton = screen.getByRole('button', { name: '적용' });

    await userEvent.click(submitButton);

    expect(mockSetDate).toHaveBeenCalledTimes(1);
  });

  test('초기화 버튼을 누르면 mockSetDate 함수가 호출된다.', async () => {
    const mockSetDate = jest.fn();
    render(<PopupCalendar setDate={mockSetDate} />);

    const resetButton = screen.getByRole('button', { name: '초기화' });

    await userEvent.click(resetButton);

    expect(mockSetDate).toHaveBeenCalledTimes(1);
  });
});
