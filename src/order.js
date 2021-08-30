import React from 'react';
import { billArray } from './update-bill';

function OrderButton(props){
    return(
        <div className={`place-order__button ${props.greenButton}`}>
            <span className="place-order__button__text">{props.children}</span>
        </div>
    );
}



export default function Order(){

    const [buttonText, setButtonText] = React.useState('Selectione os 3 itens para fechar o pedido');
    const [greenButton, setGreenButton] = React.useState('');



    let isMainCourseSelected = false;
    let isDrinkSelected = false;
    let isDessertSelected = false;

    function changeOrderButtonState(){
        billArray.forEach(item => {
            if (item.category === 'mainCourse' && item.qty > 0) {
                isMainCourseSelected = true;
            }
            if (item.category === 'drink' && item.qty > 0) {
                isDrinkSelected = true;
            }
            if (item.category === 'dessert' && item.qty > 0) {
                isDessertSelected = true;
            }
        });

        if (!isMainCourseSelected || !isDrinkSelected || !isDessertSelected) {
            setButtonText('Selectione os 3 itens para fechar o pedido');
            setGreenButton('');
        }

        if (isMainCourseSelected && isDrinkSelected && isDessertSelected) {
            setButtonText('Fechar pedido');
            setGreenButton('place-order__button--green');
        }
    }

    setInterval(changeOrderButtonState, 1000);

    return (
        <div className='place-order'>
            <OrderButton greenButton={greenButton}>{buttonText}</OrderButton>
        </div>
    );
}