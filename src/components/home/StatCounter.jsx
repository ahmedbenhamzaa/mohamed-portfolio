import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

function formatNumber(value) {
  return new Intl.NumberFormat('en-US').format(value);
}

export default function StatCounter({ value = 0, suffix = '', duration = 1400 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let animationFrame;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(value * eased));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(tick);
      }
    };

    animationFrame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(animationFrame);
  }, [duration, isInView, value]);

  return (
    <span ref={ref}>
      {formatNumber(displayValue)}{suffix}
    </span>
  );
}
