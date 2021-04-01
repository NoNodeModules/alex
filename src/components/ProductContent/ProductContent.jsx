import '../SeriesProduct/SeriesProduct.scss'
import './ProductContent.scss'

import Slider from '../SeriesSlider/SeriesSlider'
import protect from '../../assets/product_protection_canyon.png'
import helm from '../../assets/product_helm_octane.png'

const colors = [
    '#000',
    '#5A88FF',
    '#FF5A5A'
]

const additionals = [
    {img: helm, title: 'Защита Canyon', price: '500 ₴'},
    {img: protect, title: 'Шлем Octane', price: '500 ₴'},
    {img: protect, title: 'Шлем Octane', price: '500 ₴'}
]

function ProductContent() {
    return (
        <section className="product-content">
            <div className="product-content__slider">
                <Slider />
            </div>
            <div className="product-content__information">
 
                    <div className="series-product__title">
                        <h2>STREETSTER NATHAN</h2>
                    </div>
                    <div className="series-product__price">
                        <h3>12000 ₴</h3>
                    </div>
                    <div className="series-product__options product-content__options">
                        <p>Доступно в цветах:</p>
                        <div className="series-product__options-container">
                            {colors.map((key, i) => {
                                return (
                                    <div 
                                        key={i} 
                                        onMouseEnter={(event) => event.target.style.border = `2px ${key} solid`}
                                        onMouseLeave={event => event.target.style.border = `2px #DBDBDB solid`}
                                    >
                                            
                                    <span style={{backgroundColor: key}}></span></div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="product-content__additionals-title"><h3>Доп. аксессуары</h3></div>
                    <div className="product-content__additionals">
                        
                        {additionals.map((key, i) => {
                            return (
                                <div key={i}>
                                    <img src={key.img} alt="additional"/>
                                    <p>{key.title}</p>
                                    <p>{key.price}</p>
                                </div>
                            )
                        })}
                    </div>
                    
                    <div className="product-content__price">
                        <div>
                            <h3>Итого:</h3>
                        </div>
                        <div>
                            <h3>2500 ₴</h3>
                        </div>
                    </div>
                    <div className="series-product__button product-content__button">
                        <button>
                            ЗАКАЗАТЬ
                        </button>
                    </div>

            </div>
        </section>
    )
}

export default ProductContent