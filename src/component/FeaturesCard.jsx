import React from 'react'

const FeaturesCard = ({icon, title, desc}) => {
  // Create the icon element if it's a component, otherwise use as-is
  const IconComponent = icon;
  const iconElement = typeof IconComponent === 'function' ? <IconComponent /> : IconComponent;
  
  return (
    <div className="rounded-md bg-white">
        <div className="flex gap-4 items-center text-lg bg-[linear-gradient(45deg,#e3f2fd,#fff)] px-4 py-6" >
            <div className="py-2 px-3 rounded-md text-white bg-[#3498db]">{iconElement}</div>
            {title}
        </div>
        <div className="p-4 text-[#7f8c8d]">
            <p>
                {desc}
            </p>
        </div>

    </div>
  )
}

export default FeaturesCard
