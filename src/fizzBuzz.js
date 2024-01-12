/**
 * Escriba una funcion que al pasarle un numero  
 * - muestra "fizz" si es multiplo de tres 
 * - muestra "buzz" si es multipo de cinco
 * - muestra "fizzBuzz" si es multiplo de tres y cinco 
 * - muestra el numero si no es multiplo de ninguno 
 */
const FizzBuzz = (number) => {
    if (typeof number !== "number") throw new Error("It isn't a number");
    if (Number.isNaN(number)) throw new Error("It isn't a number. Is NaN");
    const multiplies = { 3: "fizz", 5: "buzz", 7: "woff" };
    let output = '';
    Object.entries(multiplies).forEach(([multiplier, word]) => {
        if (number % multiplier === 0) return output += word;
    })
    return output === '' ? number : output;
}

export default FizzBuzz; 