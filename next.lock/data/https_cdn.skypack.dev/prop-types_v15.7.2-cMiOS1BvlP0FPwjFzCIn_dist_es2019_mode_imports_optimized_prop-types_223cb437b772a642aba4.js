function createCommonjsModule(fn, basedir, module) {
  return module = {
    path: basedir,
    exports: {},
    require: function(path, base) {
      return commonjsRequire(path, base === void 0 || base === null ? module.path : base);
    }
  }, fn(module, module.exports), module.exports;
}
function commonjsRequire() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
var ReactPropTypesSecret_1 = ReactPropTypesSecret;
function emptyFunction() {
}
function emptyFunctionWithReset() {
}
emptyFunctionWithReset.resetWarningCache = emptyFunction;
var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      return;
    }
    var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
    err.name = "Invariant Violation";
    throw err;
  }
  shim.isRequired = shim;
  function getShim() {
    return shim;
  }
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};
var propTypes = createCommonjsModule(function(module) {
  {
    module.exports = factoryWithThrowingShims();
  }
});
var PropTypes = propTypes.PropTypes;
var any = propTypes.any;
var array = propTypes.array;
var arrayOf = propTypes.arrayOf;
var bool = propTypes.bool;
var checkPropTypes = propTypes.checkPropTypes;
export default propTypes;
var element = propTypes.element;
var elementType = propTypes.elementType;
var exact = propTypes.exact;
var func = propTypes.func;
var instanceOf = propTypes.instanceOf;
var node = propTypes.node;
var number = propTypes.number;
var object = propTypes.object;
var objectOf = propTypes.objectOf;
var oneOf = propTypes.oneOf;
var oneOfType = propTypes.oneOfType;
var resetWarningCache = propTypes.resetWarningCache;
var shape = propTypes.shape;
var string = propTypes.string;
var symbol = propTypes.symbol;
export {PropTypes, propTypes as __moduleExports, any, array, arrayOf, bool, checkPropTypes, element, elementType, exact, func, instanceOf, node, number, object, objectOf, oneOf, oneOfType, resetWarningCache, shape, string, symbol};
