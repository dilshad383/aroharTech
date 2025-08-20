import '../App.css'
import crown from '../assets/crown.svg'
import goldcrown from '../assets/goldcrown.svg'
import purplecrown from '../assets/purplecrown.svg'
import greencrown from '../assets/greencrown.svg'
import checkicon from '../assets/check.svg'
import crossicon from '../assets/cross.svg'

const priceCard =[
    {
        cardIcon: crown,
        cardTitle: 'Silver Plan',
        cardInitPrice: '₹300',
        cardPrice: '₹199',
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
        cardInitPrice: '₹600',
        cardPrice: '₹499',
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
        cardInitPrice: '₹1200',
        cardPrice: '₹999',
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
        cardPrice: 'Custom Pricing',
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
const Pricing = () => {
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
                    <span className="bg p-2">Monthly</span>
                    <span className="bg p-2">Yearly</span>
                </div>
            </div>

            <div className=" grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                {priceCard.map((card, index) => (
                    <div key={index} className="rounded-2xl bg-white justify-items-center py-6 px-4">
                    <div className="icon-shadow px-2 py-4  rounded-2xl">
                        <img src={card.cardIcon} alt="" />
                    </div>
                    <h2 className="text-2xl font-bold pricing-heading py-2">{card.cardTitle}</h2>
                    <p className="text-lg">
                        <span className="line-through text-[#94a3b8]">{card.cardInitPrice}</span>
                        <span className="font-bold text-[#64748b] text-xl"> {card.cardPrice}</span>
                    </p>
                    <div className="bg-[#6366f11a] px-4 py-1 rounded-2xl mb-4">{card.platformTag}</div>
                    {card.checkList.map((item, index)=> (
                        <div key={index} className="justify-self-start px-8 pt-2">
                        <div className="flex gap-4">
                            <img src={item.checkIcon} alt="" width={24} height={24}
                            className={item.checkIcon === checkicon ? "check-icon transition-all" : ""}
                            />
                            <p className="">{item.name}</p>
                        </div>
                        
                    </div>
                    ))}

                    <div className="btn-primary mt-4 text-center">{card.btnText}</div>
                </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default Pricing
