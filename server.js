const express = require("express");
const Connect = require("./Config/Connect");
Connect();

const app = express();
const bodyParser = require("body-parser");
app.use('/api/Person',require('./routes/Router'));


const port = 4000;
app.listen(port, () => {
  console.log(
    `Success! Your application is running on http://localhost:${port}`
  );
});