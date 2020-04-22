"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var port = process.env.PORT || 5000;
var app = (0, _express["default"])();
app.listen(port, function (err) {
  if (err) {
    console.error("ERROR: ".concat(err.message));
  } else {
    console.log("Server is listening on port ".concat(port));
  }
});