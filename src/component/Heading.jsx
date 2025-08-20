import React from 'react'

const Heading = ({heading, text}) => {
  return (
    <div className='text-center my-10 w-4/6 mx-auto'>
        <h2 className="text-[1.8rem] text-[#1e3a8a] font-bold">{heading} <span className="text-[#fe0706]">Tax</span><span className="text-black">So<sup>®</sup></span>
        </h2>
        <p className="text-[#6c757d] ">
            {text}
        </p>
    </div>
  )
}

export default Heading
