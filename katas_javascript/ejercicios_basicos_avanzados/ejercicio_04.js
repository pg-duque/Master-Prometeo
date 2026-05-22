//Dado el siguiente array:

    const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

//4.1 - Saca a "Tendo" por consola atacando su posición.

    console.log(aldeanos[3]);

//4.2 - Coloca en el último lugar de este array a "Cervasio".

    aldeanos.push("Cervasio");

//4.3 - Cambia el primer elemento de este array por "Bambina".

    aldeanos[0] = "Bambina";

//4.4 - Dale la vuelta a este array.

    aldeanos.reverse();

//4.5 - Cambia a "Narciso" por "Canela" haciendo uso de un método de array.

    // Buscamos la posición en el array con indexOf
    const indice = aldeanos.indexOf("Narciso");
    // Con splice, pasamos el index que hemos obtenido, le decimos que queremos
    // hacer el splice borrando un solo elemento con el 1 y lo sustituimos
    // por "Canela"
    aldeanos.splice(indice, 1, "Canela");

//4.6 - Imprime por consola el último elemento de este array sin atacar a la posición explicitamente
// Pista: puedes usar el método length con algo más para ello.

    // Atacamos a la posicion -1 de la longitud del array, osea la última
    // Me estaba rallando al darnos "Bambina", luego me he acordado de que
    // le hemos dado la vuelta al array
    console.log(aldeanos[aldeanos.length - 1]);

