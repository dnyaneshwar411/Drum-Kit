for (i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleclick);
}

function handleclick() {
    var buttoninnerHtml = this.innerHTML;
    makesound(buttoninnerHtml);
}


document.addEventListener("keypress", function (event) {
    makesound(event.key);
})

function makesound(key) {
    switch (key) {
        case "w":
            var audio = new Audio('Sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('Sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('Sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('Sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('Sounds/snare.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('Sounds/crash.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('Sounds/kick-bass.mp3');
            audio.play();
            break;

        default:
            console.log("This Audio is not available");
            break;
    }
}