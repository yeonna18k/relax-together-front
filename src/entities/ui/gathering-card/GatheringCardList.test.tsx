import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import GatheringCardList, { GatheringCardProps } from './index';

describe('CardList Component', () => {
  const mockProps: GatheringCardProps = {
    image: '/assets/mind-full-ness.svg',
    message: '오늘 21시 마감',
    type: '마인드풀니스',
    location: '을지로3가',
    date: '1월 7일',
    time: '17:30',
    value: 20,
    gatheringId: '1',
  };

  it('renders the card title correctly', () => {
    render(<GatheringCardList {...mockProps} />);

    expect(screen.getByText('달램핏 마인드풀니스')).toBeInTheDocument();
  });

  it('displays the correct location', () => {
    render(<GatheringCardList {...mockProps} />);

    expect(screen.getByText('을지로3가')).toBeInTheDocument();
  });

  it('shows the correct date and time', () => {
    render(<GatheringCardList {...mockProps} />);

    expect(screen.getByText('1월 7일')).toBeInTheDocument();
    expect(screen.getByText('17:30')).toBeInTheDocument();
  });

  it('renders the tag clock message', () => {
    render(<GatheringCardList {...mockProps} />);

    expect(screen.getByText('오늘 21시 마감')).toBeInTheDocument();
  });
});
