const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "juan",
  password: "1298",
  database: "yt_login_system",
  port: "5432",
});

/* const createTblQry = `CREATE TABLE accounts (
    user_id serial PRIMARY KEY,
    username VARCHAR ( 50 ) UNIQUE NOT NULL,
    password VARCHAR ( 50 ) UNIQUE NOT NULL);`;

    

pool
  .query(createTblQry)
  .then((response) => {
    console.log("table Created");
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
 */
module.exports = pool;
