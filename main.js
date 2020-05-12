/// Modal

let clickMe = document.getElementById("clickMe");
let messageAfterPrompt = document.getElementById("messageAfterPrompt");
let hr = document.querySelectorAll("hr");
let buttonOk = document.getElementById("buttonOk");
let modalWindow = document.getElementById("modalWindow")
let name = "";
console.log(name)

clickMe.onclick = () => {
    name = prompt("What is your name, my friend?");
    if(name !== null && name.length < 30){
        name = name.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
        messageAfterPrompt.innerText = `And now ${name.toString()},you can press "Ok"`
    } else {
        name = "";
        messageAfterPrompt.innerText = "You need to text your name";
    }
};

for (let i = 0; i < hr.length; i++) {
    hr[i].addEventListener('click', function() {
        this.className = "hr";
    });
};

buttonOk.onclick = () =>{
    if(name.length >= 2){
        //modalWindow.parentNode.removeChild(modalWindow);
        modalWindow.className = "removeModal";
    } else {
        messageAfterPrompt.innerText = "You need to text your name";
    }
};

/// Main Content