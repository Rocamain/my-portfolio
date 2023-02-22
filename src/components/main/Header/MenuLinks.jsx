import { NavLink } from 'react-router-dom';

//  PENDING IMPLEMENTATION OF ACTIVE CLASS

export default function MenuLinks({ handleShow }) {
  const handleClick = (e) => {
    e.stopPropagation();
    handleShow();
  };
  return (
    <>
      <NavLink
        onClick={handleClick}
        // className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
        className="nav-link"
        to="/#About"
      >
        About me
      </NavLink>

      <NavLink
        onClick={handleClick}
        className="nav-link"
        // className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
        to="/#Projects"
      >
        Projects
      </NavLink>

      <NavLink
        onClick={handleClick}
        className="nav-link"
        // className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
        to="/#Contact"
      >
        Contact
      </NavLink>
    </>
  );
}
