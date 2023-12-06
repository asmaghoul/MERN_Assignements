const Joke = require("../models/joke.model");

//Display all the Jokes
module.exports.FindAllJokes = (req, res) => {
  Joke.find({})
    .then((AllJokes) => {
      console.log(AllJokes);
      res.json({ AllBestJokesEver: AllJokes });
      console.log(AllJokes.length());
    })
    .catch((err) => {
      res
        .status(500)
        .json({ error: "Internal Server Error", message: err.message });
    });
};

// Create New Joke

module.exports.createNewJoke = (req, res) => {
  Joke.create(req.body)
    .then((newlyCreatedJoke) => {
      res.json({ newJoke: newlyCreatedJoke });
    })
    .catch((err) => {
      res.json({ message: "Something went wrong", error: err });
    });
};

// Returning one joke with a matching Id

module.exports.findOneSingleJoke = (req, res) => {
  Joke.findOne({ _id: req.params.id })
    .then((oneSingleJoke) => {
      res.json({ joke: oneSingleJoke });
    })
    .catch((err) => {
      res.json({ message: "Something went wrong", error: err });
    });
};

//Partially Updates an existing Joke with a matching id

module.exports.updateExistingJoke = (req, res) => {
  Joke.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedJoke) => {
      res.json({ newjokeafterupdate: updatedJoke });
    })
    .catch((err) => {
      res.json({ message: "Something went wrong", error: err });
    });
};

//Delete one joke by id

module.exports.deleteAnExistingJoke = (req, res) => {
  Joke.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.json({ result: result });
    })
    .catch((err) => {
      res.json({ message: "Something went wrong", error: err });
    });
};
