import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import Logo from '../assets/logo.png';


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav)


  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="Logo Image" style={{ width: '50px' }} />
      </div>

      { /* menu */}
      <div className='hidden md:flex'>
        <ul className='hidden md:flex'>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>

      { /* hamburguer */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>About</li>
        <li className='py-6 text-4xl'>Skills</li>
        <li className='py-6 text-4xl'>Home</li>
        <li className='py-6 text-4xl'>Work</li>
        <li className='py-6 text-4xl'>Contact</li>
      </ul>

      {/* Social Icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0A66C2]' >
            <a className='flex justify-between items-center w-full text-gray-300'
              href="/">
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#2D333B]' >
            <a className='flex justify-between items-center w-full text-gray-300'
              href="/">
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#EA4335]' >
            <a className='flex justify-between items-center w-full text-gray-300'
              href="/">
              E-mail <MdEmail size={30} />
            </a>
          </li>
        </ul>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#077AE9]' >
          <a className='flex justify-between items-center w-full text-gray-300'
            href="/">
            Facebook <FaFacebook size={30} />
          </a>
        </li>

      </div>
    </div>
  )
}

export default Navbar;