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
	
	var _vue = __webpack_require__(36);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _vueRouter = __webpack_require__(38);
	
	var _vueRouter2 = _interopRequireDefault(_vueRouter);
	
	var _vueInfiniteScroll = __webpack_require__(39);
	
	var _vueInfiniteScroll2 = _interopRequireDefault(_vueInfiniteScroll);
	
	var _store = __webpack_require__(40);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _routers = __webpack_require__(42);
	
	var _routers2 = _interopRequireDefault(_routers);
	
	var _App = __webpack_require__(288);
	
	var _App2 = _interopRequireDefault(_App);
	
	var _filters = __webpack_require__(320);
	
	var _filters2 = _interopRequireDefault(_filters);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_vue2.default.use(_vueInfiniteScroll2.default);
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
	module.exports = __webpack_require__(32).Object.keys;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(27);
	
	__webpack_require__(29)('keys', function($keys){
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

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(30)
	  , core    = __webpack_require__(32)
	  , fails   = __webpack_require__(35);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(31)
	  , core      = __webpack_require__(32)
	  , ctx       = __webpack_require__(33)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 31 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 32 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(34);
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
/* 34 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/*!
	 * Vue.js v1.0.17
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
	 * Define a non-enumerable property
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
	 * @param {String} str
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
	    var cur = ' ' + (el.getAttribute('class') || '') + ' ';
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
	    var cur = ' ' + (el.getAttribute('class') || '') + ' ';
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
	
	var commonTagRE = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/;
	var reservedTagRE = /^(slot|partial|component)$/;
	
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
	 * Set a prop's initial value on a vm and its data object.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */
	
	function initProp(vm, prop, value) {
	  var key = prop.path;
	  value = coerceProp(prop, value);
	  vm[key] = vm._data[key] = assertProp(prop, value) ? value : undefined;
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
	 * @param {Object} proto
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
	  } else if ((isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
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
		initProp: initProp,
		assertProp: assertProp,
		coerceProp: coerceProp,
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
	
	    // save raw constructor data before merge
	    // so that we know which properties are provided at
	    // instantiation.
	    if (process.env.NODE_ENV !== 'production') {
	      this._runtimeData = options.data;
	    }
	
	    // merge options.
	    options = this.$options = mergeOptions(this.constructor.options, options, this);
	
	    // set ref
	    this._updateRef();
	
	    // initialize data as empty object.
	    // it will be filled up in _initScope().
	    this._data = {};
	
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
	var improperKeywords = 'break,case,class,catch,const,continue,debugger,default,' + 'delete,do,else,export,extends,finally,for,function,if,' + 'import,in,instanceof,let,return,super,switch,throw,try,' + 'var,while,with,yield,enum,await,implements,package,' + 'proctected,static,interface,private,public';
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
	  if (devtools) {
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
	  for (var i = 0; i < queue.length; i++) {
	    var watcher = queue[i];
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
	    // if an internal watcher is pushed, but the internal
	    // queue is already depleted, we run it immediately.
	    if (internalQueueDepleted && !watcher.user) {
	      watcher.run();
	      return;
	    }
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
	
	var uid$2 = 0;
	
	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 *
	 * @param {Vue} vm
	 * @param {String} expression
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
	  this.expression = isFn ? expOrFn.toString() : expOrFn;
	  this.cb = cb;
	  this.id = ++uid$2; // uid for batching
	  this.active = true;
	  this.dirty = this.lazy; // for lazy watchers
	  this.deps = Object.create(null);
	  this.newDeps = null;
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
	 * Add a dependency to this directive.
	 *
	 * @param {Dep} dep
	 */
	
	Watcher.prototype.addDep = function (dep) {
	  var id = dep.id;
	  if (!this.newDeps[id]) {
	    this.newDeps[id] = dep;
	    if (!this.deps[id]) {
	      this.deps[id] = dep;
	      dep.addSub(this);
	    }
	  }
	};
	
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
	  this.newDeps = Object.create(null);
	};
	
	/**
	 * Clean up for dependency collection.
	 */
	
	Watcher.prototype.afterGet = function () {
	  Dep.target = null;
	  var ids = Object.keys(this.deps);
	  var i = ids.length;
	  while (i--) {
	    var id = ids[i];
	    if (!this.newDeps[id]) {
	      this.deps[id].removeSub(this);
	    }
	  }
	  this.deps = this.newDeps;
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
	  var depIds = Object.keys(this.deps);
	  var i = depIds.length;
	  while (i--) {
	    this.deps[depIds[i]].depend();
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
	    var depIds = Object.keys(this.deps);
	    var i = depIds.length;
	    while (i--) {
	      this.deps[depIds[i]].removeSub(this);
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
	
	var tagRE$1 = /<([\w:]+)/;
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
	  if (!child._isAttached) {
	    child._callHook('attached');
	  }
	}
	
	/**
	 * Call detach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */
	
	function detach(child) {
	  if (child._isAttached) {
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
	          frag.scope[alias] = value;
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
	    defineReactive(scope, alias, value);
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
	
	  bind: function bind() {
	    var el = this.el;
	    if (!el.__vue__) {
	      // check else block
	      var next = el.nextElementSibling;
	      if (next && getAttr(next, 'v-else') !== null) {
	        remove(next);
	        this.elseFactory = new FragmentFactory(next._context || this.vm, next);
	      }
	      // check main block
	      this.anchor = createAnchor('v-if');
	      replace(el, this.anchor);
	      this.factory = new FragmentFactory(this.vm, el);
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
	    this.frag = this.factory.create(this._host, this._scope, this._frag);
	    this.frag.before(this.anchor);
	  },
	
	  remove: function remove() {
	    if (this.frag) {
	      this.frag.remove();
	      this.frag = null;
	    }
	    if (this.elseFactory && !this.elseFrag) {
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
	      return key !== 'stop' && key !== 'prevent';
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
	    var keys = this.prevKeys = Object.keys(value);
	    for (var i = 0, l = keys.length; i < l; i++) {
	      var key = keys[i];
	      if (value[key]) {
	        addClass(this.el, key);
	      } else {
	        removeClass(this.el, key);
	      }
	    }
	  },
	
	  handleArray: function handleArray(value) {
	    this.cleanup(value);
	    for (var i = 0, l = value.length; i < l; i++) {
	      if (value[i]) {
	        addClass(this.el, value[i]);
	      }
	    }
	    this.prevKeys = value.slice();
	  },
	
	  cleanup: function cleanup(value) {
	    if (this.prevKeys) {
	      var i = this.prevKeys.length;
	      while (i--) {
	        var key = this.prevKeys[i];
	        if (key && (!value || !contains(value, key))) {
	          removeClass(this.el, key);
	        }
	      }
	    }
	  }
	};
	
	function stringToObject(value) {
	  var res = {};
	  var keys = value.trim().split(/\s+/);
	  var i = keys.length;
	  while (i--) {
	    res[keys[i]] = true;
	  }
	  return res;
	}
	
	function contains(value, key) {
	  return isArray(value) ? value.indexOf(key) > -1 : hasOwn(value, key);
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
	   */
	
	  resolveComponent: function resolveComponent(id, cb) {
	    var self = this;
	    this.pendingComponentCb = cancellable(function (Component) {
	      self.ComponentName = Component.options.name || id;
	      self.Component = Component;
	      cb();
	    });
	    this.vm._resolveComponent(id, this.pendingComponentCb);
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
	      this.waitingFor.$destroy();
	      this.waitingFor = null;
	    }
	    var child = this.childVM;
	    if (!child || this.keepAlive) {
	      if (child) {
	        // remove ref
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
	    if (process.env.NODE_ENV !== 'production') {
	      if (current) current._inactive = true;
	      target._inactive = false;
	    }
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
	
	    var parentWatcher = this.parentWatcher = new Watcher(parent, parentKey, function (val) {
	      val = coerceProp(prop, val);
	      if (assertProp(prop, val)) {
	        child[childKey] = val;
	      }
	    }, {
	      twoWay: twoWay,
	      filters: prop.filters,
	      // important: props need to be observed on the
	      // v-for scope if present
	      scope: this._scope
	    });
	
	    // set the child initial value.
	    initProp(child, prop, parentWatcher.value);
	
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
	  // Important hack:
	  // in Chrome, if a just-entered element is applied the
	  // leave class while its interpolated property still has
	  // a very small value (within one frame), Chrome will
	  // skip the leave transition entirely and not firing the
	  // transtionend event. Therefore we need to protected
	  // against such cases using a one-frame timeout.
	  this.justEntered = true;
	  var self = this;
	  setTimeout(function () {
	    self.justEntered = false;
	  }, 17);
	
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
	        initProp(vm, prop, getDefault(vm, options));
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
	        // Boolean props with no value
	        value = options.type === Boolean && raw === '' ? true : raw;
	        initProp(vm, prop, value);
	      }
	    }
	  };
	}
	
	/**
	 * Get the default value of a prop.
	 *
	 * @param {Vue} vm
	 * @param {Object} options
	 * @return {*}
	 */
	
	function getDefault(vm, options) {
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
	
	// special binding prefixes
	var bindRE = /^v-bind:|^:/;
	var onRE = /^v-on:|^@/;
	var dirAttrRE = /^v-([^:]+)(?:$|:(.*)$)/;
	var modifierRE = /\.[^\.]+/g;
	var transitionRE = /^(v-bind:|:)?transition$/;
	
	// terminal directives
	var terminalDirectives = ['for', 'if'];
	
	// default directive priority
	var DEFAULT_PRIORITY = 1000;
	
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
	  // check terminal directives (for & if)
	  if (hasAttrs) {
	    linkFn = checkTerminalDirectives(el, options);
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
	    linkFn = compileDirectives(el.attributes, options);
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
	 * @param {Object} options
	 * @return {Function} terminalLinkFn
	 */
	
	function checkTerminalDirectives(el, options) {
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
	  var value, dirName;
	  for (var i = 0, l = terminalDirectives.length; i < l; i++) {
	    dirName = terminalDirectives[i];
	    value = el.getAttribute('v-' + dirName);
	    if (value != null) {
	      return makeTerminalNodeLinkFn(el, dirName, value, options);
	    }
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
	 * @param {Object} [def]
	 * @return {Function} terminalLinkFn
	 */
	
	function makeTerminalNodeLinkFn(el, dirName, value, options, def) {
	  var parsed = parseDirective(value);
	  var descriptor = {
	    name: dirName,
	    expression: parsed.expression,
	    filters: parsed.filters,
	    raw: value,
	    // either an element directive, or if/for
	    // #2366 or custom terminal directive
	    def: def || resolveAsset(options, 'directives', dirName)
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
	      value.split(/\s+/).forEach(function (cls) {
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
	
	function scanSlots(template, content, vm) {
	  if (!content) {
	    return;
	  }
	  var contents = vm._slotContents = {};
	  var slots = template.querySelectorAll('slot');
	  if (slots.length) {
	    var hasDefault, slot, name;
	    for (var i = 0, l = slots.length; i < l; i++) {
	      slot = slots[i];
	      /* eslint-disable no-cond-assign */
	      if (name = slot.getAttribute('name')) {
	        select(slot, name);
	      } else if (process.env.NODE_ENV !== 'production' && (name = getBindAttr(slot, 'name'))) {
	        warn('<slot :name="' + name + '">: slot names cannot be dynamic.');
	      } else {
	        // default slot
	        hasDefault = true;
	      }
	      /* eslint-enable no-cond-assign */
	    }
	    if (hasDefault) {
	      contents['default'] = extractFragment(content.childNodes, content);
	    }
	  }
	
	  function select(slot, name) {
	    // named slot
	    var selector = '[slot="' + name + '"]';
	    var nodes = content.querySelectorAll(selector);
	    if (nodes.length) {
	      contents[name] = extractFragment(nodes, content);
	    }
	  }
	}
	
	/**
	 * Extract qualified content nodes from a node list.
	 *
	 * @param {NodeList} nodes
	 * @param {Element} parent
	 * @return {DocumentFragment}
	 */
	
	function extractFragment(nodes, parent) {
	  var frag = document.createDocumentFragment();
	  nodes = toArray(nodes);
	  for (var i = 0, l = nodes.length; i < l; i++) {
	    var node = nodes[i];
	    if (node.parentNode === parent) {
	      if (isTemplate(node) && !node.hasAttribute('v-if') && !node.hasAttribute('v-for')) {
	        parent.removeChild(node);
	        node = parseTemplate(node);
	      }
	      frag.appendChild(node);
	    }
	  }
	  return frag;
	}
	
	
	
	var compiler = Object.freeze({
		compile: compile,
		compileAndLinkProps: compileAndLinkProps,
		compileRoot: compileRoot,
		terminalDirectives: terminalDirectives,
		transclude: transclude,
		scanSlots: scanSlots
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
	    var propsData = this._data;
	    var optionsDataFn = this.$options.data;
	    var optionsData = optionsDataFn && optionsDataFn();
	    var runtimeData;
	    if (process.env.NODE_ENV !== 'production') {
	      runtimeData = (typeof this._runtimeData === 'function' ? this._runtimeData() : this._runtimeData) || {};
	      this._runtimeData = null;
	    }
	    if (optionsData) {
	      this._data = optionsData;
	      for (var prop in propsData) {
	        if (process.env.NODE_ENV !== 'production' && hasOwn(optionsData, prop) && !hasOwn(runtimeData, prop)) {
	          warn('Data field "' + prop + '" is already defined ' + 'as a prop. Use prop default value instead.');
	        }
	        if (this._props[prop].raw !== null || !hasOwn(optionsData, prop)) {
	          set(optionsData, prop, propsData[prop]);
	        }
	      }
	    }
	    var data = this._data;
	    // proxy data on instance
	    var keys = Object.keys(data);
	    var i, key;
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      this._proxy(key);
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
	 * @param {String} name
	 * @param {Node} el
	 * @param {Vue} vm
	 * @param {Object} descriptor
	 *                 - {String} name
	 *                 - {Object} def
	 *                 - {String} expression
	 *                 - {Array<Object>} [filters]
	 *                 - {Boolean} literal
	 *                 - {String} attr
	 *                 - {String} raw
	 * @param {Object} def - directive definition object
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
	 *
	 * @param {Object} def
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
	    key = params[i];
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
	
	    // scan for slot distribution before compiling the content
	    // so that it's decoupeld from slot/directive compilation order
	    scanSlots(el, options._content, this);
	
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
	   * @param {String} name - directive name
	   * @param {Node} node   - target node
	   * @param {Object} desc - parsed directive descriptor
	   * @param {Object} def  - directive definition object
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
	      filter = filters[i];
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
	   * @param {String} id
	   * @param {Function} cb
	   */
	
	  Vue.prototype._resolveComponent = function (id, cb) {
	    var factory = resolveAsset(this.$options, 'components', id);
	    if (process.env.NODE_ENV !== 'production') {
	      assertAsset(factory, 'component', id);
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
	          process.env.NODE_ENV !== 'production' && warn('Failed to resolve async component: ' + id + '. ' + (reason ? '\nReason: ' + reason : ''));
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
	      for (var key in this.$options.computed) {
	        data[key] = clean(this[key]);
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
	        if (key === '$key' && contains$1(item.$key, search) || contains$1(getPath(val, key), search)) {
	          res.push(item);
	          break;
	        }
	      }
	    } else if (contains$1(item, search)) {
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
	
	function contains$1(val, search) {
	  var i;
	  if (isPlainObject(val)) {
	    var keys = Object.keys(val);
	    i = keys.length;
	    while (i--) {
	      if (contains$1(val[keys[i]], search)) {
	        return true;
	      }
	    }
	  } else if (isArray(val)) {
	    i = val.length;
	    while (i--) {
	      if (contains$1(val[i], search)) {
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
	
	Vue.version = '1.0.17';
	
	// devtools global hook
	/* istanbul ignore next */
	if (devtools) {
	  devtools.emit('init', Vue);
	} else if (process.env.NODE_ENV !== 'production' && inBrowser && /Chrome\/\d+/.test(window.navigator.userAgent)) {
	  console.log('Download the Vue Devtools for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
	}
	
	module.exports = Vue;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(37)))

/***/ },
/* 37 */
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
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * vue-router v0.7.11
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
	    return decodeURIComponent(part);
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
	
	    recognize: function recognize(path) {
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
	        queryParams = this.parseQueryString(queryString);
	      }
	
	      path = decodeURI(path);
	
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
	
	  RouteRecognizer.VERSION = '0.1.9';
	
	  var genQuery = RouteRecognizer.prototype.generateQueryString;
	
	  // export default for holding the Vue reference
	  var exports$1 = {};
	  /**
	   * Warn stuff.
	   *
	   * @param {String} msg
	   */
	
	  function warn(msg) {
	    /* istanbul ignore next */
	    if (window.console) {
	      console.warn('[vue-router] ' + msg);
	      if (!exports$1.Vue || exports$1.Vue.config.debug) {
	        console.warn(new Error('warning stack trace:').stack);
	      }
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
	        warn('param "' + key + '" not found when generating ' + 'path for "' + path + '" with params ' + JSON.stringify(params));
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
	
	      if (root) {
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
	        var url = decodeURI(location.pathname + location.search);
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
	        self.onChange(decodeURI(path.replace(/^#!?/, '') + query));
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
	          warn('Uncaught error during transition: ');
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
	          warn('transition.next() should be called only once.');
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
	
	  var internalKeysRE = /^(component|subRoutes)$/;
	
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
	    this.router = router;
	    // for internal use
	    this.matched = matched || router._notFoundHandler;
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
	          warn('<router-view> can only be used inside a ' + 'router-enabled app.');
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
	    var isObject = _Vue$util.isObject;
	    var addClass = _Vue$util.addClass;
	    var removeClass = _Vue$util.removeClass;
	
	    Vue.directive('link-active', {
	      priority: 1001,
	      bind: function bind() {
	        this.el.__v_link_active = true;
	      }
	    });
	
	    Vue.directive('link', {
	      priority: 1000,
	
	      bind: function bind() {
	        var vm = this.vm;
	        /* istanbul ignore if */
	        if (!vm.$route) {
	          warn('v-link can only be used inside a router-enabled app.');
	          return;
	        }
	        this.router = vm.$route.router;
	        // update things when the route changes
	        this.unwatch = vm.$watch('$route', _bind(this.onRouteUpdate, this));
	        // check if active classes should be applied to a different element
	        this.activeEl = this.el;
	        var parent = this.el.parentNode;
	        while (parent) {
	          if (parent.__v_link_active) {
	            this.activeEl = parent;
	            break;
	          }
	          parent = parent.parentNode;
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
	            this.router.go({
	              path: el.pathname,
	              replace: target && target.replace,
	              append: target && target.append
	            });
	          }
	        }
	      },
	
	      onRouteUpdate: function onRouteUpdate(route) {
	        // router._stringifyPath is dependent on current route
	        // and needs to be called again whenver route changes.
	        var newPath = this.router._stringifyPath(this.target);
	        if (this.path !== newPath) {
	          this.path = newPath;
	          this.updateActiveMatch();
	          this.updateHref();
	        }
	        this.updateClasses(route.path);
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
	
	      updateClasses: function updateClasses(path) {
	        var el = this.activeEl;
	        var activeClass = this.activeClass || this.router._linkActiveClass;
	        // clear old class
	        if (this.prevActiveClass !== activeClass) {
	          removeClass(el, this.prevActiveClass);
	        }
	        // remove query string before matching
	        var dest = this.path.replace(queryStringRE, '');
	        path = path.replace(queryStringRE, '');
	        // add new class
	        if (this.exact) {
	          if (dest === path ||
	          // also allow additional trailing slash
	          dest.charAt(dest.length - 1) !== '/' && dest === path.replace(trailingSlashRE, '')) {
	            addClass(el, activeClass);
	          } else {
	            removeClass(el, activeClass);
	          }
	        } else {
	          if (this.activeRE && this.activeRE.test(path)) {
	            addClass(el, activeClass);
	          } else {
	            removeClass(el, activeClass);
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
	      path = this._stringifyPath(path);
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
	        warn('already started.');
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
	      var matched = this._guardRecognizer.recognize(path);
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
	
	    /**
	     * Normalize named route object / string paths into
	     * a string.
	     *
	     * @param {Object|String|Number} path
	     * @return {String}
	     */
	
	    Router.prototype._stringifyPath = function _stringifyPath(path) {
	      var fullPath = '';
	      if (path && typeof path === 'object') {
	        if (path.name) {
	          var extend = Vue.util.extend;
	          var currentParams = this._currentTransition && this._currentTransition.to.params;
	          var targetParams = path.params || {};
	          var params = currentParams ? extend(extend({}, currentParams), targetParams) : targetParams;
	          if (path.query) {
	            params.queryParams = path.query;
	          }
	          fullPath = this._recognizer.generate(path.name, params);
	        } else if (path.path) {
	          fullPath = path.path;
	          if (path.query) {
	            var query = this._recognizer.generateQueryString(path.query);
	            if (fullPath.indexOf('?') > -1) {
	              fullPath += '&' + query.slice(1);
	            } else {
	              fullPath += query;
	            }
	          }
	        }
	      } else {
	        fullPath = path ? path + '' : '';
	      }
	      return encodeURI(fullPath);
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
	      warn('invalid component for route "' + path + '".');
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
	      warn('already installed.');
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
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	(function (global, factory) {
	   true ? factory(exports) :
	  typeof define === 'function' && define.amd ? define(['exports'], factory) :
	  (factory((global.infiniteScroll = global.infiniteScroll || {})));
	}(this, function (exports) { 'use strict';
	
	  var throttle = function throttle(fn, delay) {
	    var now, lastExec, timer, context, args; //eslint-disable-line
	
	    var execute = function execute() {
	      fn.apply(context, args);
	      lastExec = now;
	    };
	
	    return function () {
	      context = this;
	      args = arguments;
	
	      now = Date.now();
	
	      if (timer) {
	        clearTimeout(timer);
	        timer = null;
	      }
	
	      if (lastExec) {
	        var diff = delay - (now - lastExec);
	        if (diff < 0) {
	          execute();
	        } else {
	          timer = setTimeout(function () {
	            execute();
	          }, diff);
	        }
	      } else {
	        execute();
	      }
	    };
	  };
	
	  var getScrollTop = function getScrollTop(element) {
	    if (element === window) {
	      return Math.max(window.pageYOffset || 0, document.documentElement.scrollTop);
	    }
	
	    return element.scrollTop;
	  };
	
	  var getComputedStyle = document.defaultView.getComputedStyle;
	
	  var getScrollEventTarget = function getScrollEventTarget(element) {
	    var currentNode = element;
	    while (currentNode && currentNode.tagName !== 'HTML' && currentNode.nodeType === 1) {
	      var overflowY = getComputedStyle(currentNode).overflowY;
	      if (overflowY === 'scroll' || overflowY === 'auto') {
	        return currentNode;
	      }
	      currentNode = currentNode.parentNode;
	    }
	    return window;
	  };
	
	  var getVisibleHeight = function getVisibleHeight(element) {
	    if (element === window) {
	      return document.documentElement.clientHeight;
	    }
	
	    return element.clientHeight;
	  };
	
	  var getElementTop = function getElementTop(element) {
	    if (element === window) {
	      return getScrollTop(window);
	    }
	    return element.getBoundingClientRect().top + getScrollTop(window);
	  };
	
	  var isAttached = function isAttached(element) {
	    var currentNode = element.parentNode;
	    while (currentNode) {
	      if (currentNode.tagName === 'HTML') {
	        return true;
	      }
	      if (currentNode.nodeType === 11) {
	        return false;
	      }
	      currentNode = currentNode.parentNode;
	    }
	    return false;
	  };
	
	  var infiniteScroll = {
	    doBind: function doBind() {
	      if (this.binded) return; // eslint-disable-line
	      this.binded = true;
	
	      var directive = this;
	      var element = directive.el;
	
	      directive.scrollEventTarget = getScrollEventTarget(element);
	      directive.scrollListener = throttle(directive.doCheck.bind(directive), 200);
	      directive.scrollEventTarget.addEventListener('scroll', directive.scrollListener);
	
	      var disabledExpr = element.getAttribute('infinite-scroll-disabled');
	      var disabled = false;
	
	      if (disabledExpr) {
	        this.vm.$watch(disabledExpr, function (value) {
	          directive.disabled = value;
	          if (!value && directive.immediateCheck) {
	            directive.doCheck();
	          }
	        });
	        disabled = Boolean(directive.vm.$get(disabledExpr));
	      }
	      directive.disabled = disabled;
	
	      var distanceExpr = element.getAttribute('infinite-scroll-distance');
	      var distance = 0;
	      if (distanceExpr) {
	        distance = Number(directive.vm.$get(distanceExpr));
	        if (isNaN(distance)) {
	          distance = 0;
	        }
	      }
	      directive.distance = distance;
	
	      var immediateCheckExpr = element.getAttribute('infinite-scroll-immediate-check');
	      var immediateCheck = true;
	      if (immediateCheckExpr) {
	        immediateCheck = Boolean(directive.vm.$get(immediateCheckExpr));
	      }
	      directive.immediateCheck = immediateCheck;
	
	      if (immediateCheck) {
	        directive.doCheck();
	      }
	
	      var eventName = element.getAttribute('infinite-scroll-listen-for-event');
	      if (eventName) {
	        directive.vm.$on(eventName, function () {
	          directive.doCheck();
	        });
	      }
	    },
	
	    doCheck: function doCheck(force) {
	      var scrollEventTarget = this.scrollEventTarget;
	      var element = this.el;
	      var distance = this.distance;
	
	      if (force !== true && this.disabled) return; //eslint-disable-line
	      var viewportScrollTop = getScrollTop(scrollEventTarget);
	      var viewportBottom = viewportScrollTop + getVisibleHeight(scrollEventTarget);
	
	      var shouldTrigger = false;
	
	      if (scrollEventTarget === element) {
	        shouldTrigger = scrollEventTarget.scrollHeight - viewportBottom <= distance;
	      } else {
	        var elementBottom = getElementTop(element) - getElementTop(scrollEventTarget) + element.offsetHeight + viewportScrollTop;
	
	        shouldTrigger = viewportBottom + distance >= elementBottom;
	      }
	
	      if (shouldTrigger && this.expression) {
	        this.vm.$get(this.expression);
	      }
	    },
	
	    bind: function bind() {
	      var directive = this;
	      var element = this.el;
	
	      directive.vm.$on('hook:ready', function () {
	        if (isAttached(element)) {
	          directive.doBind();
	        }
	      });
	
	      this.bindTryCount = 0;
	
	      var tryBind = function tryBind() {
	        if (directive.bindTryCount > 10) return; //eslint-disable-line
	        directive.bindTryCount++;
	        if (isAttached(element)) {
	          directive.doBind();
	        } else {
	          setTimeout(tryBind, 50);
	        }
	      };
	
	      tryBind();
	    },
	
	    unbind: function unbind() {
	      this.scrollEventTarget.removeEventListener('scroll', this.scrollListener);
	    }
	  };
	
	  if (window.Vue) {
	    window.infiniteScroll = infiniteScroll;
	    Vue.use(install);
	  }
	
	  function install(Vue) {
	    Vue.directive('infiniteScroll', infiniteScroll);
	  }
	
	  exports.install = install;
	  exports.infiniteScroll = infiniteScroll;
	
	}));

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _vue = __webpack_require__(36);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _vuex = __webpack_require__(41);
	
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
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Vuex v0.5.1
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
	
	  // export install function
	  function override (Vue) {
	    var _init = Vue.prototype._init;
	    Vue.prototype._init = function (options) {
	      var _this = this;
	
	      options = options || {};
	      var componentOptions = this.constructor.options;
	      // store injection
	      var store = options.store || componentOptions.store;
	      if (store) {
	        this.$store = store;
	      } else if (options.parent && options.parent.$store) {
	        this.$store = options.parent.$store;
	      }
	      // vuex option handling
	      var vuex = options.vuex || componentOptions.vuex;
	      if (vuex) {
	        (function () {
	          if (!_this.$store) {
	            console.warn('[vuex] store not injected. make sure to ' + 'provide the store option in your root component.');
	          }
	          var state = vuex.state;
	          var actions = vuex.actions;
	          // state
	
	          if (state) {
	            options.computed = options.computed || {};
	            Object.keys(state).forEach(function (key) {
	              options.computed[key] = function vuexBoundGetter() {
	                return state[key].call(this, this.$store.state);
	              };
	            });
	          }
	          // actions
	          if (actions) {
	            options.methods = options.methods || {};
	            Object.keys(actions).forEach(function (key) {
	              options.methods[key] = function vuexBoundAction() {
	                var _actions$key;
	
	                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	                  args[_key] = arguments[_key];
	                }
	
	                return (_actions$key = actions[key]).call.apply(_actions$key, [this, this.$store].concat(args));
	              };
	            });
	          }
	        })();
	      }
	      _init.call(this, options);
	    };
	  }
	
	  var Vue = undefined;
	
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
	
	        var mutation = this._mutations[type];
	        var prevSnapshot = this._prevSnapshot;
	        var state = this.state;
	        var snapshot = undefined,
	            clonedPayload = undefined;
	        if (mutation) {
	          this._dispatching = true;
	          // apply the mutation
	          if (Array.isArray(mutation)) {
	            mutation.forEach(function (m) {
	              return m.apply(undefined, [state].concat(payload));
	            });
	          } else {
	            mutation.apply(undefined, [state].concat(payload));
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
	       * Hot update actions and mutations.
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
	       * @param {Object} modules
	       */
	
	    }, {
	      key: '_setupModuleMutations',
	      value: function _setupModuleMutations(modules) {
	        this._modules = modules;
	        var getPath = Vue.parsers.path.getPath;
	
	        var allMutations = [this._rootMutations];
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
	
	        // a hack to get the watcher constructor from older versions of Vue
	        // mainly because the public $watch method does not allow sync
	        // watchers.
	        var unwatch = this._vm.$watch('__vuex__', function (a) {
	          return a;
	        });
	        var Watcher = this._vm._watchers[0].constructor;
	        unwatch();
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
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
								value: true
	});
	
	exports.default = function (router) {
								router.map({
															'*': {
																						component: __webpack_require__(43)
															},
															'/home': {
																						name: 'home',
																						component: __webpack_require__(43)
															},
	
															/* 消息部分 */
															'/msg': {
																						name: 'msg',
																						component: __webpack_require__(56)
															},
															'/msg/system': {
																						name: 'msgSystem',
																						component: __webpack_require__(71)
															},
															'/msg/comment': {
																						name: 'msgComment',
																						component: __webpack_require__(76)
															},
															'/msg/message': {
																						name: 'msgMessage',
																						component: __webpack_require__(81)
															},
															'/msg/order': {
																						name: 'msgOrder',
																						component: __webpack_require__(86)
															},
	
															/* 场景部分 */
															'/scene/': {
																						name: 'scene',
																						component: __webpack_require__(91)
															},
															'/scene/detail': {
																						name: 'sceneDetail',
																						component: __webpack_require__(102)
															},
															'/scene/reserve': {
																						name: 'sceneReserve',
																						component: __webpack_require__(114)
															},
															'/scene/appraise': {
																						name: 'sceneAppraise',
																						component: __webpack_require__(119)
															},
															'/scene/inviteOrder': {
																						name: 'sceneInviteOrder',
																						component: __webpack_require__(124)
															},
															'/scene/oneKeyOrder': {
																						name: 'sceneOneKeyOrder',
																						component: __webpack_require__(137)
															},
															'/scene/orderSuccess': {
																						name: 'sceneOrderSuccess',
																						component: __webpack_require__(152)
															},
															'/scene/address': {
																						name: 'sceneAddress',
																						component: __webpack_require__(163)
															},
	
															/* 用户部分 */
															'/user': {
																						name: 'user',
																						component: __webpack_require__(173)
															},
															'/user/setting': {
																						name: 'userSetting',
																						component: __webpack_require__(178)
															},
															'/user/money': {
																						name: 'userMoney',
																						component: __webpack_require__(188)
															},
															'/user/work/server': {
																						name: 'userWorkServer',
																						component: __webpack_require__(194)
															},
															'/user/work/publish': {
																						name: 'userWorkPublish',
																						component: __webpack_require__(199)
															},
															'/user/work/publishDetail': {
																						name: 'userWorkPublishDetail',
																						component: __webpack_require__(204)
															},
															'/user/work/accept': {
																						name: 'userWorkAccept',
																						component: __webpack_require__(209)
															},
															'/user/work/acceptDetail': {
																						name: 'userWorkAcceptDetail',
																						component: __webpack_require__(214)
															},
															'/user/work/acceptAppraise': {
																						name: 'userWorkAcceptAppraise',
																						component: __webpack_require__(222)
															},
															'/user/work/acceptBus': {
																						name: 'userWorkAcceptBus',
																						component: __webpack_require__(227)
															},
	
															/* 客服 */
															'/service/': {
																						name: 'service',
																						component: __webpack_require__(232)
															},
	
															/* 认证部分 */
															'/auth': {
																						name: 'auth',
																						component: __webpack_require__(237)
															},
															'/auth/selectMap': {
																						name: 'selectMap',
																						component: __webpack_require__(242)
															},
															'/auth/step2': {
																						name: 'authStep2',
																						component: __webpack_require__(247)
															},
															'/auth/step3': {
																						name: 'authStep3',
																						component: __webpack_require__(253)
															},
															'/auth/checking': {
																						name: 'authChecking',
																						component: __webpack_require__(258)
															},
															'/auth/success': {
																						name: 'authSuccess',
																						component: __webpack_require__(263)
															},
	
															/* 公用页面 */
															'/common/selectCity': {
																						name: 'selectCity',
																						component: __webpack_require__(268)
															},
															'/common/selectSchool': {
																						name: 'selectSchool',
																						component: __webpack_require__(273)
															},
															'/common/selectSex': {
																						name: 'selectSex',
																						component: __webpack_require__(278)
															},
															'/common/selectSort': {
																						name: 'selectSort',
																						component: __webpack_require__(283)
															}
								});
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(44)
	__vue_script__ = __webpack_require__(48)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/home.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(55)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zhujianxin/Documents/vue/vue-demo-webpack/src/views/home.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 44 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */
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
	//             .rem(width,80);
	//             .rem(height,80);
	//             .rem(top, 50);
	//             .rem(left, 20);
	//             .rem(font-size, 80);
	//             position:absolute;
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
	//                        <i class="ico sceneIcon {{icoArr[scene.id]}}"></i>
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
	            cityId: '',
	            icoArr: ['ico-ditu', 'ico-university', 'ico-save', 'ico-traffic', 'ico-traffic', 'ico-women', 'ico-service', 'ico-wudao']
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
	        'swiper': __webpack_require__(49)
	    }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(50)
	__vue_script__ = __webpack_require__(52)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/swiper/index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(54)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zhujianxin/Documents/vue/vue-demo-webpack/src/components/swiper/index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 50 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 51 */,
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _swiper = __webpack_require__(53);
	
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
/* 53 */
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
/* 54 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"slider\">\n  <div class=\"swiper\" :style=\"{height: height+'px'}\">\n    <slot></slot>\n    <div class=\"item\" v-for=\"item in list\">\n      <a :href=\"item.url\">\n        <div class=\"img\" :style=\"{backgroundImage: buildBackgroundUrl(item.img)}\"></div>\n        <div class=\"desc\">{{item.title}}</div>\n      </a>\n    </div>\n  </div>\n  <div class=\"indicator\" v-show=\"show_dots\">\n    <a href=\"javascript:\" v-for=\"(index, item) in list\">\n      <i class=\"icon_dot\" :class=\"{'active':index === current}\"></i>\n    </a>\n  </div>\n</div>\n";

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"page-home page-current\">\n    <div class=\"content showFooter\">\n        <swiper :list=\"list\"></swiper>\n        <div class=\"systemMsg\">\n            <i class=\"ico ico-xiaolaba\"></i>\n            <marquee direction=\"left\" scrollamount=\"3\">\n                {{systemMsg}}\n            </marquee>\n        </div>\n        <div class=\"sceneWrap\">\n            <div class=\"sceneItem\" :class=\"{'red': index % 4 == 2 || index % 4 == 1 }\" v-for=\"(index, scene) in sceneList\">\n                <a external v-link=\"{ name: 'scene', query:{scene_id: scene.scene_id, scene_name: scene.scene_name, city_id: cityId} }\">\n                   <i class=\"ico sceneIcon {{icoArr[scene.id]}}\"></i>\n                   <span class=\"first\">{{scene.scene_name}}</span>\n                   <span class=\"last\">{{scene.scene_detail}}</span>\n                </a>\n            </div>\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(57)
	__vue_script__ = __webpack_require__(60)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/msg.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(70)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zhujianxin/Documents/vue/vue-demo-webpack/src/views/msg.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 57 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 58 */,
/* 59 */,
/* 60 */
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
	        'headerBar': __webpack_require__(61)
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
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(62)
	__vue_script__ = __webpack_require__(64)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/header.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(69)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zhujianxin/Documents/vue/vue-demo-webpack/src/components/header.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 62 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 63 */,
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _defineProperty2 = __webpack_require__(65);
	
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
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(66);
	
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
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(67), __esModule: true };

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(68);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 68 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 69 */
/***/ function(module, exports) {

	module.exports = "\n<header class=\"bar bar-nav\">\n    <a class=\"icon icon-left pull-left\" v-if=\"back\" @click=\"goBack\"></a>\n    <h1 class=\"title\">{{title}}</h1>\n</header>\n";

/***/ },
/* 70 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"page-msg\">\n    <header-bar :title=\"title\"></header-bar>\n    <ul class=\"scenefilter clearfix\">\n        <li @click=\"showMsgList(true)\">\n            <span :class=\"{'cur': isOrder}\">订单邀请</span>\n        </li>\n        <li @click=\"showMsgList(false)\">\n            <span :class=\"{'cur': !isOrder}\">消息</span>\n        </li>\n    </ul>\n    <div class=\"content showHeader showTab showFooter\">\n    \n        <div class=\"item order\"\n             v-if=\"isOrder\"\n             v-for=\"order in formData.order\"\n             v-link=\"{name: 'userWorkAcceptDetail', query:{order_id:order.order_id} }\"\n        >\n            <div class=\"timeout\" v-if=\"order.status == 3\"></div>\n            <span class=\"tag\">{{order.scene_name}}</span>\n            <header class=\"clearfix\">\n                <div class=\"photoWrap\">\n                    <img :src=\"order.head_img_url\">\n                </div>\n                <div class=\"textWrap\">\n                    <div class=\"header\">\n                        {{order.create_name}}\n                        <span>{{order.create_time}}</span>\n                    </div>\n                    <div class=\"text\">\n                        {{order.detail}}\n                    </div>\n                </div>\n            </header>\n            <footer>\n                <div class=\"unit\">报酬：<span>{{order.unit}}</span></div>\n                <div class=\"time\">时间：<span>{{order.start_time}}  {{order.end_time}}</span></div>\n                <div class=\"position\">任务位置：<span>{{order.workplace}}</span></div>\n            </footer>\n        </div>\n        \n        <div class=\"item msg\" v-if=\"!isOrder\" v-for=\"msg in formData.msg\" @click=\"goMsg(msg.type, msg.id)\">\n            <div class=\"photoWrap\">\n                <img :src=\"msg.head_img_url\">\n            </div>\n            <div class=\"textWrap\">\n                <div class=\"name\" v-if=\"msg.type == 3\">系统</div>\n                <div class=\"name\" v-else>{{msg.nick_name}}</div>\n                <div class=\"text\">{{msg.content}} </div>\n                <span class=\"time\">{{msg.create_time}}</span>\n            </div>\n        </div>\n        \n    </div>\n</div>\n";

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(72)
	__vue_script__ = __webpack_require__(74)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/msg/system.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(75)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zhujianxin/Documents/vue/vue-demo-webpack/src/views/msg/system.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 72 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 73 */,
/* 74 */
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
	        'headerBar': __webpack_require__(61)
	    }
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 75 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"page-msg-system\" transition=\"page\">\n    <header-bar :title=\"title\" :back=\"true\"></header-bar>\n    <div class=\"content showHeader\">\n    \n        <div class=\"systemTitle\">阿斯顿发达</div>\n        <div class=\"systemContent\">adsfasdfa</div>\n      \n    </div>\n</div>\n";

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(77)
	__vue_script__ = __webpack_require__(79)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/msg/comment.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(80)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zhujianxin/Documents/vue/vue-demo-webpack/src/views/msg/comment.vue"
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
	        'headerBar': __webpack_require__(61)
	    }
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 80 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"page-msg-comment\" transition=\"page\">\n    <header-bar :title=\"title\" :back=\"true\"></header-bar>\n    <div class=\"content showHeader\">\n        <div class=\"userWrap\">\n            <div class=\"photoWrap\">\n                <img :src=\"formData.head_img_url\">\n            </div>\n            <div class=\"name\">{{formData.nick_name}}</div>\n        </div>\n        <div class=\"orderContent\">\n            <div class=\"header\">订单需求说明</div>\n            <div class=\"main\">{{formData.order_content}}</div>\n        </div>\n        <div class=\"commentContent clearfix\">\n            <div class=\"typeWrap\">\n                <i class=\"ico {{typeCls[formData.type-1]}}\"></i>\n                <div>{{typeTex[formData.type-1]}}</div>\n            </div>\n            <div class=\"main\">\n                <i class=\"arrow\"></i>\n                {{formData.content}}\n            </div>\n        </div>\n    </div>\n    <span\n        class=\"ui-btn ui-btn-big\"\n    >\n        互评\n    </span>\n</div>\n";

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(82)
	__vue_script__ = __webpack_require__(84)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/msg/message.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(85)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zhujianxin/Documents/vue/vue-demo-webpack/src/views/msg/message.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 82 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 83 */,
/* 84 */
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
	        'headerBar': __webpack_require__(61)
	    }
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 85 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"page-msg-message\" transition=\"page\">\n    <header-bar :title=\"title\" :back=\"true\"></header-bar>\n    <div class=\"content showHeader showFooter\">\n    \n        <div class=\"item clearfix\" v-for=\"item in formData\">\n            <div class=\"time\" v-if=\"item.create_time\"><span>{{item.create_time}}</span></div>\n            <div class=\"main\" :class=\"{isMe: item.isMe == 1}\">\n                <div class=\"photoWrap\">\n                    <img :src=\"item.head_img_url\">\n                </div>\n                <div class=\"textWrap\">\n                    <div class=\"name\">{{item.nick_name}}</div>\n                    <div class=\"text\">\n                        {{item.content}}\n                        <i></i>\n                    </div>\n                </div>\n            </div>\n        </div>\n      \n    </div>\n    <div class=\"formWrap\">\n        <input v-model=\"content\" placeholder=\"留言或回复内容\"/>\n        <span @click=\"send\">发送</span>\n    </div>\n</div>\n";

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(87)
	__vue_script__ = __webpack_require__(89)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/msg/order.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(90)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zhujianxin/Documents/vue/vue-demo-webpack/src/views/msg/order.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 87 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 88 */,
/* 89 */
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
	        'headerBar': __webpack_require__(61)
	    }
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 90 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"page-msg-me\" transition=\"page\">\n    <header-bar :title=\"title\" :back=\"true\"></header-bar>\n    <div class=\"content showHeader\">\n    \n        阿斯顿发达\n      \n    </div>\n</div>\n";

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(92)
	__vue_script__ = __webpack_require__(94)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/scene.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(101)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zhujianxin/Documents/vue/vue-demo-webpack/src/views/scene.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 92 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 93 */,
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _iscrollInfinite = __webpack_require__(95);
	
	var _iscrollInfinite2 = _interopRequireDefault(_iscrollInfinite);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    data: function data() {
	        return {
	            title: null,
	            filterType: 0,
	            isShowFilter: false,
	            busy: false,
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
	            self.dataList = [];
	        }
	    },
	    ready: function ready() {
	        var self = this;
	        //		var myScroll = new IScroll('#wrapper',{
	        //            mouseWheel: true,
	        //            scrollbars: true,
	        //			cacheSize: 1000
	        //		});
	        //		self.loadMore();
	        //		myScroll.on('scrollEnd', function(){
	        //			console.log( this.directionY, this.y )
	        //			if( this.directionY >= 0 ){
	        //				self.loadMore(()=>{
	        //                    myScroll.refresh();
	        //                });
	        //			}
	        //		});
	        //        document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
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
	        loadMore: function loadMore(callback) {
	            var self = this;
	            self.busy = true;
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
	                    self.formData.currentPage++;
	                    self.busy = false;
	                    callback && callback();
	                }
	            });
	        }
	    },
	    components: {
	        'headerBar': __webpack_require__(61),
	        'pullRefresh': __webpack_require__(96)
	    }
	};
	// </script>

	/* generated by vue-loader */
	// <style lang="less">
	// @import '../less/lib/mixins.less';
	// .page-scene{
	//
	//     height:100%;
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
	// #wrapper {
	//     padding-top: 5rem;
	//     padding-bottom: 2.45rem;
	//     width: 100%;
	//     height:100%;
	//     overflow: hidden;
	// }
	//
	// #scroller {
	//     position: absolute;
	//     z-index: 1;
	//     padding-left: 0.65rem;
	//     padding-right: 0.65rem;
	//     width:100%;
	// 	-webkit-tap-highlight-color: rgba(0,0,0,0);
	// 	-webkit-transform: translateZ(0);
	// 	-moz-transform: translateZ(0);
	// 	-ms-transform: translateZ(0);
	// 	-o-transform: translateZ(0);
	// 	transform: translateZ(0);
	// 	-webkit-touch-callout: none;
	// 	-webkit-user-select: none;
	// 	-moz-user-select: none;
	// 	-ms-user-select: none;
	// 	user-select: none;
	// 	-webkit-text-size-adjust: none;
	// 	-moz-text-size-adjust: none;
	// 	-ms-text-size-adjust: none;
	// 	-o-text-size-adjust: none;
	// 	text-size-adjust: none;
	// }
	//
	//
	// </style>
	//
	// <template>
	//     <div transition="page" class="page-scene pullRreshwrap">
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
	//
	//         <div id="wrapper">
	//             <ul id="scroller" v-infinite-scroll="loadMore()" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
	//                 <li class="item clearfix" v-for="item in dataList">
	//                     <header class="clearfix" v-link="{name: 'sceneDetail', query: {'user_id': item.user_id, 'scene_name': formData.scene_name, 'scene_id': formData.scene_id}}">
	//                         <div class="pull-left photoWrap">
	//                             <img :src="item.head_img_url">
	//                         </div>
	//                         <div class="pull-left nameWrap">
	//                             <div class="name">
	//                                 <i class="icon"
	//                                    :class="{'icon-xingbienan2': item.sex == 1, 'icon-xingbienv2': item.sex == 2}"
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
	//                             <div class="img" v-for="subItem in item.serverImgs">
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
	//                 </li>
	//             </ul>
	//         </div>
	//
	//         <span
	//             class="ui-btn ui-btn-big"
	//             v-link="{name:'sceneOneKeyOrder', query:formData}"
	//         >
	//             一键预约
	//         </span>
	//
	//     </div>
	// </template>
	//
	// <script>

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*! iScroll v5.2.0 ~ (c) 2008-2016 Matteo Spinelli ~ http://cubiq.org/license */
	(function (window, document, Math) {
	var rAF = window.requestAnimationFrame	||
		window.webkitRequestAnimationFrame	||
		window.mozRequestAnimationFrame		||
		window.oRequestAnimationFrame		||
		window.msRequestAnimationFrame		||
		function (callback) { window.setTimeout(callback, 1000 / 60); };
	
	var utils = (function () {
		var me = {};
	
		var _elementStyle = document.createElement('div').style;
		var _vendor = (function () {
			var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
				transform,
				i = 0,
				l = vendors.length;
	
			for ( ; i < l; i++ ) {
				transform = vendors[i] + 'ransform';
				if ( transform in _elementStyle ) return vendors[i].substr(0, vendors[i].length-1);
			}
	
			return false;
		})();
	
		function _prefixStyle (style) {
			if ( _vendor === false ) return false;
			if ( _vendor === '' ) return style;
			return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
		}
	
		me.getTime = Date.now || function getTime () { return new Date().getTime(); };
	
		me.extend = function (target, obj) {
			for ( var i in obj ) {
				target[i] = obj[i];
			}
		};
	
		me.addEvent = function (el, type, fn, capture) {
			el.addEventListener(type, fn, !!capture);
		};
	
		me.removeEvent = function (el, type, fn, capture) {
			el.removeEventListener(type, fn, !!capture);
		};
	
		me.prefixPointerEvent = function (pointerEvent) {
			return window.MSPointerEvent ?
				'MSPointer' + pointerEvent.charAt(7).toUpperCase() + pointerEvent.substr(8):
				pointerEvent;
		};
	
		me.momentum = function (current, start, time, lowerMargin, wrapperSize, deceleration) {
			var distance = current - start,
				speed = Math.abs(distance) / time,
				destination,
				duration;
	
			deceleration = deceleration === undefined ? 0.0006 : deceleration;
	
			destination = current + ( speed * speed ) / ( 2 * deceleration ) * ( distance < 0 ? -1 : 1 );
			duration = speed / deceleration;
	
			if ( destination < lowerMargin ) {
				destination = wrapperSize ? lowerMargin - ( wrapperSize / 2.5 * ( speed / 8 ) ) : lowerMargin;
				distance = Math.abs(destination - current);
				duration = distance / speed;
			} else if ( destination > 0 ) {
				destination = wrapperSize ? wrapperSize / 2.5 * ( speed / 8 ) : 0;
				distance = Math.abs(current) + destination;
				duration = distance / speed;
			}
	
			return {
				destination: Math.round(destination),
				duration: duration
			};
		};
	
		var _transform = _prefixStyle('transform');
	
		me.extend(me, {
			hasTransform: _transform !== false,
			hasPerspective: _prefixStyle('perspective') in _elementStyle,
			hasTouch: 'ontouchstart' in window,
			hasPointer: !!(window.PointerEvent || window.MSPointerEvent), // IE10 is prefixed
			hasTransition: _prefixStyle('transition') in _elementStyle
		});
	
		/*
		This should find all Android browsers lower than build 535.19 (both stock browser and webview)
		- galaxy S2 is ok
	    - 2.3.6 : `AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1`
	    - 4.0.4 : `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
	   - galaxy S3 is badAndroid (stock brower, webview)
	     `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
	   - galaxy S4 is badAndroid (stock brower, webview)
	     `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
	   - galaxy S5 is OK
	     `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
	   - galaxy S6 is OK
	     `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
	  */
		me.isBadAndroid = (function() {
			var appVersion = window.navigator.appVersion;
			// Android browser is not a chrome browser.
			if (/Android/.test(appVersion) && !(/Chrome\/\d/.test(appVersion))) {
				var safariVersion = appVersion.match(/Safari\/(\d+.\d)/);
				if(safariVersion && typeof safariVersion === "object" && safariVersion.length >= 2) {
					return parseFloat(safariVersion[1]) < 535.19;
				} else {
					return true;
				}
			} else {
				return false;
			}
		})();
	
		me.extend(me.style = {}, {
			transform: _transform,
			transitionTimingFunction: _prefixStyle('transitionTimingFunction'),
			transitionDuration: _prefixStyle('transitionDuration'),
			transitionDelay: _prefixStyle('transitionDelay'),
			transformOrigin: _prefixStyle('transformOrigin')
		});
	
		me.hasClass = function (e, c) {
			var re = new RegExp("(^|\\s)" + c + "(\\s|$)");
			return re.test(e.className);
		};
	
		me.addClass = function (e, c) {
			if ( me.hasClass(e, c) ) {
				return;
			}
	
			var newclass = e.className.split(' ');
			newclass.push(c);
			e.className = newclass.join(' ');
		};
	
		me.removeClass = function (e, c) {
			if ( !me.hasClass(e, c) ) {
				return;
			}
	
			var re = new RegExp("(^|\\s)" + c + "(\\s|$)", 'g');
			e.className = e.className.replace(re, ' ');
		};
	
		me.offset = function (el) {
			var left = -el.offsetLeft,
				top = -el.offsetTop;
	
			// jshint -W084
			while (el = el.offsetParent) {
				left -= el.offsetLeft;
				top -= el.offsetTop;
			}
			// jshint +W084
	
			return {
				left: left,
				top: top
			};
		};
	
		me.preventDefaultException = function (el, exceptions) {
			for ( var i in exceptions ) {
				if ( exceptions[i].test(el[i]) ) {
					return true;
				}
			}
	
			return false;
		};
	
		me.extend(me.eventType = {}, {
			touchstart: 1,
			touchmove: 1,
			touchend: 1,
	
			mousedown: 2,
			mousemove: 2,
			mouseup: 2,
	
			pointerdown: 3,
			pointermove: 3,
			pointerup: 3,
	
			MSPointerDown: 3,
			MSPointerMove: 3,
			MSPointerUp: 3
		});
	
		me.extend(me.ease = {}, {
			quadratic: {
				style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				fn: function (k) {
					return k * ( 2 - k );
				}
			},
			circular: {
				style: 'cubic-bezier(0.1, 0.57, 0.1, 1)',	// Not properly "circular" but this looks better, it should be (0.075, 0.82, 0.165, 1)
				fn: function (k) {
					return Math.sqrt( 1 - ( --k * k ) );
				}
			},
			back: {
				style: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
				fn: function (k) {
					var b = 4;
					return ( k = k - 1 ) * k * ( ( b + 1 ) * k + b ) + 1;
				}
			},
			bounce: {
				style: '',
				fn: function (k) {
					if ( ( k /= 1 ) < ( 1 / 2.75 ) ) {
						return 7.5625 * k * k;
					} else if ( k < ( 2 / 2.75 ) ) {
						return 7.5625 * ( k -= ( 1.5 / 2.75 ) ) * k + 0.75;
					} else if ( k < ( 2.5 / 2.75 ) ) {
						return 7.5625 * ( k -= ( 2.25 / 2.75 ) ) * k + 0.9375;
					} else {
						return 7.5625 * ( k -= ( 2.625 / 2.75 ) ) * k + 0.984375;
					}
				}
			},
			elastic: {
				style: '',
				fn: function (k) {
					var f = 0.22,
						e = 0.4;
	
					if ( k === 0 ) { return 0; }
					if ( k == 1 ) { return 1; }
	
					return ( e * Math.pow( 2, - 10 * k ) * Math.sin( ( k - f / 4 ) * ( 2 * Math.PI ) / f ) + 1 );
				}
			}
		});
	
		me.tap = function (e, eventName) {
			var ev = document.createEvent('Event');
			ev.initEvent(eventName, true, true);
			ev.pageX = e.pageX;
			ev.pageY = e.pageY;
			e.target.dispatchEvent(ev);
		};
	
		me.click = function (e) {
			var target = e.target,
				ev;
	
			if ( !(/(SELECT|INPUT|TEXTAREA)/i).test(target.tagName) ) {
				ev = document.createEvent('MouseEvents');
				ev.initMouseEvent('click', true, true, e.view, 1,
					target.screenX, target.screenY, target.clientX, target.clientY,
					e.ctrlKey, e.altKey, e.shiftKey, e.metaKey,
					0, null);
	
				ev._constructed = true;
				target.dispatchEvent(ev);
			}
		};
	
		return me;
	})();
	function IScroll (el, options) {
		this.wrapper = typeof el == 'string' ? document.querySelector(el) : el;
		this.scroller = this.wrapper.children[0];
		this.scrollerStyle = this.scroller.style;		// cache style for better performance
	
		this.options = {
	
			mouseWheelSpeed: 20,
	
			snapThreshold: 0.334,
	
			infiniteUseTransform: true,
			deceleration: 0.004,
	
	// INSERT POINT: OPTIONS
			disablePointer : !utils.hasPointer,
			disableTouch : utils.hasPointer || !utils.hasTouch,
			disableMouse : utils.hasPointer || utils.hasTouch,
			startX: 0,
			startY: 0,
			scrollY: true,
			directionLockThreshold: 5,
			momentum: true,
	
			bounce: true,
			bounceTime: 600,
			bounceEasing: '',
	
			preventDefault: true,
			preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/ },
	
			HWCompositing: true,
			useTransition: true,
			useTransform: true,
			bindToWrapper: typeof window.onmousedown === "undefined"
		};
	
		for ( var i in options ) {
			this.options[i] = options[i];
		}
	
		// Normalize options
		this.translateZ = this.options.HWCompositing && utils.hasPerspective ? ' translateZ(0)' : '';
	
		this.options.useTransition = utils.hasTransition && this.options.useTransition;
		this.options.useTransform = utils.hasTransform && this.options.useTransform;
	
		this.options.eventPassthrough = this.options.eventPassthrough === true ? 'vertical' : this.options.eventPassthrough;
		this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;
	
		// If you want eventPassthrough I have to lock one of the axes
		this.options.scrollY = this.options.eventPassthrough == 'vertical' ? false : this.options.scrollY;
		this.options.scrollX = this.options.eventPassthrough == 'horizontal' ? false : this.options.scrollX;
	
		// With eventPassthrough we also need lockDirection mechanism
		this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
		this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;
	
		this.options.bounceEasing = typeof this.options.bounceEasing == 'string' ? utils.ease[this.options.bounceEasing] || utils.ease.circular : this.options.bounceEasing;
	
		this.options.resizePolling = this.options.resizePolling === undefined ? 60 : this.options.resizePolling;
	
		if ( this.options.tap === true ) {
			this.options.tap = 'tap';
		}
	
		this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1;
	
		if ( this.options.infiniteElements ) {
			this.options.probeType = 3;
		}
		this.options.infiniteUseTransform = this.options.infiniteUseTransform && this.options.useTransform;
	
		if ( this.options.probeType == 3 ) {
			this.options.useTransition = false;	}
	
	// INSERT POINT: NORMALIZATION
	
		// Some defaults
		this.x = 0;
		this.y = 0;
		this.directionX = 0;
		this.directionY = 0;
		this._events = {};
	
	// INSERT POINT: DEFAULTS
	
		this._init();
		this.refresh();
	
		this.scrollTo(this.options.startX, this.options.startY);
		this.enable();
	}
	
	IScroll.prototype = {
		version: '5.2.0',
	
		_init: function () {
			this._initEvents();
	
			if ( this.options.mouseWheel ) {
				this._initWheel();
			}
	
			if ( this.options.snap ) {
				this._initSnap();
			}
	
			if ( this.options.keyBindings ) {
				this._initKeys();
			}
	
			if ( this.options.infiniteElements ) {
				this._initInfinite();
			}
	
	// INSERT POINT: _init
	
		},
	
		destroy: function () {
			this._initEvents(true);
			clearTimeout(this.resizeTimeout);
	 		this.resizeTimeout = null;
			this._execEvent('destroy');
		},
	
		_transitionEnd: function (e) {
			if ( e.target != this.scroller || !this.isInTransition ) {
				return;
			}
	
			this._transitionTime();
			if ( !this.resetPosition(this.options.bounceTime) ) {
				this.isInTransition = false;
				this._execEvent('scrollEnd');
			}
		},
	
		_start: function (e) {
			// React to left mouse button only
			if ( utils.eventType[e.type] != 1 ) {
			  // for button property
			  // http://unixpapa.com/js/mouse.html
			  var button;
		    if (!e.which) {
		      /* IE case */
		      button = (e.button < 2) ? 0 :
		               ((e.button == 4) ? 1 : 2);
		    } else {
		      /* All others */
		      button = e.button;
		    }
				if ( button !== 0 ) {
					return;
				}
			}
	
			if ( !this.enabled || (this.initiated && utils.eventType[e.type] !== this.initiated) ) {
				return;
			}
	
			if ( this.options.preventDefault && !utils.isBadAndroid && !utils.preventDefaultException(e.target, this.options.preventDefaultException) ) {
				e.preventDefault();
			}
	
			var point = e.touches ? e.touches[0] : e,
				pos;
	
			this.initiated	= utils.eventType[e.type];
			this.moved		= false;
			this.distX		= 0;
			this.distY		= 0;
			this.directionX = 0;
			this.directionY = 0;
			this.directionLocked = 0;
	
			this.startTime = utils.getTime();
	
			if ( this.options.useTransition && this.isInTransition ) {
				this._transitionTime();
				this.isInTransition = false;
				pos = this.getComputedPosition();
				this._translate(Math.round(pos.x), Math.round(pos.y));
				this._execEvent('scrollEnd');
			} else if ( !this.options.useTransition && this.isAnimating ) {
				this.isAnimating = false;
				this._execEvent('scrollEnd');
			}
	
			this.startX    = this.x;
			this.startY    = this.y;
			this.absStartX = this.x;
			this.absStartY = this.y;
			this.pointX    = point.pageX;
			this.pointY    = point.pageY;
	
			this._execEvent('beforeScrollStart');
		},
	
		_move: function (e) {
			if ( !this.enabled || utils.eventType[e.type] !== this.initiated ) {
				return;
			}
	
			if ( this.options.preventDefault ) {	// increases performance on Android? TODO: check!
				e.preventDefault();
			}
	
			var point		= e.touches ? e.touches[0] : e,
				deltaX		= point.pageX - this.pointX,
				deltaY		= point.pageY - this.pointY,
				timestamp	= utils.getTime(),
				newX, newY,
				absDistX, absDistY;
	
			this.pointX		= point.pageX;
			this.pointY		= point.pageY;
	
			this.distX		+= deltaX;
			this.distY		+= deltaY;
			absDistX		= Math.abs(this.distX);
			absDistY		= Math.abs(this.distY);
	
			// We need to move at least 10 pixels for the scrolling to initiate
			if ( timestamp - this.endTime > 300 && (absDistX < 10 && absDistY < 10) ) {
				return;
			}
	
			// If you are scrolling in one direction lock the other
			if ( !this.directionLocked && !this.options.freeScroll ) {
				if ( absDistX > absDistY + this.options.directionLockThreshold ) {
					this.directionLocked = 'h';		// lock horizontally
				} else if ( absDistY >= absDistX + this.options.directionLockThreshold ) {
					this.directionLocked = 'v';		// lock vertically
				} else {
					this.directionLocked = 'n';		// no lock
				}
			}
	
			if ( this.directionLocked == 'h' ) {
				if ( this.options.eventPassthrough == 'vertical' ) {
					e.preventDefault();
				} else if ( this.options.eventPassthrough == 'horizontal' ) {
					this.initiated = false;
					return;
				}
	
				deltaY = 0;
			} else if ( this.directionLocked == 'v' ) {
				if ( this.options.eventPassthrough == 'horizontal' ) {
					e.preventDefault();
				} else if ( this.options.eventPassthrough == 'vertical' ) {
					this.initiated = false;
					return;
				}
	
				deltaX = 0;
			}
	
			deltaX = this.hasHorizontalScroll ? deltaX : 0;
			deltaY = this.hasVerticalScroll ? deltaY : 0;
	
			newX = this.x + deltaX;
			newY = this.y + deltaY;
	
			// Slow down if outside of the boundaries
			if ( newX > 0 || newX < this.maxScrollX ) {
				newX = this.options.bounce ? this.x + deltaX / 3 : newX > 0 ? 0 : this.maxScrollX;
			}
			if ( newY > 0 || newY < this.maxScrollY ) {
				newY = this.options.bounce ? this.y + deltaY / 3 : newY > 0 ? 0 : this.maxScrollY;
			}
	
			this.directionX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
			this.directionY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;
	
			if ( !this.moved ) {
				this._execEvent('scrollStart');
			}
	
			this.moved = true;
	
			this._translate(newX, newY);
	
	/* REPLACE START: _move */
			if ( timestamp - this.startTime > 300 ) {
				this.startTime = timestamp;
				this.startX = this.x;
				this.startY = this.y;
	
				if ( this.options.probeType == 1 ) {
					this._execEvent('scroll');
				}
			}
	
			if ( this.options.probeType > 1 ) {
				this._execEvent('scroll');
			}
	/* REPLACE END: _move */
	
		},
	
		_end: function (e) {
			if ( !this.enabled || utils.eventType[e.type] !== this.initiated ) {
				return;
			}
	
			if ( this.options.preventDefault && !utils.preventDefaultException(e.target, this.options.preventDefaultException) ) {
				e.preventDefault();
			}
	
			var point = e.changedTouches ? e.changedTouches[0] : e,
				momentumX,
				momentumY,
				duration = utils.getTime() - this.startTime,
				newX = Math.round(this.x),
				newY = Math.round(this.y),
				distanceX = Math.abs(newX - this.startX),
				distanceY = Math.abs(newY - this.startY),
				time = 0,
				easing = '';
	
			this.isInTransition = 0;
			this.initiated = 0;
			this.endTime = utils.getTime();
	
			// reset if we are outside of the boundaries
			if ( this.resetPosition(this.options.bounceTime) ) {
				return;
			}
	
			this.scrollTo(newX, newY);	// ensures that the last position is rounded
	
			// we scrolled less than 10 pixels
			if ( !this.moved ) {
				if ( this.options.tap ) {
					utils.tap(e, this.options.tap);
				}
	
				if ( this.options.click ) {
					utils.click(e);
				}
	
				this._execEvent('scrollCancel');
				return;
			}
	
			if ( this._events.flick && duration < 200 && distanceX < 100 && distanceY < 100 ) {
				this._execEvent('flick');
				return;
			}
	
			// start momentum animation if needed
			if ( this.options.momentum && duration < 300 ) {
				momentumX = this.hasHorizontalScroll ? utils.momentum(this.x, this.startX, duration, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : { destination: newX, duration: 0 };
				momentumY = this.hasVerticalScroll ? utils.momentum(this.y, this.startY, duration, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : { destination: newY, duration: 0 };
				newX = momentumX.destination;
				newY = momentumY.destination;
				time = Math.max(momentumX.duration, momentumY.duration);
				this.isInTransition = 1;
			}
	
	
			if ( this.options.snap ) {
				var snap = this._nearestSnap(newX, newY);
				this.currentPage = snap;
				time = this.options.snapSpeed || Math.max(
						Math.max(
							Math.min(Math.abs(newX - snap.x), 1000),
							Math.min(Math.abs(newY - snap.y), 1000)
						), 300);
				newX = snap.x;
				newY = snap.y;
	
				this.directionX = 0;
				this.directionY = 0;
				easing = this.options.bounceEasing;
			}
	
	// INSERT POINT: _end
	
			if ( newX != this.x || newY != this.y ) {
				// change easing function when scroller goes out of the boundaries
				if ( newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY ) {
					easing = utils.ease.quadratic;
				}
	
				this.scrollTo(newX, newY, time, easing);
				return;
			}
	
			this._execEvent('scrollEnd');
		},
	
		_resize: function () {
			var that = this;
	
			clearTimeout(this.resizeTimeout);
	
			this.resizeTimeout = setTimeout(function () {
				that.refresh();
			}, this.options.resizePolling);
		},
	
		resetPosition: function (time) {
			var x = this.x,
				y = this.y;
	
			time = time || 0;
	
			if ( !this.hasHorizontalScroll || this.x > 0 ) {
				x = 0;
			} else if ( this.x < this.maxScrollX ) {
				x = this.maxScrollX;
			}
	
			if ( !this.hasVerticalScroll || this.y > 0 ) {
				y = 0;
			} else if ( this.y < this.maxScrollY ) {
				y = this.maxScrollY;
			}
	
			if ( x == this.x && y == this.y ) {
				return false;
			}
	
			this.scrollTo(x, y, time, this.options.bounceEasing);
	
			return true;
		},
	
		disable: function () {
			this.enabled = false;
		},
	
		enable: function () {
			this.enabled = true;
		},
	
		refresh: function () {
			var rf = this.wrapper.offsetHeight;		// Force reflow
	
			this.wrapperWidth	= this.wrapper.clientWidth;
			this.wrapperHeight	= this.wrapper.clientHeight;
	
	/* REPLACE START: refresh */
			this.scrollerWidth	= this.scroller.offsetWidth;
			this.scrollerHeight	= this.scroller.offsetHeight;
	
			this.maxScrollX		= this.wrapperWidth - this.scrollerWidth;
			
			var limit;
			if ( this.options.infiniteElements ) {
				this.options.infiniteLimit = this.options.infiniteLimit || Math.floor(2147483645 / this.infiniteElementHeight);
				limit = -this.options.infiniteLimit * this.infiniteElementHeight + this.wrapperHeight;
			}
			this.maxScrollY		= limit !== undefined ? limit : this.wrapperHeight - this.scrollerHeight;
	/* REPLACE END: refresh */
	
			this.hasHorizontalScroll	= this.options.scrollX && this.maxScrollX < 0;
			this.hasVerticalScroll		= this.options.scrollY && this.maxScrollY < 0;
	
			if ( !this.hasHorizontalScroll ) {
				this.maxScrollX = 0;
				this.scrollerWidth = this.wrapperWidth;
			}
	
			if ( !this.hasVerticalScroll ) {
				this.maxScrollY = 0;
				this.scrollerHeight = this.wrapperHeight;
			}
	
			this.endTime = 0;
			this.directionX = 0;
			this.directionY = 0;
	
			this.wrapperOffset = utils.offset(this.wrapper);
	
			this._execEvent('refresh');
	
			this.resetPosition();
	
	// INSERT POINT: _refresh
	
		},
	
		on: function (type, fn) {
			if ( !this._events[type] ) {
				this._events[type] = [];
			}
	
			this._events[type].push(fn);
		},
	
		off: function (type, fn) {
			if ( !this._events[type] ) {
				return;
			}
	
			var index = this._events[type].indexOf(fn);
	
			if ( index > -1 ) {
				this._events[type].splice(index, 1);
			}
		},
	
		_execEvent: function (type) {
			if ( !this._events[type] ) {
				return;
			}
	
			var i = 0,
				l = this._events[type].length;
	
			if ( !l ) {
				return;
			}
	
			for ( ; i < l; i++ ) {
				this._events[type][i].apply(this, [].slice.call(arguments, 1));
			}
		},
	
		scrollBy: function (x, y, time, easing) {
			x = this.x + x;
			y = this.y + y;
			time = time || 0;
	
			this.scrollTo(x, y, time, easing);
		},
	
		scrollTo: function (x, y, time, easing) {
			easing = easing || utils.ease.circular;
	
			this.isInTransition = this.options.useTransition && time > 0;
			var transitionType = this.options.useTransition && easing.style;
			if ( !time || transitionType ) {
					if(transitionType) {
						this._transitionTimingFunction(easing.style);
						this._transitionTime(time);
					}
				this._translate(x, y);
			} else {
				this._animate(x, y, time, easing.fn);
			}
		},
	
		scrollToElement: function (el, time, offsetX, offsetY, easing) {
			el = el.nodeType ? el : this.scroller.querySelector(el);
	
			if ( !el ) {
				return;
			}
	
			var pos = utils.offset(el);
	
			pos.left -= this.wrapperOffset.left;
			pos.top  -= this.wrapperOffset.top;
	
			// if offsetX/Y are true we center the element to the screen
			if ( offsetX === true ) {
				offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2);
			}
			if ( offsetY === true ) {
				offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2);
			}
	
			pos.left -= offsetX || 0;
			pos.top  -= offsetY || 0;
	
			pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
			pos.top  = pos.top  > 0 ? 0 : pos.top  < this.maxScrollY ? this.maxScrollY : pos.top;
	
			time = time === undefined || time === null || time === 'auto' ? Math.max(Math.abs(this.x-pos.left), Math.abs(this.y-pos.top)) : time;
	
			this.scrollTo(pos.left, pos.top, time, easing);
		},
	
		_transitionTime: function (time) {
			time = time || 0;
	
			var durationProp = utils.style.transitionDuration;
			this.scrollerStyle[durationProp] = time + 'ms';
	
			if ( !time && utils.isBadAndroid ) {
				this.scrollerStyle[durationProp] = '0.0001ms';
				// remove 0.0001ms
				var self = this;
				rAF(function() {
					if(self.scrollerStyle[durationProp] === '0.0001ms') {
						self.scrollerStyle[durationProp] = '0s';
					}
				});
			}
	
	// INSERT POINT: _transitionTime
	
		},
	
		_transitionTimingFunction: function (easing) {
			this.scrollerStyle[utils.style.transitionTimingFunction] = easing;
	
	// INSERT POINT: _transitionTimingFunction
	
		},
	
		_translate: function (x, y) {
			if ( this.options.useTransform ) {
	
	/* REPLACE START: _translate */
	
				this.scrollerStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.translateZ;
	
	/* REPLACE END: _translate */
	
			} else {
				x = Math.round(x);
				y = Math.round(y);
				this.scrollerStyle.left = x + 'px';
				this.scrollerStyle.top = y + 'px';
			}
	
			this.x = x;
			this.y = y;
	
	// INSERT POINT: _translate
	
		},
	
		_initEvents: function (remove) {
			var eventType = remove ? utils.removeEvent : utils.addEvent,
				target = this.options.bindToWrapper ? this.wrapper : window;
	
			eventType(window, 'orientationchange', this);
			eventType(window, 'resize', this);
	
			if ( this.options.click ) {
				eventType(this.wrapper, 'click', this, true);
			}
	
			if ( !this.options.disableMouse ) {
				eventType(this.wrapper, 'mousedown', this);
				eventType(target, 'mousemove', this);
				eventType(target, 'mousecancel', this);
				eventType(target, 'mouseup', this);
			}
	
			if ( utils.hasPointer && !this.options.disablePointer ) {
				eventType(this.wrapper, utils.prefixPointerEvent('pointerdown'), this);
				eventType(target, utils.prefixPointerEvent('pointermove'), this);
				eventType(target, utils.prefixPointerEvent('pointercancel'), this);
				eventType(target, utils.prefixPointerEvent('pointerup'), this);
			}
	
			if ( utils.hasTouch && !this.options.disableTouch ) {
				eventType(this.wrapper, 'touchstart', this);
				eventType(target, 'touchmove', this);
				eventType(target, 'touchcancel', this);
				eventType(target, 'touchend', this);
			}
	
			eventType(this.scroller, 'transitionend', this);
			eventType(this.scroller, 'webkitTransitionEnd', this);
			eventType(this.scroller, 'oTransitionEnd', this);
			eventType(this.scroller, 'MSTransitionEnd', this);
		},
	
		getComputedPosition: function () {
			var matrix = window.getComputedStyle(this.scroller, null),
				x, y;
	
			if ( this.options.useTransform ) {
				matrix = matrix[utils.style.transform].split(')')[0].split(', ');
				x = +(matrix[12] || matrix[4]);
				y = +(matrix[13] || matrix[5]);
			} else {
				x = +matrix.left.replace(/[^-\d.]/g, '');
				y = +matrix.top.replace(/[^-\d.]/g, '');
			}
	
			return { x: x, y: y };
		},
		_initWheel: function () {
			utils.addEvent(this.wrapper, 'wheel', this);
			utils.addEvent(this.wrapper, 'mousewheel', this);
			utils.addEvent(this.wrapper, 'DOMMouseScroll', this);
	
			this.on('destroy', function () {
				clearTimeout(this.wheelTimeout);
				this.wheelTimeout = null;
				utils.removeEvent(this.wrapper, 'wheel', this);
				utils.removeEvent(this.wrapper, 'mousewheel', this);
				utils.removeEvent(this.wrapper, 'DOMMouseScroll', this);
			});
		},
	
		_wheel: function (e) {
			if ( !this.enabled ) {
				return;
			}
	
			e.preventDefault();
	
			var wheelDeltaX, wheelDeltaY,
				newX, newY,
				that = this;
	
			if ( this.wheelTimeout === undefined ) {
				that._execEvent('scrollStart');
			}
	
			// Execute the scrollEnd event after 400ms the wheel stopped scrolling
			clearTimeout(this.wheelTimeout);
			this.wheelTimeout = setTimeout(function () {
				if(!that.options.snap) {
					that._execEvent('scrollEnd');
				}
				that.wheelTimeout = undefined;
			}, 400);
	
			if ( 'deltaX' in e ) {
				if (e.deltaMode === 1) {
					wheelDeltaX = -e.deltaX * this.options.mouseWheelSpeed;
					wheelDeltaY = -e.deltaY * this.options.mouseWheelSpeed;
				} else {
					wheelDeltaX = -e.deltaX;
					wheelDeltaY = -e.deltaY;
				}
			} else if ( 'wheelDeltaX' in e ) {
				wheelDeltaX = e.wheelDeltaX / 120 * this.options.mouseWheelSpeed;
				wheelDeltaY = e.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
			} else if ( 'wheelDelta' in e ) {
				wheelDeltaX = wheelDeltaY = e.wheelDelta / 120 * this.options.mouseWheelSpeed;
			} else if ( 'detail' in e ) {
				wheelDeltaX = wheelDeltaY = -e.detail / 3 * this.options.mouseWheelSpeed;
			} else {
				return;
			}
	
			wheelDeltaX *= this.options.invertWheelDirection;
			wheelDeltaY *= this.options.invertWheelDirection;
	
			if ( !this.hasVerticalScroll ) {
				wheelDeltaX = wheelDeltaY;
				wheelDeltaY = 0;
			}
	
			if ( this.options.snap ) {
				newX = this.currentPage.pageX;
				newY = this.currentPage.pageY;
	
				if ( wheelDeltaX > 0 ) {
					newX--;
				} else if ( wheelDeltaX < 0 ) {
					newX++;
				}
	
				if ( wheelDeltaY > 0 ) {
					newY--;
				} else if ( wheelDeltaY < 0 ) {
					newY++;
				}
	
				this.goToPage(newX, newY);
	
				return;
			}
	
			newX = this.x + Math.round(this.hasHorizontalScroll ? wheelDeltaX : 0);
			newY = this.y + Math.round(this.hasVerticalScroll ? wheelDeltaY : 0);
	
			this.directionX = wheelDeltaX > 0 ? -1 : wheelDeltaX < 0 ? 1 : 0;
			this.directionY = wheelDeltaY > 0 ? -1 : wheelDeltaY < 0 ? 1 : 0;
	
			if ( newX > 0 ) {
				newX = 0;
			} else if ( newX < this.maxScrollX ) {
				newX = this.maxScrollX;
			}
	
			if ( newY > 0 ) {
				newY = 0;
			} else if ( newY < this.maxScrollY ) {
				newY = this.maxScrollY;
			}
	
			this.scrollTo(newX, newY, 0);
	
			if ( this.options.probeType > 1 ) {
				this._execEvent('scroll');
			}
	
	// INSERT POINT: _wheel
		},
	
		_initSnap: function () {
			this.currentPage = {};
	
			if ( typeof this.options.snap == 'string' ) {
				this.options.snap = this.scroller.querySelectorAll(this.options.snap);
			}
	
			this.on('refresh', function () {
				var i = 0, l,
					m = 0, n,
					cx, cy,
					x = 0, y,
					stepX = this.options.snapStepX || this.wrapperWidth,
					stepY = this.options.snapStepY || this.wrapperHeight,
					el;
	
				this.pages = [];
	
				if ( !this.wrapperWidth || !this.wrapperHeight || !this.scrollerWidth || !this.scrollerHeight ) {
					return;
				}
	
				if ( this.options.snap === true ) {
					cx = Math.round( stepX / 2 );
					cy = Math.round( stepY / 2 );
	
					while ( x > -this.scrollerWidth ) {
						this.pages[i] = [];
						l = 0;
						y = 0;
	
						while ( y > -this.scrollerHeight ) {
							this.pages[i][l] = {
								x: Math.max(x, this.maxScrollX),
								y: Math.max(y, this.maxScrollY),
								width: stepX,
								height: stepY,
								cx: x - cx,
								cy: y - cy
							};
	
							y -= stepY;
							l++;
						}
	
						x -= stepX;
						i++;
					}
				} else {
					el = this.options.snap;
					l = el.length;
					n = -1;
	
					for ( ; i < l; i++ ) {
						if ( i === 0 || el[i].offsetLeft <= el[i-1].offsetLeft ) {
							m = 0;
							n++;
						}
	
						if ( !this.pages[m] ) {
							this.pages[m] = [];
						}
	
						x = Math.max(-el[i].offsetLeft, this.maxScrollX);
						y = Math.max(-el[i].offsetTop, this.maxScrollY);
						cx = x - Math.round(el[i].offsetWidth / 2);
						cy = y - Math.round(el[i].offsetHeight / 2);
	
						this.pages[m][n] = {
							x: x,
							y: y,
							width: el[i].offsetWidth,
							height: el[i].offsetHeight,
							cx: cx,
							cy: cy
						};
	
						if ( x > this.maxScrollX ) {
							m++;
						}
					}
				}
	
				this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0);
	
				// Update snap threshold if needed
				if ( this.options.snapThreshold % 1 === 0 ) {
					this.snapThresholdX = this.options.snapThreshold;
					this.snapThresholdY = this.options.snapThreshold;
				} else {
					this.snapThresholdX = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold);
					this.snapThresholdY = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold);
				}
			});
	
			this.on('flick', function () {
				var time = this.options.snapSpeed || Math.max(
						Math.max(
							Math.min(Math.abs(this.x - this.startX), 1000),
							Math.min(Math.abs(this.y - this.startY), 1000)
						), 300);
	
				this.goToPage(
					this.currentPage.pageX + this.directionX,
					this.currentPage.pageY + this.directionY,
					time
				);
			});
		},
	
		_nearestSnap: function (x, y) {
			if ( !this.pages.length ) {
				return { x: 0, y: 0, pageX: 0, pageY: 0 };
			}
	
			var i = 0,
				l = this.pages.length,
				m = 0;
	
			// Check if we exceeded the snap threshold
			if ( Math.abs(x - this.absStartX) < this.snapThresholdX &&
				Math.abs(y - this.absStartY) < this.snapThresholdY ) {
				return this.currentPage;
			}
	
			if ( x > 0 ) {
				x = 0;
			} else if ( x < this.maxScrollX ) {
				x = this.maxScrollX;
			}
	
			if ( y > 0 ) {
				y = 0;
			} else if ( y < this.maxScrollY ) {
				y = this.maxScrollY;
			}
	
			for ( ; i < l; i++ ) {
				if ( x >= this.pages[i][0].cx ) {
					x = this.pages[i][0].x;
					break;
				}
			}
	
			l = this.pages[i].length;
	
			for ( ; m < l; m++ ) {
				if ( y >= this.pages[0][m].cy ) {
					y = this.pages[0][m].y;
					break;
				}
			}
	
			if ( i == this.currentPage.pageX ) {
				i += this.directionX;
	
				if ( i < 0 ) {
					i = 0;
				} else if ( i >= this.pages.length ) {
					i = this.pages.length - 1;
				}
	
				x = this.pages[i][0].x;
			}
	
			if ( m == this.currentPage.pageY ) {
				m += this.directionY;
	
				if ( m < 0 ) {
					m = 0;
				} else if ( m >= this.pages[0].length ) {
					m = this.pages[0].length - 1;
				}
	
				y = this.pages[0][m].y;
			}
	
			return {
				x: x,
				y: y,
				pageX: i,
				pageY: m
			};
		},
	
		goToPage: function (x, y, time, easing) {
			easing = easing || this.options.bounceEasing;
	
			if ( x >= this.pages.length ) {
				x = this.pages.length - 1;
			} else if ( x < 0 ) {
				x = 0;
			}
	
			if ( y >= this.pages[x].length ) {
				y = this.pages[x].length - 1;
			} else if ( y < 0 ) {
				y = 0;
			}
	
			var posX = this.pages[x][y].x,
				posY = this.pages[x][y].y;
	
			time = time === undefined ? this.options.snapSpeed || Math.max(
				Math.max(
					Math.min(Math.abs(posX - this.x), 1000),
					Math.min(Math.abs(posY - this.y), 1000)
				), 300) : time;
	
			this.currentPage = {
				x: posX,
				y: posY,
				pageX: x,
				pageY: y
			};
	
			this.scrollTo(posX, posY, time, easing);
		},
	
		next: function (time, easing) {
			var x = this.currentPage.pageX,
				y = this.currentPage.pageY;
	
			x++;
	
			if ( x >= this.pages.length && this.hasVerticalScroll ) {
				x = 0;
				y++;
			}
	
			this.goToPage(x, y, time, easing);
		},
	
		prev: function (time, easing) {
			var x = this.currentPage.pageX,
				y = this.currentPage.pageY;
	
			x--;
	
			if ( x < 0 && this.hasVerticalScroll ) {
				x = 0;
				y--;
			}
	
			this.goToPage(x, y, time, easing);
		},
	
		_initKeys: function (e) {
			// default key bindings
			var keys = {
				pageUp: 33,
				pageDown: 34,
				end: 35,
				home: 36,
				left: 37,
				up: 38,
				right: 39,
				down: 40
			};
			var i;
	
			// if you give me characters I give you keycode
			if ( typeof this.options.keyBindings == 'object' ) {
				for ( i in this.options.keyBindings ) {
					if ( typeof this.options.keyBindings[i] == 'string' ) {
						this.options.keyBindings[i] = this.options.keyBindings[i].toUpperCase().charCodeAt(0);
					}
				}
			} else {
				this.options.keyBindings = {};
			}
	
			for ( i in keys ) {
				this.options.keyBindings[i] = this.options.keyBindings[i] || keys[i];
			}
	
			utils.addEvent(window, 'keydown', this);
	
			this.on('destroy', function () {
				utils.removeEvent(window, 'keydown', this);
			});
		},
	
		_key: function (e) {
			if ( !this.enabled ) {
				return;
			}
	
			var snap = this.options.snap,	// we are using this alot, better to cache it
				newX = snap ? this.currentPage.pageX : this.x,
				newY = snap ? this.currentPage.pageY : this.y,
				now = utils.getTime(),
				prevTime = this.keyTime || 0,
				acceleration = 0.250,
				pos;
	
			if ( this.options.useTransition && this.isInTransition ) {
				pos = this.getComputedPosition();
	
				this._translate(Math.round(pos.x), Math.round(pos.y));
				this.isInTransition = false;
			}
	
			this.keyAcceleration = now - prevTime < 200 ? Math.min(this.keyAcceleration + acceleration, 50) : 0;
	
			switch ( e.keyCode ) {
				case this.options.keyBindings.pageUp:
					if ( this.hasHorizontalScroll && !this.hasVerticalScroll ) {
						newX += snap ? 1 : this.wrapperWidth;
					} else {
						newY += snap ? 1 : this.wrapperHeight;
					}
					break;
				case this.options.keyBindings.pageDown:
					if ( this.hasHorizontalScroll && !this.hasVerticalScroll ) {
						newX -= snap ? 1 : this.wrapperWidth;
					} else {
						newY -= snap ? 1 : this.wrapperHeight;
					}
					break;
				case this.options.keyBindings.end:
					newX = snap ? this.pages.length-1 : this.maxScrollX;
					newY = snap ? this.pages[0].length-1 : this.maxScrollY;
					break;
				case this.options.keyBindings.home:
					newX = 0;
					newY = 0;
					break;
				case this.options.keyBindings.left:
					newX += snap ? -1 : 5 + this.keyAcceleration>>0;
					break;
				case this.options.keyBindings.up:
					newY += snap ? 1 : 5 + this.keyAcceleration>>0;
					break;
				case this.options.keyBindings.right:
					newX -= snap ? -1 : 5 + this.keyAcceleration>>0;
					break;
				case this.options.keyBindings.down:
					newY -= snap ? 1 : 5 + this.keyAcceleration>>0;
					break;
				default:
					return;
			}
	
			if ( snap ) {
				this.goToPage(newX, newY);
				return;
			}
	
			if ( newX > 0 ) {
				newX = 0;
				this.keyAcceleration = 0;
			} else if ( newX < this.maxScrollX ) {
				newX = this.maxScrollX;
				this.keyAcceleration = 0;
			}
	
			if ( newY > 0 ) {
				newY = 0;
				this.keyAcceleration = 0;
			} else if ( newY < this.maxScrollY ) {
				newY = this.maxScrollY;
				this.keyAcceleration = 0;
			}
	
			this.scrollTo(newX, newY, 0);
	
			this.keyTime = now;
		},
	
		_animate: function (destX, destY, duration, easingFn) {
			var that = this,
				startX = this.x,
				startY = this.y,
				startTime = utils.getTime(),
				destTime = startTime + duration;
	
			function step () {
				var now = utils.getTime(),
					newX, newY,
					easing;
	
				if ( now >= destTime ) {
					that.isAnimating = false;
					that._translate(destX, destY);
					
					if ( !that.resetPosition(that.options.bounceTime) ) {
						that._execEvent('scrollEnd');
					}
	
					return;
				}
	
				now = ( now - startTime ) / duration;
				easing = easingFn(now);
				newX = ( destX - startX ) * easing + startX;
				newY = ( destY - startY ) * easing + startY;
				that._translate(newX, newY);
	
				if ( that.isAnimating ) {
					rAF(step);
				}
	
				if ( that.options.probeType == 3 ) {
					that._execEvent('scroll');
				}
			}
	
			this.isAnimating = true;
			step();
		},
	
		_initInfinite: function () {
			var el = this.options.infiniteElements;
	
			this.infiniteElements = typeof el == 'string' ? document.querySelectorAll(el) : el;
			this.infiniteLength = this.infiniteElements.length;
			this.infiniteMaster = this.infiniteElements[0];
			this.infiniteElementHeight = this.infiniteMaster.offsetHeight;
			this.infiniteHeight = this.infiniteLength * this.infiniteElementHeight;
	
			this.options.cacheSize = this.options.cacheSize || 1000;
			this.infiniteCacheBuffer = Math.round(this.options.cacheSize / 4);
	
			//this.infiniteCache = {};
			this.options.dataset.call(this, 0, this.options.cacheSize);
	
			this.on('refresh', function () {
				var elementsPerPage = Math.ceil(this.wrapperHeight / this.infiniteElementHeight);
				this.infiniteUpperBufferSize = Math.floor((this.infiniteLength - elementsPerPage) / 2);
				this.reorderInfinite();
			});
	
			this.on('scroll', this.reorderInfinite);
		},
	
		// TO-DO: clean up the mess
		reorderInfinite: function () {
			var center = -this.y + this.wrapperHeight / 2;
	
			var minorPhase = Math.max(Math.floor(-this.y / this.infiniteElementHeight) - this.infiniteUpperBufferSize, 0),
				majorPhase = Math.floor(minorPhase / this.infiniteLength),
				phase = minorPhase - majorPhase * this.infiniteLength;
	
			var top = 0;
			var i = 0;
			var update = [];
	
			//var cachePhase = Math.floor((minorPhase + this.infiniteLength / 2) / this.infiniteCacheBuffer);
			var cachePhase = Math.floor(minorPhase / this.infiniteCacheBuffer);
	
			while ( i < this.infiniteLength ) {
				top = i * this.infiniteElementHeight + majorPhase * this.infiniteHeight;
	
				if ( phase > i ) {
					top += this.infiniteElementHeight * this.infiniteLength;
				}
	
				if ( this.infiniteElements[i]._top !== top ) {
					this.infiniteElements[i]._phase = top / this.infiniteElementHeight;
	
					if ( this.infiniteElements[i]._phase < this.options.infiniteLimit ) {
						this.infiniteElements[i]._top = top;
						if ( this.options.infiniteUseTransform ) {
							this.infiniteElements[i].style[utils.style.transform] = 'translate(0, ' + top + 'px)' + this.translateZ;
						} else {
							this.infiniteElements[i].style.top = top + 'px';
						}
						update.push(this.infiniteElements[i]);
					}
				}
	
				i++;
			}
	
			if ( this.cachePhase != cachePhase && (cachePhase === 0 || minorPhase - this.infiniteCacheBuffer > 0) ) {
				this.options.dataset.call(this, Math.max(cachePhase * this.infiniteCacheBuffer - this.infiniteCacheBuffer, 0), this.options.cacheSize);
			}
	
			this.cachePhase = cachePhase;
	
			this.updateContent(update);
		},
	
		updateContent: function (els) {
			if ( this.infiniteCache === undefined ) {
				return;
			}
	
			for ( var i = 0, l = els.length; i < l; i++ ) {
				this.options.dataFiller.call(this, els[i], this.infiniteCache[els[i]._phase]);
			}
		},
	
		updateCache: function (start, data) {
			var firstRun = this.infiniteCache === undefined;
	
			this.infiniteCache = {};
	
			for ( var i = 0, l = data.length; i < l; i++ ) {
				this.infiniteCache[start++] = data[i];
			}
	
			if ( firstRun ) {
				this.updateContent(this.infiniteElements);
			}
	
		},
	
	
		handleEvent: function (e) {
			switch ( e.type ) {
				case 'touchstart':
				case 'pointerdown':
				case 'MSPointerDown':
				case 'mousedown':
					this._start(e);
					break;
				case 'touchmove':
				case 'pointermove':
				case 'MSPointerMove':
				case 'mousemove':
					this._move(e);
					break;
				case 'touchend':
				case 'pointerup':
				case 'MSPointerUp':
				case 'mouseup':
				case 'touchcancel':
				case 'pointercancel':
				case 'MSPointerCancel':
				case 'mousecancel':
					this._end(e);
					break;
				case 'orientationchange':
				case 'resize':
					this._resize();
					break;
				case 'transitionend':
				case 'webkitTransitionEnd':
				case 'oTransitionEnd':
				case 'MSTransitionEnd':
					this._transitionEnd(e);
					break;
				case 'wheel':
				case 'DOMMouseScroll':
				case 'mousewheel':
					this._wheel(e);
					break;
				case 'keydown':
					this._key(e);
					break;
				case 'click':
					if ( this.enabled && !e._constructed ) {
						e.preventDefault();
						e.stopPropagation();
					}
					break;
			}
		}
	};
	IScroll.utils = utils;
	
	if ( typeof module != 'undefined' && module.exports ) {
		module.exports = IScroll;
	} else if ( true ) {
	        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () { return IScroll; }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.IScroll = IScroll;
	}
	
	})(window, document, Math);


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(97)
	__vue_script__ = __webpack_require__(99)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/pullRefresh.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(100)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zhujianxin/Documents/vue/vue-demo-webpack/src/components/pullRefresh.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 97 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 98 */,
/* 99 */
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
	        //document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
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
/* 100 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"pull-refresh\">\n    <slot></slot>\n</div>\n<div class=\"pull-lodding\" v-if=\"scroll && index\"></div>\n";

/***/ },
/* 101 */
/***/ function(module, exports) {

	module.exports = "\n<div transition=\"page\" class=\"page-scene pullRreshwrap\">\n    <header-bar :title=\"title\" :back=\"true\" target=\"home\"></header-bar>\n    <ul class=\"scenefilter clearfix\">\n        <li @click=\"filterSchool\">\n            <span>学校<i class=\"icon icon-down\" :class=\"{'icon-up':filterType == 1}\"></i></span>\n        </li>\n        <li @click=\"filterSex\">\n            <span>性别<i class=\"icon icon-down\" :class=\"{'icon-up':filterType == 2}\"></i></span>\n        </li>\n        <li @click=\"filterSort\">\n            <span>排序<i class=\"icon icon-down\" :class=\"{'icon-up':filterType == 3}\"></i></span>\n        </li>\n    </ul>\n\n    <div id=\"wrapper\">\n        <ul id=\"scroller\" v-infinite-scroll=\"loadMore()\" infinite-scroll-disabled=\"busy\" infinite-scroll-distance=\"10\">\n            <li class=\"item clearfix\" v-for=\"item in dataList\">\n                <header class=\"clearfix\" v-link=\"{name: 'sceneDetail', query: {'user_id': item.user_id, 'scene_name': formData.scene_name, 'scene_id': formData.scene_id}}\">\n                    <div class=\"pull-left photoWrap\">\n                        <img :src=\"item.head_img_url\">\n                    </div>\n                    <div class=\"pull-left nameWrap\">\n                        <div class=\"name\">\n                            <i class=\"icon\"\n                               :class=\"{'icon-xingbienan2': item.sex == 1, 'icon-xingbienv2': item.sex == 2}\"\n                            ></i>\n                            {{item.nickname}}\n                        </div>\n                        <div class=\"school clearfix\">\n                            {{item.school_name}}\n                        </div>\n                    </div>\n                    <i class=\"icon icon-jiantouyou pull-right\"></i>\n                </header>\n                <div class=\"main\">\n                    <div class=\"text\">{{item.detail}}</div>\n                    <div class=\"imgWrap clearfix\">\n                        <div class=\"img\" v-for=\"subItem in item.serverImgs\">\n                            <img :src=\"subItem.img_url\">\n                        </div>\n                    </div>\n                </div>\n                <ul class=\"userScore clearfix\">\n                    <li>\n                        <i class=\"icon icon-aixin-copy\"></i>\n                        <em>{{item.collectCount}}</em>\n                    </li>\n                    <li>\n                        <i class=\"icon icon-liuyan\"></i>\n                        <em>{{item.appraiseCount}}</em>\n                    </li>\n                    <li>\n                        <i class=\"icon icon-yanjing\"></i>\n                        <em>{{item.viewCount}}</em>\n                    </li>\n                </ul>\n            </li>\n        </ul>\n    </div>\n\n    <span\n        class=\"ui-btn ui-btn-big\"\n        v-link=\"{name:'sceneOneKeyOrder', query:formData}\"\n    >\n        一键预约\n    </span>\n\n</div>\n";

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(103)
	__vue_script__ = __webpack_require__(105)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/scene/detail.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(113)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zhujianxin/Documents/vue/vue-demo-webpack/src/views/scene/detail.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 103 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 104 */,
/* 105 */
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
	        'headerBar': __webpack_require__(61),
	        'timeConf': __webpack_require__(106)
	    }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(107)
	__vue_script__ = __webpack_require__(110)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/timeConf.vue: named exports in *.vue files are ignored.")}
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
	  var id = "/Users/zhujianxin/Documents/vue/vue-demo-webpack/src/components/timeConf.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 107 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 108 */,
/* 109 */,
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _utils = __webpack_require__(111);
	
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
/* 111 */
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
/* 112 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"timeConf\">\n    <table>\n        <tr>\n            <td>星期</td>\n            <td>一</td>\n            <td>二</td>\n            <td>三</td>\n            <td>四</td>\n            <td>五</td>\n            <td>六</td>\n            <td>日</td>\n        </tr>\n        <tr v-for=\"item of 3\">\n            <td v-for=\"subItem of 8\" @click=\"setAccount( subItem +''+ (item+1) )\">\n                <span v-if=\"item == 0 && subItem == 0\">上午</span>\n                <span v-if=\"item == 1 && subItem == 0\">下午</span>\n                <span v-if=\"item == 2 && subItem == 0\">晚上</span>\n                <span class=\"icon iconWrap\" v-if=\"subItem != 0\">\n                    <i class=\"icon icon-xuanzhong\" v-if=\"item | timerCur subItem timerArr\"></i>\n                </span>\n            </td>\n        </tr>\n    </table>\n</div>\n";

/***/ },
/* 113 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"page-scene-detail page-current\">\n    <header-bar :title=\"title\" :back=\"true\"></header-bar>\n    <div class=\"content showHeaderNopading showFooter\">\n        <div class=\"userHeader\">\n            <img src=\"/dist/defaultImg/serverDefault.jpg\" v-if=\"!formData.photo_url\" />\n            <img :src=\"formData.photo_url\" v-else />\n            <div class=\"userWrap\">\n                <div class=\"btn\">\n                    <div class=\"radius\" v-if=\"!formData.photo_url\">\n                        <img :src=\"formData.head_img_url\" />\n                    </div>\n                </div>\n                <div class=\"name\">{{formData.usernick}}</div>\n            </div>\n            <div class=\"collection clearfix\">\n                <i class=\"ico ico-aixin\"></i>\n                <span>5人已收藏</span>\n            </div>\n        </div>\n        \n        <div class=\"userContent\">\n            <div class=\"userInfo\">\n                <span class=\"school\">\n                    <i class=\"ico ico-renzheng\"></i>\n                    {{formData.school_name}}\n                </span>\n                <div class=\"workplace\">{{formData.workplace}} 周边</div>\n            </div>\n            \n            <div class=\"userService clearfix\">\n                <i>我的服务：</i>\n                <span v-for=\"item in sceneList\" v-if=\"item | sceneCur sceneArr\">{{item.scene_name}}</span>\n            </div>\n            \n            <div class=\"block\">\n                <header>介绍服务</header>\n                <div class=\"main\">\n                    {{formData.detail}}\n                </div>\n            </div>\n            \n            <div class=\"block\">\n                <header>工作时间</header>\n                <div class=\"main\">\n                    <time-conf :timer=\"formData.timeConf\" :is-radio=\"true\"></time-conf>\n                </div>\n            </div>\n            \n            <div class=\"block\" v-if=\"formData.orderAppraise\">\n                <header>客户评价</header>\n                <div class=\"main\">\n                    <div class=\"appraiseContent\">\n                        {{formData.orderAppraise.content}}\n                    </div>\n                    <div class=\"appraiseCount\">\n                        <div class=\"ui-floatCenter\">\n                            <div class=\"user ui-sl-floatCenter clearfix\">\n                                <div class=\"img ui-floatCenter-item\">\n                                    <img :src=\"formData.orderAppraise.head_img_url\" />\n                                </div>\n                                <div class=\"nameWrap ui-floatCenter-item\">\n                                    <div class=\"name\">{{formData.orderAppraise.from_name}}</div>\n                                    <div class=\"time\">{{formData.orderAppraise.create_time}}</div>\n                                </div>\n                            </div>\n                        </div>\n                        <span class=\"btn\" v-link=\"{ name: 'sceneAppraise', query:{user_id: formData.user_id} }\">\n                            查看{{formData.orderAppraise.appraise_count}}条评价\n                        </span>\n                    </div>\n                </div>\n            </div>\n        </div>\n        \n    </div>\n    <span \n        class=\"ui-btn ui-btn-big\"\n        v-link=\"{ name: 'sceneInviteOrder', query:query}\"\n    >\n        约TA\n    </span>\n</div>\n";

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(115)
	__vue_script__ = __webpack_require__(117)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/scene/reserve.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(118)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zhujianxin/Documents/vue/vue-demo-webpack/src/views/scene/reserve.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 115 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 116 */,
/* 117 */
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
	        'headerBar': __webpack_require__(61),
	        'timeConf': __webpack_require__(106)
	    }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 118 */
/***/ function(module, exports) {

	module.exports = "\n<div transition=\"page\" class=\"page-scene-detail page-current\">\n    <header-bar :title=\"title\" :back=\"true\"></header-bar>\n    <div class=\"content showHeader showFooter\">\n        <header>\n            林小兔\n            5人已收藏\n            厦门大学\n            厦门\n            我的服务：地推 酒店服务 话务员 物流 家教\n        </header>\n        介绍服务\n        工作时间\n        <time-conf :timer=\"formData.timeConf\"></time-conf>\n        客户评价\n        马小跳6080\n        2016-2-22\n        查看5条评论\n    </div>\n    <span \n            class=\"ui-btn ui-btn-big\"\n        >\n        约TA\n    </span>\n</div>\n";

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(120)
	__vue_script__ = __webpack_require__(122)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/scene/appraise.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(123)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zhujianxin/Documents/vue/vue-demo-webpack/src/views/scene/appraise.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 120 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 121 */,
/* 122 */
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
	        'headerBar': __webpack_require__(61)
	    }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 123 */
/***/ function(module, exports) {

	module.exports = "\n<div transition=\"page\" class=\"page-scene-appraise page-current\">\n    <header-bar :title=\"title\" :back=\"true\"></header-bar>\n    <div class=\"content showHeader\">\n        <div class=\"filter\">\n            <span @click=\"setType(0)\" :class=\"{'cur': type == 0}\">全部({{formData.count.allCount}})</span>\n            <span @click=\"setType(1)\" :class=\"{'cur': type == 1}\">好评({{formData.count.goodCount}})</span>\n            <span @click=\"setType(2)\" :class=\"{'cur': type == 2}\">中评({{formData.count.cenCount}})</span>\n            <span @click=\"setType(3)\" :class=\"{'cur': type == 3}\">差评({{formData.count.poolCount}})</span>\n        </div>\n        <div class=\"block\" v-for=\"item in formData.appraises\">\n            <div class=\"user clearfix\">\n                <div class=\"img\">\n                    <img :src=\"item.head_img_url\" />\n                </div>\n                <div class=\"nameWrap\">\n                    <div class=\"name\">{{item.from_name}}</div>\n                    <div class=\"time\">{{item.create_time}}</div>\n                </div>\n                <div class=\"type\">\n                    <i class=\"ico {{typeIconArr[item.type-1]}}\"></i>\n                    <div>{{typeArr[item.type-1]}}</div>\n                </div>\n            </div>\n            <div class=\"main\">\n                {{item.content}}\n            </div>\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(125)
	__vue_script__ = __webpack_require__(127)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/scene/inviteOrder.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(136)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zhujianxin/Documents/vue/vue-demo-webpack/src/views/scene/inviteOrder.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 125 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 126 */,
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _utils = __webpack_require__(111);
	
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
				showAlert: false,
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
	
				$.ajax({
					url: "/soytime/order/inviteOrder",
					type: 'POST',
					dataType: 'json',
					data: self.formData,
					success: function success(data) {
						if (!data.success) {
							self.showAlert = true;
						} else {
							self.$route.router.go({ name: 'sceneOrderSuccess', query: { order_id: data.result.order_id } });
						}
					}
				});
			}
		},
		components: {
			'headerBar': __webpack_require__(61),
			'actionsheet': __webpack_require__(128),
			'alert': __webpack_require__(133)
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
	//         <alert :show.sync="showAlert" title="null">提交失败!</alert>
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
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(129)
	__vue_script__ = __webpack_require__(131)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/actionsheet/index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(132)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zhujianxin/Documents/vue/vue-demo-webpack/src/components/actionsheet/index.vue"
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
/* 132 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"actionsheet_wrap\">\n  <div class=\"weui_mask_transition\" :class=\"{'weui_fade_toggle': show}\" :style=\"{display: show ? 'block' : 'none'}\" @click=\"show=false\"></div>\n  <div class=\"weui_actionsheet\" :class=\"{'weui_actionsheet_toggle': show}\">\n    <div class=\"weui_actionsheet_menu\">\n      <div class=\"weui_actionsheet_cell\" v-for=\"(key, text) in menus\" @click=\"dispatchEvent('menu-click', key)\">\n        {{{text}}}\n      </div>\n      <div class=\"vux-actionsheet-gap\" v-if=\"showCancel\"></div>\n      <div class=\"weui_actionsheet_cell vux-actionsheet-cancel\" @click=\"dispatchEvent('menu-click', 'cancel')\" v-if=\"showCancel\">{{cancelText}}</div>\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(134)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/alert/index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(135)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zhujianxin/Documents/vue/vue-demo-webpack/src/components/alert/index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 134 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="weui_dialog_alert" v-show="show">
	//     <div class="weui_mask"></div>
	//     <div class="weui_dialog">
	//       <div class="weui_dialog_hd"><strong class="weui_dialog_title">{{title}}</strong></div>
	//       <div class="weui_dialog_bd"><slot></slot></div>
	//       <div class="weui_dialog_ft">
	//         <a href="javascript:;" class="weui_btn_dialog primary" @click="onHide">{{buttonText}}</a>
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
	    buttonText: {
	      type: String,
	      default: 'OK'
	    }
	  },
	  methods: {
	    onHide: function onHide() {
	      this.show = false;
	      this.$dispatch('on-hide');
	    }
	  },
	  watch: {
	    show: function show(val) {
	      if (val) {
	        this.$dispatch('on-show');
	      }
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 135 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"weui_dialog_alert\" v-show=\"show\">\n  <div class=\"weui_mask\"></div>\n  <div class=\"weui_dialog\">\n    <div class=\"weui_dialog_hd\"><strong class=\"weui_dialog_title\">{{title}}</strong></div>\n    <div class=\"weui_dialog_bd\"><slot></slot></div>\n    <div class=\"weui_dialog_ft\">\n      <a href=\"javascript:;\" class=\"weui_btn_dialog primary\" @click=\"onHide\">{{buttonText}}</a>\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 136 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"page-scene-inviteOrder page-current\">\n    <header-bar :title=\"title\" :back=\"true\" target=\"scene\"></header-bar>\n    <div class=\"content showHeader showFooter\">\n\n        <div class=\"userWrap\">\n            <div class=\"btn\">\n                <div class=\"radius\">\n                    <img :src=\"formData.head_img_url\" v-if=\"!formData.photo_url\" />\n                    <img :src=\"formData.photo_url\" v-else />\n                </div>\n            </div>\n            <div class=\"name\">{{formData.usernick}}</div>\n        </div>\n\n        <div class=\"block clearfix\">\n            <span class=\"pull-left\">任务类型</span>\n            <span class=\"pull-right\">{{formData.scene_name}}</span>\n        </div>\n\n        <div class=\"block clearfix\">\n            <div class=\"item clearfix\">\n                <div class=\"half\">\n                    <span>开始时间</span>\n                    <input type=\"text\" id=\"start\" v-model=\"formData.start_time\" mobiscroll-datetime=\"settings\">\n                </div>\n                <div class=\"half\">\n                    <span>结束时间</span>\n                    <input type=\"text\" id=\"end\" v-model=\"formData.end_time\" mobiscroll-datetime=\"settings\">\n                </div>\n            </div>\n            <div class=\"item clearfix timeWrap\" v-for=\"period in tempPeriodArr\" v-if=\"tempPeriodArr.length\">\n                <span>时段：</span>\n                <input type=\"text\" value=\"{{period[0]}}\" class=\"period_start\" mobiscroll-datetime=\"settings\" placeholder=\"请选择\">\n                <i>-</i>\n                <input type=\"text\" value=\"{{period[1]}}\" class=\"period_end\" mobiscroll-datetime=\"settings\" placeholder=\"请选择\">\n                <i class=\"ico ico-close\" @click=\"removePeriod($index)\"></i>\n            </div>\n            <div class=\"item clearfix timeWrap\" v-if=\"!tempPeriodArr.length\">\n                <span>时段：</span>\n                <input type=\"text\" class=\"period_start\" mobiscroll-datetime=\"settings\" placeholder=\"请选择\">\n                <i>-</i>\n                <input type=\"text\" class=\"period_end\" mobiscroll-datetime=\"settings\" placeholder=\"请选择\">\n            </div>\n            <div @click=\"addPeriod\">\n                <i class=\"ico ico-anonymous\"></i>添加时间段\n            </div>\n        </div>\n\n        <div class=\"block clearfix\">\n            <textarea placeholder=\"请详细填写你的需求任务\"></textarea>\n        </div>\n\n        <div class=\"block clearfix\">\n            <div class=\"item clearfix\">\n                <div class=\"half\">\n                    <span>报酬</span>\n                    <input type=\"text\" placeholder=\"输入金额\">\n                </div>\n                <div class=\"half unit\">\n                    <span v-for=\"unit in unitTextArr\"\n                          :class=\"{'cur': unit == formData.unit}\"\n                          @click=\"setUnit(unit)\"\n                    >\n                        {{unit}}\n                    </span>\n                </div>\n            </div>\n            <div class=\"clearfix payWay\" @click=\"showActionsheet\">\n                <span>支付方式</span>\n                <span class=\"pull-right\" v-if=\"formData.pay_way\">{{payTextArr[formData.pay_way-1]}}</span>\n                <span class=\"pull-right ico ico-jiantouyou\" v-else></span>\n            </div>\n        </div>\n\n        <div class=\"block clearfix\">\n            <div class=\"item clearfix\">\n                <span>公司地址</span>\n                <input type=\"text\" placeholder=\"请填写详细地址\" v-model=\"formData.comp_addr\" @click=\"setAddress(0)\">\n            </div>\n            <div class=\"clearfix\">\n                <span>服务位置</span>\n                <input type=\"text\" placeholder=\"请输入准确位置\" v-model=\"formData.workplace\" @click=\"setAddress(1)\">\n            </div>\n        </div>\n\n    </div>\n    <alert :show.sync=\"showAlert\" title=\"null\">提交失败!</alert>\n    <span\n        class=\"ui-btn ui-btn-big\"\n        @click=\"save\"\n    >\n        下单\n    </span>\n\n</div>\n";

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(138)
	__vue_script__ = __webpack_require__(140)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/scene/oneKeyOrder.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(151)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zhujianxin/Documents/vue/vue-demo-webpack/src/views/scene/oneKeyOrder.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 138 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 139 */,
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _utils = __webpack_require__(111);
	
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
	            showAlert: false,
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
	                url: "/soytime/order/oneKeyOrder",
	                type: 'POST',
	                dataType: 'json',
	                data: self.formData,
	                success: function success(data) {
	                    if (!data.success) {
	                        self.showAlert = true;
	                    } else {
	                        self.$route.router.go({ name: 'sceneOrderSuccess', query: { order_id: data.result.order_id } });
	                    }
	                }
	            });
	        }
	    },
	    components: {
	        'headerBar': __webpack_require__(61),
	        'sceneType': __webpack_require__(141),
	        'welfares': __webpack_require__(146),
	        'actionsheet': __webpack_require__(128),
	        'alert': __webpack_require__(133)
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
	//         <alert :show.sync="showAlert" title="null">提交失败!</alert>
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
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(142)
	__vue_script__ = __webpack_require__(144)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/sceneType.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(145)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zhujianxin/Documents/vue/vue-demo-webpack/src/components/sceneType.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 142 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 143 */,
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _utils = __webpack_require__(111);
	
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
/* 145 */
/***/ function(module, exports) {

	module.exports = "\n<ul class=\"sceneType clearfix\">\n    <li v-for=\"item in sceneList\" @click=\"setScene(item.scene_id)\">\n\n        <span class=\"cur\" v-if=\"item | sceneCur sceneArr\">\n            {{item.scene_name}}\n        </span>\n        <span v-else>\n            {{item.scene_name}}\n        </span>\n        \n    </li>\n</ul>\n";

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(147)
	__vue_script__ = __webpack_require__(149)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/welfares.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(150)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zhujianxin/Documents/vue/vue-demo-webpack/src/components/welfares.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 147 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 148 */,
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _utils = __webpack_require__(111);
	
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
/* 150 */
/***/ function(module, exports) {

	module.exports = "\n<ul class=\"welfareType clearfix\">\n    <li v-for=\"item in welfares\" @click=\"setwelfare(item.welfare_id)\">\n\n        <span class=\"cur\" v-if=\"item | welfareCur welfareArr\">\n            {{item.welfare_name}}\n        </span>\n        <span v-else>\n            {{item.welfare_name}}\n        </span>\n\n    </li>\n</ul>\n";

/***/ },
/* 151 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"page-scene-oneKeyOrder page-current\">\n    <header-bar :title=\"title\" :back=\"true\" target=\"scene\"></header-bar>\n    <div class=\"content showHeader showFooter\">\n        <div class=\"block clearfix\">\n            <span>雇主名</span>\n            <input type=\"text\" placeholder=\"请输入公司名字\">\n        </div>\n\n        <div class=\"block clearfix\">\n            <div class=\"item\">\n                <span>选择类型</span>\n            </div>\n            <scene-type \n                :scene-list=\"indexData.sceneList\"\n                :scene-ids.sync=\"formData.sceneId\"\n                :is-radio=\"true\"\n            ></scene-type>\n        </div>\n\n        <div class=\"block clearfix\">\n            <div class=\"item clearfix\">\n                <div class=\"half\">\n                    <span>开始时间</span>\n                    <input type=\"text\" id=\"start\" v-model=\"formData.start_time\" mobiscroll-datetime=\"settings\">\n                </div>\n                <div class=\"half\">\n                    <span>结束时间</span>\n                    <input type=\"text\" id=\"end\" v-model=\"formData.end_time\" mobiscroll-datetime=\"settings\">\n                </div>\n            </div>\n            <div class=\"item clearfix timeWrap\" v-for=\"period in tempPeriodArr\" v-if=\"tempPeriodArr.length\">\n                <span>时段：</span>\n                <input type=\"text\" value=\"{{period[0]}}\" class=\"period_start\" mobiscroll-datetime=\"settings\" placeholder=\"请选择\">\n                <i>-</i>\n                <input type=\"text\" value=\"{{period[1]}}\" class=\"period_end\" mobiscroll-datetime=\"settings\" placeholder=\"请选择\">\n                <i class=\"ico ico-close\" @click=\"removePeriod($index)\"></i>\n            </div>\n            <div class=\"item clearfix timeWrap\" v-if=\"!tempPeriodArr.length\">\n                <span>时段：</span>\n                <input type=\"text\" class=\"period_start\" mobiscroll-datetime=\"settings\" placeholder=\"请选择\">\n                <i>-</i>\n                <input type=\"text\" class=\"period_end\" mobiscroll-datetime=\"settings\" placeholder=\"请选择\">\n            </div>\n            <div @click=\"addPeriod\">\n                <i class=\"ico ico-anonymous\"></i>添加时间段\n            </div>\n        </div>\n\n        <div class=\"block clearfix\">\n            <div class=\"item clearfix\" @click=\"selectSchool\">\n                <span class=\"pull-left\">学校</span>\n                <span class=\"pull-right\" v-if=\"formData.school_name\">{{formData.school_name}}</span>\n                <span class=\"pull-right ico ico-jiantouyou\" v-else></span>\n            </div>\n            <div class=\"clearfix\">\n                <div class=\"half sex\">\n                    <span class=\"pull-left\">性别</span>\n                    <span class=\"pull-right\">\n                        <i class=\"ico ico-xingbienan3\" :class=\"{'cur':formData.sex == '男'}\" @click=\"setSex('男')\"></i>\n                        <i class=\"ico ico-xingbienv4\" :class=\"{'cur':formData.sex == '女'}\" @click=\"setSex('女')\"></i>\n                    </span>\n                </div>\n                <div class=\"half\">\n                    <span>身高</span>\n                    <input type=\"text\" placeholder=\"不限\">\n                </div>\n            </div>\n        </div>\n        \n        <div class=\"block clearfix\">\n            <span>预约人数</span>\n            <input type=\"text\" placeholder=\"输入预约人数\">\n        </div>\n\n        <div class=\"block clearfix\">\n            <textarea placeholder=\"请详细填写你的需求任务\"></textarea>\n        </div>\n\n        <div class=\"block clearfix\">\n            <div class=\"item clearfix\">\n                <div class=\"half\">\n                    <span>报酬</span>\n                    <input type=\"text\" placeholder=\"输入金额\">\n                </div>\n                <div class=\"half unit\">\n                    <span v-for=\"unit in unitTextArr\"\n                          :class=\"{'cur': unit == formData.unit}\"\n                          @click=\"setUnit(unit)\"\n                    >\n                        {{unit}}\n                    </span>\n                </div>\n            </div>\n            <div class=\"clearfix payWay\" @click=\"showActionsheet\">\n                <span>支付方式</span>\n                <span class=\"pull-right\" v-if=\"formData.pay_way\">{{payTextArr[formData.pay_way-1]}}</span>\n                <span class=\"pull-right ico ico-jiantouyou\" v-else></span>\n            </div>\n        </div>\n\n        <div class=\"block clearfix\">\n            <div class=\"item clearfix\">\n                <span>特别福利</span>\n            </div>\n            <welfares\n                    :welfares=\"welfares\"\n                    :welfares-ids.sync=\"formData.welfares\"\n            ></welfares>\n        </div>\n\n        <div class=\"block clearfix\">\n            <div class=\"item clearfix\">\n                <span>公司地址</span>\n                <input type=\"text\" placeholder=\"请填写详细地址\" v-model=\"formData.comp_addr\" @click=\"setAddress(0)\">\n            </div>\n            <div class=\"clearfix\">\n                <span>服务位置</span>\n                <input type=\"text\" placeholder=\"请输入准确位置\" v-model=\"formData.workplace\" @click=\"setAddress(1)\">\n            </div>\n        </div>\n\n        <div class=\"block clearfix\">\n            <span class=\"pull-left\">报名半小时后自动确定人选</span>\n            <span\n                class=\"pull-right switch ico\"\n                :class=\"{'ico-open': formData.auto_select == 1, 'ico-close3': formData.auto_select == 0}\"\n                @click=\"switch\"\n            ></span>\n        </div>\n    </div>\n    <actionsheet :show.sync=\"isShow\" :menus=\"actionsheet\" @menu-click=\"setPayWay\"></actionsheet>\n    <alert :show.sync=\"showAlert\" title=\"null\">提交失败!</alert>\n    <span\n        class=\"ui-btn ui-btn-big\"\n        @click=\"save\"\n    >\n        下单\n    </span>\n\n</div>\n";

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(153)
	__vue_script__ = __webpack_require__(155)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/scene/orderSuccess.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(161)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zhujianxin/Documents/vue/vue-demo-webpack/src/views/scene/orderSuccess.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 153 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 154 */,
/* 155 */
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
	//                 <img src="../../img/orderSucess.png">
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
	//                         <span class="img"><img src="../../img/orderSucess.png" alt=""></span>
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
	//         <span class="showOrderDetail" v-link="{name: 'userWorkPublishDetail', query:formData }">
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
	            isShowConfirm: false,
	            confirmName: '',
	            formData: {}
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
	        'headerBar': __webpack_require__(61),
	        'timeConf': __webpack_require__(106),
	        'confirm': __webpack_require__(156)
	    }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(157)
	__vue_script__ = __webpack_require__(159)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/confirm/index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(160)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zhujianxin/Documents/vue/vue-demo-webpack/src/components/confirm/index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 157 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 158 */,
/* 159 */
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
/* 160 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"weui_dialog_confirm\" v-show=\"show\">\n  <div class=\"weui_mask\"></div>\n  <div class=\"weui_dialog\">\n    <div class=\"weui_dialog_hd\"><strong class=\"weui_dialog_title\">{{title}}</strong></div>\n    <div class=\"weui_dialog_bd\"><slot></slot></div>\n    <div class=\"weui_dialog_ft\">\n      <a href=\"javascript:;\" class=\"weui_btn_dialog default\" @click=\"onCancel\">{{cancelText}}</a>\n      <a href=\"javascript:;\" class=\"weui_btn_dialog primary\" @click=\"onConfirm\">{{confirmText}}</a>\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n<div transition=\"page\" class=\"page-scene-orderSuccess page-current\">\n    <div class=\"content  showFooter\">\n        <div class=\"header\">下单成功!</div>\n        <div class=\"subHeader\">需求人数2人</div>\n        <span class=\"jump\">跳过</span>\n        <div class=\"imgWrap\">\n            <img src=\"" + __webpack_require__(162) + "\">\n        </div>\n        <div class=\"userList\">\n            <div class=\"text\">\n                <p>系统已为您推送 203 人</p>\n                <p>已报名人数3人</p>\n            </div>\n            <div class=\"list\">\n                <header>剩余选择人数：2人</header>\n                <div class=\"item clearfix\">\n                    <span class=\"ico ico-xuan\"></span>\n                    <span class=\"img\"><img src=\"" + __webpack_require__(162) + "\" alt=\"\"></span>\n                    <span class=\"name\">林小兔</span>\n                    <span class=\"ico ico-dianhua3\" @click=\"getPhone(formData.name)\"></span>\n                </div>\n            </div>\n        </div>\n        <!--\n        <div class=\"text\">\n            <p>\n                系统已为您推送 203 人，请耐心等待...\n            </p>\n            <p>\n                已报名人数0人\n            </p>\n            <p>\n                若30分钟内订单没有响应，系统将关闭订单\n            </p>\n        </div>\n        -->\n    </div>\n    <span class=\"showOrderDetail\" v-link=\"{name: 'userWorkPublishDetail', query:formData }\">\n        查看订单详情\n    </span>\n</div>\n\n<confirm :show.sync=\"isShowConfirm\" @on-confirm=\"confirm\">\n    <div class=\"page-scene-orderSuccess-formWrap\">\n        是否要获取{{confirmName}}的联系方式？\n    </div>\n</confirm>\n";

/***/ },
/* 162 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAArsAAAK7CAYAAADyY0eCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4NEVDNjQ2NUY5OUIxMUU1QkVGNkFENDJEQUUwQ0E3MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4NEVDNjQ2NkY5OUIxMUU1QkVGNkFENDJEQUUwQ0E3MiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjg0RUM2NDYzRjk5QjExRTVCRUY2QUQ0MkRBRTBDQTcyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjg0RUM2NDY0Rjk5QjExRTVCRUY2QUQ0MkRBRTBDQTcyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+GWKjmQABuO9JREFUeNrsvfd3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"

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(164)
	__vue_script__ = __webpack_require__(166)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/scene/address.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(172)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zhujianxin/Documents/vue/vue-demo-webpack/src/views/scene/address.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 164 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 165 */,
/* 166 */
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
	        'headerBar': __webpack_require__(61),
	        'confirm': __webpack_require__(156),
	        'toast': __webpack_require__(167)
	    }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(168)
	__vue_script__ = __webpack_require__(170)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/toast/index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(171)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zhujianxin/Documents/vue/vue-demo-webpack/src/components/toast/index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 168 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 169 */,
/* 170 */
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
/* 171 */
/***/ function(module, exports) {

	module.exports = "\n<div id=\"toast\" v-show=\"show\">\n  <div class=\"weui_mask_transparent\"></div>\n    <div class=\"weui_toast\" :class=\"{'weui_toast_forbidden': type == 'warn', 'weui_toast_cancel': type == 'cancel'}\">\n      <i class=\"weui_icon_toast\"></i>\n      <p class=\"weui_toast_content\"><slot></slot></p>\n  </div>\n</div>\n";

/***/ },
/* 172 */
/***/ function(module, exports) {

	module.exports = "\n<div transition=\"page\" class=\"page-scene-address page-current\">\n    <header-bar :title=\"title\" :back=\"true\"></header-bar>\n    <div class=\"content showHeader\">\n        <div class=\"header\">\n            <input type=\"text\" v-model=\"addressText\" placeholder=\"如：厦门市思明区中山路\">\n            <span class=\"btn\" @click=\"addAddress\">新增位置</span>\n        </div>\n        <div class=\"main\">\n            <div class=\"tit\">历史位置:</div>\n            <div class=\"item clearfix\" v-for=\"item in addressData\">\n                <span class=\"pull-left\">{{item.address}}</span>\n                <div class=\"pull-right\">\n                    <span @click=\"setAddress($index)\">\n                        <span class=\"ico ico-yixuan\"></span>\n                        <span>选择地址</span>\n                    </span>\n                    <span class=\"ico ico-shanchu\" @click=\"removeAddress($index)\"></span>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<confirm :show.sync=\"isShowConfirm\" @on-confirm=\"confirm\">\n    确认删除该地址?\n</confirm>\n<toast :show.sync=\"isShowToast\" :time=\"500000\">{{toastText}}</toast>\n";

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(174)
	__vue_script__ = __webpack_require__(176)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/user.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(177)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zhujianxin/Documents/vue/vue-demo-webpack/src/views/user.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 174 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 175 */,
/* 176 */
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
	//                     .rem(width, 360);
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
	//                     text-align:center;
	//                     .rem(font-size, 30);
	//                     .rem(line-height, 30);
	//                     em{
	//                         font-style:normal;
	//                     }
	//                     span{
	//                         .rem(margin, 0, 8);
	//                     }
	//                     .ico{
	//                         .rem(font-size, 40);
	//                     }
	//                     .ico-xiaolian{
	//                         color:#eb503a;
	//                     }
	//                     .ico-cry{
	//                         color:#5e5e5e;
	//                     }
	//                     .ico-kulian{
	//                         color:#b2b2b2;
	//                     }
	//                     .ico-aixin{
	//                         color: #ff946e;
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
	//                         <i class="ico ico-xiaolian"></i>
	//                         <div class="clearfix">
	//                             <span class="pull-left">好评</span>
	//                             <em class="pull-left">{{formData.goodCount}}</em>
	//                         </div>
	//                     </li>
	//                     <li>
	//                         <i class="ico ico-cry"></i>
	//                         <div class="clearfix">
	//                             <span class="pull-left">中评</span>
	//                             <em class="pull-left">{{formData.cenCount}}</em>
	//                         </div>
	//                     </li>
	//                     <li>
	//                         <i class="ico ico-kulian"></i>
	//                         <div class="clearfix">
	//                             <span class="pull-left">差评</span>
	//                             <em class="pull-left">{{formData.poolCount}}</em>
	//                         </div>
	//                     </li>
	//                     <li>
	//                         <i class="ico ico-aixin"></i>
	//                         <div class="clearfix">
	//                             <span class="pull-left">收藏</span>
	//                             <em class="pull-left">{{formData.collectCount}}</em>
	//                         </div>
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
			'headerBar': __webpack_require__(61)
		}
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 177 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"page-user\">\n    <header-bar :title=\"title\"></header-bar>\n    \n    <div class=\"content showHeader showFooter\">\n    \n        <div class=\"userHeader clearfix\">\n            <div class=\"userWrap clearfix\">\n                <div class=\"pull-left photoWrap\">\n                    <img :src=\"formData.head_img_url\">\n                </div>\n                <div class=\"pull-left nameWrap\">\n                    <div class=\"name\">{{formData.nickname}}</div>\n                    <div \n                        class=\"auth clearfix\"\n                        v-link=\"{name: 'auth'}\" \n                        v-if=\"formData.sutdent_auth == 0 || formData.sutdent_auth == 3\"\n                    >\n                        <i class=\"icon icon-anquanbaozhang pull-left\"></i>\n                        <span class=\"pull-left\" v-if=\"formData.sutdent_auth == 0\">未认证，点此认证！</span>\n                        <span class=\"pull-left\" v-if=\"formData.sutdent_auth == 3\">认证失败，点此重新认证！</span>\n                    </div>\n                    <div\n                        class=\"auth clearfix\"\n                        v-if=\"formData.sutdent_auth == 1\"\n                    >\n                        <i class=\"icon icon-anquanbaozhang2 pull-left\"></i>\n                        <span class=\"pull-left\">认证成功</span>\n                    </div>\n                    <div\n                        class=\"auth clearfix\"\n                        v-if=\"formData.sutdent_auth == 2\"\n                    >\n                        <i class=\"icon icon-anquanbaozhang pull-left\"></i>\n                        <span class=\"pull-left\">认证中，请耐心等待</span>\n                    </div>\n                </div>\n            </div>\n            <ul class=\"userScore clearfix\">\n                <li>\n                    <i class=\"ico ico-xiaolian\"></i>\n                    <div class=\"clearfix\">\n                        <span class=\"pull-left\">好评</span>\n                        <em class=\"pull-left\">{{formData.goodCount}}</em>\n                    </div>\n                </li>\n                <li>\n                    <i class=\"ico ico-cry\"></i>\n                    <div class=\"clearfix\">\n                        <span class=\"pull-left\">中评</span>\n                        <em class=\"pull-left\">{{formData.cenCount}}</em>\n                    </div>\n                </li>\n                <li>\n                    <i class=\"ico ico-kulian\"></i>\n                    <div class=\"clearfix\">\n                        <span class=\"pull-left\">差评</span>\n                        <em class=\"pull-left\">{{formData.poolCount}}</em>\n                    </div>\n                </li>\n                <li>\n                    <i class=\"ico ico-aixin\"></i>\n                    <div class=\"clearfix\">\n                        <span class=\"pull-left\">收藏</span>\n                        <em class=\"pull-left\">{{formData.collectCount}}</em>\n                    </div>\n                </li>\n            </ul>\n        </div>\n\n        <div class=\"list-block\">\n            <ul>\n                <li class=\"item-content item-link\" v-link=\"{name: 'userMoney'}\">\n                    <div class=\"item-inner\">\n                        <div class=\"item-title\">我的余额</div>\n                    </div>\n                </li>\n            </ul>\n        </div>\n        <div class=\"list-block\">\n            <ul>\n                <li class=\"item-content item-link\" v-link=\"{name: 'userSetting'}\">\n                    <div class=\"item-inner\">\n                        <div class=\"item-title\">设置</div>\n                    </div>\n                </li>\n                <li class=\"item-content item-link\" v-link=\"{name: 'userWorkServer'}\">\n                    <div class=\"item-inner\">\n                        <div class=\"item-title\">发布服务</div>\n                    </div>\n                </li>\n            </ul>\n        </div>\n        <div class=\"list-block\">\n            <ul>\n                <li class=\"item-content item-link\" v-link=\"{name: 'userWorkPublish'}\">\n                    <div class=\"item-inner\">\n                        <div class=\"item-title\">发单任务</div>\n                    </div>\n                </li>\n                <li class=\"item-content item-link\" v-link=\"{name: 'userWorkAccept'}\">\n                    <div class=\"item-inner\">\n                        <div class=\"item-title\">接单任务</div>\n                    </div>\n                </li>\n            </ul>\n        </div>\n        <div class=\"list-block\">\n            <ul>\n                <li class=\"item-content item-link\" v-link=\"{name: 'service'}\">\n                    <div class=\"item-inner\">\n                        <div class=\"item-title\">在线客服</div>\n                    </div>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(179)
	__vue_script__ = __webpack_require__(181)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/user/setting.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(187)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zhujianxin/Documents/vue/vue-demo-webpack/src/views/user/setting.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 179 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 180 */,
/* 181 */
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
	        'headerBar': __webpack_require__(61),
	        'timeConf': __webpack_require__(106),
	        'bindMobile': __webpack_require__(182)
	    }
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(183)
	__vue_script__ = __webpack_require__(185)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/bindMobile.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(186)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zhujianxin/Documents/vue/vue-demo-webpack/src/components/bindMobile.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 183 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 184 */,
/* 185 */
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
	        'confirm': __webpack_require__(156)
	    }
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 186 */
/***/ function(module, exports) {

	module.exports = "\n    <div class=\"item clearfix\" @click=\"showMobile\">\n        <span class=\"pull-left\">手机号</span>\n        <span class=\"pull-right\">{{mobile}}</span>\n    </div>\n    <confirm :show.sync=\"isShowConfirm\" @on-confirm=\"confirm\">\n        <div class=\"page-user-formWrap\">\n            <div class=\"mobileWrap clearfix\">\n                <label class=\"pull-left\">手机</label>\n                <input class=\"pull-left\" type=\"text\" id=\"mobile\" placeholder=\"手机号\" v-model=\"mobile\" />\n            </div>\n            <div class=\"codeWrap clearfix\">\n                <label class=\"pull-left\">验证码</label>\n                <input class=\"pull-left\" type=\"text\" id=\"code\" placeholder=\"验证码\"  />\n                <span class=\"pull-right\" id=\"getCode\">\n                    <span id=\"getCodeText\">获取验证码</span>\n                    <span id=\"getCodeTime\"></span>\n                </span>\n            </div>\n        </div>\n    </confirm>\n    <script type=\"text/html\" id=\"toastWrap\">\n        <span class=\"toastWrap\">\n            <span id=\"toast\" class=\"toast\">\n                [[content]]\n            </span>\n        </span>\n    </script>\n\t<script type=\"text/html\" id=\"mobileWrap\">\n        <div class=\"page-user-formWrap\">\n            <div class=\"mobileWrap clearfix\">\n                <label class=\"pull-left\">手机</label>\n                <input class=\"pull-left\" type=\"text\" id=\"mobile\" placeholder=\"手机号\" v-model=\"mobile\" />\n            </div>\n            <div class=\"codeWrap clearfix\">\n                <label class=\"pull-left\">验证码</label>\n                <input class=\"pull-left\" type=\"text\" id=\"code\" placeholder=\"验证码\"  />\n                <span class=\"pull-right\" id=\"getCode\">\n                    <span id=\"getCodeText\">获取验证码</span>\n                    <span id=\"getCodeTime\"></span>\n                </span>\n            </div>\n        </div>\n\t</script>\n";

/***/ },
/* 187 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"page-user page-user-setting\" transition=\"page\">\n\n    <header-bar :title=\"title\" back=\"true\"></header-bar>\n    \n    <div class=\"content showHeader showFooter\">\n        \n        <div class=\"block\">\n            <div class=\"clearfix\">\n                <div class=\"pull-left photoName\">头像</div>\n                <div class=\"pull-right photoWrap\">\n                    <img :src=\"formData.head_img_url\">\n                </div>\n            </div>\n            <div class=\"clearfix\">\n                <div class=\"pull-left\">姓名 </div>\n                <div class=\"pull-right\">\n                    <input type=\"text\" v-model=\"formData.nickname\" />\n                </div>\n            </div>\n            <div class=\"clearfix\">\n                <div class=\"pull-left\">性别</div>\n                <div class=\"pull-right\">{{formData.sex}}</div>\n            </div>\n            <div class=\"clearfix\">\n                <div class=\"pull-left\">生日</div>\n                <div class=\"pull-right\">\n                    <input type=\"text\" id=\"datetime-picker\" v-model=\"formData.birthday\" mobiscroll-datetime=\"settings\" />\n                </div>\n            </div>\n            <div class=\"clearfix\">\n                <div class=\"pull-left\">身高 </div>\n                <div class=\"pull-right\">\n                    <input type=\"text\" v-model=\"formData.height\" />\n                </div>\n            </div>\n        </div>\n        \n        <div class=\"block\">\n            <bind-mobile :mobile.sync=\"formData.mobile\"></bind-mobile>\n            <div class=\"clearfix\">\n                <div class=\"pull-left\">邮箱</div>\n                <div class=\"pull-right\">\n                    <input type=\"text\" v-model=\"formData.email\" />\n                </div>\n            </div>\n            <div class=\"clearfix\">\n                <div class=\"pull-left\">QQ</div>\n                <div class=\"pull-right\">\n                    <input type=\"text\" v-model=\"formData.qq\" />\n                </div>\n            </div>\n        </div>\n        \n        <div class=\"block\">\n            <div class=\"clearfix\">\n                <div class=\"pull-left\">订单接送提醒</div>\n                <div class=\"pull-right\">\n                    <label class=\"label-switch\">\n                        <input type=\"checkbox\" v-model=\"formData.open\" >\n                        <div class=\"checkbox\"></div>\n                    </label>\n                </div>\n            </div>\n            <time-conf :timer.sync=\"formData.timeConf\"></time-conf>\n        </div>\n        \n    </div>\n    <span \n        class=\"ui-btn ui-btn-big\"\n        @click=\"save\"\n    >\n        保存\n    </span>\n</div>\n";

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(189)
	__vue_script__ = __webpack_require__(192)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/user/money.vue: named exports in *.vue files are ignored.")}
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
	  var id = "/Users/zhujianxin/Documents/vue/vue-demo-webpack/src/views/user/money.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 189 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 190 */,
/* 191 */,
/* 192 */
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
	        },
	        deactivate: function deactivate() {
	            var self = this;
	            self.formData.tradeRecord = [];
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
	        'headerBar': __webpack_require__(61),
	        'pullRefresh': __webpack_require__(96)
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
/* 193 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"page-user page-user-money pullRreshwrap\" transition=\"page\">\n    <header-bar :title=\"title\" back=\"true\"></header-bar>\n    <div class=\"content showHeaderNopading\">\n        <div class=\"moneyHeader\">\n            <header>\n                <span><i>账户余额</i>{{formData.balance}}</span>\n            </header>\n            <footer class=\"clearfix\">\n                <div></div>\n                <span>转入</span>\n                <span>转出</span>\n            </footer>\n        </div>\n        <div class=\"moneyList\">\n            <header>交易记录</header>\n            <pull-refresh @on-scroll-lodding=\"getData\">\n                <li class=\"item clearfix\" v-for=\"tradeRecord in formData.tradeRecord\">\n                    {{typeText[ tradeRecord.type - 1]}}\n                    {{tradeRecord.create_time}}\n                    {{tradeRecord.amount}}元\n                </li>\n            </pull-refresh>\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(195)
	__vue_script__ = __webpack_require__(197)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/user/work/server.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(198)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zhujianxin/Documents/vue/vue-demo-webpack/src/views/user/work/server.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 195 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 196 */,
/* 197 */
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
	//                     <li class="serverImgs" v-for="item in serverImgs">
	//                         <img :src="item.img_url" />
	//                     </li>
	//                     <li v-if="serverImgs.length >= 3">
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
	            url: "/soytime/server/myInfo",
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
	        'headerBar': __webpack_require__(61),
	        'timeConf': __webpack_require__(106),
	        'sceneType': __webpack_require__(141)
	    }
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 198 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"page-user-work-server\">\n    <header-bar :title=\"title\" back=\"true\"></header-bar>\n    \n    <div class=\"content showHeaderNopading showFooter\">\n\n        <div class=\"userHeader\">\n            <img src=\"/dist/defaultImg/serverDefault.jpg\" v-if=\"!formData.photo_url\" />\n            <img :src=\"formData.photo_url\" v-else />\n            <div class=\"userWrap\">\n                <div class=\"btn\">\n                    <div class=\"radius\"></div>\n                    <div class=\"ico ico-anonymous\"></div>\n                    <div class=\"text\">添加照片</div>\n                </div>\n                <div class=\"name\">{{formData.usernick}}</div>\n            </div>\n        </div>\n    \n        <div class=\"block\">\n            <div class=\"header\">请选择工作类别(可多选)</div>\n            <scene-type \n                :scene-list=\"indexData.sceneList\"\n                :scene-ids.sync=\"formData.sceneIds\"\n            ></scene-type>\n        </div>\n        \n        <div class=\"block\">\n            <div class=\"header\">个人描述</div>\n            <textarea placeholder=\"请填写您的服务描述！\">{{formData.detail}}</textarea>\n        </div>\n        \n        <div class=\"block\">\n            <div class=\"header\">上传照片</div>\n            <ul class=\"clearfix\">\n                <li class=\"serverImgs\" v-for=\"item in serverImgs\">\n                    <img :src=\"item.img_url\" />\n                </li>\n                <li v-if=\"serverImgs.length >= 3\">\n                    增加照片\n                </li>\n            </ul>\n        </div>\n        \n        <div class=\"block\">\n            <div class=\"header\">工作区域(选择)</div>\n        </div>\n        \n        <div class=\"block\">\n            <div class=\"header\">工作时间</div>\n            <time-conf :timer.sync=\"formData.timeConf\"></time-conf>\n        </div>\n    </div>\n    \n    <span \n        class=\"ui-btn ui-btn-big\"\n    >\n        发布\n    </span>\n    \n</div>\n";

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(200)
	__vue_script__ = __webpack_require__(202)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/user/work/publish.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(203)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zhujianxin/Documents/vue/vue-demo-webpack/src/views/user/work/publish.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 200 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 201 */,
/* 202 */
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
	        'headerBar': __webpack_require__(61),
	        'pullRefresh': __webpack_require__(96),
	        'confirm': __webpack_require__(156)
	    }
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 203 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"page-user-work-publish pullRreshwrap\">\n    <header-bar :title=\"title\" :back=\"true\"></header-bar>\n\n    <ul class=\"filter clearfix\">\n        <li @click=\"setTag(1)\">\n            <span :class=\"{'cur':tag == 1}\">最近订单</span>\n        </li>\n        <li @click=\"setTag(2)\">\n            <span :class=\"{'cur':tag == 2}\">历史订单</span>\n        </li>\n        <li @click=\"setTag(3)\">\n            <span :class=\"{'cur':tag == 3}\">待评价</span>\n        </li>\n    </ul>\n\n    <div class=\"content showHeader showTab\">\n        <pull-refresh @on-scroll-lodding=\"getData\">\n            <div class=\"item\" v-for=\"(index,item) in formData\">\n                <span class=\"tag\">{{item.scene_name}}</span>\n                <header class=\"clearfix\" v-link=\"{ name: 'userWorkPublishDetail', query:formData }\">\n                    2016-2-22 12:30\n                    <div class=\"status\">{{ statusText[item.status] }}</div>\n                </header>\n                <section class=\"clearfix\">\n                    <div v-if=\"item.orderRespon\">\n                        <div class=\"commit clearfix\">\n                            <a href=\"tel:{{item.orderRespon.mobile}}\" class=\"ico ico-dianhua3\"></a>\n                            <span v-if=\"item.orderRespon.is_appraise\">评价</span>\n                        </div>\n                        <div>指定接单人：{{item.orderRespon.nickname}}</div>\n                    </div>\n                    <div>{{item.detail}} </div>\n                    <div class=\"number\">预定人数：{{item.number}}人</div>\n                    <div class=\"address\">工作地点：{{item.workplace}}</div>\n                </section>\n                <footer v-if=\"item.orderResponses\">\n                    <div class=\"textWrap\">\n                        <div>报名人数：{{resultResponse.responseCount}}人&nbsp;&nbsp;已选{{resultResponse.selectedCount}}人，剩余{{resultResponse.restCount}}人可选</div>\n                        <div class=\"mark\">报名者，请获取一个人的联系方式</div>\n                    </div>\n                    <ul class=\"userList\">\n                        <li class=\"clearfix\" v-for=\"(subIndex,subItem) in item.orderResponses\">\n                            <div class=\"nameWrap\" @click=\"getMobile(item, subItem, index, subIndex)\">\n                                <i class=\"ico ico-xuan\" :class=\"{'cur': subItem.is_checked == 1}\"></i>\n                                <span class=\"name\">{{subItem.nickname}}</span>\n                            </div>\n                            <div class=\"commit\">\n                                <a v-if=\"subItem.is_checked == 1\" href=\"tel:{{subItem.mobile}}\" class=\"ico ico-dianhua3\"></a>\n                                <span>评价</span>\n                            </div>\n                        </li>\n                    </ul>\n\n                </footer>\n            </div>\n        </pull-refresh>\n    </div>\n</div>\n<confirm :show.sync=\"isShowConfirm\" @on-confirm=\"confirm\">\n    <div class=\"page-scene-orderSuccess-formWrap\">\n        是否要获取{{confirmName}}的联系方式？\n    </div>\n</confirm>\n";

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(205)
	__vue_script__ = __webpack_require__(207)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/user/work/publishDetail.vue: named exports in *.vue files are ignored.")}
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
	  var id = "/Users/zhujianxin/Documents/vue/vue-demo-webpack/src/views/user/work/publishDetail.vue"
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
	//                     {{item.skill_detail}}
	//                 </section>
	//                 <footer class="clearfix">
	//                     <span class="no" v-if="item.status">拒绝</span>
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
	        'headerBar': __webpack_require__(61)
	    }
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 208 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"page-user-work-publishDetail\">\n    <header-bar :title=\"title\" :back=\"true\"></header-bar>\n\n    <div class=\"content showHeader\">\n        <div class=\"header clearfix\">\n            <header>{{formData.scene_name}}</header>\n            <section>\n                <ul>\n                    <li class=\"clearfix\">\n                        <span class=\"label\">公司地址：</span>\n                        <span class=\"field\">{{formData.workplace}}</span>\n                    </li>\n                    <li class=\"clearfix\">\n                        <span class=\"label\">工作任务：</span>\n                        <span class=\"field\">{{formData.scene_name}}</span>\n                    </li>\n                    <li class=\"clearfix\">\n                        <span class=\"label\">需要人数：</span>\n                        <span class=\"field\">{{formData.number}}人<i>(指定{{formData.stu_name}})</i><span>\n                    </li>\n                    <li class=\"clearfix\">\n                        <span class=\"label\">工作时间：</span>\n                        <span class=\"field\">{{formData.start_time}}-{{formData.end_time}}</span>\n                    </li>\n                    <li class=\"clearfix\">\n                        <span class=\"label\">时间段：</span>\n                        <span class=\"field\">{{formData.period_times}}</span>\n                    </li>\n                </ul>\n                <div>50元/天</div>\n            </section>\n            <footer>\n                <div>工作内容：</div>\n                <div>{{formData.detail}}</div>\n            </footer>\n        </div>\n        <div class=\"item clearfix\" v-for=\"item in formData.orderResponses\">\n             <header class=\"clearfix\">\n                <div class=\"pull-left photoWrap\">\n                    <img :src=\"item.head_img_url\">\n                </div>\n                <div class=\"pull-left nameWrap\">\n                    <div class=\"name\">\n                        <i class=\"icon\"\n                           :class=\"{'icon-xingbienan2': item.sex == 1, 'icon-xingbienv2': item.sex == 2}\"\n                        ></i>\n                        {{item.usernick}}\n                    </div>\n                    <div class=\"school clearfix\">\n                        {{item.school_name}}\n                    </div>\n                </div>\n                <i class=\"ico ico-dianhua pull-right\"></i>\n            </header>\n            <section>\n                {{item.skill_detail}}\n            </section>\n            <footer class=\"clearfix\">\n                <span class=\"no\" v-if=\"item.status\">拒绝</span>\n                <span class=\"yes\">约TA</span>\n                <span class=\"pass\">已约</span>\n            </footer>\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(210)
	__vue_script__ = __webpack_require__(212)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/user/work/accept.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(213)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zhujianxin/Documents/vue/vue-demo-webpack/src/views/user/work/accept.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 210 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 211 */,
/* 212 */
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
	        'headerBar': __webpack_require__(61),
	        'pullRefresh': __webpack_require__(96)
	    }
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 213 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"page-user-work-accept pullRreshwrap\">\n    <header-bar :title=\"title\" :back=\"true\"></header-bar>\n\n    <div class=\"content showHeader\">\n        <pull-refresh @on-scroll-lodding=\"getData\">\n            <div class=\"item\" v-for=\"item in formData\">\n                <header class=\"clearfix\" v-link=\"{name: 'userWorkAcceptDetail', query: {'order_id': item.order_id}}\">\n                    <div class=\"photoWrap\">\n                        <img :src=\"item.head_img_url\">\n                    </div>\n                    <div class=\"textWrap\">\n                        <div class=\"header clearfix\">\n                            <span class=\"name\">{{item.scene_name}}</span>\n                            <span class=\"time pull-right\">{{item.create_time}}</span>\n                        </div>\n                        <div class=\"text\">{{item.detail}}</div>\n                    </div>\n                </header>\n                <div class=\"info\">\n                    <div class=\"salary clearfix\">\n                        <div class=\"pull-left\">报酬: {{item.salary}}元/{{item.unit}}</div>\n                        <div class=\"pull-right\">\n                            <i class=\"btn\">评价</i>\n                            <i class=\"btn disable\">已评价</i>\n                        </div>\n                    </div>\n                    <div>\n                        时间: <span>{{item.start_time}} {{item.end_time}} {{item.period_times}}</span>\n                    </div>\n                    <div>\n                        服务位置: <span>{{item.workplace}}</span>\n                    </div>\n                </div>\n            </div>\n        </pull-refresh>\n    </div>\n</div>\n";

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(215)
	__vue_script__ = __webpack_require__(220)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/user/work/acceptDetail.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(221)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zhujianxin/Documents/vue/vue-demo-webpack/src/views/user/work/acceptDetail.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 215 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */
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
	//                 <li class="btn no" @click="back"><span>拒绝</span></li>
	//                 <li class="btn yes" @click="save"><span>报名</span></li>
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
	    methods: {
	        save: function save() {
	            var self = this;
	            $.ajax({
	                url: "/soytime/order/agreeOrder",
	                type: 'POST',
	                data: self.formData,
	                dataType: 'json',
	                success: function success(data) {}
	            });
	        },
	        back: function back() {
	            self.$route.router.go({ name: 'userWorkAccept' });
	        }
	    },
	    components: {
	        'headerBar': __webpack_require__(61)
	    }
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 221 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"page-user-work-acceptDetail\">\n    <header-bar :title=\"title\" :back=\"true\"></header-bar>\n\n    <div class=\"content showHeader\">\n        <div class=\"header\">\n            <i class=\"headerIcon\"></i>\n            <header>{{formData.scene_name}}</header>\n            <section>\n                <div><i class=\"ico ico-calendar\"></i>{{formData.start_time}} - {{formData.end_time}}</div>\n                <div><i class=\"ico ico-time\"></i>{{formData.period_times}}</div>\n                <div><i class=\"ico ico-everyone\"></i>共{{formData.number}}人</div>\n                <div><i class=\"ico ico-calendar\"></i>{{formData.salary}}元/{{formData.unit}}</div>\n                <div><i class=\"ico ico-zuobiao\"></i>{{formData.comp_addr}}</div>\n            </section>\n        </div>\n        <div class=\"map\" v-link=\"{name: 'userWorkAcceptBus', query: queryObj}\">\n            <div>\n                <i class=\"ico ico-bus\"></i>\n                <span>公交路线</span>\n            </div>\n            <i class=\"ico ico-bofang\"></i>\n        </div>\n        <div class=\"detail\">\n            <i class=\"detailIcon\"></i>\n            {{formData.detail}}\n        </div>\n        <div class=\"user clearfix\">\n            <div class=\"pull-left\">\n                <div class=\"photoWrap\">\n                    <img :src=\"formData.head_img_url\">\n                </div>\n                <div class=\"name\">\n                    {{formData.clientAppraise.creator_name}}\n                </div>\n            </div>\n            <div class=\"pull-right\">\n                <div class=\"appraise\">\n                    <div class=\"goodCount\"><span>{{formData.clientAppraise.goodCount}}</span><i>好评</i></div>\n                    <div class=\"cenCount\"><span>{{formData.clientAppraise.cenCount}}</span><i>中评</i></div>\n                    <div class=\"poolCount\"><span>{{formData.clientAppraise.poolCount}}</span><i>差评</i></div>\n                </div>\n                <a href=\"tel:{{formData.clientAppraise.mobile}}\" class=\"ico ico-dianhua2\"></a>\n            </div>\n        </div>\n        <div class=\"list\">\n            <header class=\"clearfix\">\n                <span class=\"pull-left\">目前已有{{formData.response.length}}人报名</span>\n                <span class=\"pull-right\">差评3次，酱油将无法推送服务</span>\n            </header>\n            <div class=\"clearfix\">\n                <div class=\"photoWrap\" v-for=\"item in formData.response\">\n                    <img :src=\"item.head_img_url\">\n                </div>\n            </div>\n        </div>\n    </div>\n    <footer class=\"footer\">\n        <span class=\"text\">报名可领取红包哦!!!</span>\n        <ul class=\"clearfix\">\n            <li class=\"btn no\" @click=\"back\"><span>拒绝</span></li>\n            <li class=\"btn yes\" @click=\"save\"><span>报名</span></li>\n        </ul>\n    </footer>\n</div>\n";

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(223)
	__vue_script__ = __webpack_require__(225)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/user/work/acceptAppraise.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(226)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zhujianxin/Documents/vue/vue-demo-webpack/src/views/user/work/acceptAppraise.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 223 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 224 */,
/* 225 */
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
	        'headerBar': __webpack_require__(61)
	    }
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 226 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"page-user-work-acceptAppraise\">\n    <header-bar :title=\"title\" :back=\"true\"></header-bar>\n\n    <div class=\"content showHeader\">\n        <div class=\"tagWrap clearfix\">\n            <div class=\"tag\" @click=\"setType(1)\">\n                <i class=\"ico ico-xiaolian\"></i>\n                <span :class=\"{'cur': formData.type == 1}\">好评</span>\n            </div>\n            <div class=\"tag\" @click=\"setType(2)\">\n                <i class=\"ico ico-cry\"></i>\n                <span :class=\"{'cur': formData.type == 2}\">中评</span>\n            </div>\n            <div class=\"tag\" @click=\"setType(3)\">\n                <i class=\"ico ico-kulian\"></i>\n                <span :class=\"{'cur': formData.type == 3}\">差评</span>\n            </div>\n        </div>\n        <textarea placeholder=\"请输入您要评价的内容\" v-model=\"formData.content\"></textarea>\n    </div>\n    <div class=\"ui-btn ui-btn-big\" @click=\"save\">提交</div>\n</div>\n";

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(228)
	__vue_script__ = __webpack_require__(230)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/user/work/acceptBus.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(231)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zhujianxin/Documents/vue/vue-demo-webpack/src/views/user/work/acceptBus.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 228 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 229 */,
/* 230 */
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
	        'headerBar': __webpack_require__(61)
	    }
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 231 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"page-user-work-acceptBus\">\n    <header-bar :title=\"title\" :back=\"true\"></header-bar>\n    <div id=\"amapWrap\" class=\"content\"></div>\n    <div id=\"panelWrap\">\n        <div id=\"panelBtn\" @click=\"switch\">\n            <div class=\"ico\" :class=\"{'ico-down':isShow, 'ico-up': !isShow}\"></div>\n        </div>\n        <div id=\"panelBg\" v-show=\"isShow\">\n            <div id=\"panel\"></div>\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(233)
	__vue_script__ = __webpack_require__(235)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/service.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(236)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zhujianxin/Documents/vue/vue-demo-webpack/src/views/service.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 233 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 234 */,
/* 235 */
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
	        'headerBar': __webpack_require__(61)
	    }
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 236 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"page-user\">\n    <header-bar :title=\"title\"></header-bar>\n    \n    <div class=\"content showHeader showFooter\">\n        <a external v-link=\"\">edit</a>\n\n\n        <div class=\"card-header\">\n            <img src=\"xxxHTMLLINKxxx0.473690693732351060.6027526746038347xxx\">\n            名字\n\n            未认证，点此认证！\n            \n            好评   1\n            中评\n            差评   1\n            收藏\n        </div>\n\n        <div class=\"list-block\">\n            <ul>\n                <li class=\"item-content item-link\">\n                    <a external v-link=\"{name: 'userMoney'}\">\n                        <div class=\"item-media\"><i class=\"icon icon-f7\"></i></div>\n                        <div class=\"item-inner\">\n                            <div class=\"item-title\">我的余额</div>\n                        </div>\n                    </a>\n                </li>\n            </ul>\n        </div>\n        <div class=\"list-block\">\n            <ul>\n                <li class=\"item-content item-link\">\n                    <a external v-link=\"{name: 'userSetting'}\">\n                        <div class=\"item-media\"><i class=\"icon icon-f7\"></i></div>\n                        <div class=\"item-inner\">\n                            <div class=\"item-title\">设置</div>\n                        </div>\n                    </a>\n                </li>\n                <li class=\"item-content item-link\">\n                    <a external v-link=\"{name: 'userWorkServer'}\">\n                        <div class=\"item-media\"><i class=\"icon icon-f7\"></i></div>\n                        <div class=\"item-inner\">\n                            <div class=\"item-title\">发布服务</div>\n                        </div>\n                    </a>\n                </li>\n            </ul>\n        </div>\n        <div class=\"list-block\">\n            <ul>\n                <li class=\"item-content item-link\">\n                    <a external v-link=\"{name: 'userWorkPublish'}\">\n                        <div class=\"item-media\"><i class=\"icon icon-f7\"></i></div>\n                        <div class=\"item-inner\">\n                            <div class=\"item-title\">发单任务</div>\n                        </div>\n                    </a>\n                </li>\n                <li class=\"item-content item-link\">\n                    <a external v-link=\"{name: 'userWorkAccept'}\">\n                        <div class=\"item-media\"><i class=\"icon icon-f7\"></i></div>\n                        <div class=\"item-inner\">\n                            <div class=\"item-title\">接单任务</div>\n                        </div>\n                    </a>\n                </li>\n            </ul>\n        </div>\n        <div class=\"list-block\">\n            <ul>\n                <li class=\"item-content item-link\">\n                    <a external v-link=\"{name: 'service'}\">\n                        <div class=\"item-media\"><i class=\"icon icon-f7\"></i></div>\n                        <div class=\"item-inner\">\n                            <div class=\"item-title\">在线客服</div>\n                        </div>\n                    </a>\n                </li>\n            </ul>\n        </div>\n        <router-view></router-view>\n    </div>\n</div>\n";

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(238)
	__vue_script__ = __webpack_require__(240)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/user/auth/step1.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(241)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zhujianxin/Documents/vue/vue-demo-webpack/src/views/user/auth/step1.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 238 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 239 */,
/* 240 */
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
	        'headerBar': __webpack_require__(61),
	        'bindMobile': __webpack_require__(182)
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
/* 241 */
/***/ function(module, exports) {

	module.exports = "\n    <div class=\"page-authStep1\">\n        <header-bar :title=\"title\" :back=\"true\"></header-bar>\n        <div class=\"content showHeader\">\n            <div class=\"stepTitle\">申请认证</div>\n            <div class=\"ui-floatCenter\">\n                <div class=\"ui-sl-floatCenter\">\n                    <i class=\"ui-floatCenter-item icon icon-anquanbaozhang\"></i>\n                    <i class=\"ui-floatCenter-item icon link\"></i>\n                    <i class=\"ui-floatCenter-item icon icon-anquanbaozhang icon-anquanbaozhang2\"></i>\n                </div>\n\t\t\t</div>\n            <div class=\"stepText\">将在一个工作日内审核完成!</div>\n            <div class=\"progress\">\n                <span class=\"item cur\"><span>1</span>请填写基本信息</span>\n                <span class=\"item\"><span>2</span>上传证照</span>\n                <span class=\"item\"><span>3</span>服务设置</span>\n            </div>\n            <div class=\"params\">\n                <div class=\"item clearfix\" @click=\"selectCity\">\n                    <span class=\"pull-left\">您的城市</span>\n                    <span class=\"pull-right\">{{formData.city_name}}</span>\n                </div>\n                <div class=\"item clearfix\" @click=\"selectSchool\" v-if=\"formData.city_id\">\n                    <span class=\"pull-left\">您的学校</span>\n                    <span class=\"pull-right\">{{formData.school_name}}</span>\n                </div>\n\t\t\t\t<bind-mobile :mobile.sync=\"formData.mobile\"></bind-mobile>\n            </div>\n        </div>\n        <span \n            class=\"ui-btn ui-btn-big\"\n            v-if=\"formData.city_id && formData.school_id && formData.mobile\" \n            @click=\"goAuth\"\n        >\n            下一步\n        </span>\n    </div>\n    \n";

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(243)
	__vue_script__ = __webpack_require__(245)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/user/auth/selectMap.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(246)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zhujianxin/Documents/vue/vue-demo-webpack/src/views/user/auth/selectMap.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 243 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 244 */,
/* 245 */
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
	        'headerBar': __webpack_require__(61)
	    }
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 246 */
/***/ function(module, exports) {

	module.exports = "\n    <div transition=\"page\" class=\"page-selectMap page-current\">\n        <header-bar :title=\"title\" :back=\"true\"></header-bar>\n        <div id=\"amapWrap\" class=\"content\"></div>\n\t\t<div id=\"panel\"></div>\n    </div>\n";

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(248)
	__vue_script__ = __webpack_require__(251)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/user/auth/step2.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(252)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zhujianxin/Documents/vue/vue-demo-webpack/src/views/user/auth/step2.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 248 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 249 */,
/* 250 */,
/* 251 */
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
	        'headerBar': __webpack_require__(61)
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
/* 252 */
/***/ function(module, exports) {

	module.exports = "\n    <div class=\"page-authStep1 page-authStep2\">\n        <header-bar :title=\"title\" :back=\"true\"></header-bar>\n        <div class=\"content showHeader\">\n            <div class=\"stepTitle\">申请认证</div>\n            <div class=\"ui-floatCenter\">\n                <div class=\"ui-sl-floatCenter\">\n                    <i class=\"ui-floatCenter-item icon icon-anquanbaozhang\"></i>\n                    <i class=\"ui-floatCenter-item icon link\"></i>\n                    <i class=\"ui-floatCenter-item icon icon-anquanbaozhang icon-anquanbaozhang2\"></i>\n                </div>\n\t\t\t</div>\n            <div class=\"stepText\">将在一个工作日内审核完成!</div>\n            <div class=\"progress\">\n                <span class=\"item\"><span>1</span>请填写基本信息</span>\n                <span class=\"item cur\"><span>2</span>上传证照</span>\n                <span class=\"item\"><span>3</span>服务设置</span>\n            </div>\n            <div class=\"params\">\n                <div class=\"item clearfix\" @click=\"getPersionPic\">\n                    <span class=\"pull-left\">个人照片</span>\n                    <span class=\"pull-right\" v-if=\"tmpUrlData.auth_head_url\">\n                        <img :src=\"tmpUrlData.auth_head_url\" />\n                    </span>\n                    <span class=\"pull-right addPhoto\" v-else=\"!tmpUrlData.auth_head_url\">\n                        <i class=\"icon icon-anonymous2\"></i>\n                    </span>\n                </div>\n                <div class=\"item clearfix\" @click=\"getStudentPic\">\n                    <span class=\"pull-left\">学生证</span>\n                    <span class=\"pull-right\" v-if=\"tmpUrlData.auth_student_card_url\">\n                        <img :src=\"tmpUrlData.auth_student_card_url\" />\n                    </span>\n                    <span class=\"pull-right addPhoto\" v-else=\"!tmpUrlData.auth_student_card_url\">\n                        <i class=\"icon icon-anonymous2\"></i>\n                    </span>\n                </div>\n            </div>\n        </div>\n        <span \n            class=\"ui-btn ui-btn-big\"\n            v-if=\"tmpUrlData.auth_head_url && tmpUrlData.auth_student_card_url\" \n            @click=\"goAuth\"\n        >\n            下一步\n        </span>\n    </div>\n";

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(254)
	__vue_script__ = __webpack_require__(256)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/user/auth/step3.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(257)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zhujianxin/Documents/vue/vue-demo-webpack/src/views/user/auth/step3.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 254 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 255 */,
/* 256 */
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
	        'timeConf': __webpack_require__(106),
	        'sceneType': __webpack_require__(141),
	        'headerBar': __webpack_require__(61)
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
/* 257 */
/***/ function(module, exports) {

	module.exports = "\n    <div class=\"page-authStep1 page-authStep3\">\n        <header-bar :title=\"title\" :back=\"true\"></header-bar>\n        <div class=\"content showHeader\" :class=\"{showFooter: (formData.sceneIds && formData.timeConf && formData.longitude)}\">\n            <div class=\"stepTitle\">申请认证</div>\n            <div class=\"ui-floatCenter\">\n                <div class=\"ui-sl-floatCenter\">\n                    <i class=\"ui-floatCenter-item icon icon-anquanbaozhang\"></i>\n                    <i class=\"ui-floatCenter-item icon link\"></i>\n                    <i class=\"ui-floatCenter-item icon icon-anquanbaozhang icon-anquanbaozhang2\"></i>\n                </div>\n\t\t\t</div>\n            <div class=\"stepText\">将在一个工作日内审核完成!</div>\n            <div class=\"progress\">\n                <span class=\"item\"><span>1</span>请填写基本信息</span>\n                <span class=\"item\"><span>2</span>上传证照</span>\n                <span class=\"item cur\"><span>3</span>服务设置</span>\n            </div>\n            <div class=\"params\">\n                <div class=\"item\">\n                    <div class=\"itemTitle\">请选择工作类别(可多选)</div>\n                    <scene-type \n                        :scene-list=\"indexData.sceneList\"\n                        :scene-ids.sync=\"formData.sceneIds\"\n                    ></scene-type>\n                </div>\n                <div class=\"item clearfix\" @click=\"getMap\">\n                    <span class=\"pull-left\">\n                        工作区域(选择)\n                    </span>\n                    <span class=\"pull-right\">{{formData.workplace}}</span>\n                </div>\n                <div class=\"item\">\n                    <div class=\"itemTitle\">工作时间(可多选 ）</div>\n                    <time-conf :timer.sync=\"formData.timeConf\"></time-conf>\n                </div>\n            </div>\n        </div>\n        <span \n            class=\"ui-btn ui-btn-big\"\n            v-if=\"(formData.sceneIds && formData.timeConf && formData.longitude)\"\n            @click=\"submit\"\n        >\n            下一步\n        </span>\n    </div>\n";

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(259)
	__vue_script__ = __webpack_require__(261)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/user/auth/checking.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(262)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zhujianxin/Documents/vue/vue-demo-webpack/src/views/user/auth/checking.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 259 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 260 */,
/* 261 */
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
/* 262 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"page-checking\">\n    <h2>等待是</h2>\n    <div>\n        <p>酱油已收到您的认证信息！</p>\n        <p>将在一个工作日内帮您完成认证。</p>\n    </div>\n</div>\n";

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(264)
	__vue_script__ = __webpack_require__(266)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/user/auth/success.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(267)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zhujianxin/Documents/vue/vue-demo-webpack/src/views/user/auth/success.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 264 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 265 */,
/* 266 */
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
/* 267 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"page-success\">\n    <h2>开心是</h2>\n    <div>\n        <p>恭喜您！</p>\n        <p>成功通过认证，可以开始穿衣服了！亲</p>\n    </div>\n</div>\n";

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(269)
	__vue_script__ = __webpack_require__(271)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/common/selectCity.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(272)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zhujianxin/Documents/vue/vue-demo-webpack/src/views/common/selectCity.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 269 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 270 */,
/* 271 */
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
/* 272 */
/***/ function(module, exports) {

	module.exports = "\n    <div class=\"page-selectCity\" transition=\"page\" >\n\n        <div class=\"bar\">\n            <div class=\"searchbar\">\n                <a class=\"searchbar-cancel\">取消</a>\n                <div class=\"search-input\">\n                    <label class=\"icon icon-search\" for=\"search\"></label>\n                    <input type=\"text\" id='search' v-model=\"keyword\" placeholder='输入关键字...'/>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"content showHeader\">\n            <ul class=\"list\" v-if=\"!tmpData.length\">\n\t\t\t\t<li v-for=\"item in indexData.areaList\" @click=\"goAuth(item)\">\n                    {{item.city_name}}\n                </li>\n            </ul>\n            <ul class=\"list\" v-else=\"tmpData.length\">\n                <li v-for=\"item in tmpData\" @click=\"goAuth(item)\">\n                    {{item.city_name}}\n                </li>\n            </ul>\n        </div>\n    </div>\n\n";

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(274)
	__vue_script__ = __webpack_require__(276)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/common/selectSchool.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(277)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zhujianxin/Documents/vue/vue-demo-webpack/src/views/common/selectSchool.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 274 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 275 */,
/* 276 */
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
/* 277 */
/***/ function(module, exports) {

	module.exports = "\n    <div id=\"area\" class=\"page-selectCity page-selectSchool\" transition=\"page\" >\n\n        <div class=\"bar\">\n            <div class=\"searchbar\">\n                <a class=\"searchbar-cancel\">取消</a>\n                <div class=\"search-input\">\n                    <label class=\"icon icon-search\" for=\"search\"></label>\n                    <input type=\"text\" id='search' v-model=\"keyword\" placeholder='输入关键字...'/>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"content showHeader\">\n            <ul class=\"list\" v-if=\"!tmpData.length\">\n\t\t\t\t<li v-for=\"item in schoolList\" @click=\"goAuth(item)\">\n                    {{item.school_name}}\n                </li>\n            </ul>\n            <ul class=\"list\" v-else=\"tmpData.length\">\n\t\t\t\t<li v-for=\"item in tmpData\" @click=\"goAuth(item)\">\n                    {{item.school_name}}\n                </li>\n            </ul>\n        </div>\n\n    </div>\n";

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(279)
	__vue_script__ = __webpack_require__(281)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/common/selectSex.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(282)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zhujianxin/Documents/vue/vue-demo-webpack/src/views/common/selectSex.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 279 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 280 */,
/* 281 */
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
	//     <div class="page-selectCity page-selectSex" transition="page" >
	//
	//         <div class="content">
	//             <ul class="list">
	// 				<li @click="goScene(1)">男</li>
	// 				<li @click="goScene(2)">女</li>
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
	            formData: {}
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
	        goScene: function goScene(sex) {
	            var self = this;
	            self.formData.sex = sex;
	            self.$route.router.go({ 'name': 'scene', query: self.formData });
	        }
	    }
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 282 */
/***/ function(module, exports) {

	module.exports = "\n    <div class=\"page-selectCity page-selectSex\" transition=\"page\" >\n\n        <div class=\"content\">\n            <ul class=\"list\">\n\t\t\t\t<li @click=\"goScene(1)\">男</li>\n\t\t\t\t<li @click=\"goScene(2)\">女</li>\n            </ul>\n        </div>\n\n    </div>\n";

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(284)
	__vue_script__ = __webpack_require__(286)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/common/selectSort.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(287)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zhujianxin/Documents/vue/vue-demo-webpack/src/views/common/selectSort.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 284 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 285 */,
/* 286 */
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
	//     <div class="page-selectCity page-selectSort" transition="page" >
	//
	//         <div class="content">
	//             <ul class="list">
	//                 <li @click="goScene(1)">评价最高</li>
	//                 <li @click="goScene(2)">距离最近</li>
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
	            formData: {}
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
	        goScene: function goScene(sort) {
	            var self = this;
	            self.formData.sort = sort;
	            self.$route.router.go({ 'name': 'scene', query: self.formData });
	        }
	    }
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 287 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"page-selectCity page-selectSort\" transition=\"page\" >\n\n    <div class=\"content\">\n        <ul class=\"list\">\n            <li @click=\"goScene(1)\">评价最高</li>\n            <li @click=\"goScene(2)\">距离最近</li>\n        </ul>\n    </div>\n\n</div>\n";

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(289)
	__vue_script__ = __webpack_require__(313)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/App.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(319)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zhujianxin/Documents/vue/vue-demo-webpack/src/App.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 289 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */
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
	        'vnFooter': __webpack_require__(314),
	        'vnHeader': __webpack_require__(61)
	    }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(315)
	__vue_script__ = __webpack_require__(317)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/footer.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(318)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zhujianxin/Documents/vue/vue-demo-webpack/src/components/footer.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 315 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 316 */,
/* 317 */
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
/* 318 */
/***/ function(module, exports) {

	module.exports = "\n<nav class=\"bar bar-tab\">\n    <a class=\"tab-item\" external v-link=\"{ name: 'home', activeClass: 'active'}\">\n        <span class=\"icon icon-home\"></span>\n        <span class=\"tab-label\">首页</span>\n    </a>\n    <a class=\"tab-item\" external  v-link=\"{ name: 'msg', activeClass: 'active' }\">\n        <span class=\"icon icon-message\"></span>\n        <span class=\"tab-label\">消息</span>\n    </a>\n    <a class=\"tab-item\" external v-link=\"{ name: 'user', activeClass: 'active' }\">\n        <span class=\"icon icon-me\"></span>\n        <span class=\"tab-label\">我的{{currentView}}</span>\n    </a>\n</nav>\n";

/***/ },
/* 319 */
/***/ function(module, exports) {

	module.exports = "\n\n<router-view keep-alive></router-view>\n<vn-footer v-if=\"isShowTab\"></vn-footer>\n\n";

/***/ },
/* 320 */
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