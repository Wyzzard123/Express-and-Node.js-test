exports.index = function(req, res, next) {
  //  First argument = template (see views/index.pug)
  //  Second argument = JSON with title which we reference in the index.pug file
  res.render('index', { title: 'Express' });
}