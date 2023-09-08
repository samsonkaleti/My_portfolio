import React from 'react'
import HTML from './assets/html.png'
import CSS from './assets/css.png'
import GITHUB from './assets/github.png'
import JAVASCRIPT from './assets/javascript.png'
import REACT from './assets/react.png'
import TAILWIND from './assets/tailwind.png'
import NODE from './assets/node.png'
import BOOTSTRAP from './assets/bootstrap.png'

import PYTHON from './assets/python.png'
import SQL from './assets/sql.png'
import EXPRESS from './assets/express1.png'

const Skills = () => {
  return (
    <div name='skills' className=' w-full bg-[#0a192f] text-gray-300  md:h-screen py-10 '  >
      <div className="h-full w-full flex flex-col justify-center p-4 mx-auto max-w-[1000px]">
        <div className="">
          <p className='text-4xl border-b-4 inline border-yellow-400 font-bold '>Skills</p>
          <p className='py-4'>\\\ These are the technologies i have worked on </p>
        </div>

        <div className="grid grid-cols-2 w-full sm:grid-cols-4 gap-4 text-center py-8 ">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className='w-20 mx-auto' src={HTML} alt="html-logo" />
            <p className="py-4 mx-auto">HTML</p>
          </div>


          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className='w-20 mx-auto' src={CSS} alt="css-logo" />
            <p className="py-4">CSS</p>
          </div>


          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className='w-20 mx-auto' src={TAILWIND} alt="tailwind-logo" />
            <p className="py-4">TAILWIND</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className='w-20 mx-auto' src={JAVASCRIPT} alt="javascript-logo" />
            <p className="py-4">JAVASCRIPT</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className='w-20 mx-auto' src={REACT} alt="react-logo" />
            <p className="py-4">REACT</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className='w-20 mx-auto' src={NODE} alt="node-logo" />
            <p className="py-4">NODE</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className='w-20 mx-auto' src={EXPRESS} alt="express-logo" />
            <p className="py-4">EXPRESS</p>
          </div>



          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className='w-20 mx-auto' src={GITHUB} alt="git-logo" />
            <p className="py-4">GITHUB</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className='w-20 mx-auto' src={BOOTSTRAP} alt="boot-logo" />
            <p className="py-4">BOOTSTRAP</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className='w-20 mx-auto' src={PYTHON} alt="python-logo" />
            <p className="py-4">PYTHON</p>
          </div>


          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className='w-20 mx-auto' src={SQL} alt="sql-logo" />
            <p className="py-4">My-SQL</p>
          </div> 

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className='w-20 mx-auto' src={SQL} alt="sql-logo" />
            <p className="py-4">My-SQL</p>
          </div>







        </div>

      </div>
    </div>
  )
}

export default Skills