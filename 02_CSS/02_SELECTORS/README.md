# What is a selector?

Selectors are used to target specific elements on a page. There are many different types of selectors, and many ways to combine them to create a complex selection. 


## Basic Selectors
Let's start off with the four basic ones:

| Selector  | Applies to | Example |
| ------------- | ------------- | ------------- |
| Universal | All elements  | * 
| Type  | Elements of a given type | p
| Class | Elements with a matching `class` attribute | .note
| ID | Elements with a matching `id` attribute | #main

Applying a selector to a rule is as easy as writing it before the opening curly brace (`{}`) like this:

```css
.my-selector {

}
```

### Your Turn!
**Excercise 4 – Basic Selectors.** Without changing any of the elements outside of `<style>`, replace the invalid selectors with the proper ones that target the following elements:
- `replace_one`: Target the last paragraph (the credit line) with styles that make it look more like a note.
- `replace_two`: Target every element turning all the fonts into Arial.
- `replace_three`: Target the container div to add some padding. Padding is simply the space around the content, this gives it soeme breathing room.
- `replace_four`: Target the heading element to make the size bigger.

## Relational Selectors

Once you've mastered the four basic, selectors, let's look a the four "relational" selectors. These selectors combine two selectors through the use of a relationship operator to create a new selector. 

| Selector  | Applies to | Operator | Example |
| ------------- | ------------- | ------------- | ------------- |
| Child | Direct child of  | > | p > span
| Descendant  | Descedant element (inside) of | *space* | div a
| Adjacent Sibling | The next sibling | + | h1 + p
| General Sibling | Any sibling | ~ | h1 ~ p

These selectors select for the last of the elements if the proceeding conditions are met. For example, a `"p > span"` selector will style all spans that happen to be direct children of a p.

The relational selectors can also be chained to create an even more granular selection. For example, the following selector:
```
.content h1 + p > span {

}
```

Will select any `spans` that are `direct children of a p element`, if that p element is `an ajacent sibling to an h1`, if that h1 element is `a descendant of an element with the class of "content"`. Normally, selectors don't tend to be that complex and you'll be using at most one of these relational selectors at a time, but just know they *can* be infinietely chained.

### Your Turn!
**Excercise 5 – Relational Selectors.** Without changing any of the elements outside of `<style>`, replace the invalid selectors with the proper ones that target the following elements:
- `replace_one`: Target the bold elements, but only the ones inside the `#main` div
- `replace_two`: Target only the two outermost divs - the ones that are children of the body
- `replace_three`: Target only the caption after an image
- `replace_four`: Target only images that are next to `.content` paragraphs

## Boolean Selectors
And lastly, we'll get to the boolean (or compound) selectors. Boolean selectors allow you to combine any of the previous selectors and create a combined selector. If anyone is familiar with programming (or spreadsheets), the concept of boolean logic might sound familiar. If you're just a words person, think of them as the coordinating conjuctions of the logic world. 

| Selector  | Applies to | Operator | Example |
| ------------- | ------------- | ------------- | ------------- |
| And | If all selectors' conditions are met  | *none* | p.content
| Or  | If any selector's conditions are met | , | h1,h2,h3

Just like with relational selectors, boolean selectors can be chained and combined with other selectors to create even more complex selections such as
```
div.main.is-active p.content.dark {

}
```

Which will select all paragraph elements with the `content` and `dark` classes *if* they are a descedant of a div element with the `main` and `is-active` classes.

### Your Turn!
**Excercise 6 – Boolean Selectors.** Without changing any of the elements outside of `<style>`, replace the invalid selectors with the proper ones that target the following elements:
- `replace_one`: Target the `#main` and `#related-links` elements, without targeting any other divs.
- `replace_two`: Target only the paragraph elements with the `content` class.
- `replace_three`: Target all the text except the list items in `#related-links`.