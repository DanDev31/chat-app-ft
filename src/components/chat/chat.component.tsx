import { useState, useEffect } from 'react';
import { useAppSelector } from '../../redux/hooks';
import socketIO from 'socket.io-client';
import { ChatInput } from './chat-input.component';
import { ChatMessagesArea } from './chat-messages-area.component';
import { ChatTopBar } from './chat-topbar.component';
import { ChatMessage } from '../../interfaces/user.interface';
import config from '../../config';

interface ChatProps {
    
}

  const socket= socketIO(`${config.app.socketServer}`);
  
  export const Chat = () => {

    const { id:userId } = useAppSelector(state => state.app.user.userInfo);
    const { toggleChat } = useAppSelector(state => state.app.app);
    const [ chatMessages, setChatMessages ] = useState<ChatMessage[]>([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
      socket.emit('addUser', userId);
      socket.on('message', (message:ChatMessage) => {
        console.log("message",message)
        setChatMessages(prev => {
          return [
            ...prev,
            {
              id:message.id,
              date: message.date,
              message:message.message,
              isReaded:false
            }
          ]
        });
      })
    },[]);

    console.log(chatMessages)
    
  return (
    <div className={`z-40 absolute -bottom-full flex flex-col justify-between md:static text-slate-900 w-full h-full ${ toggleChat ? 'top-0 animate-slideBottom' : null } `}>
        <ChatTopBar />
        <ChatMessagesArea 
          chatMessages={chatMessages}
        />
        <ChatInput 
          message={ message } 
          setMessage={ setMessage }
          setChatMessages={setChatMessages}
          socket={ socket }
        />
    </div>
  )
}
