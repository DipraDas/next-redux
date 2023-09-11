'use client'

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseAdult, decreaseChild, decreaseInfant, increaseAdult, increaseChild, increaseInfant } from './features/home/homeSlice';

const page = () => {
  const { adult, child, infant } = useSelector(state => state.home.passenger);
  const dispatch = useDispatch();

  return (
    <>
      <h1 className='text-center'>Adult</h1>
      <div className='mt-10 w-52 m-auto flex justify-around gap-4 items-center'>
        <button className='px-5 py-2 bg-purple-500 text-white rounded' onClick={() => dispatch(decreaseAdult())}>Decrease</button>
        <h1>{adult}</h1>
        <button className='px-5 py-2 bg-purple-500 text-white rounded' onClick={() => dispatch(increaseAdult())}>Increase</button>
      </div>
      <h1 className='text-center'>Children</h1>
      <div className='mt-10 w-52 m-auto flex justify-around gap-4 items-center'>
        <button className='px-5 py-2 bg-purple-500 text-white rounded' onClick={() => dispatch(decreaseChild())}>Decrease</button>
        <h1>{child}</h1>
        <button className='px-5 py-2 bg-purple-500 text-white rounded' onClick={() => dispatch(increaseChild())}>Increase</button>
      </div>
      <h1 className='text-center'>Infant</h1>
      <div className='mt-10 w-52 m-auto flex justify-around gap-4 items-center'>
        <button className='px-5 py-2 bg-purple-500 text-white rounded' onClick={() => dispatch(decreaseInfant())}>Decrease</button>
        <h1>{infant}</h1>
        <button className='px-5 py-2 bg-purple-500 text-white rounded' onClick={() => dispatch(increaseInfant())}>Increase</button>
      </div>
    </>
  );
};

export default page;
