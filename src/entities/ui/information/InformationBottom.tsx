import { MAX_CAPACITY } from '@/constants';
import OpenBadge from '@/shared/common/ui/open-badge';
import { Progress } from '@/shared/ui/progress';
import Image from 'next/image';
import { GatheringsInfoTypes, ParticipantListTypes } from '.';

interface InformationBottomProps {
  gatheringsInfo: GatheringsInfoTypes;
  participantList: ParticipantListTypes[];
}

export default function InformationBottom({
  gatheringsInfo,
  participantList,
}: InformationBottomProps) {
  // 텍스트 색상
  const textColor =
    gatheringsInfo.participantCount === 20
      ? 'text-orange-400'
      : 'text-gray-700';

  return (
    <div className="border-t-2 border-dashed border-gray-200 p-6">
      <div className="flex justify-between">
        <div className="flex gap-3 text-sm font-semibold text-gray-900">
          <div>
            <span>모집 정원</span>
            <span data-testid="participantCount" className="ml-[6px]">
              {gatheringsInfo.participantCount}명
            </span>
          </div>
          <div>
            <ul className="flex">
              {participantList.slice(0, 4).map((item, index) => {
                return (
                  <li
                    // 임시 key값 index
                    key={index}
                    className="-ml-[10px] h-[29px] w-[29px] overflow-hidden rounded-full first:ml-0"
                  >
                    <Image
                      src={item.User.image}
                      alt="참여 유저 프로필 이미지"
                      width={29}
                      height={29}
                    />
                  </li>
                );
              })}
              {gatheringsInfo.participantCount >= 5 ? (
                <li className="-ml-[10px] flex h-[29px] w-[29px] items-center justify-center rounded-full bg-gray-100 text-sm font-semibold">
                  +{gatheringsInfo.participantCount - 4}
                </li>
              ) : null}
            </ul>
          </div>
        </div>
        {gatheringsInfo.participantCount >= 5 ? (
          <OpenBadge value={gatheringsInfo.participantCount} />
        ) : null}
      </div>
      <div className="mt-3">
        <Progress value={gatheringsInfo.participantCount} isClosed={false} />
      </div>
      <div className="mt-2 flex justify-between">
        <div className="text-xs font-medium text-gray-700">
          <span>최소인원</span>
          <span data-testid="capacity" className="ml-[6px]">
            {gatheringsInfo.capacity}명
          </span>
        </div>
        <div
          data-testid="maxCapacity"
          className={`text-xs font-medium text-gray-700 ${textColor}`}
        >
          <span>최대인원</span>
          <span className="ml-[6px]">{MAX_CAPACITY}명</span>
        </div>
      </div>
    </div>
  );
}
