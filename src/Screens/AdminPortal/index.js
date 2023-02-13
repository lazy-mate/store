import React from 'react'
import AdminHeader from '../../components/AdminHeader'

function AdminPortal() {
  return (
    <div className='flex flex-col m-auto w-full max-w-3xl'>
      <div className='flex m-auto w-full max-w-3xl'>
        <div className='flex border-b-2 border-slate-400 w-full'><AdminHeader /></div>
      </div>
      <div className='text-[#024F9D] text-lg font-bold m-4 flex'>All Products</div>
    </div>
  )
}

export default AdminPortal