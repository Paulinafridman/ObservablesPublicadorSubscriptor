/* ------------------------------------------------------- */
/*              Otro ejemplo de Observables                */
/* ------------------------------------------------------- */
const { Observable } = rxjs // es igual a --> const Observable = rxjs.Observable


function espejarInput() {
    const input = document.querySelector('input')
    return new Observable( suscriber => {

        function ateEventInput(){
            let dato = input.value.split('').reverse().join('')
            console.log(dato, '(desde adentro del observale)')
            suscriber.next(dato)
        }
        input.addEventListener('input', ateEventInput)

        return () => {
            console.log('espejarInput desuscripto')
            input.removeEventListener('input', ateEventInput)
        }

    })
}

/* Observable: publicador */
let obsEspejarInput = espejarInput()

/* Observable: suscriptor */
let suscribeEsjar_1 = obsEspejarInput.subscribe(dato => document.querySelectorAll('span')[0].innerText = dato)
let suscribeEsjar_2 = obsEspejarInput.subscribe(dato => document.querySelectorAll('span')[1].innerText = dato)
let suscribeEsjar_3 = obsEspejarInput.subscribe(dato => document.querySelectorAll('span')[2].innerText = dato)

setTimeout(() => {
    suscribeEsjar_1.unsubscribe()
}, 10000)

setTimeout(() => {
    suscribeEsjar_2.unsubscribe()
}, 15000)


setTimeout (() => {
    suscribeEsjar_3.unsubscribe()
},20000)