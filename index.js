const express = require("express");
const app = express();
const mongoose = require("mongoose");
const body_parser = require("body-parser");
const cors = require("cors");

const { Port, Host, ClusterUrl } = require("./config");

mongoose
.connect(ClusterUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,})
.then(() => {
console.log("Connected successfully...");
})
.catch(() => {
console.log("Connection failed...");
});

app.use(express.json());
app.use(body_parser.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/", express.static("./"));

app.listen(Port, Host, () => {
    console.log(`Server running at http://${Host}:${Port}/`);
  });
  