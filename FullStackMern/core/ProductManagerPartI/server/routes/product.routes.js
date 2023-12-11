const ProductController = require("../controllers/product.controller");

module.exports = (app) => {
  app.get("/api/product", ProductController.FindAllProduct);
  app.post("/api/product", ProductController.CreateNewProduct);
};
