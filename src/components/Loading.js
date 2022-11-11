import React from 'react'

export default function Loading() {
  return (
    <div className='h-[80vh] text-white'>
        <div className='flex justify-center items-center h-full'>
            <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
            </svg>
            <h1 className='text-[20px]'>Loading Components..</h1>
        </div>
    </div>
  )
}
