import { gatheringsApiService } from '@/entities/gatherings/api/service/GatheringsApiService';
import GatheringCard from '@/entities/gatherings/ui/card';
import Banner from '@/entities/gatherings/ui/main/Banner';
import CreateButton from '@/entities/gatherings/ui/main/CreateButton';
import GatheringCreateModal from '@/entities/gatherings/ui/main/GatheringCreateModal';
import GatheringSearch from '@/entities/gatherings/ui/main/GatheringSearch';
import SearchFilter from '@/entities/gatherings/ui/main/SearchFilter';

if (process.env.NODE_ENV === 'development') {
  const { server } = require('../../shared/mocks/node');
  server.listen();
}
export default async function Gatherings() {
  const response = await gatheringsApiService.getGatherings({ page: 0 });
  const { data } = response;
  return (
    <div className="relative flex w-full flex-col justify-center">
      <div className="absolute left-0 top-0 z-20 hidden h-[635px] w-full bg-[url('/assets/gathering-no-bg.png')] bg-contain bg-center bg-no-repeat xl:block" />
      <Banner />
      <div className="z-10 flex h-screen w-full flex-col items-center bg-white xs:bg-gray-50 sm:bg-gray-50 lg:bg-white">
        <GatheringSearch />
        <SearchFilter />

        {/* 모임 목록 보여주기 */}
        <div className="flex w-full justify-center">
          <div className="md:[996px] w-[343px] flex-col items-center justify-center sm:w-[695px] xl:w-[996px]">
            {data.content.map(gathering => (
              <GatheringCard
                key={gathering.id}
                image={gathering.imageUrl}
                message={`${gathering.participantCount}/${gathering.capacity} 명 참여 중`}
                type={gathering.type}
                location={gathering.location}
                date={new Date(gathering.dateTime).toLocaleDateString()}
                time={new Date(gathering.dateTime).toLocaleTimeString()}
                value={gathering.participantCount}
                gatheringId={gathering.id.toString()}
              />
            ))}
          </div>
        </div>
      </div>
      <CreateButton />
      <GatheringCreateModal />
    </div>
  );
}
