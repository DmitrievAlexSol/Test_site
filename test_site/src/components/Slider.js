import { Carousel } from "react-bootstrap";
import slide_1 from "../images/slide_1.jpg";
import slide_2 from "../images/slide_2.jpg"
import slide_3 from "../images/slide_3.jpg"
import s from "./slider.module.css"

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item className={s.slider_image}>
        <img  src ={slide_1} className="d-block w-100" alt="First slide" />
        <Carousel.Caption>
          <h3>Web blog</h3>
          <p>Some description</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={s.slider_image}>
        <img  src={slide_2} className="d-block w-100" alt="Second slide" />
        <Carousel.Caption>
          <h3>Web  blog</h3>
          <p>Some description</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={s.slider_image}>
        <img src={slide_3} className="d-block w-100" alt="Third slide" />
        <Carousel.Caption>
          <h3>Web  blog</h3>
          <p>Some description</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
