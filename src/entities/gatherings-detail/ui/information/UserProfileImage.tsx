import { MIN_PARTICIPANT } from '@/shared/lib/constants';
import Image from 'next/image';
import {
  GatheringsInfoTypes,
  ParticipantListTypes,
  Participants,
} from '../../model/information';

interface UserProfileImageProps {
  gatheringsInfo: GatheringsInfoTypes;
  participantList: ParticipantListTypes;
}

export default function UserProfileImage({
  gatheringsInfo,
  participantList,
}: UserProfileImageProps) {
  const displayedParticipants =
    participantList.totalElements >= MIN_PARTICIPANT
      ? participantList.participants.slice(0, 4)
      : participantList.participants;

  const extraParticipantsCount =
    gatheringsInfo.participantCount - MIN_PARTICIPANT + 1;

  return (
    <div>
      <ul className="flex">
        {displayedParticipants.map((participant: Participants) => {
          return (
            <li
              key={participant.userId}
              className="-ml-[10px] h-[29px] w-[29px] overflow-hidden rounded-full first:ml-0"
            >
              <Image
                src={
                  participant.profileImage === null
                    ? '/assets/logo-icon.svg'
                    : participant.profileImage
                }
                alt="참여 유저 프로필 이미지"
                width={29}
                height={29}
              />
            </li>
          );
        })}
        {gatheringsInfo.participantCount >= MIN_PARTICIPANT ? (
          <li className="-ml-[10px] flex h-[29px] w-[29px] items-center justify-center rounded-full bg-gray-100 text-sm font-semibold">
            +{extraParticipantsCount}
          </li>
        ) : null}
      </ul>
    </div>
  );
}
