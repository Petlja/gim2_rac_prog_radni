
var createXeusModule = (() => {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  
  return (
function(createXeusModule) {
  createXeusModule = createXeusModule || {};



  return createXeusModule.ready
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
  module.exports = createXeusModule;
else if (typeof define === 'function' && define['amd'])
  define([], function() { return createXeusModule; });
else if (typeof exports === 'object')
  exports["createXeusModule"] = createXeusModule;