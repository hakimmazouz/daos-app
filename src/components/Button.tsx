import { PropsWithChildren } from "react";
import { cls } from "../lib/helpers";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export default function Button({
  type = "submit",
  className = "bg-blue-500 hover:bg-blue-600",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cls(
        "text-white rounded-md px-10 py-3 text-base font-bold uppercase transition",
        className
      )}
    />
  );
}
