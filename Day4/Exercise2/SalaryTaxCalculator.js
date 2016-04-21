// EVENT LISTENER
var event1=document.getElementById("button1");
event1.addEventListener('click', calculate_tax, false);

//function invoked with button clicked
function calculate_tax(){
   
    Tax free allownce = 0;
    Tax at 20% = 0;
    Tax at 40% = 0;
    
   //collecting the amount  
   var amount = parseInt(document.getElementById("calculate_tax").value); 
    
    if(amount <= 10600){
     // run the code if amount is less than 10000
          }
    else if(amount > 10000 && amount <= 31000){
    // run the code if amount is in between 10000 and 31000
    
        
    }
    else{
        
    }
    
    document.getElementById("Tax free allowance").innerHTML = "your tax free allownce is " + amount ;
    document.getElementById("Tax at 20%").innerHTML = "Your tax at 20% is " + amount ;
    document.getElementById("Tax at 40%").innerHTML = "Your tax at 40% is " + amount ;
    document.getElementById("Net salary").innerHTML = "The total Net salary is " + amount ;
}
  

    
    
    
    






