import { NavLink } from 'react-router-dom'
import './Сhosen.scss'
import arrow_right from '../../assets/arrow_right.svg'
import helm from '../../assets/product_helm_octane.png'
import protection from '../../assets/product_protection_canyon.png'
import { useState } from 'react'

const products = [
    {id:1, productSrc: helm, descrip: 'Шлем Octane'},
    {id:2, productSrc: protection, descrip: 'Защита Canyon'},
    {id:3, productSrc: protection, descrip: 'Защита Canyon'},
    {id:4, productSrc: helm, descrip: 'Шлем Octane'}
]

function Сhosen() {
    const [over, setOver] = useState(false)

    const chosenScale = {
        transition: '',
        transform: ''
    }

    if(over) {
        chosenScale.transition = 'all ease-in-out .12s'
        chosenScale.transform = 'scale(1.05)'
    } else {
        chosenScale.transition = 'all ease-in-out .12s'
        chosenScale.transform = ''
    }
    return (
        <section className="chosen">
            <div className="container">
                <div className="chosen__title">
                    <h1>Избранные товары</h1>
                </div>
                <section className="chosen__wrapper">
                    <div className={'chosen__go-to'} style={chosenScale}>
                        <NavLink to="#" onMouseOver={() => setOver(true)} onMouseOut={() => setOver(false)}>
                            <div className="chosen__go-to-back">
                                <div>
                                    <h2>Streetster Bakerstreet</h2>
                                    <p>скорость соедененная с удобством</p>
                                </div>
                                <div>
                                    <img src={arrow_right} alt="arrow_left"/>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <div className="chosen__products">
                        {products.map(key => {
                            return (
                                <NavLink key={key.id} to="/">
                                    <div>
                                        <img src={key.productSrc} alt="product"/>
                                        <h3>{key.descrip}</h3>
                                    </div>
                                </NavLink>
                            )
                        })}
                    </div>
                </section>
            </div>
        </section>
    )
}

export default Сhosen