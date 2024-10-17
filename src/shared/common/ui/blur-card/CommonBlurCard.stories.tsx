import MypageCard from '@/entities/mypage/ui/card';
import { myGatheringsContents } from '@/shared/fixture/my-gatherings';
import { MyGatheringStatus } from '@/shared/lib/constants';
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
      <CommonBlurCardWrapper id={1} status={MyGatheringStatus.ONGOING}>
        <MypageCard alt="리뷰 샘플 이미지" {...myGatheringsContents[0]} />
      </CommonBlurCardWrapper>
    );
  },
};
