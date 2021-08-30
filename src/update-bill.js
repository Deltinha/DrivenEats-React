

const billArray = [];


function updateBill(qty, name, individualPrice, category){
    let multipleUnitsPrice = qty * individualPrice;
    let foundDuplicate = false; 



    billArray.forEach(item => {
        if (item.name === name){

            item.qty = qty;
            item.multipleUnitsPrice = multipleUnitsPrice;
            foundDuplicate = true;
        }
    }); 
    

    if (foundDuplicate === false) {
        billArray.push({name,qty,multipleUnitsPrice, category})
    }


    console.log(billArray);
}

export {updateBill, billArray}