# Introduction to JavaScript

Now that you've mastered the basic concepts of programming, learning any language is the same as learning a spoken lanugage. It's about understanding both the **vocabulary** and **syntax** of that language.

In programming, the **vocabulary** of a language are the keywords and symbols a language uses to refer to programming concepts. For example, the word `const` is JavaScript vocabulary for a variable, while Python doesn't have such a keyword.

The **syntax** of a language is how the vocabulary is strung together to create meaning. Putting a `+` sign between two numbers denotes an arithmetic operation, but putting the same symbol between two strings denotes a string operation. In both cases the vocabulary is the same, but the syntax of the language creates a different outcome (i.e. produces a different meaning). Then there's just the syntaxes of formality – in English you end sentences with a puncuation mark, in JavaScript you end it with a semicolon (`;`).

Vocabulary and syntax are concepts that you learn through practice, and unlike riding a bike, you do forget them if you haven't used them in a while, so it's important to understand how to find them again. This is why I've bolded so many concepts in the programming section like "defining a varible" or "invoking a function". These concepts are almost universal in programming languages and using them to ask questions of others or the internet is 50% of the battle.

Traditionally, this is the part where I teach you how to Google:
![Asking Google how to define a variable in JavaScript](../../_media/03_02_ask-google.jpg)


But, I've actually come to realize that for most basic programming concepts, AI and large language models preform just as well as Google, but in a more digestible format. Compare the Google search above to just asking Chat-GPT the same question:
![Asking Chat-GPT how to define a variable in JavaScript](../../_media/03_02_ask-chat-gpt.jpg)

You can even ask it the same question in a language your more comfortable with (mixing in the keywords in English) and have it give you a response in that language.
<details>
<summary>See it in Spanish!</summary>
<br>
<img href="../../_media/03_02_ask-chat-gpt.jpg" alt="Asking Chat-GPT how to define a variable in JavaScript, but in Spanish.">
</details>
<br>


So the remainder of this section won't be a lesson like the others, it'll be a reference guide where I explain the JavaScript syntax and vocabulary for the concepts you learned in the previous section. But JavaScript is an everchanging language with usually more than one way to do something, so I encourage you to go out into the world of the internet and find alternatives, improvements, and strangely strong held opinions.

## Naming
JavaScript has it's own rules for naming things in code. Note that you can always create strings which have no rules to the characters used in them. But in cases where you have to give a name to a function or variable, these are the rules
- They must begin with a letter, underscore (`_`), or dollar sign (`$`).
- After the first character, they can also contain numbers (0-9).
- They are case-sensitive, so `myVariable` and `myvariable` are different things.
- You cannot use the JavaScript keywords described in this section as names (e.g. var, function, if, etc.). Though you can use them as part of a larger name (e.g. `myvar`, `ifMobile`, etc.).

### Conventions & Casing
The four rules above are required for your code to work, but there's also a few rules that are considered good practice or convention.
- They should be descriptive and not too long.
- You should use camelCase for variable and function names (e.g. `myVariableName`) instead of underscores or hyphens.

## Statements & Semicolons
As alluded to earlier, all JavaScript statements should end in a semicolon (`;`). In JavaScript, a statement is any bespoke unit of instruction. This can get a little complicated before you understand the details of the language, but the easy definition is each line of code.
```javascript
num = 5 + 5;
alert("This is a function");
```

JavaScript is *usually* smart enough to figure out where you meant to put the semicolons, but not always so it's generally best practice to put them yourself. In practice, most modern programmers use tools to add them in for us (there's never a problem too small to automate).

## Types
| Type  | Syntax | Example |
| ------------- | ------------- | ------------- |
| String | Wrapped in quotes (like `"` or `'`), or backticks. Must use the same symbol to start and end.  | `"Hello World"`, `'He said "hello"'`. 
| Number | Use a period to separate decimal portion from whole portion, otherwise don't use other symbols like commas | `2`, `3.14`, `5632`
| Boolean | Write the text `true` or `false` in lowercase | `true`
| Undefined | Write the text `undefined` in lowercase | `undefined`
| Null/None | Write the text `null` in lowercase | `null`
| Array | See "Arrays" below | 
| Function | See "Operations" below | 
| Object | See "Objects" below | 

