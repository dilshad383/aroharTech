import React, { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { cardData, cardData2, cardData3, cardData4 } from "../assets/data";
import FeaturesCard from "./FeaturesCard"; // adjust path if needed

const Features = () => {
  const tabs = ["Overview", "Services", "Pricing", "Contact"];
  const sectionIds = ["overview", "services", "pricing", "contact"];

  const [activeTab, setActiveTab] = useState(0);

  // ✅ create refs for each section
  const ref0 = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  // ✅ useInView hooks for each ref
  const inView0 = useInView(ref0, { margin: "-30% 0px -70% 0px" });
  const inView1 = useInView(ref1, { margin: "-30% 0px -70% 0px" });
  const inView2 = useInView(ref2, { margin: "-30% 0px -70% 0px" });
  const inView3 = useInView(ref3, { margin: "-30% 0px -70% 0px" });

  // ✅ change active tab based on scroll
  useEffect(() => {
    if (inView0) setActiveTab(0);
    else if (inView1) setActiveTab(1);
    else if (inView2) setActiveTab(2);
    else if (inView3) setActiveTab(3);
  }, [inView0, inView1, inView2, inView3]);

  const sectionRefs = [ref0, ref1, ref2, ref3];

  const handleTabClick = (index) => {
    sectionRefs[index].current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="grid md:grid-cols-4 gap-10">
      {/* Sidebar */}
      <div className="sticky top-40 self-start h-screen max-md:hidden">
        <ul className="mt-8">
          {tabs.map((title, index) => (
            <li key={index} className="mb-4">
              <button
                className={`shadow-[0_2px_10px_rgba(0,0,0,0.1)] px-8 py-4 font-bold w-full rounded-2xl cursor-pointer text-[1.4rem] ${
                  activeTab === index
                    ? "bg-[#3498db] text-white"
                    : "text-[#555] bg-white hover:bg-[#e3f2fd]"
                }`}
                onClick={() => handleTabClick(index)}
              >
                {title}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Content */}
      <div
        className="col-span-3 overflow-y-auto scroll-hide mt-4"
        style={{ maxHeight: "100vh" }}
      >
        <div className="scrollable-content">
          <section
            id={sectionIds[0]}
            ref={ref0}
            style={{ scrollMarginTop: "40px" }}
            className="py-8"
          >
            <h3 className="text-center text-3xl text-[#2c3e50] font-bold my-4">
              {tabs[0]}
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {cardData.map((card) => (
                <FeaturesCard key={card.id} {...card} />
              ))}
            </div>
          </section>

          <section
            id={sectionIds[1]}
            ref={ref1}
            style={{ scrollMarginTop: "40px" }}
            className="py-8"
          >
            <h3 className="text-center text-3xl text-[#2c3e50] font-bold my-4">
              {tabs[1]}
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {cardData2.map((card) => (
                <FeaturesCard key={card.id} {...card} />
              ))}
            </div>
          </section>

          <section
            id={sectionIds[2]}
            ref={ref2}
            style={{ scrollMarginTop: "40px" }}
            className="py-8"
          >
            <h3 className="text-center text-3xl text-[#2c3e50] font-bold my-4">
              {tabs[2]}
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {cardData3.map((card) => (
                <FeaturesCard key={card.id} {...card} />
              ))}
            </div>
          </section>

          <section
            id={sectionIds[3]}
            ref={ref3}
            style={{ scrollMarginTop: "40px" }}
            className="py-8"
          >
            <h3 className="text-center text-3xl text-[#2c3e50] font-bold my-4">
              {tabs[3]}
            </h3>
            <div className="grid md:grid-cols-3 gap-4 mb-100">
              {cardData4.map((card) => (
                <FeaturesCard key={card.id} {...card} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Features;
