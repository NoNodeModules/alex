import './SeriesContent.scss'
import img from '../../assets/series-main_image.png'


function SeriesContent() {
    return (
        <section className="series">
            <div className="series__background">

            </div>
            <div className="container">
                <div className="series-main__image">
                        <img src={img} alt="series_image"/>
                </div>
                <div className="series-main__content">
                    <h1>OFFROAD SERIES</h1>
                    <p>
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default SeriesContent