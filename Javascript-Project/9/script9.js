
//EVENT LISTENER - invokes the myfirst function when the button is clicked 
var event1 = document.getElementById("button1");
event1.addEventListener('click',myfirst,false);

 
//function = set of instructions that can be called repeatedly in a program  
function myfirst(){
<<<<<<< HEAD
   //alert("event listener is working");
    

var userinput1 = parseInt(document.getElementById("input1").value);
//alert("userinput1");
    
if (userinput1 > 10) {
   document.write("greater than 10"); 
    
}
else if (userinput1 < 0) {
   document.write("negative");
}
else {
    
    document.write("its less than 10");
}
    
//document.getElementById("answer1").innerHTML = ;

}

    
 // ENd OF fUNCTION
=======
 // alert("event listener is working");
    
// var userinput - storing the users input into a local variable represented by "userinput"
var userinput = parseInt(document.getElementById("input1").value);

    //displays if number is more than 10, less than 10 or negative
if (userinput < 0) {
    document.getElementById("answer").innerHTML = "negative";
} else if (userinput < 10) {
    document.getElementById("answer").innerHTML = "under 10";
} else {
    document.getElementById("answer").innerHTML = "over 10";
}  

  

    
  
  
    
    
} //end of function    

    
>>>>>>> origin/master
