let a = +prompt();
let b = +prompt();

console.log(a === 0 ? "Верно" : "Неверно");
console.log(a > 0 ? "Верно" : "Неверно");
console.log(a < 0 ? "Верно" : "Неверно");
console.log(a > 0 || a === 0 ? "Верно" : "Неверно");
console.log(a < 0 || a === 0 ? "Верно" : "Неверно");
console.log(a != 0 ? "Верно" : "Неверно");
console.log(a === "test" ? "Верно" : "Неверно");
console.log(a === 1 ? "Верно" : "Неверно");
console.log(a > 0 && a < 5 ? "Верно" : "Неверно");
console.log(a === 0 || a === 2 ? a + 7 : a / 10);
console.log(a < 1 || a === 1 && b > 3 || b === 3  ? a + b : a - b);
console.log(a > 2 && a < 11 || b > 6 && b === 6 && b < 14  ? "Верно" : "Неверно");

let num = 4;
let result = null;
switch(num){
    case 1: 
        result = "зима";
        console.log(result);
        break;
    case 2:
        result = "весна";
        console.log(result);
        break;
    case 3: 
        result = "лето";
        console.log(result);
        break;
    case 4: 
        result = "осень";
        console.log(result);
        break;
}
