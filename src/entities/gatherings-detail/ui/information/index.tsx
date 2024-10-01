'use client';

import { GatheringsInfoTypes } from '@/entities/gatherings-detail/model/information';
import { useQuery } from '@tanstack/react-query';
import { gatheringsDetailApiService } from '../../api/service/GatheringsDetailApiService';
import InformationBottom from './InformationBottom';
import InformationTop from './InformationTop';

interface InformationProps {
  id: string;
  gatheringsInfo: GatheringsInfoTypes;
}

export default function Information({ id, gatheringsInfo }: InformationProps) {
  const { data } = useQuery({
    queryKey: ['participants', id],
    queryFn: () => gatheringsDetailApiService.getParticipantList(id),
  });

  return (
    <>
      <div className="w-full rounded-xl border-2 border-gray-200 bg-white">
        <InformationTop gatheringsInfo={gatheringsInfo} />
        {data && (
          <InformationBottom
            gatheringsInfo={gatheringsInfo}
            participantList={data}
          />
        )}
      </div>
    </>
  );
}
