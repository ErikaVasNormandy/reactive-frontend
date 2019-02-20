const express = require ('express');
const router = express.Router();


const Content = require('../models/content');

const Project = require('../models/content_project')

const WorldBuilding = require('../models/content_worldbuilding')

const Artwork = require('../models/content_artwork')

const CharSheets = require('../models/content_charsheet')


////////////////////////////////////////////////////////////////
///////////////////// Home Posts
////////////////////////////////////////////////////////////////

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


////////////////////////////////////////////////////////////////
///////////////////// Project Posts
////////////////////////////////////////////////////////////////

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


////////////////////////////////////////////////////////////////
///////////////////// Worldbuilding Posts
////////////////////////////////////////////////////////////////

router.get('/worldbuildings', (req, res, next) => {
  
  WorldBuilding.find({})
  .then(data => res.json(data))
    .catch(next)
});


router.post('/worldbuildings', (req, res, next) => {
  if(req.body){
      WorldBuilding.create(req.body)
       .then(data => res.json(data))
        .catch(next)
    } 
    else {
    res.json({
      error: "The input field is empty"
    })
  }
});

router.delete('/worldbuildings/:id', (req, res, next) => {
   WorldBuilding.findOneAndDelete({"_id": req.params.id})
    .then(data => res.json(data))
    .catch(next)

})

////////////////////////////////////////////////////////////////
///////////////////// Artwork Posts
////////////////////////////////////////////////////////////////

router.get('/artworks', (req, res, next) => {
	
	Artwork.find({})
	.then(data => res.json(data))
    .catch(next)
});

router.post('/artworks', (req, res, next) => {
	if(req.body){
    	Artwork.create(req.body)
     	 .then(data => res.json(data))
      	.catch(next)
  	} 
  	else {
    res.json({
      error: "The input field is empty"
    })
  }
});

router.delete('/artworks/:id', (req, res, next) => {
	 Artwork.findOneAndDelete({"_id": req.params.id})
    .then(data => res.json(data))
    .catch(next)

})



////////////////////////////////////////////////////////////////
///////////////////// CharSheet Posts
////////////////////////////////////////////////////////////////

router.get('/charsheets', (req, res, next) => {
	
	CharSheet.find({})
	.then(data => res.json(data))
    .catch(next)
});

router.post('/charsheets', (req, res, next) => {
	if(req.body){
    	CharSheet.create(req.body)
     	 .then(data => res.json(data))
      	.catch(next)
  	} 
  	else {
    res.json({
      error: "The input field is empty"
    })
  }
});

router.delete('/charsheets/:id', (req, res, next) => {
	 CharSheet.findOneAndDelete({"_id": req.params.id})
    .then(data => res.json(data))
    .catch(next)

})



module.exports = router;




