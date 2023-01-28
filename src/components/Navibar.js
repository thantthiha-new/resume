import {HiOutlineInformationCircle} from 'react-icons/hi';
import {CgProfile} from 'react-icons/cg';
import {IoNewspaperOutline} from 'react-icons/io5';
import {AiFillHome} from 'react-icons/ai';
import {Link} from 'react-router-dom';
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import React, {useState} from "react";
const Navibar = () => {
  const [nav,setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
  return(
    <div>   
      <div className='hidden md:flex flex-col fixed top-0 left-0 h-screen w-16 m-0 bg-white text-secondary shadow-lg '>
      <Link to='/'><SideBarIcon icon={<AiFillHome size="28" />} /></Link>
      <Link to='/profile'><SideBarIcon icon={<CgProfile size="32" />} /></Link>
      <Link to='/resume'><SideBarIcon icon={<IoNewspaperOutline size="24" />} /></Link>
      <Link to='/info'><SideBarIcon icon={<HiOutlineInformationCircle size="32"/>} /></Link>
      </div>
      <div onClick={handleNav} className=" md:hidden p-5 ">
                {!nav ?  <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} /> }
      </div>
      <div className={!nav ?  "fixed left-[-100%]": "fixed left-0 top-0 w-auto h-full p-2 border-r bg-white shadow-lg ease-in-out duration-100 sm:hidden"}>
      <div>
      <Link to='/'><SideBarIcon icon={<AiFillHome size="28" />} /></Link>
      <Link to='/profile'><SideBarIcon icon={<CgProfile size="28" />} /></Link>
      <Link to='/resume'><SideBarIcon icon={<IoNewspaperOutline size="24" />} /></Link>
      <Link to='/info'><SideBarIcon icon={<HiOutlineInformationCircle size="32"/>} /></Link>
      </div>
      </div>
    </div>
    
  );
};

const SideBarIcon = ({icon}) => (
  <div className='sidebar-icon'>
    {icon}
  </div>
);
export default Navibar;
  