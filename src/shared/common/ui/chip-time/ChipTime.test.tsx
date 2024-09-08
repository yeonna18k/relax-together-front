import { render, screen } from '@testing-library/react';
import ChipTime from './index';

describe('Chip Time Component', () => {
  test('화면에 Chip Time 컴포넌트가 렌더링이 된다', () => {
    render(<ChipTime state="enabled" hour={15} minute={0} />);
    const chipTime = screen.getByTestId('chip-time');
    expect(chipTime).toHaveTextContent('15:00');
  });
});
