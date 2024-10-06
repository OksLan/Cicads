/* УСЛОВИЕ
поиск количества лет (countYears), отделяющих начальную точку (initYear) от события (matchingYear)
(т.е. через сколько лет от текущего года произойдёт событие)

const initYear = 2024;
countYears = matchingYear - initYear; //221

matchingYear - первый элемент (год), совпадающий в двух сгенерированных массивах
array1 = initYear + 13 [2037, 2050, 2063, 2076, 2089, 2102, 2115, 2128, 2141, 2154, 2167, 2180, 2193, 2206, 2219, 2232, 2245] //18
array2 = initYear + 17 [2041, 2058, 2075, 2092, 2109, 2126, 2143, 2160, 2177, 2194, 2211, 2228, 2245] //14

останавливать генерацию на 20 элементах и сравнивать
*/

const initYear = 2024;

const generateArray = (start, step) => {
	let innerInitYear = start;
	const array = [];

for (let i = 0; i < 20; i++ ) {
    array.push(innerInitYear += step);
};

return array;
};

const array1 = generateArray(initYear, 13);
const array2 = generateArray(initYear, 17);


/* console.log(array1, array2);
 */

let matchingYear = array1.filter(item => array2.includes(item));

/* console.log(matchingYear); */

let countYears = matchingYear - initYear;

console.log(countYears);
