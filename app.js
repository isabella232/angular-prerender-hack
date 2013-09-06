
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var prerenderer = require('connect-prerenderer');
//var dust = require('dust');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
//app.set('view engine', 'jade');

// for hogan-express
// app.set('view engine', 'html');
// app.set('layout', 'layout');
// app.engine('html', require('hogan-express'));

// for dust
var dust = require('dustjs-linkedin')
  , cons = require('consolidate');
app.engine('dust', cons.dust);
app.set('template_engine', 'dust');
app.set('view engine', 'dust');

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(prerenderer());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


app.get('/c/test', routes.company);

app.get(/^\/members\/.*/, function(req, res) { res.sendfile('public/notindex.html'); });

app.get('/api/v1/members/abcde', function(req, res) {
        res.json({
            id: 'abcde',
            firstName: 'Francisco',
            lastName: 'MacDonald',
            title: 'President',
            avatarUrl: 'http://services.manta-r1.com/api/claim-this-profile/image-mgr/view/201307253UpNKB8Z6Q/110x110/img.jpg'
        });
});

    app.get('/api/v1/companies/:companyId', function(req, res) {
      console.log("in /api/companies/:companyId");
      res.json({ 
          emid: 'mm53fgr',
          name: 'All Pro Pizza',
          address: '74990 Country Club Drive', // # 330
          city: 'Palm Desert',
          stateAbbrv: 'CA',
          state: 'California',
          stateOfIncorporation: 'California',
          zip: '92260-1991',
          phone: '7607765450',
          website: undefined,

          shortDescription: 'All Pro Pizza Inc in Palm Desert, CA is a private company categorized under Pizza.  Our records show it was established in 1996 and incorporated in California.     Current estimates show this company has an annual revenue of less than $500,000 and employs a staff of approximately 5 to 9.',

          locationType: 'Single Location',

          industry: {
              sicm: {
                  name: 'Pizza Shops',
                  code: 'C432C0GO',
                  url: '/mb_55_C432C0GO_1ZU/pizza_restaurants/palm_desert_ca',
              },
              naics: {
                  code: '722110',
                  name: 'Full-Service Restaurants'
              },
              sic: {
                  code: '581222',
                  name: 'Pizza'
              }
          },

          annualRevenue: 'Less than $500,000',
          numEmployees: '5 to 9',

          mantaUrl: {
              profile: '/c/mm123/all-pro-pizza',
              map: '/cmap/mm123/all-pro-pizza'
          },

          products: {
              count: 3,
              list: [
                  { name: 'Applewood Pizza' },
                  { name: 'Brick-Oven' },
                  { name: 'Pizza Delivery' }
              ]
          },

          contacts: {
              count: 2,
              list: [
                  {
                      name: 'Mike Salotti',
                      title: 'Owner'
                  },
                  {
                      name: 'Mike Flatti',
                      title: 'President'
                  }
              ]
          },

          categories: {
              count: 3,
              list: [
                  {
                      name: 'Pizza in Palm Desert, CA',
                      url: '/mb_55_C432C0GO_1ZU/pizza_restaurants/palm_desert_ca'
                  },
                  {
                      name: 'Pizzeria'
                  },
                  {
                      name: 'Full-Service Restaurants'
                  }
              ]
          },

          relatedCompanies: {
              count: 275, //NOTE: this doesn't exist in the data or get used today
              list: [
                  {
                      name: 'West Coast Pizza',
                      mantaUrl: {
                          profile: '/c/mm3456/west-coast-pizza'
                      }
                  },
                  {
                      name: 'MMM Pizza',
                      mantaUrl: {
                          profile: '/c/mm789/mmm-pizza'
                      }
                  },
                  {
                      name: 'California\'s NY Pizza',
                      mantaUrl: {
                          profile: '/c/mm3452/californias-ny-pizza'
                      }
                  },
                  {
                      name: 'West Coast Pizza & Subs!',
                      mantaUrl: {
                          profile: '/c/mm3458/west-coast-pizza-subs'
                      }
                  },
                  {
                      name: 'Little Ceasars',
                      mantaUrl: {
                          profile: '/c/mm34577/little-ceasars'
                      }
                  }
              ]
          },
          
          recommendations: {
              count: 2,
              list: []
          },
          followers: {
              count: 17,
              list: []
          },

        });
    });

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
