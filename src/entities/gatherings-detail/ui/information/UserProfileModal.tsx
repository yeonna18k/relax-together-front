import Image from 'next/image';
import { ParticipantListTypes, Participants } from '../../model/information';

interface UserProfileModalProps {
  isModalVisible: boolean;
  participantList: ParticipantListTypes;
}

export default function UserProfileModal({
  isModalVisible,
  participantList,
}: UserProfileModalProps) {
  return (
    <>
      {isModalVisible && (
        <div className="absolute right-1/2 top-[256px] h-fit w-[96%] translate-x-1/2 rounded-xl border border-gray-200 bg-white p-[30px] shadow-custom sm:right-2 sm:top-[296px] sm:w-[477px] sm:translate-x-0">
          <div className="flex items-center">
            <p className="h-12 w-12 overflow-hidden rounded-full">
              <Image
                src={
                  participantList.participants[0].profileImage === null
                    ? '/assets/logo-icon.svg'
                    : participantList.participants[0].profileImage
                }
                alt="주최자 프로필 이미지"
                width={48}
                height={48}
              />
            </p>
            <span className="ml-[14px] text-lg font-bold">
              {participantList.participants[0].name}
            </span>
            <Image
              src="/assets/bookmark-star.svg"
              alt="북마크 이미지"
              width={24}
              height={24}
            />
          </div>
          {participantList.totalElements >= 2 ? (
            <ul className="mt-5 flex flex-wrap gap-x-[30px] gap-y-[10px]">
              {participantList.participants
                .slice(1)
                .map((participant: Participants) => {
                  return (
                    <li
                      key={participant.userId}
                      className="flex items-center gap-[10px]"
                    >
                      <p className="flex h-12 w-12 items-center justify-center rounded-full">
                        <Image
                          src={
                            participant.profileImage === null
                              ? '/assets/logo-icon.svg'
                              : participant.profileImage
                          }
                          alt="참여 유저 프로필 이미지"
                          width={48}
                          height={48}
                        />
                      </p>
                      <span className="text-sm font-semibold text-gray-700">
                        {participant.name}
                      </span>
                    </li>
                  );
                })}
            </ul>
          ) : null}
        </div>
      )}
    </>
  );
}
