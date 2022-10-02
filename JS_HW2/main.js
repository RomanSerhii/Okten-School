
// -----1-----

// створити масив з:
// - з 5 числових значень
// - з 5 стрічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// const numArrays = [33, 5, 28, 12, 11]
// console.log(numArrays);

// const strArrays = ['Serhii', 'Vasia', 'Dima', 'Misha', 'Andrii'];
// console.log(strArrays);

// const mixArrays = ['Petro', 33, true, 'Max', 22];
// console.log(mixArrays);

// ----- 2 -----

// Створити пустий масив.Наповнити його будь - якими значеннями звертаючись до конкретного індексу.
// Вивести в консоль

// let user = [];
// user[0] = 'Serhii';
// user[1] = 33;
// user[2] = 'Roman';
// user[3] = 22;
// console.log(user);

// ----- 3 -----

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 0; i < 10; i++) {
//    document.write('<div>Text</div>');
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i < 10; i++) {
//    document.write(`<div>Text : ${i}</div>`);
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let text = 0;
// while (text < 20) {
//   text++;
//    document.write('<h1>Text</h1>')
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let text = 0;
// while (text < 20) {
//   text++;
//    document.write(`<h1>Text : ${text}</h1>`)
// }

// ----- 4 -----

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// const numArrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (const numArray of numArrays) {
//    console.log(numArray);
// }


// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// const strings = ['Serhii', 'Nadia', 'Andrii', 'Misha', 'Vasylyna', 'Oleg', 'Yaryna', 'Vasia', 'Mariana', 'Petro'];

// for (const string of strings) {
//    console.log(string);
// }

// strings.forEach(i=> console.log(i)); // forEach


// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// const mixArray = ['Serhii', 33, false, 'Nadia', 'my wife', true, 2 + 2, 'Andrii', 'Petro', 28];

// for (const mixAr of mixArray) {
//    console.log(mixAr);
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу.
// За допомогою if та typeof вивести тільки булеві елементи
 
// const mixArray = ['Serhii', 33, false, 'Nadia', 'my wife', true, 2 + 2, 'Andrii', 'Petro', 28];

// for (let i = 0; i < mixArray.length; i++) {
//    if (typeof mixArray[i] === 'boolean') {
//       console.log(mixArray[i]);
//    }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу.
//  За допомогою if та typeof вивести тільки числові елементи

// const mixArray = ['Serhii', 33, false, 'Nadia', 'my wife', true, 2 + 2, 'Andrii', 'Petro', 28];

// for (let i = 0; i < mixArray.length; i++) {
//    if (typeof mixArray[i] === 'number') {
//       console.log(mixArray[i]);
//    }
// }


// - Створити масив з 10 елементів числового, стрічкового і булевого типу.
// За допомогою if та typeof вивести тільки рядкові елементи

// const mixArray = ['Serhii', 33, false, 'Nadia', 'my wife', true, 2 + 2, 'Andrii', 'Petro', 28];

// for (let i = 0; i < mixArray.length; i++) {
//    if (typeof mixArray[i] === 'string') {
//       console.log(mixArray[i]);
//    }
// }
// for (let i = 0; i < mixArray.length; i++) {
//    typeof mixArray[i] === 'string' ? console.log(mixArray[i]) // Тернарник
//    : "";
// }

// ----- 5 -----

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами)
// через звернення до конкретних індексів.Вивести в консоль всі його елементи в циклі.

// const array = [];

// array[0] = 'Serhii';
// array[1] = true;
// array[2] = 33;
// array[3] = '33';
// array[4] = false;
// array[5] = 'Petro';
// array[6] = 'son';
// array[7] = 'wife';
// array[8] = NaN;
// array[9] = 'Vasia';

// for (const arr of array) {
//    console.log(arr);
// }

// - Створити цикл for на 10  ітерацій з кроком 1.
//  Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10; i++) {
//    console.log(i);
//    document.write(`step: ${i} <br>`);
// }

// - Створити цикл for на 100 ітерацій з кроком 1.
// Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i++) {
//    console.log(i);
//    document.write(`step: ${i} <br>`);
// }

// - Створити цикл for на 100 ітерацій з кроком 2.
// Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 200; i = i + 2) {
//    console.log(i);
//    document.write(`step: ${i} <br>`);
// }

// - Створити цикл for на 100 ітерацій.
// Вивести тільки парні кроки.через console.log + document.write

// for (let i = 2; i < 100; i++) {
//    if (i % 2 === 0) {
//       console.log(i);
//    document.write(`step : ${i} <br>`);
//    }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 1; i < 100; i++) {
//    if (i % 2 !== 0) {
//       console.log('step : ',i);
//    document.write(`step: ${i} <br>`);
//    }
// }

// for (let i = 1; i < 100; i+=2) {
//       console.log('step : ',i);
//    document.write(`step: ${i} <br>`);
// }


// ______________________________________________________________________________________________________________________________________________________
//                                                                     Додатково
// ______________________________________________________________________________________________________________________________________________________

// ----- 1 -----

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
 
// let array = ['a', 'b', 'c'];
// let str = '';

