import { useSignout } from '@/entities/auth/api';
import useAccessToken from '@/shared/hooks/useAccessToken';
import { cn } from '@/shared/lib/utils';
import { useUserDataStore } from '@/shared/store/useUserDataStore';
import { Button } from '@/shared/ui/button';
import { useRouter } from 'next/navigation';

interface LogoutButtonProps {
  className?: string;
}
export default function LogoutButton({ className }: LogoutButtonProps) {
  const router = useRouter();
  const { setAccessToken } = useAccessToken();
  const { signout } = useSignout();
  const clearUser = useUserDataStore(state => state.clearUser);

  const handleSignout = () => {
    signout();
    setAccessToken('');
    clearUser();
    router.push('/');
  };
  return (
    <Button
      variant="ghost"
      className={cn(
        'justify-start p-0 text-base font-medium text-gray-400 underline underline-offset-2 hover:text-green-500',
        className,
      )}
      onClick={handleSignout}
    >
      로그아웃
    </Button>
  );
}
