
class Storage{
    constructor(items){
    items=[]
    }
    getItems(){
        return this.items
    }
    addItem(newItem){
        // this.items.push(newItem);
        return this.items
    }
    removeItem(itemToRemove){
this.items.splice(this.items.indexof(itemToRemove),1);
return this.items
    }

}

// Change code above this line
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
