const express = require('express');
const app = express();
const port = 3000;

app.get('/api/time', (req, res) => {
    const date = new Date();
    res.send(date.toGMTString());
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}...`);
});
