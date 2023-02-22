import { NavLink } from 'react-router-dom';

//  PENDING IMPLEMENTATION OF ACTIVE CLASS

export default function MenuLinks({ handleShow }) {
  return (
    <>
      <NavLink
        onClick={handleShow}
        // className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
        className="nav-link"
        to="/#About"
      >
        About me
      </NavLink>

      <NavLink
        onClick={handleShow}
        className="nav-link"
        // className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
        to="/#Projects"
      >
        Projects
      </NavLink>

      <NavLink
        onClick={handleShow}
        className="nav-link"
        // className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
        to="/#Contact"
      >
        Contact
      </NavLink>
    </>
  );
}
