
//EVENT LISTENER - invokes the myfirst function when the button is clicked 
var event1 = document.getElementById("button1");
event1.addEventListener('click',myfirst,false);

 
//function = set of instructions that can be called repeatedly in a program  
function myfirst(){
<<<<<<< HEAD
   //alert("event listener is working");
    

=======
 //  alert("event listener is working");
    
//User input x - storing the users input into a local variable called userinputx
>>>>>>> origin/master
var userinput1 = parseInt(document.getElementById("input1").value);
//alert("userinput1");
var userinput2 = parseInt(document.getElementById("input2").value);
//alert("userinput2");

<<<<<<< HEAD

 // Testing the condition   
 if (userinput1 == userinput2) {
    document.getElementById("answer").innerHTML = "same";
     
} else {
    document.getElementById("answer").innerHTML = "different";
    
 }
}


    
 // ENd OF fUNCTION
=======
 //if specifies a block of code to be executed if a specified condition is true, else specifies a block of code to be executed if that condition is false   
 if (userinput1 == userinput2) {
    document.getElementById("answer").innerHTML = "same";
} else { 
    document.getElementById("answer").innerHTML = "different";
}    
  
    
    
} //end of function    

    
>>>>>>> origin/master
