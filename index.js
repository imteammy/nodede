const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended : true }));

const routes = require('./routes/route');
routes(app);


module.exports = app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});

//module.exports = app;