const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const pokemons = require("./routes/pokemon");
const user = require('./routes/user');

const port = 5000;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", pokemons);
app.use("/user", user);

app.listen(port, () => {
  console.log("Listening on port " + port);
});
