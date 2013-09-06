var request = require('request');

/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.company = function(req, res) {
    var theCompany = {};

    request.get(
        {uri: 'http://localhost:3000/api/v1/companies/asdf'},
        function(err, response, body) {
            var data= {};
            if(!err && response.statusCode == 200){
                data = JSON.parse(body);
                theCompany = data;
                console.log('company', theCompany);
                res.render('company', { company : theCompany, title : "testing" });
            }
            else {
                console.log('error:');
                console.dir(err);
            }
        }
    );
};