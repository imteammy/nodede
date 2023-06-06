const express = require('express');
const app = express();
const PORT = 3000;

const routes = require('./routes/route');
routes(app);


module.exports = app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});

//module.exports = app;