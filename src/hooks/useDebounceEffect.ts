import { DependencyList, useCallback, useEffect } from "react";

/**
 * Custom hook for debouncing an effect.
 * It delays the execution of the effect until a certain delay period has passed without any changes in dependencies.
 *
 */
const useDebounceEffect = (
  effect: () => void,
  deps: DependencyList,
  delay: number
) => {
  // Create a memoized version of the effect callback using useCallback
  const callback = useCallback(effect, deps);

  useEffect(() => {
    // Set up a timeout to execute the callback after the delay period
    const timeout = setTimeout(callback, delay);

    // Cleanup function that clears the timeout when the component unmounts or the dependencies change
    return () => clearTimeout(timeout);
  }, [callback, delay]);
};

export default useDebounceEffect;
