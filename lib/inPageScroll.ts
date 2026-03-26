import { scrollTargetIds } from "@/config/site";

const SMOOTH_SCROLL_DURATION_MS = 400;

/** Hash slug → element id (prefer section heading for scroll landing). */
export const IN_PAGE_SCROLL_TARGETS: Record<string, string> = scrollTargetIds;

function scrollOffsetForTarget() {
  const minClearance = 108;
  const upperBand = Math.round(window.innerHeight * 0.12);
  return Math.max(minClearance, upperBand);
}

function prefersReducedMotion() {
  return (
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

function smoothScrollWindowTo(targetY: number, durationMs: number) {
  const startY = window.scrollY;
  const dy = targetY - startY;
  if (Math.abs(dy) < 0.5) return;
  const t0 = performance.now();

  function frame(now: number) {
    const t = Math.min(1, (now - t0) / durationMs);
    window.scrollTo(0, startY + dy * easeOutCubic(t));
    if (t < 1) requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
}

/** Smooth scroll to `#slug` with the same offset as the main nav. */
export function scrollToHash(href: string) {
  if (!href.startsWith("#")) return;
  const raw = href.slice(1);
  if (!raw) return;
  const targetId = IN_PAGE_SCROLL_TARGETS[raw] ?? raw;
  const el = document.getElementById(targetId);
  if (!el) return;

  const offset = scrollOffsetForTarget();
  const y = el.getBoundingClientRect().top + window.scrollY - offset;
  const top = Math.max(0, y);

  if (prefersReducedMotion()) {
    window.scrollTo(0, top);
  } else {
    smoothScrollWindowTo(top, SMOOTH_SCROLL_DURATION_MS);
  }

  try {
    window.history.replaceState(null, "", href);
  } catch {
    /* ignore */
  }
}
