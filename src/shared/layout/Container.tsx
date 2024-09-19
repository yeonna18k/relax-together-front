interface ContainerProps {
  children: React.ReactNode;
}
export default function Container({ children }: ContainerProps) {
  return (
    <main className="mx-auto w-full bg-gray-50 px-4 pt-10 md:px-6 xl:max-w-[1200px]">
      {children}
    </main>
  );
}
