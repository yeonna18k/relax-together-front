import { gatheringsContents } from '@/shared/fixture/gatherings';
import { getTimeUntilDeadline } from '@/shared/lib/utils';
import { Meta, StoryObj } from '@storybook/react';
import GatheringCard from './index';

export default {
  title: 'Features/ui/GatheringCard',
  component: GatheringCard,
  argTypes: {
    image: {
      control: 'text',
      description: 'URL of the image displayed in the card',
    },
    message: {
      control: 'text',
      description: 'The message displayed on the tag clock',
    },
    title: {
      control: 'text',
      description: 'The title of the card',
    },
    location: {
      control: 'text',
      description: 'The location of the event',
    },
    date: {
      control: 'text',
      description: 'The date displayed on the card',
    },
    time: {
      control: 'text',
      description: 'The time displayed on the card',
    },
    participantCount: {
      control: 'number',
      description: 'The number of participants currently registered',
    },
    capacity: {
      control: 'number',
      description: 'The total capacity of the event',
    },
    tags: ['autodocs'],
  },
} as Meta<typeof GatheringCard>;

const Template: StoryObj<typeof GatheringCard> = {
  render: args => <GatheringCard {...args} />,
};

export const Default: StoryObj<typeof GatheringCard> = {
  ...Template,
  args: {
    ...gatheringsContents[2],
    message: getTimeUntilDeadline(
      new Date(gatheringsContents[2].registrationEnd),
    ),
  },
};
