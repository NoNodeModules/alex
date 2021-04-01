import './SideBar.scss'
import { NavLink, useHistory } from 'react-router-dom'
import basket from '../../assets/basket_black.svg'
import close from '../../assets/close.svg'
import instagram from '../../assets/instagram.svg'
import telegram from '../../assets/telegram.svg'
import facebook from '../../assets/facebook.svg'
import vk from '../../assets/vk.svg'

function SideBar(props) {
    const history = useHistory()
    const funcSetIsOpenSide = () => {
        props.setIsOpenSide(false)
    }
    return (
        <section className={props.isOpenSide ? "sidebar-background sidebar-background_active" : "sidebar-background"} >

            <div className={props.isOpenSide ? "sidebar sidebar_active" : "sidebar"}>
                <div className={props.isOpenSide ? "sidebar__container sidebar__container_active" : "sidebar__container"} >
                    <header className="sidebar__header">
                        <div>
                            <p>RU&nbsp;</p>
                            <span>/</span>
                            <p>&nbsp;EN</p>
                        </div>
                            
                        <div>
                            <button className="sidebar__basket">
                                <img src={basket} alt="basket" onClick={() => history.push('/basket')}/>
                            </button>
                        </div>
                        <div>
                            <button onClick={funcSetIsOpenSide} className="sidebar__menu">
                                <img src={close} width="28" alt="close button"/>
                            </button>
                        </div>      
                    </header>
                    <div className="sidebar__content">
                        <ul className="sidebar__links">
                            <li><NavLink to="#">Road series</NavLink> </li>
                            <li><NavLink to="#">Street series</NavLink> </li>
                            <li><NavLink to="#">Mountain series</NavLink> </li>
                        </ul>
                        <ul className="sidebar__information">
                            <li> <NavLink to="#"> Новости </NavLink> </li>
                            <li> <NavLink to="#"> О нас </NavLink> </li>
                            <li> <NavLink to="#"> Контакты </NavLink> </li>
                        </ul>
                        <ul className="sidebar__messengers">
                            <li><NavLink to="#"><img src={instagram} alt="instagram" width="28" /></NavLink></li>
                            <li><NavLink to="#"><img src={facebook} alt="facebook" width="28" /></NavLink></li>
                            <li><NavLink to="#"><img src={telegram} alt="telegram" width="28" /></NavLink></li>
                            <li><NavLink to="#"><img src={vk} alt="vk" width="28" /></NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default SideBar
