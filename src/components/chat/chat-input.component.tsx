import { GrEmoji } from "react-icons/gr";
import { AiOutlinePaperClip } from "react-icons/ai";
import { MdSend } from "react-icons/md";
import React, { useEffect, useRef } from "react";
import { useAppSelector } from "../../redux/hooks";
import { ChatMessage } from "../../interfaces/user.interface";
import moment from "moment";

interface ChatInputProps {
  message:string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  setChatMessages:React.Dispatch<React.SetStateAction<ChatMessage[]>>;
  socket: any;
}

export const ChatInput = ({message, setMessage, setChatMessages, socket}:ChatInputProps) => {

  const { id:contactId } = useAppSelector(state => state.app.contact);  
  const { id:userId, name } = useAppSelector(state => state.app.user.userInfo);  
  const inputRef = useRef<any>(null);


  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    setChatMessages(prev => {
      return [
        ...prev,
        {
          id:userId,
          date: moment().format('hh:mm'),
          message,
          isReaded:false
        }
      ]
    });
    socket.emit('message', {userId, contactId, message});
    inputRef.current.value = '';
  };

 

  return (
    <form className='bg-slate-100 border-t-2 flex items-center justify-between gap-6 p-4 w-full' onSubmit={handleSubmit}>
        <div className='relative flex items-center flex-1 shadow-md'>
            <input 
              ref={ inputRef }
              type="text" 
              className='rounded-md py-1 px-2 w-full outline-none' 
              placeholder='Send a message...'
              onChange={ (e) => setMessage(e.target.value) }
            />
            <div className='absolute right-2 flex gap-1 cursor-pointer'>
                <GrEmoji />
                <AiOutlinePaperClip />
            </div>
        </div>
        <button type="submit" ><MdSend className='cursor-pointer'/></button>
    </form>
  )
}
