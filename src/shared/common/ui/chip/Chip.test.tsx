import { render, screen } from '@testing-library/react';
import Chip from '.';

describe('Chip Component', () => {
  test('화면에 렌더링이 된다', () => {
    render(<Chip selected={true}>전체</Chip>);

    const chip = screen.getByTestId('chip');
    expect(chip).toHaveTextContent('전체');
    expect(chip).toHaveClass('bg-gray-900 text-white');
  });
});
