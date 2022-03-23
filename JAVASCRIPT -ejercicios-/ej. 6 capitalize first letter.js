// modificar texto para que la primera letra de la frase aparezca en mayúscula

const text = 'this is a test'

const capitalizeFirst = function(text) {
    // extraer la primera letra
    const firstLetter = text[0]
        // poner en mayúscula la primera letra
    const firstCapitalized = firstLetter.toUpperCase()
        // obtener el resto de la cadena
    const rest = text.slice(1)
    console.log('> cómo vamos: ', rest)
        //return firstCapitalized.concat(rest)
    return text[0].toUpperCase() + text.slice(1)
}

window.onload = function() {
    main()
}

const main = function() {
    const p = document.querySelector('.text')
    p.innerText = capitalizeFirst(text)
}