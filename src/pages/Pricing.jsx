import '../App.css'
import crown from '../assets/crown.svg'
import goldcrown from '../assets/goldcrown.svg'
import purplecrown from '../assets/purplecrown.svg'
import greencrown from '../assets/greencrown.svg'
import checkicon from '../assets/check.svg'
import crossicon from '../assets/cross.svg'
import { useState } from 'react';

const priceCard =[
    {
        cardIcon: crown,
        cardTitle: 'Silver Plan',
        initMonthlyPrice: '₹300',
        monthlyPrice: '₹199',
        initYearlyPrice: '₹2,400',
        yearlyPrice: '₹2,000',
        platformTag: '💻 DESKTOP + MOBILE',
        btnText: 'BUY SILVER PLAN',
        checkList: [
            {
                checkIcon: checkicon,
                name: 'Inventory'
            },
            {
                checkIcon: checkicon,
                name: 'Sales'
            },
            {
                checkIcon: checkicon,
                name: 'Customer'
            },
            {
                checkIcon: crossicon,
                name: 'Purchase'
            },
            {
                checkIcon: crossicon,
                name: 'Finance'
            },
            {
                checkIcon: crossicon,
                name: 'E-Invoice / E-way Bill'
            },
            {
                checkIcon: checkicon,
                name: 'Support (Mail)'
            },
        ]
    },
    {
        cardIcon: goldcrown,
        cardTitle: 'Gold Plan',
        initMonthlyPrice: '₹600',
        monthlyPrice: '₹499',
        initYearlyPrice: '₹6,000',
        yearlyPrice: '₹5,500',
        platformTag: '💻 DESKTOP + MOBILE',
        btnText: 'BUY GOLD PLAN',
        checkList: [
            {
                checkIcon: checkicon,
                name: 'Inventory'
            },
            {
                checkIcon: checkicon,
                name: 'Sales'
            },
            {
                checkIcon: checkicon,
                name: 'Customer'
            },
            {
                checkIcon: checkicon,
                name: 'Purchase'
            },
            {
                checkIcon: crossicon,
                name: 'Finance'
            },
            {
                checkIcon: crossicon,
                name: 'E-Invoice / E-way Bill'
            },
            {
                checkIcon: checkicon,
                name: 'Support (Mail)'
            },
        ]
    },
    {
        cardIcon: greencrown,
        cardTitle: 'Platinum Plan',
        initMonthlyPrice: '₹1,500',
        monthlyPrice: '₹999',
        initYearlyPrice: '₹12,000',
        yearlyPrice: '₹11,000',
        platformTag: '💻 DESKTOP + MOBILE',
        btnText: 'BUY PLATINUM PLAN',
        checkList: [
            {
                checkIcon: checkicon,
                name: 'Inventory'
            },
            {
                checkIcon: checkicon,
                name: 'Sales'
            },
            {
                checkIcon: checkicon,
                name: 'Customer'
            },
            {
                checkIcon: checkicon,
                name: 'Purchase'
            },
            {
                checkIcon: checkicon,
                name: 'Finance'
            },
            {
                checkIcon: crossicon,
                name: 'E-Invoice / E-way Bill'
            },
            {
                checkIcon: checkicon,
                name: 'Support (Mail)'
            },
        ]
    },
    {
        cardIcon: purplecrown,
        cardTitle: 'Enterprise Plan',
        monthlyPrice: 'Custom Pricing',
        yearlyPrice: 'Custom Pricing',
        platformTag: 'All Platinum features Plus',
        btnText: 'TALK TO SALES',
        checkList: [
            {
                checkIcon: checkicon,
                name: 'BOM'
            },
            {
                checkIcon: checkicon,
                name: 'Production Planning'
            },
            {
                checkIcon: checkicon,
                name: 'Work Order Management'
            },
            {
                checkIcon: checkicon,
                name: 'Quality Control'
            },
            {
                checkIcon: checkicon,
                name: 'Employee Management'
            },
            {
                checkIcon: checkicon,
                name: 'Attendance Management'
            },
            {
                checkIcon: checkicon,
                name: 'Leave Mangement'
            },
        ]
    },
]

