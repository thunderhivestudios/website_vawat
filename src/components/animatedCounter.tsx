import React, { useEffect, useState } from "react";

interface AnimatedCounterProps {
  // Animation mode
  target?: number;      // legacy
  startValue?: number;  // preferred
  duration?: number;

  // Time-based mode
  ratePerHour?: number;
  startTime?: number; // timestamp in ms

  className?: string;
}

const easeOutQuad = (t: number) => t * (2 - t);

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  target,
  startValue,
  duration = 1500,
  ratePerHour,
  startTime,
  className = "",
}) => {
  const initialValue = startValue ?? target ?? 0;
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    // ✅ TIME-BASED MODE
    if (ratePerHour && startTime) {
      const update = () => {
        const now = Date.now();
        const elapsedHours = (now - startTime) / 3600000;

        setValue(
          initialValue + elapsedHours * ratePerHour
        );
      };

      update();
      const interval = setInterval(update, 1000);
      return () => clearInterval(interval);
    }

    // ✅ ANIMATION MODE (0 → startValue)
    let start: number | null = null;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;

      const progress = Math.min(
        (timestamp - start) / duration,
        1
      );

      const eased = easeOutQuad(progress);
      setValue(Math.floor(eased * initialValue));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [initialValue, duration, ratePerHour, startTime]);

  return (
    <span className={className}>
      {Math.floor(value).toLocaleString()}
    </span>
  );
};

export default AnimatedCounter;
