import {useState} from "react";
function NavBtn(){
    const [index,setIndex] = useState(0);
    const cState= n =>{
        setIndex(n);
        const c = document.getElementsByClassName("navimg");
        c[0].src = "images/2.svg";
        c[1].src = "images/2.svg";
        c[2].src = "images/2.svg";
        c[index].src="images/1.svg";
    };
    return(
        
        <div className="indexslider">
                <div>
                    <button className="btn" style={{backgroundColor:"#fafafa"}}><span style={{margin:"10px"}}><img className="navimg" src="images/1.svg" alt="img" onClick={()=>cState(0)}/></span></button>
                    <button className="btn" style={{backgroundColor:"#fafafa"}}><span style={{margin:"10px"}}><img className="navimg" src="images/2.svg" alt="img"onClick={()=>cState(1)}/></span></button>
                    <button className="btn" style={{backgroundColor:"#fafafa"}}><span style={{margin:"10px"}}><img className="navimg" src="images/2.svg" alt="img"onClick={()=>cState(2)}/></span></button>
                </div>
                
            </div>
        
    );

}

export default NavBtn;