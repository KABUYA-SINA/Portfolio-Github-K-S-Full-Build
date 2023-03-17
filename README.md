
Front: 

	command
			1. npm run start 
			2. npm run sass
			3. npm run prefix
 
 Back:
 
	 command
			1. nodemon server
			2. You need controllers
			3. models
  
 For example :
  
		controllers 

		Also do not forget to import model 
		ex: const Projet = require('../models/projets.js)

			exports.GetAllObjet = (req, res, next) => {
			Project.find()
					.then(sauces => res.status(200).json(sauces)) 
					.catch(error => res.status(400).json({ error }));}
        
		 models

			 const skills = [
				{
					id: 1,
					title: 'HTML'
				}]
			 module.exports = skills
	 
	 
 Asset for some images XD
