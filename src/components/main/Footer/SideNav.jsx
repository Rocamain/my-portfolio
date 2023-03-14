import { FaLinkedinIn, FaGithub, FaArrowUp } from 'react-icons/fa';
import IconButton from '../../shared/IconButton';

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
            href="https://drive.google.com/file/d/1go0sBfp5Y8yimuth0Ya4xrYH68os-Ew7/view?usp=share_link"
            aria-label="Download"
            link
          >
            <h6>CV</h6>
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
