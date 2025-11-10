import React, { useEffect, useState } from "react";

interface AnimatedCounterProps {
  target: number;
  duration?: number;
  className?: string;
}

const easeOutQuad = (t: number) => t * (2 - t);

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  target,
  duration = 1500,
  className = "",
}) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start: number | null = null;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = easeOutQuad(progress);

      setValue(Math.floor(eased * target));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [target, duration]);

  return <span className={className}>{value.toLocaleString()}</span>;
};

export default AnimatedCounter;
