import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import SelectBox from './index';

const meta = {
  title: 'Shared/ui/SelectBox',
  component: SelectBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SelectBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithState: Story = {
  render: function Render(args) {
    const [selectedValue, setSelectedValue] = useState<string>('');

    return (
      <div>
        <SelectBox
          {...args}
          onValueChange={(value: string) => {
            setSelectedValue(value);
          }}
        />
        <p>현재 선택된 값: {selectedValue}</p>
      </div>
    );
  },
  args: {
    placeholder: '장소를 선택해주세요',
  },
};
