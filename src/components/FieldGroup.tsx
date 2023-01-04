import { PropsWithChildren } from "react";

interface FieldGroupProps extends PropsWithChildren {
  label: string;
}

export default function FieldGroup({ label, children }: FieldGroupProps) {
  return (
    <label>
      <span>{label}</span>
      {children}
    </label>
  );
}
