import './Footer.scss'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'

const links = [
    <svg key={1} id="Bold" fill="#FFF" enableBackground="new 0 0 24 24" height="26" viewBox="0 0 24 24" width="26" xmlns="http://www.w3.org/2000/svg">
        <path  d="m12.004 5.838c-3.403 0-6.158 2.758-6.158 6.158 0 3.403 2.758 6.158 6.158 6.158 3.403 0 6.158-2.758 6.158-6.158 0-3.403-2.758-6.158-6.158-6.158zm0 10.155c-2.209 0-3.997-1.789-3.997-3.997s1.789-3.997 3.997-3.997 3.997 1.789 3.997 3.997c.001 2.208-1.788 3.997-3.997 3.997z"/>
        <path  d="m16.948.076c-2.208-.103-7.677-.098-9.887 0-1.942.091-3.655.56-5.036 1.941-2.308 2.308-2.013 5.418-2.013 9.979 0 4.668-.26 7.706 2.013 9.979 2.317 2.316 5.472 2.013 9.979 2.013 4.624 0 6.22.003 7.855-.63 2.223-.863 3.901-2.85 4.065-6.419.104-2.209.098-7.677 0-9.887-.198-4.213-2.459-6.768-6.976-6.976zm3.495 20.372c-1.513 1.513-3.612 1.378-8.468 1.378-5 0-7.005.074-8.468-1.393-1.685-1.677-1.38-4.37-1.38-8.453 0-5.525-.567-9.504 4.978-9.788 1.274-.045 1.649-.06 4.856-.06l.045.03c5.329 0 9.51-.558 9.761 4.986.057 1.265.07 1.645.07 4.847-.001 4.942.093 6.959-1.394 8.453z"/>
        <circle cx="18.406" cy="5.595" r="1.439"/>
    </svg>,
    <svg key={2} id="Bold" fill="#FFF" enableBackground="new 0 0 24 24" height="26" viewBox="0 0 24 24" width="26" xmlns="http://www.w3.org/2000/svg">
        <path d="m9.417 15.181-.397 5.584c.568 0 .814-.244 1.109-.537l2.663-2.545 5.518 4.041c1.012.564 1.725.267 1.998-.931l3.622-16.972.001-.001c.321-1.496-.541-2.081-1.527-1.714l-21.29 8.151c-1.453.564-1.431 1.374-.247 1.741l5.443 1.693 12.643-7.911c.595-.394 1.136-.176.691.218z"/>
    </svg>,
    <svg key={3} id="Bold" fill="#FFF" enableBackground="new 0 0 24 24" height="26" viewBox="0 0 24 24" width="26" xmlns="http://www.w3.org/2000/svg">
        <path d="m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-3.159 0-5.323 1.987-5.323 5.639v3.361h-3.486v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877v-2.939c.001-1.233.333-2.077 2.051-2.077z"/>
    </svg>,
    <svg key={4} id="Bold" fill="#FFF" enableBackground="new 0 0 24 24" height="30" viewBox="0 0 24 24" width="30" xmlns="http://www.w3.org/2000/svg">
        <path d="m19.915 13.028c-.388-.49-.277-.708 0-1.146.005-.005 3.208-4.431 3.538-5.932l.002-.001c.164-.547 0-.949-.793-.949h-2.624c-.668 0-.976.345-1.141.731 0 0-1.336 3.198-3.226 5.271-.61.599-.892.791-1.225.791-.164 0-.419-.192-.419-.739v-5.105c0-.656-.187-.949-.74-.949h-4.126c-.419 0-.668.306-.668.591 0 .622.945.765 1.043 2.515v3.797c0 .832-.151.985-.486.985-.892 0-3.057-3.211-4.34-6.886-.259-.713-.512-1.001-1.185-1.001h-2.625c-.749 0-.9.345-.9.731 0 .682.892 4.073 4.148 8.553 2.17 3.058 5.226 4.715 8.006 4.715 1.671 0 1.875-.368 1.875-1.001 0-2.922-.151-3.198.686-3.198.388 0 1.056.192 2.616 1.667 1.783 1.749 2.076 2.532 3.074 2.532h2.624c.748 0 1.127-.368.909-1.094-.499-1.527-3.871-4.668-4.023-4.878z"/>
    </svg>  
]

const categories = [
    'ROAD SERIES',
    'STREET SERIES',
    'MOUNTAIN SERIES'
]

const inform = [
    'О нас',
    'Контакты'
]
function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__logo">
                    <img src={logo} alt="logo"/>
                    <h2>© STREETSTER — Все права защищены </h2>
                </div>

                 <div className="footer__categories">
                    <p>Категории</p>
                    {categories.map(key => <span key={key}><NavLink to='/'>{key}</NavLink></span>)}
                </div>

                <div className="footer__information">
                    <p>Информация</p>
                    {inform.map(key => <span key={key}><NavLink to='/'>{key}</NavLink></span>)}
                </div>

                <div className="footer__categories">
                    <p>Категории</p>
                    {categories.map(key => <span key={key}><NavLink to='/'>{key}</NavLink></span>)}
                </div>

                <div className="footer__information">
                    <p>Информация</p>
                    {inform.map(key => <span key={key}><NavLink  to='/'>{key}</NavLink></span>)}
                </div>
                <div className="footer__links">
                    {links.map((key, i) => 
                        {
                            return (
                                <NavLink key={i} to='/'>
                                    {key}
                                </NavLink>
                            )
                        }
                    )}
                </div>
            </div>
        </footer>
    )
}

export default Footer