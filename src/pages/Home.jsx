import '../App.css'
import img2 from '../assets/mock2.png'
import mobile from '../assets/mobile1.png';
import receipt from '../assets/receipt.svg';
import hearticon from '../assets/heart.svg';
import user from '../assets/user.svg';
import star from '../assets/star.svg';
import Carousel from '../component/carousel';

import { BsArrowRightShort } from "react-icons/bs";
import Heading from '../component/Heading';
import Features from '../component/Features';

import Footer from '../component/Footer';


const benefitsBox = [
  {
    icon: '🔄',
    title: 'Fully Integrated Modules',
    desc: 'No need for separate software.'
  },
  {
    icon: '☁️',
    title: 'Cloud-Based Access',
    desc: 'Work from anywhere, anytime.'
  },
  {
    icon: '⚙️',
    title: 'AI-Enabled Automation',
    desc: 'Reduce manual work and save time.'
  },
  {
    icon: '📈',
    title: 'Real-Time Insights',
    desc: "Make data-driven decisions."
  },
  {
    icon: '🧾',
    title: 'GST & Compliance Ready',
    desc: "Always stay audit-ready."
  },
  {
    icon: '🔐',
    title: 'Secure & Scalable',
    desc: "Enterprise-level security and role-based access."
  },
  {
    icon: '🧑‍💻',
    title: 'User-Friendly Interface',
    desc: "Minimal training, maximum adoption."
  },
  {
    icon: '🖼️',
    title: 'OCR Data Extraction',
    desc: "Upload image/pdf bills, get Excel-ready data."
  },
  {
    icon: '🤖',
    title: 'Smart Alerts & Forecasts',
    desc: "Low stock, payment dues, sales trends."
  },
  {
    icon: '📊',
    title: 'Auto Reports',
    desc: "Daily/Weekly/Monthly reports on email or WhatsApp."
  }
]

