import _assign from "/-/object-assign@v4.1.1-LbCnB3r2y2yFmhmiCfPn/dist=es2019,mode=imports/optimized/object-assign.js";
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
var react_production_min = createCommonjsModule(function(module, exports) {
  var n = 60103, p = 60106;
  exports.Fragment = 60107;
  exports.StrictMode = 60108;
  exports.Profiler = 60114;
  var q = 60109, r = 60110, t = 60112;
  exports.Suspense = 60113;
  var u = 60115, v = 60116;
  if (typeof Symbol === "function" && Symbol.for) {
    var w = Symbol.for;
    n = w("react.element");
    p = w("react.portal");
    exports.Fragment = w("react.fragment");
    exports.StrictMode = w("react.strict_mode");
    exports.Profiler = w("react.profiler");
    q = w("react.provider");
    r = w("react.context");
    t = w("react.forward_ref");
    exports.Suspense = w("react.suspense");
    u = w("react.memo");
    v = w("react.lazy");
  }
  var x = typeof Symbol === "function" && Symbol.iterator;
  function y(a) {
    if (a === null || typeof a !== "object")
      return null;
    a = x && a[x] || a["@@iterator"];
    return typeof a === "function" ? a : null;
  }
  function z(a) {
    for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
      b += "&args[]=" + encodeURIComponent(arguments[c]);
    return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var A = {isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  }}, B = {};
  function C(a, b, c) {
    this.props = a;
    this.context = b;
    this.refs = B;
    this.updater = c || A;
  }
  C.prototype.isReactComponent = {};
  C.prototype.setState = function(a, b) {
    if (typeof a !== "object" && typeof a !== "function" && a != null)
      throw Error(z(85));
    this.updater.enqueueSetState(this, a, b, "setState");
  };
  C.prototype.forceUpdate = function(a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
  };
  function D() {
  }
  D.prototype = C.prototype;
  function E(a, b, c) {
    this.props = a;
    this.context = b;
    this.refs = B;
    this.updater = c || A;
  }
  var F = E.prototype = new D();
  F.constructor = E;
  _assign(F, C.prototype);
  F.isPureReactComponent = true;
  var G = {current: null}, H = Object.prototype.hasOwnProperty, I = {key: true, ref: true, __self: true, __source: true};
  function J(a, b, c) {
    var e, d = {}, k = null, h = null;
    if (b != null)
      for (e in b.ref !== void 0 && (h = b.ref), b.key !== void 0 && (k = "" + b.key), b)
        H.call(b, e) && !I.hasOwnProperty(e) && (d[e] = b[e]);
    var g = arguments.length - 2;
    if (g === 1)
      d.children = c;
    else if (1 < g) {
      for (var f = Array(g), m = 0; m < g; m++)
        f[m] = arguments[m + 2];
      d.children = f;
    }
    if (a && a.defaultProps)
      for (e in g = a.defaultProps, g)
        d[e] === void 0 && (d[e] = g[e]);
    return {$$typeof: n, type: a, key: k, ref: h, props: d, _owner: G.current};
  }
  function K(a, b) {
    return {$$typeof: n, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner};
  }
  function L(a) {
    return typeof a === "object" && a !== null && a.$$typeof === n;
  }
  function escape(a) {
    var b = {"=": "=0", ":": "=2"};
    return "$" + a.replace(/[=:]/g, function(a2) {
      return b[a2];
    });
  }
  var M = /\/+/g;
  function N(a, b) {
    return typeof a === "object" && a !== null && a.key != null ? escape("" + a.key) : b.toString(36);
  }
  function O(a, b, c, e, d) {
    var k = typeof a;
    if (k === "undefined" || k === "boolean")
      a = null;
    var h = false;
    if (a === null)
      h = true;
    else
      switch (k) {
        case "string":
        case "number":
          h = true;
          break;
        case "object":
          switch (a.$$typeof) {
            case n:
            case p:
              h = true;
          }
      }
    if (h)
      return h = a, d = d(h), a = e === "" ? "." + N(h, 0) : e, Array.isArray(d) ? (c = "", a != null && (c = a.replace(M, "$&/") + "/"), O(d, b, c, "", function(a2) {
        return a2;
      })) : d != null && (L(d) && (d = K(d, c + (!d.key || h && h.key === d.key ? "" : ("" + d.key).replace(M, "$&/") + "/") + a)), b.push(d)), 1;
    h = 0;
    e = e === "" ? "." : e + ":";
    if (Array.isArray(a))
      for (var g = 0; g < a.length; g++) {
        k = a[g];
        var f = e + N(k, g);
        h += O(k, b, c, f, d);
      }
    else if (f = y(a), typeof f === "function")
      for (a = f.call(a), g = 0; !(k = a.next()).done; )
        k = k.value, f = e + N(k, g++), h += O(k, b, c, f, d);
    else if (k === "object")
      throw b = "" + a, Error(z(31, b === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : b));
    return h;
  }
  function P(a, b, c) {
    if (a == null)
      return a;
    var e = [], d = 0;
    O(a, e, "", "", function(a2) {
      return b.call(c, a2, d++);
    });
    return e;
  }
  function Q(a) {
    if (a._status === -1) {
      var b = a._result;
      b = b();
      a._status = 0;
      a._result = b;
      b.then(function(b2) {
        a._status === 0 && (b2 = b2.default, a._status = 1, a._result = b2);
      }, function(b2) {
        a._status === 0 && (a._status = 2, a._result = b2);
      });
    }
    if (a._status === 1)
      return a._result;
    throw a._result;
  }
  var R = {current: null};
  function S() {
    var a = R.current;
    if (a === null)
      throw Error(z(321));
    return a;
  }
  var T = {ReactCurrentDispatcher: R, ReactCurrentBatchConfig: {transition: 0}, ReactCurrentOwner: G, IsSomeRendererActing: {current: false}, assign: _assign};
  exports.Children = {map: P, forEach: function(a, b, c) {
    P(a, function() {
      b.apply(this, arguments);
    }, c);
  }, count: function(a) {
    var b = 0;
    P(a, function() {
      b++;
    });
    return b;
  }, toArray: function(a) {
    return P(a, function(a2) {
      return a2;
    }) || [];
  }, only: function(a) {
    if (!L(a))
      throw Error(z(143));
    return a;
  }};
  exports.Component = C;
  exports.PureComponent = E;
  exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T;
  exports.cloneElement = function(a, b, c) {
    if (a === null || a === void 0)
      throw Error(z(267, a));
    var e = _assign({}, a.props), d = a.key, k = a.ref, h = a._owner;
    if (b != null) {
      b.ref !== void 0 && (k = b.ref, h = G.current);
      b.key !== void 0 && (d = "" + b.key);
      if (a.type && a.type.defaultProps)
        var g = a.type.defaultProps;
      for (f in b)
        H.call(b, f) && !I.hasOwnProperty(f) && (e[f] = b[f] === void 0 && g !== void 0 ? g[f] : b[f]);
    }
    var f = arguments.length - 2;
    if (f === 1)
      e.children = c;
    else if (1 < f) {
      g = Array(f);
      for (var m = 0; m < f; m++)
        g[m] = arguments[m + 2];
      e.children = g;
    }
    return {
      $$typeof: n,
      type: a.type,
      key: d,
      ref: k,
      props: e,
      _owner: h
    };
  };
  exports.createContext = function(a, b) {
    b === void 0 && (b = null);
    a = {$$typeof: r, _calculateChangedBits: b, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null};
    a.Provider = {$$typeof: q, _context: a};
    return a.Consumer = a;
  };
  exports.createElement = J;
  exports.createFactory = function(a) {
    var b = J.bind(null, a);
    b.type = a;
    return b;
  };
  exports.createRef = function() {
    return {current: null};
  };
  exports.forwardRef = function(a) {
    return {$$typeof: t, render: a};
  };
  exports.isValidElement = L;
  exports.lazy = function(a) {
    return {$$typeof: v, _payload: {_status: -1, _result: a}, _init: Q};
  };
  exports.memo = function(a, b) {
    return {$$typeof: u, type: a, compare: b === void 0 ? null : b};
  };
  exports.useCallback = function(a, b) {
    return S().useCallback(a, b);
  };
  exports.useContext = function(a, b) {
    return S().useContext(a, b);
  };
  exports.useDebugValue = function() {
  };
  exports.useEffect = function(a, b) {
    return S().useEffect(a, b);
  };
  exports.useImperativeHandle = function(a, b, c) {
    return S().useImperativeHandle(a, b, c);
  };
  exports.useLayoutEffect = function(a, b) {
    return S().useLayoutEffect(a, b);
  };
  exports.useMemo = function(a, b) {
    return S().useMemo(a, b);
  };
  exports.useReducer = function(a, b, c) {
    return S().useReducer(a, b, c);
  };
  exports.useRef = function(a) {
    return S().useRef(a);
  };
  exports.useState = function(a) {
    return S().useState(a);
  };
  exports.version = "17.0.1";
});
var react = createCommonjsModule(function(module) {
  {
    module.exports = react_production_min;
  }
});
var emptyObject = {};
function _invariant(condition, format, a, b, c, d, e, f) {
  if (!condition) {
    var error;
    if (format === void 0) {
      error = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function() {
        return args[argIndex++];
      }));
      error.name = "Invariant Violation";
    }
    error.framesToPop = 1;
    throw error;
  }
}
var MIXINS_KEY = "mixins";
function identity(fn) {
  return fn;
}
function factory(ReactComponent, isValidElement, ReactNoopUpdateQueue2) {
  var injectedMixins = [];
  var ReactClassInterface = {
    mixins: "DEFINE_MANY",
    statics: "DEFINE_MANY",
    propTypes: "DEFINE_MANY",
    contextTypes: "DEFINE_MANY",
    childContextTypes: "DEFINE_MANY",
    getDefaultProps: "DEFINE_MANY_MERGED",
    getInitialState: "DEFINE_MANY_MERGED",
    getChildContext: "DEFINE_MANY_MERGED",
    render: "DEFINE_ONCE",
    componentWillMount: "DEFINE_MANY",
    componentDidMount: "DEFINE_MANY",
    componentWillReceiveProps: "DEFINE_MANY",
    shouldComponentUpdate: "DEFINE_ONCE",
    componentWillUpdate: "DEFINE_MANY",
    componentDidUpdate: "DEFINE_MANY",
    componentWillUnmount: "DEFINE_MANY",
    UNSAFE_componentWillMount: "DEFINE_MANY",
    UNSAFE_componentWillReceiveProps: "DEFINE_MANY",
    UNSAFE_componentWillUpdate: "DEFINE_MANY",
    updateComponent: "OVERRIDE_BASE"
  };
  var ReactClassStaticInterface = {
    getDerivedStateFromProps: "DEFINE_MANY_MERGED"
  };
  var RESERVED_SPEC_KEYS = {
    displayName: function(Constructor, displayName) {
      Constructor.displayName = displayName;
    },
    mixins: function(Constructor, mixins) {
      if (mixins) {
        for (var i = 0; i < mixins.length; i++) {
          mixSpecIntoComponent(Constructor, mixins[i]);
        }
      }
    },
    childContextTypes: function(Constructor, childContextTypes) {
      Constructor.childContextTypes = _assign({}, Constructor.childContextTypes, childContextTypes);
    },
    contextTypes: function(Constructor, contextTypes) {
      Constructor.contextTypes = _assign({}, Constructor.contextTypes, contextTypes);
    },
    getDefaultProps: function(Constructor, getDefaultProps) {
      if (Constructor.getDefaultProps) {
        Constructor.getDefaultProps = createMergedResultFunction(Constructor.getDefaultProps, getDefaultProps);
      } else {
        Constructor.getDefaultProps = getDefaultProps;
      }
    },
    propTypes: function(Constructor, propTypes) {
      Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
    },
    statics: function(Constructor, statics) {
      mixStaticSpecIntoComponent(Constructor, statics);
    },
    autobind: function() {
    }
  };
  function validateMethodOverride(isAlreadyDefined, name) {
    var specPolicy = ReactClassInterface.hasOwnProperty(name) ? ReactClassInterface[name] : null;
    if (ReactClassMixin.hasOwnProperty(name)) {
      _invariant(specPolicy === "OVERRIDE_BASE", "ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.", name);
    }
    if (isAlreadyDefined) {
      _invariant(specPolicy === "DEFINE_MANY" || specPolicy === "DEFINE_MANY_MERGED", "ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.", name);
    }
  }
  function mixSpecIntoComponent(Constructor, spec) {
    if (!spec) {
      return;
    }
    _invariant(typeof spec !== "function", "ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object.");
    _invariant(!isValidElement(spec), "ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");
    var proto = Constructor.prototype;
    var autoBindPairs = proto.__reactAutoBindPairs;
    if (spec.hasOwnProperty(MIXINS_KEY)) {
      RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
    }
    for (var name in spec) {
      if (!spec.hasOwnProperty(name)) {
        continue;
      }
      if (name === MIXINS_KEY) {
        continue;
      }
      var property = spec[name];
      var isAlreadyDefined = proto.hasOwnProperty(name);
      validateMethodOverride(isAlreadyDefined, name);
      if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
        RESERVED_SPEC_KEYS[name](Constructor, property);
      } else {
        var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
        var isFunction = typeof property === "function";
        var shouldAutoBind = isFunction && !isReactClassMethod && !isAlreadyDefined && spec.autobind !== false;
        if (shouldAutoBind) {
          autoBindPairs.push(name, property);
          proto[name] = property;
        } else {
          if (isAlreadyDefined) {
            var specPolicy = ReactClassInterface[name];
            _invariant(isReactClassMethod && (specPolicy === "DEFINE_MANY_MERGED" || specPolicy === "DEFINE_MANY"), "ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.", specPolicy, name);
            if (specPolicy === "DEFINE_MANY_MERGED") {
              proto[name] = createMergedResultFunction(proto[name], property);
            } else if (specPolicy === "DEFINE_MANY") {
              proto[name] = createChainedFunction(proto[name], property);
            }
          } else {
            proto[name] = property;
          }
        }
      }
    }
  }
  function mixStaticSpecIntoComponent(Constructor, statics) {
    if (!statics) {
      return;
    }
    for (var name in statics) {
      var property = statics[name];
      if (!statics.hasOwnProperty(name)) {
        continue;
      }
      var isReserved = name in RESERVED_SPEC_KEYS;
      _invariant(!isReserved, 'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.', name);
      var isAlreadyDefined = name in Constructor;
      if (isAlreadyDefined) {
        var specPolicy = ReactClassStaticInterface.hasOwnProperty(name) ? ReactClassStaticInterface[name] : null;
        _invariant(specPolicy === "DEFINE_MANY_MERGED", "ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.", name);
        Constructor[name] = createMergedResultFunction(Constructor[name], property);
        return;
      }
      Constructor[name] = property;
    }
  }
  function mergeIntoWithNoDuplicateKeys(one, two) {
    _invariant(one && two && typeof one === "object" && typeof two === "object", "mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");
    for (var key in two) {
      if (two.hasOwnProperty(key)) {
        _invariant(one[key] === void 0, "mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.", key);
        one[key] = two[key];
      }
    }
    return one;
  }
  function createMergedResultFunction(one, two) {
    return function mergedResult() {
      var a = one.apply(this, arguments);
      var b = two.apply(this, arguments);
      if (a == null) {
        return b;
      } else if (b == null) {
        return a;
      }
      var c = {};
      mergeIntoWithNoDuplicateKeys(c, a);
      mergeIntoWithNoDuplicateKeys(c, b);
      return c;
    };
  }
  function createChainedFunction(one, two) {
    return function chainedFunction() {
      one.apply(this, arguments);
      two.apply(this, arguments);
    };
  }
  function bindAutoBindMethod(component, method) {
    var boundMethod = method.bind(component);
    return boundMethod;
  }
  function bindAutoBindMethods(component) {
    var pairs = component.__reactAutoBindPairs;
    for (var i = 0; i < pairs.length; i += 2) {
      var autoBindKey = pairs[i];
      var method = pairs[i + 1];
      component[autoBindKey] = bindAutoBindMethod(component, method);
    }
  }
  var IsMountedPreMixin = {
    componentDidMount: function() {
      this.__isMounted = true;
    }
  };
  var IsMountedPostMixin = {
    componentWillUnmount: function() {
      this.__isMounted = false;
    }
  };
  var ReactClassMixin = {
    replaceState: function(newState, callback) {
      this.updater.enqueueReplaceState(this, newState, callback);
    },
    isMounted: function() {
      return !!this.__isMounted;
    }
  };
  var ReactClassComponent = function() {
  };
  _assign(ReactClassComponent.prototype, ReactComponent.prototype, ReactClassMixin);
  function createClass(spec) {
    var Constructor = identity(function(props, context, updater) {
      if (this.__reactAutoBindPairs.length) {
        bindAutoBindMethods(this);
      }
      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue2;
      this.state = null;
      var initialState = this.getInitialState ? this.getInitialState() : null;
      _invariant(typeof initialState === "object" && !Array.isArray(initialState), "%s.getInitialState(): must return an object or null", Constructor.displayName || "ReactCompositeComponent");
      this.state = initialState;
    });
    Constructor.prototype = new ReactClassComponent();
    Constructor.prototype.constructor = Constructor;
    Constructor.prototype.__reactAutoBindPairs = [];
    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));
    mixSpecIntoComponent(Constructor, IsMountedPreMixin);
    mixSpecIntoComponent(Constructor, spec);
    mixSpecIntoComponent(Constructor, IsMountedPostMixin);
    if (Constructor.getDefaultProps) {
      Constructor.defaultProps = Constructor.getDefaultProps();
    }
    _invariant(Constructor.prototype.render, "createClass(...): Class specification must implement a `render` method.");
    for (var methodName in ReactClassInterface) {
      if (!Constructor.prototype[methodName]) {
        Constructor.prototype[methodName] = null;
      }
    }
    return Constructor;
  }
  return createClass;
}
var factory_1 = factory;
if (typeof react === "undefined") {
  throw Error("create-react-class could not find the React object. If you are using script tags, make sure that React is being loaded before create-react-class.");
}
var ReactNoopUpdateQueue = new react.Component().updater;
var createReactClass = factory_1(react.Component, react.isValidElement, ReactNoopUpdateQueue);
export default createReactClass;
