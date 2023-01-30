import React from "react";
import { BsFillPersonPlusFill } from "react-icons/bs";

interface ContactListProps {
    switchMenu:boolean;
    children:React.ReactNode;
}

export const ContactList = ({ switchMenu, children }:ContactListProps) => {
  return (
    <div className=''>
        {   switchMenu &&
            (
            <div className='w-full flex justify-end'> 
                <BsFillPersonPlusFill 
                className='bg-gray-700 p-1 text-3xl mb-2 rounded-md cursor-pointer hover:bg-gray-800 transition-all'/>
            </div>  
            )
        }
        <div>
            { children }
        </div>
    </div>
  )
}
