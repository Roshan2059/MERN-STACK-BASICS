//hamlai jun jun package chainxa teslai require() garney
const express = require("express");

//tala ko express() vaneko chai mathiko const express vanera lekhya xa ni!! ho tyo ho
const app = express();

// yesle chai requests haru lai listen gardo raixa
app.listen(4000, () => {
  console.log("Roshan, timi dhukka vara code gara ma listen gardai xu!!");
});

//yespaxi chai euta nodemon vanni package install gariyoo

//tespaxi chai simply django ma  garya jastai url routes haryu dinu pardo raixa!!
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the first app that roshan made in MERN" });
});

app.get("/about", (req, res) => {
  res.send("<h1>This is about page</h1>");
});
