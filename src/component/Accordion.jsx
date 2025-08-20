import React from 'react'
import { useState } from 'react';
const faqs =[
    {
        question: 'What Is Custom Software Development?',
        answer:'Custom software development is the procedure to design, create, deploy, and maintain software encompassing a specified set of functionalities/tasks for a specialized user base.'
    },
    {
        question: 'Why Custom Software Development Is Important?',
        answer:'Custom software development is important since it assists organizations in fulfilling specific requirements within a budgeted cost through complete software that is flexible, profitable, and easily integrable.'
    },
    {
        question: 'What Are A Few Examples Of Customised Software?',
        answer:'A few successful examples of customized software are customer relationship management, content management system, eCommerce software systems, automated invoicing and tendering system, business process automation system, client-based software solutions, etc.'
    },
    {
        question: 'What Are The Benefits Of Custom Software Development?',
        answer:'Here are the evident benefits of custom software development:'
    },
    {
        question: 'What Is The Difference Between Off-the-shelf And Custom Written Software?',
        answer:'Off-the-shelf software is designed keeping in mind a wider range of clients and hence is more generalized. Custom written software sticks to specified business requirements pertaining to the industry and hence is tailormade to user needs.'
    },
    {
        question: 'Why Should You Choose Custom Software Development?',
        answer:'Organizations must choose custom software development to easily accommodate the changing needs of the business with the help of scalable and customizable processes and tools. This helps businesses to proceed in a fast manner, with the least hindrance.'
    },
]
const Accordion = () => {
    const [openIndex, setOpenIndex] = useState(null);
  return (
    <div className='grid gap-4'>
        {faqs.map((item, index) => (
            <div key={index} className="bg-white  mx-4 pt-4 rounded-2xl overflow-hidden">
            <div className="flex justify-between items-center px-4 pb-4">
                <div className="font-bold text-[#1e3a8a]">{item.question}</div>
                <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className='bg-[#1e3a8a] rounded-xl text-white px-4 py-2'>
                    {openIndex === index ? '-' : '+'}
                </button>
            </div>
            <div className={`px-10 bg-[#fbfbfd] grid overflow-hidden transition-all  duration-300 ease-in-out`}
            style={{
                maxHeight: openIndex === index ? "200px" : '0',
                opacity: openIndex === index ? 1 : 0
            }}
            >
                <p>{item.answer}</p>
            </div>
        </div>
        ))}
    </div>
  )
}

export default Accordion
