import Provider from '@/app/provider';
import CommonBlurCard from '@/shared/common/ui/blur-card';
import { render, screen } from '@testing-library/react';

describe('CommonBlurCard Component', () => {
  test('화면에 렌더링 된다.', () => {
    render(
      <Provider>
        <CommonBlurCard id={0} />
      </Provider>,
    );

    const topText = screen.getByText('모집 취소된 모임이에요.');
    const bottomText = screen.getByText('다음 기회에 만나요 🙏');

    expect(topText).toBeInTheDocument();
    expect(bottomText).toBeInTheDocument();
    expect(bottomText).toBeInTheDocument();
    expect(bottomText).toBeInTheDocument();
  });
});
