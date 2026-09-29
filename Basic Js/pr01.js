let marks = prompt("Enter the marks");
if(marks>=80 && marks <=100){
    grade = "A";
}else if(marks >= 70 && marks <= 89){
    grade = "B";
}else if(marks >= 60 && marks <= 69){
    grade = "C";
}else if(marks >= 50 && marks <= 59){
    grade = "D";
}else{
    grade = "F";
}
console.log("According to your marks your grade is ",grade);