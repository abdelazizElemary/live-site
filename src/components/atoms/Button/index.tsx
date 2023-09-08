/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from "classnames";
import React, { ReactNode } from "react";

type Props = React.ButtonHTMLAttributes<HTMLElement> & {
  outline?: boolean;
  rounded?: boolean;
  variant?: "primary" | "secondary";
  target?: HTMLAnchorElement["target"];
  href?: HTMLAnchorElement["href"];
  icon?: ReactNode;
  iconAlign?: "left" | "right";
  type?: "button" | "submit" | "reset";
  align?: "left" | "right" | "both";
  caps?: boolean;
  thinPadding?: boolean;
  uppercase?: boolean;
  noPadding?: boolean;
  fullRounded?: boolean;
};
const Button: React.FC<React.PropsWithChildren<Props>> = React.forwardRef<HTMLAnchorElement, Props>(
  (
    {
      children,
      className: extraClassName,
      variant,
      onClick,
      href,
      target,
      icon,
      iconAlign = "right",
      type = "button",
      align,
      disabled,
      caps,
      rounded = true,
      noPadding,
      uppercase = true,
      fullRounded = false,
      ...rest
    },
    ref
  ) => {
    const className = classNames(
      [
        rounded && "rounded-md",
        "hover:scale-90",
        "hover:transform",
        "flex",
        "hover:ring-opacity-50",
        "inline-block",
        "items-center",
        "leading-0",
        "text-center",
        "tracking-wider",
        "transition-all",
        "uppercase" && uppercase,
        "whitespace-nowrap",
        !noPadding && "py-2",
        fullRounded && "rounded-[100px]",
        "text-xl",
        "font-semibold",
        "h-14",
      ],

      { "!uppercase": caps },

      variant === "primary" && "text-white bg-gradient-to-l from-violet-0 to-violet-1",
      variant === "secondary" && "text-blue-3 bg-white",

      disabled ? "pointer-events-none bg-bg-7 font-light" : "",

      align === "left" || align === "both" ? "pl-0" : "pl-10 md:pl-20",
      align === "right" || align === "both" ? "pr-0" : "pr-10 md:pr-20",

      extraClassName
    );
    if (href) {
      return (
        <a href={disabled ? "#" : href} target={target}>
          <span aria-disabled={disabled} ref={ref} className={className} onClick={onClick} role="button" tabIndex={0}>
            {icon && iconAlign === "left" && <span className="pr-2">{icon}</span>}
            {children}
            {icon && iconAlign === "right" && <span className="pl-2">{icon}</span>}
          </span>
        </a>
      );
    }

    return (
      <button className={className} onClick={onClick} type={type} disabled={disabled} {...rest}>
        {icon && iconAlign === "left" && <span className={children ? "pr-2" : undefined}>{icon}</span>}
        {children}
        {icon && iconAlign === "right" && <span className={children ? "pl-2" : undefined}>{icon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
