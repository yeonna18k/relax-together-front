import { myWrittenReviewsContents } from '@/shared/fixture/my-written-reviews';
import { Page } from '@/shared/lib/constants';
import { render, screen } from '@testing-library/react';
import ReviewCard from '.';

describe('Review Card Component', () => {
  const mockProps = myWrittenReviewsContents[0];

  test('화면에 Review Card 컴포넌트의 내용(content)과 별점이 렌더링 된다', () => {
    render(<ReviewCard {...mockProps} page={Page.MYPAGE} />);

    const reviewContent = screen.getByText(mockProps.comment);
    const listItems = screen.getAllByRole('listitem');

    expect(reviewContent).toBeInTheDocument();
    expect(listItems).toHaveLength(5);
  });

  test('마이페이지에서는 리뷰를 남긴 장소, 날짜가 렌더링 된다', () => {
    render(<ReviewCard {...mockProps} page={Page.MYPAGE} />);

    expect(screen.getByText(mockProps.gatheringLocation)).toBeInTheDocument();
    expect(screen.getByText('2024. 09. 23.')).toBeInTheDocument();
  });

  test('모든 리뷰페이지에서는 리뷰를 남긴 유저의 이름과 장소, 날짜가 렌더링 된다', () => {
    render(<ReviewCard {...mockProps} page={Page.ALL_REVIEWS} />);

    expect(screen.getByText(mockProps.userName)).toBeInTheDocument();
    expect(screen.getByText(mockProps.gatheringLocation)).toBeInTheDocument();
    expect(screen.getByText('2024. 09. 23.')).toBeInTheDocument();
  });

  test('모임 상세페이지에서는 리뷰를 남긴 유저의 이름, 날짜가 렌더링 된다', () => {
    render(<ReviewCard {...mockProps} page={Page.GATHERING_DETAIL} />);

    expect(screen.getByText(mockProps.userName)).toBeInTheDocument();
    expect(screen.getByText('2024. 09. 23.')).toBeInTheDocument();
  });
});
