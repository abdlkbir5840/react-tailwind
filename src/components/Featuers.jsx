import React, { useState } from "react";
import FeatuerBox from "./FeatuerBox";
const Featuers = () => {
  const [itmes, setItems] = useState([
    {
      icon: "icon_access_anywhere.svg",
      title: "Access your files anywhere",
      description:
        "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
    },
    {
      icon: "icon_security.svg",
      title: "Security you can trust",
      description:
        "factor authentication and user-controlled encryption are Just a couple of the security features we allow to help secure your files. ",
    },
    {
      icon: "icon_collaboration.svg",
      title: "Real-time collaboration",
      description:
        " Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required. ",
    },
    {
      icon: "icon_any_file.svg",
      title: "Store any type of file",
      description:
        "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared. ",
    },
  ]);
  return (
    <section>
      <div className="container mx-auto">
        <div className="w-fit mx-auto grid grid-cols-1 md:grid-cols-2 gap-9">
          {itmes.map((item, index) => (
            <FeatuerBox
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featuers;
