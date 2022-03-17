"use strict";
class HumanData {
    constructor(Name, Height, Weight, ColorEyes, Age, Adult) {
        this._adult = true;
        this._fullname = Name;
        this._height = Height;
        this._weight = Weight;
        this._colourEyes = ColorEyes;
        this._age = Age;
        this._adult = Adult;
    }
    get fullname() {
        return this._fullname;
    }
    set fullname(value) {
        this._fullname = value;
    }
    get height() {
        return this._height;
    }
    set height(value) {
        if (value < 0) {
            console.log("Such height of human doesn't exist. Try again");
        }
        else {
            this._height = value;
        }
    }
    get weight() {
        return this._weight;
    }
    set weight(value) {
        if (value < 0) {
            console.log("Such weight of human doesn't exist. Try again");
        }
        else {
            this._weight = value;
        }
    }
    get colourEyes() {
        return this._colourEyes;
    }
    set colourEyes(value) {
        this._colourEyes = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
}
const human = new HumanData("Ivan Ivanovich Ivanov", 182, 82, "blue", 21);
console.log(human.fullname);
console.log(human.height);
console.log(human.weight);
console.log(human.colourEyes);
console.log(human.age);
