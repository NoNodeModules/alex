
function CarouselCard(props) {
    return (
        <div className="slider-item-custom">
            <img src={props.src} alt="carousel_image"/>
            <div className="slider-item-bycicle">
                <img src={props.src_bike} alt="bycicle"/>
                <h2>{props.descrip}</h2>
            </div>
        </div>
    )
}

export default CarouselCard