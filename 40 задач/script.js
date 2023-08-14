// -------------------------------------------// задача 1

// Переберите массив и запишите каждый элемент в консоль.

// const arr = [2, 4, 5, 6, 7, 8];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// ----------------------------

// arr.forEach((el) => {
//   console.log(el);
// });

// -------------------------------------------// задача 2

// Умножьте каждый элемент массива на определенное значение и сохраните результат в новом массиве.

// const arr = [2, 4, 5, 6, 7, 8];
// let array = [];
// for (let i = 0; i < arr.length; i++) {
//   array.push(arr[i] * 2);
// }
// console.log(array);

// ----------------------------

// let array1 = [];
// arr.forEach((el) => {
//   array1.push(el * 2);
// });
// console.log(array1);

// -------------------------------------------// задача 3

// Отфильтруйте массив, чтобы удалить элементы, не соответствующие определенным критериям

// const arr = [2, 4, 5, 6, 7, 8];

// const filteredArray = arr.filter((el) => {
//   return el >= 5;
// });
// console.log(filteredArray);

// ----------------------------

// let filteredArray1 = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] >= 5) {
//     filteredArray1.push(arr[i]);
//   }
// }
// console.log(filteredArray1);

// -------------------------------------------// задача 4

// Перебрать массив и обновить каждый элемент до нового значения.

// const arr = [2, 4, 5, 6, 7, 8];
// let array = [];
// for (let i = 0; i < arr.length; i++) {
//   array.push(arr[i] * 2);
// }
// console.log(array);

// ----------------------------

// let newArr = [];
// arr.forEach((el) => newArr.push(el * 2));
// console.log(newArr);

// -------------------------------------------// задача 5

// Найдите максимальное или минимальное значение в массиве с помощью функции обратного вызова.

// const arr = [2, 4, 5, 6, 34, 234, 7, 8, 23];
// let result = 0;
// arr.forEach((el) => (el > result ? (result = el) : null));
// console.log(result);

