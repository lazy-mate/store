import React from 'react'
import fruits from '../../images/image 13.png'

function Categories() {
    return (
        <div className='flex cursor-pointer items-center max-w-2xl border justify-between mt-4 w-full p-2 border-[#61B846] rounded-lg h-15'>
            <div className='flex px-5 items-center'>
                <img src={fruits}></img>
                <h3 className='text-[#61B846] ml-5 font-bold text-sm p-2'> Fruits</h3>
            </div>
        </div>
    )
}

export default Categories