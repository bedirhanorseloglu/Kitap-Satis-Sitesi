import "./slider.css";
import FirstBook from "../../images/book1.png";
import SecondBook from "../../images/book2.png";
import ThirdBook from "../../images/book3.png";
import { useState } from "react";
import Arrow from "./Arrow";

const Slider = () => 
{
 
  const [slideIndex, setSlideIndex] = useState(0);

// Slider'daki kaydırma işlemlerini yöneten Handle Click
const handleClick = (direction) => 
{
  if (direction === "left") 
  {
    // bir önceki slide'a geç
    setSlideIndex(slideIndex - 1);
  } 

  else 
  {
    // bir sonraki slide'a geç
    setSlideIndex(slideIndex + 1);
  }
};



  return (
    <div className="slider-container">
      {slideIndex !== 0 && (
        <Arrow  handleClick={() => handleClick("left")}  className="bi bi-chevron-double-left arrow-left"/>
      )}
      <div
        style={{ transform: `translateX(${slideIndex * -100}vw)` }}
        className="slider-wrapper"
      >
        <div className="slide first-slide">
          <div className="slide-image-wrapper">
            <img src={FirstBook} alt="" />
          </div>
          <div className="slide-info-wrapper">
            <h1 className="slide-info-title">Mustafa Kemal Atatürk</h1>
            <h1 className="slide-info-desc">Ne mutlu Türk'üm diyene</h1>
           
          </div>
        </div>

        <div className="slide second-slide">
          <div className="slide-image-wrapper">
            <img src={SecondBook} alt="" />
          </div>
          <div className="slide-info-wrapper">
            <h1 className="slide-info-title">Fyodor Dostoyevski - Suç ve Ceza</h1>
            <h1 className="slide-info-desc">İnsanın ruhunu yücelten şey, her zaman ve her yerde sevgidir.</h1>
            
          </div>
        </div>
        
        <div className="slide third-slide">
          <div className="slide-image-wrapper">
            <img src={ThirdBook} alt="" />
          </div>
          <div className="slide-info-wrapper">
            <h1 className="slide-info-title">Jane Austen - Gurur ve Önyargı</h1>
            <h1 className="slide-info-desc">Aklın yolu birdir; ama kimse o yolda yalnız yürümek istemez.</h1>
            
          </div>
        </div>
      </div>
      {slideIndex !== 2 && (
        <Arrow  handleClick={() => handleClick("right")}  className="bi bi-chevron-double-right arrow-right"/>
      )}
    </div>
  );
};

export default Slider;
