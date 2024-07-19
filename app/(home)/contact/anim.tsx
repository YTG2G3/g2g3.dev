'use client';

import { animated, config, useSpring } from '@react-spring/web';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Anim() {
  const router = useRouter();

  // Code: Use react spring to animate the image to float around the screen randomly forever
  // You can use the `useSpring` hook to create the animation

  const move = useSpring({
    from: { transform: 'translate(0, 0)', rotate: '0deg' },
    to: async next => {
      while (true) {
        await next({
          transform: `translate(${getRandomInt(-30, 30)}px, ${getRandomInt(-30, 30)}px)`,
          rotate: `${getRandomInt(-10, 10)}deg`,
        });
      }
    },
    config: { ...config.stiff, duration: 1000 },
  });

  const show = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { ...config.default, duration: 5000 },
  });

  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <animated.div style={{ ...show, ...move }}>
      <Image
        src="/spuci1.png"
        alt="Email"
        width={800}
        height={800}
        className="absolute w-[20%] h-auto ml-[35%] mt-[10%] top-0 left-0 cursor-pointer"
        onClick={() => router.push('mailto:henryk@algorix.io')}
      />
    </animated.div>
  );
}
