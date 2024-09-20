'use client';

import Banner from '@/entities/gatherings/ui/main/Banner';
import CreateButton from '@/entities/gatherings/ui/main/CreateButton';
import GatheringSearch from '@/entities/gatherings/ui/main/GatheringSearch';
import SearchFilter from '@/entities/gatherings/ui/main/SearchFilter';

export default function Gatherings() {
  return (
    <div className="relative flex w-full flex-col justify-center px-6">
      <div className="absolute left-0 top-0 z-20 hidden h-[635px] w-full bg-[url('/assets/gathering-no-bg.png')] bg-contain bg-center bg-no-repeat lg:block" />
      <Banner />
      <div className="z-10 flex h-screen w-full flex-col items-center bg-white sm:bg-gray-50 lg:bg-white">
        <GatheringSearch />
        <SearchFilter />
      </div>
      <CreateButton />
    </div>
  );
}
