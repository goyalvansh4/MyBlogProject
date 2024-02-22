import React from 'react'
import { useId } from 'react';

function Select({
  label,
  className='',
  options,
  ...props
},ref) {
  const id=useId();
  return (
    <div className='w-full'>
      {label && <label className='inline-block mb-1 pl-1' htmlFor={id}></label>}
      <select
       id={id}
       className={`px-3 py-2 border rounded-lg bg-white text-black outline-none border-gray-200 focus:bg-gray-50 duration-200 w-full ${className}`}
       {...props}
       ref={ref}
      >
        {options.map((option)=>(
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  ) 
}

export default React.forwardRef(Select);