"use client";

import type { ComponentProps, MouseEvent } from "react";
import { scrollToHash } from "@/lib/inPageScroll";

type Props = ComponentProps<"a">;

export function InPageLink({ href, onClick, ...rest }: Props) {
  const h = typeof href === "string" ? href : "";

  return (
    <a
      href={href}
      onClick={(e: MouseEvent<HTMLAnchorElement>) => {
        if (h.startsWith("#") && h.length > 1) {
          e.preventDefault();
          scrollToHash(h);
        }
        onClick?.(e);
      }}
      {...rest}
    />
  );
}
