import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link" | "saffron" | "gold";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const variants = {
      default: "bg-maroon text-ivory hover:bg-maroon/90 shadow-md shadow-maroon/20",
      saffron: "bg-gradient-to-r from-saffron to-amber text-ivory hover:opacity-95 shadow-lg shadow-saffron/25 border border-saffron/50",
      gold: "bg-gradient-to-r from-gold to-amber text-maroon hover:opacity-95 shadow-lg shadow-gold/25 font-medium border border-gold/50",
      outline: "border-2 border-gold text-maroon hover:bg-gold/10",
      ghost: "hover:bg-gold/10 text-maroon",
      link: "text-saffron underline-offset-4 hover:underline",
    };

    const sizes = {
      default: "h-12 px-6 py-2",
      sm: "h-9 rounded-md px-4",
      lg: "h-14 rounded-full px-8 text-lg",
      icon: "h-12 w-12",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:-translate-y-0.5 active:translate-y-0",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
