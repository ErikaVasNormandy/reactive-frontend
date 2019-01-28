const express = require ('express');
const router = express.Router();
const Content = require('../models/content');



router.get('/contents', (req, res, next) => {
	
	Content.find({})
	.then(data => res.json(data))
    .catch(next)
});


router.post('/contents', (req, res, next) => {
	if(req.body.action){
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

module.exports = router;




