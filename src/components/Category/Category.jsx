import './Category.scss'
import Carousel from '../Carousel/Carousel'
import Chosen from '../Сhosen/Сhosen'
import Subscribe from '../Subscribe/Subscribe'

function Category() {
    return (
        <section className="category">
            <div className="container">
                
                <div className="category__title">
                    <h1>Категории</h1>
                </div>

            </div>

            <Carousel />
    
            <Chosen />
            
            <Subscribe />
        </section>
    )
}

export  default Category