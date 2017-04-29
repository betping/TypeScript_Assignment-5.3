var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
 Create a Static Method decorator, name it as MyStaticMethodDecorator and
 define target function and display message once
 called with class MyStaticMethodDecoratorExample.
 Console following values:
 ● target,
 ● propertyKey,
 ● descriptor
 */
function MyStaticMethodDecorator(target, propertyKey, descriptor) {
    console.log("MyStaticMethodDecorator called on: \n        target function - " + target + ", \n        propertyKey - " + propertyKey + ",\n        descriptor - " + descriptor);
}
var MyStaticMethodDecoratorExample = (function () {
    function MyStaticMethodDecoratorExample() {
    }
    MyStaticMethodDecoratorExample.print = function (output) {
        console.log("MyStaticMethodDecoratorExample.print(" + output + ") called.");
    };
    __decorate([
        MyStaticMethodDecorator
    ], MyStaticMethodDecoratorExample, "print", null);
    return MyStaticMethodDecoratorExample;
}());
MyStaticMethodDecoratorExample.print("Hello");
