import React, { useState } from "react";
import Cards from "./Cards";

const Teams = () => {
  const [teams, setTeams] = useState([
    {
      descrpition:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine,",
      name: "Satish patel",
      position: "founder & CEO, Huddle",
      image: "profile_1.jpg",
    },
    {
      descrpition:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine. ",
      name: "Bruce Mckenzie",
      position: "founder & CEO, Huddle",
      image: "profile_2.jpg",
    },
    {
      descrpition:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine, ",
      name: "Iva boyd",
      position: "founder & CEO, Huddle",
      image: "profile_2.jpg",
    },
  ]);
  return (
    <section>
      <div className="container mx-auto mb-52 pt-16">
          <div className="mx-auto w-[80%]  md:w-[95%]">
            <img
              src="src/assets/images/bg-quotes.png"
              alt="quotes"
              className=""
            />
          </div>
          <div className="space-y-12 grid grid-cols-1 md:grid-cols-3 md:space-y-0">
            {teams.map((item, index) => (
              <Cards
                key={index}
                descrpition={item.descrpition}
                name={item.name}
                position={item.position}
                image={item.image}
              />
            ))}
          </div>
      </div>
    </section>
  );
};

export default Teams;
