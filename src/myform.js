import { toggleLabel } from "./utilities";
function MyForm(){
    return(<>
     <div className="row col-sm-4" id="form" style={{margin:"auto"}}>
            <form className="row" action="https://getform.io/f/amdpmpmb" method="POST">
                <h3 style={{fontSize:"30px"}} className="txtnorm">Talk to us</h3>
                <div className="col-sm-12">
                    <label id="lb1">Work Email</label>
                <input type="email"  name="workEmail" placeholder="Work email" onFocus={toggleLabel}/></div>
                <div className="col-sm-6"><label id="lb2">First Name</label>
                <input type="text"  name="firstName" placeholder="First Name" onFocus={toggleLabel}/></div>
                <div className="col-sm-6"><label id="lb3">Last Name</label>
                <input type="text"  name="lastName" placeholder="Last Name" onFocus={toggleLabel}/></div>
                <div className="col-sm-12 p-3">
                    
                <input type="checkbox" ></input>I agree to Fyle's terms and conditions and consent to send me communication
                <span className="checks"></span>
                <button type="submit" className="btn bgred col-sm-12" style={{font:'normal normal 600 14px/26px Poppins'}}> Contact us</button>
                </div>
            </form>
            

           </div>
    </>);
}

export default MyForm;