const statCards = [
  {
    icon: receipt,
    title: '50 Lakhs +',
    desc: 'Monthly Invoices Created'
  },
  {
    icon: user,
    title: '10,000+',
    desc: 'Daily Business Users'
  },
  {
    icon: star,
    title: '4.9',
    desc: 'Google Reviews Rating'
  },
  {
    icon: hearticon,
    title: '5,000+',
    desc: 'GST Report generated monthly'
  },
]
const featuredCards = [
  {
    title: 'Proven Track Record',
    desc: 'Consistent results with 98% client satisfaction rate and industry-leading expertise in tax solutions.'
  },
  {
    title:'Expert Team',
    desc:'Certified professionals with 15+ years experience in tax solutions and financial guidance.'
  },
  {
    title:'Personalized Support',
    desc:'Dedicated support tailored to your specific business needs and requirements.'
  },
  {
    title:'Continuous Updates',
    desc:'Always up-to-date with the latest tax regulations and compliance requirements.'
  }
]
const Home = () => {
  return (
    <>
{/* MAIN */}
      <div className="grid md:grid-cols-2 mx-30 mt-18">
        <div className="">
            <h1 className="text-[#1e3a8a] text-7xl font-extrabold main-heading relative">
              Smart ERP for Modern Businesses
          </h1>
          <p className="text-[#6c757d] text-2xl mt-8">Billing, Inventory, Accounting, HRMS - All in One.</p>
          <p className="text-lg tagline relative left-6 mt-4">Connect. Collaborate. Grow.</p>

          <div className="flex gap-8 my-8 text-lg">
            <button className="rounded-lg bg-[linear-gradient(135deg,#fe0706_0%,#d63031_100%)] text-white px-8 py-2 flex items-center transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-red-600 hover:-translate-y-1 cursor-pointer
            ">Start Your 14-Day Free Trial <BsArrowRightShort />
            </button>
            <button className="rounded-lg border-2 border-[#1e3a8a33] px-8 py-2 flex items-center gap-2 text-[#1e3a8a] transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-[#fe0706] hover:text-[#fe0706] hover:-translate-y-1 cursor-pointer">Schedule Demo 
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 10l4.553-2.276A1 1 0 0 1 21 8.618v6.764a1 1 0 0 1-1.447.894L15 14M5 18h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2z"></path>
              </svg>
            </button>
          </div>

          <div className="">
            <p className="text-[#6b7280] text-lg">Price starts at as minimum as
            <span className="text-[#ef4444] font-bold text-lg relative inline-block px-2"> ₹<span className="text-2xl ">199 </span> 
                
              <svg className="underline-svg absolute -bottom-2 -left-3 w-20" fill='currentcolor' viewBox="0 0 100 20">
                <path  d="M5,10 Q50,5 95,10"></path>
                </svg>
            </span>
              a month.
            </p>
            <div className="mt-6 h-[.1rem] w-[80%] bg-[#ef4444]"></div>
          </div>
        </div>
        <div className="">
          <img src={img2} alt="" />
        </div>
      </div>

{/* FEATURES */}
      <div className="md:px-40 py-10 mx-auto pb-20 bg-[#ededed] ">
        <Heading
          heading="What we do at "
          text="Whether you operate a retail store, manage a wholesale warehouse, run a manufacturing unit, or offer services — TaxSo brings everything together in one streamlined platform."
        />

        <Features/>
      </div>

{/* Benefits */}
      <div className="md:px-40 py-5 mx-auto  bg-[#f8f9fa]">
        <Heading
          heading="Benefits of -"
          text="Streamline Your Business Operations with Smart Tax Solutions"
        />
      <div className="grid relative">
        <div className="md:w-3/12 mx-auto ">
          <img className='' src={mobile} alt="" />
        </div>
        <div className="mx-8 my-6 grid gap-6 md:w-2/6 mt-14">
          {benefitsBox.map((benefit, index) => (
            <div key={index} className="flex gap-4 border-l-4 rounded-md border-[#e52b2b] px-4 py-2 bg-white max-md:w-4/6 mx-auto md:absolute benefit-item">
            <div className="border-3 px-2 rounded-md border-[#e52b2b] grid place-items-center text-[20px] ">
              {benefit.icon}
            </div>
            <div className="">
              <h3 className="text-[18px] font-bold text-[#34495e]">{benefit.title}</h3>
              <p>{benefit.desc}</p>
            </div>
          </div>
          ))}
        </div>
      </div>
      </div>

{/* WHY Us */}
      <div className="md:px-40 py-10 mx-auto bg-[#f1f1f1]">
        <Heading
          heading="Why Businesses Trust"
          text="Experience the difference with our comprehensive tax solutions, expert guidance, and unwavering commitment to your financial success." />

          <div className="grid md:grid-cols-4 gap-8">
            {statCards.map((card, index) => (
              <div key={index} className="stat-card bg-white overflow-hidden py-8 relative rounded-[20px]">
              <div className="bg-[linear-gradient(135deg,#f9e0d9,#ffffff)] p-2 w-[50px] border rounded-md border-[#fe07061a] mx-auto">
                <img  src={card.icon} alt="" />
              </div>
              <h3 className="text-center text-[#1e3a8a] text-[1.9rem] font-extrabold mt-4">{card.title}</h3>
              <p className='text-[#1e3a8a] text-center'>{card.desc}</p>
            </div>
            ))}
            {featuredCards.map((card, index) => (
              <div key={index} className="feature-card bg-white overflow-hidden py-8 px-2 relative rounded-[20px] text-center">
              <h3 className='text-[1.5rem] font-bold'>{card.title}</h3>
              <p className="text-[#6c757d]">
                {card.desc}
              </p>
            </div>
            ))}
          </div>
      </div>

{/* Testimonials */}
      <div className="md:px-20 py-10 mx-auto bg-[#f8f9fa] relative">
        <div className="text-center">
          <h2 className="text-[1.8rem] text-[#1e3a8a] font-bold">Testimonials</h2>
        <p className="text-[#6c757d] ">
          What Our Customers Say About TaxSo
        </p>
        </div>

        <div className="flex justify-between relative">
            <Carousel />
          <div className="shadow-[0px_18px_36px_-18px_rgba(12,5,46,0.3),_0px_30px_60px_-12px_rgba(12,5,46,0.25)] aspect-square grid place-items-center w-[230px] rounded-full absolute top-40 -translate-x-1/2 left-1/2">
            <Heading />
          </div>
        </div>
      </div>

{/* ABOUT US */}
      <div className="md:px-40 py-10 mx-auto mb-20 bg-[#f8f9fa] relative">
        <h2 className="text-[1.8rem] text-[#1e3a8a] font-bold text-center">About Us</h2>

        <div className="grid md:grid-cols-2 gap-10 mt-8">
          <div className="">
            <h2 className="text-5xl font-extrabold text-[#212529]">
            Driven by Innovation
            <span className="text block bg-[linear-gradient(135deg,#667eea,#764ba2)] bg-clip-text text-transparent py-2">
              Designed for Businesses
            </span>
            </h2>
            <p className="mt-8 mb-4 text-[#6c757d] text-lg">
              At <span className='text-[1.8rem] text-[#1e3a8a] font-bold'>Tax
                <span className="text-[#fe0706]">So</span><sup>®</sup></span> , we believe in simplifying complexity. We're a passionate team of developers, accountants, and industry experts who have built an <span className="">AI-powered, cloud-based ERP platform</span> specifically for the needs of <span className="">manufacturers and service-based SMEs.</span>
            </p>
            <p className="ml-4 bg-[linear-gradient(135deg,#212529_0%,#fe0706_100%)] bg-clip-text text-transparent text-lg bullet-point relative">
              We're not just a software company — we're your <span className="font-bold">growth partner</span>.
            </p>
          </div>

          <div className="relative">
            <div className="floating_card rounded-2xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.1),_0_0_0_1px_rgba(255,255,255,0.2)] text-[#212529]">
              <h3 className="text-2xl font-bold">Mission</h3>
              <p className="text-xl">To empower businesses with smart, affordable, and intelligent ERP solutions that drive growth and operational excellence.</p>
            </div>
            <div className="floating_card rounded-2xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.1),_0_0_0_1px_rgba(255,255,255,0.2)] text-[#212529]">
              <h3 className="text-2xl font-bold">Mission</h3>
              <p className="text-xl">To empower businesses with smart, affordable, and intelligent ERP solutions that drive growth and operational excellence.</p>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home
