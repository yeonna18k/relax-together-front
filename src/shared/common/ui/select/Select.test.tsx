import SelectBox from '@/shared/common/ui/select';
import { render, screen } from '@testing-library/react';

describe('Select Component', () => {
  test('화면에 렌더링이 된다.', () => {
    render(<SelectBox placeholder="장소를 선택해주세요" menuItems={[]} />);

    const placeholder = screen.getByText('장소를 선택해주세요');

    expect(placeholder).toBeInTheDocument();
  });
});
