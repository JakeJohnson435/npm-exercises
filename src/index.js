const $ = require('jquery');

const nice = require("./say-hello.js");

const sayHello = () => {
    console.log("Hello");
};

sayHello();

nice.nice();

// nice.rude();

$("body").css("background-color", "blue");