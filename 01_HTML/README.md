# HTML

![Web site for the 1996 movie Space Jam](/01_HTML_example/images/space_jam_site.gif)

## What is HTML?

**Hypertext Markup Language** is the standard markup language for creating web pages and web applications. 

Think of it like the skeleton that makes up the structure of a website and holds the content.

<div style="width:100%;height:0;padding-bottom:65%;position:relative;"><iframe src="https://giphy.com/embed/z9J86Wo2AQ6as" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div></p>

It's important to note that HTML is not a programming language-- it is a markup language that defines the structure of your site. 

You can see HTML in all of it's glory if you ever 'view the source' of a web site.

## Using the Web Inspector

One of the best tools you can use to learn code is to use your browser's Web Inspector. This can be used to inspect under the hood of your favorite site. You use this to see how it all works together.

![What the web inspector looks like](/01_HTML_example/images/web_inspector.png)

Go to a web site you want to inspect. You can turn on the Web Inspector using any browser. 

**How to open the Web Inspector in Google Chrome**
* Right-click any element of the web site and click Inspect.
* Go to the top menu bar and then select View > Developer > Developer Tools.
* Go to top right corner of the browser window. Select More Tools > Developer Tools.
* Use the shortcut control-shift-C on Windows or command-option-C on macOS.

