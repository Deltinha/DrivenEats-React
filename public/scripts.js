let mainChecked;        //These variables will store the elements of the choosen cards
let drinkChecked;
let dessertChecked;

let mainPrice;
let drinkPrice;
let dessertPrice;
let totalPrice;

let mainName;
let drinkName;
let dessertName;

let userName;
let userAddress;

let orderButton = document.querySelector(".white-background"); 

function pickCard(card, optionType){
    const checkedCard = document.querySelector("." + optionType + " " + ".food__card__green-border"); //Look for a checked card in the respective group of cards.
    if (checkedCard !== null){
        checkedCard.classList.remove("food__card__green-border")
        checkedCard.querySelector("ion-icon").classList.add("hidden");
    }

    card.classList.add("food__card__green-border")                       //Add green-border on selected card

    card.querySelector("ion-icon").classList.remove("hidden");    //Remove green-checkmark on selected card

    enablePlaceOrder();
}

function enablePlaceOrder(){
    mainChecked = document.querySelector(".food__main .food__card__green-border");          //Look for one checked element in each group of cards.
    drinkChecked = document.querySelector(".food__drink .food__card__green-border");
    dessertChecked = document.querySelector(".food__dessert .food__card__green-border");

    if (mainChecked!==null && drinkChecked!==null && dessertChecked!==null) {
        document.querySelector(".place-order__button").classList.add("place-order__button--green");
        document.querySelector(".place-order__button__text").innerHTML = "Fechar pedido";
 
        document.querySelector(".place-order__button").setAttribute("onclick","placeOrder();");
        
     } 
}

function placeOrder(){
    orderButton.classList.remove("hidden");
    askInfo();
    findValues();
    updateValues();
    whatsApp();
}

function cancelOrder(){
    orderButton.classList.add("hidden");
}

function findValues(){  //Stores the names and prices of the user sletcted cards in global variables
    mainPrice = Number(mainChecked.querySelector(".food__price__value").innerHTML.replace(',','.'));
    drinkPrice = Number(drinkChecked.querySelector(".food__price__value").innerHTML.replace(',','.'));
    dessertPrice  = Number(dessertChecked.querySelector(".food__price__value").innerHTML.replace(',','.'));

    totalPrice = (mainPrice + drinkPrice + dessertPrice).toFixed(2);

    mainName = mainChecked.querySelector(".food__name").innerHTML;
    drinkName = drinkChecked.querySelector(".food__name").innerHTML;
    dessertName = dessertChecked.querySelector(".food__name").innerHTML;
}

function updateValues(){  //Updates the info in the confirm order box
    document.querySelector(".confirm-order__list__main-name").innerHTML = mainName;
    document.querySelector(".confirm-order__list__drink-name").innerHTML = drinkName;
    document.querySelector(".confirm-order__list__dessert-name").innerHTML = dessertName;
   
    document.querySelector(".confirm-order__list__main-value").innerHTML = mainPrice;
    document.querySelector(".confirm-order__list__main-value").innerHTML = document.querySelector(".confirm-order__list__main-value").innerHTML.replace('.',',');

    document.querySelector(".confirm-order__list__drink-value").innerHTML = drinkPrice;
    document.querySelector(".confirm-order__list__drink-value").innerHTML = document.querySelector(".confirm-order__list__drink-value").innerHTML.replace('.',',');
    
    document.querySelector(".confirm-order__list__dessert-value").innerHTML = dessertPrice;
    document.querySelector(".confirm-order__list__dessert-value").innerHTML = document.querySelector(".confirm-order__list__dessert-value").innerHTML.replace('.',',');

    document.querySelector(".confirm-order__list__total-value").innerHTML = "R$ " + totalPrice;
    document.querySelector(".confirm-order__list__total-value").innerHTML = document.querySelector(".confirm-order__list__total-value").innerHTML.replace('.',',');
}

function whatsApp(){
    let message = "Olá, gostaria de fazer o pedido:" +
    "\n- Prato: " + mainName +
    "\n- Bebida: " + drinkName +
    "\n- Sobremesa: " + dessertName +
    "\nTotal: R$ " + totalPrice.replace('.',',') +
    "\n\nNome: " + userName +
    "\nEndereço: " + userAddress;
    
    let waLink = "https://wa.me/55086988259199?text=" + encodeURIComponent(message);

    document.querySelector(".confirm-order__confirm").setAttribute("href",waLink);
}

function askInfo(){
    userName = prompt("Informe seu nome:")
    userAddress = prompt("Informe seu endereço:")
}