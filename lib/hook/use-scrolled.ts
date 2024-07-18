import { IParallax } from '@react-spring/parallax';
import { useEffect, useRef, useState } from 'react';

export default function useScrolled() {
  const [scrolled, setScrolled] = useState(0);
  const objRef = useRef<IParallax>();

  const onScroll = e => {
    setScrolled(e.target.scrollTop);
  };

  useEffect(() => {
    if (!objRef.current || !objRef.current.container) return;
    objRef.current.container.current.onscroll = onScroll;
  });

  return { scrolled, objRef };
}
