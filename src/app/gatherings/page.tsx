'use client';

import { fetchGatherings } from '@/entities/gatherings/api';
import GatheringsCard from '@/entities/gatherings/ui/card';
import Banner from '@/entities/gatherings/ui/main/Banner';
import CreateButton from '@/entities/gatherings/ui/main/CreateButton';
import GatheringCreateModal from '@/entities/gatherings/ui/main/GatheringCreateModal';
import GatheringSearch from '@/entities/gatherings/ui/main/GatheringSearch';
import SearchFilter from '@/entities/gatherings/ui/main/SearchFilter';
import { useEffect, useState } from 'react';
interface Gathering {
  id: number;
  type: string;
  name: string;
  dateTime: string;
  registrationEnd: string;
  location: string;
  participantCount: number;
  capacity: number;
  imageUrl: string;
  hostUser: number;
}

export default function Gatherings() {
  const [gatherings, setGatherings] = useState<Gathering[]>([]); // 모임 목록 상태
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 모임 목록 데이터 가져오기
  useEffect(() => {
    const getGatherings = async () => {
      setLoading(true);
      try {
        const data = await fetchGatherings();
        setGatherings(data.content);
      } catch (err: any) {
        setError('모임 목록을 불러오는 데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    };

    getGatherings();
  }, []);

  return (
    <div className="relative flex w-full flex-col justify-center px-6">
      <div className="absolute left-0 top-0 z-20 hidden h-[635px] w-full bg-[url('/assets/gathering-no-bg.png')] bg-contain bg-center bg-no-repeat xl:block" />
      <Banner />
      <div className="z-10 flex h-screen w-full flex-col items-center bg-white xs:bg-gray-50 sm:bg-gray-50 lg:bg-white">
        <GatheringSearch />
        <SearchFilter />

        {/* 모임 목록 보여주기 */}
        <div className="mt-8 w-full">
          {loading ? (
            <p>로딩 중...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : gatherings.length === 0 ? (
            <div className="mt-48 text-center text-xs font-medium text-gray-600">
              <p>아직 모임이 없어요,</p>
              <p>지금 바로 모임을 만들어보세요</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {gatherings.map(gathering => (
                <GatheringsCard
                  key={gathering.id}
                  image={gathering.imageUrl}
                  message={`${gathering.participantCount}/${gathering.capacity} 명 참여 중`}
                  title={gathering.name}
                  location={gathering.location}
                  date={new Date(gathering.dateTime).toLocaleDateString()}
                  time={new Date(gathering.dateTime).toLocaleTimeString()}
                  value={gathering.participantCount}
                  gatheringId={gathering.id.toString()}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <CreateButton />
      <GatheringCreateModal />
    </div>
  );
}
