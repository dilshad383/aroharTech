import React from 'react'
const infoCard = [
    {
        icon: '🏢',
        title: 'Head Office',
        address: '📍 29 B, Om Vihar, Lane No. 4, Ajabpur, Dehradun - 248001',
        contact: '📞 +91 - 6397521901 / +91 - 7251064814',
        email: '✉️ info@arohar.com'
    },
    {
        icon: '🍁',
        title: 'Canada Office',
        address: '📍 35 Gabrielle drive, Brampton, L7A 2A5, Ontario, Canada',
        contact: '📞 +1 (437) 213-2872',
        email: '✉️ info@arohar.com'
    }
]
const Contact = () => {
  return (
    <>
        <div className="my-22 overflow-hidden rounded-3xl grid md:grid-cols-2 mx-12">
            <div className="text-white bg-[linear-gradient(135deg,#1e3a8a_0%,rgba(30,58,138,0.9)_100%)] md:[clip-path:polygon(0%_0%,_85%_0%,_100%_100%,_0_100%)] px-8 py-8">
                <h1 className="text-3xl font-bold">
                    Let's Create Something Amazing
                </h1>
                <p className='mr-18 my-4 text-lg'>Ready to transform your ideas into reality? We're here to make it happen. Connect with us and let's start building the future together.</p>

                <div className="grid gap-4 mt-6">
                    {infoCard.map((card, index) => (
                    <div key={index} className="rounded-[15px] px-6 py-6 w-10/12  backdrop-blur-[10px] border border-solid border-white/20 bg-[rgba(255,255,255,0.1)]">
                        <div className="flex gap-4 items-center">
                            <div className="rounded-full p-2 bg-white">{card.icon}</div>
                            <h2 className="font-bold text-xl">{card.title}</h2>
                        </div>
                        <div className=" mt-2">
                            <p>{card.address}</p>
                            <p>{card.contact}</p>
                            <p>{card.email}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>

            <div className="">
                <div className="mt-20">
                    <h2 className="font-bold text-3xl">
                        Start the Conversation
                    </h2>
                    <p>Every great project begins with a simple message</p>
                </div>
                <form action="" className='mt-8'>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="floating-label">
                            <input type="text" id="EmailName" name="name" placeholder=" " required="" />
                            <label for="name">Your Name</label>
                        </div>
                        <div class="floating-label">
                            <input type="email" id="EmailTo" name="email" placeholder=" " required="" />
                            <label for="email">Email Address</label>
                        </div>
                    </div>
                    <div className="floating-label">
                        <input type="tel" id="EmailPhone" name="phone" placeholder=" " />
                        <label for="phone">Phone Number</label>
                    </div>
                    <div class="floating-label">
                            <textarea id="EmailBody" name="message" placeholder=" " required="" className='resize-none'></textarea>
                            <label for="message">Tell us about your project or idea...</label>
                    </div>
                    <div className="grid place-items-center">
                        <button className='submit-btn' type="submit">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Contact
