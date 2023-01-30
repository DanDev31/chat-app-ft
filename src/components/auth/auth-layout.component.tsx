import React from "react"

interface AuthLayoutProps {
    title:string;
    subtitle:string;
    children:React.ReactNode;
}

export const AuthLayout = ({title, subtitle, children}:AuthLayoutProps) => {
  return (
    <div className='bg-white rounded-lg p-4 w-[310px] md:w-[400px]'>
        <div>
            <h5 className='text-gray-400'>{ title }</h5>
            <div className='flex justify-center'>
              <h2 className='font-bold text-[26px] m-3 text-zinc-800'>{ subtitle }</h2>
            </div>
        </div>
        { children }
    </div>
  )
}
