import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Fill } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const [open, setOpen] = useState([]);

  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "*", name: "Not found" },
  ];

  return (
    <nav>
      <div
        className="md:hidden text-3xl bg-yellow-400 p-4"
        onClick={() => setOpen(!open)}
      >
        {open === true ? (
          <MdOutlineClose className="cursor-pointer" />
        ) : (
          <RiMenu2Fill className="cursor-pointer" />
        )}
      </div>

      <ul
        className={`md:flex p-6 duration-1000 text-center md:static absolute ${
          open ? "top-14" : "-top-60"
        } bg-yellow-400 px-6 shadow-lg`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
