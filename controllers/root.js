var controller ={};

controller.root = function(req,res){
	res.render('layout', {user:req.user});
};

controller.logout =function(req,res){
	req.logout();
	res.redirect('/');
};

module.exports = controller;