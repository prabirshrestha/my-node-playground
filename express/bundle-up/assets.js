module.exports = function(assets) {
  assets.root = __dirname;
  assets.addJs('/public/javascripts/a.js');
  assets.addJs('/public/javascripts/b.js');

  // assets.addJs('/public/js/jquery.placeholder.min.js');
  // assets.addJs('/app/client/main.coffee');

  // assets.addCss('/public/bootstrap/bootstrap.min.css');
  // assets.addCss('/app/styles/screen.styl');
}

// path for bundle_up.coffee
    // if(@app.helper)
    //  @app.helpers(
    //       renderStyles: (namespace=@css.defaultNamespace) =>
    //         return @css.render(namespace)
    //       renderJs: (namespace=@js.defaultNamespace) =>
    //         return @js.render(namespace)
    //     )
    // else
    //   self = this;
    //   @app.locals.use (req, res, next) ->
    //     res.locals.renderStyles = (namespace=self.css.defaultNamespace) ->
    //       return self.css.render(namespace)
    //     res.locals.renderJs = (namespace=self.js.defaultNamespace) ->
    //       return self.js.render(namespace);
    //     next();