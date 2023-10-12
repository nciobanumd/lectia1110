/* =======================EXERCITIU 2===================== */

const func = (function () {
    console.log("nadia")
    
}())


/*==================== EXERCITIU================ 1 */

/* variabila +1  */
const closure1 = function () {
    let y = 1;
    
    return y+1

}

console.log(closure1())

/* variabila *2  */
const closure2 = function () {
    let z = 3;
    
    return z*2

}

/* variabila -1  */
console.log(closure2())

const closure3 = function () {
    let t = 4;
    
    return t-1

}

console.log(closure3())


/* schimbare de variabila in argument */
const closure = function () {
    let x = 2;
    
    function variabila () {
        return x
    }

    function argument (arg) {
        x = arg
    }
    return [variabila, argument]
}


const [variabila, argument] = closure()

console.log(variabila())
argument(5)
console.log(variabila()) 