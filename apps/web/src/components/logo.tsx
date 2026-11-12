import Image from "next/image";

import { cn } from "cn";

interface LogoProps {
  className?: string;
}

/**
 * Red Sizzle brand logotype asset (public/images/Group.webp, 2741x483, ~5.67:1).
 * Height is controlled via className; width scales automatically.
 */
export default function Logo({ className }: LogoProps) {
  return (
    <Image
      src="/images/Group.webp"
      alt="Red Sizzle"
      width={2741}
      height={483}
      priority
      draggable={false}
      className={cn("h-7 w-auto", className)}
    />
  );
}
