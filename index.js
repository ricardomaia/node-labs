const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/static", (req, res) => {
  res.send("Static!");
});

app.listen(PORT, () => {
  console.log(`App listening at ${PORT}`);
});
