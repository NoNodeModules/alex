import { useState } from 'react'
import './SeriesSlider.scss'
import image from '../../assets/series_offroad_image.png'

const images = [
    <img key={image} src={image} alt="src" />,
    <img key={image} src={image} alt="src" />,
    <img key={image} src={image} alt="src" />,
    <img key={image} src={image} alt="src" />,
    <img key={image} src={image} alt="src" />,
    <img key={image} src={image} alt="src" />
]

function SeriesSlider() {
    const [activeIndex, setActiveIndex] = useState(0) 
    let opacityValNext = ''
    let opacityValPrev = ''
    
    const nextSlide = (event) => {
        event.target.disabled = true
        setActiveIndex((current) => {
            return current === images.length - 1 ? current : current + 1
        })
        setTimeout(() => {
            event.target.disabled = false
        }, 600)
        
    }

    const prevSlide = (event) => {
        event.target.disabled = true
        setActiveIndex((current) => {
            return current === 0 ? current : current - 1
        })
        setTimeout(() => {
            event.target.disabled = false
        }, 600)
    }

    if(activeIndex === images.length - 1) {
        opacityValNext = '0.5'
    } else if(activeIndex === 0) {
        opacityValPrev = '0.5'
    } else {
        opacityValPrev = '1'
        opacityValNext = '1'
    }

    let prevImageIndex = activeIndex === 0 ? '' : activeIndex - 1
    let nextImageIndex = activeIndex === images.length - 1 ? '' : activeIndex + 1

    return (
        <div className="slider-cust">

            <div 
                className="slider-image slider-image-prev"
                key={prevImageIndex}
            >
                {images[prevImageIndex]}
            </div>

            <div
                className="slider-image"
                key={activeIndex}
            >
                {images[activeIndex]}
            </div>

            <div
                className="slider-image slider-image-next"
                key={nextImageIndex}
            >
                {images[nextImageIndex]}
            </div>

            <div className="controlls">

                <button onClick={prevSlide} style={{opacity: opacityValPrev}}>
                   
                </button>
                <button onClick={nextSlide} style={{opacity: opacityValNext}}>
                    
                </button>

            </div>

            <div className="navigation-items">
                {images.map((key, i) => {
                    return <span 
                                key={i}
                                className={activeIndex === i ? 'slider-nav slider-nav-active' : 'slider-nav'}    
                            >
                            </span>
                })}
            </div>
        </div>
    )
}

export default SeriesSlider