import { useState, useEffect } from "react";
import reviews from "./data";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Slider (){
  const [imageIndex, setImageIndex] = useState(0);
  const { image, name } = reviews[imageIndex];

  const checkImage = (number) => {
    if(number > reviews.length-1){
      return 0
    }
    if(number < 0){
      return reviews.length-1
    }
    return number;
  }
  const nextImage = () =>{
    let newImage = imageIndex + 1;
    setImageIndex(checkImage(newImage));
    clearInterval(timerId);
  }
  const prevImage = () => {
    let newImage = imageIndex - 1;
    setImageIndex(checkImage(newImage));
    clearInterval(timerId);
  };
  const randomImage = () => {
    let anyImage = Math.floor(Math.random() * reviews.length);
    if(anyImage === imageIndex){
      anyImage = imageIndex -1;
    }
    setImageIndex(checkImage(anyImage));
  }
  useEffect(()=>{
    let timerId = setInterval(()=>{nextImage()},3000);
    return () =>{clearInterval(timerId)}
    

  }, [imageIndex]);

  return (
    <section className="slider-section">
      <img src={image} alt={name} />
      <div className="btn-container">
        <button onClick={prevImage} className="prev-btn">
          <FaChevronLeft />
        </button>
        <button onClick={nextImage} className="next-btn">
          <FaChevronRight />
        </button>
      </div>
      <button onClick={randomImage} className="random-btn">random image</button>
    </section>
  );
}

export default Slider