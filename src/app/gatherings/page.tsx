'use client';

import GatheringCreate from '@/features/gathering-create';
import Banner from './Banner';
import Character from './Character';
import GatheringSearch from './GatheringSearch';
import SearchFilter from './SearchFilter';
import SliderButton from './SliderButton';

export default function Gatherings() {
  return (
    <div className="h-screen bg-white">
      <Banner />
      <Character />
      <SliderButton />
      <GatheringSearch />

      <SearchFilter />
      <GatheringCreate />
    </div>
  );
}
