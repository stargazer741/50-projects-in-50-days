const smallCups =
  document.querySelectorAll(".cup-small"); /* added all the small cups */
const liters = document.getElementById("liters"); /* added liters text */
const percentage =
  document.getElementById("percentage"); /* added percentage text */
const remained = document.getElementById("remained"); /* added remained text */

updateBigCup();

smallCups.forEach((cup, indx) => {
  /* smallCups node listindeki tüm elemanlar için çalışan iki parametreli bir döngü */
  cup.addEventListener("click", () =>
    highlightCups(indx)
  ); /* her bir cup'a tıklamayı algılayan bir eventListener ve olay gerçekleştiğinde çalışacak fonksiyon. */
});

function highlightCups(indx) {
  if (
    smallCups[indx].classList.contains("full") &&
    !smallCups[indx].nextElementSibling.classList.contains("full")
  ) {
    indx--;
  }

  smallCups.forEach((cup, indx2) => {
    if (indx2 <= indx) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });

  updateBigCup();
}

function updateBigCup() {
    const fullCups = document.querySelectorAll(".cup-small.full").length;
    const totalCups = smallCups.length;

    if(fullCups === 0) {
        percentage.style.visibility = "hidden";
        percentage.style.height = 0;
    } else {
        percentage.style.visibility = "visible";
        percentage.style.height = `${fullCups / totalCups * 330}px`;
        percentage.innerHTML = `${fullCups / totalCups * 100}%`;
    }

    if(fullCups === totalCups) {
        remained.style.visibility = "hidden";
        remained.style.height = 0;
    } else {
        remained.style.visibility = "visible";
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
}