import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';

//  PENDING IMPLEMENTATION OF ACTIVE CLASS

export default function MenuLinks({ handleShow }) {
  const [start, setStart] = useState(false);

  const { hash } = useLocation();

  const handleClick = (e) => {
    e.stopPropagation();
    handleShow && handleShow();
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
        // className={handle}
        className={() => `nav-link ${hash === '#Contact' ? 'active' : ''}`}
        to="/#Contact"
      >
        Contact
      </NavLink>
    </>
  );
}
