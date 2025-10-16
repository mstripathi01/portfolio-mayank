import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const About = () => {
  const openResumeLink = () => {
    window.open(
      "https://drive.google.com/file/d/1KjMNSZQo9zj34mB-HXWVoihYlEiwn0X0/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-2xl font-semibold mt-1">I'm Mayank Tripathi</p>
        <br />
        <p className="text-xl text-gray-400">
          Experienced Front-End/Full-Stack Engineer proficient in advanced
          JavaScript (ES6+), React.js, and Redux, with back-end integration
          expertise using Node.js and Express. Adept at leading and coordinating
          projects, I focus on delivering well-architected, responsive user
          interfaces and optimizing application performance. Possesses proven
          skills in technical coordination and effective time management.
        </p>
        <div className="mt-10 flex">
          <Link
            to="projects"
            smooth
            duration={500}
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
          >
            Projects
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight size={20} className="ml-1" />
            </span>
          </Link>
          <button
            className="group text-white w-fit px-6 py-3 my-2 ml-14 flex items-center rounded-md bg-gradient-to-r from-gray-500 to-gray-500 cursor-pointer"
            onClick={openResumeLink}
          >
            Resume <BsFillPersonLinesFill size={30} className="ml-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
