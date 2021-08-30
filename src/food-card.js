import React from "react";


export default function FoodCard(props){


    const [selected, setSelected] = React.useState('');
    const [itemQty, setItemQty] = React.useState(0)

    function selectCard(){
        if (selected === '') {
            setSelected('food__card__selected');
            setItemQty(1);

            props.updateBill(props.name, itemQty+1, props.price, props.category);

            
       }
    }
    
    function addItem(){
        setItemQty(itemQty + 1);

        props.updateBill(props.name, itemQty+1, props.price, props.category);

        
        


    }

    function removeItem(){
        props.updateBill(props.name, itemQty - 1, props.price, props.category);

        

        if (itemQty === 1) {
            setItemQty(0);
            setSelected('');
        }
        else {
            setItemQty(itemQty - 1);
        }
    }

    

    return(
        <div className={`food__card ${selected}`} onClick={selectCard}>
                <img className="food__picture" src={props.img} alt=''/>
                <span className="food__name">{props.name}</span>
                <span className="food__description">{props.description}</span>
                <span className="food__price">R$ <span className="food__price__value">{props.price}</span></span>
                <div className='food__quantity-selection'>
                    <button className='minus-button' onClick={removeItem}>-</button>
                    <span> {itemQty} </span>
                    <button className='plus-button' onClick={addItem}>+</button>
                </div> 
        </div>
    );
}