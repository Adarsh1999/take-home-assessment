import { DependencyList, useCallback, useEffect } from "react";

const useDebounceEffect = (
  effect: () => void,
  deps: DependencyList,
  delay: number
) => {
  const callback = useCallback(effect, deps);
  useEffect(() => {
    const timeout = setTimeout(callback, delay);
    return () => clearTimeout(timeout);
  }, [callback, delay]);
};
export default useDebounceEffect;
