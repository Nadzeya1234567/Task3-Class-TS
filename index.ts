class HumanData {
  private _fullname: string;
  private _height: number;
  private _weight: number;
  private _colourEyes: string;
  private _age: number;
  private _adult: boolean;

  constructor(
    Name: string,
    Height: number,
    Weight: number,
    ColorEyes: string,
    Age: number,
    Adult: boolean
  ) {
    this._fullname = Name;
    this._height = Height;

    this._weight = Weight;

    this._colourEyes = ColorEyes;
    this._age = Age;
    this._adult = Adult;
  }

  get fullname(): string {
    return this._fullname;
  }
  set fullname(value: string) {
    this._fullname = value;
  }

  get height(): number {
    return this._height;
  }
  set height(value: number) {
    if (value <= 0) {
      console.log("Such height of human doesn't exist. Try again");
    } else {
      this._height = value;
    }
  }

  get weight(): number {
    return this._weight;
  }
  set weight(value: number) {
    if (value <= 0) {
      console.log("Such weight of human doesn't exist. Try again");
    } else {
      this._weight = value;
    }
  }

  get colourEyes(): string {
    return this._colourEyes;
  }
  set colourEyes(value: string) {
    this._colourEyes = value;
  }

  get age(): number {
    return this._age;
  }
  set age(value: number) {
    this._age = value;
  }

  get adult(): boolean {
    return this._adult;
  }
  set adult(value: boolean) {
    this._adult = value;
  }
}

let human = new HumanData("Ivan", 182, 82, "blue", 21, true);

console.log(human.fullname);
console.log(human.height);
console.log(human.weight);
console.log(human.colourEyes);
console.log(human.age);
console.log(human.adult);
console.log(human);