## Objects
Define objects with curly braces (`{}`)
```javascript
{}
```

Inside the curly braces, define each property with a unique name (which can either be a string or just some loose text as long as that text follows the rules for naming).
```javascript
{
  displayName: "Adel",
  age: 24,
  "City of Birth": "Cairo"
}
```

To refer to an object's properties you can use dot notation in which you write the name of the object (see "Variables"), then a period (`.`), and finally the name of the property. 
```javascript
person.displayName // "Adel"
``` 

If you made the property a string instead, however, you have to refer to it using bracket notation in which you write the name of the object, then square brackets (`[]`) wrapping the string used to name the property.
```javascript
person["City of Birth"] // "Cairo"
```

## Arrays
```javascript
[1, 2, 3, 4]
["Anne", "Jose", "Maria"]
```

In JavaScript, arrays are technically objects. This might seem like a distinction without a difference, but it's important to keep in mind. Once created, arrays have their own properties and methods (see "Operations"). Some common ones are:
- `length`: A property that returns the number of items in the array
- `push`: A method which takes a value and adds it to the array
- `includes`: A method which takes a value and returns whether or not that value can be found in the array.
- `join`: A method which combines all the values in an array into a string, joined together by the first argument provided.

```javascript
const myArr = [1, 2, 3, 4];
myArr.includes(1); // true
myArr.includes(6); // false
myArr.push(6);
myArr.includes(6); // true
myArr.length; // 5 ( because we added 6 to the original 4 items )
myArr.join("|"); // "1|2|3|4|6"
```

If you want to learn more about all the ways you can manipulate an array (or how something is possible), try searching for it on a search engine or AI langauge model.

## Variables
You saw this in the Chat-GPT example above, but to declare a variable in JavaScript start with a variable keyword (either `let` or `const`), then the name of the varible (see "Naming"). To assign the variable (which you can do on the same line in JavaScript), follow up the declaration using an assignment operator, and finally the value of the variable (which can be of any type, see "Types").

```javascript
const name = "Jeon So-yeon";
let age = 24;
```

You can also set variables (or object properties) equal to other variables and it will make a copy of the value and save it in the new variable. Avoid doing this with objects (and arrays and functions), as it could have unintended consequences if you don't learn more about this.

```javascript
const name = "Jeon So-yeon";
const nameCopy = name;

const singer = {
  name: nameCopy
}

singer.name; // "Jeon So-yeon"
```

### `let` vs `const`
JavaScript has three variable keywords to use when declaring a new variable (`let`, `const`, and `var`). Which one to use depends on how you plan to use it.

To start, never use `var`, it's a relic of a bygone era, but it still works because developers are nice to their past selves, and they didn't want a bunch of old legacy code to just start breaking.

Use `let` if you plan on re-assigning (or changing) the variable throughout the course of the program. If you think back to our example in the previous section, the `sum` variable kept track of the sum of all items in the list, but we had to calculate it one at a time increasing the value of the variable each time. That's a perfect use-case for `let`.

Use `const` if you don't plan on re-assigning the variable. For example, the drinking age in most of the United States is 21. If you were building a bartender robot, you could safely make that a const variable. It's likely not changing anytime soon, and if it does, you can update your program.

## Operations
As the bulk of what the programming language does, this section could go on for many pages. This will be just the surface of what JavaScript can offer in terms of operations and how to create operations (or functions and methods) of your own. The next section will cover how to bring in operations written by others into your code, and if you're ever not sure how to do something, remember to consult the internet.

For a full list of basic operations, check out [the MDN documentation on operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators). The following tables will be a reference for common and beginner usecases.

