import { RecentItem } from '../sidebar/recent-item.component'
import { SlOptionsVertical } from 'react-icons/sl';

export const ChatTopBar = () => {
  return (
    <div className='bg-white border-b-2 flex items-center justify-between p-4 w-full'>
        <RecentItem />
        <SlOptionsVertical className='cursor-pointer'/>
    </div>
  )
}
