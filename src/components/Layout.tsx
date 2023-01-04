import React, { PropsWithChildren } from "react";

interface LayoutProps extends PropsWithChildren {
  title?: string;
  description?: string;
}

export default function Layout({ title, description, children }: LayoutProps) {
  if (title && title != document.title) document.title = title;
  return <div className="pt-32 h-full pb-24">{children}</div>;
}
