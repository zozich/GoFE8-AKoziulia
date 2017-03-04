function Human(name, age, sex, height, weight) {
    this.name = name || "Max";
    this.age = age || 25;
    this.sex = sex || "male";
    this.height = height || 180;
    this.weight = weight || 75;
}

var human = new Human();

function Worker(occupation, salary) {
    this.occupation = occupation;
    this.salary = salary;
    this.work = function () {
        alert("I am going to work!");
    }
}

Worker.prototype = human;

function Student(school, scholarship) {
    this.school = school;
    this.scholarship = scholarship;
    this.watchMovies = function () {
        alert("I am watching movies!");
    }
}

Student.prototype = human;

var worker = new Worker("GoIT", 5000);
console.log("My name is " + worker.name);
console.dir(worker);

var student = new Student("KPI", 1000);
console.log("My weight is " + student.weight);
console.dir(student);