### Assignment Operators
The common assignment operator in JavaScript are `=` when assigning variables and `:` when assigning property values. See "Variables" and "Objects" above for a better example of how they work.

### Arithmetic Operators
Basic Arithmetic can be preformed using these operators when the values on both sides of the operator are a number.
| Type  | Syntax | Example |
| ------------- | ------------- | ------------- |
| Addition | `+`  | `5 + 5 `
| Subtraction | `-` | `10 - 2`
| Division |`/` | `25 / 5`
| Multiplication | `*` | `2 * 2`
| [Exponentiation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation) | `**` | `2 ** 2` 
| [Remainder](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder) | `%` | `8 % 2` 

### String Operators
The only commonly used string operator is the `+` sign which is used for **concatenation** or combining multiple strings together. Keep in mind concatenation combines the strings as they appear, it won't add spaces or other delimeters unless explicitly done so.
```javascript
const firstName = "Celia";
const lastName = "Cruz";
firstName + " " + lastName; // "Celia Cruz"
```

### Comparison Operators
Used to compare two values and return a boolean.
| Type  | Syntax | Example |
| ------------- | ------------- | ------------- |
| Equality* | `===`  | `5 === 5`, `age === 24`
| Inequality* | `!==` | `20 !== 5`
| Greater Than |`>` | `10 > 5`
| Less Than | `<` | `10 < 5`
| Greater Than or Equal To | `>=` | `2 >= 2` 
| Less Than or Equal To | `<=` | `5 <= 3`

<small>*You might see a different kind of (in)equality operator with one less equal sign (`==` vs `===` and `!=` vs `!==`). The short answer is don't use them. In nearly five years of professional programming, I've never purposefully used the shorter operator.</small>

### Logical Operators
Used to combine two comparisons into a boolean. If this is your first time dealing with "Boolean Logic", it's a whole concept of its own. I recommend checking out [this guide](https://www.codecademy.com/resources/blog/what-is-boolean-logic/). In summary, logical operators are used to see if *all* of a set of comparisons are true, *any* of the comparisons are true, or if the comparison is *not* true.
| Type  | Syntax | Example |
| ------------- | ------------- | ------------- |
| Not | `!`  | `!true`
| And | `&&` | `score < 80 && score > 70` 
| Or | `\|\|` | `alcohol === null \|\| age > 21`

### Functions
Functions are a bit of prewritten code that you can invoke to preform the same code over and over. This code could come with the language, be written by you, or be written by someoone else and brought into your code.

To **invoke** a function use it's name and supply arguments in parenthesis (`()`).

```javascript
myFunction(1, "Hello", myVar);

myFunctionWithoutArgs();
```

To **define** a function, use the keyword `function`. Wrap the function's execution code in curly braces (`{}`), and use the keyword `return` by itself to end execution early or to return a particular value. If you don't use `return` execution will end after the last line and nothing will be returned.
```javascript
function addition(a, b){
  return a + b;
}

function greet(age){
  if(age < 21){
    alert("You're not old enough!")
    return;
  }

  alert("What can I get you?");
}
```

### Methods
Methods are functions that are contained inside of an object. They are defined like any other property:
```javascript
const dog = {
  color: "gray",
  bark: function bark(){
    alert("Whoof!");
  }
}
```

And they are invoked by combining dot notation (see "Objects") and the usual way of invoking a function:
```javascript
dog.bark();
```

### Assignment From Returns
As explained above, the assignment operator can be used to assign a value to a variable. But you can also preform an operation and save the result in a variable:
```javascript
const sum = 5 + 10; // 15
const name = "Anthony" + " " + "Bourdain"; // "Anthony Bourdain"
const value = Math.sqrt(4); // 2
```

## Decisions
*Still needs to be written...*

## Loops
*Still needs to be written...*

## Excercise
*Still needs to be written...*

*Write the grading script you designed in the previous section in JavaScript.*
