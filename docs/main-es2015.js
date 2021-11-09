(self["webpackChunkngx_tencent_im"] = self["webpackChunkngx_tencent_im"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 44366:
/*!****************************************************!*\
  !*** ./src/app/tim-config/generate-usersig.min.js ***!
  \****************************************************/
/***/ (function(module) {

!function(e,t){ true?module.exports=t():0}(this,function(){"use strict";var e="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},t=[],r=[],n="undefined"!=typeof Uint8Array?Uint8Array:Array,i=!1;function o(){i=!0;for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n=0,o=e.length;n<o;++n)t[n]=e[n],r[e.charCodeAt(n)]=n;r["-".charCodeAt(0)]=62,r["_".charCodeAt(0)]=63}function a(e,r,n){for(var i,o,a=[],s=r;s<n;s+=3)i=(e[s]<<16)+(e[s+1]<<8)+e[s+2],a.push(t[(o=i)>>18&63]+t[o>>12&63]+t[o>>6&63]+t[63&o]);return a.join("")}function s(e){var r;i||o();for(var n=e.length,s=n%3,h="",c=[],f=0,u=n-s;f<u;f+=16383)c.push(a(e,f,f+16383>u?u:f+16383));return 1===s?(r=e[n-1],h+=t[r>>2],h+=t[r<<4&63],h+="=="):2===s&&(r=(e[n-2]<<8)+e[n-1],h+=t[r>>10],h+=t[r>>4&63],h+=t[r<<2&63],h+="="),c.push(h),c.join("")}function h(e,t,r,n,i){var o,a,s=8*i-n-1,h=(1<<s)-1,c=h>>1,f=-7,u=r?i-1:0,l=r?-1:1,d=e[t+u];for(u+=l,o=d&(1<<-f)-1,d>>=-f,f+=s;f>0;o=256*o+e[t+u],u+=l,f-=8);for(a=o&(1<<-f)-1,o>>=-f,f+=n;f>0;a=256*a+e[t+u],u+=l,f-=8);if(0===o)o=1-c;else{if(o===h)return a?NaN:1/0*(d?-1:1);a+=Math.pow(2,n),o-=c}return(d?-1:1)*a*Math.pow(2,o-n)}function c(e,t,r,n,i,o){var a,s,h,c=8*o-i-1,f=(1<<c)-1,u=f>>1,l=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,d=n?0:o-1,p=n?1:-1,_=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(s=isNaN(t)?1:0,a=f):(a=Math.floor(Math.log(t)/Math.LN2),t*(h=Math.pow(2,-a))<1&&(a--,h*=2),(t+=a+u>=1?l/h:l*Math.pow(2,1-u))*h>=2&&(a++,h/=2),a+u>=f?(s=0,a=f):a+u>=1?(s=(t*h-1)*Math.pow(2,i),a+=u):(s=t*Math.pow(2,u-1)*Math.pow(2,i),a=0));i>=8;e[r+d]=255&s,d+=p,s/=256,i-=8);for(a=a<<i|s,c+=i;c>0;e[r+d]=255&a,d+=p,a/=256,c-=8);e[r+d-p]|=128*_}var f={}.toString,u=Array.isArray||function(e){return"[object Array]"==f.call(e)};function l(){return p.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function d(e,t){if(l()<t)throw new RangeError("Invalid typed array length");return p.TYPED_ARRAY_SUPPORT?(e=new Uint8Array(t)).__proto__=p.prototype:(null===e&&(e=new p(t)),e.length=t),e}function p(e,t,r){if(!(p.TYPED_ARRAY_SUPPORT||this instanceof p))return new p(e,t,r);if("number"==typeof e){if("string"==typeof t)throw new Error("If encoding is specified then the first argument must be a string");return v(this,e)}return _(this,e,t,r)}function _(e,t,r,n){if("number"==typeof t)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer?function(e,t,r,n){if(t.byteLength,r<0||t.byteLength<r)throw new RangeError("'offset' is out of bounds");if(t.byteLength<r+(n||0))throw new RangeError("'length' is out of bounds");t=void 0===r&&void 0===n?new Uint8Array(t):void 0===n?new Uint8Array(t,r):new Uint8Array(t,r,n);p.TYPED_ARRAY_SUPPORT?(e=t).__proto__=p.prototype:e=w(e,t);return e}(e,t,r,n):"string"==typeof t?function(e,t,r){"string"==typeof r&&""!==r||(r="utf8");if(!p.isEncoding(r))throw new TypeError('"encoding" must be a valid string encoding');var n=0|m(t,r),i=(e=d(e,n)).write(t,r);i!==n&&(e=e.slice(0,i));return e}(e,t,r):function(e,t){if(b(t)){var r=0|y(t.length);return 0===(e=d(e,r)).length?e:(t.copy(e,0,0,r),e)}if(t){if("undefined"!=typeof ArrayBuffer&&t.buffer instanceof ArrayBuffer||"length"in t)return"number"!=typeof t.length||(n=t.length)!=n?d(e,0):w(e,t);if("Buffer"===t.type&&u(t.data))return w(e,t.data)}var n;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(e,t)}function g(e){if("number"!=typeof e)throw new TypeError('"size" argument must be a number');if(e<0)throw new RangeError('"size" argument must not be negative')}function v(e,t){if(g(t),e=d(e,t<0?0:0|y(t)),!p.TYPED_ARRAY_SUPPORT)for(var r=0;r<t;++r)e[r]=0;return e}function w(e,t){var r=t.length<0?0:0|y(t.length);e=d(e,r);for(var n=0;n<r;n+=1)e[n]=255&t[n];return e}function y(e){if(e>=l())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+l().toString(16)+" bytes");return 0|e}function b(e){return!(null==e||!e._isBuffer)}function m(e,t){if(b(e))return e.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(e)||e instanceof ArrayBuffer))return e.byteLength;"string"!=typeof e&&(e=""+e);var r=e.length;if(0===r)return 0;for(var n=!1;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":case void 0:return q(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return V(e).length;default:if(n)return q(e).length;t=(""+t).toLowerCase(),n=!0}}function k(e,t,r){var n=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return P(this,t,r);case"utf8":case"utf-8":return I(this,t,r);case"ascii":return O(this,t,r);case"latin1":case"binary":return D(this,t,r);case"base64":return M(this,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return N(this,t,r);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}function E(e,t,r){var n=e[t];e[t]=e[r],e[r]=n}function S(e,t,r,n,i){if(0===e.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,isNaN(r)&&(r=i?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(i)return-1;r=e.length-1}else if(r<0){if(!i)return-1;r=0}if("string"==typeof t&&(t=p.from(t,n)),b(t))return 0===t.length?-1:x(e,t,r,n,i);if("number"==typeof t)return t&=255,p.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):x(e,[t],r,n,i);throw new TypeError("val must be string, number or Buffer")}function x(e,t,r,n,i){var o,a=1,s=e.length,h=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return-1;a=2,s/=2,h/=2,r/=2}function c(e,t){return 1===a?e[t]:e.readUInt16BE(t*a)}if(i){var f=-1;for(o=r;o<s;o++)if(c(e,o)===c(t,-1===f?0:o-f)){if(-1===f&&(f=o),o-f+1===h)return f*a}else-1!==f&&(o-=o-f),f=-1}else for(r+h>s&&(r=s-h),o=r;o>=0;o--){for(var u=!0,l=0;l<h;l++)if(c(e,o+l)!==c(t,l)){u=!1;break}if(u)return o}return-1}function R(e,t,r,n){r=Number(r)||0;var i=e.length-r;n?(n=Number(n))>i&&(n=i):n=i;var o=t.length;if(o%2!=0)throw new TypeError("Invalid hex string");n>o/2&&(n=o/2);for(var a=0;a<n;++a){var s=parseInt(t.substr(2*a,2),16);if(isNaN(s))return a;e[r+a]=s}return a}function A(e,t,r,n){return G(q(t,e.length-r),e,r,n)}function B(e,t,r,n){return G(function(e){for(var t=[],r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(t),e,r,n)}function z(e,t,r,n){return B(e,t,r,n)}function L(e,t,r,n){return G(V(t),e,r,n)}function T(e,t,r,n){return G(function(e,t){for(var r,n,i,o=[],a=0;a<e.length&&!((t-=2)<0);++a)r=e.charCodeAt(a),n=r>>8,i=r%256,o.push(i),o.push(n);return o}(t,e.length-r),e,r,n)}function M(e,t,r){return 0===t&&r===e.length?s(e):s(e.slice(t,r))}function I(e,t,r){r=Math.min(e.length,r);for(var n=[],i=t;i<r;){var o,a,s,h,c=e[i],f=null,u=c>239?4:c>223?3:c>191?2:1;if(i+u<=r)switch(u){case 1:c<128&&(f=c);break;case 2:128==(192&(o=e[i+1]))&&(h=(31&c)<<6|63&o)>127&&(f=h);break;case 3:o=e[i+1],a=e[i+2],128==(192&o)&&128==(192&a)&&(h=(15&c)<<12|(63&o)<<6|63&a)>2047&&(h<55296||h>57343)&&(f=h);break;case 4:o=e[i+1],a=e[i+2],s=e[i+3],128==(192&o)&&128==(192&a)&&128==(192&s)&&(h=(15&c)<<18|(63&o)<<12|(63&a)<<6|63&s)>65535&&h<1114112&&(f=h)}null===f?(f=65533,u=1):f>65535&&(f-=65536,n.push(f>>>10&1023|55296),f=56320|1023&f),n.push(f),i+=u}return function(e){var t=e.length;if(t<=C)return String.fromCharCode.apply(String,e);var r="",n=0;for(;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=C));return r}(n)}p.TYPED_ARRAY_SUPPORT=void 0===e.TYPED_ARRAY_SUPPORT||e.TYPED_ARRAY_SUPPORT,p.poolSize=8192,p._augment=function(e){return e.__proto__=p.prototype,e},p.from=function(e,t,r){return _(null,e,t,r)},p.TYPED_ARRAY_SUPPORT&&(p.prototype.__proto__=Uint8Array.prototype,p.__proto__=Uint8Array),p.alloc=function(e,t,r){return function(e,t,r,n){return g(t),t<=0?d(e,t):void 0!==r?"string"==typeof n?d(e,t).fill(r,n):d(e,t).fill(r):d(e,t)}(null,e,t,r)},p.allocUnsafe=function(e){return v(null,e)},p.allocUnsafeSlow=function(e){return v(null,e)},p.isBuffer=$,p.compare=function(e,t){if(!b(e)||!b(t))throw new TypeError("Arguments must be Buffers");if(e===t)return 0;for(var r=e.length,n=t.length,i=0,o=Math.min(r,n);i<o;++i)if(e[i]!==t[i]){r=e[i],n=t[i];break}return r<n?-1:n<r?1:0},p.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},p.concat=function(e,t){if(!u(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return p.alloc(0);var r;if(void 0===t)for(t=0,r=0;r<e.length;++r)t+=e[r].length;var n=p.allocUnsafe(t),i=0;for(r=0;r<e.length;++r){var o=e[r];if(!b(o))throw new TypeError('"list" argument must be an Array of Buffers');o.copy(n,i),i+=o.length}return n},p.byteLength=m,p.prototype._isBuffer=!0,p.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)E(this,t,t+1);return this},p.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)E(this,t,t+3),E(this,t+1,t+2);return this},p.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)E(this,t,t+7),E(this,t+1,t+6),E(this,t+2,t+5),E(this,t+3,t+4);return this},p.prototype.toString=function(){var e=0|this.length;return 0===e?"":0===arguments.length?I(this,0,e):k.apply(this,arguments)},p.prototype.equals=function(e){if(!b(e))throw new TypeError("Argument must be a Buffer");return this===e||0===p.compare(this,e)},p.prototype.inspect=function(){var e="";return this.length>0&&(e=this.toString("hex",0,50).match(/.{2}/g).join(" "),this.length>50&&(e+=" ... ")),"<Buffer "+e+">"},p.prototype.compare=function(e,t,r,n,i){if(!b(e))throw new TypeError("Argument must be a Buffer");if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),t<0||r>e.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&t>=r)return 0;if(n>=i)return-1;if(t>=r)return 1;if(this===e)return 0;for(var o=(i>>>=0)-(n>>>=0),a=(r>>>=0)-(t>>>=0),s=Math.min(o,a),h=this.slice(n,i),c=e.slice(t,r),f=0;f<s;++f)if(h[f]!==c[f]){o=h[f],a=c[f];break}return o<a?-1:a<o?1:0},p.prototype.includes=function(e,t,r){return-1!==this.indexOf(e,t,r)},p.prototype.indexOf=function(e,t,r){return S(this,e,t,r,!0)},p.prototype.lastIndexOf=function(e,t,r){return S(this,e,t,r,!1)},p.prototype.write=function(e,t,r,n){if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t|=0,isFinite(r)?(r|=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}var i=this.length-t;if((void 0===r||r>i)&&(r=i),e.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var o=!1;;)switch(n){case"hex":return R(this,e,t,r);case"utf8":case"utf-8":return A(this,e,t,r);case"ascii":return B(this,e,t,r);case"latin1":case"binary":return z(this,e,t,r);case"base64":return L(this,e,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return T(this,e,t,r);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},p.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var C=4096;function O(e,t,r){var n="";r=Math.min(e.length,r);for(var i=t;i<r;++i)n+=String.fromCharCode(127&e[i]);return n}function D(e,t,r){var n="";r=Math.min(e.length,r);for(var i=t;i<r;++i)n+=String.fromCharCode(e[i]);return n}function P(e,t,r){var n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);for(var i="",o=t;o<r;++o)i+=X(e[o]);return i}function N(e,t,r){for(var n=e.slice(t,r),i="",o=0;o<n.length;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}function U(e,t,r){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>r)throw new RangeError("Trying to access beyond buffer length")}function F(e,t,r,n,i,o){if(!b(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<o)throw new RangeError('"value" argument is out of bounds');if(r+n>e.length)throw new RangeError("Index out of range")}function H(e,t,r,n){t<0&&(t=65535+t+1);for(var i=0,o=Math.min(e.length-r,2);i<o;++i)e[r+i]=(t&255<<8*(n?i:1-i))>>>8*(n?i:1-i)}function Z(e,t,r,n){t<0&&(t=4294967295+t+1);for(var i=0,o=Math.min(e.length-r,4);i<o;++i)e[r+i]=t>>>8*(n?i:3-i)&255}function j(e,t,r,n,i,o){if(r+n>e.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function W(e,t,r,n,i){return i||j(e,0,r,4),c(e,t,r,n,23,4),r+4}function Y(e,t,r,n,i){return i||j(e,0,r,8),c(e,t,r,n,52,8),r+8}p.prototype.slice=function(e,t){var r,n=this.length;if((e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e),p.TYPED_ARRAY_SUPPORT)(r=this.subarray(e,t)).__proto__=p.prototype;else{var i=t-e;r=new p(i,void 0);for(var o=0;o<i;++o)r[o]=this[o+e]}return r},p.prototype.readUIntLE=function(e,t,r){e|=0,t|=0,r||U(e,t,this.length);for(var n=this[e],i=1,o=0;++o<t&&(i*=256);)n+=this[e+o]*i;return n},p.prototype.readUIntBE=function(e,t,r){e|=0,t|=0,r||U(e,t,this.length);for(var n=this[e+--t],i=1;t>0&&(i*=256);)n+=this[e+--t]*i;return n},p.prototype.readUInt8=function(e,t){return t||U(e,1,this.length),this[e]},p.prototype.readUInt16LE=function(e,t){return t||U(e,2,this.length),this[e]|this[e+1]<<8},p.prototype.readUInt16BE=function(e,t){return t||U(e,2,this.length),this[e]<<8|this[e+1]},p.prototype.readUInt32LE=function(e,t){return t||U(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},p.prototype.readUInt32BE=function(e,t){return t||U(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},p.prototype.readIntLE=function(e,t,r){e|=0,t|=0,r||U(e,t,this.length);for(var n=this[e],i=1,o=0;++o<t&&(i*=256);)n+=this[e+o]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*t)),n},p.prototype.readIntBE=function(e,t,r){e|=0,t|=0,r||U(e,t,this.length);for(var n=t,i=1,o=this[e+--n];n>0&&(i*=256);)o+=this[e+--n]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*t)),o},p.prototype.readInt8=function(e,t){return t||U(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},p.prototype.readInt16LE=function(e,t){t||U(e,2,this.length);var r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},p.prototype.readInt16BE=function(e,t){t||U(e,2,this.length);var r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},p.prototype.readInt32LE=function(e,t){return t||U(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},p.prototype.readInt32BE=function(e,t){return t||U(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},p.prototype.readFloatLE=function(e,t){return t||U(e,4,this.length),h(this,e,!0,23,4)},p.prototype.readFloatBE=function(e,t){return t||U(e,4,this.length),h(this,e,!1,23,4)},p.prototype.readDoubleLE=function(e,t){return t||U(e,8,this.length),h(this,e,!0,52,8)},p.prototype.readDoubleBE=function(e,t){return t||U(e,8,this.length),h(this,e,!1,52,8)},p.prototype.writeUIntLE=function(e,t,r,n){(e=+e,t|=0,r|=0,n)||F(this,e,t,r,Math.pow(2,8*r)-1,0);var i=1,o=0;for(this[t]=255&e;++o<r&&(i*=256);)this[t+o]=e/i&255;return t+r},p.prototype.writeUIntBE=function(e,t,r,n){(e=+e,t|=0,r|=0,n)||F(this,e,t,r,Math.pow(2,8*r)-1,0);var i=r-1,o=1;for(this[t+i]=255&e;--i>=0&&(o*=256);)this[t+i]=e/o&255;return t+r},p.prototype.writeUInt8=function(e,t,r){return e=+e,t|=0,r||F(this,e,t,1,255,0),p.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),this[t]=255&e,t+1},p.prototype.writeUInt16LE=function(e,t,r){return e=+e,t|=0,r||F(this,e,t,2,65535,0),p.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):H(this,e,t,!0),t+2},p.prototype.writeUInt16BE=function(e,t,r){return e=+e,t|=0,r||F(this,e,t,2,65535,0),p.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):H(this,e,t,!1),t+2},p.prototype.writeUInt32LE=function(e,t,r){return e=+e,t|=0,r||F(this,e,t,4,4294967295,0),p.TYPED_ARRAY_SUPPORT?(this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e):Z(this,e,t,!0),t+4},p.prototype.writeUInt32BE=function(e,t,r){return e=+e,t|=0,r||F(this,e,t,4,4294967295,0),p.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):Z(this,e,t,!1),t+4},p.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t|=0,!n){var i=Math.pow(2,8*r-1);F(this,e,t,r,i-1,-i)}var o=0,a=1,s=0;for(this[t]=255&e;++o<r&&(a*=256);)e<0&&0===s&&0!==this[t+o-1]&&(s=1),this[t+o]=(e/a>>0)-s&255;return t+r},p.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t|=0,!n){var i=Math.pow(2,8*r-1);F(this,e,t,r,i-1,-i)}var o=r-1,a=1,s=0;for(this[t+o]=255&e;--o>=0&&(a*=256);)e<0&&0===s&&0!==this[t+o+1]&&(s=1),this[t+o]=(e/a>>0)-s&255;return t+r},p.prototype.writeInt8=function(e,t,r){return e=+e,t|=0,r||F(this,e,t,1,127,-128),p.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),e<0&&(e=255+e+1),this[t]=255&e,t+1},p.prototype.writeInt16LE=function(e,t,r){return e=+e,t|=0,r||F(this,e,t,2,32767,-32768),p.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):H(this,e,t,!0),t+2},p.prototype.writeInt16BE=function(e,t,r){return e=+e,t|=0,r||F(this,e,t,2,32767,-32768),p.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):H(this,e,t,!1),t+2},p.prototype.writeInt32LE=function(e,t,r){return e=+e,t|=0,r||F(this,e,t,4,2147483647,-2147483648),p.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24):Z(this,e,t,!0),t+4},p.prototype.writeInt32BE=function(e,t,r){return e=+e,t|=0,r||F(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),p.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):Z(this,e,t,!1),t+4},p.prototype.writeFloatLE=function(e,t,r){return W(this,e,t,!0,r)},p.prototype.writeFloatBE=function(e,t,r){return W(this,e,t,!1,r)},p.prototype.writeDoubleLE=function(e,t,r){return Y(this,e,t,!0,r)},p.prototype.writeDoubleBE=function(e,t,r){return Y(this,e,t,!1,r)},p.prototype.copy=function(e,t,r,n){if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);var i,o=n-r;if(this===e&&r<t&&t<n)for(i=o-1;i>=0;--i)e[i+t]=this[i+r];else if(o<1e3||!p.TYPED_ARRAY_SUPPORT)for(i=0;i<o;++i)e[i+t]=this[i+r];else Uint8Array.prototype.set.call(e,this.subarray(r,r+o),t);return o},p.prototype.fill=function(e,t,r,n){if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),1===e.length){var i=e.charCodeAt(0);i<256&&(e=i)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!p.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof e&&(e&=255);if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;var o;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(o=t;o<r;++o)this[o]=e;else{var a=b(e)?e:q(new p(e,n).toString()),s=a.length;for(o=0;o<r-t;++o)this[o+t]=a[o%s]}return this};var K=/[^+\/0-9A-Za-z-_]/g;function X(e){return e<16?"0"+e.toString(16):e.toString(16)}function q(e,t){var r;t=t||1/0;for(var n=e.length,i=null,o=[],a=0;a<n;++a){if((r=e.charCodeAt(a))>55295&&r<57344){if(!i){if(r>56319){(t-=3)>-1&&o.push(239,191,189);continue}if(a+1===n){(t-=3)>-1&&o.push(239,191,189);continue}i=r;continue}if(r<56320){(t-=3)>-1&&o.push(239,191,189),i=r;continue}r=65536+(i-55296<<10|r-56320)}else i&&(t-=3)>-1&&o.push(239,191,189);if(i=null,r<128){if((t-=1)<0)break;o.push(r)}else if(r<2048){if((t-=2)<0)break;o.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;o.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;o.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return o}function V(e){return function(e){var t,a,s,h,c,f;i||o();var u=e.length;if(u%4>0)throw new Error("Invalid string. Length must be a multiple of 4");c="="===e[u-2]?2:"="===e[u-1]?1:0,f=new n(3*u/4-c),s=c>0?u-4:u;var l=0;for(t=0,a=0;t<s;t+=4,a+=3)h=r[e.charCodeAt(t)]<<18|r[e.charCodeAt(t+1)]<<12|r[e.charCodeAt(t+2)]<<6|r[e.charCodeAt(t+3)],f[l++]=h>>16&255,f[l++]=h>>8&255,f[l++]=255&h;return 2===c?(h=r[e.charCodeAt(t)]<<2|r[e.charCodeAt(t+1)]>>4,f[l++]=255&h):1===c&&(h=r[e.charCodeAt(t)]<<10|r[e.charCodeAt(t+1)]<<4|r[e.charCodeAt(t+2)]>>2,f[l++]=h>>8&255,f[l++]=255&h),f}(function(e){if((e=function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}(e).replace(K,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function G(e,t,r,n){for(var i=0;i<n&&!(i+r>=t.length||i>=e.length);++i)t[i+r]=e[i];return i}function $(e){return null!=e&&(!!e._isBuffer||J(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&J(e.slice(0,0))}(e))}function J(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}var Q="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function ee(e,t){return e(t={exports:{}},t.exports),t.exports}var te,re,ne,ie="object",oe=function(e){return e&&e.Math==Math&&e},ae=oe(typeof globalThis==ie&&globalThis)||oe(typeof window==ie&&window)||oe(typeof self==ie&&self)||oe(typeof Q==ie&&Q)||Function("return this")(),se=function(e){try{return!!e()}catch(e){return!0}},he=!se(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),ce={}.propertyIsEnumerable,fe=Object.getOwnPropertyDescriptor,ue={f:fe&&!ce.call({1:2},1)?function(e){var t=fe(this,e);return!!t&&t.enumerable}:ce},le=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},de={}.toString,pe=function(e){return de.call(e).slice(8,-1)},_e="".split,ge=se(function(){return!Object("z").propertyIsEnumerable(0)})?function(e){return"String"==pe(e)?_e.call(e,""):Object(e)}:Object,ve=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e},we=function(e){return ge(ve(e))},ye=function(e){return"object"==typeof e?null!==e:"function"==typeof e},be=function(e,t){if(!ye(e))return e;var r,n;if(t&&"function"==typeof(r=e.toString)&&!ye(n=r.call(e)))return n;if("function"==typeof(r=e.valueOf)&&!ye(n=r.call(e)))return n;if(!t&&"function"==typeof(r=e.toString)&&!ye(n=r.call(e)))return n;throw TypeError("Can't convert object to primitive value")},me={}.hasOwnProperty,ke=function(e,t){return me.call(e,t)},Ee=ae.document,Se=ye(Ee)&&ye(Ee.createElement),xe=function(e){return Se?Ee.createElement(e):{}},Re=!he&&!se(function(){return 7!=Object.defineProperty(xe("div"),"a",{get:function(){return 7}}).a}),Ae=Object.getOwnPropertyDescriptor,Be={f:he?Ae:function(e,t){if(e=we(e),t=be(t,!0),Re)try{return Ae(e,t)}catch(e){}if(ke(e,t))return le(!ue.f.call(e,t),e[t])}},ze=function(e){if(!ye(e))throw TypeError(String(e)+" is not an object");return e},Le=Object.defineProperty,Te={f:he?Le:function(e,t,r){if(ze(e),t=be(t,!0),ze(r),Re)try{return Le(e,t,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(e[t]=r.value),e}},Me=he?function(e,t,r){return Te.f(e,t,le(1,r))}:function(e,t,r){return e[t]=r,e},Ie=function(e,t){try{Me(ae,e,t)}catch(r){ae[e]=t}return t},Ce=ee(function(e){var t=ae["__core-js_shared__"]||Ie("__core-js_shared__",{});(e.exports=function(e,r){return t[e]||(t[e]=void 0!==r?r:{})})("versions",[]).push({version:"3.2.1",mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})}),Oe=Ce("native-function-to-string",Function.toString),De=ae.WeakMap,Pe="function"==typeof De&&/native code/.test(Oe.call(De)),Ne=0,Ue=Math.random(),Fe=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++Ne+Ue).toString(36)},He=Ce("keys"),Ze=function(e){return He[e]||(He[e]=Fe(e))},je={},We=ae.WeakMap;if(Pe){var Ye=new We,Ke=Ye.get,Xe=Ye.has,qe=Ye.set;te=function(e,t){return qe.call(Ye,e,t),t},re=function(e){return Ke.call(Ye,e)||{}},ne=function(e){return Xe.call(Ye,e)}}else{var Ve=Ze("state");je[Ve]=!0,te=function(e,t){return Me(e,Ve,t),t},re=function(e){return ke(e,Ve)?e[Ve]:{}},ne=function(e){return ke(e,Ve)}}var Ge={set:te,get:re,has:ne,enforce:function(e){return ne(e)?re(e):te(e,{})},getterFor:function(e){return function(t){var r;if(!ye(t)||(r=re(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return r}}},$e=ee(function(e){var t=Ge.get,r=Ge.enforce,n=String(Oe).split("toString");Ce("inspectSource",function(e){return Oe.call(e)}),(e.exports=function(e,t,i,o){var a=!!o&&!!o.unsafe,s=!!o&&!!o.enumerable,h=!!o&&!!o.noTargetGet;"function"==typeof i&&("string"!=typeof t||ke(i,"name")||Me(i,"name",t),r(i).source=n.join("string"==typeof t?t:"")),e!==ae?(a?!h&&e[t]&&(s=!0):delete e[t],s?e[t]=i:Me(e,t,i)):s?e[t]=i:Ie(t,i)})(Function.prototype,"toString",function(){return"function"==typeof this&&t(this).source||Oe.call(this)})}),Je=ae,Qe=function(e){return"function"==typeof e?e:void 0},et=function(e,t){return arguments.length<2?Qe(Je[e])||Qe(ae[e]):Je[e]&&Je[e][t]||ae[e]&&ae[e][t]},tt=Math.ceil,rt=Math.floor,nt=function(e){return isNaN(e=+e)?0:(e>0?rt:tt)(e)},it=Math.min,ot=function(e){return e>0?it(nt(e),9007199254740991):0},at=Math.max,st=Math.min,ht=function(e){return function(t,r,n){var i,o=we(t),a=ot(o.length),s=function(e,t){var r=nt(e);return r<0?at(r+t,0):st(r,t)}(n,a);if(e&&r!=r){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},ct={includes:ht(!0),indexOf:ht(!1)}.indexOf,ft=function(e,t){var r,n=we(e),i=0,o=[];for(r in n)!ke(je,r)&&ke(n,r)&&o.push(r);for(;t.length>i;)ke(n,r=t[i++])&&(~ct(o,r)||o.push(r));return o},ut=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],lt=ut.concat("length","prototype"),dt={f:Object.getOwnPropertyNames||function(e){return ft(e,lt)}},pt={f:Object.getOwnPropertySymbols},_t=et("Reflect","ownKeys")||function(e){var t=dt.f(ze(e)),r=pt.f;return r?t.concat(r(e)):t},gt=function(e,t){for(var r=_t(t),n=Te.f,i=Be.f,o=0;o<r.length;o++){var a=r[o];ke(e,a)||n(e,a,i(t,a))}},vt=/#|\.prototype\./,wt=function(e,t){var r=bt[yt(e)];return r==kt||r!=mt&&("function"==typeof t?se(t):!!t)},yt=wt.normalize=function(e){return String(e).replace(vt,".").toLowerCase()},bt=wt.data={},mt=wt.NATIVE="N",kt=wt.POLYFILL="P",Et=wt,St=Be.f,xt=function(e,t){var r,n,i,o,a,s=e.target,h=e.global,c=e.stat;if(r=h?ae:c?ae[s]||Ie(s,{}):(ae[s]||{}).prototype)for(n in t){if(o=t[n],i=e.noTargetGet?(a=St(r,n))&&a.value:r[n],!Et(h?n:s+(c?".":"#")+n,e.forced)&&void 0!==i){if(typeof o==typeof i)continue;gt(o,i)}(e.sham||i&&i.sham)&&Me(o,"sham",!0),$e(r,n,o,e)}};xt({target:"Date",stat:!0},{now:function(){return(new Date).getTime()}});var Rt=Date.prototype,At=Rt.toString,Bt=Rt.getTime;new Date(NaN)+""!="Invalid Date"&&$e(Rt,"toString",function(){var e=Bt.call(this);return e==e?At.call(this):"Invalid Date"});var zt=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,r={};try{(e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(r,[]),t=r instanceof Array}catch(e){}return function(r,n){return ze(r),function(e){if(!ye(e)&&null!==e)throw TypeError("Can't set "+String(e)+" as a prototype")}(n),t?e.call(r,n):r.__proto__=n,r}}():void 0),Lt=function(e,t,r){var n,i;return zt&&"function"==typeof(n=t.constructor)&&n!==r&&ye(i=n.prototype)&&i!==r.prototype&&zt(e,i),e},Tt=Object.keys||function(e){return ft(e,ut)},Mt=he?Object.defineProperties:function(e,t){ze(e);for(var r,n=Tt(t),i=n.length,o=0;i>o;)Te.f(e,r=n[o++],t[r]);return e},It=et("document","documentElement"),Ct=Ze("IE_PROTO"),Ot=function(){},Dt=function(){var e,t=xe("iframe"),r=ut.length;for(t.style.display="none",It.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),Dt=e.F;r--;)delete Dt.prototype[ut[r]];return Dt()},Pt=Object.create||function(e,t){var r;return null!==e?(Ot.prototype=ze(e),r=new Ot,Ot.prototype=null,r[Ct]=e):r=Dt(),void 0===t?r:Mt(r,t)};je[Ct]=!0;var Nt="[\t\n\v\f\r                　\u2028\u2029\ufeff]",Ut=RegExp("^"+Nt+Nt+"*"),Ft=RegExp(Nt+Nt+"*$"),Ht=function(e){return function(t){var r=String(ve(t));return 1&e&&(r=r.replace(Ut,"")),2&e&&(r=r.replace(Ft,"")),r}},Zt={start:Ht(1),end:Ht(2),trim:Ht(3)},jt=dt.f,Wt=Be.f,Yt=Te.f,Kt=Zt.trim,Xt=ae.Number,qt=Xt.prototype,Vt="Number"==pe(Pt(qt)),Gt=function(e){var t,r,n,i,o,a,s,h,c=be(e,!1);if("string"==typeof c&&c.length>2)if(43===(t=(c=Kt(c)).charCodeAt(0))||45===t){if(88===(r=c.charCodeAt(2))||120===r)return NaN}else if(48===t){switch(c.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+c}for(a=(o=c.slice(2)).length,s=0;s<a;s++)if((h=o.charCodeAt(s))<48||h>i)return NaN;return parseInt(o,n)}return+c};if(Et("Number",!Xt(" 0o1")||!Xt("0b1")||Xt("+0x1"))){for(var $t,Jt=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof Jt&&(Vt?se(function(){qt.valueOf.call(r)}):"Number"!=pe(r))?Lt(new Xt(Gt(t)),r,Jt):Gt(t)},Qt=he?jt(Xt):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),er=0;Qt.length>er;er++)ke(Xt,$t=Qt[er])&&!ke(Jt,$t)&&Yt(Jt,$t,Wt(Xt,$t));Jt.prototype=qt,qt.constructor=Jt,$e(ae,"Number",Jt)}var tr=!!Object.getOwnPropertySymbols&&!se(function(){return!String(Symbol())}),rr=ae.Symbol,nr=Ce("wks"),ir=function(e){return nr[e]||(nr[e]=tr&&rr[e]||(tr?rr:Fe)("Symbol."+e))},or=ir("toStringTag"),ar="Arguments"==pe(function(){return arguments}()),sr={};sr[ir("toStringTag")]="z";var hr="[object z]"!==String(sr)?function(){return"[object "+function(e){var t,r,n;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),or))?r:ar?pe(t):"Object"==(n=pe(t))&&"function"==typeof t.callee?"Arguments":n}(this)+"]"}:sr.toString,cr=Object.prototype;hr!==cr.toString&&$e(cr,"toString",hr,{unsafe:!0});var fr,ur,lr=function(){var e=ze(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t},dr=RegExp.prototype.exec,pr=String.prototype.replace,_r=dr,gr=(fr=/a/,ur=/b*/g,dr.call(fr,"a"),dr.call(ur,"a"),0!==fr.lastIndex||0!==ur.lastIndex),vr=void 0!==/()??/.exec("")[1];(gr||vr)&&(_r=function(e){var t,r,n,i,o=this;return vr&&(r=new RegExp("^"+o.source+"$(?!\\s)",lr.call(o))),gr&&(t=o.lastIndex),n=dr.call(o,e),gr&&n&&(o.lastIndex=o.global?n.index+n[0].length:t),vr&&n&&n.length>1&&pr.call(n[0],r,function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(n[i]=void 0)}),n});var wr=_r;xt({target:"RegExp",proto:!0,forced:/./.exec!==wr},{exec:wr});var yr=RegExp.prototype,br=yr.toString,mr=se(function(){return"/a/b"!=br.call({source:"a",flags:"b"})}),kr="toString"!=br.name;(mr||kr)&&$e(RegExp.prototype,"toString",function(){var e=ze(this),t=String(e.source),r=e.flags;return"/"+t+"/"+String(void 0===r&&e instanceof RegExp&&!("flags"in yr)?lr.call(e):r)},{unsafe:!0});var Er=ir("species"),Sr=!se(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),xr=!se(function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}),Rr=function(e){return Object(ve(e))},Ar=function(e){return function(t,r){var n,i,o=String(ve(t)),a=nt(r),s=o.length;return a<0||a>=s?e?"":void 0:(n=o.charCodeAt(a))<55296||n>56319||a+1===s||(i=o.charCodeAt(a+1))<56320||i>57343?e?o.charAt(a):n:e?o.slice(a,a+2):i-56320+(n-55296<<10)+65536}},Br={codeAt:Ar(!1),charAt:Ar(!0)}.charAt,zr=function(e,t,r){return t+(r?Br(e,t).length:1)},Lr=function(e,t){var r=e.exec;if("function"==typeof r){var n=r.call(e,t);if("object"!=typeof n)throw TypeError("RegExp exec method returned something other than an Object or null");return n}if("RegExp"!==pe(e))throw TypeError("RegExp#exec called on incompatible receiver");return wr.call(e,t)},Tr=Math.max,Mr=Math.min,Ir=Math.floor,Cr=/\$([$&'`]|\d\d?|<[^>]*>)/g,Or=/\$([$&'`]|\d\d?)/g;function Dr(e){return(Dr="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Pr(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}!function(e,t,r,n){var i=ir(e),o=!se(function(){var t={};return t[i]=function(){return 7},7!=""[e](t)}),a=o&&!se(function(){var t=!1,r=/a/;return r.exec=function(){return t=!0,null},"split"===e&&(r.constructor={},r.constructor[Er]=function(){return r}),r[i](""),!t});if(!o||!a||"replace"===e&&!Sr||"split"===e&&!xr){var s=/./[i],h=r(i,""[e],function(e,t,r,n,i){return t.exec===wr?o&&!i?{done:!0,value:s.call(t,r,n)}:{done:!0,value:e.call(r,t,n)}:{done:!1}}),c=h[0],f=h[1];$e(String.prototype,e,c),$e(RegExp.prototype,i,2==t?function(e,t){return f.call(e,this,t)}:function(e){return f.call(e,this)}),n&&Me(RegExp.prototype[i],"sham",!0)}}("replace",2,function(e,t,r){return[function(r,n){var i=ve(this),o=null==r?void 0:r[e];return void 0!==o?o.call(r,i,n):t.call(String(i),r,n)},function(e,i){var o=r(t,e,this,i);if(o.done)return o.value;var a=ze(e),s=String(this),h="function"==typeof i;h||(i=String(i));var c=a.global;if(c){var f=a.unicode;a.lastIndex=0}for(var u=[];;){var l=Lr(a,s);if(null===l)break;if(u.push(l),!c)break;""===String(l[0])&&(a.lastIndex=zr(s,ot(a.lastIndex),f))}for(var d,p="",_=0,g=0;g<u.length;g++){l=u[g];for(var v=String(l[0]),w=Tr(Mr(nt(l.index),s.length),0),y=[],b=1;b<l.length;b++)y.push(void 0===(d=l[b])?d:String(d));var m=l.groups;if(h){var k=[v].concat(y,w,s);void 0!==m&&k.push(m);var E=String(i.apply(void 0,k))}else E=n(v,s,w,y,m,i);w>=_&&(p+=s.slice(_,w)+E,_=w+v.length)}return p+s.slice(_)}];function n(e,r,n,i,o,a){var s=n+e.length,h=i.length,c=Or;return void 0!==o&&(o=Rr(o),c=Cr),t.call(a,c,function(t,a){var c;switch(a.charAt(0)){case"$":return"$";case"&":return e;case"`":return r.slice(0,n);case"'":return r.slice(s);case"<":c=o[a.slice(1,-1)];break;default:var f=+a;if(0===f)return t;if(f>h){var u=Ir(f/10);return 0===u?t:u<=h?void 0===i[u-1]?a.charAt(1):i[u-1]+a.charAt(1):t}c=i[f-1]}return void 0===c?"":c})}});var Nr=ee(function(e,t){var r;e.exports=(r=r||function(e,t){var r=Object.create||function(){function e(){}return function(t){var r;return e.prototype=t,r=new e,e.prototype=null,r}}(),n={},i=n.lib={},o=i.Base={extend:function(e){var t=r(this);return e&&t.mixIn(e),t.hasOwnProperty("init")&&this.init!==t.init||(t.init=function(){t.$super.init.apply(this,arguments)}),t.init.prototype=t,t.$super=this,t},create:function(){var e=this.extend();return e.init.apply(e,arguments),e},init:function(){},mixIn:function(e){for(var t in e)e.hasOwnProperty(t)&&(this[t]=e[t]);e.hasOwnProperty("toString")&&(this.toString=e.toString)},clone:function(){return this.init.prototype.extend(this)}},a=i.WordArray=o.extend({init:function(e,t){e=this.words=e||[],this.sigBytes=null!=t?t:4*e.length},toString:function(e){return(e||h).stringify(this)},concat:function(e){var t=this.words,r=e.words,n=this.sigBytes,i=e.sigBytes;if(this.clamp(),n%4)for(var o=0;o<i;o++){var a=r[o>>>2]>>>24-o%4*8&255;t[n+o>>>2]|=a<<24-(n+o)%4*8}else for(var o=0;o<i;o+=4)t[n+o>>>2]=r[o>>>2];return this.sigBytes+=i,this},clamp:function(){var t=this.words,r=this.sigBytes;t[r>>>2]&=4294967295<<32-r%4*8,t.length=e.ceil(r/4)},clone:function(){var e=o.clone.call(this);return e.words=this.words.slice(0),e},random:function(t){for(var r,n=[],i=function(t){var t=t,r=987654321,n=4294967295;return function(){var i=((r=36969*(65535&r)+(r>>16)&n)<<16)+(t=18e3*(65535&t)+(t>>16)&n)&n;return i/=4294967296,(i+=.5)*(e.random()>.5?1:-1)}},o=0;o<t;o+=4){var s=i(4294967296*(r||e.random()));r=987654071*s(),n.push(4294967296*s()|0)}return new a.init(n,t)}}),s=n.enc={},h=s.Hex={stringify:function(e){for(var t=e.words,r=e.sigBytes,n=[],i=0;i<r;i++){var o=t[i>>>2]>>>24-i%4*8&255;n.push((o>>>4).toString(16)),n.push((15&o).toString(16))}return n.join("")},parse:function(e){for(var t=e.length,r=[],n=0;n<t;n+=2)r[n>>>3]|=parseInt(e.substr(n,2),16)<<24-n%8*4;return new a.init(r,t/2)}},c=s.Latin1={stringify:function(e){for(var t=e.words,r=e.sigBytes,n=[],i=0;i<r;i++){var o=t[i>>>2]>>>24-i%4*8&255;n.push(String.fromCharCode(o))}return n.join("")},parse:function(e){for(var t=e.length,r=[],n=0;n<t;n++)r[n>>>2]|=(255&e.charCodeAt(n))<<24-n%4*8;return new a.init(r,t)}},f=s.Utf8={stringify:function(e){try{return decodeURIComponent(escape(c.stringify(e)))}catch(e){throw new Error("Malformed UTF-8 data")}},parse:function(e){return c.parse(unescape(encodeURIComponent(e)))}},u=i.BufferedBlockAlgorithm=o.extend({reset:function(){this._data=new a.init,this._nDataBytes=0},_append:function(e){"string"==typeof e&&(e=f.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes},_process:function(t){var r=this._data,n=r.words,i=r.sigBytes,o=this.blockSize,s=4*o,h=i/s,c=(h=t?e.ceil(h):e.max((0|h)-this._minBufferSize,0))*o,f=e.min(4*c,i);if(c){for(var u=0;u<c;u+=o)this._doProcessBlock(n,u);var l=n.splice(0,c);r.sigBytes-=f}return new a.init(l,f)},clone:function(){var e=o.clone.call(this);return e._data=this._data.clone(),e},_minBufferSize:0}),l=(i.Hasher=u.extend({cfg:o.extend(),init:function(e){this.cfg=this.cfg.extend(e),this.reset()},reset:function(){u.reset.call(this),this._doReset()},update:function(e){return this._append(e),this._process(),this},finalize:function(e){e&&this._append(e);var t=this._doFinalize();return t},blockSize:16,_createHelper:function(e){return function(t,r){return new e.init(r).finalize(t)}},_createHmacHelper:function(e){return function(t,r){return new l.HMAC.init(e,r).finalize(t)}}}),n.algo={});return n}(Math),r)}),Ur=(ee(function(e,t){var r,n,i,o,a,s;e.exports=(i=(n=r=Nr).lib,o=i.Base,a=i.WordArray,(s=n.x64={}).Word=o.extend({init:function(e,t){this.high=e,this.low=t}}),s.WordArray=o.extend({init:function(e,t){e=this.words=e||[],this.sigBytes=null!=t?t:8*e.length},toX32:function(){for(var e=this.words,t=e.length,r=[],n=0;n<t;n++){var i=e[n];r.push(i.high),r.push(i.low)}return a.create(r,this.sigBytes)},clone:function(){for(var e=o.clone.call(this),t=e.words=this.words.slice(0),r=t.length,n=0;n<r;n++)t[n]=t[n].clone();return e}}),r)}),ee(function(e,t){var r;e.exports=(r=Nr,function(){if("function"==typeof ArrayBuffer){var e=r.lib.WordArray,t=e.init;(e.init=function(e){if(e instanceof ArrayBuffer&&(e=new Uint8Array(e)),(e instanceof Int8Array||"undefined"!=typeof Uint8ClampedArray&&e instanceof Uint8ClampedArray||e instanceof Int16Array||e instanceof Uint16Array||e instanceof Int32Array||e instanceof Uint32Array||e instanceof Float32Array||e instanceof Float64Array)&&(e=new Uint8Array(e.buffer,e.byteOffset,e.byteLength)),e instanceof Uint8Array){for(var r=e.byteLength,n=[],i=0;i<r;i++)n[i>>>2]|=e[i]<<24-i%4*8;t.call(this,n,r)}else t.apply(this,arguments)}).prototype=e}}(),r.lib.WordArray)}),ee(function(e,t){var r;e.exports=(r=Nr,function(){var e=r,t=e.lib.WordArray,n=e.enc;function i(e){return e<<8&4278255360|e>>>8&16711935}n.Utf16=n.Utf16BE={stringify:function(e){for(var t=e.words,r=e.sigBytes,n=[],i=0;i<r;i+=2){var o=t[i>>>2]>>>16-i%4*8&65535;n.push(String.fromCharCode(o))}return n.join("")},parse:function(e){for(var r=e.length,n=[],i=0;i<r;i++)n[i>>>1]|=e.charCodeAt(i)<<16-i%2*16;return t.create(n,2*r)}},n.Utf16LE={stringify:function(e){for(var t=e.words,r=e.sigBytes,n=[],o=0;o<r;o+=2){var a=i(t[o>>>2]>>>16-o%4*8&65535);n.push(String.fromCharCode(a))}return n.join("")},parse:function(e){for(var r=e.length,n=[],o=0;o<r;o++)n[o>>>1]|=i(e.charCodeAt(o)<<16-o%2*16);return t.create(n,2*r)}}}(),r.enc.Utf16)}),ee(function(e,t){var r,n,i;e.exports=(i=(n=r=Nr).lib.WordArray,n.enc.Base64={stringify:function(e){var t=e.words,r=e.sigBytes,n=this._map;e.clamp();for(var i=[],o=0;o<r;o+=3)for(var a=(t[o>>>2]>>>24-o%4*8&255)<<16|(t[o+1>>>2]>>>24-(o+1)%4*8&255)<<8|t[o+2>>>2]>>>24-(o+2)%4*8&255,s=0;s<4&&o+.75*s<r;s++)i.push(n.charAt(a>>>6*(3-s)&63));var h=n.charAt(64);if(h)for(;i.length%4;)i.push(h);return i.join("")},parse:function(e){var t=e.length,r=this._map,n=this._reverseMap;if(!n){n=this._reverseMap=[];for(var o=0;o<r.length;o++)n[r.charCodeAt(o)]=o}var a=r.charAt(64);if(a){var s=e.indexOf(a);-1!==s&&(t=s)}return function(e,t,r){for(var n=[],o=0,a=0;a<t;a++)if(a%4){var s=r[e.charCodeAt(a-1)]<<a%4*2,h=r[e.charCodeAt(a)]>>>6-a%4*2;n[o>>>2]|=(s|h)<<24-o%4*8,o++}return i.create(n,o)}(e,t,n)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="},r.enc.Base64)}),ee(function(e,t){var r;e.exports=(r=Nr,function(e){var t=r,n=t.lib,i=n.WordArray,o=n.Hasher,a=t.algo,s=[];!function(){for(var t=0;t<64;t++)s[t]=4294967296*e.abs(e.sin(t+1))|0}();var h=a.MD5=o.extend({_doReset:function(){this._hash=new i.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(e,t){for(var r=0;r<16;r++){var n=t+r,i=e[n];e[n]=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8)}var o=this._hash.words,a=e[t+0],h=e[t+1],d=e[t+2],p=e[t+3],_=e[t+4],g=e[t+5],v=e[t+6],w=e[t+7],y=e[t+8],b=e[t+9],m=e[t+10],k=e[t+11],E=e[t+12],S=e[t+13],x=e[t+14],R=e[t+15],A=o[0],B=o[1],z=o[2],L=o[3];A=c(A,B,z,L,a,7,s[0]),L=c(L,A,B,z,h,12,s[1]),z=c(z,L,A,B,d,17,s[2]),B=c(B,z,L,A,p,22,s[3]),A=c(A,B,z,L,_,7,s[4]),L=c(L,A,B,z,g,12,s[5]),z=c(z,L,A,B,v,17,s[6]),B=c(B,z,L,A,w,22,s[7]),A=c(A,B,z,L,y,7,s[8]),L=c(L,A,B,z,b,12,s[9]),z=c(z,L,A,B,m,17,s[10]),B=c(B,z,L,A,k,22,s[11]),A=c(A,B,z,L,E,7,s[12]),L=c(L,A,B,z,S,12,s[13]),z=c(z,L,A,B,x,17,s[14]),A=f(A,B=c(B,z,L,A,R,22,s[15]),z,L,h,5,s[16]),L=f(L,A,B,z,v,9,s[17]),z=f(z,L,A,B,k,14,s[18]),B=f(B,z,L,A,a,20,s[19]),A=f(A,B,z,L,g,5,s[20]),L=f(L,A,B,z,m,9,s[21]),z=f(z,L,A,B,R,14,s[22]),B=f(B,z,L,A,_,20,s[23]),A=f(A,B,z,L,b,5,s[24]),L=f(L,A,B,z,x,9,s[25]),z=f(z,L,A,B,p,14,s[26]),B=f(B,z,L,A,y,20,s[27]),A=f(A,B,z,L,S,5,s[28]),L=f(L,A,B,z,d,9,s[29]),z=f(z,L,A,B,w,14,s[30]),A=u(A,B=f(B,z,L,A,E,20,s[31]),z,L,g,4,s[32]),L=u(L,A,B,z,y,11,s[33]),z=u(z,L,A,B,k,16,s[34]),B=u(B,z,L,A,x,23,s[35]),A=u(A,B,z,L,h,4,s[36]),L=u(L,A,B,z,_,11,s[37]),z=u(z,L,A,B,w,16,s[38]),B=u(B,z,L,A,m,23,s[39]),A=u(A,B,z,L,S,4,s[40]),L=u(L,A,B,z,a,11,s[41]),z=u(z,L,A,B,p,16,s[42]),B=u(B,z,L,A,v,23,s[43]),A=u(A,B,z,L,b,4,s[44]),L=u(L,A,B,z,E,11,s[45]),z=u(z,L,A,B,R,16,s[46]),A=l(A,B=u(B,z,L,A,d,23,s[47]),z,L,a,6,s[48]),L=l(L,A,B,z,w,10,s[49]),z=l(z,L,A,B,x,15,s[50]),B=l(B,z,L,A,g,21,s[51]),A=l(A,B,z,L,E,6,s[52]),L=l(L,A,B,z,p,10,s[53]),z=l(z,L,A,B,m,15,s[54]),B=l(B,z,L,A,h,21,s[55]),A=l(A,B,z,L,y,6,s[56]),L=l(L,A,B,z,R,10,s[57]),z=l(z,L,A,B,v,15,s[58]),B=l(B,z,L,A,S,21,s[59]),A=l(A,B,z,L,_,6,s[60]),L=l(L,A,B,z,k,10,s[61]),z=l(z,L,A,B,d,15,s[62]),B=l(B,z,L,A,b,21,s[63]),o[0]=o[0]+A|0,o[1]=o[1]+B|0,o[2]=o[2]+z|0,o[3]=o[3]+L|0},_doFinalize:function(){var t=this._data,r=t.words,n=8*this._nDataBytes,i=8*t.sigBytes;r[i>>>5]|=128<<24-i%32;var o=e.floor(n/4294967296),a=n;r[15+(i+64>>>9<<4)]=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8),r[14+(i+64>>>9<<4)]=16711935&(a<<8|a>>>24)|4278255360&(a<<24|a>>>8),t.sigBytes=4*(r.length+1),this._process();for(var s=this._hash,h=s.words,c=0;c<4;c++){var f=h[c];h[c]=16711935&(f<<8|f>>>24)|4278255360&(f<<24|f>>>8)}return s},clone:function(){var e=o.clone.call(this);return e._hash=this._hash.clone(),e}});function c(e,t,r,n,i,o,a){var s=e+(t&r|~t&n)+i+a;return(s<<o|s>>>32-o)+t}function f(e,t,r,n,i,o,a){var s=e+(t&n|r&~n)+i+a;return(s<<o|s>>>32-o)+t}function u(e,t,r,n,i,o,a){var s=e+(t^r^n)+i+a;return(s<<o|s>>>32-o)+t}function l(e,t,r,n,i,o,a){var s=e+(r^(t|~n))+i+a;return(s<<o|s>>>32-o)+t}t.MD5=o._createHelper(h),t.HmacMD5=o._createHmacHelper(h)}(Math),r.MD5)}),ee(function(e,t){var r,n,i,o,a,s,h,c;e.exports=(i=(n=r=Nr).lib,o=i.WordArray,a=i.Hasher,s=n.algo,h=[],c=s.SHA1=a.extend({_doReset:function(){this._hash=new o.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(e,t){for(var r=this._hash.words,n=r[0],i=r[1],o=r[2],a=r[3],s=r[4],c=0;c<80;c++){if(c<16)h[c]=0|e[t+c];else{var f=h[c-3]^h[c-8]^h[c-14]^h[c-16];h[c]=f<<1|f>>>31}var u=(n<<5|n>>>27)+s+h[c];u+=c<20?1518500249+(i&o|~i&a):c<40?1859775393+(i^o^a):c<60?(i&o|i&a|o&a)-1894007588:(i^o^a)-899497514,s=a,a=o,o=i<<30|i>>>2,i=n,n=u}r[0]=r[0]+n|0,r[1]=r[1]+i|0,r[2]=r[2]+o|0,r[3]=r[3]+a|0,r[4]=r[4]+s|0},_doFinalize:function(){var e=this._data,t=e.words,r=8*this._nDataBytes,n=8*e.sigBytes;return t[n>>>5]|=128<<24-n%32,t[14+(n+64>>>9<<4)]=Math.floor(r/4294967296),t[15+(n+64>>>9<<4)]=r,e.sigBytes=4*t.length,this._process(),this._hash},clone:function(){var e=a.clone.call(this);return e._hash=this._hash.clone(),e}}),n.SHA1=a._createHelper(c),n.HmacSHA1=a._createHmacHelper(c),r.SHA1)}),ee(function(e,t){var r;e.exports=(r=Nr,function(e){var t=r,n=t.lib,i=n.WordArray,o=n.Hasher,a=t.algo,s=[],h=[];!function(){function t(t){for(var r=e.sqrt(t),n=2;n<=r;n++)if(!(t%n))return!1;return!0}function r(e){return 4294967296*(e-(0|e))|0}for(var n=2,i=0;i<64;)t(n)&&(i<8&&(s[i]=r(e.pow(n,.5))),h[i]=r(e.pow(n,1/3)),i++),n++}();var c=[],f=a.SHA256=o.extend({_doReset:function(){this._hash=new i.init(s.slice(0))},_doProcessBlock:function(e,t){for(var r=this._hash.words,n=r[0],i=r[1],o=r[2],a=r[3],s=r[4],f=r[5],u=r[6],l=r[7],d=0;d<64;d++){if(d<16)c[d]=0|e[t+d];else{var p=c[d-15],_=(p<<25|p>>>7)^(p<<14|p>>>18)^p>>>3,g=c[d-2],v=(g<<15|g>>>17)^(g<<13|g>>>19)^g>>>10;c[d]=_+c[d-7]+v+c[d-16]}var w=n&i^n&o^i&o,y=(n<<30|n>>>2)^(n<<19|n>>>13)^(n<<10|n>>>22),b=l+((s<<26|s>>>6)^(s<<21|s>>>11)^(s<<7|s>>>25))+(s&f^~s&u)+h[d]+c[d];l=u,u=f,f=s,s=a+b|0,a=o,o=i,i=n,n=b+(y+w)|0}r[0]=r[0]+n|0,r[1]=r[1]+i|0,r[2]=r[2]+o|0,r[3]=r[3]+a|0,r[4]=r[4]+s|0,r[5]=r[5]+f|0,r[6]=r[6]+u|0,r[7]=r[7]+l|0},_doFinalize:function(){var t=this._data,r=t.words,n=8*this._nDataBytes,i=8*t.sigBytes;return r[i>>>5]|=128<<24-i%32,r[14+(i+64>>>9<<4)]=e.floor(n/4294967296),r[15+(i+64>>>9<<4)]=n,t.sigBytes=4*r.length,this._process(),this._hash},clone:function(){var e=o.clone.call(this);return e._hash=this._hash.clone(),e}});t.SHA256=o._createHelper(f),t.HmacSHA256=o._createHmacHelper(f)}(Math),r.SHA256)}),ee(function(e,t){var r,n,i,o,a,s;e.exports=(i=(n=r=Nr).lib.WordArray,o=n.algo,a=o.SHA256,s=o.SHA224=a.extend({_doReset:function(){this._hash=new i.init([3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428])},_doFinalize:function(){var e=a._doFinalize.call(this);return e.sigBytes-=4,e}}),n.SHA224=a._createHelper(s),n.HmacSHA224=a._createHmacHelper(s),r.SHA224)}),ee(function(e,t){var r;e.exports=(r=Nr,function(){var e=r,t=e.lib.Hasher,n=e.x64,i=n.Word,o=n.WordArray,a=e.algo;function s(){return i.create.apply(i,arguments)}var h=[s(1116352408,3609767458),s(1899447441,602891725),s(3049323471,3964484399),s(3921009573,2173295548),s(961987163,4081628472),s(1508970993,3053834265),s(2453635748,2937671579),s(2870763221,3664609560),s(3624381080,2734883394),s(310598401,1164996542),s(607225278,1323610764),s(1426881987,3590304994),s(1925078388,4068182383),s(2162078206,991336113),s(2614888103,633803317),s(3248222580,3479774868),s(3835390401,2666613458),s(4022224774,944711139),s(264347078,2341262773),s(604807628,2007800933),s(770255983,1495990901),s(1249150122,1856431235),s(1555081692,3175218132),s(1996064986,2198950837),s(2554220882,3999719339),s(2821834349,766784016),s(2952996808,2566594879),s(3210313671,3203337956),s(3336571891,1034457026),s(3584528711,2466948901),s(113926993,3758326383),s(338241895,168717936),s(666307205,1188179964),s(773529912,1546045734),s(1294757372,1522805485),s(1396182291,2643833823),s(1695183700,2343527390),s(1986661051,1014477480),s(2177026350,1206759142),s(2456956037,344077627),s(2730485921,1290863460),s(2820302411,3158454273),s(3259730800,3505952657),s(3345764771,106217008),s(3516065817,3606008344),s(3600352804,1432725776),s(4094571909,1467031594),s(275423344,851169720),s(430227734,3100823752),s(506948616,1363258195),s(659060556,3750685593),s(883997877,3785050280),s(958139571,3318307427),s(1322822218,3812723403),s(1537002063,2003034995),s(1747873779,3602036899),s(1955562222,1575990012),s(2024104815,1125592928),s(2227730452,2716904306),s(2361852424,442776044),s(2428436474,593698344),s(2756734187,3733110249),s(3204031479,2999351573),s(3329325298,3815920427),s(3391569614,3928383900),s(3515267271,566280711),s(3940187606,3454069534),s(4118630271,4000239992),s(116418474,1914138554),s(174292421,2731055270),s(289380356,3203993006),s(460393269,320620315),s(685471733,587496836),s(852142971,1086792851),s(1017036298,365543100),s(1126000580,2618297676),s(1288033470,3409855158),s(1501505948,4234509866),s(1607167915,987167468),s(1816402316,1246189591)],c=[];!function(){for(var e=0;e<80;e++)c[e]=s()}();var f=a.SHA512=t.extend({_doReset:function(){this._hash=new o.init([new i.init(1779033703,4089235720),new i.init(3144134277,2227873595),new i.init(1013904242,4271175723),new i.init(2773480762,1595750129),new i.init(1359893119,2917565137),new i.init(2600822924,725511199),new i.init(528734635,4215389547),new i.init(1541459225,327033209)])},_doProcessBlock:function(e,t){for(var r=this._hash.words,n=r[0],i=r[1],o=r[2],a=r[3],s=r[4],f=r[5],u=r[6],l=r[7],d=n.high,p=n.low,_=i.high,g=i.low,v=o.high,w=o.low,y=a.high,b=a.low,m=s.high,k=s.low,E=f.high,S=f.low,x=u.high,R=u.low,A=l.high,B=l.low,z=d,L=p,T=_,M=g,I=v,C=w,O=y,D=b,P=m,N=k,U=E,F=S,H=x,Z=R,j=A,W=B,Y=0;Y<80;Y++){var K=c[Y];if(Y<16)var X=K.high=0|e[t+2*Y],q=K.low=0|e[t+2*Y+1];else{var V=c[Y-15],G=V.high,$=V.low,J=(G>>>1|$<<31)^(G>>>8|$<<24)^G>>>7,Q=($>>>1|G<<31)^($>>>8|G<<24)^($>>>7|G<<25),ee=c[Y-2],te=ee.high,re=ee.low,ne=(te>>>19|re<<13)^(te<<3|re>>>29)^te>>>6,ie=(re>>>19|te<<13)^(re<<3|te>>>29)^(re>>>6|te<<26),oe=c[Y-7],ae=oe.high,se=oe.low,he=c[Y-16],ce=he.high,fe=he.low;X=(X=(X=J+ae+((q=Q+se)>>>0<Q>>>0?1:0))+ne+((q+=ie)>>>0<ie>>>0?1:0))+ce+((q+=fe)>>>0<fe>>>0?1:0),K.high=X,K.low=q}var ue,le=P&U^~P&H,de=N&F^~N&Z,pe=z&T^z&I^T&I,_e=L&M^L&C^M&C,ge=(z>>>28|L<<4)^(z<<30|L>>>2)^(z<<25|L>>>7),ve=(L>>>28|z<<4)^(L<<30|z>>>2)^(L<<25|z>>>7),we=(P>>>14|N<<18)^(P>>>18|N<<14)^(P<<23|N>>>9),ye=(N>>>14|P<<18)^(N>>>18|P<<14)^(N<<23|P>>>9),be=h[Y],me=be.high,ke=be.low,Ee=j+we+((ue=W+ye)>>>0<W>>>0?1:0),Se=ve+_e;j=H,W=Z,H=U,Z=F,U=P,F=N,P=O+(Ee=(Ee=(Ee=Ee+le+((ue+=de)>>>0<de>>>0?1:0))+me+((ue+=ke)>>>0<ke>>>0?1:0))+X+((ue+=q)>>>0<q>>>0?1:0))+((N=D+ue|0)>>>0<D>>>0?1:0)|0,O=I,D=C,I=T,C=M,T=z,M=L,z=Ee+(ge+pe+(Se>>>0<ve>>>0?1:0))+((L=ue+Se|0)>>>0<ue>>>0?1:0)|0}p=n.low=p+L,n.high=d+z+(p>>>0<L>>>0?1:0),g=i.low=g+M,i.high=_+T+(g>>>0<M>>>0?1:0),w=o.low=w+C,o.high=v+I+(w>>>0<C>>>0?1:0),b=a.low=b+D,a.high=y+O+(b>>>0<D>>>0?1:0),k=s.low=k+N,s.high=m+P+(k>>>0<N>>>0?1:0),S=f.low=S+F,f.high=E+U+(S>>>0<F>>>0?1:0),R=u.low=R+Z,u.high=x+H+(R>>>0<Z>>>0?1:0),B=l.low=B+W,l.high=A+j+(B>>>0<W>>>0?1:0)},_doFinalize:function(){var e=this._data,t=e.words,r=8*this._nDataBytes,n=8*e.sigBytes;return t[n>>>5]|=128<<24-n%32,t[30+(n+128>>>10<<5)]=Math.floor(r/4294967296),t[31+(n+128>>>10<<5)]=r,e.sigBytes=4*t.length,this._process(),this._hash.toX32()},clone:function(){var e=t.clone.call(this);return e._hash=this._hash.clone(),e},blockSize:32});e.SHA512=t._createHelper(f),e.HmacSHA512=t._createHmacHelper(f)}(),r.SHA512)}),ee(function(e,t){var r,n,i,o,a,s,h,c;e.exports=(i=(n=r=Nr).x64,o=i.Word,a=i.WordArray,s=n.algo,h=s.SHA512,c=s.SHA384=h.extend({_doReset:function(){this._hash=new a.init([new o.init(3418070365,3238371032),new o.init(1654270250,914150663),new o.init(2438529370,812702999),new o.init(355462360,4144912697),new o.init(1731405415,4290775857),new o.init(2394180231,1750603025),new o.init(3675008525,1694076839),new o.init(1203062813,3204075428)])},_doFinalize:function(){var e=h._doFinalize.call(this);return e.sigBytes-=16,e}}),n.SHA384=h._createHelper(c),n.HmacSHA384=h._createHmacHelper(c),r.SHA384)}),ee(function(e,t){var r;e.exports=(r=Nr,function(e){var t=r,n=t.lib,i=n.WordArray,o=n.Hasher,a=t.x64.Word,s=t.algo,h=[],c=[],f=[];!function(){for(var e=1,t=0,r=0;r<24;r++){h[e+5*t]=(r+1)*(r+2)/2%64;var n=(2*e+3*t)%5;e=t%5,t=n}for(e=0;e<5;e++)for(t=0;t<5;t++)c[e+5*t]=t+(2*e+3*t)%5*5;for(var i=1,o=0;o<24;o++){for(var s=0,u=0,l=0;l<7;l++){if(1&i){var d=(1<<l)-1;d<32?u^=1<<d:s^=1<<d-32}128&i?i=i<<1^113:i<<=1}f[o]=a.create(s,u)}}();var u=[];!function(){for(var e=0;e<25;e++)u[e]=a.create()}();var l=s.SHA3=o.extend({cfg:o.cfg.extend({outputLength:512}),_doReset:function(){for(var e=this._state=[],t=0;t<25;t++)e[t]=new a.init;this.blockSize=(1600-2*this.cfg.outputLength)/32},_doProcessBlock:function(e,t){for(var r=this._state,n=this.blockSize/2,i=0;i<n;i++){var o=e[t+2*i],a=e[t+2*i+1];o=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8),a=16711935&(a<<8|a>>>24)|4278255360&(a<<24|a>>>8),(B=r[i]).high^=a,B.low^=o}for(var s=0;s<24;s++){for(var l=0;l<5;l++){for(var d=0,p=0,_=0;_<5;_++)d^=(B=r[l+5*_]).high,p^=B.low;var g=u[l];g.high=d,g.low=p}for(l=0;l<5;l++){var v=u[(l+4)%5],w=u[(l+1)%5],y=w.high,b=w.low;for(d=v.high^(y<<1|b>>>31),p=v.low^(b<<1|y>>>31),_=0;_<5;_++)(B=r[l+5*_]).high^=d,B.low^=p}for(var m=1;m<25;m++){var k=(B=r[m]).high,E=B.low,S=h[m];S<32?(d=k<<S|E>>>32-S,p=E<<S|k>>>32-S):(d=E<<S-32|k>>>64-S,p=k<<S-32|E>>>64-S);var x=u[c[m]];x.high=d,x.low=p}var R=u[0],A=r[0];for(R.high=A.high,R.low=A.low,l=0;l<5;l++)for(_=0;_<5;_++){var B=r[m=l+5*_],z=u[m],L=u[(l+1)%5+5*_],T=u[(l+2)%5+5*_];B.high=z.high^~L.high&T.high,B.low=z.low^~L.low&T.low}B=r[0];var M=f[s];B.high^=M.high,B.low^=M.low}},_doFinalize:function(){var t=this._data,r=t.words,n=(this._nDataBytes,8*t.sigBytes),o=32*this.blockSize;r[n>>>5]|=1<<24-n%32,r[(e.ceil((n+1)/o)*o>>>5)-1]|=128,t.sigBytes=4*r.length,this._process();for(var a=this._state,s=this.cfg.outputLength/8,h=s/8,c=[],f=0;f<h;f++){var u=a[f],l=u.high,d=u.low;l=16711935&(l<<8|l>>>24)|4278255360&(l<<24|l>>>8),d=16711935&(d<<8|d>>>24)|4278255360&(d<<24|d>>>8),c.push(d),c.push(l)}return new i.init(c,s)},clone:function(){for(var e=o.clone.call(this),t=e._state=this._state.slice(0),r=0;r<25;r++)t[r]=t[r].clone();return e}});t.SHA3=o._createHelper(l),t.HmacSHA3=o._createHmacHelper(l)}(Math),r.SHA3)}),ee(function(e,t){var r;e.exports=(r=Nr,function(e){var t=r,n=t.lib,i=n.WordArray,o=n.Hasher,a=t.algo,s=i.create([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13]),h=i.create([5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11]),c=i.create([11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6]),f=i.create([8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11]),u=i.create([0,1518500249,1859775393,2400959708,2840853838]),l=i.create([1352829926,1548603684,1836072691,2053994217,0]),d=a.RIPEMD160=o.extend({_doReset:function(){this._hash=i.create([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(e,t){for(var r=0;r<16;r++){var n=t+r,i=e[n];e[n]=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8)}var o,a,d,b,m,k,E,S,x,R,A,B=this._hash.words,z=u.words,L=l.words,T=s.words,M=h.words,I=c.words,C=f.words;for(k=o=B[0],E=a=B[1],S=d=B[2],x=b=B[3],R=m=B[4],r=0;r<80;r+=1)A=o+e[t+T[r]]|0,A+=r<16?p(a,d,b)+z[0]:r<32?_(a,d,b)+z[1]:r<48?g(a,d,b)+z[2]:r<64?v(a,d,b)+z[3]:w(a,d,b)+z[4],A=(A=y(A|=0,I[r]))+m|0,o=m,m=b,b=y(d,10),d=a,a=A,A=k+e[t+M[r]]|0,A+=r<16?w(E,S,x)+L[0]:r<32?v(E,S,x)+L[1]:r<48?g(E,S,x)+L[2]:r<64?_(E,S,x)+L[3]:p(E,S,x)+L[4],A=(A=y(A|=0,C[r]))+R|0,k=R,R=x,x=y(S,10),S=E,E=A;A=B[1]+d+x|0,B[1]=B[2]+b+R|0,B[2]=B[3]+m+k|0,B[3]=B[4]+o+E|0,B[4]=B[0]+a+S|0,B[0]=A},_doFinalize:function(){var e=this._data,t=e.words,r=8*this._nDataBytes,n=8*e.sigBytes;t[n>>>5]|=128<<24-n%32,t[14+(n+64>>>9<<4)]=16711935&(r<<8|r>>>24)|4278255360&(r<<24|r>>>8),e.sigBytes=4*(t.length+1),this._process();for(var i=this._hash,o=i.words,a=0;a<5;a++){var s=o[a];o[a]=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8)}return i},clone:function(){var e=o.clone.call(this);return e._hash=this._hash.clone(),e}});function p(e,t,r){return e^t^r}function _(e,t,r){return e&t|~e&r}function g(e,t,r){return(e|~t)^r}function v(e,t,r){return e&r|t&~r}function w(e,t,r){return e^(t|~r)}function y(e,t){return e<<t|e>>>32-t}t.RIPEMD160=o._createHelper(d),t.HmacRIPEMD160=o._createHmacHelper(d)}(),r.RIPEMD160)}),ee(function(e,t){var r,n,i,o,a,s;e.exports=(n=(r=Nr).lib,i=n.Base,o=r.enc,a=o.Utf8,s=r.algo,void(s.HMAC=i.extend({init:function(e,t){e=this._hasher=new e.init,"string"==typeof t&&(t=a.parse(t));var r=e.blockSize,n=4*r;t.sigBytes>n&&(t=e.finalize(t)),t.clamp();for(var i=this._oKey=t.clone(),o=this._iKey=t.clone(),s=i.words,h=o.words,c=0;c<r;c++)s[c]^=1549556828,h[c]^=909522486;i.sigBytes=o.sigBytes=n,this.reset()},reset:function(){var e=this._hasher;e.reset(),e.update(this._iKey)},update:function(e){return this._hasher.update(e),this},finalize:function(e){var t=this._hasher,r=t.finalize(e);t.reset();var n=t.finalize(this._oKey.clone().concat(r));return n}})))}),ee(function(e,t){var r,n,i,o,a,s,h,c,f;e.exports=(i=(n=r=Nr).lib,o=i.Base,a=i.WordArray,s=n.algo,h=s.SHA1,c=s.HMAC,f=s.PBKDF2=o.extend({cfg:o.extend({keySize:4,hasher:h,iterations:1}),init:function(e){this.cfg=this.cfg.extend(e)},compute:function(e,t){for(var r=this.cfg,n=c.create(r.hasher,e),i=a.create(),o=a.create([1]),s=i.words,h=o.words,f=r.keySize,u=r.iterations;s.length<f;){var l=n.update(t).finalize(o);n.reset();for(var d=l.words,p=d.length,_=l,g=1;g<u;g++){_=n.finalize(_),n.reset();for(var v=_.words,w=0;w<p;w++)d[w]^=v[w]}i.concat(l),h[0]++}return i.sigBytes=4*f,i}}),n.PBKDF2=function(e,t,r){return f.create(r).compute(e,t)},r.PBKDF2)}),ee(function(e,t){var r,n,i,o,a,s,h,c;e.exports=(i=(n=r=Nr).lib,o=i.Base,a=i.WordArray,s=n.algo,h=s.MD5,c=s.EvpKDF=o.extend({cfg:o.extend({keySize:4,hasher:h,iterations:1}),init:function(e){this.cfg=this.cfg.extend(e)},compute:function(e,t){for(var r=this.cfg,n=r.hasher.create(),i=a.create(),o=i.words,s=r.keySize,h=r.iterations;o.length<s;){c&&n.update(c);var c=n.update(e).finalize(t);n.reset();for(var f=1;f<h;f++)c=n.finalize(c),n.reset();i.concat(c)}return i.sigBytes=4*s,i}}),n.EvpKDF=function(e,t,r){return c.create(r).compute(e,t)},r.EvpKDF)}),ee(function(e,t){var r,n,i,o,a,s,h,c,f,u,l,d,p,_,g,v,w,y,b,m,k,E,S,x;e.exports=void((r=Nr).lib.Cipher||(i=r,o=i.lib,a=o.Base,s=o.WordArray,h=o.BufferedBlockAlgorithm,c=i.enc,c.Utf8,f=c.Base64,u=i.algo,l=u.EvpKDF,d=o.Cipher=h.extend({cfg:a.extend(),createEncryptor:function(e,t){return this.create(this._ENC_XFORM_MODE,e,t)},createDecryptor:function(e,t){return this.create(this._DEC_XFORM_MODE,e,t)},init:function(e,t,r){this.cfg=this.cfg.extend(r),this._xformMode=e,this._key=t,this.reset()},reset:function(){h.reset.call(this),this._doReset()},process:function(e){return this._append(e),this._process()},finalize:function(e){e&&this._append(e);var t=this._doFinalize();return t},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(){function e(e){return"string"==typeof e?x:k}return function(t){return{encrypt:function(r,n,i){return e(n).encrypt(t,r,n,i)},decrypt:function(r,n,i){return e(n).decrypt(t,r,n,i)}}}}()}),o.StreamCipher=d.extend({_doFinalize:function(){var e=this._process(!0);return e},blockSize:1}),p=i.mode={},_=o.BlockCipherMode=a.extend({createEncryptor:function(e,t){return this.Encryptor.create(e,t)},createDecryptor:function(e,t){return this.Decryptor.create(e,t)},init:function(e,t){this._cipher=e,this._iv=t}}),g=p.CBC=function(){var e=_.extend();function t(e,t,r){var i=this._iv;if(i){var o=i;this._iv=n}else var o=this._prevBlock;for(var a=0;a<r;a++)e[t+a]^=o[a]}return e.Encryptor=e.extend({processBlock:function(e,r){var n=this._cipher,i=n.blockSize;t.call(this,e,r,i),n.encryptBlock(e,r),this._prevBlock=e.slice(r,r+i)}}),e.Decryptor=e.extend({processBlock:function(e,r){var n=this._cipher,i=n.blockSize,o=e.slice(r,r+i);n.decryptBlock(e,r),t.call(this,e,r,i),this._prevBlock=o}}),e}(),v=i.pad={},w=v.Pkcs7={pad:function(e,t){for(var r=4*t,n=r-e.sigBytes%r,i=n<<24|n<<16|n<<8|n,o=[],a=0;a<n;a+=4)o.push(i);var h=s.create(o,n);e.concat(h)},unpad:function(e){var t=255&e.words[e.sigBytes-1>>>2];e.sigBytes-=t}},o.BlockCipher=d.extend({cfg:d.cfg.extend({mode:g,padding:w}),reset:function(){d.reset.call(this);var e=this.cfg,t=e.iv,r=e.mode;if(this._xformMode==this._ENC_XFORM_MODE)var n=r.createEncryptor;else{var n=r.createDecryptor;this._minBufferSize=1}this._mode&&this._mode.__creator==n?this._mode.init(this,t&&t.words):(this._mode=n.call(r,this,t&&t.words),this._mode.__creator=n)},_doProcessBlock:function(e,t){this._mode.processBlock(e,t)},_doFinalize:function(){var e=this.cfg.padding;if(this._xformMode==this._ENC_XFORM_MODE){e.pad(this._data,this.blockSize);var t=this._process(!0)}else{var t=this._process(!0);e.unpad(t)}return t},blockSize:4}),y=o.CipherParams=a.extend({init:function(e){this.mixIn(e)},toString:function(e){return(e||this.formatter).stringify(this)}}),b=i.format={},m=b.OpenSSL={stringify:function(e){var t=e.ciphertext,r=e.salt;if(r)var n=s.create([1398893684,1701076831]).concat(r).concat(t);else var n=t;return n.toString(f)},parse:function(e){var t=f.parse(e),r=t.words;if(1398893684==r[0]&&1701076831==r[1]){var n=s.create(r.slice(2,4));r.splice(0,4),t.sigBytes-=16}return y.create({ciphertext:t,salt:n})}},k=o.SerializableCipher=a.extend({cfg:a.extend({format:m}),encrypt:function(e,t,r,n){n=this.cfg.extend(n);var i=e.createEncryptor(r,n),o=i.finalize(t),a=i.cfg;return y.create({ciphertext:o,key:r,iv:a.iv,algorithm:e,mode:a.mode,padding:a.padding,blockSize:e.blockSize,formatter:n.format})},decrypt:function(e,t,r,n){n=this.cfg.extend(n),t=this._parse(t,n.format);var i=e.createDecryptor(r,n).finalize(t.ciphertext);return i},_parse:function(e,t){return"string"==typeof e?t.parse(e,this):e}}),E=i.kdf={},S=E.OpenSSL={execute:function(e,t,r,n){n||(n=s.random(8));var i=l.create({keySize:t+r}).compute(e,n),o=s.create(i.words.slice(t),4*r);return i.sigBytes=4*t,y.create({key:i,iv:o,salt:n})}},x=o.PasswordBasedCipher=k.extend({cfg:k.cfg.extend({kdf:S}),encrypt:function(e,t,r,n){var i=(n=this.cfg.extend(n)).kdf.execute(r,e.keySize,e.ivSize);n.iv=i.iv;var o=k.encrypt.call(this,e,t,i.key,n);return o.mixIn(i),o},decrypt:function(e,t,r,n){n=this.cfg.extend(n),t=this._parse(t,n.format);var i=n.kdf.execute(r,e.keySize,e.ivSize,t.salt);n.iv=i.iv;var o=k.decrypt.call(this,e,t,i.key,n);return o}})))}),ee(function(e,t){var r;e.exports=((r=Nr).mode.CFB=function(){var e=r.lib.BlockCipherMode.extend();function t(e,t,r,n){var i=this._iv;if(i){var o=i.slice(0);this._iv=void 0}else o=this._prevBlock;n.encryptBlock(o,0);for(var a=0;a<r;a++)e[t+a]^=o[a]}return e.Encryptor=e.extend({processBlock:function(e,r){var n=this._cipher,i=n.blockSize;t.call(this,e,r,i,n),this._prevBlock=e.slice(r,r+i)}}),e.Decryptor=e.extend({processBlock:function(e,r){var n=this._cipher,i=n.blockSize,o=e.slice(r,r+i);t.call(this,e,r,i,n),this._prevBlock=o}}),e}(),r.mode.CFB)}),ee(function(e,t){var r,n,i;e.exports=((r=Nr).mode.CTR=(n=r.lib.BlockCipherMode.extend(),i=n.Encryptor=n.extend({processBlock:function(e,t){var r=this._cipher,n=r.blockSize,i=this._iv,o=this._counter;i&&(o=this._counter=i.slice(0),this._iv=void 0);var a=o.slice(0);r.encryptBlock(a,0),o[n-1]=o[n-1]+1|0;for(var s=0;s<n;s++)e[t+s]^=a[s]}}),n.Decryptor=i,n),r.mode.CTR)}),ee(function(e,t){var r;e.exports=((r=Nr).mode.CTRGladman=function(){var e=r.lib.BlockCipherMode.extend();function t(e){if(255==(e>>24&255)){var t=e>>16&255,r=e>>8&255,n=255&e;255===t?(t=0,255===r?(r=0,255===n?n=0:++n):++r):++t,e=0,e+=t<<16,e+=r<<8,e+=n}else e+=1<<24;return e}var n=e.Encryptor=e.extend({processBlock:function(e,r){var n=this._cipher,i=n.blockSize,o=this._iv,a=this._counter;o&&(a=this._counter=o.slice(0),this._iv=void 0),function(e){0===(e[0]=t(e[0]))&&(e[1]=t(e[1]))}(a);var s=a.slice(0);n.encryptBlock(s,0);for(var h=0;h<i;h++)e[r+h]^=s[h]}});return e.Decryptor=n,e}(),r.mode.CTRGladman)}),ee(function(e,t){var r,n,i;e.exports=((r=Nr).mode.OFB=(n=r.lib.BlockCipherMode.extend(),i=n.Encryptor=n.extend({processBlock:function(e,t){var r=this._cipher,n=r.blockSize,i=this._iv,o=this._keystream;i&&(o=this._keystream=i.slice(0),this._iv=void 0),r.encryptBlock(o,0);for(var a=0;a<n;a++)e[t+a]^=o[a]}}),n.Decryptor=i,n),r.mode.OFB)}),ee(function(e,t){var r,n;e.exports=((r=Nr).mode.ECB=((n=r.lib.BlockCipherMode.extend()).Encryptor=n.extend({processBlock:function(e,t){this._cipher.encryptBlock(e,t)}}),n.Decryptor=n.extend({processBlock:function(e,t){this._cipher.decryptBlock(e,t)}}),n),r.mode.ECB)}),ee(function(e,t){var r;e.exports=((r=Nr).pad.AnsiX923={pad:function(e,t){var r=e.sigBytes,n=4*t,i=n-r%n,o=r+i-1;e.clamp(),e.words[o>>>2]|=i<<24-o%4*8,e.sigBytes+=i},unpad:function(e){var t=255&e.words[e.sigBytes-1>>>2];e.sigBytes-=t}},r.pad.Ansix923)}),ee(function(e,t){var r;e.exports=((r=Nr).pad.Iso10126={pad:function(e,t){var n=4*t,i=n-e.sigBytes%n;e.concat(r.lib.WordArray.random(i-1)).concat(r.lib.WordArray.create([i<<24],1))},unpad:function(e){var t=255&e.words[e.sigBytes-1>>>2];e.sigBytes-=t}},r.pad.Iso10126)}),ee(function(e,t){var r;e.exports=((r=Nr).pad.Iso97971={pad:function(e,t){e.concat(r.lib.WordArray.create([2147483648],1)),r.pad.ZeroPadding.pad(e,t)},unpad:function(e){r.pad.ZeroPadding.unpad(e),e.sigBytes--}},r.pad.Iso97971)}),ee(function(e,t){var r;e.exports=((r=Nr).pad.ZeroPadding={pad:function(e,t){var r=4*t;e.clamp(),e.sigBytes+=r-(e.sigBytes%r||r)},unpad:function(e){for(var t=e.words,r=e.sigBytes-1;!(t[r>>>2]>>>24-r%4*8&255);)r--;e.sigBytes=r+1}},r.pad.ZeroPadding)}),ee(function(e,t){var r;e.exports=((r=Nr).pad.NoPadding={pad:function(){},unpad:function(){}},r.pad.NoPadding)}),ee(function(e,t){var r,n,i,o;e.exports=(i=(n=r=Nr).lib.CipherParams,o=n.enc.Hex,n.format.Hex={stringify:function(e){return e.ciphertext.toString(o)},parse:function(e){var t=o.parse(e);return i.create({ciphertext:t})}},r.format.Hex)}),ee(function(e,t){var r;e.exports=(r=Nr,function(){var e=r,t=e.lib.BlockCipher,n=e.algo,i=[],o=[],a=[],s=[],h=[],c=[],f=[],u=[],l=[],d=[];!function(){for(var e=[],t=0;t<256;t++)e[t]=t<128?t<<1:t<<1^283;var r=0,n=0;for(t=0;t<256;t++){var p=n^n<<1^n<<2^n<<3^n<<4;p=p>>>8^255&p^99,i[r]=p,o[p]=r;var _=e[r],g=e[_],v=e[g],w=257*e[p]^16843008*p;a[r]=w<<24|w>>>8,s[r]=w<<16|w>>>16,h[r]=w<<8|w>>>24,c[r]=w,w=16843009*v^65537*g^257*_^16843008*r,f[p]=w<<24|w>>>8,u[p]=w<<16|w>>>16,l[p]=w<<8|w>>>24,d[p]=w,r?(r=_^e[e[e[v^_]]],n^=e[e[n]]):r=n=1}}();var p=[0,1,2,4,8,16,32,64,128,27,54],_=n.AES=t.extend({_doReset:function(){if(!this._nRounds||this._keyPriorReset!==this._key){for(var e=this._keyPriorReset=this._key,t=e.words,r=e.sigBytes/4,n=4*((this._nRounds=r+6)+1),o=this._keySchedule=[],a=0;a<n;a++)if(a<r)o[a]=t[a];else{var s=o[a-1];a%r?r>6&&a%r==4&&(s=i[s>>>24]<<24|i[s>>>16&255]<<16|i[s>>>8&255]<<8|i[255&s]):(s=i[(s=s<<8|s>>>24)>>>24]<<24|i[s>>>16&255]<<16|i[s>>>8&255]<<8|i[255&s],s^=p[a/r|0]<<24),o[a]=o[a-r]^s}for(var h=this._invKeySchedule=[],c=0;c<n;c++)a=n-c,s=c%4?o[a]:o[a-4],h[c]=c<4||a<=4?s:f[i[s>>>24]]^u[i[s>>>16&255]]^l[i[s>>>8&255]]^d[i[255&s]]}},encryptBlock:function(e,t){this._doCryptBlock(e,t,this._keySchedule,a,s,h,c,i)},decryptBlock:function(e,t){var r=e[t+1];e[t+1]=e[t+3],e[t+3]=r,this._doCryptBlock(e,t,this._invKeySchedule,f,u,l,d,o),r=e[t+1],e[t+1]=e[t+3],e[t+3]=r},_doCryptBlock:function(e,t,r,n,i,o,a,s){for(var h=this._nRounds,c=e[t]^r[0],f=e[t+1]^r[1],u=e[t+2]^r[2],l=e[t+3]^r[3],d=4,p=1;p<h;p++){var _=n[c>>>24]^i[f>>>16&255]^o[u>>>8&255]^a[255&l]^r[d++],g=n[f>>>24]^i[u>>>16&255]^o[l>>>8&255]^a[255&c]^r[d++],v=n[u>>>24]^i[l>>>16&255]^o[c>>>8&255]^a[255&f]^r[d++],w=n[l>>>24]^i[c>>>16&255]^o[f>>>8&255]^a[255&u]^r[d++];c=_,f=g,u=v,l=w}_=(s[c>>>24]<<24|s[f>>>16&255]<<16|s[u>>>8&255]<<8|s[255&l])^r[d++],g=(s[f>>>24]<<24|s[u>>>16&255]<<16|s[l>>>8&255]<<8|s[255&c])^r[d++],v=(s[u>>>24]<<24|s[l>>>16&255]<<16|s[c>>>8&255]<<8|s[255&f])^r[d++],w=(s[l>>>24]<<24|s[c>>>16&255]<<16|s[f>>>8&255]<<8|s[255&u])^r[d++],e[t]=_,e[t+1]=g,e[t+2]=v,e[t+3]=w},keySize:8});e.AES=t._createHelper(_)}(),r.AES)}),ee(function(e,t){var r;e.exports=(r=Nr,function(){var e=r,t=e.lib,n=t.WordArray,i=t.BlockCipher,o=e.algo,a=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],s=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],h=[1,2,4,6,8,10,12,14,15,17,19,21,23,25,27,28],c=[{0:8421888,268435456:32768,536870912:8421378,805306368:2,1073741824:512,1342177280:8421890,1610612736:8389122,1879048192:8388608,2147483648:514,2415919104:8389120,2684354560:33280,2952790016:8421376,3221225472:32770,3489660928:8388610,3758096384:0,4026531840:33282,134217728:0,402653184:8421890,671088640:33282,939524096:32768,1207959552:8421888,1476395008:512,1744830464:8421378,2013265920:2,2281701376:8389120,2550136832:33280,2818572288:8421376,3087007744:8389122,3355443200:8388610,3623878656:32770,3892314112:514,4160749568:8388608,1:32768,268435457:2,536870913:8421888,805306369:8388608,1073741825:8421378,1342177281:33280,1610612737:512,1879048193:8389122,2147483649:8421890,2415919105:8421376,2684354561:8388610,2952790017:33282,3221225473:514,3489660929:8389120,3758096385:32770,4026531841:0,134217729:8421890,402653185:8421376,671088641:8388608,939524097:512,1207959553:32768,1476395009:8388610,1744830465:2,2013265921:33282,2281701377:32770,2550136833:8389122,2818572289:514,3087007745:8421888,3355443201:8389120,3623878657:0,3892314113:33280,4160749569:8421378},{0:1074282512,16777216:16384,33554432:524288,50331648:1074266128,67108864:1073741840,83886080:1074282496,100663296:1073758208,117440512:16,134217728:540672,150994944:1073758224,167772160:1073741824,184549376:540688,201326592:524304,218103808:0,234881024:16400,251658240:1074266112,8388608:1073758208,25165824:540688,41943040:16,58720256:1073758224,75497472:1074282512,92274688:1073741824,109051904:524288,125829120:1074266128,142606336:524304,159383552:0,176160768:16384,192937984:1074266112,209715200:1073741840,226492416:540672,243269632:1074282496,260046848:16400,268435456:0,285212672:1074266128,301989888:1073758224,318767104:1074282496,335544320:1074266112,352321536:16,369098752:540688,385875968:16384,402653184:16400,419430400:524288,436207616:524304,452984832:1073741840,469762048:540672,486539264:1073758208,503316480:1073741824,520093696:1074282512,276824064:540688,293601280:524288,310378496:1074266112,327155712:16384,343932928:1073758208,360710144:1074282512,377487360:16,394264576:1073741824,411041792:1074282496,427819008:1073741840,444596224:1073758224,461373440:524304,478150656:0,494927872:16400,511705088:1074266128,528482304:540672},{0:260,1048576:0,2097152:67109120,3145728:65796,4194304:65540,5242880:67108868,6291456:67174660,7340032:67174400,8388608:67108864,9437184:67174656,10485760:65792,11534336:67174404,12582912:67109124,13631488:65536,14680064:4,15728640:256,524288:67174656,1572864:67174404,2621440:0,3670016:67109120,4718592:67108868,5767168:65536,6815744:65540,7864320:260,8912896:4,9961472:256,11010048:67174400,12058624:65796,13107200:65792,14155776:67109124,15204352:67174660,16252928:67108864,16777216:67174656,17825792:65540,18874368:65536,19922944:67109120,20971520:256,22020096:67174660,23068672:67108868,24117248:0,25165824:67109124,26214400:67108864,27262976:4,28311552:65792,29360128:67174400,30408704:260,31457280:65796,32505856:67174404,17301504:67108864,18350080:260,19398656:67174656,20447232:0,21495808:65540,22544384:67109120,23592960:256,24641536:67174404,25690112:65536,26738688:67174660,27787264:65796,28835840:67108868,29884416:67109124,30932992:67174400,31981568:4,33030144:65792},{0:2151682048,65536:2147487808,131072:4198464,196608:2151677952,262144:0,327680:4198400,393216:2147483712,458752:4194368,524288:2147483648,589824:4194304,655360:64,720896:2147487744,786432:2151678016,851968:4160,917504:4096,983040:2151682112,32768:2147487808,98304:64,163840:2151678016,229376:2147487744,294912:4198400,360448:2151682112,425984:0,491520:2151677952,557056:4096,622592:2151682048,688128:4194304,753664:4160,819200:2147483648,884736:4194368,950272:4198464,1015808:2147483712,1048576:4194368,1114112:4198400,1179648:2147483712,1245184:0,1310720:4160,1376256:2151678016,1441792:2151682048,1507328:2147487808,1572864:2151682112,1638400:2147483648,1703936:2151677952,1769472:4198464,1835008:2147487744,1900544:4194304,1966080:64,2031616:4096,1081344:2151677952,1146880:2151682112,1212416:0,1277952:4198400,1343488:4194368,1409024:2147483648,1474560:2147487808,1540096:64,1605632:2147483712,1671168:4096,1736704:2147487744,1802240:2151678016,1867776:4160,1933312:2151682048,1998848:4194304,2064384:4198464},{0:128,4096:17039360,8192:262144,12288:536870912,16384:537133184,20480:16777344,24576:553648256,28672:262272,32768:16777216,36864:537133056,40960:536871040,45056:553910400,49152:553910272,53248:0,57344:17039488,61440:553648128,2048:17039488,6144:553648256,10240:128,14336:17039360,18432:262144,22528:537133184,26624:553910272,30720:536870912,34816:537133056,38912:0,43008:553910400,47104:16777344,51200:536871040,55296:553648128,59392:16777216,63488:262272,65536:262144,69632:128,73728:536870912,77824:553648256,81920:16777344,86016:553910272,90112:537133184,94208:16777216,98304:553910400,102400:553648128,106496:17039360,110592:537133056,114688:262272,118784:536871040,122880:0,126976:17039488,67584:553648256,71680:16777216,75776:17039360,79872:537133184,83968:536870912,88064:17039488,92160:128,96256:553910272,100352:262272,104448:553910400,108544:0,112640:553648128,116736:16777344,120832:262144,124928:537133056,129024:536871040},{0:268435464,256:8192,512:270532608,768:270540808,1024:268443648,1280:2097152,1536:2097160,1792:268435456,2048:0,2304:268443656,2560:2105344,2816:8,3072:270532616,3328:2105352,3584:8200,3840:270540800,128:270532608,384:270540808,640:8,896:2097152,1152:2105352,1408:268435464,1664:268443648,1920:8200,2176:2097160,2432:8192,2688:268443656,2944:270532616,3200:0,3456:270540800,3712:2105344,3968:268435456,4096:268443648,4352:270532616,4608:270540808,4864:8200,5120:2097152,5376:268435456,5632:268435464,5888:2105344,6144:2105352,6400:0,6656:8,6912:270532608,7168:8192,7424:268443656,7680:270540800,7936:2097160,4224:8,4480:2105344,4736:2097152,4992:268435464,5248:268443648,5504:8200,5760:270540808,6016:270532608,6272:270540800,6528:270532616,6784:8192,7040:2105352,7296:2097160,7552:0,7808:268435456,8064:268443656},{0:1048576,16:33555457,32:1024,48:1049601,64:34604033,80:0,96:1,112:34603009,128:33555456,144:1048577,160:33554433,176:34604032,192:34603008,208:1025,224:1049600,240:33554432,8:34603009,24:0,40:33555457,56:34604032,72:1048576,88:33554433,104:33554432,120:1025,136:1049601,152:33555456,168:34603008,184:1048577,200:1024,216:34604033,232:1,248:1049600,256:33554432,272:1048576,288:33555457,304:34603009,320:1048577,336:33555456,352:34604032,368:1049601,384:1025,400:34604033,416:1049600,432:1,448:0,464:34603008,480:33554433,496:1024,264:1049600,280:33555457,296:34603009,312:1,328:33554432,344:1048576,360:1025,376:34604032,392:33554433,408:34603008,424:0,440:34604033,456:1049601,472:1024,488:33555456,504:1048577},{0:134219808,1:131072,2:134217728,3:32,4:131104,5:134350880,6:134350848,7:2048,8:134348800,9:134219776,10:133120,11:134348832,12:2080,13:0,14:134217760,15:133152,2147483648:2048,2147483649:134350880,2147483650:134219808,2147483651:134217728,2147483652:134348800,2147483653:133120,2147483654:133152,2147483655:32,2147483656:134217760,2147483657:2080,2147483658:131104,2147483659:134350848,2147483660:0,2147483661:134348832,2147483662:134219776,2147483663:131072,16:133152,17:134350848,18:32,19:2048,20:134219776,21:134217760,22:134348832,23:131072,24:0,25:131104,26:134348800,27:134219808,28:134350880,29:133120,30:2080,31:134217728,2147483664:131072,2147483665:2048,2147483666:134348832,2147483667:133152,2147483668:32,2147483669:134348800,2147483670:134217728,2147483671:134219808,2147483672:134350880,2147483673:134217760,2147483674:134219776,2147483675:0,2147483676:133120,2147483677:2080,2147483678:131104,2147483679:134350848}],f=[4160749569,528482304,33030144,2064384,129024,8064,504,2147483679],u=o.DES=i.extend({_doReset:function(){for(var e=this._key.words,t=[],r=0;r<56;r++){var n=a[r]-1;t[r]=e[n>>>5]>>>31-n%32&1}for(var i=this._subKeys=[],o=0;o<16;o++){var c=i[o]=[],f=h[o];for(r=0;r<24;r++)c[r/6|0]|=t[(s[r]-1+f)%28]<<31-r%6,c[4+(r/6|0)]|=t[28+(s[r+24]-1+f)%28]<<31-r%6;for(c[0]=c[0]<<1|c[0]>>>31,r=1;r<7;r++)c[r]=c[r]>>>4*(r-1)+3;c[7]=c[7]<<5|c[7]>>>27}var u=this._invSubKeys=[];for(r=0;r<16;r++)u[r]=i[15-r]},encryptBlock:function(e,t){this._doCryptBlock(e,t,this._subKeys)},decryptBlock:function(e,t){this._doCryptBlock(e,t,this._invSubKeys)},_doCryptBlock:function(e,t,r){this._lBlock=e[t],this._rBlock=e[t+1],l.call(this,4,252645135),l.call(this,16,65535),d.call(this,2,858993459),d.call(this,8,16711935),l.call(this,1,1431655765);for(var n=0;n<16;n++){for(var i=r[n],o=this._lBlock,a=this._rBlock,s=0,h=0;h<8;h++)s|=c[h][((a^i[h])&f[h])>>>0];this._lBlock=a,this._rBlock=o^s}var u=this._lBlock;this._lBlock=this._rBlock,this._rBlock=u,l.call(this,1,1431655765),d.call(this,8,16711935),d.call(this,2,858993459),l.call(this,16,65535),l.call(this,4,252645135),e[t]=this._lBlock,e[t+1]=this._rBlock},keySize:2,ivSize:2,blockSize:2});function l(e,t){var r=(this._lBlock>>>e^this._rBlock)&t;this._rBlock^=r,this._lBlock^=r<<e}function d(e,t){var r=(this._rBlock>>>e^this._lBlock)&t;this._lBlock^=r,this._rBlock^=r<<e}e.DES=i._createHelper(u);var p=o.TripleDES=i.extend({_doReset:function(){var e=this._key.words;this._des1=u.createEncryptor(n.create(e.slice(0,2))),this._des2=u.createEncryptor(n.create(e.slice(2,4))),this._des3=u.createEncryptor(n.create(e.slice(4,6)))},encryptBlock:function(e,t){this._des1.encryptBlock(e,t),this._des2.decryptBlock(e,t),this._des3.encryptBlock(e,t)},decryptBlock:function(e,t){this._des3.decryptBlock(e,t),this._des2.encryptBlock(e,t),this._des1.decryptBlock(e,t)},keySize:6,ivSize:2,blockSize:2});e.TripleDES=i._createHelper(p)}(),r.TripleDES)}),ee(function(e,t){var r;e.exports=(r=Nr,function(){var e=r,t=e.lib.StreamCipher,n=e.algo,i=n.RC4=t.extend({_doReset:function(){for(var e=this._key,t=e.words,r=e.sigBytes,n=this._S=[],i=0;i<256;i++)n[i]=i;i=0;for(var o=0;i<256;i++){var a=i%r,s=t[a>>>2]>>>24-a%4*8&255;o=(o+n[i]+s)%256;var h=n[i];n[i]=n[o],n[o]=h}this._i=this._j=0},_doProcessBlock:function(e,t){e[t]^=o.call(this)},keySize:8,ivSize:0});function o(){for(var e=this._S,t=this._i,r=this._j,n=0,i=0;i<4;i++){r=(r+e[t=(t+1)%256])%256;var o=e[t];e[t]=e[r],e[r]=o,n|=e[(e[t]+e[r])%256]<<24-8*i}return this._i=t,this._j=r,n}e.RC4=t._createHelper(i);var a=n.RC4Drop=i.extend({cfg:i.cfg.extend({drop:192}),_doReset:function(){i._doReset.call(this);for(var e=this.cfg.drop;e>0;e--)o.call(this)}});e.RC4Drop=t._createHelper(a)}(),r.RC4)}),ee(function(e,t){var r;e.exports=(r=Nr,function(){var e=r,t=e.lib.StreamCipher,n=e.algo,i=[],o=[],a=[],s=n.Rabbit=t.extend({_doReset:function(){for(var e=this._key.words,t=this.cfg.iv,r=0;r<4;r++)e[r]=16711935&(e[r]<<8|e[r]>>>24)|4278255360&(e[r]<<24|e[r]>>>8);var n=this._X=[e[0],e[3]<<16|e[2]>>>16,e[1],e[0]<<16|e[3]>>>16,e[2],e[1]<<16|e[0]>>>16,e[3],e[2]<<16|e[1]>>>16],i=this._C=[e[2]<<16|e[2]>>>16,4294901760&e[0]|65535&e[1],e[3]<<16|e[3]>>>16,4294901760&e[1]|65535&e[2],e[0]<<16|e[0]>>>16,4294901760&e[2]|65535&e[3],e[1]<<16|e[1]>>>16,4294901760&e[3]|65535&e[0]];for(this._b=0,r=0;r<4;r++)h.call(this);for(r=0;r<8;r++)i[r]^=n[r+4&7];if(t){var o=t.words,a=o[0],s=o[1],c=16711935&(a<<8|a>>>24)|4278255360&(a<<24|a>>>8),f=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),u=c>>>16|4294901760&f,l=f<<16|65535&c;for(i[0]^=c,i[1]^=u,i[2]^=f,i[3]^=l,i[4]^=c,i[5]^=u,i[6]^=f,i[7]^=l,r=0;r<4;r++)h.call(this)}},_doProcessBlock:function(e,t){var r=this._X;h.call(this),i[0]=r[0]^r[5]>>>16^r[3]<<16,i[1]=r[2]^r[7]>>>16^r[5]<<16,i[2]=r[4]^r[1]>>>16^r[7]<<16,i[3]=r[6]^r[3]>>>16^r[1]<<16;for(var n=0;n<4;n++)i[n]=16711935&(i[n]<<8|i[n]>>>24)|4278255360&(i[n]<<24|i[n]>>>8),e[t+n]^=i[n]},blockSize:4,ivSize:2});function h(){for(var e=this._X,t=this._C,r=0;r<8;r++)o[r]=t[r];for(t[0]=t[0]+1295307597+this._b|0,t[1]=t[1]+3545052371+(t[0]>>>0<o[0]>>>0?1:0)|0,t[2]=t[2]+886263092+(t[1]>>>0<o[1]>>>0?1:0)|0,t[3]=t[3]+1295307597+(t[2]>>>0<o[2]>>>0?1:0)|0,t[4]=t[4]+3545052371+(t[3]>>>0<o[3]>>>0?1:0)|0,t[5]=t[5]+886263092+(t[4]>>>0<o[4]>>>0?1:0)|0,t[6]=t[6]+1295307597+(t[5]>>>0<o[5]>>>0?1:0)|0,t[7]=t[7]+3545052371+(t[6]>>>0<o[6]>>>0?1:0)|0,this._b=t[7]>>>0<o[7]>>>0?1:0,r=0;r<8;r++){var n=e[r]+t[r],i=65535&n,s=n>>>16,h=((i*i>>>17)+i*s>>>15)+s*s,c=((4294901760&n)*n|0)+((65535&n)*n|0);a[r]=h^c}e[0]=a[0]+(a[7]<<16|a[7]>>>16)+(a[6]<<16|a[6]>>>16)|0,e[1]=a[1]+(a[0]<<8|a[0]>>>24)+a[7]|0,e[2]=a[2]+(a[1]<<16|a[1]>>>16)+(a[0]<<16|a[0]>>>16)|0,e[3]=a[3]+(a[2]<<8|a[2]>>>24)+a[1]|0,e[4]=a[4]+(a[3]<<16|a[3]>>>16)+(a[2]<<16|a[2]>>>16)|0,e[5]=a[5]+(a[4]<<8|a[4]>>>24)+a[3]|0,e[6]=a[6]+(a[5]<<16|a[5]>>>16)+(a[4]<<16|a[4]>>>16)|0,e[7]=a[7]+(a[6]<<8|a[6]>>>24)+a[5]|0}e.Rabbit=t._createHelper(s)}(),r.Rabbit)}),ee(function(e,t){var r;e.exports=(r=Nr,function(){var e=r,t=e.lib.StreamCipher,n=e.algo,i=[],o=[],a=[],s=n.RabbitLegacy=t.extend({_doReset:function(){var e=this._key.words,t=this.cfg.iv,r=this._X=[e[0],e[3]<<16|e[2]>>>16,e[1],e[0]<<16|e[3]>>>16,e[2],e[1]<<16|e[0]>>>16,e[3],e[2]<<16|e[1]>>>16],n=this._C=[e[2]<<16|e[2]>>>16,4294901760&e[0]|65535&e[1],e[3]<<16|e[3]>>>16,4294901760&e[1]|65535&e[2],e[0]<<16|e[0]>>>16,4294901760&e[2]|65535&e[3],e[1]<<16|e[1]>>>16,4294901760&e[3]|65535&e[0]];this._b=0;for(var i=0;i<4;i++)h.call(this);for(i=0;i<8;i++)n[i]^=r[i+4&7];if(t){var o=t.words,a=o[0],s=o[1],c=16711935&(a<<8|a>>>24)|4278255360&(a<<24|a>>>8),f=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),u=c>>>16|4294901760&f,l=f<<16|65535&c;for(n[0]^=c,n[1]^=u,n[2]^=f,n[3]^=l,n[4]^=c,n[5]^=u,n[6]^=f,n[7]^=l,i=0;i<4;i++)h.call(this)}},_doProcessBlock:function(e,t){var r=this._X;h.call(this),i[0]=r[0]^r[5]>>>16^r[3]<<16,i[1]=r[2]^r[7]>>>16^r[5]<<16,i[2]=r[4]^r[1]>>>16^r[7]<<16,i[3]=r[6]^r[3]>>>16^r[1]<<16;for(var n=0;n<4;n++)i[n]=16711935&(i[n]<<8|i[n]>>>24)|4278255360&(i[n]<<24|i[n]>>>8),e[t+n]^=i[n]},blockSize:4,ivSize:2});function h(){for(var e=this._X,t=this._C,r=0;r<8;r++)o[r]=t[r];for(t[0]=t[0]+1295307597+this._b|0,t[1]=t[1]+3545052371+(t[0]>>>0<o[0]>>>0?1:0)|0,t[2]=t[2]+886263092+(t[1]>>>0<o[1]>>>0?1:0)|0,t[3]=t[3]+1295307597+(t[2]>>>0<o[2]>>>0?1:0)|0,t[4]=t[4]+3545052371+(t[3]>>>0<o[3]>>>0?1:0)|0,t[5]=t[5]+886263092+(t[4]>>>0<o[4]>>>0?1:0)|0,t[6]=t[6]+1295307597+(t[5]>>>0<o[5]>>>0?1:0)|0,t[7]=t[7]+3545052371+(t[6]>>>0<o[6]>>>0?1:0)|0,this._b=t[7]>>>0<o[7]>>>0?1:0,r=0;r<8;r++){var n=e[r]+t[r],i=65535&n,s=n>>>16,h=((i*i>>>17)+i*s>>>15)+s*s,c=((4294901760&n)*n|0)+((65535&n)*n|0);a[r]=h^c}e[0]=a[0]+(a[7]<<16|a[7]>>>16)+(a[6]<<16|a[6]>>>16)|0,e[1]=a[1]+(a[0]<<8|a[0]>>>24)+a[7]|0,e[2]=a[2]+(a[1]<<16|a[1]>>>16)+(a[0]<<16|a[0]>>>16)|0,e[3]=a[3]+(a[2]<<8|a[2]>>>24)+a[1]|0,e[4]=a[4]+(a[3]<<16|a[3]>>>16)+(a[2]<<16|a[2]>>>16)|0,e[5]=a[5]+(a[4]<<8|a[4]>>>24)+a[3]|0,e[6]=a[6]+(a[5]<<16|a[5]>>>16)+(a[4]<<16|a[4]>>>16)|0,e[7]=a[7]+(a[6]<<8|a[6]>>>24)+a[5]|0}e.RabbitLegacy=t._createHelper(s)}(),r.RabbitLegacy)}),ee(function(e,t){e.exports=Nr}));function Fr(){throw new Error("setTimeout has not been defined")}function Hr(){throw new Error("clearTimeout has not been defined")}var Zr=Fr,jr=Hr;function Wr(e){if(Zr===setTimeout)return setTimeout(e,0);if((Zr===Fr||!Zr)&&setTimeout)return Zr=setTimeout,setTimeout(e,0);try{return Zr(e,0)}catch(t){try{return Zr.call(null,e,0)}catch(t){return Zr.call(this,e,0)}}}"function"==typeof e.setTimeout&&(Zr=setTimeout),"function"==typeof e.clearTimeout&&(jr=clearTimeout);var Yr,Kr=[],Xr=!1,qr=-1;function Vr(){Xr&&Yr&&(Xr=!1,Yr.length?Kr=Yr.concat(Kr):qr=-1,Kr.length&&Gr())}function Gr(){if(!Xr){var e=Wr(Vr);Xr=!0;for(var t=Kr.length;t;){for(Yr=Kr,Kr=[];++qr<t;)Yr&&Yr[qr].run();qr=-1,t=Kr.length}Yr=null,Xr=!1,function(e){if(jr===clearTimeout)return clearTimeout(e);if((jr===Hr||!jr)&&clearTimeout)return jr=clearTimeout,clearTimeout(e);try{jr(e)}catch(t){try{return jr.call(null,e)}catch(t){return jr.call(this,e)}}}(e)}}function $r(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];Kr.push(new Jr(e,t)),1!==Kr.length||Xr||Wr(Gr)}function Jr(e,t){this.fun=e,this.array=t}Jr.prototype.run=function(){this.fun.apply(null,this.array)};var Qr=e.performance||{};Qr.now||Qr.mozNow||Qr.msNow||Qr.oNow||Qr.webkitNow;function en(){}function tn(){tn.init.call(this)}function rn(e){return void 0===e._maxListeners?tn.defaultMaxListeners:e._maxListeners}function nn(e,t,r){if(t)e.call(r);else for(var n=e.length,i=ln(e,n),o=0;o<n;++o)i[o].call(r)}function on(e,t,r,n){if(t)e.call(r,n);else for(var i=e.length,o=ln(e,i),a=0;a<i;++a)o[a].call(r,n)}function an(e,t,r,n,i){if(t)e.call(r,n,i);else for(var o=e.length,a=ln(e,o),s=0;s<o;++s)a[s].call(r,n,i)}function sn(e,t,r,n,i,o){if(t)e.call(r,n,i,o);else for(var a=e.length,s=ln(e,a),h=0;h<a;++h)s[h].call(r,n,i,o)}function hn(e,t,r,n){if(t)e.apply(r,n);else for(var i=e.length,o=ln(e,i),a=0;a<i;++a)o[a].apply(r,n)}function cn(e,t,r,n){var i,o,a,s;if("function"!=typeof r)throw new TypeError('"listener" argument must be a function');if((o=e._events)?(o.newListener&&(e.emit("newListener",t,r.listener?r.listener:r),o=e._events),a=o[t]):(o=e._events=new en,e._eventsCount=0),a){if("function"==typeof a?a=o[t]=n?[r,a]:[a,r]:n?a.unshift(r):a.push(r),!a.warned&&(i=rn(e))&&i>0&&a.length>i){a.warned=!0;var h=new Error("Possible EventEmitter memory leak detected. "+a.length+" "+t+" listeners added. Use emitter.setMaxListeners() to increase limit");h.name="MaxListenersExceededWarning",h.emitter=e,h.type=t,h.count=a.length,s=h,"function"==typeof console.warn?console.warn(s):console.log(s)}}else a=o[t]=r,++e._eventsCount;return e}function fn(e,t,r){var n=!1;function i(){e.removeListener(t,i),n||(n=!0,r.apply(e,arguments))}return i.listener=r,i}function un(e){var t=this._events;if(t){var r=t[e];if("function"==typeof r)return 1;if(r)return r.length}return 0}function ln(e,t){for(var r=new Array(t);t--;)r[t]=e[t];return r}en.prototype=Object.create(null),tn.EventEmitter=tn,tn.usingDomains=!1,tn.prototype.domain=void 0,tn.prototype._events=void 0,tn.prototype._maxListeners=void 0,tn.defaultMaxListeners=10,tn.init=function(){this.domain=null,tn.usingDomains&&(void 0).active&&(void 0).Domain,this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=new en,this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},tn.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||isNaN(e))throw new TypeError('"n" argument must be a positive number');return this._maxListeners=e,this},tn.prototype.getMaxListeners=function(){return rn(this)},tn.prototype.emit=function(e){var t,r,n,i,o,a,s,h="error"===e;if(a=this._events)h=h&&null==a.error;else if(!h)return!1;if(s=this.domain,h){if(t=arguments[1],!s){if(t instanceof Error)throw t;var c=new Error('Uncaught, unspecified "error" event. ('+t+")");throw c.context=t,c}return t||(t=new Error('Uncaught, unspecified "error" event')),t.domainEmitter=this,t.domain=s,t.domainThrown=!1,s.emit("error",t),!1}if(!(r=a[e]))return!1;var f="function"==typeof r;switch(n=arguments.length){case 1:nn(r,f,this);break;case 2:on(r,f,this,arguments[1]);break;case 3:an(r,f,this,arguments[1],arguments[2]);break;case 4:sn(r,f,this,arguments[1],arguments[2],arguments[3]);break;default:for(i=new Array(n-1),o=1;o<n;o++)i[o-1]=arguments[o];hn(r,f,this,i)}return!0},tn.prototype.addListener=function(e,t){return cn(this,e,t,!1)},tn.prototype.on=tn.prototype.addListener,tn.prototype.prependListener=function(e,t){return cn(this,e,t,!0)},tn.prototype.once=function(e,t){if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');return this.on(e,fn(this,e,t)),this},tn.prototype.prependOnceListener=function(e,t){if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');return this.prependListener(e,fn(this,e,t)),this},tn.prototype.removeListener=function(e,t){var r,n,i,o,a;if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');if(!(n=this._events))return this;if(!(r=n[e]))return this;if(r===t||r.listener&&r.listener===t)0==--this._eventsCount?this._events=new en:(delete n[e],n.removeListener&&this.emit("removeListener",e,r.listener||t));else if("function"!=typeof r){for(i=-1,o=r.length;o-- >0;)if(r[o]===t||r[o].listener&&r[o].listener===t){a=r[o].listener,i=o;break}if(i<0)return this;if(1===r.length){if(r[0]=void 0,0==--this._eventsCount)return this._events=new en,this;delete n[e]}else!function(e,t){for(var r=t,n=r+1,i=e.length;n<i;r+=1,n+=1)e[r]=e[n];e.pop()}(r,i);n.removeListener&&this.emit("removeListener",e,a||t)}return this},tn.prototype.removeAllListeners=function(e){var t,r;if(!(r=this._events))return this;if(!r.removeListener)return 0===arguments.length?(this._events=new en,this._eventsCount=0):r[e]&&(0==--this._eventsCount?this._events=new en:delete r[e]),this;if(0===arguments.length){for(var n,i=Object.keys(r),o=0;o<i.length;++o)"removeListener"!==(n=i[o])&&this.removeAllListeners(n);return this.removeAllListeners("removeListener"),this._events=new en,this._eventsCount=0,this}if("function"==typeof(t=r[e]))this.removeListener(e,t);else if(t)do{this.removeListener(e,t[t.length-1])}while(t[0]);return this},tn.prototype.listeners=function(e){var t,r=this._events;return r&&(t=r[e])?"function"==typeof t?[t.listener||t]:function(e){for(var t=new Array(e.length),r=0;r<t.length;++r)t[r]=e[r].listener||e[r];return t}(t):[]},tn.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):un.call(e,t)},tn.prototype.listenerCount=un,tn.prototype.eventNames=function(){return this._eventsCount>0?Reflect.ownKeys(this._events):[]};var dn="function"==typeof Object.create?function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:function(e,t){e.super_=t;var r=function(){};r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e},pn=/%[sdj%]/g;function _n(e){if(!An(e)){for(var t=[],r=0;r<arguments.length;r++)t.push(yn(arguments[r]));return t.join(" ")}r=1;for(var n=arguments,i=n.length,o=String(e).replace(pn,function(e){if("%%"===e)return"%";if(r>=i)return e;switch(e){case"%s":return String(n[r++]);case"%d":return Number(n[r++]);case"%j":try{return JSON.stringify(n[r++])}catch(e){return"[Circular]"}default:return e}}),a=n[r];r<i;a=n[++r])Rn(a)||!Ln(a)?o+=" "+a:o+=" "+yn(a);return o}function gn(t,r){if(Bn(e.process))return function(){return gn(t,r).apply(this,arguments)};var n=!1;return function(){return n||(console.error(r),n=!0),t.apply(this,arguments)}}var vn,wn={};function yn(e,t){var r={seen:[],stylize:mn};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),xn(t)?r.showHidden=t:t&&function(e,t){if(!t||!Ln(t))return e;var r=Object.keys(t),n=r.length;for(;n--;)e[r[n]]=t[r[n]]}(r,t),Bn(r.showHidden)&&(r.showHidden=!1),Bn(r.depth)&&(r.depth=2),Bn(r.colors)&&(r.colors=!1),Bn(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=bn),kn(r,e,r.depth)}function bn(e,t){var r=yn.styles[t];return r?"["+yn.colors[r][0]+"m"+e+"["+yn.colors[r][1]+"m":e}function mn(e,t){return e}function kn(e,t,r){if(e.customInspect&&t&&In(t.inspect)&&t.inspect!==yn&&(!t.constructor||t.constructor.prototype!==t)){var n=t.inspect(r,e);return An(n)||(n=kn(e,n,r)),n}var i=function(e,t){if(Bn(t))return e.stylize("undefined","undefined");if(An(t)){var r="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(r,"string")}if(n=t,"number"==typeof n)return e.stylize(""+t,"number");var n;if(xn(t))return e.stylize(""+t,"boolean");if(Rn(t))return e.stylize("null","null")}(e,t);if(i)return i;var o=Object.keys(t),a=function(e){var t={};return e.forEach(function(e,r){t[e]=!0}),t}(o);if(e.showHidden&&(o=Object.getOwnPropertyNames(t)),Mn(t)&&(o.indexOf("message")>=0||o.indexOf("description")>=0))return En(t);if(0===o.length){if(In(t)){var s=t.name?": "+t.name:"";return e.stylize("[Function"+s+"]","special")}if(zn(t))return e.stylize(RegExp.prototype.toString.call(t),"regexp");if(Tn(t))return e.stylize(Date.prototype.toString.call(t),"date");if(Mn(t))return En(t)}var h,c,f="",u=!1,l=["{","}"];(h=t,Array.isArray(h)&&(u=!0,l=["[","]"]),In(t))&&(f=" [Function"+(t.name?": "+t.name:"")+"]");return zn(t)&&(f=" "+RegExp.prototype.toString.call(t)),Tn(t)&&(f=" "+Date.prototype.toUTCString.call(t)),Mn(t)&&(f=" "+En(t)),0!==o.length||u&&0!=t.length?r<0?zn(t)?e.stylize(RegExp.prototype.toString.call(t),"regexp"):e.stylize("[Object]","special"):(e.seen.push(t),c=u?function(e,t,r,n,i){for(var o=[],a=0,s=t.length;a<s;++a)On(t,String(a))?o.push(Sn(e,t,r,n,String(a),!0)):o.push("");return i.forEach(function(i){i.match(/^\d+$/)||o.push(Sn(e,t,r,n,i,!0))}),o}(e,t,r,a,o):o.map(function(n){return Sn(e,t,r,a,n,u)}),e.seen.pop(),function(e,t,r){if(e.reduce(function(e,t){return t.indexOf("\n"),e+t.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60)return r[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+r[1];return r[0]+t+" "+e.join(", ")+" "+r[1]}(c,f,l)):l[0]+f+l[1]}function En(e){return"["+Error.prototype.toString.call(e)+"]"}function Sn(e,t,r,n,i,o){var a,s,h;if((h=Object.getOwnPropertyDescriptor(t,i)||{value:t[i]}).get?s=h.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):h.set&&(s=e.stylize("[Setter]","special")),On(n,i)||(a="["+i+"]"),s||(e.seen.indexOf(h.value)<0?(s=Rn(r)?kn(e,h.value,null):kn(e,h.value,r-1)).indexOf("\n")>-1&&(s=o?s.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):"\n"+s.split("\n").map(function(e){return"   "+e}).join("\n")):s=e.stylize("[Circular]","special")),Bn(a)){if(o&&i.match(/^\d+$/))return s;(a=JSON.stringify(""+i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(a=a.substr(1,a.length-2),a=e.stylize(a,"name")):(a=a.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),a=e.stylize(a,"string"))}return a+": "+s}function xn(e){return"boolean"==typeof e}function Rn(e){return null===e}function An(e){return"string"==typeof e}function Bn(e){return void 0===e}function zn(e){return Ln(e)&&"[object RegExp]"===Cn(e)}function Ln(e){return"object"==typeof e&&null!==e}function Tn(e){return Ln(e)&&"[object Date]"===Cn(e)}function Mn(e){return Ln(e)&&("[object Error]"===Cn(e)||e instanceof Error)}function In(e){return"function"==typeof e}function Cn(e){return Object.prototype.toString.call(e)}function On(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Dn(){this.head=null,this.tail=null,this.length=0}yn.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},yn.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},Dn.prototype.push=function(e){var t={data:e,next:null};this.length>0?this.tail.next=t:this.head=t,this.tail=t,++this.length},Dn.prototype.unshift=function(e){var t={data:e,next:this.head};0===this.length&&(this.tail=t),this.head=t,++this.length},Dn.prototype.shift=function(){if(0!==this.length){var e=this.head.data;return 1===this.length?this.head=this.tail=null:this.head=this.head.next,--this.length,e}},Dn.prototype.clear=function(){this.head=this.tail=null,this.length=0},Dn.prototype.join=function(e){if(0===this.length)return"";for(var t=this.head,r=""+t.data;t=t.next;)r+=e+t.data;return r},Dn.prototype.concat=function(e){if(0===this.length)return p.alloc(0);if(1===this.length)return this.head.data;for(var t=p.allocUnsafe(e>>>0),r=this.head,n=0;r;)r.data.copy(t,n),n+=r.data.length,r=r.next;return t};var Pn=p.isEncoding||function(e){switch(e&&e.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0;default:return!1}};function Nn(e){switch(this.encoding=(e||"utf8").toLowerCase().replace(/[-_]/,""),function(e){if(e&&!Pn(e))throw new Error("Unknown encoding: "+e)}(e),this.encoding){case"utf8":this.surrogateSize=3;break;case"ucs2":case"utf16le":this.surrogateSize=2,this.detectIncompleteChar=Fn;break;case"base64":this.surrogateSize=3,this.detectIncompleteChar=Hn;break;default:return void(this.write=Un)}this.charBuffer=new p(6),this.charReceived=0,this.charLength=0}function Un(e){return e.toString(this.encoding)}function Fn(e){this.charReceived=e.length%2,this.charLength=this.charReceived?2:0}function Hn(e){this.charReceived=e.length%3,this.charLength=this.charReceived?3:0}Nn.prototype.write=function(e){for(var t="";this.charLength;){var r=e.length>=this.charLength-this.charReceived?this.charLength-this.charReceived:e.length;if(e.copy(this.charBuffer,this.charReceived,0,r),this.charReceived+=r,this.charReceived<this.charLength)return"";if(e=e.slice(r,e.length),!((i=(t=this.charBuffer.slice(0,this.charLength).toString(this.encoding)).charCodeAt(t.length-1))>=55296&&i<=56319)){if(this.charReceived=this.charLength=0,0===e.length)return t;break}this.charLength+=this.surrogateSize,t=""}this.detectIncompleteChar(e);var n=e.length;this.charLength&&(e.copy(this.charBuffer,0,e.length-this.charReceived,n),n-=this.charReceived);var i;n=(t+=e.toString(this.encoding,0,n)).length-1;if((i=t.charCodeAt(n))>=55296&&i<=56319){var o=this.surrogateSize;return this.charLength+=o,this.charReceived+=o,this.charBuffer.copy(this.charBuffer,o,0,o),e.copy(this.charBuffer,0,0,o),t.substring(0,n)}return t},Nn.prototype.detectIncompleteChar=function(e){for(var t=e.length>=3?3:e.length;t>0;t--){var r=e[e.length-t];if(1==t&&r>>5==6){this.charLength=2;break}if(t<=2&&r>>4==14){this.charLength=3;break}if(t<=3&&r>>3==30){this.charLength=4;break}}this.charReceived=t},Nn.prototype.end=function(e){var t="";if(e&&e.length&&(t=this.write(e)),this.charReceived){var r=this.charReceived,n=this.charBuffer,i=this.encoding;t+=n.slice(0,r).toString(i)}return t},Wn.ReadableState=jn;var Zn=function(e){Bn(vn)&&(vn=""),e=e.toUpperCase(),wn[e]||(new RegExp("\\b"+e+"\\b","i").test(vn)?wn[e]=function(){var t=_n.apply(null,arguments);console.error("%s %d: %s",e,0,t)}:wn[e]=function(){});return wn[e]}("stream");function jn(e,t){e=e||{},this.objectMode=!!e.objectMode,t instanceof wi&&(this.objectMode=this.objectMode||!!e.readableObjectMode);var r=e.highWaterMark,n=this.objectMode?16:16384;this.highWaterMark=r||0===r?r:n,this.highWaterMark=~~this.highWaterMark,this.buffer=new Dn,this.length=0,this.pipes=null,this.pipesCount=0,this.flowing=null,this.ended=!1,this.endEmitted=!1,this.reading=!1,this.sync=!0,this.needReadable=!1,this.emittedReadable=!1,this.readableListening=!1,this.resumeScheduled=!1,this.defaultEncoding=e.defaultEncoding||"utf8",this.ranOut=!1,this.awaitDrain=0,this.readingMore=!1,this.decoder=null,this.encoding=null,e.encoding&&(this.decoder=new Nn(e.encoding),this.encoding=e.encoding)}function Wn(e){if(!(this instanceof Wn))return new Wn(e);this._readableState=new jn(e,this),this.readable=!0,e&&"function"==typeof e.read&&(this._read=e.read),tn.call(this)}function Yn(e,t,r,n,i){var o=function(e,t){var r=null;$(t)||"string"==typeof t||null==t||e.objectMode||(r=new TypeError("Invalid non-string/buffer chunk"));return r}(t,r);if(o)e.emit("error",o);else if(null===r)t.reading=!1,function(e,t){if(t.ended)return;if(t.decoder){var r=t.decoder.end();r&&r.length&&(t.buffer.push(r),t.length+=t.objectMode?1:r.length)}t.ended=!0,qn(e)}(e,t);else if(t.objectMode||r&&r.length>0)if(t.ended&&!i){var a=new Error("stream.push() after EOF");e.emit("error",a)}else if(t.endEmitted&&i){var s=new Error("stream.unshift() after end event");e.emit("error",s)}else{var h;!t.decoder||i||n||(r=t.decoder.write(r),h=!t.objectMode&&0===r.length),i||(t.reading=!1),h||(t.flowing&&0===t.length&&!t.sync?(e.emit("data",r),e.read(0)):(t.length+=t.objectMode?1:r.length,i?t.buffer.unshift(r):t.buffer.push(r),t.needReadable&&qn(e))),function(e,t){t.readingMore||(t.readingMore=!0,$r(Gn,e,t))}(e,t)}else i||(t.reading=!1);return function(e){return!e.ended&&(e.needReadable||e.length<e.highWaterMark||0===e.length)}(t)}dn(Wn,tn),Wn.prototype.push=function(e,t){var r=this._readableState;return r.objectMode||"string"!=typeof e||(t=t||r.defaultEncoding)!==r.encoding&&(e=p.from(e,t),t=""),Yn(this,r,e,t,!1)},Wn.prototype.unshift=function(e){return Yn(this,this._readableState,e,"",!0)},Wn.prototype.isPaused=function(){return!1===this._readableState.flowing},Wn.prototype.setEncoding=function(e){return this._readableState.decoder=new Nn(e),this._readableState.encoding=e,this};var Kn=8388608;function Xn(e,t){return e<=0||0===t.length&&t.ended?0:t.objectMode?1:e!=e?t.flowing&&t.length?t.buffer.head.data.length:t.length:(e>t.highWaterMark&&(t.highWaterMark=function(e){return e>=Kn?e=Kn:(e--,e|=e>>>1,e|=e>>>2,e|=e>>>4,e|=e>>>8,e|=e>>>16,e++),e}(e)),e<=t.length?e:t.ended?t.length:(t.needReadable=!0,0))}function qn(e){var t=e._readableState;t.needReadable=!1,t.emittedReadable||(Zn("emitReadable",t.flowing),t.emittedReadable=!0,t.sync?$r(Vn,e):Vn(e))}function Vn(e){Zn("emit readable"),e.emit("readable"),Qn(e)}function Gn(e,t){for(var r=t.length;!t.reading&&!t.flowing&&!t.ended&&t.length<t.highWaterMark&&(Zn("maybeReadMore read 0"),e.read(0),r!==t.length);)r=t.length;t.readingMore=!1}function $n(e){Zn("readable nexttick read 0"),e.read(0)}function Jn(e,t){t.reading||(Zn("resume read 0"),e.read(0)),t.resumeScheduled=!1,t.awaitDrain=0,e.emit("resume"),Qn(e),t.flowing&&!t.reading&&e.read(0)}function Qn(e){var t=e._readableState;for(Zn("flow",t.flowing);t.flowing&&null!==e.read(););}function ei(e,t){return 0===t.length?null:(t.objectMode?r=t.buffer.shift():!e||e>=t.length?(r=t.decoder?t.buffer.join(""):1===t.buffer.length?t.buffer.head.data:t.buffer.concat(t.length),t.buffer.clear()):r=function(e,t,r){var n;e<t.head.data.length?(n=t.head.data.slice(0,e),t.head.data=t.head.data.slice(e)):n=e===t.head.data.length?t.shift():r?function(e,t){var r=t.head,n=1,i=r.data;e-=i.length;for(;r=r.next;){var o=r.data,a=e>o.length?o.length:e;if(a===o.length?i+=o:i+=o.slice(0,e),0===(e-=a)){a===o.length?(++n,r.next?t.head=r.next:t.head=t.tail=null):(t.head=r,r.data=o.slice(a));break}++n}return t.length-=n,i}(e,t):function(e,t){var r=p.allocUnsafe(e),n=t.head,i=1;n.data.copy(r),e-=n.data.length;for(;n=n.next;){var o=n.data,a=e>o.length?o.length:e;if(o.copy(r,r.length-e,0,a),0===(e-=a)){a===o.length?(++i,n.next?t.head=n.next:t.head=t.tail=null):(t.head=n,n.data=o.slice(a));break}++i}return t.length-=i,r}(e,t);return n}(e,t.buffer,t.decoder),r);var r}function ti(e){var t=e._readableState;if(t.length>0)throw new Error('"endReadable()" called on non-empty stream');t.endEmitted||(t.ended=!0,$r(ri,t,e))}function ri(e,t){e.endEmitted||0!==e.length||(e.endEmitted=!0,t.readable=!1,t.emit("end"))}function ni(e,t){for(var r=0,n=e.length;r<n;r++)if(e[r]===t)return r;return-1}function ii(){}function oi(e,t,r){this.chunk=e,this.encoding=t,this.callback=r,this.next=null}function ai(e,t){Object.defineProperty(this,"buffer",{get:gn(function(){return this.getBuffer()},"_writableState.buffer is deprecated. Use _writableState.getBuffer instead.")}),e=e||{},this.objectMode=!!e.objectMode,t instanceof wi&&(this.objectMode=this.objectMode||!!e.writableObjectMode);var r=e.highWaterMark,n=this.objectMode?16:16384;this.highWaterMark=r||0===r?r:n,this.highWaterMark=~~this.highWaterMark,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1;var i=!1===e.decodeStrings;this.decodeStrings=!i,this.defaultEncoding=e.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.corked=0,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(e){!function(e,t){var r=e._writableState,n=r.sync,i=r.writecb;if(function(e){e.writing=!1,e.writecb=null,e.length-=e.writelen,e.writelen=0}(r),t)!function(e,t,r,n,i){--t.pendingcb,r?$r(i,n):i(n);e._writableState.errorEmitted=!0,e.emit("error",n)}(e,r,n,t,i);else{var o=ui(r);o||r.corked||r.bufferProcessing||!r.bufferedRequest||fi(e,r),n?$r(ci,e,r,o,i):ci(e,r,o,i)}}(t,e)},this.writecb=null,this.writelen=0,this.bufferedRequest=null,this.lastBufferedRequest=null,this.pendingcb=0,this.prefinished=!1,this.errorEmitted=!1,this.bufferedRequestCount=0,this.corkedRequestsFree=new pi(this)}function si(e){if(!(this instanceof si||this instanceof wi))return new si(e);this._writableState=new ai(e,this),this.writable=!0,e&&("function"==typeof e.write&&(this._write=e.write),"function"==typeof e.writev&&(this._writev=e.writev)),tn.call(this)}function hi(e,t,r,n,i,o,a){t.writelen=n,t.writecb=a,t.writing=!0,t.sync=!0,r?e._writev(i,t.onwrite):e._write(i,o,t.onwrite),t.sync=!1}function ci(e,t,r,n){r||function(e,t){0===t.length&&t.needDrain&&(t.needDrain=!1,e.emit("drain"))}(e,t),t.pendingcb--,n(),di(e,t)}function fi(e,t){t.bufferProcessing=!0;var r=t.bufferedRequest;if(e._writev&&r&&r.next){var n=t.bufferedRequestCount,i=new Array(n),o=t.corkedRequestsFree;o.entry=r;for(var a=0;r;)i[a]=r,r=r.next,a+=1;hi(e,t,!0,t.length,i,"",o.finish),t.pendingcb++,t.lastBufferedRequest=null,o.next?(t.corkedRequestsFree=o.next,o.next=null):t.corkedRequestsFree=new pi(t)}else{for(;r;){var s=r.chunk,h=r.encoding,c=r.callback;if(hi(e,t,!1,t.objectMode?1:s.length,s,h,c),r=r.next,t.writing)break}null===r&&(t.lastBufferedRequest=null)}t.bufferedRequestCount=0,t.bufferedRequest=r,t.bufferProcessing=!1}function ui(e){return e.ending&&0===e.length&&null===e.bufferedRequest&&!e.finished&&!e.writing}function li(e,t){t.prefinished||(t.prefinished=!0,e.emit("prefinish"))}function di(e,t){var r=ui(t);return r&&(0===t.pendingcb?(li(e,t),t.finished=!0,e.emit("finish")):li(e,t)),r}function pi(e){var t=this;this.next=null,this.entry=null,this.finish=function(r){var n=t.entry;for(t.entry=null;n;){var i=n.callback;e.pendingcb--,i(r),n=n.next}e.corkedRequestsFree?e.corkedRequestsFree.next=t:e.corkedRequestsFree=t}}Wn.prototype.read=function(e){Zn("read",e),e=parseInt(e,10);var t=this._readableState,r=e;if(0!==e&&(t.emittedReadable=!1),0===e&&t.needReadable&&(t.length>=t.highWaterMark||t.ended))return Zn("read: emitReadable",t.length,t.ended),0===t.length&&t.ended?ti(this):qn(this),null;if(0===(e=Xn(e,t))&&t.ended)return 0===t.length&&ti(this),null;var n,i=t.needReadable;return Zn("need readable",i),(0===t.length||t.length-e<t.highWaterMark)&&Zn("length less than watermark",i=!0),t.ended||t.reading?Zn("reading or ended",i=!1):i&&(Zn("do read"),t.reading=!0,t.sync=!0,0===t.length&&(t.needReadable=!0),this._read(t.highWaterMark),t.sync=!1,t.reading||(e=Xn(r,t))),null===(n=e>0?ei(e,t):null)?(t.needReadable=!0,e=0):t.length-=e,0===t.length&&(t.ended||(t.needReadable=!0),r!==e&&t.ended&&ti(this)),null!==n&&this.emit("data",n),n},Wn.prototype._read=function(e){this.emit("error",new Error("not implemented"))},Wn.prototype.pipe=function(e,t){var r=this,n=this._readableState;switch(n.pipesCount){case 0:n.pipes=e;break;case 1:n.pipes=[n.pipes,e];break;default:n.pipes.push(e)}n.pipesCount+=1,Zn("pipe count=%d opts=%j",n.pipesCount,t);var i=!t||!1!==t.end?a:c;function o(e){Zn("onunpipe"),e===r&&c()}function a(){Zn("onend"),e.end()}n.endEmitted?$r(i):r.once("end",i),e.on("unpipe",o);var s=function(e){return function(){var t=e._readableState;Zn("pipeOnDrain",t.awaitDrain),t.awaitDrain&&t.awaitDrain--,0===t.awaitDrain&&e.listeners("data").length&&(t.flowing=!0,Qn(e))}}(r);e.on("drain",s);var h=!1;function c(){Zn("cleanup"),e.removeListener("close",d),e.removeListener("finish",p),e.removeListener("drain",s),e.removeListener("error",l),e.removeListener("unpipe",o),r.removeListener("end",a),r.removeListener("end",c),r.removeListener("data",u),h=!0,!n.awaitDrain||e._writableState&&!e._writableState.needDrain||s()}var f=!1;function u(t){Zn("ondata"),f=!1,!1!==e.write(t)||f||((1===n.pipesCount&&n.pipes===e||n.pipesCount>1&&-1!==ni(n.pipes,e))&&!h&&(Zn("false write response, pause",r._readableState.awaitDrain),r._readableState.awaitDrain++,f=!0),r.pause())}function l(t){var r;Zn("onerror",t),_(),e.removeListener("error",l),0===(r="error",e.listeners(r).length)&&e.emit("error",t)}function d(){e.removeListener("finish",p),_()}function p(){Zn("onfinish"),e.removeListener("close",d),_()}function _(){Zn("unpipe"),r.unpipe(e)}return r.on("data",u),function(e,t,r){if("function"==typeof e.prependListener)return e.prependListener(t,r);e._events&&e._events[t]?Array.isArray(e._events[t])?e._events[t].unshift(r):e._events[t]=[r,e._events[t]]:e.on(t,r)}(e,"error",l),e.once("close",d),e.once("finish",p),e.emit("pipe",r),n.flowing||(Zn("pipe resume"),r.resume()),e},Wn.prototype.unpipe=function(e){var t=this._readableState;if(0===t.pipesCount)return this;if(1===t.pipesCount)return e&&e!==t.pipes?this:(e||(e=t.pipes),t.pipes=null,t.pipesCount=0,t.flowing=!1,e&&e.emit("unpipe",this),this);if(!e){var r=t.pipes,n=t.pipesCount;t.pipes=null,t.pipesCount=0,t.flowing=!1;for(var i=0;i<n;i++)r[i].emit("unpipe",this);return this}var o=ni(t.pipes,e);return-1===o?this:(t.pipes.splice(o,1),t.pipesCount-=1,1===t.pipesCount&&(t.pipes=t.pipes[0]),e.emit("unpipe",this),this)},Wn.prototype.on=function(e,t){var r=tn.prototype.on.call(this,e,t);if("data"===e)!1!==this._readableState.flowing&&this.resume();else if("readable"===e){var n=this._readableState;n.endEmitted||n.readableListening||(n.readableListening=n.needReadable=!0,n.emittedReadable=!1,n.reading?n.length&&qn(this):$r($n,this))}return r},Wn.prototype.addListener=Wn.prototype.on,Wn.prototype.resume=function(){var e=this._readableState;return e.flowing||(Zn("resume"),e.flowing=!0,function(e,t){t.resumeScheduled||(t.resumeScheduled=!0,$r(Jn,e,t))}(this,e)),this},Wn.prototype.pause=function(){return Zn("call pause flowing=%j",this._readableState.flowing),!1!==this._readableState.flowing&&(Zn("pause"),this._readableState.flowing=!1,this.emit("pause")),this},Wn.prototype.wrap=function(e){var t=this._readableState,r=!1,n=this;for(var i in e.on("end",function(){if(Zn("wrapped end"),t.decoder&&!t.ended){var e=t.decoder.end();e&&e.length&&n.push(e)}n.push(null)}),e.on("data",function(i){(Zn("wrapped data"),t.decoder&&(i=t.decoder.write(i)),t.objectMode&&null==i)||(t.objectMode||i&&i.length)&&(n.push(i)||(r=!0,e.pause()))}),e)void 0===this[i]&&"function"==typeof e[i]&&(this[i]=function(t){return function(){return e[t].apply(e,arguments)}}(i));return function(e,t){for(var r=0,n=e.length;r<n;r++)t(e[r],r)}(["error","close","destroy","pause","resume"],function(t){e.on(t,n.emit.bind(n,t))}),n._read=function(t){Zn("wrapped _read",t),r&&(r=!1,e.resume())},n},Wn._fromList=ei,si.WritableState=ai,dn(si,tn),ai.prototype.getBuffer=function(){for(var e=this.bufferedRequest,t=[];e;)t.push(e),e=e.next;return t},si.prototype.pipe=function(){this.emit("error",new Error("Cannot pipe, not readable"))},si.prototype.write=function(e,t,r){var n=this._writableState,i=!1;return"function"==typeof t&&(r=t,t=null),p.isBuffer(e)?t="buffer":t||(t=n.defaultEncoding),"function"!=typeof r&&(r=ii),n.ended?function(e,t){var r=new Error("write after end");e.emit("error",r),$r(t,r)}(this,r):function(e,t,r,n){var i=!0,o=!1;return null===r?o=new TypeError("May not write null values to stream"):p.isBuffer(r)||"string"==typeof r||void 0===r||t.objectMode||(o=new TypeError("Invalid non-string/buffer chunk")),o&&(e.emit("error",o),$r(n,o),i=!1),i}(this,n,e,r)&&(n.pendingcb++,i=function(e,t,r,n,i){r=function(e,t,r){return e.objectMode||!1===e.decodeStrings||"string"!=typeof t||(t=p.from(t,r)),t}(t,r,n),p.isBuffer(r)&&(n="buffer");var o=t.objectMode?1:r.length;t.length+=o;var a=t.length<t.highWaterMark;a||(t.needDrain=!0);if(t.writing||t.corked){var s=t.lastBufferedRequest;t.lastBufferedRequest=new oi(r,n,i),s?s.next=t.lastBufferedRequest:t.bufferedRequest=t.lastBufferedRequest,t.bufferedRequestCount+=1}else hi(e,t,!1,o,r,n,i);return a}(this,n,e,t,r)),i},si.prototype.cork=function(){this._writableState.corked++},si.prototype.uncork=function(){var e=this._writableState;e.corked&&(e.corked--,e.writing||e.corked||e.finished||e.bufferProcessing||!e.bufferedRequest||fi(this,e))},si.prototype.setDefaultEncoding=function(e){if("string"==typeof e&&(e=e.toLowerCase()),!(["hex","utf8","utf-8","ascii","binary","base64","ucs2","ucs-2","utf16le","utf-16le","raw"].indexOf((e+"").toLowerCase())>-1))throw new TypeError("Unknown encoding: "+e);return this._writableState.defaultEncoding=e,this},si.prototype._write=function(e,t,r){r(new Error("not implemented"))},si.prototype._writev=null,si.prototype.end=function(e,t,r){var n=this._writableState;"function"==typeof e?(r=e,e=null,t=null):"function"==typeof t&&(r=t,t=null),null!=e&&this.write(e,t),n.corked&&(n.corked=1,this.uncork()),n.ending||n.finished||function(e,t,r){t.ending=!0,di(e,t),r&&(t.finished?$r(r):e.once("finish",r));t.ended=!0,e.writable=!1}(this,n,r)},dn(wi,Wn);for(var _i=Object.keys(si.prototype),gi=0;gi<_i.length;gi++){var vi=_i[gi];wi.prototype[vi]||(wi.prototype[vi]=si.prototype[vi])}function wi(e){if(!(this instanceof wi))return new wi(e);Wn.call(this,e),si.call(this,e),e&&!1===e.readable&&(this.readable=!1),e&&!1===e.writable&&(this.writable=!1),this.allowHalfOpen=!0,e&&!1===e.allowHalfOpen&&(this.allowHalfOpen=!1),this.once("end",yi)}function yi(){this.allowHalfOpen||this._writableState.ended||$r(bi,this)}function bi(e){e.end()}function mi(e){this.afterTransform=function(t,r){return function(e,t,r){var n=e._transformState;n.transforming=!1;var i=n.writecb;if(!i)return e.emit("error",new Error("no writecb in Transform class"));n.writechunk=null,n.writecb=null,null!=r&&e.push(r);i(t);var o=e._readableState;o.reading=!1,(o.needReadable||o.length<o.highWaterMark)&&e._read(o.highWaterMark)}(e,t,r)},this.needTransform=!1,this.transforming=!1,this.writecb=null,this.writechunk=null,this.writeencoding=null}function ki(e){if(!(this instanceof ki))return new ki(e);wi.call(this,e),this._transformState=new mi(this);var t=this;this._readableState.needReadable=!0,this._readableState.sync=!1,e&&("function"==typeof e.transform&&(this._transform=e.transform),"function"==typeof e.flush&&(this._flush=e.flush)),this.once("prefinish",function(){"function"==typeof this._flush?this._flush(function(e){Ei(t,e)}):Ei(t)})}function Ei(e,t){if(t)return e.emit("error",t);var r=e._writableState,n=e._transformState;if(r.length)throw new Error("Calling transform done when ws.length != 0");if(n.transforming)throw new Error("Calling transform done when still transforming");return e.push(null)}function Si(e){if(!(this instanceof Si))return new Si(e);ki.call(this,e)}function xi(){tn.call(this)}dn(ki,wi),ki.prototype.push=function(e,t){return this._transformState.needTransform=!1,wi.prototype.push.call(this,e,t)},ki.prototype._transform=function(e,t,r){throw new Error("Not implemented")},ki.prototype._write=function(e,t,r){var n=this._transformState;if(n.writecb=r,n.writechunk=e,n.writeencoding=t,!n.transforming){var i=this._readableState;(n.needTransform||i.needReadable||i.length<i.highWaterMark)&&this._read(i.highWaterMark)}},ki.prototype._read=function(e){var t=this._transformState;null!==t.writechunk&&t.writecb&&!t.transforming?(t.transforming=!0,this._transform(t.writechunk,t.writeencoding,t.afterTransform)):t.needTransform=!0},dn(Si,ki),Si.prototype._transform=function(e,t,r){r(null,e)},dn(xi,tn),xi.Readable=Wn,xi.Writable=si,xi.Duplex=wi,xi.Transform=ki,xi.PassThrough=Si,xi.Stream=xi,xi.prototype.pipe=function(e,t){var r=this;function n(t){e.writable&&!1===e.write(t)&&r.pause&&r.pause()}function i(){r.readable&&r.resume&&r.resume()}r.on("data",n),e.on("drain",i),e._isStdio||t&&!1===t.end||(r.on("end",a),r.on("close",s));var o=!1;function a(){o||(o=!0,e.end())}function s(){o||(o=!0,"function"==typeof e.destroy&&e.destroy())}function h(e){if(c(),0===tn.listenerCount(this,"error"))throw e}function c(){r.removeListener("data",n),e.removeListener("drain",i),r.removeListener("end",a),r.removeListener("close",s),r.removeListener("error",h),e.removeListener("error",h),r.removeListener("end",c),r.removeListener("close",c),e.removeListener("close",c)}return r.on("error",h),e.on("error",h),r.on("end",c),r.on("close",c),e.on("close",c),e.emit("pipe",r),e};var Ri={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function Ai(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}function Bi(e,t,r,n,i){if(t.subarray&&e.subarray)e.set(t.subarray(r,r+n),i);else for(var o=0;o<n;o++)e[i+o]=t[r+o]}var zi=Uint8Array,Li=Uint16Array,Ti=Int32Array,Mi=4,Ii=0,Ci=1,Oi=2;function Di(e){for(var t=e.length;--t>=0;)e[t]=0}var Pi=0,Ni=1,Ui=2,Fi=29,Hi=256,Zi=Hi+1+Fi,ji=30,Wi=19,Yi=2*Zi+1,Ki=15,Xi=16,qi=7,Vi=256,Gi=16,$i=17,Ji=18,Qi=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],eo=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],to=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],ro=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],no=new Array(2*(Zi+2));Di(no);var io=new Array(2*ji);Di(io);var oo=new Array(512);Di(oo);var ao=new Array(256);Di(ao);var so=new Array(Fi);Di(so);var ho,co,fo,uo=new Array(ji);function lo(e,t,r,n,i){this.static_tree=e,this.extra_bits=t,this.extra_base=r,this.elems=n,this.max_length=i,this.has_stree=e&&e.length}function po(e,t){this.dyn_tree=e,this.max_code=0,this.stat_desc=t}function _o(e){return e<256?oo[e]:oo[256+(e>>>7)]}function go(e,t){e.pending_buf[e.pending++]=255&t,e.pending_buf[e.pending++]=t>>>8&255}function vo(e,t,r){e.bi_valid>Xi-r?(e.bi_buf|=t<<e.bi_valid&65535,go(e,e.bi_buf),e.bi_buf=t>>Xi-e.bi_valid,e.bi_valid+=r-Xi):(e.bi_buf|=t<<e.bi_valid&65535,e.bi_valid+=r)}function wo(e,t,r){vo(e,r[2*t],r[2*t+1])}function yo(e,t){var r=0;do{r|=1&e,e>>>=1,r<<=1}while(--t>0);return r>>>1}function bo(e,t,r){var n,i,o=new Array(Ki+1),a=0;for(n=1;n<=Ki;n++)o[n]=a=a+r[n-1]<<1;for(i=0;i<=t;i++){var s=e[2*i+1];0!==s&&(e[2*i]=yo(o[s]++,s))}}function mo(e){var t;for(t=0;t<Zi;t++)e.dyn_ltree[2*t]=0;for(t=0;t<ji;t++)e.dyn_dtree[2*t]=0;for(t=0;t<Wi;t++)e.bl_tree[2*t]=0;e.dyn_ltree[2*Vi]=1,e.opt_len=e.static_len=0,e.last_lit=e.matches=0}function ko(e){e.bi_valid>8?go(e,e.bi_buf):e.bi_valid>0&&(e.pending_buf[e.pending++]=e.bi_buf),e.bi_buf=0,e.bi_valid=0}function Eo(e,t,r,n){var i=2*t,o=2*r;return e[i]<e[o]||e[i]===e[o]&&n[t]<=n[r]}function So(e,t,r){for(var n=e.heap[r],i=r<<1;i<=e.heap_len&&(i<e.heap_len&&Eo(t,e.heap[i+1],e.heap[i],e.depth)&&i++,!Eo(t,n,e.heap[i],e.depth));)e.heap[r]=e.heap[i],r=i,i<<=1;e.heap[r]=n}function xo(e,t,r){var n,i,o,a,s=0;if(0!==e.last_lit)do{n=e.pending_buf[e.d_buf+2*s]<<8|e.pending_buf[e.d_buf+2*s+1],i=e.pending_buf[e.l_buf+s],s++,0===n?wo(e,i,t):(wo(e,(o=ao[i])+Hi+1,t),0!==(a=Qi[o])&&vo(e,i-=so[o],a),wo(e,o=_o(--n),r),0!==(a=eo[o])&&vo(e,n-=uo[o],a))}while(s<e.last_lit);wo(e,Vi,t)}function Ro(e,t){var r,n,i,o=t.dyn_tree,a=t.stat_desc.static_tree,s=t.stat_desc.has_stree,h=t.stat_desc.elems,c=-1;for(e.heap_len=0,e.heap_max=Yi,r=0;r<h;r++)0!==o[2*r]?(e.heap[++e.heap_len]=c=r,e.depth[r]=0):o[2*r+1]=0;for(;e.heap_len<2;)o[2*(i=e.heap[++e.heap_len]=c<2?++c:0)]=1,e.depth[i]=0,e.opt_len--,s&&(e.static_len-=a[2*i+1]);for(t.max_code=c,r=e.heap_len>>1;r>=1;r--)So(e,o,r);i=h;do{r=e.heap[1],e.heap[1]=e.heap[e.heap_len--],So(e,o,1),n=e.heap[1],e.heap[--e.heap_max]=r,e.heap[--e.heap_max]=n,o[2*i]=o[2*r]+o[2*n],e.depth[i]=(e.depth[r]>=e.depth[n]?e.depth[r]:e.depth[n])+1,o[2*r+1]=o[2*n+1]=i,e.heap[1]=i++,So(e,o,1)}while(e.heap_len>=2);e.heap[--e.heap_max]=e.heap[1],function(e,t){var r,n,i,o,a,s,h=t.dyn_tree,c=t.max_code,f=t.stat_desc.static_tree,u=t.stat_desc.has_stree,l=t.stat_desc.extra_bits,d=t.stat_desc.extra_base,p=t.stat_desc.max_length,_=0;for(o=0;o<=Ki;o++)e.bl_count[o]=0;for(h[2*e.heap[e.heap_max]+1]=0,r=e.heap_max+1;r<Yi;r++)(o=h[2*h[2*(n=e.heap[r])+1]+1]+1)>p&&(o=p,_++),h[2*n+1]=o,n>c||(e.bl_count[o]++,a=0,n>=d&&(a=l[n-d]),s=h[2*n],e.opt_len+=s*(o+a),u&&(e.static_len+=s*(f[2*n+1]+a)));if(0!==_){do{for(o=p-1;0===e.bl_count[o];)o--;e.bl_count[o]--,e.bl_count[o+1]+=2,e.bl_count[p]--,_-=2}while(_>0);for(o=p;0!==o;o--)for(n=e.bl_count[o];0!==n;)(i=e.heap[--r])>c||(h[2*i+1]!==o&&(e.opt_len+=(o-h[2*i+1])*h[2*i],h[2*i+1]=o),n--)}}(e,t),bo(o,c,e.bl_count)}function Ao(e,t,r){var n,i,o=-1,a=t[1],s=0,h=7,c=4;for(0===a&&(h=138,c=3),t[2*(r+1)+1]=65535,n=0;n<=r;n++)i=a,a=t[2*(n+1)+1],++s<h&&i===a||(s<c?e.bl_tree[2*i]+=s:0!==i?(i!==o&&e.bl_tree[2*i]++,e.bl_tree[2*Gi]++):s<=10?e.bl_tree[2*$i]++:e.bl_tree[2*Ji]++,s=0,o=i,0===a?(h=138,c=3):i===a?(h=6,c=3):(h=7,c=4))}function Bo(e,t,r){var n,i,o=-1,a=t[1],s=0,h=7,c=4;for(0===a&&(h=138,c=3),n=0;n<=r;n++)if(i=a,a=t[2*(n+1)+1],!(++s<h&&i===a)){if(s<c)do{wo(e,i,e.bl_tree)}while(0!=--s);else 0!==i?(i!==o&&(wo(e,i,e.bl_tree),s--),wo(e,Gi,e.bl_tree),vo(e,s-3,2)):s<=10?(wo(e,$i,e.bl_tree),vo(e,s-3,3)):(wo(e,Ji,e.bl_tree),vo(e,s-11,7));s=0,o=i,0===a?(h=138,c=3):i===a?(h=6,c=3):(h=7,c=4)}}Di(uo);var zo=!1;function Lo(e){zo||(!function(){var e,t,r,n,i,o=new Array(Ki+1);for(r=0,n=0;n<Fi-1;n++)for(so[n]=r,e=0;e<1<<Qi[n];e++)ao[r++]=n;for(ao[r-1]=n,i=0,n=0;n<16;n++)for(uo[n]=i,e=0;e<1<<eo[n];e++)oo[i++]=n;for(i>>=7;n<ji;n++)for(uo[n]=i<<7,e=0;e<1<<eo[n]-7;e++)oo[256+i++]=n;for(t=0;t<=Ki;t++)o[t]=0;for(e=0;e<=143;)no[2*e+1]=8,e++,o[8]++;for(;e<=255;)no[2*e+1]=9,e++,o[9]++;for(;e<=279;)no[2*e+1]=7,e++,o[7]++;for(;e<=287;)no[2*e+1]=8,e++,o[8]++;for(bo(no,Zi+1,o),e=0;e<ji;e++)io[2*e+1]=5,io[2*e]=yo(e,5);ho=new lo(no,Qi,Hi+1,Zi,Ki),co=new lo(io,eo,0,ji,Ki),fo=new lo(new Array(0),to,0,Wi,qi)}(),zo=!0),e.l_desc=new po(e.dyn_ltree,ho),e.d_desc=new po(e.dyn_dtree,co),e.bl_desc=new po(e.bl_tree,fo),e.bi_buf=0,e.bi_valid=0,mo(e)}function To(e,t,r,n){vo(e,(Pi<<1)+(n?1:0),3),function(e,t,r,n){ko(e),n&&(go(e,r),go(e,~r)),Bi(e.pending_buf,e.window,t,r,e.pending),e.pending+=r}(e,t,r,!0)}function Mo(e){vo(e,Ni<<1,3),wo(e,Vi,no),function(e){16===e.bi_valid?(go(e,e.bi_buf),e.bi_buf=0,e.bi_valid=0):e.bi_valid>=8&&(e.pending_buf[e.pending++]=255&e.bi_buf,e.bi_buf>>=8,e.bi_valid-=8)}(e)}function Io(e,t,r,n){var i,o,a=0;e.level>0?(e.strm.data_type===Oi&&(e.strm.data_type=function(e){var t,r=4093624447;for(t=0;t<=31;t++,r>>>=1)if(1&r&&0!==e.dyn_ltree[2*t])return Ii;if(0!==e.dyn_ltree[18]||0!==e.dyn_ltree[20]||0!==e.dyn_ltree[26])return Ci;for(t=32;t<Hi;t++)if(0!==e.dyn_ltree[2*t])return Ci;return Ii}(e)),Ro(e,e.l_desc),Ro(e,e.d_desc),a=function(e){var t;for(Ao(e,e.dyn_ltree,e.l_desc.max_code),Ao(e,e.dyn_dtree,e.d_desc.max_code),Ro(e,e.bl_desc),t=Wi-1;t>=3&&0===e.bl_tree[2*ro[t]+1];t--);return e.opt_len+=3*(t+1)+5+5+4,t}(e),i=e.opt_len+3+7>>>3,(o=e.static_len+3+7>>>3)<=i&&(i=o)):i=o=r+5,r+4<=i&&-1!==t?To(e,t,r,n):e.strategy===Mi||o===i?(vo(e,(Ni<<1)+(n?1:0),3),xo(e,no,io)):(vo(e,(Ui<<1)+(n?1:0),3),function(e,t,r,n){var i;for(vo(e,t-257,5),vo(e,r-1,5),vo(e,n-4,4),i=0;i<n;i++)vo(e,e.bl_tree[2*ro[i]+1],3);Bo(e,e.dyn_ltree,t-1),Bo(e,e.dyn_dtree,r-1)}(e,e.l_desc.max_code+1,e.d_desc.max_code+1,a+1),xo(e,e.dyn_ltree,e.dyn_dtree)),mo(e),n&&ko(e)}function Co(e,t,r){return e.pending_buf[e.d_buf+2*e.last_lit]=t>>>8&255,e.pending_buf[e.d_buf+2*e.last_lit+1]=255&t,e.pending_buf[e.l_buf+e.last_lit]=255&r,e.last_lit++,0===t?e.dyn_ltree[2*r]++:(e.matches++,t--,e.dyn_ltree[2*(ao[r]+Hi+1)]++,e.dyn_dtree[2*_o(t)]++),e.last_lit===e.lit_bufsize-1}function Oo(e,t,r,n){for(var i=65535&e|0,o=e>>>16&65535|0,a=0;0!==r;){r-=a=r>2e3?2e3:r;do{o=o+(i=i+t[n++]|0)|0}while(--a);i%=65521,o%=65521}return i|o<<16|0}var Do=function(){for(var e,t=[],r=0;r<256;r++){e=r;for(var n=0;n<8;n++)e=1&e?3988292384^e>>>1:e>>>1;t[r]=e}return t}();function Po(e,t,r,n){var i=Do,o=n+r;e^=-1;for(var a=n;a<o;a++)e=e>>>8^i[255&(e^t[a])];return-1^e}var No,Uo=0,Fo=1,Ho=3,Zo=4,jo=5,Wo=0,Yo=1,Ko=-2,Xo=-3,qo=-5,Vo=-1,Go=1,$o=2,Jo=3,Qo=4,ea=2,ta=8,ra=9,na=286,ia=30,oa=19,aa=2*na+1,sa=15,ha=3,ca=258,fa=ca+ha+1,ua=32,la=42,da=69,pa=73,_a=91,ga=103,va=113,wa=666,ya=1,ba=2,ma=3,ka=4,Ea=3;function Sa(e,t){return e.msg=Ri[t],t}function xa(e){return(e<<1)-(e>4?9:0)}function Ra(e){for(var t=e.length;--t>=0;)e[t]=0}function Aa(e){var t=e.state,r=t.pending;r>e.avail_out&&(r=e.avail_out),0!==r&&(Bi(e.output,t.pending_buf,t.pending_out,r,e.next_out),e.next_out+=r,t.pending_out+=r,e.total_out+=r,e.avail_out-=r,t.pending-=r,0===t.pending&&(t.pending_out=0))}function Ba(e,t){Io(e,e.block_start>=0?e.block_start:-1,e.strstart-e.block_start,t),e.block_start=e.strstart,Aa(e.strm)}function za(e,t){e.pending_buf[e.pending++]=t}function La(e,t){e.pending_buf[e.pending++]=t>>>8&255,e.pending_buf[e.pending++]=255&t}function Ta(e,t){var r,n,i=e.max_chain_length,o=e.strstart,a=e.prev_length,s=e.nice_match,h=e.strstart>e.w_size-fa?e.strstart-(e.w_size-fa):0,c=e.window,f=e.w_mask,u=e.prev,l=e.strstart+ca,d=c[o+a-1],p=c[o+a];e.prev_length>=e.good_match&&(i>>=2),s>e.lookahead&&(s=e.lookahead);do{if(c[(r=t)+a]===p&&c[r+a-1]===d&&c[r]===c[o]&&c[++r]===c[o+1]){o+=2,r++;do{}while(c[++o]===c[++r]&&c[++o]===c[++r]&&c[++o]===c[++r]&&c[++o]===c[++r]&&c[++o]===c[++r]&&c[++o]===c[++r]&&c[++o]===c[++r]&&c[++o]===c[++r]&&o<l);if(n=ca-(l-o),o=l-ca,n>a){if(e.match_start=t,a=n,n>=s)break;d=c[o+a-1],p=c[o+a]}}}while((t=u[t&f])>h&&0!=--i);return a<=e.lookahead?a:e.lookahead}function Ma(e){var t,r,n,i,o,a,s,h,c,f,u=e.w_size;do{if(i=e.window_size-e.lookahead-e.strstart,e.strstart>=u+(u-fa)){Bi(e.window,e.window,u,u,0),e.match_start-=u,e.strstart-=u,e.block_start-=u,t=r=e.hash_size;do{n=e.head[--t],e.head[t]=n>=u?n-u:0}while(--r);t=r=u;do{n=e.prev[--t],e.prev[t]=n>=u?n-u:0}while(--r);i+=u}if(0===e.strm.avail_in)break;if(a=e.strm,s=e.window,h=e.strstart+e.lookahead,c=i,f=void 0,(f=a.avail_in)>c&&(f=c),r=0===f?0:(a.avail_in-=f,Bi(s,a.input,a.next_in,f,h),1===a.state.wrap?a.adler=Oo(a.adler,s,f,h):2===a.state.wrap&&(a.adler=Po(a.adler,s,f,h)),a.next_in+=f,a.total_in+=f,f),e.lookahead+=r,e.lookahead+e.insert>=ha)for(o=e.strstart-e.insert,e.ins_h=e.window[o],e.ins_h=(e.ins_h<<e.hash_shift^e.window[o+1])&e.hash_mask;e.insert&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[o+ha-1])&e.hash_mask,e.prev[o&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=o,o++,e.insert--,!(e.lookahead+e.insert<ha)););}while(e.lookahead<fa&&0!==e.strm.avail_in)}function Ia(e,t){for(var r,n;;){if(e.lookahead<fa){if(Ma(e),e.lookahead<fa&&t===Uo)return ya;if(0===e.lookahead)break}if(r=0,e.lookahead>=ha&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+ha-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),0!==r&&e.strstart-r<=e.w_size-fa&&(e.match_length=Ta(e,r)),e.match_length>=ha)if(n=Co(e,e.strstart-e.match_start,e.match_length-ha),e.lookahead-=e.match_length,e.match_length<=e.max_lazy_match&&e.lookahead>=ha){e.match_length--;do{e.strstart++,e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+ha-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart}while(0!=--e.match_length);e.strstart++}else e.strstart+=e.match_length,e.match_length=0,e.ins_h=e.window[e.strstart],e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+1])&e.hash_mask;else n=Co(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++;if(n&&(Ba(e,!1),0===e.strm.avail_out))return ya}return e.insert=e.strstart<ha-1?e.strstart:ha-1,t===Zo?(Ba(e,!0),0===e.strm.avail_out?ma:ka):e.last_lit&&(Ba(e,!1),0===e.strm.avail_out)?ya:ba}function Ca(e,t){for(var r,n,i;;){if(e.lookahead<fa){if(Ma(e),e.lookahead<fa&&t===Uo)return ya;if(0===e.lookahead)break}if(r=0,e.lookahead>=ha&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+ha-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),e.prev_length=e.match_length,e.prev_match=e.match_start,e.match_length=ha-1,0!==r&&e.prev_length<e.max_lazy_match&&e.strstart-r<=e.w_size-fa&&(e.match_length=Ta(e,r),e.match_length<=5&&(e.strategy===Go||e.match_length===ha&&e.strstart-e.match_start>4096)&&(e.match_length=ha-1)),e.prev_length>=ha&&e.match_length<=e.prev_length){i=e.strstart+e.lookahead-ha,n=Co(e,e.strstart-1-e.prev_match,e.prev_length-ha),e.lookahead-=e.prev_length-1,e.prev_length-=2;do{++e.strstart<=i&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+ha-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart)}while(0!=--e.prev_length);if(e.match_available=0,e.match_length=ha-1,e.strstart++,n&&(Ba(e,!1),0===e.strm.avail_out))return ya}else if(e.match_available){if((n=Co(e,0,e.window[e.strstart-1]))&&Ba(e,!1),e.strstart++,e.lookahead--,0===e.strm.avail_out)return ya}else e.match_available=1,e.strstart++,e.lookahead--}return e.match_available&&(n=Co(e,0,e.window[e.strstart-1]),e.match_available=0),e.insert=e.strstart<ha-1?e.strstart:ha-1,t===Zo?(Ba(e,!0),0===e.strm.avail_out?ma:ka):e.last_lit&&(Ba(e,!1),0===e.strm.avail_out)?ya:ba}function Oa(e,t,r,n,i){this.good_length=e,this.max_lazy=t,this.nice_length=r,this.max_chain=n,this.func=i}function Da(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=ta,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Li(2*aa),this.dyn_dtree=new Li(2*(2*ia+1)),this.bl_tree=new Li(2*(2*oa+1)),Ra(this.dyn_ltree),Ra(this.dyn_dtree),Ra(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Li(sa+1),this.heap=new Li(2*na+1),Ra(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Li(2*na+1),Ra(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Pa(e){var t,r=function(e){var t;return e&&e.state?(e.total_in=e.total_out=0,e.data_type=ea,(t=e.state).pending=0,t.pending_out=0,t.wrap<0&&(t.wrap=-t.wrap),t.status=t.wrap?la:va,e.adler=2===t.wrap?0:1,t.last_flush=Uo,Lo(t),Wo):Sa(e,Ko)}(e);return r===Wo&&((t=e.state).window_size=2*t.w_size,Ra(t.head),t.max_lazy_match=No[t.level].max_lazy,t.good_match=No[t.level].good_length,t.nice_match=No[t.level].nice_length,t.max_chain_length=No[t.level].max_chain,t.strstart=0,t.block_start=0,t.lookahead=0,t.insert=0,t.match_length=t.prev_length=ha-1,t.match_available=0,t.ins_h=0),r}function Na(e,t){var r,n,i,o;if(!e||!e.state||t>jo||t<0)return e?Sa(e,Ko):Ko;if(n=e.state,!e.output||!e.input&&0!==e.avail_in||n.status===wa&&t!==Zo)return Sa(e,0===e.avail_out?qo:Ko);if(n.strm=e,r=n.last_flush,n.last_flush=t,n.status===la)if(2===n.wrap)e.adler=0,za(n,31),za(n,139),za(n,8),n.gzhead?(za(n,(n.gzhead.text?1:0)+(n.gzhead.hcrc?2:0)+(n.gzhead.extra?4:0)+(n.gzhead.name?8:0)+(n.gzhead.comment?16:0)),za(n,255&n.gzhead.time),za(n,n.gzhead.time>>8&255),za(n,n.gzhead.time>>16&255),za(n,n.gzhead.time>>24&255),za(n,9===n.level?2:n.strategy>=$o||n.level<2?4:0),za(n,255&n.gzhead.os),n.gzhead.extra&&n.gzhead.extra.length&&(za(n,255&n.gzhead.extra.length),za(n,n.gzhead.extra.length>>8&255)),n.gzhead.hcrc&&(e.adler=Po(e.adler,n.pending_buf,n.pending,0)),n.gzindex=0,n.status=da):(za(n,0),za(n,0),za(n,0),za(n,0),za(n,0),za(n,9===n.level?2:n.strategy>=$o||n.level<2?4:0),za(n,Ea),n.status=va);else{var a=ta+(n.w_bits-8<<4)<<8;a|=(n.strategy>=$o||n.level<2?0:n.level<6?1:6===n.level?2:3)<<6,0!==n.strstart&&(a|=ua),a+=31-a%31,n.status=va,La(n,a),0!==n.strstart&&(La(n,e.adler>>>16),La(n,65535&e.adler)),e.adler=1}if(n.status===da)if(n.gzhead.extra){for(i=n.pending;n.gzindex<(65535&n.gzhead.extra.length)&&(n.pending!==n.pending_buf_size||(n.gzhead.hcrc&&n.pending>i&&(e.adler=Po(e.adler,n.pending_buf,n.pending-i,i)),Aa(e),i=n.pending,n.pending!==n.pending_buf_size));)za(n,255&n.gzhead.extra[n.gzindex]),n.gzindex++;n.gzhead.hcrc&&n.pending>i&&(e.adler=Po(e.adler,n.pending_buf,n.pending-i,i)),n.gzindex===n.gzhead.extra.length&&(n.gzindex=0,n.status=pa)}else n.status=pa;if(n.status===pa)if(n.gzhead.name){i=n.pending;do{if(n.pending===n.pending_buf_size&&(n.gzhead.hcrc&&n.pending>i&&(e.adler=Po(e.adler,n.pending_buf,n.pending-i,i)),Aa(e),i=n.pending,n.pending===n.pending_buf_size)){o=1;break}o=n.gzindex<n.gzhead.name.length?255&n.gzhead.name.charCodeAt(n.gzindex++):0,za(n,o)}while(0!==o);n.gzhead.hcrc&&n.pending>i&&(e.adler=Po(e.adler,n.pending_buf,n.pending-i,i)),0===o&&(n.gzindex=0,n.status=_a)}else n.status=_a;if(n.status===_a)if(n.gzhead.comment){i=n.pending;do{if(n.pending===n.pending_buf_size&&(n.gzhead.hcrc&&n.pending>i&&(e.adler=Po(e.adler,n.pending_buf,n.pending-i,i)),Aa(e),i=n.pending,n.pending===n.pending_buf_size)){o=1;break}o=n.gzindex<n.gzhead.comment.length?255&n.gzhead.comment.charCodeAt(n.gzindex++):0,za(n,o)}while(0!==o);n.gzhead.hcrc&&n.pending>i&&(e.adler=Po(e.adler,n.pending_buf,n.pending-i,i)),0===o&&(n.status=ga)}else n.status=ga;if(n.status===ga&&(n.gzhead.hcrc?(n.pending+2>n.pending_buf_size&&Aa(e),n.pending+2<=n.pending_buf_size&&(za(n,255&e.adler),za(n,e.adler>>8&255),e.adler=0,n.status=va)):n.status=va),0!==n.pending){if(Aa(e),0===e.avail_out)return n.last_flush=-1,Wo}else if(0===e.avail_in&&xa(t)<=xa(r)&&t!==Zo)return Sa(e,qo);if(n.status===wa&&0!==e.avail_in)return Sa(e,qo);if(0!==e.avail_in||0!==n.lookahead||t!==Uo&&n.status!==wa){var s=n.strategy===$o?function(e,t){for(var r;;){if(0===e.lookahead&&(Ma(e),0===e.lookahead)){if(t===Uo)return ya;break}if(e.match_length=0,r=Co(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++,r&&(Ba(e,!1),0===e.strm.avail_out))return ya}return e.insert=0,t===Zo?(Ba(e,!0),0===e.strm.avail_out?ma:ka):e.last_lit&&(Ba(e,!1),0===e.strm.avail_out)?ya:ba}(n,t):n.strategy===Jo?function(e,t){for(var r,n,i,o,a=e.window;;){if(e.lookahead<=ca){if(Ma(e),e.lookahead<=ca&&t===Uo)return ya;if(0===e.lookahead)break}if(e.match_length=0,e.lookahead>=ha&&e.strstart>0&&(n=a[i=e.strstart-1])===a[++i]&&n===a[++i]&&n===a[++i]){o=e.strstart+ca;do{}while(n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&i<o);e.match_length=ca-(o-i),e.match_length>e.lookahead&&(e.match_length=e.lookahead)}if(e.match_length>=ha?(r=Co(e,1,e.match_length-ha),e.lookahead-=e.match_length,e.strstart+=e.match_length,e.match_length=0):(r=Co(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++),r&&(Ba(e,!1),0===e.strm.avail_out))return ya}return e.insert=0,t===Zo?(Ba(e,!0),0===e.strm.avail_out?ma:ka):e.last_lit&&(Ba(e,!1),0===e.strm.avail_out)?ya:ba}(n,t):No[n.level].func(n,t);if(s!==ma&&s!==ka||(n.status=wa),s===ya||s===ma)return 0===e.avail_out&&(n.last_flush=-1),Wo;if(s===ba&&(t===Fo?Mo(n):t!==jo&&(To(n,0,0,!1),t===Ho&&(Ra(n.head),0===n.lookahead&&(n.strstart=0,n.block_start=0,n.insert=0))),Aa(e),0===e.avail_out))return n.last_flush=-1,Wo}return t!==Zo?Wo:n.wrap<=0?Yo:(2===n.wrap?(za(n,255&e.adler),za(n,e.adler>>8&255),za(n,e.adler>>16&255),za(n,e.adler>>24&255),za(n,255&e.total_in),za(n,e.total_in>>8&255),za(n,e.total_in>>16&255),za(n,e.total_in>>24&255)):(La(n,e.adler>>>16),La(n,65535&e.adler)),Aa(e),n.wrap>0&&(n.wrap=-n.wrap),0!==n.pending?Wo:Yo)}No=[new Oa(0,0,0,0,function(e,t){var r=65535;for(r>e.pending_buf_size-5&&(r=e.pending_buf_size-5);;){if(e.lookahead<=1){if(Ma(e),0===e.lookahead&&t===Uo)return ya;if(0===e.lookahead)break}e.strstart+=e.lookahead,e.lookahead=0;var n=e.block_start+r;if((0===e.strstart||e.strstart>=n)&&(e.lookahead=e.strstart-n,e.strstart=n,Ba(e,!1),0===e.strm.avail_out))return ya;if(e.strstart-e.block_start>=e.w_size-fa&&(Ba(e,!1),0===e.strm.avail_out))return ya}return e.insert=0,t===Zo?(Ba(e,!0),0===e.strm.avail_out?ma:ka):(e.strstart>e.block_start&&(Ba(e,!1),e.strm.avail_out),ya)}),new Oa(4,4,8,4,Ia),new Oa(4,5,16,8,Ia),new Oa(4,6,32,32,Ia),new Oa(4,4,16,16,Ca),new Oa(8,16,32,32,Ca),new Oa(8,16,128,128,Ca),new Oa(8,32,128,256,Ca),new Oa(32,128,258,1024,Ca),new Oa(32,258,258,4096,Ca)];var Ua=30,Fa=12;function Ha(e,t){var r,n,i,o,a,s,h,c,f,u,l,d,p,_,g,v,w,y,b,m,k,E,S,x,R;r=e.state,n=e.next_in,x=e.input,i=n+(e.avail_in-5),o=e.next_out,R=e.output,a=o-(t-e.avail_out),s=o+(e.avail_out-257),h=r.dmax,c=r.wsize,f=r.whave,u=r.wnext,l=r.window,d=r.hold,p=r.bits,_=r.lencode,g=r.distcode,v=(1<<r.lenbits)-1,w=(1<<r.distbits)-1;e:do{p<15&&(d+=x[n++]<<p,p+=8,d+=x[n++]<<p,p+=8),y=_[d&v];t:for(;;){if(d>>>=b=y>>>24,p-=b,0===(b=y>>>16&255))R[o++]=65535&y;else{if(!(16&b)){if(0==(64&b)){y=_[(65535&y)+(d&(1<<b)-1)];continue t}if(32&b){r.mode=Fa;break e}e.msg="invalid literal/length code",r.mode=Ua;break e}m=65535&y,(b&=15)&&(p<b&&(d+=x[n++]<<p,p+=8),m+=d&(1<<b)-1,d>>>=b,p-=b),p<15&&(d+=x[n++]<<p,p+=8,d+=x[n++]<<p,p+=8),y=g[d&w];r:for(;;){if(d>>>=b=y>>>24,p-=b,!(16&(b=y>>>16&255))){if(0==(64&b)){y=g[(65535&y)+(d&(1<<b)-1)];continue r}e.msg="invalid distance code",r.mode=Ua;break e}if(k=65535&y,p<(b&=15)&&(d+=x[n++]<<p,(p+=8)<b&&(d+=x[n++]<<p,p+=8)),(k+=d&(1<<b)-1)>h){e.msg="invalid distance too far back",r.mode=Ua;break e}if(d>>>=b,p-=b,k>(b=o-a)){if((b=k-b)>f&&r.sane){e.msg="invalid distance too far back",r.mode=Ua;break e}if(E=0,S=l,0===u){if(E+=c-b,b<m){m-=b;do{R[o++]=l[E++]}while(--b);E=o-k,S=R}}else if(u<b){if(E+=c+u-b,(b-=u)<m){m-=b;do{R[o++]=l[E++]}while(--b);if(E=0,u<m){m-=b=u;do{R[o++]=l[E++]}while(--b);E=o-k,S=R}}}else if(E+=u-b,b<m){m-=b;do{R[o++]=l[E++]}while(--b);E=o-k,S=R}for(;m>2;)R[o++]=S[E++],R[o++]=S[E++],R[o++]=S[E++],m-=3;m&&(R[o++]=S[E++],m>1&&(R[o++]=S[E++]))}else{E=o-k;do{R[o++]=R[E++],R[o++]=R[E++],R[o++]=R[E++],m-=3}while(m>2);m&&(R[o++]=R[E++],m>1&&(R[o++]=R[E++]))}break}}break}}while(n<i&&o<s);n-=m=p>>3,d&=(1<<(p-=m<<3))-1,e.next_in=n,e.next_out=o,e.avail_in=n<i?i-n+5:5-(n-i),e.avail_out=o<s?s-o+257:257-(o-s),r.hold=d,r.bits=p}var Za=15,ja=852,Wa=592,Ya=0,Ka=1,Xa=2,qa=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],Va=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],Ga=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],$a=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];function Ja(e,t,r,n,i,o,a,s){var h,c,f,u,l,d,p,_,g,v=s.bits,w=0,y=0,b=0,m=0,k=0,E=0,S=0,x=0,R=0,A=0,B=null,z=0,L=new Li(Za+1),T=new Li(Za+1),M=null,I=0;for(w=0;w<=Za;w++)L[w]=0;for(y=0;y<n;y++)L[t[r+y]]++;for(k=v,m=Za;m>=1&&0===L[m];m--);if(k>m&&(k=m),0===m)return i[o++]=20971520,i[o++]=20971520,s.bits=1,0;for(b=1;b<m&&0===L[b];b++);for(k<b&&(k=b),x=1,w=1;w<=Za;w++)if(x<<=1,(x-=L[w])<0)return-1;if(x>0&&(e===Ya||1!==m))return-1;for(T[1]=0,w=1;w<Za;w++)T[w+1]=T[w]+L[w];for(y=0;y<n;y++)0!==t[r+y]&&(a[T[t[r+y]]++]=y);if(e===Ya?(B=M=a,d=19):e===Ka?(B=qa,z-=257,M=Va,I-=257,d=256):(B=Ga,M=$a,d=-1),A=0,y=0,w=b,l=o,E=k,S=0,f=-1,u=(R=1<<k)-1,e===Ka&&R>ja||e===Xa&&R>Wa)return 1;for(;;){p=w-S,a[y]<d?(_=0,g=a[y]):a[y]>d?(_=M[I+a[y]],g=B[z+a[y]]):(_=96,g=0),h=1<<w-S,b=c=1<<E;do{i[l+(A>>S)+(c-=h)]=p<<24|_<<16|g|0}while(0!==c);for(h=1<<w-1;A&h;)h>>=1;if(0!==h?(A&=h-1,A+=h):A=0,y++,0==--L[w]){if(w===m)break;w=t[r+a[y]]}if(w>k&&(A&u)!==f){for(0===S&&(S=k),l+=b,x=1<<(E=w-S);E+S<m&&!((x-=L[E+S])<=0);)E++,x<<=1;if(R+=1<<E,e===Ka&&R>ja||e===Xa&&R>Wa)return 1;i[f=A&u]=k<<24|E<<16|l-o|0}}return 0!==A&&(i[l+A]=w-S<<24|64<<16|0),s.bits=k,0}var Qa=0,es=1,ts=2,rs=4,ns=5,is=6,os=0,as=1,ss=2,hs=-2,cs=-3,fs=-4,us=-5,ls=8,ds=1,ps=2,_s=3,gs=4,vs=5,ws=6,ys=7,bs=8,ms=9,ks=10,Es=11,Ss=12,xs=13,Rs=14,As=15,Bs=16,zs=17,Ls=18,Ts=19,Ms=20,Is=21,Cs=22,Os=23,Ds=24,Ps=25,Ns=26,Us=27,Fs=28,Hs=29,Zs=30,js=31,Ws=32,Ys=852,Ks=592;function Xs(e){return(e>>>24&255)+(e>>>8&65280)+((65280&e)<<8)+((255&e)<<24)}function qs(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Li(320),this.work=new Li(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function Vs(e){var t;return e&&e.state?((t=e.state).wsize=0,t.whave=0,t.wnext=0,function(e){var t;return e&&e.state?(t=e.state,e.total_in=e.total_out=t.total=0,e.msg="",t.wrap&&(e.adler=1&t.wrap),t.mode=ds,t.last=0,t.havedict=0,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new Ti(Ys),t.distcode=t.distdyn=new Ti(Ks),t.sane=1,t.back=-1,os):hs}(e)):hs}function Gs(e,t){var r,n;return e?(n=new qs,e.state=n,n.window=null,(r=function(e,t){var r,n;return e&&e.state?(n=e.state,t<0?(r=0,t=-t):(r=1+(t>>4),t<48&&(t&=15)),t&&(t<8||t>15)?hs:(null!==n.window&&n.wbits!==t&&(n.window=null),n.wrap=r,n.wbits=t,Vs(e))):hs}(e,t))!==os&&(e.state=null),r):hs}var $s,Js,Qs=!0;function eh(e){if(Qs){var t;for($s=new Ti(512),Js=new Ti(32),t=0;t<144;)e.lens[t++]=8;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8;for(Ja(es,e.lens,0,288,$s,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5;Ja(ts,e.lens,0,32,Js,0,e.work,{bits:5}),Qs=!1}e.lencode=$s,e.lenbits=9,e.distcode=Js,e.distbits=5}function th(e,t){var r,n,i,o,a,s,h,c,f,u,l,d,p,_,g,v,w,y,b,m,k,E,S,x,R=0,A=new zi(4),B=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!e||!e.state||!e.output||!e.input&&0!==e.avail_in)return hs;(r=e.state).mode===Ss&&(r.mode=xs),a=e.next_out,i=e.output,h=e.avail_out,o=e.next_in,n=e.input,s=e.avail_in,c=r.hold,f=r.bits,u=s,l=h,E=os;e:for(;;)switch(r.mode){case ds:if(0===r.wrap){r.mode=xs;break}for(;f<16;){if(0===s)break e;s--,c+=n[o++]<<f,f+=8}if(2&r.wrap&&35615===c){r.check=0,A[0]=255&c,A[1]=c>>>8&255,r.check=Po(r.check,A,2,0),c=0,f=0,r.mode=ps;break}if(r.flags=0,r.head&&(r.head.done=!1),!(1&r.wrap)||(((255&c)<<8)+(c>>8))%31){e.msg="incorrect header check",r.mode=Zs;break}if((15&c)!==ls){e.msg="unknown compression method",r.mode=Zs;break}if(f-=4,k=8+(15&(c>>>=4)),0===r.wbits)r.wbits=k;else if(k>r.wbits){e.msg="invalid window size",r.mode=Zs;break}r.dmax=1<<k,e.adler=r.check=1,r.mode=512&c?ks:Ss,c=0,f=0;break;case ps:for(;f<16;){if(0===s)break e;s--,c+=n[o++]<<f,f+=8}if(r.flags=c,(255&r.flags)!==ls){e.msg="unknown compression method",r.mode=Zs;break}if(57344&r.flags){e.msg="unknown header flags set",r.mode=Zs;break}r.head&&(r.head.text=c>>8&1),512&r.flags&&(A[0]=255&c,A[1]=c>>>8&255,r.check=Po(r.check,A,2,0)),c=0,f=0,r.mode=_s;case _s:for(;f<32;){if(0===s)break e;s--,c+=n[o++]<<f,f+=8}r.head&&(r.head.time=c),512&r.flags&&(A[0]=255&c,A[1]=c>>>8&255,A[2]=c>>>16&255,A[3]=c>>>24&255,r.check=Po(r.check,A,4,0)),c=0,f=0,r.mode=gs;case gs:for(;f<16;){if(0===s)break e;s--,c+=n[o++]<<f,f+=8}r.head&&(r.head.xflags=255&c,r.head.os=c>>8),512&r.flags&&(A[0]=255&c,A[1]=c>>>8&255,r.check=Po(r.check,A,2,0)),c=0,f=0,r.mode=vs;case vs:if(1024&r.flags){for(;f<16;){if(0===s)break e;s--,c+=n[o++]<<f,f+=8}r.length=c,r.head&&(r.head.extra_len=c),512&r.flags&&(A[0]=255&c,A[1]=c>>>8&255,r.check=Po(r.check,A,2,0)),c=0,f=0}else r.head&&(r.head.extra=null);r.mode=ws;case ws:if(1024&r.flags&&((d=r.length)>s&&(d=s),d&&(r.head&&(k=r.head.extra_len-r.length,r.head.extra||(r.head.extra=new Array(r.head.extra_len)),Bi(r.head.extra,n,o,d,k)),512&r.flags&&(r.check=Po(r.check,n,d,o)),s-=d,o+=d,r.length-=d),r.length))break e;r.length=0,r.mode=ys;case ys:if(2048&r.flags){if(0===s)break e;d=0;do{k=n[o+d++],r.head&&k&&r.length<65536&&(r.head.name+=String.fromCharCode(k))}while(k&&d<s);if(512&r.flags&&(r.check=Po(r.check,n,d,o)),s-=d,o+=d,k)break e}else r.head&&(r.head.name=null);r.length=0,r.mode=bs;case bs:if(4096&r.flags){if(0===s)break e;d=0;do{k=n[o+d++],r.head&&k&&r.length<65536&&(r.head.comment+=String.fromCharCode(k))}while(k&&d<s);if(512&r.flags&&(r.check=Po(r.check,n,d,o)),s-=d,o+=d,k)break e}else r.head&&(r.head.comment=null);r.mode=ms;case ms:if(512&r.flags){for(;f<16;){if(0===s)break e;s--,c+=n[o++]<<f,f+=8}if(c!==(65535&r.check)){e.msg="header crc mismatch",r.mode=Zs;break}c=0,f=0}r.head&&(r.head.hcrc=r.flags>>9&1,r.head.done=!0),e.adler=r.check=0,r.mode=Ss;break;case ks:for(;f<32;){if(0===s)break e;s--,c+=n[o++]<<f,f+=8}e.adler=r.check=Xs(c),c=0,f=0,r.mode=Es;case Es:if(0===r.havedict)return e.next_out=a,e.avail_out=h,e.next_in=o,e.avail_in=s,r.hold=c,r.bits=f,ss;e.adler=r.check=1,r.mode=Ss;case Ss:if(t===ns||t===is)break e;case xs:if(r.last){c>>>=7&f,f-=7&f,r.mode=Us;break}for(;f<3;){if(0===s)break e;s--,c+=n[o++]<<f,f+=8}switch(r.last=1&c,f-=1,3&(c>>>=1)){case 0:r.mode=Rs;break;case 1:if(eh(r),r.mode=Ms,t===is){c>>>=2,f-=2;break e}break;case 2:r.mode=zs;break;case 3:e.msg="invalid block type",r.mode=Zs}c>>>=2,f-=2;break;case Rs:for(c>>>=7&f,f-=7&f;f<32;){if(0===s)break e;s--,c+=n[o++]<<f,f+=8}if((65535&c)!=(c>>>16^65535)){e.msg="invalid stored block lengths",r.mode=Zs;break}if(r.length=65535&c,c=0,f=0,r.mode=As,t===is)break e;case As:r.mode=Bs;case Bs:if(d=r.length){if(d>s&&(d=s),d>h&&(d=h),0===d)break e;Bi(i,n,o,d,a),s-=d,o+=d,h-=d,a+=d,r.length-=d;break}r.mode=Ss;break;case zs:for(;f<14;){if(0===s)break e;s--,c+=n[o++]<<f,f+=8}if(r.nlen=257+(31&c),c>>>=5,f-=5,r.ndist=1+(31&c),c>>>=5,f-=5,r.ncode=4+(15&c),c>>>=4,f-=4,r.nlen>286||r.ndist>30){e.msg="too many length or distance symbols",r.mode=Zs;break}r.have=0,r.mode=Ls;case Ls:for(;r.have<r.ncode;){for(;f<3;){if(0===s)break e;s--,c+=n[o++]<<f,f+=8}r.lens[B[r.have++]]=7&c,c>>>=3,f-=3}for(;r.have<19;)r.lens[B[r.have++]]=0;if(r.lencode=r.lendyn,r.lenbits=7,S={bits:r.lenbits},E=Ja(Qa,r.lens,0,19,r.lencode,0,r.work,S),r.lenbits=S.bits,E){e.msg="invalid code lengths set",r.mode=Zs;break}r.have=0,r.mode=Ts;case Ts:for(;r.have<r.nlen+r.ndist;){for(;v=(R=r.lencode[c&(1<<r.lenbits)-1])>>>16&255,w=65535&R,!((g=R>>>24)<=f);){if(0===s)break e;s--,c+=n[o++]<<f,f+=8}if(w<16)c>>>=g,f-=g,r.lens[r.have++]=w;else{if(16===w){for(x=g+2;f<x;){if(0===s)break e;s--,c+=n[o++]<<f,f+=8}if(c>>>=g,f-=g,0===r.have){e.msg="invalid bit length repeat",r.mode=Zs;break}k=r.lens[r.have-1],d=3+(3&c),c>>>=2,f-=2}else if(17===w){for(x=g+3;f<x;){if(0===s)break e;s--,c+=n[o++]<<f,f+=8}f-=g,k=0,d=3+(7&(c>>>=g)),c>>>=3,f-=3}else{for(x=g+7;f<x;){if(0===s)break e;s--,c+=n[o++]<<f,f+=8}f-=g,k=0,d=11+(127&(c>>>=g)),c>>>=7,f-=7}if(r.have+d>r.nlen+r.ndist){e.msg="invalid bit length repeat",r.mode=Zs;break}for(;d--;)r.lens[r.have++]=k}}if(r.mode===Zs)break;if(0===r.lens[256]){e.msg="invalid code -- missing end-of-block",r.mode=Zs;break}if(r.lenbits=9,S={bits:r.lenbits},E=Ja(es,r.lens,0,r.nlen,r.lencode,0,r.work,S),r.lenbits=S.bits,E){e.msg="invalid literal/lengths set",r.mode=Zs;break}if(r.distbits=6,r.distcode=r.distdyn,S={bits:r.distbits},E=Ja(ts,r.lens,r.nlen,r.ndist,r.distcode,0,r.work,S),r.distbits=S.bits,E){e.msg="invalid distances set",r.mode=Zs;break}if(r.mode=Ms,t===is)break e;case Ms:r.mode=Is;case Is:if(s>=6&&h>=258){e.next_out=a,e.avail_out=h,e.next_in=o,e.avail_in=s,r.hold=c,r.bits=f,Ha(e,l),a=e.next_out,i=e.output,h=e.avail_out,o=e.next_in,n=e.input,s=e.avail_in,c=r.hold,f=r.bits,r.mode===Ss&&(r.back=-1);break}for(r.back=0;v=(R=r.lencode[c&(1<<r.lenbits)-1])>>>16&255,w=65535&R,!((g=R>>>24)<=f);){if(0===s)break e;s--,c+=n[o++]<<f,f+=8}if(v&&0==(240&v)){for(y=g,b=v,m=w;v=(R=r.lencode[m+((c&(1<<y+b)-1)>>y)])>>>16&255,w=65535&R,!(y+(g=R>>>24)<=f);){if(0===s)break e;s--,c+=n[o++]<<f,f+=8}c>>>=y,f-=y,r.back+=y}if(c>>>=g,f-=g,r.back+=g,r.length=w,0===v){r.mode=Ns;break}if(32&v){r.back=-1,r.mode=Ss;break}if(64&v){e.msg="invalid literal/length code",r.mode=Zs;break}r.extra=15&v,r.mode=Cs;case Cs:if(r.extra){for(x=r.extra;f<x;){if(0===s)break e;s--,c+=n[o++]<<f,f+=8}r.length+=c&(1<<r.extra)-1,c>>>=r.extra,f-=r.extra,r.back+=r.extra}r.was=r.length,r.mode=Os;case Os:for(;v=(R=r.distcode[c&(1<<r.distbits)-1])>>>16&255,w=65535&R,!((g=R>>>24)<=f);){if(0===s)break e;s--,c+=n[o++]<<f,f+=8}if(0==(240&v)){for(y=g,b=v,m=w;v=(R=r.distcode[m+((c&(1<<y+b)-1)>>y)])>>>16&255,w=65535&R,!(y+(g=R>>>24)<=f);){if(0===s)break e;s--,c+=n[o++]<<f,f+=8}c>>>=y,f-=y,r.back+=y}if(c>>>=g,f-=g,r.back+=g,64&v){e.msg="invalid distance code",r.mode=Zs;break}r.offset=w,r.extra=15&v,r.mode=Ds;case Ds:if(r.extra){for(x=r.extra;f<x;){if(0===s)break e;s--,c+=n[o++]<<f,f+=8}r.offset+=c&(1<<r.extra)-1,c>>>=r.extra,f-=r.extra,r.back+=r.extra}if(r.offset>r.dmax){e.msg="invalid distance too far back",r.mode=Zs;break}r.mode=Ps;case Ps:if(0===h)break e;if(d=l-h,r.offset>d){if((d=r.offset-d)>r.whave&&r.sane){e.msg="invalid distance too far back",r.mode=Zs;break}d>r.wnext?(d-=r.wnext,p=r.wsize-d):p=r.wnext-d,d>r.length&&(d=r.length),_=r.window}else _=i,p=a-r.offset,d=r.length;d>h&&(d=h),h-=d,r.length-=d;do{i[a++]=_[p++]}while(--d);0===r.length&&(r.mode=Is);break;case Ns:if(0===h)break e;i[a++]=r.length,h--,r.mode=Is;break;case Us:if(r.wrap){for(;f<32;){if(0===s)break e;s--,c|=n[o++]<<f,f+=8}if(l-=h,e.total_out+=l,r.total+=l,l&&(e.adler=r.check=r.flags?Po(r.check,i,l,a-l):Oo(r.check,i,l,a-l)),l=h,(r.flags?c:Xs(c))!==r.check){e.msg="incorrect data check",r.mode=Zs;break}c=0,f=0}r.mode=Fs;case Fs:if(r.wrap&&r.flags){for(;f<32;){if(0===s)break e;s--,c+=n[o++]<<f,f+=8}if(c!==(4294967295&r.total)){e.msg="incorrect length check",r.mode=Zs;break}c=0,f=0}r.mode=Hs;case Hs:E=as;break e;case Zs:E=cs;break e;case js:return fs;case Ws:default:return hs}return e.next_out=a,e.avail_out=h,e.next_in=o,e.avail_in=s,r.hold=c,r.bits=f,(r.wsize||l!==e.avail_out&&r.mode<Zs&&(r.mode<Us||t!==rs))&&function(e,t,r,n){var i,o=e.state;null===o.window&&(o.wsize=1<<o.wbits,o.wnext=0,o.whave=0,o.window=new zi(o.wsize)),n>=o.wsize?(Bi(o.window,t,r-o.wsize,o.wsize,0),o.wnext=0,o.whave=o.wsize):((i=o.wsize-o.wnext)>n&&(i=n),Bi(o.window,t,r-n,i,o.wnext),(n-=i)?(Bi(o.window,t,r-n,n,0),o.wnext=n,o.whave=o.wsize):(o.wnext+=i,o.wnext===o.wsize&&(o.wnext=0),o.whave<o.wsize&&(o.whave+=i)))}(e,e.output,e.next_out,l-e.avail_out),u-=e.avail_in,l-=e.avail_out,e.total_in+=u,e.total_out+=l,r.total+=l,r.wrap&&l&&(e.adler=r.check=r.flags?Po(r.check,i,l,e.next_out-l):Oo(r.check,i,l,e.next_out-l)),e.data_type=r.bits+(r.last?64:0)+(r.mode===Ss?128:0)+(r.mode===Ms||r.mode===As?256:0),(0===u&&0===l||t===rs)&&E===os&&(E=us),E}var rh,nh=1,ih=7;function oh(e){if(e<nh||e>ih)throw new TypeError("Bad argument");this.mode=e,this.init_done=!1,this.write_in_progress=!1,this.pending_close=!1,this.windowBits=0,this.level=0,this.memLevel=0,this.strategy=0,this.dictionary=null}function ah(e,t){for(var r=0;r<e.length;r++)this[t+r]=e[r]}oh.prototype.init=function(e,t,r,n,i){var o;switch(this.windowBits=e,this.level=t,this.memLevel=r,this.strategy=n,3!==this.mode&&4!==this.mode||(this.windowBits+=16),this.mode===ih&&(this.windowBits+=32),5!==this.mode&&6!==this.mode||(this.windowBits=-this.windowBits),this.strm=new Ai,this.mode){case nh:case 3:case 5:o=function(e,t,r,n,i,o){if(!e)return Ko;var a=1;if(t===Vo&&(t=6),n<0?(a=0,n=-n):n>15&&(a=2,n-=16),i<1||i>ra||r!==ta||n<8||n>15||t<0||t>9||o<0||o>Qo)return Sa(e,Ko);8===n&&(n=9);var s=new Da;return e.state=s,s.strm=e,s.wrap=a,s.gzhead=null,s.w_bits=n,s.w_size=1<<s.w_bits,s.w_mask=s.w_size-1,s.hash_bits=i+7,s.hash_size=1<<s.hash_bits,s.hash_mask=s.hash_size-1,s.hash_shift=~~((s.hash_bits+ha-1)/ha),s.window=new zi(2*s.w_size),s.head=new Li(s.hash_size),s.prev=new Li(s.w_size),s.lit_bufsize=1<<i+6,s.pending_buf_size=4*s.lit_bufsize,s.pending_buf=new zi(s.pending_buf_size),s.d_buf=1*s.lit_bufsize,s.l_buf=3*s.lit_bufsize,s.level=t,s.strategy=o,s.method=r,Pa(e)}(this.strm,this.level,8,this.windowBits,this.memLevel,this.strategy);break;case 2:case 4:case 6:case ih:o=Gs(this.strm,this.windowBits);break;default:throw new Error("Unknown mode "+this.mode)}0===o?(this.write_in_progress=!1,this.init_done=!0):this._error(o)},oh.prototype.params=function(){throw new Error("deflateParams Not supported")},oh.prototype._writeCheck=function(){if(!this.init_done)throw new Error("write before init");if(0===this.mode)throw new Error("already finalized");if(this.write_in_progress)throw new Error("write already in progress");if(this.pending_close)throw new Error("close is pending")},oh.prototype.write=function(e,t,r,n,i,o,a){this._writeCheck(),this.write_in_progress=!0;var s=this;return $r(function(){s.write_in_progress=!1;var h=s._write(e,t,r,n,i,o,a);s.callback(h[0],h[1]),s.pending_close&&s.close()}),this},oh.prototype.writeSync=function(e,t,r,n,i,o,a){return this._writeCheck(),this._write(e,t,r,n,i,o,a)},oh.prototype._write=function(e,t,r,n,i,o,a){if(this.write_in_progress=!0,0!==e&&1!==e&&2!==e&&3!==e&&4!==e&&5!==e)throw new Error("Invalid flush value");null==t&&(t=new p(0),n=0,r=0),i._set?i.set=i._set:i.set=ah;var s,h=this.strm;switch(h.avail_in=n,h.input=t,h.next_in=r,h.avail_out=a,h.output=i,h.next_out=o,this.mode){case nh:case 3:case 5:s=Na(h,e);break;case ih:case 2:case 4:case 6:s=th(h,e);break;default:throw new Error("Unknown mode "+this.mode)}return 1!==s&&0!==s&&this._error(s),this.write_in_progress=!1,[h.avail_in,h.avail_out]},oh.prototype.close=function(){this.write_in_progress?this.pending_close=!0:(this.pending_close=!1,this.mode===nh||3===this.mode||5===this.mode?function(e){var t;e&&e.state&&((t=e.state.status)!==la&&t!==da&&t!==pa&&t!==_a&&t!==ga&&t!==va&&t!==wa?Sa(e,Ko):(e.state=null,t===va&&Sa(e,Xo)))}(this.strm):function(e){if(!e||!e.state)return hs;var t=e.state;t.window&&(t.window=null),e.state=null}(this.strm),this.mode=0)},oh.prototype.reset=function(){switch(this.mode){case nh:case 5:rh=Pa(this.strm);break;case 2:case 6:rh=Vs(this.strm)}0!==rh&&this._error(rh)},oh.prototype._error=function(e){this.onerror(Ri[e]+": "+this.strm.msg,e),this.write_in_progress=!1,this.pending_close&&this.close()};var sh=Object.freeze({NONE:0,DEFLATE:nh,INFLATE:2,GZIP:3,GUNZIP:4,DEFLATERAW:5,INFLATERAW:6,UNZIP:ih,Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8,Zlib:oh});var hh={};Object.keys(sh).forEach(function(e){hh[e]=sh[e]}),hh.Z_MIN_WINDOWBITS=8,hh.Z_MAX_WINDOWBITS=15,hh.Z_DEFAULT_WINDOWBITS=15,hh.Z_MIN_CHUNK=64,hh.Z_MAX_CHUNK=1/0,hh.Z_DEFAULT_CHUNK=16384,hh.Z_MIN_MEMLEVEL=1,hh.Z_MAX_MEMLEVEL=9,hh.Z_DEFAULT_MEMLEVEL=8,hh.Z_MIN_LEVEL=-1,hh.Z_MAX_LEVEL=9,hh.Z_DEFAULT_LEVEL=hh.Z_DEFAULT_COMPRESSION;var ch={Z_OK:hh.Z_OK,Z_STREAM_END:hh.Z_STREAM_END,Z_NEED_DICT:hh.Z_NEED_DICT,Z_ERRNO:hh.Z_ERRNO,Z_STREAM_ERROR:hh.Z_STREAM_ERROR,Z_DATA_ERROR:hh.Z_DATA_ERROR,Z_MEM_ERROR:hh.Z_MEM_ERROR,Z_BUF_ERROR:hh.Z_BUF_ERROR,Z_VERSION_ERROR:hh.Z_VERSION_ERROR};function fh(e,t,r){var n=[],i=0;function o(){for(var t;null!==(t=e.read());)n.push(t),i+=t.length;e.once("readable",o)}function a(){var t=p.concat(n,i);n=[],r(null,t),e.close()}e.on("error",function(t){e.removeListener("end",a),e.removeListener("readable",o),r(t)}),e.on("end",a),e.end(t),o()}function uh(e,t){if("string"==typeof t&&(t=new p(t)),!$(t))throw new TypeError("Not a string or buffer");var r=hh.Z_FINISH;return e._processChunk(t,r)}function lh(e){if(!(this instanceof lh))return new lh(e);yh.call(this,e,hh.DEFLATE)}function dh(e){if(!(this instanceof dh))return new dh(e);yh.call(this,e,hh.INFLATE)}function ph(e){if(!(this instanceof ph))return new ph(e);yh.call(this,e,hh.GZIP)}function _h(e){if(!(this instanceof _h))return new _h(e);yh.call(this,e,hh.GUNZIP)}function gh(e){if(!(this instanceof gh))return new gh(e);yh.call(this,e,hh.DEFLATERAW)}function vh(e){if(!(this instanceof vh))return new vh(e);yh.call(this,e,hh.INFLATERAW)}function wh(e){if(!(this instanceof wh))return new wh(e);yh.call(this,e,hh.UNZIP)}function yh(e,t){if(this._opts=e=e||{},this._chunkSize=e.chunkSize||hh.Z_DEFAULT_CHUNK,ki.call(this,e),e.flush&&e.flush!==hh.Z_NO_FLUSH&&e.flush!==hh.Z_PARTIAL_FLUSH&&e.flush!==hh.Z_SYNC_FLUSH&&e.flush!==hh.Z_FULL_FLUSH&&e.flush!==hh.Z_FINISH&&e.flush!==hh.Z_BLOCK)throw new Error("Invalid flush flag: "+e.flush);if(this._flushFlag=e.flush||hh.Z_NO_FLUSH,e.chunkSize&&(e.chunkSize<hh.Z_MIN_CHUNK||e.chunkSize>hh.Z_MAX_CHUNK))throw new Error("Invalid chunk size: "+e.chunkSize);if(e.windowBits&&(e.windowBits<hh.Z_MIN_WINDOWBITS||e.windowBits>hh.Z_MAX_WINDOWBITS))throw new Error("Invalid windowBits: "+e.windowBits);if(e.level&&(e.level<hh.Z_MIN_LEVEL||e.level>hh.Z_MAX_LEVEL))throw new Error("Invalid compression level: "+e.level);if(e.memLevel&&(e.memLevel<hh.Z_MIN_MEMLEVEL||e.memLevel>hh.Z_MAX_MEMLEVEL))throw new Error("Invalid memLevel: "+e.memLevel);if(e.strategy&&e.strategy!=hh.Z_FILTERED&&e.strategy!=hh.Z_HUFFMAN_ONLY&&e.strategy!=hh.Z_RLE&&e.strategy!=hh.Z_FIXED&&e.strategy!=hh.Z_DEFAULT_STRATEGY)throw new Error("Invalid strategy: "+e.strategy);if(e.dictionary&&!$(e.dictionary))throw new Error("Invalid dictionary: it should be a Buffer instance");this._binding=new hh.Zlib(t);var r=this;this._hadError=!1,this._binding.onerror=function(e,t){r._binding=null,r._hadError=!0;var n=new Error(e);n.errno=t,n.code=hh.codes[t],r.emit("error",n)};var n=hh.Z_DEFAULT_COMPRESSION;"number"==typeof e.level&&(n=e.level);var i=hh.Z_DEFAULT_STRATEGY;"number"==typeof e.strategy&&(i=e.strategy),this._binding.init(e.windowBits||hh.Z_DEFAULT_WINDOWBITS,n,e.memLevel||hh.Z_DEFAULT_MEMLEVEL,i,e.dictionary),this._buffer=new p(this._chunkSize),this._offset=0,this._closed=!1,this._level=n,this._strategy=i,this.once("end",this.close)}Object.keys(ch).forEach(function(e){ch[ch[e]]=e}),dn(yh,ki),yh.prototype.params=function(e,t,r){if(e<hh.Z_MIN_LEVEL||e>hh.Z_MAX_LEVEL)throw new RangeError("Invalid compression level: "+e);if(t!=hh.Z_FILTERED&&t!=hh.Z_HUFFMAN_ONLY&&t!=hh.Z_RLE&&t!=hh.Z_FIXED&&t!=hh.Z_DEFAULT_STRATEGY)throw new TypeError("Invalid strategy: "+t);if(this._level!==e||this._strategy!==t){var n=this;this.flush(hh.Z_SYNC_FLUSH,function(){n._binding.params(e,t),n._hadError||(n._level=e,n._strategy=t,r&&r())})}else $r(r)},yh.prototype.reset=function(){return this._binding.reset()},yh.prototype._flush=function(e){this._transform(new p(0),"",e)},yh.prototype.flush=function(e,t){var r=this._writableState;if(("function"==typeof e||void 0===e&&!t)&&(t=e,e=hh.Z_FULL_FLUSH),r.ended)t&&$r(t);else if(r.ending)t&&this.once("end",t);else if(r.needDrain){var n=this;this.once("drain",function(){n.flush(t)})}else this._flushFlag=e,this.write(new p(0),"",t)},yh.prototype.close=function(e){if(e&&$r(e),!this._closed){this._closed=!0,this._binding.close();var t=this;$r(function(){t.emit("close")})}},yh.prototype._transform=function(e,t,r){var n,i=this._writableState,o=(i.ending||i.ended)&&(!e||i.length===e.length);if(null===!e&&!$(e))return r(new Error("invalid input"));o?n=hh.Z_FINISH:(n=this._flushFlag,e.length>=i.length&&(this._flushFlag=this._opts.flush||hh.Z_NO_FLUSH)),this._processChunk(e,n,r)},yh.prototype._processChunk=function(e,t,r){var n=e&&e.length,i=this._chunkSize-this._offset,o=0,a=this,s="function"==typeof r;if(!s){var h,c=[],f=0;this.on("error",function(e){h=e});do{var u=this._binding.writeSync(t,e,o,n,this._buffer,this._offset,i)}while(!this._hadError&&_(u[0],u[1]));if(this._hadError)throw h;var l=p.concat(c,f);return this.close(),l}var d=this._binding.write(t,e,o,n,this._buffer,this._offset,i);function _(h,u){if(!a._hadError){var l=i-u;if(function(e,t){if(!e)throw new Error(t)}(l>=0,"have should not go down"),l>0){var d=a._buffer.slice(a._offset,a._offset+l);a._offset+=l,s?a.push(d):(c.push(d),f+=d.length)}if((0===u||a._offset>=a._chunkSize)&&(i=a._chunkSize,a._offset=0,a._buffer=new p(a._chunkSize)),0===u){if(o+=n-h,n=h,!s)return!0;var g=a._binding.write(t,e,o,n,a._buffer,a._offset,a._chunkSize);return g.callback=_,void(g.buffer=e)}if(!s)return!1;r()}}d.buffer=e,d.callback=_},dn(lh,yh),dn(dh,yh),dn(ph,yh),dn(_h,yh),dn(gh,yh),dn(vh,yh),dn(wh,yh);var bh={codes:ch,createDeflate:function(e){return new lh(e)},createInflate:function(e){return new dh(e)},createDeflateRaw:function(e){return new gh(e)},createInflateRaw:function(e){return new vh(e)},createGzip:function(e){return new ph(e)},createGunzip:function(e){return new _h(e)},createUnzip:function(e){return new wh(e)},deflate:function(e,t,r){return"function"==typeof t&&(r=t,t={}),fh(new lh(t),e,r)},deflateSync:function(e,t){return uh(new lh(t),e)},gzip:function(e,t,r){return"function"==typeof t&&(r=t,t={}),fh(new ph(t),e,r)},gzipSync:function(e,t){return uh(new ph(t),e)},deflateRaw:function(e,t,r){return"function"==typeof t&&(r=t,t={}),fh(new gh(t),e,r)},deflateRawSync:function(e,t){return uh(new gh(t),e)},unzip:function(e,t,r){return"function"==typeof t&&(r=t,t={}),fh(new wh(t),e,r)},unzipSync:function(e,t){return uh(new wh(t),e)},inflate:function(e,t,r){return"function"==typeof t&&(r=t,t={}),fh(new dh(t),e,r)},inflateSync:function(e,t){return uh(new dh(t),e)},gunzip:function(e,t,r){return"function"==typeof t&&(r=t,t={}),fh(new _h(t),e,r)},gunzipSync:function(e,t){return uh(new _h(t),e)},inflateRaw:function(e,t,r){return"function"==typeof t&&(r=t,t={}),fh(new vh(t),e,r)},inflateRawSync:function(e,t){return uh(new vh(t),e)},Deflate:lh,Inflate:dh,Gzip:ph,Gunzip:_h,DeflateRaw:gh,InflateRaw:vh,Unzip:wh,Zlib:yh};return function(){function e(t,r,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.SDKAPPID=t,this.EXPIRETIME=n,this.PRIVATEKEY=r}var t,r,n;return t=e,(r=[{key:"genTestUserSig",value:function(e){return this._isNumber(this.SDKAPPID)?this._isString(this.PRIVATEKEY)?this._isString(e)?this._isNumber(this.EXPIRETIME)?(console.log("sdkAppID="+this.SDKAPPID+" key="+this.PRIVATEKEY+" userID="+e+" expire="+this.EXPIRETIME),this.genSigWithUserbuf(e,this.EXPIRETIME,null)):(console.error("expireTime must be a number"),""):(console.error("userID must be a string"),""):(console.error("privateKey must be a string"),""):(console.error("sdkAppID must be a number"),"")}},{key:"newBuffer",value:function(e,t){return p.from?p.from(e,t):new p(e,t)}},{key:"unescape",value:function(e){return e.replace(/_/g,"=").replace(/\-/g,"/").replace(/\*/g,"+")}},{key:"escape",value:function(e){return e.replace(/\+/g,"*").replace(/\//g,"-").replace(/=/g,"_")}},{key:"encode",value:function(e){return this.escape(this.newBuffer(e).toString("base64"))}},{key:"decode",value:function(e){return this.newBuffer(this.unescape(e),"base64")}},{key:"base64encode",value:function(e){return this.newBuffer(e).toString("base64")}},{key:"base64decode",value:function(e){return this.newBuffer(e,"base64").toString()}},{key:"_hmacsha256",value:function(e,t,r,n){var i="TLS.identifier:"+e+"\n";i+="TLS.sdkappid:"+this.SDKAPPID+"\n",i+="TLS.time:"+t+"\n",i+="TLS.expire:"+r+"\n",null!=n&&(i+="TLS.userbuf:"+n+"\n");var o=Ur.HmacSHA256(i,this.PRIVATEKEY);return Ur.enc.Base64.stringify(o)}},{key:"_utc",value:function(){return Math.round(Date.now()/1e3)}},{key:"_isNumber",value:function(e){return null!==e&&("number"==typeof e&&!isNaN(e-0)||"object"===Dr(e)&&e.constructor===Number)}},{key:"_isString",value:function(e){return"string"==typeof e}},{key:"genSigWithUserbuf",value:function(e,t,r){var n=this._utc(),i={"TLS.ver":"2.0","TLS.identifier":e,"TLS.sdkappid":this.SDKAPPID,"TLS.time":n,"TLS.expire":t},o="";if(null!=r){var a=this.base64encode(r);i["TLS.userbuf"]=a,o=this._hmacsha256(e,n,t,a)}else o=this._hmacsha256(e,n,t,null);i["TLS.sig"]=o;var s=JSON.stringify(i),h=bh.deflateSync(this.newBuffer(s)).toString("base64"),c=this.escape(h);return console.log("ret="+c),c}},{key:"validate",value:function(e){var t=this.decode(e),r=bh.inflateSync(t);console.log("validate ret="+r)}}])&&Pr(t.prototype,r),n&&Pr(t,n),e}()});


/***/ }),

/***/ 50008:
/*!****************************************************************!*\
  !*** ./projects/ngx-tencent-im/src/avatar/avatar.component.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AvatarComponent": function() { return /* binding */ AvatarComponent; }
/* harmony export */ });
/* harmony import */ var _shared_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared.data */ 54825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/avatar */ 37893);



class AvatarComponent {
    constructor() {
        this.shape = 'circle';
        this.size = 'large';
        this.type = 'C2C';
    }
    set src(value) {
        this._src = value;
        if (/^(https:|http:|\/\/)/.test(value)) {
            this.avatarSrc = value;
        }
        else {
            this.avatarSrc = this.getDefaultAvatar();
        }
    }
    ;
    get src() {
        return this._src;
    }
    ngOnInit() {
    }
    getDefaultAvatar() {
        switch (this.type) {
            case 'C2C':
                // 个人头像
                return 'https://imgcache.qq.com/open/qcloud/video/act/webim-avatar/avatar-2.png';
            case 'GROUP':
                // 群默认头像
                return 'https://imgcache.qq.com/open/qcloud/video/act/webim-avatar/avatar-3.png';
            case _shared_data__WEBPACK_IMPORTED_MODULE_0__.TIM.TYPES.CONV_SYSTEM:
                return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAACpCAMAAAHy0MbyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJYUExURQrBYAvBYRPDZhzGbCXIcSrJdSHHbxjFaQ7CYwzBYSnJdEzSi3bcpqLnw87z3+X47uj58Ov68uz68+n58ef579/36rzu05Djt2TYmz7OghnFai/KeIHfrcPw2OP47fz+/f////P8+Nb15K7ry1vVlBrFaw7CYlDTjqrqyPP899j15YrhsxDCZFfUksDv1vr+/C7KdyzKdq3qynLbo2HXmf7//rTszhTDZo/jtk7SjCjJc7nt0fX9+THLes3y3/3//oXgsA3CYjTMe5HjuA/CY8/z4IDfrRbEaLft0GbYnO779Pb9+cLv1x3GbNL04ub575zmv5flvEDPgzDLeaXoxIzitPD79TXMfB7GbeL47F7WlhLDZavqyfj9+03SjN326YvitEbQh3jdqO/79CLHcLHrzE/TjSPHcOT47vH79rHrzUvSivf9+vn++8zy3lXUkdf15SDHblnVk+D36ybIclrVlGfZnHjdpznNf1HTjhfEadv26I3itUfRiMfx26Pow0HPhJPkuZjlvMHv1zjNfkTQhWnZnhvFa8ry3TLLepXkurbt0Gvan4LfrknRiV/Wl9X05HHbo7/v1Z3mv8jx24jhskjRiTrNf8nx3Mvy3WLXmUfQh0XQhu3681LTj9n15ljVk2XYm6/ry+H37Or68bXsz2PYmjfMfW3aoLvu0zbMfTPLe77u1S7KeErRirDrzNr253fcpkPPhSvJdafpxr3u1N736n/frPL89o7itW/boWDXl3ndqJvmvvv+/Xveqsbx2tz26fT8+BHDZD3OgYTgr4fhsQAAAKRC35oAAADIdFJOU/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8A9ppxxwAAAAlwSFlzAAAXEQAAFxEByibzPwAABVpJREFUaEPt2zuP2koUB3BaN1dCLikwols5fVb5Cim3QaxEtNomDdJKaHWbbaBASPcTUKVBShv6NNH6e2Uefxs/5u0H7NX5NXiOzwwjY+yxPR4N422MhYqEw/KFiDbiZ3UY0V7D1ThizDMiAmIcIkIURaycxlGEQCFLRvUvlDJ8/j+MP2OhTGymxoqxCDc2ioz6/mgo5hB1C39BtBZGkEFAQIiLERKiKN2xtc0ffpSkD1MsVhzxSZxgoydLlA2QKfyLmA7S4Buiaitk5RBWQ04BYTXkFBBWQ04BYTXkFA6IqyCl5AvWNGB9DVbWYW3NGWvVZGOZsb8X8i+MAiHe5rOFeYfMbcSuliQzlA3WSGUQ0fqGPAExHWRJvxFUwzk2h6gacnKIqiEnt0VYCTm5FcJKyMlVzrB1yMl9tFzTBn5ASgFxFWRc6I+YSCjDmoZGDzisq8PaKuWQR52qaTi/BKjB2jo28mZjb7k2TkRRLGv9lCcgTUdrkiQbpbZTVk5003VYH2X3lo4SQkiAN3EokhYbBNuqDFWkN6xqoTRWKmt5d2SJZhSQESQfAyohJwRa0ECSvzka0LhHmrcZGtBYI80b6usYR1kG7ARuRO1KH63d0D8GausFdfiAykbI9fAdNS0+Id2RU2cl1HCivHrQ8bgPihpuvqOSi/RxFRd4XSwyU1bEIndKUcVbym8fYplhBeNlswfWVIJuTXh35WIH7lhjvEHhAcEuRO9/ZKOrPSKEEEIIIVey+e+f8Wy8e3V4yuxuWb4AV02QCFO/rH9CvB3FLRPlbB5P6lsmWBnuBQ3VYXUwNNPg8NTPhA+o1Vr9eKb7UUgJUnt8WDFHTgDDXTkGSQHM97ncHt6ooAGN4NtctstZZHnbo74O0rxpHsgVkObtHvV1Qq+4be2G3hCndiVqV6J2pb7afUJ9HbcpYk316Xx15smAeqiuhzxPW9TWq8xQdmW9u+53J7VQ3Dc0CJgCa98KHJLd2c5tOaQ7QzUr46yoJpeNK3ndY85QyYXPcApV3KCOA9cfTZqglp1fu+7/utT9Z9NNoFJLj2s8nuBYZSxx1dKd919OTKxixLOiNC+OnnkJBdtUKzN+ALo8gub/byy2xVq6bMRKoR3WxekjllfsJw1+fl7H+pjEfHd65ztKV90did/q8hynw+lmomEIfi6mdEKr284nx02y7GlPU+4IIYQQQgghhBBisVxuNptOp4j0YpOt60/wF/MfN9nvHzt0UGH2OfTJUT9eTdMipPmt9Hhj2K4Vr6hwTYcFOuOiu3lUYZauWzZ31S3s90hD2F3vQKF4xdBudq3/3G90wFfoc+t2grYtN75Gf1/x5QEWaGJAL7YpBSah0w3C2SZWGI0HPzzoJ0+66GZ2rDuPV+tUWkyvDGKbvGOx7vbxn9UnfG+g1cDnirbdfUE7A6Hu9om62yfqbp+ou336YN1tMTjn4oFPwm5TR/U6m+flJOCKvSr8vZQA5ZlggQa8/jn7TMTU8ZpZ20ary7SLfMpiv9J2V2klsfuE3WBHfFcnMjTal32buwsKcfgbcQ463bRSfxeZ6Rpf0a2A9xtcTLo4fKn0soH3fAp6P/o4xfWw3+amPfzhetpzuR2+olv3fMp89+56HJ1F+4kCdpQTihVnuc/HB5TLDpOB75VJE9GjZKX6cow1Bx0xWkR4A+AB5ZIU58Gejq5hnnGUaxxCMdacnlC+EZP8qHwqvwyB/ZZF0xt7RSJdF4eN6Wl7PP7asoHmFNv2J5JuyVk3Wnu8yt/fKkq32Jwlq/tbflMmet/e/ZEdncZfj0Gvvw4s35ztXpkjhBBCCCGkrdHoLzv9X1u4OdoGAAAAAElFTkSuQmCC';
            default:
                // 默认头像
                return 'https://imgcache.qq.com/open/qcloud/video/act/webim-avatar/avatar-1.png';
        }
    }
}
AvatarComponent.ɵfac = function AvatarComponent_Factory(t) { return new (t || AvatarComponent)(); };
AvatarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AvatarComponent, selectors: [["im-avatar"]], inputs: { shape: "shape", size: "size", type: "type", title: "title", src: "src" }, decls: 1, vars: 5, consts: [[3, "nzSize", "nzShape", "nzSrc", "nzAlt", "title"]], template: function AvatarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-avatar", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSize", ctx.size)("nzShape", ctx.shape)("nzSrc", ctx.avatarSrc)("nzAlt", ctx.title)("title", ctx.title);
    } }, directives: [ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_2__.NzAvatarComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdmF0YXIuY29tcG9uZW50Lmxlc3MifQ== */"] });


/***/ }),

/***/ 21777:
/*!***************************************************************************************************!*\
  !*** ./projects/ngx-tencent-im/src/conversation/conversation-item/conversation-item.component.ts ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConversationItemComponent": function() { return /* binding */ ConversationItemComponent; }
/* harmony export */ });
/* harmony import */ var _util_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/date */ 90570);
/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/selectors */ 29716);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/actions */ 10771);
/* harmony import */ var tim_js_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tim-js-sdk */ 92882);
/* harmony import */ var tim_js_sdk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tim_js_sdk__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared.data */ 54825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 17562);
/* harmony import */ var _tim_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../tim-helper.service */ 92789);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _avatar_avatar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../avatar/avatar.component */ 50008);










function ConversationItemComponent_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", ctx_r0.conversation.userProfile.nick || ctx_r0.conversation.userProfile.userID);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r0.conversation.userProfile.nick || ctx_r0.conversation.userProfile.userID, " ");
} }
function ConversationItemComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", ctx_r1.conversation.groupProfile.name || ctx_r1.conversation.groupProfile.groupID);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.conversation.groupProfile.name || ctx_r1.conversation.groupProfile.groupID, " ");
} }
function ConversationItemComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\u7CFB\u7EDF\u901A\u77E5 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ConversationItemComponent_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r3.conversation.unreadCount > 99 ? "99+" : ctx_r3.conversation.unreadCount, " ");
} }
const _c0 = function (a0) { return { "choose": a0 }; };
class ConversationItemComponent {
    constructor(store, timHelperService) {
        this.store = store;
        this.timHelperService = timHelperService;
        this.TIM = (tim_js_sdk__WEBPACK_IMPORTED_MODULE_3___default());
    }
    ngOnInit() {
        this.profileSubscription = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_1__.currentUserProfileSelector)
            .subscribe(res => {
            this.currentUserProfile = res;
        });
    }
    selectConversation() {
        if (this.conversation.conversationID !== this.currentConversation.conversationID) {
            this.timHelperService.checkoutConversation(this.conversation.conversationID);
            // this.timHelperService.eventBus$.next('select-item');
        }
    }
    get avatarSrc() {
        var _a, _b;
        switch (this.conversation.type) {
            case 'GROUP':
                return (_a = this.conversation.groupProfile) === null || _a === void 0 ? void 0 : _a.avatar;
            case 'C2C':
                return (_b = this.conversation.userProfile) === null || _b === void 0 ? void 0 : _b.avatar;
            default:
                return null;
        }
    }
    ;
    get date() {
        if (!this.conversation.lastMessage || !this.conversation.lastMessage.lastTime) {
            return '';
        }
        const date = new Date(this.conversation.lastMessage.lastTime * 1000);
        if ((0,_util_date__WEBPACK_IMPORTED_MODULE_0__.isToday)(date)) {
            return (0,_util_date__WEBPACK_IMPORTED_MODULE_0__.getTime)(date);
        }
        return (0,_util_date__WEBPACK_IMPORTED_MODULE_0__.getDate)(date);
    }
    get messageForShow() {
        var _a;
        if (this.conversation.lastMessage.isRevoked) {
            if (this.conversation.lastMessage.fromAccount === ((_a = this.currentUserProfile) === null || _a === void 0 ? void 0 : _a.userID)) {
                return '你撤回了一条消息';
            }
            if (this.conversation.type === (tim_js_sdk__WEBPACK_IMPORTED_MODULE_3___default().TYPES.CONV_C2C)) {
                return '对方撤回了一条消息';
            }
            return `${this.conversation.lastMessage.fromAccount}撤回了一条消息`;
        }
        return this.conversation.lastMessage.messageForShow;
    }
    get conversationName() {
        if (this.conversation.type === (tim_js_sdk__WEBPACK_IMPORTED_MODULE_3___default().TYPES.CONV_C2C)) {
            return this.conversation.userProfile.nick || this.conversation.userProfile.userID;
        }
        if (this.conversation.type === (tim_js_sdk__WEBPACK_IMPORTED_MODULE_3___default().TYPES.CONV_GROUP)) {
            return this.conversation.groupProfile.name || this.conversation.groupProfile.groupID;
        }
        if (this.conversation.type === (tim_js_sdk__WEBPACK_IMPORTED_MODULE_3___default().TYPES.CONV_SYSTEM)) {
            return '系统通知';
        }
        return '';
    }
    deleteConversation(event) {
        // 停止冒泡，避免和点击会话的事件冲突
        event.stopPropagation();
        this.timHelperService.tim
            .deleteConversation(this.conversation.conversationID)
            .then(() => {
            this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_2__.showAction)({
                message: `会话【${this.conversationName}】删除成功!`,
                msgType: _shared_data__WEBPACK_IMPORTED_MODULE_4__.MESSAGE_STATUS.success
            }));
            this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_2__.resetCurrentConversationAction)());
        })
            .catch(error => {
            this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_2__.showAction)({
                message: `会话【${this.conversationName}】删除失败!, error=${error.message}`,
                msgType: _shared_data__WEBPACK_IMPORTED_MODULE_4__.MESSAGE_STATUS.error
            }));
        });
    }
    ngOnDestroy() {
        if (this.profileSubscription) {
            this.profileSubscription.unsubscribe();
        }
    }
}
ConversationItemComponent.ɵfac = function ConversationItemComponent_Factory(t) { return new (t || ConversationItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_tim_helper_service__WEBPACK_IMPORTED_MODULE_5__.TimHelperService)); };
ConversationItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ConversationItemComponent, selectors: [["app-conversation-item"]], inputs: { currentConversation: "currentConversation", conversation: "conversation" }, decls: 21, vars: 12, consts: [[1, "conversation-item-container", 3, "ngClass", "click"], [1, "close-btn"], ["title", "\u5220\u9664\u4F1A\u8BDD", 1, "tim-icon-close", 3, "click"], [1, "warp"], [3, "src", "type"], [1, "content"], [1, "row-1"], [1, "name"], [1, "text-ellipsis"], [3, "title", 4, "ngIf"], [4, "ngIf"], [1, "unread-count"], ["class", "badge", 4, "ngIf"], [1, "row-2"], [1, "summary"], ["v-if", "conversation.lastMessage", 1, "text-ellipsis"], [1, "text", 3, "title"], [1, "date"], [3, "title"], [1, "badge"]], template: function ConversationItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ConversationItemComponent_Template_div_click_0_listener() { return ctx.selectConversation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ConversationItemComponent_Template_span_click_2_listener($event) { return ctx.deleteConversation($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "im-avatar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, ConversationItemComponent_span_9_Template, 2, 2, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, ConversationItemComponent_span_10_Template, 2, 2, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, ConversationItemComponent_span_11_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, ConversationItemComponent_span_13_Template, 2, 1, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](10, _c0, ctx.conversation.conversationID === ctx.currentConversation.conversationID));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx.avatarSrc)("type", ctx.conversation.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.conversation.type === ctx.TIM.TYPES.CONV_C2C);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.conversation.type === ctx.TIM.TYPES.CONV_GROUP);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.conversation.type === ctx.TIM.TYPES.CONV_SYSTEM);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.conversation.unreadCount > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", ctx.conversation.lastMessage.messageForShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.messageForShow, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.date, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _avatar_avatar_component__WEBPACK_IMPORTED_MODULE_6__.AvatarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf], styles: [".conversation-item-container[_ngcontent-%COMP%] {\n  padding: 15px 10px;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n  transition: 0.2s;\n}\n.conversation-item-container[_ngcontent-%COMP%]:hover {\n  background-color: #404953;\n}\n.conversation-item-container[_ngcontent-%COMP%]:hover   .close-btn[_ngcontent-%COMP%] {\n  right: 3px;\n}\n.conversation-item-container[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -20px;\n  top: 3px;\n  color: #76828c;\n  transition: all 0.2s ease;\n}\n.conversation-item-container[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {\n  color: #f35f5f;\n}\n.conversation-item-container[_ngcontent-%COMP%]   .warp[_ngcontent-%COMP%] {\n  display: flex;\n}\n.conversation-item-container[_ngcontent-%COMP%]   .warp[_ngcontent-%COMP%]   im-avatar[_ngcontent-%COMP%] {\n  padding-right: 10px;\n}\n.conversation-item-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 40px;\n  overflow: hidden;\n}\n.conversation-item-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%] {\n  display: flex;\n  line-height: 21px;\n}\n.conversation-item-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  color: #f7f7f8;\n  flex: 1;\n  min-width: 0px;\n}\n.conversation-item-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .unread-count[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  flex-shrink: 0;\n  color: #76828c;\n  font-size: 12px;\n}\n.conversation-item-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .unread-count[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  vertical-align: bottom;\n  background-color: #f35f5f;\n  border-radius: 10px;\n  color: #fff;\n  display: inline-block;\n  font-size: 12px;\n  height: 18px;\n  max-width: 40px;\n  line-height: 18px;\n  padding: 0 6px;\n  text-align: center;\n  white-space: nowrap;\n}\n.conversation-item-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .row-2[_ngcontent-%COMP%] {\n  display: flex;\n  font-size: 12px;\n  padding-top: 3px;\n}\n.conversation-item-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .row-2[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: hidden;\n  min-width: 0px;\n  color: #a5b5c1;\n}\n.conversation-item-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .row-2[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   .remind[_ngcontent-%COMP%] {\n  color: #f35f5f;\n}\n.conversation-item-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .row-2[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  flex-shrink: 0;\n  text-align: right;\n  color: #76828c;\n}\n.choose[_ngcontent-%COMP%] {\n  background-color: #404953;\n}\n.context-menu-button[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 2px solid #2d8cf0;\n  border-radius: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnZlcnNhdGlvbi1pdGVtLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFDRTtFQUNFLHlCQUFBO0FBQ0o7QUFGRTtFQUlJLFVBQUE7QUFDTjtBQVpBO0VBZ0JJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUFESjtBQUdJO0VBQ0UsY0FBQTtBQUROO0FBdEJBO0VBNEJJLGFBQUE7QUFISjtBQXpCQTtFQThCTSxtQkFBQTtBQUZOO0FBNUJBO0VBbUNJLE9BQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFKSjtBQWpDQTtFQXdDTSxhQUFBO0VBQ0EsaUJBQUE7QUFKTjtBQXJDQTtFQTRDUSxjQUFBO0VBQ0EsT0FBQTtFQUNBLGNBQUE7QUFKUjtBQTFDQTtFQWtEUSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUxSO0FBaERBO0VBd0RVLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFMVjtBQTlEQTtFQXlFTSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBUk47QUFuRUE7RUE4RVEsT0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFSUjtBQXpFQTtFQW9GVSxjQUFBO0FBUlY7QUE1RUE7RUF5RlEsa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBVlI7QUFnQkE7RUFDRSx5QkFBQTtBQWRGO0FBaUJBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFmRiIsImZpbGUiOiJjb252ZXJzYXRpb24taXRlbS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb252ZXJzYXRpb24taXRlbS1jb250YWluZXIge1xuICBwYWRkaW5nOiAxNXB4IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MDQ5NTM7XG5cbiAgICAuY2xvc2UtYnRuIHtcbiAgICAgIHJpZ2h0OiAzcHg7XG4gICAgfVxuICB9XG5cbiAgLmNsb3NlLWJ0biB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAtMjBweDtcbiAgICB0b3A6IDNweDtcbiAgICBjb2xvcjogIzc2ODI4YztcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogI2YzNWY1ZjtcbiAgICB9XG4gIH1cblxuICAud2FycCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBpbS1hdmF0YXIge1xuICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICB9XG4gIH1cblxuICAuY29udGVudCB7XG4gICAgZmxleDogMTtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIC5yb3ctMSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XG5cbiAgICAgIC5uYW1lIHtcbiAgICAgICAgY29sb3I6ICNmN2Y3Zjg7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIG1pbi13aWR0aDogMHB4O1xuICAgICAgfVxuXG4gICAgICAudW5yZWFkLWNvdW50IHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgY29sb3I6ICM3NjgyOGM7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcblxuICAgICAgICAuYmFkZ2Uge1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YzNWY1ZjtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgICAgICAgIG1heC13aWR0aDogNDBweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgICAgICBwYWRkaW5nOiAwIDZweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5yb3ctMiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgcGFkZGluZy10b3A6IDNweDtcblxuICAgICAgLnN1bW1hcnkge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBtaW4td2lkdGg6IDBweDtcbiAgICAgICAgY29sb3I6ICNhNWI1YzE7XG5cbiAgICAgICAgLnJlbWluZCB7XG4gICAgICAgICAgY29sb3I6ICNmMzVmNWY7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmRhdGUge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgY29sb3I6ICM3NjgyOGM7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5jaG9vc2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA0OTUzO1xufVxuXG4uY29udGV4dC1tZW51LWJ1dHRvbiB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMyZDhjZjA7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 11663:
/*!***************************************************************************************************!*\
  !*** ./projects/ngx-tencent-im/src/conversation/conversation-list/conversation-list.component.ts ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConversationListComponent": function() { return /* binding */ ConversationListComponent; }
/* harmony export */ });
/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/selectors */ 29716);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/actions */ 10771);
/* harmony import */ var _shared_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared.data */ 54825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 17562);
/* harmony import */ var _tim_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tim-helper.service */ 92789);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var _conversation_item_conversation_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../conversation-item/conversation-item.component */ 21777);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/form */ 32734);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 1707);













function ConversationListComponent_app_conversation_item_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-conversation-item", 10);
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("currentConversation", ctx_r0.currentConversation)("conversation", item_r3);
} }
function ConversationListComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "nz-form-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "\u7528\u6237ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "nz-form-control", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ConversationListComponent_ng_template_9_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r4.userID = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzSpan", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzSpan", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r2.userID);
} }
class ConversationListComponent {
    constructor(store, timHelperService) {
        this.store = store;
        this.timHelperService = timHelperService;
        this.conversationList = [];
        this.timeout = null;
        this.showDialog = false;
        this.userID = '';
    }
    ngOnInit() {
        this.storeSubscription = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_0__.currentConversationSelector)
            .subscribe(res => {
            this.currentConversation = res;
        });
        // 获取当前list会话
        this.subscription = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_0__.conversationListSelector)
            .subscribe(res => {
            this.conversationList = res;
        });
    }
    ;
    add() {
        this.showDialog = true;
    }
    handleOk() {
        if (this.userID !== '@TIM#SYSTEM') {
            this.timHelperService.checkoutConversation(`C2C${this.userID}`);
            this.showDialog = false;
        }
        this.userID = '';
    }
    handleCancel() {
        this.showDialog = false;
    }
    refresh() {
        // if (!this.timeout) {
        //   this.timeout = setTimeout(() => {
        //     this.timeout = null;
        //   }, 1000);
        // }
        // 拉取会话列表
        this.timHelperService.tim.getConversationList().then(({ data }) => {
            this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_1__.showAction)({ msgType: _shared_data__WEBPACK_IMPORTED_MODULE_2__.MESSAGE_STATUS.success, message: '刷新成功！' }));
        }).catch((imError) => {
            console.error('getConversationList error:', imError); // 获取会话列表失败的相关信息
        });
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        if (this.storeSubscription) {
            this.storeSubscription.unsubscribe();
        }
    }
}
ConversationListComponent.ɵfac = function ConversationListComponent_Factory(t) { return new (t || ConversationListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_tim_helper_service__WEBPACK_IMPORTED_MODULE_3__.TimHelperService)); };
ConversationListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ConversationListComponent, selectors: [["app-conversation-list"]], decls: 11, vars: 3, consts: [[1, "list-container"], [1, "header-bar"], ["title", "\u5237\u65B0\u5217\u8868", 3, "click"], [1, "tim-icon-refresh"], ["title", "\u521B\u5EFA\u4F1A\u8BDD", 3, "click"], [1, "tim-icon-add"], [1, "scroll-container"], [3, "currentConversation", "conversation", 4, "ngFor", "ngForOf"], ["nzTitle", "\u53D1\u8D77\u4F1A\u8BDD", 3, "nzVisible", "nzContent", "nzVisibleChange", "nzOnCancel", "nzOnOk"], ["content", ""], [3, "currentConversation", "conversation"], [3, "nzSpan"], ["nz-input", "", 3, "ngModel", "ngModelChange"]], template: function ConversationListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ConversationListComponent_Template_button_click_2_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ConversationListComponent_Template_button_click_4_listener() { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, ConversationListComponent_app_conversation_item_7_Template, 1, 2, "app-conversation-item", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "nz-modal", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("nzVisibleChange", function ConversationListComponent_Template_nz_modal_nzVisibleChange_8_listener($event) { return ctx.showDialog = $event; })("nzOnCancel", function ConversationListComponent_Template_nz_modal_nzOnCancel_8_listener() { return ctx.handleCancel(); })("nzOnOk", function ConversationListComponent_Template_nz_modal_nzOnOk_8_listener() { return ctx.handleOk(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, ConversationListComponent_ng_template_9_Template, 5, 3, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.conversationList);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzVisible", ctx.showDialog)("nzContent", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_8__.NzModalComponent, _conversation_item_conversation_item_component__WEBPACK_IMPORTED_MODULE_4__.ConversationItemComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__.NzFormItemComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel], styles: [".list-container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex flex-direction column;\n}\n.header-bar[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  height: 50px;\n  border-bottom: 1px solid #303841;\n  padding: 10px 10px 10px 20px;\n}\n.header-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  float: right;\n  display: inline-block;\n  cursor: pointer;\n  background: #303841;\n  border: none;\n  color: #76828c;\n  box-sizing: border-box;\n  transition: 0.3s;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  margin: 0 10px 0 0;\n  padding: 0;\n  width: 30px;\n  height: 30px;\n  line-height: 34px;\n  font-size: 24px;\n  text-align: center;\n  white-space: nowrap;\n  border-radius: 50%;\n  outline: 0;\n}\n.header-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  transform: rotate(360deg);\n  color: #5cadff;\n}\n.header-bar[_ngcontent-%COMP%]   .scroll-container[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  flex: 1;\n}\n.bottom-circle-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 20px;\n  right: 20px;\n}\n.refresh[_ngcontent-%COMP%] {\n  bottom: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnZlcnNhdGlvbi1saXN0LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQ0FBQTtBQUNGO0FBR0E7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsNEJBQUE7QUFERjtBQUhBO0VBT0ksWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBREo7QUFHSTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQUROO0FBOUJBO0VBb0NJLGtCQUFBO0VBQ0EsT0FBQTtBQUhKO0FBT0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBTEY7QUFRQTtFQUNFLFlBQUE7QUFORiIsImZpbGUiOiJjb252ZXJzYXRpb24tbGlzdC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXggZmxleC1kaXJlY3Rpb24gY29sdW1uO1xufVxuXG4vLyAtcmV2ZXJzZVxuLmhlYWRlci1iYXIge1xuICBmbGV4LXNocmluazogMDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMwMzg0MTtcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMjBweDtcblxuICBidXR0b24ge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQ6ICMzMDM4NDE7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiAjNzY4MjhjO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgIG1hcmdpbjogMCAxMHB4IDAgMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBsaW5lLWhlaWdodDogMzRweDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG91dGxpbmU6IDA7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICBjb2xvcjogIzVjYWRmZjtcbiAgICB9XG4gIH1cblxuICAuc2Nyb2xsLWNvbnRhaW5lciB7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIGZsZXg6IDE7XG4gIH1cbn1cblxuLmJvdHRvbS1jaXJjbGUtYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDIwcHg7XG4gIHJpZ2h0OiAyMHB4O1xufVxuXG4ucmVmcmVzaCB7XG4gIGJvdHRvbTogNzBweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 26748:
/*!*********************************************************************************************************!*\
  !*** ./projects/ngx-tencent-im/src/conversation/conversation-profile/conversation-profile.component.ts ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConversationProfileComponent": function() { return /* binding */ ConversationProfileComponent; }
/* harmony export */ });
/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/selectors */ 29716);
/* harmony import */ var tim_js_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tim-js-sdk */ 92882);
/* harmony import */ var tim_js_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tim_js_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 17562);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _conversation_profile_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./conversation-profile/user-profile/user-profile.component */ 39032);
/* harmony import */ var _conversation_profile_group_profile_group_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./conversation-profile/group-profile/group-profile.component */ 8680);







function ConversationProfileComponent_app_user_profile_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-user-profile", 3);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("userProfile", ctx_r0.currentConversation.userProfile);
} }
function ConversationProfileComponent_app_group_profile_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-group-profile", 4);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("currentConversation", ctx_r1.currentConversation);
} }
class ConversationProfileComponent {
    constructor(store) {
        this.store = store;
        this.TIM = (tim_js_sdk__WEBPACK_IMPORTED_MODULE_1___default());
    }
    ngOnInit() {
        this.subscription = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_0__.currentConversationSelector)
            .subscribe(res => {
            this.currentConversation = res;
        });
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
ConversationProfileComponent.ɵfac = function ConversationProfileComponent_Factory(t) { return new (t || ConversationProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store)); };
ConversationProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ConversationProfileComponent, selectors: [["app-conversation-profile"]], decls: 3, vars: 2, consts: [[1, "conversation-profile-wrapper"], [3, "userProfile", 4, "ngIf"], [3, "currentConversation", 4, "ngIf"], [3, "userProfile"], [3, "currentConversation"]], template: function ConversationProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ConversationProfileComponent_app_user_profile_1_Template, 1, 1, "app-user-profile", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ConversationProfileComponent_app_group_profile_2_Template, 1, 1, "app-group-profile", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.currentConversation.type === ctx.TIM.TYPES.CONV_C2C);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.currentConversation.type === ctx.TIM.TYPES.CONV_GROUP);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _conversation_profile_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_2__.UserProfileComponent, _conversation_profile_group_profile_group_profile_component__WEBPACK_IMPORTED_MODULE_3__.GroupProfileComponent], styles: [".conversation-profile-wrapper[_ngcontent-%COMP%] {\n  background-color: #fff;\n  height: 100%;\n  overflow-y: scroll;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px;\n  height: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnZlcnNhdGlvbi1wcm9maWxlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUNBLGFBQWE7QUFFYjtFQUNFLFVBQUE7RUFDQSxXQUFBO0FBQUYiLCJmaWxlIjoiY29udmVyc2F0aW9uLXByb2ZpbGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udmVyc2F0aW9uLXByb2ZpbGUtd3JhcHBlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4vKiDorr7nva7mu5rliqjmnaHnmoTmoLflvI8gKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMHB4O1xuICBoZWlnaHQ6IDBweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 8680:
/*!*************************************************************************************************************************************!*\
  !*** ./projects/ngx-tencent-im/src/conversation/conversation-profile/conversation-profile/group-profile/group-profile.component.ts ***!
  \*************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupProfileComponent": function() { return /* binding */ GroupProfileComponent; }
/* harmony export */ });
/* harmony import */ var _shared_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared.data */ 54825);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../store/actions */ 10771);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _tim_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../tim-helper.service */ 92789);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 17562);
/* harmony import */ var _group_group_member_list_group_member_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../group/group-member-list/group-member-list.component */ 14222);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/switch */ 17318);
/* harmony import */ var _avatar_avatar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../avatar/avatar.component */ 50008);














function GroupProfileComponent_i_11_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function GroupProfileComponent_i_11_Template_i_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](14); ctx_r19.showEditFaceUrl = true; ctx_r19.inputFocus(_r2); return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function GroupProfileComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "im-avatar", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r1.groupProfile.avatar);
} }
function GroupProfileComponent_i_23_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function GroupProfileComponent_i_23_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](26); ctx_r21.showEditName = true; return ctx_r21.inputFocus(_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function GroupProfileComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", ctx_r4.groupProfile.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r4.groupProfile.name || "\u6682\u65E0", " ");
} }
function GroupProfileComponent_i_30_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function GroupProfileComponent_i_30_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](33); ctx_r23.showEditIntroduction = true; return ctx_r23.inputFocus(_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function GroupProfileComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", ctx_r7.groupProfile.introduction);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r7.groupProfile.introduction || "\u6682\u65E0", " ");
} }
function GroupProfileComponent_i_37_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function GroupProfileComponent_i_37_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](40); ctx_r25.showEditNotification = true; return ctx_r25.inputFocus(_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function GroupProfileComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", ctx_r10.groupProfile.notification);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r10.groupProfile.notification || "\u6682\u65E0", " ");
} }
function GroupProfileComponent_div_41_i_3_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function GroupProfileComponent_div_41_i_3_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r29.showEditJoinOption = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function GroupProfileComponent_div_41_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r28.joinOptionMap[ctx_r28.groupProfile.joinOption], " ");
} }
const _c0 = function () { return { "width": "100%" }; };
function GroupProfileComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " \u7533\u8BF7\u52A0\u7FA4\u65B9\u5F0F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, GroupProfileComponent_div_41_i_3_Template, 1, 0, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, GroupProfileComponent_div_41_div_4_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "nz-select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function GroupProfileComponent_div_41_Template_nz_select_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r31.joinOption = $event; })("ngModelChange", function GroupProfileComponent_div_41_Template_nz_select_ngModelChange_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r32); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r33.editJoinOption(); })("blur", function GroupProfileComponent_div_41_Template_nz_select_blur_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r32); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r34.showEditJoinOption = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "nz-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "nz-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "nz-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r12.editable);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r12.showEditJoinOption);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](5, _c0))("ngModel", ctx_r12.joinOption)("hidden", !ctx_r12.showEditJoinOption);
} }
function GroupProfileComponent_i_45_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function GroupProfileComponent_i_45_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r35.showEditMessageRemindType = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function GroupProfileComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r14.messageRemindTypeMap[ctx_r14.groupProfile.selfInfo.messageRemindType], " ");
} }
function GroupProfileComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r15.groupProfile.selfInfo.nameCard || "\u6682\u65E0", " ");
} }
function GroupProfileComponent_div_62_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function GroupProfileComponent_div_62_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r37.showChangeGroupOwner = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "\u8F6C\u8BA9\u7FA4\u7EC4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function GroupProfileComponent_div_62_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r38); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r39.newOwnerUserID = $event; })("keydown.enter", function GroupProfileComponent_div_62_Template_input_keydown_enter_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r38); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r40.changeOwner(); })("blur", function GroupProfileComponent_div_62_Template_input_blur_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r38); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r41.showChangeGroupOwner = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", !ctx_r17.showChangeGroupOwner)("ngModel", ctx_r17.newOwnerUserID);
} }
const _c1 = function () { return { "color": "red" }; };
function GroupProfileComponent_div_66_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function GroupProfileComponent_div_66_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r42.dismissGroup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "\u89E3\u6563\u7FA4\u7EC4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](1, _c1));
} }
const _c2 = function (a0) { return { "active": a0 }; };
class GroupProfileComponent {
    constructor(timHelper, store) {
        this.timHelper = timHelper;
        this.store = store;
        this.showEditFaceUrl = false;
        this.showEditName = false;
        this.showEditIntroduction = false;
        this.showEditNotification = false;
        this.showEditJoinOption = false;
        this.showEditMessageRemindType = false;
        this.showEditNameCard = false;
        this.showChangeGroupOwner = false;
        this.newOwnerUserID = '';
        this.messageRemindTypeMap = {
            AcceptAndNotify: '接收消息并提示',
            AcceptNotNotify: '接收消息但不提示',
            Discard: '屏蔽消息',
        };
        this.joinOptionMap = {
            FreeAccess: '自由加入',
            NeedPermission: '需要验证',
            DisableApply: '禁止加群',
        };
        this.active = false;
    }
    ;
    ngOnInit() {
        this.groupProfile = this.currentConversation.groupProfile;
        switch (this.groupProfile.type) {
            case _shared_data__WEBPACK_IMPORTED_MODULE_0__.TIM.TYPES.GRP_WORK:
                this.groupType = '好友工作群（Work）';
                break;
            case _shared_data__WEBPACK_IMPORTED_MODULE_0__.TIM.TYPES.GRP_PUBLIC:
                this.groupType = '陌生人社交群（Public）';
                break;
            case _shared_data__WEBPACK_IMPORTED_MODULE_0__.TIM.TYPES.GRP_CHATROOM:
                this.groupType = '临时会议群（Meeting）';
                break;
            case _shared_data__WEBPACK_IMPORTED_MODULE_0__.TIM.TYPES.GRP_AVCHATROOM:
                this.groupType = '直播群（AVChatRoom）';
                break;
            default:
                this.groupType = '';
        }
        this.muteAllMembers = this.groupProfile.muteAllMembers;
        this.joinOption = this.groupProfile.joinOption;
        this.messageRemindType = this.groupProfile.selfInfo.messageRemindType;
    }
    get editable() {
        return this.groupProfile.type === _shared_data__WEBPACK_IMPORTED_MODULE_0__.TIM.TYPES.GRP_WORK || [_shared_data__WEBPACK_IMPORTED_MODULE_0__.TIM.TYPES.GRP_MBR_ROLE_OWNER, _shared_data__WEBPACK_IMPORTED_MODULE_0__.TIM.TYPES.GRP_MBR_ROLE_ADMIN].includes(this.groupProfile.selfInfo.role);
    }
    get isOwner() {
        return this.groupProfile.selfInfo.role === _shared_data__WEBPACK_IMPORTED_MODULE_0__.TIM.TYPES.GRP_MBR_ROLE_OWNER;
    }
    get isAdmin() {
        return this.groupProfile.selfInfo.role === _shared_data__WEBPACK_IMPORTED_MODULE_0__.TIM.TYPES.GRP_MBR_ROLE_ADMIN;
    }
    get showDissmissGroup() {
        // 好友工作群不能解散
        return this.isOwner && this.groupProfile.type !== _shared_data__WEBPACK_IMPORTED_MODULE_0__.TIM.TYPES.GRP_WORK;
    }
    inputFocus(el) {
        setTimeout(() => {
            el.focus();
        }, 0);
    }
    editFaceUrl() {
        this.timHelper.tim
            .updateGroupProfile({
            groupID: this.groupProfile.groupID,
            avatar: this.avatar.trim()
        })
            .then(() => {
            this.showEditFaceUrl = false;
        })
            .catch(error => {
            this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_1__.showAction)({ msgType: _shared_data__WEBPACK_IMPORTED_MODULE_0__.MESSAGE_STATUS.error, message: error.message }));
        });
    }
    editName() {
        this.timHelper.tim
            .updateGroupProfile({
            groupID: this.groupProfile.groupID,
            name: this.name.trim()
        })
            .then(() => {
            this.showEditName = false;
        })
            .catch(error => {
            this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_1__.showAction)({ msgType: _shared_data__WEBPACK_IMPORTED_MODULE_0__.MESSAGE_STATUS.error, message: error.message }));
        });
    }
    editIntroduction() {
        this.timHelper.tim
            .updateGroupProfile({
            groupID: this.groupProfile.groupID,
            introduction: this.introduction.trim()
        })
            .then(() => {
            this.showEditIntroduction = false;
        })
            .catch(error => {
            this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_1__.showAction)({ msgType: _shared_data__WEBPACK_IMPORTED_MODULE_0__.MESSAGE_STATUS.error, message: error.message }));
        });
    }
    editNotification() {
        this.timHelper.tim
            .updateGroupProfile({
            groupID: this.groupProfile.groupID,
            notification: this.notification.trim()
        })
            .then(() => {
            this.showEditNotification = false;
        })
            .catch(error => {
            this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_1__.showAction)({ msgType: _shared_data__WEBPACK_IMPORTED_MODULE_0__.MESSAGE_STATUS.error, message: error.message }));
        });
    }
    editJoinOption() {
        this.timHelper.tim
            .updateGroupProfile({
            groupID: this.groupProfile.groupID,
            joinOption: this.joinOption
        })
            .then(() => {
            this.showEditJoinOption = false;
        })
            .catch(error => {
            this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_1__.showAction)({ msgType: _shared_data__WEBPACK_IMPORTED_MODULE_0__.MESSAGE_STATUS.error, message: error.message }));
        });
    }
    editMessageRemindType() {
        this.timHelper.tim
            .setMessageRemindType({
            groupID: this.groupProfile.groupID,
            messageRemindType: this.messageRemindType
        })
            .then(() => {
            this.showEditMessageRemindType = false;
        })
            .catch(error => {
            this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_1__.showAction)({ msgType: _shared_data__WEBPACK_IMPORTED_MODULE_0__.MESSAGE_STATUS.error, message: error.message }));
        });
    }
    editNameCard() {
        if (this.nameCard.trim().length === 0) {
            this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_1__.showAction)({ msgType: _shared_data__WEBPACK_IMPORTED_MODULE_0__.MESSAGE_STATUS.warning, message: '不能设置空的群名片' }));
            return;
        }
        this.timHelper.tim
            .setGroupMemberNameCard({
            groupID: this.groupProfile.groupID,
            nameCard: this.nameCard.trim()
        })
            .then(() => {
            this.showEditNameCard = false;
        })
            .catch(error => {
            this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_1__.showAction)({ msgType: _shared_data__WEBPACK_IMPORTED_MODULE_0__.MESSAGE_STATUS.error, message: error.message }));
        });
    }
    changeOwner() {
        this.timHelper.tim
            .changeGroupOwner({
            groupID: this.groupProfile.groupID,
            newOwnerID: this.newOwnerUserID,
        })
            .then(() => {
            this.showChangeGroupOwner = false;
            this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_1__.showAction)({
                msgType: _shared_data__WEBPACK_IMPORTED_MODULE_0__.MESSAGE_STATUS.success,
                message: `转让群主成功，新群主ID：${this.newOwnerUserID}`,
            }));
            this.newOwnerUserID = '';
        })
            .catch((error) => {
            (0,_store_actions__WEBPACK_IMPORTED_MODULE_1__.showAction)({
                msgType: _shared_data__WEBPACK_IMPORTED_MODULE_0__.MESSAGE_STATUS.error,
                message: error.message,
            });
        });
    }
    quitGroup() {
        this.timHelper.tim
            .quitGroup(this.groupProfile.groupID)
            .then(({ data: { groupID } }) => {
            this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_1__.showAction)({
                msgType: _shared_data__WEBPACK_IMPORTED_MODULE_0__.MESSAGE_STATUS.success,
                message: `退群成功`,
            }));
            if (groupID === this.groupProfile.groupID) {
                this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_1__.resetCurrentConversationAction)());
            }
        })
            .catch((error) => {
            (0,_store_actions__WEBPACK_IMPORTED_MODULE_1__.showAction)({
                msgType: _shared_data__WEBPACK_IMPORTED_MODULE_0__.MESSAGE_STATUS.error,
                message: error.message,
            });
        });
    }
    dismissGroup() {
        this.timHelper.tim
            .dismissGroup(this.groupProfile.groupID)
            .then(({ data: { groupID } }) => {
            this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_1__.showAction)({
                msgType: _shared_data__WEBPACK_IMPORTED_MODULE_0__.MESSAGE_STATUS.success,
                message: `群：${this.groupProfile.name || this.groupProfile.groupID}解散成功！`,
            }));
            if (groupID === this.groupProfile.groupID) {
                this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_1__.resetCurrentConversationAction)());
            }
        })
            .catch((error) => {
            (0,_store_actions__WEBPACK_IMPORTED_MODULE_1__.showAction)({
                msgType: _shared_data__WEBPACK_IMPORTED_MODULE_0__.MESSAGE_STATUS.error,
                message: error.message,
            });
        });
    }
    changeMuteStatus() {
        if (this.isOwner || this.isAdmin) {
            this.timHelper.tim
                .updateGroupProfile({
                muteAllMembers: this.muteAllMembers,
                groupID: this.groupProfile.groupID,
            })
                .then((imResponse) => {
                this.muteAllMembers = imResponse.data.group.muteAllMembers;
                if (this.muteAllMembers) {
                    this.active = true;
                    this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_1__.showAction)({
                        msgType: _shared_data__WEBPACK_IMPORTED_MODULE_0__.MESSAGE_STATUS.success,
                        message: `全体禁言`,
                    }));
                }
                else {
                    this.active = false;
                    this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_1__.showAction)({
                        msgType: _shared_data__WEBPACK_IMPORTED_MODULE_0__.MESSAGE_STATUS.success,
                        message: `取消全体禁言`,
                    }));
                }
            })
                .catch((error) => {
                this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_1__.showAction)({
                    msgType: _shared_data__WEBPACK_IMPORTED_MODULE_0__.MESSAGE_STATUS.error,
                    message: error.message,
                }));
            });
        }
        else {
            setTimeout(() => {
                this.muteAllMembers = this.groupProfile.muteAllMembers;
            }, 0);
            this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_1__.showAction)({
                msgType: _shared_data__WEBPACK_IMPORTED_MODULE_0__.MESSAGE_STATUS.error,
                message: '普通群成员不能对全体禁言',
            }));
        }
    }
}
GroupProfileComponent.ɵfac = function GroupProfileComponent_Factory(t) { return new (t || GroupProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_tim_helper_service__WEBPACK_IMPORTED_MODULE_2__.TimHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store)); };
GroupProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: GroupProfileComponent, selectors: [["app-group-profile"]], inputs: { currentConversation: "currentConversation" }, decls: 67, vars: 37, consts: [[3, "currentConversation"], [1, "group-info-content"], [1, "info-item"], [1, "label"], [1, "content"], ["nz-icon", "", "nzType", "edit", "nzTheme", "outline", "class", "edit", 3, "click", 4, "ngIf"], ["class", "content", 4, "ngIf"], ["nz-input", "", "placeholder", "\u56DE\u8F66\u786E\u8BA4", 3, "hidden", "ngModel", "ngModelChange", "keydown.enter", "blur"], ["groupAvatar", ""], ["class", "content text-ellipsis", 3, "title", 4, "ngIf"], ["autofocus", "", "nz-input", "", "placeholder", "\u56DE\u8F66\u786E\u8BA4", 3, "hidden", "ngModel", "ngModelChange", "keydown.enter", "blur"], ["groupName", ""], ["class", "long-content", 3, "title", 4, "ngIf"], ["groupIntroduction", ""], ["groupNotification", ""], ["class", "info-item", 4, "ngIf"], ["nz-icon", "", "nzType", "edit", "class", "edit", 3, "click", 4, "ngIf"], [3, "ngStyle", "ngModel", "hidden", "ngModelChange", "blur"], ["nzValue", "AcceptAndNotify", "nzLabel", "\u63A5\u6536\u6D88\u606F\u5E76\u63D0\u793A"], ["nzValue", "AcceptNotNotify", "nzLabel", "\u63A5\u6536\u6D88\u606F\u4F46\u4E0D\u63D0\u793A"], ["nzValue", "Discard", "nzLabel", "\u5C4F\u853D\u6D88\u606F"], ["nz-icon", "", "nzType", "edit", 1, "edit", 3, "click"], ["class", "content cursor-pointer", 4, "ngIf"], ["groupNameCard", ""], [1, "label", 3, "ngClass"], [3, "ngModel", "ngModelChange"], [4, "ngIf"], [3, "ngStyle", "click"], ["nz-icon", "", "nzType", "edit", "nzTheme", "outline", 1, "edit", 3, "click"], [3, "src"], [1, "content", "text-ellipsis", 3, "title"], [1, "long-content", 3, "title"], ["nzValue", "FreeAccess", "nzLabel", "\u81EA\u7531\u52A0\u5165"], ["nzValue", "NeedPermission", "nzLabel", "\u9700\u8981\u9A8C\u8BC1"], ["nzValue", "DisableApply", "nzLabel", "\u7981\u6B62\u52A0\u7FA4"], [1, "content", "cursor-pointer"], ["type", "text", 3, "click"], ["autofocus", "", "nz-input", "", "placeholder", "\u65B0\u7FA4\u4E3B\u7684userID", 3, "hidden", "ngModel", "ngModelChange", "keydown.enter", "blur"], ["type", "text", 3, "ngStyle", "click"]], template: function GroupProfileComponent_Template(rf, ctx) { if (rf & 1) {
        const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-group-member-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "\u7FA4ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, " \u7FA4\u5934\u50CF ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, GroupProfileComponent_i_11_Template, 1, 0, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, GroupProfileComponent_div_12_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function GroupProfileComponent_Template_input_ngModelChange_13_listener($event) { return ctx.avatar = $event; })("keydown.enter", function GroupProfileComponent_Template_input_keydown_enter_13_listener() { return ctx.editFaceUrl(); })("blur", function GroupProfileComponent_Template_input_blur_13_listener() { return ctx.showEditFaceUrl = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "\u7FA4\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, " \u7FA4\u540D\u79F0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, GroupProfileComponent_i_23_Template, 1, 0, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, GroupProfileComponent_div_24_Template, 2, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function GroupProfileComponent_Template_input_ngModelChange_25_listener($event) { return ctx.name = $event; })("keydown.enter", function GroupProfileComponent_Template_input_keydown_enter_25_listener() { return ctx.editName(); })("blur", function GroupProfileComponent_Template_input_blur_25_listener() { return ctx.showEditName = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, " \u7FA4\u4ECB\u7ECD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, GroupProfileComponent_i_30_Template, 1, 0, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, GroupProfileComponent_div_31_Template, 2, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "input", 10, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function GroupProfileComponent_Template_input_ngModelChange_32_listener($event) { return ctx.introduction = $event; })("keydown.enter", function GroupProfileComponent_Template_input_keydown_enter_32_listener() { return ctx.editIntroduction(); })("blur", function GroupProfileComponent_Template_input_blur_32_listener() { return ctx.showEditIntroduction = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, " \u7FA4\u516C\u544A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](37, GroupProfileComponent_i_37_Template, 1, 0, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](38, GroupProfileComponent_div_38_Template, 2, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "input", 10, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function GroupProfileComponent_Template_input_ngModelChange_39_listener($event) { return ctx.notification = $event; })("keydown.enter", function GroupProfileComponent_Template_input_keydown_enter_39_listener() { return ctx.editNotification(); })("blur", function GroupProfileComponent_Template_input_blur_39_listener() { return ctx.showEditNotification = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](41, GroupProfileComponent_div_41_Template, 9, 6, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, " \u7FA4\u6D88\u606F\u63D0\u793A\u7C7B\u578B ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](45, GroupProfileComponent_i_45_Template, 1, 0, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](46, GroupProfileComponent_div_46_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "nz-select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function GroupProfileComponent_Template_nz_select_ngModelChange_47_listener($event) { return ctx.messageRemindType = $event; })("ngModelChange", function GroupProfileComponent_Template_nz_select_ngModelChange_47_listener() { return ctx.editMessageRemindType(); })("blur", function GroupProfileComponent_Template_nz_select_blur_47_listener() { return ctx.showEditMessageRemindType = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](48, "nz-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](49, "nz-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](50, "nz-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, " \u6211\u7684\u7FA4\u540D\u7247 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function GroupProfileComponent_Template_i_click_54_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r44); const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](57); ctx.showEditNameCard = true; return ctx.inputFocus(_r16); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](55, GroupProfileComponent_div_55_Template, 2, 1, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "input", 10, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function GroupProfileComponent_Template_input_ngModelChange_56_listener($event) { return ctx.nameCard = $event; })("keydown.enter", function GroupProfileComponent_Template_input_keydown_enter_56_listener() { return ctx.editNameCard(); })("blur", function GroupProfileComponent_Template_input_blur_56_listener() { return ctx.showEditNameCard = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "\u5168\u4F53\u7981\u8A00");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "nz-switch", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function GroupProfileComponent_Template_nz_switch_ngModelChange_61_listener($event) { return ctx.muteAllMembers = $event; })("ngModelChange", function GroupProfileComponent_Template_nz_switch_ngModelChange_61_listener() { return ctx.changeMuteStatus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](62, GroupProfileComponent_div_62_Template, 4, 2, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function GroupProfileComponent_Template_a_click_64_listener() { return ctx.quitGroup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65, "\u9000\u51FA\u7FA4\u7EC4");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](66, GroupProfileComponent_div_66_Template, 3, 2, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("currentConversation", ctx.currentConversation);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.groupProfile.groupID);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.editable);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.showEditFaceUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", !ctx.showEditFaceUrl)("ngModel", ctx.avatar);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.groupType);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.editable);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.showEditName);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", !ctx.showEditName)("ngModel", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.editable);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.showEditIntroduction);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", !ctx.showEditIntroduction)("ngModel", ctx.introduction);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.editable);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.showEditNotification);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", !ctx.showEditNotification)("ngModel", ctx.notification);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.groupProfile.type !== "Private");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.editable);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.showEditMessageRemindType);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](33, _c0))("ngModel", ctx.messageRemindType)("hidden", !ctx.showEditMessageRemindType);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.showEditNameCard);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", !ctx.showEditNameCard)("ngModel", ctx.nameCard);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](34, _c2, ctx.active));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.muteAllMembers);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isOwner);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](36, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showDissmissGroup);
    } }, directives: [_group_group_member_list_group_member_list_component__WEBPACK_IMPORTED_MODULE_3__.GroupMemberListComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__.NzSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgStyle, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__.NzOptionComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__.NzIconDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_13__.NzSwitchComponent, _avatar_avatar_component__WEBPACK_IMPORTED_MODULE_4__.AvatarComponent], styles: [".group-info-content[_ngcontent-%COMP%] {\n  padding: 10px 10px;\n}\n.group-info-content[_ngcontent-%COMP%]   im-avatar[_ngcontent-%COMP%]     .avatar {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n}\n.edit[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 16px;\n}\n.info-item[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.info-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #a5b5c1;\n}\n.info-item[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: #000;\n}\n.info-item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  color: #404953;\n  word-wrap: break-word;\n  word-break: break-all;\n}\n.info-item[_ngcontent-%COMP%]   .long-content[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 3;\n}\n.cursor-pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px;\n  height: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyb3VwLXByb2ZpbGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGO0FBRkE7RUFLTSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQU47QUFLQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FBSEY7QUFNQTtFQUNFLG1CQUFBO0FBSkY7QUFHQTtFQUlJLGVBQUE7RUFDQSxjQUFBO0FBSko7QUFEQTtFQVNJLFdBQUE7QUFMSjtBQUpBO0VBYUksY0FBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUFOSjtBQVRBO0VBbUJJLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtBQVBKO0FBV0E7RUFDRSxlQUFBO0FBVEY7QUFDQSxhQUFhO0FBWWI7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQVZGIiwiZmlsZSI6Imdyb3VwLXByb2ZpbGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JvdXAtaW5mby1jb250ZW50IHtcbiAgcGFkZGluZzogMTBweCAxMHB4O1xuXG4gIGltLWF2YXRhciA6Om5nLWRlZXAge1xuICAgIC5hdmF0YXIge1xuICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuICB9XG59XG5cbi5lZGl0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5pbmZvLWl0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuXG4gIC5sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjYTViNWMxO1xuICB9XG5cbiAgLmFjdGl2ZSB7XG4gICAgY29sb3I6ICMwMDA7XG4gIH1cblxuICAuY29udGVudCB7XG4gICAgY29sb3I6ICM0MDQ5NTM7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgfVxuXG4gIC5sb25nLWNvbnRlbnQge1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xuICB9XG59XG5cbi5jdXJzb3ItcG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyog6K6+572u5rua5Yqo5p2h55qE5qC35byPICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDBweDtcbiAgaGVpZ2h0OiAwcHg7XG59XG4iXX0= */"] });


/***/ }),

/***/ 39032:
/*!***********************************************************************************************************************************!*\
  !*** ./projects/ngx-tencent-im/src/conversation/conversation-profile/conversation-profile/user-profile/user-profile.component.ts ***!
  \***********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserProfileComponent": function() { return /* binding */ UserProfileComponent; }
/* harmony export */ });
/* harmony import */ var tim_js_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tim-js-sdk */ 92882);
/* harmony import */ var tim_js_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tim_js_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _avatar_avatar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../avatar/avatar.component */ 50008);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);




function UserProfileComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx_r0.userProfile.nick);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.userProfile.nick, " ");
} }
function UserProfileComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " [Anonymous] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function UserProfileComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r3.genderClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx_r3.gender);
} }
class UserProfileComponent {
    constructor() { }
    ngOnInit() {
    }
    get gender() {
        switch (this.userProfile.gender) {
            case (tim_js_sdk__WEBPACK_IMPORTED_MODULE_0___default().TYPES.GENDER_MALE):
                return '男';
            case (tim_js_sdk__WEBPACK_IMPORTED_MODULE_0___default().TYPES.GENDER_FEMALE):
                return '女';
            default:
                return '未设置';
        }
    }
    get genderClass() {
        switch (this.userProfile.gender) {
            case (tim_js_sdk__WEBPACK_IMPORTED_MODULE_0___default().TYPES.GENDER_MALE):
                return 'icon-male';
            case (tim_js_sdk__WEBPACK_IMPORTED_MODULE_0___default().TYPES.GENDER_FEMALE):
                return 'icon-female';
            default:
                return '';
        }
    }
}
UserProfileComponent.ɵfac = function UserProfileComponent_Factory(t) { return new (t || UserProfileComponent)(); };
UserProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: UserProfileComponent, selectors: [["app-user-profile"]], inputs: { userProfile: "userProfile" }, decls: 7, vars: 6, consts: [[1, "profile-user"], [3, "title", "src", "size"], [1, "nick-name", "text-ellipsis"], [3, "title", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], ["class", "gender", 4, "ngIf"], [3, "title"], ["title", "\u8BE5\u7528\u6237\u672A\u8BBE\u7F6E\u6635\u79F0", 1, "anonymous"], [1, "gender"], [1, "iconfont", 3, "title"]], template: function UserProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "im-avatar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, UserProfileComponent_span_3_Template, 2, 2, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, UserProfileComponent_ng_template_4_Template, 2, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, UserProfileComponent_div_6_Template, 2, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx.userProfile.userID)("src", ctx.userProfile.avatar)("size", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.userProfile.nick)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.genderClass);
    } }, directives: [_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_1__.AvatarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], styles: [".profile-user[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  padding: 20px;\n}\n.profile-user[_ngcontent-%COMP%]   .nick-name[_ngcontent-%COMP%] {\n  width: 100%;\n  color: #1c2438;\n  font-size: 20px;\n  font-weight: bold;\n  text-shadow: #76828c 0 0 0.1em;\n}\n.profile-user[_ngcontent-%COMP%]   .nick-name[_ngcontent-%COMP%]   .anonymous[_ngcontent-%COMP%] {\n  color: #99a8b4;\n  text-shadow: none;\n}\n.profile-user[_ngcontent-%COMP%]   .gender[_ngcontent-%COMP%] {\n  padding: 5px 0 10px 0;\n  border-bottom: 1px solid #e7e7e7;\n}\n.profile-user[_ngcontent-%COMP%]   .btn-add-blacklist[_ngcontent-%COMP%] {\n  color: #f35f5f;\n}\n.icon-male[_ngcontent-%COMP%] {\n  color: #2d8cf0;\n}\n.icon-female[_ngcontent-%COMP%] {\n  color: #ff8096;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItcHJvZmlsZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFDRjtBQUpBO0VBTUksV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtBQUNKO0FBWEE7RUFhTSxjQUFBO0VBQ0EsaUJBQUE7QUFDTjtBQWZBO0VBbUJJLHFCQUFBO0VBQ0EsZ0NBQUE7QUFESjtBQW5CQTtFQXdCSSxjQUFBO0FBRko7QUFNQTtFQUNFLGNBQUE7QUFKRjtBQU9BO0VBQ0UsY0FBQTtBQUxGIiwiZmlsZSI6InVzZXItcHJvZmlsZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLXVzZXIge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4O1xuXG4gIC5uaWNrLW5hbWUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiAjMWMyNDM4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LXNoYWRvdzogIzc2ODI4YyAwIDAgMC4xZW07XG5cbiAgICAuYW5vbnltb3VzIHtcbiAgICAgIGNvbG9yOiAjOTlhOGI0O1xuICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLmdlbmRlciB7XG4gICAgcGFkZGluZzogNXB4IDAgMTBweCAwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTdlN2U3O1xuICB9XG5cbiAgLmJ0bi1hZGQtYmxhY2tsaXN0IHtcbiAgICBjb2xvcjogI2YzNWY1ZjtcbiAgfVxufVxuXG4uaWNvbi1tYWxlIHtcbiAgY29sb3I6ICMyZDhjZjA7XG59XG5cbi5pY29uLWZlbWFsZSB7XG4gIGNvbG9yOiAjZmY4MDk2O1xufVxuIl19 */"] });


/***/ }),

/***/ 71337:
/*!*********************************************************************************************************!*\
  !*** ./projects/ngx-tencent-im/src/conversation/current-conversation/current-conversation.component.ts ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrentConversationComponent": function() { return /* binding */ CurrentConversationComponent; }
/* harmony export */ });
/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/selectors */ 29716);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/actions */ 10771);
/* harmony import */ var _shared_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared.data */ 54825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 17562);
/* harmony import */ var _tim_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tim-helper.service */ 92789);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _message_message_item_message_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../message/message-item/message-item.component */ 39437);
/* harmony import */ var _message_message_send_box_message_send_box_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../message/message-send-box/message-send-box.component */ 64038);









const _c0 = ["messageList"];
function CurrentConversationComponent_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CurrentConversationComponent_div_1_div_4_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r7.getMore(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "\u67E5\u770B\u66F4\u591A");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function CurrentConversationComponent_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\u6CA1\u6709\u66F4\u591A\u4E86");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function CurrentConversationComponent_div_1_app_message_item_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-message-item", 14);
} if (rf & 2) {
    const message_r9 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("message", message_r9)("currentConversation", ctx_r4.currentConversation);
} }
function CurrentConversationComponent_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CurrentConversationComponent_div_1_div_7_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r10.scrollMessageListToBottom(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\u56DE\u5230\u6700\u65B0\u4F4D\u7F6E");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function CurrentConversationComponent_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-message-send-box");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function CurrentConversationComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("scroll", function CurrentConversationComponent_div_1_Template_div_scroll_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r12.onscroll($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("scroll", function CurrentConversationComponent_div_1_Template_div_scroll_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r14.onscroll($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, CurrentConversationComponent_div_1_div_4_Template, 3, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, CurrentConversationComponent_div_1_div_5_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, CurrentConversationComponent_div_1_app_message_item_6_Template, 1, 2, "app-message-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, CurrentConversationComponent_div_1_div_7_Template, 2, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, CurrentConversationComponent_div_1_div_8_Template, 2, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r0.isCompleted);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.isCompleted);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.currentMessageList);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.isShowScrollBottomTips);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.showMessageSendBox);
} }
class CurrentConversationComponent {
    constructor(store, cd, timHelperService) {
        this.store = store;
        this.cd = cd;
        this.timHelperService = timHelperService;
        this.currentMessageList = [];
        this.isShowScrollBottomTips = false;
        this.isCompleted = false;
        this.preScrollHeight = 0;
    }
    get showCurrentConversation() {
        var _a;
        return !!((_a = this.currentConversation) === null || _a === void 0 ? void 0 : _a.conversationID);
    }
    get showMessageSendBox() {
        return (this.currentConversation.type !== _shared_data__WEBPACK_IMPORTED_MODULE_2__.TIM.TYPES.CONV_SYSTEM);
    }
    ngOnInit() {
        // 获取当前会话
        this.currentConversationSubscription = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_0__.currentConversationSelector).subscribe(res => {
            this.currentConversation = res;
            this.preScrollHeight = 0;
            this.cd.markForCheck();
        });
        this.conversationSubscription = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_0__.conversationSelector)
            .subscribe(res => {
            this.currentMessageList = res.currentMessageList;
            this.isCompleted = res.isCompleted;
            if (res.currentMessageList && res.currentMessageList.length > 0) {
                if (this.currentConversation.conversationID) {
                    this.keepMessageListOnBottom();
                    this.timHelperService.tim.setMessageRead({ conversationID: this.currentConversation.conversationID });
                }
            }
            this.cd.markForCheck();
        }, err => {
            this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_1__.showAction)({ msgType: _shared_data__WEBPACK_IMPORTED_MODULE_2__.MESSAGE_STATUS.error, message: err.message }));
        });
        this.eventBusSubscription = this.timHelperService.eventBus$
            .subscribe((res) => {
            if (res === 'scroll-bottom') {
                this.scrollMessageListToBottom();
                this.cd.markForCheck();
            }
        });
    }
    ;
    ngAfterViewInit() {
        this.keepMessageListOnBottom();
    }
    getMore() {
        this.timHelperService.getMessageList(this.currentConversation.conversationID);
    }
    onscroll({ target: { scrollTop } }) {
        var _a;
        let messageListNode = (_a = this.messageListRef) === null || _a === void 0 ? void 0 : _a.nativeElement;
        if (!messageListNode) {
            return;
        }
        if (this.preScrollHeight - messageListNode.clientHeight - scrollTop < 20) {
            this.isShowScrollBottomTips = false;
        }
    }
    scrollMessageListToBottom() {
        var _a;
        let messageListNode = (_a = this.messageListRef) === null || _a === void 0 ? void 0 : _a.nativeElement;
        if (!messageListNode) {
            return;
        }
        setTimeout(() => {
            messageListNode.scrollTop = messageListNode.scrollHeight;
            this.preScrollHeight = messageListNode.scrollHeight;
            this.isShowScrollBottomTips = false;
        }, 0);
    }
    // 如果滚到底部就保持在底部，否则提示是否要滚到底部
    keepMessageListOnBottom() {
        var _a;
        let messageListNode = (_a = this.messageListRef) === null || _a === void 0 ? void 0 : _a.nativeElement;
        if (!messageListNode) {
            return;
        }
        setTimeout(() => {
            // 距离底部20px内强制滚到底部,否则提示有新消息
            if (this.preScrollHeight - messageListNode.clientHeight - messageListNode.scrollTop < 20) {
                messageListNode.scrollTop = messageListNode.scrollHeight;
                this.isShowScrollBottomTips = false;
            }
            else {
                this.isShowScrollBottomTips = true;
            }
            this.preScrollHeight = messageListNode.scrollHeight;
        }, 0);
    }
    ngOnDestroy() {
        [
            this.eventBusSubscription,
            this.conversationSubscription,
            this.currentConversationSubscription
        ].forEach(item => {
            if (item) {
                item.unsubscribe();
            }
        });
    }
}
CurrentConversationComponent.ɵfac = function CurrentConversationComponent_Factory(t) { return new (t || CurrentConversationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_tim_helper_service__WEBPACK_IMPORTED_MODULE_3__.TimHelperService)); };
CurrentConversationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: CurrentConversationComponent, selectors: [["app-current-conversation"]], viewQuery: function CurrentConversationComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.messageListRef = _t.first);
    } }, decls: 2, vars: 1, consts: [[1, "current-conversation-wrapper"], ["class", "current-conversation", 3, "scroll", 4, "ngIf"], [1, "current-conversation", 3, "scroll"], [1, "content"], [1, "message-list", 3, "scroll"], ["messageList", ""], ["class", "more", 4, "ngIf"], ["class", "no-more", 4, "ngIf"], [3, "message", "currentConversation", 4, "ngFor", "ngForOf"], ["class", "newMessageTips", 3, "click", 4, "ngIf"], ["class", "footer", 4, "ngIf"], [1, "more"], [3, "click"], [1, "no-more"], [3, "message", "currentConversation"], [1, "newMessageTips", 3, "click"], [1, "footer"]], template: function CurrentConversationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CurrentConversationComponent_div_1_Template, 9, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showCurrentConversation);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _message_message_item_message_item_component__WEBPACK_IMPORTED_MODULE_4__.MessageItemComponent, _message_message_send_box_message_send_box_component__WEBPACK_IMPORTED_MODULE_5__.MessageSendBoxComponent], styles: [".current-conversation-wrapper[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  color: #1c2438;\n  display: flex;\n  height: 75vh;\n}\n.current-conversation-wrapper[_ngcontent-%COMP%]   .current-conversation[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n.current-conversation-wrapper[_ngcontent-%COMP%]   .more[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  font-size: 12px;\n}\n.current-conversation-wrapper[_ngcontent-%COMP%]   .no-more[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  color: #a5b5c1;\n  font-size: 12px;\n  padding: 10px 10px;\n}\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  overflow: hidden;\n  position: relative;\n}\n.content[_ngcontent-%COMP%]   .message-list[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n  overflow-y: scroll;\n  padding: 0 20px;\n}\n.content[_ngcontent-%COMP%]   .newMessageTips[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  padding: 5px;\n  width: 120px;\n  margin: auto;\n  left: 0;\n  right: 0;\n  bottom: 5px;\n  font-size: 12px;\n  text-align: center;\n  border-radius: 10px;\n  border: #e9eaec 1px solid;\n  background-color: #fff;\n  color: #2d8cf0;\n}\n.footer[_ngcontent-%COMP%] {\n  border-top: 1px solid #e7e7e7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1cnJlbnQtY29udmVyc2F0aW9uLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGFBQWE7QUFDYjtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBQ0Y7QUFMQTtFQU9JLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFDSjtBQVZBO0VBYUksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQUFKO0FBZkE7RUFtQkksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQURKO0FBS0E7RUFDRSxhQUFBO0VBQ0EsT0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUhGO0FBRkE7RUFRSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFISjtBQVJBO0VBZUksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQUpKO0FBUUE7RUFDRSw2QkFBQTtBQU5GIiwiZmlsZSI6ImN1cnJlbnQtY29udmVyc2F0aW9uLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyog5b2T5YmN5Lya6K+d55qE6aqo5p625bGPICovXG4uY3VycmVudC1jb252ZXJzYXRpb24td3JhcHBlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIGNvbG9yOiAjMWMyNDM4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDc1dmg7XG5cbiAgLmN1cnJlbnQtY29udmVyc2F0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAubW9yZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cblxuICAubm8tbW9yZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjb2xvcjogI2E1YjVjMTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xuICB9XG59XG5cbi5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIC5tZXNzYWdlLWxpc3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgfVxuXG4gIC5uZXdNZXNzYWdlVGlwcyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogNXB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3JkZXI6ICNlOWVhZWMgMXB4IHNvbGlkO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgY29sb3I6ICMyZDhjZjA7XG4gIH1cbn1cblxuLmZvb3RlciB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTdlN2U3O1xufVxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 64468:
/*!***********************************************************!*\
  !*** ./projects/ngx-tencent-im/src/conversation/index.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConversationItemComponent": function() { return /* reexport safe */ _conversation_item_conversation_item_component__WEBPACK_IMPORTED_MODULE_0__.ConversationItemComponent; },
/* harmony export */   "ConversationListComponent": function() { return /* reexport safe */ _conversation_list_conversation_list_component__WEBPACK_IMPORTED_MODULE_1__.ConversationListComponent; },
/* harmony export */   "CurrentConversationComponent": function() { return /* reexport safe */ _current_conversation_current_conversation_component__WEBPACK_IMPORTED_MODULE_2__.CurrentConversationComponent; }
/* harmony export */ });
/* harmony import */ var _conversation_item_conversation_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conversation-item/conversation-item.component */ 21777);
/* harmony import */ var _conversation_list_conversation_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conversation-list/conversation-list.component */ 11663);
/* harmony import */ var _current_conversation_current_conversation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./current-conversation/current-conversation.component */ 71337);





/***/ }),

/***/ 70830:
/*!**********************************************************************************!*\
  !*** ./projects/ngx-tencent-im/src/group/create-group/create-group.component.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateGroupComponent": function() { return /* binding */ CreateGroupComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 80639);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 83720);
/* harmony import */ var _shared_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared.data */ 54825);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/actions */ 10771);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 17562);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var _tim_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tim-helper.service */ 92789);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/form */ 32734);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/radio */ 31031);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);


















const _c0 = ["search"];
function CreateGroupComponent_nz_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "nz-option", 24);
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzLabel", item_r3.label)("nzValue", item_r3.value);
} }
function CreateGroupComponent_nz_option_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "nz-option", 24);
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzLabel", item_r4)("nzValue", item_r4);
} }
const _c1 = function () { return { minRows: 3, maxRows: 5 }; };
class CreateGroupComponent {
    constructor(fb, store, cd, modalRef, timeHelper) {
        this.fb = fb;
        this.store = store;
        this.cd = cd;
        this.modalRef = modalRef;
        this.timeHelper = timeHelper;
        this.captchaTooltipIcon = {
            type: 'info-circle',
            theme: 'twotone'
        };
        this.groupTypeOption = [
            { label: 'Work', value: _shared_data__WEBPACK_IMPORTED_MODULE_0__.TIM_TYPES.GRP_WORK },
            { label: 'Public', value: _shared_data__WEBPACK_IMPORTED_MODULE_0__.TIM_TYPES.GRP_PUBLIC },
            { label: 'Meeting', value: _shared_data__WEBPACK_IMPORTED_MODULE_0__.TIM_TYPES.GRP_MEETING },
            { label: 'AVChatRoom', value: _shared_data__WEBPACK_IMPORTED_MODULE_0__.TIM_TYPES.GRP_AVCHATROOM },
        ];
        this.memberListOfOption = [];
        this.loading = false;
    }
    ngOnInit() {
        this.validateForm = this.fb.group({
            groupID: [null, []],
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            type: [_shared_data__WEBPACK_IMPORTED_MODULE_0__.TIM_TYPES.GRP_WORK, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            avatar: [null, []],
            introduction: [],
            notification: [null, []],
            joinOption: [{ value: 'FreeAccess', disabled: true }, []],
            memberList: [[], []]
        });
        this.validateForm.get('type').valueChanges.subscribe((value) => {
            switch (value) {
                case _shared_data__WEBPACK_IMPORTED_MODULE_0__.TIM_TYPES.GRP_WORK:
                    this.validateForm.get('joinOption').disable();
                    this.validateForm.get('memberList').enable();
                    break;
                case _shared_data__WEBPACK_IMPORTED_MODULE_0__.TIM_TYPES.GRP_PUBLIC:
                    this.validateForm.get('joinOption').enable();
                    this.validateForm.get('memberList').enable();
                    break;
                case _shared_data__WEBPACK_IMPORTED_MODULE_0__.TIM_TYPES.GRP_MEETING:
                    this.validateForm.get('joinOption').disable();
                    this.validateForm.get('memberList').enable();
                    break;
                case _shared_data__WEBPACK_IMPORTED_MODULE_0__.TIM_TYPES.GRP_AVCHATROOM:
                    this.validateForm.get('joinOption').disable();
                    this.validateForm.get('memberList').disable();
                    break;
                default:
                    break;
            }
        });
        this.nzSelect.nzOnSearch.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(600), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.distinctUntilChanged)())
            .subscribe((res) => {
            this.handleSearchUser(res);
        });
    }
    handleSearchUser(userID) {
        if (userID !== '') {
            this.loading = true;
            this.timeHelper.tim.getUserProfile({ userIDList: [userID] }).then(({ data }) => {
                this.memberListOfOption = data.map(item => item.userID);
                this.loading = false;
                this.cd.markForCheck();
            }).catch((error) => {
                this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_1__.showAction)({
                    msgType: _shared_data__WEBPACK_IMPORTED_MODULE_0__.MESSAGE_STATUS.error,
                    message: error.message
                }));
            });
        }
    }
    submitForm() {
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }
        this.timeHelper.tim.createGroup(this.getOptions()).then((imResponse) => {
            this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_1__.showAction)({
                msgType: _shared_data__WEBPACK_IMPORTED_MODULE_0__.MESSAGE_STATUS.success,
                message: `群组：【${imResponse.data.group.name}】创建成功`
            }));
            this.modalRef.destroy();
        }).catch(error => {
            this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_1__.showAction)({
                msgType: _shared_data__WEBPACK_IMPORTED_MODULE_0__.MESSAGE_STATUS.error,
                message: error.message
            }));
        });
    }
    getOptions() {
        let options = Object.assign(Object.assign({}, this.validateForm.value), { memberList: this.validateForm.value.memberList.map(userID => ({ userID })) });
        if ([_shared_data__WEBPACK_IMPORTED_MODULE_0__.TIM_TYPES.GRP_WORK, _shared_data__WEBPACK_IMPORTED_MODULE_0__.TIM_TYPES.GRP_AVCHATROOM].includes(this.validateForm.value.type)) {
            delete options.joinOption;
        }
        return options;
    }
}
CreateGroupComponent.ɵfac = function CreateGroupComponent_Factory(t) { return new (t || CreateGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_8__.NzModalRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_tim_helper_service__WEBPACK_IMPORTED_MODULE_2__.TimHelperService)); };
CreateGroupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CreateGroupComponent, selectors: [["im-create-group"]], viewQuery: function CreateGroupComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.nzSelect = _t.first);
    } }, decls: 58, vars: 44, consts: [["nz-form", "", 3, "formGroup", "ngSubmit"], ["nzFor", "groupID", 3, "nzSm", "nzXs"], [3, "nzSm", "nzXs"], ["nz-input", "", "formControlName", "groupID", "id", "groupID"], ["nzRequired", "", 3, "nzSm", "nzXs"], ["nzErrorTip", "\u8BF7\u8F93\u5165\u540D\u79F0!", 3, "nzSm", "nzXs"], ["nz-input", "", "formControlName", "name"], ["formControlName", "type"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["nzFor", "avatar", 3, "nzSm", "nzXs"], ["nz-input", "", "id", "avatar", "formControlName", "avatar", "placeholder", "avatar"], ["nz-input", "", "formControlName", "introduction", "placeholder", "\u7FA4\u7B80\u4ECB", 3, "maxlength", "nzAutosize"], ["nz-input", "", "formControlName", "notification", "placeholder", "\u7FA4\u516C\u544A", 3, "maxlength", "nzAutosize"], ["formControlName", "joinOption"], ["nz-radio", "", "nzValue", "FreeAccess"], ["nz-radio", "", "nzValue", "NeedPermission"], ["nz-radio", "", "nzValue", "DisableApply"], ["nzMode", "multiple", "nzPlaceHolder", "\u8BF7\u8F93\u5165\u7FA4\u6210\u5458 userID", "formControlName", "memberList", 3, "nzLoading"], ["search", ""], ["nz-row", "", "nzJustify", "center"], ["nzPush", "8", 3, "nzSpan"], ["nz-button", "", "nzType", "primary"], [3, "nzSpan"], ["nz-button", "", "nzType", "default", "type", "button", 3, "click"], [3, "nzLabel", "nzValue"]], template: function CreateGroupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function CreateGroupComponent_Template_form_ngSubmit_0_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\u7FA4ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "nz-form-control", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "nz-form-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "\u7FA4\u540D\u79F0");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "nz-form-control", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "nz-form-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "\u7FA4\u7C7B\u578B ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "nz-form-control", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "nz-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, CreateGroupComponent_nz_option_17_Template, 1, 2, "nz-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "nz-form-label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "\u7FA4\u5934\u50CF\u5730\u5740");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "nz-form-control", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "nz-form-label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "\u7FA4\u7B80\u4ECB");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "nz-form-control", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "nz-form-label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "\u7FA4\u516C\u544A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "nz-form-control", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "textarea", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "nz-form-label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "\u52A0\u7FA4\u65B9\u5F0F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "nz-form-control", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "nz-radio-group", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "\u81EA\u7531\u52A0\u7FA4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "\u9700\u8981\u9A8C\u8BC1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "\u7981\u6B62\u52A0\u7FA4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "nz-form-label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "\u7FA4\u6210\u5458\u5217\u8868 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "nz-form-control", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "nz-select", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](50, CreateGroupComponent_nz_option_50_Template, 1, 2, "nz-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "nz-form-item", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "nz-form-control", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "\u7ACB\u5373\u521B\u5EFA");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "nz-form-control", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CreateGroupComponent_Template_button_click_56_listener() { return ctx.modalRef.destroy(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "\u53D6\u6D88");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.validateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.groupTypeOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("maxlength", 240)("nzAutosize", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](42, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("maxlength", 300)("nzAutosize", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](43, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzLoading", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.memberListOfOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSpan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSpan", 12);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__.NzFormItemComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__.NzSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__.NzAutosizeDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxLengthValidator, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_14__.NzRadioGroupComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_14__.NzRadioComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_16__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_17__["ɵNzTransitionPatchDirective"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__.NzOptionComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtZ3JvdXAuY29tcG9uZW50Lmxlc3MifQ== */"], changeDetection: 0 });


/***/ }),

/***/ 64259:
/*!******************************************************************************!*\
  !*** ./projects/ngx-tencent-im/src/group/group-item/group-item.component.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupItemComponent": function() { return /* binding */ GroupItemComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _tim_helper_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../tim-helper.service */ 92789);
/* harmony import */ var _avatar_avatar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../avatar/avatar.component */ 50008);



class GroupItemComponent {
    constructor(timHelperService) {
        this.timHelperService = timHelperService;
    }
    ngOnInit() {
    }
    handleGroupClick() {
        const conversationID = `GROUP${this.group.groupID}`;
        this.timHelperService.checkoutConversation(conversationID);
    }
}
GroupItemComponent.ɵfac = function GroupItemComponent_Factory(t) { return new (t || GroupItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_tim_helper_service__WEBPACK_IMPORTED_MODULE_0__.TimHelperService)); };
GroupItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: GroupItemComponent, selectors: [["app-group-item"]], inputs: { group: "group" }, decls: 5, vars: 2, consts: [[1, "scroll-container", 3, "click"], [1, "group-item"], [3, "src"], [1, "group-name", "text-ellipsis"]], template: function GroupItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GroupItemComponent_Template_div_click_0_listener() { return ctx.handleGroupClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "im-avatar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.group == null ? null : ctx.group.avatar);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.group == null ? null : ctx.group.name);
    } }, directives: [_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_1__.AvatarComponent], styles: [".scroll-container[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  flex: 1;\n}\n.scroll-container[_ngcontent-%COMP%]   .group-item[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 10px 20px;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n  transition: 0.2s;\n}\n.scroll-container[_ngcontent-%COMP%]   .group-item[_ngcontent-%COMP%]:hover {\n  background-color: #404953;\n}\n.scroll-container[_ngcontent-%COMP%]   .group-item[_ngcontent-%COMP%]   im-avatar[_ngcontent-%COMP%]  .avatar {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  margin-right: 10px;\n  flex-shrink: 0;\n}\n.scroll-container[_ngcontent-%COMP%]   .group-item[_ngcontent-%COMP%]   .group-name[_ngcontent-%COMP%] {\n  flex: 1;\n  color: #f7f7f8;\n  line-height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyb3VwLWl0ZW0uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLE9BQUE7QUFDRjtBQUhBO0VBS0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNKO0FBQ0k7RUFDRSx5QkFBQTtBQUNOO0FBZEE7RUFrQlEsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQURSO0FBckJBO0VBMkJNLE9BQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFITiIsImZpbGUiOiJncm91cC1pdGVtLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjcm9sbC1jb250YWluZXIge1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIGZsZXg6IDE7XG5cbiAgLmdyb3VwLWl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA0OTUzO1xuICAgIH1cblxuICAgIGltLWF2YXRhcjo6bmctZGVlcCB7XG4gICAgICAuYXZhdGFyIHtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5ncm91cC1uYW1lIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBjb2xvcjogI2Y3ZjdmODtcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIH1cbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 57652:
/*!******************************************************************************!*\
  !*** ./projects/ngx-tencent-im/src/group/group-list/group-list.component.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupListComponent": function() { return /* binding */ GroupListComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 80639);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 83720);
/* harmony import */ var _shared_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared.data */ 54825);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/actions */ 10771);
/* harmony import */ var _store_selectors_group_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/selectors/group.selector */ 57087);
/* harmony import */ var _create_group_create_group_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../create-group/create-group.component */ 70830);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ 17562);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var _tim_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../tim-helper.service */ 92789);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _group_item_group_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../group-item/group-item.component */ 64259);














const _c0 = ["search"];
function GroupListComponent_nz_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "nz-option", 9);
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzLabel", item_r3.groupID)("nzValue", item_r3);
} }
function GroupListComponent_app_group_item_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-group-item", 10);
} if (rf & 2) {
    const group_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("group", group_r4);
} }
class GroupListComponent {
    constructor(store, cd, modal, timHelper) {
        this.store = store;
        this.cd = cd;
        this.modal = modal;
        this.timHelper = timHelper;
        this.loading = false;
        this.groupList = [];
        this.groupListOfOption = [];
    }
    ngOnInit() {
        this.subscription = this.store.select(_store_selectors_group_selector__WEBPACK_IMPORTED_MODULE_2__.groupListSelector).subscribe(res => {
            this.groupList = res;
            this.cd.markForCheck();
        });
        this.selectGroup.nzOnSearch.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.debounceTime)(600), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.distinctUntilChanged)())
            .subscribe((res) => {
            this.searchGroupByID(res);
        });
    }
    searchGroupByID(queryString) {
        if (queryString.trim().length > 0) {
            this.loading = true;
            this.timHelper.tim
                .searchGroupByID(queryString)
                .then(({ data: { group } }) => {
                this.groupListOfOption = [group];
                this.cd.markForCheck();
                this.loading = false;
            })
                .catch(() => {
                this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_1__.showAction)({
                    msgType: _shared_data__WEBPACK_IMPORTED_MODULE_0__.MESSAGE_STATUS.error,
                    message: '没有找到该群'
                }));
                this.loading = false;
            });
        }
    }
    applyJoinGroup(group) {
        this.timHelper.tim
            .joinGroup({ groupID: group.groupID })
            .then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            switch (res.data.status) {
                case _shared_data__WEBPACK_IMPORTED_MODULE_0__.TIM.TYPES.JOIN_STATUS_WAIT_APPROVAL:
                    this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_1__.showAction)({
                        msgType: _shared_data__WEBPACK_IMPORTED_MODULE_0__.MESSAGE_STATUS.info,
                        message: '申请成功，等待群管理员确认！'
                    }));
                    this.group = null;
                    this.groupListOfOption = [];
                    break;
                case _shared_data__WEBPACK_IMPORTED_MODULE_0__.TIM.TYPES.JOIN_STATUS_SUCCESS:
                    yield this.timHelper.checkoutConversation(`GROUP${res.data.group.groupID}`);
                    this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_1__.showAction)({
                        msgType: _shared_data__WEBPACK_IMPORTED_MODULE_0__.MESSAGE_STATUS.success,
                        message: '加群成功'
                    }));
                    this.group = null;
                    this.groupListOfOption = [];
                    break;
                case _shared_data__WEBPACK_IMPORTED_MODULE_0__.TIM.TYPES.JOIN_STATUS_ALREADY_IN_GROUP:
                    this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_1__.showAction)({
                        msgType: _shared_data__WEBPACK_IMPORTED_MODULE_0__.MESSAGE_STATUS.warning,
                        message: '您已经是群成员了，请勿重复加群哦！'
                    }));
                    this.group = null;
                    this.groupListOfOption = [];
                    break;
                default: break;
            }
            this.cd.markForCheck();
        }))
            .catch(error => {
            this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_1__.showAction)({
                msgType: _shared_data__WEBPACK_IMPORTED_MODULE_0__.MESSAGE_STATUS.error,
                message: error.message
            }));
        });
    }
    createGroup() {
        this.modal.create({
            nzTitle: `创建群组`,
            nzContent: _create_group_create_group_component__WEBPACK_IMPORTED_MODULE_3__.CreateGroupComponent,
            nzMaskClosable: false,
            nzFooter: null,
            nzWidth: '40%',
            nzStyle: { top: '20px' },
            // nzComponentParams: {}
        });
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
GroupListComponent.ɵfac = function GroupListComponent_Factory(t) { return new (t || GroupListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_11__.NzModalService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_tim_helper_service__WEBPACK_IMPORTED_MODULE_4__.TimHelperService)); };
GroupListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: GroupListComponent, selectors: [["app-group-list"]], viewQuery: function GroupListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.selectGroup = _t.first);
    } }, decls: 9, vars: 4, consts: [[1, "list-container"], [1, "header-bar"], ["nzShowSearch", "", "nzServerSearch", "", "nzSize", "small", "nzPlaceHolder", "\u8F93\u5165\u7FA4ID\u641C\u7D22", 3, "nzLoading", "ngModel", "ngModelChange"], ["search", ""], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["title", "\u521B\u5EFA\u7FA4\u7EC4", 3, "click"], [1, "tim-icon-add"], [1, "group-container"], [3, "group", 4, "ngFor", "ngForOf"], [3, "nzLabel", "nzValue"], [3, "group"]], template: function GroupListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "nz-select", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function GroupListComponent_Template_nz_select_ngModelChange_2_listener($event) { return ctx.group = $event; })("ngModelChange", function GroupListComponent_Template_nz_select_ngModelChange_2_listener($event) { return ctx.applyJoinGroup($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, GroupListComponent_nz_option_4_Template, 1, 2, "nz-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function GroupListComponent_Template_button_click_5_listener() { return ctx.createGroup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, GroupListComponent_app_group_item_8_Template, 1, 1, "app-group-item", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzLoading", ctx.loading)("ngModel", ctx.group);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.groupListOfOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.groupList);
    } }, directives: [ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__.NzOptionComponent, _group_item_group_item_component__WEBPACK_IMPORTED_MODULE_5__.GroupItemComponent], styles: [".list-container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.list-container[_ngcontent-%COMP%]   .group-container[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n}\n.list-container[_ngcontent-%COMP%]   .header-bar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  align-items: center;\n  justify-content: center;\n  align-content: center;\n  flex-shrink: 0;\n  height: 50px;\n  border-bottom: 1px solid #303841;\n  padding: 10px 10px 10px 20px;\n}\n.list-container[_ngcontent-%COMP%]   .header-bar[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.list-container[_ngcontent-%COMP%]   .header-bar[_ngcontent-%COMP%]   .group-seach-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-right: 10px;\n}\n.list-container[_ngcontent-%COMP%]   .header-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  float: right;\n  display: inline-block;\n  cursor: pointer;\n  background: #303841;\n  border: none;\n  color: #76828c;\n  box-sizing: border-box;\n  transition: 0.3s;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  margin: 0;\n  padding: 0;\n  width: 30px;\n  height: 30px;\n  line-height: 34px;\n  font-size: 24px;\n  text-align: center;\n  white-space: nowrap;\n  border-radius: 50%;\n  outline: 0;\n  flex-shrink: 0;\n}\n.list-container[_ngcontent-%COMP%]   .header-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  transform: rotate(360deg);\n  color: #5cadff;\n}\n.list-container[_ngcontent-%COMP%]   .scroll-container[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyb3VwLWxpc3QuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUNGO0FBTEE7RUFPSSxrQkFBQTtBQUNKO0FBUkE7RUFXSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSw0QkFBQTtBQUFKO0FBcEJBO0VBc0JNLFdBQUE7QUFDTjtBQXZCQTtFQTBCTSxXQUFBO0VBQ0Esa0JBQUE7QUFBTjtBQTNCQTtFQStCTSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUFETjtBQUdNO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FBRFI7QUF2REE7RUE4REksa0JBQUE7RUFDQSxPQUFBO0FBSkoiLCJmaWxlIjoiZ3JvdXAtbGlzdC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgLmdyb3VwLWNvbnRhaW5lciB7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICB9XG5cbiAgLmhlYWRlci1iYXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMDM4NDE7XG4gICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMjBweDtcbiAgICBuei1zZWxlY3Qge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLmdyb3VwLXNlYWNoLWJhciB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG5cbiAgICBidXR0b24ge1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgYmFja2dyb3VuZDogIzMwMzg0MTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGNvbG9yOiAjNzY4MjhjO1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB3aWR0aDogMzBweDtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAzNHB4O1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIG91dGxpbmU6IDA7XG4gICAgICBmbGV4LXNocmluazogMDtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAgIGNvbG9yOiAjNWNhZGZmO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5zY3JvbGwtY29udGFpbmVyIHtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgZmxleDogMTtcbiAgfVxufVxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 70565:
/*!********************************************************************************************!*\
  !*** ./projects/ngx-tencent-im/src/group/group-member-info/group-member-info.component.ts ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupMemberInfoComponent": function() { return /* binding */ GroupMemberInfoComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/selectors */ 29716);
/* harmony import */ var _util_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/date */ 90570);
/* harmony import */ var _shared_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared.data */ 54825);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions */ 10771);
/* harmony import */ var _tim_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../tim-helper.service */ 92789);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 17562);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/popover */ 8813);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 77727);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);















function GroupMemberInfoComponent_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function GroupMemberInfoComponent_a_5_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r8.cancelMute(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u53D6\u6D88\u7981\u8A00");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { "width": "100%" }; };
function GroupMemberInfoComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nz-input-number", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function GroupMemberInfoComponent_ng_template_8_Template_nz_input_number_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r10.muteTime = $event; })("keydown.enter", function GroupMemberInfoComponent_ng_template_8_Template_nz_input_number_keydown_enter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r12.setGroupMemberMuteTime(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](4, _c0))("ngModel", ctx_r2.muteTime)("nzMin", 1)("nzStep", 1);
} }
function GroupMemberInfoComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function GroupMemberInfoComponent_ng_template_19_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r13.nameCard = $event; })("keydown.enter", function GroupMemberInfoComponent_ng_template_19_Template_input_keydown_enter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r15.setGroupMemberNameCard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r4.nameCard);
} }
function GroupMemberInfoComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "\u7981\u8A00\u81F3:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r5.muteUntil);
} }
function GroupMemberInfoComponent_a_27_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function GroupMemberInfoComponent_a_27_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r16.changeMemberRole(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r6.member.role === "Admin" ? "\u53D6\u6D88\u7BA1\u7406\u5458" : "\u8BBE\u4E3A\u7BA1\u7406\u5458", " ");
} }
const _c1 = function () { return { "color": "red" }; };
function GroupMemberInfoComponent_a_28_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function GroupMemberInfoComponent_a_28_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r18.kickoutGroupMember(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u8E22\u51FA\u7FA4\u7EC4 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](1, _c1));
} }
const _c2 = function () { return { "cursor": "pointer" }; };
class GroupMemberInfoComponent {
    constructor(timHelper, store) {
        this.timHelper = timHelper;
        this.store = store;
        this.enterEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.current = Date.now();
    }
    ngOnInit() {
        this.isOwner = this.currentConversation.groupProfile.selfInfo.role === 'Owner';
        this.isAdmin = this.currentConversation.groupProfile.selfInfo.role === 'Admin';
        this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_0__.currentUserProfileSelector).subscribe(res => {
            if (res) {
                this.currentUserProfile = res;
                this.isMine = this.currentUserProfile.userID === this.member.userID;
            }
        });
    }
    // 是否显示取消禁言按钮
    get showCancelBan() {
        if (this.showMuteUntil && this.currentConversation.type === _shared_data__WEBPACK_IMPORTED_MODULE_2__.TIM.TYPES.CONV_GROUP && !this.isMine) {
            return this.isOwner || this.isAdmin;
        }
        return false;
    }
    get changeRoleTitle() {
        if (!this.canChangeRole) {
            return '';
        }
        return this.isOwner && this.member.role === 'Admin' ? '设为：Member' : '设为：Admin';
    }
    get canChangeRole() {
        return this.isOwner && ['ChatRoom', 'Public'].includes(this.currentConversation.subType);
    }
    // 是否显示踢出群成员按钮
    get showKickout() {
        return (this.isOwner || this.isAdmin) && !this.isMine;
    }
    // 日期格式化后的禁言时间
    get muteUntil() {
        return (0,_util_date__WEBPACK_IMPORTED_MODULE_1__.getFullDate)(new Date(this.member.muteUntil * 1000));
    }
    // 是否显示禁言时间
    get showMuteUntil() {
        // 禁言时间小于当前时间
        return this.member.muteUntil * 1000 > this.current;
    }
    setGroupMemberMuteTime() {
        if (!this.muteTime)
            return;
        this.timHelper.tim
            .setGroupMemberMuteTime({
            groupID: this.currentConversation.groupProfile.groupID,
            userID: this.member.userID,
            muteTime: Number(this.muteTime)
        })
            .then(() => {
            this.muteTime = '';
            this.muteTimeVisible = false;
            this.enterEnd.emit();
        })
            .catch(error => {
            this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_3__.showAction)({ msgType: _shared_data__WEBPACK_IMPORTED_MODULE_2__.MESSAGE_STATUS.error, message: error.message }));
        });
    }
    // 取消禁言
    cancelMute() {
        this.timHelper.tim
            .setGroupMemberMuteTime({
            groupID: this.currentConversation.groupProfile.groupID,
            userID: this.member.userID,
            muteTime: 0,
        })
            .then(() => {
            this.muteTime = '';
            this.enterEnd.emit();
        })
            .catch((error) => {
            this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_3__.showAction)({ msgType: _shared_data__WEBPACK_IMPORTED_MODULE_2__.MESSAGE_STATUS.error, message: error.message }));
        });
    }
    setGroupMemberNameCard() {
        if (this.nameCard.trim().length === 0) {
            this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_3__.showAction)({ msgType: _shared_data__WEBPACK_IMPORTED_MODULE_2__.MESSAGE_STATUS.warning, message: '不能设置空的群名片' }));
            return;
        }
        this.timHelper.tim
            .setGroupMemberNameCard({
            groupID: this.currentConversation.groupProfile.groupID,
            userID: this.member.userID,
            nameCard: this.nameCard
        })
            .then(() => {
            this.nameCard = null;
            this.enterEnd.emit();
            this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_3__.showAction)({ msgType: _shared_data__WEBPACK_IMPORTED_MODULE_2__.MESSAGE_STATUS.success, message: '修改成功' }));
        })
            .catch(error => {
            this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_3__.showAction)({ msgType: _shared_data__WEBPACK_IMPORTED_MODULE_2__.MESSAGE_STATUS.error, message: error.message }));
        });
    }
    changeMemberRole() {
        if (!this.canChangeRole) {
            return;
        }
        let currentRole = this.member.role;
        this.timHelper.tim
            .setGroupMemberRole({
            groupID: this.currentConversation.groupProfile.groupID,
            userID: this.member.userID,
            role: currentRole === 'Admin' ? 'Member' : 'Admin',
        })
            .catch((error) => {
        });
    }
    kickoutGroupMember() {
        this.timHelper.tim
            .deleteGroupMember({
            groupID: this.currentConversation.groupProfile.groupID,
            reason: '我要踢你出群',
            userIDList: [this.member.userID],
        })
            .then(() => {
            // this.$store.commit('deleteGroupMemeber', this.member.userID);
        })
            .catch((error) => {
        });
    }
}
GroupMemberInfoComponent.ɵfac = function GroupMemberInfoComponent_Factory(t) { return new (t || GroupMemberInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_tim_helper_service__WEBPACK_IMPORTED_MODULE_4__.TimHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store)); };
GroupMemberInfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: GroupMemberInfoComponent, selectors: [["app-group-member-info"]], inputs: { member: "member", currentConversation: "currentConversation" }, outputs: { enterEnd: "enterEnd" }, decls: 29, vars: 19, consts: [[1, "label"], ["type", "text", 3, "click", 4, "ngIf"], ["nz-popover", "", "nzPopoverPlacement", "topRight", "nzPopoverTrigger", "click", 3, "ngStyle", "nzPopoverContent", "nzPopoverVisible", "nzPopoverTitle"], ["contentTemplate", ""], ["nz-icon", "", "nzType", "edit", "nzTheme", "outline", "nz-popover", "", "nzPopoverPlacement", "topRight", "nzPopoverTrigger", "click", 3, "ngStyle", "nzPopoverContent", "nzPopoverVisible", "nzPopoverTitle"], ["nameCardTemplate", ""], [1, "content", "role", 3, "title"], [4, "ngIf"], ["type", "text", 3, "ngStyle", "click", 4, "ngIf"], ["type", "text", 3, "click"], ["nzPlaceholder", "\u56DE\u8F66\u786E\u8BA4", 3, "ngStyle", "ngModel", "nzMin", "nzStep", "ngModelChange", "keydown.enter"], ["nz-input", "", "placeholder", "\u56DE\u8F66\u786E\u8BA4", 3, "ngModel", "ngModelChange", "keydown.enter"], [1, "content"], ["type", "text", 3, "ngStyle", "click"]], template: function GroupMemberInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "userID:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, GroupMemberInfoComponent_a_5_Template, 2, 0, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "\u7981\u8A00");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, GroupMemberInfoComponent_ng_template_8_Template, 1, 5, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "nick:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "nameCard:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, GroupMemberInfoComponent_ng_template_19_Template, 1, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "role:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, GroupMemberInfoComponent_div_26_Template, 5, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, GroupMemberInfoComponent_a_27_Template, 2, 1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, GroupMemberInfoComponent_a_28_Template, 2, 2, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](9);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.member.userID, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showCancelBan);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](17, _c1))("nzPopoverContent", _r1)("nzPopoverVisible", ctx.muteTimeVisible)("nzPopoverTitle", "\u7981\u8A00(\u56DE\u8F66\u786E\u8BA4)");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.member.nick || "\u6682\u65E0", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.member.nameCard || "\u6682\u65E0", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](18, _c2))("nzPopoverContent", _r3)("nzPopoverVisible", ctx.muteTimeVisible)("nzPopoverTitle", "\u4FEE\u6539\u7FA4\u540D\u7247");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", ctx.changeRoleTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.member.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showMuteUntil);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.canChangeRole);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showKickout);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_8__.NzPopoverDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgStyle, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__.NzIconDirective, ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_11__.NzInputNumberComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor], styles: [".label[_ngcontent-%COMP%] {\n  color: #ccc8c8;\n}\n.cursor-pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyb3VwLW1lbWJlci1pbmZvLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGO0FBRUE7RUFDRSxlQUFBO0FBQUYiLCJmaWxlIjoiZ3JvdXAtbWVtYmVyLWluZm8uY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFiZWwge1xuICBjb2xvcjogcmdiKDIwNCwgMjAwLCAyMDApO1xufVxuXG4uY3Vyc29yLXBvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXX0= */"] });


/***/ }),

/***/ 14222:
/*!********************************************************************************************!*\
  !*** ./projects/ngx-tencent-im/src/group/group-member-list/group-member-list.component.ts ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupMemberListComponent": function() { return /* binding */ GroupMemberListComponent; }
/* harmony export */ });
/* harmony import */ var _shared_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared.data */ 54825);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/actions */ 10771);
/* harmony import */ var _store_actions_group_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/actions/group.action */ 8027);
/* harmony import */ var _store_selectors_group_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/selectors/group.selector */ 57087);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 17562);
/* harmony import */ var _tim_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../tim-helper.service */ 92789);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/popover */ 8813);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _avatar_avatar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../avatar/avatar.component */ 50008);
/* harmony import */ var _group_member_info_group_member_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../group-member-info/group-member-info.component */ 70565);















function GroupMemberListComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function GroupMemberListComponent_ng_template_5_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r4.userID = $event; })("keydown.enter", function GroupMemberListComponent_ng_template_5_Template_input_keydown_enter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r6.addGroupMember(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r1.userID);
} }
function GroupMemberListComponent_div_9_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-group-member-info", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("enterEnd", function GroupMemberListComponent_div_9_ng_template_1_Template_app_group_member_info_enterEnd_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r13.popoverVisible = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const member_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("member", member_r7)("currentConversation", ctx_r9.currentConversation);
} }
function GroupMemberListComponent_div_9_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const member_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", member_r7.nameCard);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](member_r7.nameCard);
} }
function GroupMemberListComponent_div_9_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const member_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", member_r7.nick);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](member_r7.nick);
} }
function GroupMemberListComponent_div_9_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const member_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", member_r7.userID);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](member_r7.userID);
} }
function GroupMemberListComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, GroupMemberListComponent_div_9_ng_template_1_Template, 1, 2, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function GroupMemberListComponent_div_9_Template_div_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r20); const member_r7 = restoredCtx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r19.currentMemberID = member_r7.userID; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "im-avatar", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, GroupMemberListComponent_div_9_span_6_Template, 2, 2, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, GroupMemberListComponent_div_9_span_7_Template, 2, 2, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, GroupMemberListComponent_div_9_span_8_Template, 2, 2, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const member_r7 = ctx.$implicit;
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](2);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzPopoverContent", _r8)("nzPopoverVisible", ctx_r2.popoverVisible);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", ctx_r2.getGroupMemberAvatarText(member_r7.role))("src", member_r7.avatar);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", member_r7.nameCard);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", member_r7.nick);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !member_r7.nameCard && !member_r7.nick);
} }
function GroupMemberListComponent_a_11_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function GroupMemberListComponent_a_11_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r21.loadMore(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\u67E5\u770B\u66F4\u591A");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { "font-size": "1.5em", "cursor": "pointer" }; };
class GroupMemberListComponent {
    constructor(store, timHelperService) {
        this.store = store;
        this.timHelperService = timHelperService;
        this.currentMemberList = [];
        this.currentMemberID = '';
        this.count = 30;
    }
    get members() {
        return this.currentMemberList.slice(0, this.count);
    }
    get showLoadMore() {
        return this.members.length < this.currentConversation.groupProfile.memberNum;
    }
    ngOnInit() {
        // 获取当group前成员
        this.subscription = this.store.select(_store_selectors_group_selector__WEBPACK_IMPORTED_MODULE_3__.currentMemberListSelector).subscribe(res => {
            this.currentMemberList = res;
        });
    }
    addGroupMember() {
        const groupID = this.currentConversation.conversationID.replace('GROUP', '');
        this.timHelperService.tim
            .addGroupMember({
            groupID,
            userIDList: [this.userID]
        })
            .then((imResponse) => {
            const { successUserIDList, failureUserIDList, existedUserIDList } = imResponse.data;
            if (successUserIDList.length > 0) {
                this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_1__.showAction)({ msgType: _shared_data__WEBPACK_IMPORTED_MODULE_0__.MESSAGE_STATUS.success, message: `群成员：${successUserIDList.join(',')}，加群成功` }));
                this.timHelperService.tim.getGroupMemberProfile({ groupID, userIDList: successUserIDList })
                    .then(({ data: { memberList } }) => {
                    this.store.dispatch((0,_store_actions_group_action__WEBPACK_IMPORTED_MODULE_2__.updateCurrentMemberListAction)({ currentMemberList: memberList }));
                    this.popoverVisible = false;
                });
            }
            if (failureUserIDList.length > 0) {
                this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_1__.showAction)({ msgType: _shared_data__WEBPACK_IMPORTED_MODULE_0__.MESSAGE_STATUS.error, message: `群成员：${failureUserIDList.join(',')}，添加失败！` }));
            }
            if (existedUserIDList.length > 0) {
                this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_1__.showAction)({ msgType: _shared_data__WEBPACK_IMPORTED_MODULE_0__.MESSAGE_STATUS.warning, message: `群成员：${existedUserIDList.join(',')}，已在群中` }));
            }
        })
            .catch(error => {
            this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_1__.showAction)({ msgType: _shared_data__WEBPACK_IMPORTED_MODULE_0__.MESSAGE_STATUS.error, message: error.message }));
        });
    }
    getGroupMemberAvatarText(role) {
        switch (role) {
            case 'Owner':
                return '群主';
            case 'Admin':
                return '管理员';
            default:
                return '群成员';
        }
    }
    loadMore() {
        this.timHelperService.getGroupMemberList(this.currentConversation.groupProfile.groupID);
        this.count += 30;
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
GroupMemberListComponent.ɵfac = function GroupMemberListComponent_Factory(t) { return new (t || GroupMemberListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_tim_helper_service__WEBPACK_IMPORTED_MODULE_4__.TimHelperService)); };
GroupMemberListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: GroupMemberListComponent, selectors: [["app-group-member-list"]], inputs: { currentConversation: "currentConversation" }, decls: 12, vars: 7, consts: [[1, "group-member-list-wrapper"], [1, "header"], [1, "member-count", "text-ellipsis"], ["nz-icon", "", "nzType", "user-add", "nzTheme", "outline", "nz-popover", "", "nzPopoverPlacement", "topRight", "nzPopoverTrigger", "click", 3, "ngStyle", "nzPopoverContent", "nzPopoverVisible"], ["addGroupTemplate", ""], [1, "scroll-content"], [1, "group-member-list"], ["nz-popover", "", "nzPopoverPlacement", "topRight", "nzPopoverTrigger", "click", 3, "nzPopoverContent", "nzPopoverVisible", 4, "ngFor", "ngForOf"], [1, "more"], [3, "click", 4, "ngIf"], ["nz-input", "", "placeholder", "\u56DE\u8F66\u786E\u8BA4", 3, "ngModel", "ngModelChange", "keydown.enter"], ["nz-popover", "", "nzPopoverPlacement", "topRight", "nzPopoverTrigger", "click", 3, "nzPopoverContent", "nzPopoverVisible"], ["contentTemplate", ""], [1, "group-member", 3, "click"], [3, "title", "src"], [1, "member-name", "text-ellipsis"], [3, "title", 4, "ngIf"], [3, "member", "currentConversation", "enterEnd"], [3, "title"], [3, "click"]], template: function GroupMemberListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, GroupMemberListComponent_ng_template_5_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, GroupMemberListComponent_div_9_Template, 9, 7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, GroupMemberListComponent_a_11_Template, 2, 0, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u7FA4\u6210\u5458\uFF1A", ctx.currentConversation == null ? null : ctx.currentConversation.groupProfile.memberCount, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](6, _c0))("nzPopoverContent", _r0)("nzPopoverVisible", ctx.popoverVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.members);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showLoadMore);
    } }, directives: [ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__.NzIconDirective, ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_11__.NzPopoverDirective, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _avatar_avatar_component__WEBPACK_IMPORTED_MODULE_5__.AvatarComponent, _group_member_info_group_member_info_component__WEBPACK_IMPORTED_MODULE_6__.GroupMemberInfoComponent], styles: [".group-member-list-wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  align-items: center;\n  height: 50px;\n  padding: 10px 16px 10px 20px;\n  border-bottom: 1px solid #e7e7e7;\n}\n.group-member-list-wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .member-count[_ngcontent-%COMP%] {\n  display: inline-block;\n  max-width: 130px;\n  line-height: 30px;\n  font-size: 14px;\n  vertical-align: bottom;\n}\n.group-member-list-wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .btn-add-member[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  font-size: 28px;\n  text-align: center;\n  line-height: 32px;\n  cursor: pointer;\n  float: right;\n}\n.group-member-list-wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .btn-add-member[_ngcontent-%COMP%]:hover {\n  color: #5cadff;\n}\n.group-member-list-wrapper[_ngcontent-%COMP%]   .scroll-content[_ngcontent-%COMP%] {\n  max-height: 250px;\n  overflow-y: scroll;\n  padding: 10px 15px 10px 15px;\n  width: 100%;\n}\n.group-member-list-wrapper[_ngcontent-%COMP%]   .scroll-content[_ngcontent-%COMP%]   .group-member-list[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  width: 100%;\n}\n.group-member-list-wrapper[_ngcontent-%COMP%]   .scroll-content[_ngcontent-%COMP%]   .group-member[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  color: #000000;\n  cursor: pointer;\n}\n.group-member-list-wrapper[_ngcontent-%COMP%]   .scroll-content[_ngcontent-%COMP%]   .group-member[_ngcontent-%COMP%]   im-avatar[_ngcontent-%COMP%]  .avatar {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n}\n.group-member-list-wrapper[_ngcontent-%COMP%]   .scroll-content[_ngcontent-%COMP%]   .group-member[_ngcontent-%COMP%]   .member-name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  width: 40px;\n  text-align: center;\n}\n.group-member-list-wrapper[_ngcontent-%COMP%]   .more[_ngcontent-%COMP%] {\n  padding: 0 20px;\n  border-bottom: 1px solid #e7e7e7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyb3VwLW1lbWJlci1saXN0LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBRUEsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0NBQUE7QUFESjtBQVRBO0VBYU0scUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FBRE47QUFoQkE7RUFxQk0sV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBRk47QUFJTTtFQUNFLGNBQUE7QUFGUjtBQTVCQTtFQW9DSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0FBTEo7QUFsQ0E7RUEwQ00sYUFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFMTjtBQXhDQTtFQWlETSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFOTjtBQXBEQTtFQThEVSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBUFY7QUF6REE7RUFxRVEsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQVRSO0FBOURBO0VBNkVJLGVBQUE7RUFDQSxnQ0FBQTtBQVpKIiwiZmlsZSI6Imdyb3VwLW1lbWJlci1saXN0LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyb3VwLW1lbWJlci1saXN0LXdyYXBwZXIge1xuICAuaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgcGFkZGluZzogMTBweCAxNnB4IDEwcHggMjBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U3ZTdlNztcblxuICAgIC5tZW1iZXItY291bnQge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgbWF4LXdpZHRoOiAxMzBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgICB9XG5cbiAgICAuYnRuLWFkZC1tZW1iZXIge1xuICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGZsb2F0OiByaWdodDtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjNWNhZGZmO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5zY3JvbGwtY29udGVudCB7XG4gICAgbWF4LWhlaWdodDogMjUwcHg7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIHBhZGRpbmc6IDEwcHggMTVweCAxMHB4IDE1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAuZ3JvdXAtbWVtYmVyLWxpc3Qge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5ncm91cC1tZW1iZXIge1xuICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICBpbS1hdmF0YXI6Om5nLWRlZXAge1xuICAgICAgICAuYXZhdGFyIHtcbiAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5tZW1iZXItbmFtZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubW9yZSB7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTdlN2U3O1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 84046:
/*!******************************************************!*\
  !*** ./projects/ngx-tencent-im/src/message/index.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageBubbleComponent": function() { return /* reexport safe */ _message_bubble_message_bubble_component__WEBPACK_IMPORTED_MODULE_0__.MessageBubbleComponent; },
/* harmony export */   "MessageFooterComponent": function() { return /* reexport safe */ _message_footer_message_footer_component__WEBPACK_IMPORTED_MODULE_1__.MessageFooterComponent; },
/* harmony export */   "MessageItemComponent": function() { return /* reexport safe */ _message_item_message_item_component__WEBPACK_IMPORTED_MODULE_2__.MessageItemComponent; },
/* harmony export */   "MessageSendBoxComponent": function() { return /* reexport safe */ _message_send_box_message_send_box_component__WEBPACK_IMPORTED_MODULE_3__.MessageSendBoxComponent; },
/* harmony export */   "MessageStatusIconComponent": function() { return /* reexport safe */ _message_status_icon_message_status_icon_component__WEBPACK_IMPORTED_MODULE_4__.MessageStatusIconComponent; },
/* harmony export */   "FileElementComponent": function() { return /* reexport safe */ _message_element__WEBPACK_IMPORTED_MODULE_5__.FileElementComponent; },
/* harmony export */   "ImageElementComponent": function() { return /* reexport safe */ _message_element__WEBPACK_IMPORTED_MODULE_5__.ImageElementComponent; },
/* harmony export */   "TextElementComponent": function() { return /* reexport safe */ _message_element__WEBPACK_IMPORTED_MODULE_5__.TextElementComponent; }
/* harmony export */ });
/* harmony import */ var _message_bubble_message_bubble_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message-bubble/message-bubble.component */ 54759);
/* harmony import */ var _message_footer_message_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message-footer/message-footer.component */ 22103);
/* harmony import */ var _message_item_message_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message-item/message-item.component */ 39437);
/* harmony import */ var _message_send_box_message_send_box_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message-send-box/message-send-box.component */ 64038);
/* harmony import */ var _message_status_icon_message_status_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message-status-icon/message-status-icon.component */ 75393);
/* harmony import */ var _message_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message-element */ 95243);








/***/ }),

/***/ 54759:
/*!****************************************************************************************!*\
  !*** ./projects/ngx-tencent-im/src/message/message-bubble/message-bubble.component.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageBubbleComponent": function() { return /* binding */ MessageBubbleComponent; }
/* harmony export */ });
/* harmony import */ var tim_js_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tim-js-sdk */ 92882);
/* harmony import */ var tim_js_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tim_js_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/actions */ 10771);
/* harmony import */ var _shared_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared.data */ 54825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 8709);
/* harmony import */ var _tim_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tim-helper.service */ 92789);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 17562);
/* harmony import */ var _re_edit_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../re-edit-message.service */ 41228);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/menu */ 3026);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);











function MessageBubbleComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.messageReadByPeer);
} }
function MessageBubbleComponent_div_1_li_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MessageBubbleComponent_div_1_li_8_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r5.revokeMessage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u64A4\u56DE");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function MessageBubbleComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("contextmenu", function MessageBubbleComponent_div_1_Template_div_contextmenu_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r7.contextMenu($event, _r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, MessageBubbleComponent_div_1_div_2_Template, 3, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojection"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "nz-dropdown-menu", null, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, MessageBubbleComponent_div_1_li_8_Template, 2, 0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.isMine);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r0.bubbleStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.isMine && !ctx_r0.isTimeout);
} }
function MessageBubbleComponent_div_2_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MessageBubbleComponent_div_2_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r10.reEdit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u91CD\u65B0\u7F16\u8F91");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function MessageBubbleComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, MessageBubbleComponent_div_2_a_2_Template, 2, 0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.text, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.isEdit);
} }
const _c0 = ["*"];
class MessageBubbleComponent {
    constructor(nzContextMenuService, timHelper, store, reEditMessage) {
        this.nzContextMenuService = nzContextMenuService;
        this.timHelper = timHelper;
        this.store = store;
        this.reEditMessage = reEditMessage;
        this.isTimeout = false;
    }
    ngOnInit() {
        this.isTimeoutHandler();
    }
    get bubbleStyle() {
        let classString = '';
        if (this.isMine) {
            classString += 'message-send';
        }
        else {
            classString += 'message-received';
        }
        if (this.isNew) {
            classString += 'new';
        }
        return classString;
    }
    get messageReadByPeer() {
        if (this.message.conversationType === (tim_js_sdk__WEBPACK_IMPORTED_MODULE_0___default().TYPES.CONV_C2C) && this.message.isPeerRead) {
            return '已读';
        }
        if (this.message.conversationType === (tim_js_sdk__WEBPACK_IMPORTED_MODULE_0___default().TYPES.CONV_C2C) && !this.message.isPeerRead) {
            return '未读';
        }
        return '';
    }
    get text() {
        if (this.message.conversationType === (tim_js_sdk__WEBPACK_IMPORTED_MODULE_0___default().TYPES.CONV_C2C) && !this.isMine) {
            return '对方撤回了一条消息';
        }
        if (this.message.conversationType === (tim_js_sdk__WEBPACK_IMPORTED_MODULE_0___default().TYPES.CONV_GROUP) && !this.isMine) {
            return `${this.message.from}撤回了一条消息`;
        }
        return '你撤回了一条消息';
    }
    get isEdit() {
        if (!this.isMine) {
            return false;
        }
        if (this.message.type !== (tim_js_sdk__WEBPACK_IMPORTED_MODULE_0___default().TYPES.MSG_TEXT)) {
            return false;
        }
        if (this.isTimeout) {
            return false;
        }
        return true;
    }
    contextMenu($event, menu) {
        this.nzContextMenuService.create($event, menu);
    }
    revokeMessage() {
        this.timHelper.tim.revokeMessage(this.message).then(() => {
            this.isTimeoutHandler();
        }).catch((err) => {
            this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_1__.showAction)({
                message: err,
                msgType: _shared_data__WEBPACK_IMPORTED_MODULE_2__.MESSAGE_STATUS.warning
            }));
        });
    }
    reEdit() {
        this.reEditMessage.reEditMessage.emit(this.message.payload.text);
    }
    isTimeoutHandler() {
        // this.subscription = timer(0, 1000).subscribe(() => {
        //   const time = (new Date().getTime() / 1000) + '';
        //   if (parseInt((time)) - this.message.time > 2 * 60) {
        //     this.isTimeout = true;
        //     this.subscription.unsubscribe();
        //   } else {
        //     this.isTimeoutHandler();
        //   }
        // });
        const now = new Date();
        const time = (now.getTime() / 1000).toString();
        if (parseInt(time, 10) - this.message.time > 2 * 60) {
            this.isTimeout = true;
            return;
        }
        setTimeout(this.isTimeoutHandler, 1000);
    }
}
MessageBubbleComponent.ɵfac = function MessageBubbleComponent_Factory(t) { return new (t || MessageBubbleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_6__.NzContextMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_tim_helper_service__WEBPACK_IMPORTED_MODULE_3__.TimHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_re_edit_message_service__WEBPACK_IMPORTED_MODULE_4__.ReEditMessageService)); };
MessageBubbleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: MessageBubbleComponent, selectors: [["app-message-bubble"]], inputs: { message: "message", isMine: "isMine", isNew: "isNew" }, ngContentSelectors: _c0, decls: 3, vars: 2, consts: [[1, "chat-bubble"], [3, "contextmenu", 4, "ngIf"], ["class", "group-tip-element-wrapper", 4, "ngIf"], [3, "contextmenu"], [2, "display", "flex"], ["class", "message-status", 4, "ngIf"], [1, "message-content"], ["menu", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", "", 3, "click", 4, "ngIf"], [1, "message-status"], ["nz-menu-item", "", 3, "click"], [1, "group-tip-element-wrapper"], [3, "click", 4, "ngIf"], [3, "click"]], template: function MessageBubbleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, MessageBubbleComponent_div_1_Template, 9, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, MessageBubbleComponent_div_2_Template, 3, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.message.isRevoked);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.message.isRevoked);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_6__.NzDropdownMenuComponent, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_9__.NzMenuDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__["ɵNzTransitionPatchDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_9__.NzMenuItemDirective], styles: [".chat-bubble[_ngcontent-%COMP%] {\n  position: relative;\n}\n.chat-bubble[_ngcontent-%COMP%]   .message-status[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 25px;\n  margin-right: 10px;\n  justify-content: center;\n  align-items: center;\n  font-size: 12px;\n  color: #6e7981;\n}\n.chat-bubble[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%] {\n  outline: none;\n  font-size: 14px;\n  position: relative;\n  max-width: 350px;\n  word-wrap: break-word;\n  word-break: break-all;\n  padding: 10px;\n  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);\n}\n.chat-bubble[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n  margin: 0;\n  text-shadow: #495060 0 0 0.05em;\n}\n.chat-bubble[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  vertical-align: bottom;\n}\n.chat-bubble[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]::before {\n  position: absolute;\n  top: -6px;\n  width: 12px;\n  height: 40px;\n  content: \"\\e900\";\n  font-family: \"tim\" !important;\n  font-size: 24px;\n}\n.chat-bubble[_ngcontent-%COMP%]   .message-received[_ngcontent-%COMP%] {\n  background-color: #fff;\n  margin-left: 15px;\n  border-radius: 0 4px 4px 4px;\n}\n.chat-bubble[_ngcontent-%COMP%]   .message-received[_ngcontent-%COMP%]::before {\n  left: -10px;\n  transform: scaleX(-1);\n  color: #fff;\n}\n.chat-bubble[_ngcontent-%COMP%]   .message-received.new[_ngcontent-%COMP%] {\n  transform: scale(0);\n  transform-origin: top left;\n  -webkit-animation: bounce 500ms linear both;\n          animation: bounce 500ms linear both;\n}\n.chat-bubble[_ngcontent-%COMP%]   .message-send[_ngcontent-%COMP%] {\n  background-color: #9eea6a;\n  margin-right: 15px;\n  border-radius: 4px 0 4px 4px;\n  color: #000;\n}\n.chat-bubble[_ngcontent-%COMP%]   .message-send[_ngcontent-%COMP%]::before {\n  right: -10px;\n  color: #9eea6a;\n}\n.chat-bubble[_ngcontent-%COMP%]   .message-send.new[_ngcontent-%COMP%] {\n  transform: scale(0);\n  transform-origin: top right;\n  -webkit-animation: bounce 500ms linear both;\n          animation: bounce 500ms linear both;\n}\n.chat-bubble[_ngcontent-%COMP%]   .el-dropdown[_ngcontent-%COMP%] {\n  vertical-align: top;\n  display: flex;\n}\n.chat-bubble[_ngcontent-%COMP%]   .el-dropdown[_ngcontent-%COMP%]    + .el-dropdown[_ngcontent-%COMP%] {\n  margin-left: 15px;\n}\n.chat-bubble[_ngcontent-%COMP%]   .el-icon-arrow-down[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.group-tip-element-wrapper[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 4px 15px;\n  border-radius: 3px;\n  color: #a5b5c1;\n  font-size: 12px;\n}\n.edit-button[_ngcontent-%COMP%] {\n  padding-top: 4px;\n  height: 20px;\n  font-size: 10px;\n}\n@-webkit-keyframes bounce {\n  0% {\n    transform: matrix3d(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  4.7% {\n    transform: matrix3d(0.45, 0, 0, 0, 0, 0.45, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  9.41% {\n    transform: matrix3d(0.883, 0, 0, 0, 0, 0.883, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  14.11% {\n    transform: matrix3d(1.141, 0, 0, 0, 0, 1.141, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  18.72% {\n    transform: matrix3d(1.212, 0, 0, 0, 0, 1.212, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  24.32% {\n    transform: matrix3d(1.151, 0, 0, 0, 0, 1.151, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  29.93% {\n    transform: matrix3d(1.048, 0, 0, 0, 0, 1.048, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  35.54% {\n    transform: matrix3d(0.979, 0, 0, 0, 0, 0.979, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  41.04% {\n    transform: matrix3d(0.961, 0, 0, 0, 0, 0.961, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  52.15% {\n    transform: matrix3d(0.991, 0, 0, 0, 0, 0.991, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  63.26% {\n    transform: matrix3d(1.007, 0, 0, 0, 0, 1.007, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  85.49% {\n    transform: matrix3d(0.999, 0, 0, 0, 0, 0.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  100% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n}\n@keyframes bounce {\n  0% {\n    transform: matrix3d(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  4.7% {\n    transform: matrix3d(0.45, 0, 0, 0, 0, 0.45, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  9.41% {\n    transform: matrix3d(0.883, 0, 0, 0, 0, 0.883, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  14.11% {\n    transform: matrix3d(1.141, 0, 0, 0, 0, 1.141, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  18.72% {\n    transform: matrix3d(1.212, 0, 0, 0, 0, 1.212, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  24.32% {\n    transform: matrix3d(1.151, 0, 0, 0, 0, 1.151, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  29.93% {\n    transform: matrix3d(1.048, 0, 0, 0, 0, 1.048, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  35.54% {\n    transform: matrix3d(0.979, 0, 0, 0, 0, 0.979, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  41.04% {\n    transform: matrix3d(0.961, 0, 0, 0, 0, 0.961, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  52.15% {\n    transform: matrix3d(0.991, 0, 0, 0, 0, 0.991, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  63.26% {\n    transform: matrix3d(1.007, 0, 0, 0, 0, 1.007, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  85.49% {\n    transform: matrix3d(0.999, 0, 0, 0, 0, 0.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  100% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2UtYnViYmxlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjtBQUZBO0VBSUksYUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUNKO0FBWEE7RUFjSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLDJDQUFBO0FBQUo7QUFyQkE7RUF3Qk0scUJBQUE7RUFDQSxTQUFBO0VBQ0EsK0JBQUE7QUFBTjtBQTFCQTtFQThCTSxzQkFBQTtBQUROO0FBSUk7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBRUEsNkJBQUE7RUFDQSxlQUFBO0FBSE47QUF0Q0E7RUE4Q0ksc0JBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0FBTEo7QUFPSTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUFMTjtBQVFJO0VBQ0UsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLDJDQUFBO1VBQUEsbUNBQUE7QUFOTjtBQXJEQTtFQWdFSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0FBUko7QUFVSTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FBUk47QUFXSTtFQUNFLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQ0FBQTtVQUFBLG1DQUFBO0FBVE47QUFwRUE7RUFrRkksbUJBQUE7RUFDQSxhQUFBO0FBWEo7QUF4RUE7RUF1RkksaUJBQUE7QUFaSjtBQTNFQTtFQTJGSSxlQUFBO0FBYko7QUFpQkE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQWZGO0FBbUJBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQWpCRjtBQW9CQTtFQUNFO0lBQ0UsbUVBQUE7RUFsQkY7RUFxQkE7SUFDRSx5RUFBQTtFQW5CRjtFQXNCQTtJQUNFLDJFQUFBO0VBcEJGO0VBdUJBO0lBQ0UsMkVBQUE7RUFyQkY7RUF3QkE7SUFDRSwyRUFBQTtFQXRCRjtFQXlCQTtJQUNFLDJFQUFBO0VBdkJGO0VBMEJBO0lBQ0UsMkVBQUE7RUF4QkY7RUEyQkE7SUFDRSwyRUFBQTtFQXpCRjtFQTRCQTtJQUNFLDJFQUFBO0VBMUJGO0VBNkJBO0lBQ0UsMkVBQUE7RUEzQkY7RUE4QkE7SUFDRSwyRUFBQTtFQTVCRjtFQStCQTtJQUNFLDJFQUFBO0VBN0JGO0VBZ0NBO0lBQ0UsbUVBQUE7RUE5QkY7QUFDRjtBQXJCQTtFQUNFO0lBQ0UsbUVBQUE7RUFsQkY7RUFxQkE7SUFDRSx5RUFBQTtFQW5CRjtFQXNCQTtJQUNFLDJFQUFBO0VBcEJGO0VBdUJBO0lBQ0UsMkVBQUE7RUFyQkY7RUF3QkE7SUFDRSwyRUFBQTtFQXRCRjtFQXlCQTtJQUNFLDJFQUFBO0VBdkJGO0VBMEJBO0lBQ0UsMkVBQUE7RUF4QkY7RUEyQkE7SUFDRSwyRUFBQTtFQXpCRjtFQTRCQTtJQUNFLDJFQUFBO0VBMUJGO0VBNkJBO0lBQ0UsMkVBQUE7RUEzQkY7RUE4QkE7SUFDRSwyRUFBQTtFQTVCRjtFQStCQTtJQUNFLDJFQUFBO0VBN0JGO0VBZ0NBO0lBQ0UsbUVBQUE7RUE5QkY7QUFDRiIsImZpbGUiOiJtZXNzYWdlLWJ1YmJsZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGF0LWJ1YmJsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAubWVzc2FnZS1zdGF0dXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWluLXdpZHRoOiAyNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzZlNzk4MTtcbiAgfVxuXG4gIC5tZXNzYWdlLWNvbnRlbnQge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXgtd2lkdGg6IDM1MHB4O1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3gtc2hhZG93OiAwIDVweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xuXG4gICAgc3BhbiB7XG4gICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICB0ZXh0LXNoYWRvdzogIzQ5NTA2MCAwIDAgMC4wNWVtO1xuICAgIH1cblxuICAgIGltZyB7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgIH1cblxuICAgICY6OmJlZm9yZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IC02cHg7XG4gICAgICB3aWR0aDogMTJweDtcbiAgICAgIGhlaWdodDogNDBweDtcbiAgICAgIGNvbnRlbnQ6IFwiXFxlOTAwXCI7XG4gICAgICAvLyBjb250ZW50IFwiXFxlOTA2XCJcbiAgICAgIGZvbnQtZmFtaWx5OiBcInRpbVwiICFpbXBvcnRhbnQ7XG4gICAgICBmb250LXNpemU6IDI0cHg7IC8vIDMycHgg5ZyobWFj5LiK5Lya5qih57OKIDI0cHjmraPluLggLCB3aW5kb3cgMjRweOaooeeziiAyOHB4IDMycHjmraPluLggIDM2cHggd2luZG93cyBtYWMg5Z+65pys5LiA6Ie077yM5L2G5piv5aSq5aSnXG4gICAgfVxuICB9XG5cbiAgLm1lc3NhZ2UtcmVjZWl2ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMCA0cHggNHB4IDRweDtcblxuICAgICY6OmJlZm9yZSB7XG4gICAgICBsZWZ0OiAtMTBweDtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cblxuICAgICYubmV3IHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcbiAgICAgIGFuaW1hdGlvbjogYm91bmNlIDUwMG1zIGxpbmVhciBib3RoO1xuICAgIH1cbiAgfVxuXG4gIC5tZXNzYWdlLXNlbmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM5ZWVhNmE7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweCAwIDRweCA0cHg7XG4gICAgY29sb3I6ICMwMDA7XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgcmlnaHQ6IC0xMHB4O1xuICAgICAgY29sb3I6ICM5ZWVhNmE7XG4gICAgfVxuXG4gICAgJi5uZXcge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCByaWdodDtcbiAgICAgIGFuaW1hdGlvbjogYm91bmNlIDUwMG1zIGxpbmVhciBib3RoO1xuICAgIH1cbiAgfVxuXG4gIC5lbC1kcm9wZG93biB7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgLmVsLWRyb3Bkb3duICsgLmVsLWRyb3Bkb3duIHtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgfVxuXG4gIC5lbC1pY29uLWFycm93LWRvd24ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxufVxuXG4uZ3JvdXAtdGlwLWVsZW1lbnQtd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDRweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGNvbG9yOiAjYTViNWMxO1xuICBmb250LXNpemU6IDEycHg7XG4gIC8vIHRleHQtc2hhZG93ICRzZWNvbmRhcnkgMCAwIDAuMDVlbVxufVxuXG4uZWRpdC1idXR0b24ge1xuICBwYWRkaW5nLXRvcDogNHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuQGtleWZyYW1lcyBib3VuY2Uge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxKTtcbiAgfVxuXG4gIDQuNyUge1xuICAgIHRyYW5zZm9ybTogbWF0cml4M2QoMC40NSwgMCwgMCwgMCwgMCwgMC40NSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSk7XG4gIH1cblxuICA5LjQxJSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgwLjg4MywgMCwgMCwgMCwgMCwgMC44ODMsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEpO1xuICB9XG5cbiAgMTQuMTElIHtcbiAgICB0cmFuc2Zvcm06IG1hdHJpeDNkKDEuMTQxLCAwLCAwLCAwLCAwLCAxLjE0MSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSk7XG4gIH1cblxuICAxOC43MiUge1xuICAgIHRyYW5zZm9ybTogbWF0cml4M2QoMS4yMTIsIDAsIDAsIDAsIDAsIDEuMjEyLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxKTtcbiAgfVxuXG4gIDI0LjMyJSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLjE1MSwgMCwgMCwgMCwgMCwgMS4xNTEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEpO1xuICB9XG5cbiAgMjkuOTMlIHtcbiAgICB0cmFuc2Zvcm06IG1hdHJpeDNkKDEuMDQ4LCAwLCAwLCAwLCAwLCAxLjA0OCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSk7XG4gIH1cblxuICAzNS41NCUge1xuICAgIHRyYW5zZm9ybTogbWF0cml4M2QoMC45NzksIDAsIDAsIDAsIDAsIDAuOTc5LCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxKTtcbiAgfVxuXG4gIDQxLjA0JSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgwLjk2MSwgMCwgMCwgMCwgMCwgMC45NjEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEpO1xuICB9XG5cbiAgNTIuMTUlIHtcbiAgICB0cmFuc2Zvcm06IG1hdHJpeDNkKDAuOTkxLCAwLCAwLCAwLCAwLCAwLjk5MSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSk7XG4gIH1cblxuICA2My4yNiUge1xuICAgIHRyYW5zZm9ybTogbWF0cml4M2QoMS4wMDcsIDAsIDAsIDAsIDAsIDEuMDA3LCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxKTtcbiAgfVxuXG4gIDg1LjQ5JSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgwLjk5OSwgMCwgMCwgMCwgMCwgMC45OTksIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxKTtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 88436:
/*!********************************************************************************************************!*\
  !*** ./projects/ngx-tencent-im/src/message/message-element/custom-element/custom-element.component.ts ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomElementComponent": function() { return /* binding */ CustomElementComponent; }
/* harmony export */ });
/* harmony import */ var _util_format_duration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../util/format-duration */ 31498);
/* harmony import */ var _util_trtc_custom_message_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/trtc-custom-message-map */ 30344);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _message_bubble_message_bubble_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../message-bubble/message-bubble.component */ 54759);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);





function CustomElementComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u5BF9IM DEMO\u7684\u8BC4\u5206\u548C\u5EFA\u8BAE");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.payload.extension);
} }
function CustomElementComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.text);
} }
class CustomElementComponent {
    constructor() { }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        this.text = this.translateCustomMessage(this.payload);
    }
    translateCustomMessage(payload) {
        let videoPayload = {
            action: 0,
            duration: 0
        };
        try {
            videoPayload = JSON.parse(payload.data);
        }
        catch (e) {
            videoPayload = {
                action: 0,
                duration: 0
            };
        }
        if (payload.data === 'group_create') {
            return `${payload.extension}`;
        }
        switch (videoPayload.action) {
            case _util_trtc_custom_message_map__WEBPACK_IMPORTED_MODULE_1__.ACTION.VIDEO_CALL_ACTION_DIALING:
                return '[请求通话]';
            case _util_trtc_custom_message_map__WEBPACK_IMPORTED_MODULE_1__.ACTION.VIDEO_CALL_ACTION_SPONSOR_CANCEL:
                return '[取消通话]';
            case _util_trtc_custom_message_map__WEBPACK_IMPORTED_MODULE_1__.ACTION.VIDEO_CALL_ACTION_REJECT:
                return '[拒绝通话]';
            case _util_trtc_custom_message_map__WEBPACK_IMPORTED_MODULE_1__.ACTION.VIDEO_CALL_ACTION_SPONSOR_TIMEOUT:
                return '[无应答]';
            case _util_trtc_custom_message_map__WEBPACK_IMPORTED_MODULE_1__.ACTION.VIDEO_CALL_ACTION_ACCEPTED:
                return '[开始通话]';
            case _util_trtc_custom_message_map__WEBPACK_IMPORTED_MODULE_1__.ACTION.VIDEO_CALL_ACTION_HANGUP:
                return `[结束通话，通话时长：${(0,_util_format_duration__WEBPACK_IMPORTED_MODULE_0__.formatDuration)(videoPayload.duration)}]`;
            case _util_trtc_custom_message_map__WEBPACK_IMPORTED_MODULE_1__.ACTION.VIDEO_CALL_ACTION_LINE_BUSY:
                return '[正在通话中]';
            case _util_trtc_custom_message_map__WEBPACK_IMPORTED_MODULE_1__.ACTION.VIDEO_CALL_ACTION_ERROR:
                return '[设备异常]';
            default:
                return '[自定义消息]';
        }
    }
}
CustomElementComponent.ɵfac = function CustomElementComponent_Factory(t) { return new (t || CustomElementComponent)(); };
CustomElementComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CustomElementComponent, selectors: [["app-custom-element"]], inputs: { message: "message", isMine: "isMine", payload: "payload" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 4, consts: [[3, "message", "isMine"], [1, "custom-element-wrapper"], ["class", "survey", 4, "ngIf", "ngIfElse"], ["other", ""], [1, "survey"], [1, "title"], [1, "suggestion"], ["title", "\u60A8\u53EF\u4EE5\u81EA\u884C\u89E3\u6790\u81EA\u5B9A\u4E49\u6D88\u606F", 1, "text"]], template: function CustomElementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-message-bubble", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CustomElementComponent_div_2_Template, 5, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CustomElementComponent_ng_template_3_Template, 2, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("message", ctx.message)("isMine", ctx.isMine);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.payload.data === "survey")("ngIfElse", _r1);
    } }, directives: [_message_bubble_message_bubble_component__WEBPACK_IMPORTED_MODULE_2__.MessageBubbleComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf], styles: [".text[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  padding-bottom: 10px;\n}\n.survey[_ngcontent-%COMP%] {\n  background-color: white;\n  color: black;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n}\n.suggestion[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1lbGVtZW50LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUFDRjtBQUVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUFBRjtBQUdBO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQURGO0FBSUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUFGRiIsImZpbGUiOiJjdXN0b20tZWxlbWVudC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi5zdXJ2ZXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uc3VnZ2VzdGlvbiB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG4iXX0= */"] });


/***/ }),

/***/ 42470:
/*!****************************************************************************************************!*\
  !*** ./projects/ngx-tencent-im/src/message/message-element/file-element/file-element.component.ts ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileElementComponent": function() { return /* binding */ FileElementComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _message_bubble_message_bubble_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../message-bubble/message-bubble.component */ 54759);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);




class FileElementComponent {
    constructor() { }
    ngOnInit() {
        this.fileUrl = this.payload.fileUrl;
        this.fileName = this.payload.fileName;
        this.getSize();
    }
    downloadFile() {
        // 浏览器支持fetch则用blob下载，避免浏览器点击a标签，跳转到新页面预览的行为
        if (window.fetch) {
            fetch(this.fileUrl)
                .then(res => res.blob())
                .then(blob => {
                let a = document.createElement('a');
                let url = window.URL.createObjectURL(blob);
                a.href = url;
                a.download = this.fileName;
                a.click();
            });
        }
        else {
            let a = document.createElement('a');
            a.href = this.fileUrl;
            a.target = '_blank';
            a.download = this.fileName;
            a.click();
        }
    }
    getSize() {
        const size = this.payload.fileSize;
        if (size > 1024) {
            if (size / 1024 > 1024) {
                this.fileSize = `${this.toFixed(size / 1024 / 1024)} Mb`;
                return;
            }
            this.fileSize = `${this.toFixed(size / 1024)} Kb`;
            return;
        }
        this.fileSize = `${this.toFixed(size)}B`;
    }
    toFixed(number, precision = 2) {
        return number.toFixed(precision);
    }
}
FileElementComponent.ɵfac = function FileElementComponent_Factory(t) { return new (t || FileElementComponent)(); };
FileElementComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FileElementComponent, selectors: [["app-file-element"]], inputs: { message: "message", isMine: "isMine", payload: "payload" }, decls: 9, vars: 4, consts: [[3, "message", "isMine"], ["title", "\u5355\u51FB\u4E0B\u8F7D", 1, "file-element-wrapper", 3, "click"], [1, "header"], ["nz-icon", "", "nzType", "file-text", "nzTheme", "outline"], [1, "file-element"], [1, "file-name"], [1, "file-size"]], template: function FileElementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-message-bubble", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FileElementComponent_Template_div_click_1_listener() { return ctx.downloadFile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("message", ctx.message)("isMine", ctx.isMine);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.fileName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.fileSize);
    } }, directives: [_message_bubble_message_bubble_component__WEBPACK_IMPORTED_MODULE_0__.MessageBubbleComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__.NzIconDirective], styles: [".file-element-wrapper[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n}\ni[_ngcontent-%COMP%] {\n  font-size: 40px !important;\n}\n.file-element[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-left: 12px;\n}\n.file-size[_ngcontent-%COMP%] {\n  font-size: 12px;\n  padding-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGUtZWxlbWVudC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRjtBQUVBO0VBQ0UsYUFBQTtBQUFGO0FBR0E7RUFDRSwwQkFBQTtBQURGO0FBSUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQUZGO0FBS0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFIRiIsImZpbGUiOiJmaWxlLWVsZW1lbnQuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsZS1lbGVtZW50LXdyYXBwZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG5pIHtcbiAgZm9udC1zaXplOiA0MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5maWxlLWVsZW1lbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tbGVmdDogMTJweDtcbn1cblxuLmZpbGUtc2l6ZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 3373:
/*!**********************************************************************************************************************************************!*\
  !*** ./projects/ngx-tencent-im/src/message/message-element/group-system-notice-element/approval-join-group/approval-join-group.component.ts ***!
  \**********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApprovalJoinGroupComponent": function() { return /* binding */ ApprovalJoinGroupComponent; }
/* harmony export */ });
/* harmony import */ var _shared_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared.data */ 54825);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../store/actions */ 10771);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 17562);
/* harmony import */ var _tim_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../tim-helper.service */ 92789);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/form */ 32734);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/radio */ 31031);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);














class ApprovalJoinGroupComponent {
    constructor(modalRef, store, timHelperService) {
        this.modalRef = modalRef;
        this.store = store;
        this.timHelperService = timHelperService;
        this.form = {
            handleAction: 'Agree',
            handleMessage: '',
        };
    }
    ngOnInit() {
    }
    handleGroupApplication() {
        this.timHelperService.tim
            .handleGroupApplication({
            handleAction: this.form.handleAction,
            handleMessage: this.form.handleMessage,
            message: this.message,
        })
            .then(() => {
            this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_1__.removeMessageAction)({ message: this.message }));
            this.modalRef.destroy();
        })
            .catch((error) => {
            this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_1__.showAction)({ msgType: _shared_data__WEBPACK_IMPORTED_MODULE_0__.MESSAGE_STATUS.error, message: error.message }));
        });
    }
}
ApprovalJoinGroupComponent.ɵfac = function ApprovalJoinGroupComponent_Factory(t) { return new (t || ApprovalJoinGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__.NzModalRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_tim_helper_service__WEBPACK_IMPORTED_MODULE_2__.TimHelperService)); };
ApprovalJoinGroupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ApprovalJoinGroupComponent, selectors: [["im-approval-join-group"]], inputs: { message: "message" }, decls: 22, vars: 8, consts: [["nz-form", ""], [3, "nzSpan"], ["name", "handleAction", 3, "ngModel", "ngModelChange"], ["nz-radio", "", "nzValue", "Agree"], ["nz-radio", "", "nzValue", "Reject"], ["rows", "3", "nz-input", "", "name", "handleMessage", 3, "ngModel", "ngModelChange"], ["nz-row", "", "nzJustify", "center"], ["nzPush", "8", 3, "nzSpan"], ["nz-button", "", "nzType", "primary", "type", "button", 3, "click"], ["nz-button", "", "nzType", "default", "type", "button", 3, "click"]], template: function ApprovalJoinGroupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\u5904\u7406\u7ED3\u679C");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "nz-form-control", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "nz-radio-group", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ApprovalJoinGroupComponent_Template_nz_radio_group_ngModelChange_5_listener($event) { return ctx.form.handleAction = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "\u540C\u610F");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "\u62D2\u7EDD");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "\u9644\u8A00");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "nz-form-control", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "textarea", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ApprovalJoinGroupComponent_Template_textarea_ngModelChange_14_listener($event) { return ctx.form.handleMessage = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "nz-form-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ApprovalJoinGroupComponent_Template_button_click_17_listener() { return ctx.handleGroupApplication(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "\u786E\u5B9A");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "nz-form-control", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ApprovalJoinGroupComponent_Template_button_click_20_listener() { return ctx.modalRef.destroy(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "\u53D6\u6D88");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSpan", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSpan", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.form.handleAction);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSpan", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSpan", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.form.handleMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSpan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSpan", 12);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormItemComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormControlComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_9__.NzRadioGroupComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_9__.NzRadioComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__["ɵNzTransitionPatchDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHByb3ZhbC1qb2luLWdyb3VwLmNvbXBvbmVudC5sZXNzIn0= */"], changeDetection: 0 });


/***/ }),

/***/ 6808:
/*!**********************************************************************************************************************************!*\
  !*** ./projects/ngx-tencent-im/src/message/message-element/group-system-notice-element/group-system-notice-element.component.ts ***!
  \**********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupSystemNoticeElementComponent": function() { return /* binding */ GroupSystemNoticeElementComponent; }
/* harmony export */ });
/* harmony import */ var _shared_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared.data */ 54825);
/* harmony import */ var _util_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/common */ 29386);
/* harmony import */ var _approval_join_group_approval_join_group_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./approval-join-group/approval-join-group.component */ 3373);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var _message_bubble_message_bubble_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../message-bubble/message-bubble.component */ 54759);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);










function GroupSystemNoticeElementComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GroupSystemNoticeElementComponent_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r1.approval(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\u5904\u7406");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class GroupSystemNoticeElementComponent {
    constructor(modal) {
        this.modal = modal;
        this.showDialog = false;
    }
    ngOnInit() {
        this.text = (0,_util_common__WEBPACK_IMPORTED_MODULE_1__.translateGroupSystemNotice)(this.message);
        if (this.message.type === _shared_data__WEBPACK_IMPORTED_MODULE_0__.TIM.TYPES.MSG_GRP_SYS_NOTICE) {
            this.title = '群系统通知';
        }
        else {
            this.title = '系统通知';
        }
        this.isJoinGroupRequest = (this.payload.operationType === 1);
    }
    approval() {
        this.modal.create({
            nzTitle: `处理加群申请`,
            nzContent: _approval_join_group_approval_join_group_component__WEBPACK_IMPORTED_MODULE_2__.ApprovalJoinGroupComponent,
            nzMaskClosable: false,
            nzFooter: null,
            nzWidth: '40%',
            nzStyle: { top: '20px' },
            nzComponentParams: {
                message: this.message
            }
        });
    }
}
GroupSystemNoticeElementComponent.ɵfac = function GroupSystemNoticeElementComponent_Factory(t) { return new (t || GroupSystemNoticeElementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__.NzModalService)); };
GroupSystemNoticeElementComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: GroupSystemNoticeElementComponent, selectors: [["app-group-system-notice-element"]], inputs: { message: "message", payload: "payload" }, decls: 4, vars: 4, consts: [[3, "message", "isMine"], [1, "group-system-element-wrapper"], ["nz-button", "", "type", "text", 3, "click", 4, "ngIf"], ["nz-button", "", "type", "text", 3, "click"]], template: function GroupSystemNoticeElementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-message-bubble", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, GroupSystemNoticeElementComponent_button_3_Template, 2, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("message", ctx.message)("isMine", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.text, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isJoinGroupRequest);
    } }, directives: [_message_bubble_message_bubble_component__WEBPACK_IMPORTED_MODULE_3__.MessageBubbleComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__["ɵNzTransitionPatchDirective"]], styles: [".card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 12px;\n  border-radius: 5px;\n  width: 300px;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyb3VwLXN5c3RlbS1ub3RpY2UtZWxlbWVudC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUNGO0FBTEE7RUFPSSxlQUFBO0FBQ0o7QUFSQTtFQVdJLGVBQUE7QUFBSiIsImZpbGUiOiJncm91cC1zeXN0ZW0tbm90aWNlLWVsZW1lbnQuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDMwMHB4O1xuXG4gIC5jYXJkLWhlYWRlciB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG5cbiAgLmNhcmQtY29udGVudCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 32911:
/*!**************************************************************************************************************!*\
  !*** ./projects/ngx-tencent-im/src/message/message-element/group-tip-element/group-tip-element.component.ts ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupTipElementComponent": function() { return /* binding */ GroupTipElementComponent; }
/* harmony export */ });
/* harmony import */ var tim_js_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tim-js-sdk */ 92882);
/* harmony import */ var tim_js_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tim_js_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


class GroupTipElementComponent {
    constructor() { }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        this.text = this.getGroupTipContent(this.message);
    }
    getGroupTipContent(message) {
        const userName = message.nick || message.payload.userIDList.join(',');
        switch (message.payload.operationType) {
            case (tim_js_sdk__WEBPACK_IMPORTED_MODULE_0___default().TYPES.GRP_TIP_MBR_JOIN):
                return `群成员：${userName} 加入群组`;
            case (tim_js_sdk__WEBPACK_IMPORTED_MODULE_0___default().TYPES.GRP_TIP_MBR_QUIT):
                return `群成员：${userName} 退出群组`;
            case (tim_js_sdk__WEBPACK_IMPORTED_MODULE_0___default().TYPES.GRP_TIP_MBR_KICKED_OUT):
                return `群成员：${userName} 被${message.payload.operatorID}踢出群组`;
            case (tim_js_sdk__WEBPACK_IMPORTED_MODULE_0___default().TYPES.GRP_TIP_MBR_SET_ADMIN):
                return `群成员：${userName} 成为管理员`;
            case (tim_js_sdk__WEBPACK_IMPORTED_MODULE_0___default().TYPES.GRP_TIP_MBR_CANCELED_ADMIN):
                return `群成员：${userName} 被撤销管理员`;
            case (tim_js_sdk__WEBPACK_IMPORTED_MODULE_0___default().TYPES.GRP_TIP_GRP_PROFILE_UPDATED):
                return '群资料修改';
            case (tim_js_sdk__WEBPACK_IMPORTED_MODULE_0___default().TYPES.GRP_TIP_MBR_PROFILE_UPDATED):
                for (let member of message.payload.memberList) {
                    if (member.muteTime > 0) {
                        return `群成员：${member.userID}被禁言${member.muteTime}秒`;
                    }
                    else {
                        return `群成员：${member.userID}被取消禁言`;
                    }
                }
                break;
            default:
                return '[群提示消息]';
        }
    }
}
GroupTipElementComponent.ɵfac = function GroupTipElementComponent_Factory(t) { return new (t || GroupTipElementComponent)(); };
GroupTipElementComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GroupTipElementComponent, selectors: [["app-group-tip-element"]], inputs: { message: "message", isMine: "isMine", payload: "payload" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 1, consts: [[1, "group-tip-element-wrapper"]], template: function GroupTipElementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.text);
    } }, styles: [".group-tip-element-wrapper[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 4px 15px;\n  border-radius: 3px;\n  color: #a5b5c1;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyb3VwLXRpcC1lbGVtZW50LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFDRiIsImZpbGUiOiJncm91cC10aXAtZWxlbWVudC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncm91cC10aXAtZWxlbWVudC13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogNHB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgY29sb3I6ICNhNWI1YzE7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgLy8gdGV4dC1zaGFkb3cgJHNlY29uZGFyeSAwIDAgMC4wNWVtXG59XG4iXX0= */"] });


/***/ }),

/***/ 77432:
/*!******************************************************************************************************!*\
  !*** ./projects/ngx-tencent-im/src/message/message-element/image-element/image-element.component.ts ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageElementComponent": function() { return /* binding */ ImageElementComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _message_bubble_message_bubble_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../message-bubble/message-bubble.component */ 54759);
/* harmony import */ var ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/image */ 77);



class ImageElementComponent {
    constructor() { }
    ngOnInit() {
        const url = this.payload.imageInfoArray[0].imageUrl;
        if (typeof url !== 'string') {
            this.imageUrl = '';
        }
        this.imageUrl = url.slice(0, 2) === '//' ? `https:${url}` : url;
    }
}
ImageElementComponent.ɵfac = function ImageElementComponent_Factory(t) { return new (t || ImageElementComponent)(); };
ImageElementComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ImageElementComponent, selectors: [["app-image-element"]], inputs: { message: "message", isMine: "isMine", payload: "payload", percent: "percent" }, decls: 2, vars: 3, consts: [[3, "message", "isMine"], ["nz-image", "", 1, "image-element", 3, "nzSrc"]], template: function ImageElementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-message-bubble", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("message", ctx.message)("isMine", ctx.isMine);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSrc", ctx.imageUrl);
    } }, directives: [_message_bubble_message_bubble_component__WEBPACK_IMPORTED_MODULE_0__.MessageBubbleComponent, ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_2__.NzImageDirective], styles: [".image-element[_ngcontent-%COMP%] {\n  max-width: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlLWVsZW1lbnQuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGIiwiZmlsZSI6ImltYWdlLWVsZW1lbnQuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2UtZWxlbWVudCB7XG4gIG1heC13aWR0aDogMjUwcHg7XG4gIC8vIGN1cnNvcjogem9vbS1pbjtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 95243:
/*!**********************************************************************!*\
  !*** ./projects/ngx-tencent-im/src/message/message-element/index.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileElementComponent": function() { return /* reexport safe */ _file_element_file_element_component__WEBPACK_IMPORTED_MODULE_0__.FileElementComponent; },
/* harmony export */   "ImageElementComponent": function() { return /* reexport safe */ _image_element_image_element_component__WEBPACK_IMPORTED_MODULE_1__.ImageElementComponent; },
/* harmony export */   "TextElementComponent": function() { return /* reexport safe */ _text_element_text_element_component__WEBPACK_IMPORTED_MODULE_2__.TextElementComponent; }
/* harmony export */ });
/* harmony import */ var _file_element_file_element_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file-element/file-element.component */ 42470);
/* harmony import */ var _image_element_image_element_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-element/image-element.component */ 77432);
/* harmony import */ var _text_element_text_element_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text-element/text-element.component */ 17934);





/***/ }),

/***/ 17934:
/*!****************************************************************************************************!*\
  !*** ./projects/ngx-tencent-im/src/message/message-element/text-element/text-element.component.ts ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextElementComponent": function() { return /* binding */ TextElementComponent; }
/* harmony export */ });
/* harmony import */ var _util_decode_text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../util/decode-text */ 13213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _message_bubble_message_bubble_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../message-bubble/message-bubble.component */ 54759);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);




function TextElementComponent_ng_container_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.text);
} }
function TextElementComponent_ng_container_1_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 4);
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", item_r1.src, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function TextElementComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TextElementComponent_ng_container_1_span_1_Template, 2, 1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TextElementComponent_ng_container_1_img_2_Template, 1, 1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1.name === "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1.name === "img");
} }
class TextElementComponent {
    constructor() { }
    ngOnInit() {
        this.contentList = (0,_util_decode_text__WEBPACK_IMPORTED_MODULE_0__.decodeText)(this.payload);
    }
}
TextElementComponent.ɵfac = function TextElementComponent_Factory(t) { return new (t || TextElementComponent)(); };
TextElementComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TextElementComponent, selectors: [["app-text-element"]], inputs: { message: "message", isMine: "isMine", payload: "payload" }, decls: 2, vars: 3, consts: [[3, "message", "isMine"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["width", "20px", "height", "20px", 3, "src", 4, "ngIf"], ["width", "20px", "height", "20px", 3, "src"]], template: function TextElementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-message-bubble", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TextElementComponent_ng_container_1_Template, 3, 2, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("message", ctx.message)("isMine", ctx.isMine);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.contentList);
    } }, directives: [_message_bubble_message_bubble_component__WEBPACK_IMPORTED_MODULE_1__.MessageBubbleComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXh0LWVsZW1lbnQuY29tcG9uZW50Lmxlc3MifQ== */"] });


/***/ }),

/***/ 22103:
/*!****************************************************************************************!*\
  !*** ./projects/ngx-tencent-im/src/message/message-footer/message-footer.component.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageFooterComponent": function() { return /* binding */ MessageFooterComponent; }
/* harmony export */ });
/* harmony import */ var _util_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/date */ 90570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


const _c0 = function (a0) { return [a0]; };
class MessageFooterComponent {
    constructor() { }
    ngOnInit() {
    }
    get isMine() {
        return this.message.flow === 'out';
    }
    get date() {
        return (0,_util_date__WEBPACK_IMPORTED_MODULE_0__.getFullDate)(new Date(this.message.time * 1000));
    }
}
MessageFooterComponent.ɵfac = function MessageFooterComponent_Factory(t) { return new (t || MessageFooterComponent)(); };
MessageFooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MessageFooterComponent, selectors: [["app-message-footer"]], inputs: { message: "message" }, decls: 3, vars: 5, consts: [[1, "base"], [1, "date"]], template: function MessageFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, ctx.isMine ? "right" : "left"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.date);
    } }, styles: [".right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row-reverse;\n  margin-right: 15px;\n}\n.left[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin-left: 15px;\n}\n.base[_ngcontent-%COMP%] {\n  color: #a5b5c1;\n  font-size: 12px;\n}\n.name[_ngcontent-%COMP%] {\n  padding: 0 4px;\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2UtZm9vdGVyLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFBRjtBQUdBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFERjtBQUlBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBRkYiLCJmaWxlIjoibWVzc2FnZS1mb290ZXIuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLmxlZnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuLmJhc2Uge1xuICBjb2xvcjogI2E1YjVjMTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ubmFtZSB7XG4gIHBhZGRpbmc6IDAgNHB4O1xuICBtYXgtd2lkdGg6IDEwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 45784:
/*!****************************************************************************************!*\
  !*** ./projects/ngx-tencent-im/src/message/message-header/message-header.component.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageHeaderComponent": function() { return /* binding */ MessageHeaderComponent; }
/* harmony export */ });
/* harmony import */ var _util_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/date */ 90570);
/* harmony import */ var tim_js_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tim-js-sdk */ 92882);
/* harmony import */ var tim_js_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tim_js_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 17562);




const _c0 = function (a0) { return [a0]; };
class MessageHeaderComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
    }
    get isMine() {
        return this.message.flow === 'out';
    }
    get date() {
        return (0,_util_date__WEBPACK_IMPORTED_MODULE_0__.getFullDate)(new Date(this.message.time * 1000));
    }
    get from() {
        const isC2C = this.currentConversation.type === (tim_js_sdk__WEBPACK_IMPORTED_MODULE_1___default().TYPES.CONV_C2C);
        // 自己发送的用昵称渲染
        if (this.isMine) {
            return this.currentUserProfile.nick || this.currentUserProfile.userID;
        }
        // 1. C2C 的消息体中还无 nick / avatar 字段，需从 conversation.userProfile 中获取
        if (isC2C) {
            return this.currentConversation.userProfile.nick || this.currentConversation.userProfile.userID;
        }
        else if (this.currentConversation.type === (tim_js_sdk__WEBPACK_IMPORTED_MODULE_1___default().TYPES.CONV_SYSTEM)) {
            return this.message.type === (tim_js_sdk__WEBPACK_IMPORTED_MODULE_1___default().TYPES.MSG_GRP_SYS_NOTICE) ? '群系统通知' : '系统通知';
        }
        // 2. 群组消息，用消息体中的 nick 渲染。nameCard暂时支持不完善
        return this.message.nick || this.message.from;
    }
}
MessageHeaderComponent.ɵfac = function MessageHeaderComponent_Factory(t) { return new (t || MessageHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.Store)); };
MessageHeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MessageHeaderComponent, selectors: [["app-message-header"]], inputs: { message: "message", currentUserProfile: "currentUserProfile", currentConversation: "currentConversation" }, decls: 5, vars: 6, consts: [[1, "base"], [1, "name", "text-ellipsis"], [1, "date"]], template: function MessageHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c0, ctx.isMine ? "right" : "left"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.from);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.date);
    } }, styles: [".right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row-reverse;\n}\n.left[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n.base[_ngcontent-%COMP%] {\n  color: #a5b5c1;\n  font-size: 12px;\n}\n.name[_ngcontent-%COMP%] {\n  padding: 0 4px;\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2UtaGVhZGVyLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0FBQ0Y7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUFGO0FBR0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQURGO0FBSUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFGRiIsImZpbGUiOiJtZXNzYWdlLWhlYWRlci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbn1cblxuLmxlZnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uYmFzZSB7XG4gIGNvbG9yOiAjYTViNWMxO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5uYW1lIHtcbiAgcGFkZGluZzogMCA0cHg7XG4gIG1heC13aWR0aDogMTAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuIl19 */"] });


/***/ }),

/***/ 39437:
/*!************************************************************************************!*\
  !*** ./projects/ngx-tencent-im/src/message/message-item/message-item.component.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageItemComponent": function() { return /* binding */ MessageItemComponent; }
/* harmony export */ });
/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/selectors */ 29716);
/* harmony import */ var tim_js_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tim-js-sdk */ 92882);
/* harmony import */ var tim_js_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tim_js_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/store */ 17562);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _avatar_avatar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../avatar/avatar.component */ 50008);
/* harmony import */ var _message_status_icon_message_status_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../message-status-icon/message-status-icon.component */ 75393);
/* harmony import */ var _message_element_text_element_text_element_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../message-element/text-element/text-element.component */ 17934);
/* harmony import */ var _message_element_image_element_image_element_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../message-element/image-element/image-element.component */ 77432);
/* harmony import */ var _message_element_file_element_file_element_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../message-element/file-element/file-element.component */ 42470);
/* harmony import */ var _message_footer_message_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../message-footer/message-footer.component */ 22103);
/* harmony import */ var _message_header_message_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../message-header/message-header.component */ 45784);
/* harmony import */ var _message_element_group_tip_element_group_tip_element_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../message-element/group-tip-element/group-tip-element.component */ 32911);
/* harmony import */ var _message_element_custom_element_custom_element_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../message-element/custom-element/custom-element.component */ 88436);
/* harmony import */ var _message_element_group_system_notice_element_group_system_notice_element_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../message-element/group-system-notice-element/group-system-notice-element.component */ 6808);















function MessageItemComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "im-avatar", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("src", ctx_r3.avatar);
} }
function MessageItemComponent_div_1_app_message_status_icon_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "app-message-status-icon", 13);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("message", ctx_r4.message);
} }
function MessageItemComponent_div_1_app_text_element_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "app-text-element", 14);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("isMine", ctx_r5.isMine)("message", ctx_r5.message)("payload", ctx_r5.message.payload);
} }
function MessageItemComponent_div_1_app_image_element_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "app-image-element", 14);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("isMine", ctx_r6.isMine)("message", ctx_r6.message)("payload", ctx_r6.message.payload);
} }
function MessageItemComponent_div_1_app_file_element_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "app-file-element", 14);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("isMine", ctx_r7.isMine)("message", ctx_r7.message)("payload", ctx_r7.message.payload);
} }
function MessageItemComponent_div_1_app_message_footer_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "app-message-footer", 13);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("message", ctx_r8.message);
} }
function MessageItemComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, MessageItemComponent_div_1_div_1_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, MessageItemComponent_div_1_app_message_status_icon_4_Template, 1, 1, "app-message-status-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, MessageItemComponent_div_1_app_text_element_5_Template, 1, 3, "app-text-element", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, MessageItemComponent_div_1_app_image_element_6_Template, 1, 3, "app-image-element", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, MessageItemComponent_div_1_app_file_element_7_Template, 1, 3, "app-file-element", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, MessageItemComponent_div_1_app_message_footer_8_Template, 1, 1, "app-message-footer", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMap"](ctx_r0.messagePosition);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r0.showAvatar);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r0.isMine);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r0.message.type === ctx_r0.TIM.TYPES.MSG_TEXT);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r0.message.type === ctx_r0.TIM.TYPES.MSG_IMAGE);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r0.message.type === ctx_r0.TIM.TYPES.MSG_FILE);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r0.showMessageHeader);
} }
function MessageItemComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "im-avatar", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("src", ctx_r9.avatar);
} }
function MessageItemComponent_div_2_app_message_header_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "app-message-header", 18);
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("message", ctx_r10.message)("currentConversation", ctx_r10.currentConversation)("currentUserProfile", ctx_r10.currentUserProfile);
} }
function MessageItemComponent_div_2_app_message_status_icon_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "app-message-status-icon", 13);
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("message", ctx_r11.message);
} }
function MessageItemComponent_div_2_app_text_element_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "app-text-element", 14);
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("isMine", ctx_r12.isMine)("message", ctx_r12.message)("payload", ctx_r12.message.payload);
} }
function MessageItemComponent_div_2_app_image_element_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "app-image-element", 14);
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("isMine", ctx_r13.isMine)("message", ctx_r13.message)("payload", ctx_r13.message.payload);
} }
function MessageItemComponent_div_2_app_file_element_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "app-file-element", 14);
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("isMine", ctx_r14.isMine)("message", ctx_r14.message)("payload", ctx_r14.message.payload);
} }
function MessageItemComponent_div_2_app_group_tip_element_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "app-group-tip-element", 14);
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("isMine", ctx_r15.isMine)("message", ctx_r15.message)("payload", ctx_r15.message.payload);
} }
function MessageItemComponent_div_2_app_custom_element_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "app-custom-element", 14);
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("isMine", ctx_r16.isMine)("message", ctx_r16.message)("payload", ctx_r16.message.payload);
} }
function MessageItemComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, MessageItemComponent_div_2_div_1_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, MessageItemComponent_div_2_app_message_header_3_Template, 1, 3, "app-message-header", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, MessageItemComponent_div_2_app_message_status_icon_5_Template, 1, 1, "app-message-status-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, MessageItemComponent_div_2_app_text_element_6_Template, 1, 3, "app-text-element", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, MessageItemComponent_div_2_app_image_element_7_Template, 1, 3, "app-image-element", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, MessageItemComponent_div_2_app_file_element_8_Template, 1, 3, "app-file-element", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, MessageItemComponent_div_2_app_group_tip_element_9_Template, 1, 3, "app-group-tip-element", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](10, MessageItemComponent_div_2_app_custom_element_10_Template, 1, 3, "app-custom-element", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMap"](ctx_r1.messagePosition);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.showAvatar);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.showMessageHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.isMine);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.message.type === ctx_r1.TIM.TYPES.MSG_TEXT);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.message.type === ctx_r1.TIM.TYPES.MSG_IMAGE);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.message.type === ctx_r1.TIM.TYPES.MSG_FILE);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.message.type === ctx_r1.TIM.TYPES.MSG_GRP_TIP);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.message.type === ctx_r1.TIM.TYPES.MSG_CUSTOM);
} }
function MessageItemComponent_div_3_app_message_header_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "app-message-header", 18);
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("message", ctx_r17.message)("currentConversation", ctx_r17.currentConversation)("currentUserProfile", ctx_r17.currentUserProfile);
} }
function MessageItemComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "im-avatar", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, MessageItemComponent_div_3_app_message_header_4_Template, 1, 3, "app-message-header", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](5, "app-group-system-notice-element", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("src", ctx_r2.avatar)("type", ctx_r2.currentConversationType);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r2.showMessageHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("message", ctx_r2.message)("payload", ctx_r2.message.payload);
} }
class MessageItemComponent {
    constructor(store) {
        this.store = store;
        this.TIM = (tim_js_sdk__WEBPACK_IMPORTED_MODULE_1___default());
    }
    ngOnInit() {
        this.subscription = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_0__.currentUserProfileSelector)
            .subscribe(res => {
            this.currentUserProfile = res;
        });
    }
    // 是否显示头像，群提示消息不显示头像
    get showAvatar() {
        if (this.currentConversation.type === 'C2C' && !this.message.isRevoked) { // C2C且没有撤回的消息
            return true;
        }
        else if (this.currentConversation.type === 'GROUP' && !this.message.isRevoked) { // group且没有撤回的消息
            return this.message.type !== this.TIM.TYPES.MSG_GRP_TIP;
        }
        return false;
    }
    get currentConversationType() {
        if (this.currentConversation) {
            return this.currentConversation.type;
        }
    }
    get avatar() {
        if (this.currentConversation.type === 'C2C') {
            return this.isMine
                ? this.currentUserProfile.avatar
                : this.currentConversation.userProfile.avatar;
        }
        else if (this.currentConversation.type === 'GROUP') {
            return this.isMine
                ? this.currentUserProfile.avatar
                : this.message.avatar;
        }
        else {
            return '';
        }
    }
    get isMine() {
        return this.message.flow === 'out';
    }
    get messagePosition() {
        if (['TIMGroupTipElem', 'TIMGroupSystemNoticeElem'].includes(this.message.type)) {
            return 'position-center';
        }
        if (this.message.isRevoked) { // 撤回消息
            return 'position-center';
        }
        if (this.isMine) {
            return 'position-right';
        }
        return 'position-left';
    }
    get showMessageHeader() {
        if (['TIMGroupTipElem', 'TIMGroupSystemNoticeElem'].includes(this.message.type)) {
            return false;
        }
        if (this.message.isRevoked) { // 撤回消息
            return false;
        }
        return true;
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
MessageItemComponent.ɵfac = function MessageItemComponent_Factory(t) { return new (t || MessageItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_13__.Store)); };
MessageItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: MessageItemComponent, selectors: [["app-message-item"]], inputs: { currentConversation: "currentConversation", message: "message" }, decls: 4, vars: 5, consts: [[1, "message-wrapper"], ["class", "c2c-layout", 3, "class", 4, "ngIf"], ["class", "group-layout", 3, "class", 4, "ngIf"], ["class", "system-layout", 4, "ngIf"], [1, "c2c-layout"], ["class", "col-1", 4, "ngIf"], [1, "col-2"], [1, "content-wrapper"], [3, "message", 4, "ngIf"], [3, "isMine", "message", "payload", 4, "ngIf"], [1, "col-3"], [1, "col-1"], [3, "src"], [3, "message"], [3, "isMine", "message", "payload"], [1, "group-layout"], [3, "message", "currentConversation", "currentUserProfile", 4, "ngIf"], [1, "group-member-avatar", 3, "src"], [3, "message", "currentConversation", "currentUserProfile"], [1, "system-layout"], [3, "src", "type"], [3, "message", "payload"]], template: function MessageItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, MessageItemComponent_div_1_Template, 10, 8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, MessageItemComponent_div_2_Template, 12, 10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, MessageItemComponent_div_3_Template, 6, 5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMap"](ctx.messagePosition);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.currentConversationType === ctx.TIM.TYPES.CONV_C2C);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.currentConversationType === ctx.TIM.TYPES.CONV_GROUP);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.currentConversationType === ctx.TIM.TYPES.CONV_SYSTEM);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _avatar_avatar_component__WEBPACK_IMPORTED_MODULE_2__.AvatarComponent, _message_status_icon_message_status_icon_component__WEBPACK_IMPORTED_MODULE_3__.MessageStatusIconComponent, _message_element_text_element_text_element_component__WEBPACK_IMPORTED_MODULE_4__.TextElementComponent, _message_element_image_element_image_element_component__WEBPACK_IMPORTED_MODULE_5__.ImageElementComponent, _message_element_file_element_file_element_component__WEBPACK_IMPORTED_MODULE_6__.FileElementComponent, _message_footer_message_footer_component__WEBPACK_IMPORTED_MODULE_7__.MessageFooterComponent, _message_header_message_header_component__WEBPACK_IMPORTED_MODULE_8__.MessageHeaderComponent, _message_element_group_tip_element_group_tip_element_component__WEBPACK_IMPORTED_MODULE_9__.GroupTipElementComponent, _message_element_custom_element_custom_element_component__WEBPACK_IMPORTED_MODULE_10__.CustomElementComponent, _message_element_group_system_notice_element_group_system_notice_element_component__WEBPACK_IMPORTED_MODULE_11__.GroupSystemNoticeElementComponent], styles: [".message-wrapper[_ngcontent-%COMP%] {\n  margin: 20px 0;\n}\n.message-wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.group-layout[_ngcontent-%COMP%], .c2c-layout[_ngcontent-%COMP%], .system-layout[_ngcontent-%COMP%] {\n  display: flex;\n}\n.group-layout[_ngcontent-%COMP%]   .group-member-avatar[_ngcontent-%COMP%], .c2c-layout[_ngcontent-%COMP%]   .group-member-avatar[_ngcontent-%COMP%], .system-layout[_ngcontent-%COMP%]   .group-member-avatar[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.group-layout[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%], .c2c-layout[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%], .system-layout[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.group-layout[_ngcontent-%COMP%]   .col-3[_ngcontent-%COMP%], .c2c-layout[_ngcontent-%COMP%]   .col-3[_ngcontent-%COMP%], .system-layout[_ngcontent-%COMP%]   .col-3[_ngcontent-%COMP%] {\n  width: 30px;\n}\n.group-layout.position-left[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%], .c2c-layout.position-left[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%], .system-layout.position-left[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%] {\n  align-items: flex-start;\n}\n.group-layout.position-right[_ngcontent-%COMP%], .c2c-layout.position-right[_ngcontent-%COMP%], .system-layout.position-right[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.group-layout.position-right[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%], .c2c-layout.position-right[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%], .system-layout.position-right[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%] {\n  align-items: flex-end;\n}\n.group-layout.position-center[_ngcontent-%COMP%], .c2c-layout.position-center[_ngcontent-%COMP%], .system-layout.position-center[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.c2c-layout[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%]   .base[_ngcontent-%COMP%] {\n  margin-top: 3px;\n}\n.group-layout[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%]   .chat-bubble[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n[_nghost-%COMP%]     .avatar {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2UtaXRlbS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjtBQUZBO0VBSUksYUFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFHQTs7O0VBR0UsYUFBQTtBQURGO0FBRkE7OztFQWVJLGVBQUE7QUFSSjtBQVBBOzs7RUFtQkksYUFBQTtFQUNBLHNCQUFBO0FBUEo7QUFiQTs7O0VBeUJJLFdBQUE7QUFQSjtBQVVFOzs7RUFFSSx1QkFBQTtBQVBOO0FBV0U7OztFQUNFLDJCQUFBO0FBUEo7QUFNRTs7O0VBSUkscUJBQUE7QUFMTjtBQVNFOzs7RUFDRSx1QkFBQTtBQUxKO0FBU0E7RUFHTSxlQUFBO0FBVE47QUFjQTtFQUdNLGVBQUE7QUFkTjtBQW1CQTtFQUVJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQ0FBQTtBQWxCSiIsImZpbGUiOiJtZXNzYWdlLWl0ZW0uY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVzc2FnZS13cmFwcGVyIHtcbiAgbWFyZ2luOiAyMHB4IDA7XG5cbiAgLmNvbnRlbnQtd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG59XG5cbi5ncm91cC1sYXlvdXQsXG4uYzJjLWxheW91dCxcbi5zeXN0ZW0tbGF5b3V0IHtcbiAgZGlzcGxheTogZmxleDtcblxuICAvLyAuY29sLTEge1xuICAvLyAgIC5hdmF0YXIge1xuICAvLyAgICAgd2lkdGg6IDU2cHg7XG4gIC8vICAgICBoZWlnaHQ6IDU2cHg7XG4gIC8vICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIC8vICAgICBib3gtc2hhZG93OiAwIDVweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAvLyAgIH1cbiAgLy8gfVxuXG4gIC5ncm91cC1tZW1iZXItYXZhdGFyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAuY29sLTIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAvLyBtYXgtd2lkdGggNTAlIC8vIOatpOiuvue9ruWPr+S7peiHqumAguW6lOWuveW6pu+8jOebruWJjeeUsWJ1YmJsZemZkOWItlxuICB9XG5cbiAgLmNvbC0zIHtcbiAgICB3aWR0aDogMzBweDtcbiAgfVxuXG4gICYucG9zaXRpb24tbGVmdCB7XG4gICAgLmNvbC0yIHtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIH1cbiAgfVxuXG4gICYucG9zaXRpb24tcmlnaHQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcblxuICAgIC5jb2wtMiB7XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgfVxuICB9XG5cbiAgJi5wb3NpdGlvbi1jZW50ZXIge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG5cbi5jMmMtbGF5b3V0IHtcbiAgLmNvbC0yIHtcbiAgICAuYmFzZSB7XG4gICAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgfVxuICB9XG59XG5cbi5ncm91cC1sYXlvdXQge1xuICAuY29sLTIge1xuICAgIC5jaGF0LWJ1YmJsZSB7XG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgfVxuICB9XG59XG5cbjpob3N0IDo6bmctZGVlcCB7XG4gIC5hdmF0YXIge1xuICAgIHdpZHRoOiA1NnB4O1xuICAgIGhlaWdodDogNTZweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm94LXNoYWRvdzogMCA1cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 64038:
/*!********************************************************************************************!*\
  !*** ./projects/ngx-tencent-im/src/message/message-send-box/message-send-box.component.ts ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageSendBoxComponent": function() { return /* binding */ MessageSendBoxComponent; }
/* harmony export */ });
/* harmony import */ var _shared_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared.data */ 54825);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/actions */ 10771);
/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/selectors */ 29716);
/* harmony import */ var _util_emoji_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/emoji-map */ 29424);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 17562);
/* harmony import */ var _tim_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../tim-helper.service */ 92789);
/* harmony import */ var _re_edit_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../re-edit-message.service */ 41228);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/popover */ 8813);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 79787);
















const _c0 = ["imagePicker"];
const _c1 = ["filePicker"];
const _c2 = ["textInput"];
function MessageSendBoxComponent_ng_template_16_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MessageSendBoxComponent_ng_template_16_div_1_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8); const item_r6 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r7.chooseEmoji(item_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r5.emojiUrl + ctx_r5.emojiMap[item_r6], _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
} }
const _c3 = function () { return { "width": "400px" }; };
function MessageSendBoxComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, MessageSendBoxComponent_ng_template_16_div_1_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](2, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r4.emojiName);
} }
const _c4 = function (a0) { return { "white-background": a0 }; };
class MessageSendBoxComponent {
    constructor(store, cd, timHelperService, reEditMessage) {
        this.store = store;
        this.cd = cd;
        this.timHelperService = timHelperService;
        this.reEditMessage = reEditMessage;
        this.visible = false;
        this.emojiName = _util_emoji_map__WEBPACK_IMPORTED_MODULE_3__.emojiName;
        this.emojiUrl = _util_emoji_map__WEBPACK_IMPORTED_MODULE_3__.emojiUrl;
        this.emojiMap = _util_emoji_map__WEBPACK_IMPORTED_MODULE_3__.emojiMap;
        this.focus = false;
        // 消息内容
        this.messageContent = '';
    }
    ngOnInit() {
        this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_2__.currentConversationSelector).subscribe(currentConversation => {
            this.currentConversation = currentConversation;
            if (!currentConversation || !currentConversation.conversationID) {
                this.toAccount = '';
            }
            else {
                switch (currentConversation.type) {
                    case 'C2C':
                        this.toAccount = currentConversation.conversationID.replace('C2C', '');
                        break;
                    case 'GROUP':
                        this.toAccount = currentConversation.conversationID.replace('GROUP', '');
                        break;
                    default:
                        this.toAccount = currentConversation.conversationID;
                }
            }
            if (!currentConversation || !currentConversation.type) {
                this.currentConversationType = '';
            }
            else {
                this.currentConversationType = currentConversation.type;
            }
        });
        this.textInput.nativeElement.addEventListener('paste', this.handlePaste.bind(this));
        this.reEditMessage.reEditMessage.subscribe((payload) => {
            this.messageContent = payload;
            this.cd.markForCheck();
        });
    }
    onfocus(event) {
        console.log('onfocus');
        this.focus = true;
        console.log(this.currentConversation);
        this.timHelperService.checkoutConversation(this.currentConversation.conversationID);
    }
    onblur(event) {
        console.log('onblur');
        this.focus = false;
    }
    handleEnter(event) {
        this.sendTextMessage();
    }
    handleLine(event) {
        event.preventDefault();
        if (event.ctrlKey && event.key === 'Enter') {
            this.messageContent += '\n';
        }
    }
    handleUp(event) {
        console.log('handleUp::', event);
    }
    handleDown(event) {
        console.log('handleDown::', event);
    }
    keyDown(event) {
        if (!event.ctrlKey && event.key === 'Enter') {
            event.preventDefault();
            this.handleEnter(event);
        }
        if (event.key === 'ArrowUp') {
            event.stopPropagation();
            this.handleUp(event);
        }
        if (event.key === 'ArrowDown') {
            event.stopPropagation();
            this.handleDown(event);
        }
    }
    handlePaste(e) {
        const clipboardData = e.clipboardData;
        let file;
        if (clipboardData && clipboardData.files && clipboardData.files.length > 0) {
            file = clipboardData.files[0];
        }
        if (typeof file === 'undefined') {
            return;
        }
        // 1. 创建消息实例，接口返回的实例可以上屏
        const message = this.timHelperService.tim.createImageMessage({
            to: this.toAccount,
            conversationType: this.currentConversationType,
            payload: {
                file,
            },
            onProgress: (percent) => {
                message.progress = percent; // 手动给message 实例加个响应式属性: progress
            },
        });
        // 2. 发送消息
        const promise = this.timHelperService.tim.sendMessage(message).then(res => {
            this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_1__.pushCurrentMessageListAction)({ message }));
        });
        promise.catch((error) => {
            console.error('[sendMessage error]::', error);
        });
    }
    sendImage(event) {
        console.log('sendImage');
        const message = this.timHelperService.tim.createImageMessage({
            to: this.toAccount,
            conversationType: this.currentConversationType,
            payload: {
                file: this.imagePicker.nativeElement // 或者用event.target
            },
            onProgress: (percent) => {
                // 手动给message 实例加个响应式属性: progress
                message.progress = percent;
                console.log('percent:', percent);
            }
        });
        this.timHelperService.tim
            .sendMessage(message)
            .then(({ data }) => {
            console.log('发送成功', data);
            this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_1__.pushCurrentMessageListAction)({ message: Object.assign({}, data.message) }));
            this.imagePicker.nativeElement.value = null;
        })
            .catch(imError => {
            console.error('imError::', imError);
        });
    }
    sendFile(event) {
        const message = this.timHelperService.tim.createFileMessage({
            to: this.toAccount,
            conversationType: this.currentConversationType,
            payload: {
                file: document.getElementById('filePicker'), // 或者用event.target
            },
            onProgress: (percent) => {
                message.progress = percent;
                console.log('上传进度', percent);
            },
        });
        this.timHelperService.tim
            .sendMessage(message)
            .then(({ data }) => {
            this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_1__.pushCurrentMessageListAction)({ message: Object.assign({}, data.message) }));
            this.filePicker.nativeElement.value = null;
        })
            .catch((imError) => {
            console.error('imError::', imError);
        });
    }
    chooseEmoji(item) {
        console.log(item);
        this.messageContent += item;
    }
    sendTextMessage() {
        if (this.messageContent === '' ||
            this.messageContent.trim().length === 0) {
            this.messageContent = '';
            this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_1__.showAction)({ msgType: _shared_data__WEBPACK_IMPORTED_MODULE_0__.MESSAGE_STATUS.warning, message: '不能发送空消息哦！' }));
            return;
        }
        const message = this.timHelperService.tim.createTextMessage({
            to: this.toAccount,
            conversationType: this.currentConversationType,
            payload: { text: this.messageContent }
        });
        this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_1__.pushCurrentMessageListAction)({ message }));
        this.timHelperService.eventBus$.next('scroll-bottom');
        this.timHelperService.tim.sendMessage(message).catch(error => {
            console.error('[sendMessage error]::', error);
        });
        this.messageContent = '';
    }
    handleSendImageClick(input, event) {
        event.stopPropagation();
        input.click();
    }
    handleSendFileClick(input) {
        input.click();
    }
    ngOnDestroy() {
        this.textInput.nativeElement.addEventListener('paste', this.handlePaste.bind(this));
    }
}
MessageSendBoxComponent.ɵfac = function MessageSendBoxComponent_Factory(t) { return new (t || MessageSendBoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_tim_helper_service__WEBPACK_IMPORTED_MODULE_4__.TimHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_re_edit_message_service__WEBPACK_IMPORTED_MODULE_5__.ReEditMessageService)); };
MessageSendBoxComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: MessageSendBoxComponent, selectors: [["app-message-send-box"]], viewQuery: function MessageSendBoxComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c2, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.imagePicker = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.filePicker = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.textInput = _t.first);
    } }, decls: 18, vars: 7, consts: [[1, "message-send-box-wrapper", 3, "ngClass", "focus"], [1, "send-header-bar"], ["type", "file", "accept", ".jpg, .jpeg, .png, .gif", 2, "display", "none", 3, "change", "click"], ["imagePicker", ""], ["type", "file", 2, "display", "none", 3, "change", "click"], ["filePicker", ""], ["nz-icon", "", "nzType", "meh", "nzTheme", "outline", "title", "\u53D1\u8868\u60C5", "nz-popover", "", "nzPopoverTitle", "Title", "nzPopoverTrigger", "click", 3, "nzPopoverVisible", "nzPopoverContent", "nzPopoverTitle", "nzPopoverVisibleChange"], ["nz-icon", "", "nzType", "picture", "nzTheme", "outline", "title", "\u53D1\u56FE\u7247", 3, "click"], ["nz-icon", "", "nzType", "folder", "nzTheme", "outline", "title", "\u53D1\u6587\u4EF6", 3, "click"], [1, "bottom"], ["rows", "4", "resize", "false", 1, "text-input", 3, "ngModel", "ngModelChange", "focus", "blur", "keydown", "keyup"], ["textInput", ""], [1, "btn-send", 3, "click"], ["nzTooltipTitle", "\u6309Enter\u53D1\u9001\u6D88\u606F\uFF0CCtrl+Enter\u6362\u884C", "nzTooltipPlacement", "left", "nz-button", "", "nz-tooltip", "", 1, "tim-icon-send"], ["contentTemplate", ""], [1, "emojis", 3, "ngStyle"], ["class", "emoji", 3, "click", 4, "ngFor", "ngForOf"], [1, "emoji", 3, "click"], [2, "width", "30px", "height", "30px", 3, "src"]], template: function MessageSendBoxComponent_Template(rf, ctx) { if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("focus", function MessageSendBoxComponent_Template_div_focus_0_listener($event) { return ctx.onfocus($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function MessageSendBoxComponent_Template_input_change_2_listener($event) { return ctx.sendImage($event); })("click", function MessageSendBoxComponent_Template_input_click_2_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function MessageSendBoxComponent_Template_input_change_4_listener($event) { return ctx.sendFile($event); })("click", function MessageSendBoxComponent_Template_input_click_4_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("nzPopoverVisibleChange", function MessageSendBoxComponent_Template_i_nzPopoverVisibleChange_6_listener($event) { return ctx.visible = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MessageSendBoxComponent_Template_i_click_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](3); return ctx.handleSendImageClick(_r0, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MessageSendBoxComponent_Template_i_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](5); return ctx.handleSendFileClick(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "textarea", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function MessageSendBoxComponent_Template_textarea_ngModelChange_10_listener($event) { return ctx.messageContent = $event; })("focus", function MessageSendBoxComponent_Template_textarea_focus_10_listener($event) { return ctx.onfocus($event); })("blur", function MessageSendBoxComponent_Template_textarea_blur_10_listener($event) { return ctx.onblur($event); })("keydown", function MessageSendBoxComponent_Template_textarea_keydown_10_listener($event) { return ctx.keyDown($event); })("keyup", function MessageSendBoxComponent_Template_textarea_keyup_10_listener($event) { return ctx.handleLine($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MessageSendBoxComponent_Template_div_click_13_listener() { return ctx.sendTextMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "\u53D1\u9001");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, MessageSendBoxComponent_ng_template_16_Template, 2, 3, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](5, _c4, ctx.focus));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzPopoverVisible", ctx.visible)("nzPopoverContent", _r3)("nzPopoverTitle", "\u8868\u60C5");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.messageContent);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__.NzIconDirective, ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_11__.NzPopoverDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_14__.NzWaveDirective, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_15__.NzTooltipDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf], styles: [".message-send-box-wrapper[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  overflow: hidden;\n  padding: 3px 20px 20px 20px;\n}\n.emojis[_ngcontent-%COMP%] {\n  height: 160px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  overflow-y: scroll;\n}\n.emoji[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  box-sizing: border-box;\n}\n.send-header-bar[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  padding: 3px 0 0 0;\n}\n.send-header-bar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 24px;\n  color: gray;\n  margin: 0 12px 0 0;\n}\n.send-header-bar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  color: #000;\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: none;\n}\n.text-input[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 100%;\n  box-sizing: box-sizing;\n  border: none;\n  outline: none;\n  background-color: transparent;\n}\n.block[_ngcontent-%COMP%] {\n  padding: 10px 0;\n  display: flex;\n  align-items: center;\n}\n.bottom[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  position: relative;\n}\n.bottom[_ngcontent-%COMP%]   .btn-send[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n  color: #2d8cf0;\n  font-size: 30px;\n  right: 0;\n  bottom: -5px;\n  padding: 6px 6px 4px 4px;\n  border-radius: 50%;\n}\n.white-background[_ngcontent-%COMP%] {\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2Utc2VuZC1ib3guY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7QUFDRjtBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQUY7QUFHQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFERjtBQUlBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtBQUZGO0FBS0E7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUhGO0FBTUE7RUFDRSxXQUFBO0FBSkY7QUFPQTtFQUNFLFlBQUE7QUFMRjtBQVFBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUFORjtBQVNBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQVBGO0FBVUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBUkY7QUFNQTtFQUtJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0FBUko7QUFhQTtFQUNFLHVCQUFBO0FBWEYiLCJmaWxlIjoibWVzc2FnZS1zZW5kLWJveC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZXNzYWdlLXNlbmQtYm94LXdyYXBwZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAzcHggMjBweCAyMHB4IDIwcHg7XG59XG5cbi5lbW9qaXMge1xuICBoZWlnaHQ6IDE2MHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLmVtb2ppIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLnNlbmQtaGVhZGVyLWJhciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDNweCAwIDAgMDtcbn1cblxuLnNlbmQtaGVhZGVyLWJhciBpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiBncmF5O1xuICBtYXJnaW46IDAgMTJweCAwIDA7XG59XG5cbi5zZW5kLWhlYWRlci1iYXIgaTpob3ZlciB7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG50ZXh0YXJlYSB7XG4gIHJlc2l6ZTogbm9uZTtcbn1cblxuLnRleHQtaW5wdXQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3gtc2l6aW5nO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uYmxvY2sge1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5ib3R0b20ge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIC5idG4tc2VuZCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb2xvcjogIzJkOGNmMDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAtNXB4O1xuICAgIHBhZGRpbmc6IDZweCA2cHggNHB4IDRweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbn1cblxuXG4ud2hpdGUtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 75393:
/*!**************************************************************************************************!*\
  !*** ./projects/ngx-tencent-im/src/message/message-status-icon/message-status-icon.component.ts ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageStatusIconComponent": function() { return /* binding */ MessageStatusIconComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _tim_helper_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../tim-helper.service */ 92789);


class MessageStatusIconComponent {
    constructor(timHelperService) {
        this.timHelperService = timHelperService;
    }
    ngOnInit() {
    }
    get messageIconClass() {
        switch (this.message.status) {
            case 'unSend':
                return 'el-icon-loading';
            case 'fail':
                return 'message-send-fail';
            default:
                return '';
        }
    }
    handleIconClick() {
        if (this.messageIconClass === 'message-send-fail') {
            this.timHelperService.tim.resendMessage(this.message).catch(imError => {
                console.error(imError.message);
            });
        }
    }
}
MessageStatusIconComponent.ɵfac = function MessageStatusIconComponent_Factory(t) { return new (t || MessageStatusIconComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_tim_helper_service__WEBPACK_IMPORTED_MODULE_0__.TimHelperService)); };
MessageStatusIconComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MessageStatusIconComponent, selectors: [["app-message-status-icon"]], inputs: { message: "message" }, decls: 2, vars: 3, consts: [[2, "width", "16px", "height", "16px", 3, "click"]], template: function MessageStatusIconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MessageStatusIconComponent_Template_div_click_0_listener() { return ctx.handleIconClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.messageIconClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.messageIconClass === "message-send-fail" ? "!" : "", "");
    } }, styles: [".message-send-fail[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  background-color: #f35f5f;\n  color: #fff;\n  border-radius: 50%;\n  text-align: center;\n  line-height: 16px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2Utc3RhdHVzLWljb24uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFDRiIsImZpbGUiOiJtZXNzYWdlLXN0YXR1cy1pY29uLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lc3NhZ2Utc2VuZC1mYWlsIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMzVmNWY7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 78746:
/*!***************************************************************************************!*\
  !*** ./projects/ngx-tencent-im/src/my-profile/edit-profile/edit-profile.component.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProfileComponent": function() { return /* binding */ EditProfileComponent; }
/* harmony export */ });
/* harmony import */ var _shared_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared.data */ 54825);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/actions */ 10771);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 17562);
/* harmony import */ var _tim_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tim-helper.service */ 92789);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/form */ 32734);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/radio */ 31031);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);















function EditProfileComponent_label_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzValue", item_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r1.label);
} }
class EditProfileComponent {
    constructor(fb, modalRef, store, timHelperService) {
        this.fb = fb;
        this.modalRef = modalRef;
        this.store = store;
        this.timHelperService = timHelperService;
        this.radioOption = [
            { label: '男', value: _shared_data__WEBPACK_IMPORTED_MODULE_0__.TIM.TYPES.GENDER_MALE },
            { label: '女', value: _shared_data__WEBPACK_IMPORTED_MODULE_0__.TIM.TYPES.GENDER_FEMALE },
            { label: '不显示', value: _shared_data__WEBPACK_IMPORTED_MODULE_0__.TIM.TYPES.GENDER_UNKNOWN },
        ];
    }
    ngOnInit() {
        this.form = this.fb.group({
            avatar: [this.userProfile.avatar],
            nick: [this.userProfile.nick],
            gender: [this.userProfile.gender]
        });
    }
    submitForm() {
        const formValue = this.form.value;
        if (formValue.avatar && formValue.avatar.indexOf('http') === -1) {
            this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_1__.showAction)({ msgType: _shared_data__WEBPACK_IMPORTED_MODULE_0__.MESSAGE_STATUS.warning, message: '头像应该是 Url 地址' }));
            formValue.avatar = '';
            return;
        }
        const options = {};
        // 过滤空串
        Object.keys(formValue).forEach(key => {
            if (formValue[key]) {
                options[key] = formValue[key];
            }
        });
        this.timHelperService.tim
            .updateMyProfile(options)
            .then(() => {
            this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_1__.showAction)({ msgType: _shared_data__WEBPACK_IMPORTED_MODULE_0__.MESSAGE_STATUS.success, message: '修改成功' }));
            this.modalRef.destroy();
        })
            .catch(imError => {
            this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_1__.showAction)({ msgType: _shared_data__WEBPACK_IMPORTED_MODULE_0__.MESSAGE_STATUS.error, message: imError.message }));
        });
    }
}
EditProfileComponent.ɵfac = function EditProfileComponent_Factory(t) { return new (t || EditProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__.NzModalRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_tim_helper_service__WEBPACK_IMPORTED_MODULE_2__.TimHelperService)); };
EditProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: EditProfileComponent, selectors: [["im-edit-profile"]], inputs: { userProfile: "userProfile" }, decls: 25, vars: 16, consts: [["nz-form", "", 3, "formGroup", "ngSubmit"], [3, "nzSm", "nzXs"], ["nz-input", "", "formControlName", "avatar", "placeholder", "\u5934\u50CF\u5730\u5740"], ["nzFor", "avatar", 3, "nzSm", "nzXs"], ["nz-input", "", "formControlName", "nick", "placeholder", "\u6635\u79F0"], ["formControlName", "gender"], ["nz-radio", "", 3, "nzValue", 4, "ngFor", "ngForOf"], ["nz-row", "", "nzJustify", "center"], ["nzPush", "8", 3, "nzSpan"], ["nz-button", "", "nzType", "primary"], [3, "nzSpan"], ["nz-button", "", "nzType", "default", "type", "button", 3, "click"], ["nz-radio", "", 3, "nzValue"]], template: function EditProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function EditProfileComponent_Template_form_ngSubmit_0_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\u5934\u50CF");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "nz-form-control", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "nz-form-label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "\u6635\u79F0");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "nz-form-control", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "\u6027\u522B ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "nz-form-control", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "nz-radio-group", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, EditProfileComponent_label_17_Template, 2, 2, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "nz-form-item", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "nz-form-control", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "\u786E\u5B9A");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "nz-form-control", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditProfileComponent_Template_button_click_23_listener() { return ctx.modalRef.destroy(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "\u53D6\u6D88");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.radioOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSpan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSpan", 12);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormItemComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_10__.NzRadioGroupComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_13__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__["ɵNzTransitionPatchDirective"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_10__.NzRadioComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXByb2ZpbGUuY29tcG9uZW50Lmxlc3MifQ== */"], changeDetection: 0 });


/***/ }),

/***/ 48556:
/*!************************************************************************!*\
  !*** ./projects/ngx-tencent-im/src/my-profile/my-profile.component.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyProfileComponent": function() { return /* binding */ MyProfileComponent; }
/* harmony export */ });
/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/selectors */ 29716);
/* harmony import */ var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-profile/edit-profile.component */ 78746);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 17562);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/popover */ 8813);
/* harmony import */ var _avatar_avatar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../avatar/avatar.component */ 50008);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var _profile_card_profile_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-card/profile-card.component */ 73017);










function MyProfileComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\u5F53\u524D\u7528\u6237");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MyProfileComponent_ng_template_0_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r4.editProfile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function MyProfileComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "im-profile-card", 7);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("userProfile", ctx_r3.currentUserProfile);
} }
class MyProfileComponent {
    constructor(store, modal) {
        this.store = store;
        this.modal = modal;
    }
    ngOnInit() {
        this.subscription = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_0__.currentUserProfileSelector)
            .subscribe(res => {
            if (res) {
                this.currentUserProfile = res;
            }
        });
    }
    editProfile() {
        this.modal.create({
            nzTitle: `编辑资料`,
            nzContent: _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_1__.EditProfileComponent,
            nzMaskClosable: false,
            nzFooter: null,
            nzWidth: '40%',
            nzStyle: { top: '20px' },
            nzComponentParams: {
                userProfile: this.currentUserProfile
            }
        });
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    ;
}
MyProfileComponent.ɵfac = function MyProfileComponent_Factory(t) { return new (t || MyProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_6__.NzModalService)); };
MyProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MyProfileComponent, selectors: [["app-my-profile"]], decls: 7, vars: 3, consts: [["titleTemplate", ""], ["contentTemplate", ""], [1, "my-profile-wrapper"], ["nz-button", "", "nz-popover", "", "nzType", "primary", "nzPopoverTrigger", "click", "nzPopoverPlacement", "right", 3, "nzPopoverTitle", "nzPopoverContent"], [3, "src"], [1, "title-container"], ["nz-icon", "", "nzType", "setting", "nzTheme", "outline", 3, "click"], [3, "userProfile"]], template: function MyProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, MyProfileComponent_ng_template_0_Template, 4, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MyProfileComponent_ng_template_2_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "im-avatar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzPopoverTitle", _r0)("nzPopoverContent", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx.currentUserProfile.avatar);
    } }, directives: [ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_8__.NzPopoverDirective, _avatar_avatar_component__WEBPACK_IMPORTED_MODULE_2__.AvatarComponent, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__.NzIconDirective, _profile_card_profile_card_component__WEBPACK_IMPORTED_MODULE_3__.ProfileCardComponent], styles: [".title-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  align-items: center;\n}\n.title-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.my-profile-wrapper[_ngcontent-%COMP%] {\n  margin: 15px;\n}\n.my-profile-wrapper[_ngcontent-%COMP%]   im-avatar[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.edit-my-profile[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LXByb2ZpbGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQU5BO0VBT0ksZUFBQTtBQUVKO0FBRUE7RUFDRSxZQUFBO0FBQUY7QUFEQTtFQUdJLGVBQUE7QUFDSjtBQUdBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFERiIsImZpbGUiOiJteS1wcm9maWxlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGkge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuXG4ubXktcHJvZmlsZS13cmFwcGVyIHtcbiAgbWFyZ2luOiAxNXB4O1xuICBpbS1hdmF0YXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuXG4uZWRpdC1teS1wcm9maWxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXX0= */"] });


/***/ }),

/***/ 73017:
/*!***************************************************************************************!*\
  !*** ./projects/ngx-tencent-im/src/my-profile/profile-card/profile-card.component.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileCardComponent": function() { return /* binding */ ProfileCardComponent; }
/* harmony export */ });
/* harmony import */ var _shared_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared.data */ 54825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _avatar_avatar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../avatar/avatar.component */ 50008);



class ProfileCardComponent {
    constructor() { }
    set userProfile(value) {
        this._userProfile = value;
        switch (value.gender) {
            case _shared_data__WEBPACK_IMPORTED_MODULE_0__.TIM.TYPES.GENDER_MALE:
                this.className = 'icon-male';
                break;
            case _shared_data__WEBPACK_IMPORTED_MODULE_0__.TIM.TYPES.GENDER_FEMALE:
                this.className = 'icon-female';
                break;
            default:
                this.className = null;
        }
    }
    ;
    get userProfile() {
        return this._userProfile;
    }
    ;
    ngOnInit() {
    }
}
ProfileCardComponent.ɵfac = function ProfileCardComponent_Factory(t) { return new (t || ProfileCardComponent)(); };
ProfileCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProfileCardComponent, selectors: [["im-profile-card"]], inputs: { userProfile: "userProfile" }, decls: 7, vars: 4, consts: [[1, "profile-card-wrapper"], [1, "content"], [3, "src"], [1, "basic"], [1, "nick", "text-ellipsis"], [1, "iconfont"]], template: function ProfileCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "im-avatar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.userProfile == null ? null : ctx.userProfile.avatar);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((ctx.userProfile == null ? null : ctx.userProfile.nick) || (ctx.userProfile == null ? null : ctx.userProfile.userID));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.className);
    } }, directives: [_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_1__.AvatarComponent], styles: [".profile-header[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 12px;\n}\n.profile-card-wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n}\n.basic[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-top: 12px;\n}\n.icon-male[_ngcontent-%COMP%] {\n  color: #6391f3;\n}\n.icon-female[_ngcontent-%COMP%] {\n  color: #ff8096;\n}\n.nick[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-right: 8px;\n  max-width: 100px;\n  display: inline-block;\n}\nim-avatar[_ngcontent-%COMP%]  .avatar {\n  width: 70px;\n  height: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUtY2FyZC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUNGO0FBRUE7RUFFSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBREo7QUFLQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBSEY7QUFNQTtFQUNFLGNBQUE7QUFKRjtBQU9BO0VBQ0UsY0FBQTtBQUxGO0FBUUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBTkY7QUFRQTtFQUVJLFdBQUE7RUFDQSxZQUFBO0FBUEoiLCJmaWxlIjoicHJvZmlsZS1jYXJkLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cblxuLnByb2ZpbGUtY2FyZC13cmFwcGVyIHtcbiAgLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG59XG5cbi5iYXNpYyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG5cbi5pY29uLW1hbGUge1xuICBjb2xvcjogIzYzOTFmMztcbn1cblxuLmljb24tZmVtYWxlIHtcbiAgY29sb3I6ICNmZjgwOTY7XG59XG5cbi5uaWNrIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuaW0tYXZhdGFyOjpuZy1kZWVwIHtcbiAgLmF2YXRhciB7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICB9XG59XG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ 44606:
/*!***************************************************!*\
  !*** ./projects/ngx-tencent-im/src/public-api.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimHelperService": function() { return /* reexport safe */ _tim_helper_service__WEBPACK_IMPORTED_MODULE_1__.TimHelperService; },
/* harmony export */   "TencentTimComponent": function() { return /* reexport safe */ _tencent_tim_tencent_tim_component__WEBPACK_IMPORTED_MODULE_2__.TencentTimComponent; },
/* harmony export */   "TencentTimModule": function() { return /* reexport safe */ _tencent_tim_module__WEBPACK_IMPORTED_MODULE_3__.TencentTimModule; }
/* harmony export */ });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ 69870);
/* harmony import */ var _tim_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tim-helper.service */ 92789);
/* harmony import */ var _tencent_tim_tencent_tim_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tencent-tim/tencent-tim.component */ 74977);
/* harmony import */ var _tencent_tim_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tencent-tim.module */ 11786);
/*
 * Public API Surface of ngx-tencent-im
 */






/***/ }),

/***/ 41228:
/*!****************************************************************!*\
  !*** ./projects/ngx-tencent-im/src/re-edit-message.service.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReEditMessageService": function() { return /* binding */ ReEditMessageService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);


class ReEditMessageService {
    constructor() {
        this.reEditMessage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
}
ReEditMessageService.ɵfac = function ReEditMessageService_Factory(t) { return new (t || ReEditMessageService)(); };
ReEditMessageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ReEditMessageService, factory: ReEditMessageService.ɵfac });


/***/ }),

/***/ 54825:
/*!****************************************************!*\
  !*** ./projects/ngx-tencent-im/src/shared.data.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NG_Tim_CONFIG": function() { return /* binding */ NG_Tim_CONFIG; },
/* harmony export */   "MESSAGE_STATUS": function() { return /* binding */ MESSAGE_STATUS; },
/* harmony export */   "CONVERSATION_TYPE": function() { return /* binding */ CONVERSATION_TYPE; },
/* harmony export */   "TIM_TYPES": function() { return /* binding */ TIM_TYPES; },
/* harmony export */   "TIM": function() { return /* binding */ TIM; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

const NG_Tim_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('config');
var MESSAGE_STATUS;
(function (MESSAGE_STATUS) {
    MESSAGE_STATUS["success"] = "success";
    MESSAGE_STATUS["info"] = "info";
    MESSAGE_STATUS["warning"] = "warning";
    MESSAGE_STATUS["error"] = "error";
})(MESSAGE_STATUS || (MESSAGE_STATUS = {}));
var CONVERSATION_TYPE;
(function (CONVERSATION_TYPE) {
    CONVERSATION_TYPE["client"] = "C2C";
    CONVERSATION_TYPE["group"] = "GROUP";
    CONVERSATION_TYPE["system"] = "@TIM#SYSTEM";
})(CONVERSATION_TYPE || (CONVERSATION_TYPE = {}));
var TIM_TYPES;
(function (TIM_TYPES) {
    TIM_TYPES["GRP_WORK"] = "Private";
    TIM_TYPES["GRP_PUBLIC"] = "Public";
    TIM_TYPES["GRP_MEETING"] = "ChatRoom";
    TIM_TYPES["GRP_AVCHATROOM"] = "AVChatRoom";
})(TIM_TYPES || (TIM_TYPES = {}));
const TIM = {
    TYPES: {
        "MSG_TEXT": "TIMTextElem",
        "MSG_IMAGE": "TIMImageElem",
        "MSG_SOUND": "TIMSoundElem",
        "MSG_AUDIO": "TIMSoundElem",
        "MSG_FILE": "TIMFileElem",
        "MSG_FACE": "TIMFaceElem",
        "MSG_VIDEO": "TIMVideoFileElem",
        "MSG_GEO": "TIMLocationElem",
        "MSG_GRP_TIP": "TIMGroupTipElem",
        "MSG_GRP_SYS_NOTICE": "TIMGroupSystemNoticeElem",
        "MSG_CUSTOM": "TIMCustomElem",
        "MSG_MERGER": "TIMRelayElem",
        "MSG_PRIORITY_HIGH": "High",
        "MSG_PRIORITY_NORMAL": "Normal",
        "MSG_PRIORITY_LOW": "Low",
        "MSG_PRIORITY_LOWEST": "Lowest",
        "CONV_C2C": "C2C",
        "CONV_GROUP": "GROUP",
        "CONV_SYSTEM": "@TIM%23SYSTEM",
        "CONV_AT_ME": 1,
        "CONV_AT_ALL": 2,
        "CONV_AT_ALL_AT_ME": 3,
        "GRP_PRIVATE": "Private",
        "GRP_WORK": "Private",
        "GRP_PUBLIC": "Public",
        "GRP_CHATROOM": "ChatRoom",
        "GRP_MEETING": "ChatRoom",
        "GRP_AVCHATROOM": "AVChatRoom",
        "GRP_MBR_ROLE_OWNER": "Owner",
        "GRP_MBR_ROLE_ADMIN": "Admin",
        "GRP_MBR_ROLE_MEMBER": "Member",
        "GRP_TIP_MBR_JOIN": 1,
        "GRP_TIP_MBR_QUIT": 2,
        "GRP_TIP_MBR_KICKED_OUT": 3,
        "GRP_TIP_MBR_SET_ADMIN": 4,
        "GRP_TIP_MBR_CANCELED_ADMIN": 5,
        "GRP_TIP_GRP_PROFILE_UPDATED": 6,
        "GRP_TIP_MBR_PROFILE_UPDATED": 7,
        "MSG_REMIND_ACPT_AND_NOTE": "AcceptAndNotify",
        "MSG_REMIND_ACPT_NOT_NOTE": "AcceptNotNotify",
        "MSG_REMIND_DISCARD": "Discard",
        "GENDER_UNKNOWN": "Gender_Type_Unknown",
        "GENDER_FEMALE": "Gender_Type_Female",
        "GENDER_MALE": "Gender_Type_Male",
        "KICKED_OUT_MULT_ACCOUNT": "multipleAccount",
        "KICKED_OUT_MULT_DEVICE": "multipleDevice",
        "KICKED_OUT_USERSIG_EXPIRED": "userSigExpired",
        "ALLOW_TYPE_ALLOW_ANY": "AllowType_Type_AllowAny",
        "ALLOW_TYPE_NEED_CONFIRM": "AllowType_Type_NeedConfirm",
        "ALLOW_TYPE_DENY_ANY": "AllowType_Type_DenyAny",
        "FORBID_TYPE_NONE": "AdminForbid_Type_None",
        "FORBID_TYPE_SEND_OUT": "AdminForbid_Type_SendOut",
        "JOIN_OPTIONS_FREE_ACCESS": "FreeAccess",
        "JOIN_OPTIONS_NEED_PERMISSION": "NeedPermission",
        "JOIN_OPTIONS_DISABLE_APPLY": "DisableApply",
        "JOIN_STATUS_SUCCESS": "JoinedSuccess",
        "JOIN_STATUS_ALREADY_IN_GROUP": "AlreadyInGroup",
        "JOIN_STATUS_WAIT_APPROVAL": "WaitAdminApproval",
        "GRP_PROFILE_OWNER_ID": "ownerID",
        "GRP_PROFILE_CREATE_TIME": "createTime",
        "GRP_PROFILE_LAST_INFO_TIME": "lastInfoTime",
        "GRP_PROFILE_MEMBER_NUM": "memberNum",
        "GRP_PROFILE_MAX_MEMBER_NUM": "maxMemberNum",
        "GRP_PROFILE_JOIN_OPTION": "joinOption",
        "GRP_PROFILE_INTRODUCTION": "introduction",
        "GRP_PROFILE_NOTIFICATION": "notification",
        "GRP_PROFILE_MUTE_ALL_MBRS": "muteAllMembers",
        "NET_STATE_CONNECTED": "connected",
        "NET_STATE_CONNECTING": "connecting",
        "NET_STATE_DISCONNECTED": "disconnected",
        "MSG_AT_ALL": "__kImSDK_MesssageAtALL__"
    },
    EVENT: {
        "SDK_READY": "sdkStateReady",
        "SDK_NOT_READY": "sdkStateNotReady",
        "SDK_DESTROY": "sdkDestroy",
        "MESSAGE_RECEIVED": "onMessageReceived",
        "MESSAGE_REVOKED": "onMessageRevoked",
        "MESSAGE_READ_BY_PEER": "onMessageReadByPeer",
        "CONVERSATION_LIST_UPDATED": "onConversationListUpdated",
        "GROUP_LIST_UPDATED": "onGroupListUpdated",
        "GROUP_SYSTEM_NOTICE_RECEIVED": "receiveGroupSystemNotice",
        "PROFILE_UPDATED": "onProfileUpdated",
        "BLACKLIST_UPDATED": "blacklistUpdated",
        "KICKED_OUT": "kickedOut",
        "ERROR": "error",
        "NET_STATE_CHANGE": "netStateChange",
        "SDK_RELOAD": "sdkReload"
    },
    VERSION: "2.10.2"
};


/***/ }),

/***/ 95239:
/*!********************************************************************!*\
  !*** ./projects/ngx-tencent-im/src/side-bar/side-bar.component.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SideBarComponent": function() { return /* binding */ SideBarComponent; }
/* harmony export */ });
/* harmony import */ var _shared_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared.data */ 54825);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/actions */ 10771);
/* harmony import */ var _store_actions_group_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/actions/group.action */ 8027);
/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/selectors */ 29716);
/* harmony import */ var _util_title_notice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/title-notice */ 76820);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ 17562);
/* harmony import */ var _tim_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tim-helper.service */ 92789);
/* harmony import */ var _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../my-profile/my-profile.component */ 48556);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _conversation_conversation_list_conversation_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../conversation/conversation-list/conversation-list.component */ 11663);
/* harmony import */ var _group_group_list_group_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../group/group-list/group-list.component */ 57652);












function SideBarComponent_sup_5_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "99+");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function SideBarComponent_sup_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](0);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r5.totalUnreadCount, " ");
} }
function SideBarComponent_sup_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "sup", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, SideBarComponent_sup_5_span_1_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, SideBarComponent_sup_5_ng_template_2_Template, 1, 1, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](3);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.totalUnreadCount > 99)("ngIfElse", _r4);
} }
function SideBarComponent_app_conversation_list_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-conversation-list");
} }
function SideBarComponent_app_group_list_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-group-list");
} }
const _c0 = function (a0) { return { "active": a0 }; };
class SideBarComponent {
    constructor(store, timHelperService) {
        this.store = store;
        this.timHelperService = timHelperService;
        this.activeName = {
            CONVERSATION_LIST: 'conversation-list',
            GROUP_LIST: 'group-list',
            FRIEND_LIST: 'friend-list',
            BLACK_LIST: 'black-list',
        };
        this.totalUnreadCount = 0;
        this.active = this.activeName.CONVERSATION_LIST;
        this.showConversationList = false;
    }
    ngOnInit() {
        // 获取当前会话
        this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_3__.conversationSelector).subscribe(res => {
            this.computeCount(res);
        });
    }
    handleClick(event) {
        switch (event.target['id']) {
            case this.activeName.CONVERSATION_LIST:
                this.checkoutActive(this.activeName.CONVERSATION_LIST);
                break;
            case this.activeName.GROUP_LIST:
                this.checkoutActive(this.activeName.GROUP_LIST);
                break;
            case this.activeName.FRIEND_LIST:
                this.checkoutActive(this.activeName.FRIEND_LIST);
                break;
            case this.activeName.BLACK_LIST:
                this.checkoutActive(this.activeName.BLACK_LIST);
                break;
        }
    }
    checkoutActive(name) {
        this.active = name;
    }
    logout() {
        this.timHelperService.logout();
    }
    getGroupList() {
        this.timHelperService.tim
            .getGroupList()
            .then(({ data: groupList }) => {
            this.store.dispatch((0,_store_actions_group_action__WEBPACK_IMPORTED_MODULE_2__.updateGroupListAction)({ groupList }));
        })
            .catch((error) => {
            this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_1__.showAction)({ msgType: _shared_data__WEBPACK_IMPORTED_MODULE_0__.MESSAGE_STATUS.error, message: error.message }));
        });
    }
    computeCount(state) {
        const result = state.conversationList.reduce((count, conversation) => {
            // 当前会话不计算总未读
            if (!this.hidden() && state.currentConversation.conversationID === conversation.conversationID) {
                return this.totalUnreadCount = count;
            }
            return this.totalUnreadCount = count + conversation.unreadCount;
        }, 0);
        (0,_util_title_notice__WEBPACK_IMPORTED_MODULE_4__.titleNotify)(result);
        this.timHelperService.totalUnRead.next(result);
        return this.totalUnreadCount = result;
    }
    hidden() {
        if (typeof document.hasFocus !== 'function') {
            return document.hidden;
        }
        return !document.hasFocus();
    }
}
SideBarComponent.ɵfac = function SideBarComponent_Factory(t) { return new (t || SideBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_tim_helper_service__WEBPACK_IMPORTED_MODULE_5__.TimHelperService)); };
SideBarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: SideBarComponent, selectors: [["app-side-bar"]], decls: 12, vars: 9, consts: [[1, "side-bar-wrapper"], [1, "bar-left"], [1, "tab-items", 3, "click"], ["id", "conversation-list", "title", "\u4F1A\u8BDD\u5217\u8868", 1, "iconfont", "icon-conversation", 3, "ngClass"], ["class", "unread", 4, "ngIf"], ["id", "group-list", "title", "\u7FA4\u7EC4\u5217\u8868", 1, "iconfont", "icon-group", 3, "ngClass"], [1, "bottom"], ["title", "\u9000\u51FA", 1, "iconfont", "icon-tuichu", 3, "click"], [1, "bar-right"], [4, "ngIf"], [1, "unread"], [4, "ngIf", "ngIfElse"], ["count", ""]], template: function SideBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "app-my-profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SideBarComponent_Template_div_click_3_listener($event) { return ctx.handleClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, SideBarComponent_sup_5_Template, 4, 2, "sup", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SideBarComponent_Template_div_click_8_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, SideBarComponent_app_conversation_list_10_Template, 1, 0, "app-conversation-list", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](11, SideBarComponent_app_group_list_11_Template, 1, 0, "app-group-list", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](5, _c0, ctx.active === ctx.activeName.CONVERSATION_LIST));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.totalUnreadCount !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](7, _c0, ctx.active === ctx.activeName.GROUP_LIST));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.active === ctx.activeName.CONVERSATION_LIST);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.active === ctx.activeName.GROUP_LIST);
    } }, directives: [_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_6__.MyProfileComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _conversation_conversation_list_conversation_list_component__WEBPACK_IMPORTED_MODULE_7__.ConversationListComponent, _group_group_list_group_list_component__WEBPACK_IMPORTED_MODULE_8__.GroupListComponent], styles: [".side-bar-wrapper[_ngcontent-%COMP%] {\n  height: 100%;\n  color: #000;\n  display: flex;\n  overflow: hidden;\n}\n.side-bar-wrapper[_ngcontent-%COMP%]   .bar-right[_ngcontent-%COMP%] {\n  width: 14rem;\n  min-width: 0;\n  height: 80vh;\n  position: relative;\n  background-color: #363e47;\n}\n.side-bar-wrapper[_ngcontent-%COMP%]   .bar-left[_ngcontent-%COMP%] {\n  display: flex;\n  flex-shrink: 0;\n  flex-direction: column;\n  align-items: center;\n  width: 4rem;\n  height: 80vh;\n  background-color: #303841;\n}\n.side-bar-wrapper[_ngcontent-%COMP%]   .bar-left[_ngcontent-%COMP%]   .tab-items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n}\n.side-bar-wrapper[_ngcontent-%COMP%]   .bar-left[_ngcontent-%COMP%]   .tab-items[_ngcontent-%COMP%]   .iconfont[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0;\n  height: 70px;\n  line-height: 70px;\n  text-align: center;\n  font-size: 30px;\n  cursor: pointer;\n  color: #a5b5c1;\n  -webkit-user-select: none;\n          user-select: none;\n  -moz-user-select: none;\n}\n.side-bar-wrapper[_ngcontent-%COMP%]   .bar-left[_ngcontent-%COMP%]   .tab-items[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.side-bar-wrapper[_ngcontent-%COMP%]   .bar-left[_ngcontent-%COMP%]   .tab-items[_ngcontent-%COMP%]   .unread[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  z-index: 999;\n  display: inline-block;\n  height: 18px;\n  padding: 0 6px;\n  font-size: 12px;\n  color: #fff;\n  line-height: 18px;\n  text-align: center;\n  white-space: nowrap;\n  border-radius: 10px;\n  background-color: #f35f5f;\n}\n.side-bar-wrapper[_ngcontent-%COMP%]   .bar-left[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%] {\n  height: 70px;\n}\n.side-bar-wrapper[_ngcontent-%COMP%]   .bar-left[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: block;\n}\n.side-bar-wrapper[_ngcontent-%COMP%]   .bar-left[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .btn-more[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 70px;\n  line-height: 70px;\n  font-size: 30px;\n  color: #a5b5c1;\n  text-align: center;\n  cursor: pointer;\n}\n.side-bar-wrapper[_ngcontent-%COMP%]   .bar-left[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .iconfont[_ngcontent-%COMP%] {\n  height: 70px;\n  line-height: 70px;\n  text-align: center;\n  font-size: 30px;\n  cursor: pointer;\n  color: #a5b5c1;\n  -webkit-user-select: none;\n          user-select: none;\n  -moz-user-select: none;\n}\n.side-bar-wrapper[_ngcontent-%COMP%]   .bar-left[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .iconfont[_ngcontent-%COMP%]:hover {\n  color: white;\n}\n.side-bar-wrapper[_ngcontent-%COMP%]   .bar-left[_ngcontent-%COMP%]   .btn-more[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGUtYmFyLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUxBO0VBT0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUNKO0FBWkE7RUFlSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBQUo7QUFyQkE7RUF3Qk0sYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQUFOO0FBMUJBO0VBNkJRLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtFQUNBLHNCQUFBO0FBQVI7QUF0Q0E7RUEwQ1EsV0FBQTtBQURSO0FBekNBO0VBOENRLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUZSO0FBekRBO0VBZ0VNLFlBQUE7QUFKTjtBQU1NO0VBQ0UsY0FBQTtBQUpSO0FBL0RBO0VBdUVRLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUxSO0FBeEVBO0VBaUZRLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtFQUNBLHNCQUFBO0FBTlI7QUFsRkE7RUE0RlEsWUFBQTtBQVBSO0FBckZBO0VBaUdNLFdBQUE7QUFUTiIsImZpbGUiOiJzaWRlLWJhci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlLWJhci13cmFwcGVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjb2xvcjogIzAwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAuYmFyLXJpZ2h0IHtcbiAgICB3aWR0aDogMTRyZW07XG4gICAgbWluLXdpZHRoOiAwO1xuICAgIGhlaWdodDogODB2aDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM2M2U0NztcbiAgfVxuXG4gIC5iYXItbGVmdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDRyZW07XG4gICAgaGVpZ2h0OiA4MHZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMDM4NDE7XG5cbiAgICAudGFiLWl0ZW1zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZmxleC1ncm93OiAxO1xuXG4gICAgICAuaWNvbmZvbnQge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNzBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgY29sb3I6ICNhNWI1YzE7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgfVxuXG4gICAgICAuYWN0aXZlIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB9XG5cbiAgICAgIC51bnJlYWQge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgIHotaW5kZXg6IDk5OTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICAgIHBhZGRpbmc6IDAgNnB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjM1ZjVmO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5ib3R0b20ge1xuICAgICAgaGVpZ2h0OiA3MHB4O1xuXG4gICAgICAmID4gc3BhbiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuXG4gICAgICAuYnRuLW1vcmUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNzBweDtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICBjb2xvcjogI2E1YjVjMTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5pY29uZm9udCB7XG4gICAgICAgIGhlaWdodDogNzBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDcwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGNvbG9yOiAjYTViNWMxO1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIH1cblxuICAgICAgLmljb25mb250OmhvdmVyIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5idG4tbW9yZTpob3ZlciB7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 68819:
/*!**************************************************************************!*\
  !*** ./projects/ngx-tencent-im/src/store/actions/conversation.action.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateCurrentConversationAction": function() { return /* binding */ updateCurrentConversationAction; },
/* harmony export */   "updateConversationListAction": function() { return /* binding */ updateConversationListAction; },
/* harmony export */   "resetCurrentConversationAction": function() { return /* binding */ resetCurrentConversationAction; },
/* harmony export */   "pushCurrentMessageListAction": function() { return /* binding */ pushCurrentMessageListAction; },
/* harmony export */   "removeMessageAction": function() { return /* binding */ removeMessageAction; },
/* harmony export */   "resetConversationAction": function() { return /* binding */ resetConversationAction; },
/* harmony export */   "checkoutConversationAction": function() { return /* binding */ checkoutConversationAction; }
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 17562);

const updateCurrentConversationAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[conversation] updateCurrentConversation', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateConversationListAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[conversation] updateConversationList', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const resetCurrentConversationAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[conversation] resetCurrentConversation');
const pushCurrentMessageListAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[conversation] pushCurrentMessageList', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const removeMessageAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[conversation] removeMessage', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const resetConversationAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[conversation] reset');
const checkoutConversationAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[conversation] checkoutConversation', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());


/***/ }),

/***/ 8027:
/*!*******************************************************************!*\
  !*** ./projects/ngx-tencent-im/src/store/actions/group.action.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateGroupListAction": function() { return /* binding */ updateGroupListAction; },
/* harmony export */   "updateCurrentMemberListAction": function() { return /* binding */ updateCurrentMemberListAction; },
/* harmony export */   "resetCurrentMemberListAction": function() { return /* binding */ resetCurrentMemberListAction; }
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 17562);

const updateGroupListAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[group] updateGroupList', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateCurrentMemberListAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[group] updateCurrentMemberList', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const resetCurrentMemberListAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[group] resetCurrentMemberList');


/***/ }),

/***/ 10771:
/*!************************************************************!*\
  !*** ./projects/ngx-tencent-im/src/store/actions/index.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginActionTypes": function() { return /* reexport safe */ _login_action__WEBPACK_IMPORTED_MODULE_0__.LoginActionTypes; },
/* harmony export */   "loginAction": function() { return /* reexport safe */ _login_action__WEBPACK_IMPORTED_MODULE_0__.loginAction; },
/* harmony export */   "SDKReadyAction": function() { return /* reexport safe */ _user_action__WEBPACK_IMPORTED_MODULE_1__.SDKReadyAction; },
/* harmony export */   "UserActionTypes": function() { return /* reexport safe */ _user_action__WEBPACK_IMPORTED_MODULE_1__.UserActionTypes; },
/* harmony export */   "resetUserAction": function() { return /* reexport safe */ _user_action__WEBPACK_IMPORTED_MODULE_1__.resetUserAction; },
/* harmony export */   "updateCurrentUserProfileAction": function() { return /* reexport safe */ _user_action__WEBPACK_IMPORTED_MODULE_1__.updateCurrentUserProfileAction; },
/* harmony export */   "showAction": function() { return /* reexport safe */ _message_action__WEBPACK_IMPORTED_MODULE_2__.showAction; },
/* harmony export */   "updateMessageAction": function() { return /* reexport safe */ _message_action__WEBPACK_IMPORTED_MODULE_2__.updateMessageAction; },
/* harmony export */   "checkoutConversationAction": function() { return /* reexport safe */ _conversation_action__WEBPACK_IMPORTED_MODULE_3__.checkoutConversationAction; },
/* harmony export */   "pushCurrentMessageListAction": function() { return /* reexport safe */ _conversation_action__WEBPACK_IMPORTED_MODULE_3__.pushCurrentMessageListAction; },
/* harmony export */   "removeMessageAction": function() { return /* reexport safe */ _conversation_action__WEBPACK_IMPORTED_MODULE_3__.removeMessageAction; },
/* harmony export */   "resetConversationAction": function() { return /* reexport safe */ _conversation_action__WEBPACK_IMPORTED_MODULE_3__.resetConversationAction; },
/* harmony export */   "resetCurrentConversationAction": function() { return /* reexport safe */ _conversation_action__WEBPACK_IMPORTED_MODULE_3__.resetCurrentConversationAction; },
/* harmony export */   "updateConversationListAction": function() { return /* reexport safe */ _conversation_action__WEBPACK_IMPORTED_MODULE_3__.updateConversationListAction; },
/* harmony export */   "updateCurrentConversationAction": function() { return /* reexport safe */ _conversation_action__WEBPACK_IMPORTED_MODULE_3__.updateCurrentConversationAction; }
/* harmony export */ });
/* harmony import */ var _login_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.action */ 55503);
/* harmony import */ var _user_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.action */ 92904);
/* harmony import */ var _message_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message.action */ 11749);
/* harmony import */ var _conversation_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./conversation.action */ 68819);






/***/ }),

/***/ 55503:
/*!*******************************************************************!*\
  !*** ./projects/ngx-tencent-im/src/store/actions/login.action.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginActionTypes": function() { return /* binding */ LoginActionTypes; },
/* harmony export */   "loginAction": function() { return /* binding */ loginAction; }
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 17562);

var LoginActionTypes;
(function (LoginActionTypes) {
    LoginActionTypes["Login"] = "[toggleIsLogin]";
})(LoginActionTypes || (LoginActionTypes = {}));
const loginAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(LoginActionTypes.Login, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());


/***/ }),

/***/ 11749:
/*!*********************************************************************!*\
  !*** ./projects/ngx-tencent-im/src/store/actions/message.action.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showAction": function() { return /* binding */ showAction; },
/* harmony export */   "updateMessageAction": function() { return /* binding */ updateMessageAction; }
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 17562);

const showAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[showMessage]', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateMessageAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[updateMessage]', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());


/***/ }),

/***/ 92904:
/*!******************************************************************!*\
  !*** ./projects/ngx-tencent-im/src/store/actions/user.action.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserActionTypes": function() { return /* binding */ UserActionTypes; },
/* harmony export */   "SDKReadyAction": function() { return /* binding */ SDKReadyAction; },
/* harmony export */   "updateCurrentUserProfileAction": function() { return /* binding */ updateCurrentUserProfileAction; },
/* harmony export */   "resetUserAction": function() { return /* binding */ resetUserAction; }
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 17562);

var UserActionTypes;
(function (UserActionTypes) {
    UserActionTypes["SDKReady"] = "[user] toggleIsSDKReady";
    UserActionTypes["updateCurrentUserProfile"] = "[user] updateCurrentUserProfile";
    UserActionTypes["resetUser"] = "[user] resetUser";
})(UserActionTypes || (UserActionTypes = {}));
const SDKReadyAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(UserActionTypes.SDKReady, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateCurrentUserProfileAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(UserActionTypes.updateCurrentUserProfile, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const resetUserAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(UserActionTypes.resetUser);


/***/ }),

/***/ 4342:
/*!***************************************************************************!*\
  !*** ./projects/ngx-tencent-im/src/store/reducer/conversation.reducer.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": function() { return /* binding */ initialState; },
/* harmony export */   "conversationReducer": function() { return /* binding */ conversationReducer; },
/* harmony export */   "conversationIDInitialState": function() { return /* binding */ conversationIDInitialState; },
/* harmony export */   "conversationIDReducer": function() { return /* binding */ conversationIDReducer; }
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 17562);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ 10771);


const initialState = {
    currentConversation: {},
    currentMessageList: [],
    nextReqMessageID: '',
    isCompleted: false,
    conversationList: []
};
const _conversationReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions__WEBPACK_IMPORTED_MODULE_0__.updateCurrentConversationAction, (state, { conversation }) => {
    return Object.assign(Object.assign({}, state), { currentConversation: conversation, currentMessageList: [], nextReqMessageID: '', isCompleted: false // 当前会话消息列表是否已经拉完了所有消息
     });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions__WEBPACK_IMPORTED_MODULE_0__.updateMessageAction, (state, { nextReqMessageID, isCompleted, currentMessageList }) => {
    return Object.assign(Object.assign({}, state), { currentMessageList,
        nextReqMessageID,
        isCompleted // 当前会话消息列表是否已经拉完了所有消息
     });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions__WEBPACK_IMPORTED_MODULE_0__.updateConversationListAction, (state, { conversationList }) => {
    return Object.assign(Object.assign({}, state), { conversationList });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions__WEBPACK_IMPORTED_MODULE_0__.resetCurrentConversationAction, (state) => (Object.assign(Object.assign({}, state), { currentConversation: {} }))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions__WEBPACK_IMPORTED_MODULE_0__.pushCurrentMessageListAction, (state, { message }) => {
    // 还没当前会话，则跳过
    if (!state.currentConversation.conversationID) {
        return Object.assign({}, state);
    }
    if (Array.isArray(message)) {
        // 筛选出当前会话的消息
        const result = message.filter(item => item.conversationID === state.currentConversation.conversationID);
        const currentMessageList = [...state.currentMessageList, ...result];
        return Object.assign(Object.assign({}, state), { currentMessageList });
    }
    else if (message.conversationID === state.currentConversation.conversationID) {
        const currentMessageList = [...state.currentMessageList, message];
        return Object.assign(Object.assign({}, state), { currentMessageList });
    }
    return Object.assign({}, state);
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions__WEBPACK_IMPORTED_MODULE_0__.removeMessageAction, (state, { message }) => {
    const index = state.currentMessageList.findIndex(({ ID }) => ID === message.ID);
    if (index >= 0) {
        const currentMessageList = state.currentMessageList;
        currentMessageList.splice(index, 1);
        return Object.assign(Object.assign({}, state), { currentMessageList });
    }
    return Object.assign({}, state);
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions__WEBPACK_IMPORTED_MODULE_0__.resetConversationAction, (state) => {
    return Object.assign(state, {
        currentConversation: {},
        currentMessageList: [],
        nextReqMessageID: '',
        isCompleted: false,
        conversationList: []
    });
}));
function conversationReducer(state, action) {
    return _conversationReducer(state, action);
}
const conversationIDInitialState = {
    conversationID: '',
};
const _conversationIDReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(conversationIDInitialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions__WEBPACK_IMPORTED_MODULE_0__.checkoutConversationAction, (state, { conversationID }) => ({
    conversationID
})));
function conversationIDReducer(state, action) {
    return _conversationIDReducer(state, action);
}


/***/ }),

/***/ 9831:
/*!********************************************************************!*\
  !*** ./projects/ngx-tencent-im/src/store/reducer/group.reducer.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": function() { return /* binding */ initialState; },
/* harmony export */   "groupReducer": function() { return /* binding */ groupReducer; }
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 17562);
/* harmony import */ var _actions_group_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/group.action */ 8027);



const initialState = {
    groupList: [],
    currentMemberList: [],
    createGroupModelVisible: false
};
const _groupReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_group_action__WEBPACK_IMPORTED_MODULE_0__.updateGroupListAction, (state, { groupList }) => {
    return Object.assign(Object.assign({}, state), { groupList });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_group_action__WEBPACK_IMPORTED_MODULE_0__.updateCurrentMemberListAction, (state, { currentMemberList }) => {
    return Object.assign(Object.assign({}, state), { currentMemberList });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_group_action__WEBPACK_IMPORTED_MODULE_0__.resetCurrentMemberListAction, (state) => {
    return Object.assign(Object.assign({}, state), { currentMemberList: [] });
}));
function groupReducer(state, action) {
    return _groupReducer(state, action);
}


/***/ }),

/***/ 12841:
/*!************************************************************!*\
  !*** ./projects/ngx-tencent-im/src/store/reducer/index.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reducers": function() { return /* binding */ reducers; }
/* harmony export */ });
/* harmony import */ var _conversation_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conversation.reducer */ 4342);
/* harmony import */ var _group_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./group.reducer */ 9831);
/* harmony import */ var _login_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.reducer */ 23868);
/* harmony import */ var _message_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message.reducer */ 61546);
/* harmony import */ var _user_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.reducer */ 98685);





// register the reducer functions
const reducers = {
    login: _login_reducer__WEBPACK_IMPORTED_MODULE_2__.LoginReducer,
    user: _user_reducer__WEBPACK_IMPORTED_MODULE_4__.UserReducer,
    message: _message_reducer__WEBPACK_IMPORTED_MODULE_3__.showMessageReducer,
    currentConversationID: _conversation_reducer__WEBPACK_IMPORTED_MODULE_0__.conversationIDReducer,
    conversation: _conversation_reducer__WEBPACK_IMPORTED_MODULE_0__.conversationReducer,
    group: _group_reducer__WEBPACK_IMPORTED_MODULE_1__.groupReducer
};


/***/ }),

/***/ 23868:
/*!********************************************************************!*\
  !*** ./projects/ngx-tencent-im/src/store/reducer/login.reducer.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": function() { return /* binding */ initialState; },
/* harmony export */   "LoginReducer": function() { return /* binding */ LoginReducer; }
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 17562);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ 10771);


const initialState = {
    isLogin: false,
};
const _loginReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions__WEBPACK_IMPORTED_MODULE_0__.loginAction, (state, { isLogin }) => (Object.assign(Object.assign({}, state), { isLogin }))));
function LoginReducer(state, action) {
    return _loginReducer(state, action);
}


/***/ }),

/***/ 61546:
/*!**********************************************************************!*\
  !*** ./projects/ngx-tencent-im/src/store/reducer/message.reducer.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": function() { return /* binding */ initialState; },
/* harmony export */   "showMessageReducer": function() { return /* binding */ showMessageReducer; }
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 17562);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ 10771);


const initialState = {
    type: 'error',
    message: '',
};
const _showMessageReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions__WEBPACK_IMPORTED_MODULE_0__.showAction, (state, { msgType, message }) => ({ type: msgType, message })));
function showMessageReducer(state, action) {
    return _showMessageReducer(state, action);
}


/***/ }),

/***/ 98685:
/*!*******************************************************************!*\
  !*** ./projects/ngx-tencent-im/src/store/reducer/user.reducer.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": function() { return /* binding */ initialState; },
/* harmony export */   "UserReducer": function() { return /* binding */ UserReducer; }
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 17562);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ 10771);


const initialState = {
    currentUserProfile: {},
    isLogin: false,
    isSDKReady: false,
    userID: 0,
    userSig: '',
    sdkAppID: 0,
};
const _userReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions__WEBPACK_IMPORTED_MODULE_0__.SDKReadyAction, (state, { SDKReadyState }) => (Object.assign(Object.assign({}, state), { isSDKReady: SDKReadyState }))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions__WEBPACK_IMPORTED_MODULE_0__.updateCurrentUserProfileAction, (state, { profile }) => (Object.assign(Object.assign({}, state), { currentUserProfile: profile }))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions__WEBPACK_IMPORTED_MODULE_0__.resetUserAction, (state) => (Object.assign(Object.assign({}, state), initialState))));
function UserReducer(state, action) {
    return _userReducer(state, action);
}


/***/ }),

/***/ 10229:
/*!******************************************************************************!*\
  !*** ./projects/ngx-tencent-im/src/store/selectors/conversation.selector.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCurrentConversationID": function() { return /* binding */ getCurrentConversationID; },
/* harmony export */   "conversationSelector": function() { return /* binding */ conversationSelector; },
/* harmony export */   "currentConversationSelector": function() { return /* binding */ currentConversationSelector; },
/* harmony export */   "conversationListSelector": function() { return /* binding */ conversationListSelector; }
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 17562);

const selectPlayerStates = (state) => state.currentConversationID;
const getCurrentConversationID = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectPlayerStates, (state) => state.conversationID);
const selectConversation = (state) => state.conversation;
const conversationSelector = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectConversation, (state) => state);
const selectCurrentConversation = (state) => state.conversation.currentConversation;
const currentConversationSelector = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectCurrentConversation, (state) => state);
const selectConversationList = (state) => state.conversation.conversationList;
const conversationListSelector = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectConversationList, (state) => state);


/***/ }),

/***/ 57087:
/*!***********************************************************************!*\
  !*** ./projects/ngx-tencent-im/src/store/selectors/group.selector.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "groupListSelector": function() { return /* binding */ groupListSelector; },
/* harmony export */   "currentMemberListSelector": function() { return /* binding */ currentMemberListSelector; }
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 17562);

const selectGroupListStates = (state) => state.group.groupList;
const groupListSelector = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectGroupListStates, (state) => state);
const currentMemberListStates = (state) => state.group.currentMemberList;
const currentMemberListSelector = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(currentMemberListStates, (state) => state);


/***/ }),

/***/ 29716:
/*!**************************************************************!*\
  !*** ./projects/ngx-tencent-im/src/store/selectors/index.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "conversationListSelector": function() { return /* reexport safe */ _conversation_selector__WEBPACK_IMPORTED_MODULE_0__.conversationListSelector; },
/* harmony export */   "conversationSelector": function() { return /* reexport safe */ _conversation_selector__WEBPACK_IMPORTED_MODULE_0__.conversationSelector; },
/* harmony export */   "currentConversationSelector": function() { return /* reexport safe */ _conversation_selector__WEBPACK_IMPORTED_MODULE_0__.currentConversationSelector; },
/* harmony export */   "getCurrentConversationID": function() { return /* reexport safe */ _conversation_selector__WEBPACK_IMPORTED_MODULE_0__.getCurrentConversationID; },
/* harmony export */   "getLogin": function() { return /* reexport safe */ _login_selector__WEBPACK_IMPORTED_MODULE_1__.getLogin; },
/* harmony export */   "getMessage": function() { return /* reexport safe */ _message_selector__WEBPACK_IMPORTED_MODULE_2__.getMessage; },
/* harmony export */   "currentUserProfileSelector": function() { return /* reexport safe */ _user_selector__WEBPACK_IMPORTED_MODULE_3__.currentUserProfileSelector; },
/* harmony export */   "getSDkReady": function() { return /* reexport safe */ _user_selector__WEBPACK_IMPORTED_MODULE_3__.getSDkReady; }
/* harmony export */ });
/* harmony import */ var _conversation_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conversation.selector */ 10229);
/* harmony import */ var _login_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.selector */ 61047);
/* harmony import */ var _message_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message.selector */ 83385);
/* harmony import */ var _user_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.selector */ 34845);






/***/ }),

/***/ 61047:
/*!***********************************************************************!*\
  !*** ./projects/ngx-tencent-im/src/store/selectors/login.selector.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLogin": function() { return /* binding */ getLogin; }
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 17562);

const selectPlayerStates = (state) => state.login;
const getLogin = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectPlayerStates, (state) => state.isLogin);


/***/ }),

/***/ 83385:
/*!*************************************************************************!*\
  !*** ./projects/ngx-tencent-im/src/store/selectors/message.selector.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMessage": function() { return /* binding */ getMessage; }
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 17562);

const selectPlayerStates = (state) => state.message;
const getMessage = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectPlayerStates, (state) => state);


/***/ }),

/***/ 34845:
/*!**********************************************************************!*\
  !*** ./projects/ngx-tencent-im/src/store/selectors/user.selector.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSDkReady": function() { return /* binding */ getSDkReady; },
/* harmony export */   "currentUserProfileSelector": function() { return /* binding */ currentUserProfileSelector; }
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 17562);

const selectPlayerStates = (state) => state.user;
const getSDkReady = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectPlayerStates, (state) => state.isSDKReady);
const currentUserProfileSelector = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectPlayerStates, (state) => state.currentUserProfile);


/***/ }),

/***/ 11786:
/*!***********************************************************!*\
  !*** ./projects/ngx-tencent-im/src/tencent-tim.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TencentTimModule": function() { return /* binding */ TencentTimModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 80395);
/* harmony import */ var _tencent_tim_tencent_tim_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tencent-tim/tencent-tim.component */ 74977);
/* harmony import */ var _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./side-bar/side-bar.component */ 95239);
/* harmony import */ var _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-profile/my-profile.component */ 48556);
/* harmony import */ var _avatar_avatar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./avatar/avatar.component */ 50008);
/* harmony import */ var _conversation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./conversation */ 64468);
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message */ 84046);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @ngrx/store */ 17562);
/* harmony import */ var _store_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/reducer */ 12841);
/* harmony import */ var _conversation_conversation_profile_conversation_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./conversation/conversation-profile/conversation-profile.component */ 26748);
/* harmony import */ var _conversation_conversation_profile_conversation_profile_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./conversation/conversation-profile/conversation-profile/user-profile/user-profile.component */ 39032);
/* harmony import */ var _group_group_list_group_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./group/group-list/group-list.component */ 57652);
/* harmony import */ var _message_message_element_group_tip_element_group_tip_element_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./message/message-element/group-tip-element/group-tip-element.component */ 32911);
/* harmony import */ var _message_message_header_message_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./message/message-header/message-header.component */ 45784);
/* harmony import */ var _message_message_element_custom_element_custom_element_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./message/message-element/custom-element/custom-element.component */ 88436);
/* harmony import */ var _message_message_element_group_system_notice_element_group_system_notice_element_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./message/message-element/group-system-notice-element/group-system-notice-element.component */ 6808);
/* harmony import */ var _conversation_conversation_profile_conversation_profile_group_profile_group_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./conversation/conversation-profile/conversation-profile/group-profile/group-profile.component */ 8680);
/* harmony import */ var _group_group_member_list_group_member_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./group/group-member-list/group-member-list.component */ 14222);
/* harmony import */ var _group_group_item_group_item_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./group/group-item/group-item.component */ 64259);
/* harmony import */ var _group_group_member_info_group_member_info_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./group/group-member-info/group-member-info.component */ 70565);
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ng-zorro-antd/badge */ 9375);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ng-zorro-antd/collapse */ 39370);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ng-zorro-antd/form */ 32734);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ng-zorro-antd/image */ 77);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ng-zorro-antd/message */ 91804);
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ 90463);
/* harmony import */ var ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-zorro-antd/popover */ 8813);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 79787);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ng-zorro-antd/radio */ 31031);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ng-zorro-antd/switch */ 17318);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 77727);
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ng-zorro-antd/avatar */ 37893);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 8709);
/* harmony import */ var _shared_data__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared.data */ 54825);
/* harmony import */ var _title_title_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./title/title.component */ 35675);
/* harmony import */ var _group_create_group_create_group_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./group/create-group/create-group.component */ 70830);
/* harmony import */ var _message_message_element_group_system_notice_element_approval_join_group_approval_join_group_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./message/message-element/group-system-notice-element/approval-join-group/approval-join-group.component */ 3373);
/* harmony import */ var _my_profile_profile_card_profile_card_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./my-profile/profile-card/profile-card.component */ 73017);
/* harmony import */ var _my_profile_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./my-profile/edit-profile/edit-profile.component */ 78746);
/* harmony import */ var _re_edit_message_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./re-edit-message.service */ 41228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/core */ 2316);











// import { environment } from 'src/environments/environment';






































class TencentTimModule {
    static forRoot(config) {
        return {
            ngModule: TencentTimModule,
            providers: [
                {
                    provide: _shared_data__WEBPACK_IMPORTED_MODULE_18__.NG_Tim_CONFIG,
                    useValue: config
                }
            ],
        };
    }
}
TencentTimModule.ɵfac = function TencentTimModule_Factory(t) { return new (t || TencentTimModule)(); };
TencentTimModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineNgModule"]({ type: TencentTimModule });
TencentTimModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineInjector"]({ providers: [_re_edit_message_service__WEBPACK_IMPORTED_MODULE_24__.ReEditMessageService], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_26__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_27__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_27__.ReactiveFormsModule,
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_28__.DragDropModule,
            ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_29__.NzPopoverModule,
            ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_30__.NzToolTipModule,
            ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_31__.NzModalModule,
            ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_32__.NzImageModule,
            ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_33__.NzFormModule,
            ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_34__.NzInputModule,
            ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_35__.NzPopconfirmModule,
            ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_36__.NzInputNumberModule,
            ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_37__.NzButtonModule,
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_38__.NzIconModule,
            ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_39__.NzMessageModule,
            ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_40__.NzSelectModule,
            ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_41__.NzBadgeModule,
            ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_42__.NzCollapseModule,
            ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_43__.NzRadioModule,
            ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_44__.NzAvatarModule,
            ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_45__.NzDropDownModule,
            ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_46__.NzSwitchModule,
            _ngrx_store__WEBPACK_IMPORTED_MODULE_47__.StoreModule.forRoot(_store_reducer__WEBPACK_IMPORTED_MODULE_6__.reducers, {
                runtimeChecks: {
                    strictStateImmutability: false,
                    strictActionImmutability: false,
                    strictStateSerializability: false,
                    strictActionSerializability: false,
                }
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵsetNgModuleScope"](TencentTimModule, { declarations: [_tencent_tim_tencent_tim_component__WEBPACK_IMPORTED_MODULE_0__.TencentTimComponent,
        _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_1__.SideBarComponent,
        _conversation__WEBPACK_IMPORTED_MODULE_4__.ConversationListComponent,
        _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_2__.MyProfileComponent,
        _conversation__WEBPACK_IMPORTED_MODULE_4__.ConversationItemComponent,
        _avatar_avatar_component__WEBPACK_IMPORTED_MODULE_3__.AvatarComponent,
        _conversation__WEBPACK_IMPORTED_MODULE_4__.CurrentConversationComponent,
        _message__WEBPACK_IMPORTED_MODULE_5__.MessageItemComponent,
        _message__WEBPACK_IMPORTED_MODULE_5__.MessageStatusIconComponent,
        _message__WEBPACK_IMPORTED_MODULE_5__.TextElementComponent,
        _message__WEBPACK_IMPORTED_MODULE_5__.MessageBubbleComponent,
        _message__WEBPACK_IMPORTED_MODULE_5__.MessageFooterComponent,
        _message__WEBPACK_IMPORTED_MODULE_5__.MessageSendBoxComponent,
        _message__WEBPACK_IMPORTED_MODULE_5__.ImageElementComponent,
        _message__WEBPACK_IMPORTED_MODULE_5__.FileElementComponent,
        _conversation_conversation_profile_conversation_profile_component__WEBPACK_IMPORTED_MODULE_7__.ConversationProfileComponent,
        _conversation_conversation_profile_conversation_profile_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_8__.UserProfileComponent,
        _group_group_list_group_list_component__WEBPACK_IMPORTED_MODULE_9__.GroupListComponent,
        _message_message_element_group_tip_element_group_tip_element_component__WEBPACK_IMPORTED_MODULE_10__.GroupTipElementComponent,
        _message_message_header_message_header_component__WEBPACK_IMPORTED_MODULE_11__.MessageHeaderComponent,
        _message_message_element_custom_element_custom_element_component__WEBPACK_IMPORTED_MODULE_12__.CustomElementComponent,
        _message_message_element_group_system_notice_element_group_system_notice_element_component__WEBPACK_IMPORTED_MODULE_13__.GroupSystemNoticeElementComponent,
        _conversation_conversation_profile_conversation_profile_group_profile_group_profile_component__WEBPACK_IMPORTED_MODULE_14__.GroupProfileComponent,
        _group_group_member_list_group_member_list_component__WEBPACK_IMPORTED_MODULE_15__.GroupMemberListComponent,
        _group_group_item_group_item_component__WEBPACK_IMPORTED_MODULE_16__.GroupItemComponent,
        _group_group_member_info_group_member_info_component__WEBPACK_IMPORTED_MODULE_17__.GroupMemberInfoComponent,
        _title_title_component__WEBPACK_IMPORTED_MODULE_19__.TitleComponent,
        _group_create_group_create_group_component__WEBPACK_IMPORTED_MODULE_20__.CreateGroupComponent,
        _message_message_element_group_system_notice_element_approval_join_group_approval_join_group_component__WEBPACK_IMPORTED_MODULE_21__.ApprovalJoinGroupComponent,
        _my_profile_profile_card_profile_card_component__WEBPACK_IMPORTED_MODULE_22__.ProfileCardComponent,
        _my_profile_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_23__.EditProfileComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_26__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_27__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_27__.ReactiveFormsModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_28__.DragDropModule,
        ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_29__.NzPopoverModule,
        ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_30__.NzToolTipModule,
        ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_31__.NzModalModule,
        ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_32__.NzImageModule,
        ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_33__.NzFormModule,
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_34__.NzInputModule,
        ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_35__.NzPopconfirmModule,
        ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_36__.NzInputNumberModule,
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_37__.NzButtonModule,
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_38__.NzIconModule,
        ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_39__.NzMessageModule,
        ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_40__.NzSelectModule,
        ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_41__.NzBadgeModule,
        ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_42__.NzCollapseModule,
        ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_43__.NzRadioModule,
        ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_44__.NzAvatarModule,
        ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_45__.NzDropDownModule,
        ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_46__.NzSwitchModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_47__.StoreRootModule], exports: [_tencent_tim_tencent_tim_component__WEBPACK_IMPORTED_MODULE_0__.TencentTimComponent] }); })();


/***/ }),

/***/ 74977:
/*!**************************************************************************!*\
  !*** ./projects/ngx-tencent-im/src/tencent-tim/tencent-tim.component.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TencentTimComponent": function() { return /* binding */ TencentTimComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/selectors */ 29716);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 17562);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 80395);
/* harmony import */ var _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../side-bar/side-bar.component */ 95239);
/* harmony import */ var _title_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../title/title.component */ 35675);
/* harmony import */ var _conversation_current_conversation_current_conversation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../conversation/current-conversation/current-conversation.component */ 71337);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _conversation_conversation_profile_conversation_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../conversation/conversation-profile/conversation-profile.component */ 26748);










function TencentTimComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TencentTimComponent_div_8_Template_div_click_0_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-conversation-profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class TencentTimComponent {
    constructor(store) {
        this.store = store;
        this.hiddenWindow = false;
        this.message = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.hiddenWindowChange = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.showDetail = false;
    }
    ngOnInit() {
        this.subscription = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_0__.getMessage)
            .subscribe((res) => {
            this.message.emit(res);
        });
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
TencentTimComponent.ɵfac = function TencentTimComponent_Factory(t) { return new (t || TencentTimComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store)); };
TencentTimComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: TencentTimComponent, selectors: [["ngx-tencent-tim"]], inputs: { hiddenWindow: "hiddenWindow" }, outputs: { message: "message", hiddenWindowChange: "hiddenWindowChange" }, decls: 9, vars: 2, consts: [["cdkDrag", "", 1, "chat-wrapper", 3, "hidden", "click"], ["cdkDragHandle", "", 1, "chat-side"], [1, "chat-content"], ["cdkDragHandle", "", 1, "chat-title"], [3, "detailBtnClick", "minimizeClick"], [1, "chat-window"], ["class", "chat-profile", 3, "click", 4, "ngIf"], [1, "chat-profile", 3, "click"]], template: function TencentTimComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TencentTimComponent_Template_div_click_0_listener() { return ctx.showDetail = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "app-side-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "lib-title", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("detailBtnClick", function TencentTimComponent_Template_lib_title_detailBtnClick_5_listener() { return ctx.showDetail = !ctx.showDetail; })("minimizeClick", function TencentTimComponent_Template_lib_title_minimizeClick_5_listener() { ctx.hiddenWindow = true; return ctx.hiddenWindowChange.emit(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "app-current-conversation");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, TencentTimComponent_div_8_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx.hiddenWindow);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showDetail);
    } }, directives: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__.CdkDrag, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__.CdkDragHandle, _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_1__.SideBarComponent, _title_title_component__WEBPACK_IMPORTED_MODULE_2__.TitleComponent, _conversation_current_conversation_current_conversation_component__WEBPACK_IMPORTED_MODULE_3__.CurrentConversationComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _conversation_conversation_profile_conversation_profile_component__WEBPACK_IMPORTED_MODULE_4__.ConversationProfileComponent], styles: [".chat-wrapper[_ngcontent-%COMP%] {\n  height: 80vh;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-end;\n}\n.chat-side[_ngcontent-%COMP%] {\n  box-shadow: 0 11px 20px 0 rgba(0, 0, 0, 0.3);\n}\n.chat-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 11px 20px 0 rgba(0, 0, 0, 0.3);\n}\n.chat-content[_ngcontent-%COMP%]   .chat-window[_ngcontent-%COMP%] {\n  width: 50rem;\n  height: 75vh;\n  overflow: hidden;\n  border-top: 1px solid #e7e7e7;\n}\n.chat-profile[_ngcontent-%COMP%] {\n  height: 80vh;\n  width: 14vw;\n  overflow-y: scroll;\n  border: 1px solid #e7e7e7;\n  flex-shrink: 0;\n  box-shadow: 0 11px 20px 0 rgba(0, 0, 0, 0.3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbmNlbnQtdGltLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUFDRjtBQUNBO0VBQ0UsNENBQUE7QUFDRjtBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNENBQUE7QUFBRjtBQUhBO0VBU0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0FBSEo7QUFPQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSw0Q0FBQTtBQUxGIiwiZmlsZSI6InRlbmNlbnQtdGltLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXQtd3JhcHBlciB7XG4gIGhlaWdodDogODB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uY2hhdC1zaWRlIHtcbiAgYm94LXNoYWRvdzogMCAxMXB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cbi5jaGF0LWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3gtc2hhZG93OiAwIDExcHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcblxuICAuY2hhdC10aXRsZSB7XG4gICAgLy8gaGVpZ2h0OiA1dmg7XG4gIH1cbiAgLmNoYXQtd2luZG93IHtcbiAgICB3aWR0aDogNTByZW07XG4gICAgaGVpZ2h0OiA3NXZoO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlN2U3ZTc7XG4gIH1cbn1cblxuLmNoYXQtcHJvZmlsZSB7XG4gIGhlaWdodDogODB2aDtcbiAgd2lkdGg6IDE0dnc7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U3ZTdlNztcbiAgZmxleC1zaHJpbms6IDA7XG4gIGJveC1zaGFkb3c6IDAgMTFweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 92789:
/*!***********************************************************!*\
  !*** ./projects/ngx-tencent-im/src/tim-helper.service.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimHelperService": function() { return /* binding */ TimHelperService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store/actions */ 10771);
/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/selectors */ 29716);
/* harmony import */ var _store_actions_group_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/actions/group.action */ 8027);
/* harmony import */ var _store_selectors_group_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/selectors/group.selector */ 57087);
/* harmony import */ var tim_js_sdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tim-js-sdk */ 92882);
/* harmony import */ var tim_js_sdk__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tim_js_sdk__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tim_upload_plugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tim-upload-plugin */ 42014);
/* harmony import */ var tim_upload_plugin__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tim_upload_plugin__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared.data */ 54825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ 17562);










class TimHelperService {
    constructor(store, config) {
        this.store = store;
        this.config = config;
        this.eventBus$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
        this.totalUnRead = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
        this.initTim(config);
        // 初始化监听器
        this.initListener();
        // 获取当前会话
        this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_1__.conversationSelector).subscribe(res => {
            this.conversation = res;
        });
        // 获取当前成员
        this.store.select(_store_selectors_group_selector__WEBPACK_IMPORTED_MODULE_3__.currentMemberListSelector).subscribe(res => {
            this.currentMemberList = res;
        });
    }
    login(userId, userSig) {
        if (!userSig) {
            throw new Error('请配置签名！');
        }
        this.tim.login({ userID: userId, userSig })
            .then((imResponse) => {
            this.eventBus$.next('login');
            this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_0__.loginAction)({ isLogin: true }));
            // this.store.dispatch(startComputeCurrentAction());
            this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_0__.showAction)({ msgType: _shared_data__WEBPACK_IMPORTED_MODULE_6__.MESSAGE_STATUS.success, message: '登录成功！' }));
            if (imResponse.data.repeatLogin === true) {
                // 标识账号已登录，本次登录操作为重复登录。v2.5.1 起支持
                console.log(imResponse.data.errorInfo);
            }
        }).catch((imError) => {
            console.warn('login error:', imError); // 登录失败的相关信息
        });
    }
    logout() {
        // 若有当前会话，在退出登录时已读上报
        if (this.conversation.currentConversation.conversationID) {
            this.tim.setMessageRead({ conversationID: this.conversation.currentConversation.conversationID });
        }
        this.tim.logout().then((res) => {
            this.eventBus$.next('logout');
            // this.store.dispatch(stopComputeCurrentAction());
            this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_0__.loginAction)({ isLogin: false }));
            this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_0__.resetUserAction)());
            this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_0__.resetConversationAction)());
            this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_0__.showAction)({ msgType: _shared_data__WEBPACK_IMPORTED_MODULE_6__.MESSAGE_STATUS.success, message: '已退出！' }));
        });
    }
    // 初始化tim监听函数
    initListener() {
        // sdk ready
        this.tim.on((tim_js_sdk__WEBPACK_IMPORTED_MODULE_4___default().EVENT.SDK_READY), this.onReadyStateUpdate, this);
        // SDK NOT READT
        this.tim.on((tim_js_sdk__WEBPACK_IMPORTED_MODULE_4___default().EVENT.SDK_NOT_READY), this.onReadyStateUpdate, this);
        // 被踢出
        this.tim.on((tim_js_sdk__WEBPACK_IMPORTED_MODULE_4___default().EVENT.KICKED_OUT), this.onKickOut, this);
        // SDK内部出错
        this.tim.on((tim_js_sdk__WEBPACK_IMPORTED_MODULE_4___default().EVENT.ERROR), this.onError, this);
        // 收到新消息
        this.tim.on((tim_js_sdk__WEBPACK_IMPORTED_MODULE_4___default().EVENT.MESSAGE_RECEIVED), this.onReceiveMessage, this);
        // 会话列表更新
        this.tim.on((tim_js_sdk__WEBPACK_IMPORTED_MODULE_4___default().EVENT.CONVERSATION_LIST_UPDATED), this.onUpdateConversationList, this);
        // 群组列表更新
        this.tim.on((tim_js_sdk__WEBPACK_IMPORTED_MODULE_4___default().EVENT.GROUP_LIST_UPDATED), this.onUpdateGroupList, this);
        // 网络监测
        this.tim.on((tim_js_sdk__WEBPACK_IMPORTED_MODULE_4___default().EVENT.NET_STATE_CHANGE), this.onNetStateChange, this);
        // 已读回执
        this.tim.on((tim_js_sdk__WEBPACK_IMPORTED_MODULE_4___default().EVENT.MESSAGE_READ_BY_PEER), this.onMessageReadByPeer, this);
    }
    onReadyStateUpdate({ name }) {
        const isSDKReady = name === (tim_js_sdk__WEBPACK_IMPORTED_MODULE_4___default().EVENT.SDK_READY) ? true : false;
        this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_0__.SDKReadyAction)({ SDKReadyState: isSDKReady }));
        if (isSDKReady) {
            this.tim.getMyProfile()
                .then(({ data }) => {
                this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_0__.updateCurrentUserProfileAction)({ profile: data }));
            })
                .catch(error => {
                this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_0__.showAction)({
                    msgType: _shared_data__WEBPACK_IMPORTED_MODULE_6__.MESSAGE_STATUS.warning,
                    message: error.message
                }));
            });
        }
    }
    onKickOut(event) {
        this.eventBus$.next('logout');
        // this.store.dispatch(stopComputeCurrentAction());
        this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_0__.loginAction)({ isLogin: false }));
        this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_0__.resetUserAction)());
        this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_0__.resetConversationAction)());
        this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_0__.showAction)({ msgType: _shared_data__WEBPACK_IMPORTED_MODULE_6__.MESSAGE_STATUS.warning, message: '由于多实例登录被踢出，请重新登录!' }));
    }
    onError({ data }) {
        if (data.message !== 'Network Error') {
            console.log('%c error', 'color:red;font-size:20px;', data);
        }
    }
    onMessageReadByPeer(event) {
        console.log('已回执', event);
    }
    onReceiveMessage({ data: messageList }) {
        // this.handleVideoMessage(messageList);
        // this.handleAt(messageList);
        // this.handleQuitGroupTip(messageList);
        this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_0__.pushCurrentMessageListAction)({ message: messageList }));
    }
    // 会话列表更新
    onUpdateConversationList(event) {
        this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_0__.updateConversationListAction)({ conversationList: event.data }));
    }
    // 群列表更新
    onUpdateGroupList(event) {
        this.store.dispatch((0,_store_actions_group_action__WEBPACK_IMPORTED_MODULE_2__.updateGroupListAction)({ groupList: event.data }));
    }
    onNetStateChange(event) {
        console.log('网络监测::', event);
    }
    /**
     * 切换会话
     * 调用时机：切换会话时
     */
    checkoutConversation(conversationID) {
        this.store.dispatch((0,_store_actions_group_action__WEBPACK_IMPORTED_MODULE_2__.resetCurrentMemberListAction)());
        // 1.切换会话前，将切换前的会话进行已读上报
        if (this.conversation.currentConversation.conversationID) {
            const prevConversationID = this.conversation.currentConversation.conversationID;
            this.tim.setMessageRead({ conversationID: prevConversationID });
        }
        // 2.待切换的会话也进行已读上报
        this.tim.setMessageRead({ conversationID });
        // 3. 获取会话信息
        return this.tim.getConversationProfile(conversationID).then((res) => {
            // 3.1 更新当前会话
            this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_0__.updateCurrentConversationAction)({ conversation: res.data.conversation }));
            // 3.2 获取消息列表
            this.getMessageList(conversationID);
            if (res.data.conversation.type === (tim_js_sdk__WEBPACK_IMPORTED_MODULE_4___default().TYPES.CONV_GROUP)) {
                this.getGroupMemberList(res.data.conversation.groupProfile.groupID);
            }
            return Promise.resolve();
        });
        // .catch(err => {
        //   this.store.dispatch(showAction({ msgType: MESSAGE_STATUS.error, message: err }));
        // });
    }
    /**
     * @description 获取消息
     */
    getMessageList(conversationID) {
        if (this.conversation.isCompleted) {
            this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_0__.showAction)({
                msgType: _shared_data__WEBPACK_IMPORTED_MODULE_6__.MESSAGE_STATUS.info,
                message: '已经没有更多的历史消息了哦'
            }));
            return;
        }
        const { nextReqMessageID, currentMessageList } = this.conversation;
        this.tim.getMessageList({ conversationID, nextReqMessageID, count: 15 })
            .then((imResponse) => {
            this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_0__.updateMessageAction)({
                nextReqMessageID: imResponse.data.nextReqMessageID,
                isCompleted: imResponse.data.isCompleted,
                currentMessageList: [...imResponse.data.messageList, ...currentMessageList]
            }));
        });
    }
    /**
     * @description 获取群成员
     */
    getGroupMemberList(groupID) {
        this.tim.getGroupMemberList({
            groupID,
            offset: this.currentMemberList.length,
            count: 30
        }).then((imResponse) => {
            this.store.dispatch((0,_store_actions_group_action__WEBPACK_IMPORTED_MODULE_2__.updateCurrentMemberListAction)({ currentMemberList: imResponse.data.memberList }));
        });
    }
    initTim(config) {
        // const cosImport = await import('cos-js-sdk-v5');
        // const timImport = await import('tim-js-sdk');
        this.tim = tim_js_sdk__WEBPACK_IMPORTED_MODULE_4___default().create({
            SDKAppID: config.sdkAppId,
        });
        // 无日志级别
        this.tim.setLogLevel(config.level || 1);
        // 注册 cos
        this.tim.registerPlugin({ 'tim-upload-plugin': (tim_upload_plugin__WEBPACK_IMPORTED_MODULE_5___default()) });
    }
}
TimHelperService.ɵfac = function TimHelperService_Factory(t) { return new (t || TimHelperService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_9__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_shared_data__WEBPACK_IMPORTED_MODULE_6__.NG_Tim_CONFIG)); };
TimHelperService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: TimHelperService, factory: TimHelperService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 35675:
/*!**************************************************************!*\
  !*** ./projects/ngx-tencent-im/src/title/title.component.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TitleComponent": function() { return /* binding */ TitleComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared.data */ 54825);
/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/selectors */ 29716);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 17562);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);








class TitleComponent {
    constructor(store, config) {
        this.store = store;
        this.config = config;
        this.detailBtnClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.minimizeClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() {
        this.subscription = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_1__.currentConversationSelector).subscribe((res) => {
            this.currentConversation = res;
        });
    }
    get detailIsHidden() {
        var _a;
        const none = JSON.stringify(this.currentConversation) === '{}';
        return none || (!none && ((_a = this.currentConversation) === null || _a === void 0 ? void 0 : _a.conversationID.includes('SYSTEM')));
    }
    get name() {
        var _a;
        switch ((_a = this.currentConversation) === null || _a === void 0 ? void 0 : _a.type) {
            case _shared_data__WEBPACK_IMPORTED_MODULE_0__.CONVERSATION_TYPE.client:
                return this.currentConversation.userProfile.nick || this.currentConversation.userProfile.userID;
            case _shared_data__WEBPACK_IMPORTED_MODULE_0__.CONVERSATION_TYPE.group:
                return this.currentConversation.groupProfile.name;
            case _shared_data__WEBPACK_IMPORTED_MODULE_0__.CONVERSATION_TYPE.system:
                return '系统通知';
            default:
                return null;
        }
    }
    handleClick(event) {
        event.preventDefault();
        event.stopPropagation();
        this.detailBtnClick.emit();
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
TitleComponent.ɵfac = function TitleComponent_Factory(t) { return new (t || TitleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_data__WEBPACK_IMPORTED_MODULE_0__.NG_Tim_CONFIG)); };
TitleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TitleComponent, selectors: [["lib-title"]], outputs: { detailBtnClick: "detailBtnClick", minimizeClick: "minimizeClick" }, decls: 9, vars: 3, consts: [["nz-row", "", 1, "title"], ["nz-col", "", "nzSpan", "12"], [1, "title-name"], ["nz-col", "", "nzSpan", "12", 1, "icon-content"], [1, "minimize"], ["nz-icon", "", "nzType", "minus", "nzTheme", "outline", 3, "hidden", "click"], ["nz-icon", "", "nzType", "small-dash", "nzTheme", "outline", "title", "\u67E5\u770B\u8BE6\u7EC6\u4FE1\u606F", 3, "hidden", "click"]], template: function TitleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TitleComponent_Template_i_click_6_listener() { return ctx.minimizeClick.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TitleComponent_Template_i_click_8_listener($event) { return ctx.handleClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !ctx.config.minimized);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.detailIsHidden);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__.NzColDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__.NzIconDirective], styles: [".title[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n}\n.title-name[_ngcontent-%COMP%] {\n  padding: 0 20px;\n  color: #1c2438;\n  font-size: 18px;\n  font-weight: bold;\n  line-height: 50px;\n  text-shadow: #76828c 0 0 0.1em;\n}\n.icon-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: flex-end;\n}\n.icon-content[_ngcontent-%COMP%]   .minimize[_ngcontent-%COMP%] {\n  flex: 1;\n}\ni[_ngcontent-%COMP%] {\n  padding: 6px;\n  cursor: pointer;\n}\ni[_ngcontent-%COMP%]:hover {\n  background-color: #e5e5e5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpdGxlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUFDRjtBQUNBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0FBQ0Y7QUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUFDRjtBQUxBO0VBTUksT0FBQTtBQUVKO0FBRUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQUFGO0FBR0E7RUFDRSx5QkFBQTtBQURGIiwiZmlsZSI6InRpdGxlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbn1cbi50aXRsZS1uYW1lIHtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBjb2xvcjogIzFjMjQzODtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIHRleHQtc2hhZG93OiAjNzY4MjhjIDAgMCAwLjFlbTtcbn1cbi5pY29uLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIC5taW5pbWl6ZSB7XG4gICAgZmxleDogMTtcbiAgfVxufVxuXG5pIHtcbiAgcGFkZGluZzogNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1O1xufVxuIl19 */"] });


/***/ }),

/***/ 69870:
/*!*********************************************!*\
  !*** ./projects/ngx-tencent-im/src/type.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 29386:
/*!****************************************************!*\
  !*** ./projects/ngx-tencent-im/src/util/common.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "translateGroupSystemNotice": function() { return /* binding */ translateGroupSystemNotice; }
/* harmony export */ });
function translateGroupSystemNotice(message) {
    var _a, _b;
    const groupName = ((_a = message.payload) === null || _a === void 0 ? void 0 : _a.groupProfile.name) || ((_b = message.payload) === null || _b === void 0 ? void 0 : _b.groupProfile.groupID);
    switch (message.payload.operationType) {
        case 1:
            return `${message.payload.operatorID} 申请加入群组：${groupName}`;
        case 2:
            return `成功加入群组：${groupName}`;
        case 3:
            return `申请加入群组：${groupName}被拒绝`;
        case 4:
            return `你被管理员${message.payload.operatorID}踢出群组：${groupName}`;
        case 5:
            return `群：${groupName} 已被${message.payload.operatorID}解散`;
        case 6:
            return `${message.payload.operatorID}创建群：${groupName}`;
        case 7:
            return `${message.payload.operatorID}邀请你加群：${groupName}`;
        case 8:
            return `你退出群组：${groupName}`;
        case 9:
            return `你被${message.payload.operatorID}设置为群：${groupName}的管理员`;
        case 10:
            return `你被${message.payload.operatorID}撤销群：${groupName}的管理员身份`;
        case 255:
            return '自定义群系统通知: ' + message.payload.userDefinedField;
    }
}


/***/ }),

/***/ 90570:
/*!**************************************************!*\
  !*** ./projects/ngx-tencent-im/src/util/date.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDate": function() { return /* binding */ getDate; },
/* harmony export */   "getTime": function() { return /* binding */ getTime; },
/* harmony export */   "getFullDate": function() { return /* binding */ getFullDate; },
/* harmony export */   "isToday": function() { return /* binding */ isToday; }
/* harmony export */ });
/**
 * 返回年月日
 * @export
 * @param {Date} date
 * @param {string} [splitor='-']
 * @returns
 */
function getDate(date, splitor = '-') {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}${splitor}${addZeroPrefix(month)}${splitor}${addZeroPrefix(day)}`;
}
/**
 * 返回时分秒/时分
 * @export
 * @param {*} date
 * @param {boolean} [withSecond=false]
 * @returns
 */
function getTime(date, withSecond = false) {
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    return withSecond ? `${addZeroPrefix(hour)}:${addZeroPrefix(minute)}:${addZeroPrefix(second)}` : `${hour}:${addZeroPrefix(minute)}`;
}
function getFullDate(date) {
    return `${getDate(date)} ${getTime(date)}`;
}
function isToday(date) {
    return date.toDateString() === new Date().toDateString();
}
/**
 * 个位数，加0前缀
 * @param {*} number
 * @returns
 */
function addZeroPrefix(number) {
    return number < 10 ? `0${number}` : number;
}


/***/ }),

/***/ 13213:
/*!*********************************************************!*\
  !*** ./projects/ngx-tencent-im/src/util/decode-text.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decodeText": function() { return /* binding */ decodeText; }
/* harmony export */ });
/* harmony import */ var _emoji_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emoji-map */ 29424);

function decodeText(payload) {
    let renderDom = [];
    let temp = payload.text;
    let left = -1;
    let right = -1;
    while (temp !== '') {
        left = temp.indexOf('[');
        right = temp.indexOf(']');
        switch (left) {
            case 0:
                if (right === -1) {
                    renderDom.push({
                        name: 'text',
                        text: temp
                    });
                    temp = '';
                }
                else {
                    let _emoji = temp.slice(0, right + 1);
                    if (_emoji_map__WEBPACK_IMPORTED_MODULE_0__.emojiMap[_emoji]) {
                        renderDom.push({
                            name: 'img',
                            src: _emoji_map__WEBPACK_IMPORTED_MODULE_0__.emojiUrl + _emoji_map__WEBPACK_IMPORTED_MODULE_0__.emojiMap[_emoji]
                        });
                        temp = temp.substring(right + 1);
                    }
                    else {
                        renderDom.push({
                            name: 'text',
                            text: '['
                        });
                        temp = temp.slice(1);
                    }
                }
                break;
            case -1:
                renderDom.push({
                    name: 'text',
                    text: temp
                });
                temp = '';
                break;
            default:
                renderDom.push({
                    name: 'text',
                    text: temp.slice(0, left)
                });
                temp = temp.substring(left);
                break;
        }
    }
    return renderDom;
}


/***/ }),

/***/ 29424:
/*!*******************************************************!*\
  !*** ./projects/ngx-tencent-im/src/util/emoji-map.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "emojiUrl": function() { return /* binding */ emojiUrl; },
/* harmony export */   "emojiMap": function() { return /* binding */ emojiMap; },
/* harmony export */   "emojiName": function() { return /* binding */ emojiName; }
/* harmony export */ });
const emojiUrl = 'https://imgcache.qq.com/open/qcloud/tim/assets/emoji/';
const emojiMap = {
    '[NO]': 'emoji_0@2x.png',
    '[OK]': 'emoji_1@2x.png',
    '[下雨]': 'emoji_2@2x.png',
    '[么么哒]': 'emoji_3@2x.png',
    '[乒乓]': 'emoji_4@2x.png',
    '[便便]': 'emoji_5@2x.png',
    '[信封]': 'emoji_6@2x.png',
    '[偷笑]': 'emoji_7@2x.png',
    '[傲慢]': 'emoji_8@2x.png',
    '[再见]': 'emoji_9@2x.png',
    '[冷汗]': 'emoji_10@2x.png',
    '[凋谢]': 'emoji_11@2x.png',
    '[刀]': 'emoji_12@2x.png',
    '[删除]': 'emoji_13@2x.png',
    '[勾引]': 'emoji_14@2x.png',
    '[发呆]': 'emoji_15@2x.png',
    '[发抖]': 'emoji_16@2x.png',
    '[可怜]': 'emoji_17@2x.png',
    '[可爱]': 'emoji_18@2x.png',
    '[右哼哼]': 'emoji_19@2x.png',
    '[右太极]': 'emoji_20@2x.png',
    '[右车头]': 'emoji_21@2x.png',
    '[吐]': 'emoji_22@2x.png',
    '[吓]': 'emoji_23@2x.png',
    '[咒骂]': 'emoji_24@2x.png',
    '[咖啡]': 'emoji_25@2x.png',
    '[啤酒]': 'emoji_26@2x.png',
    '[嘘]': 'emoji_27@2x.png',
    '[回头]': 'emoji_28@2x.png',
    '[困]': 'emoji_29@2x.png',
    '[坏笑]': 'emoji_30@2x.png',
    '[多云]': 'emoji_31@2x.png',
    '[大兵]': 'emoji_32@2x.png',
    '[大哭]': 'emoji_33@2x.png',
    '[太阳]': 'emoji_34@2x.png',
    '[奋斗]': 'emoji_35@2x.png',
    '[奶瓶]': 'emoji_36@2x.png',
    '[委屈]': 'emoji_37@2x.png',
    '[害羞]': 'emoji_38@2x.png',
    '[尴尬]': 'emoji_39@2x.png',
    '[左哼哼]': 'emoji_40@2x.png',
    '[左太极]': 'emoji_41@2x.png',
    '[左车头]': 'emoji_42@2x.png',
    '[差劲]': 'emoji_43@2x.png',
    '[弱]': 'emoji_44@2x.png',
    '[强]': 'emoji_45@2x.png',
    '[彩带]': 'emoji_46@2x.png',
    '[彩球]': 'emoji_47@2x.png',
    '[得意]': 'emoji_48@2x.png',
    '[微笑]': 'emoji_49@2x.png',
    '[心碎了]': 'emoji_50@2x.png',
    '[快哭了]': 'emoji_51@2x.png',
    '[怄火]': 'emoji_52@2x.png',
    '[怒]': 'emoji_53@2x.png',
    '[惊恐]': 'emoji_54@2x.png',
    '[惊讶]': 'emoji_55@2x.png',
    '[憨笑]': 'emoji_56@2x.png',
    '[手枪]': 'emoji_57@2x.png',
    '[打哈欠]': 'emoji_58@2x.png',
    '[抓狂]': 'emoji_59@2x.png',
    '[折磨]': 'emoji_60@2x.png',
    '[抠鼻]': 'emoji_61@2x.png',
    '[抱抱]': 'emoji_62@2x.png',
    '[抱拳]': 'emoji_63@2x.png',
    '[拳头]': 'emoji_64@2x.png',
    '[挥手]': 'emoji_65@2x.png',
    '[握手]': 'emoji_66@2x.png',
    '[撇嘴]': 'emoji_67@2x.png',
    '[擦汗]': 'emoji_68@2x.png',
    '[敲打]': 'emoji_69@2x.png',
    '[晕]': 'emoji_70@2x.png',
    '[月亮]': 'emoji_71@2x.png',
    '[棒棒糖]': 'emoji_72@2x.png',
    '[汽车]': 'emoji_73@2x.png',
    '[沙发]': 'emoji_74@2x.png',
    '[流汗]': 'emoji_75@2x.png',
    '[流泪]': 'emoji_76@2x.png',
    '[激动]': 'emoji_77@2x.png',
    '[灯泡]': 'emoji_78@2x.png',
    '[炸弹]': 'emoji_79@2x.png',
    '[熊猫]': 'emoji_80@2x.png',
    '[爆筋]': 'emoji_81@2x.png',
    '[爱你]': 'emoji_82@2x.png',
    '[爱心]': 'emoji_83@2x.png',
    '[爱情]': 'emoji_84@2x.png',
    '[猪头]': 'emoji_85@2x.png',
    '[猫咪]': 'emoji_86@2x.png',
    '[献吻]': 'emoji_87@2x.png',
    '[玫瑰]': 'emoji_88@2x.png',
    '[瓢虫]': 'emoji_89@2x.png',
    '[疑问]': 'emoji_90@2x.png',
    '[白眼]': 'emoji_91@2x.png',
    '[皮球]': 'emoji_92@2x.png',
    '[睡觉]': 'emoji_93@2x.png',
    '[磕头]': 'emoji_94@2x.png',
    '[示爱]': 'emoji_95@2x.png',
    '[礼品袋]': 'emoji_96@2x.png',
    '[礼物]': 'emoji_97@2x.png',
    '[篮球]': 'emoji_98@2x.png',
    '[米饭]': 'emoji_99@2x.png',
    '[糗大了]': 'emoji_100@2x.png',
    '[红双喜]': 'emoji_101@2x.png',
    '[红灯笼]': 'emoji_102@2x.png',
    '[纸巾]': 'emoji_103@2x.png',
    '[胜利]': 'emoji_104@2x.png',
    '[色]': 'emoji_105@2x.png',
    '[药]': 'emoji_106@2x.png',
    '[菜刀]': 'emoji_107@2x.png',
    '[蛋糕]': 'emoji_108@2x.png',
    '[蜡烛]': 'emoji_109@2x.png',
    '[街舞]': 'emoji_110@2x.png',
    '[衰]': 'emoji_111@2x.png',
    '[西瓜]': 'emoji_112@2x.png',
    '[调皮]': 'emoji_113@2x.png',
    '[象棋]': 'emoji_114@2x.png',
    '[跳绳]': 'emoji_115@2x.png',
    '[跳跳]': 'emoji_116@2x.png',
    '[车厢]': 'emoji_117@2x.png',
    '[转圈]': 'emoji_118@2x.png',
    '[鄙视]': 'emoji_119@2x.png',
    '[酷]': 'emoji_120@2x.png',
    '[钞票]': 'emoji_121@2x.png',
    '[钻戒]': 'emoji_122@2x.png',
    '[闪电]': 'emoji_123@2x.png',
    '[闭嘴]': 'emoji_124@2x.png',
    '[闹钟]': 'emoji_125@2x.png',
    '[阴险]': 'emoji_126@2x.png',
    '[难过]': 'emoji_127@2x.png',
    '[雨伞]': 'emoji_128@2x.png',
    '[青蛙]': 'emoji_129@2x.png',
    '[面条]': 'emoji_130@2x.png',
    '[鞭炮]': 'emoji_131@2x.png',
    '[风车]': 'emoji_132@2x.png',
    '[飞吻]': 'emoji_133@2x.png',
    '[飞机]': 'emoji_134@2x.png',
    '[饥饿]': 'emoji_135@2x.png',
    '[香蕉]': 'emoji_136@2x.png',
    '[骷髅]': 'emoji_137@2x.png',
    '[麦克风]': 'emoji_138@2x.png',
    '[麻将]': 'emoji_139@2x.png',
    '[鼓掌]': 'emoji_140@2x.png',
    '[龇牙]': 'emoji_141@2x.png'
};
const emojiName = [
    '[龇牙]',
    '[调皮]',
    '[流汗]',
    '[偷笑]',
    '[再见]',
    '[敲打]',
    '[擦汗]',
    '[猪头]',
    '[玫瑰]',
    '[流泪]',
    '[大哭]',
    '[嘘]',
    '[酷]',
    '[抓狂]',
    '[委屈]',
    '[便便]',
    '[炸弹]',
    '[菜刀]',
    '[可爱]',
    '[色]',
    '[害羞]',
    '[得意]',
    '[吐]',
    '[微笑]',
    '[怒]',
    '[尴尬]',
    '[惊恐]',
    '[冷汗]',
    '[爱心]',
    '[示爱]',
    '[白眼]',
    '[傲慢]',
    '[难过]',
    '[惊讶]',
    '[疑问]',
    '[困]',
    '[么么哒]',
    '[憨笑]',
    '[爱情]',
    '[衰]',
    '[撇嘴]',
    '[阴险]',
    '[奋斗]',
    '[发呆]',
    '[右哼哼]',
    '[抱抱]',
    '[坏笑]',
    '[飞吻]',
    '[鄙视]',
    '[晕]',
    '[大兵]',
    '[可怜]',
    '[强]',
    '[弱]',
    '[握手]',
    '[胜利]',
    '[抱拳]',
    '[凋谢]',
    '[米饭]',
    '[蛋糕]',
    '[西瓜]',
    '[啤酒]',
    '[瓢虫]',
    '[勾引]',
    '[OK]',
    '[爱你]',
    '[咖啡]',
    '[月亮]',
    '[刀]',
    '[发抖]',
    '[差劲]',
    '[拳头]',
    '[心碎了]',
    '[太阳]',
    '[礼物]',
    '[皮球]',
    '[骷髅]',
    '[挥手]',
    '[闪电]',
    '[饥饿]',
    '[咒骂]',
    '[折磨]',
    '[抠鼻]',
    '[鼓掌]',
    '[糗大了]',
    '[左哼哼]',
    '[打哈欠]',
    '[快哭了]',
    '[吓]',
    '[篮球]',
    '[乒乓]',
    '[NO]',
    '[跳跳]',
    '[怄火]',
    '[转圈]',
    '[磕头]',
    '[回头]',
    '[跳绳]',
    '[激动]',
    '[街舞]',
    '[献吻]',
    '[左太极]',
    '[右太极]',
    '[闭嘴]',
    '[猫咪]',
    '[红双喜]',
    '[鞭炮]',
    '[红灯笼]',
    '[麻将]',
    '[麦克风]',
    '[礼品袋]',
    '[信封]',
    '[象棋]',
    '[彩带]',
    '[蜡烛]',
    '[爆筋]',
    '[棒棒糖]',
    '[奶瓶]',
    '[面条]',
    '[香蕉]',
    '[飞机]',
    '[左车头]',
    '[车厢]',
    '[右车头]',
    '[多云]',
    '[下雨]',
    '[钞票]',
    '[熊猫]',
    '[灯泡]',
    '[风车]',
    '[闹钟]',
    '[雨伞]',
    '[彩球]',
    '[钻戒]',
    '[沙发]',
    '[纸巾]',
    '[手枪]',
    '[青蛙]'
];


/***/ }),

/***/ 31498:
/*!*************************************************************!*\
  !*** ./projects/ngx-tencent-im/src/util/format-duration.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatDuration": function() { return /* binding */ formatDuration; }
/* harmony export */ });
function formatInt(int) {
    return int < 10 ? `0${int}` : int;
}
function formatDuration(duration) {
    if (duration < 60) {
        return `00:00:${formatInt(duration)}`;
    }
    if (duration < 60 * 60) {
        const min = parseInt((duration / 60).toString());
        const sec = duration - min * 60;
        return `00:${formatInt(min)}:${formatInt(sec)}`;
    }
    const hour = parseInt((duration / (60 * 60)).toString());
    const remainder = duration - hour * (60 * 60);
    const min = parseInt((remainder / 60).toString());
    const sec = remainder - min * 60;
    return `${formatInt(hour)}:${formatInt(min)}:${formatInt(sec)}`;
}


/***/ }),

/***/ 76820:
/*!**********************************************************!*\
  !*** ./projects/ngx-tencent-im/src/util/title-notice.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "titleNotify": function() { return /* binding */ titleNotify; }
/* harmony export */ });
function titleNotify(count) {
    const hasNewMessage = count > 0;
    if (hasNewMessage) {
        if (document.title.search(/\((.*?)\)/) >= 0) {
            document.title = document.title.replace(/\((.*?)\)/, `(${count > 99 ? '99+' : count})`);
        }
        else {
            document.title = `(${count})${document.title}`;
        }
    }
    else {
        document.title = document.title.replace(/\((.*?)\)/, '');
    }
}


/***/ }),

/***/ 30344:
/*!*********************************************************************!*\
  !*** ./projects/ngx-tencent-im/src/util/trtc-custom-message-map.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ACTION": function() { return /* binding */ ACTION; },
/* harmony export */   "VERSION": function() { return /* binding */ VERSION; }
/* harmony export */ });
const ACTION = {
    VIDEO_CALL_ACTION_ERROR: -2,
    VIDEO_CALL_ACTION_UNKNOWN: -1,
    VIDEO_CALL_ACTION_DIALING: 0,
    VIDEO_CALL_ACTION_SPONSOR_CANCEL: 1,
    VIDEO_CALL_ACTION_REJECT: 2,
    VIDEO_CALL_ACTION_SPONSOR_TIMEOUT: 3,
    VIDEO_CALL_ACTION_ACCEPTED: 4,
    VIDEO_CALL_ACTION_HANGUP: 5,
    VIDEO_CALL_ACTION_LINE_BUSY: 6 // 电话占线
};
const VERSION = 3;


/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _im_test_im_test_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./im-test/im-test.component */ 20306);


class AppComponent {
    constructor() {
        this.isLogin = false;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-im-test");
    } }, directives: [_im_test_im_test_component__WEBPACK_IMPORTED_MODULE_0__.ImTestComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50Lmxlc3MifQ== */"] });


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ 20718);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/locales/zh */ 41107);
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/form */ 32734);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/message */ 91804);
/* harmony import */ var ngx_tencent_im__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-tencent-im */ 44606);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ 98458);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/avatar */ 37893);
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/badge */ 9375);
/* harmony import */ var _im_test_im_test_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./im-test/im-test.component */ 20306);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _projects_ngx_tencent_im_src_tencent_tim_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../projects/ngx-tencent-im/src/tencent-tim.module */ 11786);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngrx/store-devtools */ 22373);





















(0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.registerLocaleData)((_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_2___default()));
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule,
            ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_14__.NzFormModule,
            ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_15__.NzSelectModule,
            ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_16__.NzButtonModule,
            ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_17__.NzMessageModule,
            ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_16__.NzButtonModule,
            ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_18__.NzAvatarModule,
            ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_19__.NzBadgeModule,
            ngx_tencent_im__WEBPACK_IMPORTED_MODULE_3__.TencentTimModule.forRoot({
                level: 4,
                sdkAppId: 1400440675,
                minimized: true
            }),
            src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.extModules,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _login_login_component__WEBPACK_IMPORTED_MODULE_5__.LoginComponent,
        _im_test_im_test_component__WEBPACK_IMPORTED_MODULE_6__.ImTestComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule,
        ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_14__.NzFormModule,
        ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_15__.NzSelectModule,
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_16__.NzButtonModule,
        ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_17__.NzMessageModule,
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_16__.NzButtonModule,
        ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_18__.NzAvatarModule,
        ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_19__.NzBadgeModule, _projects_ngx_tencent_im_src_tencent_tim_module__WEBPACK_IMPORTED_MODULE_7__.TencentTimModule, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_20__.StoreDevtoolsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule] }); })();


/***/ }),

/***/ 20306:
/*!**********************************************!*\
  !*** ./src/app/im-test/im-test.component.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImTestComponent": function() { return /* binding */ ImTestComponent; }
/* harmony export */ });
/* harmony import */ var _tim_config_GenerateTestUserSig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tim-config/GenerateTestUserSig */ 55732);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/message */ 91804);
/* harmony import */ var ngx_tencent_im__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-tencent-im */ 44606);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/badge */ 9375);
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/avatar */ 37893);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/login.component */ 98458);
/* harmony import */ var _projects_ngx_tencent_im_src_tencent_tim_tencent_tim_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../projects/ngx-tencent-im/src/tencent-tim/tencent-tim.component */ 74977);









function ImTestComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-login");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ImTestComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ngx-tencent-tim", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("hiddenWindowChange", function ImTestComponent_div_2_Template_ngx_tencent_tim_hiddenWindowChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r2.hidden = $event; })("message", function ImTestComponent_div_2_Template_ngx_tencent_tim_message_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r4.messageTip($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hiddenWindow", ctx_r1.hidden);
} }
class ImTestComponent {
    constructor(message, timHelperService) {
        this.message = message;
        this.timHelperService = timHelperService;
        this.isLogin = false;
        this.hidden = false;
    }
    ngOnInit() {
        this.timHelperService.login('user0', (0,_tim_config_GenerateTestUserSig__WEBPACK_IMPORTED_MODULE_0__.genTestUserSig)('user0').userSig);
        this.timHelperService.eventBus$.subscribe(res => {
            if (res === 'login') {
                this.isLogin = true;
            }
            if (res === 'logout') {
                this.isLogin = false;
            }
        });
        this.unread = this.timHelperService.totalUnRead;
    }
    messageTip(message) {
        switch (message.type) {
            case 'success':
                this.message.success(message.message);
                break;
            case 'error':
                this.message.error(message.message);
                break;
            case 'warning':
                this.message.warning(message.message);
                break;
            case 'info':
                this.message.info(message.message);
                break;
            default:
                break;
        }
    }
}
ImTestComponent.ɵfac = function ImTestComponent_Factory(t) { return new (t || ImTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_5__.NzMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_tencent_im__WEBPACK_IMPORTED_MODULE_1__.TimHelperService)); };
ImTestComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ImTestComponent, selectors: [["app-im-test"]], decls: 6, vars: 6, consts: [[1, "container"], ["class", "login", 4, "ngIf"], ["class", "tencent-im", 4, "ngIf"], [1, "notice", 3, "nzCount", "click"], ["nzIcon", "user", 3, "nzShape"], [1, "login"], [1, "tencent-im"], [3, "hiddenWindow", "hiddenWindowChange", "message"]], template: function ImTestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ImTestComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ImTestComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "nz-badge", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ImTestComponent_Template_nz_badge_click_3_listener() { return ctx.hidden = !ctx.hidden; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "nz-avatar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzCount", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 4, ctx.unread));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzShape", "square");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_7__.NzBadgeComponent, ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_8__.NzAvatarComponent, _login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent, _projects_ngx_tencent_im_src_tencent_tim_tencent_tim_component__WEBPACK_IMPORTED_MODULE_3__.TencentTimComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe], styles: [".container[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  align-content: center;\n  align-items: center;\n}\n.login[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding-top: 100px;\n}\n.login[_ngcontent-%COMP%]   app-login[_ngcontent-%COMP%] {\n  width: 300px;\n}\n.notice[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 20px;\n  bottom: 20px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltLXRlc3QuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUFGO0FBR0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFERjtBQUpBO0VBUUksWUFBQTtBQURKO0FBS0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUhGIiwiZmlsZSI6ImltLXRlc3QuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMHZoO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubG9naW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuXG4gIGFwcC1sb2dpbiB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICB9XG59XG5cbi5ub3RpY2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xuICBib3R0b206IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 98458:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": function() { return /* binding */ LoginComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _tim_config_GenerateTestUserSig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tim-config/GenerateTestUserSig */ 55732);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ngx_tencent_im__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-tencent-im */ 44606);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/form */ 32734);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);












function LoginComponent_nz_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-option", 5);
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzLabel", option_r1.label)("nzValue", option_r1.value);
} }
class LoginComponent {
    constructor(fb, timHelperService) {
        this.fb = fb;
        this.timHelperService = timHelperService;
        this.listOfUser = [];
        const children = [];
        for (let i = 0; i < 10; i++) {
            children.push({ label: 'user' + i, value: 'user' + i });
        }
        this.listOfUser = children;
    }
    ;
    ngOnInit() {
        this.validateForm = this.fb.group({
            userName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
        });
    }
    submitForm() {
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }
        this.timHelperService.login(this.validateForm.value.userName, (0,_tim_config_GenerateTestUserSig__WEBPACK_IMPORTED_MODULE_0__.genTestUserSig)(this.validateForm.value.userName).userSig);
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_tencent_im__WEBPACK_IMPORTED_MODULE_1__.TimHelperService)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 7, vars: 3, consts: [["nz-form", "", 1, "login-form", 3, "formGroup", "ngSubmit"], ["nzErrorTip", "Please input your username!"], ["formControlName", "userName"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["nz-button", "", 1, "login-form-button", "login-form-margin", 3, "nzType"], [3, "nzLabel", "nzValue"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_0_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "nz-form-control", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "nz-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, LoginComponent_nz_option_4_Template, 1, 2, "nz-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\u767B\u5F55");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.validateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.listOfUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzType", "primary");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__.NzFormItemComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__.NzFormControlComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_6__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__["ɵNzTransitionPatchDirective"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_6__.NzOptionComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQubGVzcyJ9 */"] });


/***/ }),

/***/ 55732:
/*!***************************************************!*\
  !*** ./src/app/tim-config/GenerateTestUserSig.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "genTestUserSig": function() { return /* binding */ genTestUserSig; }
/* harmony export */ });
/* harmony import */ var _generate_usersig_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generate-usersig.min */ 44366);
/* harmony import */ var _generate_usersig_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_generate_usersig_min__WEBPACK_IMPORTED_MODULE_0__);
/*eslint-disable*/

/*
 * Module:   GenerateTestUserSig
 *
 * Function: 用于生成测试用的 UserSig，UserSig 是腾讯云为其云服务设计的一种安全保护签名。
 *           其计算方法是对 SDKAppID、UserID 和 EXPIRETIME 进行加密，加密算法为 HMAC-SHA256。
 *
 * Attention: 请不要将如下代码发布到您的线上正式版本的 App 中，原因如下：
 *
 *            本文件中的代码虽然能够正确计算出 UserSig，但仅适合快速调通 SDK 的基本功能，不适合线上产品，
 *            这是因为客户端代码中的 SECRETKEY 很容易被反编译逆向破解，尤其是 Web 端的代码被破解的难度几乎为零。
 *            一旦您的密钥泄露，攻击者就可以计算出正确的 UserSig 来盗用您的腾讯云流量。
 *
 *            正确的做法是将 UserSig 的计算代码和加密密钥放在您的业务服务器上，然后由 App 按需向您的服务器获取实时算出的 UserSig。
 *            由于破解服务器的成本要高于破解客户端 App，所以服务器计算的方案能够更好地保护您的加密密钥。
 *
 * Reference：https://cloud.tencent.com/document/product/647/17275#Server
 */
function genTestUserSig(userID) {
    /**
     * 腾讯云 SDKAppId，需要替换为您自己账号下的 SDKAppId。
     *
     * 进入腾讯云实时音视频[控制台](https://console.cloud.tencent.com/rav ) 创建应用，即可看到 SDKAppId，
     * 它是腾讯云用于区分客户的唯一标识。
     */
    const SDKAPPID = 1400440675;
    /**
     * 签名过期时间，建议不要设置的过短
     * <p>
     * 时间单位：秒
     * 默认时间：7 x 24 x 60 x 60 = 604800 = 7 天
     */
    const EXPIRETIME = 604800;
    /**
     * 计算签名用的加密密钥，获取步骤如下：
     *
     * step1. 进入腾讯云实时音视频[控制台](https://console.cloud.tencent.com/rav )，如果还没有应用就创建一个，
     * step2. 单击“应用配置”进入基础配置页面，并进一步找到“帐号体系集成”部分。
     * step3. 点击“查看密钥”按钮，就可以看到计算 UserSig 使用的加密的密钥了，请将其拷贝并复制到如下的变量中
     *
     * 注意：该方案仅适用于调试Demo，正式上线前请将 UserSig 计算代码和密钥迁移到您的后台服务器上，以避免加密密钥泄露导致的流量盗用。
     * 文档：https://cloud.tencent.com/document/product/647/17275#Server
     */
    const SECRETKEY = '6b4ede60d47a82d913c91658b6fbb4a537a7c83da8d210c1112c48a24e76e5f2';
    const userSig = new _generate_usersig_min__WEBPACK_IMPORTED_MODULE_0__(SDKAPPID, SECRETKEY, EXPIRETIME).genTestUserSig(userID);
    return {
        SDKAppID: SDKAPPID,
        userSig: userSig
    };
}


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; },
/* harmony export */   "extModules": function() { return /* binding */ extModules; }
/* harmony export */ });
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store-devtools */ 22373);
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
const extModules = [
    _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_0__.StoreDevtoolsModule.instrument({
        maxAge: 25,
        logOnly: environment.production
    })
];


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map