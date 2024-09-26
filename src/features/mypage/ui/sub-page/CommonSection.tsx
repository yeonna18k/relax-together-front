import { PropsWithChildren } from 'react';

export default function CommonSection({ children }: PropsWithChildren) {
  return (
    <section className="mt-6 max-h-[calc(100vh-370px)] overflow-y-scroll lg:max-h-[calc(100vh-428px)]">
      {children}
    </section>
  );
}
