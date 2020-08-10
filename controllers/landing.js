exports.get_landing = function(req, res, next) {
  //  First argument = template (see views/landing.pug)
  //  Second argument = JSON with title which we reference in the landing.pug file
  res.render('landing', { title: 'Express' });
}