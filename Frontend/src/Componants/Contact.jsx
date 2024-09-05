import React from 'react';
import Navbar from './Navbar';

const Contact = () => {
  return (
    <>
      <Navbar />

      {/* Ensure the outer container takes full screen height and centers content */}
      <div className='min-h-screen flex items-center justify-center py-16 mx-auto md:px-20 px-4'>
        <div className=''>
          <h2 className='text-4xl font-bold mb-4'>Contact Us</h2>

          <div className='space-y-4'>
            <div>
              <label className='block mb-1'>Name</label>
              <input
                type='text'
                placeholder='Enter your name'
                className='w-80 px-3 py-1 border rounded-md outline-none'
              />
            </div>

            <div>
              <label className='block mb-1'>Email</label>
              <input
                type='email'
                placeholder='Enter your email'
                className='w-80 px-3 py-1 border rounded-md outline-none'
              />
            </div>

            <div>
              <label className='block mb-1'>Message</label>
              <textarea
                placeholder='Enter your message'
                className='w-80 px-3 py-1 border rounded-md outline-none'
              />
            </div>

            <button className='bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200'>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
