import { fireEvent, render, screen } from '@testing-library/react';
import BoxSelect from '.';

describe('Box Select Component', () => {
  test('화면에 Box Select 컴포넌트가 렌더링이 된다', () => {
    render(<BoxSelect group="달램핏" text="오피스 스트레칭" />);

    const boxSelect = screen.getByTestId('box-select');
    expect(boxSelect).toHaveTextContent('달램핏');
    expect(boxSelect).toHaveTextContent('오피스 스트레칭');
  });

  test('초기 상태에서 체크박스가 체크되지 않았고 배경이 회색이다', () => {
    render(<BoxSelect group="달램핏" text="오피스 스트레칭" />);

    const boxSelect = screen.getByTestId('box-select');
    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).not.toBeChecked();
    expect(boxSelect).toHaveClass('bg-gray-50');
  });

  test('체크박스를 클릭하면 상태가 변경되고 스타일이 업데이트된다', () => {
    render(<BoxSelect group="달램핏" text="오피스 스트레칭" />);

    const boxSelect = screen.getByTestId('box-select');
    const checkbox = screen.getByRole('checkbox');

    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(boxSelect).toHaveClass('bg-gray-900');
  });

  // TODO: 반응형 디자인 테스트
});
