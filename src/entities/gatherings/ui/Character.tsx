'use client';

import Image from 'next/image';

export default function CharacterPage() {
  return (
    <div className="page-container relative flex h-screen w-full items-center justify-center">
      <div className="relative h-full w-full"></div>

      <style jsx>{`
        .page-container {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
