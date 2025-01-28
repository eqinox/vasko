"use client";
import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";
const ContactIcons = () => {
  return (
    <>
      <Instagram
        cursor="pointer"
        onClick={() => window.open("https://www.instagram.com/eqinox23/")}
      />

      <Facebook
        cursor="pointer"
        onClick={() => window.open("https://www.facebook.com/eqinox2/")}
      />

      <Twitter
        cursor="pointer"
        onClick={() => window.open("https://x.com/eqinox23")}
      />

      <Linkedin
        cursor="pointer"
        onClick={() =>
          window.open("https://www.linkedin.com/in/vasil-nikolov-bb8696a6/")
        }
      />

      <Github
        cursor="pointer"
        onClick={() => window.open("https://github.com/eqinox")}
      />
    </>
  );
};

export default ContactIcons;
