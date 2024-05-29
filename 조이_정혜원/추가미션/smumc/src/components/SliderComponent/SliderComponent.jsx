import React from "react";
import Slider from "react-slick";

const SliderComponent = ({ children, dots }) => {
  var settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: dots,
    arrow: false,
    infinite: true,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return <Slider {...settings}>{children}</Slider>;
};

export default SliderComponent;
