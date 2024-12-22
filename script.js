function conversion(){

    const inputvalue=parseInt(document.querySelector("#text").value);
    const celtof=document.querySelector("#cTof");
    const fahtoc=document.querySelector("#fToc");
     const result=document.querySelector("p");
     let temp;
    if (isNaN(inputvalue)) {
        result.textContent = "Enter a valid number";
    }
    if(celtof.checked){
       temp=(inputvalue * 9/5 ) + 32;
       result.textContent=temp.toFixed(1) +"°F" //for degree press alt+0176 for  this ° ;
    }
    
   else  if(fahtoc.checked){
        temp=(inputvalue - 32)* ( 5/9) ;
       result.textContent=temp.toFixed(1) +"°C" //tofixed(1) means onde degit after . like 12.2,145.5z
    }
    else{
       result.textContent="Select a Unit";
    }
}