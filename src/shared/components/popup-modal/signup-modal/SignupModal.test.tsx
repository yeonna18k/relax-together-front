import { fireEvent, render, screen } from '@testing-library/react';
import SignupModal from './index';

describe('SignupModal Component', () => {
  test('모달이 화면에 렌더링된다.', () => {
    render(<SignupModal isOpen={true} onClose={() => {}} />);
    expect(screen.getByText('가입이 완료되었습니다!')).toBeInTheDocument();
  });

  test('확인 버튼 클릭 시 모달이 닫힌다.', () => {
    const onClose = jest.fn();
    render(<SignupModal isOpen={true} onClose={onClose} />);

    const confirmButton = screen.getByRole('button', { name: '확인' });
    fireEvent.click(confirmButton);

    expect(onClose).toHaveBeenCalled();
  });
});
