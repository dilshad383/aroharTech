import React from 'react'
import '../App.css'
import SectionHeader from '../component/SectionHeader'
import TechService from '../component/TechService'
import Accordion from '../component/Accordion'

const cards =[
  {
    icon: "🌐",
    title: "SaaS Development",
    subheading: "(Software as a Service)",
    description: "Our technical skillset and years of experience help us create scalable, reliable, and secure SaaS development as per your ever-changing business needs. We focus on delivering solutions that grow with your business."
  },
  {
    icon:"📦",
    title:"Custom Software Development",
    subheading:"Tailored Solutions",
    description:"We provide high-end custom software development services by leveraging core technologies. Our experts and professional-grade developers help you build and align solutions to your specific business needs. Every solution is crafted uniquely."
  },
  {
    icon:"📱",
    title:"Mobile App Development",
    subheading:"Native & Hybrid",
    description:"We help you develop interactive Native and Hybrid mobile apps for Android and iOS by leveraging cutting-edge technologies. Collaborate with us to create engaging mobile applications that help redefine customer experiences."
  }
]
const chooseCards =[
  {
    icon: '🚀',
    title: '1000+ Successful Projects',
    text: 'Since our inception, we have successfully delivered 1000+ projects with the efforts of our dedicated team.'
  },
  {
    icon: '⭐',
    title: '20+ Years Experience',
    text: "We have spent 20+ years in industry building software's tailored to our customer needs."
  },
  {
    icon: '📈',
    title: "Highly Scalable Solution",
    text: "Due to ever changing nature of business, we provide software solution that can grow and shrink organically with absolutely no compromise on the performance."
  },
  {
    icon: '💬',
    title: 'Cost Effective Customer-Centric Solution',
    text: 'We provide a budget-friendly solution with industry-best customer support standards, focusing on reducing hardware costs while adopting cloud infrastructure and working with clients as one dedicated team.'
  },
  {
    icon: '🔒',
    title: 'Advance Software Security',
    text: 'We deploy advanced security measures, including high-security SSLs, data encryption, secure admin dashboard, and more, to deliver excellent software services.'
  },
  {
    icon: '🔄',
    title: 'Full Cycle Development',
    text: 'We provide end-to-end or full-cycle solutions from initial prototyping & UI/UX designing development to the final deployment.'
  },
]
const Services = () => {
  return (
    <>
      <div className="mt-18 px-14 py-12 bg-[#f5f7fb]">
        <p className="uppercase text-lg">We Specialize In</p>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="">
            <h1 className="bg-[linear-gradient(135deg,#212529_0%,#565656_100%)] text-6xl font-extrabold bg-clip-text text-transparent">Custom Software
            <span className="bg-[linear-gradient(135deg,#1e3a8a_0%,#8457fe_100%)] bg-clip-text block">
              Development
            </span>
          </h1>
          <p className='text-xl text-[#000c] my-8'>
            Creating an application that meets specific business requirements is vital for survival in the modern competitive age. Custom Software Development is the process of analysing, designing, the code, and deploying software applications for ISV's or an enterprise within a business. We prefer to create unique designs and development of software that is dominant to a productive business.
          </p>
          </div>
          <div className="">
            <div className="bg-white p-12 rounded-[30px] shadow-lg w-130">
              <div className="bg-[#000000b3] text-white rounded-[30px]  p-8 mx-auto">
              <div className="flex gap-2 pl-4">
                  <div className="bg-[#ff5f57] control"></div>
                <div className="bg-[#ffbd2e] control"></div>
                <div className="bg-[#28ca42] control"></div>
              </div>
              <pre>
                <code>
                {`
  const solution = createCustomSoftware({
  scalable: true,
  innovative: true,
  businessFocused: true
  });`
                }
                </code>
              </pre>
            </div>
            </div>
          </div>
        </div>
      </div>

{/* Services */}
      <div className="bg-[#ededed] px-8 py-8">
        <SectionHeader
        heading="Services"
        text="We are known for providing industry's most versatile, stable, secure & scalable custom software development solution for advancing your software development experiences. With our development services, you can explore limitless possibilities to build, innovate and grow your business."
        />
        
        <div className="grid md:grid-cols-3 gap-8 my-12">
          {cards.map((card, index) => (
            <div key={index} className="service-card relative bg-white rounded-[24px] p-4 text-center py-8 px-8 overflow-hidden hover:-translate-y-4 transition-all">
            <div className="flex gap-4 items-center justify-center">
              <div className="bg-[linear-gradient(135deg,_#1e3a8a,_#3b82f6)] rounded-xl p-2 text-2xl">{card.icon}</div>
              <h2 className="font-bold text-2xl">{card.title}</h2>
            </div>
              <p className="text-lg my-4 text-[#1e3a8a]">
                {card.subheading}
              </p>
              <p className="text-[#6c757d] px-4">
                {card.description}
              </p>
          </div>
          ))}
        
        </div>
      </div>

{/* Technology Stack */}
      <div className="bg-[#edf0f6] md:px-22 py-8">
        <SectionHeader
        heading="Technology Stack"
        text="Crafting digital experiences with cutting-edge technologies and modern development practices"
        />
        <TechService />
      </div>

{/* Why Choose Us */}
      <div className="bg-[#ededed] md:px-22">
        <SectionHeader
        heading="Why Choose Us"
        text="We support our customer with absolute industry best standards and work with them as one team."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {chooseCards.map((card, index) =>(
            <div key={index} className="rounded-3xl bg-white px-6 pt-6 pb-10  relative overflow-hidden service-card">
            <div className="flex gap-4 mb-6 items-center">
              <div className="bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] rounded-xl p-3 text-xl">{card.icon}</div>
              <h2 className="font-bold text-2xl">{card.title}</h2>
            </div>
              <p className="text-[#6c757d]">{card.text}</p>
          </div>
          ))
          }
        </div>
      </div>

{/* FAQS */}
      <div className="bg-[#f5f6f9] py-10">
        <SectionHeader
        heading='Frequently Asked Questions'
        text='FAQ'
        />
        <Accordion/>
      </div>
    </>
  )
}

export default Services
