# Cookie Bar

A simple cookie alert bar that appears at the top of a website on first visit and reappears once a year. Uses vanilla JavaScript with no dependencies and works with modern browsers and IE8+.

The cookie bar is a notice *not* a request for consent. Only use this when you are certain you do not need to request explicit opt-in consent for your use of cookies.

Intended to comply with the [EU cookie law](https://ico.org.uk/for-organisations/guide-to-pecr/cookies/ "UK Information Commissioner's Office guidance on the EU cookie law"), **however I have no legal expertise, so do not rely on this script before obtaining your own legal advice**.

This is a simplified, adapted, and restyled version of the [CookieWarning script by Scott Herbert and Dimitri Kourkoulis](https://github.com/Scott-Herbert/CookieWarning "GitHub project for the original CookieWarning script").

## Usage

Simply copy one of the two JavaScript files -- either [cookie-bar.js](# "original JavaScript") or [cookie-bar.min.js](# "minified JavaScript") -- into your website and link to it using a script element in your webpages:

``` html
<script src="cookie-bar.js"></script>
```

You can put the script anywhere in your document, but I recommend [placing it at the end](https://developer.yahoo.com/blogs/ydn/high-performance-sites-rule-6-move-scripts-bottom-7200.html "Blog post on why it's important to move scripts to the bottom of the page"), just before the closing `</body>` tag.

**You also need to use CSS to provide some basic styling to the cookie bar.** A sample is provided here, which you can use by copying [cookie-bar.css](# "CSS") to your site and adding `<link rel="stylesheet" href="cookie-bar.css">` to your webpages' `<head>` element. But ideally you should customize the sample styling to fit in with your own website's design, and then copy them directly into your existing CSS file.

---

***In progress***
