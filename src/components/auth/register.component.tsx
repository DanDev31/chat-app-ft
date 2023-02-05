import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom"
import { IFormValues } from "../../interfaces/user.interface";
import { signUp } from "../../redux/thunks/auth-thunk";
import { useAppDispatch } from "../../redux/hooks";
import { AuthLayout } from "./auth-layout.component"

export const Register = () => {

  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm<IFormValues>();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<IFormValues> = async(data) => {
    const { name, email, password } = data;
    await dispatch(signUp({ name, email, password }));
    reset();
  };

  return (
    <AuthLayout title='Sign Up' subtitle='Create an account' >
        <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col mb-2'>
                <label className='font-bold text-sm' htmlFor='name'>Name:</label>
                <input type="text" className='input' {...register("name")} placeholder='Your name'/>
            </div>
            <div className='flex flex-col mb-3'>
                <label className='font-bold text-sm' htmlFor='email'>Email:</label>
                <input type="email" className='input' {...register("email")} placeholder='@email.com'/>
            </div>
            <div className='flex flex-col mb-3'>
                <label className='font-bold text-sm' htmlFor='password'>Password:</label>
                <input type="password" className='input' {...register("password")} placeholder='Password'/>
            </div>
            <div className='flex justify-end mb-1'>
              <Link to='/' className='text-sm underline text-indigo-800 font-bold'>Have an account?</Link>
            </div>
            <button type="submit" className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 rounded-md'>Sign In</button>
           
        </form>
    </AuthLayout>
  )
}