// for (let i = 0; i < array.length; i++) {
//    str = str + array[i];
// }
// console.log(str);
// document.write(str);

// ----- 2 -----

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

// let array = ['a', 'b', 'c'];

// let i = 0;
// let str = '';
// while (i < array.length) {
//     str = str + array[i];
//    i++;
// }
// console.log(str);
// document.write(str);

// ----- 3 -----

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

// let array = ['a', 'b', 'c'];
// let str = '';

// for (const arr of array) {
//    str = str + arr;
// }
// console.log(str);
// document.write(str);

// ----- 4 -----

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for in зібрати всі букви в слово.

// let array = ['a', 'b', 'c'];
// let str = '';

// for (const arr in array) {
//    str = str + array[arr];
// }
// console.log(str);
// document.write(str);

// ----- 5 -----

//  Дано масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

// let array = ['a', 'b', 'c'];

// for (let i = 1; i <= 3; i++) {
//     array[array.length] = i;
// }
// console.log(array);   // 1-ий варіант

// array.push(1, 2, 3);
// console.log(array); // 2-ий варіант

// console.log([...array,1,2,3]);  // 3-ій варіант (спред оператор)

// ----- 6 -----

// - Дано масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].

// const array = [1, 2, 3];
// const newArray = [];
// for (let i = 3; i >= 1; i--) {
//     newArray.push(i)
// }
// console.log(newArray);   // 1-ий варіант (зворотній цикл)


// const array = [1, 2, 3];
// const reversed = array.reverse();

// console.log(reversed); // 2-ий варіант

// ----- 7 -----

// - Дано масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.

// const array = [1, 2, 3];
// array.push(4, 5, 6);
// console.log(array);

// ----- 8 -----

// - Дано масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.

// const array = [1, 2, 3];
// array.unshift(4, 5, 6);
// console.log(array);

// ----- 9 -----

// - Дано масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()

// const array = ['js', 'css', 'jq'];
// const shifted = array.shift();
// console.log(shifted);
// document.write(shifted);

// ----- 10 -----

// - Дано масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()

// const array = ['js', 'css', 'jq'];
// const popped = array.pop();
// console.log(popped);
// document.write(popped);

// - Дано масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].

// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.slice(3));

// ----- 11 -----

// - Дано масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].

// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.slice(0,2));

// ----- 12 -----

// - Дано масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].

// const numbers = [1, 2, 3, 4, 5];
// const spliced = numbers.splice(3, 0, 'a', 'b', 'c');
// console.log(numbers);

// ----- 13 -----

// - Дано масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

// const numbers = [1, 2, 3, 4, 5];
// let spliced = numbers.splice(1, 0, 'a', 'b');
// let spliced2 = numbers.splice(6, 0, 'c');
// let spliced3 = numbers.splice(8, 0 , 'e')
// console.log(numbers);

// ----- 14 -----

// - Взяти масив з 10 чисел або створити його.
// Вивести в консоль тільки ті елементи, значення яких є парними.

// const numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0)
//         console.log(numbers[i]);
// }

// ----- 15 -----

// - Взяти масив з 10 чисел або створити його.
// Створити 2й порожній масив.За допомогою будь - якого циклу та push() скопіювати значення одного масиву в інший.

// const numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// const copy = [];

// for (const number of numbers) {
//     copy.push(number);
// }
// console.log(copy);

// ----- 16 -----

// - Взяти масив з 10 чисел або створити його.
//  Створити 2й порожній масив.За допомогою будь - якого циклу скопіювати значення одного масиву в інший.

// const numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// const copy = [];

// for (let i = 0; i < numbers.length; i++) {
//     copy[i] = numbers[i];
// }
// console.log(copy);

// ----- 17 -----

// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// 1. перебрати його циклом while

// const numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// let i = 0;
// while (i < numbers.length) {
//     console.log(numbers[i]);
//     i++;
// }
    
// 2. перебрати його циклом for

// const numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
    
// }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

// const numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = 0;

// while (i < numbers.length) {
//     if (i % 2 !== 0) {
//         console.log(numbers[i]);
//     }
//         i++;
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// const numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// for (let i = 0; i < numbers.length; i++) {
//     if (i % 2 !== 0) {
//         console.log(numbers[i]);
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення

// const numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = 0;

// while (i < numbers.length) {
//     if (i % 2 === 0) {
//         console.log(numbers[i]);
//     }
//         i++;
// }
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// const numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// for (let i = 0; i < numbers.length; i++) {
//     if (i % 2 === 0) {
//         console.log(numbers[i]);
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"
// const numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 3 === 0) {
//         numbers[i] = "okten";
//         console.log(numbers[i]);
//         document.write(numbers[i])
//     }
    
// }

