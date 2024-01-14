const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/api/time', (req, res) => {
    const date = new Date();
    res.send(date.toGMTString());
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on port ${port}...`);
});
