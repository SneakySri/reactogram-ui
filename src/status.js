import React from "react";
import p1 from "./resource/img1.jpg";
import p2 from "./resource/img2.jpg";
import p3 from "./resource/img3.jpg";
import p4 from "./resource/img4.jpg";


const StatusBar=()=>{

    return(
    <div>
        <div className="StatusBar">
            
                <img className="img" src={p1} alt="img"/>

                <img className="img" src={p2} alt="img"/>

                <img className="img" src={p3} alt="img"/>

                <img className="img" src={p4} alt="img"/>

                <img className="img" src={p1} alt="img"/>

                <img className="img" src={p2} alt="img"/>
    
            
        </div>
    </div>
    );
}
export default StatusBar