    // LocalStorage

         if(localStorage.getItem("Player1") )
{
    Player1 = localStorage.getItem("Player1");
    Player2 = localStorage.getItem("Player2");
                
            output.innerHTML =
            ` <h1 class=" d-flex justify-content-center"> ${Player1} vs  ${Player2}  </h1> ` ;                
                    
}
                    
         document.getElementById("name").textContent=Player2;
      

    //  Click X O

    let buttons = document.getElementById("buttons");
    let divent = document.getElementById("WinnMES");
    let diven = document.getElementById("WinnME");
    let play = document.getElementById("play");
    let music = document.getElementById("music");
    let sunGame = document.getElementById("sunGame");
    let win = document.getElementById("win");
    let lose = document.getElementById("lose");

                    function PlayMusic(){
                        music.play();

                    }
                    function Stop(){
                        music.pause();
                    }

    let turn = true;

    arrayX=[];
    arrayO=[];
    array=[];
 



buttons.addEventListener('click',(Event)=>{
    Event.preventDefault();
    
   
    let button = Event.target.className

         if (!button.includes("joux"))
    {
          return
    }
         if (button.includes("joux"))
    {
      
        sunGame.play()
    }

   
         if(!Event.target.textContent=="" )
    {
          return
    }
         if(turn == true)
    {
            Event.target.style.background="red";
            Event.target.textContent="x";
            arrayX.push(Event.target.id)
            array.push(Event.target.id)
            document.getElementById("name").textContent=Player1;
            turn=false
    }
         else
    {
            Event.target.style.background="green";
            Event.target.textContent="o"; 
            arrayO.push(Event.target.id)
            array.push(Event.target.id)
            document.getElementById("name").textContent=Player2;
            turn=true
    }
   
           //array de X

          if(arrayX.includes('1') && arrayX.includes('2') && arrayX.includes('3')  )
    {
            document.getElementById("WinnME").style.display = "block";
            document.getElementById("CloseBtn").style.display = "block";
            win.play();       
            return
    }
          if(arrayX.includes('4') && arrayX.includes('5') && arrayX.includes('6')  )
    {
            document.getElementById("WinnME").style.display = "block";
            document.getElementById("CloseBtn").style.display = "block";
            win.play();     
           return
    }

          if(arrayX.includes('7') && arrayX.includes('8') && arrayX.includes('9')  )
    {
            document.getElementById("WinnME").style.display = "block";
            document.getElementById("CloseBtn").style.display = "block";
            win.play();     
            return
    }
          if(arrayX.includes('1') && arrayX.includes('4') && arrayX.includes('7')  )
    {
            document.getElementById("WinnME").style.display = "block";
            document.getElementById("CloseBtn").style.display = "block";
            win.play();
            return
    }
          if(arrayX.includes('2') && arrayX.includes('5') && arrayX.includes('8')  )
    {
            document.getElementById("WinnME").style.display = "block";
            document.getElementById("CloseBtn").style.display = "block";
            win.play();
            return
    }

         if(arrayX.includes('3') && arrayX.includes('6') && arrayX.includes('9')  )
    {
            document.getElementById("WinnME").style.display = "block";
            document.getElementById("CloseBtn").style.display = "block";
            win.play();
            return

    }

         if(arrayX.includes('1') && arrayX.includes('5') && arrayX.includes('9')  )
    {
            document.getElementById("WinnME").style.display = "block";
            document.getElementById("CloseBtn").style.display = "block";
            win.play();
            return
    }

         if(arrayX.includes('3') && arrayX.includes('5') && arrayX.includes('7')  )
    {
            document.getElementById("WinnME").style.display = "block";
            document.getElementById("CloseBtn").style.display = "block";
            win.play();
            return
    }


// array de O
    
        if(arrayO.includes('1') && arrayO.includes('2') && arrayO.includes('3')  )
    {
        
            document.getElementById("WinnMES").style.display = "block";
            document.getElementById("CloseBt").style.display = "block";
            win.play();
            return
    }
         if(arrayO.includes('4') && arrayO.includes('5') && arrayO.includes('6')  )
    {
       
            document.getElementById("WinnMES").style.display = "block";
            document.getElementById("CloseBt").style.display = "block";
            win.play();
            return
    }
         if(arrayO.includes('7') && arrayO.includes('8') && arrayO.includes('9')  )
    {
       
            document.getElementById("WinnMES").style.display = "block";
            document.getElementById("CloseBt").style.display = "block";
            win.play();
            return
    }
         if(arrayO.includes('1') && arrayO.includes('4') && arrayO.includes('7')  )
    {
            document.getElementById("WinnMES").style.display = "block";
            document.getElementById("CloseBt").style.display = "block";
            win.play();
            return
    }
          if(arrayO.includes('2') && arrayO.includes('5') && arrayO.includes('8')  )
    {
       
            document.getElementById("WinnMES").style.display = "block";
            document.getElementById("CloseBt").style.display = "block";
            win.play();
            return
    }
         if(arrayO.includes('3') && arrayO.includes('6') && arrayO.includes('9')  )
    {
            document.getElementById("WinnMES").style.display = "block";
            document.getElementById("CloseBt").style.display = "block";
            win.play();
            return
    }
         if(arrayO.includes('1') && arrayO.includes('5') && arrayO.includes('9')  )
    {
        
            document.getElementById("WinnMES").style.display = "block";
            document.getElementById("CloseBt").style.display = "block";
            win.play();
            return
    }
         if(arrayO.includes('3') && arrayO.includes('5') && arrayO.includes('7')  )
    {
       
            document.getElementById("WinnMES").style.display = "block";
            document.getElementById("CloseBt").style.display = "block";
            win.play();
            return
    }

          if (array.includes('1')&&array.includes('2')&&array.includes('3')&&array.includes('4')&&array.includes('5')&&array.includes('6')&&array.includes('7')&&array.includes('8')&&array.includes('9') ){
            lose.play();
            document.getElementById("WinnM").style.display = "block";
            document.getElementById("closeOPS").style.display = "block";
    }
 
})
// Close X
    function close_()
    {
        document.getElementById("WinnME").style.display = "none";
        location.reload();
    
    }
// Clos O
    function closeO()
    {
        document.getElementById("WinnMES").style.display = "none";
        location.reload();
    
    }
    function closeOPS()
    {
        document.getElementById("WinnM").style.display = "none";
        location.reload();

    }


























// let names =["amina","fatima"];
// console.log(names.length);
// console.log(names)
// names[1]="saht";
// console.log(names)
// names[4]="nora";
// console.log(names)