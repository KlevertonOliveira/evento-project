'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './logo';

const routes = [
  { name: 'Home', href: '/' },
  { name: 'All Events', href: '/events/all' },
];

export default function Header() {
  const activePathname = usePathname();

  console.log(activePathname);

  return (
    <header className='flex items-center justify-between border-b border-white/10 h-14 sm:px-9 px-3'>
      <Logo />

      <nav className='h-full'>
        <ul className='flex gap-x-6 h-full text-sm'>
          {routes.map((route) => (
            <li
              key={route.name}
              className={cn(
                'hover:text-white relative transition-colors flex items-center',
                {
                  'text-white': activePathname === route.href,
                  'text-white/50': activePathname !== route.href,
                }
              )}
            >
              <Link href={route.href}>{route.name}</Link>

              {activePathname === route.href && (
                <motion.div
                  layoutId='header-active-link'
                  className='bg-accent h-1 w-full absolute bottom-0'
                ></motion.div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
