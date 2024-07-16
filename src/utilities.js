
const toggleForm = () => {
    let f = document.getElementById("form");
    f.style.display="block";
   let r = document.getElementById("root");
    
    r.style.zIndex=0;
    f.style.zIndex=1;
};

const toggleLabel = () =>{
    
 document.getElementById("lb1").style.visibility="visible";
 document.getElementById("lb2").style.visibility="visible";
document.getElementById("lb3").style.visibility="visible";
};

export  {toggleForm,toggleLabel}; 


