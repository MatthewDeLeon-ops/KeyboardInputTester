var output = document.getElementById("output-message");
var input = document.getElementById("input");
input.addEventListener("keydown", function (e) {
    var keyname = e.key;
    var outputMessage = "".concat(keyname, " key is pressed");
    output.style.color = "blue";
    output.innerText = outputMessage;
});
