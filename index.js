const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000


app.listen(PORT,() => {
    console.log(`Server is runnig on http://localhost:${PORT}`);
});