# What is CSS?

CSS is what brings beauty and aesthetic to websites. Without it, most pages would just read like a top down list of text with no real hiearchy.

A few things CSS can do are:
- Colors
- Fonts
- Size
- Positioning
- Spacing

<sub><sup><em>(there's more, but these are the basics)</em></sup></sub>

## The World Without CSS

It's easiest to see the effect of CSS by [turning it off](https://css-tricks.com/that-time-i-tried-browsing-the-web-without-css/) as you browse your favorite site. Here are a few images from that article:

### Wikipedia
![Wikipedia without CSS](https://i0.wp.com/css-tricks.com/wp-content/uploads/2019/04/s_601945040BCA3610D759145A4442799C97B904D9A9F8326DD30FDF0CF48A96B7_1555363400264_wikipedia-compare.jpg?ssl=1)
<sub><sup>The Wikipedia homepage with CSS (left) and without CSS (right).</sup></sub>


### GitHub
<img src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2019/04/s_601945040BCA3610D759145A4442799C97B904D9A9F8326DD30FDF0CF48A96B7_1555180613247_guthub-repo-single.jpg" width="50%">
<br />
<sub><sup>A GitHub repository page in a logged out state.</sup></sub>

<br />

## How does it work?
CSS works by creating rules and applying those rules to elements on the page.

For example, you say,
> All paragraphs on the page should be blue.

And so the browser makes it so. In code, that statement looks like,
```css
p {
  color: yellow;
}
```

Let's take a moment to break down that code piece by piece using some key definitions:

- **Stylesheet**: A document full of style rules which tell the browser how to style and format a page of elements. Page's are not limited to only having a single stylesheet. They are made up of **rules**.
- **Rule**: A specific set of instructions given to a browser about how a specific set of elements should be styled. They are made up of one or more **selectors** combined with one or more **declarations**.
- **Selector**: The specific element(s) a rule should be applied to (the "Who").
- **Declaration**: One specific instruction of how the element(s) should be displayed (the "How"). They are made up of a **property** and a **value**.
- **Property**: A set of predetermined keywords that indicate the aspect of the element you want to set.
- **Value**: The setting you want to use for the chosen property. Each property has it's own set of accetable values.
<br /><br />

![An infographic breaking down each part of a a rule](../../_media/02_01_diagram-css-rule.jpg)
<br /><br />

In the following sections we'll break down each of these in more detail.

## How does it get on the page?
Once you have one or more stylesheets, you can load them onto an HTML page in two ways. We'll be starting off with the "easy way" for the sake of simplicity working through exercises, but in the final section of our class we'll go over the common way most major websites do it.

The easy way is by adding a `<style>` element to your page. Inside that element, you can write CSS code and the element's contents will be treated as a stylesheet, i.e. the text will be interpretted and applied as CSS code.

## Your Turn!
**Excercise 3 – The Style Element.** Apply the following CSS rule to a page by using a style element. The result should be a page where the text in paragraphs are bigger than when it first started, and blue.

```css
p {
  font-size: 24px;
  color: blue;
}
```