import Image from "next/image";
import slider1 from "../../public/images/new/slider-1.svg";
import slider2 from "../../public/images/new/slider-2.svg";
import slider3 from "../../public/images/new/slider-3.svg";
import slider4 from "../../public/images/new/slider-4.svg";
import slider5 from "../../public/images/new/slider-5.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export const New = () => {
  const slides = [
    { id: 1, src: slider1, alt: "slide-1" },
    { id: 2, src: slider2, alt: "slide-2" },
    { id: 3, src: slider3, alt: "slide-3" },
    { id: 4, src: slider4, alt: "slide-4" },
    { id: 5, src: slider5, alt: "slide-5" },
  ];

  return (
    <section
      id="new"
      className="flex flex-col items-center justify-center mt-[280px]"
    >
      <div className="relative flex flex-col items-center justify-center">
        <h1 className="uppercase text-[50px] tracking-[0.5em] leading-[60px] font-inria text-primary text-center w-[160px]">
          New
        </h1>
        <div className="w-[82px] h-[1px] bg-secondary mt-[10px] mb-[110px]" />

        <div className="absolute left-[270px] bottom-[40px] w-[300px] h-[300px] bg-tertiary rounded-full" />
        <div className="absolute left-[450px] bottom-[10px] w-[150px] h-[150px] bg-secondary rounded-full" />
        <div className="absolute left-[500px] bottom-[120px] w-[200px] h-[200px] bg-primary rounded-full" />
      </div>

      <div className="w-full h-full flex items-center justify-center">
        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet custom-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          autoplay={{ delay: 3000 }}
          speed={1000}
          loop={true}
          className="w-full h-full max-w-[1392px]"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <Image
                src={slide.src}
                alt={slide.alt}
                width={1392}
                height={876}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .custom-bullet {
          width: 25px;
          height: 25px;
          background-color: var(--pagination-color);
          border: 2px solid var(--gold-color);
          opacity: 1;
          transition: background-color 0.3s;
          margin-right: 40px;
        }

        .custom-bullet:last-child {
          margin-right: 0;
        }

        .swiper-pagination-bullet-active {
          background-color: var(--active-color);
          border: 2px solid var(--gold-color);
        }
      `}</style>
    </section>
  );
};
