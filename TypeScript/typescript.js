"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
// Statik Tipleme
var a; // Static String
a = "Emir Özdemir";
var age; // Static Number
age = 21;
var dynamicVariable; //Dynamic Structure
dynamicVariable = "Bu dinamik bir yapı";
var langs; // Arrays With TypeScript
langs = ["İngilizce", "Almanca", "İspanyolca", "İtalyanca"];
console.log.apply(console, langs); // Write all elements of array
// Functions in TypeScript
function addNums(num1, num2) {
    console.log(num1 + num2);
}
addNums(88, 97);
// Functions With Return
function addNumsReturn(num1, num2) {
    return num1 + num2;
}
addNumsReturn(77, 88);
// Optional Parameter To Function => x?:Number
// Void Function Usage function(...):void
//Class Usage
var Person = /** @class */ (function () {
    function Person(name, age, phone) {
        this.name = name;
        this.age = age;
        this.phone = phone;
    }
    Person.prototype.showInfo = function () {
        document.writeln(this.name);
        document.writeln(this.age.toString());
        document.writeln(this.phone);
    };
    return Person;
}());
var x = new Person("Emir", 21, "5555555");
x.showInfo();
// Inheritance Usage
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, phone, department) {
        var _this = _super.call(this, name, age, phone) || this;
        department = _this.department;
        return _this;
    }
    Employee.prototype.showInfo = function () {
        _super.prototype.showInfo.call(this);
        document.writeln(this.department);
    };
    return Employee;
}(Person));
var y = new Employee("Emir", 21, "5555555", "Software");
y.showInfo();
var MSSQL = /** @class */ (function () {
    function MSSQL() {
    }
    MSSQL.prototype.add = function () {
        document.write("added!");
    };
    MSSQL.prototype.get = function () {
        document.write("got!");
    };
    MSSQL.prototype["delete"] = function () {
        document.write("deleted!");
    };
    MSSQL.prototype.update = function () {
        document.write("updated");
    };
    return MSSQL;
}());
var z = new MSSQL();
z.add();
