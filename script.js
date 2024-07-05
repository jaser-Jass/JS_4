// Задание 1 Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
//0 – это ноль
//1 – нечетное число
//2 – четное число
//3 – нечетное число
//…
//10 – четное число
console.log('Задание 1');
for (let i=0; i<=10; i++) {
    if (i===0) {
        console.log(i+ '- это ноль');
    }else if (i%2===0) {
        console.log(i+ '- четное число');
    }else {
        console.log(i+ '- нечетное число');
    }
}
console.log('Задание 2');
//Задание 2
//Дан массив [1, 2, 3, 4, 5, 6, 7]
//Сделайте из этого массива следующий [1, 2, 3, 6, 7]
const arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(3,1);
arr.splice(4,1);
console.log(arr);

console.log('Задание 3');
//Задание 3
//Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
//1. Рассчитать сумму элементов этого массива
//2. Найти минимальное число
//3. Найти есть ли в этом массиве число 3
let arr1 = [];
for (let i=0; i<5; i++){
    arr1.push(Math.floor(Math.random()*10));
}
let sum = arr1.reduce((acc, curr)=> acc+curr,0);
let min = Math.min(...arr1);
let hasThree = arr1.includes(3);
console.log("Массив:", arr1);
console.log("Сумма элементов массива: ", sum);
console.log("Минимальное число в массиве: ", min);
console.log("Число 3 присутствует в массиве: ", hasThree);

//Задание 4
//Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, 
//только у вашей горки должно быть 20 рядов, а не 5:
console.log('Задание 4');
for (let z = 1; z <= 20; z++) {
    let row = '';
 
    for (let j = 0; j < z; j++) {
        row += '*';
    }


    console.log(row);
}