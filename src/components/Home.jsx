import React from "react";
import { Link } from "react-scroll";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Home = () => {
  const [Name] = useTypewriter({
    words: ["MERN Stack Developer", "Next.JS Developer"],
    loop: true,
    typeSpeed: [70],
    delaySpeed: [1000],
    deleteSpeed: [50],
  });

  return (
    <div name="home" className="h-screen w-full bg-[#0a192f]">
      {/* Container */}
      <div className="h-full max-w-[1000px] flex flex-col justify-center mx-auto px-8 text-white">
        <p className="text-pink-400 py-3 text-lg ">Hi, my name is</p>
        <h1 className="text-4xl sm:text-6xl font-bold text-yellow-600">
          Samson Kaleti
        </h1>

        <h2 className="text-4xl sm:text-7xl font-bold py-3 text-[#8892b0] ">
          I'm a <span className="text-[#8892b0] text-6xl">{Name}</span>
          <span className="text-5xl">
            <Cursor cursorStyle=">>>" cursorColor="green" />
          </span>
        </h2>

        <p className="max-w-[700px] text-[#8892b0] py-4">
          I believe in the power of collaboration and continuous learning.
          Whether working solo or as part of a team, I take a problem-solving
          approach to every project, ensuring scalable and maintainable
          solutions. I’m always staying up-to-date with emerging technologies
          and best practices to deliver cutting-edge results.
        </p>

        <div className="">
          <Link to={"work"} smooth={true} duration={700}>
            <button className="text-white border-2 px-6 py-3 my-2 hover:text-yellow-400 border-yellow-300 hover:border-white hover:scale-110 duration-300">
              View Work
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
