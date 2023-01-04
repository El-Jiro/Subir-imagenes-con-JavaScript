const ss = document.getElementById("save")

function takeScreenshot() {
    const element = document.getElementById("customize")
    html2canvas(element).then((canvas) => {
        canvas.toBlob((blob) => {
            window.saveAs(blob, "AnnyCases")
        })
    }).catch((err) => {
        console.log(err)
    });
}
ss.addEventListener("click", takeScreenshot)