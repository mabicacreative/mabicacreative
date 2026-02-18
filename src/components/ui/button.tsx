import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  as?: React.ElementType;
  href?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  as: Component = "button",
  href,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-colors duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantStyles = {
    primary:
      "bg-sage-leaf text-deep-moss hover:bg-lime-shoot focus:ring-sage-leaf",
    secondary:
      "bg-deep-moss text-morning-mist hover:bg-opacity-90 focus:ring-deep-moss",
    outline:
      "border-2 border-sage-leaf text-sage-leaf hover:bg-sage-leaf hover:text-deep-moss focus:ring-sage-leaf",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <Component
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      href={href}
      {...props}
    >
      {children}
    </Component>
  );
}
