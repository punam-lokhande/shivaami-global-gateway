import { RefObject, useEffect, useLayoutEffect, useState } from "react";

type Params = {
  containerRef: RefObject<HTMLElement | null>;
  elementRef: RefObject<HTMLElement | null>;
  /** Tailwind lg breakpoint by default */
  minWidth?: number;
};

/**
 * Returns the element's top offset (in px) relative to the container's top.
 * Only active on desktop (>= minWidth). Returns null below breakpoint.
 */
export function useDesktopOffsetTop({
  containerRef,
  elementRef,
  minWidth = 1024,
}: Params) {
  const [offsetTop, setOffsetTop] = useState<number | null>(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    const mq = window.matchMedia(`(min-width: ${minWidth}px)`);

    const measure = () => {
      const container = containerRef.current;
      const el = elementRef.current;
      if (!mq.matches || !container || !el) {
        setOffsetTop(null);
        return;
      }
      const containerRect = container.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      const top = Math.max(0, elRect.top - containerRect.top);
      setOffsetTop(Math.floor(top));
    };

    measure();

    const onMediaChange = () => measure();
    mq.addEventListener?.("change", onMediaChange);

    const ro = new ResizeObserver(() => measure());
    if (containerRef.current) ro.observe(containerRef.current);
    if (elementRef.current) ro.observe(elementRef.current);

    window.addEventListener("resize", measure);

    return () => {
      window.removeEventListener("resize", measure);
      mq.removeEventListener?.("change", onMediaChange);
      ro.disconnect();
    };
  }, [containerRef, elementRef, minWidth]);

  // Legacy Safari fallback
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia(`(min-width: ${minWidth}px)`);
    if (mq.addEventListener) return;

    const legacyHandler = () => {
      const container = containerRef.current;
      const el = elementRef.current;
      if (!mq.matches || !container || !el) {
        setOffsetTop(null);
        return;
      }
      const containerRect = container.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      const top = Math.max(0, elRect.top - containerRect.top);
      setOffsetTop(Math.floor(top));
    };

    mq.addListener(legacyHandler);
    return () => mq.removeListener(legacyHandler);
  }, [containerRef, elementRef, minWidth]);

  return offsetTop;
}
