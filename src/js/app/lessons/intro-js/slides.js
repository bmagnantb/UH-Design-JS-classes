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
+ page that has slideshow, navigate away, come back
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
		title: 'comments',
		subtitle: '',
		content: `
+ comments are ignored by the computer
+ notes written to help you and others understand code

\`\`\`
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

\`\`\`
'this is a string'
"also a string"
\`\`\`
`
	},
	{
		title: 'primitives',
		subtitle: 'number',
		content: `
\`\`\`
1478
.3319
\`\`\`
`
	},
	{
		title: 'primitives',
		subtitle: 'boolean',
		content: `
\`\`\`
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
\`\`\`
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
\`\`\`
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
\`\`\`
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
\`\`\`
var x = 3;
\`\`\`

x is declared and assigned the value 3

\`\`\`
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

\`\`\`
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

\`\`\`
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
\`\`\`
// we want the user to input a number between 1 and 10
var x = userInputtedNumber
if (x > 10) {
	console.log('this number is too large')
} else if ( x < 1) {
	console.log('this number is too small)
} else {
	console.log('got your number, ' + x) // 'got your number, 5'
}
\`\`\`
`
	}
]
