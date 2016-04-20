
//EVENT LISTENER - invokes the myfirst function when the button is clicked 
var event1 = document.getElementById("button1");
<<<<<<< HEAD
event1.addEventListener('click',myfirst,false);
=======
event1.addEventListener('click', myfirst, false);
>>>>>>> origin/master

 
//function = set of instructions that can be called repeatedly in a program  
function myfirst(){
<<<<<<< HEAD
   //alert("event listener is working");
    

var userinput1 = parseInt(document.getElementById("input1").value);
//alert("userinput1");
var userinput2 = parseInt(document.getElementById("input2").value);

if (userinput1 > 10 && userinput2 > 10){
    document.getElementById("answer1").innerHTML= "both greater";
}    
    
else if (userinput1 > 10){
    document.getElementById("answer1").innerHTML= "first greater";
    
}
else if (userinput2 > 10){
    document.getElementById("answer1").innerHTML= "second greater";
    
}



}

//end of function
=======
 // alert("event listener is working");
    
// var userinputx - storing the users input into a local variable represented by "userinputx"
var userinput1 = parseInt(document.getElementById("input1").value);
var userinput2 = parseInt(document.getElementById("input2").value);

    //displays whether numbers are more or less than 10
if (userinput1 > 10 && userinput2 > 10) {
    document.getElementById("answer").innerHTML = "both more than 10";
} else if (userinput1 > 10) {
    document.getElementById("answer").innerHTML = "first number more than 10";
} else {
    document.getElementById("answer").innerHTML = "second number more than 10";
}  

    
  

    
  
  
    
    
} //end of function    

    
>>>>>>> origin/master
