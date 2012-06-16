window.JSX || (window.JSX = {});
window.JST || (window.JST = {});

window.require = (function () {

  var loaded = {};
  
  return function (name) {
    var loadedModule = loaded[name], module;

    if(loadedModule) {
      return;
    }

    module = JSX[name];
    if(!module) {
      throw new Error("Couldn't load module: " + name);
    }

    if(typeof(module) === 'string') {
      // We use execScript on Internet Explorer
      // We use an anonymous function so that context is window
      // rather than jQuery in Firefox
      (window.execScript || function(data) {
        window["eval"].call( window, data);
      })(module);
    }
    else {
      module();
    }

    loaded[name] = true;
    return;
  };

})();