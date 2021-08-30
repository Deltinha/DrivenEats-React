import FoodCard from "./food-card";



export default function FoodPicker(props){
    
    const mainCourseItens= [
        {
            img: './assets/shrimpsnowpeastirfry.jpg',
            name: 'Stir Fry de Camarão com Ervilhas',
            description: 'Camarões, macarrão e ervilha torta',
            price: 39.99
        },
        {
            img: './assets/thaifriedrice.jpg',
            name: 'Arroz Frito Tailandês',
            description: 'Acompanha peito de frango grelhado',
            price: 34.99
        },
        {
            img: './assets/airfryerporkchops.png',
            name: 'Costeleta de Porco na Air Fryer',
            description: 'Acompanhada de arroz e pepino frito',
            price: 29.99
        },
        {
            img: './assets/garlicspaghetti.jpg',
            name: 'Macarrão com Alho e Anchova',
            description: 'Anchova é opcional, o alho não',
            price: 39.99
        }
    ];

    const drinkItens = [
        {
            img: './assets/pepsi-gengibre-290.jpg',
            name: 'Pepsi Twist Sabor Gengibre',
            description: 'Lata 350ml',
            price: 2.49
        },
        {
            img: './assets/sprite-mini-299.jpg',
            name: 'Sprite Mini',
            description: 'Lata 220ml',
            price: 2.99
        },
        {
            img: './assets/fanta-laranja-349.jpg',
            name: 'Fanta Laranja',
            description: 'Lata 350ml',
            price: 3.49
        },
        {
            img: './assets/guarana-ant-249.jpg',
            name: 'Guaraná Antarctica',
            description: 'Lata 350ml',
            price: 2.49
        }
    ];

    const dessertItens = [
        {
            img: './assets/margarita-pops.jpg',
            name: 'Picolé de Margarita',
            description: 'A forma mais fofa de se "beber" uma margarita',
            price: 6.49
        },
        {
            img: './assets/neapolitan-cupcake.jpg',
            name: 'Cupcake Napolitano',
            description: 'O sabor clássico em forma de cupcake',
            price: 7.99
        },
        {
            img: './assets/margarita-cupcake.jpg',
            name: 'Cupcake Margarita',
            description: 'Tudo é melhor em forma de cupcake',
            price: 8.99
        },
        {
            img: './assets/bahama-cupcakes.jpg',
            name: 'Cupcake Praia',
            description: 'Eu quero férias',
            price: 8.99
        }
    ];

    function returnSectionArray(){
        if (props.section === 'mainCourse') {
            return mainCourseItens;
        }
        if (props.section === 'drink') {
            return drinkItens;
        }
        if (props.section === 'dessert') {
            return dessertItens;
        }
    }

        return(
            <div className='food__picker'>
                {
                    returnSectionArray().map((item, index) => (<FoodCard 
                        key={index}
                        img={item.img}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                        category={props.section}
                    />))
                }
            </div>
        );
        
}