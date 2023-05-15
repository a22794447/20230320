let age = 18;
let firstName = 'Xuerou';
let lastName = 'lin';
let country = 'TW';

console.log('(' + country + ') ' + firstName + ' ' + lastName);

console.log(`(${country}) ${firstName} ${lastName}`)

let num1 = 1;
let num2 = 1.2;
let num3 = num1 + num2;
let num4 = '10';
let num5 = num1 + num4;
let num6 = num1 - num4;
let num7 = num1 * num4;
let num8 = num1 / num4;
let num9 = num1 % num4;
let num10 = num1 + 'a';

console.log(num1, num2, num3, num4, num5, num6, num7, num8, num9, num10);

let num11 = parseInt(num1, 10) + parseInt(num4, 10);
let num12 = +num1 + +num4;
let num13 = +num1 + +'a';

console.log(num11, num12, num13);