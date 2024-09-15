import { render, screen } from '@testing-library/react';
import useIsMobile from '../../shared/hooks/useIsMobile';
import Logo from './index';
// Mock the useIsMobile hook
jest.mock('../../shared/hooks/useIsMobile');

describe('Logo Component', () => {
  test('Logo 컴포넌트가 렌더링 된다.', () => {
    jest.mocked(useIsMobile).mockReturnValue(false);
    render(<Logo />);
    const logoImage = screen.getByAltText('같이 달램');
    expect(logoImage).toBeInTheDocument();
  });
  test('모바일 화면일때 작은 로고가 렌더링된다.', () => {
    jest.mocked(useIsMobile).mockReturnValue(true);
    render(<Logo />);
    const logoImage = screen.getByAltText('같이 달램');
    expect(logoImage).toHaveAttribute('src', '/assets/logo-small.svg');
    expect(logoImage).toHaveAttribute('width', '56');
    expect(logoImage).toHaveAttribute('height', '27');
  });

  test('모바일을 초과하는 화면일 경우 큰 로고가 렌더링된다.', () => {
    jest.mocked(useIsMobile).mockReturnValue(false);
    render(<Logo />);
    const logoImage = screen.getByAltText('같이 달램');
    expect(logoImage).toHaveAttribute('src', '/assets/logo-large.svg');
    expect(logoImage).toHaveAttribute('width', '73');
    expect(logoImage).toHaveAttribute('height', '35');
  });

  test('로고는 모임 찾기 경로를 가지고 있다.', () => {
    render(<Logo />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/gatherings');
  });

  test('로고에 올바른 대체 텍스트가 있다.', () => {
    render(<Logo />);
    const logoImage = screen.getByAltText('같이 달램');
    expect(logoImage).toBeInTheDocument();
  });
});
