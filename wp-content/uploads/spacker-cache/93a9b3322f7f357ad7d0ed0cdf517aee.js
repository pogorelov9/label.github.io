/* jquery-cookie: (http://virtue.tk/wp-content/plugins/woocommerce/assets/js/jquery-cookie/jquery.cookie.min.js) */
/*!
 * jQuery Cookie Plugin v1.3.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */(function(e){typeof define=="function"&&define.amd&&define.amd.jQuery?define(["jquery"],e):e(jQuery)})(function(e){function n(e){return e}function r(e){return decodeURIComponent(e.replace(t," "))}function i(e){e.indexOf('"')===0&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));return s.json?JSON.parse(e):e}var t=/\+/g,s=e.cookie=function(t,o,u){if(o!==undefined){u=e.extend({},s.defaults,u);if(typeof u.expires=="number"){var a=u.expires,f=u.expires=new Date;f.setDate(f.getDate()+a)}o=s.json?JSON.stringify(o):String(o);return document.cookie=[encodeURIComponent(t),"=",s.raw?o:encodeURIComponent(o),u.expires?"; expires="+u.expires.toUTCString():"",u.path?"; path="+u.path:"",u.domain?"; domain="+u.domain:"",u.secure?"; secure":""].join("")}var l=s.raw?n:r,c=document.cookie.split("; "),h=t?undefined:{};for(var p=0,d=c.length;p<d;p++){var v=c[p].split("="),m=l(v.shift()),g=l(v.join("="));if(t&&t===m){h=i(g);break}t||(h[m]=i(g))}return h};s.defaults={};e.removeCookie=function(t,n){if(e.cookie(t)!==undefined){e.cookie(t,"",e.extend(n,{expires:-1}));return!0}return!1}});