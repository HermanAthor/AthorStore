import React from "react";

const shapes: any = { square: "rounded-none" } as const;
const variants: any = {
  outline: {
    gray_800: "border border-gray-100 border-solid text-gray-100",
    gray_500: "border-2 border-gray-100 border-solid text-gray-100",
    bluegray_100: "border border-bluegray-100 border-solid text-gray-100",
  },
  fill: {
    gray_800: "bg-gray-800 text-white-A700",
    white_A700: "bg-white-A700 text-gray-800",
  },
} as const;
const sizes: any = {
  xs: "p-[5px]",
  sm: "p-2.5",
  md: "p-[13px]",
  lg: "p-4",
  xl: "p-[19px]",
  "2xl": "sm:pl-5 pl-[23px] py-[23px]",
  "3xl": "sm:pr-5 pr-[35px] py-[35px]",
} as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
