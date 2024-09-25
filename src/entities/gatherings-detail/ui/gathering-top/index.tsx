'use client';

import TagClock from '@/shared/common/ui/tag-clock';
import { Skeleton } from '@/shared/ui/skeleton';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getParticipantList } from '../../api';
import {
  GatheringsInfoTypes,
  ParticipantListTypes,
} from '../../model/information';
import Information from '../information';
import InformationSkeleton from './InformationSkeleton';

interface GatheringTopProps {
  id: string;
  gatheringsInfo: GatheringsInfoTypes;
}

export default function GatheringTop({
  id,
  gatheringsInfo,
}: GatheringTopProps) {
  const [participantList, setParticipantList] =
    useState<ParticipantListTypes[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const participantList = await getParticipantList(id);
        setParticipantList(participantList);
      } catch (error) {
        console.error('Error fetching participant list:', error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="gap-6 sm:flex">
      <div className="relative h-[180px] overflow-hidden rounded-xl border-2 border-gray-200 sm:h-[240px] sm:w-1/2 md:h-[270px]">
        {gatheringsInfo ? (
          <Image
            src={gatheringsInfo.image}
            alt="이미지"
            width={486}
            height={270}
            className="h-full w-full object-cover"
          />
        ) : (
          <Skeleton className="h-[180px] w-full rounded-xl border-2 border-gray-200 sm:h-60 md:h-[270px]" />
        )}
        <div className="absolute right-0 top-0">
          <TagClock message="오늘 21시 마감" variant="rounded" />
        </div>
      </div>
      <div className="mt-4 sm:mt-0 sm:w-1/2">
        {/* TODO: 디자인 변경 시 UI 수정 */}
        {gatheringsInfo && participantList ? (
          <Information
            gatheringsInfo={gatheringsInfo}
            participantList={participantList}
          />
        ) : (
          <InformationSkeleton />
        )}
      </div>
    </div>
  );
}
