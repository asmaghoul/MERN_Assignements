const express = require("express");
const { faker } = require("@faker-js/faker");
const app = express();
const PORT = 5000;

// we can create a function to return a random / fake "User"

const createUser = () => {
  const newUser = {
    _id: faker.string.uuid(), // '4136cd0b-d90b-4af7-b485-5d1ded8db252'
    firstName: faker.person.firstName(), // 'Antwan'
    lastName: faker.person.lastName(), // 'Hauck'
    phoneNumber: faker.phone.number(), // '961-770-7727'
    email: faker.internet.email(), //'Kassandra4@hotmail.com'
    password: faker.internet.password(), // '89G1wJuBLbGziIs'
  };
  return newUser;
};

const newFakeUser = createUser();
console.log(newFakeUser);

// we can create a function to return a random / fake "Company"
const createCompany = () => {
  const newCompany = {
    _id: faker.string.uuid(), // '4136cd0b-d90b-4af7-b485-5d1ded8db252'
    companyName: faker.company.name(), // 'Zieme, Hauck and McClure'
    address: {
      street: faker.location.streetAddress(), // '0917 O'Conner Estates'
      city: faker.location.city(), // 'East Jarretmouth'
      state: faker.location.state(), // 'Mississippi'
      zipcode: faker.location.zipCode(), // '17839'
      country: faker.location.country(), // 'Greece'
    },
  };
  return newCompany;
};

const newFakeCompany = createCompany();
console.log(newFakeCompany);

// Create an Object for new user and new company

const newFakeBusinessman = {
  newFakeCompany,
  newFakeUser,
};
console.log(newFakeBusinessman);

app.get("/api/users/new", (req, res) => {
  res.json(newFakeUser);
});

app.get("/api/companies/new", (req, res) => {
  res.json(newFakeCompany);
});

app.get("/api/user/company", (req, res) => {
  res.json(newFakeBusinessman);
});

app.listen(PORT, () => {
  console.log(`>>>>>>>>>>>> The server is running smoothly in port: ${PORT}`);
});
