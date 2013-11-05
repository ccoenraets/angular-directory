var express = require('express'),
    path = require('path'),
    employees = require('./routes/employee');

var app = express();
app.use(express.bodyParser());
app.use(express.static(path.join(__dirname, '../client')));

app.get('/employees/:id/reports', employees.findByManager);
app.get('/employees/:id', employees.findById);
app.get('/employees', employees.findAll);

app.listen(3000);
console.log('Listening on port 3000...');