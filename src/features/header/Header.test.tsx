import Header from '@/features/header';
import { navList } from '@/features/header/NavList';
import { render, screen } from '@testing-library/react';

describe('Header Component', () => {
  test('화면에 렌더링이 된다.', () => {
    render(<Header />);
    const logoText = screen.getByAltText('relax-together-logo');

    expect(logoText).toBeInTheDocument();

    navList.forEach(item => {
      const linkElement = screen
        .getByText(new RegExp(item.name, 'i'))
        .closest('a');

      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute('href', item.path);
    });
  });
});
