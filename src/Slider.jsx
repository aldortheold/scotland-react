import React, {useState, useEffect, useRef} from "react";

function Slider(props) {

    const btnRefs = [];
    for (let i = 0; i < 4; i++) {
        btnRefs.push(useRef(null))
    }

    const slides = [];
    for (let i = 0; i < 10; i++) {
        slides.push(useRef(null))
    }

    const intervalId = useRef(null);
    let slideIndex = 0;

    const images = [];
    for (let i = 0; i < 10; i++) {
        images.push(<img src={`/img/${props.index}_${i + 1}.jpg`} ref={slides[i]} key={props.index * 10 + i}/>);
    }

    useEffect(initializeSlider);

    function initializeSlider() {
        if (slides.length > 0) {
            slides[slideIndex].current.classList.add("displaySlide");
            intervalId.current = setInterval(nextSlide, 10_000);
        }
        return () => clearInterval(intervalId.current)
    }

    function showSlide(index) {
        if (index >= slides.length) {
            slideIndex = 0;
        }
        else if (index < 0) {
            slideIndex = slides.length - 1;
        }
    
        slides.forEach(slide => {
            slide.current.classList.remove("displaySlide");
        });
        slides[slideIndex].current.classList.add("displaySlide");
    }
    
    function previousSlide() {
        clearInterval(intervalId.current);
        slideIndex--;
        showSlide(slideIndex);
    }
    
    function nextSlide() {
        slideIndex++;
        showSlide(slideIndex);
    }

    return (
        <div className="slider">
            <div className="slides">
                {images}
            </div>
            <button className="previousImg" onClick={previousSlide} ref={btnRefs[0]}>&#10094;</button>
            <button className="nextImg" onClick={nextSlide} ref={btnRefs[1]}>&#10095;</button>
        </div>
    )
}

export default Slider