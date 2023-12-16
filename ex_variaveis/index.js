let varA = 'A';
let varB = 'B';
let varC = 'C';

const varATemp = varA;

/* varA = varC;
varB = varATemp;
varC = varB;
*/

[varA, varB, varC] = [varB, varA, varC];

console.log(varA, varB, varC)