import main_phone from '../../shared/assets/main_phone.svg'
import gradeint from '../../shared/assets/gradient.svg'
import star from '../../shared/assets/star.svg'
import Logo from "../../shared/components/Logo/Logo";
import DownloadButton from "../../shared/components/DownloadButton/DownloadButton";
import Counter from "../../shared/components/Counter/Counter";
import './Main.css';


function Main() {
    return (
        <div className="main">
            <div className="main__wrapper">
                <header className="header">
                    <div className="header__title">
                        <Logo text="eCards"/>
                    </div>

                    <div className="header__counter">
                        <Counter text="100000" label="слов сгенерировано"/>
                    </div>
                </header>

                <div className="content">
                    <div className="left">
                        <div className="title">
                            <h2>Осваивай новые знания легко и быстро</h2>
                        </div>
                        <div className="downloadButtons">
                            <DownloadButton type={"google"}/>
                            <DownloadButton type={"appStore"}/>
                        </div>
                    </div>

                    <div className="right">
                        <div className="star">
                            <img src={star} height={75}/>
                        </div>

                        <div className="img">
                            <img className="main_image" src={main_phone} />
                            <img className="gradient" src={gradeint}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;