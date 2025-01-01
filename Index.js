const bodysec = document.querySelector("body");
bodysec.addEventListener("mousemove", (event) => {
  const xaxis = event.offsetX;
  const yaxis = event.offsetY;
  const span = document.createElement("span");
  span.style.left = xaxis + "px";
  span.style.top = yaxis + "px";
  const size = Math.random() * 100;
  span.style.width = size + "px";
  span.style.height = size + "px";
  bodysec.appendChild(span);
  setTimeout(() => {
    span.remove();
  }, 3000);
});
