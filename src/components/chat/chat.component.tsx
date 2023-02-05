import { ChatInput } from './chat-input.component';
import { ChatMessages } from './chat-messages.component';
import { ChatTopBar } from './chat-topbar.component';
import socketIO from 'socket.io-client';
import { useState } from 'react';
import { useAppSelector } from '../../redux/hooks';


interface ChatProps {
    
}

  const socket= socketIO('http://localhost:3001');
  
  export const Chat = () => {
    
    const { toggleChat } = useAppSelector(state => state.app.app)
    const [message, setMessage] = useState('');

  return (
    <div className={`z-40 absolute -bottom-full flex flex-col justify-between md:static text-slate-900 w-full h-full ${ toggleChat ? 'top-0 animate-slideBottom' : null } `}>
        <ChatTopBar />
        <ChatMessages />
        <ChatInput message={ message } setMessage={ setMessage } socket={ socket }/>
    </div>
  )
}
