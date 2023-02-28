import { FaLinkedinIn, FaGithub, FaDownload, FaArrowUp } from 'react-icons/fa';
import IconButton from '../../global/IconButton';

export default function SideNav() {
  return (
    <nav className="side-nav">
      <ul>
        <li>
          <IconButton
            href="https://www.linkedin.com/in/francisco-javier-roca-vazquez/"
            aria-label="LinkedIn"
            link
          >
            <FaLinkedinIn className="icon" />
          </IconButton>
        </li>
        <li>
          <IconButton
            href="https://github.com/Rocamain"
            aria-label="Github"
            link
          >
            <FaGithub className="icon" />
          </IconButton>
        </li>
        <li>
          <IconButton
            href="https://www.linkedin.com/in/francisco-javier-roca-vazquez/"
            aria-label="Download"
            link
          >
            <FaDownload className="icon" />
          </IconButton>
        </li>
        <li>
          <IconButton
            aria-label="scroll top"
            onClick={() => window.scrollTo(0, 0)}
          >
            <FaArrowUp className="icon" />
          </IconButton>
        </li>
      </ul>
    </nav>
  );
}