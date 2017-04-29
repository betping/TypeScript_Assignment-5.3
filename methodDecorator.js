var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
 Create a Method decorator, name it as MyMethodDecorator and
 define target function and display message once
 called with class MyMethodDecoratorExample.
 Console following values:
 ● target,
 ● propertyKey,
 ● descriptor
 */
function MyMethodDecorator(target, propertyKey, descriptor) {
    console.log("target: " + target);
    console.log("propertyKey : " + propertyKey);
    console.log("descriptor : " + descriptor);
}
var MyMethodDecoratorExample = (function () {
    function MyMethodDecoratorExample() {
    }
    MyMethodDecoratorExample.prototype.print = function (output) {
        console.log("classMyMethodDecoratorExample.print (" + output + ") called.");
    };
    __decorate([
        MyMethodDecorator
    ], MyMethodDecoratorExample.prototype, "print", null);
    return MyMethodDecoratorExample;
}());
var testObj = new MyMethodDecoratorExample();
testObj.print("Hello");
