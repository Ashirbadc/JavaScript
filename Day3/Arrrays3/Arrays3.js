
      //Event Listener to fire a button
      var event1 = document.getElementById("button1");
      event1.addEventListener('click', myfunction, false);

      //function = set of instructions that can be called repeatedly in a program   
      function myfunction() {
      
      // Arrays    
      var fruits = new Array( document.getElementById("input1").value,  document.getElementById("input2").value, document.getElementById("input3").value);
          
      document.getElementById("demo").innerHTML = fruits[0] + " , " + fruits[1] + " , " + fruits[2];
     
      //fruits.unshift("mangos", "grapes");
      //document.getElementById("demo").innerHTML = fruits; 
      fruits.shift("mangos", "grapes");
      document.getElementById("demo").innerHTML = fruits;    
          
      // push method adds new items on the end of array & return the length    
      //computer.push("pears");
      // document.getElementById("demo").innerHTML = fruits + " " + fruits.length;  
      
      
      
      }
    
      
      
         
      
            
         