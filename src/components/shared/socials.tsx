"use client";
import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";
const Socials = () => {
  return (
    <ul className="flex gap-5 max-lg:mt-5">
      <Instagram
        className="hover:text-slate-200"
        cursor="pointer"
        onClick={() => window.open("https://www.instagram.com/eqinox23/")}
      />

      <Facebook
        className="hover:text-slate-200"
        cursor="pointer"
        onClick={() => window.open("https://www.facebook.com/eqinox2/")}
      />

      <Twitter
        className="hover:text-slate-200"
        cursor="pointer"
        onClick={() => window.open("https://x.com/eqinox23")}
      />

      <Linkedin
        className="hover:text-slate-200"
        cursor="pointer"
        onClick={() =>
          window.open("https://www.linkedin.com/in/vasil-nikolov-bb8696a6/")
        }
      />

      <Github
        className="hover:text-slate-200"
        cursor="pointer"
        onClick={() => window.open("https://github.com/eqinox")}
      />
    </ul>
  );
};

export default Socials;
