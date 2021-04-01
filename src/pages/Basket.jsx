import './Page.scss'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import BasketContent from '../components/BasketContent/BasketContent'
import basket from '../assets/basket_black.svg'
import menu from '../assets/menu_black.svg'
function Basket() {
    return (
        <section className="page-style">
            <Header basket={basket} menu={menu} mixBlendMode={'difference'} inputBackground="#F2F2F2"/>
            <BasketContent /> 
            <Footer />
        </section>
    )
}

export default Basket