import LikeButton from '@/shared/common/ui/like-button';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('LikeButton Component', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // 이전 모의 객체들을 초기화합니다
  });

  test('화면에 렌더링 된다.', () => {
    render(<LikeButton gatheringId="1" />);

    const likeButton = screen.getByRole('button');

    expect(likeButton).toBeInTheDocument();
  });

  test('좋아요 버튼을 클릭하면 애니메이션 className이 추가되고, 취소하면 애니메이션 className이 사라진다.', async () => {
    render(<LikeButton gatheringId="1" />);

    const likeButton = screen.getByRole('button');
    const likeHeartIcon = screen.getByTestId('like-heart-icon');

    await userEvent.click(likeButton);
    expect(likeHeartIcon).toHaveClass('animate-fillHeart');

    await userEvent.click(likeButton);
    expect(likeHeartIcon).not.toHaveClass('animate-fillHeart');
  });

  test('좋아요 버튼을 클릭하면 localStorage의 liked-count가 증가되고, 취소하면 liked-count 감소한다. ', async () => {
    render(<LikeButton gatheringId="1" />);

    const likeButton = screen.getByRole('button');

    await userEvent.click(likeButton);
    expect(localStorage.getItem('liked-count')).toBe('1');

    await userEvent.click(likeButton);
    expect(localStorage.getItem('liked-count')).toBe('0');
  });

  test('좋아요 버튼을 클릭하면 localStorage의 liked-gatherings-ids에 아이디가 추가되고, 취소하면 liked-gatherings-ids는 빈 배열이 된다.', async () => {
    render(<LikeButton gatheringId="1" />);

    const likeButton = screen.getByRole('button');

    await userEvent.click(likeButton);
    expect(localStorage.getItem('liked-gatherings-ids')).toBe('["1"]');

    await userEvent.click(likeButton);
    expect(localStorage.getItem('liked-gatherings-ids')).toBe('[]');
  });
});
