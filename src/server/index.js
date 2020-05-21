const express = require('express');

const app = express();

app.use(express.static('dist'));
app.get('/', (req, res) => res.send('Server is ready...'));
app.listen(8080, () => console.log('Server has started. Open http://localhost:8080/'));
