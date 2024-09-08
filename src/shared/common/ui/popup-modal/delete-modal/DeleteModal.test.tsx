import { fireEvent, render, screen } from '@testing-library/react';
import DeleteModal from './index';

describe('PopupModal Component', () => {
  test('모달이 화면에 렌더링된다.', () => {
    render(<DeleteModal isOpen={true} onClose={() => {}} />);
    expect(screen.getByText('정말 나가시겠어요?')).toBeInTheDocument();
    expect(
      screen.getByText('작성된 내용이 모두 삭제됩니다.'),
    ).toBeInTheDocument();
  });

  test('취소 버튼 클릭 시 모달이 닫힌다.', () => {
    const onClose = jest.fn();
    render(<DeleteModal isOpen={true} onClose={onClose} />);
    fireEvent.click(screen.getByText('취소'));
    expect(onClose).toHaveBeenCalled();
  });
});
