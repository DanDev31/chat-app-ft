import welcome from "../../assets/welcome.png";

export const Welcome = () => {
  return (
    <div className='bg-white h-full w-full flex items-center justify-center flex-col gap-2'>
        <div className='w-[300px]'>
            <img src={welcome} alt="" />
        </div>
        <h1 className='text-slate-800 text-[24px]'>Send and receive message from yor friends!</h1>

    </div>
  )
}
