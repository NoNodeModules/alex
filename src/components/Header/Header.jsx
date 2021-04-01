import { useState } from 'react'
import './Header.scss'

import SideBar from '../SideBar/SideBar'
import logo from '../../assets/logo.svg'
import { useHistory } from 'react-router'

function Header(props) {
    const [isOpenSide, setIsOpenSide] = useState(false)
    const history = useHistory()

    const showSideBar = () => {
        setIsOpenSide(!isOpenSide)
        
    }



    return (
        <header className="header">
            <SideBar isOpenSide={isOpenSide} setIsOpenSide={setIsOpenSide}/>
            <div className="container">
                <div className="header__logo">
                    <img src={logo} alt='image_logo' style={{mixBlendMode: props.mixBlendMode}} onClick={() => history.push('/start')}/>
                </div>
                
                <div className="header__search">
                    <input placeholder="Search" style={{backgroundColor: props.inputBackground}}/>
                </div>
                
                <div className={isOpenSide ? "header__options header__options_active" : "header__options"} >
                    <ul>
                        <li className="header__basket">
                            <button>
                                <img src={props.basket} alt="basket" onClick={() => history.push('/basket')}/>
                            </button>
                        </li>
                        <li className="header__menu">
                            <button onClick={showSideBar}>
                                <img src={props.menu} alt="menu" />
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
} 

export default Header