
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http');

var app = express();



app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(require('connect-assets')({
    jsCompilers: {
      html: {
        match: /\.html$/,
        compileSync: function (sourcePath, source) {
          var key = sourcePath.substring((__dirname + '/assets/templates/').length);
          var extIndex = key.lastIndexOf('.');
          if(extIndex>0) {
            key = key.substring(0, extIndex);
          }
          return 'JST["'+ key + '"]=' + JSON.stringify(source) + ';';
        }
      }
    }
  }));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
