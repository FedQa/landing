import world from './../../shared/assets/world.svg'
import check from './../../shared/assets/check.svg'
import friends from './../../shared/assets/Friends.svg'
import Logo from "../../shared/components/Logo/Logo";
import './Footer.css'
import DownloadButton from "../../shared/components/DownloadButton/DownloadButton";


function Footer() {
    return (
        <div className="footer">
            <div className="footer__wraper">
                <div className="footer__left">
                    <div className="footer__title">
                        <Logo text="eCards" className="footer__logo" />
                    </div>

                    <div className="footer__list">
                        <div className="footer__element">
                            <img src={world} className="footer__img" />
                            <p className="footer__text">
                                Гарантированное улучшение словарного запаса за 30 дней
                            </p>
                        </div>
                        <div className="footer__element">
                            <img src={friends} className="footer__img" />
                            <p className="footer__text">
                                Учите язык с друзьями
                            </p>
                        </div>
                        <div className="footer__element">
                            <img src={check} className="footer__img" />
                            <p className="footer__text">
                                Персонализированные уроки на основе вашего уровня и целей
                            </p>
                        </div>
                    </div>
                </div>

                <div className="footer__right">
                    <div className="footer__rating">

                    </div>

                    <div className="footer__buttons">
                        <DownloadButton type="google"/>
                        <DownloadButton type="appStore"/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer;