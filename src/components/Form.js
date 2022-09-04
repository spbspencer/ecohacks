import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {Link, Routes, Route, useNavigate} from 'react-router-dom';



export const ContactUs = () => {
  const form = useRef();
  const navigate = useNavigate();


  const sendEmail = (e) => {
    e.preventDefault();
    alert("The Form has been Submitted.");
    navigate('/');


    emailjs.sendForm('service_o0rztxk', 'template_1cj635b', form.current, '8gid5yMDzy4gVY-lo')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          alert(error.text);
          console.log(error.text);
      });
  };

  return (
    <div className=' w-full max-w-md mx-auto mt-48 pb-24'>
      <form className='h-96 justify-between flex flex-col bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' ref={form} onSubmit={sendEmail}>
        <div className='mb-4'>
          <label className='block text-gray-600 text-md font-semibold mb-2'>Your Name</label>
          <input className='hover:shadow-md shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'  type="text" name="user_name" />
        </div>
        <div  className='mb-4'>
          <label className='block text-gray-600 text-md font-semibold mb-2'>Your Email</label>
          <input className='hover:shadow-md shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="email" name="user_email" />
        </div>
      <label className='block text-gray-600 text-md font-semibold mb-2'>Company Website</label>
      <input className='hover:shadow-md shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" name="company_name" />
      <input className=" 	mt-4 bg-slate-400 hover:bg-slate-200 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"type="submit" value="Send Submission" />
    </form>
    </div>
  );
};
