// Function constructor

var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function() {
    console.log(2016 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var pedro = new Person('Pedro', 1994, 'developer)');
var laura = new Person('Juan', 1989, 'developer)');

pedro.calculateAge();
laura.calculateAge();
john.calculateAge();

console.log(john.name + ' ' + john.lastName);