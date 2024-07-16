import Growth from "./Growth";
function Project(){
    return(<>
    <section className="container">
        <div className="col-sm-12">
        <h3 className="txtred" style={{font:"normal normal 600 24px/26px Cormorant SC",textAlign:"center"}}>why choose us</h3>
        <h1 className="txtnorm capital" style={{font:"normal normal bold 45px/65px Cormorant SC",textAlign:"center"}}>why we are best</h1>
        </div>
        <div className="row col-sm-12 pt-5">
            <div className="col-sm-3">
                <img src="images/1-1.svg" alt="img" style={{height:"72px",width:"72px"}}/>
                <h3 className="txtnorm" style={{font:"normal normal medium 20px/80px Poppins",textTransform:"capitalize"}}>clarified vision &amp; target</h3>
                <p className="txtnorm" style={{font:"normal normal normal 16px/26px Poppins"}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
            </div>
            <div className="col-sm-3">
            <img src="images/2-1.svg" alt="img" style={{height:"72px",width:"72px"}}/>
            <h3 className="txtnorm" style={{font:"normal normal medium 20px/80px Poppins",textTransform:"capitalize"}}>high performance</h3>
            <p className="txtnorm" style={{font:"normal normal normal 16px/26px Poppins"}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
            </div>
            <div className="col-sm-3">
            
            <img src="images/3-1.svg" alt="img" style={{height:"72px",width:"72px"}}/>
            <h3 className="txtnorm" style={{font:"normal normal medium 20px/80px Poppins",textTransform:"capitalize"}}>maintain security</h3>
            <p className="txtnorm" style={{font:"normal normal normal 16px/26px Poppins"}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
            
            </div>
            <div className="col-sm-3">
            <img src="images/4.svg" alt="img" style={{height:"72px",width:"72px"}}/>
            <h3 className="txtnorm" style={{font:"normal normal medium 20px/80px Poppins",textTransform:"capitalize"}}>better strategy &amp; quality</h3>
            <p className="txtnorm" style={{font:"normal normal normal 16px/26px Poppins"}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
            
            </div>
            <h3 className="txtred pt-5" style={{font:"normal normal 600 24px/26px Cormorant SC",textAlign:"center"}}>our project</h3>
        <h1 className="txtnorm capital" style={{font:"normal normal bold 45px/65px Cormorant SC",textAlign:"center"}}>why we are best</h1>

        </div>
        <div className="container" style={{overflow:"auto;"}}>
        <div className="row" >
            
            <div className="col-sm-9 m-0 p-0" >
                <img className="img-fluid m-0 p-0" src="images/image.png" alt="img" style={{width: '770px',height: '567px'}}/>
            </div>
            <div className="col-sm-3 m-0 p-0" >
                <div className="col-sm-12 m-0 p-0" style={{backgroundColor:"#fafafa",margin:"0px",padding:"0px 5px"}}>
                    <h3 className="txtnorm" style={{font:"normal normal medium 20px/80px Poppins"}}>Genderless Kei &ndash; Japan&apos;s Hot</h3>
                    <p className="txtnorm" style={{font:"normal normal normal 16px/28px Poppins"}}>Set to launch on the manufacturer&apos;s new A330neo aircraft in 2017, it&apos;s offering lots of</p>
                </div>
                <div className="col-sm-12 bgred m-0 p-0">
                <h3 style={{font:"normal normal medium 20px/80px Poppins"}}>Better Strategy &amp; Quality</h3>
                <p style={{font:"normal normal normal 16px/28px Poppins"}}>Set to launch on the manufacturer&apos;s new A330neo aircraft in 2017, it&apos;s offering lots of</p>
                </div>
                <div className="col-sm-12 m-0 p-0" style={{backgroundColor:"#fafafa",margin:"0px 5px",}}>
                <h3 className="txtnorm" style={{font:"normal normal medium 20px/80px Poppins"}}>Genderless Kei &ndash; Japan&apos;s Hot</h3>
                <p className="txtnorm" style={{font:"normal normal normal 16px/28px Poppins"}}>Set to launch on the manufacturer&apos;s new A330neo aircraft in 2017, it&apos;s offering lots of</p>
                </div>
            </div>
            </div>
        </div>
    </section>
    <br></br>
     <Growth/> 
    </>);
}

export default Project;