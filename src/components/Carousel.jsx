import Slider from "react-slick/dist/react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselCard from "./CarouselCard.jsx";

const pictures = [
  {
    imageRoute: "/carousel-imgs/cp-1.webp",
    alt: "Photo by Hominum",
  },
  {
    imageRoute: "/carousel-imgs/cp-2.webp",
    alt: "Photo by Hominum",
  },
  {
    imageRoute: "/carousel-imgs/cp-3.webp",
    alt: "Photo by Hominum",
  },
  {
    imageRoute: "/carousel-imgs/cp-4.webp",
    alt: "Photo by Hominum",
  },
  {
    imageRoute: "/carousel-imgs/cp-5.webp",
    alt: "Photo by Hominum",
  },
  {
    imageRoute: "/carousel-imgs/cp-6.webp",
    alt: "Photo by Hominum",
  },
  {
    imageRoute: "/carousel-imgs/cp-7.webp",
    alt: "Photo by Hominum",
  },
  {
    imageRoute: "/carousel-imgs/cp-8.webp",
    alt: "Photo by Hominum",
  },
  {
    imageRoute: "/carousel-imgs/cp-9.webp",
    alt: "Photo by Hominum",
  },
];

export default function Carousel() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          speed: 500,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          speed: 400,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <section id="testimonies">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
          Nuestro trabajo
        </h2>
        <p className="mt-4 text-md md:text-lg text-gray-600 max-w-2xl mx-auto">
          Conoce nuestros talleres y actividades
        </p>
      </div>
      <div className="w-full h-full mx-auto">
        <div className="">
          <Slider {...settings}>
            {pictures?.map((item, index) => (
              <CarouselCard
                key={index}
                route={item.imageRoute}
                alt={item.alt}
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
