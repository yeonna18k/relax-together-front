import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import SliderButton from '.';

test('달램핏 버튼 클릭 시 달램핏 아이콘이 활성화되고, 워케이션 버튼 클릭 시 워케이션 아이콘이 활성화됩니다.', async () => {
  render(<SliderButton />);

  await waitFor(() => {
    const dalrempitButton = screen.getByText('달램핏');
    const worcationButton = screen.getByText('워케이션');

    fireEvent.click(worcationButton);
    expect(dalrempitButton.parentElement).toHaveClass('text-gray-400');
    expect(worcationButton.parentElement).toHaveClass('text-gray-900');
  });
});
