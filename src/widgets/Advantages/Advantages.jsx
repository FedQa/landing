import './Advantages.css'
import {useState} from "react";
import adv1 from '../../shared/assets/adv_list/adv_1.svg'
import adv2 from '../../shared/assets/adv_list/adv_2.svg'
import adv3 from '../../shared/assets/adv_list/adv_3.png'
import adv4 from '../../shared/assets/adv_list/adv_4.png'
import adv5 from '../../shared/assets/adv_list/adv_5.png'

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
        <div className="adv">
            <div className="adv__left">
                <img src={images[selectedIndex]} alt="Selected" className="adv__img" />
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
    )
}

export default Advantages;