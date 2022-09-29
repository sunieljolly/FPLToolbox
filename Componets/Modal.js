//showModal takes a string and an HTML object
export default function showModal(header, body) {
  let myModal = document.getElementById("myModal");
  myModal.innerHTML = "";
  let modalContent = document.createElement("div");
  modalContent.setAttribute("class", "modal-content");

  let modalHeader = document.createElement("div");
  modalHeader.setAttribute("class", "modal-header");

  let modalExit = document.createElement("span");
  modalExit.setAttribute("class", "close");
  modalExit.innerText = "x";

  modalHeader.appendChild(modalExit);
  modalHeader.append(header);

  let modalBody = document.createElement("div");
  modalBody.setAttribute("class", "modal-body");

  modalBody.appendChild(body)
  
  let modalFooter = document.createElement("div");
  modalFooter.setAttribute("class", "modal-footer");

  modalContent.appendChild(modalHeader);


  modalContent.appendChild(modalBody);

  modalFooter.innerText = "www.fpltoolbox.com";
  modalContent.appendChild(modalFooter);

  myModal.appendChild(modalContent);
  document.getElementById("myModal").style.display = "block";

  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}
