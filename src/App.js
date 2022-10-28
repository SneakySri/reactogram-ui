import logo from './logo.svg';
import './App.css';
import Navigator from './nav';
import StatusBar from './status';
import Component1 from './comp';
import Profile from './profile';

import p1 from "./resource/img1.jpg";
import p2 from "./resource/img2.jpg";
import p3 from "./resource/img3.jpg";
import p4 from "./resource/img4.jpg";
import Signin from './signin';
import SignUp from './signup';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Friend from './friends';




function App() {
  
  const home=(
  <div>
    <Navigator/>
    <div className='Body'>
       <StatusBar/>
      
       <div className='secondBody'>
       <div className='CompBody'>
          <Component1 img={p1} content={p1} name="Thendral"/>

          <Component1 img={p2} content={p2} name="Prasanth"/>

          <Component1 img={p3} content={p3} name="Sriram"/>

          <Component1 img={p4} content={p4} name="Kreethika"/>

       </div> 
       <div className="profilebox"><Profile/></div>
       
    </div>
    </div>
    
    

  </div>

  )

  const friend=(
    <div>
    <Navigator/>
    <div className='Body'>
       <div className='secondBody'>
        <Friend/>
              
       </div>
     </div>
     </div>  

  )
  return (
    <BrowserRouter>
         
          <Routes>
            <Route exact path="/" element={<Signin/>} />
            <Route exact path="/home" element={home} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/signin" element={<Signin/>} />
            <Route path="/friend" element={friend} /> 
            {/* <Route path="/message" element={<Message/>} /> */}
           
            
          </Routes>
       
      
    </BrowserRouter> 
    
  
  );
}

export default App;
