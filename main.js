function log(message) {
    console.log(message);
}
var message = 'This is Blanca';
log(message);
/**  declare a variable : var & let */
var number = 1;
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finaly' + i); // valid outside of the declaration of i, in JS var is valid in the nearest function
}
doSomething();
let count = 5; //let keyword also in ES5 
//count = 'a'; // in ts, it is invalid, in JS, it is Ok
let a;
a = 1;
a = true;
a = 'a';
/** type annotation */
let b; // type annotation
let c;
let d;
let e = [1, 2, 3];
let f = [1, true, 'a', false];
const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;
/** enum */
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
let backgroundColor = Color.Red;
/** type assertion */
let message1 = 'abc';
let endsWithC = message1.endsWith('c');
let message2;
message2 = 'abc';
let endsWithC2 = message2.endsWith('c'); //should do type assertions
let alternativeWay = message2.endsWith('c');
/** arrow function : lambda */
let log1 = function (message1) {
    console.log(message1);
};
let doLog = (message1) => console.log(message);
let doLog1 = message1 => console.log(message);
let doLog2 = () => console.log();
let drawPoint = (point) => {
    // ...
};
drawPoint({
    x: 1,
    y: 1
});
/** inline annotation */
let drawPoint1 = (point) => {
    //...
};
let drawPoint2 = (point) => {
    // ...
};
drawPoint({
    x: 1,
    y: 2
});
let getDistane = (pointA, pointB) => {
    // ...
};
/** class */
class Point {
    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
    getDistance(another) {
        // ...
    }
}
let point = new Point(); // declare Point object, 
point.x = 1;
point.y = 2;
point.draw();
