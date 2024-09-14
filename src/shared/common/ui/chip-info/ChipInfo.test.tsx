import { render, screen } from '@testing-library/react';
import ChipInfo from './index';

describe('Chip Info Component', () => {
  test('화면에 Chip Info 컴포넌트가 렌더링 된다', () => {
    render(<ChipInfo type="date">1월 7일</ChipInfo>);

    const chipInfo = screen.getByTestId('chip-info');
    expect(chipInfo).toHaveTextContent('1월 7일');
  });
});
