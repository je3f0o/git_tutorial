/* -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
* File Name   : main.js
* Created at  : 2020-04-07
* Updated at  : 2020-04-07
* Author      : jeefo
* Purpose     :
* Description :
* Reference   :
.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.*/
// ignore:start
"use strict";

/* globals*/
/* exported*/

// ignore:end

// add some new features.
function add (a, b) {
    return a + b;
}

// Test specs
function assert (test_name, condition) {
    console.log(`Test '${ test_name }' - ?`, condition ? "Passed" : "Failed");
}

assert("add function", add(3, 5) === 8);

window.addEventListener("load", () => {
    // initialize application
    console.log("Hello world");
    console.log("5 + 3 = " + add(5, 3));
});
