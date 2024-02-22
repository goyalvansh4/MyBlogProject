import React ,{forwardRef, useId} from "react";

const input = forwardRef(function Input(
  {
    label,
     className='',
     type='text',
  ...props
}, ref) {
  const id=useId();

  return (
    <div className='w-full'>
      {label && <label className='inline-block mb-1 pl-1' htmlFor={id}>{label}</label>}
      <input
       id={id}
       className={`px-3 py-2 border rounded-lg bg-white text-black outline-none border-gray-200 focus:bg-gray-50 duration-200 w-full ${className}`}
       type={type}
       ref={ref}
       {...props}
      />
    </div>
  )
  }
)
export default input;