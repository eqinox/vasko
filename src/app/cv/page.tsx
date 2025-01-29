"use client";
import {
  Award,
  Backpack,
  BookHeart,
  CircleUser,
  GraduationCap,
  Mail,
  Phone,
  Star,
} from "lucide-react";
import ContactIcons from "@/components/shared/contact-icons";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const softwareSkills = [
  { name: "React", value: 90 },
  { name: "Angular", value: 45 },
  { name: "Node", value: 88 },
  { name: "TypeScript", value: 85 },
  { name: "C#", value: 40 },
  { name: "GIT", value: 60 },
  { name: "Python", value: 32 },
  { name: "Perl", value: 28 },
  { name: "HTML & CSS", value: 80 },
];

const personalSkills = [
  { name: "Team Player", value: 60 },
  { name: "Resilience", value: 80 },
  { name: "Communication Skills", value: 75 },
  { name: "Self-Reliance", value: 100 },
];
const languages = [
  { name: "Bulgarian", value: 100 },
  { name: "English", value: 80 },
];

const softwareUniversityCertificates = [
  {
    name: "PHP Basics",
    link: "https://softuni.bg/certificates/details/3289/7dcf977c",
  },
  {
    name: "JavaScript Basics",
    link: "https://softuni.bg/certificates/details/3290/c7585b57",
  },
  {
    name: "Web Fundamentals",
    link: "https://softuni.bg/certificates/details/3291/2db2b493",
  },
  {
    name: "Teamwork and Personal Skills",
    link: "https://softuni.bg/certificates/details/3292/3bc35495",
  },
  {
    name: "Java Basics",
    link: "https://softuni.bg/certificates/details/3293/abab527e",
  },
  {
    name: "OOP (C#, Java, PHP)",
    link: "https://softuni.bg/certificates/details/5242/40d4d5a0",
  },
  {
    name: "Programming Fundamentals",
    link: "https://softuni.bg/certificates/details/10667/72c9c9cd",
  },
  {
    name: "Software Technologies",
    link: "https://softuni.bg/certificates/details/13432/e560c873",
  },
  {
    name: "JS Advanced",
    link: "https://softuni.bg/certificates/details/15618/9d8c2d2e",
  },
  {
    name: "JS Applications",
    link: "https://softuni.bg/certificates/details/16524/c3e71d34",
  },
  {
    name: "JS",
    link: "https://softuni.bg/certificates/details/16678/ad061a47",
  },
];

const CvPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[25%_75%] min-h-[calc(100vh-16rem)]">
      <div className="bg-stone-400 flex flex-col gap-2 h-full">
        <div className="flex justify-center p-4 w-full">
          <Avatar className="max-w-[80%] md:max-w-[80%] w-[400px] h-full aspect-square">
            <AvatarImage src="./images/vasko.jpg" className="object-cover" />
            <AvatarFallback>VN</AvatarFallback>
          </Avatar>
        </div>
        <div className="cvSection uppercase">Contacts</div>
        <div className="p-2">
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <a
              href="tel:+359878835493"
              className="hover:text-stone-300 transition-colors"
            >
              +359 878 83 54 93
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <a
              href="mailto:vasil.nikolov123@gmail.com"
              className="hover:text-stone-300 transition-colors"
            >
              vasil.nikolov123@gmail.com
            </a>
          </div>
          <div className="flex justify-center gap-4 mt-2">
            <ContactIcons />
          </div>
        </div>

        <div className="cvSection uppercase">Languages</div>
        {languages.map((item) => (
          <div className="cvSectionSkill" key={item.name}>
            <div>{item.name}</div>
            <Progress value={item.value} />
          </div>
        ))}
        <div className="cvSection uppercase">Personal Skills</div>
        {personalSkills.map((item) => (
          <div className="cvSectionSkill" key={item.name}>
            <div>{item.name}</div>
            <Progress value={item.value} />
          </div>
        ))}
        <div className="cvSection uppercase">Software Skills</div>
        {softwareSkills.map((item) => (
          <div className="cvSectionSkill" key={item.name}>
            <div>{item.name}</div>
            <Progress value={item.value} />
          </div>
        ))}
      </div>

      <div className="bg-stone-300 pl-6 pr-4">
        {/* Title */}
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold uppercase pt-20">Vasil Nikolov</h1>
          <h2 className="text-xl font-bold">Web Developer, UX designer</h2>
        </div>

        {/* Professional Experience */}
        <div className="cvSectionArea">
          <CircleUser size={50} className="mb-2 text-sky-500 " />
          Professional Experience
        </div>

        <div className="mt-6 grid max-sm:flex max-sm:flex-col sm:grid-cols-[15%_85%]">
          {/* Section */}
          <div className="cvSectionProfExpFirstCol ">Jan 2022 - Nov 2024</div>

          <div className="cvSectionProfExpSecondCol">
            <span className="cvSectionProfessionalExperienceTitle">
              React Web Developer
            </span>
            <div
              className="cvSectionPosition"
              onClick={() => {
                window.open("https://www.arte-soft.com/", "_blank");
              }}
            >
              Arte-Soft
            </div>
            <ul className="list-disc ml-4">
              <li className="pl-2">
                I was in the process of finishing the creation of a website for{" "}
                <span className="font-bold underline cursor-pointer hover:opacity-60">
                  Sofia University St. Kliment Ohridski
                </span>
                , which was built using
                <span className="font-bold"> ReactJS</span>.
              </li>
            </ul>
          </div>

          {/* Section */}
          <div className="cvSectionProfExpFirstCol ">Dec 2018 - Jan 2021</div>

          <div className="cvSectionProfExpSecondCol">
            <span className="cvSectionProfessionalExperienceTitle">
              Data Processing Technology team
            </span>
            <div
              className="cvSectionPosition"
              onClick={() => {
                window.open("https://www.emis.com/en/", "_blank");
              }}
            >
              Internet Securities
            </div>
            <ul className="list-disc ml-4">
              <li className="pl-2">
                Responsible to keep the data clean and consistent on the site
              </li>
              <li className="pl-2">
                Making automation{" "}
                <span className="font-bold">web scraping processes</span> with
                <span className="font-bold">Python</span> &{" "}
                <span className="font-bold">Perl</span>.
              </li>

              <li className="pl-2">
                Along with the regular work got deep into{" "}
                <span className="font-bold">Selenium </span> testing library and{" "}
                <span className="font-bold">Regexes</span>.
              </li>
              <li className="pl-2">
                Beside regular work i joined in Internal project with{" "}
                <span className="font-bold">React</span>,{" "}
                <span className="font-bold">HTML</span> for making the
                automation process easier for other teams
              </li>
            </ul>
          </div>

          {/* Section */}
          <div className="cvSectionProfExpFirstCol ">Nov 2017 - Mar 2018</div>

          <div className="cvSectionProfExpSecondCol">
            <span className="cvSectionProfessionalExperienceTitle">
              Angular Developer
            </span>
            <div
              className="cvSectionPosition"
              onClick={() => {
                window.open("https://metareading.com/#!/", "_blank");
              }}
            >
              Metareading
            </div>
            <ul className="list-disc ml-4">
              <li className="pl-2">
                Maintenance and fixing bugs of an already made site
              </li>
              <li className="pl-2">
                SEAN Stack (<span className="font-bold">Saleforce</span>,
                <span className="font-bold">Express</span>,
                <span className="font-bold">Angular</span>,
                <span className="font-bold">Node.js</span>)
              </li>
            </ul>
          </div>

          {/* Section */}

          <div className="cvSectionProfExpFirstCol ">Nov 2017 - Mar 2018</div>

          <div className="cvSectionProfExpSecondCol">
            <span className="cvSectionProfessionalExperienceTitle">
              Trainee
            </span>
            <div
              className="cvSectionPosition"
              onClick={() => {
                window.open(
                  "https://indeavr.com/end-of-year-blitz-interview-with-our-founder-and-ceo-mr-valcho-stoyanov/",
                  "_blank"
                );
              }}
            >
              Indeavr
            </div>
            <ul className="list-disc ml-4">
              <li className="pl-2">Worked on independent project</li>
              <li className="pl-2">
                Full stack
                <span className="font-bold">C# SharePoint</span> mysql.
              </li>
            </ul>
          </div>
        </div>

        {/* Vocational Training / Studies */}
        <div className="cvSectionArea">
          <GraduationCap size={50} className="mb-2 text-sky-500 " />
          Vocational Training / Studies
        </div>

        <div className="flex flex-row gap-2 max-sm:flex-col max-sm:gap-0 mb-2 max-sm:mb-4 mt-2">
          <div className="text-sky-500 font-bold">Oct 2012 - Nov 2013</div>
          <div>
            Studied at{" "}
            <span
              className="border-b-2 border-sky-900 font-bold cursor-pointer hover:opacity-70"
              onClick={() => {
                window.open("https://www.telerikacademy.com/", "_blank");
              }}
            >
              Telerik Academy
            </span>
          </div>
        </div>

        <div className="flex flex-row gap-2 max-sm:flex-col max-sm:gap-0">
          <div className="text-sky-500 font-bold">Jan 2014 - Nov 2017</div>
          <div>
            Graduated at{" "}
            <span
              className="border-b-2 border-sky-900 font-bold cursor-pointer hover:opacity-70"
              onClick={() => {
                window.open("https://softuni.bg/", "_blank");
              }}
            >
              Software Academy
            </span>
          </div>
        </div>

        <div className="mt-6">
          <div className="font-bold text-sky-500">
            Software University Certificates:
          </div>
          <div className="flex flex-wrap gap-x-2 gap-y-1 ml-40 max-lg:ml-0">
            {softwareUniversityCertificates.map((item, index) => (
              <div key={item.name} className="flex items-center">
                <span
                  className="underline font-bold cursor-pointer hover:opacity-70"
                  onClick={() => {
                    window.open(item.link, "_blank");
                  }}
                >
                  {item.name}
                </span>
                {index !== softwareUniversityCertificates.length - 1 && ","}
              </div>
            ))}
          </div>
        </div>

        {/* School Education */}
        <div className="cvSectionArea">
          <Backpack size={50} className="mb-2 text-sky-500" />
          School Education
        </div>

        <div className="flex flex-row gap-2 max-sm:flex-col max-sm:gap-0">
          <div className="text-sky-500 font-bold">Sep 2008 - May 2012:</div>
          <div>
            <span
              className="border-b-2 border-sky-900 font-bold cursor-pointer hover:opacity-70"
              onClick={() => {
                window.open("https://www.108su.net/", "_blank");
              }}
            >
              108 Nikola Belovejdov
            </span>
          </div>
        </div>

        {/* Advanced Training */}
        <div className="cvSectionArea">
          <Award size={50} className="mb-2 text-sky-500" />
          Advanced Training
        </div>
        <div className="mt-2">
          <span
            className="border-b-2 border-sky-900 font-bold cursor-pointer hover:opacity-70"
            onClick={() => {
              window.open(
                "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
                "_blank"
              );
            }}
          >
            React course
          </span>
          ,
          <span
            className="border-b-2 border-sky-900 font-bold cursor-pointer hover:opacity-70"
            onClick={() => {
              window.open(
                "https://www.udemy.com/course/nextjs-react-the-complete-guide/?couponCode=ST16MT28125CROW",
                "_blank"
              );
            }}
          >
            Next course
          </span>
        </div>

        {/* Special Skills */}
        <div className="cvSectionArea">
          <Star size={50} className="mb-2 text-sky-500" />
          Special Skills
        </div>

        <div>
          <div className="font-bold text-sky-500">It all depends on you</div>
          <div className="ml-40 max-lg:ml-0 font-bold">
            I can handle any problem no matter how hard it is
          </div>
          <div className="font-bold text-sky-500">The epitome of kindness</div>
          <div className="ml-40 max-lg:ml-0 font-bold">
            Good and nice teammate
          </div>

          <div className="font-bold text-sky-500">Computer Maniac</div>
          <div className="ml-40 max-lg:ml-0 font-bold">
            Excellent skills with computers
          </div>
        </div>

        {/* Hobbyies & Interests */}
        <div className="cvSectionArea">
          <BookHeart size={50} className="mb-2 text-sky-500" />
          Hobbyies & Interests
        </div>

        <div className="grid grid-cols-[25%_75%] max-md:flex max-md:flex-col">
          <div className="font-bold text-sky-500">Sports</div>
          <div>Especially basketball, snowboard, motocross, calisthenics</div>

          <div className="font-bold text-sky-500">Music</div>
          <div>Playing the guitar</div>

          <div className="font-bold text-sky-500">Computer games</div>
          <div>Strategic and shooters</div>
        </div>
      </div>
    </div>
  );
};

export default CvPage;
