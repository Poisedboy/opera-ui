import React from 'react';
import serviceSign from '../../assets/signs/room-service.png';
import checkIn from '../../assets/signs/check-in.png';
import checkOut from '../../assets/signs/check-out.png';
import CustomCardInfo from './CustomCardInfo';

const info = [
    { id: 1, picture: checkIn, title: 'Заїзд після 14:00', text: 'Якщо Ви приїхали раніше. Ви можете залишити речі в нашій камері схову до Вашого заселення. За наявності прибраного номера Ви можете скористатись послугою "Ранній заїзд", вона коштує половину вартості номера за добу. Ціну уточнюйте на рецепції.' },
    { id: 2, picture: checkOut, title: 'Виїзд до 12:00', text: 'Ви можете залишити речі в нашій камері схову, або придбати послугу "Пізній виїзд", вартість послуги складає половину вартості номера за добу.' },
    { id: 3, picture: serviceSign, title: 'Щоденне прибирання', text: 'Повісьте табличку «Прошу прибрати» на ручку дверей до 13:00 – 14:00.'},
    // {id: 4, picutre: null, title: 'forbid smoking in the room'}
]

const Information = () => {

    const renderInfo = info.map(info => {
        return (
            <CustomCardInfo picture={info.picture} title={info.title} text={info.text} key={info.id} />
        );
    });

    return (
        <>
            <div className='d-flex flex-md-row justify-content-around flex-wrap'>
                {renderInfo}
            </div>        
        </>
    )
};

export default Information;
