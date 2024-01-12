/**
 * Estamos en la fábrica de Santa Claus 🎅 creando regalos como si no hubiera un mañana.
 * Pensábamos que no íbamos a llegar pero Jelf Bezos ha tenido una idea genial para aprovechar 
 * las máquinas y optimizar al máximo la creación de regalos. 🎁
 * La configuración de las máquinas es un string. Podemos reconfigurarla para que haga otro regalo 
 * y, para ello, podemos cambiar cada carácter por otro.
 * Pero tiene limitaciones 🥲: al reemplazar el carácter se debe mantener el orden, no se puede asignar 
 * al mismo carácter a dos letras distintas (pero sí a si mismo) y, claro, la longitud del string debe ser el mismo.
 * Necesitamos una función que nos diga si podemos reconfigurar una máquina para que de un regalo pueda pasar
 *  a fabricar otro según las reglas mencionadas.
 */
const canReconfigure = (from, to) => {
    if (typeof from !== "string") throw new Error("from isn't a string")
    if (typeof to !== "string") throw new Error("to isn't a string");

    const sameLength = from.length === to.length;
    if (!sameLength) return false;

    const hasSameUniqueLetters = new Set(from).size === new Set(to).size;
    if (!hasSameUniqueLetters) return false;

    const transformations = {}
    for (let index = 0; index < from.length; index++) {
        const fromLetter = from[index];
        const toLetter = to[index];

        const storedLetter = transformations[fromLetter];
        if (storedLetter && storedLetter !== toLetter) return false;
        transformations[fromLetter] = toLetter;
    }
    return true;
}

export default canReconfigure; 