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
        <p className="text-gray-800">
          이메일로 전송된 인증번호 6자리를 입력해주세요
        </p>
        <p className="text-center text-xs text-gray-600">
          메일을 받지 못하신 경우 스팸 메일함을 확인해주세요
          <br />이 창을 벗어나면 인증번호가 만료됩니다
        </p>
        <InputOTP maxLength={6} onChange={e => setOtp(e)}>
          <InputOTPGroup className="my-4">
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
