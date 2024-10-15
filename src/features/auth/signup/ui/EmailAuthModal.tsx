import Modal from '@/shared/common/ui/modal';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/shared/ui/input-otp';
import { useState } from 'react';

interface EmailAuthModalProps {
  handleVerifyCode: (code: string) => Promise<any>;
}

export default function EmailAuthModal({
  handleVerifyCode,
}: EmailAuthModalProps) {
  const [otp, setOtp] = useState('');
  return (
    <Modal
      variant="single"
      size="sm"
      title="이메일 인증"
      disabled={otp.length < 6}
      handleAction={() => handleVerifyCode(otp)}
    >
      <div className="flex flex-col items-center gap-2">
        <p className="text-base text-gray-800">
          이메일로 전송된 인증번호 6자리를 입력해주세요
        </p>
        <div className="text-center text-sm text-gray-600">
          <div className="flex justify-center">
            메일을 받지 못하신 경우&nbsp;
            <p className="font-semibold text-gray-800">스팸 메일함</p>을
            확인해주세요
          </div>
          <p>이 인증화면을 종료하면 인증번호를 다시 요청해야 합니다</p>
        </div>
        <InputOTP maxLength={6} onChange={e => setOtp(e)}>
          <InputOTPGroup
            className={`my-4 ${otp.length >= 6 ? 'text-green-500' : 'text-gray-800'}`}
          >
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>
    </Modal>
  );
}
