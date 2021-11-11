import _react from "/-/react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/dist=es2019,mode=imports/optimized/react.js";
import _randomHex from "/-/random-hex@v1.0.2-c8HJFpt2JXcOVoOMWn1O/dist=es2019,mode=imports/optimized/random-hex.js";
import _propTypes from "/-/prop-types@v15.7.2-cMiOS1BvlP0FPwjFzCIn/dist=es2019,mode=imports/optimized/prop-types.js";
import "/-/create-react-class@v15.7.0-N1XVDJKEbjGgZJqirdPG/dist=es2019,mode=imports/optimized/create-react-class.js";
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
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
var profiles = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _slicedToArray = function() {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = void 0;
      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);
          if (i && _arr.length === i)
            break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"])
            _i["return"]();
        } finally {
          if (_d)
            throw _e;
        }
      }
      return _arr;
    }
    return function(arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();
  exports.getParticleValues = getParticleValues;
  var _randomHex2 = _interopRequireDefault(_randomHex);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  var random = Math.random, floor = Math.floor;
  function _getRandomPaletteColor(palette) {
    var i = floor(random() * palette.length);
    return palette[i];
  }
  var TYPES = {
    snow: function snow(palette) {
      var color = palette && palette.length ? _getRandomPaletteColor(palette) : "#fff";
      return {
        color,
        radius: 0.4 + random() * 2,
        opacity: 0.5 + random() * 0.5
      };
    },
    confetti: function confetti(palette) {
      var color = palette && palette.length ? _getRandomPaletteColor(palette) : _randomHex2.default.generate();
      return {
        color,
        radius: 0.2 + random() * 4,
        opacity: 1,
        deltaOpacity: 0.05 * random()
      };
    }
  };
  var VELOCITIES = {
    slow: function slow() {
      return {
        deltaX: 0.35 - random(),
        deltaY: 0.15 + random() * 1.1
      };
    },
    steady: function steady() {
      return {
        deltaX: 0.25 - random(),
        deltaY: 0.8 + random() * 0.4 + random() * 2
      };
    },
    fast: function fast() {
      return {
        deltaX: 0.25 - random(),
        deltaY: 1.1 + random() * 0.4 + random() * 2
      };
    }
  };
  function getParticleValues(_ref) {
    var _ref2 = _slicedToArray(_ref, 3), _ref2$ = _ref2[0], type = _ref2$ === void 0 ? "snow" : _ref2$, _ref2$2 = _ref2[1], velocity = _ref2$2 === void 0 ? "slow" : _ref2$2, _ref2$3 = _ref2[2], palette = _ref2$3 === void 0 ? [] : _ref2$3;
    return Object.assign({}, TYPES[type](palette), VELOCITIES[velocity]());
  }
});
var particle = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.generateParticles = generateParticles;
  function _createParticle(profile, _ref) {
    var width = _ref.width, height = _ref.height;
    var random = Math.random;
    var _getParticleValues = (0, profiles.getParticleValues)(profile), deltaX = _getParticleValues.deltaX, deltaY = _getParticleValues.deltaY, deltaOpacity = _getParticleValues.deltaOpacity, radius = _getParticleValues.radius, color = _getParticleValues.color, opacity = _getParticleValues.opacity;
    return {
      init: function init() {
        this.x = random() * width;
        this.y = random() * -height;
        this.deltaX = deltaX;
        this.deltaY = deltaY;
        this.color = color;
        this.radius = radius;
        this.opacity = opacity;
        this.deltaOpacity = deltaOpacity;
        return this;
      }
    };
  }
  function generateParticles(profile, amount, bounds) {
    var particles = [];
    while (amount--) {
      var particle2 = _createParticle(profile, bounds);
      particle2.init();
      particles.push(particle2);
    }
    return particles;
  }
});
var Canvas = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _slicedToArray = function() {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = void 0;
      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);
          if (i && _arr.length === i)
            break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"])
            _i["return"]();
        } finally {
          if (_d)
            throw _e;
        }
      }
      return _arr;
    }
    return function(arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();
  var _react2 = _interopRequireDefault(_react);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  var PROFILE = ["snow", "steady"];
  var AMOUNT = 800;
  var WIDTH = 600;
  var HEIGHT = 300;
  var STYLES = {
    backgroundColor: "#0A2933",
    position: "absolute",
    top: "0",
    left: "0"
  };
  exports.default = _react2.default.createClass({
    displayName: "Canvas",
    propTypes: {
      width: _propTypes.PropTypes.number,
      height: _propTypes.PropTypes.number,
      style: _propTypes.PropTypes.object,
      amount: _propTypes.PropTypes.number,
      profile: _propTypes.PropTypes.array
    },
    ctx: null,
    dynamicX: 1,
    draw: function draw(particles) {
      var startAngle = 0;
      var endAngle = 2 * Math.PI;
      var antiClockwise = true;
      var ctx = this.ctx, dynamicX = this.dynamicX;
      var _props = this.props, _props$width = _props.width, width = _props$width === void 0 ? WIDTH : _props$width, _props$height = _props.height, height = _props$height === void 0 ? HEIGHT : _props$height, _props$profile = _props.profile, profile = _props$profile === void 0 ? PROFILE : _props$profile;
      var _profile = _slicedToArray(profile, 1), type = _profile[0];
      ctx.clearRect(0, 0, width, height);
      particles.forEach(function(particle2) {
        var deltaX = particle2.deltaX, deltaY = particle2.deltaY, color = particle2.color, radius = particle2.radius, opacity = particle2.opacity, deltaOpacity = particle2.deltaOpacity;
        particle2.x += deltaX + 1.33 * dynamicX;
        particle2.y += deltaY;
        switch (type) {
          case "snow": {
            particle2.opacity = opacity;
            break;
          }
          case "confetti": {
            if (particle2.opacity <= 0) {
              particle2.opacity += deltaOpacity;
            }
            if (particle2.opacity > 0) {
              particle2.opacity -= deltaOpacity;
            }
            break;
          }
        }
        ctx.fillStyle = color;
        ctx.globalAlpha = particle2.opacity;
        ctx.beginPath();
        ctx.arc(particle2.x, particle2.y, radius, startAngle, endAngle, antiClockwise);
        ctx.fill();
        ctx.closePath();
        if (particle2.y > height) {
          particle2.init();
        }
      });
      this.animate(particles);
    },
    animate: function animate(particles) {
      window.requestAnimationFrame(this.draw.bind(this, particles));
    },
    handleMouseMove: function handleMouseMove(event) {
      var _props$width2 = this.props.width, width = _props$width2 === void 0 ? WIDTH : _props$width2;
      this.dynamicX = event.pageX / width;
    },
    componentDidMount: function componentDidMount() {
      var _props2 = this.props, _props2$profile = _props2.profile, profile = _props2$profile === void 0 ? PROFILE : _props2$profile, _props2$amount = _props2.amount, amount = _props2$amount === void 0 ? AMOUNT : _props2$amount, _props2$width = _props2.width, width = _props2$width === void 0 ? WIDTH : _props2$width, _props2$height = _props2.height, height = _props2$height === void 0 ? HEIGHT : _props2$height;
      var particles = (0, particle.generateParticles)(profile, amount, {width, height});
      this.animate(particles);
    },
    render: function render() {
      var _this = this;
      var _props3 = this.props, _props3$width = _props3.width, width = _props3$width === void 0 ? WIDTH : _props3$width, _props3$height = _props3.height, height = _props3$height === void 0 ? HEIGHT : _props3$height, _props3$styles = _props3.styles, styles = _props3$styles === void 0 ? STYLES : _props3$styles;
      return _react2.default.createElement("canvas", {
        id: "react-snowfetti",
        width,
        height,
        style: styles,
        ref: function ref(canvas) {
          return _this.ctx = canvas.getContext("2d");
        },
        onMouseMove: this.handleMouseMove
      }, _react2.default.createElement("h3", null, "Oh no! You do not have support for the html5 canvas API!"));
    }
  });
});
var lib = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _Canvas2 = _interopRequireDefault(Canvas);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  exports.default = _Canvas2.default;
});
var index = /* @__PURE__ */ getDefaultExportFromCjs(lib);
export default index;
