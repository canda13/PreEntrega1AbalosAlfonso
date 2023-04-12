alert("Buenas!! Para calcular el promedio de su asignatura haga click en aceptar!");
let asignatura = prompt("Escriba el nombre de la asignatura:");

function cuenta(){
    let cuenta = 0;

    for(let i = 0; i < 3; i++){
        let calculo = parseInt(prompt("Por favor ingrese tres calificaciones:"));

        if (calculo < 1 || calculo > 10){
            alert("Por favor ingrese nuevamente:");
            i--;
        } else {
            cuenta = cuenta + calculo
        }
    }

    return cuenta / 3;
}
    
let promedio = cuenta();

if(promedio >= 8){
    alert("Felicidades! El promedio de " + asignatura + " es: " + promedio + ". Podes irte de vacaciones al caribe!!.");
} 
else{
    alert("Lo siento. Tu promedio de " + asignatura + " es: " + promedio + ". Lo siento. Tendras que quedarte en casa estudiando para el final!, fuerzas!!");
}
    




