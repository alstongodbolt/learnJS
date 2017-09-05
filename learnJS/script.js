/* console.log('Hello World')
var name = 'John '
console.log(name)
var lastName = 'Smith'
console.log(name + lastName)
var age = 26
var feelsLike = 10
console.log(age + feelsLike)
console.log('My age:', 2017 - 1984)
var fullAge = true
console.log(fullAge)

var name = 'John'
var age = 26
console.log(name + age)

var job, isMarried
console.log(job)

job = 'teacher'
isMarried = false
console.log(name + ' age: ' + age + ' works as a ' + job + ' marriage equals ' + isMarried + '.')

job = 26
console.log(job)

// get data from the console
var last = prompt('What is the last name? ')
console.log(last)

alert('Hi ' + last + '!')

// operators
var birthYear = 2017 - 33
console.log(birthYear)

birthYear = 2017 - 33 * 2

console.log(birthYear)

var ageJohn = 38
var ageMark = 30
console.log(ageMark)
ageMark++
ageJohn = (3 + 5) * 4 - 6
console.log(ageJohn)
console.log(ageMark)


var name = 'Alston'
var age = 12
var isMarried = true

if (age > 18)
{
	console.log('You are old enough to enter');
	
	
} 
else
{
	console.log('Not old enough to enter');
}

if (23 === "23")
{
	console.log("triple equals");
}


var age = 23;
if (age < 20)
{
	console.log('John is a teenager');
}
else if (age > 20 && age < 30)
{
	console.log('John is a young man');
}
else
{
	console.log('John is an old man');
	
}

var i = 0;
while (i < 20)
{
	console.log(i);
	i++;
}
//switch
var job = 'driver';
switch (job)
{
	case 'teacher':
		console.log('John teaches kids.');
		break;
	case 'driver':
		console.log('John drives a school bus.');
		break;
	case 'cop':
		console.log('John fights.');
		break;
	defaut:
		console.log('John is unemployeed.');
}

//funcitons
function calculateAge(yearOfBirth)
{
	var age = 2017 - yearOfBirth;
	return age;
}
var aging = calculateAge(1984);
console.log(aging);
function yearsUntillRetirement(name, year)
{
	var age = calculateAge(year);
	var retirement = 65 - age;
	console.log(retirement);
}
yearsUntillRetirement('John', 1984);


//arrays
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names);
names[1] = 'Ben';
console.log(names);

var john = ['John', 'Smith', 1984, 'teacher', false];
console.log(john);
john.push('blue'); //adds element to end of array
console.log(john);
john.unshift('Mr.'); //adds to front
john.pop(); //removes last element from end
console.log(john)
john.shift(); //removes from front
alert(john.indexOf('Smith')); //returns position of element


console.log(john);
console.log(john.lastName);
console.log(john['lastName']);
var xyz = 'job';
console.log(john[xyz]);

john.lastName = 'Miller';
john['job'] = 'programmer';
console.log(john);

var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
console.log(jane);


var john = {
	name: 'John',
	lastName: 'Smith',
	yearOfBirth: 1990,
	job: 'Teacher',
	isMarried: false,
	family: ['Jane', 'Mark', 'Bob'],
	calcuateAge: function(yearofBirth){
		return 2017 - this.yearOfBirth;
	}
};
console.log(john)

*/

var john = {
	name: 'John',
	lastName: 'Smith',
	YOB: 1990,
	
}


