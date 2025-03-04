import { ReactNode } from 'react';

export default function MainContentLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className='pt-24 lg:w-[55%] lg:py-24'>
      <div className='flex flex-col space-y-20 lg:space-y-32'>{children}</div>
    </main>
  );
}
