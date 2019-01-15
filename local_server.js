const express = require('express');
const app = new express();
app.use(express.static('./dist'));
app.listen(8880);

console.log('app run http://localhost:8880');