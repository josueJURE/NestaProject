

const poemParagraph = document.getElementById("poem-paragraph");
const userInput = document.getElementById("user-input");
const button = document.getElementById("btn");

console.log("userInput.value", userInput.value);

button.addEventListener("click", () => {
    console.log("userInput.value", userInput.value);
  fetch("/get-poem", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ input: userInput.value }),
  })
    .then((response) => response.json())
    .then((data) => {
      data.poem.split("\n").forEach((line) => {
        const span = document.createElement("span");
        span.textContent = line;
        poemParagraph.appendChild(span);
      });
    });
    userInput.value = ''
});
