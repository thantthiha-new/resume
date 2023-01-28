import React from 'react';
import {CiInstagram,CiLinkedin} from 'react-icons/ci';

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-screen h-16 bg-opacity-20
     bg-light-pink text-black shadow-lg md:left-16 opacity-100">
        <div className='flex flex-row flex-nowrap'>
      <a href='https://www.instagram.com/_styxnstones_/'><SideBarIcon icon={<CiInstagram size="40" />} /></a>
      <a href='https://www.linkedin.com/in/thant-thiha-193851168'><SideBarIcon icon={<CiLinkedin size="40" />} /></a>
      </div>
    </footer>
  )
}
const SideBarIcon = ({icon}) => (
    <div className='footerButtons'>
      {icon}
    </div>
  );
export default Footer