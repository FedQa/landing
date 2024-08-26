import './Advantages.css'
import {useState} from "react";
import iphone from '../../shared/assets/iphone.svg'
import adv1 from '../../shared/assets/adv_list/adv_1.svg'
import adv2 from '../../shared/assets/adv_list/adv_2.svg'
import adv3 from '../../shared/assets/adv_list/generationView.png'
import adv4 from '../../shared/assets/adv_list/adv_4.png'
import adv5 from '../../shared/assets/adv_list/adv_5.png'
import Iphone from "../../shared/components/Iphone/Iphone";

function Advantages() {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const images = [
        adv1,
        adv2,
        adv3,
        adv4,
        adv5,
    ];

    const handleElementClick = (index) => {
        setSelectedIndex(index);
    }

    return (
        <section className="adv">
            <div className="adv__wrapper">

                <div className="adv__left">
                    <div className="iphone-container">

                        <Iphone className={"iphone__frame"} href={images[selectedIndex]}/>
                        {/*<img src={} alt="Selected" className="adv__img" />*/}
                    </div>
                </div>

                <div className="adv__right">
                    <div className="adv__title">
                        Возможности нашего приложения
                    </div>
                    <div className="adv__list">
                        <div className="adv__element" onClick={() => handleElementClick(0)}>
                            1. Выбирай категории слов
                        </div>

                        <div className="adv__element" onClick={() => handleElementClick(1)}>
                            2. Изучай слова с помощью карточек
                        </div>

                        <div className="adv__element" onClick={() => handleElementClick(2)}>
                            3. Генерация слов
                        </div>

                        <div className="adv__element" onClick={() => handleElementClick(3)}>
                            4. Используй метод интервального повторения
                        </div>

                        <div className="adv__element" onClick={() => handleElementClick(4)}>
                            5. Отслеживай свой прогресс
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Advantages;