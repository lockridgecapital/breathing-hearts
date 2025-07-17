// File: src/app/page.tsx (or src/pages/index.tsx for older structure)
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm border-b border-gray-300">
        <div className="flex items-center space-x-3">
          <Image src="/heart-logo.png" alt="Heart Logo" width={40} height={40} />
          <h1 className="text-2xl font-bold font-serif border-l-2 pl-3 border-gray-900">
            the Breathing Hearts Foundation<sup>™</sup>
          </h1>
        </div>
        <nav className="space-x-6 text-sm font-serif text-black-000">
          <Link href="/mission">Mission</Link>
          <Link href="/goals">Goals</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <main className="px-6 py-12 max-w-4xl mx-auto">
        <p className="text-red-700 font-serif italic text-xl mb-8">
          Hope lives between every breath and every beat.
        </p>

        <h2 className="text-2xl font-serif font-bold mb-4">The Mission</h2>
        <p className="mb-8">
          To restore life’s rhythm by advancing access to cancer treatment and cardiology care, delivering hope through research, healing, and human connection.
        </p>

        <h2 className="text-2xl font-serif font-bold mb-4">The Vision</h2>
        <p className="mb-8">
          A global society where every heartbeat is met with compassion, innovation, and an equitable opportunity, regardless of their socioeconomic status, nationality, or financial constraints.
        </p>

        <h2 className="text-2xl font-serif font-bold mb-4">Why It Exists</h2>
        <p>
          The Breathing Hearts Foundation is committed to advancing research and providing care in the fields of cardiology and cancer. We firmly believe that impactful change can only be achieved through conversation, fostering connection and a shared pulse for positive change.
        </p>
      </main>
    </div>   
  );
}