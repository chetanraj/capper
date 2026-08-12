import {
  type CSSProperties,
  type PointerEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

type Point = { x: number; y: number };

const DESKTOP_MAX_ROTATE = 10;
const COARSE_MAX_ROTATE = 5;
const DESKTOP_SHINE_RANGE = 38;
const COARSE_SHINE_RANGE = 26;

function lerp(start: number, end: number, amount: number) {
  return start + (end - start) * amount;
}

function readCoarsePointer() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(pointer: coarse)').matches;
}

function readReducedMotion() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Pointer-driven 3D tilt for the hero illustration.
 * Works with mouse hover and touch drag; eases back on pointer leave.
 */
export function useHeroTilt() {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const targetRef = useRef<Point>({ x: 0, y: 0 });
  const activeRef = useRef(false);
  const frameRef = useRef<number | null>(null);
  const [motion, setMotion] = useState<Point>({ x: 0, y: 0 });
  const [reducedMotion, setReducedMotion] = useState(readReducedMotion);
  const [coarsePointer, setCoarsePointer] = useState(readCoarsePointer);

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const pointerQuery = window.matchMedia('(pointer: coarse)');

    const syncMotion = () => setReducedMotion(motionQuery.matches);
    const syncPointer = () => setCoarsePointer(pointerQuery.matches);

    syncMotion();
    syncPointer();
    motionQuery.addEventListener('change', syncMotion);
    pointerQuery.addEventListener('change', syncPointer);

    return () => {
      motionQuery.removeEventListener('change', syncMotion);
      pointerQuery.removeEventListener('change', syncPointer);
    };
  }, []);

  const maxRotate = coarsePointer ? COARSE_MAX_ROTATE : DESKTOP_MAX_ROTATE;
  const shineRange = coarsePointer ? COARSE_SHINE_RANGE : DESKTOP_SHINE_RANGE;

  const updateTargetFromEvent = useCallback((clientX: number, clientY: number) => {
    const node = stageRef.current;
    if (!node) return;

    const rect = node.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    const x = ((clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((clientY - rect.top) / rect.height) * 2 - 1;

    targetRef.current = {
      x: Math.max(-1, Math.min(1, x)),
      y: Math.max(-1, Math.min(1, y)),
    };
    activeRef.current = true;
  }, []);

  const resetTarget = useCallback(() => {
    targetRef.current = { x: 0, y: 0 };
    activeRef.current = false;
  }, []);

  const onPointerMove = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      if (reducedMotion) return;
      updateTargetFromEvent(event.clientX, event.clientY);
    },
    [reducedMotion, updateTargetFromEvent],
  );

  const onPointerLeave = useCallback(() => {
    if (reducedMotion) return;
    resetTarget();
  }, [reducedMotion, resetTarget]);

  useEffect(() => {
    if (reducedMotion) return;

    const tick = () => {
      const ease = activeRef.current ? 0.14 : 0.08;
      setMotion((prev) => ({
        x: lerp(prev.x, targetRef.current.x, ease),
        y: lerp(prev.y, targetRef.current.y, ease),
      }));
      frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, [reducedMotion]);

  const rotateX = motion.y * -maxRotate;
  const rotateY = motion.x * maxRotate;
  const shineX = 50 + motion.x * shineRange;
  const shineY = 50 + motion.y * shineRange;

  const style = (
    reducedMotion
      ? {}
      : {
          '--c-tilt-rotate-x': `${rotateX.toFixed(2)}deg`,
          '--c-tilt-rotate-y': `${rotateY.toFixed(2)}deg`,
          '--c-shine-x': `${shineX.toFixed(1)}%`,
          '--c-shine-y': `${shineY.toFixed(1)}%`,
        }
  ) as CSSProperties;

  const handlers = reducedMotion
    ? {}
    : {
        onPointerMove,
        onPointerLeave,
        onPointerEnter: onPointerMove,
      };

  return {
    stageRef,
    style,
    handlers,
    reducedMotion,
  };
}
