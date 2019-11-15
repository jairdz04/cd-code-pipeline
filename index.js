const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/test", (req, res) => res.send({ message: "connected" }));

app.post("/test", (req, res) => {
  console.log(JSON.stringify(req.body));
  res.send({ message: "connected" });
});

app.listen(7000, () => {
  console.log("API IS RUNNING ON PORT 7000");
});
