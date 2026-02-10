import React, { useEffect, useState, useRef } from "react";

interface AnimatedCounterProps {
  target?: number;
  startValue?: number;
  duration?: number;

  ratePerHour?: number;
  startTime?: number;

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

  // refs must have defaults
  const lastValueRef = useRef<number>(initialValue);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    // ✅ TIME-BASED MODE
    if (ratePerHour && startTime) {
      const animate = () => {
        const now = Date.now();
        const elapsedHours = (now - startTime) / 3600000;
        const targetValue =
          initialValue + elapsedHours * ratePerHour;

        // smooth interpolation
        const newValue =
          lastValueRef.current +
          (targetValue - lastValueRef.current) * 0.1;

        lastValueRef.current = newValue;
        setValue(newValue);

        animationRef.current = requestAnimationFrame(animate);
      };

      animationRef.current = requestAnimationFrame(animate);

      return () => {
        if (animationRef.current !== null) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }

    // ✅ ANIMATION MODE
    let start: number | null = null;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;

      const progress = Math.min(
        (timestamp - start) / duration,
        1
      );

      const eased = easeOutQuad(progress);
      setValue(eased * initialValue);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [initialValue, duration, ratePerHour, startTime]);

  const displayValue = ratePerHour
    ? value.toLocaleString(undefined, {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
      })
    : Math.floor(value).toLocaleString();

  return <span className={className}>{displayValue}</span>;
};

export default AnimatedCounter;
