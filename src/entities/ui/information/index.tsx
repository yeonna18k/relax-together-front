import ChipInfo from '@/shared/common/ui/chip-info';
import OpenBadge from '@/shared/common/ui/open-badge';
import { Progress } from '@/shared/ui/progress';
import Image from 'next/image';

type GatheringsInfoTypes = {
  teamId: number;
  id: number;
  type: string;
  name: string;
  dateTime: string;
  registrationEnd: string;
  location: string;
  participantCount: number;
  capacity: number;
  image: string;
  createdBy: number;
  canceledAt: string;
};

type ParticipantListTypes = {
  teamId: number;
  userId: number;
  gatheringId: number;
  joinedAt: string;
  User: {
    id: number;
    email: string;
    name: string;
    companyName: string;
    image: string;
  };
};

interface InformationProps {
  gatheringsInfo: GatheringsInfoTypes;
  participantList: ParticipantListTypes[];
}

export default function Information({
  gatheringsInfo,
  participantList,
}: InformationProps) {
  // 날짜, 시간 계산
  const eventDate = new Date(gatheringsInfo.dateTime);

  const month = eventDate.getMonth() + 1;
  const date = eventDate.getDate();
  const hour = eventDate.getHours();
  const minute = eventDate.getMinutes();

  const formattedDate = `${month}월 ${date}일`;
  const formattedHour = `${hour}:${minute}`;

  // 텍스트 색상
  const textColor =
    gatheringsInfo.participantCount === 20
      ? 'text-orange-400'
      : 'text-gray-700';

  return (
    <>
      <div className="w-full rounded-3xl border-2 border-gray-200 bg-white">
        {/* top */}
        <div className="p-6 pb-[43px]">
          <div className="flex justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                {gatheringsInfo.name}
              </h2>
              <p className="mt-[2px] text-sm font-medium text-gray-700">
                {gatheringsInfo.location}
              </p>
            </div>
            <div className="h-12 w-12 shrink-0 bg-sky-500">찜</div>
          </div>
          <div className="mt-3 space-x-2">
            <ChipInfo type="date">{formattedDate}</ChipInfo>
            <ChipInfo type="time">{formattedHour}</ChipInfo>
          </div>
        </div>
        {/* bottom */}
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
                  {participantList.slice(0, 4).map(item => {
                    return (
                      <li
                        key={gatheringsInfo.id}
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
            <Progress
              value={gatheringsInfo.participantCount}
              isClosed={false}
            />
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
              <span className="ml-[6px]">20명</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
