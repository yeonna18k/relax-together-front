import MypageImage from '@/entities/mypage/ui/common/MypageImage';
import { render, screen } from '@testing-library/react';

describe('MypageImage Component', () => {
  test('image 경로를 주입해주지 않으면 기본 이미지 주소를 가지고 있다.', () => {
    render(<MypageImage />);

    const imageSrc = screen.getByRole('img').getAttribute('src');
    expect(imageSrc).toBe('/assets/default-user.svg');
  });

  test('image 경로를 주입하면 해당 이미지를 가지고 있다.', () => {
    render(<MypageImage image="/assets/user.png" />);

    const imageSrc = screen.getByRole('img').getAttribute('src');
    expect(imageSrc).toMatch(/user.png/);
  });
});