const modalCard = [
    {
        title: 'SALES',
        items: [
            {
            cell1: 'Invoice',
            cell2: checkicon,
            cell3: checkicon,
            cell4: checkicon,
            cell5: checkicon
            },
            {
            cell1: 'Cash Memo',
            cell2: crossicon,
            cell3: checkicon,
            cell4: checkicon,
            cell5: checkicon
            },
            {
            cell1: 'Delivery Challan',
            cell2: crossicon,
            cell3: checkicon,
            cell4: checkicon,
            cell5: checkicon
            },
            {
            cell1: 'Performa Invoice',
            cell2: crossicon,
            cell3: checkicon,
            cell4: checkicon,
            cell5: checkicon
            },
            {
            cell1: 'Sales Order',
            cell2: crossicon,
            cell3: checkicon,
            cell4: checkicon,
            cell5: checkicon
            },
            {
            cell1: 'Credit Note',
            cell2: checkicon,
            cell3: checkicon,
            cell4: checkicon,
            cell5: checkicon
            },
            {
            cell1: 'E-Invoice',
            cell2: crossicon,
            cell3: crossicon,
            cell4: checkicon,
            cell5: checkicon
            },
            {
            cell1: 'E-wayBill',
            cell2: crossicon,
            cell3: crossicon,
            cell4: checkicon,
            cell5: checkicon
            },
        ]
    },
    {
        title: 'SALES',
        items: [
            {
            cell1: 'Invoice',
            cell2: checkicon,
            cell3: checkicon,
            cell4: checkicon,
            cell5: checkicon
            },
            {
            cell1: 'Cash Memo',
            cell2: crossicon,
            cell3: checkicon,
            cell4: checkicon,
            cell5: checkicon
            },
            {
            cell1: 'Delivery Challan',
            cell2: crossicon,
            cell3: checkicon,
            cell4: checkicon,
            cell5: checkicon
            },
            {
            cell1: 'Performa Invoice',
            cell2: crossicon,
            cell3: checkicon,
            cell4: checkicon,
            cell5: checkicon
            },
            {
            cell1: 'Sales Order',
            cell2: crossicon,
            cell3: checkicon,
            cell4: checkicon,
            cell5: checkicon
            },
            {
            cell1: 'Credit Note',
            cell2: checkicon,
            cell3: checkicon,
            cell4: checkicon,
            cell5: checkicon
            },
            {
            cell1: 'E-Invoice',
            cell2: crossicon,
            cell3: crossicon,
            cell4: checkicon,
            cell5: checkicon
            },
            {
            cell1: 'E-wayBill',
            cell2: crossicon,
            cell3: crossicon,
            cell4: checkicon,
            cell5: checkicon
            },
        ]
    },
]
const Pricing = () => {
    const [isClicked, setClick] = useState(0);
     const [open, setOpen] = useState(false);
  return (
    <>
        <div className="bg-[#f5f7f8] mt-10 px-8">
            <div className="flex gap-6 py-6 justify-center pt-12">
                <h2 className="text-[1.4rem] text-[#1e3a8a] font-bold">
                    <span className="text-[#fe0706]">Tax</span>
                    <span className="text-black">So<sup>®</sup></span>
                    <span className="">ERP</span>
                </h2>
                <div className="rounded-3xl p-2 bg-white">
                    <span onClick={() => setClick(0)} className={`p-2 rounded-2xl cursor-pointer ${isClicked === 0 ? 'bg-blue-500 text-white' : 'bg-transparent text-gray-700'}`}>Monthly</span>
                    <span onClick={() => setClick(1)} className={`p-2 rounded-2xl cursor-pointer ${isClicked === 1 ? 'bg-blue-500 text-white' : 'bg-transparent text-gray-700'}`}>Yearly</span>
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
                    onClick={() => setOpen(true)}
                    className="text-[#6366f1] font-bold justify-self-start my-4" >+ More Features</div>

                    <div className="btn-primary mt-4 text-center">{card.btnText}</div>
                    {/* Modal */}
            {open && (
                <div className="fixed to-10 inset-0 flex items-center justify-center bg-black/50 z-50 ">
                <div className="bg-white overflow-hidden rounded-xl shadow-lg w-11/12 ">
                    <div className="bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] text-white px-4 py-4 flex justify-between items-center">
                        <h2 className="text-xl font-bold "><span className='inline-block bg-white/20 rounded-md mr-3'>📋</span>All Features</h2>

                        <button
                        onClick={() => setOpen(false)}
                        className=" bg-white/20 px-4 rounded-full py-2 hover:rotate-90 "
                        >x</button>
                    </div>

                    <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr] gap-4 px-4 py-6">
                        <div className="text-[#2c3e50]">
                            Features
                        </div>
                        <div className="font-bold md:flex items-center">
                            <img width={40} src={crown} alt="" /> <span>Silver</span>  
                        </div>
                        <div className="font-bold md:flex items-center">
                            <img width={40} src={goldcrown} alt="" /> <span>Silver</span>  
                        </div>
                        <div className="font-bold md:flex items-center">
                            <img width={40} src={greencrown} alt="" /> <span>Silver</span>  
                        </div>
                        <div className="font-bold md:flex items-center">
                            <img width={40} src={purplecrown} alt="" /> <span>Silver</span>  
                        </div>
                    </div>
                    
                    {modalCard.map((card, index) => (
                        <div key={index} className="shadow-[0_2px_8px_0_rgba(99,99,99,0.2)] rounded-[10px] px-4">
                        <div className="text-center font-bold py-4">{card.title}</div>
                        {card.items.map((item, index)=>(
                            <div key={index} className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr] gap-4">
                            <div className="">{item.cell1}</div>
                            <div className="rounded-full overflow-hidden"><img src={item.cell2} alt="" className='w-2/12 rounded-full' /></div>
                            <div className="rounded-full overflow-hidden"><img src={item.cell3} alt="" className='rounded-full w-2/12'/></div>
                            <div className="rounded-full overflow-hidden"><img src={item.cell4} alt="" className='w-2/12'/></div>
                            <div className="rounded-full overflow-hidden"><img src={item.cell5} alt="" className='w-2/12'/></div>
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
