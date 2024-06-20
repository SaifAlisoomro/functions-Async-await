"use strict";
function callback(callback, newName) {
    callback(newName);
}
let arrowFunc = (name) => {
    console.log(` hellow , mr / mrs : ${name}`);
};
callback(arrowFunc, "Ali");
