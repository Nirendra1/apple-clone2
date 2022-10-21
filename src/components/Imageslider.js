
import React from "react";
import {

    faArrowAltCircleLeft,
  
    faArrowAltCircleRight,
  
    faCirclePlay,
  
    faPauseCircle,
  
    faPlay,
  
    faPlayCircle,
  
  } from "@fortawesome/free-solid-svg-icons";
  
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  
//   import React, { useState } from "react";
  
  import { toast } from "react-toastify";
  
  import SliderData from "./SliderData";

  
//   import "./Layout.css";
  
  import { useEffect ,useState} from "react";
  
  const Imageslider = () => {
  
    const [activeIndex, setActiveIndex] = useState(0);
  
    const [toggle, setToggle] = useState(false);
  
    const len = SliderData?.length - 1;
  
    console.log(len, "lenn");
  
   
  
    const nextSlide = () => {
  
     setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
  
    };
  
    const prevSlide = () => {
  
      setActiveIndex(activeIndex < 1 ? len : activeIndex - 1);
  
    };
  
    const dotClick = (index) => {
  
      if (index != -1) {
  
        setActiveIndex(index);
  
      }
  
    };
  
    function playSlider() {
  
            for (let i = 0; i <len; i++) {
  
                setToggle(!toggle)
  
                setTimeout(() => {
  
                    setActiveIndex( i + 1);
  
                    if(i=== len-1){
  
                      setToggle(false)
  
                  }
  
                  }, i * 2000);
  
              }
  
          }
  
   
  
  //       useEffect(()=>{
  
  //       const slideInterval = setInterval(()=>{
  
  //           setActiveIndex(activeIndex===len ? 0: activeIndex + 1)
  
  //       },5000)
  
  //       return ()=> clearInterval(slideInterval)
  
  //   },[activeIndex])
  
   
  
    console.log(activeIndex, "active index");
  
    const arrowBtn = (
  
      <div className="arro">
  
        <span className="arrowBtn prev" onClick={prevSlide}>
  
          {<FontAwesomeIcon icon={faArrowAltCircleLeft} />}
  
        </span>
  
        <span className="arrowBtn next" onClick={nextSlide}>
  
          {<FontAwesomeIcon icon={faArrowAltCircleRight} />}
  
        </span>
  
      </div>
  
    );
  
   
  
    const Dots = (
  
      <div className="all-dots">
  
        {SliderData?.map((ele, index) => {
  
          return (
  
            <span
  
              key={index}
  
              className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
  
              onClick={() => dotClick(index)}
  
            ></span>
  
          );
  
        })}
  
      </div>
  
    );
  
   
  
    const SliderContent = (
  
      <div className="slider">
  
        {SliderData?.map((slide, index) => {
  
          return (
  
            <div
  
              key={index}
  
              className={index === activeIndex ? "slides active" : "inactive"}
  
            >
  
              <div className="slider-img">
  
                <img src={slide?.imgUrl} alt={slide.title} />
  
              </div>
  
              <div className="caption">
  
   
  
              <h2>{slide.title}</h2>
  
              <p>{slide.description}</p>
  
              </div>
  
            </div>
  
          );
  
        })}
  
      </div>
  
    );
  
    const playButton = (
  
      <div
  
        className="play-slider d-flex justify-content-end"
  
        onClick={()=>toggle===false && playSlider()}
  
      >
  
        {!toggle ? (
  
          <FontAwesomeIcon icon={faCirclePlay} className="fs-4 text-white" />
  
        ) : (
  
          <FontAwesomeIcon icon={faPauseCircle} className="fs-4 text-white" />
  
        )}
  
      </div>
  
    );
  
   
  
    return (
  
      <>
  
        {SliderContent}
  
        {/* {arrowBtn} */}
  
        {Dots}
  
        {playButton}
  
      </>
  
    );
  
  };
  
   
  
  export default Imageslider;
  
   