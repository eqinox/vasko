import About from "@/components/about";
import Experience from "@/components/experience";

const experience = [
  {
    period: "2022 — 2024",
    position: "Frontend Developer",
    company: "Arte Soft",
    link: "https://www.arte-soft.com/",
    description: `I was in the process of finishing the creation of a
website for Sofia University St. Kliment Ohridski`,
    technologies: ["JavaScript", "React"],
  },
  {
    period: "2018 — 2021",
    position: "Data Processing Technology team",
    company: "Internet Securities",
    link: "https://www.emis.com/",
    description: `Responsible to keep the data clean and consistent on
the site. Making automation web scraping processes. Along with the regular work got deep into Selenium testing library and Regexes. Beside regular work I joined in Internal project with
React, for making the automation process easier
for other teams`,
    technologies: ["Python", "Perl", "Selenium", "Web Scraping", "React"],
  },
  {
    period: "2017 — 2018",
    position: "Angular Developer",
    company: "Internet Securities",
    link: "https://metareading.com/#!/",
    description: `Maintenance and fixing bugs of an already made site with SEAN Stack`,
    technologies: ["Saleforce", "Express", "Angular", "Node.js"],
  },
  {
    period: "Apr — Oct 2015",
    position: "Trainee",
    company: "Indeavr",
    link: "https://indeavr.com/end-of-year-blitz-interview-with-our-founder-and-ceo-mr-valcho-stoyanov/",
    description: `Worked on independent project`,
    technologies: ["C#", "SharePoint", "MySQL", "Entity Framework Core"],
  },
];

const projects = [
  {
    title: "Ecommerce Shopping Platform",
    image: "/images/prostore.png",
    link: "https://ecommerce-shopping-platform.vercel.app/",
    description:
      "Example of an eCommerce platform with a cart for adding products and checkout via Stripe, PayPal, or cash on delivery. It features user and admin roles, a sign-in/sign-up system, an admin panel, product search with category filtering and sorting, and a review system for logged-in users.",
    technologies: [
      "Next.js",
      "PostgreSQL",
      "Prisma ORM",
      "TypeScript",
      "Zod",
      "ShadCN",
      "Next Auth",
      "Jest",
    ],
  },
  {
    title: "Fire Homes",
    image: "/images/fire-homes.png",
    link: "https://fire-homes-rouge.vercel.app/",
    description:
      "Example of an real estate website. Google authentication and email/password. Admin and user roles",
    technologies: ["Next.js", "TypeScript", "Firebase", "ShadCN", "Zod"],
  },
];

const Page = () => {
  return (
    <div className="flex flex-col">
      <section
        id="about"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      >
        <div className="sticky -top-5 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
            About
          </h2>
        </div>
        <About />
      </section>

      <section
        id="experience"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      >
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
            Experience
          </h2>
        </div>
        <ol className="group/list">
          {experience.map((item, index) => (
            <Experience
              company={item.company}
              description={item.description}
              link={item.link}
              period={item.period}
              position={item.position}
              technologies={item.technologies}
              key={index}
              type="Experience"
            />
          ))}
        </ol>
      </section>

      <section id="projects">
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
            Projects
          </h2>
        </div>
        <ul className="group/list">
          {projects.map((item, index) => (
            <Experience
              type="Project"
              description={item.description}
              image={item.image}
              link={item.link}
              technologies={item.technologies}
              title={item.title}
              key={index}
            />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Page;
