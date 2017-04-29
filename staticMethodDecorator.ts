function MyStaticMethodDecorator(
    target: Function,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<any>
) {
    console.log(`MyStaticMethodDecorator called on: 
        target function - ${target}, 
        propertyKey - ${propertyKey},
        descriptor - ${descriptor}`);
}

class MyStaticMethodDecoratorExample {
    @MyStaticMethodDecorator
    static print(output: string) {
        console.log(`MyStaticMethodDecoratorExample.print(${output}) called.`);
    }
}

MyStaticMethodDecoratorExample.print("Hello");
