import { render, screen } from '@testing-library/react';
import ChipState from '.';

describe('Chip State Component', () => {
  test('화면에 Chip State 컴포넌트가 렌더링 된다', () => {
    render(<ChipState state="scheduled" />);

    const chipState = screen.getByTestId('chip-state');
    expect(chipState).toHaveTextContent('이용 예정');
  });
});
