import React, { useState } from "react";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getUserContactsThunk } from "../../redux/thunks/user-thunk";
import { AddNewContact, getContactInfo } from "../../services/user.service";
import { PopUp } from "../ui/popup.component";
import { Spinner } from "../ui/spinner/spinner.component";

interface ContactListProps {
    switchMenu:boolean;
    children:React.ReactNode;
};

type ContactInfo = {
    id:string;
    name:string;
    email:string;
    isFound:boolean;
};

export const ContactList = ({ switchMenu, children }:ContactListProps) => {

    const { id:userId } = useAppSelector(state => state.app.user.userInfo);
    const [ openPopUp, setOpenPopUp ] = useState<boolean>(false);
    const [ loading, setLoading ] = useState<boolean>(false);
    const [ hideForm, setHideForm ] = useState<boolean>(false);
    const [ inputValue, setInputValue ] = useState<string>("");
    const [ message, setMessage ] = useState<string>("");
    const [ contactInfo, setContactInfo ] = useState<ContactInfo>({
        id:"",
        name:"",
        email:"",
        isFound:false
    });

    const dispatch = useAppDispatch();

    const handleGetContactInfo = async(e:React.SyntheticEvent) => {
        e.preventDefault();
        setHideForm(true);
        setLoading(true);
        const response = await getContactInfo(userId, inputValue);
        setLoading(false);
        if(response.success){
            setContactInfo({...response.contactInfo, isFound:true});
        }else{
            setMessage(response.message);
        }
    };  

    const handleAddContact = async() => {
        setLoading(true);
        try {
            const response = await AddNewContact(userId, contactInfo.email);
            if(response.success){
                setContactInfo({...contactInfo, isFound:false});
                setMessage(response.message);
                await dispatch(getUserContactsThunk(userId));
            }else{
                setMessage(response.message);
            }
        } catch (error) {
        }
        setLoading(false);
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
                additionalState={ setHideForm }
            >
                { !hideForm ?
                    (<form className='w-full' onSubmit={(e) => handleGetContactInfo(e)}>
                        <div className='flex items-center flex-col'>
                            <h1 className='mb-2 font-semibold text-[20px]'>Search your contact here.</h1>
                            <div className='relative w-full flex items-center'>
                                <input
                                    type="email"
                                    placeholder='Enter a email..' 
                                    required
                                    className='w-full border-none rounded-full py-1 pl-2 outline-none text-gray-700'

                                    onChange={(e) => setInputValue(e.target.value)}
                                />
                                <button type='submit' className='bg-slate-900 flex items-center justify-center hover:bg-slate-800 absolute right-[1.5px] border-none cursor-pointer rounded-full p-[7px]'>
                                    <BsSearch className='text-gray-100'/>
                                </button>
                            </div>
                        </div>
                    </form>)
                    :
                    !loading ? 
                        contactInfo.isFound ?
                       ( <div className="flex items-center justify-between gap-2 w-full border-solid border-b-2 border-neutral-100 pb-2">
                            <h3>{contactInfo.name}</h3>
                            <button 
                                className='bg-slate-900 border-none outline-none cursor-pointer rounded-lg px-3 py-1'
                                onClick={() => handleAddContact()}
                            >add</button>
                        </div>)
                        :
                        <h2>{message}</h2>
                    :
                    <Spinner/>
                }

            </PopUp>)
        }
    </div>
  )
}
