import React from 'react'
import img1 from '../assets/gallery1.png'
import SectionHeader from '../component/SectionHeader'

const Career = () => {
  return (
    <>
        <div className="bg-[linear-gradient(135deg,#1e3a8a_0%,#2563eb_100%)] text-white mt-20 text-center py-12">
            <h1 className='font-extrabold text-5xl w-90 mx-auto'>Don't miss an opportunity</h1>
            <p className="text-xl my-10 w-150 mx-auto">
                Join our innovative team and be part of cutting-edge technology solutions that shape the future
            </p>
            <button className="rounded-full cursor-pointer py-[1.25rem] px-[3rem] bg-white text-[#1e3a8a] shadow-[0_20px_40px_rgba(0,0,0,0.3)]">JOIN OUR TEAM</button>
        </div>

{/* Gallery Section */}
        <div className="mx-10">
            <SectionHeader
            heading='Arohar Gallery'
            text='Experience our vibrant workplace culture and see what makes Arohar Technologies special'
            />

            <div className="grid md:grid-cols-3 gap-6">
                <div className="overflow-hidden rounded-[25px] relative">
                    <img className='w-full' src={img1} alt="" />
                    <div className="absolute bottom-0 text-white img-overlay left-0 right-0 px-12 pt-10 pb-4">
                        <h2 className="text-2xl font-bold ">Team Collaboration</h2>
                        <p className="text-lg my-2">Where ideas come to lofe through teamwork</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Career
