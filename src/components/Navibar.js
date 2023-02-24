import {HiOutlineInformationCircle} from 'react-icons/hi';
import {IoNewspaperOutline} from 'react-icons/io5';
import {CgProfile} from 'react-icons/cg';
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
      <div className='hidden md:flex flex-col fixed top-0 left-0 h-screen w-16 m-0 bg-transparent text-secondary'>
      <Link title="Home" to='/'><SideBarIcon icon={<AiFillHome size="28" />} /></Link>
      <Link title="Profile" to='/profile'><SideBarIcon icon={<CgProfile size="28" />} /></Link>
      <a title="Resume" href='https://drive.google.com/file/d/1WtYfdpnAINO46-uLmse_ruiYNQuGDOat/view?usp=share_link'target="_blank" rel="noopener noreferrer"><SideBarIcon icon={<IoNewspaperOutline size="30" />} /></a>
      <Link title="Extra Information" to='/info'><SideBarIcon icon={<HiOutlineInformationCircle size="32"/>} /></Link>
      </div>
      <div onClick={handleNav} className="md:hidden p-5 fixed left-0 top-0 w-16 mb-2">
                {!nav ?  <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} /> }
      </div>
      <div className={!nav ?  "fixed top-[-100%]": "fixed left-0 top-10 w-16 h-full p-2 bg-transparent ease-in-out duration-100 md:hidden"}>
      <div >
      <Link title="Home" to='/'><SideBarIcon icon={<AiFillHome size="28" />} /></Link>
      <Link title="Profile" to='/profile'><SideBarIcon icon={<CgProfile size="28" />} /></Link>
      <a title="Resume" href='https://drive.google.com/file/d/1k5oHVLLr9XAG9ZiTZIFbeGuG_WxCnfhx/view' target="_blank" rel="noopener noreferrer"><SideBarIcon icon={<IoNewspaperOutline size="30" />} /></a>
      <Link title="Extra Information" to='/info'><SideBarIcon icon={<HiOutlineInformationCircle size="32"/>} /></Link>
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
  