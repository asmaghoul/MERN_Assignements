const mongoose = require("mongoose");
const JokeSchema = new mongoose.Schema(
  {
    setup: {
      type: String,
      required: [true, "The content of the joke is required"],
    },
    punchline: {
      type: String,
      required: [true, "The punchline of the joke is required"],
    },
  },
  { timestamps: true }
);

const Joke = mongoose.model("Joke", JokeSchema);
module.exports = Joke;
