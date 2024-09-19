'use client';
import { useModal } from '@/shared/hooks/useModal';
import { AlertDialog } from '@/shared/ui/alert-dialog';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function Provider({ children }: { children: React.ReactNode }) {
  const { isOpen, closeModal } = useModal();
  return (
    <QueryClientProvider client={queryClient}>
      <AlertDialog open={isOpen} onOpenChange={closeModal}>
        {children}
      </AlertDialog>
    </QueryClientProvider>
  );
}
