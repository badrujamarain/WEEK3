function EmployeeInfo(name, Salary)
{
console.log("Welcome " + name + " Your monthly Salary is " + Salary);
}
const currentDateTime = new Date();

console.log("This is my first program");
console.log("Programe run on : " + currentDateTime.toLocaleString());

var EmpName = "John";
var EmpSalary = 50000;

EmployeeInfo(EmpName,EmpSalary);
// Add this for Second Exercise
const skills= (skills,Name,LabGrp) => 
    {
console.log(" Student ID"+ Name+ "Expert in "+ skills)
console.log("Lab Group Name"+LabGrp)
}
skills("Java"," 3116367 ", "18")
// code for third Exercise
const student= require('./StudentInfo')
const person = require('./Person')
// because getName is the function so we use ()
console.log("Student Name:" +student.getName())
console.log(student.Location())
console.log(student.dob)
// because dob is a variable so we do nt use ()
console.log(student.Studentgrade())
console.log("grade is "+student.Studentgrade(55) )
person1= new person("Badrujama","23","badrujamarain03@gmail.com")
console.log("using Person Module",person1.getPersonInfo())
console.log("Programe ended")