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
  SiBootstrap,
  SiMui,
  // SiThunderbird,
} from "react-icons/si";

// Split into two lines
const firstRowIcons = [
  { icon: <SiHtml5 color="#E34F26" />, label: "HTML5" },
  { icon: <SiCss3 color="#1572B6" />, label: "CSS3" },
  { icon: <SiTailwindcss color="#06B6D4" />, label: "Tailwind CSS" },
  { icon: <SiBootstrap color="#7952B3" />, label: "Bootstrap" },
  { icon: <SiMui color="#007FFF" />, label: "Material UI" },
  { icon: <SiJavascript color="#F7DF1E" />, label: "JavaScript" },
  { icon: <SiReact color="#61DAFB" />, label: "React.js" },
  { icon: <SiRedux color="#764ABC" />, label: "Redux" },
  { icon: <SiNextdotjs color="#000000" />, label: "Next.js" },
  { icon: <SiTypescript color="#3178C6" />, label: "TypeScript" },
  { icon: <SiFigma color="#F24E1E" />, label: "Figma" },
  { icon: <SiCanva color="#00C4CC" />, label: "Canva" },
  { icon: <SiGreensock color="#0F9D58" />, label: "GSAP" },
];



const secondRowIcons = [
  { icon: <SiExpress color="#000000" />, label: "Express.js" },
  { icon: <SiNodedotjs color="#339933" />, label: "Node.js" },
  { icon: <SiMongodb color="#47A248" />, label: "MongoDB" },
  { icon: <SiMysql color="#4479A1" />, label: "MySQL" },
  { icon: <SiGithub color="#181717" />, label: "GitHub" },
  { icon: <SiRender color="#46E3B7" />, label: "Render" },
  { icon: <SiVercel color="#000000" />, label: "Vercel" },
  { icon: <SiNetlify color="#00C7B7" />, label: "Netlify" },
  { icon: <SiPostman color="#FF6C37" />, label: "Postman" },
  // { icon: <SiThunderbird color="#7B3FE4" />, label: "Thunder Client" },
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
      
    </div>
  );
};

export default About;