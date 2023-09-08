import React from 'react'

const Contact = () => {
    return (
        <div name = 'contact' className='flex justify-center items-center h-screen w-full bg-[#0a192f] p-4'>
            <form method='POST' action='https://getform.io/f/4a720188-52e7-4664-974c-18abf2a10bc3'  className=" w-full max-w-[600px] text-gray-300 flex flex-col ">
                <div className="pb-4">
                    <p className='inline border-b-2 border-yellow-500 text-4xl font-bold mx-auto' >Contact</p>
                    <p className='py-5' >\\\ Submit the form below or send me mail on : <span className='text-green-400'>kaletishyam@gmail.com</span></p>
                </div>
                <input className='bg-transparent p-2 border rounded-md border-gray-500 hover:border-yellow-500  outline-none'  type="text" placeholder='Name' name='name' />
                <input className='my-4 p-2 bg-transparent border rounded-md border-gray-500 hover:border-yellow-500  outline-none' type="email" placeholder='Email' name='email' />
                <textarea className='bg-transparent p-2 border rounded-md border-gray-500 hover:border-yellow-500 outline-none' name="message" rows="10" placeholder='Message'></textarea>
                <button className='text-white border-2 hover:bg-yellow-600 hover:border-yellow-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
            </form>
        </div>
    )
}

export default Contact