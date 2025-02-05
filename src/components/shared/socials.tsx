"use client";
import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";
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

      <Instagram
        className="hover:text-slate-200"
        cursor="pointer"
        onClick={() => window.open("https://www.instagram.com/eqinox23/")}
      />

      <Twitter
        className="hover:text-slate-200"
        cursor="pointer"
        onClick={() => window.open("https://x.com/eqinox23")}
      />

      <Facebook
        className="hover:text-slate-200"
        cursor="pointer"
        onClick={() => window.open("https://www.facebook.com/eqinox2/")}
      />
    </ul>
  );
};

export default Socials;
