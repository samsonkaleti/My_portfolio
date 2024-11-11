import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="  text-gray-300  w-full bg-[#0a192f] md:h-screen "
    >
      <div className="flex flex-col justify-center items-center h-full w-full ">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 ">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-yellow-400">
              About
            </p>
          </div>
        </div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 ">
          <div className="sm:text-right text-4xl font-bold">
            <p className="">
              Hi. I'm <span className="text-yellow-400">Samson,</span>  nice to meet you. Please take a look around on my profile.
            </p>
          </div>

          <div className="">
            <p>
              \\\ As a passionate and versatile Full Stack Developer, I specialize in
          crafting seamless web applications that are both intuitive and
          scalable. With expertise across the entire development stack — from
          front-end design to back-end architecture — I bring your ideas to life
          with clean, efficient code and a keen eye for user experience. Whether
          building responsive, high-performance websites or architecting robust
          APIs, I focus on delivering solutions that meet both technical
          requirements and user needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
