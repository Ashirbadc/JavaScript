 //Event listener to fire the button
     var event1 = document.getElementById("button1");
     event1.addEventListener('click', checkguess, false);
    
     //generate random number
     var randomnumber = Math.floor((Math.random() * 100) + 1);
    //document.getElementById("rn").innerHTML = "random number is: " + randomnumber;

     var countguesses = 0; 
    
    
     //function invoked with button clicked
     function checkguess(){
        //alert("EL works");
        
        //collecting the user guess
        var userguess = parseInt(document.getElementById ("input1").value);

        // testing user guess
        // document.getElementById("ug").innerHTML = "userguess number is: " + userguess;

        
       //PROGRAM FLOW TO TEST USERGUESS AGAINST RANDOMNUMBER    
       //compare the userguess to the randomnumber
        if (userguess === randomnumber) {
         //the numbers are the the same - guess is correct
         countguesses = countguesses + 1;    
             document.getElementById("userfeedback").innerHTML = "Success! Your guess is correct <br> You had <B> " + countguesses + " </B> guesses to get this right." ;
            
        } else if(userguess < randomnumber){
            // the userguess is too small
            countguesses = countguesses + 1;
               document.getElementById("userfeedback").innerHTML = "Your guess is smaller than the magic number! <br> You have had <B> " + countguesses + " </B> guesses so far!" ;
            
        } else {
           //userguess is larger than the random number
             countguesses = countguesses + 1;
               document.getElementById("userfeedback").innerHTML = "Your guess is higher than the magic number! <br> You have had <B> " + countguesses + " </B> guesses so far!" ;

        
        }
        
        
        
        
        
        
        } //closing bracket of the function
    