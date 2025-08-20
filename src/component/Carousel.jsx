import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const carouselCards= [
  {
    icon: 'GE',
    text: '"TaxSo ERP has become an integral part of the daily work processes at our manufacturing plant. It is an effective software tool that helps us manage all our essential business activities. Happy with their overall service and support.”',
    name: 'Mr. G P Kothari - CEO',
    company: 'Galaxy Enterprises'

  },
  {
    icon: 'CMS',
    text: '“ Technology is the present and future need of every business. I see TaxSo not just as a software, but as a seed of technology for the growth of my business. If a farmer wants to see green fields in the future, he has to put in the seeds today. ”',
    name: 'Anil Gusain - CEO', 
    company: ' Countrees Manufacturing and Services Pvt Ltd'
  },
  {
    icon: 'PM',
    text: 'I can create invoices just by speaking. The AI features blew my mind!',
    name: ' Priya Mehta - CFO', 
    company: 'Pragya Manufacturing'
  },
]
const Carousel = () => {
  return (
    <div className="h-96 overflow-hidden">
      <Swiper
        direction="vertical"
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        style={{ height: '100%' }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {carouselCards.map((card, index) => (
        <SwiperSlide key={index}>
            <div className="bg-[#1f3470] text-white p-4 w-130 mt-10">
              <div className="p-4 text-2xl rounded-full bg-white w-[4rem] h-[4rem] text-[#1f3470] font-bold">{card.icon}</div>
              <p>
                {card.text}
              </p>
              <h3 className="text-2xl ">{card.name}</h3>
              <p>{card.company}</p>
            </div>
        </SwiperSlide>
      ))}
      </Swiper>
    </div>
  );
};

export default Carousel;