/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _keys = __webpack_require__(24);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _vue = __webpack_require__(59);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _vueRouter = __webpack_require__(61);
	
	var _vueRouter2 = _interopRequireDefault(_vueRouter);
	
	var _store = __webpack_require__(62);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _routers = __webpack_require__(64);
	
	var _routers2 = _interopRequireDefault(_routers);
	
	var _App = __webpack_require__(310);
	
	var _App2 = _interopRequireDefault(_App);
	
	var _filters = __webpack_require__(342);
	
	var _filters2 = _interopRequireDefault(_filters);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_vue2.default.use(_vueRouter2.default);
	
	//添加过滤
	(0, _keys2.default)(_filters2.default).forEach(function (k) {
	    return _vue2.default.filter(k, _filters2.default[k]);
	});
	
	// routing
	var router = new _vueRouter2.default({
	    hashbang: false,
	    history: false,
	    saveScrollPosition: true,
	    transitionOnLoad: true
	});
	
	(0, _routers2.default)(router);
	
	//注册路由切换前
	//使底部菜单栏在一级路由切换时一直保持显示
	//在二级页时隐藏
	router.beforeEach(function (transition) {
	    var toPath = transition.to.path;
	    if (toPath.replace(/[^/]/g, "").length > 1 || /auth/.test(toPath) || /scene/.test(toPath)) {
	        router.app.isShowTab = false;
	    } else {
	        router.app.isShowTab = true;
	    }
	    transition.next();
	});
	
	//注册路由切换后
	router.afterEach(function (transition) {
	    if (/Android/gi.test(navigator.userAgent)) {
	        window.addEventListener('resize', function () {
	            if (document.activeElement.tagName == 'INPUT' || document.activeElement.tagName == 'TEXTAREA') {
	                window.setTimeout(function () {
	                    document.activeElement.scrollIntoViewIfNeeded();
	                }, 0);
	            }
	        });
	    }
	});
	
	_App2.default.store = _store2.default;
	
	router.start(_App2.default, '#app');
	
	//暴漏路由调试接口
	window.router = router;

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(25), __esModule: true };

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(26);
	module.exports = __webpack_require__(46).Object.keys;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(27)
	  , $keys    = __webpack_require__(29);
	
	__webpack_require__(44)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(28);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(30)
	  , enumBugKeys = __webpack_require__(43);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(31)
	  , toIObject    = __webpack_require__(32)
	  , arrayIndexOf = __webpack_require__(35)(false)
	  , IE_PROTO     = __webpack_require__(39)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 31 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(33)
	  , defined = __webpack_require__(28);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(34);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(32)
	  , toLength  = __webpack_require__(36)
	  , toIndex   = __webpack_require__(38);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(37)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 37 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(37)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(40)('keys')
	  , uid    = __webpack_require__(42);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(41)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 42 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 43 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(45)
	  , core    = __webpack_require__(46)
	  , fails   = __webpack_require__(55);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(41)
	  , core      = __webpack_require__(46)
	  , ctx       = __webpack_require__(47)
	  , hide      = __webpack_require__(49)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 46 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.2.2'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(48);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(50)
	  , createDesc = __webpack_require__(58);
	module.exports = __webpack_require__(54) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(51)
	  , IE8_DOM_DEFINE = __webpack_require__(53)
	  , toPrimitive    = __webpack_require__(57)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(54) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(52);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(54) && !__webpack_require__(55)(function(){
	  return Object.defineProperty(__webpack_require__(56)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(55)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(52)
	  , document = __webpack_require__(41).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(52);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/*!
	 * Vue.js v1.0.20
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	'use strict';
	
	function set(obj, key, val) {
	  if (hasOwn(obj, key)) {
	    obj[key] = val;
	    return;
	  }
	  if (obj._isVue) {
	    set(obj._data, key, val);
	    return;
	  }
	  var ob = obj.__ob__;
	  if (!ob) {
	    obj[key] = val;
	    return;
	  }
	  ob.convert(key, val);
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._proxy(key);
	      vm._digest();
	    }
	  }
	  return val;
	}
	
	/**
	 * Delete a property and trigger change if necessary.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 */
	
	function del(obj, key) {
	  if (!hasOwn(obj, key)) {
	    return;
	  }
	  delete obj[key];
	  var ob = obj.__ob__;
	  if (!ob) {
	    return;
	  }
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._unproxy(key);
	      vm._digest();
	    }
	  }
	}
	
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	 * Check whether the object has the property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @return {Boolean}
	 */
	
	function hasOwn(obj, key) {
	  return hasOwnProperty.call(obj, key);
	}
	
	/**
	 * Check if an expression is a literal value.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */
	
	var literalValueRE = /^\s?(true|false|-?[\d\.]+|'[^']*'|"[^"]*")\s?$/;
	
	function isLiteral(exp) {
	  return literalValueRE.test(exp);
	}
	
	/**
	 * Check if a string starts with $ or _
	 *
	 * @param {String} str
	 * @return {Boolean}
	 */
	
	function isReserved(str) {
	  var c = (str + '').charCodeAt(0);
	  return c === 0x24 || c === 0x5F;
	}
	
	/**
	 * Guard text output, make sure undefined outputs
	 * empty string
	 *
	 * @param {*} value
	 * @return {String}
	 */
	
	function _toString(value) {
	  return value == null ? '' : value.toString();
	}
	
	/**
	 * Check and convert possible numeric strings to numbers
	 * before setting back to data
	 *
	 * @param {*} value
	 * @return {*|Number}
	 */
	
	function toNumber(value) {
	  if (typeof value !== 'string') {
	    return value;
	  } else {
	    var parsed = Number(value);
	    return isNaN(parsed) ? value : parsed;
	  }
	}
	
	/**
	 * Convert string boolean literals into real booleans.
	 *
	 * @param {*} value
	 * @return {*|Boolean}
	 */
	
	function toBoolean(value) {
	  return value === 'true' ? true : value === 'false' ? false : value;
	}
	
	/**
	 * Strip quotes from a string
	 *
	 * @param {String} str
	 * @return {String | false}
	 */
	
	function stripQuotes(str) {
	  var a = str.charCodeAt(0);
	  var b = str.charCodeAt(str.length - 1);
	  return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : str;
	}
	
	/**
	 * Camelize a hyphen-delmited string.
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var camelizeRE = /-(\w)/g;
	
	function camelize(str) {
	  return str.replace(camelizeRE, toUpper);
	}
	
	function toUpper(_, c) {
	  return c ? c.toUpperCase() : '';
	}
	
	/**
	 * Hyphenate a camelCase string.
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var hyphenateRE = /([a-z\d])([A-Z])/g;
	
	function hyphenate(str) {
	  return str.replace(hyphenateRE, '$1-$2').toLowerCase();
	}
	
	/**
	 * Converts hyphen/underscore/slash delimitered names into
	 * camelized classNames.
	 *
	 * e.g. my-component => MyComponent
	 *      some_else    => SomeElse
	 *      some/comp    => SomeComp
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var classifyRE = /(?:^|[-_\/])(\w)/g;
	
	function classify(str) {
	  return str.replace(classifyRE, toUpper);
	}
	
	/**
	 * Simple bind, faster than native
	 *
	 * @param {Function} fn
	 * @param {Object} ctx
	 * @return {Function}
	 */
	
	function bind(fn, ctx) {
	  return function (a) {
	    var l = arguments.length;
	    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
	  };
	}
	
	/**
	 * Convert an Array-like object to a real Array.
	 *
	 * @param {Array-like} list
	 * @param {Number} [start] - start index
	 * @return {Array}
	 */
	
	function toArray(list, start) {
	  start = start || 0;
	  var i = list.length - start;
	  var ret = new Array(i);
	  while (i--) {
	    ret[i] = list[i + start];
	  }
	  return ret;
	}
	
	/**
	 * Mix properties into target object.
	 *
	 * @param {Object} to
	 * @param {Object} from
	 */
	
	function extend(to, from) {
	  var keys = Object.keys(from);
	  var i = keys.length;
	  while (i--) {
	    to[keys[i]] = from[keys[i]];
	  }
	  return to;
	}
	
	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	function isObject(obj) {
	  return obj !== null && typeof obj === 'object';
	}
	
	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	var toString = Object.prototype.toString;
	var OBJECT_STRING = '[object Object]';
	
	function isPlainObject(obj) {
	  return toString.call(obj) === OBJECT_STRING;
	}
	
	/**
	 * Array type check.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	var isArray = Array.isArray;
	
	/**
	 * Define a property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @param {Boolean} [enumerable]
	 */
	
	function def(obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  });
	}
	
	/**
	 * Debounce a function so it only gets called after the
	 * input stops arriving after the given wait period.
	 *
	 * @param {Function} func
	 * @param {Number} wait
	 * @return {Function} - the debounced function
	 */
	
	function _debounce(func, wait) {
	  var timeout, args, context, timestamp, result;
	  var later = function later() {
	    var last = Date.now() - timestamp;
	    if (last < wait && last >= 0) {
	      timeout = setTimeout(later, wait - last);
	    } else {
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    }
	  };
	  return function () {
	    context = this;
	    args = arguments;
	    timestamp = Date.now();
	    if (!timeout) {
	      timeout = setTimeout(later, wait);
	    }
	    return result;
	  };
	}
	
	/**
	 * Manual indexOf because it's slightly faster than
	 * native.
	 *
	 * @param {Array} arr
	 * @param {*} obj
	 */
	
	function indexOf(arr, obj) {
	  var i = arr.length;
	  while (i--) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	}
	
	/**
	 * Make a cancellable version of an async callback.
	 *
	 * @param {Function} fn
	 * @return {Function}
	 */
	
	function cancellable(fn) {
	  var cb = function cb() {
	    if (!cb.cancelled) {
	      return fn.apply(this, arguments);
	    }
	  };
	  cb.cancel = function () {
	    cb.cancelled = true;
	  };
	  return cb;
	}
	
	/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 *
	 * @param {*} a
	 * @param {*} b
	 * @return {Boolean}
	 */
	
	function looseEqual(a, b) {
	  /* eslint-disable eqeqeq */
	  return a == b || (isObject(a) && isObject(b) ? JSON.stringify(a) === JSON.stringify(b) : false);
	  /* eslint-enable eqeqeq */
	}
	
	var hasProto = ('__proto__' in {});
	
	// Browser environment sniffing
	var inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';
	
	// detect devtools
	var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
	
	// UA sniffing for working around browser-specific quirks
	var UA = inBrowser && window.navigator.userAgent.toLowerCase();
	var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
	var isAndroid = UA && UA.indexOf('android') > 0;
	
	var transitionProp = undefined;
	var transitionEndEvent = undefined;
	var animationProp = undefined;
	var animationEndEvent = undefined;
	
	// Transition property/event sniffing
	if (inBrowser && !isIE9) {
	  var isWebkitTrans = window.ontransitionend === undefined && window.onwebkittransitionend !== undefined;
	  var isWebkitAnim = window.onanimationend === undefined && window.onwebkitanimationend !== undefined;
	  transitionProp = isWebkitTrans ? 'WebkitTransition' : 'transition';
	  transitionEndEvent = isWebkitTrans ? 'webkitTransitionEnd' : 'transitionend';
	  animationProp = isWebkitAnim ? 'WebkitAnimation' : 'animation';
	  animationEndEvent = isWebkitAnim ? 'webkitAnimationEnd' : 'animationend';
	}
	
	/**
	 * Defer a task to execute it asynchronously. Ideally this
	 * should be executed as a microtask, so we leverage
	 * MutationObserver if it's available, and fallback to
	 * setTimeout(0).
	 *
	 * @param {Function} cb
	 * @param {Object} ctx
	 */
	
	var nextTick = (function () {
	  var callbacks = [];
	  var pending = false;
	  var timerFunc;
	  function nextTickHandler() {
	    pending = false;
	    var copies = callbacks.slice(0);
	    callbacks = [];
	    for (var i = 0; i < copies.length; i++) {
	      copies[i]();
	    }
	  }
	
	  /* istanbul ignore if */
	  if (typeof MutationObserver !== 'undefined') {
	    var counter = 1;
	    var observer = new MutationObserver(nextTickHandler);
	    var textNode = document.createTextNode(counter);
	    observer.observe(textNode, {
	      characterData: true
	    });
	    timerFunc = function () {
	      counter = (counter + 1) % 2;
	      textNode.data = counter;
	    };
	  } else {
	    // webpack attempts to inject a shim for setImmediate
	    // if it is used as a global, so we have to work around that to
	    // avoid bundling unnecessary code.
	    var context = inBrowser ? window : typeof global !== 'undefined' ? global : {};
	    timerFunc = context.setImmediate || setTimeout;
	  }
	  return function (cb, ctx) {
	    var func = ctx ? function () {
	      cb.call(ctx);
	    } : cb;
	    callbacks.push(func);
	    if (pending) return;
	    pending = true;
	    timerFunc(nextTickHandler, 0);
	  };
	})();
	
	function Cache(limit) {
	  this.size = 0;
	  this.limit = limit;
	  this.head = this.tail = undefined;
	  this._keymap = Object.create(null);
	}
	
	var p = Cache.prototype;
	
	/**
	 * Put <value> into the cache associated with <key>.
	 * Returns the entry which was removed to make room for
	 * the new entry. Otherwise undefined is returned.
	 * (i.e. if there was enough room already).
	 *
	 * @param {String} key
	 * @param {*} value
	 * @return {Entry|undefined}
	 */
	
	p.put = function (key, value) {
	  var removed;
	  if (this.size === this.limit) {
	    removed = this.shift();
	  }
	
	  var entry = this.get(key, true);
	  if (!entry) {
	    entry = {
	      key: key
	    };
	    this._keymap[key] = entry;
	    if (this.tail) {
	      this.tail.newer = entry;
	      entry.older = this.tail;
	    } else {
	      this.head = entry;
	    }
	    this.tail = entry;
	    this.size++;
	  }
	  entry.value = value;
	
	  return removed;
	};
	
	/**
	 * Purge the least recently used (oldest) entry from the
	 * cache. Returns the removed entry or undefined if the
	 * cache was empty.
	 */
	
	p.shift = function () {
	  var entry = this.head;
	  if (entry) {
	    this.head = this.head.newer;
	    this.head.older = undefined;
	    entry.newer = entry.older = undefined;
	    this._keymap[entry.key] = undefined;
	    this.size--;
	  }
	  return entry;
	};
	
	/**
	 * Get and register recent use of <key>. Returns the value
	 * associated with <key> or undefined if not in cache.
	 *
	 * @param {String} key
	 * @param {Boolean} returnEntry
	 * @return {Entry|*}
	 */
	
	p.get = function (key, returnEntry) {
	  var entry = this._keymap[key];
	  if (entry === undefined) return;
	  if (entry === this.tail) {
	    return returnEntry ? entry : entry.value;
	  }
	  // HEAD--------------TAIL
	  //   <.older   .newer>
	  //  <--- add direction --
	  //   A  B  C  <D>  E
	  if (entry.newer) {
	    if (entry === this.head) {
	      this.head = entry.newer;
	    }
	    entry.newer.older = entry.older; // C <-- E.
	  }
	  if (entry.older) {
	    entry.older.newer = entry.newer; // C. --> E
	  }
	  entry.newer = undefined; // D --x
	  entry.older = this.tail; // D. --> E
	  if (this.tail) {
	    this.tail.newer = entry; // E. <-- D
	  }
	  this.tail = entry;
	  return returnEntry ? entry : entry.value;
	};
	
	var cache$1 = new Cache(1000);
	var filterTokenRE = /[^\s'"]+|'[^']*'|"[^"]*"/g;
	var reservedArgRE = /^in$|^-?\d+/;
	
	/**
	 * Parser state
	 */
	
	var str;
	var dir;
	var c;
	var prev;
	var i;
	var l;
	var lastFilterIndex;
	var inSingle;
	var inDouble;
	var curly;
	var square;
	var paren;
	/**
	 * Push a filter to the current directive object
	 */
	
	function pushFilter() {
	  var exp = str.slice(lastFilterIndex, i).trim();
	  var filter;
	  if (exp) {
	    filter = {};
	    var tokens = exp.match(filterTokenRE);
	    filter.name = tokens[0];
	    if (tokens.length > 1) {
	      filter.args = tokens.slice(1).map(processFilterArg);
	    }
	  }
	  if (filter) {
	    (dir.filters = dir.filters || []).push(filter);
	  }
	  lastFilterIndex = i + 1;
	}
	
	/**
	 * Check if an argument is dynamic and strip quotes.
	 *
	 * @param {String} arg
	 * @return {Object}
	 */
	
	function processFilterArg(arg) {
	  if (reservedArgRE.test(arg)) {
	    return {
	      value: toNumber(arg),
	      dynamic: false
	    };
	  } else {
	    var stripped = stripQuotes(arg);
	    var dynamic = stripped === arg;
	    return {
	      value: dynamic ? arg : stripped,
	      dynamic: dynamic
	    };
	  }
	}
	
	/**
	 * Parse a directive value and extract the expression
	 * and its filters into a descriptor.
	 *
	 * Example:
	 *
	 * "a + 1 | uppercase" will yield:
	 * {
	 *   expression: 'a + 1',
	 *   filters: [
	 *     { name: 'uppercase', args: null }
	 *   ]
	 * }
	 *
	 * @param {String} s
	 * @return {Object}
	 */
	
	function parseDirective(s) {
	  var hit = cache$1.get(s);
	  if (hit) {
	    return hit;
	  }
	
	  // reset parser state
	  str = s;
	  inSingle = inDouble = false;
	  curly = square = paren = 0;
	  lastFilterIndex = 0;
	  dir = {};
	
	  for (i = 0, l = str.length; i < l; i++) {
	    prev = c;
	    c = str.charCodeAt(i);
	    if (inSingle) {
	      // check single quote
	      if (c === 0x27 && prev !== 0x5C) inSingle = !inSingle;
	    } else if (inDouble) {
	      // check double quote
	      if (c === 0x22 && prev !== 0x5C) inDouble = !inDouble;
	    } else if (c === 0x7C && // pipe
	    str.charCodeAt(i + 1) !== 0x7C && str.charCodeAt(i - 1) !== 0x7C) {
	      if (dir.expression == null) {
	        // first filter, end of expression
	        lastFilterIndex = i + 1;
	        dir.expression = str.slice(0, i).trim();
	      } else {
	        // already has filter
	        pushFilter();
	      }
	    } else {
	      switch (c) {
	        case 0x22:
	          inDouble = true;break; // "
	        case 0x27:
	          inSingle = true;break; // '
	        case 0x28:
	          paren++;break; // (
	        case 0x29:
	          paren--;break; // )
	        case 0x5B:
	          square++;break; // [
	        case 0x5D:
	          square--;break; // ]
	        case 0x7B:
	          curly++;break; // {
	        case 0x7D:
	          curly--;break; // }
	      }
	    }
	  }
	
	  if (dir.expression == null) {
	    dir.expression = str.slice(0, i).trim();
	  } else if (lastFilterIndex !== 0) {
	    pushFilter();
	  }
	
	  cache$1.put(s, dir);
	  return dir;
	}
	
	var directive = Object.freeze({
	  parseDirective: parseDirective
	});
	
	var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	var cache = undefined;
	var tagRE = undefined;
	var htmlRE = undefined;
	/**
	 * Escape a string so it can be used in a RegExp
	 * constructor.
	 *
	 * @param {String} str
	 */
	
	function escapeRegex(str) {
	  return str.replace(regexEscapeRE, '\\$&');
	}
	
	function compileRegex() {
	  var open = escapeRegex(config.delimiters[0]);
	  var close = escapeRegex(config.delimiters[1]);
	  var unsafeOpen = escapeRegex(config.unsafeDelimiters[0]);
	  var unsafeClose = escapeRegex(config.unsafeDelimiters[1]);
	  tagRE = new RegExp(unsafeOpen + '(.+?)' + unsafeClose + '|' + open + '(.+?)' + close, 'g');
	  htmlRE = new RegExp('^' + unsafeOpen + '.*' + unsafeClose + '$');
	  // reset cache
	  cache = new Cache(1000);
	}
	
	/**
	 * Parse a template text string into an array of tokens.
	 *
	 * @param {String} text
	 * @return {Array<Object> | null}
	 *               - {String} type
	 *               - {String} value
	 *               - {Boolean} [html]
	 *               - {Boolean} [oneTime]
	 */
	
	function parseText(text) {
	  if (!cache) {
	    compileRegex();
	  }
	  var hit = cache.get(text);
	  if (hit) {
	    return hit;
	  }
	  text = text.replace(/\n/g, '');
	  if (!tagRE.test(text)) {
	    return null;
	  }
	  var tokens = [];
	  var lastIndex = tagRE.lastIndex = 0;
	  var match, index, html, value, first, oneTime;
	  /* eslint-disable no-cond-assign */
	  while (match = tagRE.exec(text)) {
	    /* eslint-enable no-cond-assign */
	    index = match.index;
	    // push text token
	    if (index > lastIndex) {
	      tokens.push({
	        value: text.slice(lastIndex, index)
	      });
	    }
	    // tag token
	    html = htmlRE.test(match[0]);
	    value = html ? match[1] : match[2];
	    first = value.charCodeAt(0);
	    oneTime = first === 42; // *
	    value = oneTime ? value.slice(1) : value;
	    tokens.push({
	      tag: true,
	      value: value.trim(),
	      html: html,
	      oneTime: oneTime
	    });
	    lastIndex = index + match[0].length;
	  }
	  if (lastIndex < text.length) {
	    tokens.push({
	      value: text.slice(lastIndex)
	    });
	  }
	  cache.put(text, tokens);
	  return tokens;
	}
	
	/**
	 * Format a list of tokens into an expression.
	 * e.g. tokens parsed from 'a {{b}} c' can be serialized
	 * into one single expression as '"a " + b + " c"'.
	 *
	 * @param {Array} tokens
	 * @param {Vue} [vm]
	 * @return {String}
	 */
	
	function tokensToExp(tokens, vm) {
	  if (tokens.length > 1) {
	    return tokens.map(function (token) {
	      return formatToken(token, vm);
	    }).join('+');
	  } else {
	    return formatToken(tokens[0], vm, true);
	  }
	}
	
	/**
	 * Format a single token.
	 *
	 * @param {Object} token
	 * @param {Vue} [vm]
	 * @param {Boolean} [single]
	 * @return {String}
	 */
	
	function formatToken(token, vm, single) {
	  return token.tag ? token.oneTime && vm ? '"' + vm.$eval(token.value) + '"' : inlineFilters(token.value, single) : '"' + token.value + '"';
	}
	
	/**
	 * For an attribute with multiple interpolation tags,
	 * e.g. attr="some-{{thing | filter}}", in order to combine
	 * the whole thing into a single watchable expression, we
	 * have to inline those filters. This function does exactly
	 * that. This is a bit hacky but it avoids heavy changes
	 * to directive parser and watcher mechanism.
	 *
	 * @param {String} exp
	 * @param {Boolean} single
	 * @return {String}
	 */
	
	var filterRE = /[^|]\|[^|]/;
	function inlineFilters(exp, single) {
	  if (!filterRE.test(exp)) {
	    return single ? exp : '(' + exp + ')';
	  } else {
	    var dir = parseDirective(exp);
	    if (!dir.filters) {
	      return '(' + exp + ')';
	    } else {
	      return 'this._applyFilters(' + dir.expression + // value
	      ',null,' + // oldValue (null for read)
	      JSON.stringify(dir.filters) + // filter descriptors
	      ',false)'; // write?
	    }
	  }
	}
	
	var text = Object.freeze({
	  compileRegex: compileRegex,
	  parseText: parseText,
	  tokensToExp: tokensToExp
	});
	
	var delimiters = ['{{', '}}'];
	var unsafeDelimiters = ['{{{', '}}}'];
	
	var config = Object.defineProperties({
	
	  /**
	   * Whether to print debug messages.
	   * Also enables stack trace for warnings.
	   *
	   * @type {Boolean}
	   */
	
	  debug: false,
	
	  /**
	   * Whether to suppress warnings.
	   *
	   * @type {Boolean}
	   */
	
	  silent: false,
	
	  /**
	   * Whether to use async rendering.
	   */
	
	  async: true,
	
	  /**
	   * Whether to warn against errors caught when evaluating
	   * expressions.
	   */
	
	  warnExpressionErrors: true,
	
	  /**
	   * Whether to allow devtools inspection.
	   * Disabled by default in production builds.
	   */
	
	  devtools: process.env.NODE_ENV !== 'production',
	
	  /**
	   * Internal flag to indicate the delimiters have been
	   * changed.
	   *
	   * @type {Boolean}
	   */
	
	  _delimitersChanged: true,
	
	  /**
	   * List of asset types that a component can own.
	   *
	   * @type {Array}
	   */
	
	  _assetTypes: ['component', 'directive', 'elementDirective', 'filter', 'transition', 'partial'],
	
	  /**
	   * prop binding modes
	   */
	
	  _propBindingModes: {
	    ONE_WAY: 0,
	    TWO_WAY: 1,
	    ONE_TIME: 2
	  },
	
	  /**
	   * Max circular updates allowed in a batcher flush cycle.
	   */
	
	  _maxUpdateCount: 100
	
	}, {
	  delimiters: { /**
	                 * Interpolation delimiters. Changing these would trigger
	                 * the text parser to re-compile the regular expressions.
	                 *
	                 * @type {Array<String>}
	                 */
	
	    get: function get() {
	      return delimiters;
	    },
	    set: function set(val) {
	      delimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  },
	  unsafeDelimiters: {
	    get: function get() {
	      return unsafeDelimiters;
	    },
	    set: function set(val) {
	      unsafeDelimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  }
	});
	
	var warn = undefined;
	
	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var hasConsole = typeof console !== 'undefined';
	    warn = function (msg, e) {
	      if (hasConsole && (!config.silent || config.debug)) {
	        console.warn('[Vue warn]: ' + msg);
	        /* istanbul ignore if */
	        if (config.debug) {
	          if (e) {
	            throw e;
	          } else {
	            console.warn(new Error('Warning Stack Trace').stack);
	          }
	        }
	      }
	    };
	  })();
	}
	
	/**
	 * Append with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function appendWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    target.appendChild(el);
	  }, vm, cb);
	}
	
	/**
	 * InsertBefore with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function beforeWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    before(el, target);
	  }, vm, cb);
	}
	
	/**
	 * Remove with transition.
	 *
	 * @param {Element} el
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function removeWithTransition(el, vm, cb) {
	  applyTransition(el, -1, function () {
	    remove(el);
	  }, vm, cb);
	}
	
	/**
	 * Apply transitions with an operation callback.
	 *
	 * @param {Element} el
	 * @param {Number} direction
	 *                  1: enter
	 *                 -1: leave
	 * @param {Function} op - the actual DOM operation
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function applyTransition(el, direction, op, vm, cb) {
	  var transition = el.__v_trans;
	  if (!transition ||
	  // skip if there are no js hooks and CSS transition is
	  // not supported
	  !transition.hooks && !transitionEndEvent ||
	  // skip transitions for initial compile
	  !vm._isCompiled ||
	  // if the vm is being manipulated by a parent directive
	  // during the parent's compilation phase, skip the
	  // animation.
	  vm.$parent && !vm.$parent._isCompiled) {
	    op();
	    if (cb) cb();
	    return;
	  }
	  var action = direction > 0 ? 'enter' : 'leave';
	  transition[action](op, cb);
	}
	
	var transition = Object.freeze({
	  appendWithTransition: appendWithTransition,
	  beforeWithTransition: beforeWithTransition,
	  removeWithTransition: removeWithTransition,
	  applyTransition: applyTransition
	});
	
	/**
	 * Query an element selector if it's not an element already.
	 *
	 * @param {String|Element} el
	 * @return {Element}
	 */
	
	function query(el) {
	  if (typeof el === 'string') {
	    var selector = el;
	    el = document.querySelector(el);
	    if (!el) {
	      process.env.NODE_ENV !== 'production' && warn('Cannot find element: ' + selector);
	    }
	  }
	  return el;
	}
	
	/**
	 * Check if a node is in the document.
	 * Note: document.documentElement.contains should work here
	 * but always returns false for comment nodes in phantomjs,
	 * making unit tests difficult. This is fixed by doing the
	 * contains() check on the node's parentNode instead of
	 * the node itself.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */
	
	function inDoc(node) {
	  var doc = document.documentElement;
	  var parent = node && node.parentNode;
	  return doc === node || doc === parent || !!(parent && parent.nodeType === 1 && doc.contains(parent));
	}
	
	/**
	 * Get and remove an attribute from a node.
	 *
	 * @param {Node} node
	 * @param {String} _attr
	 */
	
	function getAttr(node, _attr) {
	  var val = node.getAttribute(_attr);
	  if (val !== null) {
	    node.removeAttribute(_attr);
	  }
	  return val;
	}
	
	/**
	 * Get an attribute with colon or v-bind: prefix.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {String|null}
	 */
	
	function getBindAttr(node, name) {
	  var val = getAttr(node, ':' + name);
	  if (val === null) {
	    val = getAttr(node, 'v-bind:' + name);
	  }
	  return val;
	}
	
	/**
	 * Check the presence of a bind attribute.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {Boolean}
	 */
	
	function hasBindAttr(node, name) {
	  return node.hasAttribute(name) || node.hasAttribute(':' + name) || node.hasAttribute('v-bind:' + name);
	}
	
	/**
	 * Insert el before target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	function before(el, target) {
	  target.parentNode.insertBefore(el, target);
	}
	
	/**
	 * Insert el after target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	function after(el, target) {
	  if (target.nextSibling) {
	    before(el, target.nextSibling);
	  } else {
	    target.parentNode.appendChild(el);
	  }
	}
	
	/**
	 * Remove el from DOM
	 *
	 * @param {Element} el
	 */
	
	function remove(el) {
	  el.parentNode.removeChild(el);
	}
	
	/**
	 * Prepend el to target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	function prepend(el, target) {
	  if (target.firstChild) {
	    before(el, target.firstChild);
	  } else {
	    target.appendChild(el);
	  }
	}
	
	/**
	 * Replace target with el
	 *
	 * @param {Element} target
	 * @param {Element} el
	 */
	
	function replace(target, el) {
	  var parent = target.parentNode;
	  if (parent) {
	    parent.replaceChild(el, target);
	  }
	}
	
	/**
	 * Add event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 * @param {Boolean} [useCapture]
	 */
	
	function on(el, event, cb, useCapture) {
	  el.addEventListener(event, cb, useCapture);
	}
	
	/**
	 * Remove event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 */
	
	function off(el, event, cb) {
	  el.removeEventListener(event, cb);
	}
	
	/**
	 * For IE9 compat: when both class and :class are present
	 * getAttribute('class') returns wrong value...
	 *
	 * @param {Element} el
	 * @return {String}
	 */
	
	function getClass(el) {
	  var classname = el.className;
	  if (typeof classname === 'object') {
	    classname = classname.baseVal || '';
	  }
	  return classname;
	}
	
	/**
	 * In IE9, setAttribute('class') will result in empty class
	 * if the element also has the :class attribute; However in
	 * PhantomJS, setting `className` does not work on SVG elements...
	 * So we have to do a conditional check here.
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */
	
	function setClass(el, cls) {
	  /* istanbul ignore if */
	  if (isIE9 && !/svg$/.test(el.namespaceURI)) {
	    el.className = cls;
	  } else {
	    el.setAttribute('class', cls);
	  }
	}
	
	/**
	 * Add class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */
	
	function addClass(el, cls) {
	  if (el.classList) {
	    el.classList.add(cls);
	  } else {
	    var cur = ' ' + getClass(el) + ' ';
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      setClass(el, (cur + cls).trim());
	    }
	  }
	}
	
	/**
	 * Remove class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */
	
	function removeClass(el, cls) {
	  if (el.classList) {
	    el.classList.remove(cls);
	  } else {
	    var cur = ' ' + getClass(el) + ' ';
	    var tar = ' ' + cls + ' ';
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ');
	    }
	    setClass(el, cur.trim());
	  }
	  if (!el.className) {
	    el.removeAttribute('class');
	  }
	}
	
	/**
	 * Extract raw content inside an element into a temporary
	 * container div
	 *
	 * @param {Element} el
	 * @param {Boolean} asFragment
	 * @return {Element|DocumentFragment}
	 */
	
	function extractContent(el, asFragment) {
	  var child;
	  var rawContent;
	  /* istanbul ignore if */
	  if (isTemplate(el) && isFragment(el.content)) {
	    el = el.content;
	  }
	  if (el.hasChildNodes()) {
	    trimNode(el);
	    rawContent = asFragment ? document.createDocumentFragment() : document.createElement('div');
	    /* eslint-disable no-cond-assign */
	    while (child = el.firstChild) {
	      /* eslint-enable no-cond-assign */
	      rawContent.appendChild(child);
	    }
	  }
	  return rawContent;
	}
	
	/**
	 * Trim possible empty head/tail text and comment
	 * nodes inside a parent.
	 *
	 * @param {Node} node
	 */
	
	function trimNode(node) {
	  var child;
	  /* eslint-disable no-sequences */
	  while ((child = node.firstChild, isTrimmable(child))) {
	    node.removeChild(child);
	  }
	  while ((child = node.lastChild, isTrimmable(child))) {
	    node.removeChild(child);
	  }
	  /* eslint-enable no-sequences */
	}
	
	function isTrimmable(node) {
	  return node && (node.nodeType === 3 && !node.data.trim() || node.nodeType === 8);
	}
	
	/**
	 * Check if an element is a template tag.
	 * Note if the template appears inside an SVG its tagName
	 * will be in lowercase.
	 *
	 * @param {Element} el
	 */
	
	function isTemplate(el) {
	  return el.tagName && el.tagName.toLowerCase() === 'template';
	}
	
	/**
	 * Create an "anchor" for performing dom insertion/removals.
	 * This is used in a number of scenarios:
	 * - fragment instance
	 * - v-html
	 * - v-if
	 * - v-for
	 * - component
	 *
	 * @param {String} content
	 * @param {Boolean} persist - IE trashes empty textNodes on
	 *                            cloneNode(true), so in certain
	 *                            cases the anchor needs to be
	 *                            non-empty to be persisted in
	 *                            templates.
	 * @return {Comment|Text}
	 */
	
	function createAnchor(content, persist) {
	  var anchor = config.debug ? document.createComment(content) : document.createTextNode(persist ? ' ' : '');
	  anchor.__v_anchor = true;
	  return anchor;
	}
	
	/**
	 * Find a component ref attribute that starts with $.
	 *
	 * @param {Element} node
	 * @return {String|undefined}
	 */
	
	var refRE = /^v-ref:/;
	
	function findRef(node) {
	  if (node.hasAttributes()) {
	    var attrs = node.attributes;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      var name = attrs[i].name;
	      if (refRE.test(name)) {
	        return camelize(name.replace(refRE, ''));
	      }
	    }
	  }
	}
	
	/**
	 * Map a function to a range of nodes .
	 *
	 * @param {Node} node
	 * @param {Node} end
	 * @param {Function} op
	 */
	
	function mapNodeRange(node, end, op) {
	  var next;
	  while (node !== end) {
	    next = node.nextSibling;
	    op(node);
	    node = next;
	  }
	  op(end);
	}
	
	/**
	 * Remove a range of nodes with transition, store
	 * the nodes in a fragment with correct ordering,
	 * and call callback when done.
	 *
	 * @param {Node} start
	 * @param {Node} end
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Function} cb
	 */
	
	function removeNodeRange(start, end, vm, frag, cb) {
	  var done = false;
	  var removed = 0;
	  var nodes = [];
	  mapNodeRange(start, end, function (node) {
	    if (node === end) done = true;
	    nodes.push(node);
	    removeWithTransition(node, vm, onRemoved);
	  });
	  function onRemoved() {
	    removed++;
	    if (done && removed >= nodes.length) {
	      for (var i = 0; i < nodes.length; i++) {
	        frag.appendChild(nodes[i]);
	      }
	      cb && cb();
	    }
	  }
	}
	
	/**
	 * Check if a node is a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */
	
	function isFragment(node) {
	  return node && node.nodeType === 11;
	}
	
	/**
	 * Get outerHTML of elements, taking care
	 * of SVG elements in IE as well.
	 *
	 * @param {Element} el
	 * @return {String}
	 */
	
	function getOuterHTML(el) {
	  if (el.outerHTML) {
	    return el.outerHTML;
	  } else {
	    var container = document.createElement('div');
	    container.appendChild(el.cloneNode(true));
	    return container.innerHTML;
	  }
	}
	
	var commonTagRE = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/i;
	var reservedTagRE = /^(slot|partial|component)$/i;
	
	var isUnknownElement = undefined;
	if (process.env.NODE_ENV !== 'production') {
	  isUnknownElement = function (el, tag) {
	    if (tag.indexOf('-') > -1) {
	      // http://stackoverflow.com/a/28210364/1070244
	      return el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
	    } else {
	      return (/HTMLUnknownElement/.test(el.toString()) &&
	        // Chrome returns unknown for several HTML5 elements.
	        // https://code.google.com/p/chromium/issues/detail?id=540526
	        !/^(data|time|rtc|rb)$/.test(tag)
	      );
	    }
	  };
	}
	
	/**
	 * Check if an element is a component, if yes return its
	 * component id.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */
	
	function checkComponentAttr(el, options) {
	  var tag = el.tagName.toLowerCase();
	  var hasAttrs = el.hasAttributes();
	  if (!commonTagRE.test(tag) && !reservedTagRE.test(tag)) {
	    if (resolveAsset(options, 'components', tag)) {
	      return { id: tag };
	    } else {
	      var is = hasAttrs && getIsBinding(el);
	      if (is) {
	        return is;
	      } else if (process.env.NODE_ENV !== 'production') {
	        var expectedTag = options._componentNameMap && options._componentNameMap[tag];
	        if (expectedTag) {
	          warn('Unknown custom element: <' + tag + '> - ' + 'did you mean <' + expectedTag + '>? ' + 'HTML is case-insensitive, remember to use kebab-case in templates.');
	        } else if (isUnknownElement(el, tag)) {
	          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.');
	        }
	      }
	    }
	  } else if (hasAttrs) {
	    return getIsBinding(el);
	  }
	}
	
	/**
	 * Get "is" binding from an element.
	 *
	 * @param {Element} el
	 * @return {Object|undefined}
	 */
	
	function getIsBinding(el) {
	  // dynamic syntax
	  var exp = getAttr(el, 'is');
	  if (exp != null) {
	    return { id: exp };
	  } else {
	    exp = getBindAttr(el, 'is');
	    if (exp != null) {
	      return { id: exp, dynamic: true };
	    }
	  }
	}
	
	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 *
	 * All strategy functions follow the same signature:
	 *
	 * @param {*} parentVal
	 * @param {*} childVal
	 * @param {Vue} [vm]
	 */
	
	var strats = config.optionMergeStrategies = Object.create(null);
	
	/**
	 * Helper that recursively merges two data objects together.
	 */
	
	function mergeData(to, from) {
	  var key, toVal, fromVal;
	  for (key in from) {
	    toVal = to[key];
	    fromVal = from[key];
	    if (!hasOwn(to, key)) {
	      set(to, key, fromVal);
	    } else if (isObject(toVal) && isObject(fromVal)) {
	      mergeData(toVal, fromVal);
	    }
	  }
	  return to;
	}
	
	/**
	 * Data
	 */
	
	strats.data = function (parentVal, childVal, vm) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal;
	    }
	    if (typeof childVal !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.');
	      return parentVal;
	    }
	    if (!parentVal) {
	      return childVal;
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn() {
	      return mergeData(childVal.call(this), parentVal.call(this));
	    };
	  } else if (parentVal || childVal) {
	    return function mergedInstanceDataFn() {
	      // instance merge
	      var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
	      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
	      if (instanceData) {
	        return mergeData(instanceData, defaultData);
	      } else {
	        return defaultData;
	      }
	    };
	  }
	};
	
	/**
	 * El
	 */
	
	strats.el = function (parentVal, childVal, vm) {
	  if (!vm && childVal && typeof childVal !== 'function') {
	    process.env.NODE_ENV !== 'production' && warn('The "el" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.');
	    return;
	  }
	  var ret = childVal || parentVal;
	  // invoke the element factory if this is instance merge
	  return vm && typeof ret === 'function' ? ret.call(vm) : ret;
	};
	
	/**
	 * Hooks and param attributes are merged as arrays.
	 */
	
	strats.init = strats.created = strats.ready = strats.attached = strats.detached = strats.beforeCompile = strats.compiled = strats.beforeDestroy = strats.destroyed = strats.activate = function (parentVal, childVal) {
	  return childVal ? parentVal ? parentVal.concat(childVal) : isArray(childVal) ? childVal : [childVal] : parentVal;
	};
	
	/**
	 * 0.11 deprecation warning
	 */
	
	strats.paramAttributes = function () {
	  /* istanbul ignore next */
	  process.env.NODE_ENV !== 'production' && warn('"paramAttributes" option has been deprecated in 0.12. ' + 'Use "props" instead.');
	};
	
	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */
	
	function mergeAssets(parentVal, childVal) {
	  var res = Object.create(parentVal);
	  return childVal ? extend(res, guardArrayAssets(childVal)) : res;
	}
	
	config._assetTypes.forEach(function (type) {
	  strats[type + 's'] = mergeAssets;
	});
	
	/**
	 * Events & Watchers.
	 *
	 * Events & watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */
	
	strats.watch = strats.events = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = {};
	  extend(ret, parentVal);
	  for (var key in childVal) {
	    var parent = ret[key];
	    var child = childVal[key];
	    if (parent && !isArray(parent)) {
	      parent = [parent];
	    }
	    ret[key] = parent ? parent.concat(child) : [child];
	  }
	  return ret;
	};
	
	/**
	 * Other object hashes.
	 */
	
	strats.props = strats.methods = strats.computed = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = Object.create(null);
	  extend(ret, parentVal);
	  extend(ret, childVal);
	  return ret;
	};
	
	/**
	 * Default strategy.
	 */
	
	var defaultStrat = function defaultStrat(parentVal, childVal) {
	  return childVal === undefined ? parentVal : childVal;
	};
	
	/**
	 * Make sure component options get converted to actual
	 * constructors.
	 *
	 * @param {Object} options
	 */
	
	function guardComponents(options) {
	  if (options.components) {
	    var components = options.components = guardArrayAssets(options.components);
	    var ids = Object.keys(components);
	    var def;
	    if (process.env.NODE_ENV !== 'production') {
	      var map = options._componentNameMap = {};
	    }
	    for (var i = 0, l = ids.length; i < l; i++) {
	      var key = ids[i];
	      if (commonTagRE.test(key) || reservedTagRE.test(key)) {
	        process.env.NODE_ENV !== 'production' && warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);
	        continue;
	      }
	      // record a all lowercase <-> kebab-case mapping for
	      // possible custom element case error warning
	      if (process.env.NODE_ENV !== 'production') {
	        map[key.replace(/-/g, '').toLowerCase()] = hyphenate(key);
	      }
	      def = components[key];
	      if (isPlainObject(def)) {
	        components[key] = Vue.extend(def);
	      }
	    }
	  }
	}
	
	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 *
	 * @param {Object} options
	 */
	
	function guardProps(options) {
	  var props = options.props;
	  var i, val;
	  if (isArray(props)) {
	    options.props = {};
	    i = props.length;
	    while (i--) {
	      val = props[i];
	      if (typeof val === 'string') {
	        options.props[val] = null;
	      } else if (val.name) {
	        options.props[val.name] = val;
	      }
	    }
	  } else if (isPlainObject(props)) {
	    var keys = Object.keys(props);
	    i = keys.length;
	    while (i--) {
	      val = props[keys[i]];
	      if (typeof val === 'function') {
	        props[keys[i]] = { type: val };
	      }
	    }
	  }
	}
	
	/**
	 * Guard an Array-format assets option and converted it
	 * into the key-value Object format.
	 *
	 * @param {Object|Array} assets
	 * @return {Object}
	 */
	
	function guardArrayAssets(assets) {
	  if (isArray(assets)) {
	    var res = {};
	    var i = assets.length;
	    var asset;
	    while (i--) {
	      asset = assets[i];
	      var id = typeof asset === 'function' ? asset.options && asset.options.name || asset.id : asset.name || asset.id;
	      if (!id) {
	        process.env.NODE_ENV !== 'production' && warn('Array-syntax assets must provide a "name" or "id" field.');
	      } else {
	        res[id] = asset;
	      }
	    }
	    return res;
	  }
	  return assets;
	}
	
	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 *
	 * @param {Object} parent
	 * @param {Object} child
	 * @param {Vue} [vm] - if vm is present, indicates this is
	 *                     an instantiation merge.
	 */
	
	function mergeOptions(parent, child, vm) {
	  guardComponents(child);
	  guardProps(child);
	  var options = {};
	  var key;
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      parent = mergeOptions(parent, child.mixins[i], vm);
	    }
	  }
	  for (key in parent) {
	    mergeField(key);
	  }
	  for (key in child) {
	    if (!hasOwn(parent, key)) {
	      mergeField(key);
	    }
	  }
	  function mergeField(key) {
	    var strat = strats[key] || defaultStrat;
	    options[key] = strat(parent[key], child[key], vm, key);
	  }
	  return options;
	}
	
	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 *
	 * @param {Object} options
	 * @param {String} type
	 * @param {String} id
	 * @return {Object|Function}
	 */
	
	function resolveAsset(options, type, id) {
	  /* istanbul ignore if */
	  if (typeof id !== 'string') {
	    return;
	  }
	  var assets = options[type];
	  var camelizedId;
	  return assets[id] ||
	  // camelCase ID
	  assets[camelizedId = camelize(id)] ||
	  // Pascal Case ID
	  assets[camelizedId.charAt(0).toUpperCase() + camelizedId.slice(1)];
	}
	
	/**
	 * Assert asset exists
	 */
	
	function assertAsset(val, type, id) {
	  if (!val) {
	    process.env.NODE_ENV !== 'production' && warn('Failed to resolve ' + type + ': ' + id);
	  }
	}
	
	var uid$1 = 0;
	
	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 *
	 * @constructor
	 */
	function Dep() {
	  this.id = uid$1++;
	  this.subs = [];
	}
	
	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null;
	
	/**
	 * Add a directive subscriber.
	 *
	 * @param {Directive} sub
	 */
	
	Dep.prototype.addSub = function (sub) {
	  this.subs.push(sub);
	};
	
	/**
	 * Remove a directive subscriber.
	 *
	 * @param {Directive} sub
	 */
	
	Dep.prototype.removeSub = function (sub) {
	  this.subs.$remove(sub);
	};
	
	/**
	 * Add self as a dependency to the target watcher.
	 */
	
	Dep.prototype.depend = function () {
	  Dep.target.addDep(this);
	};
	
	/**
	 * Notify all subscribers of a new value.
	 */
	
	Dep.prototype.notify = function () {
	  // stablize the subscriber list first
	  var subs = toArray(this.subs);
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update();
	  }
	};
	
	var arrayProto = Array.prototype;
	var arrayMethods = Object.create(arrayProto)
	
	/**
	 * Intercept mutating methods and emit events
	 */
	
	;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method];
	  def(arrayMethods, method, function mutator() {
	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length;
	    var args = new Array(i);
	    while (i--) {
	      args[i] = arguments[i];
	    }
	    var result = original.apply(this, args);
	    var ob = this.__ob__;
	    var inserted;
	    switch (method) {
	      case 'push':
	        inserted = args;
	        break;
	      case 'unshift':
	        inserted = args;
	        break;
	      case 'splice':
	        inserted = args.slice(2);
	        break;
	    }
	    if (inserted) ob.observeArray(inserted);
	    // notify change
	    ob.dep.notify();
	    return result;
	  });
	});
	
	/**
	 * Swap the element at the given index with a new value
	 * and emits corresponding event.
	 *
	 * @param {Number} index
	 * @param {*} val
	 * @return {*} - replaced element
	 */
	
	def(arrayProto, '$set', function $set(index, val) {
	  if (index >= this.length) {
	    this.length = Number(index) + 1;
	  }
	  return this.splice(index, 1, val)[0];
	});
	
	/**
	 * Convenience method to remove the element at given index.
	 *
	 * @param {Number} index
	 * @param {*} val
	 */
	
	def(arrayProto, '$remove', function $remove(item) {
	  /* istanbul ignore if */
	  if (!this.length) return;
	  var index = indexOf(this, item);
	  if (index > -1) {
	    return this.splice(index, 1);
	  }
	});
	
	var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
	
	/**
	 * By default, when a reactive property is set, the new value is
	 * also converted to become reactive. However in certain cases, e.g.
	 * v-for scope alias and props, we don't want to force conversion
	 * because the value may be a nested value under a frozen data structure.
	 *
	 * So whenever we want to set a reactive property without forcing
	 * conversion on the new value, we wrap that call inside this function.
	 */
	
	var shouldConvert = true;
	
	function withoutConversion(fn) {
	  shouldConvert = false;
	  fn();
	  shouldConvert = true;
	}
	
	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 *
	 * @param {Array|Object} value
	 * @constructor
	 */
	
	function Observer(value) {
	  this.value = value;
	  this.dep = new Dep();
	  def(value, '__ob__', this);
	  if (isArray(value)) {
	    var augment = hasProto ? protoAugment : copyAugment;
	    augment(value, arrayMethods, arrayKeys);
	    this.observeArray(value);
	  } else {
	    this.walk(value);
	  }
	}
	
	// Instance methods
	
	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 *
	 * @param {Object} obj
	 */
	
	Observer.prototype.walk = function (obj) {
	  var keys = Object.keys(obj);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    this.convert(keys[i], obj[keys[i]]);
	  }
	};
	
	/**
	 * Observe a list of Array items.
	 *
	 * @param {Array} items
	 */
	
	Observer.prototype.observeArray = function (items) {
	  for (var i = 0, l = items.length; i < l; i++) {
	    observe(items[i]);
	  }
	};
	
	/**
	 * Convert a property into getter/setter so we can emit
	 * the events when the property is accessed/changed.
	 *
	 * @param {String} key
	 * @param {*} val
	 */
	
	Observer.prototype.convert = function (key, val) {
	  defineReactive(this.value, key, val);
	};
	
	/**
	 * Add an owner vm, so that when $set/$delete mutations
	 * happen we can notify owner vms to proxy the keys and
	 * digest the watchers. This is only called when the object
	 * is observed as an instance's root $data.
	 *
	 * @param {Vue} vm
	 */
	
	Observer.prototype.addVm = function (vm) {
	  (this.vms || (this.vms = [])).push(vm);
	};
	
	/**
	 * Remove an owner vm. This is called when the object is
	 * swapped out as an instance's $data object.
	 *
	 * @param {Vue} vm
	 */
	
	Observer.prototype.removeVm = function (vm) {
	  this.vms.$remove(vm);
	};
	
	// helpers
	
	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 *
	 * @param {Object|Array} target
	 * @param {Object} src
	 */
	
	function protoAugment(target, src) {
	  /* eslint-disable no-proto */
	  target.__proto__ = src;
	  /* eslint-enable no-proto */
	}
	
	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */
	
	function copyAugment(target, src, keys) {
	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i];
	    def(target, key, src[key]);
	  }
	}
	
	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 *
	 * @param {*} value
	 * @param {Vue} [vm]
	 * @return {Observer|undefined}
	 * @static
	 */
	
	function observe(value, vm) {
	  if (!value || typeof value !== 'object') {
	    return;
	  }
	  var ob;
	  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if (shouldConvert && (isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
	    ob = new Observer(value);
	  }
	  if (ob && vm) {
	    ob.addVm(vm);
	  }
	  return ob;
	}
	
	/**
	 * Define a reactive property on an Object.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 */
	
	function defineReactive(obj, key, val) {
	  var dep = new Dep();
	
	  var property = Object.getOwnPropertyDescriptor(obj, key);
	  if (property && property.configurable === false) {
	    return;
	  }
	
	  // cater for pre-defined getter/setters
	  var getter = property && property.get;
	  var setter = property && property.set;
	
	  var childOb = observe(val);
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function reactiveGetter() {
	      var value = getter ? getter.call(obj) : val;
	      if (Dep.target) {
	        dep.depend();
	        if (childOb) {
	          childOb.dep.depend();
	        }
	        if (isArray(value)) {
	          for (var e, i = 0, l = value.length; i < l; i++) {
	            e = value[i];
	            e && e.__ob__ && e.__ob__.dep.depend();
	          }
	        }
	      }
	      return value;
	    },
	    set: function reactiveSetter(newVal) {
	      var value = getter ? getter.call(obj) : val;
	      if (newVal === value) {
	        return;
	      }
	      if (setter) {
	        setter.call(obj, newVal);
	      } else {
	        val = newVal;
	      }
	      childOb = observe(newVal);
	      dep.notify();
	    }
	  });
	}
	
	
	
	var util = Object.freeze({
		defineReactive: defineReactive,
		set: set,
		del: del,
		hasOwn: hasOwn,
		isLiteral: isLiteral,
		isReserved: isReserved,
		_toString: _toString,
		toNumber: toNumber,
		toBoolean: toBoolean,
		stripQuotes: stripQuotes,
		camelize: camelize,
		hyphenate: hyphenate,
		classify: classify,
		bind: bind,
		toArray: toArray,
		extend: extend,
		isObject: isObject,
		isPlainObject: isPlainObject,
		def: def,
		debounce: _debounce,
		indexOf: indexOf,
		cancellable: cancellable,
		looseEqual: looseEqual,
		isArray: isArray,
		hasProto: hasProto,
		inBrowser: inBrowser,
		devtools: devtools,
		isIE9: isIE9,
		isAndroid: isAndroid,
		get transitionProp () { return transitionProp; },
		get transitionEndEvent () { return transitionEndEvent; },
		get animationProp () { return animationProp; },
		get animationEndEvent () { return animationEndEvent; },
		nextTick: nextTick,
		query: query,
		inDoc: inDoc,
		getAttr: getAttr,
		getBindAttr: getBindAttr,
		hasBindAttr: hasBindAttr,
		before: before,
		after: after,
		remove: remove,
		prepend: prepend,
		replace: replace,
		on: on,
		off: off,
		setClass: setClass,
		addClass: addClass,
		removeClass: removeClass,
		extractContent: extractContent,
		trimNode: trimNode,
		isTemplate: isTemplate,
		createAnchor: createAnchor,
		findRef: findRef,
		mapNodeRange: mapNodeRange,
		removeNodeRange: removeNodeRange,
		isFragment: isFragment,
		getOuterHTML: getOuterHTML,
		mergeOptions: mergeOptions,
		resolveAsset: resolveAsset,
		assertAsset: assertAsset,
		checkComponentAttr: checkComponentAttr,
		commonTagRE: commonTagRE,
		reservedTagRE: reservedTagRE,
		get warn () { return warn; }
	});
	
	var uid = 0;
	
	function initMixin (Vue) {
	  /**
	   * The main init sequence. This is called for every
	   * instance, including ones that are created from extended
	   * constructors.
	   *
	   * @param {Object} options - this options object should be
	   *                           the result of merging class
	   *                           options and the options passed
	   *                           in to the constructor.
	   */
	
	  Vue.prototype._init = function (options) {
	    options = options || {};
	
	    this.$el = null;
	    this.$parent = options.parent;
	    this.$root = this.$parent ? this.$parent.$root : this;
	    this.$children = [];
	    this.$refs = {}; // child vm references
	    this.$els = {}; // element references
	    this._watchers = []; // all watchers as an array
	    this._directives = []; // all directives
	
	    // a uid
	    this._uid = uid++;
	
	    // a flag to avoid this being observed
	    this._isVue = true;
	
	    // events bookkeeping
	    this._events = {}; // registered callbacks
	    this._eventsCount = {}; // for $broadcast optimization
	
	    // fragment instance properties
	    this._isFragment = false;
	    this._fragment = // @type {DocumentFragment}
	    this._fragmentStart = // @type {Text|Comment}
	    this._fragmentEnd = null; // @type {Text|Comment}
	
	    // lifecycle state
	    this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = this._vForRemoving = false;
	    this._unlinkFn = null;
	
	    // context:
	    // if this is a transcluded component, context
	    // will be the common parent vm of this instance
	    // and its host.
	    this._context = options._context || this.$parent;
	
	    // scope:
	    // if this is inside an inline v-for, the scope
	    // will be the intermediate scope created for this
	    // repeat fragment. this is used for linking props
	    // and container directives.
	    this._scope = options._scope;
	
	    // fragment:
	    // if this instance is compiled inside a Fragment, it
	    // needs to reigster itself as a child of that fragment
	    // for attach/detach to work properly.
	    this._frag = options._frag;
	    if (this._frag) {
	      this._frag.children.push(this);
	    }
	
	    // push self into parent / transclusion host
	    if (this.$parent) {
	      this.$parent.$children.push(this);
	    }
	
	    // merge options.
	    options = this.$options = mergeOptions(this.constructor.options, options, this);
	
	    // set ref
	    this._updateRef();
	
	    // initialize data as empty object.
	    // it will be filled up in _initScope().
	    this._data = {};
	
	    // save raw constructor data before merge
	    // so that we know which properties are provided at
	    // instantiation.
	    this._runtimeData = options.data;
	
	    // call init hook
	    this._callHook('init');
	
	    // initialize data observation and scope inheritance.
	    this._initState();
	
	    // setup event system and option events.
	    this._initEvents();
	
	    // call created hook
	    this._callHook('created');
	
	    // if `el` option is passed, start compilation.
	    if (options.el) {
	      this.$mount(options.el);
	    }
	  };
	}
	
	var pathCache = new Cache(1000);
	
	// actions
	var APPEND = 0;
	var PUSH = 1;
	var INC_SUB_PATH_DEPTH = 2;
	var PUSH_SUB_PATH = 3;
	
	// states
	var BEFORE_PATH = 0;
	var IN_PATH = 1;
	var BEFORE_IDENT = 2;
	var IN_IDENT = 3;
	var IN_SUB_PATH = 4;
	var IN_SINGLE_QUOTE = 5;
	var IN_DOUBLE_QUOTE = 6;
	var AFTER_PATH = 7;
	var ERROR = 8;
	
	var pathStateMachine = [];
	
	pathStateMachine[BEFORE_PATH] = {
	  'ws': [BEFORE_PATH],
	  'ident': [IN_IDENT, APPEND],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};
	
	pathStateMachine[IN_PATH] = {
	  'ws': [IN_PATH],
	  '.': [BEFORE_IDENT],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};
	
	pathStateMachine[BEFORE_IDENT] = {
	  'ws': [BEFORE_IDENT],
	  'ident': [IN_IDENT, APPEND]
	};
	
	pathStateMachine[IN_IDENT] = {
	  'ident': [IN_IDENT, APPEND],
	  '0': [IN_IDENT, APPEND],
	  'number': [IN_IDENT, APPEND],
	  'ws': [IN_PATH, PUSH],
	  '.': [BEFORE_IDENT, PUSH],
	  '[': [IN_SUB_PATH, PUSH],
	  'eof': [AFTER_PATH, PUSH]
	};
	
	pathStateMachine[IN_SUB_PATH] = {
	  "'": [IN_SINGLE_QUOTE, APPEND],
	  '"': [IN_DOUBLE_QUOTE, APPEND],
	  '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
	  ']': [IN_PATH, PUSH_SUB_PATH],
	  'eof': ERROR,
	  'else': [IN_SUB_PATH, APPEND]
	};
	
	pathStateMachine[IN_SINGLE_QUOTE] = {
	  "'": [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_SINGLE_QUOTE, APPEND]
	};
	
	pathStateMachine[IN_DOUBLE_QUOTE] = {
	  '"': [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_DOUBLE_QUOTE, APPEND]
	};
	
	/**
	 * Determine the type of a character in a keypath.
	 *
	 * @param {Char} ch
	 * @return {String} type
	 */
	
	function getPathCharType(ch) {
	  if (ch === undefined) {
	    return 'eof';
	  }
	
	  var code = ch.charCodeAt(0);
	
	  switch (code) {
	    case 0x5B: // [
	    case 0x5D: // ]
	    case 0x2E: // .
	    case 0x22: // "
	    case 0x27: // '
	    case 0x30:
	      // 0
	      return ch;
	
	    case 0x5F: // _
	    case 0x24:
	      // $
	      return 'ident';
	
	    case 0x20: // Space
	    case 0x09: // Tab
	    case 0x0A: // Newline
	    case 0x0D: // Return
	    case 0xA0: // No-break space
	    case 0xFEFF: // Byte Order Mark
	    case 0x2028: // Line Separator
	    case 0x2029:
	      // Paragraph Separator
	      return 'ws';
	  }
	
	  // a-z, A-Z
	  if (code >= 0x61 && code <= 0x7A || code >= 0x41 && code <= 0x5A) {
	    return 'ident';
	  }
	
	  // 1-9
	  if (code >= 0x31 && code <= 0x39) {
	    return 'number';
	  }
	
	  return 'else';
	}
	
	/**
	 * Format a subPath, return its plain form if it is
	 * a literal string or number. Otherwise prepend the
	 * dynamic indicator (*).
	 *
	 * @param {String} path
	 * @return {String}
	 */
	
	function formatSubPath(path) {
	  var trimmed = path.trim();
	  // invalid leading 0
	  if (path.charAt(0) === '0' && isNaN(path)) {
	    return false;
	  }
	  return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed;
	}
	
	/**
	 * Parse a string path into an array of segments
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */
	
	function parse(path) {
	  var keys = [];
	  var index = -1;
	  var mode = BEFORE_PATH;
	  var subPathDepth = 0;
	  var c, newChar, key, type, transition, action, typeMap;
	
	  var actions = [];
	
	  actions[PUSH] = function () {
	    if (key !== undefined) {
	      keys.push(key);
	      key = undefined;
	    }
	  };
	
	  actions[APPEND] = function () {
	    if (key === undefined) {
	      key = newChar;
	    } else {
	      key += newChar;
	    }
	  };
	
	  actions[INC_SUB_PATH_DEPTH] = function () {
	    actions[APPEND]();
	    subPathDepth++;
	  };
	
	  actions[PUSH_SUB_PATH] = function () {
	    if (subPathDepth > 0) {
	      subPathDepth--;
	      mode = IN_SUB_PATH;
	      actions[APPEND]();
	    } else {
	      subPathDepth = 0;
	      key = formatSubPath(key);
	      if (key === false) {
	        return false;
	      } else {
	        actions[PUSH]();
	      }
	    }
	  };
	
	  function maybeUnescapeQuote() {
	    var nextChar = path[index + 1];
	    if (mode === IN_SINGLE_QUOTE && nextChar === "'" || mode === IN_DOUBLE_QUOTE && nextChar === '"') {
	      index++;
	      newChar = '\\' + nextChar;
	      actions[APPEND]();
	      return true;
	    }
	  }
	
	  while (mode != null) {
	    index++;
	    c = path[index];
	
	    if (c === '\\' && maybeUnescapeQuote()) {
	      continue;
	    }
	
	    type = getPathCharType(c);
	    typeMap = pathStateMachine[mode];
	    transition = typeMap[type] || typeMap['else'] || ERROR;
	
	    if (transition === ERROR) {
	      return; // parse error
	    }
	
	    mode = transition[0];
	    action = actions[transition[1]];
	    if (action) {
	      newChar = transition[2];
	      newChar = newChar === undefined ? c : newChar;
	      if (action() === false) {
	        return;
	      }
	    }
	
	    if (mode === AFTER_PATH) {
	      keys.raw = path;
	      return keys;
	    }
	  }
	}
	
	/**
	 * External parse that check for a cache hit first
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */
	
	function parsePath(path) {
	  var hit = pathCache.get(path);
	  if (!hit) {
	    hit = parse(path);
	    if (hit) {
	      pathCache.put(path, hit);
	    }
	  }
	  return hit;
	}
	
	/**
	 * Get from an object from a path string
	 *
	 * @param {Object} obj
	 * @param {String} path
	 */
	
	function getPath(obj, path) {
	  return parseExpression(path).get(obj);
	}
	
	/**
	 * Warn against setting non-existent root path on a vm.
	 */
	
	var warnNonExistent;
	if (process.env.NODE_ENV !== 'production') {
	  warnNonExistent = function (path) {
	    warn('You are setting a non-existent path "' + path.raw + '" ' + 'on a vm instance. Consider pre-initializing the property ' + 'with the "data" option for more reliable reactivity ' + 'and better performance.');
	  };
	}
	
	/**
	 * Set on an object from a path
	 *
	 * @param {Object} obj
	 * @param {String | Array} path
	 * @param {*} val
	 */
	
	function setPath(obj, path, val) {
	  var original = obj;
	  if (typeof path === 'string') {
	    path = parse(path);
	  }
	  if (!path || !isObject(obj)) {
	    return false;
	  }
	  var last, key;
	  for (var i = 0, l = path.length; i < l; i++) {
	    last = obj;
	    key = path[i];
	    if (key.charAt(0) === '*') {
	      key = parseExpression(key.slice(1)).get.call(original, original);
	    }
	    if (i < l - 1) {
	      obj = obj[key];
	      if (!isObject(obj)) {
	        obj = {};
	        if (process.env.NODE_ENV !== 'production' && last._isVue) {
	          warnNonExistent(path);
	        }
	        set(last, key, obj);
	      }
	    } else {
	      if (isArray(obj)) {
	        obj.$set(key, val);
	      } else if (key in obj) {
	        obj[key] = val;
	      } else {
	        if (process.env.NODE_ENV !== 'production' && obj._isVue) {
	          warnNonExistent(path);
	        }
	        set(obj, key, val);
	      }
	    }
	  }
	  return true;
	}
	
	var path = Object.freeze({
	  parsePath: parsePath,
	  getPath: getPath,
	  setPath: setPath
	});
	
	var expressionCache = new Cache(1000);
	
	var allowedKeywords = 'Math,Date,this,true,false,null,undefined,Infinity,NaN,' + 'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' + 'encodeURIComponent,parseInt,parseFloat';
	var allowedKeywordsRE = new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)');
	
	// keywords that don't make sense inside expressions
	var improperKeywords = 'break,case,class,catch,const,continue,debugger,default,' + 'delete,do,else,export,extends,finally,for,function,if,' + 'import,in,instanceof,let,return,super,switch,throw,try,' + 'var,while,with,yield,enum,await,implements,package,' + 'protected,static,interface,private,public';
	var improperKeywordsRE = new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)');
	
	var wsRE = /\s/g;
	var newlineRE = /\n/g;
	var saveRE = /[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`)|new |typeof |void /g;
	var restoreRE = /"(\d+)"/g;
	var pathTestRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/;
	var identRE = /[^\w$\.](?:[A-Za-z_$][\w$]*)/g;
	var booleanLiteralRE = /^(?:true|false)$/;
	
	/**
	 * Save / Rewrite / Restore
	 *
	 * When rewriting paths found in an expression, it is
	 * possible for the same letter sequences to be found in
	 * strings and Object literal property keys. Therefore we
	 * remove and store these parts in a temporary array, and
	 * restore them after the path rewrite.
	 */
	
	var saved = [];
	
	/**
	 * Save replacer
	 *
	 * The save regex can match two possible cases:
	 * 1. An opening object literal
	 * 2. A string
	 * If matched as a plain string, we need to escape its
	 * newlines, since the string needs to be preserved when
	 * generating the function body.
	 *
	 * @param {String} str
	 * @param {String} isString - str if matched as a string
	 * @return {String} - placeholder with index
	 */
	
	function save(str, isString) {
	  var i = saved.length;
	  saved[i] = isString ? str.replace(newlineRE, '\\n') : str;
	  return '"' + i + '"';
	}
	
	/**
	 * Path rewrite replacer
	 *
	 * @param {String} raw
	 * @return {String}
	 */
	
	function rewrite(raw) {
	  var c = raw.charAt(0);
	  var path = raw.slice(1);
	  if (allowedKeywordsRE.test(path)) {
	    return raw;
	  } else {
	    path = path.indexOf('"') > -1 ? path.replace(restoreRE, restore) : path;
	    return c + 'scope.' + path;
	  }
	}
	
	/**
	 * Restore replacer
	 *
	 * @param {String} str
	 * @param {String} i - matched save index
	 * @return {String}
	 */
	
	function restore(str, i) {
	  return saved[i];
	}
	
	/**
	 * Rewrite an expression, prefixing all path accessors with
	 * `scope.` and generate getter/setter functions.
	 *
	 * @param {String} exp
	 * @return {Function}
	 */
	
	function compileGetter(exp) {
	  if (improperKeywordsRE.test(exp)) {
	    process.env.NODE_ENV !== 'production' && warn('Avoid using reserved keywords in expression: ' + exp);
	  }
	  // reset state
	  saved.length = 0;
	  // save strings and object literal keys
	  var body = exp.replace(saveRE, save).replace(wsRE, '');
	  // rewrite all paths
	  // pad 1 space here becaue the regex matches 1 extra char
	  body = (' ' + body).replace(identRE, rewrite).replace(restoreRE, restore);
	  return makeGetterFn(body);
	}
	
	/**
	 * Build a getter function. Requires eval.
	 *
	 * We isolate the try/catch so it doesn't affect the
	 * optimization of the parse function when it is not called.
	 *
	 * @param {String} body
	 * @return {Function|undefined}
	 */
	
	function makeGetterFn(body) {
	  try {
	    /* eslint-disable no-new-func */
	    return new Function('scope', 'return ' + body + ';');
	    /* eslint-enable no-new-func */
	  } catch (e) {
	    process.env.NODE_ENV !== 'production' && warn('Invalid expression. ' + 'Generated function body: ' + body);
	  }
	}
	
	/**
	 * Compile a setter function for the expression.
	 *
	 * @param {String} exp
	 * @return {Function|undefined}
	 */
	
	function compileSetter(exp) {
	  var path = parsePath(exp);
	  if (path) {
	    return function (scope, val) {
	      setPath(scope, path, val);
	    };
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid setter expression: ' + exp);
	  }
	}
	
	/**
	 * Parse an expression into re-written getter/setters.
	 *
	 * @param {String} exp
	 * @param {Boolean} needSet
	 * @return {Function}
	 */
	
	function parseExpression(exp, needSet) {
	  exp = exp.trim();
	  // try cache
	  var hit = expressionCache.get(exp);
	  if (hit) {
	    if (needSet && !hit.set) {
	      hit.set = compileSetter(hit.exp);
	    }
	    return hit;
	  }
	  var res = { exp: exp };
	  res.get = isSimplePath(exp) && exp.indexOf('[') < 0
	  // optimized super simple getter
	  ? makeGetterFn('scope.' + exp)
	  // dynamic getter
	  : compileGetter(exp);
	  if (needSet) {
	    res.set = compileSetter(exp);
	  }
	  expressionCache.put(exp, res);
	  return res;
	}
	
	/**
	 * Check if an expression is a simple path.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */
	
	function isSimplePath(exp) {
	  return pathTestRE.test(exp) &&
	  // don't treat true/false as paths
	  !booleanLiteralRE.test(exp) &&
	  // Math constants e.g. Math.PI, Math.E etc.
	  exp.slice(0, 5) !== 'Math.';
	}
	
	var expression = Object.freeze({
	  parseExpression: parseExpression,
	  isSimplePath: isSimplePath
	});
	
	// we have two separate queues: one for directive updates
	// and one for user watcher registered via $watch().
	// we want to guarantee directive updates to be called
	// before user watchers so that when user watchers are
	// triggered, the DOM would have already been in updated
	// state.
	
	var queueIndex;
	var queue = [];
	var userQueue = [];
	var has = {};
	var circular = {};
	var waiting = false;
	var internalQueueDepleted = false;
	
	/**
	 * Reset the batcher's state.
	 */
	
	function resetBatcherState() {
	  queue = [];
	  userQueue = [];
	  has = {};
	  circular = {};
	  waiting = internalQueueDepleted = false;
	}
	
	/**
	 * Flush both queues and run the watchers.
	 */
	
	function flushBatcherQueue() {
	  runBatcherQueue(queue);
	  internalQueueDepleted = true;
	  runBatcherQueue(userQueue);
	  // dev tool hook
	  /* istanbul ignore if */
	  if (devtools && config.devtools) {
	    devtools.emit('flush');
	  }
	  resetBatcherState();
	}
	
	/**
	 * Run the watchers in a single queue.
	 *
	 * @param {Array} queue
	 */
	
	function runBatcherQueue(queue) {
	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (queueIndex = 0; queueIndex < queue.length; queueIndex++) {
	    var watcher = queue[queueIndex];
	    var id = watcher.id;
	    has[id] = null;
	    watcher.run();
	    // in dev build, check and stop circular updates.
	    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
	      circular[id] = (circular[id] || 0) + 1;
	      if (circular[id] > config._maxUpdateCount) {
	        queue.splice(has[id], 1);
	        warn('You may have an infinite update loop for watcher ' + 'with expression: ' + watcher.expression);
	      }
	    }
	  }
	}
	
	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 *
	 * @param {Watcher} watcher
	 *   properties:
	 *   - {Number} id
	 *   - {Function} run
	 */
	
	function pushWatcher(watcher) {
	  var id = watcher.id;
	  if (has[id] == null) {
	    if (internalQueueDepleted && !watcher.user) {
	      // an internal watcher triggered by a user watcher...
	      // let's run it immediately after current user watcher is done.
	      userQueue.splice(queueIndex + 1, 0, watcher);
	    } else {
	      // push watcher into appropriate queue
	      var q = watcher.user ? userQueue : queue;
	      has[id] = q.length;
	      q.push(watcher);
	      // queue the flush
	      if (!waiting) {
	        waiting = true;
	        nextTick(flushBatcherQueue);
	      }
	    }
	  }
	}
	
	var uid$2 = 0;
	
	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 *
	 * @param {Vue} vm
	 * @param {String|Function} expOrFn
	 * @param {Function} cb
	 * @param {Object} options
	 *                 - {Array} filters
	 *                 - {Boolean} twoWay
	 *                 - {Boolean} deep
	 *                 - {Boolean} user
	 *                 - {Boolean} sync
	 *                 - {Boolean} lazy
	 *                 - {Function} [preProcess]
	 *                 - {Function} [postProcess]
	 * @constructor
	 */
	function Watcher(vm, expOrFn, cb, options) {
	  // mix in options
	  if (options) {
	    extend(this, options);
	  }
	  var isFn = typeof expOrFn === 'function';
	  this.vm = vm;
	  vm._watchers.push(this);
	  this.expression = expOrFn;
	  this.cb = cb;
	  this.id = ++uid$2; // uid for batching
	  this.active = true;
	  this.dirty = this.lazy; // for lazy watchers
	  this.deps = [];
	  this.newDeps = [];
	  this.depIds = Object.create(null);
	  this.newDepIds = null;
	  this.prevError = null; // for async error stacks
	  // parse expression for getter/setter
	  if (isFn) {
	    this.getter = expOrFn;
	    this.setter = undefined;
	  } else {
	    var res = parseExpression(expOrFn, this.twoWay);
	    this.getter = res.get;
	    this.setter = res.set;
	  }
	  this.value = this.lazy ? undefined : this.get();
	  // state for avoiding false triggers for deep and Array
	  // watchers during vm._digest()
	  this.queued = this.shallow = false;
	}
	
	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */
	
	Watcher.prototype.get = function () {
	  this.beforeGet();
	  var scope = this.scope || this.vm;
	  var value;
	  try {
	    value = this.getter.call(scope, scope);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating expression "' + this.expression + '". ' + (config.debug ? '' : 'Turn on debug mode to see stack trace.'), e);
	    }
	  }
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value);
	  }
	  if (this.preProcess) {
	    value = this.preProcess(value);
	  }
	  if (this.filters) {
	    value = scope._applyFilters(value, null, this.filters, false);
	  }
	  if (this.postProcess) {
	    value = this.postProcess(value);
	  }
	  this.afterGet();
	  return value;
	};
	
	/**
	 * Set the corresponding value with the setter.
	 *
	 * @param {*} value
	 */
	
	Watcher.prototype.set = function (value) {
	  var scope = this.scope || this.vm;
	  if (this.filters) {
	    value = scope._applyFilters(value, this.value, this.filters, true);
	  }
	  try {
	    this.setter.call(scope, scope, value);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating setter "' + this.expression + '"', e);
	    }
	  }
	  // two-way sync for v-for alias
	  var forContext = scope.$forContext;
	  if (forContext && forContext.alias === this.expression) {
	    if (forContext.filters) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using two-way binding on ' + 'a v-for alias (' + this.expression + '), and the ' + 'v-for has filters. This will not work properly. ' + 'Either remove the filters or use an array of ' + 'objects and bind to object properties instead.');
	      return;
	    }
	    forContext._withLock(function () {
	      if (scope.$key) {
	        // original is an object
	        forContext.rawValue[scope.$key] = value;
	      } else {
	        forContext.rawValue.$set(scope.$index, value);
	      }
	    });
	  }
	};
	
	/**
	 * Prepare for dependency collection.
	 */
	
	Watcher.prototype.beforeGet = function () {
	  Dep.target = this;
	  this.newDepIds = Object.create(null);
	  this.newDeps.length = 0;
	};
	
	/**
	 * Add a dependency to this directive.
	 *
	 * @param {Dep} dep
	 */
	
	Watcher.prototype.addDep = function (dep) {
	  var id = dep.id;
	  if (!this.newDepIds[id]) {
	    this.newDepIds[id] = true;
	    this.newDeps.push(dep);
	    if (!this.depIds[id]) {
	      dep.addSub(this);
	    }
	  }
	};
	
	/**
	 * Clean up for dependency collection.
	 */
	
	Watcher.prototype.afterGet = function () {
	  Dep.target = null;
	  var i = this.deps.length;
	  while (i--) {
	    var dep = this.deps[i];
	    if (!this.newDepIds[dep.id]) {
	      dep.removeSub(this);
	    }
	  }
	  this.depIds = this.newDepIds;
	  var tmp = this.deps;
	  this.deps = this.newDeps;
	  this.newDeps = tmp;
	};
	
	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 *
	 * @param {Boolean} shallow
	 */
	
	Watcher.prototype.update = function (shallow) {
	  if (this.lazy) {
	    this.dirty = true;
	  } else if (this.sync || !config.async) {
	    this.run();
	  } else {
	    // if queued, only overwrite shallow with non-shallow,
	    // but not the other way around.
	    this.shallow = this.queued ? shallow ? this.shallow : false : !!shallow;
	    this.queued = true;
	    // record before-push error stack in debug mode
	    /* istanbul ignore if */
	    if (process.env.NODE_ENV !== 'production' && config.debug) {
	      this.prevError = new Error('[vue] async stack trace');
	    }
	    pushWatcher(this);
	  }
	};
	
	/**
	 * Batcher job interface.
	 * Will be called by the batcher.
	 */
	
	Watcher.prototype.run = function () {
	  if (this.active) {
	    var value = this.get();
	    if (value !== this.value ||
	    // Deep watchers and watchers on Object/Arrays should fire even
	    // when the value is the same, because the value may
	    // have mutated; but only do so if this is a
	    // non-shallow update (caused by a vm digest).
	    (isObject(value) || this.deep) && !this.shallow) {
	      // set new value
	      var oldValue = this.value;
	      this.value = value;
	      // in debug + async mode, when a watcher callbacks
	      // throws, we also throw the saved before-push error
	      // so the full cross-tick stack trace is available.
	      var prevError = this.prevError;
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && config.debug && prevError) {
	        this.prevError = null;
	        try {
	          this.cb.call(this.vm, value, oldValue);
	        } catch (e) {
	          nextTick(function () {
	            throw prevError;
	          }, 0);
	          throw e;
	        }
	      } else {
	        this.cb.call(this.vm, value, oldValue);
	      }
	    }
	    this.queued = this.shallow = false;
	  }
	};
	
	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */
	
	Watcher.prototype.evaluate = function () {
	  // avoid overwriting another watcher that is being
	  // collected.
	  var current = Dep.target;
	  this.value = this.get();
	  this.dirty = false;
	  Dep.target = current;
	};
	
	/**
	 * Depend on all deps collected by this watcher.
	 */
	
	Watcher.prototype.depend = function () {
	  var i = this.deps.length;
	  while (i--) {
	    this.deps[i].depend();
	  }
	};
	
	/**
	 * Remove self from all dependencies' subcriber list.
	 */
	
	Watcher.prototype.teardown = function () {
	  if (this.active) {
	    // remove self from vm's watcher list
	    // this is a somewhat expensive operation so we skip it
	    // if the vm is being destroyed or is performing a v-for
	    // re-render (the watcher list is then filtered by v-for).
	    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
	      this.vm._watchers.$remove(this);
	    }
	    var i = this.deps.length;
	    while (i--) {
	      this.deps[i].removeSub(this);
	    }
	    this.active = false;
	    this.vm = this.cb = this.value = null;
	  }
	};
	
	/**
	 * Recrusively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 *
	 * @param {*} val
	 */
	
	function traverse(val) {
	  var i, keys;
	  if (isArray(val)) {
	    i = val.length;
	    while (i--) traverse(val[i]);
	  } else if (isObject(val)) {
	    keys = Object.keys(val);
	    i = keys.length;
	    while (i--) traverse(val[keys[i]]);
	  }
	}
	
	var text$1 = {
	
	  bind: function bind() {
	    this.attr = this.el.nodeType === 3 ? 'data' : 'textContent';
	  },
	
	  update: function update(value) {
	    this.el[this.attr] = _toString(value);
	  }
	};
	
	var templateCache = new Cache(1000);
	var idSelectorCache = new Cache(1000);
	
	var map = {
	  efault: [0, '', ''],
	  legend: [1, '<fieldset>', '</fieldset>'],
	  tr: [2, '<table><tbody>', '</tbody></table>'],
	  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>']
	};
	
	map.td = map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];
	
	map.option = map.optgroup = [1, '<select multiple="multiple">', '</select>'];
	
	map.thead = map.tbody = map.colgroup = map.caption = map.tfoot = [1, '<table>', '</table>'];
	
	map.g = map.defs = map.symbol = map.use = map.image = map.text = map.circle = map.ellipse = map.line = map.path = map.polygon = map.polyline = map.rect = [1, '<svg ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'xmlns:xlink="http://www.w3.org/1999/xlink" ' + 'xmlns:ev="http://www.w3.org/2001/xml-events"' + 'version="1.1">', '</svg>'];
	
	/**
	 * Check if a node is a supported template node with a
	 * DocumentFragment content.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */
	
	function isRealTemplate(node) {
	  return isTemplate(node) && isFragment(node.content);
	}
	
	var tagRE$1 = /<([\w:-]+)/;
	var entityRE = /&#?\w+?;/;
	
	/**
	 * Convert a string template to a DocumentFragment.
	 * Determines correct wrapping by tag types. Wrapping
	 * strategy found in jQuery & component/domify.
	 *
	 * @param {String} templateString
	 * @param {Boolean} raw
	 * @return {DocumentFragment}
	 */
	
	function stringToFragment(templateString, raw) {
	  // try a cache hit first
	  var cacheKey = raw ? templateString : templateString.trim();
	  var hit = templateCache.get(cacheKey);
	  if (hit) {
	    return hit;
	  }
	
	  var frag = document.createDocumentFragment();
	  var tagMatch = templateString.match(tagRE$1);
	  var entityMatch = entityRE.test(templateString);
	
	  if (!tagMatch && !entityMatch) {
	    // text only, return a single text node.
	    frag.appendChild(document.createTextNode(templateString));
	  } else {
	    var tag = tagMatch && tagMatch[1];
	    var wrap = map[tag] || map.efault;
	    var depth = wrap[0];
	    var prefix = wrap[1];
	    var suffix = wrap[2];
	    var node = document.createElement('div');
	
	    node.innerHTML = prefix + templateString + suffix;
	    while (depth--) {
	      node = node.lastChild;
	    }
	
	    var child;
	    /* eslint-disable no-cond-assign */
	    while (child = node.firstChild) {
	      /* eslint-enable no-cond-assign */
	      frag.appendChild(child);
	    }
	  }
	  if (!raw) {
	    trimNode(frag);
	  }
	  templateCache.put(cacheKey, frag);
	  return frag;
	}
	
	/**
	 * Convert a template node to a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {DocumentFragment}
	 */
	
	function nodeToFragment(node) {
	  // if its a template tag and the browser supports it,
	  // its content is already a document fragment.
	  if (isRealTemplate(node)) {
	    trimNode(node.content);
	    return node.content;
	  }
	  // script template
	  if (node.tagName === 'SCRIPT') {
	    return stringToFragment(node.textContent);
	  }
	  // normal node, clone it to avoid mutating the original
	  var clonedNode = cloneNode(node);
	  var frag = document.createDocumentFragment();
	  var child;
	  /* eslint-disable no-cond-assign */
	  while (child = clonedNode.firstChild) {
	    /* eslint-enable no-cond-assign */
	    frag.appendChild(child);
	  }
	  trimNode(frag);
	  return frag;
	}
	
	// Test for the presence of the Safari template cloning bug
	// https://bugs.webkit.org/showug.cgi?id=137755
	var hasBrokenTemplate = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var a = document.createElement('div');
	    a.innerHTML = '<template>1</template>';
	    return !a.cloneNode(true).firstChild.innerHTML;
	  } else {
	    return false;
	  }
	})();
	
	// Test for IE10/11 textarea placeholder clone bug
	var hasTextareaCloneBug = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var t = document.createElement('textarea');
	    t.placeholder = 't';
	    return t.cloneNode(true).value === 't';
	  } else {
	    return false;
	  }
	})();
	
	/**
	 * 1. Deal with Safari cloning nested <template> bug by
	 *    manually cloning all template instances.
	 * 2. Deal with IE10/11 textarea placeholder bug by setting
	 *    the correct value after cloning.
	 *
	 * @param {Element|DocumentFragment} node
	 * @return {Element|DocumentFragment}
	 */
	
	function cloneNode(node) {
	  /* istanbul ignore if */
	  if (!node.querySelectorAll) {
	    return node.cloneNode();
	  }
	  var res = node.cloneNode(true);
	  var i, original, cloned;
	  /* istanbul ignore if */
	  if (hasBrokenTemplate) {
	    var tempClone = res;
	    if (isRealTemplate(node)) {
	      node = node.content;
	      tempClone = res.content;
	    }
	    original = node.querySelectorAll('template');
	    if (original.length) {
	      cloned = tempClone.querySelectorAll('template');
	      i = cloned.length;
	      while (i--) {
	        cloned[i].parentNode.replaceChild(cloneNode(original[i]), cloned[i]);
	      }
	    }
	  }
	  /* istanbul ignore if */
	  if (hasTextareaCloneBug) {
	    if (node.tagName === 'TEXTAREA') {
	      res.value = node.value;
	    } else {
	      original = node.querySelectorAll('textarea');
	      if (original.length) {
	        cloned = res.querySelectorAll('textarea');
	        i = cloned.length;
	        while (i--) {
	          cloned[i].value = original[i].value;
	        }
	      }
	    }
	  }
	  return res;
	}
	
	/**
	 * Process the template option and normalizes it into a
	 * a DocumentFragment that can be used as a partial or a
	 * instance template.
	 *
	 * @param {*} template
	 *        Possible values include:
	 *        - DocumentFragment object
	 *        - Node object of type Template
	 *        - id selector: '#some-template-id'
	 *        - template string: '<div><span>{{msg}}</span></div>'
	 * @param {Boolean} shouldClone
	 * @param {Boolean} raw
	 *        inline HTML interpolation. Do not check for id
	 *        selector and keep whitespace in the string.
	 * @return {DocumentFragment|undefined}
	 */
	
	function parseTemplate(template, shouldClone, raw) {
	  var node, frag;
	
	  // if the template is already a document fragment,
	  // do nothing
	  if (isFragment(template)) {
	    trimNode(template);
	    return shouldClone ? cloneNode(template) : template;
	  }
	
	  if (typeof template === 'string') {
	    // id selector
	    if (!raw && template.charAt(0) === '#') {
	      // id selector can be cached too
	      frag = idSelectorCache.get(template);
	      if (!frag) {
	        node = document.getElementById(template.slice(1));
	        if (node) {
	          frag = nodeToFragment(node);
	          // save selector to cache
	          idSelectorCache.put(template, frag);
	        }
	      }
	    } else {
	      // normal string template
	      frag = stringToFragment(template, raw);
	    }
	  } else if (template.nodeType) {
	    // a direct node
	    frag = nodeToFragment(template);
	  }
	
	  return frag && shouldClone ? cloneNode(frag) : frag;
	}
	
	var template = Object.freeze({
	  cloneNode: cloneNode,
	  parseTemplate: parseTemplate
	});
	
	var html = {
	
	  bind: function bind() {
	    // a comment node means this is a binding for
	    // {{{ inline unescaped html }}}
	    if (this.el.nodeType === 8) {
	      // hold nodes
	      this.nodes = [];
	      // replace the placeholder with proper anchor
	      this.anchor = createAnchor('v-html');
	      replace(this.el, this.anchor);
	    }
	  },
	
	  update: function update(value) {
	    value = _toString(value);
	    if (this.nodes) {
	      this.swap(value);
	    } else {
	      this.el.innerHTML = value;
	    }
	  },
	
	  swap: function swap(value) {
	    // remove old nodes
	    var i = this.nodes.length;
	    while (i--) {
	      remove(this.nodes[i]);
	    }
	    // convert new value to a fragment
	    // do not attempt to retrieve from id selector
	    var frag = parseTemplate(value, true, true);
	    // save a reference to these nodes so we can remove later
	    this.nodes = toArray(frag.childNodes);
	    before(frag, this.anchor);
	  }
	};
	
	/**
	 * Abstraction for a partially-compiled fragment.
	 * Can optionally compile content with a child scope.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Vue} [host]
	 * @param {Object} [scope]
	 * @param {Fragment} [parentFrag]
	 */
	function Fragment(linker, vm, frag, host, scope, parentFrag) {
	  this.children = [];
	  this.childFrags = [];
	  this.vm = vm;
	  this.scope = scope;
	  this.inserted = false;
	  this.parentFrag = parentFrag;
	  if (parentFrag) {
	    parentFrag.childFrags.push(this);
	  }
	  this.unlink = linker(vm, frag, host, scope, this);
	  var single = this.single = frag.childNodes.length === 1 &&
	  // do not go single mode if the only node is an anchor
	  !frag.childNodes[0].__v_anchor;
	  if (single) {
	    this.node = frag.childNodes[0];
	    this.before = singleBefore;
	    this.remove = singleRemove;
	  } else {
	    this.node = createAnchor('fragment-start');
	    this.end = createAnchor('fragment-end');
	    this.frag = frag;
	    prepend(this.node, frag);
	    frag.appendChild(this.end);
	    this.before = multiBefore;
	    this.remove = multiRemove;
	  }
	  this.node.__v_frag = this;
	}
	
	/**
	 * Call attach/detach for all components contained within
	 * this fragment. Also do so recursively for all child
	 * fragments.
	 *
	 * @param {Function} hook
	 */
	
	Fragment.prototype.callHook = function (hook) {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    this.childFrags[i].callHook(hook);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    hook(this.children[i]);
	  }
	};
	
	/**
	 * Insert fragment before target, single node version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */
	
	function singleBefore(target, withTransition) {
	  this.inserted = true;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  method(this.node, target, this.vm);
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}
	
	/**
	 * Remove fragment, single node version
	 */
	
	function singleRemove() {
	  this.inserted = false;
	  var shouldCallRemove = inDoc(this.node);
	  var self = this;
	  this.beforeRemove();
	  removeWithTransition(this.node, this.vm, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}
	
	/**
	 * Insert fragment before target, multi-nodes version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */
	
	function multiBefore(target, withTransition) {
	  this.inserted = true;
	  var vm = this.vm;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  mapNodeRange(this.node, this.end, function (node) {
	    method(node, target, vm);
	  });
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}
	
	/**
	 * Remove fragment, multi-nodes version
	 */
	
	function multiRemove() {
	  this.inserted = false;
	  var self = this;
	  var shouldCallRemove = inDoc(this.node);
	  this.beforeRemove();
	  removeNodeRange(this.node, this.end, this.vm, this.frag, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}
	
	/**
	 * Prepare the fragment for removal.
	 */
	
	Fragment.prototype.beforeRemove = function () {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    // call the same method recursively on child
	    // fragments, depth-first
	    this.childFrags[i].beforeRemove(false);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    // Call destroy for all contained instances,
	    // with remove:false and defer:true.
	    // Defer is necessary because we need to
	    // keep the children to call detach hooks
	    // on them.
	    this.children[i].$destroy(false, true);
	  }
	  var dirs = this.unlink.dirs;
	  for (i = 0, l = dirs.length; i < l; i++) {
	    // disable the watchers on all the directives
	    // so that the rendered content stays the same
	    // during removal.
	    dirs[i]._watcher && dirs[i]._watcher.teardown();
	  }
	};
	
	/**
	 * Destroy the fragment.
	 */
	
	Fragment.prototype.destroy = function () {
	  if (this.parentFrag) {
	    this.parentFrag.childFrags.$remove(this);
	  }
	  this.node.__v_frag = null;
	  this.unlink();
	};
	
	/**
	 * Call attach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */
	
	function attach(child) {
	  if (!child._isAttached && inDoc(child.$el)) {
	    child._callHook('attached');
	  }
	}
	
	/**
	 * Call detach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */
	
	function detach(child) {
	  if (child._isAttached && !inDoc(child.$el)) {
	    child._callHook('detached');
	  }
	}
	
	var linkerCache = new Cache(5000);
	
	/**
	 * A factory that can be used to create instances of a
	 * fragment. Caches the compiled linker if possible.
	 *
	 * @param {Vue} vm
	 * @param {Element|String} el
	 */
	function FragmentFactory(vm, el) {
	  this.vm = vm;
	  var template;
	  var isString = typeof el === 'string';
	  if (isString || isTemplate(el)) {
	    template = parseTemplate(el, true);
	  } else {
	    template = document.createDocumentFragment();
	    template.appendChild(el);
	  }
	  this.template = template;
	  // linker can be cached, but only for components
	  var linker;
	  var cid = vm.constructor.cid;
	  if (cid > 0) {
	    var cacheId = cid + (isString ? el : getOuterHTML(el));
	    linker = linkerCache.get(cacheId);
	    if (!linker) {
	      linker = compile(template, vm.$options, true);
	      linkerCache.put(cacheId, linker);
	    }
	  } else {
	    linker = compile(template, vm.$options, true);
	  }
	  this.linker = linker;
	}
	
	/**
	 * Create a fragment instance with given host and scope.
	 *
	 * @param {Vue} host
	 * @param {Object} scope
	 * @param {Fragment} parentFrag
	 */
	
	FragmentFactory.prototype.create = function (host, scope, parentFrag) {
	  var frag = cloneNode(this.template);
	  return new Fragment(this.linker, this.vm, frag, host, scope, parentFrag);
	};
	
	var ON = 700;
	var MODEL = 800;
	var BIND = 850;
	var TRANSITION = 1100;
	var EL = 1500;
	var COMPONENT = 1500;
	var PARTIAL = 1750;
	var FOR = 2000;
	var IF = 2000;
	var SLOT = 2100;
	
	var uid$3 = 0;
	
	var vFor = {
	
	  priority: FOR,
	  terminal: true,
	
	  params: ['track-by', 'stagger', 'enter-stagger', 'leave-stagger'],
	
	  bind: function bind() {
	    // support "item in/of items" syntax
	    var inMatch = this.expression.match(/(.*) (?:in|of) (.*)/);
	    if (inMatch) {
	      var itMatch = inMatch[1].match(/\((.*),(.*)\)/);
	      if (itMatch) {
	        this.iterator = itMatch[1].trim();
	        this.alias = itMatch[2].trim();
	      } else {
	        this.alias = inMatch[1].trim();
	      }
	      this.expression = inMatch[2];
	    }
	
	    if (!this.alias) {
	      process.env.NODE_ENV !== 'production' && warn('Alias is required in v-for.');
	      return;
	    }
	
	    // uid as a cache identifier
	    this.id = '__v-for__' + ++uid$3;
	
	    // check if this is an option list,
	    // so that we know if we need to update the <select>'s
	    // v-model when the option list has changed.
	    // because v-model has a lower priority than v-for,
	    // the v-model is not bound here yet, so we have to
	    // retrive it in the actual updateModel() function.
	    var tag = this.el.tagName;
	    this.isOption = (tag === 'OPTION' || tag === 'OPTGROUP') && this.el.parentNode.tagName === 'SELECT';
	
	    // setup anchor nodes
	    this.start = createAnchor('v-for-start');
	    this.end = createAnchor('v-for-end');
	    replace(this.el, this.end);
	    before(this.start, this.end);
	
	    // cache
	    this.cache = Object.create(null);
	
	    // fragment factory
	    this.factory = new FragmentFactory(this.vm, this.el);
	  },
	
	  update: function update(data) {
	    this.diff(data);
	    this.updateRef();
	    this.updateModel();
	  },
	
	  /**
	   * Diff, based on new data and old data, determine the
	   * minimum amount of DOM manipulations needed to make the
	   * DOM reflect the new data Array.
	   *
	   * The algorithm diffs the new data Array by storing a
	   * hidden reference to an owner vm instance on previously
	   * seen data. This allows us to achieve O(n) which is
	   * better than a levenshtein distance based algorithm,
	   * which is O(m * n).
	   *
	   * @param {Array} data
	   */
	
	  diff: function diff(data) {
	    // check if the Array was converted from an Object
	    var item = data[0];
	    var convertedFromObject = this.fromObject = isObject(item) && hasOwn(item, '$key') && hasOwn(item, '$value');
	
	    var trackByKey = this.params.trackBy;
	    var oldFrags = this.frags;
	    var frags = this.frags = new Array(data.length);
	    var alias = this.alias;
	    var iterator = this.iterator;
	    var start = this.start;
	    var end = this.end;
	    var inDocument = inDoc(start);
	    var init = !oldFrags;
	    var i, l, frag, key, value, primitive;
	
	    // First pass, go through the new Array and fill up
	    // the new frags array. If a piece of data has a cached
	    // instance for it, we reuse it. Otherwise build a new
	    // instance.
	    for (i = 0, l = data.length; i < l; i++) {
	      item = data[i];
	      key = convertedFromObject ? item.$key : null;
	      value = convertedFromObject ? item.$value : item;
	      primitive = !isObject(value);
	      frag = !init && this.getCachedFrag(value, i, key);
	      if (frag) {
	        // reusable fragment
	        frag.reused = true;
	        // update $index
	        frag.scope.$index = i;
	        // update $key
	        if (key) {
	          frag.scope.$key = key;
	        }
	        // update iterator
	        if (iterator) {
	          frag.scope[iterator] = key !== null ? key : i;
	        }
	        // update data for track-by, object repeat &
	        // primitive values.
	        if (trackByKey || convertedFromObject || primitive) {
	          withoutConversion(function () {
	            frag.scope[alias] = value;
	          });
	        }
	      } else {
	        // new isntance
	        frag = this.create(value, alias, i, key);
	        frag.fresh = !init;
	      }
	      frags[i] = frag;
	      if (init) {
	        frag.before(end);
	      }
	    }
	
	    // we're done for the initial render.
	    if (init) {
	      return;
	    }
	
	    // Second pass, go through the old fragments and
	    // destroy those who are not reused (and remove them
	    // from cache)
	    var removalIndex = 0;
	    var totalRemoved = oldFrags.length - frags.length;
	    // when removing a large number of fragments, watcher removal
	    // turns out to be a perf bottleneck, so we batch the watcher
	    // removals into a single filter call!
	    this.vm._vForRemoving = true;
	    for (i = 0, l = oldFrags.length; i < l; i++) {
	      frag = oldFrags[i];
	      if (!frag.reused) {
	        this.deleteCachedFrag(frag);
	        this.remove(frag, removalIndex++, totalRemoved, inDocument);
	      }
	    }
	    this.vm._vForRemoving = false;
	    if (removalIndex) {
	      this.vm._watchers = this.vm._watchers.filter(function (w) {
	        return w.active;
	      });
	    }
	
	    // Final pass, move/insert new fragments into the
	    // right place.
	    var targetPrev, prevEl, currentPrev;
	    var insertionIndex = 0;
	    for (i = 0, l = frags.length; i < l; i++) {
	      frag = frags[i];
	      // this is the frag that we should be after
	      targetPrev = frags[i - 1];
	      prevEl = targetPrev ? targetPrev.staggerCb ? targetPrev.staggerAnchor : targetPrev.end || targetPrev.node : start;
	      if (frag.reused && !frag.staggerCb) {
	        currentPrev = findPrevFrag(frag, start, this.id);
	        if (currentPrev !== targetPrev && (!currentPrev ||
	        // optimization for moving a single item.
	        // thanks to suggestions by @livoras in #1807
	        findPrevFrag(currentPrev, start, this.id) !== targetPrev)) {
	          this.move(frag, prevEl);
	        }
	      } else {
	        // new instance, or still in stagger.
	        // insert with updated stagger index.
	        this.insert(frag, insertionIndex++, prevEl, inDocument);
	      }
	      frag.reused = frag.fresh = false;
	    }
	  },
	
	  /**
	   * Create a new fragment instance.
	   *
	   * @param {*} value
	   * @param {String} alias
	   * @param {Number} index
	   * @param {String} [key]
	   * @return {Fragment}
	   */
	
	  create: function create(value, alias, index, key) {
	    var host = this._host;
	    // create iteration scope
	    var parentScope = this._scope || this.vm;
	    var scope = Object.create(parentScope);
	    // ref holder for the scope
	    scope.$refs = Object.create(parentScope.$refs);
	    scope.$els = Object.create(parentScope.$els);
	    // make sure point $parent to parent scope
	    scope.$parent = parentScope;
	    // for two-way binding on alias
	    scope.$forContext = this;
	    // define scope properties
	    // important: define the scope alias without forced conversion
	    // so that frozen data structures remain non-reactive.
	    withoutConversion(function () {
	      defineReactive(scope, alias, value);
	    });
	    defineReactive(scope, '$index', index);
	    if (key) {
	      defineReactive(scope, '$key', key);
	    } else if (scope.$key) {
	      // avoid accidental fallback
	      def(scope, '$key', null);
	    }
	    if (this.iterator) {
	      defineReactive(scope, this.iterator, key !== null ? key : index);
	    }
	    var frag = this.factory.create(host, scope, this._frag);
	    frag.forId = this.id;
	    this.cacheFrag(value, frag, index, key);
	    return frag;
	  },
	
	  /**
	   * Update the v-ref on owner vm.
	   */
	
	  updateRef: function updateRef() {
	    var ref = this.descriptor.ref;
	    if (!ref) return;
	    var hash = (this._scope || this.vm).$refs;
	    var refs;
	    if (!this.fromObject) {
	      refs = this.frags.map(findVmFromFrag);
	    } else {
	      refs = {};
	      this.frags.forEach(function (frag) {
	        refs[frag.scope.$key] = findVmFromFrag(frag);
	      });
	    }
	    hash[ref] = refs;
	  },
	
	  /**
	   * For option lists, update the containing v-model on
	   * parent <select>.
	   */
	
	  updateModel: function updateModel() {
	    if (this.isOption) {
	      var parent = this.start.parentNode;
	      var model = parent && parent.__v_model;
	      if (model) {
	        model.forceUpdate();
	      }
	    }
	  },
	
	  /**
	   * Insert a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Node} prevEl
	   * @param {Boolean} inDocument
	   */
	
	  insert: function insert(frag, index, prevEl, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	    }
	    var staggerAmount = this.getStagger(frag, index, null, 'enter');
	    if (inDocument && staggerAmount) {
	      // create an anchor and insert it synchronously,
	      // so that we can resolve the correct order without
	      // worrying about some elements not inserted yet
	      var anchor = frag.staggerAnchor;
	      if (!anchor) {
	        anchor = frag.staggerAnchor = createAnchor('stagger-anchor');
	        anchor.__v_frag = frag;
	      }
	      after(anchor, prevEl);
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.before(anchor);
	        remove(anchor);
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      frag.before(prevEl.nextSibling);
	    }
	  },
	
	  /**
	   * Remove a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {Boolean} inDocument
	   */
	
	  remove: function remove(frag, index, total, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	      // it's not possible for the same frag to be removed
	      // twice, so if we have a pending stagger callback,
	      // it means this frag is queued for enter but removed
	      // before its transition started. Since it is already
	      // destroyed, we can just leave it in detached state.
	      return;
	    }
	    var staggerAmount = this.getStagger(frag, index, total, 'leave');
	    if (inDocument && staggerAmount) {
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.remove();
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      frag.remove();
	    }
	  },
	
	  /**
	   * Move a fragment to a new position.
	   * Force no transition.
	   *
	   * @param {Fragment} frag
	   * @param {Node} prevEl
	   */
	
	  move: function move(frag, prevEl) {
	    // fix a common issue with Sortable:
	    // if prevEl doesn't have nextSibling, this means it's
	    // been dragged after the end anchor. Just re-position
	    // the end anchor to the end of the container.
	    /* istanbul ignore if */
	    if (!prevEl.nextSibling) {
	      this.end.parentNode.appendChild(this.end);
	    }
	    frag.before(prevEl.nextSibling, false);
	  },
	
	  /**
	   * Cache a fragment using track-by or the object key.
	   *
	   * @param {*} value
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {String} [key]
	   */
	
	  cacheFrag: function cacheFrag(value, frag, index, key) {
	    var trackByKey = this.params.trackBy;
	    var cache = this.cache;
	    var primitive = !isObject(value);
	    var id;
	    if (key || trackByKey || primitive) {
	      id = trackByKey ? trackByKey === '$index' ? index : value[trackByKey] : key || value;
	      if (!cache[id]) {
	        cache[id] = frag;
	      } else if (trackByKey !== '$index') {
	        process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	      }
	    } else {
	      id = this.id;
	      if (hasOwn(value, id)) {
	        if (value[id] === null) {
	          value[id] = frag;
	        } else {
	          process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	        }
	      } else {
	        def(value, id, frag);
	      }
	    }
	    frag.raw = value;
	  },
	
	  /**
	   * Get a cached fragment from the value/index/key
	   *
	   * @param {*} value
	   * @param {Number} index
	   * @param {String} key
	   * @return {Fragment}
	   */
	
	  getCachedFrag: function getCachedFrag(value, index, key) {
	    var trackByKey = this.params.trackBy;
	    var primitive = !isObject(value);
	    var frag;
	    if (key || trackByKey || primitive) {
	      var id = trackByKey ? trackByKey === '$index' ? index : value[trackByKey] : key || value;
	      frag = this.cache[id];
	    } else {
	      frag = value[this.id];
	    }
	    if (frag && (frag.reused || frag.fresh)) {
	      process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	    }
	    return frag;
	  },
	
	  /**
	   * Delete a fragment from cache.
	   *
	   * @param {Fragment} frag
	   */
	
	  deleteCachedFrag: function deleteCachedFrag(frag) {
	    var value = frag.raw;
	    var trackByKey = this.params.trackBy;
	    var scope = frag.scope;
	    var index = scope.$index;
	    // fix #948: avoid accidentally fall through to
	    // a parent repeater which happens to have $key.
	    var key = hasOwn(scope, '$key') && scope.$key;
	    var primitive = !isObject(value);
	    if (trackByKey || key || primitive) {
	      var id = trackByKey ? trackByKey === '$index' ? index : value[trackByKey] : key || value;
	      this.cache[id] = null;
	    } else {
	      value[this.id] = null;
	      frag.raw = null;
	    }
	  },
	
	  /**
	   * Get the stagger amount for an insertion/removal.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {String} type
	   */
	
	  getStagger: function getStagger(frag, index, total, type) {
	    type = type + 'Stagger';
	    var trans = frag.node.__v_trans;
	    var hooks = trans && trans.hooks;
	    var hook = hooks && (hooks[type] || hooks.stagger);
	    return hook ? hook.call(frag, index, total) : index * parseInt(this.params[type] || this.params.stagger, 10);
	  },
	
	  /**
	   * Pre-process the value before piping it through the
	   * filters. This is passed to and called by the watcher.
	   */
	
	  _preProcess: function _preProcess(value) {
	    // regardless of type, store the un-filtered raw value.
	    this.rawValue = value;
	    return value;
	  },
	
	  /**
	   * Post-process the value after it has been piped through
	   * the filters. This is passed to and called by the watcher.
	   *
	   * It is necessary for this to be called during the
	   * wathcer's dependency collection phase because we want
	   * the v-for to update when the source Object is mutated.
	   */
	
	  _postProcess: function _postProcess(value) {
	    if (isArray(value)) {
	      return value;
	    } else if (isPlainObject(value)) {
	      // convert plain object to array.
	      var keys = Object.keys(value);
	      var i = keys.length;
	      var res = new Array(i);
	      var key;
	      while (i--) {
	        key = keys[i];
	        res[i] = {
	          $key: key,
	          $value: value[key]
	        };
	      }
	      return res;
	    } else {
	      if (typeof value === 'number' && !isNaN(value)) {
	        value = range(value);
	      }
	      return value || [];
	    }
	  },
	
	  unbind: function unbind() {
	    if (this.descriptor.ref) {
	      (this._scope || this.vm).$refs[this.descriptor.ref] = null;
	    }
	    if (this.frags) {
	      var i = this.frags.length;
	      var frag;
	      while (i--) {
	        frag = this.frags[i];
	        this.deleteCachedFrag(frag);
	        frag.destroy();
	      }
	    }
	  }
	};
	
	/**
	 * Helper to find the previous element that is a fragment
	 * anchor. This is necessary because a destroyed frag's
	 * element could still be lingering in the DOM before its
	 * leaving transition finishes, but its inserted flag
	 * should have been set to false so we can skip them.
	 *
	 * If this is a block repeat, we want to make sure we only
	 * return frag that is bound to this v-for. (see #929)
	 *
	 * @param {Fragment} frag
	 * @param {Comment|Text} anchor
	 * @param {String} id
	 * @return {Fragment}
	 */
	
	function findPrevFrag(frag, anchor, id) {
	  var el = frag.node.previousSibling;
	  /* istanbul ignore if */
	  if (!el) return;
	  frag = el.__v_frag;
	  while ((!frag || frag.forId !== id || !frag.inserted) && el !== anchor) {
	    el = el.previousSibling;
	    /* istanbul ignore if */
	    if (!el) return;
	    frag = el.__v_frag;
	  }
	  return frag;
	}
	
	/**
	 * Find a vm from a fragment.
	 *
	 * @param {Fragment} frag
	 * @return {Vue|undefined}
	 */
	
	function findVmFromFrag(frag) {
	  var node = frag.node;
	  // handle multi-node frag
	  if (frag.end) {
	    while (!node.__vue__ && node !== frag.end && node.nextSibling) {
	      node = node.nextSibling;
	    }
	  }
	  return node.__vue__;
	}
	
	/**
	 * Create a range array from given number.
	 *
	 * @param {Number} n
	 * @return {Array}
	 */
	
	function range(n) {
	  var i = -1;
	  var ret = new Array(Math.floor(n));
	  while (++i < n) {
	    ret[i] = i;
	  }
	  return ret;
	}
	
	if (process.env.NODE_ENV !== 'production') {
	  vFor.warnDuplicate = function (value) {
	    warn('Duplicate value found in v-for="' + this.descriptor.raw + '": ' + JSON.stringify(value) + '. Use track-by="$index" if ' + 'you are expecting duplicate values.');
	  };
	}
	
	var vIf = {
	
	  priority: IF,
	  terminal: true,
	
	  bind: function bind() {
	    var el = this.el;
	    if (!el.__vue__) {
	      // check else block
	      var next = el.nextElementSibling;
	      if (next && getAttr(next, 'v-else') !== null) {
	        remove(next);
	        this.elseEl = next;
	      }
	      // check main block
	      this.anchor = createAnchor('v-if');
	      replace(el, this.anchor);
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-if="' + this.expression + '" cannot be ' + 'used on an instance root element.');
	      this.invalid = true;
	    }
	  },
	
	  update: function update(value) {
	    if (this.invalid) return;
	    if (value) {
	      if (!this.frag) {
	        this.insert();
	      }
	    } else {
	      this.remove();
	    }
	  },
	
	  insert: function insert() {
	    if (this.elseFrag) {
	      this.elseFrag.remove();
	      this.elseFrag = null;
	    }
	    // lazy init factory
	    if (!this.factory) {
	      this.factory = new FragmentFactory(this.vm, this.el);
	    }
	    this.frag = this.factory.create(this._host, this._scope, this._frag);
	    this.frag.before(this.anchor);
	  },
	
	  remove: function remove() {
	    if (this.frag) {
	      this.frag.remove();
	      this.frag = null;
	    }
	    if (this.elseEl && !this.elseFrag) {
	      if (!this.elseFactory) {
	        this.elseFactory = new FragmentFactory(this.elseEl._context || this.vm, this.elseEl);
	      }
	      this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag);
	      this.elseFrag.before(this.anchor);
	    }
	  },
	
	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	    if (this.elseFrag) {
	      this.elseFrag.destroy();
	    }
	  }
	};
	
	var show = {
	
	  bind: function bind() {
	    // check else block
	    var next = this.el.nextElementSibling;
	    if (next && getAttr(next, 'v-else') !== null) {
	      this.elseEl = next;
	    }
	  },
	
	  update: function update(value) {
	    this.apply(this.el, value);
	    if (this.elseEl) {
	      this.apply(this.elseEl, !value);
	    }
	  },
	
	  apply: function apply(el, value) {
	    if (inDoc(el)) {
	      applyTransition(el, value ? 1 : -1, toggle, this.vm);
	    } else {
	      toggle();
	    }
	    function toggle() {
	      el.style.display = value ? '' : 'none';
	    }
	  }
	};
	
	var text$2 = {
	
	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	    var isRange = el.type === 'range';
	    var lazy = this.params.lazy;
	    var number = this.params.number;
	    var debounce = this.params.debounce;
	
	    // handle composition events.
	    //   http://blog.evanyou.me/2014/01/03/composition-event/
	    // skip this for Android because it handles composition
	    // events quite differently. Android doesn't trigger
	    // composition events for language input methods e.g.
	    // Chinese, but instead triggers them for spelling
	    // suggestions... (see Discussion/#162)
	    var composing = false;
	    if (!isAndroid && !isRange) {
	      this.on('compositionstart', function () {
	        composing = true;
	      });
	      this.on('compositionend', function () {
	        composing = false;
	        // in IE11 the "compositionend" event fires AFTER
	        // the "input" event, so the input handler is blocked
	        // at the end... have to call it here.
	        //
	        // #1327: in lazy mode this is unecessary.
	        if (!lazy) {
	          self.listener();
	        }
	      });
	    }
	
	    // prevent messing with the input when user is typing,
	    // and force update on blur.
	    this.focused = false;
	    if (!isRange && !lazy) {
	      this.on('focus', function () {
	        self.focused = true;
	      });
	      this.on('blur', function () {
	        self.focused = false;
	        // do not sync value after fragment removal (#2017)
	        if (!self._frag || self._frag.inserted) {
	          self.rawListener();
	        }
	      });
	    }
	
	    // Now attach the main listener
	    this.listener = this.rawListener = function () {
	      if (composing || !self._bound) {
	        return;
	      }
	      var val = number || isRange ? toNumber(el.value) : el.value;
	      self.set(val);
	      // force update on next tick to avoid lock & same value
	      // also only update when user is not typing
	      nextTick(function () {
	        if (self._bound && !self.focused) {
	          self.update(self._watcher.value);
	        }
	      });
	    };
	
	    // apply debounce
	    if (debounce) {
	      this.listener = _debounce(this.listener, debounce);
	    }
	
	    // Support jQuery events, since jQuery.trigger() doesn't
	    // trigger native events in some cases and some plugins
	    // rely on $.trigger()
	    //
	    // We want to make sure if a listener is attached using
	    // jQuery, it is also removed with jQuery, that's why
	    // we do the check for each directive instance and
	    // store that check result on itself. This also allows
	    // easier test coverage control by unsetting the global
	    // jQuery variable in tests.
	    this.hasjQuery = typeof jQuery === 'function';
	    if (this.hasjQuery) {
	      var method = jQuery.fn.on ? 'on' : 'bind';
	      jQuery(el)[method]('change', this.rawListener);
	      if (!lazy) {
	        jQuery(el)[method]('input', this.listener);
	      }
	    } else {
	      this.on('change', this.rawListener);
	      if (!lazy) {
	        this.on('input', this.listener);
	      }
	    }
	
	    // IE9 doesn't fire input event on backspace/del/cut
	    if (!lazy && isIE9) {
	      this.on('cut', function () {
	        nextTick(self.listener);
	      });
	      this.on('keyup', function (e) {
	        if (e.keyCode === 46 || e.keyCode === 8) {
	          self.listener();
	        }
	      });
	    }
	
	    // set initial value if present
	    if (el.hasAttribute('value') || el.tagName === 'TEXTAREA' && el.value.trim()) {
	      this.afterBind = this.listener;
	    }
	  },
	
	  update: function update(value) {
	    this.el.value = _toString(value);
	  },
	
	  unbind: function unbind() {
	    var el = this.el;
	    if (this.hasjQuery) {
	      var method = jQuery.fn.off ? 'off' : 'unbind';
	      jQuery(el)[method]('change', this.listener);
	      jQuery(el)[method]('input', this.listener);
	    }
	  }
	};
	
	var radio = {
	
	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	
	    this.getValue = function () {
	      // value overwrite via v-bind:value
	      if (el.hasOwnProperty('_value')) {
	        return el._value;
	      }
	      var val = el.value;
	      if (self.params.number) {
	        val = toNumber(val);
	      }
	      return val;
	    };
	
	    this.listener = function () {
	      self.set(self.getValue());
	    };
	    this.on('change', this.listener);
	
	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },
	
	  update: function update(value) {
	    this.el.checked = looseEqual(value, this.getValue());
	  }
	};
	
	var select = {
	
	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	
	    // method to force update DOM using latest value.
	    this.forceUpdate = function () {
	      if (self._watcher) {
	        self.update(self._watcher.get());
	      }
	    };
	
	    // check if this is a multiple select
	    var multiple = this.multiple = el.hasAttribute('multiple');
	
	    // attach listener
	    this.listener = function () {
	      var value = getValue(el, multiple);
	      value = self.params.number ? isArray(value) ? value.map(toNumber) : toNumber(value) : value;
	      self.set(value);
	    };
	    this.on('change', this.listener);
	
	    // if has initial value, set afterBind
	    var initValue = getValue(el, multiple, true);
	    if (multiple && initValue.length || !multiple && initValue !== null) {
	      this.afterBind = this.listener;
	    }
	
	    // All major browsers except Firefox resets
	    // selectedIndex with value -1 to 0 when the element
	    // is appended to a new parent, therefore we have to
	    // force a DOM update whenever that happens...
	    this.vm.$on('hook:attached', this.forceUpdate);
	  },
	
	  update: function update(value) {
	    var el = this.el;
	    el.selectedIndex = -1;
	    var multi = this.multiple && isArray(value);
	    var options = el.options;
	    var i = options.length;
	    var op, val;
	    while (i--) {
	      op = options[i];
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      /* eslint-disable eqeqeq */
	      op.selected = multi ? indexOf$1(value, val) > -1 : looseEqual(value, val);
	      /* eslint-enable eqeqeq */
	    }
	  },
	
	  unbind: function unbind() {
	    /* istanbul ignore next */
	    this.vm.$off('hook:attached', this.forceUpdate);
	  }
	};
	
	/**
	 * Get select value
	 *
	 * @param {SelectElement} el
	 * @param {Boolean} multi
	 * @param {Boolean} init
	 * @return {Array|*}
	 */
	
	function getValue(el, multi, init) {
	  var res = multi ? [] : null;
	  var op, val, selected;
	  for (var i = 0, l = el.options.length; i < l; i++) {
	    op = el.options[i];
	    selected = init ? op.hasAttribute('selected') : op.selected;
	    if (selected) {
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      if (multi) {
	        res.push(val);
	      } else {
	        return val;
	      }
	    }
	  }
	  return res;
	}
	
	/**
	 * Native Array.indexOf uses strict equal, but in this
	 * case we need to match string/numbers with custom equal.
	 *
	 * @param {Array} arr
	 * @param {*} val
	 */
	
	function indexOf$1(arr, val) {
	  var i = arr.length;
	  while (i--) {
	    if (looseEqual(arr[i], val)) {
	      return i;
	    }
	  }
	  return -1;
	}
	
	var checkbox = {
	
	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	
	    this.getValue = function () {
	      return el.hasOwnProperty('_value') ? el._value : self.params.number ? toNumber(el.value) : el.value;
	    };
	
	    function getBooleanValue() {
	      var val = el.checked;
	      if (val && el.hasOwnProperty('_trueValue')) {
	        return el._trueValue;
	      }
	      if (!val && el.hasOwnProperty('_falseValue')) {
	        return el._falseValue;
	      }
	      return val;
	    }
	
	    this.listener = function () {
	      var model = self._watcher.value;
	      if (isArray(model)) {
	        var val = self.getValue();
	        if (el.checked) {
	          if (indexOf(model, val) < 0) {
	            model.push(val);
	          }
	        } else {
	          model.$remove(val);
	        }
	      } else {
	        self.set(getBooleanValue());
	      }
	    };
	
	    this.on('change', this.listener);
	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },
	
	  update: function update(value) {
	    var el = this.el;
	    if (isArray(value)) {
	      el.checked = indexOf(value, this.getValue()) > -1;
	    } else {
	      if (el.hasOwnProperty('_trueValue')) {
	        el.checked = looseEqual(value, el._trueValue);
	      } else {
	        el.checked = !!value;
	      }
	    }
	  }
	};
	
	var handlers = {
	  text: text$2,
	  radio: radio,
	  select: select,
	  checkbox: checkbox
	};
	
	var model = {
	
	  priority: MODEL,
	  twoWay: true,
	  handlers: handlers,
	  params: ['lazy', 'number', 'debounce'],
	
	  /**
	   * Possible elements:
	   *   <select>
	   *   <textarea>
	   *   <input type="*">
	   *     - text
	   *     - checkbox
	   *     - radio
	   *     - number
	   */
	
	  bind: function bind() {
	    // friendly warning...
	    this.checkFilters();
	    if (this.hasRead && !this.hasWrite) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using a read-only filter with ' + 'v-model. You might want to use a two-way filter ' + 'to ensure correct behavior.');
	    }
	    var el = this.el;
	    var tag = el.tagName;
	    var handler;
	    if (tag === 'INPUT') {
	      handler = handlers[el.type] || handlers.text;
	    } else if (tag === 'SELECT') {
	      handler = handlers.select;
	    } else if (tag === 'TEXTAREA') {
	      handler = handlers.text;
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-model does not support element type: ' + tag);
	      return;
	    }
	    el.__v_model = this;
	    handler.bind.call(this);
	    this.update = handler.update;
	    this._unbind = handler.unbind;
	  },
	
	  /**
	   * Check read/write filter stats.
	   */
	
	  checkFilters: function checkFilters() {
	    var filters = this.filters;
	    if (!filters) return;
	    var i = filters.length;
	    while (i--) {
	      var filter = resolveAsset(this.vm.$options, 'filters', filters[i].name);
	      if (typeof filter === 'function' || filter.read) {
	        this.hasRead = true;
	      }
	      if (filter.write) {
	        this.hasWrite = true;
	      }
	    }
	  },
	
	  unbind: function unbind() {
	    this.el.__v_model = null;
	    this._unbind && this._unbind();
	  }
	};
	
	// keyCode aliases
	var keyCodes = {
	  esc: 27,
	  tab: 9,
	  enter: 13,
	  space: 32,
	  'delete': [8, 46],
	  up: 38,
	  left: 37,
	  right: 39,
	  down: 40
	};
	
	function keyFilter(handler, keys) {
	  var codes = keys.map(function (key) {
	    var charCode = key.charCodeAt(0);
	    if (charCode > 47 && charCode < 58) {
	      return parseInt(key, 10);
	    }
	    if (key.length === 1) {
	      charCode = key.toUpperCase().charCodeAt(0);
	      if (charCode > 64 && charCode < 91) {
	        return charCode;
	      }
	    }
	    return keyCodes[key];
	  });
	  codes = [].concat.apply([], codes);
	  return function keyHandler(e) {
	    if (codes.indexOf(e.keyCode) > -1) {
	      return handler.call(this, e);
	    }
	  };
	}
	
	function stopFilter(handler) {
	  return function stopHandler(e) {
	    e.stopPropagation();
	    return handler.call(this, e);
	  };
	}
	
	function preventFilter(handler) {
	  return function preventHandler(e) {
	    e.preventDefault();
	    return handler.call(this, e);
	  };
	}
	
	function selfFilter(handler) {
	  return function selfHandler(e) {
	    if (e.target === e.currentTarget) {
	      return handler.call(this, e);
	    }
	  };
	}
	
	var on$1 = {
	
	  priority: ON,
	  acceptStatement: true,
	  keyCodes: keyCodes,
	
	  bind: function bind() {
	    // deal with iframes
	    if (this.el.tagName === 'IFRAME' && this.arg !== 'load') {
	      var self = this;
	      this.iframeBind = function () {
	        on(self.el.contentWindow, self.arg, self.handler, self.modifiers.capture);
	      };
	      this.on('load', this.iframeBind);
	    }
	  },
	
	  update: function update(handler) {
	    // stub a noop for v-on with no value,
	    // e.g. @mousedown.prevent
	    if (!this.descriptor.raw) {
	      handler = function () {};
	    }
	
	    if (typeof handler !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('v-on:' + this.arg + '="' + this.expression + '" expects a function value, ' + 'got ' + handler);
	      return;
	    }
	
	    // apply modifiers
	    if (this.modifiers.stop) {
	      handler = stopFilter(handler);
	    }
	    if (this.modifiers.prevent) {
	      handler = preventFilter(handler);
	    }
	    if (this.modifiers.self) {
	      handler = selfFilter(handler);
	    }
	    // key filter
	    var keys = Object.keys(this.modifiers).filter(function (key) {
	      return key !== 'stop' && key !== 'prevent' && key !== 'self';
	    });
	    if (keys.length) {
	      handler = keyFilter(handler, keys);
	    }
	
	    this.reset();
	    this.handler = handler;
	
	    if (this.iframeBind) {
	      this.iframeBind();
	    } else {
	      on(this.el, this.arg, this.handler, this.modifiers.capture);
	    }
	  },
	
	  reset: function reset() {
	    var el = this.iframeBind ? this.el.contentWindow : this.el;
	    if (this.handler) {
	      off(el, this.arg, this.handler);
	    }
	  },
	
	  unbind: function unbind() {
	    this.reset();
	  }
	};
	
	var prefixes = ['-webkit-', '-moz-', '-ms-'];
	var camelPrefixes = ['Webkit', 'Moz', 'ms'];
	var importantRE = /!important;?$/;
	var propCache = Object.create(null);
	
	var testEl = null;
	
	var style = {
	
	  deep: true,
	
	  update: function update(value) {
	    if (typeof value === 'string') {
	      this.el.style.cssText = value;
	    } else if (isArray(value)) {
	      this.handleObject(value.reduce(extend, {}));
	    } else {
	      this.handleObject(value || {});
	    }
	  },
	
	  handleObject: function handleObject(value) {
	    // cache object styles so that only changed props
	    // are actually updated.
	    var cache = this.cache || (this.cache = {});
	    var name, val;
	    for (name in cache) {
	      if (!(name in value)) {
	        this.handleSingle(name, null);
	        delete cache[name];
	      }
	    }
	    for (name in value) {
	      val = value[name];
	      if (val !== cache[name]) {
	        cache[name] = val;
	        this.handleSingle(name, val);
	      }
	    }
	  },
	
	  handleSingle: function handleSingle(prop, value) {
	    prop = normalize(prop);
	    if (!prop) return; // unsupported prop
	    // cast possible numbers/booleans into strings
	    if (value != null) value += '';
	    if (value) {
	      var isImportant = importantRE.test(value) ? 'important' : '';
	      if (isImportant) {
	        value = value.replace(importantRE, '').trim();
	      }
	      this.el.style.setProperty(prop, value, isImportant);
	    } else {
	      this.el.style.removeProperty(prop);
	    }
	  }
	
	};
	
	/**
	 * Normalize a CSS property name.
	 * - cache result
	 * - auto prefix
	 * - camelCase -> dash-case
	 *
	 * @param {String} prop
	 * @return {String}
	 */
	
	function normalize(prop) {
	  if (propCache[prop]) {
	    return propCache[prop];
	  }
	  var res = prefix(prop);
	  propCache[prop] = propCache[res] = res;
	  return res;
	}
	
	/**
	 * Auto detect the appropriate prefix for a CSS property.
	 * https://gist.github.com/paulirish/523692
	 *
	 * @param {String} prop
	 * @return {String}
	 */
	
	function prefix(prop) {
	  prop = hyphenate(prop);
	  var camel = camelize(prop);
	  var upper = camel.charAt(0).toUpperCase() + camel.slice(1);
	  if (!testEl) {
	    testEl = document.createElement('div');
	  }
	  var i = prefixes.length;
	  var prefixed;
	  while (i--) {
	    prefixed = camelPrefixes[i] + upper;
	    if (prefixed in testEl.style) {
	      return prefixes[i] + prop;
	    }
	  }
	  if (camel in testEl.style) {
	    return prop;
	  }
	}
	
	// xlink
	var xlinkNS = 'http://www.w3.org/1999/xlink';
	var xlinkRE = /^xlink:/;
	
	// check for attributes that prohibit interpolations
	var disallowedInterpAttrRE = /^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/;
	// these attributes should also set their corresponding properties
	// because they only affect the initial state of the element
	var attrWithPropsRE = /^(?:value|checked|selected|muted)$/;
	// these attributes expect enumrated values of "true" or "false"
	// but are not boolean attributes
	var enumeratedAttrRE = /^(?:draggable|contenteditable|spellcheck)$/;
	
	// these attributes should set a hidden property for
	// binding v-model to object values
	var modelProps = {
	  value: '_value',
	  'true-value': '_trueValue',
	  'false-value': '_falseValue'
	};
	
	var bind$1 = {
	
	  priority: BIND,
	
	  bind: function bind() {
	    var attr = this.arg;
	    var tag = this.el.tagName;
	    // should be deep watch on object mode
	    if (!attr) {
	      this.deep = true;
	    }
	    // handle interpolation bindings
	    var descriptor = this.descriptor;
	    var tokens = descriptor.interp;
	    if (tokens) {
	      // handle interpolations with one-time tokens
	      if (descriptor.hasOneTime) {
	        this.expression = tokensToExp(tokens, this._scope || this.vm);
	      }
	
	      // only allow binding on native attributes
	      if (disallowedInterpAttrRE.test(attr) || attr === 'name' && (tag === 'PARTIAL' || tag === 'SLOT')) {
	        process.env.NODE_ENV !== 'production' && warn(attr + '="' + descriptor.raw + '": ' + 'attribute interpolation is not allowed in Vue.js ' + 'directives and special attributes.');
	        this.el.removeAttribute(attr);
	        this.invalid = true;
	      }
	
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production') {
	        var raw = attr + '="' + descriptor.raw + '": ';
	        // warn src
	        if (attr === 'src') {
	          warn(raw + 'interpolation in "src" attribute will cause ' + 'a 404 request. Use v-bind:src instead.');
	        }
	
	        // warn style
	        if (attr === 'style') {
	          warn(raw + 'interpolation in "style" attribute will cause ' + 'the attribute to be discarded in Internet Explorer. ' + 'Use v-bind:style instead.');
	        }
	      }
	    }
	  },
	
	  update: function update(value) {
	    if (this.invalid) {
	      return;
	    }
	    var attr = this.arg;
	    if (this.arg) {
	      this.handleSingle(attr, value);
	    } else {
	      this.handleObject(value || {});
	    }
	  },
	
	  // share object handler with v-bind:class
	  handleObject: style.handleObject,
	
	  handleSingle: function handleSingle(attr, value) {
	    var el = this.el;
	    var interp = this.descriptor.interp;
	    if (this.modifiers.camel) {
	      attr = camelize(attr);
	    }
	    if (!interp && attrWithPropsRE.test(attr) && attr in el) {
	      el[attr] = attr === 'value' ? value == null // IE9 will set input.value to "null" for null...
	      ? '' : value : value;
	    }
	    // set model props
	    var modelProp = modelProps[attr];
	    if (!interp && modelProp) {
	      el[modelProp] = value;
	      // update v-model if present
	      var model = el.__v_model;
	      if (model) {
	        model.listener();
	      }
	    }
	    // do not set value attribute for textarea
	    if (attr === 'value' && el.tagName === 'TEXTAREA') {
	      el.removeAttribute(attr);
	      return;
	    }
	    // update attribute
	    if (enumeratedAttrRE.test(attr)) {
	      el.setAttribute(attr, value ? 'true' : 'false');
	    } else if (value != null && value !== false) {
	      if (attr === 'class') {
	        // handle edge case #1960:
	        // class interpolation should not overwrite Vue transition class
	        if (el.__v_trans) {
	          value += ' ' + el.__v_trans.id + '-transition';
	        }
	        setClass(el, value);
	      } else if (xlinkRE.test(attr)) {
	        el.setAttributeNS(xlinkNS, attr, value === true ? '' : value);
	      } else {
	        el.setAttribute(attr, value === true ? '' : value);
	      }
	    } else {
	      el.removeAttribute(attr);
	    }
	  }
	};
	
	var el = {
	
	  priority: EL,
	
	  bind: function bind() {
	    /* istanbul ignore if */
	    if (!this.arg) {
	      return;
	    }
	    var id = this.id = camelize(this.arg);
	    var refs = (this._scope || this.vm).$els;
	    if (hasOwn(refs, id)) {
	      refs[id] = this.el;
	    } else {
	      defineReactive(refs, id, this.el);
	    }
	  },
	
	  unbind: function unbind() {
	    var refs = (this._scope || this.vm).$els;
	    if (refs[this.id] === this.el) {
	      refs[this.id] = null;
	    }
	  }
	};
	
	var ref = {
	  bind: function bind() {
	    process.env.NODE_ENV !== 'production' && warn('v-ref:' + this.arg + ' must be used on a child ' + 'component. Found on <' + this.el.tagName.toLowerCase() + '>.');
	  }
	};
	
	var cloak = {
	  bind: function bind() {
	    var el = this.el;
	    this.vm.$once('pre-hook:compiled', function () {
	      el.removeAttribute('v-cloak');
	    });
	  }
	};
	
	// must export plain object
	var directives = {
	  text: text$1,
	  html: html,
	  'for': vFor,
	  'if': vIf,
	  show: show,
	  model: model,
	  on: on$1,
	  bind: bind$1,
	  el: el,
	  ref: ref,
	  cloak: cloak
	};
	
	var vClass = {
	
	  deep: true,
	
	  update: function update(value) {
	    if (value && typeof value === 'string') {
	      this.handleObject(stringToObject(value));
	    } else if (isPlainObject(value)) {
	      this.handleObject(value);
	    } else if (isArray(value)) {
	      this.handleArray(value);
	    } else {
	      this.cleanup();
	    }
	  },
	
	  handleObject: function handleObject(value) {
	    this.cleanup(value);
	    this.prevKeys = Object.keys(value);
	    setObjectClasses(this.el, value);
	  },
	
	  handleArray: function handleArray(value) {
	    this.cleanup(value);
	    for (var i = 0, l = value.length; i < l; i++) {
	      var val = value[i];
	      if (val && isPlainObject(val)) {
	        setObjectClasses(this.el, val);
	      } else if (val && typeof val === 'string') {
	        addClass(this.el, val);
	      }
	    }
	    this.prevKeys = value.slice();
	  },
	
	  cleanup: function cleanup(value) {
	    if (this.prevKeys) {
	      var i = this.prevKeys.length;
	      while (i--) {
	        var key = this.prevKeys[i];
	        if (!key) continue;
	        if (isPlainObject(key)) {
	          var keys = Object.keys(key);
	          for (var k = 0; k < keys.length; k++) {
	            removeClass(this.el, keys[k]);
	          }
	        } else {
	          removeClass(this.el, key);
	        }
	      }
	    }
	  }
	};
	
	function setObjectClasses(el, obj) {
	  var keys = Object.keys(obj);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i];
	    if (obj[key]) {
	      addClass(el, key);
	    }
	  }
	}
	
	function stringToObject(value) {
	  var res = {};
	  var keys = value.trim().split(/\s+/);
	  var i = keys.length;
	  while (i--) {
	    res[keys[i]] = true;
	  }
	  return res;
	}
	
	var component = {
	
	  priority: COMPONENT,
	
	  params: ['keep-alive', 'transition-mode', 'inline-template'],
	
	  /**
	   * Setup. Two possible usages:
	   *
	   * - static:
	   *   <comp> or <div v-component="comp">
	   *
	   * - dynamic:
	   *   <component :is="view">
	   */
	
	  bind: function bind() {
	    if (!this.el.__vue__) {
	      // keep-alive cache
	      this.keepAlive = this.params.keepAlive;
	      if (this.keepAlive) {
	        this.cache = {};
	      }
	      // check inline-template
	      if (this.params.inlineTemplate) {
	        // extract inline template as a DocumentFragment
	        this.inlineTemplate = extractContent(this.el, true);
	      }
	      // component resolution related state
	      this.pendingComponentCb = this.Component = null;
	      // transition related state
	      this.pendingRemovals = 0;
	      this.pendingRemovalCb = null;
	      // create a ref anchor
	      this.anchor = createAnchor('v-component');
	      replace(this.el, this.anchor);
	      // remove is attribute.
	      // this is removed during compilation, but because compilation is
	      // cached, when the component is used elsewhere this attribute
	      // will remain at link time.
	      this.el.removeAttribute('is');
	      // remove ref, same as above
	      if (this.descriptor.ref) {
	        this.el.removeAttribute('v-ref:' + hyphenate(this.descriptor.ref));
	      }
	      // if static, build right now.
	      if (this.literal) {
	        this.setComponent(this.expression);
	      }
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('cannot mount component "' + this.expression + '" ' + 'on already mounted element: ' + this.el);
	    }
	  },
	
	  /**
	   * Public update, called by the watcher in the dynamic
	   * literal scenario, e.g. <component :is="view">
	   */
	
	  update: function update(value) {
	    if (!this.literal) {
	      this.setComponent(value);
	    }
	  },
	
	  /**
	   * Switch dynamic components. May resolve the component
	   * asynchronously, and perform transition based on
	   * specified transition mode. Accepts a few additional
	   * arguments specifically for vue-router.
	   *
	   * The callback is called when the full transition is
	   * finished.
	   *
	   * @param {String} value
	   * @param {Function} [cb]
	   */
	
	  setComponent: function setComponent(value, cb) {
	    this.invalidatePending();
	    if (!value) {
	      // just remove current
	      this.unbuild(true);
	      this.remove(this.childVM, cb);
	      this.childVM = null;
	    } else {
	      var self = this;
	      this.resolveComponent(value, function () {
	        self.mountComponent(cb);
	      });
	    }
	  },
	
	  /**
	   * Resolve the component constructor to use when creating
	   * the child vm.
	   *
	   * @param {String|Function} value
	   * @param {Function} cb
	   */
	
	  resolveComponent: function resolveComponent(value, cb) {
	    var self = this;
	    this.pendingComponentCb = cancellable(function (Component) {
	      self.ComponentName = Component.options.name || (typeof value === 'string' ? value : null);
	      self.Component = Component;
	      cb();
	    });
	    this.vm._resolveComponent(value, this.pendingComponentCb);
	  },
	
	  /**
	   * Create a new instance using the current constructor and
	   * replace the existing instance. This method doesn't care
	   * whether the new component and the old one are actually
	   * the same.
	   *
	   * @param {Function} [cb]
	   */
	
	  mountComponent: function mountComponent(cb) {
	    // actual mount
	    this.unbuild(true);
	    var self = this;
	    var activateHooks = this.Component.options.activate;
	    var cached = this.getCached();
	    var newComponent = this.build();
	    if (activateHooks && !cached) {
	      this.waitingFor = newComponent;
	      callActivateHooks(activateHooks, newComponent, function () {
	        if (self.waitingFor !== newComponent) {
	          return;
	        }
	        self.waitingFor = null;
	        self.transition(newComponent, cb);
	      });
	    } else {
	      // update ref for kept-alive component
	      if (cached) {
	        newComponent._updateRef();
	      }
	      this.transition(newComponent, cb);
	    }
	  },
	
	  /**
	   * When the component changes or unbinds before an async
	   * constructor is resolved, we need to invalidate its
	   * pending callback.
	   */
	
	  invalidatePending: function invalidatePending() {
	    if (this.pendingComponentCb) {
	      this.pendingComponentCb.cancel();
	      this.pendingComponentCb = null;
	    }
	  },
	
	  /**
	   * Instantiate/insert a new child vm.
	   * If keep alive and has cached instance, insert that
	   * instance; otherwise build a new one and cache it.
	   *
	   * @param {Object} [extraOptions]
	   * @return {Vue} - the created instance
	   */
	
	  build: function build(extraOptions) {
	    var cached = this.getCached();
	    if (cached) {
	      return cached;
	    }
	    if (this.Component) {
	      // default options
	      var options = {
	        name: this.ComponentName,
	        el: cloneNode(this.el),
	        template: this.inlineTemplate,
	        // make sure to add the child with correct parent
	        // if this is a transcluded component, its parent
	        // should be the transclusion host.
	        parent: this._host || this.vm,
	        // if no inline-template, then the compiled
	        // linker can be cached for better performance.
	        _linkerCachable: !this.inlineTemplate,
	        _ref: this.descriptor.ref,
	        _asComponent: true,
	        _isRouterView: this._isRouterView,
	        // if this is a transcluded component, context
	        // will be the common parent vm of this instance
	        // and its host.
	        _context: this.vm,
	        // if this is inside an inline v-for, the scope
	        // will be the intermediate scope created for this
	        // repeat fragment. this is used for linking props
	        // and container directives.
	        _scope: this._scope,
	        // pass in the owner fragment of this component.
	        // this is necessary so that the fragment can keep
	        // track of its contained components in order to
	        // call attach/detach hooks for them.
	        _frag: this._frag
	      };
	      // extra options
	      // in 1.0.0 this is used by vue-router only
	      /* istanbul ignore if */
	      if (extraOptions) {
	        extend(options, extraOptions);
	      }
	      var child = new this.Component(options);
	      if (this.keepAlive) {
	        this.cache[this.Component.cid] = child;
	      }
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && this.el.hasAttribute('transition') && child._isFragment) {
	        warn('Transitions will not work on a fragment instance. ' + 'Template: ' + child.$options.template);
	      }
	      return child;
	    }
	  },
	
	  /**
	   * Try to get a cached instance of the current component.
	   *
	   * @return {Vue|undefined}
	   */
	
	  getCached: function getCached() {
	    return this.keepAlive && this.cache[this.Component.cid];
	  },
	
	  /**
	   * Teardown the current child, but defers cleanup so
	   * that we can separate the destroy and removal steps.
	   *
	   * @param {Boolean} defer
	   */
	
	  unbuild: function unbuild(defer) {
	    if (this.waitingFor) {
	      if (!this.keepAlive) {
	        this.waitingFor.$destroy();
	      }
	      this.waitingFor = null;
	    }
	    var child = this.childVM;
	    if (!child || this.keepAlive) {
	      if (child) {
	        // remove ref
	        child._inactive = true;
	        child._updateRef(true);
	      }
	      return;
	    }
	    // the sole purpose of `deferCleanup` is so that we can
	    // "deactivate" the vm right now and perform DOM removal
	    // later.
	    child.$destroy(false, defer);
	  },
	
	  /**
	   * Remove current destroyed child and manually do
	   * the cleanup after removal.
	   *
	   * @param {Function} cb
	   */
	
	  remove: function remove(child, cb) {
	    var keepAlive = this.keepAlive;
	    if (child) {
	      // we may have a component switch when a previous
	      // component is still being transitioned out.
	      // we want to trigger only one lastest insertion cb
	      // when the existing transition finishes. (#1119)
	      this.pendingRemovals++;
	      this.pendingRemovalCb = cb;
	      var self = this;
	      child.$remove(function () {
	        self.pendingRemovals--;
	        if (!keepAlive) child._cleanup();
	        if (!self.pendingRemovals && self.pendingRemovalCb) {
	          self.pendingRemovalCb();
	          self.pendingRemovalCb = null;
	        }
	      });
	    } else if (cb) {
	      cb();
	    }
	  },
	
	  /**
	   * Actually swap the components, depending on the
	   * transition mode. Defaults to simultaneous.
	   *
	   * @param {Vue} target
	   * @param {Function} [cb]
	   */
	
	  transition: function transition(target, cb) {
	    var self = this;
	    var current = this.childVM;
	    // for devtool inspection
	    if (current) current._inactive = true;
	    target._inactive = false;
	    this.childVM = target;
	    switch (self.params.transitionMode) {
	      case 'in-out':
	        target.$before(self.anchor, function () {
	          self.remove(current, cb);
	        });
	        break;
	      case 'out-in':
	        self.remove(current, function () {
	          target.$before(self.anchor, cb);
	        });
	        break;
	      default:
	        self.remove(current);
	        target.$before(self.anchor, cb);
	    }
	  },
	
	  /**
	   * Unbind.
	   */
	
	  unbind: function unbind() {
	    this.invalidatePending();
	    // Do not defer cleanup when unbinding
	    this.unbuild();
	    // destroy all keep-alive cached instances
	    if (this.cache) {
	      for (var key in this.cache) {
	        this.cache[key].$destroy();
	      }
	      this.cache = null;
	    }
	  }
	};
	
	/**
	 * Call activate hooks in order (asynchronous)
	 *
	 * @param {Array} hooks
	 * @param {Vue} vm
	 * @param {Function} cb
	 */
	
	function callActivateHooks(hooks, vm, cb) {
	  var total = hooks.length;
	  var called = 0;
	  hooks[0].call(vm, next);
	  function next() {
	    if (++called >= total) {
	      cb();
	    } else {
	      hooks[called].call(vm, next);
	    }
	  }
	}
	
	var propBindingModes = config._propBindingModes;
	var empty = {};
	
	// regexes
	var identRE$1 = /^[$_a-zA-Z]+[\w$]*$/;
	var settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/;
	
	/**
	 * Compile props on a root element and return
	 * a props link function.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Array} propOptions
	 * @return {Function} propsLinkFn
	 */
	
	function compileProps(el, propOptions) {
	  var props = [];
	  var names = Object.keys(propOptions);
	  var i = names.length;
	  var options, name, attr, value, path, parsed, prop;
	  while (i--) {
	    name = names[i];
	    options = propOptions[name] || empty;
	
	    if (process.env.NODE_ENV !== 'production' && name === '$data') {
	      warn('Do not use $data as prop.');
	      continue;
	    }
	
	    // props could contain dashes, which will be
	    // interpreted as minus calculations by the parser
	    // so we need to camelize the path here
	    path = camelize(name);
	    if (!identRE$1.test(path)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop key: "' + name + '". Prop keys ' + 'must be valid identifiers.');
	      continue;
	    }
	
	    prop = {
	      name: name,
	      path: path,
	      options: options,
	      mode: propBindingModes.ONE_WAY,
	      raw: null
	    };
	
	    attr = hyphenate(name);
	    // first check dynamic version
	    if ((value = getBindAttr(el, attr)) === null) {
	      if ((value = getBindAttr(el, attr + '.sync')) !== null) {
	        prop.mode = propBindingModes.TWO_WAY;
	      } else if ((value = getBindAttr(el, attr + '.once')) !== null) {
	        prop.mode = propBindingModes.ONE_TIME;
	      }
	    }
	    if (value !== null) {
	      // has dynamic binding!
	      prop.raw = value;
	      parsed = parseDirective(value);
	      value = parsed.expression;
	      prop.filters = parsed.filters;
	      // check binding type
	      if (isLiteral(value) && !parsed.filters) {
	        // for expressions containing literal numbers and
	        // booleans, there's no need to setup a prop binding,
	        // so we can optimize them as a one-time set.
	        prop.optimizedLiteral = true;
	      } else {
	        prop.dynamic = true;
	        // check non-settable path for two-way bindings
	        if (process.env.NODE_ENV !== 'production' && prop.mode === propBindingModes.TWO_WAY && !settablePathRE.test(value)) {
	          prop.mode = propBindingModes.ONE_WAY;
	          warn('Cannot bind two-way prop with non-settable ' + 'parent path: ' + value);
	        }
	      }
	      prop.parentPath = value;
	
	      // warn required two-way
	      if (process.env.NODE_ENV !== 'production' && options.twoWay && prop.mode !== propBindingModes.TWO_WAY) {
	        warn('Prop "' + name + '" expects a two-way binding type.');
	      }
	    } else if ((value = getAttr(el, attr)) !== null) {
	      // has literal binding!
	      prop.raw = value;
	    } else if (process.env.NODE_ENV !== 'production') {
	      // check possible camelCase prop usage
	      var lowerCaseName = path.toLowerCase();
	      value = /[A-Z\-]/.test(name) && (el.getAttribute(lowerCaseName) || el.getAttribute(':' + lowerCaseName) || el.getAttribute('v-bind:' + lowerCaseName) || el.getAttribute(':' + lowerCaseName + '.once') || el.getAttribute('v-bind:' + lowerCaseName + '.once') || el.getAttribute(':' + lowerCaseName + '.sync') || el.getAttribute('v-bind:' + lowerCaseName + '.sync'));
	      if (value) {
	        warn('Possible usage error for prop `' + lowerCaseName + '` - ' + 'did you mean `' + attr + '`? HTML is case-insensitive, remember to use ' + 'kebab-case for props in templates.');
	      } else if (options.required) {
	        // warn missing required
	        warn('Missing required prop: ' + name);
	      }
	    }
	    // push prop
	    props.push(prop);
	  }
	  return makePropsLinkFn(props);
	}
	
	/**
	 * Build a function that applies props to a vm.
	 *
	 * @param {Array} props
	 * @return {Function} propsLinkFn
	 */
	
	function makePropsLinkFn(props) {
	  return function propsLinkFn(vm, scope) {
	    // store resolved props info
	    vm._props = {};
	    var i = props.length;
	    var prop, path, options, value, raw;
	    while (i--) {
	      prop = props[i];
	      raw = prop.raw;
	      path = prop.path;
	      options = prop.options;
	      vm._props[path] = prop;
	      if (raw === null) {
	        // initialize absent prop
	        initProp(vm, prop, undefined);
	      } else if (prop.dynamic) {
	        // dynamic prop
	        if (prop.mode === propBindingModes.ONE_TIME) {
	          // one time binding
	          value = (scope || vm._context || vm).$get(prop.parentPath);
	          initProp(vm, prop, value);
	        } else {
	          if (vm._context) {
	            // dynamic binding
	            vm._bindDir({
	              name: 'prop',
	              def: propDef,
	              prop: prop
	            }, null, null, scope); // el, host, scope
	          } else {
	              // root instance
	              initProp(vm, prop, vm.$get(prop.parentPath));
	            }
	        }
	      } else if (prop.optimizedLiteral) {
	        // optimized literal, cast it and just set once
	        var stripped = stripQuotes(raw);
	        value = stripped === raw ? toBoolean(toNumber(raw)) : stripped;
	        initProp(vm, prop, value);
	      } else {
	        // string literal, but we need to cater for
	        // Boolean props with no value, or with same
	        // literal value (e.g. disabled="disabled")
	        // see https://github.com/vuejs/vue-loader/issues/182
	        value = options.type === Boolean && (raw === '' || raw === hyphenate(prop.name)) ? true : raw;
	        initProp(vm, prop, value);
	      }
	    }
	  };
	}
	
	/**
	 * Set a prop's initial value on a vm and its data object.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */
	
	function initProp(vm, prop, value) {
	  var key = prop.path;
	  value = coerceProp(prop, value);
	  if (value === undefined) {
	    value = getPropDefaultValue(vm, prop.options);
	  }
	  if (assertProp(prop, value)) {
	    defineReactive(vm, key, value);
	  }
	}
	
	/**
	 * Get the default value of a prop.
	 *
	 * @param {Vue} vm
	 * @param {Object} options
	 * @return {*}
	 */
	
	function getPropDefaultValue(vm, options) {
	  // no default, return undefined
	  if (!hasOwn(options, 'default')) {
	    // absent boolean value defaults to false
	    return options.type === Boolean ? false : undefined;
	  }
	  var def = options['default'];
	  // warn against non-factory defaults for Object & Array
	  if (isObject(def)) {
	    process.env.NODE_ENV !== 'production' && warn('Object/Array as default prop values will be shared ' + 'across multiple instances. Use a factory function ' + 'to return the default value instead.');
	  }
	  // call factory function for non-Function types
	  return typeof def === 'function' && options.type !== Function ? def.call(vm) : def;
	}
	
	/**
	 * Assert whether a prop is valid.
	 *
	 * @param {Object} prop
	 * @param {*} value
	 */
	
	function assertProp(prop, value) {
	  if (!prop.options.required && ( // non-required
	  prop.raw === null || // abscent
	  value == null) // null or undefined
	  ) {
	      return true;
	    }
	  var options = prop.options;
	  var type = options.type;
	  var valid = true;
	  var expectedType;
	  if (type) {
	    if (type === String) {
	      expectedType = 'string';
	      valid = typeof value === expectedType;
	    } else if (type === Number) {
	      expectedType = 'number';
	      valid = typeof value === 'number';
	    } else if (type === Boolean) {
	      expectedType = 'boolean';
	      valid = typeof value === 'boolean';
	    } else if (type === Function) {
	      expectedType = 'function';
	      valid = typeof value === 'function';
	    } else if (type === Object) {
	      expectedType = 'object';
	      valid = isPlainObject(value);
	    } else if (type === Array) {
	      expectedType = 'array';
	      valid = isArray(value);
	    } else {
	      valid = value instanceof type;
	    }
	  }
	  if (!valid) {
	    process.env.NODE_ENV !== 'production' && warn('Invalid prop: type check failed for ' + prop.path + '="' + prop.raw + '".' + ' Expected ' + formatType(expectedType) + ', got ' + formatValue(value) + '.');
	    return false;
	  }
	  var validator = options.validator;
	  if (validator) {
	    if (!validator(value)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop: custom validator check failed for ' + prop.path + '="' + prop.raw + '"');
	      return false;
	    }
	  }
	  return true;
	}
	
	/**
	 * Force parsing value with coerce option.
	 *
	 * @param {*} value
	 * @param {Object} options
	 * @return {*}
	 */
	
	function coerceProp(prop, value) {
	  var coerce = prop.options.coerce;
	  if (!coerce) {
	    return value;
	  }
	  // coerce is a function
	  return coerce(value);
	}
	
	function formatType(val) {
	  return val ? val.charAt(0).toUpperCase() + val.slice(1) : 'custom type';
	}
	
	function formatValue(val) {
	  return Object.prototype.toString.call(val).slice(8, -1);
	}
	
	var bindingModes = config._propBindingModes;
	
	var propDef = {
	
	  bind: function bind() {
	    var child = this.vm;
	    var parent = child._context;
	    // passed in from compiler directly
	    var prop = this.descriptor.prop;
	    var childKey = prop.path;
	    var parentKey = prop.parentPath;
	    var twoWay = prop.mode === bindingModes.TWO_WAY;
	    var isSimple = isSimplePath(parentKey);
	
	    var parentWatcher = this.parentWatcher = new Watcher(parent, parentKey, function (val) {
	      val = coerceProp(prop, val);
	      if (assertProp(prop, val)) {
	        if (isSimple) {
	          withoutConversion(function () {
	            child[childKey] = val;
	          });
	        } else {
	          child[childKey] = val;
	        }
	      }
	    }, {
	      twoWay: twoWay,
	      filters: prop.filters,
	      // important: props need to be observed on the
	      // v-for scope if present
	      scope: this._scope
	    });
	
	    // set the child initial value.
	    var value = parentWatcher.value;
	    if (isSimple && value !== undefined) {
	      withoutConversion(function () {
	        initProp(child, prop, value);
	      });
	    } else {
	      initProp(child, prop, value);
	    }
	
	    // setup two-way binding
	    if (twoWay) {
	      // important: defer the child watcher creation until
	      // the created hook (after data observation)
	      var self = this;
	      child.$once('pre-hook:created', function () {
	        self.childWatcher = new Watcher(child, childKey, function (val) {
	          parentWatcher.set(val);
	        }, {
	          // ensure sync upward before parent sync down.
	          // this is necessary in cases e.g. the child
	          // mutates a prop array, then replaces it. (#1683)
	          sync: true
	        });
	      });
	    }
	  },
	
	  unbind: function unbind() {
	    this.parentWatcher.teardown();
	    if (this.childWatcher) {
	      this.childWatcher.teardown();
	    }
	  }
	};
	
	var queue$1 = [];
	var queued = false;
	
	/**
	 * Push a job into the queue.
	 *
	 * @param {Function} job
	 */
	
	function pushJob(job) {
	  queue$1.push(job);
	  if (!queued) {
	    queued = true;
	    nextTick(flush);
	  }
	}
	
	/**
	 * Flush the queue, and do one forced reflow before
	 * triggering transitions.
	 */
	
	function flush() {
	  // Force layout
	  var f = document.documentElement.offsetHeight;
	  for (var i = 0; i < queue$1.length; i++) {
	    queue$1[i]();
	  }
	  queue$1 = [];
	  queued = false;
	  // dummy return, so js linters don't complain about
	  // unused variable f
	  return f;
	}
	
	var TYPE_TRANSITION = 'transition';
	var TYPE_ANIMATION = 'animation';
	var transDurationProp = transitionProp + 'Duration';
	var animDurationProp = animationProp + 'Duration';
	
	/**
	 * If a just-entered element is applied the
	 * leave class while its enter transition hasn't started yet,
	 * and the transitioned property has the same value for both
	 * enter/leave, then the leave transition will be skipped and
	 * the transitionend event never fires. This function ensures
	 * its callback to be called after a transition has started
	 * by waiting for double raf.
	 *
	 * It falls back to setTimeout on devices that support CSS
	 * transitions but not raf (e.g. Android 4.2 browser) - since
	 * these environments are usually slow, we are giving it a
	 * relatively large timeout.
	 */
	
	var raf = inBrowser && window.requestAnimationFrame;
	var waitForTransitionStart = raf
	/* istanbul ignore next */
	? function (fn) {
	  raf(function () {
	    raf(fn);
	  });
	} : function (fn) {
	  setTimeout(fn, 50);
	};
	
	/**
	 * A Transition object that encapsulates the state and logic
	 * of the transition.
	 *
	 * @param {Element} el
	 * @param {String} id
	 * @param {Object} hooks
	 * @param {Vue} vm
	 */
	function Transition(el, id, hooks, vm) {
	  this.id = id;
	  this.el = el;
	  this.enterClass = hooks && hooks.enterClass || id + '-enter';
	  this.leaveClass = hooks && hooks.leaveClass || id + '-leave';
	  this.hooks = hooks;
	  this.vm = vm;
	  // async state
	  this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null;
	  this.justEntered = false;
	  this.entered = this.left = false;
	  this.typeCache = {};
	  // check css transition type
	  this.type = hooks && hooks.type;
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV !== 'production') {
	    if (this.type && this.type !== TYPE_TRANSITION && this.type !== TYPE_ANIMATION) {
	      warn('invalid CSS transition type for transition="' + this.id + '": ' + this.type);
	    }
	  }
	  // bind
	  var self = this;['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone'].forEach(function (m) {
	    self[m] = bind(self[m], self);
	  });
	}
	
	var p$1 = Transition.prototype;
	
	/**
	 * Start an entering transition.
	 *
	 * 1. enter transition triggered
	 * 2. call beforeEnter hook
	 * 3. add enter class
	 * 4. insert/show element
	 * 5. call enter hook (with possible explicit js callback)
	 * 6. reflow
	 * 7. based on transition type:
	 *    - transition:
	 *        remove class now, wait for transitionend,
	 *        then done if there's no explicit js callback.
	 *    - animation:
	 *        wait for animationend, remove class,
	 *        then done if there's no explicit js callback.
	 *    - no css transition:
	 *        done now if there's no explicit js callback.
	 * 8. wait for either done or js callback, then call
	 *    afterEnter hook.
	 *
	 * @param {Function} op - insert/show the element
	 * @param {Function} [cb]
	 */
	
	p$1.enter = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeEnter');
	  this.cb = cb;
	  addClass(this.el, this.enterClass);
	  op();
	  this.entered = false;
	  this.callHookWithCb('enter');
	  if (this.entered) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.enterCancelled;
	  pushJob(this.enterNextTick);
	};
	
	/**
	 * The "nextTick" phase of an entering transition, which is
	 * to be pushed into a queue and executed after a reflow so
	 * that removing the class can trigger a CSS transition.
	 */
	
	p$1.enterNextTick = function () {
	  var _this = this;
	
	  // prevent transition skipping
	  this.justEntered = true;
	  waitForTransitionStart(function () {
	    _this.justEntered = false;
	  });
	  var enterDone = this.enterDone;
	  var type = this.getCssTransitionType(this.enterClass);
	  if (!this.pendingJsCb) {
	    if (type === TYPE_TRANSITION) {
	      // trigger transition by removing enter class now
	      removeClass(this.el, this.enterClass);
	      this.setupCssCb(transitionEndEvent, enterDone);
	    } else if (type === TYPE_ANIMATION) {
	      this.setupCssCb(animationEndEvent, enterDone);
	    } else {
	      enterDone();
	    }
	  } else if (type === TYPE_TRANSITION) {
	    removeClass(this.el, this.enterClass);
	  }
	};
	
	/**
	 * The "cleanup" phase of an entering transition.
	 */
	
	p$1.enterDone = function () {
	  this.entered = true;
	  this.cancel = this.pendingJsCb = null;
	  removeClass(this.el, this.enterClass);
	  this.callHook('afterEnter');
	  if (this.cb) this.cb();
	};
	
	/**
	 * Start a leaving transition.
	 *
	 * 1. leave transition triggered.
	 * 2. call beforeLeave hook
	 * 3. add leave class (trigger css transition)
	 * 4. call leave hook (with possible explicit js callback)
	 * 5. reflow if no explicit js callback is provided
	 * 6. based on transition type:
	 *    - transition or animation:
	 *        wait for end event, remove class, then done if
	 *        there's no explicit js callback.
	 *    - no css transition:
	 *        done if there's no explicit js callback.
	 * 7. wait for either done or js callback, then call
	 *    afterLeave hook.
	 *
	 * @param {Function} op - remove/hide the element
	 * @param {Function} [cb]
	 */
	
	p$1.leave = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeLeave');
	  this.op = op;
	  this.cb = cb;
	  addClass(this.el, this.leaveClass);
	  this.left = false;
	  this.callHookWithCb('leave');
	  if (this.left) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.leaveCancelled;
	  // only need to handle leaveDone if
	  // 1. the transition is already done (synchronously called
	  //    by the user, which causes this.op set to null)
	  // 2. there's no explicit js callback
	  if (this.op && !this.pendingJsCb) {
	    // if a CSS transition leaves immediately after enter,
	    // the transitionend event never fires. therefore we
	    // detect such cases and end the leave immediately.
	    if (this.justEntered) {
	      this.leaveDone();
	    } else {
	      pushJob(this.leaveNextTick);
	    }
	  }
	};
	
	/**
	 * The "nextTick" phase of a leaving transition.
	 */
	
	p$1.leaveNextTick = function () {
	  var type = this.getCssTransitionType(this.leaveClass);
	  if (type) {
	    var event = type === TYPE_TRANSITION ? transitionEndEvent : animationEndEvent;
	    this.setupCssCb(event, this.leaveDone);
	  } else {
	    this.leaveDone();
	  }
	};
	
	/**
	 * The "cleanup" phase of a leaving transition.
	 */
	
	p$1.leaveDone = function () {
	  this.left = true;
	  this.cancel = this.pendingJsCb = null;
	  this.op();
	  removeClass(this.el, this.leaveClass);
	  this.callHook('afterLeave');
	  if (this.cb) this.cb();
	  this.op = null;
	};
	
	/**
	 * Cancel any pending callbacks from a previously running
	 * but not finished transition.
	 */
	
	p$1.cancelPending = function () {
	  this.op = this.cb = null;
	  var hasPending = false;
	  if (this.pendingCssCb) {
	    hasPending = true;
	    off(this.el, this.pendingCssEvent, this.pendingCssCb);
	    this.pendingCssEvent = this.pendingCssCb = null;
	  }
	  if (this.pendingJsCb) {
	    hasPending = true;
	    this.pendingJsCb.cancel();
	    this.pendingJsCb = null;
	  }
	  if (hasPending) {
	    removeClass(this.el, this.enterClass);
	    removeClass(this.el, this.leaveClass);
	  }
	  if (this.cancel) {
	    this.cancel.call(this.vm, this.el);
	    this.cancel = null;
	  }
	};
	
	/**
	 * Call a user-provided synchronous hook function.
	 *
	 * @param {String} type
	 */
	
	p$1.callHook = function (type) {
	  if (this.hooks && this.hooks[type]) {
	    this.hooks[type].call(this.vm, this.el);
	  }
	};
	
	/**
	 * Call a user-provided, potentially-async hook function.
	 * We check for the length of arguments to see if the hook
	 * expects a `done` callback. If true, the transition's end
	 * will be determined by when the user calls that callback;
	 * otherwise, the end is determined by the CSS transition or
	 * animation.
	 *
	 * @param {String} type
	 */
	
	p$1.callHookWithCb = function (type) {
	  var hook = this.hooks && this.hooks[type];
	  if (hook) {
	    if (hook.length > 1) {
	      this.pendingJsCb = cancellable(this[type + 'Done']);
	    }
	    hook.call(this.vm, this.el, this.pendingJsCb);
	  }
	};
	
	/**
	 * Get an element's transition type based on the
	 * calculated styles.
	 *
	 * @param {String} className
	 * @return {Number}
	 */
	
	p$1.getCssTransitionType = function (className) {
	  /* istanbul ignore if */
	  if (!transitionEndEvent ||
	  // skip CSS transitions if page is not visible -
	  // this solves the issue of transitionend events not
	  // firing until the page is visible again.
	  // pageVisibility API is supported in IE10+, same as
	  // CSS transitions.
	  document.hidden ||
	  // explicit js-only transition
	  this.hooks && this.hooks.css === false ||
	  // element is hidden
	  isHidden(this.el)) {
	    return;
	  }
	  var type = this.type || this.typeCache[className];
	  if (type) return type;
	  var inlineStyles = this.el.style;
	  var computedStyles = window.getComputedStyle(this.el);
	  var transDuration = inlineStyles[transDurationProp] || computedStyles[transDurationProp];
	  if (transDuration && transDuration !== '0s') {
	    type = TYPE_TRANSITION;
	  } else {
	    var animDuration = inlineStyles[animDurationProp] || computedStyles[animDurationProp];
	    if (animDuration && animDuration !== '0s') {
	      type = TYPE_ANIMATION;
	    }
	  }
	  if (type) {
	    this.typeCache[className] = type;
	  }
	  return type;
	};
	
	/**
	 * Setup a CSS transitionend/animationend callback.
	 *
	 * @param {String} event
	 * @param {Function} cb
	 */
	
	p$1.setupCssCb = function (event, cb) {
	  this.pendingCssEvent = event;
	  var self = this;
	  var el = this.el;
	  var onEnd = this.pendingCssCb = function (e) {
	    if (e.target === el) {
	      off(el, event, onEnd);
	      self.pendingCssEvent = self.pendingCssCb = null;
	      if (!self.pendingJsCb && cb) {
	        cb();
	      }
	    }
	  };
	  on(el, event, onEnd);
	};
	
	/**
	 * Check if an element is hidden - in that case we can just
	 * skip the transition alltogether.
	 *
	 * @param {Element} el
	 * @return {Boolean}
	 */
	
	function isHidden(el) {
	  if (/svg$/.test(el.namespaceURI)) {
	    // SVG elements do not have offset(Width|Height)
	    // so we need to check the client rect
	    var rect = el.getBoundingClientRect();
	    return !(rect.width || rect.height);
	  } else {
	    return !(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
	  }
	}
	
	var transition$1 = {
	
	  priority: TRANSITION,
	
	  update: function update(id, oldId) {
	    var el = this.el;
	    // resolve on owner vm
	    var hooks = resolveAsset(this.vm.$options, 'transitions', id);
	    id = id || 'v';
	    el.__v_trans = new Transition(el, id, hooks, this.vm);
	    if (oldId) {
	      removeClass(el, oldId + '-transition');
	    }
	    addClass(el, id + '-transition');
	  }
	};
	
	var internalDirectives = {
	  style: style,
	  'class': vClass,
	  component: component,
	  prop: propDef,
	  transition: transition$1
	};
	
	// special binding prefixes
	var bindRE = /^v-bind:|^:/;
	var onRE = /^v-on:|^@/;
	var dirAttrRE = /^v-([^:]+)(?:$|:(.*)$)/;
	var modifierRE = /\.[^\.]+/g;
	var transitionRE = /^(v-bind:|:)?transition$/;
	
	// default directive priority
	var DEFAULT_PRIORITY = 1000;
	var DEFAULT_TERMINAL_PRIORITY = 2000;
	
	/**
	 * Compile a template and return a reusable composite link
	 * function, which recursively contains more link functions
	 * inside. This top level compile function would normally
	 * be called on instance root nodes, but can also be used
	 * for partial compilation if the partial argument is true.
	 *
	 * The returned composite link function, when called, will
	 * return an unlink function that tearsdown all directives
	 * created during the linking phase.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Object} options
	 * @param {Boolean} partial
	 * @return {Function}
	 */
	
	function compile(el, options, partial) {
	  // link function for the node itself.
	  var nodeLinkFn = partial || !options._asComponent ? compileNode(el, options) : null;
	  // link function for the childNodes
	  var childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && el.tagName !== 'SCRIPT' && el.hasChildNodes() ? compileNodeList(el.childNodes, options) : null;
	
	  /**
	   * A composite linker function to be called on a already
	   * compiled piece of DOM, which instantiates all directive
	   * instances.
	   *
	   * @param {Vue} vm
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host] - host vm of transcluded content
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - link context fragment
	   * @return {Function|undefined}
	   */
	
	  return function compositeLinkFn(vm, el, host, scope, frag) {
	    // cache childNodes before linking parent, fix #657
	    var childNodes = toArray(el.childNodes);
	    // link
	    var dirs = linkAndCapture(function compositeLinkCapturer() {
	      if (nodeLinkFn) nodeLinkFn(vm, el, host, scope, frag);
	      if (childLinkFn) childLinkFn(vm, childNodes, host, scope, frag);
	    }, vm);
	    return makeUnlinkFn(vm, dirs);
	  };
	}
	
	/**
	 * Apply a linker to a vm/element pair and capture the
	 * directives created during the process.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 */
	
	function linkAndCapture(linker, vm) {
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV === 'production') {
	    // reset directives before every capture in production
	    // mode, so that when unlinking we don't need to splice
	    // them out (which turns out to be a perf hit).
	    // they are kept in development mode because they are
	    // useful for Vue's own tests.
	    vm._directives = [];
	  }
	  var originalDirCount = vm._directives.length;
	  linker();
	  var dirs = vm._directives.slice(originalDirCount);
	  dirs.sort(directiveComparator);
	  for (var i = 0, l = dirs.length; i < l; i++) {
	    dirs[i]._bind();
	  }
	  return dirs;
	}
	
	/**
	 * Directive priority sort comparator
	 *
	 * @param {Object} a
	 * @param {Object} b
	 */
	
	function directiveComparator(a, b) {
	  a = a.descriptor.def.priority || DEFAULT_PRIORITY;
	  b = b.descriptor.def.priority || DEFAULT_PRIORITY;
	  return a > b ? -1 : a === b ? 0 : 1;
	}
	
	/**
	 * Linker functions return an unlink function that
	 * tearsdown all directives instances generated during
	 * the process.
	 *
	 * We create unlink functions with only the necessary
	 * information to avoid retaining additional closures.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Vue} [context]
	 * @param {Array} [contextDirs]
	 * @return {Function}
	 */
	
	function makeUnlinkFn(vm, dirs, context, contextDirs) {
	  function unlink(destroying) {
	    teardownDirs(vm, dirs, destroying);
	    if (context && contextDirs) {
	      teardownDirs(context, contextDirs);
	    }
	  }
	  // expose linked directives
	  unlink.dirs = dirs;
	  return unlink;
	}
	
	/**
	 * Teardown partial linked directives.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Boolean} destroying
	 */
	
	function teardownDirs(vm, dirs, destroying) {
	  var i = dirs.length;
	  while (i--) {
	    dirs[i]._teardown();
	    if (process.env.NODE_ENV !== 'production' && !destroying) {
	      vm._directives.$remove(dirs[i]);
	    }
	  }
	}
	
	/**
	 * Compile link props on an instance.
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 * @param {Object} props
	 * @param {Object} [scope]
	 * @return {Function}
	 */
	
	function compileAndLinkProps(vm, el, props, scope) {
	  var propsLinkFn = compileProps(el, props);
	  var propDirs = linkAndCapture(function () {
	    propsLinkFn(vm, scope);
	  }, vm);
	  return makeUnlinkFn(vm, propDirs);
	}
	
	/**
	 * Compile the root element of an instance.
	 *
	 * 1. attrs on context container (context scope)
	 * 2. attrs on the component template root node, if
	 *    replace:true (child scope)
	 *
	 * If this is a fragment instance, we only need to compile 1.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @param {Object} contextOptions
	 * @return {Function}
	 */
	
	function compileRoot(el, options, contextOptions) {
	  var containerAttrs = options._containerAttrs;
	  var replacerAttrs = options._replacerAttrs;
	  var contextLinkFn, replacerLinkFn;
	
	  // only need to compile other attributes for
	  // non-fragment instances
	  if (el.nodeType !== 11) {
	    // for components, container and replacer need to be
	    // compiled separately and linked in different scopes.
	    if (options._asComponent) {
	      // 2. container attributes
	      if (containerAttrs && contextOptions) {
	        contextLinkFn = compileDirectives(containerAttrs, contextOptions);
	      }
	      if (replacerAttrs) {
	        // 3. replacer attributes
	        replacerLinkFn = compileDirectives(replacerAttrs, options);
	      }
	    } else {
	      // non-component, just compile as a normal element.
	      replacerLinkFn = compileDirectives(el.attributes, options);
	    }
	  } else if (process.env.NODE_ENV !== 'production' && containerAttrs) {
	    // warn container directives for fragment instances
	    var names = containerAttrs.filter(function (attr) {
	      // allow vue-loader/vueify scoped css attributes
	      return attr.name.indexOf('_v-') < 0 &&
	      // allow event listeners
	      !onRE.test(attr.name) &&
	      // allow slots
	      attr.name !== 'slot';
	    }).map(function (attr) {
	      return '"' + attr.name + '"';
	    });
	    if (names.length) {
	      var plural = names.length > 1;
	      warn('Attribute' + (plural ? 's ' : ' ') + names.join(', ') + (plural ? ' are' : ' is') + ' ignored on component ' + '<' + options.el.tagName.toLowerCase() + '> because ' + 'the component is a fragment instance: ' + 'http://vuejs.org/guide/components.html#Fragment_Instance');
	    }
	  }
	
	  options._containerAttrs = options._replacerAttrs = null;
	  return function rootLinkFn(vm, el, scope) {
	    // link context scope dirs
	    var context = vm._context;
	    var contextDirs;
	    if (context && contextLinkFn) {
	      contextDirs = linkAndCapture(function () {
	        contextLinkFn(context, el, null, scope);
	      }, context);
	    }
	
	    // link self
	    var selfDirs = linkAndCapture(function () {
	      if (replacerLinkFn) replacerLinkFn(vm, el);
	    }, vm);
	
	    // return the unlink function that tearsdown context
	    // container directives.
	    return makeUnlinkFn(vm, selfDirs, context, contextDirs);
	  };
	}
	
	/**
	 * Compile a node and return a nodeLinkFn based on the
	 * node type.
	 *
	 * @param {Node} node
	 * @param {Object} options
	 * @return {Function|null}
	 */
	
	function compileNode(node, options) {
	  var type = node.nodeType;
	  if (type === 1 && node.tagName !== 'SCRIPT') {
	    return compileElement(node, options);
	  } else if (type === 3 && node.data.trim()) {
	    return compileTextNode(node, options);
	  } else {
	    return null;
	  }
	}
	
	/**
	 * Compile an element and return a nodeLinkFn.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|null}
	 */
	
	function compileElement(el, options) {
	  // preprocess textareas.
	  // textarea treats its text content as the initial value.
	  // just bind it as an attr directive for value.
	  if (el.tagName === 'TEXTAREA') {
	    var tokens = parseText(el.value);
	    if (tokens) {
	      el.setAttribute(':value', tokensToExp(tokens));
	      el.value = '';
	    }
	  }
	  var linkFn;
	  var hasAttrs = el.hasAttributes();
	  var attrs = hasAttrs && toArray(el.attributes);
	  // check terminal directives (for & if)
	  if (hasAttrs) {
	    linkFn = checkTerminalDirectives(el, attrs, options);
	  }
	  // check element directives
	  if (!linkFn) {
	    linkFn = checkElementDirectives(el, options);
	  }
	  // check component
	  if (!linkFn) {
	    linkFn = checkComponent(el, options);
	  }
	  // normal directives
	  if (!linkFn && hasAttrs) {
	    linkFn = compileDirectives(attrs, options);
	  }
	  return linkFn;
	}
	
	/**
	 * Compile a textNode and return a nodeLinkFn.
	 *
	 * @param {TextNode} node
	 * @param {Object} options
	 * @return {Function|null} textNodeLinkFn
	 */
	
	function compileTextNode(node, options) {
	  // skip marked text nodes
	  if (node._skip) {
	    return removeText;
	  }
	
	  var tokens = parseText(node.wholeText);
	  if (!tokens) {
	    return null;
	  }
	
	  // mark adjacent text nodes as skipped,
	  // because we are using node.wholeText to compile
	  // all adjacent text nodes together. This fixes
	  // issues in IE where sometimes it splits up a single
	  // text node into multiple ones.
	  var next = node.nextSibling;
	  while (next && next.nodeType === 3) {
	    next._skip = true;
	    next = next.nextSibling;
	  }
	
	  var frag = document.createDocumentFragment();
	  var el, token;
	  for (var i = 0, l = tokens.length; i < l; i++) {
	    token = tokens[i];
	    el = token.tag ? processTextToken(token, options) : document.createTextNode(token.value);
	    frag.appendChild(el);
	  }
	  return makeTextNodeLinkFn(tokens, frag, options);
	}
	
	/**
	 * Linker for an skipped text node.
	 *
	 * @param {Vue} vm
	 * @param {Text} node
	 */
	
	function removeText(vm, node) {
	  remove(node);
	}
	
	/**
	 * Process a single text token.
	 *
	 * @param {Object} token
	 * @param {Object} options
	 * @return {Node}
	 */
	
	function processTextToken(token, options) {
	  var el;
	  if (token.oneTime) {
	    el = document.createTextNode(token.value);
	  } else {
	    if (token.html) {
	      el = document.createComment('v-html');
	      setTokenType('html');
	    } else {
	      // IE will clean up empty textNodes during
	      // frag.cloneNode(true), so we have to give it
	      // something here...
	      el = document.createTextNode(' ');
	      setTokenType('text');
	    }
	  }
	  function setTokenType(type) {
	    if (token.descriptor) return;
	    var parsed = parseDirective(token.value);
	    token.descriptor = {
	      name: type,
	      def: directives[type],
	      expression: parsed.expression,
	      filters: parsed.filters
	    };
	  }
	  return el;
	}
	
	/**
	 * Build a function that processes a textNode.
	 *
	 * @param {Array<Object>} tokens
	 * @param {DocumentFragment} frag
	 */
	
	function makeTextNodeLinkFn(tokens, frag) {
	  return function textNodeLinkFn(vm, el, host, scope) {
	    var fragClone = frag.cloneNode(true);
	    var childNodes = toArray(fragClone.childNodes);
	    var token, value, node;
	    for (var i = 0, l = tokens.length; i < l; i++) {
	      token = tokens[i];
	      value = token.value;
	      if (token.tag) {
	        node = childNodes[i];
	        if (token.oneTime) {
	          value = (scope || vm).$eval(value);
	          if (token.html) {
	            replace(node, parseTemplate(value, true));
	          } else {
	            node.data = value;
	          }
	        } else {
	          vm._bindDir(token.descriptor, node, host, scope);
	        }
	      }
	    }
	    replace(el, fragClone);
	  };
	}
	
	/**
	 * Compile a node list and return a childLinkFn.
	 *
	 * @param {NodeList} nodeList
	 * @param {Object} options
	 * @return {Function|undefined}
	 */
	
	function compileNodeList(nodeList, options) {
	  var linkFns = [];
	  var nodeLinkFn, childLinkFn, node;
	  for (var i = 0, l = nodeList.length; i < l; i++) {
	    node = nodeList[i];
	    nodeLinkFn = compileNode(node, options);
	    childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && node.tagName !== 'SCRIPT' && node.hasChildNodes() ? compileNodeList(node.childNodes, options) : null;
	    linkFns.push(nodeLinkFn, childLinkFn);
	  }
	  return linkFns.length ? makeChildLinkFn(linkFns) : null;
	}
	
	/**
	 * Make a child link function for a node's childNodes.
	 *
	 * @param {Array<Function>} linkFns
	 * @return {Function} childLinkFn
	 */
	
	function makeChildLinkFn(linkFns) {
	  return function childLinkFn(vm, nodes, host, scope, frag) {
	    var node, nodeLinkFn, childrenLinkFn;
	    for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
	      node = nodes[n];
	      nodeLinkFn = linkFns[i++];
	      childrenLinkFn = linkFns[i++];
	      // cache childNodes before linking parent, fix #657
	      var childNodes = toArray(node.childNodes);
	      if (nodeLinkFn) {
	        nodeLinkFn(vm, node, host, scope, frag);
	      }
	      if (childrenLinkFn) {
	        childrenLinkFn(vm, childNodes, host, scope, frag);
	      }
	    }
	  };
	}
	
	/**
	 * Check for element directives (custom elements that should
	 * be resovled as terminal directives).
	 *
	 * @param {Element} el
	 * @param {Object} options
	 */
	
	function checkElementDirectives(el, options) {
	  var tag = el.tagName.toLowerCase();
	  if (commonTagRE.test(tag)) {
	    return;
	  }
	  var def = resolveAsset(options, 'elementDirectives', tag);
	  if (def) {
	    return makeTerminalNodeLinkFn(el, tag, '', options, def);
	  }
	}
	
	/**
	 * Check if an element is a component. If yes, return
	 * a component link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|undefined}
	 */
	
	function checkComponent(el, options) {
	  var component = checkComponentAttr(el, options);
	  if (component) {
	    var ref = findRef(el);
	    var descriptor = {
	      name: 'component',
	      ref: ref,
	      expression: component.id,
	      def: internalDirectives.component,
	      modifiers: {
	        literal: !component.dynamic
	      }
	    };
	    var componentLinkFn = function componentLinkFn(vm, el, host, scope, frag) {
	      if (ref) {
	        defineReactive((scope || vm).$refs, ref, null);
	      }
	      vm._bindDir(descriptor, el, host, scope, frag);
	    };
	    componentLinkFn.terminal = true;
	    return componentLinkFn;
	  }
	}
	
	/**
	 * Check an element for terminal directives in fixed order.
	 * If it finds one, return a terminal link function.
	 *
	 * @param {Element} el
	 * @param {Array} attrs
	 * @param {Object} options
	 * @return {Function} terminalLinkFn
	 */
	
	function checkTerminalDirectives(el, attrs, options) {
	  // skip v-pre
	  if (getAttr(el, 'v-pre') !== null) {
	    return skip;
	  }
	  // skip v-else block, but only if following v-if
	  if (el.hasAttribute('v-else')) {
	    var prev = el.previousElementSibling;
	    if (prev && prev.hasAttribute('v-if')) {
	      return skip;
	    }
	  }
	
	  var attr, name, value, modifiers, matched, dirName, rawName, arg, def, termDef;
	  for (var i = 0, j = attrs.length; i < j; i++) {
	    attr = attrs[i];
	    modifiers = parseModifiers(attr.name);
	    name = attr.name.replace(modifierRE, '');
	    if (matched = name.match(dirAttrRE)) {
	      def = resolveAsset(options, 'directives', matched[1]);
	      if (def && def.terminal) {
	        if (!termDef || (def.priority || DEFAULT_TERMINAL_PRIORITY) > termDef.priority) {
	          termDef = def;
	          rawName = attr.name;
	          value = attr.value;
	          dirName = matched[1];
	          arg = matched[2];
	        }
	      }
	    }
	  }
	
	  if (termDef) {
	    return makeTerminalNodeLinkFn(el, dirName, value, options, termDef, rawName, arg, modifiers);
	  }
	}
	
	function skip() {}
	skip.terminal = true;
	
	/**
	 * Build a node link function for a terminal directive.
	 * A terminal link function terminates the current
	 * compilation recursion and handles compilation of the
	 * subtree in the directive.
	 *
	 * @param {Element} el
	 * @param {String} dirName
	 * @param {String} value
	 * @param {Object} options
	 * @param {Object} def
	 * @param {String} [rawName]
	 * @param {String} [arg]
	 * @param {Object} [modifiers]
	 * @return {Function} terminalLinkFn
	 */
	
	function makeTerminalNodeLinkFn(el, dirName, value, options, def, rawName, arg, modifiers) {
	  var parsed = parseDirective(value);
	  var descriptor = {
	    name: dirName,
	    arg: arg,
	    expression: parsed.expression,
	    filters: parsed.filters,
	    raw: value,
	    attr: rawName,
	    modifiers: modifiers,
	    def: def
	  };
	  // check ref for v-for and router-view
	  if (dirName === 'for' || dirName === 'router-view') {
	    descriptor.ref = findRef(el);
	  }
	  var fn = function terminalNodeLinkFn(vm, el, host, scope, frag) {
	    if (descriptor.ref) {
	      defineReactive((scope || vm).$refs, descriptor.ref, null);
	    }
	    vm._bindDir(descriptor, el, host, scope, frag);
	  };
	  fn.terminal = true;
	  return fn;
	}
	
	/**
	 * Compile the directives on an element and return a linker.
	 *
	 * @param {Array|NamedNodeMap} attrs
	 * @param {Object} options
	 * @return {Function}
	 */
	
	function compileDirectives(attrs, options) {
	  var i = attrs.length;
	  var dirs = [];
	  var attr, name, value, rawName, rawValue, dirName, arg, modifiers, dirDef, tokens, matched;
	  while (i--) {
	    attr = attrs[i];
	    name = rawName = attr.name;
	    value = rawValue = attr.value;
	    tokens = parseText(value);
	    // reset arg
	    arg = null;
	    // check modifiers
	    modifiers = parseModifiers(name);
	    name = name.replace(modifierRE, '');
	
	    // attribute interpolations
	    if (tokens) {
	      value = tokensToExp(tokens);
	      arg = name;
	      pushDir('bind', directives.bind, tokens);
	      // warn against mixing mustaches with v-bind
	      if (process.env.NODE_ENV !== 'production') {
	        if (name === 'class' && Array.prototype.some.call(attrs, function (attr) {
	          return attr.name === ':class' || attr.name === 'v-bind:class';
	        })) {
	          warn('class="' + rawValue + '": Do not mix mustache interpolation ' + 'and v-bind for "class" on the same element. Use one or the other.');
	        }
	      }
	    } else
	
	      // special attribute: transition
	      if (transitionRE.test(name)) {
	        modifiers.literal = !bindRE.test(name);
	        pushDir('transition', internalDirectives.transition);
	      } else
	
	        // event handlers
	        if (onRE.test(name)) {
	          arg = name.replace(onRE, '');
	          pushDir('on', directives.on);
	        } else
	
	          // attribute bindings
	          if (bindRE.test(name)) {
	            dirName = name.replace(bindRE, '');
	            if (dirName === 'style' || dirName === 'class') {
	              pushDir(dirName, internalDirectives[dirName]);
	            } else {
	              arg = dirName;
	              pushDir('bind', directives.bind);
	            }
	          } else
	
	            // normal directives
	            if (matched = name.match(dirAttrRE)) {
	              dirName = matched[1];
	              arg = matched[2];
	
	              // skip v-else (when used with v-show)
	              if (dirName === 'else') {
	                continue;
	              }
	
	              dirDef = resolveAsset(options, 'directives', dirName);
	
	              if (process.env.NODE_ENV !== 'production') {
	                assertAsset(dirDef, 'directive', dirName);
	              }
	
	              if (dirDef) {
	                pushDir(dirName, dirDef);
	              }
	            }
	  }
	
	  /**
	   * Push a directive.
	   *
	   * @param {String} dirName
	   * @param {Object|Function} def
	   * @param {Array} [interpTokens]
	   */
	
	  function pushDir(dirName, def, interpTokens) {
	    var hasOneTimeToken = interpTokens && hasOneTime(interpTokens);
	    var parsed = !hasOneTimeToken && parseDirective(value);
	    dirs.push({
	      name: dirName,
	      attr: rawName,
	      raw: rawValue,
	      def: def,
	      arg: arg,
	      modifiers: modifiers,
	      // conversion from interpolation strings with one-time token
	      // to expression is differed until directive bind time so that we
	      // have access to the actual vm context for one-time bindings.
	      expression: parsed && parsed.expression,
	      filters: parsed && parsed.filters,
	      interp: interpTokens,
	      hasOneTime: hasOneTimeToken
	    });
	  }
	
	  if (dirs.length) {
	    return makeNodeLinkFn(dirs);
	  }
	}
	
	/**
	 * Parse modifiers from directive attribute name.
	 *
	 * @param {String} name
	 * @return {Object}
	 */
	
	function parseModifiers(name) {
	  var res = Object.create(null);
	  var match = name.match(modifierRE);
	  if (match) {
	    var i = match.length;
	    while (i--) {
	      res[match[i].slice(1)] = true;
	    }
	  }
	  return res;
	}
	
	/**
	 * Build a link function for all directives on a single node.
	 *
	 * @param {Array} directives
	 * @return {Function} directivesLinkFn
	 */
	
	function makeNodeLinkFn(directives) {
	  return function nodeLinkFn(vm, el, host, scope, frag) {
	    // reverse apply because it's sorted low to high
	    var i = directives.length;
	    while (i--) {
	      vm._bindDir(directives[i], el, host, scope, frag);
	    }
	  };
	}
	
	/**
	 * Check if an interpolation string contains one-time tokens.
	 *
	 * @param {Array} tokens
	 * @return {Boolean}
	 */
	
	function hasOneTime(tokens) {
	  var i = tokens.length;
	  while (i--) {
	    if (tokens[i].oneTime) return true;
	  }
	}
	
	var specialCharRE = /[^\w\-:\.]/;
	
	/**
	 * Process an element or a DocumentFragment based on a
	 * instance option object. This allows us to transclude
	 * a template node/fragment before the instance is created,
	 * so the processed fragment can then be cloned and reused
	 * in v-for.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */
	
	function transclude(el, options) {
	  // extract container attributes to pass them down
	  // to compiler, because they need to be compiled in
	  // parent scope. we are mutating the options object here
	  // assuming the same object will be used for compile
	  // right after this.
	  if (options) {
	    options._containerAttrs = extractAttrs(el);
	  }
	  // for template tags, what we want is its content as
	  // a documentFragment (for fragment instances)
	  if (isTemplate(el)) {
	    el = parseTemplate(el);
	  }
	  if (options) {
	    if (options._asComponent && !options.template) {
	      options.template = '<slot></slot>';
	    }
	    if (options.template) {
	      options._content = extractContent(el);
	      el = transcludeTemplate(el, options);
	    }
	  }
	  if (isFragment(el)) {
	    // anchors for fragment instance
	    // passing in `persist: true` to avoid them being
	    // discarded by IE during template cloning
	    prepend(createAnchor('v-start', true), el);
	    el.appendChild(createAnchor('v-end', true));
	  }
	  return el;
	}
	
	/**
	 * Process the template option.
	 * If the replace option is true this will swap the $el.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */
	
	function transcludeTemplate(el, options) {
	  var template = options.template;
	  var frag = parseTemplate(template, true);
	  if (frag) {
	    var replacer = frag.firstChild;
	    var tag = replacer.tagName && replacer.tagName.toLowerCase();
	    if (options.replace) {
	      /* istanbul ignore if */
	      if (el === document.body) {
	        process.env.NODE_ENV !== 'production' && warn('You are mounting an instance with a template to ' + '<body>. This will replace <body> entirely. You ' + 'should probably use `replace: false` here.');
	      }
	      // there are many cases where the instance must
	      // become a fragment instance: basically anything that
	      // can create more than 1 root nodes.
	      if (
	      // multi-children template
	      frag.childNodes.length > 1 ||
	      // non-element template
	      replacer.nodeType !== 1 ||
	      // single nested component
	      tag === 'component' || resolveAsset(options, 'components', tag) || hasBindAttr(replacer, 'is') ||
	      // element directive
	      resolveAsset(options, 'elementDirectives', tag) ||
	      // for block
	      replacer.hasAttribute('v-for') ||
	      // if block
	      replacer.hasAttribute('v-if')) {
	        return frag;
	      } else {
	        options._replacerAttrs = extractAttrs(replacer);
	        mergeAttrs(el, replacer);
	        return replacer;
	      }
	    } else {
	      el.appendChild(frag);
	      return el;
	    }
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid template option: ' + template);
	  }
	}
	
	/**
	 * Helper to extract a component container's attributes
	 * into a plain object array.
	 *
	 * @param {Element} el
	 * @return {Array}
	 */
	
	function extractAttrs(el) {
	  if (el.nodeType === 1 && el.hasAttributes()) {
	    return toArray(el.attributes);
	  }
	}
	
	/**
	 * Merge the attributes of two elements, and make sure
	 * the class names are merged properly.
	 *
	 * @param {Element} from
	 * @param {Element} to
	 */
	
	function mergeAttrs(from, to) {
	  var attrs = from.attributes;
	  var i = attrs.length;
	  var name, value;
	  while (i--) {
	    name = attrs[i].name;
	    value = attrs[i].value;
	    if (!to.hasAttribute(name) && !specialCharRE.test(name)) {
	      to.setAttribute(name, value);
	    } else if (name === 'class' && !parseText(value)) {
	      value.trim().split(/\s+/).forEach(function (cls) {
	        addClass(to, cls);
	      });
	    }
	  }
	}
	
	/**
	 * Scan and determine slot content distribution.
	 * We do this during transclusion instead at compile time so that
	 * the distribution is decoupled from the compilation order of
	 * the slots.
	 *
	 * @param {Element|DocumentFragment} template
	 * @param {Element} content
	 * @param {Vue} vm
	 */
	
	function resolveSlots(vm, content) {
	  if (!content) {
	    return;
	  }
	  var contents = vm._slotContents = Object.create(null);
	  var el, name;
	  for (var i = 0, l = content.children.length; i < l; i++) {
	    el = content.children[i];
	    /* eslint-disable no-cond-assign */
	    if (name = el.getAttribute('slot')) {
	      (contents[name] || (contents[name] = [])).push(el);
	    }
	    /* eslint-enable no-cond-assign */
	    if (process.env.NODE_ENV !== 'production' && getBindAttr(el, 'slot')) {
	      warn('The "slot" attribute must be static.');
	    }
	  }
	  for (name in contents) {
	    contents[name] = extractFragment(contents[name], content);
	  }
	  if (content.hasChildNodes()) {
	    contents['default'] = extractFragment(content.childNodes, content);
	  }
	}
	
	/**
	 * Extract qualified content nodes from a node list.
	 *
	 * @param {NodeList} nodes
	 * @return {DocumentFragment}
	 */
	
	function extractFragment(nodes, parent) {
	  var frag = document.createDocumentFragment();
	  nodes = toArray(nodes);
	  for (var i = 0, l = nodes.length; i < l; i++) {
	    var node = nodes[i];
	    if (isTemplate(node) && !node.hasAttribute('v-if') && !node.hasAttribute('v-for')) {
	      parent.removeChild(node);
	      node = parseTemplate(node);
	    }
	    frag.appendChild(node);
	  }
	  return frag;
	}
	
	
	
	var compiler = Object.freeze({
		compile: compile,
		compileAndLinkProps: compileAndLinkProps,
		compileRoot: compileRoot,
		transclude: transclude,
		resolveSlots: resolveSlots
	});
	
	function stateMixin (Vue) {
	  /**
	   * Accessor for `$data` property, since setting $data
	   * requires observing the new object and updating
	   * proxied properties.
	   */
	
	  Object.defineProperty(Vue.prototype, '$data', {
	    get: function get() {
	      return this._data;
	    },
	    set: function set(newData) {
	      if (newData !== this._data) {
	        this._setData(newData);
	      }
	    }
	  });
	
	  /**
	   * Setup the scope of an instance, which contains:
	   * - observed data
	   * - computed properties
	   * - user methods
	   * - meta properties
	   */
	
	  Vue.prototype._initState = function () {
	    this._initProps();
	    this._initMeta();
	    this._initMethods();
	    this._initData();
	    this._initComputed();
	  };
	
	  /**
	   * Initialize props.
	   */
	
	  Vue.prototype._initProps = function () {
	    var options = this.$options;
	    var el = options.el;
	    var props = options.props;
	    if (props && !el) {
	      process.env.NODE_ENV !== 'production' && warn('Props will not be compiled if no `el` option is ' + 'provided at instantiation.');
	    }
	    // make sure to convert string selectors into element now
	    el = options.el = query(el);
	    this._propsUnlinkFn = el && el.nodeType === 1 && props
	    // props must be linked in proper scope if inside v-for
	    ? compileAndLinkProps(this, el, props, this._scope) : null;
	  };
	
	  /**
	   * Initialize the data.
	   */
	
	  Vue.prototype._initData = function () {
	    var dataFn = this.$options.data;
	    var data = this._data = dataFn ? dataFn() : {};
	    if (!isPlainObject(data)) {
	      data = {};
	      process.env.NODE_ENV !== 'production' && warn('data functions should return an object.');
	    }
	    var props = this._props;
	    var runtimeData = this._runtimeData ? typeof this._runtimeData === 'function' ? this._runtimeData() : this._runtimeData : null;
	    // proxy data on instance
	    var keys = Object.keys(data);
	    var i, key;
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      // there are two scenarios where we can proxy a data key:
	      // 1. it's not already defined as a prop
	      // 2. it's provided via a instantiation option AND there are no
	      //    template prop present
	      if (!props || !hasOwn(props, key) || runtimeData && hasOwn(runtimeData, key) && props[key].raw === null) {
	        this._proxy(key);
	      } else if (process.env.NODE_ENV !== 'production') {
	        warn('Data field "' + key + '" is already defined ' + 'as a prop. Use prop default value instead.');
	      }
	    }
	    // observe data
	    observe(data, this);
	  };
	
	  /**
	   * Swap the instance's $data. Called in $data's setter.
	   *
	   * @param {Object} newData
	   */
	
	  Vue.prototype._setData = function (newData) {
	    newData = newData || {};
	    var oldData = this._data;
	    this._data = newData;
	    var keys, key, i;
	    // unproxy keys not present in new data
	    keys = Object.keys(oldData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!(key in newData)) {
	        this._unproxy(key);
	      }
	    }
	    // proxy keys not already proxied,
	    // and trigger change for changed values
	    keys = Object.keys(newData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!hasOwn(this, key)) {
	        // new property
	        this._proxy(key);
	      }
	    }
	    oldData.__ob__.removeVm(this);
	    observe(newData, this);
	    this._digest();
	  };
	
	  /**
	   * Proxy a property, so that
	   * vm.prop === vm._data.prop
	   *
	   * @param {String} key
	   */
	
	  Vue.prototype._proxy = function (key) {
	    if (!isReserved(key)) {
	      // need to store ref to self here
	      // because these getter/setters might
	      // be called by child scopes via
	      // prototype inheritance.
	      var self = this;
	      Object.defineProperty(self, key, {
	        configurable: true,
	        enumerable: true,
	        get: function proxyGetter() {
	          return self._data[key];
	        },
	        set: function proxySetter(val) {
	          self._data[key] = val;
	        }
	      });
	    }
	  };
	
	  /**
	   * Unproxy a property.
	   *
	   * @param {String} key
	   */
	
	  Vue.prototype._unproxy = function (key) {
	    if (!isReserved(key)) {
	      delete this[key];
	    }
	  };
	
	  /**
	   * Force update on every watcher in scope.
	   */
	
	  Vue.prototype._digest = function () {
	    for (var i = 0, l = this._watchers.length; i < l; i++) {
	      this._watchers[i].update(true); // shallow updates
	    }
	  };
	
	  /**
	   * Setup computed properties. They are essentially
	   * special getter/setters
	   */
	
	  function noop() {}
	  Vue.prototype._initComputed = function () {
	    var computed = this.$options.computed;
	    if (computed) {
	      for (var key in computed) {
	        var userDef = computed[key];
	        var def = {
	          enumerable: true,
	          configurable: true
	        };
	        if (typeof userDef === 'function') {
	          def.get = makeComputedGetter(userDef, this);
	          def.set = noop;
	        } else {
	          def.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, this) : bind(userDef.get, this) : noop;
	          def.set = userDef.set ? bind(userDef.set, this) : noop;
	        }
	        Object.defineProperty(this, key, def);
	      }
	    }
	  };
	
	  function makeComputedGetter(getter, owner) {
	    var watcher = new Watcher(owner, getter, null, {
	      lazy: true
	    });
	    return function computedGetter() {
	      if (watcher.dirty) {
	        watcher.evaluate();
	      }
	      if (Dep.target) {
	        watcher.depend();
	      }
	      return watcher.value;
	    };
	  }
	
	  /**
	   * Setup instance methods. Methods must be bound to the
	   * instance since they might be passed down as a prop to
	   * child components.
	   */
	
	  Vue.prototype._initMethods = function () {
	    var methods = this.$options.methods;
	    if (methods) {
	      for (var key in methods) {
	        this[key] = bind(methods[key], this);
	      }
	    }
	  };
	
	  /**
	   * Initialize meta information like $index, $key & $value.
	   */
	
	  Vue.prototype._initMeta = function () {
	    var metas = this.$options._meta;
	    if (metas) {
	      for (var key in metas) {
	        defineReactive(this, key, metas[key]);
	      }
	    }
	  };
	}
	
	var eventRE = /^v-on:|^@/;
	
	function eventsMixin (Vue) {
	  /**
	   * Setup the instance's option events & watchers.
	   * If the value is a string, we pull it from the
	   * instance's methods by name.
	   */
	
	  Vue.prototype._initEvents = function () {
	    var options = this.$options;
	    if (options._asComponent) {
	      registerComponentEvents(this, options.el);
	    }
	    registerCallbacks(this, '$on', options.events);
	    registerCallbacks(this, '$watch', options.watch);
	  };
	
	  /**
	   * Register v-on events on a child component
	   *
	   * @param {Vue} vm
	   * @param {Element} el
	   */
	
	  function registerComponentEvents(vm, el) {
	    var attrs = el.attributes;
	    var name, handler;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      name = attrs[i].name;
	      if (eventRE.test(name)) {
	        name = name.replace(eventRE, '');
	        handler = (vm._scope || vm._context).$eval(attrs[i].value, true);
	        if (typeof handler === 'function') {
	          handler._fromParent = true;
	          vm.$on(name.replace(eventRE), handler);
	        } else if (process.env.NODE_ENV !== 'production') {
	          warn('v-on:' + name + '="' + attrs[i].value + '"' + (vm.$options.name ? ' on component <' + vm.$options.name + '>' : '') + ' expects a function value, got ' + handler);
	        }
	      }
	    }
	  }
	
	  /**
	   * Register callbacks for option events and watchers.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {Object} hash
	   */
	
	  function registerCallbacks(vm, action, hash) {
	    if (!hash) return;
	    var handlers, key, i, j;
	    for (key in hash) {
	      handlers = hash[key];
	      if (isArray(handlers)) {
	        for (i = 0, j = handlers.length; i < j; i++) {
	          register(vm, action, key, handlers[i]);
	        }
	      } else {
	        register(vm, action, key, handlers);
	      }
	    }
	  }
	
	  /**
	   * Helper to register an event/watch callback.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {String} key
	   * @param {Function|String|Object} handler
	   * @param {Object} [options]
	   */
	
	  function register(vm, action, key, handler, options) {
	    var type = typeof handler;
	    if (type === 'function') {
	      vm[action](key, handler, options);
	    } else if (type === 'string') {
	      var methods = vm.$options.methods;
	      var method = methods && methods[handler];
	      if (method) {
	        vm[action](key, method, options);
	      } else {
	        process.env.NODE_ENV !== 'production' && warn('Unknown method: "' + handler + '" when ' + 'registering callback for ' + action + ': "' + key + '".');
	      }
	    } else if (handler && type === 'object') {
	      register(vm, action, key, handler.handler, handler);
	    }
	  }
	
	  /**
	   * Setup recursive attached/detached calls
	   */
	
	  Vue.prototype._initDOMHooks = function () {
	    this.$on('hook:attached', onAttached);
	    this.$on('hook:detached', onDetached);
	  };
	
	  /**
	   * Callback to recursively call attached hook on children
	   */
	
	  function onAttached() {
	    if (!this._isAttached) {
	      this._isAttached = true;
	      this.$children.forEach(callAttach);
	    }
	  }
	
	  /**
	   * Iterator to call attached hook
	   *
	   * @param {Vue} child
	   */
	
	  function callAttach(child) {
	    if (!child._isAttached && inDoc(child.$el)) {
	      child._callHook('attached');
	    }
	  }
	
	  /**
	   * Callback to recursively call detached hook on children
	   */
	
	  function onDetached() {
	    if (this._isAttached) {
	      this._isAttached = false;
	      this.$children.forEach(callDetach);
	    }
	  }
	
	  /**
	   * Iterator to call detached hook
	   *
	   * @param {Vue} child
	   */
	
	  function callDetach(child) {
	    if (child._isAttached && !inDoc(child.$el)) {
	      child._callHook('detached');
	    }
	  }
	
	  /**
	   * Trigger all handlers for a hook
	   *
	   * @param {String} hook
	   */
	
	  Vue.prototype._callHook = function (hook) {
	    this.$emit('pre-hook:' + hook);
	    var handlers = this.$options[hook];
	    if (handlers) {
	      for (var i = 0, j = handlers.length; i < j; i++) {
	        handlers[i].call(this);
	      }
	    }
	    this.$emit('hook:' + hook);
	  };
	}
	
	function noop() {}
	
	/**
	 * A directive links a DOM element with a piece of data,
	 * which is the result of evaluating an expression.
	 * It registers a watcher with the expression and calls
	 * the DOM update function when a change is triggered.
	 *
	 * @param {Object} descriptor
	 *                 - {String} name
	 *                 - {Object} def
	 *                 - {String} expression
	 *                 - {Array<Object>} [filters]
	 *                 - {Object} [modifiers]
	 *                 - {Boolean} literal
	 *                 - {String} attr
	 *                 - {String} arg
	 *                 - {String} raw
	 *                 - {String} [ref]
	 *                 - {Array<Object>} [interp]
	 *                 - {Boolean} [hasOneTime]
	 * @param {Vue} vm
	 * @param {Node} el
	 * @param {Vue} [host] - transclusion host component
	 * @param {Object} [scope] - v-for scope
	 * @param {Fragment} [frag] - owner fragment
	 * @constructor
	 */
	function Directive(descriptor, vm, el, host, scope, frag) {
	  this.vm = vm;
	  this.el = el;
	  // copy descriptor properties
	  this.descriptor = descriptor;
	  this.name = descriptor.name;
	  this.expression = descriptor.expression;
	  this.arg = descriptor.arg;
	  this.modifiers = descriptor.modifiers;
	  this.filters = descriptor.filters;
	  this.literal = this.modifiers && this.modifiers.literal;
	  // private
	  this._locked = false;
	  this._bound = false;
	  this._listeners = null;
	  // link context
	  this._host = host;
	  this._scope = scope;
	  this._frag = frag;
	  // store directives on node in dev mode
	  if (process.env.NODE_ENV !== 'production' && this.el) {
	    this.el._vue_directives = this.el._vue_directives || [];
	    this.el._vue_directives.push(this);
	  }
	}
	
	/**
	 * Initialize the directive, mixin definition properties,
	 * setup the watcher, call definition bind() and update()
	 * if present.
	 */
	
	Directive.prototype._bind = function () {
	  var name = this.name;
	  var descriptor = this.descriptor;
	
	  // remove attribute
	  if ((name !== 'cloak' || this.vm._isCompiled) && this.el && this.el.removeAttribute) {
	    var attr = descriptor.attr || 'v-' + name;
	    this.el.removeAttribute(attr);
	  }
	
	  // copy def properties
	  var def = descriptor.def;
	  if (typeof def === 'function') {
	    this.update = def;
	  } else {
	    extend(this, def);
	  }
	
	  // setup directive params
	  this._setupParams();
	
	  // initial bind
	  if (this.bind) {
	    this.bind();
	  }
	  this._bound = true;
	
	  if (this.literal) {
	    this.update && this.update(descriptor.raw);
	  } else if ((this.expression || this.modifiers) && (this.update || this.twoWay) && !this._checkStatement()) {
	    // wrapped updater for context
	    var dir = this;
	    if (this.update) {
	      this._update = function (val, oldVal) {
	        if (!dir._locked) {
	          dir.update(val, oldVal);
	        }
	      };
	    } else {
	      this._update = noop;
	    }
	    var preProcess = this._preProcess ? bind(this._preProcess, this) : null;
	    var postProcess = this._postProcess ? bind(this._postProcess, this) : null;
	    var watcher = this._watcher = new Watcher(this.vm, this.expression, this._update, // callback
	    {
	      filters: this.filters,
	      twoWay: this.twoWay,
	      deep: this.deep,
	      preProcess: preProcess,
	      postProcess: postProcess,
	      scope: this._scope
	    });
	    // v-model with inital inline value need to sync back to
	    // model instead of update to DOM on init. They would
	    // set the afterBind hook to indicate that.
	    if (this.afterBind) {
	      this.afterBind();
	    } else if (this.update) {
	      this.update(watcher.value);
	    }
	  }
	};
	
	/**
	 * Setup all param attributes, e.g. track-by,
	 * transition-mode, etc...
	 */
	
	Directive.prototype._setupParams = function () {
	  if (!this.params) {
	    return;
	  }
	  var params = this.params;
	  // swap the params array with a fresh object.
	  this.params = Object.create(null);
	  var i = params.length;
	  var key, val, mappedKey;
	  while (i--) {
	    key = hyphenate(params[i]);
	    mappedKey = camelize(key);
	    val = getBindAttr(this.el, key);
	    if (val != null) {
	      // dynamic
	      this._setupParamWatcher(mappedKey, val);
	    } else {
	      // static
	      val = getAttr(this.el, key);
	      if (val != null) {
	        this.params[mappedKey] = val === '' ? true : val;
	      }
	    }
	  }
	};
	
	/**
	 * Setup a watcher for a dynamic param.
	 *
	 * @param {String} key
	 * @param {String} expression
	 */
	
	Directive.prototype._setupParamWatcher = function (key, expression) {
	  var self = this;
	  var called = false;
	  var unwatch = (this._scope || this.vm).$watch(expression, function (val, oldVal) {
	    self.params[key] = val;
	    // since we are in immediate mode,
	    // only call the param change callbacks if this is not the first update.
	    if (called) {
	      var cb = self.paramWatchers && self.paramWatchers[key];
	      if (cb) {
	        cb.call(self, val, oldVal);
	      }
	    } else {
	      called = true;
	    }
	  }, {
	    immediate: true,
	    user: false
	  });(this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(unwatch);
	};
	
	/**
	 * Check if the directive is a function caller
	 * and if the expression is a callable one. If both true,
	 * we wrap up the expression and use it as the event
	 * handler.
	 *
	 * e.g. on-click="a++"
	 *
	 * @return {Boolean}
	 */
	
	Directive.prototype._checkStatement = function () {
	  var expression = this.expression;
	  if (expression && this.acceptStatement && !isSimplePath(expression)) {
	    var fn = parseExpression(expression).get;
	    var scope = this._scope || this.vm;
	    var handler = function handler(e) {
	      scope.$event = e;
	      fn.call(scope, scope);
	      scope.$event = null;
	    };
	    if (this.filters) {
	      handler = scope._applyFilters(handler, null, this.filters);
	    }
	    this.update(handler);
	    return true;
	  }
	};
	
	/**
	 * Set the corresponding value with the setter.
	 * This should only be used in two-way directives
	 * e.g. v-model.
	 *
	 * @param {*} value
	 * @public
	 */
	
	Directive.prototype.set = function (value) {
	  /* istanbul ignore else */
	  if (this.twoWay) {
	    this._withLock(function () {
	      this._watcher.set(value);
	    });
	  } else if (process.env.NODE_ENV !== 'production') {
	    warn('Directive.set() can only be used inside twoWay' + 'directives.');
	  }
	};
	
	/**
	 * Execute a function while preventing that function from
	 * triggering updates on this directive instance.
	 *
	 * @param {Function} fn
	 */
	
	Directive.prototype._withLock = function (fn) {
	  var self = this;
	  self._locked = true;
	  fn.call(self);
	  nextTick(function () {
	    self._locked = false;
	  });
	};
	
	/**
	 * Convenience method that attaches a DOM event listener
	 * to the directive element and autometically tears it down
	 * during unbind.
	 *
	 * @param {String} event
	 * @param {Function} handler
	 * @param {Boolean} [useCapture]
	 */
	
	Directive.prototype.on = function (event, handler, useCapture) {
	  on(this.el, event, handler, useCapture);(this._listeners || (this._listeners = [])).push([event, handler]);
	};
	
	/**
	 * Teardown the watcher and call unbind.
	 */
	
	Directive.prototype._teardown = function () {
	  if (this._bound) {
	    this._bound = false;
	    if (this.unbind) {
	      this.unbind();
	    }
	    if (this._watcher) {
	      this._watcher.teardown();
	    }
	    var listeners = this._listeners;
	    var i;
	    if (listeners) {
	      i = listeners.length;
	      while (i--) {
	        off(this.el, listeners[i][0], listeners[i][1]);
	      }
	    }
	    var unwatchFns = this._paramUnwatchFns;
	    if (unwatchFns) {
	      i = unwatchFns.length;
	      while (i--) {
	        unwatchFns[i]();
	      }
	    }
	    if (process.env.NODE_ENV !== 'production' && this.el) {
	      this.el._vue_directives.$remove(this);
	    }
	    this.vm = this.el = this._watcher = this._listeners = null;
	  }
	};
	
	function lifecycleMixin (Vue) {
	  /**
	   * Update v-ref for component.
	   *
	   * @param {Boolean} remove
	   */
	
	  Vue.prototype._updateRef = function (remove) {
	    var ref = this.$options._ref;
	    if (ref) {
	      var refs = (this._scope || this._context).$refs;
	      if (remove) {
	        if (refs[ref] === this) {
	          refs[ref] = null;
	        }
	      } else {
	        refs[ref] = this;
	      }
	    }
	  };
	
	  /**
	   * Transclude, compile and link element.
	   *
	   * If a pre-compiled linker is available, that means the
	   * passed in element will be pre-transcluded and compiled
	   * as well - all we need to do is to call the linker.
	   *
	   * Otherwise we need to call transclude/compile/link here.
	   *
	   * @param {Element} el
	   */
	
	  Vue.prototype._compile = function (el) {
	    var options = this.$options;
	
	    // transclude and init element
	    // transclude can potentially replace original
	    // so we need to keep reference; this step also injects
	    // the template and caches the original attributes
	    // on the container node and replacer node.
	    var original = el;
	    el = transclude(el, options);
	    this._initElement(el);
	
	    // handle v-pre on root node (#2026)
	    if (el.nodeType === 1 && getAttr(el, 'v-pre') !== null) {
	      return;
	    }
	
	    // root is always compiled per-instance, because
	    // container attrs and props can be different every time.
	    var contextOptions = this._context && this._context.$options;
	    var rootLinker = compileRoot(el, options, contextOptions);
	
	    // resolve slot distribution
	    resolveSlots(this, options._content);
	
	    // compile and link the rest
	    var contentLinkFn;
	    var ctor = this.constructor;
	    // component compilation can be cached
	    // as long as it's not using inline-template
	    if (options._linkerCachable) {
	      contentLinkFn = ctor.linker;
	      if (!contentLinkFn) {
	        contentLinkFn = ctor.linker = compile(el, options);
	      }
	    }
	
	    // link phase
	    // make sure to link root with prop scope!
	    var rootUnlinkFn = rootLinker(this, el, this._scope);
	    var contentUnlinkFn = contentLinkFn ? contentLinkFn(this, el) : compile(el, options)(this, el);
	
	    // register composite unlink function
	    // to be called during instance destruction
	    this._unlinkFn = function () {
	      rootUnlinkFn();
	      // passing destroying: true to avoid searching and
	      // splicing the directives
	      contentUnlinkFn(true);
	    };
	
	    // finally replace original
	    if (options.replace) {
	      replace(original, el);
	    }
	
	    this._isCompiled = true;
	    this._callHook('compiled');
	  };
	
	  /**
	   * Initialize instance element. Called in the public
	   * $mount() method.
	   *
	   * @param {Element} el
	   */
	
	  Vue.prototype._initElement = function (el) {
	    if (isFragment(el)) {
	      this._isFragment = true;
	      this.$el = this._fragmentStart = el.firstChild;
	      this._fragmentEnd = el.lastChild;
	      // set persisted text anchors to empty
	      if (this._fragmentStart.nodeType === 3) {
	        this._fragmentStart.data = this._fragmentEnd.data = '';
	      }
	      this._fragment = el;
	    } else {
	      this.$el = el;
	    }
	    this.$el.__vue__ = this;
	    this._callHook('beforeCompile');
	  };
	
	  /**
	   * Create and bind a directive to an element.
	   *
	   * @param {Object} descriptor - parsed directive descriptor
	   * @param {Node} node   - target node
	   * @param {Vue} [host] - transclusion host component
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - owner fragment
	   */
	
	  Vue.prototype._bindDir = function (descriptor, node, host, scope, frag) {
	    this._directives.push(new Directive(descriptor, this, node, host, scope, frag));
	  };
	
	  /**
	   * Teardown an instance, unobserves the data, unbind all the
	   * directives, turn off all the event listeners, etc.
	   *
	   * @param {Boolean} remove - whether to remove the DOM node.
	   * @param {Boolean} deferCleanup - if true, defer cleanup to
	   *                                 be called later
	   */
	
	  Vue.prototype._destroy = function (remove, deferCleanup) {
	    if (this._isBeingDestroyed) {
	      if (!deferCleanup) {
	        this._cleanup();
	      }
	      return;
	    }
	
	    var destroyReady;
	    var pendingRemoval;
	
	    var self = this;
	    // Cleanup should be called either synchronously or asynchronoysly as
	    // callback of this.$remove(), or if remove and deferCleanup are false.
	    // In any case it should be called after all other removing, unbinding and
	    // turning of is done
	    var cleanupIfPossible = function cleanupIfPossible() {
	      if (destroyReady && !pendingRemoval && !deferCleanup) {
	        self._cleanup();
	      }
	    };
	
	    // remove DOM element
	    if (remove && this.$el) {
	      pendingRemoval = true;
	      this.$remove(function () {
	        pendingRemoval = false;
	        cleanupIfPossible();
	      });
	    }
	
	    this._callHook('beforeDestroy');
	    this._isBeingDestroyed = true;
	    var i;
	    // remove self from parent. only necessary
	    // if parent is not being destroyed as well.
	    var parent = this.$parent;
	    if (parent && !parent._isBeingDestroyed) {
	      parent.$children.$remove(this);
	      // unregister ref (remove: true)
	      this._updateRef(true);
	    }
	    // destroy all children.
	    i = this.$children.length;
	    while (i--) {
	      this.$children[i].$destroy();
	    }
	    // teardown props
	    if (this._propsUnlinkFn) {
	      this._propsUnlinkFn();
	    }
	    // teardown all directives. this also tearsdown all
	    // directive-owned watchers.
	    if (this._unlinkFn) {
	      this._unlinkFn();
	    }
	    i = this._watchers.length;
	    while (i--) {
	      this._watchers[i].teardown();
	    }
	    // remove reference to self on $el
	    if (this.$el) {
	      this.$el.__vue__ = null;
	    }
	
	    destroyReady = true;
	    cleanupIfPossible();
	  };
	
	  /**
	   * Clean up to ensure garbage collection.
	   * This is called after the leave transition if there
	   * is any.
	   */
	
	  Vue.prototype._cleanup = function () {
	    if (this._isDestroyed) {
	      return;
	    }
	    // remove self from owner fragment
	    // do it in cleanup so that we can call $destroy with
	    // defer right when a fragment is about to be removed.
	    if (this._frag) {
	      this._frag.children.$remove(this);
	    }
	    // remove reference from data ob
	    // frozen object may not have observer.
	    if (this._data.__ob__) {
	      this._data.__ob__.removeVm(this);
	    }
	    // Clean up references to private properties and other
	    // instances. preserve reference to _data so that proxy
	    // accessors still work. The only potential side effect
	    // here is that mutating the instance after it's destroyed
	    // may affect the state of other components that are still
	    // observing the same object, but that seems to be a
	    // reasonable responsibility for the user rather than
	    // always throwing an error on them.
	    this.$el = this.$parent = this.$root = this.$children = this._watchers = this._context = this._scope = this._directives = null;
	    // call the last hook...
	    this._isDestroyed = true;
	    this._callHook('destroyed');
	    // turn off all instance listeners.
	    this.$off();
	  };
	}
	
	function miscMixin (Vue) {
	  /**
	   * Apply a list of filter (descriptors) to a value.
	   * Using plain for loops here because this will be called in
	   * the getter of any watcher with filters so it is very
	   * performance sensitive.
	   *
	   * @param {*} value
	   * @param {*} [oldValue]
	   * @param {Array} filters
	   * @param {Boolean} write
	   * @return {*}
	   */
	
	  Vue.prototype._applyFilters = function (value, oldValue, filters, write) {
	    var filter, fn, args, arg, offset, i, l, j, k;
	    for (i = 0, l = filters.length; i < l; i++) {
	      filter = filters[write ? l - i - 1 : i];
	      fn = resolveAsset(this.$options, 'filters', filter.name);
	      if (process.env.NODE_ENV !== 'production') {
	        assertAsset(fn, 'filter', filter.name);
	      }
	      if (!fn) continue;
	      fn = write ? fn.write : fn.read || fn;
	      if (typeof fn !== 'function') continue;
	      args = write ? [value, oldValue] : [value];
	      offset = write ? 2 : 1;
	      if (filter.args) {
	        for (j = 0, k = filter.args.length; j < k; j++) {
	          arg = filter.args[j];
	          args[j + offset] = arg.dynamic ? this.$get(arg.value) : arg.value;
	        }
	      }
	      value = fn.apply(this, args);
	    }
	    return value;
	  };
	
	  /**
	   * Resolve a component, depending on whether the component
	   * is defined normally or using an async factory function.
	   * Resolves synchronously if already resolved, otherwise
	   * resolves asynchronously and caches the resolved
	   * constructor on the factory.
	   *
	   * @param {String|Function} value
	   * @param {Function} cb
	   */
	
	  Vue.prototype._resolveComponent = function (value, cb) {
	    var factory;
	    if (typeof value === 'function') {
	      factory = value;
	    } else {
	      factory = resolveAsset(this.$options, 'components', value);
	      if (process.env.NODE_ENV !== 'production') {
	        assertAsset(factory, 'component', value);
	      }
	    }
	    if (!factory) {
	      return;
	    }
	    // async component factory
	    if (!factory.options) {
	      if (factory.resolved) {
	        // cached
	        cb(factory.resolved);
	      } else if (factory.requested) {
	        // pool callbacks
	        factory.pendingCallbacks.push(cb);
	      } else {
	        factory.requested = true;
	        var cbs = factory.pendingCallbacks = [cb];
	        factory.call(this, function resolve(res) {
	          if (isPlainObject(res)) {
	            res = Vue.extend(res);
	          }
	          // cache resolved
	          factory.resolved = res;
	          // invoke callbacks
	          for (var i = 0, l = cbs.length; i < l; i++) {
	            cbs[i](res);
	          }
	        }, function reject(reason) {
	          process.env.NODE_ENV !== 'production' && warn('Failed to resolve async component' + (typeof value === 'string' ? ': ' + value : '') + '. ' + (reason ? '\nReason: ' + reason : ''));
	        });
	      }
	    } else {
	      // normal component
	      cb(factory);
	    }
	  };
	}
	
	var filterRE$1 = /[^|]\|[^|]/;
	
	function dataAPI (Vue) {
	  /**
	   * Get the value from an expression on this vm.
	   *
	   * @param {String} exp
	   * @param {Boolean} [asStatement]
	   * @return {*}
	   */
	
	  Vue.prototype.$get = function (exp, asStatement) {
	    var res = parseExpression(exp);
	    if (res) {
	      if (asStatement && !isSimplePath(exp)) {
	        var self = this;
	        return function statementHandler() {
	          self.$arguments = toArray(arguments);
	          var result = res.get.call(self, self);
	          self.$arguments = null;
	          return result;
	        };
	      } else {
	        try {
	          return res.get.call(this, this);
	        } catch (e) {}
	      }
	    }
	  };
	
	  /**
	   * Set the value from an expression on this vm.
	   * The expression must be a valid left-hand
	   * expression in an assignment.
	   *
	   * @param {String} exp
	   * @param {*} val
	   */
	
	  Vue.prototype.$set = function (exp, val) {
	    var res = parseExpression(exp, true);
	    if (res && res.set) {
	      res.set.call(this, this, val);
	    }
	  };
	
	  /**
	   * Delete a property on the VM
	   *
	   * @param {String} key
	   */
	
	  Vue.prototype.$delete = function (key) {
	    del(this._data, key);
	  };
	
	  /**
	   * Watch an expression, trigger callback when its
	   * value changes.
	   *
	   * @param {String|Function} expOrFn
	   * @param {Function} cb
	   * @param {Object} [options]
	   *                 - {Boolean} deep
	   *                 - {Boolean} immediate
	   * @return {Function} - unwatchFn
	   */
	
	  Vue.prototype.$watch = function (expOrFn, cb, options) {
	    var vm = this;
	    var parsed;
	    if (typeof expOrFn === 'string') {
	      parsed = parseDirective(expOrFn);
	      expOrFn = parsed.expression;
	    }
	    var watcher = new Watcher(vm, expOrFn, cb, {
	      deep: options && options.deep,
	      sync: options && options.sync,
	      filters: parsed && parsed.filters,
	      user: !options || options.user !== false
	    });
	    if (options && options.immediate) {
	      cb.call(vm, watcher.value);
	    }
	    return function unwatchFn() {
	      watcher.teardown();
	    };
	  };
	
	  /**
	   * Evaluate a text directive, including filters.
	   *
	   * @param {String} text
	   * @param {Boolean} [asStatement]
	   * @return {String}
	   */
	
	  Vue.prototype.$eval = function (text, asStatement) {
	    // check for filters.
	    if (filterRE$1.test(text)) {
	      var dir = parseDirective(text);
	      // the filter regex check might give false positive
	      // for pipes inside strings, so it's possible that
	      // we don't get any filters here
	      var val = this.$get(dir.expression, asStatement);
	      return dir.filters ? this._applyFilters(val, null, dir.filters) : val;
	    } else {
	      // no filter
	      return this.$get(text, asStatement);
	    }
	  };
	
	  /**
	   * Interpolate a piece of template text.
	   *
	   * @param {String} text
	   * @return {String}
	   */
	
	  Vue.prototype.$interpolate = function (text) {
	    var tokens = parseText(text);
	    var vm = this;
	    if (tokens) {
	      if (tokens.length === 1) {
	        return vm.$eval(tokens[0].value) + '';
	      } else {
	        return tokens.map(function (token) {
	          return token.tag ? vm.$eval(token.value) : token.value;
	        }).join('');
	      }
	    } else {
	      return text;
	    }
	  };
	
	  /**
	   * Log instance data as a plain JS object
	   * so that it is easier to inspect in console.
	   * This method assumes console is available.
	   *
	   * @param {String} [path]
	   */
	
	  Vue.prototype.$log = function (path) {
	    var data = path ? getPath(this._data, path) : this._data;
	    if (data) {
	      data = clean(data);
	    }
	    // include computed fields
	    if (!path) {
	      var key;
	      for (key in this.$options.computed) {
	        data[key] = clean(this[key]);
	      }
	      if (this._props) {
	        for (key in this._props) {
	          data[key] = clean(this[key]);
	        }
	      }
	    }
	    console.log(data);
	  };
	
	  /**
	   * "clean" a getter/setter converted object into a plain
	   * object copy.
	   *
	   * @param {Object} - obj
	   * @return {Object}
	   */
	
	  function clean(obj) {
	    return JSON.parse(JSON.stringify(obj));
	  }
	}
	
	function domAPI (Vue) {
	  /**
	   * Convenience on-instance nextTick. The callback is
	   * auto-bound to the instance, and this avoids component
	   * modules having to rely on the global Vue.
	   *
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$nextTick = function (fn) {
	    nextTick(fn, this);
	  };
	
	  /**
	   * Append instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$appendTo = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, append, appendWithTransition);
	  };
	
	  /**
	   * Prepend instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$prependTo = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.hasChildNodes()) {
	      this.$before(target.firstChild, cb, withTransition);
	    } else {
	      this.$appendTo(target, cb, withTransition);
	    }
	    return this;
	  };
	
	  /**
	   * Insert instance before target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$before = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, beforeWithCb, beforeWithTransition);
	  };
	
	  /**
	   * Insert instance after target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$after = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.nextSibling) {
	      this.$before(target.nextSibling, cb, withTransition);
	    } else {
	      this.$appendTo(target.parentNode, cb, withTransition);
	    }
	    return this;
	  };
	
	  /**
	   * Remove instance from DOM
	   *
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$remove = function (cb, withTransition) {
	    if (!this.$el.parentNode) {
	      return cb && cb();
	    }
	    var inDocument = this._isAttached && inDoc(this.$el);
	    // if we are not in document, no need to check
	    // for transitions
	    if (!inDocument) withTransition = false;
	    var self = this;
	    var realCb = function realCb() {
	      if (inDocument) self._callHook('detached');
	      if (cb) cb();
	    };
	    if (this._isFragment) {
	      removeNodeRange(this._fragmentStart, this._fragmentEnd, this, this._fragment, realCb);
	    } else {
	      var op = withTransition === false ? removeWithCb : removeWithTransition;
	      op(this.$el, this, realCb);
	    }
	    return this;
	  };
	
	  /**
	   * Shared DOM insertion function.
	   *
	   * @param {Vue} vm
	   * @param {Element} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition]
	   * @param {Function} op1 - op for non-transition insert
	   * @param {Function} op2 - op for transition insert
	   * @return vm
	   */
	
	  function insert(vm, target, cb, withTransition, op1, op2) {
	    target = query(target);
	    var targetIsDetached = !inDoc(target);
	    var op = withTransition === false || targetIsDetached ? op1 : op2;
	    var shouldCallHook = !targetIsDetached && !vm._isAttached && !inDoc(vm.$el);
	    if (vm._isFragment) {
	      mapNodeRange(vm._fragmentStart, vm._fragmentEnd, function (node) {
	        op(node, target, vm);
	      });
	      cb && cb();
	    } else {
	      op(vm.$el, target, vm, cb);
	    }
	    if (shouldCallHook) {
	      vm._callHook('attached');
	    }
	    return vm;
	  }
	
	  /**
	   * Check for selectors
	   *
	   * @param {String|Element} el
	   */
	
	  function query(el) {
	    return typeof el === 'string' ? document.querySelector(el) : el;
	  }
	
	  /**
	   * Append operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */
	
	  function append(el, target, vm, cb) {
	    target.appendChild(el);
	    if (cb) cb();
	  }
	
	  /**
	   * InsertBefore operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */
	
	  function beforeWithCb(el, target, vm, cb) {
	    before(el, target);
	    if (cb) cb();
	  }
	
	  /**
	   * Remove operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */
	
	  function removeWithCb(el, vm, cb) {
	    remove(el);
	    if (cb) cb();
	  }
	}
	
	function eventsAPI (Vue) {
	  /**
	   * Listen on the given `event` with `fn`.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$on = function (event, fn) {
	    (this._events[event] || (this._events[event] = [])).push(fn);
	    modifyListenerCount(this, event, 1);
	    return this;
	  };
	
	  /**
	   * Adds an `event` listener that will be invoked a single
	   * time then automatically removed.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$once = function (event, fn) {
	    var self = this;
	    function on() {
	      self.$off(event, on);
	      fn.apply(this, arguments);
	    }
	    on.fn = fn;
	    this.$on(event, on);
	    return this;
	  };
	
	  /**
	   * Remove the given callback for `event` or all
	   * registered callbacks.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$off = function (event, fn) {
	    var cbs;
	    // all
	    if (!arguments.length) {
	      if (this.$parent) {
	        for (event in this._events) {
	          cbs = this._events[event];
	          if (cbs) {
	            modifyListenerCount(this, event, -cbs.length);
	          }
	        }
	      }
	      this._events = {};
	      return this;
	    }
	    // specific event
	    cbs = this._events[event];
	    if (!cbs) {
	      return this;
	    }
	    if (arguments.length === 1) {
	      modifyListenerCount(this, event, -cbs.length);
	      this._events[event] = null;
	      return this;
	    }
	    // specific handler
	    var cb;
	    var i = cbs.length;
	    while (i--) {
	      cb = cbs[i];
	      if (cb === fn || cb.fn === fn) {
	        modifyListenerCount(this, event, -1);
	        cbs.splice(i, 1);
	        break;
	      }
	    }
	    return this;
	  };
	
	  /**
	   * Trigger an event on self.
	   *
	   * @param {String|Object} event
	   * @return {Boolean} shouldPropagate
	   */
	
	  Vue.prototype.$emit = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    var cbs = this._events[event];
	    var shouldPropagate = isSource || !cbs;
	    if (cbs) {
	      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
	      // this is a somewhat hacky solution to the question raised
	      // in #2102: for an inline component listener like <comp @test="doThis">,
	      // the propagation handling is somewhat broken. Therefore we
	      // need to treat these inline callbacks differently.
	      var hasParentCbs = isSource && cbs.some(function (cb) {
	        return cb._fromParent;
	      });
	      if (hasParentCbs) {
	        shouldPropagate = false;
	      }
	      var args = toArray(arguments, 1);
	      for (var i = 0, l = cbs.length; i < l; i++) {
	        var cb = cbs[i];
	        var res = cb.apply(this, args);
	        if (res === true && (!hasParentCbs || cb._fromParent)) {
	          shouldPropagate = true;
	        }
	      }
	    }
	    return shouldPropagate;
	  };
	
	  /**
	   * Recursively broadcast an event to all children instances.
	   *
	   * @param {String|Object} event
	   * @param {...*} additional arguments
	   */
	
	  Vue.prototype.$broadcast = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    // if no child has registered for this event,
	    // then there's no need to broadcast.
	    if (!this._eventsCount[event]) return;
	    var children = this.$children;
	    var args = toArray(arguments);
	    if (isSource) {
	      // use object event to indicate non-source emit
	      // on children
	      args[0] = { name: event, source: this };
	    }
	    for (var i = 0, l = children.length; i < l; i++) {
	      var child = children[i];
	      var shouldPropagate = child.$emit.apply(child, args);
	      if (shouldPropagate) {
	        child.$broadcast.apply(child, args);
	      }
	    }
	    return this;
	  };
	
	  /**
	   * Recursively propagate an event up the parent chain.
	   *
	   * @param {String} event
	   * @param {...*} additional arguments
	   */
	
	  Vue.prototype.$dispatch = function (event) {
	    var shouldPropagate = this.$emit.apply(this, arguments);
	    if (!shouldPropagate) return;
	    var parent = this.$parent;
	    var args = toArray(arguments);
	    // use object event to indicate non-source emit
	    // on parents
	    args[0] = { name: event, source: this };
	    while (parent) {
	      shouldPropagate = parent.$emit.apply(parent, args);
	      parent = shouldPropagate ? parent.$parent : null;
	    }
	    return this;
	  };
	
	  /**
	   * Modify the listener counts on all parents.
	   * This bookkeeping allows $broadcast to return early when
	   * no child has listened to a certain event.
	   *
	   * @param {Vue} vm
	   * @param {String} event
	   * @param {Number} count
	   */
	
	  var hookRE = /^hook:/;
	  function modifyListenerCount(vm, event, count) {
	    var parent = vm.$parent;
	    // hooks do not get broadcasted so no need
	    // to do bookkeeping for them
	    if (!parent || !count || hookRE.test(event)) return;
	    while (parent) {
	      parent._eventsCount[event] = (parent._eventsCount[event] || 0) + count;
	      parent = parent.$parent;
	    }
	  }
	}
	
	function lifecycleAPI (Vue) {
	  /**
	   * Set instance target element and kick off the compilation
	   * process. The passed in `el` can be a selector string, an
	   * existing Element, or a DocumentFragment (for block
	   * instances).
	   *
	   * @param {Element|DocumentFragment|string} el
	   * @public
	   */
	
	  Vue.prototype.$mount = function (el) {
	    if (this._isCompiled) {
	      process.env.NODE_ENV !== 'production' && warn('$mount() should be called only once.');
	      return;
	    }
	    el = query(el);
	    if (!el) {
	      el = document.createElement('div');
	    }
	    this._compile(el);
	    this._initDOMHooks();
	    if (inDoc(this.$el)) {
	      this._callHook('attached');
	      ready.call(this);
	    } else {
	      this.$once('hook:attached', ready);
	    }
	    return this;
	  };
	
	  /**
	   * Mark an instance as ready.
	   */
	
	  function ready() {
	    this._isAttached = true;
	    this._isReady = true;
	    this._callHook('ready');
	  }
	
	  /**
	   * Teardown the instance, simply delegate to the internal
	   * _destroy.
	   *
	   * @param {Boolean} remove
	   * @param {Boolean} deferCleanup
	   */
	
	  Vue.prototype.$destroy = function (remove, deferCleanup) {
	    this._destroy(remove, deferCleanup);
	  };
	
	  /**
	   * Partially compile a piece of DOM and return a
	   * decompile function.
	   *
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host]
	   * @param {Object} [scope]
	   * @param {Fragment} [frag]
	   * @return {Function}
	   */
	
	  Vue.prototype.$compile = function (el, host, scope, frag) {
	    return compile(el, this.$options, true)(this, el, host, scope, frag);
	  };
	}
	
	/**
	 * The exposed Vue constructor.
	 *
	 * API conventions:
	 * - public API methods/properties are prefixed with `$`
	 * - internal methods/properties are prefixed with `_`
	 * - non-prefixed properties are assumed to be proxied user
	 *   data.
	 *
	 * @constructor
	 * @param {Object} [options]
	 * @public
	 */
	
	function Vue(options) {
	  this._init(options);
	}
	
	// install internals
	initMixin(Vue);
	stateMixin(Vue);
	eventsMixin(Vue);
	lifecycleMixin(Vue);
	miscMixin(Vue);
	
	// install instance APIs
	dataAPI(Vue);
	domAPI(Vue);
	eventsAPI(Vue);
	lifecycleAPI(Vue);
	
	var slot = {
	
	  priority: SLOT,
	  params: ['name'],
	
	  bind: function bind() {
	    // this was resolved during component transclusion
	    var name = this.params.name || 'default';
	    var content = this.vm._slotContents && this.vm._slotContents[name];
	    if (!content || !content.hasChildNodes()) {
	      this.fallback();
	    } else {
	      this.compile(content.cloneNode(true), this.vm._context, this.vm);
	    }
	  },
	
	  compile: function compile(content, context, host) {
	    if (content && context) {
	      if (this.el.hasChildNodes() && content.childNodes.length === 1 && content.childNodes[0].nodeType === 1 && content.childNodes[0].hasAttribute('v-if')) {
	        // if the inserted slot has v-if
	        // inject fallback content as the v-else
	        var elseBlock = document.createElement('template');
	        elseBlock.setAttribute('v-else', '');
	        elseBlock.innerHTML = this.el.innerHTML;
	        // the else block should be compiled in child scope
	        elseBlock._context = this.vm;
	        content.appendChild(elseBlock);
	      }
	      var scope = host ? host._scope : this._scope;
	      this.unlink = context.$compile(content, host, scope, this._frag);
	    }
	    if (content) {
	      replace(this.el, content);
	    } else {
	      remove(this.el);
	    }
	  },
	
	  fallback: function fallback() {
	    this.compile(extractContent(this.el, true), this.vm);
	  },
	
	  unbind: function unbind() {
	    if (this.unlink) {
	      this.unlink();
	    }
	  }
	};
	
	var partial = {
	
	  priority: PARTIAL,
	
	  params: ['name'],
	
	  // watch changes to name for dynamic partials
	  paramWatchers: {
	    name: function name(value) {
	      vIf.remove.call(this);
	      if (value) {
	        this.insert(value);
	      }
	    }
	  },
	
	  bind: function bind() {
	    this.anchor = createAnchor('v-partial');
	    replace(this.el, this.anchor);
	    this.insert(this.params.name);
	  },
	
	  insert: function insert(id) {
	    var partial = resolveAsset(this.vm.$options, 'partials', id);
	    if (process.env.NODE_ENV !== 'production') {
	      assertAsset(partial, 'partial', id);
	    }
	    if (partial) {
	      this.factory = new FragmentFactory(this.vm, partial);
	      vIf.insert.call(this);
	    }
	  },
	
	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	  }
	};
	
	var elementDirectives = {
	  slot: slot,
	  partial: partial
	};
	
	var convertArray = vFor._postProcess;
	
	/**
	 * Limit filter for arrays
	 *
	 * @param {Number} n
	 * @param {Number} offset (Decimal expected)
	 */
	
	function limitBy(arr, n, offset) {
	  offset = offset ? parseInt(offset, 10) : 0;
	  n = toNumber(n);
	  return typeof n === 'number' ? arr.slice(offset, offset + n) : arr;
	}
	
	/**
	 * Filter filter for arrays
	 *
	 * @param {String} search
	 * @param {String} [delimiter]
	 * @param {String} ...dataKeys
	 */
	
	function filterBy(arr, search, delimiter) {
	  arr = convertArray(arr);
	  if (search == null) {
	    return arr;
	  }
	  if (typeof search === 'function') {
	    return arr.filter(search);
	  }
	  // cast to lowercase string
	  search = ('' + search).toLowerCase();
	  // allow optional `in` delimiter
	  // because why not
	  var n = delimiter === 'in' ? 3 : 2;
	  // extract and flatten keys
	  var keys = toArray(arguments, n).reduce(function (prev, cur) {
	    return prev.concat(cur);
	  }, []);
	  var res = [];
	  var item, key, val, j;
	  for (var i = 0, l = arr.length; i < l; i++) {
	    item = arr[i];
	    val = item && item.$value || item;
	    j = keys.length;
	    if (j) {
	      while (j--) {
	        key = keys[j];
	        if (key === '$key' && contains(item.$key, search) || contains(getPath(val, key), search)) {
	          res.push(item);
	          break;
	        }
	      }
	    } else if (contains(item, search)) {
	      res.push(item);
	    }
	  }
	  return res;
	}
	
	/**
	 * Filter filter for arrays
	 *
	 * @param {String} sortKey
	 * @param {String} reverse
	 */
	
	function orderBy(arr, sortKey, reverse) {
	  arr = convertArray(arr);
	  if (!sortKey) {
	    return arr;
	  }
	  var order = reverse && reverse < 0 ? -1 : 1;
	  // sort on a copy to avoid mutating original array
	  return arr.slice().sort(function (a, b) {
	    if (sortKey !== '$key') {
	      if (isObject(a) && '$value' in a) a = a.$value;
	      if (isObject(b) && '$value' in b) b = b.$value;
	    }
	    a = isObject(a) ? getPath(a, sortKey) : a;
	    b = isObject(b) ? getPath(b, sortKey) : b;
	    return a === b ? 0 : a > b ? order : -order;
	  });
	}
	
	/**
	 * String contain helper
	 *
	 * @param {*} val
	 * @param {String} search
	 */
	
	function contains(val, search) {
	  var i;
	  if (isPlainObject(val)) {
	    var keys = Object.keys(val);
	    i = keys.length;
	    while (i--) {
	      if (contains(val[keys[i]], search)) {
	        return true;
	      }
	    }
	  } else if (isArray(val)) {
	    i = val.length;
	    while (i--) {
	      if (contains(val[i], search)) {
	        return true;
	      }
	    }
	  } else if (val != null) {
	    return val.toString().toLowerCase().indexOf(search) > -1;
	  }
	}
	
	var digitsRE = /(\d{3})(?=\d)/g;
	
	// asset collections must be a plain object.
	var filters = {
	
	  orderBy: orderBy,
	  filterBy: filterBy,
	  limitBy: limitBy,
	
	  /**
	   * Stringify value.
	   *
	   * @param {Number} indent
	   */
	
	  json: {
	    read: function read(value, indent) {
	      return typeof value === 'string' ? value : JSON.stringify(value, null, Number(indent) || 2);
	    },
	    write: function write(value) {
	      try {
	        return JSON.parse(value);
	      } catch (e) {
	        return value;
	      }
	    }
	  },
	
	  /**
	   * 'abc' => 'Abc'
	   */
	
	  capitalize: function capitalize(value) {
	    if (!value && value !== 0) return '';
	    value = value.toString();
	    return value.charAt(0).toUpperCase() + value.slice(1);
	  },
	
	  /**
	   * 'abc' => 'ABC'
	   */
	
	  uppercase: function uppercase(value) {
	    return value || value === 0 ? value.toString().toUpperCase() : '';
	  },
	
	  /**
	   * 'AbC' => 'abc'
	   */
	
	  lowercase: function lowercase(value) {
	    return value || value === 0 ? value.toString().toLowerCase() : '';
	  },
	
	  /**
	   * 12345 => $12,345.00
	   *
	   * @param {String} sign
	   */
	
	  currency: function currency(value, _currency) {
	    value = parseFloat(value);
	    if (!isFinite(value) || !value && value !== 0) return '';
	    _currency = _currency != null ? _currency : '$';
	    var stringified = Math.abs(value).toFixed(2);
	    var _int = stringified.slice(0, -3);
	    var i = _int.length % 3;
	    var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
	    var _float = stringified.slice(-3);
	    var sign = value < 0 ? '-' : '';
	    return sign + _currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
	  },
	
	  /**
	   * 'item' => 'items'
	   *
	   * @params
	   *  an array of strings corresponding to
	   *  the single, double, triple ... forms of the word to
	   *  be pluralized. When the number to be pluralized
	   *  exceeds the length of the args, it will use the last
	   *  entry in the array.
	   *
	   *  e.g. ['single', 'double', 'triple', 'multiple']
	   */
	
	  pluralize: function pluralize(value) {
	    var args = toArray(arguments, 1);
	    return args.length > 1 ? args[value % 10 - 1] || args[args.length - 1] : args[0] + (value === 1 ? '' : 's');
	  },
	
	  /**
	   * Debounce a handler function.
	   *
	   * @param {Function} handler
	   * @param {Number} delay = 300
	   * @return {Function}
	   */
	
	  debounce: function debounce(handler, delay) {
	    if (!handler) return;
	    if (!delay) {
	      delay = 300;
	    }
	    return _debounce(handler, delay);
	  }
	};
	
	function installGlobalAPI (Vue) {
	  /**
	   * Vue and every constructor that extends Vue has an
	   * associated options object, which can be accessed during
	   * compilation steps as `this.constructor.options`.
	   *
	   * These can be seen as the default options of every
	   * Vue instance.
	   */
	
	  Vue.options = {
	    directives: directives,
	    elementDirectives: elementDirectives,
	    filters: filters,
	    transitions: {},
	    components: {},
	    partials: {},
	    replace: true
	  };
	
	  /**
	   * Expose useful internals
	   */
	
	  Vue.util = util;
	  Vue.config = config;
	  Vue.set = set;
	  Vue['delete'] = del;
	  Vue.nextTick = nextTick;
	
	  /**
	   * The following are exposed for advanced usage / plugins
	   */
	
	  Vue.compiler = compiler;
	  Vue.FragmentFactory = FragmentFactory;
	  Vue.internalDirectives = internalDirectives;
	  Vue.parsers = {
	    path: path,
	    text: text,
	    template: template,
	    directive: directive,
	    expression: expression
	  };
	
	  /**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */
	
	  Vue.cid = 0;
	  var cid = 1;
	
	  /**
	   * Class inheritance
	   *
	   * @param {Object} extendOptions
	   */
	
	  Vue.extend = function (extendOptions) {
	    extendOptions = extendOptions || {};
	    var Super = this;
	    var isFirstExtend = Super.cid === 0;
	    if (isFirstExtend && extendOptions._Ctor) {
	      return extendOptions._Ctor;
	    }
	    var name = extendOptions.name || Super.options.name;
	    if (process.env.NODE_ENV !== 'production') {
	      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
	        warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characaters and the hyphen.');
	        name = null;
	      }
	    }
	    var Sub = createClass(name || 'VueComponent');
	    Sub.prototype = Object.create(Super.prototype);
	    Sub.prototype.constructor = Sub;
	    Sub.cid = cid++;
	    Sub.options = mergeOptions(Super.options, extendOptions);
	    Sub['super'] = Super;
	    // allow further extension
	    Sub.extend = Super.extend;
	    // create asset registers, so extended classes
	    // can have their private assets too.
	    config._assetTypes.forEach(function (type) {
	      Sub[type] = Super[type];
	    });
	    // enable recursive self-lookup
	    if (name) {
	      Sub.options.components[name] = Sub;
	    }
	    // cache constructor
	    if (isFirstExtend) {
	      extendOptions._Ctor = Sub;
	    }
	    return Sub;
	  };
	
	  /**
	   * A function that returns a sub-class constructor with the
	   * given name. This gives us much nicer output when
	   * logging instances in the console.
	   *
	   * @param {String} name
	   * @return {Function}
	   */
	
	  function createClass(name) {
	    /* eslint-disable no-new-func */
	    return new Function('return function ' + classify(name) + ' (options) { this._init(options) }')();
	    /* eslint-enable no-new-func */
	  }
	
	  /**
	   * Plugin system
	   *
	   * @param {Object} plugin
	   */
	
	  Vue.use = function (plugin) {
	    /* istanbul ignore if */
	    if (plugin.installed) {
	      return;
	    }
	    // additional parameters
	    var args = toArray(arguments, 1);
	    args.unshift(this);
	    if (typeof plugin.install === 'function') {
	      plugin.install.apply(plugin, args);
	    } else {
	      plugin.apply(null, args);
	    }
	    plugin.installed = true;
	    return this;
	  };
	
	  /**
	   * Apply a global mixin by merging it into the default
	   * options.
	   */
	
	  Vue.mixin = function (mixin) {
	    Vue.options = mergeOptions(Vue.options, mixin);
	  };
	
	  /**
	   * Create asset registration methods with the following
	   * signature:
	   *
	   * @param {String} id
	   * @param {*} definition
	   */
	
	  config._assetTypes.forEach(function (type) {
	    Vue[type] = function (id, definition) {
	      if (!definition) {
	        return this.options[type + 's'][id];
	      } else {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          if (type === 'component' && (commonTagRE.test(id) || reservedTagRE.test(id))) {
	            warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);
	          }
	        }
	        if (type === 'component' && isPlainObject(definition)) {
	          definition.name = id;
	          definition = Vue.extend(definition);
	        }
	        this.options[type + 's'][id] = definition;
	        return definition;
	      }
	    };
	  });
	
	  // expose internal transition API
	  extend(Vue.transition, transition);
	}
	
	installGlobalAPI(Vue);
	
	Vue.version = '1.0.20';
	
	// devtools global hook
	/* istanbul ignore next */
	if (config.devtools) {
	  if (devtools) {
	    devtools.emit('init', Vue);
	  } else if (process.env.NODE_ENV !== 'production' && inBrowser && /Chrome\/\d+/.test(window.navigator.userAgent)) {
	    console.log('Download the Vue Devtools for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
	  }
	}
	
	module.exports = Vue;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(60)))

/***/ },
/* 60 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * vue-router v0.7.12
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  global.VueRouter = factory();
	}(this, function () { 'use strict';
	
	  var babelHelpers = {};
	
	  babelHelpers.classCallCheck = function (instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  };
	  function Target(path, matcher, delegate) {
	    this.path = path;
	    this.matcher = matcher;
	    this.delegate = delegate;
	  }
	
	  Target.prototype = {
	    to: function to(target, callback) {
	      var delegate = this.delegate;
	
	      if (delegate && delegate.willAddRoute) {
	        target = delegate.willAddRoute(this.matcher.target, target);
	      }
	
	      this.matcher.add(this.path, target);
	
	      if (callback) {
	        if (callback.length === 0) {
	          throw new Error("You must have an argument in the function passed to `to`");
	        }
	        this.matcher.addChild(this.path, target, callback, this.delegate);
	      }
	      return this;
	    }
	  };
	
	  function Matcher(target) {
	    this.routes = {};
	    this.children = {};
	    this.target = target;
	  }
	
	  Matcher.prototype = {
	    add: function add(path, handler) {
	      this.routes[path] = handler;
	    },
	
	    addChild: function addChild(path, target, callback, delegate) {
	      var matcher = new Matcher(target);
	      this.children[path] = matcher;
	
	      var match = generateMatch(path, matcher, delegate);
	
	      if (delegate && delegate.contextEntered) {
	        delegate.contextEntered(target, match);
	      }
	
	      callback(match);
	    }
	  };
	
	  function generateMatch(startingPath, matcher, delegate) {
	    return function (path, nestedCallback) {
	      var fullPath = startingPath + path;
	
	      if (nestedCallback) {
	        nestedCallback(generateMatch(fullPath, matcher, delegate));
	      } else {
	        return new Target(startingPath + path, matcher, delegate);
	      }
	    };
	  }
	
	  function addRoute(routeArray, path, handler) {
	    var len = 0;
	    for (var i = 0, l = routeArray.length; i < l; i++) {
	      len += routeArray[i].path.length;
	    }
	
	    path = path.substr(len);
	    var route = { path: path, handler: handler };
	    routeArray.push(route);
	  }
	
	  function eachRoute(baseRoute, matcher, callback, binding) {
	    var routes = matcher.routes;
	
	    for (var path in routes) {
	      if (routes.hasOwnProperty(path)) {
	        var routeArray = baseRoute.slice();
	        addRoute(routeArray, path, routes[path]);
	
	        if (matcher.children[path]) {
	          eachRoute(routeArray, matcher.children[path], callback, binding);
	        } else {
	          callback.call(binding, routeArray);
	        }
	      }
	    }
	  }
	
	  function map (callback, addRouteCallback) {
	    var matcher = new Matcher();
	
	    callback(generateMatch("", matcher, this.delegate));
	
	    eachRoute([], matcher, function (route) {
	      if (addRouteCallback) {
	        addRouteCallback(this, route);
	      } else {
	        this.add(route);
	      }
	    }, this);
	  }
	
	  var specials = ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\'];
	
	  var escapeRegex = new RegExp('(\\' + specials.join('|\\') + ')', 'g');
	
	  var noWarning = false;
	  function warn(msg) {
	    if (!noWarning && typeof console !== 'undefined') {
	      console.error('[vue-router] ' + msg);
	    }
	  }
	
	  function tryDecode(uri, asComponent) {
	    try {
	      return asComponent ? decodeURIComponent(uri) : decodeURI(uri);
	    } catch (e) {
	      warn('malformed URI' + (asComponent ? ' component: ' : ': ') + uri);
	    }
	  }
	
	  function isArray(test) {
	    return Object.prototype.toString.call(test) === "[object Array]";
	  }
	
	  // A Segment represents a segment in the original route description.
	  // Each Segment type provides an `eachChar` and `regex` method.
	  //
	  // The `eachChar` method invokes the callback with one or more character
	  // specifications. A character specification consumes one or more input
	  // characters.
	  //
	  // The `regex` method returns a regex fragment for the segment. If the
	  // segment is a dynamic of star segment, the regex fragment also includes
	  // a capture.
	  //
	  // A character specification contains:
	  //
	  // * `validChars`: a String with a list of all valid characters, or
	  // * `invalidChars`: a String with a list of all invalid characters
	  // * `repeat`: true if the character specification can repeat
	
	  function StaticSegment(string) {
	    this.string = string;
	  }
	  StaticSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      var string = this.string,
	          ch;
	
	      for (var i = 0, l = string.length; i < l; i++) {
	        ch = string.charAt(i);
	        callback({ validChars: ch });
	      }
	    },
	
	    regex: function regex() {
	      return this.string.replace(escapeRegex, '\\$1');
	    },
	
	    generate: function generate() {
	      return this.string;
	    }
	  };
	
	  function DynamicSegment(name) {
	    this.name = name;
	  }
	  DynamicSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      callback({ invalidChars: "/", repeat: true });
	    },
	
	    regex: function regex() {
	      return "([^/]+)";
	    },
	
	    generate: function generate(params) {
	      var val = params[this.name];
	      return val == null ? ":" + this.name : val;
	    }
	  };
	
	  function StarSegment(name) {
	    this.name = name;
	  }
	  StarSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      callback({ invalidChars: "", repeat: true });
	    },
	
	    regex: function regex() {
	      return "(.+)";
	    },
	
	    generate: function generate(params) {
	      var val = params[this.name];
	      return val == null ? ":" + this.name : val;
	    }
	  };
	
	  function EpsilonSegment() {}
	  EpsilonSegment.prototype = {
	    eachChar: function eachChar() {},
	    regex: function regex() {
	      return "";
	    },
	    generate: function generate() {
	      return "";
	    }
	  };
	
	  function parse(route, names, specificity) {
	    // normalize route as not starting with a "/". Recognition will
	    // also normalize.
	    if (route.charAt(0) === "/") {
	      route = route.substr(1);
	    }
	
	    var segments = route.split("/"),
	        results = [];
	
	    // A routes has specificity determined by the order that its different segments
	    // appear in. This system mirrors how the magnitude of numbers written as strings
	    // works.
	    // Consider a number written as: "abc". An example would be "200". Any other number written
	    // "xyz" will be smaller than "abc" so long as `a > z`. For instance, "199" is smaller
	    // then "200", even though "y" and "z" (which are both 9) are larger than "0" (the value
	    // of (`b` and `c`). This is because the leading symbol, "2", is larger than the other
	    // leading symbol, "1".
	    // The rule is that symbols to the left carry more weight than symbols to the right
	    // when a number is written out as a string. In the above strings, the leading digit
	    // represents how many 100's are in the number, and it carries more weight than the middle
	    // number which represents how many 10's are in the number.
	    // This system of number magnitude works well for route specificity, too. A route written as
	    // `a/b/c` will be more specific than `x/y/z` as long as `a` is more specific than
	    // `x`, irrespective of the other parts.
	    // Because of this similarity, we assign each type of segment a number value written as a
	    // string. We can find the specificity of compound routes by concatenating these strings
	    // together, from left to right. After we have looped through all of the segments,
	    // we convert the string to a number.
	    specificity.val = '';
	
	    for (var i = 0, l = segments.length; i < l; i++) {
	      var segment = segments[i],
	          match;
	
	      if (match = segment.match(/^:([^\/]+)$/)) {
	        results.push(new DynamicSegment(match[1]));
	        names.push(match[1]);
	        specificity.val += '3';
	      } else if (match = segment.match(/^\*([^\/]+)$/)) {
	        results.push(new StarSegment(match[1]));
	        specificity.val += '2';
	        names.push(match[1]);
	      } else if (segment === "") {
	        results.push(new EpsilonSegment());
	        specificity.val += '1';
	      } else {
	        results.push(new StaticSegment(segment));
	        specificity.val += '4';
	      }
	    }
	
	    specificity.val = +specificity.val;
	
	    return results;
	  }
	
	  // A State has a character specification and (`charSpec`) and a list of possible
	  // subsequent states (`nextStates`).
	  //
	  // If a State is an accepting state, it will also have several additional
	  // properties:
	  //
	  // * `regex`: A regular expression that is used to extract parameters from paths
	  //   that reached this accepting state.
	  // * `handlers`: Information on how to convert the list of captures into calls
	  //   to registered handlers with the specified parameters
	  // * `types`: How many static, dynamic or star segments in this route. Used to
	  //   decide which route to use if multiple registered routes match a path.
	  //
	  // Currently, State is implemented naively by looping over `nextStates` and
	  // comparing a character specification against a character. A more efficient
	  // implementation would use a hash of keys pointing at one or more next states.
	
	  function State(charSpec) {
	    this.charSpec = charSpec;
	    this.nextStates = [];
	  }
	
	  State.prototype = {
	    get: function get(charSpec) {
	      var nextStates = this.nextStates;
	
	      for (var i = 0, l = nextStates.length; i < l; i++) {
	        var child = nextStates[i];
	
	        var isEqual = child.charSpec.validChars === charSpec.validChars;
	        isEqual = isEqual && child.charSpec.invalidChars === charSpec.invalidChars;
	
	        if (isEqual) {
	          return child;
	        }
	      }
	    },
	
	    put: function put(charSpec) {
	      var state;
	
	      // If the character specification already exists in a child of the current
	      // state, just return that state.
	      if (state = this.get(charSpec)) {
	        return state;
	      }
	
	      // Make a new state for the character spec
	      state = new State(charSpec);
	
	      // Insert the new state as a child of the current state
	      this.nextStates.push(state);
	
	      // If this character specification repeats, insert the new state as a child
	      // of itself. Note that this will not trigger an infinite loop because each
	      // transition during recognition consumes a character.
	      if (charSpec.repeat) {
	        state.nextStates.push(state);
	      }
	
	      // Return the new state
	      return state;
	    },
	
	    // Find a list of child states matching the next character
	    match: function match(ch) {
	      // DEBUG "Processing `" + ch + "`:"
	      var nextStates = this.nextStates,
	          child,
	          charSpec,
	          chars;
	
	      // DEBUG "  " + debugState(this)
	      var returned = [];
	
	      for (var i = 0, l = nextStates.length; i < l; i++) {
	        child = nextStates[i];
	
	        charSpec = child.charSpec;
	
	        if (typeof (chars = charSpec.validChars) !== 'undefined') {
	          if (chars.indexOf(ch) !== -1) {
	            returned.push(child);
	          }
	        } else if (typeof (chars = charSpec.invalidChars) !== 'undefined') {
	          if (chars.indexOf(ch) === -1) {
	            returned.push(child);
	          }
	        }
	      }
	
	      return returned;
	    }
	
	    /** IF DEBUG
	    , debug: function() {
	      var charSpec = this.charSpec,
	          debug = "[",
	          chars = charSpec.validChars || charSpec.invalidChars;
	       if (charSpec.invalidChars) { debug += "^"; }
	      debug += chars;
	      debug += "]";
	       if (charSpec.repeat) { debug += "+"; }
	       return debug;
	    }
	    END IF **/
	  };
	
	  /** IF DEBUG
	  function debug(log) {
	    console.log(log);
	  }
	
	  function debugState(state) {
	    return state.nextStates.map(function(n) {
	      if (n.nextStates.length === 0) { return "( " + n.debug() + " [accepting] )"; }
	      return "( " + n.debug() + " <then> " + n.nextStates.map(function(s) { return s.debug() }).join(" or ") + " )";
	    }).join(", ")
	  }
	  END IF **/
	
	  // Sort the routes by specificity
	  function sortSolutions(states) {
	    return states.sort(function (a, b) {
	      return b.specificity.val - a.specificity.val;
	    });
	  }
	
	  function recognizeChar(states, ch) {
	    var nextStates = [];
	
	    for (var i = 0, l = states.length; i < l; i++) {
	      var state = states[i];
	
	      nextStates = nextStates.concat(state.match(ch));
	    }
	
	    return nextStates;
	  }
	
	  var oCreate = Object.create || function (proto) {
	    function F() {}
	    F.prototype = proto;
	    return new F();
	  };
	
	  function RecognizeResults(queryParams) {
	    this.queryParams = queryParams || {};
	  }
	  RecognizeResults.prototype = oCreate({
	    splice: Array.prototype.splice,
	    slice: Array.prototype.slice,
	    push: Array.prototype.push,
	    length: 0,
	    queryParams: null
	  });
	
	  function findHandler(state, path, queryParams) {
	    var handlers = state.handlers,
	        regex = state.regex;
	    var captures = path.match(regex),
	        currentCapture = 1;
	    var result = new RecognizeResults(queryParams);
	
	    for (var i = 0, l = handlers.length; i < l; i++) {
	      var handler = handlers[i],
	          names = handler.names,
	          params = {};
	
	      for (var j = 0, m = names.length; j < m; j++) {
	        params[names[j]] = captures[currentCapture++];
	      }
	
	      result.push({ handler: handler.handler, params: params, isDynamic: !!names.length });
	    }
	
	    return result;
	  }
	
	  function addSegment(currentState, segment) {
	    segment.eachChar(function (ch) {
	      var state;
	
	      currentState = currentState.put(ch);
	    });
	
	    return currentState;
	  }
	
	  function decodeQueryParamPart(part) {
	    // http://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.1
	    part = part.replace(/\+/gm, '%20');
	    return tryDecode(part, true);
	  }
	
	  // The main interface
	
	  var RouteRecognizer = function RouteRecognizer() {
	    this.rootState = new State();
	    this.names = {};
	  };
	
	  RouteRecognizer.prototype = {
	    add: function add(routes, options) {
	      var currentState = this.rootState,
	          regex = "^",
	          specificity = {},
	          handlers = [],
	          allSegments = [],
	          name;
	
	      var isEmpty = true;
	
	      for (var i = 0, l = routes.length; i < l; i++) {
	        var route = routes[i],
	            names = [];
	
	        var segments = parse(route.path, names, specificity);
	
	        allSegments = allSegments.concat(segments);
	
	        for (var j = 0, m = segments.length; j < m; j++) {
	          var segment = segments[j];
	
	          if (segment instanceof EpsilonSegment) {
	            continue;
	          }
	
	          isEmpty = false;
	
	          // Add a "/" for the new segment
	          currentState = currentState.put({ validChars: "/" });
	          regex += "/";
	
	          // Add a representation of the segment to the NFA and regex
	          currentState = addSegment(currentState, segment);
	          regex += segment.regex();
	        }
	
	        var handler = { handler: route.handler, names: names };
	        handlers.push(handler);
	      }
	
	      if (isEmpty) {
	        currentState = currentState.put({ validChars: "/" });
	        regex += "/";
	      }
	
	      currentState.handlers = handlers;
	      currentState.regex = new RegExp(regex + "$");
	      currentState.specificity = specificity;
	
	      if (name = options && options.as) {
	        this.names[name] = {
	          segments: allSegments,
	          handlers: handlers
	        };
	      }
	    },
	
	    handlersFor: function handlersFor(name) {
	      var route = this.names[name],
	          result = [];
	      if (!route) {
	        throw new Error("There is no route named " + name);
	      }
	
	      for (var i = 0, l = route.handlers.length; i < l; i++) {
	        result.push(route.handlers[i]);
	      }
	
	      return result;
	    },
	
	    hasRoute: function hasRoute(name) {
	      return !!this.names[name];
	    },
	
	    generate: function generate(name, params) {
	      var route = this.names[name],
	          output = "";
	      if (!route) {
	        throw new Error("There is no route named " + name);
	      }
	
	      var segments = route.segments;
	
	      for (var i = 0, l = segments.length; i < l; i++) {
	        var segment = segments[i];
	
	        if (segment instanceof EpsilonSegment) {
	          continue;
	        }
	
	        output += "/";
	        output += segment.generate(params);
	      }
	
	      if (output.charAt(0) !== '/') {
	        output = '/' + output;
	      }
	
	      if (params && params.queryParams) {
	        output += this.generateQueryString(params.queryParams);
	      }
	
	      return output;
	    },
	
	    generateQueryString: function generateQueryString(params) {
	      var pairs = [];
	      var keys = [];
	      for (var key in params) {
	        if (params.hasOwnProperty(key)) {
	          keys.push(key);
	        }
	      }
	      keys.sort();
	      for (var i = 0, len = keys.length; i < len; i++) {
	        key = keys[i];
	        var value = params[key];
	        if (value == null) {
	          continue;
	        }
	        var pair = encodeURIComponent(key);
	        if (isArray(value)) {
	          for (var j = 0, l = value.length; j < l; j++) {
	            var arrayPair = key + '[]' + '=' + encodeURIComponent(value[j]);
	            pairs.push(arrayPair);
	          }
	        } else {
	          pair += "=" + encodeURIComponent(value);
	          pairs.push(pair);
	        }
	      }
	
	      if (pairs.length === 0) {
	        return '';
	      }
	
	      return "?" + pairs.join("&");
	    },
	
	    parseQueryString: function parseQueryString(queryString) {
	      var pairs = queryString.split("&"),
	          queryParams = {};
	      for (var i = 0; i < pairs.length; i++) {
	        var pair = pairs[i].split('='),
	            key = decodeQueryParamPart(pair[0]),
	            keyLength = key.length,
	            isArray = false,
	            value;
	        if (pair.length === 1) {
	          value = 'true';
	        } else {
	          //Handle arrays
	          if (keyLength > 2 && key.slice(keyLength - 2) === '[]') {
	            isArray = true;
	            key = key.slice(0, keyLength - 2);
	            if (!queryParams[key]) {
	              queryParams[key] = [];
	            }
	          }
	          value = pair[1] ? decodeQueryParamPart(pair[1]) : '';
	        }
	        if (isArray) {
	          queryParams[key].push(value);
	        } else {
	          queryParams[key] = value;
	        }
	      }
	      return queryParams;
	    },
	
	    recognize: function recognize(path, silent) {
	      noWarning = silent;
	      var states = [this.rootState],
	          pathLen,
	          i,
	          l,
	          queryStart,
	          queryParams = {},
	          isSlashDropped = false;
	
	      queryStart = path.indexOf('?');
	      if (queryStart !== -1) {
	        var queryString = path.substr(queryStart + 1, path.length);
	        path = path.substr(0, queryStart);
	        if (queryString) {
	          queryParams = this.parseQueryString(queryString);
	        }
	      }
	
	      path = tryDecode(path);
	      if (!path) return;
	
	      // DEBUG GROUP path
	
	      if (path.charAt(0) !== "/") {
	        path = "/" + path;
	      }
	
	      pathLen = path.length;
	      if (pathLen > 1 && path.charAt(pathLen - 1) === "/") {
	        path = path.substr(0, pathLen - 1);
	        isSlashDropped = true;
	      }
	
	      for (i = 0, l = path.length; i < l; i++) {
	        states = recognizeChar(states, path.charAt(i));
	        if (!states.length) {
	          break;
	        }
	      }
	
	      // END DEBUG GROUP
	
	      var solutions = [];
	      for (i = 0, l = states.length; i < l; i++) {
	        if (states[i].handlers) {
	          solutions.push(states[i]);
	        }
	      }
	
	      states = sortSolutions(solutions);
	
	      var state = solutions[0];
	
	      if (state && state.handlers) {
	        // if a trailing slash was dropped and a star segment is the last segment
	        // specified, put the trailing slash back
	        if (isSlashDropped && state.regex.source.slice(-5) === "(.+)$") {
	          path = path + "/";
	        }
	        return findHandler(state, path, queryParams);
	      }
	    }
	  };
	
	  RouteRecognizer.prototype.map = map;
	
	  var genQuery = RouteRecognizer.prototype.generateQueryString;
	
	  // export default for holding the Vue reference
	  var exports$1 = {};
	  /**
	   * Warn stuff.
	   *
	   * @param {String} msg
	   */
	
	  function warn$1(msg) {
	    /* istanbul ignore next */
	    if (typeof console !== 'undefined') {
	      console.error('[vue-router] ' + msg);
	    }
	  }
	
	  /**
	   * Resolve a relative path.
	   *
	   * @param {String} base
	   * @param {String} relative
	   * @param {Boolean} append
	   * @return {String}
	   */
	
	  function resolvePath(base, relative, append) {
	    var query = base.match(/(\?.*)$/);
	    if (query) {
	      query = query[1];
	      base = base.slice(0, -query.length);
	    }
	    // a query!
	    if (relative.charAt(0) === '?') {
	      return base + relative;
	    }
	    var stack = base.split('/');
	    // remove trailing segment if:
	    // - not appending
	    // - appending to trailing slash (last segment is empty)
	    if (!append || !stack[stack.length - 1]) {
	      stack.pop();
	    }
	    // resolve relative path
	    var segments = relative.replace(/^\//, '').split('/');
	    for (var i = 0; i < segments.length; i++) {
	      var segment = segments[i];
	      if (segment === '.') {
	        continue;
	      } else if (segment === '..') {
	        stack.pop();
	      } else {
	        stack.push(segment);
	      }
	    }
	    // ensure leading slash
	    if (stack[0] !== '') {
	      stack.unshift('');
	    }
	    return stack.join('/');
	  }
	
	  /**
	   * Forgiving check for a promise
	   *
	   * @param {Object} p
	   * @return {Boolean}
	   */
	
	  function isPromise(p) {
	    return p && typeof p.then === 'function';
	  }
	
	  /**
	   * Retrive a route config field from a component instance
	   * OR a component contructor.
	   *
	   * @param {Function|Vue} component
	   * @param {String} name
	   * @return {*}
	   */
	
	  function getRouteConfig(component, name) {
	    var options = component && (component.$options || component.options);
	    return options && options.route && options.route[name];
	  }
	
	  /**
	   * Resolve an async component factory. Have to do a dirty
	   * mock here because of Vue core's internal API depends on
	   * an ID check.
	   *
	   * @param {Object} handler
	   * @param {Function} cb
	   */
	
	  var resolver = undefined;
	
	  function resolveAsyncComponent(handler, cb) {
	    if (!resolver) {
	      resolver = {
	        resolve: exports$1.Vue.prototype._resolveComponent,
	        $options: {
	          components: {
	            _: handler.component
	          }
	        }
	      };
	    } else {
	      resolver.$options.components._ = handler.component;
	    }
	    resolver.resolve('_', function (Component) {
	      handler.component = Component;
	      cb(Component);
	    });
	  }
	
	  /**
	   * Map the dynamic segments in a path to params.
	   *
	   * @param {String} path
	   * @param {Object} params
	   * @param {Object} query
	   */
	
	  function mapParams(path, params, query) {
	    if (params === undefined) params = {};
	
	    path = path.replace(/:([^\/]+)/g, function (_, key) {
	      var val = params[key];
	      /* istanbul ignore if */
	      if (!val) {
	        warn$1('param "' + key + '" not found when generating ' + 'path for "' + path + '" with params ' + JSON.stringify(params));
	      }
	      return val || '';
	    });
	    if (query) {
	      path += genQuery(query);
	    }
	    return path;
	  }
	
	  var hashRE = /#.*$/;
	
	  var HTML5History = (function () {
	    function HTML5History(_ref) {
	      var root = _ref.root;
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, HTML5History);
	
	      if (root && root !== '/') {
	        // make sure there's the starting slash
	        if (root.charAt(0) !== '/') {
	          root = '/' + root;
	        }
	        // remove trailing slash
	        this.root = root.replace(/\/$/, '');
	        this.rootRE = new RegExp('^\\' + this.root);
	      } else {
	        this.root = null;
	      }
	      this.onChange = onChange;
	      // check base tag
	      var baseEl = document.querySelector('base');
	      this.base = baseEl && baseEl.getAttribute('href');
	    }
	
	    HTML5History.prototype.start = function start() {
	      var _this = this;
	
	      this.listener = function (e) {
	        var url = location.pathname + location.search;
	        if (_this.root) {
	          url = url.replace(_this.rootRE, '');
	        }
	        _this.onChange(url, e && e.state, location.hash);
	      };
	      window.addEventListener('popstate', this.listener);
	      this.listener();
	    };
	
	    HTML5History.prototype.stop = function stop() {
	      window.removeEventListener('popstate', this.listener);
	    };
	
	    HTML5History.prototype.go = function go(path, replace, append) {
	      var url = this.formatPath(path, append);
	      if (replace) {
	        history.replaceState({}, '', url);
	      } else {
	        // record scroll position by replacing current state
	        history.replaceState({
	          pos: {
	            x: window.pageXOffset,
	            y: window.pageYOffset
	          }
	        }, '', location.href);
	        // then push new state
	        history.pushState({}, '', url);
	      }
	      var hashMatch = path.match(hashRE);
	      var hash = hashMatch && hashMatch[0];
	      path = url
	      // strip hash so it doesn't mess up params
	      .replace(hashRE, '')
	      // remove root before matching
	      .replace(this.rootRE, '');
	      this.onChange(path, null, hash);
	    };
	
	    HTML5History.prototype.formatPath = function formatPath(path, append) {
	      return path.charAt(0) === '/'
	      // absolute path
	      ? this.root ? this.root + '/' + path.replace(/^\//, '') : path : resolvePath(this.base || location.pathname, path, append);
	    };
	
	    return HTML5History;
	  })();
	
	  var HashHistory = (function () {
	    function HashHistory(_ref) {
	      var hashbang = _ref.hashbang;
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, HashHistory);
	
	      this.hashbang = hashbang;
	      this.onChange = onChange;
	    }
	
	    HashHistory.prototype.start = function start() {
	      var self = this;
	      this.listener = function () {
	        var path = location.hash;
	        var raw = path.replace(/^#!?/, '');
	        // always
	        if (raw.charAt(0) !== '/') {
	          raw = '/' + raw;
	        }
	        var formattedPath = self.formatPath(raw);
	        if (formattedPath !== path) {
	          location.replace(formattedPath);
	          return;
	        }
	        // determine query
	        // note it's possible to have queries in both the actual URL
	        // and the hash fragment itself.
	        var query = location.search && path.indexOf('?') > -1 ? '&' + location.search.slice(1) : location.search;
	        self.onChange(path.replace(/^#!?/, '') + query);
	      };
	      window.addEventListener('hashchange', this.listener);
	      this.listener();
	    };
	
	    HashHistory.prototype.stop = function stop() {
	      window.removeEventListener('hashchange', this.listener);
	    };
	
	    HashHistory.prototype.go = function go(path, replace, append) {
	      path = this.formatPath(path, append);
	      if (replace) {
	        location.replace(path);
	      } else {
	        location.hash = path;
	      }
	    };
	
	    HashHistory.prototype.formatPath = function formatPath(path, append) {
	      var isAbsoloute = path.charAt(0) === '/';
	      var prefix = '#' + (this.hashbang ? '!' : '');
	      return isAbsoloute ? prefix + path : prefix + resolvePath(location.hash.replace(/^#!?/, ''), path, append);
	    };
	
	    return HashHistory;
	  })();
	
	  var AbstractHistory = (function () {
	    function AbstractHistory(_ref) {
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, AbstractHistory);
	
	      this.onChange = onChange;
	      this.currentPath = '/';
	    }
	
	    AbstractHistory.prototype.start = function start() {
	      this.onChange('/');
	    };
	
	    AbstractHistory.prototype.stop = function stop() {
	      // noop
	    };
	
	    AbstractHistory.prototype.go = function go(path, replace, append) {
	      path = this.currentPath = this.formatPath(path, append);
	      this.onChange(path);
	    };
	
	    AbstractHistory.prototype.formatPath = function formatPath(path, append) {
	      return path.charAt(0) === '/' ? path : resolvePath(this.currentPath, path, append);
	    };
	
	    return AbstractHistory;
	  })();
	
	  /**
	   * Determine the reusability of an existing router view.
	   *
	   * @param {Directive} view
	   * @param {Object} handler
	   * @param {Transition} transition
	   */
	
	  function canReuse(view, handler, transition) {
	    var component = view.childVM;
	    if (!component || !handler) {
	      return false;
	    }
	    // important: check view.Component here because it may
	    // have been changed in activate hook
	    if (view.Component !== handler.component) {
	      return false;
	    }
	    var canReuseFn = getRouteConfig(component, 'canReuse');
	    return typeof canReuseFn === 'boolean' ? canReuseFn : canReuseFn ? canReuseFn.call(component, {
	      to: transition.to,
	      from: transition.from
	    }) : true; // defaults to true
	  }
	
	  /**
	   * Check if a component can deactivate.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Function} next
	   */
	
	  function canDeactivate(view, transition, next) {
	    var fromComponent = view.childVM;
	    var hook = getRouteConfig(fromComponent, 'canDeactivate');
	    if (!hook) {
	      next();
	    } else {
	      transition.callHook(hook, fromComponent, next, {
	        expectBoolean: true
	      });
	    }
	  }
	
	  /**
	   * Check if a component can activate.
	   *
	   * @param {Object} handler
	   * @param {Transition} transition
	   * @param {Function} next
	   */
	
	  function canActivate(handler, transition, next) {
	    resolveAsyncComponent(handler, function (Component) {
	      // have to check due to async-ness
	      if (transition.aborted) {
	        return;
	      }
	      // determine if this component can be activated
	      var hook = getRouteConfig(Component, 'canActivate');
	      if (!hook) {
	        next();
	      } else {
	        transition.callHook(hook, null, next, {
	          expectBoolean: true
	        });
	      }
	    });
	  }
	
	  /**
	   * Call deactivate hooks for existing router-views.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Function} next
	   */
	
	  function deactivate(view, transition, next) {
	    var component = view.childVM;
	    var hook = getRouteConfig(component, 'deactivate');
	    if (!hook) {
	      next();
	    } else {
	      transition.callHooks(hook, component, next);
	    }
	  }
	
	  /**
	   * Activate / switch component for a router-view.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Number} depth
	   * @param {Function} [cb]
	   */
	
	  function activate(view, transition, depth, cb, reuse) {
	    var handler = transition.activateQueue[depth];
	    if (!handler) {
	      saveChildView(view);
	      if (view._bound) {
	        view.setComponent(null);
	      }
	      cb && cb();
	      return;
	    }
	
	    var Component = view.Component = handler.component;
	    var activateHook = getRouteConfig(Component, 'activate');
	    var dataHook = getRouteConfig(Component, 'data');
	    var waitForData = getRouteConfig(Component, 'waitForData');
	
	    view.depth = depth;
	    view.activated = false;
	
	    var component = undefined;
	    var loading = !!(dataHook && !waitForData);
	
	    // "reuse" is a flag passed down when the parent view is
	    // either reused via keep-alive or as a child of a kept-alive view.
	    // of course we can only reuse if the current kept-alive instance
	    // is of the correct type.
	    reuse = reuse && view.childVM && view.childVM.constructor === Component;
	
	    if (reuse) {
	      // just reuse
	      component = view.childVM;
	      component.$loadingRouteData = loading;
	    } else {
	      saveChildView(view);
	
	      // unbuild current component. this step also destroys
	      // and removes all nested child views.
	      view.unbuild(true);
	
	      // build the new component. this will also create the
	      // direct child view of the current one. it will register
	      // itself as view.childView.
	      component = view.build({
	        _meta: {
	          $loadingRouteData: loading
	        },
	        created: function created() {
	          this._routerView = view;
	        }
	      });
	
	      // handle keep-alive.
	      // when a kept-alive child vm is restored, we need to
	      // add its cached child views into the router's view list,
	      // and also properly update current view's child view.
	      if (view.keepAlive) {
	        component.$loadingRouteData = loading;
	        var cachedChildView = component._keepAliveRouterView;
	        if (cachedChildView) {
	          view.childView = cachedChildView;
	          component._keepAliveRouterView = null;
	        }
	      }
	    }
	
	    // cleanup the component in case the transition is aborted
	    // before the component is ever inserted.
	    var cleanup = function cleanup() {
	      component.$destroy();
	    };
	
	    // actually insert the component and trigger transition
	    var insert = function insert() {
	      if (reuse) {
	        cb && cb();
	        return;
	      }
	      var router = transition.router;
	      if (router._rendered || router._transitionOnLoad) {
	        view.transition(component);
	      } else {
	        // no transition on first render, manual transition
	        /* istanbul ignore if */
	        if (view.setCurrent) {
	          // 0.12 compat
	          view.setCurrent(component);
	        } else {
	          // 1.0
	          view.childVM = component;
	        }
	        component.$before(view.anchor, null, false);
	      }
	      cb && cb();
	    };
	
	    var afterData = function afterData() {
	      // activate the child view
	      if (view.childView) {
	        activate(view.childView, transition, depth + 1, null, reuse || view.keepAlive);
	      }
	      insert();
	    };
	
	    // called after activation hook is resolved
	    var afterActivate = function afterActivate() {
	      view.activated = true;
	      if (dataHook && waitForData) {
	        // wait until data loaded to insert
	        loadData(component, transition, dataHook, afterData, cleanup);
	      } else {
	        // load data and insert at the same time
	        if (dataHook) {
	          loadData(component, transition, dataHook);
	        }
	        afterData();
	      }
	    };
	
	    if (activateHook) {
	      transition.callHooks(activateHook, component, afterActivate, {
	        cleanup: cleanup,
	        postActivate: true
	      });
	    } else {
	      afterActivate();
	    }
	  }
	
	  /**
	   * Reuse a view, just reload data if necessary.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   */
	
	  function reuse(view, transition) {
	    var component = view.childVM;
	    var dataHook = getRouteConfig(component, 'data');
	    if (dataHook) {
	      loadData(component, transition, dataHook);
	    }
	  }
	
	  /**
	   * Asynchronously load and apply data to component.
	   *
	   * @param {Vue} component
	   * @param {Transition} transition
	   * @param {Function} hook
	   * @param {Function} cb
	   * @param {Function} cleanup
	   */
	
	  function loadData(component, transition, hook, cb, cleanup) {
	    component.$loadingRouteData = true;
	    transition.callHooks(hook, component, function () {
	      component.$loadingRouteData = false;
	      component.$emit('route-data-loaded', component);
	      cb && cb();
	    }, {
	      cleanup: cleanup,
	      postActivate: true,
	      processData: function processData(data) {
	        // handle promise sugar syntax
	        var promises = [];
	        if (isPlainObject(data)) {
	          Object.keys(data).forEach(function (key) {
	            var val = data[key];
	            if (isPromise(val)) {
	              promises.push(val.then(function (resolvedVal) {
	                component.$set(key, resolvedVal);
	              }));
	            } else {
	              component.$set(key, val);
	            }
	          });
	        }
	        if (promises.length) {
	          return promises[0].constructor.all(promises);
	        }
	      }
	    });
	  }
	
	  /**
	   * Save the child view for a kept-alive view so that
	   * we can restore it when it is switched back to.
	   *
	   * @param {Directive} view
	   */
	
	  function saveChildView(view) {
	    if (view.keepAlive && view.childVM && view.childView) {
	      view.childVM._keepAliveRouterView = view.childView;
	    }
	    view.childView = null;
	  }
	
	  /**
	   * Check plain object.
	   *
	   * @param {*} val
	   */
	
	  function isPlainObject(val) {
	    return Object.prototype.toString.call(val) === '[object Object]';
	  }
	
	  /**
	   * A RouteTransition object manages the pipeline of a
	   * router-view switching process. This is also the object
	   * passed into user route hooks.
	   *
	   * @param {Router} router
	   * @param {Route} to
	   * @param {Route} from
	   */
	
	  var RouteTransition = (function () {
	    function RouteTransition(router, to, from) {
	      babelHelpers.classCallCheck(this, RouteTransition);
	
	      this.router = router;
	      this.to = to;
	      this.from = from;
	      this.next = null;
	      this.aborted = false;
	      this.done = false;
	    }
	
	    /**
	     * Abort current transition and return to previous location.
	     */
	
	    RouteTransition.prototype.abort = function abort() {
	      if (!this.aborted) {
	        this.aborted = true;
	        // if the root path throws an error during validation
	        // on initial load, it gets caught in an infinite loop.
	        var abortingOnLoad = !this.from.path && this.to.path === '/';
	        if (!abortingOnLoad) {
	          this.router.replace(this.from.path || '/');
	        }
	      }
	    };
	
	    /**
	     * Abort current transition and redirect to a new location.
	     *
	     * @param {String} path
	     */
	
	    RouteTransition.prototype.redirect = function redirect(path) {
	      if (!this.aborted) {
	        this.aborted = true;
	        if (typeof path === 'string') {
	          path = mapParams(path, this.to.params, this.to.query);
	        } else {
	          path.params = path.params || this.to.params;
	          path.query = path.query || this.to.query;
	        }
	        this.router.replace(path);
	      }
	    };
	
	    /**
	     * A router view transition's pipeline can be described as
	     * follows, assuming we are transitioning from an existing
	     * <router-view> chain [Component A, Component B] to a new
	     * chain [Component A, Component C]:
	     *
	     *  A    A
	     *  | => |
	     *  B    C
	     *
	     * 1. Reusablity phase:
	     *   -> canReuse(A, A)
	     *   -> canReuse(B, C)
	     *   -> determine new queues:
	     *      - deactivation: [B]
	     *      - activation: [C]
	     *
	     * 2. Validation phase:
	     *   -> canDeactivate(B)
	     *   -> canActivate(C)
	     *
	     * 3. Activation phase:
	     *   -> deactivate(B)
	     *   -> activate(C)
	     *
	     * Each of these steps can be asynchronous, and any
	     * step can potentially abort the transition.
	     *
	     * @param {Function} cb
	     */
	
	    RouteTransition.prototype.start = function start(cb) {
	      var transition = this;
	
	      // determine the queue of views to deactivate
	      var deactivateQueue = [];
	      var view = this.router._rootView;
	      while (view) {
	        deactivateQueue.unshift(view);
	        view = view.childView;
	      }
	      var reverseDeactivateQueue = deactivateQueue.slice().reverse();
	
	      // determine the queue of route handlers to activate
	      var activateQueue = this.activateQueue = toArray(this.to.matched).map(function (match) {
	        return match.handler;
	      });
	
	      // 1. Reusability phase
	      var i = undefined,
	          reuseQueue = undefined;
	      for (i = 0; i < reverseDeactivateQueue.length; i++) {
	        if (!canReuse(reverseDeactivateQueue[i], activateQueue[i], transition)) {
	          break;
	        }
	      }
	      if (i > 0) {
	        reuseQueue = reverseDeactivateQueue.slice(0, i);
	        deactivateQueue = reverseDeactivateQueue.slice(i).reverse();
	        activateQueue = activateQueue.slice(i);
	      }
	
	      // 2. Validation phase
	      transition.runQueue(deactivateQueue, canDeactivate, function () {
	        transition.runQueue(activateQueue, canActivate, function () {
	          transition.runQueue(deactivateQueue, deactivate, function () {
	            // 3. Activation phase
	
	            // Update router current route
	            transition.router._onTransitionValidated(transition);
	
	            // trigger reuse for all reused views
	            reuseQueue && reuseQueue.forEach(function (view) {
	              return reuse(view, transition);
	            });
	
	            // the root of the chain that needs to be replaced
	            // is the top-most non-reusable view.
	            if (deactivateQueue.length) {
	              var _view = deactivateQueue[deactivateQueue.length - 1];
	              var depth = reuseQueue ? reuseQueue.length : 0;
	              activate(_view, transition, depth, cb);
	            } else {
	              cb();
	            }
	          });
	        });
	      });
	    };
	
	    /**
	     * Asynchronously and sequentially apply a function to a
	     * queue.
	     *
	     * @param {Array} queue
	     * @param {Function} fn
	     * @param {Function} cb
	     */
	
	    RouteTransition.prototype.runQueue = function runQueue(queue, fn, cb) {
	      var transition = this;
	      step(0);
	      function step(index) {
	        if (index >= queue.length) {
	          cb();
	        } else {
	          fn(queue[index], transition, function () {
	            step(index + 1);
	          });
	        }
	      }
	    };
	
	    /**
	     * Call a user provided route transition hook and handle
	     * the response (e.g. if the user returns a promise).
	     *
	     * If the user neither expects an argument nor returns a
	     * promise, the hook is assumed to be synchronous.
	     *
	     * @param {Function} hook
	     * @param {*} [context]
	     * @param {Function} [cb]
	     * @param {Object} [options]
	     *                 - {Boolean} expectBoolean
	     *                 - {Boolean} postActive
	     *                 - {Function} processData
	     *                 - {Function} cleanup
	     */
	
	    RouteTransition.prototype.callHook = function callHook(hook, context, cb) {
	      var _ref = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
	
	      var _ref$expectBoolean = _ref.expectBoolean;
	      var expectBoolean = _ref$expectBoolean === undefined ? false : _ref$expectBoolean;
	      var _ref$postActivate = _ref.postActivate;
	      var postActivate = _ref$postActivate === undefined ? false : _ref$postActivate;
	      var processData = _ref.processData;
	      var cleanup = _ref.cleanup;
	
	      var transition = this;
	      var nextCalled = false;
	
	      // abort the transition
	      var abort = function abort() {
	        cleanup && cleanup();
	        transition.abort();
	      };
	
	      // handle errors
	      var onError = function onError(err) {
	        postActivate ? next() : abort();
	        if (err && !transition.router._suppress) {
	          warn$1('Uncaught error during transition: ');
	          throw err instanceof Error ? err : new Error(err);
	        }
	      };
	
	      // since promise swallows errors, we have to
	      // throw it in the next tick...
	      var onPromiseError = function onPromiseError(err) {
	        try {
	          onError(err);
	        } catch (e) {
	          setTimeout(function () {
	            throw e;
	          }, 0);
	        }
	      };
	
	      // advance the transition to the next step
	      var next = function next() {
	        if (nextCalled) {
	          warn$1('transition.next() should be called only once.');
	          return;
	        }
	        nextCalled = true;
	        if (transition.aborted) {
	          cleanup && cleanup();
	          return;
	        }
	        cb && cb();
	      };
	
	      var nextWithBoolean = function nextWithBoolean(res) {
	        if (typeof res === 'boolean') {
	          res ? next() : abort();
	        } else if (isPromise(res)) {
	          res.then(function (ok) {
	            ok ? next() : abort();
	          }, onPromiseError);
	        } else if (!hook.length) {
	          next();
	        }
	      };
	
	      var nextWithData = function nextWithData(data) {
	        var res = undefined;
	        try {
	          res = processData(data);
	        } catch (err) {
	          return onError(err);
	        }
	        if (isPromise(res)) {
	          res.then(next, onPromiseError);
	        } else {
	          next();
	        }
	      };
	
	      // expose a clone of the transition object, so that each
	      // hook gets a clean copy and prevent the user from
	      // messing with the internals.
	      var exposed = {
	        to: transition.to,
	        from: transition.from,
	        abort: abort,
	        next: processData ? nextWithData : next,
	        redirect: function redirect() {
	          transition.redirect.apply(transition, arguments);
	        }
	      };
	
	      // actually call the hook
	      var res = undefined;
	      try {
	        res = hook.call(context, exposed);
	      } catch (err) {
	        return onError(err);
	      }
	
	      if (expectBoolean) {
	        // boolean hooks
	        nextWithBoolean(res);
	      } else if (isPromise(res)) {
	        // promise
	        if (processData) {
	          res.then(nextWithData, onPromiseError);
	        } else {
	          res.then(next, onPromiseError);
	        }
	      } else if (processData && isPlainOjbect(res)) {
	        // data promise sugar
	        nextWithData(res);
	      } else if (!hook.length) {
	        next();
	      }
	    };
	
	    /**
	     * Call a single hook or an array of async hooks in series.
	     *
	     * @param {Array} hooks
	     * @param {*} context
	     * @param {Function} cb
	     * @param {Object} [options]
	     */
	
	    RouteTransition.prototype.callHooks = function callHooks(hooks, context, cb, options) {
	      var _this = this;
	
	      if (Array.isArray(hooks)) {
	        this.runQueue(hooks, function (hook, _, next) {
	          if (!_this.aborted) {
	            _this.callHook(hook, context, next, options);
	          }
	        }, cb);
	      } else {
	        this.callHook(hooks, context, cb, options);
	      }
	    };
	
	    return RouteTransition;
	  })();
	
	  function isPlainOjbect(val) {
	    return Object.prototype.toString.call(val) === '[object Object]';
	  }
	
	  function toArray(val) {
	    return val ? Array.prototype.slice.call(val) : [];
	  }
	
	  var internalKeysRE = /^(component|subRoutes|fullPath)$/;
	
	  /**
	   * Route Context Object
	   *
	   * @param {String} path
	   * @param {Router} router
	   */
	
	  var Route = function Route(path, router) {
	    var _this = this;
	
	    babelHelpers.classCallCheck(this, Route);
	
	    var matched = router._recognizer.recognize(path);
	    if (matched) {
	      // copy all custom fields from route configs
	      [].forEach.call(matched, function (match) {
	        for (var key in match.handler) {
	          if (!internalKeysRE.test(key)) {
	            _this[key] = match.handler[key];
	          }
	        }
	      });
	      // set query and params
	      this.query = matched.queryParams;
	      this.params = [].reduce.call(matched, function (prev, cur) {
	        if (cur.params) {
	          for (var key in cur.params) {
	            prev[key] = cur.params[key];
	          }
	        }
	        return prev;
	      }, {});
	    }
	    // expose path and router
	    this.path = path;
	    // for internal use
	    this.matched = matched || router._notFoundHandler;
	    // internal reference to router
	    Object.defineProperty(this, 'router', {
	      enumerable: false,
	      value: router
	    });
	    // Important: freeze self to prevent observation
	    Object.freeze(this);
	  };
	
	  function applyOverride (Vue) {
	    var _Vue$util = Vue.util;
	    var extend = _Vue$util.extend;
	    var isArray = _Vue$util.isArray;
	    var defineReactive = _Vue$util.defineReactive;
	
	    // override Vue's init and destroy process to keep track of router instances
	    var init = Vue.prototype._init;
	    Vue.prototype._init = function (options) {
	      options = options || {};
	      var root = options._parent || options.parent || this;
	      var router = root.$router;
	      var route = root.$route;
	      if (router) {
	        // expose router
	        this.$router = router;
	        router._children.push(this);
	        /* istanbul ignore if */
	        if (this._defineMeta) {
	          // 0.12
	          this._defineMeta('$route', route);
	        } else {
	          // 1.0
	          defineReactive(this, '$route', route);
	        }
	      }
	      init.call(this, options);
	    };
	
	    var destroy = Vue.prototype._destroy;
	    Vue.prototype._destroy = function () {
	      if (!this._isBeingDestroyed && this.$router) {
	        this.$router._children.$remove(this);
	      }
	      destroy.apply(this, arguments);
	    };
	
	    // 1.0 only: enable route mixins
	    var strats = Vue.config.optionMergeStrategies;
	    var hooksToMergeRE = /^(data|activate|deactivate)$/;
	
	    if (strats) {
	      strats.route = function (parentVal, childVal) {
	        if (!childVal) return parentVal;
	        if (!parentVal) return childVal;
	        var ret = {};
	        extend(ret, parentVal);
	        for (var key in childVal) {
	          var a = ret[key];
	          var b = childVal[key];
	          // for data, activate and deactivate, we need to merge them into
	          // arrays similar to lifecycle hooks.
	          if (a && hooksToMergeRE.test(key)) {
	            ret[key] = (isArray(a) ? a : [a]).concat(b);
	          } else {
	            ret[key] = b;
	          }
	        }
	        return ret;
	      };
	    }
	  }
	
	  function View (Vue) {
	
	    var _ = Vue.util;
	    var componentDef =
	    // 0.12
	    Vue.directive('_component') ||
	    // 1.0
	    Vue.internalDirectives.component;
	    // <router-view> extends the internal component directive
	    var viewDef = _.extend({}, componentDef);
	
	    // with some overrides
	    _.extend(viewDef, {
	
	      _isRouterView: true,
	
	      bind: function bind() {
	        var route = this.vm.$route;
	        /* istanbul ignore if */
	        if (!route) {
	          warn$1('<router-view> can only be used inside a ' + 'router-enabled app.');
	          return;
	        }
	        // force dynamic directive so v-component doesn't
	        // attempt to build right now
	        this._isDynamicLiteral = true;
	        // finally, init by delegating to v-component
	        componentDef.bind.call(this);
	
	        // locate the parent view
	        var parentView = undefined;
	        var parent = this.vm;
	        while (parent) {
	          if (parent._routerView) {
	            parentView = parent._routerView;
	            break;
	          }
	          parent = parent.$parent;
	        }
	        if (parentView) {
	          // register self as a child of the parent view,
	          // instead of activating now. This is so that the
	          // child's activate hook is called after the
	          // parent's has resolved.
	          this.parentView = parentView;
	          parentView.childView = this;
	        } else {
	          // this is the root view!
	          var router = route.router;
	          router._rootView = this;
	        }
	
	        // handle late-rendered view
	        // two possibilities:
	        // 1. root view rendered after transition has been
	        //    validated;
	        // 2. child view rendered after parent view has been
	        //    activated.
	        var transition = route.router._currentTransition;
	        if (!parentView && transition.done || parentView && parentView.activated) {
	          var depth = parentView ? parentView.depth + 1 : 0;
	          activate(this, transition, depth);
	        }
	      },
	
	      unbind: function unbind() {
	        if (this.parentView) {
	          this.parentView.childView = null;
	        }
	        componentDef.unbind.call(this);
	      }
	    });
	
	    Vue.elementDirective('router-view', viewDef);
	  }
	
	  var trailingSlashRE = /\/$/;
	  var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	  var queryStringRE = /\?.*$/;
	
	  // install v-link, which provides navigation support for
	  // HTML5 history mode
	  function Link (Vue) {
	    var _Vue$util = Vue.util;
	    var _bind = _Vue$util.bind;
	    var getAttr = _Vue$util.getAttr;
	    var isObject = _Vue$util.isObject;
	    var addClass = _Vue$util.addClass;
	    var removeClass = _Vue$util.removeClass;
	
	    var onPriority = Vue.directive('on').priority;
	    var LINK_UPDATE = '__vue-router-link-update__';
	
	    var activeId = 0;
	
	    Vue.directive('link-active', {
	      priority: 9999,
	      bind: function bind() {
	        var _this = this;
	
	        var id = String(activeId++);
	        // collect v-links contained within this element.
	        // we need do this here before the parent-child relationship
	        // gets messed up by terminal directives (if, for, components)
	        var childLinks = this.el.querySelectorAll('[v-link]');
	        for (var i = 0, l = childLinks.length; i < l; i++) {
	          var link = childLinks[i];
	          var existingId = link.getAttribute(LINK_UPDATE);
	          var value = existingId ? existingId + ',' + id : id;
	          // leave a mark on the link element which can be persisted
	          // through fragment clones.
	          link.setAttribute(LINK_UPDATE, value);
	        }
	        this.vm.$on(LINK_UPDATE, this.cb = function (link, path) {
	          if (link.activeIds.indexOf(id) > -1) {
	            link.updateClasses(path, _this.el);
	          }
	        });
	      },
	      unbind: function unbind() {
	        this.vm.$off(LINK_UPDATE, this.cb);
	      }
	    });
	
	    Vue.directive('link', {
	      priority: onPriority - 2,
	
	      bind: function bind() {
	        var vm = this.vm;
	        /* istanbul ignore if */
	        if (!vm.$route) {
	          warn$1('v-link can only be used inside a router-enabled app.');
	          return;
	        }
	        this.router = vm.$route.router;
	        // update things when the route changes
	        this.unwatch = vm.$watch('$route', _bind(this.onRouteUpdate, this));
	        // check v-link-active ids
	        var activeIds = getAttr(this.el, LINK_UPDATE);
	        if (activeIds) {
	          this.activeIds = activeIds.split(',');
	        }
	        // no need to handle click if link expects to be opened
	        // in a new window/tab.
	        /* istanbul ignore if */
	        if (this.el.tagName === 'A' && this.el.getAttribute('target') === '_blank') {
	          return;
	        }
	        // handle click
	        this.handler = _bind(this.onClick, this);
	        this.el.addEventListener('click', this.handler);
	      },
	
	      update: function update(target) {
	        this.target = target;
	        if (isObject(target)) {
	          this.append = target.append;
	          this.exact = target.exact;
	          this.prevActiveClass = this.activeClass;
	          this.activeClass = target.activeClass;
	        }
	        this.onRouteUpdate(this.vm.$route);
	      },
	
	      onClick: function onClick(e) {
	        // don't redirect with control keys
	        /* istanbul ignore if */
	        if (e.metaKey || e.ctrlKey || e.shiftKey) return;
	        // don't redirect when preventDefault called
	        /* istanbul ignore if */
	        if (e.defaultPrevented) return;
	        // don't redirect on right click
	        /* istanbul ignore if */
	        if (e.button !== 0) return;
	
	        var target = this.target;
	        if (target) {
	          // v-link with expression, just go
	          e.preventDefault();
	          this.router.go(target);
	        } else {
	          // no expression, delegate for an <a> inside
	          var el = e.target;
	          while (el.tagName !== 'A' && el !== this.el) {
	            el = el.parentNode;
	          }
	          if (el.tagName === 'A' && sameOrigin(el)) {
	            e.preventDefault();
	            var path = el.pathname;
	            if (this.router.history.root) {
	              path = path.replace(this.router.history.rootRE, '');
	            }
	            this.router.go({
	              path: path,
	              replace: target && target.replace,
	              append: target && target.append
	            });
	          }
	        }
	      },
	
	      onRouteUpdate: function onRouteUpdate(route) {
	        // router.stringifyPath is dependent on current route
	        // and needs to be called again whenver route changes.
	        var newPath = this.router.stringifyPath(this.target);
	        if (this.path !== newPath) {
	          this.path = newPath;
	          this.updateActiveMatch();
	          this.updateHref();
	        }
	        if (this.activeIds) {
	          this.vm.$emit(LINK_UPDATE, this, route.path);
	        } else {
	          this.updateClasses(route.path, this.el);
	        }
	      },
	
	      updateActiveMatch: function updateActiveMatch() {
	        this.activeRE = this.path && !this.exact ? new RegExp('^' + this.path.replace(/\/$/, '').replace(queryStringRE, '').replace(regexEscapeRE, '\\$&') + '(\\/|$)') : null;
	      },
	
	      updateHref: function updateHref() {
	        if (this.el.tagName !== 'A') {
	          return;
	        }
	        var path = this.path;
	        var router = this.router;
	        var isAbsolute = path.charAt(0) === '/';
	        // do not format non-hash relative paths
	        var href = path && (router.mode === 'hash' || isAbsolute) ? router.history.formatPath(path, this.append) : path;
	        if (href) {
	          this.el.href = href;
	        } else {
	          this.el.removeAttribute('href');
	        }
	      },
	
	      updateClasses: function updateClasses(path, el) {
	        var activeClass = this.activeClass || this.router._linkActiveClass;
	        // clear old class
	        if (this.prevActiveClass && this.prevActiveClass !== activeClass) {
	          toggleClasses(el, this.prevActiveClass, removeClass);
	        }
	        // remove query string before matching
	        var dest = this.path.replace(queryStringRE, '');
	        path = path.replace(queryStringRE, '');
	        // add new class
	        if (this.exact) {
	          if (dest === path ||
	          // also allow additional trailing slash
	          dest.charAt(dest.length - 1) !== '/' && dest === path.replace(trailingSlashRE, '')) {
	            toggleClasses(el, activeClass, addClass);
	          } else {
	            toggleClasses(el, activeClass, removeClass);
	          }
	        } else {
	          if (this.activeRE && this.activeRE.test(path)) {
	            toggleClasses(el, activeClass, addClass);
	          } else {
	            toggleClasses(el, activeClass, removeClass);
	          }
	        }
	      },
	
	      unbind: function unbind() {
	        this.el.removeEventListener('click', this.handler);
	        this.unwatch && this.unwatch();
	      }
	    });
	
	    function sameOrigin(link) {
	      return link.protocol === location.protocol && link.hostname === location.hostname && link.port === location.port;
	    }
	
	    // this function is copied from v-bind:class implementation until
	    // we properly expose it...
	    function toggleClasses(el, key, fn) {
	      key = key.trim();
	      if (key.indexOf(' ') === -1) {
	        fn(el, key);
	        return;
	      }
	      var keys = key.split(/\s+/);
	      for (var i = 0, l = keys.length; i < l; i++) {
	        fn(el, keys[i]);
	      }
	    }
	  }
	
	  var historyBackends = {
	    abstract: AbstractHistory,
	    hash: HashHistory,
	    html5: HTML5History
	  };
	
	  // late bind during install
	  var Vue = undefined;
	
	  /**
	   * Router constructor
	   *
	   * @param {Object} [options]
	   */
	
	  var Router = (function () {
	    function Router() {
	      var _this = this;
	
	      var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	      var _ref$hashbang = _ref.hashbang;
	      var hashbang = _ref$hashbang === undefined ? true : _ref$hashbang;
	      var _ref$abstract = _ref.abstract;
	      var abstract = _ref$abstract === undefined ? false : _ref$abstract;
	      var _ref$history = _ref.history;
	      var history = _ref$history === undefined ? false : _ref$history;
	      var _ref$saveScrollPosition = _ref.saveScrollPosition;
	      var saveScrollPosition = _ref$saveScrollPosition === undefined ? false : _ref$saveScrollPosition;
	      var _ref$transitionOnLoad = _ref.transitionOnLoad;
	      var transitionOnLoad = _ref$transitionOnLoad === undefined ? false : _ref$transitionOnLoad;
	      var _ref$suppressTransitionError = _ref.suppressTransitionError;
	      var suppressTransitionError = _ref$suppressTransitionError === undefined ? false : _ref$suppressTransitionError;
	      var _ref$root = _ref.root;
	      var root = _ref$root === undefined ? null : _ref$root;
	      var _ref$linkActiveClass = _ref.linkActiveClass;
	      var linkActiveClass = _ref$linkActiveClass === undefined ? 'v-link-active' : _ref$linkActiveClass;
	      babelHelpers.classCallCheck(this, Router);
	
	      /* istanbul ignore if */
	      if (!Router.installed) {
	        throw new Error('Please install the Router with Vue.use() before ' + 'creating an instance.');
	      }
	
	      // Vue instances
	      this.app = null;
	      this._children = [];
	
	      // route recognizer
	      this._recognizer = new RouteRecognizer();
	      this._guardRecognizer = new RouteRecognizer();
	
	      // state
	      this._started = false;
	      this._startCb = null;
	      this._currentRoute = {};
	      this._currentTransition = null;
	      this._previousTransition = null;
	      this._notFoundHandler = null;
	      this._notFoundRedirect = null;
	      this._beforeEachHooks = [];
	      this._afterEachHooks = [];
	
	      // trigger transition on initial render?
	      this._rendered = false;
	      this._transitionOnLoad = transitionOnLoad;
	
	      // history mode
	      this._root = root;
	      this._abstract = abstract;
	      this._hashbang = hashbang;
	
	      // check if HTML5 history is available
	      var hasPushState = typeof window !== 'undefined' && window.history && window.history.pushState;
	      this._history = history && hasPushState;
	      this._historyFallback = history && !hasPushState;
	
	      // create history object
	      var inBrowser = Vue.util.inBrowser;
	      this.mode = !inBrowser || this._abstract ? 'abstract' : this._history ? 'html5' : 'hash';
	
	      var History = historyBackends[this.mode];
	      this.history = new History({
	        root: root,
	        hashbang: this._hashbang,
	        onChange: function onChange(path, state, anchor) {
	          _this._match(path, state, anchor);
	        }
	      });
	
	      // other options
	      this._saveScrollPosition = saveScrollPosition;
	      this._linkActiveClass = linkActiveClass;
	      this._suppress = suppressTransitionError;
	    }
	
	    /**
	     * Allow directly passing components to a route
	     * definition.
	     *
	     * @param {String} path
	     * @param {Object} handler
	     */
	
	    // API ===================================================
	
	    /**
	    * Register a map of top-level paths.
	    *
	    * @param {Object} map
	    */
	
	    Router.prototype.map = function map(_map) {
	      for (var route in _map) {
	        this.on(route, _map[route]);
	      }
	      return this;
	    };
	
	    /**
	     * Register a single root-level path
	     *
	     * @param {String} rootPath
	     * @param {Object} handler
	     *                 - {String} component
	     *                 - {Object} [subRoutes]
	     *                 - {Boolean} [forceRefresh]
	     *                 - {Function} [before]
	     *                 - {Function} [after]
	     */
	
	    Router.prototype.on = function on(rootPath, handler) {
	      if (rootPath === '*') {
	        this._notFound(handler);
	      } else {
	        this._addRoute(rootPath, handler, []);
	      }
	      return this;
	    };
	
	    /**
	     * Set redirects.
	     *
	     * @param {Object} map
	     */
	
	    Router.prototype.redirect = function redirect(map) {
	      for (var path in map) {
	        this._addRedirect(path, map[path]);
	      }
	      return this;
	    };
	
	    /**
	     * Set aliases.
	     *
	     * @param {Object} map
	     */
	
	    Router.prototype.alias = function alias(map) {
	      for (var path in map) {
	        this._addAlias(path, map[path]);
	      }
	      return this;
	    };
	
	    /**
	     * Set global before hook.
	     *
	     * @param {Function} fn
	     */
	
	    Router.prototype.beforeEach = function beforeEach(fn) {
	      this._beforeEachHooks.push(fn);
	      return this;
	    };
	
	    /**
	     * Set global after hook.
	     *
	     * @param {Function} fn
	     */
	
	    Router.prototype.afterEach = function afterEach(fn) {
	      this._afterEachHooks.push(fn);
	      return this;
	    };
	
	    /**
	     * Navigate to a given path.
	     * The path can be an object describing a named path in
	     * the format of { name: '...', params: {}, query: {}}
	     * The path is assumed to be already decoded, and will
	     * be resolved against root (if provided)
	     *
	     * @param {String|Object} path
	     * @param {Boolean} [replace]
	     */
	
	    Router.prototype.go = function go(path) {
	      var replace = false;
	      var append = false;
	      if (Vue.util.isObject(path)) {
	        replace = path.replace;
	        append = path.append;
	      }
	      path = this.stringifyPath(path);
	      if (path) {
	        this.history.go(path, replace, append);
	      }
	    };
	
	    /**
	     * Short hand for replacing current path
	     *
	     * @param {String} path
	     */
	
	    Router.prototype.replace = function replace(path) {
	      if (typeof path === 'string') {
	        path = { path: path };
	      }
	      path.replace = true;
	      this.go(path);
	    };
	
	    /**
	     * Start the router.
	     *
	     * @param {VueConstructor} App
	     * @param {String|Element} container
	     * @param {Function} [cb]
	     */
	
	    Router.prototype.start = function start(App, container, cb) {
	      /* istanbul ignore if */
	      if (this._started) {
	        warn$1('already started.');
	        return;
	      }
	      this._started = true;
	      this._startCb = cb;
	      if (!this.app) {
	        /* istanbul ignore if */
	        if (!App || !container) {
	          throw new Error('Must start vue-router with a component and a ' + 'root container.');
	        }
	        /* istanbul ignore if */
	        if (App instanceof Vue) {
	          throw new Error('Must start vue-router with a component, not a ' + 'Vue instance.');
	        }
	        this._appContainer = container;
	        var Ctor = this._appConstructor = typeof App === 'function' ? App : Vue.extend(App);
	        // give it a name for better debugging
	        Ctor.options.name = Ctor.options.name || 'RouterApp';
	      }
	
	      // handle history fallback in browsers that do not
	      // support HTML5 history API
	      if (this._historyFallback) {
	        var _location = window.location;
	        var _history = new HTML5History({ root: this._root });
	        var path = _history.root ? _location.pathname.replace(_history.rootRE, '') : _location.pathname;
	        if (path && path !== '/') {
	          _location.assign((_history.root || '') + '/' + this.history.formatPath(path) + _location.search);
	          return;
	        }
	      }
	
	      this.history.start();
	    };
	
	    /**
	     * Stop listening to route changes.
	     */
	
	    Router.prototype.stop = function stop() {
	      this.history.stop();
	      this._started = false;
	    };
	
	    /**
	     * Normalize named route object / string paths into
	     * a string.
	     *
	     * @param {Object|String|Number} path
	     * @return {String}
	     */
	
	    Router.prototype.stringifyPath = function stringifyPath(path) {
	      var generatedPath = '';
	      if (path && typeof path === 'object') {
	        if (path.name) {
	          var extend = Vue.util.extend;
	          var currentParams = this._currentTransition && this._currentTransition.to.params;
	          var targetParams = path.params || {};
	          var params = currentParams ? extend(extend({}, currentParams), targetParams) : targetParams;
	          generatedPath = encodeURI(this._recognizer.generate(path.name, params));
	        } else if (path.path) {
	          generatedPath = encodeURI(path.path);
	        }
	        if (path.query) {
	          // note: the generated query string is pre-URL-encoded by the recognizer
	          var query = this._recognizer.generateQueryString(path.query);
	          if (generatedPath.indexOf('?') > -1) {
	            generatedPath += '&' + query.slice(1);
	          } else {
	            generatedPath += query;
	          }
	        }
	      } else {
	        generatedPath = encodeURI(path ? path + '' : '');
	      }
	      return generatedPath;
	    };
	
	    // Internal methods ======================================
	
	    /**
	    * Add a route containing a list of segments to the internal
	    * route recognizer. Will be called recursively to add all
	    * possible sub-routes.
	    *
	    * @param {String} path
	    * @param {Object} handler
	    * @param {Array} segments
	    */
	
	    Router.prototype._addRoute = function _addRoute(path, handler, segments) {
	      guardComponent(path, handler);
	      handler.path = path;
	      handler.fullPath = (segments.reduce(function (path, segment) {
	        return path + segment.path;
	      }, '') + path).replace('//', '/');
	      segments.push({
	        path: path,
	        handler: handler
	      });
	      this._recognizer.add(segments, {
	        as: handler.name
	      });
	      // add sub routes
	      if (handler.subRoutes) {
	        for (var subPath in handler.subRoutes) {
	          // recursively walk all sub routes
	          this._addRoute(subPath, handler.subRoutes[subPath],
	          // pass a copy in recursion to avoid mutating
	          // across branches
	          segments.slice());
	        }
	      }
	    };
	
	    /**
	     * Set the notFound route handler.
	     *
	     * @param {Object} handler
	     */
	
	    Router.prototype._notFound = function _notFound(handler) {
	      guardComponent('*', handler);
	      this._notFoundHandler = [{ handler: handler }];
	    };
	
	    /**
	     * Add a redirect record.
	     *
	     * @param {String} path
	     * @param {String} redirectPath
	     */
	
	    Router.prototype._addRedirect = function _addRedirect(path, redirectPath) {
	      if (path === '*') {
	        this._notFoundRedirect = redirectPath;
	      } else {
	        this._addGuard(path, redirectPath, this.replace);
	      }
	    };
	
	    /**
	     * Add an alias record.
	     *
	     * @param {String} path
	     * @param {String} aliasPath
	     */
	
	    Router.prototype._addAlias = function _addAlias(path, aliasPath) {
	      this._addGuard(path, aliasPath, this._match);
	    };
	
	    /**
	     * Add a path guard.
	     *
	     * @param {String} path
	     * @param {String} mappedPath
	     * @param {Function} handler
	     */
	
	    Router.prototype._addGuard = function _addGuard(path, mappedPath, _handler) {
	      var _this2 = this;
	
	      this._guardRecognizer.add([{
	        path: path,
	        handler: function handler(match, query) {
	          var realPath = mapParams(mappedPath, match.params, query);
	          _handler.call(_this2, realPath);
	        }
	      }]);
	    };
	
	    /**
	     * Check if a path matches any redirect records.
	     *
	     * @param {String} path
	     * @return {Boolean} - if true, will skip normal match.
	     */
	
	    Router.prototype._checkGuard = function _checkGuard(path) {
	      var matched = this._guardRecognizer.recognize(path, true);
	      if (matched) {
	        matched[0].handler(matched[0], matched.queryParams);
	        return true;
	      } else if (this._notFoundRedirect) {
	        matched = this._recognizer.recognize(path);
	        if (!matched) {
	          this.replace(this._notFoundRedirect);
	          return true;
	        }
	      }
	    };
	
	    /**
	     * Match a URL path and set the route context on vm,
	     * triggering view updates.
	     *
	     * @param {String} path
	     * @param {Object} [state]
	     * @param {String} [anchor]
	     */
	
	    Router.prototype._match = function _match(path, state, anchor) {
	      var _this3 = this;
	
	      if (this._checkGuard(path)) {
	        return;
	      }
	
	      var currentRoute = this._currentRoute;
	      var currentTransition = this._currentTransition;
	
	      if (currentTransition) {
	        if (currentTransition.to.path === path) {
	          // do nothing if we have an active transition going to the same path
	          return;
	        } else if (currentRoute.path === path) {
	          // We are going to the same path, but we also have an ongoing but
	          // not-yet-validated transition. Abort that transition and reset to
	          // prev transition.
	          currentTransition.aborted = true;
	          this._currentTransition = this._prevTransition;
	          return;
	        } else {
	          // going to a totally different path. abort ongoing transition.
	          currentTransition.aborted = true;
	        }
	      }
	
	      // construct new route and transition context
	      var route = new Route(path, this);
	      var transition = new RouteTransition(this, route, currentRoute);
	
	      // current transition is updated right now.
	      // however, current route will only be updated after the transition has
	      // been validated.
	      this._prevTransition = currentTransition;
	      this._currentTransition = transition;
	
	      if (!this.app) {
	        (function () {
	          // initial render
	          var router = _this3;
	          _this3.app = new _this3._appConstructor({
	            el: _this3._appContainer,
	            created: function created() {
	              this.$router = router;
	            },
	            _meta: {
	              $route: route
	            }
	          });
	        })();
	      }
	
	      // check global before hook
	      var beforeHooks = this._beforeEachHooks;
	      var startTransition = function startTransition() {
	        transition.start(function () {
	          _this3._postTransition(route, state, anchor);
	        });
	      };
	
	      if (beforeHooks.length) {
	        transition.runQueue(beforeHooks, function (hook, _, next) {
	          if (transition === _this3._currentTransition) {
	            transition.callHook(hook, null, next, {
	              expectBoolean: true
	            });
	          }
	        }, startTransition);
	      } else {
	        startTransition();
	      }
	
	      if (!this._rendered && this._startCb) {
	        this._startCb.call(null);
	      }
	
	      // HACK:
	      // set rendered to true after the transition start, so
	      // that components that are acitvated synchronously know
	      // whether it is the initial render.
	      this._rendered = true;
	    };
	
	    /**
	     * Set current to the new transition.
	     * This is called by the transition object when the
	     * validation of a route has succeeded.
	     *
	     * @param {Transition} transition
	     */
	
	    Router.prototype._onTransitionValidated = function _onTransitionValidated(transition) {
	      // set current route
	      var route = this._currentRoute = transition.to;
	      // update route context for all children
	      if (this.app.$route !== route) {
	        this.app.$route = route;
	        this._children.forEach(function (child) {
	          child.$route = route;
	        });
	      }
	      // call global after hook
	      if (this._afterEachHooks.length) {
	        this._afterEachHooks.forEach(function (hook) {
	          return hook.call(null, {
	            to: transition.to,
	            from: transition.from
	          });
	        });
	      }
	      this._currentTransition.done = true;
	    };
	
	    /**
	     * Handle stuff after the transition.
	     *
	     * @param {Route} route
	     * @param {Object} [state]
	     * @param {String} [anchor]
	     */
	
	    Router.prototype._postTransition = function _postTransition(route, state, anchor) {
	      // handle scroll positions
	      // saved scroll positions take priority
	      // then we check if the path has an anchor
	      var pos = state && state.pos;
	      if (pos && this._saveScrollPosition) {
	        Vue.nextTick(function () {
	          window.scrollTo(pos.x, pos.y);
	        });
	      } else if (anchor) {
	        Vue.nextTick(function () {
	          var el = document.getElementById(anchor.slice(1));
	          if (el) {
	            window.scrollTo(window.scrollX, el.offsetTop);
	          }
	        });
	      }
	    };
	
	    return Router;
	  })();
	
	  function guardComponent(path, handler) {
	    var comp = handler.component;
	    if (Vue.util.isPlainObject(comp)) {
	      comp = handler.component = Vue.extend(comp);
	    }
	    /* istanbul ignore if */
	    if (typeof comp !== 'function') {
	      handler.component = null;
	      warn$1('invalid component for route "' + path + '".');
	    }
	  }
	
	  /* Installation */
	
	  Router.installed = false;
	
	  /**
	   * Installation interface.
	   * Install the necessary directives.
	   */
	
	  Router.install = function (externalVue) {
	    /* istanbul ignore if */
	    if (Router.installed) {
	      warn$1('already installed.');
	      return;
	    }
	    Vue = externalVue;
	    applyOverride(Vue);
	    View(Vue);
	    Link(Vue);
	    exports$1.Vue = Vue;
	    Router.installed = true;
	  };
	
	  // auto install
	  /* istanbul ignore if */
	  if (typeof window !== 'undefined' && window.Vue) {
	    window.Vue.use(Router);
	  }
	
	  return Router;
	
	}));

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _vue = __webpack_require__(59);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _vuex = __webpack_require__(63);
	
	var _vuex2 = _interopRequireDefault(_vuex);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_vue2.default.use(_vuex2.default);
	
	exports.default = new _vuex2.default.Store({
	    state: {
	        getScrollerTime: function getScrollerTime(selector, type) {
	            var size = $('html').css('font-size'),
	                width,
	                height;
	
	            size = size.replace(/[^\d]+$/, "");
	            width = parseInt(Number(size) * 3.58, 10);
	            height = parseInt(Number(size) * 1.5, 10);
	
	            var theme = {
	                defaults: {
	                    dateOrder: 'yymmdd',
	                    mode: 'mixed',
	                    rows: 5,
	                    width: width,
	                    height: height,
	                    showLabel: false,
	                    useShortLabels: true,
	                    timeFormat: 'HH:ii'
	                }
	            };
	
	            $.mobiscroll.themes['cncnerp-m'] = theme;
	            $.mobiscroll.themes['cncnerp-m light'] = theme;
	
	            var currYear = new Date().getFullYear();
	            var opt = {};
	            opt.date = { preset: 'date' };
	            opt.datetime = { preset: 'datetime' };
	            opt.time = { preset: 'time' };
	            opt.default = {
	                theme: 'cncnerp-m light', //皮肤样式
	                display: 'modal', //显示方式
	                mode: 'scroller', //日期选择模式
	                lang: 'zh',
	                startYear: currYear - 10, //开始年份
	                endYear: currYear + 10 //结束年份
	            };
	
	            if (!type) {
	                $(selector).scroller('destroy').scroller($.extend(opt['date'], opt['default']));
	            } else {
	                $(selector).mobiscroll().time({
	                    theme: 'cncnerp-m light',
	                    display: 'modal',
	                    timeFormat: 'HH:ii',
	                    timeWheels: 'HHii'
	                });
	            }
	        }
	    },
	    actions: {}
	});

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Vuex v0.6.2
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  (global.Vuex = factory());
	}(this, function () { 'use strict';
	
	  var babelHelpers = {};
	  babelHelpers.typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	    return typeof obj;
	  } : function (obj) {
	    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
	  };
	
	  babelHelpers.classCallCheck = function (instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  };
	
	  babelHelpers.createClass = function () {
	    function defineProperties(target, props) {
	      for (var i = 0; i < props.length; i++) {
	        var descriptor = props[i];
	        descriptor.enumerable = descriptor.enumerable || false;
	        descriptor.configurable = true;
	        if ("value" in descriptor) descriptor.writable = true;
	        Object.defineProperty(target, descriptor.key, descriptor);
	      }
	    }
	
	    return function (Constructor, protoProps, staticProps) {
	      if (protoProps) defineProperties(Constructor.prototype, protoProps);
	      if (staticProps) defineProperties(Constructor, staticProps);
	      return Constructor;
	    };
	  }();
	
	  babelHelpers.toConsumableArray = function (arr) {
	    if (Array.isArray(arr)) {
	      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
	
	      return arr2;
	    } else {
	      return Array.from(arr);
	    }
	  };
	
	  babelHelpers;
	
	  /**
	   * Merge an array of objects into one.
	   *
	   * @param {Array<Object>} arr
	   * @return {Object}
	   */
	
	  function mergeObjects(arr) {
	    return arr.reduce(function (prev, obj) {
	      Object.keys(obj).forEach(function (key) {
	        var existing = prev[key];
	        if (existing) {
	          // allow multiple mutation objects to contain duplicate
	          // handlers for the same mutation type
	          if (Array.isArray(existing)) {
	            existing.push(obj[key]);
	          } else {
	            prev[key] = [prev[key], obj[key]];
	          }
	        } else {
	          prev[key] = obj[key];
	        }
	      });
	      return prev;
	    }, {});
	  }
	
	  /**
	   * Deep clone an object. Faster than JSON.parse(JSON.stringify()).
	   *
	   * @param {*} obj
	   * @return {*}
	   */
	
	  function deepClone(obj) {
	    if (Array.isArray(obj)) {
	      return obj.map(deepClone);
	    } else if (obj && (typeof obj === 'undefined' ? 'undefined' : babelHelpers.typeof(obj)) === 'object') {
	      var cloned = {};
	      var keys = Object.keys(obj);
	      for (var i = 0, l = keys.length; i < l; i++) {
	        var key = keys[i];
	        cloned[key] = deepClone(obj[key]);
	      }
	      return cloned;
	    } else {
	      return obj;
	    }
	  }
	
	  /**
	   * Hacks to get access to Vue internals.
	   * Maybe we should expose these...
	   */
	
	  var Watcher = void 0;
	  function getWatcher(vm) {
	    if (!Watcher) {
	      var unwatch = vm.$watch('__vuex__', function (a) {
	        return a;
	      });
	      Watcher = vm._watchers[0].constructor;
	      unwatch();
	    }
	    return Watcher;
	  }
	
	  var Dep = void 0;
	  function getDep(vm) {
	    if (!Dep) {
	      Dep = vm._data.__ob__.dep.constructor;
	    }
	    return Dep;
	  }
	
	  var hook = typeof window !== 'undefined' && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
	
	  var devtoolMiddleware = {
	    onInit: function onInit(state, store) {
	      if (!hook) return;
	      hook.emit('vuex:init', store);
	      hook.on('vuex:travel-to-state', function (targetState) {
	        var currentState = store._vm._data;
	        store._dispatching = true;
	        Object.keys(targetState).forEach(function (key) {
	          currentState[key] = targetState[key];
	        });
	        store._dispatching = false;
	      });
	    },
	    onMutation: function onMutation(mutation, state) {
	      if (!hook) return;
	      hook.emit('vuex:mutation', mutation, state);
	    }
	  };
	
	  function override (Vue) {
	    // override init and inject vuex init procedure
	    var _init = Vue.prototype._init;
	    Vue.prototype._init = function () {
	      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	      options.init = options.init ? [vuexInit].concat(options.init) : vuexInit;
	      _init.call(this, options);
	    };
	
	    function vuexInit() {
	      var options = this.$options;
	      var store = options.store;
	      var vuex = options.vuex;
	      // store injection
	
	      if (store) {
	        this.$store = store;
	      } else if (options.parent && options.parent.$store) {
	        this.$store = options.parent.$store;
	      }
	      // vuex option handling
	      if (vuex) {
	        if (!this.$store) {
	          console.warn('[vuex] store not injected. make sure to ' + 'provide the store option in your root component.');
	        }
	        var state = vuex.state;
	        var getters = vuex.getters;
	        var actions = vuex.actions;
	        // handle deprecated state option
	
	        if (state && !getters) {
	          console.warn('[vuex] vuex.state option will been deprecated in 1.0. ' + 'Use vuex.getters instead.');
	          getters = state;
	        }
	        // getters
	        if (getters) {
	          options.computed = options.computed || {};
	          for (var key in getters) {
	            defineVuexGetter(this, key, getters[key]);
	          }
	        }
	        // actions
	        if (actions) {
	          options.methods = options.methods || {};
	          for (var _key in actions) {
	            options.methods[_key] = makeBoundAction(actions[_key], this.$store);
	          }
	        }
	      }
	    }
	
	    function setter() {
	      throw new Error('vuex getter properties are read-only.');
	    }
	
	    function defineVuexGetter(vm, key, getter) {
	      Object.defineProperty(vm, key, {
	        enumerable: true,
	        configurable: true,
	        get: makeComputedGetter(vm.$store, getter),
	        set: setter
	      });
	    }
	
	    function makeComputedGetter(store, getter) {
	      var id = store._getterCacheId;
	      // cached
	      if (getter[id]) {
	        return getter[id];
	      }
	      var vm = store._vm;
	      var Watcher = getWatcher(vm);
	      var Dep = getDep(vm);
	      var watcher = new Watcher(vm, function (state) {
	        return getter(state);
	      }, null, { lazy: true });
	      var computedGetter = function computedGetter() {
	        if (watcher.dirty) {
	          watcher.evaluate();
	        }
	        if (Dep.target) {
	          watcher.depend();
	        }
	        return watcher.value;
	      };
	      getter[id] = computedGetter;
	      return computedGetter;
	    }
	
	    function makeBoundAction(action, store) {
	      return function vuexBoundAction() {
	        for (var _len = arguments.length, args = Array(_len), _key2 = 0; _key2 < _len; _key2++) {
	          args[_key2] = arguments[_key2];
	        }
	
	        return action.call.apply(action, [this, store].concat(args));
	      };
	    }
	
	    // option merging
	    var merge = Vue.config.optionMergeStrategies.computed;
	    Vue.config.optionMergeStrategies.vuex = function (toVal, fromVal) {
	      if (!toVal) return fromVal;
	      if (!fromVal) return toVal;
	      return {
	        getters: merge(toVal.getters, fromVal.getters),
	        state: merge(toVal.state, fromVal.state),
	        actions: merge(toVal.actions, fromVal.actions)
	      };
	    };
	  }
	
	  var Vue = void 0;
	  var uid = 0;
	
	  var Store = function () {
	
	    /**
	     * @param {Object} options
	     *        - {Object} state
	     *        - {Object} actions
	     *        - {Object} mutations
	     *        - {Array} middlewares
	     *        - {Boolean} strict
	     */
	
	    function Store() {
	      var _this = this;
	
	      var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	      var _ref$state = _ref.state;
	      var state = _ref$state === undefined ? {} : _ref$state;
	      var _ref$mutations = _ref.mutations;
	      var mutations = _ref$mutations === undefined ? {} : _ref$mutations;
	      var _ref$modules = _ref.modules;
	      var modules = _ref$modules === undefined ? {} : _ref$modules;
	      var _ref$middlewares = _ref.middlewares;
	      var middlewares = _ref$middlewares === undefined ? [] : _ref$middlewares;
	      var _ref$strict = _ref.strict;
	      var strict = _ref$strict === undefined ? false : _ref$strict;
	      babelHelpers.classCallCheck(this, Store);
	
	      this._getterCacheId = 'vuex_store_' + uid++;
	      this._dispatching = false;
	      this._rootMutations = this._mutations = mutations;
	      this._modules = modules;
	      // bind dispatch to self
	      var dispatch = this.dispatch;
	      this.dispatch = function () {
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }
	
	        dispatch.apply(_this, args);
	      };
	      // use a Vue instance to store the state tree
	      // suppress warnings just in case the user has added
	      // some funky global mixins
	      if (!Vue) {
	        throw new Error('[vuex] must call Vue.use(Vuex) before creating a store instance.');
	      }
	      var silent = Vue.config.silent;
	      Vue.config.silent = true;
	      this._vm = new Vue({
	        data: state
	      });
	      Vue.config.silent = silent;
	      this._setupModuleState(state, modules);
	      this._setupModuleMutations(modules);
	      this._setupMiddlewares(middlewares, state);
	      // add extra warnings in strict mode
	      if (strict) {
	        this._setupMutationCheck();
	      }
	    }
	
	    /**
	     * Getter for the entire state tree.
	     * Read only.
	     *
	     * @return {Object}
	     */
	
	    babelHelpers.createClass(Store, [{
	      key: 'dispatch',
	
	
	      /**
	       * Dispatch an action.
	       *
	       * @param {String} type
	       */
	
	      value: function dispatch(type) {
	        var _this2 = this;
	
	        for (var _len2 = arguments.length, payload = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	          payload[_key2 - 1] = arguments[_key2];
	        }
	
	        // compatibility for object actions, e.g. FSA
	        if ((typeof type === 'undefined' ? 'undefined' : babelHelpers.typeof(type)) === 'object' && type.type && arguments.length === 1) {
	          payload = [type];
	          type = type.type;
	        }
	        var mutation = this._mutations[type];
	        var prevSnapshot = this._prevSnapshot;
	        var state = this.state;
	        var snapshot = void 0,
	            clonedPayload = void 0;
	        if (mutation) {
	          this._dispatching = true;
	          // apply the mutation
	          if (Array.isArray(mutation)) {
	            mutation.forEach(function (m) {
	              return m.apply(undefined, [state].concat(babelHelpers.toConsumableArray(payload)));
	            });
	          } else {
	            mutation.apply(undefined, [state].concat(babelHelpers.toConsumableArray(payload)));
	          }
	          this._dispatching = false;
	          // invoke middlewares
	          if (this._needSnapshots) {
	            snapshot = this._prevSnapshot = deepClone(state);
	            clonedPayload = deepClone(payload);
	          }
	          this._middlewares.forEach(function (m) {
	            if (m.onMutation) {
	              if (m.snapshot) {
	                m.onMutation({ type: type, payload: clonedPayload }, snapshot, prevSnapshot, _this2);
	              } else {
	                m.onMutation({ type: type, payload: payload }, state, _this2);
	              }
	            }
	          });
	        } else {
	          console.warn('[vuex] Unknown mutation: ' + type);
	        }
	      }
	
	      /**
	       * Watch state changes on the store.
	       * Same API as Vue's $watch, except when watching a function,
	       * the function gets the state as the first argument.
	       *
	       * @param {String|Function} expOrFn
	       * @param {Function} cb
	       * @param {Object} [options]
	       */
	
	    }, {
	      key: 'watch',
	      value: function watch(expOrFn, cb, options) {
	        var _this3 = this;
	
	        return this._vm.$watch(function () {
	          return typeof expOrFn === 'function' ? expOrFn(_this3.state) : _this3._vm.$get(expOrFn);
	        }, cb, options);
	      }
	
	      /**
	       * Hot update mutations & modules.
	       *
	       * @param {Object} options
	       *        - {Object} [mutations]
	       *        - {Object} [modules]
	       */
	
	    }, {
	      key: 'hotUpdate',
	      value: function hotUpdate() {
	        var _ref2 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	        var mutations = _ref2.mutations;
	        var modules = _ref2.modules;
	
	        this._rootMutations = this._mutations = mutations || this._rootMutations;
	        this._setupModuleMutations(modules || this._modules);
	      }
	
	      /**
	       * Attach sub state tree of each module to the root tree.
	       *
	       * @param {Object} state
	       * @param {Object} modules
	       */
	
	    }, {
	      key: '_setupModuleState',
	      value: function _setupModuleState(state, modules) {
	        var setPath = Vue.parsers.path.setPath;
	
	        Object.keys(modules).forEach(function (key) {
	          setPath(state, key, modules[key].state || {});
	        });
	      }
	
	      /**
	       * Bind mutations for each module to its sub tree and
	       * merge them all into one final mutations map.
	       *
	       * @param {Object} updatedModules
	       */
	
	    }, {
	      key: '_setupModuleMutations',
	      value: function _setupModuleMutations(updatedModules) {
	        var modules = this._modules;
	        var getPath = Vue.parsers.path.getPath;
	
	        var allMutations = [this._rootMutations];
	        Object.keys(updatedModules).forEach(function (key) {
	          modules[key] = updatedModules[key];
	        });
	        Object.keys(modules).forEach(function (key) {
	          var module = modules[key];
	          if (!module || !module.mutations) return;
	          // bind mutations to sub state tree
	          var mutations = {};
	          Object.keys(module.mutations).forEach(function (name) {
	            var original = module.mutations[name];
	            mutations[name] = function (state) {
	              for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
	                args[_key3 - 1] = arguments[_key3];
	              }
	
	              original.apply(undefined, [getPath(state, key)].concat(args));
	            };
	          });
	          allMutations.push(mutations);
	        });
	        this._mutations = mergeObjects(allMutations);
	      }
	
	      /**
	       * Setup mutation check: if the vuex instance's state is mutated
	       * outside of a mutation handler, we throw en error. This effectively
	       * enforces all mutations to the state to be trackable and hot-reloadble.
	       * However, this comes at a run time cost since we are doing a deep
	       * watch on the entire state tree, so it is only enalbed with the
	       * strict option is set to true.
	       */
	
	    }, {
	      key: '_setupMutationCheck',
	      value: function _setupMutationCheck() {
	        var _this4 = this;
	
	        var Watcher = getWatcher(this._vm);
	        /* eslint-disable no-new */
	        new Watcher(this._vm, '$data', function () {
	          if (!_this4._dispatching) {
	            throw new Error('[vuex] Do not mutate vuex store state outside mutation handlers.');
	          }
	        }, { deep: true, sync: true });
	        /* eslint-enable no-new */
	      }
	
	      /**
	       * Setup the middlewares. The devtools middleware is always
	       * included, since it does nothing if no devtool is detected.
	       *
	       * A middleware can demand the state it receives to be
	       * "snapshots", i.e. deep clones of the actual state tree.
	       *
	       * @param {Array} middlewares
	       * @param {Object} state
	       */
	
	    }, {
	      key: '_setupMiddlewares',
	      value: function _setupMiddlewares(middlewares, state) {
	        var _this5 = this;
	
	        this._middlewares = [devtoolMiddleware].concat(middlewares);
	        this._needSnapshots = middlewares.some(function (m) {
	          return m.snapshot;
	        });
	        if (this._needSnapshots) {
	          console.log('[vuex] One or more of your middlewares are taking state snapshots ' + 'for each mutation. Make sure to use them only during development.');
	        }
	        var initialSnapshot = this._prevSnapshot = this._needSnapshots ? deepClone(state) : null;
	        // call init hooks
	        this._middlewares.forEach(function (m) {
	          if (m.onInit) {
	            m.onInit(m.snapshot ? initialSnapshot : state, _this5);
	          }
	        });
	      }
	    }, {
	      key: 'state',
	      get: function get() {
	        return this._vm._data;
	      },
	      set: function set(v) {
	        throw new Error('[vuex] Vuex root state is read only.');
	      }
	    }]);
	    return Store;
	  }();
	
	  function install(_Vue) {
	    Vue = _Vue;
	    override(Vue);
	  }
	
	  // auto install in dist mode
	  if (typeof window !== 'undefined' && window.Vue) {
	    install(window.Vue);
	  }
	
	  function createLogger() {
	    console.warn('[vuex] Vuex.createLogger has been deprecated.' + 'Use `import createLogger from \'vuex/logger\' instead.');
	  }
	
	  var index = {
	    Store: Store,
	    install: install,
	    createLogger: createLogger
	  };
	
	  return index;
	
	}));

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
								value: true
	});
	
	exports.default = function (router) {
								router.map({
															'*': {
																						component: __webpack_require__(65)
															},
															'/home': {
																						name: 'home',
																						component: __webpack_require__(65)
															},
	
															/* 消息部分 */
															'/msg': {
																						name: 'msg',
																						component: __webpack_require__(83)
															},
															'/msg/system': {
																						name: 'msgSystem',
																						component: __webpack_require__(98)
															},
															'/msg/comment': {
																						name: 'msgComment',
																						component: __webpack_require__(103)
															},
															'/msg/message': {
																						name: 'msgMessage',
																						component: __webpack_require__(108)
															},
															'/msg/order': {
																						name: 'msgOrder',
																						component: __webpack_require__(113)
															},
	
															/* 场景部分 */
															'/scene/': {
																						name: 'scene',
																						component: __webpack_require__(118)
															},
															'/scene/detail': {
																						name: 'sceneDetail',
																						component: __webpack_require__(128)
															},
															'/scene/reserve': {
																						name: 'sceneReserve',
																						component: __webpack_require__(140)
															},
															'/scene/appraise': {
																						name: 'sceneAppraise',
																						component: __webpack_require__(145)
															},
															'/scene/inviteOrder': {
																						name: 'sceneInviteOrder',
																						component: __webpack_require__(150)
															},
															'/scene/oneKeyOrder': {
																						name: 'sceneOneKeyOrder',
																						component: __webpack_require__(160)
															},
															'/scene/orderSuccess': {
																						name: 'sceneOrderSuccess',
																						component: __webpack_require__(175)
															},
															'/scene/address': {
																						name: 'sceneAddress',
																						component: __webpack_require__(185)
															},
	
															/* 用户部分 */
															'/user': {
																						name: 'user',
																						component: __webpack_require__(195)
															},
															'/user/setting': {
																						name: 'userSetting',
																						component: __webpack_require__(200)
															},
															'/user/money': {
																						name: 'userMoney',
																						component: __webpack_require__(210)
															},
															'/user/work/server': {
																						name: 'userWorkServer',
																						component: __webpack_require__(216)
															},
															'/user/work/publish': {
																						name: 'userWorkPublish',
																						component: __webpack_require__(221)
															},
															'/user/work/publishDetail': {
																						name: 'userWorkPublishDetail',
																						component: __webpack_require__(226)
															},
															'/user/work/accept': {
																						name: 'userWorkAccept',
																						component: __webpack_require__(231)
															},
															'/user/work/acceptDetail': {
																						name: 'userWorkAcceptDetail',
																						component: __webpack_require__(236)
															},
															'/user/work/acceptAppraise': {
																						name: 'userWorkAcceptAppraise',
																						component: __webpack_require__(244)
															},
															'/user/work/acceptBus': {
																						name: 'userWorkAcceptBus',
																						component: __webpack_require__(249)
															},
	
															/* 客服 */
															'/service/': {
																						name: 'service',
																						component: __webpack_require__(254)
															},
	
															/* 认证部分 */
															'/auth': {
																						name: 'auth',
																						component: __webpack_require__(259)
															},
															'/auth/selectMap': {
																						name: 'selectMap',
																						component: __webpack_require__(264)
															},
															'/auth/step2': {
																						name: 'authStep2',
																						component: __webpack_require__(269)
															},
															'/auth/step3': {
																						name: 'authStep3',
																						component: __webpack_require__(275)
															},
															'/auth/checking': {
																						name: 'authChecking',
																						component: __webpack_require__(280)
															},
															'/auth/success': {
																						name: 'authSuccess',
																						component: __webpack_require__(285)
															},
	
															/* 公用页面 */
															'/common/selectCity': {
																						name: 'selectCity',
																						component: __webpack_require__(290)
															},
															'/common/selectSchool': {
																						name: 'selectSchool',
																						component: __webpack_require__(295)
															},
															'/common/selectSex': {
																						name: 'selectSex',
																						component: __webpack_require__(300)
															},
															'/common/selectSort': {
																						name: 'selectSort',
																						component: __webpack_require__(305)
															}
								});
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(66)
	__vue_script__ = __webpack_require__(75)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\views\\home.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(82)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\personal\\vue-demo-webpack\\src\\views\\home.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 66 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <style lang="less">
	//     @import '../less/lib/mixins.less';
	//     .page-home{
	//         background:#fff;
	//
	//         .systemMsg{
	//             border-bottom:1px solid #dedede;
	//             position:relative;
	//             .rem(height, 80);
	//             .rem(line-height, 80);
	//             .rem(font-size, 24);
	//             .rem(padding, 0, 20, 0, 70);
	//             .rem(border-bottom-width, 2);
	//         }
	//
	//         .ico-xiaolaba{
	//             position:absolute;
	//             .rem(width,40);
	//             .rem(height,40);
	//             .rem(top, 20);
	//             .rem(left, 20);
	//             .rem(font-size, 40);
	//             color:#ff946e;
	//         }
	//
	//         /* 场景 */
	//         .sceneWrap{
	//             .rem(padding, 40, 20, 0);
	//         }
	//
	//         .sceneItem{
	//             width:50%;
	//             float:left;
	//             .rem(padding, 0, 10, 16);
	//             .rem(height, 180);
	//
	//             a{
	//                 background:#54c5ff;
	//                 display:inline-block;
	//                 width:100%;
	//                 height:100%;
	//                 color:#fff;
	//                 position:relative;
	//                 .rem(padding,48,0,48,120);
	//                 .border-radius(8);
	//             }
	//             &.red a{
	//                 background:#ff946e;
	//             }
	//
	//             span{
	//                 display:block;
	//                 &.first{
	//                     .rem(font-size, 30);
	//                 }
	//                 &.last{
	//                     .rem(font-size, 20);
	//                 }
	//             }
	//         }
	//
	//         .sceneIcon{
	//             .rem(background-size, 80, 80) !important;
	//             .rem(width,80);
	//             .rem(height,80);
	//             .rem(top, 50);
	//             .rem(left, 20);
	//             position:absolute;
	//         }
	//         .icon-home1{
	//             background:url(../img/home1.svg) no-repeat;
	//         }
	//         .icon-home2{
	//             background:url(../img/home2.svg) no-repeat;
	//         }
	//         .icon-home3{
	//             //background:url(../img/home3.svg) no-repeat;
	//         }
	//         .icon-home4{
	//             background:url(../img/home4.svg) no-repeat;
	//         }
	//         .icon-home5{
	//             background:url(../img/home5.svg) no-repeat;
	//         }
	//         .icon-home6{
	//             background:url(../img/home6.svg) no-repeat;
	//         }
	//         .icon-home7{
	//             //background:url(../img/home7.svg) no-repeat;
	//         }
	//     }
	// </style>
	//
	// <template>
	//     <div class="page-home page-current">
	//         <div class="content showFooter">
	//             <swiper :list="list"></swiper>
	//             <div class="systemMsg">
	//                 <i class="ico ico-xiaolaba"></i>
	//                 <marquee direction="left" scrollamount="3">
	//                     {{systemMsg}}
	//                 </marquee>
	//             </div>
	//             <div class="sceneWrap">
	//                 <div class="sceneItem" :class="{'red': index % 4 == 2 || index % 4 == 1 }" v-for="(index, scene) in sceneList">
	//                     <a external v-link="{ name: 'scene', query:{scene_id: scene.scene_id, scene_name: scene.scene_name, city_id: cityId} }">
	//                        <i class="icon sceneIcon icon-home{{scene.id}}"></i>
	//                        <span class="first">{{scene.scene_name}}</span>
	//                        <span class="last">{{scene.scene_detail}}</span>
	//                     </a>
	//                 </div>
	//             </div>
	//         </div>
	//     </div>
	// </template>
	//
	// <script>
	exports.default = {
	    data: function data() {
	        return {
	            list: indexData.slides,
	            systemMsg: indexData.systemMsg,
	            sceneList: indexData.sceneList,
	            cityId: ''
	        };
	    },
	
	    route: {
	        data: function data(transition) {
	            var self = this,
	                query = transition.to.query;
	
	            self.cityId = returnCitySN.cid;
	        }
	    },
	    components: {
	        'swiper': __webpack_require__(76)
	    }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(77)
	__vue_script__ = __webpack_require__(79)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\swiper\\index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(81)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\personal\\vue-demo-webpack\\src\\components\\swiper\\index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 77 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 78 */,
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _swiper = __webpack_require__(80);
	
	var _swiper2 = _interopRequireDefault(_swiper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  ready: function ready() {
	
	    if (!(this.list && this.list.length === 0)) {
	      this.render();
	    }
	  },
	
	  methods: {
	    buildBackgroundUrl: function buildBackgroundUrl(url) {
	      return 'url(' + url + ')';
	    },
	    render: function render() {
	      var _this = this;
	      this.swiper = new _swiper2.default({
	        container: _this.$el,
	        direction: _this.direction,
	        auto: _this.auto,
	        interval: _this.interval,
	        threshold: _this.threshold,
	        duration: _this.duration,
	        height: _this.height
	      }).on('swiped', function (prev, current) {
	        _this.current = current;
	      });
	    },
	    destroy: function destroy() {
	      this.swiper && this.swiper.destroy();
	    }
	  },
	  props: {
	    list: {
	      type: Array,
	      required: false
	    },
	    direction: {
	      type: String,
	      default: 'horizontal'
	    },
	    show_dots: {
	      type: Boolean,
	      default: true
	    },
	    auto: {
	      type: Boolean,
	      default: false
	    },
	    interval: {
	      type: Number,
	      default: 3000
	    },
	    threshold: {
	      type: Number,
	      default: 50
	    },
	    duration: {
	      type: Number,
	      default: 300
	    },
	    height: {
	      type: Number,
	      default: 180
	    }
	  },
	  data: function data() {
	    return {
	      current: 0
	    };
	  },
	
	  watch: {
	    list: function list(val) {
	      this.destroy();
	      this.render();
	    }
	  },
	  beforeDestroy: function beforeDestroy() {
	    this.destroy();
	  }
	};

	// </script>
	//
	// <style type="text/css">
	// .slider {
	//   overflow: hidden;
	//   position: relative;
	// }
	// .swiper {
	//   overflow: hidden;
	//   position: relative;
	// }
	// .swiper .item {
	//   float: left;
	//   position: relative;
	// }
	// .swiper .item a {
	//   display: block;
	//   width: 100%;
	//   height: 100%;
	// }
	// .swiper .item .img {
	//   display: block;
	//   width: 100%;
	//   height: 100%;
	//   background: center center no-repeat;
	//   background-size: cover;
	// }
	// .swiper .item .desc {
	//   position: absolute;
	//   left: 0;
	//   right: 0;
	//   bottom: 0;
	//   padding: 20px 50px 12px 13px;
	//   background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, .7) 100%);
	//   background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, .7) 100%);
	//   color: #fff;
	//   text-shadow: 0 1px 0 rgba(0, 0, 0, .5);
	//   width: 100%;
	//   overflow: hidden;
	//   text-overflow: ellipsis;
	//   white-space: nowrap;
	//   word-wrap: normal;
	// }
	// .indicator {
	//   position: absolute;
	//   right: 15px;
	//   bottom: 10px;
	// }
	// .indicator a {
	//   float: left;
	//   margin-left: 6px;
	// }
	// .icon_dot {
	//   display: inline-block;
	//   vertical-align: middle;
	//   width: 6px;
	//   height: 6px;
	//   border-radius: 3px;
	//   background-color: #d0cdd1;
	// }
	// .icon_dot.active {
	//   background-color: #04BE02;
	// }
	// </style>

	/* generated by vue-loader */
	// <template>
	//   <div class="slider">
	//     <div class="swiper" :style="{height: height+'px'}">
	//       <slot></slot>
	//       <div class="item" v-for="item in list">
	//         <a :href="item.url">
	//           <div class="img" :style="{backgroundImage: buildBackgroundUrl(item.img)}"></div>
	//           <div class="desc">{{item.title}}</div>
	//         </a>
	//       </div>
	//     </div>
	//     <div class="indicator" v-show="show_dots">
	//       <a href="javascript:" v-for="(index, item) in list">
	//         <i class="icon_dot" :class="{'active':index === current}"></i>
	//       </a>
	//     </div>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 80 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function Swiper(options) {
	  this.version = '1.0.1';
	  this._default = {
	    container: '.swiper',
	    item: '.item',
	    direction: 'vertical',
	    activeClass: 'active',
	    threshold: 50,
	    duration: 300,
	    auto: false,
	    interval: 3000,
	    height: 'auto'
	  };
	  this._options = extend(this._default, options);
	  this._start = {};
	  this._move = {};
	  this._end = {};
	  this._prev = 0;
	  this._current = 0;
	  this._offset = 0;
	  this._goto = -1;
	  this._eventHandlers = {};
	
	  this.$box = this._options.container;
	  this.$container = this._options.container.querySelector('.swiper');
	  this.$items = this.$container.querySelectorAll(this._options.item);
	  this.count = this.$items.length;
	
	  this._width = this.$container.offsetWidth;
	  this._height = this._options.height === 'auto' ? this.$container.offsetHeight : this._options.height;
	  this.timer = null;
	
	  this._auto();
	  this._init();
	  this._bind();
	  return this;
	}
	
	Swiper.prototype._auto = function () {
	  var me = this;
	  if (this._options.auto) {
	    me.timer = setTimeout(function () {
	      me.next();
	    }, me._options.interval);
	  }
	};
	
	Swiper.prototype.stop = function () {
	  clearTimeout(this.timer);
	};
	
	Swiper.prototype._init = function () {
	  var me = this;
	  var width = me._width;
	  var height = me._height;
	
	  var w = width;
	  var h = height * me.count;
	
	  if (me._options.direction === 'horizontal') {
	    w = width * me.count;
	    h = height;
	  }
	
	  if (me._options.direction === 'vertical') {
	    h = height * me.count;
	    me.$box.style.height = height + 'px';
	  }
	
	  me.$container.style.width = w + 'px';
	  me.$container.style.height = h + 'px';
	
	  Array.prototype.forEach.call(me.$items, function ($item, key) {
	    $item.style.width = width + 'px';
	    $item.style.height = height + 'px';
	  });
	
	  me._activate(0);
	};
	
	Swiper.prototype._bind = function () {
	  var me = this;
	  this.touchstartHandler = function (e) {
	    me.stop();
	    me._start.x = e.changedTouches[0].pageX;
	    me._start.y = e.changedTouches[0].pageY;
	
	    me.$container.style['-webkit-transition'] = 'none';
	    me.$container.style.transition = 'none';
	  };
	
	  this.touchmoveHandler = function (e) {
	    me._move.x = e.changedTouches[0].pageX;
	    me._move.y = e.changedTouches[0].pageY;
	
	    var distance = me._move.y - me._start.y;
	    var transform = 'translate3d(0, ' + (distance - me._offset) + 'px, 0)';
	
	    if (me._options.direction === 'horizontal') {
	      distance = me._move.x - me._start.x;
	      transform = 'translate3d(' + (distance - me._offset) + 'px, 0, 0)';
	    }
	
	    me.$container.style['-webkit-transform'] = transform;
	    me.$container.style.transform = transform;
	
	    e.preventDefault();
	  };
	
	  this.touchendHandler = function (e) {
	    me._end.x = e.changedTouches[0].pageX;
	    me._end.y = e.changedTouches[0].pageY;
	
	    var distance = me._end.y - me._start.y;
	    if (me._options.direction === 'horizontal') {
	      distance = me._end.x - me._start.x;
	    }
	
	    me._prev = me._current;
	    if (distance > me._options.threshold) {
	      me._current = me._current === 0 ? 0 : --me._current;
	    } else if (distance < -me._options.threshold) {
	      me._current = me._current < me.count - 1 ? ++me._current : me._current;
	    }
	
	    me._show(me._current);
	  };
	
	  this.$container.addEventListener('touchstart', this.touchstartHandler, false);
	
	  this.$container.addEventListener('touchmove', this.touchmoveHandler, false);
	
	  this.$container.addEventListener('touchend', this.touchendHandler, false);
	
	  this.$container.addEventListener('transitionEnd', function (e) {}, false);
	
	  this.$container.addEventListener('webkitTransitionEnd', function (e) {
	    if (e.target !== me.$container) {
	      return false;
	    }
	
	    if (me._current !== me._prev || me._goto > -1) {
	      me._activate(me._current);
	      var cb = me._eventHandlers.swiped || noop;
	      cb.apply(me, [me._prev, me._current]);
	      me._goto = -1;
	    }
	
	    if (me._options.auto) {
	      me._auto();
	    }
	
	    e.preventDefault();
	  }, false);
	};
	
	Swiper.prototype._show = function (index) {
	  this._offset = index * this._height;
	  var transform = 'translate3d(0, -' + this._offset + 'px, 0)';
	
	  if (this._options.direction === 'horizontal') {
	    this._offset = index * this._width;
	    transform = 'translate3d(-' + this._offset + 'px, 0, 0)';
	  }
	
	  var duration = this._options.duration + 'ms';
	
	  this.$container.style['-webkit-transition'] = duration;
	  this.$container.style.transition = duration;
	  this.$container.style['-webkit-transform'] = transform;
	  this.$container.style.transform = transform;
	};
	
	Swiper.prototype._activate = function (index) {
	  var clazz = this._options.activeClass;
	  Array.prototype.forEach.call(this.$items, function ($item, key) {
	    $item.classList.remove(clazz);
	    if (index === key) {
	      $item.classList.add(clazz);
	    }
	  });
	};
	
	Swiper.prototype.go = function (index) {
	  if (index < 0 || index > this.count - 1 || index === this._current) {
	    return;
	  }
	
	  if (index === 0) {
	    this._current = 0;
	    this._prev = 0;
	  } else {
	    this._current = index;
	    this._prev = index - 1;
	  }
	
	  this._goto = index;
	  this._show(this._current);
	
	  return this;
	};
	
	Swiper.prototype.next = function () {
	  if (this._current >= this.count - 1) {
	    this._current = 0;
	    this._show(0);
	    return this;
	  }
	  this._prev = this._current;
	  this._show(++this._current);
	  return this;
	};
	
	Swiper.prototype.on = function (event, callback) {
	  if (this._eventHandlers[event]) {
	    console.error('event ' + event + ' is already register');
	  }
	  if (typeof callback !== 'function') {
	    console.error('parameter callback must be a function');
	  }
	
	  this._eventHandlers[event] = callback;
	
	  return this;
	};
	
	Swiper.prototype.destroy = function () {
	  if (this.timer) {
	    clearTimeout(this.timer);
	  }
	  this.$container.removeEventListener('touchstart', this.touchstartHandler, false);
	  this.$container.removeEventListener('touchmove', this.touchmoveHandler, false);
	  this.$container.removeEventListener('touchend', this.touchendHandler, false);
	};
	
	function extend(target, source) {
	  for (var key in source) {
	    target[key] = source[key];
	  }
	
	  return target;
	}
	
	function noop() {}
	
	exports.default = Swiper;

/***/ },
/* 81 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"slider\">\n  <div class=\"swiper\" :style=\"{height: height+'px'}\">\n    <slot></slot>\n    <div class=\"item\" v-for=\"item in list\">\n      <a :href=\"item.url\">\n        <div class=\"img\" :style=\"{backgroundImage: buildBackgroundUrl(item.img)}\"></div>\n        <div class=\"desc\">{{item.title}}</div>\n      </a>\n    </div>\n  </div>\n  <div class=\"indicator\" v-show=\"show_dots\">\n    <a href=\"javascript:\" v-for=\"(index, item) in list\">\n      <i class=\"icon_dot\" :class=\"{'active':index === current}\"></i>\n    </a>\n  </div>\n</div>\n";

/***/ },
/* 82 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"page-home page-current\">\n    <div class=\"content showFooter\">\n        <swiper :list=\"list\"></swiper>\n        <div class=\"systemMsg\">\n            <i class=\"ico ico-xiaolaba\"></i>\n            <marquee direction=\"left\" scrollamount=\"3\">\n                {{systemMsg}}\n            </marquee>\n        </div>\n        <div class=\"sceneWrap\">\n            <div class=\"sceneItem\" :class=\"{'red': index % 4 == 2 || index % 4 == 1 }\" v-for=\"(index, scene) in sceneList\">\n                <a external v-link=\"{ name: 'scene', query:{scene_id: scene.scene_id, scene_name: scene.scene_name, city_id: cityId} }\">\n                   <i class=\"icon sceneIcon icon-home{{scene.id}}\"></i>\n                   <span class=\"first\">{{scene.scene_name}}</span>\n                   <span class=\"last\">{{scene.scene_detail}}</span>\n                </a>\n            </div>\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(84)
	__vue_script__ = __webpack_require__(87)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\views\\msg.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(97)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\personal\\vue-demo-webpack\\src\\views\\msg.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 84 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 85 */,
/* 86 */,
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <style lang="less">
	// @import '../less/lib/mixins.less';
	// .page-msg{
	//     .scenefilter{
	//         position: absolute;
	//         left: 0;
	//         top: 2.2rem;
	//         z-index: 10;
	//         height: 2.2rem;
	//         background:#fff;
	//         width:100%;
	//         border-bottom:2px solid #b2b2b2;
	//         .rem(border-bottom-width, 2);
	//
	//         li{
	//             width:50%;
	//             float:left;
	//             text-align:center;
	//             line-height:1.4rem;
	//             margin:0.4rem 0;
	//             .rem(font-size, 30);
	//             &:first-child{
	//                  border-right:1px solid #b2b2b2;
	//                  .rem(border-right-width, 2);
	//             }
	//
	//             span{
	//                 &.cur{
	//                     color:#54c5ff
	//                     //border-bottom:1px solid #54c5ff;
	//                     //.rem(border-bottom-width, 2);
	//                 }
	//             }
	//         }
	//     }
	//
	//     .item{
	//         position:relative;
	//         background:#fff;
	//         .border-radius(8);
	//         .rem(margin-bottom, 20);
	//         position:relative;
	//
	//         .photoWrap{
	//             position:absolute;
	//             .rem(width, 90);
	//             .rem(height, 90);
	//             .border-radius(90);
	//             img{
	//                 width:100%;
	//                 height:100%;
	//                 .border-radius(120);
	//             }
	//         }
	//     }
	//
	//     .order{
	//
	//         header{
	//             border-bottom:2px solid #b2b2b2;
	//             .rem(border-bottom-width, 2);
	//
	//             .photoWrap{
	//                 .rem(left, 20);
	//                 .rem(top, 5);
	//             }
	//
	//             .textWrap{
	//                 .rem(padding, 20, 20, 20, 130);
	//             }
	//                 .header{
	//                     position:relative;
	//                     .rem(font-size, 30);
	//                     span{
	//                         position:absolute;
	//                         right: 0;
	//                         top:0
	//                     }
	//                 }
	//                 .text{
	//                     .rem(font-size, 30);
	//                     .rem(padding, 10, 0);
	//                 }
	//         }
	//
	//         footer{
	//             .rem(margin, 0, 20);
	//             .rem(padding, 20, 0);
	//             .rem(font-size, 30);
	//
	//             .unit{
	//                 color:#ff946e;
	//             }
	//             .time{
	//                 span{
	//                     color:#b2b2b2;
	//                 }
	//             }
	//             .position{
	//                 span{
	//                     color:#b2b2b2;
	//                 }
	//             }
	//         }
	//
	//         .tag{
	//             position:absolute;
	//             .rem(top, -10);
	//             .rem(left, -20);
	//             background:#11cd6e;
	//             color:#fff;
	//             transform:rotate(-30deg);
	//             -webkit-transform:rotate(-30deg);
	//             .border-radius(8);
	//             .rem(padding, 5, 20);
	//             .rem(font-size, 24);
	//             z-index:1;
	//
	//             &.over{
	//                 background:#b2b2b2
	//             }
	//         }
	//
	//         .timeout{
	//             position:absolute;
	//             top:0;
	//             left:0;
	//             width:100%;
	//             height:100%;
	//             background:url(../img/timeout.png) no-repeat center;
	//             .rem(background-size, 240, 180);
	//         }
	//     }
	//
	//     .msg{
	//         .photoWrap{
	//             .rem(left, 20);
	//             .rem(top, 20);
	//         }
	//         .textWrap{
	//             .rem(padding, 20, 20, 20, 120);
	//         }
	//         .name{
	//             .rem(font-size, 30);
	//             .rem(padding-right, 140);
	//         }
	//         .text{
	//             .rem(font-size, 30);
	//         }
	//         .time{
	//             color:#b2b2b2;
	//             .rem(font-size, 24);
	//             position:absolute;
	//             .rem(top, 20);
	//             .rem(right, 20);
	//         }
	//     }
	// }
	// </style>
	//
	// <template>
	//     <div class="page-msg">
	//         <header-bar :title="title"></header-bar>
	//         <ul class="scenefilter clearfix">
	//             <li @click="showMsgList(true)">
	//                 <span :class="{'cur': isOrder}">订单邀请</span>
	//             </li>
	//             <li @click="showMsgList(false)">
	//                 <span :class="{'cur': !isOrder}">消息</span>
	//             </li>
	//         </ul>
	//         <div class="content showHeader showTab showFooter">
	//
	//             <div class="item order"
	//                  v-if="isOrder"
	//                  v-for="order in formData.order"
	//                  v-link="{name: 'userWorkAcceptDetail', query:{order_id:order.order_id} }"
	//             >
	//                 <div class="timeout" v-if="order.status == 3"></div>
	//                 <span class="tag">{{order.scene_name}}</span>
	//                 <header class="clearfix">
	//                     <div class="photoWrap">
	//                         <img :src="order.head_img_url">
	//                     </div>
	//                     <div class="textWrap">
	//                         <div class="header">
	//                             {{order.create_name}}
	//                             <span>{{order.create_time}}</span>
	//                         </div>
	//                         <div class="text">
	//                             {{order.detail}}
	//                         </div>
	//                     </div>
	//                 </header>
	//                 <footer>
	//                     <div class="unit">报酬：<span>{{order.unit}}</span></div>
	//                     <div class="time">时间：<span>{{order.start_time}}  {{order.end_time}}</span></div>
	//                     <div class="position">任务位置：<span>{{order.workplace}}</span></div>
	//                 </footer>
	//             </div>
	//
	//             <div class="item msg" v-if="!isOrder" v-for="msg in formData.msg" @click="goMsg(msg.type, msg.id)">
	//                 <div class="photoWrap">
	//                     <img :src="msg.head_img_url">
	//                 </div>
	//                 <div class="textWrap">
	//                     <div class="name" v-if="msg.type == 3">系统</div>
	//                     <div class="name" v-else>{{msg.nick_name}}</div>
	//                     <div class="text">{{msg.content}} </div>
	//                     <span class="time">{{msg.create_time}}</span>
	//                 </div>
	//             </div>
	//
	//         </div>
	//     </div>
	// </template>
	//
	//
	// <script>
	exports.default = {
	    data: function data() {
	        return {
	            title: '消息',
	            isOrder: true,
	            formData: {
	                order: {},
	                msg: {}
	            }
	        };
	    },
	
	    route: {
	        data: function data(transition) {
	            var self = this;
	            $.ajax({
	                url: "/soytime/msg/orderInviteList",
	                type: 'POST',
	                dataType: 'json',
	                success: function success(data) {
	                    self.formData.order = data.result;
	                }
	            });
	            $.ajax({
	                url: "/soytime/msg/list",
	                type: 'POST',
	                dataType: 'json',
	                success: function success(data) {
	                    self.formData.msg = data.result;
	                }
	            });
	        },
	        deactivate: function deactivate() {
	            this.isOrder = true;
	        }
	    },
	    ready: function ready() {
	        var self = this;
	    },
	
	    methods: {
	        showMsgList: function showMsgList(arg) {
	            this.isOrder = arg;
	        },
	        goMsg: function goMsg(type, id) {
	            var self = this;
	
	            switch (type) {
	                case 1:
	                    self.$route.router.go({ name: 'msgComment', query: { id: id } });
	                    break;
	                case 2:
	                    self.$route.router.go({ name: 'userWorkAcceptDetail', query: { order_id: id } });
	                    break;
	                case 3:
	                    self.$route.router.go({ name: 'msgSystem', query: { id: id } });
	                    break;
	            }
	        }
	    },
	    components: {
	        'headerBar': __webpack_require__(88)
	    }
	};
	// </script>
	//
	//
	//
	//
	//
	//
	//
	//

	/* generated by vue-loader */

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(89)
	__vue_script__ = __webpack_require__(91)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\header.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(96)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\personal\\vue-demo-webpack\\src\\components\\header.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 89 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 90 */,
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _defineProperty2 = __webpack_require__(92);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _replace$props$props$;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <style lang="less">
	//
	// </style>
	//
	// <template>
	//     <header class="bar bar-nav">
	//         <a class="icon icon-left pull-left" v-if="back" @click="goBack"></a>
	//         <h1 class="title">{{title}}</h1>
	//     </header>
	// </template>
	//
	// <script>
	exports.default = (_replace$props$props$ = {
	    replace: true,
	    props: {
	        title: {
	            type: String
	        },
	        back: {
	            type: Boolean
	        },
	        target: {
	            type: String
	        },
	        query: {
	            type: Object,
	            default: {}
	        }
	    }
	}, (0, _defineProperty3.default)(_replace$props$props$, 'props', ['title', 'back', 'target', 'query']), (0, _defineProperty3.default)(_replace$props$props$, 'methods', {
	    goBack: function goBack() {
	        var self = this;
	        if (self.target) {
	            self.$route.router.go({ 'name': self.target, query: self.query });
	        } else {
	            history.go(-1);
	        }
	    }
	}), _replace$props$props$);
	// </script>
	/* generated by vue-loader */

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(93);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	
	  return obj;
	};

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(94), __esModule: true };

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(95);
	var $Object = __webpack_require__(46).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(45);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(54), 'Object', {defineProperty: __webpack_require__(50).f});

/***/ },
/* 96 */
/***/ function(module, exports) {

	module.exports = "\n<header class=\"bar bar-nav\">\n    <a class=\"icon icon-left pull-left\" v-if=\"back\" @click=\"goBack\"></a>\n    <h1 class=\"title\">{{title}}</h1>\n</header>\n";

/***/ },
/* 97 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"page-msg\">\n    <header-bar :title=\"title\"></header-bar>\n    <ul class=\"scenefilter clearfix\">\n        <li @click=\"showMsgList(true)\">\n            <span :class=\"{'cur': isOrder}\">订单邀请</span>\n        </li>\n        <li @click=\"showMsgList(false)\">\n            <span :class=\"{'cur': !isOrder}\">消息</span>\n        </li>\n    </ul>\n    <div class=\"content showHeader showTab showFooter\">\n    \n        <div class=\"item order\"\n             v-if=\"isOrder\"\n             v-for=\"order in formData.order\"\n             v-link=\"{name: 'userWorkAcceptDetail', query:{order_id:order.order_id} }\"\n        >\n            <div class=\"timeout\" v-if=\"order.status == 3\"></div>\n            <span class=\"tag\">{{order.scene_name}}</span>\n            <header class=\"clearfix\">\n                <div class=\"photoWrap\">\n                    <img :src=\"order.head_img_url\">\n                </div>\n                <div class=\"textWrap\">\n                    <div class=\"header\">\n                        {{order.create_name}}\n                        <span>{{order.create_time}}</span>\n                    </div>\n                    <div class=\"text\">\n                        {{order.detail}}\n                    </div>\n                </div>\n            </header>\n            <footer>\n                <div class=\"unit\">报酬：<span>{{order.unit}}</span></div>\n                <div class=\"time\">时间：<span>{{order.start_time}}  {{order.end_time}}</span></div>\n                <div class=\"position\">任务位置：<span>{{order.workplace}}</span></div>\n            </footer>\n        </div>\n        \n        <div class=\"item msg\" v-if=\"!isOrder\" v-for=\"msg in formData.msg\" @click=\"goMsg(msg.type, msg.id)\">\n            <div class=\"photoWrap\">\n                <img :src=\"msg.head_img_url\">\n            </div>\n            <div class=\"textWrap\">\n                <div class=\"name\" v-if=\"msg.type == 3\">系统</div>\n                <div class=\"name\" v-else>{{msg.nick_name}}</div>\n                <div class=\"text\">{{msg.content}} </div>\n                <span class=\"time\">{{msg.create_time}}</span>\n            </div>\n        </div>\n        \n    </div>\n</div>\n";

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(99)
	__vue_script__ = __webpack_require__(101)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\views\\msg\\system.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(102)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\personal\\vue-demo-webpack\\src\\views\\msg\\system.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 99 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 100 */,
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	// <style lang="less">
	// @import '../../less/lib/mixins.less';
	// .page-msg-system{
	//     .systemTitle{
	//         .rem(font-size, 30);
	//         .rem(padding, 20, 20, 40);
	//         text-align:center;
	//     }
	//     .systemContent{
	//         .rem(font-size, 24);
	//         .rem(padding, 0, 20);
	//     }
	// }
	// </style>
	//
	// <template>
	//     <div class="page-msg-system" transition="page">
	//         <header-bar :title="title" :back="true"></header-bar>
	//         <div class="content showHeader">
	//
	//             <div class="systemTitle">阿斯顿发达</div>
	//             <div class="systemContent">adsfasdfa</div>
	//
	//         </div>
	//     </div>
	// </template>
	//
	//
	// <script>
	exports.default = {
	    data: function data() {
	        return {
	            title: '系统消息'
	        };
	    },
	
	    route: {
	        data: function data(transition) {
	            var self = this,
	                query = transition.to.query;
	
	            console.log(query);
	        }
	    },
	    ready: function ready() {},
	
	    methods: {},
	    components: {
	        'headerBar': __webpack_require__(88)
	    }
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 102 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"page-msg-system\" transition=\"page\">\n    <header-bar :title=\"title\" :back=\"true\"></header-bar>\n    <div class=\"content showHeader\">\n    \n        <div class=\"systemTitle\">阿斯顿发达</div>\n        <div class=\"systemContent\">adsfasdfa</div>\n      \n    </div>\n</div>\n";

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(104)
	__vue_script__ = __webpack_require__(106)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\views\\msg\\comment.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(107)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\personal\\vue-demo-webpack\\src\\views\\msg\\comment.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 104 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 105 */,
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <style lang="less">
	// @import '../../less/lib/mixins.less';
	// .page-msg-comment{
	//     .rem(font-size, 30);
	//     .userWrap{
	//         .photoWrap{
	//             margin:0 auto;
	//             .rem(margin-top, 20);
	//             .rem(width, 140);
	//             .rem(height, 140);
	//             .border-radius(140);
	//             img{
	//                 width:100%;
	//                 height:100%;
	//                 .border-radius(140);
	//             }
	//         }
	//         .name{
	//             text-align: center;
	//             .rem(margin, 20, 0);
	//         }
	//     }
	//
	//     .orderContent{
	//         .header{
	//             color:#b2b2b2;
	//         }
	//         .main{
	//             background: #fff;
	//             .rem(padding, 20);
	//             .border-radius(8);
	//         }
	//     }
	//
	//     .commentContent{
	//         position:relative;
	//         .rem(margin-top, 20);
	//         .typeWrap{
	//             position: absolute;
	//             top:0;
	//             left:0;
	//             .rem(width, 80);
	//             text-align:center;
	//             .ico{
	//                 .rem(font-size, 80);
	//             }
	//             .ico-xiaolian{
	//                 color:#eb503a;
	//             }
	//             .ico-cry{
	//                 color:#5e5e5e;
	//             }
	//             .ico-kulian{
	//                 color:#b2b2b2;
	//             }
	//         }
	//         .main{
	//             .rem(margin-left, 120);
	//             background: #fff;
	//             .rem(padding, 20);
	//             .border-radius(8);
	//             position: relative;
	//             border:1px solid #f4f4f4;
	//             .rem(border-width, 2);
	//             .arrow{
	//                 position: absolute;
	//                 .rem(top, 30);
	//                 .rem(left, -16);
	//                 .rem(height, 32);
	//                 .rem(width, 32);
	//                 border-left: 1px solid #f4f4f4;
	//                 border-bottom: 2px solid #f4f4f4;
	//                 .rem(border-left-width, 2);
	//                 .rem(border-bottom-width, 2);
	//                 display: inline-block;
	//                 transform: rotate(45deg);
	//                 -webkit-transform: rotate(45deg);
	//                 -moz-transform: rotate(45deg);
	//                 background: #fff;
	//             }
	//         }
	//     }
	//
	// }
	// </style>
	//
	// <template>
	//     <div class="page-msg-comment" transition="page">
	//         <header-bar :title="title" :back="true"></header-bar>
	//         <div class="content showHeader">
	//             <div class="userWrap">
	//                 <div class="photoWrap">
	//                     <img :src="formData.head_img_url">
	//                 </div>
	//                 <div class="name">{{formData.nick_name}}</div>
	//             </div>
	//             <div class="orderContent">
	//                 <div class="header">订单需求说明</div>
	//                 <div class="main">{{formData.order_content}}</div>
	//             </div>
	//             <div class="commentContent clearfix">
	//                 <div class="typeWrap">
	//                     <i class="ico {{typeCls[formData.type-1]}}"></i>
	//                     <div>{{typeTex[formData.type-1]}}</div>
	//                 </div>
	//                 <div class="main">
	//                     <i class="arrow"></i>
	//                     {{formData.content}}
	//                 </div>
	//             </div>
	//         </div>
	//         <span
	//             class="ui-btn ui-btn-big"
	//         >
	//             互评
	//         </span>
	//     </div>
	// </template>
	//
	//
	// <script>
	exports.default = {
	    data: function data() {
	        return {
	            title: '收到的评论',
	            formData: {},
	            typeTex: ['好评', '中评', '差评'],
	            typeCls: ['ico-xiaolian', 'ico-cry', 'ico-kulian']
	        };
	    },
	
	    route: {
	        data: function data(transition) {
	            var self = this,
	                query = transition.to.query;
	
	            $.extend(self.formData, query);
	
	            $.ajax({
	                url: "/soytime/msg/appraiseDetail",
	                type: 'POST',
	                dataType: 'json',
	                success: function success(data) {
	                    self.formData = data.result;
	                }
	            });
	        }
	    },
	    ready: function ready() {},
	
	    methods: {},
	    components: {
	        'headerBar': __webpack_require__(88)
	    }
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 107 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"page-msg-comment\" transition=\"page\">\n    <header-bar :title=\"title\" :back=\"true\"></header-bar>\n    <div class=\"content showHeader\">\n        <div class=\"userWrap\">\n            <div class=\"photoWrap\">\n                <img :src=\"formData.head_img_url\">\n            </div>\n            <div class=\"name\">{{formData.nick_name}}</div>\n        </div>\n        <div class=\"orderContent\">\n            <div class=\"header\">订单需求说明</div>\n            <div class=\"main\">{{formData.order_content}}</div>\n        </div>\n        <div class=\"commentContent clearfix\">\n            <div class=\"typeWrap\">\n                <i class=\"ico {{typeCls[formData.type-1]}}\"></i>\n                <div>{{typeTex[formData.type-1]}}</div>\n            </div>\n            <div class=\"main\">\n                <i class=\"arrow\"></i>\n                {{formData.content}}\n            </div>\n        </div>\n    </div>\n    <span\n        class=\"ui-btn ui-btn-big\"\n    >\n        互评\n    </span>\n</div>\n";

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(109)
	__vue_script__ = __webpack_require__(111)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\views\\msg\\message.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(112)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\personal\\vue-demo-webpack\\src\\views\\msg\\message.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 109 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 110 */,
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <style lang="less">
	// @import '../../less/lib/mixins.less';
	// .page-msg-message{
	//     .time{
	//         text-align:center;
	//         span{
	//             background:#b2b2b2;
	//             color:#fff;
	//             .border-radius(8);
	//             .rem(padding, 2, 10);
	//             .rem(font-size, 20);
	//         }
	//     }
	//     .main{
	//         position:relative;
	//         .rem(padding, 0, 120);
	//         .textWrap{
	//             float:left;
	//             .rem(font-size, 24);
	//             .text{
	//                 background:#fff;
	//                 position:relative;
	//                 .border-radius(8);
	//                 .rem(padding, 4, 10);
	//
	//                 i{
	//                     position:absolute;
	//                     .rem(top, 10);
	//                     .rem(left, -20);
	//                     .arrow(#fff, left, 10);
	//                 }
	//             }
	//         }
	//         &.isMe{
	//             .photoWrap{
	//                 left:auto;
	//                 right:0;
	//             }
	//             .textWrap{
	//                 float:right;
	//                 .name{
	//                     text-align:right;
	//                 }
	//                 i{
	//                     position:absolute;
	//                     left:auto;
	//                     .rem(top, 10);
	//                     .rem(right, -20);
	//                     .arrow(#fff, right, 10);
	//                 }
	//             }
	//         }
	//     }
	//         .photoWrap{
	//             position:absolute;
	//             top:0;
	//             left:0;
	//             .rem(width, 90);
	//             .rem(height, 90);
	//             .border-radius(90);
	//             img{
	//                 width:100%;
	//                 height:100%;
	//                 .border-radius(120);
	//             }
	//         }
	//
	//     .formWrap{
	//         background:#fff;
	//         height: 2.4rem;
	//         line-height: 2.4rem;
	//         position:absolute;
	//         bottom:0;
	//         left:0;
	//         width:100%;
	//         .rem(padding, 0, 20);
	//         .rem(font-size, 24);
	//
	//         input{
	//             border:1px solid #ddd;
	//             .border-radius(8);
	//             .rem(border-width, 2);
	//             .rem(height, 60);
	//             .rem(line-height, 60);
	//             .rem(padding, 0, 10);
	//             width: 80%;
	//         }
	//
	//         span{
	//             display:inline-block;
	//             width: 18%;
	//             text-align:center;
	//             background:#ff946e;
	//             color:#fff;
	//             .rem(height, 60);
	//             .rem(line-height, 60);
	//             .border-radius(8);
	//         }
	//     }
	// }
	// </style>
	//
	// <template>
	//     <div class="page-msg-message" transition="page">
	//         <header-bar :title="title" :back="true"></header-bar>
	//         <div class="content showHeader showFooter">
	//
	//             <div class="item clearfix" v-for="item in formData">
	//                 <div class="time" v-if="item.create_time"><span>{{item.create_time}}</span></div>
	//                 <div class="main" :class="{isMe: item.isMe == 1}">
	//                     <div class="photoWrap">
	//                         <img :src="item.head_img_url">
	//                     </div>
	//                     <div class="textWrap">
	//                         <div class="name">{{item.nick_name}}</div>
	//                         <div class="text">
	//                             {{item.content}}
	//                             <i></i>
	//                         </div>
	//                     </div>
	//                 </div>
	//             </div>
	//
	//         </div>
	//         <div class="formWrap">
	//             <input v-model="content" placeholder="留言或回复内容"/>
	//             <span @click="send">发送</span>
	//         </div>
	//     </div>
	// </template>
	//
	//
	// <script>
	exports.default = {
	    data: function data() {
	        return {
	            title: '留言',
	            id: null,
	            formData: []
	        };
	    },
	
	    route: {
	        data: function data(transition) {
	            var self = this,
	                query = transition.to.query;
	
	            self.id = query.id;
	
	            $.ajax({
	                url: "/soytime/msg/msnList",
	                type: 'POST',
	                dataType: 'json',
	                success: function success(data) {
	                    self.formData = data.result;
	                }
	            });
	        }
	    },
	    ready: function ready() {},
	
	    methods: {
	        send: function send() {
	            var self = this;
	            $.ajax({
	                url: "/soytime/msg/msnList",
	                type: 'POST',
	                data: {
	                    id: self.id,
	                    content: self.content
	                },
	                dataType: 'json',
	                success: function success(data) {
	                    self.formData.push(data.result);
	                }
	            });
	        }
	    },
	    components: {
	        'headerBar': __webpack_require__(88)
	    }
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 112 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"page-msg-message\" transition=\"page\">\n    <header-bar :title=\"title\" :back=\"true\"></header-bar>\n    <div class=\"content showHeader showFooter\">\n    \n        <div class=\"item clearfix\" v-for=\"item in formData\">\n            <div class=\"time\" v-if=\"item.create_time\"><span>{{item.create_time}}</span></div>\n            <div class=\"main\" :class=\"{isMe: item.isMe == 1}\">\n                <div class=\"photoWrap\">\n                    <img :src=\"item.head_img_url\">\n                </div>\n                <div class=\"textWrap\">\n                    <div class=\"name\">{{item.nick_name}}</div>\n                    <div class=\"text\">\n                        {{item.content}}\n                        <i></i>\n                    </div>\n                </div>\n            </div>\n        </div>\n      \n    </div>\n    <div class=\"formWrap\">\n        <input v-model=\"content\" placeholder=\"留言或回复内容\"/>\n        <span @click=\"send\">发送</span>\n    </div>\n</div>\n";

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(114)
	__vue_script__ = __webpack_require__(116)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\views\\msg\\order.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(117)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\personal\\vue-demo-webpack\\src\\views\\msg\\order.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 114 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 115 */,
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <style lang="less">
	// @import '../../less/lib/mixins.less';
	// .page-msg{
	//
	// }
	// </style>
	//
	// <template>
	//     <div class="page-msg-me" transition="page">
	//         <header-bar :title="title" :back="true"></header-bar>
	//         <div class="content showHeader">
	//
	//             阿斯顿发达
	//
	//         </div>
	//     </div>
	// </template>
	//
	//
	// <script>
	exports.default = {
	    data: function data() {
	        return {
	            title: '约单详情'
	        };
	    },
	
	    route: {
	        data: function data(transition) {}
	    },
	    ready: function ready() {},
	
	    methods: {},
	    components: {
	        'headerBar': __webpack_require__(88)
	    }
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 117 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"page-msg-me\" transition=\"page\">\n    <header-bar :title=\"title\" :back=\"true\"></header-bar>\n    <div class=\"content showHeader\">\n    \n        阿斯顿发达\n      \n    </div>\n</div>\n";

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(119)
	__vue_script__ = __webpack_require__(121)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\views\\scene.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(127)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\personal\\vue-demo-webpack\\src\\views\\scene.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 119 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 120 */,
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <style lang="less">
	// @import '../less/lib/mixins.less';
	// .page-scene{
	//
	//     .scenefilter{
	//         position: absolute;
	//         left: 0;
	//         top: 2.2rem;
	//         z-index: 10;
	//         height: 2.2rem;
	//         background:#fff;
	//         width:100%;
	//         border-bottom:2px solid #b2b2b2;
	//         .rem(border-bottom-width, 2);
	//
	//         li{
	//             width:33.333%;
	//             float:left;
	//             text-align:center;
	//             line-height:1.4rem;
	//             margin:0.4rem 0;
	//             .rem(font-size, 30);
	//             &:first-child{
	//                  border-right:2px solid #b2b2b2;
	//                 .rem(border-right-width, 2);
	//             }
	//             &:last-child{
	//                  border-left:2px solid #b2b2b2;
	//                 .rem(border-left-width, 2);
	//             }
	//             .icon{
	//                 .rem(margin-left, 10);
	//             }
	//         }
	//     }
	//
	//     .scenefilterList{
	//         position:absolute;
	//         top:4.4rem;
	//         z-index: 11;
	//         height:100%;
	//         width:100%;
	//
	//         .content{
	//             width:100%;
	//             height:100%;
	//             padding-bottom:4.4rem;
	//             background:#fff;
	//         }
	//     }
	//
	//     .item{
	//         background:#fff;
	//         .border-radius(8);
	//         .rem(margin-bottom, 20);
	//
	//         header{
	//             border-bottom:2px solid #dedede;
	//             .rem(border-bottom-width, 2);
	//             .rem(padding, 20);
	//             .rem(font-size, 30);
	//
	//             .photoWrap{
	//                 .rem(margin-right, 20);
	//                 .rem(width, 90);
	//                 .rem(height, 90);
	//                 .border-radius(90);
	//                 img{
	//                     width:100%;
	//                     height:100%;
	//                     .border-radius(120);
	//                 }
	//             }
	//
	//             .school{
	//                 .rem(font-size, 24);
	//                 color:#5e5e5e;
	//             }
	//
	//             .pull-right{
	//                 .rem(margin-top, 30);
	//             }
	//         }
	//
	//         .main{
	//             .rem(padding, 20);
	//
	//             .text{
	//                 .rem(font-size, 30);
	//                 color:#5e5e5e;
	//             }
	//
	//             .img{
	//                 width:30%;
	//                 float:left;
	//
	//                 &:nth-child(2){
	//                     margin:0 5%;   
	//                 }
	//
	//                 img{
	//                     width:100%;
	//                 }
	//             }
	//         }
	//
	//         .userScore{
	//             border-top:2px solid #dedede;
	//             .rem(border-top-width, 2);
	//             .rem(font-size, 24);
	//             color:#8e8e8e;
	//             li{
	//                width:33.33%;
	//                float:left;
	//                text-align:center;
	//                .rem(padding, 10, 0);
	//             }
	//                 em{
	//                     font-style:normal;
	//                     display:inline-block;
	//                     .rem(padding, 0, 5);
	//                 }
	//         }
	//     }
	// }
	//
	// </style>
	//
	// <template>
	//     <div transition="page" class="page-scene page-current pullRreshwrap">
	//         <header-bar :title="title" :back="true" target="home"></header-bar>
	//         <ul class="scenefilter clearfix">
	//             <li @click="filterSchool">
	//                 <span>学校<i class="icon icon-down" :class="{'icon-up':filterType == 1}"></i></span>
	//             </li>
	//             <li @click="filterSex">
	//                 <span>性别<i class="icon icon-down" :class="{'icon-up':filterType == 2}"></i></span>
	//             </li>
	//             <li @click="filterSort">
	//                 <span>排序<i class="icon icon-down" :class="{'icon-up':filterType == 3}"></i></span>
	//             </li>
	//         </ul>
	//         <div class="content showHeader showTab showFooter">
	//             <pull-refresh @on-scroll-lodding="getData">
	//                 <div class="item" v-for="item in dataList">
	//                     <header class="clearfix" v-link="{name: 'sceneDetail', query: {'user_id': item.user_id, 'scene_name': formData.scene_name, 'scene_id': formData.scene_id}}">
	//                         <div class="pull-left photoWrap">
	//                             <img :src="item.head_img_url">
	//                         </div>
	//                         <div class="pull-left nameWrap">
	//                             <div class="name">
	//                                 <i class="icon"
	//                                     :class="{'icon-xingbienan2': item.sex == 1, 'icon-xingbienv2': item.sex == 2}"
	//                                 ></i>
	//                                 {{item.nickname}}
	//                             </div>
	//                             <div class="school clearfix">
	//                                 {{item.school_name}}
	//                             </div>
	//                         </div>
	//                         <i class="icon icon-jiantouyou pull-right"></i>
	//                     </header>
	//                     <div class="main">
	//                         <div class="text">{{item.detail}}</div>
	//                         <div class="imgWrap clearfix">
	//                             <div class="img" v-for="subItem in item.skillImgs">
	//                                 <img :src="subItem.img_url">
	//                             </div>
	//                         </div>
	//                     </div>
	//                     <ul class="userScore clearfix">
	//                         <li>
	//                             <i class="icon icon-aixin-copy"></i>
	//                             <em>{{item.collectCount}}</em>
	//                         </li>
	//                         <li>
	//                             <i class="icon icon-liuyan"></i>
	//                             <em>{{item.appraiseCount}}</em>
	//                         </li>
	//                         <li>
	//                             <i class="icon icon-yanjing"></i>
	//                             <em>{{item.viewCount}}</em>
	//                         </li>
	//                     </ul>
	//                 </div>
	//             </pull-refresh>
	//         </div>
	//         <span
	//             class="ui-btn ui-btn-big"
	//             v-link="{name:'sceneOneKeyOrder', query:formData}"
	//         >
	//             一键预约
	//         </span>
	//     </div>
	// </template>
	//
	// <script>
	exports.default = {
	    data: function data() {
	        return {
	            title: null,
	            filterType: 0,
	            isShowFilter: false,
	            dataList: [],
	            formData: {
	                scene_name: '',
	                scene_id: '',
	                currentPage: 1,
	                school_id: '',
	                sex: '',
	                sort: '',
	                form: 'scene'
	            }
	        };
	    },
	
	    route: {
	        data: function data(transition) {
	            var self = this,
	                query = transition.to.query;
	
	            $.extend(self.formData, query);
	
	            self.title = query.scene_name;
	        },
	        deactivate: function deactivate() {
	            var self = this;
	            self.formData.currentPage = 1;
	        }
	    },
	    methods: {
	        showFilter: function showFilter(type) {
	            var self = this;
	            self.filterType = type;
	            self.isShowFilter = true;
	        },
	        filterSort: function filterSort() {
	            var self = this;
	            self.$route.router.go({ 'name': 'selectSort', query: self.formData });
	        },
	        filterSchool: function filterSchool() {
	            var self = this;
	            self.$route.router.go({ 'name': 'selectSchool', query: self.formData });
	        },
	        filterSex: function filterSex() {
	            var self = this;
	            self.$route.router.go({ 'name': 'selectSex', query: self.formData });
	        },
	        getData: function getData(index, callback) {
	            var self = this;
	            self.formData.currentPage = index;
	            $.ajax({
	                url: "/soytime/server/list",
	                type: 'POST',
	                data: self.formData,
	                dataType: 'json',
	                success: function success(data) {
	                    var arr = data.result,
	                        len = arr.length;
	                    for (var i = 0; i < len; i++) {
	                        self.dataList.push(arr[i]);
	                    }
	                    callback && callback();
	                }
	            });
	        }
	    },
	    components: {
	        'headerBar': __webpack_require__(88),
	        'pullRefresh': __webpack_require__(122)
	    }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(123)
	__vue_script__ = __webpack_require__(125)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\pullRefresh.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(126)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\personal\\vue-demo-webpack\\src\\components\\pullRefresh.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 123 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 124 */,
/* 125 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <div class="pull-refresh">
	//         <slot></slot>
	//     </div>
	//     <div class="pull-lodding" v-if="scroll && index"></div>
	// </template>
	//
	// <script>
	exports.default = {
	    props: {
	        index: {
	            type: Number,
	            default: 1
	        },
	        callback: {
	            type: Function
	        }
	    },
	    data: function data() {
	        return {
	            scroll: true
	        };
	    },
	    ready: function ready() {
	        var self = this;
	        self.load();
	        document.addEventListener("scroll", function () {
	            self.getScrollData();
	        });
	        //            document.addEventListener("touchmove", function(){
	        //                self.getScrollData();
	        //            });
	    },
	
	    methods: {
	        getScrollData: function getScrollData() {
	            var self = this,
	                docH = parseFloat($(document).height()),
	                winH = parseFloat($(window).height()),
	                winT = parseFloat($(window).scrollTop());
	
	            //console.log( docH, winH, winT )
	
	            if (docH <= winH + winT) {
	                if (!self.scroll) return;
	                self.scroll = false;
	                self.index++;
	                self.load();
	            }
	        },
	        load: function load() {
	            var self = this;
	            self.$dispatch('on-scroll-lodding', self.index, function () {
	                self.scroll = true;
	            });
	        }
	    }
	};
	// </script>
	//
	// <style lang="less">
	//     .pullRreshwrap{
	//         position: relative !important;
	//         .content{
	//             position: relative !important;
	//         }
	//         .bar{
	//             position: fixed;
	//         }
	//         .filter{
	//             position: fixed !important;
	//         }
	//         .scenefilter{
	//             position: fixed;
	//         }
	//         .content{
	//             position:relative;
	//         }
	//         .ui-btn-big{
	//             position: fixed;
	//         }
	//     }
	//     .pull-lodding{
	//         width: 1rem;
	//         height: 1rem;
	//         -webkit-transform-origin: 50%;
	//         transform-origin: 50%;
	//         -webkit-animation: preloader-spin 1s steps(12, end) infinite;
	//         animation: preloader-spin 1s steps(12, end) infinite;
	//         text-align:center;
	//         margin:0 auto;
	//
	//         &:after {
	//             display: block;
	//             content: "";
	//             width: 100%;
	//             height: 100%;
	//             background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%236c6c6c'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
	//             background-position: 50%;
	//             background-size: 100%;
	//             background-repeat: no-repeat;
	//         }
	//     }
	//     @-webkit-keyframes preloader-spin {
	//         100% {
	//             -webkit-transform: rotate(360deg);
	//         }
	//     }
	//     @keyframes preloader-spin {
	//         100% {
	//             -webkit-transform: rotate(360deg);
	//             transform: rotate(360deg);
	//         }
	//     }
	// </style>

	/* generated by vue-loader */

/***/ },
/* 126 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"pull-refresh\">\n    <slot></slot>\n</div>\n<div class=\"pull-lodding\" v-if=\"scroll && index\"></div>\n";

/***/ },
/* 127 */
/***/ function(module, exports) {

	module.exports = "\n<div transition=\"page\" class=\"page-scene page-current pullRreshwrap\">\n    <header-bar :title=\"title\" :back=\"true\" target=\"home\"></header-bar>\n    <ul class=\"scenefilter clearfix\">\n        <li @click=\"filterSchool\">\n            <span>学校<i class=\"icon icon-down\" :class=\"{'icon-up':filterType == 1}\"></i></span>\n        </li>\n        <li @click=\"filterSex\">\n            <span>性别<i class=\"icon icon-down\" :class=\"{'icon-up':filterType == 2}\"></i></span>\n        </li>\n        <li @click=\"filterSort\">\n            <span>排序<i class=\"icon icon-down\" :class=\"{'icon-up':filterType == 3}\"></i></span>\n        </li>\n    </ul>\n    <div class=\"content showHeader showTab showFooter\">\n        <pull-refresh @on-scroll-lodding=\"getData\">\n            <div class=\"item\" v-for=\"item in dataList\">\n                <header class=\"clearfix\" v-link=\"{name: 'sceneDetail', query: {'user_id': item.user_id, 'scene_name': formData.scene_name, 'scene_id': formData.scene_id}}\">\n                    <div class=\"pull-left photoWrap\">\n                        <img :src=\"item.head_img_url\">\n                    </div>\n                    <div class=\"pull-left nameWrap\">\n                        <div class=\"name\">\n                            <i class=\"icon\"\n                                :class=\"{'icon-xingbienan2': item.sex == 1, 'icon-xingbienv2': item.sex == 2}\"\n                            ></i>\n                            {{item.nickname}}\n                        </div>\n                        <div class=\"school clearfix\">\n                            {{item.school_name}}\n                        </div>\n                    </div>\n                    <i class=\"icon icon-jiantouyou pull-right\"></i>\n                </header>\n                <div class=\"main\">\n                    <div class=\"text\">{{item.detail}}</div>\n                    <div class=\"imgWrap clearfix\">\n                        <div class=\"img\" v-for=\"subItem in item.skillImgs\">\n                            <img :src=\"subItem.img_url\">\n                        </div>\n                    </div>\n                </div>\n                <ul class=\"userScore clearfix\">\n                    <li>\n                        <i class=\"icon icon-aixin-copy\"></i>\n                        <em>{{item.collectCount}}</em>\n                    </li>\n                    <li>\n                        <i class=\"icon icon-liuyan\"></i>\n                        <em>{{item.appraiseCount}}</em>\n                    </li>\n                    <li>\n                        <i class=\"icon icon-yanjing\"></i>\n                        <em>{{item.viewCount}}</em>\n                    </li>\n                </ul>\n            </div>\n        </pull-refresh>\n    </div>\n    <span \n        class=\"ui-btn ui-btn-big\"\n        v-link=\"{name:'sceneOneKeyOrder', query:formData}\"\n    >\n        一键预约\n    </span>\n</div>\n";

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(129)
	__vue_script__ = __webpack_require__(131)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\views\\scene\\detail.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(139)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\personal\\vue-demo-webpack\\src\\views\\scene\\detail.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 129 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 130 */,
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <style lang="less">
	// @import '../../less/lib/mixins.less';
	// .page-scene-detail{
	//     .content {
	//         padding-left: 0;
	//         padding-right: 0;
	//     }
	//
	//         .userContent{
	//             padding-left: 0.65rem;
	//             padding-right: 0.65rem;
	//         }
	//
	//             .userHeader{
	//                 .rem(height, 350);
	//                 overflow:hidden;
	//                 position:relative;
	//                 z-index:1;
	//
	//                 img{
	//                     height:100%;
	//                 }
	//
	//                 .userWrap{
	//                     position:absolute;
	//                     left:0;
	//                     width:100%;
	//                     .rem(top, 70);
	//
	//                     .name{
	//                         text-align:center;
	//                         .rem(font-size, 60);
	//                         color:#fff;
	//                     }
	//
	//                     .btn{
	//                         .rem(width, 150);
	//                         .rem(height, 150);
	//
	//                         margin:0 auto;
	//                         position:relative;
	//
	//                         .radius{
	//                             width:100%;
	//                             height:100%;
	//                             background:#fff;
	//                             position:absolute;
	//                             overflow:hidden;
	//                             border:1px solid #fff;
	//                             .border-radius(150);
	//                             .rem(border-width, 10);
	//                             img{
	//                                 .border-radius(150);
	//                             }
	//                         }
	//
	//                     }
	//                 }
	//
	//                 .collection{
	//                     position:absolute;
	//                     .rem(right, 20);
	//                     .rem(top, 20);
	//                     i{
	//                         display:inline-block;
	//                         float:left;
	//                         color:#ff946e;
	//                         .rem(font-size, 38);
	//                         .rem(height, 38);
	//                         .rem(line-height, 38);
	//                         .rem(padding-right, 10)
	//                     }
	//                     span{
	//                         display:inline-block;
	//                         float:left;
	//                         background:#000;
	//                         .opacity(0.5);
	//                         .border-radius(8);
	//                         .rem(padding, 0, 10);
	//                         .rem(font-size, 24);
	//                         .rem(height, 38);
	//                         .rem(line-height, 38);
	//                         color:#fff;
	//                     }
	//                 }
	//             }
	//
	//             .userInfo{
	//                 position:relative;
	//                 text-align:center;
	//                 z-index:2;
	//                 .rem(margin-top, -25);
	//                 .school{
	//                     position:relative;
	//                     display:inline-block;
	//                     background:#fff;
	//                     border:1px solid #dedede;
	//                     .rem(border-width, 2);
	//                     .rem(padding, 0, 50);
	//                     .rem(height, 50);
	//                     .rem(line-height, 50);
	//                     .border-radius(50);
	//                     .box-shadow(0, 0, 0.2rem, #ddd);
	//                     .rem(font-size, 30);
	//
	//                     .ico-renzheng{
	//                         color:#11cd6e;
	//                         transform: rotate(-30deg);
	//                         -webkit-transform: rotate(-30deg);
	//                         position:absolute;
	//                         .rem(font-size, 60);
	//                         .rem(left, -20);
	//                         .rem(top, -20);
	//                     }
	//                 }
	//                 .workplace{
	//                     .rem(font-size, 30);
	//                     .rem(height, 64);
	//                     .rem(line-height, 64);
	//                 }
	//             }
	//
	//             .userService{
	//                 border:1px solid #dedede;
	//                 .rem(font-size, 30);
	//                 .rem(height, 80);
	//                 .rem(line-height, 80);
	//                 .rem(border-width, 2);
	//                 .rem(margin-bottom, 20);
	//                 border-left: 0 none;
	//                 border-right: 0 none;
	//
	//                 i{
	//                     float:left;
	//                     font-style:normal;
	//                 }
	//                 span{
	//                     float:left;
	//                     color:#b2b2b2;
	//                     .rem(margin, 0, 10, 0, 0);
	//                 }
	//             }
	//
	//             .block{
	//                 background:#fff;
	//                 border:1px solid #dedede;
	//                 .rem(border-width, 2);
	//                 .border-radius(8);
	//                 .rem(padding, 0, 30, 20, 30);
	//                 .rem(margin-bottom, 20);
	//                 header{
	//                     border-bottom:1px solid #dedede;
	//                     .rem(border-bottom-width, 2);
	//                     .rem(height, 65);
	//                     .rem(line-height, 65);
	//                     .rem(font-size, 30);
	//                 }
	//                 .main{
	//                     .rem(font-size, 24);
	//                     .rem(padding-top, 10);
	//                     table{
	//                         margin-top:0;
	//                     }
	//                     .appraiseContent{
	//                         .rem(padding-bottom, 10);
	//                     }
	//                     .appraiseCount{
	//                         text-align:center;
	//
	//                         .ui-floatCenter{
	//                             .rem(height, 90);
	//                         }
	//                             .user{
	//                                 .img{
	//                                     .rem(width, 70);
	//                                     .rem(height, 70);
	//                                     .border-radius(70);
	//                                     img{
	//                                         .border-radius(70);
	//                                         width:100%;
	//                                     }
	//                                 }
	//                                 .nameWrap{
	//                                     .time{
	//                                         .rem(font-size, 20);
	//                                         color:#b2b2b2;
	//                                     }
	//                                 }
	//                             }
	//
	//                         .btn{
	//                             display:inline-block;
	//                             background:#ff946e;
	//                             color:#fff;
	//                             .rem(padding, 0, 20);
	//                             .rem(height, 50);
	//                             .rem(line-height, 50);
	//                             .border-radius(50);
	//                         }
	//                     }
	//                 }
	//             }
	// }
	//
	// </style>
	//
	// <template>
	//     <div class="page-scene-detail page-current">
	//         <header-bar :title="title" :back="true"></header-bar>
	//         <div class="content showHeaderNopading showFooter">
	//             <div class="userHeader">
	//                 <img src="/dist/defaultImg/serverDefault.jpg" v-if="!formData.photo_url" />
	//                 <img :src="formData.photo_url" v-else />
	//                 <div class="userWrap">
	//                     <div class="btn">
	//                         <div class="radius" v-if="!formData.photo_url">
	//                             <img :src="formData.head_img_url" />
	//                         </div>
	//                     </div>
	//                     <div class="name">{{formData.usernick}}</div>
	//                 </div>
	//                 <div class="collection clearfix">
	//                     <i class="ico ico-aixin"></i>
	//                     <span>5人已收藏</span>
	//                 </div>
	//             </div>
	//
	//             <div class="userContent">
	//                 <div class="userInfo">
	//                     <span class="school">
	//                         <i class="ico ico-renzheng"></i>
	//                         {{formData.school_name}}
	//                     </span>
	//                     <div class="workplace">{{formData.workplace}} 周边</div>
	//                 </div>
	//
	//                 <div class="userService clearfix">
	//                     <i>我的服务：</i>
	//                     <span v-for="item in sceneList" v-if="item | sceneCur sceneArr">{{item.scene_name}}</span>
	//                 </div>
	//
	//                 <div class="block">
	//                     <header>介绍服务</header>
	//                     <div class="main">
	//                         {{formData.detail}}
	//                     </div>
	//                 </div>
	//
	//                 <div class="block">
	//                     <header>工作时间</header>
	//                     <div class="main">
	//                         <time-conf :timer="formData.timeConf" :is-radio="true"></time-conf>
	//                     </div>
	//                 </div>
	//
	//                 <div class="block" v-if="formData.orderAppraise">
	//                     <header>客户评价</header>
	//                     <div class="main">
	//                         <div class="appraiseContent">
	//                             {{formData.orderAppraise.content}}
	//                         </div>
	//                         <div class="appraiseCount">
	//                             <div class="ui-floatCenter">
	//                                 <div class="user ui-sl-floatCenter clearfix">
	//                                     <div class="img ui-floatCenter-item">
	//                                         <img :src="formData.orderAppraise.head_img_url" />
	//                                     </div>
	//                                     <div class="nameWrap ui-floatCenter-item">
	//                                         <div class="name">{{formData.orderAppraise.from_name}}</div>
	//                                         <div class="time">{{formData.orderAppraise.create_time}}</div>
	//                                     </div>
	//                                 </div>
	//                             </div>
	//                             <span class="btn" v-link="{ name: 'sceneAppraise', query:{user_id: formData.user_id} }">
	//                                 查看{{formData.orderAppraise.appraise_count}}条评价
	//                             </span>
	//                         </div>
	//                     </div>
	//                 </div>
	//             </div>
	//
	//         </div>
	//         <span
	//             class="ui-btn ui-btn-big"
	//             v-link="{ name: 'sceneInviteOrder', query:query}"
	//         >
	//             约TA
	//         </span>
	//     </div>
	// </template>
	//
	// <script>
	exports.default = {
	    data: function data() {
	        return {
	            title: null,
	            formData: {},
	            sceneArr: [],
	            sceneList: indexData.sceneList,
	            query: {}
	        };
	    },
	
	    route: {
	        data: function data(transition) {
	            var self = this,
	                query = transition.to.query;
	
	            $.ajax({
	                url: '/soytime/server/stuInfo',
	                type: 'POST',
	                data: 'scene_id' + query.scene_id + "&user_id=" + query.user_id,
	                dataType: 'json',
	                success: function success(data) {
	                    self.formData = data.result;
	                    self.title = data.result.usernick;
	                    self.sceneArr = data.result.sceneIds.split('-');
	                    self.query = {
	                        scene_name: query.scene_name,
	                        photo_url: data.result.photo_url,
	                        head_img_url: data.result.head_img_url,
	                        usernick: data.result.usernick
	                    };
	                }
	            });
	        }
	    },
	    ready: function ready() {},
	    components: {
	        'headerBar': __webpack_require__(88),
	        'timeConf': __webpack_require__(132)
	    }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(133)
	__vue_script__ = __webpack_require__(136)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\timeConf.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(138)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\personal\\vue-demo-webpack\\src\\components\\timeConf.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 133 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 134 */,
/* 135 */,
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _utils = __webpack_require__(137);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    replace: true,
	    props: ['timer', 'isRadio'],
	    data: function data() {
	        return {
	            timerArr: []
	        };
	    },
	
	    // ready(){
	    //     let self = this;
	
	    //     self.$nextTick(function () {
	    //         if( !self.timer ) return;
	    //         self.timerArr = self.timer.split('-');
	    //     })
	    // },
	    watch: {
	        timer: function timer() {
	            var self = this;
	            self.timerArr = self.timer.split('-');
	        }
	    },
	    methods: {
	        setAccount: function setAccount(id) {
	            var self = this;
	            if (!self.isRadio) {
	                if (_utils2.default.indexOf(self.timerArr, id) > -1) {
	                    self.timerArr = _utils2.default.remove(self.timerArr, id);
	                } else {
	                    self.timerArr.push(id);
	                }
	                self.timer = self.timerArr.join('-');
	            }
	        }
	    }
	};
	// </script>
	/* generated by vue-loader */
	// <style lang="less">
	//     @import '../less/lib/mixins.less';
	//     .timeConf{
	//         table{
	//             width:100%;
	//             .rem(margin-top, 20);
	//             .rem(font-size, 24);
	//             td{
	//                 text-align:center;
	//                 border:1px solid #b2b2b2;
	//                 .rem(border-width, 2);
	//                 .rem(padding, 6);
	//                 .iconWrap{
	//                     .rem(height, 34);
	//                     .rem(width, 38);
	//                 }
	//                 .icon-xuanzhong{
	//                     background:url(../img/xuanzhong.svg) no-repeat;
	//                     .rem(background-size, 38, 34);
	//                     .rem(height, 34);
	//                     .rem(width, 38);
	//                 }
	//             }
	//         }
	//     }
	// </style>
	//
	// <template>
	//     <div class="timeConf">
	//         <table>
	//             <tr>
	//                 <td>星期</td>
	//                 <td>一</td>
	//                 <td>二</td>
	//                 <td>三</td>
	//                 <td>四</td>
	//                 <td>五</td>
	//                 <td>六</td>
	//                 <td>日</td>
	//             </tr>
	//             <tr v-for="item of 3">
	//                 <td v-for="subItem of 8" @click="setAccount( subItem +''+ (item+1) )">
	//                     <span v-if="item == 0 && subItem == 0">上午</span>
	//                     <span v-if="item == 1 && subItem == 0">下午</span>
	//                     <span v-if="item == 2 && subItem == 0">晚上</span>
	//                     <span class="icon iconWrap" v-if="subItem != 0">
	//                         <i class="icon icon-xuanzhong" v-if="item | timerCur subItem timerArr"></i>
	//                     </span>
	//                 </td>
	//             </tr>
	//         </table>
	//     </div>
	// </template>
	//
	// <script>

/***/ },
/* 137 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    checkEmail: function checkEmail(val) {
	        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	        if (filter.test(val)) {
	            return true;
	        } else {
	            return false;
	        }
	    },
	    checkPhone: function checkPhone(val) {
	        var filter = /^1\d{10}$/;
	
	        if (filter.test(val)) {
	            return true;
	        } else {
	            return false;
	        }
	    },
	    fmtDate: function fmtDate(date, fmt) {
	        var o = {
	            "M+": date.getMonth() + 1, //月份
	            "d+": date.getDate(), //日
	            "h+": date.getHours(), //小时
	            "m+": date.getMinutes(), //分
	            "s+": date.getSeconds(), //秒
	            "q+": Math.floor((date.getMonth() + 3) / 3), //季度
	            "S": date.getMilliseconds() //毫秒
	        };
	        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
	        for (var k in o) {
	            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
	        }return fmt;
	    },
	    millisecondToDate: function millisecondToDate() {
	        var time = parseFloat(msd) / 1000;
	        var str = "";
	        if (null != time && "" != time) {
	
	            if (time > 60 && time < 3600) {
	                str = parseInt(time / 60.0) + " 分钟前";
	            } else if (time >= 3600 && time < 86400) {
	                str = parseInt(time / 3600.0) + " 小时前";
	            } else if (time >= 86400 && time < 86400 * 30) {
	                str = parseInt(time / 86400.0) + " 天前";
	            } else if (time >= 86400 * 30 && time < 86400 * 365) {
	                str = parseInt(time / (86400.0 * 30)) + " 个月前";
	            } else if (time >= 86400 * 365) {
	                str = parseInt(time / (86400.0 * 365)) + " 年前";
	            } else {
	                str = parseInt(time) + " 秒前";
	            }
	        }
	        return str;
	    },
	    remove: function remove(arr, val) {
	        var index = this.indexOf(arr, val);
	        if (index > -1) {
	            arr.splice(index, 1);
	        }
	        return arr;
	    },
	    indexOf: function indexOf(arr, val) {
	        for (var i = 0; i < arr.length; i++) {
	            if (arr[i] == val) return i;
	        }
	        return -1;
	    },
	    unique: function unique(arr) {
	        var re = null;
	        arr.sort();
	        re = [arr[0]];
	        for (var i = 1; i < arr.length; i++) {
	            if (arr[i] !== re[re.length - 1]) {
	                re.push(arr[i]);
	            }
	        }
	        return re;
	    }
	};

/***/ },
/* 138 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"timeConf\">\n    <table>\n        <tr>\n            <td>星期</td>\n            <td>一</td>\n            <td>二</td>\n            <td>三</td>\n            <td>四</td>\n            <td>五</td>\n            <td>六</td>\n            <td>日</td>\n        </tr>\n        <tr v-for=\"item of 3\">\n            <td v-for=\"subItem of 8\" @click=\"setAccount( subItem +''+ (item+1) )\">\n                <span v-if=\"item == 0 && subItem == 0\">上午</span>\n                <span v-if=\"item == 1 && subItem == 0\">下午</span>\n                <span v-if=\"item == 2 && subItem == 0\">晚上</span>\n                <span class=\"icon iconWrap\" v-if=\"subItem != 0\">\n                    <i class=\"icon icon-xuanzhong\" v-if=\"item | timerCur subItem timerArr\"></i>\n                </span>\n            </td>\n        </tr>\n    </table>\n</div>\n";

/***/ },
/* 139 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"page-scene-detail page-current\">\n    <header-bar :title=\"title\" :back=\"true\"></header-bar>\n    <div class=\"content showHeaderNopading showFooter\">\n        <div class=\"userHeader\">\n            <img src=\"/dist/defaultImg/serverDefault.jpg\" v-if=\"!formData.photo_url\" />\n            <img :src=\"formData.photo_url\" v-else />\n            <div class=\"userWrap\">\n                <div class=\"btn\">\n                    <div class=\"radius\" v-if=\"!formData.photo_url\">\n                        <img :src=\"formData.head_img_url\" />\n                    </div>\n                </div>\n                <div class=\"name\">{{formData.usernick}}</div>\n            </div>\n            <div class=\"collection clearfix\">\n                <i class=\"ico ico-aixin\"></i>\n                <span>5人已收藏</span>\n            </div>\n        </div>\n        \n        <div class=\"userContent\">\n            <div class=\"userInfo\">\n                <span class=\"school\">\n                    <i class=\"ico ico-renzheng\"></i>\n                    {{formData.school_name}}\n                </span>\n                <div class=\"workplace\">{{formData.workplace}} 周边</div>\n            </div>\n            \n            <div class=\"userService clearfix\">\n                <i>我的服务：</i>\n                <span v-for=\"item in sceneList\" v-if=\"item | sceneCur sceneArr\">{{item.scene_name}}</span>\n            </div>\n            \n            <div class=\"block\">\n                <header>介绍服务</header>\n                <div class=\"main\">\n                    {{formData.detail}}\n                </div>\n            </div>\n            \n            <div class=\"block\">\n                <header>工作时间</header>\n                <div class=\"main\">\n                    <time-conf :timer=\"formData.timeConf\" :is-radio=\"true\"></time-conf>\n                </div>\n            </div>\n            \n            <div class=\"block\" v-if=\"formData.orderAppraise\">\n                <header>客户评价</header>\n                <div class=\"main\">\n                    <div class=\"appraiseContent\">\n                        {{formData.orderAppraise.content}}\n                    </div>\n                    <div class=\"appraiseCount\">\n                        <div class=\"ui-floatCenter\">\n                            <div class=\"user ui-sl-floatCenter clearfix\">\n                                <div class=\"img ui-floatCenter-item\">\n                                    <img :src=\"formData.orderAppraise.head_img_url\" />\n                                </div>\n                                <div class=\"nameWrap ui-floatCenter-item\">\n                                    <div class=\"name\">{{formData.orderAppraise.from_name}}</div>\n                                    <div class=\"time\">{{formData.orderAppraise.create_time}}</div>\n                                </div>\n                            </div>\n                        </div>\n                        <span class=\"btn\" v-link=\"{ name: 'sceneAppraise', query:{user_id: formData.user_id} }\">\n                            查看{{formData.orderAppraise.appraise_count}}条评价\n                        </span>\n                    </div>\n                </div>\n            </div>\n        </div>\n        \n    </div>\n    <span \n        class=\"ui-btn ui-btn-big\"\n        v-link=\"{ name: 'sceneInviteOrder', query:query}\"\n    >\n        约TA\n    </span>\n</div>\n";

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(141)
	__vue_script__ = __webpack_require__(143)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\views\\scene\\reserve.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(144)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\personal\\vue-demo-webpack\\src\\views\\scene\\reserve.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 141 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 142 */,
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <style lang="less">
	// @import '../../less/lib/mixins.less';
	// .page-scene-detail{
	//
	// }
	//
	// </style>
	//
	// <template>
	//     <div transition="page" class="page-scene-detail page-current">
	//         <header-bar :title="title" :back="true"></header-bar>
	//         <div class="content showHeader showFooter">
	//             <header>
	//                 林小兔
	//                 5人已收藏
	//                 厦门大学
	//                 厦门
	//                 我的服务：地推 酒店服务 话务员 物流 家教
	//             </header>
	//             介绍服务
	//             工作时间
	//             <time-conf :timer="formData.timeConf"></time-conf>
	//             客户评价
	//             马小跳6080
	//             2016-2-22
	//             查看5条评论
	//         </div>
	//         <span
	//                 class="ui-btn ui-btn-big"
	//             >
	//             约TA
	//         </span>
	//     </div>
	// </template>
	//
	// <script>
	exports.default = {
	    data: function data() {
	        return {
	            title: null
	        };
	    },
	
	    route: {
	        data: function data(transition) {
	            var self = this,
	                query = transition.to.query;
	
	            self.title = query.scene_name;
	        }
	    },
	    ready: function ready() {},
	    components: {
	        'headerBar': __webpack_require__(88),
	        'timeConf': __webpack_require__(132)
	    }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 144 */
/***/ function(module, exports) {

	module.exports = "\n<div transition=\"page\" class=\"page-scene-detail page-current\">\n    <header-bar :title=\"title\" :back=\"true\"></header-bar>\n    <div class=\"content showHeader showFooter\">\n        <header>\n            林小兔\n            5人已收藏\n            厦门大学\n            厦门\n            我的服务：地推 酒店服务 话务员 物流 家教\n        </header>\n        介绍服务\n        工作时间\n        <time-conf :timer=\"formData.timeConf\"></time-conf>\n        客户评价\n        马小跳6080\n        2016-2-22\n        查看5条评论\n    </div>\n    <span \n            class=\"ui-btn ui-btn-big\"\n        >\n        约TA\n    </span>\n</div>\n";

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(146)
	__vue_script__ = __webpack_require__(148)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\views\\scene\\appraise.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(149)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\personal\\vue-demo-webpack\\src\\views\\scene\\appraise.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 146 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 147 */,
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <style lang="less">
	// @import '../../less/lib/mixins.less';
	// .page-scene-appraise{
	//     .filter{
	//         border-bottom:1px solid #dedede;
	//         .rem(border-bottom-width, 2);
	//         .rem(padding-bottom, 20);
	//         .rem(margin-bottom, 20);
	//
	//         span{
	//             display:inline-block;
	//             background:#b2b2b2;
	//             color:#fff;
	//             .rem(padding, 0, 10);
	//             .rem(height, 50);
	//             .rem(line-height, 50);
	//             .border-radius(8);
	//             .rem(font-size, 24);
	//
	//             &.cur{
	//                 background:#ff946e;
	//             }
	//         }
	//     }
	//
	//     .block{
	//         background:#fff;
	//         border:1px solid #dedede;
	//         .rem(border-width, 2);
	//         .border-radius(8);
	//         .rem(padding, 20, 30);
	//         .rem(margin-bottom, 20);
	//         .rem(font-size, 30);
	//
	//         .user{
	//             border-bottom:1px solid #dedede;
	//             .rem(border-bottom-width, 2);
	//             .img{
	//                 float:left;
	//                 .rem(width, 70);
	//                 .rem(height, 70);
	//                 .border-radius(70);
	//                 img{
	//                     .border-radius(70);
	//                     width:100%;
	//                 }
	//             }
	//             .nameWrap{
	//                 float:left;
	//                 .rem(padding-left, 20);
	//                 .time{
	//                     .rem(font-size, 20);
	//                     color:#b2b2b2;
	//                 }
	//                 .name{
	//
	//                 }
	//             }
	//             .type{
	//                 float:right;
	//                 text-align:center;
	//                 .ico{
	//                     .rem(font-size, 40);
	//                     &.ico-xiaolian{
	//                         color:#eb503a
	//                     }
	//                     &.ico-cry{
	//                         color:#5e5e5e
	//                     }
	//                     &.ico-kulian{
	//                         color:#b2b2b2
	//                     }
	//                 }
	//                 div{
	//                     .rem(font-size, 24);
	//                 }
	//             }
	//         }
	//         .main{
	//             .rem(padding-top, 10);
	//         }
	//     }
	// }
	// </style>
	//
	// <template>
	//     <div transition="page" class="page-scene-appraise page-current">
	//         <header-bar :title="title" :back="true"></header-bar>
	//         <div class="content showHeader">
	//             <div class="filter">
	//                 <span @click="setType(0)" :class="{'cur': type == 0}">全部({{formData.count.allCount}})</span>
	//                 <span @click="setType(1)" :class="{'cur': type == 1}">好评({{formData.count.goodCount}})</span>
	//                 <span @click="setType(2)" :class="{'cur': type == 2}">中评({{formData.count.cenCount}})</span>
	//                 <span @click="setType(3)" :class="{'cur': type == 3}">差评({{formData.count.poolCount}})</span>
	//             </div>
	//             <div class="block" v-for="item in formData.appraises">
	//                 <div class="user clearfix">
	//                     <div class="img">
	//                         <img :src="item.head_img_url" />
	//                     </div>
	//                     <div class="nameWrap">
	//                         <div class="name">{{item.from_name}}</div>
	//                         <div class="time">{{item.create_time}}</div>
	//                     </div>
	//                     <div class="type">
	//                         <i class="ico {{typeIconArr[item.type-1]}}"></i>
	//                         <div>{{typeArr[item.type-1]}}</div>
	//                     </div>
	//                 </div>
	//                 <div class="main">
	//                     {{item.content}}
	//                 </div>
	//             </div>
	//         </div>
	//     </div>
	// </template>
	//
	// <script>
	exports.default = {
	    data: function data() {
	        return {
	            title: '评价',
	            formData: {},
	            type: 0,
	            typeArr: ['好评', '中评', '差评'],
	            typeIconArr: ['ico-xiaolian', 'ico-cry', 'ico-kulian'],
	            toId: null,
	            currentPage: 1
	        };
	    },
	
	    route: {
	        data: function data(transition) {
	            var self = this,
	                query = transition.to.query;
	
	            self.toId = query.to_id;
	            self.getList();
	        }
	    },
	    methods: {
	        setType: function setType(type) {
	            var self = this;
	
	            self.type = type;
	            self.getList();
	        },
	        getList: function getList() {
	            var self = this;
	            $.ajax({
	                url: "/soytime/appraise/list",
	                type: 'POST',
	                dataType: 'json',
	                data: {
	                    to_id: self.toId,
	                    currentPage: self.currentPage,
	                    type: self.type
	                },
	                success: function success(data) {
	                    self.formData = data.result;
	                }
	            });
	        }
	    },
	    components: {
	        'headerBar': __webpack_require__(88)
	    }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 149 */
/***/ function(module, exports) {

	module.exports = "\n<div transition=\"page\" class=\"page-scene-appraise page-current\">\n    <header-bar :title=\"title\" :back=\"true\"></header-bar>\n    <div class=\"content showHeader\">\n        <div class=\"filter\">\n            <span @click=\"setType(0)\" :class=\"{'cur': type == 0}\">全部({{formData.count.allCount}})</span>\n            <span @click=\"setType(1)\" :class=\"{'cur': type == 1}\">好评({{formData.count.goodCount}})</span>\n            <span @click=\"setType(2)\" :class=\"{'cur': type == 2}\">中评({{formData.count.cenCount}})</span>\n            <span @click=\"setType(3)\" :class=\"{'cur': type == 3}\">差评({{formData.count.poolCount}})</span>\n        </div>\n        <div class=\"block\" v-for=\"item in formData.appraises\">\n            <div class=\"user clearfix\">\n                <div class=\"img\">\n                    <img :src=\"item.head_img_url\" />\n                </div>\n                <div class=\"nameWrap\">\n                    <div class=\"name\">{{item.from_name}}</div>\n                    <div class=\"time\">{{item.create_time}}</div>\n                </div>\n                <div class=\"type\">\n                    <i class=\"ico {{typeIconArr[item.type-1]}}\"></i>\n                    <div>{{typeArr[item.type-1]}}</div>\n                </div>\n            </div>\n            <div class=\"main\">\n                {{item.content}}\n            </div>\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(151)
	__vue_script__ = __webpack_require__(153)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\views\\scene\\inviteOrder.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(159)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\personal\\vue-demo-webpack\\src\\views\\scene\\inviteOrder.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 151 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 152 */,
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _utils = __webpack_require__(137);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
		data: function data() {
			return {
				indexData: indexData,
				title: '预约',
				formData: {
					scene_name: '',
					photo_url: '',
					head_img_url: '',
					usernick: '',
					nickname: '',
					school_name: '',
					school_id: '',
					sex: '男',
					height: '',
					scene_id: '',
					start_time: '',
					end_time: '',
					period_times: '',
					detail: '',
					salary: '',
					unit: '时',
					number: '',
					pay_way: '',
					welfares: '',
					comp_addr: '',
					comp_longitude: '',
					comp_latitude: '',
					workplace: '',
					work_longitude: '',
					work_latitude: '',
					auto_select: '1',
					form: 'inviteOrder'
				},
				unitTextArr: ['时', '日', '周', '月', '次'],
				payTextArr: ['酱油平台支付', '现金支付', '线上支付'],
				isShow: false,
				actionsheet: {
					menu1: '酱油支付平台',
					menu2: '现金支付',
					menu3: '线上支付'
				},
				tempPeriodArr: []
			};
		},
	
		route: {
			data: function data(transition) {
				var self = this,
				    query = transition.to.query;
	
				$.extend(self.formData, query);
			}
		},
		ready: function ready() {
			var self = this;
	
			self.$store.state.getScrollerTime('#start', 0);
			self.$store.state.getScrollerTime('#end', 0);
	
			self.splitPeriod();
		},
	
		watch: {
			tempPeriodArr: function tempPeriodArr() {
				var self = this;
				self.$store.state.getScrollerTime('.period_start', 1);
				self.$store.state.getScrollerTime('.period_end', 1);
				self.joinPeriod();
			}
		},
		methods: {
			setUnit: function setUnit(unit) {
				var self = this;
				self.formData.unit = unit;
			},
			setPayWay: function setPayWay(key) {
				var self = this;
				self.isShow = false;
				switch (key) {
					case 'menu1':
						self.formData.pay_way = 1;
						break;
					case 'menu2':
						self.formData.pay_way = 2;
						break;
					case 'menu1':
						self.formData.pay_way = 3;
						break;
				}
			},
			showActionsheet: function showActionsheet() {
				this.isShow = true;
			},
			splitPeriod: function splitPeriod() {
				var self = this,
				    temArr = [];
	
				temArr = self.formData.period_times ? self.formData.period_times.split(',') : [];
	
				for (var i = 0, len = temArr.length; i < len; i++) {
					temArr[i] = temArr[i].split('-');
				}
	
				self.tempPeriodArr = temArr;
			},
			joinPeriod: function joinPeriod() {
				var self = this,
				    len = self.tempPeriodArr.length,
				    tmp = [],
				    start = $('.period_start'),
				    end = $('.period_end');
	
				for (var i = 0; i < len; i++) {
					var startVal = start.eq(i).val(),
					    endVal = end.eq(i).val();
					if (startVal && endVal) {
						tmp[i] = startVal + '-' + endVal;
					}
				}
	
				self.formData.period_times = tmp.join(',');
			},
			addPeriod: function addPeriod() {
				var self = this;
				self.tempPeriodArr.push([]);
			},
			removePeriod: function removePeriod(i) {
				var self = this;
				self.tempPeriodArr.splice(i, 1);
			},
			switch: function _switch() {
				var self = this;
				if (self.formData.auto_select == 1) {
					self.formData.auto_select = 0;
				} else {
					self.formData.auto_select = 1;
				}
			},
			setAddress: function setAddress(type) {
				var self = this;
				self.formData.type = type;
				self.formData.pageType = 1;
				self.$route.router.go({ name: 'sceneAddress', query: self.formData });
			},
			save: function save() {
				var self = this;
	
				console.log(self.formData.period_times);
				return;
	
				$.ajax({
					url: "/soytime/appraise/list",
					type: 'POST',
					dataType: 'json',
					data: {
						to_id: self.toId,
						currentPage: self.currentPage,
						type: self.type
					},
					success: function success(data) {
						//self.formData = data.result
					}
				});
			}
		},
		components: {
			'headerBar': __webpack_require__(88),
			'actionsheet': __webpack_require__(154)
		}
	};
	// </script>

	/* generated by vue-loader */
	// <style lang="less">
	// @import '../../less/lib/mixins.less';
	// .page-scene-inviteOrder{
	//
	//     .userWrap{
	//         width:100%;
	//
	//         .name{
	//             text-align:center;
	//             .rem(font-size, 38);
	//             .rem(padding, 10, 0);
	//             color:#333333;
	//         }
	//
	//         .radius{
	//             .rem(width, 150);
	//             .rem(height, 150);
	//
	//             margin:0 auto;
	//             position:relative;
	//             background:#fff;
	//             overflow:hidden;
	//             .border-radius(150);
	//             img{
	//                 height:100%;
	//                 width:100%;
	//                 .border-radius(150);
	//             }
	//         }
	//     }
	//
	//     .block{
	//         background:#fff;
	//         border:1px solid #dedede;
	//         .rem(border-width, 2);
	//         .border-radius(8);
	//         .rem(padding, 10);
	//         .rem(margin-bottom, 20);
	//         .rem(font-size, 30);
	//
	//         input{
	//             border:0 none;
	//             float:right;
	//             text-align: right;
	//             .rem(height, 44);
	//             .rem(line-height, 44);
	//         }
	//
	//         textarea{
	//             border: 0 none;
	//             width:100%;
	//             float: left;
	//             .rem(height, 150);
	//         }
	//
	//         .item{
	//             border-bottom:1px solid #dedede;
	//             .rem(border-bottom-width, 2);
	//             .rem(padding-bottom, 10);
	//             .rem(margin-bottom, 10);
	//         }
	//
	//         .half{
	//             width:50%;
	//             float:left;
	//             input{
	//                 width:50%;
	//             }
	//             .time{
	//                 .rem(padding, 0, 10, 0, 0);
	//                 float:right;
	//             }
	//         }
	//
	//         .unit{
	//             span{
	//                 .rem(width, 44);
	//                 .border-radius(44);
	//                 .rem(font-size, 24);
	//                 .rem(margin, 0, 0, 0, 10);
	//                 background:#b2b2b2;
	//                 text-align: center;
	//                 color:#fff;
	//                 &.cur{
	//                     background: #ff946e;
	//                 }
	//             }
	//         }
	//
	//         span{
	//             display: inline-block;
	//             .rem(height, 44);
	//             .rem(line-height, 44);
	//         }
	//
	//         .ico-jiantouyou{color:#b2b2b2}
	//
	//         .timeWrap{
	//             span{
	//                 float: left;
	//             }
	//             input{
	//             .rem(width, 100);
	//                 float:left;
	//                 text-align:center
	//             }
	//             i{
	//                 float:left;
	//             }
	//             .ico{
	//                 float:left;
	//                 .rem(height, 44);
	//                 .rem(line-height, 44);
	//                 .rem(padding-left, 10);
	//                 .rem(font-size, 40);
	//             }
	//         }
	//
	//     }
	// }
	// </style>
	//
	// <template>
	//     <div class="page-scene-inviteOrder page-current">
	//         <header-bar :title="title" :back="true" target="scene"></header-bar>
	//         <div class="content showHeader showFooter">
	//
	//             <div class="userWrap">
	//                 <div class="btn">
	//                     <div class="radius">
	//                         <img :src="formData.head_img_url" v-if="!formData.photo_url" />
	//                         <img :src="formData.photo_url" v-else />
	//                     </div>
	//                 </div>
	//                 <div class="name">{{formData.usernick}}</div>
	//             </div>
	//
	//             <div class="block clearfix">
	//                 <span class="pull-left">任务类型</span>
	//                 <span class="pull-right">{{formData.scene_name}}</span>
	//             </div>
	//
	//             <div class="block clearfix">
	//                 <div class="item clearfix">
	//                     <div class="half">
	//                         <span>开始时间</span>
	//                         <input type="text" id="start" v-model="formData.start_time" mobiscroll-datetime="settings">
	//                     </div>
	//                     <div class="half">
	//                         <span>结束时间</span>
	//                         <input type="text" id="end" v-model="formData.end_time" mobiscroll-datetime="settings">
	//                     </div>
	//                 </div>
	//                 <div class="item clearfix timeWrap" v-for="period in tempPeriodArr" v-if="tempPeriodArr.length">
	//                     <span>时段：</span>
	//                     <input type="text" value="{{period[0]}}" class="period_start" mobiscroll-datetime="settings" placeholder="请选择">
	//                     <i>-</i>
	//                     <input type="text" value="{{period[1]}}" class="period_end" mobiscroll-datetime="settings" placeholder="请选择">
	//                     <i class="ico ico-close" @click="removePeriod($index)"></i>
	//                 </div>
	//                 <div class="item clearfix timeWrap" v-if="!tempPeriodArr.length">
	//                     <span>时段：</span>
	//                     <input type="text" class="period_start" mobiscroll-datetime="settings" placeholder="请选择">
	//                     <i>-</i>
	//                     <input type="text" class="period_end" mobiscroll-datetime="settings" placeholder="请选择">
	//                 </div>
	//                 <div @click="addPeriod">
	//                     <i class="ico ico-anonymous"></i>添加时间段
	//                 </div>
	//             </div>
	//
	//             <div class="block clearfix">
	//                 <textarea placeholder="请详细填写你的需求任务"></textarea>
	//             </div>
	//
	//             <div class="block clearfix">
	//                 <div class="item clearfix">
	//                     <div class="half">
	//                         <span>报酬</span>
	//                         <input type="text" placeholder="输入金额">
	//                     </div>
	//                     <div class="half unit">
	//                         <span v-for="unit in unitTextArr"
	//                               :class="{'cur': unit == formData.unit}"
	//                               @click="setUnit(unit)"
	//                         >
	//                             {{unit}}
	//                         </span>
	//                     </div>
	//                 </div>
	//                 <div class="clearfix payWay" @click="showActionsheet">
	//                     <span>支付方式</span>
	//                     <span class="pull-right" v-if="formData.pay_way">{{payTextArr[formData.pay_way-1]}}</span>
	//                     <span class="pull-right ico ico-jiantouyou" v-else></span>
	//                 </div>
	//             </div>
	//
	//             <div class="block clearfix">
	//                 <div class="item clearfix">
	//                     <span>公司地址</span>
	//                     <input type="text" placeholder="请填写详细地址" v-model="formData.comp_addr" @click="setAddress(0)">
	//                 </div>
	//                 <div class="clearfix">
	//                     <span>服务位置</span>
	//                     <input type="text" placeholder="请输入准确位置" v-model="formData.workplace" @click="setAddress(1)">
	//                 </div>
	//             </div>
	//
	//         </div>
	//         <span
	//             class="ui-btn ui-btn-big"
	//             @click="save"
	//         >
	//             下单
	//         </span>
	//
	//     </div>
	// </template>
	//
	// <script>

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(155)
	__vue_script__ = __webpack_require__(157)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\actionsheet\\index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(158)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\personal\\vue-demo-webpack\\src\\components\\actionsheet\\index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 155 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 156 */,
/* 157 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="actionsheet_wrap">
	//     <div class="weui_mask_transition" :class="{'weui_fade_toggle': show}" :style="{display: show ? 'block' : 'none'}" @click="show=false"></div>
	//     <div class="weui_actionsheet" :class="{'weui_actionsheet_toggle': show}">
	//       <div class="weui_actionsheet_menu">
	//         <div class="weui_actionsheet_cell" v-for="(key, text) in menus" @click="dispatchEvent('menu-click', key)">
	//           {{{text}}}
	//         </div>
	//         <div class="vux-actionsheet-gap" v-if="showCancel"></div>
	//         <div class="weui_actionsheet_cell vux-actionsheet-cancel" @click="dispatchEvent('menu-click', 'cancel')" v-if="showCancel">{{cancelText}}</div>
	//       </div>
	//     </div>
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  props: {
	    show: {
	      type: Boolean,
	      required: true,
	      defalt: false,
	      twoWay: true
	    },
	    showCancel: {
	      type: Boolean,
	      default: false
	    },
	    cancelText: {
	      type: String,
	      default: 'cancel'
	    },
	    menus: {
	      type: Object,
	      required: false,
	      default: {}
	    }
	  },
	  methods: {
	    dispatchEvent: function dispatchEvent(event, menu) {
	      if (event === 'menu-click') {
	        this.$dispatch(event, menu);
	        this.show = false;
	      }
	    }
	  }
	};
	// </script>
	//
	// <style>
	//   .weui_mask {
	//     background: rgba(0,0,0,.6)
	//   }
	//
	//   .weui_mask,.weui_mask_transition,.weui_mask_transparent {
	//     position: fixed;
	//     z-index: 20;
	//     width: 100%;
	//     height: 100%;
	//     top: 0;
	//     left: 0
	//   }
	//
	//   .weui_mask_transition {
	//     display: none;
	//     background: transparent;
	//     -webkit-transition: background .3s;
	//     transition: background .3s
	//   }
	//
	//   .weui_fade_toggle {
	//     background: rgba(0,0,0,.6)
	//   }
	//   .weui_actionsheet {
	//     position: fixed;
	//     left: 0;
	//     bottom: 0;
	//     -webkit-transform: translateY(100%);
	//     transform: translateY(100%);
	//     -webkit-backface-visibility: hidden;
	//     backface-visibility: hidden;
	//     z-index: 21;
	//     width: 100%;
	//     background-color: #efeff4;
	//     -webkit-transition: -webkit-transform .3s;
	//     transition: -webkit-transform .3s;
	//     transition: transform .3s;
	//     transition: transform .3s,-webkit-transform .3s
	//   }
	//
	//   .weui_actionsheet_menu {
	//     background-color: #fff
	//   }
	//
	//   .weui_actionsheet_action {
	//     margin-top: 6px;
	//     background-color: #fff
	//   }
	//
	//   .weui_actionsheet_cell {
	//     position: relative;
	//     padding: 10px 0;
	//     text-align: center;
	//     font-size: 18px
	//   }
	//
	//   .weui_actionsheet_cell:before {
	//     content: " ";
	//     position: absolute;
	//     left: 0;
	//     top: 0;
	//     width: 100%;
	//     height: 1px;
	//     border-top: 1px solid #d9d9d9;
	//     color: #d9d9d9;
	//     -webkit-transform-origin: 0 0;
	//     transform-origin: 0 0;
	//     -webkit-transform: scaleY(.5);
	//     transform: scaleY(.5)
	//   }
	//
	//   .weui_actionsheet_cell:active {
	//     background-color: #ececec
	//   }
	//
	//   .weui_actionsheet_cell:first-child:before {
	//     display: none
	//   }
	//
	//   .weui_actionsheet_toggle {
	//     -webkit-transform: translate(0);
	//     transform: translate(0)
	//   }
	// .vux-actionsheet-gap {
	//   height: 8px;
	//   width: 100%;
	//   background-color: #eee;
	// }
	// .vux-actionsheet-cancel:before {
	//   border-top: none;
	// }
	// </style>

	/* generated by vue-loader */

/***/ },
/* 158 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"actionsheet_wrap\">\n  <div class=\"weui_mask_transition\" :class=\"{'weui_fade_toggle': show}\" :style=\"{display: show ? 'block' : 'none'}\" @click=\"show=false\"></div>\n  <div class=\"weui_actionsheet\" :class=\"{'weui_actionsheet_toggle': show}\">\n    <div class=\"weui_actionsheet_menu\">\n      <div class=\"weui_actionsheet_cell\" v-for=\"(key, text) in menus\" @click=\"dispatchEvent('menu-click', key)\">\n        {{{text}}}\n      </div>\n      <div class=\"vux-actionsheet-gap\" v-if=\"showCancel\"></div>\n      <div class=\"weui_actionsheet_cell vux-actionsheet-cancel\" @click=\"dispatchEvent('menu-click', 'cancel')\" v-if=\"showCancel\">{{cancelText}}</div>\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 159 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"page-scene-inviteOrder page-current\">\n    <header-bar :title=\"title\" :back=\"true\" target=\"scene\"></header-bar>\n    <div class=\"content showHeader showFooter\">\n\n        <div class=\"userWrap\">\n            <div class=\"btn\">\n                <div class=\"radius\">\n                    <img :src=\"formData.head_img_url\" v-if=\"!formData.photo_url\" />\n                    <img :src=\"formData.photo_url\" v-else />\n                </div>\n            </div>\n            <div class=\"name\">{{formData.usernick}}</div>\n        </div>\n\n        <div class=\"block clearfix\">\n            <span class=\"pull-left\">任务类型</span>\n            <span class=\"pull-right\">{{formData.scene_name}}</span>\n        </div>\n\n        <div class=\"block clearfix\">\n            <div class=\"item clearfix\">\n                <div class=\"half\">\n                    <span>开始时间</span>\n                    <input type=\"text\" id=\"start\" v-model=\"formData.start_time\" mobiscroll-datetime=\"settings\">\n                </div>\n                <div class=\"half\">\n                    <span>结束时间</span>\n                    <input type=\"text\" id=\"end\" v-model=\"formData.end_time\" mobiscroll-datetime=\"settings\">\n                </div>\n            </div>\n            <div class=\"item clearfix timeWrap\" v-for=\"period in tempPeriodArr\" v-if=\"tempPeriodArr.length\">\n                <span>时段：</span>\n                <input type=\"text\" value=\"{{period[0]}}\" class=\"period_start\" mobiscroll-datetime=\"settings\" placeholder=\"请选择\">\n                <i>-</i>\n                <input type=\"text\" value=\"{{period[1]}}\" class=\"period_end\" mobiscroll-datetime=\"settings\" placeholder=\"请选择\">\n                <i class=\"ico ico-close\" @click=\"removePeriod($index)\"></i>\n            </div>\n            <div class=\"item clearfix timeWrap\" v-if=\"!tempPeriodArr.length\">\n                <span>时段：</span>\n                <input type=\"text\" class=\"period_start\" mobiscroll-datetime=\"settings\" placeholder=\"请选择\">\n                <i>-</i>\n                <input type=\"text\" class=\"period_end\" mobiscroll-datetime=\"settings\" placeholder=\"请选择\">\n            </div>\n            <div @click=\"addPeriod\">\n                <i class=\"ico ico-anonymous\"></i>添加时间段\n            </div>\n        </div>\n\n        <div class=\"block clearfix\">\n            <textarea placeholder=\"请详细填写你的需求任务\"></textarea>\n        </div>\n\n        <div class=\"block clearfix\">\n            <div class=\"item clearfix\">\n                <div class=\"half\">\n                    <span>报酬</span>\n                    <input type=\"text\" placeholder=\"输入金额\">\n                </div>\n                <div class=\"half unit\">\n                    <span v-for=\"unit in unitTextArr\"\n                          :class=\"{'cur': unit == formData.unit}\"\n                          @click=\"setUnit(unit)\"\n                    >\n                        {{unit}}\n                    </span>\n                </div>\n            </div>\n            <div class=\"clearfix payWay\" @click=\"showActionsheet\">\n                <span>支付方式</span>\n                <span class=\"pull-right\" v-if=\"formData.pay_way\">{{payTextArr[formData.pay_way-1]}}</span>\n                <span class=\"pull-right ico ico-jiantouyou\" v-else></span>\n            </div>\n        </div>\n\n        <div class=\"block clearfix\">\n            <div class=\"item clearfix\">\n                <span>公司地址</span>\n                <input type=\"text\" placeholder=\"请填写详细地址\" v-model=\"formData.comp_addr\" @click=\"setAddress(0)\">\n            </div>\n            <div class=\"clearfix\">\n                <span>服务位置</span>\n                <input type=\"text\" placeholder=\"请输入准确位置\" v-model=\"formData.workplace\" @click=\"setAddress(1)\">\n            </div>\n        </div>\n\n    </div>\n    <span\n        class=\"ui-btn ui-btn-big\"\n        @click=\"save\"\n    >\n        下单\n    </span>\n\n</div>\n";

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(161)
	__vue_script__ = __webpack_require__(163)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\views\\scene\\oneKeyOrder.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(174)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\personal\\vue-demo-webpack\\src\\views\\scene\\oneKeyOrder.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 161 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 162 */,
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _utils = __webpack_require__(137);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    data: function data() {
	        return {
	            indexData: indexData,
	            title: '一键预约',
	            formData: {
	                nickname: '',
	                school_name: '',
	                school_id: '',
	                sex: '男',
	                height: '',
	                scene_id: '',
	                start_time: '',
	                end_time: '',
	                period_times: '',
	                detail: '',
	                salary: '',
	                unit: '时',
	                number: '',
	                pay_way: '',
	                welfares: '',
	                comp_addr: '',
	                comp_longitude: '',
	                comp_latitude: '',
	                workplace: '',
	                work_longitude: '',
	                work_latitude: '',
	                auto_select: '1',
	                form: 'onekeyOrder'
	            },
	            unitTextArr: ['时', '日', '周', '月', '次'],
	            payTextArr: ['酱油平台支付', '现金支付', '线上支付'],
	            welfares: [{
	                welfare_id: '1',
	                welfare_name: '包餐'
	            }, {
	                welfare_id: '2',
	                welfare_name: '打车报销'
	            }, {
	                welfare_id: '3',
	                welfare_name: '专车接送'
	            }, {
	                welfare_id: '4',
	                welfare_name: '包住'
	            }],
	            isShow: false,
	            actionsheet: {
	                menu1: '酱油支付平台',
	                menu2: '现金支付',
	                menu3: '线上支付'
	            },
	            tempPeriodArr: []
	        };
	    },
	
	    route: {
	        data: function data(transition) {
	            var self = this,
	                query = transition.to.query;
	
	            $.extend(self.formData, query);
	        }
	    },
	    ready: function ready() {
	        var self = this;
	
	        self.$store.state.getScrollerTime('#start', 0);
	        self.$store.state.getScrollerTime('#end', 0);
	
	        self.splitPeriod();
	    },
	
	    watch: {
	        tempPeriodArr: function tempPeriodArr() {
	            var self = this;
	            self.$store.state.getScrollerTime('.period_start', 1);
	            self.$store.state.getScrollerTime('.period_end', 1);
	            self.joinPeriod();
	        }
	    },
	    methods: {
	        setSex: function setSex(sex) {
	            var self = this;
	            self.formData.sex = sex;
	        },
	        setUnit: function setUnit(unit) {
	            var self = this;
	            self.formData.unit = unit;
	        },
	        selectSchool: function selectSchool() {
	            var self = this;
	            self.$route.router.go({ 'name': 'selectSchool', query: self.formData });
	        },
	        setWelfares: function setWelfares(id) {
	            var self = this,
	                tmpArr = self.formData.setWelfares.split('-');
	
	            if (_utils2.default.indexOf(tmpArr, id) > -1) {
	                tmpArr = _utils2.default.remove(tmpArr, id);
	            } else {
	                tmpArr.push(id);
	            }
	            self.formData.setWelfares = tmpArr.join('-');
	        },
	        setPayWay: function setPayWay(key) {
	            var self = this;
	            self.isShow = false;
	            switch (key) {
	                case 'menu1':
	                    self.formData.pay_way = 1;
	                    break;
	                case 'menu2':
	                    self.formData.pay_way = 2;
	                    break;
	                case 'menu1':
	                    self.formData.pay_way = 3;
	                    break;
	            }
	        },
	        showActionsheet: function showActionsheet() {
	            this.isShow = true;
	        },
	        splitPeriod: function splitPeriod() {
	            var self = this,
	                temArr = [];
	
	            temArr = self.formData.period_times ? self.formData.period_times.split(',') : [];
	
	            for (var i = 0, len = temArr.length; i < len; i++) {
	                temArr[i] = temArr[i].split('-');
	            }
	
	            self.tempPeriodArr = temArr;
	        },
	        joinPeriod: function joinPeriod() {
	            var self = this,
	                len = self.tempPeriodArr.length,
	                tmp = [],
	                start = $('.period_start'),
	                end = $('.period_end');
	
	            for (var i = 0; i < len; i++) {
	                var startVal = start.eq(i).val(),
	                    endVal = end.eq(i).val();
	                if (startVal && endVal) {
	                    tmp[i] = startVal + '-' + endVal;
	                }
	            }
	
	            self.formData.period_times = tmp.join(',');
	        },
	        addPeriod: function addPeriod() {
	            var self = this;
	            self.tempPeriodArr.push([]);
	        },
	        removePeriod: function removePeriod(i) {
	            var self = this;
	            self.tempPeriodArr.splice(i, 1);
	        },
	        switch: function _switch() {
	            var self = this;
	            if (self.formData.auto_select == 1) {
	                self.formData.auto_select = 0;
	            } else {
	                self.formData.auto_select = 1;
	            }
	        },
	        setAddress: function setAddress(type) {
	            var self = this;
	            self.formData.type = type;
	            self.formData.pageType = 0;
	            self.$route.router.go({ name: 'sceneAddress', query: self.formData });
	        },
	        save: function save() {
	            var self = this;
	
	            $.ajax({
	                url: "/soytime/order/inviteOrder",
	                type: 'POST',
	                dataType: 'json',
	                data: self.formData,
	                success: function success(data) {
	                    self.$route.router.go({ name: 'sceneOrderSuccess', query: data.result.order_id });
	                }
	            });
	        }
	    },
	    components: {
	        'headerBar': __webpack_require__(88),
	        'sceneType': __webpack_require__(164),
	        'welfares': __webpack_require__(169),
	        'actionsheet': __webpack_require__(154)
	    }
	};
	// </script>

	/* generated by vue-loader */
	// <style lang="less">
	// @import '../../less/lib/mixins.less';
	// .page-scene-oneKeyOrder{
	//
	//     .block{
	//         background:#fff;
	//         border:1px solid #dedede;
	//         .rem(border-width, 2);
	//         .border-radius(8);
	//         .rem(padding, 10);
	//         .rem(margin-bottom, 20);
	//         .rem(font-size, 30);
	//
	//         input{
	//             border:0 none;
	//             float:right;
	//             text-align: right;
	//             .rem(height, 44);
	//             .rem(line-height, 44);
	//         }
	//
	//         textarea{
	//             border: 0 none;
	//             width:100%;
	//             float: left;
	//             .rem(height, 150);
	//         }
	//
	//         .item{
	//             border-bottom:1px solid #dedede;
	//             .rem(border-bottom-width, 2);
	//             .rem(padding-bottom, 10);
	//             .rem(margin-bottom, 10);
	//         }
	//
	//         .half{
	//             width:50%;
	//             float:left;
	//             input{
	//                 width:50%;
	//             }
	//             .time{
	//                 .rem(padding, 0, 10, 0, 0);
	//                 float:right;
	//             }
	//         }
	//
	//         .sex{
	//             .ico{
	//                 .rem(height, 44);
	//                 .rem(line-height, 44);
	//                 .rem(width, 44);
	//                 .rem(font-size, 40);
	//                 .rem(margin-right, 10);
	//                 overflow: hidden;
	//                 color:#b2b2b2;
	//                 float:left;
	//                 &.cur{
	//                      color: #ff946e;
	//                 }
	//             }
	//         }
	//
	//         .unit{
	//             span{
	//                 .rem(width, 44);
	//                 .border-radius(44);
	//                 .rem(font-size, 24);
	//                 .rem(margin, 0, 0, 0, 10);
	//                 background:#b2b2b2;
	//                 text-align: center;
	//                 color:#fff;
	//                 &.cur{
	//                     background: #ff946e;
	//                 }
	//             }
	//         }
	//
	//         span{
	//             display: inline-block;
	//             .rem(height, 44);
	//             .rem(line-height, 44);
	//         }
	//
	//         .ico-jiantouyou{color:#b2b2b2}
	//
	//         .switch{
	//             .rem(font-size, 50);
	//             &.ico-open{color:#ff946e;}
	//             &.ico-close3{color: #b2b2b2;}
	//         }
	//
	//         .timeWrap{
	//             span{
	//                 float: left;
	//             }
	//             input{
	//                 .rem(width, 100);
	//                 float:left;
	//                 text-align:center
	//             }
	//             i{
	//                 float:left;
	//             }
	//             .ico{
	//                 float:left;
	//                 .rem(height, 44);
	//                 .rem(line-height, 44);
	//                 .rem(padding-left, 10);
	//                 .rem(font-size, 40);
	//             }
	//         }
	//
	//     }
	// }
	// </style>
	//
	// <template>
	//     <div class="page-scene-oneKeyOrder page-current">
	//         <header-bar :title="title" :back="true" target="scene"></header-bar>
	//         <div class="content showHeader showFooter">
	//             <div class="block clearfix">
	//                 <span>雇主名</span>
	//                 <input type="text" placeholder="请输入公司名字">
	//             </div>
	//
	//             <div class="block clearfix">
	//                 <div class="item">
	//                     <span>选择类型</span>
	//                 </div>
	//                 <scene-type
	//                     :scene-list="indexData.sceneList"
	//                     :scene-ids.sync="formData.sceneId"
	//                     :is-radio="true"
	//                 ></scene-type>
	//             </div>
	//
	//             <div class="block clearfix">
	//                 <div class="item clearfix">
	//                     <div class="half">
	//                         <span>开始时间</span>
	//                         <input type="text" id="start" v-model="formData.start_time" mobiscroll-datetime="settings">
	//                     </div>
	//                     <div class="half">
	//                         <span>结束时间</span>
	//                         <input type="text" id="end" v-model="formData.end_time" mobiscroll-datetime="settings">
	//                     </div>
	//                 </div>
	//                 <div class="item clearfix timeWrap" v-for="period in tempPeriodArr" v-if="tempPeriodArr.length">
	//                     <span>时段：</span>
	//                     <input type="text" value="{{period[0]}}" class="period_start" mobiscroll-datetime="settings" placeholder="请选择">
	//                     <i>-</i>
	//                     <input type="text" value="{{period[1]}}" class="period_end" mobiscroll-datetime="settings" placeholder="请选择">
	//                     <i class="ico ico-close" @click="removePeriod($index)"></i>
	//                 </div>
	//                 <div class="item clearfix timeWrap" v-if="!tempPeriodArr.length">
	//                     <span>时段：</span>
	//                     <input type="text" class="period_start" mobiscroll-datetime="settings" placeholder="请选择">
	//                     <i>-</i>
	//                     <input type="text" class="period_end" mobiscroll-datetime="settings" placeholder="请选择">
	//                 </div>
	//                 <div @click="addPeriod">
	//                     <i class="ico ico-anonymous"></i>添加时间段
	//                 </div>
	//             </div>
	//
	//             <div class="block clearfix">
	//                 <div class="item clearfix" @click="selectSchool">
	//                     <span class="pull-left">学校</span>
	//                     <span class="pull-right" v-if="formData.school_name">{{formData.school_name}}</span>
	//                     <span class="pull-right ico ico-jiantouyou" v-else></span>
	//                 </div>
	//                 <div class="clearfix">
	//                     <div class="half sex">
	//                         <span class="pull-left">性别</span>
	//                         <span class="pull-right">
	//                             <i class="ico ico-xingbienan3" :class="{'cur':formData.sex == '男'}" @click="setSex('男')"></i>
	//                             <i class="ico ico-xingbienv4" :class="{'cur':formData.sex == '女'}" @click="setSex('女')"></i>
	//                         </span>
	//                     </div>
	//                     <div class="half">
	//                         <span>身高</span>
	//                         <input type="text" placeholder="不限">
	//                     </div>
	//                 </div>
	//             </div>
	//
	//             <div class="block clearfix">
	//                 <span>预约人数</span>
	//                 <input type="text" placeholder="输入预约人数">
	//             </div>
	//
	//             <div class="block clearfix">
	//                 <textarea placeholder="请详细填写你的需求任务"></textarea>
	//             </div>
	//
	//             <div class="block clearfix">
	//                 <div class="item clearfix">
	//                     <div class="half">
	//                         <span>报酬</span>
	//                         <input type="text" placeholder="输入金额">
	//                     </div>
	//                     <div class="half unit">
	//                         <span v-for="unit in unitTextArr"
	//                               :class="{'cur': unit == formData.unit}"
	//                               @click="setUnit(unit)"
	//                         >
	//                             {{unit}}
	//                         </span>
	//                     </div>
	//                 </div>
	//                 <div class="clearfix payWay" @click="showActionsheet">
	//                     <span>支付方式</span>
	//                     <span class="pull-right" v-if="formData.pay_way">{{payTextArr[formData.pay_way-1]}}</span>
	//                     <span class="pull-right ico ico-jiantouyou" v-else></span>
	//                 </div>
	//             </div>
	//
	//             <div class="block clearfix">
	//                 <div class="item clearfix">
	//                     <span>特别福利</span>
	//                 </div>
	//                 <welfares
	//                         :welfares="welfares"
	//                         :welfares-ids.sync="formData.welfares"
	//                 ></welfares>
	//             </div>
	//
	//             <div class="block clearfix">
	//                 <div class="item clearfix">
	//                     <span>公司地址</span>
	//                     <input type="text" placeholder="请填写详细地址" v-model="formData.comp_addr" @click="setAddress(0)">
	//                 </div>
	//                 <div class="clearfix">
	//                     <span>服务位置</span>
	//                     <input type="text" placeholder="请输入准确位置" v-model="formData.workplace" @click="setAddress(1)">
	//                 </div>
	//             </div>
	//
	//             <div class="block clearfix">
	//                 <span class="pull-left">报名半小时后自动确定人选</span>
	//                 <span
	//                     class="pull-right switch ico"
	//                     :class="{'ico-open': formData.auto_select == 1, 'ico-close3': formData.auto_select == 0}"
	//                     @click="switch"
	//                 ></span>
	//             </div>
	//         </div>
	//         <actionsheet :show.sync="isShow" :menus="actionsheet" @menu-click="setPayWay"></actionsheet>
	//         <span
	//             class="ui-btn ui-btn-big"
	//             @click="save"
	//         >
	//             下单
	//         </span>
	//
	//     </div>
	// </template>
	//
	// <script>

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(165)
	__vue_script__ = __webpack_require__(167)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\sceneType.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(168)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\personal\\vue-demo-webpack\\src\\components\\sceneType.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 165 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 166 */,
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _utils = __webpack_require__(137);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    replace: true,
	    props: ['sceneList', 'sceneIds', 'isRadio'],
	    data: function data() {
	        return {
	            sceneArr: []
	        };
	    },
	
	    // ready(){
	    //     let self = this;
	
	    //     self.$nextTick(function () {
	    //         if( !self.sceneIds ) return;
	    //         self.sceneArr = self.sceneIds.split('-');
	    //     })
	    // },
	    watch: {
	        sceneIds: function sceneIds() {
	            var self = this;
	            self.sceneArr = self.sceneIds.split('-');
	        }
	    },
	    methods: {
	        setScene: function setScene(id) {
	            var self = this;
	            if (!self.isRadio) {
	                if (_utils2.default.indexOf(self.sceneArr, id) > -1) {
	                    self.sceneArr = _utils2.default.remove(self.sceneArr, id);
	                } else {
	                    self.sceneArr.push(id);
	                }
	                self.sceneIds = self.sceneArr.join('-');
	            } else {
	                self.sceneArr = [];
	                self.sceneArr.push(id);
	                self.sceneIds = id;
	            }
	        }
	    }
	};
	// </script>
	/* generated by vue-loader */
	// <style lang="less">
	//     @import '../less/lib/mixins.less';
	//     .sceneType{
	//         li{
	//             float:left;
	//             color:#fff;
	//             text-align:center;
	//             overflow:hidden;
	//             .rem(width, 122);
	//             .rem(height, 58);
	//             .rem(line-height, 58);
	//             .rem(margin, 16, 8, 0);
	//             .rem(font-size, 24);
	//             .border-radius(8);
	//             span{
	//                 display:block;
	//                 background:#b2b2b2;
	//                 .rem(width, 122);
	//                 .rem(height, 58) !important;
	//                 .rem(line-height, 58) !important;
	//                 &.cur{
	//                     background:#ff946e
	//                 }
	//             }
	//         }
	//     }
	// </style>
	//
	// <template>
	//     <ul class="sceneType clearfix">
	//         <li v-for="item in sceneList" @click="setScene(item.scene_id)">
	//
	//             <span class="cur" v-if="item | sceneCur sceneArr">
	//                 {{item.scene_name}}
	//             </span>
	//             <span v-else>
	//                 {{item.scene_name}}
	//             </span>
	//
	//         </li>
	//     </ul>
	// </template>
	//
	// <script>

/***/ },
/* 168 */
/***/ function(module, exports) {

	module.exports = "\n<ul class=\"sceneType clearfix\">\n    <li v-for=\"item in sceneList\" @click=\"setScene(item.scene_id)\">\n\n        <span class=\"cur\" v-if=\"item | sceneCur sceneArr\">\n            {{item.scene_name}}\n        </span>\n        <span v-else>\n            {{item.scene_name}}\n        </span>\n        \n    </li>\n</ul>\n";

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(170)
	__vue_script__ = __webpack_require__(172)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\welfares.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(173)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\personal\\vue-demo-webpack\\src\\components\\welfares.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 170 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 171 */,
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _utils = __webpack_require__(137);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    replace: true,
	    props: ['welfares', 'welfareIds', 'isRadio'],
	    data: function data() {
	        return {
	            welfareArr: []
	        };
	    },
	
	    watch: {
	        welfareIds: function welfareIds() {
	            var self = this;
	            self.welfareArr = self.welfareIds.split('-');
	        }
	    },
	    methods: {
	        setwelfare: function setwelfare(id) {
	            var self = this;
	            if (!self.isRadio) {
	                if (_utils2.default.indexOf(self.welfareArr, id) > -1) {
	                    self.welfareArr = _utils2.default.remove(self.welfareArr, id);
	                } else {
	                    self.welfareArr.push(id);
	                }
	                self.welfareIds = self.welfareArr.join('-');
	            } else {
	                self.welfareArr = [];
	                self.welfareArr.push(id);
	                self.welfareIds = id;
	            }
	        }
	    }
	};
	// </script>
	/* generated by vue-loader */
	// <style lang="less">
	//     @import '../less/lib/mixins.less';
	//     .welfareType{
	//         li{
	//             float:left;
	//             color:#fff;
	//             text-align:center;
	//             overflow:hidden;
	//             .rem(width, 122);
	//             .rem(height, 58);
	//             .rem(line-height, 58);
	//             .rem(margin, 16, 8, 0);
	//             .rem(font-size, 24);
	//             .border-radius(8);
	//             span{
	//                 display:block;
	//                 background:#b2b2b2;
	//                 .rem(width, 122);
	//                 .rem(height, 58) !important;
	//                 .rem(line-height, 58) !important;
	//                 &.cur{
	//                      background:#ff946e;
	//                  }
	//             }
	//         }
	//     }
	// </style>
	//
	// <template>
	//     <ul class="welfareType clearfix">
	//         <li v-for="item in welfares" @click="setwelfare(item.welfare_id)">
	//
	//             <span class="cur" v-if="item | welfareCur welfareArr">
	//                 {{item.welfare_name}}
	//             </span>
	//             <span v-else>
	//                 {{item.welfare_name}}
	//             </span>
	//
	//         </li>
	//     </ul>
	// </template>
	//
	// <script>

/***/ },
/* 173 */
/***/ function(module, exports) {

	module.exports = "\n<ul class=\"welfareType clearfix\">\n    <li v-for=\"item in welfares\" @click=\"setwelfare(item.welfare_id)\">\n\n        <span class=\"cur\" v-if=\"item | welfareCur welfareArr\">\n            {{item.welfare_name}}\n        </span>\n        <span v-else>\n            {{item.welfare_name}}\n        </span>\n\n    </li>\n</ul>\n";

/***/ },
/* 174 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"page-scene-oneKeyOrder page-current\">\n    <header-bar :title=\"title\" :back=\"true\" target=\"scene\"></header-bar>\n    <div class=\"content showHeader showFooter\">\n        <div class=\"block clearfix\">\n            <span>雇主名</span>\n            <input type=\"text\" placeholder=\"请输入公司名字\">\n        </div>\n\n        <div class=\"block clearfix\">\n            <div class=\"item\">\n                <span>选择类型</span>\n            </div>\n            <scene-type \n                :scene-list=\"indexData.sceneList\"\n                :scene-ids.sync=\"formData.sceneId\"\n                :is-radio=\"true\"\n            ></scene-type>\n        </div>\n\n        <div class=\"block clearfix\">\n            <div class=\"item clearfix\">\n                <div class=\"half\">\n                    <span>开始时间</span>\n                    <input type=\"text\" id=\"start\" v-model=\"formData.start_time\" mobiscroll-datetime=\"settings\">\n                </div>\n                <div class=\"half\">\n                    <span>结束时间</span>\n                    <input type=\"text\" id=\"end\" v-model=\"formData.end_time\" mobiscroll-datetime=\"settings\">\n                </div>\n            </div>\n            <div class=\"item clearfix timeWrap\" v-for=\"period in tempPeriodArr\" v-if=\"tempPeriodArr.length\">\n                <span>时段：</span>\n                <input type=\"text\" value=\"{{period[0]}}\" class=\"period_start\" mobiscroll-datetime=\"settings\" placeholder=\"请选择\">\n                <i>-</i>\n                <input type=\"text\" value=\"{{period[1]}}\" class=\"period_end\" mobiscroll-datetime=\"settings\" placeholder=\"请选择\">\n                <i class=\"ico ico-close\" @click=\"removePeriod($index)\"></i>\n            </div>\n            <div class=\"item clearfix timeWrap\" v-if=\"!tempPeriodArr.length\">\n                <span>时段：</span>\n                <input type=\"text\" class=\"period_start\" mobiscroll-datetime=\"settings\" placeholder=\"请选择\">\n                <i>-</i>\n                <input type=\"text\" class=\"period_end\" mobiscroll-datetime=\"settings\" placeholder=\"请选择\">\n            </div>\n            <div @click=\"addPeriod\">\n                <i class=\"ico ico-anonymous\"></i>添加时间段\n            </div>\n        </div>\n\n        <div class=\"block clearfix\">\n            <div class=\"item clearfix\" @click=\"selectSchool\">\n                <span class=\"pull-left\">学校</span>\n                <span class=\"pull-right\" v-if=\"formData.school_name\">{{formData.school_name}}</span>\n                <span class=\"pull-right ico ico-jiantouyou\" v-else></span>\n            </div>\n            <div class=\"clearfix\">\n                <div class=\"half sex\">\n                    <span class=\"pull-left\">性别</span>\n                    <span class=\"pull-right\">\n                        <i class=\"ico ico-xingbienan3\" :class=\"{'cur':formData.sex == '男'}\" @click=\"setSex('男')\"></i>\n                        <i class=\"ico ico-xingbienv4\" :class=\"{'cur':formData.sex == '女'}\" @click=\"setSex('女')\"></i>\n                    </span>\n                </div>\n                <div class=\"half\">\n                    <span>身高</span>\n                    <input type=\"text\" placeholder=\"不限\">\n                </div>\n            </div>\n        </div>\n        \n        <div class=\"block clearfix\">\n            <span>预约人数</span>\n            <input type=\"text\" placeholder=\"输入预约人数\">\n        </div>\n\n        <div class=\"block clearfix\">\n            <textarea placeholder=\"请详细填写你的需求任务\"></textarea>\n        </div>\n\n        <div class=\"block clearfix\">\n            <div class=\"item clearfix\">\n                <div class=\"half\">\n                    <span>报酬</span>\n                    <input type=\"text\" placeholder=\"输入金额\">\n                </div>\n                <div class=\"half unit\">\n                    <span v-for=\"unit in unitTextArr\"\n                          :class=\"{'cur': unit == formData.unit}\"\n                          @click=\"setUnit(unit)\"\n                    >\n                        {{unit}}\n                    </span>\n                </div>\n            </div>\n            <div class=\"clearfix payWay\" @click=\"showActionsheet\">\n                <span>支付方式</span>\n                <span class=\"pull-right\" v-if=\"formData.pay_way\">{{payTextArr[formData.pay_way-1]}}</span>\n                <span class=\"pull-right ico ico-jiantouyou\" v-else></span>\n            </div>\n        </div>\n\n        <div class=\"block clearfix\">\n            <div class=\"item clearfix\">\n                <span>特别福利</span>\n            </div>\n            <welfares\n                    :welfares=\"welfares\"\n                    :welfares-ids.sync=\"formData.welfares\"\n            ></welfares>\n        </div>\n\n        <div class=\"block clearfix\">\n            <div class=\"item clearfix\">\n                <span>公司地址</span>\n                <input type=\"text\" placeholder=\"请填写详细地址\" v-model=\"formData.comp_addr\" @click=\"setAddress(0)\">\n            </div>\n            <div class=\"clearfix\">\n                <span>服务位置</span>\n                <input type=\"text\" placeholder=\"请输入准确位置\" v-model=\"formData.workplace\" @click=\"setAddress(1)\">\n            </div>\n        </div>\n\n        <div class=\"block clearfix\">\n            <span class=\"pull-left\">报名半小时后自动确定人选</span>\n            <span\n                class=\"pull-right switch ico\"\n                :class=\"{'ico-open': formData.auto_select == 1, 'ico-close3': formData.auto_select == 0}\"\n                @click=\"switch\"\n            ></span>\n        </div>\n    </div>\n    <actionsheet :show.sync=\"isShow\" :menus=\"actionsheet\" @menu-click=\"setPayWay\"></actionsheet>\n    <span\n        class=\"ui-btn ui-btn-big\"\n        @click=\"save\"\n    >\n        下单\n    </span>\n\n</div>\n";

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(176)
	__vue_script__ = __webpack_require__(178)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\views\\scene\\orderSuccess.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(184)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\personal\\vue-demo-webpack\\src\\views\\scene\\orderSuccess.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 176 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 177 */,
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <style lang="less">
	//     @import '../../less/lib/mixins.less';
	//     .page-scene-orderSuccess{
	//         .content{
	//             padding-left: 0.65rem;
	//             padding-right: 0.65rem;
	//         }
	//         .header{
	//             text-align: center;
	//             color: #11cd6e;
	//             .rem(font-size, 34);
	//             .rem(padding-top, 10);
	//         }
	//         .subHeader{
	//             text-align: center;
	//             color:#b2b2b2;
	//             .rem(font-size, 24);
	//         }
	//         .jump{
	//             position: absolute;
	//             color:#b2b2b2;
	//             .rem(right, 10);
	//             .rem(top, 10);
	//             .rem(font-size, 24);
	//         }
	//
	//         .imgWrap{
	//             .rem(padding, 10);
	//             img{
	//                 height:100%;
	//                 width:100%;
	//             }
	//         }
	//
	//         .text{
	//             text-align: center;
	//             color:#b2b2b2;
	//             .rem(font-size, 24);
	//
	//             p{
	//             .rem(padding, 5);
	//                 margin:0;
	//             }
	//         }
	//
	//         .userList{
	//
	//             .list{
	//                 .rem(padding, 10, 0);
	//             }
	//                 .item{
	//                     border-bottom:1px solid #dedede;
	//                     .rem(border-bottom-width, 2);
	//                     .rem(padding, 6, 0);
	//                 }
	//                 header{
	//                     .rem(font-size, 24);
	//                 }
	//                 span{
	//                     display: inline-block;
	//                     .rem(height, 66);
	//                     .rem(line-height, 66);
	//                 }
	//                 .ico-xuan{
	//                     .rem(font-size, 40);
	//                     float: left;
	//                     color:#b2b2b2;
	//                     &.cur{
	//                         color:#11cd6e;
	//                      }
	//                 }
	//                 .img{
	//                     float: left;
	//                     .rem(width, 66);
	//                     .border-radius(66);
	//                     .rem(margin, 0, 20);
	//                     img{
	//                         height:100%;
	//                         width:100%;
	//                     }
	//                 }
	//                 .name{
	//                     float: left;
	//                     .rem(font-size, 24);
	//                 }
	//                 .ico-dianhua3{
	//                     .rem(font-size, 60);
	//                     float: right;
	//                     color: #54c5ff;
	//                 }
	//         }
	//
	//         .showOrderDetail{
	//             text-align: center;
	//             font-size: .85rem;
	//             height: 2.4rem;
	//             line-height: 2.3rem;
	//             position: absolute;
	//             bottom: 0;
	//             left: 0;
	//             width: 100%;
	//             color:#11cd6e;
	//             background: #fafafa;
	//             //border-top:1px solid #dedede;
	//             //.rem(border-top-width, 2);
	//         }
	//     }
	//
	// </style>
	//
	// <template>
	//     <div transition="page" class="page-scene-orderSuccess page-current">
	//         <div class="content  showFooter">
	//             <div class="header">下单成功!</div>
	//             <div class="subHeader">需求人数2人</div>
	//             <span class="jump">跳过</span>
	//             <div class="imgWrap">
	//                 <img src="/dist/img/orderSucess.png">
	//             </div>
	//             <div class="userList">
	//                 <div class="text">
	//                     <p>系统已为您推送 203 人</p>
	//                     <p>已报名人数3人</p>
	//                 </div>
	//                 <div class="list">
	//                     <header>剩余选择人数：2人</header>
	//                     <div class="item clearfix">
	//                         <span class="ico ico-xuan"></span>
	//                         <span class="img"><img src="/dist/img/orderSucess.png" alt=""></span>
	//                         <span class="name">林小兔</span>
	//                         <span class="ico ico-dianhua3" @click="getPhone(formData.name)"></span>
	//                     </div>
	//                 </div>
	//             </div>
	//             <!--
	//             <div class="text">
	//                 <p>
	//                     系统已为您推送 203 人，请耐心等待...
	//                 </p>
	//                 <p>
	//                     已报名人数0人
	//                 </p>
	//                 <p>
	//                     若30分钟内订单没有响应，系统将关闭订单
	//                 </p>
	//             </div>
	//             -->
	//         </div>
	//         <span class="showOrderDetail">
	//             查看订单详情
	//         </span>
	//     </div>
	//
	//     <confirm :show.sync="isShowConfirm" @on-confirm="confirm">
	//         <div class="page-scene-orderSuccess-formWrap">
	//             是否要获取{{confirmName}}的联系方式？
	//         </div>
	//     </confirm>
	// </template>
	//
	// <script>
	exports.default = {
	    data: function data() {
	        return {
	            title: null,
	            isShowConfirm: false,
	            confirmName: '',
	            formData: {
	                name: 'xxx'
	            }
	        };
	    },
	
	    route: {
	        data: function data(transition) {
	            var self = this,
	                query = transition.to.query;
	
	            self.title = query.scene_name;
	        }
	    },
	    ready: function ready() {},
	    methods: {
	        confirm: function confirm() {
	            self.isShowConfirm = false;
	        },
	        getPhone: function getPhone(name) {
	            var self = this;
	            self.isShowConfirm = true;
	            self.confirmName = name;
	        }
	    },
	    components: {
	        'headerBar': __webpack_require__(88),
	        'timeConf': __webpack_require__(132),
	        'confirm': __webpack_require__(179)
	    }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(180)
	__vue_script__ = __webpack_require__(182)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\confirm\\index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(183)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\personal\\vue-demo-webpack\\src\\components\\confirm\\index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 180 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 181 */,
/* 182 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <style>
	//   .weui_dialog {
	//     position: fixed;
	//     z-index: 21;
	//     width: 85%;
	//     top: 50%;
	//     left: 50%;
	//     -webkit-transform: translate(-50%,-50%);
	//     transform: translate(-50%,-50%);
	//     background-color: #fafafc;
	//     text-align: center;
	//     border-radius: 3px
	//   }
	//
	//   .weui_dialog_confirm .weui_dialog .weui_dialog_hd {
	//     padding: 1.2em 20px .5em
	//   }
	//
	//   .weui_dialog_confirm .weui_dialog .weui_dialog_bd {
	//     text-align: left
	//   }
	//
	//   .weui_dialog_hd {
	//     padding: 1.2em 0 .5em
	//   }
	//
	//   .weui_dialog_title {
	//     font-weight: 400;
	//     font-size: 17px
	//   }
	//
	//   .weui_dialog_bd {
	//     padding: 0 20px;
	//     font-size: 15px;
	//     color: #888
	//   }
	//
	//   .weui_dialog_ft {
	//     position: relative;
	//     line-height: 42px;
	//     margin-top: 20px;
	//     font-size: 17px;
	//     display: -webkit-box;
	//     display: -webkit-flex;
	//     display: -ms-flexbox;
	//     display: flex
	//   }
	//
	//   .weui_dialog_ft a {
	//     display: block;
	//     -webkit-box-flex: 1;
	//     -webkit-flex: 1;
	//     -ms-flex: 1;
	//     flex: 1;
	//     color: #3cc51f;
	//     text-decoration: none;
	//     -webkit-tap-highlight-color: rgba(0,0,0,0)
	//   }
	//
	//   .weui_dialog_ft a:active {
	//     background-color: #eee
	//   }
	//
	//   .weui_dialog_ft:after {
	//     content: " ";
	//     position: absolute;
	//     left: 0;
	//     top: 0;
	//     width: 100%;
	//     height: 1px;
	//     border-top: 1px solid #d5d5d6;
	//     color: #d5d5d6;
	//     -webkit-transform-origin: 0 0;
	//     transform-origin: 0 0;
	//     -webkit-transform: scaleY(.5);
	//     transform: scaleY(.5)
	//   }
	//
	//   .weui_dialog_confirm .weui_dialog_ft a {
	//     position: relative
	//   }
	//
	//   .weui_dialog_confirm .weui_dialog_ft a:after {
	//     content: " ";
	//     position: absolute;
	//     left: 0;
	//     top: 0;
	//     width: 1px;
	//     height: 100%;
	//     border-left: 1px solid #d5d5d6;
	//     color: #d5d5d6;
	//     -webkit-transform-origin: 0 0;
	//     transform-origin: 0 0;
	//     -webkit-transform: scaleX(.5);
	//     transform: scaleX(.5)
	//   }
	//
	//   .weui_dialog_confirm .weui_dialog_ft a:first-child:after {
	//     display: none
	//   }
	//
	//   .weui_btn_dialog.default {
	//     color: #353535
	//   }
	//
	//   .weui_btn_dialog.primary {
	//     color: #0bb20c
	//   }
	// </style>
	// <template>
	//   <div class="weui_dialog_confirm" v-show="show">
	//     <div class="weui_mask"></div>
	//     <div class="weui_dialog">
	//       <div class="weui_dialog_hd"><strong class="weui_dialog_title">{{title}}</strong></div>
	//       <div class="weui_dialog_bd"><slot></slot></div>
	//       <div class="weui_dialog_ft">
	//         <a href="javascript:;" class="weui_btn_dialog default" @click="onCancel">{{cancelText}}</a>
	//         <a href="javascript:;" class="weui_btn_dialog primary" @click="onConfirm">{{confirmText}}</a>
	//       </div>
	//     </div>
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  props: {
	    show: {
	      type: Boolean,
	      default: false,
	      twoWay: true
	    },
	    title: {
	      type: String,
	      required: true
	    },
	    confirmText: {
	      type: String,
	      default: '确认'
	    },
	    cancelText: {
	      type: String,
	      default: '取消'
	    }
	  },
	  methods: {
	    onConfirm: function onConfirm() {
	      //this.show = false
	      this.$dispatch('on-confirm');
	    },
	    onCancel: function onCancel() {
	      this.show = false;
	      this.$dispatch('on-cancel');
	    }
	  },
	  watch: {
	    show: function show(val) {
	      if (val) {
	        this.$dispatch('show');
	      }
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 183 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"weui_dialog_confirm\" v-show=\"show\">\n  <div class=\"weui_mask\"></div>\n  <div class=\"weui_dialog\">\n    <div class=\"weui_dialog_hd\"><strong class=\"weui_dialog_title\">{{title}}</strong></div>\n    <div class=\"weui_dialog_bd\"><slot></slot></div>\n    <div class=\"weui_dialog_ft\">\n      <a href=\"javascript:;\" class=\"weui_btn_dialog default\" @click=\"onCancel\">{{cancelText}}</a>\n      <a href=\"javascript:;\" class=\"weui_btn_dialog primary\" @click=\"onConfirm\">{{confirmText}}</a>\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 184 */
/***/ function(module, exports) {

	module.exports = "\n<div transition=\"page\" class=\"page-scene-orderSuccess page-current\">\n    <div class=\"content  showFooter\">\n        <div class=\"header\">下单成功!</div>\n        <div class=\"subHeader\">需求人数2人</div>\n        <span class=\"jump\">跳过</span>\n        <div class=\"imgWrap\">\n            <img src=\"/dist/img/orderSucess.png\">\n        </div>\n        <div class=\"userList\">\n            <div class=\"text\">\n                <p>系统已为您推送 203 人</p>\n                <p>已报名人数3人</p>\n            </div>\n            <div class=\"list\">\n                <header>剩余选择人数：2人</header>\n                <div class=\"item clearfix\">\n                    <span class=\"ico ico-xuan\"></span>\n                    <span class=\"img\"><img src=\"/dist/img/orderSucess.png\" alt=\"\"></span>\n                    <span class=\"name\">林小兔</span>\n                    <span class=\"ico ico-dianhua3\" @click=\"getPhone(formData.name)\"></span>\n                </div>\n            </div>\n        </div>\n        <!--\n        <div class=\"text\">\n            <p>\n                系统已为您推送 203 人，请耐心等待...\n            </p>\n            <p>\n                已报名人数0人\n            </p>\n            <p>\n                若30分钟内订单没有响应，系统将关闭订单\n            </p>\n        </div>\n        -->\n    </div>\n    <span class=\"showOrderDetail\">\n        查看订单详情\n    </span>\n</div>\n\n<confirm :show.sync=\"isShowConfirm\" @on-confirm=\"confirm\">\n    <div class=\"page-scene-orderSuccess-formWrap\">\n        是否要获取{{confirmName}}的联系方式？\n    </div>\n</confirm>\n";

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(186)
	__vue_script__ = __webpack_require__(188)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\views\\scene\\address.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(194)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\personal\\vue-demo-webpack\\src\\views\\scene\\address.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 186 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 187 */,
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <style lang="less">
	//     @import '../../less/lib/mixins.less';
	//     .page-scene-address{
	//         .rem(font-size, 30);
	//         .header{
	//             position:relative;
	//             .rem(padding-right, 200);
	//             input{
	//                 .rem(height, 80);
	//                 .rem(line-height, 80);
	//                 .rem(padding, 10);
	//                 .border-radius(8);
	//                 border:1px solid #dedede;
	//                 .rem(border-width, 2);
	//                 width:100%;
	//             }
	//             .btn{
	//                 position: absolute;
	//                 top:0;
	//                 right:0;
	//                 .rem(height, 80);
	//                 .rem(line-height, 80);
	//                 .rem(width, 180);
	//                 text-align: center;
	//                 background: #11cd6e;
	//                 color:#fff;
	//                 .border-radius(8);
	//             }
	//         }
	//         .main{
	//             .tit{
	//                 .rem(padding, 10, 0);
	//             }
	//         }
	//             .item{
	//                 .rem(margin-bottom, 20);
	//                 .rem(padding, 20);
	//                 .border-radius(8);
	//                 background:#fff;
	//
	//                 .pull-left{
	//                     .rem(height, 40);
	//                     .rem(line-height, 40);
	//                 }
	//
	//                 .pull-right{
	//                     color:#b2b2b2;
	//                     .rem(height, 40);
	//                     .rem(line-height, 40);
	//                     span{
	//                         float: left;
	//                     }
	//                     .ico{
	//                         .rem(font-size, 40);
	//                     }
	//                 }
	//             }
	//     }
	// </style>
	//
	// <template>
	//     <div transition="page" class="page-scene-address page-current">
	//         <header-bar :title="title" :back="true"></header-bar>
	//         <div class="content showHeader">
	//             <div class="header">
	//                 <input type="text" v-model="addressText" placeholder="如：厦门市思明区中山路">
	//                 <span class="btn" @click="addAddress">新增位置</span>
	//             </div>
	//             <div class="main">
	//                 <div class="tit">历史位置:</div>
	//                 <div class="item clearfix" v-for="item in addressData">
	//                     <span class="pull-left">{{item.address}}</span>
	//                     <div class="pull-right">
	//                         <span @click="setAddress($index)">
	//                             <span class="ico ico-yixuan"></span>
	//                             <span>选择地址</span>
	//                         </span>
	//                         <span class="ico ico-shanchu" @click="removeAddress($index)"></span>
	//                     </div>
	//                 </div>
	//             </div>
	//         </div>
	//     </div>
	//     <confirm :show.sync="isShowConfirm" @on-confirm="confirm">
	//         确认删除该地址?
	//     </confirm>
	//     <toast :show.sync="isShowToast" :time="500000">{{toastText}}</toast>
	// </template>
	//
	// <script>
	exports.default = {
	    data: function data() {
	        return {
	            title: '位置',
	            formData: {},
	            addressData: [],
	            isShowConfirm: false,
	            removeIndex: null,
	            addressText: null,
	            isShowToast: false,
	            toastText: '请稍等!'
	        };
	    },
	
	    route: {
	        data: function data(transition) {
	            var self = this,
	                query = transition.to.query;
	
	            $.extend(self.formData, query);
	
	            $.ajax({
	                url: "/soytime/address/list",
	                type: 'POST',
	                dataType: 'json',
	                success: function success(data) {
	                    self.addressData = data.result;
	                }
	            });
	        }
	    },
	    methods: {
	        addAddress: function addAddress() {
	            var self = this,
	                map = new AMap.Map("container", {
	                resizeEnable: true
	            });
	
	            self.isShowToast = true;
	
	            map.plugin('AMap.Geocoder', function () {
	                var geocoder = new AMap.Geocoder({
	                    radius: 1000
	                });
	                geocoder.getLocation(self.addressText, function (status, result) {
	                    if (status === 'complete' && result.info === 'OK') {
	                        var data = result.geocodes[0].location;
	                        $.ajax({
	                            url: "/soytime/address/add",
	                            type: 'POST',
	                            dataType: 'json',
	                            data: {
	                                address: self.addressText,
	                                longitude: data.lng,
	                                latitude: data.lat
	                            },
	                            success: function success(data) {
	                                self.addressData.unshift(data.result);
	                                self.isShowToast = false;
	                            }
	                        });
	                    }
	                });
	            });
	        },
	        setAddress: function setAddress(index) {
	            var self = this,
	                data = self.addressData[index];
	            if (self.formData.type == 0) {
	                self.formData.comp_addr = data.address;
	                self.formData.comp_longitude = data.longitude;
	                self.formData.comp_latitude = data.latitude;
	            } else {
	                self.formData.workplace = data.address;
	                self.formData.work_longitude = data.longitude;
	                self.formData.work_latitude = data.latitude;
	            }
	            // 0 是一键下单
	            if (self.formData.pageType == 0) {
	                self.$route.router.go({ name: 'sceneOneKeyOrder', query: self.formData });
	            } else {
	                self.$route.router.go({ name: 'sceneInviteOrder', query: self.formData });
	            }
	        },
	        removeAddress: function removeAddress(index) {
	            var self = this;
	            self.isShowConfirm = true;
	            self.removeIndex = index;
	        },
	        confirm: function confirm() {
	            var self = this;
	
	            $.ajax({
	                url: "/soytime/address/del",
	                type: 'POST',
	                dataType: 'json',
	                data: {
	                    id: self.addressData[self.removeIndex].id
	                },
	                success: function success(data) {
	                    self.addressData.splice(self.removeIndex, 1);
	                    self.isShowConfirm = false;
	                }
	            });
	        }
	    },
	    components: {
	        'headerBar': __webpack_require__(88),
	        'confirm': __webpack_require__(179),
	        'toast': __webpack_require__(189)
	    }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(190)
	__vue_script__ = __webpack_require__(192)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\toast\\index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(193)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\personal\\vue-demo-webpack\\src\\components\\toast\\index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 190 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 191 */,
/* 192 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div id="toast" v-show="show">
	//     <div class="weui_mask_transparent"></div>
	//       <div class="weui_toast" :class="{'weui_toast_forbidden': type == 'warn', 'weui_toast_cancel': type == 'cancel'}">
	//         <i class="weui_icon_toast"></i>
	//         <p class="weui_toast_content"><slot></slot></p>
	//     </div>
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  props: {
	    show: {
	      type: Boolean,
	      default: false,
	      twoWay: true
	    },
	    time: {
	      type: Number,
	      default: 2000
	    },
	    type: {
	      type: String,
	      default: ''
	    }
	  },
	  watch: {
	    show: function show(val) {
	      var _this = this;
	      if (val) {
	        clearTimeout(this.timeout);
	        this.timeout = setTimeout(function () {
	          _this.show = false;
	        }, _this.time);
	      }
	    }
	  }
	};
	// </script>
	// <style>
	//   .weui_toast {
	//     position: fixed;
	//     z-index: 3;
	//     min-width: 7.6em;
	//     top: 180px;
	//     left: 50%;
	//     margin-left: -3.8em;
	//     background: rgba(40,40,40,.75);
	//     text-align: center;
	//     border-radius: 5px;
	//     color: #fff
	//   }
	//
	//   .weui_icon_toast {
	//     margin: 22px 0 0;
	//     display: block
	//   }
	//
	//   .weui_toast_forbidden {
	//   color: #F76260;
	// }
	// /*.weui_toast_cancel .weui_icon_toast:before {*/
	//   /*content: "\EA0D";*/
	// /*}*/
	// /*.weui_toast_forbidden .weui_icon_toast:before {*/
	//   /*content: "\EA0B";*/
	//   /*color: #F76260;*/
	// /*}*/
	// </style>

	/* generated by vue-loader */

/***/ },
/* 193 */
/***/ function(module, exports) {

	module.exports = "\n<div id=\"toast\" v-show=\"show\">\n  <div class=\"weui_mask_transparent\"></div>\n    <div class=\"weui_toast\" :class=\"{'weui_toast_forbidden': type == 'warn', 'weui_toast_cancel': type == 'cancel'}\">\n      <i class=\"weui_icon_toast\"></i>\n      <p class=\"weui_toast_content\"><slot></slot></p>\n  </div>\n</div>\n";

/***/ },
/* 194 */
/***/ function(module, exports) {

	module.exports = "\n<div transition=\"page\" class=\"page-scene-address page-current\">\n    <header-bar :title=\"title\" :back=\"true\"></header-bar>\n    <div class=\"content showHeader\">\n        <div class=\"header\">\n            <input type=\"text\" v-model=\"addressText\" placeholder=\"如：厦门市思明区中山路\">\n            <span class=\"btn\" @click=\"addAddress\">新增位置</span>\n        </div>\n        <div class=\"main\">\n            <div class=\"tit\">历史位置:</div>\n            <div class=\"item clearfix\" v-for=\"item in addressData\">\n                <span class=\"pull-left\">{{item.address}}</span>\n                <div class=\"pull-right\">\n                    <span @click=\"setAddress($index)\">\n                        <span class=\"ico ico-yixuan\"></span>\n                        <span>选择地址</span>\n                    </span>\n                    <span class=\"ico ico-shanchu\" @click=\"removeAddress($index)\"></span>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<confirm :show.sync=\"isShowConfirm\" @on-confirm=\"confirm\">\n    确认删除该地址?\n</confirm>\n<toast :show.sync=\"isShowToast\" :time=\"500000\">{{toastText}}</toast>\n";

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(196)
	__vue_script__ = __webpack_require__(198)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\views\\user.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(199)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\personal\\vue-demo-webpack\\src\\views\\user.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 196 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 197 */,
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <style lang="less">
	//     @import '../less/lib/mixins.less';
	//     .page-user{
	//         .list-block{
	//             .rem(margin, 20, 0);
	//             ul{
	//                 .border-radius(8);
	//             }
	//             .item-inner{
	//                 .rem(margin-right, 20);
	//                 .rem(font-size, 30);
	//             }
	//         }
	//         .userHeader{
	//             background:#fff;
	//             .border-radius(8);
	//             .rem(padding, 20);
	//             .userWrap{
	//                 .photoWrap{
	//                     .rem(width, 120);
	//                     .rem(height, 120);
	//                     .border-radius(120);
	// 					img{
	// 					    width:100%;
	// 						height:100%;
	// 					    .border-radius(120);
	// 					}
	//                 }
	//                 .nameWrap{
	//                     .rem(width, 320);
	//                     .rem(padding-left, 20);
	//                     .name{
	//                         .rem(font-size, 30);
	//                     }
	//                     .auth{
	//                         color:#b2b2b2;
	//                         .rem(font-size, 24);
	//                         .rem(height, 32);
	//                         .rem(line-height, 32);
	//                         .rem(margin-top, 20);
	//                     }
	//                 }
	//             }
	//
	//             .userScore{
	//                 .rem(padding, 20, 0, 0);
	//                 .rem(margin, 20, 0, 0);
	//                 border-top:2px solid #dedede;
	//                 .rem(border-top-width, 2);
	//                 li{
	//                     float:left;
	//                     width:25%;
	//                     .rem(font-size, 30);
	//                     .rem(line-height, 30);
	//                     em{
	//                         font-style:normal;
	//                     }
	//                     span{
	//                         .rem(margin, 0, 8);
	//                     }
	//                     i{
	//
	//                     }
	//                 }
	//             }
	//         }
	//     }
	// </style>
	//
	// <template>
	//     <div class="page-user">
	//         <header-bar :title="title"></header-bar>
	//
	//         <div class="content showHeader showFooter">
	//
	//             <div class="userHeader clearfix">
	//                 <div class="userWrap clearfix">
	//                     <div class="pull-left photoWrap">
	//                         <img :src="formData.head_img_url">
	//                     </div>
	//                     <div class="pull-left nameWrap">
	//                         <div class="name">{{formData.nickname}}</div>
	//                         <div
	//                             class="auth clearfix"
	//                             v-link="{name: 'auth'}"
	//                             v-if="formData.sutdent_auth == 0 || formData.sutdent_auth == 3"
	//                         >
	//                             <i class="icon icon-anquanbaozhang pull-left"></i>
	//                             <span class="pull-left" v-if="formData.sutdent_auth == 0">未认证，点此认证！</span>
	//                             <span class="pull-left" v-if="formData.sutdent_auth == 3">认证失败，点此重新认证！</span>
	//                         </div>
	//                         <div
	//                             class="auth clearfix"
	//                             v-if="formData.sutdent_auth == 1"
	//                         >
	//                             <i class="icon icon-anquanbaozhang2 pull-left"></i>
	//                             <span class="pull-left">认证成功</span>
	//                         </div>
	//                         <div
	//                             class="auth clearfix"
	//                             v-if="formData.sutdent_auth == 2"
	//                         >
	//                             <i class="icon icon-anquanbaozhang pull-left"></i>
	//                             <span class="pull-left">认证中，请耐心等待</span>
	//                         </div>
	//                     </div>
	//                 </div>
	//                 <ul class="userScore clearfix">
	//                     <li>
	//                         <i class="icon icon-xiaolian pull-left"></i>
	//                         <span class="pull-left">好评</span>
	//                         <em class="pull-left">{{formData.goodCount}}</em>
	//                     </li>
	//                     <li>
	//                         <i class="icon icon-cry pull-left"></i>
	//                         <span class="pull-left">中评</span>
	//                         <em class="pull-left">{{formData.cenCount}}</em>
	//                     </li>
	//                     <li>
	//                         <i class="icon icon-kulian pull-left"></i>
	//                         <span class="pull-left">差评</span>
	//                         <em class="pull-left">{{formData.poolCount}}</em>
	//                     </li>
	//                     <li>
	//                         <i class="icon icon-aixin pull-left"></i>
	//                         <span class="pull-left">收藏</span>
	//                         <em class="pull-left">{{formData.collectCount}}</em>
	//                     </li>
	//                 </ul>
	//             </div>
	//
	//             <div class="list-block">
	//                 <ul>
	//                     <li class="item-content item-link" v-link="{name: 'userMoney'}">
	//                         <div class="item-inner">
	//                             <div class="item-title">我的余额</div>
	//                         </div>
	//                     </li>
	//                 </ul>
	//             </div>
	//             <div class="list-block">
	//                 <ul>
	//                     <li class="item-content item-link" v-link="{name: 'userSetting'}">
	//                         <div class="item-inner">
	//                             <div class="item-title">设置</div>
	//                         </div>
	//                     </li>
	//                     <li class="item-content item-link" v-link="{name: 'userWorkServer'}">
	//                         <div class="item-inner">
	//                             <div class="item-title">发布服务</div>
	//                         </div>
	//                     </li>
	//                 </ul>
	//             </div>
	//             <div class="list-block">
	//                 <ul>
	//                     <li class="item-content item-link" v-link="{name: 'userWorkPublish'}">
	//                         <div class="item-inner">
	//                             <div class="item-title">发单任务</div>
	//                         </div>
	//                     </li>
	//                     <li class="item-content item-link" v-link="{name: 'userWorkAccept'}">
	//                         <div class="item-inner">
	//                             <div class="item-title">接单任务</div>
	//                         </div>
	//                     </li>
	//                 </ul>
	//             </div>
	//             <div class="list-block">
	//                 <ul>
	//                     <li class="item-content item-link" v-link="{name: 'service'}">
	//                         <div class="item-inner">
	//                             <div class="item-title">在线客服</div>
	//                         </div>
	//                     </li>
	//                 </ul>
	//             </div>
	//         </div>
	//     </div>
	// </template>
	//
	// <script>
	exports.default = {
		data: function data() {
			return {
				title: '我的',
				formData: {}
			};
		},
	
		route: {
			data: function data(transition) {
				var self = this;
	
				$.ajax({
					url: "/soytime/account/myInfo",
					type: 'POST',
					dataType: 'json',
					success: function success(data) {
						self.formData = data.result;
					}
				});
			}
		},
		components: {
			'headerBar': __webpack_require__(88)
		}
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 199 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"page-user\">\n    <header-bar :title=\"title\"></header-bar>\n    \n    <div class=\"content showHeader showFooter\">\n    \n        <div class=\"userHeader clearfix\">\n            <div class=\"userWrap clearfix\">\n                <div class=\"pull-left photoWrap\">\n                    <img :src=\"formData.head_img_url\">\n                </div>\n                <div class=\"pull-left nameWrap\">\n                    <div class=\"name\">{{formData.nickname}}</div>\n                    <div \n                        class=\"auth clearfix\"\n                        v-link=\"{name: 'auth'}\" \n                        v-if=\"formData.sutdent_auth == 0 || formData.sutdent_auth == 3\"\n                    >\n                        <i class=\"icon icon-anquanbaozhang pull-left\"></i>\n                        <span class=\"pull-left\" v-if=\"formData.sutdent_auth == 0\">未认证，点此认证！</span>\n                        <span class=\"pull-left\" v-if=\"formData.sutdent_auth == 3\">认证失败，点此重新认证！</span>\n                    </div>\n                    <div\n                        class=\"auth clearfix\"\n                        v-if=\"formData.sutdent_auth == 1\"\n                    >\n                        <i class=\"icon icon-anquanbaozhang2 pull-left\"></i>\n                        <span class=\"pull-left\">认证成功</span>\n                    </div>\n                    <div\n                        class=\"auth clearfix\"\n                        v-if=\"formData.sutdent_auth == 2\"\n                    >\n                        <i class=\"icon icon-anquanbaozhang pull-left\"></i>\n                        <span class=\"pull-left\">认证中，请耐心等待</span>\n                    </div>\n                </div>\n            </div>\n            <ul class=\"userScore clearfix\">\n                <li>\n                    <i class=\"icon icon-xiaolian pull-left\"></i>\n                    <span class=\"pull-left\">好评</span>\n                    <em class=\"pull-left\">{{formData.goodCount}}</em>\n                </li>\n                <li>\n                    <i class=\"icon icon-cry pull-left\"></i>\n                    <span class=\"pull-left\">中评</span>\n                    <em class=\"pull-left\">{{formData.cenCount}}</em>\n                </li>\n                <li>\n                    <i class=\"icon icon-kulian pull-left\"></i>\n                    <span class=\"pull-left\">差评</span>\n                    <em class=\"pull-left\">{{formData.poolCount}}</em>\n                </li>\n                <li>\n                    <i class=\"icon icon-aixin pull-left\"></i>\n                    <span class=\"pull-left\">收藏</span>\n                    <em class=\"pull-left\">{{formData.collectCount}}</em>\n                </li>\n            </ul>\n        </div>\n\n        <div class=\"list-block\">\n            <ul>\n                <li class=\"item-content item-link\" v-link=\"{name: 'userMoney'}\">\n                    <div class=\"item-inner\">\n                        <div class=\"item-title\">我的余额</div>\n                    </div>\n                </li>\n            </ul>\n        </div>\n        <div class=\"list-block\">\n            <ul>\n                <li class=\"item-content item-link\" v-link=\"{name: 'userSetting'}\">\n                    <div class=\"item-inner\">\n                        <div class=\"item-title\">设置</div>\n                    </div>\n                </li>\n                <li class=\"item-content item-link\" v-link=\"{name: 'userWorkServer'}\">\n                    <div class=\"item-inner\">\n                        <div class=\"item-title\">发布服务</div>\n                    </div>\n                </li>\n            </ul>\n        </div>\n        <div class=\"list-block\">\n            <ul>\n                <li class=\"item-content item-link\" v-link=\"{name: 'userWorkPublish'}\">\n                    <div class=\"item-inner\">\n                        <div class=\"item-title\">发单任务</div>\n                    </div>\n                </li>\n                <li class=\"item-content item-link\" v-link=\"{name: 'userWorkAccept'}\">\n                    <div class=\"item-inner\">\n                        <div class=\"item-title\">接单任务</div>\n                    </div>\n                </li>\n            </ul>\n        </div>\n        <div class=\"list-block\">\n            <ul>\n                <li class=\"item-content item-link\" v-link=\"{name: 'service'}\">\n                    <div class=\"item-inner\">\n                        <div class=\"item-title\">在线客服</div>\n                    </div>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(201)
	__vue_script__ = __webpack_require__(203)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\views\\user\\setting.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(209)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\personal\\vue-demo-webpack\\src\\views\\user\\setting.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 201 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 202 */,
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <style lang="less">
	// @import '../../less/lib/mixins.less';
	// .page-user-setting{
	//     .block{
	//         background:#fff;
	//
	//         .rem(padding, 26, 16);
	//         .rem(margin-bottom, 20);
	//
	//         .clearfix{
	//             border-bottom:2px solid #dedede;
	//             .rem(border-bottom-width, 2);
	//             .rem(padding, 20, 0);
	//             .rem(font-size, 30);
	//             .rem(line-height, 40);           
	//
	//             &:first-child{
	//                 .rem(padding-top, 0);
	//             }
	//
	//             &:last-child{
	//                 border-bottom:0 none;
	//                 .rem(padding-bottom, 0);
	//             }
	//
	//             input{
	//                 border:0 none;
	//                 text-align:right;
	//             }
	//         }
	//     }
	//
	//     .photoName{
	//         .rem(height, 120);
	//         .rem(line-height, 120);
	//     }
	//
	//     .photoWrap{
	//         .rem(width, 120);
	//         .rem(height, 120);
	//         .border-radius(120);
	//         img{
	//             width:100%;
	//             height:100%;
	//             .border-radius(120);
	//         }
	//     }
	// }
	// </style>
	//
	// <template>
	//     <div class="page-user page-user-setting" transition="page">
	//
	//         <header-bar :title="title" back="true"></header-bar>
	//
	//         <div class="content showHeader showFooter">
	//
	//             <div class="block">
	//                 <div class="clearfix">
	//                     <div class="pull-left photoName">头像</div>
	//                     <div class="pull-right photoWrap">
	//                         <img :src="formData.head_img_url">
	//                     </div>
	//                 </div>
	//                 <div class="clearfix">
	//                     <div class="pull-left">姓名 </div>
	//                     <div class="pull-right">
	//                         <input type="text" v-model="formData.nickname" />
	//                     </div>
	//                 </div>
	//                 <div class="clearfix">
	//                     <div class="pull-left">性别</div>
	//                     <div class="pull-right">{{formData.sex}}</div>
	//                 </div>
	//                 <div class="clearfix">
	//                     <div class="pull-left">生日</div>
	//                     <div class="pull-right">
	//                         <input type="text" id="datetime-picker" v-model="formData.birthday" mobiscroll-datetime="settings" />
	//                     </div>
	//                 </div>
	//                 <div class="clearfix">
	//                     <div class="pull-left">身高 </div>
	//                     <div class="pull-right">
	//                         <input type="text" v-model="formData.height" />
	//                     </div>
	//                 </div>
	//             </div>
	//
	//             <div class="block">
	//                 <bind-mobile :mobile.sync="formData.mobile"></bind-mobile>
	//                 <div class="clearfix">
	//                     <div class="pull-left">邮箱</div>
	//                     <div class="pull-right">
	//                         <input type="text" v-model="formData.email" />
	//                     </div>
	//                 </div>
	//                 <div class="clearfix">
	//                     <div class="pull-left">QQ</div>
	//                     <div class="pull-right">
	//                         <input type="text" v-model="formData.qq" />
	//                     </div>
	//                 </div>
	//             </div>
	//
	//             <div class="block">
	//                 <div class="clearfix">
	//                     <div class="pull-left">订单接送提醒</div>
	//                     <div class="pull-right">
	//                         <label class="label-switch">
	//                             <input type="checkbox" v-model="formData.open" >
	//                             <div class="checkbox"></div>
	//                         </label>
	//                     </div>
	//                 </div>
	//                 <time-conf :timer.sync="formData.timeConf"></time-conf>
	//             </div>
	//
	//         </div>
	//         <span
	//             class="ui-btn ui-btn-big"
	//             @click="save"
	//         >
	//             保存
	//         </span>
	//     </div>
	// </template>
	//
	// <script>
	exports.default = {
	    data: function data() {
	        return {
	            title: '设置',
	            tmpData: {},
	            formData: {}
	        };
	    },
	    ready: function ready() {
	        var self = this;
	
	        $.ajax({
	            url: "/soytime/account/getSettingInfo",
	            type: 'POST',
	            dataType: 'json',
	            success: function success(data) {
	                self.formData = data.result;
	                self.$store.state.getScrollerTime('#datetime-picker', 0);
	            }
	        });
	    },
	
	    methods: {
	        save: function save() {
	            var self = this;
	            //$.showPreloader('正在努力提交...')
	            $.ajax({
	                url: "/soytime/account/saveSetInfo",
	                type: 'POST',
	                dataType: 'json',
	                data: self.formData,
	                success: function success(data) {
	                    if (data.success) {
	                        //$.hidePreloader();
	                        self.$route.router.go('/user');
	                    }
	                },
	                error: function error() {
	                    //$.hidePreloader();
	                    // $.toast('网络不给力，请尝试重新提交！');
	                }
	            });
	        }
	    },
	    components: {
	        'headerBar': __webpack_require__(88),
	        'timeConf': __webpack_require__(132),
	        'bindMobile': __webpack_require__(204)
	    }
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(205)
	__vue_script__ = __webpack_require__(207)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\bindMobile.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(208)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\personal\\vue-demo-webpack\\src\\components\\bindMobile.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 205 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 206 */,
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <style lang="less">
	// @import '../less/lib/mixins.less';
	// .page-user-formWrap{
	//     text-align:left;
	//     position:relative;
	//
	//     div{
	//         .rem(height, 80);
	//         .rem(line-height, 40) !important;
	//         .rem(padding, 20, 0) !important;
	//         .rem(font-size, 24);
	//     }
	//
	//     .clearfix{
	//
	//     }
	//
	//     .mobileWrap{
	//         border-bottom:1px solid #dedede;
	//         .rem(border-bottom-width, 2);
	//     }
	//
	//
	//     input{
	//         display:inline-block;
	//         border:0 none;
	//         background:none;
	//         text-align: left !important;
	//         .rem(height, 40);
	//         .rem(line-height, 40);
	//
	//         &#mobile{
	//             .rem(width, 300);
	//         }
	//         &#code{
	//             .rem(width, 150);
	//         }
	//     }
	//
	//     label{
	//         display:inline-block;
	//         .rem(height, 40);
	//         .rem(line-height, 40);
	//         border-right:1px solid #dedede;
	//         .rem(border-right-width, 2);
	//         .rem(width, 120);
	//     }
	//
	//     #getCode{
	//         background:#54c5ff;
	//         color:#fff;
	//         text-align:center;
	//         .rem(height, 40);
	//         .rem(line-height, 40);
	//         .rem(padding, 0, 20);
	//         .border-radius(8);
	//
	//         &.disable{
	//             background:#b2b2b2
	//         }
	//     }
	//     .toastWrap{
	//         display:block;
	//         position: absolute;
	//         top:20%;
	//         top:20%;
	//         width:100%;
	//         .rem(padding, 30);
	//     }
	//     .toast{
	//         display:block;
	//         width:100%;
	//         text-align:center;
	//     }
	// }   
	// </style>
	//
	// <template>
	//     <div class="item clearfix" @click="showMobile">
	//         <span class="pull-left">手机号</span>
	//         <span class="pull-right">{{mobile}}</span>
	//     </div>
	//     <confirm :show.sync="isShowConfirm" @on-confirm="confirm">
	//         <div class="page-user-formWrap">
	//             <div class="mobileWrap clearfix">
	//                 <label class="pull-left">手机</label>
	//                 <input class="pull-left" type="text" id="mobile" placeholder="手机号" v-model="mobile" />
	//             </div>
	//             <div class="codeWrap clearfix">
	//                 <label class="pull-left">验证码</label>
	//                 <input class="pull-left" type="text" id="code" placeholder="验证码"  />
	//                 <span class="pull-right" id="getCode">
	//                     <span id="getCodeText">获取验证码</span>
	//                     <span id="getCodeTime"></span>
	//                 </span>
	//             </div>
	//         </div>
	//     </confirm>
	//     <script type="text/html" id="toastWrap">
	//         <span class="toastWrap">
	//             <span id="toast" class="toast">
	//                 [[content]]
	//             </span>
	//         </span>
	//     </script>
	// 	<script type="text/html" id="mobileWrap">
	//         <div class="page-user-formWrap">
	//             <div class="mobileWrap clearfix">
	//                 <label class="pull-left">手机</label>
	//                 <input class="pull-left" type="text" id="mobile" placeholder="手机号" v-model="mobile" />
	//             </div>
	//             <div class="codeWrap clearfix">
	//                 <label class="pull-left">验证码</label>
	//                 <input class="pull-left" type="text" id="code" placeholder="验证码"  />
	//                 <span class="pull-right" id="getCode">
	//                     <span id="getCodeText">获取验证码</span>
	//                     <span id="getCodeTime"></span>
	//                 </span>
	//             </div>
	//         </div>
	// 	</script>
	// </template>
	//
	// <script>
	exports.default = {
	    replace: true,
	    props: ['mobile'],
	    data: function data() {
	        return {
	            isShowConfirm: false,
	            isDisable: false
	        };
	    },
	
	    methods: {
	        confirm: function confirm() {
	            var self = this;
	
	            if (self.isDisable) {
	                return;
	            }
	
	            var mobile = $('#mobile').val(),
	                code = $('#code').val(),
	                obj = {
	                mobile: mobile,
	                code: code
	            };
	
	            if (!/1[34578]{1}\d{9}$/.test(mobile) || !code) {
	                self.isDisable = false;
	                self.toast('请填写正确的信息！');
	                return;
	            } else {
	                self.isDisable = true;
	            }
	
	            $.ajax({
	                url: "/soytime/account/saveMobile",
	                type: 'POST',
	                data: obj,
	                dataType: 'json',
	                success: function success(data) {
	                    if (data.success) {
	                        self.mobile = mobile;
	                        self.isShowConfirm = true;
	                    } else {
	                        self.toast(data.result);
	                    }
	                },
	                error: function error() {
	                    self.toast('网络不给力，请重新尝试！');
	                }
	            });
	        },
	        toast: function toast(content) {
	            var reg = /\[\[content\]\]/g,
	                toastHtml = $('#toastWrap').html(),
	                formWrap = $('.page-user-formWrap'),
	                html = toastHtml.replace(reg, content),
	                toastObj = $('#toast');
	
	            if (!toastObj.length) {
	                formWrap.append(html);
	            } else {
	                toastObj.html(content);
	            }
	            setTimeout(function () {
	                formWrap.find('.toastWrap').remove();
	            }, 2000);
	        },
	        showMobile: function showMobile() {
	            var self = this;
	
	            self.isShowConfirm = true;
	
	            $('body').on('click', '#getCode', function () {
	                var mobile = $('#mobile').val(),
	                    getCodeBtn = $('#getCode'),
	                    getCodeText = $('#getCodeText'),
	                    getCodeTime = $('#getCodeTime'),
	                    that = $(this);
	
	                if (that.hasClass('disable')) {
	                    return;
	                }
	
	                if (!/1[34578]{1}\d{9}$/.test(mobile)) {
	                    that.addClass('disable');
	                    self.toast('请填写正确的手机号');
	                    self.isDisable = true;
	                    return;
	                } else {
	                    that.removeClass('disable');
	                    self.isDisable = false;
	                }
	
	                $.ajax({
	                    url: "/soytime/account/getMobileCode",
	                    type: 'POST',
	                    data: {
	                        mobile: mobile
	                    },
	                    dataType: 'json',
	                    success: function success(data) {
	                        if (data.success) {
	                            (function () {
	                                var i = 60,
	                                    timer = null;
	                                getCodeText.html('重新获取');
	                                getCodeTime.html('(60)');
	                                timer = setInterval(function () {
	                                    getCodeTime.html('(' + --i + ')');
	                                    if (i === 0) {
	                                        clearInterval(timer);
	                                        self.isDisable = false;
	                                        that.removeClass('disable');
	                                        getCodeTime.html('');
	                                    };
	                                }, 1000);
	                            })();
	                        } else {
	                            self.isDisable = true;
	                            that.addClass('disable');
	                            self.toast(data.result);
	                        }
	                    },
	                    error: function error() {
	                        self.toast('网络不给力，请重新尝试！');
	                    }
	                });
	            });
	        }
	    },
	    components: {
	        'confirm': __webpack_require__(179)
	    }
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 208 */
/***/ function(module, exports) {

	module.exports = "\n    <div class=\"item clearfix\" @click=\"showMobile\">\n        <span class=\"pull-left\">手机号</span>\n        <span class=\"pull-right\">{{mobile}}</span>\n    </div>\n    <confirm :show.sync=\"isShowConfirm\" @on-confirm=\"confirm\">\n        <div class=\"page-user-formWrap\">\n            <div class=\"mobileWrap clearfix\">\n                <label class=\"pull-left\">手机</label>\n                <input class=\"pull-left\" type=\"text\" id=\"mobile\" placeholder=\"手机号\" v-model=\"mobile\" />\n            </div>\n            <div class=\"codeWrap clearfix\">\n                <label class=\"pull-left\">验证码</label>\n                <input class=\"pull-left\" type=\"text\" id=\"code\" placeholder=\"验证码\"  />\n                <span class=\"pull-right\" id=\"getCode\">\n                    <span id=\"getCodeText\">获取验证码</span>\n                    <span id=\"getCodeTime\"></span>\n                </span>\n            </div>\n        </div>\n    </confirm>\n    <script type=\"text/html\" id=\"toastWrap\">\n        <span class=\"toastWrap\">\n            <span id=\"toast\" class=\"toast\">\n                [[content]]\n            </span>\n        </span>\n    </script>\n\t<script type=\"text/html\" id=\"mobileWrap\">\n        <div class=\"page-user-formWrap\">\n            <div class=\"mobileWrap clearfix\">\n                <label class=\"pull-left\">手机</label>\n                <input class=\"pull-left\" type=\"text\" id=\"mobile\" placeholder=\"手机号\" v-model=\"mobile\" />\n            </div>\n            <div class=\"codeWrap clearfix\">\n                <label class=\"pull-left\">验证码</label>\n                <input class=\"pull-left\" type=\"text\" id=\"code\" placeholder=\"验证码\"  />\n                <span class=\"pull-right\" id=\"getCode\">\n                    <span id=\"getCodeText\">获取验证码</span>\n                    <span id=\"getCodeTime\"></span>\n                </span>\n            </div>\n        </div>\n\t</script>\n";

/***/ },
/* 209 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"page-user page-user-setting\" transition=\"page\">\n\n    <header-bar :title=\"title\" back=\"true\"></header-bar>\n    \n    <div class=\"content showHeader showFooter\">\n        \n        <div class=\"block\">\n            <div class=\"clearfix\">\n                <div class=\"pull-left photoName\">头像</div>\n                <div class=\"pull-right photoWrap\">\n                    <img :src=\"formData.head_img_url\">\n                </div>\n            </div>\n            <div class=\"clearfix\">\n                <div class=\"pull-left\">姓名 </div>\n                <div class=\"pull-right\">\n                    <input type=\"text\" v-model=\"formData.nickname\" />\n                </div>\n            </div>\n            <div class=\"clearfix\">\n                <div class=\"pull-left\">性别</div>\n                <div class=\"pull-right\">{{formData.sex}}</div>\n            </div>\n            <div class=\"clearfix\">\n                <div class=\"pull-left\">生日</div>\n                <div class=\"pull-right\">\n                    <input type=\"text\" id=\"datetime-picker\" v-model=\"formData.birthday\" mobiscroll-datetime=\"settings\" />\n                </div>\n            </div>\n            <div class=\"clearfix\">\n                <div class=\"pull-left\">身高 </div>\n                <div class=\"pull-right\">\n                    <input type=\"text\" v-model=\"formData.height\" />\n                </div>\n            </div>\n        </div>\n        \n        <div class=\"block\">\n            <bind-mobile :mobile.sync=\"formData.mobile\"></bind-mobile>\n            <div class=\"clearfix\">\n                <div class=\"pull-left\">邮箱</div>\n                <div class=\"pull-right\">\n                    <input type=\"text\" v-model=\"formData.email\" />\n                </div>\n            </div>\n            <div class=\"clearfix\">\n                <div class=\"pull-left\">QQ</div>\n                <div class=\"pull-right\">\n                    <input type=\"text\" v-model=\"formData.qq\" />\n                </div>\n            </div>\n        </div>\n        \n        <div class=\"block\">\n            <div class=\"clearfix\">\n                <div class=\"pull-left\">订单接送提醒</div>\n                <div class=\"pull-right\">\n                    <label class=\"label-switch\">\n                        <input type=\"checkbox\" v-model=\"formData.open\" >\n                        <div class=\"checkbox\"></div>\n                    </label>\n                </div>\n            </div>\n            <time-conf :timer.sync=\"formData.timeConf\"></time-conf>\n        </div>\n        \n    </div>\n    <span \n        class=\"ui-btn ui-btn-big\"\n        @click=\"save\"\n    >\n        保存\n    </span>\n</div>\n";

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(211)
	__vue_script__ = __webpack_require__(214)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\views\\user\\money.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(215)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\personal\\vue-demo-webpack\\src\\views\\user\\money.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 211 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 212 */,
/* 213 */,
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <style lang="less">
	// @import '../../less/lib/mixins.less';
	// .page-user-money{
	//     .moneyHeader{
	//         .rem(height, 400);
	//         background:url(../../img/moneyBg.jpg) no-repeat;
	//         background-size:100% 100%;
	//         position:relative;
	//
	//         header{
	//             text-align:center;
	//             color:#fff;
	//             .rem(padding, 110, 0, 0);
	//             span{
	//                 position:relative;
	//                 .rem(font-size, 70);
	//             }
	//             i{
	//                 position:absolute;
	//                 left:0;
	//                 font-style: normal;
	//                 .rem(top, -30);
	//                 .rem(font-size, 20);
	//             }
	//         }
	//
	//         footer{
	//             position:absolute;
	//             bottom:0;
	//             left:0;
	//             width:100%;
	//
	//             span{
	//                 position:relative;
	//                 z-index:1;
	//                 float:left;
	//                 width:50%;
	//                 text-align:center;
	//                 .rem(padding, 30);
	//                 .rem(font-size, 34);
	//                 .rem(margin, 20, 0);
	//                 &:last-child{
	//                     border-left:1px solid #dedede;
	//                 }
	//                 &:first-child{
	//                     border-right:1px solid #dedede;
	//                 }
	//             }
	//
	//             div{
	//                 background:#fff;
	//                 position:absolute;
	//                 left:0;
	//                 top:0;
	//                 height:100%;
	//                 width:100%;
	//                 .opacity(0.5);
	//                 z-index:0;
	//             }
	//         }
	//     }
	//     .moneyList{
	//         background:#fff;
	//
	//         header{
	//             background:#fafafa;
	//             border-bottom:2px solid #f1f1f1;
	//             .rem(border-bottom-width, 2);
	//             .rem(height, 64);
	//             .rem(line-height, 64);
	//             .rem(font-size, 30);
	//             .rem(padding, 0, 30);
	//         }
	//
	//         .pull-refresh{
	//             .rem(margin, 0, 30);
	//             color:#888;
	//         }
	//
	//         .item{
	//             border-bottom:2px solid #dedede;
	//             .rem(border-bottom-width, 2);
	//             .rem(padding, 15, 0);
	//         }
	//     }
	// }
	// </style>
	//
	// <template>
	//     <div class="page-user page-user-money pullRreshwrap" transition="page">
	//         <header-bar :title="title" back="true"></header-bar>
	//         <div class="content showHeaderNopading">
	//             <div class="moneyHeader">
	//                 <header>
	//                     <span><i>账户余额</i>{{formData.balance}}</span>
	//                 </header>
	//                 <footer class="clearfix">
	//                     <div></div>
	//                     <span>转入</span>
	//                     <span>转出</span>
	//                 </footer>
	//             </div>
	//             <div class="moneyList">
	//                 <header>交易记录</header>
	//                 <pull-refresh @on-scroll-lodding="getData">
	//                     <li class="item clearfix" v-for="tradeRecord in formData.tradeRecord">
	//                         {{typeText[ tradeRecord.type - 1]}}
	//                         {{tradeRecord.create_time}}
	//                         {{tradeRecord.amount}}元
	//                     </li>
	//                 </pull-refresh>
	//             </div>
	//         </div>
	//     </div>
	// </template>
	//
	// <script>
	exports.default = {
	    data: function data() {
	        return {
	            title: '我的余额',
	            userInfo: {},
	            currentPage: 1,
	            typeText: ['充值', '取现', '下单', '接单', '接单红包', '分享红包', '转账'],
	            formData: {
	                balance: 0,
	                tradeRecord: []
	            }
	        };
	    },
	
	    route: {
	        data: function data(transition) {
	            var self = this;
	
	            $.ajax({
	                url: "/soytime/account/balance",
	                type: 'POST',
	                dataType: 'json',
	                success: function success(data) {
	                    $.extend(self.formData, data.result);
	                },
	                error: function error() {
	                    $.toast('网络不给力，请重新尝试！');
	                }
	            });
	        }
	    },
	    methods: {
	        getData: function getData(index, callback) {
	            var self = this;
	            $.ajax({
	                url: "/soytime/account/tradeRecord",
	                type: 'POST',
	                data: {
	                    currentPage: index
	                },
	                dataType: 'json',
	                success: function success(data) {
	                    var arr = data.result,
	                        len = arr.length;
	                    for (var i = 0; i < len; i++) {
	                        self.formData.tradeRecord.push(arr[i]);
	                    }
	                    //self.formData = self.formData.concat(data.result);
	                    callback && callback();
	                }
	            });
	        }
	    },
	    components: {
	        'headerBar': __webpack_require__(88),
	        'pullRefresh': __webpack_require__(122)
	    }
	};
	// </script>
	//
	//
	//
	//
	//
	//
	//
	//
	//

	/* generated by vue-loader */

/***/ },
/* 215 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"page-user page-user-money pullRreshwrap\" transition=\"page\">\n    <header-bar :title=\"title\" back=\"true\"></header-bar>\n    <div class=\"content showHeaderNopading\">\n        <div class=\"moneyHeader\">\n            <header>\n                <span><i>账户余额</i>{{formData.balance}}</span>\n            </header>\n            <footer class=\"clearfix\">\n                <div></div>\n                <span>转入</span>\n                <span>转出</span>\n            </footer>\n        </div>\n        <div class=\"moneyList\">\n            <header>交易记录</header>\n            <pull-refresh @on-scroll-lodding=\"getData\">\n                <li class=\"item clearfix\" v-for=\"tradeRecord in formData.tradeRecord\">\n                    {{typeText[ tradeRecord.type - 1]}}\n                    {{tradeRecord.create_time}}\n                    {{tradeRecord.amount}}元\n                </li>\n            </pull-refresh>\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(217)
	__vue_script__ = __webpack_require__(219)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\views\\user\\work\\server.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(220)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\personal\\vue-demo-webpack\\src\\views\\user\\work\\server.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 217 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 218 */,
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <style lang="less">
	//     @import '../../../less/lib/mixins.less';
	//     .page-user-work-server{
	//         .content{
	//             padding-left:0;
	//             padding-right:0;
	//         }
	//
	//             .userHeader{
	//                 .rem(max-height, 350);
	//                 overflow:hidden;
	//                 position:relative;
	//
	//                 img{
	//                     width:100%;
	//                 }
	//
	//                 .userWrap{
	//                     position:absolute;
	//                     left:0;
	//                     width:100%;
	//                     .rem(top, 70);
	//
	//                     .btn{
	//                         .rem(width, 150);
	//                         .rem(height, 150);
	//                         margin:0 auto;
	//                         position:relative;
	//                         text-align:center;
	//
	//                         .radius{
	//                             width:100%;
	//                             height:100%;
	//                             background:#fff;
	//                             position:absolute;
	//                             .border-radius(150);
	//                             .opacity(0.5);
	//                             top:0;
	//                             left:0;
	//                             z-index: 1;
	//                         }
	//                         .ico{
	//                             text-align:center;
	//                             position:absolute;
	//                             .rem(font-size, 50);
	//                             .rem(line-height,150);
	//                             .rem(width, 150);
	//                             .rem(height, 150);
	//                         }
	//                         .text{
	//                             .rem(padding, 100, 0, 0);
	//                             .rem(font-size, 24);
	//                             position: relative;
	//                             z-index: 2;
	//                             color: #fff;
	//                         }
	//                     }
	//
	//                     .name{
	//                         text-align:center;
	//                         .rem(font-size, 50);
	//                         color:#fff;
	//                     }
	//                 }
	//             }
	//
	//             .block{
	//                 background:#fff;
	//                 .rem(padding, 26, 16);
	//                 .rem(margin, 0, 26, 20);
	//
	//                 .header{
	//                     .rem(font-size, 30);
	//                 }
	//
	//                 textarea{
	//                     width:100%;
	//                     border:0 none;
	//                     .rem(font-size, 30);
	//                 }
	//             }
	//     }
	// </style>
	//
	// <template>
	//     <div class="page-user-work-server">
	//         <header-bar :title="title" back="true"></header-bar>
	//
	//         <div class="content showHeaderNopading showFooter">
	//
	//             <div class="userHeader">
	//                 <img src="/dist/defaultImg/serverDefault.jpg" v-if="!formData.photo_url" />
	//                 <img :src="formData.photo_url" v-else />
	//                 <div class="userWrap">
	//                     <div class="btn">
	//                         <div class="radius"></div>
	//                         <div class="ico ico-anonymous"></div>
	//                         <div class="text">添加照片</div>
	//                     </div>
	//                     <div class="name">{{formData.usernick}}</div>
	//                 </div>
	//             </div>
	//
	//             <div class="block">
	//                 <div class="header">请选择工作类别(可多选)</div>
	//                 <scene-type
	//                     :scene-list="indexData.sceneList"
	//                     :scene-ids.sync="formData.sceneIds"
	//                 ></scene-type>
	//             </div>
	//
	//             <div class="block">
	//                 <div class="header">个人描述</div>
	//                 <textarea placeholder="请填写您的服务描述！">{{formData.detail}}</textarea>
	//             </div>
	//
	//             <div class="block">
	//                 <div class="header">上传照片</div>
	//                 <ul class="clearfix">
	//                     <li class="skillImgs" v-for="item in skillImgs">
	//                         <img :src="item.img_url" />
	//                     </li>
	//                     <li v-if="skillImgs.length >= 3">
	//                         增加照片
	//                     </li>
	//                 </ul>
	//             </div>
	//
	//             <div class="block">
	//                 <div class="header">工作区域(选择)</div>
	//             </div>
	//
	//             <div class="block">
	//                 <div class="header">工作时间</div>
	//                 <time-conf :timer.sync="formData.timeConf"></time-conf>
	//             </div>
	//         </div>
	//
	//         <span
	//             class="ui-btn ui-btn-big"
	//         >
	//             发布
	//         </span>
	//
	//     </div>
	// </template>
	//
	// <script>
	exports.default = {
	    data: function data() {
	        return {
	            title: '发布服务',
	            indexData: indexData,
	            userInfo: {},
	            formData: {}
	        };
	    },
	    ready: function ready() {
	        var self = this;
	        $.ajax({
	            url: "/soytime/skill/myInfo",
	            type: 'POST',
	            dataType: 'json',
	            success: function success(data) {
	                self.formData = data.result;
	            }
	        });
	    },
	
	    methods: {
	        getMap: function getMap() {
	            var self = this;
	            self.$route.router.go('/auth/selectMap?' + $.param(self.formData));
	        }
	    },
	    components: {
	        'headerBar': __webpack_require__(88),
	        'timeConf': __webpack_require__(132),
	        'sceneType': __webpack_require__(164)
	    }
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 220 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"page-user-work-server\">\n    <header-bar :title=\"title\" back=\"true\"></header-bar>\n    \n    <div class=\"content showHeaderNopading showFooter\">\n\n        <div class=\"userHeader\">\n            <img src=\"/dist/defaultImg/serverDefault.jpg\" v-if=\"!formData.photo_url\" />\n            <img :src=\"formData.photo_url\" v-else />\n            <div class=\"userWrap\">\n                <div class=\"btn\">\n                    <div class=\"radius\"></div>\n                    <div class=\"ico ico-anonymous\"></div>\n                    <div class=\"text\">添加照片</div>\n                </div>\n                <div class=\"name\">{{formData.usernick}}</div>\n            </div>\n        </div>\n    \n        <div class=\"block\">\n            <div class=\"header\">请选择工作类别(可多选)</div>\n            <scene-type \n                :scene-list=\"indexData.sceneList\"\n                :scene-ids.sync=\"formData.sceneIds\"\n            ></scene-type>\n        </div>\n        \n        <div class=\"block\">\n            <div class=\"header\">个人描述</div>\n            <textarea placeholder=\"请填写您的服务描述！\">{{formData.detail}}</textarea>\n        </div>\n        \n        <div class=\"block\">\n            <div class=\"header\">上传照片</div>\n            <ul class=\"clearfix\">\n                <li class=\"skillImgs\" v-for=\"item in skillImgs\">\n                    <img :src=\"item.img_url\" />\n                </li>\n                <li v-if=\"skillImgs.length >= 3\">\n                    增加照片\n                </li>\n            </ul>\n        </div>\n        \n        <div class=\"block\">\n            <div class=\"header\">工作区域(选择)</div>\n        </div>\n        \n        <div class=\"block\">\n            <div class=\"header\">工作时间</div>\n            <time-conf :timer.sync=\"formData.timeConf\"></time-conf>\n        </div>\n    </div>\n    \n    <span \n        class=\"ui-btn ui-btn-big\"\n    >\n        发布\n    </span>\n    \n</div>\n";

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(222)
	__vue_script__ = __webpack_require__(224)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\views\\user\\work\\publish.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(225)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\personal\\vue-demo-webpack\\src\\views\\user\\work\\publish.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 222 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 223 */,
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <style lang="less">
	//     @import '../../../less/lib/mixins.less';
	//     .page-user-work-publish{
	//         .filter{
	//             position: absolute;
	//             left: 0;
	//             top: 2.2rem;
	//             z-index: 10;
	//             height: 2.2rem;
	//             background:#fff;
	//             width:100%;
	//             border-bottom:2px solid #b2b2b2;
	//             .rem(border-bottom-width, 2);
	//
	//             li{
	//                 width:33.333%;
	//                 float:left;
	//                 text-align:center;
	//                 line-height:1.4rem;
	//                 margin:0.4rem 0;
	//                 .rem(font-size, 30);
	//                 &:first-child{
	//                      border-right:2px solid #b2b2b2;
	//                     .rem(border-right-width, 2);
	//                 }
	//                 &:last-child{
	//                      border-left:2px solid #b2b2b2;
	//                     .rem(border-left-width, 2);
	//                 }
	//                 .icon{
	//                     .rem(margin-left, 10);
	//                 }
	//                 span{
	//                     &.cur{
	//                          color:#54c5ff
	//                          //border-bottom:1px solid #54c5ff;
	//                         //.rem(border-bottom-width, 2);
	//                      }
	//                 }
	//             }
	//         }
	//
	//
	//
	//         .item{
	//             position:relative;
	//             background:#fff;
	//             .border-radius(8);
	//             .rem(margin-bottom, 30);
	//             position:relative;
	//
	//             section{
	//                 .rem(padding, 20);
	//                 .rem(font-size, 30);
	//                 position:relative;
	//             }
	//
	//
	//             .tag{
	//                 position:absolute;
	//                 .rem(top, -10);
	//                 .rem(left, -20);
	//                 background:#11cd6e;
	//                 color:#fff;
	//                 transform:rotate(-30deg);
	//                 -webkit-transform:rotate(-30deg);
	//                 .border-radius(8);
	//                 .rem(padding, 10, 20);
	//                 .rem(font-size, 24);
	//
	//                 &.over{
	//                      background:#b2b2b2
	//                  }
	//             }
	//
	//             header{
	//                 text-align:center;
	//                 border-bottom:1px solid #dedede;
	//                 .rem(border-bottom-width, 2);
	//                 .rem(height, 80);
	//                 .rem(line-height, 80);
	//                 .rem(font-size, 30);
	//                 .status{
	//                     position: absolute;
	//                     top:0;
	//                     .rem(right, 20);
	//                     .rem(height, 80);
	//                     .rem(line-height, 80);
	//                 }
	//             }
	//
	//             .commit{
	//                 position: absolute;
	//                 .rem(top, 20);
	//                 .rem(right, 20);
	//                 .ico{
	//                     float: left;
	//                     .rem(font-size, 50);
	//                     color: #54c5ff;
	//                     .rem(margin-right, 10)
	//                 }
	//                 span{
	//                     float: left;
	//                     display: inline-block;
	//                     color: #11cd6e;
	//                     border:1px solid #11cd6e;
	//                     .rem(border-width, 2);
	//                     .border-radius(8);
	//                     .rem(height, 50);
	//                     .rem(line-height, 50);
	//                     .rem(padding, 0, 20);
	//                     .rem(font-size, 28);
	//                 }
	//             }
	//
	//             .address, .number{
	//                 color: #b2b2b2;
	//                 .rem(font-size, 30);
	//                 text-align: right;
	//             }
	//
	//             footer{
	//                 border-top:1px solid #dedede;
	//                 .rem(border-top-width, 2);
	//                 .rem(padding, 0, 20);
	//                 .rem(font-size, 30);
	//
	//                 .textWrap{
	//                     .rem(padding, 10, 0);
	//                     div{
	//                         .rem(padding, 5, 0);
	//                     }
	//                     .mark{
	//                         color:#b2b2b2;
	//                     }
	//                 }
	//             }
	//
	//             .userList{
	//                 li{
	//                     position: relative;
	//                     border-top:1px solid #dedede;
	//                     .rem(border-top-width, 2);
	//                     .rem(height, 80);
	//                     .rem(line-height, 80);
	//                     .ico-xuan{
	//                         color:#b2b2b2;
	//                         &.cur{
	//                              color:#11cd6e;
	//                         }
	//                     }
	//                     .commit{
	//                         .rem(top, 14);
	//                         .rem(right, 14);
	//                     }
	//                 }
	//             }
	//         }
	//     }
	// </style>
	//
	// <template>
	//     <div class="page-user-work-publish pullRreshwrap">
	//         <header-bar :title="title" :back="true"></header-bar>
	//
	//         <ul class="filter clearfix">
	//             <li @click="setTag(1)">
	//                 <span :class="{'cur':tag == 1}">最近订单</span>
	//             </li>
	//             <li @click="setTag(2)">
	//                 <span :class="{'cur':tag == 2}">历史订单</span>
	//             </li>
	//             <li @click="setTag(3)">
	//                 <span :class="{'cur':tag == 3}">待评价</span>
	//             </li>
	//         </ul>
	//
	//         <div class="content showHeader showTab">
	//             <pull-refresh @on-scroll-lodding="getData">
	//                 <div class="item" v-for="(index,item) in formData">
	//                     <span class="tag">{{item.scene_name}}</span>
	//                     <header class="clearfix" v-link="{ name: 'userWorkPublishDetail', query:formData }">
	//                         2016-2-22 12:30
	//                         <div class="status">{{ statusText[item.status] }}</div>
	//                     </header>
	//                     <section class="clearfix">
	//                         <div v-if="item.orderRespon">
	//                             <div class="commit clearfix">
	//                                 <a href="tel:{{item.orderRespon.mobile}}" class="ico ico-dianhua3"></a>
	//                                 <span v-if="item.orderRespon.is_appraise">评价</span>
	//                             </div>
	//                             <div>指定接单人：{{item.orderRespon.nickname}}</div>
	//                         </div>
	//                         <div>{{item.detail}} </div>
	//                         <div class="number">预定人数：{{item.number}}人</div>
	//                         <div class="address">工作地点：{{item.workplace}}</div>
	//                     </section>
	//                     <footer v-if="item.orderResponses">
	//                         <div class="textWrap">
	//                             <div>报名人数：{{resultResponse.responseCount}}人&nbsp;&nbsp;已选{{resultResponse.selectedCount}}人，剩余{{resultResponse.restCount}}人可选</div>
	//                             <div class="mark">报名者，请获取一个人的联系方式</div>
	//                         </div>
	//                         <ul class="userList">
	//                             <li class="clearfix" v-for="(subIndex,subItem) in item.orderResponses">
	//                                 <div class="nameWrap" @click="getMobile(item, subItem, index, subIndex)">
	//                                     <i class="ico ico-xuan" :class="{'cur': subItem.is_checked == 1}"></i>
	//                                     <span class="name">{{subItem.nickname}}</span>
	//                                 </div>
	//                                 <div class="commit">
	//                                     <a v-if="subItem.is_checked == 1" href="tel:{{subItem.mobile}}" class="ico ico-dianhua3"></a>
	//                                     <span>评价</span>
	//                                 </div>
	//                             </li>
	//                         </ul>
	//
	//                     </footer>
	//                 </div>
	//             </pull-refresh>
	//         </div>
	//     </div>
	//     <confirm :show.sync="isShowConfirm" @on-confirm="confirm">
	//         <div class="page-scene-orderSuccess-formWrap">
	//             是否要获取{{confirmName}}的联系方式？
	//         </div>
	//     </confirm>
	// </template>
	//
	// <script>
	exports.default = {
	    data: function data() {
	        return {
	            title: '发单任务',
	            indexData: indexData,
	            userInfo: {},
	            formData: [],
	            currentPage: 0,
	            tag: 1,
	            isShowConfirm: false,
	            confirmData: {},
	            statusText: ['报名中', '报名结束', '报名成功', '被拒绝', '过期']
	        };
	    },
	
	    route: {
	        data: function data(transition) {
	            var self = this,
	                query = transition.to.query;
	
	            $.extend(self.formData, query);
	        }
	    },
	    watch: {
	        tag: function tag() {
	            var self = this;
	            self.formData = [];
	            self.getData(1);
	        }
	    },
	    methods: {
	        setTag: function setTag(tag) {
	            this.tag = tag;
	        },
	        getData: function getData(index, callback) {
	            var self = this;
	            $.ajax({
	                url: "/soytime/order/demandList",
	                type: 'POST',
	                data: {
	                    tag: self.tag,
	                    currentPage: index
	                },
	                dataType: 'json',
	                success: function success(data) {
	                    var arr = data.result,
	                        len = arr.length;
	                    for (var i = 0; i < len; i++) {
	                        self.formData.push(arr[i]);
	                    }
	                    callback && callback();
	                }
	            });
	        },
	        confirm: function confirm() {
	            var self = this;
	            self.isShowConfirm = false;
	            $.ajax({
	                url: "/soytime/order/getStuMobile",
	                type: 'POST',
	                data: {
	                    type: self.confirmData.order_type,
	                    order_id: self.confirmData.order_id,
	                    stu_id: self.confirmData.stu_id
	                },
	                dataType: 'json',
	                success: function success(data) {
	                    //self.formData[self.confirmData.index].resultResponse.restCount = data.remainCount;
	                    var orderResponses = self.formData[self.confirmData.index].orderResponses[self.confirmData.subIndex];
	                    orderResponses.mobile = data.result.mobile;
	                    orderResponses.is_checked = 1;
	                }
	            });
	        },
	        getMobile: function getMobile(item, subItem, index, subIndex) {
	            var self = this;
	            self.isShowConfirm = true;
	            self.confirmName = subItem.nickname;
	            self.confirmData = {
	                item: item,
	                subItem: subItem,
	                index: index,
	                subIndex: subIndex
	            };
	        }
	    },
	    components: {
	        'headerBar': __webpack_require__(88),
	        'pullRefresh': __webpack_require__(122),
	        'confirm': __webpack_require__(179)
	    }
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 225 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"page-user-work-publish pullRreshwrap\">\n    <header-bar :title=\"title\" :back=\"true\"></header-bar>\n\n    <ul class=\"filter clearfix\">\n        <li @click=\"setTag(1)\">\n            <span :class=\"{'cur':tag == 1}\">最近订单</span>\n        </li>\n        <li @click=\"setTag(2)\">\n            <span :class=\"{'cur':tag == 2}\">历史订单</span>\n        </li>\n        <li @click=\"setTag(3)\">\n            <span :class=\"{'cur':tag == 3}\">待评价</span>\n        </li>\n    </ul>\n\n    <div class=\"content showHeader showTab\">\n        <pull-refresh @on-scroll-lodding=\"getData\">\n            <div class=\"item\" v-for=\"(index,item) in formData\">\n                <span class=\"tag\">{{item.scene_name}}</span>\n                <header class=\"clearfix\" v-link=\"{ name: 'userWorkPublishDetail', query:formData }\">\n                    2016-2-22 12:30\n                    <div class=\"status\">{{ statusText[item.status] }}</div>\n                </header>\n                <section class=\"clearfix\">\n                    <div v-if=\"item.orderRespon\">\n                        <div class=\"commit clearfix\">\n                            <a href=\"tel:{{item.orderRespon.mobile}}\" class=\"ico ico-dianhua3\"></a>\n                            <span v-if=\"item.orderRespon.is_appraise\">评价</span>\n                        </div>\n                        <div>指定接单人：{{item.orderRespon.nickname}}</div>\n                    </div>\n                    <div>{{item.detail}} </div>\n                    <div class=\"number\">预定人数：{{item.number}}人</div>\n                    <div class=\"address\">工作地点：{{item.workplace}}</div>\n                </section>\n                <footer v-if=\"item.orderResponses\">\n                    <div class=\"textWrap\">\n                        <div>报名人数：{{resultResponse.responseCount}}人&nbsp;&nbsp;已选{{resultResponse.selectedCount}}人，剩余{{resultResponse.restCount}}人可选</div>\n                        <div class=\"mark\">报名者，请获取一个人的联系方式</div>\n                    </div>\n                    <ul class=\"userList\">\n                        <li class=\"clearfix\" v-for=\"(subIndex,subItem) in item.orderResponses\">\n                            <div class=\"nameWrap\" @click=\"getMobile(item, subItem, index, subIndex)\">\n                                <i class=\"ico ico-xuan\" :class=\"{'cur': subItem.is_checked == 1}\"></i>\n                                <span class=\"name\">{{subItem.nickname}}</span>\n                            </div>\n                            <div class=\"commit\">\n                                <a v-if=\"subItem.is_checked == 1\" href=\"tel:{{subItem.mobile}}\" class=\"ico ico-dianhua3\"></a>\n                                <span>评价</span>\n                            </div>\n                        </li>\n                    </ul>\n\n                </footer>\n            </div>\n        </pull-refresh>\n    </div>\n</div>\n<confirm :show.sync=\"isShowConfirm\" @on-confirm=\"confirm\">\n    <div class=\"page-scene-orderSuccess-formWrap\">\n        是否要获取{{confirmName}}的联系方式？\n    </div>\n</confirm>\n";

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(227)
	__vue_script__ = __webpack_require__(229)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\views\\user\\work\\publishDetail.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(230)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\personal\\vue-demo-webpack\\src\\views\\user\\work\\publishDetail.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 227 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 228 */,
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <style lang="less">
	//     @import '../../../less/lib/mixins.less';
	//     .page-user-work-publishDetail{
	//         .rem(font-size, 30);
	//
	//         .header{
	//             background:#fff;
	//             .border-radius(8);
	//             .rem(margin, 0, 0, 30);
	//             header{
	//                 text-align:center;
	//                 border-bottom:1px solid #dedede;
	//                 .rem(border-bottom-width, 2);
	//                 .rem(height, 80);
	//                 .rem(line-height, 80);
	//                 .rem(font-size, 30);
	//                 .rem(margin, 0, 20);
	//             }
	//             section{
	//                 font-style: normal;
	//                 .rem(padding, 20);
	//                 i{color:#b2b2b2;font-style: normal}
	//             }
	//             footer{
	//                 border-top:1px solid #dedede;
	//                 .rem(border-top-width, 2);
	//                 .rem(padding, 20);
	//                 background:#fff;
	//             }
	//         }
	//
	//         .item{
	//             .rem(margin, 0, 0, 30);
	//             background:#fff;
	//             .border-radius(8);
	//             header{
	//                 border-bottom:2px solid #dedede;
	//                 .rem(border-bottom-width, 2);
	//                 .rem(padding, 20);
	//                 .rem(font-size, 30);
	//
	//                 .photoWrap{
	//                     .rem(margin-right, 20);
	//                     .rem(width, 90);
	//                     .rem(height, 90);
	//                     .border-radius(90);
	//                     img{
	//                         width:100%;
	//                         height:100%;
	//                         .border-radius(120);
	//                     }
	//                 }
	//
	//                 .school{
	//                     .rem(font-size, 24);
	//                     color:#5e5e5e;
	//                 }
	//
	//                 .ico-dianhua{
	//                     color: #b2b2b2;
	//                     .rem(margin-top, 10);
	//                     .rem(font-size, 80);
	//                     &.cur{
	//                         color: #11cd6e;
	//                     }
	//                 }
	//             }
	//
	//             section{
	//                 border-bottom:1px solid #dedede;
	//                 .rem(border-bottom-width, 2);
	//                 .rem(padding, 20);
	//             }
	//
	//             footer{
	//                 .rem(height, 50);
	//                 .rem(line-height, 50);
	//                 span{
	//                     display: inline-block;
	//                     text-align: center;
	//                 }
	//                 .no{
	//                     width: 50%;
	//                     float: left;
	//                     color: #5e5e5e;;
	//                 }
	//                 .yes{
	//                     width: 50%;
	//                     float: left;
	//                     background: #11cd6e;
	//                     color: #fff;
	//                 }
	//                 .pass{
	//                     width: 100%;
	//                     background:#54c5ff;
	//                     color: #fff;
	//                 }
	//             }
	//         }
	//     }
	// </style>
	//
	// <template>
	//     <div class="page-user-work-publishDetail">
	//         <header-bar :title="title" :back="true"></header-bar>
	//
	//         <div class="content showHeader">
	//             <div class="header clearfix">
	//                 <header>{{formData.scene_name}}</header>
	//                 <section>
	//                     <ul>
	//                         <li class="clearfix">
	//                             <span class="label">公司地址：</span>
	//                             <span class="field">{{formData.workplace}}</span>
	//                         </li>
	//                         <li class="clearfix">
	//                             <span class="label">工作任务：</span>
	//                             <span class="field">{{formData.scene_name}}</span>
	//                         </li>
	//                         <li class="clearfix">
	//                             <span class="label">需要人数：</span>
	//                             <span class="field">{{formData.number}}人<i>(指定{{formData.stu_name}})</i><span>
	//                         </li>
	//                         <li class="clearfix">
	//                             <span class="label">工作时间：</span>
	//                             <span class="field">{{formData.start_time}}-{{formData.end_time}}</span>
	//                         </li>
	//                         <li class="clearfix">
	//                             <span class="label">时间段：</span>
	//                             <span class="field">{{formData.period_times}}</span>
	//                         </li>
	//                     </ul>
	//                     <div>50元/天</div>
	//                 </section>
	//                 <footer>
	//                     <div>工作内容：</div>
	//                     <div>{{formData.detail}}</div>
	//                 </footer>
	//             </div>
	//             <div class="item clearfix" v-for="item in formData.orderResponses">
	//                  <header class="clearfix">
	//                     <div class="pull-left photoWrap">
	//                         <img :src="item.head_img_url">
	//                     </div>
	//                     <div class="pull-left nameWrap">
	//                         <div class="name">
	//                             <i class="icon"
	//                                :class="{'icon-xingbienan2': item.sex == 1, 'icon-xingbienv2': item.sex == 2}"
	//                             ></i>
	//                             {{item.usernick}}
	//                         </div>
	//                         <div class="school clearfix">
	//                             {{item.school_name}}
	//                         </div>
	//                     </div>
	//                     <i class="ico ico-dianhua pull-right"></i>
	//                 </header>
	//                 <section>
	//                     辅导孩子完成家庭作业，并且进行课外辅导！让孩子在理解能力跟读题能力有所提高！
	//                 </section>
	//                 <footer class="clearfix">
	//                     <span class="no">拒绝</span>
	//                     <span class="yes">约TA</span>
	//                     <span class="pass">已约</span>
	//                 </footer>
	//             </div>
	//         </div>
	//     </div>
	// </template>
	//
	// <script>
	exports.default = {
	    data: function data() {
	        return {
	            title: '订单详细',
	            formData: {}
	        };
	    },
	
	    route: {
	        data: function data(transition) {
	            var self = this,
	                query = transition.to.query;
	
	            $.extend(self.formData, query);
	
	            $.ajax({
	                url: "/soytime/order/demandDetail",
	                type: 'POST',
	                dataType: 'json',
	                data: {
	                    order_id: self.formData.order_id
	                },
	                success: function success(data) {
	                    self.formData = data.result;
	                }
	            });
	        }
	    },
	    methods: {},
	    components: {
	        'headerBar': __webpack_require__(88)
	    }
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 230 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"page-user-work-publishDetail\">\n    <header-bar :title=\"title\" :back=\"true\"></header-bar>\n\n    <div class=\"content showHeader\">\n        <div class=\"header clearfix\">\n            <header>{{formData.scene_name}}</header>\n            <section>\n                <ul>\n                    <li class=\"clearfix\">\n                        <span class=\"label\">公司地址：</span>\n                        <span class=\"field\">{{formData.workplace}}</span>\n                    </li>\n                    <li class=\"clearfix\">\n                        <span class=\"label\">工作任务：</span>\n                        <span class=\"field\">{{formData.scene_name}}</span>\n                    </li>\n                    <li class=\"clearfix\">\n                        <span class=\"label\">需要人数：</span>\n                        <span class=\"field\">{{formData.number}}人<i>(指定{{formData.stu_name}})</i><span>\n                    </li>\n                    <li class=\"clearfix\">\n                        <span class=\"label\">工作时间：</span>\n                        <span class=\"field\">{{formData.start_time}}-{{formData.end_time}}</span>\n                    </li>\n                    <li class=\"clearfix\">\n                        <span class=\"label\">时间段：</span>\n                        <span class=\"field\">{{formData.period_times}}</span>\n                    </li>\n                </ul>\n                <div>50元/天</div>\n            </section>\n            <footer>\n                <div>工作内容：</div>\n                <div>{{formData.detail}}</div>\n            </footer>\n        </div>\n        <div class=\"item clearfix\" v-for=\"item in formData.orderResponses\">\n             <header class=\"clearfix\">\n                <div class=\"pull-left photoWrap\">\n                    <img :src=\"item.head_img_url\">\n                </div>\n                <div class=\"pull-left nameWrap\">\n                    <div class=\"name\">\n                        <i class=\"icon\"\n                           :class=\"{'icon-xingbienan2': item.sex == 1, 'icon-xingbienv2': item.sex == 2}\"\n                        ></i>\n                        {{item.usernick}}\n                    </div>\n                    <div class=\"school clearfix\">\n                        {{item.school_name}}\n                    </div>\n                </div>\n                <i class=\"ico ico-dianhua pull-right\"></i>\n            </header>\n            <section>\n                辅导孩子完成家庭作业，并且进行课外辅导！让孩子在理解能力跟读题能力有所提高！\n            </section>\n            <footer class=\"clearfix\">\n                <span class=\"no\">拒绝</span>\n                <span class=\"yes\">约TA</span>\n                <span class=\"pass\">已约</span>\n            </footer>\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(232)
	__vue_script__ = __webpack_require__(234)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\views\\user\\work\\accept.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(235)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\personal\\vue-demo-webpack\\src\\views\\user\\work\\accept.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 232 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 233 */,
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <style lang="less">
	//     @import '../../../less/lib/mixins.less';
	//     .page-user-work-accept{
	//         .item{
	//             position: relative;
	//             background:#fff;
	//             .border-radius(8);
	//             .rem(margin-bottom, 20);
	//             .rem(padding, 20);
	//         }
	//             header{
	//                 border-bottom:2px solid #dedede;
	//                 .rem(border-bottom-width, 2);
	//                 .rem(padding-bottom, 10);
	//                 .rem(margin-bottom, 10);
	//             }
	//                 .photoWrap{
	//                     position: absolute;
	//                     .rem(margin-right, 20);
	//                     .rem(width, 90);
	//                     .rem(height, 90);
	//                     .border-radius(90);
	//                     img{
	//                         width:100%;
	//                         height:100%;
	//                         .border-radius(120);
	//                     }
	//                 }
	//                 .textWrap{
	//                     .rem(padding-left, 110);
	//                     .header{
	//                         .rem(padding-bottom, 10)
	//                     }
	//                         .time{
	//                             color:#b2b2b2
	//                         }
	//                 }
	//
	//             .info{
	//                 .salary{
	//                     color: #ff946e;
	//                 }
	//                 span{
	//                     color: #b2b2b2;
	//                 }
	//                 .btn{
	//                     border:2px solid #2fd380;
	//                     .rem(border-width, 2);
	//                     .border-radius(8);
	//                     color:#2fd380;
	//                     font-style:normal;
	//                     .rem(font-size, 30);
	//                     .rem(padding, 0, 10);
	//                     &.disable{
	//                         color:#b2b2b2;
	//                         border-color: #b2b2b2;
	//                     }
	//                 }
	//             }
	//     }
	// </style>
	//
	// <template>
	//     <div class="page-user-work-accept pullRreshwrap">
	//         <header-bar :title="title" :back="true"></header-bar>
	//
	//         <div class="content showHeader">
	//             <pull-refresh @on-scroll-lodding="getData">
	//                 <div class="item" v-for="item in formData">
	//                     <header class="clearfix" v-link="{name: 'userWorkAcceptDetail', query: {'order_id': item.order_id}}">
	//                         <div class="photoWrap">
	//                             <img :src="item.head_img_url">
	//                         </div>
	//                         <div class="textWrap">
	//                             <div class="header clearfix">
	//                                 <span class="name">{{item.scene_name}}</span>
	//                                 <span class="time pull-right">{{item.create_time}}</span>
	//                             </div>
	//                             <div class="text">{{item.detail}}</div>
	//                         </div>
	//                     </header>
	//                     <div class="info">
	//                         <div class="salary clearfix">
	//                             <div class="pull-left">报酬: {{item.salary}}元/{{item.unit}}</div>
	//                             <div class="pull-right">
	//                                 <i class="btn">评价</i>
	//                                 <i class="btn disable">已评价</i>
	//                             </div>
	//                         </div>
	//                         <div>
	//                             时间: <span>{{item.start_time}} {{item.end_time}} {{item.period_times}}</span>
	//                         </div>
	//                         <div>
	//                             服务位置: <span>{{item.workplace}}</span>
	//                         </div>
	//                     </div>
	//                 </div>
	//             </pull-refresh>
	//         </div>
	//     </div>
	// </template>
	//
	// <script>
	exports.default = {
	    data: function data() {
	        return {
	            title: '发单任务',
	            formData: [],
	            appraiseText: ['评价', '已评价']
	        };
	    },
	
	    route: {
	        data: function data(transition) {
	            var self = this,
	                query = transition.to.query;
	
	            $.extend(self.formData, query);
	        }
	    },
	    methods: {
	        getData: function getData(index, callback) {
	            var self = this;
	            $.ajax({
	                url: "/soytime/order/receiveList",
	                type: 'POST',
	                data: {
	                    currentPage: index
	                },
	                dataType: 'json',
	                success: function success(data) {
	                    var arr = data.result,
	                        len = arr.length;
	                    for (var i = 0; i < len; i++) {
	                        self.formData.push(arr[i]);
	                    }
	                    callback && callback();
	                }
	            });
	        }
	    },
	    components: {
	        'headerBar': __webpack_require__(88),
	        'pullRefresh': __webpack_require__(122)
	    }
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 235 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"page-user-work-accept pullRreshwrap\">\n    <header-bar :title=\"title\" :back=\"true\"></header-bar>\n\n    <div class=\"content showHeader\">\n        <pull-refresh @on-scroll-lodding=\"getData\">\n            <div class=\"item\" v-for=\"item in formData\">\n                <header class=\"clearfix\" v-link=\"{name: 'userWorkAcceptDetail', query: {'order_id': item.order_id}}\">\n                    <div class=\"photoWrap\">\n                        <img :src=\"item.head_img_url\">\n                    </div>\n                    <div class=\"textWrap\">\n                        <div class=\"header clearfix\">\n                            <span class=\"name\">{{item.scene_name}}</span>\n                            <span class=\"time pull-right\">{{item.create_time}}</span>\n                        </div>\n                        <div class=\"text\">{{item.detail}}</div>\n                    </div>\n                </header>\n                <div class=\"info\">\n                    <div class=\"salary clearfix\">\n                        <div class=\"pull-left\">报酬: {{item.salary}}元/{{item.unit}}</div>\n                        <div class=\"pull-right\">\n                            <i class=\"btn\">评价</i>\n                            <i class=\"btn disable\">已评价</i>\n                        </div>\n                    </div>\n                    <div>\n                        时间: <span>{{item.start_time}} {{item.end_time}} {{item.period_times}}</span>\n                    </div>\n                    <div>\n                        服务位置: <span>{{item.workplace}}</span>\n                    </div>\n                </div>\n            </div>\n        </pull-refresh>\n    </div>\n</div>\n";

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(237)
	__vue_script__ = __webpack_require__(242)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\views\\user\\work\\acceptDetail.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(243)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\personal\\vue-demo-webpack\\src\\views\\user\\work\\acceptDetail.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 237 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <style lang="less">
	//     @import '../../../less/lib/mixins.less';
	//     .page-user-work-acceptDetail{
	//         .content{
	//             .rem(padding-bottom, 160);
	//         }
	//         .header{
	//             position: relative;
	//             background:#fffade;
	//             .box-shadow(3px,3px,3px,#ddd);
	//             .rem(margin, 20, 0);
	//             .border-radius(8);
	//             .headerIcon{
	//                 position: absolute;
	//                 background: url(../../../img/acceptDetail-header.png) no-repeat;
	//                 background-size: 100% 100%;
	//                 .rem(height, 38);
	//                 .rem(width, 38);
	//                 .rem(top, -10);
	//                 .rem(left, -10);
	//             }
	//             header{
	//                 text-align: center;
	//                 border-bottom:2px solid #dedede;
	//                 .rem(border-bottom-width, 2);
	//                 .rem(height, 80);
	//                 .rem(line-height, 80);
	//                 .rem(font-size, 34);
	//             }
	//             section{
	//                 .rem(padding, 20);
	//                 .rem(font-size, 30);
	//                 div{
	//                     .rem(height, 60);
	//                     .rem(line-height, 60);
	//                     position: relative;
	//                     .rem(padding-left, 60);
	//                 }
	//                 .ico{
	//                     .rem(font-size, 50);
	//                     position: absolute;
	//                     .rem(top, 5);
	//                     left:0;
	//                 }
	//             }
	//         }
	//         .map{
	//             background:url(../../../img/mapImg.png) no-repeat;
	//             .rem(background-size, 750, 118);
	//             .rem(height, 118);
	//             .rem(line-height, 118);
	//             .border-radius(8);
	//             position: relative;
	//             color:#54c5ff;
	//             div{
	//                 .rem(width, 150);
	//                 margin:0 auto;
	//                 text-align: center;
	//                 position: relative;
	//             }
	//             span{
	//                 .rem(font-size, 30);
	//             }
	//             .ico-bus{
	//                 position: absolute;
	//                 .rem(font-size, 90);
	//                 .rem(left, -80);
	//                 .rem(top, 16);
	//             }
	//             .ico-bofang{
	//                 position: absolute;
	//                 .rem(right, 20);
	//                 .rem(top, 35);
	//                 .rem(font-size, 50);
	//             }
	//         }
	//
	//         .detail{
	//             position: relative;
	//             background:#fffbed;
	//             border:2px solid #f3f2f0;
	//             .rem(border-width, 2);
	//             .rem(margin, 20, 0);
	//             .rem(padding, 30);
	//             .border-radius(8);
	//             .detailIcon{
	//                 position: absolute;
	//                 background: url(../../../img/acceptDetail-detail.png) no-repeat;
	//                 background-size: 100% 100%;
	//                 .rem(height, 60);
	//                 .rem(width, 60);
	//                 .rem(top, -15);
	//                 .rem(left, -15);
	//             }
	//         }
	//
	//         .photoWrap{
	//             .rem(margin-right, 20);
	//             .rem(width, 90);
	//             .rem(height, 90);
	//             .border-radius(90);
	//             img{
	//                 width:100%;
	//                 height:100%;
	//                 .border-radius(120);
	//             }
	//         }
	//         .user{
	//             .rem(padding, 15, 20);
	//             border:2px solid #f1f1f1;
	//             .rem(border-width, 2);
	//             background: #fff;
	//             .border-radius(8);
	//             .pull-left{
	//                 .photoWrap{
	//                     float: left;
	//                 }
	//                 .name{
	//                     float: left;
	//                     .rem(width, 90);
	//                     .rem(line-height, 90);
	//                     .rem(font-size, 28);
	//                 }
	//             }
	//             .pull-right{
	//                 .appraise{
	//                     float:left;
	//                     div{
	//                         float: left;
	//                         text-align:center;
	//                         .rem(margin-right, 10);
	//                         .rem(font-size, 28);
	//                         span{
	//                             display: block;
	//                         }
	//                         i{
	//                             font-style: normal;
	//                         }
	//                         &.goodCount{
	//                             color:#ff946e;
	//                         }
	//                         &.cenCount{
	//                             color:#888;
	//                         }
	//                         &.poolCount{
	//                             color:#b2b2b2;
	//                         }
	//                     }
	//                 }
	//                 .ico{
	//                     float: left;
	//                     color:#5e5e5e;
	//                     .rem(font-size, 60);
	//                     border-left:2px solid #b2b2b2;
	//                     .rem(border-left-width, 2);
	//                     .rem(margin, 20, 0, 0, 15);
	//                     .rem(padding-left, 20);
	//                 }
	//             }
	//         }
	//         .list{
	//             .rem(padding, 20, 0);
	//             .photoWrap{
	//                 float: left;
	//                 .rem(margin, 10, 10, 0, 0);
	//             }
	//             .pull-left{
	//                 .rem(font-size, 28);
	//             }
	//             .pull-right{
	//                 .rem(font-size, 24);
	//             }
	//         }
	//         .footer{
	//             background: #fafafa;
	//             color: #fff;
	//             position: absolute;
	//             left: 0;
	//             bottom: 0;
	//             width: 100%;
	//             .rem(padding-top, 60);
	//
	//             .text{
	//                 color:#b2b2b2;
	//                 position: absolute;
	//                 .rem(top, 0);
	//                 .rem(right, 100);
	//                 .rem(font-size, 28);
	//             }
	//
	//             .btn{
	//                 .rem(height, 130);
	//                 .rem(line-height, 100);
	//                 float:left;
	//                 span{
	//                     display: inline-block;
	//                     height:100%;
	//                     width:100%;
	//                     text-align: center;
	//                     .border-radius(8);
	//                     .rem(font-size, 34);
	//                 }
	//                 &.no{
	//                     width:40%;
	//                     .rem(padding, 0, 20, 30, 30);
	//                     span{
	//                         background:#b2b2b2;
	//                     }
	//                 }
	//                 &.yes{
	//                     width:60%;
	//                     .rem(padding, 0, 30, 30, 0);
	//                     .border-radius(8);
	//                     span{
	//                         background:#ff946e;
	//                     }
	//                 }
	//             }
	//         }
	//     }
	// </style>
	//
	// <template>
	//     <div class="page-user-work-acceptDetail">
	//         <header-bar :title="title" :back="true"></header-bar>
	//
	//         <div class="content showHeader">
	//             <div class="header">
	//                 <i class="headerIcon"></i>
	//                 <header>{{formData.scene_name}}</header>
	//                 <section>
	//                     <div><i class="ico ico-calendar"></i>{{formData.start_time}} - {{formData.end_time}}</div>
	//                     <div><i class="ico ico-time"></i>{{formData.period_times}}</div>
	//                     <div><i class="ico ico-everyone"></i>共{{formData.number}}人</div>
	//                     <div><i class="ico ico-calendar"></i>{{formData.salary}}元/{{formData.unit}}</div>
	//                     <div><i class="ico ico-zuobiao"></i>{{formData.comp_addr}}</div>
	//                 </section>
	//             </div>
	//             <div class="map" v-link="{name: 'userWorkAcceptBus', query: queryObj}">
	//                 <div>
	//                     <i class="ico ico-bus"></i>
	//                     <span>公交路线</span>
	//                 </div>
	//                 <i class="ico ico-bofang"></i>
	//             </div>
	//             <div class="detail">
	//                 <i class="detailIcon"></i>
	//                 {{formData.detail}}
	//             </div>
	//             <div class="user clearfix">
	//                 <div class="pull-left">
	//                     <div class="photoWrap">
	//                         <img :src="formData.head_img_url">
	//                     </div>
	//                     <div class="name">
	//                         {{formData.clientAppraise.creator_name}}
	//                     </div>
	//                 </div>
	//                 <div class="pull-right">
	//                     <div class="appraise">
	//                         <div class="goodCount"><span>{{formData.clientAppraise.goodCount}}</span><i>好评</i></div>
	//                         <div class="cenCount"><span>{{formData.clientAppraise.cenCount}}</span><i>中评</i></div>
	//                         <div class="poolCount"><span>{{formData.clientAppraise.poolCount}}</span><i>差评</i></div>
	//                     </div>
	//                     <a href="tel:{{formData.clientAppraise.mobile}}" class="ico ico-dianhua2"></a>
	//                 </div>
	//             </div>
	//             <div class="list">
	//                 <header class="clearfix">
	//                     <span class="pull-left">目前已有{{formData.response.length}}人报名</span>
	//                     <span class="pull-right">差评3次，酱油将无法推送服务</span>
	//                 </header>
	//                 <div class="clearfix">
	//                     <div class="photoWrap" v-for="item in formData.response">
	//                         <img :src="item.head_img_url">
	//                     </div>
	//                 </div>
	//             </div>
	//         </div>
	//         <footer class="footer">
	//             <span class="text">报名可领取红包哦!!!</span>
	//             <ul class="clearfix">
	//                 <li class="btn no"><span>拒绝</span></li>
	//                 <li class="btn yes"><span>报名</span></li>
	//             </ul>
	//         </footer>
	//     </div>
	// </template>
	//
	// <script>
	exports.default = {
	    data: function data() {
	        return {
	            title: '约单详情',
	            formData: {},
	            queryObj: {}
	        };
	    },
	
	    route: {
	        data: function data(transition) {
	            var self = this,
	                query = transition.to.query;
	
	            $.extend(self.formData, query);
	
	            $.ajax({
	                url: "/soytime/order/receiveDetail",
	                type: 'POST',
	                dataType: 'json',
	                data: query,
	                success: function success(data) {
	                    self.formData = data.result;
	                    self.queryObj = {
	                        comp_longitude: data.result.comp_longitude,
	                        comp_latitude: data.result.comp_latitude,
	                        city: data.result.city,
	                        work_longitude: data.result.work_longitude,
	                        work_latitude: data.result.work_latitude
	                    };
	                }
	            });
	        }
	    },
	    methods: {},
	    components: {
	        'headerBar': __webpack_require__(88)
	    }
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 243 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"page-user-work-acceptDetail\">\n    <header-bar :title=\"title\" :back=\"true\"></header-bar>\n\n    <div class=\"content showHeader\">\n        <div class=\"header\">\n            <i class=\"headerIcon\"></i>\n            <header>{{formData.scene_name}}</header>\n            <section>\n                <div><i class=\"ico ico-calendar\"></i>{{formData.start_time}} - {{formData.end_time}}</div>\n                <div><i class=\"ico ico-time\"></i>{{formData.period_times}}</div>\n                <div><i class=\"ico ico-everyone\"></i>共{{formData.number}}人</div>\n                <div><i class=\"ico ico-calendar\"></i>{{formData.salary}}元/{{formData.unit}}</div>\n                <div><i class=\"ico ico-zuobiao\"></i>{{formData.comp_addr}}</div>\n            </section>\n        </div>\n        <div class=\"map\" v-link=\"{name: 'userWorkAcceptBus', query: queryObj}\">\n            <div>\n                <i class=\"ico ico-bus\"></i>\n                <span>公交路线</span>\n            </div>\n            <i class=\"ico ico-bofang\"></i>\n        </div>\n        <div class=\"detail\">\n            <i class=\"detailIcon\"></i>\n            {{formData.detail}}\n        </div>\n        <div class=\"user clearfix\">\n            <div class=\"pull-left\">\n                <div class=\"photoWrap\">\n                    <img :src=\"formData.head_img_url\">\n                </div>\n                <div class=\"name\">\n                    {{formData.clientAppraise.creator_name}}\n                </div>\n            </div>\n            <div class=\"pull-right\">\n                <div class=\"appraise\">\n                    <div class=\"goodCount\"><span>{{formData.clientAppraise.goodCount}}</span><i>好评</i></div>\n                    <div class=\"cenCount\"><span>{{formData.clientAppraise.cenCount}}</span><i>中评</i></div>\n                    <div class=\"poolCount\"><span>{{formData.clientAppraise.poolCount}}</span><i>差评</i></div>\n                </div>\n                <a href=\"tel:{{formData.clientAppraise.mobile}}\" class=\"ico ico-dianhua2\"></a>\n            </div>\n        </div>\n        <div class=\"list\">\n            <header class=\"clearfix\">\n                <span class=\"pull-left\">目前已有{{formData.response.length}}人报名</span>\n                <span class=\"pull-right\">差评3次，酱油将无法推送服务</span>\n            </header>\n            <div class=\"clearfix\">\n                <div class=\"photoWrap\" v-for=\"item in formData.response\">\n                    <img :src=\"item.head_img_url\">\n                </div>\n            </div>\n        </div>\n    </div>\n    <footer class=\"footer\">\n        <span class=\"text\">报名可领取红包哦!!!</span>\n        <ul class=\"clearfix\">\n            <li class=\"btn no\"><span>拒绝</span></li>\n            <li class=\"btn yes\"><span>报名</span></li>\n        </ul>\n    </footer>\n</div>\n";

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(245)
	__vue_script__ = __webpack_require__(247)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\views\\user\\work\\acceptAppraise.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(248)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\personal\\vue-demo-webpack\\src\\views\\user\\work\\acceptAppraise.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 245 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 246 */,
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <style lang="less">
	//     @import '../../../less/lib/mixins.less';
	//     .page-user-work-acceptAppraise{
	//         .tagWrap{
	//             .rem(margin, 30, 0);
	//         }
	//         .tag{
	//             float:left;
	//             width:30%;
	//             position:relative;
	//             .rem(padding-left, 70);
	//
	//
	//             &:nth-child(2){
	//                 margin: 0 5%;
	//              }
	//
	//             .ico{
	//                 .rem(font-size, 60);
	//                 position: absolute;
	//                 top:0;
	//                 left:0;
	//             }
	//             .ico-xiaolian{
	//                 color:#eb4f38
	//             }
	//             .ico-cry{
	//                 color:#5e5e5e
	//             }
	//             .ico-kulian{
	//                 color:#b2b2b2
	//             }
	//             span{
	//                 background: #b2b2b2;
	//                 display: inline-block;
	//                 width:100%;
	//                 text-align: center;
	//                 color:#fff;
	//                 .rem(height, 60);
	//                 .rem(line-height, 60);
	//                 .border-radius(8);
	//                 .cur{
	//                     background: #ff946e;
	//                 }
	//             }
	//         }
	//         textarea{
	//             width: 100%;
	//             .rem(height, 300);
	//             border:1px solid #dedede;
	//             .rem(border-width, 2);
	//             .border-radius(8);
	//             .rem(padding, 20);
	//         }
	//     }
	// </style>
	//
	// <template>
	//     <div class="page-user-work-acceptAppraise">
	//         <header-bar :title="title" :back="true"></header-bar>
	//
	//         <div class="content showHeader">
	//             <div class="tagWrap clearfix">
	//                 <div class="tag" @click="setType(1)">
	//                     <i class="ico ico-xiaolian"></i>
	//                     <span :class="{'cur': formData.type == 1}">好评</span>
	//                 </div>
	//                 <div class="tag" @click="setType(2)">
	//                     <i class="ico ico-cry"></i>
	//                     <span :class="{'cur': formData.type == 2}">中评</span>
	//                 </div>
	//                 <div class="tag" @click="setType(3)">
	//                     <i class="ico ico-kulian"></i>
	//                     <span :class="{'cur': formData.type == 3}">差评</span>
	//                 </div>
	//             </div>
	//             <textarea placeholder="请输入您要评价的内容" v-model="formData.content"></textarea>
	//         </div>
	//         <div class="ui-btn ui-btn-big" @click="save">提交</div>
	//     </div>
	// </template>
	//
	// <script>
	exports.default = {
	    data: function data() {
	        return {
	            title: '评价',
	            formData: {
	                appraise_type: '',
	                order_id: '',
	                type: 1,
	                to_id: '',
	                content: ''
	            }
	        };
	    },
	
	    route: {
	        data: function data(transition) {
	            var self = this,
	                query = transition.to.query;
	
	            $.extend(self.formData, query);
	        }
	    },
	    methods: {
	        setType: function setType(type) {
	            this.formData.type = type;
	        },
	        save: function save() {
	            $.ajax({
	                url: "/soytime/appraise/appraiseOrder",
	                type: 'POST',
	                dataType: 'json',
	                data: self.formData,
	                success: function success(data) {
	                    self.formData = data.result;
	                }
	            });
	        }
	    },
	    components: {
	        'headerBar': __webpack_require__(88)
	    }
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 248 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"page-user-work-acceptAppraise\">\n    <header-bar :title=\"title\" :back=\"true\"></header-bar>\n\n    <div class=\"content showHeader\">\n        <div class=\"tagWrap clearfix\">\n            <div class=\"tag\" @click=\"setType(1)\">\n                <i class=\"ico ico-xiaolian\"></i>\n                <span :class=\"{'cur': formData.type == 1}\">好评</span>\n            </div>\n            <div class=\"tag\" @click=\"setType(2)\">\n                <i class=\"ico ico-cry\"></i>\n                <span :class=\"{'cur': formData.type == 2}\">中评</span>\n            </div>\n            <div class=\"tag\" @click=\"setType(3)\">\n                <i class=\"ico ico-kulian\"></i>\n                <span :class=\"{'cur': formData.type == 3}\">差评</span>\n            </div>\n        </div>\n        <textarea placeholder=\"请输入您要评价的内容\" v-model=\"formData.content\"></textarea>\n    </div>\n    <div class=\"ui-btn ui-btn-big\" @click=\"save\">提交</div>\n</div>\n";

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(250)
	__vue_script__ = __webpack_require__(252)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\views\\user\\work\\acceptBus.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(253)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\personal\\vue-demo-webpack\\src\\views\\user\\work\\acceptBus.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 250 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 251 */,
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <style lang="less">
	//     @import '../../../less/lib/mixins.less';
	//     .page-user-work-acceptBus{
	//         #panelWrap{
	//             position: fixed;
	//             max-height: 50%;
	//             overflow-y: auto;
	//             left: 0;
	//             bottom: 0;
	//             width: 100%;
	//             z-index:200;
	//         }
	//         #panelBg{
	//             background-color: #fff;
	//         }
	//         #panelBtn{
	//             .rem(height, 50);
	//             .rem(line-height, 50);
	//             .ico{
	//                 width: 20%;
	//                 margin:0 auto;
	//                 .rem(height, 50);
	//                 .rem(line-height, 50);
	//                 .rem(font-size, 30);
	//                 text-align: center;
	//                 background:#fff;
	//                 color:#b2b2b2;
	//                 .rem(border-top-right-radius, 8);
	//                 .rem(border-top-left-radius, 8);
	//             }
	//         }
	//     }
	// </style>
	//
	// <template>
	//     <div class="page-user-work-acceptBus">
	//         <header-bar :title="title" :back="true"></header-bar>
	//         <div id="amapWrap" class="content"></div>
	//         <div id="panelWrap">
	//             <div id="panelBtn" @click="switch">
	//                 <div class="ico" :class="{'ico-down':isShow, 'ico-up': !isShow}"></div>
	//             </div>
	//             <div id="panelBg" v-show="isShow">
	//                 <div id="panel"></div>
	//             </div>
	//         </div>
	//     </div>
	// </template>
	//
	// <script>
	exports.default = {
	    data: function data() {
	        return {
	            title: '公交路线',
	            formData: {},
	            isShow: true
	        };
	    },
	
	    route: {
	        data: function data(transition) {
	            var self = this,
	                query = transition.to.query;
	
	            $.extend(self.formData, query);
	        }
	    },
	    ready: function ready() {
	
	        if (!window.AMap) {
	            setTimeout(function () {
	                location.reload();
	            }, 15000);
	            return;
	        }
	
	        var self = this,
	            map = new AMap.Map('amapWrap', {
	            resizeEnable: true,
	            zoom: 14
	        });
	
	        AMap.service(["AMap.CitySearch"], function () {
	            //加载地理编码
	            //实例化城市查询类
	            var citysearch = new AMap.CitySearch();
	            //自动获取用户IP，返回当前城市
	            citysearch.getLocalCity(function (status, result) {
	                if (status === 'complete' && result.info === 'OK') {
	                    if (result && result.city && result.bounds) {
	                        var cityinfo = result.city;
	                        var citybounds = result.bounds;
	                    }
	                }
	            });
	        });
	
	        AMap.service(["AMap.Transfer"], function () {
	            var transOptions = {
	                map: map,
	                city: returnCitySN.cname, //此处显示用户当前位置
	                panel: 'panel',
	                //cityd:'乌鲁木齐',
	                policy: AMap.TransferPolicy.LEAST_TIME
	            },
	                transfer = new AMap.Transfer(transOptions),
	                comp = new AMap.LngLat(self.formData.comp_longitude, self.formData.comp_latitude),
	                work = new AMap.LngLat(self.formData.work_longitude, self.formData.work_latitude);
	            console.log(self.formData);
	            //根据起、终点坐标查询公交换乘路线
	            transfer.search(comp, work);
	        });
	    },
	
	    methods: {
	        switch: function _switch() {
	            if (this.isShow) {
	                this.isShow = false;
	            } else {
	                this.isShow = true;
	            }
	        }
	    },
	    components: {
	        'headerBar': __webpack_require__(88)
	    }
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 253 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"page-user-work-acceptBus\">\n    <header-bar :title=\"title\" :back=\"true\"></header-bar>\n    <div id=\"amapWrap\" class=\"content\"></div>\n    <div id=\"panelWrap\">\n        <div id=\"panelBtn\" @click=\"switch\">\n            <div class=\"ico\" :class=\"{'ico-down':isShow, 'ico-up': !isShow}\"></div>\n        </div>\n        <div id=\"panelBg\" v-show=\"isShow\">\n            <div id=\"panel\"></div>\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(255)
	__vue_script__ = __webpack_require__(257)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\views\\service.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(258)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\personal\\vue-demo-webpack\\src\\views\\service.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 255 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 256 */,
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <style lang="less">
	//
	// </style>
	//
	// <template>
	//     <div class="page-user">
	//         <header-bar :title="title"></header-bar>
	//
	//         <div class="content showHeader showFooter">
	//             <a external v-link="">edit</a>
	//
	//
	//             <div class="card-header">
	//                 <img src="">
	//                 名字
	//
	//                 未认证，点此认证！
	//
	//                 好评   1
	//                 中评
	//                 差评   1
	//                 收藏
	//             </div>
	//
	//             <div class="list-block">
	//                 <ul>
	//                     <li class="item-content item-link">
	//                         <a external v-link="{name: 'userMoney'}">
	//                             <div class="item-media"><i class="icon icon-f7"></i></div>
	//                             <div class="item-inner">
	//                                 <div class="item-title">我的余额</div>
	//                             </div>
	//                         </a>
	//                     </li>
	//                 </ul>
	//             </div>
	//             <div class="list-block">
	//                 <ul>
	//                     <li class="item-content item-link">
	//                         <a external v-link="{name: 'userSetting'}">
	//                             <div class="item-media"><i class="icon icon-f7"></i></div>
	//                             <div class="item-inner">
	//                                 <div class="item-title">设置</div>
	//                             </div>
	//                         </a>
	//                     </li>
	//                     <li class="item-content item-link">
	//                         <a external v-link="{name: 'userWorkServer'}">
	//                             <div class="item-media"><i class="icon icon-f7"></i></div>
	//                             <div class="item-inner">
	//                                 <div class="item-title">发布服务</div>
	//                             </div>
	//                         </a>
	//                     </li>
	//                 </ul>
	//             </div>
	//             <div class="list-block">
	//                 <ul>
	//                     <li class="item-content item-link">
	//                         <a external v-link="{name: 'userWorkPublish'}">
	//                             <div class="item-media"><i class="icon icon-f7"></i></div>
	//                             <div class="item-inner">
	//                                 <div class="item-title">发单任务</div>
	//                             </div>
	//                         </a>
	//                     </li>
	//                     <li class="item-content item-link">
	//                         <a external v-link="{name: 'userWorkAccept'}">
	//                             <div class="item-media"><i class="icon icon-f7"></i></div>
	//                             <div class="item-inner">
	//                                 <div class="item-title">接单任务</div>
	//                             </div>
	//                         </a>
	//                     </li>
	//                 </ul>
	//             </div>
	//             <div class="list-block">
	//                 <ul>
	//                     <li class="item-content item-link">
	//                         <a external v-link="{name: 'service'}">
	//                             <div class="item-media"><i class="icon icon-f7"></i></div>
	//                             <div class="item-inner">
	//                                 <div class="item-title">在线客服</div>
	//                             </div>
	//                         </a>
	//                     </li>
	//                 </ul>
	//             </div>
	//             <router-view></router-view>
	//         </div>
	//     </div>
	// </template>
	//
	// <script>
	exports.default = {
	    data: function data() {
	        return {
	            title: '我的'
	        };
	    },
	    ready: function ready() {
	        //setTimeout(() => {
	        //   this.$route.router.go({ name: 'list'});
	        //},2000);
	    },
	
	    components: {
	        'headerBar': __webpack_require__(88)
	    }
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 258 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"page-user\">\n    <header-bar :title=\"title\"></header-bar>\n    \n    <div class=\"content showHeader showFooter\">\n        <a external v-link=\"\">edit</a>\n\n\n        <div class=\"card-header\">\n            <img src=\"xxxHTMLLINKxxx0.29221163224428890.6575140752829611xxx\">\n            名字\n\n            未认证，点此认证！\n            \n            好评   1\n            中评\n            差评   1\n            收藏\n        </div>\n\n        <div class=\"list-block\">\n            <ul>\n                <li class=\"item-content item-link\">\n                    <a external v-link=\"{name: 'userMoney'}\">\n                        <div class=\"item-media\"><i class=\"icon icon-f7\"></i></div>\n                        <div class=\"item-inner\">\n                            <div class=\"item-title\">我的余额</div>\n                        </div>\n                    </a>\n                </li>\n            </ul>\n        </div>\n        <div class=\"list-block\">\n            <ul>\n                <li class=\"item-content item-link\">\n                    <a external v-link=\"{name: 'userSetting'}\">\n                        <div class=\"item-media\"><i class=\"icon icon-f7\"></i></div>\n                        <div class=\"item-inner\">\n                            <div class=\"item-title\">设置</div>\n                        </div>\n                    </a>\n                </li>\n                <li class=\"item-content item-link\">\n                    <a external v-link=\"{name: 'userWorkServer'}\">\n                        <div class=\"item-media\"><i class=\"icon icon-f7\"></i></div>\n                        <div class=\"item-inner\">\n                            <div class=\"item-title\">发布服务</div>\n                        </div>\n                    </a>\n                </li>\n            </ul>\n        </div>\n        <div class=\"list-block\">\n            <ul>\n                <li class=\"item-content item-link\">\n                    <a external v-link=\"{name: 'userWorkPublish'}\">\n                        <div class=\"item-media\"><i class=\"icon icon-f7\"></i></div>\n                        <div class=\"item-inner\">\n                            <div class=\"item-title\">发单任务</div>\n                        </div>\n                    </a>\n                </li>\n                <li class=\"item-content item-link\">\n                    <a external v-link=\"{name: 'userWorkAccept'}\">\n                        <div class=\"item-media\"><i class=\"icon icon-f7\"></i></div>\n                        <div class=\"item-inner\">\n                            <div class=\"item-title\">接单任务</div>\n                        </div>\n                    </a>\n                </li>\n            </ul>\n        </div>\n        <div class=\"list-block\">\n            <ul>\n                <li class=\"item-content item-link\">\n                    <a external v-link=\"{name: 'service'}\">\n                        <div class=\"item-media\"><i class=\"icon icon-f7\"></i></div>\n                        <div class=\"item-inner\">\n                            <div class=\"item-title\">在线客服</div>\n                        </div>\n                    </a>\n                </li>\n            </ul>\n        </div>\n        <router-view></router-view>\n    </div>\n</div>\n";

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(260)
	__vue_script__ = __webpack_require__(262)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\views\\user\\auth\\step1.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(263)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\personal\\vue-demo-webpack\\src\\views\\user\\auth\\step1.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 260 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 261 */,
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <style lang="less">
	//     @import '../../../less/lib/mixins.less';
	//     .page-authStep1{
	//         .rem(padding, 0, 26);
	//         .stepTitle{
	//             text-align:center;
	//             .rem(font-size, 30);
	//         }
	//         .stepText{
	//             text-align:center;
	//             color:#b2b2b2;
	//             .rem(font-size, 20);
	//             .rem(margin, 16, 0, 0);
	//         }
	//         .progress{
	//             .rem(margin, 64, 0, 26);
	//         }
	//         .params{
	//             .item{
	//                 background:#fff;
	//                 border:1px solid #f6f6f6;
	//                 vertical-align:middle;
	//                 .border-radius(8);
	//                 .rem(margin-bottom, 16);
	//                 .rem(font-size, 24);
	//                 .rem(border-width, 2);
	//                 .rem(padding, 26, 16);
	//             }
	//         }
	//         .ui-floatCenter{
	//             .rem(height, 32);
	//             .rem(margin-top, 18);
	//         }
	//         .ui-floatCenter-item{
	//             .rem(margin, 0, 5);
	//
	//             &.link{
	//                 position:relative;
	//                 .rem(height, 32);
	//                 .rem(width, 34);
	//                 &:before{
	//                     content:' ';
	//                     display: inline-block;
	//                     position:absolute;
	//                     background:#b2b2b2;
	//                     .rem(top, 14);
	//                     .rem(height, 2);
	//                     .rem(width, 32);
	//                 }
	//             }
	//         }
	//         .moblieWrap{
	// 	        border-bottom:1px solid #dedede;
	// 	        .rem(border-bottom-width, 2);
	// 	    }
	//
	// 	    input{
	// 	        display:inline-block;
	// 	        border:0 none;
	// 	        background:none;
	// 	        -webkit-appearance: none;
	// 	        .rem(height, 40);
	// 	        .rem(line-height, 40);
	//
	// 	        &#moblie{
	// 	            .rem(width, 300);
	// 	        }
	// 	        &#code{
	// 	            .rem(width, 150);
	// 	        }
	// 	    }
	// 	    input::-webkit-outer-spin-button,
	// 		input::-webkit-inner-spin-button{
	// 		    -webkit-appearance: none !important;
	// 		    margin: 0;
	// 		}
	//
	// 	    label{
	// 	        display:inline-block;
	// 	        height:100%;
	// 	        border-right:1px solid #dedede;
	// 	        .rem(border-right-width, 2);
	// 	        .rem(width, 120);
	// 	    }
	//
	// 	    #getCode{
	// 	        background:#54c5ff;
	// 	        color:#fff;
	// 	        text-align:center;
	// 	        .rem(height, 40);
	// 	        .rem(line-height, 40);
	// 	        .rem(padding, 0, 20);
	// 	        .border-radius(8);
	//
	// 	        &.disable{
	// 	            background:#b2b2b2
	// 	        }
	// 	    }
	// 	    .toastWrap{
	// 	        display:block;
	// 	        position: absolute;
	// 	        top:20%;
	// 	        top:20%;
	// 	        width:100%;
	// 	        .rem(padding, 10);
	// 	    }
	// 	    .toast{
	// 	        display:block;
	// 	        width:100%;
	// 	        text-align:center;
	// 	        font-size: 10px;;
	// 	    }
	//     }
	// </style>
	//
	// <template>
	//     <div class="page-authStep1">
	//         <header-bar :title="title" :back="true"></header-bar>
	//         <div class="content showHeader">
	//             <div class="stepTitle">申请认证</div>
	//             <div class="ui-floatCenter">
	//                 <div class="ui-sl-floatCenter">
	//                     <i class="ui-floatCenter-item icon icon-anquanbaozhang"></i>
	//                     <i class="ui-floatCenter-item icon link"></i>
	//                     <i class="ui-floatCenter-item icon icon-anquanbaozhang icon-anquanbaozhang2"></i>
	//                 </div>
	// 			</div>
	//             <div class="stepText">将在一个工作日内审核完成!</div>
	//             <div class="progress">
	//                 <span class="item cur"><span>1</span>请填写基本信息</span>
	//                 <span class="item"><span>2</span>上传证照</span>
	//                 <span class="item"><span>3</span>服务设置</span>
	//             </div>
	//             <div class="params">
	//                 <div class="item clearfix" @click="selectCity">
	//                     <span class="pull-left">您的城市</span>
	//                     <span class="pull-right">{{formData.city_name}}</span>
	//                 </div>
	//                 <div class="item clearfix" @click="selectSchool" v-if="formData.city_id">
	//                     <span class="pull-left">您的学校</span>
	//                     <span class="pull-right">{{formData.school_name}}</span>
	//                 </div>
	// 				<bind-mobile :mobile.sync="formData.mobile"></bind-mobile>
	//             </div>
	//         </div>
	//         <span
	//             class="ui-btn ui-btn-big"
	//             v-if="formData.city_id && formData.school_id && formData.mobile"
	//             @click="goAuth"
	//         >
	//             下一步
	//         </span>
	//     </div>
	//
	// </template>
	//
	// <script>
	exports.default = {
	    data: function data() {
	        return {
	            title: '认证',
	            formData: {
	                city_name: null,
	                city_id: null,
	                school_id: null,
	                school_name: null,
	                mobile: null
	            }
	        };
	    },
	
	    route: {
	        data: function data(transition) {
	            var self = this,
	                query = transition.to.query;
	
	            if (query.city_id) {
	                $.extend(self.formData, query);
	            } else {
	                //$.showPreloader('数据加载中...');
	                $.ajax({
	                    url: "/soytime/ca/caInfo",
	                    type: 'POST',
	                    dataType: 'json',
	                    success: function success(data) {
	                        var result = data.result,
	                            status = result.sutdent_auth;
	
	                        //$.hidePreloader();
	
	                        // 0：未认证，1：已认证，2：认证中，3：认证失败
	                        if (status == 1) {
	                            self.$route.router.go({ name: 'authSuccess', query: self.formData });
	                            return;
	                        } else if (status == 2) {
	                            self.$route.router.go({ name: 'authChecking', query: self.formData });
	                            return;
	                        } else if (status == 3) {
	                            //$.alert(result.explain,'认证失败');
	                        }
	
	                        $.extend(self.formData, result);
	                    },
	                    error: function error() {
	                        //$.hidePreloader();
	                        //$.toast('网络不给力，请重新尝试！');
	                    }
	                });
	            }
	        }
	    },
	    methods: {
	        goAuth: function goAuth() {
	            var self = this;
	            self.$route.router.go({ name: 'authStep2', query: self.formData });
	        },
	        selectCity: function selectCity() {
	            var self = this;
	            self.$route.router.go({ name: 'selectCity', query: self.formData });
	        },
	        selectSchool: function selectSchool() {
	            var self = this;
	            self.$route.router.go({ name: 'selectSchool', query: self.formData });
	        }
	    },
	    components: {
	        'headerBar': __webpack_require__(88),
	        'bindMobile': __webpack_require__(204)
	    }
	};

	// </script>
	//
	//
	//
	//
	//
	//

	/* generated by vue-loader */

/***/ },
/* 263 */
/***/ function(module, exports) {

	module.exports = "\n    <div class=\"page-authStep1\">\n        <header-bar :title=\"title\" :back=\"true\"></header-bar>\n        <div class=\"content showHeader\">\n            <div class=\"stepTitle\">申请认证</div>\n            <div class=\"ui-floatCenter\">\n                <div class=\"ui-sl-floatCenter\">\n                    <i class=\"ui-floatCenter-item icon icon-anquanbaozhang\"></i>\n                    <i class=\"ui-floatCenter-item icon link\"></i>\n                    <i class=\"ui-floatCenter-item icon icon-anquanbaozhang icon-anquanbaozhang2\"></i>\n                </div>\n\t\t\t</div>\n            <div class=\"stepText\">将在一个工作日内审核完成!</div>\n            <div class=\"progress\">\n                <span class=\"item cur\"><span>1</span>请填写基本信息</span>\n                <span class=\"item\"><span>2</span>上传证照</span>\n                <span class=\"item\"><span>3</span>服务设置</span>\n            </div>\n            <div class=\"params\">\n                <div class=\"item clearfix\" @click=\"selectCity\">\n                    <span class=\"pull-left\">您的城市</span>\n                    <span class=\"pull-right\">{{formData.city_name}}</span>\n                </div>\n                <div class=\"item clearfix\" @click=\"selectSchool\" v-if=\"formData.city_id\">\n                    <span class=\"pull-left\">您的学校</span>\n                    <span class=\"pull-right\">{{formData.school_name}}</span>\n                </div>\n\t\t\t\t<bind-mobile :mobile.sync=\"formData.mobile\"></bind-mobile>\n            </div>\n        </div>\n        <span \n            class=\"ui-btn ui-btn-big\"\n            v-if=\"formData.city_id && formData.school_id && formData.mobile\" \n            @click=\"goAuth\"\n        >\n            下一步\n        </span>\n    </div>\n    \n";

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(265)
	__vue_script__ = __webpack_require__(267)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\views\\user\\auth\\selectMap.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(268)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\personal\\vue-demo-webpack\\src\\views\\user\\auth\\selectMap.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 265 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 266 */,
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <style lang="less">
	// @import '../../../less/lib/mixins.less';
	// .page-selectMap{
	//     .amap-toolbar{
	//         bottom:180px !important;
	//     }
	//
	//     #panel {
	//         position: fixed;
	//         background-color: white;
	//         max-height: 90%;
	//         overflow-y: auto;
	//         left: 0;
	//         bottom: 0;
	//         width: 100%;
	//         border-bottom: solid 1px silver;
	//         z-index:200;
	//         display:table;
	//         background:#54C5FF;
	//
	//         span{
	//             display: table-cell;
	//             vertical-align: middle;
	//             .rem(padding, 20);
	//             .rem(font-size, 24);
	//         }
	//
	//         .mapText{
	//             width:80%;
	// 			background:#fff;
	//         }
	//         .mapBtn{
	//             width:20%;
	//             text-align:center;
	// 			color:#fff;
	//         }
	//     }
	//
	//     .amap-geo{
	//         position: absolute;
	//         left: 0;
	//         bottom: 90px;
	//     }
	// }
	// </style>
	//
	// <template>
	//     <div transition="page" class="page-selectMap page-current">
	//         <header-bar :title="title" :back="true"></header-bar>
	//         <div id="amapWrap" class="content"></div>
	// 		<div id="panel"></div>
	//     </div>
	// </template>
	// <script>
	exports.default = {
	    data: function data() {
	        return {
	            title: '地图选点',
	            formData: {
	                latitude: '',
	                longitude: '',
	                workplace: '',
	                city_id: '',
	                school_id: ''
	            }
	        };
	    },
	
	    route: {
	        data: function data(transition) {
	            var self = this,
	                query = transition.to.query;
	
	            $.extend(self.formData, query);
	        }
	    },
	    ready: function ready() {
	
	        if (!window.AMap) {
	            setTimeout(function () {
	                location.reload();
	            }, 15000);
	            return;
	        }
	
	        var self = this,
	            map = new AMap.Map('amapWrap', {
	            resizeEnable: true,
	            zoom: 14
	        }),
	            geolocation = null,
	            geocoder = null,
	            marker = null,
	            placeSearch = null,
	            toAds = function toAds(lnglatXY) {
	            geocoder.getAddress(lnglatXY, function (status, result) {
	                if (status === 'complete' && result.info === 'OK') {
	                    (function () {
	                        var ads = result.regeocode.formattedAddress,
	                            panel = $('#panel').html('<span class="mapText">' + ads + '</span><span class="mapBtn">确定</span>');
	
	                        panel.on('click', '.mapBtn', function (e) {
	                            self.formData.workplace = ads;
	                            self.formData.latitude = lnglatXY[0];
	                            self.formData.longitude = lnglatXY[1];
	                            self.$route.router.go('/auth/step3?' + $.param(self.formData));
	                            return false;
	                        });
	                    })();
	                }
	            });
	        };
	
	        map.plugin(["AMap.ToolBar"], function () {
	            map.addControl(new AMap.ToolBar());
	        });
	
	        map.plugin('AMap.Geolocation', function () {
	            geolocation = new AMap.Geolocation({
	                enableHighAccuracy: true, //是否使用高精度定位，默认:true
	                timeout: 10000, //超过10秒后停止定位，默认：无穷大
	                maximumAge: 0, //定位结果缓存0毫秒，默认：0
	                convert: true, //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
	                showButton: true, //显示定位按钮，默认：true
	                buttonPosition: 'LB', //定位按钮停靠位置，默认：'LB'，左下角
	                buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
	                showMarker: true, //定位成功后在定位到的位置显示点标记，默认：true
	                showCircle: false, //定位成功后用圆圈表示定位精度范围，默认：true
	                panToLocation: true, //定位成功后将定位到的位置作为地图中心点，默认：true
	                zoomToAccuracy: false //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
	            });
	            map.addControl(geolocation);
	        });
	
	        map.plugin('AMap.Geocoder', function () {
	            geocoder = new AMap.Geocoder({
	                radius: 1000,
	                extensions: "all"
	            });
	        });
	
	        /* 确保两个地图插件都有调用到 */
	        if (geolocation && geocoder) {
	            /* 定位 */
	            geolocation.getCurrentPosition();
	
	            /* 定位完成后回调 */
	            AMap.event.addListener(geolocation, 'complete', function (data) {
	                toAds([data.position.getLng(), data.position.getLat()]);
	                map.on('click', function (e) {
	                    var position = [e.lnglat.getLng(), e.lnglat.getLat()];
	
	                    if (marker) {
	                        marker.setPosition(position);
	                        toAds(position);
	                    } else {
	                        marker = new AMap.Marker({
	                            icon: "http://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
	                            position: position
	                        });
	                        marker.setMap(map);
	                        toAds(position);
	                    }
	                });
	            });
	        } else {
	            setTimeout(function () {
	                location.reload();
	            }, 15000);
	        }
	    },
	
	    components: {
	        'headerBar': __webpack_require__(88)
	    }
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 268 */
/***/ function(module, exports) {

	module.exports = "\n    <div transition=\"page\" class=\"page-selectMap page-current\">\n        <header-bar :title=\"title\" :back=\"true\"></header-bar>\n        <div id=\"amapWrap\" class=\"content\"></div>\n\t\t<div id=\"panel\"></div>\n    </div>\n";

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(270)
	__vue_script__ = __webpack_require__(273)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\views\\user\\auth\\step2.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(274)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\personal\\vue-demo-webpack\\src\\views\\user\\auth\\step2.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 270 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 271 */,
/* 272 */,
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <style lang="less">
	// @import '../../../less/lib/mixins.less';
	// .page-authStep2{
	//     .item{
	//         .pull-left{
	//             .rem(height, 142);
	//             .rem(line-height, 142);
	//         }
	//     }
	//     .icon-anonymous2{
	//         background:url(../../../img/anonymous2.svg) no-repeat;
	//         .rem(background-size, 82, 82);
	//         .rem(height, 82);
	//         .rem(width, 82);
	//
	//     }
	//     .addPhoto{
	//         border:1px dotted #68ccff;
	//         .rem(padding, 28);
	//         .rem(border-width, 2);
	//     }
	//     img{
	//         display:inline-block;
	//         .rem(width, 142);
	//         .rem(height, 142);
	//     }
	// }
	// </style>
	//
	// <template>
	//     <div class="page-authStep1 page-authStep2">
	//         <header-bar :title="title" :back="true"></header-bar>
	//         <div class="content showHeader">
	//             <div class="stepTitle">申请认证</div>
	//             <div class="ui-floatCenter">
	//                 <div class="ui-sl-floatCenter">
	//                     <i class="ui-floatCenter-item icon icon-anquanbaozhang"></i>
	//                     <i class="ui-floatCenter-item icon link"></i>
	//                     <i class="ui-floatCenter-item icon icon-anquanbaozhang icon-anquanbaozhang2"></i>
	//                 </div>
	// 			</div>
	//             <div class="stepText">将在一个工作日内审核完成!</div>
	//             <div class="progress">
	//                 <span class="item"><span>1</span>请填写基本信息</span>
	//                 <span class="item cur"><span>2</span>上传证照</span>
	//                 <span class="item"><span>3</span>服务设置</span>
	//             </div>
	//             <div class="params">
	//                 <div class="item clearfix" @click="getPersionPic">
	//                     <span class="pull-left">个人照片</span>
	//                     <span class="pull-right" v-if="tmpUrlData.auth_head_url">
	//                         <img :src="tmpUrlData.auth_head_url" />
	//                     </span>
	//                     <span class="pull-right addPhoto" v-else="!tmpUrlData.auth_head_url">
	//                         <i class="icon icon-anonymous2"></i>
	//                     </span>
	//                 </div>
	//                 <div class="item clearfix" @click="getStudentPic">
	//                     <span class="pull-left">学生证</span>
	//                     <span class="pull-right" v-if="tmpUrlData.auth_student_card_url">
	//                         <img :src="tmpUrlData.auth_student_card_url" />
	//                     </span>
	//                     <span class="pull-right addPhoto" v-else="!tmpUrlData.auth_student_card_url">
	//                         <i class="icon icon-anonymous2"></i>
	//                     </span>
	//                 </div>
	//             </div>
	//         </div>
	//         <span
	//             class="ui-btn ui-btn-big"
	//             v-if="tmpUrlData.auth_head_url && tmpUrlData.auth_student_card_url"
	//             @click="goAuth"
	//         >
	//             下一步
	//         </span>
	//     </div>
	// </template>
	//
	// <script>
	exports.default = {
	    data: function data() {
	        return {
	            title: '认证',
	            formData: {},
	            tmpUrlData: {}
	        };
	    },
	
	    route: {
	        data: function data(transition) {
	            var self = this,
	                query = transition.to.query;
	
	            self.tmpUrlData = {
	                auth_head_url: query.auth_head_url ? '/soytime/file/renzheng/' + query.auth_head_url : null,
	                auth_student_card_url: query.auth_student_card_url ? '/soytime/file/renzheng/' + query.auth_student_card_url : null
	            };
	
	            $.extend(self.formData, query);
	        }
	    },
	    components: {
	        'headerBar': __webpack_require__(88)
	    },
	    methods: {
	        goAuth: function goAuth() {
	            var self = this;
	            self.$route.router.go('/auth/step3?' + $.param(self.formData));
	        },
	        getPersionPic: function getPersionPic() {
	            var self = this;
	            uploadimg(1, function (data) {
	                self.formData.auth_head_url = data;
	                self.tmpUrlData.auth_head_url = '/soytime/file/renzheng/' + data;
	            });
	        },
	        getStudentPic: function getStudentPic() {
	            var self = this;
	            uploadimg(2, function (data) {
	                self.formData.auth_student_card_url = data;
	                self.tmpUrlData.auth_student_card_url = '/soytime/file/renzheng/' + data;
	            });
	        }
	    }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 274 */
/***/ function(module, exports) {

	module.exports = "\n    <div class=\"page-authStep1 page-authStep2\">\n        <header-bar :title=\"title\" :back=\"true\"></header-bar>\n        <div class=\"content showHeader\">\n            <div class=\"stepTitle\">申请认证</div>\n            <div class=\"ui-floatCenter\">\n                <div class=\"ui-sl-floatCenter\">\n                    <i class=\"ui-floatCenter-item icon icon-anquanbaozhang\"></i>\n                    <i class=\"ui-floatCenter-item icon link\"></i>\n                    <i class=\"ui-floatCenter-item icon icon-anquanbaozhang icon-anquanbaozhang2\"></i>\n                </div>\n\t\t\t</div>\n            <div class=\"stepText\">将在一个工作日内审核完成!</div>\n            <div class=\"progress\">\n                <span class=\"item\"><span>1</span>请填写基本信息</span>\n                <span class=\"item cur\"><span>2</span>上传证照</span>\n                <span class=\"item\"><span>3</span>服务设置</span>\n            </div>\n            <div class=\"params\">\n                <div class=\"item clearfix\" @click=\"getPersionPic\">\n                    <span class=\"pull-left\">个人照片</span>\n                    <span class=\"pull-right\" v-if=\"tmpUrlData.auth_head_url\">\n                        <img :src=\"tmpUrlData.auth_head_url\" />\n                    </span>\n                    <span class=\"pull-right addPhoto\" v-else=\"!tmpUrlData.auth_head_url\">\n                        <i class=\"icon icon-anonymous2\"></i>\n                    </span>\n                </div>\n                <div class=\"item clearfix\" @click=\"getStudentPic\">\n                    <span class=\"pull-left\">学生证</span>\n                    <span class=\"pull-right\" v-if=\"tmpUrlData.auth_student_card_url\">\n                        <img :src=\"tmpUrlData.auth_student_card_url\" />\n                    </span>\n                    <span class=\"pull-right addPhoto\" v-else=\"!tmpUrlData.auth_student_card_url\">\n                        <i class=\"icon icon-anonymous2\"></i>\n                    </span>\n                </div>\n            </div>\n        </div>\n        <span \n            class=\"ui-btn ui-btn-big\"\n            v-if=\"tmpUrlData.auth_head_url && tmpUrlData.auth_student_card_url\" \n            @click=\"goAuth\"\n        >\n            下一步\n        </span>\n    </div>\n";

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(276)
	__vue_script__ = __webpack_require__(278)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\views\\user\\auth\\step3.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(279)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\personal\\vue-demo-webpack\\src\\views\\user\\auth\\step3.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 276 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 277 */,
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <style lang="less">
	//     @import '../../../less/lib/mixins.less';
	//     .page-authStep3{
	//         .itemTitle{
	//             border-bottom:1px solid #b2b2b2;
	//             .rem(border-bottom-width, 2);
	//             .rem(padding, 0, 0, 26);
	//             .rem(margin-bottom, 10);
	//         }
	//     }
	// </style>
	//
	// <template>
	//     <div class="page-authStep1 page-authStep3">
	//         <header-bar :title="title" :back="true"></header-bar>
	//         <div class="content showHeader" :class="{showFooter: (formData.sceneIds && formData.timeConf && formData.longitude)}">
	//             <div class="stepTitle">申请认证</div>
	//             <div class="ui-floatCenter">
	//                 <div class="ui-sl-floatCenter">
	//                     <i class="ui-floatCenter-item icon icon-anquanbaozhang"></i>
	//                     <i class="ui-floatCenter-item icon link"></i>
	//                     <i class="ui-floatCenter-item icon icon-anquanbaozhang icon-anquanbaozhang2"></i>
	//                 </div>
	// 			</div>
	//             <div class="stepText">将在一个工作日内审核完成!</div>
	//             <div class="progress">
	//                 <span class="item"><span>1</span>请填写基本信息</span>
	//                 <span class="item"><span>2</span>上传证照</span>
	//                 <span class="item cur"><span>3</span>服务设置</span>
	//             </div>
	//             <div class="params">
	//                 <div class="item">
	//                     <div class="itemTitle">请选择工作类别(可多选)</div>
	//                     <scene-type
	//                         :scene-list="indexData.sceneList"
	//                         :scene-ids.sync="formData.sceneIds"
	//                     ></scene-type>
	//                 </div>
	//                 <div class="item clearfix" @click="getMap">
	//                     <span class="pull-left">
	//                         工作区域(选择)
	//                     </span>
	//                     <span class="pull-right">{{formData.workplace}}</span>
	//                 </div>
	//                 <div class="item">
	//                     <div class="itemTitle">工作时间(可多选 ）</div>
	//                     <time-conf :timer.sync="formData.timeConf"></time-conf>
	//                 </div>
	//             </div>
	//         </div>
	//         <span
	//             class="ui-btn ui-btn-big"
	//             v-if="(formData.sceneIds && formData.timeConf && formData.longitude)"
	//             @click="submit"
	//         >
	//             下一步
	//         </span>
	//     </div>
	// </template>
	//
	// <script>
	exports.default = {
	    data: function data() {
	        return {
	            indexData: indexData,
	            title: '认证',
	            formData: {
	                sceneIds: null,
	                timeConf: null,
	                longitude: null,
	                workplace: null
	            }
	        };
	    },
	
	    route: {
	        data: function data(transition) {
	            var self = this,
	                query = transition.to.query;
	
	            $.extend(self.formData, query);
	        }
	    },
	    components: {
	        'timeConf': __webpack_require__(132),
	        'sceneType': __webpack_require__(164),
	        'headerBar': __webpack_require__(88)
	    },
	    methods: {
	        getMap: function getMap() {
	            var self = this;
	            self.$route.router.go('/auth/selectMap?' + $.param(self.formData));
	        },
	        submit: function submit() {
	            var self = this;
	            //$.showPreloader('正在努力提交...')
	            $.ajax({
	                url: "/soytime/ca/save",
	                type: 'POST',
	                dataType: 'json',
	                data: self.formData,
	                success: function success(data) {
	                    if (data.success) {
	                        $.hidePreloader();
	                        self.$route.router.go('/auth/checking');
	                    }
	                },
	                error: function error() {
	                    //$.hidePreloader();
	                    //$.toast('网络不给力，请尝试重新提交！');
	                }
	            });
	        }
	    }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 279 */
/***/ function(module, exports) {

	module.exports = "\n    <div class=\"page-authStep1 page-authStep3\">\n        <header-bar :title=\"title\" :back=\"true\"></header-bar>\n        <div class=\"content showHeader\" :class=\"{showFooter: (formData.sceneIds && formData.timeConf && formData.longitude)}\">\n            <div class=\"stepTitle\">申请认证</div>\n            <div class=\"ui-floatCenter\">\n                <div class=\"ui-sl-floatCenter\">\n                    <i class=\"ui-floatCenter-item icon icon-anquanbaozhang\"></i>\n                    <i class=\"ui-floatCenter-item icon link\"></i>\n                    <i class=\"ui-floatCenter-item icon icon-anquanbaozhang icon-anquanbaozhang2\"></i>\n                </div>\n\t\t\t</div>\n            <div class=\"stepText\">将在一个工作日内审核完成!</div>\n            <div class=\"progress\">\n                <span class=\"item\"><span>1</span>请填写基本信息</span>\n                <span class=\"item\"><span>2</span>上传证照</span>\n                <span class=\"item cur\"><span>3</span>服务设置</span>\n            </div>\n            <div class=\"params\">\n                <div class=\"item\">\n                    <div class=\"itemTitle\">请选择工作类别(可多选)</div>\n                    <scene-type \n                        :scene-list=\"indexData.sceneList\"\n                        :scene-ids.sync=\"formData.sceneIds\"\n                    ></scene-type>\n                </div>\n                <div class=\"item clearfix\" @click=\"getMap\">\n                    <span class=\"pull-left\">\n                        工作区域(选择)\n                    </span>\n                    <span class=\"pull-right\">{{formData.workplace}}</span>\n                </div>\n                <div class=\"item\">\n                    <div class=\"itemTitle\">工作时间(可多选 ）</div>\n                    <time-conf :timer.sync=\"formData.timeConf\"></time-conf>\n                </div>\n            </div>\n        </div>\n        <span \n            class=\"ui-btn ui-btn-big\"\n            v-if=\"(formData.sceneIds && formData.timeConf && formData.longitude)\"\n            @click=\"submit\"\n        >\n            下一步\n        </span>\n    </div>\n";

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(281)
	__vue_script__ = __webpack_require__(283)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\views\\user\\auth\\checking.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(284)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\personal\\vue-demo-webpack\\src\\views\\user\\auth\\checking.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 281 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 282 */,
/* 283 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <style lang="less">
	// @import '../../../less/lib/mixins.less';
	// .page-checking{
	//     background:#54c5ff;
	//     text-align:center;
	//     height:100%;
	//
	//     h2{
	//         .rem(padding, 120, 30);
	//         .rem(font-size, 60);
	//         .rem(padding-bottom, 60);
	// 		margin:0;
	//     }
	//
	//     p{
	//         color:#fff;
	//         .rem(font-size, 30);
	//         margin:0;
	//     }
	// }
	// </style>
	//
	// <template>
	//     <div class="page-checking">
	//         <h2>等待是</h2>
	//         <div>
	//             <p>酱油已收到您的认证信息！</p>
	//             <p>将在一个工作日内帮您完成认证。</p>
	//         </div>
	//     </div>
	// </template>
	//
	// <script>
	exports.default = {
	    data: function data() {}
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 284 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"page-checking\">\n    <h2>等待是</h2>\n    <div>\n        <p>酱油已收到您的认证信息！</p>\n        <p>将在一个工作日内帮您完成认证。</p>\n    </div>\n</div>\n";

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(286)
	__vue_script__ = __webpack_require__(288)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\views\\user\\auth\\success.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(289)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\personal\\vue-demo-webpack\\src\\views\\user\\auth\\success.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 286 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 287 */,
/* 288 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <style lang="less">
	// @import '../../../less/lib/mixins.less';
	// .page-success{
	//     background:#54c5ff;
	//     text-align:center;
	//     height:100%;
	//
	//     h2{
	//         .rem(padding, 120, 30);
	//         .rem(font-size, 60);
	//         .rem(padding-bottom, 60);
	// 		margin:0;
	//     }
	//
	//     p{
	//         color:#fff;
	//         .rem(font-size, 30);
	//         margin:0;
	//     }
	// }
	// </style>
	//
	// <template>
	//     <div class="page-success">
	//         <h2>开心是</h2>
	//         <div>
	//             <p>恭喜您！</p>
	//             <p>成功通过认证，可以开始穿衣服了！亲</p>
	//         </div>
	//     </div>
	// </template>
	//
	// <script>
	exports.default = {
	    data: function data() {}
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 289 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"page-success\">\n    <h2>开心是</h2>\n    <div>\n        <p>恭喜您！</p>\n        <p>成功通过认证，可以开始穿衣服了！亲</p>\n    </div>\n</div>\n";

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(291)
	__vue_script__ = __webpack_require__(293)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\views\\common\\selectCity.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(294)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\personal\\vue-demo-webpack\\src\\views\\common\\selectCity.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 291 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 292 */,
/* 293 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <style lang="less">
	// @import '../../less/lib/mixins.less';
	// .page-selectCity{
	//     height:100%;
	//     background:#fff;
	//     .bar{
	//         background:#fff;
	//         /*
	//         &:after{
	//             background:none;
	//         }
	//         */
	//     }
	//     .list{
	//         li{
	//             border-bottom:1px solid #dedede;
	//             .rem(font-size, 24);
	//             .rem(height, 68);
	//             .rem(line-height, 68);
	//             .rem(padding, 0, 26);
	//             .rem(border-bottom-width, 2);
	//         }
	//     }
	//     #abc{
	//         position:absolute;
	//         bottom:0.2rem;
	//         right:0.2rem;
	//         line-height: 0.8rem;
	//         font-size: 0.5rem;
	//     }
	// }
	// </style>
	//
	// <template>
	//     <div class="page-selectCity" transition="page" >
	//
	//         <div class="bar">
	//             <div class="searchbar">
	//                 <a class="searchbar-cancel">取消</a>
	//                 <div class="search-input">
	//                     <label class="icon icon-search" for="search"></label>
	//                     <input type="text" id='search' v-model="keyword" placeholder='输入关键字...'/>
	//                 </div>
	//             </div>
	//         </div>
	//
	//         <div class="content showHeader">
	//             <ul class="list" v-if="!tmpData.length">
	// 				<li v-for="item in indexData.areaList" @click="goAuth(item)">
	//                     {{item.city_name}}
	//                 </li>
	//             </ul>
	//             <ul class="list" v-else="tmpData.length">
	//                 <li v-for="item in tmpData" @click="goAuth(item)">
	//                     {{item.city_name}}
	//                 </li>
	//             </ul>
	//         </div>
	//     </div>
	//
	// </template>
	//
	// <script>
	/*
	<ul id="abc">
	            <li>A</li>
	            <li>B</li>
	            <li>C</li>
	            <li>D</li>
	            <li>E</li>
	            <li>F</li>
	            <li>G</li>
	            <li>H</li>
	            <li>I</li>
	            <li>J</li>
	            <li>K</li>
	            <li>L</li>
	            <li>M</li>
	            <li>N</li>
	            <li>O</li>
	            <li>P</li>
	            <li>Q</li>
	            <li>R</li>
	            <li>S</li>
	            <li>T</li>
	            <li>U</li>
	            <li>V</li>
	            <li>W</li>
	            <li>X</li>
	            <li>Y</li>
	            <li>Z</li>
	        </ul>
	
	*/
	
	exports.default = {
	    data: function data() {
	        return {
	            keyword: '',
	            tmpData: [],
	            indexData: indexData,
	            formData: {
	                city_id: null,
	                city_name: null
	            }
	        };
	    },
	
	    route: {
	        data: function data(transition) {
	            var self = this,
	                query = transition.to.query;
	
	            $.extend(self.formData, query);
	        }
	    },
	    watch: {
	        keyword: function keyword() {
	            var self = this;
	            self.tmpData = self.filteData(self.keyword);
	        }
	    },
	    methods: {
	        goAuth: function goAuth(item) {
	            var self = this;
	            self.formData.city_id = item.city_id;
	            self.formData.city_name = item.city_name;
	            self.$route.router.go({ name: 'auth', query: self.formData });
	            //self.$route.router.go('/auth?' + $.param( self.formData ) );
	        },
	        filteData: function filteData(keyword) {
	            var self = this,
	                allData = self.indexData.areaList,
	                len = allData.length,
	                data = [];
	
	            for (var i = 0; i < len; i++) {
	                var item = allData[i],
	                    reg = new RegExp(keyword),
	                    str = item.first_name + item.city_name + item.short_name + 'ç' + item.first_name;
	
	                if (reg.test(str)) {
	                    data.push(item);
	                }
	            }
	
	            return data;
	        }
	    }
	};
	// </script>
	//
	//
	//
	//
	//
	//
	//
	//

	/* generated by vue-loader */

/***/ },
/* 294 */
/***/ function(module, exports) {

	module.exports = "\n    <div class=\"page-selectCity\" transition=\"page\" >\n\n        <div class=\"bar\">\n            <div class=\"searchbar\">\n                <a class=\"searchbar-cancel\">取消</a>\n                <div class=\"search-input\">\n                    <label class=\"icon icon-search\" for=\"search\"></label>\n                    <input type=\"text\" id='search' v-model=\"keyword\" placeholder='输入关键字...'/>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"content showHeader\">\n            <ul class=\"list\" v-if=\"!tmpData.length\">\n\t\t\t\t<li v-for=\"item in indexData.areaList\" @click=\"goAuth(item)\">\n                    {{item.city_name}}\n                </li>\n            </ul>\n            <ul class=\"list\" v-else=\"tmpData.length\">\n                <li v-for=\"item in tmpData\" @click=\"goAuth(item)\">\n                    {{item.city_name}}\n                </li>\n            </ul>\n        </div>\n    </div>\n\n";

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(296)
	__vue_script__ = __webpack_require__(298)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\views\\common\\selectSchool.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(299)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\personal\\vue-demo-webpack\\src\\views\\common\\selectSchool.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 296 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 297 */,
/* 298 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <style lang="less">
	//
	// </style>
	//
	// <template>
	//     <div id="area" class="page-selectCity page-selectSchool" transition="page" >
	//
	//         <div class="bar">
	//             <div class="searchbar">
	//                 <a class="searchbar-cancel">取消</a>
	//                 <div class="search-input">
	//                     <label class="icon icon-search" for="search"></label>
	//                     <input type="text" id='search' v-model="keyword" placeholder='输入关键字...'/>
	//                 </div>
	//             </div>
	//         </div>
	//
	//         <div class="content showHeader">
	//             <ul class="list" v-if="!tmpData.length">
	// 				<li v-for="item in schoolList" @click="goAuth(item)">
	//                     {{item.school_name}}
	//                 </li>
	//             </ul>
	//             <ul class="list" v-else="tmpData.length">
	// 				<li v-for="item in tmpData" @click="goAuth(item)">
	//                     {{item.school_name}}
	//                 </li>
	//             </ul>
	//         </div>
	//
	//     </div>
	// </template>
	//
	// <script>
	exports.default = {
	    data: function data() {
	        return {
	            keyword: '',
	            tmpData: [],
	            schoolList: null,
	            formData: {
	                city_id: null,
	                city_name: null,
	                school_id: null,
	                school_name: null
	            }
	        };
	    },
	
	    watch: {
	        keyword: function keyword() {
	            this.tmpData = this.filteData(this.keyword);
	        }
	    },
	    route: {
	        data: function data(transition) {
	            var self = this,
	                query = transition.to.query;
	
	            $.extend(self.formData, query);
	
	            $.ajax({
	                url: "/soytime/data/loadSchool",
	                type: 'POST',
	                dataType: 'json',
	                data: self.formData,
	                success: function success(data) {
	                    self.schoolList = data.result;
	                }
	            });
	
	            transition.next();
	        }
	    },
	    methods: {
	        goAuth: function goAuth(item) {
	            var self = this;
	            self.formData.school_id = item.school_id;
	            self.formData.school_name = item.school_name;
	
	            if (self.formData.form == 'onekeyOrder') {
	                self.$route.router.go({ 'name': 'sceneOneKeyOrder', query: self.formData });
	            } else if (self.formData.form == 'scene') {
	                self.$route.router.go({ 'name': 'scene', query: self.formData });
	            } else {
	                self.$route.router.go({ 'name': 'auth', query: self.formData });
	            }
	        },
	        filteData: function filteData(keyword) {
	            var self = this,
	                allData = self.schoolList,
	                len = allData.length,
	                data = [];
	
	            for (var i = 0; i < len; i++) {
	                var item = allData[i];
	                var str = item.school_id + item.school_name;
	                if (str.indexOf(keyword) !== -1) {
	                    data.push(item);
	                }
	            }
	
	            return data;
	        }
	    }
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 299 */
/***/ function(module, exports) {

	module.exports = "\n    <div id=\"area\" class=\"page-selectCity page-selectSchool\" transition=\"page\" >\n\n        <div class=\"bar\">\n            <div class=\"searchbar\">\n                <a class=\"searchbar-cancel\">取消</a>\n                <div class=\"search-input\">\n                    <label class=\"icon icon-search\" for=\"search\"></label>\n                    <input type=\"text\" id='search' v-model=\"keyword\" placeholder='输入关键字...'/>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"content showHeader\">\n            <ul class=\"list\" v-if=\"!tmpData.length\">\n\t\t\t\t<li v-for=\"item in schoolList\" @click=\"goAuth(item)\">\n                    {{item.school_name}}\n                </li>\n            </ul>\n            <ul class=\"list\" v-else=\"tmpData.length\">\n\t\t\t\t<li v-for=\"item in tmpData\" @click=\"goAuth(item)\">\n                    {{item.school_name}}\n                </li>\n            </ul>\n        </div>\n\n    </div>\n";

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(301)
	__vue_script__ = __webpack_require__(303)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\views\\common\\selectSex.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(304)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\personal\\vue-demo-webpack\\src\\views\\common\\selectSex.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 301 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 302 */,
/* 303 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <style lang="less">
	//
	// </style>
	//
	// <template>
	//     <div id="area" class="page-selectCity page-selectSchool" transition="page" >
	//
	//         <div class="bar">
	//             <div class="searchbar">
	//                 <a class="searchbar-cancel">取消</a>
	//                 <div class="search-input">
	//                     <label class="icon icon-search" for="search"></label>
	//                     <input type="text" id='search' v-model="keyword" placeholder='输入关键字...'/>
	//                 </div>
	//             </div>
	//         </div>
	//
	//         <div class="content showHeader">
	//             <ul class="list" v-if="!tmpData.length">
	// 				<li v-for="item in schoolList" @click="goAuth(item)">
	//                     {{item.school_name}}
	//                 </li>
	//             </ul>
	//             <ul class="list" v-else="tmpData.length">
	// 				<li v-for="item in tmpData" @click="goAuth(item)">
	//                     {{item.school_name}}
	//                 </li>
	//             </ul>
	//         </div>
	//
	//     </div>
	// </template>
	//
	// <script>
	exports.default = {
	    data: function data() {
	        return {
	            keyword: '',
	            tmpData: [],
	            schoolList: null,
	            formData: {
	                city_id: null,
	                city_name: null,
	                school_id: null,
	                school_name: null
	            }
	        };
	    },
	
	    watch: {
	        keyword: function keyword() {
	            this.tmpData = this.filteData(this.keyword);
	        }
	    },
	    route: {
	        data: function data(transition) {
	            var self = this,
	                query = transition.to.query;
	
	            $.extend(self.formData, query);
	
	            $.ajax({
	                url: "/soytime/data/loadSchool",
	                type: 'POST',
	                dataType: 'json',
	                data: self.formData,
	                success: function success(data) {
	                    self.schoolList = data.result;
	                }
	            });
	
	            transition.next();
	        }
	    },
	    methods: {
	        goAuth: function goAuth(item) {
	            var self = this;
	            self.formData.school_id = item.school_id;
	            self.formData.school_name = item.school_name;
	
	            if (self.formData.form == 'onekeyOrder') {
	                self.$route.router.go({ 'name': 'sceneOneKeyOrder', query: self.formData });
	            } else if (self.formData.form == 'scene') {
	                self.$route.router.go({ 'name': 'scene', query: self.formData });
	            } else {
	                self.$route.router.go({ 'name': 'auth', query: self.formData });
	            }
	        },
	        filteData: function filteData(keyword) {
	            var self = this,
	                allData = self.schoolList,
	                len = allData.length,
	                data = [];
	
	            for (var i = 0; i < len; i++) {
	                var item = allData[i];
	                var str = item.school_id + item.school_name;
	                if (str.indexOf(keyword) !== -1) {
	                    data.push(item);
	                }
	            }
	
	            return data;
	        }
	    }
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 304 */
/***/ function(module, exports) {

	module.exports = "\n    <div id=\"area\" class=\"page-selectCity page-selectSchool\" transition=\"page\" >\n\n        <div class=\"bar\">\n            <div class=\"searchbar\">\n                <a class=\"searchbar-cancel\">取消</a>\n                <div class=\"search-input\">\n                    <label class=\"icon icon-search\" for=\"search\"></label>\n                    <input type=\"text\" id='search' v-model=\"keyword\" placeholder='输入关键字...'/>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"content showHeader\">\n            <ul class=\"list\" v-if=\"!tmpData.length\">\n\t\t\t\t<li v-for=\"item in schoolList\" @click=\"goAuth(item)\">\n                    {{item.school_name}}\n                </li>\n            </ul>\n            <ul class=\"list\" v-else=\"tmpData.length\">\n\t\t\t\t<li v-for=\"item in tmpData\" @click=\"goAuth(item)\">\n                    {{item.school_name}}\n                </li>\n            </ul>\n        </div>\n\n    </div>\n";

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(306)
	__vue_script__ = __webpack_require__(308)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\views\\common\\selectSort.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(309)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\personal\\vue-demo-webpack\\src\\views\\common\\selectSort.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 306 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 307 */,
/* 308 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <style lang="less">
	//
	// </style>
	//
	// <template>
	//     <div id="area" class="page-selectCity page-selectSchool" transition="page" >
	//
	//         <div class="bar">
	//             <div class="searchbar">
	//                 <a class="searchbar-cancel">取消</a>
	//                 <div class="search-input">
	//                     <label class="icon icon-search" for="search"></label>
	//                     <input type="text" id='search' v-model="keyword" placeholder='输入关键字...'/>
	//                 </div>
	//             </div>
	//         </div>
	//
	//         <div class="content showHeader">
	//             <ul class="list" v-if="!tmpData.length">
	// 				<li v-for="item in schoolList" @click="goAuth(item)">
	//                     {{item.school_name}}
	//                 </li>
	//             </ul>
	//             <ul class="list" v-else="tmpData.length">
	// 				<li v-for="item in tmpData" @click="goAuth(item)">
	//                     {{item.school_name}}
	//                 </li>
	//             </ul>
	//         </div>
	//
	//     </div>
	// </template>
	//
	// <script>
	exports.default = {
	    data: function data() {
	        return {
	            keyword: '',
	            tmpData: [],
	            schoolList: null,
	            formData: {
	                city_id: null,
	                city_name: null,
	                school_id: null,
	                school_name: null
	            }
	        };
	    },
	
	    watch: {
	        keyword: function keyword() {
	            this.tmpData = this.filteData(this.keyword);
	        }
	    },
	    route: {
	        data: function data(transition) {
	            var self = this,
	                query = transition.to.query;
	
	            $.extend(self.formData, query);
	
	            $.ajax({
	                url: "/soytime/data/loadSchool",
	                type: 'POST',
	                dataType: 'json',
	                data: self.formData,
	                success: function success(data) {
	                    self.schoolList = data.result;
	                }
	            });
	
	            transition.next();
	        }
	    },
	    methods: {
	        goAuth: function goAuth(item) {
	            var self = this;
	            self.formData.school_id = item.school_id;
	            self.formData.school_name = item.school_name;
	
	            if (self.formData.form == 'onekeyOrder') {
	                self.$route.router.go({ 'name': 'sceneOneKeyOrder', query: self.formData });
	            } else if (self.formData.form == 'scene') {
	                self.$route.router.go({ 'name': 'scene', query: self.formData });
	            } else {
	                self.$route.router.go({ 'name': 'auth', query: self.formData });
	            }
	        },
	        filteData: function filteData(keyword) {
	            var self = this,
	                allData = self.schoolList,
	                len = allData.length,
	                data = [];
	
	            for (var i = 0; i < len; i++) {
	                var item = allData[i];
	                var str = item.school_id + item.school_name;
	                if (str.indexOf(keyword) !== -1) {
	                    data.push(item);
	                }
	            }
	
	            return data;
	        }
	    }
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 309 */
/***/ function(module, exports) {

	module.exports = "\n    <div id=\"area\" class=\"page-selectCity page-selectSchool\" transition=\"page\" >\n\n        <div class=\"bar\">\n            <div class=\"searchbar\">\n                <a class=\"searchbar-cancel\">取消</a>\n                <div class=\"search-input\">\n                    <label class=\"icon icon-search\" for=\"search\"></label>\n                    <input type=\"text\" id='search' v-model=\"keyword\" placeholder='输入关键字...'/>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"content showHeader\">\n            <ul class=\"list\" v-if=\"!tmpData.length\">\n\t\t\t\t<li v-for=\"item in schoolList\" @click=\"goAuth(item)\">\n                    {{item.school_name}}\n                </li>\n            </ul>\n            <ul class=\"list\" v-else=\"tmpData.length\">\n\t\t\t\t<li v-for=\"item in tmpData\" @click=\"goAuth(item)\">\n                    {{item.school_name}}\n                </li>\n            </ul>\n        </div>\n\n    </div>\n";

/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(311)
	__vue_script__ = __webpack_require__(335)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\App.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(341)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\personal\\vue-demo-webpack\\src\\App.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 311 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <style lang="less">
	//     @import 'less/style.less';
	// </style>
	//
	// <template>
	//
	//     <router-view keep-alive></router-view>
	//     <vn-footer v-if="isShowTab"></vn-footer>
	//
	// </template>
	//
	// <script>
	exports.default = {
	    data: function data() {
	        return {
	            isShowTab: true
	        };
	    },
	
	    components: {
	        'vnFooter': __webpack_require__(336),
	        'vnHeader': __webpack_require__(88)
	    }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 336 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(337)
	__vue_script__ = __webpack_require__(339)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\footer.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(340)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\personal\\vue-demo-webpack\\src\\components\\footer.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 337 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 338 */,
/* 339 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <style lang="less">
	// @import '../less/lib/mixins.less';
	// .bar-tab{
	//     background:#fff;
	//     border-top: 1px solid #b2b2b2;
	//     .rem(border-top-width, 2);
	// }
	// </style>
	//
	// <template>
	//     <nav class="bar bar-tab">
	//         <a class="tab-item" external v-link="{ name: 'home', activeClass: 'active'}">
	//             <span class="icon icon-home"></span>
	//             <span class="tab-label">首页</span>
	//         </a>
	//         <a class="tab-item" external  v-link="{ name: 'msg', activeClass: 'active' }">
	//             <span class="icon icon-message"></span>
	//             <span class="tab-label">消息</span>
	//         </a>
	//         <a class="tab-item" external v-link="{ name: 'user', activeClass: 'active' }">
	//             <span class="icon icon-me"></span>
	//             <span class="tab-label">我的{{currentView}}</span>
	//         </a>
	//     </nav>
	// </template>
	//
	// <script>
	exports.default = {
	    replace: true,
	    props: ['isShow'],
	    ready: function ready() {
	        //console.log(this.isShow)
	    }
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 340 */
/***/ function(module, exports) {

	module.exports = "\n<nav class=\"bar bar-tab\">\n    <a class=\"tab-item\" external v-link=\"{ name: 'home', activeClass: 'active'}\">\n        <span class=\"icon icon-home\"></span>\n        <span class=\"tab-label\">首页</span>\n    </a>\n    <a class=\"tab-item\" external  v-link=\"{ name: 'msg', activeClass: 'active' }\">\n        <span class=\"icon icon-message\"></span>\n        <span class=\"tab-label\">消息</span>\n    </a>\n    <a class=\"tab-item\" external v-link=\"{ name: 'user', activeClass: 'active' }\">\n        <span class=\"icon icon-me\"></span>\n        <span class=\"tab-label\">我的{{currentView}}</span>\n    </a>\n</nav>\n";

/***/ },
/* 341 */
/***/ function(module, exports) {

	module.exports = "\n\n<router-view keep-alive></router-view>\n<vn-footer v-if=\"isShowTab\"></vn-footer>\n\n";

/***/ },
/* 342 */
/***/ function(module, exports) {

	"use strict";
	
	exports.sceneCur = function (obj, arr) {
		var sceneId = obj.scene_id;
		for (var i = 0, len = arr.length; i < len; i++) {
			if (sceneId == arr[i]) {
				return true;
			}
		}
	};
	
	exports.timerCur = function (item, subItem, arr) {
		var timer = subItem + '' + (item + 1);
		if (!arr) return;
		for (var i = 0, len = arr.length; i < len; i++) {
			if (timer == arr[i]) {
				return true;
			}
		}
	};
	
	exports.welfareCur = function (obj, arr) {
		var welfareId = obj.welfare_id;
		for (var i = 0, len = arr.length; i < len; i++) {
			if (welfareId == arr[i]) {
				return true;
			}
		}
	};

/***/ }
/******/ ]);
//# sourceMappingURL=main.js.map