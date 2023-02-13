import React from 'react'
import apple from '../../images/image 18.png'

function Products() {
    return (
        <div className='flex cursor-pointer items-center max-w-2xl border justify-between mt-4 w-full p-2 border-[#61B846] rounded-lg h-32'>
            <div className='flex items-center'>
                <img src={apple}></img>
                <div className='flex flex-col ml-4'>
                    <h3 className='text-[#61B846] text-base p-2'> Apple</h3>
                    <p className=' text-slate-400 text-sm p-2'>1. Kg</p>
                </div>
            </div>
            <div className=' mr-2'>
                <p className='text-slate-400'>$2.1</p>
            </div>
        </div>
    )
}

export default Products