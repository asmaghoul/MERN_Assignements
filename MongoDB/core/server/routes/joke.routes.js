const JokeController = require("../controllers/joke.controller");

module.exports = (app) => {
  //All Jokes Route
  app.get("/api/jokes", JokeController.FindAllJokes);

  // Returning one Joke with matching Id
  app.get("/api/jokes/:id", JokeController.findOneSingleJoke);

  //Partially Updates an existing Joke with a matching id
  app.patch("/api/jokes/:id", JokeController.updateExistingJoke);

  //New Joke Creation Route
  app.post("/api/jokes", JokeController.createNewJoke);

  // Delete Route
  app.delete("/api/jokes/:id", JokeController.deleteAnExistingJoke);
};
