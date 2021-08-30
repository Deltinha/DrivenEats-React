import ReactDOM from "react-dom";
import Header from "./header";
import Food from "./food";
import Order from "./order";


import './css/reset.css';
import './css/styles.css';

function App(){
  
    return (
    <>
        <Header />
        <Food />
        <Order />
    </>
    );
  
}

ReactDOM.render(<App />, document.querySelector(".root"));