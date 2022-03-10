/**
 * Swiper 4.5.0
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2019 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: February 22, 2019
 */
! function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Swiper = t()
}(this, function() {
  "use strict";
  var f = "undefined" == typeof document ? {
      body: {},
      addEventListener: function() {},
      removeEventListener: function() {},
      activeElement: {
        blur: function() {},
        nodeName: ""
      },
      querySelector: function() {
        return null
      },
      querySelectorAll: function() {
        return []
      },
      getElementById: function() {
        return null
      },
      createEvent: function() {
        return {
          initEvent: function() {}
        }
      },
      createElement: function() {
        return {
          children: [],
          childNodes: [],
          style: {},
          setAttribute: function() {},
          getElementsByTagName: function() {
            return []
          }
        }
      },
      location: {
        hash: ""
      }
    } : document,
    J = "undefined" == typeof window ? {
      document: f,
      navigator: {
        userAgent: ""
      },
      location: {},
      history: {},
      CustomEvent: function() {
        return this
      },
      addEventListener: function() {},
      removeEventListener: function() {},
      getComputedStyle: function() {
        return {
          getPropertyValue: function() {
            return ""
          }
        }
      },
      Image: function() {},
      Date: function() {},
      screen: {},
      setTimeout: function() {},
      clearTimeout: function() {}
    } : window,
    l = function(e) {
      for (var t = 0; t < e.length; t += 1) this[t] = e[t];
      return this.length = e.length, this
    };

  function L(e, t) {
    var a = [],
      i = 0;
    if (e && !t && e instanceof l) return e;
    if (e)
      if ("string" == typeof e) {
        var s, r, n = e.trim();
        if (0 <= n.indexOf("<") && 0 <= n.indexOf(">")) {
          var o = "div";
          for (0 === n.indexOf("<li") && (o = "ul"), 0 === n.indexOf("<tr") && (o = "tbody"), 0 !== n.indexOf("<td") && 0 !== n.indexOf("<th") || (o = "tr"), 0 === n.indexOf("<tbody") && (o = "table"), 0 === n.indexOf("<option") && (o = "select"), (r = f.createElement(o)).innerHTML = n, i = 0; i < r.childNodes.length; i += 1) a.push(r.childNodes[i])
        } else
          for (s = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || f).querySelectorAll(e.trim()) : [f.getElementById(e.trim().split("#")[1])], i = 0; i < s.length; i += 1) s[i] && a.push(s[i])
      } else if (e.nodeType || e === J || e === f) a.push(e);
    else if (0 < e.length && e[0].nodeType)
      for (i = 0; i < e.length; i += 1) a.push(e[i]);
    return new l(a)
  }

  function r(e) {
    for (var t = [], a = 0; a < e.length; a += 1) - 1 === t.indexOf(e[a]) && t.push(e[a]);
    return t
  }
  L.fn = l.prototype, L.Class = l, L.Dom7 = l;
  var t = {
    addClass: function(e) {
      if (void 0 === e) return this;
      for (var t = e.split(" "), a = 0; a < t.length; a += 1)
        for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.add(t[a]);
      return this
    },
    removeClass: function(e) {
      for (var t = e.split(" "), a = 0; a < t.length; a += 1)
        for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.remove(t[a]);
      return this
    },
    hasClass: function(e) {
      return !!this[0] && this[0].classList.contains(e)
    },
    toggleClass: function(e) {
      for (var t = e.split(" "), a = 0; a < t.length; a += 1)
        for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.toggle(t[a]);
      return this
    },
    attr: function(e, t) {
      var a = arguments;
      if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
      for (var i = 0; i < this.length; i += 1)
        if (2 === a.length) this[i].setAttribute(e, t);
        else
          for (var s in e) this[i][s] = e[s], this[i].setAttribute(s, e[s]);
      return this
    },
    removeAttr: function(e) {
      for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
      return this
    },
    data: function(e, t) {
      var a;
      if (void 0 !== t) {
        for (var i = 0; i < this.length; i += 1)(a = this[i]).dom7ElementDataStorage || (a.dom7ElementDataStorage = {}), a.dom7ElementDataStorage[e] = t;
        return this
      }
      if (a = this[0]) {
        if (a.dom7ElementDataStorage && e in a.dom7ElementDataStorage) return a.dom7ElementDataStorage[e];
        var s = a.getAttribute("data-" + e);
        return s || void 0
      }
    },
    transform: function(e) {
      for (var t = 0; t < this.length; t += 1) {
        var a = this[t].style;
        a.webkitTransform = e, a.transform = e
      }
      return this
    },
    transition: function(e) {
      "string" != typeof e && (e += "ms");
      for (var t = 0; t < this.length; t += 1) {
        var a = this[t].style;
        a.webkitTransitionDuration = e, a.transitionDuration = e
      }
      return this
    },
    on: function() {
      for (var e, t = [], a = arguments.length; a--;) t[a] = arguments[a];
      var i = t[0],
        r = t[1],
        n = t[2],
        s = t[3];

      function o(e) {
        var t = e.target;
        if (t) {
          var a = e.target.dom7EventData || [];
          if (a.indexOf(e) < 0 && a.unshift(e), L(t).is(r)) n.apply(t, a);
          else
            for (var i = L(t).parents(), s = 0; s < i.length; s += 1) L(i[s]).is(r) && n.apply(i[s], a)
        }
      }

      function l(e) {
        var t = e && e.target && e.target.dom7EventData || [];
        t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t)
      }
      "function" == typeof t[1] && (i = (e = t)[0], n = e[1], s = e[2], r = void 0), s || (s = !1);
      for (var d, p = i.split(" "), c = 0; c < this.length; c += 1) {
        var u = this[c];
        if (r)
          for (d = 0; d < p.length; d += 1) {
            var h = p[d];
            u.dom7LiveListeners || (u.dom7LiveListeners = {}), u.dom7LiveListeners[h] || (u.dom7LiveListeners[h] = []), u.dom7LiveListeners[h].push({
              listener: n,
              proxyListener: o
            }), u.addEventListener(h, o, s)
          } else
            for (d = 0; d < p.length; d += 1) {
              var v = p[d];
              u.dom7Listeners || (u.dom7Listeners = {}), u.dom7Listeners[v] || (u.dom7Listeners[v] = []), u.dom7Listeners[v].push({
                listener: n,
                proxyListener: l
              }), u.addEventListener(v, l, s)
            }
      }
      return this
    },
    off: function() {
      for (var e, t = [], a = arguments.length; a--;) t[a] = arguments[a];
      var i = t[0],
        s = t[1],
        r = t[2],
        n = t[3];
      "function" == typeof t[1] && (i = (e = t)[0], r = e[1], n = e[2], s = void 0), n || (n = !1);
      for (var o = i.split(" "), l = 0; l < o.length; l += 1)
        for (var d = o[l], p = 0; p < this.length; p += 1) {
          var c = this[p],
            u = void 0;
          if (!s && c.dom7Listeners ? u = c.dom7Listeners[d] : s && c.dom7LiveListeners && (u = c.dom7LiveListeners[d]), u && u.length)
            for (var h = u.length - 1; 0 <= h; h -= 1) {
              var v = u[h];
              r && v.listener === r ? (c.removeEventListener(d, v.proxyListener, n), u.splice(h, 1)) : r && v.listener && v.listener.dom7proxy && v.listener.dom7proxy === r ? (c.removeEventListener(d, v.proxyListener, n), u.splice(h, 1)) : r || (c.removeEventListener(d, v.proxyListener, n), u.splice(h, 1))
            }
        }
      return this
    },
    trigger: function() {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      for (var a = e[0].split(" "), i = e[1], s = 0; s < a.length; s += 1)
        for (var r = a[s], n = 0; n < this.length; n += 1) {
          var o = this[n],
            l = void 0;
          try {
            l = new J.CustomEvent(r, {
              detail: i,
              bubbles: !0,
              cancelable: !0
            })
          } catch (e) {
            (l = f.createEvent("Event")).initEvent(r, !0, !0), l.detail = i
          }
          o.dom7EventData = e.filter(function(e, t) {
            return 0 < t
          }), o.dispatchEvent(l), o.dom7EventData = [], delete o.dom7EventData
        }
      return this
    },
    transitionEnd: function(t) {
      var a, i = ["webkitTransitionEnd", "transitionend"],
        s = this;

      function r(e) {
        if (e.target === this)
          for (t.call(this, e), a = 0; a < i.length; a += 1) s.off(i[a], r)
      }
      if (t)
        for (a = 0; a < i.length; a += 1) s.on(i[a], r);
      return this
    },
    outerWidth: function(e) {
      if (0 < this.length) {
        if (e) {
          var t = this.styles();
          return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
        }
        return this[0].offsetWidth
      }
      return null
    },
    outerHeight: function(e) {
      if (0 < this.length) {
        if (e) {
          var t = this.styles();
          return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
        }
        return this[0].offsetHeight
      }
      return null
    },
    offset: function() {
      if (0 < this.length) {
        var e = this[0],
          t = e.getBoundingClientRect(),
          a = f.body,
          i = e.clientTop || a.clientTop || 0,
          s = e.clientLeft || a.clientLeft || 0,
          r = e === J ? J.scrollY : e.scrollTop,
          n = e === J ? J.scrollX : e.scrollLeft;
        return {
          top: t.top + r - i,
          left: t.left + n - s
        }
      }
      return null
    },
    css: function(e, t) {
      var a;
      if (1 === arguments.length) {
        if ("string" != typeof e) {
          for (a = 0; a < this.length; a += 1)
            for (var i in e) this[a].style[i] = e[i];
          return this
        }
        if (this[0]) return J.getComputedStyle(this[0], null).getPropertyValue(e)
      }
      if (2 === arguments.length && "string" == typeof e) {
        for (a = 0; a < this.length; a += 1) this[a].style[e] = t;
        return this
      }
      return this
    },
    each: function(e) {
      if (!e) return this;
      for (var t = 0; t < this.length; t += 1)
        if (!1 === e.call(this[t], t, this[t])) return this;
      return this
    },
    html: function(e) {
      if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
      for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
      return this
    },
    text: function(e) {
      if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
      for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
      return this
    },
    is: function(e) {
      var t, a, i = this[0];
      if (!i || void 0 === e) return !1;
      if ("string" == typeof e) {
        if (i.matches) return i.matches(e);
        if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
        if (i.msMatchesSelector) return i.msMatchesSelector(e);
        for (t = L(e), a = 0; a < t.length; a += 1)
          if (t[a] === i) return !0;
        return !1
      }
      if (e === f) return i === f;
      if (e === J) return i === J;
      if (e.nodeType || e instanceof l) {
        for (t = e.nodeType ? [e] : e, a = 0; a < t.length; a += 1)
          if (t[a] === i) return !0;
        return !1
      }
      return !1
    },
    index: function() {
      var e, t = this[0];
      if (t) {
        for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
        return e
      }
    },
    eq: function(e) {
      if (void 0 === e) return this;
      var t, a = this.length;
      return new l(a - 1 < e ? [] : e < 0 ? (t = a + e) < 0 ? [] : [this[t]] : [this[e]])
    },
    append: function() {
      for (var e, t = [], a = arguments.length; a--;) t[a] = arguments[a];
      for (var i = 0; i < t.length; i += 1) {
        e = t[i];
        for (var s = 0; s < this.length; s += 1)
          if ("string" == typeof e) {
            var r = f.createElement("div");
            for (r.innerHTML = e; r.firstChild;) this[s].appendChild(r.firstChild)
          } else if (e instanceof l)
          for (var n = 0; n < e.length; n += 1) this[s].appendChild(e[n]);
        else this[s].appendChild(e)
      }
      return this
    },
    prepend: function(e) {
      var t, a;
      for (t = 0; t < this.length; t += 1)
        if ("string" == typeof e) {
          var i = f.createElement("div");
          for (i.innerHTML = e, a = i.childNodes.length - 1; 0 <= a; a -= 1) this[t].insertBefore(i.childNodes[a], this[t].childNodes[0])
        } else if (e instanceof l)
        for (a = 0; a < e.length; a += 1) this[t].insertBefore(e[a], this[t].childNodes[0]);
      else this[t].insertBefore(e, this[t].childNodes[0]);
      return this
    },
    next: function(e) {
      return 0 < this.length ? e ? this[0].nextElementSibling && L(this[0].nextElementSibling).is(e) ? new l([this[0].nextElementSibling]) : new l([]) : this[0].nextElementSibling ? new l([this[0].nextElementSibling]) : new l([]) : new l([])
    },
    nextAll: function(e) {
      var t = [],
        a = this[0];
      if (!a) return new l([]);
      for (; a.nextElementSibling;) {
        var i = a.nextElementSibling;
        e ? L(i).is(e) && t.push(i) : t.push(i), a = i
      }
      return new l(t)
    },
    prev: function(e) {
      if (0 < this.length) {
        var t = this[0];
        return e ? t.previousElementSibling && L(t.previousElementSibling).is(e) ? new l([t.previousElementSibling]) : new l([]) : t.previousElementSibling ? new l([t.previousElementSibling]) : new l([])
      }
      return new l([])
    },
    prevAll: function(e) {
      var t = [],
        a = this[0];
      if (!a) return new l([]);
      for (; a.previousElementSibling;) {
        var i = a.previousElementSibling;
        e ? L(i).is(e) && t.push(i) : t.push(i), a = i
      }
      return new l(t)
    },
    parent: function(e) {
      for (var t = [], a = 0; a < this.length; a += 1) null !== this[a].parentNode && (e ? L(this[a].parentNode).is(e) && t.push(this[a].parentNode) : t.push(this[a].parentNode));
      return L(r(t))
    },
    parents: function(e) {
      for (var t = [], a = 0; a < this.length; a += 1)
        for (var i = this[a].parentNode; i;) e ? L(i).is(e) && t.push(i) : t.push(i), i = i.parentNode;
      return L(r(t))
    },
    closest: function(e) {
      var t = this;
      return void 0 === e ? new l([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
    },
    find: function(e) {
      for (var t = [], a = 0; a < this.length; a += 1)
        for (var i = this[a].querySelectorAll(e), s = 0; s < i.length; s += 1) t.push(i[s]);
      return new l(t)
    },
    children: function(e) {
      for (var t = [], a = 0; a < this.length; a += 1)
        for (var i = this[a].childNodes, s = 0; s < i.length; s += 1) e ? 1 === i[s].nodeType && L(i[s]).is(e) && t.push(i[s]) : 1 === i[s].nodeType && t.push(i[s]);
      return new l(r(t))
    },
    remove: function() {
      for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
      return this
    },
    add: function() {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      var a, i;
      for (a = 0; a < e.length; a += 1) {
        var s = L(e[a]);
        for (i = 0; i < s.length; i += 1) this[this.length] = s[i], this.length += 1
      }
      return this
    },
    styles: function() {
      return this[0] ? J.getComputedStyle(this[0], null) : {}
    }
  };
  Object.keys(t).forEach(function(e) {
    L.fn[e] = t[e]
  });
  var e, a, i, s, ee = {
      deleteProps: function(e) {
        var t = e;
        Object.keys(t).forEach(function(e) {
          try {
            t[e] = null
          } catch (e) {}
          try {
            delete t[e]
          } catch (e) {}
        })
      },
      nextTick: function(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t)
      },
      now: function() {
        return Date.now()
      },
      getTranslate: function(e, t) {
        var a, i, s;
        void 0 === t && (t = "x");
        var r = J.getComputedStyle(e, null);
        return J.WebKitCSSMatrix ? (6 < (i = r.transform || r.webkitTransform).split(",").length && (i = i.split(", ").map(function(e) {
          return e.replace(",", ".")
        }).join(", ")), s = new J.WebKitCSSMatrix("none" === i ? "" : i)) : a = (s = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (i = J.WebKitCSSMatrix ? s.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = J.WebKitCSSMatrix ? s.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0
      },
      parseUrlQuery: function(e) {
        var t, a, i, s, r = {},
          n = e || J.location.href;
        if ("string" == typeof n && n.length)
          for (s = (a = (n = -1 < n.indexOf("?") ? n.replace(/\S*\?/, "") : "").split("&").filter(function(e) {
              return "" !== e
            })).length, t = 0; t < s; t += 1) i = a[t].replace(/#\S+/g, "").split("="), r[decodeURIComponent(i[0])] = void 0 === i[1] ? void 0 : decodeURIComponent(i[1]) || "";
        return r
      },
      isObject: function(e) {
        return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
      },
      extend: function() {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        for (var a = Object(e[0]), i = 1; i < e.length; i += 1) {
          var s = e[i];
          if (null != s)
            for (var r = Object.keys(Object(s)), n = 0, o = r.length; n < o; n += 1) {
              var l = r[n],
                d = Object.getOwnPropertyDescriptor(s, l);
              void 0 !== d && d.enumerable && (ee.isObject(a[l]) && ee.isObject(s[l]) ? ee.extend(a[l], s[l]) : !ee.isObject(a[l]) && ee.isObject(s[l]) ? (a[l] = {}, ee.extend(a[l], s[l])) : a[l] = s[l])
            }
        }
        return a
      }
    },
    te = (i = f.createElement("div"), {
      touch: J.Modernizr && !0 === J.Modernizr.touch || !!(0 < J.navigator.maxTouchPoints || "ontouchstart" in J || J.DocumentTouch && f instanceof J.DocumentTouch),
      pointerEvents: !!(J.navigator.pointerEnabled || J.PointerEvent || "maxTouchPoints" in J.navigator && 0 < J.navigator.maxTouchPoints),
      prefixedPointerEvents: !!J.navigator.msPointerEnabled,
      transition: (a = i.style, "transition" in a || "webkitTransition" in a || "MozTransition" in a),
      transforms3d: J.Modernizr && !0 === J.Modernizr.csstransforms3d || (e = i.style, "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e),
      flexbox: function() {
        for (var e = i.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), a = 0; a < t.length; a += 1)
          if (t[a] in e) return !0;
        return !1
      }(),
      observer: "MutationObserver" in J || "WebkitMutationObserver" in J,
      passiveListener: function() {
        var e = !1;
        try {
          var t = Object.defineProperty({}, "passive", {
            get: function() {
              e = !0
            }
          });
          J.addEventListener("testPassiveListener", null, t)
        } catch (e) {}
        return e
      }(),
      gestures: "ongesturestart" in J
    }),
    I = {
      isIE: !!J.navigator.userAgent.match(/Trident/g) || !!J.navigator.userAgent.match(/MSIE/g),
      isEdge: !!J.navigator.userAgent.match(/Edge/g),
      isSafari: (s = J.navigator.userAgent.toLowerCase(), 0 <= s.indexOf("safari") && s.indexOf("chrome") < 0 && s.indexOf("android") < 0),
      isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(J.navigator.userAgent)
    },
    n = function(e) {
      void 0 === e && (e = {});
      var t = this;
      t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function(e) {
        t.on(e, t.params.on[e])
      })
    },
    o = {
      components: {
        configurable: !0
      }
    };
  n.prototype.on = function(e, t, a) {
    var i = this;
    if ("function" != typeof t) return i;
    var s = a ? "unshift" : "push";
    return e.split(" ").forEach(function(e) {
      i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][s](t)
    }), i
  }, n.prototype.once = function(a, i, e) {
    var s = this;
    if ("function" != typeof i) return s;

    function r() {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      i.apply(s, e), s.off(a, r), r.f7proxy && delete r.f7proxy
    }
    return r.f7proxy = i, s.on(a, r, e)
  }, n.prototype.off = function(e, i) {
    var s = this;
    return s.eventsListeners && e.split(" ").forEach(function(a) {
      void 0 === i ? s.eventsListeners[a] = [] : s.eventsListeners[a] && s.eventsListeners[a].length && s.eventsListeners[a].forEach(function(e, t) {
        (e === i || e.f7proxy && e.f7proxy === i) && s.eventsListeners[a].splice(t, 1)
      })
    }), s
  }, n.prototype.emit = function() {
    for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
    var a, i, s, r = this;
    return r.eventsListeners && ("string" == typeof e[0] || Array.isArray(e[0]) ? (a = e[0], i = e.slice(1, e.length), s = r) : (a = e[0].events, i = e[0].data, s = e[0].context || r), (Array.isArray(a) ? a : a.split(" ")).forEach(function(e) {
      if (r.eventsListeners && r.eventsListeners[e]) {
        var t = [];
        r.eventsListeners[e].forEach(function(e) {
          t.push(e)
        }), t.forEach(function(e) {
          e.apply(s, i)
        })
      }
    })), r
  }, n.prototype.useModulesParams = function(a) {
    var i = this;
    i.modules && Object.keys(i.modules).forEach(function(e) {
      var t = i.modules[e];
      t.params && ee.extend(a, t.params)
    })
  }, n.prototype.useModules = function(i) {
    void 0 === i && (i = {});
    var s = this;
    s.modules && Object.keys(s.modules).forEach(function(e) {
      var a = s.modules[e],
        t = i[e] || {};
      a.instance && Object.keys(a.instance).forEach(function(e) {
        var t = a.instance[e];
        s[e] = "function" == typeof t ? t.bind(s) : t
      }), a.on && s.on && Object.keys(a.on).forEach(function(e) {
        s.on(e, a.on[e])
      }), a.create && a.create.bind(s)(t)
    })
  }, o.components.set = function(e) {
    this.use && this.use(e)
  }, n.installModule = function(t) {
    for (var e = [], a = arguments.length - 1; 0 < a--;) e[a] = arguments[a + 1];
    var i = this;
    i.prototype.modules || (i.prototype.modules = {});
    var s = t.name || Object.keys(i.prototype.modules).length + "_" + ee.now();
    return (i.prototype.modules[s] = t).proto && Object.keys(t.proto).forEach(function(e) {
      i.prototype[e] = t.proto[e]
    }), t.static && Object.keys(t.static).forEach(function(e) {
      i[e] = t.static[e]
    }), t.install && t.install.apply(i, e), i
  }, n.use = function(e) {
    for (var t = [], a = arguments.length - 1; 0 < a--;) t[a] = arguments[a + 1];
    var i = this;
    return Array.isArray(e) ? (e.forEach(function(e) {
      return i.installModule(e)
    }), i) : i.installModule.apply(i, [e].concat(t))
  }, Object.defineProperties(n, o);
  var d = {
    updateSize: function() {
      var e, t, a = this,
        i = a.$el;
      e = void 0 !== a.params.width ? a.params.width : i[0].clientWidth, t = void 0 !== a.params.height ? a.params.height : i[0].clientHeight, 0 === e && a.isHorizontal() || 0 === t && a.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), ee.extend(a, {
        width: e,
        height: t,
        size: a.isHorizontal() ? e : t
      }))
    },
    updateSlides: function() {
      var e = this,
        t = e.params,
        a = e.$wrapperEl,
        i = e.size,
        s = e.rtlTranslate,
        r = e.wrongRTL,
        n = e.virtual && t.virtual.enabled,
        o = n ? e.virtual.slides.length : e.slides.length,
        l = a.children("." + e.params.slideClass),
        d = n ? e.virtual.slides.length : l.length,
        p = [],
        c = [],
        u = [],
        h = t.slidesOffsetBefore;
      "function" == typeof h && (h = t.slidesOffsetBefore.call(e));
      var v = t.slidesOffsetAfter;
      "function" == typeof v && (v = t.slidesOffsetAfter.call(e));
      var f = e.snapGrid.length,
        m = e.snapGrid.length,
        g = t.spaceBetween,
        b = -h,
        w = 0,
        y = 0;
      if (void 0 !== i) {
        var x, T;
        "string" == typeof g && 0 <= g.indexOf("%") && (g = parseFloat(g.replace("%", "")) / 100 * i), e.virtualSize = -g, s ? l.css({
          marginLeft: "",
          marginTop: ""
        }) : l.css({
          marginRight: "",
          marginBottom: ""
        }), 1 < t.slidesPerColumn && (x = Math.floor(d / t.slidesPerColumn) === d / e.params.slidesPerColumn ? d : Math.ceil(d / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (x = Math.max(x, t.slidesPerView * t.slidesPerColumn)));
        for (var E, S = t.slidesPerColumn, C = x / S, M = Math.floor(d / t.slidesPerColumn), z = 0; z < d; z += 1) {
          T = 0;
          var P = l.eq(z);
          if (1 < t.slidesPerColumn) {
            var k = void 0,
              $ = void 0,
              L = void 0;
            "column" === t.slidesPerColumnFill ? (L = z - ($ = Math.floor(z / S)) * S, (M < $ || $ === M && L === S - 1) && S <= (L += 1) && (L = 0, $ += 1), k = $ + L * x / S, P.css({
              "-webkit-box-ordinal-group": k,
              "-moz-box-ordinal-group": k,
              "-ms-flex-order": k,
              "-webkit-order": k,
              order: k
            })) : $ = z - (L = Math.floor(z / C)) * C, P.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== L && t.spaceBetween && t.spaceBetween + "px").attr("data-swiper-column", $).attr("data-swiper-row", L)
          }
          if ("none" !== P.css("display")) {
            if ("auto" === t.slidesPerView) {
              var I = J.getComputedStyle(P[0], null),
                D = P[0].style.transform,
                O = P[0].style.webkitTransform;
              if (D && (P[0].style.transform = "none"), O && (P[0].style.webkitTransform = "none"), t.roundLengths) T = e.isHorizontal() ? P.outerWidth(!0) : P.outerHeight(!0);
              else if (e.isHorizontal()) {
                var A = parseFloat(I.getPropertyValue("width")),
                  H = parseFloat(I.getPropertyValue("padding-left")),
                  N = parseFloat(I.getPropertyValue("padding-right")),
                  G = parseFloat(I.getPropertyValue("margin-left")),
                  B = parseFloat(I.getPropertyValue("margin-right")),
                  X = I.getPropertyValue("box-sizing");
                T = X && "border-box" === X ? A + G + B : A + H + N + G + B
              } else {
                var Y = parseFloat(I.getPropertyValue("height")),
                  V = parseFloat(I.getPropertyValue("padding-top")),
                  F = parseFloat(I.getPropertyValue("padding-bottom")),
                  R = parseFloat(I.getPropertyValue("margin-top")),
                  q = parseFloat(I.getPropertyValue("margin-bottom")),
                  W = I.getPropertyValue("box-sizing");
                T = W && "border-box" === W ? Y + R + q : Y + V + F + R + q
              }
              D && (P[0].style.transform = D), O && (P[0].style.webkitTransform = O), t.roundLengths && (T = Math.floor(T))
            } else T = (i - (t.slidesPerView - 1) * g) / t.slidesPerView, t.roundLengths && (T = Math.floor(T)), l[z] && (e.isHorizontal() ? l[z].style.width = T + "px" : l[z].style.height = T + "px");
            l[z] && (l[z].swiperSlideSize = T), u.push(T), t.centeredSlides ? (b = b + T / 2 + w / 2 + g, 0 === w && 0 !== z && (b = b - i / 2 - g), 0 === z && (b = b - i / 2 - g), Math.abs(b) < .001 && (b = 0), t.roundLengths && (b = Math.floor(b)), y % t.slidesPerGroup == 0 && p.push(b), c.push(b)) : (t.roundLengths && (b = Math.floor(b)), y % t.slidesPerGroup == 0 && p.push(b), c.push(b), b = b + T + g), e.virtualSize += T + g, w = T, y += 1
          }
        }
        if (e.virtualSize = Math.max(e.virtualSize, i) + v, s && r && ("slide" === t.effect || "coverflow" === t.effect) && a.css({
            width: e.virtualSize + t.spaceBetween + "px"
          }), te.flexbox && !t.setWrapperSize || (e.isHorizontal() ? a.css({
            width: e.virtualSize + t.spaceBetween + "px"
          }) : a.css({
            height: e.virtualSize + t.spaceBetween + "px"
          })), 1 < t.slidesPerColumn && (e.virtualSize = (T + t.spaceBetween) * x, e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween, e.isHorizontal() ? a.css({
            width: e.virtualSize + t.spaceBetween + "px"
          }) : a.css({
            height: e.virtualSize + t.spaceBetween + "px"
          }), t.centeredSlides)) {
          E = [];
          for (var j = 0; j < p.length; j += 1) {
            var U = p[j];
            t.roundLengths && (U = Math.floor(U)), p[j] < e.virtualSize + p[0] && E.push(U)
          }
          p = E
        }
        if (!t.centeredSlides) {
          E = [];
          for (var K = 0; K < p.length; K += 1) {
            var _ = p[K];
            t.roundLengths && (_ = Math.floor(_)), p[K] <= e.virtualSize - i && E.push(_)
          }
          p = E, 1 < Math.floor(e.virtualSize - i) - Math.floor(p[p.length - 1]) && p.push(e.virtualSize - i)
        }
        if (0 === p.length && (p = [0]), 0 !== t.spaceBetween && (e.isHorizontal() ? s ? l.css({
            marginLeft: g + "px"
          }) : l.css({
            marginRight: g + "px"
          }) : l.css({
            marginBottom: g + "px"
          })), t.centerInsufficientSlides) {
          var Z = 0;
          if (u.forEach(function(e) {
              Z += e + (t.spaceBetween ? t.spaceBetween : 0)
            }), (Z -= t.spaceBetween) < i) {
            var Q = (i - Z) / 2;
            p.forEach(function(e, t) {
              p[t] = e - Q
            }), c.forEach(function(e, t) {
              c[t] = e + Q
            })
          }
        }
        ee.extend(e, {
          slides: l,
          snapGrid: p,
          slidesGrid: c,
          slidesSizesGrid: u
        }), d !== o && e.emit("slidesLengthChange"), p.length !== f && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), c.length !== m && e.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset()
      }
    },
    updateAutoHeight: function(e) {
      var t, a = this,
        i = [],
        s = 0;
      if ("number" == typeof e ? a.setTransition(e) : !0 === e && a.setTransition(a.params.speed), "auto" !== a.params.slidesPerView && 1 < a.params.slidesPerView)
        for (t = 0; t < Math.ceil(a.params.slidesPerView); t += 1) {
          var r = a.activeIndex + t;
          if (r > a.slides.length) break;
          i.push(a.slides.eq(r)[0])
        } else i.push(a.slides.eq(a.activeIndex)[0]);
      for (t = 0; t < i.length; t += 1)
        if (void 0 !== i[t]) {
          var n = i[t].offsetHeight;
          s = s < n ? n : s
        } s && a.$wrapperEl.css("height", s + "px")
    },
    updateSlidesOffset: function() {
      for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
    },
    updateSlidesProgress: function(e) {
      void 0 === e && (e = this && this.translate || 0);
      var t = this,
        a = t.params,
        i = t.slides,
        s = t.rtlTranslate;
      if (0 !== i.length) {
        void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
        var r = -e;
        s && (r = e), i.removeClass(a.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
        for (var n = 0; n < i.length; n += 1) {
          var o = i[n],
            l = (r + (a.centeredSlides ? t.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + a.spaceBetween);
          if (a.watchSlidesVisibility) {
            var d = -(r - o.swiperSlideOffset),
              p = d + t.slidesSizesGrid[n];
            (0 <= d && d < t.size || 0 < p && p <= t.size || d <= 0 && p >= t.size) && (t.visibleSlides.push(o), t.visibleSlidesIndexes.push(n), i.eq(n).addClass(a.slideVisibleClass))
          }
          o.progress = s ? -l : l
        }
        t.visibleSlides = L(t.visibleSlides)
      }
    },
    updateProgress: function(e) {
      void 0 === e && (e = this && this.translate || 0);
      var t = this,
        a = t.params,
        i = t.maxTranslate() - t.minTranslate(),
        s = t.progress,
        r = t.isBeginning,
        n = t.isEnd,
        o = r,
        l = n;
      0 === i ? n = r = !(s = 0) : (r = (s = (e - t.minTranslate()) / i) <= 0, n = 1 <= s), ee.extend(t, {
        progress: s,
        isBeginning: r,
        isEnd: n
      }), (a.watchSlidesProgress || a.watchSlidesVisibility) && t.updateSlidesProgress(e), r && !o && t.emit("reachBeginning toEdge"), n && !l && t.emit("reachEnd toEdge"), (o && !r || l && !n) && t.emit("fromEdge"), t.emit("progress", s)
    },
    updateSlidesClasses: function() {
      var e, t = this,
        a = t.slides,
        i = t.params,
        s = t.$wrapperEl,
        r = t.activeIndex,
        n = t.realIndex,
        o = t.virtual && i.virtual.enabled;
      a.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = o ? t.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + r + '"]') : a.eq(r)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass));
      var l = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
      i.loop && 0 === l.length && (l = a.eq(0)).addClass(i.slideNextClass);
      var d = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
      i.loop && 0 === d.length && (d = a.eq(-1)).addClass(i.slidePrevClass), i.loop && (l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), d.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass))
    },
    updateActiveIndex: function(e) {
      var t, a = this,
        i = a.rtlTranslate ? a.translate : -a.translate,
        s = a.slidesGrid,
        r = a.snapGrid,
        n = a.params,
        o = a.activeIndex,
        l = a.realIndex,
        d = a.snapIndex,
        p = e;
      if (void 0 === p) {
        for (var c = 0; c < s.length; c += 1) void 0 !== s[c + 1] ? i >= s[c] && i < s[c + 1] - (s[c + 1] - s[c]) / 2 ? p = c : i >= s[c] && i < s[c + 1] && (p = c + 1) : i >= s[c] && (p = c);
        n.normalizeSlideIndex && (p < 0 || void 0 === p) && (p = 0)
      }
      if ((t = 0 <= r.indexOf(i) ? r.indexOf(i) : Math.floor(p / n.slidesPerGroup)) >= r.length && (t = r.length - 1), p !== o) {
        var u = parseInt(a.slides.eq(p).attr("data-swiper-slide-index") || p, 10);
        ee.extend(a, {
          snapIndex: t,
          realIndex: u,
          previousIndex: o,
          activeIndex: p
        }), a.emit("activeIndexChange"), a.emit("snapIndexChange"), l !== u && a.emit("realIndexChange"), a.emit("slideChange")
      } else t !== d && (a.snapIndex = t, a.emit("snapIndexChange"))
    },
    updateClickedSlide: function(e) {
      var t = this,
        a = t.params,
        i = L(e.target).closest("." + a.slideClass)[0],
        s = !1;
      if (i)
        for (var r = 0; r < t.slides.length; r += 1) t.slides[r] === i && (s = !0);
      if (!i || !s) return t.clickedSlide = void 0, void(t.clickedIndex = void 0);
      t.clickedSlide = i, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(L(i).attr("data-swiper-slide-index"), 10) : t.clickedIndex = L(i).index(), a.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
    }
  };
  var p = {
    getTranslate: function(e) {
      void 0 === e && (e = this.isHorizontal() ? "x" : "y");
      var t = this.params,
        a = this.rtlTranslate,
        i = this.translate,
        s = this.$wrapperEl;
      if (t.virtualTranslate) return a ? -i : i;
      var r = ee.getTranslate(s[0], e);
      return a && (r = -r), r || 0
    },
    setTranslate: function(e, t) {
      var a = this,
        i = a.rtlTranslate,
        s = a.params,
        r = a.$wrapperEl,
        n = a.progress,
        o = 0,
        l = 0;
      a.isHorizontal() ? o = i ? -e : e : l = e, s.roundLengths && (o = Math.floor(o), l = Math.floor(l)), s.virtualTranslate || (te.transforms3d ? r.transform("translate3d(" + o + "px, " + l + "px, 0px)") : r.transform("translate(" + o + "px, " + l + "px)")), a.previousTranslate = a.translate, a.translate = a.isHorizontal() ? o : l;
      var d = a.maxTranslate() - a.minTranslate();
      (0 === d ? 0 : (e - a.minTranslate()) / d) !== n && a.updateProgress(e), a.emit("setTranslate", a.translate, t)
    },
    minTranslate: function() {
      return -this.snapGrid[0]
    },
    maxTranslate: function() {
      return -this.snapGrid[this.snapGrid.length - 1]
    }
  };
  var c = {
    setTransition: function(e, t) {
      this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
    },
    transitionStart: function(e, t) {
      void 0 === e && (e = !0);
      var a = this,
        i = a.activeIndex,
        s = a.params,
        r = a.previousIndex;
      s.autoHeight && a.updateAutoHeight();
      var n = t;
      if (n || (n = r < i ? "next" : i < r ? "prev" : "reset"), a.emit("transitionStart"), e && i !== r) {
        if ("reset" === n) return void a.emit("slideResetTransitionStart");
        a.emit("slideChangeTransitionStart"), "next" === n ? a.emit("slideNextTransitionStart") : a.emit("slidePrevTransitionStart")
      }
    },
    transitionEnd: function(e, t) {
      void 0 === e && (e = !0);
      var a = this,
        i = a.activeIndex,
        s = a.previousIndex;
      a.animating = !1, a.setTransition(0);
      var r = t;
      if (r || (r = s < i ? "next" : i < s ? "prev" : "reset"), a.emit("transitionEnd"), e && i !== s) {
        if ("reset" === r) return void a.emit("slideResetTransitionEnd");
        a.emit("slideChangeTransitionEnd"), "next" === r ? a.emit("slideNextTransitionEnd") : a.emit("slidePrevTransitionEnd")
      }
    }
  };
  var u = {
    slideTo: function(e, t, a, i) {
      void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0);
      var s = this,
        r = e;
      r < 0 && (r = 0);
      var n = s.params,
        o = s.snapGrid,
        l = s.slidesGrid,
        d = s.previousIndex,
        p = s.activeIndex,
        c = s.rtlTranslate;
      if (s.animating && n.preventInteractionOnTransition) return !1;
      var u = Math.floor(r / n.slidesPerGroup);
      u >= o.length && (u = o.length - 1), (p || n.initialSlide || 0) === (d || 0) && a && s.emit("beforeSlideChangeStart");
      var h, v = -o[u];
      if (s.updateProgress(v), n.normalizeSlideIndex)
        for (var f = 0; f < l.length; f += 1) - Math.floor(100 * v) >= Math.floor(100 * l[f]) && (r = f);
      if (s.initialized && r !== p) {
        if (!s.allowSlideNext && v < s.translate && v < s.minTranslate()) return !1;
        if (!s.allowSlidePrev && v > s.translate && v > s.maxTranslate() && (p || 0) !== r) return !1
      }
      return h = p < r ? "next" : r < p ? "prev" : "reset", c && -v === s.translate || !c && v === s.translate ? (s.updateActiveIndex(r), n.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== n.effect && s.setTranslate(v), "reset" !== h && (s.transitionStart(a, h), s.transitionEnd(a, h)), !1) : (0 !== t && te.transition ? (s.setTransition(t), s.setTranslate(v), s.updateActiveIndex(r), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, i), s.transitionStart(a, h), s.animating || (s.animating = !0, s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function(e) {
        s && !s.destroyed && e.target === this && (s.$wrapperEl[0].removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd), s.onSlideToWrapperTransitionEnd = null, delete s.onSlideToWrapperTransitionEnd, s.transitionEnd(a, h))
      }), s.$wrapperEl[0].addEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd))) : (s.setTransition(0), s.setTranslate(v), s.updateActiveIndex(r), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, i), s.transitionStart(a, h), s.transitionEnd(a, h)), !0)
    },
    slideToLoop: function(e, t, a, i) {
      void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0);
      var s = e;
      return this.params.loop && (s += this.loopedSlides), this.slideTo(s, t, a, i)
    },
    slideNext: function(e, t, a) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      var i = this,
        s = i.params,
        r = i.animating;
      return s.loop ? !r && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a)) : i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a)
    },
    slidePrev: function(e, t, a) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      var i = this,
        s = i.params,
        r = i.animating,
        n = i.snapGrid,
        o = i.slidesGrid,
        l = i.rtlTranslate;
      if (s.loop) {
        if (r) return !1;
        i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
      }

      function d(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
      }
      var p, c = d(l ? i.translate : -i.translate),
        u = n.map(function(e) {
          return d(e)
        }),
        h = (o.map(function(e) {
          return d(e)
        }), n[u.indexOf(c)], n[u.indexOf(c) - 1]);
      return void 0 !== h && (p = o.indexOf(h)) < 0 && (p = i.activeIndex - 1), i.slideTo(p, e, t, a)
    },
    slideReset: function(e, t, a) {
      return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, a)
    },
    slideToClosest: function(e, t, a) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      var i = this,
        s = i.activeIndex,
        r = Math.floor(s / i.params.slidesPerGroup);
      if (r < i.snapGrid.length - 1) {
        var n = i.rtlTranslate ? i.translate : -i.translate,
          o = i.snapGrid[r];
        (i.snapGrid[r + 1] - o) / 2 < n - o && (s = i.params.slidesPerGroup)
      }
      return i.slideTo(s, e, t, a)
    },
    slideToClickedSlide: function() {
      var e, t = this,
        a = t.params,
        i = t.$wrapperEl,
        s = "auto" === a.slidesPerView ? t.slidesPerViewDynamic() : a.slidesPerView,
        r = t.clickedIndex;
      if (a.loop) {
        if (t.animating) return;
        e = parseInt(L(t.clickedSlide).attr("data-swiper-slide-index"), 10), a.centeredSlides ? r < t.loopedSlides - s / 2 || r > t.slides.length - t.loopedSlides + s / 2 ? (t.loopFix(), r = i.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(), ee.nextTick(function() {
          t.slideTo(r)
        })) : t.slideTo(r) : r > t.slides.length - s ? (t.loopFix(), r = i.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(), ee.nextTick(function() {
          t.slideTo(r)
        })) : t.slideTo(r)
      } else t.slideTo(r)
    }
  };
  var h = {
    loopCreate: function() {
      var i = this,
        e = i.params,
        t = i.$wrapperEl;
      t.children("." + e.slideClass + "." + e.slideDuplicateClass).remove();
      var s = t.children("." + e.slideClass);
      if (e.loopFillGroupWithBlank) {
        var a = e.slidesPerGroup - s.length % e.slidesPerGroup;
        if (a !== e.slidesPerGroup) {
          for (var r = 0; r < a; r += 1) {
            var n = L(f.createElement("div")).addClass(e.slideClass + " " + e.slideBlankClass);
            t.append(n)
          }
          s = t.children("." + e.slideClass)
        }
      }
      "auto" !== e.slidesPerView || e.loopedSlides || (e.loopedSlides = s.length), i.loopedSlides = parseInt(e.loopedSlides || e.slidesPerView, 10), i.loopedSlides += e.loopAdditionalSlides, i.loopedSlides > s.length && (i.loopedSlides = s.length);
      var o = [],
        l = [];
      s.each(function(e, t) {
        var a = L(t);
        e < i.loopedSlides && l.push(t), e < s.length && e >= s.length - i.loopedSlides && o.push(t), a.attr("data-swiper-slide-index", e)
      });
      for (var d = 0; d < l.length; d += 1) t.append(L(l[d].cloneNode(!0)).addClass(e.slideDuplicateClass));
      for (var p = o.length - 1; 0 <= p; p -= 1) t.prepend(L(o[p].cloneNode(!0)).addClass(e.slideDuplicateClass))
    },
    loopFix: function() {
      var e, t = this,
        a = t.params,
        i = t.activeIndex,
        s = t.slides,
        r = t.loopedSlides,
        n = t.allowSlidePrev,
        o = t.allowSlideNext,
        l = t.snapGrid,
        d = t.rtlTranslate;
      t.allowSlidePrev = !0, t.allowSlideNext = !0;
      var p = -l[i] - t.getTranslate();
      i < r ? (e = s.length - 3 * r + i, e += r, t.slideTo(e, 0, !1, !0) && 0 !== p && t.setTranslate((d ? -t.translate : t.translate) - p)) : ("auto" === a.slidesPerView && 2 * r <= i || i >= s.length - r) && (e = -s.length + i + r, e += r, t.slideTo(e, 0, !1, !0) && 0 !== p && t.setTranslate((d ? -t.translate : t.translate) - p));
      t.allowSlidePrev = n, t.allowSlideNext = o
    },
    loopDestroy: function() {
      var e = this.$wrapperEl,
        t = this.params,
        a = this.slides;
      e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(), a.removeAttr("data-swiper-slide-index")
    }
  };
  var v = {
    setGrabCursor: function(e) {
      if (!(te.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked)) {
        var t = this.el;
        t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab"
      }
    },
    unsetGrabCursor: function() {
      te.touch || this.params.watchOverflow && this.isLocked || (this.el.style.cursor = "")
    }
  };
  var m = {
      appendSlide: function(e) {
        var t = this,
          a = t.$wrapperEl,
          i = t.params;
        if (i.loop && t.loopDestroy(), "object" == typeof e && "length" in e)
          for (var s = 0; s < e.length; s += 1) e[s] && a.append(e[s]);
        else a.append(e);
        i.loop && t.loopCreate(), i.observer && te.observer || t.update()
      },
      prependSlide: function(e) {
        var t = this,
          a = t.params,
          i = t.$wrapperEl,
          s = t.activeIndex;
        a.loop && t.loopDestroy();
        var r = s + 1;
        if ("object" == typeof e && "length" in e) {
          for (var n = 0; n < e.length; n += 1) e[n] && i.prepend(e[n]);
          r = s + e.length
        } else i.prepend(e);
        a.loop && t.loopCreate(), a.observer && te.observer || t.update(), t.slideTo(r, 0, !1)
      },
      addSlide: function(e, t) {
        var a = this,
          i = a.$wrapperEl,
          s = a.params,
          r = a.activeIndex;
        s.loop && (r -= a.loopedSlides, a.loopDestroy(), a.slides = i.children("." + s.slideClass));
        var n = a.slides.length;
        if (e <= 0) a.prependSlide(t);
        else if (n <= e) a.appendSlide(t);
        else {
          for (var o = e < r ? r + 1 : r, l = [], d = n - 1; e <= d; d -= 1) {
            var p = a.slides.eq(d);
            p.remove(), l.unshift(p)
          }
          if ("object" == typeof t && "length" in t) {
            for (var c = 0; c < t.length; c += 1) t[c] && i.append(t[c]);
            o = e < r ? r + t.length : r
          } else i.append(t);
          for (var u = 0; u < l.length; u += 1) i.append(l[u]);
          s.loop && a.loopCreate(), s.observer && te.observer || a.update(), s.loop ? a.slideTo(o + a.loopedSlides, 0, !1) : a.slideTo(o, 0, !1)
        }
      },
      removeSlide: function(e) {
        var t = this,
          a = t.params,
          i = t.$wrapperEl,
          s = t.activeIndex;
        a.loop && (s -= t.loopedSlides, t.loopDestroy(), t.slides = i.children("." + a.slideClass));
        var r, n = s;
        if ("object" == typeof e && "length" in e) {
          for (var o = 0; o < e.length; o += 1) r = e[o], t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1);
          n = Math.max(n, 0)
        } else r = e, t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1), n = Math.max(n, 0);
        a.loop && t.loopCreate(), a.observer && te.observer || t.update(), a.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1)
      },
      removeAllSlides: function() {
        for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
        this.removeSlide(e)
      }
    },
    g = function() {
      var e = J.navigator.userAgent,
        t = {
          ios: !1,
          android: !1,
          androidChrome: !1,
          desktop: !1,
          windows: !1,
          iphone: !1,
          ipod: !1,
          ipad: !1,
          cordova: J.cordova || J.phonegap,
          phonegap: J.cordova || J.phonegap
        },
        a = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
        i = e.match(/(Android);?[\s\/]+([\d.]+)?/),
        s = e.match(/(iPad).*OS\s([\d_]+)/),
        r = e.match(/(iPod)(.*OS\s([\d_]+))?/),
        n = !s && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
      if (a && (t.os = "windows", t.osVersion = a[2], t.windows = !0), i && !a && (t.os = "android", t.osVersion = i[2], t.android = !0, t.androidChrome = 0 <= e.toLowerCase().indexOf("chrome")), (s || n || r) && (t.os = "ios", t.ios = !0), n && !r && (t.osVersion = n[2].replace(/_/g, "."), t.iphone = !0), s && (t.osVersion = s[2].replace(/_/g, "."), t.ipad = !0), r && (t.osVersion = r[3] ? r[3].replace(/_/g, ".") : null, t.iphone = !0), t.ios && t.osVersion && 0 <= e.indexOf("Version/index.html") && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/index-2.html")[1].split(" ")[0]), t.desktop = !(t.os || t.android || t.webView), t.webView = (n || s || r) && e.match(/.*AppleWebKit(?!.*Safari)/i), t.os && "ios" === t.os) {
        var o = t.osVersion.split("."),
          l = f.querySelector('meta[name="viewport"]');
        t.minimalUi = !t.webView && (r || n) && (1 * o[0] == 7 ? 1 <= 1 * o[1] : 7 < 1 * o[0]) && l && 0 <= l.getAttribute("content").indexOf("minimal-ui")
      }
      return t.pixelRatio = J.devicePixelRatio || 1, t
    }();

  function b() {
    var e = this,
      t = e.params,
      a = e.el;
    if (!a || 0 !== a.offsetWidth) {
      t.breakpoints && e.setBreakpoint();
      var i = e.allowSlideNext,
        s = e.allowSlidePrev,
        r = e.snapGrid;
      if (e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), t.freeMode) {
        var n = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
        e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses(), t.autoHeight && e.updateAutoHeight()
      } else e.updateSlidesClasses(), ("auto" === t.slidesPerView || 1 < t.slidesPerView) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
      e.allowSlidePrev = s, e.allowSlideNext = i, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
    }
  }
  var w = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "container",
      initialSlide: 0,
      speed: 300,
      preventInteractionOnTransition: !1,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      freeMode: !1,
      freeModeMomentum: !0,
      freeModeMomentumRatio: 1,
      freeModeMomentumBounce: !0,
      freeModeMomentumBounceRatio: 1,
      freeModeMomentumVelocityRatio: 1,
      freeModeSticky: !1,
      freeModeMinimumVelocity: .02,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsInverse: !1,
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerColumnFill: "column",
      slidesPerGroup: 1,
      centeredSlides: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !1,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: .5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !0,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: .85,
      watchSlidesProgress: !1,
      watchSlidesVisibility: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      containerModifierClass: "swiper-container-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0
    },
    y = {
      update: d,
      translate: p,
      transition: c,
      slide: u,
      loop: h,
      grabCursor: v,
      manipulation: m,
      events: {
        attachEvents: function() {
          var e = this,
            t = e.params,
            a = e.touchEvents,
            i = e.el,
            s = e.wrapperEl;
          e.onTouchStart = function(e) {
            var t = this,
              a = t.touchEventsData,
              i = t.params,
              s = t.touches;
            if (!t.animating || !i.preventInteractionOnTransition) {
              var r = e;
              if (r.originalEvent && (r = r.originalEvent), a.isTouchEvent = "touchstart" === r.type, (a.isTouchEvent || !("which" in r) || 3 !== r.which) && !(!a.isTouchEvent && "button" in r && 0 < r.button || a.isTouched && a.isMoved))
                if (i.noSwiping && L(r.target).closest(i.noSwipingSelector ? i.noSwipingSelector : "." + i.noSwipingClass)[0]) t.allowClick = !0;
                else if (!i.swipeHandler || L(r).closest(i.swipeHandler)[0]) {
                s.currentX = "touchstart" === r.type ? r.targetTouches[0].pageX : r.pageX, s.currentY = "touchstart" === r.type ? r.targetTouches[0].pageY : r.pageY;
                var n = s.currentX,
                  o = s.currentY,
                  l = i.edgeSwipeDetection || i.iOSEdgeSwipeDetection,
                  d = i.edgeSwipeThreshold || i.iOSEdgeSwipeThreshold;
                if (!l || !(n <= d || n >= J.screen.width - d)) {
                  if (ee.extend(a, {
                      isTouched: !0,
                      isMoved: !1,
                      allowTouchCallbacks: !0,
                      isScrolling: void 0,
                      startMoving: void 0
                    }), s.startX = n, s.startY = o, a.touchStartTime = ee.now(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, 0 < i.threshold && (a.allowThresholdMove = !1), "touchstart" !== r.type) {
                    var p = !0;
                    L(r.target).is(a.formElements) && (p = !1), f.activeElement && L(f.activeElement).is(a.formElements) && f.activeElement !== r.target && f.activeElement.blur();
                    var c = p && t.allowTouchMove && i.touchStartPreventDefault;
                    (i.touchStartForcePreventDefault || c) && r.preventDefault()
                  }
                  t.emit("touchStart", r)
                }
              }
            }
          }.bind(e), e.onTouchMove = function(e) {
            var t = this,
              a = t.touchEventsData,
              i = t.params,
              s = t.touches,
              r = t.rtlTranslate,
              n = e;
            if (n.originalEvent && (n = n.originalEvent), a.isTouched) {
              if (!a.isTouchEvent || "mousemove" !== n.type) {
                var o = "touchmove" === n.type ? n.targetTouches[0].pageX : n.pageX,
                  l = "touchmove" === n.type ? n.targetTouches[0].pageY : n.pageY;
                if (n.preventedByNestedSwiper) return s.startX = o, void(s.startY = l);
                if (!t.allowTouchMove) return t.allowClick = !1, void(a.isTouched && (ee.extend(s, {
                  startX: o,
                  startY: l,
                  currentX: o,
                  currentY: l
                }), a.touchStartTime = ee.now()));
                if (a.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
                  if (t.isVertical()) {
                    if (l < s.startY && t.translate <= t.maxTranslate() || l > s.startY && t.translate >= t.minTranslate()) return a.isTouched = !1, void(a.isMoved = !1)
                  } else if (o < s.startX && t.translate <= t.maxTranslate() || o > s.startX && t.translate >= t.minTranslate()) return;
                if (a.isTouchEvent && f.activeElement && n.target === f.activeElement && L(n.target).is(a.formElements)) return a.isMoved = !0, void(t.allowClick = !1);
                if (a.allowTouchCallbacks && t.emit("touchMove", n), !(n.targetTouches && 1 < n.targetTouches.length)) {
                  s.currentX = o, s.currentY = l;
                  var d, p = s.currentX - s.startX,
                    c = s.currentY - s.startY;
                  if (!(t.params.threshold && Math.sqrt(Math.pow(p, 2) + Math.pow(c, 2)) < t.params.threshold))
                    if (void 0 === a.isScrolling && (t.isHorizontal() && s.currentY === s.startY || t.isVertical() && s.currentX === s.startX ? a.isScrolling = !1 : 25 <= p * p + c * c && (d = 180 * Math.atan2(Math.abs(c), Math.abs(p)) / Math.PI, a.isScrolling = t.isHorizontal() ? d > i.touchAngle : 90 - d > i.touchAngle)), a.isScrolling && t.emit("touchMoveOpposite", n), void 0 === a.startMoving && (s.currentX === s.startX && s.currentY === s.startY || (a.startMoving = !0)), a.isScrolling) a.isTouched = !1;
                    else if (a.startMoving) {
                    t.allowClick = !1, n.preventDefault(), i.touchMoveStopPropagation && !i.nested && n.stopPropagation(), a.isMoved || (i.loop && t.loopFix(), a.startTranslate = t.getTranslate(), t.setTransition(0), t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"), a.allowMomentumBounce = !1, !i.grabCursor || !0 !== t.allowSlideNext && !0 !== t.allowSlidePrev || t.setGrabCursor(!0), t.emit("sliderFirstMove", n)), t.emit("sliderMove", n), a.isMoved = !0;
                    var u = t.isHorizontal() ? p : c;
                    s.diff = u, u *= i.touchRatio, r && (u = -u), t.swipeDirection = 0 < u ? "prev" : "next", a.currentTranslate = u + a.startTranslate;
                    var h = !0,
                      v = i.resistanceRatio;
                    if (i.touchReleaseOnEdges && (v = 0), 0 < u && a.currentTranslate > t.minTranslate() ? (h = !1, i.resistance && (a.currentTranslate = t.minTranslate() - 1 + Math.pow(-t.minTranslate() + a.startTranslate + u, v))) : u < 0 && a.currentTranslate < t.maxTranslate() && (h = !1, i.resistance && (a.currentTranslate = t.maxTranslate() + 1 - Math.pow(t.maxTranslate() - a.startTranslate - u, v))), h && (n.preventedByNestedSwiper = !0), !t.allowSlideNext && "next" === t.swipeDirection && a.currentTranslate < a.startTranslate && (a.currentTranslate = a.startTranslate), !t.allowSlidePrev && "prev" === t.swipeDirection && a.currentTranslate > a.startTranslate && (a.currentTranslate = a.startTranslate), 0 < i.threshold) {
                      if (!(Math.abs(u) > i.threshold || a.allowThresholdMove)) return void(a.currentTranslate = a.startTranslate);
                      if (!a.allowThresholdMove) return a.allowThresholdMove = !0, s.startX = s.currentX, s.startY = s.currentY, a.currentTranslate = a.startTranslate, void(s.diff = t.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY)
                    }
                    i.followFinger && ((i.freeMode || i.watchSlidesProgress || i.watchSlidesVisibility) && (t.updateActiveIndex(), t.updateSlidesClasses()), i.freeMode && (0 === a.velocities.length && a.velocities.push({
                      position: s[t.isHorizontal() ? "startX" : "startY"],
                      time: a.touchStartTime
                    }), a.velocities.push({
                      position: s[t.isHorizontal() ? "currentX" : "currentY"],
                      time: ee.now()
                    })), t.updateProgress(a.currentTranslate), t.setTranslate(a.currentTranslate))
                  }
                }
              }
            } else a.startMoving && a.isScrolling && t.emit("touchMoveOpposite", n)
          }.bind(e), e.onTouchEnd = function(e) {
            var t = this,
              a = t.touchEventsData,
              i = t.params,
              s = t.touches,
              r = t.rtlTranslate,
              n = t.$wrapperEl,
              o = t.slidesGrid,
              l = t.snapGrid,
              d = e;
            if (d.originalEvent && (d = d.originalEvent), a.allowTouchCallbacks && t.emit("touchEnd", d), a.allowTouchCallbacks = !1, !a.isTouched) return a.isMoved && i.grabCursor && t.setGrabCursor(!1), a.isMoved = !1, void(a.startMoving = !1);
            i.grabCursor && a.isMoved && a.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
            var p, c = ee.now(),
              u = c - a.touchStartTime;
            if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap", d), u < 300 && 300 < c - a.lastClickTime && (a.clickTimeout && clearTimeout(a.clickTimeout), a.clickTimeout = ee.nextTick(function() {
                t && !t.destroyed && t.emit("click", d)
              }, 300)), u < 300 && c - a.lastClickTime < 300 && (a.clickTimeout && clearTimeout(a.clickTimeout), t.emit("doubleTap", d))), a.lastClickTime = ee.now(), ee.nextTick(function() {
                t.destroyed || (t.allowClick = !0)
              }), !a.isTouched || !a.isMoved || !t.swipeDirection || 0 === s.diff || a.currentTranslate === a.startTranslate) return a.isTouched = !1, a.isMoved = !1, void(a.startMoving = !1);
            if (a.isTouched = !1, a.isMoved = !1, a.startMoving = !1, p = i.followFinger ? r ? t.translate : -t.translate : -a.currentTranslate, i.freeMode) {
              if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
              if (p > -t.maxTranslate()) return void(t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
              if (i.freeModeMomentum) {
                if (1 < a.velocities.length) {
                  var h = a.velocities.pop(),
                    v = a.velocities.pop(),
                    f = h.position - v.position,
                    m = h.time - v.time;
                  t.velocity = f / m, t.velocity /= 2, Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0), (150 < m || 300 < ee.now() - h.time) && (t.velocity = 0)
                } else t.velocity = 0;
                t.velocity *= i.freeModeMomentumVelocityRatio, a.velocities.length = 0;
                var g = 1e3 * i.freeModeMomentumRatio,
                  b = t.velocity * g,
                  w = t.translate + b;
                r && (w = -w);
                var y, x, T = !1,
                  E = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
                if (w < t.maxTranslate()) i.freeModeMomentumBounce ? (w + t.maxTranslate() < -E && (w = t.maxTranslate() - E), y = t.maxTranslate(), T = !0, a.allowMomentumBounce = !0) : w = t.maxTranslate(), i.loop && i.centeredSlides && (x = !0);
                else if (w > t.minTranslate()) i.freeModeMomentumBounce ? (w - t.minTranslate() > E && (w = t.minTranslate() + E), y = t.minTranslate(), T = !0, a.allowMomentumBounce = !0) : w = t.minTranslate(), i.loop && i.centeredSlides && (x = !0);
                else if (i.freeModeSticky) {
                  for (var S, C = 0; C < l.length; C += 1)
                    if (l[C] > -w) {
                      S = C;
                      break
                    } w = -(w = Math.abs(l[S] - w) < Math.abs(l[S - 1] - w) || "next" === t.swipeDirection ? l[S] : l[S - 1])
                }
                if (x && t.once("transitionEnd", function() {
                    t.loopFix()
                  }), 0 !== t.velocity) g = r ? Math.abs((-w - t.translate) / t.velocity) : Math.abs((w - t.translate) / t.velocity);
                else if (i.freeModeSticky) return void t.slideToClosest();
                i.freeModeMomentumBounce && T ? (t.updateProgress(y), t.setTransition(g), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd(function() {
                  t && !t.destroyed && a.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(i.speed), t.setTranslate(y), n.transitionEnd(function() {
                    t && !t.destroyed && t.transitionEnd()
                  }))
                })) : t.velocity ? (t.updateProgress(w), t.setTransition(g), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd(function() {
                  t && !t.destroyed && t.transitionEnd()
                }))) : t.updateProgress(w), t.updateActiveIndex(), t.updateSlidesClasses()
              } else if (i.freeModeSticky) return void t.slideToClosest();
              (!i.freeModeMomentum || u >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
            } else {
              for (var M = 0, z = t.slidesSizesGrid[0], P = 0; P < o.length; P += i.slidesPerGroup) void 0 !== o[P + i.slidesPerGroup] ? p >= o[P] && p < o[P + i.slidesPerGroup] && (z = o[(M = P) + i.slidesPerGroup] - o[P]) : p >= o[P] && (M = P, z = o[o.length - 1] - o[o.length - 2]);
              var k = (p - o[M]) / z;
              if (u > i.longSwipesMs) {
                if (!i.longSwipes) return void t.slideTo(t.activeIndex);
                "next" === t.swipeDirection && (k >= i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M)), "prev" === t.swipeDirection && (k > 1 - i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M))
              } else {
                if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
                "next" === t.swipeDirection && t.slideTo(M + i.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(M)
              }
            }
          }.bind(e), e.onClick = function(e) {
            this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
          }.bind(e);
          var r = "container" === t.touchEventsTarget ? i : s,
            n = !!t.nested;
          if (te.touch || !te.pointerEvents && !te.prefixedPointerEvents) {
            if (te.touch) {
              var o = !("touchstart" !== a.start || !te.passiveListener || !t.passiveListeners) && {
                passive: !0,
                capture: !1
              };
              r.addEventListener(a.start, e.onTouchStart, o), r.addEventListener(a.move, e.onTouchMove, te.passiveListener ? {
                passive: !1,
                capture: n
              } : n), r.addEventListener(a.end, e.onTouchEnd, o)
            }(t.simulateTouch && !g.ios && !g.android || t.simulateTouch && !te.touch && g.ios) && (r.addEventListener("mousedown", e.onTouchStart, !1), f.addEventListener("mousemove", e.onTouchMove, n), f.addEventListener("mouseup", e.onTouchEnd, !1))
          } else r.addEventListener(a.start, e.onTouchStart, !1), f.addEventListener(a.move, e.onTouchMove, n), f.addEventListener(a.end, e.onTouchEnd, !1);
          (t.preventClicks || t.preventClicksPropagation) && r.addEventListener("click", e.onClick, !0), e.on(g.ios || g.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", b, !0)
        },
        detachEvents: function() {
          var e = this,
            t = e.params,
            a = e.touchEvents,
            i = e.el,
            s = e.wrapperEl,
            r = "container" === t.touchEventsTarget ? i : s,
            n = !!t.nested;
          if (te.touch || !te.pointerEvents && !te.prefixedPointerEvents) {
            if (te.touch) {
              var o = !("onTouchStart" !== a.start || !te.passiveListener || !t.passiveListeners) && {
                passive: !0,
                capture: !1
              };
              r.removeEventListener(a.start, e.onTouchStart, o), r.removeEventListener(a.move, e.onTouchMove, n), r.removeEventListener(a.end, e.onTouchEnd, o)
            }(t.simulateTouch && !g.ios && !g.android || t.simulateTouch && !te.touch && g.ios) && (r.removeEventListener("mousedown", e.onTouchStart, !1), f.removeEventListener("mousemove", e.onTouchMove, n), f.removeEventListener("mouseup", e.onTouchEnd, !1))
          } else r.removeEventListener(a.start, e.onTouchStart, !1), f.removeEventListener(a.move, e.onTouchMove, n), f.removeEventListener(a.end, e.onTouchEnd, !1);
          (t.preventClicks || t.preventClicksPropagation) && r.removeEventListener("click", e.onClick, !0), e.off(g.ios || g.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", b)
        }
      },
      breakpoints: {
        setBreakpoint: function() {
          var e = this,
            t = e.activeIndex,
            a = e.initialized,
            i = e.loopedSlides;
          void 0 === i && (i = 0);
          var s = e.params,
            r = s.breakpoints;
          if (r && (!r || 0 !== Object.keys(r).length)) {
            var n = e.getBreakpoint(r);
            if (n && e.currentBreakpoint !== n) {
              var o = n in r ? r[n] : void 0;
              o && ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach(function(e) {
                var t = o[e];
                void 0 !== t && (o[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
              });
              var l = o || e.originalParams,
                d = l.direction && l.direction !== s.direction,
                p = s.loop && (l.slidesPerView !== s.slidesPerView || d);
              d && a && e.changeDirection(), ee.extend(e.params, l), ee.extend(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev
              }), e.currentBreakpoint = n, p && a && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - i + e.loopedSlides, 0, !1)), e.emit("breakpoint", l)
            }
          }
        },
        getBreakpoint: function(e) {
          if (e) {
            var t = !1,
              a = [];
            Object.keys(e).forEach(function(e) {
              a.push(e)
            }), a.sort(function(e, t) {
              return parseInt(e, 10) - parseInt(t, 10)
            });
            for (var i = 0; i < a.length; i += 1) {
              var s = a[i];
              this.params.breakpointsInverse ? s <= J.innerWidth && (t = s) : s >= J.innerWidth && !t && (t = s)
            }
            return t || "max"
          }
        }
      },
      checkOverflow: {
        checkOverflow: function() {
          var e = this,
            t = e.isLocked;
          e.isLocked = 1 === e.snapGrid.length, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), t && t !== e.isLocked && (e.isEnd = !1, e.navigation.update())
        }
      },
      classes: {
        addClasses: function() {
          var t = this.classNames,
            a = this.params,
            e = this.rtl,
            i = this.$el,
            s = [];
          s.push("initialized"), s.push(a.direction), a.freeMode && s.push("free-mode"), te.flexbox || s.push("no-flexbox"), a.autoHeight && s.push("autoheight"), e && s.push("rtl"), 1 < a.slidesPerColumn && s.push("multirow"), g.android && s.push("android"), g.ios && s.push("ios"), (I.isIE || I.isEdge) && (te.pointerEvents || te.prefixedPointerEvents) && s.push("wp8-" + a.direction), s.forEach(function(e) {
            t.push(a.containerModifierClass + e)
          }), i.addClass(t.join(" "))
        },
        removeClasses: function() {
          var e = this.$el,
            t = this.classNames;
          e.removeClass(t.join(" "))
        }
      },
      images: {
        loadImage: function(e, t, a, i, s, r) {
          var n;

          function o() {
            r && r()
          }
          e.complete && s ? o() : t ? ((n = new J.Image).onload = o, n.onerror = o, i && (n.sizes = i), a && (n.srcset = a), t && (n.src = t)) : o()
        },
        preloadImages: function() {
          var e = this;

          function t() {
            null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
          }
          e.imagesToLoad = e.$el.find("img");
          for (var a = 0; a < e.imagesToLoad.length; a += 1) {
            var i = e.imagesToLoad[a];
            e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t)
          }
        }
      }
    },
    x = {},
    T = function(u) {
      function h() {
        for (var e, t, s, a = [], i = arguments.length; i--;) a[i] = arguments[i];
        1 === a.length && a[0].constructor && a[0].constructor === Object ? s = a[0] : (t = (e = a)[0], s = e[1]), s || (s = {}), s = ee.extend({}, s), t && !s.el && (s.el = t), u.call(this, s), Object.keys(y).forEach(function(t) {
          Object.keys(y[t]).forEach(function(e) {
            h.prototype[e] || (h.prototype[e] = y[t][e])
          })
        });
        var r = this;
        void 0 === r.modules && (r.modules = {}), Object.keys(r.modules).forEach(function(e) {
          var t = r.modules[e];
          if (t.params) {
            var a = Object.keys(t.params)[0],
              i = t.params[a];
            if ("object" != typeof i || null === i) return;
            if (!(a in s && "enabled" in i)) return;
            !0 === s[a] && (s[a] = {
              enabled: !0
            }), "object" != typeof s[a] || "enabled" in s[a] || (s[a].enabled = !0), s[a] || (s[a] = {
              enabled: !1
            })
          }
        });
        var n = ee.extend({}, w);
        r.useModulesParams(n), r.params = ee.extend({}, n, x, s), r.originalParams = ee.extend({}, r.params), r.passedParams = ee.extend({}, s);
        var o = (r.$ = L)(r.params.el);
        if (t = o[0]) {
          if (1 < o.length) {
            var l = [];
            return o.each(function(e, t) {
              var a = ee.extend({}, s, {
                el: t
              });
              l.push(new h(a))
            }), l
          }
          t.swiper = r, o.data("swiper", r);
          var d, p, c = o.children("." + r.params.wrapperClass);
          return ee.extend(r, {
            $el: o,
            el: t,
            $wrapperEl: c,
            wrapperEl: c[0],
            classNames: [],
            slides: L(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: function() {
              return "horizontal" === r.params.direction
            },
            isVertical: function() {
              return "vertical" === r.params.direction
            },
            rtl: "rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction"),
            rtlTranslate: "horizontal" === r.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction")),
            wrongRTL: "-webkit-box" === c.css("display"),
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: r.params.allowSlideNext,
            allowSlidePrev: r.params.allowSlidePrev,
            touchEvents: (d = ["touchstart", "touchmove", "touchend"], p = ["mousedown", "mousemove", "mouseup"], te.pointerEvents ? p = ["pointerdown", "pointermove", "pointerup"] : te.prefixedPointerEvents && (p = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), r.touchEventsTouch = {
              start: d[0],
              move: d[1],
              end: d[2]
            }, r.touchEventsDesktop = {
              start: p[0],
              move: p[1],
              end: p[2]
            }, te.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop),
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              formElements: "input, select, option, textarea, button, video",
              lastClickTime: ee.now(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0
            },
            allowClick: !0,
            allowTouchMove: r.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
          }), r.useModules(), r.params.init && r.init(), r
        }
      }
      u && (h.__proto__ = u);
      var e = {
        extendedDefaults: {
          configurable: !0
        },
        defaults: {
          configurable: !0
        },
        Class: {
          configurable: !0
        },
        $: {
          configurable: !0
        }
      };
      return ((h.prototype = Object.create(u && u.prototype)).constructor = h).prototype.slidesPerViewDynamic = function() {
        var e = this,
          t = e.params,
          a = e.slides,
          i = e.slidesGrid,
          s = e.size,
          r = e.activeIndex,
          n = 1;
        if (t.centeredSlides) {
          for (var o, l = a[r].swiperSlideSize, d = r + 1; d < a.length; d += 1) a[d] && !o && (n += 1, s < (l += a[d].swiperSlideSize) && (o = !0));
          for (var p = r - 1; 0 <= p; p -= 1) a[p] && !o && (n += 1, s < (l += a[p].swiperSlideSize) && (o = !0))
        } else
          for (var c = r + 1; c < a.length; c += 1) i[c] - i[r] < s && (n += 1);
        return n
      }, h.prototype.update = function() {
        var a = this;
        if (a && !a.destroyed) {
          var e = a.snapGrid,
            t = a.params;
          t.breakpoints && a.setBreakpoint(), a.updateSize(), a.updateSlides(), a.updateProgress(), a.updateSlidesClasses(), a.params.freeMode ? (i(), a.params.autoHeight && a.updateAutoHeight()) : (("auto" === a.params.slidesPerView || 1 < a.params.slidesPerView) && a.isEnd && !a.params.centeredSlides ? a.slideTo(a.slides.length - 1, 0, !1, !0) : a.slideTo(a.activeIndex, 0, !1, !0)) || i(), t.watchOverflow && e !== a.snapGrid && a.checkOverflow(), a.emit("update")
        }

        function i() {
          var e = a.rtlTranslate ? -1 * a.translate : a.translate,
            t = Math.min(Math.max(e, a.maxTranslate()), a.minTranslate());
          a.setTranslate(t), a.updateActiveIndex(), a.updateSlidesClasses()
        }
      }, h.prototype.changeDirection = function(a, e) {
        void 0 === e && (e = !0);
        var t = this,
          i = t.params.direction;
        return a || (a = "horizontal" === i ? "vertical" : "horizontal"), a === i || "horizontal" !== a && "vertical" !== a || ("vertical" === i && (t.$el.removeClass(t.params.containerModifierClass + "vertical wp8-vertical").addClass("" + t.params.containerModifierClass + a), (I.isIE || I.isEdge) && (te.pointerEvents || te.prefixedPointerEvents) && t.$el.addClass(t.params.containerModifierClass + "wp8-" + a)), "horizontal" === i && (t.$el.removeClass(t.params.containerModifierClass + "horizontal wp8-horizontal").addClass("" + t.params.containerModifierClass + a), (I.isIE || I.isEdge) && (te.pointerEvents || te.prefixedPointerEvents) && t.$el.addClass(t.params.containerModifierClass + "wp8-" + a)), t.params.direction = a, t.slides.each(function(e, t) {
          "vertical" === a ? t.style.width = "" : t.style.height = ""
        }), t.emit("changeDirection"), e && t.update()), t
      }, h.prototype.init = function() {
        var e = this;
        e.initialized || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), e.initialized = !0, e.emit("init"))
      }, h.prototype.destroy = function(e, t) {
        void 0 === e && (e = !0), void 0 === t && (t = !0);
        var a = this,
          i = a.params,
          s = a.$el,
          r = a.$wrapperEl,
          n = a.slides;
        return void 0 === a.params || a.destroyed || (a.emit("beforeDestroy"), a.initialized = !1, a.detachEvents(), i.loop && a.loopDestroy(), t && (a.removeClasses(), s.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), a.emit("destroy"), Object.keys(a.eventsListeners).forEach(function(e) {
          a.off(e)
        }), !1 !== e && (a.$el[0].swiper = null, a.$el.data("swiper", null), ee.deleteProps(a)), a.destroyed = !0), null
      }, h.extendDefaults = function(e) {
        ee.extend(x, e)
      }, e.extendedDefaults.get = function() {
        return x
      }, e.defaults.get = function() {
        return w
      }, e.Class.get = function() {
        return u
      }, e.$.get = function() {
        return L
      }, Object.defineProperties(h, e), h
    }(n),
    E = {
      name: "device",
      proto: {
        device: g
      },
      static: {
        device: g
      }
    },
    S = {
      name: "support",
      proto: {
        support: te
      },
      static: {
        support: te
      }
    },
    C = {
      name: "browser",
      proto: {
        browser: I
      },
      static: {
        browser: I
      }
    },
    M = {
      name: "resize",
      create: function() {
        var e = this;
        ee.extend(e, {
          resize: {
            resizeHandler: function() {
              e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
            },
            orientationChangeHandler: function() {
              e && !e.destroyed && e.initialized && e.emit("orientationchange")
            }
          }
        })
      },
      on: {
        init: function() {
          J.addEventListener("resize", this.resize.resizeHandler), J.addEventListener("orientationchange", this.resize.orientationChangeHandler)
        },
        destroy: function() {
          J.removeEventListener("resize", this.resize.resizeHandler), J.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
        }
      }
    },
    z = {
      func: J.MutationObserver || J.WebkitMutationObserver,
      attach: function(e, t) {
        void 0 === t && (t = {});
        var a = this,
          i = new z.func(function(e) {
            if (1 !== e.length) {
              var t = function() {
                a.emit("observerUpdate", e[0])
              };
              J.requestAnimationFrame ? J.requestAnimationFrame(t) : J.setTimeout(t, 0)
            } else a.emit("observerUpdate", e[0])
          });
        i.observe(e, {
          attributes: void 0 === t.attributes || t.attributes,
          childList: void 0 === t.childList || t.childList,
          characterData: void 0 === t.characterData || t.characterData
        }), a.observer.observers.push(i)
      },
      init: function() {
        var e = this;
        if (te.observer && e.params.observer) {
          if (e.params.observeParents)
            for (var t = e.$el.parents(), a = 0; a < t.length; a += 1) e.observer.attach(t[a]);
          e.observer.attach(e.$el[0], {
            childList: e.params.observeSlideChildren
          }), e.observer.attach(e.$wrapperEl[0], {
            attributes: !1
          })
        }
      },
      destroy: function() {
        this.observer.observers.forEach(function(e) {
          e.disconnect()
        }), this.observer.observers = []
      }
    },
    P = {
      name: "observer",
      params: {
        observer: !1,
        observeParents: !1,
        observeSlideChildren: !1
      },
      create: function() {
        ee.extend(this, {
          observer: {
            init: z.init.bind(this),
            attach: z.attach.bind(this),
            destroy: z.destroy.bind(this),
            observers: []
          }
        })
      },
      on: {
        init: function() {
          this.observer.init()
        },
        destroy: function() {
          this.observer.destroy()
        }
      }
    },
    k = {
      update: function(e) {
        var t = this,
          a = t.params,
          i = a.slidesPerView,
          s = a.slidesPerGroup,
          r = a.centeredSlides,
          n = t.params.virtual,
          o = n.addSlidesBefore,
          l = n.addSlidesAfter,
          d = t.virtual,
          p = d.from,
          c = d.to,
          u = d.slides,
          h = d.slidesGrid,
          v = d.renderSlide,
          f = d.offset;
        t.updateActiveIndex();
        var m, g, b, w = t.activeIndex || 0;
        m = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", r ? (g = Math.floor(i / 2) + s + o, b = Math.floor(i / 2) + s + l) : (g = i + (s - 1) + o, b = s + l);
        var y = Math.max((w || 0) - b, 0),
          x = Math.min((w || 0) + g, u.length - 1),
          T = (t.slidesGrid[y] || 0) - (t.slidesGrid[0] || 0);

        function E() {
          t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load()
        }
        if (ee.extend(t.virtual, {
            from: y,
            to: x,
            offset: T,
            slidesGrid: t.slidesGrid
          }), p === y && c === x && !e) return t.slidesGrid !== h && T !== f && t.slides.css(m, T + "px"), void t.updateProgress();
        if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
          offset: T,
          from: y,
          to: x,
          slides: function() {
            for (var e = [], t = y; t <= x; t += 1) e.push(u[t]);
            return e
          }()
        }), void E();
        var S = [],
          C = [];
        if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
        else
          for (var M = p; M <= c; M += 1)(M < y || x < M) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + M + '"]').remove();
        for (var z = 0; z < u.length; z += 1) y <= z && z <= x && (void 0 === c || e ? C.push(z) : (c < z && C.push(z), z < p && S.push(z)));
        C.forEach(function(e) {
          t.$wrapperEl.append(v(u[e], e))
        }), S.sort(function(e, t) {
          return t - e
        }).forEach(function(e) {
          t.$wrapperEl.prepend(v(u[e], e))
        }), t.$wrapperEl.children(".swiper-slide").css(m, T + "px"), E()
      },
      renderSlide: function(e, t) {
        var a = this,
          i = a.params.virtual;
        if (i.cache && a.virtual.cache[t]) return a.virtual.cache[t];
        var s = i.renderSlide ? L(i.renderSlide.call(a, e, t)) : L('<div class="' + a.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
        return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t), i.cache && (a.virtual.cache[t] = s), s
      },
      appendSlide: function(e) {
        if ("object" == typeof e && "length" in e)
          for (var t = 0; t < e.length; t += 1) e[t] && this.virtual.slides.push(e[t]);
        else this.virtual.slides.push(e);
        this.virtual.update(!0)
      },
      prependSlide: function(e) {
        var t = this,
          a = t.activeIndex,
          i = a + 1,
          s = 1;
        if (Array.isArray(e)) {
          for (var r = 0; r < e.length; r += 1) e[r] && t.virtual.slides.unshift(e[r]);
          i = a + e.length, s = e.length
        } else t.virtual.slides.unshift(e);
        if (t.params.virtual.cache) {
          var n = t.virtual.cache,
            o = {};
          Object.keys(n).forEach(function(e) {
            o[parseInt(e, 10) + s] = n[e]
          }), t.virtual.cache = o
        }
        t.virtual.update(!0), t.slideTo(i, 0)
      },
      removeSlide: function(e) {
        var t = this;
        if (null != e) {
          var a = t.activeIndex;
          if (Array.isArray(e))
            for (var i = e.length - 1; 0 <= i; i -= 1) t.virtual.slides.splice(e[i], 1), t.params.virtual.cache && delete t.virtual.cache[e[i]], e[i] < a && (a -= 1), a = Math.max(a, 0);
          else t.virtual.slides.splice(e, 1), t.params.virtual.cache && delete t.virtual.cache[e], e < a && (a -= 1), a = Math.max(a, 0);
          t.virtual.update(!0), t.slideTo(a, 0)
        }
      },
      removeAllSlides: function() {
        var e = this;
        e.virtual.slides = [], e.params.virtual.cache && (e.virtual.cache = {}), e.virtual.update(!0), e.slideTo(0, 0)
      }
    },
    $ = {
      name: "virtual",
      params: {
        virtual: {
          enabled: !1,
          slides: [],
          cache: !0,
          renderSlide: null,
          renderExternal: null,
          addSlidesBefore: 0,
          addSlidesAfter: 0
        }
      },
      create: function() {
        var e = this;
        ee.extend(e, {
          virtual: {
            update: k.update.bind(e),
            appendSlide: k.appendSlide.bind(e),
            prependSlide: k.prependSlide.bind(e),
            removeSlide: k.removeSlide.bind(e),
            removeAllSlides: k.removeAllSlides.bind(e),
            renderSlide: k.renderSlide.bind(e),
            slides: e.params.virtual.slides,
            cache: {}
          }
        })
      },
      on: {
        beforeInit: function() {
          var e = this;
          if (e.params.virtual.enabled) {
            e.classNames.push(e.params.containerModifierClass + "virtual");
            var t = {
              watchSlidesProgress: !0
            };
            ee.extend(e.params, t), ee.extend(e.originalParams, t), e.params.initialSlide || e.virtual.update()
          }
        },
        setTranslate: function() {
          this.params.virtual.enabled && this.virtual.update()
        }
      }
    },
    D = {
      handle: function(e) {
        var t = this,
          a = t.rtlTranslate,
          i = e;
        i.originalEvent && (i = i.originalEvent);
        var s = i.keyCode || i.charCode;
        if (!t.allowSlideNext && (t.isHorizontal() && 39 === s || t.isVertical() && 40 === s)) return !1;
        if (!t.allowSlidePrev && (t.isHorizontal() && 37 === s || t.isVertical() && 38 === s)) return !1;
        if (!(i.shiftKey || i.altKey || i.ctrlKey || i.metaKey || f.activeElement && f.activeElement.nodeName && ("input" === f.activeElement.nodeName.toLowerCase() || "textarea" === f.activeElement.nodeName.toLowerCase()))) {
          if (t.params.keyboard.onlyInViewport && (37 === s || 39 === s || 38 === s || 40 === s)) {
            var r = !1;
            if (0 < t.$el.parents("." + t.params.slideClass).length && 0 === t.$el.parents("." + t.params.slideActiveClass).length) return;
            var n = J.innerWidth,
              o = J.innerHeight,
              l = t.$el.offset();
            a && (l.left -= t.$el[0].scrollLeft);
            for (var d = [
                [l.left, l.top],
                [l.left + t.width, l.top],
                [l.left, l.top + t.height],
                [l.left + t.width, l.top + t.height]
              ], p = 0; p < d.length; p += 1) {
              var c = d[p];
              0 <= c[0] && c[0] <= n && 0 <= c[1] && c[1] <= o && (r = !0)
            }
            if (!r) return
          }
          t.isHorizontal() ? (37 !== s && 39 !== s || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), (39 === s && !a || 37 === s && a) && t.slideNext(), (37 === s && !a || 39 === s && a) && t.slidePrev()) : (38 !== s && 40 !== s || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), 40 === s && t.slideNext(), 38 === s && t.slidePrev()), t.emit("keyPress", s)
        }
      },
      enable: function() {
        this.keyboard.enabled || (L(f).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
      },
      disable: function() {
        this.keyboard.enabled && (L(f).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
      }
    },
    O = {
      name: "keyboard",
      params: {
        keyboard: {
          enabled: !1,
          onlyInViewport: !0
        }
      },
      create: function() {
        ee.extend(this, {
          keyboard: {
            enabled: !1,
            enable: D.enable.bind(this),
            disable: D.disable.bind(this),
            handle: D.handle.bind(this)
          }
        })
      },
      on: {
        init: function() {
          this.params.keyboard.enabled && this.keyboard.enable()
        },
        destroy: function() {
          this.keyboard.enabled && this.keyboard.disable()
        }
      }
    };
  var A = {
      lastScrollTime: ee.now(),
      event: -1 < J.navigator.userAgent.indexOf("firefox") ? "DOMMouseScroll" : function() {
        var e = "onwheel",
          t = e in f;
        if (!t) {
          var a = f.createElement("div");
          a.setAttribute(e, "return;"), t = "function" == typeof a[e]
        }
        return !t && f.implementation && f.implementation.hasFeature && !0 !== f.implementation.hasFeature("", "") && (t = f.implementation.hasFeature("Events.wheel", "3.0")), t
      }() ? "wheel" : "mousewheel",
      normalize: function(e) {
        var t = 0,
          a = 0,
          i = 0,
          s = 0;
        return "detail" in e && (a = e.detail), "wheelDelta" in e && (a = -e.wheelDelta / 120), "wheelDeltaY" in e && (a = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = a, a = 0), i = 10 * t, s = 10 * a, "deltaY" in e && (s = e.deltaY), "deltaX" in e && (i = e.deltaX), (i || s) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, s *= 40) : (i *= 800, s *= 800)), i && !t && (t = i < 1 ? -1 : 1), s && !a && (a = s < 1 ? -1 : 1), {
          spinX: t,
          spinY: a,
          pixelX: i,
          pixelY: s
        }
      },
      handleMouseEnter: function() {
        this.mouseEntered = !0
      },
      handleMouseLeave: function() {
        this.mouseEntered = !1
      },
      handle: function(e) {
        var t = e,
          a = this,
          i = a.params.mousewheel;
        if (!a.mouseEntered && !i.releaseOnEdges) return !0;
        t.originalEvent && (t = t.originalEvent);
        var s = 0,
          r = a.rtlTranslate ? -1 : 1,
          n = A.normalize(t);
        if (i.forceToAxis)
          if (a.isHorizontal()) {
            if (!(Math.abs(n.pixelX) > Math.abs(n.pixelY))) return !0;
            s = n.pixelX * r
          } else {
            if (!(Math.abs(n.pixelY) > Math.abs(n.pixelX))) return !0;
            s = n.pixelY
          }
        else s = Math.abs(n.pixelX) > Math.abs(n.pixelY) ? -n.pixelX * r : -n.pixelY;
        if (0 === s) return !0;
        if (i.invert && (s = -s), a.params.freeMode) {
          a.params.loop && a.loopFix();
          var o = a.getTranslate() + s * i.sensitivity,
            l = a.isBeginning,
            d = a.isEnd;
          if (o >= a.minTranslate() && (o = a.minTranslate()), o <= a.maxTranslate() && (o = a.maxTranslate()), a.setTransition(0), a.setTranslate(o), a.updateProgress(), a.updateActiveIndex(), a.updateSlidesClasses(), (!l && a.isBeginning || !d && a.isEnd) && a.updateSlidesClasses(), a.params.freeModeSticky && (clearTimeout(a.mousewheel.timeout), a.mousewheel.timeout = ee.nextTick(function() {
              a.slideToClosest()
            }, 300)), a.emit("scroll", t), a.params.autoplay && a.params.autoplayDisableOnInteraction && a.autoplay.stop(), o === a.minTranslate() || o === a.maxTranslate()) return !0
        } else {
          if (60 < ee.now() - a.mousewheel.lastScrollTime)
            if (s < 0)
              if (a.isEnd && !a.params.loop || a.animating) {
                if (i.releaseOnEdges) return !0
              } else a.slideNext(), a.emit("scroll", t);
          else if (a.isBeginning && !a.params.loop || a.animating) {
            if (i.releaseOnEdges) return !0
          } else a.slidePrev(), a.emit("scroll", t);
          a.mousewheel.lastScrollTime = (new J.Date).getTime()
        }
        return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
      },
      enable: function() {
        var e = this;
        if (!A.event) return !1;
        if (e.mousewheel.enabled) return !1;
        var t = e.$el;
        return "container" !== e.params.mousewheel.eventsTarged && (t = L(e.params.mousewheel.eventsTarged)), t.on("mouseenter", e.mousewheel.handleMouseEnter), t.on("mouseleave", e.mousewheel.handleMouseLeave), t.on(A.event, e.mousewheel.handle), e.mousewheel.enabled = !0
      },
      disable: function() {
        var e = this;
        if (!A.event) return !1;
        if (!e.mousewheel.enabled) return !1;
        var t = e.$el;
        return "container" !== e.params.mousewheel.eventsTarged && (t = L(e.params.mousewheel.eventsTarged)), t.off(A.event, e.mousewheel.handle), !(e.mousewheel.enabled = !1)
      }
    },
    H = {
      update: function() {
        var e = this,
          t = e.params.navigation;
        if (!e.params.loop) {
          var a = e.navigation,
            i = a.$nextEl,
            s = a.$prevEl;
          s && 0 < s.length && (e.isBeginning ? s.addClass(t.disabledClass) : s.removeClass(t.disabledClass), s[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)), i && 0 < i.length && (e.isEnd ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass), i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass))
        }
      },
      onPrevClick: function(e) {
        e.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev()
      },
      onNextClick: function(e) {
        e.preventDefault(), this.isEnd && !this.params.loop || this.slideNext()
      },
      init: function() {
        var e, t, a = this,
          i = a.params.navigation;
        (i.nextEl || i.prevEl) && (i.nextEl && (e = L(i.nextEl), a.params.uniqueNavElements && "string" == typeof i.nextEl && 1 < e.length && 1 === a.$el.find(i.nextEl).length && (e = a.$el.find(i.nextEl))), i.prevEl && (t = L(i.prevEl), a.params.uniqueNavElements && "string" == typeof i.prevEl && 1 < t.length && 1 === a.$el.find(i.prevEl).length && (t = a.$el.find(i.prevEl))), e && 0 < e.length && e.on("click", a.navigation.onNextClick), t && 0 < t.length && t.on("click", a.navigation.onPrevClick), ee.extend(a.navigation, {
          $nextEl: e,
          nextEl: e && e[0],
          $prevEl: t,
          prevEl: t && t[0]
        }))
      },
      destroy: function() {
        var e = this,
          t = e.navigation,
          a = t.$nextEl,
          i = t.$prevEl;
        a && a.length && (a.off("click", e.navigation.onNextClick), a.removeClass(e.params.navigation.disabledClass)), i && i.length && (i.off("click", e.navigation.onPrevClick), i.removeClass(e.params.navigation.disabledClass))
      }
    },
    N = {
      update: function() {
        var e = this,
          t = e.rtl,
          s = e.params.pagination;
        if (s.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
          var r, a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
            i = e.pagination.$el,
            n = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
          if (e.params.loop ? ((r = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > a - 1 - 2 * e.loopedSlides && (r -= a - 2 * e.loopedSlides), n - 1 < r && (r -= n), r < 0 && "bullets" !== e.params.paginationType && (r = n + r)) : r = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === s.type && e.pagination.bullets && 0 < e.pagination.bullets.length) {
            var o, l, d, p = e.pagination.bullets;
            if (s.dynamicBullets && (e.pagination.bulletSize = p.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), i.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (s.dynamicMainBullets + 4) + "px"), 1 < s.dynamicMainBullets && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += r - e.previousIndex, e.pagination.dynamicBulletIndex > s.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = s.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)), o = r - e.pagination.dynamicBulletIndex, d = ((l = o + (Math.min(p.length, s.dynamicMainBullets) - 1)) + o) / 2), p.removeClass(s.bulletActiveClass + " " + s.bulletActiveClass + "-next " + s.bulletActiveClass + "-next-next " + s.bulletActiveClass + "-prev " + s.bulletActiveClass + "-prev-prev " + s.bulletActiveClass + "-main"), 1 < i.length) p.each(function(e, t) {
              var a = L(t),
                i = a.index();
              i === r && a.addClass(s.bulletActiveClass), s.dynamicBullets && (o <= i && i <= l && a.addClass(s.bulletActiveClass + "-main"), i === o && a.prev().addClass(s.bulletActiveClass + "-prev").prev().addClass(s.bulletActiveClass + "-prev-prev"), i === l && a.next().addClass(s.bulletActiveClass + "-next").next().addClass(s.bulletActiveClass + "-next-next"))
            });
            else if (p.eq(r).addClass(s.bulletActiveClass), s.dynamicBullets) {
              for (var c = p.eq(o), u = p.eq(l), h = o; h <= l; h += 1) p.eq(h).addClass(s.bulletActiveClass + "-main");
              c.prev().addClass(s.bulletActiveClass + "-prev").prev().addClass(s.bulletActiveClass + "-prev-prev"), u.next().addClass(s.bulletActiveClass + "-next").next().addClass(s.bulletActiveClass + "-next-next")
            }
            if (s.dynamicBullets) {
              var v = Math.min(p.length, s.dynamicMainBullets + 4),
                f = (e.pagination.bulletSize * v - e.pagination.bulletSize) / 2 - d * e.pagination.bulletSize,
                m = t ? "right" : "left";
              p.css(e.isHorizontal() ? m : "top", f + "px")
            }
          }
          if ("fraction" === s.type && (i.find("." + s.currentClass).text(s.formatFractionCurrent(r + 1)), i.find("." + s.totalClass).text(s.formatFractionTotal(n))), "progressbar" === s.type) {
            var g;
            g = s.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
            var b = (r + 1) / n,
              w = 1,
              y = 1;
            "horizontal" === g ? w = b : y = b, i.find("." + s.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + w + ") scaleY(" + y + ")").transition(e.params.speed)
          }
          "custom" === s.type && s.renderCustom ? (i.html(s.renderCustom(e, r + 1, n)), e.emit("paginationRender", e, i[0])) : e.emit("paginationUpdate", e, i[0]), i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](s.lockClass)
        }
      },
      render: function() {
        var e = this,
          t = e.params.pagination;
        if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
          var a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
            i = e.pagination.$el,
            s = "";
          if ("bullets" === t.type) {
            for (var r = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, n = 0; n < r; n += 1) t.renderBullet ? s += t.renderBullet.call(e, n, t.bulletClass) : s += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
            i.html(s), e.pagination.bullets = i.find("." + t.bulletClass)
          }
          "fraction" === t.type && (s = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', i.html(s)), "progressbar" === t.type && (s = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', i.html(s)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
        }
      },
      init: function() {
        var a = this,
          e = a.params.pagination;
        if (e.el) {
          var t = L(e.el);
          0 !== t.length && (a.params.uniqueNavElements && "string" == typeof e.el && 1 < t.length && 1 === a.$el.find(e.el).length && (t = a.$el.find(e.el)), "bullets" === e.type && e.clickable && t.addClass(e.clickableClass), t.addClass(e.modifierClass + e.type), "bullets" === e.type && e.dynamicBullets && (t.addClass("" + e.modifierClass + e.type + "-dynamic"), a.pagination.dynamicBulletIndex = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && t.addClass(e.progressbarOppositeClass), e.clickable && t.on("click", "." + e.bulletClass, function(e) {
            e.preventDefault();
            var t = L(this).index() * a.params.slidesPerGroup;
            a.params.loop && (t += a.loopedSlides), a.slideTo(t)
          }), ee.extend(a.pagination, {
            $el: t,
            el: t[0]
          }))
        }
      },
      destroy: function() {
        var e = this,
          t = e.params.pagination;
        if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
          var a = e.pagination.$el;
          a.removeClass(t.hiddenClass), a.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && a.off("click", "." + t.bulletClass)
        }
      }
    },
    G = {
      setTranslate: function() {
        var e = this;
        if (e.params.scrollbar.el && e.scrollbar.el) {
          var t = e.scrollbar,
            a = e.rtlTranslate,
            i = e.progress,
            s = t.dragSize,
            r = t.trackSize,
            n = t.$dragEl,
            o = t.$el,
            l = e.params.scrollbar,
            d = s,
            p = (r - s) * i;
          a ? 0 < (p = -p) ? (d = s - p, p = 0) : r < -p + s && (d = r + p) : p < 0 ? (d = s + p, p = 0) : r < p + s && (d = r - p), e.isHorizontal() ? (te.transforms3d ? n.transform("translate3d(" + p + "px, 0, 0)") : n.transform("translateX(" + p + "px)"), n[0].style.width = d + "px") : (te.transforms3d ? n.transform("translate3d(0px, " + p + "px, 0)") : n.transform("translateY(" + p + "px)"), n[0].style.height = d + "px"), l.hide && (clearTimeout(e.scrollbar.timeout), o[0].style.opacity = 1, e.scrollbar.timeout = setTimeout(function() {
            o[0].style.opacity = 0, o.transition(400)
          }, 1e3))
        }
      },
      setTransition: function(e) {
        this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
      },
      updateSize: function() {
        var e = this;
        if (e.params.scrollbar.el && e.scrollbar.el) {
          var t = e.scrollbar,
            a = t.$dragEl,
            i = t.$el;
          a[0].style.width = "", a[0].style.height = "";
          var s, r = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
            n = e.size / e.virtualSize,
            o = n * (r / e.size);
          s = "auto" === e.params.scrollbar.dragSize ? r * n : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? a[0].style.width = s + "px" : a[0].style.height = s + "px", i[0].style.display = 1 <= n ? "none" : "", e.params.scrollbar.hide && (i[0].style.opacity = 0), ee.extend(t, {
            trackSize: r,
            divider: n,
            moveDivider: o,
            dragSize: s
          }), t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass)
        }
      },
      setDragPosition: function(e) {
        var t, a = this,
          i = a.scrollbar,
          s = a.rtlTranslate,
          r = i.$el,
          n = i.dragSize,
          o = i.trackSize;
        t = ((a.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - r.offset()[a.isHorizontal() ? "left" : "top"] - n / 2) / (o - n), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);
        var l = a.minTranslate() + (a.maxTranslate() - a.minTranslate()) * t;
        a.updateProgress(l), a.setTranslate(l), a.updateActiveIndex(), a.updateSlidesClasses()
      },
      onDragStart: function(e) {
        var t = this,
          a = t.params.scrollbar,
          i = t.scrollbar,
          s = t.$wrapperEl,
          r = i.$el,
          n = i.$dragEl;
        t.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), s.transition(100), n.transition(100), i.setDragPosition(e), clearTimeout(t.scrollbar.dragTimeout), r.transition(0), a.hide && r.css("opacity", 1), t.emit("scrollbarDragStart", e)
      },
      onDragMove: function(e) {
        var t = this.scrollbar,
          a = this.$wrapperEl,
          i = t.$el,
          s = t.$dragEl;
        this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), a.transition(0), i.transition(0), s.transition(0), this.emit("scrollbarDragMove", e))
      },
      onDragEnd: function(e) {
        var t = this,
          a = t.params.scrollbar,
          i = t.scrollbar.$el;
        t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, a.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = ee.nextTick(function() {
          i.css("opacity", 0), i.transition(400)
        }, 1e3)), t.emit("scrollbarDragEnd", e), a.snapOnRelease && t.slideToClosest())
      },
      enableDraggable: function() {
        var e = this;
        if (e.params.scrollbar.el) {
          var t = e.scrollbar,
            a = e.touchEventsTouch,
            i = e.touchEventsDesktop,
            s = e.params,
            r = t.$el[0],
            n = !(!te.passiveListener || !s.passiveListeners) && {
              passive: !1,
              capture: !1
            },
            o = !(!te.passiveListener || !s.passiveListeners) && {
              passive: !0,
              capture: !1
            };
          te.touch ? (r.addEventListener(a.start, e.scrollbar.onDragStart, n), r.addEventListener(a.move, e.scrollbar.onDragMove, n), r.addEventListener(a.end, e.scrollbar.onDragEnd, o)) : (r.addEventListener(i.start, e.scrollbar.onDragStart, n), f.addEventListener(i.move, e.scrollbar.onDragMove, n), f.addEventListener(i.end, e.scrollbar.onDragEnd, o))
        }
      },
      disableDraggable: function() {
        var e = this;
        if (e.params.scrollbar.el) {
          var t = e.scrollbar,
            a = e.touchEventsTouch,
            i = e.touchEventsDesktop,
            s = e.params,
            r = t.$el[0],
            n = !(!te.passiveListener || !s.passiveListeners) && {
              passive: !1,
              capture: !1
            },
            o = !(!te.passiveListener || !s.passiveListeners) && {
              passive: !0,
              capture: !1
            };
          te.touch ? (r.removeEventListener(a.start, e.scrollbar.onDragStart, n), r.removeEventListener(a.move, e.scrollbar.onDragMove, n), r.removeEventListener(a.end, e.scrollbar.onDragEnd, o)) : (r.removeEventListener(i.start, e.scrollbar.onDragStart, n), f.removeEventListener(i.move, e.scrollbar.onDragMove, n), f.removeEventListener(i.end, e.scrollbar.onDragEnd, o))
        }
      },
      init: function() {
        var e = this;
        if (e.params.scrollbar.el) {
          var t = e.scrollbar,
            a = e.$el,
            i = e.params.scrollbar,
            s = L(i.el);
          e.params.uniqueNavElements && "string" == typeof i.el && 1 < s.length && 1 === a.find(i.el).length && (s = a.find(i.el));
          var r = s.find("." + e.params.scrollbar.dragClass);
          0 === r.length && (r = L('<div class="' + e.params.scrollbar.dragClass + '"></div>'), s.append(r)), ee.extend(t, {
            $el: s,
            el: s[0],
            $dragEl: r,
            dragEl: r[0]
          }), i.draggable && t.enableDraggable()
        }
      },
      destroy: function() {
        this.scrollbar.disableDraggable()
      }
    },
    B = {
      setTransform: function(e, t) {
        var a = this.rtl,
          i = L(e),
          s = a ? -1 : 1,
          r = i.attr("data-swiper-parallax") || "0",
          n = i.attr("data-swiper-parallax-x"),
          o = i.attr("data-swiper-parallax-y"),
          l = i.attr("data-swiper-parallax-scale"),
          d = i.attr("data-swiper-parallax-opacity");
        if (n || o ? (n = n || "0", o = o || "0") : this.isHorizontal() ? (n = r, o = "0") : (o = r, n = "0"), n = 0 <= n.indexOf("%") ? parseInt(n, 10) * t * s + "%" : n * t * s + "px", o = 0 <= o.indexOf("%") ? parseInt(o, 10) * t + "%" : o * t + "px", null != d) {
          var p = d - (d - 1) * (1 - Math.abs(t));
          i[0].style.opacity = p
        }
        if (null == l) i.transform("translate3d(" + n + ", " + o + ", 0px)");
        else {
          var c = l - (l - 1) * (1 - Math.abs(t));
          i.transform("translate3d(" + n + ", " + o + ", 0px) scale(" + c + ")")
        }
      },
      setTranslate: function() {
        var i = this,
          e = i.$el,
          t = i.slides,
          s = i.progress,
          r = i.snapGrid;
        e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, t) {
          i.parallax.setTransform(t, s)
        }), t.each(function(e, t) {
          var a = t.progress;
          1 < i.params.slidesPerGroup && "auto" !== i.params.slidesPerView && (a += Math.ceil(e / 2) - s * (r.length - 1)), a = Math.min(Math.max(a, -1), 1), L(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, t) {
            i.parallax.setTransform(t, a)
          })
        })
      },
      setTransition: function(s) {
        void 0 === s && (s = this.params.speed);
        this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, t) {
          var a = L(t),
            i = parseInt(a.attr("data-swiper-parallax-duration"), 10) || s;
          0 === s && (i = 0), a.transition(i)
        })
      }
    },
    X = {
      getDistanceBetweenTouches: function(e) {
        if (e.targetTouches.length < 2) return 1;
        var t = e.targetTouches[0].pageX,
          a = e.targetTouches[0].pageY,
          i = e.targetTouches[1].pageX,
          s = e.targetTouches[1].pageY;
        return Math.sqrt(Math.pow(i - t, 2) + Math.pow(s - a, 2))
      },
      onGestureStart: function(e) {
        var t = this,
          a = t.params.zoom,
          i = t.zoom,
          s = i.gesture;
        if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !te.gestures) {
          if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
          i.fakeGestureTouched = !0, s.scaleStart = X.getDistanceBetweenTouches(e)
        }
        s.$slideEl && s.$slideEl.length || (s.$slideEl = L(e.target).closest(".swiper-slide"), 0 === s.$slideEl.length && (s.$slideEl = t.slides.eq(t.activeIndex)), s.$imageEl = s.$slideEl.find("img, svg, canvas"), s.$imageWrapEl = s.$imageEl.parent("." + a.containerClass), s.maxRatio = s.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, 0 !== s.$imageWrapEl.length) ? (s.$imageEl.transition(0), t.zoom.isScaling = !0) : s.$imageEl = void 0
      },
      onGestureChange: function(e) {
        var t = this.params.zoom,
          a = this.zoom,
          i = a.gesture;
        if (!te.gestures) {
          if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
          a.fakeGestureMoved = !0, i.scaleMove = X.getDistanceBetweenTouches(e)
        }
        i.$imageEl && 0 !== i.$imageEl.length && (a.scale = te.gestures ? e.scale * a.currentScale : i.scaleMove / i.scaleStart * a.currentScale, a.scale > i.maxRatio && (a.scale = i.maxRatio - 1 + Math.pow(a.scale - i.maxRatio + 1, .5)), a.scale < t.minRatio && (a.scale = t.minRatio + 1 - Math.pow(t.minRatio - a.scale + 1, .5)), i.$imageEl.transform("translate3d(0,0,0) scale(" + a.scale + ")"))
      },
      onGestureEnd: function(e) {
        var t = this.params.zoom,
          a = this.zoom,
          i = a.gesture;
        if (!te.gestures) {
          if (!a.fakeGestureTouched || !a.fakeGestureMoved) return;
          if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !g.android) return;
          a.fakeGestureTouched = !1, a.fakeGestureMoved = !1
        }
        i.$imageEl && 0 !== i.$imageEl.length && (a.scale = Math.max(Math.min(a.scale, i.maxRatio), t.minRatio), i.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + a.scale + ")"), a.currentScale = a.scale, a.isScaling = !1, 1 === a.scale && (i.$slideEl = void 0))
      },
      onTouchStart: function(e) {
        var t = this.zoom,
          a = t.gesture,
          i = t.image;
        a.$imageEl && 0 !== a.$imageEl.length && (i.isTouched || (g.android && e.preventDefault(), i.isTouched = !0, i.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, i.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
      },
      onTouchMove: function(e) {
        var t = this,
          a = t.zoom,
          i = a.gesture,
          s = a.image,
          r = a.velocity;
        if (i.$imageEl && 0 !== i.$imageEl.length && (t.allowClick = !1, s.isTouched && i.$slideEl)) {
          s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = ee.getTranslate(i.$imageWrapEl[0], "x") || 0, s.startY = ee.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), t.rtl && (s.startX = -s.startX, s.startY = -s.startY));
          var n = s.width * a.scale,
            o = s.height * a.scale;
          if (!(n < i.slideWidth && o < i.slideHeight)) {
            if (s.minX = Math.min(i.slideWidth / 2 - n / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - o / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !a.isScaling) {
              if (t.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void(s.isTouched = !1);
              if (!t.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void(s.isTouched = !1)
            }
            e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), r.prevPositionX || (r.prevPositionX = s.touchesCurrent.x), r.prevPositionY || (r.prevPositionY = s.touchesCurrent.y), r.prevTime || (r.prevTime = Date.now()), r.x = (s.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2, r.y = (s.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2, Math.abs(s.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0), Math.abs(s.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0), r.prevPositionX = s.touchesCurrent.x, r.prevPositionY = s.touchesCurrent.y, r.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
          }
        }
      },
      onTouchEnd: function() {
        var e = this.zoom,
          t = e.gesture,
          a = e.image,
          i = e.velocity;
        if (t.$imageEl && 0 !== t.$imageEl.length) {
          if (!a.isTouched || !a.isMoved) return a.isTouched = !1, void(a.isMoved = !1);
          a.isTouched = !1, a.isMoved = !1;
          var s = 300,
            r = 300,
            n = i.x * s,
            o = a.currentX + n,
            l = i.y * r,
            d = a.currentY + l;
          0 !== i.x && (s = Math.abs((o - a.currentX) / i.x)), 0 !== i.y && (r = Math.abs((d - a.currentY) / i.y));
          var p = Math.max(s, r);
          a.currentX = o, a.currentY = d;
          var c = a.width * e.scale,
            u = a.height * e.scale;
          a.minX = Math.min(t.slideWidth / 2 - c / 2, 0), a.maxX = -a.minX, a.minY = Math.min(t.slideHeight / 2 - u / 2, 0), a.maxY = -a.minY, a.currentX = Math.max(Math.min(a.currentX, a.maxX), a.minX), a.currentY = Math.max(Math.min(a.currentY, a.maxY), a.minY), t.$imageWrapEl.transition(p).transform("translate3d(" + a.currentX + "px, " + a.currentY + "px,0)")
        }
      },
      onTransitionEnd: function() {
        var e = this.zoom,
          t = e.gesture;
        t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, e.currentScale = 1, t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0)
      },
      toggle: function(e) {
        var t = this.zoom;
        t.scale && 1 !== t.scale ? t.out() : t.in(e)
      },
      in: function(e) {
        var t, a, i, s, r, n, o, l, d, p, c, u, h, v, f, m, g = this,
          b = g.zoom,
          w = g.params.zoom,
          y = b.gesture,
          x = b.image;
        (y.$slideEl || (y.$slideEl = g.clickedSlide ? L(g.clickedSlide) : g.slides.eq(g.activeIndex), y.$imageEl = y.$slideEl.find("img, svg, canvas"), y.$imageWrapEl = y.$imageEl.parent("." + w.containerClass)), y.$imageEl && 0 !== y.$imageEl.length) && (y.$slideEl.addClass("" + w.zoomedSlideClass), void 0 === x.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, a = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = x.touchesStart.x, a = x.touchesStart.y), b.scale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, b.currentScale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, e ? (f = y.$slideEl[0].offsetWidth, m = y.$slideEl[0].offsetHeight, i = y.$slideEl.offset().left + f / 2 - t, s = y.$slideEl.offset().top + m / 2 - a, o = y.$imageEl[0].offsetWidth, l = y.$imageEl[0].offsetHeight, d = o * b.scale, p = l * b.scale, h = -(c = Math.min(f / 2 - d / 2, 0)), v = -(u = Math.min(m / 2 - p / 2, 0)), (r = i * b.scale) < c && (r = c), h < r && (r = h), (n = s * b.scale) < u && (n = u), v < n && (n = v)) : n = r = 0, y.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + n + "px,0)"), y.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + b.scale + ")"))
      },
      out: function() {
        var e = this,
          t = e.zoom,
          a = e.params.zoom,
          i = t.gesture;
        i.$slideEl || (i.$slideEl = e.clickedSlide ? L(e.clickedSlide) : e.slides.eq(e.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas"), i.$imageWrapEl = i.$imageEl.parent("." + a.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (t.scale = 1, t.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + a.zoomedSlideClass), i.$slideEl = void 0)
      },
      enable: function() {
        var e = this,
          t = e.zoom;
        if (!t.enabled) {
          t.enabled = !0;
          var a = !("touchstart" !== e.touchEvents.start || !te.passiveListener || !e.params.passiveListeners) && {
            passive: !0,
            capture: !1
          };
          te.gestures ? (e.$wrapperEl.on("gesturestart", ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.on("gesturechange", ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, a)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.on(e.touchEvents.move, ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.on(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, a)), e.$wrapperEl.on(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
        }
      },
      disable: function() {
        var e = this,
          t = e.zoom;
        if (t.enabled) {
          e.zoom.enabled = !1;
          var a = !("touchstart" !== e.touchEvents.start || !te.passiveListener || !e.params.passiveListeners) && {
            passive: !0,
            capture: !1
          };
          te.gestures ? (e.$wrapperEl.off("gesturestart", ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.off("gesturechange", ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.off("gestureend", ".swiper-slide", t.onGestureEnd, a)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.off(e.touchEvents.move, ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.off(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, a)), e.$wrapperEl.off(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
        }
      }
    },
    Y = {
      loadInSlide: function(e, l) {
        void 0 === l && (l = !0);
        var d = this,
          p = d.params.lazy;
        if (void 0 !== e && 0 !== d.slides.length) {
          var c = d.virtual && d.params.virtual.enabled ? d.$wrapperEl.children("." + d.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : d.slides.eq(e),
            t = c.find("." + p.elementClass + ":not(." + p.loadedClass + "):not(." + p.loadingClass + ")");
          !c.hasClass(p.elementClass) || c.hasClass(p.loadedClass) || c.hasClass(p.loadingClass) || (t = t.add(c[0])), 0 !== t.length && t.each(function(e, t) {
            var i = L(t);
            i.addClass(p.loadingClass);
            var s = i.attr("data-background"),
              r = i.attr("data-src"),
              n = i.attr("data-srcset"),
              o = i.attr("data-sizes");
            d.loadImage(i[0], r || s, n, o, !1, function() {
              if (null != d && d && (!d || d.params) && !d.destroyed) {
                if (s ? (i.css("background-image", 'url("' + s + '")'), i.removeAttr("data-background")) : (n && (i.attr("srcset", n), i.removeAttr("data-srcset")), o && (i.attr("sizes", o), i.removeAttr("data-sizes")), r && (i.attr("src", r), i.removeAttr("data-src"))), i.addClass(p.loadedClass).removeClass(p.loadingClass), c.find("." + p.preloaderClass).remove(), d.params.loop && l) {
                  var e = c.attr("data-swiper-slide-index");
                  if (c.hasClass(d.params.slideDuplicateClass)) {
                    var t = d.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + d.params.slideDuplicateClass + ")");
                    d.lazy.loadInSlide(t.index(), !1)
                  } else {
                    var a = d.$wrapperEl.children("." + d.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                    d.lazy.loadInSlide(a.index(), !1)
                  }
                }
                d.emit("lazyImageReady", c[0], i[0])
              }
            }), d.emit("lazyImageLoad", c[0], i[0])
          })
        }
      },
      load: function() {
        var i = this,
          t = i.$wrapperEl,
          a = i.params,
          s = i.slides,
          e = i.activeIndex,
          r = i.virtual && a.virtual.enabled,
          n = a.lazy,
          o = a.slidesPerView;

        function l(e) {
          if (r) {
            if (t.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0
          } else if (s[e]) return !0;
          return !1
        }

        function d(e) {
          return r ? L(e).attr("data-swiper-slide-index") : L(e).index()
        }
        if ("auto" === o && (o = 0), i.lazy.initialImageLoaded || (i.lazy.initialImageLoaded = !0), i.params.watchSlidesVisibility) t.children("." + a.slideVisibleClass).each(function(e, t) {
          var a = r ? L(t).attr("data-swiper-slide-index") : L(t).index();
          i.lazy.loadInSlide(a)
        });
        else if (1 < o)
          for (var p = e; p < e + o; p += 1) l(p) && i.lazy.loadInSlide(p);
        else i.lazy.loadInSlide(e);
        if (n.loadPrevNext)
          if (1 < o || n.loadPrevNextAmount && 1 < n.loadPrevNextAmount) {
            for (var c = n.loadPrevNextAmount, u = o, h = Math.min(e + u + Math.max(c, u), s.length), v = Math.max(e - Math.max(u, c), 0), f = e + o; f < h; f += 1) l(f) && i.lazy.loadInSlide(f);
            for (var m = v; m < e; m += 1) l(m) && i.lazy.loadInSlide(m)
          } else {
            var g = t.children("." + a.slideNextClass);
            0 < g.length && i.lazy.loadInSlide(d(g));
            var b = t.children("." + a.slidePrevClass);
            0 < b.length && i.lazy.loadInSlide(d(b))
          }
      }
    },
    V = {
      LinearSpline: function(e, t) {
        var a, i, s, r, n, o = function(e, t) {
          for (i = -1, a = e.length; 1 < a - i;) e[s = a + i >> 1] <= t ? i = s : a = s;
          return a
        };
        return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
          return e ? (n = o(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0
        }, this
      },
      getInterpolateFunction: function(e) {
        var t = this;
        t.controller.spline || (t.controller.spline = t.params.loop ? new V.LinearSpline(t.slidesGrid, e.slidesGrid) : new V.LinearSpline(t.snapGrid, e.snapGrid))
      },
      setTranslate: function(e, t) {
        var a, i, s = this,
          r = s.controller.control;

        function n(e) {
          var t = s.rtlTranslate ? -s.translate : s.translate;
          "slide" === s.params.controller.by && (s.controller.getInterpolateFunction(e), i = -s.controller.spline.interpolate(-t)), i && "container" !== s.params.controller.by || (a = (e.maxTranslate() - e.minTranslate()) / (s.maxTranslate() - s.minTranslate()), i = (t - s.minTranslate()) * a + e.minTranslate()), s.params.controller.inverse && (i = e.maxTranslate() - i), e.updateProgress(i), e.setTranslate(i, s), e.updateActiveIndex(), e.updateSlidesClasses()
        }
        if (Array.isArray(r))
          for (var o = 0; o < r.length; o += 1) r[o] !== t && r[o] instanceof T && n(r[o]);
        else r instanceof T && t !== r && n(r)
      },
      setTransition: function(t, e) {
        var a, i = this,
          s = i.controller.control;

        function r(e) {
          e.setTransition(t, i), 0 !== t && (e.transitionStart(), e.params.autoHeight && ee.nextTick(function() {
            e.updateAutoHeight()
          }), e.$wrapperEl.transitionEnd(function() {
            s && (e.params.loop && "slide" === i.params.controller.by && e.loopFix(), e.transitionEnd())
          }))
        }
        if (Array.isArray(s))
          for (a = 0; a < s.length; a += 1) s[a] !== e && s[a] instanceof T && r(s[a]);
        else s instanceof T && e !== s && r(s)
      }
    },
    F = {
      makeElFocusable: function(e) {
        return e.attr("tabIndex", "0"), e
      },
      addElRole: function(e, t) {
        return e.attr("role", t), e
      },
      addElLabel: function(e, t) {
        return e.attr("aria-label", t), e
      },
      disableEl: function(e) {
        return e.attr("aria-disabled", !0), e
      },
      enableEl: function(e) {
        return e.attr("aria-disabled", !1), e
      },
      onEnterKey: function(e) {
        var t = this,
          a = t.params.a11y;
        if (13 === e.keyCode) {
          var i = L(e.target);
          t.navigation && t.navigation.$nextEl && i.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? t.a11y.notify(a.lastSlideMessage) : t.a11y.notify(a.nextSlideMessage)), t.navigation && t.navigation.$prevEl && i.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? t.a11y.notify(a.firstSlideMessage) : t.a11y.notify(a.prevSlideMessage)), t.pagination && i.is("." + t.params.pagination.bulletClass) && i[0].click()
        }
      },
      notify: function(e) {
        var t = this.a11y.liveRegion;
        0 !== t.length && (t.html(""), t.html(e))
      },
      updateNavigation: function() {
        var e = this;
        if (!e.params.loop) {
          var t = e.navigation,
            a = t.$nextEl,
            i = t.$prevEl;
          i && 0 < i.length && (e.isBeginning ? e.a11y.disableEl(i) : e.a11y.enableEl(i)), a && 0 < a.length && (e.isEnd ? e.a11y.disableEl(a) : e.a11y.enableEl(a))
        }
      },
      updatePagination: function() {
        var i = this,
          s = i.params.a11y;
        i.pagination && i.params.pagination.clickable && i.pagination.bullets && i.pagination.bullets.length && i.pagination.bullets.each(function(e, t) {
          var a = L(t);
          i.a11y.makeElFocusable(a), i.a11y.addElRole(a, "button"), i.a11y.addElLabel(a, s.paginationBulletMessage.replace(/{{index}}/, a.index() + 1))
        })
      },
      init: function() {
        var e = this;
        e.$el.append(e.a11y.liveRegion);
        var t, a, i = e.params.a11y;
        e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (a = e.navigation.$prevEl), t && (e.a11y.makeElFocusable(t), e.a11y.addElRole(t, "button"), e.a11y.addElLabel(t, i.nextSlideMessage), t.on("keydown", e.a11y.onEnterKey)), a && (e.a11y.makeElFocusable(a), e.a11y.addElRole(a, "button"), e.a11y.addElLabel(a, i.prevSlideMessage), a.on("keydown", e.a11y.onEnterKey)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey)
      },
      destroy: function() {
        var e, t, a = this;
        a.a11y.liveRegion && 0 < a.a11y.liveRegion.length && a.a11y.liveRegion.remove(), a.navigation && a.navigation.$nextEl && (e = a.navigation.$nextEl), a.navigation && a.navigation.$prevEl && (t = a.navigation.$prevEl), e && e.off("keydown", a.a11y.onEnterKey), t && t.off("keydown", a.a11y.onEnterKey), a.pagination && a.params.pagination.clickable && a.pagination.bullets && a.pagination.bullets.length && a.pagination.$el.off("keydown", "." + a.params.pagination.bulletClass, a.a11y.onEnterKey)
      }
    },
    R = {
      init: function() {
        var e = this;
        if (e.params.history) {
          if (!J.history || !J.history.pushState) return e.params.history.enabled = !1, void(e.params.hashNavigation.enabled = !0);
          var t = e.history;
          t.initialized = !0, t.paths = R.getPathValues(), (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || J.addEventListener("popstate", e.history.setHistoryPopState))
        }
      },
      destroy: function() {
        this.params.history.replaceState || J.removeEventListener("popstate", this.history.setHistoryPopState)
      },
      setHistoryPopState: function() {
        this.history.paths = R.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
      },
      getPathValues: function() {
        var e = J.location.pathname.slice(1).split("../../external.html?link=http://stukram.mikhailmasterov.com/").filter(function(e) {
            return "" !== e
          }),
          t = e.length;
        return {
          key: e[t - 2],
          value: e[t - 1]
        }
      },
      setHistory: function(e, t) {
        if (this.history.initialized && this.params.history.enabled) {
          var a = this.slides.eq(t),
            i = R.slugify(a.attr("data-history"));
          J.location.pathname.includes(e) || (i = e + "/" + i);
          var s = J.history.state;
          s && s.value === i || (this.params.history.replaceState ? J.history.replaceState({
            value: i
          }, null, i) : J.history.pushState({
            value: i
          }, null, i))
        }
      },
      slugify: function(e) {
        return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
      },
      scrollToSlide: function(e, t, a) {
        var i = this;
        if (t)
          for (var s = 0, r = i.slides.length; s < r; s += 1) {
            var n = i.slides.eq(s);
            if (R.slugify(n.attr("data-history")) === t && !n.hasClass(i.params.slideDuplicateClass)) {
              var o = n.index();
              i.slideTo(o, e, a)
            }
          } else i.slideTo(0, e, a)
      }
    },
    q = {
      onHashCange: function() {
        var e = this,
          t = f.location.hash.replace("#", "");
        if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
          var a = e.$wrapperEl.children("." + e.params.slideClass + '[data-hash="' + t + '"]').index();
          if (void 0 === a) return;
          e.slideTo(a)
        }
      },
      setHash: function() {
        var e = this;
        if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
          if (e.params.hashNavigation.replaceState && J.history && J.history.replaceState) J.history.replaceState(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash") || "");
          else {
            var t = e.slides.eq(e.activeIndex),
              a = t.attr("data-hash") || t.attr("data-history");
            f.location.hash = a || ""
          }
      },
      init: function() {
        var e = this;
        if (!(!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled)) {
          e.hashNavigation.initialized = !0;
          var t = f.location.hash.replace("#", "");
          if (t)
            for (var a = 0, i = e.slides.length; a < i; a += 1) {
              var s = e.slides.eq(a);
              if ((s.attr("data-hash") || s.attr("data-history")) === t && !s.hasClass(e.params.slideDuplicateClass)) {
                var r = s.index();
                e.slideTo(r, 0, e.params.runCallbacksOnInit, !0)
              }
            }
          e.params.hashNavigation.watchState && L(J).on("hashchange", e.hashNavigation.onHashCange)
        }
      },
      destroy: function() {
        this.params.hashNavigation.watchState && L(J).off("hashchange", this.hashNavigation.onHashCange)
      }
    },
    W = {
      run: function() {
        var e = this,
          t = e.slides.eq(e.activeIndex),
          a = e.params.autoplay.delay;
        t.attr("data-swiper-autoplay") && (a = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = ee.nextTick(function() {
          e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"))
        }, a)
      },
      start: function() {
        var e = this;
        return void 0 === e.autoplay.timeout && (!e.autoplay.running && (e.autoplay.running = !0, e.emit("autoplayStart"), e.autoplay.run(), !0))
      },
      stop: function() {
        var e = this;
        return !!e.autoplay.running && (void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0))
      },
      pause: function(e) {
        var t = this;
        t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1, t.autoplay.run())))
      }
    },
    j = {
      setTranslate: function() {
        for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) {
          var i = e.slides.eq(a),
            s = -i[0].swiperSlideOffset;
          e.params.virtualTranslate || (s -= e.translate);
          var r = 0;
          e.isHorizontal() || (r = s, s = 0);
          var n = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
          i.css({
            opacity: n
          }).transform("translate3d(" + s + "px, " + r + "px, 0px)")
        }
      },
      setTransition: function(e) {
        var a = this,
          t = a.slides,
          i = a.$wrapperEl;
        if (t.transition(e), a.params.virtualTranslate && 0 !== e) {
          var s = !1;
          t.transitionEnd(function() {
            if (!s && a && !a.destroyed) {
              s = !0, a.animating = !1;
              for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1) i.trigger(e[t])
            }
          })
        }
      }
    },
    U = {
      setTranslate: function() {
        var e, t = this,
          a = t.$el,
          i = t.$wrapperEl,
          s = t.slides,
          r = t.width,
          n = t.height,
          o = t.rtlTranslate,
          l = t.size,
          d = t.params.cubeEffect,
          p = t.isHorizontal(),
          c = t.virtual && t.params.virtual.enabled,
          u = 0;
        d.shadow && (p ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = L('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({
          height: r + "px"
        })) : 0 === (e = a.find(".swiper-cube-shadow")).length && (e = L('<div class="swiper-cube-shadow"></div>'), a.append(e)));
        for (var h = 0; h < s.length; h += 1) {
          var v = s.eq(h),
            f = h;
          c && (f = parseInt(v.attr("data-swiper-slide-index"), 10));
          var m = 90 * f,
            g = Math.floor(m / 360);
          o && (m = -m, g = Math.floor(-m / 360));
          var b = Math.max(Math.min(v[0].progress, 1), -1),
            w = 0,
            y = 0,
            x = 0;
          f % 4 == 0 ? (w = 4 * -g * l, x = 0) : (f - 1) % 4 == 0 ? (w = 0, x = 4 * -g * l) : (f - 2) % 4 == 0 ? (w = l + 4 * g * l, x = l) : (f - 3) % 4 == 0 && (w = -l, x = 3 * l + 4 * l * g), o && (w = -w), p || (y = w, w = 0);
          var T = "rotateX(" + (p ? 0 : -m) + "deg) rotateY(" + (p ? m : 0) + "deg) translate3d(" + w + "px, " + y + "px, " + x + "px)";
          if (b <= 1 && -1 < b && (u = 90 * f + 90 * b, o && (u = 90 * -f - 90 * b)), v.transform(T), d.slideShadows) {
            var E = p ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
              S = p ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
            0 === E.length && (E = L('<div class="swiper-slide-shadow-' + (p ? "left" : "top") + '"></div>'), v.append(E)), 0 === S.length && (S = L('<div class="swiper-slide-shadow-' + (p ? "right" : "bottom") + '"></div>'), v.append(S)), E.length && (E[0].style.opacity = Math.max(-b, 0)), S.length && (S[0].style.opacity = Math.max(b, 0))
          }
        }
        if (i.css({
            "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
            "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
            "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
            "transform-origin": "50% 50% -" + l / 2 + "px"
          }), d.shadow)
          if (p) e.transform("translate3d(0px, " + (r / 2 + d.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");
          else {
            var C = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90),
              M = 1.5 - (Math.sin(2 * C * Math.PI / 360) / 2 + Math.cos(2 * C * Math.PI / 360) / 2),
              z = d.shadowScale,
              P = d.shadowScale / M,
              k = d.shadowOffset;
            e.transform("scale3d(" + z + ", 1, " + P + ") translate3d(0px, " + (n / 2 + k) + "px, " + -n / 2 / P + "px) rotateX(-90deg)")
          } var $ = I.isSafari || I.isUiWebView ? -l / 2 : 0;
        i.transform("translate3d(0px,0," + $ + "px) rotateX(" + (t.isHorizontal() ? 0 : u) + "deg) rotateY(" + (t.isHorizontal() ? -u : 0) + "deg)")
      },
      setTransition: function(e) {
        var t = this.$el;
        this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
      }
    },
    K = {
      setTranslate: function() {
        for (var e = this, t = e.slides, a = e.rtlTranslate, i = 0; i < t.length; i += 1) {
          var s = t.eq(i),
            r = s[0].progress;
          e.params.flipEffect.limitRotation && (r = Math.max(Math.min(s[0].progress, 1), -1));
          var n = -180 * r,
            o = 0,
            l = -s[0].swiperSlideOffset,
            d = 0;
          if (e.isHorizontal() ? a && (n = -n) : (d = l, o = -n, n = l = 0), s[0].style.zIndex = -Math.abs(Math.round(r)) + t.length, e.params.flipEffect.slideShadows) {
            var p = e.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
              c = e.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
            0 === p.length && (p = L('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "left" : "top") + '"></div>'), s.append(p)), 0 === c.length && (c = L('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(c)), p.length && (p[0].style.opacity = Math.max(-r, 0)), c.length && (c[0].style.opacity = Math.max(r, 0))
          }
          s.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)")
        }
      },
      setTransition: function(e) {
        var a = this,
          t = a.slides,
          i = a.activeIndex,
          s = a.$wrapperEl;
        if (t.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), a.params.virtualTranslate && 0 !== e) {
          var r = !1;
          t.eq(i).transitionEnd(function() {
            if (!r && a && !a.destroyed) {
              r = !0, a.animating = !1;
              for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1) s.trigger(e[t])
            }
          })
        }
      }
    },
    _ = {
      setTranslate: function() {
        for (var e = this, t = e.width, a = e.height, i = e.slides, s = e.$wrapperEl, r = e.slidesSizesGrid, n = e.params.coverflowEffect, o = e.isHorizontal(), l = e.translate, d = o ? t / 2 - l : a / 2 - l, p = o ? n.rotate : -n.rotate, c = n.depth, u = 0, h = i.length; u < h; u += 1) {
          var v = i.eq(u),
            f = r[u],
            m = (d - v[0].swiperSlideOffset - f / 2) / f * n.modifier,
            g = o ? p * m : 0,
            b = o ? 0 : p * m,
            w = -c * Math.abs(m),
            y = o ? 0 : n.stretch * m,
            x = o ? n.stretch * m : 0;
          Math.abs(x) < .001 && (x = 0), Math.abs(y) < .001 && (y = 0), Math.abs(w) < .001 && (w = 0), Math.abs(g) < .001 && (g = 0), Math.abs(b) < .001 && (b = 0);
          var T = "translate3d(" + x + "px," + y + "px," + w + "px)  rotateX(" + b + "deg) rotateY(" + g + "deg)";
          if (v.transform(T), v[0].style.zIndex = 1 - Math.abs(Math.round(m)), n.slideShadows) {
            var E = o ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
              S = o ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
            0 === E.length && (E = L('<div class="swiper-slide-shadow-' + (o ? "left" : "top") + '"></div>'), v.append(E)), 0 === S.length && (S = L('<div class="swiper-slide-shadow-' + (o ? "right" : "bottom") + '"></div>'), v.append(S)), E.length && (E[0].style.opacity = 0 < m ? m : 0), S.length && (S[0].style.opacity = 0 < -m ? -m : 0)
          }
        }(te.pointerEvents || te.prefixedPointerEvents) && (s[0].style.perspectiveOrigin = d + "px 50%")
      },
      setTransition: function(e) {
        this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
      }
    },
    Z = {
      init: function() {
        var e = this,
          t = e.params.thumbs,
          a = e.constructor;
        t.swiper instanceof a ? (e.thumbs.swiper = t.swiper, ee.extend(e.thumbs.swiper.originalParams, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1
        }), ee.extend(e.thumbs.swiper.params, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1
        })) : ee.isObject(t.swiper) && (e.thumbs.swiper = new a(ee.extend({}, t.swiper, {
          watchSlidesVisibility: !0,
          watchSlidesProgress: !0,
          slideToClickedSlide: !1
        })), e.thumbs.swiperCreated = !0), e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", e.thumbs.onThumbClick)
      },
      onThumbClick: function() {
        var e = this,
          t = e.thumbs.swiper;
        if (t) {
          var a = t.clickedIndex,
            i = t.clickedSlide;
          if (!(i && L(i).hasClass(e.params.thumbs.slideThumbActiveClass) || null == a)) {
            var s;
            if (s = t.params.loop ? parseInt(L(t.clickedSlide).attr("data-swiper-slide-index"), 10) : a, e.params.loop) {
              var r = e.activeIndex;
              e.slides.eq(r).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, r = e.activeIndex);
              var n = e.slides.eq(r).prevAll('[data-swiper-slide-index="' + s + '"]').eq(0).index(),
                o = e.slides.eq(r).nextAll('[data-swiper-slide-index="' + s + '"]').eq(0).index();
              s = void 0 === n ? o : void 0 === o ? n : o - r < r - n ? o : n
            }
            e.slideTo(s)
          }
        }
      },
      update: function(e) {
        var t = this,
          a = t.thumbs.swiper;
        if (a) {
          var i = "auto" === a.params.slidesPerView ? a.slidesPerViewDynamic() : a.params.slidesPerView;
          if (t.realIndex !== a.realIndex) {
            var s, r = a.activeIndex;
            if (a.params.loop) {
              a.slides.eq(r).hasClass(a.params.slideDuplicateClass) && (a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft, r = a.activeIndex);
              var n = a.slides.eq(r).prevAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index(),
                o = a.slides.eq(r).nextAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index();
              s = void 0 === n ? o : void 0 === o ? n : o - r == r - n ? r : o - r < r - n ? o : n
            } else s = t.realIndex;
            a.visibleSlidesIndexes.indexOf(s) < 0 && (a.params.centeredSlides ? s = r < s ? s - Math.floor(i / 2) + 1 : s + Math.floor(i / 2) - 1 : r < s && (s = s - i + 1), a.slideTo(s, e ? 0 : void 0))
          }
          var l = 1,
            d = t.params.thumbs.slideThumbActiveClass;
          if (1 < t.params.slidesPerView && !t.params.centeredSlides && (l = t.params.slidesPerView), a.slides.removeClass(d), a.params.loop)
            for (var p = 0; p < l; p += 1) a.$wrapperEl.children('[data-swiper-slide-index="' + (t.realIndex + p) + '"]').addClass(d);
          else
            for (var c = 0; c < l; c += 1) a.slides.eq(t.realIndex + c).addClass(d)
        }
      }
    },
    Q = [E, S, C, M, P, $, O, {
      name: "mousewheel",
      params: {
        mousewheel: {
          enabled: !1,
          releaseOnEdges: !1,
          invert: !1,
          forceToAxis: !1,
          sensitivity: 1,
          eventsTarged: "container"
        }
      },
      create: function() {
        var e = this;
        ee.extend(e, {
          mousewheel: {
            enabled: !1,
            enable: A.enable.bind(e),
            disable: A.disable.bind(e),
            handle: A.handle.bind(e),
            handleMouseEnter: A.handleMouseEnter.bind(e),
            handleMouseLeave: A.handleMouseLeave.bind(e),
            lastScrollTime: ee.now()
          }
        })
      },
      on: {
        init: function() {
          this.params.mousewheel.enabled && this.mousewheel.enable()
        },
        destroy: function() {
          this.mousewheel.enabled && this.mousewheel.disable()
        }
      }
    }, {
      name: "navigation",
      params: {
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "swiper-button-disabled",
          hiddenClass: "swiper-button-hidden",
          lockClass: "swiper-button-lock"
        }
      },
      create: function() {
        var e = this;
        ee.extend(e, {
          navigation: {
            init: H.init.bind(e),
            update: H.update.bind(e),
            destroy: H.destroy.bind(e),
            onNextClick: H.onNextClick.bind(e),
            onPrevClick: H.onPrevClick.bind(e)
          }
        })
      },
      on: {
        init: function() {
          this.navigation.init(), this.navigation.update()
        },
        toEdge: function() {
          this.navigation.update()
        },
        fromEdge: function() {
          this.navigation.update()
        },
        destroy: function() {
          this.navigation.destroy()
        },
        click: function(e) {
          var t, a = this,
            i = a.navigation,
            s = i.$nextEl,
            r = i.$prevEl;
          !a.params.navigation.hideOnClick || L(e.target).is(r) || L(e.target).is(s) || (s ? t = s.hasClass(a.params.navigation.hiddenClass) : r && (t = r.hasClass(a.params.navigation.hiddenClass)), !0 === t ? a.emit("navigationShow", a) : a.emit("navigationHide", a), s && s.toggleClass(a.params.navigation.hiddenClass), r && r.toggleClass(a.params.navigation.hiddenClass))
        }
      }
    }, {
      name: "pagination",
      params: {
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: "bullets",
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: function(e) {
            return e
          },
          formatFractionTotal: function(e) {
            return e
          },
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
          modifierClass: "swiper-pagination-",
          currentClass: "swiper-pagination-current",
          totalClass: "swiper-pagination-total",
          hiddenClass: "swiper-pagination-hidden",
          progressbarFillClass: "swiper-pagination-progressbar-fill",
          progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
          clickableClass: "swiper-pagination-clickable",
          lockClass: "swiper-pagination-lock"
        }
      },
      create: function() {
        var e = this;
        ee.extend(e, {
          pagination: {
            init: N.init.bind(e),
            render: N.render.bind(e),
            update: N.update.bind(e),
            destroy: N.destroy.bind(e),
            dynamicBulletIndex: 0
          }
        })
      },
      on: {
        init: function() {
          this.pagination.init(), this.pagination.render(), this.pagination.update()
        },
        activeIndexChange: function() {
          this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update()
        },
        snapIndexChange: function() {
          this.params.loop || this.pagination.update()
        },
        slidesLengthChange: function() {
          this.params.loop && (this.pagination.render(), this.pagination.update())
        },
        snapGridLengthChange: function() {
          this.params.loop || (this.pagination.render(), this.pagination.update())
        },
        destroy: function() {
          this.pagination.destroy()
        },
        click: function(e) {
          var t = this;
          t.params.pagination.el && t.params.pagination.hideOnClick && 0 < t.pagination.$el.length && !L(e.target).hasClass(t.params.pagination.bulletClass) && (!0 === t.pagination.$el.hasClass(t.params.pagination.hiddenClass) ? t.emit("paginationShow", t) : t.emit("paginationHide", t), t.pagination.$el.toggleClass(t.params.pagination.hiddenClass))
        }
      }
    }, {
      name: "scrollbar",
      params: {
        scrollbar: {
          el: null,
          dragSize: "auto",
          hide: !1,
          draggable: !1,
          snapOnRelease: !0,
          lockClass: "swiper-scrollbar-lock",
          dragClass: "swiper-scrollbar-drag"
        }
      },
      create: function() {
        var e = this;
        ee.extend(e, {
          scrollbar: {
            init: G.init.bind(e),
            destroy: G.destroy.bind(e),
            updateSize: G.updateSize.bind(e),
            setTranslate: G.setTranslate.bind(e),
            setTransition: G.setTransition.bind(e),
            enableDraggable: G.enableDraggable.bind(e),
            disableDraggable: G.disableDraggable.bind(e),
            setDragPosition: G.setDragPosition.bind(e),
            onDragStart: G.onDragStart.bind(e),
            onDragMove: G.onDragMove.bind(e),
            onDragEnd: G.onDragEnd.bind(e),
            isTouched: !1,
            timeout: null,
            dragTimeout: null
          }
        })
      },
      on: {
        init: function() {
          this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate()
        },
        update: function() {
          this.scrollbar.updateSize()
        },
        resize: function() {
          this.scrollbar.updateSize()
        },
        observerUpdate: function() {
          this.scrollbar.updateSize()
        },
        setTranslate: function() {
          this.scrollbar.setTranslate()
        },
        setTransition: function(e) {
          this.scrollbar.setTransition(e)
        },
        destroy: function() {
          this.scrollbar.destroy()
        }
      }
    }, {
      name: "parallax",
      params: {
        parallax: {
          enabled: !1
        }
      },
      create: function() {
        ee.extend(this, {
          parallax: {
            setTransform: B.setTransform.bind(this),
            setTranslate: B.setTranslate.bind(this),
            setTransition: B.setTransition.bind(this)
          }
        })
      },
      on: {
        beforeInit: function() {
          this.params.parallax.enabled && (this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
        },
        init: function() {
          this.params.parallax.enabled && this.parallax.setTranslate()
        },
        setTranslate: function() {
          this.params.parallax.enabled && this.parallax.setTranslate()
        },
        setTransition: function(e) {
          this.params.parallax.enabled && this.parallax.setTransition(e)
        }
      }
    }, {
      name: "zoom",
      params: {
        zoom: {
          enabled: !1,
          maxRatio: 3,
          minRatio: 1,
          toggle: !0,
          containerClass: "swiper-zoom-container",
          zoomedSlideClass: "swiper-slide-zoomed"
        }
      },
      create: function() {
        var i = this,
          t = {
            enabled: !1,
            scale: 1,
            currentScale: 1,
            isScaling: !1,
            gesture: {
              $slideEl: void 0,
              slideWidth: void 0,
              slideHeight: void 0,
              $imageEl: void 0,
              $imageWrapEl: void 0,
              maxRatio: 3
            },
            image: {
              isTouched: void 0,
              isMoved: void 0,
              currentX: void 0,
              currentY: void 0,
              minX: void 0,
              minY: void 0,
              maxX: void 0,
              maxY: void 0,
              width: void 0,
              height: void 0,
              startX: void 0,
              startY: void 0,
              touchesStart: {},
              touchesCurrent: {}
            },
            velocity: {
              x: void 0,
              y: void 0,
              prevPositionX: void 0,
              prevPositionY: void 0,
              prevTime: void 0
            }
          };
        "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(e) {
          t[e] = X[e].bind(i)
        }), ee.extend(i, {
          zoom: t
        });
        var s = 1;
        Object.defineProperty(i.zoom, "scale", {
          get: function() {
            return s
          },
          set: function(e) {
            if (s !== e) {
              var t = i.zoom.gesture.$imageEl ? i.zoom.gesture.$imageEl[0] : void 0,
                a = i.zoom.gesture.$slideEl ? i.zoom.gesture.$slideEl[0] : void 0;
              i.emit("zoomChange", e, t, a)
            }
            s = e
          }
        })
      },
      on: {
        init: function() {
          this.params.zoom.enabled && this.zoom.enable()
        },
        destroy: function() {
          this.zoom.disable()
        },
        touchStart: function(e) {
          this.zoom.enabled && this.zoom.onTouchStart(e)
        },
        touchEnd: function(e) {
          this.zoom.enabled && this.zoom.onTouchEnd(e)
        },
        doubleTap: function(e) {
          this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
        },
        transitionEnd: function() {
          this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
        }
      }
    }, {
      name: "lazy",
      params: {
        lazy: {
          enabled: !1,
          loadPrevNext: !1,
          loadPrevNextAmount: 1,
          loadOnTransitionStart: !1,
          elementClass: "swiper-lazy",
          loadingClass: "swiper-lazy-loading",
          loadedClass: "swiper-lazy-loaded",
          preloaderClass: "swiper-lazy-preloader"
        }
      },
      create: function() {
        ee.extend(this, {
          lazy: {
            initialImageLoaded: !1,
            load: Y.load.bind(this),
            loadInSlide: Y.loadInSlide.bind(this)
          }
        })
      },
      on: {
        beforeInit: function() {
          this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
        },
        init: function() {
          this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
        },
        scroll: function() {
          this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
        },
        resize: function() {
          this.params.lazy.enabled && this.lazy.load()
        },
        scrollbarDragMove: function() {
          this.params.lazy.enabled && this.lazy.load()
        },
        transitionStart: function() {
          var e = this;
          e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load()
        },
        transitionEnd: function() {
          this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
        }
      }
    }, {
      name: "controller",
      params: {
        controller: {
          control: void 0,
          inverse: !1,
          by: "slide"
        }
      },
      create: function() {
        var e = this;
        ee.extend(e, {
          controller: {
            control: e.params.controller.control,
            getInterpolateFunction: V.getInterpolateFunction.bind(e),
            setTranslate: V.setTranslate.bind(e),
            setTransition: V.setTransition.bind(e)
          }
        })
      },
      on: {
        update: function() {
          this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
        },
        resize: function() {
          this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
        },
        observerUpdate: function() {
          this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
        },
        setTranslate: function(e, t) {
          this.controller.control && this.controller.setTranslate(e, t)
        },
        setTransition: function(e, t) {
          this.controller.control && this.controller.setTransition(e, t)
        }
      }
    }, {
      name: "a11y",
      params: {
        a11y: {
          enabled: !0,
          notificationClass: "swiper-notification",
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
          firstSlideMessage: "This is the first slide",
          lastSlideMessage: "This is the last slide",
          paginationBulletMessage: "Go to slide {{index}}"
        }
      },
      create: function() {
        var t = this;
        ee.extend(t, {
          a11y: {
            liveRegion: L('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
          }
        }), Object.keys(F).forEach(function(e) {
          t.a11y[e] = F[e].bind(t)
        })
      },
      on: {
        init: function() {
          this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
        },
        toEdge: function() {
          this.params.a11y.enabled && this.a11y.updateNavigation()
        },
        fromEdge: function() {
          this.params.a11y.enabled && this.a11y.updateNavigation()
        },
        paginationUpdate: function() {
          this.params.a11y.enabled && this.a11y.updatePagination()
        },
        destroy: function() {
          this.params.a11y.enabled && this.a11y.destroy()
        }
      }
    }, {
      name: "history",
      params: {
        history: {
          enabled: !1,
          replaceState: !1,
          key: "slides"
        }
      },
      create: function() {
        var e = this;
        ee.extend(e, {
          history: {
            init: R.init.bind(e),
            setHistory: R.setHistory.bind(e),
            setHistoryPopState: R.setHistoryPopState.bind(e),
            scrollToSlide: R.scrollToSlide.bind(e),
            destroy: R.destroy.bind(e)
          }
        })
      },
      on: {
        init: function() {
          this.params.history.enabled && this.history.init()
        },
        destroy: function() {
          this.params.history.enabled && this.history.destroy()
        },
        transitionEnd: function() {
          this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
        }
      }
    }, {
      name: "hash-navigation",
      params: {
        hashNavigation: {
          enabled: !1,
          replaceState: !1,
          watchState: !1
        }
      },
      create: function() {
        var e = this;
        ee.extend(e, {
          hashNavigation: {
            initialized: !1,
            init: q.init.bind(e),
            destroy: q.destroy.bind(e),
            setHash: q.setHash.bind(e),
            onHashCange: q.onHashCange.bind(e)
          }
        })
      },
      on: {
        init: function() {
          this.params.hashNavigation.enabled && this.hashNavigation.init()
        },
        destroy: function() {
          this.params.hashNavigation.enabled && this.hashNavigation.destroy()
        },
        transitionEnd: function() {
          this.hashNavigation.initialized && this.hashNavigation.setHash()
        }
      }
    }, {
      name: "autoplay",
      params: {
        autoplay: {
          enabled: !1,
          delay: 3e3,
          waitForTransition: !0,
          disableOnInteraction: !0,
          stopOnLastSlide: !1,
          reverseDirection: !1
        }
      },
      create: function() {
        var t = this;
        ee.extend(t, {
          autoplay: {
            running: !1,
            paused: !1,
            run: W.run.bind(t),
            start: W.start.bind(t),
            stop: W.stop.bind(t),
            pause: W.pause.bind(t),
            onTransitionEnd: function(e) {
              t && !t.destroyed && t.$wrapperEl && e.target === this && (t.$wrapperEl[0].removeEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].removeEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd), t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop())
            }
          }
        })
      },
      on: {
        init: function() {
          this.params.autoplay.enabled && this.autoplay.start()
        },
        beforeTransitionStart: function(e, t) {
          this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
        },
        sliderFirstMove: function() {
          this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
        },
        destroy: function() {
          this.autoplay.running && this.autoplay.stop()
        }
      }
    }, {
      name: "effect-fade",
      params: {
        fadeEffect: {
          crossFade: !1
        }
      },
      create: function() {
        ee.extend(this, {
          fadeEffect: {
            setTranslate: j.setTranslate.bind(this),
            setTransition: j.setTransition.bind(this)
          }
        })
      },
      on: {
        beforeInit: function() {
          var e = this;
          if ("fade" === e.params.effect) {
            e.classNames.push(e.params.containerModifierClass + "fade");
            var t = {
              slidesPerView: 1,
              slidesPerColumn: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              spaceBetween: 0,
              virtualTranslate: !0
            };
            ee.extend(e.params, t), ee.extend(e.originalParams, t)
          }
        },
        setTranslate: function() {
          "fade" === this.params.effect && this.fadeEffect.setTranslate()
        },
        setTransition: function(e) {
          "fade" === this.params.effect && this.fadeEffect.setTransition(e)
        }
      }
    }, {
      name: "effect-cube",
      params: {
        cubeEffect: {
          slideShadows: !0,
          shadow: !0,
          shadowOffset: 20,
          shadowScale: .94
        }
      },
      create: function() {
        ee.extend(this, {
          cubeEffect: {
            setTranslate: U.setTranslate.bind(this),
            setTransition: U.setTransition.bind(this)
          }
        })
      },
      on: {
        beforeInit: function() {
          var e = this;
          if ("cube" === e.params.effect) {
            e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d");
            var t = {
              slidesPerView: 1,
              slidesPerColumn: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              resistanceRatio: 0,
              spaceBetween: 0,
              centeredSlides: !1,
              virtualTranslate: !0
            };
            ee.extend(e.params, t), ee.extend(e.originalParams, t)
          }
        },
        setTranslate: function() {
          "cube" === this.params.effect && this.cubeEffect.setTranslate()
        },
        setTransition: function(e) {
          "cube" === this.params.effect && this.cubeEffect.setTransition(e)
        }
      }
    }, {
      name: "effect-flip",
      params: {
        flipEffect: {
          slideShadows: !0,
          limitRotation: !0
        }
      },
      create: function() {
        ee.extend(this, {
          flipEffect: {
            setTranslate: K.setTranslate.bind(this),
            setTransition: K.setTransition.bind(this)
          }
        })
      },
      on: {
        beforeInit: function() {
          var e = this;
          if ("flip" === e.params.effect) {
            e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d");
            var t = {
              slidesPerView: 1,
              slidesPerColumn: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              spaceBetween: 0,
              virtualTranslate: !0
            };
            ee.extend(e.params, t), ee.extend(e.originalParams, t)
          }
        },
        setTranslate: function() {
          "flip" === this.params.effect && this.flipEffect.setTranslate()
        },
        setTransition: function(e) {
          "flip" === this.params.effect && this.flipEffect.setTransition(e)
        }
      }
    }, {
      name: "effect-coverflow",
      params: {
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: !0
        }
      },
      create: function() {
        ee.extend(this, {
          coverflowEffect: {
            setTranslate: _.setTranslate.bind(this),
            setTransition: _.setTransition.bind(this)
          }
        })
      },
      on: {
        beforeInit: function() {
          var e = this;
          "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
        },
        setTranslate: function() {
          "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
        },
        setTransition: function(e) {
          "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
        }
      }
    }, {
      name: "thumbs",
      params: {
        thumbs: {
          swiper: null,
          slideThumbActiveClass: "swiper-slide-thumb-active",
          thumbsContainerClass: "swiper-container-thumbs"
        }
      },
      create: function() {
        ee.extend(this, {
          thumbs: {
            swiper: null,
            init: Z.init.bind(this),
            update: Z.update.bind(this),
            onThumbClick: Z.onThumbClick.bind(this)
          }
        })
      },
      on: {
        beforeInit: function() {
          var e = this.params.thumbs;
          e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0))
        },
        slideChange: function() {
          this.thumbs.swiper && this.thumbs.update()
        },
        update: function() {
          this.thumbs.swiper && this.thumbs.update()
        },
        resize: function() {
          this.thumbs.swiper && this.thumbs.update()
        },
        observerUpdate: function() {
          this.thumbs.swiper && this.thumbs.update()
        },
        setTransition: function(e) {
          var t = this.thumbs.swiper;
          t && t.setTransition(e)
        },
        beforeDestroy: function() {
          var e = this.thumbs.swiper;
          e && this.thumbs.swiperCreated && e && e.destroy()
        }
      }
    }];
  return void 0 === T.use && (T.use = T.Class.use, T.installModule = T.Class.installModule), T.use(Q), T
});

/*! ScrollMagic v2.0.7 | (c) 2019 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */
! function(e, t) {
  "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.ScrollMagic = t()
}(this, function() {
  "use strict";
  var _ = function() {};
  _.version = "2.0.7", window.addEventListener("mousewheel", function() {});
  var P = "data-scrollmagic-pin-spacer";
  _.Controller = function(e) {
    var n, r, i = "REVERSE",
      t = "PAUSED",
      o = z.defaults,
      s = this,
      a = R.extend({}, o, e),
      l = [],
      c = !1,
      f = 0,
      u = t,
      d = !0,
      h = 0,
      p = !0,
      g = function() {
        0 < a.refreshInterval && (r = window.setTimeout(E, a.refreshInterval))
      },
      v = function() {
        return a.vertical ? R.get.scrollTop(a.container) : R.get.scrollLeft(a.container)
      },
      m = function() {
        return a.vertical ? R.get.height(a.container) : R.get.width(a.container)
      },
      w = this._setScrollPos = function(e) {
        a.vertical ? d ? window.scrollTo(R.get.scrollLeft(), e) : a.container.scrollTop = e : d ? window.scrollTo(e, R.get.scrollTop()) : a.container.scrollLeft = e
      },
      y = function() {
        if (p && c) {
          var e = R.type.Array(c) ? c : l.slice(0);
          c = !1;
          var t = f,
            n = (f = s.scrollPos()) - t;
          0 !== n && (u = 0 < n ? "FORWARD" : i), u === i && e.reverse(), e.forEach(function(e, t) {
            e.update(!0)
          })
        }
      },
      S = function() {
        n = R.rAF(y)
      },
      b = function(e) {
        "resize" == e.type && (h = m(), u = t), !0 !== c && (c = !0, S())
      },
      E = function() {
        if (!d && h != m()) {
          var t;
          try {
            t = new Event("resize", {
              bubbles: !1,
              cancelable: !1
            })
          } catch (e) {
            (t = document.createEvent("Event")).initEvent("resize", !1, !1)
          }
          a.container.dispatchEvent(t)
        }
        l.forEach(function(e, t) {
          e.refresh()
        }), g()
      };
    this._options = a;
    var x = function(e) {
      if (e.length <= 1) return e;
      var t = e.slice(0);
      return t.sort(function(e, t) {
        return e.scrollOffset() > t.scrollOffset() ? 1 : -1
      }), t
    };
    return this.addScene = function(e) {
        if (R.type.Array(e)) e.forEach(function(e, t) {
          s.addScene(e)
        });
        else if (e instanceof _.Scene)
          if (e.controller() !== s) e.addTo(s);
          else if (l.indexOf(e) < 0)
          for (var t in l.push(e), l = x(l), e.on("shift.controller_sort", function() {
              l = x(l)
            }), a.globalSceneOptions) e[t] && e[t].call(e, a.globalSceneOptions[t]);
        return s
      }, this.removeScene = function(e) {
        if (R.type.Array(e)) e.forEach(function(e, t) {
          s.removeScene(e)
        });
        else {
          var t = l.indexOf(e); - 1 < t && (e.off("shift.controller_sort"), l.splice(t, 1), e.remove())
        }
        return s
      }, this.updateScene = function(e, n) {
        return R.type.Array(e) ? e.forEach(function(e, t) {
          s.updateScene(e, n)
        }) : n ? e.update(!0) : !0 !== c && e instanceof _.Scene && (-1 == (c = c || []).indexOf(e) && c.push(e), c = x(c), S()), s
      }, this.update = function(e) {
        return b({
          type: "resize"
        }), e && y(), s
      }, this.scrollTo = function(e, t) {
        if (R.type.Number(e)) w.call(a.container, e, t);
        else if (e instanceof _.Scene) e.controller() === s && s.scrollTo(e.scrollOffset(), t);
        else if (R.type.Function(e)) w = e;
        else {
          var n = R.get.elements(e)[0];
          if (n) {
            for (; n.parentNode.hasAttribute(P);) n = n.parentNode;
            var r = a.vertical ? "top" : "left",
              i = R.get.offset(a.container),
              o = R.get.offset(n);
            d || (i[r] -= s.scrollPos()), s.scrollTo(o[r] - i[r], t)
          }
        }
        return s
      }, this.scrollPos = function(e) {
        return arguments.length ? (R.type.Function(e) && (v = e), s) : v.call(s)
      }, this.info = function(e) {
        var t = {
          size: h,
          vertical: a.vertical,
          scrollPos: f,
          scrollDirection: u,
          container: a.container,
          isDocument: d
        };
        return arguments.length ? void 0 !== t[e] ? t[e] : void 0 : t
      }, this.loglevel = function(e) {
        return s
      }, this.enabled = function(e) {
        return arguments.length ? (p != e && (p = !!e, s.updateScene(l, !0)), s) : p
      }, this.destroy = function(e) {
        window.clearTimeout(r);
        for (var t = l.length; t--;) l[t].destroy(e);
        return a.container.removeEventListener("resize", b), a.container.removeEventListener("scroll", b), R.cAF(n), null
      },
      function() {
        for (var e in a) o.hasOwnProperty(e) || delete a[e];
        if (a.container = R.get.elements(a.container)[0], !a.container) throw "ScrollMagic.Controller init failed.";
        (d = a.container === window || a.container === document.body || !document.body.contains(a.container)) && (a.container = window), h = m(), a.container.addEventListener("resize", b), a.container.addEventListener("scroll", b);
        var t = parseInt(a.refreshInterval, 10);
        a.refreshInterval = R.type.Number(t) ? t : o.refreshInterval, g()
      }(), s
  };
  var z = {
    defaults: {
      container: window,
      vertical: !0,
      globalSceneOptions: {},
      loglevel: 2,
      refreshInterval: 100
    }
  };
  _.Controller.addOption = function(e, t) {
    z.defaults[e] = t
  }, _.Controller.extend = function(e) {
    var t = this;
    _.Controller = function() {
      return t.apply(this, arguments), this.$super = R.extend({}, this), e.apply(this, arguments) || this
    }, R.extend(_.Controller, t), _.Controller.prototype = t.prototype, _.Controller.prototype.constructor = _.Controller
  }, _.Scene = function(e) {
    var n, l, c = "BEFORE",
      f = "DURING",
      u = "AFTER",
      r = D.defaults,
      d = this,
      h = R.extend({}, r, e),
      p = c,
      g = 0,
      a = {
        start: 0,
        end: 0
      },
      v = 0,
      i = !0,
      s = {};
    this.on = function(e, i) {
      return R.type.Function(i) && (e = e.trim().split(" ")).forEach(function(e) {
        var t = e.split("."),
          n = t[0],
          r = t[1];
        "*" != n && (s[n] || (s[n] = []), s[n].push({
          namespace: r || "",
          callback: i
        }))
      }), d
    }, this.off = function(e, o) {
      return e && (e = e.trim().split(" ")).forEach(function(e, t) {
        var n = e.split("."),
          r = n[0],
          i = n[1] || "";
        ("*" === r ? Object.keys(s) : [r]).forEach(function(e) {
          for (var t = s[e] || [], n = t.length; n--;) {
            var r = t[n];
            !r || i !== r.namespace && "*" !== i || o && o != r.callback || t.splice(n, 1)
          }
          t.length || delete s[e]
        })
      }), d
    }, this.trigger = function(e, n) {
      if (e) {
        var t = e.trim().split("."),
          r = t[0],
          i = t[1],
          o = s[r];
        o && o.forEach(function(e, t) {
          i && i !== e.namespace || e.callback.call(d, new _.Event(r, e.namespace, d, n))
        })
      }
      return d
    }, d.on("change.internal", function(e) {
      "loglevel" !== e.what && "tweenChanges" !== e.what && ("triggerElement" === e.what ? y() : "reverse" === e.what && d.update())
    }).on("shift.internal", function(e) {
      t(), d.update()
    }), this.addTo = function(e) {
      return e instanceof _.Controller && l != e && (l && l.removeScene(d), l = e, E(), o(!0), y(!0), t(), l.info("container").addEventListener("resize", S), e.addScene(d), d.trigger("add", {
        controller: l
      }), d.update()), d
    }, this.enabled = function(e) {
      return arguments.length ? (i != e && (i = !!e, d.update(!0)), d) : i
    }, this.remove = function() {
      if (l) {
        l.info("container").removeEventListener("resize", S);
        var e = l;
        l = void 0, e.removeScene(d), d.trigger("remove")
      }
      return d
    }, this.destroy = function(e) {
      return d.trigger("destroy", {
        reset: e
      }), d.remove(), d.off("*.*"), null
    }, this.update = function(e) {
      if (l)
        if (e)
          if (l.enabled() && i) {
            var t, n = l.info("scrollPos");
            t = 0 < h.duration ? (n - a.start) / (a.end - a.start) : n >= a.start ? 1 : 0, d.trigger("update", {
              startPos: a.start,
              endPos: a.end,
              scrollPos: n
            }), d.progress(t)
          } else m && p === f && C(!0);
      else l.updateScene(d, !1);
      return d
    }, this.refresh = function() {
      return o(), y(), d
    }, this.progress = function(e) {
      if (arguments.length) {
        var t = !1,
          n = p,
          r = l ? l.info("scrollDirection") : "PAUSED",
          i = h.reverse || g <= e;
        if (0 === h.duration ? (t = g != e, p = 0 === (g = e < 1 && i ? 0 : 1) ? c : f) : e < 0 && p !== c && i ? (p = c, t = !(g = 0)) : 0 <= e && e < 1 && i ? (g = e, p = f, t = !0) : 1 <= e && p !== u ? (g = 1, p = u, t = !0) : p !== f || i || C(), t) {
          var o = {
              progress: g,
              state: p,
              scrollDirection: r
            },
            s = p != n,
            a = function(e) {
              d.trigger(e, o)
            };
          s && n !== f && (a("enter"), a(n === c ? "start" : "end")), a("progress"), s && p !== f && (a(p === c ? "start" : "end"), a("leave"))
        }
        return d
      }
      return g
    };
    var m, w, t = function() {
        a = {
          start: v + h.offset
        }, l && h.triggerElement && (a.start -= l.info("size") * h.triggerHook), a.end = a.start + h.duration
      },
      o = function(e) {
        if (n) {
          var t = "duration";
          x(t, n.call(d)) && !e && (d.trigger("change", {
            what: t,
            newval: h[t]
          }), d.trigger("shift", {
            reason: t
          }))
        }
      },
      y = function(e) {
        var t = 0,
          n = h.triggerElement;
        if (l && (n || 0 < v)) {
          if (n)
            if (n.parentNode) {
              for (var r = l.info(), i = R.get.offset(r.container), o = r.vertical ? "top" : "left"; n.parentNode.hasAttribute(P);) n = n.parentNode;
              var s = R.get.offset(n);
              r.isDocument || (i[o] -= l.scrollPos()), t = s[o] - i[o]
            } else d.triggerElement(void 0);
          var a = t != v;
          v = t, a && !e && d.trigger("shift", {
            reason: "triggerElementPosition"
          })
        }
      },
      S = function(e) {
        0 < h.triggerHook && d.trigger("shift", {
          reason: "containerResize"
        })
      },
      b = R.extend(D.validate, {
        duration: function(t) {
          if (R.type.String(t) && t.match(/^(\.|\d)*\d+%$/)) {
            var e = parseFloat(t) / 100;
            t = function() {
              return l ? l.info("size") * e : 0
            }
          }
          if (R.type.Function(t)) {
            n = t;
            try {
              t = parseFloat(n.call(d))
            } catch (e) {
              t = -1
            }
          }
          if (t = parseFloat(t), !R.type.Number(t) || t < 0) throw n && (n = void 0), 0;
          return t
        }
      }),
      E = function(e) {
        (e = arguments.length ? [e] : Object.keys(b)).forEach(function(t, e) {
          var n;
          if (b[t]) try {
            n = b[t](h[t])
          } catch (e) {
            n = r[t]
          } finally {
            h[t] = n
          }
        })
      },
      x = function(e, t) {
        var n = !1,
          r = h[e];
        return h[e] != t && (h[e] = t, E(e), n = r != h[e]), n
      },
      z = function(t) {
        d[t] || (d[t] = function(e) {
          return arguments.length ? ("duration" === t && (n = void 0), x(t, e) && (d.trigger("change", {
            what: t,
            newval: h[t]
          }), -1 < D.shifts.indexOf(t) && d.trigger("shift", {
            reason: t
          })), d) : h[t]
        })
      };
    this.controller = function() {
      return l
    }, this.state = function() {
      return p
    }, this.scrollOffset = function() {
      return a.start
    }, this.triggerPosition = function() {
      var e = h.offset;
      return l && (h.triggerElement ? e += v : e += l.info("size") * d.triggerHook()), e
    }, d.on("shift.internal", function(e) {
      var t = "duration" === e.reason;
      (p === u && t || p === f && 0 === h.duration) && C(), t && F()
    }).on("progress.internal", function(e) {
      C()
    }).on("add.internal", function(e) {
      F()
    }).on("destroy.internal", function(e) {
      d.removePin(e.reset)
    });
    var C = function(e) {
        if (m && l) {
          var t = l.info(),
            n = w.spacer.firstChild;
          if (e || p !== f) {
            var r = {
                position: w.inFlow ? "relative" : "absolute",
                top: 0,
                left: 0
              },
              i = R.css(n, "position") != r.position;
            w.pushFollowers ? 0 < h.duration && (p === u && 0 === parseFloat(R.css(w.spacer, "padding-top")) ? i = !0 : p === c && 0 === parseFloat(R.css(w.spacer, "padding-bottom")) && (i = !0)) : r[t.vertical ? "top" : "left"] = h.duration * g, R.css(n, r), i && F()
          } else {
            "fixed" != R.css(n, "position") && (R.css(n, {
              position: "fixed"
            }), F());
            var o = R.get.offset(w.spacer, !0),
              s = h.reverse || 0 === h.duration ? t.scrollPos - a.start : Math.round(g * h.duration * 10) / 10;
            o[t.vertical ? "top" : "left"] += s, R.css(w.spacer.firstChild, {
              top: o.top,
              left: o.left
            })
          }
        }
      },
      F = function() {
        if (m && l && w.inFlow) {
          var e = p === f,
            t = l.info("vertical"),
            n = w.spacer.firstChild,
            r = R.isMarginCollapseType(R.css(w.spacer, "display")),
            i = {};
          w.relSize.width || w.relSize.autoFullWidth ? e ? R.css(m, {
            width: R.get.width(w.spacer)
          }) : R.css(m, {
            width: "100%"
          }) : (i["min-width"] = R.get.width(t ? m : n, !0, !0), i.width = e ? i["min-width"] : "auto"), w.relSize.height ? e ? R.css(m, {
            height: R.get.height(w.spacer) - (w.pushFollowers ? h.duration : 0)
          }) : R.css(m, {
            height: "100%"
          }) : (i["min-height"] = R.get.height(t ? n : m, !0, !r), i.height = e ? i["min-height"] : "auto"), w.pushFollowers && (i["padding" + (t ? "Top" : "Left")] = h.duration * g, i["padding" + (t ? "Bottom" : "Right")] = h.duration * (1 - g)), R.css(w.spacer, i)
        }
      },
      L = function() {
        l && m && p === f && !l.info("isDocument") && C()
      },
      T = function() {
        l && m && p === f && ((w.relSize.width || w.relSize.autoFullWidth) && R.get.width(window) != R.get.width(w.spacer.parentNode) || w.relSize.height && R.get.height(window) != R.get.height(w.spacer.parentNode)) && F()
      },
      A = function(e) {
        l && m && p === f && !l.info("isDocument") && (e.preventDefault(), l._setScrollPos(l.info("scrollPos") - ((e.wheelDelta || e[l.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || 30 * -e.detail)))
      };
    this.setPin = function(e, t) {
      if (t = R.extend({}, {
          pushFollowers: !0,
          spacerClass: "scrollmagic-pin-spacer"
        }, t), !(e = R.get.elements(e)[0])) return d;
      if ("fixed" === R.css(e, "position")) return d;
      if (m) {
        if (m === e) return d;
        d.removePin()
      }
      var n = (m = e).parentNode.style.display,
        r = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
      m.parentNode.style.display = "none";
      var i = "absolute" != R.css(m, "position"),
        o = R.css(m, r.concat(["display"])),
        s = R.css(m, ["width", "height"]);
      m.parentNode.style.display = n, !i && t.pushFollowers && (t.pushFollowers = !1);
      var a = m.parentNode.insertBefore(document.createElement("div"), m),
        l = R.extend(o, {
          position: i ? "relative" : "absolute",
          boxSizing: "content-box",
          mozBoxSizing: "content-box",
          webkitBoxSizing: "content-box"
        });
      if (i || R.extend(l, R.css(m, ["width", "height"])), R.css(a, l), a.setAttribute(P, ""), R.addClass(a, t.spacerClass), w = {
          spacer: a,
          relSize: {
            width: "%" === s.width.slice(-1),
            height: "%" === s.height.slice(-1),
            autoFullWidth: "auto" === s.width && i && R.isMarginCollapseType(o.display)
          },
          pushFollowers: t.pushFollowers,
          inFlow: i
        }, !m.___origStyle) {
        m.___origStyle = {};
        var c = m.style;
        r.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]).forEach(function(e) {
          m.___origStyle[e] = c[e] || ""
        })
      }
      return w.relSize.width && R.css(a, {
        width: s.width
      }), w.relSize.height && R.css(a, {
        height: s.height
      }), a.appendChild(m), R.css(m, {
        position: i ? "relative" : "absolute",
        margin: "auto",
        top: "auto",
        left: "auto",
        bottom: "auto",
        right: "auto"
      }), (w.relSize.width || w.relSize.autoFullWidth) && R.css(m, {
        boxSizing: "border-box",
        mozBoxSizing: "border-box",
        webkitBoxSizing: "border-box"
      }), window.addEventListener("scroll", L), window.addEventListener("resize", L), window.addEventListener("resize", T), m.addEventListener("mousewheel", A), m.addEventListener("DOMMouseScroll", A), C(), d
    }, this.removePin = function(e) {
      if (m) {
        if (p === f && C(!0), e || !l) {
          var t = w.spacer.firstChild;
          if (t.hasAttribute(P)) {
            var n = w.spacer.style,
              r = {};
            ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"].forEach(function(e) {
              r[e] = n[e] || ""
            }), R.css(t, r)
          }
          w.spacer.parentNode.insertBefore(t, w.spacer), w.spacer.parentNode.removeChild(w.spacer), m.parentNode.hasAttribute(P) || (R.css(m, m.___origStyle), delete m.___origStyle)
        }
        window.removeEventListener("scroll", L), window.removeEventListener("resize", L), window.removeEventListener("resize", T), m.removeEventListener("mousewheel", A), m.removeEventListener("DOMMouseScroll", A), m = void 0
      }
      return d
    };
    var N, O = [];
    return d.on("destroy.internal", function(e) {
        d.removeClassToggle(e.reset)
      }), this.setClassToggle = function(e, t) {
        var n = R.get.elements(e);
        return 0 !== n.length && R.type.String(t) && (0 < O.length && d.removeClassToggle(), N = t, O = n, d.on("enter.internal_class leave.internal_class", function(e) {
          var n = "enter" === e.type ? R.addClass : R.removeClass;
          O.forEach(function(e, t) {
            n(e, N)
          })
        })), d
      }, this.removeClassToggle = function(e) {
        return e && O.forEach(function(e, t) {
          R.removeClass(e, N)
        }), d.off("start.internal_class end.internal_class"), N = void 0, O = [], d
      },
      function() {
        for (var e in h) r.hasOwnProperty(e) || delete h[e];
        for (var t in r) z(t);
        E()
      }(), d
  };
  var D = {
    defaults: {
      duration: 0,
      offset: 0,
      triggerElement: void 0,
      triggerHook: .5,
      reverse: !0,
      loglevel: 2
    },
    validate: {
      offset: function(e) {
        if (e = parseFloat(e), !R.type.Number(e)) throw 0;
        return e
      },
      triggerElement: function(e) {
        if (e = e || void 0) {
          var t = R.get.elements(e)[0];
          if (!t || !t.parentNode) throw 0;
          e = t
        }
        return e
      },
      triggerHook: function(e) {
        var t = {
          onCenter: .5,
          onEnter: 1,
          onLeave: 0
        };
        if (R.type.Number(e)) e = Math.max(0, Math.min(parseFloat(e), 1));
        else {
          if (!(e in t)) throw 0;
          e = t[e]
        }
        return e
      },
      reverse: function(e) {
        return !!e
      }
    },
    shifts: ["duration", "offset", "triggerHook"]
  };
  _.Scene.addOption = function(e, t, n, r) {
    e in D.defaults || (D.defaults[e] = t, D.validate[e] = n, r && D.shifts.push(e))
  }, _.Scene.extend = function(e) {
    var t = this;
    _.Scene = function() {
      return t.apply(this, arguments), this.$super = R.extend({}, this), e.apply(this, arguments) || this
    }, R.extend(_.Scene, t), _.Scene.prototype = t.prototype, _.Scene.prototype.constructor = _.Scene
  }, _.Event = function(e, t, n, r) {
    for (var i in r = r || {}) this[i] = r[i];
    return this.type = e, this.target = this.currentTarget = n, this.namespace = t || "", this.timeStamp = this.timestamp = Date.now(), this
  };
  var R = _._util = function(s) {
    var n, e = {},
      a = function(e) {
        return parseFloat(e) || 0
      },
      l = function(e) {
        return e.currentStyle ? e.currentStyle : s.getComputedStyle(e)
      },
      r = function(e, t, n, r) {
        if ((t = t === document ? s : t) === s) r = !1;
        else if (!u.DomElement(t)) return 0;
        e = e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
        var i = (n ? t["offset" + e] || t["outer" + e] : t["client" + e] || t["inner" + e]) || 0;
        if (n && r) {
          var o = l(t);
          i += "Height" === e ? a(o.marginTop) + a(o.marginBottom) : a(o.marginLeft) + a(o.marginRight)
        }
        return i
      },
      c = function(e) {
        return e.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, function(e) {
          return e[1].toUpperCase()
        })
      };
    e.extend = function(e) {
      for (e = e || {}, n = 1; n < arguments.length; n++)
        if (arguments[n])
          for (var t in arguments[n]) arguments[n].hasOwnProperty(t) && (e[t] = arguments[n][t]);
      return e
    }, e.isMarginCollapseType = function(e) {
      return -1 < ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(e)
    };
    var i = 0,
      t = ["ms", "moz", "webkit", "o"],
      o = s.requestAnimationFrame,
      f = s.cancelAnimationFrame;
    for (n = 0; !o && n < 4; ++n) o = s[t[n] + "RequestAnimationFrame"], f = s[t[n] + "CancelAnimationFrame"] || s[t[n] + "CancelRequestAnimationFrame"];
    o || (o = function(e) {
      var t = (new Date).getTime(),
        n = Math.max(0, 16 - (t - i)),
        r = s.setTimeout(function() {
          e(t + n)
        }, n);
      return i = t + n, r
    }), f || (f = function(e) {
      s.clearTimeout(e)
    }), e.rAF = o.bind(s), e.cAF = f.bind(s);
    var u = e.type = function(e) {
      return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/, "$1").toLowerCase()
    };
    u.String = function(e) {
      return "string" === u(e)
    }, u.Function = function(e) {
      return "function" === u(e)
    }, u.Array = function(e) {
      return Array.isArray(e)
    }, u.Number = function(e) {
      return !u.Array(e) && 0 <= e - parseFloat(e) + 1
    }, u.DomElement = function(e) {
      return "object" == typeof HTMLElement || "function" == typeof HTMLElement ? e instanceof HTMLElement || e instanceof SVGElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName
    };
    var d = e.get = {};
    return d.elements = function(e) {
      var t = [];
      if (u.String(e)) try {
        e = document.querySelectorAll(e)
      } catch (e) {
        return t
      }
      if ("nodelist" === u(e) || u.Array(e) || e instanceof NodeList)
        for (var n = 0, r = t.length = e.length; n < r; n++) {
          var i = e[n];
          t[n] = u.DomElement(i) ? i : d.elements(i)
        } else(u.DomElement(e) || e === document || e === s) && (t = [e]);
      return t
    }, d.scrollTop = function(e) {
      return e && "number" == typeof e.scrollTop ? e.scrollTop : s.pageYOffset || 0
    }, d.scrollLeft = function(e) {
      return e && "number" == typeof e.scrollLeft ? e.scrollLeft : s.pageXOffset || 0
    }, d.width = function(e, t, n) {
      return r("width", e, t, n)
    }, d.height = function(e, t, n) {
      return r("height", e, t, n)
    }, d.offset = function(e, t) {
      var n = {
        top: 0,
        left: 0
      };
      if (e && e.getBoundingClientRect) {
        var r = e.getBoundingClientRect();
        n.top = r.top, n.left = r.left, t || (n.top += d.scrollTop(), n.left += d.scrollLeft())
      }
      return n
    }, e.addClass = function(e, t) {
      t && (e.classList ? e.classList.add(t) : e.className += " " + t)
    }, e.removeClass = function(e, t) {
      t && (e.classList ? e.classList.remove(t) : e.className = e.className.replace(RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " "))
    }, e.css = function(e, t) {
      if (u.String(t)) return l(e)[c(t)];
      if (u.Array(t)) {
        var n = {},
          r = l(e);
        return t.forEach(function(e, t) {
          n[e] = r[c(e)]
        }), n
      }
      for (var i in t) {
        var o = t[i];
        o == parseFloat(o) && (o += "px"), e.style[c(i)] = o
      }
    }, e
  }(window || {});
  return _
});
! function(n, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (n = n || self).LazyLoad = t()
}(this, (function() {
  "use strict";

  function n() {
    return (n = Object.assign || function(n) {
      for (var t = 1; t < arguments.length; t++) {
        var e = arguments[t];
        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i])
      }
      return n
    }).apply(this, arguments)
  }
  var t = "undefined" != typeof window,
    e = t && !("onscroll" in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),
    i = t && "IntersectionObserver" in window,
    a = t && "classList" in document.createElement("p"),
    o = t && window.devicePixelRatio > 1,
    r = {
      elements_selector: ".lazy",
      container: e || t ? document : null,
      threshold: 300,
      thresholds: null,
      data_src: "src",
      data_srcset: "srcset",
      data_sizes: "sizes",
      data_bg: "bg",
      data_bg_hidpi: "bg-hidpi",
      data_bg_multi: "bg-multi",
      data_bg_multi_hidpi: "bg-multi-hidpi",
      data_poster: "poster",
      class_applied: "applied",
      class_loading: "loading",
      class_loaded: "loaded",
      class_error: "error",
      unobserve_completed: !0,
      unobserve_entered: !1,
      cancel_on_exit: !0,
      callback_enter: null,
      callback_exit: null,
      callback_applied: null,
      callback_loading: null,
      callback_loaded: null,
      callback_error: null,
      callback_finish: null,
      callback_cancel: null,
      use_native: !1
    },
    c = function(t) {
      return n({}, r, t)
    },
    l = function(n, t) {
      var e, i = new n(t);
      try {
        e = new CustomEvent("LazyLoad::Initialized", {
          detail: {
            instance: i
          }
        })
      } catch (n) {
        (e = document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized", !1, !1, {
          instance: i
        })
      }
      window.dispatchEvent(e)
    },
    s = function(n, t) {
      return n.getAttribute("data-" + t)
    },
    u = function(n, t, e) {
      var i = "data-" + t;
      null !== e ? n.setAttribute(i, e) : n.removeAttribute(i)
    },
    d = function(n) {
      return s(n, "ll-status")
    },
    f = function(n, t) {
      return u(n, "ll-status", t)
    },
    _ = function(n) {
      return f(n, null)
    },
    g = function(n) {
      return null === d(n)
    },
    v = function(n) {
      return "native" === d(n)
    },
    p = ["loading", "loaded", "applied", "error"],
    b = function(n, t, e, i) {
      n && (void 0 === i ? void 0 === e ? n(t) : n(t, e) : n(t, e, i))
    },
    h = function(n, t) {
      a ? n.classList.add(t) : n.className += (n.className ? " " : "") + t
    },
    m = function(n, t) {
      a ? n.classList.remove(t) : n.className = n.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "")
    },
    E = function(n) {
      return n.llTempImage
    },
    I = function(n, t) {
      if (t) {
        var e = t._observer;
        e && e.unobserve(n)
      }
    },
    y = function(n, t) {
      n && (n.loadingCount += t)
    },
    A = function(n, t) {
      n && (n.toLoadCount = t)
    },
    L = function(n) {
      for (var t, e = [], i = 0; t = n.children[i]; i += 1) "SOURCE" === t.tagName && e.push(t);
      return e
    },
    w = function(n, t, e) {
      e && n.setAttribute(t, e)
    },
    z = function(n, t) {
      n.removeAttribute(t)
    },
    k = function(n) {
      return !!n.llOriginalAttrs
    },
    O = function(n) {
      if (!k(n)) {
        var t = {};
        t.src = n.getAttribute("src"), t.srcset = n.getAttribute("srcset"), t.sizes = n.getAttribute("sizes"), n.llOriginalAttrs = t
      }
    },
    C = function(n) {
      if (k(n)) {
        var t = n.llOriginalAttrs;
        w(n, "src", t.src), w(n, "srcset", t.srcset), w(n, "sizes", t.sizes)
      }
    },
    N = function(n, t) {
      w(n, "sizes", s(n, t.data_sizes)), w(n, "srcset", s(n, t.data_srcset)), w(n, "src", s(n, t.data_src))
    },
    x = function(n) {
      z(n, "src"), z(n, "srcset"), z(n, "sizes")
    },
    M = function(n, t) {
      var e = n.parentNode;
      e && "PICTURE" === e.tagName && L(e).forEach(t)
    },
    R = function(n, t) {
      L(n).forEach(t)
    },
    G = {
      IMG: function(n, t) {
        M(n, (function(n) {
          O(n), N(n, t)
        })), O(n), N(n, t)
      },
      IFRAME: function(n, t) {
        w(n, "src", s(n, t.data_src))
      },
      VIDEO: function(n, t) {
        R(n, (function(n) {
          w(n, "src", s(n, t.data_src))
        })), w(n, "poster", s(n, t.data_poster)), w(n, "src", s(n, t.data_src)), n.load()
      }
    },
    T = function(n, t) {
      var e = G[n.tagName];
      e && e(n, t)
    },
    D = function(n, t, e) {
      y(e, 1), h(n, t.class_loading), f(n, "loading"), b(t.callback_loading, n, e)
    },
    F = {
      IMG: function(n, t) {
        u(n, t.data_src, null), u(n, t.data_srcset, null), u(n, t.data_sizes, null), M(n, (function(n) {
          u(n, t.data_srcset, null), u(n, t.data_sizes, null)
        }))
      },
      IFRAME: function(n, t) {
        u(n, t.data_src, null)
      },
      VIDEO: function(n, t) {
        u(n, t.data_src, null), u(n, t.data_poster, null), R(n, (function(n) {
          u(n, t.data_src, null)
        }))
      }
    },
    V = function(n, t) {
      u(n, t.data_bg_multi, null), u(n, t.data_bg_multi_hidpi, null)
    },
    j = function(n, t) {
      var e = F[n.tagName];
      e ? e(n, t) : function(n, t) {
        u(n, t.data_bg, null), u(n, t.data_bg_hidpi, null)
      }(n, t)
    },
    P = ["IMG", "IFRAME", "VIDEO"],
    S = function(n, t) {
      !t || function(n) {
        return n.loadingCount > 0
      }(t) || function(n) {
        return n.toLoadCount > 0
      }(t) || b(n.callback_finish, t)
    },
    U = function(n, t, e) {
      n.addEventListener(t, e), n.llEvLisnrs[t] = e
    },
    $ = function(n, t, e) {
      n.removeEventListener(t, e)
    },
    q = function(n) {
      return !!n.llEvLisnrs
    },
    H = function(n) {
      if (q(n)) {
        var t = n.llEvLisnrs;
        for (var e in t) {
          var i = t[e];
          $(n, e, i)
        }
        delete n.llEvLisnrs
      }
    },
    B = function(n, t, e) {
      ! function(n) {
        delete n.llTempImage
      }(n), y(e, -1),
        function(n) {
          n && (n.toLoadCount -= 1)
        }(e), m(n, t.class_loading), t.unobserve_completed && I(n, e)
    },
    J = function(n, t, e) {
      var i = E(n) || n;
      q(i) || function(n, t, e) {
        q(n) || (n.llEvLisnrs = {});
        var i = "VIDEO" === n.tagName ? "loadeddata" : "load";
        U(n, i, t), U(n, "error", e)
      }(i, (function(a) {
        ! function(n, t, e, i) {
          var a = v(t);
          B(t, e, i), h(t, e.class_loaded), f(t, "loaded"), j(t, e), b(e.callback_loaded, t, i), a || S(e, i)
        }(0, n, t, e), H(i)
      }), (function(a) {
        ! function(n, t, e, i) {
          var a = v(t);
          B(t, e, i), h(t, e.class_error), f(t, "error"), b(e.callback_error, t, i), a || S(e, i)
        }(0, n, t, e), H(i)
      }))
    },
    K = function(n, t, e) {
      ! function(n) {
        n.llTempImage = document.createElement("IMG")
      }(n), J(n, t, e),
        function(n, t, e) {
          var i = s(n, t.data_bg),
            a = s(n, t.data_bg_hidpi),
            r = o && a ? a : i;
          r && (n.style.backgroundImage = 'url("'.concat(r, '")'), E(n).setAttribute("src", r), D(n, t, e))
        }(n, t, e),
        function(n, t, e) {
          var i = s(n, t.data_bg_multi),
            a = s(n, t.data_bg_multi_hidpi),
            r = o && a ? a : i;
          r && (n.style.backgroundImage = r, function(n, t, e) {
            h(n, t.class_applied), f(n, "applied"), V(n, t), t.unobserve_completed && I(n, t), b(t.callback_applied, n, e)
          }(n, t, e))
        }(n, t, e)
    },
    Q = function(n, t, e) {
      ! function(n) {
        return P.indexOf(n.tagName) > -1
      }(n) ? K(n, t, e): function(n, t, e) {
        J(n, t, e), T(n, t), D(n, t, e)
      }(n, t, e)
    },
    W = ["IMG", "IFRAME"],
    X = function(n) {
      return n.use_native && "loading" in HTMLImageElement.prototype
    },
    Y = function(n, t, e) {
      n.forEach((function(n) {
        return function(n) {
          return n.isIntersecting || n.intersectionRatio > 0
        }(n) ? function(n, t, e, i) {
          f(n, "entered"),
            function(n, t, e) {
              t.unobserve_entered && I(n, e)
            }(n, e, i), b(e.callback_enter, n, t, i),
            function(n) {
              return p.indexOf(d(n)) >= 0
            }(n) || Q(n, e, i)
        }(n.target, n, t, e) : function(n, t, e, i) {
          g(n) || (function(n, t, e, i) {
            e.cancel_on_exit && function(n) {
              return "loading" === d(n)
            }(n) && "IMG" === n.tagName && (H(n), function(n) {
              M(n, (function(n) {
                x(n)
              })), x(n)
            }(n), function(n) {
              M(n, (function(n) {
                C(n)
              })), C(n)
            }(n), m(n, e.class_loading), y(i, -1), _(n), b(e.callback_cancel, n, t, i))
          }(n, t, e, i), b(e.callback_exit, n, t, i))
        }(n.target, n, t, e)
      }))
    },
    Z = function(n) {
      return Array.prototype.slice.call(n)
    },
    nn = function(n) {
      return n.container.querySelectorAll(n.elements_selector)
    },
    tn = function(n) {
      return function(n) {
        return "error" === d(n)
      }(n)
    },
    en = function(n, t) {
      return function(n) {
        return Z(n).filter(g)
      }(n || nn(t))
    },
    an = function(n, e) {
      var a = c(n);
      this._settings = a, this.loadingCount = 0,
        function(n, t) {
          i && !X(n) && (t._observer = new IntersectionObserver((function(e) {
            Y(e, n, t)
          }), function(n) {
            return {
              root: n.container === document ? null : n.container,
              rootMargin: n.thresholds || n.threshold + "px"
            }
          }(n)))
        }(a, this),
        function(n, e) {
          t && window.addEventListener("online", (function() {
            ! function(n, t) {
              var e;
              (e = nn(n), Z(e).filter(tn)).forEach((function(t) {
                m(t, n.class_error), _(t)
              })), t.update()
            }(n, e)
          }))
        }(a, this), this.update(e)
    };
  return an.prototype = {
    update: function(n) {
      var t, a, o = this._settings,
        r = en(n, o);
      A(this, r.length), !e && i ? X(o) ? function(n, t, e) {
        n.forEach((function(n) {
          -1 !== W.indexOf(n.tagName) && (n.setAttribute("loading", "lazy"), function(n, t, e) {
            J(n, t, e), T(n, t), j(n, t), f(n, "native")
          }(n, t, e))
        })), A(e, 0)
      }(r, o, this) : (a = r, function(n) {
        n.disconnect()
      }(t = this._observer), function(n, t) {
        t.forEach((function(t) {
          n.observe(t)
        }))
      }(t, a)) : this.loadAll(r)
    },
    destroy: function() {
      this._observer && this._observer.disconnect(), nn(this._settings).forEach((function(n) {
        delete n.llOriginalAttrs
      })), delete this._observer, delete this._settings, delete this.loadingCount, delete this.toLoadCount
    },
    loadAll: function(n) {
      var t = this,
        e = this._settings;
      en(n, e).forEach((function(n) {
        I(n, t), Q(n, e, t)
      }))
    }
  }, an.load = function(n, t) {
    var e = c(t);
    Q(n, e)
  }, an.resetStatus = function(n) {
    _(n)
  }, t && function(n, t) {
    if (t)
      if (t.length)
        for (var e, i = 0; e = t[i]; i += 1) l(n, e);
      else l(n, t)
  }(an, window.lazyLoadOptions), an
}));

! function(n, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : n.barba = t()
}(this, function() {
  var n = function() {
    function n() {}
    return n.prototype.then = function(r, i) {
      var e = new n,
        o = this.s;
      if (o) {
        var u = 1 & o ? r : i;
        if (u) {
          try {
            t(e, 1, u(this.v))
          } catch (n) {
            t(e, 2, n)
          }
          return e
        }
        return this
      }
      return this.o = function(n) {
        try {
          var o = n.v;
          1 & n.s ? t(e, 1, r ? r(o) : o) : i ? t(e, 1, i(o)) : t(e, 2, o)
        } catch (n) {
          t(e, 2, n)
        }
      }, e
    }, n
  }();

  function t(r, i, e) {
    if (!r.s) {
      if (e instanceof n) {
        if (!e.s) return void(e.o = t.bind(null, r, i));
        1 & i && (i = e.s), e = e.v
      }
      if (e && e.then) return void e.then(t.bind(null, r, i), t.bind(null, r, 2));
      r.s = i, r.v = e;
      var o = r.o;
      o && o(r)
    }
  }

  function r(n, t) {
    try {
      var r = n()
    } catch (n) {
      return t(n)
    }
    return r && r.then ? r.then(void 0, t) : r
  }
  var i, e = {};
  ! function() {
    function r(n) {
      this.t = n, this.i = null, this.u = null, this.h = null, this.l = null
    }

    function i(n) {
      return {
        value: n,
        done: !0
      }
    }

    function o(n) {
      return {
        value: n,
        done: !1
      }
    }
    r.prototype[Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator"))] = function() {
      return this
    }, r.prototype.p = function(t) {
      return this.u(t && t.then ? t.then(o) : o(t)), this.i = new n
    }, r.prototype.next = function(r) {
      var o = this;
      return o.l = new Promise(function(u) {
        var f = o.i;
        if (null === f) {
          var s = o.t;
          if (null === s) return u(o.l);

          function a(n) {
            o.u(n && n.then ? n.then(i) : i(n)), o.i = null, o.u = null
          }
          o.t = null, o.u = u, s(o).then(a, function(t) {
            if (t === e) a(o.h);
            else {
              var r = new n;
              o.u(r), o.i = null, o.u = null, _resolve(r, 2, t)
            }
          })
        } else o.i = null, o.u = u, t(f, 1, r)
      })
    }, r.prototype.return = function(n) {
      var r = this;
      return r.l = new Promise(function(o) {
        var u = r.i;
        if (null === u) return null === r.t ? o(r.l) : (r.t = null, o(n && n.then ? n.then(i) : i(n)));
        r.h = n, r.u = o, r.i = null, t(u, 2, e)
      })
    }, r.prototype.throw = function(n) {
      var r = this;
      return r.l = new Promise(function(i, e) {
        var o = r.i;
        if (null === o) return null === r.t ? i(r.l) : (r.t = null, e(n));
        r.u = i, r.i = null, t(o, 2, n)
      })
    }
  }(),
  function(n) {
    n[n.off = 0] = "off", n[n.error = 1] = "error", n[n.warning = 2] = "warning", n[n.info = 3] = "info", n[n.debug = 4] = "debug"
  }(i || (i = {}));
  var o = i.off,
    u = function(n) {
      this.m = n
    };
  u.getLevel = function() {
    return o
  }, u.setLevel = function(n) {
    return o = i[n]
  }, u.prototype.error = function() {
    for (var n = [], t = arguments.length; t--;) n[t] = arguments[t];
    this.g(console.error, i.error, n)
  }, u.prototype.warn = function() {
    for (var n = [], t = arguments.length; t--;) n[t] = arguments[t];
    this.g(console.warn, i.warning, n)
  }, u.prototype.info = function() {
    for (var n = [], t = arguments.length; t--;) n[t] = arguments[t];
    this.g(console.info, i.info, n)
  }, u.prototype.debug = function() {
    for (var n = [], t = arguments.length; t--;) n[t] = arguments[t];
    this.g(console.log, i.debug, n)
  }, u.prototype.g = function(n, t, r) {
    t <= u.getLevel() && n.apply(console, ["[" + this.m + "] "].concat(r))
  };
  var f = function() {
    this.logger = new u("@barba/core"), this.all = ["ready", "page", "reset", "currentAdded", "currentRemoved", "nextAdded", "nextRemoved", "beforeAppear", "appear", "afterAppear", "appearCanceled", "before", "beforeLeave", "leave", "afterLeave", "leaveCanceled", "beforeEnter", "enter", "afterEnter", "enterCanceled", "after"], this.registered = new Map, this.init()
  };
  f.prototype.init = function() {
    var n = this;
    this.registered.clear(), this.all.forEach(function(t) {
      n[t] || (n[t] = function(r, i) {
        void 0 === i && (i = null), n.registered.has(t) || n.registered.set(t, new Set), n.registered.get(t).add({
          ctx: i,
          fn: r
        })
      })
    })
  }, f.prototype.do = function(n) {
    for (var t = [], r = arguments.length - 1; r-- > 0;) t[r] = arguments[r + 1];
    this.registered.has(n) && this.registered.get(n).forEach(function(n) {
      n.fn.apply(n.ctx, t)
    })
  }, f.prototype.clear = function() {
    var n = this;
    this.all.forEach(function(t) {
      delete n[t]
    }), this.init()
  }, f.prototype.help = function() {
    this.logger.info("[@barba/core] Available hooks: " + this.all), this.logger.info("[@barba/core] Registered hooks: " + Object.keys(this.registered))
  };
  var s = new f,
    a = function n(t, r, i) {
      return t instanceof RegExp ? function(n, t) {
        if (!t) return n;
        var r = n.source.match(/\((?!\?)/g);
        if (r)
          for (var i = 0; i < r.length; i++) t.push({
            name: i,
            prefix: null,
            delimiter: null,
            optional: !1,
            repeat: !1,
            pattern: null
          });
        return n
      }(t, r) : Array.isArray(t) ? function(t, r, i) {
        for (var e = [], o = 0; o < t.length; o++) e.push(n(t[o], r, i).source);
        return new RegExp("(?:" + e.join("|") + ")", y(i))
      }(t, r, i) : function(n, t, r) {
        return g(d(n, r), t, r)
      }(t, r, i)
    },
    c = d,
    h = m,
    l = g,
    v = "../../external.html?link=http://stukram.mikhailmasterov.com/",
    p = new RegExp(["(\\\\.)", "(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"), "g");

  function d(n, t) {
    for (var r, i = [], e = 0, o = 0, u = "", f = t && t.delimiter || v, s = t && t.whitelist || void 0, a = !1; null !== (r = p.exec(n));) {
      var c = r[0],
        h = r[1],
        l = r.index;
      if (u += n.slice(o, l), o = l + c.length, h) u += h[1], a = !0;
      else {
        var d = "",
          m = r[2],
          y = r[3],
          g = r[4],
          P = r[5];
        if (!a && u.length) {
          var E = u.length - 1,
            x = u[E];
          (!s || s.indexOf(x) > -1) && (d = x, u = u.slice(0, E))
        }
        u && (i.push(u), u = "", a = !1);
        var A = y || g,
          T = d || f;
        i.push({
          name: m || e++,
          prefix: d,
          delimiter: T,
          optional: "?" === P || "*" === P,
          repeat: "+" === P || "*" === P,
          pattern: A ? b(A) : "[^" + w(T === f ? T : T + f) + "]+?"
        })
      }
    }
    return (u || o < n.length) && i.push(u + n.substr(o)), i
  }

  function m(n) {
    for (var t = new Array(n.length), r = 0; r < n.length; r++) "object" == typeof n[r] && (t[r] = new RegExp("^(?:" + n[r].pattern + ")$"));
    return function(r, i) {
      for (var e = "", o = i && i.encode || encodeURIComponent, u = 0; u < n.length; u++) {
        var f = n[u];
        if ("string" != typeof f) {
          var s, a = r ? r[f.name] : void 0;
          if (Array.isArray(a)) {
            if (!f.repeat) throw new TypeError('Expected "' + f.name + '" to not repeat, but got array');
            if (0 === a.length) {
              if (f.optional) continue;
              throw new TypeError('Expected "' + f.name + '" to not be empty')
            }
            for (var c = 0; c < a.length; c++) {
              if (s = o(a[c], f), !t[u].test(s)) throw new TypeError('Expected all "' + f.name + '" to match "' + f.pattern + '"');
              e += (0 === c ? f.prefix : f.delimiter) + s
            }
          } else if ("string" != typeof a && "number" != typeof a && "boolean" != typeof a) {
            if (!f.optional) throw new TypeError('Expected "' + f.name + '" to be ' + (f.repeat ? "an array" : "a string"))
          } else {
            if (s = o(String(a), f), !t[u].test(s)) throw new TypeError('Expected "' + f.name + '" to match "' + f.pattern + '", but got "' + s + '"');
            e += f.prefix + s
          }
        } else e += f
      }
      return e
    }
  }

  function w(n) {
    return n.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1")
  }

  function b(n) {
    return n.replace(/([=!:$\/()])/g, "\\$1")
  }

  function y(n) {
    return n && n.sensitive ? "" : "i"
  }

  function g(n, t, r) {
    for (var i = (r = r || {}).strict, e = !1 !== r.start, o = !1 !== r.end, u = r.delimiter || v, f = [].concat(r.endsWith || []).map(w).concat("$").join("|"), s = e ? "^" : "", a = 0; a < n.length; a++) {
      var c = n[a];
      if ("string" == typeof c) s += w(c);
      else {
        var h = c.repeat ? "(?:" + c.pattern + ")(?:" + w(c.delimiter) + "(?:" + c.pattern + "))*" : c.pattern;
        t && t.push(c), s += c.optional ? c.prefix ? "(?:" + w(c.prefix) + "(" + h + "))?" : "(" + h + ")?" : w(c.prefix) + "(" + h + ")"
      }
    }
    if (o) i || (s += "(?:" + w(u) + ")?"), s += "$" === f ? "$" : "(?=" + f + ")";
    else {
      var l = n[n.length - 1],
        p = "string" == typeof l ? l[l.length - 1] === u : void 0 === l;
      i || (s += "(?:" + w(u) + "(?=" + f + "))?"), p || (s += "(?=" + w(u) + "|" + f + ")")
    }
    return new RegExp(s, y(r))
  }
  a.parse = c, a.compile = function(n, t) {
    return m(d(n, t))
  }, a.tokensToFunction = h, a.tokensToRegExp = l;
  var P = {
      container: "container",
      namespace: "namespace",
      prefix: "data-barba",
      prevent: "prevent",
      wrapper: "wrapper"
    },
    E = function() {
      this.P = P, this.A = new DOMParser
    };
  E.prototype.toString = function(n) {
    return n.outerHTML
  }, E.prototype.toDocument = function(n) {
    return this.A.parseFromString(n, "text/html")
  }, E.prototype.toElement = function(n) {
    var t = document.createElement("div");
    return t.innerHTML = n, t
  }, E.prototype.getHtml = function(n) {
    return void 0 === n && (n = document), this.toString(n.documentElement)
  }, E.prototype.getWrapper = function(n) {
    return void 0 === n && (n = document), n.querySelector("[" + this.P.prefix + '="' + this.P.wrapper + '"]')
  }, E.prototype.getContainer = function(n) {
    return void 0 === n && (n = document), n.querySelector("[" + this.P.prefix + '="' + this.P.container + '"]')
  }, E.prototype.getNamespace = function(n) {
    void 0 === n && (n = document);
    var t = n.querySelector("[" + this.P.prefix + "-" + this.P.namespace + "]");
    return t ? t.getAttribute(this.P.prefix + "-" + this.P.namespace) : null
  }, E.prototype.getHref = function(n) {
    return n.getAttribute && n.getAttribute("href") ? n.href : null
  };
  var x = new E,
    A = function(n, t) {
      try {
        var r = function() {
          if (!t.html) return Promise.resolve(n).then(function(n) {
            if (n) {
              var r = x.toElement(n);
              t.namespace = x.getNamespace(r), t.container = x.getContainer(r), t.html = n
            }
          })
        }();
        return Promise.resolve(r && r.then ? r.then(function() {}) : void 0)
      } catch (n) {
        return Promise.reject(n)
      }
    },
    T = a,
    j = {
      updateNext: A,
      pathToRegexp: T
    },
    R = function() {
      return window.location.origin
    },
    O = function(n) {
      var t = n || window.location.port,
        r = window.location.protocol;
      return "" !== t ? parseInt(t, 10) : "https:" === r ? 443 : 80
    },
    k = function(n) {
      return C(n).path
    },
    C = function(n) {
      var t, r = M(n),
        i = {},
        e = r.indexOf("#");
      e >= 0 && (t = r.slice(e + 1), r = r.slice(0, e));
      var o = r.indexOf("?");
      return o >= 0 && (i = L(r.slice(o + 1)), r = r.slice(0, o)), {
        hash: t,
        path: r,
        query: i
      }
    },
    L = function(n) {
      return n.split("&").reduce(function(n, t) {
        var r = t.split("=");
        return n[r[0]] = r[1], n
      }, {})
    },
    M = function(n, t) {
      return void 0 === t && (t = R()), n.replace(t, "")
    },
    S = {
      getHref: function() {
        return window.location.href
      },
      getOrigin: R,
      getPort: O,
      getPath: k,
      parse: C,
      parseQuery: L,
      clean: M
    },
    $ = function(n) {
      if (this.T = [], "boolean" == typeof n) this.j = n;
      else {
        var t = Array.isArray(n) ? n : [n];
        this.T = t.map(function(n) {
          return T(n)
        })
      }
    };
  $.prototype.checkUrl = function(n) {
    if ("boolean" == typeof this.j) return this.j;
    var t = C(n).path;
    return this.T.some(function(n) {
      return null !== n.exec(t)
    })
  };
  var q = function(n) {
      function t(t) {
        n.call(this, t), this.R = new Map
      }
      return n && (t.__proto__ = n), (t.prototype = Object.create(n && n.prototype)).constructor = t, t.prototype.set = function(n, t) {
        return this.checkUrl(n) || this.R.set(n, t), t
      }, t.prototype.get = function(n) {
        return this.R.get(n)
      }, t.prototype.has = function(n) {
        return this.R.has(n)
      }, t.prototype.delete = function(n) {
        return this.R.delete(n)
      }, t
    }($),
    N = function() {
      this.R = []
    },
    B = {
      current: {
        configurable: !0
      },
      previous: {
        configurable: !0
      }
    };

  function H(n, t, r) {
    return void 0 === t && (t = 2e3), new Promise(function(i, e) {
      var o = new XMLHttpRequest;
      o.timeout = t, o.onreadystatechange = function() {
        if (o.readyState === XMLHttpRequest.DONE)
          if (200 === o.status) i(o.responseText);
          else if (o.status) {
          var t = {
            status: o.status,
            statusText: o.statusText
          };
          r(n, t), e(t)
        }
      }, o.ontimeout = function() {
        var i = new Error("Timeout error [" + t + "]");
        r(n, i), e(i)
      }, o.onerror = function() {
        var t = new Error("Fetch error");
        r(n, t), e(t)
      }, o.open("GET.html", n), o.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml"), o.setRequestHeader("x-barba", "yes"), o.send()
    })
  }
  N.prototype.add = function(n, t) {
    this.R.push({
      url: n,
      ns: t
    })
  }, N.prototype.remove = function() {
    this.R.pop()
  }, N.prototype.push = function(n, t) {
    this.add(n, t), window.history && window.history.pushState(null, "", n)
  }, N.prototype.cancel = function() {
    this.remove(), window.history && window.history.back()
  }, B.current.get = function() {
    return this.R[this.R.length - 1]
  }, B.previous.get = function() {
    return this.R.length < 2 ? null : this.R[this.R.length - 2]
  }, Object.defineProperties(N.prototype, B);
  var I, U = function() {
      return !window.history.pushState
    },
    D = function(n) {
      return !n.el || !n.href
    },
    X = function(n) {
      var t = n.event;
      return t.which > 1 || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey
    },
    _ = function(n) {
      var t = n.el;
      return t.hasAttribute("target") && "_blank" === t.target
    },
    F = function(n) {
      var t = n.el;
      return window.location.protocol !== t.protocol || window.location.hostname !== t.hostname
    },
    G = function(n) {
      var t = n.el;
      return O() !== O(t.port)
    },
    Q = function(n) {
      var t = n.el;
      return t.getAttribute && "string" == typeof t.getAttribute("download")
    },
    W = function(n) {
      return n.el.hasAttribute(P.prefix + "-" + P.prevent)
    },
    z = function(n) {
      return Boolean(n.el.closest("[" + P.prefix + "-" + P.prevent + '="all"]'))
    },
    J = function(n) {
      return k(n.href) === k(window.location.href)
    },
    K = function(n) {
      function t(t) {
        n.call(this, t), this.suite = [], this.tests = new Map, this.init()
      }
      return n && (t.__proto__ = n), (t.prototype = Object.create(n && n.prototype)).constructor = t, t.prototype.init = function() {
        this.add("pushState", U), this.add("exists", D), this.add("newTab", X), this.add("blank", _), this.add("corsDomain", F), this.add("corsPort", G), this.add("download", Q), this.add("preventSelf", W), this.add("preventAll", z), this.add("sameUrl", J, !1)
      }, t.prototype.add = function(n, t, r) {
        void 0 === r && (r = !0), this.tests.set(n, t), r && this.suite.push(n)
      }, t.prototype.run = function(n, t, r, i) {
        return this.tests.get(n)({
          el: t,
          event: r,
          href: i
        })
      }, t.prototype.checkLink = function(n, t, r) {
        var i = this;
        return this.suite.some(function(e) {
          return i.run(e, n, t, r)
        })
      }, t
    }($),
    V = (function(n) {
      var t = n.exports = function(n, t) {
        return t = t || function() {},
          function() {
            var r = !1,
              i = arguments,
              e = new Promise(function(t, e) {
                var o, u = n.apply({
                  async: function() {
                    return r = !0,
                      function(n, r) {
                        n ? e(n) : t(r)
                      }
                  }
                }, Array.prototype.slice.call(i));
                r || (!(o = u) || "object" != typeof o && "function" != typeof o || "function" != typeof o.then ? t(u) : u.then(t, e))
              });
            return e.then(t.bind(null, null), t), e
          }
      };
      t.cb = function(n, r) {
        return t(function() {
          var t = Array.prototype.slice.call(arguments);
          return t.length === n.length - 1 && t.push(this.async()), n.apply(this, t)
        }, r)
      }
    }(I = {
      exports: {}
    }), I.exports),
    Y = function(n) {
      void 0 === n && (n = []), this.logger = new u("@barba/core"), this.all = [], this.appear = [], this.O = [{
        name: "namespace",
        type: "strings"
      }, {
        name: "custom",
        type: "function"
      }], n && (this.all = this.all.concat(n)), this.k()
    };
  Y.prototype.add = function(n, t) {
    switch (n) {
      case "rule":
        this.O.splice(t.position || 0, 0, t.value);
        break;
      case "transition":
      default:
        this.all.push(t)
    }
    this.k()
  }, Y.prototype.resolve = function(n, t) {
    var r = this;
    void 0 === t && (t = {});
    var i = t.appear ? this.appear : this.all;
    i = i.filter(t.self ? function(n) {
      return n.name && "self" === n.name
    } : function(n) {
      return !n.name || "self" !== n.name
    });
    var e = new Map,
      o = i.find(function(i) {
        var o = !0,
          u = {};
        return !(!t.self || "self" !== i.name) || (r.O.reverse().forEach(function(e) {
          o && (o = r.C(i, e, n, u), t.appear || (i.from && i.to && (o = r.C(i, e, n, u, "from") && r.C(i, e, n, u, "to")), i.from && !i.to && (o = r.C(i, e, n, u, "from")), !i.from && i.to && (o = r.C(i, e, n, u, "to"))))
        }), e.set(i, u), o)
      }),
      u = e.get(o),
      f = [];
    return f.push(t.appear ? "appear" : "page"), t.self && f.push("self"), u ? this.logger.info("Transition found [" + f.join(",") + "]", u) : this.logger.info("No transition found [" + f.join(",") + "]"), o
  }, Y.prototype.k = function() {
    var n = this;
    this.all = this.all.map(function(t) {
      return n.L(t)
    }).sort(function(n, t) {
      return n.priority - t.priority
    }).reverse().map(function(n) {
      return delete n.priority, n
    }), this.appear = this.all.filter(function(n) {
      return n.appear
    })
  }, Y.prototype.C = function(n, t, r, i, e) {
    var o = !0,
      u = !1,
      f = n,
      s = t.name,
      a = s,
      c = s,
      h = s,
      l = e ? f[e] : f,
      v = "to" === e ? r.next : r.current;
    if (e ? l && l[s] : l[s]) {
      switch (t.type) {
        case "strings":
        default:
          var p = Array.isArray(l[a]) ? l[a] : [l[a]];
          v[a] && -1 !== p.indexOf(v[a]) && (u = !0), -1 === p.indexOf(v[a]) && (o = !1);
          break;
        case "object":
          var d = Array.isArray(l[c]) ? l[c] : [l[c]];
          v[c] && v[c].name && -1 !== d.indexOf(v[c].name) && (u = !0), -1 === d.indexOf(v[c].name) && (o = !1);
          break;
        case "function":
          l[h](r) ? u = !0 : o = !1
      }
      u && (e ? (i[e] = i[e] || {}, i[e][s] = f[e][s]) : i[s] = f[s])
    }
    return o
  }, Y.prototype.M = function(n, t, r) {
    var i = 0;
    return (n[t] || n.from && n.from[t] || n.to && n.to[t]) && (i += Math.pow(10, r), n.from && n.from[t] && (i += 1), n.to && n.to[t] && (i += 2)), i
  }, Y.prototype.L = function(n) {
    var t = this;
    n.priority = 0;
    var r = 0;
    return this.O.forEach(function(i, e) {
      r += t.M(n, i.name, e + 1)
    }), n.priority = r, n
  };
  var Z = function(n) {
      void 0 === n && (n = []), this.logger = new u("@barba/core"), this.S = !1, this.store = new Y(n)
    },
    nn = {
      isRunning: {
        configurable: !0
      },
      hasAppear: {
        configurable: !0
      },
      hasSelf: {
        configurable: !0
      },
      shouldWait: {
        configurable: !0
      }
    };
  Z.prototype.get = function(n, t) {
    return this.store.resolve(n, t)
  }, nn.isRunning.get = function() {
    return this.S
  }, nn.hasAppear.get = function() {
    return this.store.appear.length > 0
  }, nn.hasSelf.get = function() {
    return this.store.all.some(function(n) {
      return "self" === n.name
    })
  }, nn.shouldWait.get = function() {
    return this.store.all.some(function(n) {
      return n.to && !n.to.route || n.sync
    })
  }, Z.prototype.doAppear = function(n) {
    var t = n.data,
      i = n.transition;
    try {
      var e = this;

      function o(n) {
        e.S = !1
      }
      var u = i || {};
      e.S = !0;
      var f = r(function() {
        return Promise.resolve(e.$("beforeAppear", t, u)).then(function() {
          return Promise.resolve(e.q(t, u)).then(function() {
            return Promise.resolve(e.$("afterAppear", t, u)).then(function() {})
          })
        })
      }, function(n) {
        return e.logger.error(n), Promise.resolve(e.$("appearCanceled", t, u)).then(function() {
          throw new Error("Transition error [appear]")
        })
      });
      return f && f.then ? f.then(o) : o()
    } catch (n) {
      return Promise.reject(n)
    }
  }, Z.prototype.doPage = function(n) {
    var t = n.data,
      i = n.transition,
      e = n.page,
      o = n.wrapper;
    try {
      var u = this;

      function f(n) {
        u.S = !1
      }
      var s = i || {},
        a = !0 === s.sync || !1;
      u.S = !0;
      var c = r(function() {
        function n() {
          return Promise.resolve(u.$("before", t, s)).then(function() {
            function n(n) {
              u.$("after", t, s)
            }
            var i = function() {
              if (a) return r(function() {
                return u.N(t, o), Promise.resolve(u.$("beforeLeave", t, s)).then(function() {
                  return Promise.resolve(u.$("beforeEnter", t, s)).then(function() {
                    return Promise.resolve(Promise.all([u.B(t, s), u.H(t, s)])).then(function() {
                      return Promise.resolve(u.$("afterLeave", t, s)).then(function() {
                        return Promise.resolve(u.$("afterEnter", t, s)).then(function() {
                          u.I(t)
                        })
                      })
                    })
                  })
                })
              }, function() {
                return Promise.resolve(u.$("leaveCanceled", t, s)).then(function() {
                  return Promise.resolve(u.$("enterCanceled", t, s)).then(function() {
                    throw new Error("Transition error [page][sync]")
                  })
                })
              }); {
                function n(n) {
                  return r(function() {
                    var n = function() {
                      if (!1 !== i) return Promise.resolve(u.$("beforeEnter", t, s)).then(function() {
                        return u.N(t, o), Promise.resolve(u.H(t, s, i)).then(function() {
                          return Promise.resolve(u.$("afterEnter", t, s)).then(function() {})
                        })
                      })
                    }();
                    if (n && n.then) return n.then(function() {})
                  }, function() {
                    return Promise.resolve(u.$("leaveCanceled", t, s)).then(function() {
                      return Promise.resolve(u.$("enterCanceled", t, s)).then(function() {
                        throw new Error("Transition error [page][enter]")
                      })
                    })
                  })
                }
                var i = !1,
                  f = r(function() {
                    return Promise.resolve(u.$("beforeLeave", t, s)).then(function() {
                      return Promise.resolve(Promise.all([u.B(t, s), A(e, t.next)]).then(function(n) {
                        return n[0]
                      })).then(function(n) {
                        return i = n, Promise.resolve(u.$("afterLeave", t, s)).then(function() {
                          u.I(t)
                        })
                      })
                    })
                  }, function() {
                    return Promise.resolve(u.$("leaveCanceled", t, s)).then(function() {
                      throw new Error("Transition error [page][leave]")
                    })
                  });
                return f && f.then ? f.then(n) : n()
              }
            }();
            return i && i.then ? i.then(n) : n()
          })
        }
        var i = function() {
          if (a) return Promise.resolve(A(e, t.next)).then(function() {})
        }();
        return i && i.then ? i.then(n) : n()
      }, function(n) {
        throw u.logger.error(n), new Error("Transition error")
      });
      return c && c.then ? c.then(f) : f()
    } catch (n) {
      return Promise.reject(n)
    }
  }, Z.prototype.q = function(n, t) {
    return s.do("appear", n, t), t.appear ? V(t.appear)(n) : Promise.resolve()
  }, Z.prototype.B = function(n, t) {
    return s.do("leave", n, t), t.leave ? V(t.leave)(n) : Promise.resolve()
  }, Z.prototype.H = function(n, t, r) {
    return s.do("enter", n, t), t.enter ? V(t.enter)(n, r) : Promise.resolve()
  }, Z.prototype.$ = function(n, t, r) {
    return s.do(n, t, r), r[n] ? V(r[n])(t) : Promise.resolve()
  }, Z.prototype.N = function(n, t) {
    t.appendChild(n.next.container), s.do("nextAdded", n)
  }, Z.prototype.I = function(n) {
    n.current.container.remove(), s.do("currentRemoved", n)
  }, Object.defineProperties(Z.prototype, nn);
  var tn = function(n) {
    var t = this;
    this.names = ["beforeAppear", "afterAppear", "beforeLeave", "afterLeave", "beforeEnter", "afterEnter"], this.byNamespace = new Map, 0 !== n.length && (n.forEach(function(n) {
      t.byNamespace.set(n.namespace, n)
    }), this.names.forEach(function(n) {
      s[n](t.U(n), t)
    }), s.ready(this.U("beforeEnter"), this))
  };
  tn.prototype.U = function(n) {
    var t = this;
    return function(r) {
      var i = n.match(/enter/i) ? r.next : r.current,
        e = t.byNamespace.get(i.namespace);
      e && e[n] && e[n](r)
    }
  }, Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function(n) {
    var t = this;
    do {
      if (t.matches(n)) return t;
      t = t.parentElement || t.parentNode
    } while (null !== t && 1 === t.nodeType);
    return null
  });
  var rn = {
      container: void 0,
      html: void 0,
      namespace: void 0,
      url: {
        hash: void 0,
        href: void 0,
        path: void 0,
        query: {}
      }
    },
    en = function() {
      this.version = "2.1.0", this.schemaPage = rn, this.Logger = u, this.logger = new u("@barba/core"), this.plugins = [], this.hooks = s, this.dom = x, this.helpers = j, this.request = H, this.url = S
    },
    on = {
      data: {
        configurable: !0
      },
      wrapper: {
        configurable: !0
      }
    };
  return en.prototype.use = function(n, t) {
    var r = this.plugins;
    r.indexOf(n) > -1 ? this.logger.warn("Plugin [" + n.name + "] already installed.") : "function" == typeof n.install ? (n.install(this, t), r.push(n)) : this.logger.warn("Plugin [" + n.name + '] has no "install" method.')
  }, en.prototype.init = function(n) {
    void 0 === n && (n = {});
    var t = n.transitions;
    void 0 === t && (t = []);
    var r = n.views;
    void 0 === r && (r = []);
    var i = n.prevent;
    void 0 === i && (i = null);
    var e = n.timeout;
    void 0 === e && (e = 2e3);
    var o = n.requestError,
      f = n.cacheIgnore;
    void 0 === f && (f = !1);
    var s = n.prefetchIgnore;
    void 0 === s && (s = !1);
    var a = n.schema;
    void 0 === a && (a = P);
    var c = n.debug;
    void 0 === c && (c = !1);
    var h = n.logLevel;
    if (void 0 === h && (h = "off"), u.setLevel(!0 === c ? "debug" : h), Object.keys(a).forEach(function(n) {
        P[n] && (P[n] = a[n])
      }), this.D = o, this.timeout = e, this.cacheIgnore = f, this.prefetchIgnore = s, this.X = this.dom.getWrapper(), !this.X) throw new Error("[@barba/core] No Barba wrapper found");
    this.X.setAttribute("aria-live", "polite"), this._();
    var l = this.data.current;
    if (!l.container) throw new Error("[@barba/core] No Barba container found");
    if (this.history = new N, this.cache = new q(f), this.prevent = new K(s), this.transitions = new Z(t), this.views = new tn(r), null !== i) {
      if ("function" != typeof i) throw new Error("[@barba/core] Prevent should be a function");
      this.prevent.add("preventCustom", i)
    }
    this.history.add(l.url.href, l.namespace), this.cache.set(l.url.href, Promise.resolve(l.html)), this.F = this.F.bind(this), this.G = this.G.bind(this), this.W = this.W.bind(this), this.J(), this.plugins.forEach(function(n) {
      return n.init()
    });
    var v = this.data;
    v.trigger = "barba", v.next = v.current, this.hooks.do("ready", v), this.appear(), this._()
  }, en.prototype.destroy = function() {
    this._(), this.K(), this.hooks.clear(), this.plugins = []
  }, on.data.get = function() {
    return this.V
  }, on.wrapper.get = function() {
    return this.X
  }, en.prototype.force = function(n) {
    window.location.assign(n)
  }, en.prototype.go = function(n, t, r) {
    var i;
    if (void 0 === t && (t = "barba"), !(i = "popstate" === t ? this.history && this.url.getPath(this.history.current.url) === this.url.getPath(n) : this.prevent.run("sameUrl", null, null, n)) || this.transitions.hasSelf) return r && (r.stopPropagation(), r.preventDefault()), this.page(n, t, i)
  }, en.prototype.appear = function() {
    try {
      var n = this,
        t = function() {
          if (n.transitions.hasAppear) {
            var t = r(function() {
              var t = n.V,
                r = n.transitions.get(t, {
                  appear: !0
                });
              return Promise.resolve(n.transitions.doAppear({
                transition: r,
                data: t
              })).then(function() {})
            }, function(t) {
              n.logger.error(t)
            });
            if (t && t.then) return t.then(function() {})
          }
        }();
      return t && t.then ? t.then(function() {}) : void 0
    } catch (n) {
      return Promise.reject(n)
    }
  }, en.prototype.page = function(n, t, i) {
    try {
      var e = this;

      function o() {
        "popstate" === t ? e.history.add(n, e.data.next.namespace) : e.history.push(n, e.data.next.namespace);
        var o = e.data;
        e.hooks.do("page", o);
        var f = r(function() {
          var n = e.transitions.get(o, {
            appear: !1,
            self: i
          });
          return Promise.resolve(e.transitions.doPage({
            data: o,
            page: u,
            transition: n,
            wrapper: e.X
          })).then(function() {
            e.Y(o), e._()
          })
        }, function(n) {
          e.history.cancel(), e.logger.error(n)
        });
        if (f && f.then) return f.then(function() {})
      }
      if (e.transitions.isRunning) return void e.force(n);
      e.data.next.url = Object.assign({}, {
        href: n
      }, e.url.parse(n)), e.data.trigger = t;
      var u = e.cache.has(n) ? e.cache.get(n) : e.cache.set(n, e.request(n, e.timeout, e.onRequestError.bind(e, t, "click"))),
        f = function() {
          if (e.transitions.shouldWait) return Promise.resolve(A(u, e.data.next)).then(function() {})
        }();
      return f && f.then ? f.then(o) : o()
    } catch (n) {
      return Promise.reject(n)
    }
  }, en.prototype.onRequestError = function(n, t) {
    for (var r = [], i = arguments.length - 2; i-- > 0;) r[i] = arguments[i + 2];
    var e = r[0],
      o = r[1];
    return this.cache.delete(e), !(this.D && !1 === this.D(n, t, e, o) || ("click" === t && this.force(e), 1))
  }, en.prototype.J = function() {
    !0 !== this.prefetchIgnore && (document.addEventListener("mouseover", this.F), document.addEventListener("touchstart", this.F)), document.addEventListener("click", this.G), window.addEventListener("popstate", this.W)
  }, en.prototype.K = function() {
    !0 !== this.prefetchIgnore && (document.removeEventListener("mouseover", this.F), document.removeEventListener("touchstart", this.F)), document.removeEventListener("click", this.G), window.removeEventListener("popstate", this.W)
  }, en.prototype.F = function(n) {
    var t = this,
      r = this.Z(n);
    if (r) {
      var i = this.dom.getHref(r);
      this.prevent.checkUrl(i) || this.cache.has(i) || this.cache.set(i, this.request(i, this.timeout, this.onRequestError.bind(this, r, "enter")).catch(function(n) {
        t.logger.error(n)
      }))
    }
  }, en.prototype.G = function(n) {
    var t = this.Z(n);
    t && this.go(this.dom.getHref(t), t, n)
  }, en.prototype.W = function() {
    this.go(this.url.getHref(), "popstate")
  }, en.prototype.Z = function(n) {
    for (var t = n.target; t && !this.dom.getHref(t);) t = t.parentNode;
    if (t && !this.prevent.checkLink(t, n, t.href)) return t
  }, en.prototype._ = function() {
    var n = this.url.getHref(),
      t = {
        container: this.dom.getContainer(),
        html: this.dom.getHtml(),
        namespace: this.dom.getNamespace(),
        url: Object.assign({}, {
          href: n
        }, this.url.parse(n))
      };
    this.V = {
      current: t,
      next: Object.assign({}, this.schemaPage),
      trigger: void 0
    }, this.hooks.do("reset", this.data)
  }, en.prototype.Y = function(n) {
    var t = this.dom.toDocument(n.next.html);
    document.title = t.title
  }, Object.defineProperties(en.prototype, on), new en
});

/*!
 * headroom.js v0.11.0 - Give your page some headroom. Hide your header until you need it
 * Copyright (c) 2020 Nick Williams - http://wicky.nillia.ms/headroom.js
 * License: MIT
 */

! function(t, n) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : (t = t || self).Headroom = n()
}(this, function() {
  "use strict";

  function t() {
    return "undefined" != typeof window
  }

  function d(t) {
    return function(t) {
      return t && t.document && function(t) {
        return 9 === t.nodeType
      }(t.document)
    }(t) ? function(t) {
      var n = t.document,
        o = n.body,
        s = n.documentElement;
      return {
        scrollHeight: function() {
          return Math.max(o.scrollHeight, s.scrollHeight, o.offsetHeight, s.offsetHeight, o.clientHeight, s.clientHeight)
        },
        height: function() {
          return t.innerHeight || s.clientHeight || o.clientHeight
        },
        scrollY: function() {
          return void 0 !== t.pageYOffset ? t.pageYOffset : (s || o.parentNode || o).scrollTop
        }
      }
    }(t) : function(t) {
      return {
        scrollHeight: function() {
          return Math.max(t.scrollHeight, t.offsetHeight, t.clientHeight)
        },
        height: function() {
          return Math.max(t.offsetHeight, t.clientHeight)
        },
        scrollY: function() {
          return t.scrollTop
        }
      }
    }(t)
  }

  function n(t, s, e) {
    var n, o = function() {
        var n = !1;
        try {
          var t = {
            get passive() {
              n = !0
            }
          };
          window.addEventListener("test", t, t), window.removeEventListener("test", t, t)
        } catch (t) {
          n = !1
        }
        return n
      }(),
      i = !1,
      r = d(t),
      l = r.scrollY(),
      a = {};

    function c() {
      var t = Math.round(r.scrollY()),
        n = r.height(),
        o = r.scrollHeight();
      a.scrollY = t, a.lastScrollY = l, a.direction = l < t ? "down" : "up", a.distance = Math.abs(t - l), a.isOutOfBounds = t < 0 || o < t + n, a.top = t <= s.offset, a.bottom = o <= t + n, a.toleranceExceeded = a.distance > s.tolerance[a.direction], e(a), l = t, i = !1
    }

    function h() {
      i || (i = !0, n = requestAnimationFrame(c))
    }
    var u = !!o && {
      passive: !0,
      capture: !1
    };
    return t.addEventListener("scroll", h, u), c(), {
      destroy: function() {
        cancelAnimationFrame(n), t.removeEventListener("scroll", h, u)
      }
    }
  }

  function o(t, n) {
    n = n || {}, Object.assign(this, o.options, n), this.classes = Object.assign({}, o.options.classes, n.classes), this.elem = t, this.tolerance = function(t) {
      return t === Object(t) ? t : {
        down: t,
        up: t
      }
    }(this.tolerance), this.initialised = !1, this.frozen = !1
  }
  return o.prototype = {
    constructor: o,
    init: function() {
      return o.cutsTheMustard && !this.initialised && (this.addClass("initial"), this.initialised = !0, setTimeout(function(t) {
        t.scrollTracker = n(t.scroller, {
          offset: t.offset,
          tolerance: t.tolerance
        }, t.update.bind(t))
      }, 100, this)), this
    },
    destroy: function() {
      this.initialised = !1, Object.keys(this.classes).forEach(this.removeClass, this), this.scrollTracker.destroy()
    },
    unpin: function() {
      !this.hasClass("pinned") && this.hasClass("unpinned") || (this.addClass("unpinned"), this.removeClass("pinned"), this.onUnpin && this.onUnpin.call(this))
    },
    pin: function() {
      this.hasClass("unpinned") && (this.addClass("pinned"), this.removeClass("unpinned"), this.onPin && this.onPin.call(this))
    },
    freeze: function() {
      this.frozen = !0, this.addClass("frozen")
    },
    unfreeze: function() {
      this.frozen = !1, this.removeClass("frozen")
    },
    top: function() {
      this.hasClass("top") || (this.addClass("top"), this.removeClass("notTop"), this.onTop && this.onTop.call(this))
    },
    notTop: function() {
      this.hasClass("notTop") || (this.addClass("notTop"), this.removeClass("top"), this.onNotTop && this.onNotTop.call(this))
    },
    bottom: function() {
      this.hasClass("bottom") || (this.addClass("bottom"), this.removeClass("notBottom"), this.onBottom && this.onBottom.call(this))
    },
    notBottom: function() {
      this.hasClass("notBottom") || (this.addClass("notBottom"), this.removeClass("bottom"), this.onNotBottom && this.onNotBottom.call(this))
    },
    shouldUnpin: function(t) {
      return "down" === t.direction && !t.top && t.toleranceExceeded
    },
    shouldPin: function(t) {
      return "up" === t.direction && t.toleranceExceeded || t.top
    },
    addClass: function(t) {
      this.elem.classList.add.apply(this.elem.classList, this.classes[t].split(" "))
    },
    removeClass: function(t) {
      this.elem.classList.remove.apply(this.elem.classList, this.classes[t].split(" "))
    },
    hasClass: function(t) {
      return this.classes[t].split(" ").every(function(t) {
        return this.classList.contains(t)
      }, this.elem)
    },
    update: function(t) {
      t.isOutOfBounds || !0 !== this.frozen && (t.top ? this.top() : this.notTop(), t.bottom ? this.bottom() : this.notBottom(), this.shouldUnpin(t) ? this.unpin() : this.shouldPin(t) && this.pin())
    }
  }, o.options = {
    tolerance: {
      up: 0,
      down: 0
    },
    offset: 0,
    scroller: t() ? window : null,
    classes: {
      frozen: "headroom--frozen",
      pinned: "headroom--pinned",
      unpinned: "headroom--unpinned",
      top: "headroom--top",
      notTop: "headroom--not-top",
      bottom: "headroom--bottom",
      notBottom: "headroom--not-bottom",
      initial: "headroom"
    }
  }, o.cutsTheMustard = !!(t() && function() {}.bind && "classList" in document.documentElement && Object.assign && Object.keys && requestAnimationFrame), o
});

/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */

! function(t, e) {
  "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
    return e(t, i)
  }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function(t, e) {
  "use strict";

  function i(i, s, a) {
    function u(t, e, o) {
      var n, s = "$()." + i + '("' + e + '")';
      return t.each(function(t, u) {
        var h = a.data(u, i);
        if (!h) return void r(i + " not initialized. Cannot call methods, i.e. " + s);
        var d = h[e];
        if (!d || "_" == e.charAt(0)) return void r(s + " is not a valid method");
        var l = d.apply(h, o);
        n = void 0 === n ? l : n
      }), void 0 !== n ? n : t
    }

    function h(t, e) {
      t.each(function(t, o) {
        var n = a.data(o, i);
        n ? (n.option(e), n._init()) : (n = new s(o, e), a.data(o, i, n))
      })
    }
    a = a || e || t.jQuery, a && (s.prototype.option || (s.prototype.option = function(t) {
      a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
    }), a.fn[i] = function(t) {
      if ("string" == typeof t) {
        var e = n.call(arguments, 1);
        return u(this, t, e)
      }
      return h(this, t), this
    }, o(a))
  }

  function o(t) {
    !t || t && t.bridget || (t.bridget = i)
  }
  var n = Array.prototype.slice,
    s = t.console,
    r = "undefined" == typeof s ? function() {} : function(t) {
      s.error(t)
    };
  return o(e || t.jQuery), i
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function() {
  function t() {}
  var e = t.prototype;
  return e.on = function(t, e) {
    if (t && e) {
      var i = this._events = this._events || {},
        o = i[t] = i[t] || [];
      return o.indexOf(e) == -1 && o.push(e), this
    }
  }, e.once = function(t, e) {
    if (t && e) {
      this.on(t, e);
      var i = this._onceEvents = this._onceEvents || {},
        o = i[t] = i[t] || {};
      return o[e] = !0, this
    }
  }, e.off = function(t, e) {
    var i = this._events && this._events[t];
    if (i && i.length) {
      var o = i.indexOf(e);
      return o != -1 && i.splice(o, 1), this
    }
  }, e.emitEvent = function(t, e) {
    var i = this._events && this._events[t];
    if (i && i.length) {
      i = i.slice(0), e = e || [];
      for (var o = this._onceEvents && this._onceEvents[t], n = 0; n < i.length; n++) {
        var s = i[n],
          r = o && o[s];
        r && (this.off(t, s), delete o[s]), s.apply(this, e)
      }
      return this
    }
  }, e.allOff = function() {
    delete this._events, delete this._onceEvents
  }, t
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function() {
  "use strict";

  function t(t) {
    var e = parseFloat(t),
      i = t.indexOf("%") == -1 && !isNaN(e);
    return i && e
  }

  function e() {}

  function i() {
    for (var t = {
        width: 0,
        height: 0,
        innerWidth: 0,
        innerHeight: 0,
        outerWidth: 0,
        outerHeight: 0
      }, e = 0; e < h; e++) {
      var i = u[e];
      t[i] = 0
    }
    return t
  }

  function o(t) {
    var e = getComputedStyle(t);
    return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e
  }

  function n() {
    if (!d) {
      d = !0;
      var e = document.createElement("div");
      e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
      var i = document.body || document.documentElement;
      i.appendChild(e);
      var n = o(e);
      r = 200 == Math.round(t(n.width)), s.isBoxSizeOuter = r, i.removeChild(e)
    }
  }

  function s(e) {
    if (n(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
      var s = o(e);
      if ("none" == s.display) return i();
      var a = {};
      a.width = e.offsetWidth, a.height = e.offsetHeight;
      for (var d = a.isBorderBox = "border-box" == s.boxSizing, l = 0; l < h; l++) {
        var f = u[l],
          c = s[f],
          m = parseFloat(c);
        a[f] = isNaN(m) ? 0 : m
      }
      var p = a.paddingLeft + a.paddingRight,
        y = a.paddingTop + a.paddingBottom,
        g = a.marginLeft + a.marginRight,
        v = a.marginTop + a.marginBottom,
        _ = a.borderLeftWidth + a.borderRightWidth,
        z = a.borderTopWidth + a.borderBottomWidth,
        I = d && r,
        x = t(s.width);
      x !== !1 && (a.width = x + (I ? 0 : p + _));
      var S = t(s.height);
      return S !== !1 && (a.height = S + (I ? 0 : y + z)), a.innerWidth = a.width - (p + _), a.innerHeight = a.height - (y + z), a.outerWidth = a.width + g, a.outerHeight = a.height + v, a
    }
  }
  var r, a = "undefined" == typeof console ? e : function(t) {
      console.error(t)
    },
    u = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
    h = u.length,
    d = !1;
  return s
}),
function(t, e) {
  "use strict";
  "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function() {
  "use strict";
  var t = function() {
    var t = window.Element.prototype;
    if (t.matches) return "matches";
    if (t.matchesSelector) return "matchesSelector";
    for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
      var o = e[i],
        n = o + "MatchesSelector";
      if (t[n]) return n
    }
  }();
  return function(e, i) {
    return e[t](i)
  }
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
    return e(t, i)
  }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, function(t, e) {
  var i = {};
  i.extend = function(t, e) {
    for (var i in e) t[i] = e[i];
    return t
  }, i.modulo = function(t, e) {
    return (t % e + e) % e
  };
  var o = Array.prototype.slice;
  i.makeArray = function(t) {
    if (Array.isArray(t)) return t;
    if (null === t || void 0 === t) return [];
    var e = "object" == typeof t && "number" == typeof t.length;
    return e ? o.call(t) : [t]
  }, i.removeFrom = function(t, e) {
    var i = t.indexOf(e);
    i != -1 && t.splice(i, 1)
  }, i.getParent = function(t, i) {
    for (; t.parentNode && t != document.body;)
      if (t = t.parentNode, e(t, i)) return t
  }, i.getQueryElement = function(t) {
    return "string" == typeof t ? document.querySelector(t) : t
  }, i.handleEvent = function(t) {
    var e = "on" + t.type;
    this[e] && this[e](t)
  }, i.filterFindElements = function(t, o) {
    t = i.makeArray(t);
    var n = [];
    return t.forEach(function(t) {
      if (t instanceof HTMLElement) {
        if (!o) return void n.push(t);
        e(t, o) && n.push(t);
        for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++) n.push(i[s])
      }
    }), n
  }, i.debounceMethod = function(t, e, i) {
    i = i || 100;
    var o = t.prototype[e],
      n = e + "Timeout";
    t.prototype[e] = function() {
      var t = this[n];
      clearTimeout(t);
      var e = arguments,
        s = this;
      this[n] = setTimeout(function() {
        o.apply(s, e), delete s[n]
      }, i)
    }
  }, i.docReady = function(t) {
    var e = document.readyState;
    "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
  }, i.toDashed = function(t) {
    return t.replace(/(.)([A-Z])/g, function(t, e, i) {
      return e + "-" + i
    }).toLowerCase()
  };
  var n = t.console;
  return i.htmlInit = function(e, o) {
    i.docReady(function() {
      var s = i.toDashed(o),
        r = "data-" + s,
        a = document.querySelectorAll("[" + r + "]"),
        u = document.querySelectorAll(".js-" + s),
        h = i.makeArray(a).concat(i.makeArray(u)),
        d = r + "-options",
        l = t.jQuery;
      h.forEach(function(t) {
        var i, s = t.getAttribute(r) || t.getAttribute(d);
        try {
          i = s && JSON.parse(s)
        } catch (a) {
          return void(n && n.error("Error parsing " + r + " on " + t.className + ": " + a))
        }
        var u = new e(t, i);
        l && l.data(t, o, u)
      })
    })
  }, i
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, function(t, e) {
  "use strict";

  function i(t) {
    for (var e in t) return !1;
    return e = null, !0
  }

  function o(t, e) {
    t && (this.element = t, this.layout = e, this.position = {
      x: 0,
      y: 0
    }, this._create())
  }

  function n(t) {
    return t.replace(/([A-Z])/g, function(t) {
      return "-" + t.toLowerCase()
    })
  }
  var s = document.documentElement.style,
    r = "string" == typeof s.transition ? "transition" : "WebkitTransition",
    a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
    u = {
      WebkitTransition: "webkitTransitionEnd",
      transition: "transitionend"
    } [r],
    h = {
      transform: a,
      transition: r,
      transitionDuration: r + "Duration",
      transitionProperty: r + "Property",
      transitionDelay: r + "Delay"
    },
    d = o.prototype = Object.create(t.prototype);
  d.constructor = o, d._create = function() {
    this._transn = {
      ingProperties: {},
      clean: {},
      onEnd: {}
    }, this.css({
      position: "absolute"
    })
  }, d.handleEvent = function(t) {
    var e = "on" + t.type;
    this[e] && this[e](t)
  }, d.getSize = function() {
    this.size = e(this.element)
  }, d.css = function(t) {
    var e = this.element.style;
    for (var i in t) {
      var o = h[i] || i;
      e[o] = t[i]
    }
  }, d.getPosition = function() {
    var t = getComputedStyle(this.element),
      e = this.layout._getOption("originLeft"),
      i = this.layout._getOption("originTop"),
      o = t[e ? "left" : "right"],
      n = t[i ? "top" : "bottom"],
      s = parseFloat(o),
      r = parseFloat(n),
      a = this.layout.size;
    o.indexOf("%") != -1 && (s = s / 100 * a.width), n.indexOf("%") != -1 && (r = r / 100 * a.height), s = isNaN(s) ? 0 : s, r = isNaN(r) ? 0 : r, s -= e ? a.paddingLeft : a.paddingRight, r -= i ? a.paddingTop : a.paddingBottom, this.position.x = s, this.position.y = r
  }, d.layoutPosition = function() {
    var t = this.layout.size,
      e = {},
      i = this.layout._getOption("originLeft"),
      o = this.layout._getOption("originTop"),
      n = i ? "paddingLeft" : "paddingRight",
      s = i ? "left" : "right",
      r = i ? "right" : "left",
      a = this.position.x + t[n];
    e[s] = this.getXValue(a), e[r] = "";
    var u = o ? "paddingTop" : "paddingBottom",
      h = o ? "top" : "bottom",
      d = o ? "bottom" : "top",
      l = this.position.y + t[u];
    e[h] = this.getYValue(l), e[d] = "", this.css(e), this.emitEvent("layout", [this])
  }, d.getXValue = function(t) {
    var e = this.layout._getOption("horizontal");
    return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
  }, d.getYValue = function(t) {
    var e = this.layout._getOption("horizontal");
    return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
  }, d._transitionTo = function(t, e) {
    this.getPosition();
    var i = this.position.x,
      o = this.position.y,
      n = t == this.position.x && e == this.position.y;
    if (this.setPosition(t, e), n && !this.isTransitioning) return void this.layoutPosition();
    var s = t - i,
      r = e - o,
      a = {};
    a.transform = this.getTranslate(s, r), this.transition({
      to: a,
      onTransitionEnd: {
        transform: this.layoutPosition
      },
      isCleaning: !0
    })
  }, d.getTranslate = function(t, e) {
    var i = this.layout._getOption("originLeft"),
      o = this.layout._getOption("originTop");
    return t = i ? t : -t, e = o ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)"
  }, d.goTo = function(t, e) {
    this.setPosition(t, e), this.layoutPosition()
  }, d.moveTo = d._transitionTo, d.setPosition = function(t, e) {
    this.position.x = parseFloat(t), this.position.y = parseFloat(e)
  }, d._nonTransition = function(t) {
    this.css(t.to), t.isCleaning && this._removeStyles(t.to);
    for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
  }, d.transition = function(t) {
    if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
    var e = this._transn;
    for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
    for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
    if (t.from) {
      this.css(t.from);
      var o = this.element.offsetHeight;
      o = null
    }
    this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
  };
  var l = "opacity," + n(a);
  d.enableTransition = function() {
    if (!this.isTransitioning) {
      var t = this.layout.options.transitionDuration;
      t = "number" == typeof t ? t + "ms" : t, this.css({
        transitionProperty: l,
        transitionDuration: t,
        transitionDelay: this.staggerDelay || 0
      }), this.element.addEventListener(u, this, !1)
    }
  }, d.onwebkitTransitionEnd = function(t) {
    this.ontransitionend(t)
  }, d.onotransitionend = function(t) {
    this.ontransitionend(t)
  };
  var f = {
    "-webkit-transform": "transform"
  };
  d.ontransitionend = function(t) {
    if (t.target === this.element) {
      var e = this._transn,
        o = f[t.propertyName] || t.propertyName;
      if (delete e.ingProperties[o], i(e.ingProperties) && this.disableTransition(), o in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[o]), o in e.onEnd) {
        var n = e.onEnd[o];
        n.call(this), delete e.onEnd[o]
      }
      this.emitEvent("transitionEnd", [this])
    }
  }, d.disableTransition = function() {
    this.removeTransitionStyles(), this.element.removeEventListener(u, this, !1), this.isTransitioning = !1
  }, d._removeStyles = function(t) {
    var e = {};
    for (var i in t) e[i] = "";
    this.css(e)
  };
  var c = {
    transitionProperty: "",
    transitionDuration: "",
    transitionDelay: ""
  };
  return d.removeTransitionStyles = function() {
    this.css(c)
  }, d.stagger = function(t) {
    t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
  }, d.removeElem = function() {
    this.element.parentNode.removeChild(this.element), this.css({
      display: ""
    }), this.emitEvent("remove", [this])
  }, d.remove = function() {
    return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
      this.removeElem()
    }), void this.hide()) : void this.removeElem()
  }, d.reveal = function() {
    delete this.isHidden, this.css({
      display: ""
    });
    var t = this.layout.options,
      e = {},
      i = this.getHideRevealTransitionEndProperty("visibleStyle");
    e[i] = this.onRevealTransitionEnd, this.transition({
      from: t.hiddenStyle,
      to: t.visibleStyle,
      isCleaning: !0,
      onTransitionEnd: e
    })
  }, d.onRevealTransitionEnd = function() {
    this.isHidden || this.emitEvent("reveal")
  }, d.getHideRevealTransitionEndProperty = function(t) {
    var e = this.layout.options[t];
    if (e.opacity) return "opacity";
    for (var i in e) return i
  }, d.hide = function() {
    this.isHidden = !0, this.css({
      display: ""
    });
    var t = this.layout.options,
      e = {},
      i = this.getHideRevealTransitionEndProperty("hiddenStyle");
    e[i] = this.onHideTransitionEnd, this.transition({
      from: t.visibleStyle,
      to: t.hiddenStyle,
      isCleaning: !0,
      onTransitionEnd: e
    })
  }, d.onHideTransitionEnd = function() {
    this.isHidden && (this.css({
      display: "none"
    }), this.emitEvent("hide"))
  }, d.destroy = function() {
    this.css({
      position: "",
      left: "",
      right: "",
      top: "",
      bottom: "",
      transition: "",
      transform: ""
    })
  }, o
}),
function(t, e) {
  "use strict";
  "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, o, n, s) {
    return e(t, i, o, n, s)
  }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function(t, e, i, o, n) {
  "use strict";

  function s(t, e) {
    var i = o.getQueryElement(t);
    if (!i) return void(u && u.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
    this.element = i, h && (this.$element = h(this.element)), this.options = o.extend({}, this.constructor.defaults), this.option(e);
    var n = ++l;
    this.element.outlayerGUID = n, f[n] = this, this._create();
    var s = this._getOption("initLayout");
    s && this.layout()
  }

  function r(t) {
    function e() {
      t.apply(this, arguments)
    }
    return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
  }

  function a(t) {
    if ("number" == typeof t) return t;
    var e = t.match(/(^\d*\.?\d*)(\w*)/),
      i = e && e[1],
      o = e && e[2];
    if (!i.length) return 0;
    i = parseFloat(i);
    var n = m[o] || 1;
    return i * n
  }
  var u = t.console,
    h = t.jQuery,
    d = function() {},
    l = 0,
    f = {};
  s.namespace = "outlayer", s.Item = n, s.defaults = {
    containerStyle: {
      position: "relative"
    },
    initLayout: !0,
    originLeft: !0,
    originTop: !0,
    resize: !0,
    resizeContainer: !0,
    transitionDuration: "0.4s",
    hiddenStyle: {
      opacity: 0,
      transform: "scale(0.001)"
    },
    visibleStyle: {
      opacity: 1,
      transform: "scale(1)"
    }
  };
  var c = s.prototype;
  o.extend(c, e.prototype), c.option = function(t) {
    o.extend(this.options, t)
  }, c._getOption = function(t) {
    var e = this.constructor.compatOptions[t];
    return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
  }, s.compatOptions = {
    initLayout: "isInitLayout",
    horizontal: "isHorizontal",
    layoutInstant: "isLayoutInstant",
    originLeft: "isOriginLeft",
    originTop: "isOriginTop",
    resize: "isResizeBound",
    resizeContainer: "isResizingContainer"
  }, c._create = function() {
    this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle);
    var t = this._getOption("resize");
    t && this.bindResize()
  }, c.reloadItems = function() {
    this.items = this._itemize(this.element.children)
  }, c._itemize = function(t) {
    for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0; n < e.length; n++) {
      var s = e[n],
        r = new i(s, this);
      o.push(r)
    }
    return o
  }, c._filterFindItemElements = function(t) {
    return o.filterFindElements(t, this.options.itemSelector)
  }, c.getItemElements = function() {
    return this.items.map(function(t) {
      return t.element
    })
  }, c.layout = function() {
    this._resetLayout(), this._manageStamps();
    var t = this._getOption("layoutInstant"),
      e = void 0 !== t ? t : !this._isLayoutInited;
    this.layoutItems(this.items, e), this._isLayoutInited = !0
  }, c._init = c.layout, c._resetLayout = function() {
    this.getSize()
  }, c.getSize = function() {
    this.size = i(this.element)
  }, c._getMeasurement = function(t, e) {
    var o, n = this.options[t];
    n ? ("string" == typeof n ? o = this.element.querySelector(n) : n instanceof HTMLElement && (o = n), this[t] = o ? i(o)[e] : n) : this[t] = 0
  }, c.layoutItems = function(t, e) {
    t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
  }, c._getItemsForLayout = function(t) {
    return t.filter(function(t) {
      return !t.isIgnored
    })
  }, c._layoutItems = function(t, e) {
    if (this._emitCompleteOnItems("layout", t), t && t.length) {
      var i = [];
      t.forEach(function(t) {
        var o = this._getItemLayoutPosition(t);
        o.item = t, o.isInstant = e || t.isLayoutInstant, i.push(o)
      }, this), this._processLayoutQueue(i)
    }
  }, c._getItemLayoutPosition = function() {
    return {
      x: 0,
      y: 0
    }
  }, c._processLayoutQueue = function(t) {
    this.updateStagger(), t.forEach(function(t, e) {
      this._positionItem(t.item, t.x, t.y, t.isInstant, e)
    }, this)
  }, c.updateStagger = function() {
    var t = this.options.stagger;
    return null === t || void 0 === t ? void(this.stagger = 0) : (this.stagger = a(t), this.stagger)
  }, c._positionItem = function(t, e, i, o, n) {
    o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i))
  }, c._postLayout = function() {
    this.resizeContainer()
  }, c.resizeContainer = function() {
    var t = this._getOption("resizeContainer");
    if (t) {
      var e = this._getContainerSize();
      e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
    }
  }, c._getContainerSize = d, c._setContainerMeasure = function(t, e) {
    if (void 0 !== t) {
      var i = this.size;
      i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
    }
  }, c._emitCompleteOnItems = function(t, e) {
    function i() {
      n.dispatchEvent(t + "Complete", null, [e])
    }

    function o() {
      r++, r == s && i()
    }
    var n = this,
      s = e.length;
    if (!e || !s) return void i();
    var r = 0;
    e.forEach(function(e) {
      e.once(t, o)
    })
  }, c.dispatchEvent = function(t, e, i) {
    var o = e ? [e].concat(i) : i;
    if (this.emitEvent(t, o), h)
      if (this.$element = this.$element || h(this.element), e) {
        var n = h.Event(e);
        n.type = t, this.$element.trigger(n, i)
      } else this.$element.trigger(t, i)
  }, c.ignore = function(t) {
    var e = this.getItem(t);
    e && (e.isIgnored = !0)
  }, c.unignore = function(t) {
    var e = this.getItem(t);
    e && delete e.isIgnored
  }, c.stamp = function(t) {
    t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
  }, c.unstamp = function(t) {
    t = this._find(t), t && t.forEach(function(t) {
      o.removeFrom(this.stamps, t), this.unignore(t)
    }, this)
  }, c._find = function(t) {
    if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), t = o.makeArray(t)
  }, c._manageStamps = function() {
    this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
  }, c._getBoundingRect = function() {
    var t = this.element.getBoundingClientRect(),
      e = this.size;
    this._boundingRect = {
      left: t.left + e.paddingLeft + e.borderLeftWidth,
      top: t.top + e.paddingTop + e.borderTopWidth,
      right: t.right - (e.paddingRight + e.borderRightWidth),
      bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
    }
  }, c._manageStamp = d, c._getElementOffset = function(t) {
    var e = t.getBoundingClientRect(),
      o = this._boundingRect,
      n = i(t),
      s = {
        left: e.left - o.left - n.marginLeft,
        top: e.top - o.top - n.marginTop,
        right: o.right - e.right - n.marginRight,
        bottom: o.bottom - e.bottom - n.marginBottom
      };
    return s
  }, c.handleEvent = o.handleEvent, c.bindResize = function() {
    t.addEventListener("resize", this), this.isResizeBound = !0
  }, c.unbindResize = function() {
    t.removeEventListener("resize", this), this.isResizeBound = !1
  }, c.onresize = function() {
    this.resize()
  }, o.debounceMethod(s, "onresize", 100), c.resize = function() {
    this.isResizeBound && this.needsResizeLayout() && this.layout()
  }, c.needsResizeLayout = function() {
    var t = i(this.element),
      e = this.size && t;
    return e && t.innerWidth !== this.size.innerWidth
  }, c.addItems = function(t) {
    var e = this._itemize(t);
    return e.length && (this.items = this.items.concat(e)), e
  }, c.appended = function(t) {
    var e = this.addItems(t);
    e.length && (this.layoutItems(e, !0), this.reveal(e))
  }, c.prepended = function(t) {
    var e = this._itemize(t);
    if (e.length) {
      var i = this.items.slice(0);
      this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
    }
  }, c.reveal = function(t) {
    if (this._emitCompleteOnItems("reveal", t), t && t.length) {
      var e = this.updateStagger();
      t.forEach(function(t, i) {
        t.stagger(i * e), t.reveal()
      })
    }
  }, c.hide = function(t) {
    if (this._emitCompleteOnItems("hide", t), t && t.length) {
      var e = this.updateStagger();
      t.forEach(function(t, i) {
        t.stagger(i * e), t.hide()
      })
    }
  }, c.revealItemElements = function(t) {
    var e = this.getItems(t);
    this.reveal(e)
  }, c.hideItemElements = function(t) {
    var e = this.getItems(t);
    this.hide(e)
  }, c.getItem = function(t) {
    for (var e = 0; e < this.items.length; e++) {
      var i = this.items[e];
      if (i.element == t) return i
    }
  }, c.getItems = function(t) {
    t = o.makeArray(t);
    var e = [];
    return t.forEach(function(t) {
      var i = this.getItem(t);
      i && e.push(i)
    }, this), e
  }, c.remove = function(t) {
    var e = this.getItems(t);
    this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function(t) {
      t.remove(), o.removeFrom(this.items, t)
    }, this)
  }, c.destroy = function() {
    var t = this.element.style;
    t.height = "", t.position = "", t.width = "", this.items.forEach(function(t) {
      t.destroy()
    }), this.unbindResize();
    var e = this.element.outlayerGUID;
    delete f[e], delete this.element.outlayerGUID, h && h.removeData(this.element, this.constructor.namespace)
  }, s.data = function(t) {
    t = o.getQueryElement(t);
    var e = t && t.outlayerGUID;
    return e && f[e]
  }, s.create = function(t, e) {
    var i = r(s);
    return i.defaults = o.extend({}, s.defaults), o.extend(i.defaults, e), i.compatOptions = o.extend({}, s.compatOptions), i.namespace = t, i.data = s.data, i.Item = r(n), o.htmlInit(i, t), h && h.bridget && h.bridget(t, i), i
  };
  var m = {
    ms: 1,
    s: 1e3
  };
  return s.Item = n, s
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("isotope-layout/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
}(window, function(t) {
  "use strict";

  function e() {
    t.Item.apply(this, arguments)
  }
  var i = e.prototype = Object.create(t.Item.prototype),
    o = i._create;
  i._create = function() {
    this.id = this.layout.itemGUID++, o.call(this), this.sortData = {}
  }, i.updateSortData = function() {
    if (!this.isIgnored) {
      this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
      var t = this.layout.options.getSortData,
        e = this.layout._sorters;
      for (var i in t) {
        var o = e[i];
        this.sortData[i] = o(this.element, this)
      }
    }
  };
  var n = i.destroy;
  return i.destroy = function() {
    n.apply(this, arguments), this.css({
      display: ""
    })
  }, e
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window, function(t, e) {
  "use strict";

  function i(t) {
    this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
  }
  var o = i.prototype,
    n = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
  return n.forEach(function(t) {
    o[t] = function() {
      return e.prototype[t].apply(this.isotope, arguments)
    }
  }), o.needsVerticalResizeLayout = function() {
    var e = t(this.isotope.element),
      i = this.isotope.size && e;
    return i && e.innerHeight != this.isotope.size.innerHeight
  }, o._getMeasurement = function() {
    this.isotope._getMeasurement.apply(this, arguments)
  }, o.getColumnWidth = function() {
    this.getSegmentSize("column", "Width")
  }, o.getRowHeight = function() {
    this.getSegmentSize("row", "Height")
  }, o.getSegmentSize = function(t, e) {
    var i = t + e,
      o = "outer" + e;
    if (this._getMeasurement(i, o), !this[i]) {
      var n = this.getFirstItemSize();
      this[i] = n && n[o] || this.isotope.size["inner" + e]
    }
  }, o.getFirstItemSize = function() {
    var e = this.isotope.filteredItems[0];
    return e && e.element && t(e.element)
  }, o.layout = function() {
    this.isotope.layout.apply(this.isotope, arguments)
  }, o.getSize = function() {
    this.isotope.getSize(), this.size = this.isotope.size
  }, i.modes = {}, i.create = function(t, e) {
    function n() {
      i.apply(this, arguments)
    }
    return n.prototype = Object.create(o), n.prototype.constructor = n, e && (n.options = e), n.prototype.namespace = t, i.modes[t] = n, n
  }, i
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, function(t, e) {
  var i = t.create("masonry");
  i.compatOptions.fitWidth = "isFitWidth";
  var o = i.prototype;
  return o._resetLayout = function() {
    this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
    for (var t = 0; t < this.cols; t++) this.colYs.push(0);
    this.maxY = 0, this.horizontalColIndex = 0
  }, o.measureColumns = function() {
    if (this.getContainerWidth(), !this.columnWidth) {
      var t = this.items[0],
        i = t && t.element;
      this.columnWidth = i && e(i).outerWidth || this.containerWidth
    }
    var o = this.columnWidth += this.gutter,
      n = this.containerWidth + this.gutter,
      s = n / o,
      r = o - n % o,
      a = r && r < 1 ? "round" : "floor";
    s = Math[a](s), this.cols = Math.max(s, 1)
  }, o.getContainerWidth = function() {
    var t = this._getOption("fitWidth"),
      i = t ? this.element.parentNode : this.element,
      o = e(i);
    this.containerWidth = o && o.innerWidth
  }, o._getItemLayoutPosition = function(t) {
    t.getSize();
    var e = t.size.outerWidth % this.columnWidth,
      i = e && e < 1 ? "round" : "ceil",
      o = Math[i](t.size.outerWidth / this.columnWidth);
    o = Math.min(o, this.cols);
    for (var n = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", s = this[n](o, t), r = {
        x: this.columnWidth * s.col,
        y: s.y
      }, a = s.y + t.size.outerHeight, u = o + s.col, h = s.col; h < u; h++) this.colYs[h] = a;
    return r
  }, o._getTopColPosition = function(t) {
    var e = this._getTopColGroup(t),
      i = Math.min.apply(Math, e);
    return {
      col: e.indexOf(i),
      y: i
    }
  }, o._getTopColGroup = function(t) {
    if (t < 2) return this.colYs;
    for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++) e[o] = this._getColGroupY(o, t);
    return e
  }, o._getColGroupY = function(t, e) {
    if (e < 2) return this.colYs[t];
    var i = this.colYs.slice(t, t + e);
    return Math.max.apply(Math, i)
  }, o._getHorizontalColPosition = function(t, e) {
    var i = this.horizontalColIndex % this.cols,
      o = t > 1 && i + t > this.cols;
    i = o ? 0 : i;
    var n = e.size.outerWidth && e.size.outerHeight;
    return this.horizontalColIndex = n ? i + t : this.horizontalColIndex, {
      col: i,
      y: this._getColGroupY(i, t)
    }
  }, o._manageStamp = function(t) {
    var i = e(t),
      o = this._getElementOffset(t),
      n = this._getOption("originLeft"),
      s = n ? o.left : o.right,
      r = s + i.outerWidth,
      a = Math.floor(s / this.columnWidth);
    a = Math.max(0, a);
    var u = Math.floor(r / this.columnWidth);
    u -= r % this.columnWidth ? 0 : 1, u = Math.min(this.cols - 1, u);
    for (var h = this._getOption("originTop"), d = (h ? o.top : o.bottom) + i.outerHeight, l = a; l <= u; l++) this.colYs[l] = Math.max(d, this.colYs[l])
  }, o._getContainerSize = function() {
    this.maxY = Math.max.apply(Math, this.colYs);
    var t = {
      height: this.maxY
    };
    return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
  }, o._getContainerFitWidth = function() {
    for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
    return (this.cols - t) * this.columnWidth - this.gutter
  }, o.needsResizeLayout = function() {
    var t = this.containerWidth;
    return this.getContainerWidth(), t != this.containerWidth
  }, i
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
}(window, function(t, e) {
  "use strict";
  var i = t.create("masonry"),
    o = i.prototype,
    n = {
      _getElementOffset: !0,
      layout: !0,
      _getMeasurement: !0
    };
  for (var s in e.prototype) n[s] || (o[s] = e.prototype[s]);
  var r = o.measureColumns;
  o.measureColumns = function() {
    this.items = this.isotope.filteredItems, r.call(this)
  };
  var a = o._getOption;
  return o._getOption = function(t) {
    return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
  }, i
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function(t) {
  "use strict";
  var e = t.create("fitRows"),
    i = e.prototype;
  return i._resetLayout = function() {
    this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
  }, i._getItemLayoutPosition = function(t) {
    t.getSize();
    var e = t.size.outerWidth + this.gutter,
      i = this.isotope.size.innerWidth + this.gutter;
    0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
    var o = {
      x: this.x,
      y: this.y
    };
    return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, o
  }, i._getContainerSize = function() {
    return {
      height: this.maxY
    }
  }, e
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function(t) {
  "use strict";
  var e = t.create("vertical", {
      horizontalAlignment: 0
    }),
    i = e.prototype;
  return i._resetLayout = function() {
    this.y = 0
  }, i._getItemLayoutPosition = function(t) {
    t.getSize();
    var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
      i = this.y;
    return this.y += t.size.outerHeight, {
      x: e,
      y: i
    }
  }, i._getContainerSize = function() {
    return {
      height: this.y
    }
  }, e
}),
function(t, e) {
  "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], function(i, o, n, s, r, a) {
    return e(t, i, o, n, s, r, a)
  }) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
}(window, function(t, e, i, o, n, s, r) {
  function a(t, e) {
    return function(i, o) {
      for (var n = 0; n < t.length; n++) {
        var s = t[n],
          r = i.sortData[s],
          a = o.sortData[s];
        if (r > a || r < a) {
          var u = void 0 !== e[s] ? e[s] : e,
            h = u ? 1 : -1;
          return (r > a ? 1 : -1) * h
        }
      }
      return 0
    }
  }
  var u = t.jQuery,
    h = String.prototype.trim ? function(t) {
      return t.trim()
    } : function(t) {
      return t.replace(/^\s+|\s+$/g, "")
    },
    d = e.create("isotope", {
      layoutMode: "masonry",
      isJQueryFiltering: !0,
      sortAscending: !0
    });
  d.Item = s, d.LayoutMode = r;
  var l = d.prototype;
  l._create = function() {
    this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
    for (var t in r.modes) this._initLayoutMode(t)
  }, l.reloadItems = function() {
    this.itemGUID = 0, e.prototype.reloadItems.call(this)
  }, l._itemize = function() {
    for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
      var o = t[i];
      o.id = this.itemGUID++
    }
    return this._updateItemsSortData(t), t
  }, l._initLayoutMode = function(t) {
    var e = r.modes[t],
      i = this.options[t] || {};
    this.options[t] = e.options ? n.extend(e.options, i) : i, this.modes[t] = new e(this)
  }, l.layout = function() {
    return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
  }, l._layout = function() {
    var t = this._getIsInstant();
    this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
  }, l.arrange = function(t) {
    this.option(t), this._getIsInstant();
    var e = this._filter(this.items);
    this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout()
  }, l._init = l.arrange, l._hideReveal = function(t) {
    this.reveal(t.needReveal), this.hide(t.needHide)
  }, l._getIsInstant = function() {
    var t = this._getOption("layoutInstant"),
      e = void 0 !== t ? t : !this._isLayoutInited;
    return this._isInstant = e, e
  }, l._bindArrangeComplete = function() {
    function t() {
      e && i && o && n.dispatchEvent("arrangeComplete", null, [n.filteredItems])
    }
    var e, i, o, n = this;
    this.once("layoutComplete", function() {
      e = !0, t()
    }), this.once("hideComplete", function() {
      i = !0, t()
    }), this.once("revealComplete", function() {
      o = !0, t()
    })
  }, l._filter = function(t) {
    var e = this.options.filter;
    e = e || "*";
    for (var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
      var a = t[r];
      if (!a.isIgnored) {
        var u = s(a);
        u && i.push(a), u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a)
      }
    }
    return {
      matches: i,
      needReveal: o,
      needHide: n
    }
  }, l._getFilterTest = function(t) {
    return u && this.options.isJQueryFiltering ? function(e) {
      return u(e.element).is(t);
    } : "function" == typeof t ? function(e) {
      return t(e.element)
    } : function(e) {
      return o(e.element, t)
    }
  }, l.updateSortData = function(t) {
    var e;
    t ? (t = n.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
  }, l._getSorters = function() {
    var t = this.options.getSortData;
    for (var e in t) {
      var i = t[e];
      this._sorters[e] = f(i)
    }
  }, l._updateItemsSortData = function(t) {
    for (var e = t && t.length, i = 0; e && i < e; i++) {
      var o = t[i];
      o.updateSortData()
    }
  };
  var f = function() {
    function t(t) {
      if ("string" != typeof t) return t;
      var i = h(t).split(" "),
        o = i[0],
        n = o.match(/^\[(.+)\]$/),
        s = n && n[1],
        r = e(s, o),
        a = d.sortDataParsers[i[1]];
      return t = a ? function(t) {
        return t && a(r(t))
      } : function(t) {
        return t && r(t)
      }
    }

    function e(t, e) {
      return t ? function(e) {
        return e.getAttribute(t)
      } : function(t) {
        var i = t.querySelector(e);
        return i && i.textContent
      }
    }
    return t
  }();
  d.sortDataParsers = {
    parseInt: function(t) {
      return parseInt(t, 10)
    },
    parseFloat: function(t) {
      return parseFloat(t)
    }
  }, l._sort = function() {
    if (this.options.sortBy) {
      var t = n.makeArray(this.options.sortBy);
      this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
      var e = a(this.sortHistory, this.options.sortAscending);
      this.filteredItems.sort(e)
    }
  }, l._getIsSameSortBy = function(t) {
    for (var e = 0; e < t.length; e++)
      if (t[e] != this.sortHistory[e]) return !1;
    return !0
  }, l._mode = function() {
    var t = this.options.layoutMode,
      e = this.modes[t];
    if (!e) throw new Error("No layout mode: " + t);
    return e.options = this.options[t], e
  }, l._resetLayout = function() {
    e.prototype._resetLayout.call(this), this._mode()._resetLayout()
  }, l._getItemLayoutPosition = function(t) {
    return this._mode()._getItemLayoutPosition(t)
  }, l._manageStamp = function(t) {
    this._mode()._manageStamp(t)
  }, l._getContainerSize = function() {
    return this._mode()._getContainerSize()
  }, l.needsResizeLayout = function() {
    return this._mode().needsResizeLayout()
  }, l.appended = function(t) {
    var e = this.addItems(t);
    if (e.length) {
      var i = this._filterRevealAdded(e);
      this.filteredItems = this.filteredItems.concat(i)
    }
  }, l.prepended = function(t) {
    var e = this._itemize(t);
    if (e.length) {
      this._resetLayout(), this._manageStamps();
      var i = this._filterRevealAdded(e);
      this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
    }
  }, l._filterRevealAdded = function(t) {
    var e = this._filter(t);
    return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
  }, l.insert = function(t) {
    var e = this.addItems(t);
    if (e.length) {
      var i, o, n = e.length;
      for (i = 0; i < n; i++) o = e[i], this.element.appendChild(o.element);
      var s = this._filter(e).matches;
      for (i = 0; i < n; i++) e[i].isLayoutInstant = !0;
      for (this.arrange(), i = 0; i < n; i++) delete e[i].isLayoutInstant;
      this.reveal(s)
    }
  };
  var c = l.remove;
  return l.remove = function(t) {
    t = n.makeArray(t);
    var e = this.getItems(t);
    c.call(this, t);
    for (var i = e && e.length, o = 0; i && o < i; o++) {
      var s = e[o];
      n.removeFrom(this.filteredItems, s)
    }
  }, l.shuffle = function() {
    for (var t = 0; t < this.items.length; t++) {
      var e = this.items[t];
      e.sortData.random = Math.random()
    }
    this.options.sortBy = "random", this._sort(), this._layout()
  }, l._noTransition = function(t, e) {
    var i = this.options.transitionDuration;
    this.options.transitionDuration = 0;
    var o = t.apply(this, e);
    return this.options.transitionDuration = i, o
  }, l.getFilteredItemElements = function() {
    return this.filteredItems.map(function(t) {
      return t.element
    })
  }, d
});
/*!
 * Packery layout mode PACKAGED v2.0.1
 * sub-classes Packery
 */

! function(a, b) {
  "function" == typeof define && define.amd ? define("packery/js/rect", b) : "object" == typeof module && module.exports ? module.exports = b() : (a.Packery = a.Packery || {}, a.Packery.Rect = b())
}(window, function() {
  function a(b) {
    for (var c in a.defaults) this[c] = a.defaults[c];
    for (c in b) this[c] = b[c]
  }
  a.defaults = {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  };
  var b = a.prototype;
  return b.contains = function(a) {
    var b = a.width || 0,
      c = a.height || 0;
    return this.x <= a.x && this.y <= a.y && this.x + this.width >= a.x + b && this.y + this.height >= a.y + c
  }, b.overlaps = function(a) {
    var b = this.x + this.width,
      c = this.y + this.height,
      d = a.x + a.width,
      e = a.y + a.height;
    return this.x < d && b > a.x && this.y < e && c > a.y
  }, b.getMaximalFreeRects = function(b) {
    if (!this.overlaps(b)) return !1;
    var c, d = [],
      e = this.x + this.width,
      f = this.y + this.height,
      g = b.x + b.width,
      h = b.y + b.height;
    return this.y < b.y && (c = new a({
      x: this.x,
      y: this.y,
      width: this.width,
      height: b.y - this.y
    }), d.push(c)), e > g && (c = new a({
      x: g,
      y: this.y,
      width: e - g,
      height: this.height
    }), d.push(c)), f > h && (c = new a({
      x: this.x,
      y: h,
      width: this.width,
      height: f - h
    }), d.push(c)), this.x < b.x && (c = new a({
      x: this.x,
      y: this.y,
      width: b.x - this.x,
      height: this.height
    }), d.push(c)), d
  }, b.canFit = function(a) {
    return this.width >= a.width && this.height >= a.height
  }, a
}),
function(a, b) {
  if ("function" == typeof define && define.amd) define("packery/js/packer", ["./rect"], b);
  else if ("object" == typeof module && module.exports) module.exports = b(require("./rect"));
  else {
    var c = a.Packery = a.Packery || {};
    c.Packer = b(c.Rect)
  }
}(window, function(a) {
  function b(a, b, c) {
    this.width = a || 0, this.height = b || 0, this.sortDirection = c || "downwardLeftToRight", this.reset()
  }
  var c = b.prototype;
  c.reset = function() {
    this.spaces = [];
    var b = new a({
      x: 0,
      y: 0,
      width: this.width,
      height: this.height
    });
    this.spaces.push(b), this.sorter = d[this.sortDirection] || d.downwardLeftToRight
  }, c.pack = function(a) {
    for (var b = 0; b < this.spaces.length; b++) {
      var c = this.spaces[b];
      if (c.canFit(a)) {
        this.placeInSpace(a, c);
        break
      }
    }
  }, c.columnPack = function(a) {
    for (var b = 0; b < this.spaces.length; b++) {
      var c = this.spaces[b],
        d = c.x <= a.x && c.x + c.width >= a.x + a.width && c.height >= a.height - .01;
      if (d) {
        a.y = c.y, this.placed(a);
        break
      }
    }
  }, c.rowPack = function(a) {
    for (var b = 0; b < this.spaces.length; b++) {
      var c = this.spaces[b],
        d = c.y <= a.y && c.y + c.height >= a.y + a.height && c.width >= a.width - .01;
      if (d) {
        a.x = c.x, this.placed(a);
        break
      }
    }
  }, c.placeInSpace = function(a, b) {
    a.x = b.x, a.y = b.y, this.placed(a)
  }, c.placed = function(a) {
    for (var b = [], c = 0; c < this.spaces.length; c++) {
      var d = this.spaces[c],
        e = d.getMaximalFreeRects(a);
      e ? b.push.apply(b, e) : b.push(d)
    }
    this.spaces = b, this.mergeSortSpaces()
  }, c.mergeSortSpaces = function() {
    b.mergeRects(this.spaces), this.spaces.sort(this.sorter)
  }, c.addSpace = function(a) {
    this.spaces.push(a), this.mergeSortSpaces()
  }, b.mergeRects = function(a) {
    var b = 0,
      c = a[b];
    a: for (; c;) {
      for (var d = 0, e = a[b + d]; e;) {
        if (e == c) d++;
        else {
          if (e.contains(c)) {
            a.splice(b, 1), c = a[b];
            continue a
          }
          c.contains(e) ? a.splice(b + d, 1) : d++
        }
        e = a[b + d]
      }
      b++, c = a[b]
    }
    return a
  };
  var d = {
    downwardLeftToRight: function(a, b) {
      return a.y - b.y || a.x - b.x
    },
    rightwardTopToBottom: function(a, b) {
      return a.x - b.x || a.y - b.y
    }
  };
  return b
}),
function(a, b) {
  "function" == typeof define && define.amd ? define("packery/js/item", ["outlayer/outlayer", "./rect"], b) : "object" == typeof module && module.exports ? module.exports = b(require("outlayer"), require("./rect")) : a.Packery.Item = b(a.Outlayer, a.Packery.Rect)
}(window, function(a, b) {
  var c = document.documentElement.style,
    d = "string" == typeof c.transform ? "transform" : "WebkitTransform",
    e = function() {
      a.Item.apply(this, arguments)
    },
    f = e.prototype = Object.create(a.Item.prototype),
    g = f._create;
  f._create = function() {
    g.call(this), this.rect = new b
  };
  var h = f.moveTo;
  return f.moveTo = function(a, b) {
    var c = Math.abs(this.position.x - a),
      d = Math.abs(this.position.y - b),
      e = this.layout.dragItemCount && !this.isPlacing && !this.isTransitioning && 1 > c && 1 > d;
    return e ? void this.goTo(a, b) : void h.apply(this, arguments)
  }, f.enablePlacing = function() {
    this.removeTransitionStyles(), this.isTransitioning && d && (this.element.style[d] = "none"), this.isTransitioning = !1, this.getSize(), this.layout._setRectSize(this.element, this.rect), this.isPlacing = !0
  }, f.disablePlacing = function() {
    this.isPlacing = !1
  }, f.removeElem = function() {
    this.element.parentNode.removeChild(this.element), this.layout.packer.addSpace(this.rect), this.emitEvent("remove", [this])
  }, f.showDropPlaceholder = function() {
    var a = this.dropPlaceholder;
    a || (a = this.dropPlaceholder = document.createElement("div"), a.className = "packery-drop-placeholder", a.style.position = "absolute"), a.style.width = this.size.width + "px", a.style.height = this.size.height + "px", this.positionDropPlaceholder(), this.layout.element.appendChild(a)
  }, f.positionDropPlaceholder = function() {
    this.dropPlaceholder.style[d] = "translate(" + this.rect.x + "px, " + this.rect.y + "px)"
  }, f.hideDropPlaceholder = function() {
    this.layout.element.removeChild(this.dropPlaceholder)
  }, e
}),
function(a, b) {
  "function" == typeof define && define.amd ? define("packery/js/packery", ["get-size/get-size", "outlayer/outlayer", "./rect", "./packer", "./item"], b) : "object" == typeof module && module.exports ? module.exports = b(require("get-size"), require("outlayer"), require("./rect"), require("./packer"), require("./item")) : a.Packery = b(a.getSize, a.Outlayer, a.Packery.Rect, a.Packery.Packer, a.Packery.Item)
}(window, function(a, b, c, d, e) {
  function f(a, b) {
    return a.position.y - b.position.y || a.position.x - b.position.x
  }

  function g(a, b) {
    return a.position.x - b.position.x || a.position.y - b.position.y
  }

  function h(a, b) {
    var c = b.x - a.x,
      d = b.y - a.y;
    return Math.sqrt(c * c + d * d)
  }
  c.prototype.canFit = function(a) {
    return this.width >= a.width - 1 && this.height >= a.height - 1
  };
  var i = b.create("packery");
  i.Item = e;
  var j = i.prototype;
  j._create = function() {
    b.prototype._create.call(this), this.packer = new d, this.shiftPacker = new d, this.isEnabled = !0, this.dragItemCount = 0;
    var a = this;
    this.handleDraggabilly = {
      dragStart: function() {
        a.itemDragStart(this.element)
      },
      dragMove: function() {
        a.itemDragMove(this.element, this.position.x, this.position.y)
      },
      dragEnd: function() {
        a.itemDragEnd(this.element)
      }
    }, this.handleUIDraggable = {
      start: function(b, c) {
        c && a.itemDragStart(b.currentTarget)
      },
      drag: function(b, c) {
        c && a.itemDragMove(b.currentTarget, c.position.left, c.position.top)
      },
      stop: function(b, c) {
        c && a.itemDragEnd(b.currentTarget)
      }
    }
  }, j._resetLayout = function() {
    this.getSize(), this._getMeasurements();
    var a, b, c;
    this._getOption("horizontal") ? (a = 1 / 0, b = this.size.innerHeight + this.gutter, c = "rightwardTopToBottom") : (a = this.size.innerWidth + this.gutter, b = 1 / 0, c = "downwardLeftToRight"), this.packer.width = this.shiftPacker.width = a, this.packer.height = this.shiftPacker.height = b, this.packer.sortDirection = this.shiftPacker.sortDirection = c, this.packer.reset(), this.maxY = 0, this.maxX = 0
  }, j._getMeasurements = function() {
    this._getMeasurement("columnWidth", "width"), this._getMeasurement("rowHeight", "height"), this._getMeasurement("gutter", "width")
  }, j._getItemLayoutPosition = function(a) {
    if (this._setRectSize(a.element, a.rect), this.isShifting || this.dragItemCount > 0) {
      var b = this._getPackMethod();
      this.packer[b](a.rect)
    } else this.packer.pack(a.rect);
    return this._setMaxXY(a.rect), a.rect
  }, j.shiftLayout = function() {
    this.isShifting = !0, this.layout(), delete this.isShifting
  }, j._getPackMethod = function() {
    return this._getOption("horizontal") ? "rowPack" : "columnPack"
  }, j._setMaxXY = function(a) {
    this.maxX = Math.max(a.x + a.width, this.maxX), this.maxY = Math.max(a.y + a.height, this.maxY)
  }, j._setRectSize = function(b, c) {
    var d = a(b),
      e = d.outerWidth,
      f = d.outerHeight;
    (e || f) && (e = this._applyGridGutter(e, this.columnWidth), f = this._applyGridGutter(f, this.rowHeight)), c.width = Math.min(e, this.packer.width), c.height = Math.min(f, this.packer.height)
  }, j._applyGridGutter = function(a, b) {
    if (!b) return a + this.gutter;
    b += this.gutter;
    var c = a % b,
      d = c && 1 > c ? "round" : "ceil";
    return a = Math[d](a / b) * b
  }, j._getContainerSize = function() {
    return this._getOption("horizontal") ? {
      width: this.maxX - this.gutter
    } : {
      height: this.maxY - this.gutter
    }
  }, j._manageStamp = function(a) {
    var b, d = this.getItem(a);
    if (d && d.isPlacing) b = d.rect;
    else {
      var e = this._getElementOffset(a);
      b = new c({
        x: this._getOption("originLeft") ? e.left : e.right,
        y: this._getOption("originTop") ? e.top : e.bottom
      })
    }
    this._setRectSize(a, b), this.packer.placed(b), this._setMaxXY(b)
  }, j.sortItemsByPosition = function() {
    var a = this._getOption("horizontal") ? g : f;
    this.items.sort(a)
  }, j.fit = function(a, b, c) {
    var d = this.getItem(a);
    d && (this.stamp(d.element), d.enablePlacing(), this.updateShiftTargets(d), b = void 0 === b ? d.rect.x : b, c = void 0 === c ? d.rect.y : c, this.shift(d, b, c), this._bindFitEvents(d), d.moveTo(d.rect.x, d.rect.y), this.shiftLayout(), this.unstamp(d.element), this.sortItemsByPosition(), d.disablePlacing())
  }, j._bindFitEvents = function(a) {
    function b() {
      d++, 2 == d && c.dispatchEvent("fitComplete", null, [a])
    }
    var c = this,
      d = 0;
    a.once("layout", b), this.once("layoutComplete", b)
  }, j.resize = function() {
    this.isResizeBound && this.needsResizeLayout() && (this.options.shiftPercentResize ? this.resizeShiftPercentLayout() : this.layout())
  }, j.needsResizeLayout = function() {
    var b = a(this.element),
      c = this._getOption("horizontal") ? "innerHeight" : "innerWidth";
    return b[c] != this.size[c]
  }, j.resizeShiftPercentLayout = function() {
    var b = this._getItemsForLayout(this.items),
      c = this._getOption("horizontal"),
      d = c ? "y" : "x",
      e = c ? "height" : "width",
      f = c ? "rowHeight" : "columnWidth",
      g = c ? "innerHeight" : "innerWidth",
      h = this[f];
    if (h = h && h + this.gutter) {
      this._getMeasurements();
      var i = this[f] + this.gutter;
      b.forEach(function(a) {
        var b = Math.round(a.rect[d] / h);
        a.rect[d] = b * i
      })
    } else {
      var j = a(this.element)[g] + this.gutter,
        k = this.packer[e];
      b.forEach(function(a) {
        a.rect[d] = a.rect[d] / k * j
      })
    }
    this.shiftLayout()
  }, j.itemDragStart = function(a) {
    if (this.isEnabled) {
      this.stamp(a);
      var b = this.getItem(a);
      b && (b.enablePlacing(), b.showDropPlaceholder(), this.dragItemCount++, this.updateShiftTargets(b))
    }
  }, j.updateShiftTargets = function(a) {
    this.shiftPacker.reset(), this._getBoundingRect();
    var b = this._getOption("originLeft"),
      d = this._getOption("originTop");
    this.stamps.forEach(function(a) {
      var e = this.getItem(a);
      if (!e || !e.isPlacing) {
        var f = this._getElementOffset(a),
          g = new c({
            x: b ? f.left : f.right,
            y: d ? f.top : f.bottom
          });
        this._setRectSize(a, g), this.shiftPacker.placed(g)
      }
    }, this);
    var e = this._getOption("horizontal"),
      f = e ? "rowHeight" : "columnWidth",
      g = e ? "height" : "width";
    this.shiftTargetKeys = [], this.shiftTargets = [];
    var h, i = this[f];
    if (i = i && i + this.gutter) {
      var j = Math.ceil(a.rect[g] / i),
        k = Math.floor((this.shiftPacker[g] + this.gutter) / i);
      h = (k - j) * i;
      for (var l = 0; k > l; l++) this._addShiftTarget(l * i, 0, h)
    } else h = this.shiftPacker[g] + this.gutter - a.rect[g], this._addShiftTarget(0, 0, h);
    var m = this._getItemsForLayout(this.items),
      n = this._getPackMethod();
    m.forEach(function(a) {
      var b = a.rect;
      this._setRectSize(a.element, b), this.shiftPacker[n](b), this._addShiftTarget(b.x, b.y, h);
      var c = e ? b.x + b.width : b.x,
        d = e ? b.y : b.y + b.height;
      if (this._addShiftTarget(c, d, h), i)
        for (var f = Math.round(b[g] / i), j = 1; f > j; j++) {
          var k = e ? c : b.x + i * j,
            l = e ? b.y + i * j : d;
          this._addShiftTarget(k, l, h)
        }
    }, this)
  }, j._addShiftTarget = function(a, b, c) {
    var d = this._getOption("horizontal") ? b : a;
    if (!(0 !== d && d > c)) {
      var e = a + "," + b,
        f = -1 != this.shiftTargetKeys.indexOf(e);
      f || (this.shiftTargetKeys.push(e), this.shiftTargets.push({
        x: a,
        y: b
      }))
    }
  }, j.shift = function(a, b, c) {
    var d, e = 1 / 0,
      f = {
        x: b,
        y: c
      };
    this.shiftTargets.forEach(function(a) {
      var b = h(a, f);
      e > b && (d = a, e = b)
    }), a.rect.x = d.x, a.rect.y = d.y
  };
  var k = 120;
  j.itemDragMove = function(a, b, c) {
    function d() {
      f.shift(e, b, c), e.positionDropPlaceholder(), f.layout()
    }
    var e = this.isEnabled && this.getItem(a);
    if (e) {
      b -= this.size.paddingLeft, c -= this.size.paddingTop;
      var f = this,
        g = new Date;
      this._itemDragTime && g - this._itemDragTime < k ? (clearTimeout(this.dragTimeout), this.dragTimeout = setTimeout(d, k)) : (d(), this._itemDragTime = g)
    }
  }, j.itemDragEnd = function(a) {
    function b() {
      d++, 2 == d && (c.element.classList.remove("is-positioning-post-drag"), c.hideDropPlaceholder(), e.dispatchEvent("dragItemPositioned", null, [c]))
    }
    var c = this.isEnabled && this.getItem(a);
    if (c) {
      clearTimeout(this.dragTimeout), c.element.classList.add("is-positioning-post-drag");
      var d = 0,
        e = this;
      c.once("layout", b), this.once("layoutComplete", b), c.moveTo(c.rect.x, c.rect.y), this.layout(), this.dragItemCount = Math.max(0, this.dragItemCount - 1), this.sortItemsByPosition(), c.disablePlacing(), this.unstamp(c.element)
    }
  }, j.bindDraggabillyEvents = function(a) {
    this._bindDraggabillyEvents(a, "on")
  }, j.unbindDraggabillyEvents = function(a) {
    this._bindDraggabillyEvents(a, "off")
  }, j._bindDraggabillyEvents = function(a, b) {
    var c = this.handleDraggabilly;
    a[b]("dragStart", c.dragStart), a[b]("dragMove", c.dragMove), a[b]("dragEnd", c.dragEnd)
  }, j.bindUIDraggableEvents = function(a) {
    this._bindUIDraggableEvents(a, "on")
  }, j.unbindUIDraggableEvents = function(a) {
    this._bindUIDraggableEvents(a, "off")
  }, j._bindUIDraggableEvents = function(a, b) {
    var c = this.handleUIDraggable;
    a[b]("dragstart", c.start)[b]("drag", c.drag)[b]("dragstop", c.stop)
  };
  var l = j.destroy;
  return j.destroy = function() {
    l.apply(this, arguments), this.isEnabled = !1
  }, i.Rect = c, i.Packer = d, i
}),
function(a, b) {
  "function" == typeof define && define.amd ? define(["isotope-layout/js/layout-mode", "packery/js/packery"], b) : "object" == typeof module && module.exports ? module.exports = b(require("isotope-layout/js/layout-mode"), require("packery")) : b(a.Isotope.LayoutMode, a.Packery)
}(window, function(a, b) {
  var c = a.create("packery"),
    d = c.prototype,
    e = {
      _getElementOffset: !0,
      _getMeasurement: !0
    };
  for (var f in b.prototype) e[f] || (d[f] = b.prototype[f]);
  var g = d._resetLayout;
  d._resetLayout = function() {
    this.packer = this.packer || new b.Packer, this.shiftPacker = this.shiftPacker || new b.Packer, g.apply(this, arguments)
  };
  var h = d._getItemLayoutPosition;
  d._getItemLayoutPosition = function(a) {
    return a.rect = a.rect || new b.Rect, h.call(this, a)
  };
  var i = d.needsResizeLayout;
  d.needsResizeLayout = function() {
    return this._getOption("horizontal") ? this.needsVerticalResizeLayout() : i.call(this)
  };
  var j = d._getOption;
  return d._getOption = function(a) {
    return "horizontal" == a ? void 0 !== this.options.isHorizontal ? this.options.isHorizontal : this.options.horizontal : j.apply(this.isotope, arguments)
  }, c
});
! function(e, n) {
  "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define([], n) : "object" == typeof exports ? exports.feather = n() : e.feather = n()
}("undefined" != typeof self ? self : this, function() {
  return function(e) {
    var n = {};

    function i(t) {
      if (n[t]) return n[t].exports;
      var l = n[t] = {
        i: t,
        l: !1,
        exports: {}
      };
      return e[t].call(l.exports, l, l.exports, i), l.l = !0, l.exports
    }
    return i.m = e, i.c = n, i.d = function(e, n, t) {
      i.o(e, n) || Object.defineProperty(e, n, {
        configurable: !1,
        enumerable: !0,
        get: t
      })
    }, i.r = function(e) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      })
    }, i.n = function(e) {
      var n = e && e.__esModule ? function() {
        return e.default
      } : function() {
        return e
      };
      return i.d(n, "a", n), n
    }, i.o = function(e, n) {
      return Object.prototype.hasOwnProperty.call(e, n)
    }, i.p = "", i(i.s = 80)
  }([function(e, n, i) {
    (function(n) {
      var i = "object",
        t = function(e) {
          return e && e.Math == Math && e
        };
      e.exports = t(typeof globalThis == i && globalThis) || t(typeof window == i && window) || t(typeof self == i && self) || t(typeof n == i && n) || Function("return this")()
    }).call(this, i(75))
  }, function(e, n) {
    var i = {}.hasOwnProperty;
    e.exports = function(e, n) {
      return i.call(e, n)
    }
  }, function(e, n, i) {
    var t = i(0),
      l = i(11),
      r = i(33),
      o = i(62),
      a = t.Symbol,
      c = l("wks");
    e.exports = function(e) {
      return c[e] || (c[e] = o && a[e] || (o ? a : r)("Symbol." + e))
    }
  }, function(e, n, i) {
    var t = i(6);
    e.exports = function(e) {
      if (!t(e)) throw TypeError(String(e) + " is not an object");
      return e
    }
  }, function(e, n) {
    e.exports = function(e) {
      try {
        return !!e()
      } catch (e) {
        return !0
      }
    }
  }, function(e, n, i) {
    var t = i(8),
      l = i(7),
      r = i(10);
    e.exports = t ? function(e, n, i) {
      return l.f(e, n, r(1, i))
    } : function(e, n, i) {
      return e[n] = i, e
    }
  }, function(e, n) {
    e.exports = function(e) {
      return "object" == typeof e ? null !== e : "function" == typeof e
    }
  }, function(e, n, i) {
    var t = i(8),
      l = i(35),
      r = i(3),
      o = i(18),
      a = Object.defineProperty;
    n.f = t ? a : function(e, n, i) {
      if (r(e), n = o(n, !0), r(i), l) try {
        return a(e, n, i)
      } catch (e) {}
      if ("get" in i || "set" in i) throw TypeError("Accessors not supported");
      return "value" in i && (e[n] = i.value), e
    }
  }, function(e, n, i) {
    var t = i(4);
    e.exports = !t(function() {
      return 7 != Object.defineProperty({}, "a", {
        get: function() {
          return 7
        }
      }).a
    })
  }, function(e, n) {
    e.exports = {}
  }, function(e, n) {
    e.exports = function(e, n) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: n
      }
    }
  }, function(e, n, i) {
    var t = i(0),
      l = i(19),
      r = i(17),
      o = t["__core-js_shared__"] || l("__core-js_shared__", {});
    (e.exports = function(e, n) {
      return o[e] || (o[e] = void 0 !== n ? n : {})
    })("versions", []).push({
      version: "3.1.3",
      mode: r ? "pure" : "global",
      copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    })
  }, function(e, n, i) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var t = o(i(43)),
      l = o(i(41)),
      r = o(i(40));

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    n.default = Object.keys(l.default).map(function(e) {
      return new t.default(e, l.default[e], r.default[e])
    }).reduce(function(e, n) {
      return e[n.name] = n, e
    }, {})
  }, function(e, n) {
    e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
  }, function(e, n, i) {
    var t = i(72),
      l = i(20);
    e.exports = function(e) {
      return t(l(e))
    }
  }, function(e, n) {
    e.exports = {}
  }, function(e, n, i) {
    var t = i(11),
      l = i(33),
      r = t("keys");
    e.exports = function(e) {
      return r[e] || (r[e] = l(e))
    }
  }, function(e, n) {
    e.exports = !1
  }, function(e, n, i) {
    var t = i(6);
    e.exports = function(e, n) {
      if (!t(e)) return e;
      var i, l;
      if (n && "function" == typeof(i = e.toString) && !t(l = i.call(e))) return l;
      if ("function" == typeof(i = e.valueOf) && !t(l = i.call(e))) return l;
      if (!n && "function" == typeof(i = e.toString) && !t(l = i.call(e))) return l;
      throw TypeError("Can't convert object to primitive value")
    }
  }, function(e, n, i) {
    var t = i(0),
      l = i(5);
    e.exports = function(e, n) {
      try {
        l(t, e, n)
      } catch (i) {
        t[e] = n
      }
      return n
    }
  }, function(e, n) {
    e.exports = function(e) {
      if (void 0 == e) throw TypeError("Can't call method on " + e);
      return e
    }
  }, function(e, n) {
    var i = Math.ceil,
      t = Math.floor;
    e.exports = function(e) {
      return isNaN(e = +e) ? 0 : (e > 0 ? t : i)(e)
    }
  }, function(e, n, i) {
    var t;
    /*!
      Copyright (c) 2016 Jed Watson.
      Licensed under the MIT License (MIT), see
      http://jedwatson.github.io/classnames
    */
    /*!
      Copyright (c) 2016 Jed Watson.
      Licensed under the MIT License (MIT), see
      http://jedwatson.github.io/classnames
    */
    ! function() {
      "use strict";
      var i = function() {
        function e() {}

        function n(e, n) {
          for (var i = n.length, t = 0; t < i; ++t) l(e, n[t])
        }
        e.prototype = Object.create(null);
        var i = {}.hasOwnProperty;
        var t = /\s+/;

        function l(e, l) {
          if (l) {
            var r = typeof l;
            "string" === r ? function(e, n) {
              for (var i = n.split(t), l = i.length, r = 0; r < l; ++r) e[i[r]] = !0
            }(e, l) : Array.isArray(l) ? n(e, l) : "object" === r ? function(e, n) {
              for (var t in n) i.call(n, t) && (e[t] = !!n[t])
            }(e, l) : "number" === r && function(e, n) {
              e[n] = !0
            }(e, l)
          }
        }
        return function() {
          for (var i = arguments.length, t = Array(i), l = 0; l < i; l++) t[l] = arguments[l];
          var r = new e;
          n(r, t);
          var o = [];
          for (var a in r) r[a] && o.push(a);
          return o.join(" ")
        }
      }();
      void 0 !== e && e.exports ? e.exports = i : void 0 === (t = function() {
        return i
      }.apply(n, [])) || (e.exports = t)
    }()
  }, function(e, n, i) {
    var t = i(7).f,
      l = i(1),
      r = i(2)("toStringTag");
    e.exports = function(e, n, i) {
      e && !l(e = i ? e : e.prototype, r) && t(e, r, {
        configurable: !0,
        value: n
      })
    }
  }, function(e, n, i) {
    var t = i(20);
    e.exports = function(e) {
      return Object(t(e))
    }
  }, function(e, n, i) {
    var t = i(1),
      l = i(24),
      r = i(16),
      o = i(63),
      a = r("IE_PROTO"),
      c = Object.prototype;
    e.exports = o ? Object.getPrototypeOf : function(e) {
      return e = l(e), t(e, a) ? e[a] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? c : null
    }
  }, function(e, n, i) {
    "use strict";
    var t, l, r, o = i(25),
      a = i(5),
      c = i(1),
      p = i(2),
      y = i(17),
      h = p("iterator"),
      x = !1;
    [].keys && ("next" in (r = [].keys()) ? (l = o(o(r))) !== Object.prototype && (t = l) : x = !0), void 0 == t && (t = {}), y || c(t, h) || a(t, h, function() {
      return this
    }), e.exports = {
      IteratorPrototype: t,
      BUGGY_SAFARI_ITERATORS: x
    }
  }, function(e, n, i) {
    var t = i(21),
      l = Math.min;
    e.exports = function(e) {
      return e > 0 ? l(t(e), 9007199254740991) : 0
    }
  }, function(e, n, i) {
    var t = i(1),
      l = i(14),
      r = i(68),
      o = i(15),
      a = r(!1);
    e.exports = function(e, n) {
      var i, r = l(e),
        c = 0,
        p = [];
      for (i in r) !t(o, i) && t(r, i) && p.push(i);
      for (; n.length > c;) t(r, i = n[c++]) && (~a(p, i) || p.push(i));
      return p
    }
  }, function(e, n, i) {
    var t = i(0),
      l = i(11),
      r = i(5),
      o = i(1),
      a = i(19),
      c = i(36),
      p = i(37),
      y = p.get,
      h = p.enforce,
      x = String(c).split("toString");
    l("inspectSource", function(e) {
      return c.call(e)
    }), (e.exports = function(e, n, i, l) {
      var c = !!l && !!l.unsafe,
        p = !!l && !!l.enumerable,
        y = !!l && !!l.noTargetGet;
      "function" == typeof i && ("string" != typeof n || o(i, "name") || r(i, "name", n), h(i).source = x.join("string" == typeof n ? n : "")), e !== t ? (c ? !y && e[n] && (p = !0) : delete e[n], p ? e[n] = i : r(e, n, i)) : p ? e[n] = i : a(n, i)
    })(Function.prototype, "toString", function() {
      return "function" == typeof this && y(this).source || c.call(this)
    })
  }, function(e, n) {
    var i = {}.toString;
    e.exports = function(e) {
      return i.call(e).slice(8, -1)
    }
  }, function(e, n, i) {
    var t = i(8),
      l = i(73),
      r = i(10),
      o = i(14),
      a = i(18),
      c = i(1),
      p = i(35),
      y = Object.getOwnPropertyDescriptor;
    n.f = t ? y : function(e, n) {
      if (e = o(e), n = a(n, !0), p) try {
        return y(e, n)
      } catch (e) {}
      if (c(e, n)) return r(!l.f.call(e, n), e[n])
    }
  }, function(e, n, i) {
    var t = i(0),
      l = i(31).f,
      r = i(5),
      o = i(29),
      a = i(19),
      c = i(71),
      p = i(65);
    e.exports = function(e, n) {
      var i, y, h, x, s, u = e.target,
        d = e.global,
        f = e.stat;
      if (i = d ? t : f ? t[u] || a(u, {}) : (t[u] || {}).prototype)
        for (y in n) {
          if (x = n[y], h = e.noTargetGet ? (s = l(i, y)) && s.value : i[y], !p(d ? y : u + (f ? "." : "#") + y, e.forced) && void 0 !== h) {
            if (typeof x == typeof h) continue;
            c(x, h)
          }(e.sham || h && h.sham) && r(x, "sham", !0), o(i, y, x, e)
        }
    }
  }, function(e, n) {
    var i = 0,
      t = Math.random();
    e.exports = function(e) {
      return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++i + t).toString(36))
    }
  }, function(e, n, i) {
    var t = i(0),
      l = i(6),
      r = t.document,
      o = l(r) && l(r.createElement);
    e.exports = function(e) {
      return o ? r.createElement(e) : {}
    }
  }, function(e, n, i) {
    var t = i(8),
      l = i(4),
      r = i(34);
    e.exports = !t && !l(function() {
      return 7 != Object.defineProperty(r("div"), "a", {
        get: function() {
          return 7
        }
      }).a
    })
  }, function(e, n, i) {
    var t = i(11);
    e.exports = t("native-function-to-string", Function.toString)
  }, function(e, n, i) {
    var t, l, r, o = i(76),
      a = i(0),
      c = i(6),
      p = i(5),
      y = i(1),
      h = i(16),
      x = i(15),
      s = a.WeakMap;
    if (o) {
      var u = new s,
        d = u.get,
        f = u.has,
        g = u.set;
      t = function(e, n) {
        return g.call(u, e, n), n
      }, l = function(e) {
        return d.call(u, e) || {}
      }, r = function(e) {
        return f.call(u, e)
      }
    } else {
      var v = h("state");
      x[v] = !0, t = function(e, n) {
        return p(e, v, n), n
      }, l = function(e) {
        return y(e, v) ? e[v] : {}
      }, r = function(e) {
        return y(e, v)
      }
    }
    e.exports = {
      set: t,
      get: l,
      has: r,
      enforce: function(e) {
        return r(e) ? l(e) : t(e, {})
      },
      getterFor: function(e) {
        return function(n) {
          var i;
          if (!c(n) || (i = l(n)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
          return i
        }
      }
    }
  }, function(e, n, i) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var t = Object.assign || function(e) {
        for (var n = 1; n < arguments.length; n++) {
          var i = arguments[n];
          for (var t in i) Object.prototype.hasOwnProperty.call(i, t) && (e[t] = i[t])
        }
        return e
      },
      l = o(i(22)),
      r = o(i(12));

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    n.default = function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      if ("undefined" == typeof document) throw new Error("`feather.replace()` only works in a browser environment.");
      var n = document.querySelectorAll("[data-feather]");
      Array.from(n).forEach(function(n) {
        return function(e) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            i = function(e) {
              return Array.from(e.attributes).reduce(function(e, n) {
                return e[n.name] = n.value, e
              }, {})
            }(e),
            o = i["data-feather"];
          delete i["data-feather"];
          var a = r.default[o].toSvg(t({}, n, i, {
              class: (0, l.default)(n.class, i.class)
            })),
            c = (new DOMParser).parseFromString(a, "image/svg+xml").querySelector("svg");
          e.parentNode.replaceChild(c, e)
        }(n, e)
      })
    }
  }, function(e, n, i) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var t, l = i(12),
      r = (t = l) && t.__esModule ? t : {
        default: t
      };
    n.default = function(e) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      if (console.warn("feather.toSvg() is deprecated. Please use feather.icons[name].toSvg() instead."), !e) throw new Error("The required `key` (icon name) parameter is missing.");
      if (!r.default[e]) throw new Error("No icon matching '" + e + "'. See the complete list of icons at https://feathericons.com");
      return r.default[e].toSvg(n)
    }
  }, function(e) {
    e.exports = {
      activity: ["pulse", "health", "action", "motion"],
      airplay: ["stream", "cast", "mirroring"],
      "alert-circle": ["warning", "alert", "danger"],
      "alert-octagon": ["warning", "alert", "danger"],
      "alert-triangle": ["warning", "alert", "danger"],
      "align-center": ["text alignment", "center"],
      "align-justify": ["text alignment", "justified"],
      "align-left": ["text alignment", "left"],
      "align-right": ["text alignment", "right"],
      anchor: [],
      archive: ["index", "box"],
      "at-sign": ["mention", "at", "email", "message"],
      award: ["achievement", "badge"],
      aperture: ["camera", "photo"],
      "bar-chart": ["statistics", "diagram", "graph"],
      "bar-chart-2": ["statistics", "diagram", "graph"],
      battery: ["power", "electricity"],
      "battery-charging": ["power", "electricity"],
      bell: ["alarm", "notification", "sound"],
      "bell-off": ["alarm", "notification", "silent"],
      bluetooth: ["wireless"],
      "book-open": ["read", "library"],
      book: ["read", "dictionary", "booklet", "magazine", "library"],
      bookmark: ["read", "clip", "marker", "tag"],
      box: ["cube"],
      briefcase: ["work", "bag", "baggage", "folder"],
      calendar: ["date"],
      camera: ["photo"],
      cast: ["chromecast", "airplay"],
      circle: ["off", "zero", "record"],
      clipboard: ["copy"],
      clock: ["time", "watch", "alarm"],
      "cloud-drizzle": ["weather", "shower"],
      "cloud-lightning": ["weather", "bolt"],
      "cloud-rain": ["weather"],
      "cloud-snow": ["weather", "blizzard"],
      cloud: ["weather"],
      codepen: ["logo"],
      codesandbox: ["logo"],
      code: ["source", "programming"],
      coffee: ["drink", "cup", "mug", "tea", "cafe", "hot", "beverage"],
      columns: ["layout"],
      command: ["keyboard", "cmd", "terminal", "prompt"],
      compass: ["navigation", "safari", "travel", "direction"],
      copy: ["clone", "duplicate"],
      "corner-down-left": ["arrow", "return"],
      "corner-down-right": ["arrow"],
      "corner-left-down": ["arrow"],
      "corner-left-up": ["arrow"],
      "corner-right-down": ["arrow"],
      "corner-right-up": ["arrow"],
      "corner-up-left": ["arrow"],
      "corner-up-right": ["arrow"],
      cpu: ["processor", "technology"],
      "credit-card": ["purchase", "payment", "cc"],
      crop: ["photo", "image"],
      crosshair: ["aim", "target"],
      database: ["storage", "memory"],
      delete: ["remove"],
      disc: ["album", "cd", "dvd", "music"],
      "dollar-sign": ["currency", "money", "payment"],
      droplet: ["water"],
      edit: ["pencil", "change"],
      "edit-2": ["pencil", "change"],
      "edit-3": ["pencil", "change"],
      eye: ["view", "watch"],
      "eye-off": ["view", "watch", "hide", "hidden"],
      "external-link": ["outbound"],
      facebook: ["logo", "social"],
      "fast-forward": ["music"],
      figma: ["logo", "design", "tool"],
      "file-minus": ["delete", "remove", "erase"],
      "file-plus": ["add", "create", "new"],
      "file-text": ["data", "txt", "pdf"],
      film: ["movie", "video"],
      filter: ["funnel", "hopper"],
      flag: ["report"],
      "folder-minus": ["directory"],
      "folder-plus": ["directory"],
      folder: ["directory"],
      framer: ["logo", "design", "tool"],
      frown: ["emoji", "face", "bad", "sad", "emotion"],
      gift: ["present", "box", "birthday", "party"],
      "git-branch": ["code", "version control"],
      "git-commit": ["code", "version control"],
      "git-merge": ["code", "version control"],
      "git-pull-request": ["code", "version control"],
      github: ["logo", "version control"],
      gitlab: ["logo", "version control"],
      globe: ["world", "browser", "language", "translate"],
      "hard-drive": ["computer", "server", "memory", "data"],
      hash: ["hashtag", "number", "pound"],
      headphones: ["music", "audio", "sound"],
      heart: ["like", "love", "emotion"],
      "help-circle": ["question mark"],
      hexagon: ["shape", "node.html", "logo"],
      home: ["house", "living"],
      image: ["picture"],
      inbox: ["email"],
      instagram: ["logo", "camera"],
      key: ["password", "login", "authentication", "secure"],
      layers: ["stack"],
      layout: ["window", "webpage"],
      "life-bouy": ["help", "life ring", "support"],
      link: ["chain", "url"],
      "link-2": ["chain", "url"],
      linkedin: ["logo", "social media"],
      list: ["options"],
      lock: ["security", "password", "secure"],
      "log-in": ["sign in", "arrow", "enter"],
      "log-out": ["sign out", "arrow", "exit"],
      mail: ["email", "message"],
      "map-pin": ["location", "navigation", "travel", "marker"],
      map: ["location", "navigation", "travel"],
      maximize: ["fullscreen"],
      "maximize-2": ["fullscreen", "arrows", "expand"],
      meh: ["emoji", "face", "neutral", "emotion"],
      menu: ["bars", "navigation", "hamburger"],
      "message-circle": ["comment", "chat"],
      "message-square": ["comment", "chat"],
      "mic-off": ["record", "sound", "mute"],
      mic: ["record", "sound", "listen"],
      minimize: ["exit fullscreen", "close"],
      "minimize-2": ["exit fullscreen", "arrows", "close"],
      minus: ["subtract"],
      monitor: ["tv", "screen", "display"],
      moon: ["dark", "night"],
      "more-horizontal": ["ellipsis"],
      "more-vertical": ["ellipsis"],
      "mouse-pointer": ["arrow", "cursor"],
      move: ["arrows"],
      music: ["note"],
      navigation: ["location", "travel"],
      "navigation-2": ["location", "travel"],
      octagon: ["stop"],
      package: ["box", "container"],
      paperclip: ["attachment"],
      pause: ["music", "stop"],
      "pause-circle": ["music", "audio", "stop"],
      "pen-tool": ["vector", "drawing"],
      percent: ["discount"],
      "phone-call": ["ring"],
      "phone-forwarded": ["call"],
      "phone-incoming": ["call"],
      "phone-missed": ["call"],
      "phone-off": ["call", "mute"],
      "phone-outgoing": ["call"],
      phone: ["call"],
      play: ["music", "start"],
      "pie-chart": ["statistics", "diagram"],
      "play-circle": ["music", "start"],
      plus: ["add", "new"],
      "plus-circle": ["add", "new"],
      "plus-square": ["add", "new"],
      pocket: ["logo", "save"],
      power: ["on", "off"],
      printer: ["fax", "office", "device"],
      radio: ["signal"],
      "refresh-cw": ["synchronise", "arrows"],
      "refresh-ccw": ["arrows"],
      repeat: ["loop", "arrows"],
      rewind: ["music"],
      "rotate-ccw": ["arrow"],
      "rotate-cw": ["arrow"],
      rss: ["feed", "subscribe"],
      save: ["floppy disk"],
      scissors: ["cut"],
      search: ["find", "magnifier", "magnifying glass"],
      send: ["message", "mail", "email", "paper airplane", "paper aeroplane"],
      settings: ["cog", "edit", "gear", "preferences"],
      "share-2": ["network", "connections"],
      shield: ["security", "secure"],
      "shield-off": ["security", "insecure"],
      "shopping-bag": ["ecommerce", "cart", "purchase", "store"],
      "shopping-cart": ["ecommerce", "cart", "purchase", "store"],
      shuffle: ["music"],
      "skip-back": ["music"],
      "skip-forward": ["music"],
      slack: ["logo"],
      slash: ["ban", "no"],
      sliders: ["settings", "controls"],
      smartphone: ["cellphone", "device"],
      smile: ["emoji", "face", "happy", "good", "emotion"],
      speaker: ["audio", "music"],
      star: ["bookmark", "favorite", "like"],
      "stop-circle": ["media", "music"],
      sun: ["brightness", "weather", "light"],
      sunrise: ["weather", "time", "morning", "day"],
      sunset: ["weather", "time", "evening", "night"],
      tablet: ["device"],
      tag: ["label"],
      target: ["logo", "bullseye"],
      terminal: ["code", "command line", "prompt"],
      thermometer: ["temperature", "celsius", "fahrenheit", "weather"],
      "thumbs-down": ["dislike", "bad", "emotion"],
      "thumbs-up": ["like", "good", "emotion"],
      "toggle-left": ["on", "off", "switch"],
      "toggle-right": ["on", "off", "switch"],
      tool: ["settings", "spanner"],
      trash: ["garbage", "delete", "remove", "bin"],
      "trash-2": ["garbage", "delete", "remove", "bin"],
      triangle: ["delta"],
      truck: ["delivery", "van", "shipping", "transport", "lorry"],
      tv: ["television", "stream"],
      twitch: ["logo"],
      twitter: ["logo", "social"],
      type: ["text"],
      umbrella: ["rain", "weather"],
      unlock: ["security"],
      "user-check": ["followed", "subscribed"],
      "user-minus": ["delete", "remove", "unfollow", "unsubscribe"],
      "user-plus": ["new", "add", "create", "follow", "subscribe"],
      "user-x": ["delete", "remove", "unfollow", "unsubscribe", "unavailable"],
      user: ["person", "account"],
      users: ["group"],
      "video-off": ["camera", "movie", "film"],
      video: ["camera", "movie", "film"],
      voicemail: ["phone"],
      volume: ["music", "sound", "mute"],
      "volume-1": ["music", "sound"],
      "volume-2": ["music", "sound"],
      "volume-x": ["music", "sound", "mute"],
      watch: ["clock", "time"],
      "wifi-off": ["disabled"],
      wifi: ["connection", "signal", "wireless"],
      wind: ["weather", "air"],
      "x-circle": ["cancel", "close", "delete", "remove", "times", "clear"],
      "x-octagon": ["delete", "stop", "alert", "warning", "times", "clear"],
      "x-square": ["cancel", "close", "delete", "remove", "times", "clear"],
      x: ["cancel", "close", "delete", "remove", "times", "clear"],
      youtube: ["logo", "video", "play"],
      "zap-off": ["flash", "camera", "lightning"],
      zap: ["flash", "camera", "lightning"],
      "zoom-in": ["magnifying glass"],
      "zoom-out": ["magnifying glass"]
    }
  }, function(e) {
    e.exports = {
      activity: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>',
      airplay: '<path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon>',
      "alert-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',
      "alert-octagon": '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',
      "alert-triangle": '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>',
      "align-center": '<line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line>',
      "align-justify": '<line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line>',
      "align-left": '<line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line>',
      "align-right": '<line x1="21" y1="10" x2="7" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line>',
      anchor: '<circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>',
      aperture: '<circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>',
      archive: '<polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line>',
      "arrow-down-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line>',
      "arrow-down-left": '<line x1="17" y1="7" x2="7" y2="17"></line><polyline points="17 17 7 17 7 7"></polyline>',
      "arrow-down-right": '<line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline>',
      "arrow-down": '<line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline>',
      "arrow-left-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line>',
      "arrow-left": '<line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>',
      "arrow-right-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line>',
      "arrow-right": '<line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>',
      "arrow-up-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line>',
      "arrow-up-left": '<line x1="17" y1="17" x2="7" y2="7"></line><polyline points="7 17 7 7 17 7"></polyline>',
      "arrow-up-right": '<line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>',
      "arrow-up": '<line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline>',
      "at-sign": '<circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>',
      award: '<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>',
      "bar-chart-2": '<line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>',
      "bar-chart": '<line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line>',
      "battery-charging": '<path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"></path><line x1="23" y1="13" x2="23" y2="11"></line><polyline points="11 6 7 12 13 12 9 18"></polyline>',
      battery: '<rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect><line x1="23" y1="13" x2="23" y2="11"></line>',
      "bell-off": '<path d="M13.73 21a2 2 0 0 1-3.46 0"></path><path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path><path d="M18 8a6 6 0 0 0-9.33-5"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
      bell: '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>',
      bluetooth: '<polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></polyline>',
      bold: '<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>',
      "book-open": '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>',
      book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>',
      bookmark: '<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>',
      box: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
      briefcase: '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>',
      calendar: '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>',
      "camera-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"></path>',
      camera: '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle>',
      cast: '<path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2.01" y2="20"></line>',
      "check-circle": '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>',
      "check-square": '<polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>',
      check: '<polyline points="20 6 9 17 4 12"></polyline>',
      "chevron-down": '<polyline points="6 9 12 15 18 9"></polyline>',
      "chevron-left": '<polyline points="15 18 9 12 15 6"></polyline>',
      "chevron-right": '<polyline points="9 18 15 12 9 6"></polyline>',
      "chevron-up": '<polyline points="18 15 12 9 6 15"></polyline>',
      "chevrons-down": '<polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline>',
      "chevrons-left": '<polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline>',
      "chevrons-right": '<polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline>',
      "chevrons-up": '<polyline points="17 11 12 6 7 11"></polyline><polyline points="17 18 12 13 7 18"></polyline>',
      chrome: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>',
      circle: '<circle cx="12" cy="12" r="10"></circle>',
      clipboard: '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>',
      clock: '<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>',
      "cloud-drizzle": '<line x1="8" y1="19" x2="8" y2="21"></line><line x1="8" y1="13" x2="8" y2="15"></line><line x1="16" y1="19" x2="16" y2="21"></line><line x1="16" y1="13" x2="16" y2="15"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="12" y1="15" x2="12" y2="17"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',
      "cloud-lightning": '<path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path><polyline points="13 11 9 17 15 17 11 23"></polyline>',
      "cloud-off": '<path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
      "cloud-rain": '<line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',
      "cloud-snow": '<path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="8" y1="20" x2="8.01" y2="20"></line><line x1="12" y1="18" x2="12.01" y2="18"></line><line x1="12" y1="22" x2="12.01" y2="22"></line><line x1="16" y1="16" x2="16.01" y2="16"></line><line x1="16" y1="20" x2="16.01" y2="20"></line>',
      cloud: '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>',
      code: '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',
      codepen: '<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line>',
      codesandbox: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
      coffee: '<path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line>',
      columns: '<path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>',
      command: '<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>',
      compass: '<circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>',
      copy: '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>',
      "corner-down-left": '<polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path>',
      "corner-down-right": '<polyline points="15 10 20 15 15 20"></polyline><path d="M4 4v7a4 4 0 0 0 4 4h12"></path>',
      "corner-left-down": '<polyline points="14 15 9 20 4 15"></polyline><path d="M20 4h-7a4 4 0 0 0-4 4v12"></path>',
      "corner-left-up": '<polyline points="14 9 9 4 4 9"></polyline><path d="M20 20h-7a4 4 0 0 1-4-4V4"></path>',
      "corner-right-down": '<polyline points="10 15 15 20 20 15"></polyline><path d="M4 4h7a4 4 0 0 1 4 4v12"></path>',
      "corner-right-up": '<polyline points="10 9 15 4 20 9"></polyline><path d="M4 20h7a4 4 0 0 0 4-4V4"></path>',
      "corner-up-left": '<polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>',
      "corner-up-right": '<polyline points="15 14 20 9 15 4"></polyline><path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>',
      cpu: '<rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line>',
      "credit-card": '<rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>',
      crop: '<path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"></path><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"></path>',
      crosshair: '<circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line>',
      database: '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>',
      delete: '<path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line>',
      disc: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle>',
      "divide-circle": '<line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line><circle cx="12" cy="12" r="10"></circle>',
      "divide-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line>',
      divide: '<circle cx="12" cy="6" r="2"></circle><line x1="5" y1="12" x2="19" y2="12"></line><circle cx="12" cy="18" r="2"></circle>',
      "dollar-sign": '<line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>',
      "download-cloud": '<polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>',
      download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>',
      dribbble: '<circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>',
      droplet: '<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>',
      "edit-2": '<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>',
      "edit-3": '<path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>',
      edit: '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>',
      "external-link": '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>',
      "eye-off": '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
      eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>',
      facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>',
      "fast-forward": '<polygon points="13 19 22 12 13 5 13 19"></polygon><polygon points="2 19 11 12 2 5 2 19"></polygon>',
      feather: '<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line>',
      figma: '<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>',
      "file-minus": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="15" x2="15" y2="15"></line>',
      "file-plus": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line>',
      "file-text": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>',
      file: '<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline>',
      film: '<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line>',
      filter: '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>',
      flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line>',
      "folder-minus": '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="9" y1="14" x2="15" y2="14"></line>',
      "folder-plus": '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line>',
      folder: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>',
      framer: '<path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"></path>',
      frown: '<circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
      gift: '<polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>',
      "git-branch": '<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>',
      "git-commit": '<circle cx="12" cy="12" r="4"></circle><line x1="1.05" y1="12" x2="7" y2="12"></line><line x1="17.01" y1="12" x2="22.96" y2="12"></line>',
      "git-merge": '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>',
      "git-pull-request": '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line>',
      github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>',
      gitlab: '<path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>',
      globe: '<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>',
      grid: '<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>',
      "hard-drive": '<line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6.01" y2="16"></line><line x1="10" y1="16" x2="10.01" y2="16"></line>',
      hash: '<line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line>',
      headphones: '<path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>',
      heart: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>',
      "help-circle": '<circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line>',
      hexagon: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>',
      home: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>',
      image: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>',
      inbox: '<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>',
      info: '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>',
      instagram: '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>',
      italic: '<line x1="19" y1="4" x2="10" y2="4"></line><line x1="14" y1="20" x2="5" y2="20"></line><line x1="15" y1="4" x2="9" y2="20"></line>',
      key: '<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>',
      layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>',
      layout: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>',
      "life-buoy": '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>',
      "link-2": '<path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line>',
      link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>',
      linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>',
      list: '<line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>',
      loader: '<line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>',
      lock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>',
      "log-in": '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line>',
      "log-out": '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line>',
      mail: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>',
      "map-pin": '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>',
      map: '<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line>',
      "maximize-2": '<polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line>',
      maximize: '<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>',
      meh: '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="15" x2="16" y2="15"></line><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
      menu: '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>',
      "message-circle": '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>',
      "message-square": '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>',
      "mic-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',
      mic: '<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',
      "minimize-2": '<polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line>',
      minimize: '<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>',
      "minus-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line>',
      "minus-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line>',
      minus: '<line x1="5" y1="12" x2="19" y2="12"></line>',
      monitor: '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>',
      moon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>',
      "more-horizontal": '<circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>',
      "more-vertical": '<circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle>',
      "mouse-pointer": '<path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path><path d="M13 13l6 6"></path>',
      move: '<polyline points="5 9 2 12 5 15"></polyline><polyline points="9 5 12 2 15 5"></polyline><polyline points="15 19 12 22 9 19"></polyline><polyline points="19 9 22 12 19 15"></polyline><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line>',
      music: '<path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle>',
      "navigation-2": '<polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>',
      navigation: '<polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>',
      octagon: '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>',
      package: '<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
      paperclip: '<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>',
      "pause-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="10" y1="15" x2="10" y2="9"></line><line x1="14" y1="15" x2="14" y2="9"></line>',
      pause: '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>',
      "pen-tool": '<path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle>',
      percent: '<line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle>',
      "phone-call": '<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
      "phone-forwarded": '<polyline points="19 1 23 5 19 9"></polyline><line x1="15" y1="5" x2="23" y2="5"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
      "phone-incoming": '<polyline points="16 2 16 8 22 8"></polyline><line x1="23" y1="1" x2="16" y2="8"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
      "phone-missed": '<line x1="23" y1="1" x2="17" y2="7"></line><line x1="17" y1="1" x2="23" y2="7"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
      "phone-off": '<path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><line x1="23" y1="1" x2="1" y2="23"></line>',
      "phone-outgoing": '<polyline points="23 7 23 1 17 1"></polyline><line x1="16" y1="8" x2="23" y2="1"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
      phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
      "pie-chart": '<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path>',
      "play-circle": '<circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon>',
      play: '<polygon points="5 3 19 12 5 21 5 3"></polygon>',
      "plus-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',
      "plus-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',
      plus: '<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>',
      pocket: '<path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"></path><polyline points="8 10 12 14 16 10"></polyline>',
      power: '<path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line>',
      printer: '<polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect>',
      radio: '<circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>',
      "refresh-ccw": '<polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>',
      "refresh-cw": '<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>',
      repeat: '<polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path>',
      rewind: '<polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon>',
      "rotate-ccw": '<polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>',
      "rotate-cw": '<polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>',
      rss: '<path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle>',
      save: '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline>',
      scissors: '<circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line>',
      search: '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>',
      send: '<line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>',
      server: '<rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line>',
      settings: '<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>',
      "share-2": '<circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>',
      share: '<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line>',
      "shield-off": '<path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"></path><path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
      shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>',
      "shopping-bag": '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>',
      "shopping-cart": '<circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>',
      shuffle: '<polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line>',
      sidebar: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line>',
      "skip-back": '<polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line>',
      "skip-forward": '<polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line>',
      slack: '<path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path>',
      slash: '<circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>',
      sliders: '<line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>',
      smartphone: '<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',
      smile: '<circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
      speaker: '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><circle cx="12" cy="14" r="4"></circle><line x1="12" y1="6" x2="12.01" y2="6"></line>',
      square: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>',
      star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>',
      "stop-circle": '<circle cx="12" cy="12" r="10"></circle><rect x="9" y="9" width="6" height="6"></rect>',
      sun: '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>',
      sunrise: '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline>',
      sunset: '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="16 5 12 9 8 5"></polyline>',
      tablet: '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',
      tag: '<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line>',
      target: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>',
      terminal: '<polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>',
      thermometer: '<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>',
      "thumbs-down": '<path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>',
      "thumbs-up": '<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>',
      "toggle-left": '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="8" cy="12" r="3"></circle>',
      "toggle-right": '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="16" cy="12" r="3"></circle>',
      tool: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>',
      "trash-2": '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>',
      trash: '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>',
      trello: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="3" height="9"></rect><rect x="14" y="7" width="3" height="5"></rect>',
      "trending-down": '<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline>',
      "trending-up": '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>',
      triangle: '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>',
      truck: '<rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>',
      tv: '<rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline>',
      twitch: '<path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>',
      twitter: '<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>',
      type: '<polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line>',
      umbrella: '<path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"></path>',
      underline: '<path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path><line x1="4" y1="21" x2="20" y2="21"></line>',
      unlock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>',
      "upload-cloud": '<polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline>',
      upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line>',
      "user-check": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline>',
      "user-minus": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line>',
      "user-plus": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line>',
      "user-x": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="18" y1="8" x2="23" y2="13"></line><line x1="23" y1="8" x2="18" y2="13"></line>',
      user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>',
      users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',
      "video-off": '<path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
      video: '<polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>',
      voicemail: '<circle cx="5.5" cy="11.5" r="4.5"></circle><circle cx="18.5" cy="11.5" r="4.5"></circle><line x1="5.5" y1="16" x2="18.5" y2="16"></line>',
      "volume-1": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>',
      "volume-2": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>',
      "volume-x": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>',
      volume: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>',
      watch: '<circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path>',
      "wifi-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path><path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',
      wifi: '<path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',
      wind: '<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>',
      "x-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',
      "x-octagon": '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',
      "x-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line>',
      x: '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>',
      youtube: '<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>',
      "zap-off": '<polyline points="12.41 6.75 13 2 10.57 4.92"></polyline><polyline points="18.57 12.91 21 10 15.66 10"></polyline><polyline points="8 8 3 14 12 14 11 22 16 16"></polyline><line x1="1" y1="1" x2="23" y2="23"></line>',
      zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>',
      "zoom-in": '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line>',
      "zoom-out": '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line>'
    }
  }, function(e) {
    e.exports = {
      xmlns: "http://www.w3.org/2000/svg",
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": 2,
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }
  }, function(e, n, i) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var t = Object.assign || function(e) {
        for (var n = 1; n < arguments.length; n++) {
          var i = arguments[n];
          for (var t in i) Object.prototype.hasOwnProperty.call(i, t) && (e[t] = i[t])
        }
        return e
      },
      l = function() {
        function e(e, n) {
          for (var i = 0; i < n.length; i++) {
            var t = n[i];
            t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t)
          }
        }
        return function(n, i, t) {
          return i && e(n.prototype, i), t && e(n, t), n
        }
      }(),
      r = a(i(22)),
      o = a(i(42));

    function a(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    var c = function() {
      function e(n, i) {
        var l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        ! function(e, n) {
          if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.name = n, this.contents = i, this.tags = l, this.attrs = t({}, o.default, {
          class: "feather feather-" + n
        })
      }
      return l(e, [{
        key: "toSvg",
        value: function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return "<svg " + function(e) {
            return Object.keys(e).map(function(n) {
              return n + '="' + e[n] + '"'
            }).join(" ")
          }(t({}, this.attrs, e, {
            class: (0, r.default)(this.attrs.class, e.class)
          })) + ">" + this.contents + "</svg>"
        }
      }, {
        key: "toString",
        value: function() {
          return this.contents
        }
      }]), e
    }();
    n.default = c
  }, function(e, n, i) {
    "use strict";
    var t = o(i(12)),
      l = o(i(39)),
      r = o(i(38));

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    e.exports = {
      icons: t.default,
      toSvg: l.default,
      replace: r.default
    }
  }, function(e, n, i) {
    e.exports = i(0)
  }, function(e, n, i) {
    var t = i(2)("iterator"),
      l = !1;
    try {
      var r = 0,
        o = {
          next: function() {
            return {
              done: !!r++
            }
          },
          return: function() {
            l = !0
          }
        };
      o[t] = function() {
        return this
      }, Array.from(o, function() {
        throw 2
      })
    } catch (e) {}
    e.exports = function(e, n) {
      if (!n && !l) return !1;
      var i = !1;
      try {
        var r = {};
        r[t] = function() {
          return {
            next: function() {
              return {
                done: i = !0
              }
            }
          }
        }, e(r)
      } catch (e) {}
      return i
    }
  }, function(e, n, i) {
    var t = i(30),
      l = i(2)("toStringTag"),
      r = "Arguments" == t(function() {
        return arguments
      }());
    e.exports = function(e) {
      var n, i, o;
      return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(i = function(e, n) {
        try {
          return e[n]
        } catch (e) {}
      }(n = Object(e), l)) ? i : r ? t(n) : "Object" == (o = t(n)) && "function" == typeof n.callee ? "Arguments" : o
    }
  }, function(e, n, i) {
    var t = i(47),
      l = i(9),
      r = i(2)("iterator");
    e.exports = function(e) {
      if (void 0 != e) return e[r] || e["@@iterator"] || l[t(e)]
    }
  }, function(e, n, i) {
    "use strict";
    var t = i(18),
      l = i(7),
      r = i(10);
    e.exports = function(e, n, i) {
      var o = t(n);
      o in e ? l.f(e, o, r(0, i)) : e[o] = i
    }
  }, function(e, n, i) {
    var t = i(2),
      l = i(9),
      r = t("iterator"),
      o = Array.prototype;
    e.exports = function(e) {
      return void 0 !== e && (l.Array === e || o[r] === e)
    }
  }, function(e, n, i) {
    var t = i(3);
    e.exports = function(e, n, i, l) {
      try {
        return l ? n(t(i)[0], i[1]) : n(i)
      } catch (n) {
        var r = e.return;
        throw void 0 !== r && t(r.call(e)), n
      }
    }
  }, function(e, n) {
    e.exports = function(e) {
      if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
      return e
    }
  }, function(e, n, i) {
    var t = i(52);
    e.exports = function(e, n, i) {
      if (t(e), void 0 === n) return e;
      switch (i) {
        case 0:
          return function() {
            return e.call(n)
          };
        case 1:
          return function(i) {
            return e.call(n, i)
          };
        case 2:
          return function(i, t) {
            return e.call(n, i, t)
          };
        case 3:
          return function(i, t, l) {
            return e.call(n, i, t, l)
          }
      }
      return function() {
        return e.apply(n, arguments)
      }
    }
  }, function(e, n, i) {
    "use strict";
    var t = i(53),
      l = i(24),
      r = i(51),
      o = i(50),
      a = i(27),
      c = i(49),
      p = i(48);
    e.exports = function(e) {
      var n, i, y, h, x = l(e),
        s = "function" == typeof this ? this : Array,
        u = arguments.length,
        d = u > 1 ? arguments[1] : void 0,
        f = void 0 !== d,
        g = 0,
        v = p(x);
      if (f && (d = t(d, u > 2 ? arguments[2] : void 0, 2)), void 0 == v || s == Array && o(v))
        for (i = new s(n = a(x.length)); n > g; g++) c(i, g, f ? d(x[g], g) : x[g]);
      else
        for (h = v.call(x), i = new s; !(y = h.next()).done; g++) c(i, g, f ? r(h, d, [y.value, g], !0) : y.value);
      return i.length = g, i
    }
  }, function(e, n, i) {
    var t = i(32),
      l = i(54);
    t({
      target: "Array",
      stat: !0,
      forced: !i(46)(function(e) {
        Array.from(e)
      })
    }, {
      from: l
    })
  }, function(e, n, i) {
    var t = i(6),
      l = i(3);
    e.exports = function(e, n) {
      if (l(e), !t(n) && null !== n) throw TypeError("Can't set " + String(n) + " as a prototype")
    }
  }, function(e, n, i) {
    var t = i(56);
    e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
      var e, n = !1,
        i = {};
      try {
        (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(i, []), n = i instanceof Array
      } catch (e) {}
      return function(i, l) {
        return t(i, l), n ? e.call(i, l) : i.__proto__ = l, i
      }
    }() : void 0)
  }, function(e, n, i) {
    var t = i(0).document;
    e.exports = t && t.documentElement
  }, function(e, n, i) {
    var t = i(28),
      l = i(13);
    e.exports = Object.keys || function(e) {
      return t(e, l)
    }
  }, function(e, n, i) {
    var t = i(8),
      l = i(7),
      r = i(3),
      o = i(59);
    e.exports = t ? Object.defineProperties : function(e, n) {
      r(e);
      for (var i, t = o(n), a = t.length, c = 0; a > c;) l.f(e, i = t[c++], n[i]);
      return e
    }
  }, function(e, n, i) {
    var t = i(3),
      l = i(60),
      r = i(13),
      o = i(15),
      a = i(58),
      c = i(34),
      p = i(16)("IE_PROTO"),
      y = function() {},
      h = function() {
        var e, n = c("iframe"),
          i = r.length;
        for (n.style.display = "none", a.appendChild(n), n.src = String("javascript:"), (e = n.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), h = e.F; i--;) delete h.prototype[r[i]];
        return h()
      };
    e.exports = Object.create || function(e, n) {
      var i;
      return null !== e ? (y.prototype = t(e), i = new y, y.prototype = null, i[p] = e) : i = h(), void 0 === n ? i : l(i, n)
    }, o[p] = !0
  }, function(e, n, i) {
    var t = i(4);
    e.exports = !!Object.getOwnPropertySymbols && !t(function() {
      return !String(Symbol())
    })
  }, function(e, n, i) {
    var t = i(4);
    e.exports = !t(function() {
      function e() {}
      return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
    })
  }, function(e, n, i) {
    "use strict";
    var t = i(26).IteratorPrototype,
      l = i(61),
      r = i(10),
      o = i(23),
      a = i(9),
      c = function() {
        return this
      };
    e.exports = function(e, n, i) {
      var p = n + " Iterator";
      return e.prototype = l(t, {
        next: r(1, i)
      }), o(e, p, !1, !0), a[p] = c, e
    }
  }, function(e, n, i) {
    var t = i(4),
      l = /#|\.prototype\./,
      r = function(e, n) {
        var i = a[o(e)];
        return i == p || i != c && ("function" == typeof n ? t(n) : !!n)
      },
      o = r.normalize = function(e) {
        return String(e).replace(l, ".").toLowerCase()
      },
      a = r.data = {},
      c = r.NATIVE = "N",
      p = r.POLYFILL = "P";
    e.exports = r
  }, function(e, n) {
    n.f = Object.getOwnPropertySymbols
  }, function(e, n, i) {
    var t = i(21),
      l = Math.max,
      r = Math.min;
    e.exports = function(e, n) {
      var i = t(e);
      return i < 0 ? l(i + n, 0) : r(i, n)
    }
  }, function(e, n, i) {
    var t = i(14),
      l = i(27),
      r = i(67);
    e.exports = function(e) {
      return function(n, i, o) {
        var a, c = t(n),
          p = l(c.length),
          y = r(o, p);
        if (e && i != i) {
          for (; p > y;)
            if ((a = c[y++]) != a) return !0
        } else
          for (; p > y; y++)
            if ((e || y in c) && c[y] === i) return e || y || 0;
        return !e && -1
      }
    }
  }, function(e, n, i) {
    var t = i(28),
      l = i(13).concat("length", "prototype");
    n.f = Object.getOwnPropertyNames || function(e) {
      return t(e, l)
    }
  }, function(e, n, i) {
    var t = i(0),
      l = i(69),
      r = i(66),
      o = i(3),
      a = t.Reflect;
    e.exports = a && a.ownKeys || function(e) {
      var n = l.f(o(e)),
        i = r.f;
      return i ? n.concat(i(e)) : n
    }
  }, function(e, n, i) {
    var t = i(1),
      l = i(70),
      r = i(31),
      o = i(7);
    e.exports = function(e, n) {
      for (var i = l(n), a = o.f, c = r.f, p = 0; p < i.length; p++) {
        var y = i[p];
        t(e, y) || a(e, y, c(n, y))
      }
    }
  }, function(e, n, i) {
    var t = i(4),
      l = i(30),
      r = "".split;
    e.exports = t(function() {
      return !Object("z").propertyIsEnumerable(0)
    }) ? function(e) {
      return "String" == l(e) ? r.call(e, "") : Object(e)
    } : Object
  }, function(e, n, i) {
    "use strict";
    var t = {}.propertyIsEnumerable,
      l = Object.getOwnPropertyDescriptor,
      r = l && !t.call({
        1: 2
      }, 1);
    n.f = r ? function(e) {
      var n = l(this, e);
      return !!n && n.enumerable
    } : t
  }, function(e, n, i) {
    "use strict";
    var t = i(32),
      l = i(64),
      r = i(25),
      o = i(57),
      a = i(23),
      c = i(5),
      p = i(29),
      y = i(2),
      h = i(17),
      x = i(9),
      s = i(26),
      u = s.IteratorPrototype,
      d = s.BUGGY_SAFARI_ITERATORS,
      f = y("iterator"),
      g = function() {
        return this
      };
    e.exports = function(e, n, i, y, s, v, m) {
      l(i, n, y);
      var w, M, b, z = function(e) {
          if (e === s && O) return O;
          if (!d && e in H) return H[e];
          switch (e) {
            case "keys":
            case "values":
            case "entries":
              return function() {
                return new i(this, e)
              }
          }
          return function() {
            return new i(this)
          }
        },
        A = n + " Iterator",
        k = !1,
        H = e.prototype,
        V = H[f] || H["@@iterator"] || s && H[s],
        O = !d && V || z(s),
        j = "Array" == n && H.entries || V;
      if (j && (w = r(j.call(new e)), u !== Object.prototype && w.next && (h || r(w) === u || (o ? o(w, u) : "function" != typeof w[f] && c(w, f, g)), a(w, A, !0, !0), h && (x[A] = g))), "values" == s && V && "values" !== V.name && (k = !0, O = function() {
          return V.call(this)
        }), h && !m || H[f] === O || c(H, f, O), x[n] = O, s)
        if (M = {
            values: z("values"),
            keys: v ? O : z("keys"),
            entries: z("entries")
          }, m)
          for (b in M) !d && !k && b in H || p(H, b, M[b]);
        else t({
          target: n,
          proto: !0,
          forced: d || k
        }, M);
      return M
    }
  }, function(e, n) {
    var i;
    i = function() {
      return this
    }();
    try {
      i = i || Function("return this")() || (0, eval)("this")
    } catch (e) {
      "object" == typeof window && (i = window)
    }
    e.exports = i
  }, function(e, n, i) {
    var t = i(0),
      l = i(36),
      r = t.WeakMap;
    e.exports = "function" == typeof r && /native code/.test(l.call(r))
  }, function(e, n, i) {
    var t = i(21),
      l = i(20);
    e.exports = function(e, n, i) {
      var r, o, a = String(l(e)),
        c = t(n),
        p = a.length;
      return c < 0 || c >= p ? i ? "" : void 0 : (r = a.charCodeAt(c)) < 55296 || r > 56319 || c + 1 === p || (o = a.charCodeAt(c + 1)) < 56320 || o > 57343 ? i ? a.charAt(c) : r : i ? a.slice(c, c + 2) : o - 56320 + (r - 55296 << 10) + 65536
    }
  }, function(e, n, i) {
    "use strict";
    var t = i(77),
      l = i(37),
      r = i(74),
      o = l.set,
      a = l.getterFor("String Iterator");
    r(String, "String", function(e) {
      o(this, {
        type: "String Iterator",
        string: String(e),
        index: 0
      })
    }, function() {
      var e, n = a(this),
        i = n.string,
        l = n.index;
      return l >= i.length ? {
        value: void 0,
        done: !0
      } : (e = t(i, l, !0), n.index += e.length, {
        value: e,
        done: !1
      })
    })
  }, function(e, n, i) {
    i(78), i(55);
    var t = i(45);
    e.exports = t.Array.from
  }, function(e, n, i) {
    i(79), e.exports = i(44)
  }])
});

/*!
 * Name    : Just Another Parallax [Jarallax]
 * Version : 1.12.2
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
 */
! function(n) {
  var o = {};

  function i(e) {
    if (o[e]) return o[e].exports;
    var t = o[e] = {
      i: e,
      l: !1,
      exports: {}
    };
    return n[e].call(t.exports, t, t.exports, i), t.l = !0, t.exports
  }
  i.m = n, i.c = o, i.d = function(e, t, n) {
    i.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    })
  }, i.r = function(e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, i.t = function(t, e) {
    if (1 & e && (t = i(t)), 8 & e) return t;
    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
    var n = Object.create(null);
    if (i.r(n), Object.defineProperty(n, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t)
      for (var o in t) i.d(n, o, function(e) {
        return t[e]
      }.bind(null, o));
    return n
  }, i.n = function(e) {
    var t = e && e.__esModule ? function() {
      return e.default
    } : function() {
      return e
    };
    return i.d(t, "a", t), t
  }, i.o = function(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, i.p = "", i(i.s = 10)
}([, , function(e, t) {
  e.exports = function(e) {
    "complete" === document.readyState || "interactive" === document.readyState ? e.call() : document.attachEvent ? document.attachEvent("onreadystatechange", function() {
      "interactive" === document.readyState && e.call()
    }) : document.addEventListener && document.addEventListener("DOMContentLoaded", e)
  }
}, function(n, e, t) {
  (function(e) {
    var t = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {};
    n.exports = t
  }).call(this, t(4))
}, function(e, t) {
  function n(e) {
    return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
      return typeof e
    } : function(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
  }
  var o = function() {
    return this
  }();
  try {
    o = o || new Function("return this")()
  } catch (e) {
    "object" === ("undefined" == typeof window ? "undefined" : n(window)) && (o = window)
  }
  e.exports = o
}, , , , , , function(e, t, n) {
  e.exports = n(11)
}, function(e, t, n) {
  "use strict";
  n.r(t);
  var o = n(2),
    i = n.n(o),
    a = n(3),
    r = n(12);

  function l(e) {
    return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
      return typeof e
    } : function(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
  }
  var s, c, u = a.window.jarallax;
  a.window.jarallax = r.default, a.window.jarallax.noConflict = function() {
    return a.window.jarallax = u, this
  }, void 0 !== a.jQuery && ((s = function() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    Array.prototype.unshift.call(t, this);
    var o = r.default.apply(a.window, t);
    return "object" !== l(o) ? o : this
  }).constructor = r.default.constructor, c = a.jQuery.fn.jarallax, a.jQuery.fn.jarallax = s, a.jQuery.fn.jarallax.noConflict = function() {
    return a.jQuery.fn.jarallax = c, this
  }), i()(function() {
    Object(r.default)(document.querySelectorAll("[data-jarallax]"))
  })
}, function(e, t, n) {
  "use strict";
  n.r(t);
  var o = n(2),
    i = n.n(o),
    b = n(3);

  function c(e, t) {
    return function(e) {
      if (Array.isArray(e)) return e
    }(e) || function(e, t) {
      if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
      var n = [],
        o = !0,
        i = !1,
        a = void 0;
      try {
        for (var r, l = e[Symbol.iterator](); !(o = (r = l.next()).done) && (n.push(r.value), !t || n.length !== t); o = !0);
      } catch (e) {
        i = !0, a = e
      } finally {
        try {
          o || null == l.return || l.return()
        } finally {
          if (i) throw a
        }
      }
      return n
    }(e, t) || function(e, t) {
      if (!e) return;
      if ("string" == typeof e) return a(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      "Object" === n && e.constructor && (n = e.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(e);
      if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
    }(e, t) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
  }

  function a(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
    return o
  }

  function u(e) {
    return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
      return typeof e
    } : function(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
  }

  function r(e, t) {
    for (var n = 0; n < t.length; n++) {
      var o = t[n];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
    }
  }
  var l, h, d = b.window.navigator,
    p = -1 < d.userAgent.indexOf("MSIE ") || -1 < d.userAgent.indexOf("Trident/index.html") || -1 < d.userAgent.indexOf("Edge/index.html"),
    s = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(d.userAgent),
    m = function() {
      for (var e = "transform WebkitTransform MozTransform".split(" "), t = document.createElement("div"), n = 0; n < e.length; n += 1)
        if (t && void 0 !== t.style[e[n]]) return e[n];
      return !1
    }();

  function f() {
    h = s ? (!l && document.body && ((l = document.createElement("div")).style.cssText = "position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;", document.body.appendChild(l)), (l ? l.clientHeight : 0) || b.window.innerHeight || document.documentElement.clientHeight) : b.window.innerHeight || document.documentElement.clientHeight
  }
  f(), b.window.addEventListener("resize", f), b.window.addEventListener("orientationchange", f), b.window.addEventListener("load", f), i()(function() {
    f()
  });
  var g = [];

  function y() {
    g.length && (g.forEach(function(e, t) {
      var n = e.instance,
        o = e.oldData,
        i = n.$item.getBoundingClientRect(),
        a = {
          width: i.width,
          height: i.height,
          top: i.top,
          bottom: i.bottom,
          wndW: b.window.innerWidth,
          wndH: h
        },
        r = !o || o.wndW !== a.wndW || o.wndH !== a.wndH || o.width !== a.width || o.height !== a.height,
        l = r || !o || o.top !== a.top || o.bottom !== a.bottom;
      g[t].oldData = a, r && n.onResize(), l && n.onScroll()
    }), b.window.requestAnimationFrame(y))
  }

  function v(e, t) {
    ("object" === ("undefined" == typeof HTMLElement ? "undefined" : u(HTMLElement)) ? e instanceof HTMLElement : e && "object" === u(e) && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName) && (e = [e]);
    for (var n, o = e.length, i = 0, a = arguments.length, r = new Array(2 < a ? a - 2 : 0), l = 2; l < a; l++) r[l - 2] = arguments[l];
    for (; i < o; i += 1)
      if ("object" === u(t) || void 0 === t ? e[i].jarallax || (e[i].jarallax = new w(e[i], t)) : e[i].jarallax && (n = e[i].jarallax[t].apply(e[i].jarallax, r)), void 0 !== n) return n;
    return e
  }
  var x = 0,
    w = function() {
      function s(e, t) {
        ! function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, s);
        var n = this;
        n.instanceID = x, x += 1, n.$item = e, n.defaults = {
          type: "scroll",
          speed: .5,
          imgSrc: null,
          imgElement: ".jarallax-img",
          imgSize: "cover",
          imgPosition: "50% 50%",
          imgRepeat: "no-repeat",
          keepImg: !1,
          elementInViewport: null,
          zIndex: -100,
          disableParallax: !1,
          disableVideo: !1,
          videoSrc: null,
          videoStartTime: 0,
          videoEndTime: 0,
          videoVolume: 0,
          videoLoop: !0,
          videoPlayOnlyVisible: !0,
          videoLazyLoading: !0,
          onScroll: null,
          onInit: null,
          onDestroy: null,
          onCoverImage: null
        };
        var o, i, a = n.$item.dataset || {},
          r = {};
        Object.keys(a).forEach(function(e) {
          var t = e.substr(0, 1).toLowerCase() + e.substr(1);
          t && void 0 !== n.defaults[t] && (r[t] = a[e])
        }), n.options = n.extend({}, n.defaults, r, t), n.pureOptions = n.extend({}, n.options), Object.keys(n.options).forEach(function(e) {
          "true" === n.options[e] ? n.options[e] = !0 : "false" === n.options[e] && (n.options[e] = !1)
        }), n.options.speed = Math.min(2, Math.max(-1, parseFloat(n.options.speed))), "string" == typeof n.options.disableParallax && (n.options.disableParallax = new RegExp(n.options.disableParallax)), n.options.disableParallax instanceof RegExp && (o = n.options.disableParallax, n.options.disableParallax = function() {
          return o.test(d.userAgent)
        }), "function" != typeof n.options.disableParallax && (n.options.disableParallax = function() {
          return !1
        }), "string" == typeof n.options.disableVideo && (n.options.disableVideo = new RegExp(n.options.disableVideo)), n.options.disableVideo instanceof RegExp && (i = n.options.disableVideo, n.options.disableVideo = function() {
          return i.test(d.userAgent)
        }), "function" != typeof n.options.disableVideo && (n.options.disableVideo = function() {
          return !1
        });
        var l = n.options.elementInViewport;
        l && "object" === u(l) && void 0 !== l.length && (l = c(l, 1)[0]), l instanceof Element || (l = null), n.options.elementInViewport = l, n.image = {
          src: n.options.imgSrc || null,
          $container: null,
          useImgTag: !1,
          position: /iPad|iPhone|iPod|Android/.test(d.userAgent) ? "absolute" : "fixed"
        }, n.initImg() && n.canInitParallax() && n.init()
      }
      var e, t, n;
      return e = s, (t = [{
        key: "css",
        value: function(t, n) {
          return "string" == typeof n ? b.window.getComputedStyle(t).getPropertyValue(n) : (n.transform && m && (n[m] = n.transform), Object.keys(n).forEach(function(e) {
            t.style[e] = n[e]
          }), t)
        }
      }, {
        key: "extend",
        value: function(n) {
          for (var e = arguments.length, o = new Array(1 < e ? e - 1 : 0), t = 1; t < e; t++) o[t - 1] = arguments[t];
          return n = n || {}, Object.keys(o).forEach(function(t) {
            o[t] && Object.keys(o[t]).forEach(function(e) {
              n[e] = o[t][e]
            })
          }), n
        }
      }, {
        key: "getWindowData",
        value: function() {
          return {
            width: b.window.innerWidth || document.documentElement.clientWidth,
            height: h,
            y: document.documentElement.scrollTop
          }
        }
      }, {
        key: "initImg",
        value: function() {
          var e = this,
            t = e.options.imgElement;
          return t && "string" == typeof t && (t = e.$item.querySelector(t)), t instanceof Element || (e.options.imgSrc ? (t = new Image).src = e.options.imgSrc : t = null), t && (e.options.keepImg ? e.image.$item = t.cloneNode(!0) : (e.image.$item = t, e.image.$itemParent = t.parentNode), e.image.useImgTag = !0), !!e.image.$item || (null === e.image.src && (e.image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", e.image.bgImage = e.css(e.$item, "background-image")), !(!e.image.bgImage || "none" === e.image.bgImage))
        }
      }, {
        key: "canInitParallax",
        value: function() {
          return m && !this.options.disableParallax()
        }
      }, {
        key: "init",
        value: function() {
          var e, t, n, o = this,
            i = {
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              overflow: "hidden"
            },
            a = {
              pointerEvents: "none",
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
              willChange: "transform,opacity"
            };
          o.options.keepImg || ((e = o.$item.getAttribute("style")) && o.$item.setAttribute("data-jarallax-original-styles", e), !o.image.useImgTag || (t = o.image.$item.getAttribute("style")) && o.image.$item.setAttribute("data-jarallax-original-styles", t)), "static" === o.css(o.$item, "position") && o.css(o.$item, {
            position: "relative"
          }), "auto" === o.css(o.$item, "z-index") && o.css(o.$item, {
            zIndex: 0
          }), o.image.$container = document.createElement("div"), o.css(o.image.$container, i), o.css(o.image.$container, {
            "z-index": o.options.zIndex
          }), p && o.css(o.image.$container, {
            opacity: .9999
          }), o.image.$container.setAttribute("id", "jarallax-container-".concat(o.instanceID)), o.$item.appendChild(o.image.$container), o.image.useImgTag ? a = o.extend({
            "object-fit": o.options.imgSize,
            "object-position": o.options.imgPosition,
            "font-family": "object-fit: ".concat(o.options.imgSize, "; object-position: ").concat(o.options.imgPosition, ";"),
            "max-width": "none"
          }, i, a) : (o.image.$item = document.createElement("div"), o.image.src && (a = o.extend({
            "background-position": o.options.imgPosition,
            "background-size": o.options.imgSize,
            "background-repeat": o.options.imgRepeat,
            "background-image": o.image.bgImage || 'url("'.concat(o.image.src, '")')
          }, i, a))), "opacity" !== o.options.type && "scale" !== o.options.type && "scale-opacity" !== o.options.type && 1 !== o.options.speed || (o.image.position = "absolute"), "fixed" === o.image.position && (n = function(e) {
            for (var t = []; null !== e.parentElement;) 1 === (e = e.parentElement).nodeType && t.push(e);
            return t
          }(o.$item).filter(function(e) {
            var t = b.window.getComputedStyle(e),
              n = t["-webkit-transform"] || t["-moz-transform"] || t.transform;
            return n && "none" !== n || /(auto|scroll)/.test(t.overflow + t["overflow-y"] + t["overflow-x"])
          }), o.image.position = n.length ? "absolute" : "fixed"), a.position = o.image.position, o.css(o.image.$item, a), o.image.$container.appendChild(o.image.$item), o.onResize(), o.onScroll(!0), o.options.onInit && o.options.onInit.call(o), "none" !== o.css(o.$item, "background-image") && o.css(o.$item, {
            "background-image": "none"
          }), o.addToParallaxList()
        }
      }, {
        key: "addToParallaxList",
        value: function() {
          g.push({
            instance: this
          }), 1 === g.length && b.window.requestAnimationFrame(y)
        }
      }, {
        key: "removeFromParallaxList",
        value: function() {
          var n = this;
          g.forEach(function(e, t) {
            e.instance.instanceID === n.instanceID && g.splice(t, 1)
          })
        }
      }, {
        key: "destroy",
        value: function() {
          var e = this;
          e.removeFromParallaxList();
          var t, n = e.$item.getAttribute("data-jarallax-original-styles");
          e.$item.removeAttribute("data-jarallax-original-styles"), n ? e.$item.setAttribute("style", n) : e.$item.removeAttribute("style"), e.image.useImgTag && (t = e.image.$item.getAttribute("data-jarallax-original-styles"), e.image.$item.removeAttribute("data-jarallax-original-styles"), t ? e.image.$item.setAttribute("style", n) : e.image.$item.removeAttribute("style"), e.image.$itemParent && e.image.$itemParent.appendChild(e.image.$item)), e.$clipStyles && e.$clipStyles.parentNode.removeChild(e.$clipStyles), e.image.$container && e.image.$container.parentNode.removeChild(e.image.$container), e.options.onDestroy && e.options.onDestroy.call(e), delete e.$item.jarallax
        }
      }, {
        key: "clipContainer",
        value: function() {
          var e, t, n, o, i;
          "fixed" === this.image.position && (n = (t = (e = this).image.$container.getBoundingClientRect()).width, o = t.height, e.$clipStyles || (e.$clipStyles = document.createElement("style"), e.$clipStyles.setAttribute("type", "text/css"), e.$clipStyles.setAttribute("id", "jarallax-clip-".concat(e.instanceID)), (document.head || document.getElementsByTagName("head")[0]).appendChild(e.$clipStyles)), i = "#jarallax-container-".concat(e.instanceID, " {\n           clip: rect(0 ").concat(n, "px ").concat(o, "px 0);\n           clip: rect(0, ").concat(n, "px, ").concat(o, "px, 0);\n        }"), e.$clipStyles.styleSheet ? e.$clipStyles.styleSheet.cssText = i : e.$clipStyles.innerHTML = i)
        }
      }, {
        key: "coverImage",
        value: function() {
          var e = this,
            t = e.image.$container.getBoundingClientRect(),
            n = t.height,
            o = e.options.speed,
            i = "scroll" === e.options.type || "scroll-opacity" === e.options.type,
            a = 0,
            r = n,
            l = 0;
          return i && (o < 0 ? (a = o * Math.max(n, h), h < n && (a -= o * (n - h))) : a = o * (n + h), 1 < o ? r = Math.abs(a - h) : o < 0 ? r = a / o + Math.abs(a) : r += (h - n) * (1 - o), a /= 2), e.parallaxScrollDistance = a, l = i ? (h - r) / 2 : (n - r) / 2, e.css(e.image.$item, {
            height: "".concat(r, "px"),
            marginTop: "".concat(l, "px"),
            left: "fixed" === e.image.position ? "".concat(t.left, "px") : "0",
            width: "".concat(t.width, "px")
          }), e.options.onCoverImage && e.options.onCoverImage.call(e), {
            image: {
              height: r,
              marginTop: l
            },
            container: t
          }
        }
      }, {
        key: "isVisible",
        value: function() {
          return this.isElementInViewport || !1
        }
      }, {
        key: "onScroll",
        value: function(e) {
          var t, n, o, i, a, r, l, s, c, u, d = this,
            p = d.$item.getBoundingClientRect(),
            m = p.top,
            f = p.height,
            g = {},
            y = p;
          d.options.elementInViewport && (y = d.options.elementInViewport.getBoundingClientRect()), d.isElementInViewport = 0 <= y.bottom && 0 <= y.right && y.top <= h && y.left <= b.window.innerWidth, (e || d.isElementInViewport) && (t = Math.max(0, m), n = Math.max(0, f + m), o = Math.max(0, -m), i = Math.max(0, m + f - h), a = Math.max(0, f - (m + f - h)), r = Math.max(0, -m + h - f), l = 1 - (h - m) / (h + f) * 2, s = 1, f < h ? s = 1 - (o || i) / f : n <= h ? s = n / h : a <= h && (s = a / h), "opacity" !== d.options.type && "scale-opacity" !== d.options.type && "scroll-opacity" !== d.options.type || (g.transform = "translate3d(0,0,0)", g.opacity = s), "scale" !== d.options.type && "scale-opacity" !== d.options.type || (c = 1, d.options.speed < 0 ? c -= d.options.speed * s : c += d.options.speed * (1 - s), g.transform = "scale(".concat(c, ") translate3d(0,0,0)")), "scroll" !== d.options.type && "scroll-opacity" !== d.options.type || (u = d.parallaxScrollDistance * l, "absolute" === d.image.position && (u -= m), g.transform = "translate3d(0,".concat(u, "px,0)")), d.css(d.image.$item, g), d.options.onScroll && d.options.onScroll.call(d, {
            section: p,
            beforeTop: t,
            beforeTopEnd: n,
            afterTop: o,
            beforeBottom: i,
            beforeBottomEnd: a,
            afterBottom: r,
            visiblePercent: s,
            fromViewportCenter: l
          }))
        }
      }, {
        key: "onResize",
        value: function() {
          this.coverImage(), this.clipContainer()
        }
      }]) && r(e.prototype, t), n && r(e, n), s
    }();
  v.constructor = w, t.default = v
}]);
//# sourceMappingURL=jarallax.min.js.map

/**
 * @popperjs/core v2.4.0 - MIT License
 */

"use strict";
! function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).Popper = {})
}(this, (function(e) {
  function t(e) {
    return {
      width: (e = e.getBoundingClientRect()).width,
      height: e.height,
      top: e.top,
      right: e.right,
      bottom: e.bottom,
      left: e.left,
      x: e.left,
      y: e.top
    }
  }

  function n(e) {
    return "[object Window]" !== e.toString() ? (e = e.ownerDocument) ? e.defaultView : window : e
  }

  function r(e) {
    return {
      scrollLeft: (e = n(e)).pageXOffset,
      scrollTop: e.pageYOffset
    }
  }

  function o(e) {
    return e instanceof n(e).Element || e instanceof Element
  }

  function i(e) {
    return e instanceof n(e).HTMLElement || e instanceof HTMLElement
  }

  function a(e) {
    return e ? (e.nodeName || "").toLowerCase() : null
  }

  function s(e) {
    return (o(e) ? e.ownerDocument : e.document).documentElement
  }

  function f(e) {
    return t(s(e)).left + r(e).scrollLeft
  }

  function p(e) {
    return n(e).getComputedStyle(e)
  }

  function c(e) {
    return e = p(e), /auto|scroll|overlay|hidden/.test(e.overflow + e.overflowY + e.overflowX)
  }

  function u(e, o, p) {
    void 0 === p && (p = !1);
    var u = s(o);
    e = t(e);
    var d = {
        scrollLeft: 0,
        scrollTop: 0
      },
      l = {
        x: 0,
        y: 0
      };
    return p || (("body" !== a(o) || c(u)) && (d = o !== n(o) && i(o) ? {
      scrollLeft: o.scrollLeft,
      scrollTop: o.scrollTop
    } : r(o)), i(o) ? ((l = t(o)).x += o.clientLeft, l.y += o.clientTop) : u && (l.x = f(u))), {
      x: e.left + d.scrollLeft - l.x,
      y: e.top + d.scrollTop - l.y,
      width: e.width,
      height: e.height
    }
  }

  function d(e) {
    return {
      x: e.offsetLeft,
      y: e.offsetTop,
      width: e.offsetWidth,
      height: e.offsetHeight
    }
  }

  function l(e) {
    return "html" === a(e) ? e : e.assignedSlot || e.parentNode || e.host || s(e)
  }

  function m(e, t) {
    void 0 === t && (t = []);
    var r = function e(t) {
      return 0 <= ["html", "body", "#document"].indexOf(a(t)) ? t.ownerDocument.body : i(t) && c(t) ? t : e(l(t))
    }(e);
    e = "body" === a(r);
    var o = n(r);
    return r = e ? [o].concat(o.visualViewport || [], c(r) ? r : []) : r, t = t.concat(r), e ? t : t.concat(m(l(r)))
  }

  function h(e) {
    return i(e) && "fixed" !== p(e).position ? e.offsetParent : null
  }

  function v(e) {
    var t = n(e);
    for (e = h(e); e && 0 <= ["table", "td", "th"].indexOf(a(e));) e = h(e);
    return e && "body" === a(e) && "static" === p(e).position ? t : e || t
  }

  function g(e) {
    var t = new Map,
      n = new Set,
      r = [];
    return e.forEach((function(e) {
      t.set(e.name, e)
    })), e.forEach((function(e) {
      n.has(e.name) || function e(o) {
        n.add(o.name), [].concat(o.requires || [], o.requiresIfExists || []).forEach((function(r) {
          n.has(r) || (r = t.get(r)) && e(r)
        })), r.push(o)
      }(e)
    })), r
  }

  function b(e) {
    var t;
    return function() {
      return t || (t = new Promise((function(n) {
        Promise.resolve().then((function() {
          t = void 0, n(e())
        }))
      }))), t
    }
  }

  function y(e) {
    return e.split("-")[0]
  }

  function x() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return !t.some((function(e) {
      return !(e && "function" == typeof e.getBoundingClientRect)
    }))
  }

  function w(e) {
    void 0 === e && (e = {});
    var t = e.defaultModifiers,
      n = void 0 === t ? [] : t,
      r = void 0 === (e = e.defaultOptions) ? N : e;
    return function(e, t, i) {
      function a() {
        f.forEach((function(e) {
          return e()
        })), f = []
      }
      void 0 === i && (i = r);
      var s = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, N, {}, r),
          modifiersData: {},
          elements: {
            reference: e,
            popper: t
          },
          attributes: {},
          styles: {}
        },
        f = [],
        p = !1,
        c = {
          state: s,
          setOptions: function(i) {
            return a(), s.options = Object.assign({}, r, {}, s.options, {}, i), s.scrollParents = {
              reference: o(e) ? m(e) : e.contextElement ? m(e.contextElement) : [],
              popper: m(t)
            }, i = function(e) {
              var t = g(e);
              return F.reduce((function(e, n) {
                return e.concat(t.filter((function(e) {
                  return e.phase === n
                })))
              }), [])
            }(function(e) {
              var t = e.reduce((function(e, t) {
                var n = e[t.name];
                return e[t.name] = n ? Object.assign({}, n, {}, t, {
                  options: Object.assign({}, n.options, {}, t.options),
                  data: Object.assign({}, n.data, {}, t.data)
                }) : t, e
              }), {});
              return Object.keys(t).map((function(e) {
                return t[e]
              }))
            }([].concat(n, s.options.modifiers))), s.orderedModifiers = i.filter((function(e) {
              return e.enabled
            })), s.orderedModifiers.forEach((function(e) {
              var t = e.name,
                n = e.options;
              n = void 0 === n ? {} : n, "function" == typeof(e = e.effect) && (t = e({
                state: s,
                name: t,
                instance: c,
                options: n
              }), f.push(t || function() {}))
            })), c.update()
          },
          forceUpdate: function() {
            if (!p) {
              var e = s.elements,
                t = e.reference;
              if (x(t, e = e.popper))
                for (s.rects = {
                    reference: u(t, v(e), "fixed" === s.options.strategy),
                    popper: d(e)
                  }, s.reset = !1, s.placement = s.options.placement, s.orderedModifiers.forEach((function(e) {
                    return s.modifiersData[e.name] = Object.assign({}, e.data)
                  })), t = 0; t < s.orderedModifiers.length; t++)
                  if (!0 === s.reset) s.reset = !1, t = -1;
                  else {
                    var n = s.orderedModifiers[t];
                    e = n.fn;
                    var r = n.options;
                    r = void 0 === r ? {} : r, n = n.name, "function" == typeof e && (s = e({
                      state: s,
                      options: r,
                      name: n,
                      instance: c
                    }) || s)
                  }
            }
          },
          update: b((function() {
            return new Promise((function(e) {
              c.forceUpdate(), e(s)
            }))
          })),
          destroy: function() {
            a(), p = !0
          }
        };
      return x(e, t) ? (c.setOptions(i).then((function(e) {
        !p && i.onFirstUpdate && i.onFirstUpdate(e)
      })), c) : c
    }
  }

  function O(e) {
    return 0 <= ["top", "bottom"].indexOf(e) ? "x" : "y"
  }

  function M(e) {
    var t = e.reference,
      n = e.element,
      r = (e = e.placement) ? y(e) : null;
    e = e ? e.split("-")[1] : null;
    var o = t.x + t.width / 2 - n.width / 2,
      i = t.y + t.height / 2 - n.height / 2;
    switch (r) {
      case "top":
        o = {
          x: o,
          y: t.y - n.height
        };
        break;
      case "bottom":
        o = {
          x: o,
          y: t.y + t.height
        };
        break;
      case "right":
        o = {
          x: t.x + t.width,
          y: i
        };
        break;
      case "left":
        o = {
          x: t.x - n.width,
          y: i
        };
        break;
      default:
        o = {
          x: t.x,
          y: t.y
        }
    }
    if (null != (r = r ? O(r) : null)) switch (i = "y" === r ? "height" : "width", e) {
      case "start":
        o[r] = Math.floor(o[r]) - Math.floor(t[i] / 2 - n[i] / 2);
        break;
      case "end":
        o[r] = Math.floor(o[r]) + Math.ceil(t[i] / 2 - n[i] / 2)
    }
    return o
  }

  function j(e) {
    var t, r = e.popper,
      o = e.popperRect,
      i = e.placement,
      a = e.offsets,
      f = e.position,
      p = e.gpuAcceleration,
      c = e.adaptive,
      u = window.devicePixelRatio || 1;
    e = Math.round(a.x * u) / u || 0, u = Math.round(a.y * u) / u || 0;
    var d = a.hasOwnProperty("x");
    a = a.hasOwnProperty("y");
    var l, m = "left",
      h = "top",
      g = window;
    if (c) {
      var b = v(r);
      b === n(r) && (b = s(r)), "top" === i && (h = "bottom", u -= b.clientHeight - o.height, u *= p ? 1 : -1), "left" === i && (m = "right", e -= b.clientWidth - o.width, e *= p ? 1 : -1)
    }
    return r = Object.assign({
      position: f
    }, c && I), p ? Object.assign({}, r, ((l = {})[h] = a ? "0" : "", l[m] = d ? "0" : "", l.transform = 2 > (g.devicePixelRatio || 1) ? "translate(" + e + "px, " + u + "px)" : "translate3d(" + e + "px, " + u + "px, 0)", l)) : Object.assign({}, r, ((t = {})[h] = a ? u + "px" : "", t[m] = d ? e + "px" : "", t.transform = "", t))
  }

  function E(e) {
    return e.replace(/left|right|bottom|top/g, (function(e) {
      return _[e]
    }))
  }

  function D(e) {
    return e.replace(/start|end/g, (function(e) {
      return U[e]
    }))
  }

  function P(e, t) {
    var n = !(!t.getRootNode || !t.getRootNode().host);
    if (e.contains(t)) return !0;
    if (n)
      do {
        if (t && e.isSameNode(t)) return !0;
        t = t.parentNode || t.host
      } while (t);
    return !1
  }

  function L(e) {
    return Object.assign({}, e, {
      left: e.x,
      top: e.y,
      right: e.x + e.width,
      bottom: e.y + e.height
    })
  }

  function k(e, o) {
    if ("viewport" === o) {
      var a = n(e);
      e = a.visualViewport, o = a.innerWidth, a = a.innerHeight, e && /iPhone|iPod|iPad/.test(navigator.platform) && (o = e.width, a = e.height), e = L({
        width: o,
        height: a,
        x: 0,
        y: 0
      })
    } else i(o) ? e = t(o) : (e = n(a = s(e)), o = r(a), (a = u(s(a), e)).height = Math.max(a.height, e.innerHeight), a.width = Math.max(a.width, e.innerWidth), a.x = -o.scrollLeft, a.y = -o.scrollTop, e = L(a));
    return e
  }

  function B(e, t, r) {
    return t = "clippingParents" === t ? function(e) {
      var t = m(e),
        n = 0 <= ["absolute", "fixed"].indexOf(p(e).position) && i(e) ? v(e) : e;
      return o(n) ? t.filter((function(e) {
        return o(e) && P(e, n)
      })) : []
    }(e) : [].concat(t), (r = (r = [].concat(t, [r])).reduce((function(t, r) {
      var o = k(e, r),
        c = n(r = i(r) ? r : s(e)),
        u = i(r) ? p(r) : {};
      parseFloat(u.borderTopWidth);
      var d = parseFloat(u.borderRightWidth) || 0,
        l = parseFloat(u.borderBottomWidth) || 0,
        m = parseFloat(u.borderLeftWidth) || 0;
      u = "html" === a(r);
      var h = f(r),
        v = r.clientWidth + d,
        g = r.clientHeight + l;
      return u && 50 < c.innerHeight - r.clientHeight && (g = c.innerHeight - l), l = u ? 0 : r.clientTop, d = r.clientLeft > m ? d : u ? c.innerWidth - v - h : r.offsetWidth - v, c = u ? c.innerHeight - g : r.offsetHeight - g, r = u ? h : r.clientLeft, t.top = Math.max(o.top + l, t.top), t.right = Math.min(o.right - d, t.right), t.bottom = Math.min(o.bottom - c, t.bottom), t.left = Math.max(o.left + r, t.left), t
    }), k(e, r[0]))).width = r.right - r.left, r.height = r.bottom - r.top, r.x = r.left, r.y = r.top, r
  }

  function W(e) {
    return Object.assign({}, {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }, {}, e)
  }

  function A(e, t) {
    return t.reduce((function(t, n) {
      return t[n] = e, t
    }), {})
  }

  function H(e, n) {
    void 0 === n && (n = {});
    var r = n;
    n = void 0 === (n = r.placement) ? e.placement : n;
    var i = r.boundary,
      a = void 0 === i ? "clippingParents" : i,
      f = void 0 === (i = r.rootBoundary) ? "viewport" : i;
    i = void 0 === (i = r.elementContext) ? "popper" : i;
    var p = r.altBoundary,
      c = void 0 !== p && p;
    r = W("number" != typeof(r = void 0 === (r = r.padding) ? 0 : r) ? r : A(r, q));
    var u = e.elements.reference;
    p = e.rects.popper, a = B(o(c = e.elements[c ? "popper" === i ? "reference" : "popper" : i]) ? c : c.contextElement || s(e.elements.popper), a, f), c = M({
      reference: f = t(u),
      element: p,
      strategy: "absolute",
      placement: n
    }), p = L(Object.assign({}, p, {}, c)), f = "popper" === i ? p : f;
    var d = {
      top: a.top - f.top + r.top,
      bottom: f.bottom - a.bottom + r.bottom,
      left: a.left - f.left + r.left,
      right: f.right - a.right + r.right
    };
    if (e = e.modifiersData.offset, "popper" === i && e) {
      var l = e[n];
      Object.keys(d).forEach((function(e) {
        var t = 0 <= ["right", "bottom"].indexOf(e) ? 1 : -1,
          n = 0 <= ["top", "bottom"].indexOf(e) ? "y" : "x";
        d[e] += l[n] * t
      }))
    }
    return d
  }

  function T(e, t, n) {
    return void 0 === n && (n = {
      x: 0,
      y: 0
    }), {
      top: e.top - t.height - n.y,
      right: e.right - t.width + n.x,
      bottom: e.bottom - t.height + n.y,
      left: e.left - t.width - n.x
    }
  }

  function R(e) {
    return ["top", "right", "bottom", "left"].some((function(t) {
      return 0 <= e[t]
    }))
  }
  var q = ["top", "bottom", "right", "left"],
    S = q.reduce((function(e, t) {
      return e.concat([t + "-start", t + "-end"])
    }), []),
    C = [].concat(q, ["auto"]).reduce((function(e, t) {
      return e.concat([t, t + "-start", t + "-end"])
    }), []),
    F = "beforeRead read afterRead beforeMain main afterMain beforeWrite write afterWrite".split(" "),
    N = {
      placement: "bottom",
      modifiers: [],
      strategy: "absolute"
    },
    V = {
      passive: !0
    },
    I = {
      top: "auto",
      right: "auto",
      bottom: "auto",
      left: "auto"
    },
    _ = {
      left: "right",
      right: "left",
      bottom: "top",
      top: "bottom"
    },
    U = {
      start: "end",
      end: "start"
    },
    z = [{
      name: "eventListeners",
      enabled: !0,
      phase: "write",
      fn: function() {},
      effect: function(e) {
        var t = e.state,
          r = e.instance,
          o = (e = e.options).scroll,
          i = void 0 === o || o,
          a = void 0 === (e = e.resize) || e,
          s = n(t.elements.popper),
          f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
        return i && f.forEach((function(e) {
            e.addEventListener("scroll", r.update, V)
          })), a && s.addEventListener("resize", r.update, V),
          function() {
            i && f.forEach((function(e) {
              e.removeEventListener("scroll", r.update, V)
            })), a && s.removeEventListener("resize", r.update, V)
          }
      },
      data: {}
    }, {
      name: "popperOffsets",
      enabled: !0,
      phase: "read",
      fn: function(e) {
        var t = e.state;
        t.modifiersData[e.name] = M({
          reference: t.rects.reference,
          element: t.rects.popper,
          strategy: "absolute",
          placement: t.placement
        })
      },
      data: {}
    }, {
      name: "computeStyles",
      enabled: !0,
      phase: "beforeWrite",
      fn: function(e) {
        var t = e.state,
          n = e.options;
        e = void 0 === (e = n.gpuAcceleration) || e, n = void 0 === (n = n.adaptive) || n, e = {
          placement: y(t.placement),
          popper: t.elements.popper,
          popperRect: t.rects.popper,
          gpuAcceleration: e
        }, null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, {}, j(Object.assign({}, e, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: n
        })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, {}, j(Object.assign({}, e, {
          offsets: t.modifiersData.arrow,
          position: "absolute",
          adaptive: !1
        })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
          "data-popper-placement": t.placement
        })
      },
      data: {}
    }, {
      name: "applyStyles",
      enabled: !0,
      phase: "write",
      fn: function(e) {
        var t = e.state;
        Object.keys(t.elements).forEach((function(e) {
          var n = t.styles[e] || {},
            r = t.attributes[e] || {},
            o = t.elements[e];
          i(o) && a(o) && (Object.assign(o.style, n), Object.keys(r).forEach((function(e) {
            var t = r[e];
            !1 === t ? o.removeAttribute(e) : o.setAttribute(e, !0 === t ? "" : t)
          })))
        }))
      },
      effect: function(e) {
        var t = e.state,
          n = {
            popper: {
              position: t.options.strategy,
              left: "0",
              top: "0",
              margin: "0"
            },
            arrow: {
              position: "absolute"
            },
            reference: {}
          };
        return Object.assign(t.elements.popper.style, n.popper), t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
          function() {
            Object.keys(t.elements).forEach((function(e) {
              var r = t.elements[e],
                o = t.attributes[e] || {};
              e = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function(e, t) {
                return e[t] = "", e
              }), {}), i(r) && a(r) && (Object.assign(r.style, e), Object.keys(o).forEach((function(e) {
                r.removeAttribute(e)
              })))
            }))
          }
      },
      requires: ["computeStyles"]
    }, {
      name: "offset",
      enabled: !0,
      phase: "main",
      requires: ["popperOffsets"],
      fn: function(e) {
        var t = e.state,
          n = e.name,
          r = void 0 === (e = e.options.offset) ? [0, 0] : e,
          o = (e = C.reduce((function(e, n) {
            var o = t.rects,
              i = y(n),
              a = 0 <= ["left", "top"].indexOf(i) ? -1 : 1,
              s = "function" == typeof r ? r(Object.assign({}, o, {
                placement: n
              })) : r;
            return o = (o = s[0]) || 0, s = ((s = s[1]) || 0) * a, i = 0 <= ["left", "right"].indexOf(i) ? {
              x: s,
              y: o
            } : {
              x: o,
              y: s
            }, e[n] = i, e
          }), {}))[t.placement],
          i = o.x;
        o = o.y, null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += i, t.modifiersData.popperOffsets.y += o), t.modifiersData[n] = e
      }
    }, {
      name: "flip",
      enabled: !0,
      phase: "main",
      fn: function(e) {
        var t = e.state,
          n = e.options;
        if (e = e.name, !t.modifiersData[e]._skip) {
          var r = n.mainAxis;
          r = void 0 === r || r;
          var o = n.altAxis;
          o = void 0 === o || o;
          var i = n.fallbackPlacements,
            a = n.padding,
            s = n.boundary,
            f = n.rootBoundary,
            p = n.altBoundary,
            c = n.flipVariations,
            u = void 0 === c || c,
            d = n.allowedAutoPlacements;
          c = y(n = t.options.placement), i = i || (c !== n && u ? function(e) {
            if ("auto" === y(e)) return [];
            var t = E(e);
            return [D(e), t, D(t)]
          }(n) : [E(n)]);
          var l = [n].concat(i).reduce((function(e, n) {
            return e.concat("auto" === y(n) ? function(e, t) {
              void 0 === t && (t = {});
              var n = t.boundary,
                r = t.rootBoundary,
                o = t.padding,
                i = t.flipVariations,
                a = t.allowedAutoPlacements,
                s = void 0 === a ? C : a,
                f = t.placement.split("-")[1],
                p = (f ? i ? S : S.filter((function(e) {
                  return e.split("-")[1] === f
                })) : q).filter((function(e) {
                  return 0 <= s.indexOf(e)
                })).reduce((function(t, i) {
                  return t[i] = H(e, {
                    placement: i,
                    boundary: n,
                    rootBoundary: r,
                    padding: o
                  })[y(i)], t
                }), {});
              return Object.keys(p).sort((function(e, t) {
                return p[e] - p[t]
              }))
            }(t, {
              placement: n,
              boundary: s,
              rootBoundary: f,
              padding: a,
              flipVariations: u,
              allowedAutoPlacements: d
            }) : n)
          }), []);
          n = t.rects.reference, i = t.rects.popper;
          var m = new Map;
          c = !0;
          for (var h = l[0], v = 0; v < l.length; v++) {
            var g = l[v],
              b = y(g),
              x = "start" === g.split("-")[1],
              w = 0 <= ["top", "bottom"].indexOf(b),
              O = w ? "width" : "height",
              M = H(t, {
                placement: g,
                boundary: s,
                rootBoundary: f,
                altBoundary: p,
                padding: a
              });
            if (x = w ? x ? "right" : "left" : x ? "bottom" : "top", n[O] > i[O] && (x = E(x)), O = E(x), w = [], r && w.push(0 >= M[b]), o && w.push(0 >= M[x], 0 >= M[O]), w.every((function(e) {
                return e
              }))) {
              h = g, c = !1;
              break
            }
            m.set(g, w)
          }
          if (c)
            for (r = function(e) {
                var t = l.find((function(t) {
                  if (t = m.get(t)) return t.slice(0, e).every((function(e) {
                    return e
                  }))
                }));
                if (t) return h = t, "break"
              }, o = u ? 3 : 1; 0 < o && "break" !== r(o); o--);
          t.placement !== h && (t.modifiersData[e]._skip = !0, t.placement = h, t.reset = !0)
        }
      },
      requiresIfExists: ["offset"],
      data: {
        _skip: !1
      }
    }, {
      name: "preventOverflow",
      enabled: !0,
      phase: "main",
      fn: function(e) {
        var t = e.state,
          n = e.options;
        e = e.name;
        var r = n.mainAxis,
          o = void 0 === r || r;
        r = void 0 !== (r = n.altAxis) && r;
        var i = n.tether;
        i = void 0 === i || i;
        var a = n.tetherOffset,
          s = void 0 === a ? 0 : a;
        n = H(t, {
          boundary: n.boundary,
          rootBoundary: n.rootBoundary,
          padding: n.padding,
          altBoundary: n.altBoundary
        }), a = y(t.placement);
        var f = t.placement.split("-")[1],
          p = !f,
          c = O(a);
        a = "x" === c ? "y" : "x";
        var u = t.modifiersData.popperOffsets,
          l = t.rects.reference,
          m = t.rects.popper,
          h = "function" == typeof s ? s(Object.assign({}, t.rects, {
            placement: t.placement
          })) : s;
        if (s = {
            x: 0,
            y: 0
          }, u) {
          if (o) {
            var g = "y" === c ? "top" : "left",
              b = "y" === c ? "bottom" : "right",
              x = "y" === c ? "height" : "width";
            o = u[c];
            var w = u[c] + n[g],
              M = u[c] - n[b],
              j = i ? -m[x] / 2 : 0,
              E = "start" === f ? l[x] : m[x];
            f = "start" === f ? -m[x] : -l[x], m = t.elements.arrow, m = i && m ? d(m) : {
              width: 0,
              height: 0
            };
            var D = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
            };
            g = D[g], b = D[b], m = Math.max(0, Math.min(l[x], m[x])), E = p ? l[x] / 2 - j - m - g - h : E - m - g - h, p = p ? -l[x] / 2 + j + m + b + h : f + m + b + h, h = t.elements.arrow && v(t.elements.arrow), l = t.modifiersData.offset ? t.modifiersData.offset[t.placement][c] : 0, h = u[c] + E - l - (h ? "y" === c ? h.clientTop || 0 : h.clientLeft || 0 : 0), p = u[c] + p - l, i = Math.max(i ? Math.min(w, h) : w, Math.min(o, i ? Math.max(M, p) : M)), u[c] = i, s[c] = i - o
          }
          r && (r = u[a], i = Math.max(r + n["x" === c ? "top" : "left"], Math.min(r, r - n["x" === c ? "bottom" : "right"])), u[a] = i, s[a] = i - r), t.modifiersData[e] = s
        }
      },
      requiresIfExists: ["offset"]
    }, {
      name: "arrow",
      enabled: !0,
      phase: "main",
      fn: function(e) {
        var t, n = e.state;
        e = e.name;
        var r = n.elements.arrow,
          o = n.modifiersData.popperOffsets,
          i = y(n.placement),
          a = O(i);
        if (i = 0 <= ["left", "right"].indexOf(i) ? "height" : "width", r && o) {
          var s = n.modifiersData[e + "#persistent"].padding,
            f = d(r),
            p = "y" === a ? "top" : "left",
            c = "y" === a ? "bottom" : "right",
            u = n.rects.reference[i] + n.rects.reference[a] - o[a] - n.rects.popper[i];
          o = o[a] - n.rects.reference[a], u = (r = (r = v(r)) ? "y" === a ? r.clientHeight || 0 : r.clientWidth || 0 : 0) / 2 - f[i] / 2 + (u / 2 - o / 2), i = Math.max(s[p], Math.min(u, r - f[i] - s[c])), n.modifiersData[e] = ((t = {})[a] = i, t.centerOffset = i - u, t)
        }
      },
      effect: function(e) {
        var t = e.state,
          n = e.options;
        e = e.name;
        var r = n.element;
        if (r = void 0 === r ? "[data-popper-arrow]" : r, n = void 0 === (n = n.padding) ? 0 : n, null != r) {
          if ("string" == typeof r && !(r = t.elements.popper.querySelector(r))) return;
          P(t.elements.popper, r) && (t.elements.arrow = r, t.modifiersData[e + "#persistent"] = {
            padding: W("number" != typeof n ? n : A(n, q))
          })
        }
      },
      requires: ["popperOffsets"],
      requiresIfExists: ["preventOverflow"]
    }, {
      name: "hide",
      enabled: !0,
      phase: "main",
      requiresIfExists: ["preventOverflow"],
      fn: function(e) {
        var t = e.state;
        e = e.name;
        var n = t.rects.reference,
          r = t.rects.popper,
          o = t.modifiersData.preventOverflow,
          i = H(t, {
            elementContext: "reference"
          }),
          a = H(t, {
            altBoundary: !0
          });
        n = T(i, n), r = T(a, r, o), o = R(n), a = R(r), t.modifiersData[e] = {
          referenceClippingOffsets: n,
          popperEscapeOffsets: r,
          isReferenceHidden: o,
          hasPopperEscaped: a
        }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
          "data-popper-reference-hidden": o,
          "data-popper-escaped": a
        })
      }
    }],
    X = w({
      defaultModifiers: z
    });
  e.createPopper = X, e.defaultModifiers = z, e.detectOverflow = H, e.popperGenerator = w, Object.defineProperty(e, "__esModule", {
    value: !0
  })
}));
! function(t, e) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("@popperjs/core")) : "function" == typeof define && define.amd ? define(["@popperjs/core"], e) : (t = t || self).tippy = e(t.Popper)
}(this, (function(t) {
  "use strict";
  var e = "undefined" != typeof window && "undefined" != typeof document,
    n = e ? navigator.userAgent : "",
    i = /MSIE |Trident\//.test(n),
    r = {
      passive: !0,
      capture: !0
    };

  function o(t, e, n) {
    if (Array.isArray(t)) {
      var i = t[e];
      return null == i ? Array.isArray(n) ? n[e] : n : i
    }
    return t
  }

  function a(t, e) {
    var n = {}.toString.call(t);
    return 0 === n.indexOf("[object") && n.indexOf(e + "]") > -1
  }

  function s(t, e) {
    return "function" == typeof t ? t.apply(void 0, e) : t
  }

  function p(t, e) {
    return 0 === e ? t : function(i) {
      clearTimeout(n), n = setTimeout((function() {
        t(i)
      }), e)
    };
    var n
  }

  function u(t, e) {
    var n = Object.assign({}, t);
    return e.forEach((function(t) {
      delete n[t]
    })), n
  }

  function c(t) {
    return [].concat(t)
  }

  function f(t, e) {
    -1 === t.indexOf(e) && t.push(e)
  }

  function l(t) {
    return t.split("-")[0]
  }

  function d(t) {
    return [].slice.call(t)
  }

  function v() {
    return document.createElement("div")
  }

  function m(t) {
    return ["Element", "Fragment"].some((function(e) {
      return a(t, e)
    }))
  }

  function g(t) {
    return a(t, "MouseEvent")
  }

  function h(t) {
    return !(!t || !t._tippy || t._tippy.reference !== t)
  }

  function b(t) {
    return m(t) ? [t] : function(t) {
      return a(t, "NodeList")
    }(t) ? d(t) : Array.isArray(t) ? t : d(document.querySelectorAll(t))
  }

  function y(t, e) {
    t.forEach((function(t) {
      t && (t.style.transitionDuration = e + "ms")
    }))
  }

  function x(t, e) {
    t.forEach((function(t) {
      t && t.setAttribute("data-state", e)
    }))
  }

  function w(t) {
    var e = c(t)[0];
    return e && e.ownerDocument || document
  }

  function E(t, e, n) {
    var i = e + "EventListener";
    ["transitionend", "webkitTransitionEnd"].forEach((function(e) {
      t[i](e, n)
    }))
  }
  var T = {
      isTouch: !1
    },
    A = 0;

  function C() {
    T.isTouch || (T.isTouch = !0, window.performance && document.addEventListener("mousemove", O))
  }

  function O() {
    var t = performance.now();
    t - A < 20 && (T.isTouch = !1, document.removeEventListener("mousemove", O)), A = t
  }

  function L() {
    var t = document.activeElement;
    if (h(t)) {
      var e = t._tippy;
      t.blur && !e.state.isVisible && t.blur()
    }
  }
  var D = Object.assign({
      appendTo: function() {
        return document.body
      },
      aria: {
        content: "auto",
        expanded: "auto"
      },
      delay: 0,
      duration: [300, 250],
      getReferenceClientRect: null,
      hideOnClick: !0,
      ignoreAttributes: !1,
      interactive: !1,
      interactiveBorder: 2,
      interactiveDebounce: 0,
      moveTransition: "",
      offset: [0, 10],
      onAfterUpdate: function() {},
      onBeforeUpdate: function() {},
      onCreate: function() {},
      onDestroy: function() {},
      onHidden: function() {},
      onHide: function() {},
      onMount: function() {},
      onShow: function() {},
      onShown: function() {},
      onTrigger: function() {},
      onUntrigger: function() {},
      onClickOutside: function() {},
      placement: "top",
      plugins: [],
      popperOptions: {},
      render: null,
      showOnCreate: !1,
      touch: !0,
      trigger: "mouseenter focus",
      triggerTarget: null
    }, {
      animateFill: !1,
      followCursor: !1,
      inlinePositioning: !1,
      sticky: !1
    }, {}, {
      allowHTML: !1,
      animation: "fade",
      arrow: !0,
      content: "",
      inertia: !1,
      maxWidth: 350,
      role: "tooltip",
      theme: "",
      zIndex: 9999
    }),
    k = Object.keys(D);

  function M(t) {
    var e = (t.plugins || []).reduce((function(e, n) {
      var i = n.name,
        r = n.defaultValue;
      return i && (e[i] = void 0 !== t[i] ? t[i] : r), e
    }), {});
    return Object.assign({}, t, {}, e)
  }

  function V(t, e) {
    var n = Object.assign({}, e, {
      content: s(e.content, [t])
    }, e.ignoreAttributes ? {} : function(t, e) {
      return (e ? Object.keys(M(Object.assign({}, D, {
        plugins: e
      }))) : k).reduce((function(e, n) {
        var i = (t.getAttribute("data-tippy-" + n) || "").trim();
        if (!i) return e;
        if ("content" === n) e[n] = i;
        else try {
          e[n] = JSON.parse(i)
        } catch (t) {
          e[n] = i
        }
        return e
      }), {})
    }(t, e.plugins));
    return n.aria = Object.assign({}, D.aria, {}, n.aria), n.aria = {
      expanded: "auto" === n.aria.expanded ? e.interactive : n.aria.expanded,
      content: "auto" === n.aria.content ? e.interactive ? null : "describedby" : n.aria.content
    }, n
  }

  function R(t, e) {
    t.innerHTML = e
  }

  function j(t) {
    var e = v();
    return !0 === t ? e.className = "tippy-arrow" : (e.className = "tippy-svg-arrow", m(t) ? e.appendChild(t) : R(e, t)), e
  }

  function P(t, e) {
    m(e.content) ? (R(t, ""), t.appendChild(e.content)) : "function" != typeof e.content && (e.allowHTML ? R(t, e.content) : t.textContent = e.content)
  }

  function I(t) {
    var e = t.firstElementChild,
      n = d(e.children);
    return {
      box: e,
      content: n.find((function(t) {
        return t.classList.contains("tippy-content")
      })),
      arrow: n.find((function(t) {
        return t.classList.contains("tippy-arrow") || t.classList.contains("tippy-svg-arrow")
      })),
      backdrop: n.find((function(t) {
        return t.classList.contains("tippy-backdrop")
      }))
    }
  }

  function S(t) {
    var e = v(),
      n = v();
    n.className = "tippy-box", n.setAttribute("data-state", "hidden"), n.setAttribute("tabindex", "-1");
    var i = v();

    function r(n, i) {
      var r = I(e),
        o = r.box,
        a = r.content,
        s = r.arrow;
      i.theme ? o.setAttribute("data-theme", i.theme) : o.removeAttribute("data-theme"), "string" == typeof i.animation ? o.setAttribute("data-animation", i.animation) : o.removeAttribute("data-animation"), i.inertia ? o.setAttribute("data-inertia", "") : o.removeAttribute("data-inertia"), o.style.maxWidth = "number" == typeof i.maxWidth ? i.maxWidth + "px" : i.maxWidth, i.role ? o.setAttribute("role", i.role) : o.removeAttribute("role"), n.content === i.content && n.allowHTML === i.allowHTML || P(a, t.props), i.arrow ? s ? n.arrow !== i.arrow && (o.removeChild(s), o.appendChild(j(i.arrow))) : o.appendChild(j(i.arrow)) : s && o.removeChild(s)
    }
    return i.className = "tippy-content", i.setAttribute("data-state", "hidden"), P(i, t.props), e.appendChild(n), n.appendChild(i), r(t.props, t.props), {
      popper: e,
      onUpdate: r
    }
  }
  S.$$tippy = !0;
  var B = 1,
    H = [],
    U = [];

  function N(e, n) {
    var a, u, m, h, b, A, C, O, L = V(e, Object.assign({}, D, {}, M(n))),
      k = !1,
      R = !1,
      j = !1,
      P = !1,
      S = [],
      N = p(ht, L.interactiveDebounce),
      X = w(L.triggerTarget || e),
      Y = B++,
      _ = (O = L.plugins).filter((function(t, e) {
        return O.indexOf(t) === e
      })),
      z = {
        id: Y,
        reference: e,
        popper: v(),
        popperInstance: null,
        props: L,
        state: {
          isEnabled: !0,
          isVisible: !1,
          isDestroyed: !1,
          isMounted: !1,
          isShown: !1
        },
        plugins: _,
        clearDelayTimeouts: function() {
          clearTimeout(a), clearTimeout(u), cancelAnimationFrame(m)
        },
        setProps: function(t) {
          if (z.state.isDestroyed) return;
          it("onBeforeUpdate", [z, t]), mt();
          var n = z.props,
            i = V(e, Object.assign({}, z.props, {}, t, {
              ignoreAttributes: !0
            }));
          z.props = i, vt(), n.interactiveDebounce !== i.interactiveDebounce && (at(), N = p(ht, i.interactiveDebounce));
          n.triggerTarget && !i.triggerTarget ? c(n.triggerTarget).forEach((function(t) {
            t.removeAttribute("aria-expanded")
          })) : i.triggerTarget && e.removeAttribute("aria-expanded");
          ot(), nt(), q && q(n, i);
          z.popperInstance && (wt(), Tt().forEach((function(t) {
            requestAnimationFrame(t._tippy.popperInstance.forceUpdate)
          })));
          it("onAfterUpdate", [z, t])
        },
        setContent: function(t) {
          z.setProps({
            content: t
          })
        },
        show: function() {
          var t = z.state.isVisible,
            e = z.state.isDestroyed,
            n = !z.state.isEnabled,
            i = T.isTouch && !z.props.touch,
            r = o(z.props.duration, 0, D.duration);
          if (t || e || n || i) return;
          if (Z().hasAttribute("disabled")) return;
          if (it("onShow", [z], !1), !1 === z.props.onShow(z)) return;
          z.state.isVisible = !0, Q() && (W.style.visibility = "visible");
          nt(), ct(), z.state.isMounted || (W.style.transition = "none");
          if (Q()) {
            var a = tt(),
              p = a.box,
              u = a.content;
            y([p, u], 0)
          }
          A = function() {
              if (z.state.isVisible && !P) {
                if (P = !0, W.offsetHeight, W.style.transition = z.props.moveTransition, Q() && z.props.animation) {
                  var t = tt(),
                    e = t.box,
                    n = t.content;
                  y([e, n], r), x([e, n], "visible")
                }
                rt(), ot(), f(U, z), z.state.isMounted = !0, it("onMount", [z]), z.props.animation && Q() && function(t, e) {
                  lt(t, e)
                }(r, (function() {
                  z.state.isShown = !0, it("onShown", [z])
                }))
              }
            },
            function() {
              var t, e = z.props.appendTo,
                n = Z();
              t = z.props.interactive && e === D.appendTo || "parent" === e ? n.parentNode : s(e, [n]);
              t.contains(W) || t.appendChild(W);
              wt()
            }()
        },
        hide: function() {
          var t = !z.state.isVisible,
            e = z.state.isDestroyed,
            n = !z.state.isEnabled,
            i = o(z.props.duration, 1, D.duration);
          if (t || e || n) return;
          if (it("onHide", [z], !1), !1 === z.props.onHide(z)) return;
          z.state.isVisible = !1, z.state.isShown = !1, P = !1, Q() && (W.style.visibility = "hidden");
          if (at(), ft(), nt(), Q()) {
            var r = tt(),
              a = r.box,
              s = r.content;
            z.props.animation && (y([a, s], i), x([a, s], "hidden"))
          }
          rt(), ot(), z.props.animation ? Q() && function(t, e) {
            lt(t, (function() {
              !z.state.isVisible && W.parentNode && W.parentNode.contains(W) && e()
            }))
          }(i, z.unmount) : z.unmount()
        },
        hideWithInteractivity: function(t) {
          X.body.addEventListener("mouseleave", Ct), X.addEventListener("mousemove", N), f(H, N), N(t)
        },
        enable: function() {
          z.state.isEnabled = !0
        },
        disable: function() {
          z.hide(), z.state.isEnabled = !1
        },
        unmount: function() {
          z.state.isVisible && z.hide();
          if (!z.state.isMounted) return;
          Et(), Tt().forEach((function(t) {
            t._tippy.unmount()
          })), W.parentNode && W.parentNode.removeChild(W);
          U = U.filter((function(t) {
            return t !== z
          })), z.state.isMounted = !1, it("onHidden", [z])
        },
        destroy: function() {
          if (z.state.isDestroyed) return;
          z.clearDelayTimeouts(), z.unmount(), mt(), delete e._tippy, z.state.isDestroyed = !0, it("onDestroy", [z])
        }
      };
    if (!L.render) return z;
    var F = L.render(z),
      W = F.popper,
      q = F.onUpdate;
    W.setAttribute("data-tippy-root", ""), W.id = "tippy-" + z.id, z.popper = W, e._tippy = z, W._tippy = z;
    var $ = _.map((function(t) {
        return t.fn(z)
      })),
      J = e.hasAttribute("aria-expanded");
    return vt(), ot(), nt(), it("onCreate", [z]), L.showOnCreate && At(), W.addEventListener("mouseenter", (function() {
      z.props.interactive && z.state.isVisible && z.clearDelayTimeouts()
    })), W.addEventListener("mouseleave", (function(t) {
      z.props.interactive && z.props.trigger.indexOf("mouseenter") >= 0 && (X.addEventListener("mousemove", N), N(t))
    })), z;

    function G() {
      var t = z.props.touch;
      return Array.isArray(t) ? t : [t, 0]
    }

    function K() {
      return "hold" === G()[0]
    }

    function Q() {
      var t;
      return !!(null == (t = z.props.render) ? void 0 : t.$$tippy)
    }

    function Z() {
      return C || e
    }

    function tt() {
      return I(W)
    }

    function et(t) {
      return z.state.isMounted && !z.state.isVisible || T.isTouch || h && "focus" === h.type ? 0 : o(z.props.delay, t ? 0 : 1, D.delay)
    }

    function nt() {
      W.style.pointerEvents = z.props.interactive && z.state.isVisible ? "" : "none", W.style.zIndex = "" + z.props.zIndex
    }

    function it(t, e, n) {
      var i;
      (void 0 === n && (n = !0), $.forEach((function(n) {
        n[t] && n[t].apply(void 0, e)
      })), n) && (i = z.props)[t].apply(i, e)
    }

    function rt() {
      var t = z.props.aria;
      if (t.content) {
        var n = "aria-" + t.content,
          i = W.id;
        c(z.props.triggerTarget || e).forEach((function(t) {
          var e = t.getAttribute(n);
          if (z.state.isVisible) t.setAttribute(n, e ? e + " " + i : i);
          else {
            var r = e && e.replace(i, "").trim();
            r ? t.setAttribute(n, r) : t.removeAttribute(n)
          }
        }))
      }
    }

    function ot() {
      !J && z.props.aria.expanded && c(z.props.triggerTarget || e).forEach((function(t) {
        z.props.interactive ? t.setAttribute("aria-expanded", z.state.isVisible && t === Z() ? "true" : "false") : t.removeAttribute("aria-expanded")
      }))
    }

    function at() {
      X.body.removeEventListener("mouseleave", Ct), X.removeEventListener("mousemove", N), H = H.filter((function(t) {
        return t !== N
      }))
    }

    function st(t) {
      if (!(T.isTouch && (j || "mousedown" === t.type) || z.props.interactive && W.contains(t.target))) {
        if (Z().contains(t.target)) {
          if (T.isTouch) return;
          if (z.state.isVisible && z.props.trigger.indexOf("click") >= 0) return
        } else it("onClickOutside", [z, t]);
        !0 === z.props.hideOnClick && (k = !1, z.clearDelayTimeouts(), z.hide(), R = !0, setTimeout((function() {
          R = !1
        })), z.state.isMounted || ft())
      }
    }

    function pt() {
      j = !0
    }

    function ut() {
      j = !1
    }

    function ct() {
      X.addEventListener("mousedown", st, !0), X.addEventListener("touchend", st, r), X.addEventListener("touchstart", ut, r), X.addEventListener("touchmove", pt, r)
    }

    function ft() {
      X.removeEventListener("mousedown", st, !0), X.removeEventListener("touchend", st, r), X.removeEventListener("touchstart", ut, r), X.removeEventListener("touchmove", pt, r)
    }

    function lt(t, e) {
      var n = tt().box;

      function i(t) {
        t.target === n && (E(n, "remove", i), e())
      }
      if (0 === t) return e();
      E(n, "remove", b), E(n, "add", i), b = i
    }

    function dt(t, n, i) {
      void 0 === i && (i = !1), c(z.props.triggerTarget || e).forEach((function(e) {
        e.addEventListener(t, n, i), S.push({
          node: e,
          eventType: t,
          handler: n,
          options: i
        })
      }))
    }

    function vt() {
      var t;
      K() && (dt("touchstart", gt, {
        passive: !0
      }), dt("touchend", bt, {
        passive: !0
      })), (t = z.props.trigger, t.split(/\s+/).filter(Boolean)).forEach((function(t) {
        if ("manual" !== t) switch (dt(t, gt), t) {
          case "mouseenter":
            dt("mouseleave", bt);
            break;
          case "focus":
            dt(i ? "focusout" : "blur", yt);
            break;
          case "focusin":
            dt("focusout", yt)
        }
      }))
    }

    function mt() {
      S.forEach((function(t) {
        var e = t.node,
          n = t.eventType,
          i = t.handler,
          r = t.options;
        e.removeEventListener(n, i, r)
      })), S = []
    }

    function gt(t) {
      var e, n = !1;
      if (z.state.isEnabled && !xt(t) && !R) {
        var i = "focus" === (null == (e = h) ? void 0 : e.type);
        h = t, C = t.currentTarget, ot(), !z.state.isVisible && g(t) && H.forEach((function(e) {
          return e(t)
        })), "click" === t.type && (z.props.trigger.indexOf("mouseenter") < 0 || k) && !1 !== z.props.hideOnClick && z.state.isVisible ? n = !0 : At(t), "click" === t.type && (k = !n), n && !i && Ct(t)
      }
    }

    function ht(t) {
      var n = t.target,
        i = e.contains(n) || W.contains(n);
      "mousemove" === t.type && i || function(t, e) {
        var n = e.clientX,
          i = e.clientY;
        return t.every((function(t) {
          var e = t.popperRect,
            r = t.popperState,
            o = t.props.interactiveBorder,
            a = l(r.placement),
            s = r.modifiersData.offset;
          if (!s) return !0;
          var p = "bottom" === a ? s.top.y : 0,
            u = "top" === a ? s.bottom.y : 0,
            c = "right" === a ? s.left.x : 0,
            f = "left" === a ? s.right.x : 0,
            d = e.top - i + p > o,
            v = i - e.bottom - u > o,
            m = e.left - n + c > o,
            g = n - e.right - f > o;
          return d || v || m || g
        }))
      }(Tt().concat(W).map((function(t) {
        var e, n = null == (e = t._tippy.popperInstance) ? void 0 : e.state;
        return n ? {
          popperRect: t.getBoundingClientRect(),
          popperState: n,
          props: L
        } : null
      })).filter(Boolean), t) && (at(), Ct(t))
    }

    function bt(t) {
      xt(t) || z.props.trigger.indexOf("click") >= 0 && k || (z.props.interactive ? z.hideWithInteractivity(t) : Ct(t))
    }

    function yt(t) {
      z.props.trigger.indexOf("focusin") < 0 && t.target !== Z() || z.props.interactive && t.relatedTarget && W.contains(t.relatedTarget) || Ct(t)
    }

    function xt(t) {
      return !!T.isTouch && K() !== t.type.indexOf("touch") >= 0
    }

    function wt() {
      Et();
      var n = z.props,
        i = n.popperOptions,
        r = n.placement,
        o = n.offset,
        a = n.getReferenceClientRect,
        s = n.moveTransition,
        p = Q() ? I(W).arrow : null,
        u = a ? {
          getBoundingClientRect: a,
          contextElement: a.contextElement || Z()
        } : e,
        c = [{
          name: "offset",
          options: {
            offset: o
          }
        }, {
          name: "preventOverflow",
          options: {
            padding: {
              top: 2,
              bottom: 2,
              left: 5,
              right: 5
            }
          }
        }, {
          name: "flip",
          options: {
            padding: 5
          }
        }, {
          name: "computeStyles",
          options: {
            adaptive: !s
          }
        }, {
          name: "$$tippy",
          enabled: !0,
          phase: "beforeWrite",
          requires: ["computeStyles"],
          fn: function(t) {
            var e = t.state;
            if (Q()) {
              var n = tt().box;
              ["placement", "reference-hidden", "escaped"].forEach((function(t) {
                "placement" === t ? n.setAttribute("data-placement", e.placement) : e.attributes.popper["data-popper-" + t] ? n.setAttribute("data-" + t, "") : n.removeAttribute("data-" + t)
              })), e.attributes.popper = {}
            }
          }
        }];
      Q() && p && c.push({
        name: "arrow",
        options: {
          element: p,
          padding: 3
        }
      }), c.push.apply(c, (null == i ? void 0 : i.modifiers) || []), z.popperInstance = t.createPopper(u, W, Object.assign({}, i, {
        placement: r,
        onFirstUpdate: A,
        modifiers: c
      }))
    }

    function Et() {
      z.popperInstance && (z.popperInstance.destroy(), z.popperInstance = null)
    }

    function Tt() {
      return d(W.querySelectorAll("[data-tippy-root]"))
    }

    function At(t) {
      z.clearDelayTimeouts(), t && it("onTrigger", [z, t]), ct();
      var e = et(!0),
        n = G(),
        i = n[0],
        r = n[1];
      T.isTouch && "hold" === i && r && (e = r), e ? a = setTimeout((function() {
        z.show()
      }), e) : z.show()
    }

    function Ct(t) {
      if (z.clearDelayTimeouts(), it("onUntrigger", [z, t]), z.state.isVisible) {
        if (!(z.props.trigger.indexOf("mouseenter") >= 0 && z.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(t.type) >= 0 && k)) {
          var e = et(!1);
          e ? u = setTimeout((function() {
            z.state.isVisible && z.hide()
          }), e) : m = requestAnimationFrame((function() {
            z.hide()
          }))
        }
      } else ft()
    }
  }

  function X(t, e) {
    void 0 === e && (e = {});
    var n = D.plugins.concat(e.plugins || []);
    document.addEventListener("touchstart", C, r), window.addEventListener("blur", L);
    var i = Object.assign({}, e, {
        plugins: n
      }),
      o = b(t).reduce((function(t, e) {
        var n = e && N(e, i);
        return n && t.push(n), t
      }), []);
    return m(t) ? o[0] : o
  }
  X.defaultProps = D, X.setDefaultProps = function(t) {
    Object.keys(t).forEach((function(e) {
      D[e] = t[e]
    }))
  }, X.currentInput = T;
  var Y = {
    mouseover: "mouseenter",
    focusin: "focus",
    click: "click"
  };
  var _ = {
    name: "animateFill",
    defaultValue: !1,
    fn: function(t) {
      var e;
      if (!(null == (e = t.props.render) ? void 0 : e.$$tippy)) return {};
      var n = I(t.popper),
        i = n.box,
        r = n.content,
        o = t.props.animateFill ? function() {
          var t = v();
          return t.className = "tippy-backdrop", x([t], "hidden"), t
        }() : null;
      return {
        onCreate: function() {
          o && (i.insertBefore(o, i.firstElementChild), i.setAttribute("data-animatefill", ""), i.style.overflow = "hidden", t.setProps({
            arrow: !1,
            animation: "shift-away"
          }))
        },
        onMount: function() {
          if (o) {
            var t = i.style.transitionDuration,
              e = Number(t.replace("ms", ""));
            r.style.transitionDelay = Math.round(e / 10) + "ms", o.style.transitionDuration = t, x([o], "visible")
          }
        },
        onShow: function() {
          o && (o.style.transitionDuration = "0ms")
        },
        onHide: function() {
          o && x([o], "hidden")
        }
      }
    }
  };
  var z = {
    name: "followCursor",
    defaultValue: !1,
    fn: function(t) {
      var e = t.reference,
        n = w(t.props.triggerTarget || e),
        i = null;

      function r() {
        return "manual" === t.props.trigger.trim()
      }

      function o() {
        var e = !!r() || null !== i && !(0 === i.clientX && 0 === i.clientY);
        return t.props.followCursor && e
      }

      function a(e) {
        e && t.setProps({
          getReferenceClientRect: null
        })
      }

      function s() {
        o() ? n.addEventListener("mousemove", u) : a(t.props.followCursor)
      }

      function p() {
        n.removeEventListener("mousemove", u)
      }

      function u(n) {
        i = {
          clientX: n.clientX,
          clientY: n.clientY
        };
        var r = !n.target || e.contains(n.target),
          o = t.props.followCursor,
          a = n.clientX,
          s = n.clientY,
          u = e.getBoundingClientRect(),
          c = a - u.left,
          f = s - u.top;
        !r && t.props.interactive || t.setProps({
          getReferenceClientRect: function() {
            var t = e.getBoundingClientRect(),
              n = a,
              i = s;
            "initial" === o && (n = t.left + c, i = t.top + f);
            var r = "horizontal" === o ? t.top : i,
              p = "vertical" === o ? t.right : n,
              u = "horizontal" === o ? t.bottom : i,
              l = "vertical" === o ? t.left : n;
            return {
              width: p - l,
              height: u - r,
              top: r,
              right: p,
              bottom: u,
              left: l
            }
          }
        }), (T.isTouch || "initial" === t.props.followCursor && t.state.isVisible) && p()
      }
      return {
        onAfterUpdate: function(t, e) {
          var n = e.followCursor;
          void 0 === n || n || a(!0)
        },
        onMount: function() {
          o() && u(i)
        },
        onShow: function() {
          r() && (i = {
            clientX: 0,
            clientY: 0
          }, s())
        },
        onTrigger: function(t, e) {
          i || (g(e) && (i = {
            clientX: e.clientX,
            clientY: e.clientY
          }), s())
        },
        onUntrigger: function() {
          t.state.isVisible || (p(), i = null)
        },
        onHidden: function() {
          p(), i = null
        }
      }
    }
  };
  var F = {
    name: "inlinePositioning",
    defaultValue: !1,
    fn: function(t) {
      var e, n = t.reference;
      var i = -1,
        r = !1,
        o = {
          name: "tippyInlinePositioning",
          enabled: !0,
          phase: "afterWrite",
          fn: function(r) {
            var o = r.state;
            t.props.inlinePositioning && (e !== o.placement && t.setProps({
              getReferenceClientRect: function() {
                return function(t) {
                  return function(t, e, n, i) {
                    if (n.length < 2 || null === t) return e;
                    if (2 === n.length && i >= 0 && n[0].left > n[1].right) return n[i] || e;
                    switch (t) {
                      case "top":
                      case "bottom":
                        var r = n[0],
                          o = n[n.length - 1],
                          a = "top" === t,
                          s = r.top,
                          p = o.bottom,
                          u = a ? r.left : o.left,
                          c = a ? r.right : o.right;
                        return {
                          top: s, bottom: p, left: u, right: c, width: c - u, height: p - s
                        };
                      case "left":
                      case "right":
                        var f = Math.min.apply(Math, n.map((function(t) {
                            return t.left
                          }))),
                          l = Math.max.apply(Math, n.map((function(t) {
                            return t.right
                          }))),
                          d = n.filter((function(e) {
                            return "left" === t ? e.left === f : e.right === l
                          })),
                          v = d[0].top,
                          m = d[d.length - 1].bottom;
                        return {
                          top: v, bottom: m, left: f, right: l, width: l - f, height: m - v
                        };
                      default:
                        return e
                    }
                  }(l(t), n.getBoundingClientRect(), d(n.getClientRects()), i)
                }(o.placement)
              }
            }), e = o.placement)
          }
        };

      function a() {
        var e;
        r || (e = function(t, e) {
          var n;
          return {
            popperOptions: Object.assign({}, t.popperOptions, {
              modifiers: [].concat(((null == (n = t.popperOptions) ? void 0 : n.modifiers) || []).filter((function(t) {
                return t.name !== e.name
              })), [e])
            })
          }
        }(t.props, o), r = !0, t.setProps(e), r = !1)
      }
      return {
        onCreate: a,
        onAfterUpdate: a,
        onTrigger: function(e, n) {
          if (g(n)) {
            var r = d(t.reference.getClientRects()),
              o = r.find((function(t) {
                return t.left - 2 <= n.clientX && t.right + 2 >= n.clientX && t.top - 2 <= n.clientY && t.bottom + 2 >= n.clientY
              }));
            i = r.indexOf(o)
          }
        },
        onUntrigger: function() {
          i = -1
        }
      }
    }
  };
  var W = {
    name: "sticky",
    defaultValue: !1,
    fn: function(t) {
      var e = t.reference,
        n = t.popper;

      function i(e) {
        return !0 === t.props.sticky || t.props.sticky === e
      }
      var r = null,
        o = null;

      function a() {
        var s = i("reference") ? (t.popperInstance ? t.popperInstance.state.elements.reference : e).getBoundingClientRect() : null,
          p = i("popper") ? n.getBoundingClientRect() : null;
        (s && q(r, s) || p && q(o, p)) && t.popperInstance && t.popperInstance.update(), r = s, o = p, t.state.isMounted && requestAnimationFrame(a)
      }
      return {
        onMount: function() {
          t.props.sticky && a()
        }
      }
    }
  };

  function q(t, e) {
    return !t || !e || (t.top !== e.top || t.right !== e.right || t.bottom !== e.bottom || t.left !== e.left)
  }
  return e && function(t) {
    var e = document.createElement("style");
    e.textContent = t, e.setAttribute("data-tippy-stylesheet", "");
    var n = document.head,
      i = document.querySelector("head>style,head>link");
    i ? n.insertBefore(e, i) : n.appendChild(e)
  }('.tippy-box[data-animation=fade][data-state=hidden]{opacity:0}[data-tippy-root]{max-width:calc(100vw - 10px)}.tippy-box{position:relative;background-color:#333;color:#fff;border-radius:4px;font-size:14px;line-height:1.4;outline:0;transition-property:transform,visibility,opacity}.tippy-box[data-placement^=top]>.tippy-arrow{bottom:0}.tippy-box[data-placement^=top]>.tippy-arrow:before{bottom:-7px;left:0;border-width:8px 8px 0;border-top-color:initial;transform-origin:center top}.tippy-box[data-placement^=bottom]>.tippy-arrow{top:0}.tippy-box[data-placement^=bottom]>.tippy-arrow:before{top:-7px;left:0;border-width:0 8px 8px;border-bottom-color:initial;transform-origin:center bottom}.tippy-box[data-placement^=left]>.tippy-arrow{right:0}.tippy-box[data-placement^=left]>.tippy-arrow:before{border-width:8px 0 8px 8px;border-left-color:initial;right:-7px;transform-origin:center left}.tippy-box[data-placement^=right]>.tippy-arrow{left:0}.tippy-box[data-placement^=right]>.tippy-arrow:before{left:-7px;border-width:8px 8px 8px 0;border-right-color:initial;transform-origin:center right}.tippy-box[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.54,1.5,.38,1.11)}.tippy-arrow{width:16px;height:16px;color:#333}.tippy-arrow:before{content:"";position:absolute;border-color:transparent;border-style:solid}.tippy-content{position:relative;padding:5px 9px;z-index:1}'), X.setDefaultProps({
    plugins: [_, z, F, W],
    render: S
  }), X.createSingleton = function(t, e) {
    void 0 === e && (e = {});
    var n, i = t,
      r = [],
      o = e.overrides;

    function a() {
      r = i.map((function(t) {
        return t.reference
      }))
    }

    function s(t) {
      i.forEach((function(e) {
        t ? e.enable() : e.disable()
      }))
    }
    s(!1), a();
    var p = {
        fn: function() {
          return {
            onDestroy: function() {
              s(!0)
            },
            onTrigger: function(t, e) {
              var a = e.currentTarget,
                s = r.indexOf(a);
              if (a !== n) {
                n = a;
                var p = (o || []).concat("content").reduce((function(t, e) {
                  return t[e] = i[s].props[e], t
                }), {});
                t.setProps(Object.assign({}, p, {
                  getReferenceClientRect: function() {
                    return a.getBoundingClientRect()
                  }
                }))
              }
            }
          }
        }
      },
      c = X(v(), Object.assign({}, u(e, ["overrides"]), {
        plugins: [p].concat(e.plugins || []),
        triggerTarget: r
      })),
      f = c.setProps;
    return c.setProps = function(t) {
      o = t.overrides || o, f(t)
    }, c.setInstances = function(t) {
      s(!0), i = t, s(!1), a(), c.setProps({
        triggerTarget: r
      })
    }, c
  }, X.delegate = function(t, e) {
    var n = [],
      i = [],
      r = e.target,
      o = u(e, ["target"]),
      a = Object.assign({}, o, {
        trigger: "manual",
        touch: !1
      }),
      s = Object.assign({}, o, {
        showOnCreate: !0
      }),
      p = X(t, a);

    function f(t) {
      if (t.target) {
        var n = t.target.closest(r);
        if (n) {
          var o = n.getAttribute("data-tippy-trigger") || e.trigger || D.trigger;
          if (!n._tippy && !("touchstart" === t.type && "boolean" == typeof s.touch || "touchstart" !== t.type && o.indexOf(Y[t.type]))) {
            var a = X(n, s);
            a && (i = i.concat(a))
          }
        }
      }
    }

    function l(t, e, i, r) {
      void 0 === r && (r = !1), t.addEventListener(e, i, r), n.push({
        node: t,
        eventType: e,
        handler: i,
        options: r
      })
    }
    return c(p).forEach((function(t) {
      var e = t.destroy;
      t.destroy = function(t) {
          void 0 === t && (t = !0), t && i.forEach((function(t) {
            t.destroy()
          })), i = [], n.forEach((function(t) {
            var e = t.node,
              n = t.eventType,
              i = t.handler,
              r = t.options;
            e.removeEventListener(n, i, r)
          })), n = [], e()
        },
        function(t) {
          var e = t.reference;
          l(e, "touchstart", f), l(e, "mouseover", f), l(e, "focusin", f), l(e, "click", f)
        }(t)
    })), p
  }, X.hideAll = function(t) {
    var e = void 0 === t ? {} : t,
      n = e.exclude,
      i = e.duration;
    U.forEach((function(t) {
      var e = !1;
      if (n && (e = h(n) ? t.reference === n : t.popper === n.popper), !e) {
        var r = t.props.duration;
        t.setProps({
          duration: i
        }), t.hide(), t.state.isDestroyed || t.setProps({
          duration: r
        })
      }
    }))
  }, X.roundArrow = '<svg width="16" height="6" xmlns="../../external.html?link=http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>', X
}));

/*!
 * CustomEase 3.2.6
 * https://greensock.com
 *
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

! function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {})
}(this, function(e) {
  "use strict";

  function m(e) {
    return Math.round(1e5 * e) / 1e5 || 0
  }
  var b = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
    w = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
    Y = Math.PI / 180,
    k = Math.sin,
    B = Math.cos,
    F = Math.abs,
    J = Math.sqrt;

  function arcToSegment(e, t, n, s, a, r, i, o, h) {
    if (e !== o || t !== h) {
      n = F(n), s = F(s);
      var u = a % 360 * Y,
        f = B(u),
        c = k(u),
        l = Math.PI,
        g = 2 * l,
        d = (e - o) / 2,
        m = (t - h) / 2,
        x = f * d + c * m,
        p = -c * d + f * m,
        y = x * x,
        M = p * p,
        v = y / (n * n) + M / (s * s);
      1 < v && (n = J(v) * n, s = J(v) * s);
      var C = n * n,
        E = s * s,
        b = (C * E - C * M - E * y) / (C * M + E * y);
      b < 0 && (b = 0);
      var w = (r === i ? -1 : 1) * J(b),
        P = n * p / s * w,
        S = -s * x / n * w,
        N = f * P - c * S + (e + o) / 2,
        D = c * P + f * S + (t + h) / 2,
        T = (x - P) / n,
        V = (p - S) / s,
        _ = (-x - P) / n,
        q = (-p - S) / s,
        A = T * T + V * V,
        R = (V < 0 ? -1 : 1) * Math.acos(T / J(A)),
        G = (T * q - V * _ < 0 ? -1 : 1) * Math.acos((T * _ + V * q) / J(A * (_ * _ + q * q)));
      isNaN(G) && (G = l), !i && 0 < G ? G -= g : i && G < 0 && (G += g), R %= g, G %= g;
      var L, O = Math.ceil(F(G) / (g / 4)),
        j = [],
        z = G / O,
        I = 4 / 3 * k(z / 2) / (1 + B(z / 2)),
        H = f * n,
        Q = c * n,
        Z = c * -s,
        U = f * s;
      for (L = 0; L < O; L++) x = B(a = R + L * z), p = k(a), T = B(a += z), V = k(a), j.push(x - I * p, p + I * x, T + I * V, V - I * T, T, V);
      for (L = 0; L < j.length; L += 2) x = j[L], p = j[L + 1], j[L] = x * H + p * Z + N, j[L + 1] = x * Q + p * U + D;
      return j[L - 2] = o, j[L - 1] = h, j
    }
  }

  function stringToRawPath(e) {
    function db(e, t, n, s) {
      f = (n - e) / 3, c = (s - t) / 3, o.push(e + f, t + c, n - f, s - c, n, s)
    }
    var t, n, s, a, r, i, o, h, u, f, c, l, g, d, m, x = (e + "").replace(w, function(e) {
        var t = +e;
        return t < 1e-4 && -1e-4 < t ? 0 : t
      }).match(b) || [],
      p = [],
      y = 0,
      M = 0,
      v = x.length,
      C = 0,
      E = "ERROR: malformed path: " + e;
    if (!e || !isNaN(x[0]) || isNaN(x[1])) return console.log(E), p;
    for (t = 0; t < v; t++)
      if (g = r, isNaN(x[t]) ? i = (r = x[t].toUpperCase()) !== x[t] : t--, s = +x[t + 1], a = +x[t + 2], i && (s += y, a += M), t || (h = s, u = a), "M" === r) o && (o.length < 8 ? --p.length : C += o.length), y = h = s, M = u = a, o = [s, a], p.push(o), t += 2, r = "L";
      else if ("C" === r) i || (y = M = 0), (o = o || [0, 0]).push(s, a, y + 1 * x[t + 3], M + 1 * x[t + 4], y += 1 * x[t + 5], M += 1 * x[t + 6]), t += 6;
    else if ("S" === r) f = y, c = M, "C" !== g && "S" !== g || (f += y - o[o.length - 4], c += M - o[o.length - 3]), i || (y = M = 0), o.push(f, c, s, a, y += 1 * x[t + 3], M += 1 * x[t + 4]), t += 4;
    else if ("Q" === r) f = y + 2 / 3 * (s - y), c = M + 2 / 3 * (a - M), i || (y = M = 0), y += 1 * x[t + 3], M += 1 * x[t + 4], o.push(f, c, y + 2 / 3 * (s - y), M + 2 / 3 * (a - M), y, M), t += 4;
    else if ("T" === r) f = y - o[o.length - 4], c = M - o[o.length - 3], o.push(y + f, M + c, s + 2 / 3 * (y + 1.5 * f - s), a + 2 / 3 * (M + 1.5 * c - a), y = s, M = a), t += 2;
    else if ("H" === r) db(y, M, y = s, M), t += 1;
    else if ("V" === r) db(y, M, y, M = s + (i ? M - y : 0)), t += 1;
    else if ("L" === r || "Z" === r) "Z" === r && (s = h, a = u, o.closed = !0), ("L" === r || .5 < F(y - s) || .5 < F(M - a)) && (db(y, M, s, a), "L" === r && (t += 2)), y = s, M = a;
    else if ("A" === r) {
      if (d = x[t + 4], m = x[t + 5], f = x[t + 6], c = x[t + 7], n = 7, 1 < d.length && (d.length < 3 ? (c = f, f = m, n--) : (c = m, f = d.substr(2), n -= 2), m = d.charAt(1), d = d.charAt(0)), l = arcToSegment(y, M, +x[t + 1], +x[t + 2], +x[t + 3], +d, +m, (i ? y : 0) + 1 * f, (i ? M : 0) + 1 * c), t += n, l)
        for (n = 0; n < l.length; n++) o.push(l[n]);
      y = o[o.length - 2], M = o[o.length - 1]
    } else console.log(E);
    return (t = o.length) < 6 ? (p.pop(), t = 0) : o[0] === o[t - 2] && o[1] === o[t - 1] && (o.closed = !0), p.totalPoints = C + t, p
  }

  function p() {
    return M || "undefined" != typeof window && (M = window.gsap) && M.registerPlugin && M
  }

  function q() {
    (M = p()) ? (M.registerEase("_CE", n.create), a = 1) : console.warn("Please gsap.registerPlugin(CustomEase)")
  }

  function s(e) {
    return ~~(1e3 * e + (e < 0 ? -.5 : .5)) / 1e3
  }

  function x(e, t, n, s, a, r, i, o, h, u, f) {
    var c, l = (e + n) / 2,
      g = (t + s) / 2,
      d = (n + a) / 2,
      m = (s + r) / 2,
      p = (a + i) / 2,
      y = (r + o) / 2,
      M = (l + d) / 2,
      v = (g + m) / 2,
      C = (d + p) / 2,
      E = (m + y) / 2,
      b = (M + C) / 2,
      w = (v + E) / 2,
      P = i - e,
      S = o - t,
      N = Math.abs((n - i) * S - (s - o) * P),
      D = Math.abs((a - i) * S - (r - o) * P);
    return u || (u = [{
      x: e,
      y: t
    }, {
      x: i,
      y: o
    }], f = 1), u.splice(f || u.length - 1, 0, {
      x: b,
      y: w
    }), h * (P * P + S * S) < (N + D) * (N + D) && (c = u.length, x(e, t, l, g, M, v, b, w, h, u, f), x(b, w, C, E, p, y, i, o, h, u, f + 1 + (u.length - c))), u
  }
  var M, a, t, y = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
    v = /[cLlsSaAhHvVtTqQ]/g,
    n = ((t = CustomEase.prototype).setData = function setData(e, t) {
      t = t || {};
      var n, s, a, r, i, o, h, u, f, c = (e = e || "0,0,1,1").match(y),
        l = 1,
        g = [],
        d = [],
        m = t.precision || 1,
        p = m <= 1;
      if (this.data = e, (v.test(e) || ~e.indexOf("M") && e.indexOf("C") < 0) && (c = stringToRawPath(e)[0]), 4 === (n = c.length)) c.unshift(0, 0), c.push(1, 1), n = 8;
      else if ((n - 2) % 6) throw "Invalid CustomEase";
      for (0 == +c[0] && 1 == +c[n - 2] || function _normalize(e, t, n) {
          n || 0 === n || (n = Math.max(+e[e.length - 1], +e[1]));
          var s, a = -1 * e[0],
            r = -n,
            i = e.length,
            o = 1 / (+e[i - 2] + a),
            h = -t || (Math.abs(e[i - 1] - e[1]) < .01 * (e[i - 2] - e[0]) ? function _findMinimum(e) {
              var t, n = e.length,
                s = 1e20;
              for (t = 1; t < n; t += 6) + e[t] < s && (s = +e[t]);
              return s
            }(e) + r : +e[i - 1] + r);
          for (h = h ? 1 / h : -o, s = 0; s < i; s += 2) e[s] = (+e[s] + a) * o, e[s + 1] = (+e[s + 1] + r) * h
        }(c, t.height, t.originY), this.segment = c, r = 2; r < n; r += 6) s = {
        x: +c[r - 2],
        y: +c[r - 1]
      }, a = {
        x: +c[r + 4],
        y: +c[r + 5]
      }, g.push(s, a), x(s.x, s.y, +c[r], +c[r + 1], +c[r + 2], +c[r + 3], a.x, a.y, 1 / (2e5 * m), g, g.length - 1);
      for (n = g.length, r = 0; r < n; r++) h = g[r], u = g[r - 1] || h, h.x > u.x || u.y !== h.y && u.x === h.x || h === u ? (u.cx = h.x - u.x, u.cy = h.y - u.y, u.n = h, u.nx = h.x, p && 1 < r && 2 < Math.abs(u.cy / u.cx - g[r - 2].cy / g[r - 2].cx) && (p = 0), u.cx < l && (u.cx ? l = u.cx : (u.cx = .001, r === n - 1 && (u.x -= .001, l = Math.min(l, .001), p = 0)))) : (g.splice(r--, 1), n--);
      if (i = 1 / (n = 1 / l + 1 | 0), h = g[o = 0], p) {
        for (r = 0; r < n; r++) f = r * i, h.nx < f && (h = g[++o]), s = h.y + (f - h.x) / h.cx * h.cy, d[r] = {
          x: f,
          cx: i,
          y: s,
          cy: 0,
          nx: 9
        }, r && (d[r - 1].cy = s - d[r - 1].y);
        d[n - 1].cy = g[g.length - 1].y - s
      } else {
        for (r = 0; r < n; r++) h.nx < r * i && (h = g[++o]), d[r] = h;
        o < g.length - 1 && (d[r - 1] = g[g.length - 2])
      }
      return this.ease = function(e) {
        var t = d[e * n | 0] || d[n - 1];
        return t.nx < e && (t = t.n), t.y + (e - t.x) / t.cx * t.cy
      }, (this.ease.custom = this).id && M.registerEase(this.id, this.ease), this
    }, t.getSVGData = function getSVGData(e) {
      return CustomEase.getSVGData(this, e)
    }, CustomEase.create = function create(e, t, n) {
      return new CustomEase(e, t, n).ease
    }, CustomEase.register = function register(e) {
      M = e, q()
    }, CustomEase.get = function get(e) {
      return M.parseEase(e)
    }, CustomEase.getSVGData = function getSVGData(e, t) {
      var n, a, r, i, o, h, u, f, c, l, g = (t = t || {}).width || 100,
        d = t.height || 100,
        x = t.x || 0,
        p = (t.y || 0) + d,
        y = M.utils.toArray(t.path)[0];
      if (t.invert && (d = -d, p = 0), "string" == typeof e && (e = M.parseEase(e)), e.custom && (e = e.custom), e instanceof CustomEase) n = function rawPathToString(e) {
        ! function _isNumber(e) {
          return "number" == typeof e
        }(e[0]) || (e = [e]);
        var t, n, s, a, r = "",
          i = e.length;
        for (n = 0; n < i; n++) {
          for (a = e[n], r += "M" + m(a[0]) + "," + m(a[1]) + " C", t = a.length, s = 2; s < t; s++) r += m(a[s++]) + "," + m(a[s++]) + " " + m(a[s++]) + "," + m(a[s++]) + " " + m(a[s++]) + "," + m(a[s]) + " ";
          a.closed && (r += "z")
        }
        return r
      }(function transformRawPath(e, t, n, s, a, r, i) {
        for (var o, h, u, f, c, l = e.length; - 1 < --l;)
          for (h = (o = e[l]).length, u = 0; u < h; u += 2) f = o[u], c = o[u + 1], o[u] = f * t + c * s + r, o[u + 1] = f * n + c * a + i;
        return e._dirty = 1, e
      }([e.segment], g, 0, 0, -d, x, p));
      else {
        for (n = [x, p], i = 1 / (u = Math.max(5, 200 * (t.precision || 1))), f = 5 / (u += 2), c = s(x + i * g), a = ((l = s(p + e(i) * -d)) - p) / (c - x), r = 2; r < u; r++) o = s(x + r * i * g), h = s(p + e(r * i) * -d), (Math.abs((h - l) / (o - c) - a) > f || r === u - 1) && (n.push(c, l), a = (h - l) / (o - c)), c = o, l = h;
        n = "M" + n.join(",")
      }
      return y && y.setAttribute("d", n), n
    }, CustomEase);

  function CustomEase(e, t, n) {
    a || q(), this.id = e, this.setData(t, n)
  }
  p() && M.registerPlugin(n), n.version = "3.2.6", e.CustomEase = n, e.default = n;
  if (typeof(window) === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    })
  } else {
    delete e.default
  }
});


/*!
 * GSAP 3.3.4
 * https://greensock.com
 *
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

! function(t, e) {
  "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, function(e) {
  "use strict";

  function _inheritsLoose(t, e) {
    t.prototype = Object.create(e.prototype), (t.prototype.constructor = t).__proto__ = e
  }

  function _assertThisInitialized(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t
  }

  function n(t) {
    return "string" == typeof t
  }

  function o(t) {
    return "function" == typeof t
  }

  function p(t) {
    return "number" == typeof t
  }

  function q(t) {
    return void 0 === t
  }

  function r(t) {
    return "object" == typeof t
  }

  function s(t) {
    return !1 !== t
  }

  function t() {
    return "undefined" != typeof window
  }

  function u(t) {
    return o(t) || n(t)
  }

  function K(t) {
    return (l = pt(t, at)) && ie
  }

  function L(t, e) {
    return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
  }

  function M(t, e) {
    return !e && console.warn(t)
  }

  function N(t, e) {
    return t && (at[t] = e) && l && (l[t] = e) || at
  }

  function O() {
    return 0
  }

  function Y(t) {
    var e, i, n = t[0];
    if (r(n) || o(n) || (t = [t]), !(e = (n._gsap || {}).harness)) {
      for (i = dt.length; i-- && !dt[i].targetTest(n););
      e = dt[i]
    }
    for (i = t.length; i--;) t[i] && (t[i]._gsap || (t[i]._gsap = new Ft(t[i], e))) || t.splice(i, 1);
    return t
  }

  function Z(t) {
    return t._gsap || Y(yt(t))[0]._gsap
  }

  function $(t, e) {
    var r = t[e];
    return o(r) ? t[e]() : q(r) && t.getAttribute(e) || r
  }

  function _(t, e) {
    return (t = t.split(",")).forEach(e) || t
  }

  function aa(t) {
    return Math.round(1e5 * t) / 1e5 || 0
  }

  function ba(t, e) {
    for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r;);
    return i < r
  }

  function ca(t, e, r) {
    var i, n = p(t[1]),
      a = (n ? 2 : 1) + (e < 2 ? 0 : 1),
      o = t[a];
    if (n && (o.duration = t[1]), o.parent = r, e) {
      for (i = o; r && !("immediateRender" in i);) i = r.vars.defaults || {}, r = s(r.vars.inherit) && r.parent;
      o.immediateRender = s(i.immediateRender), e < 2 ? o.runBackwards = 1 : o.startAt = t[a - 1]
    }
    return o
  }

  function da() {
    var t, e, r = ot.length,
      i = ot.slice(0);
    for (ut = {}, t = ot.length = 0; t < r; t++)(e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
  }

  function ea(t, e, r, i) {
    ot.length && da(), t.render(e, r, i), ot.length && da()
  }

  function fa(t) {
    var e = parseFloat(t);
    return (e || 0 === e) && (t + "").match(nt).length < 2 ? e : t
  }

  function ga(t) {
    return t
  }

  function ha(t, e) {
    for (var r in e) r in t || (t[r] = e[r]);
    return t
  }

  function ia(t, e) {
    for (var r in e) r in t || "duration" === r || "ease" === r || (t[r] = e[r])
  }

  function ka(t, e) {
    for (var i in e) t[i] = r(e[i]) ? ka(t[i] || (t[i] = {}), e[i]) : e[i];
    return t
  }

  function la(t, e) {
    var r, i = {};
    for (r in t) r in e || (i[r] = t[r]);
    return i
  }

  function ma(t) {
    var e = t.parent || F,
      r = t.keyframes ? ia : ha;
    if (s(t.inherit))
      for (; e;) r(t, e.vars.defaults), e = e.parent || e._dp;
    return t
  }

  function pa(t, e, r, i) {
    void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
    var n = e._prev,
      a = e._next;
    n ? n._next = a : t[r] === e && (t[r] = a), a ? a._prev = n : t[i] === e && (t[i] = n), e._next = e._prev = e.parent = null
  }

  function qa(t, e) {
    !t.parent || e && !t.parent.autoRemoveChildren || t.parent.remove(t), t._act = 0
  }

  function ra(t) {
    for (var e = t; e;) e._dirty = 1, e = e.parent;
    return t
  }

  function ua(t) {
    return t._repeat ? _t(t._tTime, t = t.duration() + t._rDelay) * t : 0
  }

  function wa(t, e) {
    return (t - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur)
  }

  function xa(t) {
    return t._end = aa(t._start + (t._tDur / Math.abs(t._ts || t._rts || B) || 0))
  }

  function ya(t, e) {
    var r;
    if ((e._time || e._initted && !e._dur) && (r = wa(t.rawTime(), e), (!e._dur || gt(0, e.totalDuration(), r) - e._tTime > B) && e.render(r, !0)), ra(t)._dp && t._initted && t._time >= t._dur && t._ts) {
      if (t._dur < t.duration())
        for (r = t; r._dp;) 0 <= r.rawTime() && r.totalTime(r._tTime), r = r._dp;
      t._zTime = -B
    }
  }

  function za(t, e, r, i) {
    return e.parent && qa(e), e._start = aa(r + e._delay), e._end = aa(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
      function _addLinkedListItem(t, e, r, i, n) {
        void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
        var a, s = t[i];
        if (n)
          for (a = e[n]; s && s[n] > a;) s = s._prev;
        s ? (e._next = s._next, s._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = s, e.parent = e._dp = t
      }(t, e, "_first", "_last", t._sort ? "_start" : 0), t._recent = e, i || ya(t, e), t
  }

  function Aa(t, e) {
    return (at.ScrollTrigger || L("scrollTrigger", e)) && at.ScrollTrigger.create(e, t)
  }

  function Ba(t, e, r, i) {
    return qt(t, e), t._initted ? !r && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && d !== Mt.frame ? (ot.push(t), t._lazy = [e, i], 1) : void 0 : 1
  }

  function Ea(t, e, r) {
    var i = t._repeat,
      n = aa(e) || 0;
    return t._dur = n, t._tDur = i ? i < 0 ? 1e10 : aa(n * (i + 1) + t._rDelay * i) : n, t._time > n && (t._time = n, t._tTime = Math.min(t._tTime, t._tDur)), r || ra(t.parent), t.parent && xa(t), t
  }

  function Fa(t) {
    return t instanceof Bt ? ra(t) : Ea(t, t._dur)
  }

  function Ha(t, e) {
    var r, i, a = t.labels,
      s = t._recent || mt,
      o = t.duration() >= E ? s.endTime(!1) : t._dur;
    return n(e) && (isNaN(e) || e in a) ? "<" === (r = e.charAt(0)) || ">" === r ? ("<" === r ? s._start : s.endTime(0 <= s._repeat)) + (parseFloat(e.substr(1)) || 0) : (r = e.indexOf("=")) < 0 ? (e in a || (a[e] = o), a[e]) : (i = +(e.charAt(r - 1) + e.substr(r + 1)), 1 < r ? Ha(t, e.substr(0, r - 1)) + i : o + i) : null == e ? o : +e
  }

  function Ia(t, e) {
    return t || 0 === t ? e(t) : e
  }

  function Ka(t) {
    return (t + "").substr((parseFloat(t) + "").length)
  }

  function Na(t, e) {
    return t && r(t) && "length" in t && (!e && !t.length || t.length - 1 in t && r(t[0])) && !t.nodeType && t !== i
  }

  function Qa(t) {
    return t.sort(function() {
      return .5 - Math.random()
    })
  }

  function Ra(t) {
    if (o(t)) return t;
    var p = r(t) ? t : {
        each: t
      },
      _ = zt(p.ease),
      m = p.from || 0,
      g = parseFloat(p.base) || 0,
      v = {},
      e = 0 < m && m < 1,
      y = isNaN(m) || e,
      T = p.axis,
      b = m,
      w = m;
    return n(m) ? b = w = {
        center: .5,
        edges: .5,
        end: 1
      } [m] || 0 : !e && y && (b = m[0], w = m[1]),
      function(t, e, r) {
        var i, n, a, s, o, u, h, l, f, d = (r || p).length,
          c = v[d];
        if (!c) {
          if (!(f = "auto" === p.grid ? 0 : (p.grid || [1, E])[1])) {
            for (h = -E; h < (h = r[f++].getBoundingClientRect().left) && f < d;);
            f--
          }
          for (c = v[d] = [], i = y ? Math.min(f, d) * b - .5 : m % f, n = y ? d * w / f - .5 : m / f | 0, l = E, u = h = 0; u < d; u++) a = u % f - i, s = n - (u / f | 0), c[u] = o = T ? Math.abs("y" === T ? s : a) : V(a * a + s * s), h < o && (h = o), o < l && (l = o);
          "random" === m && Qa(c), c.max = h - l, c.min = l, c.v = d = (parseFloat(p.amount) || parseFloat(p.each) * (d < f ? d - 1 : T ? "y" === T ? d / f : f : Math.max(f, d / f)) || 0) * ("edges" === m ? -1 : 1), c.b = d < 0 ? g - d : g, c.u = Ka(p.amount || p.each) || 0, _ = _ && d < 0 ? At(_) : _
        }
        return d = (c[t] - c.min) / c.max || 0, aa(c.b + (_ ? _(d) : d) * c.v) + c.u
      }
  }

  function Sa(e) {
    var r = e < 1 ? Math.pow(10, (e + "").length - 2) : 1;
    return function(t) {
      return Math.floor(Math.round(parseFloat(t) / e) * e * r) / r + (p(t) ? 0 : Ka(t))
    }
  }

  function Ta(u, t) {
    var h, l, e = W(u);
    return !e && r(u) && (h = e = u.radius || E, u.values ? (u = yt(u.values), (l = !p(u[0])) && (h *= h)) : u = Sa(u.increment)), Ia(t, e ? o(u) ? function(t) {
      return l = u(t), Math.abs(l - t) <= h ? l : t
    } : function(t) {
      for (var e, r, i = parseFloat(l ? t.x : t), n = parseFloat(l ? t.y : 0), a = E, s = 0, o = u.length; o--;)(e = l ? (e = u[o].x - i) * e + (r = u[o].y - n) * r : Math.abs(u[o] - i)) < a && (a = e, s = o);
      return s = !h || a <= h ? u[s] : t, l || s === t || p(t) ? s : s + Ka(t)
    } : Sa(u))
  }

  function Ua(t, e, r, i) {
    return Ia(W(t) ? !e : !0 === r ? !!(r = 0) : !i, function() {
      return W(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t + Math.random() * (e - t)) / r) * r * i) / i
    })
  }

  function Ya(e, r, t) {
    return Ia(t, function(t) {
      return e[~~r(t)]
    })
  }

  function _a(t) {
    for (var e, r, i, n, a = 0, s = ""; ~(e = t.indexOf("random(", a));) i = t.indexOf(")", e), n = "[" === t.charAt(e + 7), r = t.substr(e + 7, i - e - 7).match(n ? nt : G), s += t.substr(a, e - a) + Ua(n ? r : +r[0], +r[1], +r[2] || 1e-5), a = i + 1;
    return s + t.substr(a, t.length - a)
  }

  function cb(t, e, r) {
    var i, n, a, s = t.labels,
      o = E;
    for (i in s)(n = s[i] - e) < 0 == !!r && n && o > (n = Math.abs(n)) && (a = i, o = n);
    return a
  }

  function eb(t) {
    return qa(t), t.progress() < 1 && bt(t, "onInterrupt"), t
  }

  function jb(t, e, r) {
    return (6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * wt + .5 | 0
  }

  function kb(t, e, r) {
    var i, n, a, s, o, u, h, l, f, d, c = t ? p(t) ? [t >> 16, t >> 8 & wt, t & wt] : 0 : xt.black;
    if (!c) {
      if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), xt[t]) c = xt[t];
      else if ("#" === t.charAt(0)) 4 === t.length && (t = "#" + (i = t.charAt(1)) + i + (n = t.charAt(2)) + n + (a = t.charAt(3)) + a), c = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & wt, t & wt];
      else if ("hsl" === t.substr(0, 3))
        if (c = d = t.match(G), e) {
          if (~t.indexOf("=")) return c = t.match(J), r && c.length < 4 && (c[3] = 1), c
        } else s = +c[0] % 360 / 360, o = c[1] / 100, i = 2 * (u = c[2] / 100) - (n = u <= .5 ? u * (o + 1) : u + o - u * o), 3 < c.length && (c[3] *= 1), c[0] = jb(s + 1 / 3, i, n), c[1] = jb(s, i, n), c[2] = jb(s - 1 / 3, i, n);
      else c = t.match(G) || xt.transparent;
      c = c.map(Number)
    }
    return e && !d && (i = c[0] / wt, n = c[1] / wt, a = c[2] / wt, u = ((h = Math.max(i, n, a)) + (l = Math.min(i, n, a))) / 2, h === l ? s = o = 0 : (f = h - l, o = .5 < u ? f / (2 - h - l) : f / (h + l), s = h === i ? (n - a) / f + (n < a ? 6 : 0) : h === n ? (a - i) / f + 2 : (i - n) / f + 4, s *= 60), c[0] = ~~(s + .5), c[1] = ~~(100 * o + .5), c[2] = ~~(100 * u + .5)), r && c.length < 4 && (c[3] = 1), c
  }

  function lb(t) {
    var r = [],
      i = [],
      n = -1;
    return t.split(kt).forEach(function(t) {
      var e = t.match(tt) || [];
      r.push.apply(r, e), i.push(n += e.length + 1)
    }), r.c = i, r
  }

  function mb(t, e, r) {
    var i, n, a, s, o = "",
      u = (t + o).match(kt),
      h = e ? "hsla(" : "rgba(",
      l = 0;
    if (!u) return t;
    if (u = u.map(function(t) {
        return (t = kb(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
      }), r && (a = lb(t), (i = r.c).join(o) !== a.c.join(o)))
      for (s = (n = t.replace(kt, "1").split(tt)).length - 1; l < s; l++) o += n[l] + (~i.indexOf(l) ? u.shift() || h + "0,0,0,0)" : (a.length ? a : u.length ? u : r).shift());
    if (!n)
      for (s = (n = t.split(kt)).length - 1; l < s; l++) o += n[l] + u[l];
    return o + n[s]
  }

  function pb(t) {
    var e, r = t.join(" ");
    if (kt.lastIndex = 0, kt.test(r)) return e = Ot.test(r), t[1] = mb(t[1], e), t[0] = mb(t[0], e, lb(t[1])), !0
  }

  function xb(t) {
    var e = (t + "").split("("),
      r = Ct[e[0]];
    return r && 1 < e.length && r.config ? r.config.apply(null, ~t.indexOf("{") ? [function _parseObjectInString(t) {
      for (var e, r, i, n = {}, a = t.substr(1, t.length - 3).split(":"), s = a[0], o = 1, u = a.length; o < u; o++) r = a[o], e = o !== u - 1 ? r.lastIndexOf(",") : r.length, i = r.substr(0, e), n[s] = isNaN(i) ? i.replace(Dt, "").trim() : +i, s = r.substr(e + 1).trim();
      return n
    }(e[1])] : rt.exec(t)[1].split(",").map(fa)) : Ct._CE && St.test(t) ? Ct._CE("", t) : r
  }

  function zb(t, e) {
    for (var r, i = t._first; i;) i instanceof Bt ? zb(i, e) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === e || (i.timeline ? zb(i.timeline, e) : (r = i._ease, i._ease = i._yEase, i._yEase = r, i._yoyo = e)), i = i._next
  }

  function Bb(t, e, r, i) {
    void 0 === r && (r = function easeOut(t) {
      return 1 - e(1 - t)
    }), void 0 === i && (i = function easeInOut(t) {
      return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
    });
    var n, a = {
      easeIn: e,
      easeOut: r,
      easeInOut: i
    };
    return _(t, function(t) {
      for (var e in Ct[t] = at[t] = a, Ct[n = t.toLowerCase()] = r, a) Ct[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Ct[t + "." + e] = a[e]
    }), a
  }

  function Cb(e) {
    return function(t) {
      return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2
    }
  }

  function Db(r, t, e) {
    function el(t) {
      return 1 === t ? 1 : i * Math.pow(2, -10 * t) * Q((t - a) * n) + 1
    }
    var i = 1 <= t ? t : 1,
      n = (e || (r ? .3 : .45)) / (t < 1 ? t : 1),
      a = n / I * (Math.asin(1 / i) || 0),
      s = "out" === r ? el : "in" === r ? function(t) {
        return 1 - el(1 - t)
      } : Cb(el);
    return n = I / n, s.config = function(t, e) {
      return Db(r, t, e)
    }, s
  }

  function Eb(e, r) {
    function ml(t) {
      return t ? --t * t * ((r + 1) * t + r) + 1 : 0
    }
    void 0 === r && (r = 1.70158);
    var t = "out" === e ? ml : "in" === e ? function(t) {
      return 1 - ml(1 - t)
    } : Cb(ml);
    return t.config = function(t) {
      return Eb(e, t)
    }, t
  }
  var F, i, a, h, l, f, d, c, m, g, v, y, T, b, w, x, k, P, C, S, D, A, z, U = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: {
        lineHeight: ""
      }
    },
    R = {
      duration: .5,
      overwrite: !1,
      delay: 0
    },
    E = 1e8,
    B = 1 / E,
    I = 2 * Math.PI,
    H = I / 4,
    X = 0,
    V = Math.sqrt,
    j = Math.cos,
    Q = Math.sin,
    W = Array.isArray,
    G = /(?:-?\.?\d|\.)+/gi,
    J = /[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g,
    tt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    et = /[-+=.]*\d+(?:\.|e-|e)*\d*/gi,
    rt = /\(([^()]+)\)/i,
    it = /[+-]=-?[\.\d]+/,
    nt = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
    at = {},
    st = {},
    ot = [],
    ut = {},
    ht = {},
    lt = {},
    ft = 30,
    dt = [],
    ct = "",
    pt = function _merge(t, e) {
      for (var r in e) t[r] = e[r];
      return t
    },
    _t = function _animationCycle(t, e) {
      return (t /= e) && ~~t === t ? ~~t - 1 : ~~t
    },
    mt = {
      _start: 0,
      endTime: O
    },
    gt = function _clamp(t, e, r) {
      return r < t ? t : e < r ? e : r
    },
    vt = [].slice,
    yt = function toArray(t, e) {
      return !n(t) || e || !a && Pt() ? W(t) ? function _flatten(t, e, r) {
        return void 0 === r && (r = []), t.forEach(function(t) {
          return n(t) && !e || Na(t, 1) ? r.push.apply(r, yt(t)) : r.push(t)
        }) || r
      }(t, e) : Na(t) ? vt.call(t, 0) : t ? [t] : [] : vt.call(h.querySelectorAll(t), 0)
    },
    Tt = function mapRange(e, t, r, i, n) {
      var a = t - e,
        s = i - r;
      return Ia(n, function(t) {
        return r + ((t - e) / a * s || 0)
      })
    },
    bt = function _callback(t, e, r) {
      var i, n, a = t.vars,
        s = a[e];
      if (s) return i = a[e + "Params"], n = a.callbackScope || t, r && ot.length && da(), i ? s.apply(n, i) : s.call(n)
    },
    wt = 255,
    xt = {
      aqua: [0, wt, wt],
      lime: [0, wt, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, wt],
      navy: [0, 0, 128],
      white: [wt, wt, wt],
      olive: [128, 128, 0],
      yellow: [wt, wt, 0],
      orange: [wt, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [wt, 0, 0],
      pink: [wt, 192, 203],
      cyan: [0, wt, wt],
      transparent: [wt, wt, wt, 0]
    },
    kt = function() {
      var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
      for (t in xt) e += "|" + t + "\\b";
      return new RegExp(e + ")", "gi")
    }(),
    Ot = /hsl[a]?\(/,
    Mt = (b = Date.now, w = 500, x = 33, k = b(), P = k, S = C = 1 / 240, T = {
      time: 0,
      frame: 0,
      tick: function tick() {
        gk(!0)
      },
      wake: function wake() {
        f && (!a && t() && (i = a = window, h = i.document || {}, at.gsap = ie, (i.gsapVersions || (i.gsapVersions = [])).push(ie.version), K(l || i.GreenSockGlobals || !i.gsap && i || {}), y = i.requestAnimationFrame), g && T.sleep(), v = y || function(t) {
          return setTimeout(t, 1e3 * (S - T.time) + 1 | 0)
        }, m = 1, gk(2))
      },
      sleep: function sleep() {
        (y ? i.cancelAnimationFrame : clearTimeout)(g), m = 0, v = O
      },
      lagSmoothing: function lagSmoothing(t, e) {
        w = t || 1e8, x = Math.min(e, w, 0)
      },
      fps: function fps(t) {
        C = 1 / (t || 240), S = T.time + C
      },
      add: function add(t) {
        D.indexOf(t) < 0 && D.push(t), Pt()
      },
      remove: function remove(t) {
        var e;
        ~(e = D.indexOf(t)) && D.splice(e, 1)
      },
      _listeners: D = []
    }),
    Pt = function _wake() {
      return !m && Mt.wake()
    },
    Ct = {},
    St = /^[\d.\-M][\d.\-,\s]/,
    Dt = /["']/g,
    At = function _invertEase(e) {
      return function(t) {
        return 1 - e(1 - t)
      }
    },
    zt = function _parseEase(t, e) {
      return t && (o(t) ? t : Ct[t] || xb(t)) || e
    };

  function gk(e) {
    var t, r, i = b() - P,
      n = !0 === e;
    w < i && (k += i - x), P += i, T.time = (P - k) / 1e3, (0 < (t = T.time - S) || n) && (T.frame++, S += t + (C <= t ? .004 : C - t), r = 1), n || (g = v(gk)), r && D.forEach(function(t) {
      return t(T.time, i, T.frame, e)
    })
  }

  function Dl(t) {
    return t < z ? A * t * t : t < .7272727272727273 ? A * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < .9090909090909092 ? A * (t -= 2.25 / 2.75) * t + .9375 : A * Math.pow(t - 2.625 / 2.75, 2) + .984375
  }
  _("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
    var r = e < 5 ? e + 1 : e;
    Bb(t + ",Power" + (r - 1), e ? function(t) {
      return Math.pow(t, r)
    } : function(t) {
      return t
    }, function(t) {
      return 1 - Math.pow(1 - t, r)
    }, function(t) {
      return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2
    })
  }), Ct.Linear.easeNone = Ct.none = Ct.Linear.easeIn, Bb("Elastic", Db("in"), Db("out"), Db()), A = 7.5625, z = 1 / 2.75, Bb("Bounce", function(t) {
    return 1 - Dl(1 - t)
  }, Dl), Bb("Expo", function(t) {
    return t ? Math.pow(2, 10 * (t - 1)) : 0
  }), Bb("Circ", function(t) {
    return -(V(1 - t * t) - 1)
  }), Bb("Sine", function(t) {
    return 1 === t ? 1 : 1 - j(t * H)
  }), Bb("Back", Eb("in"), Eb("out"), Eb()), Ct.SteppedEase = Ct.steps = at.SteppedEase = {
    config: function config(t, e) {
      void 0 === t && (t = 1);
      var r = 1 / t,
        i = t + (e ? 0 : 1),
        n = e ? 1 : 0;
      return function(t) {
        return ((i * gt(0, .99999999, t) | 0) + n) * r
      }
    }
  }, R.ease = Ct["quad.out"], _("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
    return ct += t + "," + t + "Params,"
  });
  var Et, Ft = function GSCache(t, e) {
      this.id = X++, (t._gsap = this).target = t, this.harness = e, this.get = e ? e.get : $, this.set = e ? e.getSetter : Zt
    },
    Rt = ((Et = Animation.prototype).delay = function delay(t) {
      return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
    }, Et.duration = function duration(t) {
      return arguments.length ? this.totalDuration(0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
    }, Et.totalDuration = function totalDuration(t) {
      return arguments.length ? (this._dirty = 0, Ea(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
    }, Et.totalTime = function totalTime(t, e) {
      if (Pt(), !arguments.length) return this._tTime;
      var r = this.parent || this._dp;
      if (r && r.smoothChildTiming && this._ts) {
        for (this._start = aa(r._time - (0 < this._ts ? t / this._ts : ((this._dirty ? this.totalDuration() : this._tDur) - t) / -this._ts)), xa(this), r._dirty || ra(r); r.parent;) r.parent._time !== r._start + (0 <= r._ts ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
        !this.parent && this._dp.autoRemoveChildren && (0 < this._ts && t < this._tDur || this._ts < 0 && 0 < t || !this._tDur && !t) && za(this._dp, this, this._start - this._delay)
      }
      return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === B || !t && !this._initted) && (this._ts || (this._pTime = t), ea(this, t, e)), this
    }, Et.time = function time(t, e) {
      return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + ua(this)) % this._dur || (t ? this._dur : 0), e) : this._time
    }, Et.totalProgress = function totalProgress(t, e) {
      return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
    }, Et.progress = function progress(t, e) {
      return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + ua(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
    }, Et.iteration = function iteration(t, e) {
      var r = this.duration() + this._rDelay;
      return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? _t(this._tTime, r) + 1 : 1
    }, Et.timeScale = function timeScale(t) {
      if (!arguments.length) return this._rts === -B ? 0 : this._rts;
      if (this._rts === t) return this;
      var e = this.parent && this._ts ? wa(this.parent._time, this) : this._tTime;
      return this._rts = +t || 0, this._ts = this._ps || t === -B ? 0 : this._rts,
        function _recacheAncestors(t) {
          for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
          return t
        }(this.totalTime(gt(0, this._tDur, e), !0))
    }, Et.paused = function paused(t) {
      return arguments.length ? (this._ps !== t && ((this._ps = t) ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Pt(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && (this._tTime -= B) && Math.abs(this._zTime) !== B))), this) : this._ps
    }, Et.startTime = function startTime(t) {
      if (arguments.length) {
        this._start = t;
        var e = this.parent || this._dp;
        return !e || !e._sort && this.parent || za(e, this, t - this._delay), this
      }
      return this._start
    }, Et.endTime = function endTime(t) {
      return this._start + (s(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts)
    }, Et.rawTime = function rawTime(t) {
      var e = this.parent || this._dp;
      return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? wa(e.rawTime(t), this) : this._tTime : this._tTime
    }, Et.repeat = function repeat(t) {
      return arguments.length ? (this._repeat = t, Fa(this)) : this._repeat
    }, Et.repeatDelay = function repeatDelay(t) {
      return arguments.length ? (this._rDelay = t, Fa(this)) : this._rDelay
    }, Et.yoyo = function yoyo(t) {
      return arguments.length ? (this._yoyo = t, this) : this._yoyo
    }, Et.seek = function seek(t, e) {
      return this.totalTime(Ha(this, t), s(e))
    }, Et.restart = function restart(t, e) {
      return this.play().totalTime(t ? -this._delay : 0, s(e))
    }, Et.play = function play(t, e) {
      return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
    }, Et.reverse = function reverse(t, e) {
      return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
    }, Et.pause = function pause(t, e) {
      return null != t && this.seek(t, e), this.paused(!0)
    }, Et.resume = function resume() {
      return this.paused(!1)
    }, Et.reversed = function reversed(t) {
      return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -B : 0)), this) : this._rts < 0
    }, Et.invalidate = function invalidate() {
      return this._initted = 0, this._zTime = -B, this
    }, Et.isActive = function isActive(t) {
      var e, r = this.parent || this._dp,
        i = this._start;
      return !(r && !(this._ts && (this._initted || !t) && r.isActive(t) && (e = r.rawTime(!0)) >= i && e < this.endTime(!0) - B))
    }, Et.eventCallback = function eventCallback(t, e, r) {
      var i = this.vars;
      return 1 < arguments.length ? (e ? (i[t] = e, r && (i[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete i[t], this) : i[t]
    }, Et.then = function then(t) {
      var i = this;
      return new Promise(function(e) {
        function Sm() {
          var t = i.then;
          i.then = null, o(r) && (r = r(i)) && (r.then || r === i) && (i.then = t), e(r), i.then = t
        }
        var r = o(t) ? t : ga;
        i._initted && 1 === i.totalProgress() && 0 <= i._ts || !i._tTime && i._ts < 0 ? Sm() : i._prom = Sm
      })
    }, Et.kill = function kill() {
      eb(this)
    }, Animation);

  function Animation(t, e) {
    var r = t.parent || F;
    this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Ea(this, +t.duration, 1), this.data = t.data, m || Mt.wake(), r && za(r, this, e || 0 === e ? e : r._time, 1), t.reversed && this.reverse(), t.paused && this.paused(!0)
  }
  ha(Rt.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -B,
    _prom: 0,
    _ps: !1,
    _rts: 1
  });
  var Bt = function(i) {
    function Timeline(t, e) {
      var r;
      return void 0 === t && (t = {}), (r = i.call(this, t, e) || this).labels = {}, r.smoothChildTiming = !!t.smoothChildTiming, r.autoRemoveChildren = !!t.autoRemoveChildren, r._sort = s(t.sortChildren), r.parent && ya(r.parent, _assertThisInitialized(r)), t.scrollTrigger && Aa(_assertThisInitialized(r), t.scrollTrigger), r
    }
    _inheritsLoose(Timeline, i);
    var t = Timeline.prototype;
    return t.to = function to(t, e, r, i) {
      return new Ht(t, ca(arguments, 0, this), Ha(this, p(e) ? i : r)), this
    }, t.from = function from(t, e, r, i) {
      return new Ht(t, ca(arguments, 1, this), Ha(this, p(e) ? i : r)), this
    }, t.fromTo = function fromTo(t, e, r, i, n) {
      return new Ht(t, ca(arguments, 2, this), Ha(this, p(e) ? n : i)), this
    }, t.set = function set(t, e, r) {
      return e.duration = 0, e.parent = this, ma(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new Ht(t, e, Ha(this, r), 1), this
    }, t.call = function call(t, e, r) {
      return za(this, Ht.delayedCall(0, t, e), Ha(this, r))
    }, t.staggerTo = function staggerTo(t, e, r, i, n, a, s) {
      return r.duration = e, r.stagger = r.stagger || i, r.onComplete = a, r.onCompleteParams = s, r.parent = this, new Ht(t, r, Ha(this, n)), this
    }, t.staggerFrom = function staggerFrom(t, e, r, i, n, a, o) {
      return r.runBackwards = 1, ma(r).immediateRender = s(r.immediateRender), this.staggerTo(t, e, r, i, n, a, o)
    }, t.staggerFromTo = function staggerFromTo(t, e, r, i, n, a, o, u) {
      return i.startAt = r, ma(i).immediateRender = s(i.immediateRender), this.staggerTo(t, e, i, n, a, o, u)
    }, t.render = function render(t, e, r) {
      var i, n, a, s, o, u, h, l, f, d, c, p, _ = this._time,
        m = this._dirty ? this.totalDuration() : this._tDur,
        g = this._dur,
        v = this !== F && m - B < t && 0 <= t ? m : t < B ? 0 : t,
        y = this._zTime < 0 != t < 0 && (this._initted || !g);
      if (v !== this._tTime || r || y) {
        if (_ !== this._time && g && (v += this._time - _, t += this._time - _), i = v, f = this._start, u = !(l = this._ts), y && (g || (_ = this._zTime), !t && e || (this._zTime = t)), this._repeat && (c = this._yoyo, o = g + this._rDelay, (g < (i = aa(v % o)) || m === v) && (i = g), (s = ~~(v / o)) && s === v / o && (i = g, s--), d = _t(this._tTime, o), !_ && this._tTime && d !== s && (d = s), c && 1 & s && (i = g - i, p = 1), s !== d && !this._lock)) {
          var T = c && 1 & d,
            b = T === (c && 1 & s);
          if (s < d && (T = !T), _ = T ? 0 : g, this._lock = 1, this.render(_ || (p ? 0 : aa(s * o)), e, !g)._lock = 0, !e && this.parent && bt(this, "onRepeat"), this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1), _ !== this._time || u != !this._ts) return this;
          if (b && (this._lock = 2, _ = T ? g + 1e-4 : -1e-4, this.render(_, !0), this.vars.repeatRefresh && !p && this.invalidate()), this._lock = 0, !this._ts && !u) return this;
          zb(this, p)
        }
        if (this._hasPause && !this._forcing && this._lock < 2 && (h = function _findNextPauseTween(t, e, r) {
            var i;
            if (e < r)
              for (i = t._first; i && i._start <= r;) {
                if (!i._dur && "isPause" === i.data && i._start > e) return i;
                i = i._next
              } else
                for (i = t._last; i && i._start >= r;) {
                  if (!i._dur && "isPause" === i.data && i._start < e) return i;
                  i = i._prev
                }
          }(this, aa(_), aa(i))) && (v -= i - (i = h._start)), this._tTime = v, this._time = i, this._act = !l, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t), _ || !i || e || bt(this, "onStart"), _ <= i && 0 <= t)
          for (n = this._first; n;) {
            if (a = n._next, (n._act || i >= n._start) && n._ts && h !== n) {
              if (n.parent !== this) return this.render(t, e, r);
              if (n.render(0 < n._ts ? (i - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (i - n._start) * n._ts, e, r), i !== this._time || !this._ts && !u) {
                h = 0, a && (v += this._zTime = -B);
                break
              }
            }
            n = a
          } else {
            n = this._last;
            for (var w = t < 0 ? t : i; n;) {
              if (a = n._prev, (n._act || w <= n._end) && n._ts && h !== n) {
                if (n.parent !== this) return this.render(t, e, r);
                if (n.render(0 < n._ts ? (w - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (w - n._start) * n._ts, e, r), i !== this._time || !this._ts && !u) {
                  h = 0, a && (v += this._zTime = w ? -B : B);
                  break
                }
              }
              n = a
            }
          }
        if (h && !e && (this.pause(), h.render(_ <= i ? 0 : -B)._zTime = _ <= i ? 1 : -1, this._ts)) return this._start = f, xa(this), this.render(t, e, r);
        this._onUpdate && !e && bt(this, "onUpdate", !0), (v === m && m >= this.totalDuration() || !v && _) && (f !== this._start && Math.abs(l) === Math.abs(this._ts) || this._lock || (!t && g || !(v === m && 0 < this._ts || !v && this._ts < 0) || qa(this, 1), e || t < 0 && !_ || !v && !_ || (bt(this, v === m ? "onComplete" : "onReverseComplete", !0), !this._prom || v < m && 0 < this.timeScale() || this._prom())))
      }
      return this
    }, t.add = function add(t, e) {
      var r = this;
      if (p(e) || (e = Ha(this, e)), !(t instanceof Rt)) {
        if (W(t)) return t.forEach(function(t) {
          return r.add(t, e)
        }), ra(this);
        if (n(t)) return this.addLabel(t, e);
        if (!o(t)) return this;
        t = Ht.delayedCall(0, t)
      }
      return this !== t ? za(this, t, e) : this
    }, t.getChildren = function getChildren(t, e, r, i) {
      void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === i && (i = -E);
      for (var n = [], a = this._first; a;) a._start >= i && (a instanceof Ht ? e && n.push(a) : (r && n.push(a), t && n.push.apply(n, a.getChildren(!0, e, r)))), a = a._next;
      return n
    }, t.getById = function getById(t) {
      for (var e = this.getChildren(1, 1, 1), r = e.length; r--;)
        if (e[r].vars.id === t) return e[r]
    }, t.remove = function remove(t) {
      return n(t) ? this.removeLabel(t) : o(t) ? this.killTweensOf(t) : (pa(this, t), t === this._recent && (this._recent = this._last), ra(this))
    }, t.totalTime = function totalTime(t, e) {
      return arguments.length ? (this._forcing = 1, this.parent || this._dp || !this._ts || (this._start = aa(Mt.time - (0 < this._ts ? t / this._ts : (this.totalDuration() - t) / -this._ts))), i.prototype.totalTime.call(this, t, e), this._forcing = 0, this) : this._tTime
    }, t.addLabel = function addLabel(t, e) {
      return this.labels[t] = Ha(this, e), this
    }, t.removeLabel = function removeLabel(t) {
      return delete this.labels[t], this
    }, t.addPause = function addPause(t, e, r) {
      var i = Ht.delayedCall(0, e || O, r);
      return i.data = "isPause", this._hasPause = 1, za(this, i, Ha(this, t))
    }, t.removePause = function removePause(t) {
      var e = this._first;
      for (t = Ha(this, t); e;) e._start === t && "isPause" === e.data && qa(e), e = e._next
    }, t.killTweensOf = function killTweensOf(t, e, r) {
      for (var i = this.getTweensOf(t, r), n = i.length; n--;) It !== i[n] && i[n].kill(t, e);
      return this
    }, t.getTweensOf = function getTweensOf(t, e) {
      for (var r, i = [], n = yt(t), a = this._first; a;) a instanceof Ht ? !ba(a._targets, n) || e && !a.isActive("started" === e) || i.push(a) : (r = a.getTweensOf(n, e)).length && i.push.apply(i, r), a = a._next;
      return i
    }, t.tweenTo = function tweenTo(t, e) {
      e = e || {};
      var r = this,
        i = Ha(r, t),
        n = e.startAt,
        a = e.onStart,
        s = e.onStartParams,
        o = Ht.to(r, ha(e, {
          ease: "none",
          lazy: !1,
          time: i,
          duration: e.duration || Math.abs((i - (n && "time" in n ? n.time : r._time)) / r.timeScale()) || B,
          onStart: function onStart() {
            r.pause();
            var t = e.duration || Math.abs((i - r._time) / r.timeScale());
            o._dur !== t && Ea(o, t).render(o._time, !0, !0), a && a.apply(o, s || [])
          }
        }));
      return o
    }, t.tweenFromTo = function tweenFromTo(t, e, r) {
      return this.tweenTo(e, ha({
        startAt: {
          time: Ha(this, t)
        }
      }, r))
    }, t.recent = function recent() {
      return this._recent
    }, t.nextLabel = function nextLabel(t) {
      return void 0 === t && (t = this._time), cb(this, Ha(this, t))
    }, t.previousLabel = function previousLabel(t) {
      return void 0 === t && (t = this._time), cb(this, Ha(this, t), 1)
    }, t.currentLabel = function currentLabel(t) {
      return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + B)
    }, t.shiftChildren = function shiftChildren(t, e, r) {
      void 0 === r && (r = 0);
      for (var i, n = this._first, a = this.labels; n;) n._start >= r && (n._start += t), n = n._next;
      if (e)
        for (i in a) a[i] >= r && (a[i] += t);
      return ra(this)
    }, t.invalidate = function invalidate() {
      var t = this._first;
      for (this._lock = 0; t;) t.invalidate(), t = t._next;
      return i.prototype.invalidate.call(this)
    }, t.clear = function clear(t) {
      void 0 === t && (t = !0);
      for (var e, r = this._first; r;) e = r._next, this.remove(r), r = e;
      return this._time = this._tTime = this._pTime = 0, t && (this.labels = {}), ra(this)
    }, t.totalDuration = function totalDuration(t) {
      var e, r, i, n, a = 0,
        s = this,
        o = s._last,
        u = E;
      if (arguments.length) return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -t : t));
      if (s._dirty) {
        for (n = s.parent; o;) e = o._prev, o._dirty && o.totalDuration(), u < (i = o._start) && s._sort && o._ts && !s._lock ? (s._lock = 1, za(s, o, i - o._delay, 1)._lock = 0) : u = i, i < 0 && o._ts && (a -= i, (!n && !s._dp || n && n.smoothChildTiming) && (s._start += i / s._ts, s._time -= i, s._tTime -= i), s.shiftChildren(-i, !1, -Infinity), u = 0), a < (r = xa(o)) && o._ts && (a = r), o = e;
        Ea(s, s === F && s._time > a ? s._time : a, 1), s._dirty = 0
      }
      return s._tDur
    }, Timeline.updateRoot = function updateRoot(t) {
      if (F._ts && (ea(F, wa(t, F)), d = Mt.frame), Mt.frame >= ft) {
        ft += U.autoSleep || 120;
        var e = F._first;
        if ((!e || !e._ts) && U.autoSleep && Mt._listeners.length < 2) {
          for (; e && !e._ts;) e = e._next;
          e || Mt.sleep()
        }
      }
    }, Timeline
  }(Rt);
  ha(Bt.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
  });

  function Lb(t, e, i, a, s, u) {
    var h, l, f, d;
    if (ht[t] && !1 !== (h = new ht[t]).init(s, h.rawVars ? e[t] : function _processVars(t, e, i, a, s) {
        if (o(t) && (t = Yt(t, s, e, i, a)), !r(t) || t.style && t.nodeType || W(t)) return n(t) ? Yt(t, s, e, i, a) : t;
        var u, h = {};
        for (u in t) h[u] = Yt(t[u], s, e, i, a);
        return h
      }(e[t], a, s, u, i), i, a, u) && (i._pt = l = new ee(i._pt, s, t, 0, 1, h.render, h, 0, h.priority), i !== c))
      for (f = i._ptLookup[i._targets.indexOf(s)], d = h._props.length; d--;) f[h._props[d]] = l;
    return h
  }
  var It, Lt = function _addPropTween(t, e, r, i, a, s, u, h, l) {
      o(i) && (i = i(a || 0, t, s));
      var f, d = t[e],
        c = "get" !== r ? r : o(d) ? l ? t[e.indexOf("set") || !o(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : d,
        p = o(d) ? l ? jt : Vt : Xt;
      if (n(i) && (~i.indexOf("random(") && (i = _a(i)), "=" === i.charAt(1) && (i = parseFloat(c) + parseFloat(i.substr(2)) * ("-" === i.charAt(0) ? -1 : 1) + (Ka(c) || 0))), c !== i) return isNaN(c + i) ? (d || e in t || L(e, i), function _addComplexStringPropTween(t, e, r, i, n, a, s) {
        var o, u, h, l, f, d, c, p, _ = new ee(this._pt, t, e, 0, 1, Wt, null, n),
          m = 0,
          g = 0;
        for (_.b = r, _.e = i, r += "", (c = ~(i += "").indexOf("random(")) && (i = _a(i)), a && (a(p = [r, i], t, e), r = p[0], i = p[1]), u = r.match(et) || []; o = et.exec(i);) l = o[0], f = i.substring(m, o.index), h ? h = (h + 1) % 5 : "rgba(" === f.substr(-5) && (h = 1), l !== u[g++] && (d = parseFloat(u[g - 1]) || 0, _._pt = {
          _next: _._pt,
          p: f || 1 === g ? f : ",",
          s: d,
          c: "=" === l.charAt(1) ? parseFloat(l.substr(2)) * ("-" === l.charAt(0) ? -1 : 1) : parseFloat(l) - d,
          m: h && h < 4 ? Math.round : 0
        }, m = et.lastIndex);
        return _.c = m < i.length ? i.substring(m, i.length) : "", _.fp = s, (it.test(i) || c) && (_.e = 0), this._pt = _
      }.call(this, t, e, c, i, p, h || U.stringFilter, l)) : (f = new ee(this._pt, t, e, +c || 0, i - (c || 0), "boolean" == typeof d ? Qt : Kt, 0, p), l && (f.fp = l), u && f.modifier(u, this, t), this._pt = f)
    },
    qt = function _initTween(t, e) {
      var r, i, n, a, o, u, h, l, f, d, c, p, _ = t.vars,
        m = _.ease,
        g = _.startAt,
        v = _.immediateRender,
        y = _.lazy,
        T = _.onUpdate,
        b = _.onUpdateParams,
        w = _.callbackScope,
        x = _.runBackwards,
        k = _.yoyoEase,
        O = _.keyframes,
        M = _.autoRevert,
        P = t._dur,
        C = t._startAt,
        S = t._targets,
        D = t.parent,
        A = D && "nested" === D.data ? D.parent._targets : S,
        z = "auto" === t._overwrite,
        E = t.timeline;
      if (!E || O && m || (m = "none"), t._ease = zt(m, R.ease), t._yEase = k ? At(zt(!0 === k ? m : k, R.ease)) : 0, k && t._yoyo && !t._repeat && (k = t._yEase, t._yEase = t._ease, t._ease = k), !E) {
        if (p = (l = S[0] ? Z(S[0]).harness : 0) && _[l.prop], r = la(_, st), C && C.render(-1, !0).kill(), g) {
          if (qa(t._startAt = Ht.set(S, ha({
              data: "isStart",
              overwrite: !1,
              parent: D,
              immediateRender: !0,
              lazy: s(y),
              startAt: null,
              delay: 0,
              onUpdate: T,
              onUpdateParams: b,
              callbackScope: w,
              stagger: 0
            }, g))), v)
            if (0 < e) M || (t._startAt = 0);
            else if (P) return
        } else if (x && P)
          if (C) M || (t._startAt = 0);
          else if (e && (v = !1), n = ha({
            overwrite: !1,
            data: "isFromStart",
            lazy: v && s(y),
            immediateRender: v,
            stagger: 0,
            parent: D
          }, r), p && (n[l.prop] = p), qa(t._startAt = Ht.set(S, n)), v) {
          if (!e) return
        } else _initTween(t._startAt, B);
        for (t._pt = 0, y = P && s(y) || y && !P, i = 0; i < S.length; i++) {
          if (h = (o = S[i])._gsap || Y(S)[i]._gsap, t._ptLookup[i] = d = {}, ut[h.id] && da(), c = A === S ? i : A.indexOf(o), l && !1 !== (f = new l).init(o, p || r, t, c, A) && (t._pt = a = new ee(t._pt, o, f.name, 0, 1, f.render, f, 0, f.priority), f._props.forEach(function(t) {
              d[t] = a
            }), f.priority && (u = 1)), !l || p)
            for (n in r) ht[n] && (f = Lb(n, r, t, c, o, A)) ? f.priority && (u = 1) : d[n] = a = Lt.call(t, o, n, "get", r[n], c, A, 0, _.stringFilter);
          t._op && t._op[i] && t.kill(o, t._op[i]), z && t._pt && (It = t, F.killTweensOf(o, d, "started"), It = 0), t._pt && y && (ut[h.id] = 1)
        }
        u && te(t), t._onInit && t._onInit(t)
      }
      t._from = !E && !!_.runBackwards, t._onUpdate = T, t._initted = !!t.parent
    },
    Yt = function _parseFuncOrString(t, e, r, i, a) {
      return o(t) ? t.call(e, r, i, a) : n(t) && ~t.indexOf("random(") ? _a(t) : t
    },
    Nt = ct + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
    Ut = (Nt + ",id,stagger,delay,duration,paused,scrollTrigger").split(","),
    Ht = function(A) {
      function Tween(t, e, i, n) {
        var a;
        "number" == typeof e && (i.duration = e, e = i, i = null);
        var o, h, l, f, d, c, _, m, g = (a = A.call(this, n ? e : ma(e), i) || this).vars,
          v = g.duration,
          y = g.delay,
          T = g.immediateRender,
          b = g.stagger,
          w = g.overwrite,
          x = g.keyframes,
          k = g.defaults,
          P = g.scrollTrigger,
          C = g.yoyoEase,
          S = a.parent,
          D = (W(t) ? p(t[0]) : "length" in e) ? [t] : yt(t);
        if (a._targets = D.length ? Y(D) : M("GSAP target " + t + " not found. https://greensock.com", !U.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = w, x || b || u(v) || u(y)) {
          if (e = a.vars, (o = a.timeline = new Bt({
              data: "nested",
              defaults: k || {}
            })).kill(), o.parent = _assertThisInitialized(a), x) ha(o.vars.defaults, {
            ease: "none"
          }), x.forEach(function(t) {
            return o.to(D, t, ">")
          });
          else {
            if (f = D.length, _ = b ? Ra(b) : O, r(b))
              for (d in b) ~Nt.indexOf(d) && ((m = m || {})[d] = b[d]);
            for (h = 0; h < f; h++) {
              for (d in l = {}, e) Ut.indexOf(d) < 0 && (l[d] = e[d]);
              l.stagger = 0, C && (l.yoyoEase = C), m && pt(l, m), c = D[h], l.duration = +Yt(v, _assertThisInitialized(a), h, c, D), l.delay = (+Yt(y, _assertThisInitialized(a), h, c, D) || 0) - a._delay, !b && 1 === f && l.delay && (a._delay = y = l.delay, a._start += y, l.delay = 0), o.to(c, l, _(h, c, D))
            }
            o.duration() ? v = y = 0 : a.timeline = 0
          }
          v || a.duration(v = o.duration())
        } else a.timeline = 0;
        return !0 === w && (It = _assertThisInitialized(a), F.killTweensOf(D), It = 0), S && ya(S, _assertThisInitialized(a)), (T || !v && !x && a._start === aa(S._time) && s(T) && function _hasNoPausedAncestors(t) {
          return !t || t._ts && _hasNoPausedAncestors(t.parent)
        }(_assertThisInitialized(a)) && "nested" !== S.data) && (a._tTime = -B, a.render(Math.max(0, -y))), P && Aa(_assertThisInitialized(a), P), a
      }
      _inheritsLoose(Tween, A);
      var t = Tween.prototype;
      return t.render = function render(t, e, r) {
        var i, n, a, s, o, u, h, l, f, d = this._time,
          c = this._tDur,
          p = this._dur,
          _ = c - B < t && 0 <= t ? c : t < B ? 0 : t;
        if (p) {
          if (_ !== this._tTime || !t || r || this._startAt && this._zTime < 0 != t < 0) {
            if (i = _, l = this.timeline, this._repeat) {
              if (s = p + this._rDelay, (p < (i = aa(_ % s)) || c === _) && (i = p), (a = ~~(_ / s)) && a === _ / s && (i = p, a--), (u = this._yoyo && 1 & a) && (f = this._yEase, i = p - i), o = _t(this._tTime, s), i === d && !r && this._initted) return this;
              a !== o && (l && this._yEase && zb(l, u), !this.vars.repeatRefresh || u || this._lock || (this._lock = r = 1, this.render(aa(s * a), !0).invalidate()._lock = 0))
            }
            if (!this._initted) {
              if (Ba(this, i, r, e)) return this._tTime = 0, this;
              if (p !== this._dur) return this.render(t, e, r)
            }
            for (this._tTime = _, this._time = i, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = h = (f || this._ease)(i / p), this._from && (this.ratio = h = 1 - h), !i || d || e || bt(this, "onStart"), n = this._pt; n;) n.r(h, n.d), n = n._next;
            l && l.render(t < 0 ? t : !i && u ? -B : l._dur * h, e, r) || this._startAt && (this._zTime = t), this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, r), bt(this, "onUpdate")), this._repeat && a !== o && this.vars.onRepeat && !e && this.parent && bt(this, "onRepeat"), _ !== this._tDur && _ || this._tTime !== _ || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0), !t && p || !(_ === this._tDur && 0 < this._ts || !_ && this._ts < 0) || qa(this, 1), e || t < 0 && !d || !_ && !d || (bt(this, _ === c ? "onComplete" : "onReverseComplete", !0), !this._prom || _ < c && 0 < this.timeScale() || this._prom()))
          }
        } else ! function _renderZeroDurationTween(t, e, r, i) {
          var n, a, s = t.ratio,
            o = e < 0 || !e && s && !t._start && t._zTime > B && !t._dp._lock || t._ts < 0 || t._dp._ts < 0 ? 0 : 1,
            u = t._rDelay,
            h = 0;
          if (u && t._repeat && (h = gt(0, t._tDur, e), _t(h, u) !== (a = _t(t._tTime, u)) && (s = 1 - o, t.vars.repeatRefresh && t._initted && t.invalidate())), t._initted || !Ba(t, e, i, r))
            if (o !== s || i || t._zTime === B || !e && t._zTime) {
              for (a = t._zTime, t._zTime = e || (r ? B : 0), r = r || e && !a, t.ratio = o, t._from && (o = 1 - o), t._time = 0, t._tTime = h, r || bt(t, "onStart"), n = t._pt; n;) n.r(o, n.d), n = n._next;
              t._startAt && e < 0 && t._startAt.render(e, !0, !0), t._onUpdate && !r && bt(t, "onUpdate"), h && t._repeat && !r && t.parent && bt(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === o && (o && qa(t, 1), r || (bt(t, o ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
            } else t._zTime || (t._zTime = e)
        }(this, t, e, r);
        return this
      }, t.targets = function targets() {
        return this._targets
      }, t.invalidate = function invalidate() {
        return this._pt = this._op = this._startAt = this._onUpdate = this._act = this._lazy = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), A.prototype.invalidate.call(this)
      }, t.kill = function kill(t, e) {
        if (void 0 === e && (e = "all"), !(t || e && "all" !== e) && (this._lazy = 0, this.parent)) return eb(this);
        if (this.timeline) {
          var r = this.timeline.totalDuration();
          return this.timeline.killTweensOf(t, e, It && !0 !== It.vars.overwrite)._first || eb(this), this.parent && r !== this.timeline.totalDuration() && Ea(this, this._dur * this.timeline._tDur / r), this
        }
        var i, a, s, o, u, h, l, f = this._targets,
          d = t ? yt(t) : f,
          c = this._ptLookup,
          p = this._pt;
        if ((!e || "all" === e) && function _arraysMatch(t, e) {
            for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r];);
            return r < 0
          }(f, d)) return eb(this);
        for (i = this._op = this._op || [], "all" !== e && (n(e) && (u = {}, _(e, function(t) {
            return u[t] = 1
          }), e = u), e = function _addAliasesToVars(t, e) {
            var r, i, n, a, s = t[0] ? Z(t[0]).harness : 0,
              o = s && s.aliases;
            if (!o) return e;
            for (i in r = pt({}, e), o)
              if (i in r)
                for (n = (a = o[i].split(",")).length; n--;) r[a[n]] = r[i];
            return r
          }(f, e)), l = f.length; l--;)
          if (~d.indexOf(f[l]))
            for (u in a = c[l], "all" === e ? (i[l] = e, o = a, s = {}) : (s = i[l] = i[l] || {}, o = e), o)(h = a && a[u]) && ("kill" in h.d && !0 !== h.d.kill(u) || pa(this, h, "_pt"), delete a[u]), "all" !== s && (s[u] = 1);
        return this._initted && !this._pt && p && eb(this), this
      }, Tween.to = function to(t, e, r) {
        return new Tween(t, e, r)
      }, Tween.from = function from(t, e) {
        return new Tween(t, ca(arguments, 1))
      }, Tween.delayedCall = function delayedCall(t, e, r, i) {
        return new Tween(e, 0, {
          immediateRender: !1,
          lazy: !1,
          overwrite: !1,
          delay: t,
          onComplete: e,
          onReverseComplete: e,
          onCompleteParams: r,
          onReverseCompleteParams: r,
          callbackScope: i
        })
      }, Tween.fromTo = function fromTo(t, e, r) {
        return new Tween(t, ca(arguments, 2))
      }, Tween.set = function set(t, e) {
        return e.duration = 0, e.repeatDelay || (e.repeat = 0), new Tween(t, e)
      }, Tween.killTweensOf = function killTweensOf(t, e, r) {
        return F.killTweensOf(t, e, r)
      }, Tween
    }(Rt);
  ha(Ht.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
  }), _("staggerTo,staggerFrom,staggerFromTo", function(r) {
    Ht[r] = function() {
      var t = new Bt,
        e = vt.call(arguments, 0);
      return e.splice("staggerFromTo" === r ? 5 : 4, 0, 0), t[r].apply(t, e)
    }
  });

  function Wb(t, e, r) {
    return t.setAttribute(e, r)
  }

  function cc(t, e, r, i) {
    i.mSet(t, e, i.m.call(i.tween, r, i.mt), i)
  }
  var Xt = function _setterPlain(t, e, r) {
      return t[e] = r
    },
    Vt = function _setterFunc(t, e, r) {
      return t[e](r)
    },
    jt = function _setterFuncWithParam(t, e, r, i) {
      return t[e](i.fp, r)
    },
    Zt = function _getSetter(t, e) {
      return o(t[e]) ? Vt : q(t[e]) && t.setAttribute ? Wb : Xt
    },
    Kt = function _renderPlain(t, e) {
      return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e)
    },
    Qt = function _renderBoolean(t, e) {
      return e.set(e.t, e.p, !!(e.s + e.c * t), e)
    },
    Wt = function _renderComplexString(t, e) {
      var r = e._pt,
        i = "";
      if (!t && e.b) i = e.b;
      else if (1 === t && e.e) i = e.e;
      else {
        for (; r;) i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + i, r = r._next;
        i += e.c
      }
      e.set(e.t, e.p, i, e)
    },
    Gt = function _renderPropTweens(t, e) {
      for (var r = e._pt; r;) r.r(t, r.d), r = r._next
    },
    $t = function _addPluginModifier(t, e, r, i) {
      for (var n, a = this._pt; a;) n = a._next, a.p === i && a.modifier(t, e, r), a = n
    },
    Jt = function _killPropTweensOf(t) {
      for (var e, r, i = this._pt; i;) r = i._next, i.p === t && !i.op || i.op === t ? pa(this, i, "_pt") : i.dep || (e = 1), i = r;
      return !e
    },
    te = function _sortPropTweensByPriority(t) {
      for (var e, r, i, n, a = t._pt; a;) {
        for (e = a._next, r = i; r && r.pr > a.pr;) r = r._next;
        (a._prev = r ? r._prev : n) ? a._prev._next = a: i = a, (a._next = r) ? r._prev = a : n = a, a = e
      }
      t._pt = i
    },
    ee = (PropTween.prototype.modifier = function modifier(t, e, r) {
      this.mSet = this.mSet || this.set, this.set = cc, this.m = t, this.mt = r, this.tween = e
    }, PropTween);

  function PropTween(t, e, r, i, n, a, s, o, u) {
    this.t = e, this.s = i, this.c = n, this.p = r, this.r = a || Kt, this.d = s || this, this.set = o || Xt, this.pr = u || 0, (this._next = t) && (t._prev = this)
  }
  _(ct + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
    return st[t] = 1
  }), at.TweenMax = at.TweenLite = Ht, at.TimelineLite = at.TimelineMax = Bt, F = new Bt({
    sortChildren: !1,
    defaults: R,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
  }), U.stringFilter = pb;
  var re = {
    registerPlugin: function registerPlugin() {
      for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
      e.forEach(function(t) {
        return function _createPlugin(t) {
          var e = (t = !t.name && t.default || t).name,
            r = o(t),
            i = e && !r && t.init ? function() {
              this._props = []
            } : t,
            n = {
              init: O,
              render: Gt,
              add: Lt,
              kill: Jt,
              modifier: $t,
              rawVars: 0
            },
            a = {
              targetTest: 0,
              get: 0,
              getSetter: Zt,
              aliases: {},
              register: 0
            };
          if (Pt(), t !== i) {
            if (ht[e]) return;
            ha(i, ha(la(t, n), a)), pt(i.prototype, pt(n, la(t, a))), ht[i.prop = e] = i, t.targetTest && (dt.push(i), st[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
          }
          N(e, i), t.register && t.register(ie, i, ee)
        }(t)
      })
    },
    timeline: function timeline(t) {
      return new Bt(t)
    },
    getTweensOf: function getTweensOf(t, e) {
      return F.getTweensOf(t, e)
    },
    getProperty: function getProperty(i, t, e, r) {
      n(i) && (i = yt(i)[0]);
      var a = Z(i || {}).get,
        s = e ? ga : fa;
      return "native" === e && (e = ""), i ? t ? s((ht[t] && ht[t].get || a)(i, t, e, r)) : function(t, e, r) {
        return s((ht[t] && ht[t].get || a)(i, t, e, r))
      } : i
    },
    quickSetter: function quickSetter(r, e, i) {
      if (1 < (r = yt(r)).length) {
        var n = r.map(function(t) {
            return ie.quickSetter(t, e, i)
          }),
          a = n.length;
        return function(t) {
          for (var e = a; e--;) n[e](t)
        }
      }
      r = r[0] || {};
      var s = ht[e],
        o = Z(r),
        u = o.harness && (o.harness.aliases || {})[e] || e,
        h = s ? function(t) {
          var e = new s;
          c._pt = 0, e.init(r, i ? t + i : t, c, 0, [r]), e.render(1, e), c._pt && Gt(1, c)
        } : o.set(r, u);
      return s ? h : function(t) {
        return h(r, u, i ? t + i : t, o, 1)
      }
    },
    isTweening: function isTweening(t) {
      return 0 < F.getTweensOf(t, !0).length
    },
    defaults: function defaults(t) {
      return t && t.ease && (t.ease = zt(t.ease, R.ease)), ka(R, t || {})
    },
    config: function config(t) {
      return ka(U, t || {})
    },
    registerEffect: function registerEffect(t) {
      var n = t.name,
        i = t.effect,
        e = t.plugins,
        a = t.defaults,
        s = t.extendTimeline;
      (e || "").split(",").forEach(function(t) {
        return t && !ht[t] && !at[t] && M(n + " effect requires " + t + " plugin.")
      }), lt[n] = function(t, e, r) {
        return i(yt(t), ha(e || {}, a), r)
      }, s && (Bt.prototype[n] = function(t, e, i) {
        return this.add(lt[n](t, r(e) ? e : (i = e) && {}, this), i)
      })
    },
    registerEase: function registerEase(t, e) {
      Ct[t] = zt(e)
    },
    parseEase: function parseEase(t, e) {
      return arguments.length ? zt(t, e) : Ct
    },
    getById: function getById(t) {
      return F.getById(t)
    },
    exportRoot: function exportRoot(t, e) {
      void 0 === t && (t = {});
      var r, i, n = new Bt(t);
      for (n.smoothChildTiming = s(t.smoothChildTiming), F.remove(n), n._dp = 0, n._time = n._tTime = F._time, r = F._first; r;) i = r._next, !e && !r._dur && r instanceof Ht && r.vars.onComplete === r._targets[0] || za(n, r, r._start - r._delay), r = i;
      return za(F, n, 0), n
    },
    utils: {
      wrap: function wrap(e, t, r) {
        var i = t - e;
        return W(e) ? Ya(e, wrap(0, e.length), t) : Ia(r, function(t) {
          return (i + (t - e) % i) % i + e
        })
      },
      wrapYoyo: function wrapYoyo(e, t, r) {
        var i = t - e,
          n = 2 * i;
        return W(e) ? Ya(e, wrapYoyo(0, e.length - 1), t) : Ia(r, function(t) {
          return e + (i < (t = (n + (t - e) % n) % n || 0) ? n - t : t)
        })
      },
      distribute: Ra,
      random: Ua,
      snap: Ta,
      normalize: function normalize(t, e, r) {
        return Tt(t, e, 0, 1, r)
      },
      getUnit: Ka,
      clamp: function clamp(e, r, t) {
        return Ia(t, function(t) {
          return gt(e, r, t)
        })
      },
      splitColor: kb,
      toArray: yt,
      mapRange: Tt,
      pipe: function pipe() {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
        return function(t) {
          return e.reduce(function(t, e) {
            return e(t)
          }, t)
        }
      },
      unitize: function unitize(e, r) {
        return function(t) {
          return e(parseFloat(t)) + (r || Ka(t))
        }
      },
      interpolate: function interpolate(e, r, t, i) {
        var a = isNaN(e + r) ? 0 : function(t) {
          return (1 - t) * e + t * r
        };
        if (!a) {
          var s, o, u, h, l, f = n(e),
            d = {};
          if (!0 === t && (i = 1) && (t = null), f) e = {
            p: e
          }, r = {
            p: r
          };
          else if (W(e) && !W(r)) {
            for (u = [], h = e.length, l = h - 2, o = 1; o < h; o++) u.push(interpolate(e[o - 1], e[o]));
            h--, a = function func(t) {
              t *= h;
              var e = Math.min(l, ~~t);
              return u[e](t - e)
            }, t = r
          } else i || (e = pt(W(e) ? [] : {}, e));
          if (!u) {
            for (s in r) Lt.call(d, e, s, "get", r[s]);
            a = function func(t) {
              return Gt(t, d) || (f ? e.p : e)
            }
          }
        }
        return Ia(t, a)
      },
      shuffle: Qa
    },
    install: K,
    effects: lt,
    ticker: Mt,
    updateRoot: Bt.updateRoot,
    plugins: ht,
    globalTimeline: F,
    core: {
      PropTween: ee,
      globals: N,
      Tween: Ht,
      Timeline: Bt,
      Animation: Rt,
      getCache: Z,
      _removeLinkedListItem: pa
    }
  };
  _("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
    return re[t] = Ht[t]
  }), Mt.add(Bt.updateRoot), c = re.to({}, {
    duration: 0
  });

  function gc(t, e) {
    for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e;) r = r._next;
    return r
  }

  function ic(t, a) {
    return {
      name: t,
      rawVars: 1,
      init: function init(t, i, e) {
        e._onInit = function(t) {
          var e, r;
          if (n(i) && (e = {}, _(i, function(t) {
              return e[t] = 1
            }), i = e), a) {
            for (r in e = {}, i) e[r] = a(i[r]);
            i = e
          }! function _addModifiers(t, e) {
            var r, i, n, a = t._targets;
            for (r in e)
              for (i = a.length; i--;)(n = (n = t._ptLookup[i][r]) && n.d) && (n._pt && (n = gc(n, r)), n && n.modifier && n.modifier(e[r], t, a[i], r))
          }(t, i)
        }
      }
    }
  }
  var ie = re.registerPlugin({
    name: "attr",
    init: function init(t, e, r, i, n) {
      var a, s;
      for (a in e)(s = this.add(t, "setAttribute", (t.getAttribute(a) || 0) + "", e[a], i, n, 0, 0, a)) && (s.op = a), this._props.push(a)
    }
  }, {
    name: "endArray",
    init: function init(t, e) {
      for (var r = e.length; r--;) this.add(t, r, t[r] || 0, e[r])
    }
  }, ic("roundProps", Sa), ic("modifiers"), ic("snap", Ta)) || re;
  Ht.version = Bt.version = ie.version = "3.3.4", f = 1, t() && Pt();

  function Tc(t, e) {
    return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
  }

  function Uc(t, e) {
    return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
  }

  function Vc(t, e) {
    return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
  }

  function Wc(t, e) {
    var r = e.s + e.c * t;
    e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e)
  }

  function Xc(t, e) {
    return e.set(e.t, e.p, t ? e.e : e.b, e)
  }

  function Yc(t, e) {
    return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
  }

  function Zc(t, e, r) {
    return t.style[e] = r
  }

  function $c(t, e, r) {
    return t.style.setProperty(e, r)
  }

  function _c(t, e, r) {
    return t._gsap[e] = r
  }

  function ad(t, e, r) {
    return t._gsap.scaleX = t._gsap.scaleY = r
  }

  function bd(t, e, r, i, n) {
    var a = t._gsap;
    a.scaleX = a.scaleY = r, a.renderTransform(n, a)
  }

  function cd(t, e, r, i, n) {
    var a = t._gsap;
    a[e] = r, a.renderTransform(n, a)
  }

  function gd(t, e) {
    var r = ae.createElementNS ? ae.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : ae.createElement(t);
    return r.style ? r : ae.createElement(t)
  }

  function hd(t, e, r) {
    var i = getComputedStyle(t);
    return i[e] || i.getPropertyValue(e.replace(Fe, "-$1").toLowerCase()) || i.getPropertyValue(e) || !r && hd(t, Ne(e) || e, 1) || ""
  }

  function kd() {
    (function _windowExists() {
      return "undefined" != typeof window
    })() && window.document && (ne = window, ae = ne.document, se = ae.documentElement, ue = gd("div") || {
      style: {}
    }, he = gd("div"), Le = Ne(Le), qe = Ne(qe), ue.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", fe = !!Ne("perspective"), oe = 1)
  }

  function ld(t) {
    var e, r = gd("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
      i = this.parentNode,
      n = this.nextSibling,
      a = this.style.cssText;
    if (se.appendChild(r), r.appendChild(this), this.style.display = "block", t) try {
      e = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = ld
    } catch (t) {} else this._gsapBBox && (e = this._gsapBBox());
    return i && (n ? i.insertBefore(this, n) : i.appendChild(this)), se.removeChild(r), this.style.cssText = a, e
  }

  function md(t, e) {
    for (var r = e.length; r--;)
      if (t.hasAttribute(e[r])) return t.getAttribute(e[r])
  }

  function nd(e) {
    var r;
    try {
      r = e.getBBox()
    } catch (t) {
      r = ld.call(e, !0)
    }
    return r && (r.width || r.height) || e.getBBox === ld || (r = ld.call(e, !0)), !r || r.width || r.x || r.y ? r : {
      x: +md(e, ["x", "cx", "x1"]) || 0,
      y: +md(e, ["y", "cy", "y1"]) || 0,
      width: 0,
      height: 0
    }
  }

  function od(t) {
    return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !nd(t))
  }

  function pd(t, e) {
    if (e) {
      var r = t.style;
      e in De && (e = Le), r.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), r.removeProperty(e.replace(Fe, "-$1").toLowerCase())) : r.removeAttribute(e)
    }
  }

  function qd(t, e, r, i, n, a) {
    var s = new ee(t._pt, e, r, 0, 1, a ? Yc : Xc);
    return (t._pt = s).b = i, s.e = n, t._props.push(r), s
  }

  function sd(t, e, r, i) {
    var n, a, s, o, u = parseFloat(r) || 0,
      h = (r + "").trim().substr((u + "").length) || "px",
      l = ue.style,
      f = Re.test(e),
      d = "svg" === t.tagName.toLowerCase(),
      c = (d ? "client" : "offset") + (f ? "Width" : "Height"),
      p = "px" === i,
      _ = "%" === i;
    return i === h || !u || Ue[i] || Ue[h] ? u : ("px" === h || p || (u = sd(t, e, r, "px")), o = t.getCTM && od(t), _ && (De[e] || ~e.indexOf("adius")) ? aa(u / (o ? t.getBBox()[f ? "width" : "height"] : t[c]) * 100) : (l[f ? "width" : "height"] = 100 + (p ? h : i), a = ~e.indexOf("adius") || "em" === i && t.appendChild && !d ? t : t.parentNode, o && (a = (t.ownerSVGElement || {}).parentNode), a && a !== ae && a.appendChild || (a = ae.body), (s = a._gsap) && _ && s.width && f && s.time === Mt.time ? aa(u / s.width * 100) : (!_ && "%" !== h || (l.position = hd(t, "position")), a === t && (l.position = "static"), a.appendChild(ue), n = ue[c], a.removeChild(ue), l.position = "absolute", f && _ && ((s = Z(a)).time = Mt.time, s.width = a[c]), aa(p ? n * u / 100 : n && u ? 100 / n * u : 0))))
  }

  function td(t, e, r, i) {
    var n;
    return oe || kd(), e in Ie && "transform" !== e && ~(e = Ie[e]).indexOf(",") && (e = e.split(",")[0]), De[e] && "transform" !== e ? (n = Ze(t, i), n = "transformOrigin" !== e ? n[e] : Ke(hd(t, qe)) + " " + n.zOrigin + "px") : (n = t.style[e]) && "auto" !== n && !i && !~(n + "").indexOf("calc(") || (n = Xe[e] && Xe[e](t, e, r) || hd(t, e) || $(t, e) || ("opacity" === e ? 1 : 0)), r && !~(n + "").indexOf(" ") ? sd(t, e, n, r) + r : n
  }

  function ud(t, e, r, i) {
    if (!r || "none" === r) {
      var n = Ne(e, t, 1),
        a = n && hd(t, n, 1);
      a && a !== r && (e = n, r = a)
    }
    var s, o, u, h, l, f, d, c, p, _, m, g, v = new ee(this._pt, t.style, e, 0, 1, Wt),
      y = 0,
      T = 0;
    if (v.b = r, v.e = i, r += "", "auto" === (i += "") && (t.style[e] = i, i = hd(t, e) || i, t.style[e] = r), pb(s = [r, i]), i = s[1], u = (r = s[0]).match(tt) || [], (i.match(tt) || []).length) {
      for (; o = tt.exec(i);) d = o[0], p = i.substring(y, o.index), l ? l = (l + 1) % 5 : "rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5) || (l = 1), d !== (f = u[T++] || "") && (h = parseFloat(f) || 0, m = f.substr((h + "").length), (g = "=" === d.charAt(1) ? +(d.charAt(0) + "1") : 0) && (d = d.substr(2)), c = parseFloat(d), _ = d.substr((c + "").length), y = tt.lastIndex - _.length, _ || (_ = _ || U.units[e] || m, y === i.length && (i += _, v.e += _)), m !== _ && (h = sd(t, e, f, _) || 0), v._pt = {
        _next: v._pt,
        p: p || 1 === T ? p : ",",
        s: h,
        c: g ? g * c : c - h,
        m: l && l < 4 ? Math.round : 0
      });
      v.c = y < i.length ? i.substring(y, i.length) : ""
    } else v.r = "display" === e && "none" === i ? Yc : Xc;
    return it.test(i) && (v.e = 0), this._pt = v
  }

  function wd(t) {
    var e = t.split(" "),
      r = e[0],
      i = e[1] || "50%";
    return "top" !== r && "bottom" !== r && "left" !== i && "right" !== i || (t = r, r = i, i = t), e[0] = He[r] || r, e[1] = He[i] || i, e.join(" ")
  }

  function xd(t, e) {
    if (e.tween && e.tween._time === e.tween._dur) {
      var r, i, n, a = e.t,
        s = a.style,
        o = e.u,
        u = a._gsap;
      if ("all" === o || !0 === o) s.cssText = "", i = 1;
      else
        for (n = (o = o.split(",")).length; - 1 < --n;) r = o[n], De[r] && (i = 1, r = "transformOrigin" === r ? qe : Le), pd(a, r);
      i && (pd(a, Le), u && (u.svg && a.removeAttribute("transform"), Ze(a, 1), u.uncache = 1))
    }
  }

  function Bd(t) {
    return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
  }

  function Cd(t) {
    var e = hd(t, Le);
    return Bd(e) ? Ve : e.substr(7).match(J).map(aa)
  }

  function Dd(t, e) {
    var r, i, n, a, s = t._gsap || Z(t),
      o = t.style,
      u = Cd(t);
    return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(n = t.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",") ? Ve : u : (u !== Ve || t.offsetParent || t === se || s.svg || (n = o.display, o.display = "block", (r = t.parentNode) && t.offsetParent || (a = 1, i = t.nextSibling, se.appendChild(t)), u = Cd(t), n ? o.display = n : pd(t, "display"), a && (i ? r.insertBefore(t, i) : r ? r.appendChild(t) : se.removeChild(t))), e && 6 < u.length ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
  }

  function Ed(t, e, r, i, n, a) {
    var s, o, u, h = t._gsap,
      l = n || Dd(t, !0),
      f = h.xOrigin || 0,
      d = h.yOrigin || 0,
      c = h.xOffset || 0,
      p = h.yOffset || 0,
      _ = l[0],
      m = l[1],
      g = l[2],
      v = l[3],
      y = l[4],
      T = l[5],
      b = e.split(" "),
      w = parseFloat(b[0]) || 0,
      x = parseFloat(b[1]) || 0;
    r ? l !== Ve && (o = _ * v - m * g) && (u = w * (-m / o) + x * (_ / o) - (_ * T - m * y) / o, w = w * (v / o) + x * (-g / o) + (g * T - v * y) / o, x = u) : (w = (s = nd(t)).x + (~b[0].indexOf("%") ? w / 100 * s.width : w), x = s.y + (~(b[1] || b[0]).indexOf("%") ? x / 100 * s.height : x)), i || !1 !== i && h.smooth ? (y = w - f, T = x - d, h.xOffset = c + (y * _ + T * g) - y, h.yOffset = p + (y * m + T * v) - T) : h.xOffset = h.yOffset = 0, h.xOrigin = w, h.yOrigin = x, h.smooth = !!i, h.origin = e, h.originIsAbsolute = !!r, t.style[qe] = "0px 0px", a && (qd(a, h, "xOrigin", f, w), qd(a, h, "yOrigin", d, x), qd(a, h, "xOffset", c, h.xOffset), qd(a, h, "yOffset", p, h.yOffset)), t.setAttribute("data-svg-origin", w + " " + x)
  }

  function Hd(t, e, r) {
    var i = Ka(e);
    return aa(parseFloat(e) + parseFloat(sd(t, "x", r + "px", i))) + i
  }

  function Od(t, e, r, i, a, s) {
    var o, u, h = 360,
      l = n(a),
      f = parseFloat(a) * (l && ~a.indexOf("rad") ? Ae : 1),
      d = s ? f * s : f - i,
      c = i + d + "deg";
    return l && ("short" === (o = a.split("_")[1]) && (d %= h) !== d % 180 && (d += d < 0 ? h : -h), "cw" === o && d < 0 ? d = (d + 36e9) % h - ~~(d / h) * h : "ccw" === o && 0 < d && (d = (d - 36e9) % h - ~~(d / h) * h)), t._pt = u = new ee(t._pt, e, r, i, d, Uc), u.e = c, u.u = "deg", t._props.push(r), u
  }

  function Pd(t, e, r) {
    var i, n, a, s, o, u, h, l = he.style,
      f = r._gsap;
    for (n in l.cssText = getComputedStyle(r).cssText + ";position:absolute;display:block;", l[Le] = e, ae.body.appendChild(he), i = Ze(he, 1), De)(a = f[n]) !== (s = i[n]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 && (o = Ka(a) !== (h = Ka(s)) ? sd(r, n, a, h) : parseFloat(a), u = parseFloat(s), t._pt = new ee(t._pt, f, n, o, u - o, Tc), t._pt.u = h || 0, t._props.push(n));
    ae.body.removeChild(he)
  }
  var ne, ae, se, oe, ue, he, le, fe, de = Ct.Power0,
    ce = Ct.Power1,
    pe = Ct.Power2,
    _e = Ct.Power3,
    me = Ct.Power4,
    ge = Ct.Linear,
    ve = Ct.Quad,
    ye = Ct.Cubic,
    Te = Ct.Quart,
    be = Ct.Quint,
    we = Ct.Strong,
    xe = Ct.Elastic,
    ke = Ct.Back,
    Oe = Ct.SteppedEase,
    Me = Ct.Bounce,
    Pe = Ct.Sine,
    Ce = Ct.Expo,
    Se = Ct.Circ,
    De = {},
    Ae = 180 / Math.PI,
    ze = Math.PI / 180,
    Ee = Math.atan2,
    Fe = /([A-Z])/g,
    Re = /(?:left|right|width|margin|padding|x)/i,
    Be = /[\s,\(]\S/,
    Ie = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity"
    },
    Le = "transform",
    qe = Le + "Origin",
    Ye = "O,Moz,ms,Ms,Webkit".split(","),
    Ne = function _checkPropPrefix(t, e, r) {
      var i = (e || ue).style,
        n = 5;
      if (t in i && !r) return t;
      for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(Ye[n] + t in i););
      return n < 0 ? null : (3 === n ? "ms" : 0 <= n ? Ye[n] : "") + t
    },
    Ue = {
      deg: 1,
      rad: 1,
      turn: 1
    },
    He = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%"
    },
    Xe = {
      clearProps: function clearProps(t, e, r, i, n) {
        if ("isFromStart" !== n.data) {
          var a = t._pt = new ee(t._pt, e, r, 0, 0, xd);
          return a.u = i, a.pr = -10, a.tween = n, t._props.push(r), 1
        }
      }
    },
    Ve = [1, 0, 0, 1, 0, 0],
    je = {},
    Ze = function _parseTransform(t, e) {
      var r = t._gsap || new Ft(t);
      if ("x" in r && !e && !r.uncache) return r;
      var i, n, a, s, o, u, h, l, f, d, c, p, _, m, g, v, y, T, b, w, x, k, O, M, P, C, S, D, A, z, E, F, R = t.style,
        B = r.scaleX < 0,
        I = "deg",
        L = hd(t, qe) || "0";
      return i = n = a = u = h = l = f = d = c = 0, s = o = 1, r.svg = !(!t.getCTM || !od(t)), m = Dd(t, r.svg), r.svg && (M = !r.uncache && t.getAttribute("data-svg-origin"), Ed(t, M || L, !!M || r.originIsAbsolute, !1 !== r.smooth, m)), p = r.xOrigin || 0, _ = r.yOrigin || 0, m !== Ve && (T = m[0], b = m[1], w = m[2], x = m[3], i = k = m[4], n = O = m[5], 6 === m.length ? (s = Math.sqrt(T * T + b * b), o = Math.sqrt(x * x + w * w), u = T || b ? Ee(b, T) * Ae : 0, (f = w || x ? Ee(w, x) * Ae + u : 0) && (o *= Math.cos(f * ze)), r.svg && (i -= p - (p * T + _ * w), n -= _ - (p * b + _ * x))) : (F = m[6], z = m[7], S = m[8], D = m[9], A = m[10], E = m[11], i = m[12], n = m[13], a = m[14], h = (g = Ee(F, A)) * Ae, g && (M = k * (v = Math.cos(-g)) + S * (y = Math.sin(-g)), P = O * v + D * y, C = F * v + A * y, S = k * -y + S * v, D = O * -y + D * v, A = F * -y + A * v, E = z * -y + E * v, k = M, O = P, F = C), l = (g = Ee(-w, A)) * Ae, g && (v = Math.cos(-g), E = x * (y = Math.sin(-g)) + E * v, T = M = T * v - S * y, b = P = b * v - D * y, w = C = w * v - A * y), u = (g = Ee(b, T)) * Ae, g && (M = T * (v = Math.cos(g)) + b * (y = Math.sin(g)), P = k * v + O * y, b = b * v - T * y, O = O * v - k * y, T = M, k = P), h && 359.9 < Math.abs(h) + Math.abs(u) && (h = u = 0, l = 180 - l), s = aa(Math.sqrt(T * T + b * b + w * w)), o = aa(Math.sqrt(O * O + F * F)), g = Ee(k, O), f = 2e-4 < Math.abs(g) ? g * Ae : 0, c = E ? 1 / (E < 0 ? -E : E) : 0), r.svg && (M = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !Bd(hd(t, Le)), M && t.setAttribute("transform", M))), 90 < Math.abs(f) && Math.abs(f) < 270 && (B ? (s *= -1, f += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (o *= -1, f += f <= 0 ? 180 : -180)), r.x = ((r.xPercent = i && Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0) ? 0 : i) + "px", r.y = ((r.yPercent = n && Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0) ? 0 : n) + "px", r.z = a + "px", r.scaleX = aa(s), r.scaleY = aa(o), r.rotation = aa(u) + I, r.rotationX = aa(h) + I, r.rotationY = aa(l) + I, r.skewX = f + I, r.skewY = d + I, r.transformPerspective = c + "px", (r.zOrigin = parseFloat(L.split(" ")[2]) || 0) && (R[qe] = Ke(L)), r.xOffset = r.yOffset = 0, r.force3D = U.force3D, r.renderTransform = r.svg ? tr : fe ? Je : Qe, r.uncache = 0, r
    },
    Ke = function _firstTwoOnly(t) {
      return (t = t.split(" "))[0] + " " + t[1]
    },
    Qe = function _renderNon3DTransforms(t, e) {
      e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Je(t, e)
    },
    We = "0deg",
    Ge = "0px",
    $e = ") ",
    Je = function _renderCSSTransforms(t, e) {
      var r = e || this,
        i = r.xPercent,
        n = r.yPercent,
        a = r.x,
        s = r.y,
        o = r.z,
        u = r.rotation,
        h = r.rotationY,
        l = r.rotationX,
        f = r.skewX,
        d = r.skewY,
        c = r.scaleX,
        p = r.scaleY,
        _ = r.transformPerspective,
        m = r.force3D,
        g = r.target,
        v = r.zOrigin,
        y = "",
        T = "auto" === m && t && 1 !== t || !0 === m;
      if (v && (l !== We || h !== We)) {
        var b, w = parseFloat(h) * ze,
          x = Math.sin(w),
          k = Math.cos(w);
        w = parseFloat(l) * ze, b = Math.cos(w), a = Hd(g, a, x * b * -v), s = Hd(g, s, -Math.sin(w) * -v), o = Hd(g, o, k * b * -v + v)
      }
      _ !== Ge && (y += "perspective(" + _ + $e), (i || n) && (y += "translate(" + i + "%, " + n + "%) "), !T && a === Ge && s === Ge && o === Ge || (y += o !== Ge || T ? "translate3d(" + a + ", " + s + ", " + o + ") " : "translate(" + a + ", " + s + $e), u !== We && (y += "rotate(" + u + $e), h !== We && (y += "rotateY(" + h + $e), l !== We && (y += "rotateX(" + l + $e), f === We && d === We || (y += "skew(" + f + ", " + d + $e), 1 === c && 1 === p || (y += "scale(" + c + ", " + p + $e), g.style[Le] = y || "translate(0, 0)"
    },
    tr = function _renderSVGTransforms(t, e) {
      var r, i, n, a, s, o = e || this,
        u = o.xPercent,
        h = o.yPercent,
        l = o.x,
        f = o.y,
        d = o.rotation,
        c = o.skewX,
        p = o.skewY,
        _ = o.scaleX,
        m = o.scaleY,
        g = o.target,
        v = o.xOrigin,
        y = o.yOrigin,
        T = o.xOffset,
        b = o.yOffset,
        w = o.forceCSS,
        x = parseFloat(l),
        k = parseFloat(f);
      d = parseFloat(d), c = parseFloat(c), (p = parseFloat(p)) && (c += p = parseFloat(p), d += p), d || c ? (d *= ze, c *= ze, r = Math.cos(d) * _, i = Math.sin(d) * _, n = Math.sin(d - c) * -m, a = Math.cos(d - c) * m, c && (p *= ze, s = Math.tan(c - p), n *= s = Math.sqrt(1 + s * s), a *= s, p && (s = Math.tan(p), r *= s = Math.sqrt(1 + s * s), i *= s)), r = aa(r), i = aa(i), n = aa(n), a = aa(a)) : (r = _, a = m, i = n = 0), (x && !~(l + "").indexOf("px") || k && !~(f + "").indexOf("px")) && (x = sd(g, "x", l, "px"), k = sd(g, "y", f, "px")), (v || y || T || b) && (x = aa(x + v - (v * r + y * n) + T), k = aa(k + y - (v * i + y * a) + b)), (u || h) && (s = g.getBBox(), x = aa(x + u / 100 * s.width), k = aa(k + h / 100 * s.height)), s = "matrix(" + r + "," + i + "," + n + "," + a + "," + x + "," + k + ")", g.setAttribute("transform", s), w && (g.style[Le] = s)
    };
  _("padding,margin,Width,Radius", function(e, r) {
    var t = "Right",
      i = "Bottom",
      n = "Left",
      o = (r < 3 ? ["Top", t, i, n] : ["Top" + n, "Top" + t, i + t, i + n]).map(function(t) {
        return r < 2 ? e + t : "border" + t + e
      });
    Xe[1 < r ? "border" + e : e] = function(e, t, r, i, n) {
      var a, s;
      if (arguments.length < 4) return a = o.map(function(t) {
        return td(e, t, r)
      }), 5 === (s = a.join(" ")).split(a[0]).length ? a[0] : s;
      a = (i + "").split(" "), s = {}, o.forEach(function(t, e) {
        return s[t] = a[e] = a[e] || a[(e - 1) / 2 | 0]
      }), e.init(t, s, n)
    }
  });
  var er, rr, ir, nr = {
    name: "css",
    register: kd,
    targetTest: function targetTest(t) {
      return t.style && t.nodeType
    },
    init: function init(t, e, r, i, n) {
      var a, s, o, u, h, l, f, d, c, p, _, m, g, v, y, T = this._props,
        b = t.style;
      for (f in oe || kd(), e)
        if ("autoRound" !== f && (s = e[f], !ht[f] || !Lb(f, e, r, i, t, n)))
          if (h = typeof s, l = Xe[f], "function" === h && (h = typeof(s = s.call(r, i, t, n))), "string" === h && ~s.indexOf("random(") && (s = _a(s)), l) l(this, t, f, s, r) && (y = 1);
          else if ("--" === f.substr(0, 2)) this.add(b, "setProperty", getComputedStyle(t).getPropertyValue(f) + "", s + "", i, n, 0, 0, f);
      else {
        if (a = td(t, f), u = parseFloat(a), (p = "string" === h && "=" === s.charAt(1) ? +(s.charAt(0) + "1") : 0) && (s = s.substr(2)), o = parseFloat(s), f in Ie && ("autoAlpha" === f && (1 === u && "hidden" === td(t, "visibility") && o && (u = 0), qd(this, b, "visibility", u ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)), "scale" !== f && "transform" !== f && ~(f = Ie[f]).indexOf(",") && (f = f.split(",")[0])), _ = f in De)
          if (m || ((g = t._gsap).renderTransform || Ze(t), v = !1 !== e.smoothOrigin && g.smooth, (m = this._pt = new ee(this._pt, b, Le, 0, 1, g.renderTransform, g, 0, -1)).dep = 1), "scale" === f) this._pt = new ee(this._pt, g, "scaleY", g.scaleY, p ? p * o : o - g.scaleY), T.push("scaleY", f), f += "X";
          else {
            if ("transformOrigin" === f) {
              s = wd(s), g.svg ? Ed(t, s, 0, v, 0, this) : ((c = parseFloat(s.split(" ")[2]) || 0) !== g.zOrigin && qd(this, g, "zOrigin", g.zOrigin, c), qd(this, b, f, Ke(a), Ke(s)));
              continue
            }
            if ("svgOrigin" === f) {
              Ed(t, s, 1, v, 0, this);
              continue
            }
            if (f in je) {
              Od(this, g, f, u, s, p);
              continue
            }
            if ("smoothOrigin" === f) {
              qd(this, g, "smooth", g.smooth, s);
              continue
            }
            if ("force3D" === f) {
              g[f] = s;
              continue
            }
            if ("transform" === f) {
              Pd(this, s, t);
              continue
            }
          }
        else f in b || (f = Ne(f) || f);
        if (_ || (o || 0 === o) && (u || 0 === u) && !Be.test(s) && f in b)(d = (a + "").substr((u + "").length)) !== (c = (s + "").substr(((o = o || 0) + "").length) || (f in U.units ? U.units[f] : d)) && (u = sd(t, f, a, c)), this._pt = new ee(this._pt, _ ? g : b, f, u, p ? p * o : o - u, "px" !== c || !1 === e.autoRound || _ ? Tc : Wc), this._pt.u = c || 0, d !== c && (this._pt.b = a, this._pt.r = Vc);
        else if (f in b) ud.call(this, t, f, a, s);
        else {
          if (!(f in t)) {
            L(f, s);
            continue
          }
          this.add(t, f, t[f], s, i, n)
        }
        T.push(f)
      }
      y && te(this)
    },
    get: td,
    aliases: Ie,
    getSetter: function getSetter(t, e, r) {
      var i = Ie[e];
      return i && i.indexOf(",") < 0 && (e = i), e in De && e !== qe && (t._gsap.x || td(t, "x")) ? r && le === r ? "scale" === e ? ad : _c : (le = r || {}) && ("scale" === e ? bd : cd) : t.style && !q(t.style[e]) ? Zc : ~e.indexOf("-") ? $c : Zt(t, e)
    },
    core: {
      _removeProperty: pd,
      _getMatrix: Dd
    }
  };
  ie.utils.checkPrefix = Ne, ir = _((er = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (rr = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(t) {
    De[t] = 1
  }), _(rr, function(t) {
    U.units[t] = "deg", je[t] = 1
  }), Ie[ir[13]] = er + "," + rr, _("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(t) {
    var e = t.split(":");
    Ie[e[1]] = ir[e[0]]
  }), _("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
    U.units[t] = "px"
  }), ie.registerPlugin(nr);
  var ar = ie.registerPlugin(nr) || ie,
    sr = ar.core.Tween;
  e.Back = ke, e.Bounce = Me, e.CSSPlugin = nr, e.Circ = Se, e.Cubic = ye, e.Elastic = xe, e.Expo = Ce, e.Linear = ge, e.Power0 = de, e.Power1 = ce, e.Power2 = pe, e.Power3 = _e, e.Power4 = me, e.Quad = ve, e.Quart = Te, e.Quint = be, e.Sine = Pe, e.SteppedEase = Oe, e.Strong = we, e.TimelineLite = Bt, e.TimelineMax = Bt, e.TweenLite = Ht, e.TweenMax = sr, e.default = ar, e.gsap = ar;
  if (typeof(window) === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    })
  } else {
    delete e.default
  }
});


/*!
 * ScrollToPlugin 3.3.4
 * https://greensock.com
 *
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

! function(t, e) {
  "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, function(t) {
  "use strict";

  function k() {
    return "undefined" != typeof window
  }

  function l() {
    return e || k() && (e = window.gsap) && e.registerPlugin && e
  }

  function m(t) {
    return "string" == typeof t
  }

  function n(t, e) {
    var o = "x" === e ? "Width" : "Height",
      n = "scroll" + o,
      r = "client" + o;
    return t === x || t === s || t === f ? Math.max(s[n], f[n]) - (x["inner" + o] || s[r] || f[r]) : t[n] - t["offset" + o]
  }

  function o(t, e) {
    var o = "scroll" + ("x" === e ? "Left" : "Top");
    return t === x && (null != t.pageXOffset ? o = "page" + e.toUpperCase() + "Offset" : t = null != s[o] ? s : f),
      function() {
        return t[o]
      }
  }

  function p(t, e) {
    var n = a(t)[0].getBoundingClientRect(),
      r = !e || e === x || e === f,
      i = r ? {
        top: s.clientTop - (x.pageYOffset || s.scrollTop || f.scrollTop || 0),
        left: s.clientLeft - (x.pageXOffset || s.scrollLeft || f.scrollLeft || 0)
      } : e.getBoundingClientRect(),
      l = {
        x: n.left - i.left,
        y: n.top - i.top
      };
    return !r && e && (l.x += o(e, "x")(), l.y += o(e, "y")()), l
  }

  function q(t, e, o, r) {
    return isNaN(t) || "object" == typeof t ? m(t) && "=" === t.charAt(1) ? parseFloat(t.substr(2)) * ("-" === t.charAt(0) ? -1 : 1) + r : "max" === t ? n(e, o) : Math.min(n(e, o), p(t, e)[o]) : parseFloat(t)
  }

  function r() {
    e = l(), k() && e && document.body && (x = window, f = document.body, s = document.documentElement, a = e.utils.toArray, e.config({
      autoKillThreshold: 7
    }), g = e.config(), u = 1)
  }
  var e, u, x, s, f, a, g, i = {
    version: "3.3.4",
    name: "scrollTo",
    rawVars: 1,
    register: function register(t) {
      e = t, r()
    },
    init: function init(t, e, n, i, l) {
      u || r();
      var s = this;
      s.isWin = t === x, s.target = t, s.tween = n, "object" != typeof e ? m((e = {
        y: e
      }).y) && "max" !== e.y && "=" !== e.y.charAt(1) && (e.x = e.y) : e.nodeType && (e = {
        y: e,
        x: e
      }), s.vars = e, s.autoKill = !!e.autoKill, s.getX = o(t, "x"), s.getY = o(t, "y"), s.x = s.xPrev = s.getX(), s.y = s.yPrev = s.getY(), null != e.x ? (s.add(s, "x", s.x, q(e.x, t, "x", s.x) - (e.offsetX || 0), i, l, Math.round), s._props.push("scrollTo_x")) : s.skipX = 1, null != e.y ? (s.add(s, "y", s.y, q(e.y, t, "y", s.y) - (e.offsetY || 0), i, l, Math.round), s._props.push("scrollTo_y")) : s.skipY = 1
    },
    render: function render(t, e) {
      for (var o, r, i, l, s, u = e._pt, f = e.target, p = e.tween, a = e.autoKill, c = e.xPrev, y = e.yPrev, d = e.isWin; u;) u.r(t, u.d), u = u._next;
      o = d || !e.skipX ? e.getX() : c, i = (r = d || !e.skipY ? e.getY() : y) - y, l = o - c, s = g.autoKillThreshold, e.x < 0 && (e.x = 0), e.y < 0 && (e.y = 0), a && (!e.skipX && (s < l || l < -s) && o < n(f, "x") && (e.skipX = 1), !e.skipY && (s < i || i < -s) && r < n(f, "y") && (e.skipY = 1), e.skipX && e.skipY && (p.kill(), e.vars.onAutoKill && e.vars.onAutoKill.apply(p, e.vars.onAutoKillParams || []))), d ? x.scrollTo(e.skipX ? o : e.x, e.skipY ? r : e.y) : (e.skipY || (f.scrollTop = e.y), e.skipX || (f.scrollLeft = e.x)), e.xPrev = e.x, e.yPrev = e.y
    },
    kill: function kill(t) {
      var e = "scrollTo" === t;
      !e && "scrollTo_x" !== t || (this.skipX = 1), !e && "scrollTo_y" !== t || (this.skipY = 1)
    }
  };
  i.max = n, i.getOffset = p, i.buildGetter = o, l() && e.registerPlugin(i), t.ScrollToPlugin = i, t.default = i;
  if (typeof(window) === "undefined" || window !== t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    })
  } else {
    delete t.default
  }
});


/*!
 * SplitText 3.3.4
 * https://greensock.com
 *
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

! function(D, u) {
  "object" == typeof exports && "undefined" != typeof module ? u(exports) : "function" == typeof define && define.amd ? define(["exports"], u) : u((D = D || self).window = D.window || {})
}(this, function(D) {
  "use strict";
  var b = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;

  function k(D) {
    return e.getComputedStyle(D)
  }

  function n(D, u) {
    var e;
    return i(D) ? D : "string" == (e = typeof D) && !u && D ? E.call(Q.querySelectorAll(D), 0) : D && "object" == e && "length" in D ? E.call(D, 0) : D ? [D] : []
  }

  function o(D) {
    return "absolute" === D.position || !0 === D.absolute
  }

  function p(D, u) {
    for (var e, F = u.length; - 1 < --F;)
      if (e = u[F], D.substr(0, e.length) === e) return e.length
  }

  function r(D, u) {
    void 0 === D && (D = "");
    var e = ~D.indexOf("++"),
      F = 1;
    return e && (D = D.split("++").join("")),
      function() {
        return "<" + u + " style='position:relative;display:inline-block;'" + (D ? " class='" + D + (e ? F++ : "") + "'>" : ">")
      }
  }

  function s(D, u, e) {
    var F = D.nodeType;
    if (1 === F || 9 === F || 11 === F)
      for (D = D.firstChild; D; D = D.nextSibling) s(D, u, e);
    else 3 !== F && 4 !== F || (D.nodeValue = D.nodeValue.split(u).join(e))
  }

  function t(D, u) {
    for (var e = u.length; - 1 < --e;) D.push(u[e])
  }

  function u(D, u, e) {
    for (var F; D && D !== u;) {
      if (F = D._next || D.nextSibling) return F.textContent.charAt(0) === e;
      D = D.parentNode || D._parent
    }
  }

  function v(D) {
    var u, e, F = n(D.childNodes),
      t = F.length;
    for (u = 0; u < t; u++)(e = F[u])._isSplit ? v(e) : (u && 3 === e.previousSibling.nodeType ? e.previousSibling.nodeValue += 3 === e.nodeType ? e.nodeValue : e.firstChild.nodeValue : 3 !== e.nodeType && D.insertBefore(e.firstChild, e), D.removeChild(e))
  }

  function w(D, u) {
    return parseFloat(u[D]) || 0
  }

  function x(D, e, F, C, i, n, E) {
    var r, l, a, p, d, h, B, f, A, c, g, x, y = k(D),
      b = w("paddingLeft", y),
      _ = -999,
      S = w("borderBottomWidth", y) + w("borderTopWidth", y),
      T = w("borderLeftWidth", y) + w("borderRightWidth", y),
      N = w("paddingTop", y) + w("paddingBottom", y),
      m = w("paddingLeft", y) + w("paddingRight", y),
      L = .2 * w("fontSize", y),
      W = y.textAlign,
      H = [],
      O = [],
      V = [],
      j = e.wordDelimiter || " ",
      M = e.tag ? e.tag : e.span ? "span" : "div",
      R = e.type || e.split || "chars,words,lines",
      z = i && ~R.indexOf("lines") ? [] : null,
      P = ~R.indexOf("words"),
      q = ~R.indexOf("chars"),
      G = o(e),
      I = e.linesClass,
      J = ~(I || "").indexOf("++"),
      K = [];
    for (J && (I = I.split("++").join("")), a = (l = D.getElementsByTagName("*")).length, d = [], r = 0; r < a; r++) d[r] = l[r];
    if (z || G)
      for (r = 0; r < a; r++)((h = (p = d[r]).parentNode === D) || G || q && !P) && (x = p.offsetTop, z && h && Math.abs(x - _) > L && ("BR" !== p.nodeName || 0 === r) && (B = [], z.push(B), _ = x), G && (p._x = p.offsetLeft, p._y = x, p._w = p.offsetWidth, p._h = p.offsetHeight), z && ((p._isSplit && h || !q && h || P && h || !P && p.parentNode.parentNode === D && !p.parentNode._isSplit) && (B.push(p), p._x -= b, u(p, D, j) && (p._wordEnd = !0)), "BR" === p.nodeName && (p.nextSibling && "BR" === p.nextSibling.nodeName || 0 === r) && z.push([])));
    for (r = 0; r < a; r++) h = (p = d[r]).parentNode === D, "BR" !== p.nodeName ? (G && (A = p.style, P || h || (p._x += p.parentNode._x, p._y += p.parentNode._y), A.left = p._x + "px", A.top = p._y + "px", A.position = "absolute", A.display = "block", A.width = p._w + 1 + "px", A.height = p._h + "px"), !P && q ? p._isSplit ? (p._next = p.nextSibling, p.parentNode.appendChild(p)) : p.parentNode._isSplit ? (p._parent = p.parentNode, !p.previousSibling && p.firstChild && (p.firstChild._isFirst = !0), p.nextSibling && " " === p.nextSibling.textContent && !p.nextSibling.nextSibling && K.push(p.nextSibling), p._next = p.nextSibling && p.nextSibling._isFirst ? null : p.nextSibling, p.parentNode.removeChild(p), d.splice(r--, 1), a--) : h || (x = !p.nextSibling && u(p.parentNode, D, j), p.parentNode._parent && p.parentNode._parent.appendChild(p), x && p.parentNode.appendChild(Q.createTextNode(" ")), "span" === M && (p.style.display = "inline"), H.push(p)) : p.parentNode._isSplit && !p._isSplit && "" !== p.innerHTML ? O.push(p) : q && !p._isSplit && ("span" === M && (p.style.display = "inline"), H.push(p))) : z || G ? (p.parentNode && p.parentNode.removeChild(p), d.splice(r--, 1), a--) : P || D.appendChild(p);
    for (r = K.length; - 1 < --r;) K[r].parentNode.removeChild(K[r]);
    if (z) {
      for (G && (c = Q.createElement(M), D.appendChild(c), g = c.offsetWidth + "px", x = c.offsetParent === D ? 0 : D.offsetLeft, D.removeChild(c)), A = D.style.cssText, D.style.cssText = "display:none;"; D.firstChild;) D.removeChild(D.firstChild);
      for (f = " " === j && (!G || !P && !q), r = 0; r < z.length; r++) {
        for (B = z[r], (c = Q.createElement(M)).style.cssText = "display:block;text-align:" + W + ";position:" + (G ? "absolute;" : "relative;"), I && (c.className = I + (J ? r + 1 : "")), V.push(c), a = B.length, l = 0; l < a; l++) "BR" !== B[l].nodeName && (p = B[l], c.appendChild(p), f && p._wordEnd && c.appendChild(Q.createTextNode(" ")), G && (0 === l && (c.style.top = p._y + "px", c.style.left = b + x + "px"), p.style.top = "0px", x && (p.style.left = p._x - x + "px")));
        0 === a ? c.innerHTML = "&nbsp;" : P || q || (v(c), s(c, String.fromCharCode(160), " ")), G && (c.style.width = g, c.style.height = p._h + "px"), D.appendChild(c)
      }
      D.style.cssText = A
    }
    G && (E > D.clientHeight && (D.style.height = E - N + "px", D.clientHeight < E && (D.style.height = E + S + "px")), n > D.clientWidth && (D.style.width = n - m + "px", D.clientWidth < n && (D.style.width = n + T + "px"))), t(F, H), P && t(C, O), t(i, V)
  }

  function y(D, u, e, F) {
    var t, C, i, n, E, r, l, a, d = u.tag ? u.tag : u.span ? "span" : "div",
      h = ~(u.type || u.split || "chars,words,lines").indexOf("chars"),
      B = o(u),
      f = u.wordDelimiter || " ",
      A = " " !== f ? "" : B ? "&#173; " : " ",
      c = "</" + d + ">",
      g = 1,
      x = u.specialChars ? "function" == typeof u.specialChars ? u.specialChars : p : null,
      y = Q.createElement("div"),
      v = D.parentNode;
    for (v.insertBefore(y, D), y.textContent = D.nodeValue, v.removeChild(D), l = -1 !== (t = function getText(D) {
        var u = D.nodeType,
          e = "";
        if (1 === u || 9 === u || 11 === u) {
          if ("string" == typeof D.textContent) return D.textContent;
          for (D = D.firstChild; D; D = D.nextSibling) e += getText(D)
        } else if (3 === u || 4 === u) return D.nodeValue;
        return e
      }(D = y)).indexOf("<"), !1 !== u.reduceWhiteSpace && (t = t.replace(S, " ").replace(_, "")), l && (t = t.split("<").join("{{LT}}")), E = t.length, C = (" " === t.charAt(0) ? A : "") + e(), i = 0; i < E; i++)
      if (r = t.charAt(i), x && (a = x(t.substr(i), u.specialChars))) r = t.substr(i, a || 1), C += h && " " !== r ? F() + r + "</" + d + ">" : r, i += a - 1;
      else if (r === f && t.charAt(i - 1) !== f && i) {
      for (C += g ? c : "", g = 0; t.charAt(i + 1) === f;) C += A, i++;
      i === E - 1 ? C += A : ")" !== t.charAt(i + 1) && (C += A + e(), g = 1)
    } else "{" === r && "{{LT}}" === t.substr(i, 6) ? (C += h ? F() + "{{LT}}</" + d + ">" : "{{LT}}", i += 5) : 55296 <= r.charCodeAt(0) && r.charCodeAt(0) <= 56319 || 65024 <= t.charCodeAt(i + 1) && t.charCodeAt(i + 1) <= 65039 ? (n = ((t.substr(i, 12).split(b) || [])[1] || "").length || 2, C += h && " " !== r ? F() + t.substr(i, n) + "</" + d + ">" : t.substr(i, n), i += n - 1) : C += h && " " !== r ? F() + r + "</" + d + ">" : r;
    D.outerHTML = C + (g ? c : ""), l && s(v, "{{LT}}", "<")
  }

  function z(D, u, e, F) {
    var t, C, i = n(D.childNodes),
      E = i.length,
      s = o(u);
    if (3 !== D.nodeType || 1 < E) {
      for (u.absolute = !1, t = 0; t < E; t++) 3 === (C = i[t]).nodeType && !/\S+/.test(C.nodeValue) || (s && 3 !== C.nodeType && "inline" === k(C).display && (C.style.display = "inline-block", C.style.position = "relative"), C._isSplit = !0, z(C, u, e, F));
      return u.absolute = s, void(D._isSplit = !0)
    }
    y(D, u, e, F)
  }
  var Q, e, F, C, _ = /(?:\r|\n|\t\t)/g,
    S = /(?:\s\s+)/g,
    i = Array.isArray,
    E = [].slice,
    l = ((C = SplitText.prototype).split = function split(D) {
      this.isSplit && this.revert(), this.vars = D = D || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
      for (var u, e, F, t = this.elements.length, C = D.tag ? D.tag : D.span ? "span" : "div", i = r(D.wordsClass, C), n = r(D.charsClass, C); - 1 < --t;) F = this.elements[t], this._originals[t] = F.innerHTML, u = F.clientHeight, e = F.clientWidth, z(F, D, i, n), x(F, D, this.chars, this.words, this.lines, e, u);
      return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
    }, C.revert = function revert() {
      var e = this._originals;
      if (!e) throw "revert() call wasn't scoped properly.";
      return this.elements.forEach(function(D, u) {
        return D.innerHTML = e[u]
      }), this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
    }, SplitText.create = function create(D, u) {
      return new SplitText(D, u)
    }, SplitText);

  function SplitText(D, u) {
    F || function _initCore() {
      Q = document, e = window, F = 1
    }(), this.elements = n(D), this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = u || {}, this.split(u)
  }
  l.version = "3.3.4", D.SplitText = l, D.default = l;
  if (typeof(window) === "undefined" || window !== D) {
    Object.defineProperty(D, "__esModule", {
      value: !0
    })
  } else {
    delete D.default
  }
});


/*!
 * DrawSVGPlugin 3.3.4
 * https://greensock.com
 *
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

! function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {})
}(this, function(e) {
  "use strict";

  function i() {
    return "undefined" != typeof window
  }

  function j() {
    return t || i() && (t = window.gsap) && t.registerPlugin && t
  }

  function m(e) {
    return Math.round(1e4 * e) / 1e4
  }

  function n(e) {
    return parseFloat(e || 0)
  }

  function o(e, t) {
    return n(e.getAttribute(t))
  }

  function q(e, t, s, r, i, o) {
    return P(Math.pow((n(s) - n(e)) * i, 2) + Math.pow((n(r) - n(t)) * o, 2))
  }

  function r(e) {
    return console.warn(e)
  }

  function s(e) {
    return "non-scaling-stroke" === e.getAttribute("vector-effect")
  }

  function v(e) {
    if (!(e = k(e)[0])) return 0;
    var t, n, i, a, f, h, d, l = e.tagName.toLowerCase(),
      u = e.style,
      c = 1,
      g = 1;
    s(e) && (g = e.getScreenCTM(), c = P(g.a * g.a + g.b * g.b), g = P(g.d * g.d + g.c * g.c));
    try {
      n = e.getBBox()
    } catch (e) {
      r("Some browsers won't measure invisible elements (like display:none or masks inside defs).")
    }
    var _ = n || {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      },
      p = _.x,
      x = _.y,
      y = _.width,
      m = _.height;
    if (n && (y || m) || !M[l] || (y = o(e, M[l][0]), m = o(e, M[l][1]), "rect" !== l && "line" !== l && (y *= 2, m *= 2), "line" === l && (p = o(e, "x1"), x = o(e, "y1"), y = Math.abs(y - p), m = Math.abs(m - x))), "path" === l) a = u.strokeDasharray, u.strokeDasharray = "none", t = e.getTotalLength() || 0, c !== g && r("Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."), t *= (c + g) / 2, u.strokeDasharray = a;
    else if ("rect" === l) t = 2 * y * c + 2 * m * g;
    else if ("line" === l) t = q(p, x, p + y, x + m, c, g);
    else if ("polyline" === l || "polygon" === l)
      for (i = e.getAttribute("points").match(b) || [], "polygon" === l && i.push(i[0], i[1]), t = 0, f = 2; f < i.length; f += 2) t += q(i[f - 2], i[f - 1], i[f], i[f + 1], c, g) || 0;
    else "circle" !== l && "ellipse" !== l || (h = y / 2 * c, d = m / 2 * g, t = Math.PI * (3 * (h + d) - P((3 * h + d) * (h + 3 * d))));
    return t || 0
  }

  function w(e, t) {
    if (!(e = k(e)[0])) return [0, 0];
    t = t || v(e) + 1;
    var s = h.getComputedStyle(e),
      r = s.strokeDasharray || "",
      i = n(s.strokeDashoffset),
      o = r.indexOf(",");
    return o < 0 && (o = r.indexOf(" ")), t < (r = o < 0 ? t : n(r.substr(0, o)) || 1e-5) && (r = t), [Math.max(0, -i), Math.max(0, r - i)]
  }

  function x() {
    i() && (h = window, l = t = j(), k = t.utils.toArray, d = -1 !== ((h.navigator || {}).userAgent || "").indexOf("Edge"))
  }
  var t, k, h, d, l, b = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
    M = {
      rect: ["width", "height"],
      circle: ["r", "r"],
      ellipse: ["rx", "ry"],
      line: ["x2", "y2"]
    },
    P = Math.sqrt,
    a = {
      version: "3.3.4",
      name: "drawSVG",
      register: function register(e) {
        t = e, x()
      },
      init: function init(e, t) {
        if (!e.getBBox) return !1;
        l || x();
        var r, i, o, a, f = v(e) + 1;
        return this._style = e.style, this._target = e, t + "" == "true" ? t = "0 100%" : t ? -1 === (t + "").indexOf(" ") && (t = "0 " + t) : t = "0 0", i = function _parse(e, t, s) {
          var r, i, o = e.indexOf(" ");
          return i = o < 0 ? (r = void 0 !== s ? s + "" : e, e) : (r = e.substr(0, o), e.substr(o + 1)), r = ~r.indexOf("%") ? n(r) / 100 * t : n(r), (i = ~i.indexOf("%") ? n(i) / 100 * t : n(i)) < r ? [i, r] : [r, i]
        }(t, f, (r = w(e, f))[0]), this._length = m(f + 10), 0 === r[0] && 0 === i[0] ? (o = Math.max(1e-5, i[1] - f), this._dash = m(f + o), this._offset = m(f - r[1] + o), this._offsetPT = this.add(this, "_offset", this._offset, m(f - i[1] + o))) : (this._dash = m(r[1] - r[0]) || 1e-6, this._offset = m(-r[0]), this._dashPT = this.add(this, "_dash", this._dash, m(i[1] - i[0]) || 1e-5), this._offsetPT = this.add(this, "_offset", this._offset, m(-i[0]))), d && (a = h.getComputedStyle(e)).strokeLinecap !== a.strokeLinejoin && (i = n(a.strokeMiterlimit), this.add(e.style, "strokeMiterlimit", i, i + .01)), this._live = s(e) || ~(t + "").indexOf("live"), this._props.push("drawSVG"), 1
      },
      render: function render(e, t) {
        var n, s, r, i, o = t._pt,
          a = t._style;
        if (o) {
          for (t._live && (n = v(t._target) + 11) !== t._length && (s = n / t._length, t._length = n, t._offsetPT.s *= s, t._offsetPT.c *= s, t._dashPT ? (t._dashPT.s *= s, t._dashPT.c *= s) : t._dash *= s); o;) o.r(e, o.d), o = o._next;
          r = t._dash, i = t._offset, n = t._length, a.strokeDashoffset = t._offset, 1 !== e && e ? a.strokeDasharray = r + "px," + n + "px" : (r - i < .001 && n - r <= 10 && (a.strokeDashoffset = i + 1), a.strokeDasharray = i < .001 && n - r <= 10 ? "none" : i === r ? "0px, 999999px" : r + "px," + n + "px")
        }
      },
      getLength: v,
      getPosition: w
    };
  j() && t.registerPlugin(a), e.DrawSVGPlugin = a, e.default = a;
  if (typeof(window) === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    })
  } else {
    delete e.default
  }
});


! function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).GLightbox = t()
}(this, (function() {
  "use strict";

  function e(t) {
    return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
      return typeof e
    } : function(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(t)
  }

  function t(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }

  function i(e, t) {
    for (var i = 0; i < t.length; i++) {
      var n = t[i];
      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
    }
  }

  function n(e, t, n) {
    return t && i(e.prototype, t), n && i(e, n), e
  }

  function s(e) {
    return function(e) {
      if (Array.isArray(e)) return l(e)
    }(e) || function(e) {
      if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
    }(e) || function(e, t) {
      if (!e) return;
      if ("string" == typeof e) return l(e, t);
      var i = Object.prototype.toString.call(e).slice(8, -1);
      "Object" === i && e.constructor && (i = e.constructor.name);
      if ("Map" === i || "Set" === i) return Array.from(e);
      if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return l(e, t)
    }(e) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
  }

  function l(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
    return n
  }
  var o = Date.now();

  function r() {
    var e = {},
      t = !0,
      i = 0,
      n = arguments.length;
    "[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (t = arguments[0], i++);
    for (var s = function(i) {
        for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t && "[object Object]" === Object.prototype.toString.call(i[n]) ? e[n] = r(!0, e[n], i[n]) : e[n] = i[n])
      }; i < n; i++) {
      var l = arguments[i];
      s(l)
    }
    return e
  }

  function a(e, t) {
    if ((A(e) || e === window || e === document) && (e = [e]), I(e) || O(e) || (e = [e]), 0 != X(e))
      if (I(e) && !O(e))
        for (var i = e.length, n = 0; n < i && !1 !== t.call(e[n], e[n], n, e); n++);
      else if (O(e))
      for (var s in e)
        if (M(e, s) && !1 === t.call(e[s], e[s], s, e)) break
  }

  function h(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
      i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
      n = e[o] = e[o] || [],
      s = {
        all: n,
        evt: null,
        found: null
      };
    return t && i && X(n) > 0 && a(n, (function(e, n) {
      if (e.eventName == t && e.fn.toString() == i.toString()) return s.found = !0, s.evt = n, !1
    })), s
  }

  function c(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      i = t.onElement,
      n = t.withCallback,
      s = t.avoidDuplicate,
      l = void 0 === s || s,
      o = t.once,
      r = void 0 !== o && o,
      c = t.useCapture,
      d = void 0 !== c && c,
      u = arguments.length > 2 ? arguments[2] : void 0,
      g = i || [];

    function v(e) {
      C(n) && n.call(u, e, this), r && v.destroy()
    }
    return E(g) && (g = document.querySelectorAll(g)), v.destroy = function() {
      a(g, (function(t) {
        var i = h(t, e, v);
        i.found && i.all.splice(i.evt, 1), t.removeEventListener && t.removeEventListener(e, v, d)
      }))
    }, a(g, (function(t) {
      var i = h(t, e, v);
      (t.addEventListener && l && !i.found || !l) && (t.addEventListener(e, v, d), i.all.push({
        eventName: e,
        fn: v
      }))
    })), v
  }

  function d(e, t) {
    a(t.split(" "), (function(t) {
      return e.classList.add(t)
    }))
  }

  function u(e, t) {
    a(t.split(" "), (function(t) {
      return e.classList.remove(t)
    }))
  }

  function g(e, t) {
    return e.classList.contains(t)
  }

  function v(e, t) {
    for (; e !== document.body;) {
      if (!(e = e.parentElement)) return !1;
      if ("function" == typeof e.matches ? e.matches(t) : e.msMatchesSelector(t)) return e
    }
  }

  function f(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
      i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (!e || "" === t) return !1;
    if ("none" == t) return C(i) && i(), !1;
    var n = S(),
      s = t.split(" ");
    a(s, (function(t) {
      d(e, "g" + t)
    })), c(n, {
      onElement: e,
      avoidDuplicate: !1,
      once: !0,
      withCallback: function(e, t) {
        a(s, (function(e) {
          u(t, "g" + e)
        })), C(i) && i()
      }
    })
  }

  function p(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
    if ("" == t) return e.style.webkitTransform = "", e.style.MozTransform = "", e.style.msTransform = "", e.style.OTransform = "", e.style.transform = "", !1;
    e.style.webkitTransform = t, e.style.MozTransform = t, e.style.msTransform = t, e.style.OTransform = t, e.style.transform = t
  }

  function m(e) {
    e.style.display = "block"
  }

  function y(e) {
    e.style.display = "none"
  }

  function x(e) {
    var t = document.createDocumentFragment(),
      i = document.createElement("div");
    for (i.innerHTML = e; i.firstChild;) t.appendChild(i.firstChild);
    return t
  }

  function b() {
    return {
      width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
      height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    }
  }

  function S() {
    var e, t = document.createElement("fakeelement"),
      i = {
        animation: "animationend",
        OAnimation: "oAnimationEnd",
        MozAnimation: "animationend",
        WebkitAnimation: "webkitAnimationEnd"
      };
    for (e in i)
      if (void 0 !== t.style[e]) return i[e]
  }

  function w(e, t, i, n) {
    if (e()) t();
    else {
      var s;
      i || (i = 100);
      var l = setInterval((function() {
        e() && (clearInterval(l), s && clearTimeout(s), t())
      }), i);
      n && (s = setTimeout((function() {
        clearInterval(l)
      }), n))
    }
  }

  function T(e, t, i) {
    if (P(e)) console.error("Inject assets error");
    else if (C(t) && (i = t, t = !1), E(t) && t in window) C(i) && i();
    else {
      var n;
      if (-1 !== e.indexOf(".css")) {
        if ((n = document.querySelectorAll('link[href="' + e + '"]')) && n.length > 0) return void(C(i) && i());
        var s = document.getElementsByTagName("head")[0],
          l = s.querySelectorAll('link[rel="stylesheet"]'),
          o = document.createElement("link");
        return o.rel = "stylesheet", o.type = "text/css", o.href = e, o.media = "all", l ? s.insertBefore(o, l[0]) : s.appendChild(o), void(C(i) && i())
      }
      if ((n = document.querySelectorAll('script[src="' + e + '"]')) && n.length > 0) {
        if (C(i)) {
          if (E(t)) return w((function() {
            return void 0 !== window[t]
          }), (function() {
            i()
          })), !1;
          i()
        }
      } else {
        var r = document.createElement("script");
        r.type = "text/javascript", r.src = e, r.onload = function() {
          if (C(i)) {
            if (E(t)) return w((function() {
              return void 0 !== window[t]
            }), (function() {
              i()
            })), !1;
            i()
          }
        }, document.body.appendChild(r)
      }
    }
  }

  function k() {
    return "navigator" in window && window.navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i)
  }

  function C(e) {
    return "function" == typeof e
  }

  function E(e) {
    return "string" == typeof e
  }

  function A(e) {
    return !(!e || !e.nodeType || 1 != e.nodeType)
  }

  function L(e) {
    return Array.isArray(e)
  }

  function I(e) {
    return e && e.length && isFinite(e.length)
  }

  function O(t) {
    return "object" === e(t) && null != t && !C(t) && !L(t)
  }

  function P(e) {
    return null == e
  }

  function M(e, t) {
    return null !== e && hasOwnProperty.call(e, t)
  }

  function X(e) {
    if (O(e)) {
      if (e.keys) return e.keys().length;
      var t = 0;
      for (var i in e) M(e, i) && t++;
      return t
    }
    return e.length
  }

  function z(e) {
    return !isNaN(parseFloat(e)) && isFinite(e)
  }

  function Y(e) {
    if (e.events.hasOwnProperty("keyboard")) return !1;
    e.events.keyboard = c("keydown", {
      onElement: window,
      withCallback: function(t, i) {
        var n = (t = t || window.event).keyCode;
        if (9 == n) {
          var l = !(!document.activeElement || !document.activeElement.nodeName) && document.activeElement.nodeName.toLocaleLowerCase();
          if ("input" == l || "textarea" == l || "button" == l) return;
          t.preventDefault();
          var o = document.querySelectorAll(".gbtn");
          if (!o || o.length <= 0) return;
          var r = s(o).filter((function(e) {
            return g(e, "focused")
          }));
          if (!r.length) {
            var a = document.querySelector('.gbtn[tabindex="0"]');
            return void(a && (a.focus(), d(a, "focused")))
          }
          o.forEach((function(e) {
            return u(e, "focused")
          }));
          var h = r[0].getAttribute("tabindex");
          h = h || "0";
          var c = parseInt(h) + 1;
          c > o.length - 1 && (c = "0");
          var v = document.querySelector('.gbtn[tabindex="'.concat(c, '"]'));
          v && (v.focus(), d(v, "focused"))
        }
        39 == n && e.nextSlide(), 37 == n && e.prevSlide(), 27 == n && e.close()
      }
    })
  }

  function q(e) {
    return Math.sqrt(e.x * e.x + e.y * e.y)
  }

  function D(e, t) {
    var i = function(e, t) {
      var i = q(e) * q(t);
      if (0 === i) return 0;
      var n = function(e, t) {
        return e.x * t.x + e.y * t.y
      }(e, t) / i;
      return n > 1 && (n = 1), Math.acos(n)
    }(e, t);
    return function(e, t) {
      return e.x * t.y - t.x * e.y
    }(e, t) > 0 && (i *= -1), 180 * i / Math.PI
  }
  var N = function() {
    function e(i) {
      t(this, e), this.handlers = [], this.el = i
    }
    return n(e, [{
      key: "add",
      value: function(e) {
        this.handlers.push(e)
      }
    }, {
      key: "del",
      value: function(e) {
        e || (this.handlers = []);
        for (var t = this.handlers.length; t >= 0; t--) this.handlers[t] === e && this.handlers.splice(t, 1)
      }
    }, {
      key: "dispatch",
      value: function() {
        for (var e = 0, t = this.handlers.length; e < t; e++) {
          var i = this.handlers[e];
          "function" == typeof i && i.apply(this.el, arguments)
        }
      }
    }]), e
  }();

  function _(e, t) {
    var i = new N(e);
    return i.add(t), i
  }
  var B = function() {
    function e(i, n) {
      t(this, e), this.element = "string" == typeof i ? document.querySelector(i) : i, this.start = this.start.bind(this), this.move = this.move.bind(this), this.end = this.end.bind(this), this.cancel = this.cancel.bind(this), this.element.addEventListener("touchstart", this.start, !1), this.element.addEventListener("touchmove", this.move, !1), this.element.addEventListener("touchend", this.end, !1), this.element.addEventListener("touchcancel", this.cancel, !1), this.preV = {
        x: null,
        y: null
      }, this.pinchStartLen = null, this.zoom = 1, this.isDoubleTap = !1;
      var s = function() {};
      this.rotate = _(this.element, n.rotate || s), this.touchStart = _(this.element, n.touchStart || s), this.multipointStart = _(this.element, n.multipointStart || s), this.multipointEnd = _(this.element, n.multipointEnd || s), this.pinch = _(this.element, n.pinch || s), this.swipe = _(this.element, n.swipe || s), this.tap = _(this.element, n.tap || s), this.doubleTap = _(this.element, n.doubleTap || s), this.longTap = _(this.element, n.longTap || s), this.singleTap = _(this.element, n.singleTap || s), this.pressMove = _(this.element, n.pressMove || s), this.twoFingerPressMove = _(this.element, n.twoFingerPressMove || s), this.touchMove = _(this.element, n.touchMove || s), this.touchEnd = _(this.element, n.touchEnd || s), this.touchCancel = _(this.element, n.touchCancel || s), this._cancelAllHandler = this.cancelAll.bind(this), window.addEventListener("scroll", this._cancelAllHandler), this.delta = null, this.last = null, this.now = null, this.tapTimeout = null, this.singleTapTimeout = null, this.longTapTimeout = null, this.swipeTimeout = null, this.x1 = this.x2 = this.y1 = this.y2 = null, this.preTapPosition = {
        x: null,
        y: null
      }
    }
    return n(e, [{
      key: "start",
      value: function(e) {
        if (e.touches) {
          this.now = Date.now(), this.x1 = e.touches[0].pageX, this.y1 = e.touches[0].pageY, this.delta = this.now - (this.last || this.now), this.touchStart.dispatch(e, this.element), null !== this.preTapPosition.x && (this.isDoubleTap = this.delta > 0 && this.delta <= 250 && Math.abs(this.preTapPosition.x - this.x1) < 30 && Math.abs(this.preTapPosition.y - this.y1) < 30, this.isDoubleTap && clearTimeout(this.singleTapTimeout)), this.preTapPosition.x = this.x1, this.preTapPosition.y = this.y1, this.last = this.now;
          var t = this.preV;
          if (e.touches.length > 1) {
            this._cancelLongTap(), this._cancelSingleTap();
            var i = {
              x: e.touches[1].pageX - this.x1,
              y: e.touches[1].pageY - this.y1
            };
            t.x = i.x, t.y = i.y, this.pinchStartLen = q(t), this.multipointStart.dispatch(e, this.element)
          }
          this._preventTap = !1, this.longTapTimeout = setTimeout(function() {
            this.longTap.dispatch(e, this.element), this._preventTap = !0
          }.bind(this), 750)
        }
      }
    }, {
      key: "move",
      value: function(e) {
        if (e.touches) {
          var t = this.preV,
            i = e.touches.length,
            n = e.touches[0].pageX,
            s = e.touches[0].pageY;
          if (this.isDoubleTap = !1, i > 1) {
            var l = e.touches[1].pageX,
              o = e.touches[1].pageY,
              r = {
                x: e.touches[1].pageX - n,
                y: e.touches[1].pageY - s
              };
            null !== t.x && (this.pinchStartLen > 0 && (e.zoom = q(r) / this.pinchStartLen, this.pinch.dispatch(e, this.element)), e.angle = D(r, t), this.rotate.dispatch(e, this.element)), t.x = r.x, t.y = r.y, null !== this.x2 && null !== this.sx2 ? (e.deltaX = (n - this.x2 + l - this.sx2) / 2, e.deltaY = (s - this.y2 + o - this.sy2) / 2) : (e.deltaX = 0, e.deltaY = 0), this.twoFingerPressMove.dispatch(e, this.element), this.sx2 = l, this.sy2 = o
          } else {
            if (null !== this.x2) {
              e.deltaX = n - this.x2, e.deltaY = s - this.y2;
              var a = Math.abs(this.x1 - this.x2),
                h = Math.abs(this.y1 - this.y2);
              (a > 10 || h > 10) && (this._preventTap = !0)
            } else e.deltaX = 0, e.deltaY = 0;
            this.pressMove.dispatch(e, this.element)
          }
          this.touchMove.dispatch(e, this.element), this._cancelLongTap(), this.x2 = n, this.y2 = s, i > 1 && e.preventDefault()
        }
      }
    }, {
      key: "end",
      value: function(e) {
        if (e.changedTouches) {
          this._cancelLongTap();
          var t = this;
          e.touches.length < 2 && (this.multipointEnd.dispatch(e, this.element), this.sx2 = this.sy2 = null), this.x2 && Math.abs(this.x1 - this.x2) > 30 || this.y2 && Math.abs(this.y1 - this.y2) > 30 ? (e.direction = this._swipeDirection(this.x1, this.x2, this.y1, this.y2), this.swipeTimeout = setTimeout((function() {
            t.swipe.dispatch(e, t.element)
          }), 0)) : (this.tapTimeout = setTimeout((function() {
            t._preventTap || t.tap.dispatch(e, t.element), t.isDoubleTap && (t.doubleTap.dispatch(e, t.element), t.isDoubleTap = !1)
          }), 0), t.isDoubleTap || (t.singleTapTimeout = setTimeout((function() {
            t.singleTap.dispatch(e, t.element)
          }), 250))), this.touchEnd.dispatch(e, this.element), this.preV.x = 0, this.preV.y = 0, this.zoom = 1, this.pinchStartLen = null, this.x1 = this.x2 = this.y1 = this.y2 = null
        }
      }
    }, {
      key: "cancelAll",
      value: function() {
        this._preventTap = !0, clearTimeout(this.singleTapTimeout), clearTimeout(this.tapTimeout), clearTimeout(this.longTapTimeout), clearTimeout(this.swipeTimeout)
      }
    }, {
      key: "cancel",
      value: function(e) {
        this.cancelAll(), this.touchCancel.dispatch(e, this.element)
      }
    }, {
      key: "_cancelLongTap",
      value: function() {
        clearTimeout(this.longTapTimeout)
      }
    }, {
      key: "_cancelSingleTap",
      value: function() {
        clearTimeout(this.singleTapTimeout)
      }
    }, {
      key: "_swipeDirection",
      value: function(e, t, i, n) {
        return Math.abs(e - t) >= Math.abs(i - n) ? e - t > 0 ? "Left" : "Right" : i - n > 0 ? "Up" : "Down"
      }
    }, {
      key: "on",
      value: function(e, t) {
        this[e] && this[e].add(t)
      }
    }, {
      key: "off",
      value: function(e, t) {
        this[e] && this[e].del(t)
      }
    }, {
      key: "destroy",
      value: function() {
        return this.singleTapTimeout && clearTimeout(this.singleTapTimeout), this.tapTimeout && clearTimeout(this.tapTimeout), this.longTapTimeout && clearTimeout(this.longTapTimeout), this.swipeTimeout && clearTimeout(this.swipeTimeout), this.element.removeEventListener("touchstart", this.start), this.element.removeEventListener("touchmove", this.move), this.element.removeEventListener("touchend", this.end), this.element.removeEventListener("touchcancel", this.cancel), this.rotate.del(), this.touchStart.del(), this.multipointStart.del(), this.multipointEnd.del(), this.pinch.del(), this.swipe.del(), this.tap.del(), this.doubleTap.del(), this.longTap.del(), this.singleTap.del(), this.pressMove.del(), this.twoFingerPressMove.del(), this.touchMove.del(), this.touchEnd.del(), this.touchCancel.del(), this.preV = this.pinchStartLen = this.zoom = this.isDoubleTap = this.delta = this.last = this.now = this.tapTimeout = this.singleTapTimeout = this.longTapTimeout = this.swipeTimeout = this.x1 = this.x2 = this.y1 = this.y2 = this.preTapPosition = this.rotate = this.touchStart = this.multipointStart = this.multipointEnd = this.pinch = this.swipe = this.tap = this.doubleTap = this.longTap = this.singleTap = this.pressMove = this.touchMove = this.touchEnd = this.touchCancel = this.twoFingerPressMove = null, window.removeEventListener("scroll", this._cancelAllHandler), null
      }
    }]), e
  }();

  function W(e) {
    var t = function() {
        var e, t = document.createElement("fakeelement"),
          i = {
            transition: "transitionend",
            OTransition: "oTransitionEnd",
            MozTransition: "transitionend",
            WebkitTransition: "webkitTransitionEnd"
          };
        for (e in i)
          if (void 0 !== t.style[e]) return i[e]
      }(),
      i = g(e, "gslide-media") ? e : e.querySelector(".gslide-media"),
      n = e.querySelector(".gslide-description");
    d(i, "greset"), p(i, "translate3d(0, 0, 0)"), c(t, {
      onElement: i,
      once: !0,
      withCallback: function(e, t) {
        u(i, "greset")
      }
    }), i.style.opacity = "", n && (n.style.opacity = "")
  }

  function H(e) {
    if (e.events.hasOwnProperty("touch")) return !1;
    var t, i, n, s = b(),
      l = s.width,
      o = s.height,
      r = !1,
      a = null,
      h = null,
      c = null,
      f = !1,
      m = 1,
      y = 1,
      x = !1,
      S = !1,
      w = null,
      T = null,
      k = null,
      C = null,
      E = 0,
      A = 0,
      L = !1,
      I = !1,
      O = {},
      P = {},
      M = 0,
      X = 0,
      z = document.getElementById("glightbox-slider"),
      Y = document.querySelector(".goverlay"),
      q = new B(z, {
        touchStart: function(t) {
          if (r = !0, (g(t.targetTouches[0].target, "ginner-container") || v(t.targetTouches[0].target, ".gslide-desc") || "a" == t.targetTouches[0].target.nodeName.toLowerCase()) && (r = !1), v(t.targetTouches[0].target, ".gslide-inline") && !g(t.targetTouches[0].target.parentNode, "gslide-inline") && (r = !1), r) {
            if (P = t.targetTouches[0], O.pageX = t.targetTouches[0].pageX, O.pageY = t.targetTouches[0].pageY, M = t.targetTouches[0].clientX, X = t.targetTouches[0].clientY, a = e.activeSlide, h = a.querySelector(".gslide-media"), n = a.querySelector(".gslide-inline"), c = null, g(h, "gslide-image") && (c = h.querySelector("img")), u(Y, "greset"), t.pageX > 20 && t.pageX < window.innerWidth - 20) return;
            t.preventDefault()
          }
        },
        touchMove: function(s) {
          if (r && (P = s.targetTouches[0], !x && !S)) {
            if (n && n.offsetHeight > o) {
              var a = O.pageX - P.pageX;
              if (Math.abs(a) <= 13) return !1
            }
            f = !0;
            var d, u = s.targetTouches[0].clientX,
              g = s.targetTouches[0].clientY,
              v = M - u,
              m = X - g;
            if (Math.abs(v) > Math.abs(m) ? (L = !1, I = !0) : (I = !1, L = !0), t = P.pageX - O.pageX, E = 100 * t / l, i = P.pageY - O.pageY, A = 100 * i / o, L && c && (d = 1 - Math.abs(i) / o, Y.style.opacity = d, e.settings.touchFollowAxis && (E = 0)), I && (d = 1 - Math.abs(t) / l, h.style.opacity = d, e.settings.touchFollowAxis && (A = 0)), !c) return p(h, "translate3d(".concat(E, "%, 0, 0)"));
            p(h, "translate3d(".concat(E, "%, ").concat(A, "%, 0)"))
          }
        },
        touchEnd: function() {
          if (r) {
            if (f = !1, S || x) return k = w, void(C = T);
            var t = Math.abs(parseInt(A)),
              i = Math.abs(parseInt(E));
            if (!(t > 29 && c)) return t < 29 && i < 25 ? (d(Y, "greset"), Y.style.opacity = 1, W(h)) : void 0;
            e.close()
          }
        },
        multipointEnd: function() {
          setTimeout((function() {
            x = !1
          }), 50)
        },
        multipointStart: function() {
          x = !0, m = y || 1
        },
        pinch: function(e) {
          if (!c || f) return !1;
          x = !0, c.scaleX = c.scaleY = m * e.zoom;
          var t = m * e.zoom;
          if (S = !0, t <= 1) return S = !1, t = 1, C = null, k = null, w = null, T = null, void c.setAttribute("style", "");
          t > 4.5 && (t = 4.5), c.style.transform = "scale3d(".concat(t, ", ").concat(t, ", 1)"), y = t
        },
        pressMove: function(e) {
          if (S && !x) {
            var t = P.pageX - O.pageX,
              i = P.pageY - O.pageY;
            k && (t += k), C && (i += C), w = t, T = i;
            var n = "translate3d(".concat(t, "px, ").concat(i, "px, 0)");
            y && (n += " scale3d(".concat(y, ", ").concat(y, ", 1)")), p(c, n)
          }
        },
        swipe: function(t) {
          if (!S)
            if (x) x = !1;
            else {
              if ("Left" == t.direction) {
                if (e.index == e.elements.length - 1) return W(h);
                e.nextSlide()
              }
              if ("Right" == t.direction) {
                if (0 == e.index) return W(h);
                e.prevSlide()
              }
            }
        }
      });
    e.events.touch = q
  }
  var j = function() {
      function e(i, n) {
        var s = this,
          l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        if (t(this, e), this.img = i, this.slide = n, this.onclose = l, this.img.setZoomEvents) return !1;
        this.active = !1, this.zoomedIn = !1, this.dragging = !1, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.img.addEventListener("mousedown", (function(e) {
          return s.dragStart(e)
        }), !1), this.img.addEventListener("mouseup", (function(e) {
          return s.dragEnd(e)
        }), !1), this.img.addEventListener("mousemove", (function(e) {
          return s.drag(e)
        }), !1), this.img.addEventListener("click", (function(e) {
          return s.slide.classList.contains("dragging-nav") ? (s.zoomOut(), !1) : s.zoomedIn ? void(s.zoomedIn && !s.dragging && s.zoomOut()) : s.zoomIn()
        }), !1), this.img.setZoomEvents = !0
      }
      return n(e, [{
        key: "zoomIn",
        value: function() {
          var e = this.widowWidth();
          if (!(this.zoomedIn || e <= 768)) {
            var t = this.img;
            if (t.setAttribute("data-style", t.getAttribute("style")), t.style.maxWidth = t.naturalWidth + "px", t.style.maxHeight = t.naturalHeight + "px", t.naturalWidth > e) {
              var i = e / 2 - t.naturalWidth / 2;
              this.setTranslate(this.img.parentNode, i, 0)
            }
            this.slide.classList.add("zoomed"), this.zoomedIn = !0
          }
        }
      }, {
        key: "zoomOut",
        value: function() {
          this.img.parentNode.setAttribute("style", ""), this.img.setAttribute("style", this.img.getAttribute("data-style")), this.slide.classList.remove("zoomed"), this.zoomedIn = !1, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.onclose && "function" == typeof this.onclose && this.onclose()
        }
      }, {
        key: "dragStart",
        value: function(e) {
          e.preventDefault(), this.zoomedIn ? ("touchstart" === e.type ? (this.initialX = e.touches[0].clientX - this.xOffset, this.initialY = e.touches[0].clientY - this.yOffset) : (this.initialX = e.clientX - this.xOffset, this.initialY = e.clientY - this.yOffset), e.target === this.img && (this.active = !0, this.img.classList.add("dragging"))) : this.active = !1
        }
      }, {
        key: "dragEnd",
        value: function(e) {
          var t = this;
          e.preventDefault(), this.initialX = this.currentX, this.initialY = this.currentY, this.active = !1, setTimeout((function() {
            t.dragging = !1, t.img.isDragging = !1, t.img.classList.remove("dragging")
          }), 100)
        }
      }, {
        key: "drag",
        value: function(e) {
          this.active && (e.preventDefault(), "touchmove" === e.type ? (this.currentX = e.touches[0].clientX - this.initialX, this.currentY = e.touches[0].clientY - this.initialY) : (this.currentX = e.clientX - this.initialX, this.currentY = e.clientY - this.initialY), this.xOffset = this.currentX, this.yOffset = this.currentY, this.img.isDragging = !0, this.dragging = !0, this.setTranslate(this.img, this.currentX, this.currentY))
        }
      }, {
        key: "onMove",
        value: function(e) {
          if (this.zoomedIn) {
            var t = e.clientX - this.img.naturalWidth / 2,
              i = e.clientY - this.img.naturalHeight / 2;
            this.setTranslate(this.img, t, i)
          }
        }
      }, {
        key: "setTranslate",
        value: function(e, t, i) {
          e.style.transform = "translate3d(" + t + "px, " + i + "px, 0)"
        }
      }, {
        key: "widowWidth",
        value: function() {
          return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
        }
      }]), e
    }(),
    V = function() {
      function e() {
        var i = this,
          n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        t(this, e);
        var s = n.dragEl,
          l = n.toleranceX,
          o = void 0 === l ? 40 : l,
          r = n.toleranceY,
          a = void 0 === r ? 65 : r,
          h = n.slide,
          c = void 0 === h ? null : h,
          d = n.instance,
          u = void 0 === d ? null : d;
        this.el = s, this.active = !1, this.dragging = !1, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.direction = null, this.lastDirection = null, this.toleranceX = o, this.toleranceY = a, this.toleranceReached = !1, this.dragContainer = this.el, this.slide = c, this.instance = u, this.el.addEventListener("mousedown", (function(e) {
          return i.dragStart(e)
        }), !1), this.el.addEventListener("mouseup", (function(e) {
          return i.dragEnd(e)
        }), !1), this.el.addEventListener("mousemove", (function(e) {
          return i.drag(e)
        }), !1)
      }
      return n(e, [{
        key: "dragStart",
        value: function(e) {
          if (this.slide.classList.contains("zoomed")) this.active = !1;
          else {
            "touchstart" === e.type ? (this.initialX = e.touches[0].clientX - this.xOffset, this.initialY = e.touches[0].clientY - this.yOffset) : (this.initialX = e.clientX - this.xOffset, this.initialY = e.clientY - this.yOffset);
            var t = e.target.nodeName.toLowerCase();
            e.target.classList.contains("nodrag") || v(e.target, ".nodrag") || -1 !== ["input", "select", "textarea", "button", "a"].indexOf(t) ? this.active = !1 : (e.preventDefault(), (e.target === this.el || "img" !== t && v(e.target, ".gslide-inline")) && (this.active = !0, this.el.classList.add("dragging"), this.dragContainer = v(e.target, ".ginner-container")))
          }
        }
      }, {
        key: "dragEnd",
        value: function(e) {
          var t = this;
          e && e.preventDefault(), this.initialX = 0, this.initialY = 0, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.active = !1, this.doSlideChange && (this.instance.preventOutsideClick = !0, "right" == this.doSlideChange && this.instance.prevSlide(), "left" == this.doSlideChange && this.instance.nextSlide()), this.doSlideClose && this.instance.close(), this.toleranceReached || this.setTranslate(this.dragContainer, 0, 0, !0), setTimeout((function() {
            t.instance.preventOutsideClick = !1, t.toleranceReached = !1, t.lastDirection = null, t.dragging = !1, t.el.isDragging = !1, t.el.classList.remove("dragging"), t.slide.classList.remove("dragging-nav"), t.dragContainer.style.transform = "", t.dragContainer.style.transition = ""
          }), 100)
        }
      }, {
        key: "drag",
        value: function(e) {
          if (this.active) {
            e.preventDefault(), this.slide.classList.add("dragging-nav"), "touchmove" === e.type ? (this.currentX = e.touches[0].clientX - this.initialX, this.currentY = e.touches[0].clientY - this.initialY) : (this.currentX = e.clientX - this.initialX, this.currentY = e.clientY - this.initialY), this.xOffset = this.currentX, this.yOffset = this.currentY, this.el.isDragging = !0, this.dragging = !0, this.doSlideChange = !1, this.doSlideClose = !1;
            var t = Math.abs(this.currentX),
              i = Math.abs(this.currentY);
            if (t > 0 && t >= Math.abs(this.currentY) && (!this.lastDirection || "x" == this.lastDirection)) {
              this.yOffset = 0, this.lastDirection = "x", this.setTranslate(this.dragContainer, this.currentX, 0);
              var n = this.shouldChange();
              if (!this.instance.settings.dragAutoSnap && n && (this.doSlideChange = n), this.instance.settings.dragAutoSnap && n) return this.instance.preventOutsideClick = !0, this.toleranceReached = !0, this.active = !1, this.instance.preventOutsideClick = !0, this.dragEnd(null), "right" == n && this.instance.prevSlide(), void("left" == n && this.instance.nextSlide())
            }
            if (this.toleranceY > 0 && i > 0 && i >= t && (!this.lastDirection || "y" == this.lastDirection)) {
              this.xOffset = 0, this.lastDirection = "y", this.setTranslate(this.dragContainer, 0, this.currentY);
              var s = this.shouldClose();
              return !this.instance.settings.dragAutoSnap && s && (this.doSlideClose = !0), void(this.instance.settings.dragAutoSnap && s && this.instance.close())
            }
          }
        }
      }, {
        key: "shouldChange",
        value: function() {
          var e = !1;
          if (Math.abs(this.currentX) >= this.toleranceX) {
            var t = this.currentX > 0 ? "right" : "left";
            ("left" == t && this.slide !== this.slide.parentNode.lastChild || "right" == t && this.slide !== this.slide.parentNode.firstChild) && (e = t)
          }
          return e
        }
      }, {
        key: "shouldClose",
        value: function() {
          var e = !1;
          return Math.abs(this.currentY) >= this.toleranceY && (e = !0), e
        }
      }, {
        key: "setTranslate",
        value: function(e, t, i) {
          var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          e.style.transition = n ? "all .2s ease" : "", e.style.transform = "translate3d(".concat(t, "px, ").concat(i, "px, 0)")
        }
      }]), e
    }();

  function F(e, t, i, n) {
    var s = e.querySelector(".gslide-media"),
      l = new Image,
      o = "gSlideTitle_" + i,
      r = "gSlideDesc_" + i;
    l.addEventListener("load", (function() {
      C(n) && n()
    }), !1), l.src = t.href, l.alt = "", "" !== t.title && l.setAttribute("aria-labelledby", o), "" !== t.description && l.setAttribute("aria-describedby", r), s.insertBefore(l, s.firstChild)
  }

  function R(e, t, i, n) {
    var s = this,
      l = e.querySelector(".ginner-container"),
      o = "gvideo" + i,
      r = e.querySelector(".gslide-media"),
      a = this.getAllPlayers();
    d(l, "gvideo-container"), r.insertBefore(x('<div class="gvideo-wrapper"></div>'), r.firstChild);
    var h = e.querySelector(".gvideo-wrapper");
    T(this.settings.plyr.css, "Plyr");
    var c = t.href,
      u = location.protocol.replace(":", ""),
      g = "",
      v = "",
      f = !1;
    "file" == u && (u = "http"), r.style.maxWidth = t.width, T(this.settings.plyr.js, "Plyr", (function() {
      if (c.match(/vimeo\.com\/([0-9]*)/)) {
        var e = /vimeo.*\/(\d+)/i.exec(c);
        g = "vimeo", v = e[1]
      }
      if (c.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || c.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) || c.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/)) {
        var l = function(e) {
          var t = "";
          t = void 0 !== (e = e.replace(/(>|<)/gi, "").split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/))[2] ? (t = e[2].split(/[^0-9a-z_\-]/i))[0] : e;
          return t
        }(c);
        g = "youtube", v = l
      }
      if (null !== c.match(/\.(mp4|ogg|webm|mov)$/)) {
        g = "local";
        var r = '<video id="' + o + '" ';
        r += 'style="background:#000; max-width: '.concat(t.width, ';" '), r += 'preload="metadata" ', r += 'x-webkit-airplay="allow" ', r += 'webkit-playsinline="" ', r += "controls ", r += 'class="gvideo-local">';
        var u = c.toLowerCase().split(".").pop(),
          p = {
            mp4: "",
            ogg: "",
            webm: ""
          };
        for (var m in p[u = "mov" == u ? "mp4" : u] = c, p)
          if (p.hasOwnProperty(m)) {
            var y = p[m];
            t.hasOwnProperty(m) && (y = t[m]), "" !== y && (r += '<source src="'.concat(y, '" type="video/').concat(m, '">'))
          } f = x(r += "</video>")
      }
      var b = f || x('<div id="'.concat(o, '" data-plyr-provider="').concat(g, '" data-plyr-embed-id="').concat(v, '"></div>'));
      d(h, "".concat(g, "-video gvideo")), h.appendChild(b), h.setAttribute("data-id", o), h.setAttribute("data-index", i);
      var S = M(s.settings.plyr, "config") ? s.settings.plyr.config : {},
        w = new Plyr("#" + o, S);
      w.on("ready", (function(e) {
        var t = e.detail.plyr;
        a[o] = t, C(n) && n()
      })), w.on("enterfullscreen", G), w.on("exitfullscreen", G)
    }))
  }

  function G(e) {
    var t = v(e.target, ".gslide-media");
    "enterfullscreen" == e.type && d(t, "fullscreen"), "exitfullscreen" == e.type && u(t, "fullscreen")
  }

  function Z(e, t, i, n) {
    var s, l = this,
      o = e.querySelector(".gslide-media"),
      r = !(!M(t, "href") || !t.href) && t.href.split("#").pop().trim(),
      a = !(!M(t, "content") || !t.content) && t.content;
    if (a && (E(a) && (s = x('<div class="ginlined-content">'.concat(a, "</div>"))), A(a))) {
      "none" == a.style.display && (a.style.display = "block");
      var h = document.createElement("div");
      h.className = "ginlined-content", h.appendChild(a), s = h
    }
    if (r) {
      var u = document.getElementById(r);
      if (!u) return !1;
      var g = u.cloneNode(!0);
      g.style.height = t.height, g.style.maxWidth = t.width, d(g, "ginlined-content"), s = g
    }
    if (!s) return console.error("Unable to append inline slide content", t), !1;
    o.style.height = t.height, o.style.width = t.width, o.appendChild(s), this.events["inlineclose" + r] = c("click", {
      onElement: o.querySelectorAll(".gtrigger-close"),
      withCallback: function(e) {
        e.preventDefault(), l.close()
      }
    }), C(n) && n()
  }

  function $(e, t, i, n) {
    var s = e.querySelector(".gslide-media"),
      l = function(e) {
        var t = e.url,
          i = e.allow,
          n = e.callback,
          s = e.appendTo,
          l = document.createElement("iframe");
        return l.className = "vimeo-video gvideo", l.src = t, l.style.width = "100%", l.style.height = "100%", i && l.setAttribute("allow", i), l.onload = function() {
          d(l, "node-ready"), C(n) && n()
        }, s && s.appendChild(l), l
      }({
        url: t.href,
        callback: n
      });
    s.parentNode.style.maxWidth = t.width, s.parentNode.style.height = t.height, s.appendChild(l)
  }
  var U = function() {
      function e() {
        var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        t(this, e), this.defaults = {
          href: "",
          title: "",
          type: "",
          description: "",
          descPosition: "bottom",
          effect: "",
          width: "",
          height: "",
          content: !1,
          zoomable: !0,
          draggable: !0
        }, O(i) && (this.defaults = r(this.defaults, i))
      }
      return n(e, [{
        key: "sourceType",
        value: function(e) {
          var t = e;
          if (null !== (e = e.toLowerCase()).match(/\.(jpeg|jpg|jpe|gif|png|apn|webp|svg)$/)) return "image";
          if (e.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || e.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) || e.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/)) return "video";
          if (e.match(/vimeo\.com\/([0-9]*)/)) return "video";
          if (null !== e.match(/\.(mp4|ogg|webm|mov)$/)) return "video";
          if (null !== e.match(/\.(mp3|wav|wma|aac|ogg)$/)) return "audio";
          if (e.indexOf("#") > -1 && "" !== t.split("#").pop().trim()) return "inline";
          return e.indexOf("goajax=true") > -1 ? "ajax" : "external"
        }
      }, {
        key: "parseConfig",
        value: function(e, t) {
          var i = this,
            n = r({
              descPosition: t.descPosition
            }, this.defaults);
          if (O(e) && !A(e)) {
            M(e, "type") || (M(e, "content") && e.content ? e.type = "inline" : M(e, "href") && (e.type = this.sourceType(e.href)));
            var s = r(n, e);
            return this.setSize(s, t), s
          }
          var l = "",
            o = e.getAttribute("data-glightbox"),
            h = e.nodeName.toLowerCase();
          if ("a" === h && (l = e.href), "img" === h && (l = e.src), n.href = l, a(n, (function(s, l) {
              M(t, l) && "width" !== l && (n[l] = t[l]);
              var o = e.dataset[l];
              P(o) || (n[l] = i.sanitizeValue(o))
            })), n.content && (n.type = "inline"), !n.type && l && (n.type = this.sourceType(l)), P(o)) {
            if (!n.title && "a" == h) {
              var c = e.title;
              P(c) || "" === c || (n.title = c)
            }
            if (!n.title && "img" == h) {
              var d = e.alt;
              P(d) || "" === d || (n.title = d)
            }
          } else {
            var u = [];
            a(n, (function(e, t) {
              u.push(";\\s?" + t)
            })), u = u.join("\\s?:|"), "" !== o.trim() && a(n, (function(e, t) {
              var s = o,
                l = new RegExp("s?" + t + "s?:s?(.*?)(" + u + "s?:|$)"),
                r = s.match(l);
              if (r && r.length && r[1]) {
                var a = r[1].trim().replace(/;\s*$/, "");
                n[t] = i.sanitizeValue(a)
              }
            }))
          }
          if (n.description && "." == n.description.substring(0, 1) && document.querySelector(n.description)) n.description = document.querySelector(n.description).innerHTML;
          else {
            var g = e.querySelector(".glightbox-desc");
            g && (n.description = g.innerHTML)
          }
          return this.setSize(n, t), this.slideConfig = n, n
        }
      }, {
        key: "setSize",
        value: function(e, t) {
          var i = "video" == e.type ? this.checkSize(t.videosWidth) : this.checkSize(t.width),
            n = this.checkSize(t.height);
          return e.width = M(e, "width") && "" !== e.width ? this.checkSize(e.width) : i, e.height = M(e, "height") && "" !== e.height ? this.checkSize(e.height) : n, e
        }
      }, {
        key: "checkSize",
        value: function(e) {
          return z(e) ? "".concat(e, "px") : e
        }
      }, {
        key: "sanitizeValue",
        value: function(e) {
          return "true" !== e && "false" !== e ? e : "true" === e
        }
      }]), e
    }(),
    J = function() {
      function e(i, n, s) {
        t(this, e), this.element = i, this.instance = n, this.index = s
      }
      return n(e, [{
        key: "setContent",
        value: function() {
          var e = this,
            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (g(t, "loaded")) return !1;
          var n = this.instance.settings,
            s = this.slideConfig,
            l = k();
          C(n.beforeSlideLoad) && n.beforeSlideLoad({
            index: this.index,
            slide: t,
            player: !1
          });
          var o = s.type,
            r = s.descPosition,
            a = t.querySelector(".gslide-media"),
            h = t.querySelector(".gslide-title"),
            c = t.querySelector(".gslide-desc"),
            u = t.querySelector(".gdesc-inner"),
            v = i,
            f = "gSlideTitle_" + this.index,
            p = "gSlideDesc_" + this.index;
          if (C(n.afterSlideLoad) && (v = function() {
              C(i) && i(), n.afterSlideLoad({
                index: e.index,
                slide: t,
                player: e.instance.getSlidePlayerInstance(e.index)
              })
            }), "" == s.title && "" == s.description ? u && u.parentNode.parentNode.removeChild(u.parentNode) : (h && "" !== s.title ? (h.id = f, h.innerHTML = s.title) : h.parentNode.removeChild(h), c && "" !== s.description ? (c.id = p, l && n.moreLength > 0 ? (s.smallDescription = this.slideShortDesc(s.description, n.moreLength, n.moreText), c.innerHTML = s.smallDescription, this.descriptionEvents(c, s)) : c.innerHTML = s.description) : c.parentNode.removeChild(c), d(a.parentNode, "desc-".concat(r)), d(u.parentNode, "description-".concat(r))), d(a, "gslide-".concat(o)), d(t, "loaded"), "video" !== o) {
            if ("external" !== o) return "inline" === o ? (Z.apply(this.instance, [t, s, this.index, v]), void(n.draggable && new V({
              dragEl: t.querySelector(".gslide-inline"),
              toleranceX: n.dragToleranceX,
              toleranceY: n.dragToleranceY,
              slide: t,
              instance: this.instance
            }))) : void("image" !== o ? C(v) && v() : F(t, s, this.index, (function() {
              var i = t.querySelector("img");
              n.draggable && new V({
                dragEl: i,
                toleranceX: n.dragToleranceX,
                toleranceY: n.dragToleranceY,
                slide: t,
                instance: e.instance
              }), s.zoomable && i.naturalWidth > i.offsetWidth && (d(i, "zoomable"), new j(i, t, (function() {
                e.instance.resize()
              }))), C(v) && v()
            })));
            $.apply(this, [t, s, this.index, v])
          } else R.apply(this.instance, [t, s, this.index, v])
        }
      }, {
        key: "slideShortDesc",
        value: function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 50,
            i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            n = document.createElement("div");
          n.innerHTML = e;
          var s = n.innerText,
            l = i;
          if ((e = s.trim()).length <= t) return e;
          var o = e.substr(0, t - 1);
          return l ? (n = null, o + '... <a href="#" class="desc-more">' + i + "</a>") : o
        }
      }, {
        key: "descriptionEvents",
        value: function(e, t) {
          var i = this,
            n = e.querySelector(".desc-more");
          if (!n) return !1;
          c("click", {
            onElement: n,
            withCallback: function(e, n) {
              e.preventDefault();
              var s = document.body,
                l = v(n, ".gslide-desc");
              if (!l) return !1;
              l.innerHTML = t.description, d(s, "gdesc-open");
              var o = c("click", {
                onElement: [s, v(l, ".gslide-description")],
                withCallback: function(e, n) {
                  "a" !== e.target.nodeName.toLowerCase() && (u(s, "gdesc-open"), d(s, "gdesc-closed"), l.innerHTML = t.smallDescription, i.descriptionEvents(l, t), setTimeout((function() {
                    u(s, "gdesc-closed")
                  }), 400), o.destroy())
                }
              })
            }
          })
        }
      }, {
        key: "create",
        value: function() {
          return x(this.instance.settings.slideHTML)
        }
      }, {
        key: "getConfig",
        value: function() {
          var e = new U(this.instance.settings.slideExtraAttributes);
          return this.slideConfig = e.parseConfig(this.element, this.instance.settings), this.slideConfig
        }
      }]), e
    }(),
    K = k(),
    Q = null !== k() || void 0 !== document.createTouch || "ontouchstart" in window || "onmsgesturechange" in window || navigator.msMaxTouchPoints,
    ee = document.getElementsByTagName("html")[0],
    te = {
      selector: ".glightbox",
      elements: null,
      skin: "clean",
      theme: "clean",
      closeButton: !0,
      startAt: null,
      autoplayVideos: !0,
      autofocusVideos: !0,
      descPosition: "bottom",
      width: "900px",
      height: "506px",
      videosWidth: "960px",
      beforeSlideChange: null,
      afterSlideChange: null,
      beforeSlideLoad: null,
      afterSlideLoad: null,
      slideInserted: null,
      slideRemoved: null,
      slideExtraAttributes: null,
      onOpen: null,
      onClose: null,
      loop: !1,
      zoomable: !0,
      draggable: !0,
      dragAutoSnap: !1,
      dragToleranceX: 40,
      dragToleranceY: 65,
      preload: !0,
      oneSlidePerOpen: !1,
      touchNavigation: !0,
      touchFollowAxis: !0,
      keyboardNavigation: !0,
      closeOnOutsideClick: !0,
      plugins: !1,
      plyr: {
        css: "https://cdn.plyr.io/3.6.3/plyr.css",
        js: "https://cdn.plyr.io/3.6.3/plyr.js",
        config: {
          ratio: "16:9",
          fullscreen: {
            enabled: !0,
            iosNative: !0
          },
          youtube: {
            noCookie: !0,
            rel: 0,
            showinfo: 0,
            iv_load_policy: 3
          },
          vimeo: {
            byline: !1,
            portrait: !1,
            title: !1,
            transparent: !1
          }
        }
      },
      openEffect: "zoom",
      closeEffect: "zoom",
      slideEffect: "slide",
      moreText: "See more",
      moreLength: 60,
      cssEfects: {
        fade: {
          in: "fadeIn",
          out: "fadeOut"
        },
        zoom: {
          in: "zoomIn",
          out: "zoomOut"
        },
        slide: {
          in: "slideInRight",
          out: "slideOutLeft"
        },
        slideBack: {
          in: "slideInLeft",
          out: "slideOutRight"
        },
        none: {
          in: "none",
          out: "none"
        }
      },
      svg: {
        close: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z"/></g></g><g><g><path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"/></g></g></svg>',
        next: '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"> <g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></g></svg>',
        prev: '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"><g><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></g></svg>'
      },
      slideHTML: '<div class="gslide">\n    <div class="gslide-inner-content">\n        <div class="ginner-container">\n            <div class="gslide-media">\n            </div>\n            <div class="gslide-description">\n                <div class="gdesc-inner">\n                    <h4 class="gslide-title"></h4>\n                    <div class="gslide-desc"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>',
      lightboxHTML: '<div id="glightbox-body" class="glightbox-container">\n    <div class="gloader visible"></div>\n    <div class="goverlay"></div>\n    <div class="gcontainer">\n    <div id="glightbox-slider" class="gslider"></div>\n    <button class="gnext gbtn" tabindex="0" aria-label="Next">{nextSVG}</button>\n    <button class="gprev gbtn" tabindex="1" aria-label="Previous">{prevSVG}</button>\n    <button class="gclose gbtn" tabindex="2" aria-label="Close">{closeSVG}</button>\n</div>\n</div>'
    },
    ie = function() {
      function e() {
        var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        t(this, e), this.settings = r(te, i), this.effectsClasses = this.getAnimationClasses(), this.videoPlayers = {}, this.apiEvents = [], this.fullElementsList = !1
      }
      return n(e, [{
        key: "init",
        value: function() {
          var e = this,
            t = this.getSelector();
          t && (this.baseEvents = c("click", {
            onElement: t,
            withCallback: function(t, i) {
              t.preventDefault(), e.open(i)
            }
          })), this.elements = this.getElements()
        }
      }, {
        key: "open",
        value: function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (0 == this.elements.length) return !1;
          this.activeSlide = null, this.prevActiveSlideIndex = null, this.prevActiveSlide = null;
          var i = z(t) ? t : this.settings.startAt;
          if (A(e)) {
            var n = e.getAttribute("data-gallery");
            n && (this.fullElementsList = this.elements, this.elements = this.getGalleryElements(this.elements, n)), P(i) && (i = this.getElementIndex(e)) < 0 && (i = 0)
          }
          z(i) || (i = 0), this.build(), f(this.overlay, "none" == this.settings.openEffect ? "none" : this.settings.cssEfects.fade.in);
          var s = document.body,
            l = window.innerWidth - document.documentElement.clientWidth;
          if (l > 0) {
            var o = document.createElement("style");
            o.type = "text/css", o.className = "gcss-styles", o.innerText = ".gscrollbar-fixer {margin-right: ".concat(l, "px}"), document.head.appendChild(o), d(s, "gscrollbar-fixer")
          }
          d(s, "glightbox-open"), d(ee, "glightbox-open"), K && (d(document.body, "glightbox-mobile"), this.settings.slideEffect = "slide"), this.showSlide(i, !0), 1 == this.elements.length ? (d(this.prevButton, "glightbox-button-hidden"), d(this.nextButton, "glightbox-button-hidden")) : (u(this.prevButton, "glightbox-button-hidden"), u(this.nextButton, "glightbox-button-hidden")), this.lightboxOpen = !0, this.trigger("open"), C(this.settings.onOpen) && this.settings.onOpen(), Q && this.settings.touchNavigation && H(this), this.settings.keyboardNavigation && Y(this)
        }
      }, {
        key: "openAt",
        value: function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          this.open(null, e)
        }
      }, {
        key: "showSlide",
        value: function() {
          var e = this,
            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          m(this.loader), this.index = parseInt(t);
          var n = this.slidesContainer.querySelector(".current");
          n && u(n, "current"), this.slideAnimateOut();
          var s = this.slidesContainer.querySelectorAll(".gslide")[t];
          if (g(s, "loaded")) this.slideAnimateIn(s, i), y(this.loader);
          else {
            m(this.loader);
            var l = this.elements[t],
              o = {
                index: this.index,
                slide: s,
                slideNode: s,
                slideConfig: l.slideConfig,
                slideIndex: this.index,
                trigger: l.node,
                player: null
              };
            this.trigger("slide_before_load", o), l.instance.setContent(s, (function() {
              y(e.loader), e.resize(), e.slideAnimateIn(s, i), e.trigger("slide_after_load", o)
            }))
          }
          this.slideDescription = s.querySelector(".gslide-description"), this.slideDescriptionContained = this.slideDescription && g(this.slideDescription.parentNode, "gslide-media"), this.settings.preload && (this.preloadSlide(t + 1), this.preloadSlide(t - 1)), this.updateNavigationClasses(), this.activeSlide = s
        }
      }, {
        key: "preloadSlide",
        value: function(e) {
          var t = this;
          if (e < 0 || e > this.elements.length - 1) return !1;
          if (P(this.elements[e])) return !1;
          var i = this.slidesContainer.querySelectorAll(".gslide")[e];
          if (g(i, "loaded")) return !1;
          var n = this.elements[e],
            s = n.type,
            l = {
              index: e,
              slide: i,
              slideNode: i,
              slideConfig: n.slideConfig,
              slideIndex: e,
              trigger: n.node,
              player: null
            };
          this.trigger("slide_before_load", l), "video" == s || "external" == s ? setTimeout((function() {
            n.instance.setContent(i, (function() {
              t.trigger("slide_after_load", l)
            }))
          }), 200) : n.instance.setContent(i, (function() {
            t.trigger("slide_after_load", l)
          }))
        }
      }, {
        key: "prevSlide",
        value: function() {
          this.goToSlide(this.index - 1)
        }
      }, {
        key: "nextSlide",
        value: function() {
          this.goToSlide(this.index + 1)
        }
      }, {
        key: "goToSlide",
        value: function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (this.prevActiveSlide = this.activeSlide, this.prevActiveSlideIndex = this.index, !this.loop() && (e < 0 || e > this.elements.length - 1)) return !1;
          e < 0 ? e = this.elements.length - 1 : e >= this.elements.length && (e = 0), this.showSlide(e)
        }
      }, {
        key: "insertSlide",
        value: function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
          t < 0 && (t = this.elements.length);
          var i = new J(e, this, t),
            n = i.getConfig(),
            s = r({}, n),
            l = i.create(),
            o = this.elements.length - 1;
          s.index = t, s.node = !1, s.instance = i, s.slideConfig = n, this.elements.splice(t, 0, s);
          var a = null,
            h = null;
          if (this.slidesContainer) {
            if (t > o) this.slidesContainer.appendChild(l);
            else {
              var c = this.slidesContainer.querySelectorAll(".gslide")[t];
              this.slidesContainer.insertBefore(l, c)
            }(this.settings.preload && 0 == this.index && 0 == t || this.index - 1 == t || this.index + 1 == t) && this.preloadSlide(t), 0 == this.index && 0 == t && (this.index = 1), this.updateNavigationClasses(), a = this.slidesContainer.querySelectorAll(".gslide")[t], h = this.getSlidePlayerInstance(t), s.slideNode = a
          }
          this.trigger("slide_inserted", {
            index: t,
            slide: a,
            slideNode: a,
            slideConfig: n,
            slideIndex: t,
            trigger: null,
            player: h
          }), C(this.settings.slideInserted) && this.settings.slideInserted({
            index: t,
            slide: a,
            player: h
          })
        }
      }, {
        key: "removeSlide",
        value: function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
          if (e < 0 || e > this.elements.length - 1) return !1;
          var t = this.slidesContainer && this.slidesContainer.querySelectorAll(".gslide")[e];
          t && (this.getActiveSlideIndex() == e && (e == this.elements.length - 1 ? this.prevSlide() : this.nextSlide()), t.parentNode.removeChild(t)), this.elements.splice(e, 1), this.trigger("slide_removed", e), C(this.settings.slideRemoved) && this.settings.slideRemoved(e)
        }
      }, {
        key: "slideAnimateIn",
        value: function(e, t) {
          var i = this,
            n = e.querySelector(".gslide-media"),
            s = e.querySelector(".gslide-description"),
            l = {
              index: this.prevActiveSlideIndex,
              slide: this.prevActiveSlide,
              slideNode: this.prevActiveSlide,
              slideIndex: this.prevActiveSlide,
              slideConfig: P(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].slideConfig,
              trigger: P(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].node,
              player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
            },
            o = {
              index: this.index,
              slide: this.activeSlide,
              slideNode: this.activeSlide,
              slideConfig: this.elements[this.index].slideConfig,
              slideIndex: this.index,
              trigger: this.elements[this.index].node,
              player: this.getSlidePlayerInstance(this.index)
            };
          if (n.offsetWidth > 0 && s && (y(s), s.style.display = ""), u(e, this.effectsClasses), t) f(e, this.settings.cssEfects[this.settings.openEffect].in, (function() {
            i.settings.autoplayVideos && i.slidePlayerPlay(e), i.trigger("slide_changed", {
              prev: l,
              current: o
            }), C(i.settings.afterSlideChange) && i.settings.afterSlideChange.apply(i, [l, o])
          }));
          else {
            var r = this.settings.slideEffect,
              a = "none" !== r ? this.settings.cssEfects[r].in : r;
            this.prevActiveSlideIndex > this.index && "slide" == this.settings.slideEffect && (a = this.settings.cssEfects.slideBack.in), f(e, a, (function() {
              i.settings.autoplayVideos && i.slidePlayerPlay(e), i.trigger("slide_changed", {
                prev: l,
                current: o
              }), C(i.settings.afterSlideChange) && i.settings.afterSlideChange.apply(i, [l, o])
            }))
          }
          setTimeout((function() {
            i.resize(e)
          }), 100), d(e, "current")
        }
      }, {
        key: "slideAnimateOut",
        value: function() {
          if (!this.prevActiveSlide) return !1;
          var e = this.prevActiveSlide;
          u(e, this.effectsClasses), d(e, "prev");
          var t = this.settings.slideEffect,
            i = "none" !== t ? this.settings.cssEfects[t].out : t;
          this.slidePlayerPause(e), this.trigger("slide_before_change", {
            prev: {
              index: this.prevActiveSlideIndex,
              slide: this.prevActiveSlide,
              slideNode: this.prevActiveSlide,
              slideIndex: this.prevActiveSlideIndex,
              slideConfig: P(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].slideConfig,
              trigger: P(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].node,
              player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
            },
            current: {
              index: this.index,
              slide: this.activeSlide,
              slideNode: this.activeSlide,
              slideIndex: this.index,
              slideConfig: this.elements[this.index].slideConfig,
              trigger: this.elements[this.index].node,
              player: this.getSlidePlayerInstance(this.index)
            }
          }), C(this.settings.beforeSlideChange) && this.settings.beforeSlideChange.apply(this, [{
            index: this.prevActiveSlideIndex,
            slide: this.prevActiveSlide,
            player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
          }, {
            index: this.index,
            slide: this.activeSlide,
            player: this.getSlidePlayerInstance(this.index)
          }]), this.prevActiveSlideIndex > this.index && "slide" == this.settings.slideEffect && (i = this.settings.cssEfects.slideBack.out), f(e, i, (function() {
            var t = e.querySelector(".gslide-media"),
              i = e.querySelector(".gslide-description");
            t.style.transform = "", u(t, "greset"), t.style.opacity = "", i && (i.style.opacity = ""), u(e, "prev")
          }))
        }
      }, {
        key: "getAllPlayers",
        value: function() {
          return this.videoPlayers
        }
      }, {
        key: "getSlidePlayerInstance",
        value: function(e) {
          var t = "gvideo" + e,
            i = this.getAllPlayers();
          return !(!M(i, t) || !i[t]) && i[t]
        }
      }, {
        key: "stopSlideVideo",
        value: function(e) {
          if (A(e)) {
            var t = e.querySelector(".gvideo-wrapper");
            t && (e = t.getAttribute("data-index"))
          }
          console.log("stopSlideVideo is deprecated, use slidePlayerPause");
          var i = this.getSlidePlayerInstance(e);
          i && i.playing && i.pause()
        }
      }, {
        key: "slidePlayerPause",
        value: function(e) {
          if (A(e)) {
            var t = e.querySelector(".gvideo-wrapper");
            t && (e = t.getAttribute("data-index"))
          }
          var i = this.getSlidePlayerInstance(e);
          i && i.playing && i.pause()
        }
      }, {
        key: "playSlideVideo",
        value: function(e) {
          if (A(e)) {
            var t = e.querySelector(".gvideo-wrapper");
            t && (e = t.getAttribute("data-index"))
          }
          console.log("playSlideVideo is deprecated, use slidePlayerPlay");
          var i = this.getSlidePlayerInstance(e);
          i && !i.playing && i.play()
        }
      }, {
        key: "slidePlayerPlay",
        value: function(e) {
          if (A(e)) {
            var t = e.querySelector(".gvideo-wrapper");
            t && (e = t.getAttribute("data-index"))
          }
          var i = this.getSlidePlayerInstance(e);
          console.log("Player is"), console.log(i), i && !i.playing && (i.play(), this.settings.autofocusVideos && i.elements.container.focus())
        }
      }, {
        key: "setElements",
        value: function(e) {
          var t = this;
          this.settings.elements = !1;
          var i = [];
          e && e.length && a(e, (function(e, n) {
            var s = new J(e, t, n),
              l = s.getConfig(),
              o = r({}, l);
            o.slideConfig = l, o.instance = s, o.index = n, i.push(o)
          })), this.elements = i, this.lightboxOpen && (this.slidesContainer.innerHTML = "", this.elements.length && (a(this.elements, (function() {
            var e = x(t.settings.slideHTML);
            t.slidesContainer.appendChild(e)
          })), this.showSlide(0, !0)))
        }
      }, {
        key: "getElementIndex",
        value: function(e) {
          var t = !1;
          return a(this.elements, (function(i, n) {
            if (M(i, "node") && i.node == e) return t = n, !0
          })), t
        }
      }, {
        key: "getElements",
        value: function() {
          var e = this,
            t = [];
          this.elements = this.elements ? this.elements : [], !P(this.settings.elements) && L(this.settings.elements) && this.settings.elements.length && a(this.settings.elements, (function(i, n) {
            var s = new J(i, e, n),
              l = s.getConfig(),
              o = r({}, l);
            o.node = !1, o.index = n, o.instance = s, o.slideConfig = l, t.push(o)
          }));
          var i = !1;
          return this.getSelector() && (i = document.querySelectorAll(this.getSelector())), i ? (a(i, (function(i, n) {
            var s = new J(i, e, n),
              l = s.getConfig(),
              o = r({}, l);
            o.node = i, o.index = n, o.instance = s, o.slideConfig = l, o.gallery = i.getAttribute("data-gallery"), t.push(o)
          })), t) : t
        }
      }, {
        key: "getGalleryElements",
        value: function(e, t) {
          return e.filter((function(e) {
            return e.gallery == t
          }))
        }
      }, {
        key: "getSelector",
        value: function() {
          return !this.settings.elements && (this.settings.selector && "data-" == this.settings.selector.substring(0, 5) ? "*[".concat(this.settings.selector, "]") : this.settings.selector)
        }
      }, {
        key: "getActiveSlide",
        value: function() {
          return this.slidesContainer.querySelectorAll(".gslide")[this.index]
        }
      }, {
        key: "getActiveSlideIndex",
        value: function() {
          return this.index
        }
      }, {
        key: "getAnimationClasses",
        value: function() {
          var e = [];
          for (var t in this.settings.cssEfects)
            if (this.settings.cssEfects.hasOwnProperty(t)) {
              var i = this.settings.cssEfects[t];
              e.push("g".concat(i.in)), e.push("g".concat(i.out))
            } return e.join(" ")
        }
      }, {
        key: "build",
        value: function() {
          var e = this;
          if (this.built) return !1;
          var t = M(this.settings.svg, "next") ? this.settings.svg.next : "",
            i = M(this.settings.svg, "prev") ? this.settings.svg.prev : "",
            n = M(this.settings.svg, "close") ? this.settings.svg.close : "",
            s = this.settings.lightboxHTML;
          s = x(s = (s = (s = s.replace(/{nextSVG}/g, t)).replace(/{prevSVG}/g, i)).replace(/{closeSVG}/g, n)), document.body.appendChild(s);
          var l = document.getElementById("glightbox-body");
          this.modal = l;
          var o = l.querySelector(".gclose");
          this.prevButton = l.querySelector(".gprev"), this.nextButton = l.querySelector(".gnext"), this.overlay = l.querySelector(".goverlay"), this.loader = l.querySelector(".gloader"), this.slidesContainer = document.getElementById("glightbox-slider"), this.events = {}, d(this.modal, "glightbox-" + this.settings.skin), this.settings.closeButton && o && (this.events.close = c("click", {
            onElement: o,
            withCallback: function(t, i) {
              t.preventDefault(), e.close()
            }
          })), o && !this.settings.closeButton && o.parentNode.removeChild(o), this.nextButton && (this.events.next = c("click", {
            onElement: this.nextButton,
            withCallback: function(t, i) {
              t.preventDefault(), e.nextSlide()
            }
          })), this.prevButton && (this.events.prev = c("click", {
            onElement: this.prevButton,
            withCallback: function(t, i) {
              t.preventDefault(), e.prevSlide()
            }
          })), this.settings.closeOnOutsideClick && (this.events.outClose = c("click", {
            onElement: l,
            withCallback: function(t, i) {
              e.preventOutsideClick || g(document.body, "glightbox-mobile") || v(t.target, ".ginner-container") || v(t.target, ".gbtn") || g(t.target, "gnext") || g(t.target, "gprev") || e.close()
            }
          })), a(this.elements, (function(t, i) {
            e.slidesContainer.appendChild(t.instance.create()), t.slideNode = e.slidesContainer.querySelectorAll(".gslide")[i]
          })), Q && d(document.body, "glightbox-touch"), this.events.resize = c("resize", {
            onElement: window,
            withCallback: function() {
              e.resize()
            }
          }), this.built = !0
        }
      }, {
        key: "resize",
        value: function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          if ((e = e || this.activeSlide) && !g(e, "zoomed")) {
            var t = b(),
              i = e.querySelector(".gvideo-wrapper"),
              n = e.querySelector(".gslide-image"),
              s = this.slideDescription,
              l = t.width,
              o = t.height;
            if (l <= 768 ? d(document.body, "glightbox-mobile") : u(document.body, "glightbox-mobile"), i || n) {
              var r = !1;
              if (s && (g(s, "description-bottom") || g(s, "description-top")) && !g(s, "gabsolute") && (r = !0), n)
                if (l <= 768) {
                  var a = n.querySelector("img");
                  a.setAttribute("style", "")
                } else if (r) {
                var h = s.offsetHeight,
                  c = n.querySelector("img");
                c.setAttribute("style", "max-height: calc(100vh - ".concat(h, "px)")), s.setAttribute("style", "max-width: ".concat(c.offsetWidth, "px;"))
              }
              if (i) {
                var v = M(this.settings.plyr.config, "ratio") ? this.settings.plyr.config.ratio : "16:9",
                  f = v.split(":"),
                  p = 900,
                  m = p / (parseInt(f[0]) / parseInt(f[1]));
                if (m = Math.floor(m), r && (o -= s.offsetHeight), o < m && l > p) {
                  var y = i.offsetWidth,
                    x = i.offsetHeight,
                    S = o / x,
                    w = {
                      width: y * S,
                      height: x * S
                    };
                  i.parentNode.setAttribute("style", "max-width: ".concat(w.width, "px")), r && s.setAttribute("style", "max-width: ".concat(w.width, "px;"))
                } else i.parentNode.style.maxWidth = "".concat(p, "px"), r && s.setAttribute("style", "max-width: ".concat(p, "px;"))
              }
            }
          }
        }
      }, {
        key: "reload",
        value: function() {
          this.init()
        }
      }, {
        key: "updateNavigationClasses",
        value: function() {
          var e = this.loop();
          u(this.nextButton, "disabled"), u(this.prevButton, "disabled"), 0 == this.index && this.elements.length - 1 == 0 ? (d(this.prevButton, "disabled"), d(this.nextButton, "disabled")) : 0 !== this.index || e ? this.index !== this.elements.length - 1 || e || d(this.nextButton, "disabled") : d(this.prevButton, "disabled")
        }
      }, {
        key: "loop",
        value: function() {
          var e = M(this.settings, "loopAtEnd") ? this.settings.loopAtEnd : null;
          return e = M(this.settings, "loop") ? this.settings.loop : e, e
        }
      }, {
        key: "close",
        value: function() {
          var e = this;
          if (!this.lightboxOpen) {
            if (this.events) {
              for (var t in this.events) this.events.hasOwnProperty(t) && this.events[t].destroy();
              this.events = null
            }
            return !1
          }
          if (this.closing) return !1;
          this.closing = !0, this.slidePlayerPause(this.activeSlide), this.fullElementsList && (this.elements = this.fullElementsList), d(this.modal, "glightbox-closing"), f(this.overlay, "none" == this.settings.openEffect ? "none" : this.settings.cssEfects.fade.out), f(this.activeSlide, this.settings.cssEfects[this.settings.closeEffect].out, (function() {
            if (e.activeSlide = null, e.prevActiveSlideIndex = null, e.prevActiveSlide = null, e.built = !1, e.events) {
              for (var t in e.events) e.events.hasOwnProperty(t) && e.events[t].destroy();
              e.events = null
            }
            var i = document.body;
            u(ee, "glightbox-open"), u(i, "glightbox-open touching gdesc-open glightbox-touch glightbox-mobile gscrollbar-fixer"), e.modal.parentNode.removeChild(e.modal), e.trigger("close"), C(e.settings.onClose) && e.settings.onClose();
            var n = document.querySelector(".gcss-styles");
            n && n.parentNode.removeChild(n), e.lightboxOpen = !1, e.closing = null
          }))
        }
      }, {
        key: "destroy",
        value: function() {
          this.close(), this.clearAllEvents(), this.baseEvents && this.baseEvents.destroy()
        }
      }, {
        key: "on",
        value: function(e, t) {
          var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (!e || !C(t)) throw new TypeError("Event name and callback must be defined");
          this.apiEvents.push({
            evt: e,
            once: i,
            callback: t
          })
        }
      }, {
        key: "once",
        value: function(e, t) {
          this.on(e, t, !0)
        }
      }, {
        key: "trigger",
        value: function(e) {
          var t = this,
            i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = [];
          a(this.apiEvents, (function(t, s) {
            var l = t.evt,
              o = t.once,
              r = t.callback;
            l == e && (r(i), o && n.push(s))
          })), n.length && a(n, (function(e) {
            return t.apiEvents.splice(e, 1)
          }))
        }
      }, {
        key: "clearAllEvents",
        value: function() {
          this.apiEvents.splice(0, this.apiEvents.length)
        }
      }, {
        key: "version",
        value: function() {
          return "3.0.7"
        }
      }]), e
    }();
  return function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      t = new ie(e);
    return t.init(), t
  }
}));
