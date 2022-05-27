const express = require('express');
const routes = require('./routes')
const PORT = process.env.PORT || 3001;
const app = express();


//middle ware
app.use(express.urlencoded({extend: true}));
app.use(express.json());
app.use(express.static('public'));

//uses routes
app.use(routes)

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`)
});