import { useAppSelector } from "../../redux/hooks";
import { Chat } from "../chat/chat.component"
import { Sidebar } from "../sidebar/sidebar.component"
import { Welcome } from "./welcome.component";


export const Main = () => {

  const { startChat } = useAppSelector(state => state.app)

  return (
    <div className='flex container h-[90vh] text-zinc-100 rounded-xl relative overflow-hidden w-[95%]'>
        <Sidebar />
        {
          startChat ? 
          <Chat />
          :
          <Welcome />
        }
    </div>
  )
}
