import { useState } from "react";
import { Chat } from "../chat/chat.component"
import { Sidebar } from "../sidebar/sidebar.component"


export const Main = () => {

  const [toggleChat, setToggleChat] = useState(false);

 
  return (
    <div className='flex container h-[90vh] text-zinc-100 rounded-xl relative overflow-hidden w-[95%] '>
        <Sidebar toggle={toggleChat} setToggle={setToggleChat}/>
        <Chat toggle={toggleChat}/>
    </div>
  )
}
