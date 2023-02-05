import { Link, useNavigate } from "react-router-dom"
import { useForm, SubmitHandler } from "react-hook-form";
import { AuthLayout } from "./auth-layout.component";
import { IFormValues } from "../../interfaces/user.interface";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { signIn } from "../../redux/thunks/auth-thunk";
import { useEffect } from "react";


export const Login = () => {

  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm<IFormValues>();
  const dispatch = useAppDispatch();
  const { success } = useAppSelector(state => state.app.user);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IFormValues> = async(data) => {
    const { email, password } = data;
    await dispatch(signIn({ email, password }));
    reset();
  };

  useEffect(() => {

    if(success) {
      navigate("/chat");
    }
    
  }, [success])
  

  return (
    <AuthLayout title='Sign In' subtitle='Log into your account'>
        <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col mb-2'>
                <label className='font-bold text-sm'>Email:</label>
                <input type="email" className='input' {...register("email")} placeholder='@email.com'/>
            </div>
            <div className='flex flex-col mb-3'>
                <label className='font-bold text-sm'>Password:</label>
                <input type="password" className='input' {...register("password")} placeholder='Password'/>
            </div>
            <div className='flex justify-end mb-1'>
              <Link to='/' className='text-sm underline text-indigo-800 font-bold'>Forgot password?</Link>
            </div>
            <button type="submit" className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 rounded-md'>Sign In</button>
            <div className='flex justify-center m-2'>
              <small className='text-slate-400'>or</small>
            </div>
            <div className='flex justify-center'>
              <Link to='/register' className='text-xs text-slate-400 hover:text-gray-500 underline'>Sign up</Link>
            </div>
        </form>
    </AuthLayout>
        
  )
}
