const models = require('../models')
exports.get_landing = function(req, res, next) {
  //  First argument = template (see views/landing.pug)
  //  Second argument = JSON with title which we reference in the landing.pug file
  res.render('landing', { title: 'Express' });
}

exports.submit_lead = function(req, res, next) {
  // Prints to our server side console the input from the field which we named "lead_email"
  return models.Lead.create({
    email: req.body.lead_email
  }).then(lead => {
    res.redirect('/leads')
  })
}

exports.show_leads = function(req, res, next) {
  return models.Lead.findAll().then(leads => {
    res.render('landing', {title: 'Express', leads: leads})
  })
}

exports.show_lead = function(req, res, next) {
  return models.Lead.findOne({
    where : {
      id: req.params.lead_id
    }
  }).then(lead => {
    res.render('lead', { lead : lead });
  })


}