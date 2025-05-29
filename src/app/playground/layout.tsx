'use client';

import { MainNav } from '@/components/navigation/main-nav';
import { Footer } from '@/components/footer';

export default function PlaygroundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MainNav />
      {children}
      <Footer />
    </>
  );
} 