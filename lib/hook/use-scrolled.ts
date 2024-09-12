import { IParallax } from '@react-spring/parallax';
import { useEffect, useRef, useState } from 'react';

export default function useScrolled() {
  const [scrolled, setScrolled] = useState(0);
  const [hitBottom, setHitBottom] = useState(false);
  const objRef = useRef<IParallax>();

  const onScroll = (e: Event) => {
    const target = e.target as HTMLElement;
    const scrollTop = target.scrollTop;
    const scrollHeight = target.scrollHeight;
    const clientHeight = target.clientHeight;

    setScrolled(scrollTop);

    // Check if scrolled to the bottom
    if (Math.ceil(scrollTop + clientHeight) >= scrollHeight) {
      setHitBottom(true);
    } else {
      setHitBottom(false);
    }
  };

  useEffect(() => {
    if (!objRef.current || !objRef.current.container) return;

    const container = objRef.current.container.current;
    if (container) {
      container.addEventListener('scroll', onScroll);

      // Clean up the event listener on component unmount
      return () => {
        container.removeEventListener('scroll', onScroll);
      };
    }
  }, []);

  return { scrolled, hitBottom, objRef };
}
