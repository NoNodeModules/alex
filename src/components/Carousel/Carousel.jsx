import React, { useState, useEffect } from "react"
import { Carousel } from 'react-responsive-carousel';
import Card from './CarouselCard'

import "react-responsive-carousel/lib/styles/carousel.min.css"
import './Carousel.scss'

import carousel1 from '../../assets/carousel_1.png'
import carousel2 from '../../assets/carousel_2.png'
import carousel3 from '../../assets/carousel_3.png'

import offroad from '../../assets/series_offroad_image.png'
import road from '../../assets/series_road_image.png'
import street from '../../assets/series_street_image.png'

const images = [
    {back: carousel3, bycicle_src: offroad, descrip: 'Offroad series'},
    {back: carousel1, bycicle_src: road, descrip: 'Road series'},
    {back: carousel2, bycicle_src: street, descrip: 'Street series'}
]

function CarouselComponent() {
    const [height, setHeight] = useState(0)

        useEffect(() => {
            window.addEventListener('resize', setHeight(window.innerWidth))
        }, [height]);

    if(height > 1128) {
        return (
            <Carousel
                showIndicators={false}
                showArrows={true}
                showStatus={false}
                centerMode={true}
                showThumbs={false}
                selectedItem={1}
                autoPlay={false}
                preventMovementUntilSwipeScrollTolerance={false}
                centerSlidePercentage={46}
                swipeable={height > 900 ? true : false}
                className="carousel"
            >
                {images.map(key => <Card key={key} src_bike={key.bycicle_src} descrip={key.descrip} src={key.back}/>)}
                
            </Carousel>
        )
    } else {
        
        return (
            <Carousel
                showIndicators={false}
                showArrows={true}
                showStatus={false}
                centerMode={false}
                showThumbs={false}
                selectedItem={0}
                autoPlay={false}
                preventMovementUntilSwipeScrollTolerance={false}
                swipeable={true}
                className="carousel"
            >
                {images.map(key => <Card key={key} src_bike={key.bycicle_src} descrip={key.descrip} src={key.back}/>)}
            </Carousel>
        )
    }
}
export default CarouselComponent