const express = require('express');
const cors = require('cors');
const port = 50700;
const app = express();

// Enable CORS requests as JSON
app.use(cors());
app.use(express.json());

// Persistence !
let contracts = [];

app.post('/send/:arbiter/:beneficiary/:value', (req, response) => {
    const {arbiter, beneficiary, value} = req.params;
    const contract = {arbiter, beneficiary, value};
    contracts.push(contract);
    response.send('success');
});

app.get('/contracts', (req, res) => {
    res.send(contracts);
});

// Local Hosting !
app.listen(port, () => {
    console.log(`Listening on port ${port}!`);
});
