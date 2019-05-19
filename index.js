const Express = require('express');
const cors = require('cors');
const express = new Express();
const bodyParser = require('body-parser');
const knex=require('knex')
express.use(bodyParser.json());
express.use(bodyParser.urlencoded({
    extended: true
}))
express.get('/api/login', getEmployeeHandler);
express.listen(4000, 'localhost', () => {
    console.log("Server is running at", 4000)
})
function getEmployeeHandler(request, response) {
        response.json({
            Status:"ok"
        })
    .catch(error=>{
        response.json({
            status:'fail',
            data:null,
            error:true
        })
    })
}

