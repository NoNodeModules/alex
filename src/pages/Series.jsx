import Header from '../components/Header/Header'
import SeriesContent from '../components/SeriesContent/SeriesContent'
import SeriesProduct from '../components/SeriesProduct/SeriesProduct'
import Footer from '../components/Footer/Footer'
import './Page.scss'
import basket from '../assets/basket.svg'
import menu from '../assets/menu.svg'
function Series() {
    return (
        <section className="page-style">
            <Header  basket={basket} menu={menu} />
            <SeriesContent />
            <SeriesProduct />
            <SeriesProduct />
            <SeriesProduct />
            <Footer />
        </section>
    )
}

export default Series