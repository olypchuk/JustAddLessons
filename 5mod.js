
// class Storage{
//     constructor(items) {
//         this.items=items
//     }
//     getItems(){
//         return this.items
//     }
//     addItem(newItem){
//         this.items.push(newItem);
//         return this.items
//     }
//     removeItem(itemToRemove){
// this.items.splice(this.items.indexOf(itemToRemove),1);
// return this.items
//     }

// }

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// class StringBuilder{
//     constructor(initialValue){
//         this.value = initialValue
        
//     }
//     getValue(){
//         return this.value;
//     }
//     padEnd(str) {
//         this.value +=str;
//     }
//     padStart(str){
//         this.value=str+this.value

//     }
//     padBoth(str){
//        this.value=str+this.value+str
//     }
// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// class Car {
//   // Change code below this line
// #price;
// static MAX_PRICE=50000
// ;  
//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if(newPrice<=Car.MAX_PRICE){
//     this.#price = newPrice;}
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000
