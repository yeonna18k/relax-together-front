import Image from 'next/image';
import {
  GatheringsInfoTypes,
  ParticipantListTypes,
} from '../../model/information';

interface UserProfileImageProps {
  gatheringsInfo: GatheringsInfoTypes;
  participantList: ParticipantListTypes[];
}

export default function UserProfileImage({
  gatheringsInfo,
  participantList,
}: UserProfileImageProps) {
  console.log('🚀 ~ participantList:', participantList);
  return (
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
  );
}
