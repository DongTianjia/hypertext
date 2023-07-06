/*
 * CSE 154 Section Exercise - Whack a Bug
 * Handles whacking bugs.
 */

"use strict";
(function() {

  window.addEventListener("load", init);

  function init() {
    let button = qs("button");
    button.addEventListener("click", switchView);
  }

  function switchView(evt) {
    id('planet').classList.remove("hidden");
    id('earth').classList.add("hidden");
    qs("body").style.backgroundImage = "url(img/planet.PNG)";
    qs("body").style.backgroundSize = "100% 565%";
    new Audio('echo.mp3').play();
  }

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} name - element ID.
   * @returns {object} - DOM object associated with id.
   */
  function id(name) {
    return document.getElementById(name);
  }
  /**
   * Returns first element matching selector.
   * @param {string} selector - CSS query selector.
   * @returns {object} - DOM object associated selector.
   */
  function qs(selector) {
    return document.querySelector(selector);
  }

})();
