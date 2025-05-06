// Тип для обозначение функций
type voidFunc = () => void; // аннотация void для возврата

const retString: voidFunc = () => {
    // ... some magic
    return "string";
};

const s = retString(); // void
console.log(s);

const retNum: voidFunc = () => {
    // ... some magic
    return 5;
};

const n = retNum();
console.log(n);

// аннотация void для возврата
// function f2(): void {
//     return true; // error
// }

// const f3 = function (): void {
//     return true; // error
// };

const names = ["Anna", "John"]; // Массив имен
const newArr = names.slice(); // Применяем метод slice() на массиве names

names.forEach((name, i, arr) => arr.push("Tamerlan")); // Работаем с массивом имёен
