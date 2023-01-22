import Header from "./components/Header";
import Home from "./Home/Home";
import Tut from '../../src/images/Tut.png'

const Tutorial = () => {
    return (
        <>

        <Header props={{color: '#AFCBF3'}}>{{backgroundColor: '#AFCBF3'}}</Header>

        <div style={{backgroundColor:'#AFCBF3', height:'100vh', color: 'black'}}>01. TUTORIAL</div>
        

        <div>
          <img src={Tut} alt="Tut" width={390}/>
        </div>


        </>
        
    
    )
    
}

export default Tutorial;