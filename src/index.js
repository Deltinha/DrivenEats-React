import ReactDOM from "react-dom";
import React from "react";
import Header from "./header";
import Food from "./food";
import Order from "./order";


import './css/reset.css';
import './css/styles.css';

export default function App(){
  const [bill, setBill] = React.useState([]);



  function updateBill(name, qty, individualPrice, category){
    
    

    let foundDuplicate = false; 



    bill.forEach((item, index) => {
        
        if (item.name === name){
            setBill(Object.assign([], bill, {index:item.qty=qty}, {index:item.multipleUnitsPrice=individualPrice*qty}));

            foundDuplicate = true;
        }
    }); 
    

    if (foundDuplicate === false) {
    setBill([...bill, {name, qty, multipleUnitsPrice: (individualPrice * qty), category}]);
    }

    console.log(bill);
  }



    return (
    <>
        <Header />
        <Food updateBill={updateBill}/>
        <Order updateBill={updateBill} billArray={bill}/>
    </>
    );
  
}

ReactDOM.render(<App />, document.querySelector(".root"));