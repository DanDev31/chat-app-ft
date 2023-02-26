import { useState, useEffect } from 'react';
import { useAppSelector } from '../../redux/hooks';
import socketIO from 'socket.io-client';
import { ChatInput } from './chat-input.component';
import { ChatMessagesArea } from './chat-messages-area.component';
import { ChatTopBar } from './chat-topbar.component';
import { ChatMessage } from '../../interfaces/user.interface';
import config from '../../config';
import { instance } from '../../axios';

interface ChatProps {
    
}

  const socket= socketIO(`${config.app.socketServer}`);
  
  export const Chat = () => {

    const { id:userId } = useAppSelector(state => state.user.userInfo);
    const { toggleChat, conversationId } = useAppSelector(state => state.app);
    const [ chatMessages, setChatMessages ] = useState<ChatMessage[]>([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
      socket.emit('addUser', userId);
    },[]);

    useEffect(() => {
      const getMessages = async() => {
        try {
          const response = await instance.get(`message/getMessages/${conversationId}`);
          setChatMessages(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      getMessages();
    },[conversationId]);
    
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
