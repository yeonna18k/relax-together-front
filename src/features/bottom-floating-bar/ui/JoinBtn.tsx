import { ParticipantListTypes } from '@/entities/gatherings-detail/model/information';
import CommonButton from '@/shared/common/ui/common-button';
import Modal from '@/shared/common/ui/modal';
import { useModal } from '@/shared/hooks/useModal';
import useJoinGathering from '../model/hook/useJoinGathering';

interface JoinBtnProps {
  id: string;
  participantList: ParticipantListTypes;
}

export default function JoinBtn({ id, participantList }: JoinBtnProps) {
  const { modal } = useModal();

  // TODO: user의 email 필요
  // 유저가 해당 모임에 참여했는지 여부
  const isJoined = false;
  // const participants = participantList.participants;
  // const isJoined = participants.some(
  //   participant => participant.email === userInfo.email,
  // );

  const { handleOnClick, handleJoinBtnClick, handleLeaveBtnClick } =
    useJoinGathering(id);

  return (
    <>
      {isJoined ? (
        <CommonButton
          variant="outline"
          size="lg"
          className="h-11 w-[115px]"
          onClick={handleLeaveBtnClick}
        >
          참여 취소하기
        </CommonButton>
      ) : (
        <CommonButton
          variant="default"
          size="lg"
          className="h-11 w-[115px]"
          onClick={handleJoinBtnClick}
        >
          참여하기
        </CommonButton>
      )}
      {modal.includes('LoginRequiredModal') && (
        <Modal variant="single" size="sm" handleAction={handleOnClick}>
          <p className="text-center text-base font-medium text-[#111827]">
            로그인이 필요해요
          </p>
        </Modal>
      )}
    </>
  );
}
