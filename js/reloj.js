function obtenerFechaHora(){

    let fechaActual =  new Date();
    //muestra la fecha del dispositivo donde se abre
    console.log(fechaActual);
    //DIA 
    console.log(fechaActual.getDate()); //1-31
    
    console.log(fechaActual.getDay());
    //MES
    console.log(fechaActual.getMonth());

    let fecha = document.getElementById('fecha');
    let hora = document.getElementById('hora');

    //jueves X 
    
    const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const monthsOfYear = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    
    fecha.innerHTML = `${daysOfWeek[fechaActual.getDay()]}${fechaActual.getDate()} de ${monthsOfYear[fechaActual.getMonth()]}`
    
    let horaActual = fechaActual.getHours();
    let minutosActuales = fechaActual.getMinutes();
    let segundosActuales = fechaActual.getSeconds();
    

   if(minutosActuales< 10){
    minutosActuales = '0' + minutosActuales;
}
if(segundosActuales< 10){
    segundosActuales = '0' + segundosActuales;
}
if(horaActual< 10){
    horaActual = '0' + horaActual;
}
hora.innerHTML= `${horaActual}: ${minutosActuales}:${segundosActuales}`
}
function cambiarEstilo(color){
    let section = document.getElementById(contenedorPrincipal);
 section.className = 'fs-1' + color
}




//para obtenerlo cada 1000 milisegundos actualizado y funcione el reloj
setInterval(obtenerFechaHora,1000);


//MOSTRAR PA o AM