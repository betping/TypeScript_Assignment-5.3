function MyMethodDecorator (target: any, propertyKey: string, descriptor?: PropertyDescriptor) {
    console.log(`target: ${target}`);
    console.log(`propertyKey : ${propertyKey}`);
    console.log(`descriptor : ${descriptor}`);
}

class MyMethodDecoratorExample {
    @MyMethodDecorator
    print(output: string) {
        console.log(`classMyMethodDecoratorExample.print (${output}) called.`);
    }
}

let testObj = new MyMethodDecoratorExample();
testObj.print("Hello");
