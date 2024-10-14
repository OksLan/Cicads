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

console.log(`Следующее совпадение произойдет через ${countYears} год в ${matchingYear} году.`);
