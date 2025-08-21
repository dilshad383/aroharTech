import '../App.css'
import crown from '../assets/crown.svg'
import goldcrown from '../assets/goldcrown.svg'
import purplecrown from '../assets/purplecrown.svg'
import greencrown from '../assets/greencrown.svg'
import checkicon from '../assets/check.svg'

import { useState } from 'react';
import { priceCard, modalCard } from '../assets/pricing';
import { RxCrossCircled } from "react-icons/rx";

const Pricing = () => {
    const [isClicked, setClick] = useState(0);
    const [open, setOpen] = useState(null);
     
  return (
    <>
        <div className="bg-[#f5f7f8] mt-10 px-8">
            <div className="flex gap-6 py-6 justify-center pt-12">
                <h2 className="text-[1.4rem] text-[#1e3a8a] font-bold">
                    <span className="text-[#fe0706]">Tax</span>
                    <span className="text-black">So<sup>®</sup></span>
                    <span className="">ERP</span>
                </h2>
                <div className="rounded-3xl p-2 bg-white ">
                    <span onClick={() => setClick(0)} className={`p-2 rounded-2xl cursor-pointer transition-all duration-300 ease-in-out ${isClicked === 0 ? 'bg-blue-500 text-white' : 'bg-transparent text-gray-700'}`}>Monthly</span>
                    <span onClick={() => setClick(1)} className={`p-2 rounded-2xl cursor-pointer transition-all duration-300 ease-in-out ${isClicked === 1 ? 'bg-blue-500 text-white' : 'bg-transparent text-gray-700'}`}>Yearly</span>
                </div>
            </div>

            <div className=" grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                {priceCard.map((card, index) => (
                    <div key={index} className="rounded-2xl bg-white justify-items-center py-6 px-4">
                    <div className="icon-shadow px-2 py-4  rounded-2xl crown-container">
                        <div className="crown">
                            <img src={card.cardIcon} alt="" />
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold pricing-heading py-2">{card.cardTitle}</h2>
                    <p className="text-lg">
                        {isClicked === 0 ? ( 
                            <>
                                {card.initMonthlyPrice && <span className="line-through text-[#94a3b8]">{card.initMonthlyPrice}</span>}
                                <span className="font-bold text-[#64748b] text-xl"> {card.monthlyPrice}</span>
                            </>
                        ) : ( 
                            <>
                                {card.initYearlyPrice && <span className="line-through text-[#94a3b8]">{card.initYearlyPrice}</span>}
                                
                                <span className="font-bold text-[#64748b] text-xl"> {card.yearlyPrice}</span>
                            </>
                        )}
                    </p>
                    <div className="bg-[#6366f11a] px-4 py-1 rounded-2xl mb-4">{card.platformTag}</div>
                    {card.checkList.map((item, index)=> (
                    <div key={index} className="justify-self-start px-8 pt-2 feature-item">
                        <div className="flex gap-4 ">
                            <img src={item.checkIcon} alt="" width={24} height={24}
                            className={item.checkIcon === checkicon ? "check-icon transition-all" : ""}
                            />
                            <p className="">{item.name}</p>
                        </div>
                        
                    </div>
                    ))}
                    <div
                    onClick={() => setOpen(index)} // open modal for this card
                    className="text-[#6366f1] font-bold justify-self-start my-4 cursor-pointer"
                    >
                    + More Features
                    </div>

                    <div className="btn-primary mt-4 text-center">{card.btnText}</div>
                    {/* Modal */}
            {open !== null && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                    <div className="bg-white overflow-y-auto rounded-xl shadow-lg w-11/12 max-h-[90vh]">
                    <div className="bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] text-white px-4 py-4 flex justify-between items-center sticky top-0">
                        <h2 className="text-xl font-bold">
                        <span className="inline-block bg-white/20 rounded-md mr-3">📋</span>
                        All Features
                        </h2>
                        <button
                        onClick={() => setOpen(null)}
                        className=" bg-white/20 rounded-full text-xl p-[4px] hover:rotate-90 cursor-pointer"
                        >
                        <RxCrossCircled/>
                        </button>
                    </div>

                    <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr] gap-4 px-4 py-6 place-items-center">
                        <div className="text-[#2c3e50] font-bold">
                            Features
                        </div>
                        <div className="font-bold md:flex items-center gap-2">
                            <img width={40} src={crown} alt="" /> <span>Silver</span>  
                        </div>
                        <div className="font-bold md:flex items-center gap-2">
                            <img width={40} src={goldcrown} alt="" /> <span>Gold</span>  
                        </div>
                        <div className="font-bold md:flex items-center gap-2">
                            <img width={40} src={greencrown} alt="" /> <span>Platinum</span>  
                        </div>
                        <div className="font-bold md:flex items-center gap-2">
                            <img width={40} src={purplecrown} alt="" /> <span>ERP</span>  
                        </div>
                    </div>
                    
                    {modalCard.map((section, i) => (
                        <div key={i} className="shadow-[0_2px_8px_0_rgba(99,99,99,0.2)] rounded-[10px] px-4">
                        <div className="text-center font-bold py-4 text-[#212529]">{section.title}</div>
                        {section.items.map((item, j)=>(
                            <div key={j} className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr] gap-4 hover:bg-[#f8f9ff] pb-2 px-2">
                                <div className='text-[#2c3e50]'>{item.cell1}</div>
                                {[item.cell2, item.cell3, item.cell4, item.cell5].map((cell, k) => (
                                <div key={k} className="flex justify-center">
                                <img src={cell} alt="" className="w-6 h-6" />
                                </div>
                            ))}
                        </div>
                        ))}
                    </div>
                    ))}

                </div>
                </div>
            )}
                </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default Pricing
