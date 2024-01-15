'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { EnumSearchParams } from '@/app/lib/definitions'

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set(EnumSearchParams.SEARCH, term);
      params.set(EnumSearchParams.PAGE, '1');
    }
    else params.delete(EnumSearchParams.SEARCH);

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className='relative'>
      <div className='absolute h-full flex items-center pl-2'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      </div>

      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        type="text"
        placeholder={ placeholder }
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get('query')?.toString() ?? ''}
        className="input input-bordered input-sm w-full max-w-xs h-[38px] pl-8 rounded-3xl"
      />
    </div>
  );
}
