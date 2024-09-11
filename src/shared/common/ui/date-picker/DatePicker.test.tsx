import DatePicker from '@/shared/common/ui/date-picker';
import { render, screen } from '@testing-library/react';

describe('DatePicker Component', () => {
  test('화면에 렌더링이 된다.', () => {
    const setDate = jest.fn();
    const date = undefined;
    render(<DatePicker date={date} setDate={setDate} />);

    const placeholder = screen.getByText('날짜 선택');

    expect(placeholder).toBeInTheDocument();
  });
});
