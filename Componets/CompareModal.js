//showcompareModal takes a string and an HTML object
export default function showcompareModal(header, teamA, teamB) {
    let mycompareModal = document.getElementById("mycompareModal");
    mycompareModal.innerHTML = "";
    let compareModalContent = document.createElement("div");
    compareModalContent.setAttribute("class", "compareModal-content");
  
    let compareModalHeader = document.createElement("div");
    compareModalHeader.setAttribute("class", "compareModal-header");
  
    let compareModalExit = document.createElement("span");
    compareModalExit.setAttribute("class", "close");
    compareModalExit.innerText = "x";
  
    compareModalHeader.appendChild(compareModalExit);
    compareModalHeader.append(header);
  
    let compareModalBody = document.createElement("div");
    compareModalBody.setAttribute("class", "compareModal-body");
  
    compareModalBody.appendChild(teamA)
    compareModalBody.appendChild(teamB)
    
    let compareModalFooter = document.createElement("div");
    compareModalFooter.setAttribute("class", "compareModal-footer");
  
    compareModalContent.appendChild(compareModalHeader);
  
  
    compareModalContent.appendChild(compareModalBody);
  
    compareModalFooter.innerText = "www.fpltoolbox.com";
    compareModalContent.appendChild(compareModalFooter);
  
    mycompareModal.appendChild(compareModalContent);
    document.getElementById("mycompareModal").style.display = "block";
  
    // Get the compareModal
    var compareModal = document.getElementById("mycompareModal");
  
    // Get the <span> element that closes the compareModal
    var span = document.getElementsByClassName("close")[0];
  
    // When the user clicks on <span> (x), close the compareModal
    span.onclick = function () {
      compareModal.style.display = "none";
    };
  
    // When the user clicks anywhere outside of the compareModal, close it
    window.onclick = function (event) {
      if (event.target == compareModal) {
        compareModal.style.display = "none";
      }
    };
  }
  