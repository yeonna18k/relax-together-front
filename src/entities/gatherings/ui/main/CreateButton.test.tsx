import { render, screen } from '@testing-library/react';
import CreateButton from './CreateButton';

test('모임 만들기 버튼이 렌더링되어 있는지 확인', () => {
  render(<CreateButton />);
  expect(screen.getByText('모임 만들기')).toBeInTheDocument();
  expect(screen.getByAltText('arrow-right')).toBeInTheDocument();
});
