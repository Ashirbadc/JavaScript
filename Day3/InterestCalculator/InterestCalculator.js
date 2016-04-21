
      //Event Listener to fire a button
      var event1 = document.getElementById("button1");
      event1.addEventListener('click', myfunction, false);

      //function = set of instructions that can be called repeatedly in a program   
      function myfunction() {
      // get the element that has an id of amount    
      var amount = parseInt(document.getElementById("amount").value);
      // get the element that has an id of month
      var month = parseInt(document.getElementById("month").value);
      // get the element that has an id of interest_rate
      var interest_rate = parseInt(document.getElementById("interest_rate").value);                   
      
      //calculating the interest for over months
      document.getElementById("total").innerHTML = "Each month you will pay " + "£" + (amount*interest_rate/100)/month;
        document.getElementById("totali").innerHTML = "Total interest you will pay " + "£" + (amount*interest_rate/100);
      }
    
      
      
         
      
            
         