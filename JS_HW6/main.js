// 1) Створити масив з 20 чисел та:

// const arrNumbers = [5, 1, 3, 8, 2, 4, 6, 9, 7, 10, 15, 12, 14, 11, 17, 13, 16, 18, 20, 19];

//  a) відсортувати його від меншого до більшого.

// arrNumbers.sort(function(a, b) {
//    return a - b;
// });
// console.log(arrNumbers);

//  b) відсортувати його від більшого до меншого.

// arrNumbers.sort(function (a, b) {
//    return b - a;
// });
// console.log(arrNumbers);

//  c) Відфільтрувати числа які є кратними 3.

// const result = arrNumbers.filter(arrNumber => arrNumber % 3 === 0 && arrNumber !== 0);
// console.log(result);


//  d) Відфільтрувати числа які є більшими за 10.

// const result1 = arrNumbers.filter(arrNumber => arrNumber > 10);
// console.log(result1);

//  e) Проітерувати його forEach та вивести кожен елемент за допомогою document.write

// arrNumbers.forEach(arrNumber => document.write(arrNumber))

//  f) За допомогою map збільшити кожен елемент в масиві в три рази.

// const mapResult = arrNumbers.map((arrNumber) => {
//    arrNumber *= 3;
// return arrNumber;
// }
// )
// console.log(arrNumbers);
// console.log(mapResult);

//  g) Порахувати загальну суму всіх елементів у масиві (reduce)

// const sumArrayNum = arrNumbers.reduce(function(a, b) {
//    return a + b;
// });

// console.log(arrNumbers);
// console.log(sumArrayNum);

//  ______________________________________________________________________________________________________________________________________________________
//
// 2) Створити масив з 20 стрічок та:

// const strArray = ['hello', '55', '0', 'football', 'lg', 'BOSCH', 'nadiia', 'andrii', 'vitya', 'oksana', 'jack daniels',
//    'auto', 'moto', 'flower', '15', '-3', 'yaryna', 'oleg', 'igor', 'true'];

//  a) Відсортувати його в алфавітному порядку

// let sortArr = strArray.sort((a, b) => {
//    if(a.toLowerCase() < b.toLowerCase()) return -1;
//    if(a.toLowerCase() > b.toLowerCase()) return 1;
//    return 0;
// });

// console.log(sortArr);

//  b) Відсортувати в зворотньому порядку

// let sortArrReverse = strArray.sort((a, b) => {
//    if(a.toLowerCase() < b.toLowerCase()) return 1;
//    if(a.toLowerCase() > b.toLowerCase()) return -1;
//    return 0;
// });

// console.log(sortArrReverse); -- 1-ий варіант

// let sortArrReverse = strArray.reverse();
// console.log(sortArrReverse); //--2-ий варіант

//  c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)

// const result = strArray.filter(value => value.length > 4);
// console.log(strArray);
// console.log(result);


//  d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'

// const addSamSays = strArray.forEach(value => console.log(`Sam says ${value}`));
//  ______________________________________________________________________________________________________________________________________________________
//
// 3) Все робити тільки за допомогою методів масивів!
// Дано масив :
// const users = [
//    { name: 'vasya', age: 31, isMarried: false },
//    { name: 'petya', age: 30, isMarried: true },
//    { name: 'kolya', age: 29, isMarried: true },
//    { name: 'olya', age: 28, isMarried: false },
//    { name: 'max', age: 30, isMarried: true },
//    { name: 'anya', age: 31, isMarried: false },
//    { name: 'oleg', age: 28, isMarried: false },
//    { name: 'andrey', age: 29, isMarried: true },
//    { name: 'masha', age: 30, isMarried: true },
//    { name: 'olya', age: 31, isMarried: false },
//    { name: 'max', age: 31, isMarried: true }
// ];
// a) відсортувати його за  віком (зростання , а потім окремо спадання)

// const sortArrToUp = users.sort((a, b) => {
//    return a.age - b.age;
// });
// console.log(users);
// console.log(sortArrToUp);

// const sortArrToDown = users.sort((a, b) => {
//    return b.age - a.age;
// });
// console.log(users);
// console.log(sortArrToDown);

// b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

// const sortArrLengthToUp = users.sort((a, b) => {
//    return a.name.length - b.name.length;
// });
// console.log(users);
// console.log(sortArrLengthToUp);

// const sortArrLengthToDown = users.sort((a, b) => {
//    return b.name.length - a.name.length;
// });
// console.log(users);
// console.log(sortArrLengthToDown);

// c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
//    та зберегти це в новий масив (первинний масив залишиться без змін)

// const myArray = JSON.parse(JSON.stringify(users));

// const usersWithId = [];

// const addId = myArray.forEach((user, index) => {
//  user.id = index;
//    usersWithId.push(user);
//    return user;
// });
// console.log(users);
// console.log(usersWithId); // 1-ий варіант


// const addId = myArray.map((item, index) => {
//    item.id = index;
// item.id = Math.floor(Math.random() * 100) * index;
//    usersWithId.push(item);
//    return item;
// });
// console.log(users);
// console.log(usersWithId);  // 2-ий варіант

