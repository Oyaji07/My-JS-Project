let Score=JSON.parse(localStorage.getItem('Overall')) || {
    Win:0,
    Loose:0,
    Tie:0
};

 


   function computer(computerChoise){
    if(computerChoise===0) return 'Bat';
    else if(computerChoise===1) return 'Ball';
    else return 'Stump';
   }





function play(userChoice){
    let computerChoise=computer(Math.floor(Math.random()*3));
    if(userChoice===computerChoise){
        display("Tie");Score.Tie++;
    }
    else if(computerChoise==='Bat' && userChoice==='Ball'){
display('Loose');Score.Loose++;
    }
    else if(computerChoise==='Bat' && userChoice==='Stump'){
         display("Win");Score.Win++
    }
    else if(computerChoise==='Ball' && userChoice==='Bat'){
            display("Win");Score.Win++
    }
    else if(computerChoise==='Ball' && userChoice==='Stump'){
      display('Loose');Score.Loose++;
    }
    else if(computerChoise==='Stump' && userChoice==='Bat'){
      display('Loose');Score.Loose++;
    }
     else if(computerChoise==='Stump' && userChoice==='Ball'){
            display("Win");Score.Win++
    }
localStorage.setItem('Overall',JSON.stringify(Score))
document.querySelector(`#one`).innerText=` ${Score.Win} 
                                              You  ` 

document.querySelector(`#two`).innerText=` ${Score.Loose} 
                                              Comp  `     ;
document.querySelector(`#three`).innerText=` ${Score.Tie} 
                                              Tie  `                                                                                          
}



function reset(){
    Score={
        Win:0,
        Loose:0,
        Tie:0
    };
    localStorage.clear();
    document.querySelector(`#one`).innerText=` ${Score.Win} 
                                              You  ` 

document.querySelector(`#two`).innerText=` ${Score.Loose} 
                                              Comp  `  

document.querySelector(`#three`).innerText=` ${Score.Tie} 
                                              Tie  `     
                                              
document.querySelector(`#displaymsg`).innerText=`Let's play`            
 document.querySelector(".container").style.backgroundColor = "rgba(105, 104, 104, 1)"                           
}




function display(re){
 if(re===`Win`){
    document.querySelector(`#displaymsg`).innerText=`User Win `;
    document.querySelector(".container").style.backgroundColor = "rgb(51, 244, 45)";

 }
 else if(re==='Loose'){
    document.querySelector(`#displaymsg`).innerText=`Computer Win `;
     document.querySelector(".container").style.backgroundColor = "rgb(244, 45, 45)";
}
else if(re==='Tie'){document.querySelector(`#displaymsg`).innerText=`Tie `;
 document.querySelector(".container").style.backgroundColor = "rgba(105, 104, 104, 1)";}
 else{
    document.querySelector(`#displaymsg`).innerText=`Let's Play `;
 document.querySelector(".container").style.backgroundColor = "rgba(105, 104, 104, 1)";
}
}


document.querySelector(`#displaymsg`).innerText=`Let's play`