import React from 'react';
import done from './../../assets/images/done.svg'

const directionsData = [
    {
        name: 'Греция',
    },
    {
        name: 'Егтпет',
    },
    {
        name: 'Индонезия',
    },
    {
        name: 'Испания',
    },
    {
        name: 'Доминиканская Республика',
    },
    {
        name: 'ОАЭ',
    },
    {
        name: 'Тайланд',
    },
    {
        name: 'Шри Ланка',
    },
    {
        name: 'Италия',
    },
    {
        name: 'Турция',
    },
    {
        name: 'Куба',
    },
    {
        name: 'Маврикий',
    },
    {
        name: 'Мальдивы',
    },
    {
        name: 'Мексика',
    },
    {
        name: 'Сейшелы',
    },
    {
        name: 'Танзания',
    },
    {
        name: 'Тунис',
    },
]

const ModalFormContent = ({number}) => {
    return (
        <div className='modalFormContent'>
            {number === 1 &&
                <div className='flex row'>
                    <img src={done} alt="done"/>
                    <p className='active text ml-2'>Riga</p>
                </div>}
            {number === 2 &&
                <div className='flex flex-col'>
                    {directionsData.map((direction, index) => (
                        <p className='text directionText' key={index}>{direction.name}</p>
                    ))}
                </div>}
            {number === 3 &&
                <div>3</div>}
            {number === 4 &&
                <div>4</div>}
            {number === 5 &&
                <div>5</div>}
            {number === 6 &&
                <div>6</div>}
        </div>
    );
};

export default ModalFormContent;