export default function createOption(settingName, settingSubtitle, iconName, divID) {
    let div = document.createElement("div");
    div.setAttribute("class", "settings-option");
  
    let divLeft = document.createElement("div");
    let divRight = document.createElement("i");
  
    let divLeftUpper = document.createElement("p");
    divLeftUpper.setAttribute("class", "left-upper");
    divLeftUpper.innerText = settingName;
    divLeft.appendChild(divLeftUpper);
  
    let divLeftLower = document.createElement("p");
    divLeftLower.setAttribute("class", "left-lower");
    divLeftLower.setAttribute("id", settingSubtitle);
    divLeftLower.innerText = settingSubtitle;
    divLeft.appendChild(divLeftLower);
  
    divRight.setAttribute("class", "material-icons");
    divRight.setAttribute("id", divID);
    divRight.innerHTML = iconName;
  
    div.appendChild(divLeft);
    div.appendChild(divRight);
    document.getElementById("screen").appendChild(div);
  }