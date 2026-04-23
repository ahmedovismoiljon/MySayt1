import { NavLink } from "react-router-dom";

import { motion } from "framer-motion";
import './Nav.css'

function Navbar() {
  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/project", label: "Project" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <div className="nav-wrapper">
      <motion.div
        className="nav-container"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        {links.map((item) => (
          <NavLink key={item.path} to={item.path} className="nav-item">
            {({ isActive }) => (
              <>
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="active-pill"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span>{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </motion.div>
    </div>

    
  );
}
export default Navbar;