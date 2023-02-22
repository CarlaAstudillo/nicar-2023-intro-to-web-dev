# What is a script?

A script is a series of instructions that a computer can follow to achieve a goal. 

One example of a script for humans is a recipe. Humans follow the steps one step at a time, and if they followed them correctly (and the script was written correctly), the output (in this case the food) comes out exactly as intended. As programmers we don't need to worry about the former (a computer always follows what we say), but we *do* have to worry about the latter (whether what we wrote was what we intended).

Writing a script has three discreet steps. It might be tempting to jump straight into coding, but completing steps one and two are just as important in being a good developer.
1. Define the goal: Define the overarching task you want to achieve.
2. Design the script: Break down each step the computer would need to take to get there.
3. Code each step: Convert the steps you outlined in #2 into lines of code depending on the lanugage you're using.

## Defining Your Goal

Defining a goal can be deceptively tricky. Consider the following goal:
> Tell me which of the following headlines is the best

It would be extremely difficult to start designing a script that that could satisfy this goal, because of the ambiguity in the word "best". Computers don't understand ambiguity, and it's your job as a script writer to make the goal as clear as possible by asking questions of yourself and other stakeholders. The goal above could instead be stated as 
- Tell me which of the following headlines had the most users click on them (i.e. the most "enticing" headlines).
- Tell me which of the following headlines results in the smallest number of users who clicked to the story and then left within 10 seconds. (i.e. the least "deceptive" headlines).

## Designing a Script
In order to design a script, you must first understand how to think like a computer: **programatically**. They follow a series of basic instructions, one after another. You can define these steps using a limited number of tools that are almost universal to all programming languages:

| Tool  | Definition | Example |
| ------------- | ------------- | ------------- |
| Types | The basic building blocks of programming | `5` 
| Variables | A system for keeping track of values with unique labels | A user's "age"
| Operations | The actions preformed to manipulate a computer system | Adding two numbers
| Conditionals | Branching paths depending on whether something is true (i.e. making a decision) | Do X if 5 is greater than 10
| Loops | Repeating code until stopped | Do X for every item in this list
| Events | Triggers for your code | Do X when a user hits the spacebar

### Values

In programming, there are a few basic "values" to use. The most commonly used types of values are:
- **String:** Represent words and text, like the phrase "Hello World" and the letter "B".
- **Number:** Represent numbers. Integers and rational numbers with a decimal can sometimes be considered different types depending on the language, but in practical JavaScript, you don't need to worry about that.
- **Boolean:** Represent truth or falsity. The concept of whether five is greater than ten or if a checkbox is currently checked is represented by a boolean. There are only two possible values for a boolean: `true` or `false`.
- **Undefined:** Represents a value that has never previously been defined. This will make more sense as we discuss variables and objects. Not all languages have this type, but JavaScript does.
- **Null/None:** Represents the deliberate absence of a value. Whereas an age of `0` means the user is not born, and an age of `undefined` means the user hasn't answered the question, an age of `null` could mean the user has deliberatly decided not to answer the question.
- **Array:** Represent a collection of values. Imagine a whole list of scores. Each score might be a number, but if you wanted to combine them all into one entity you would use an array.
- **Function:** Represent a piece of code that can be invoked. See "operations" for more.
- **Object:** Represents a more fluid organizational tool. It's a way to collect a series of values tied to keywords. Doing this creates what's called a **property**. For example, you could represent an age as a number and a name as a string. But to combine those values into a more complex person, you would use an object with an age and name property. Properties can be any of the value types listed above, including arrays, functions, and even another object.

_Note: Technically in JavaScript, an Array is an object, but many programming languages do separate the two. For a beginner, it's okay to think of these two as separate types, but just keep this fact in the back of your head for advanced JavaScript learning one day._

### Variables
In programming varaibles are a way for you to keep track of all the types that could be floating around in your program. For example, just typing `5` into your code and running it will spawn that type into existence, but its utility is limited. To give it some meaning, you can **declare** a new variable with a unique name, and **assign** a value to it. For example, you might declare a new variable called `age` and then assign it the value `32`. Different languages have different rules about how and when you can declare and assign variables, but in almost all of them these concepts still exist.

