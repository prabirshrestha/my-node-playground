window.JSS || (window.JSS = {});
window.JST || (window.JST = {});

window.requires = (function () {

  var loaded = {};
  
  return function (name) {
    var loadedModule = loaded[name], module;

    if(loadedModule) {
      return;
    }

    module = JSS[name];
    if(!module) {
      throw new Error("Couldn't load module: " + name);
    }

    if(typeof(module) === 'string') {
      // We use execScript on Internet Explorer
      // We use an anonymous function so that context is window
      // rather than jQuery in Firefox
      try{
        (window.execScript || function(data) {
          window["eval"].call( window, data);
        })(module + ';\n//@ sourceURL=JSS['+ name +']\n');
      } catch(e) {
        console.log(e.stack);
        throw e;
      }
    }
    else {
      module();
    }

    delete JSS[name];
    loaded[name] = true;
    
    return;
  };

})();