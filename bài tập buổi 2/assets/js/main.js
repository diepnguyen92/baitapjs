// bài 1
console.log("Bai tap 1")
function number(i){
    if(i%3==0 && i%5==0) {
        console.log("FizzBuzz");
    }
    else if (i%3==0) {
        console.log("Fizz");
    }
    else if (i%5==0) {
        console.log("Buzz");
    }
}
// thử dữ liệu
number(10);
number(15);
number(9);
// bai 2
console.log("Bai tap 2")
function giaiToan(a,b){
    if (a===0 && b === 0) {
        console.log("vô số nghiệm");
    }
    else if (a===0 && b!=0)
    console.log("Phương trình vô nghiệm");
else {
    console.log(x=-b/a);
}
}
giaiToan(2,2);
giaiToan(0,2);
giaiToan(0,0);
// sử dụng return

let mark = (c,d) => {
    if (c===0 && d === 0) {
        return "vô số nghiệm";
    }
    else if (c===0 && d!=0)
    return "Phương trình vô nghiệm";
else {
    return x=-d/c;}
}
console.log(mark(2,3));
console.log(mark(0,2));
console.log(mark(0,0));
