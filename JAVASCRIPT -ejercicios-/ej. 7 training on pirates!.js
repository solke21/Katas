/*
¡Hola amigo!

Bienvenido a los siete mares.

Eres el capitán de un barco pirata.

Estás en batalla contra la marina real.

Tienes cañones listos... ¿o no?

Tu tarea es verificar si los artilleros están cargados y listos, si lo están:Fire!

Si no están listos:Shiver me timbers!

Sus artilleros para cada caso de prueba son 4 o menos.

Cuando verifica si están listos, sus respuestas están en un diccionario y serán: ayeonay

Disparar con menos de todos los artilleros listos no es óptimo (¡esto no es disparar a voluntad, es disparar por orden del capitán o caminar por la tabla, sucio lobo de mar!)

Si todas las respuestas son 'sí', entonces ¡Fuego! si uno o más son 'no' entonces ¡Tiemblame de madera!

*/

const cannonsReady = (gunners) => {
    return Object.values(gunners).every(response => response === 'aye') ?
        'Fire!' :
        'Shiver me timbers!'
}