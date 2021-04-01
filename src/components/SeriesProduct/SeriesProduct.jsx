import { useParams } from 'react-router-dom'
import './SeriesProduct.scss'
import Slider from '../SeriesSlider/SeriesSlider'

function SeriesProduct() {
    let { id } = useParams()

    console.log(id)

    return (
        <section className="series-product">
            <div className="series-product__information">
                <div className="series-product__title">
                    <h2>STREETSTER NATHAN</h2>
                </div>
                <div className="series-product__price">
                    <h3>12000 ₴</h3>
                </div>
                <div className="series-product__descrip">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
                    <p>
                        Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </p>
                </div>
                <div className="series-product__options">
                    <p>Доступно в цветах:</p>
                    <div className="series-product__options-container">
                        <div>
                            <span></span>
                        </div>

                        <div>
                            <span></span>
                        </div>

                        <div>
                            <span></span>
                        </div>

                    </div>
                </div>
                <div className="series-product__button">
                    <button>
                        ПОДРОБНЕЕ
                    </button>
                </div>
            </div>
            <div className="series-product__slider">
                <Slider />
            </div>
        </section>
    )
}

export default SeriesProduct