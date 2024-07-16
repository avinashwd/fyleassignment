import About from "./About";
import MyForm from "./myform";
import {toggleForm} from "./utilities";
function Intro(){
    return (<>
         <section className="container ">
         <div className='row' style={{width:'100%'}}>
           <div className='container-fluid col-sm-6' >
             <h3 style={{font:'normal normal 600 30px/110px Cormorant SC'}} className='txtred'>award winning</h3>
             <h1 style={{font:'normal normal bold 60px/80px Cormorant SC',textTransform:"uppercase"}} className='txtnorm'>digital marketing agency</h1>
             <p style={{width:'80%',font:'normal normal normal 16px/30px Poppins'}}>Morbi sed lacus nec risus finibus feugiat et fermentum nibh.Pellentesque 
             vitae ante at elit fringilla ac at purus, Morbi sed lacus nec risus finibus feugiat et fermentum</p>
               <button className='btn bgred' onClick={toggleForm}>contact us</button>
           </div>
            <MyForm/>
           <div className='col-sm-6'>
             <img src='images/hero.png' className='img-fluid' alt='img'/>
           </div>
           
         </div>
        </section>
        <About/>
        </>);
}

export default Intro;