import express from "express";
import { products } from "./data/products.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.get("/api/products", (req, res) => {
  if (req.query.search) {
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(req.query.search)
    );
    res.send(filteredProducts);
    return;
  }

  setTimeout(() => res.send(products), 3000);
});

app.listen(5000, () => {
  console.log("Backend serving at http://localhost:5000");
});
