import FoodSection from "./food-section";

export default function Food({updateBill}){
    return(
        <div className='food'>
            <FoodSection updateBill={updateBill} section='mainCourse'/>
            <FoodSection updateBill={updateBill} section='drink'/>
            <FoodSection updateBill={updateBill} section='dessert'/>
        </div>
    );
}