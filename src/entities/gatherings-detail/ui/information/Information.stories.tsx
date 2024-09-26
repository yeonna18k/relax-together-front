import {
  dummyGatheringsInfo,
  dummyParticipantList,
} from '@/shared/fixture/information';
import type { Meta, StoryObj } from '@storybook/react';
import Information from './index';
import InformationBottom from './InformationBottom';
import InformationTop from './InformationTop';

function MockInformation({
  id,
  gatheringsInfo,
}: {
  id: string;
  gatheringsInfo: typeof dummyGatheringsInfo;
}) {
  const mockParticipantList = dummyParticipantList;

  return (
    <div className="w-full rounded-xl border-2 border-gray-200 bg-white">
      <InformationTop gatheringsInfo={gatheringsInfo} />
      <InformationBottom
        gatheringsInfo={gatheringsInfo}
        participantList={mockParticipantList}
      />
    </div>
  );
}

const meta = {
  title: 'Entities/ui/Information',
  component: MockInformation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Information>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: '1',
    gatheringsInfo: dummyGatheringsInfo,
  },
};
