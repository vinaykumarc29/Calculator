 let display=document.querySelector("#text");
 let buttons=document.querySelectorAll(".button");
 let AC=document.querySelector("#clearAll");
 let backspace= document.querySelector("#backspace");
 let equals= document.querySelector("#equals");
 let paran= document.querySelector("#parenthesis")
 let parenthesis=true;

 
 backspace.addEventListener("click",()=>{
    display.value = display.value.slice(0,-1);
 });

 AC.addEventListener("click",()=>{
    display.value= "";
    parenthesis=true;
});

paran.addEventListener("click",()=>{
    if(parenthesis){
        display.value += "(";
        parenthesis = false;
    }else {
        display.value += ")";
        parenthesis = true;
    }
})



 buttons.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        if(btn.id !="clearAll" && btn.id !="backspace" && btn.id !="equals" && btn.id!="parenthesis"){
         display.value +=btn.innerText;   
        };  
    });
 });

equals.addEventListener("click",()=>{
    let expression = display.value.replace(/x|%/g,(match)=>{
       return match === "x" ? "*": "/100";
    });
         
    display.value = eval(expression);

});

