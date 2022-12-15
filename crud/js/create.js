function guardar() {
 
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
    let url = "https://nanN.pythonanywhere.com/productos"
    var options = {
        body: JSON.stringify(producto),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
       // redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("creado")
            alert("Servicio creado con exito")
            window.location.href = "servicios.html";   //volver a la pag servicios
            // Handle response we get from the API
        })
        .catch(err => {
            //this.errored = true
            alert("Error al crear servicio" )
            console.error(err);
        })
 
}