// d) відсортувати його за індентифікатором

// addId.sort((a, b) => a.id - b.id);
// console.log(addId );

// e) Напсати функцію каькулятора з 2-ма числами і колбеком

// function calculator(a, b, callbackFn) {
//    return callbackFn(a, b);
// }
// let result = (calculator(10, 20, (a, b) => a + b));
// console.log(result);

// f) Напсати функцію каькулятора з 3-ма числами і колбеком

// function calculator(a, b, c, callbackFn) {
//    return callbackFn(a, b, c);
// }
// let result = (calculator(10, 20, 15, (a, b, c) => a + b - c));
// console.log(result);

// ______________________________________________________________________________________________________________________________________________________
//                                                                 РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________


// const cars = [
//    {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
//    {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
//    {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
//    {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
//    {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
//    {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
//    {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
//    {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
//    {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
//    {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
//    {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
//    {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
//    {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
// ];

// Відфільтрувати масив за наступними крітеріями :

// - двигун більше 3х літрів

// const volumeMore3 = cars.filter(car => car.volume > 3);
// console.log(volumeMore3);

// - двигун = 2л

// const volumeEqualTo2 = cars.filter(car => car.volume === 2);
// console.log(volumeEqualTo2);

// - виробник мерс

// const producerMerc = cars.filter(car => car.producer === "mercedes");
// console.log(producerMerc);

// - двигун більше 3х літрів + виробник мерседес

// const producerMercVolumeMore3 = cars.filter(car => car.producer === "mercedes" && car.volume > 3);
// console.log(producerMercVolumeMore3);

// - двигун більше 3х літрів + виробник субару

// const producerSubaruVolumeMore3 = cars.filter(car => car.producer === "subaru" && car.volume > 3);
// console.log(producerSubaruVolumeMore3);

// - сили більше ніж 300

// const powerMore300 = cars.filter(car => car.power > 300);
// console.log(powerMore300);

// - сили більше ніж 300 + виробник субару

// const powerMore300Subaru = cars.filter(car => car.power > 300 && car.producer === "subaru");
// console.log(powerMore300Subaru);

// - мотор серіі ej

// const engineEj = cars.filter(car => car.engine.startsWith("ej"));
// console.log(engineEj);

// - сили більше ніж 300 + виробник субару + мотор серіі ej

// const powerMore300SubaruEj = cars.filter(car => car.power > 300 &&
//    car.producer === "subaru" &&
//    car.engine.startsWith("ej"));
// console.log(powerMore300SubaruEj);

// - двигун меньше 3х літрів + виробник мерседес

// const volumeLess3Merc = cars.filter(car => car.volume < 3 && car.producer === "mercedes");
// console.log(volumeLess3Merc);

// - двигун більше 2л + сили більше 250

// const volumeMore2PowerMore250 = cars.filter(car => car.volume > 2 && car.power > 250);
// console.log(volumeMore2PowerMore250);

// - сили більше 250  + виробник бмв

// const powerMore250Bmw = cars.filter(car => car.power > 250 && car.producer === "bmw");
// console.log(powerMore250Bmw);



// - взяти наступний массив :

// const usersWithAddress = [
//    {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
//    {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
//    {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
//    {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
//    {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
//    {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//    {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
//    {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
//    {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
//    {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
//    {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
// ];

// -- Відсортувати їх по ID

// const sortId = usersWithAddress.sort((a, b) => a.id - b.id);
// console.log(sortId);

// -- Відсортувати їх по ID в зворотньому порядку

// const sortIdRev = usersWithAddress.sort((a, b) => b.id - a.id);
// console.log(sortIdRev);

// -- Відсортувати по віку

// const sortAge = usersWithAddress.sort((a, b) => a.age - b.age);
// console.log(sortAge);

// -- Відсортувати по віку в зворотньому порядку

// const sortAgeRev = usersWithAddress.sort((a, b) => b.age - a.age);
// console.log(sortAgeRev);

// -- Відсорутвати по імені

// let sortArrName = usersWithAddress.sort((a, b) => {
//    if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
//    if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
//    return 0;
// });
// console.log(sortArrName);

// -- Відсорутвати по назві вулиці

// let sortArrNameOfStreet = usersWithAddress.sort((a, b) => {
//    if(a.address.street.toLowerCase() < b.address.street.toLowerCase()) return -1;
//    if(a.address.street.toLowerCase() > b.address.street.toLowerCase()) return 1;
//    return 0;
// });
// console.log(usersWithAddress);
// console.log(sortArrNameOfStreet);

// -- Відсорутвати по номеру будинку

// let sortArrNumOfHouse = usersWithAddress.sort((a, b) => a.address.number - b.address.number);
// console.log(sortArrNumOfHouse);

// -- Залишити тільки тих, хто молодший ніж 30 (filter)

// const age30 = usersWithAddress.filter(user => user.age < 30);
// console.log(age30);

// -- Залишити тільки одружених

// const married = usersWithAddress.filter(user => user.isMarried === true);
// console.log(married);

// -- Залишити тільки одружених, які молодші за 30

