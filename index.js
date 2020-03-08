const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/test", (req, res) => res.send({ message: "Example from Code Pipeline and Elastic BeansTalk"}));

app.listen(7000, () => {
  console.log("API IS RUNNING ON PORT 7000");
});
