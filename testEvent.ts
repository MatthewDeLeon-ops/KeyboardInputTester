const output = document.getElementById("output-message");
const input = document.getElementById("input");

input.addEventListener("keydown", (e) => {
  const keyname = e.key;
  const outputMessage = `${keyname} key is pressed`;
  output.style.color = "green";
  output.innerText = outputMessage;
});
