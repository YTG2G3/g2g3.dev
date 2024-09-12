'use client';

import AlgorixLogo from '@/components/algorix-logo';
import ScrollChev from '@/components/scroll-chev';
import useScrolled from '@/lib/hook/use-scrolled';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Slideshow() {
  const { scrolled, hitBottom, objRef } = useScrolled();
  const router = useRouter();

  useEffect(() => {
    if (hitBottom) router.push('/contact');
  }, [hitBottom, router]);

  return (
    <>
      <Parallax pages={4} className="top-0 left-0 no-scrollbar" ref={objRef}>
        <ParallaxLayer
          offset={0}
          speed={1}
          className="flex flex-col justify-center items-center pointer-events-none"
        >
          <AlgorixLogo className="text-6xl text-white" />
          <span className="text-3xl text-white">presents...</span>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={1} className="bg-amber-600/50" />

        <ParallaxLayer
          offset={1.3}
          speed={-0.3}
          className="pointer-events-none"
        >
          <Image
            src="/anteater.png"
            alt="Anteater"
            width={1070}
            height={1422}
            className="transform w-[15%] rotate-[-23deg] ml-[70%] opacity-40"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <Image
            src={'/cloud.svg'}
            alt="cloud"
            width={800}
            height={800}
            style={{ display: 'block', width: '20%', marginLeft: '55%' }}
          />
          <Image
            src={'/cloud.svg'}
            alt="cloud"
            width={800}
            height={800}
            style={{ display: 'block', width: '10%', marginLeft: '15%' }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <Image
            src={'/cloud.svg'}
            alt="cloud"
            width={800}
            height={800}
            style={{ display: 'block', width: '20%', marginLeft: '70%' }}
          />
          <Image
            src={'/cloud.svg'}
            alt="cloud"
            width={800}
            height={800}
            style={{ display: 'block', width: '20%', marginLeft: '40%' }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <Image
            src={'/cloud.svg'}
            alt="cloud"
            width={800}
            height={800}
            style={{ display: 'block', width: '10%', marginLeft: '10%' }}
          />
          <Image
            src={'/cloud.svg'}
            alt="cloud"
            width={800}
            height={800}
            style={{ display: 'block', width: '20%', marginLeft: '75%' }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <Image
            src={'/cloud.svg'}
            alt="cloud"
            width={800}
            height={800}
            style={{ display: 'block', width: '20%', marginLeft: '60%' }}
          />
          <Image
            src={'/cloud.svg'}
            alt="cloud"
            width={800}
            height={800}
            style={{ display: 'block', width: '25%', marginLeft: '30%' }}
          />
          <Image
            src={'/cloud.svg'}
            alt="cloud"
            width={800}
            height={800}
            style={{ display: 'block', width: '10%', marginLeft: '80%' }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <Image
            src={'/cloud.svg'}
            alt="cloud"
            width={800}
            height={800}
            style={{ display: 'block', width: '20%', marginLeft: '5%' }}
          />
          <Image
            src={'/cloud.svg'}
            alt="cloud"
            width={800}
            height={800}
            style={{ display: 'block', width: '15%', marginLeft: '75%' }}
          />
        </ParallaxLayer>
      </Parallax>
      <ScrollChev scrolled={scrolled} />
    </>
  );
}

// TODO: Copyright &copy; {new Date().getFullYear()} Taeksoo Kwon. All rights reserved.