// 7. замінити кожне число кратне 3 на ваше імя
// const numbers = [3, 6, 10, 9, 12, 31, 15, 66, 100, -18];

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 3 === 0) {
//         numbers[i] = "Serhii";
//         console.log(numbers[i]);
//         document.write(numbers[i])
//     }
// }
// 8. вивести масив в зворотньому порядку.

// const numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// console.log(numbers.reverse());

// for (let i = numbers.length; i >= 0; i--) {
//     console.log(numbers[i]);
// }

//
// 9. створити пустий масив та :
//
//    1.  a. заповнити його 50 парними числами за допомоги циклу.
//        b. заповнити його 50 непарними числами за допомоги циклу.

// let array1 = [];
// let array2 = [];

// for (let i = 0; i < 100; i++) {
//    i % 2 === 0 ? array1[i] = i : array2[i] = i;
// }
// console.log(array1); // парні числа
// console.log(array2); // не парні числа
//
//        c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

// let array = [];

// for (let i = 0; i < 20; i++) {
//    array[i] = Math.floor(Math.random() * (50 - 1) + 1);
// }
// console.log(array);


//        d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

// let array = [];

// for (let i = 0; i < 20; i++) {
//    array[i] = Math.floor(Math.random() * (732 - 8) + 8);
// }
// console.log(array);

//  2. Вивести за допомогою console.log кожен третій елемент

// for (let i = 2; i < array.length; i += 3) {

//    console.log(array[i]);
// }
//  3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

// for (let i = 2; i < array.length; i += 3) {
//    if (array[i] % 2 === 0) {
//     console.log(array[i]);
// }
// }

//  4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та
// записати їх в новий масив

// let array2 = [];

// for (let i = 2; i < array.length; i += 3) {
//    if (array[i] % 2 === 0) {
//       array2.push(array[i])
// }
// }
// console.log(array2);
//  5. Вивести кожен елемент масиву, сусід справа якого є парним
//   EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

// for (let i = 0; i < array.length; i++) {
//    if (array[i + 1] % 2 === 0) {
//       console.log(array[i]);
//    }
// }

//  6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки.
// Обрахувати середній чек.
// const check = [100, 250, 50, 168, 120, 345, 188];
// let total = 0;
// let result = 0;

// for (let i = 0; i < check.length; i++) {
//    result = result + check[i] / check.length;
// }
// console.log(Math.round(result * 100) / 100);

//  7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

// let array = [];
// let array2 = [];

// for (let i = 0; i < 20; i++) {
//    array[i] = Math.floor(Math.random() * (50 - 1) + 1);
// }

// for (let i = 0; i < array.length; i++) {
//    array2[i] = array[i] * 5;
   
// }
// console.log(array);
// console.log(array2);

//  8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому,
// і якщо елемент є числом - додати його в інший масив.

// const array1 = ['Serhii', 33, true, 'Nadia', 33, true, 'Andrii', 2, false];
// const array2 = [];

// for (let i = 0; i < array1.length; i++) {
//    if (typeof array1[i] === 'number') {
//       array2.push(array1[i]);
//    }
// }
// console.log(array2);


// 9. Відтворити роботу годинника, відрахувави 2 хвилини (2 цикли! 1-ий хвилини, 2-ий секунди)

// const TYPE_COUNT = 59;
// let s = 0;
// let m = 0;

// for (let i = 0; i <= TYPE_COUNT && m !== 3; i++) {
//    console.log('хвилини : ', m++);
// for (let i = 0; i <= TYPE_COUNT && m !== 3; i++) {
//    console.log('секунди : ', s++);
//    }
//       s = 0;
// }


// 10. Відтворити роботу годинника, відрахувави 2 години 20 хвилин (3 цикли! 1-ий години, 2-ий хвилини, 3-ій секунди)

// const TYPE_COUNT = 59;
// let s = 0;
// let m = 0;
// let hour = 0;

// for (let i = 0; i <= 23 && hour !== 2 && m !== 20; i++){
//     hour = i;

//     for (let i = 0; i <= TYPE_COUNT; i++) {
//         m = i;
//        console.log(`${hour} : ${m}: ${s}`);
       
//         if (hour === 2 && m === 20){
//             console.log(`test end`);
//             console.log(`${hour} : ${m} : ${s}`);
//             break;
//         }
//         for (let i = 0; i <= TYPE_COUNT; i++){
//             s = i;
//             console.log(`${hour} : ${m} : ${s}`);
//         }
//         s = 0;
//     }
//     m = 0;

// }

const clock = document.getElementById('clock')
const color = document.getElementById('color');

let sec = 0;
let hvylyna = 0;
let hour = 0;

setInterval( () => {
   sec++;
   if (sec === 60) {
      hvylyna++;
      sec = 0;
   }
   if (hvylyna === 60) {
      hour++;
      hvylyna = 0;
   }
   if (hour === 24) {
      hour = 0;
   }
   let h = hour.toString();
   let hv = hvylyna.toString();
   let s = sec.toString();
   if (h.length < 2) {
      h = '0' + h;
   }
   if (hv.length < 2) {
      hv = '0' + hv;
   }
   if (s.length < 2) {
      s = '0' + s;
   }
   
   let myTime = h + ':' + hv + ':' + s;
   let myColor = '#' + h + hv + s;
   
   clock.innerText = myTime;
   color.innerText = myColor;

   document.body.style.background = myColor;
}, 1000);