
//EVENT LISTENER - invokes the myfirst function when the button is clicked 
var event1 = document.getElementById("button1");
event1.addEventListener('click',myfirst,false);

 
//function = set of instructions that can be called repeatedly in a program  
function myfirst(){
<<<<<<< HEAD
   //alert("event listener is working");
    

var userinput1 = parseInt(document.getElementById("input1").value);
//alert("userinput1");
    
var userinput2 = parseInt(document.getElementById("input2").value);
var userinput3 = parseInt(document.getElementById("input3").value);


document.getElementById("answer1").innerHTML = ((userinput1 + userinput2) * userinput3) - (userinput1 + userinput2 + userinput3);

}

    
 // ENd OF fUNCTION
=======
 // alert("event listener is working");
    
// var a/b/c - storing the users input into a local variable represented by a lowercase letter
var a = parseInt(document.getElementById("input1").value);
var b = parseInt(document.getElementById("input2").value);
var c = parseInt(document.getElementById("input3").value);

var y = (a + b) * c;
var z = (a + b + c); 
  

    document.getElementById("answer").innerHTML = y - z;
  
  
    
    
} //end of function    

    
>>>>>>> origin/master
