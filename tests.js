const initYear = 2024;
const period1 = 13;
const period2 = 17;

let year = initYear;

// Цикл продолжается до тех пор, пока не найдём следующий год, когда оба события совпадут
while (true) {
    if ((year - initYear) % period1 === 0 && (year - initYear) % period2 === 0) {
        break;
    }
    year++;
}

console.log(`Следующее совпадение произойдет в ${year} году.`);
