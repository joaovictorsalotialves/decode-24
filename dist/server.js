"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./src/app");
app_1.app.listen(3333, () => {
    console.log('HTTP server running!');
});
