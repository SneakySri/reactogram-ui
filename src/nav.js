import React from "react";


const Navigator=()=>{
    return(
        <div> 
            
            <div class="ui secondary  menu">
            <div class="ui header" style={{marginTop: "12px",marginLeft: "280px",marginRight: "19px",}}>
                <i class="paper plane icon"></i>
                Reactogram
                </div>
            <a class="active item" href="/Home">
                Home
            </a>

            <a class="item" href="/">
                 Messages
           </a>

            <a class="item" href="/friend">
                 Friends
            </a>

            <div class="right menu" style={{marginRight:"350px"}}>
            <div class="item">
            <div class="ui icon input">
             <input type="text" placeholder="Search..."/>
                 <i class="search link icon"></i>
         </div>
        </div>
        <a class="ui item" href="/signin">
            Logout
        </a>

  </div>
</div>

</div>
);
}

export default Navigator;