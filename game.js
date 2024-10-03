let val = document.querySelector("body");
let boxes = document.querySelectorAll(".box")
let msgdisplay = document.querySelector(".msg")
let newgame = document.querySelector(".new")
let resetgame = document.querySelector(".reset")
let mal = document.querySelector(".msgdis")
let kal = document.querySelector(".main")
let lal = document.querySelector(".container")

kal.classList.remove("hide");
lal.classList.remove("hide");
resetgame.classList.remove("hide");
let turno = true;
boxes.forEach((box)=>{
    box.addEventListener("click",() =>{
       if(turno){
box.innerText="O";
       turno=false;
       }
       else {
        box.innerText="X";
        turno=true;
       }
       box.disabled=true
       winner();
    });
});
const winPatterns=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[3,4,5],
[6,7,8],
[2,4,8],
[2,4,6],


];

const msgcontainer =(showwinner) =>{
   mal.innerText =`congratulations,winner is ${showwinner}`;
   msgdisplay.classList.remove("hide");
   kal.classList.add("hide");
lal.classList.add("hide");
resetgame.classList.add("hide");
   
   


    


}
  const restart= () =>{
   turno = true;
   boxes.forEach((box) =>{
      box.innerText="";
      box.disabled=false;
      msgdisplay.classList.add("hide");
      kal.classList.remove("hide");
lal.classList.remove("hide");
resetgame.classList.remove("hide");


     
      


   
         
  });
};
const winner = () =>{
  
    for( let Pattern of winPatterns){
      let pos1 = boxes[Pattern[0]].innerText;
      let pos2 = boxes[Pattern[1]].innerText;
      let pos3 = boxes[Pattern[2]].innerText;
      if(pos1!="" && pos2!="" && pos3!= ""){
      if(pos1===pos2&& pos2===pos3)
        msgcontainer(pos1);

      }
   }

      
        
        };
        newgame.addEventListener("click",restart);
        resetgame.addEventListener("click",restart);
            
        
        
   
 

