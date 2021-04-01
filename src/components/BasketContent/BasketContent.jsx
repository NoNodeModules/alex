import './BasketContent.scss'
import img from '../../assets/series_offroad_image.png'
const products = [
    {id: 1, img: img, title: 'bicycle', count: 1, price: 4090},
    {id: 2, img: img, title: 'bicycle', count: 4, price: 2740},
    {id: 3, img: img, title: 'bicycle', count: 2, price: 4500},
    {id: 4, img: img, title: 'bicycle', count: 1, price: 3320}
]

function BasketContent() {
    return (
        <section className="basket-content">
            <div className="container">
                <div className="basket-content__title"><h1>Оформление заказа</h1></div>
                <div className="basket-content__left">
                    <div className="basket-content__products">
                        {products.map(key => 
                        <div key={key.id} className="basket-content__products-container">
                            <div className="basket-content__img">
                                <img src={key.img} alt="img"/>
                            </div>
                            <div className="basket-content__product-title">
                                <h3>{key.title}</h3>
                            </div>
                            <div className="basket-content__count">
                                {key.count}
                            </div>
                            <div className="basket-content__price">
                                <p>{key.price} ₴</p>
                            </div>
                        </div>)}
                    </div>
                    <div className="basket-content__info">
                        <h3>Итого:</h3> <p>12000 ₴</p>
                    </div>
                    <div className="basket-content__options">
                        <div>
                            <button className="btn-back-products">
                                ПРОДОЛЖИТЬ ПОКУПКИ
                            </button>
                        </div>
                        <div>
                            <button className="btn-bye">
                                ОФОРМИТЬ ЗАКАЗ
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BasketContent