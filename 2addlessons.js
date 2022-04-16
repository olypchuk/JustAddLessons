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

const countries = [
  "Ukraine",
  "Poland",
  "Croatia",
  "Montenegro",
  "France",
  "USA",
];

const countriesPrice = [100, 200, 300, 400, 500, 600];

const loginRegistr = prompt('reg лог');
const passwordRegistr = prompt('reg пароль');
let login;
let password;
const loginization = () => {
  do {
 login = prompt('ввести лог');
password = prompt('ввести пароль');
  }while(login !== loginRegistr &&password!==passwordRegistr) 

   return  console.log('успіх!!')
}
console.log(loginization());

const sum = prompt('Скільки грошей потратиш?');

let indexCountry;
let total;
let allCountries = [];
let balance;
let trueIndex;
for (let i = 100; i <= sum; i += 100) {

  total = countriesPrice.indexOf(i);
    allCountries.push(countries[total])

}
// console.log(sum);
const chooseCountry = prompt(`Виберіть країну:${allCountries}`);

let indexPrice = allCountries.indexOf(chooseCountry);
console.log(countriesPrice[indexPrice]);
let x = countriesPrice[indexPrice];
balance = sum-x;
console.log(`Тур оплачено!!balance:${balance}`);