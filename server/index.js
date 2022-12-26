const express = require('express')
const app = express();
const phones = require("./data/phones.json")
const cors = require('cors');

app.use(cors({ origin: 'http://localhost:3000' }))


app.get("/", (req, res) => console.log("oi"))

app.listen("5000", () => console.log("servidor ligado"))

app.get("/phones", (req, res) => {
  res.json(phones)
})

app.get("/phones/:id", (req, res) => {
  const phoneFound = phones.filter((phone) => {
    return phone.id == req.params.id
  })
  res.json(phoneFound)
})