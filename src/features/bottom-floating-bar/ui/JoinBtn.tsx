import {
  GatheringsInfoTypes,
  ParticipantListTypes,
} from '@/entities/gatherings-detail/model/information';
import Modal from '@/shared/common/ui/modal';
import { useModal } from '@/shared/hooks/useModal';
import { CommonSize, ModalType, ModalVariant } from '@/shared/lib/constants';
import { getTimeUntilDeadline } from '@/shared/lib/utils';
import { useUserDataStore } from '@/shared/store/useUserDataStore';
import { Button } from '@/shared/ui/button';
import useJoinGathering from '../model/hook/useJoinGathering';

interface JoinBtnProps {
  id: string;
  gatheringsInfo: GatheringsInfoTypes;
  participantList: ParticipantListTypes;
}

export default function JoinBtn({
  id,
  gatheringsInfo,
  participantList,
}: JoinBtnProps) {
  const { modal } = useModal();

  const isClosed =
    getTimeUntilDeadline(new Date(gatheringsInfo.registrationEnd)) ===
    '마감되었습니다';
  const isCapacityFull =
    gatheringsInfo.capacity === participantList.totalElements;

  const user = useUserDataStore(state => state.user);

  const participants = participantList.participants;

  // 유저가 해당 모임의 참여자인지 여부
  const isJoined = participants.some(
    participant => participant.userId === user?.id,
  );

  const { handleOnClick, handleJoinBtnClick, handleLeaveBtnClick } =
    useJoinGathering(id);

  return (
    <>
      {isJoined ? (
        <Button
          disabled={isClosed}
          variant={isClosed ? 'disabled' : 'outline'}
          size={CommonSize.LARGE}
          className="h-11 w-[115px]"
          onClick={handleLeaveBtnClick}
        >
          참여 취소하기
        </Button>
      ) : (
        <Button
          disabled={isClosed}
          variant={isClosed || isCapacityFull ? 'disabled' : 'default'}
          size={CommonSize.LARGE}
          className="h-11 w-[115px]"
          onClick={handleJoinBtnClick}
        >
          참여하기
        </Button>
      )}
      {modal.includes(ModalType.LOGIN_REQUIRED) && (
        <Modal
          variant={ModalVariant.NOTICE}
          size={CommonSize.SMALL}
          handleAction={handleOnClick}
        >
          <p className="text-center text-base font-medium text-[#111827]">
            로그인이 필요해요
          </p>
        </Modal>
      )}
    </>
  );
}
