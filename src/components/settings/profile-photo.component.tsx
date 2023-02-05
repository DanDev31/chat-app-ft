import React from 'react'
import profilePic from "../../assets/profile-pic.png";

export const ProfilePhoto:React.FC = () => {
  return (
    <div className='grid place-content-center'>
        <div className='rounded-full h-[100px] w-[100px]'>
            <img src={profilePic} alt="" />
            <div className='flex items-center gap-1'>
                <span>Change/</span>
                <span>Delete</span>
            </div>
        </div>
    </div>
  )
}
