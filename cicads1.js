const initYear = 2024;
const period1 = 13;
const period2 = 17;

// Функция для нахождения наибольшего общего делителя (НОД)
const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);

// Функция для нахождения наименьшего общего кратного (НОК)
const lcm = (a, b) => (a * b) / gcd(a, b);

const nextCoincidenceYear = initYear + lcm(period1, period2);

console.log(`Следующий раз совпадение произойдет в ${nextCoincidenceYear} году.`);
