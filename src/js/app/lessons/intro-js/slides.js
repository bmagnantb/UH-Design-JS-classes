export default [
	{
		title: 'What is Javascript?',
		subtitle: '',
		content: `
+ a programming language
+ created for Netscape Navigator
+ in 10 days
`
	},
	{
		title: 'What is a programming language?',
		content: `
<ul>
	<li>tells a computer what to do</li>

	<li>
		html -- markup language<br>
		css -- style sheet language<br>
		both static, describe structure and display, respectively
	</li>

	<li>
		programming languages are dynamic and, essentially, just input and output
	</li>
</ul>
`
	},
	{
		title: '1995: Javascript Created',
		content: `
+ the 90s really loved flashy
+ http://www.dpgraph.com/
+ javascript just made things blink and move repeatedly
`
	},
	{
		title: 'Javascript Now',
		content: `
+ still the only browser language
+ handles all interactivity except the most basic
+ modifies web pages without reloading
+ handles data flow from servers
+ everywhere: phones, smart tvs, robots, fancy thermostats
+ even native apps: Brackets is written in Javascript
`
	},
	{
		title: 'Interactivity in Web Pages',
		content: `
+ interactivity produces screen output via user input
+ css limited to :hover and tricks with form inputs
+ javascript enables output based on nearly any possible user input
+ so we can animate, change content, etc based on many cues
`
	},
	{
		title: 'Intro to programming',
		content: `
+ computers - extremely dumb, fast, obedient
+ programming languages tell computers what to do
+ programing languages much stricter than human language
+ computer has no ability to intuit meaning
`
	},
	{
		title: 'code comments',
		subtitle: '',
		content: `
+ comments are ignored by the computer
+ notes written to help you and others understand code

\`\`\`hljs
// single-line comment

/*
	multi-line
	comment
*/
\`\`\`
`
	},
	{
		title: 'primitives',
		subtitle: '',
		content: `
primitives are basic values

+ string
+ number
+ boolean
+ undefined
+ null
`
	},
	{
		title: 'primitives',
		subtitle: 'string',
		content: `
+ text that shouldn't be evaluated as code
+ preserved as text, character for character
+ in quotes, single or double

\`\`\`hljs
'this is a string'
"also a string"
\`\`\`
`
	},
	{
		title: 'primitives',
		subtitle: 'number',
		content: `
\`\`\`hljs
1478
.3319
\`\`\`
`
	},
	{
		title: 'primitives',
		subtitle: 'boolean',
		content: `
\`\`\`hljs
true
false
\`\`\`
`
	},
	{
		title: 'primitives',
		subtitle: 'undefined',
		content: `
a value that doesn't exist
`
	},
	{
		title: 'primitives',
		subtitle: 'null',
		content: `
a value that is nothing
null vs undefined
`
	},
	{
		title: 'console',
		content: `
+ the console allows you to run code and see the result
+ cmd + opt + i  or right-click and select \`inspect element\`
+ console.log writes a value to the console
`
	},
	{
		title: 'operators',
		subtitle: 'math',
		content: `
\`\`\`hljs
2 + 3 // 5
4 - 2 // 2
5 * 2 // 10
16 / 4 // 4

//modulo
10 % 3 // 1 -- 10/3 has a remainder of 1

// string concatenation
'hello' + 'world' // 'helloworld'
'hello ' + 'world' // 'hello world'
'1' + 1 // '11' ughh
\`\`\`
`
	},
	{
		title: 'operators',
		subtitle: 'comparison',
		content: `
\`\`\`hljs
1 === 1 // true
2 === 1 // false

2 !== 1 // true
1 !== 1 // false

1 > 1 // false
1 >= 1 // true
1 < 2 // true
2 <= 3 // true
\`\`\`
`
	},
	{
		title: 'variables',
		subtitle: '',
		content: `
+ variables are references to a value
+ the value is changeable
`
	},
	{
		title: 'variables',
		subtitle: 'declaration',
		content: `
\`\`\`hljs
console.log(x); // error! there is no variable named x (yet)

var x;
console.log(x); // undefined
\`\`\`

+ currently x does not contain a value -- it is undefined, but exists
`
	},
	{
		title: 'variables',
		subtitle: 'assignment',
		content: `
\`\`\`hljs
var x = 3;
\`\`\`

x is declared and assigned the value 3

\`\`\`hljs
x = 4;
\`\`\`

x was already declared, new value 4 assigned to it
`
	},
	{
		title: 'variables',
		subtitle: 'naming conventions',
		content: `
+ don't start variable names with numbers
+ write descriptive, multi-word names for clarity
+ don't use non-alphanumeric characters \`!@#$%^&*...\`

\`\`\`hljs
var camelCaseYourVariableNames;
var myName = 'Ben';
var variableName1 = 'first variable';
var variableName2 = 55;
var variableName3 = false;
\`\`\`
`
	},
	{
		title: 'control flow',
		subtitle: '',
		content: `
+ control flow allows different code to run based on one or more conditions

\`\`\`hljs
if (true) {
	console.log('i will always run!')
} else {
	console.log('i will never run')
}
\`\`\`
`
	},
	{
		title: 'control flow',
		subtitle: 'complex conditions',
		content: `
\`\`\`hljs
// we want the user to input a number between 1 and 10
var x = userInputNumber

if (x > 10) {
	console.log('this number is too large')
} else if (x < 1) {
	console.log('this number is too small')
} else {
	console.log('got your number, ' + x) // 'got your number, 5'
}
\`\`\`
`
	},
	{
		title: 'functions',
		subtitle: '',
		content: `
+ functions do something
+ are invoked with \`()\`, e.g. \`console.log()\`
+ there are many built in functions
+ and you can write your own -- the real power behind JS
`
	},
	{
		title: 'functions',
		subtitle: 'arguments',
		content: `
\`\`\`hljs
// 'hey' is an argument
console.log('hey')
\`\`\`
+ arguments are values that a function uses internally
+ arguments allow functions to be flexible -- different output with different input
+ console.log prints the arguments to the console
`
	},
	{
		title: 'functions',
		subtitle: 'definition',
		content: `
\`\`\`hljs
function (parameters) { }
function name(parameter1, parameter2) { }
\`\`\`
+ a function definition creates a function
+ function name (not necessary, but beneficial) is like a variable, the name points to the function
+ the code between \`{ }\` is what the function does
+ **"You can think of the parameter as a parking space and the argument as an automobile."** --Microsoft Developer Network
`
	},
	{
		title: 'functions',
		subtitle: 'definition',
		content: `
\`\`\`hljs
// this function squares its argument
function squared(x) {
	return x * x
}
\`\`\`
+ this function will square any number we pass into it
+ the x parameter is a variable that refers to any value in the function
+ the return keyword tells the function to give that value back when the function runs
`
	},
	{
		title: 'functions',
		subtitle: 'invocation ( )',
		content: `
\`\`\`hljs
squared            // function squared()
squared.toString() // function squared(x) { return x * x }
squared(3)         // 9
squared(4)         // 16
\`\`\`
+ a function's name refers to the function itself
+ toString (another built-in function) called on a function name gives the entire function definition back
+ a function runs by invoking it: use \`()\` and \`arguments\`, if necessary
+ the function gives back the value that it was told to \`return\`
`
	},
	{
		title: 'functions',
		subtitle: 'more complex',
		content: `
\`\`\`hljs
function areaOfCircle(radius) {
	return Math.PI * squared(radius)
}

areaOfCircle(3)  // 28.274...
\`\`\`
+ use functions inside other functions!
+ functions are the heart and soul of code, where things actually happen
`
	},
	{
		title: 'functions',
		subtitle: 'recap',
		content: `
+ are a shortcut to running some code without writing it again
+ are defined with the option of including a name, parameters, and a return value
+ only run when invoked \`()\`, and can be given arguments when invoked
+ can produce different output with different input
+ can use other functions
`
	},
	{
		title: 'objects',
		subtitle: '',
		content: `
\`\`\`hljs
var objectExample = {
	key: 'value',
	anotherKey: 'value2'
}
\`\`\`
+ objects are like drawers with labeled things
+ keys are labels for values
+ objects are used to organize information
`
	},
	{
		title: 'objects',
		subtitle: 'creation',
		content: `
\`\`\`hljs
var person1 = {
	name: 'Ben',
	species: 'human',
	profession: 'js developer',
	age: 26,
	job: 'js developer'
}
\`\`\`
+ objects are created with \`{ }\`
+ comma-separated \`key: value\` pairs
+ keys must be unique
`
	},
	{
		title: 'objects',
		subtitle: 'accessing and changing values',
		content: `
\`\`\`hljs
person1.name           // 'Ben'
person1.age            // 26
person1['profession']  // js developer

// birthday happened
person1.age = person1.age + 1  // 27
\`\`\`
+ access a value with dot notation: \`person1.name\`
+ access a value with brackets: \`person1['profession']\`
`
	},
	{
		title: 'objects',
		subtitle: 'objects / functions inside objects',
		content: `
\`\`\`hljs
// an object with functions for calculating area
var area = {
	square: function(x) { return x * x },
	rectangle: function(l, w) { return l * w },
	circle: function(x) { return Math.PI * x * x }
}
\`\`\`
+ the value of any key can be any data type, even another object or function
+ most built-in functions are in objects
+ \`console.log\`: an object named console, where the log key contains a function
`
	},
	{
		title: 'arrays',
		subtitle: '',
		content: `
\`\`\`hljs
var arrayExample = ['thing1', 'thing2', 'thing3']
\`\`\`
+ arrays are lists with a specific order
+ can contain any value
+ created with \`[ ]\` and comma-separated items
`
	},
	{
		title: 'arrays',
		subtitle: 'accessing and changing values',
		content: `
\`\`\`hljs
arrayExample[0]  // 'thing1'
arrayExample[1]  // 'thing2'

arrayExample[1] = 'changed thing2'
\`\`\`
+ a value is accessed via its index -- the position in the list
+ index starts at 0 for the first item
+ nth item has index n - 1, e.g. 4th item has index 3
`
	},
	{
		title: 'arrays',
		subtitle: 'complex arrays',
		content: `
\`\`\`hljs
var arrayOfPeople = [
	{ name: 'Ben',    profession: 'js developer'       },
	{ name: 'Claire', profession: 'database developer' },
	{ name: 'Emily',  profession: 'POTUS'              },
	{ name: 'John',   profession: 'designer'           }
]
\`\`\`
+ arrays can contain any value
+ very useful for collections of similar values
`
	},
	{
		title: 'arrays',
		subtitle: 'looping / iterating',
		content: `
\`\`\`hljs
arrayOfPeople.forEach(function(person, index) {
	// do something to each item here
	// this will print the position and name of each person
	// add 1 to index to get numbering to start at 1
	console.log(index + 1, person.name)
})
\`\`\`
+ do some kind of action with each item in the array
+ always starts with first item and goes in order to the last
+ other looping / iterating techniques exist -- this is the simplest
`
	},
	{
		title: 'that\'s the basics',
		subtitle: '',
		content: `
+ Read JS for Cats in full and do all the console exercises
+ More of a challenge: Codecademy - <a href="https://www.codecademy.com/en/tracks/javascript" target="_blank">Javascript</a>
`
	}
]