If you're using Firefox, you can open up the Web Inspector [this way](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/open_the_inspector/index.html). Here are the instructions if you're [using Safari.](https://support.apple.com/guide/safari-developer/select-the-html-for-an-element-dev9c644989f/11.0/mac/10.13)

## How A Site Works

HTML (Structures Your Content) + CSS (Makes Your Content Look Pretty) = Website. 

Ideally, your HTML, CSS and images files should be stored in the same folder with file names that DO NOT include spaces or special characters.

![This is the HTML folder structure](/01_HTML_example/images/folder_structure.png)

We will be using Repl.it code snippets so everyone can easily play around with the code. However, you actually write your code on a text editor. For this class, you will be using [Visual Studio Code](https://code.visualstudio.com/) which should be installed in your computers. However, any plain text editor will do: [TextEdit](https://support.apple.com/guide/textedit/welcome/mac), which comes with Macs, [Notepad](https://fileinfo.com/software/microsoft/notepad), which comes with Microsoft, [Sublime Text](https://www.sublimetext.com/) and [Atom](https://atom.io/) are all good choices.

You can save your code by using the file extension of the type of markup, stylesheet or programming language you're writing. For example, save HTML files using the extension .html and save your CSS files using the extension .css.

## The Anatomy of HTML Elements

**Tags** 

This is markup that tells you that this is an HTML **element**.

First, we have an opening tag which we write a less-than sign:

```
<
```

Followed by a word or character that defines the tag:

```
p
```

The "p" above defines the tag as a paragraph tag. Then we close it with a greater-than sign:

```
>
```

So we put it all together and we get the **opening tag** of a paragraph:

```
<p>
```

We can now add whatever content we want to put inside this paragraph tag.

```
<p>This is a paragraph
```

And now we close using a **closing tag**. We once again write a less-than sign:

```
<p>This is a paragraph<
```

However, this time, we follow it with a forward slash:

```
<p>This is a paragraph</
```

Next comes the word or character that defines the tag, in our case, the paragraph tag:

```
<p>This is a paragraph</p
```

And finally, we finish closing it with a greater than sign:

```
<p>This is a paragraph</p>
```

Ta-da! This is an HTML element.

This is just one example of an HTML element, of course. There are many other ones which we will talk about later on in this class.

```
<div>This is a div element</div>
<body>This is a body element</body>
<h1>This is a heading element</h1>
<ul><li>This is a list element</li></ul>
```

An element can either be a container element which contains content.

```
<p>This is a paragraph</p>
```

Or a standalone element which is an element that's closed and cannot contain anything else.

```
<br/>
<img/>
```

## Let's look at some sample HTML

Open up in your Visual Code Editor text editor the `index.html` file in the `01_HTML_example` folder. Let's start to write some HTML, but first a few things:

## HTML Tags

**Doctype**

The doctype is found at the top of the HTML page and tells the browser which version of HTML the page is using.

For HTML 5 (the latest):

```
<!DOCTYPE html>
```

HTML 4.01 Frameset:

```
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">
```

**HTML**

The HTML tag contains the web page's content.

```
<!DOCTYPE html><html>WEB PAGE CONTENT</html>
```

**Head**

The Head tag contains the title & meta information about the HTML document. Meta information is not displayed to the user, but does provide data used by search engines (like keywords or descriptions), defining a character set, or define a description for the website. It's also where the link element is used to link to external CSS style sheets.

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Title of the page</title>
    <meta name="description" content="This is a Web Page">
    <meta name="keywords" content="HTML, CSS">
    <meta name="author" content="Me">
    <link rel="stylesheet" href="mystyle.css">
  </head>
</html>
```

**Body**

The Body tag defines the page's body and contains the actual content of the page. Unlike the head, everything in the body is visible to the user.

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Title of the page</title>
  </head>
  <body>
    This is the page's content.
  </body>
</html>
```


**Attributes** 

Attributes provide additional information about an element-- like a class, ID, title, or style. These are placed inside the opening tag before the "more than" sign.

```
<p class='className'
```

**Values** 

Values are what's assigned to a given attribute. These are placed inside quotation marks.

<tag attribute="value">Content modified by the attribute</tag>

Example: 

```
<p class='className'>This is a paragraph</p>
```

Above, the attribute is "class" and the value is "className"

**Note:** class and ID attributes will come in handy when we write our CSS style sheets.

**Adding styles inside a HTML element**

You can also add styles directly by using the style attribute inside HTML elements.

Example:

```
<p style="color:blue;">This paragraph is now blue.</p>
```

**Paragraph**

The paragraph tag allows you to format content like paragraphs.

```
<p>Paragraph 1</p><p>Paragraph 2</p><p>Paragraph 3</p>
```

**Bold**

The bold tag specifies bold text. The strong tag can also be used to define emphasis, which defaults to bold.

```
<p>This is not bold but this is <b>bold</b> and this is <strong>strong</strong></p>
```

**Headings**

Heading tags are used to define headings and sub-headings from the rest of the text. This can include font changes and paragraph breaks. The heading elements are h1, h2, h3, h4, h5, and h6 with h1 being the highest (or most important) level and h6 the least.

```
<h1>This is heading 1</h1><h2>This is heading 2</h2>
<h3>This is heading 3</h3>
<h4>This is heading 4</h4>
<h5>This is heading 5</h5>
<h6>This is heading 6</h6>
```

**Tags nested in another tag**

Element tags can be nested within other tags.

```
 <body> <p>A paragraph <b>inside</b> the body tag</p></body>
```

**Link**

Link tags are used to define hyperlinks which the user can click and jump to another document. Includes an "href" attribute which specifies the destination address (like the url). When you mouse over, the pointer changes to a white hand pointing. The tag surrounds text or images to turn them into links.

```
<a href="https://www.ire.org/" title="IRE website link" target="_blank">Investigative Reporters & Editors (IRE)</a>
```

**Image**

Image tags define images. Includes a "src" attribute which specifies the destination address (like the url) of the image. Remember, it's a standalone element and does not contain a closing tag.

```
<img src="img_of_coffee.jpg" alt="A cup of coffee">
```

**Line Break**

Line break tags produces a line break in text. Remember, it's a standalone element and does not contain a closing tag.

```
<p>This is the beginning of a sentence<br>
   And this is a line break<br>
   And this is another line break<br>
   Another line break</p>
```

**List**

List tags defines a list item. There are two types: 

Unordered lists (bullets)

```
<ul><li>List Item</li>
<li>AnotherList Item</li>
</ul>
```

Ordered lists (sequence)

```
<ol><li>List Item</li>
<li>AnotherList Item</li>
</ol>
```

**Div**

Div tags define a section (division) in the web page. They can be used to be easily styled by CSS or manipulated by Javascript by adding the attribute ID or class. 

```
<div id="idName">This is a div with an id called "idName"</div>
```

```
<div class="className">This is a div with a class called "className"</div>
```

**Span**

Span tags are inline container tags that can apply to part of a text. Because they are inline, they won't add a line break to your text.

```
<p>This is a paragraph and the <span style="color:red;">span tag marks up part of the text.</span></p>
```

**Comments**

Comments are only visible in the page's source code but not rendered by the browser, therefore invisible to users. It is used to add notification, reminders and documentation to your code for you or your fellow coders. It begins with <!–– and the comment closes with ––>.

```
<!-- This is a comment and not visible to users --><div class="className">This is visible</div>
```

## Mess Around with HTML

Open up in your Visual Code Editor text editor the `index.html` file in the `02_HTML_example` folder. Play around with the HTML elements in that file. Experiment with adding or changing things around.
