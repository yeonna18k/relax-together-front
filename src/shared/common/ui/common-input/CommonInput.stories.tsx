import { Meta, StoryObj } from '@storybook/react';
import CommonInput from './index';

const meta: Meta<typeof CommonInput> = {
  title: 'Shared/ui/CommonInput',
  component: CommonInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CommonInput>;

export const XSmallInput: Story = {
  args: {
    placeholder: 'w-311',
    iconType: 'dropdown',
    size: 'xsmall',
  },
};

export const SmallInput: Story = {
  args: {
    placeholder: 'w-343',
    iconType: 'dropdown',
    size: 'small',
  },
};

export const MediumInput: Story = {
  args: {
    placeholder: '이미지를 첨부해주세요',
    iconType: 'default',
    size: 'medium',
  },
};

export const LargeInput: Story = {
  args: {
    placeholder: 'w-472',
    iconType: 'dropdown',
    size: 'large',
  },
};
