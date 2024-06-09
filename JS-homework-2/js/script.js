///------1------///
// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.

//console.log(1 > 0); //true
//console.log(0 > 0); //false
//console.log(-3 > 0); //false

///------2------///
// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true
//1. через консольку
/*let a = "test";
let b = "qwerty";
let c = true;

console.log(a==="test"); //true
console.log(b==="test"); //false
console.log(c==="test"); //false*/

//<---------------------------------->//
//2. через if - else
/*let a = "test";
let b = "qwerty";
let c = true;

if(a==="test") {console.log(true) 
} else {
    console.log(false);
};

if(b === "test") {console.log(true) 
} else {
    console.log(false);
};

if(c === "test") {console.log(true)
} else {
    console.log(false);
};*/

//<---------------------------------->//
//3. тернарний оператор
/*'test'==="test" ? console.log (true) : console.log (false);
"qwerty"==="test" ? console.log (true) : console.log (false);
true==="test" ? console.log (true) : console.log (false);*/

///------3------///
// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.
//let a = 1;
//let b = 10;
//let c = 13;

/*let a = 1;
let b = 10;
let c = 13;

if (a > 10) {
    a -= 5;
} else {
    a += 5;
}
console.log(a); //6

if (b > 10) {
    b -= 5;
} else {
    b += 5;
}
console.log(b); //15 (якщо >= буде 5)

if (c > 10) {
    c -= 5;
} else {
    c += 5;
}
console.log(c); //8*/

//------4------//
//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

/*let num = Math.round(Math.random() * (12 - 1) + 1); //Math.round буде округлювати

switch(num){
    case 1:
        console.log("Jan"); //щоб вивести значення беру в подвійнф лапки
        break;
    case 2:
        console.log("Fab");
        break;
    case 3:
        console.log("Mar");
        break;
    case 4:
        console.log("Apr");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("Jun");
        break;
    case 7:
        console.log("Jul");
        break;
    case 8:
        console.log("Aug");
        break;
    case 9:
        console.log("Sep");
        break;
    case 10:
        console.log("Oct");
        break;
    case 11:
        console.log("Nov");
        break;
    case 12:
        console.log("Dec");
        break;
};
*/

//------5------//
//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

/*const number = prompt ("Введіть трьохзначне число"); //prompt виводить текст в вікні

if (number >= 100 && number <= 999) { // все обовязково має бути всередині іфа

let num1 = Math.floor(number / 100); //так можна визначити кожну цифру з отриманого числа
let num2 = Math.floor((number % 100) / 10);
let num3 = number % 10;

sum = num1 + num2 + num3;

alert(`Сума вашого числа: ${sum}`); };

*/
