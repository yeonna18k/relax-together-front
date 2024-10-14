import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { VerificationStatus } from '../VerificationStatus';

export default function VerifyToken() {
  const [verificationStatus, setVerificationStatus] =
    useState<VerificationStatus | null>(VerificationStatus.LOADING);
  const [loading, setLoading] = useState<boolean>(true);
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  useEffect(() => {
    const verifyToken = async () => {
      try {
        if (!token) {
          setVerificationStatus(VerificationStatus.INVALID);
          setLoading(false);
          return;
        }

        setLoading(true);

        const response = await axios.post('/api/verify-token', {
          token,
        });

        if (response.data.success) {
          setVerificationStatus(VerificationStatus.SUCCESS);
        } else {
          setVerificationStatus(VerificationStatus.FAILED);
        }
      } catch (error) {
        setVerificationStatus(VerificationStatus.ERROR);
      } finally {
        setLoading(false);
      }
    };

    verifyToken();
  }, [token]);

  if (loading) {
    return <div>인증 중...</div>;
  }

  switch (verificationStatus) {
    case VerificationStatus.SUCCESS:
      return <div>토큰 인증 성공! 비밀번호를 재설정하세요.</div>;
    case VerificationStatus.FAILED:
      return <div>유효하지 않은 토큰입니다.</div>;
    case VerificationStatus.ERROR:
      return <div>서버 오류가 발생했습니다. 다시 시도해주세요.</div>;
    case VerificationStatus.INVALID:
      return <div>토큰이 유효하지 않습니다.</div>;
    default:
      return <div>알 수 없는 상태입니다.</div>;
  }
}
