import React, { useRef } from 'react'
import cameraIcon from '../../../images/image 32.png'
import AdminHeader from '../../../components/AdminHeader'
import AdminFooter from '../../../components/AdminFooter'

function AddItem() {

    const hiddenFileInput = React.useRef(null);

    const handleClick = event => {
        hiddenFileInput.current.click();
    };
    const handleChange = event => {
        const fileUploaded = event.target.files[0];
        console.log(fileUploaded)
    };

    return (
        <div className='flex flex-col m-auto w-full max-w-3xl'>
            <div className='m-auto w-full max-w-3xl'>
                <div className='flex border-b-2 border-slate-400 w-full'><AdminHeader /></div>
                <div className=' flex flex-col p-2 max-h-96 overflow-y-scroll'>
                    <h3 className='text-[#024F9D] text-base font-bold flex items-start'>Add New Item</h3>
                    <form className=' w-full mb-10 flex flex-col items-center mt-8'>
                        <div onClick={handleClick} className=' h-40 relative flex items-center justify-center cursor-pointer bg-[#d9D9D9] rounded-lg w-full'>
                            <input ref={hiddenFileInput} onChange={handleChange} className='h-40 w-full hidden cursor-pointer' type='file' />
                            <img className='absolute cursor-pointer' src={cameraIcon} />
                        </div>
                        <input className='h-10 w-full mt-4 text-sm bg-[#d9d9d9] rounded-lg p-2' placeholder='Item Name' type='text' />
                        <select defaultValue="Select Category" className='h-10 w-full mt-4 text-sm bg-[#d9d9d9] rounded-lg p-2'>
                            <option value='Select Category' className='p-2 text-sm' disabled hidden>Select Category</option>
                            <option className='p-2 text-sm'>Friuts</option>
                            <option className='p-2 text-sm'>Friuts</option>
                        </select>
                        <textarea className='h-40 w-full mt-4 text-sm bg-[#d9d9d9] rounded-lg p-2' placeholder='Describe this item' />
                        <div className=' w-full mt-4 flex items-center '>
                            <p className='text-base flex justify-center items-center flex-1 text-[#024F9D] '>Unit Name:</p>
                            <input placeholder='Kg/ Pcs./ Dozen' className='h-10 w- flex-1  text-sm bg-[#d9d9d9] rounded-lg p-2' />
                        </div>
                        <div className=' w-full mt-4 flex items-center '>
                            <p className='text-base h-full flex justify-center items-center flex-1 text-[#024F9D] '>Unit Price:</p>
                            <input placeholder='300 RS.' className='h-10 w- flex-1  text-sm bg-[#d9d9d9] rounded-lg p-2' />
                        </div>
                    </form>
                    <div className=' flex w-full items-center justify-center'>
                        <button className=' flex justify-center px-4 py-2 bg-[#61B846] w-1/4 rounded-xl text-lg text-white '>Add Product</button>
                    </div>
                </div>
                <div className='fixed m-auto bg-white border-slate-100 border rounded-t-3xl  max-w-3xl w-full bottom-0'><AdminFooter /></div>
            </div>
        </div>
    )
}

export default AddItem