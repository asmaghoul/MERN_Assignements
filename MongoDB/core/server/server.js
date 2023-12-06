const express = require("express");
const app = express();

require("./config/mongoose.config");

require("dotenv").config();

const port = process.env.PORT;

app.use(express.json(), express.urlencoded({ extended: true }));

const JokeRoutes = require("./routes/joke.routes");
JokeRoutes(app);

app.listen(port, () => {
  console.log(`>>>>>>>>>>>Your server is running on port ${port}`);
});
