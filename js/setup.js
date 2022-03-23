function setup(){


            var firstletter = 'A'        

            var secondletter = 'B'        
        
            var thirdletter = 'C'        
    
  
        
     document.getElementById("myModal").innerHTML = (
          '<div class="modal-content">' +
          '<p class="exitbutton" onclick="exit()">&#9746;</p>'+
          '<p>' + firstletter + '</p>' +
                   firstletter + '<br>' +
          firstletter + '<br>' +
          '<p>Overall average ' + firstletter + '</p>' +
          'Most often used letters = ' + firstletter + secondletter + thirdletter + '<br>' +
          firstletter +
        '</div>'
      )
      modal.style.display = "block";
      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";      
      }
    } 
    }
    

    