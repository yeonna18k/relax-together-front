import { Meta, StoryFn } from '@storybook/react';
import CreateButton from './CreateButton';

export default {
  title: 'Entity/ui/CreateButton',
  component: CreateButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'CreateButton 컴포넌트에 대한 설명을 여기에 작성합니다.',
      },
    },
  },
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<any> = args => <CreateButton {...args} />;

export const Default = Template.bind({});
Default.args = {};
