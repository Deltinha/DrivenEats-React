import FoodSection from "./food-section";

export default function Food(){
    return(
        <div className='food'>
            <FoodSection section='mainCourse'/>
            <FoodSection section='drink'/>
            <FoodSection section='dessert'/>
        </div>
    );
}