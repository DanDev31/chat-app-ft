import { ProfilePhoto } from './profile-photo.component';
import { HiArrowLeft } from 'react-icons/hi';

interface SettingsProps {
    openSettings:boolean;
    setOpenSettings:React.Dispatch<React.SetStateAction<boolean>>;
};

export const Settings= ({openSettings, setOpenSettings}:SettingsProps) => {
  return (
    <div className={`py-2 px-4 bg-slate-900 w-full h-full animate-slideLeft absolute transition-all top-0 z-50
     ${openSettings ? 'left-0' : 'left-[-700px]'}`}>
        <div className=' flex items-center h-[100px] bg-gray-900 text-slate-200'>
            <div className='flex items-center gap-4 text-[22px]'>
                <HiArrowLeft className='cursor-pointer' onClick={() => setOpenSettings(false)}/>
                <h1 className='font-medium'>Settings</h1>
            </div>
        </div>
        <ProfilePhoto />
    </div>
  )
}
