import TabSection from '@/entities/mypage/ui/tab-section';
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
  test('현재 주소가 /mypage?subPage=my-gatherings 나의 모임의 컬러가 활성화 된다.', () => {
    mockUseSearchParams('?subPage=my-gatherings');
    const { debug } = render(<TabSection />);
    debug();
    const myGatherings = screen.getByText('나의 모임');
    const myReviews = screen.getByText('나의 리뷰');
    const myCreatedGatherings = screen.getByText('내가 만든 모임');
  });
});
