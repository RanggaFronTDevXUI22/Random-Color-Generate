const containerEl = document.querySelector(".container");

for (let index = 0; index < 50; index++) {
    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("color-container");
    containerEl.appendChild(colorContainerEl);
}

const colorContainerEls = document.querySelectorAll(".color-container");

generateColors();

function generateColors(){
    colorContainerEls.forEach(
        (colorContainerEl)=>{
            const newColorCode = randomColor();
            colorContainerEl.style.backgroundColor = "#" + newColorCode; // FIX 1: pakai .style.backgroundColor
            colorContainerEl.innerText = "#" + newColorCode;
        });
}

function randomColor() {
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let colorCode = "";
    for (let index = 0; index < colorCodeLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        colorCode += chars.substring(randomNum, randomNum + 1);
        // FIX 2: return dipindah ke luar loop
    }
    return colorCode; // FIX 2: nama variabel huruf kecil, dan posisi di luar loop
}