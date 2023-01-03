if (document.querySelector("#upload")) {
    var foto = document.querySelector("#upload");
    foto.addEventListener("change", subirFoto)
}
if (document.querySelector(".delPhoto")) {
    var delPhoto = document.querySelector(".delPhoto");
    delPhoto.addEventListener("click", removePhoto)
}

function subirFoto() {
    var uploadFoto = document.querySelector("#upload").value;
    var fileimg = document.querySelector("#upload").files;
    var nav = window.URL || window.webkitURL;
    var contactAlert = document.querySelector('#form_alert');
    if (uploadFoto != '') {
        var type = fileimg[0].type;
        var name = fileimg[0].name;
        if (type != 'image/jpeg' && type != 'image/jpg' && type != 'image/png') {
            contactAlert.innerHTML = `<p class="errorArchivo">El archivo: ${name} no es válido.</p>`;
            if (document.querySelector('#case')) {
                document.querySelector('#case').remove();
            }
            document.querySelector('.delPhoto').classList.add("notBlock");
            foto.value = "";
            return false;
        } else {
            contactAlert.innerHTML = '';
            if (document.querySelector('#case')) {
                document.querySelector('#case').remove();
            }
            document.querySelector('.delPhoto').classList.remove("notBlock");
            var objeto_url = nav.createObjectURL(this.files[0]);
            document.querySelector('#customize').style.backgroundImage = `url(${objeto_url})`
            document.getElementById("save").disabled = false
        }
    } else {
        alert("No se seleccionó ninguna foto");
        if (document.querySelector('#img')) {
            document.querySelector('#img').remove();
        }
    }
}

function removePhoto() {
    document.querySelector('#upload').value = "";
    document.querySelector('#customize').style.backgroundImage = "none";
    document.querySelector('#save').disabled = true
}