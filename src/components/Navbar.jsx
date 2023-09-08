import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin, } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import LOGO from './assets/logo.png'

import { Link } from 'react-scroll'


const Navbar = () => {

    const [nav, setNav] = useState(false)
    const Handelclick = () => setNav(!nav)
    return (
        <div className=" fixed  flex justify-between items-center px-4 mx-auto h-20 border-b-[1px]  bg-[#0a192f] w-full    ">
            <div className=" hover:scale-110 duration-500">
            <Link to={'home'} smooth={true} duration={700}   >
            <img className="w-[115px]  h-25 " src={LOGO} alt="logo" />

            </Link>
                
            </div>

            <div>
                <ul className="hidden md:flex flex-row text-white space-x-8 px-10">
                    <li className="cursor-pointer hover:text-yellow-600   hover:scale-110 duration-500 ">
                        <Link to="home" spy={true} smooth={true} offset={50} duration={500} >
                            Home
                        </Link>
                    </li>
                    <li className="cursor-pointer hover:text-yellow-600   hover:scale-110 duration-300 ">
                    <Link to="about" spy={true} smooth={true} offset={50} duration={500} >
                        About
                    </Link> 
                    </li>
                    <li className="cursor-pointer hover:text-yellow-600   hover:scale-110 duration-300">
                    <Link to="skills" spy={true} smooth={true} offset={50} duration={500} >
                        Skills
                    </Link>
                    </li>
                    <li className="cursor-pointer hover:text-yellow-600   hover:scale-110 duration-300 ">
                        <Link to="work" spy={true} smooth={true} offset={50} duration={500} >
                            Projects
                        </Link>
                    </li>


                    <li className="cursor-pointer hover:text-yellow-600   hover:scale-110 duration-300 ">
                        <Link to="contact" spy={true} smooth={true} offset={50} duration={500} >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
            {/* HamBurgasMenu */}
            <div className="z-10  md:hidden " onClick={Handelclick}>
                {!nav ? <FaBars className="text-white" /> : <FaTimes className="text-white" />}

            </div>

            {/*Mobile Menu Items */}

            <ul className={!nav ? 'hidden' : "absolute top-0  text-white h-screen bg-slate-900 w-full left-0 flex  flex-col justify-center items-center md:hidden"}>
                <li className="py-4 text-4xl cursor-pointer hover:text-red-500 duration-300">
                <Link onClick={Handelclick} to="home" spy={true} smooth={true} offset={50} duration={700} >
                            Home
                        </Link>

                </li>
                <li className="py-4 text-4xl cursor-pointer hover:text-red-500 duration-300">
                <Link onClick={Handelclick} to="about" spy={true} smooth={true} offset={50} duration={700} >
                        About
                    </Link> 

                </li> 


                <li className="py-4 text-4xl cursor-pointer hover:text-red-500 duration-300">
                <Link onClick={Handelclick} to="skills" spy={true} smooth={true} offset={50} duration={700} >
                        Skills
                    </Link>

                </li>

                <li className="py-4 text-4xl cursor-pointer hover:text-red-500 duration-300">
                <Link onClick={Handelclick} to="work" spy={true} smooth={true} offset={50} duration={700} >
                            Projects
                        </Link>
                </li>

                <li className="py-4 text-4xl cursor-pointer hover:text-red-500 duration-300">
                <Link onClick={Handelclick} to="contact" spy={true} smooth={true} offset={50} duration={700} >
                            Contact
                        </Link>
                </li>
            </ul>


            {/* SocialMedia */}
            <div className=" hidden lg:flex fixed left-0 top-[36%] text-white">

                <ul className="">
                    <li className=" px-4 flex w-[160px] h-[60px] justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
                        <a className="flex justify-between items-center w-full text-gray-300" href="https://www.linkedin.com/in/samsonkaleti" target="__blank">Linkedin  <FaLinkedin size={"30px"} /></a>
                    </li>
                    <li className="px-4 flex w-[160px] h-[60px] justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
                        <a className="flex justify-between items-center w-full text-white" href="https://github.com/samsonkaleti" target="__blank">GitHub  <FaGithub size={"30px"} /></a>
                    </li>
                    <li className=" px-4 flex w-[160px] h-[60px] justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
                        <a className="flex justify-between items-center w-full text-white" href="mailto:kaletishyam@gmail.com?subject=SweetWords&body=Please send me Your message here!">Gmail<HiOutlineMail size={"30px"} /></a>
                    </li>

                    <li className="px-4 flex w-[160px] h-[60px] justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
                        <a className="flex justify-between items-center w-full text-white" href="https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/ccbp_prod/media/resume_generated/samson__2023-07-15-173920.pdf">Resume  <BsFillPersonLinesFill size={"30px"} /></a>
                    </li>
                </ul>


            </div>



        </div>
    );
};

export default Navbar;
