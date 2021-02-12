let express = require("express");
let router = express.Router();

let validateSession = require("../middleware/validateSession");
const Product = require("../db").import("../models/product");

router.post("/create", validateSession, (req, res) => {
  const productEntry = {
    name: req.body.product.name,
    price: req.body.product.price,
    description: req.body.product.description,
    availability: req.body.product.availability,
    photoURL: req.body.product.photoURL,
    adminDisplay: req.body.product.adminDisplay,
    owner: req.body.product.owner,
  };

  Product.create(productEntry)
    .then((product) => res.status(200).json(journal))
    .catch((err) => res.status(500).json({ error: err }));
});

router.get("/", (req, res) => {
  Product.findAll()
    .then((journals) => res.status(200).json(journals))
    .catch((err) => res.status(500).json({ error: err }));
});

router.get("/owner", function (req, res) {
  let owner = req.params.owner;

  Product.findAll({
    where: { owner: owner },
  })
    .then((journals) => res.status(200).json(journals))
    .catch((err) => res.status(500).json({ error: err }));
});

router.get("/name", function (req, res) {
  let name = req.params.name;

  Product.findAll({
    where: { name: name },
  })
    .then((journals) => res.status(200).json(journals))
    .catch((err) => res.status(500).json({ error: err }));
});

router.put("/edit/:id", validateSession, function (req, res) {
  const updateProductEntry = {
    name: req.body.product.name,
    price: req.body.product.price,
    description: req.body.product.description,
    availability: req.body.product.availability,
    photoURL: req.body.product.photoURL,
  };
  const query = { where: { id: req.params.id, owner: req.owner } };

  Journal.update(updateJournalEntry, query)
    .then((journals) => res.status(200).json(journals))
    .catch((err) => res.status(500).json({ error: err }));
});

router.delete("/delete/:id", validateSession, function (req, res) {
  const query = { where: { id: req.params.id, owner: req.owner } };

  Journal.destroy(query)
    .then(() => res.status(200).json({ message: "Product Entry Removed" }))
    .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;
