function OrderButton(props){
    return(
        <div className='place-order__button'>
            <span className="place-order__button__text">{props.children}</span>
        </div>
    );
}


export default function Order(){

    let buttonText = 'Selecione os 3 itens para fechar o pedido';

    return (
        <div className='place-order'>
            <OrderButton>{buttonText}</OrderButton>
        </div>
    );
}