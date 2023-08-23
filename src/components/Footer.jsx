import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  const [contacts, setContacts] = useState([
    { image: "icon_phone.svg", text: "+212662345694" },
    { image: "icon_email.svg", text: "habonbahmadi@gmail.com" },
  ]);
  const [links, setLinks] = useState([
    "About Us",
    "Jobs",
    "Press",
    "Blog",
    "Contact Us",
    "Terms",
    "Privacy",
  ]);
  const [socialIcons, setSocialIcons] = useState([
    "facebook",
    "twitter",
    "instagram",
  ]);
  return (
    <section className="bg-[#0c1524] ">
      <div className="container mx-auto pt-64 md:pt-52 pb-24 text-white">
        <a href="/">
          <img
            src="assets/images/logo.svg"
            alt="logo"
            className="w-44 h-16 object-contain"
          />
        </a>
        <div className="mt-8 flex justify-between flex-wrap flex-col md:flex-row gap-8">
          <div className="flex items-start  gap-4 w-80 max-w-full">
            <img
              src="/src/assets/images/icon_location.svg"
              alt="location icon"
              className="w-5 h-5 object-contain"
            />
            <p className="font-normal text-sm tracking-[0.8px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              nihil tenetur omnis illo distinctio saepe eligendi fugit, suscipit
              repellat nobis.
            </p>
          </div>
          <div>
            {contacts.map((contact, index) => (
              <div
                key={index}
                className="flex items-center gap-4 mb-4 last-of-type:mb-0"
              >
                <img
                  src={`src/assets/images/${contact.image}`}
                  alt="icon"
                  className="w-5 h-5 object-contain"
                />
                <p>{contact.text}</p>
              </div>
            ))}
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={`${link}`}
                  className="hover:text-blue-400 text-base transition-colors duration-500"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex gap-4 w-full md:w-auto justify-center">
            {socialIcons.map((icon, index) => (
              <li key={index}>
                <a href="" className="group">
                  <div className="w-10 h-10 element-center border border-white rounded-full">
                    {icon === "facebook" ? (
                      <FaFacebookF className="group-hover:text-blue-500 transition-all duration-300" />
                    ) : icon === "instagram" ? (
                      <FaInstagram className="group-hover:text-blue-500 transition-all duration-300" />
                    ) : (
                      <FaTwitter className="group-hover:text-blue-500 transition-all duration-300" />
                    )}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Footer;
Footer;
