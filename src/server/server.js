const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');
const cartRouter = require('./cartRouter');

app.use(express.json());
app.use('/', express.static(path.resolve(__dirname, '../public')));
app.use('/api/cart', cartRouter);

const productBaseFile = path.resolve(__dirname, './db/products.json');

app.get('/api/products', (req, res) => {
    fs.readFile(productBaseFile, 'utf-8', (err, data) => {
        if (err) {
            res.send(JSON.stringify({result: 0, text: err}));
        } else {
            res.send(data);
        }
    });
});

const port = 8000;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});