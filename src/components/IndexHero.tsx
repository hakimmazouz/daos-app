import { PropsWithChildren } from "react";

interface IndexHeroProps extends PropsWithChildren {
  title: string;
  tagline?: string;
}

export default function IndexHero({
  children,
  tagline,
  title,
}: IndexHeroProps) {
  return (
    <div className="container mx-auto pb-20 pt-24 flex justify-between items-end">
      <div className="content text-6xl ">
        {tagline && <p className="opacity-40">{tagline}</p>}
        <h1>{title}</h1>
      </div>
      {children && <div className="secondary">{children}</div>}
    </div>
  );
}
