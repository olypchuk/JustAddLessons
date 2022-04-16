// const par = 5;
// for (i = 0; i < par; i += 1){
//     console.log(i);
// }

// for (i = 0; i <= 20; i += 5) {
//   let sum = 0;

// for (let k = 0; k <= i; k += 1) {
//     sum += k;
//     ;
// }console.log(sum)
// }
 
// function calculateTotal(number) {
//  // Change code below this line

    

// for (let i = 0; i<= number; i += 1) {
//   calculateTotal += i;
//     }
//     return

//   // Change code above this line
// }

// console.log(calculateTotal(12));
// function calculateTotal(number) {
//  // Change code below this line
// let suma = 0;
// for(
//   i = 0 ; i <=number; i += 1){
//    suma+= i;
 
//   }



//   // Change code above this line
// }
// const suma = function addSuma(number) {
//     let sum = 0;
//     for (
//         i = 0; i <= number; i += 1){
//         sum += i;
//     }
    
//     return sum;
// }
// console.log(suma(6));


// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   hobbies: ["swiming", "music", "sci-fi"],
// };

// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
// bookShelf.addBook("The Mist");
// bookShelf.addBook("Dream Guardian");
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
// bookShelf.removeBook("The Mist");
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'Dream Guardian']

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Если это собственное свойство - выполняем тело if
//   if (book.hasOwnProperty(key)) {
//     // console.log(key);
//     console.log(book[key]);
//   }

//   // Если это не собственное свойство - ничего не делаем
// }




// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//     for (const orde of order) {
//         total += orde;
// }
//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([1,3,10]))


// const find = function (numbers) {
//     let smaal = numbers[0];
//     for (const number of numbers) {
//         if (number < smaal) {
//             smaal = number;
//         }
//         return smaal;
//     }
// };
// console.log(find([100, 2, 3, 4,895]));



// // function splitMessage(message, delimeter) {
// //   let words;
// // message.split()
    
// //      return words;
// // }
// const name = "Mango";
// console.log(name.split("")); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript_essentials";
// console.log(message.split("_")); // ["JavaScript", "essentials
// const aaa = 10;
// const message1 = "JavaScript essentials 4 4";
// console.log(message1.split(" ").length * aaa);

// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
// res = message.split(" ").length * pricePerWord;
// return res;

//    // Change code above this line
// }
// console.log(calculateEngravingPrice("adad adad adad", 190));

// function slugify(title) {
//     // Change code below this line
//     resres= title.toLowerCase().split(" ").join("-");
//     return resres;
// }
// console.log(slugify("Amy mg mg"));












// function checkForSpam(message) {
//   let result;
//   // Change code below this line
// result = message.toUpperCase().includes("SALE")||message.toUpperCase().includes("SPAM");
//   // Change code above this line
//   return result;
// }
// console.log(checkForSpam("Spabdgbjkhlkjghe dfggfdgdfgdfg"));


  // Название
//   console.log(book.title);
//   // Автор
//   console.log(book.author);
//   // Рейтинг
//   console.log(book.rating);
function multiply(firstNumber, secondNumber, ...otherArgs) {
  console.log(firstNumber); // Значение первого аргумента
  console.log(secondNumber); // Значение второго аргумента
  console.log(otherArgs); // Массив остальных аргументов
}

multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4);
const first = { propA: 5, propB: 10, propC: 50 };
const second = { propC: 15 };

const third = { propB: 20, ...first, ...second };
console.log(third); // { propA: 5, propB: 10, propC: 15 }

const fourth = { ...first, ...second, propB: 20 };
console.log(fourth); // { propA: 5, propB: 20, propC: 15 }

const fifth = { ...first, propB: 20, ...second };
console.log(fifth); // { propA: 5, propB: 20, propC: 15 }
