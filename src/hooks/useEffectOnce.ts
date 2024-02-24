import { useEffect } from 'react';

// shorthand method for when you only want to run the effect once
export const useEffectOnce = (effect: React.EffectCallback) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(effect, []);
};
