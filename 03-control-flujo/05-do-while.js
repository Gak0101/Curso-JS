// while  bucle que se ejecuta mientras la condicion sea verdadera,
// si la condicion es falsa no se ejecuta ni una sola vez

let i = 2;
while (i < 10) {
    if (i % 2 == 0) {

    console.log('Numero par', i);

    }
        i++;
    
}

// do while se ejecuta al menos una vez, aunque la condicion sea falsa
do { // Primero ejecuta desde arriba y luego lo comprueba abajo
    if ( i % 2 == 0){
        console.log ('Numero par', i);
    } i++;

} while (i <10); //Aqui es donde hace o evalua la condicion