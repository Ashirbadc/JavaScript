
//EVENT LISTENER - invokes the myfirst function when the button is clicked 
var event1 = document.getElementById("button1");
event1.addEventListener('click',myfirst,false);

 
//function = set of instructions that can be called repeatedly in a program  
function myfirst(){
<<<<<<< HEAD
   //alert("event listener is working");
    

var userinput1 = parseInt(document.getElementById("input1").value);
//alert("userinput1");


document.getElementById("answer1").innerHTML = (userinput1 - 1);
document.getElementById("answer2").innerHTML = (userinput1 + 1) ;
}


    
 // ENd OF fUNCTION
=======
 //  alert("event listener is working");
    
//User input x - storing the users input into a local variable called userinputx
var userinput = parseInt(document.getElementById("input1").value);
//alert("userinput");

var y = userinput + 1;
var z = userinput - 1; 
  
 //   document.getElementById("answer").innerHTML = y + " , " + z;
   document.getElementById("answer").innerHTML = (userinput + 1) + "," + (userinput - 1);
 
  
    
    
} //end of function    

>>>>>>> origin/master
