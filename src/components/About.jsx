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
              \\\ Hi there! I'm an aspiring frontend developer bursting with
              creativity and a strong desire to make my mark in the world of web
              design. My journey started with diving into HTML, CSS,
              JavaScript, and  React, I've since explored projects like React projects,
              where I brought my frontend skills to life. I'm enthusiastic about
              creating user-friendly designs that resonate with users and
              deliver a smooth browsing experience. While my experience might be
              fresh, my learning curve is steep—I'm constantly upskilling
              through online courses and tutorials to stay updated with the
              latest trends. Join me on my journey by checking out my portfolio
              and watching my growth!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
