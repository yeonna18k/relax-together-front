import InputText from '@/shared/common/ui/input-text';
import { render, screen } from '@testing-library/react';

describe('InputText Component', () => {
  test('화면에 렌더링이 된다.', () => {
    const setValue = jest.fn();
    render(
      <InputText
        value=""
        setValue={setValue}
        placeholder="남겨주신 리뷰는 프로그램 운영 및 다른 회원 분들께 큰 도움이 됩니다."
      />,
    );

    const placeholder = screen.getByPlaceholderText(
      '남겨주신 리뷰는 프로그램 운영 및 다른 회원 분들께 큰 도움이 됩니다.',
    );

    expect(placeholder).toBeInTheDocument();
  });
});
