import React, { useRef } from 'react'
import adminLogo from '../../../images/Ellipse 4.png'
import cameraIcon from '../../../images/image 32.png'
import checkIcon from '../../../images/Group 5.png'
import AdminFooter from '../../../components/AdminFooter'
import Categories from '../../../components/Categories'

function Account() {

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
            <div className='m-auto mb-18 w-full max-w-3xl'>
                <div className='flex items-center flex-col w-full'>
                    <h3 className=' text-[#024F9D] text-xl font-bold mt-12'>Settings</h3>
                    <img className='mt-4 h-20' src={adminLogo} />
                    <div className=' mt-5 flex justify-center items-center w-2/3 px-6 border-b-2 border-slate-400'>
                        <input placeholder='Update Full Name' className=' w-4/5 px-3 outline-none h-10 ' />
                        <button>
                            <img src={checkIcon} />
                        </button>
                    </div>
                    <div onClick={handleClick} className=' h-24 mt-6 relative flex items-center justify-center cursor-pointer bg-[#d9D9D9] rounded-lg w-5/6'>
                        <input ref={hiddenFileInput} onChange={handleChange} className='h-40 w-full hidden cursor-pointer' type='file' />
                        <img className='absolute h-14 cursor-pointer' src={cameraIcon} />
                    </div>
                    <div className=' flex items-center mt-4 w-5/6'>
                        <input className='flex-[2] h-10 w-full text-sm bg-[#d9d9d9] rounded-xl p-2' placeholder='New Category Name' />
                        <div className='flex-1'>
                            <button className='px-6 py-2 flex-1 rounded-xl text-white bg-[#61B846]'>Add</button>
                        </div>
                    </div>
                    <div className='flex overflow-y-scroll max-h-24 items-center mt-6 w-5/6 flex-col'>
                        <h4 className='px-4 flex items-start w-full font-bold text-lg start text-[#024F9D]'>All Categories</h4>
                        <div className='w-full'><Categories /><Categories /><Categories /><Categories /><Categories /></div>
                    </div>
                </div>
                <div className='fixed m-auto bg-white border-slate-100 border rounded-t-3xl  max-w-3xl w-full bottom-0'><AdminFooter /></div>
            </div>
        </div>
    )
}

export default Account