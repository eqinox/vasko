"use client";
import { Github, Linkedin } from "lucide-react";
const Socials = () => {
  return (
    <ul className="flex gap-5 max-lg:mt-5">
      <Github
        className="hover:text-slate-200"
        cursor="pointer"
        onClick={() => window.open("https://github.com/eqinox")}
      />

      <Linkedin
        className="hover:text-slate-200"
        cursor="pointer"
        onClick={() =>
          window.open("https://www.linkedin.com/in/vasil-nikolov-bb8696a6/")
        }
      />
    </ul>
  );
};

export default Socials;
