"use client";
import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const buttonVariants = cva(
  "relative overflow-hidden hover:scale-105 cursor-pointer inline-flex items-center justify-center whitespace-nowrap text-xs font-semibold tracking-widest transition-all duration-300 ease-in-out rounded-full",
  {
    variants: {
      variant: {
        primary: "bg-black text-white hover:bg-neutral-900 hover:brightness-95",
        secondary: "bg-white text-black hover:bg-black hover:text-white",
        glass:
          "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20",
        outline:
          "border-2 border-brand-primary bg-transparent text-brand-primary hover:bg-brand-primary hover:text-white",
      },
      size: {
        default: "px-8 py-4",
        sm: "px-4 py-2 text-[10px]",
        md: "px-6 py-3 text-xs",
        lg: "px-10 py-5 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  target?: string;
  icon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, href, children, target, icon, ...props },
    ref,
  ) => {
    const content = (
      <span className="relative z-10 flex items-center gap-2">
        {icon}
        {children}
      </span>
    );

    if (href) {
      return (
        <Link
          href={href}
          target={target ?? "_self"}
          className={cn(buttonVariants({ variant, size, className }))}
        >
          {content}
        </Link>
      );
    }
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {content}
      </button>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
