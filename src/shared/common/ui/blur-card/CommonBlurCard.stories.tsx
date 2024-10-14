import MypageCard from '@/entities/mypage/ui/card';
import { MAX_CAPACITY } from '@/shared/lib/constants';
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
      <CommonBlurCardWrapper id={1} status="ONGOING">
        <MypageCard
          id={1}
          imageUrl="/assets/review-sample.png"
          alt="리뷰 샘플 이미지"
          type="오피스 스트레칭"
          location="을지로3가"
          participantCount={5}
          dateTime={getISOTimeWithOffset(4)}
          status="ONGOING"
          registrationEnd="2024-09-23T07:30:24.330Z"
          completed={false}
          hostUser={0}
          capacity={MAX_CAPACITY}
          name={null}
        />
      </CommonBlurCardWrapper>
    );
  },
};
