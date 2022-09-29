export default function showToast(message) {
    document.getElementById("toast-bar").innerHTML = message;
    // Get the snackbar DIV
    var x = document.getElementById("toast-bar");
  
    // Add the "show" class to DIV
    x.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 3500);
  }