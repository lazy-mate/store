import React from 'react'
import AdminHeader from '../../components/AdminHeader'
import AdminFooter from '../../components/AdminFooter'
import Products from '../../components/Products'

function AdminPortal() {
  return (
    <div className='flex flex-col m-auto w-full max-w-3xl'>
      <div className='m-auto w-full max-w-3xl'>
        <div className='flex border-b-2 border-slate-400 w-full'><AdminHeader /></div>
      </div>
      <div className='text-[#024F9D] text-lg font-bold m-4 flex'>All Products</div>
      <div className=' w-full p-2 items-center overflow-y-scroll max-h-96 flex flex-col'><Products /> <Products /> <Products /><Products /><Products /><Products /></div>
      <div className='fixed m-auto bg-white border-slate-100 border rounded-t-3xl  max-w-3xl w-full bottom-0'><AdminFooter /></div>
    </div>
  )
}

export default AdminPortal