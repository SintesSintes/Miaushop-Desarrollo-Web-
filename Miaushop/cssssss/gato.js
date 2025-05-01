var mostrador = document.getElementById("mostrador");
var seleccion = document.getElementById("seleccion");
var imgSeleccionada = document.getElementById("img");
var modeloSeleccionado = document.getElementById("modelo");
var descripSeleccionada = document.getElementById("descripcion");
var precioSeleccionado = document.getElementById("precio");

//se llama cuando seleccionas un producto, mostrando su información y resaltando el producto seleccionado.
function cargar(item){
    quitarBordes();
    mostrador.style.width = "60%";
    seleccion.style.width = "40%";
    seleccion.style.opacity = "1";
    item.style.border = "2px solid red";

    imgSeleccionada.src = item.getElementsByTagName("img")[0].src;

    modeloSeleccionado.innerHTML =  item.getElementsByTagName("p")[0].innerHTML;

    precioSeleccionado.innerHTML =  item.getElementsByTagName("span")[0].innerHTML;


}
// se usa para ocultar la información del producto seleccionado.
function cerrar(){
    mostrador.style.width = "100%";
    seleccion.style.width = "0%";
    seleccion.style.opacity = "0";
    quitarBordes();
}
//elimina los bordes de todos los productos, asegurando que solo el seleccionado esté resaltado.
function quitarBordes(){
    var items = document.getElementsByClassName("item");
    for(i=0;i <items.length; i++){
        items[i].style.border = "none";
    }
}