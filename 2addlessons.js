// const circle = prompt("який радіус кола")
// const square = 3.14*circle**2
// console.log(`Площа кола, ${square}`);

// const midSpeed = 50;
// let way = prompt("Введіть відстань");
// const time = way/midSpeed;
// console.log(time);

// const sum=prompt(`Введіть суму на картці`);
// const pricePerBenzine = prompt(`Введіть ціну за літр`);
// const benzin =sum/pricePerBenzine
// console.log(`Ви можете купити ${benzin} літрів`);
// console.log(`Вам нараховано ${benzin*0.02} бонусних грн`);

// let total = 0;
// let number;
//  while (number !== null) {   number = prompt(`Введіть число`);
//      total += +number;
//      if (number === null) {
//         alert(` "Загальна сума введених чисел дорівнює ${total}`);
//      }
// }

// const countries = [
//   "Ukraine",
//   "Poland",
//   "Croatia",
//   "Montenegro",
//   "France",
//   "USA",
// ];

// const countriesPrice = [100, 200, 300, 400, 500, 600];

// const loginRegistr = prompt('reg лог');
// const passwordRegistr = prompt('reg пароль');
// let login;
// let password;
// const loginization = () => {
//   do {
//  login = prompt('ввести лог');
// password = prompt('ввести пароль');
//   }while(login !== loginRegistr &&password!==passwordRegistr)

//    return  console.log('успіх!!')
// }
// loginization();

// const sum = prompt('Скільки грошей потратиш?');

// let indexCountry;
// let total;
// let allCountries = [];
// let balance;
// let trueIndex;
// for (let i = 100; i <= sum; i += 100) {

//   total = countriesPrice.indexOf(i);
//     allCountries.push(countries[total])

// }
// // console.log(sum);
// const chooseCountry = prompt(`Виберіть країну:${allCountries}`);

// let indexPrice = allCountries.indexOf(chooseCountry);
// // console.log(countriesPrice[indexPrice]);
// let x = countriesPrice[indexPrice];
// balance = sum-x;
// console.log(`Тур оплачено!!balance:${balance}`);

// / 2. У нас есть объект, в котором храняться зарплаты команды.
// Напишите код для сумирования всех зарплат и сохраните его результат в переменной sum.
// Если объект salaries пуст, то результат должен быть 0.

// 2. У нас есть объект, в котором храняться зарплаты команды.
// Напишите код для сумирования всех зарплат и сохраните его результат в переменной sum.
// 4. Создайте объект calculator с тремя методами:
// - read(a, b) - принимает два аргумента и сохраняет их как свойства объекта.
// - sum() - возвращает сумму сохраненных значений.
// - mult() - переумножает сохраненные значения и возвращает результат.

// 3. Напишите ф-цию calcTotalPrice(stones, stonesName), которая принимает массив объектов и
// строку с названием камня. Функция считает и возвращает общую стоимость камней
// с таким именем, ценой и количеством из объекта

// const stones = [
//   { name: "Изумруд", price: 1300, quantity: 4 },
//   { name: "Бриллиант", price: 2700, quantity: 6 },
//   { name: "Сапфир", price: 400, quantity: 7 },
//   { name: "Щебень", price: 150, quantity: 100 },
// ];

// const sunStones = (stones, stonesName) => {
 
//   for (const { name, price, quantity } of stones) {
  
 
//     if (name === stonesName) {
  
//     return price*quantity
//   }   }
// }
// console.log(sunStones(stones,"Щебень"));
 

const bookShelf = {
  books: ["The last kingdom", "Haze", "The guardian of dreams"],
  updateBook(oldName, newName) {
  
   
    const oldNameIndex =this.books.indexOf(oldName);
    this.books.splice(oldNameIndex, 1, newName);
    
    console.log(this.books);
    return this.books
    
  }, 
};
bookShelf.updateBook("Haze", "Dungeon chronicles")
console.log(bookShelf);