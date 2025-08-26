import { FaReact, FaJava, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaJsSquare, FaGithub } from "react-icons/fa";
import { SiSpringboot, SiTailwindcss, SiTypescript, SiPostgresql } from "react-icons/si";

const createIcon = (Icon, color) => () => <Icon className="tech-icon" style={{ color }} />;

const techIcons = {
  React: createIcon(FaReact, "#61DBFB"),
  Java: createIcon(FaJava, "#f89820"),
  NodeJS: createIcon(FaNodeJs, "#3C873A"),
  Python: createIcon(FaPython, "#3776AB"),
  HTML5: createIcon(FaHtml5, "#E34F26"),
  CSS3: createIcon(FaCss3Alt, "#1572B6"),
  JavaScript: createIcon(FaJsSquare, "#F7DF1E"),
  TypeScript: createIcon(SiTypescript, "#3178C6"),
  SpringBoot: createIcon(SiSpringboot, "#6DB33F"),
  Tailwind: createIcon(SiTailwindcss, "#38B2AC"),
  GitHub: createIcon(FaGithub, "#000000"),
  PostgreSQL: createIcon(SiPostgresql, "#336791"), 
};

export default techIcons;
