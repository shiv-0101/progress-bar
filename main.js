let i = 0;

function progress() {
  if (i == 0) {
    i = 1;
    const elem = document.getElementById("progressBar");
    let width = 1;
    let id = setInterval(frame, 15);
    
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}