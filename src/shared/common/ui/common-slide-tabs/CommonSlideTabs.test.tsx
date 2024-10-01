import SlideTabs from '@/shared/common/ui/common-slide-tabs/SlideTabs';
import { commonTabs, mypageTabs } from '@/shared/fixture/tabs';
import { Path } from '@/shared/lib/constants';
import { mockUseSearchParams } from '@/shared/mocks/mockUseSearchParams';
import { render, screen } from '@testing-library/react';

describe('CommonSlideTabs Component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  test('mypage URLSearchParams의 subPage 변경하기 위해서는 mypageTabs, Path.mypage를 전달해주면 랜더링 된다.', () => {
    mockUseSearchParams('?subPage=my-gatherings');
    render(<SlideTabs tabs={mypageTabs} path={Path.mypage} />);
    const myGatheringsButton = screen.getByText('나의 모임');
    const myReviewsButton = screen.getByText('나의 리뷰');
    const myHostedGatheringsButton = screen.getByText('내가 만든 모임');

    expect(myGatheringsButton).toBeInTheDocument();
    expect(myReviewsButton).toBeInTheDocument();
    expect(myHostedGatheringsButton).toBeInTheDocument();
  });
  test('gatherings URLSearchParams의 subPage 변경하기 위해서는 commonTabs, Path.mypage를 전달해주면 랜더링 된다.', () => {
    mockUseSearchParams('?subPage=my-gatherings');
    render(<SlideTabs tabs={commonTabs} path={Path.mypage} />);
    const dalaemfitButton = screen.getByText('달램핏');
    const workationButton = screen.getByText('워케이션');

    expect(dalaemfitButton).toBeInTheDocument();
    expect(workationButton).toBeInTheDocument();
  });
});
