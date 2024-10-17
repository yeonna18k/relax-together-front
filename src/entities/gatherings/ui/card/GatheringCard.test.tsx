import GatheringCard from '@/entities/gatherings/ui/card';
import { gatheringsContents } from '@/shared/fixture/gatherings';
import {
  formatDate,
  formatTime,
  getTimeUntilDeadline,
} from '@/shared/lib/utils';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('CardList Component', () => {
  // UTC 한국 시간을 적용하기 위해 새로운 변환 함수 추가
  const convertUTCToKST = (date: Date): Date => {
    const KST_OFFSET = 9 * 60 * 60 * 1000;
    return new Date(date.getTime() + KST_OFFSET);
  };

  const mockProps = {
    ...gatheringsContents[2],
    message: getTimeUntilDeadline(
      convertUTCToKST(new Date(gatheringsContents[2].registrationEnd)),
    ),
  };

  it('renders the card title correctly', () => {
    render(<GatheringCard {...mockProps} />);
    expect(
      screen.getByText(`${gatheringsContents[2].name}`),
    ).toBeInTheDocument();
  });

  it('displays the correct location', () => {
    render(<GatheringCard {...mockProps} />);
    expect(
      screen.getByText(gatheringsContents[2].location),
    ).toBeInTheDocument();
  });

  it('shows the correct date and time', () => {
    render(<GatheringCard {...mockProps} />);
    expect(
      screen.getByText(formatDate(gatheringsContents[2].dateTime)),
    ).toBeInTheDocument();
    expect(
      screen.getByText(formatTime(gatheringsContents[2].dateTime)),
    ).toBeInTheDocument();
  });

  it('renders the tag clock message', () => {
    render(<GatheringCard {...mockProps} />);
    expect(
      screen.getByText(
        getTimeUntilDeadline(
          convertUTCToKST(new Date(gatheringsContents[2].registrationEnd)),
        ),
      ),
    ).toBeInTheDocument();
  });
});
