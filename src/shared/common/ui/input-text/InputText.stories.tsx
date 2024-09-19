import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'storybook/internal/preview-api';
import InputText from './index';

const meta = {
  title: 'Shared/ui/InputText',
  component: InputText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InputText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function Render(args) {
    const [value, setValue] = useState<string>('');
    return <InputText {...args} value={value} setValue={setValue} />;
  },
  args: {
    placeholder:
      '남겨주신 리뷰는 프로그램 운영 및 다른 회원 분들께 큰 도움이 됩니다.',
    value: '',
    setValue: () => {},
  },
};
