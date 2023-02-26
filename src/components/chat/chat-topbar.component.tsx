import { SlOptionsVertical } from 'react-icons/sl';
import { HiArrowLeft } from 'react-icons/hi';
import profilePhoto from "../../assets/profile-pic.png";
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setToggleChat } from '../../redux/slices/app';

export const ChatTopBar = () => {

  const { name:contactName } = useAppSelector(state => state.contact); 
  const dispatch = useAppDispatch();

  return (
    <div className='bg-white border-b-2 flex items-center justify-between p-4 w-full'>
        <div className='flex items-center gap-3'>
          <HiArrowLeft className='md:hidden' onClick={() => dispatch(setToggleChat())}/>
          <div className='rounded-full w-[35px] h-[35px]'>
            <img src={ profilePhoto } alt="" />
          </div>
            <h4 className='font-semibold'>{ contactName }</h4>
        </div>
        <SlOptionsVertical className='cursor-pointer'/>
    </div>
  )
}
