import ByeButton from '@/shared/common/ui/bye-button';

import { render, screen } from '@testing-library/react';

describe('ByeButton Component', () => {
  test('화면에 렌더링 된다.', () => {
    render(<ByeButton />);

    const byeButton = screen.getByRole('button');
    expect(byeButton).toBeInTheDocument();
  });
});
