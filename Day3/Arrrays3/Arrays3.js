
      //Event Listener to fire a button
      var event1 = document.getElementById("button1");
      event1.addEventListener('click', myfunction, false);

      //function = set of instructions that can be called repeatedly in a program   
      function myfunction() {
      var computer = new Array( document.getElementById("input1").value,  document.getElementById("input2").value,  document.getElementById("input3").value);
          
      document.getElementById("demo").innerHTML = computer[0] + " , " + computer[1] + " , " + computer[2];
          
      computer.push("disk");
      document.getElementById("demo").innerHTML = computer + " " + computer.length;  
    
  
      
      }
    
      
      
         
      
            
         