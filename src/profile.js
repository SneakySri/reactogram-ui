import React from "react";
import p2 from "./resource/img2.jpg";


const Profile=()=>
{
    return(
        <div>
            <div class="ui cards" style={{margin:"0px"}}>
                 <div class="card" style={{position:"0px"}}>
                    <div class="content">
                       <img class="right floated  ui image" src={p2} height="40px" width="40px"/>
                           <div class="header">
                            Bose
                           </div>
                           <div class="meta">
                           Engineering Student
                           </div>
                           <div class="description">
                           #Being Human😘<br/>
                           #Gym Addict<br/>
                           #duke200😘<br/>
                           #Speed Lover😍<br/>
                           #Still Single🤗<br/>
                           #Bindaas Life😍<br/>
                           #Happiest
                            </div>
                    </div>
                    <div class="ui bottom attached button" tabindex="0">Edit Profile</div>
            
                </div>
            </div>
        </div>
    );
}

export default Profile