import { render, screen } from '@testing-library/react';
import CommonInput from './index';

describe('CommonInput Component', () => {
  test('화면에 렌더링이 된다.', () => {
    render(<CommonInput placeholder="입력해주세요" />);

    const inputElement = screen.getByPlaceholderText('입력해주세요');

    expect(inputElement).toBeInTheDocument();
  });
});
