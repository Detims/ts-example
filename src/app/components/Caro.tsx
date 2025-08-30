'use client'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from "next/image";
import { assets } from "../assets/assets";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const images : Array<string> = ["tetParade", "tetParade2", "expo"]

export default function Caro(this: any): any {
    
    return (
      <div className='mt-24'>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={false}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType="desktop"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          
          {images.map((item, index) => {
            return(
              <div
                className='py-12 px-12 mt-16 relative flex flex-row items-center justify-center gap-8'
                key={index}
              >
                <Image src={assets[item]} alt={item}/>
                <h1 className='text-black'>This is text on a screen.</h1>
              </div>
            )
          })}
          {/* <div className='py-12 px-12 mt-16 relative flex flex-row items-center justify-center gap-12'>
            <Image src={assets["tetParade"]} alt="" />
          </div>
          <Image src={assets["lunarNight"]} alt="" />
          <Image src={assets["tetParade"]} alt="" />
          <Image src={assets["tetParade"]} alt="" /> */}
        </Carousel>
      </div>
    );
}