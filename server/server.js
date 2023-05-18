const express = require("express");
const cors = require("cors");
const pool = require("./database");

const app = express();

app.use(express.json());
// corse is to make the comunicaion bewteen backend and frontend more safe
app.use(cors());

//
/* app.get("/adduser", (req, res) => {
  console.log(req.body);
  res.send("response received: " + req.body);
});
 */
app.post("/adduser", (req, res) => {
  const username = req.body["username"];
  const password = req.body["password"];

  console.log("Username: " + username);
  console.log("Password: " + password);

  const insertSTMT = `INSERT INTO accounts ( username, password ) VALUES ( '${username}', '${password}' );`;

  pool
    .query(insertSTMT)
    .then((response) => {
      console.log("Data Saved");
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
  console.log(req.body);
  res.send("response received: " + req.body);
});

app.listen(4000, () => console.log("server in localhost:4000"));
