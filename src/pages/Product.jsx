import Header from '../components/Header/Header'

import ProductContent from '../components/ProductContent/ProductContent'
import Footer from '../components/Footer/Footer'
import './Page.scss'

import basket from '../assets/basket_black.svg'
import menu from '../assets/menu_black.svg'

function Product() {
    return (
        <section className="page-style">
            <Header basket={basket} menu={menu} mixBlendMode={'difference'}/>
            <ProductContent />
            <Footer />
        </section>
    )
}

export default Product 