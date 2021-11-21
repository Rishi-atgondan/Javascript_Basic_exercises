//1.JavaScript Program To Print Hello World

function print() {
    document.write("Hello World" + "<br>" + "<br>");
}

//2.JavaScript Program to Add Two Numbers

function addnum() {
    let a = 20;
    let b = 10;
    let c = a + b;
    document.write("Sum of Two Numbers:" + c)
}

//3.JavaScript Program to Find the Square Root

function sqrt() {
    let d = Math.sqrt(10);
    let e = Math.sqrt(8);
    document.write("Square Root is:" + d + e);
}

//4.JavaScript Program to Swap Two Variables

function swap() {
    let a = "Rishi";
    let b = "Santhanu";
    let c = a;
    a = b;
    b = c;
    document.write(a, b);
}

//5.Javascript Program to Convert Celsius to Fahrenheit
// (x*9/5)+32

function convertctof() {

    let Celsius = 132;
    let x = Celsius * 9 / 5;
    let y = x + 32;
    document.write(y);
}

//6.Javascript Program to Generate a Random Number

function randomnum() {
    let a = Math.random();
    document.write(a);
}

function randomnum1() {
    let a = Math.random();
    let b = Math.floor((a * 50) + 1);
    document.write(b);
}

//7.Javascript Program to Check if a Number is Odd or Even

function oddoreven() {
    let a = 23;
    if (a % 2 == 0) {
        document.write("even number");
    }
    else {
        document.write("odd number");

    }
}

function oddoreven2() {
    let a = 46;
    if (a % 2 == 0) {
        document.write("even number");
    }
    else {
        document.write("odd number");

    }
}

