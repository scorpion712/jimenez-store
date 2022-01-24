const express = require('express'); 

// importing routers 
const productRouter = require('./routes/productRouter');  

// create server using express
const app = express(); 

// adding middleware to recognize the incoming Request Object as a JSON
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Defining routes 
app.use("/", express.static(__dirname + "/build"));
app.use('/api', productRouter);

// Starting the server
const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || 'localhost';

app.listen(PORT, () => console.log(`server at ${HOST}:${PORT}/`));
