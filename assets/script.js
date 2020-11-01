window.addEventListener("load", () => {
  let div = document.querySelector("div");
  console.log(div);

  setInterval(() => {
    if (div.textContent !== "Em construção...") {
      const point = document.createTextNode(".");
      div.appendChild(point);
    } else {
      div.innerHTML = "Em construção";
    }
  }, 1000);
});
