const express = require("express");
const app = express();
const PORT = 4000;
const bodyParser = require('body-parser')
const router=require("./routes/recipiesRoute")
const cors = require('cors')
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

// TODO - add additional route handlers as necessary
app.use('/',router)


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
