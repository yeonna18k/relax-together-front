import { render, screen } from '@testing-library/react';
import { usePathname } from 'next/navigation';
import TopTap from './index';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

const selectedClassName = 'font-semibold hover:text-green-500 text-green-500';
const defaultClassName = 'font-semibold text-gray-700 hover:text-green-500';

describe('TopTap Component', () => {
  function renderedTopTap() {
    return render(
      <>
        <TopTap path="/gatherings" name="모임 찾기" />
        <TopTap path="/like-gatherings" name="찜한 모임" />
        <TopTap path="/reviews" name="모든 리뷰" />
      </>,
    );
  }
  beforeEach(() => {
    jest.mocked(usePathname).mockImplementation(() => '/gatherings');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('TopTap 컴포넌트가 렌더링된다.', () => {
    renderedTopTap();

    expect(
      screen.getByRole('link', { name: '/gatherings로 이동' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: '/like-gatherings로 이동' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: '/reviews로 이동' }),
    ).toBeInTheDocument();
  });

  test('3개의 TopTap 컴포넌트 중 현재 경로와 전달한 path가 같으면 selectedClassName과 일치한다.', () => {
    renderedTopTap();
    const gatherings = screen.getByLabelText('/gatherings로 이동');
    const likeGatherings = screen.getByLabelText('/like-gatherings로 이동');
    const reviews = screen.getByLabelText('/reviews로 이동');

    expect(gatherings).toHaveClass(selectedClassName);
    expect(likeGatherings).toHaveClass(defaultClassName);
    expect(reviews).toHaveClass(defaultClassName);
  });

  test('현재 경로가 찜한 모임 경로(/like-gatherings)일때 text-gray-900 컬러색 클래스가 추가된다', async () => {
    jest.mocked(usePathname).mockImplementation(() => '/like-gatherings');

    renderedTopTap();

    const likeGatherings = screen.getByRole('link', {
      name: '/like-gatherings로 이동',
    });

    expect(likeGatherings).toHaveClass(selectedClassName);
  });
});
