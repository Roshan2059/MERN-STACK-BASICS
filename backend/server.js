//hamlai jun jun package chainxa teslai require() garney
require("dotenv").config();
const express = require("express");
const workoutRoutes = require("./routes/workouts");
//tala ko express() vaneko chai mathiko const express vanera lekhya xa ni!! ho tyo ho
const app = express();

// yesle chai requests haru lai listen gardo raixa
app.listen(process.env.PORT, () => {
  console.log("Roshan, timi dhukka vara code gara ma listen gardai xu!!");
});

//yespaxi chai euta nodemon vanni package install gariyoo

//yo chai hamle middleware use gareko ra yo code chai last ma lekhyo vaney chaldo rainaxa

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/workouts", workoutRoutes);

//tespaxi chai simply django ma  garya jastai url routes haryu dinu pardo raixa!!
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to the first app that roshan made in MERN" });
// });

app.get("/about", (req, res) => {
  res.send("<h1>This is about page</h1>");
});

// tespaxadi chai euta dotenv vanni package install gariyo ani teslai top ma require gariyo
//tespaxi chai tyo mathi port number lekheko thau ma process.env.environment_variable lekhiyo
