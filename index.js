const { PORT = 3000 } = process.env;
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/test", (req, res) => res.send({ message: "Example from Code Pipeline and Elastic BeansTalk"}));

app.listen(PORT, () => {
  console.log("API IS RUNNING ON PORT: ", PORT);
});
