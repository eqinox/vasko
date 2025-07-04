"use client";

import { ArrowUpRight } from "lucide-react";
import { Badge } from "./ui/badge";
import Image from "next/image";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface BaseProps {
  id: number;
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
  id,
  period,
  position,
  company,
  link,
  description,
  technologies,
  title,
  image,
}) => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 640); // Adjust breakpoint if needed
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    // Find the actual scroll container
    const scrollContainer = document.querySelector('.hide-scrollbar');
    
    gsap.to(`.right-content${id}`, {
      x: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: `.right-content${id}`,
        start: 'top 90%',
        scroller: scrollContainer,
        toggleActions: 'restart none none reverse'
      }
    })

    gsap.to(`.left-content${id}`, {
      x: 0,
      opacity: 1,
      delay: 0.3,
      duration: 1,
      scrollTrigger: {
        trigger: `.left-content${id}`,
        start: 'top 90%',
        scroller: scrollContainer,
        toggleActions: 'restart none none reverse'
      }
    })

  }, {})

  return (
    <li
      className="group relative mb-12 grid cursor-pointer gap-4 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
      onClick={isLargeScreen ? () => window.open(link, "_blank") : undefined}
    >
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50"></div>


      {!!period && (
        <header className={`mb-2 mt-1 pb-1 text-xs font-semibold uppercase tracking-wide sm:col-span-2 left-content${id} -translate-x-[392px] opacity-0`}>
          {period}
        </header>
      )}

      <div className={`z-10 sm:order-2 sm:col-span-6 right-content${id} -translate-x-[392px] opacity-0`}>
        <h3
          className="flex flex-row font-medium leading-snug text-slate-200 group-hover:text-teal-300 group-focus-visible:text-teal-300"
          onClick={
            !isLargeScreen ? () => window.open(link, "_blank") : undefined
          }
        >
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

      {!!image && (
        <div className={`relative max-sm:h-36 max-sm:w-44 sm:order-1 sm:col-span-2 left-content${id} -translate-x-[392px] opacity-0`}>
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
    </li>
  );
};

export default Experience;
