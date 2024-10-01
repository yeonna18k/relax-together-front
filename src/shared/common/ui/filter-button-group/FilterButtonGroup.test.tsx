import FilterButtonGroup from '@/shared/common/ui/filter-button-group';
import { commonFilters, mypageFilters } from '@/shared/fixture/filter';
import { Path } from '@/shared/lib/constants';
import { mockUseSearchParams } from '@/shared/mocks/mockUseSearchParams';
import { render, screen } from '@testing-library/react';

describe('FilterButtonGroup Component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  test('mypage URLSearchParams의 filter를 변경하기 위해서는 mypageFilters, Path.mypage를 전달해주면 랜더링 된다.', () => {
    mockUseSearchParams('?filter=pending');
    render(<FilterButtonGroup filters={mypageFilters} path={Path.mypage} />);

    const pendingButton = screen.getByText('작성 가능한 리뷰');
    const completedButton = screen.getByText('작성한 리뷰');

    expect(pendingButton).toBeInTheDocument();
    expect(completedButton).toBeInTheDocument();
  });
  test('gatherings URLSearchParams의 filter를 변경하기 위해서는 commonFilters, Path.gatherings를 전달해주면 랜더링 된다.', () => {
    mockUseSearchParams('?filter=pending');
    render(
      <FilterButtonGroup filters={commonFilters} path={Path.gatherings} />,
    );

    const allButton = screen.getByText('전체');
    const officeStretchingButton = screen.getByText('오피스 스트레칭');
    const mindfulnessButton = screen.getByText('마인드풀니스');

    expect(allButton).toBeInTheDocument();
    expect(officeStretchingButton).toBeInTheDocument();
    expect(mindfulnessButton).toBeInTheDocument();
  });
});
