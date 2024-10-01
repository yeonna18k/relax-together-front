'use client';
import { useModal } from '@/shared/hooks/useModal';
import { AlertDialog } from '@/shared/ui/alert-dialog';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
const queryClient = new QueryClient();

export default function Provider({ children }: { children: React.ReactNode }) {
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
