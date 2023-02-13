import React from 'react'
import homeLogo from '../../images/image 29.png'
import addItemsLogo from '../../images/image 31.png'
import accountLogo from '../../images/image 30.png'
import { useNavigate } from 'react-router-dom'

function AdminFooter() {
    const navigate = useNavigate()
    return (
        <div className='h-20 w-full flex p-1 items-center'>
            <div className='flex justify-around px-24 w-full'>
                <div onClick={() => navigate('/adminportal')} className='flex cursor-pointer items-center flex-col'>
                    <img src={homeLogo} />
                    <p className=' text-slate-500 font-bold text-sm'>Home</p>
                </div>
                <div onClick={() => navigate('/adminportal/additem', { replace: true })} className='flex cursor-pointer items-center flex-col'>
                    <img src={addItemsLogo} />
                    <p className=' text-slate-500 font-bold text-sm'>Add Items</p>
                </div>
                <div onClick={() => navigate('/adminportal/account', { replace: true })} className='flex cursor-pointer items-center flex-col'>
                    <img src={accountLogo} />
                    <p className=' text-slate-500 font-bold text-sm'>Account</p>
                </div>
            </div>
        </div>
    )
}

export default AdminFooter