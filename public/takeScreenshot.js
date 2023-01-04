const html2canvas = require('html2canvas')
const ss = document.getElementById("save")

function screenshot() {
    html2canvas(document.querySelector("#customize")).then((canvas) => {
        document.body.appendChild(canvas)
    }).catch((err) => {
        console.log(err)
    });
}

ss.addEventListener("click", screenshot)