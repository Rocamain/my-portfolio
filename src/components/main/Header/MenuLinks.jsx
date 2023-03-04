import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

//  PENDING IMPLEMENTATION OF ACTIVE CLASS

export default function MenuLinks({ handleShow }) {
  const { hash } = useLocation();

  const handleClick = (e) => {
    e.stopPropagation();
    Boolean(handleShow) && handleShow();
  };

  return (
    <>
      <NavLink
        onClick={handleClick}
        className={() => `nav-link ${hash === '#About' ? 'active' : ''}`}
        to="/#About"
        value="#About"
      >
        About me
      </NavLink>

      <NavLink
        onClick={handleClick}
        className={() => `nav-link ${hash === '#Projects' ? 'active' : ''}`}
        to="/#Projects"
      >
        Projects
      </NavLink>

      <NavLink
        onClick={handleClick}
        className={() => `nav-link ${hash === '#Contact' ? 'active' : ''}`}
        to="/#Contact"
      >
        Contact
      </NavLink>
    </>
  );
}
