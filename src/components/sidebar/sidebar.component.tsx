import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Contact } from "../contacts/contact.component";
import { ContactList } from "../contacts/contact-list.component";
import { SwitchMenuButton } from "./switch-menu.component";
import { logout } from "../../redux/slices/user";
import { IoIosLogOut } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import { instance } from "../../axios";
import { Settings } from "../settings/settings.component";
import { IConversation } from "../../interfaces/user.interface";
import logo from "../../assets/logo.png";

interface SideBarProps {};

export const Sidebar = () => {

  const { id, contacts } = useAppSelector(state => state.user.userInfo);
  const [conversations, setConversations] = useState<IConversation[]>([]);
  const [ switchMenu, setSwitchMenu ] = useState<boolean>(false);
  const [ openSettings, setOpenSettings ] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  useEffect(() => {
    const getConversations = async() => {
      try {
        const response = await instance.get(`/conversation/getConversations/${id}`);
        console.log("res", response.data);

        setConversations(response.data);
      } catch (error) {
        console.log(error)
      }
    };
    getConversations();
  }, []);

  return (
    <div className='py-2 px-4 bg-slate-900 w-full md:w-[450px] h-full relative'>
        <div className='flex items-center'>
            <div className='w-[100px]'>
                <img src={logo} alt="" />
            </div>
            <h3>ChatMe</h3>
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

            {
              switchMenu ? (
                <ContactList
                switchMenu={ switchMenu }
              >
                {
                  contacts?.length > 0 ?
                  contacts?.map((contact,i) => (
                    <Contact 
                      key={i}
                      contactId={contact._id}
                    />
                  ))
                  :
                  <h2>You don't have any friend yet. Add some! </h2>
                }
              </ContactList>
              )
              :
              (
                <>
                  {
                    conversations?.length > 0 ?
                    conversations.map((el, i) => (
                      <Contact 
                        key={i}
                        conversationId={el._id}
                        contactId={el.contactId}
                    />
                    ))
                    :
                    <div>There's no recent conversations.</div>
                    
                  }
                </>
              )
            }
           
            
          </div>

          <div>
            <div 
              className='flex items-center gap-4 cursor-pointer mb-2'
              onClick={() => setOpenSettings(true)}
            >
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
        <Settings
            openSettings={openSettings}
            setOpenSettings={setOpenSettings}
          />
    </div>
  )
}
