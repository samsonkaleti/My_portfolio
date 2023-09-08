import React from "react";
import {BsBoxArrowInUpRight} from  'react-icons/bs' 
import {AiFillGithub} from 'react-icons/ai'
import project1 from "./assets/project1.png";  
import project2 from './assets/project2.png'  
import project3 from './assets/project3.png'  
import project4 from './assets/project4.png' 
import project5 from './assets/project5.png'
import project6 from './assets/project6.png'



const Work = () => {
  return (
    <div name='work' className="w-full md:min-h-screen text-gray-300 bg-[#0a192f] py-20 ">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full   ">
        <div className="pb-8">
          <h1 className="text-4xl inline border-b-4 border-yellow-500 ">
            My-Projects
          </h1>
          <p className="py-6">
            \\ Check out some of my recent work
          </p>
        </div>




        <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-4    ">



          <div style={{ backgroundImage: `url(${project1})` }} className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div">
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font bold text-white tracking-wider ">
                Jobby App
              </span>
              <div className="pt-8 text-center ">
                {/* eslint-disable-next-line */}
                <a href='https://samjobbyapp.ccbp.tech' target="_blank">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-yellow-400 text-gray-700 font-bold text-lg"
                  >
                   <BsBoxArrowInUpRight/>
                  </button>
                </a>
                {/* eslint-disable-next-line */}
                {/* <a href='/' target="_blank">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    <BsBoxArrowInUpRight/>
                  </button>
                </a> */}
              </div>
            </div>
          </div>

          <div style={{ backgroundImage: `url(${project2})` }} className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div">
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font bold text-white tracking-wider ">
                Foodmunch static App
              </span>
              <div className="pt-8 text-center ">
                {/* eslint-disable-next-line */}
                <a href='http://samfoodmuch.ccbp.tech?' target="_blank">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-yellow-400 text-gray-700 font-bold text-lg"
                  >
                   <BsBoxArrowInUpRight/>
                  </button>
                </a>
                
              </div>
            </div>
          </div> 

          <div style={{ backgroundImage: `url(${project3})` }} className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div">
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font bold text-white tracking-wider ">
                Todo-app
              </span>
              <div className="pt-8 text-center ">
                {/* eslint-disable-next-line */}
                <a href='https://samstodoliston.ccbp.tech/' target="_blank">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-yellow-400 text-gray-700 font-bold text-lg"
                  >
                   <BsBoxArrowInUpRight/>
                  </button>
                </a>
                {/* eslint-disable-next-line */}
                <a href='/' target="_blank">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    <AiFillGithub/>
                  </button>
                </a>
              </div>
            </div>
          </div> 

          <div style={{ backgroundImage: `url(${project4})` }} className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div">
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font bold text-white tracking-wider ">
              CCBP-Timeline
              </span>
              <div className="pt-8 text-center ">
                {/* eslint-disable-next-line */}
                <a href='https://samtimeline.ccbp.tech ' target="_blank">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-yellow-400 text-gray-700 font-bold text-lg"
                  >
                   <BsBoxArrowInUpRight/>
                  </button>
                </a>
              </div>
            </div>
          </div> 

           

          <div style={{ backgroundImage: `url(${project5})` }} className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div">
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font bold text-white tracking-wider ">
                World-App
              </span>
              <div className="pt-8 text-center ">
                {/* eslint-disable-next-line */}
                <a href='https://bespoke-samsom-worldapp.netlify.app' target="_blank">
                
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-yellow-400 text-gray-700 font-bold text-lg"
                  >
                   <BsBoxArrowInUpRight/>
                  </button>
                </a>
                {/* eslint-disable-next-line */}
                <a href='https://github.com/samsonkaleti/world-project' target="_blank">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    <AiFillGithub/> 
                    
                  </button>
                </a>
              </div>
            </div>
          </div> 



          <div style={{ backgroundImage: `url(${project6})` }} className="shadow-lg shadow-[#040c16] group container rounded-md 
          flex justify-center text-center items-center mx-auto content-div">
        <div className="opacity-0 group-hover:opacity-100 ">
          <span className="text-2xl font bold text-white tracking-wider ">
            Prime-Video
          </span>
          <div className="pt-8 text-center ">
            {/* eslint-disable-next-line */}
            <a href='https://samprimevideo.ccbp.tech/' target="_blank">
            
              <button
                className="text-center rounded-lg px-4 py-3 m-2
                   bg-yellow-400 text-gray-700 font-bold text-lg"
              >

               <BsBoxArrowInUpRight/>
              </button>
            </a>
            {/* eslint-disable-next-line */}
            <a href='https://samprimevideo.ccbp.tech/' target="_blank">
              <button
                className="text-center rounded-lg px-4 py-3 m-2
                   bg-white text-gray-700 font-bold text-lg"
              >
                <AiFillGithub/> 
                
              </button>
            </a>
          </div>
        </div>
      </div> 

      

         

          


          




        </div>
      </div>
    </div>
  );
};

export default Work;
