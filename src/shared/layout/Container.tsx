interface ContainerProps {
  children: React.ReactNode;
}
export default function Container({ children }: ContainerProps) {
  return (
    <main className="w-full px-4 pt-10 md:px-6 xl:max-w-[1200px] xl:px-[102px]">
      {children}
    </main>
  );
}
