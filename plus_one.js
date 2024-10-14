const initYear = 2024;
const period1 = 13;
const period2 = 17;

let year = initYear + 1;

while (true) {
    if ((year - initYear) % period1 === 0 && (year - initYear) % period2 === 0) {
        break; 
    }
    year++; 
}

const timespan = year - initYear;

console.log(`Следующее совпадение произойдет через ${timespan} год в ${year} году.`);
