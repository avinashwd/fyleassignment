import Footer from "./footer";
function Growth(){
    return(
        <>
        <section className="container" style={{backgroundColor:"#fafafa", position:"relative",top:"300px",height:"50vh"}} >
            <div className="pt-5">
            <h3 className="txtred text-uppercase" style={{textAlign:"center",font:"normal normal 600 24px/26px Cormorant SC"}}>experts growth</h3>
            <h1 className="txtnorm text-uppercase" style={{textAlign:"center",font:"normal normal bold 45px/65px Cormorant SC"}}>our company growth</h1>
            </div>
            <div className="d-flex justify-content-evenly" >
                <div className="card col-sm-2 ">
                    <div className="card-body">
                        <img src="images/heart.svg" className="mx-auto d-block" alt="img"/>
                        <p className="text-center" style={{font:"normal normal 300 60px/65px Poppins"}}>199+</p>
                        <p className="text-center text-capitalize" style={{font:"normal normal 300 20px/80px Poppins;"}}>Staticfied Customers</p>
                    </div>
                    </div>
                    <div className="card col-sm-2">
                    <div className="card-body">
                        <img src="images/clock.svg" className="mx-auto d-block" alt="img"/>
                        <p className="text-center" style={{font:"normal normal 300 60px/65px Poppins"}}>1591+</p>
                        <p className="text-center text-capitalize" style={{font:"normal normal 300 20px/80px Poppins;"}}>days of  operation</p>
                    </div>
                    </div>
                    <div className="card col-sm-2">
                    <div className="card-body">
                        <img src="images/path 4402.svg" className="mx-auto d-block" alt="img"/>
                        <p className="text-center"  style={{font:"normal normal 300 60px/65px Poppins"}}>283+</p>
                        <p className="text-center text-capitalize" style={{font:"normal normal 300 20px/80px Poppins;"}}>completed project</p>
                    </div>
                    </div>
                    <div className="card col-sm-2">
                    <div className="card-body">
                        <img src="images/path 4406.svg" className="mx-auto d-block" alt="img"/>
                        <p className="text-center"  style={{font:"normal normal 300 60px/65px Poppins"}}>75+</p>
                        <p className="text-center text-capitalize" style={{font:"normal normal 300 20px/80px Poppins;"}}>win award</p>
                    </div>
                    </div>
                </div>


        </section>
        <section className="container" style={{position:"relative",top:"230px"}}>
            <div className="col-sm-12">
                <h3 className="txtred text-center text-uppercase" style={{font:"normal normal 600 24px/26px Cormorant SC"}}>client&apos;s feedback</h3>
                <h1 className="txtnorm text-center text-uppercase" style={{font:"normal normal bold 45px/65px Cormorant SC"}}>people say&apos;s about us&#33;</h1> 
            </div>
            <div className="feedback mx-auto col-sm-6">
                <p className="comment txtnorm" style={{font:"normal normal normal 20px/34px Poppins"}}>Jannat Tumpa The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.</p>
                <p className="text-uppercase"><span className="txtred" style={{font:"normal normal bold 20px/34px Poppins"}}>JANNAT TUMPA</span><span className="txtnorm" style={{font:"normal normal 300 20px/34px Poppins"}}>- COO, AMERIMAR ENTERPRISES, INC.</span></p>
            </div>
        </section>
        <Footer/>
        </>
    );
}

export default Growth;