export {};

/**
 * If you find yourself stuck with this exercise, perhaps a more visual approach would help:
 *  - https://blog.codeanalogies.com/2017/11/07/javascript-for-loops-explained/
 */

function draw(num: number): void {
let Stars: string ="";// Korektēt mainīgā nosaukumu un inicializāciju
for(let i = 0; i < num; i++) {
    Stars += "*"; // Pielikt vienu "*" katrā iterācijā, lai veidotu vēlamo rakstu
    console.log(Stars); // Izdrukāt atjaunoto zvaigžņu rakstu katrā iterācijā
}

}

draw(3);
/* Expected output:

    *
    **
    ***

*/

draw(5);
/* Expected output:

    *
    **
    ***
    ****
    *****

*/
