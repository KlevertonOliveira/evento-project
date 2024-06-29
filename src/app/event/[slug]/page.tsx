import PageTitle from '@/components/page-title';
import { getEvent } from '@/lib/server-utils';
import { Metadata } from 'next';
import Image from 'next/image';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const event = await getEvent(slug);

  return {
    title: `Event: ${event.name}`,
    description: event.description,
  };
}

export async function generateStaticParams() {
  return [{ slug: 'comedy-extravaganza' }, { slug: 'dj-practice-session' }];
}

export default async function EventPage({ params }: Props) {
  const slug = params.slug;
  const event = await getEvent(slug);

  return (
    <main>
      <section className='relative overflow-hidden flex justify-center items-center py-14 md:py-20'>
        <Image
          src={event.imageUrl}
          alt='Event background image'
          fill
          quality={50}
          priority
          sizes='(max-width: 80rem) 100vw, 80rem'
          className='object-cover blur-3xl z-0'
        />

        <div className='z-1 relative flex flex-col gap-6 lg:flex-row lg:gap-16'>
          <Image
            src={event.imageUrl}
            alt={event.name}
            width={300}
            height={200}
            className='rounded-xl border-2 border-white/50 object-cover'
          />

          <div className='flex flex-col'>
            <p className='text-white/75'>
              {new Date(event.date).toLocaleDateString('en-US', {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
              })}
            </p>

            <PageTitle className='mb-2 mt-1 whitespace-nowrap lg:text-5xl'>
              {event.name}
            </PageTitle>

            <p className='whitespace-nowrap text-xl text-white/75'>
              Organized by <span className='italic'>{event.organizerName}</span>
            </p>

            <button className='bg-white/20 text-lg capitalize mt-5 lg:mt-auto w-[95vw] sm:w-full py-2 rounded-md border-white/10 border-2 bg-blur state-effects'>
              Get tickets
            </button>
          </div>
        </div>
      </section>

      <div className='text-center px-5 py-16 min-h-[75vh]'>
        <Section>
          <SectionHeading>About this event</SectionHeading>
          <SectionContent>{event.description}</SectionContent>
        </Section>

        <Section>
          <SectionHeading>Location</SectionHeading>
          <SectionContent>{event.location}</SectionContent>
        </Section>
      </div>
    </main>
  );
}

function Section({ children }: { children: React.ReactNode }) {
  return <section className='mb-12'>{children}</section>;
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className='text-2xl mb-8'>{children}</h2>;
}

function SectionContent({ children }: { children: React.ReactNode }) {
  return (
    <p className='text-lg leading-8 text-white/75 max-w-4xl mx-auto'>
      {children}
    </p>
  );
}
