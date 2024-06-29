'use client';

import { getEvents } from '@/lib/server-utils';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SearchForm() {
  const router = useRouter();
  const [searchText, setSearchText] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!searchText) return;

    router.push(`/events/${searchText}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='w-full sm:w-[36.25rem]'
    >
      <input
        className='w-full h-16 rounded-lg bg-white/[7%] px-6 outline-none ring-accent/50 transition-colors focus:ring-2 focus:bg-white/10'
        type='text'
        placeholder='Search for events in any city'
        spellCheck='false'
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </form>
  );
}
