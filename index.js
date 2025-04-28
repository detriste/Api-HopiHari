const express = require("express");
const app = require();
const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require ("helmet")

app.use(cors());
app.use(helmet());

app.use(bodyParser.urlencoded({extends: false}))
app.use(bodyParser.json())
