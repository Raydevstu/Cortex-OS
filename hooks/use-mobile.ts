import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  return React.useSyncExternalStore(
    (callback) => {
      if (typeof window === "undefined") {
        return () => {};
      }
      const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
      mql.addEventListener("change", callback);
      window.addEventListener("resize", callback);
      return () => {
        mql.removeEventListener("change", callback);
        window.removeEventListener("resize", callback);
      };
    },
    () => window.innerWidth < MOBILE_BREAKPOINT,
    () => false // Server snapshot is always false to eliminate hydration mismatch
  );
}
