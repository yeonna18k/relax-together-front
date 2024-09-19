import MypageCard from '@/entities/mypage/ui/card';
import { getISOTimeWithOffset } from '@/shared/lib/utils';
import type { Meta, StoryObj } from '@storybook/react';
import CommonBlurCardWrapper from './CommonBlurCardWrapper';

const meta: Meta<typeof CommonBlurCardWrapper> = {
  title: 'Shared/ui/CommonBlurCardWrapper',
  component: CommonBlurCardWrapper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CommonBlurCardWrapper>;

export const Default: Story = {
  render: function Render() {
    return (
      <CommonBlurCardWrapper>
        <MypageCard
          image="/assets/review-sample.png"
          alt="리뷰 샘플 이미지"
          name="달램핏 오피스 스트래칭"
          location="을지로3가"
          participantCount={5}
          dateTime={getISOTimeWithOffset(4)}
        />
      </CommonBlurCardWrapper>
    );
  },
};
