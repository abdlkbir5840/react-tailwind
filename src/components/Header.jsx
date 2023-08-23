import { useEffect, useRef, useState } from "react";
import logo from "../assets/images/logo.svg";

const Header = () => {
  const [links, setLinks] = useState(["Featuers", "Team", "Sign In"]);
  const headerRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        headerRef.current.classList.remove("btransparent");
        headerRef.current.classList.remove("md:p-16");

        headerRef.current.classList.add("bg-slate-900");
      } else {
        headerRef.current.classList.remove("bg-slate-900");

        headerRef.current.classList.add("btransparent");
        headerRef.current.classList.add("md:p-16");
      }
    });
  }, []);

  return (
    <header
      ref={headerRef}
      className="p-2 sm:p-4 md:p-16 fixed w-full top-0 left-0 z-50 transition-all duration-700"
    >
      <div className="container space-y-2 mx-auto element-between flex-col sm:px-5 sm:flex-row md:flex-row md:space-y-0">
        <a href="/">
          <img src={logo} alt="logo-image" className="h-9 sm:w-30 sm:h-10  md:w-36 md:h-10 lg:w-40 lg:h-10" />
        </a>
        <nav>
          <ul className=" element-center gap-14 sm:gap-8">
            {links.map((link, index) => (
              <li key={index} className="">
                <a
                  href={`/${link.split(" ").join("").toLowerCase()}`}
                  className="text-white opacity-80 hover:underline hover:opacity-100 transition-opacity duration-200 font-bold"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
