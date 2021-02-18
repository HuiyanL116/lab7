var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(req, res){
	data['viewAlt'] = true;
	response.render('index', projects);
};

exports.viewAlt = function(req, res){
	data['viewAlt'] = false;
	response.render('index', projects);
}