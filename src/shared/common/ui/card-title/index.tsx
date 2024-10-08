import { GatheringType } from '@/shared/model';

interface CardTitleProps {
  type: string | GatheringType; // string도 받을 수 있게 수정
  location: string;
}

export default function CardTitle({ type, location }: CardTitleProps) {
  return (
    <div className="mb-1.5 mt-3 flex items-center justify-start gap-2">
      <h2 className="text-xl font-semibold text-gray-800">
        {type !== '워케이션' ? '달램핏' : ''} {type}
      </h2>
      <span className="text-lg font-semibold text-gray-900">|</span>
      <p className="text-gray-700">{location}</p>
    </div>
  );
}
