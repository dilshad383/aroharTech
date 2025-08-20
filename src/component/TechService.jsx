import React from 'react'
import '../App.css'
import htmlicon from '../assets/html.png'
import reacticon from '../assets/react.png'
import angularicon from '../assets/angular.png'
import vueicon from '../assets/vue.png'
import jQueryicon from '../assets/jquery.png'
import knockouticon from '../assets/knockout.png'
import javaicon from '../assets/java.png'
import nodeicon from '../assets/node.png'
import aspicon from '../assets/asp.jpg'
import awsicon from '../assets/aws.png'
import azureicon from '../assets/azure.png'
import giticon from '../assets/git.png'
import sqlicon from '../assets/sql.png'
import androidicon from '../assets/android.png'
import iconicicon from '../assets/ionic.png'
import fluttericon from '../assets/flutter.png'
import ioticon from '../assets/iot.png'

const techCards = [
  {
    cardIcon: '🎨',
    cardTitle: 'Frontend',
    items: [
      { itemLogo: htmlicon, itemName: 'HTML5', },
      { itemLogo: reacticon, itemName: 'React', },
      { itemLogo: angularicon, itemName: 'Angular' },
      { itemLogo: vueicon, itemName: 'Vue.js' },
      { itemLogo: jQueryicon, itemName: 'jQuery' },
      { itemLogo: knockouticon, itemName: 'Knockout' },
    ]
  },
  {
    cardIcon: '⚙️',
    cardTitle: 'Backend & Database',
    items: [
      { itemLogo: javaicon, itemName: "Java" },
      { itemLogo: nodeicon, itemName: "Node.js" },
      { itemLogo: aspicon, itemName: "ASP.NET" },
      { itemLogo: awsicon, itemName: "AWS" },
      { itemLogo: azureicon, itemName: "Azure" },
      { itemLogo: giticon, itemName: "Git" },
      { itemLogo: sqlicon, itemName: "MySQL" }
    ]
  },
  {
    cardIcon: '📱',
    cardTitle: 'Mobility',
    items: [
      { itemLogo: androidicon, itemName: "Android" },
      { itemLogo: iconicicon, itemName: "Ionic" },
      { itemLogo: fluttericon, itemName: "Flutter" },
      { itemLogo: ioticon, itemName: "IoT" }
    ]
  },
]

const TechService = () => {
  return (
    <div className='grid md:grid-cols-3 gap-10 mt-14'>
    {techCards.map((card, index) => (
      <div key={index} className='tech-card relative p-4 bg-[#ffffffb3] rounded-[24px]'>
        <div className="flex items-center gap-3 pl-6">
            <div className="tech-icon text-2xl">{card.cardIcon}</div>
            <h2 className="text-[#1e3a8a] text-2xl font-bold">{card.cardTitle}</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3 max-md:flex mt-4">
          {card.items.map((item, itemIndex) => (
            <div key={itemIndex} className="bg-[#ffffffe6] mx-auto  rounded-[20px] border-[#ffffff4d] border">
                <div className="rounded-md w-12 tech-logo grid ">
                  <img src={item.itemLogo} alt="" />
                </div>
                <p className='font-semibold'>{item.itemName}</p>
            </div>
          ))}
        </div>
    </div>
    ))}
    </div>
  )
}

export default TechService
