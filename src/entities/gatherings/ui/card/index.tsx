import GatheringCardContentSection from './GatheringCardContentSection';
import GatheringCardImageSection from './GatheringCardImageSection';

interface GatheringCardProps {
  image: string;
  message: string;
  title: string;
  location: string;
  date: string;
  time: string;
  value: number;
  gatheringId: string;
}

export default function GatheringsCard({
  image,
  message,
  title,
  location,
  date,
  time,
  value,
  gatheringId,
}: GatheringCardProps) {
  return (
    <div className="shadow-l flex w-full flex-col gap-3 overflow-hidden rounded-3xl border-2 border-gray-100 xs:flex-row">
      <GatheringCardImageSection image={image} message={message} />
      <GatheringCardContentSection
        title={title}
        location={location}
        date={date}
        time={time}
        value={value}
        gatheringId={gatheringId}
      />
    </div>
  );
}
