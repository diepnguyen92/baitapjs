
// bai 1

function point(mark){
if(mark>=85){console.log("A");}
else if (mark>=70 && mark <80) {console.log("B");}
else if (mark>=40 && mark <70) {console.log("C");}
else {console.log("D");}}
point(90);

// bai 2
function number(a,b) {
    if(a>b) {console.log(a);}
    else {console.log(b)}
}
// thu du lieu
number(8,4);

// bai 3
function value(h) {
if(h<0) {console.log("so am");}
else if(h>0) {console.log("so duong");}
else {console.log(`so 0`);}
}
// thu du lieu
value(2);

// bai 4
function number1(c) {
    if(c%2 ==0) {console.log("so chan");}
    else {console.log(`so le`);}
    }
    // thu du lieu
    number1(2);
// bai 5
function number2(D) {
    if (D%3==0 && D%5==0) {console.log("so chia het cho 3 va 5");}
    else {console.log("so khong chia het cho 3 va 5");}
}
// thu du lieu
number2(15);
number2(10);
// bai 6
function number3(a, b, c) {
    if (c === a + b) {
        console.log(`${c} bằng ${a} + ${b}`);
    } else {
        console.log(`${c} không bằng ${a} + ${b}`);
    }
}
// thu du lieu
number3(3, 5, 8); 
number3(7, 8, 9); 
number3(10, 20, 30); 
