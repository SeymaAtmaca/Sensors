const express = require("express");
const app = express();
const routers = require("./routers");
const connection = require("./connection");
const cors = require("cors");
connection();

app.use(express.json());
app.use(cors());


app.use("/api", routers);

app.listen(5000, () => {
    console.log(`Server 5000 de çalışıyor`);
});