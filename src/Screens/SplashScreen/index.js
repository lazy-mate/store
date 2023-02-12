import React from 'react'
import Logo from '../../images/Logo.png'
import { useNavigate } from 'react-router-dom'
function SplashScreen() {
    const navigate = useNavigate()
    return (
        <div className='flex h-screen max-w-full items-center flex-col justify-center'>
            <img src={Logo} />
            <h2 className='text-5xl uppercase text-[#61B846] '>Saylani welfare</h2>
            <h2 className='text-2xl mt-3 uppercase text-[#024F9D] '>Online discount store</h2>
            <button className='text-white px-6 py-3 mt-8 rounded-2xl bg-[#61B846]' onClick={() => navigate('/login')}>Get Started</button>
        </div>
    )
}

export default SplashScreen
