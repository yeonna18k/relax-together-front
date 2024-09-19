import CardTitle from '@/shared/common/ui/card-title';
import { render } from '@testing-library/react';

describe('CardTitle Component', () => {
  test('title, location을 넘겨주면 화면에 렌더링 된다.', () => {
    const title = '달램핏 오피스 스트래칭';
    const location = '을지로3가';

    const { getByText } = render(
      <CardTitle title={title} location={location} />,
    );

    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(location)).toBeInTheDocument();
  });
});
