//console.log(location.search)     // lee los argumentos pasados a este formulario
var args = location.search.substring(1).split('&');  
//separa el string por los “&” creando una lista [“id=3” , “nombre=’tv50’” , ”precio=1200”,”evento=20”]
console.log(args)
var parts = []
for (let i = 0; i < args.length; ++i) {
    parts[i] = args[i].split('=');
}
//decodeUriComponent elimina los caracteres especiales que recibe en la URL 
document.getElementById("txtId").value = decodeURIComponent(parts[0][1])
document.getElementById("txtNombre").value = decodeURIComponent(parts[1][1])
document.getElementById("txtPrecio").value = decodeURIComponent(parts[2][1])
document.getElementById("txtEvento").value =decodeURIComponent(parts[3][1])
document.getElementById("txtImagen").value = parts[4][1]


function modificar() {
    let id = parseInt(document.getElementById("txtId").value)
    let n = document.getElementById("txtNombre").value
    let p = parseFloat(document.getElementById("txtPrecio").value)
    let e = document.getElementById("txtEvento").value
    let i = document.getElementById("txtImagen").value
    let producto = {
        nombre: n,
        precio: p,
        evento: e,
        imagen: i
    }
    let url = "http://nanN.pythonanywhere.com/productos/"+ id
    var options = {
        body: JSON.stringify(producto),
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("modificado")
            alert("Servicio modificado con exito")
            window.location.href = "servicios.html";  //volver a la pag servicios 
        })
        .catch(err => {
            //this.errored = true
            console.error(err);
            alert("Error al modificar datos del servicio")
        })      
}