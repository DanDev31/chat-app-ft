import profilePic from "../../assets/profile-pic.png";
import { useAppDispatch } from "../../redux/hooks";
import { setToggleChat } from "../../redux/slices/app";
import { setContactInfo } from "../../redux/slices/contact";

interface RecentItemProps {
  _id:string;
  name:string;
  email:string;
  message?:string;
};

export const Contact = ({_id:id, name, email, message}:RecentItemProps) => {

  const dispatch = useAppDispatch();

  const handleContactActions = () => {
    dispatch(setToggleChat());
    dispatch(setContactInfo({id, name, email}));
  };
  
  return (
    <div 
      className='flex items-center gap-3 cursor-pointer hover:bg-sky-800 rounded-md mb-2 py-2 px-1'
      onClick={() => handleContactActions()}
    >
        <div className='rounded-full w-[35px]'>
            <img src={ profilePic } alt="Profile Picture" />
        </div>
        <div className='flex flex-col'>
            <h5 className='font-bold'>{name}</h5>
            {message && <p className='text-[14px]'>message</p>}
        </div>
    </div>
  )
}
