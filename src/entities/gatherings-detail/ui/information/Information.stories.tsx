import {
  dummyGatheringsInfo,
  dummyParticipantList,
} from '@/shared/fixture/information';
import type { Meta, StoryObj } from '@storybook/react';
import Information from './index';

const meta = {
  title: 'Entities/ui/Information',
  component: Information,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Information>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    gatheringsInfo: dummyGatheringsInfo,
    participantList: dummyParticipantList,
  },
};
