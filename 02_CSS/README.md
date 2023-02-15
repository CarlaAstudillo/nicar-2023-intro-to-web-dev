# CSS

## CSS Properties

To change the appearance or the behavior of an HTML element, you can assign it a CSS property.

### Inline style

Let's start with a simple paragraph.

```html
<p>Hello!</p>
```

We could add a color property to make the text red or [any color we want](https://www.w3schools.com/colors/default.asp)! Test it in an HTML file and open the file in a browser to see the result.

_Inside index.html_

```html
<p style="color:red;">Hello!</p>
```

The notation above, directly into the HTML tag, is called an inline style. It will modify the style of this specific element only.

### Stylesheet

If you want to change the color of all paragraphs, you would use a CSS file, also called a stylesheet.

_Inside style.css_

```css
p {
  color: red;
}
```

For your stylesheet to be applied to your HTML file, you need to import it. It's best to do that inside the head tag.

And now all paragraphs' text will be red when the HTML file opened in your browser.

_Inside index.html_

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <p>Hello!</p>
    <p>I am red too!</p>
    <p>Me as well.</p>
  </body>
</html>
```
