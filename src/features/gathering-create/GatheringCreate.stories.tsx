import { Meta, StoryFn } from '@storybook/react';
import GatheringCreate from './index';

export default {
  title: 'Components/GatheringCreate',
  component: GatheringCreate,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'GatheringCreate 컴포넌트에 대한 설명을 여기에 작성합니다.',
      },
    },
  },
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<any> = args => <GatheringCreate {...args} />;

export const Default = Template.bind({});
Default.args = {};
