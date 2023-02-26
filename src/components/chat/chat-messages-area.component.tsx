import { ChatMessage } from "../../interfaces/user.interface";
import { TbMessageCircle } from "react-icons/tb";
import { Message } from "./message.component";

interface ChatAreaProps {
  chatMessages:ChatMessage[];
}


export const ChatMessagesArea = ({chatMessages}:ChatAreaProps) => {

  return (
    <div className='bg-white h-full'>
        <div className='flex flex-col justify-end h-full gap-2 p-3'>
          {
            chatMessages?.length > 0 ? 
            chatMessages?.map((el, i) =>(
              <Message
                key={i}
                id={el.userId}
                message={el.text}
              />
            ))
            :
            <div className='h-full flex gap-2 flex-col items-center justify-center text-slate-400'>
              <TbMessageCircle className='text-[70px]'/>
              <h2 className='text-[20px]'>You don't have a conversation with this person. Start one!</h2>
            </div>
          }
        </div>
    </div>
  )
};


