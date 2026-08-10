import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "solid" | "outline";

const base =
  "inline-flex items-center justify-center text-center font-label-caps text-label-caps uppercase tracking-widest transition-colors";

const variants: Record<Variant, string> = {
  solid:
    "bg-primary text-on-primary hover:bg-on-primary-fixed-variant",
  outline:
    "border border-primary text-primary hover:bg-surface-container-low",
};

interface CommonProps {
  variant?: Variant;
  className?: string;
  children: ReactNode;
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

/** Botón/CTA reutilizable con las variantes del sistema GanoVida. */
export default function Button(props: ButtonProps) {
  const { variant = "solid", className = "", children } = props;
  const classes = `${base} ${variants[variant]} ${className}`;

  if ("href" in props && props.href !== undefined) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  const { variant: _v, className: _c, children: _ch, ...rest } =
    props as ButtonAsButton;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
