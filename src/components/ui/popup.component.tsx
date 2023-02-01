import React from "react";
import { FaWindowClose } from 'react-icons/fa';

interface PopUpProps {
    setClosePopUp:React.Dispatch<React.SetStateAction<boolean>>;
    children:React.ReactNode;
}

export const PopUp = ({setClosePopUp, children}:PopUpProps) => {
  return (
     <div className='absolute top-0 right-0 left-0 bottom-0 bg-black/[.6] grid place-content-center w-full h-screen z-20'>
        <div className='bg-indigo-900 h-[250px] w-[80vw] md:w-[400px] flex items-center justify-center flex-col rounded-2xl px-4 relative'>
            <FaWindowClose className='absolute top-3 right-3 cursor-pointer hover:text-slate-300 text-[20px]' onClick={ () => setClosePopUp(false) }/>
            { children }
        </div>
    </div>
  )
}
