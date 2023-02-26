import { useState, useEffect } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { setToggleChat, startChat } from "../../redux/slices/app";
import { setContactInfo } from "../../redux/slices/contact";
import { instance } from "../../axios";
import profilePic from "../../assets/profile-pic.png";
import { IContact } from "../../interfaces/user.interface";

interface RecentItemProps {
  contactId:string;
  conversationId?:string;
};

export const Contact = ({contactId, conversationId}:RecentItemProps) => {

  const [contact, setContact] = useState<IContact>();
  const dispatch = useAppDispatch();

  const handleContactActions = () => {
    dispatch(setToggleChat());
    if(conversationId){
      dispatch(startChat(conversationId));
    }else{
      dispatch(startChat());
    }
    if(contact){
        dispatch(setContactInfo({
          _id:contact?._id,
          email:contact?.email,
          name:contact?.name
        }));
    }
  };

  useEffect(() => {
    const getContactInfo = async() => {
      try {
        const response = await instance.get(`/users/getUser/${contactId}`);
       setContact(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getContactInfo();
  }, []);

  
  return (
    <div 
      className='flex items-center gap-3 cursor-pointer hover:bg-sky-800 rounded-md mb-2 py-2 px-1'
      onClick={() => handleContactActions()}
    >
        <div className='rounded-full w-[35px]'>
            <img src={ profilePic } alt="Profile Picture" />
        </div>
        <div className='flex flex-col'>
            <h5 className='font-bold'>{contact?.name}</h5>
        </div>
    </div>
  )
}
