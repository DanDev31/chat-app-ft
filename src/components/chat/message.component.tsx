import { useAppSelector } from "../../redux/hooks";

interface MessageProps {
    id:string;
    message:string;
}

export const Message = ({id, message}:MessageProps) => {

  const { id:userId } = useAppSelector(state => state.user.userInfo);

  return (
    <div className={`${userId === id ? 'bg-indigo-900' : 'bg-gray-400'} text-slate-200 rounded-md px-2 py-1 flex flex-col w-1/4 ${userId === id ? 'self-end' : 'self-start'}`}>
        <span className={`font-thin text-[12px] text-slate-300`}>date</span>
        <p >{message}</p>
    </div>
  )
}
