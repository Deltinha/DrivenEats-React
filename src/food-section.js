import SectionHeader from "./section-header";
import FoodPicker from "./food-picker";

export default function FoodSection(props){
 
    if (props.section === 'mainCourse') {
        return (
            <div className='food__main'>
                <SectionHeader>Primeiro, seu prato</SectionHeader>
                <FoodPicker updateBill={props.updateBill} section='mainCourse'/>
            </div>
        );
    }

    if (props.section === 'drink') {
        return (
            <div className='food__drink'>
                <SectionHeader>Agora, sua bebida</SectionHeader>
                <FoodPicker  updateBill={props.updateBill} section='drink'/>
            </div>
        );
    }
    
    if (props.section === 'dessert') {
        return (
            <div className='food__dessert'>
                <SectionHeader>Por fim, sua sobremesa</SectionHeader>
                <FoodPicker  updateBill={props.updateBill} section='dessert'/>
            </div>
        );
    }
    
}