const copyButtons = document.querySelectorAll(".copyButton");

copyButtons.forEach((button, index) => {
  button.addEventListener("click", function () {
    const parentDiv = button.closest(".copyDiv");
    const textToCopy = parentDiv.querySelector("p").textContent;
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = textToCopy;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);
  });
});
