import { TouchEvent, useCallback, useState } from 'react';

type SwipeInput = {
  onSwipedLeft?: () => void;
  onSwipedRight?: () => void;
};

type SwipeOutput = {
  onTouchStart: (e: TouchEvent) => void;
  onTouchMove: (e: TouchEvent) => void;
  onTouchEnd: () => void;
};

type Coords = {
  x: number;
  y: number;
};

/**
 * Handy hook for enabling horizontal swiping on any component.
 * The returned methods should be attached to the desired DOM element's onTouchStart, onTouchMove and onTouchEnd events.
 */
export const useHorizontalSwipe = (input: SwipeInput): SwipeOutput => {
  const [touchStart, setTouchStart] = useState<Coords>({ x: 0, y: 0 });
  const [touchEnd, setTouchEnd] = useState<Coords>({ x: 0, y: 0 });

  const minSwipeDistance = 50;

  const onTouchStart = useCallback((e: TouchEvent) => {
    setTouchEnd({ x: 0, y: 0 });
    setTouchStart({ x: e.targetTouches[0].clientX, y: e.targetTouches[0].clientY });
  }, []);

  const onTouchMove = useCallback((e: TouchEvent) => {
    setTouchEnd({ x: e.targetTouches[0].clientX, y: e.targetTouches[0].clientY });
  }, []);

  const onTouchEnd = useCallback(() => {
    const horizontalDistance = touchStart.x - touchEnd.x;
    const verticalDistance = touchStart.y - touchEnd.y;

    // in order to be considered an horizontal swipe, the vertical distance should be
    // no bigger than 50% of the horizontal distance. This prevents accidental swipes
    // while scrolling for example.
    const isMostlyHorizontal = Math.abs(verticalDistance) < Math.abs(horizontalDistance) * 0.5;

    if (!touchStart || !touchEnd || !isMostlyHorizontal) return;
    const isLeftSwipe = horizontalDistance > minSwipeDistance;
    const isRightSwipe = horizontalDistance < -minSwipeDistance;

    if (isLeftSwipe) {
      input.onSwipedLeft?.();
    }
    if (isRightSwipe) {
      input.onSwipedRight?.();
    }
  }, [input, touchEnd, touchStart]);

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  };
};
