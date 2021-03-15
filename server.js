const express = require("express");
const graphqlHTTP = require("express-graphql");
const cors = require("cors");
const path = require("path");

const schema = require("./schema");

const app = express();
const PORT = process.env.PORT || 5000;

//allow cross origin
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.use(express.static("public"));

app.get("*", (req, res) => {
  res.send(path.relative(__dirname, "public", "index.html"));
});

app.listen(PORT, () => console.log(`Server Running at ${PORT}`));