// const married30 = usersWithAddress.filter(user => user.isMarried === true && user.age < 30);
// console.log(married30);

// -- Залишити лише тих, в кого парні номери будинків.

// const evenNumberfHouse = usersWithAddress.filter(user => user.address.number % 2 === 0);
// console.log(evenNumberfHouse);

// -- Порахувати загальний вік всіх людей. (reduce)

// let initialValue = 0;
// const sumAge = usersWithAddress.reduce(function (accumulator, currentValue) {
//    return accumulator + currentValue.age;
// }, initialValue);

// console.log(sumAge);



// ______________________________________________________________________________________________________________________________________________________
//                                                                     Додатково
// ______________________________________________________________________________________________________________________________________________________

// Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.
// Для початку вкладіть всі наші створені автомобілі в масив cars.

const cars = [
   {producer:"subaru",model: "wrx",owner:{ name: 'Petro', age: 30, drivingExperience: 3}, year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400, price: 23000},
   {producer:"subaru",model: "legacy",owner:{ name: 'Ivan', age: 30, drivingExperience: 12}, year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250, price: 45000},
   {producer:"subaru",model: "tribeca",owner:{ name: 'Serhii', age: 30, drivingExperience: 5}, year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300, price: 18000},
   {producer:"subaru",model: "leone",owner:{ name: 'Nadiia', age: 30, drivingExperience: 11}, year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140, price: 225000},
   {producer:"subaru",model: "impreza",owner:{ name: 'Andrii', age: 30, drivingExperience: 8}, year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200, price: 132000},
   {producer:"subaru",model: "outback",owner:{ name: 'Leon', age: 30, drivingExperience: 1}, year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165, price: 53000},
   {producer:"bmw",model: "115",owner:{ name: 'Yaryna', age: 30, drivingExperience: 15}, year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120, price: 50000},
   {producer:"bmw",model: "315",owner:{ name: 'Mariia', age: 30, drivingExperience: 7}, year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120, price: 12000},
   {producer:"bmw",model: "650",owner:{ name: 'Igor', age: 30, drivingExperience: 4}, year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350, price: 10000},
   {producer:"bmw",model: "320",owner:{ name: 'Viktor', age: 30, drivingExperience: 2}, year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180, price: 100000},
   {producer:"mercedes",model: "e200",owner:{ name: 'Anastasiia', age: 30, drivingExperience: 5}, year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180, price: 24000},
   {producer:"mercedes",model: "e63",owner:{ name: 'Oleg', age: 30, drivingExperience: 9}, year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400, price: 18500},
   { producer: "mercedes", model: "c250", owner: { name: 'Maksym', age: 30, drivingExperience: 6}, year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230, price: 23200}
];

// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).

// const repairedCars = [];

// for (let i = 0; i < cars.length; i += 2) {
   
//    cars[i].power = cars[i].power * 10 / 100 + cars[i].power;
//    repairedCars.push(cars[i]);

// };
// console.log(repairedCars);

// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).

// const newDriver = JSON.parse(JSON.stringify(repairedCars));

// for (let i = 0; i < newDriver.length; i++) {
//    newDriver[i].driver = 'Max';
// }
// console.log(newDriver);

// Далі необхідно брати кожну другу машинку (цикл з кроком в 2), та робити їй
// підвищення потужності двигуна на 10 % та ціну на 5 %

// const repairedCars = [];

// for (let i = 0; i < cars.length; i += 2) {
   
//    cars[i].power = cars[i].power * 10 / 100 + cars[i].power;
//    let change = cars[i].price = cars[i].price * 5 / 100 + cars[i].price;
//    cars[i].price = `${change} $`
//    repairedCars.push(cars[i]);
// };
// console.log(repairedCars);



// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25,
// то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.

// for (const car of cars) {
//    if (car.owner.drivingExperience < 5 && car.owner.age > 25) {
//       car.owner.drivingExperience += 1;
//    }
// }
// console.log(cars);


// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі

// const carPrice = [];
// for (const car of cars) {
//    carPrice.push(car.price);
// };
// console.log(carPrice);

// const totalPriceCars = carPrice.reduce(function(a, b) {
//    return a + b;
// });
// console.log(totalPriceCars);


// Задача: дан отсортированный по возрастанию массив целых чисел.
// Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
// Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.

// Пример:
// Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.

// let arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];
// function findFirstAndLast(array, el) {
//    let min = array.indexOf(el);
//    let max = array.lastIndexOf(el);
//    console.log(`Answer: MinIndex = ${min}, MaxIndex = ${max}.`);
// };
// findFirstAndLast(arr, 1);
// findFirstAndLast(arr, 4);

// let arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];

// function findFirstAndLast(array, el) {
//    let min = null;
//    let max = null;
//    for (let i = 0; i < arr.length; i++) {
//       if (array[i] === el) {
//          if (!min) min = i;
//          max = i;
//       }
      
//    }
//    min !== null
//    ?console.log(`Answer: MinIndex = ${min}, MaxIndex = ${max}.`)
//    :console.log(-1);
// };
// findFirstAndLast(arr, 4);
// findFirstAndLast(arr, 1);