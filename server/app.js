const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');


app.use(cors());
app.use(express.json());


app.use("/", require("./routes"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// Ekspor aplikasi
exports.app = app;

/* Migrate
npx sequelize-cli model:generate --name Todo --attributes todoName:string,todo:string */
/* Seeding
npx sequelize seed:generate --name seed-Todo */