'use client';

import Banner from '@/entities/gatherings/ui/Banner';
import GatheringSearch from '@/entities/gatherings/ui/GatheringSearch';
import SearchFilter from '@/entities/gatherings/ui/SearchFilter';
import GatheringCreate from '@/features/gathering-create';

export default function Gatherings() {
  return (
    <div className="relative">
      <Banner />
      <GatheringSearch />
      <SearchFilter />

      <div className="fixed bottom-20 left-20 flex justify-start">
        {' '}
        <GatheringCreate />
      </div>
    </div>
  );
}
