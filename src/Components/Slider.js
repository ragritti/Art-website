import React from "react";
import Cards from "./Cards";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { masterData } from "./Data";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ 
        ...style, 
        display: "block", 
        color: "black",
        right: "-25px" 
      }}
      onClick={onClick}
    >
      <ChevronRight size={20} />
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ 
        ...style, 
        display: "block", 
        color: "black",
        left: "-25px"
      }}
      onClick={onClick}
    >
      <ChevronLeft size={24} />
    </div>
  );
}

export default function Sliderr() {
  const getResponsiveSettings = (dataLength) => ({
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: dataLength > 5,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1536, // 2xl
        settings: {
          slidesToShow: 4,
          arrows: dataLength > 4,
        }
      },
      {
        breakpoint: 1280, // xl
        settings: {
          slidesToShow: 3,
          arrows: dataLength > 3,
        }
      },
      {
        breakpoint: 1024, // lg
        settings: {
          slidesToShow: 2,
          arrows: dataLength > 2,
        }
      },
      {
        breakpoint: 640, // sm
        settings: {
          slidesToShow: 1,
          arrows: dataLength > 1,
          dots: true,
        }
      }
    ]
  });

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-6" id="slider">
      {masterData.categories.map((category) => {
        const settings = getResponsiveSettings(category.data.length);

        return (
          <div key={category.id} className="mb-10">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="hidden sm:block h-0.5 w-8 sm:w-16 bg-gray-400"></div>
              <h1 className="text-center font-normal text-xl sm:text-2xl">{category.title}</h1>
              <div className="hidden sm:block h-0.5 w-8 sm:w-16 bg-gray-400"></div>
            </div>
            
            <div className="max-w-[1400px] mx-auto">
              <Slider {...settings}>
                {category.data.map((item) => (
                  <div key={item.id} className="px-2">
                    <Cards
                      image={item.imageUrl}
                      title={item.title}
                      price={item.price}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        );
      })}
    </div>
  );
}