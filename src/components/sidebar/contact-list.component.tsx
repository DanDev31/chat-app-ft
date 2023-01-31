import React, { useState } from "react";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { useAppSelector } from "../../redux/hooks";
import { getContactInfo } from "../../services/user.service";
import { PopUp } from "../ui/popup.component";

interface ContactListProps {
    switchMenu:boolean;
    children:React.ReactNode;
};

type ContactInfo = {
    id:string,
    name:string,
    email:string
};

export const ContactList = ({ switchMenu, children }:ContactListProps) => {

    const { id:userId } = useAppSelector(state => state.auth.userInfo);
    const [ openPopUp, setOpenPopUp ] = useState<boolean>(false);
    const [ loading, setLoading ] = useState<boolean>(false);
    const [ inputValue, setInputValue ] = useState<string>("");
    const [ contactInfo, setContactInfo ] = useState<ContactInfo>({
        id:"",
        name:"",
        email:""
    });


    const handleGetContactInfo = async(e:React.SyntheticEvent) => {
        e.preventDefault();
        setLoading(true);
        const contact = await getContactInfo(inputValue);
        setLoading(false);
        setContactInfo(contact);
    };  


  return (
    <div className=''>
        {   switchMenu &&
            (
            <div className='w-full flex justify-end' onClick={() => setOpenPopUp(true)}> 
                <BsFillPersonPlusFill 
                className='bg-gray-700 p-1 text-3xl mb-2 rounded-md cursor-pointer hover:bg-gray-800 transition-all'/>
            </div>  
            )
        }
        <div>
            { children }
        </div>

        { openPopUp && 
            (<PopUp
                setClosePopUp={ setOpenPopUp }
            >
               { !loading ? 
               <form className='w-full' onSubmit={(e) => handleGetContactInfo(e)}>
                    <div className='relative flex items-center justify-center'>
                        <input
                            type="email"
                            placeholder='Enter a email..' 
                            required
                            className='w-full border-none rounded-md py-1 pl-1 outline-none text-gray-700'

                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <button type='submit' className='bg-slate-900 hover:bg-slate-800 absolute top-0 bottom-0 right-0 border-none cursor-pointer rounded-md px-3'>
                            <BsSearch className='text-gray-100'/>
                        </button>
                    </div>
                </form>
                :
                <p>Loading...</p>
                }
            </PopUp>)
        }
    </div>
  )
}
