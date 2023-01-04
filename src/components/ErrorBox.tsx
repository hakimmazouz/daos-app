import { PropsWithChildren } from "react";
import { cls } from "../lib/helpers";

interface ErrorBoxProps extends PropsWithChildren {
  className?: string;
}

export default function ErrorBox({ children, className }: ErrorBoxProps) {
  return (
    <div
      className={cls(
        "border-red-300 bg-red-100 rounded-md p-6 text-amber-800 mb-4 mt-4",
        className
      )}
    >
      {children}
    </div>
  );
}
