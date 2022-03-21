export {};

// Statik Tipleme
let a:string; // Static String
a="Emir Özdemir";

let age:number; // Static Number
age=21;

let dynamicVariable:any; //Dynamic Structure
dynamicVariable="Bu dinamik bir yapı";

let langs:string[]; // Arrays With TypeScript
langs= ["İngilizce","Almanca","İspanyolca","İtalyanca"];

console.log(...langs); // Write all elements of array


// Functions in TypeScript
function addNums(num1:number,num2:number){
    console.log(num1+num2);
}

addNums(88,97);

// Functions With Return
function addNumsReturn(num1:number,num2:number):number{
    return num1+num2;
}

addNumsReturn(77,88);

// Optional Parameter To Function => x?:Number

// Void Function Usage function(...):void

//Class Usage
class Person{
    name:string;
    age:number;
    phone:string;

    constructor(name:string,age:number,phone:string){
        this.name=name;
        this.age=age;
        this.phone=phone;
    }

    showInfo(){
        document.writeln(this.name);
        document.writeln(this.age.toString());
        document.writeln(this.phone);
    }
}

var x = new Person("Emir",21,"5555555");
x.showInfo();

// Inheritance Usage
class Employee extends Person{
    department:string;

    constructor(name:string,age:number,phone:string,department:string){
        super(name,age,phone);
        department=this.department;
    }

    showInfo(){
      super.showInfo();
      document.writeln(this.department);
    }

   
}

var y = new Employee("Emir",21,"5555555","Software");
y.showInfo();

// Interface usage
interface IDatabase{
    add();
    get();
    delete();
    update();
}

class MSSQL implements IDatabase {
    add() {
        document.write("added!");
    }

    get(){
        document.write("got!");
    }

    delete() {
        document.write("deleted!");
    }

    update() {
        document.write("updated");
    }
}

var z = new MSSQL();
z.add();

