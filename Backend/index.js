require("./config/appConfig");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const pokemons = require("./routes/pokemon");
const user = require("./routes/user");
const cookieParser = require('cookie-parser');

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", pokemons);
app.use("/user", user);

app.listen(process.env.PORT, () => {
  console.log("Listening on port " + process.env.PORT);
});
