import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function CountUpNumber({ value = 0, suffix = "", duration = 1200 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const startTime = performance.now();
    const target = Number(value) || 0;

    const tick = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [duration, isInView, value]);

  return (
    <span ref={ref}>
      {display.toLocaleString("en-US")}{suffix}
    </span>
  );
}
