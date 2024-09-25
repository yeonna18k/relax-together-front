import TabSection from '@/features/mypage/ui/tab-section';
import { mockUseSearchParams } from '@/shared/mocks/mockUseSearchParams';
import { render, screen } from '@testing-library/react';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn(),
  usePathname: jest.fn(),
  useParams: jest.fn(),
}));

const activeColor =
  'relative px-2.5 pb-1.5 pt-2 text-gray-900 text-lg font-semibold';
const inactiveColor =
  'relative px-2.5 pb-1.5 pt-2 text-gray-400 text-lg font-semibold';

describe('TabSection Component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  test('현재 주소가 /mypage?subPage=my-gatherings이면 나의 모임이 활성화 된다.', () => {
    mockUseSearchParams('?subPage=my-gatherings');
    render(<TabSection />);
    const myGatherings = screen.getAllByRole('listitem')[0];
    const myReviews = screen.getAllByRole('listitem')[1];
    const myHostedGatherings = screen.getAllByRole('listitem')[2];

    expect(myGatherings).toHaveClass(activeColor);
    expect(myReviews).toHaveClass(inactiveColor);
    expect(myHostedGatherings).toHaveClass(inactiveColor);
  });
  test('현재 주소가 /mypage?subPage=my-reviews이면 나의 리뷰가 활성화 되고, ReviewFilterButtonGroup이 활성화 된다..', () => {
    mockUseSearchParams('?subPage=my-reviews&filter=completed');
    render(<TabSection />);
    const myGatherings = screen.getAllByRole('listitem')[0];
    const myReviews = screen.getAllByRole('listitem')[1];
    const myHostedGatherings = screen.getAllByRole('listitem')[2];

    const pendingButton = screen.getByText('작성 가능한 리뷰');
    const completedButton = screen.getByText('작성한 리뷰');

    expect(myGatherings).toHaveClass(inactiveColor);
    expect(myReviews).toHaveClass(activeColor);
    expect(myHostedGatherings).toHaveClass(inactiveColor);

    expect(pendingButton).toBeInTheDocument();
    expect(completedButton).toBeInTheDocument();
  });
  test('현재 주소가 /mypage?subPage=my-hosted-gatherings이면 내가 만든 모임이 활성화 된다.', () => {
    mockUseSearchParams('?subPage=my-hosted-gatherings');
    render(<TabSection />);
    const myGatherings = screen.getAllByRole('listitem')[0];
    const myReviews = screen.getAllByRole('listitem')[1];
    const myHostedGatherings = screen.getAllByRole('listitem')[2];

    expect(myGatherings).toHaveClass(inactiveColor);
    expect(myReviews).toHaveClass(inactiveColor);
    expect(myHostedGatherings).toHaveClass(activeColor);
  });
});
