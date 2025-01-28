import { Mail, Phone } from "lucide-react";
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
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold uppercase pt-20">Vasil Nikolov</h1>
          <h2 className="text-xl font-bold">Software Engineer</h2>
        </div>
        <div className="uppercase mt-16 border-b-4 border-stone-800 font-bold">
          Professional Experience
        </div>
      </div>
    </div>
  );
};

export default CvPage;
