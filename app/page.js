'use client'

import React from 'react'
import { useSelector } from 'react-redux'

const page = () => {
  const { adult } = useSelector(state => state.home);
  return (
      <div className='mt-10 w-52 m-auto flex justify-around gap-4 items-center'>
        <button className='px-5 py-2 bg-purple-500 text-white rounded'>Decrease</button>
        <h1>{adult}</h1>
        <button className='px-5 py-2 bg-purple-500 text-white rounded'>Decrease</button>
      </div>
  )
}

export default page