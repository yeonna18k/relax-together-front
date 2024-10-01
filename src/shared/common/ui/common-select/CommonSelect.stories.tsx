import {
  commonSelectItems,
  gatheringsSortItems,
  reviewsSortItems,
} from '@/shared/fixture/select-items';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import CommonSelect from './index';

const meta = {
  title: 'Shared/ui/CommonSelect',
  component: CommonSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CommonSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultSelect: Story = {
  render: function Render(args) {
    const [selectedValue, setSelectedValue] = useState<string>('ALL');

    const handleValueChange = (value: string) => {
      setSelectedValue(value);
    };

    return (
      <CommonSelect
        {...args}
        onValueChange={handleValueChange}
        selectedValue={selectedValue}
      />
    );
  },
  args: {
    filterIconType: 'default',
    placeholder: '지역 전체',
    menuItems: commonSelectItems,
  },
};
export const ReviewsSortSelect: Story = {
  render: function Render(args) {
    const [selectedSortValue, setSelectedSortValue] = useState<string>(
      args.menuItems[0].value,
    );

    const handleSortValueChange = (value: string) => {
      setSelectedSortValue(value);
    };
    return (
      <CommonSelect
        {...args}
        onValueChange={handleSortValueChange}
        selectedValue={selectedSortValue}
      />
    );
  },
  args: {
    filterIconType: 'sort',
    placeholder: reviewsSortItems[0].label,
    menuItems: reviewsSortItems,
  },
};

export const GatheringsSortSelect: Story = {
  render: function Render(args) {
    const [selectedSortValue, setSelectedSortValue] = useState<string>(
      args.menuItems[0].value,
    );

    const handleSortValueChange = (value: string) => {
      setSelectedSortValue(value);
    };
    return (
      <CommonSelect
        {...args}
        onValueChange={handleSortValueChange}
        selectedValue={selectedSortValue}
      />
    );
  },
  args: {
    filterIconType: 'sort',
    placeholder: gatheringsSortItems[0].label,
    menuItems: gatheringsSortItems,
  },
};
