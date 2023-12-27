import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const githubLink = "https://github.com/natrodrigo";
const linkedinLink = "https://www.linkedin.com/in/natarodrigo/";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-700 p-2 text-xs flex flex-col items-center">
      <p>Developed by Natã Pereira</p>
      <div className="flex space-x-2 text-xl">
        <a href={githubLink} target="_blank">
          <FaGithub />
        </a>
        <a href={linkedinLink} target="_blank">
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
}
