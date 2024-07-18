'use client';

import { animated, useSpring } from '@react-spring/web';
import { ChevronDown } from 'lucide-react';
import { useEffect } from 'react';

export default function ScrollChev({
  scrolled,
}: Readonly<{ scrolled: number }>) {
  const [springs, api] = useSpring(() => ({
    from: { opacity: 1 },
  }));

  useEffect(() => {
    api.start({ opacity: scrolled >= 10 ? 0 : 1 });
  }, [scrolled, api]);

  return (
    <animated.div
      style={springs}
      className="absolute bottom-16 inset-x-0 mx-auto w-min pointer-events-none"
    >
      <ChevronDown className="animate-bounce" color="white" size={52} />
    </animated.div>
  );
}
