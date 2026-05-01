'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
import ToolSlideCard from './ToolSlideCard'

/**
 * ToolSlider Component
 * Modern, responsive carousel for displaying developer tools
 * Features: Autoplay, touch swipe, navigation arrows, pagination dots
 */
export default function ToolSlider({ tools }) {
  return (
    <div className="tool-slider-container relative px-4 md:px-8">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        speed={800}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="pb-16"
      >
        {tools.map((tool, index) => (
          <SwiperSlide key={index}>
            <ToolSlideCard tool={tool} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows */}
      <button
        className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-primary hover:bg-primary-hover rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
        aria-label="Previous slide"
      >
        <svg
          className="w-6 h-6 text-white group-hover:scale-110 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-primary hover:bg-primary-hover rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
        aria-label="Next slide"
      >
        <svg
          className="w-6 h-6 text-white group-hover:scale-110 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      <style jsx global>{`
        .swiper-pagination {
          bottom: 0 !important;
        }

        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: var(--border);
          opacity: 0.5;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          background: var(--primary);
          opacity: 1;
          width: 30px;
          border-radius: 5px;
        }

        .swiper-button-prev-custom:hover,
        .swiper-button-next-custom:hover {
          transform: translateY(-50%) scale(1.1);
        }

        @media (max-width: 768px) {
          .swiper-button-prev-custom,
          .swiper-button-next-custom {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </div>
  )
}
