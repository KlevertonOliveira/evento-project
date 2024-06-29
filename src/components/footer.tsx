import Link from 'next/link';

const routes = [
  { name: 'Terms & Conditions', href: '/terms-conditions' },
  { name: 'Privacy Policy', href: '/privacy-policy' },
];

export default function Footer() {
  return (
    <footer className='mt-auto flex items-center justify-between h-16 border-t border-white/10 px-3 sm:px-9 text-xs text-white/25'>
      <small className='text-xs'>
        &copy; 2050 ByteGrad. All rights reserved.
      </small>

      <ul className='flex gap-x-3 sm:gap-x-8'>
        {routes.map((route) => (
          <li key={route.href}>
            <Link href={route.href}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
