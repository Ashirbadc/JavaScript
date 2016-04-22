// Event Listener to fire button
var event1=document.getElementById("button1");
event1.addEventListener('click', CalculateBmi, false);
//can be called repeatedly from anywhere from the program 
function CalculateBmi(){
 // alert("Hi") 
var TotalBMI = weight / height;    
        
var TotalBMI = parseInt(document.getElementById("weight").value);
// alert weight
var TotalBMI = parseInt(document.getElementById("height").value);    
// alert height
    
if(TotalBMI < 18.5){
    //run this code if userinput BMI is less than 18.5
document.getElementById("BMI").innerHTML = "Your are too thin! " + TotalBMI;
    
}
else if(TotalBMI > 18.5 && TotalBMI <= 24.9){
    ///run this code if userinput BMI is in between 18.5 to 24.9
document.getElementById("BMI").innerHTML = "Excellent!!" + TotalBMI;

}
else if(TotalBMI > 24.9 && TotalBMI <= 29.9){
    // run this code if userinput BMI is in between 25 to 29.99
document.getElementById("BMI").innerHTML = "Just few more excercises is you may need!" + TotalBMI;
    
} 
else{
    //run this code if userinput BMI is more than 30
document.getElementById("BMI").innerHTML = "Your weight is too bad for you!!" + TotalBMI;
} 


} //end of function
