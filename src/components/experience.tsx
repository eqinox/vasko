"use client";

import { ArrowUpRight } from "lucide-react";
import { Badge } from "./ui/badge";
import Image from "next/image";

interface BaseProps {
  link: string;
  description: string;
  technologies: string[];
}

type ProjectProps = {
  type: "Project";
  title: string;
  image: string;
} & BaseProps & {
    period?: never;
    position?: never;
    company?: never;
  };

type ExperienceProps = {
  type: "Experience";
  period: string;
  position: string;
  company: string;
} & BaseProps & {
    title?: never;
    image?: never;
  };

type Props = ProjectProps | ExperienceProps;

const Experience: React.FC<Props> = ({
  period,
  position,
  company,
  link,
  description,
  technologies,
  title,
  image,
}) => {
  return (
    <>
      <li
        className="group relative mb-12 grid cursor-pointer transition-opacity hover:!opacity-100 group-hover/list:opacity-50 sm:grid-cols-8 sm:gap-8 md:gap-4"
        onClick={() => window.open(link, "_blank")}
      >
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50"></div>
        {!!period && (
          <header className="mb-2 mt-1 pb-1 text-xs font-semibold uppercase tracking-wide sm:col-span-2">
            {period}
          </header>
        )}

        {!!image && (
          <div className="relative mb-2 mt-1 pb-1 text-xs font-semibold uppercase tracking-wide sm:col-span-2">
            <Image
              src={image}
              alt="Project image"
              sizes="100vw"
              width={0}
              height={0}
              priority
              fill
              className="object-contain object-top"
            />
          </div>
        )}

        <div className="z-10 sm:col-span-6">
          <h3 className="flex flex-row font-medium leading-snug text-slate-200 group-hover:text-teal-300 group-focus-visible:text-teal-300">
            {!!title && `${title}`}
            {!!position && `${position}`} {!!company && ` - ${company}`}
            <ArrowUpRight
              className="ml-2 translate-y-1 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              size={15}
            />
          </h3>
          <p className="text-sm leading-normal">{description}</p>
          {technologies.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-2">
              {technologies?.map((item) => (
                <li key={item}>
                  <Badge variant="tech">{item}</Badge>
                </li>
              ))}
            </ul>
          )}
        </div>
      </li>
    </>
  );
};

export default Experience;
