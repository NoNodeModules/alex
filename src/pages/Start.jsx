import Header from '../components/Header/Header'
import NathanContent from '../components/NathanContent/NathanContent'
import Category from '../components/Category/Category'
import StreetsterDescrip from '../components/StreetsterDescrip/StreetsterDescrip'
import Footer from '../components/Footer/Footer'
import './Page.scss'
import basket from '../assets/basket.svg'
import menu from '../assets/menu.svg'
function Nathan() {
    return (
        <section className="page-style">
            <Header basket={basket} menu={menu}/>
            <NathanContent />
            <Category />
            <StreetsterDescrip />
            <Footer />
        </section>
    )
}

export default Nathan