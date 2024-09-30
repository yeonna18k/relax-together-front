import { gatheringsDetailApiService } from '@/entities/gatherings-detail/api/service/GatheringsDetailApiService';
import { ParticipantListTypes } from '@/entities/gatherings-detail/model/information';
import CommonButton from '@/shared/common/ui/common-button';
import Modal from '@/shared/common/ui/modal';
import { useModal } from '@/shared/hooks/useModal';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

interface JoinBtnProps {
  id: string;
  participantList: ParticipantListTypes;
}

export default function JoinBtn({ id, participantList }: JoinBtnProps) {
  const router = useRouter();
  const { modal, openModal } = useModal();

  // TODO: user의 id 필요
  // 유저가 해당 모임에 참여했는지 여부
  const isJoined = false;
  // const participants = participantList.participants;
  // const isJoined = participants.some(
  //   participant => participant.userId === userInfo.id,
  // );

  const queryClient = useQueryClient();

  const { mutate: joinMutation } = useMutation({
    mutationFn: (id: string) => {
      return gatheringsDetailApiService.joinGathering(id);
    },
    onSuccess: data => {
      console.log('성공적으로 참여했습니다:', data);
      queryClient.invalidateQueries({ queryKey: ['participants'] });
    },
    onError: error => {
      console.error('참여하기 요청 실패:', error);
    },
  });

  const handleOnClick = () => {
    // 확인 버튼 클릭 시 로그인 페이지로 리다이렉트
    router.push('/signin');

    // TODO: 로그인 후 기존 페이지로 리다이렉트
  };

  const handleJoinBtnClick = () => {
    // TODO: 로그인 상태 확인 로직 추가
    const isLoggedIn = false;

    if (!isLoggedIn) {
      // 비로그인 시 로그인이 필요하다는 팝업
      openModal('LoginRequiredModal');
    } else {
      // 참여
      joinMutation(id);
    }
  };

  return (
    <>
      {isJoined ? (
        <CommonButton
          variant="outline"
          size="lg"
          className="h-11 w-[115px]"
          // onClick={handleLeaveBtnClick}
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
