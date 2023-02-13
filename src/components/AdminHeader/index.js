import React from 'react'
import adminLogo from '../../images/Ellipse 4.png'
import listLogo from '../../images/list_alt_FILL0_wght400_GRAD0_opsz48 1.png'
function AdminHeader() {
    return (
        <div className='h-24 flex p-1 items-center w-full'>
            <div className='h-20 justify-between items-center flex w-full '>
                <div className='flex items-center'>
                <img className='h-16' src={adminLogo} />
                <div className=' ml-3 items-start flex flex-col'>
                    <h3 className='text-xl font-bold text-[#024F9D]'>Mr Ahmed</h3>
                    <p className=' text-lg font-bold text-[#61B846]'>Admin</p>
                </div>
            </div>
                <div className='flex items-center'>
                    <img className=' cursor-pointer p-2 hover:bg-[#61B846] hover:rounded-xl ' src={listLogo} />
                </div>
            </div>
        </div>
    )
}

export default AdminHeader