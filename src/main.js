"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app/app.component');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [])
    .then(function (success) { return console.log("bootstrap succesful"); })
    .catch(function (error) { return console.log("bootstrap failed: " + error); });
//# sourceMappingURL=main.js.map