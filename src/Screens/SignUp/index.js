import React, { useState } from 'react'
import { auth, db } from '../../config/firebase'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

function SignUp() {
    const [fullName, setFullName] = useState('')
    const [contact, setContact] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const SignUpUser = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password)
            const uid = user.user.uid
            await setDoc(doc(db, "users", uid), {
                fullName: fullName,
                contact: contact,
                email: email,
            });
            alert('SignUp Successfully')


        } catch (error) {
            console.log(error)
        }
    }

    const navigate = useNavigate()

    return (
        <div className='h-screen flex flex-col w-full items-center justify-center'>
            <div className=' flex items-center flex-col w-1/3 justify-center'>
                <h2 className='text-5xl uppercase text-[#61B846] '>Saylani welfare</h2>
                <h2 className='text-2xl mt-3 uppercase text-[#024F9D] '>Online discount store</h2>
                <form className=''>
                    <input placeholder='Full Name' className='w-full outline-0 mt-6 px-1 py-2 border-b-2 border-slate-300' onChange={(e) => setFullName(e.target.value)}></input>
                    <input placeholder='Contact' className='w-full outline-0 mt-6 px-1 py-2 border-b-2 border-slate-300' onChange={(e) => setContact(e.target.value)}></input>
                    <input placeholder='Email' className='w-full outline-0 mt-6 px-1 py-2 border-b-2 border-slate-300' onChange={(e) => setEmail(e.target.value)}></input>
                    <input placeholder='Password' className='w-full outline-0 mt-6 px-1 py-2 border-b-2 border-slate-300' onChange={(e) => setPassword(e.target.value)}></input>
                </form>
                <p className='text-sm cursor-default text-[#024F9D] flex justify-start w-full px- mt-6'>Forgot Password?</p>
                <button className='px-6 py-2 bg-[#61B846] mt-8 hover:bg-green-600 rounded-xl text-white' onClick={SignUpUser}>Sign Up</button>
                <p onClick={() => navigate('/login')} className='text-sm cursor-pointer text-[#024F9D] mt-6'>Don't have an account? Register</p>
            </div>
        </div>
    )
}

export default SignUp

