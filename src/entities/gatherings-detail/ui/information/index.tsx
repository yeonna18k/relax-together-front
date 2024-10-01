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
    <>
      <div className="w-full rounded-xl border-2 border-gray-200 bg-white">
        <InformationTop gatheringsInfo={gatheringsInfo} />
        {participantList && (
          <InformationBottom
            gatheringsInfo={gatheringsInfo}
            participantList={participantList}
          />
        )}
      </div>
    </>
  );
}
