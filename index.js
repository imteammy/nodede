const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended : true }));

const routes = require('./routes/route');
routes(app);

const connectDB = require("./configs/database");

connectDB();

app.get("/", (req, res) => {
    res.send("<center><h1>ROV API</h1></center>");
  });

// module.exports = app.listen(PORT, () => {
//     console.log(`Server running on port http://localhost:${PORT}`);
// });

module.exports = app;