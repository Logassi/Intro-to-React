function updateText(){
    const text = document.getElementById("mauUpdateTextH1BagianIni");
    const button = document.getElementById("buttonUntukUpdateH1");

    // console.log(text);

    if(text.innerText === "Updated Javascript DOM"){
        text.innerText = "Javascript DOM";
    }else{
        text.innerText = "Updated Javascript DOM";
    }

    if(button.innerText === "Revert text"){
        button.innerText = "Update text";
    }else{
        button.innerText = "Revert text";
    }

    console.log("this is innerText = " + text.innerText);
    console.log("this is textContent = " + text.textContent);

}


function addElement(){
    const element = document.getElementById("container");

    const newElement = document.createElement("h5");
    newElement.textContent = "Ini Element Baru";
    element.appendChild(newElement);
}