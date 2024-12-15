"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cosas_1 = require("./cosas");
function main() {
    console.log(cosas_1.cosas.getAll()),
        console.log(cosas_1.cosas.getById(1));
}
main();
