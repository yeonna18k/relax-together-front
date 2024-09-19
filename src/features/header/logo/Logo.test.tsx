import { render, screen } from '@testing-library/react';
import Logo from './index';

describe('Logo Component', () => {
  test('로고는 모임 찾기 경로를 가지고 있다.', () => {
    render(<Logo />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/gatherings');
  });

  test('로고에 올바른 대체 텍스트가 있다.', () => {
    render(<Logo />);
    const logoText = screen.getByAltText('logo-text');
    const logoIcon = screen.getByAltText('logo-icon');

    expect(logoText).toBeInTheDocument();
    expect(logoIcon).toBeInTheDocument();
  });
});
