let buttons=document.querySelectorAll(".buttons");
let AC=document.querySelector("#clearAll")
let display=document.querySelector("#text");


buttons.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        AC.addEventListener("click",()=>{
            display.innerText= "";
        })
        display.innerText = display.innerText + btn.innerText;
         
    });
});
 
    

