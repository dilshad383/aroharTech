import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import img1 from '../assets/gallery1.png'
import img2 from '../assets/gallery2.png'
import img3 from '../assets/gallery3.jpeg'
import img4 from '../assets/gallery4.png'
import img5 from '../assets/gallery5.jpg'
import img6 from '../assets/gallery6.png'
import SectionHeader from '../component/SectionHeader'

const gallery= [
    {
        img: img1,
        title: 'Team Collaboration',
        text: 'Where ideas come to life through teamwork',
        lightboxText:'Our open workspace encourages cross-team collaboration, fostering innovation and creative problem-solving across all departments. Every corner of our office is designed to bring people together.'
    },
    {
        img: img2,
        title: 'Modern Workspace',
        text: 'State-of-the-art facilities for optimal productivity',
        lightboxText:'Our office features the latest technology and ergonomic design to ensure comfort and efficiency. From standing desks to collaborative spaces, every detail is crafted for productivity.'
    },
    {
        img: img3,
        title: 'Team Building',
        text: 'Celebrating success together',
        lightboxText:'We believe in recognizing achievements and building strong relationships through regular team events, celebrations, and fun activities that bring our team together.'
    },
    {
        img: img4,
        title: 'Innovation Hub',
        text: 'Where breakthrough ideas become reality',
        lightboxText:'Our dedicated innovation space is equipped with cutting-edge tools and technologies for research and development. This is where breakthrough ideas become reality.'
    },
    {
        img: img5,
        title: 'Continuous Learning',
        text: 'Growing skills and expertise together',
        lightboxText:"We invest in our team's professional development through comprehensive training programs, workshops, and skill enhancement initiatives that keep us at the forefront of technology."
    },
    {
        img: img6,
        title: 'Company Culture',
        text: 'A place where passion meets purpose',
        lightboxText:'Our culture values creativity, innovation, and personal growth while maintaining a healthy work-life balance. Join a workplace where passion meets purpose.'
    }
]

const Career = () => {
    const [open, setOpen] = React.useState(false);

  
    const slides = gallery.map(item => ({
        src: item.img,
        title: item.title,
        description: item.text,

        customContent: (
            <div
                key={item.title} 
                style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "10px",
                    padding: "24px",
                    color: "white",
                    backgroundImage: "linear-gradient(transparent, rgba(30, 58, 138, 0.95))",
                    borderRadius: "24px",
                    width: "95%", 
                    zIndex: 1, 
                    textAlign: "left", 
                }}
            >
                <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "5px", textAlign: "center" }}>{item.title}</h2>
                <p style={{ fontSize: "1rem", textAlign: "center" }}>{item.lightboxText}</p>
            </div>
        ),
    }));

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

            <div className="grid md:grid-cols-3 gap-6 my-6">
                {gallery.map((card, index) =>(
                <div key={index} className="overflow-hidden rounded-[25px] relative h-[22rem] gallery-card" onClick={() => setOpen(true)}>
                    <img className='w-full ' src={card.img} alt="" />
                    <div className="absolute bottom-0 text-white image-overlay left-0 right-0 px-12 pt-10 pb-4">
                        <h2 className="text-2xl font-bold ">{card.title}</h2>
                        <p className="text-lg my-2">{card.text}</p>
                    </div>
                </div>
                ))}
            </div>
            <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={slides} 
            render={{
                slide: ({ slide }) => { 
                    return (
                        <div style={{ position: "relative", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <img
                                src={slide.src}
                                alt={slide.alt || slide.title || "Gallery image"} 
                                style={{ objectFit: "contain", width: "100%", height: "100%" }}
                            />
                            {slide.customContent}
                        </div>
                    );
                },
            }}
            />
        </div>
    </>
  )
}

export default Career