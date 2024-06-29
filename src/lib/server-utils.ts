import 'server-only';

import { unstable_cache } from 'next/cache';
import { notFound } from 'next/navigation';
import prisma from './db';
import { EVENTS_PER_PAGE } from './constants';
import { capitalize } from './utils';

export const getEvents = unstable_cache(async (city: string, page = 1) => {
  const events = await prisma.eventoEvent.findMany({
    where: { city: city === 'all' ? undefined : capitalize(city) },
    orderBy: { date: 'asc' },
    take: EVENTS_PER_PAGE,
    skip: EVENTS_PER_PAGE * (page - 1),
  });

  let totalCount: number;

  if (city === 'all') {
    totalCount = await prisma.eventoEvent.count();
  } else {
    totalCount = await prisma.eventoEvent.count({
      where: { city: capitalize(city) },
    });
  }

  return { events, totalCount };
});

export const getEvent = unstable_cache(async (slug: string) => {
  const event = await prisma.eventoEvent.findUnique({
    where: { slug },
  });

  if (!event) {
    return notFound();
  }

  return event;
});
