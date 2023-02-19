# JAVASCRIPT

## Basic programming

To do. Andrew.

## Loading data

As data journalists, we very often need to load data for our projects.

For this section, we will work with an HTML file _index.html_ and a JavaScript file _load-data.js_.

In our HTML file, we link our JavaScript file in HEAD, so it will be loaded and triggered on our webpage.

_index.html_

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="load-data.js"></script>
  </head>
  <body></body>
</html>
```

And in our JavaScript file, we log "Hi!" just to make sure everything works.

_load-data.js_

```js
console.log("Hi!");
```

Open your HTML file in your browser and open the console (in the top menu, click on View, then Developer, then Developer tools, and choose the Console tab). If you see "Hi!" being logged, you are ready!

![A code editor with HTML and JavaScript code. A browser with the console tab open.](./img/loading-data/data-setup.jpg)

### With a local file

Most of the time, you have some data locally that you want to load on your page. But for security reasons, browsers will block you from loading it without a local server.

We need an extra setup step. If it's not already on your browser, install the [Web Server for Chrome extension](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb/related?hl=en).

![The Web Server for Chrome extension.](./img/loading-data/web-server.jpg)

Once installed, launch it. A pop-up may tell you that the extension is no longer supported. It's okay. Open it anyway.

![Open the Chrome extension even if it's no longer supported.](./img/loading-data/open-anyway.jpg)

The last thing to do is to choose the folder in which you have your HTML and JS code.

![Local server started.](./img/loading-data/local-server-started.jpg)

Click on the web server URL (http://127.0.0.1:8887), open the console, and you should see "Hi!" being logged.

A local server simulates the web, which is very handy when developing web projects while keeping everything on your computer.

We are ready!

For the data, we are going to use the [per capita C02 emissions from Our World in Data](https://ourworldindata.org/explorers/co2?facet=none&Gas=CO%E2%82%82&Accounting=Production-based&Fuel+or+Land+Use+Change=All+fossil+emissions&Count=Per+capita).

Click on the "Download" tab at the bottom, then on "Full data". I also put the data in this repository. You can find it at "./03_JAVASCRIPT/data/co2.csv".

![Our World in Data website.](./img/loading-data/our-world-data.jpg)

Move the file to your coding folder, and then add this code to _loading-data.js_.

On the first line, we create the asynchronous (don't worry about that for the moment) function _main_.

On the second line, we fetch our local file. We use _await_ because we want to retrieve all of the data before running the rest of our script.

On the third line, parse the fetch response as text. Again, we use _await_.

On the fourth line, we log the result.

Now, all of these lines are creating the _main_ function. We need to trigger it. So our last line is _main()_.

```js
async function main() {
  const response = await fetch("./co2.csv");
  const csv = await response.text();
  console.log(csv);
}

main();
```

If you refresh your browser (with the URL from your local server), you should see your data being logged!

![A CSV file loaded by the browser.](./img/loading-data/csv-loaded.jpg)

### From a URL

## Using libraries

### Simple Data Analysis
