import { useState } from "react";

interface SwitchMenuProps{
    switchMenu:boolean;
    setSwitchMenu:React.Dispatch<React.SetStateAction<boolean>>;
};

export const SwitchMenuButton = ({switchMenu, setSwitchMenu}:SwitchMenuProps) => {

  return (
    <div className='w-full py-2 px-1 rounded-md bg-slate-700 relative flex items-center mt-3 mb-3'>
        <span className={`absolute bg-slate-900 w-1/2 h-[80%] z-10 rounded-md transition-all ${ switchMenu ? 'translate-x-[95%]' : '' }`}></span>
        <div className='flex items-center justify-between text-slate-100 font-semibold w-full'>
            <h4 className='z-20 px-2 w-full text-center cursor-pointer' onClick={() => setSwitchMenu(prev => !prev)}>Recent</h4>
            <h4 className='z-20 px-2 w-full text-center cursor-pointer' onClick={() => setSwitchMenu(prev => !prev)}>Contacts</h4>
        </div>
    </div>
  )
}
