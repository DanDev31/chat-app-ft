import { useState } from "react";
import { RecentItem } from "./recent-item.component";
import { ContactList } from "./contact-list.component";
import { SwitchMenuButton } from "./switch-menu.component";

import { IoIosLogOut } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import logo from "../../assets/logo.png"
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/slices/user";
import { useNavigate } from "react-router-dom";

interface SideBarProps {
  toggle:boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Sidebar = ({toggle, setToggle}:SideBarProps) => {

  const [ switchMenu, setSwitchMenu ] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <div className='py-2 px-4 bg-slate-900  w-full md:w-[350px] h-full'>
        <div className='flex items-center'>
            <div className='w-[100px]'>
                <img src={logo} alt="" />
            </div>
            <h3 onClick={ () => setToggle(!toggle)}>ChatMe</h3>
        </div>
        <div className='flex justify-center items-center w-full border-b-2 border-slate-400 pb-4 relative'>
            <input type="text" className='w-full bg-slate-300 border-none
             rounded-md py-1 outline-none pl-10 text-black' placeholder='Search for a contact...'/>
            <BsSearch className='absolute left-2 text-gray-400'/>
        </div>
        <div className='flex flex-col justify-between h-[75%]'>
          <div>
            <SwitchMenuButton
              switchMenu={ switchMenu }
              setSwitchMenu={ setSwitchMenu }
            />

            <ContactList
              switchMenu={ switchMenu }
            >
              {
                [1,2,3,4].map((e,i) => (
                  <RecentItem key={i}/>
                ))
              }
            </ContactList>
            
          </div>

          <div>
            <div className='flex items-center gap-4 cursor-pointer mb-2'>
              <IoMdSettings className='text-xl'/>
              <h3>Settings</h3>
            </div>
            <div 
              className='flex items-center gap-4 cursor-pointer'
              onClick={() => handleLogout()}
            >
              <IoIosLogOut 
                className='text-xl'
              />
              <h3>Sign Out</h3>
            </div>
          </div>
        </div>
        
    </div>
  )
}
