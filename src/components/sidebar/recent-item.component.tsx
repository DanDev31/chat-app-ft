import profilePic from "../../assets/profile-pic.png";

interface RecentItemProps {

}

export const RecentItem = () => {

  return (
    <div className='flex items-center gap-3 cursor-pointer hover:bg-sky-800 rounded-md mb-2 py-2 px-1'>
        <div className='rounded-full w-[35px]'>
            <img src={ profilePic } alt="Profile Picture" />
        </div>
        <div className='flex flex-col'>
            <h5 className='font-bold'>Name</h5>
            <p className='text-[14px]'>message</p>
        </div>
    </div>
  )
}
