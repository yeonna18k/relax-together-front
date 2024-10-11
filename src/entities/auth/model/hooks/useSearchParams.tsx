import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function VerifyToken() {
  const [verificationStatus, setVerificationStatus] = useState<string | null>(
    null,
  );
  const [loading, setLoading] = useState<boolean>(true);
  const searchParams = useSearchParams();
  const token = searchParams.get('token'); // URL에서 토큰을 가져옴

  useEffect(() => {
    const verifyToken = async () => {
      try {
        if (!token) {
          setVerificationStatus('invalid');
          setLoading(false);
          return;
        }

        setLoading(true);
        const response = await fetch(`/api/verify-token`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            token, // 쿼리 파라미터에서 받은 토큰을 사용
          }),
        });

        const data = await response.json();

        if (data.success) {
          setVerificationStatus('success');
        } else {
          setVerificationStatus('failed');
        }
      } catch (error) {
        setVerificationStatus('error');
      } finally {
        setLoading(false);
      }
    };

    verifyToken();
  }, [token]);

  if (loading) {
    return <div>인증 중...</div>;
  }

  if (verificationStatus === 'success') {
    return <div>토큰 인증 성공! 비밀번호를 재설정하세요.</div>;
  }

  if (verificationStatus === 'failed') {
    return <div>유효하지 않은 토큰입니다.</div>;
  }

  if (verificationStatus === 'error') {
    return <div>서버 오류가 발생했습니다. 다시 시도해주세요.</div>;
  }

  if (verificationStatus === 'invalid') {
    return <div>토큰이 유효하지 않습니다.</div>;
  }

  return <div>알 수 없는 상태입니다.</div>;
}
