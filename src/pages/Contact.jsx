import React from 'react'

const Contact = () => {
  return (
    <>
        <div className="mt-22 overflow-hidden rounded-3xl grid grid-cols-2">
            <div className="text-white bg-[linear-gradient(135deg,#1e3a8a_0%,rgba(30,58,138,0.9)_100%)]">
                <h1 className="text-2xl font-bold">
                    Let's Create Something Amazing
                </h1>
                <p>Ready to transform your ideas into reality? We're here to make it happen. Connect with us and let's start building the future together.</p>

                <div className="rounded-[15px] backdrop-blur-[10px] border border-solid border-white/20 bg-[rgba(255,255,255,0.1)]">
                    <div className="flex gap-4">
                        <div className="rounded-full p-2 bg-white">🏢</div>
                        <h2 className="font-bold text-xl">Head Office</h2>
                    </div>
                    <div className="">
                        <p>📍 29 B, Om Vihar, Lane No. 4, Ajabpur, Dehradun - 248001</p>
                        <p>📞 +91 - 6397521901 / +91 - 7251064814</p>
                        <p>✉️ info@arohar.com</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact
