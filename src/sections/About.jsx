import {
  SiNextdotjs,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiGithub,
  SiRedux,
  SiTypescript,
  SiMysql,
  SiTailwindcss,
  SiReact,
  SiRender,
  SiVercel,
  SiNetlify,
  SiPostman,
  SiCanva,
  SiFigma,
  SiGreensock,
  SiFramer,
} from "react-icons/si";
import Footer from "./Footer";

// Split into two lines
const firstRowIcons = [
  { icon: <SiHtml5 color="#e34c26" />, label: "HTML5" },
  { icon: <SiCss3 color="#264de4" />, label: "CSS3" },
  { icon: <SiTailwindcss color="#38bdf8" />, label: "Tailwind" },
  { icon: <SiJavascript color="#f0db4f" />, label: "JavaScript" },
  { icon: <SiReact color="#61dafb" />, label: "React.js" },
  { icon: <SiRedux color="#764abc" />, label: "Redux" },
  { icon: <SiNextdotjs color="black" />, label: "Next.js" },
  { icon: <SiTypescript color="#007acc" />, label: "TypeScript" },
  { icon: <SiFigma color="#F24E1E" />, label: "Figma" },
  { icon: <SiCanva color="#633aef" />, label: "Canva" },
];


const secondRowIcons = [
  { icon: <SiExpress color="gray" />, label: "Express" },
  { icon: <SiNodedotjs color="#68a063" />, label: "Node.js" },
  { icon: <SiMongodb color="#4DB33D" />, label: "MongoDB" },
  { icon: <SiMysql color="#00758F" />, label: "MySQL" },
  { icon: <SiGithub color="black" />, label: "GitHub" },
  { icon: <SiRender color="#46E3B7" />, label: "Render" },
  { icon: <SiVercel color="black" />, label: "Vercel" },
  { icon: <SiNetlify color="#00C7B7" />, label: "Netlify" },
  { icon: <SiPostman color="#FF6C37" />, label: "Postman" },
];

const IconRow = ({ icons }) => (
  <div className="flex flex-wrap justify-center gap-10 mb-[63.5px]">
    {icons.map(({ icon, label }, idx) => (
      <div
        key={idx}
        className="flex flex-col items-center gap-2 text-4xl hover:scale-150 transition-transform duration-300"
      >
        <div className="animate-spin-slow">{icon}</div>
        <span className="text-sm font-medium">{label}</span>
      </div>
    ))}
  </div>
);

const About = () => {
  return (
    <div className="mt-20 px-0  text-black">
      <h2 className="text-4xl font-bold text-center">
        Things I'm <span className="text-blue-500">good</span> at
      </h2>
      <p className="text-xl text-center mt-2">
        skills, interests, passion and hobbies
      </p>

      <div className="mt-10">
        <IconRow icons={firstRowIcons} />
        <IconRow icons={secondRowIcons} />
      </div>

      {/* Soft Skills or Hobbies */}
      <p className="text-md text-center mt-3 max-w-xl mx-auto text-gray-600">
        I'm a strong communicator, a team player, and always eager to explore
        new technologies. Outside of coding, I enjoy sketching UI designs and
        staying updated with the latest tech trends.
      </p>
      <Footer />
    </div>
  );
};

export default About;
