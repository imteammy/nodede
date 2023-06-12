const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//? Middleware, Route, Database
//const auth = require("./middleware/middleware");
const routes = require("./routes/route");
const connectDB = require("./configs/database");
routes(app);
connectDB();
function auth(req, res, next) {
  const { token } = req.body;

  if (!token || token === "" || token === undefined) {
    return res.json({error : "Token is required"});
  }

  if (token === "12345") {
    next();
  }
}
app.use(auth);
app.use((req, res, next) => {
  return res.status(404).json({ error: "Page not found!" });
});

module.exports = app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});

//module.exports = app;
