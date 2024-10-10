import main_phone from '../../shared/assets/main_phone.svg'
import gradient from '../../shared/assets/gradient.svg'
import star from '../../shared/assets/star.svg'
import Logo from "../../shared/components/Logo/Logo";
import DownloadButton from "../../shared/components/DownloadButton/DownloadButton";
import Counter from "../../shared/components/Counter/Counter";
import './Main.css';


function Main() {
    return (<section className="main">
        <div className="main__wrapper">
            <header className="header">
                <div className="header__title">
                    <Logo text="eCards" />
                </div>

            </header>

            <div className="content">
                <div className="left">
                    <div className="content__title">
                        <h2>Осваивай новые знания легко и быстро</h2>
                    </div>
                    <div className="downloadButtons">
                        <DownloadButton type={"google"} isDefault className="downloadButton" />
                        <DownloadButton type={"appStore"} isDefault className="downloadButton" />
                    </div>

                    <div className="wrapper__counter">
                        <Counter text="1" label="слов сгенерировано"/>
                    </div>
                </div>

                <div className="right">


                    <div className="img">
                        <div className="img__wrapper">
                            <img className="main_image" src={main_phone}/>
                            <img className="gradient" src={gradient}/>


                            <div className="star" id="star__top">
                                <img src={star} height={65}/>
                            </div>

                            <div className="star" id="star__center">
                                <img src={star} height={40}/>
                            </div>

                            <div className="star" id="star__bottom">
                                <img src={star} height={55}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>)
}

export default Main;