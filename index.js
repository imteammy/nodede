const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : true }));


const routes = require('./routes/route');
const connectDB = require("./configs/database");
routes(app);
connectDB();


app.get("/", (req, res) => {
    res.send("<center><h1>ROV API</h1></center>");
  });

app.use('/', (req, res, next) => {
  return res.status(404).json({Error : "Page not found!"})
})

module.exports = app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});

//module.exports = app;