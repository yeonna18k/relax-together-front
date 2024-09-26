'use client';
import { useModal } from '@/shared/hooks/useModal';
import useMswApiMock from '@/shared/hooks/useMswApiMock';
import { AlertDialog } from '@/shared/ui/alert-dialog';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
const queryClient = new QueryClient();

export default function Provider({ children }: { children: React.ReactNode }) {
  useMswApiMock(); //TODO: api 연동이 완료되면 해당 부분 삭제
  const { modal, resetModal } = useModal();
  return (
    <QueryClientProvider client={queryClient}>
      <AlertDialog open={modal.length > 0} onOpenChange={resetModal}>
        {children}
      </AlertDialog>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
