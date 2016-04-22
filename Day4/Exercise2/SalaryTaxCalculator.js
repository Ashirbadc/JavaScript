// EVENT LISTENER
var event1 = document.getElementById("button1");
event1.addEventListener('click', CalculateSalary, false);

//function invoked with button clicked
function CalculateSalary(){
    
    var taxtwenty = 0;
    var taxfourty = 0;
    

    //collecting the amount  
    var userinput1 = parseInt(document.getElementById("input1").value) 
    document.getElementById("GrossSalary").innerHTML = "your gross salary is " + "£" + userinput1 ;

    if(userinput1 <= 10600){
     // run the code if amount is less than 10600
    document.getElementById("TaxFreeAllowance").innerHTML = "your tax free allownce is " + "£" + userinput1;

          }
    else if(userinput1 > 10600 && userinput1 <= 31000){
        // run the code if amount is in between 10000 and 31000
         taxtwenty = (userinput1-10000) * .20;
    document.getElementById("Taxat20%").innerHTML = "Your tax at 20% is " + "£" + userinput1;
      
    }
    else{
       // run the code if amount is greater than 31000 
        taxfourty = (userinput1 - taxtwenty) * .40;
        
    document.getElementById("Taxat40%").innerHTML = "Your tax at 40% is " + "£" + userinput1;
    }
    totalNet = (taxfourty + taxtwenty) - userinput1;
    document.getElementById("NetSalary").innerHTML = "The total Net salary is " + "£" + userinput1 ;
}
  

    
    
    
    






