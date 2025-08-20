import React from 'react'

const SectionHeader = ({heading, text}) => {
  return (
    <div className='text-center pt-12'>
      <h1 className="text-[#1e3a8a] text-4xl font-bold">{heading}</h1>
      <p className="text-[#6c757d] w-8/12 text-xl mx-auto my-4">{text}</p>
    </div>
  )
}

export default SectionHeader
