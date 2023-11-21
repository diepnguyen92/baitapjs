// Bài tập 3
console.log("Bài tập 3")
let sum = (a,b,c) => {
    if (a===0 && b===0 && c===0) {
        return "vô số nghiệm";}
    else if (a===0){
        return x = -c/b;
    } 
    else if (a!=0){
// tính delta
     let delta = b*b - 4*a*c;
     if (delta === 0){
        return x=-b/(2*a);
     }
     else if (delta<0){
        return " vô nghiệm";
     }
     else {
        let x1 = (-b+Math.sqrt(delta))/(2*a);
        let x2 = (-b-Math.sqrt(delta))/(2*a);
        return "phương trình có 2 nghiệm x1 = "+x1+" và x2="+x2;
     }   
    }
}
console.log(sum(0,1,1));
console.log(sum(0,0,0));
console.log(sum(1,2,3));
console.log(sum(1,1,-5));

// bài tậP 4 tính cân nặng và chiều cao
console.log("Bài tập 4")

let BMI = (w,h) => w/(h*h);
// thử dữ liệu
console.log(BMI(60,2));
console.log(BMI(60,1.7));

// bài tậP 5 đổi độ c sang độ f
console.log("Bài tập 5");
let number2 = (t) => t*(9/5)+32;
console.log(number2(1));
console.log(number2(5));
console.log(number2(10));
console.log(number2(36));