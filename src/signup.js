import React,{Component} from "react";

class SignUp extends Component{

    constructor(props)
    {
        super(props);
          
        this.state={
             name:'',
             phone:'',
             address:'',
             email:'',
             password:''
             }
    }

    NameChange= event =>{
        this.setState({name: event.target.value});
        
    }

    PhoneChange= event =>{
        this.setState({phone: event.target.value});

    }

    AddressChange= event =>{
        this.setState({address: event.target.value});
       
    }

    EmailChange= event =>{
        this.setState({email: event.target.value});
    }

    PasswordChange= event =>{
        this.setState({password: event.target.value});
    }

    handleSubmit= () =>{
        alert(this.state.name+this.state.phone+this.state.email+this.state.address+this.state.password);
        if(this.state.password!=null){
            window.location.href="/home";
            alert("working");
        }
        else{
            alert("false");
        }
    }

    render(){

        const name=this.state.name;
        const phone=this.state.phone;
        const address=this.state.address;
        const email=this.state.email;
        const password=this.state.password;

        return(
            <div>
            <div style={{height:"700px" ,width:"600px" ,backgroundColor:"",borderRadius:"50px",marginLeft:"450px",borderTop: "44px", }}>
             <form style={{fontSize:"25px",backgroundColor:"",textAlign:"center",fontFamily:"cursive",borderRadius:"50px",}}>
                <br/>
                <div style={{display:"flex",justifyContent:"space-around"}}> <a href="/signup"><h1>SignUp</h1></a><a href="/signin"><div> <h1> Signin  </h1> </div></a></div>
                <br/>
                <br/>
				<div>
					<label>Username </label><br/>
					<input
                    style={{borderRadius:"12px"}}
						type="text"
						value={name}
						onChange={this.NameChange}
					/>
				</div>
                <br/>
                <br/>

                <div>
					<label>Phone </label><br/>
					<input
                    style={{borderRadius:"12px"}}
						type="text"
						value={phone}
						onChange={this.PhoneChange}
					/>
				</div>
                <br/>
                <br/>

                <div>
					<label>Address </label><br/>
					<input
                    style={{borderRadius:"12px"}}
						type="text"
						value={address}
						onChange={this.AddressChange}
					/>
				</div>
                <br/>
                <br/>


                <div>
					<label>Email </label><br/>
					<input
                    style={{borderRadius:"12px"}}
						type="text"
						value={email}
						onChange={this.EmailChange}
					/>
				</div>
                <br/>
                <br/>

                <div>
					<label>Password </label><br/>
					<input
                    style={{borderRadius:"12px"}}
						type="text"
						value={password}
						onChange={this.PasswordChange}
					/>
				</div>
                <br/>
                <br/>

                <button className="ui bottom button" style={{borderRadius:"12px"}} type="submit" onClick={this.handleSubmit}>Submit</button>


            </form>
           
         </div>
         <br/>
         <br/>
         </div>
        )
    }

    
}
export default SignUp