import React from "react";

const Component1=(props)=>
{

    return(
        <div className="card1">
            <div class="ui card" style={{width:"500px",height:"650px" ,borderBlockColor:"red"}}>
                 <div class="content">
                    <div class="right floated meta">14h</div>
                        <img class="ui avatar image" src={props.img} /> {props.name}
                    </div>
                    <div class="image" >
                          <img src={props.content} alt="404"width="300px" height="200px"/>
                    </div>
                    <div class="content">
                         <span class="right floated">
                             <i class="heart outline like icon"></i>
                                     17 likes
                         </span>
                     <i class="comment icon"></i>
                                 3 comments
                    </div>
                    <div class="extra content">
                        <div class="ui large transparent left icon input">
                             <i class="heart outline icon"></i>
                                <input type="text" placeholder="Add Comment..."/>
                        </div>
                    </div>
            </div>
        </div>
    );
}
export default Component1