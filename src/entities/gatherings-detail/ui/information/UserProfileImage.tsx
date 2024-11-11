'use client';

import { MIN_PARTICIPANT } from '@/shared/lib/constants';
import Image from 'next/image';
import { useState } from 'react';
import { ParticipantListTypes, Participants } from '../../model/information';
import UserProfileModal from './UserProfileModal';

interface UserProfileImageProps {
  participantList: ParticipantListTypes;
}

export default function UserProfileImage({
  participantList,
}: UserProfileImageProps) {
  const [isModalVisible, setModalVisible] = useState<boolean>(false);

  const displayedParticipants =
    participantList.totalElements >= MIN_PARTICIPANT
      ? participantList.participants.slice(0, 4)
      : participantList.participants;

  const extraParticipantsCount =
    participantList.totalElements - MIN_PARTICIPANT + 1;

  const handleOnMouseEnter = () => {
    setModalVisible(true);
  };
  const handleOnMouseLeave = () => {
    setModalVisible(false);
  };

  return (
    <div>
      <ul
        className="flex"
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
      >
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
                className="h-full w-full object-cover"
              />
            </li>
          );
        })}
        {participantList.totalElements >= MIN_PARTICIPANT ? (
          <li className="-ml-[10px] flex h-[29px] w-[29px] items-center justify-center rounded-full bg-gray-100 text-sm font-semibold">
            +{extraParticipantsCount}
          </li>
        ) : null}
      </ul>
      <UserProfileModal
        isModalVisible={isModalVisible}
        participantList={participantList}
      />
    </div>
  );
}
