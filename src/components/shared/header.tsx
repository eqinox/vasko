import Nav from "./nav";
import Socials from "./socials";

const Header = () => {
  return (
    <header className="h-auto lg:sticky lg:top-0 lg:flex lg:h-screen lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
      <div className="z-40">
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          Vasil Nikolov
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Web Developer
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          I design and code beautifully things for the web, and I love what I
          do.
        </p>
        <Nav />
      </div>

      <Socials />
    </header>
  );
};

export default Header;
