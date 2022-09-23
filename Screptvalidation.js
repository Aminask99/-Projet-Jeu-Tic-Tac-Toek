function enter(){
                                        
    let Player1 = document.getElementById("Player1").value;
    let Player2 = document.getElementById("Player2").value;

            localStorage.setItem("user1",Player1)
            localStorage.setItem("user2",Player2)

                if(!Player1 =="" && !Player2 == ""){
                
                window.open('xO.html');
              
                }


}