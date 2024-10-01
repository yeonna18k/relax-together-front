export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex h-[calc(100vh-80px)] items-center justify-center">
      <div className="flex h-[calc(100vh-56px)] flex-col px-4 pt-[39px] md:pt-[54px] lg:h-[622px] lg:w-[1200px] lg:flex-row lg:gap-16 lg:p-0">
        {children}
      </div>
    </section>
  );
}
