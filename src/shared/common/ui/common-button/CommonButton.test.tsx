import CommonButton from '@/shared/common/ui/common-button/index';
import { render, screen } from '@testing-library/react';

describe('Common Button Component', () => {
  test('화면에 렌더링이 된다', () => {
    render(
      <CommonButton
        variant="default"
        size="sm"
        onClick={() => console.log('click')}
      >
        생성하기
      </CommonButton>,
    );
    const button = screen.getByTestId('common-button');
    expect(button).toHaveTextContent('생성하기');
    expect(button).toHaveClass('bg-[#ea580c]');
  });
});