// ----------------------------

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > result) {
//     result = arr[i];
//   }
// }
// console.log(result);

// -------------------------------------------// задача 6

// Создайте новый массив, применив функцию к каждому элементу существующего массива.
// const arr = [2, 4, 5, 6, 34, 234, 7, 8, 23];

// ----------------------------

// let newArray = [];
// let newArray2 = [];
// for (let i = 0; i < arr.length; i++) {
//   newArray.push(arr[i]);
//   newArray2.push((arr[i] + 2) / 2);
// }
// console.log(newArray);
// console.log(newArray2);

// ----------------------------

// let newArray3 = [];
// let newArray4 = [];
// arr.forEach((el) => {
//   newArray3.push(el);
//   newArray4.push((el + 2) / 2);
// });
// console.log(newArray3);
// console.log(newArray4);

// ----------------------------

// const newArray5 = arr.map((el) => el * 2);
// console.log(newArray5);

// -------------------------------------------// задача 7

// Выполните итерацию по массиву и обновите промежуточную сумму его значений.

// const arr = [2, 4, 5, 6, 34, 7, 8];
// let summ = 0;
// const newArray = arr.map((el) => (summ += el));
// console.log(newArray);

// ----------------------------

// let summ = 0;
// let newArray = [];
// for (let i = 0; i < arr.length; i++) {
//   summ += arr[i];
//   newArray.push(summ);
// }
// console.log(newArray);

// -------------------------------------------// задача 8

// Создайте новый массив, выбрав определенные свойства объектов в существующем массиве.

// const arr = [
//   { id: 1, title: "Микроволновка", price: 1500, count: 4 },
//   { id: 2, title: "Телевизор", price: 2500, count: 1 },
//   { id: 3, title: "Тумба", price: 5500, count: 5 },
//   { id: 4, title: "Холодильник", price: 200, count: 2 },
//   { id: 5, title: "Стол", price: 5600, count: 5 },
//   { id: 6, title: "Телефон", price: 1900, count: 12 },
//   { id: 7, title: "Компьютер", price: 4200, count: 11 },
//   { id: 8, title: "Мангал", price: 250, count: 7 },
//   { id: 9, title: "Люстра", price: 300, count: 3 },
// ];

// const newArray = arr.map((el) => el.title);
// console.log(newArray);

// ----------------------------

// let newArray = [];
// for (let i = 0; i < arr.length; i++) {
//   newArray.push(arr[i].title);
// }
// console.log(newArray);

// -------------------------------------------// задача 9

// Удалите дубликаты из массива с помощью функции обратного вызова.
// const arr = [2, 4, 5, 5, 6, 34, 7, 7, 8];
// let newArray = [];
// for (let i = 0; i < arr.length; i++) {
//   let isDuplicate = false;
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[i] === newArray[j]) {
//       isDuplicate = true;
//       break;
//     }
//   }
//   if (!isDuplicate) {
//     newArray.push(arr[i]);
//   }
// }

// console.log(newArray);

// ----------------------------

// const newArray = arr.filter((el, ind, arr) => {
//   return arr.indexOf(el) === ind;
// });
// console.log(newArray);

// -------------------------------------------// задача 10

// Сгруппируйте элементы в массиве по определенному критерию с помощью функции обратного вызова.

// const arr = [3, 4, 2, 1, 7, 5, 9, 10];
// let newArrayEven = [];
// let newArrayOdd = [];

// arr.forEach((el) => {
//   if (el % 2 === 0) {
//     newArrayEven.push(el);
//   } else newArrayOdd.push(el);
// });
// console.log(newArrayEven);
// console.log(newArrayOdd);

// -------------------------------------------// задача 11

// Сортировка массива в определенном порядке с помощью функции обратного вызова.
// const arr = [3, 4, 2, 1, 7, 5, 9, 10];
// const newArrayEven = arr.filter((el) => el % 2 === 0);
// console.log(newArrayEven);

// ----------------------------

// const arr = [3, 4, 2, 1, 7, 5, 9, 10];
// arr.sort((a, b) => a - b);
// console.log(arr);

// -------------------------------------------// задача 12

// Выполните итерацию по массиву и выполните побочный эффект для каждого элемента, например, обновите модель DOM.

// const body = document.querySelector("body");
// const newBlock = document.createElement("div");
// const blockOfText = document.createElement("p");

// body.append(newBlock);
// newBlock.append(blockOfText);

// const arr = [
//   { id: 1, title: "Микроволновка", price: 1500, count: 4 },
//   { id: 2, title: "Телевизор", price: 2500, count: 1 },
//   { id: 3, title: "Тумба", price: 5500, count: 5 },
//   { id: 4, title: "Холодильник", price: 200, count: 2 },
//   { id: 5, title: "Стол", price: 5600, count: 5 },
//   { id: 6, title: "Телефон", price: 1900, count: 12 },
//   { id: 7, title: "Компьютер", price: 4200, count: 11 },
//   { id: 8, title: "Мангал", price: 250, count: 7 },
//   { id: 9, title: "Люстра", price: 300, count: 3 },
// ];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].price > 300) {
//     blockOfText.innerText += `" ${arr[i].title} : (${arr[i].price}) " ___`;
//   }
// }
// console.log(arr);

// -------------------------------------------// задача 13

// Объедините два массива в новый массив, используя метод forEach.

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [6, 7, 8, 9, 10];

// const newArray = [];
// arr1.forEach((el) => newArray.push(el));
// arr2.forEach((el) => newArray.push(el));
// console.log(newArray);

// -------------------------------------------// задача 14

// Создайте новый массив, объединив вложенный массив с помощью метода forEach.

// const arr1 = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10],
//   [11, 12, 13, 14, 15],
// ];
// newArray = [];
// arr1.forEach((elem) => {
//   elem.forEach((el) => {
//     newArray.push(el);
//   });
// });
// console.log(newArray);

// ----------------------------

// const arr1 = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10],
//   [11, 12, 13, 14, 15],
// ];
// let newArray = [];

// for (let i = 0; i < arr1.length; i++) {
//   let accum = arr1[i];

//   for (let j = 0; j < accum.length; j++) {
//     newArray.push(accum[j]);
//   }
// }
// console.log(newArray);

// -------------------------------------------// задача 15

// Измените существующий объект, перебирая массив пар ключ-значение.

// const obj = {
//   1: { id: 1, title: "Микроволновка", price: 1500, count: 4 },
//   2: { id: 2, title: "Телевизор", price: 2500, count: 1 },
//   3: { id: 3, title: "Тумба", price: 5500, count: 5 },
// };

// for (let key in obj) {
//   if (obj[key].price > 2000) {
//     obj[key].title = "Phone";
//   }
// }

// console.log(obj);

// -------------------------------------------// задача 16

// Реализуйте функцию обратного вызова, которая будет вызываться для каждого элемента массива, пока не вернет значение false.

// const arr = [1, 2, 3, 4, 5];

// const elem = arr.find((el) => {
//   if (el === 7) {
//     return true;
//   } else return false;
// });
// console.log(elem !== undefined);

// -------------------------------------------// задача 17

// Перебрать массив и вычислить среднее значение его значений.

// const arr = [1, 2, 3, 4, 5];

// let newArr = 0;

// arr.forEach((el) => (newArr += el / arr.length));
// console.log(newArr);

// -------------------------------------------// задача 18

// Перебрать массив и удалить любой элемент, соответствующий определенному критерию.

// const arr = [1, 2, 3, 4, 5];

// const newArray = arr.filter((el) => el % 2 === 0);
// console.log(newArray);

// -------------------------------------------// задача 19

// Создайте новый массив элементов, соответствующих определенным критериям.

// let arr = [];
// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 0) {
//     arr.push(i);
//   }
// }
// console.log(arr);

// -------------------------------------------// задача 20

// Выполните итерацию по массиву и обновите свойство каждого элемента, используя метод forEach.

// const arr = [2, 4, 3, 1, 5, 6, 3, 78, 23];
// let array = [];
// arr.forEach((el) => {
//   let result = el ** 2;
//   return array.push(result);
// });
// console.log(array);

// -------------------------------------------// задача 21

// Объедините все строки в массиве в одну строку, используя метод forEach

// let stringArray = ["Ja", "va", "-", "scr", "ipt"];
// let string = "";
// stringArray.forEach((el) => {
//   string += el;
// });
// console.log(string);

// -------------------------------------------// задача 22

// Создайте новый массив объектов, добавив к каждому объекту новое свойство с помощью метода forEach.

// const obj = [
//   { title: "Микроволновка", price: 1500, count: 4 },
//   { title: "Телевизор", price: 2500, count: 1 },
//   { title: "Тумба", price: 5500, count: 5 },
// ];

// obj.forEach((el, ind) => {
//   el.id = ind + 1;
//   el = { id: el.id, ...el };
//   obj[ind] = el;
// });
// console.log(obj);

// -------------------------------------------// задача 23

// Подсчитайте, сколько раз элемент появляется в массиве, используя метод forEach.

// const arr = [8, 9, 8, 6, 5, 3, 8, 2];
// let counter = 0;
// arr.forEach((el) => {
//   if (el === 8) {
//     return counter++;
//   }
// });
// console.log(counter);

// -------------------------------------------// задача 24

// Суммируйте значения определенного свойства в массиве объектов, используя метод forEach.

// const obj = [
//   { id: 1, title: "Микроволновка", price: 1500, count: 4 },
//   { id: 2, title: "Телевизор", price: 2500, count: 1 },
//   { id: 3, title: "Тумба", price: 5500, count: 5 },
// ];
// let summ = 0;
// obj.forEach((el) => (summ += el.price));
// console.log(summ);

// -------------------------------------------// задача 25

// Удалите элемент из массива, если он соответствует определенным критериям, используя метод forEach.

// const arr = [3, 1, 4, 6, 2, 1, 5, 18, 4, 34, 12];

// arr.forEach((el, index) => {
//   if (el > 5 && el < 20) {
//     arr.splice(index, 1);
//   }
// });

// console.log(arr);

// -------------------------------------------// задача 26

// Создайте новый массив, сопоставив существующий массив с массивом логических значений, используя метод forEach.

// const arr = [3, 2, 4, 4, 5, 56, 43, 2, 1, 7];
// const arr2 = [];
// arr.forEach((el) => {
//   if (el > 3) {
//     return false;
//   } else arr2.push(el);
// });
// console.log(arr2);

// -------------------------------------------// задача 27

// Найдите первый элемент в массиве, который соответствует определенному критерию, используя метод forEach.

// const arr = [3, 2, 4, 4, 5, 56, 43, 2, 1, 7];
// let num = 0;
// arr.forEach((el) => {
//   if (el > 5 && num === 0) {
//     num = el;
//   }
// });
// console.log(num);

// -------------------------------------------// задача 28

// Создайте новый массив, отфильтровав существующий массив на основе свойства его объектов, используя метод forEach.

// const obj = [
//   { id: 1, title: "Микроволновка", price: 1500, count: 4 },
//   { id: 2, title: "Телевизор", price: 2500, count: 1 },
//   { id: 3, title: "Тумба", price: 5500, count: 5 },
// ];

// let newArray = [];

// obj.forEach((el) => {
//   if (el.price > 2000) {
//     newArray.push(el);
//   }
// });
// console.log(newArray);

// -------------------------------------------// задача 29

// Обновите массив на месте, удалив определенные элементы, соответствующие определенным критериям, с помощью метода forEach.

// const arr = [3, 2, 4, 4, 5, 56, 43, 2, 1, 7];

// arr.forEach((el, index, array) => {
//   if (el === 4 || el === 7) {
//     array[index] = null;
//   }
// });
// console.log(arr);

// -------------------------------------------// задача 30

// Измените массив объектов, сопоставив каждый объект с новым объектом с добавленным свойством, используя метод forEach.

// const obj = [
//   { id: 1, title: "Микроволновка", price: 1500, count: 4 },
//   { id: 2, title: "Телевизор", price: 2500, count: 1 },
//   { id: 3, title: "Тумба", price: 5500, count: 5 },
// ];

// newObj = [];

// obj.forEach((el) => {
//   let quantity;

//   if (el.id === 1) {
//     quantity = 10;
//   } else if (el.id === 2) {
//     quantity = 3;
//   } else {
//     quantity = 7;
//   }
//   const newObject = { ...el, quantity };
//   newObj.push(newObject);
// });
// console.log(newObj);

// -------------------------------------------// задача 31

// Сгруппируйте объекты в массиве по определенному свойству, используя метод forEach.

// const obj = [
//   { id: 1, title: "Микроволновка", price: 1500, count: 4 },
//   { id: 2, title: "Телевизор", price: 2500, count: 1 },
//   { id: 3, title: "Тумба", price: 5500, count: 5 },
// ];

// let newObj = [];
// let newObj2 = [];
// obj.forEach((el) => {
//   if (el.title.startsWith("Т")) {
//     newObj.push(el);
//   } else newObj2.push(el);
// });
// console.log(newObj);
// console.log(newObj2);

// -------------------------------------------// задача 32

// Создайте новый массив объектов, отфильтровав существующий массив объектов на основе свойства с помощью метода forEach.

// const obj = [
//   { id: 1, title: "Микроволновка", price: 1500, count: 4 },
//   { id: 2, title: "Телевизор", price: 2500, count: 1 },
//   { id: 3, title: "Тумба", price: 5500, count: 5 },
// ];

// newObj = [];

// obj.forEach((el) => (el.count > 3 ? console.log(false) : newObj.push(el)));

// console.log(newObj);

// -------------------------------------------// задача 33

// Вычислить произведение всех чисел в массиве с помощью метода forEach.

// const arr = [3, 2, 4, 4, 5, 56, 43, 2, 1, 7];

// let summ = 0;

// arr.forEach((el) => (summ += el));

// console.log(summ);

// -------------------------------------------// задача 34

// Найдите первый индекс элемента в массиве, используя метод forEach.

// const arr = [3, 2, 4, 4, 5, 56, 43, 2, 1, 7];

// const findIndex = 56;
// let resultIndex = -1;

// arr.forEach((el, index) => {
//   if (el === findIndex && resultIndex === -1) {
//     resultIndex = index;
//   }
// });

// if (resultIndex !== -1) {
//   console.log(`Первый индекс элемента ${findIndex}: ${resultIndex}`);
// } else {
//   console.log(`Элемент ${findIndex} не найден в массиве`);
// }

// -------------------------------------------// задача 35

// Создайте новый массив, объединив два существующих массива с помощью метода forEach.

// const arr = [1, 2, 3, 4, 5];
// const arr2 = [6, 7, 8, 9, 10];

// newArray = [];
// arr.forEach((el) => newArray.push(el));
// arr2.forEach((el) => newArray.push(el));
// console.log(newArray);

// -------------------------------------------// задача 36

// Найдите сумму всех четных чисел в массиве, используя метод forEach.

// const arr = [3, 2, 4, 4, 5, 56, 43, 2, 1, 7];

// let sumEven = 0;
// let sumOdd = 0;

// arr.forEach((el) => (el % 2 === 0 ? (sumEven += el) : (sumOdd += el)));

// console.log(sumEven);
// console.log(sumOdd);

// -------------------------------------------// задача 37

// Удалите все ложные значения из массива, используя метод forEach.

// const arr = [3, -2, 1, -5, 34, "kristi", 2, "Vanya"];

// const arr2 = [];

// arr.forEach((el) => {
//   if (typeof el === "number") {
//     arr2.push(el);
//   }
// });
// console.log(arr2);

// -------------------------------------------// задача 38

// Создайте новый массив, сопоставив существующий массив с массивом объектов, используя метод forEach.

// const obj = [
//   { id: 1, title: "Микроволновка", price: 1500, count: 4 },
//   { id: 2, title: "Телевизор", price: 2500, count: 1 },
//   { id: 3, title: "Тумба", price: 5500, count: 5 },
// ];

// const arr = [30000, 33, 11111];

// newArray = [];
// obj.forEach((el, ind) => {
//   if (el.price < arr[ind]) {
//     el.price = arr[ind];
//     newArray.push(el);
//   }
// });
// console.log(newArray);

// -------------------------------------------// задача 39

// Найдите индекс последнего элемента в массиве, который соответствует определенному критерию, используя метод forEach.

// const arr = [3, 2, 4, 4, 5, 56, 43, 2, 1, 7];

// lastIndex = -1;

// arr.forEach((el, ind) => (lastIndex = ind));
// console.log(lastIndex);

// -------------------------------------------// задача 40

// Обновите объект в массиве объектов на основе определенных критериев, используя метод forEach.

// const obj = [
//   { id: 1, title: "Микроволновка", price: 1500, count: 4 },
//   { id: 2, title: "Телевизор", price: 2500, count: 1 },
//   { id: 3, title: "Тумба", price: 5500, count: 5 },
// ];

// let newObj = [];

// obj.forEach((el) => {
//   if (el.price > 2000) {
//     el.price *= 2;
//     newObj.push(el);
//   }
// });
// console.log(newObj);
