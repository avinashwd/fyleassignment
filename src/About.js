import Project from "./project";
import {useState} from "react";
function About(){
    const [index,setIndex] = useState(0);
    const cState= n =>{
        setIndex(n);
        
        const c = document.getElementsByClassName("navimg");
        
        c[0].src = "images/2.svg";
        c[1].src = "images/2.svg";
        c[2].src = "images/2.svg";
        c[n].src="images/1.svg";
        console.log(index);
    };
    return(<>
    <section className="container" style={{backgroundColor:'#fafafa', height:"120vh"}}>
        <div className="row" style={{paddingTop:'50px'}}>
            <div className="row" s>
                <h3 className="txtred" style={{font:'normal normal 600 24px/26px Cormorant SC'}}>what we do</h3>
                <div className="col-sm-6">
                <h1 className="txtnorm" style={{font: 'normal normal bold 65px/65px Cormorant SC'}}>services provide for you</h1>
                </div>
                <div className="col-sm-6">
                    <p className="txtnorm" style={{font:'normal normal normal 16px/30px Poppins',paddingTop:'30px'}}>Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed lacus nec risus finibus feugiat et fermentum</p>
                </div>
            </div>
            <div className="imgslider container-fluid">
                <div className="imgcontainer">
                    <img className="slide" src="images/1-2.png" alt="img"/>
                    <div className="knowmore bgred">
                    <div className="pt-5">
                        <img className="mx-auto d-block" src="images/icon.png" alt="img"/></div>
                        <h2 className="text-center pt-5" style={{font:" normal normal 600 24px/26px Cormorant SC"}}>web development</h2>
                        <h3 className="text-center p-5" style={{font:"normal normal normal 16px poppins"}}>Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque</h3>
                        <a href="https://www.fylehq.com" className="text-center mx-auto" target="_blank"><button className="btn txtred mx-auto d-block" style={{backgroundColor:"#fafafa", font:"normal normal 600 14px poppins", marginLeft:"50px"}}>read more<span><img src="images/arrow.svg" alt="img"/></span></button></a>
                    </div>
                </div>
                <div className="imgcontainer">
                    <img className="slide" src="images/2-2.png" alt="img"/>
                    <div className="knowmore bgred">
                    <div className="pt-5">
                        <img className="mx-auto d-block" src="images/icon.png" alt="img"/></div>
                        <h2 className="text-center pt-5" style={{font:" normal normal 600 24px/26px Cormorant SC"}}>web development</h2>
                        <h3 className="text-center p-5" style={{font:"normal normal normal 16px poppins"}}>Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque</h3>
                        <a href="https://www.fylehq.com" target="_blank"><button className="btn txtred mx-auto d-block" style={{backgroundColor:"#fafafa", font:"normal normal 600 14px poppins", marginLeft:"50px"}}>read more<span><img src="images/arrow.svg" alt="img"/></span></button></a>
                    </div>
                </div>
                <div className="imgcontainer">
                    <img className="slide" src="images/3-2.png" alt="img"/>
                    <div className="knowmore bgred" >
                    <div className="pt-5">
                        <img className="mx-auto d-block" src="images/icon.png" alt="img"/></div>
                        <h2 className="text-center pt-5" style={{font:" normal normal 600 24px/26px Cormorant SC"}}>web development</h2>
                        <h3 className="text-center p-5" style={{font:"normal normal normal 16px poppins"}}>Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque</h3>
                        <a href="https://www.fylehq.com" target="_blank"><button className="btn txtred mx-auto d-block" style={{backgroundColor:"#fafafa", font:"normal normal 600 14px poppins", marginLeft:"50px"}}>read more<span><img src="images/arrow.svg" alt="img"/></span></button></a>
                    </div>
                </div>
                <div className="imgcontainer bgred">
                    <div className="bgred" style={{width:"370px"}}>
                        <div className="pt-5">
                        <img className="mx-auto d-block" src="images/icon.png" alt="img"/></div>
                        <h2 className="text-center pt-5" style={{font:" normal normal 600 24px/26px Cormorant SC"}}>web development</h2>
                        <h3 className="text-center p-5" style={{font:"normal normal normal 16px poppins"}}>Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque</h3>
                        <a href="https://www.fylehq.com" target="_blank"><button className="btn txtred mx-auto d-block" style={{backgroundColor:"#fafafa", font:"normal normal 600 14px poppins", marginLeft:"50px"}}>read more<span><img src="images/arrow.svg" alt="img"/></span></button></a>
                    </div>
                </div>
                <br/>
            

            </div>
            <div className="indexslider" style={{display:"block"}}>
                <div>
                    <button className="btn" style={{backgroundColor:"#fafafa"}}><span style={{margin:"10px"}}><img className="navimg" src="images/1.svg" alt="img" onClick={()=>cState(0)}/></span></button>
                    <button className="btn" style={{backgroundColor:"#fafafa"}}><span style={{margin:"10px"}}><img className="navimg" src="images/2.svg" alt="img" onClick={()=>cState(1)}/></span></button>
                    <button className="btn" style={{backgroundColor:"#fafafa"}}><span style={{margin:"10px"}}><img className="navimg" src="images/2.svg" alt="img" onClick={()=>cState(2)}/></span></button>
                </div>
                
            </div>

        </div>
    </section>
    
    <Project/>
    </>);
}

export default About;