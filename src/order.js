import React from 'react';

let isMainCourseSelected = false;
let isDrinkSelected = false;
let isDessertSelected = false;
let isOrderButtonEnabled = false;



function OrderButton(props){
    return(
            <div onClick={props.sendMessage} className={`place-order__button ${props.greenButton}`}>
                <span className="place-order__button__text">{props.children}</span>
            </div>
    );
}


export default function Order({updateBill, billArray}){

    const [buttonText, setButtonText] = React.useState('Selectione os 3 itens para fechar o pedido');
    const [greenButton, setGreenButton] = React.useState('');


    function sendMessage(){

        if (isOrderButtonEnabled) {
            let newBillArray = billArray.filter((element) => (element.qty !== 0 ));
    
            let selectedMainCourses;
            let selectedDrinks;
            let selectedDesserts;
            let totalValor = 0;
    
            newBillArray.forEach(element => {
                    totalValor += element.multipleUnitsPrice;
            });
    
            selectedMainCourses = newBillArray.filter((item) => (item.category === 'mainCourse'));
            selectedDrinks = newBillArray.filter((item) => (item.category === 'drink'));
            selectedDesserts = newBillArray.filter((item) => (item.category === 'dessert'));
    
            let mainCoursesString = '';
            let drinksString = '';
            let dessertsString = '';
    
            selectedMainCourses.forEach(element => {
                    mainCoursesString = mainCoursesString + `${element.name} (${element.qty}x), `
            });
    
            selectedDrinks.forEach(element => {
                    drinksString = drinksString + `${element.name} (${element.qty}x), `
            });
    
            selectedDesserts.forEach(element => {
                    dessertsString = dessertsString + `${element.name} (${element.qty}x), `
            });
    
    
    
            let message = `Olá, gostaria de fazer o pedido:
            \n- Prato:  ${mainCoursesString}
            \n- Bebida: ${drinksString}
            \n- Sobremesa: ${dessertsString}
            \nTotal: R$ ${totalValor.toFixed(2)}`;
     
    
            
            let waLink = "https://wa.me/55086988259199?text=" + encodeURIComponent(message);
    
            window.open(waLink);
        }
        else {
            return false;
        }
    }


    function changeOrderButtonState(){



        billArray.forEach(item => {
            if (item.category === 'mainCourse' && item.qty > 0) {
                isMainCourseSelected = true;
            }
            else if (item.category === 'mainCourse' && item.qty === 0) {
                isMainCourseSelected = false;
            }
            if (item.category === 'drink' && item.qty > 0) {
                isDrinkSelected = true;
            }
            else if (item.category === 'drink' && item.qty === 0) {
                isDrinkSelected = false;
            }
            if (item.category === 'dessert' && item.qty > 0) {
                isDessertSelected = true;
            }
            else if (item.category === 'dessert' && item.qty === 0) {
                isDessertSelected = false;
            }
        });

        if (!isMainCourseSelected || !isDrinkSelected || !isDessertSelected) {
            setButtonText('Selectione os 3 itens para fechar o pedido');
            setGreenButton('');
            isOrderButtonEnabled = false;
        }

        if (isMainCourseSelected && isDrinkSelected && isDessertSelected) {
            setButtonText('Fechar pedido');
            setGreenButton('place-order__button--green');
            isOrderButtonEnabled = true;
        }
    }

    setInterval(changeOrderButtonState, 1000);

    return (
        <div className='place-order'>
            <OrderButton sendMessage={sendMessage} greenButton={greenButton}>{buttonText}</OrderButton>
        </div>
    );
}