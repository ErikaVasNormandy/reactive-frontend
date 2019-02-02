const express = require ('express');
const projectrouter = express.Router();
const Project = require('../models/content_project');



projectrouter.get('/projects', (req, res, next) => {
	
	Project.find({})
	.then(data => res.json(data))
    .catch(next)
});


projectrouter.post('/projects', (req, res, next) => {
	if(req){
    	Project.create(req.body)
     	 .then(data => res.json(data))
      	.catch(next)
  	} 
  	else {
    res.json({
      error: "The input field is empty"
    })
  }
});

projectrouter.delete('/projects/:id', (req, res, next) => {
	 Project.findOneAndDelete({"_id": req.params.id})
    .then(data => res.json(data))
    .catch(next)

})

module.exports = projectrouter;




