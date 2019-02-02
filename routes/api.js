const express = require ('express');
const router = express.Router();
const Content = require('../models/content');

const Project = require('../models/content_project')


router.get('/contents', (req, res, next) => {
	
	Content.find({})
	.then(data => res.json(data))
    .catch(next)
});


router.post('/contents', (req, res, next) => {
	if(req.body){
    	Content.create(req.body)
     	 .then(data => res.json(data))
      	.catch(next)
  	} 
  	else {
    res.json({
      error: "The input field is empty"
    })
  }
});

router.delete('/contents/:id', (req, res, next) => {
	 Content.findOneAndDelete({"_id": req.params.id})
    .then(data => res.json(data))
    .catch(next)

})






router.get('/projects', (req, res, next) => {
  
  Project.find({})
  .then(data => res.json(data))
    .catch(next)
});


router.post('/projects', (req, res, next) => {
  if(req.body){
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

router.delete('/projects/:id', (req, res, next) => {
   Project.findOneAndDelete({"_id": req.params.id})
    .then(data => res.json(data))
    .catch(next)

})


module.exports = router;




