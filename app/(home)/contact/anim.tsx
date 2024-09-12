'use client';

import { animated, config, useSpring } from '@react-spring/web';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Anim() {
  const router = useRouter();

  const show = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { ...config.default, duration: 5000 },
  });

  return (
    <animated.div
      style={show}
      className="w-screen h-[100vh] flex items-center justify-center"
    >
      <Image
        src="/spuci1.png"
        alt="Email"
        width={800}
        height={800}
        className="w-[20%] h-auto cursor-pointer animate-bounce"
        onClick={() => router.push('mailto:henryk@algorix.io')}
      />
    </animated.div>
  );
}
