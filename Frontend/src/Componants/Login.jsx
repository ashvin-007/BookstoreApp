import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';


const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit=async(data)=>{ 
    const userInfo={
      email:data.email,
      password:data.password,
    }
    await axios.post("http://localhost:4001/user/login",userInfo)
    .then((res)=>{
         console.log(res.data)
         if(res.data){
          toast.success('Logeedin successfully')
          closeModal()
          setTimeout(() => {
          window.location.reload()
         localStorage.setItem("users",JSON.stringify(res.data.user))

          }, 1000);
          
         }
           
    }).catch((err)=>{
      if(err.response){
        console.log(err)
        toast.error("Error:" + err.response.data.message)
        setTimeout(() => {
          
        }, 2000);
      }
     
    })
}
  const closeModal = () => {
    document.getElementById('my_modal_3').close();
  };

  return (
    <>
      <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
{/* <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}></button> */}
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>✕</Link>
    <h3 className="font-bold text-lg">Login</h3>
      <div className='mt-4 space-y-2'>
        <span>Email</span>
        <br />
        <input type="email" placeholder="Enter your email" className='w-80 px-3 py-1 border rounded-md outline-none' {...register('email', { required: true })}/>
        <br />
        {errors.email && <p className='text-md text-red-500'>Email is required.</p>}
      </div>
      {/* Password */}
      <div className='mt-4 space-y-2'>
        <span>Password</span>
        <br />
        <input type="text" placeholder="Enter your password" className='w-80 px-3 py-1 border rounded-md outline-none' {...register('password', { required: true })} />
        <br />
        {errors.password && <p className='text-md text-red-500'>Password is required.</p>}
      </div>
      <div className='flex justify-around mt-4'>
        <button className='bg-pink-500 text-white  rounded-md px-3 py-1 hover:bg-pink-700  duration-200'>Login</button>
        <p className='text-xl'>Not registered? <Link to="/signup" className='underline text-blue-500 cursor-pointer' >Signup</Link></p>
      </div>
    </form>
  </div>
</dialog>
      </div>
    </>
  )
}

export default Login
