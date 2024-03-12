const express = require('express');
const app = express();
require('dotenv').config(); 

// Domain endpoint who will return api documentation
app.get('/', (req, res) => {
  res.sendFile("index.html", {root: './client'})
})

// if the user goes to an endpoint that is not managed by the service
app.use( (req, res) => {
    res.status(404).json({
      method: req.method,
      respons: `Oops, I think you got lost! Return to the origin Endpoint: ${req.protocol + '://' + req.get('host')}`
    })
});

// for see if the it's the server has been started
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`) 
})
