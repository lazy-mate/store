import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../config/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const SignInUser = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, email, password)
            alert('Login Successfully')
        } catch (error) {
            console.log(error)
        }


    }
    const navigate = useNavigate()
    return (
        <div className='h-screen flex flex-col w-full items-center justify-center'>
            <div className=' flex items-center w-1/3 flex-col justify-center'>
                <h2 className='text-5xl uppercase text-[#61B846] '>Saylani welfare</h2>
                <h2 className='text-2xl mt-3 uppercase text-[#024F9D] '>Online discount store</h2>
                <form>
                    <input placeholder='Email' className='w-full mt-10 px-1 outline-0 py-2 border-b-2 border-slate-300' onChange={(e) => setEmail(e.target.value)}></input>
                    <input placeholder='Password' className='w-full mt-8 px-1 outline-0 py-2 border-b-2 border-slate-300' onChange={(e) => setPassword(e.target.value)}></input>
                </form>
                <p className='text-sm cursor-default text-[#024F9D] flex justify-start w-full px-4 mt-6'>Forgot Password?</p>
                <button className='px-6 py-2 bg-[#61B846] hover:bg-green-600 mt-8 rounded-xl text-white' onClick={SignInUser}>Sign In</button>
                <p onClick={() => navigate('/signup')} className='text-sm cursor-pointer text-[#024F9D] mt-6'>Don't have an account? Register</p>
            </div>
        </div>
    )
}

export default Login