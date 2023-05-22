// archivo2.js
import { objetoOriginal } from "./archivo1";

import { arrayOriginal} from "./archivo1";

const segundoObjeto = {
    ...objetoOriginal
  }
  
console.log(objetoOriginal.nombre)
console.log(objetoOriginal.edad)
segundoObjeto.nombre = "Oscar"
console.log(segundoObjeto.nombre)
console.log(segundoObjeto.edad)

const segundoArray = [
    ...arrayOriginal, 2, 3
]

console.log(arrayOriginal)
console.log(segundoArray)
