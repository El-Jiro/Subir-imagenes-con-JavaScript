if (document.querySelector("#foto")) {
    var foto = document.querySelector("#foto");
    foto.onchange = function(e) {
        var uploadFoto = document.querySelector("#foto").value;
        var fileimg = document.querySelector("#foto").files;
        var nav = window.URL || window.webkitURL;
        var contactAlert = document.querySelector('#form_alert');
        if (uploadFoto != '') {
            var type = fileimg[0].type;
            var name = fileimg[0].name;
            if (type != 'image/jpeg' && type != 'image/jpg' && type != 'image/png' && type != 'image/gif') {
                contactAlert.innerHTML = '<p class="errorArchivo">El archivo no es válido.</p>';
                if (document.querySelector('#img')) {
                    document.querySelector('#img').remove();
                }
                document.querySelector('.delPhoto').classList.add("notBlock");
                foto.value = "";
                return false;
            } else {
                contactAlert.innerHTML = '';
                if (document.querySelector('#img')) {
                    document.querySelector('#img').remove();
                }
                document.querySelector('.delPhoto').classList.remove("notBlock");
                var objeto_url = nav.createObjectURL(this.files[0]);
                document.querySelector('.prevPhoto div').innerHTML = "<img id='img' src=" + objeto_url + ">";
            }
        } else {
            alert("No selecciono foto");
            if (document.querySelector('#img')) {
                document.querySelector('#img').remove();
            }
        }
    }
}

if (document.querySelector(".delPhoto")) {
    var delPhoto = document.querySelector(".delPhoto");
    delPhoto.onclick = function(e) {
        removePhoto();
    }
}

function removePhoto() {
    document.querySelector('#foto').value = "";
    document.querySelector('.delPhoto').classList.add("notBlock");
    document.querySelector('#img').remove();
}