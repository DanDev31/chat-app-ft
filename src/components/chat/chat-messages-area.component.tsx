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
            chatMessages?.map((message, i) =>(
              <Message
                key={i}
                {...message}
              />
            ))
            :
            <div>
              <TbMessageCircle />
              <p>You don't have any message from this user. Start a conversation!</p>
            </div>
          }
        </div>
    </div>
  )
};


