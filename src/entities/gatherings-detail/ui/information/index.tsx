'use client';

import {
  GatheringsInfoTypes,
  ParticipantListTypes,
} from '@/entities/gatherings-detail/model/information';
import InformationBottom from './InformationBottom';
import InformationTop from './InformationTop';

interface InformationProps {
  gatheringsInfo: GatheringsInfoTypes;
  participantList: ParticipantListTypes;
}

export default function Information({
  gatheringsInfo,
  participantList,
}: InformationProps) {
  return (
    <div className="relative mt-4 w-full rounded-xl border-2 border-gray-200 bg-white sm:mt-0 sm:w-1/2">
      <InformationTop gatheringsInfo={gatheringsInfo} />
      <InformationBottom
        gatheringsInfo={gatheringsInfo}
        participantList={participantList}
      />
    </div>
  );
}
