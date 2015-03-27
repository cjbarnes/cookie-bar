/**
 * Cookie warning script - to comply with EU cookie law. A modified version of
 * Scott Herbert and Dimitri Kourkoulis’s original.
 * @link https://github.com/cjbarnes/cookie-bar
 * @author cJ barnes http://www.cjbarnes.co.uk
 * @license LGPL 3.0
 */

(function cookieBar() {

  /**
   * Vanilla JavaScript version of jQuery.ready, with IE8+ support.
   * @link http://youmightnotneedjquery.com/#ready
   * @param {Function} fn The function to call on DOM ready.
   */
  function ready(fn) {
    if (document.readyState != 'loading'){
      fn();
    } else if (document.addEventListener) {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      document.attachEvent('onreadystatechange', function(e) {
        if (document.readyState != 'loading')
          fn();
      });
    }
  }

  /**
   * Vanilla JavaScript version of jQuery.on, with IE8+ support.
   * Abstracts around IE.old's missing `addEventListener` support.
   * @link http://youmightnotneedjquery.com/#on
   * @param {Element}  el        Element the event listener will attach to.
   * @param {String}   eventName Name of event to listen for.
   * @param {Function} handler   Function to call when event occurs.
   */
  function addEventListener(el, eventName, handler) {
    if (el.addEventListener) {
      el.addEventListener(eventName, handler);
    } else {
      el.attachEvent('on' + eventName, function(e){
        handler.call(el, e);
      });
    }
  }

  /**
   * Get the currently set cookie with a specified name.
   * @param  {String} c_name The cookie name to check for
   * @return {String}        The named cookie’s contents
   */
  function getCookie(c_name) {
    var i, x, y, ARRcookies = document.cookie.split(";");

    for (i = 0; i < ARRcookies.length; i++) {

      x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
      y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
      x = x.replace(/^\s+|\s+$/g, "");

      if (x == c_name) {
        return unescape(y);
      }

    }

  }

  /**
   * Show the cookie message bar to the user.
   */
  function display() {

    // Prep the cookie bar HTML.
    var html = '';
    html += '\t<p class="cookie-bar-description">This website stores cookies on your computer in order to function correctly. The cookies do not contain any specific information about&nbsp;you.</p>\n';
    html += '\t<div class="cookie-bar-action">\n';
    html += '\t\t<a class="cookie-bar-button" href="#">OK</a>&nbsp;&nbsp;\n';
    html += '\t\t<a class="cookie-bar-link" href="/about/terms">Find&nbsp;out&nbsp;more</a>\n';
    html += '\t</div>\n';

    // Create the cookie bar elements.
    var element = document.createElement('div');
    element.className = 'cookie-bar';
    element.innerHTML = html;

    var button = element.querySelector('.cookie-bar-button');
    /**
     * Click event for OK button - set a "user has agreed to cookies" cookie
     * and hide the cookies warning.
     * @param {Object} e Event object.
     */
    addEventListener(button, 'click', function cookieBarOk(e) {
      if ('undefined' !== typeof e.preventDefault) {
        e.preventDefault();
      } else { // IE8 equivalent of preventDefault.
        e.returnValue = false;
      }

      // Create the cookie
      setCookie("jsCookieCheck", null, 365);

      // Hide the cookie warning.
      document.querySelector('.cookie-bar').style.display = 'none';

    });

    // Display.
    document.body.insertBefore(element, document.body.firstChild);

  }

  /**
   * Abstracted function to set a new cookie.
   * @param {String} c_name Name of new cookie
   * @param {String} value  Contents of new cookie
   * @param {Number} exdays Number of days before cookie should expire
   */
  function setCookie(c_name, value, exdays) {

      // Calculate expiration date
      var exdate = new Date();
      exdate.setDate(exdate.getDate() + exdays);

      // Setup the full cookie contents
      var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString() + "; path=/");

      // Write the new cookie
      document.cookie = c_name + "=" + c_value;

  }

  /**
   * Initializing function. Checks for the presence of an agreement cookie and,
   * if it doesn’t exist, displays the cookie notification.
   */
  function checkCookie() {
      var cookieName = "jsCookieCheck";
      var cookieChk = getCookie(cookieName);

      // Display the notification if no cookie exists
      if (null == cookieChk || "" === cookieChk) {
        display();
      }

  }

  // Begin on DOM ready
  ready(checkCookie);

})();