#### Excercise
In [Scratch](https://scratch.mit.edu/projects/editor/), make a new variable by clicking "Make a Variable", and call it "score". This is how you declare it. Then use the slider options to set a value to it, this is how you assign it. 

### Operations
Operations are the things you can ask the computer to do. If values are the "nouns" or programming, think of operations as the "verbs". There are three kinds of operations:
- Basic Operations: Use operators to preform basic calculations and tests for (in)equalities. There are a number of operators including:
  - Assignment Operators: Used to assign a value to a variable (e.g. `age = 32`)
  - Arithmetic Operators: Used to do basic mathematical calculations (e.g. `5 * 2`)
  - String Operators: Used to do basic manipulation to strings (e.g. `"H" + "ello"`). The `+` operator can also be used as an arithmetic operator depending on the context.
  - Comparison Operators: Used to compare to values and determine the boolean value of that comaprison (i.e. is it `true` or `false`). (e.g. `5 > 2`)
  - Logical Operators: Used to combine two comparisons into a complex one (e.g. `5 > 2 || 1 > 2` read as "If five is greater than two *or* one is greater than two")
- Functions: Every other operation takes the form of a function. There are two parts to a function, its **name** and **arguments** (sometimes called **parameters**). Functions are **called** or **invoked** by using its unique name and passing any arguments the function expects. 
- Methods: Methods are a special type of function. Recall that objects can have properties of any type such as numbers or other objects. Well, it can also have properties which are functions. When a function is the property of an object, it can also be referred to as a "method".

Each programming language comes with their own set of basic operations (though most of them are similiar to each other), and a set of functions that are built in. You can also usually bring in extra functions that fellow programmers have written (more on that in the next part of this class). And, you can create functions of your own by giving it a name and (optionally) a set of arguments, and then defining the operations you want your function to take when invoked.

This may seem obvious, but operations can **return** a value after preforming the operation. Basic operations simply return the result of the operation (e.g. `5 + 5` returns `10`). Most functions and methods also return a value, a `sqrt` function takes the number `4` as an argument and return the number `2`. Some functions and methods *don't* return anything though. The `alert` function in JavaScript takes a string as an argument and opens up a popup displaying it to the user, but it doesn't return anything in the code.

#### Excercise
In [Scratch](https://scratch.mit.edu/projects/editor/), use the "Set variable" operation block to set a custom value for your score. Then combine that block with the basic operator blocks like "+" or "-". Once you're comfortable, you can play with some of the function blocks like "pick a random number" or "sqrt". Then combine a number of these operations into a function of your own. In Scratch, functions are called "blocks".

### Conditionals
Computers can make decisions by evaluating a comparison and then running statements if that condition is met.

You might not realize it, but in many ways your brain works in a similiar way. If you're a bartender and someone comes up to you to ask for a drink, there's a number of decisions you have to make. 
- Did they order a drink with alcohol?
  - Yes: Do they look over 21?
    - Yes: Give them a drink
    - No: Ask to see some ID. Are they over 21?
      - Yes: Give them a drink
      - No: Refuse service
  - No: Give them the drink 
  
This is just a basic example of a decision tree you might take if you were building a bartending robot, but in reality you could add dozens of more decisions here. Are they on a list of problem clientele? Do they have an outstanding tab? Do they look like they should be cut off? Then your technical lead tells you there's a new client for your bartending robot in Mexico where the drinking age is 18, and suddenly you have to add more decisions depending on where the robot is located.

#### Excercise
In [Scratch](https://scratch.mit.edu/projects/editor/), use the conditional blocks under "Control" to build a test grading robot which hands out letter grades based off our `score` variable. We'll go with a classic grading scale of:
  - A: 100 - 90
  - B: 89 - 80
  - C: 79 - 70
  - D: 69 - 60
  - F: < 60

### Loops
One of the most useful parts about building scripts is automatation: having the computer repeat a task over and over so you don't have to. Almost every modern programming language has at least one or more ways of looping (or **iterating**) through a set of data to preform some set of operations.

Some examples of reasons to loop are:
- Looping through a set of numbers to get a total
- Looping through each field in a web form to make sure all the required fields are filled out
- Looping through the rows of a spreadsheet to make sure each one has a valid address

Loops are made up of two things:
- Termination Condition: When should the looping end? Different programming languages have different options for this, but in general, common termination conditions are:
  - Manual: Invoking an operation to tell the loop to stop
  - Condition: Once a condition is met, stop the loop
  - Count: Once the loop has run X number of times
- Code Block: The code that should run each time the loop runs through an iteration.

Loops aren't just a convinience though. You might be thinking, "If I have 10 numbers, why not just write one statement that adds them all up with arithmetic operators?" And that's a good question! Loops make that easier to write, but it also enables you to preform operations on an indefinite number of items. Sure, you could design a calculator that only ever takes two numbers, but what if you wanted to build a calculator that could take any count of numbers? Then, you'd need a loop.

#### Excercise
In [Scratch](https://scratch.mit.edu/projects/editor/), create a list called `scores` and three variables called `sum`, `count`, and `iteration` (you can delete the `score` variable and `sum` block you made earlier, that won't be necessary anymore). Use the editor to add some numbers between 50 - 100 to the scores list. Finally, create a script that adds all the numbers in the scores list together and keeps a count of how many numbers were added together. Hint: When looping through a set of data, it's usually easiest to use a loop with a "count" termination condition -- in Scratch, that loop is called a "repeat" loop.

### Events
Events are the things that happen that trigger your code. When you're building a basic script the most common trigger is just "you opened the web page". But you can tie your code to all kinds of other triggers. If you're writing scripts for a webpage some other common triggers could be:
- A button was clicked
- The page is finished loading
- A user pressed a key on their keyboard

You can even create custom triggers of your own, but that's a more advanced topic for another day.

#### Excercise
In [Scratch](https://scratch.mit.edu/projects/editor/), add a event to the top of your blocks which triggers them when a user hits the space bar.

## Putting it all together
Now that you know all the building blocks available to you in programming. Design a script which includes a function called `grade`. The `grade` function should `say` a letter grade based on the average score in the `scores` list (e.g. "A" if the average score in the list is a 95). Then add a trigger to run the grade function when a certain key is pressed.

Bonus: Be a benevolent grader, and drop their lowest grade. We all have bad days. Hint: You can make conditionals inside of loops.

[*You can check out the final working script (including the bonus) here.*](https://scratch.mit.edu/projects/807109759)

## Next Steps
Once you've got programming down, you can move on to the final step of writing a script: coding each step.
