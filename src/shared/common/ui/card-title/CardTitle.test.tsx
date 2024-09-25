import CardTitle from '@/shared/common/ui/card-title';
import { render, screen } from '@testing-library/react';

describe('CardTitle Component', () => {
  test('title, location을 넘겨주면 화면에 렌더링 된다.', () => {
    const type = '오피스 스트레칭';
    const location = '을지로3가';

    const { getByText } = render(<CardTitle type={type} location={location} />);

    const headerElement = screen.getByRole('heading', { level: 2 });
    expect(headerElement).toHaveTextContent('달램핏 오피스 스트레칭', {
      normalizeWhitespace: true,
    });
    expect(getByText(location)).toBeInTheDocument();
  });
});
