const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();

app.use(cors());
app.use(express.json());

db.connect();

app.get('/state', async function(req, res) {
    const savedState = await db.getItemFromDB();
    if (savedState==null) {
        res.json(null);
    } else {
        const picked = (({ value, _persist }) => ({ value, _persist }))(savedState);
        res.json(picked);
    }
});

app.post('/state', async function(req, res) {
    savedState = { ...req.body };
    await db.saveItemToDB(savedState);
    res.json('state saved');
});

app.listen(8080, () => console.log('Server listening on port 8080!'));