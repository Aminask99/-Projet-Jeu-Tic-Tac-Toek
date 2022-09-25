const formEnter = e =>{
    let user1 =document.getElementById("Player1").value;
    let user2 =document.getElementById("Player2").value;
    e.preventDefault();
            localStorage.setItem("Player1",user1);
            localStorage.setItem("Player2",user2);

            if( !user1 =="" && !user2 == ""){
                window.open('xO.html');

            }

    

}






































// function enter(e){
                                        
//     let Player1 = document.getElementById("Player1").value;
//     let Player2 = document.getElementById("Player2").value;
//        h1 = document.querySelector("h1");
//        h1.innerHTML=localStorage.getItem('user1')
//        h2 = document.querySelector("h2");
      
//        h2.innerHTML=localStorage.getItem('user2')

//             localStorage.setItem("user1",Player1)
//             localStorage.setItem("user2",Player2)

//             console.log(localStorage.getElementBy('user1'));
//             e.p
//             h1.innerHTML=localStorage.getItem('user1')
//             h2.innerHTML=localStorage.getItem('user2')

//                 if(!Player1 =="" && !Player2 == ""){
                
//                 window.open('xO.html');
                
              
//                 }
//         }
       
            
           
