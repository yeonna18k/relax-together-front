import GatheringCard from '@/entities/gatherings/ui/card';

export default function GatheringsCardList() {
  return (
    <GatheringCard
      image="/assets/sample1.png"
      message="모임에 오세요!"
      type="마인드풀니스"
      location="을지로3가"
      date="2024-09-18"
      time="오후 7시"
      value={18}
      gatheringId="12345"
    />
  );
}
