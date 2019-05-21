/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});

/*! jQuery UI - v1.12.1 - 2016-09-14
* http://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

(function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)})(function(t){function e(t){for(var e=t.css("visibility");"inherit"===e;)t=t.parent(),e=t.css("visibility");return"hidden"!==e}function i(t){for(var e,i;t.length&&t[0]!==document;){if(e=t.css("position"),("absolute"===e||"relative"===e||"fixed"===e)&&(i=parseInt(t.css("zIndex"),10),!isNaN(i)&&0!==i))return i;t=t.parent()}return 0}function s(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},t.extend(this._defaults,this.regional[""]),this.regional.en=t.extend(!0,{},this.regional[""]),this.regional["en-US"]=t.extend(!0,{},this.regional.en),this.dpDiv=n(t("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function n(e){var i="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return e.on("mouseout",i,function(){t(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).removeClass("ui-datepicker-next-hover")}).on("mouseover",i,o)}function o(){t.datepicker._isDisabledDatepicker(m.inline?m.dpDiv.parent()[0]:m.input[0])||(t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),t(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).addClass("ui-datepicker-next-hover"))}function a(e,i){t.extend(e,i);for(var s in i)null==i[s]&&(e[s]=i[s]);return e}function r(t){return function(){var e=this.element.val();t.apply(this,arguments),this._refresh(),e!==this.element.val()&&this._trigger("change")}}t.ui=t.ui||{},t.ui.version="1.12.1";var h=0,l=Array.prototype.slice;t.cleanData=function(e){return function(i){var s,n,o;for(o=0;null!=(n=i[o]);o++)try{s=t._data(n,"events"),s&&s.remove&&t(n).triggerHandler("remove")}catch(a){}e(i)}}(t.cleanData),t.widget=function(e,i,s){var n,o,a,r={},h=e.split(".")[0];e=e.split(".")[1];var l=h+"-"+e;return s||(s=i,i=t.Widget),t.isArray(s)&&(s=t.extend.apply(null,[{}].concat(s))),t.expr[":"][l.toLowerCase()]=function(e){return!!t.data(e,l)},t[h]=t[h]||{},n=t[h][e],o=t[h][e]=function(t,e){return this._createWidget?(arguments.length&&this._createWidget(t,e),void 0):new o(t,e)},t.extend(o,n,{version:s.version,_proto:t.extend({},s),_childConstructors:[]}),a=new i,a.options=t.widget.extend({},a.options),t.each(s,function(e,s){return t.isFunction(s)?(r[e]=function(){function t(){return i.prototype[e].apply(this,arguments)}function n(t){return i.prototype[e].apply(this,t)}return function(){var e,i=this._super,o=this._superApply;return this._super=t,this._superApply=n,e=s.apply(this,arguments),this._super=i,this._superApply=o,e}}(),void 0):(r[e]=s,void 0)}),o.prototype=t.widget.extend(a,{widgetEventPrefix:n?a.widgetEventPrefix||e:e},r,{constructor:o,namespace:h,widgetName:e,widgetFullName:l}),n?(t.each(n._childConstructors,function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete n._childConstructors):i._childConstructors.push(o),t.widget.bridge(e,o),o},t.widget.extend=function(e){for(var i,s,n=l.call(arguments,1),o=0,a=n.length;a>o;o++)for(i in n[o])s=n[o][i],n[o].hasOwnProperty(i)&&void 0!==s&&(e[i]=t.isPlainObject(s)?t.isPlainObject(e[i])?t.widget.extend({},e[i],s):t.widget.extend({},s):s);return e},t.widget.bridge=function(e,i){var s=i.prototype.widgetFullName||e;t.fn[e]=function(n){var o="string"==typeof n,a=l.call(arguments,1),r=this;return o?this.length||"instance"!==n?this.each(function(){var i,o=t.data(this,s);return"instance"===n?(r=o,!1):o?t.isFunction(o[n])&&"_"!==n.charAt(0)?(i=o[n].apply(o,a),i!==o&&void 0!==i?(r=i&&i.jquery?r.pushStack(i.get()):i,!1):void 0):t.error("no such method '"+n+"' for "+e+" widget instance"):t.error("cannot call methods on "+e+" prior to initialization; "+"attempted to call method '"+n+"'")}):r=void 0:(a.length&&(n=t.widget.extend.apply(null,[n].concat(a))),this.each(function(){var e=t.data(this,s);e?(e.option(n||{}),e._init&&e._init()):t.data(this,s,new i(n,this))})),r}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(e,i){i=t(i||this.defaultElement||this)[0],this.element=t(i),this.uuid=h++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),this.classesElementLookup={},i!==this&&(t.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===i&&this.destroy()}}),this.document=t(i.style?i.ownerDocument:i.document||i),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){var e=this;this._destroy(),t.each(this.classesElementLookup,function(t,i){e._removeClass(i,t)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var s,n,o,a=e;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof e)if(a={},s=e.split("."),e=s.shift(),s.length){for(n=a[e]=t.widget.extend({},this.options[e]),o=0;s.length-1>o;o++)n[s[o]]=n[s[o]]||{},n=n[s[o]];if(e=s.pop(),1===arguments.length)return void 0===n[e]?null:n[e];n[e]=i}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];a[e]=i}return this._setOptions(a),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(e){var i,s,n;for(i in e)n=this.classesElementLookup[i],e[i]!==this.options.classes[i]&&n&&n.length&&(s=t(n.get()),this._removeClass(n,i),s.addClass(this._classes({element:s,keys:i,classes:e,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(e){function i(i,o){var a,r;for(r=0;i.length>r;r++)a=n.classesElementLookup[i[r]]||t(),a=e.add?t(t.unique(a.get().concat(e.element.get()))):t(a.not(e.element).get()),n.classesElementLookup[i[r]]=a,s.push(i[r]),o&&e.classes[i[r]]&&s.push(e.classes[i[r]])}var s=[],n=this;return e=t.extend({element:this.element,classes:this.options.classes||{}},e),this._on(e.element,{remove:"_untrackClassesElement"}),e.keys&&i(e.keys.match(/\S+/g)||[],!0),e.extra&&i(e.extra.match(/\S+/g)||[]),s.join(" ")},_untrackClassesElement:function(e){var i=this;t.each(i.classesElementLookup,function(s,n){-1!==t.inArray(e.target,n)&&(i.classesElementLookup[s]=t(n.not(e.target).get()))})},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,s){s="boolean"==typeof s?s:i;var n="string"==typeof t||null===t,o={extra:n?e:i,keys:n?t:e,element:n?this.element:t,add:s};return o.element.toggleClass(this._classes(o),s),this},_on:function(e,i,s){var n,o=this;"boolean"!=typeof e&&(s=i,i=e,e=!1),s?(i=n=t(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),t.each(s,function(s,a){function r(){return e||o.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof a?o[a]:a).apply(o,arguments):void 0}"string"!=typeof a&&(r.guid=a.guid=a.guid||r.guid||t.guid++);var h=s.match(/^([\w:-]*)\s*(.*)$/),l=h[1]+o.eventNamespace,c=h[2];c?n.on(l,c,r):i.on(l,r)})},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.off(i).off(i),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){this._addClass(t(e.currentTarget),null,"ui-state-hover")},mouseleave:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){this._addClass(t(e.currentTarget),null,"ui-state-focus")},focusout:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-focus")}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!(t.isFunction(a)&&a.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){"string"==typeof n&&(n={effect:n});var a,r=n?n===!0||"number"==typeof n?i:n.effect||i:e;n=n||{},"number"==typeof n&&(n={duration:n}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue(function(i){t(this)[e](),o&&o.call(s[0]),i()})}}),t.widget,function(){function e(t,e,i){return[parseFloat(t[0])*(u.test(t[0])?e/100:1),parseFloat(t[1])*(u.test(t[1])?i/100:1)]}function i(e,i){return parseInt(t.css(e,i),10)||0}function s(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}var n,o=Math.max,a=Math.abs,r=/left|center|right/,h=/top|center|bottom/,l=/[\+\-]\d+(\.[\d]+)?%?/,c=/^\w+/,u=/%$/,d=t.fn.position;t.position={scrollbarWidth:function(){if(void 0!==n)return n;var e,i,s=t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=s.children()[0];return t("body").append(s),e=o.offsetWidth,s.css("overflow","scroll"),i=o.offsetWidth,e===i&&(i=s[0].clientWidth),s.remove(),n=e-i},getScrollInfo:function(e){var i=e.isWindow||e.isDocument?"":e.element.css("overflow-x"),s=e.isWindow||e.isDocument?"":e.element.css("overflow-y"),n="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth,o="scroll"===s||"auto"===s&&e.height<e.element[0].scrollHeight;return{width:o?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),s=t.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType,o=!s&&!n;return{element:i,isWindow:s,isDocument:n,offset:o?t(e).offset():{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:i.outerWidth(),height:i.outerHeight()}}},t.fn.position=function(n){if(!n||!n.of)return d.apply(this,arguments);n=t.extend({},n);var u,p,f,g,m,_,v=t(n.of),b=t.position.getWithinInfo(n.within),y=t.position.getScrollInfo(b),w=(n.collision||"flip").split(" "),k={};return _=s(v),v[0].preventDefault&&(n.at="left top"),p=_.width,f=_.height,g=_.offset,m=t.extend({},g),t.each(["my","at"],function(){var t,e,i=(n[this]||"").split(" ");1===i.length&&(i=r.test(i[0])?i.concat(["center"]):h.test(i[0])?["center"].concat(i):["center","center"]),i[0]=r.test(i[0])?i[0]:"center",i[1]=h.test(i[1])?i[1]:"center",t=l.exec(i[0]),e=l.exec(i[1]),k[this]=[t?t[0]:0,e?e[0]:0],n[this]=[c.exec(i[0])[0],c.exec(i[1])[0]]}),1===w.length&&(w[1]=w[0]),"right"===n.at[0]?m.left+=p:"center"===n.at[0]&&(m.left+=p/2),"bottom"===n.at[1]?m.top+=f:"center"===n.at[1]&&(m.top+=f/2),u=e(k.at,p,f),m.left+=u[0],m.top+=u[1],this.each(function(){var s,r,h=t(this),l=h.outerWidth(),c=h.outerHeight(),d=i(this,"marginLeft"),_=i(this,"marginTop"),x=l+d+i(this,"marginRight")+y.width,C=c+_+i(this,"marginBottom")+y.height,D=t.extend({},m),I=e(k.my,h.outerWidth(),h.outerHeight());"right"===n.my[0]?D.left-=l:"center"===n.my[0]&&(D.left-=l/2),"bottom"===n.my[1]?D.top-=c:"center"===n.my[1]&&(D.top-=c/2),D.left+=I[0],D.top+=I[1],s={marginLeft:d,marginTop:_},t.each(["left","top"],function(e,i){t.ui.position[w[e]]&&t.ui.position[w[e]][i](D,{targetWidth:p,targetHeight:f,elemWidth:l,elemHeight:c,collisionPosition:s,collisionWidth:x,collisionHeight:C,offset:[u[0]+I[0],u[1]+I[1]],my:n.my,at:n.at,within:b,elem:h})}),n.using&&(r=function(t){var e=g.left-D.left,i=e+p-l,s=g.top-D.top,r=s+f-c,u={target:{element:v,left:g.left,top:g.top,width:p,height:f},element:{element:h,left:D.left,top:D.top,width:l,height:c},horizontal:0>i?"left":e>0?"right":"center",vertical:0>r?"top":s>0?"bottom":"middle"};l>p&&p>a(e+i)&&(u.horizontal="center"),c>f&&f>a(s+r)&&(u.vertical="middle"),u.important=o(a(e),a(i))>o(a(s),a(r))?"horizontal":"vertical",n.using.call(this,t,u)}),h.offset(t.extend(D,{using:r}))})},t.ui.position={fit:{left:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=t.left-e.collisionPosition.marginLeft,h=n-r,l=r+e.collisionWidth-a-n;e.collisionWidth>a?h>0&&0>=l?(i=t.left+h+e.collisionWidth-a-n,t.left+=h-i):t.left=l>0&&0>=h?n:h>l?n+a-e.collisionWidth:n:h>0?t.left+=h:l>0?t.left-=l:t.left=o(t.left-r,t.left)},top:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollTop:s.offset.top,a=e.within.height,r=t.top-e.collisionPosition.marginTop,h=n-r,l=r+e.collisionHeight-a-n;e.collisionHeight>a?h>0&&0>=l?(i=t.top+h+e.collisionHeight-a-n,t.top+=h-i):t.top=l>0&&0>=h?n:h>l?n+a-e.collisionHeight:n:h>0?t.top+=h:l>0?t.top-=l:t.top=o(t.top-r,t.top)}},flip:{left:function(t,e){var i,s,n=e.within,o=n.offset.left+n.scrollLeft,r=n.width,h=n.isWindow?n.scrollLeft:n.offset.left,l=t.left-e.collisionPosition.marginLeft,c=l-h,u=l+e.collisionWidth-r-h,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];0>c?(i=t.left+d+p+f+e.collisionWidth-r-o,(0>i||a(c)>i)&&(t.left+=d+p+f)):u>0&&(s=t.left-e.collisionPosition.marginLeft+d+p+f-h,(s>0||u>a(s))&&(t.left+=d+p+f))},top:function(t,e){var i,s,n=e.within,o=n.offset.top+n.scrollTop,r=n.height,h=n.isWindow?n.scrollTop:n.offset.top,l=t.top-e.collisionPosition.marginTop,c=l-h,u=l+e.collisionHeight-r-h,d="top"===e.my[1],p=d?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,g=-2*e.offset[1];0>c?(s=t.top+p+f+g+e.collisionHeight-r-o,(0>s||a(c)>s)&&(t.top+=p+f+g)):u>0&&(i=t.top-e.collisionPosition.marginTop+p+f+g-h,(i>0||u>a(i))&&(t.top+=p+f+g))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}}}(),t.ui.position,t.extend(t.expr[":"],{data:t.expr.createPseudo?t.expr.createPseudo(function(e){return function(i){return!!t.data(i,e)}}):function(e,i,s){return!!t.data(e,s[3])}}),t.fn.extend({disableSelection:function(){var t="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.on(t+".ui-disableSelection",function(t){t.preventDefault()})}}(),enableSelection:function(){return this.off(".ui-disableSelection")}});var c="ui-effects-",u="ui-effects-style",d="ui-effects-animated",p=t;t.effects={effect:{}},function(t,e){function i(t,e,i){var s=u[e.type]||{};return null==t?i||!e.def?null:e.def:(t=s.floor?~~t:parseFloat(t),isNaN(t)?e.def:s.mod?(t+s.mod)%s.mod:0>t?0:t>s.max?s.max:t)}function s(i){var s=l(),n=s._rgba=[];return i=i.toLowerCase(),f(h,function(t,o){var a,r=o.re.exec(i),h=r&&o.parse(r),l=o.space||"rgba";return h?(a=s[l](h),s[c[l].cache]=a[c[l].cache],n=s._rgba=a._rgba,!1):e}),n.length?("0,0,0,0"===n.join()&&t.extend(n,o.transparent),s):o[i]}function n(t,e,i){return i=(i+1)%1,1>6*i?t+6*(e-t)*i:1>2*i?e:2>3*i?t+6*(e-t)*(2/3-i):t}var o,a="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",r=/^([\-+])=\s*(\d+\.?\d*)/,h=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]}}],l=t.Color=function(e,i,s,n){return new t.Color.fn.parse(e,i,s,n)},c={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},u={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},d=l.support={},p=t("<p>")[0],f=t.each;p.style.cssText="background-color:rgba(1,1,1,.5)",d.rgba=p.style.backgroundColor.indexOf("rgba")>-1,f(c,function(t,e){e.cache="_"+t,e.props.alpha={idx:3,type:"percent",def:1}}),l.fn=t.extend(l.prototype,{parse:function(n,a,r,h){if(n===e)return this._rgba=[null,null,null,null],this;(n.jquery||n.nodeType)&&(n=t(n).css(a),a=e);var u=this,d=t.type(n),p=this._rgba=[];return a!==e&&(n=[n,a,r,h],d="array"),"string"===d?this.parse(s(n)||o._default):"array"===d?(f(c.rgba.props,function(t,e){p[e.idx]=i(n[e.idx],e)}),this):"object"===d?(n instanceof l?f(c,function(t,e){n[e.cache]&&(u[e.cache]=n[e.cache].slice())}):f(c,function(e,s){var o=s.cache;f(s.props,function(t,e){if(!u[o]&&s.to){if("alpha"===t||null==n[t])return;u[o]=s.to(u._rgba)}u[o][e.idx]=i(n[t],e,!0)}),u[o]&&0>t.inArray(null,u[o].slice(0,3))&&(u[o][3]=1,s.from&&(u._rgba=s.from(u[o])))}),this):e},is:function(t){var i=l(t),s=!0,n=this;return f(c,function(t,o){var a,r=i[o.cache];return r&&(a=n[o.cache]||o.to&&o.to(n._rgba)||[],f(o.props,function(t,i){return null!=r[i.idx]?s=r[i.idx]===a[i.idx]:e})),s}),s},_space:function(){var t=[],e=this;return f(c,function(i,s){e[s.cache]&&t.push(i)}),t.pop()},transition:function(t,e){var s=l(t),n=s._space(),o=c[n],a=0===this.alpha()?l("transparent"):this,r=a[o.cache]||o.to(a._rgba),h=r.slice();return s=s[o.cache],f(o.props,function(t,n){var o=n.idx,a=r[o],l=s[o],c=u[n.type]||{};null!==l&&(null===a?h[o]=l:(c.mod&&(l-a>c.mod/2?a+=c.mod:a-l>c.mod/2&&(a-=c.mod)),h[o]=i((l-a)*e+a,n)))}),this[n](h)},blend:function(e){if(1===this._rgba[3])return this;var i=this._rgba.slice(),s=i.pop(),n=l(e)._rgba;return l(t.map(i,function(t,e){return(1-s)*n[e]+s*t}))},toRgbaString:function(){var e="rgba(",i=t.map(this._rgba,function(t,e){return null==t?e>2?1:0:t});return 1===i[3]&&(i.pop(),e="rgb("),e+i.join()+")"},toHslaString:function(){var e="hsla(",i=t.map(this.hsla(),function(t,e){return null==t&&(t=e>2?1:0),e&&3>e&&(t=Math.round(100*t)+"%"),t});return 1===i[3]&&(i.pop(),e="hsl("),e+i.join()+")"},toHexString:function(e){var i=this._rgba.slice(),s=i.pop();return e&&i.push(~~(255*s)),"#"+t.map(i,function(t){return t=(t||0).toString(16),1===t.length?"0"+t:t}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),l.fn.parse.prototype=l.fn,c.hsla.to=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e,i,s=t[0]/255,n=t[1]/255,o=t[2]/255,a=t[3],r=Math.max(s,n,o),h=Math.min(s,n,o),l=r-h,c=r+h,u=.5*c;return e=h===r?0:s===r?60*(n-o)/l+360:n===r?60*(o-s)/l+120:60*(s-n)/l+240,i=0===l?0:.5>=u?l/c:l/(2-c),[Math.round(e)%360,i,u,null==a?1:a]},c.hsla.from=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e=t[0]/360,i=t[1],s=t[2],o=t[3],a=.5>=s?s*(1+i):s+i-s*i,r=2*s-a;return[Math.round(255*n(r,a,e+1/3)),Math.round(255*n(r,a,e)),Math.round(255*n(r,a,e-1/3)),o]},f(c,function(s,n){var o=n.props,a=n.cache,h=n.to,c=n.from;l.fn[s]=function(s){if(h&&!this[a]&&(this[a]=h(this._rgba)),s===e)return this[a].slice();var n,r=t.type(s),u="array"===r||"object"===r?s:arguments,d=this[a].slice();return f(o,function(t,e){var s=u["object"===r?t:e.idx];null==s&&(s=d[e.idx]),d[e.idx]=i(s,e)}),c?(n=l(c(d)),n[a]=d,n):l(d)},f(o,function(e,i){l.fn[e]||(l.fn[e]=function(n){var o,a=t.type(n),h="alpha"===e?this._hsla?"hsla":"rgba":s,l=this[h](),c=l[i.idx];return"undefined"===a?c:("function"===a&&(n=n.call(this,c),a=t.type(n)),null==n&&i.empty?this:("string"===a&&(o=r.exec(n),o&&(n=c+parseFloat(o[2])*("+"===o[1]?1:-1))),l[i.idx]=n,this[h](l)))})})}),l.hook=function(e){var i=e.split(" ");f(i,function(e,i){t.cssHooks[i]={set:function(e,n){var o,a,r="";if("transparent"!==n&&("string"!==t.type(n)||(o=s(n)))){if(n=l(o||n),!d.rgba&&1!==n._rgba[3]){for(a="backgroundColor"===i?e.parentNode:e;(""===r||"transparent"===r)&&a&&a.style;)try{r=t.css(a,"backgroundColor"),a=a.parentNode}catch(h){}n=n.blend(r&&"transparent"!==r?r:"_default")}n=n.toRgbaString()}try{e.style[i]=n}catch(h){}}},t.fx.step[i]=function(e){e.colorInit||(e.start=l(e.elem,i),e.end=l(e.end),e.colorInit=!0),t.cssHooks[i].set(e.elem,e.start.transition(e.end,e.pos))}})},l.hook(a),t.cssHooks.borderColor={expand:function(t){var e={};return f(["Top","Right","Bottom","Left"],function(i,s){e["border"+s+"Color"]=t}),e}},o=t.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(p),function(){function e(e){var i,s,n=e.ownerDocument.defaultView?e.ownerDocument.defaultView.getComputedStyle(e,null):e.currentStyle,o={};if(n&&n.length&&n[0]&&n[n[0]])for(s=n.length;s--;)i=n[s],"string"==typeof n[i]&&(o[t.camelCase(i)]=n[i]);else for(i in n)"string"==typeof n[i]&&(o[i]=n[i]);return o}function i(e,i){var s,o,a={};for(s in i)o=i[s],e[s]!==o&&(n[s]||(t.fx.step[s]||!isNaN(parseFloat(o)))&&(a[s]=o));return a}var s=["add","remove","toggle"],n={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};t.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(e,i){t.fx.step[i]=function(t){("none"!==t.end&&!t.setAttr||1===t.pos&&!t.setAttr)&&(p.style(t.elem,i,t.end),t.setAttr=!0)}}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.effects.animateClass=function(n,o,a,r){var h=t.speed(o,a,r);return this.queue(function(){var o,a=t(this),r=a.attr("class")||"",l=h.children?a.find("*").addBack():a;l=l.map(function(){var i=t(this);return{el:i,start:e(this)}}),o=function(){t.each(s,function(t,e){n[e]&&a[e+"Class"](n[e])})},o(),l=l.map(function(){return this.end=e(this.el[0]),this.diff=i(this.start,this.end),this}),a.attr("class",r),l=l.map(function(){var e=this,i=t.Deferred(),s=t.extend({},h,{queue:!1,complete:function(){i.resolve(e)}});return this.el.animate(this.diff,s),i.promise()}),t.when.apply(t,l.get()).done(function(){o(),t.each(arguments,function(){var e=this.el;t.each(this.diff,function(t){e.css(t,"")})}),h.complete.call(a[0])})})},t.fn.extend({addClass:function(e){return function(i,s,n,o){return s?t.effects.animateClass.call(this,{add:i},s,n,o):e.apply(this,arguments)}}(t.fn.addClass),removeClass:function(e){return function(i,s,n,o){return arguments.length>1?t.effects.animateClass.call(this,{remove:i},s,n,o):e.apply(this,arguments)}}(t.fn.removeClass),toggleClass:function(e){return function(i,s,n,o,a){return"boolean"==typeof s||void 0===s?n?t.effects.animateClass.call(this,s?{add:i}:{remove:i},n,o,a):e.apply(this,arguments):t.effects.animateClass.call(this,{toggle:i},s,n,o)}}(t.fn.toggleClass),switchClass:function(e,i,s,n,o){return t.effects.animateClass.call(this,{add:i,remove:e},s,n,o)}})}(),function(){function e(e,i,s,n){return t.isPlainObject(e)&&(i=e,e=e.effect),e={effect:e},null==i&&(i={}),t.isFunction(i)&&(n=i,s=null,i={}),("number"==typeof i||t.fx.speeds[i])&&(n=s,s=i,i={}),t.isFunction(s)&&(n=s,s=null),i&&t.extend(e,i),s=s||i.duration,e.duration=t.fx.off?0:"number"==typeof s?s:s in t.fx.speeds?t.fx.speeds[s]:t.fx.speeds._default,e.complete=n||i.complete,e}function i(e){return!e||"number"==typeof e||t.fx.speeds[e]?!0:"string"!=typeof e||t.effects.effect[e]?t.isFunction(e)?!0:"object"!=typeof e||e.effect?!1:!0:!0}function s(t,e){var i=e.outerWidth(),s=e.outerHeight(),n=/^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,o=n.exec(t)||["",0,i,s,0];return{top:parseFloat(o[1])||0,right:"auto"===o[2]?i:parseFloat(o[2]),bottom:"auto"===o[3]?s:parseFloat(o[3]),left:parseFloat(o[4])||0}}t.expr&&t.expr.filters&&t.expr.filters.animated&&(t.expr.filters.animated=function(e){return function(i){return!!t(i).data(d)||e(i)}}(t.expr.filters.animated)),t.uiBackCompat!==!1&&t.extend(t.effects,{save:function(t,e){for(var i=0,s=e.length;s>i;i++)null!==e[i]&&t.data(c+e[i],t[0].style[e[i]])},restore:function(t,e){for(var i,s=0,n=e.length;n>s;s++)null!==e[s]&&(i=t.data(c+e[s]),t.css(e[s],i))},setMode:function(t,e){return"toggle"===e&&(e=t.is(":hidden")?"show":"hide"),e},createWrapper:function(e){if(e.parent().is(".ui-effects-wrapper"))return e.parent();var i={width:e.outerWidth(!0),height:e.outerHeight(!0),"float":e.css("float")},s=t("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),n={width:e.width(),height:e.height()},o=document.activeElement;try{o.id}catch(a){o=document.body}return e.wrap(s),(e[0]===o||t.contains(e[0],o))&&t(o).trigger("focus"),s=e.parent(),"static"===e.css("position")?(s.css({position:"relative"}),e.css({position:"relative"})):(t.extend(i,{position:e.css("position"),zIndex:e.css("z-index")}),t.each(["top","left","bottom","right"],function(t,s){i[s]=e.css(s),isNaN(parseInt(i[s],10))&&(i[s]="auto")}),e.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),e.css(n),s.css(i).show()},removeWrapper:function(e){var i=document.activeElement;return e.parent().is(".ui-effects-wrapper")&&(e.parent().replaceWith(e),(e[0]===i||t.contains(e[0],i))&&t(i).trigger("focus")),e}}),t.extend(t.effects,{version:"1.12.1",define:function(e,i,s){return s||(s=i,i="effect"),t.effects.effect[e]=s,t.effects.effect[e].mode=i,s},scaledDimensions:function(t,e,i){if(0===e)return{height:0,width:0,outerHeight:0,outerWidth:0};var s="horizontal"!==i?(e||100)/100:1,n="vertical"!==i?(e||100)/100:1;return{height:t.height()*n,width:t.width()*s,outerHeight:t.outerHeight()*n,outerWidth:t.outerWidth()*s}},clipToBox:function(t){return{width:t.clip.right-t.clip.left,height:t.clip.bottom-t.clip.top,left:t.clip.left,top:t.clip.top}},unshift:function(t,e,i){var s=t.queue();e>1&&s.splice.apply(s,[1,0].concat(s.splice(e,i))),t.dequeue()},saveStyle:function(t){t.data(u,t[0].style.cssText)},restoreStyle:function(t){t[0].style.cssText=t.data(u)||"",t.removeData(u)},mode:function(t,e){var i=t.is(":hidden");return"toggle"===e&&(e=i?"show":"hide"),(i?"hide"===e:"show"===e)&&(e="none"),e},getBaseline:function(t,e){var i,s;switch(t[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=t[0]/e.height}switch(t[1]){case"left":s=0;break;case"center":s=.5;break;case"right":s=1;break;default:s=t[1]/e.width}return{x:s,y:i}},createPlaceholder:function(e){var i,s=e.css("position"),n=e.position();return e.css({marginTop:e.css("marginTop"),marginBottom:e.css("marginBottom"),marginLeft:e.css("marginLeft"),marginRight:e.css("marginRight")}).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()),/^(static|relative)/.test(s)&&(s="absolute",i=t("<"+e[0].nodeName+">").insertAfter(e).css({display:/^(inline|ruby)/.test(e.css("display"))?"inline-block":"block",visibility:"hidden",marginTop:e.css("marginTop"),marginBottom:e.css("marginBottom"),marginLeft:e.css("marginLeft"),marginRight:e.css("marginRight"),"float":e.css("float")}).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).addClass("ui-effects-placeholder"),e.data(c+"placeholder",i)),e.css({position:s,left:n.left,top:n.top}),i},removePlaceholder:function(t){var e=c+"placeholder",i=t.data(e);i&&(i.remove(),t.removeData(e))},cleanUp:function(e){t.effects.restoreStyle(e),t.effects.removePlaceholder(e)},setTransition:function(e,i,s,n){return n=n||{},t.each(i,function(t,i){var o=e.cssUnit(i);o[0]>0&&(n[i]=o[0]*s+o[1])}),n}}),t.fn.extend({effect:function(){function i(e){function i(){r.removeData(d),t.effects.cleanUp(r),"hide"===s.mode&&r.hide(),a()}function a(){t.isFunction(h)&&h.call(r[0]),t.isFunction(e)&&e()}var r=t(this);s.mode=c.shift(),t.uiBackCompat===!1||o?"none"===s.mode?(r[l](),a()):n.call(r[0],s,i):(r.is(":hidden")?"hide"===l:"show"===l)?(r[l](),a()):n.call(r[0],s,a)}var s=e.apply(this,arguments),n=t.effects.effect[s.effect],o=n.mode,a=s.queue,r=a||"fx",h=s.complete,l=s.mode,c=[],u=function(e){var i=t(this),s=t.effects.mode(i,l)||o;i.data(d,!0),c.push(s),o&&("show"===s||s===o&&"hide"===s)&&i.show(),o&&"none"===s||t.effects.saveStyle(i),t.isFunction(e)&&e()};return t.fx.off||!n?l?this[l](s.duration,h):this.each(function(){h&&h.call(this)}):a===!1?this.each(u).each(i):this.queue(r,u).queue(r,i)},show:function(t){return function(s){if(i(s))return t.apply(this,arguments);var n=e.apply(this,arguments);return n.mode="show",this.effect.call(this,n)
}}(t.fn.show),hide:function(t){return function(s){if(i(s))return t.apply(this,arguments);var n=e.apply(this,arguments);return n.mode="hide",this.effect.call(this,n)}}(t.fn.hide),toggle:function(t){return function(s){if(i(s)||"boolean"==typeof s)return t.apply(this,arguments);var n=e.apply(this,arguments);return n.mode="toggle",this.effect.call(this,n)}}(t.fn.toggle),cssUnit:function(e){var i=this.css(e),s=[];return t.each(["em","px","%","pt"],function(t,e){i.indexOf(e)>0&&(s=[parseFloat(i),e])}),s},cssClip:function(t){return t?this.css("clip","rect("+t.top+"px "+t.right+"px "+t.bottom+"px "+t.left+"px)"):s(this.css("clip"),this)},transfer:function(e,i){var s=t(this),n=t(e.to),o="fixed"===n.css("position"),a=t("body"),r=o?a.scrollTop():0,h=o?a.scrollLeft():0,l=n.offset(),c={top:l.top-r,left:l.left-h,height:n.innerHeight(),width:n.innerWidth()},u=s.offset(),d=t("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(e.className).css({top:u.top-r,left:u.left-h,height:s.innerHeight(),width:s.innerWidth(),position:o?"fixed":"absolute"}).animate(c,e.duration,e.easing,function(){d.remove(),t.isFunction(i)&&i()})}}),t.fx.step.clip=function(e){e.clipInit||(e.start=t(e.elem).cssClip(),"string"==typeof e.end&&(e.end=s(e.end,e.elem)),e.clipInit=!0),t(e.elem).cssClip({top:e.pos*(e.end.top-e.start.top)+e.start.top,right:e.pos*(e.end.right-e.start.right)+e.start.right,bottom:e.pos*(e.end.bottom-e.start.bottom)+e.start.bottom,left:e.pos*(e.end.left-e.start.left)+e.start.left})}}(),function(){var e={};t.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,i){e[i]=function(e){return Math.pow(e,t+2)}}),t.extend(e,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,i=4;((e=Math.pow(2,--i))-1)/11>t;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*e-2)/22-t,2)}}),t.each(e,function(e,i){t.easing["easeIn"+e]=i,t.easing["easeOut"+e]=function(t){return 1-i(1-t)},t.easing["easeInOut"+e]=function(t){return.5>t?i(2*t)/2:1-i(-2*t+2)/2}})}();var f=t.effects;t.effects.define("blind","hide",function(e,i){var s={up:["bottom","top"],vertical:["bottom","top"],down:["top","bottom"],left:["right","left"],horizontal:["right","left"],right:["left","right"]},n=t(this),o=e.direction||"up",a=n.cssClip(),r={clip:t.extend({},a)},h=t.effects.createPlaceholder(n);r.clip[s[o][0]]=r.clip[s[o][1]],"show"===e.mode&&(n.cssClip(r.clip),h&&h.css(t.effects.clipToBox(r)),r.clip=a),h&&h.animate(t.effects.clipToBox(r),e.duration,e.easing),n.animate(r,{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("bounce",function(e,i){var s,n,o,a=t(this),r=e.mode,h="hide"===r,l="show"===r,c=e.direction||"up",u=e.distance,d=e.times||5,p=2*d+(l||h?1:0),f=e.duration/p,g=e.easing,m="up"===c||"down"===c?"top":"left",_="up"===c||"left"===c,v=0,b=a.queue().length;for(t.effects.createPlaceholder(a),o=a.css(m),u||(u=a["top"===m?"outerHeight":"outerWidth"]()/3),l&&(n={opacity:1},n[m]=o,a.css("opacity",0).css(m,_?2*-u:2*u).animate(n,f,g)),h&&(u/=Math.pow(2,d-1)),n={},n[m]=o;d>v;v++)s={},s[m]=(_?"-=":"+=")+u,a.animate(s,f,g).animate(n,f,g),u=h?2*u:u/2;h&&(s={opacity:0},s[m]=(_?"-=":"+=")+u,a.animate(s,f,g)),a.queue(i),t.effects.unshift(a,b,p+1)}),t.effects.define("clip","hide",function(e,i){var s,n={},o=t(this),a=e.direction||"vertical",r="both"===a,h=r||"horizontal"===a,l=r||"vertical"===a;s=o.cssClip(),n.clip={top:l?(s.bottom-s.top)/2:s.top,right:h?(s.right-s.left)/2:s.right,bottom:l?(s.bottom-s.top)/2:s.bottom,left:h?(s.right-s.left)/2:s.left},t.effects.createPlaceholder(o),"show"===e.mode&&(o.cssClip(n.clip),n.clip=s),o.animate(n,{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("drop","hide",function(e,i){var s,n=t(this),o=e.mode,a="show"===o,r=e.direction||"left",h="up"===r||"down"===r?"top":"left",l="up"===r||"left"===r?"-=":"+=",c="+="===l?"-=":"+=",u={opacity:0};t.effects.createPlaceholder(n),s=e.distance||n["top"===h?"outerHeight":"outerWidth"](!0)/2,u[h]=l+s,a&&(n.css(u),u[h]=c+s,u.opacity=1),n.animate(u,{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("explode","hide",function(e,i){function s(){b.push(this),b.length===u*d&&n()}function n(){p.css({visibility:"visible"}),t(b).remove(),i()}var o,a,r,h,l,c,u=e.pieces?Math.round(Math.sqrt(e.pieces)):3,d=u,p=t(this),f=e.mode,g="show"===f,m=p.show().css("visibility","hidden").offset(),_=Math.ceil(p.outerWidth()/d),v=Math.ceil(p.outerHeight()/u),b=[];for(o=0;u>o;o++)for(h=m.top+o*v,c=o-(u-1)/2,a=0;d>a;a++)r=m.left+a*_,l=a-(d-1)/2,p.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-a*_,top:-o*v}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:_,height:v,left:r+(g?l*_:0),top:h+(g?c*v:0),opacity:g?0:1}).animate({left:r+(g?0:l*_),top:h+(g?0:c*v),opacity:g?1:0},e.duration||500,e.easing,s)}),t.effects.define("fade","toggle",function(e,i){var s="show"===e.mode;t(this).css("opacity",s?0:1).animate({opacity:s?1:0},{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("fold","hide",function(e,i){var s=t(this),n=e.mode,o="show"===n,a="hide"===n,r=e.size||15,h=/([0-9]+)%/.exec(r),l=!!e.horizFirst,c=l?["right","bottom"]:["bottom","right"],u=e.duration/2,d=t.effects.createPlaceholder(s),p=s.cssClip(),f={clip:t.extend({},p)},g={clip:t.extend({},p)},m=[p[c[0]],p[c[1]]],_=s.queue().length;h&&(r=parseInt(h[1],10)/100*m[a?0:1]),f.clip[c[0]]=r,g.clip[c[0]]=r,g.clip[c[1]]=0,o&&(s.cssClip(g.clip),d&&d.css(t.effects.clipToBox(g)),g.clip=p),s.queue(function(i){d&&d.animate(t.effects.clipToBox(f),u,e.easing).animate(t.effects.clipToBox(g),u,e.easing),i()}).animate(f,u,e.easing).animate(g,u,e.easing).queue(i),t.effects.unshift(s,_,4)}),t.effects.define("highlight","show",function(e,i){var s=t(this),n={backgroundColor:s.css("backgroundColor")};"hide"===e.mode&&(n.opacity=0),t.effects.saveStyle(s),s.css({backgroundImage:"none",backgroundColor:e.color||"#ffff99"}).animate(n,{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("size",function(e,i){var s,n,o,a=t(this),r=["fontSize"],h=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],l=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],c=e.mode,u="effect"!==c,d=e.scale||"both",p=e.origin||["middle","center"],f=a.css("position"),g=a.position(),m=t.effects.scaledDimensions(a),_=e.from||m,v=e.to||t.effects.scaledDimensions(a,0);t.effects.createPlaceholder(a),"show"===c&&(o=_,_=v,v=o),n={from:{y:_.height/m.height,x:_.width/m.width},to:{y:v.height/m.height,x:v.width/m.width}},("box"===d||"both"===d)&&(n.from.y!==n.to.y&&(_=t.effects.setTransition(a,h,n.from.y,_),v=t.effects.setTransition(a,h,n.to.y,v)),n.from.x!==n.to.x&&(_=t.effects.setTransition(a,l,n.from.x,_),v=t.effects.setTransition(a,l,n.to.x,v))),("content"===d||"both"===d)&&n.from.y!==n.to.y&&(_=t.effects.setTransition(a,r,n.from.y,_),v=t.effects.setTransition(a,r,n.to.y,v)),p&&(s=t.effects.getBaseline(p,m),_.top=(m.outerHeight-_.outerHeight)*s.y+g.top,_.left=(m.outerWidth-_.outerWidth)*s.x+g.left,v.top=(m.outerHeight-v.outerHeight)*s.y+g.top,v.left=(m.outerWidth-v.outerWidth)*s.x+g.left),a.css(_),("content"===d||"both"===d)&&(h=h.concat(["marginTop","marginBottom"]).concat(r),l=l.concat(["marginLeft","marginRight"]),a.find("*[width]").each(function(){var i=t(this),s=t.effects.scaledDimensions(i),o={height:s.height*n.from.y,width:s.width*n.from.x,outerHeight:s.outerHeight*n.from.y,outerWidth:s.outerWidth*n.from.x},a={height:s.height*n.to.y,width:s.width*n.to.x,outerHeight:s.height*n.to.y,outerWidth:s.width*n.to.x};n.from.y!==n.to.y&&(o=t.effects.setTransition(i,h,n.from.y,o),a=t.effects.setTransition(i,h,n.to.y,a)),n.from.x!==n.to.x&&(o=t.effects.setTransition(i,l,n.from.x,o),a=t.effects.setTransition(i,l,n.to.x,a)),u&&t.effects.saveStyle(i),i.css(o),i.animate(a,e.duration,e.easing,function(){u&&t.effects.restoreStyle(i)})})),a.animate(v,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){var e=a.offset();0===v.opacity&&a.css("opacity",_.opacity),u||(a.css("position","static"===f?"relative":f).offset(e),t.effects.saveStyle(a)),i()}})}),t.effects.define("scale",function(e,i){var s=t(this),n=e.mode,o=parseInt(e.percent,10)||(0===parseInt(e.percent,10)?0:"effect"!==n?0:100),a=t.extend(!0,{from:t.effects.scaledDimensions(s),to:t.effects.scaledDimensions(s,o,e.direction||"both"),origin:e.origin||["middle","center"]},e);e.fade&&(a.from.opacity=1,a.to.opacity=0),t.effects.effect.size.call(this,a,i)}),t.effects.define("puff","hide",function(e,i){var s=t.extend(!0,{},e,{fade:!0,percent:parseInt(e.percent,10)||150});t.effects.effect.scale.call(this,s,i)}),t.effects.define("pulsate","show",function(e,i){var s=t(this),n=e.mode,o="show"===n,a="hide"===n,r=o||a,h=2*(e.times||5)+(r?1:0),l=e.duration/h,c=0,u=1,d=s.queue().length;for((o||!s.is(":visible"))&&(s.css("opacity",0).show(),c=1);h>u;u++)s.animate({opacity:c},l,e.easing),c=1-c;s.animate({opacity:c},l,e.easing),s.queue(i),t.effects.unshift(s,d,h+1)}),t.effects.define("shake",function(e,i){var s=1,n=t(this),o=e.direction||"left",a=e.distance||20,r=e.times||3,h=2*r+1,l=Math.round(e.duration/h),c="up"===o||"down"===o?"top":"left",u="up"===o||"left"===o,d={},p={},f={},g=n.queue().length;for(t.effects.createPlaceholder(n),d[c]=(u?"-=":"+=")+a,p[c]=(u?"+=":"-=")+2*a,f[c]=(u?"-=":"+=")+2*a,n.animate(d,l,e.easing);r>s;s++)n.animate(p,l,e.easing).animate(f,l,e.easing);n.animate(p,l,e.easing).animate(d,l/2,e.easing).queue(i),t.effects.unshift(n,g,h+1)}),t.effects.define("slide","show",function(e,i){var s,n,o=t(this),a={up:["bottom","top"],down:["top","bottom"],left:["right","left"],right:["left","right"]},r=e.mode,h=e.direction||"left",l="up"===h||"down"===h?"top":"left",c="up"===h||"left"===h,u=e.distance||o["top"===l?"outerHeight":"outerWidth"](!0),d={};t.effects.createPlaceholder(o),s=o.cssClip(),n=o.position()[l],d[l]=(c?-1:1)*u+n,d.clip=o.cssClip(),d.clip[a[h][1]]=d.clip[a[h][0]],"show"===r&&(o.cssClip(d.clip),o.css(l,d[l]),d.clip=s,d[l]=n),o.animate(d,{queue:!1,duration:e.duration,easing:e.easing,complete:i})});var f;t.uiBackCompat!==!1&&(f=t.effects.define("transfer",function(e,i){t(this).transfer(e,i)})),t.ui.focusable=function(i,s){var n,o,a,r,h,l=i.nodeName.toLowerCase();return"area"===l?(n=i.parentNode,o=n.name,i.href&&o&&"map"===n.nodeName.toLowerCase()?(a=t("img[usemap='#"+o+"']"),a.length>0&&a.is(":visible")):!1):(/^(input|select|textarea|button|object)$/.test(l)?(r=!i.disabled,r&&(h=t(i).closest("fieldset")[0],h&&(r=!h.disabled))):r="a"===l?i.href||s:s,r&&t(i).is(":visible")&&e(t(i)))},t.extend(t.expr[":"],{focusable:function(e){return t.ui.focusable(e,null!=t.attr(e,"tabindex"))}}),t.ui.focusable,t.fn.form=function(){return"string"==typeof this[0].form?this.closest("form"):t(this[0].form)},t.ui.formResetMixin={_formResetHandler:function(){var e=t(this);setTimeout(function(){var i=e.data("ui-form-reset-instances");t.each(i,function(){this.refresh()})})},_bindFormResetHandler:function(){if(this.form=this.element.form(),this.form.length){var t=this.form.data("ui-form-reset-instances")||[];t.length||this.form.on("reset.ui-form-reset",this._formResetHandler),t.push(this),this.form.data("ui-form-reset-instances",t)}},_unbindFormResetHandler:function(){if(this.form.length){var e=this.form.data("ui-form-reset-instances");e.splice(t.inArray(this,e),1),e.length?this.form.data("ui-form-reset-instances",e):this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")}}},"1.7"===t.fn.jquery.substring(0,3)&&(t.each(["Width","Height"],function(e,i){function s(e,i,s,o){return t.each(n,function(){i-=parseFloat(t.css(e,"padding"+this))||0,s&&(i-=parseFloat(t.css(e,"border"+this+"Width"))||0),o&&(i-=parseFloat(t.css(e,"margin"+this))||0)}),i}var n="Width"===i?["Left","Right"]:["Top","Bottom"],o=i.toLowerCase(),a={innerWidth:t.fn.innerWidth,innerHeight:t.fn.innerHeight,outerWidth:t.fn.outerWidth,outerHeight:t.fn.outerHeight};t.fn["inner"+i]=function(e){return void 0===e?a["inner"+i].call(this):this.each(function(){t(this).css(o,s(this,e)+"px")})},t.fn["outer"+i]=function(e,n){return"number"!=typeof e?a["outer"+i].call(this,e):this.each(function(){t(this).css(o,s(this,e,!0,n)+"px")})}}),t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},t.ui.escapeSelector=function(){var t=/([!"#$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g;return function(e){return e.replace(t,"\\$1")}}(),t.fn.labels=function(){var e,i,s,n,o;return this[0].labels&&this[0].labels.length?this.pushStack(this[0].labels):(n=this.eq(0).parents("label"),s=this.attr("id"),s&&(e=this.eq(0).parents().last(),o=e.add(e.length?e.siblings():this.siblings()),i="label[for='"+t.ui.escapeSelector(s)+"']",n=n.add(o.find(i).addBack(i))),this.pushStack(n))},t.fn.scrollParent=function(e){var i=this.css("position"),s="absolute"===i,n=e?/(auto|scroll|hidden)/:/(auto|scroll)/,o=this.parents().filter(function(){var e=t(this);return s&&"static"===e.css("position")?!1:n.test(e.css("overflow")+e.css("overflow-y")+e.css("overflow-x"))}).eq(0);return"fixed"!==i&&o.length?o:t(this[0].ownerDocument||document)},t.extend(t.expr[":"],{tabbable:function(e){var i=t.attr(e,"tabindex"),s=null!=i;return(!s||i>=0)&&t.ui.focusable(e,s)}}),t.fn.extend({uniqueId:function(){var t=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++t)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&t(this).removeAttr("id")})}}),t.widget("ui.accordion",{version:"1.12.1",options:{active:0,animate:{},classes:{"ui-accordion-header":"ui-corner-top","ui-accordion-header-collapsed":"ui-corner-all","ui-accordion-content":"ui-corner-bottom"},collapsible:!1,event:"click",header:"> li > :first-child, > :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},hideProps:{borderTopWidth:"hide",borderBottomWidth:"hide",paddingTop:"hide",paddingBottom:"hide",height:"hide"},showProps:{borderTopWidth:"show",borderBottomWidth:"show",paddingTop:"show",paddingBottom:"show",height:"show"},_create:function(){var e=this.options;this.prevShow=this.prevHide=t(),this._addClass("ui-accordion","ui-widget ui-helper-reset"),this.element.attr("role","tablist"),e.collapsible||e.active!==!1&&null!=e.active||(e.active=0),this._processPanels(),0>e.active&&(e.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():t()}},_createIcons:function(){var e,i,s=this.options.icons;s&&(e=t("<span>"),this._addClass(e,"ui-accordion-header-icon","ui-icon "+s.header),e.prependTo(this.headers),i=this.active.children(".ui-accordion-header-icon"),this._removeClass(i,s.header)._addClass(i,null,s.activeHeader)._addClass(this.headers,"ui-accordion-icons"))},_destroyIcons:function(){this._removeClass(this.headers,"ui-accordion-icons"),this.headers.children(".ui-accordion-header-icon").remove()},_destroy:function(){var t;this.element.removeAttr("role"),this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(),this._destroyIcons(),t=this.headers.next().css("display","").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(),"content"!==this.options.heightStyle&&t.css("height","")},_setOption:function(t,e){return"active"===t?(this._activate(e),void 0):("event"===t&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(e)),this._super(t,e),"collapsible"!==t||e||this.options.active!==!1||this._activate(0),"icons"===t&&(this._destroyIcons(),e&&this._createIcons()),void 0)},_setOptionDisabled:function(t){this._super(t),this.element.attr("aria-disabled",t),this._toggleClass(null,"ui-state-disabled",!!t),this._toggleClass(this.headers.add(this.headers.next()),null,"ui-state-disabled",!!t)},_keydown:function(e){if(!e.altKey&&!e.ctrlKey){var i=t.ui.keyCode,s=this.headers.length,n=this.headers.index(e.target),o=!1;switch(e.keyCode){case i.RIGHT:case i.DOWN:o=this.headers[(n+1)%s];break;case i.LEFT:case i.UP:o=this.headers[(n-1+s)%s];break;case i.SPACE:case i.ENTER:this._eventHandler(e);break;case i.HOME:o=this.headers[0];break;case i.END:o=this.headers[s-1]}o&&(t(e.target).attr("tabIndex",-1),t(o).attr("tabIndex",0),t(o).trigger("focus"),e.preventDefault())}},_panelKeyDown:function(e){e.keyCode===t.ui.keyCode.UP&&e.ctrlKey&&t(e.currentTarget).prev().trigger("focus")},refresh:function(){var e=this.options;this._processPanels(),e.active===!1&&e.collapsible===!0||!this.headers.length?(e.active=!1,this.active=t()):e.active===!1?this._activate(0):this.active.length&&!t.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(e.active=!1,this.active=t()):this._activate(Math.max(0,e.active-1)):e.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){var t=this.headers,e=this.panels;this.headers=this.element.find(this.options.header),this._addClass(this.headers,"ui-accordion-header ui-accordion-header-collapsed","ui-state-default"),this.panels=this.headers.next().filter(":not(.ui-accordion-content-active)").hide(),this._addClass(this.panels,"ui-accordion-content","ui-helper-reset ui-widget-content"),e&&(this._off(t.not(this.headers)),this._off(e.not(this.panels)))},_refresh:function(){var e,i=this.options,s=i.heightStyle,n=this.element.parent();this.active=this._findActive(i.active),this._addClass(this.active,"ui-accordion-header-active","ui-state-active")._removeClass(this.active,"ui-accordion-header-collapsed"),this._addClass(this.active.next(),"ui-accordion-content-active"),this.active.next().show(),this.headers.attr("role","tab").each(function(){var e=t(this),i=e.uniqueId().attr("id"),s=e.next(),n=s.uniqueId().attr("id");e.attr("aria-controls",n),s.attr("aria-labelledby",i)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(i.event),"fill"===s?(e=n.height(),this.element.siblings(":visible").each(function(){var i=t(this),s=i.css("position");"absolute"!==s&&"fixed"!==s&&(e-=i.outerHeight(!0))}),this.headers.each(function(){e-=t(this).outerHeight(!0)}),this.headers.next().each(function(){t(this).height(Math.max(0,e-t(this).innerHeight()+t(this).height()))}).css("overflow","auto")):"auto"===s&&(e=0,this.headers.next().each(function(){var i=t(this).is(":visible");i||t(this).show(),e=Math.max(e,t(this).css("height","").height()),i||t(this).hide()}).height(e))},_activate:function(e){var i=this._findActive(e)[0];i!==this.active[0]&&(i=i||this.active[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}))},_findActive:function(e){return"number"==typeof e?this.headers.eq(e):t()},_setupEvents:function(e){var i={keydown:"_keydown"};e&&t.each(e.split(" "),function(t,e){i[e]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,i),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(e){var i,s,n=this.options,o=this.active,a=t(e.currentTarget),r=a[0]===o[0],h=r&&n.collapsible,l=h?t():a.next(),c=o.next(),u={oldHeader:o,oldPanel:c,newHeader:h?t():a,newPanel:l};e.preventDefault(),r&&!n.collapsible||this._trigger("beforeActivate",e,u)===!1||(n.active=h?!1:this.headers.index(a),this.active=r?t():a,this._toggle(u),this._removeClass(o,"ui-accordion-header-active","ui-state-active"),n.icons&&(i=o.children(".ui-accordion-header-icon"),this._removeClass(i,null,n.icons.activeHeader)._addClass(i,null,n.icons.header)),r||(this._removeClass(a,"ui-accordion-header-collapsed")._addClass(a,"ui-accordion-header-active","ui-state-active"),n.icons&&(s=a.children(".ui-accordion-header-icon"),this._removeClass(s,null,n.icons.header)._addClass(s,null,n.icons.activeHeader)),this._addClass(a.next(),"ui-accordion-content-active")))},_toggle:function(e){var i=e.newPanel,s=this.prevShow.length?this.prevShow:e.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=i,this.prevHide=s,this.options.animate?this._animate(i,s,e):(s.hide(),i.show(),this._toggleComplete(e)),s.attr({"aria-hidden":"true"}),s.prev().attr({"aria-selected":"false","aria-expanded":"false"}),i.length&&s.length?s.prev().attr({tabIndex:-1,"aria-expanded":"false"}):i.length&&this.headers.filter(function(){return 0===parseInt(t(this).attr("tabIndex"),10)}).attr("tabIndex",-1),i.attr("aria-hidden","false").prev().attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_animate:function(t,e,i){var s,n,o,a=this,r=0,h=t.css("box-sizing"),l=t.length&&(!e.length||t.index()<e.index()),c=this.options.animate||{},u=l&&c.down||c,d=function(){a._toggleComplete(i)};return"number"==typeof u&&(o=u),"string"==typeof u&&(n=u),n=n||u.easing||c.easing,o=o||u.duration||c.duration,e.length?t.length?(s=t.show().outerHeight(),e.animate(this.hideProps,{duration:o,easing:n,step:function(t,e){e.now=Math.round(t)}}),t.hide().animate(this.showProps,{duration:o,easing:n,complete:d,step:function(t,i){i.now=Math.round(t),"height"!==i.prop?"content-box"===h&&(r+=i.now):"content"!==a.options.heightStyle&&(i.now=Math.round(s-e.outerHeight()-r),r=0)}}),void 0):e.animate(this.hideProps,o,n,d):t.animate(this.showProps,o,n,d)},_toggleComplete:function(t){var e=t.oldPanel,i=e.prev();this._removeClass(e,"ui-accordion-content-active"),this._removeClass(i,"ui-accordion-header-active")._addClass(i,"ui-accordion-header-collapsed"),e.length&&(e.parent()[0].className=e.parent()[0].className),this._trigger("activate",null,t)}}),t.ui.safeActiveElement=function(t){var e;try{e=t.activeElement}catch(i){e=t.body}return e||(e=t.body),e.nodeName||(e=t.body),e},t.widget("ui.menu",{version:"1.12.1",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-caret-1-e"},items:"> *",menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().attr({role:this.options.role,tabIndex:0}),this._addClass("ui-menu","ui-widget ui-widget-content"),this._on({"mousedown .ui-menu-item":function(t){t.preventDefault()},"click .ui-menu-item":function(e){var i=t(e.target),s=t(t.ui.safeActiveElement(this.document[0]));!this.mouseHandled&&i.not(".ui-state-disabled").length&&(this.select(e),e.isPropagationStopped()||(this.mouseHandled=!0),i.has(".ui-menu").length?this.expand(e):!this.element.is(":focus")&&s.closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(e){if(!this.previousFilter){var i=t(e.target).closest(".ui-menu-item"),s=t(e.currentTarget);i[0]===s[0]&&(this._removeClass(s.siblings().children(".ui-state-active"),null,"ui-state-active"),this.focus(e,s))}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(t,e){var i=this.active||this.element.find(this.options.items).eq(0);e||this.focus(t,i)},blur:function(e){this._delay(function(){var i=!t.contains(this.element[0],t.ui.safeActiveElement(this.document[0]));i&&this.collapseAll(e)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(t){this._closeOnDocumentClick(t)&&this.collapseAll(t),this.mouseHandled=!1}})},_destroy:function(){var e=this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),i=e.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(),i.children().each(function(){var e=t(this);e.data("ui-menu-submenu-caret")&&e.remove()})},_keydown:function(e){var i,s,n,o,a=!0;switch(e.keyCode){case t.ui.keyCode.PAGE_UP:this.previousPage(e);break;case t.ui.keyCode.PAGE_DOWN:this.nextPage(e);break;case t.ui.keyCode.HOME:this._move("first","first",e);break;case t.ui.keyCode.END:this._move("last","last",e);break;case t.ui.keyCode.UP:this.previous(e);break;case t.ui.keyCode.DOWN:this.next(e);break;case t.ui.keyCode.LEFT:this.collapse(e);break;case t.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(e);break;case t.ui.keyCode.ENTER:case t.ui.keyCode.SPACE:this._activate(e);break;case t.ui.keyCode.ESCAPE:this.collapse(e);break;default:a=!1,s=this.previousFilter||"",o=!1,n=e.keyCode>=96&&105>=e.keyCode?""+(e.keyCode-96):String.fromCharCode(e.keyCode),clearTimeout(this.filterTimer),n===s?o=!0:n=s+n,i=this._filterMenuItems(n),i=o&&-1!==i.index(this.active.next())?this.active.nextAll(".ui-menu-item"):i,i.length||(n=String.fromCharCode(e.keyCode),i=this._filterMenuItems(n)),i.length?(this.focus(e,i),this.previousFilter=n,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter}a&&e.preventDefault()},_activate:function(t){this.active&&!this.active.is(".ui-state-disabled")&&(this.active.children("[aria-haspopup='true']").length?this.expand(t):this.select(t))},refresh:function(){var e,i,s,n,o,a=this,r=this.options.icons.submenu,h=this.element.find(this.options.menus);this._toggleClass("ui-menu-icons",null,!!this.element.find(".ui-icon").length),s=h.filter(":not(.ui-menu)").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var e=t(this),i=e.prev(),s=t("<span>").data("ui-menu-submenu-caret",!0);a._addClass(s,"ui-menu-icon","ui-icon "+r),i.attr("aria-haspopup","true").prepend(s),e.attr("aria-labelledby",i.attr("id"))}),this._addClass(s,"ui-menu","ui-widget ui-widget-content ui-front"),e=h.add(this.element),i=e.find(this.options.items),i.not(".ui-menu-item").each(function(){var e=t(this);a._isDivider(e)&&a._addClass(e,"ui-menu-divider","ui-widget-content")}),n=i.not(".ui-menu-item, .ui-menu-divider"),o=n.children().not(".ui-menu").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),this._addClass(n,"ui-menu-item")._addClass(o,"ui-menu-item-wrapper"),i.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!t.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(t,e){if("icons"===t){var i=this.element.find(".ui-menu-icon");this._removeClass(i,null,this.options.icons.submenu)._addClass(i,null,e.submenu)}this._super(t,e)},_setOptionDisabled:function(t){this._super(t),this.element.attr("aria-disabled",t+""),this._toggleClass(null,"ui-state-disabled",!!t)},focus:function(t,e){var i,s,n;this.blur(t,t&&"focus"===t.type),this._scrollIntoView(e),this.active=e.first(),s=this.active.children(".ui-menu-item-wrapper"),this._addClass(s,null,"ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",s.attr("id")),n=this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"),this._addClass(n,null,"ui-state-active"),t&&"keydown"===t.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),i=e.children(".ui-menu"),i.length&&t&&/^mouse/.test(t.type)&&this._startOpening(i),this.activeMenu=e.parent(),this._trigger("focus",t,{item:e})},_scrollIntoView:function(e){var i,s,n,o,a,r;this._hasScroll()&&(i=parseFloat(t.css(this.activeMenu[0],"borderTopWidth"))||0,s=parseFloat(t.css(this.activeMenu[0],"paddingTop"))||0,n=e.offset().top-this.activeMenu.offset().top-i-s,o=this.activeMenu.scrollTop(),a=this.activeMenu.height(),r=e.outerHeight(),0>n?this.activeMenu.scrollTop(o+n):n+r>a&&this.activeMenu.scrollTop(o+n-a+r))},blur:function(t,e){e||clearTimeout(this.timer),this.active&&(this._removeClass(this.active.children(".ui-menu-item-wrapper"),null,"ui-state-active"),this._trigger("blur",t,{item:this.active}),this.active=null)},_startOpening:function(t){clearTimeout(this.timer),"true"===t.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(t)},this.delay))},_open:function(e){var i=t.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden","true"),e.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i)},collapseAll:function(e,i){clearTimeout(this.timer),this.timer=this._delay(function(){var s=i?this.element:t(e&&e.target).closest(this.element.find(".ui-menu"));s.length||(s=this.element),this._close(s),this.blur(e),this._removeClass(s.find(".ui-state-active"),null,"ui-state-active"),this.activeMenu=s},this.delay)},_close:function(t){t||(t=this.active?this.active.parent():this.element),t.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false")},_closeOnDocumentClick:function(e){return!t(e.target).closest(".ui-menu").length},_isDivider:function(t){return!/[^\-\u2014\u2013\s]/.test(t.text())},collapse:function(t){var e=this.active&&this.active.parent().closest(".ui-menu-item",this.element);e&&e.length&&(this._close(),this.focus(t,e))},expand:function(t){var e=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();e&&e.length&&(this._open(e.parent()),this._delay(function(){this.focus(t,e)}))},next:function(t){this._move("next","first",t)},previous:function(t){this._move("prev","last",t)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(t,e,i){var s;this.active&&(s="first"===t||"last"===t?this.active["first"===t?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[t+"All"](".ui-menu-item").eq(0)),s&&s.length&&this.active||(s=this.activeMenu.find(this.options.items)[e]()),this.focus(i,s)},nextPage:function(e){var i,s,n;return this.active?(this.isLastItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return i=t(this),0>i.offset().top-s-n}),this.focus(e,i)):this.focus(e,this.activeMenu.find(this.options.items)[this.active?"last":"first"]())),void 0):(this.next(e),void 0)},previousPage:function(e){var i,s,n;return this.active?(this.isFirstItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return i=t(this),i.offset().top-s+n>0}),this.focus(e,i)):this.focus(e,this.activeMenu.find(this.options.items).first())),void 0):(this.next(e),void 0)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(e){this.active=this.active||t(e.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(e,!0),this._trigger("select",e,i)},_filterMenuItems:function(e){var i=e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),s=RegExp("^"+i,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return s.test(t.trim(t(this).children(".ui-menu-item-wrapper").text()))})}}),t.widget("ui.autocomplete",{version:"1.12.1",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var e,i,s,n=this.element[0].nodeName.toLowerCase(),o="textarea"===n,a="input"===n;
this.isMultiLine=o||!a&&this._isContentEditable(this.element),this.valueMethod=this.element[o||a?"val":"text"],this.isNewMenu=!0,this._addClass("ui-autocomplete-input"),this.element.attr("autocomplete","off"),this._on(this.element,{keydown:function(n){if(this.element.prop("readOnly"))return e=!0,s=!0,i=!0,void 0;e=!1,s=!1,i=!1;var o=t.ui.keyCode;switch(n.keyCode){case o.PAGE_UP:e=!0,this._move("previousPage",n);break;case o.PAGE_DOWN:e=!0,this._move("nextPage",n);break;case o.UP:e=!0,this._keyEvent("previous",n);break;case o.DOWN:e=!0,this._keyEvent("next",n);break;case o.ENTER:this.menu.active&&(e=!0,n.preventDefault(),this.menu.select(n));break;case o.TAB:this.menu.active&&this.menu.select(n);break;case o.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(n),n.preventDefault());break;default:i=!0,this._searchTimeout(n)}},keypress:function(s){if(e)return e=!1,(!this.isMultiLine||this.menu.element.is(":visible"))&&s.preventDefault(),void 0;if(!i){var n=t.ui.keyCode;switch(s.keyCode){case n.PAGE_UP:this._move("previousPage",s);break;case n.PAGE_DOWN:this._move("nextPage",s);break;case n.UP:this._keyEvent("previous",s);break;case n.DOWN:this._keyEvent("next",s)}}},input:function(t){return s?(s=!1,t.preventDefault(),void 0):(this._searchTimeout(t),void 0)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(t){return this.cancelBlur?(delete this.cancelBlur,void 0):(clearTimeout(this.searching),this.close(t),this._change(t),void 0)}}),this._initSource(),this.menu=t("<ul>").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance"),this._addClass(this.menu.element,"ui-autocomplete","ui-front"),this._on(this.menu.element,{mousedown:function(e){e.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,this.element[0]!==t.ui.safeActiveElement(this.document[0])&&this.element.trigger("focus")})},menufocus:function(e,i){var s,n;return this.isNewMenu&&(this.isNewMenu=!1,e.originalEvent&&/^mouse/.test(e.originalEvent.type))?(this.menu.blur(),this.document.one("mousemove",function(){t(e.target).trigger(e.originalEvent)}),void 0):(n=i.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",e,{item:n})&&e.originalEvent&&/^key/.test(e.originalEvent.type)&&this._value(n.value),s=i.item.attr("aria-label")||n.value,s&&t.trim(s).length&&(this.liveRegion.children().hide(),t("<div>").text(s).appendTo(this.liveRegion)),void 0)},menuselect:function(e,i){var s=i.item.data("ui-autocomplete-item"),n=this.previous;this.element[0]!==t.ui.safeActiveElement(this.document[0])&&(this.element.trigger("focus"),this.previous=n,this._delay(function(){this.previous=n,this.selectedItem=s})),!1!==this._trigger("select",e,{item:s})&&this._value(s.value),this.term=this._value(),this.close(e),this.selectedItem=s}}),this.liveRegion=t("<div>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(t,e){this._super(t,e),"source"===t&&this._initSource(),"appendTo"===t&&this.menu.element.appendTo(this._appendTo()),"disabled"===t&&e&&this.xhr&&this.xhr.abort()},_isEventTargetInWidget:function(e){var i=this.menu.element[0];return e.target===this.element[0]||e.target===i||t.contains(i,e.target)},_closeOnClickOutside:function(t){this._isEventTargetInWidget(t)||this.close()},_appendTo:function(){var e=this.options.appendTo;return e&&(e=e.jquery||e.nodeType?t(e):this.document.find(e).eq(0)),e&&e[0]||(e=this.element.closest(".ui-front, dialog")),e.length||(e=this.document[0].body),e},_initSource:function(){var e,i,s=this;t.isArray(this.options.source)?(e=this.options.source,this.source=function(i,s){s(t.ui.autocomplete.filter(e,i.term))}):"string"==typeof this.options.source?(i=this.options.source,this.source=function(e,n){s.xhr&&s.xhr.abort(),s.xhr=t.ajax({url:i,data:e,dataType:"json",success:function(t){n(t)},error:function(){n([])}})}):this.source=this.options.source},_searchTimeout:function(t){clearTimeout(this.searching),this.searching=this._delay(function(){var e=this.term===this._value(),i=this.menu.element.is(":visible"),s=t.altKey||t.ctrlKey||t.metaKey||t.shiftKey;(!e||e&&!i&&!s)&&(this.selectedItem=null,this.search(null,t))},this.options.delay)},search:function(t,e){return t=null!=t?t:this._value(),this.term=this._value(),t.length<this.options.minLength?this.close(e):this._trigger("search",e)!==!1?this._search(t):void 0},_search:function(t){this.pending++,this._addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:t},this._response())},_response:function(){var e=++this.requestIndex;return t.proxy(function(t){e===this.requestIndex&&this.__response(t),this.pending--,this.pending||this._removeClass("ui-autocomplete-loading")},this)},__response:function(t){t&&(t=this._normalize(t)),this._trigger("response",null,{content:t}),!this.options.disabled&&t&&t.length&&!this.cancelSearch?(this._suggest(t),this._trigger("open")):this._close()},close:function(t){this.cancelSearch=!0,this._close(t)},_close:function(t){this._off(this.document,"mousedown"),this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",t))},_change:function(t){this.previous!==this._value()&&this._trigger("change",t,{item:this.selectedItem})},_normalize:function(e){return e.length&&e[0].label&&e[0].value?e:t.map(e,function(e){return"string"==typeof e?{label:e,value:e}:t.extend({},e,{label:e.label||e.value,value:e.value||e.label})})},_suggest:function(e){var i=this.menu.element.empty();this._renderMenu(i,e),this.isNewMenu=!0,this.menu.refresh(),i.show(),this._resizeMenu(),i.position(t.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next(),this._on(this.document,{mousedown:"_closeOnClickOutside"})},_resizeMenu:function(){var t=this.menu.element;t.outerWidth(Math.max(t.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(e,i){var s=this;t.each(i,function(t,i){s._renderItemData(e,i)})},_renderItemData:function(t,e){return this._renderItem(t,e).data("ui-autocomplete-item",e)},_renderItem:function(e,i){return t("<li>").append(t("<div>").text(i.label)).appendTo(e)},_move:function(t,e){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(t)||this.menu.isLastItem()&&/^next/.test(t)?(this.isMultiLine||this._value(this.term),this.menu.blur(),void 0):(this.menu[t](e),void 0):(this.search(null,e),void 0)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(t,e){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(t,e),e.preventDefault())},_isContentEditable:function(t){if(!t.length)return!1;var e=t.prop("contentEditable");return"inherit"===e?this._isContentEditable(t.parent()):"true"===e}}),t.extend(t.ui.autocomplete,{escapeRegex:function(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(e,i){var s=RegExp(t.ui.autocomplete.escapeRegex(i),"i");return t.grep(e,function(t){return s.test(t.label||t.value||t)})}}),t.widget("ui.autocomplete",t.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(t){return t+(t>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(e){var i;this._superApply(arguments),this.options.disabled||this.cancelSearch||(i=e&&e.length?this.options.messages.results(e.length):this.options.messages.noResults,this.liveRegion.children().hide(),t("<div>").text(i).appendTo(this.liveRegion))}}),t.ui.autocomplete;var g=/ui-corner-([a-z]){2,6}/g;t.widget("ui.controlgroup",{version:"1.12.1",defaultElement:"<div>",options:{direction:"horizontal",disabled:null,onlyVisible:!0,items:{button:"input[type=button], input[type=submit], input[type=reset], button, a",controlgroupLabel:".ui-controlgroup-label",checkboxradio:"input[type='checkbox'], input[type='radio']",selectmenu:"select",spinner:".ui-spinner-input"}},_create:function(){this._enhance()},_enhance:function(){this.element.attr("role","toolbar"),this.refresh()},_destroy:function(){this._callChildMethod("destroy"),this.childWidgets.removeData("ui-controlgroup-data"),this.element.removeAttr("role"),this.options.items.controlgroupLabel&&this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()},_initWidgets:function(){var e=this,i=[];t.each(this.options.items,function(s,n){var o,a={};return n?"controlgroupLabel"===s?(o=e.element.find(n),o.each(function(){var e=t(this);e.children(".ui-controlgroup-label-contents").length||e.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")}),e._addClass(o,null,"ui-widget ui-widget-content ui-state-default"),i=i.concat(o.get()),void 0):(t.fn[s]&&(a=e["_"+s+"Options"]?e["_"+s+"Options"]("middle"):{classes:{}},e.element.find(n).each(function(){var n=t(this),o=n[s]("instance"),r=t.widget.extend({},a);if("button"!==s||!n.parent(".ui-spinner").length){o||(o=n[s]()[s]("instance")),o&&(r.classes=e._resolveClassesValues(r.classes,o)),n[s](r);var h=n[s]("widget");t.data(h[0],"ui-controlgroup-data",o?o:n[s]("instance")),i.push(h[0])}})),void 0):void 0}),this.childWidgets=t(t.unique(i)),this._addClass(this.childWidgets,"ui-controlgroup-item")},_callChildMethod:function(e){this.childWidgets.each(function(){var i=t(this),s=i.data("ui-controlgroup-data");s&&s[e]&&s[e]()})},_updateCornerClass:function(t,e){var i="ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all",s=this._buildSimpleOptions(e,"label").classes.label;this._removeClass(t,null,i),this._addClass(t,null,s)},_buildSimpleOptions:function(t,e){var i="vertical"===this.options.direction,s={classes:{}};return s.classes[e]={middle:"",first:"ui-corner-"+(i?"top":"left"),last:"ui-corner-"+(i?"bottom":"right"),only:"ui-corner-all"}[t],s},_spinnerOptions:function(t){var e=this._buildSimpleOptions(t,"ui-spinner");return e.classes["ui-spinner-up"]="",e.classes["ui-spinner-down"]="",e},_buttonOptions:function(t){return this._buildSimpleOptions(t,"ui-button")},_checkboxradioOptions:function(t){return this._buildSimpleOptions(t,"ui-checkboxradio-label")},_selectmenuOptions:function(t){var e="vertical"===this.options.direction;return{width:e?"auto":!1,classes:{middle:{"ui-selectmenu-button-open":"","ui-selectmenu-button-closed":""},first:{"ui-selectmenu-button-open":"ui-corner-"+(e?"top":"tl"),"ui-selectmenu-button-closed":"ui-corner-"+(e?"top":"left")},last:{"ui-selectmenu-button-open":e?"":"ui-corner-tr","ui-selectmenu-button-closed":"ui-corner-"+(e?"bottom":"right")},only:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"}}[t]}},_resolveClassesValues:function(e,i){var s={};return t.each(e,function(n){var o=i.options.classes[n]||"";o=t.trim(o.replace(g,"")),s[n]=(o+" "+e[n]).replace(/\s+/g," ")}),s},_setOption:function(t,e){return"direction"===t&&this._removeClass("ui-controlgroup-"+this.options.direction),this._super(t,e),"disabled"===t?(this._callChildMethod(e?"disable":"enable"),void 0):(this.refresh(),void 0)},refresh:function(){var e,i=this;this._addClass("ui-controlgroup ui-controlgroup-"+this.options.direction),"horizontal"===this.options.direction&&this._addClass(null,"ui-helper-clearfix"),this._initWidgets(),e=this.childWidgets,this.options.onlyVisible&&(e=e.filter(":visible")),e.length&&(t.each(["first","last"],function(t,s){var n=e[s]().data("ui-controlgroup-data");if(n&&i["_"+n.widgetName+"Options"]){var o=i["_"+n.widgetName+"Options"](1===e.length?"only":s);o.classes=i._resolveClassesValues(o.classes,n),n.element[n.widgetName](o)}else i._updateCornerClass(e[s](),s)}),this._callChildMethod("refresh"))}}),t.widget("ui.checkboxradio",[t.ui.formResetMixin,{version:"1.12.1",options:{disabled:null,label:null,icon:!0,classes:{"ui-checkboxradio-label":"ui-corner-all","ui-checkboxradio-icon":"ui-corner-all"}},_getCreateOptions:function(){var e,i,s=this,n=this._super()||{};return this._readType(),i=this.element.labels(),this.label=t(i[i.length-1]),this.label.length||t.error("No label found for checkboxradio widget"),this.originalLabel="",this.label.contents().not(this.element[0]).each(function(){s.originalLabel+=3===this.nodeType?t(this).text():this.outerHTML}),this.originalLabel&&(n.label=this.originalLabel),e=this.element[0].disabled,null!=e&&(n.disabled=e),n},_create:function(){var t=this.element[0].checked;this._bindFormResetHandler(),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled),this._setOption("disabled",this.options.disabled),this._addClass("ui-checkboxradio","ui-helper-hidden-accessible"),this._addClass(this.label,"ui-checkboxradio-label","ui-button ui-widget"),"radio"===this.type&&this._addClass(this.label,"ui-checkboxradio-radio-label"),this.options.label&&this.options.label!==this.originalLabel?this._updateLabel():this.originalLabel&&(this.options.label=this.originalLabel),this._enhance(),t&&(this._addClass(this.label,"ui-checkboxradio-checked","ui-state-active"),this.icon&&this._addClass(this.icon,null,"ui-state-hover")),this._on({change:"_toggleClasses",focus:function(){this._addClass(this.label,null,"ui-state-focus ui-visual-focus")},blur:function(){this._removeClass(this.label,null,"ui-state-focus ui-visual-focus")}})},_readType:function(){var e=this.element[0].nodeName.toLowerCase();this.type=this.element[0].type,"input"===e&&/radio|checkbox/.test(this.type)||t.error("Can't create checkboxradio on element.nodeName="+e+" and element.type="+this.type)},_enhance:function(){this._updateIcon(this.element[0].checked)},widget:function(){return this.label},_getRadioGroup:function(){var e,i=this.element[0].name,s="input[name='"+t.ui.escapeSelector(i)+"']";return i?(e=this.form.length?t(this.form[0].elements).filter(s):t(s).filter(function(){return 0===t(this).form().length}),e.not(this.element)):t([])},_toggleClasses:function(){var e=this.element[0].checked;this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",e),this.options.icon&&"checkbox"===this.type&&this._toggleClass(this.icon,null,"ui-icon-check ui-state-checked",e)._toggleClass(this.icon,null,"ui-icon-blank",!e),"radio"===this.type&&this._getRadioGroup().each(function(){var e=t(this).checkboxradio("instance");e&&e._removeClass(e.label,"ui-checkboxradio-checked","ui-state-active")})},_destroy:function(){this._unbindFormResetHandler(),this.icon&&(this.icon.remove(),this.iconSpace.remove())},_setOption:function(t,e){return"label"!==t||e?(this._super(t,e),"disabled"===t?(this._toggleClass(this.label,null,"ui-state-disabled",e),this.element[0].disabled=e,void 0):(this.refresh(),void 0)):void 0},_updateIcon:function(e){var i="ui-icon ui-icon-background ";this.options.icon?(this.icon||(this.icon=t("<span>"),this.iconSpace=t("<span> </span>"),this._addClass(this.iconSpace,"ui-checkboxradio-icon-space")),"checkbox"===this.type?(i+=e?"ui-icon-check ui-state-checked":"ui-icon-blank",this._removeClass(this.icon,null,e?"ui-icon-blank":"ui-icon-check")):i+="ui-icon-blank",this._addClass(this.icon,"ui-checkboxradio-icon",i),e||this._removeClass(this.icon,null,"ui-icon-check ui-state-checked"),this.icon.prependTo(this.label).after(this.iconSpace)):void 0!==this.icon&&(this.icon.remove(),this.iconSpace.remove(),delete this.icon)},_updateLabel:function(){var t=this.label.contents().not(this.element[0]);this.icon&&(t=t.not(this.icon[0])),this.iconSpace&&(t=t.not(this.iconSpace[0])),t.remove(),this.label.append(this.options.label)},refresh:function(){var t=this.element[0].checked,e=this.element[0].disabled;this._updateIcon(t),this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",t),null!==this.options.label&&this._updateLabel(),e!==this.options.disabled&&this._setOptions({disabled:e})}}]),t.ui.checkboxradio,t.widget("ui.button",{version:"1.12.1",defaultElement:"<button>",options:{classes:{"ui-button":"ui-corner-all"},disabled:null,icon:null,iconPosition:"beginning",label:null,showLabel:!0},_getCreateOptions:function(){var t,e=this._super()||{};return this.isInput=this.element.is("input"),t=this.element[0].disabled,null!=t&&(e.disabled=t),this.originalLabel=this.isInput?this.element.val():this.element.html(),this.originalLabel&&(e.label=this.originalLabel),e},_create:function(){!this.option.showLabel&!this.options.icon&&(this.options.showLabel=!0),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled||!1),this.hasTitle=!!this.element.attr("title"),this.options.label&&this.options.label!==this.originalLabel&&(this.isInput?this.element.val(this.options.label):this.element.html(this.options.label)),this._addClass("ui-button","ui-widget"),this._setOption("disabled",this.options.disabled),this._enhance(),this.element.is("a")&&this._on({keyup:function(e){e.keyCode===t.ui.keyCode.SPACE&&(e.preventDefault(),this.element[0].click?this.element[0].click():this.element.trigger("click"))}})},_enhance:function(){this.element.is("button")||this.element.attr("role","button"),this.options.icon&&(this._updateIcon("icon",this.options.icon),this._updateTooltip())},_updateTooltip:function(){this.title=this.element.attr("title"),this.options.showLabel||this.title||this.element.attr("title",this.options.label)},_updateIcon:function(e,i){var s="iconPosition"!==e,n=s?this.options.iconPosition:i,o="top"===n||"bottom"===n;this.icon?s&&this._removeClass(this.icon,null,this.options.icon):(this.icon=t("<span>"),this._addClass(this.icon,"ui-button-icon","ui-icon"),this.options.showLabel||this._addClass("ui-button-icon-only")),s&&this._addClass(this.icon,null,i),this._attachIcon(n),o?(this._addClass(this.icon,null,"ui-widget-icon-block"),this.iconSpace&&this.iconSpace.remove()):(this.iconSpace||(this.iconSpace=t("<span> </span>"),this._addClass(this.iconSpace,"ui-button-icon-space")),this._removeClass(this.icon,null,"ui-wiget-icon-block"),this._attachIconSpace(n))},_destroy:function(){this.element.removeAttr("role"),this.icon&&this.icon.remove(),this.iconSpace&&this.iconSpace.remove(),this.hasTitle||this.element.removeAttr("title")},_attachIconSpace:function(t){this.icon[/^(?:end|bottom)/.test(t)?"before":"after"](this.iconSpace)},_attachIcon:function(t){this.element[/^(?:end|bottom)/.test(t)?"append":"prepend"](this.icon)},_setOptions:function(t){var e=void 0===t.showLabel?this.options.showLabel:t.showLabel,i=void 0===t.icon?this.options.icon:t.icon;e||i||(t.showLabel=!0),this._super(t)},_setOption:function(t,e){"icon"===t&&(e?this._updateIcon(t,e):this.icon&&(this.icon.remove(),this.iconSpace&&this.iconSpace.remove())),"iconPosition"===t&&this._updateIcon(t,e),"showLabel"===t&&(this._toggleClass("ui-button-icon-only",null,!e),this._updateTooltip()),"label"===t&&(this.isInput?this.element.val(e):(this.element.html(e),this.icon&&(this._attachIcon(this.options.iconPosition),this._attachIconSpace(this.options.iconPosition)))),this._super(t,e),"disabled"===t&&(this._toggleClass(null,"ui-state-disabled",e),this.element[0].disabled=e,e&&this.element.blur())},refresh:function(){var t=this.element.is("input, button")?this.element[0].disabled:this.element.hasClass("ui-button-disabled");t!==this.options.disabled&&this._setOptions({disabled:t}),this._updateTooltip()}}),t.uiBackCompat!==!1&&(t.widget("ui.button",t.ui.button,{options:{text:!0,icons:{primary:null,secondary:null}},_create:function(){this.options.showLabel&&!this.options.text&&(this.options.showLabel=this.options.text),!this.options.showLabel&&this.options.text&&(this.options.text=this.options.showLabel),this.options.icon||!this.options.icons.primary&&!this.options.icons.secondary?this.options.icon&&(this.options.icons.primary=this.options.icon):this.options.icons.primary?this.options.icon=this.options.icons.primary:(this.options.icon=this.options.icons.secondary,this.options.iconPosition="end"),this._super()},_setOption:function(t,e){return"text"===t?(this._super("showLabel",e),void 0):("showLabel"===t&&(this.options.text=e),"icon"===t&&(this.options.icons.primary=e),"icons"===t&&(e.primary?(this._super("icon",e.primary),this._super("iconPosition","beginning")):e.secondary&&(this._super("icon",e.secondary),this._super("iconPosition","end"))),this._superApply(arguments),void 0)}}),t.fn.button=function(e){return function(){return!this.length||this.length&&"INPUT"!==this[0].tagName||this.length&&"INPUT"===this[0].tagName&&"checkbox"!==this.attr("type")&&"radio"!==this.attr("type")?e.apply(this,arguments):(t.ui.checkboxradio||t.error("Checkboxradio widget missing"),0===arguments.length?this.checkboxradio({icon:!1}):this.checkboxradio.apply(this,arguments))}}(t.fn.button),t.fn.buttonset=function(){return t.ui.controlgroup||t.error("Controlgroup widget missing"),"option"===arguments[0]&&"items"===arguments[1]&&arguments[2]?this.controlgroup.apply(this,[arguments[0],"items.button",arguments[2]]):"option"===arguments[0]&&"items"===arguments[1]?this.controlgroup.apply(this,[arguments[0],"items.button"]):("object"==typeof arguments[0]&&arguments[0].items&&(arguments[0].items={button:arguments[0].items}),this.controlgroup.apply(this,arguments))}),t.ui.button,t.extend(t.ui,{datepicker:{version:"1.12.1"}});var m;t.extend(s.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(t){return a(this._defaults,t||{}),this},_attachDatepicker:function(e,i){var s,n,o;s=e.nodeName.toLowerCase(),n="div"===s||"span"===s,e.id||(this.uuid+=1,e.id="dp"+this.uuid),o=this._newInst(t(e),n),o.settings=t.extend({},i||{}),"input"===s?this._connectDatepicker(e,o):n&&this._inlineDatepicker(e,o)},_newInst:function(e,i){var s=e[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:s,input:e,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:i,dpDiv:i?n(t("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(e,i){var s=t(e);i.append=t([]),i.trigger=t([]),s.hasClass(this.markerClassName)||(this._attachments(s,i),s.addClass(this.markerClassName).on("keydown",this._doKeyDown).on("keypress",this._doKeyPress).on("keyup",this._doKeyUp),this._autoSize(i),t.data(e,"datepicker",i),i.settings.disabled&&this._disableDatepicker(e))},_attachments:function(e,i){var s,n,o,a=this._get(i,"appendText"),r=this._get(i,"isRTL");i.append&&i.append.remove(),a&&(i.append=t("<span class='"+this._appendClass+"'>"+a+"</span>"),e[r?"before":"after"](i.append)),e.off("focus",this._showDatepicker),i.trigger&&i.trigger.remove(),s=this._get(i,"showOn"),("focus"===s||"both"===s)&&e.on("focus",this._showDatepicker),("button"===s||"both"===s)&&(n=this._get(i,"buttonText"),o=this._get(i,"buttonImage"),i.trigger=t(this._get(i,"buttonImageOnly")?t("<img/>").addClass(this._triggerClass).attr({src:o,alt:n,title:n}):t("<button type='button'></button>").addClass(this._triggerClass).html(o?t("<img/>").attr({src:o,alt:n,title:n}):n)),e[r?"before":"after"](i.trigger),i.trigger.on("click",function(){return t.datepicker._datepickerShowing&&t.datepicker._lastInput===e[0]?t.datepicker._hideDatepicker():t.datepicker._datepickerShowing&&t.datepicker._lastInput!==e[0]?(t.datepicker._hideDatepicker(),t.datepicker._showDatepicker(e[0])):t.datepicker._showDatepicker(e[0]),!1}))},_autoSize:function(t){if(this._get(t,"autoSize")&&!t.inline){var e,i,s,n,o=new Date(2009,11,20),a=this._get(t,"dateFormat");a.match(/[DM]/)&&(e=function(t){for(i=0,s=0,n=0;t.length>n;n++)t[n].length>i&&(i=t[n].length,s=n);return s},o.setMonth(e(this._get(t,a.match(/MM/)?"monthNames":"monthNamesShort"))),o.setDate(e(this._get(t,a.match(/DD/)?"dayNames":"dayNamesShort"))+20-o.getDay())),t.input.attr("size",this._formatDate(t,o).length)}},_inlineDatepicker:function(e,i){var s=t(e);s.hasClass(this.markerClassName)||(s.addClass(this.markerClassName).append(i.dpDiv),t.data(e,"datepicker",i),this._setDate(i,this._getDefaultDate(i),!0),this._updateDatepicker(i),this._updateAlternate(i),i.settings.disabled&&this._disableDatepicker(e),i.dpDiv.css("display","block"))},_dialogDatepicker:function(e,i,s,n,o){var r,h,l,c,u,d=this._dialogInst;return d||(this.uuid+=1,r="dp"+this.uuid,this._dialogInput=t("<input type='text' id='"+r+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.on("keydown",this._doKeyDown),t("body").append(this._dialogInput),d=this._dialogInst=this._newInst(this._dialogInput,!1),d.settings={},t.data(this._dialogInput[0],"datepicker",d)),a(d.settings,n||{}),i=i&&i.constructor===Date?this._formatDate(d,i):i,this._dialogInput.val(i),this._pos=o?o.length?o:[o.pageX,o.pageY]:null,this._pos||(h=document.documentElement.clientWidth,l=document.documentElement.clientHeight,c=document.documentElement.scrollLeft||document.body.scrollLeft,u=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[h/2-100+c,l/2-150+u]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),d.settings.onSelect=s,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),t.blockUI&&t.blockUI(this.dpDiv),t.data(this._dialogInput[0],"datepicker",d),this},_destroyDatepicker:function(e){var i,s=t(e),n=t.data(e,"datepicker");s.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),t.removeData(e,"datepicker"),"input"===i?(n.append.remove(),n.trigger.remove(),s.removeClass(this.markerClassName).off("focus",this._showDatepicker).off("keydown",this._doKeyDown).off("keypress",this._doKeyPress).off("keyup",this._doKeyUp)):("div"===i||"span"===i)&&s.removeClass(this.markerClassName).empty(),m===n&&(m=null))},_enableDatepicker:function(e){var i,s,n=t(e),o=t.data(e,"datepicker");n.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!1,o.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().removeClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}))},_disableDatepicker:function(e){var i,s,n=t(e),o=t.data(e,"datepicker");n.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!0,o.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().addClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}),this._disabledInputs[this._disabledInputs.length]=e)},_isDisabledDatepicker:function(t){if(!t)return!1;for(var e=0;this._disabledInputs.length>e;e++)if(this._disabledInputs[e]===t)return!0;return!1},_getInst:function(e){try{return t.data(e,"datepicker")}catch(i){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(e,i,s){var n,o,r,h,l=this._getInst(e);return 2===arguments.length&&"string"==typeof i?"defaults"===i?t.extend({},t.datepicker._defaults):l?"all"===i?t.extend({},l.settings):this._get(l,i):null:(n=i||{},"string"==typeof i&&(n={},n[i]=s),l&&(this._curInst===l&&this._hideDatepicker(),o=this._getDateDatepicker(e,!0),r=this._getMinMaxDate(l,"min"),h=this._getMinMaxDate(l,"max"),a(l.settings,n),null!==r&&void 0!==n.dateFormat&&void 0===n.minDate&&(l.settings.minDate=this._formatDate(l,r)),null!==h&&void 0!==n.dateFormat&&void 0===n.maxDate&&(l.settings.maxDate=this._formatDate(l,h)),"disabled"in n&&(n.disabled?this._disableDatepicker(e):this._enableDatepicker(e)),this._attachments(t(e),l),this._autoSize(l),this._setDate(l,o),this._updateAlternate(l),this._updateDatepicker(l)),void 0)},_changeDatepicker:function(t,e,i){this._optionDatepicker(t,e,i)},_refreshDatepicker:function(t){var e=this._getInst(t);e&&this._updateDatepicker(e)},_setDateDatepicker:function(t,e){var i=this._getInst(t);i&&(this._setDate(i,e),this._updateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(t,e){var i=this._getInst(t);return i&&!i.inline&&this._setDateFromField(i,e),i?this._getDate(i):null},_doKeyDown:function(e){var i,s,n,o=t.datepicker._getInst(e.target),a=!0,r=o.dpDiv.is(".ui-datepicker-rtl");if(o._keyEvent=!0,t.datepicker._datepickerShowing)switch(e.keyCode){case 9:t.datepicker._hideDatepicker(),a=!1;break;case 13:return n=t("td."+t.datepicker._dayOverClass+":not(."+t.datepicker._currentClass+")",o.dpDiv),n[0]&&t.datepicker._selectDay(e.target,o.selectedMonth,o.selectedYear,n[0]),i=t.datepicker._get(o,"onSelect"),i?(s=t.datepicker._formatDate(o),i.apply(o.input?o.input[0]:null,[s,o])):t.datepicker._hideDatepicker(),!1;case 27:t.datepicker._hideDatepicker();break;case 33:t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(o,"stepBigMonths"):-t.datepicker._get(o,"stepMonths"),"M");break;case 34:t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(o,"stepBigMonths"):+t.datepicker._get(o,"stepMonths"),"M");break;case 35:(e.ctrlKey||e.metaKey)&&t.datepicker._clearDate(e.target),a=e.ctrlKey||e.metaKey;break;case 36:(e.ctrlKey||e.metaKey)&&t.datepicker._gotoToday(e.target),a=e.ctrlKey||e.metaKey;break;case 37:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,r?1:-1,"D"),a=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(o,"stepBigMonths"):-t.datepicker._get(o,"stepMonths"),"M");break;case 38:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,-7,"D"),a=e.ctrlKey||e.metaKey;break;case 39:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,r?-1:1,"D"),a=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(o,"stepBigMonths"):+t.datepicker._get(o,"stepMonths"),"M");break;case 40:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,7,"D"),a=e.ctrlKey||e.metaKey;break;default:a=!1}else 36===e.keyCode&&e.ctrlKey?t.datepicker._showDatepicker(this):a=!1;a&&(e.preventDefault(),e.stopPropagation())},_doKeyPress:function(e){var i,s,n=t.datepicker._getInst(e.target);return t.datepicker._get(n,"constrainInput")?(i=t.datepicker._possibleChars(t.datepicker._get(n,"dateFormat")),s=String.fromCharCode(null==e.charCode?e.keyCode:e.charCode),e.ctrlKey||e.metaKey||" ">s||!i||i.indexOf(s)>-1):void 0},_doKeyUp:function(e){var i,s=t.datepicker._getInst(e.target);if(s.input.val()!==s.lastVal)try{i=t.datepicker.parseDate(t.datepicker._get(s,"dateFormat"),s.input?s.input.val():null,t.datepicker._getFormatConfig(s)),i&&(t.datepicker._setDateFromField(s),t.datepicker._updateAlternate(s),t.datepicker._updateDatepicker(s))}catch(n){}return!0},_showDatepicker:function(e){if(e=e.target||e,"input"!==e.nodeName.toLowerCase()&&(e=t("input",e.parentNode)[0]),!t.datepicker._isDisabledDatepicker(e)&&t.datepicker._lastInput!==e){var s,n,o,r,h,l,c;s=t.datepicker._getInst(e),t.datepicker._curInst&&t.datepicker._curInst!==s&&(t.datepicker._curInst.dpDiv.stop(!0,!0),s&&t.datepicker._datepickerShowing&&t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),n=t.datepicker._get(s,"beforeShow"),o=n?n.apply(e,[e,s]):{},o!==!1&&(a(s.settings,o),s.lastVal=null,t.datepicker._lastInput=e,t.datepicker._setDateFromField(s),t.datepicker._inDialog&&(e.value=""),t.datepicker._pos||(t.datepicker._pos=t.datepicker._findPos(e),t.datepicker._pos[1]+=e.offsetHeight),r=!1,t(e).parents().each(function(){return r|="fixed"===t(this).css("position"),!r}),h={left:t.datepicker._pos[0],top:t.datepicker._pos[1]},t.datepicker._pos=null,s.dpDiv.empty(),s.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),t.datepicker._updateDatepicker(s),h=t.datepicker._checkOffset(s,h,r),s.dpDiv.css({position:t.datepicker._inDialog&&t.blockUI?"static":r?"fixed":"absolute",display:"none",left:h.left+"px",top:h.top+"px"}),s.inline||(l=t.datepicker._get(s,"showAnim"),c=t.datepicker._get(s,"duration"),s.dpDiv.css("z-index",i(t(e))+1),t.datepicker._datepickerShowing=!0,t.effects&&t.effects.effect[l]?s.dpDiv.show(l,t.datepicker._get(s,"showOptions"),c):s.dpDiv[l||"show"](l?c:null),t.datepicker._shouldFocusInput(s)&&s.input.trigger("focus"),t.datepicker._curInst=s))
}},_updateDatepicker:function(e){this.maxRows=4,m=e,e.dpDiv.empty().append(this._generateHTML(e)),this._attachHandlers(e);var i,s=this._getNumberOfMonths(e),n=s[1],a=17,r=e.dpDiv.find("."+this._dayOverClass+" a");r.length>0&&o.apply(r.get(0)),e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),n>1&&e.dpDiv.addClass("ui-datepicker-multi-"+n).css("width",a*n+"em"),e.dpDiv[(1!==s[0]||1!==s[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),e.dpDiv[(this._get(e,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),e===t.datepicker._curInst&&t.datepicker._datepickerShowing&&t.datepicker._shouldFocusInput(e)&&e.input.trigger("focus"),e.yearshtml&&(i=e.yearshtml,setTimeout(function(){i===e.yearshtml&&e.yearshtml&&e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml),i=e.yearshtml=null},0))},_shouldFocusInput:function(t){return t.input&&t.input.is(":visible")&&!t.input.is(":disabled")&&!t.input.is(":focus")},_checkOffset:function(e,i,s){var n=e.dpDiv.outerWidth(),o=e.dpDiv.outerHeight(),a=e.input?e.input.outerWidth():0,r=e.input?e.input.outerHeight():0,h=document.documentElement.clientWidth+(s?0:t(document).scrollLeft()),l=document.documentElement.clientHeight+(s?0:t(document).scrollTop());return i.left-=this._get(e,"isRTL")?n-a:0,i.left-=s&&i.left===e.input.offset().left?t(document).scrollLeft():0,i.top-=s&&i.top===e.input.offset().top+r?t(document).scrollTop():0,i.left-=Math.min(i.left,i.left+n>h&&h>n?Math.abs(i.left+n-h):0),i.top-=Math.min(i.top,i.top+o>l&&l>o?Math.abs(o+r):0),i},_findPos:function(e){for(var i,s=this._getInst(e),n=this._get(s,"isRTL");e&&("hidden"===e.type||1!==e.nodeType||t.expr.filters.hidden(e));)e=e[n?"previousSibling":"nextSibling"];return i=t(e).offset(),[i.left,i.top]},_hideDatepicker:function(e){var i,s,n,o,a=this._curInst;!a||e&&a!==t.data(e,"datepicker")||this._datepickerShowing&&(i=this._get(a,"showAnim"),s=this._get(a,"duration"),n=function(){t.datepicker._tidyDialog(a)},t.effects&&(t.effects.effect[i]||t.effects[i])?a.dpDiv.hide(i,t.datepicker._get(a,"showOptions"),s,n):a.dpDiv["slideDown"===i?"slideUp":"fadeIn"===i?"fadeOut":"hide"](i?s:null,n),i||n(),this._datepickerShowing=!1,o=this._get(a,"onClose"),o&&o.apply(a.input?a.input[0]:null,[a.input?a.input.val():"",a]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),t.blockUI&&(t.unblockUI(),t("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(t){t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")},_checkExternalClick:function(e){if(t.datepicker._curInst){var i=t(e.target),s=t.datepicker._getInst(i[0]);(i[0].id!==t.datepicker._mainDivId&&0===i.parents("#"+t.datepicker._mainDivId).length&&!i.hasClass(t.datepicker.markerClassName)&&!i.closest("."+t.datepicker._triggerClass).length&&t.datepicker._datepickerShowing&&(!t.datepicker._inDialog||!t.blockUI)||i.hasClass(t.datepicker.markerClassName)&&t.datepicker._curInst!==s)&&t.datepicker._hideDatepicker()}},_adjustDate:function(e,i,s){var n=t(e),o=this._getInst(n[0]);this._isDisabledDatepicker(n[0])||(this._adjustInstDate(o,i+("M"===s?this._get(o,"showCurrentAtPos"):0),s),this._updateDatepicker(o))},_gotoToday:function(e){var i,s=t(e),n=this._getInst(s[0]);this._get(n,"gotoCurrent")&&n.currentDay?(n.selectedDay=n.currentDay,n.drawMonth=n.selectedMonth=n.currentMonth,n.drawYear=n.selectedYear=n.currentYear):(i=new Date,n.selectedDay=i.getDate(),n.drawMonth=n.selectedMonth=i.getMonth(),n.drawYear=n.selectedYear=i.getFullYear()),this._notifyChange(n),this._adjustDate(s)},_selectMonthYear:function(e,i,s){var n=t(e),o=this._getInst(n[0]);o["selected"+("M"===s?"Month":"Year")]=o["draw"+("M"===s?"Month":"Year")]=parseInt(i.options[i.selectedIndex].value,10),this._notifyChange(o),this._adjustDate(n)},_selectDay:function(e,i,s,n){var o,a=t(e);t(n).hasClass(this._unselectableClass)||this._isDisabledDatepicker(a[0])||(o=this._getInst(a[0]),o.selectedDay=o.currentDay=t("a",n).html(),o.selectedMonth=o.currentMonth=i,o.selectedYear=o.currentYear=s,this._selectDate(e,this._formatDate(o,o.currentDay,o.currentMonth,o.currentYear)))},_clearDate:function(e){var i=t(e);this._selectDate(i,"")},_selectDate:function(e,i){var s,n=t(e),o=this._getInst(n[0]);i=null!=i?i:this._formatDate(o),o.input&&o.input.val(i),this._updateAlternate(o),s=this._get(o,"onSelect"),s?s.apply(o.input?o.input[0]:null,[i,o]):o.input&&o.input.trigger("change"),o.inline?this._updateDatepicker(o):(this._hideDatepicker(),this._lastInput=o.input[0],"object"!=typeof o.input[0]&&o.input.trigger("focus"),this._lastInput=null)},_updateAlternate:function(e){var i,s,n,o=this._get(e,"altField");o&&(i=this._get(e,"altFormat")||this._get(e,"dateFormat"),s=this._getDate(e),n=this.formatDate(i,s,this._getFormatConfig(e)),t(o).val(n))},noWeekends:function(t){var e=t.getDay();return[e>0&&6>e,""]},iso8601Week:function(t){var e,i=new Date(t.getTime());return i.setDate(i.getDate()+4-(i.getDay()||7)),e=i.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((e-i)/864e5)/7)+1},parseDate:function(e,i,s){if(null==e||null==i)throw"Invalid arguments";if(i="object"==typeof i?""+i:i+"",""===i)return null;var n,o,a,r,h=0,l=(s?s.shortYearCutoff:null)||this._defaults.shortYearCutoff,c="string"!=typeof l?l:(new Date).getFullYear()%100+parseInt(l,10),u=(s?s.dayNamesShort:null)||this._defaults.dayNamesShort,d=(s?s.dayNames:null)||this._defaults.dayNames,p=(s?s.monthNamesShort:null)||this._defaults.monthNamesShort,f=(s?s.monthNames:null)||this._defaults.monthNames,g=-1,m=-1,_=-1,v=-1,b=!1,y=function(t){var i=e.length>n+1&&e.charAt(n+1)===t;return i&&n++,i},w=function(t){var e=y(t),s="@"===t?14:"!"===t?20:"y"===t&&e?4:"o"===t?3:2,n="y"===t?s:1,o=RegExp("^\\d{"+n+","+s+"}"),a=i.substring(h).match(o);if(!a)throw"Missing number at position "+h;return h+=a[0].length,parseInt(a[0],10)},k=function(e,s,n){var o=-1,a=t.map(y(e)?n:s,function(t,e){return[[e,t]]}).sort(function(t,e){return-(t[1].length-e[1].length)});if(t.each(a,function(t,e){var s=e[1];return i.substr(h,s.length).toLowerCase()===s.toLowerCase()?(o=e[0],h+=s.length,!1):void 0}),-1!==o)return o+1;throw"Unknown name at position "+h},x=function(){if(i.charAt(h)!==e.charAt(n))throw"Unexpected literal at position "+h;h++};for(n=0;e.length>n;n++)if(b)"'"!==e.charAt(n)||y("'")?x():b=!1;else switch(e.charAt(n)){case"d":_=w("d");break;case"D":k("D",u,d);break;case"o":v=w("o");break;case"m":m=w("m");break;case"M":m=k("M",p,f);break;case"y":g=w("y");break;case"@":r=new Date(w("@")),g=r.getFullYear(),m=r.getMonth()+1,_=r.getDate();break;case"!":r=new Date((w("!")-this._ticksTo1970)/1e4),g=r.getFullYear(),m=r.getMonth()+1,_=r.getDate();break;case"'":y("'")?x():b=!0;break;default:x()}if(i.length>h&&(a=i.substr(h),!/^\s+/.test(a)))throw"Extra/unparsed characters found in date: "+a;if(-1===g?g=(new Date).getFullYear():100>g&&(g+=(new Date).getFullYear()-(new Date).getFullYear()%100+(c>=g?0:-100)),v>-1)for(m=1,_=v;;){if(o=this._getDaysInMonth(g,m-1),o>=_)break;m++,_-=o}if(r=this._daylightSavingAdjust(new Date(g,m-1,_)),r.getFullYear()!==g||r.getMonth()+1!==m||r.getDate()!==_)throw"Invalid date";return r},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:1e7*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(t,e,i){if(!e)return"";var s,n=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,o=(i?i.dayNames:null)||this._defaults.dayNames,a=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,r=(i?i.monthNames:null)||this._defaults.monthNames,h=function(e){var i=t.length>s+1&&t.charAt(s+1)===e;return i&&s++,i},l=function(t,e,i){var s=""+e;if(h(t))for(;i>s.length;)s="0"+s;return s},c=function(t,e,i,s){return h(t)?s[e]:i[e]},u="",d=!1;if(e)for(s=0;t.length>s;s++)if(d)"'"!==t.charAt(s)||h("'")?u+=t.charAt(s):d=!1;else switch(t.charAt(s)){case"d":u+=l("d",e.getDate(),2);break;case"D":u+=c("D",e.getDay(),n,o);break;case"o":u+=l("o",Math.round((new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime()-new Date(e.getFullYear(),0,0).getTime())/864e5),3);break;case"m":u+=l("m",e.getMonth()+1,2);break;case"M":u+=c("M",e.getMonth(),a,r);break;case"y":u+=h("y")?e.getFullYear():(10>e.getFullYear()%100?"0":"")+e.getFullYear()%100;break;case"@":u+=e.getTime();break;case"!":u+=1e4*e.getTime()+this._ticksTo1970;break;case"'":h("'")?u+="'":d=!0;break;default:u+=t.charAt(s)}return u},_possibleChars:function(t){var e,i="",s=!1,n=function(i){var s=t.length>e+1&&t.charAt(e+1)===i;return s&&e++,s};for(e=0;t.length>e;e++)if(s)"'"!==t.charAt(e)||n("'")?i+=t.charAt(e):s=!1;else switch(t.charAt(e)){case"d":case"m":case"y":case"@":i+="0123456789";break;case"D":case"M":return null;case"'":n("'")?i+="'":s=!0;break;default:i+=t.charAt(e)}return i},_get:function(t,e){return void 0!==t.settings[e]?t.settings[e]:this._defaults[e]},_setDateFromField:function(t,e){if(t.input.val()!==t.lastVal){var i=this._get(t,"dateFormat"),s=t.lastVal=t.input?t.input.val():null,n=this._getDefaultDate(t),o=n,a=this._getFormatConfig(t);try{o=this.parseDate(i,s,a)||n}catch(r){s=e?"":s}t.selectedDay=o.getDate(),t.drawMonth=t.selectedMonth=o.getMonth(),t.drawYear=t.selectedYear=o.getFullYear(),t.currentDay=s?o.getDate():0,t.currentMonth=s?o.getMonth():0,t.currentYear=s?o.getFullYear():0,this._adjustInstDate(t)}},_getDefaultDate:function(t){return this._restrictMinMax(t,this._determineDate(t,this._get(t,"defaultDate"),new Date))},_determineDate:function(e,i,s){var n=function(t){var e=new Date;return e.setDate(e.getDate()+t),e},o=function(i){try{return t.datepicker.parseDate(t.datepicker._get(e,"dateFormat"),i,t.datepicker._getFormatConfig(e))}catch(s){}for(var n=(i.toLowerCase().match(/^c/)?t.datepicker._getDate(e):null)||new Date,o=n.getFullYear(),a=n.getMonth(),r=n.getDate(),h=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,l=h.exec(i);l;){switch(l[2]||"d"){case"d":case"D":r+=parseInt(l[1],10);break;case"w":case"W":r+=7*parseInt(l[1],10);break;case"m":case"M":a+=parseInt(l[1],10),r=Math.min(r,t.datepicker._getDaysInMonth(o,a));break;case"y":case"Y":o+=parseInt(l[1],10),r=Math.min(r,t.datepicker._getDaysInMonth(o,a))}l=h.exec(i)}return new Date(o,a,r)},a=null==i||""===i?s:"string"==typeof i?o(i):"number"==typeof i?isNaN(i)?s:n(i):new Date(i.getTime());return a=a&&"Invalid Date"==""+a?s:a,a&&(a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)),this._daylightSavingAdjust(a)},_daylightSavingAdjust:function(t){return t?(t.setHours(t.getHours()>12?t.getHours()+2:0),t):null},_setDate:function(t,e,i){var s=!e,n=t.selectedMonth,o=t.selectedYear,a=this._restrictMinMax(t,this._determineDate(t,e,new Date));t.selectedDay=t.currentDay=a.getDate(),t.drawMonth=t.selectedMonth=t.currentMonth=a.getMonth(),t.drawYear=t.selectedYear=t.currentYear=a.getFullYear(),n===t.selectedMonth&&o===t.selectedYear||i||this._notifyChange(t),this._adjustInstDate(t),t.input&&t.input.val(s?"":this._formatDate(t))},_getDate:function(t){var e=!t.currentYear||t.input&&""===t.input.val()?null:this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return e},_attachHandlers:function(e){var i=this._get(e,"stepMonths"),s="#"+e.id.replace(/\\\\/g,"\\");e.dpDiv.find("[data-handler]").map(function(){var e={prev:function(){t.datepicker._adjustDate(s,-i,"M")},next:function(){t.datepicker._adjustDate(s,+i,"M")},hide:function(){t.datepicker._hideDatepicker()},today:function(){t.datepicker._gotoToday(s)},selectDay:function(){return t.datepicker._selectDay(s,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return t.datepicker._selectMonthYear(s,this,"M"),!1},selectYear:function(){return t.datepicker._selectMonthYear(s,this,"Y"),!1}};t(this).on(this.getAttribute("data-event"),e[this.getAttribute("data-handler")])})},_generateHTML:function(t){var e,i,s,n,o,a,r,h,l,c,u,d,p,f,g,m,_,v,b,y,w,k,x,C,D,I,T,P,M,S,H,z,O,A,N,W,E,F,L,R=new Date,B=this._daylightSavingAdjust(new Date(R.getFullYear(),R.getMonth(),R.getDate())),Y=this._get(t,"isRTL"),j=this._get(t,"showButtonPanel"),q=this._get(t,"hideIfNoPrevNext"),K=this._get(t,"navigationAsDateFormat"),U=this._getNumberOfMonths(t),V=this._get(t,"showCurrentAtPos"),$=this._get(t,"stepMonths"),X=1!==U[0]||1!==U[1],G=this._daylightSavingAdjust(t.currentDay?new Date(t.currentYear,t.currentMonth,t.currentDay):new Date(9999,9,9)),Q=this._getMinMaxDate(t,"min"),J=this._getMinMaxDate(t,"max"),Z=t.drawMonth-V,te=t.drawYear;if(0>Z&&(Z+=12,te--),J)for(e=this._daylightSavingAdjust(new Date(J.getFullYear(),J.getMonth()-U[0]*U[1]+1,J.getDate())),e=Q&&Q>e?Q:e;this._daylightSavingAdjust(new Date(te,Z,1))>e;)Z--,0>Z&&(Z=11,te--);for(t.drawMonth=Z,t.drawYear=te,i=this._get(t,"prevText"),i=K?this.formatDate(i,this._daylightSavingAdjust(new Date(te,Z-$,1)),this._getFormatConfig(t)):i,s=this._canAdjustMonth(t,-1,te,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>":q?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>",n=this._get(t,"nextText"),n=K?this.formatDate(n,this._daylightSavingAdjust(new Date(te,Z+$,1)),this._getFormatConfig(t)):n,o=this._canAdjustMonth(t,1,te,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>":q?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>",a=this._get(t,"currentText"),r=this._get(t,"gotoCurrent")&&t.currentDay?G:B,a=K?this.formatDate(a,r,this._getFormatConfig(t)):a,h=t.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(t,"closeText")+"</button>",l=j?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(Y?h:"")+(this._isInRange(t,r)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+a+"</button>":"")+(Y?"":h)+"</div>":"",c=parseInt(this._get(t,"firstDay"),10),c=isNaN(c)?0:c,u=this._get(t,"showWeek"),d=this._get(t,"dayNames"),p=this._get(t,"dayNamesMin"),f=this._get(t,"monthNames"),g=this._get(t,"monthNamesShort"),m=this._get(t,"beforeShowDay"),_=this._get(t,"showOtherMonths"),v=this._get(t,"selectOtherMonths"),b=this._getDefaultDate(t),y="",k=0;U[0]>k;k++){for(x="",this.maxRows=4,C=0;U[1]>C;C++){if(D=this._daylightSavingAdjust(new Date(te,Z,t.selectedDay)),I=" ui-corner-all",T="",X){if(T+="<div class='ui-datepicker-group",U[1]>1)switch(C){case 0:T+=" ui-datepicker-group-first",I=" ui-corner-"+(Y?"right":"left");break;case U[1]-1:T+=" ui-datepicker-group-last",I=" ui-corner-"+(Y?"left":"right");break;default:T+=" ui-datepicker-group-middle",I=""}T+="'>"}for(T+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+I+"'>"+(/all|left/.test(I)&&0===k?Y?o:s:"")+(/all|right/.test(I)&&0===k?Y?s:o:"")+this._generateMonthYearHeader(t,Z,te,Q,J,k>0||C>0,f,g)+"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>",P=u?"<th class='ui-datepicker-week-col'>"+this._get(t,"weekHeader")+"</th>":"",w=0;7>w;w++)M=(w+c)%7,P+="<th scope='col'"+((w+c+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+d[M]+"'>"+p[M]+"</span></th>";for(T+=P+"</tr></thead><tbody>",S=this._getDaysInMonth(te,Z),te===t.selectedYear&&Z===t.selectedMonth&&(t.selectedDay=Math.min(t.selectedDay,S)),H=(this._getFirstDayOfMonth(te,Z)-c+7)%7,z=Math.ceil((H+S)/7),O=X?this.maxRows>z?this.maxRows:z:z,this.maxRows=O,A=this._daylightSavingAdjust(new Date(te,Z,1-H)),N=0;O>N;N++){for(T+="<tr>",W=u?"<td class='ui-datepicker-week-col'>"+this._get(t,"calculateWeek")(A)+"</td>":"",w=0;7>w;w++)E=m?m.apply(t.input?t.input[0]:null,[A]):[!0,""],F=A.getMonth()!==Z,L=F&&!v||!E[0]||Q&&Q>A||J&&A>J,W+="<td class='"+((w+c+6)%7>=5?" ui-datepicker-week-end":"")+(F?" ui-datepicker-other-month":"")+(A.getTime()===D.getTime()&&Z===t.selectedMonth&&t._keyEvent||b.getTime()===A.getTime()&&b.getTime()===D.getTime()?" "+this._dayOverClass:"")+(L?" "+this._unselectableClass+" ui-state-disabled":"")+(F&&!_?"":" "+E[1]+(A.getTime()===G.getTime()?" "+this._currentClass:"")+(A.getTime()===B.getTime()?" ui-datepicker-today":""))+"'"+(F&&!_||!E[2]?"":" title='"+E[2].replace(/'/g,"&#39;")+"'")+(L?"":" data-handler='selectDay' data-event='click' data-month='"+A.getMonth()+"' data-year='"+A.getFullYear()+"'")+">"+(F&&!_?"&#xa0;":L?"<span class='ui-state-default'>"+A.getDate()+"</span>":"<a class='ui-state-default"+(A.getTime()===B.getTime()?" ui-state-highlight":"")+(A.getTime()===G.getTime()?" ui-state-active":"")+(F?" ui-priority-secondary":"")+"' href='#'>"+A.getDate()+"</a>")+"</td>",A.setDate(A.getDate()+1),A=this._daylightSavingAdjust(A);T+=W+"</tr>"}Z++,Z>11&&(Z=0,te++),T+="</tbody></table>"+(X?"</div>"+(U[0]>0&&C===U[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),x+=T}y+=x}return y+=l,t._keyEvent=!1,y},_generateMonthYearHeader:function(t,e,i,s,n,o,a,r){var h,l,c,u,d,p,f,g,m=this._get(t,"changeMonth"),_=this._get(t,"changeYear"),v=this._get(t,"showMonthAfterYear"),b="<div class='ui-datepicker-title'>",y="";if(o||!m)y+="<span class='ui-datepicker-month'>"+a[e]+"</span>";else{for(h=s&&s.getFullYear()===i,l=n&&n.getFullYear()===i,y+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",c=0;12>c;c++)(!h||c>=s.getMonth())&&(!l||n.getMonth()>=c)&&(y+="<option value='"+c+"'"+(c===e?" selected='selected'":"")+">"+r[c]+"</option>");y+="</select>"}if(v||(b+=y+(!o&&m&&_?"":"&#xa0;")),!t.yearshtml)if(t.yearshtml="",o||!_)b+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(u=this._get(t,"yearRange").split(":"),d=(new Date).getFullYear(),p=function(t){var e=t.match(/c[+\-].*/)?i+parseInt(t.substring(1),10):t.match(/[+\-].*/)?d+parseInt(t,10):parseInt(t,10);return isNaN(e)?d:e},f=p(u[0]),g=Math.max(f,p(u[1]||"")),f=s?Math.max(f,s.getFullYear()):f,g=n?Math.min(g,n.getFullYear()):g,t.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";g>=f;f++)t.yearshtml+="<option value='"+f+"'"+(f===i?" selected='selected'":"")+">"+f+"</option>";t.yearshtml+="</select>",b+=t.yearshtml,t.yearshtml=null}return b+=this._get(t,"yearSuffix"),v&&(b+=(!o&&m&&_?"":"&#xa0;")+y),b+="</div>"},_adjustInstDate:function(t,e,i){var s=t.selectedYear+("Y"===i?e:0),n=t.selectedMonth+("M"===i?e:0),o=Math.min(t.selectedDay,this._getDaysInMonth(s,n))+("D"===i?e:0),a=this._restrictMinMax(t,this._daylightSavingAdjust(new Date(s,n,o)));t.selectedDay=a.getDate(),t.drawMonth=t.selectedMonth=a.getMonth(),t.drawYear=t.selectedYear=a.getFullYear(),("M"===i||"Y"===i)&&this._notifyChange(t)},_restrictMinMax:function(t,e){var i=this._getMinMaxDate(t,"min"),s=this._getMinMaxDate(t,"max"),n=i&&i>e?i:e;return s&&n>s?s:n},_notifyChange:function(t){var e=this._get(t,"onChangeMonthYear");e&&e.apply(t.input?t.input[0]:null,[t.selectedYear,t.selectedMonth+1,t])},_getNumberOfMonths:function(t){var e=this._get(t,"numberOfMonths");return null==e?[1,1]:"number"==typeof e?[1,e]:e},_getMinMaxDate:function(t,e){return this._determineDate(t,this._get(t,e+"Date"),null)},_getDaysInMonth:function(t,e){return 32-this._daylightSavingAdjust(new Date(t,e,32)).getDate()},_getFirstDayOfMonth:function(t,e){return new Date(t,e,1).getDay()},_canAdjustMonth:function(t,e,i,s){var n=this._getNumberOfMonths(t),o=this._daylightSavingAdjust(new Date(i,s+(0>e?e:n[0]*n[1]),1));return 0>e&&o.setDate(this._getDaysInMonth(o.getFullYear(),o.getMonth())),this._isInRange(t,o)},_isInRange:function(t,e){var i,s,n=this._getMinMaxDate(t,"min"),o=this._getMinMaxDate(t,"max"),a=null,r=null,h=this._get(t,"yearRange");return h&&(i=h.split(":"),s=(new Date).getFullYear(),a=parseInt(i[0],10),r=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(a+=s),i[1].match(/[+\-].*/)&&(r+=s)),(!n||e.getTime()>=n.getTime())&&(!o||e.getTime()<=o.getTime())&&(!a||e.getFullYear()>=a)&&(!r||r>=e.getFullYear())},_getFormatConfig:function(t){var e=this._get(t,"shortYearCutoff");return e="string"!=typeof e?e:(new Date).getFullYear()%100+parseInt(e,10),{shortYearCutoff:e,dayNamesShort:this._get(t,"dayNamesShort"),dayNames:this._get(t,"dayNames"),monthNamesShort:this._get(t,"monthNamesShort"),monthNames:this._get(t,"monthNames")}},_formatDate:function(t,e,i,s){e||(t.currentDay=t.selectedDay,t.currentMonth=t.selectedMonth,t.currentYear=t.selectedYear);var n=e?"object"==typeof e?e:this._daylightSavingAdjust(new Date(s,i,e)):this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return this.formatDate(this._get(t,"dateFormat"),n,this._getFormatConfig(t))}}),t.fn.datepicker=function(e){if(!this.length)return this;t.datepicker.initialized||(t(document).on("mousedown",t.datepicker._checkExternalClick),t.datepicker.initialized=!0),0===t("#"+t.datepicker._mainDivId).length&&t("body").append(t.datepicker.dpDiv);var i=Array.prototype.slice.call(arguments,1);return"string"!=typeof e||"isDisabled"!==e&&"getDate"!==e&&"widget"!==e?"option"===e&&2===arguments.length&&"string"==typeof arguments[1]?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i)):this.each(function(){"string"==typeof e?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this].concat(i)):t.datepicker._attachDatepicker(this,e)}):t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i))},t.datepicker=new s,t.datepicker.initialized=!1,t.datepicker.uuid=(new Date).getTime(),t.datepicker.version="1.12.1",t.datepicker,t.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());var _=!1;t(document).on("mouseup",function(){_=!1}),t.widget("ui.mouse",{version:"1.12.1",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.on("mousedown."+this.widgetName,function(t){return e._mouseDown(t)}).on("click."+this.widgetName,function(i){return!0===t.data(i.target,e.widgetName+".preventClickEvent")?(t.removeData(i.target,e.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.off("."+this.widgetName),this._mouseMoveDelegate&&this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(e){if(!_){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(e),this._mouseDownEvent=e;var i=this,s=1===e.which,n="string"==typeof this.options.cancel&&e.target.nodeName?t(e.target).closest(this.options.cancel).length:!1;return s&&!n&&this._mouseCapture(e)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){i.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(e)!==!1,!this._mouseStarted)?(e.preventDefault(),!0):(!0===t.data(e.target,this.widgetName+".preventClickEvent")&&t.removeData(e.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(t){return i._mouseMove(t)},this._mouseUpDelegate=function(t){return i._mouseUp(t)},this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate),e.preventDefault(),_=!0,!0)):!0}},_mouseMove:function(e){if(this._mouseMoved){if(t.ui.ie&&(!document.documentMode||9>document.documentMode)&&!e.button)return this._mouseUp(e);if(!e.which)if(e.originalEvent.altKey||e.originalEvent.ctrlKey||e.originalEvent.metaKey||e.originalEvent.shiftKey)this.ignoreMissingWhich=!0;else if(!this.ignoreMissingWhich)return this._mouseUp(e)}return(e.which||e.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(e),e.preventDefault()):(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,e)!==!1,this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)),!this._mouseStarted)},_mouseUp:function(e){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,e.target===this._mouseDownEvent.target&&t.data(e.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(e)),this._mouseDelayTimer&&(clearTimeout(this._mouseDelayTimer),delete this._mouseDelayTimer),this.ignoreMissingWhich=!1,_=!1,e.preventDefault()},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),t.ui.plugin={add:function(e,i,s){var n,o=t.ui[e].prototype;for(n in s)o.plugins[n]=o.plugins[n]||[],o.plugins[n].push([i,s[n]])},call:function(t,e,i,s){var n,o=t.plugins[e];if(o&&(s||t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType))for(n=0;o.length>n;n++)t.options[o[n][0]]&&o[n][1].apply(t.element,i)}},t.ui.safeBlur=function(e){e&&"body"!==e.nodeName.toLowerCase()&&t(e).trigger("blur")},t.widget("ui.draggable",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this._addClass("ui-draggable"),this._setHandleClassName(),this._mouseInit()},_setOption:function(t,e){this._super(t,e),"handle"===t&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){return(this.helper||this.element).is(".ui-draggable-dragging")?(this.destroyOnClear=!0,void 0):(this._removeHandleClassName(),this._mouseDestroy(),void 0)},_mouseCapture:function(e){var i=this.options;return this.helper||i.disabled||t(e.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(e),this.handle?(this._blurActiveElement(e),this._blockFrames(i.iframeFix===!0?"iframe":i.iframeFix),!0):!1)},_blockFrames:function(e){this.iframeBlocks=this.document.find(e).map(function(){var e=t(this);return t("<div>").css("position","absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(e){var i=t.ui.safeActiveElement(this.document[0]),s=t(e.target);s.closest(i).length||t.ui.safeBlur(i)},_mouseStart:function(e){var i=this.options;return this.helper=this._createHelper(e),this._addClass(this.helper,"ui-draggable-dragging"),this._cacheHelperProportions(),t.ui.ddmanager&&(t.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return"fixed"===t(this).css("position")}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(e),this.originalPosition=this.position=this._generatePosition(e,!1),this.originalPageX=e.pageX,this.originalPageY=e.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),this._trigger("start",e)===!1?(this._clear(),!1):(this._cacheHelperProportions(),t.ui.ddmanager&&!i.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this._mouseDrag(e,!0),t.ui.ddmanager&&t.ui.ddmanager.dragStart(this,e),!0)},_refreshOffsets:function(t){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:t.pageX-this.offset.left,top:t.pageY-this.offset.top}},_mouseDrag:function(e,i){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(e,!0),this.positionAbs=this._convertPositionTo("absolute"),!i){var s=this._uiHash();if(this._trigger("drag",e,s)===!1)return this._mouseUp(new t.Event("mouseup",e)),!1;this.position=s.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),!1},_mouseStop:function(e){var i=this,s=!1;return t.ui.ddmanager&&!this.options.dropBehaviour&&(s=t.ui.ddmanager.drop(this,e)),this.dropped&&(s=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!s||"valid"===this.options.revert&&s||this.options.revert===!0||t.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?t(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){i._trigger("stop",e)!==!1&&i._clear()}):this._trigger("stop",e)!==!1&&this._clear(),!1},_mouseUp:function(e){return this._unblockFrames(),t.ui.ddmanager&&t.ui.ddmanager.dragStop(this,e),this.handleElement.is(e.target)&&this.element.trigger("focus"),t.ui.mouse.prototype._mouseUp.call(this,e)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp(new t.Event("mouseup",{target:this.element[0]})):this._clear(),this},_getHandle:function(e){return this.options.handle?!!t(e.target).closest(this.element.find(this.options.handle)).length:!0},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this._addClass(this.handleElement,"ui-draggable-handle")},_removeHandleClassName:function(){this._removeClass(this.handleElement,"ui-draggable-handle")},_createHelper:function(e){var i=this.options,s=t.isFunction(i.helper),n=s?t(i.helper.apply(this.element[0],[e])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return n.parents("body").length||n.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),s&&n[0]===this.element[0]&&this._setPositionRelative(),n[0]===this.element[0]||/(fixed|absolute)/.test(n.css("position"))||n.css("position","absolute"),n},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_isRootNode:function(t){return/(html|body)/i.test(t.tagName)||t===this.document[0]},_getParentOffset:function(){var e=this.offsetParent.offset(),i=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==i&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var t=this.element.position(),e=this._isRootNode(this.scrollParent[0]);return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+(e?0:this.scrollParent.scrollTop()),left:t.left-(parseInt(this.helper.css("left"),10)||0)+(e?0:this.scrollParent.scrollLeft())}
},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,s,n=this.options,o=this.document[0];return this.relativeContainer=null,n.containment?"window"===n.containment?(this.containment=[t(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,t(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,t(window).scrollLeft()+t(window).width()-this.helperProportions.width-this.margins.left,t(window).scrollTop()+(t(window).height()||o.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):"document"===n.containment?(this.containment=[0,0,t(o).width()-this.helperProportions.width-this.margins.left,(t(o).height()||o.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):n.containment.constructor===Array?(this.containment=n.containment,void 0):("parent"===n.containment&&(n.containment=this.helper[0].parentNode),i=t(n.containment),s=i[0],s&&(e=/(scroll|auto)/.test(i.css("overflow")),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(e?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(e?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=i),void 0):(this.containment=null,void 0)},_convertPositionTo:function(t,e){e||(e=this.position);var i="absolute"===t?1:-1,s=this._isRootNode(this.scrollParent[0]);return{top:e.top+this.offset.relative.top*i+this.offset.parent.top*i-("fixed"===this.cssPosition?-this.offset.scroll.top:s?0:this.offset.scroll.top)*i,left:e.left+this.offset.relative.left*i+this.offset.parent.left*i-("fixed"===this.cssPosition?-this.offset.scroll.left:s?0:this.offset.scroll.left)*i}},_generatePosition:function(t,e){var i,s,n,o,a=this.options,r=this._isRootNode(this.scrollParent[0]),h=t.pageX,l=t.pageY;return r&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),e&&(this.containment&&(this.relativeContainer?(s=this.relativeContainer.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,t.pageX-this.offset.click.left<i[0]&&(h=i[0]+this.offset.click.left),t.pageY-this.offset.click.top<i[1]&&(l=i[1]+this.offset.click.top),t.pageX-this.offset.click.left>i[2]&&(h=i[2]+this.offset.click.left),t.pageY-this.offset.click.top>i[3]&&(l=i[3]+this.offset.click.top)),a.grid&&(n=a.grid[1]?this.originalPageY+Math.round((l-this.originalPageY)/a.grid[1])*a.grid[1]:this.originalPageY,l=i?n-this.offset.click.top>=i[1]||n-this.offset.click.top>i[3]?n:n-this.offset.click.top>=i[1]?n-a.grid[1]:n+a.grid[1]:n,o=a.grid[0]?this.originalPageX+Math.round((h-this.originalPageX)/a.grid[0])*a.grid[0]:this.originalPageX,h=i?o-this.offset.click.left>=i[0]||o-this.offset.click.left>i[2]?o:o-this.offset.click.left>=i[0]?o-a.grid[0]:o+a.grid[0]:o),"y"===a.axis&&(h=this.originalPageX),"x"===a.axis&&(l=this.originalPageY)),{top:l-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:r?0:this.offset.scroll.top),left:h-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:r?0:this.offset.scroll.left)}},_clear:function(){this._removeClass(this.helper,"ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_trigger:function(e,i,s){return s=s||this._uiHash(),t.ui.plugin.call(this,e,[i,s,this],!0),/^(drag|start|stop)/.test(e)&&(this.positionAbs=this._convertPositionTo("absolute"),s.offset=this.positionAbs),t.Widget.prototype._trigger.call(this,e,i,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),t.ui.plugin.add("draggable","connectToSortable",{start:function(e,i,s){var n=t.extend({},i,{item:s.element});s.sortables=[],t(s.options.connectToSortable).each(function(){var i=t(this).sortable("instance");i&&!i.options.disabled&&(s.sortables.push(i),i.refreshPositions(),i._trigger("activate",e,n))})},stop:function(e,i,s){var n=t.extend({},i,{item:s.element});s.cancelHelperRemoval=!1,t.each(s.sortables,function(){var t=this;t.isOver?(t.isOver=0,s.cancelHelperRemoval=!0,t.cancelHelperRemoval=!1,t._storedCSS={position:t.placeholder.css("position"),top:t.placeholder.css("top"),left:t.placeholder.css("left")},t._mouseStop(e),t.options.helper=t.options._helper):(t.cancelHelperRemoval=!0,t._trigger("deactivate",e,n))})},drag:function(e,i,s){t.each(s.sortables,function(){var n=!1,o=this;o.positionAbs=s.positionAbs,o.helperProportions=s.helperProportions,o.offset.click=s.offset.click,o._intersectsWith(o.containerCache)&&(n=!0,t.each(s.sortables,function(){return this.positionAbs=s.positionAbs,this.helperProportions=s.helperProportions,this.offset.click=s.offset.click,this!==o&&this._intersectsWith(this.containerCache)&&t.contains(o.element[0],this.element[0])&&(n=!1),n})),n?(o.isOver||(o.isOver=1,s._parent=i.helper.parent(),o.currentItem=i.helper.appendTo(o.element).data("ui-sortable-item",!0),o.options._helper=o.options.helper,o.options.helper=function(){return i.helper[0]},e.target=o.currentItem[0],o._mouseCapture(e,!0),o._mouseStart(e,!0,!0),o.offset.click.top=s.offset.click.top,o.offset.click.left=s.offset.click.left,o.offset.parent.left-=s.offset.parent.left-o.offset.parent.left,o.offset.parent.top-=s.offset.parent.top-o.offset.parent.top,s._trigger("toSortable",e),s.dropped=o.element,t.each(s.sortables,function(){this.refreshPositions()}),s.currentItem=s.element,o.fromOutside=s),o.currentItem&&(o._mouseDrag(e),i.position=o.position)):o.isOver&&(o.isOver=0,o.cancelHelperRemoval=!0,o.options._revert=o.options.revert,o.options.revert=!1,o._trigger("out",e,o._uiHash(o)),o._mouseStop(e,!0),o.options.revert=o.options._revert,o.options.helper=o.options._helper,o.placeholder&&o.placeholder.remove(),i.helper.appendTo(s._parent),s._refreshOffsets(e),i.position=s._generatePosition(e,!0),s._trigger("fromSortable",e),s.dropped=!1,t.each(s.sortables,function(){this.refreshPositions()}))})}}),t.ui.plugin.add("draggable","cursor",{start:function(e,i,s){var n=t("body"),o=s.options;n.css("cursor")&&(o._cursor=n.css("cursor")),n.css("cursor",o.cursor)},stop:function(e,i,s){var n=s.options;n._cursor&&t("body").css("cursor",n._cursor)}}),t.ui.plugin.add("draggable","opacity",{start:function(e,i,s){var n=t(i.helper),o=s.options;n.css("opacity")&&(o._opacity=n.css("opacity")),n.css("opacity",o.opacity)},stop:function(e,i,s){var n=s.options;n._opacity&&t(i.helper).css("opacity",n._opacity)}}),t.ui.plugin.add("draggable","scroll",{start:function(t,e,i){i.scrollParentNotHidden||(i.scrollParentNotHidden=i.helper.scrollParent(!1)),i.scrollParentNotHidden[0]!==i.document[0]&&"HTML"!==i.scrollParentNotHidden[0].tagName&&(i.overflowOffset=i.scrollParentNotHidden.offset())},drag:function(e,i,s){var n=s.options,o=!1,a=s.scrollParentNotHidden[0],r=s.document[0];a!==r&&"HTML"!==a.tagName?(n.axis&&"x"===n.axis||(s.overflowOffset.top+a.offsetHeight-e.pageY<n.scrollSensitivity?a.scrollTop=o=a.scrollTop+n.scrollSpeed:e.pageY-s.overflowOffset.top<n.scrollSensitivity&&(a.scrollTop=o=a.scrollTop-n.scrollSpeed)),n.axis&&"y"===n.axis||(s.overflowOffset.left+a.offsetWidth-e.pageX<n.scrollSensitivity?a.scrollLeft=o=a.scrollLeft+n.scrollSpeed:e.pageX-s.overflowOffset.left<n.scrollSensitivity&&(a.scrollLeft=o=a.scrollLeft-n.scrollSpeed))):(n.axis&&"x"===n.axis||(e.pageY-t(r).scrollTop()<n.scrollSensitivity?o=t(r).scrollTop(t(r).scrollTop()-n.scrollSpeed):t(window).height()-(e.pageY-t(r).scrollTop())<n.scrollSensitivity&&(o=t(r).scrollTop(t(r).scrollTop()+n.scrollSpeed))),n.axis&&"y"===n.axis||(e.pageX-t(r).scrollLeft()<n.scrollSensitivity?o=t(r).scrollLeft(t(r).scrollLeft()-n.scrollSpeed):t(window).width()-(e.pageX-t(r).scrollLeft())<n.scrollSensitivity&&(o=t(r).scrollLeft(t(r).scrollLeft()+n.scrollSpeed)))),o!==!1&&t.ui.ddmanager&&!n.dropBehaviour&&t.ui.ddmanager.prepareOffsets(s,e)}}),t.ui.plugin.add("draggable","snap",{start:function(e,i,s){var n=s.options;s.snapElements=[],t(n.snap.constructor!==String?n.snap.items||":data(ui-draggable)":n.snap).each(function(){var e=t(this),i=e.offset();this!==s.element[0]&&s.snapElements.push({item:this,width:e.outerWidth(),height:e.outerHeight(),top:i.top,left:i.left})})},drag:function(e,i,s){var n,o,a,r,h,l,c,u,d,p,f=s.options,g=f.snapTolerance,m=i.offset.left,_=m+s.helperProportions.width,v=i.offset.top,b=v+s.helperProportions.height;for(d=s.snapElements.length-1;d>=0;d--)h=s.snapElements[d].left-s.margins.left,l=h+s.snapElements[d].width,c=s.snapElements[d].top-s.margins.top,u=c+s.snapElements[d].height,h-g>_||m>l+g||c-g>b||v>u+g||!t.contains(s.snapElements[d].item.ownerDocument,s.snapElements[d].item)?(s.snapElements[d].snapping&&s.options.snap.release&&s.options.snap.release.call(s.element,e,t.extend(s._uiHash(),{snapItem:s.snapElements[d].item})),s.snapElements[d].snapping=!1):("inner"!==f.snapMode&&(n=g>=Math.abs(c-b),o=g>=Math.abs(u-v),a=g>=Math.abs(h-_),r=g>=Math.abs(l-m),n&&(i.position.top=s._convertPositionTo("relative",{top:c-s.helperProportions.height,left:0}).top),o&&(i.position.top=s._convertPositionTo("relative",{top:u,left:0}).top),a&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h-s.helperProportions.width}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l}).left)),p=n||o||a||r,"outer"!==f.snapMode&&(n=g>=Math.abs(c-v),o=g>=Math.abs(u-b),a=g>=Math.abs(h-m),r=g>=Math.abs(l-_),n&&(i.position.top=s._convertPositionTo("relative",{top:c,left:0}).top),o&&(i.position.top=s._convertPositionTo("relative",{top:u-s.helperProportions.height,left:0}).top),a&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l-s.helperProportions.width}).left)),!s.snapElements[d].snapping&&(n||o||a||r||p)&&s.options.snap.snap&&s.options.snap.snap.call(s.element,e,t.extend(s._uiHash(),{snapItem:s.snapElements[d].item})),s.snapElements[d].snapping=n||o||a||r||p)}}),t.ui.plugin.add("draggable","stack",{start:function(e,i,s){var n,o=s.options,a=t.makeArray(t(o.stack)).sort(function(e,i){return(parseInt(t(e).css("zIndex"),10)||0)-(parseInt(t(i).css("zIndex"),10)||0)});a.length&&(n=parseInt(t(a[0]).css("zIndex"),10)||0,t(a).each(function(e){t(this).css("zIndex",n+e)}),this.css("zIndex",n+a.length))}}),t.ui.plugin.add("draggable","zIndex",{start:function(e,i,s){var n=t(i.helper),o=s.options;n.css("zIndex")&&(o._zIndex=n.css("zIndex")),n.css("zIndex",o.zIndex)},stop:function(e,i,s){var n=s.options;n._zIndex&&t(i.helper).css("zIndex",n._zIndex)}}),t.ui.draggable,t.widget("ui.resizable",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,classes:{"ui-resizable-se":"ui-icon ui-icon-gripsmall-diagonal-se"},containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(t){return parseFloat(t)||0},_isNumber:function(t){return!isNaN(parseFloat(t))},_hasScroll:function(e,i){if("hidden"===t(e).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",n=!1;return e[s]>0?!0:(e[s]=1,n=e[s]>0,e[s]=0,n)},_create:function(){var e,i=this.options,s=this;this._addClass("ui-resizable"),t.extend(this,{_aspectRatio:!!i.aspectRatio,aspectRatio:i.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:i.helper||i.ghost||i.animate?i.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)&&(this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,e={marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom"),marginLeft:this.originalElement.css("marginLeft")},this.element.css(e),this.originalElement.css("margin",0),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css(e),this._proportionallyResize()),this._setupHandles(),i.autoHide&&t(this.element).on("mouseenter",function(){i.disabled||(s._removeClass("ui-resizable-autohide"),s._handles.show())}).on("mouseleave",function(){i.disabled||s.resizing||(s._addClass("ui-resizable-autohide"),s._handles.hide())}),this._mouseInit()},_destroy:function(){this._mouseDestroy();var e,i=function(e){t(e).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(i(this.element),e=this.element,this.originalElement.css({position:e.css("position"),width:e.outerWidth(),height:e.outerHeight(),top:e.css("top"),left:e.css("left")}).insertAfter(e),e.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this},_setOption:function(t,e){switch(this._super(t,e),t){case"handles":this._removeHandles(),this._setupHandles();break;default:}},_setupHandles:function(){var e,i,s,n,o,a=this.options,r=this;if(this.handles=a.handles||(t(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this._handles=t(),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),s=this.handles.split(","),this.handles={},i=0;s.length>i;i++)e=t.trim(s[i]),n="ui-resizable-"+e,o=t("<div>"),this._addClass(o,"ui-resizable-handle "+n),o.css({zIndex:a.zIndex}),this.handles[e]=".ui-resizable-"+e,this.element.append(o);this._renderAxis=function(e){var i,s,n,o;e=e||this.element;for(i in this.handles)this.handles[i].constructor===String?this.handles[i]=this.element.children(this.handles[i]).first().show():(this.handles[i].jquery||this.handles[i].nodeType)&&(this.handles[i]=t(this.handles[i]),this._on(this.handles[i],{mousedown:r._mouseDown})),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)&&(s=t(this.handles[i],this.element),o=/sw|ne|nw|se|n|s/.test(i)?s.outerHeight():s.outerWidth(),n=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),e.css(n,o),this._proportionallyResize()),this._handles=this._handles.add(this.handles[i])},this._renderAxis(this.element),this._handles=this._handles.add(this.element.find(".ui-resizable-handle")),this._handles.disableSelection(),this._handles.on("mouseover",function(){r.resizing||(this.className&&(o=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),r.axis=o&&o[1]?o[1]:"se")}),a.autoHide&&(this._handles.hide(),this._addClass("ui-resizable-autohide"))},_removeHandles:function(){this._handles.remove()},_mouseCapture:function(e){var i,s,n=!1;for(i in this.handles)s=t(this.handles[i])[0],(s===e.target||t.contains(s,e.target))&&(n=!0);return!this.options.disabled&&n},_mouseStart:function(e){var i,s,n,o=this.options,a=this.element;return this.resizing=!0,this._renderProxy(),i=this._num(this.helper.css("left")),s=this._num(this.helper.css("top")),o.containment&&(i+=t(o.containment).scrollLeft()||0,s+=t(o.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:i,top:s},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:a.width(),height:a.height()},this.originalSize=this._helper?{width:a.outerWidth(),height:a.outerHeight()}:{width:a.width(),height:a.height()},this.sizeDiff={width:a.outerWidth()-a.width(),height:a.outerHeight()-a.height()},this.originalPosition={left:i,top:s},this.originalMousePosition={left:e.pageX,top:e.pageY},this.aspectRatio="number"==typeof o.aspectRatio?o.aspectRatio:this.originalSize.width/this.originalSize.height||1,n=t(".ui-resizable-"+this.axis).css("cursor"),t("body").css("cursor","auto"===n?this.axis+"-resize":n),this._addClass("ui-resizable-resizing"),this._propagate("start",e),!0},_mouseDrag:function(e){var i,s,n=this.originalMousePosition,o=this.axis,a=e.pageX-n.left||0,r=e.pageY-n.top||0,h=this._change[o];return this._updatePrevProperties(),h?(i=h.apply(this,[e,a,r]),this._updateVirtualBoundaries(e.shiftKey),(this._aspectRatio||e.shiftKey)&&(i=this._updateRatio(i,e)),i=this._respectSize(i,e),this._updateCache(i),this._propagate("resize",e),s=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),t.isEmptyObject(s)||(this._updatePrevProperties(),this._trigger("resize",e,this.ui()),this._applyChanges()),!1):!1},_mouseStop:function(e){this.resizing=!1;var i,s,n,o,a,r,h,l=this.options,c=this;return this._helper&&(i=this._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),n=s&&this._hasScroll(i[0],"left")?0:c.sizeDiff.height,o=s?0:c.sizeDiff.width,a={width:c.helper.width()-o,height:c.helper.height()-n},r=parseFloat(c.element.css("left"))+(c.position.left-c.originalPosition.left)||null,h=parseFloat(c.element.css("top"))+(c.position.top-c.originalPosition.top)||null,l.animate||this.element.css(t.extend(a,{top:h,left:r})),c.helper.height(c.size.height),c.helper.width(c.size.width),this._helper&&!l.animate&&this._proportionallyResize()),t("body").css("cursor","auto"),this._removeClass("ui-resizable-resizing"),this._propagate("stop",e),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var t={};return this.position.top!==this.prevPosition.top&&(t.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(t.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(t.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(t.height=this.size.height+"px"),this.helper.css(t),t},_updateVirtualBoundaries:function(t){var e,i,s,n,o,a=this.options;o={minWidth:this._isNumber(a.minWidth)?a.minWidth:0,maxWidth:this._isNumber(a.maxWidth)?a.maxWidth:1/0,minHeight:this._isNumber(a.minHeight)?a.minHeight:0,maxHeight:this._isNumber(a.maxHeight)?a.maxHeight:1/0},(this._aspectRatio||t)&&(e=o.minHeight*this.aspectRatio,s=o.minWidth/this.aspectRatio,i=o.maxHeight*this.aspectRatio,n=o.maxWidth/this.aspectRatio,e>o.minWidth&&(o.minWidth=e),s>o.minHeight&&(o.minHeight=s),o.maxWidth>i&&(o.maxWidth=i),o.maxHeight>n&&(o.maxHeight=n)),this._vBoundaries=o},_updateCache:function(t){this.offset=this.helper.offset(),this._isNumber(t.left)&&(this.position.left=t.left),this._isNumber(t.top)&&(this.position.top=t.top),this._isNumber(t.height)&&(this.size.height=t.height),this._isNumber(t.width)&&(this.size.width=t.width)},_updateRatio:function(t){var e=this.position,i=this.size,s=this.axis;return this._isNumber(t.height)?t.width=t.height*this.aspectRatio:this._isNumber(t.width)&&(t.height=t.width/this.aspectRatio),"sw"===s&&(t.left=e.left+(i.width-t.width),t.top=null),"nw"===s&&(t.top=e.top+(i.height-t.height),t.left=e.left+(i.width-t.width)),t},_respectSize:function(t){var e=this._vBoundaries,i=this.axis,s=this._isNumber(t.width)&&e.maxWidth&&e.maxWidth<t.width,n=this._isNumber(t.height)&&e.maxHeight&&e.maxHeight<t.height,o=this._isNumber(t.width)&&e.minWidth&&e.minWidth>t.width,a=this._isNumber(t.height)&&e.minHeight&&e.minHeight>t.height,r=this.originalPosition.left+this.originalSize.width,h=this.originalPosition.top+this.originalSize.height,l=/sw|nw|w/.test(i),c=/nw|ne|n/.test(i);return o&&(t.width=e.minWidth),a&&(t.height=e.minHeight),s&&(t.width=e.maxWidth),n&&(t.height=e.maxHeight),o&&l&&(t.left=r-e.minWidth),s&&l&&(t.left=r-e.maxWidth),a&&c&&(t.top=h-e.minHeight),n&&c&&(t.top=h-e.maxHeight),t.width||t.height||t.left||!t.top?t.width||t.height||t.top||!t.left||(t.left=null):t.top=null,t},_getPaddingPlusBorderDimensions:function(t){for(var e=0,i=[],s=[t.css("borderTopWidth"),t.css("borderRightWidth"),t.css("borderBottomWidth"),t.css("borderLeftWidth")],n=[t.css("paddingTop"),t.css("paddingRight"),t.css("paddingBottom"),t.css("paddingLeft")];4>e;e++)i[e]=parseFloat(s[e])||0,i[e]+=parseFloat(n[e])||0;return{height:i[0]+i[2],width:i[1]+i[3]}},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var t,e=0,i=this.helper||this.element;this._proportionallyResizeElements.length>e;e++)t=this._proportionallyResizeElements[e],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(t)),t.css({height:i.height()-this.outerDimensions.height||0,width:i.width()-this.outerDimensions.width||0})},_renderProxy:function(){var e=this.element,i=this.options;this.elementOffset=e.offset(),this._helper?(this.helper=this.helper||t("<div style='overflow:hidden;'></div>"),this._addClass(this.helper,this._helper),this.helper.css({width:this.element.outerWidth(),height:this.element.outerHeight(),position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(t,e){return{width:this.originalSize.width+e}},w:function(t,e){var i=this.originalSize,s=this.originalPosition;return{left:s.left+e,width:i.width-e}},n:function(t,e,i){var s=this.originalSize,n=this.originalPosition;return{top:n.top+i,height:s.height-i}},s:function(t,e,i){return{height:this.originalSize.height+i}},se:function(e,i,s){return t.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[e,i,s]))},sw:function(e,i,s){return t.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[e,i,s]))},ne:function(e,i,s){return t.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[e,i,s]))},nw:function(e,i,s){return t.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[e,i,s]))}},_propagate:function(e,i){t.ui.plugin.call(this,e,[i,this.ui()]),"resize"!==e&&this._trigger(e,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),t.ui.plugin.add("resizable","animate",{stop:function(e){var i=t(this).resizable("instance"),s=i.options,n=i._proportionallyResizeElements,o=n.length&&/textarea/i.test(n[0].nodeName),a=o&&i._hasScroll(n[0],"left")?0:i.sizeDiff.height,r=o?0:i.sizeDiff.width,h={width:i.size.width-r,height:i.size.height-a},l=parseFloat(i.element.css("left"))+(i.position.left-i.originalPosition.left)||null,c=parseFloat(i.element.css("top"))+(i.position.top-i.originalPosition.top)||null;i.element.animate(t.extend(h,c&&l?{top:c,left:l}:{}),{duration:s.animateDuration,easing:s.animateEasing,step:function(){var s={width:parseFloat(i.element.css("width")),height:parseFloat(i.element.css("height")),top:parseFloat(i.element.css("top")),left:parseFloat(i.element.css("left"))};n&&n.length&&t(n[0]).css({width:s.width,height:s.height}),i._updateCache(s),i._propagate("resize",e)}})}}),t.ui.plugin.add("resizable","containment",{start:function(){var e,i,s,n,o,a,r,h=t(this).resizable("instance"),l=h.options,c=h.element,u=l.containment,d=u instanceof t?u.get(0):/parent/.test(u)?c.parent().get(0):u;d&&(h.containerElement=t(d),/document/.test(u)||u===document?(h.containerOffset={left:0,top:0},h.containerPosition={left:0,top:0},h.parentData={element:t(document),left:0,top:0,width:t(document).width(),height:t(document).height()||document.body.parentNode.scrollHeight}):(e=t(d),i=[],t(["Top","Right","Left","Bottom"]).each(function(t,s){i[t]=h._num(e.css("padding"+s))}),h.containerOffset=e.offset(),h.containerPosition=e.position(),h.containerSize={height:e.innerHeight()-i[3],width:e.innerWidth()-i[1]},s=h.containerOffset,n=h.containerSize.height,o=h.containerSize.width,a=h._hasScroll(d,"left")?d.scrollWidth:o,r=h._hasScroll(d)?d.scrollHeight:n,h.parentData={element:d,left:s.left,top:s.top,width:a,height:r}))},resize:function(e){var i,s,n,o,a=t(this).resizable("instance"),r=a.options,h=a.containerOffset,l=a.position,c=a._aspectRatio||e.shiftKey,u={top:0,left:0},d=a.containerElement,p=!0;d[0]!==document&&/static/.test(d.css("position"))&&(u=h),l.left<(a._helper?h.left:0)&&(a.size.width=a.size.width+(a._helper?a.position.left-h.left:a.position.left-u.left),c&&(a.size.height=a.size.width/a.aspectRatio,p=!1),a.position.left=r.helper?h.left:0),l.top<(a._helper?h.top:0)&&(a.size.height=a.size.height+(a._helper?a.position.top-h.top:a.position.top),c&&(a.size.width=a.size.height*a.aspectRatio,p=!1),a.position.top=a._helper?h.top:0),n=a.containerElement.get(0)===a.element.parent().get(0),o=/relative|absolute/.test(a.containerElement.css("position")),n&&o?(a.offset.left=a.parentData.left+a.position.left,a.offset.top=a.parentData.top+a.position.top):(a.offset.left=a.element.offset().left,a.offset.top=a.element.offset().top),i=Math.abs(a.sizeDiff.width+(a._helper?a.offset.left-u.left:a.offset.left-h.left)),s=Math.abs(a.sizeDiff.height+(a._helper?a.offset.top-u.top:a.offset.top-h.top)),i+a.size.width>=a.parentData.width&&(a.size.width=a.parentData.width-i,c&&(a.size.height=a.size.width/a.aspectRatio,p=!1)),s+a.size.height>=a.parentData.height&&(a.size.height=a.parentData.height-s,c&&(a.size.width=a.size.height*a.aspectRatio,p=!1)),p||(a.position.left=a.prevPosition.left,a.position.top=a.prevPosition.top,a.size.width=a.prevSize.width,a.size.height=a.prevSize.height)},stop:function(){var e=t(this).resizable("instance"),i=e.options,s=e.containerOffset,n=e.containerPosition,o=e.containerElement,a=t(e.helper),r=a.offset(),h=a.outerWidth()-e.sizeDiff.width,l=a.outerHeight()-e.sizeDiff.height;e._helper&&!i.animate&&/relative/.test(o.css("position"))&&t(this).css({left:r.left-n.left-s.left,width:h,height:l}),e._helper&&!i.animate&&/static/.test(o.css("position"))&&t(this).css({left:r.left-n.left-s.left,width:h,height:l})}}),t.ui.plugin.add("resizable","alsoResize",{start:function(){var e=t(this).resizable("instance"),i=e.options;t(i.alsoResize).each(function(){var e=t(this);e.data("ui-resizable-alsoresize",{width:parseFloat(e.width()),height:parseFloat(e.height()),left:parseFloat(e.css("left")),top:parseFloat(e.css("top"))})})},resize:function(e,i){var s=t(this).resizable("instance"),n=s.options,o=s.originalSize,a=s.originalPosition,r={height:s.size.height-o.height||0,width:s.size.width-o.width||0,top:s.position.top-a.top||0,left:s.position.left-a.left||0};t(n.alsoResize).each(function(){var e=t(this),s=t(this).data("ui-resizable-alsoresize"),n={},o=e.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];t.each(o,function(t,e){var i=(s[e]||0)+(r[e]||0);i&&i>=0&&(n[e]=i||null)}),e.css(n)})},stop:function(){t(this).removeData("ui-resizable-alsoresize")}}),t.ui.plugin.add("resizable","ghost",{start:function(){var e=t(this).resizable("instance"),i=e.size;e.ghost=e.originalElement.clone(),e.ghost.css({opacity:.25,display:"block",position:"relative",height:i.height,width:i.width,margin:0,left:0,top:0}),e._addClass(e.ghost,"ui-resizable-ghost"),t.uiBackCompat!==!1&&"string"==typeof e.options.ghost&&e.ghost.addClass(this.options.ghost),e.ghost.appendTo(e.helper)},resize:function(){var e=t(this).resizable("instance");e.ghost&&e.ghost.css({position:"relative",height:e.size.height,width:e.size.width})},stop:function(){var e=t(this).resizable("instance");e.ghost&&e.helper&&e.helper.get(0).removeChild(e.ghost.get(0))}}),t.ui.plugin.add("resizable","grid",{resize:function(){var e,i=t(this).resizable("instance"),s=i.options,n=i.size,o=i.originalSize,a=i.originalPosition,r=i.axis,h="number"==typeof s.grid?[s.grid,s.grid]:s.grid,l=h[0]||1,c=h[1]||1,u=Math.round((n.width-o.width)/l)*l,d=Math.round((n.height-o.height)/c)*c,p=o.width+u,f=o.height+d,g=s.maxWidth&&p>s.maxWidth,m=s.maxHeight&&f>s.maxHeight,_=s.minWidth&&s.minWidth>p,v=s.minHeight&&s.minHeight>f;s.grid=h,_&&(p+=l),v&&(f+=c),g&&(p-=l),m&&(f-=c),/^(se|s|e)$/.test(r)?(i.size.width=p,i.size.height=f):/^(ne)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.top=a.top-d):/^(sw)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.left=a.left-u):((0>=f-c||0>=p-l)&&(e=i._getPaddingPlusBorderDimensions(this)),f-c>0?(i.size.height=f,i.position.top=a.top-d):(f=c-e.height,i.size.height=f,i.position.top=a.top+o.height-f),p-l>0?(i.size.width=p,i.position.left=a.left-u):(p=l-e.width,i.size.width=p,i.position.left=a.left+o.width-p))}}),t.ui.resizable,t.widget("ui.dialog",{version:"1.12.1",options:{appendTo:"body",autoOpen:!0,buttons:[],classes:{"ui-dialog":"ui-corner-all","ui-dialog-titlebar":"ui-corner-all"},closeOnEscape:!0,closeText:"Close",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(e){var i=t(this).css(e).offset().top;0>i&&t(this).css("top",e.top-i)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),null==this.options.title&&null!=this.originalTitle&&(this.options.title=this.originalTitle),this.options.disabled&&(this.options.disabled=!1),this._createWrapper(),this.element.show().removeAttr("title").appendTo(this.uiDialog),this._addClass("ui-dialog-content","ui-widget-content"),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&t.fn.draggable&&this._makeDraggable(),this.options.resizable&&t.fn.resizable&&this._makeResizable(),this._isOpen=!1,this._trackFocus()},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var e=this.options.appendTo;return e&&(e.jquery||e.nodeType)?t(e):this.document.find(e||"body").eq(0)},_destroy:function(){var t,e=this.originalPosition;this._untrackInstance(),this._destroyOverlay(),this.element.removeUniqueId().css(this.originalCss).detach(),this.uiDialog.remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),t=e.parent.children().eq(e.index),t.length&&t[0]!==this.element[0]?t.before(this.element):e.parent.append(this.element)},widget:function(){return this.uiDialog
},disable:t.noop,enable:t.noop,close:function(e){var i=this;this._isOpen&&this._trigger("beforeClose",e)!==!1&&(this._isOpen=!1,this._focusedElement=null,this._destroyOverlay(),this._untrackInstance(),this.opener.filter(":focusable").trigger("focus").length||t.ui.safeBlur(t.ui.safeActiveElement(this.document[0])),this._hide(this.uiDialog,this.options.hide,function(){i._trigger("close",e)}))},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(e,i){var s=!1,n=this.uiDialog.siblings(".ui-front:visible").map(function(){return+t(this).css("z-index")}).get(),o=Math.max.apply(null,n);return o>=+this.uiDialog.css("z-index")&&(this.uiDialog.css("z-index",o+1),s=!0),s&&!i&&this._trigger("focus",e),s},open:function(){var e=this;return this._isOpen?(this._moveToTop()&&this._focusTabbable(),void 0):(this._isOpen=!0,this.opener=t(t.ui.safeActiveElement(this.document[0])),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this.overlay&&this.overlay.css("z-index",this.uiDialog.css("z-index")-1),this._show(this.uiDialog,this.options.show,function(){e._focusTabbable(),e._trigger("focus")}),this._makeFocusTarget(),this._trigger("open"),void 0)},_focusTabbable:function(){var t=this._focusedElement;t||(t=this.element.find("[autofocus]")),t.length||(t=this.element.find(":tabbable")),t.length||(t=this.uiDialogButtonPane.find(":tabbable")),t.length||(t=this.uiDialogTitlebarClose.filter(":tabbable")),t.length||(t=this.uiDialog),t.eq(0).trigger("focus")},_keepFocus:function(e){function i(){var e=t.ui.safeActiveElement(this.document[0]),i=this.uiDialog[0]===e||t.contains(this.uiDialog[0],e);i||this._focusTabbable()}e.preventDefault(),i.call(this),this._delay(i)},_createWrapper:function(){this.uiDialog=t("<div>").hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._addClass(this.uiDialog,"ui-dialog","ui-widget ui-widget-content ui-front"),this._on(this.uiDialog,{keydown:function(e){if(this.options.closeOnEscape&&!e.isDefaultPrevented()&&e.keyCode&&e.keyCode===t.ui.keyCode.ESCAPE)return e.preventDefault(),this.close(e),void 0;if(e.keyCode===t.ui.keyCode.TAB&&!e.isDefaultPrevented()){var i=this.uiDialog.find(":tabbable"),s=i.filter(":first"),n=i.filter(":last");e.target!==n[0]&&e.target!==this.uiDialog[0]||e.shiftKey?e.target!==s[0]&&e.target!==this.uiDialog[0]||!e.shiftKey||(this._delay(function(){n.trigger("focus")}),e.preventDefault()):(this._delay(function(){s.trigger("focus")}),e.preventDefault())}},mousedown:function(t){this._moveToTop(t)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var e;this.uiDialogTitlebar=t("<div>"),this._addClass(this.uiDialogTitlebar,"ui-dialog-titlebar","ui-widget-header ui-helper-clearfix"),this._on(this.uiDialogTitlebar,{mousedown:function(e){t(e.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.trigger("focus")}}),this.uiDialogTitlebarClose=t("<button type='button'></button>").button({label:t("<a>").text(this.options.closeText).html(),icon:"ui-icon-closethick",showLabel:!1}).appendTo(this.uiDialogTitlebar),this._addClass(this.uiDialogTitlebarClose,"ui-dialog-titlebar-close"),this._on(this.uiDialogTitlebarClose,{click:function(t){t.preventDefault(),this.close(t)}}),e=t("<span>").uniqueId().prependTo(this.uiDialogTitlebar),this._addClass(e,"ui-dialog-title"),this._title(e),this.uiDialogTitlebar.prependTo(this.uiDialog),this.uiDialog.attr({"aria-labelledby":e.attr("id")})},_title:function(t){this.options.title?t.text(this.options.title):t.html("&#160;")},_createButtonPane:function(){this.uiDialogButtonPane=t("<div>"),this._addClass(this.uiDialogButtonPane,"ui-dialog-buttonpane","ui-widget-content ui-helper-clearfix"),this.uiButtonSet=t("<div>").appendTo(this.uiDialogButtonPane),this._addClass(this.uiButtonSet,"ui-dialog-buttonset"),this._createButtons()},_createButtons:function(){var e=this,i=this.options.buttons;return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),t.isEmptyObject(i)||t.isArray(i)&&!i.length?(this._removeClass(this.uiDialog,"ui-dialog-buttons"),void 0):(t.each(i,function(i,s){var n,o;s=t.isFunction(s)?{click:s,text:i}:s,s=t.extend({type:"button"},s),n=s.click,o={icon:s.icon,iconPosition:s.iconPosition,showLabel:s.showLabel,icons:s.icons,text:s.text},delete s.click,delete s.icon,delete s.iconPosition,delete s.showLabel,delete s.icons,"boolean"==typeof s.text&&delete s.text,t("<button></button>",s).button(o).appendTo(e.uiButtonSet).on("click",function(){n.apply(e.element[0],arguments)})}),this._addClass(this.uiDialog,"ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog),void 0)},_makeDraggable:function(){function e(t){return{position:t.position,offset:t.offset}}var i=this,s=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(s,n){i._addClass(t(this),"ui-dialog-dragging"),i._blockFrames(),i._trigger("dragStart",s,e(n))},drag:function(t,s){i._trigger("drag",t,e(s))},stop:function(n,o){var a=o.offset.left-i.document.scrollLeft(),r=o.offset.top-i.document.scrollTop();s.position={my:"left top",at:"left"+(a>=0?"+":"")+a+" "+"top"+(r>=0?"+":"")+r,of:i.window},i._removeClass(t(this),"ui-dialog-dragging"),i._unblockFrames(),i._trigger("dragStop",n,e(o))}})},_makeResizable:function(){function e(t){return{originalPosition:t.originalPosition,originalSize:t.originalSize,position:t.position,size:t.size}}var i=this,s=this.options,n=s.resizable,o=this.uiDialog.css("position"),a="string"==typeof n?n:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:s.maxWidth,maxHeight:s.maxHeight,minWidth:s.minWidth,minHeight:this._minHeight(),handles:a,start:function(s,n){i._addClass(t(this),"ui-dialog-resizing"),i._blockFrames(),i._trigger("resizeStart",s,e(n))},resize:function(t,s){i._trigger("resize",t,e(s))},stop:function(n,o){var a=i.uiDialog.offset(),r=a.left-i.document.scrollLeft(),h=a.top-i.document.scrollTop();s.height=i.uiDialog.height(),s.width=i.uiDialog.width(),s.position={my:"left top",at:"left"+(r>=0?"+":"")+r+" "+"top"+(h>=0?"+":"")+h,of:i.window},i._removeClass(t(this),"ui-dialog-resizing"),i._unblockFrames(),i._trigger("resizeStop",n,e(o))}}).css("position",o)},_trackFocus:function(){this._on(this.widget(),{focusin:function(e){this._makeFocusTarget(),this._focusedElement=t(e.target)}})},_makeFocusTarget:function(){this._untrackInstance(),this._trackingInstances().unshift(this)},_untrackInstance:function(){var e=this._trackingInstances(),i=t.inArray(this,e);-1!==i&&e.splice(i,1)},_trackingInstances:function(){var t=this.document.data("ui-dialog-instances");return t||(t=[],this.document.data("ui-dialog-instances",t)),t},_minHeight:function(){var t=this.options;return"auto"===t.height?t.minHeight:Math.min(t.minHeight,t.height)},_position:function(){var t=this.uiDialog.is(":visible");t||this.uiDialog.show(),this.uiDialog.position(this.options.position),t||this.uiDialog.hide()},_setOptions:function(e){var i=this,s=!1,n={};t.each(e,function(t,e){i._setOption(t,e),t in i.sizeRelatedOptions&&(s=!0),t in i.resizableRelatedOptions&&(n[t]=e)}),s&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",n)},_setOption:function(e,i){var s,n,o=this.uiDialog;"disabled"!==e&&(this._super(e,i),"appendTo"===e&&this.uiDialog.appendTo(this._appendTo()),"buttons"===e&&this._createButtons(),"closeText"===e&&this.uiDialogTitlebarClose.button({label:t("<a>").text(""+this.options.closeText).html()}),"draggable"===e&&(s=o.is(":data(ui-draggable)"),s&&!i&&o.draggable("destroy"),!s&&i&&this._makeDraggable()),"position"===e&&this._position(),"resizable"===e&&(n=o.is(":data(ui-resizable)"),n&&!i&&o.resizable("destroy"),n&&"string"==typeof i&&o.resizable("option","handles",i),n||i===!1||this._makeResizable()),"title"===e&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var t,e,i,s=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),s.minWidth>s.width&&(s.width=s.minWidth),t=this.uiDialog.css({height:"auto",width:s.width}).outerHeight(),e=Math.max(0,s.minHeight-t),i="number"==typeof s.maxHeight?Math.max(0,s.maxHeight-t):"none","auto"===s.height?this.element.css({minHeight:e,maxHeight:i,height:"auto"}):this.element.height(Math.max(0,s.height-t)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var e=t(this);return t("<div>").css({position:"absolute",width:e.outerWidth(),height:e.outerHeight()}).appendTo(e.parent()).offset(e.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(e){return t(e.target).closest(".ui-dialog").length?!0:!!t(e.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var e=!0;this._delay(function(){e=!1}),this.document.data("ui-dialog-overlays")||this._on(this.document,{focusin:function(t){e||this._allowInteraction(t)||(t.preventDefault(),this._trackingInstances()[0]._focusTabbable())}}),this.overlay=t("<div>").appendTo(this._appendTo()),this._addClass(this.overlay,null,"ui-widget-overlay ui-front"),this._on(this.overlay,{mousedown:"_keepFocus"}),this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)}},_destroyOverlay:function(){if(this.options.modal&&this.overlay){var t=this.document.data("ui-dialog-overlays")-1;t?this.document.data("ui-dialog-overlays",t):(this._off(this.document,"focusin"),this.document.removeData("ui-dialog-overlays")),this.overlay.remove(),this.overlay=null}}}),t.uiBackCompat!==!1&&t.widget("ui.dialog",t.ui.dialog,{options:{dialogClass:""},_createWrapper:function(){this._super(),this.uiDialog.addClass(this.options.dialogClass)},_setOption:function(t,e){"dialogClass"===t&&this.uiDialog.removeClass(this.options.dialogClass).addClass(e),this._superApply(arguments)}}),t.ui.dialog,t.widget("ui.droppable",{version:"1.12.1",widgetEventPrefix:"drop",options:{accept:"*",addClasses:!0,greedy:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var e,i=this.options,s=i.accept;this.isover=!1,this.isout=!0,this.accept=t.isFunction(s)?s:function(t){return t.is(s)},this.proportions=function(){return arguments.length?(e=arguments[0],void 0):e?e:e={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}},this._addToManager(i.scope),i.addClasses&&this._addClass("ui-droppable")},_addToManager:function(e){t.ui.ddmanager.droppables[e]=t.ui.ddmanager.droppables[e]||[],t.ui.ddmanager.droppables[e].push(this)},_splice:function(t){for(var e=0;t.length>e;e++)t[e]===this&&t.splice(e,1)},_destroy:function(){var e=t.ui.ddmanager.droppables[this.options.scope];this._splice(e)},_setOption:function(e,i){if("accept"===e)this.accept=t.isFunction(i)?i:function(t){return t.is(i)};else if("scope"===e){var s=t.ui.ddmanager.droppables[this.options.scope];this._splice(s),this._addToManager(i)}this._super(e,i)},_activate:function(e){var i=t.ui.ddmanager.current;this._addActiveClass(),i&&this._trigger("activate",e,this.ui(i))},_deactivate:function(e){var i=t.ui.ddmanager.current;this._removeActiveClass(),i&&this._trigger("deactivate",e,this.ui(i))},_over:function(e){var i=t.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this._addHoverClass(),this._trigger("over",e,this.ui(i)))},_out:function(e){var i=t.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this._removeHoverClass(),this._trigger("out",e,this.ui(i)))},_drop:function(e,i){var s=i||t.ui.ddmanager.current,n=!1;return s&&(s.currentItem||s.element)[0]!==this.element[0]?(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var i=t(this).droppable("instance");return i.options.greedy&&!i.options.disabled&&i.options.scope===s.options.scope&&i.accept.call(i.element[0],s.currentItem||s.element)&&v(s,t.extend(i,{offset:i.element.offset()}),i.options.tolerance,e)?(n=!0,!1):void 0}),n?!1:this.accept.call(this.element[0],s.currentItem||s.element)?(this._removeActiveClass(),this._removeHoverClass(),this._trigger("drop",e,this.ui(s)),this.element):!1):!1},ui:function(t){return{draggable:t.currentItem||t.element,helper:t.helper,position:t.position,offset:t.positionAbs}},_addHoverClass:function(){this._addClass("ui-droppable-hover")},_removeHoverClass:function(){this._removeClass("ui-droppable-hover")},_addActiveClass:function(){this._addClass("ui-droppable-active")},_removeActiveClass:function(){this._removeClass("ui-droppable-active")}});var v=t.ui.intersect=function(){function t(t,e,i){return t>=e&&e+i>t}return function(e,i,s,n){if(!i.offset)return!1;var o=(e.positionAbs||e.position.absolute).left+e.margins.left,a=(e.positionAbs||e.position.absolute).top+e.margins.top,r=o+e.helperProportions.width,h=a+e.helperProportions.height,l=i.offset.left,c=i.offset.top,u=l+i.proportions().width,d=c+i.proportions().height;switch(s){case"fit":return o>=l&&u>=r&&a>=c&&d>=h;case"intersect":return o+e.helperProportions.width/2>l&&u>r-e.helperProportions.width/2&&a+e.helperProportions.height/2>c&&d>h-e.helperProportions.height/2;case"pointer":return t(n.pageY,c,i.proportions().height)&&t(n.pageX,l,i.proportions().width);case"touch":return(a>=c&&d>=a||h>=c&&d>=h||c>a&&h>d)&&(o>=l&&u>=o||r>=l&&u>=r||l>o&&r>u);default:return!1}}}();t.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(e,i){var s,n,o=t.ui.ddmanager.droppables[e.options.scope]||[],a=i?i.type:null,r=(e.currentItem||e.element).find(":data(ui-droppable)").addBack();t:for(s=0;o.length>s;s++)if(!(o[s].options.disabled||e&&!o[s].accept.call(o[s].element[0],e.currentItem||e.element))){for(n=0;r.length>n;n++)if(r[n]===o[s].element[0]){o[s].proportions().height=0;continue t}o[s].visible="none"!==o[s].element.css("display"),o[s].visible&&("mousedown"===a&&o[s]._activate.call(o[s],i),o[s].offset=o[s].element.offset(),o[s].proportions({width:o[s].element[0].offsetWidth,height:o[s].element[0].offsetHeight}))}},drop:function(e,i){var s=!1;return t.each((t.ui.ddmanager.droppables[e.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&v(e,this,this.options.tolerance,i)&&(s=this._drop.call(this,i)||s),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],e.currentItem||e.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,i)))}),s},dragStart:function(e,i){e.element.parentsUntil("body").on("scroll.droppable",function(){e.options.refreshPositions||t.ui.ddmanager.prepareOffsets(e,i)})},drag:function(e,i){e.options.refreshPositions&&t.ui.ddmanager.prepareOffsets(e,i),t.each(t.ui.ddmanager.droppables[e.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var s,n,o,a=v(e,this,this.options.tolerance,i),r=!a&&this.isover?"isout":a&&!this.isover?"isover":null;r&&(this.options.greedy&&(n=this.options.scope,o=this.element.parents(":data(ui-droppable)").filter(function(){return t(this).droppable("instance").options.scope===n}),o.length&&(s=t(o[0]).droppable("instance"),s.greedyChild="isover"===r)),s&&"isover"===r&&(s.isover=!1,s.isout=!0,s._out.call(s,i)),this[r]=!0,this["isout"===r?"isover":"isout"]=!1,this["isover"===r?"_over":"_out"].call(this,i),s&&"isout"===r&&(s.isout=!1,s.isover=!0,s._over.call(s,i)))}})},dragStop:function(e,i){e.element.parentsUntil("body").off("scroll.droppable"),e.options.refreshPositions||t.ui.ddmanager.prepareOffsets(e,i)}},t.uiBackCompat!==!1&&t.widget("ui.droppable",t.ui.droppable,{options:{hoverClass:!1,activeClass:!1},_addActiveClass:function(){this._super(),this.options.activeClass&&this.element.addClass(this.options.activeClass)},_removeActiveClass:function(){this._super(),this.options.activeClass&&this.element.removeClass(this.options.activeClass)},_addHoverClass:function(){this._super(),this.options.hoverClass&&this.element.addClass(this.options.hoverClass)},_removeHoverClass:function(){this._super(),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass)}}),t.ui.droppable,t.widget("ui.progressbar",{version:"1.12.1",options:{classes:{"ui-progressbar":"ui-corner-all","ui-progressbar-value":"ui-corner-left","ui-progressbar-complete":"ui-corner-right"},max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue(),this.element.attr({role:"progressbar","aria-valuemin":this.min}),this._addClass("ui-progressbar","ui-widget ui-widget-content"),this.valueDiv=t("<div>").appendTo(this.element),this._addClass(this.valueDiv,"ui-progressbar-value","ui-widget-header"),this._refreshValue()},_destroy:function(){this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"),this.valueDiv.remove()},value:function(t){return void 0===t?this.options.value:(this.options.value=this._constrainedValue(t),this._refreshValue(),void 0)},_constrainedValue:function(t){return void 0===t&&(t=this.options.value),this.indeterminate=t===!1,"number"!=typeof t&&(t=0),this.indeterminate?!1:Math.min(this.options.max,Math.max(this.min,t))},_setOptions:function(t){var e=t.value;delete t.value,this._super(t),this.options.value=this._constrainedValue(e),this._refreshValue()},_setOption:function(t,e){"max"===t&&(e=Math.max(this.min,e)),this._super(t,e)},_setOptionDisabled:function(t){this._super(t),this.element.attr("aria-disabled",t),this._toggleClass(null,"ui-state-disabled",!!t)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var e=this.options.value,i=this._percentage();this.valueDiv.toggle(this.indeterminate||e>this.min).width(i.toFixed(0)+"%"),this._toggleClass(this.valueDiv,"ui-progressbar-complete",null,e===this.options.max)._toggleClass("ui-progressbar-indeterminate",null,this.indeterminate),this.indeterminate?(this.element.removeAttr("aria-valuenow"),this.overlayDiv||(this.overlayDiv=t("<div>").appendTo(this.valueDiv),this._addClass(this.overlayDiv,"ui-progressbar-overlay"))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":e}),this.overlayDiv&&(this.overlayDiv.remove(),this.overlayDiv=null)),this.oldValue!==e&&(this.oldValue=e,this._trigger("change")),e===this.options.max&&this._trigger("complete")}}),t.widget("ui.selectable",t.ui.mouse,{version:"1.12.1",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var e=this;this._addClass("ui-selectable"),this.dragged=!1,this.refresh=function(){e.elementPos=t(e.element[0]).offset(),e.selectees=t(e.options.filter,e.element[0]),e._addClass(e.selectees,"ui-selectee"),e.selectees.each(function(){var i=t(this),s=i.offset(),n={left:s.left-e.elementPos.left,top:s.top-e.elementPos.top};t.data(this,"selectable-item",{element:this,$element:i,left:n.left,top:n.top,right:n.left+i.outerWidth(),bottom:n.top+i.outerHeight(),startselected:!1,selected:i.hasClass("ui-selected"),selecting:i.hasClass("ui-selecting"),unselecting:i.hasClass("ui-unselecting")})})},this.refresh(),this._mouseInit(),this.helper=t("<div>"),this._addClass(this.helper,"ui-selectable-helper")},_destroy:function(){this.selectees.removeData("selectable-item"),this._mouseDestroy()},_mouseStart:function(e){var i=this,s=this.options;this.opos=[e.pageX,e.pageY],this.elementPos=t(this.element[0]).offset(),this.options.disabled||(this.selectees=t(s.filter,this.element[0]),this._trigger("start",e),t(s.appendTo).append(this.helper),this.helper.css({left:e.pageX,top:e.pageY,width:0,height:0}),s.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var s=t.data(this,"selectable-item");s.startselected=!0,e.metaKey||e.ctrlKey||(i._removeClass(s.$element,"ui-selected"),s.selected=!1,i._addClass(s.$element,"ui-unselecting"),s.unselecting=!0,i._trigger("unselecting",e,{unselecting:s.element}))}),t(e.target).parents().addBack().each(function(){var s,n=t.data(this,"selectable-item");return n?(s=!e.metaKey&&!e.ctrlKey||!n.$element.hasClass("ui-selected"),i._removeClass(n.$element,s?"ui-unselecting":"ui-selected")._addClass(n.$element,s?"ui-selecting":"ui-unselecting"),n.unselecting=!s,n.selecting=s,n.selected=s,s?i._trigger("selecting",e,{selecting:n.element}):i._trigger("unselecting",e,{unselecting:n.element}),!1):void 0}))},_mouseDrag:function(e){if(this.dragged=!0,!this.options.disabled){var i,s=this,n=this.options,o=this.opos[0],a=this.opos[1],r=e.pageX,h=e.pageY;return o>r&&(i=r,r=o,o=i),a>h&&(i=h,h=a,a=i),this.helper.css({left:o,top:a,width:r-o,height:h-a}),this.selectees.each(function(){var i=t.data(this,"selectable-item"),l=!1,c={};i&&i.element!==s.element[0]&&(c.left=i.left+s.elementPos.left,c.right=i.right+s.elementPos.left,c.top=i.top+s.elementPos.top,c.bottom=i.bottom+s.elementPos.top,"touch"===n.tolerance?l=!(c.left>r||o>c.right||c.top>h||a>c.bottom):"fit"===n.tolerance&&(l=c.left>o&&r>c.right&&c.top>a&&h>c.bottom),l?(i.selected&&(s._removeClass(i.$element,"ui-selected"),i.selected=!1),i.unselecting&&(s._removeClass(i.$element,"ui-unselecting"),i.unselecting=!1),i.selecting||(s._addClass(i.$element,"ui-selecting"),i.selecting=!0,s._trigger("selecting",e,{selecting:i.element}))):(i.selecting&&((e.metaKey||e.ctrlKey)&&i.startselected?(s._removeClass(i.$element,"ui-selecting"),i.selecting=!1,s._addClass(i.$element,"ui-selected"),i.selected=!0):(s._removeClass(i.$element,"ui-selecting"),i.selecting=!1,i.startselected&&(s._addClass(i.$element,"ui-unselecting"),i.unselecting=!0),s._trigger("unselecting",e,{unselecting:i.element}))),i.selected&&(e.metaKey||e.ctrlKey||i.startselected||(s._removeClass(i.$element,"ui-selected"),i.selected=!1,s._addClass(i.$element,"ui-unselecting"),i.unselecting=!0,s._trigger("unselecting",e,{unselecting:i.element})))))}),!1}},_mouseStop:function(e){var i=this;return this.dragged=!1,t(".ui-unselecting",this.element[0]).each(function(){var s=t.data(this,"selectable-item");i._removeClass(s.$element,"ui-unselecting"),s.unselecting=!1,s.startselected=!1,i._trigger("unselected",e,{unselected:s.element})}),t(".ui-selecting",this.element[0]).each(function(){var s=t.data(this,"selectable-item");i._removeClass(s.$element,"ui-selecting")._addClass(s.$element,"ui-selected"),s.selecting=!1,s.selected=!0,s.startselected=!0,i._trigger("selected",e,{selected:s.element})}),this._trigger("stop",e),this.helper.remove(),!1}}),t.widget("ui.selectmenu",[t.ui.formResetMixin,{version:"1.12.1",defaultElement:"<select>",options:{appendTo:null,classes:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"},disabled:null,icons:{button:"ui-icon-triangle-1-s"},position:{my:"left top",at:"left bottom",collision:"none"},width:!1,change:null,close:null,focus:null,open:null,select:null},_create:function(){var e=this.element.uniqueId().attr("id");this.ids={element:e,button:e+"-button",menu:e+"-menu"},this._drawButton(),this._drawMenu(),this._bindFormResetHandler(),this._rendered=!1,this.menuItems=t()},_drawButton:function(){var e,i=this,s=this._parseOption(this.element.find("option:selected"),this.element[0].selectedIndex);this.labels=this.element.labels().attr("for",this.ids.button),this._on(this.labels,{click:function(t){this.button.focus(),t.preventDefault()}}),this.element.hide(),this.button=t("<span>",{tabindex:this.options.disabled?-1:0,id:this.ids.button,role:"combobox","aria-expanded":"false","aria-autocomplete":"list","aria-owns":this.ids.menu,"aria-haspopup":"true",title:this.element.attr("title")}).insertAfter(this.element),this._addClass(this.button,"ui-selectmenu-button ui-selectmenu-button-closed","ui-button ui-widget"),e=t("<span>").appendTo(this.button),this._addClass(e,"ui-selectmenu-icon","ui-icon "+this.options.icons.button),this.buttonItem=this._renderButtonItem(s).appendTo(this.button),this.options.width!==!1&&this._resizeButton(),this._on(this.button,this._buttonEvents),this.button.one("focusin",function(){i._rendered||i._refreshMenu()})},_drawMenu:function(){var e=this;this.menu=t("<ul>",{"aria-hidden":"true","aria-labelledby":this.ids.button,id:this.ids.menu}),this.menuWrap=t("<div>").append(this.menu),this._addClass(this.menuWrap,"ui-selectmenu-menu","ui-front"),this.menuWrap.appendTo(this._appendTo()),this.menuInstance=this.menu.menu({classes:{"ui-menu":"ui-corner-bottom"},role:"listbox",select:function(t,i){t.preventDefault(),e._setSelection(),e._select(i.item.data("ui-selectmenu-item"),t)},focus:function(t,i){var s=i.item.data("ui-selectmenu-item");null!=e.focusIndex&&s.index!==e.focusIndex&&(e._trigger("focus",t,{item:s}),e.isOpen||e._select(s,t)),e.focusIndex=s.index,e.button.attr("aria-activedescendant",e.menuItems.eq(s.index).attr("id"))}}).menu("instance"),this.menuInstance._off(this.menu,"mouseleave"),this.menuInstance._closeOnDocumentClick=function(){return!1},this.menuInstance._isDivider=function(){return!1}},refresh:function(){this._refreshMenu(),this.buttonItem.replaceWith(this.buttonItem=this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item")||{})),null===this.options.width&&this._resizeButton()},_refreshMenu:function(){var t,e=this.element.find("option");this.menu.empty(),this._parseOptions(e),this._renderMenu(this.menu,this.items),this.menuInstance.refresh(),this.menuItems=this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"),this._rendered=!0,e.length&&(t=this._getSelectedItem(),this.menuInstance.focus(null,t),this._setAria(t.data("ui-selectmenu-item")),this._setOption("disabled",this.element.prop("disabled")))},open:function(t){this.options.disabled||(this._rendered?(this._removeClass(this.menu.find(".ui-state-active"),null,"ui-state-active"),this.menuInstance.focus(null,this._getSelectedItem())):this._refreshMenu(),this.menuItems.length&&(this.isOpen=!0,this._toggleAttr(),this._resizeMenu(),this._position(),this._on(this.document,this._documentClick),this._trigger("open",t)))},_position:function(){this.menuWrap.position(t.extend({of:this.button},this.options.position))},close:function(t){this.isOpen&&(this.isOpen=!1,this._toggleAttr(),this.range=null,this._off(this.document),this._trigger("close",t))},widget:function(){return this.button},menuWidget:function(){return this.menu},_renderButtonItem:function(e){var i=t("<span>");return this._setText(i,e.label),this._addClass(i,"ui-selectmenu-text"),i},_renderMenu:function(e,i){var s=this,n="";t.each(i,function(i,o){var a;o.optgroup!==n&&(a=t("<li>",{text:o.optgroup}),s._addClass(a,"ui-selectmenu-optgroup","ui-menu-divider"+(o.element.parent("optgroup").prop("disabled")?" ui-state-disabled":"")),a.appendTo(e),n=o.optgroup),s._renderItemData(e,o)})},_renderItemData:function(t,e){return this._renderItem(t,e).data("ui-selectmenu-item",e)},_renderItem:function(e,i){var s=t("<li>"),n=t("<div>",{title:i.element.attr("title")});return i.disabled&&this._addClass(s,null,"ui-state-disabled"),this._setText(n,i.label),s.append(n).appendTo(e)},_setText:function(t,e){e?t.text(e):t.html("&#160;")},_move:function(t,e){var i,s,n=".ui-menu-item";this.isOpen?i=this.menuItems.eq(this.focusIndex).parent("li"):(i=this.menuItems.eq(this.element[0].selectedIndex).parent("li"),n+=":not(.ui-state-disabled)"),s="first"===t||"last"===t?i["first"===t?"prevAll":"nextAll"](n).eq(-1):i[t+"All"](n).eq(0),s.length&&this.menuInstance.focus(e,s)},_getSelectedItem:function(){return this.menuItems.eq(this.element[0].selectedIndex).parent("li")},_toggle:function(t){this[this.isOpen?"close":"open"](t)},_setSelection:function(){var t;this.range&&(window.getSelection?(t=window.getSelection(),t.removeAllRanges(),t.addRange(this.range)):this.range.select(),this.button.focus())},_documentClick:{mousedown:function(e){this.isOpen&&(t(e.target).closest(".ui-selectmenu-menu, #"+t.ui.escapeSelector(this.ids.button)).length||this.close(e))}},_buttonEvents:{mousedown:function(){var t;window.getSelection?(t=window.getSelection(),t.rangeCount&&(this.range=t.getRangeAt(0))):this.range=document.selection.createRange()},click:function(t){this._setSelection(),this._toggle(t)},keydown:function(e){var i=!0;switch(e.keyCode){case t.ui.keyCode.TAB:case t.ui.keyCode.ESCAPE:this.close(e),i=!1;break;case t.ui.keyCode.ENTER:this.isOpen&&this._selectFocusedItem(e);break;case t.ui.keyCode.UP:e.altKey?this._toggle(e):this._move("prev",e);break;case t.ui.keyCode.DOWN:e.altKey?this._toggle(e):this._move("next",e);break;case t.ui.keyCode.SPACE:this.isOpen?this._selectFocusedItem(e):this._toggle(e);break;case t.ui.keyCode.LEFT:this._move("prev",e);break;case t.ui.keyCode.RIGHT:this._move("next",e);break;case t.ui.keyCode.HOME:case t.ui.keyCode.PAGE_UP:this._move("first",e);break;case t.ui.keyCode.END:case t.ui.keyCode.PAGE_DOWN:this._move("last",e);break;default:this.menu.trigger(e),i=!1}i&&e.preventDefault()}},_selectFocusedItem:function(t){var e=this.menuItems.eq(this.focusIndex).parent("li");e.hasClass("ui-state-disabled")||this._select(e.data("ui-selectmenu-item"),t)},_select:function(t,e){var i=this.element[0].selectedIndex;this.element[0].selectedIndex=t.index,this.buttonItem.replaceWith(this.buttonItem=this._renderButtonItem(t)),this._setAria(t),this._trigger("select",e,{item:t}),t.index!==i&&this._trigger("change",e,{item:t}),this.close(e)},_setAria:function(t){var e=this.menuItems.eq(t.index).attr("id");this.button.attr({"aria-labelledby":e,"aria-activedescendant":e}),this.menu.attr("aria-activedescendant",e)},_setOption:function(t,e){if("icons"===t){var i=this.button.find("span.ui-icon");this._removeClass(i,null,this.options.icons.button)._addClass(i,null,e.button)}this._super(t,e),"appendTo"===t&&this.menuWrap.appendTo(this._appendTo()),"width"===t&&this._resizeButton()},_setOptionDisabled:function(t){this._super(t),this.menuInstance.option("disabled",t),this.button.attr("aria-disabled",t),this._toggleClass(this.button,null,"ui-state-disabled",t),this.element.prop("disabled",t),t?(this.button.attr("tabindex",-1),this.close()):this.button.attr("tabindex",0)},_appendTo:function(){var e=this.options.appendTo;return e&&(e=e.jquery||e.nodeType?t(e):this.document.find(e).eq(0)),e&&e[0]||(e=this.element.closest(".ui-front, dialog")),e.length||(e=this.document[0].body),e},_toggleAttr:function(){this.button.attr("aria-expanded",this.isOpen),this._removeClass(this.button,"ui-selectmenu-button-"+(this.isOpen?"closed":"open"))._addClass(this.button,"ui-selectmenu-button-"+(this.isOpen?"open":"closed"))._toggleClass(this.menuWrap,"ui-selectmenu-open",null,this.isOpen),this.menu.attr("aria-hidden",!this.isOpen)},_resizeButton:function(){var t=this.options.width;return t===!1?(this.button.css("width",""),void 0):(null===t&&(t=this.element.show().outerWidth(),this.element.hide()),this.button.outerWidth(t),void 0)},_resizeMenu:function(){this.menu.outerWidth(Math.max(this.button.outerWidth(),this.menu.width("").outerWidth()+1))},_getCreateOptions:function(){var t=this._super();return t.disabled=this.element.prop("disabled"),t},_parseOptions:function(e){var i=this,s=[];e.each(function(e,n){s.push(i._parseOption(t(n),e))}),this.items=s},_parseOption:function(t,e){var i=t.parent("optgroup");return{element:t,index:e,value:t.val(),label:t.text(),optgroup:i.attr("label")||"",disabled:i.prop("disabled")||t.prop("disabled")}},_destroy:function(){this._unbindFormResetHandler(),this.menuWrap.remove(),this.button.remove(),this.element.show(),this.element.removeUniqueId(),this.labels.attr("for",this.ids.element)}}]),t.widget("ui.slider",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"slide",options:{animate:!1,classes:{"ui-slider":"ui-corner-all","ui-slider-handle":"ui-corner-all","ui-slider-range":"ui-corner-all ui-widget-header"},distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this._calculateNewMax(),this._addClass("ui-slider ui-slider-"+this.orientation,"ui-widget ui-widget-content"),this._refresh(),this._animateOff=!1
},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var e,i,s=this.options,n=this.element.find(".ui-slider-handle"),o="<span tabindex='0'></span>",a=[];for(i=s.values&&s.values.length||1,n.length>i&&(n.slice(i).remove(),n=n.slice(0,i)),e=n.length;i>e;e++)a.push(o);this.handles=n.add(t(a.join("")).appendTo(this.element)),this._addClass(this.handles,"ui-slider-handle","ui-state-default"),this.handle=this.handles.eq(0),this.handles.each(function(e){t(this).data("ui-slider-handle-index",e).attr("tabIndex",0)})},_createRange:function(){var e=this.options;e.range?(e.range===!0&&(e.values?e.values.length&&2!==e.values.length?e.values=[e.values[0],e.values[0]]:t.isArray(e.values)&&(e.values=e.values.slice(0)):e.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?(this._removeClass(this.range,"ui-slider-range-min ui-slider-range-max"),this.range.css({left:"",bottom:""})):(this.range=t("<div>").appendTo(this.element),this._addClass(this.range,"ui-slider-range")),("min"===e.range||"max"===e.range)&&this._addClass(this.range,"ui-slider-range-"+e.range)):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){this._off(this.handles),this._on(this.handles,this._handleEvents),this._hoverable(this.handles),this._focusable(this.handles)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this._mouseDestroy()},_mouseCapture:function(e){var i,s,n,o,a,r,h,l,c=this,u=this.options;return u.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:e.pageX,y:e.pageY},s=this._normValueFromMouse(i),n=this._valueMax()-this._valueMin()+1,this.handles.each(function(e){var i=Math.abs(s-c.values(e));(n>i||n===i&&(e===c._lastChangedValue||c.values(e)===u.min))&&(n=i,o=t(this),a=e)}),r=this._start(e,a),r===!1?!1:(this._mouseSliding=!0,this._handleIndex=a,this._addClass(o,null,"ui-state-active"),o.trigger("focus"),h=o.offset(),l=!t(e.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:e.pageX-h.left-o.width()/2,top:e.pageY-h.top-o.height()/2-(parseInt(o.css("borderTopWidth"),10)||0)-(parseInt(o.css("borderBottomWidth"),10)||0)+(parseInt(o.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(e,a,s),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(t){var e={x:t.pageX,y:t.pageY},i=this._normValueFromMouse(e);return this._slide(t,this._handleIndex,i),!1},_mouseStop:function(t){return this._removeClass(this.handles,null,"ui-state-active"),this._mouseSliding=!1,this._stop(t,this._handleIndex),this._change(t,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(t){var e,i,s,n,o;return"horizontal"===this.orientation?(e=this.elementSize.width,i=t.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(e=this.elementSize.height,i=t.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),s=i/e,s>1&&(s=1),0>s&&(s=0),"vertical"===this.orientation&&(s=1-s),n=this._valueMax()-this._valueMin(),o=this._valueMin()+s*n,this._trimAlignValue(o)},_uiHash:function(t,e,i){var s={handle:this.handles[t],handleIndex:t,value:void 0!==e?e:this.value()};return this._hasMultipleValues()&&(s.value=void 0!==e?e:this.values(t),s.values=i||this.values()),s},_hasMultipleValues:function(){return this.options.values&&this.options.values.length},_start:function(t,e){return this._trigger("start",t,this._uiHash(e))},_slide:function(t,e,i){var s,n,o=this.value(),a=this.values();this._hasMultipleValues()&&(n=this.values(e?0:1),o=this.values(e),2===this.options.values.length&&this.options.range===!0&&(i=0===e?Math.min(n,i):Math.max(n,i)),a[e]=i),i!==o&&(s=this._trigger("slide",t,this._uiHash(e,i,a)),s!==!1&&(this._hasMultipleValues()?this.values(e,i):this.value(i)))},_stop:function(t,e){this._trigger("stop",t,this._uiHash(e))},_change:function(t,e){this._keySliding||this._mouseSliding||(this._lastChangedValue=e,this._trigger("change",t,this._uiHash(e)))},value:function(t){return arguments.length?(this.options.value=this._trimAlignValue(t),this._refreshValue(),this._change(null,0),void 0):this._value()},values:function(e,i){var s,n,o;if(arguments.length>1)return this.options.values[e]=this._trimAlignValue(i),this._refreshValue(),this._change(null,e),void 0;if(!arguments.length)return this._values();if(!t.isArray(arguments[0]))return this._hasMultipleValues()?this._values(e):this.value();for(s=this.options.values,n=arguments[0],o=0;s.length>o;o+=1)s[o]=this._trimAlignValue(n[o]),this._change(null,o);this._refreshValue()},_setOption:function(e,i){var s,n=0;switch("range"===e&&this.options.range===!0&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),t.isArray(this.options.values)&&(n=this.options.values.length),this._super(e,i),e){case"orientation":this._detectOrientation(),this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-"+this.orientation),this._refreshValue(),this.options.range&&this._refreshRange(i),this.handles.css("horizontal"===i?"bottom":"left","");break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=n-1;s>=0;s--)this._change(null,s);this._animateOff=!1;break;case"step":case"min":case"max":this._animateOff=!0,this._calculateNewMax(),this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_setOptionDisabled:function(t){this._super(t),this._toggleClass(null,"ui-state-disabled",!!t)},_value:function(){var t=this.options.value;return t=this._trimAlignValue(t)},_values:function(t){var e,i,s;if(arguments.length)return e=this.options.values[t],e=this._trimAlignValue(e);if(this._hasMultipleValues()){for(i=this.options.values.slice(),s=0;i.length>s;s+=1)i[s]=this._trimAlignValue(i[s]);return i}return[]},_trimAlignValue:function(t){if(this._valueMin()>=t)return this._valueMin();if(t>=this._valueMax())return this._valueMax();var e=this.options.step>0?this.options.step:1,i=(t-this._valueMin())%e,s=t-i;return 2*Math.abs(i)>=e&&(s+=i>0?e:-e),parseFloat(s.toFixed(5))},_calculateNewMax:function(){var t=this.options.max,e=this._valueMin(),i=this.options.step,s=Math.round((t-e)/i)*i;t=s+e,t>this.options.max&&(t-=i),this.max=parseFloat(t.toFixed(this._precision()))},_precision:function(){var t=this._precisionOf(this.options.step);return null!==this.options.min&&(t=Math.max(t,this._precisionOf(this.options.min))),t},_precisionOf:function(t){var e=""+t,i=e.indexOf(".");return-1===i?0:e.length-i-1},_valueMin:function(){return this.options.min},_valueMax:function(){return this.max},_refreshRange:function(t){"vertical"===t&&this.range.css({width:"",left:""}),"horizontal"===t&&this.range.css({height:"",bottom:""})},_refreshValue:function(){var e,i,s,n,o,a=this.options.range,r=this.options,h=this,l=this._animateOff?!1:r.animate,c={};this._hasMultipleValues()?this.handles.each(function(s){i=100*((h.values(s)-h._valueMin())/(h._valueMax()-h._valueMin())),c["horizontal"===h.orientation?"left":"bottom"]=i+"%",t(this).stop(1,1)[l?"animate":"css"](c,r.animate),h.options.range===!0&&("horizontal"===h.orientation?(0===s&&h.range.stop(1,1)[l?"animate":"css"]({left:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({width:i-e+"%"},{queue:!1,duration:r.animate})):(0===s&&h.range.stop(1,1)[l?"animate":"css"]({bottom:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({height:i-e+"%"},{queue:!1,duration:r.animate}))),e=i}):(s=this.value(),n=this._valueMin(),o=this._valueMax(),i=o!==n?100*((s-n)/(o-n)):0,c["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[l?"animate":"css"](c,r.animate),"min"===a&&"horizontal"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({width:i+"%"},r.animate),"max"===a&&"horizontal"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({width:100-i+"%"},r.animate),"min"===a&&"vertical"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({height:i+"%"},r.animate),"max"===a&&"vertical"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({height:100-i+"%"},r.animate))},_handleEvents:{keydown:function(e){var i,s,n,o,a=t(e.target).data("ui-slider-handle-index");switch(e.keyCode){case t.ui.keyCode.HOME:case t.ui.keyCode.END:case t.ui.keyCode.PAGE_UP:case t.ui.keyCode.PAGE_DOWN:case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(e.preventDefault(),!this._keySliding&&(this._keySliding=!0,this._addClass(t(e.target),null,"ui-state-active"),i=this._start(e,a),i===!1))return}switch(o=this.options.step,s=n=this._hasMultipleValues()?this.values(a):this.value(),e.keyCode){case t.ui.keyCode.HOME:n=this._valueMin();break;case t.ui.keyCode.END:n=this._valueMax();break;case t.ui.keyCode.PAGE_UP:n=this._trimAlignValue(s+(this._valueMax()-this._valueMin())/this.numPages);break;case t.ui.keyCode.PAGE_DOWN:n=this._trimAlignValue(s-(this._valueMax()-this._valueMin())/this.numPages);break;case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:if(s===this._valueMax())return;n=this._trimAlignValue(s+o);break;case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(s===this._valueMin())return;n=this._trimAlignValue(s-o)}this._slide(e,a,n)},keyup:function(e){var i=t(e.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(e,i),this._change(e,i),this._removeClass(t(e.target),null,"ui-state-active"))}}}),t.widget("ui.sortable",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(t,e,i){return t>=e&&e+i>t},_isFloating:function(t){return/left|right/.test(t.css("float"))||/inline|table-cell/.test(t.css("display"))},_create:function(){this.containerCache={},this._addClass("ui-sortable"),this.refresh(),this.offset=this.element.offset(),this._mouseInit(),this._setHandleClassName(),this.ready=!0},_setOption:function(t,e){this._super(t,e),"handle"===t&&this._setHandleClassName()},_setHandleClassName:function(){var e=this;this._removeClass(this.element.find(".ui-sortable-handle"),"ui-sortable-handle"),t.each(this.items,function(){e._addClass(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item,"ui-sortable-handle")})},_destroy:function(){this._mouseDestroy();for(var t=this.items.length-1;t>=0;t--)this.items[t].item.removeData(this.widgetName+"-item");return this},_mouseCapture:function(e,i){var s=null,n=!1,o=this;return this.reverting?!1:this.options.disabled||"static"===this.options.type?!1:(this._refreshItems(e),t(e.target).parents().each(function(){return t.data(this,o.widgetName+"-item")===o?(s=t(this),!1):void 0}),t.data(e.target,o.widgetName+"-item")===o&&(s=t(e.target)),s?!this.options.handle||i||(t(this.options.handle,s).find("*").addBack().each(function(){this===e.target&&(n=!0)}),n)?(this.currentItem=s,this._removeCurrentsFromItems(),!0):!1:!1)},_mouseStart:function(e,i,s){var n,o,a=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(e),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},t.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(e),this.originalPageX=e.pageX,this.originalPageY=e.pageY,a.cursorAt&&this._adjustOffsetFromHelper(a.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),a.containment&&this._setContainment(),a.cursor&&"auto"!==a.cursor&&(o=this.document.find("body"),this.storedCursor=o.css("cursor"),o.css("cursor",a.cursor),this.storedStylesheet=t("<style>*{ cursor: "+a.cursor+" !important; }</style>").appendTo(o)),a.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",a.opacity)),a.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",a.zIndex)),this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",e,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!s)for(n=this.containers.length-1;n>=0;n--)this.containers[n]._trigger("activate",e,this._uiHash(this));return t.ui.ddmanager&&(t.ui.ddmanager.current=this),t.ui.ddmanager&&!a.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this.dragging=!0,this._addClass(this.helper,"ui-sortable-helper"),this._mouseDrag(e),!0},_mouseDrag:function(e){var i,s,n,o,a=this.options,r=!1;for(this.position=this._generatePosition(e),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-e.pageY<a.scrollSensitivity?this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop+a.scrollSpeed:e.pageY-this.overflowOffset.top<a.scrollSensitivity&&(this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop-a.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-e.pageX<a.scrollSensitivity?this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft+a.scrollSpeed:e.pageX-this.overflowOffset.left<a.scrollSensitivity&&(this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft-a.scrollSpeed)):(e.pageY-this.document.scrollTop()<a.scrollSensitivity?r=this.document.scrollTop(this.document.scrollTop()-a.scrollSpeed):this.window.height()-(e.pageY-this.document.scrollTop())<a.scrollSensitivity&&(r=this.document.scrollTop(this.document.scrollTop()+a.scrollSpeed)),e.pageX-this.document.scrollLeft()<a.scrollSensitivity?r=this.document.scrollLeft(this.document.scrollLeft()-a.scrollSpeed):this.window.width()-(e.pageX-this.document.scrollLeft())<a.scrollSensitivity&&(r=this.document.scrollLeft(this.document.scrollLeft()+a.scrollSpeed))),r!==!1&&t.ui.ddmanager&&!a.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),i=this.items.length-1;i>=0;i--)if(s=this.items[i],n=s.item[0],o=this._intersectsWithPointer(s),o&&s.instance===this.currentContainer&&n!==this.currentItem[0]&&this.placeholder[1===o?"next":"prev"]()[0]!==n&&!t.contains(this.placeholder[0],n)&&("semi-dynamic"===this.options.type?!t.contains(this.element[0],n):!0)){if(this.direction=1===o?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(s))break;this._rearrange(e,s),this._trigger("change",e,this._uiHash());break}return this._contactContainers(e),t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),this._trigger("sort",e,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(e,i){if(e){if(t.ui.ddmanager&&!this.options.dropBehaviour&&t.ui.ddmanager.drop(this,e),this.options.revert){var s=this,n=this.placeholder.offset(),o=this.options.axis,a={};o&&"x"!==o||(a.left=n.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollLeft)),o&&"y"!==o||(a.top=n.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,t(this.helper).animate(a,parseInt(this.options.revert,10)||500,function(){s._clear(e)})}else this._clear(e,i);return!1}},cancel:function(){if(this.dragging){this._mouseUp(new t.Event("mouseup",{target:null})),"original"===this.options.helper?(this.currentItem.css(this._storedCSS),this._removeClass(this.currentItem,"ui-sortable-helper")):this.currentItem.show();for(var e=this.containers.length-1;e>=0;e--)this.containers[e]._trigger("deactivate",null,this._uiHash(this)),this.containers[e].containerCache.over&&(this.containers[e]._trigger("out",null,this._uiHash(this)),this.containers[e].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),t.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?t(this.domPosition.prev).after(this.currentItem):t(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[];return e=e||{},t(i).each(function(){var i=(t(e.item||this).attr(e.attribute||"id")||"").match(e.expression||/(.+)[\-=_](.+)/);i&&s.push((e.key||i[1]+"[]")+"="+(e.key&&e.expression?i[1]:i[2]))}),!s.length&&e.key&&s.push(e.key+"="),s.join("&")},toArray:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[];return e=e||{},i.each(function(){s.push(t(e.item||this).attr(e.attribute||"id")||"")}),s},_intersectsWith:function(t){var e=this.positionAbs.left,i=e+this.helperProportions.width,s=this.positionAbs.top,n=s+this.helperProportions.height,o=t.left,a=o+t.width,r=t.top,h=r+t.height,l=this.offset.click.top,c=this.offset.click.left,u="x"===this.options.axis||s+l>r&&h>s+l,d="y"===this.options.axis||e+c>o&&a>e+c,p=u&&d;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>t[this.floating?"width":"height"]?p:e+this.helperProportions.width/2>o&&a>i-this.helperProportions.width/2&&s+this.helperProportions.height/2>r&&h>n-this.helperProportions.height/2},_intersectsWithPointer:function(t){var e,i,s="x"===this.options.axis||this._isOverAxis(this.positionAbs.top+this.offset.click.top,t.top,t.height),n="y"===this.options.axis||this._isOverAxis(this.positionAbs.left+this.offset.click.left,t.left,t.width),o=s&&n;return o?(e=this._getDragVerticalDirection(),i=this._getDragHorizontalDirection(),this.floating?"right"===i||"down"===e?2:1:e&&("down"===e?2:1)):!1},_intersectsWithSides:function(t){var e=this._isOverAxis(this.positionAbs.top+this.offset.click.top,t.top+t.height/2,t.height),i=this._isOverAxis(this.positionAbs.left+this.offset.click.left,t.left+t.width/2,t.width),s=this._getDragVerticalDirection(),n=this._getDragHorizontalDirection();return this.floating&&n?"right"===n&&i||"left"===n&&!i:s&&("down"===s&&e||"up"===s&&!e)},_getDragVerticalDirection:function(){var t=this.positionAbs.top-this.lastPositionAbs.top;return 0!==t&&(t>0?"down":"up")},_getDragHorizontalDirection:function(){var t=this.positionAbs.left-this.lastPositionAbs.left;return 0!==t&&(t>0?"right":"left")},refresh:function(t){return this._refreshItems(t),this._setHandleClassName(),this.refreshPositions(),this},_connectWith:function(){var t=this.options;return t.connectWith.constructor===String?[t.connectWith]:t.connectWith},_getItemsAsjQuery:function(e){function i(){r.push(this)}var s,n,o,a,r=[],h=[],l=this._connectWith();if(l&&e)for(s=l.length-1;s>=0;s--)for(o=t(l[s],this.document[0]),n=o.length-1;n>=0;n--)a=t.data(o[n],this.widgetFullName),a&&a!==this&&!a.options.disabled&&h.push([t.isFunction(a.options.items)?a.options.items.call(a.element):t(a.options.items,a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),a]);for(h.push([t.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):t(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),s=h.length-1;s>=0;s--)h[s][0].each(i);return t(r)},_removeCurrentsFromItems:function(){var e=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=t.grep(this.items,function(t){for(var i=0;e.length>i;i++)if(e[i]===t.item[0])return!1;return!0})},_refreshItems:function(e){this.items=[],this.containers=[this];var i,s,n,o,a,r,h,l,c=this.items,u=[[t.isFunction(this.options.items)?this.options.items.call(this.element[0],e,{item:this.currentItem}):t(this.options.items,this.element),this]],d=this._connectWith();if(d&&this.ready)for(i=d.length-1;i>=0;i--)for(n=t(d[i],this.document[0]),s=n.length-1;s>=0;s--)o=t.data(n[s],this.widgetFullName),o&&o!==this&&!o.options.disabled&&(u.push([t.isFunction(o.options.items)?o.options.items.call(o.element[0],e,{item:this.currentItem}):t(o.options.items,o.element),o]),this.containers.push(o));for(i=u.length-1;i>=0;i--)for(a=u[i][1],r=u[i][0],s=0,l=r.length;l>s;s++)h=t(r[s]),h.data(this.widgetName+"-item",a),c.push({item:h,instance:a,width:0,height:0,left:0,top:0})},refreshPositions:function(e){this.floating=this.items.length?"x"===this.options.axis||this._isFloating(this.items[0].item):!1,this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var i,s,n,o;for(i=this.items.length-1;i>=0;i--)s=this.items[i],s.instance!==this.currentContainer&&this.currentContainer&&s.item[0]!==this.currentItem[0]||(n=this.options.toleranceElement?t(this.options.toleranceElement,s.item):s.item,e||(s.width=n.outerWidth(),s.height=n.outerHeight()),o=n.offset(),s.left=o.left,s.top=o.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(i=this.containers.length-1;i>=0;i--)o=this.containers[i].element.offset(),this.containers[i].containerCache.left=o.left,this.containers[i].containerCache.top=o.top,this.containers[i].containerCache.width=this.containers[i].element.outerWidth(),this.containers[i].containerCache.height=this.containers[i].element.outerHeight();return this},_createPlaceholder:function(e){e=e||this;var i,s=e.options;s.placeholder&&s.placeholder.constructor!==String||(i=s.placeholder,s.placeholder={element:function(){var s=e.currentItem[0].nodeName.toLowerCase(),n=t("<"+s+">",e.document[0]);return e._addClass(n,"ui-sortable-placeholder",i||e.currentItem[0].className)._removeClass(n,"ui-sortable-helper"),"tbody"===s?e._createTrPlaceholder(e.currentItem.find("tr").eq(0),t("<tr>",e.document[0]).appendTo(n)):"tr"===s?e._createTrPlaceholder(e.currentItem,n):"img"===s&&n.attr("src",e.currentItem.attr("src")),i||n.css("visibility","hidden"),n},update:function(t,n){(!i||s.forcePlaceholderSize)&&(n.height()||n.height(e.currentItem.innerHeight()-parseInt(e.currentItem.css("paddingTop")||0,10)-parseInt(e.currentItem.css("paddingBottom")||0,10)),n.width()||n.width(e.currentItem.innerWidth()-parseInt(e.currentItem.css("paddingLeft")||0,10)-parseInt(e.currentItem.css("paddingRight")||0,10)))}}),e.placeholder=t(s.placeholder.element.call(e.element,e.currentItem)),e.currentItem.after(e.placeholder),s.placeholder.update(e,e.placeholder)},_createTrPlaceholder:function(e,i){var s=this;e.children().each(function(){t("<td>&#160;</td>",s.document[0]).attr("colspan",t(this).attr("colspan")||1).appendTo(i)})},_contactContainers:function(e){var i,s,n,o,a,r,h,l,c,u,d=null,p=null;for(i=this.containers.length-1;i>=0;i--)if(!t.contains(this.currentItem[0],this.containers[i].element[0]))if(this._intersectsWith(this.containers[i].containerCache)){if(d&&t.contains(this.containers[i].element[0],d.element[0]))continue;d=this.containers[i],p=i}else this.containers[i].containerCache.over&&(this.containers[i]._trigger("out",e,this._uiHash(this)),this.containers[i].containerCache.over=0);if(d)if(1===this.containers.length)this.containers[p].containerCache.over||(this.containers[p]._trigger("over",e,this._uiHash(this)),this.containers[p].containerCache.over=1);else{for(n=1e4,o=null,c=d.floating||this._isFloating(this.currentItem),a=c?"left":"top",r=c?"width":"height",u=c?"pageX":"pageY",s=this.items.length-1;s>=0;s--)t.contains(this.containers[p].element[0],this.items[s].item[0])&&this.items[s].item[0]!==this.currentItem[0]&&(h=this.items[s].item.offset()[a],l=!1,e[u]-h>this.items[s][r]/2&&(l=!0),n>Math.abs(e[u]-h)&&(n=Math.abs(e[u]-h),o=this.items[s],this.direction=l?"up":"down"));if(!o&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[p])return this.currentContainer.containerCache.over||(this.containers[p]._trigger("over",e,this._uiHash()),this.currentContainer.containerCache.over=1),void 0;o?this._rearrange(e,o,null,!0):this._rearrange(e,null,this.containers[p].element,!0),this._trigger("change",e,this._uiHash()),this.containers[p]._trigger("change",e,this._uiHash(this)),this.currentContainer=this.containers[p],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[p]._trigger("over",e,this._uiHash(this)),this.containers[p].containerCache.over=1}},_createHelper:function(e){var i=this.options,s=t.isFunction(i.helper)?t(i.helper.apply(this.element[0],[e,this.currentItem])):"clone"===i.helper?this.currentItem.clone():this.currentItem;return s.parents("body").length||t("parent"!==i.appendTo?i.appendTo:this.currentItem[0].parentNode)[0].appendChild(s[0]),s[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!s[0].style.width||i.forceHelperSize)&&s.width(this.currentItem.width()),(!s[0].style.height||i.forceHelperSize)&&s.height(this.currentItem.height()),s},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var e=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==this.document[0]&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===this.document[0].body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&t.ui.ie)&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var t=this.currentItem.position();return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:t.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,s,n=this.options;"parent"===n.containment&&(n.containment=this.helper[0].parentNode),("document"===n.containment||"window"===n.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,"document"===n.containment?this.document.width():this.window.width()-this.helperProportions.width-this.margins.left,("document"===n.containment?this.document.height()||document.body.parentNode.scrollHeight:this.window.height()||this.document[0].body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(n.containment)||(e=t(n.containment)[0],i=t(n.containment).offset(),s="hidden"!==t(e).css("overflow"),this.containment=[i.left+(parseInt(t(e).css("borderLeftWidth"),10)||0)+(parseInt(t(e).css("paddingLeft"),10)||0)-this.margins.left,i.top+(parseInt(t(e).css("borderTopWidth"),10)||0)+(parseInt(t(e).css("paddingTop"),10)||0)-this.margins.top,i.left+(s?Math.max(e.scrollWidth,e.offsetWidth):e.offsetWidth)-(parseInt(t(e).css("borderLeftWidth"),10)||0)-(parseInt(t(e).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,i.top+(s?Math.max(e.scrollHeight,e.offsetHeight):e.offsetHeight)-(parseInt(t(e).css("borderTopWidth"),10)||0)-(parseInt(t(e).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(e,i){i||(i=this.position);var s="absolute"===e?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,o=/(html|body)/i.test(n[0].tagName);return{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():o?0:n.scrollTop())*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():o?0:n.scrollLeft())*s}},_generatePosition:function(e){var i,s,n=this.options,o=e.pageX,a=e.pageY,r="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=/(html|body)/i.test(r[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(e.pageX-this.offset.click.left<this.containment[0]&&(o=this.containment[0]+this.offset.click.left),e.pageY-this.offset.click.top<this.containment[1]&&(a=this.containment[1]+this.offset.click.top),e.pageX-this.offset.click.left>this.containment[2]&&(o=this.containment[2]+this.offset.click.left),e.pageY-this.offset.click.top>this.containment[3]&&(a=this.containment[3]+this.offset.click.top)),n.grid&&(i=this.originalPageY+Math.round((a-this.originalPageY)/n.grid[1])*n.grid[1],a=this.containment?i-this.offset.click.top>=this.containment[1]&&i-this.offset.click.top<=this.containment[3]?i:i-this.offset.click.top>=this.containment[1]?i-n.grid[1]:i+n.grid[1]:i,s=this.originalPageX+Math.round((o-this.originalPageX)/n.grid[0])*n.grid[0],o=this.containment?s-this.offset.click.left>=this.containment[0]&&s-this.offset.click.left<=this.containment[2]?s:s-this.offset.click.left>=this.containment[0]?s-n.grid[0]:s+n.grid[0]:s)),{top:a-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():h?0:r.scrollTop()),left:o-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():h?0:r.scrollLeft())}},_rearrange:function(t,e,i,s){i?i[0].appendChild(this.placeholder[0]):e.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?e.item[0]:e.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var n=this.counter;
this._delay(function(){n===this.counter&&this.refreshPositions(!s)})},_clear:function(t,e){function i(t,e,i){return function(s){i._trigger(t,s,e._uiHash(e))}}this.reverting=!1;var s,n=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(s in this._storedCSS)("auto"===this._storedCSS[s]||"static"===this._storedCSS[s])&&(this._storedCSS[s]="");this.currentItem.css(this._storedCSS),this._removeClass(this.currentItem,"ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!e&&n.push(function(t){this._trigger("receive",t,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||e||n.push(function(t){this._trigger("update",t,this._uiHash())}),this!==this.currentContainer&&(e||(n.push(function(t){this._trigger("remove",t,this._uiHash())}),n.push(function(t){return function(e){t._trigger("receive",e,this._uiHash(this))}}.call(this,this.currentContainer)),n.push(function(t){return function(e){t._trigger("update",e,this._uiHash(this))}}.call(this,this.currentContainer)))),s=this.containers.length-1;s>=0;s--)e||n.push(i("deactivate",this,this.containers[s])),this.containers[s].containerCache.over&&(n.push(i("out",this,this.containers[s])),this.containers[s].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,e||this._trigger("beforeStop",t,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.cancelHelperRemoval||(this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null),!e){for(s=0;n.length>s;s++)n[s].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!this.cancelHelperRemoval},_trigger:function(){t.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(e){var i=e||this;return{helper:i.helper,placeholder:i.placeholder||t([]),position:i.position,originalPosition:i.originalPosition,offset:i.positionAbs,item:i.currentItem,sender:e?e.element:null}}}),t.widget("ui.spinner",{version:"1.12.1",defaultElement:"<input>",widgetEventPrefix:"spin",options:{classes:{"ui-spinner":"ui-corner-all","ui-spinner-down":"ui-corner-br","ui-spinner-up":"ui-corner-tr"},culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),""!==this.value()&&this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var e=this._super(),i=this.element;return t.each(["min","max","step"],function(t,s){var n=i.attr(s);null!=n&&n.length&&(e[s]=n)}),e},_events:{keydown:function(t){this._start(t)&&this._keydown(t)&&t.preventDefault()},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(t){return this.cancelBlur?(delete this.cancelBlur,void 0):(this._stop(),this._refresh(),this.previous!==this.element.val()&&this._trigger("change",t),void 0)},mousewheel:function(t,e){if(e){if(!this.spinning&&!this._start(t))return!1;this._spin((e>0?1:-1)*this.options.step,t),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(t)},100),t.preventDefault()}},"mousedown .ui-spinner-button":function(e){function i(){var e=this.element[0]===t.ui.safeActiveElement(this.document[0]);e||(this.element.trigger("focus"),this.previous=s,this._delay(function(){this.previous=s}))}var s;s=this.element[0]===t.ui.safeActiveElement(this.document[0])?this.previous:this.element.val(),e.preventDefault(),i.call(this),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,i.call(this)}),this._start(e)!==!1&&this._repeat(null,t(e.currentTarget).hasClass("ui-spinner-up")?1:-1,e)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(e){return t(e.currentTarget).hasClass("ui-state-active")?this._start(e)===!1?!1:(this._repeat(null,t(e.currentTarget).hasClass("ui-spinner-up")?1:-1,e),void 0):void 0},"mouseleave .ui-spinner-button":"_stop"},_enhance:function(){this.uiSpinner=this.element.attr("autocomplete","off").wrap("<span>").parent().append("<a></a><a></a>")},_draw:function(){this._enhance(),this._addClass(this.uiSpinner,"ui-spinner","ui-widget ui-widget-content"),this._addClass("ui-spinner-input"),this.element.attr("role","spinbutton"),this.buttons=this.uiSpinner.children("a").attr("tabIndex",-1).attr("aria-hidden",!0).button({classes:{"ui-button":""}}),this._removeClass(this.buttons,"ui-corner-all"),this._addClass(this.buttons.first(),"ui-spinner-button ui-spinner-up"),this._addClass(this.buttons.last(),"ui-spinner-button ui-spinner-down"),this.buttons.first().button({icon:this.options.icons.up,showLabel:!1}),this.buttons.last().button({icon:this.options.icons.down,showLabel:!1}),this.buttons.height()>Math.ceil(.5*this.uiSpinner.height())&&this.uiSpinner.height()>0&&this.uiSpinner.height(this.uiSpinner.height())},_keydown:function(e){var i=this.options,s=t.ui.keyCode;switch(e.keyCode){case s.UP:return this._repeat(null,1,e),!0;case s.DOWN:return this._repeat(null,-1,e),!0;case s.PAGE_UP:return this._repeat(null,i.page,e),!0;case s.PAGE_DOWN:return this._repeat(null,-i.page,e),!0}return!1},_start:function(t){return this.spinning||this._trigger("start",t)!==!1?(this.counter||(this.counter=1),this.spinning=!0,!0):!1},_repeat:function(t,e,i){t=t||500,clearTimeout(this.timer),this.timer=this._delay(function(){this._repeat(40,e,i)},t),this._spin(e*this.options.step,i)},_spin:function(t,e){var i=this.value()||0;this.counter||(this.counter=1),i=this._adjustValue(i+t*this._increment(this.counter)),this.spinning&&this._trigger("spin",e,{value:i})===!1||(this._value(i),this.counter++)},_increment:function(e){var i=this.options.incremental;return i?t.isFunction(i)?i(e):Math.floor(e*e*e/5e4-e*e/500+17*e/200+1):1},_precision:function(){var t=this._precisionOf(this.options.step);return null!==this.options.min&&(t=Math.max(t,this._precisionOf(this.options.min))),t},_precisionOf:function(t){var e=""+t,i=e.indexOf(".");return-1===i?0:e.length-i-1},_adjustValue:function(t){var e,i,s=this.options;return e=null!==s.min?s.min:0,i=t-e,i=Math.round(i/s.step)*s.step,t=e+i,t=parseFloat(t.toFixed(this._precision())),null!==s.max&&t>s.max?s.max:null!==s.min&&s.min>t?s.min:t},_stop:function(t){this.spinning&&(clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",t))},_setOption:function(t,e){var i,s,n;return"culture"===t||"numberFormat"===t?(i=this._parse(this.element.val()),this.options[t]=e,this.element.val(this._format(i)),void 0):(("max"===t||"min"===t||"step"===t)&&"string"==typeof e&&(e=this._parse(e)),"icons"===t&&(s=this.buttons.first().find(".ui-icon"),this._removeClass(s,null,this.options.icons.up),this._addClass(s,null,e.up),n=this.buttons.last().find(".ui-icon"),this._removeClass(n,null,this.options.icons.down),this._addClass(n,null,e.down)),this._super(t,e),void 0)},_setOptionDisabled:function(t){this._super(t),this._toggleClass(this.uiSpinner,null,"ui-state-disabled",!!t),this.element.prop("disabled",!!t),this.buttons.button(t?"disable":"enable")},_setOptions:r(function(t){this._super(t)}),_parse:function(t){return"string"==typeof t&&""!==t&&(t=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(t,10,this.options.culture):+t),""===t||isNaN(t)?null:t},_format:function(t){return""===t?"":window.Globalize&&this.options.numberFormat?Globalize.format(t,this.options.numberFormat,this.options.culture):t},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},isValid:function(){var t=this.value();return null===t?!1:t===this._adjustValue(t)},_value:function(t,e){var i;""!==t&&(i=this._parse(t),null!==i&&(e||(i=this._adjustValue(i)),t=this._format(i))),this.element.val(t),this._refresh()},_destroy:function(){this.element.prop("disabled",!1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"),this.uiSpinner.replaceWith(this.element)},stepUp:r(function(t){this._stepUp(t)}),_stepUp:function(t){this._start()&&(this._spin((t||1)*this.options.step),this._stop())},stepDown:r(function(t){this._stepDown(t)}),_stepDown:function(t){this._start()&&(this._spin((t||1)*-this.options.step),this._stop())},pageUp:r(function(t){this._stepUp((t||1)*this.options.page)}),pageDown:r(function(t){this._stepDown((t||1)*this.options.page)}),value:function(t){return arguments.length?(r(this._value).call(this,t),void 0):this._parse(this.element.val())},widget:function(){return this.uiSpinner}}),t.uiBackCompat!==!1&&t.widget("ui.spinner",t.ui.spinner,{_enhance:function(){this.uiSpinner=this.element.attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())},_uiSpinnerHtml:function(){return"<span>"},_buttonHtml:function(){return"<a></a><a></a>"}}),t.ui.spinner,t.widget("ui.tabs",{version:"1.12.1",delay:300,options:{active:null,classes:{"ui-tabs":"ui-corner-all","ui-tabs-nav":"ui-corner-all","ui-tabs-panel":"ui-corner-bottom","ui-tabs-tab":"ui-corner-top"},collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_isLocal:function(){var t=/#.*$/;return function(e){var i,s;i=e.href.replace(t,""),s=location.href.replace(t,"");try{i=decodeURIComponent(i)}catch(n){}try{s=decodeURIComponent(s)}catch(n){}return e.hash.length>1&&i===s}}(),_create:function(){var e=this,i=this.options;this.running=!1,this._addClass("ui-tabs","ui-widget ui-widget-content"),this._toggleClass("ui-tabs-collapsible",null,i.collapsible),this._processTabs(),i.active=this._initialActive(),t.isArray(i.disabled)&&(i.disabled=t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"),function(t){return e.tabs.index(t)}))).sort()),this.active=this.options.active!==!1&&this.anchors.length?this._findActive(i.active):t(),this._refresh(),this.active.length&&this.load(i.active)},_initialActive:function(){var e=this.options.active,i=this.options.collapsible,s=location.hash.substring(1);return null===e&&(s&&this.tabs.each(function(i,n){return t(n).attr("aria-controls")===s?(e=i,!1):void 0}),null===e&&(e=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),(null===e||-1===e)&&(e=this.tabs.length?0:!1)),e!==!1&&(e=this.tabs.index(this.tabs.eq(e)),-1===e&&(e=i?!1:0)),!i&&e===!1&&this.anchors.length&&(e=0),e},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):t()}},_tabKeydown:function(e){var i=t(t.ui.safeActiveElement(this.document[0])).closest("li"),s=this.tabs.index(i),n=!0;if(!this._handlePageNav(e)){switch(e.keyCode){case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:s++;break;case t.ui.keyCode.UP:case t.ui.keyCode.LEFT:n=!1,s--;break;case t.ui.keyCode.END:s=this.anchors.length-1;break;case t.ui.keyCode.HOME:s=0;break;case t.ui.keyCode.SPACE:return e.preventDefault(),clearTimeout(this.activating),this._activate(s),void 0;case t.ui.keyCode.ENTER:return e.preventDefault(),clearTimeout(this.activating),this._activate(s===this.options.active?!1:s),void 0;default:return}e.preventDefault(),clearTimeout(this.activating),s=this._focusNextTab(s,n),e.ctrlKey||e.metaKey||(i.attr("aria-selected","false"),this.tabs.eq(s).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",s)},this.delay))}},_panelKeydown:function(e){this._handlePageNav(e)||e.ctrlKey&&e.keyCode===t.ui.keyCode.UP&&(e.preventDefault(),this.active.trigger("focus"))},_handlePageNav:function(e){return e.altKey&&e.keyCode===t.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):e.altKey&&e.keyCode===t.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):void 0},_findNextTab:function(e,i){function s(){return e>n&&(e=0),0>e&&(e=n),e}for(var n=this.tabs.length-1;-1!==t.inArray(s(),this.options.disabled);)e=i?e+1:e-1;return e},_focusNextTab:function(t,e){return t=this._findNextTab(t,e),this.tabs.eq(t).trigger("focus"),t},_setOption:function(t,e){return"active"===t?(this._activate(e),void 0):(this._super(t,e),"collapsible"===t&&(this._toggleClass("ui-tabs-collapsible",null,e),e||this.options.active!==!1||this._activate(0)),"event"===t&&this._setupEvents(e),"heightStyle"===t&&this._setupHeightStyle(e),void 0)},_sanitizeSelector:function(t){return t?t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var e=this.options,i=this.tablist.children(":has(a[href])");e.disabled=t.map(i.filter(".ui-state-disabled"),function(t){return i.index(t)}),this._processTabs(),e.active!==!1&&this.anchors.length?this.active.length&&!t.contains(this.tablist[0],this.active[0])?this.tabs.length===e.disabled.length?(e.active=!1,this.active=t()):this._activate(this._findNextTab(Math.max(0,e.active-1),!1)):e.active=this.tabs.index(this.active):(e.active=!1,this.active=t()),this._refresh()},_refresh:function(){this._setOptionDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden":"true"}),this.active.length?(this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}),this._addClass(this.active,"ui-tabs-active","ui-state-active"),this._getPanelForTab(this.active).show().attr({"aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var e=this,i=this.tabs,s=this.anchors,n=this.panels;this.tablist=this._getList().attr("role","tablist"),this._addClass(this.tablist,"ui-tabs-nav","ui-helper-reset ui-helper-clearfix ui-widget-header"),this.tablist.on("mousedown"+this.eventNamespace,"> li",function(e){t(this).is(".ui-state-disabled")&&e.preventDefault()}).on("focus"+this.eventNamespace,".ui-tabs-anchor",function(){t(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this.tabs=this.tablist.find("> li:has(a[href])").attr({role:"tab",tabIndex:-1}),this._addClass(this.tabs,"ui-tabs-tab","ui-state-default"),this.anchors=this.tabs.map(function(){return t("a",this)[0]}).attr({role:"presentation",tabIndex:-1}),this._addClass(this.anchors,"ui-tabs-anchor"),this.panels=t(),this.anchors.each(function(i,s){var n,o,a,r=t(s).uniqueId().attr("id"),h=t(s).closest("li"),l=h.attr("aria-controls");e._isLocal(s)?(n=s.hash,a=n.substring(1),o=e.element.find(e._sanitizeSelector(n))):(a=h.attr("aria-controls")||t({}).uniqueId()[0].id,n="#"+a,o=e.element.find(n),o.length||(o=e._createPanel(a),o.insertAfter(e.panels[i-1]||e.tablist)),o.attr("aria-live","polite")),o.length&&(e.panels=e.panels.add(o)),l&&h.data("ui-tabs-aria-controls",l),h.attr({"aria-controls":a,"aria-labelledby":r}),o.attr("aria-labelledby",r)}),this.panels.attr("role","tabpanel"),this._addClass(this.panels,"ui-tabs-panel","ui-widget-content"),i&&(this._off(i.not(this.tabs)),this._off(s.not(this.anchors)),this._off(n.not(this.panels)))},_getList:function(){return this.tablist||this.element.find("ol, ul").eq(0)},_createPanel:function(e){return t("<div>").attr("id",e).data("ui-tabs-destroy",!0)},_setOptionDisabled:function(e){var i,s,n;for(t.isArray(e)&&(e.length?e.length===this.anchors.length&&(e=!0):e=!1),n=0;s=this.tabs[n];n++)i=t(s),e===!0||-1!==t.inArray(n,e)?(i.attr("aria-disabled","true"),this._addClass(i,null,"ui-state-disabled")):(i.removeAttr("aria-disabled"),this._removeClass(i,null,"ui-state-disabled"));this.options.disabled=e,this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,e===!0)},_setupEvents:function(e){var i={};e&&t.each(e.split(" "),function(t,e){i[e]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(!0,this.anchors,{click:function(t){t.preventDefault()}}),this._on(this.anchors,i),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(e){var i,s=this.element.parent();"fill"===e?(i=s.height(),i-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var e=t(this),s=e.css("position");"absolute"!==s&&"fixed"!==s&&(i-=e.outerHeight(!0))}),this.element.children().not(this.panels).each(function(){i-=t(this).outerHeight(!0)}),this.panels.each(function(){t(this).height(Math.max(0,i-t(this).innerHeight()+t(this).height()))}).css("overflow","auto")):"auto"===e&&(i=0,this.panels.each(function(){i=Math.max(i,t(this).height("").height())}).height(i))},_eventHandler:function(e){var i=this.options,s=this.active,n=t(e.currentTarget),o=n.closest("li"),a=o[0]===s[0],r=a&&i.collapsible,h=r?t():this._getPanelForTab(o),l=s.length?this._getPanelForTab(s):t(),c={oldTab:s,oldPanel:l,newTab:r?t():o,newPanel:h};e.preventDefault(),o.hasClass("ui-state-disabled")||o.hasClass("ui-tabs-loading")||this.running||a&&!i.collapsible||this._trigger("beforeActivate",e,c)===!1||(i.active=r?!1:this.tabs.index(o),this.active=a?t():o,this.xhr&&this.xhr.abort(),l.length||h.length||t.error("jQuery UI Tabs: Mismatching fragment identifier."),h.length&&this.load(this.tabs.index(o),e),this._toggle(e,c))},_toggle:function(e,i){function s(){o.running=!1,o._trigger("activate",e,i)}function n(){o._addClass(i.newTab.closest("li"),"ui-tabs-active","ui-state-active"),a.length&&o.options.show?o._show(a,o.options.show,s):(a.show(),s())}var o=this,a=i.newPanel,r=i.oldPanel;this.running=!0,r.length&&this.options.hide?this._hide(r,this.options.hide,function(){o._removeClass(i.oldTab.closest("li"),"ui-tabs-active","ui-state-active"),n()}):(this._removeClass(i.oldTab.closest("li"),"ui-tabs-active","ui-state-active"),r.hide(),n()),r.attr("aria-hidden","true"),i.oldTab.attr({"aria-selected":"false","aria-expanded":"false"}),a.length&&r.length?i.oldTab.attr("tabIndex",-1):a.length&&this.tabs.filter(function(){return 0===t(this).attr("tabIndex")}).attr("tabIndex",-1),a.attr("aria-hidden","false"),i.newTab.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_activate:function(e){var i,s=this._findActive(e);s[0]!==this.active[0]&&(s.length||(s=this.active),i=s.find(".ui-tabs-anchor")[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}))},_findActive:function(e){return e===!1?t():this.tabs.eq(e)},_getIndex:function(e){return"string"==typeof e&&(e=this.anchors.index(this.anchors.filter("[href$='"+t.ui.escapeSelector(e)+"']"))),e},_destroy:function(){this.xhr&&this.xhr.abort(),this.tablist.removeAttr("role").off(this.eventNamespace),this.anchors.removeAttr("role tabIndex").removeUniqueId(),this.tabs.add(this.panels).each(function(){t.data(this,"ui-tabs-destroy")?t(this).remove():t(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")}),this.tabs.each(function(){var e=t(this),i=e.data("ui-tabs-aria-controls");i?e.attr("aria-controls",i).removeData("ui-tabs-aria-controls"):e.removeAttr("aria-controls")}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")},enable:function(e){var i=this.options.disabled;i!==!1&&(void 0===e?i=!1:(e=this._getIndex(e),i=t.isArray(i)?t.map(i,function(t){return t!==e?t:null}):t.map(this.tabs,function(t,i){return i!==e?i:null})),this._setOptionDisabled(i))},disable:function(e){var i=this.options.disabled;if(i!==!0){if(void 0===e)i=!0;else{if(e=this._getIndex(e),-1!==t.inArray(e,i))return;i=t.isArray(i)?t.merge([e],i).sort():[e]}this._setOptionDisabled(i)}},load:function(e,i){e=this._getIndex(e);var s=this,n=this.tabs.eq(e),o=n.find(".ui-tabs-anchor"),a=this._getPanelForTab(n),r={tab:n,panel:a},h=function(t,e){"abort"===e&&s.panels.stop(!1,!0),s._removeClass(n,"ui-tabs-loading"),a.removeAttr("aria-busy"),t===s.xhr&&delete s.xhr};this._isLocal(o[0])||(this.xhr=t.ajax(this._ajaxSettings(o,i,r)),this.xhr&&"canceled"!==this.xhr.statusText&&(this._addClass(n,"ui-tabs-loading"),a.attr("aria-busy","true"),this.xhr.done(function(t,e,n){setTimeout(function(){a.html(t),s._trigger("load",i,r),h(n,e)},1)}).fail(function(t,e){setTimeout(function(){h(t,e)},1)})))},_ajaxSettings:function(e,i,s){var n=this;return{url:e.attr("href").replace(/#.*$/,""),beforeSend:function(e,o){return n._trigger("beforeLoad",i,t.extend({jqXHR:e,ajaxSettings:o},s))}}},_getPanelForTab:function(e){var i=t(e).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+i))}}),t.uiBackCompat!==!1&&t.widget("ui.tabs",t.ui.tabs,{_processTabs:function(){this._superApply(arguments),this._addClass(this.tabs,"ui-tab")}}),t.ui.tabs,t.widget("ui.tooltip",{version:"1.12.1",options:{classes:{"ui-tooltip":"ui-corner-all ui-widget-shadow"},content:function(){var e=t(this).attr("title")||"";return t("<a>").text(e).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,track:!1,close:null,open:null},_addDescribedBy:function(e,i){var s=(e.attr("aria-describedby")||"").split(/\s+/);s.push(i),e.data("ui-tooltip-id",i).attr("aria-describedby",t.trim(s.join(" ")))},_removeDescribedBy:function(e){var i=e.data("ui-tooltip-id"),s=(e.attr("aria-describedby")||"").split(/\s+/),n=t.inArray(i,s);-1!==n&&s.splice(n,1),e.removeData("ui-tooltip-id"),s=t.trim(s.join(" ")),s?e.attr("aria-describedby",s):e.removeAttr("aria-describedby")},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.liveRegion=t("<div>").attr({role:"log","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this.disabledTitles=t([])},_setOption:function(e,i){var s=this;this._super(e,i),"content"===e&&t.each(this.tooltips,function(t,e){s._updateContent(e.element)})},_setOptionDisabled:function(t){this[t?"_disable":"_enable"]()},_disable:function(){var e=this;t.each(this.tooltips,function(i,s){var n=t.Event("blur");n.target=n.currentTarget=s.element[0],e.close(n,!0)}),this.disabledTitles=this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function(){var e=t(this);return e.is("[title]")?e.data("ui-tooltip-title",e.attr("title")).removeAttr("title"):void 0}))},_enable:function(){this.disabledTitles.each(function(){var e=t(this);e.data("ui-tooltip-title")&&e.attr("title",e.data("ui-tooltip-title"))}),this.disabledTitles=t([])},open:function(e){var i=this,s=t(e?e.target:this.element).closest(this.options.items);s.length&&!s.data("ui-tooltip-id")&&(s.attr("title")&&s.data("ui-tooltip-title",s.attr("title")),s.data("ui-tooltip-open",!0),e&&"mouseover"===e.type&&s.parents().each(function(){var e,s=t(this);s.data("ui-tooltip-open")&&(e=t.Event("blur"),e.target=e.currentTarget=this,i.close(e,!0)),s.attr("title")&&(s.uniqueId(),i.parents[this.id]={element:this,title:s.attr("title")},s.attr("title",""))}),this._registerCloseHandlers(e,s),this._updateContent(s,e))},_updateContent:function(t,e){var i,s=this.options.content,n=this,o=e?e.type:null;return"string"==typeof s||s.nodeType||s.jquery?this._open(e,t,s):(i=s.call(t[0],function(i){n._delay(function(){t.data("ui-tooltip-open")&&(e&&(e.type=o),this._open(e,t,i))})}),i&&this._open(e,t,i),void 0)},_open:function(e,i,s){function n(t){l.of=t,a.is(":hidden")||a.position(l)}var o,a,r,h,l=t.extend({},this.options.position);if(s){if(o=this._find(i))return o.tooltip.find(".ui-tooltip-content").html(s),void 0;i.is("[title]")&&(e&&"mouseover"===e.type?i.attr("title",""):i.removeAttr("title")),o=this._tooltip(i),a=o.tooltip,this._addDescribedBy(i,a.attr("id")),a.find(".ui-tooltip-content").html(s),this.liveRegion.children().hide(),h=t("<div>").html(a.find(".ui-tooltip-content").html()),h.removeAttr("name").find("[name]").removeAttr("name"),h.removeAttr("id").find("[id]").removeAttr("id"),h.appendTo(this.liveRegion),this.options.track&&e&&/^mouse/.test(e.type)?(this._on(this.document,{mousemove:n}),n(e)):a.position(t.extend({of:i},this.options.position)),a.hide(),this._show(a,this.options.show),this.options.track&&this.options.show&&this.options.show.delay&&(r=this.delayedShow=setInterval(function(){a.is(":visible")&&(n(l.of),clearInterval(r))},t.fx.interval)),this._trigger("open",e,{tooltip:a})}},_registerCloseHandlers:function(e,i){var s={keyup:function(e){if(e.keyCode===t.ui.keyCode.ESCAPE){var s=t.Event(e);s.currentTarget=i[0],this.close(s,!0)}}};i[0]!==this.element[0]&&(s.remove=function(){this._removeTooltip(this._find(i).tooltip)}),e&&"mouseover"!==e.type||(s.mouseleave="close"),e&&"focusin"!==e.type||(s.focusout="close"),this._on(!0,i,s)},close:function(e){var i,s=this,n=t(e?e.currentTarget:this.element),o=this._find(n);return o?(i=o.tooltip,o.closing||(clearInterval(this.delayedShow),n.data("ui-tooltip-title")&&!n.attr("title")&&n.attr("title",n.data("ui-tooltip-title")),this._removeDescribedBy(n),o.hiding=!0,i.stop(!0),this._hide(i,this.options.hide,function(){s._removeTooltip(t(this))}),n.removeData("ui-tooltip-open"),this._off(n,"mouseleave focusout keyup"),n[0]!==this.element[0]&&this._off(n,"remove"),this._off(this.document,"mousemove"),e&&"mouseleave"===e.type&&t.each(this.parents,function(e,i){t(i.element).attr("title",i.title),delete s.parents[e]}),o.closing=!0,this._trigger("close",e,{tooltip:i}),o.hiding||(o.closing=!1)),void 0):(n.removeData("ui-tooltip-open"),void 0)},_tooltip:function(e){var i=t("<div>").attr("role","tooltip"),s=t("<div>").appendTo(i),n=i.uniqueId().attr("id");return this._addClass(s,"ui-tooltip-content"),this._addClass(i,"ui-tooltip","ui-widget ui-widget-content"),i.appendTo(this._appendTo(e)),this.tooltips[n]={element:e,tooltip:i}},_find:function(t){var e=t.data("ui-tooltip-id");return e?this.tooltips[e]:null},_removeTooltip:function(t){t.remove(),delete this.tooltips[t.attr("id")]},_appendTo:function(t){var e=t.closest(".ui-front, dialog");return e.length||(e=this.document[0].body),e},_destroy:function(){var e=this;t.each(this.tooltips,function(i,s){var n=t.Event("blur"),o=s.element;n.target=n.currentTarget=o[0],e.close(n,!0),t("#"+i).remove(),o.data("ui-tooltip-title")&&(o.attr("title")||o.attr("title",o.data("ui-tooltip-title")),o.removeData("ui-tooltip-title"))}),this.liveRegion.remove()}}),t.uiBackCompat!==!1&&t.widget("ui.tooltip",t.ui.tooltip,{options:{tooltipClass:null},_tooltip:function(){var t=this._superApply(arguments);return this.options.tooltipClass&&t.tooltip.addClass(this.options.tooltipClass),t}}),t.ui.tooltip});
/*!
 * CanJS - 2.3.27
 * http://canjs.com/
 * Copyright (c) 2017 Bitovi
 * Wed, 09 Aug 2017 16:59:37 GMT
 * Licensed MIT

 * Includes: can/construct/construct,can/map/map,can/list/list,can/compute/compute,can/model/model,can/view/view,can/view/href/href,can/control/control,can/route/route,can/control/route/route,can/view/ejs/ejs,can/construct/proxy/proxy
 * Download from: http://bitbuilder.herokuapp.com/can.custom.js?configuration=jquery&minify=true&plugins=can%2Fconstruct%2Fconstruct&plugins=can%2Fmap%2Fmap&plugins=can%2Flist%2Flist&plugins=can%2Fcompute%2Fcompute&plugins=can%2Fmodel%2Fmodel&plugins=can%2Fview%2Fview&plugins=can%2Fview%2Fhref%2Fhref&plugins=can%2Fcontrol%2Fcontrol&plugins=can%2Froute%2Froute&plugins=can%2Fcontrol%2Froute%2Froute&plugins=can%2Fview%2Fejs%2Fejs&plugins=can%2Fconstruct%2Fproxy%2Fproxy
 */
/*[global-shim-start]*/
!function(exports,global){var origDefine=global.define,get=function(e){var o,l=e.split("."),n=global;for(o=0;o<l.length&&n;o++)n=n[l[o]];return n},modules=global.define&&global.define.modules||global._define&&global._define.modules||{},ourDefine=global.define=function(e,o,l){var n;"function"==typeof o&&(l=o,o=[]);var r,t=[];for(r=0;r<o.length;r++)t.push(exports[o[r]]?get(exports[o[r]]):modules[o[r]]||get(o[r]));if(!o.length&&l.length){n={exports:{}};var i=function(e){return exports[e]?get(exports[e]):modules[e]};t.push(i,n.exports,n)}else t[0]||"exports"!==o[0]?t[0]||"module"!==o[0]||(t[0]={id:e}):(n={exports:{}},t[0]=n.exports,"module"===o[1]&&(t[1]=n));global.define=origDefine;var a=l?l.apply(null,t):void 0;global.define=ourDefine,modules[e]=n&&n.exports?n.exports:a};global.define.orig=origDefine,global.define.modules=modules,global.define.amd=!0,ourDefine("@loader",[],function(){var noop=function(){};return{get:function(){return{prepareGlobal:noop,retrieveGlobal:noop}},global:global,__exec:function(__load){eval("(function() { "+__load.source+" \n }).call(global);")}}})}({},window);
/*can/util/can*/
define("can/util/can",[],function(){var e="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:global,n={};("undefined"==typeof GLOBALCAN||GLOBALCAN!==!1)&&(e.can=n),n.global=e,n.k=function(){},n.isDeferred=function(e){return n.dev&&n.dev.warn("can.isDeferred: this function is deprecated and will be removed in a future release. can.isPromise replaces the functionality of can.isDeferred."),e&&"function"==typeof e.then&&"function"==typeof e.pipe},n.isPromise=function(e){return!!e&&(window.Promise&&e instanceof Promise||n.isFunction(e.then)&&(void 0===n.List||!(e instanceof n.List)))},n.isMapLike=function(e){return n.Map&&(e instanceof n.Map||e&&e.___get)};var t=0;n.cid=function(e,n){return e._cid||(t++,e._cid=(n||"")+t),e._cid},n.VERSION="@EDGE",n.simpleExtend=function(e,n){for(var t in n)e[t]=n[t];return e},n.last=function(e){return e&&e[e.length-1]},n.isDOM=function(e){return(e.ownerDocument||e)===n.global.document},n.childNodes=function(e){var n=e.childNodes;if("length"in n)return n;for(var t=e.firstChild,o=[];t;)o.push(t),t=t.nextSibling;return o};var o=Function.prototype.bind;o?n.proxy=function(e,n){return o.call(e,n)}:n.proxy=function(e,n){return function(){return e.apply(n,arguments)}},n.frag=function(e,t){var o,r=t||n.document||n.global.document;return e&&"string"!=typeof e?11===e.nodeType?e:"number"==typeof e.nodeType?(o=r.createDocumentFragment(),o.appendChild(e),o):"number"==typeof e.length?(o=r.createDocumentFragment(),n.each(e,function(e){o.appendChild(n.frag(e))}),n.childNodes(o).length||o.appendChild(r.createTextNode("")),o):(o=n.buildFragment(""+e,r),n.childNodes(o).length||o.appendChild(r.createTextNode("")),o):(o=n.buildFragment(null==e?"":""+e,r),o.childNodes.length||o.appendChild(r.createTextNode("")),o)},n.scope=n.viewModel=function(e,t,o){e=n.$(e);var r=n.data(e,"scope")||n.data(e,"viewModel");switch(r||(r=new n.Map,n.data(e,"scope",r),n.data(e,"viewModel",r)),arguments.length){case 0:case 1:return r;case 2:return r.attr(t);default:return r.attr(t,o),e}};var r=function(e){var n=String(e).replace(/^\s+|\s+$/g,"").match(/^([^:\/?#]+:)?(\/\/(?:[^:@]*(?::[^:@]*)?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);return n?{href:n[0]||"",protocol:n[1]||"",authority:n[2]||"",host:n[3]||"",hostname:n[4]||"",port:n[5]||"",pathname:n[6]||"",search:n[7]||"",hash:n[8]||""}:null};return n.joinURIs=function(e,n){function t(e){var n=[];return e.replace(/^(\.\.?(\/|$))+/,"").replace(/\/(\.(\/|$))+/g,"/").replace(/\/\.\.$/,"/../").replace(/\/?[^\/]*/g,function(e){"/.."===e?n.pop():n.push(e)}),n.join("").replace(/^\//,"/"===e.charAt(0)?"/":"")}return n=r(n||""),e=r(e||""),n&&e?(n.protocol||e.protocol)+(n.protocol||n.authority?n.authority:e.authority)+t(n.protocol||n.authority||"/"===n.pathname.charAt(0)?n.pathname:n.pathname?(e.authority&&!e.pathname?"/":"")+e.pathname.slice(0,e.pathname.lastIndexOf("/")+1)+n.pathname:e.pathname)+(n.protocol||n.authority||n.pathname?n.search:n.search||e.search)+n.hash:null},n["import"]=function(e,t){var o=new n.Deferred;return"object"==typeof window.System&&n.isFunction(window.System["import"])?window.System["import"](e,{name:t}).then(n.proxy(o.resolve,o),n.proxy(o.reject,o)):window.define&&window.define.amd?window.require([e],function(e){o.resolve(e)}):window.steal?steal.steal(e,function(e){o.resolve(e)}):window.require?o.resolve(window.require(e)):o.resolve(),o.promise()},n.__observe=function(){},n.isNode="object"==typeof process&&"[object process]"==={}.toString.call(process),n.isBrowserWindow="undefined"!=typeof window&&"undefined"!=typeof document&&"undefined"==typeof SimpleDOM,n.isWebWorker="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope,n});
/*can/util/attr/attr*/
define("can/util/attr/attr",["can/util/can"],function(t){var e=t.global.setImmediate||function(t){return setTimeout(t,0)},r={input:!0,textarea:!0,select:!0},n=function(e,n){return n in e||t.document&&r[e.nodeName.toLowerCase()]},a={MutationObserver:t.global.MutationObserver||t.global.WebKitMutationObserver||t.global.MozMutationObserver,map:{"class":function(t,e){return e=e||"","http://www.w3.org/2000/svg"===t.namespaceURI?t.setAttribute("class",e):t.className=e,e},value:"value",innertext:"innerText",innerhtml:"innerHTML",textcontent:"textContent","for":"htmlFor",checked:!0,disabled:!0,readonly:function(t,e){return t.readOnly=e||"string"==typeof e?!0:!1,e},required:!0,src:function(t,e){return null==e||""===e?(t.removeAttribute("src"),null):(t.setAttribute("src",e),e)},style:function(){var e=t.global.document&&document.createElement("div");return e&&e.style&&"cssText"in e.style?function(t,e){return t.style.cssText=e||""}:function(t,e){return t.setAttribute("style",e)}}()},defaultValue:["input","textarea"],setAttrOrProp:function(t,e,r){e=e.toLowerCase();var n=a.map[e];n!==!0||r?this.set(t,e,r):this.remove(t,e)},setSelectValue:function(t,e){if(null!=e)for(var r=t.getElementsByTagName("option"),n=0;n<r.length;n++)if(e==r[n].value)return void(r[n].selected=!0);t.selectedIndex=-1},set:function(e,r,u){var o=t.isDOM(e)&&a.MutationObserver;r=r.toLowerCase();var i;o||(i=a.get(e,r));var s,l=a.map[r];"function"==typeof l?s=l(e,u):l===!0&&n(e,r)?(s=e[r]=!0,"checked"===r&&"radio"===e.type&&t.inArray((e.nodeName+"").toLowerCase(),a.defaultValue)>=0&&(e.defaultChecked=!0)):"string"==typeof l&&n(e,l)?(s=u,(e[l]!==u||"OPTION"===e.nodeName.toUpperCase())&&(e[l]=u),"value"===l&&t.inArray((e.nodeName+"").toLowerCase(),a.defaultValue)>=0&&(e.defaultValue=u)):a.setAttribute(e,r,u),o||s===i||a.trigger(e,r,i)},setAttribute:function(){var e=t.global.document;if(e&&document.createAttribute)try{e.createAttribute("{}")}catch(r){var n={},a=document.createElement("div");return function(t,e,r){var u,o,i=e.charAt(0);"{"!==i&&"("!==i&&"*"!==i||!t.setAttributeNode?t.setAttribute(e,r):(u=n[e],u||(a.innerHTML="<div "+e+'=""></div>',u=n[e]=a.childNodes[0].attributes[0]),o=u.cloneNode(),o.value=r,t.setAttributeNode(o))}}return function(t,e,r){t.setAttribute(e,r)}}(),trigger:function(r,n,a){return t.data(t.$(r),"canHasAttributesBindings")?(n=n.toLowerCase(),e(function(){t.trigger(r,{type:"attributes",attributeName:n,target:r,oldValue:a,bubbles:!1},[])})):void 0},get:function(t,e){e=e.toLowerCase();var r=a.map[e];return"string"==typeof r&&n(t,r)?t[r]:r===!0&&n(t,e)?t[e]:t.getAttribute(e)},remove:function(t,e){e=e.toLowerCase();var r;a.MutationObserver||(r=a.get(t,e));var u=a.map[e];"function"==typeof u&&u(t,void 0),u===!0&&n(t,e)?t[e]=!1:"string"==typeof u&&n(t,u)?t[u]="":t.removeAttribute(e),a.MutationObserver||null==r||a.trigger(t,e,r)},has:function(){var e=t.global.document&&document.createElement("div");return e&&e.hasAttribute?function(t,e){return t.hasAttribute(e)}:function(t,e){return null!==t.getAttribute(e)}}()};return a});
/*can/event/event*/
define("can/event/event",["can/util/can"],function(t){return t.addEvent=function(t,n){var e=this.__bindEvents||(this.__bindEvents={}),i=e[t]||(e[t]=[]);return i.push({handler:n,name:t}),this},t.listenTo=function(n,e,i){var r=this.__listenToEvents;r||(r=this.__listenToEvents={});var s=t.cid(n),o=r[s];o||(o=r[s]={obj:n,events:{}});var a=o.events[e];a||(a=o.events[e]=[]),a.push(i),t.bind.call(n,e,i)},t.stopListening=function(n,e,i){var r=this.__listenToEvents,s=r,o=0;if(!r)return this;if(n){var a=t.cid(n);if((s={})[a]=r[a],!r[a])return this}for(var v in s){var l,h=s[v];n=r[v].obj,e?(l={})[e]=h.events[e]:l=h.events;for(var u in l){var d=l[u]||[];for(o=0;o<d.length;)i&&i===d[o]||!i?(t.unbind.call(n,u,d[o]),d.splice(o,1)):o++;d.length||delete h.events[u]}t.isEmptyObject(h.events)&&delete r[v]}return this},t.removeEvent=function(t,n,e){if(!this.__bindEvents)return this;for(var i,r=this.__bindEvents[t]||[],s=0,o="function"==typeof n;s<r.length;)i=r[s],(e?e(i,t,n):o&&i.handler===n||!o&&(i.cid===n||!n))?r.splice(s,1):s++;return this},t.dispatch=function(t,n){var e=this.__bindEvents;if(e){var i;"string"==typeof t?(i=t,t={type:t}):i=t.type;var r=e[i];if(r){r=r.slice(0);var s=[t];n&&s.push.apply(s,n);for(var o=0,a=r.length;a>o;o++)r[o].handler.apply(this,s);return t}}},t.one=function(n,e){var i=function(){return t.unbind.call(this,n,i),e.apply(this,arguments)};return t.bind.call(this,n,i),this},t.event={on:function(){return 0===arguments.length&&t.Control&&this instanceof t.Control?t.Control.prototype.on.call(this):t.addEvent.apply(this,arguments)},off:function(){return 0===arguments.length&&t.Control&&this instanceof t.Control?t.Control.prototype.off.call(this):t.removeEvent.apply(this,arguments)},bind:t.addEvent,unbind:t.removeEvent,delegate:function(n,e,i){return t.addEvent.call(this,e,i)},undelegate:function(n,e,i){return t.removeEvent.call(this,e,i)},trigger:t.dispatch,one:t.one,addEvent:t.addEvent,removeEvent:t.removeEvent,listenTo:t.listenTo,stopListening:t.stopListening,dispatch:t.dispatch},t.event});
/*can/util/fragment*/
define("can/util/fragment",["can/util/can"],function(e){var t=/^\s*<(\w+)[^>]*>/,i={}.toString,l=function(l,n,r){void 0===n&&(n=t.test(l)&&RegExp.$1),l&&"[object Function]"===i.call(l.replace)&&(l=l.replace(/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,"<$1></$2>"));var d=r.createElement("div"),a=r.createElement("div");"tbody"===n||"tfoot"===n||"thead"===n||"colgroup"===n?(a.innerHTML="<table>"+l+"</table>",d=3===a.firstChild.nodeType?a.lastChild:a.firstChild):"col"===n?(a.innerHTML="<table><colgroup>"+l+"</colgroup></table>",d=3===a.firstChild.nodeType?a.lastChild:a.firstChild.firstChild):"tr"===n?(a.innerHTML="<table><tbody>"+l+"</tbody></table>",d=3===a.firstChild.nodeType?a.lastChild:a.firstChild.firstChild):"td"===n||"th"===n?(a.innerHTML="<table><tbody><tr>"+l+"</tr></tbody></table>",d=3===a.firstChild.nodeType?a.lastChild:a.firstChild.firstChild.firstChild):"option"===n?(a.innerHTML="<select>"+l+"</select>",d=3===a.firstChild.nodeType?a.lastChild:a.firstChild):d.innerHTML=""+l;var o={},h=e.childNodes(d);o.length=h.length;for(var c=0;c<h.length;c++)o[c]=h[c];return[].slice.call(o)};return e.buildFragment=function(e,t){if(e&&11===e.nodeType)return e;t?t.length&&(t=t[0]):t=document;for(var i=l(e,void 0,t),n=(t||document).createDocumentFragment(),r=0,d=i.length;d>r;r++)n.appendChild(i[r]);return n},function(){var t="<-\n>",i=e.buildFragment(t,document);if(t!==i.firstChild.nodeValue){var l=e.buildFragment;e.buildFragment=function(e,t){var i=l(e,t);return 1===i.childNodes.length&&3===i.childNodes[0].nodeType&&(i.childNodes[0].nodeValue=e),i}}}(),e});
/*can/util/array/isArrayLike*/
define("can/util/array/isArrayLike",["can/util/can"],function(n){n.isArrayLike=function(n){var e=n&&"boolean"!=typeof n&&"number"!=typeof n&&"length"in n&&n.length;return"function"!=typeof arr&&(0===e||"number"==typeof e&&e>0&&e-1 in n)}});
/*can/util/array/each*/
define("can/util/array/each",["can/util/can","can/util/array/isArrayLike"],function(a){return a.each=function(e,t,r){var i,n,l,c=0;if(e)if(a.isArrayLike(e))if(a.List&&e instanceof a.List)for(n=e.attr("length");n>c&&(l=e.attr(c),t.call(r||l,l,c,e)!==!1);c++);else for(n=e.length;n>c&&(l=e[c],t.call(r||l,l,c,e)!==!1);c++);else if("object"==typeof e)if(a.Map&&e instanceof a.Map||e===a.route){var f=a.Map.keys(e);for(c=0,n=f.length;n>c&&(i=f[c],l=e.attr(i),t.call(r||l,l,i,e)!==!1);c++);}else for(i in e)if(Object.prototype.hasOwnProperty.call(e,i)&&t.call(r||e[i],e[i],i,e)===!1)break;return e},a});
/*can/util/inserted/inserted*/
define("can/util/inserted/inserted",["can/util/can"],function(e){e.inserted=function(n,r){if(n.length){n=e.makeArray(n);for(var i,t,a=r||n[0].ownerDocument||n[0],d=!1,o=e.$(a.contains?a:a.body),s=0;void 0!==(t=n[s]);s++){if(!d){if(!t.getElementsByTagName)continue;if(!e.has(o,t).length)return;d=!0}if(d&&t.getElementsByTagName){i=e.makeArray(t.getElementsByTagName("*")),e.trigger(t,"inserted",[],!1);for(var f,c=0;void 0!==(f=i[c]);c++)e.trigger(f,"inserted",[],!1)}}}},e.appendChild=function(n,r,i){var t;t=11===r.nodeType?e.makeArray(e.childNodes(r)):[r],n.appendChild(r),e.inserted(t,i)},e.insertBefore=function(n,r,i,t){var a;a=11===r.nodeType?e.makeArray(e.childNodes(r)):[r],n.insertBefore(r,i),e.inserted(a,t)}});
/*can/util/jquery/jquery*/
define("can/util/jquery/jquery",["jquery/dist/jquery","can/util/can","can/util/attr/attr","can/event/event","can/util/fragment","can/util/array/each","can/util/inserted/inserted"],function(t,e,n,r){var i=function(t){return t.nodeName&&(1===t.nodeType||9===t.nodeType)||t==window||t.addEventListener};t=t||window.jQuery,t.extend(e,t,{trigger:function(n,r,a,s){i(n)?t.event.trigger(r,a,n,!s):n.trigger?n.trigger(r,a):("string"==typeof r&&(r={type:r}),r.target=r.target||n,a&&(a.length&&"string"==typeof a?a=[a]:a.length||(a=[a])),a||(a=[]),e.dispatch.call(n,r,a))},event:e.event,addEvent:e.addEvent,removeEvent:e.removeEvent,buildFragment:e.buildFragment,$:t,each:e.each,bind:function(n,r){return this.bind&&this.bind!==e.bind?this.bind(n,r):i(this)?t.event.add(this,n,r):e.addEvent.call(this,n,r),this},unbind:function(n,r){return this.unbind&&this.unbind!==e.unbind?this.unbind(n,r):i(this)?t.event.remove(this,n,r):e.removeEvent.call(this,n,r),this},delegate:function(n,r,a){return this.delegate?this.delegate(n,r,a):i(this)?t(this).delegate(n,r,a):e.bind.call(this,r,a),this},undelegate:function(n,r,a){return this.undelegate?this.undelegate(n,r,a):i(this)?t(this).undelegate(n,r,a):e.unbind.call(this,r,a),this},proxy:e.proxy,attr:n}),e.on=e.bind,e.off=e.unbind,t.each(["append","filter","addClass","remove","data","get","has"],function(t,n){e[n]=function(t){return t[n].apply(t,e.makeArray(arguments).slice(1))}});var a=t.cleanData;t.cleanData=function(n){t.each(n,function(t,n){n&&e.trigger(n,"removed",[],!1)}),a(n)};var s,u=t.fn.domManip;t.fn.domManip=function(t,e,n){for(var r=1;r<arguments.length;r++)if("function"==typeof arguments[r]){s=r;break}return u.apply(this,arguments)},t(document.createElement("div")).append(document.createElement("div"));var d=function(t){var n=t.childNodes;if("length"in n)return e.makeArray(n);for(var r=t.firstChild,i=[];r;)i.push(r),r=r.nextSibling;return i};void 0===s?(t.fn.domManip=u,e.each(["after","prepend","before","append","replaceWith"],function(n){var r=t.fn[n];t.fn[n]=function(){var t=[],n=e.makeArray(arguments);null!=n[0]&&("string"==typeof n[0]&&(n[0]=e.buildFragment(n[0])),t=11===n[0].nodeType?d(n[0]):e.isArrayLike(n[0])?e.makeArray(n[0]):[n[0]]);var i=r.apply(this,n);return e.inserted(t),i}})):t.fn.domManip=2===s?function(t,n,r){return u.call(this,t,n,function(t){var n;11===t.nodeType&&(n=e.makeArray(e.childNodes(t)));var i=r.apply(this,arguments);return e.inserted(n?n:[t]),i})}:function(t,n){return u.call(this,t,function(t){var r;11===t.nodeType&&(r=e.makeArray(e.childNodes(t)));var i=n.apply(this,arguments);return e.inserted(r?r:[t]),i})};var l=t.attr;t.attr=function(t,n){if(e.isDOM(t)&&e.attr.MutationObserver)return l.apply(this,arguments);var r,i;arguments.length>=3&&(r=l.call(this,t,n));var a=l.apply(this,arguments);return arguments.length>=3&&(i=l.call(this,t,n)),i!==r&&e.attr.trigger(t,n,r),a};var o=t.removeAttr;return t.removeAttr=function(t,n){if(e.isDOM(t)&&e.attr.MutationObserver)return o.apply(this,arguments);var r=l.call(this,t,n),i=o.apply(this,arguments);return null!=r&&e.attr.trigger(t,n,r),i},t.event.special.attributes={setup:function(){if(e.isDOM(this)&&e.attr.MutationObserver){var t=this,n=new e.attr.MutationObserver(function(n){n.forEach(function(n){var r=e.simpleExtend({},n);e.trigger(t,r,[])})});n.observe(this,{attributes:!0,attributeOldValue:!0}),e.data(e.$(this),"canAttributesObserver",n)}else e.data(e.$(this),"canHasAttributesBindings",!0)},teardown:function(){e.isDOM(this)&&e.attr.MutationObserver?(e.data(e.$(this),"canAttributesObserver").disconnect(),t.removeData(this,"canAttributesObserver")):t.removeData(this,"canHasAttributesBindings")}},t.event.special.inserted={},t.event.special.removed={},e});
/*can/util/util*/
define("can/util/util",["can/util/jquery/jquery"],function(u){return u});
/*can/util/string/string*/
define("can/util/string/string",["can/util/util"],function(e){var r=/_|-/,n=/\=\=/,t=/([A-Z]+)([A-Z][a-z])/g,a=/([a-z\d])([A-Z])/g,u=/([a-z\d])([A-Z])/g,i=/\{([^\}]+)\}/g,c=/"/g,o=/'/g,l=/-+(.)?/g,p=/[a-z][A-Z]/g,f=function(e,r,n){var t=e[r];return void 0===t&&n===!0&&(t=e[r]={}),t},g=function(e){return/^f|^o/.test(typeof e)},d=function(e){var r=null===e||void 0===e||isNaN(e)&&""+e=="NaN";return""+(r?"":e)};return e.extend(e,{esc:function(e){return d(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(c,"&#34;").replace(o,"&#39;")},getObject:function(r,n,t){var a,u,i,c,o=r?r.split("."):[],l=o.length,p=0;if(n=e.isArray(n)?n:[n||window],c=n.length,!l)return n[0];for(p;c>p;p++){for(a=n[p],i=void 0,u=0;l>u&&g(a);u++)i=a,a=f(i,o[u]);if(void 0!==i&&void 0!==a)break}if(t===!1&&void 0!==a&&delete i[o[u-1]],t===!0&&void 0===a)for(a=n[0],u=0;l>u&&g(a);u++)a=f(a,o[u],!0);return a},capitalize:function(e,r){return e.charAt(0).toUpperCase()+e.slice(1)},camelize:function(e){return d(e).replace(l,function(e,r){return r?r.toUpperCase():""})},hyphenate:function(e){return d(e).replace(p,function(e,r){return e.charAt(0)+"-"+e.charAt(1).toLowerCase()})},underscore:function(e){return e.replace(n,"/").replace(t,"$1_$2").replace(a,"$1_$2").replace(u,"_").toLowerCase()},sub:function(r,n,t){var a=[];return r=r||"",a.push(r.replace(i,function(r,u){var i=e.getObject(u,n,t===!0?!1:void 0);return void 0===i||null===i?(a=null,""):g(i)&&a?(a.push(i),""):""+i})),null===a?a:a.length<=1?a[0]:a},replacer:i,undHash:r}),e});
/*can/construct/construct*/
define("can/construct/construct",["can/util/string/string"],function(t){var n,e=0;try{Object.getOwnPropertyDescriptor({}),n=!0}catch(r){n=!1}var o=function(t,n){var e=Object.getOwnPropertyDescriptor(t,n);return e&&(e.get||e.set)?e:null},s=function(n,e,r){r=r||n;var s;for(var i in n)(s=o(n,i))?this._defineProperty(r,e,i,s):t.Construct._overwrite(r,e,i,n[i])},i=function(n,e,r){r=r||n;for(var o in n)t.Construct._overwrite(r,e,o,n[o])};return t.Construct=function(){return arguments.length?t.Construct.extend.apply(t.Construct,arguments):void 0},t.extend(t.Construct,{constructorExtends:!0,newInstance:function(){var t,n=this.instance();return n.setup&&(n.__inSetup=!0,t=n.setup.apply(n,arguments),delete n.__inSetup),n.init&&n.init.apply(n,t||arguments),n},_inherit:n?s:i,_defineProperty:function(t,n,e,r){Object.defineProperty(t,e,r)},_overwrite:function(t,n,e,r){t[e]=r},setup:function(n,e){this.defaults=t.extend(!0,{},n.defaults,this.defaults)},instance:function(){e=1;var t=new this;return e=0,t},extend:function(n,r,o){function s(){return e?void 0:this.constructor!==a&&arguments.length&&a.constructorExtends?a.extend.apply(a,arguments):a.newInstance.apply(a,arguments)}var i=n,u=r,c=o;"string"!=typeof i&&(c=u,u=i,i=null),c||(c=u,u=null),c=c||{};var a,p,f,l,h,d,y,m,g,v=this,_=this.prototype;g=this.instance(),t.Construct._inherit(c,_,g),i?(p=i.split("."),y=p.pop()):u&&u.shortName?y=u.shortName:this.shortName&&(y=this.shortName),"undefined"==typeof constructorName&&(a=function(){return s.apply(this,arguments)});for(d in v)v.hasOwnProperty(d)&&(a[d]=v[d]);t.Construct._inherit(u,v,a),i&&(f=t.getObject(p.join("."),window,!0),m=f,l=t.underscore(i.replace(/\./g,"_")),h=t.underscore(y),f[y]=a),t.extend(a,{constructor:a,prototype:g,namespace:m,_shortName:h,fullName:i,_fullName:l}),void 0!==y&&(a.shortName=y),a.prototype.constructor=a;var w=[v].concat(t.makeArray(arguments)),C=a.setup.apply(a,w);return a.init&&a.init.apply(a,C||w),a}}),t.Construct.prototype.setup=function(){},t.Construct.prototype.init=function(){},t.Construct});
/*can/util/bind/bind*/
define("can/util/bind/bind",["can/util/util"],function(i){return i.bindAndSetup=function(){return i.addEvent.apply(this,arguments),this.__inSetup||(this._bindings?this._bindings++:(this._bindings=1,this._bindsetup&&this._bindsetup())),this},i.unbindAndTeardown=function(n,t){if(!this.__bindEvents)return this;var s=this.__bindEvents[n]||[],d=s.length;return i.removeEvent.apply(this,arguments),null===this._bindings?this._bindings=0:this._bindings=this._bindings-(d-s.length),!this._bindings&&this._bindteardown&&this._bindteardown(),this},i});
/*can/map/bubble*/
define("can/map/bubble",["can/util/util"],function(n){var i=n.bubble={bind:function(n,e){if(!n.__inSetup){var b,t=i.events(n,e),r=t.length;n._bubbleBindings||(n._bubbleBindings={});for(var u=0;r>u;u++)b=t[u],n._bubbleBindings[b]?n._bubbleBindings[b]++:(n._bubbleBindings[b]=1,i.childrenOf(n,b))}},unbind:function(e,b){for(var t,r=i.events(e,b),u=r.length,d=0;u>d;d++)t=r[d],e._bubbleBindings&&e._bubbleBindings[t]--,e._bubbleBindings&&!e._bubbleBindings[t]&&(delete e._bubbleBindings[t],i.teardownChildrenFrom(e,t),n.isEmptyObject(e._bubbleBindings)&&delete e._bubbleBindings)},add:function(e,b,t){if(b instanceof n.Map&&e._bubbleBindings)for(var r in e._bubbleBindings)e._bubbleBindings[r]&&(i.teardownFromParent(e,b,r),i.toParent(b,e,t,r))},addMany:function(n,e){for(var b=0,t=e.length;t>b;b++)i.add(n,e[b],b)},remove:function(e,b){if(b instanceof n.Map&&e._bubbleBindings)for(var t in e._bubbleBindings)e._bubbleBindings[t]&&i.teardownFromParent(e,b,t)},removeMany:function(n,e){for(var b=0,t=e.length;t>b;b++)i.remove(n,e[b])},set:function(e,b,t,r){return n.isMapLike(t)&&i.add(e,t,b),n.isMapLike(r)&&i.remove(e,r),t},events:function(n,i){return n.constructor._bubbleRule(i,n)},toParent:function(i,e,b,t){n.listenTo.call(e,i,t,function(){var r=n.makeArray(arguments),u=r.shift();r[0]=(n.List&&e instanceof n.List?e.indexOf(i):b)+(r[0]?"."+r[0]:""),u.triggeredNS=u.triggeredNS||{},u.triggeredNS[e._cid]||(u.triggeredNS[e._cid]=!0,n.trigger(e,u,r),"change"===t&&n.trigger(e,r[0],[r[2],r[3]]))})},childrenOf:function(n,e){n._each(function(b,t){b&&b.bind&&i.toParent(b,n,t,e)})},teardownFromParent:function(i,e,b){e&&e.unbind&&n.stopListening.call(i,e,b)},teardownChildrenFrom:function(n,e){n._each(function(b){i.teardownFromParent(n,b,e)})},isBubbling:function(n,i){return n._bubbleBindings&&n._bubbleBindings[i]}};return i});
/*can/util/object/isplain/isplain*/
define("can/util/object/isplain/isplain",["can/util/can"],function(t){var n=Object.prototype.hasOwnProperty,r=function(t){return null!==t&&t==t.window},o=function(t){if(!t||"object"!=typeof t||t.nodeType||r(t))return!1;try{if(t.constructor&&!n.call(t,"constructor")&&!n.call(t.constructor.prototype,"isPrototypeOf"))return!1}catch(o){return!1}var c;for(c in t);return void 0===c||n.call(t,c)};return t.isPlainObject=o,t});
/*can/map/map_helpers*/
define("can/map/map_helpers",["can/util/util","can/util/object/isplain/isplain"],function(n){var t={attrParts:function(n,t){return t?[n]:"object"==typeof n?n:(""+n).split(".")},canMakeObserve:function(t){return t&&!n.isPromise(t)&&(n.isArray(t)||n.isPlainObject(t))},serialize:function(){var e=null;return function(i,r,a){var u=n.cid(i),c=!1;return e||(c=!0,e={attr:{},serialize:{}}),e[r][u]=a,i.each(function(u,c){var o,d=n.isMapLike(u),l=d&&e[r][n.cid(u)];o=l?l:i["___"+r]?i["___"+r](c,u):t.getValue(i,c,u,r),void 0!==o&&(a[c]=o)}),c&&(e=null),a}}(),getValue:function(t,e,i,r){return n.isMapLike(i)?i[r]():i},define:null,addComputedAttr:function(n,t,e){n._computedAttrs[t]={compute:e,count:0,handler:function(e,i,r){n._triggerChange(t,"set",i,r,e.batchNum)}}},addToMap:function(t,r){var a;e||(a=i,e={});var u=t._cid,c=n.cid(t);return e[c]||(e[c]={obj:t,instance:r,added:!u}),a},getMapFromObject:function(n){return e&&e[n._cid]&&e[n._cid].instance}},e=null,i=function(){for(var n in e)e[n].added&&delete e[n].obj._cid;e=null};return t});
/*can/util/batch/batch*/
define("can/util/batch/batch",["can/util/can"],function(t){var a=1,n=0,c=null,e=null,s=[],u=!1;t.batch={start:function(t){if(n++,1===n){var c={events:[],callbacks:[],number:a++};s.push(c),t&&c.callbacks.push(t),e=c}},stop:function(a,l){if(a?n=0:n--,0===n){e=null;var h;if(u===!1){u=!0;for(var r,i=[];h=s.shift();){var b=h.events;i.push.apply(i,h.callbacks),c=h,t.batch.batchNum=h.number;var p;for(l&&t.batch.start(),r=0,p=b.length;p>r;r++)t.dispatch.apply(b[r][0],b[r][1]);t.batch._onDispatchedEvents(h.number),c=null,t.batch.batchNum=void 0}for(r=i.length-1;r>=0;r--)i[r]();u=!1}}},_onDispatchedEvents:function(){},trigger:function(a,n,c){a.__inSetup||(n="string"==typeof n?{type:n}:n,e?(n.batchNum=e.number,e.events.push([a,[n,c]])):n.batchNum?t.dispatch.call(a,n,c):s.length?(t.batch.start(),n.batchNum=e.number,e.events.push([a,[n,c]]),t.batch.stop()):t.dispatch.call(a,n,c))},afterPreviousEvents:function(a){var n=t.last(s);if(n){var c={};t.bind.call(c,"ready",a),n.events.push([c,[{type:"ready"},[]]])}else a({})},after:function(t){var a=e||c;a?a.callbacks.push(t):t({})}}});
/*can/compute/get_value_and_bind*/
define("can/compute/get_value_and_bind",["can/util/util"],function(e){function t(t,n,r){this.newObserved={},this.oldObserved=null,this.func=t,this.context=n,this.compute=r,this.onDependencyChange=e.proxy(this.onDependencyChange,this),this.depth=null,this.childDepths={},this.ignore=0,this.inBatch=!1,this.ready=!1,r.observedInfo=this,this.setReady=e.proxy(this._setReady,this)}e.simpleExtend(t.prototype,{getPrimaryDepth:function(){return this.compute._primaryDepth},_setReady:function(){this.ready=!0},getDepth:function(){return null!==this.depth?this.depth:this.depth=this._getDepth()},_getDepth:function(){var e=0,t=this.childDepths;for(var n in t)t[n]>e&&(e=t[n]);return e+1},addEdge:function(e){e.obj.bind(e.event,this.onDependencyChange),e.obj.observedInfo&&(this.childDepths[e.obj._cid]=e.obj.observedInfo.getDepth(),this.depth=null)},removeEdge:function(e){e.obj.unbind(e.event,this.onDependencyChange),e.obj.observedInfo&&(delete this.childDepths[e.obj._cid],this.depth=null)},dependencyChange:function(e){this.bound&&this.ready&&(void 0!==e.batchNum?e.batchNum!==this.batchNum&&(t.registerUpdate(this),this.batchNum=e.batchNum):this.updateCompute(e.batchNum))},onDependencyChange:function(e,t,n){this.dependencyChange(e,t,n)},updateCompute:function(e){if(this.bound){var t=this.value;this.getValueAndBind(),this.compute.updater(this.value,t,e)}},getValueAndBind:function(){this.bound=!0,this.oldObserved=this.newObserved||{},this.ignore=0,this.newObserved={},this.ready=!1,h.push(this),this.value=this.func.call(this.context),h.pop(),this.updateBindings(),e.batch.afterPreviousEvents(this.setReady)},updateBindings:function(){var e,t,n=this.newObserved,r=this.oldObserved;for(e in n)t=n[e],r[e]?r[e]=null:this.addEdge(t);for(e in r)t=r[e],t&&this.removeEdge(t)},teardown:function(){this.bound=!1;for(var e in this.newObserved){var t=this.newObserved[e];this.removeEdge(t)}this.newObserved={}}});var n,r=[],i=1/0,s=0;t.registerUpdate=function(e,t){var n=e.getDepth()-1,h=e.getPrimaryDepth();i=Math.min(h,i),s=Math.max(h,s);var o=r[h]||(r[h]={observeInfos:[],current:1/0,max:0}),a=o.observeInfos[n]||(o.observeInfos[n]=[]);a.push(e),o.current=Math.min(n,o.current),o.max=Math.max(n,o.max)},t.updateUntil=function(e,t){for(var h;;){if(!(s>=i&&e>=i))return;var o=r[i];if(o&&o.current<=o.max){if(o.current>t)return;var a=o.observeInfos[o.current];a&&(h=a.pop())?h.updateCompute(n):o.current++}else i++}},t.batchEnd=function(e){var t;for(n=e;;){if(!(s>=i))return r=[],i=1/0,void(s=0);var h=r[i];if(h&&h.current<=h.max){var o=h.observeInfos[h.current];o&&(t=o.pop())?t.updateCompute(e):h.current++}else i++}};var h=[];return e.__observe=function(e,t){var n=h[h.length-1];if(n&&!n.ignore){var r=t+"",i=e._cid+"|"+r;n.traps?n.traps.push({obj:e,event:r,name:i}):n.newObserved[i]||(n.newObserved[i]={obj:e,event:r})}},e.__reading=e.__observe,e.__trapObserves=function(){if(h.length){var e=h[h.length-1],t=e.traps=[];return function(){return e.traps=null,t}}return function(){return[]}},e.__observes=function(e){var t=h[h.length-1];if(t)for(var n=0,r=e.length;r>n;n++){var i=e[n],s=i.name;t.newObserved[s]||(t.newObserved[s]=i)}},e.__isRecordingObserves=function(){var e=h.length,t=h[e-1];return e&&0===t.ignore&&t},e.__notObserve=function(e){return function(){if(h.length){var t=h[h.length-1];t.ignore++;var n=e.apply(this,arguments);return t.ignore--,n}return e.apply(this,arguments)}},e.batch._onDispatchedEvents=t.batchEnd,t});
/*can/map/map*/
define("can/map/map",["can/util/util","can/util/bind/bind","can/map/bubble","can/map/map_helpers","can/construct/construct","can/util/batch/batch","can/compute/get_value_and_bind"],function(t,e,i,n){var r={constructor:!0},s=t.Map=t.Construct.extend({setup:function(){if(t.Construct.setup.apply(this,arguments),this._computedPropertyNames=[],t.Map){this.defaults||(this.defaults={});for(var e in this.prototype)"define"!==e&&"constructor"!==e&&("function"!=typeof this.prototype[e]||this.prototype[e].prototype instanceof t.Construct)?this.defaults[e]=this.prototype[e]:this.prototype[e].isComputed&&this._computedPropertyNames.push(e);n.define&&n.define(this)}!t.List||this.prototype instanceof t.List||(this.List=s.List.extend({Map:this},{}))},shortName:"Map",_bubbleRule:function(t){return"change"===t||t.indexOf(".")>=0?["change"]:[]},bind:t.bindAndSetup,unbind:t.unbindAndTeardown,id:"id",keys:function(e){var i=[];t.__observe(e,"__keys");for(var n in e._data)i.push(n);return i}},{setup:function(e){e instanceof t.Map&&(e=e.serialize()),this._data={},t.cid(this,".map"),this._setupComputedProperties();var i=e&&n.addToMap(e,this),r=this._setupDefaults(e),s=t.extend(t.extend(!0,{},r),e);this.attr(s),i&&i()},_setupComputedProperties:function(){this._computedAttrs={};for(var t=this.constructor._computedPropertyNames,e=0,i=t.length;i>e;e++){var r=t[e];n.addComputedAttr(this,r,this[r].clone(this))}},_setupDefaults:function(){return this.constructor.defaults||{}},attr:function(t,e){var i=typeof t;return void 0===t?this._getAttrs():"string"!==i&&"number"!==i?this._setAttrs(t,e):1===arguments.length?this._get(t+""):(this._set(t+"",e),this)},_get:function(e){var i=e.indexOf(".");if(i>=0){var n=this.___get(e);if(void 0!==n)return t.__observe(this,e),n;var r=e.substr(0,i),s=e.substr(i+1),o=this.__get(r);return o&&o._get?o._get(s):void 0}return this.__get(e)},__get:function(e){return r[e]||this._computedAttrs[e]||t.__observe(this,e),this.___get(e)},___get:function(t){if(void 0!==t){var e=this._computedAttrs[t];return e&&e.compute?e.compute():this._data.hasOwnProperty(t)?this._data[t]:void 0}return this._data},_set:function(e,i,n){var r,s=e.indexOf(".");if(s>=0&&!n){var o=e.substr(0,s),a=e.substr(s+1);if(r=this.__inSetup?void 0:this.___get(o),!t.isMapLike(r))throw new Error("can.Map: Object does not exist");r._set(a,i)}else r=this.__inSetup?void 0:this.___get(e),this.__convert&&(i=this.__convert(e,i)),this.__set(e,this.__type(i,e),r)},__type:function(e,i){if("object"==typeof e&&!(e instanceof t.Map)&&n.canMakeObserve(e)){var r=n.getMapFromObject(e);if(r)return r;if(t.isArray(e)){var s=t.List;return new s(e)}var o=this.constructor.Map||t.Map;return new o(e)}return e},__set:function(t,e,n){if(e!==n){var r=this._computedAttrs[t],s=r||void 0!==n||this.___get().hasOwnProperty(t)?"set":"add";this.___set(t,"object"==typeof e?i.set(this,t,e,n):e),r&&r.count||this._triggerChange(t,s,e,n),"object"==typeof n&&i.teardownFromParent(this,n)}},___set:function(t,e){var i=this._computedAttrs[t];i&&i.compute?i.compute(e):this._data[t]=e,"function"==typeof this.constructor.prototype[t]||i||(this[t]=e)},removeAttr:function(t){return this._remove(t)},_remove:function(t){var e=n.attrParts(t),i=e.shift(),r=this.___get(i);return e.length&&r?r.removeAttr(e):("string"==typeof t&&~t.indexOf(".")&&(i=t),this.__remove(i,r),r)},__remove:function(t,e){t in this._data&&(this.___remove(t),this._triggerChange(t,"remove",void 0,e))},___remove:function(t){delete this._data[t],t in this.constructor.prototype||delete this[t]},___serialize:function(t,e){return n.getValue(this,t,e,"serialize")},_getAttrs:function(){return n.serialize(this,"attr",{})},_setAttrs:function(e,i){e=t.simpleExtend({},e);var r,s,o=this;t.batch.start(),this._each(function(r,a){if("_cid"!==a){if(s=e[a],void 0===s)return void(i&&o.removeAttr(a));o.__convert&&(s=o.__convert(a,s)),t.isMapLike(r)&&n.canMakeObserve(s)?r.attr(s,i):r!==s&&o.__set(a,o.__type(s,a),r),delete e[a]}});for(r in e)"_cid"!==r&&(s=e[r],this._set(r,s,!0));return t.batch.stop(),this},serialize:function(){return n.serialize(this,"serialize",{})},_triggerChange:function(e,n,r,s,o){i.isBubbling(this,"change")&&t.batch.trigger(this,{type:"change",target:this,batchNum:o},[e,n,r,s]),t.batch.trigger(this,{type:e,target:this,batchNum:o},[r,s]),("remove"===n||"add"===n)&&t.batch.trigger(this,{type:"__keys",target:this,batchNum:o})},_bindsetup:function(){},_bindteardown:function(){},one:t.one,bind:function(e,n){var r=this._computedAttrs&&this._computedAttrs[e];return r&&r.compute&&(r.count?r.count++:(r.count=1,r.compute.bind("change",r.handler))),i.bind(this,e),t.bindAndSetup.apply(this,arguments)},unbind:function(e,n){var r=this._computedAttrs&&this._computedAttrs[e];return r&&(1===r.count?(r.count=0,r.compute.unbind("change",r.handler)):r.count--),i.unbind(this,e),t.unbindAndTeardown.apply(this,arguments)},compute:function(e){if(t.isFunction(this.constructor.prototype[e]))return t.compute(this[e],this);var i=t.compute.read.reads(e),n=i.length-1;return t.compute(function(e){return arguments.length?void t.compute.read(this,i.slice(0,n)).value.attr(i[n].key,e):t.compute.read(this,i,{args:[]}).value},this)},each:function(){return t.each.apply(void 0,[this].concat(t.makeArray(arguments)))},_each:function(t){var e=this.___get();for(var i in e)e.hasOwnProperty(i)&&t(e[i],i)},dispatch:t.dispatch});return s.prototype.on=s.prototype.bind,s.prototype.off=s.prototype.unbind,s.on=s.bind,s.off=s.unbind,s});
/*can/list/list*/
define("can/list/list",["can/util/util","can/map/map","can/map/bubble","can/map/map_helpers"],function(t,e,i,r){var s=[].splice,n=function(){var t={0:"a",length:1};return s.call(t,0,1),!t[0]}(),h=e.extend({Map:e},{setup:function(e,i){this.length=0,t.cid(this,".map"),this._setupComputedProperties(),e=e||[];var s;t.isPromise(e)?this.replace(e):(s=e.length&&r.addToMap(e,this),this.push.apply(this,t.makeArray(e||[]))),s&&s(),t.simpleExtend(this,i)},_triggerChange:function(i,r,s,n){e.prototype._triggerChange.apply(this,arguments);var h=+i;~(""+i).indexOf(".")||isNaN(h)||("add"===r?(t.batch.trigger(this,r,[s,h]),t.batch.trigger(this,"length",[this.length])):"remove"===r?(t.batch.trigger(this,r,[n,h]),t.batch.trigger(this,"length",[this.length])):t.batch.trigger(this,r,[s,h]))},___get:function(t){if(t){var e=this._computedAttrs[t];return e&&e.compute?e.compute():this[t]}return this},__set:function(e,i,r){if(e=isNaN(+e)||e%1?e:+e,"number"==typeof e&&e>this.length-1){var s=new Array(e+1-this.length);return s[s.length-1]=i,this.push.apply(this,s),s}return t.Map.prototype.__set.call(this,""+e,i,r)},___set:function(t,e){this[t]=e,+t>=this.length&&(this.length=+t+1)},__remove:function(t,e){isNaN(+t)?(delete this[t],this._triggerChange(t,"remove",void 0,e)):this.splice(t,1)},_each:function(t){for(var e=this.___get(),i=0;i<e.length;i++)t(e[i],i)},serialize:function(){return r.serialize(this,"serialize",[])},splice:function(e,r){var h,a,o,c=t.makeArray(arguments),l=[],u=c.length>2;for(e=e||0,h=0,a=c.length-2;a>h;h++)o=h+2,c[o]=this.__type(c[o],o),l.push(c[o]),this[h+e]!==c[o]&&(u=!1);if(u&&this.length<=l.length)return l;void 0===r&&(r=c[1]=this.length-e);var p=s.apply(this,c);if(!n)for(h=this.length;h<p.length+this.length;h++)delete this[h];return t.batch.start(),r>0&&(i.removeMany(this,p),this._triggerChange(""+e,"remove",void 0,p)),c.length>2&&(i.addMany(this,l),this._triggerChange(""+e,"add",l,p)),t.batch.stop(),p},_getAttrs:function(){return r.serialize(this,"attr",[])},_setAttrs:function(e,i){e=t.makeArray(e),t.batch.start(),this._updateAttrs(e,i),t.batch.stop()},_updateAttrs:function(e,i){for(var s=Math.min(e.length,this.length),n=0;s>n;n++){var h=this[n],a=e[n];t.isMapLike(h)&&r.canMakeObserve(a)?h.attr(a,i):h!==a&&this._set(n+"",a)}e.length>this.length?this.push.apply(this,e.slice(this.length)):e.length<this.length&&i&&this.splice(e.length)}}),a=function(e){return e[0]&&t.isArray(e[0])?e[0]:t.makeArray(e)};return t.each({push:"length",unshift:0},function(e,r){var s=[][r];h.prototype[r]=function(){t.batch.start();for(var r,n,h=[],a=e?this.length:0,o=arguments.length;o--;)n=arguments[o],h[o]=i.set(this,o,this.__type(n,o));return r=s.apply(this,h),(!this.comparator||h.length)&&this._triggerChange(""+a,"add",h,void 0),t.batch.stop(),r}}),t.each({pop:"length",shift:0},function(e,r){h.prototype[r]=function(){if(!this.length)return void 0;var s=a(arguments),n=e&&this.length?this.length-1:0,h=[][r].apply(this,s);return t.batch.start(),this._triggerChange(""+n,"remove",void 0,[h]),h&&h.unbind&&i.remove(this,h),t.batch.stop(),h}}),t.extend(h.prototype,{indexOf:function(e,i){return t.__observe(this,"length"),t.inArray(e,this,i)},join:function(){return t.__observe(this,"length"),[].join.apply(this,arguments)},reverse:function(){var e=[].reverse.call(t.makeArray(this));return this.replace(e)},slice:function(){t.__observe(this,"length");var e=Array.prototype.slice.apply(this,arguments);return new this.constructor(e)},concat:function(){var e=[];return t.each(t.makeArray(arguments),function(i,r){e[r]=i instanceof t.List?i.serialize():i}),new this.constructor(Array.prototype.concat.apply(this.serialize(),e))},forEach:function(e,i){return t.each(this,e,i||this)},replace:function(e){if(t.isPromise(e)){this._promise&&(this._promise.__isCurrentPromise=!1);var i=this._promise=e;i.__isCurrentPromise=!0;var r=this;e.then(function(t){i.__isCurrentPromise&&r.replace(t)})}else this.splice.apply(this,[0,this.length].concat(t.makeArray(e||[])));return this},filter:function(t,e){var i,r=new this.constructor,s=this;return this.each(function(n,h,a){i=t.call(e|s,n,h,s),i&&r.push(n)}),r},map:function(e,i){var r=new t.List,s=this;return this.each(function(t,n,h){var a=e.call(i|s,t,n,s);r.push(a)}),r}}),t.List=e.List=h,t.List});
/*can/compute/read*/
define("can/compute/read",["can/util/util"],function(e){var t=function(e,r,a){a=a||{};for(var o,s,i={foundObservable:!1},u=n(e,0,r,a,i),d=r.length,v=0;d>v;){s=u;for(var l=0,f=t.propertyReaders.length;f>l;l++){var c=t.propertyReaders[l];if(c.test(u)){u=c.read(u,r[v],v,a,i);break}}if(v+=1,u=n(u,v,r,a,i,s),o=typeof u,v<r.length&&(null===u||"function"!==o&&"object"!==o))return a.earlyExit&&a.earlyExit(s,v-1,u),{value:void 0,parent:s}}return void 0===u&&a.earlyExit&&a.earlyExit(s,v-1),{value:u,parent:s}},r=function(e,t){var r=t[e-1];return r&&r.at},n=function(e,r,n,a,o,s){var i;do{i=!1;for(var u=0,d=t.valueReaders.length;d>u;u++)t.valueReaders[u].test(e,r,n,a)&&(e=t.valueReaders[u].read(e,r,n,a,o,s))}while(i);return e};t.valueReaders=[{name:"compute",test:function(e,t,n,a){return e&&e.isComputed&&!r(t,n)},read:function(t,r,n,a,o){return a.readCompute===!1&&r===n.length?t:(!o.foundObservable&&a.foundObservable&&(a.foundObservable(t,r),o.foundObservable=!0),t instanceof e.Compute?t.get():t())}},{name:"function",test:function(t,r,n,a){var o=typeof t;return!("function"!==o||t.isComputed||e.Construct&&t.prototype instanceof e.Construct||e.route&&t===e.route)},read:function(t,n,a,o,s,i){return r(n,a)?n===a.length?e.proxy(t,i):t:o.callMethodsOnObservables&&e.isMapLike(i)?t.apply(i,o.args||[]):o.isArgument&&n===a.length?o.proxyMethods!==!1?e.proxy(t,i):t:t.apply(i,o.args||[])}}],t.propertyReaders=[{name:"map",test:e.isMapLike,read:function(e,t,r,n,a){!a.foundObservable&&n.foundObservable&&(n.foundObservable(e,r),a.foundObservable=!0);var o=e.attr(t.key);return void 0!==o?o:e[t.key]}},{name:"promise",test:function(t){return e.isPromise(t)},read:function(t,r,n,a,o){!o.foundObservable&&a.foundObservable&&(a.foundObservable(t,n),o.foundObservable=!0);var s=t.__observeData;return t.__observeData||(s=t.__observeData={isPending:!0,state:"pending",isResolved:!1,isRejected:!1,value:void 0,reason:void 0},e.cid(s),e.simpleExtend(s,e.event),t.then(function(e){s.isPending=!1,s.isResolved=!0,s.value=e,s.state="resolved",s.dispatch("state",["resolved","pending"])},function(e){s.isPending=!1,s.isRejected=!0,s.reason=e,s.state="rejected",s.dispatch("state",["rejected","pending"])})),e.__observe(s,"state"),r.key in s?s[r.key]:t[r.key]}},{name:"object",test:function(){return!0},read:function(e,t){return null==e?void 0:t.key in e?e[t.key]:t.at&&a[t.key]&&"@"+t.key in e?(t.at=!1,e["@"+t.key]):void 0}}];var a={index:!0,key:!0,event:!0,element:!0,viewModel:!0};return t.write=function(t,r,n,a){return a=a||{},e.isMapLike(t)?!a.isArgument&&t._data&&t._data[r]&&t._data[r].isComputed?t._data[r](n):t.attr(r,n):t[r]&&t[r].isComputed?t[r](n):void("object"==typeof t&&(t[r]=n))},t.reads=function(e){var t=[],r=0,n=!1;"@"===e.charAt(0)&&(r=1,n=!0);for(var a="",o=r;o<e.length;o++){var s=e.charAt(o);"."===s||"@"===s?"\\"!==e.charAt(o-1)?(t.push({key:a,at:n}),n="@"===s,a=""):a=a.substr(0,a.length-1)+".":a+=s}return t.push({key:a,at:n}),t},t});
/*can/compute/proto_compute*/
define("can/compute/proto_compute",["can/util/util","can/util/bind/bind","can/compute/read","can/compute/get_value_and_bind","can/util/batch/batch"],function(t,e,n,i){t.Compute=function(e,n,i,s){t.cid(this,"compute");for(var u=[],r=0,h=arguments.length;h>r;r++)u[r]=arguments[r];var a=typeof u[1];"function"==typeof u[0]?this._setupGetterSetterFn(u[0],u[1],u[2],u[3]):u[1]?"string"===a?this._setupProperty(u[0],u[1],u[2]):"function"===a?this._setupSetter(u[0],u[1],u[2]):u[1]&&u[1].fn?this._setupAsyncCompute(u[0],u[1]):this._setupSettings(u[0],u[1]):this._setupSimpleValue(u[0]),this._args=u,this._primaryDepth=0,this.isComputed=!0},t.simpleExtend(t.Compute.prototype,{setPrimaryDepth:function(t){this._primaryDepth=t},_setupGetterSetterFn:function(e,n,i){this._set=n?t.proxy(e,n):e,this._get=n?t.proxy(e,n):e,this._canObserve=i===!1?!1:!0;var s=u(this,e,n||this);t.simpleExtend(this,s)},_setupProperty:function(e,n,i){var s,u=t.isMapLike(e),r=this;u?(s=function(t,e,n){r.updater(e,n,t.batchNum)},this.hasDependencies=!0,this._get=function(){return e.attr(n)},this._set=function(t){e.attr(n,t)}):(s=function(){r.updater(r._get(),r.value)},this._get=function(){return t.getObject(n,[e])},this._set=function(i){var s=n.split("."),u=s.pop(),r=t.getObject(s.join("."),[e]);r[u]=i}),this._on=function(u){t.bind.call(e,i||n,s),this.value=this._get()},this._off=function(){return t.unbind.call(e,i||n,s)}},_setupSetter:function(e,n,i){this.value=e,this._set=n,t.simpleExtend(this,i)},_setupSettings:function(t,e){if(this.value=t,this._set=e.set||this._set,this._get=e.get||this._get,!e.__selfUpdater){var n=this,i=this.updater;this.updater=function(){i.call(n,n._get(),n.value)}}this._on=e.on?e.on:this._on,this._off=e.off?e.off:this._off},_setupAsyncCompute:function(e,n){var i=this;this.value=e,this._setUpdates=!0,this.lastSetValue=new t.Compute(e),this._set=function(t){return t===i.lastSetValue.get()?this.value:i.lastSetValue.set(t)},this._get=function(){return r.call(n.context,i.lastSetValue.get())};var s,r=n.fn;if(0===r.length)s=u(this,r,n.context);else if(1===r.length)s=u(this,function(){return r.call(n.context,i.lastSetValue.get())},n);else{var h=this.updater,a=function(t){h.call(i,t,i.value)};this.updater=function(t){h.call(i,t,i.value)},s=u(this,function(){var t=r.call(n.context,i.lastSetValue.get(),a);return void 0!==t?t:this.value},this)}t.simpleExtend(this,s)},_setupSimpleValue:function(t){this.value=t},_bindsetup:t.__notObserve(function(){this.bound=!0,this._on(this.updater)}),_bindteardown:function(){this._off(this.updater),this.bound=!1},bind:t.bindAndSetup,unbind:t.unbindAndTeardown,clone:function(e){return e&&"function"==typeof this._args[0]?this._args[1]=e:e&&(this._args[2]=e),new t.Compute(this._args[0],this._args[1],this._args[2],this._args[3])},_on:t.k,_off:t.k,get:function(){var e=t.__isRecordingObserves();return e&&this._canObserve!==!1&&(t.__observe(this,"change"),this.bound||t.Compute.temporarilyBind(this)),this.bound?(e&&this.getDepth&&this.getDepth()>=e.getDepth()&&i.updateUntil(this.getPrimaryDepth(),this.getDepth()),this.value):this._get()},_get:function(){return this.value},set:function(t){var e=this.value,n=this._set(t,e);return this._setUpdates?this.value:this.hasDependencies?this._get():(void 0===n?this.value=this._get():this.value=n,s(this,this.value,e),this.value)},_set:function(t){return this.value=t},updater:function(t,e,n){this.value=t,s(this,t,e,n)},toFunction:function(){return t.proxy(this._computeFn,this)},_computeFn:function(t){return arguments.length?this.set(t):this.get()}});var s=function(e,n,i,s){var u=n!==i&&!(n!==n&&i!==i);u&&t.batch.trigger(e,{type:"change",batchNum:s},[n,i])},u=function(e,n,s){var u=new i(n,s,e);return{readInfo:u,_on:function(){u.getValueAndBind(),e.value=u.value,e.hasDependencies=!t.isEmptyObject(u.newObserved)},_off:function(){u.teardown()},getDepth:function(){return u.getDepth()},getPrimaryDepth:function(){return u.getPrimaryDepth()}}};t.Compute.temporarilyBind=function(e){var n=e.computeInstance||e;n.bind("change",t.k),r||(r=[],setTimeout(h,10)),r.push(n)};var r,h=function(){for(var e=0,n=r.length;n>e;e++)r[e].unbind("change",t.k);r=null};return t.Compute.async=function(e,n,i){return new t.Compute(e,{fn:n,context:i})},t.Compute.truthy=function(e){return new t.Compute(function(){var t=e.get();return"function"==typeof t&&(t=t.get()),!!t})},t.Compute.read=n,t.Compute.set=n.write,t.Compute});
/*can/compute/compute*/
define("can/compute/compute",["can/util/util","can/util/bind/bind","can/util/batch/batch","can/compute/proto_compute"],function(t,n){return t.compute=function(n,e,u,o){var c=new t.Compute(n,e,u,o),r=c.bind,i=c.unbind,p=function(t){return arguments.length?c.set(t):c.get()},m=t.cid(p,"compute"),a="__handler"+m;return p.bind=function(t,n){var e=n&&n[a];return n&&!e&&(e=n[a]=function(){n.apply(p,arguments)}),r.call(c,t,e)},p.unbind=function(t,n){var e=n&&n[a];return e?(delete n[a],c.unbind(t,e)):i.apply(c,arguments)},p.isComputed=c.isComputed,p.clone=function(u){return"function"==typeof n&&(e=u),t.compute(n,e,u,o)},p.computeInstance=c,p},t.compute.truthy=function(n){return t.compute(function(){var t=n();return"function"==typeof t&&(t=t()),!!t})},t.compute.async=function(n,e,u){return t.compute(n,{fn:e,context:u})},t.compute.read=t.Compute.read,t.compute.set=t.Compute.set,t.compute.temporarilyBind=t.Compute.temporarilyBind,t.compute});
/*can/model/model*/
define("can/model/model",["can/util/util","can/map/map","can/list/list"],function(t){var e=function(e,r,i){var n=new t.Deferred;return e.then(function(){var e=t.makeArray(arguments),s=!0;try{e[0]=i.apply(r,e)}catch(o){s=!1,n.rejectWith(n,[o].concat(e))}s&&n.resolveWith(n,e)},function(){n.rejectWith(this,arguments)}),"function"==typeof e.abort&&(n.abort=function(){return e.abort()}),n},r=0,i=function(e){return t.__observe(e,e.constructor.id),e.___get(e.constructor.id)},n=function(e,r,i,n,s,o){var a={};if("string"==typeof e){var u=e.split(/\s+/);a.url=u.pop(),u.length&&(a.type=u.pop())}else t.extend(a,e);return a.data="object"!=typeof r||t.isArray(r)?r:t.extend(a.data||{},r),a.url=t.sub(a.url,a.data,!0),t.ajax(t.extend({type:i||"post",dataType:n||"json",success:s,error:o},a))},s=function(r,n,s,o,a){var u;t.isArray(r)?(u=r[1],r=r[0]):u=r.serialize(),u=[u];var c,l,d=r.constructor;return("update"===n||"destroy"===n)&&u.unshift(i(r)),l=d[n].apply(d,u),c=e(l,r,function(t){return r[a||n+"d"](t,l),r}),l.abort&&(c.abort=function(){l.abort()}),c.then(s,o),c},o={models:function(e,r,i){if(t.Model._reqs++,e){if(e instanceof this.List)return e;var n=this,s=[],o=n.List||f,a=r instanceof t.List?r:new o,u=e instanceof f,c=u?e.serialize():e;if(c=n.parseModels(c,i),c.data&&(e=c,c=c.data),"undefined"==typeof c||!t.isArray(c))throw new Error("Could not get any raw data while converting using .models");return a.length&&a.splice(0),t.each(c,function(t){s.push(n.model(t,i))}),a.push.apply(a,s),t.isArray(e)||t.each(e,function(t,e){"data"!==e&&a.attr(e,t)}),setTimeout(t.proxy(this._clean,this),1),a}},model:function(e,r,i){if(e){e="function"==typeof e.serialize?e.serialize():this.parseModel(e,i);var n=e[this.id];(n||0===n)&&this.store[n]&&(r=this.store[n]);var s=r&&t.isFunction(r.attr)?r.attr(e,this.removeAttr||!1):new this(e);return s}}},a={parseModel:function(e){return function(r){return e?t.getObject(e,r):r}},parseModels:function(e){return function(r){if(t.isArray(r))return r;e=e||"data";var i=t.getObject(e,r);if(!t.isArray(i))throw new Error("Could not get any raw data while converting using .models");return i}}},u={create:{url:"_shortName",type:"post"},update:{data:function(e,r){r=r||{};var i=this.id;return r[i]&&r[i]!==e&&(r["new"+t.capitalize(e)]=r[i],delete r[i]),r[i]=e,r},type:"put"},destroy:{type:"delete",data:function(t,e){return e=e||{},e.id=e[this.id]=t,e}},findAll:{url:"_shortName"},findOne:{}},c=function(t,e){return function(r){return r=t.data?t.data.apply(this,arguments):r,n(e||this[t.url||"_url"],r,t.type||"get")}},l=function(t,e){if(t.resource){var r=t.resource.replace(/\/+$/,"");return"findAll"===e||"create"===e?r:r+"/{"+t.id+"}"}};t.Model=t.Map.extend({fullName:"can.Model",_reqs:0,setup:function(e,i,n,s){if("string"!=typeof i&&(s=n,n=i),s||(s=n),this.store={},t.Map.setup.apply(this,arguments),t.Model){n&&n.List?(this.List=n.List,this.List.Map=this):this.List=e.List.extend({Map:this},{});var d=this,p=t.proxy(this._clean,d);t.each(u,function(r,i){if(n&&n[i]&&("string"==typeof n[i]||"object"==typeof n[i])?d[i]=c(r,n[i]):n&&n.resource&&!t.isFunction(n[i])&&(d[i]=c(r,l(d,i))),d["make"+t.capitalize(i)]){var s=d["make"+t.capitalize(i)](d[i]);t.Construct._overwrite(d,e,i,function(){t.Model._reqs++;var e=s.apply(this,arguments),r=e.then(p,p);return r.abort=e.abort,r})}});var h={};t.each(o,function(r,i){var s="parse"+t.capitalize(i),o=n&&n[i]||d[i];"string"==typeof o?(d[s]=o,t.Construct._overwrite(d,e,i,r)):n&&n[i]&&(h[s]=!0)}),t.each(a,function(r,i){var s=n&&n[i]||d[i];if("string"==typeof s)t.Construct._overwrite(d,e,i,r(s));else if(!(n&&t.isFunction(n[i])||d[i])){var o=r();o.useModelConverter=h[i],t.Construct._overwrite(d,e,i,o)}}),"can.Model"!==d.fullName&&d.fullName||(d.fullName="Model"+ ++r),t.Model._reqs=0,this._url=this._shortName+"/{"+this.id+"}"}},_ajax:c,_makeRequest:s,_clean:function(){if(t.Model._reqs--,!t.Model._reqs)for(var e in this.store)this.store[e]._bindings||delete this.store[e];return arguments[0]},models:o.models,model:o.model},{setup:function(e){var r=e&&e[this.constructor.id];t.Model._reqs&&null!=r&&(this.constructor.store[r]=this),t.Map.prototype.setup.apply(this,arguments)},isNew:function(){var t=i(this);return!(t||0===t)},save:function(t,e){return s(this,this.isNew()?"create":"update",t,e)},destroy:function(e,r){if(this.isNew()){var i=this,n=t.Deferred();return n.then(e,r),n.done(function(t){i.destroyed(t)}).resolve(i)}return s(this,"destroy",e,r,"destroyed")},_bindsetup:function(){var e=this.___get(this.constructor.id);return null!=e&&(this.constructor.store[e]=this),t.Map.prototype._bindsetup.apply(this,arguments)},_bindteardown:function(){return delete this.constructor.store[i(this)],t.Map.prototype._bindteardown.apply(this,arguments)},___set:function(e,r){t.Map.prototype.___set.call(this,e,r),e===this.constructor.id&&this._bindings&&(this.constructor.store[i(this)]=this)}});var d=function(t){return function(e,r,i){return this[t](e,null,i)}},p=function(t){return this.parseModel.useModelConverter?this.model(t):this.parseModel(t)},h={makeFindAll:d("models"),makeFindOne:d("model"),makeCreate:p,makeUpdate:p,makeDestroy:p};t.each(h,function(r,i){t.Model[i]=function(i){return function(){var n=t.makeArray(arguments),s=t.isFunction(n[1])?n.splice(0,1):n.splice(0,2),o=e(i.apply(this,s),this,r);return o.then(n[0],n[1]),o}}}),t.each(["created","updated","destroyed"],function(e){t.Model.prototype[e]=function(r){var i=this,n=i.constructor;r&&"object"==typeof r&&this.attr(t.isFunction(r.attr)?r.attr():r),t.dispatch.call(this,{type:e,target:this},[]),t.dispatch.call(n,e,[this])}});var f=t.Model.List=t.List.extend({_bubbleRule:function(e,r){var i=t.List._bubbleRule(e,r);return i.push("destroyed"),i}},{setup:function(e){t.isPlainObject(e)&&!t.isArray(e)?(t.List.prototype.setup.apply(this),this.replace(t.isPromise(e)?e:this.constructor.Map.findAll(e))):t.List.prototype.setup.apply(this,arguments),this.bind("destroyed",t.proxy(this._destroyed,this))},_destroyed:function(t,e){if(/\w+/.test(e))for(var r;(r=this.indexOf(t.target))>-1;)this.splice(r,1)}});return t.Model});
/*can/view/view*/
define("can/view/view",["can/util/util"],function(e){var r=e.isFunction,n=e.makeArray,t=1,i=function(e){var r=function(){return s.frag(e.apply(this,arguments))};return r.render=function(){return e.apply(e,arguments)},r},u=function(e,r){if(!e.length)throw new Error("can.view: No template or empty template:"+r)},o=function(n,t){if(r(n)){var i=e.Deferred();return i.resolve(n)}var o,a,c,d="string"==typeof n?n:n.url,f=n.engine&&"."+n.engine||d.match(/\.[\w\d]+$/);if(d.match(/^#/)&&(d=d.substr(1)),(a=document.getElementById(d))&&(f="."+a.type.match(/\/(x\-)?(.+)/)[2]),f||s.cached[d]||(d+=f=s.ext),e.isArray(f)&&(f=f[0]),c=s.toId(d),d.match(/^\/\//)&&(d=d.substr(2),d=window.steal?steal.config().root.mapJoin(""+steal.id(d)):d),window.require&&require.toUrl&&(d=require.toUrl(d)),o=s.types[f],s.cached[c])return s.cached[c];if(a)return s.registerView(c,a.innerHTML,o);var p=new e.Deferred;return e.ajax({async:t,url:d,dataType:"text",error:function(e){u("",d),p.reject(e)},success:function(e){u(e,d),s.registerView(c,e,o,p)}}),p},a=function(r){var n=[];if(e.isPromise(r))return[r];for(var t in r)e.isPromise(r[t])&&n.push(r[t]);return n},c=function(r){return e.isArray(r)&&"success"===r[1]?r[0]:r},s=e.view=e.template=function(e,n,t,i){return r(t)&&(i=t,t=void 0),s.renderAs("fragment",e,n,t,i)};return e.extend(s,{frag:function(e,r){return s.hookup(s.fragment(e),r)},fragment:function(r){return e.frag(r,document)},toId:function(r){return e.map(r.toString().split(/\/|\./g),function(e){return e?e:void 0}).join("_")},toStr:function(e){return null==e?"":""+e},hookup:function(r,n){var t,i,u=[];return e.each(r.childNodes?e.makeArray(r.childNodes):r,function(r){1===r.nodeType&&(u.push(r),u.push.apply(u,e.makeArray(r.getElementsByTagName("*"))))}),e.each(u,function(e){e.getAttribute&&(t=e.getAttribute("data-view-id"))&&(i=s.hookups[t])&&(i(e,n,t),delete s.hookups[t],e.removeAttribute("data-view-id"))}),r},hookups:{},hook:function(e){return s.hookups[++t]=e," data-view-id='"+t+"'"},cached:{},cachedRenderers:{},cache:!0,register:function(r){this.types["."+r.suffix]=r,e[r.suffix]=s[r.suffix]=function(e,n){var t,u;if(!n)return u=function(){return t||(t=r.fragRenderer?r.fragRenderer(null,e):i(r.renderer(null,e))),t.apply(this,arguments)},u.render=function(){var n=r.renderer(null,e);return n.apply(n,arguments)},u;var o=function(){return t||(t=r.fragRenderer?r.fragRenderer(e,n):r.renderer(e,n)),t.apply(this,arguments)};return r.fragRenderer?s.preload(e,o):s.preloadStringRenderer(e,o)}},types:{},ext:".ejs",registerScript:function(e,r,n){return"can.view.preloadStringRenderer('"+r+"',"+s.types["."+e].script(r,n)+");"},preload:function(r,n){var t=s.cached[r]=(new e.Deferred).resolve(function(e,r){return n.call(e,e,r)});return t.__view_id=r,s.cachedRenderers[r]=n,n},preloadStringRenderer:function(e,r){return this.preload(e,i(r))},render:function(r,n,t,i,u){return e.view.renderAs("string",r,n,t,i,u)},renderTo:function(e,r,n,t,i){return("string"===e&&r.render?r.render:r)(n,t,i)},renderAs:function(t,i,u,d,f,p){void 0!==f&&"string"==typeof f.expression&&(p=f,f=void 0),r(d)&&(f=d,d=void 0);var l,h,v,g,m=a(u);if(m.length)return l=new e.Deferred,h=e.extend({},u),m.push(o(i,!0)),e.when.apply(e,m).then(function(r){var i,o=n(arguments),a=o.pop();if(e.isPromise(u))h=c(r);else for(var s in u)e.isPromise(u[s])&&(h[s]=c(o.shift()));i=e.view.renderTo(t,a,h,d,p),l.resolve(i,h),f&&f(i,h)},function(){l.reject.apply(l,arguments)}),l;if(v=r(f),l=e.__notObserve(o)(i,v),v)g=l,l.then(function(r){f(u?e.view.renderTo(t,r,u,d,p):r)});else{if("resolved"===l.state()&&l.__view_id){var w=s.cachedRenderers[l.__view_id];return u?e.view.renderTo(t,w,u,d,p):w}l.then(function(r){g=u?e.view.renderTo(t,r,u,d,p):r})}return g},registerView:function(r,n,t,u){var o,a="object"==typeof t?t:s.types[t||s.ext];return o=a.fragRenderer?a.fragRenderer(r,n):i(a.renderer(r,n)),u=u||new e.Deferred,s.cache&&(s.cached[r]=u,u.__view_id=r,s.cachedRenderers[r]=o),u.resolve(o)},simpleHelper:function(r){return function(){var n=[],t=arguments;return e.each(t,function(e,r){if(r<=t.length){for(;e&&e.isComputed;)e=e();n.push(e)}}),r.apply(this,n)}}}),e});
/*can/view/scope/compute_data*/
define("can/view/scope/compute_data",["can/util/util","can/compute/compute","can/compute/get_value_and_bind"],function(e,n,t){var o=function(n){return n.reads&&1===n.reads.length&&n.root instanceof e.Map&&!e.isFunction(n.root[n.reads[0].key])},a=function(n,t,o,a,r){if(!(arguments.length>4)){if(a.root)return e.compute.read(a.root,a.reads,o).value;var u=n.read(t,o);return a.scope=u.scope,a.initialValue=u.value,a.reads=u.reads,a.root=u.rootObserve,a.setRoot=u.setRoot,u.value}var d=a.root||a.setRoot;if(d)if(d.isComputed)d(r);else if(a.reads.length){var c=a.reads.length-1,i=a.reads.length?e.compute.read(d,a.reads.slice(0,c)).value:d;e.compute.set(i,a.reads[c].key,r,o)}};return function(n,r,u){u=u||{args:[]};var d={},c=function(e){return arguments.length?a(n,r,u,d,e):a(n,r,u,d)},i=e.compute(void 0,{on:function(){s.getValueAndBind(),o(d)&&(s.dependencyChange=function(e,n){return"function"!=typeof n?this.newVal=n:(s.dependencyChange=t.prototype.dependencyChange,s.getValueAndBind=t.prototype.getValueAndBind),t.prototype.dependencyChange.call(this,e)},s.getValueAndBind=function(){this.value=this.newVal}),i.computeInstance.value=s.value,i.computeInstance.hasDependencies=!e.isEmptyObject(s.newObserved)},off:function(){s.dependencyChange=t.prototype.dependencyChange,s.getValueAndBind=t.prototype.getValueAndBind,s.teardown()},set:c,get:c,__selfUpdater:!0}),s=new t(c,null,i.computeInstance);return d.compute=i,d}});
/*can/view/scope/scope*/
define("can/view/scope/scope",["can/util/util","can/view/scope/compute_data","can/construct/construct","can/map/map","can/list/list","can/view/view","can/compute/compute"],function(t,e){function n(t,e,n){this._context=t,this._parent=e,this._meta=n||{},this.__cache={}}function r(t,e,r){t.helpers||t.partials||t.tags||(t={helpers:t}),n.call(this,t,e,r)}return t.simpleExtend(n,{read:t.compute.read,Refs:t.Map.extend({shortName:"ReferenceMap"},{}),refsScope:function(){return new t.view.Scope(new this.Refs)}}),t.simpleExtend(n.prototype,{add:function(t,e){return t!==this._context?new this.constructor(t,this,e):this},read:function(e,n){if("%root"===e)return{value:this.getRoot()};var r="./"===e.substr(0,2),s="../"===e.substr(0,3),o="."===e||"this"===e,i=".."===e,a=r||s||o||i;if(a&&this._meta.notContext)return this._parent.read(e,n);var u;if(r)u=!0,e=e.substr(2);else{if(s){for(var c=this._parent;c._meta.notContext;)c=c._parent;return c.read(e.substr(3)||".",n)}if(o)return{value:this._context};if(i)return{value:this._parent._context}}var f=t.compute.read.reads(e);return"*"===f[0].key.charAt(0)?this.getRefs()._read(f,n,!0):this._read(f,n,u)},_read:function(e,n,r){for(var s,o,i,a,u,c=this,f=[],p=-1,h=t.simpleExtend({foundObservable:function(t,n){o=t,i=e.slice(n)},earlyExit:function(t,e){e>p&&(u=o,a=i,p=e)}},n);c;){if(s=c._context,null!==s&&("object"==typeof s||"function"==typeof s)){var _=t.__trapObserves(),l=t.compute.read(s,e,h),v=_();if(void 0!==l.value)return t.__observes(v),{scope:c,rootObserve:o,value:l.value,reads:i};f.push.apply(f,v)}c=r?null:c._parent}return t.__observes(f),{setRoot:u,reads:a,value:void 0}},get:t.__notObserve(function(e,n){n=t.simpleExtend({isArgument:!0},n);var r=this.read(e,n);return r.value}),getScope:function(t){for(var e=this;e;){if(t(e))return e;e=e._parent}},getContext:function(t){var e=this.getScope(t);return e&&e._context},getRefs:function(){return this.getScope(function(t){return t._context instanceof n.Refs})},getRoot:function(){for(var t=this,e=this;t._parent;)e=t,t=t._parent;return t._context instanceof n.Refs&&(t=e),t._context},set:function(e,n,r){var s,o,i=e.lastIndexOf("."),a=e.lastIndexOf("/");if(a>i?(s=e.substring(0,a),o=e.substring(a+1,e.length)):-1!==i?(s=e.substring(0,i),o=e.substring(i+1,e.length)):(s=".",o=e),"*"===e.charAt(0))t.compute.set(this.getRefs()._context,e,n,r);else{var u=this.read(s,r).value;t.compute.set(u,o,n,r)}},attr:t.__notObserve(function(e,n,r){return r=t.simpleExtend({isArgument:!0},r),2===arguments.length?this.set(e,n,r):this.get(e,r)}),computeData:function(t,n){return e(this,t,n)},compute:function(t,e){return this.computeData(t,e).compute},cloneFromRef:function(){for(var e,r,s=[],o=this;o;){if(e=o._context,e instanceof n.Refs){r=o._parent;break}s.unshift(e),o=o._parent}return r?(t.each(s,function(t){r=r.add(t)}),r):this}}),t.view.Scope=n,r.prototype=new n,r.prototype.constructor=r,t.view.Options=r,n});
/*can/view/stache/utils*/
define("can/view/stache/utils",["can/util/util","can/view/scope/scope"],function(can){var Options=can.view.Options;return{isArrayLike:function(n){return n&&n.splice&&"number"==typeof n.length},isObserveLike:function(n){return n instanceof can.Map||n&&!!n._get},emptyHandler:function(){},jsonParse:function(str){return"'"===str[0]?str.substr(1,str.length-2):"undefined"===str?void 0:can.global.JSON?JSON.parse(str):eval("("+str+")")},mixins:{last:function(){return this.stack[this.stack.length-1]},add:function(n){this.last().add(n)},subSectionDepth:function(){return this.stack.length-1}},convertToScopes:function(n,e,t,r,i,s,o){i&&(n.fn=this.makeRendererConvertScopes(i,e,t,r,o)),s&&(n.inverse=this.makeRendererConvertScopes(s,e,t,r,o))},makeRendererConvertScopes:function(n,e,t,r,i){var s=function(t,r,i){return n(t||e,r,i)},o=function(n,i,o){void 0===n||n instanceof can.view.Scope||(n=e.add(n)),void 0===i||i instanceof Options||(i=t.add(i));var c=s(n,i||t,o||r);return c};return i?o:can.__notObserve(o)},Options:Options}});
/*can/view/elements*/
define("can/view/elements",["can/util/util","can/view/view"],function(e){var t="undefined"!=typeof document?document:null,n=t&&function(){return 1===e.$(document.createComment("~")).length}(),o={tagToContentPropMap:{option:t&&"textContent"in document.createElement("option")?"textContent":"innerText",textarea:"value"},attrMap:e.attr.map,attrReg:/([^\s=]+)[\s]*=[\s]*/,defaultValue:e.attr.defaultValue,tagMap:{"":"span",colgroup:"col",table:"tbody",tr:"td",ol:"li",ul:"li",tbody:"tr",thead:"tr",tfoot:"tr",select:"option",optgroup:"option"},reverseTagMap:{col:"colgroup",tr:"tbody",option:"select",td:"tr",th:"tr",li:"ul"},selfClosingTags:{col:!0},getParentNode:function(e,t){return t&&11===e.parentNode.nodeType?t:e.parentNode},setAttr:e.attr.set,getAttr:e.attr.get,removeAttr:e.attr.remove,contentText:function(e){return"string"==typeof e?e:e||0===e?""+e:""},after:function(t,n){var o=t[t.length-1];o.nextSibling?e.insertBefore(o.parentNode,n,o.nextSibling,e.document):e.appendChild(o.parentNode,n,e.document)},replace:function(t,r){var a,l=t[0].parentNode;"SELECT"===l.nodeName.toUpperCase()&&l.selectedIndex>=0&&(a=l.value),o.after(t,r),e.remove(e.$(t)).length<t.length&&!n&&e.each(t,function(e){8===e.nodeType&&e.parentNode.removeChild(e)}),void 0!==a&&(l.value=a)}};return e.view.elements=o,o});
/*can/view/node_lists/node_lists*/
define("can/view/node_lists/node_lists",["can/util/util","can/view/elements"],function(e){var n=!0;try{document.createTextNode("")._=0}catch(r){n=!1}var t={},i={},a="ejs_"+Math.random(),s=0,u=function(e,r){var t=r||i,u=l(e,t);return u?u:n||3!==e.nodeType?(++s,e[a]=(e.nodeName?"element_":"obj_")+s):(++s,t["text_"+s]=e,"text_"+s)},l=function(e,r){if(n||3!==e.nodeType)return e[a];for(var t in r)if(r[t]===e)return t},p=[].splice,c=[].push,d=function(e){for(var n=0,r=0,t=e.length;t>r;r++){var i=e[r];i.nodeType?n++:n+=d(i)}return n},o=function(e,n){for(var r={},t=0,i=e.length;i>t;t++){var a=h.first(e[t]);r[u(a,n)]=e[t]}return r},f=function(e,n,r){for(var t in n)r[t]||e.newDeepChildren.push(n[t])},h={id:u,update:function(n,r){var t=h.unregisterChildren(n);r=e.makeArray(r);var i=n.length;return p.apply(n,[0,i].concat(r)),n.replacements?(h.nestReplacements(n),n.deepChildren=n.newDeepChildren,n.newDeepChildren=[]):h.nestList(n),t},nestReplacements:function(e){for(var n=0,r={},t=o(e.replacements,r),i=e.replacements.length,a={};n<e.length&&i;){var s=e[n],u=l(s,r),p=t[u];p&&(e.splice(n,d(p),p),a[u]=!0,i--),n++}i&&f(e,t,a),e.replacements=[]},nestList:function(e){for(var n=0;n<e.length;){var r=e[n],i=t[u(r)];i?i!==e&&e.splice(n,d(i),i):t[u(r)]=e,n++}},last:function(e){var n=e[e.length-1];return n.nodeType?n:h.last(n)},first:function(e){var n=e[0];return n.nodeType?n:h.first(n)},flatten:function(e){for(var n=[],r=0;r<e.length;r++){var t=e[r];t.nodeType?n.push(t):n.push.apply(n,h.flatten(t))}return n},register:function(n,r,t,i){return e.cid(n),n.unregistered=r,n.parentList=t,n.nesting=t&&"undefined"!=typeof t.nesting?t.nesting+1:0,t?(n.deepChildren=[],n.newDeepChildren=[],n.replacements=[],t!==!0&&(i?t.replacements.push(n):t.newDeepChildren.push(n))):h.nestList(n),n},unregisterChildren:function(n){var r=[];return e.each(n,function(e){e.nodeType?(n.replacements||delete t[u(e)],r.push(e)):c.apply(r,h.unregister(e,!0))}),e.each(n.deepChildren,function(e){h.unregister(e,!0)}),r},unregister:function(e,n){var r=h.unregisterChildren(e,!0);if(e.unregistered){var t=e.unregistered;if(e.replacements=e.unregistered=null,!n){var i=e.parentList&&e.parentList.deepChildren;if(i){var a=i.indexOf(e);-1!==a&&i.splice(a,1)}}t()}return r},nodeMap:t};return e.view.nodeLists=h,h});
/*can/view/parser/parser*/
define("can/view/parser/parser",[],function(){function t(t,e){for(var a=0;a<t.length;a++)e(t[a],a)}function e(e){var a={},r=e.split(",");return t(r,function(t){a[t]=!0}),a}function a(t,e){for(var a=0,r=t.length;r>a;a++){var n=t[a];e[n.tokenType].apply(e,n.args)}return t}var r="A-Za-z0-9",n="-:_"+r,o="[^=>\\s\\/]+",i="\\s*=\\s*",l="\\{[^\\}\\{]\\}",s="\\{\\{[^\\}]\\}\\}\\}?",u="(?:"+i+"(?:(?:"+s+")|(?:"+l+")|(?:\"[^\"]*\")|(?:'[^']*')|[^>\\s]+))?",f="\\{\\{[^\\}]*\\}\\}\\}?",c="\\{\\{([^\\}]*)\\}\\}\\}?",g=new RegExp("^<(["+r+"]["+n+"]*)((?:\\s*(?:(?:(?:"+o+")?"+u+")|(?:"+f+")+))*)\\s*(\\/?)>"),p=new RegExp("^<\\/(["+n+"]+)[^>]*>"),m=new RegExp(c,"g"),d=/<|\{\{/,h=/\s/,b=e("area,base,basefont,br,col,frame,hr,img,input,isindex,link,meta,param,embed"),v=e("a,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"),S=e("a,abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),k=e("altGlyph,altGlyphDef,altGlyphItem,animateColor,animateMotion,animateTransform,clipPath,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,foreignObject,glyphRef,linearGradient,radialGradient,textPath"),F=e("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"),y=e("script"),V="start,end,close,attrStart,attrEnd,attrValue,chars,comment,special,done".split(","),x=function(){},E=function(e,r,n){function o(t,e,a,n){if(e=k[e]?e:e.toLowerCase(),v[e]&&!S[e])for(var o=C.last();o&&S[o]&&!v[o];)i("",o),o=C.last();F[e]&&C.last()===e&&i("",e),n=b[e]||!!n,r.start(e,n),n||C.push(e),E.parseAttrs(a,r),r.end(e,n)}function i(t,e){var a;if(e)for(e=k[e]?e:e.toLowerCase(),a=C.length-1;a>=0&&C[a]!==e;a--);else a=0;if(a>=0){for(var n=C.length-1;n>=a;n--)r.close&&r.close(C[n]);C.length=a}}function l(t,e){r.special&&r.special(e)}if("object"==typeof e)return a(e,r);var s=[];r=r||{},n&&t(V,function(t){var e=r[t]||x;r[t]=function(){e.apply(this,arguments)!==!1&&s.push({tokenType:t,args:[].slice.call(arguments,0)})}});var u,f,c,h=function(){A&&r.chars&&r.chars(A),A=""},C=[],N=e,A="";for(C.last=function(){return this[this.length-1]};e;){if(f=!0,C.last()&&y[C.last()])e=e.replace(new RegExp("([\\s\\S]*?)</"+C.last()+"[^>]*>"),function(t,e){return e=e.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g,"$1$2"),r.chars&&r.chars(e),""}),i("",C.last());else if(0===e.indexOf("<!--")?(u=e.indexOf("-->"),u>=0&&(h(),r.comment&&r.comment(e.substring(4,u)),e=e.substring(u+3),f=!1)):0===e.indexOf("</")?(c=e.match(p),c&&(h(),e=e.substring(c[0].length),c[0].replace(p,i),f=!1)):0===e.indexOf("<")?(c=e.match(g),c&&(h(),e=e.substring(c[0].length),c[0].replace(g,o),f=!1)):0===e.indexOf("{{")&&(c=e.match(m),c&&(h(),e=e.substring(c[0].length),c[0].replace(m,l))),f){u=e.search(d),0===u&&e===N&&(A+=e.charAt(0),e=e.substr(1),u=e.search(d));var q=0>u?e:e.substring(0,u);e=0>u?"":e.substring(u),q&&(A+=q)}if(e===N)throw new Error("Parse Error: "+e);N=e}return h(),i(),r.done(),s},C=function(t,e,a,r){t.attrStart=r.substring("number"==typeof t.nameStart?t.nameStart:e,e),a.attrStart(t.attrStart),t.inName=!1},N=function(t,e,a,r){void 0!==t.valueStart&&t.valueStart<e?a.attrValue(r.substring(t.valueStart,e)):!t.inValue,a.attrEnd(t.attrStart),t.attrStart=void 0,t.valueStart=void 0,t.inValue=!1,t.inName=!1,t.lookingForEq=!1,t.inQuote=!1,t.lookingForName=!0};return E.parseAttrs=function(t,e){if(t){for(var a,r=0,n={inDoubleCurly:!1,inName:!1,nameStart:void 0,inValue:!1,valueStart:void 0,inQuote:!1,attrStart:void 0,lookingForName:!0,lookingForValue:!1,lookingForEq:!1};r<t.length;){a=r;var o=t.charAt(r),i=t.charAt(r+1),l=t.charAt(r+2);if(r++,"{"===o&&"{"===i)n.inValue&&a>n.valueStart?e.attrValue(t.substring(n.valueStart,a)):n.inName&&n.nameStart<a?(C(n,a,e,t),N(n,a,e,t)):n.lookingForValue?n.inValue=!0:n.lookingForEq&&n.attrStart&&N(n,a,e,t),n.inDoubleCurly=!0,n.doubleCurlyStart=a+2,r++;else if(n.inDoubleCurly){if("}"===o&&"}"===i){var s="}"===l?1:0;e.special(t.substring(n.doubleCurlyStart,a)),n.inDoubleCurly=!1,n.inValue&&(n.valueStart=a+2+s),r+=1+s}}else n.inValue?n.inQuote?o===n.inQuote&&N(n,a,e,t):h.test(o)&&N(n,a,e,t):"="===o&&(n.lookingForEq||n.lookingForName||n.inName)?(n.attrStart||C(n,a,e,t),n.lookingForValue=!0,n.lookingForEq=!1,n.lookingForName=!1):n.inName?h.test(o)&&(C(n,a,e,t),n.lookingForEq=!0):n.lookingForName?h.test(o)||(n.attrStart&&N(n,a,e,t),n.nameStart=a,n.inName=!0):n.lookingForValue&&(h.test(o)||(n.lookingForValue=!1,n.inValue=!0,"'"===o||'"'===o?(n.inQuote=o,n.valueStart=a+1):n.valueStart=a))}n.inName?(C(n,a+1,e,t),N(n,a+1,e,t)):n.lookingForEq?N(n,a+1,e,t):n.inValue&&N(n,a+1,e,t)}},E});
/*can/util/array/diff*/
define("can/util/array/diff",[],function(){var e=[].slice;return function(n,t){for(var i=0,r=0,l=n.length,u=t.length,s=[];l>i&&u>r;){var d=n[i],f=t[r];if(d!==f)if(u>r+1&&t[r+1]===d)s.push({index:r,deleteCount:0,insert:[t[r]]}),i++,r+=2;else{if(!(l>i+1&&n[i+1]===f))return s.push({index:r,deleteCount:l-i,insert:e.call(t,r)}),s;s.push({index:r,deleteCount:1,insert:[]}),i+=2,r++}else i++,r++}return r===u&&i===l?s:(s.push({index:r,deleteCount:l-i,insert:e.call(t,r)}),s)}});
/*can/view/live/live*/
define("can/view/live/live",["can/util/util","can/view/elements","can/view/view","can/view/node_lists/node_lists","can/view/parser/parser","can/util/array/diff"],function(t,e,n,r,a,i){e=e||t.view.elements,r=r||t.view.NodeLists,a=a||t.view.parser;var o=function(e,n,r){var a=!1,i=function(){return a||(a=!0,r(o),t.unbind.call(e,"removed",i)),!0},o={teardownCheck:function(t){return t?!1:i()}};return t.bind.call(e,"removed",i),n(o),o},c=function(t){var e=t.childNodes;if("length"in e)return e;for(var n=t.firstChild,r=[];n;)r.push(n),n=n.nextSibling;return r},l=function(t,e,n){return o(t,function(){e.computeInstance.bind("change",n)},function(t){e.computeInstance.unbind("change",n),t.nodeList&&r.unregister(t.nodeList)})},u=function(t){var e,n={};return a.parseAttrs(t,{attrStart:function(t){n[t]="",e=t},attrValue:function(t){n[e]+=t},attrEnd:function(){}}),n},d=[].splice,s=function(t){return t&&t.nodeType},f=function(t){t.firstChild||t.appendChild(t.ownerDocument.createTextNode(""))},p=function(e){var n="string"==typeof e,r=t.frag(e);return n?t.view.hookup(r):r},v=function(e,n,a,i,o){var l=[];n&&(r.register(l,null,!0,!0),l.parentList=n,l.expression="#each SUBEXPRESSION");var u=a.apply(i,o.concat([l])),d=p(u),s=t.makeArray(c(d));return n?(r.update(l,s),e.push(l)):e.push(r.register(s)),d},h=function(e,n,a){var i=e.splice(n+1,a),o=[];return t.each(i,function(t){var e=r.unregister(t);[].push.apply(o,e)}),o},b=function(t,n,r,a){if(n&&0===t.length){var i=[],o=v(i,a,n,t,[t]);e.after([r[0]],o),r.push(i[0])}},g={},C={registerChildMutationCallback:function(t,e){return e?void(g[t]=e):g[t]},callChildMutationCallback:function(t){var e=t&&g[t.nodeName.toLowerCase()];e&&e(t)},list:function(n,a,c,l,u,s,f){var p,g=s||[n],m=[],k=!1,w=!1,N=function(n,a,i){if(k){var o=x.ownerDocument.createDocumentFragment(),u=[],f=[];t.each(a,function(e,n){var r=t.compute(n+i),a=v(u,s,c,l,[e,r]);o.appendChild(a),f.push(r)});var p=i+1;if(!m.length){var b=h(g,0,g.length-1);t.remove(t.$(b))}if(g[p]){var w=r.first(g[p]);t.insertBefore(w.parentNode,o,w)}else e.after(1===p?[x]:[r.last(g[p-1])],o);d.apply(g,[p,0].concat(u)),d.apply(m,[i,0].concat(f));for(var N=i+f.length,y=m.length;y>N;N++)m[N](N);n.callChildMutationCallback!==!1&&C.callChildMutationCallback(x.parentNode)}},y=function(t,e,n){A({},{length:1},n,!0),N({},[e],n)},A=function(e,n,a,i,o){if(k&&(i||!S.teardownCheck(x.parentNode))){0>a&&(a=m.length+a);var c=h(g,a,n.length);m.splice(a,n.length);for(var l=a,u=m.length;u>l;l++)m[l](l);o?r.unregister(g):(b(p,f,g,s),t.remove(t.$(c)),e.callChildMutationCallback!==!1&&C.callChildMutationCallback(x.parentNode))}},M=function(e,n,a,i){if(k){a+=1,i+=1;var o,c=g[a],l=t.frag(r.flatten(g[i]));o=a>i?r.last(c).nextSibling:r.first(c);var u=g[0].parentNode;u.insertBefore(l,o);var d=g[i];[].splice.apply(g,[i,1]),[].splice.apply(g,[a,0,d]),a-=1,i-=1;var s=m[i];[].splice.apply(m,[i,1]),[].splice.apply(m,[a,0,s]);var f=Math.min(i,a),p=m.length;for(p;p>f;f++)m[f](f);e.callChildMutationCallback!==!1&&C.callChildMutationCallback(x.parentNode)}},x=n.ownerDocument.createTextNode(""),_=function(t){p&&p.unbind&&p.unbind("add",N).unbind("set",y).unbind("remove",A).unbind("move",M),A({callChildMutationCallback:!!t},{length:g.length-1},0,!0,t)},P=function(e,n,r){if(!w){if(k=!0,n&&r){p=n||[];var a=i(r,n);r.unbind&&r.unbind("add",N).unbind("set",y).unbind("remove",A).unbind("move",M);for(var o=0,c=a.length;c>o;o++){var l=a[o];l.deleteCount&&A({callChildMutationCallback:!1},{length:l.deleteCount},l.index,!0),l.insert.length&&N({callChildMutationCallback:!1},l.insert,l.index)}}else r&&_(),p=n||[],N({callChildMutationCallback:!1},p,0),b(p,f,g,s);C.callChildMutationCallback(x.parentNode),k=!1,p.bind&&p.bind("add",N).bind("set",y).bind("remove",A).bind("move",M),t.batch.afterPreviousEvents(function(){k=!0})}};u=e.getParentNode(n,u);var S=o(u,function(){t.isFunction(a)&&a.bind("change",P)},function(){t.isFunction(a)&&a.unbind("change",P),_(!0)});s?(e.replace(g,x),r.update(g,[x]),s.unregistered=function(){S.teardownCheck(),w=!0}):C.replace(g,x,S.teardownCheck),P({},t.isFunction(a)?a():a)},html:function(n,a,i,o){var u;i=e.getParentNode(n,i),u=l(i,a,function(t,e,n){var a=r.first(d).parentNode;a&&p(e);var i=r.first(d).parentNode;u.teardownCheck(i),C.callChildMutationCallback(i)});var d=o||[n],p=function(n){var a="function"==typeof n,o=s(n),l=t.frag(a?"":n),u=t.makeArray(d);f(l),o||a||(l=t.view.hookup(l,i)),u=r.update(d,c(l)),a&&n(l.firstChild),e.replace(u,l)};u.nodeList=d,o?o.unregistered=u.teardownCheck:r.register(d,u.teardownCheck),p(a())},replace:function(n,a,i){var o=n.slice(0),l=t.frag(a);return r.register(n,i),"string"==typeof a&&(l=t.view.hookup(l,n[0].parentNode)),r.update(n,c(l)),e.replace(o,l),n},text:function(n,a,i,o){var c=e.getParentNode(n,i),u=l(c,a,function(e,n,r){"unknown"!=typeof d.nodeValue&&(d.nodeValue=t.view.toStr(n)),u.teardownCheck(d.parentNode)}),d=n.ownerDocument.createTextNode(t.view.toStr(a()));o?(o.unregistered=u.teardownCheck,u.nodeList=o,r.update(o,[d]),e.replace([n],d)):u.nodeList=C.replace([n],d,u.teardownCheck)},setAttributes:function(e,n){var r=u(n);for(var a in r)t.attr.set(e,a,r[a])},attributes:function(n,r,a){var i={},o=function(r){var a,o=u(r);for(a in o){var c=o[a],l=i[a];c!==l&&t.attr.set(n,a,c),delete i[a]}for(a in i)e.removeAttr(n,a);i=o};l(n,r,function(t,e){o(e)}),arguments.length>=3?i=u(a):o(r())},attributePlaceholder:"__!!__",attributeReplace:/__!!__/g,attribute:function(n,r,a){l(n,a,function(t,a){e.setAttr(n,r,c.render())});var i,o=t.$(n);i=t.data(o,"hooks"),i||t.data(o,"hooks",i={});var c,u=String(e.getAttr(n,r)),d=u.split(C.attributePlaceholder),s=[];s.push(d.shift(),d.join(C.attributePlaceholder)),i[r]?i[r].computes.push(a):i[r]={render:function(){var t=0,n=u?u.replace(C.attributeReplace,function(){return e.contentText(c.computes[t++]())}):e.contentText(c.computes[t++]());return n},computes:[a],batchNum:void 0},c=i[r],s.splice(1,0,a()),e.setAttr(n,r,s.join(""))},specialAttribute:function(t,n,r){l(t,r,function(r,a){e.setAttr(t,n,k(a))}),e.setAttr(t,n,k(r()))},simpleAttribute:function(t,n,r){l(t,r,function(r,a){e.setAttr(t,n,a)}),e.setAttr(t,n,r())}};C.attr=C.simpleAttribute,C.attrs=C.attributes,C.getAttributeParts=u;var m=/(\r|\n)+/g,k=function(t){var n=/^["'].*["']$/;return t=t.replace(e.attrReg,"").replace(m,""),n.test(t)?t.substr(1,t.length-2):t};return t.view.live=C,C});
/*can/view/stache/mustache_helpers*/
define("can/view/stache/mustache_helpers",["can/util/util","can/view/stache/utils","can/view/live/live"],function(e,n,t){t=t||e.view.live;var r=function(t){return n.isObserveLike(t)&&n.isArrayLike(t)&&t.attr("length")?t:e.isFunction(t)?t():t},i=function(e){var n={};for(var t in e){var r=e[t];r&&r.isComputed?n[t]=r():n[t]=r}return n},o=function(e){return e&&"function"==typeof e.fn&&"function"==typeof e.inverse},s={each:function(i,o){var s,u,a,c=r(i),f=[];if(c instanceof e.List&&!o.stringOnly)return function(n){var r=[n];r.expression="live.list",e.view.nodeLists.register(r,null,o.nodeList,!0),e.view.nodeLists.update(o.nodeList,[n]);var s=function(e,n,t){return o.fn(o.scope.add({"%index":n,"@index":n},{notContext:!0}).add(e),o.options,t)};t.list(n,i,s,o.context,n.parentNode,r,function(e,n){return o.inverse(o.scope.add(e),o.options,n)})};var l=c;if(l&&n.isArrayLike(l)){var d=l instanceof e.List;for(a=0;a<(d?l.attr("length"):l.length);a++){var p=d?l.attr(a):l[a];f.push(o.fn(o.scope.add({"%index":a,"@index":a},{notContext:!0}).add(p)))}}else if(n.isObserveLike(l))for(s=e.Map.keys(l),a=0;a<s.length;a++)u=s[a],f.push(o.fn(o.scope.add({"%key":u,"@key":u},{notContext:!0}).add(l[u])));else if(l instanceof Object)for(u in l)f.push(o.fn(o.scope.add({"%key":u,"@key":u},{notContext:!0}).add(l[u])));return o.stringOnly?f.join(""):f},"@index":function(n,t){t||(t=n,n=0);var r=t.scope.attr("@index");return""+((e.isFunction(r)?r():r)+n)},"if":function(n,t){var i;return i=e.isFunction(n)?e.compute.truthy(n)():!!r(n),i?t.fn(t.scope||this):t.inverse(t.scope||this)},is:function(){var n,t,i=arguments[arguments.length-1];if(arguments.length-2<=0)return i.inverse();var o=arguments,s=e.compute(function(){for(var i=0;i<o.length-1;i++){if(t=r(o[i]),t=e.isFunction(t)?t():t,i>0&&t!==n)return!1;n=t}return!0});return s()?i.fn():i.inverse()},eq:function(){return s.is.apply(this,arguments)},unless:function(n,t){return s["if"].apply(this,[n,e.extend({},t,{fn:t.inverse,inverse:t.fn})])},"with":function(e,n){var t=e;return e=r(e),e?n.fn(t):void 0},log:function(e,n){"undefined"!=typeof console&&console.log&&(n?console.log(e,n.context):console.log(e.context))},data:function(n){var t=2===arguments.length?this:arguments[1];return function(r){e.data(e.$(r),n,t||this.context)}},"switch":function(e,n){r(e);var t=!1,i=n.helpers.add({"case":function(n,i){return t||r(e)!==r(n)?void 0:(t=!0,i.fn(i.scope||this))},"default":function(e){return t?void 0:e.fn(e.scope||this)}});return n.fn(n.scope,i)},joinBase:function(n){var t=[].slice.call(arguments),i=t.pop(),o=e.map(t,function(n){var t=r(n);return e.isFunction(t)?t():t}).join(""),s=i.helpers.attr("helpers.module"),u=s?s.uri:void 0,a="."===o[0];if(a&&u)return e.joinURIs(u,o);var c=e.baseURL||"undefined"!=typeof System&&(System.renderingLoader&&System.renderingLoader.baseURL||System.baseURL)||location.pathname;return"/"!==o[0]&&"/"!==c[c.length-1]&&(c+="/"),e.joinURIs(c,o)},routeUrl:function(n,t){return n||(n={}),"function"==typeof n.fn&&"function"==typeof n.inverse&&(n=i(n.hash)),e.route.url(n,"boolean"==typeof t?t:void 0)},routeCurrent:function(n){var t=e.last(arguments),r=t&&o(t);return!t||!r||t.exprData instanceof e.expression.Call?e.route.current(o(n)?{}:n||{}):e.route.current(i(n.hash||{}))?n.fn():n.inverse()}};s.routeCurrent.callAsMethod=!0,s.eachOf=s.each;var u=function(e,n){s[e]=n};return{registerHelper:u,registerSimpleHelper:function(n,t){u(n,e.view.simpleHelper(t))},getHelper:function(e,n){var t=n&&n.get("helpers."+e,{proxyMethods:!1});return t||(t=s[e]),t?{fn:t}:void 0}}});
/*can/view/stache/expression*/
define("can/view/stache/expression",["can/util/util","can/view/stache/utils","can/view/stache/mustache_helpers","can/view/scope/scope"],function(t,e,r,n){var o=function(e,r,n){var o=r.computeData(e,n);return t.compute.temporarilyBind(o.compute),o},s=function(t,e,r,n){var s=o(t,e,n);return s.compute.computeInstance.hasDependencies?{value:s.compute,computeData:s}:{value:s.initialValue,computeData:s}},p=function(t,e,n,o){var p=s(t,e,n,o);if(void 0===p.computeData.initialValue){"@"===t.charAt(0)&&"@index"!==t&&(t=t.substr(1));var a=r.getHelper(t,n);p.helper=a&&a.fn}return p},a=function(t){return t instanceof h||t instanceof i||t instanceof c?t:new h(t)},i=function(t){this._value=t};i.prototype.value=function(){return this._value};var u=function(t,e){this.key=t,this.rootExpr=e};u.prototype.value=function(t,e){var r=p(this.key,t,e);return this.isHelper=r.helper&&!r.helper.callAsMethod,r.helper||r.value};var l=function(t,e){u.apply(this,arguments)};l.prototype.value=function(t,e){return s(this.key,t,e).value};var h=function(t,e){this.expr=t,this.modifiers=e||{},this.isCompute=!1};h.prototype.value=function(){return this.expr.value.apply(this.expr,arguments)};var c=function(t){this.hashExprs=t};c.prototype.value=function(){var e={};for(var r in this.hashExprs){var n=this.hashExprs[r],o=n.value.apply(n,arguments);e[r]={call:o&&o.isComputed&&(!n.modifiers||!n.modifiers.compute),value:o}}return t.compute(function(){var t={};for(var r in e)t[r]=e[r].call?e[r].value():e[r].value;return t})};var f=function(e,r,n){n&&!t.isEmptyObject(n)&&r.push(new c(n)),this.methodExpr=e,this.argExprs=t.map(r,a)};f.prototype.args=function(t,e){for(var r=[],n=0,o=this.argExprs.length;o>n;n++){var s=this.argExprs[n],p=s.value.apply(s,arguments);r.push({call:p&&p.isComputed&&(!s.modifiers||!s.modifiers.compute),value:p})}return function(){for(var t=[],e=0,n=r.length;n>e;e++)t[e]=r[e].call?r[e].value():r[e].value;return t}},f.prototype.value=function(e,r,n){var o=this.methodExpr.value(e,r);this.isHelper=this.methodExpr.isHelper;var s=this.args(e,r);return t.compute(function(t){var e=o;if(e&&e.isComputed&&(e=e()),"function"==typeof e){var r=s();return n&&r.push(n),arguments.length&&r.unshift(new w.SetIdentifier(t)),e.apply(null,r)}})};var d=function(){u.apply(this,arguments)};d.prototype.value=function(t,e){var r=p(this.key,t,e,{isArgument:!0,args:[t.attr("."),t]});return r.helper||r.value};var v=function(){u.apply(this,arguments)};v.prototype.value=function(t,e){return s(this.key,t,e,{callMethodsOnObservables:!0,isArgument:!0,args:[t.attr("."),t]}).value};var y=function(t,e,r){this.methodExpr=t,this.argExprs=e,this.hashExprs=r,this.mode=null};y.prototype.args=function(t,e){for(var r=[],n=0,o=this.argExprs.length;o>n;n++){var s=this.argExprs[n];r.push(s.value.apply(s,arguments))}return r},y.prototype.hash=function(t,e){var r={};for(var n in this.hashExprs){var o=this.hashExprs[n];r[n]=o.value.apply(o,arguments)}return r},y.prototype.helperAndValue=function(e,n){var s,p,a,u,l=this.argExprs.length||!t.isEmptyObject(this.hashExprs),h=this.methodExpr instanceof i?""+this.methodExpr._value:this.methodExpr.key;if(l){s=r.getHelper(h,n);var c=e.attr(".");s||"function"!=typeof c[h]||(s={fn:c[h]})}if(!s){u=this.args(e,n);var f=o(h,e,{isArgument:!1,args:u&&u.length?u:[e.attr("."),e]}),d=f.compute;a=f.initialValue,p=f.compute.computeInstance.hasDependencies?d:a,l||void 0!==a||(s=r.getHelper(h,n))}return{value:p,args:u,helper:s&&s.fn}},y.prototype.evaluator=function(r,n,o,s,p,a,i,u){var l={fn:function(){},inverse:function(){},stringOnly:u},h=n.attr("."),c=this.args(n,o,p,a,i,u),f=this.hash(n,o,p,a,i,u);return e.convertToScopes(l,n,o,p,a,i,u),t.simpleExtend(l,{context:h,scope:n,contexts:n,hash:f,nodeList:p,exprData:this,helperOptions:o,helpers:o}),c.push(l),function(){return r.apply(h,c)}},y.prototype.value=function(e,r,n,o,s,p){var a=this.helperAndValue(e,r),i=a.helper;if(!i)return a.value;var u=this.evaluator(i,e,r,n,o,s,p),l=t.compute(u);return t.compute.temporarilyBind(l),l.computeInstance.hasDependencies?l:l()};var m=/[\w\.\\\-_@\/\&%]+/,g=/('.*?'|".*?"|=|[\w\.\\\-_@\/*%\$:]+|[\(\)]|,|\~)/g,k=/^('.*?'|".*?"|[0-9]+\.?[0-9]*|true|false|null|undefined)$/,x=function(t){return m.test(t)},A=/^[\.@]\w/,H=function(t){return x(t)&&A.test(t)},E=function(t){return t.children||(t.children=[]),t},C=function(){this.root={children:[],type:"Root"},this.current=this.root,this.stack=[this.root]};t.simpleExtend(C.prototype,{top:function(){return t.last(this.stack)},isRootTop:function(){return this.top()===this.root},popTo:function(t){this.popUntil(t),this.isRootTop()||this.stack.pop()},firstParent:function(e){for(var r=this.stack.length-2;r>0&&-1===t.inArray(this.stack[r].type,e);)r--;return this.stack[r]},popUntil:function(e){for(;-1===t.inArray(this.top().type,e)&&!this.isRootTop();)this.stack.pop();return this.top()},addTo:function(t,e){var r=this.popUntil(t);E(r).children.push(e)},addToAndPush:function(t,e){this.addTo(t,e),this.stack.push(e)},topLastChild:function(){return t.last(this.top().children)},replaceTopLastChild:function(t){var e=E(this.top()).children;return e.pop(),e.push(t),t},replaceTopLastChildAndPush:function(t){this.replaceTopLastChild(t),this.stack.push(t)},replaceTopAndPush:function(t){var e;return this.top()===this.root?e=E(this.top()).children:(this.stack.pop(),e=E(this.top()).children),e.pop(),e.push(t),this.stack.push(t),t}});var T=function(t){var e=t.lastIndexOf("./"),r=t.lastIndexOf(".");if(r>e)return t.substr(0,r)+"@"+t.substr(r+1);var n=-1===e?0:e+2,o=t.charAt(n);return"."===o||"@"===o?t.substr(0,n)+"@"+t.substr(n+1):t.substr(0,n)+"@"+t.substr(n)},L=function(t){return"Lookup"===t.type&&(t.key=T(t.key)),t},R=function(t){var e=t.top();if(e&&"Lookup"===e.type){var r=t.stack[t.stack.length-2];"Helper"!==r.type&&r&&t.replaceTopAndPush({type:"Helper",method:e})}},w={convertKeyToLookup:T,Literal:i,Lookup:u,ScopeLookup:l,Arg:h,Hashes:c,Call:f,Helper:y,HelperLookup:d,HelperScopeLookup:v,SetIdentifier:function(t){this.value=t},tokenize:function(e){var r=[];return(t.trim(e)+" ").replace(g,function(t,e){r.push(e)}),r},lookupRules:{"default":function(t,e,r){var n=("Helper"!==e||t.root?"":"Helper")+(r?"Scope":"")+"Lookup";return w[n]},method:function(t,e,r){return l}},methodRules:{"default":function(t){return"Call"===t.type?f:y},call:function(t){return f}},parse:function(t,e){e=e||{};var r=this.ast(t);e.lookupRule||(e.lookupRule="default"),"string"==typeof e.lookupRule&&(e.lookupRule=w.lookupRules[e.lookupRule]),e.methodRule||(e.methodRule="default"),"string"==typeof e.methodRule&&(e.methodRule=w.methodRules[e.methodRule]);var n=this.hydrateAst(r,e,e.baseMethodType||"Helper");return n},hydrateAst:function(e,r,n,o){var s,p=this;if("Lookup"===e.type)return new(r.lookupRule(e,n,o))(e.key,e.root&&this.hydrateAst(e.root,r,n));if("Literal"===e.type)return new i(e.value);if("Arg"===e.type)return new h(this.hydrateAst(e.children[0],r,n,o),{compute:!0});if("Hashes"===e.type)return s={},t.each(e.children,function(t){s[t.prop]=p.hydrateAst(t.children[0],r,e.type,!0)}),new c(s);if("Hash"===e.type)throw new Error("");if("Call"===e.type||"Helper"===e.type){var a=[];return s={},t.each(e.children,function(t){"Hash"===t.type?s[t.prop]=p.hydrateAst(t.children[0],r,e.type,!0):a.push(p.hydrateAst(t,r,e.type,!0))}),new(r.methodRule(e))(this.hydrateAst(e.method,r,e.type),a,s)}},ast:function(t){var e=this.tokenize(t);return this.parseAst(e,{index:0})},parseAst:function(r,n){for(var o,s=new C;n.index<r.length;){var p=r[n.index],a=r[n.index+1];if(n.index++,k.test(p))R(s),s.addTo(["Helper","Call","Hash"],{type:"Literal",value:e.jsonParse(p)});else if("="===a){if(o=s.top(),o&&"Lookup"===o.type){var i=s.firstParent(["Call","Helper","Hash"]);("Call"===i.type||"Root"===i.type)&&(s.popUntil(["Call"]),o=s.top(),s.replaceTopAndPush({type:"Helper",method:"Root"===o.type?t.last(o.children):o}))}o=s.popUntil(["Helper","Call","Hashes"]),"Call"===o.type&&s.addToAndPush(["Call"],{type:"Hashes"}),s.addToAndPush(["Helper","Hashes"],{type:"Hash",prop:p}),n.index++}else if(m.test(p)){var u=s.topLastChild();u&&"Call"===u.type&&H(p)?s.replaceTopLastChildAndPush({type:"Lookup",root:u,key:p}):(R(s),s.addToAndPush(["Helper","Call","Hash","Arg"],{type:"Lookup",key:p}))}else if("~"===p)R(s),s.addToAndPush(["Helper","Call","Hash"],{type:"Arg",key:p});else if("("===p){if(o=s.top(),"Lookup"!==o.type)throw new Error("Unable to understand expression "+r.join(""));s.replaceTopAndPush({type:"Call",method:L(o)})}else")"===p?s.popTo(["Call"]):","===p&&s.popUntil(["Call"])}return s.root.children[0]}};return t.expression=w,w});
/*can/view/callbacks/callbacks*/
define("can/view/callbacks/callbacks",["can/util/util","can/view/view"],function(t){var e=t.view.attr=function(t,e){if(!e){var i=a[t];if(!i)for(var n=0,l=r.length;l>n;n++){var o=r[n];if(o.match.test(t)){i=o.handler;break}}return i}"string"==typeof t?a[t]=e:r.push({match:t,handler:e})},a={},r=[],i=/[-\:]/,n=t.view.tag=function(e,a){if(!a){var r=l[e.toLowerCase()];return!r&&i.test(e)&&(r=function(){}),r}t.global.html5&&(t.global.html5.elements+=" "+e,t.global.html5.shivDocument()),l[e.toLowerCase()]=a},l={};return t.view.callbacks={_tags:l,_attributes:a,_regExpAttributes:r,tag:n,attr:e,tagHandler:function(e,a,r){var i,n=r.options.get("tags."+a,{proxyMethods:!1}),o=n||l[a],s=r.scope;if(i=o?t.__notObserve(o)(e,r):s,i&&r.subtemplate){s!==i&&(s=s.add(i));var c=r.subtemplate(s,r.options),v="string"==typeof c?t.view.frag(c):c;t.appendChild(e,v)}}},t.view.callbacks});
/*can/view/href/href*/
define("can/view/href/href",["can/util/util","can/view/stache/expression","can/view/callbacks/callbacks","can/view/scope/scope"],function(e,n){var t=function(e){return"{"===e[0]&&"}"===e[e.length-1]?e.substr(1,e.length-2):e};e.view.attr("can-href",function(c,r){var a=n.parse("tmp("+t(c.getAttribute("can-href"))+")",{baseMethodType:"Call"}),i=a.argExprs[0].value(r.scope,null),u=e.compute(function(){return e.route.url(i())});c.setAttribute("href",u());var l=function(e,n){c.setAttribute("href",n)};u.bind("change",l),e.bind.call(c,"removed",function(){u.unbind("change",l)})})});
/*can/control/control*/
define("can/control/control",["can/util/util","can/construct/construct"],function(t){var n,e=function(n,e,o){return t.bind.call(n,e,o),function(){t.unbind.call(n,e,o)}},o=t.isFunction,s=t.extend,r=t.each,i=[].slice,u=/\{([^\}]+)\}/g,c=t.getObject("$.event.special",[t])||{},l=function(n,e,o,s){return t.delegate.call(n,e,o,s),function(){t.undelegate.call(n,e,o,s)}},a=function(n,o,s,r){return r?l(n,t.trim(r),o,s):e(n,o,s)},h=t.Control=t.Construct({setup:function(){if(t.Construct.setup.apply(this,arguments),t.Control){var n,e=this;e.actions={};for(n in e.prototype)e._isAction(n)&&(e.actions[n]=e._action(n))}},_shifter:function(n,e){var s="string"==typeof e?n[e]:e;return o(s)||(s=n[s]),function(){return n.called=e,s.apply(n,[this.nodeName?t.$(this):this].concat(i.call(arguments,0)))}},_isAction:function(t){var n=this.prototype[t],e=typeof n;return"constructor"!==t&&("function"===e||"string"===e&&o(this.prototype[n]))&&!!(c[t]||f[t]||/[^\w]/.test(t))},_action:function(e,o){if(u.lastIndex=0,o||!u.test(e)){var s=o?t.sub(e,this._lookup(o)):e;if(!s)return null;var r=t.isArray(s),i=r?s[1]:s,c=i.split(/\s+/g),l=c.pop();return{processor:f[l]||n,parts:[i,c.join(" "),l],delegate:r?s[0]:void 0}}},_lookup:function(t){return[t,window]},processors:{},defaults:{}},{setup:function(n,e){var o,r=this.constructor,i=r.pluginName||r._fullName;return this.element=t.$(n),i&&"can_control"!==i&&this.element.addClass(i),o=t.data(this.element,"controls"),o||(o=[],t.data(this.element,"controls",o)),o.push(this),this.options=s({},r.defaults,e),this.on(),[this.element,this.options]},on:function(n,e,o,s){if(!n){this.off();var r,i,u=this.constructor,c=this._bindings,l=u.actions,h=this.element,f=t.Control._shifter(this,"destroy");for(r in l)l.hasOwnProperty(r)&&(i=l[r]||u._action(r,this.options,this),i&&(c.control[r]=i.processor(i.delegate||h,i.parts[2],i.parts[1],r,this)));return t.bind.call(h,"removed",f),c.user.push(function(n){t.unbind.call(n,"removed",f)}),c.user.length}return"string"==typeof n&&(s=o,o=e,e=n,n=this.element),void 0===s&&(s=o,o=e,e=null),"string"==typeof s&&(s=t.Control._shifter(this,s)),this._bindings.user.push(a(n,o,s,e)),this._bindings.user.length},off:function(){var t=this.element[0],n=this._bindings;n&&(r(n.user||[],function(n){n(t)}),r(n.control||{},function(n){n(t)})),this._bindings={user:[],control:{}}},destroy:function(){if(null!==this.element){var n,e=this.constructor,o=e.pluginName||e._fullName;this.off(),o&&"can_control"!==o&&this.element.removeClass(o),n=t.data(this.element,"controls"),n.splice(t.inArray(this,n),1),t.trigger(this,"destroyed"),this.element=null}}}),f=t.Control.processors;return n=function(n,e,o,s,r){return a(n,e,t.Control._shifter(r,s),o)},r(["change","click","contextmenu","dblclick","keydown","keyup","keypress","mousedown","mousemove","mouseout","mouseover","mouseup","reset","resize","scroll","select","submit","focusin","focusout","mouseenter","mouseleave","touchstart","touchmove","touchcancel","touchend","touchleave","inserted","removed","dragstart","dragenter","dragover","dragleave","drag","drop","dragend"],function(t){f[t]=n}),h});
/*can/util/string/deparam/deparam*/
define("can/util/string/deparam/deparam",["can/util/util","can/util/string/string"],function(t){var n=/^\d+$/,e=/([^\[\]]+)|(\[\])/g,r=/([^?#]*)(#.*)?$/,i=function(t){return decodeURIComponent(t.replace(/\+/g," "))};return t.extend(t,{deparam:function(a){var u,c,o={};return a&&r.test(a)&&(u=a.split("&"),t.each(u,function(t){var r=t.split("="),a=i(r.shift()),u=i(r.join("=")),p=o;if(a){r=a.match(e);for(var s=0,d=r.length-1;d>s;s++)p[r[s]]||(p[r[s]]=n.test(r[s+1])||"[]"===r[s+1]?[]:{}),p=p[r[s]];c=r.pop(),"[]"===c?p.push(u):p[c]=u}})),o}}),t});
/*can/route/route*/
define("can/route/route",["can/util/util","can/map/map","can/list/list","can/util/string/deparam/deparam"],function(t){var e,r,n,a,u=/\:([\w\.]+)/g,o=/^(?:&[^=]+=[^&]*)+/,i=function(e){var r=[];return t.each(e,function(e,n){r.push(("className"===n?"class":n)+'="'+("href"===n?e:t.esc(e))+'"')}),r.join(" ")},c=function(t,e){var r=0,n=0,a={};for(var u in t.defaults)t.defaults[u]===e[u]&&(a[u]=1,r++);for(;n<t.names.length;n++){if(!e.hasOwnProperty(t.names[n]))return-1;a[t.names[n]]||r++}return r},l=window.location,s=function(t){return(t+"").replace(/([.?*+\^$\[\]\\(){}|\-])/g,"\\$1")},d=t.each,f=t.extend,h=function(t){return t.toString.toString()!==Object.prototype.toString.toString()},p=function(e){return e&&"object"==typeof e&&!h(e)?(e=e instanceof t.Map?e:t.isFunction(e.slice)?e.slice():t.extend({},e),t.each(e,function(t,r){e[r]=p(t)})):void 0!==e&&null!==e&&t.isFunction(e.toString)&&(e=e.toString()),e},g=function(t){return t.replace(/\\/g,"")},m=[],_=function(r,u,o,i){a=1,m.push(u),clearTimeout(e),e=setTimeout(function(){a=0;var e=t.route.data.serialize(),r=t.route.param(e,!0);t.route._call("setURL",r,m),t.batch.trigger(b,"__url",[r,n]),n=r,m=[]},10)},b=t.extend({},t.event),v=function(t){var e=t.attr;return t.attr=function(t,r){var n,a=void 0===this.define||void 0===this.define[t]||!!this.define[t].serialize;return n=a?p(Array.apply(null,arguments)):arguments,e.apply(this,n)},t};t.route=function(e,r){var n=t.route._call("root");n.lastIndexOf("/")===n.length-1&&0===e.indexOf("/")&&(e=e.substr(1)),r=r||{};for(var a,o,i=[],c="",l=u.lastIndex=0,d=t.route._call("querySeparator"),f=t.route._call("matchSlashes");a=u.exec(e);)i.push(a[1]),c+=g(e.substring(l,u.lastIndex-a[0].length)),o="\\"+(g(e.substr(u.lastIndex,1))||d+(f?"":"|/")),c+="([^"+o+"]"+(r[a[1]]?"*":"+")+")",l=u.lastIndex;return c+=e.substr(l).replace("\\",""),t.route.routes[e]={test:new RegExp("^"+c+"($|"+s(d)+")"),route:e,names:i,defaults:r,length:e.split("/").length},t.route},f(t.route,{param:function(e,r){var n,a,o=0,i=e.route,l=0;if(delete e.route,d(e,function(){l++}),d(t.route.routes,function(t,r){return a=c(t,e),a>o&&(n=t,o=a),a>=l?!1:void 0}),t.route.routes[i]&&c(t.route.routes[i],e)===o&&(n=t.route.routes[i]),n){var s,h=f({},e),p=n.route.replace(u,function(t,r){return delete h[r],e[r]===n.defaults[r]?"":encodeURIComponent(e[r])}).replace("\\","");return d(n.defaults,function(t,e){h[e]===t&&delete h[e]}),s=t.param(h),r&&t.route.attr("route",n.route),p+(s?t.route._call("querySeparator")+s:"")}return t.isEmptyObject(e)?"":t.route._call("querySeparator")+t.param(e)},deparam:function(e){var r=t.route._call("root");r.lastIndexOf("/")===r.length-1&&0===e.indexOf("/")&&(e=e.substr(1));var n={length:-1},a=t.route._call("querySeparator"),u=t.route._call("paramsMatcher");if(d(t.route.routes,function(t,r){t.test.test(e)&&t.length>n.length&&(n=t)}),n.length>-1){var o=e.match(n.test),i=o.shift(),c=e.substr(i.length-(o[o.length-1]===a?1:0)),l=c&&u.test(c)?t.deparam(c.slice(1)):{};return l=f(!0,{},n.defaults,l),d(o,function(t,e){t&&t!==a&&(l[n.names[e]]=decodeURIComponent(t))}),l.route=n.route,l}return e.charAt(0)!==a&&(e=a+e),u.test(e)?t.deparam(e.slice(1)):{}},data:v(new t.Map({})),map:function(e){var r;r=e.prototype instanceof t.Map?new e:e,t.route.data=v(r)},routes:{},ready:function(e){return e!==!0&&(t.route._setup(),(t.isBrowserWindow||t.isWebWorker)&&t.route.setState()),t.route},url:function(e,r){return r&&(t.__observe(b,"__url"),e=t.extend({},t.route.deparam(t.route._call("matchingPartOfURL")),e)),t.route._call("root")+t.route.param(e)},link:function(e,r,n,a){return"<a "+i(f({href:t.route.url(r,a)},n))+">"+e+"</a>"},current:function(e){return t.__observe(b,"__url"),this._call("matchingPartOfURL")===t.route.param(e)},bindings:{hashchange:{paramsMatcher:o,querySeparator:"&",matchSlashes:!1,bind:function(){t.bind.call(window,"hashchange",y)},unbind:function(){t.unbind.call(window,"hashchange",y)},matchingPartOfURL:function(){var e=t.route.location||l;return e.href.split(/#!?/)[1]||""},setURL:function(t){return l.hash!=="#"+t&&(l.hash="!"+t),t},root:"#!"}},defaultBinding:"hashchange",currentBinding:null,_setup:function(){t.route.currentBinding||(t.route._call("bind"),t.route.bind("change",_),t.route.currentBinding=t.route.defaultBinding)},_teardown:function(){t.route.currentBinding&&(t.route._call("unbind"),t.route.unbind("change",_),t.route.currentBinding=null),clearTimeout(e),a=0},_call:function(){var e=t.makeArray(arguments),r=e.shift(),n=t.route.bindings[t.route.currentBinding||t.route.defaultBinding],a=n[r];return a.apply?a.apply(n,e):a}}),d(["bind","unbind","on","off","delegate","undelegate","removeAttr","compute","_get","___get","each"],function(e){t.route[e]=function(){return t.route.data[e]?t.route.data[e].apply(t.route.data,arguments):void 0}}),t.route.attr=function(){return t.route.data.attr.apply(t.route.data,arguments)},t.route.batch=t.batch;var y=t.route.setState=function(){var e=t.route._call("matchingPartOfURL"),u=r;r=t.route.deparam(e),a&&e===n||(t.route.batch.start(),S(u,r,t.route.data),t.route.attr(r),t.route.batch.trigger(b,"__url",[e,n]),t.route.batch.stop())},S=function(t,e,r){for(var n in t)void 0===e[n]?r.removeAttr(n):"[object Object]"===Object.prototype.toString.call(t[n])&&S(t[n],e[n],r.attr(n))};return t.route});
/*can/control/route/route*/
define("can/control/route/route",["can/util/util","can/route/route","can/control/control"],function(t){return t.Control.processors.route=function(o,r,u,n,e){u=u||"",t.route.routes[u]||("/"===u[0]&&(u=u.substring(1)),t.route(u));var c,i=function(o,r,i){if(t.route.attr("route")===u&&(void 0===o.batchNum||o.batchNum!==c)){c=o.batchNum;var a=t.route.attr();delete a.route,t.isFunction(e[n])?e[n](a):e[e[n]](a)}};return t.route.bind("change",i),function(){t.route.unbind("change",i)}},t});
/*can/view/scanner*/
define("can/view/scanner",["can/view/view","can/view/elements","can/view/callbacks/callbacks"],function(can,elements,viewCallbacks){var newLine=/(\r|\n)+/g,notEndTag=/\//,clean=function(t){return t.split("\\").join("\\\\").split("\n").join("\\n").split('"').join('\\"').split("	").join("\\t")},getTag=function(t,e,n){if(t)return t;for(;n<e.length;){if("<"===e[n]&&!notEndTag.test(e[n+1]))return elements.reverseTagMap[e[n+1]]||"span";n++}return""},bracketNum=function(t){return--t.split("{").length- --t.split("}").length},myEval=function(script){eval(script)},attrReg=/([^\s]+)[\s]*=[\s]*$/,startTxt="var ___v1ew = [];",finishTxt="return ___v1ew.join('')",put_cmd="___v1ew.push(\n",insert_cmd=put_cmd,htmlTag=null,quote=null,beforeQuote=null,rescan=null,getAttrName=function(){var t=beforeQuote.match(attrReg);return t&&t[1]},status=function(){return quote?"'"+getAttrName()+"'":htmlTag?1:0},top=function(t){return t[t.length-1]},Scanner;return can.view.Scanner=Scanner=function(t){can.extend(this,{text:{},tokens:[]},t),this.text.options=this.text.options||"",this.tokenReg=[],this.tokenSimple={"<":"<",">":">",'"':'"',"'":"'"},this.tokenComplex=[],this.tokenMap={};for(var e,n=0;e=this.tokens[n];n++)e[2]?(this.tokenReg.push(e[2]),this.tokenComplex.push({abbr:e[1],re:new RegExp(e[2]),rescan:e[3]})):(this.tokenReg.push(e[1]),this.tokenSimple[e[1]]=e[0]),this.tokenMap[e[0]]=e[1];this.tokenReg=new RegExp("("+this.tokenReg.slice(0).concat(["<",">",'"',"'"]).join("|")+")","g")},Scanner.prototype={helpers:[],scan:function(t,e){var n=[],s=0,a=this.tokenSimple,r=this.tokenComplex;t=t.replace(newLine,"\n"),this.transform&&(t=this.transform(t)),t.replace(this.tokenReg,function(e,i){var o=arguments[arguments.length-2];if(o>s&&n.push(t.substring(s,o)),a[e])n.push(e);else for(var u,c=0;u=r[c];c++)if(u.re.test(e)){n.push(u.abbr),u.rescan&&n.push(u.rescan(i));break}s=o+i.length}),s<t.length&&n.push(t.substr(s));var i,o,u,c,l="",p=[startTxt+(this.text.start||"")],h=function(t,e){p.push(put_cmd,'"',clean(t),'"'+(e||"")+");")},g=[],f=null,m=!1,k={attributeHookups:[],tagHookups:[],lastTagHookup:""},b=function(){k.lastTagHookup=k.tagHookups.pop()+k.tagHookups.length},v="",x=[],w=!1,T=!1,d=0,_=this.tokenMap;for(htmlTag=quote=beforeQuote=null;void 0!==(u=n[d++]);){if(null===f)switch(u){case _.left:case _.escapeLeft:case _.returnLeft:m=htmlTag&&1;case _.commentLeft:f=u,l.length&&h(l),l="";break;case _.escapeFull:m=htmlTag&&1,rescan=1,f=_.escapeLeft,l.length&&h(l),rescan=n[d++],l=rescan.content||rescan,rescan.before&&h(rescan.before),n.splice(d,0,_.right);break;case _.commentFull:break;case _.templateLeft:l+=_.left;break;case"<":0!==n[d].indexOf("!--")&&(htmlTag=1,m=0),l+=u;break;case">":htmlTag=0;var H="/"===l.substr(l.length-1)||"--"===l.substr(l.length-2),N="";if(k.attributeHookups.length&&(N="attrs: ['"+k.attributeHookups.join("','")+"'], ",k.attributeHookups=[]),v+k.tagHookups.length!==k.lastTagHookup&&v===top(k.tagHookups))H&&(l=l.substr(0,l.length-1)),p.push(put_cmd,'"',clean(l),'"',",can.view.pending({tagName:'"+v+"',"+N+"scope: "+(this.text.scope||"this")+this.text.options),H?(p.push("}));"),l="/>",b()):"<"===n[d]&&n[d+1]==="/"+v?(p.push("}));"),l=u,b()):(p.push(",subtemplate: function("+this.text.argNames+"){\n"+startTxt+(this.text.start||"")),l="");else if(m||!w&&elements.tagToContentPropMap[x[x.length-1]]||N){var R=",can.view.pending({"+N+"scope: "+(this.text.scope||"this")+this.text.options+'}),"';H?h(l.substr(0,l.length-1),R+'/>"'):h(l,R+'>"'),l="",m=0}else l+=u;(H||w)&&(x.pop(),v=x[x.length-1],w=!1),k.attributeHookups=[];break;case"'":case'"':if(htmlTag)if(quote&&quote===u){quote=null;var L=getAttrName();if(viewCallbacks.attr(L)&&k.attributeHookups.push(L),T){l+=u,h(l),p.push(finishTxt,"}));\n"),l="",T=!1;break}}else if(null===quote&&(quote=u,beforeQuote=i,c=getAttrName(),"img"===v&&"src"===c||"style"===c)){h(l.replace(attrReg,"")),l="",T=!0,p.push(insert_cmd,"can.view.txt(2,'"+getTag(v,n,d)+"',"+status()+",this,function(){",startTxt),h(c+"="+u);break}default:if("<"===i){v="!--"===u.substr(0,3)?"!--":u.split(/\s/)[0];var S,y=!1;0===v.indexOf("/")&&(y=!0,S=v.substr(1)),y?(top(x)===S&&(v=S,w=!0),top(k.tagHookups)===S&&(h(l.substr(0,l.length-1)),p.push(finishTxt+"}}) );"),l="><",b())):(v.lastIndexOf("/")===v.length-1&&(v=v.substr(0,v.length-1)),"!--"!==v&&viewCallbacks.tag(v)&&("content"===v&&elements.tagMap[top(x)]&&(u=u.replace("content",elements.tagMap[top(x)])),k.tagHookups.push(v)),x.push(v))}l+=u}else switch(u){case _.right:case _.returnRight:switch(f){case _.left:o=bracketNum(l),1===o?(p.push(insert_cmd,"can.view.txt(0,'"+getTag(v,n,d)+"',"+status()+",this,function(){",startTxt,l),g.push({before:"",after:finishTxt+"}));\n"})):(s=g.length&&-1===o?g.pop():{after:";"},s.before&&p.push(s.before),p.push(l,";",s.after));break;case _.escapeLeft:case _.returnLeft:o=bracketNum(l),o&&g.push({before:finishTxt,after:"}));\n"});for(var j=f===_.escapeLeft?1:0,C={insert:insert_cmd,tagName:getTag(v,n,d),status:status(),specialAttribute:T},q=0;q<this.helpers.length;q++){var E=this.helpers[q];if(E.name.test(l)){l=E.fn(l,C),E.name.source===/^>[\s]*\w*/.source&&(j=0);break}}"object"==typeof l?l.startTxt&&l.end&&T?p.push(insert_cmd,"can.view.toStr( ",l.content,"() ) );"):(l.startTxt?p.push(insert_cmd,"can.view.txt(\n"+("string"==typeof status()||(null!=l.escaped?l.escaped:j))+",\n'"+v+"',\n"+status()+",\nthis,\n"):l.startOnlyTxt&&p.push(insert_cmd,"can.view.onlytxt(this,\n"),p.push(l.content),l.end&&p.push("));")):T?p.push(insert_cmd,l,");"):p.push(insert_cmd,"can.view.txt(\n"+("string"==typeof status()||j)+",\n'"+v+"',\n"+status()+",\nthis,\nfunction(){ "+(this.text.escape||"")+"return ",l,o?startTxt:"}));\n"),rescan&&rescan.after&&rescan.after.length&&(h(rescan.after.length),rescan=null)}f=null,l="";break;case _.templateLeft:l+=_.left;break;default:l+=u}i=u}l.length&&h(l),p.push(";");var M=p.join(""),A={out:(this.text.outStart||"")+M+" "+finishTxt+(this.text.outEnd||"")};return myEval.call(A,"this.fn = (function("+this.text.argNames+"){"+A.out+"});\r\n//# sourceURL="+e+".js"),A}},can.view.pending=function(t){var e=can.view.getHooks();return can.view.hook(function(n){can.each(e,function(t){t(n)}),t.templateType="legacy",t.tagName&&viewCallbacks.tagHandler(n,t.tagName,t),can.each(t&&t.attrs||[],function(e){t.attributeName=e;var s=viewCallbacks.attr(e);s&&s(n,t)})})},can.view.tag("content",function(t,e){return e.scope}),can.view.Scanner=Scanner,Scanner});
/*can/view/render*/
define("can/view/render",["can/view/view","can/view/elements","can/view/live/live","can/util/string/string"],function(n,t,e){var i,r=[],u=function(n){var e=t.tagMap[n]||"span";return"span"===e?"@@!!@@":"<"+e+">"+u(e)+"</"+e+">"},o=function(t,e){if("string"==typeof t)return t;if(!t&&0!==t)return"";var i=t.hookup&&function(n,e){t.hookup.call(t,n,e)}||"function"==typeof t&&t;return i?e?"<"+e+" "+n.view.hook(i)+"></"+e+">":(r.push(i),""):""+t},c=function(t,e){return"string"==typeof t||"number"==typeof t?n.esc(t):o(t,e)},s=!1,a=function(){};return n.extend(n.view,{live:e,setupLists:function(){var t,e=n.view.lists;return n.view.lists=function(n,e){return t={list:n,renderer:e},Math.random()},function(){return n.view.lists=e,t}},getHooks:function(){var n=r.slice(0);return i=n,r=[],n},onlytxt:function(n,t){return c(t.call(n))},txt:function(f,l,p,v,h){var g,w,d,b,y=t.tagMap[l]||"span",k=!1,m=a;if(s)g=h.call(v);else{("string"==typeof p||1===p)&&(s=!0);var x=n.view.setupLists();m=function(){d.unbind("change",a)},d=n.compute(h,v,!1),d.bind("change",a),w=x(),g=d(),s=!1,k=d.computeInstance.hasDependencies}if(w)return m(),"<"+y+n.view.hook(function(n,t){e.list(n,w.list,w.renderer,v,t)})+"></"+y+">";if(!k||"function"==typeof g)return m(),(s||2===f||!f?o:c)(g,0===p&&y);var M=t.tagToContentPropMap[l];if(0!==p||M)return 1===p?(r.push(function(n){e.attributes(n,d,d()),m()}),d()):2===f?(b=p,r.push(function(n){e.specialAttribute(n,b,d),m()}),d()):(b=0===p?M:p,(0===p?i:r).push(function(n){e.attribute(n,b,d),m()}),e.attributePlaceholder);var C=!!t.selfClosingTags[y];return"<"+y+n.view.hook(f&&"object"!=typeof g?function(n,t){e.text(n,d,t),m()}:function(n,t){e.html(n,d,t),m()})+(C?"/>":">"+u(y)+"</"+y+">")}}),n});
/*can/view/ejs/ejs*/
define("can/view/ejs/ejs",["can/util/util","can/view/view","can/util/string/string","can/compute/compute","can/view/scanner","can/view/render"],function(t){var e=t.extend,n=function(t){if(this.constructor!==n){var r=new n(t);return function(t,e){return r.render(t,e)}}return"function"==typeof t?void(this.template={fn:t}):(e(this,t),void(this.template=this.scanner.scan(this.text,this.name)))};return t.EJS=n,n.prototype.render=function(t,e){return t=t||{},this.template.fn.call(t,t,new n.Helpers(t,e||{}))},e(n.prototype,{scanner:new t.view.Scanner({text:{outStart:"with(_VIEW) { with (_CONTEXT) {",outEnd:"}}",argNames:"_CONTEXT,_VIEW",context:"this"},tokens:[["templateLeft","<%%"],["templateRight","%>"],["returnLeft","<%=="],["escapeLeft","<%="],["commentLeft","<%#"],["left","<%"],["right","%>"],["returnRight","%>"]],helpers:[{name:/\s*\(([\$\w]+)\)\s*->([^\n]*)/,fn:function(t){var e=/\s*\(([\$\w]+)\)\s*->([^\n]*)/,n=t.match(e);return"can.proxy(function(__){var "+n[1]+"=can.$(__);"+n[2]+"}, this);"}}],transform:function(t){return t.replace(/<%([\s\S]+?)%>/gm,function(t,e){var n,r,i=[];e.replace(/[{}]/gm,function(t,e){i.push([t,e])});do for(n=!1,r=i.length-2;r>=0;r--)if("{"===i[r][0]&&"}"===i[r+1][0]){i.splice(r,2),n=!0;break}while(n);if(i.length>=2){var s,a=["<%"],c=0;for(r=0;s=i[r];r++)a.push(e.substring(c,c=s[1])),"{"===s[0]&&r<i.length-1||"}"===s[0]&&r>0?a.push("{"===s[0]?"{ %><% ":" %><% }"):a.push(s[0]),++c;return a.push(e.substring(c),"%>"),a.join("")}return"<%"+e+"%>"})}})}),n.Helpers=function(t,n){this._data=t,this._extras=n,e(this,n)},n.Helpers.prototype={list:function(e,n){t.each(e,function(t,r){n(t,r,e)})},each:function(e,n){t.isArray(e)?this.list(e,n):t.view.lists(e,n)}},t.view.register({suffix:"ejs",script:function(t,e){return"can.EJS(function(_CONTEXT,_VIEW) { "+new n({text:e,name:t}).template.out+" })"},renderer:function(t,e){return n({text:e,name:t})}}),t.ejs.Helpers=n.Helpers,t});
/*can/construct/proxy/proxy*/
define("can/construct/proxy/proxy",["can/util/util","can/construct/construct"],function(r,t){var n=(r.isFunction,r.isArray),o=r.makeArray,c=function(r){var t,c=o(arguments);return r=c.shift(),n(r)||(r=[r]),t=this,function(){for(var u,a,e=c.concat(o(arguments)),s=r.length,i=0;s>i;i++)a=r[i],a&&(u="string"==typeof a,e=(u?t[a]:a).apply(t,e||[]),s-1>i&&(e=!n(e)||e._use_call?[e]:e));return e}};r.Construct.proxy=r.Construct.prototype.proxy=c;for(var u=[r.Map,r.Control,r.Model],a=0;a<u.length;a++)u[a]&&(u[a].proxy=c);return r});
/*[global-shim-end]*/
!function(){window._define=window.define,window.define=window.define.orig}();
/*!
 * Pikaday
 *
 * Copyright © 2014 David Bushell | BSD & MIT license | https://github.com/dbushell/Pikaday
 */

(function (root, factory) {
    'use strict';

    var moment;
    if (typeof exports === 'object') {
        // CommonJS module
        // Load moment.js as an optional dependency
        try { moment = require('moment'); } catch (e) { }
        module.exports = factory(moment);
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(function (req) {
            // Load moment.js as an optional dependency
            var id = 'moment';
            try { moment = req(id); } catch (e) { }
            return factory(moment);
        });
    } else {
        root.Pikaday = factory(root.moment);
    }
}(this, function (moment) {
    'use strict';

    /**
     * feature detection and helper functions
     */
    var hasMoment = typeof moment === 'function',

        hasEventListeners = !!window.addEventListener,

        document = window.document,

        sto = window.setTimeout,

        addEvent = function (el, e, callback, capture) {
            if (hasEventListeners) {
                el.addEventListener(e, callback, !!capture);
            } else {
                el.attachEvent('on' + e, callback);
            }
        },

        removeEvent = function (el, e, callback, capture) {
            if (hasEventListeners) {
                el.removeEventListener(e, callback, !!capture);
            } else {
                el.detachEvent('on' + e, callback);
            }
        },

        trim = function (str) {
            return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
        },

        hasClass = function (el, cn) {
            return (' ' + el.className + ' ').indexOf(' ' + cn + ' ') !== -1;
        },

        addClass = function (el, cn) {
            if (!hasClass(el, cn)) {
                el.className = (el.className === '') ? cn : el.className + ' ' + cn;
            }
        },

        removeClass = function (el, cn) {
            el.className = trim((' ' + el.className + ' ').replace(' ' + cn + ' ', ' '));
        },

        isArray = function (obj) {
            return (/Array/).test(Object.prototype.toString.call(obj));
        },

        isDate = function (obj) {
            return (/Date/).test(Object.prototype.toString.call(obj)) && !isNaN(obj.getTime());
        },

        isWeekend = function (date) {
            var day = date.getDay();
            return day === 0 || day === 6;
        },

        isLeapYear = function (year) {
            // solution by Matti Virkkunen: http://stackoverflow.com/a/4881951
            return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
        },

        getDaysInMonth = function (year, month) {
            return [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
        },

        setToStartOfDay = function (date) {
            if (isDate(date)) date.setHours(0, 0, 0, 0);
        },

        compareDates = function (a, b) {
            // weak date comparison (use setToStartOfDay(date) to ensure correct result)
            return a.getTime() === b.getTime();
        },

        extend = function (to, from, overwrite) {
            var prop, hasProp;
            for (prop in from) {
                hasProp = to[prop] !== undefined;
                if (hasProp && typeof from[prop] === 'object' && from[prop] !== null && from[prop].nodeName === undefined) {
                    if (isDate(from[prop])) {
                        if (overwrite) {
                            to[prop] = new Date(from[prop].getTime());
                        }
                    }
                    else if (isArray(from[prop])) {
                        if (overwrite) {
                            to[prop] = from[prop].slice(0);
                        }
                    } else {
                        to[prop] = extend({}, from[prop], overwrite);
                    }
                } else if (overwrite || !hasProp) {
                    to[prop] = from[prop];
                }
            }
            return to;
        },

        fireEvent = function (el, eventName, data) {
            var ev;

            if (document.createEvent) {
                ev = document.createEvent('HTMLEvents');
                ev.initEvent(eventName, true, false);
                ev = extend(ev, data);
                el.dispatchEvent(ev);
            } else if (document.createEventObject) {
                ev = document.createEventObject();
                ev = extend(ev, data);
                el.fireEvent('on' + eventName, ev);
            }
        },

        adjustCalendar = function (calendar) {
            if (calendar.month < 0) {
                calendar.year -= Math.ceil(Math.abs(calendar.month) / 12);
                calendar.month += 12;
            }
            if (calendar.month > 11) {
                calendar.year += Math.floor(Math.abs(calendar.month) / 12);
                calendar.month -= 12;
            }
            return calendar;
        },

        /**
         * defaults and localisation
         */
        defaults = {

            // bind the picker to a form field
            field: null,

            // automatically show/hide the picker on `field` focus (default `true` if `field` is set)
            bound: undefined,

            // position of the datepicker, relative to the field (default to bottom & left)
            // ('bottom' & 'left' keywords are not used, 'top' & 'right' are modifier on the bottom/left position)
            position: 'bottom left',

            // automatically fit in the viewport even if it means repositioning from the position option
            reposition: true,

            // the default output format for `.toString()` and `field` value
            format: 'YYYY-MM-DD',

            // the toString function which gets passed a current date object and format
            // and returns a string
            toString: null,

            // used to create date object from current input string
            parse: null,

            // the initial date to view when first opened
            defaultDate: null,

            // make the `defaultDate` the initial selected value
            setDefaultDate: false,

            // first day of week (0: Sunday, 1: Monday etc)
            firstDay: 0,

            // the default flag for moment's strict date parsing
            formatStrict: false,

            // the minimum/earliest date that can be selected
            minDate: null,
            // the maximum/latest date that can be selected
            maxDate: null,

            // number of years either side, or array of upper/lower range
            yearRange: 10,

            // show week numbers at head of row
            showWeekNumber: false,

            // Week picker mode
            pickWholeWeek: false,

            // used internally (don't config outside)
            minYear: 0,
            maxYear: 9999,
            minMonth: undefined,
            maxMonth: undefined,

            startRange: null,
            endRange: null,

            isRTL: false,

            // Additional text to append to the year in the calendar title
            yearSuffix: '',

            // Render the month after year in the calendar title
            showMonthAfterYear: false,

            // Render days of the calendar grid that fall in the next or previous month
            showDaysInNextAndPreviousMonths: false,

            // Allows user to select days that fall in the next or previous month
            enableSelectionDaysInNextAndPreviousMonths: false,

            // how many months are visible
            numberOfMonths: 1,

            // when numberOfMonths is used, this will help you to choose where the main calendar will be (default `left`, can be set to `right`)
            // only used for the first display or when a selected date is not visible
            mainCalendar: 'left',

            // Specify a DOM element to render the calendar in
            container: undefined,

            // Blur field when date is selected
            blurFieldOnSelect: true,

            // internationalization
            i18n: {
                previousMonth: 'Previous Month',
                nextMonth: 'Next Month',
                months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
            },

            // Theme Classname
            theme: null,

            // events array
            events: [],

            // callback function
            onSelect: null,
            onOpen: null,
            onClose: null,
            onDraw: null,

            // Enable keyboard input
            keyboardInput: true
        },


        /**
         * templating functions to abstract HTML rendering
         */
        renderDayName = function (opts, day, abbr) {
            day += opts.firstDay;
            while (day >= 7) {
                day -= 7;
            }
            return abbr ? opts.i18n.weekdaysShort[day] : opts.i18n.weekdays[day];
        },

        renderDay = function (opts) {
            var arr = [];
            var ariaSelected = 'false';
            if (opts.isEmpty) {
                if (opts.showDaysInNextAndPreviousMonths) {
                    arr.push('is-outside-current-month');

                    if (!opts.enableSelectionDaysInNextAndPreviousMonths) {
                        arr.push('is-selection-disabled');
                    }

                } else {
                    return '<td class="is-empty"></td>';
                }
            }
            if (opts.isDisabled) {
                arr.push('is-disabled');
            }
            if (opts.isToday) {
                arr.push('is-today');
            }
            if (opts.isSelected) {
                arr.push('is-selected');
                ariaSelected = 'true';
            }
            if (opts.hasEvent) {
                arr.push('has-event');
            }
            if (opts.isInRange) {
                arr.push('is-inrange');
            }
            if (opts.isStartRange) {
                arr.push('is-startrange');
            }
            if (opts.isEndRange) {
                arr.push('is-endrange');
            }
            return '<td data-day="' + opts.day + '" class="' + arr.join(' ') + '" aria-selected="' + ariaSelected + '">' +
                '<button class="pika-button pika-day" type="button" ' +
                'data-pika-year="' + opts.year + '" data-pika-month="' + opts.month + '" data-pika-day="' + opts.day + '">' +
                opts.day +
                '</button>' +
                '</td>';
        },

        renderWeek = function (d, m, y) {
            // Lifted from http://javascript.about.com/library/blweekyear.htm, lightly modified.
            var onejan = new Date(y, 0, 1),
                weekNum = Math.ceil((((new Date(y, m, d) - onejan) / 86400000) + onejan.getDay() + 1) / 7);
            return '<td class="pika-week">' + weekNum + '</td>';
        },

        renderRow = function (days, isRTL, pickWholeWeek, isRowSelected) {
            return '<tr class="pika-row' + (pickWholeWeek ? ' pick-whole-week' : '') + (isRowSelected ? ' is-selected' : '') + '">' + (isRTL ? days.reverse() : days).join('') + '</tr>';
        },

        renderBody = function (rows) {
            return '<tbody>' + rows.join('') + '</tbody>';
        },

        renderHead = function (opts) {
            var i, arr = [];
            if (opts.showWeekNumber) {
                arr.push('<th></th>');
            }
            for (i = 0; i < 7; i++) {
                arr.push('<th scope="col"><abbr title="' + renderDayName(opts, i) + '">' + renderDayName(opts, i, true) + '</abbr></th>');
            }
            return '<thead><tr>' + (opts.isRTL ? arr.reverse() : arr).join('') + '</tr></thead>';
        },

        renderTitle = function (instance, c, year, month, refYear, randId) {
            var i, j, arr,
                opts = instance._o,
                isMinYear = year === opts.minYear,
                isMaxYear = year === opts.maxYear,
                html = '<div id="' + randId + '" class="pika-title" role="heading" aria-live="assertive">',
                monthHtml,
                yearHtml,
                prev = true,
                next = true;

            for (arr = [], i = 0; i < 12; i++) {
                arr.push('<option value="' + (year === refYear ? i - c : 12 + i - c) + '"' +
                    (i === month ? ' selected="selected"' : '') +
                    ((isMinYear && i < opts.minMonth) || (isMaxYear && i > opts.maxMonth) ? 'disabled="disabled"' : '') + '>' +
                    opts.i18n.months[i] + '</option>');
            }

            monthHtml = '<div class="pika-label">' + opts.i18n.months[month] + '<select class="pika-select pika-select-month" tabindex="-1">' + arr.join('') + '</select></div>';

            if (isArray(opts.yearRange)) {
                i = opts.yearRange[0];
                j = opts.yearRange[1] + 1;
            } else {
                i = year - opts.yearRange;
                j = 1 + year + opts.yearRange;
            }

            for (arr = []; i < j && i <= opts.maxYear; i++) {
                if (i >= opts.minYear) {
                    arr.push('<option value="' + i + '"' + (i === year ? ' selected="selected"' : '') + '>' + (i) + '</option>');
                }
            }
            yearHtml = '<div class="pika-label">' + year + opts.yearSuffix + '<select class="pika-select pika-select-year" tabindex="-1">' + arr.join('') + '</select></div>';

            if (opts.showMonthAfterYear) {
                html += yearHtml + monthHtml;
            } else {
                html += monthHtml + yearHtml;
            }

            if (isMinYear && (month === 0 || opts.minMonth >= month)) {
                prev = false;
            }

            if (isMaxYear && (month === 11 || opts.maxMonth <= month)) {
                next = false;
            }

            if (c === 0) {
                html += '<button class="pika-prev' + (prev ? '' : ' is-disabled') + '" type="button">' + opts.i18n.previousMonth + '</button>';
            }
            if (c === (instance._o.numberOfMonths - 1)) {
                html += '<button class="pika-next' + (next ? '' : ' is-disabled') + '" type="button">' + opts.i18n.nextMonth + '</button>';
            }

            return html += '</div>';
        },

        renderTable = function (opts, data, randId) {
            return '<table cellpadding="0" cellspacing="0" class="pika-table" role="grid" aria-labelledby="' + randId + '">' + renderHead(opts) + renderBody(data) + '</table>';
        },


        /**
         * Pikaday constructor
         */
        Pikaday = function (options) {
            var self = this,
                opts = self.config(options);

            self._onMouseDown = function (e) {
                if (!self._v) {
                    return;
                }
                e = e || window.event;
                var target = e.target || e.srcElement;
                if (!target) {
                    return;
                }

                if (!hasClass(target, 'is-disabled')) {
                    if (hasClass(target, 'pika-button') && !hasClass(target, 'is-empty') && !hasClass(target.parentNode, 'is-disabled')) {
                        self.setDate(new Date(target.getAttribute('data-pika-year'), target.getAttribute('data-pika-month'), target.getAttribute('data-pika-day')));
                        if (opts.bound) {
                            sto(function () {
                                self.hide();
                                if (opts.blurFieldOnSelect && opts.field) {
                                    opts.field.blur();
                                }
                            }, 100);
                        }
                    }
                    else if (hasClass(target, 'pika-prev')) {
                        self.prevMonth();
                    }
                    else if (hasClass(target, 'pika-next')) {
                        self.nextMonth();
                    }
                }
                if (!hasClass(target, 'pika-select')) {
                    // if this is touch event prevent mouse events emulation
                    if (e.preventDefault) {
                        e.preventDefault();
                    } else {
                        e.returnValue = false;
                        return false;
                    }
                } else {
                    self._c = true;
                }
            };

            self._onChange = function (e) {
                e = e || window.event;
                var target = e.target || e.srcElement;
                if (!target) {
                    return;
                }
                if (hasClass(target, 'pika-select-month')) {
                    self.gotoMonth(target.value);
                }
                else if (hasClass(target, 'pika-select-year')) {
                    self.gotoYear(target.value);
                }
            };

            self._onKeyChange = function (e) {
                e = e || window.event;

                if (self.isVisible()) {

                    switch (e.keyCode) {
                        case 13:
                        case 27:
                            if (opts.field) {
                                opts.field.blur();
                            }
                            break;
                        case 37:
                            e.preventDefault();
                            self.adjustDate('subtract', 1);
                            break;
                        case 38:
                            self.adjustDate('subtract', 7);
                            break;
                        case 39:
                            self.adjustDate('add', 1);
                            break;
                        case 40:
                            self.adjustDate('add', 7);
                            break;
                    }
                }
            };

            self._onInputChange = function (e) {
                var date;

                if (e.firedBy === self) {
                    return;
                }
                if (opts.parse) {
                    date = opts.parse(opts.field.value, opts.format);
                } else if (hasMoment) {
                    date = moment(opts.field.value, opts.format, opts.formatStrict);
                    date = (date && date.isValid()) ? date.toDate() : null;
                }
                else {
                    date = new Date(Date.parse(opts.field.value));
                }
                if (isDate(date)) {
                    self.setDate(date);
                }
                if (!self._v) {
                    self.show();
                }
            };

            self._onInputFocus = function () {
                self.show();
            };

            self._onInputClick = function () {
                self.show();
            };

            self._onInputBlur = function () {
                // IE allows pika div to gain focus; catch blur the input field
                var pEl = document.activeElement;
                do {
                    if (hasClass(pEl, 'pika-single')) {
                        return;
                    }
                }
                while ((pEl = pEl.parentNode));

                if (!self._c) {
                    self._b = sto(function () {
                        self.hide();
                    }, 50);
                }
                self._c = false;
            };

            self._onClick = function (e) {
                e = e || window.event;
                var target = e.target || e.srcElement,
                    pEl = target;
                if (!target) {
                    return;
                }
                if (!hasEventListeners && hasClass(target, 'pika-select')) {
                    if (!target.onchange) {
                        target.setAttribute('onchange', 'return;');
                        addEvent(target, 'change', self._onChange);
                    }
                }
                do {
                    if (hasClass(pEl, 'pika-single') || pEl === opts.trigger) {
                        return;
                    }
                }
                while ((pEl = pEl.parentNode));
                if (self._v && target !== opts.trigger && pEl !== opts.trigger) {
                    self.hide();
                }
            };

            self.el = document.createElement('div');
            self.el.className = 'pika-single' + (opts.isRTL ? ' is-rtl' : '') + (opts.theme ? ' ' + opts.theme : '');

            addEvent(self.el, 'mousedown', self._onMouseDown, true);
            addEvent(self.el, 'touchend', self._onMouseDown, true);
            addEvent(self.el, 'change', self._onChange);

            if (opts.keyboardInput) {
                addEvent(document, 'keydown', self._onKeyChange);
            }

            if (opts.field) {
                if (opts.container) {
                    opts.container.appendChild(self.el);
                } else if (opts.bound) {
                    document.body.appendChild(self.el);
                } else {
                    opts.field.parentNode.insertBefore(self.el, opts.field.nextSibling);
                }
                addEvent(opts.field, 'change', self._onInputChange);

                if (!opts.defaultDate) {
                    if (hasMoment && opts.field.value) {
                        opts.defaultDate = moment(opts.field.value, opts.format).toDate();
                    } else {
                        opts.defaultDate = new Date(Date.parse(opts.field.value));
                    }
                    opts.setDefaultDate = true;
                }
            }

            var defDate = opts.defaultDate;

            if (isDate(defDate)) {
                if (opts.setDefaultDate) {
                    self.setDate(defDate, true);
                } else {
                    self.gotoDate(defDate);
                }
            } else {
                self.gotoDate(new Date());
            }

            if (opts.bound) {
                this.hide();
                self.el.className += ' is-bound';
                addEvent(opts.trigger, 'click', self._onInputClick);
                addEvent(opts.trigger, 'focus', self._onInputFocus);
                addEvent(opts.trigger, 'blur', self._onInputBlur);
            } else {
                this.show();
            }
        };


    /**
     * public Pikaday API
     */
    Pikaday.prototype = {


        /**
         * configure functionality
         */
        config: function (options) {
            if (!this._o) {
                this._o = extend({}, defaults, true);
            }

            var opts = extend(this._o, options, true);

            opts.isRTL = !!opts.isRTL;

            opts.field = (opts.field && opts.field.nodeName) ? opts.field : null;

            opts.theme = (typeof opts.theme) === 'string' && opts.theme ? opts.theme : null;

            opts.bound = !!(opts.bound !== undefined ? opts.field && opts.bound : opts.field);

            opts.trigger = (opts.trigger && opts.trigger.nodeName) ? opts.trigger : opts.field;

            opts.disableWeekends = !!opts.disableWeekends;

            opts.disableDayFn = (typeof opts.disableDayFn) === 'function' ? opts.disableDayFn : null;

            var nom = parseInt(opts.numberOfMonths, 10) || 1;
            opts.numberOfMonths = nom > 4 ? 4 : nom;

            if (!isDate(opts.minDate)) {
                opts.minDate = false;
            }
            if (!isDate(opts.maxDate)) {
                opts.maxDate = false;
            }
            if ((opts.minDate && opts.maxDate) && opts.maxDate < opts.minDate) {
                opts.maxDate = opts.minDate = false;
            }
            if (opts.minDate) {
                this.setMinDate(opts.minDate);
            }
            if (opts.maxDate) {
                this.setMaxDate(opts.maxDate);
            }

            if (isArray(opts.yearRange)) {
                var fallback = new Date().getFullYear() - 10;
                opts.yearRange[0] = parseInt(opts.yearRange[0], 10) || fallback;
                opts.yearRange[1] = parseInt(opts.yearRange[1], 10) || fallback;
            } else {
                opts.yearRange = Math.abs(parseInt(opts.yearRange, 10)) || defaults.yearRange;
                if (opts.yearRange > 100) {
                    opts.yearRange = 100;
                }
            }

            return opts;
        },

        /**
         * return a formatted string of the current selection (using Moment.js if available)
         */
        toString: function (format) {
            format = format || this._o.format;
            if (!isDate(this._d)) {
                return '';
            }
            if (this._o.toString) {
                return this._o.toString(this._d, format);
            }
            if (hasMoment) {
                return moment(this._d).format(format);
            }
            return this._d.toDateString();
        },

        /**
         * return a Moment.js object of the current selection (if available)
         */
        getMoment: function () {
            return hasMoment ? moment(this._d) : null;
        },

        /**
         * set the current selection from a Moment.js object (if available)
         */
        setMoment: function (date, preventOnSelect) {
            if (hasMoment && moment.isMoment(date)) {
                this.setDate(date.toDate(), preventOnSelect);
            }
        },

        /**
         * return a Date object of the current selection
         */
        getDate: function () {
            return isDate(this._d) ? new Date(this._d.getTime()) : null;
        },

        /**
         * set the current selection
         */
        setDate: function (date, preventOnSelect) {
            if (!date) {
                this._d = null;

                if (this._o.field) {
                    this._o.field.value = '';
                    fireEvent(this._o.field, 'change', { firedBy: this });
                }

                return this.draw();
            }
            if (typeof date === 'string') {
                date = new Date(Date.parse(date));
            }
            if (!isDate(date)) {
                return;
            }

            var min = this._o.minDate,
                max = this._o.maxDate;

            if (isDate(min) && date < min) {
                date = min;
            } else if (isDate(max) && date > max) {
                date = max;
            }

            this._d = new Date(date.getTime());
            setToStartOfDay(this._d);
            this.gotoDate(this._d);

            if (this._o.field) {
                this._o.field.value = this.toString();
                fireEvent(this._o.field, 'change', { firedBy: this });
            }
            if (!preventOnSelect && typeof this._o.onSelect === 'function') {
                this._o.onSelect.call(this, this.getDate());
            }
        },

        /**
         * change view to a specific date
         */
        gotoDate: function (date) {
            var newCalendar = true;

            if (!isDate(date)) {
                return;
            }

            if (this.calendars) {
                var firstVisibleDate = new Date(this.calendars[0].year, this.calendars[0].month, 1),
                    lastVisibleDate = new Date(this.calendars[this.calendars.length - 1].year, this.calendars[this.calendars.length - 1].month, 1),
                    visibleDate = date.getTime();
                // get the end of the month
                lastVisibleDate.setMonth(lastVisibleDate.getMonth() + 1);
                lastVisibleDate.setDate(lastVisibleDate.getDate() - 1);
                newCalendar = (visibleDate < firstVisibleDate.getTime() || lastVisibleDate.getTime() < visibleDate);
            }

            if (newCalendar) {
                this.calendars = [{
                    month: date.getMonth(),
                    year: date.getFullYear()
                }];
                if (this._o.mainCalendar === 'right') {
                    this.calendars[0].month += 1 - this._o.numberOfMonths;
                }
            }

            this.adjustCalendars();
        },

        adjustDate: function (sign, days) {

            var day = this.getDate() || new Date();
            var difference = parseInt(days) * 24 * 60 * 60 * 1000;

            var newDay;

            if (sign === 'add') {
                newDay = new Date(day.valueOf() + difference);
            } else if (sign === 'subtract') {
                newDay = new Date(day.valueOf() - difference);
            }

            this.setDate(newDay);
        },

        adjustCalendars: function () {
            this.calendars[0] = adjustCalendar(this.calendars[0]);
            for (var c = 1; c < this._o.numberOfMonths; c++) {
                this.calendars[c] = adjustCalendar({
                    month: this.calendars[0].month + c,
                    year: this.calendars[0].year
                });
            }
            this.draw();
        },

        gotoToday: function () {
            this.gotoDate(new Date());
        },

        /**
         * change view to a specific month (zero-index, e.g. 0: January)
         */
        gotoMonth: function (month) {
            if (!isNaN(month)) {
                this.calendars[0].month = parseInt(month, 10);
                this.adjustCalendars();
            }
        },

        nextMonth: function () {
            this.calendars[0].month++;
            this.adjustCalendars();
        },

        prevMonth: function () {
            this.calendars[0].month--;
            this.adjustCalendars();
        },

        /**
         * change view to a specific full year (e.g. "2012")
         */
        gotoYear: function (year) {
            if (!isNaN(year)) {
                this.calendars[0].year = parseInt(year, 10);
                this.adjustCalendars();
            }
        },

        /**
         * change the minDate
         */
        setMinDate: function (value) {
            if (value instanceof Date) {
                setToStartOfDay(value);
                this._o.minDate = value;
                this._o.minYear = value.getFullYear();
                this._o.minMonth = value.getMonth();
            } else {
                this._o.minDate = defaults.minDate;
                this._o.minYear = defaults.minYear;
                this._o.minMonth = defaults.minMonth;
                this._o.startRange = defaults.startRange;
            }

            this.draw();
        },

        /**
         * change the maxDate
         */
        setMaxDate: function (value) {
            if (value instanceof Date) {
                setToStartOfDay(value);
                this._o.maxDate = value;
                this._o.maxYear = value.getFullYear();
                this._o.maxMonth = value.getMonth();
            } else {
                this._o.maxDate = defaults.maxDate;
                this._o.maxYear = defaults.maxYear;
                this._o.maxMonth = defaults.maxMonth;
                this._o.endRange = defaults.endRange;
            }

            this.draw();
        },

        setStartRange: function (value) {
            this._o.startRange = value;
        },

        setEndRange: function (value) {
            this._o.endRange = value;
        },

        /**
         * refresh the HTML
         */
        draw: function (force) {
            if (!this._v && !force) {
                return;
            }
            var opts = this._o,
                minYear = opts.minYear,
                maxYear = opts.maxYear,
                minMonth = opts.minMonth,
                maxMonth = opts.maxMonth,
                html = '',
                randId;

            if (this._y <= minYear) {
                this._y = minYear;
                if (!isNaN(minMonth) && this._m < minMonth) {
                    this._m = minMonth;
                }
            }
            if (this._y >= maxYear) {
                this._y = maxYear;
                if (!isNaN(maxMonth) && this._m > maxMonth) {
                    this._m = maxMonth;
                }
            }

            randId = 'pika-title-' + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 2);

            for (var c = 0; c < opts.numberOfMonths; c++) {
                html += '<div class="pika-lendar">' + renderTitle(this, c, this.calendars[c].year, this.calendars[c].month, this.calendars[0].year, randId) + this.render(this.calendars[c].year, this.calendars[c].month, randId) + '</div>';
            }

            this.el.innerHTML = html;

            if (opts.bound) {
                if (opts.field.type !== 'hidden') {
                    sto(function () {
                        opts.trigger.focus();
                    }, 1);
                }
            }

            if (typeof this._o.onDraw === 'function') {
                this._o.onDraw(this);
            }

            if (opts.bound) {
                // let the screen reader user know to use arrow keys
                opts.field.setAttribute('aria-label', 'Use the arrow keys to pick a date');
            }
        },

        adjustPosition: function () {
            var field, pEl, width, height, viewportWidth, viewportHeight, scrollTop, left, top, clientRect;

            if (this._o.container) return;

            this.el.style.position = 'absolute';

            field = this._o.trigger;
            pEl = field;
            width = this.el.offsetWidth;
            height = this.el.offsetHeight;
            viewportWidth = window.innerWidth || document.documentElement.clientWidth;
            viewportHeight = window.innerHeight || document.documentElement.clientHeight;
            scrollTop = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;

            if (typeof field.getBoundingClientRect === 'function') {
                clientRect = field.getBoundingClientRect();
                left = clientRect.left + window.pageXOffset;
                top = clientRect.bottom + window.pageYOffset;
            } else {
                left = pEl.offsetLeft;
                top = pEl.offsetTop + pEl.offsetHeight;
                while ((pEl = pEl.offsetParent)) {
                    left += pEl.offsetLeft;
                    top += pEl.offsetTop;
                }
            }

            // default position is bottom & left
            if ((this._o.reposition && left + width > viewportWidth) ||
                (
                    this._o.position.indexOf('right') > -1 &&
                    left - width + field.offsetWidth > 0
                )
            ) {
                left = left - width + field.offsetWidth;
            }
            if ((this._o.reposition && top + height > viewportHeight + scrollTop) ||
                (
                    this._o.position.indexOf('top') > -1 &&
                    top - height - field.offsetHeight > 0
                )
            ) {
                top = top - height - field.offsetHeight;
            }

            this.el.style.left = left + 'px';
            this.el.style.top = top + 'px';
        },

        /**
         * render HTML for a particular month
         */
        render: function (year, month, randId) {
            var opts = this._o,
                now = new Date(),
                days = getDaysInMonth(year, month),
                before = new Date(year, month, 1).getDay(),
                data = [],
                row = [];
            setToStartOfDay(now);
            if (opts.firstDay > 0) {
                before -= opts.firstDay;
                if (before < 0) {
                    before += 7;
                }
            }
            var previousMonth = month === 0 ? 11 : month - 1,
                nextMonth = month === 11 ? 0 : month + 1,
                yearOfPreviousMonth = month === 0 ? year - 1 : year,
                yearOfNextMonth = month === 11 ? year + 1 : year,
                daysInPreviousMonth = getDaysInMonth(yearOfPreviousMonth, previousMonth);
            var cells = days + before,
                after = cells;
            while (after > 7) {
                after -= 7;
            }
            cells += 7 - after;
            var isWeekSelected = false;
            for (var i = 0, r = 0; i < cells; i++) {
                var day = new Date(year, month, 1 + (i - before)),
                    isSelected = isDate(this._d) ? compareDates(day, this._d) : false,
                    isToday = compareDates(day, now),
                    hasEvent = opts.events.indexOf(day.toDateString()) !== -1 ? true : false,
                    isEmpty = i < before || i >= (days + before),
                    dayNumber = 1 + (i - before),
                    monthNumber = month,
                    yearNumber = year,
                    isStartRange = opts.startRange && compareDates(opts.startRange, day),
                    isEndRange = opts.endRange && compareDates(opts.endRange, day),
                    isInRange = opts.startRange && opts.endRange && opts.startRange < day && day < opts.endRange,
                    isDisabled = (opts.minDate && day < opts.minDate) ||
                        (opts.maxDate && day > opts.maxDate) ||
                        (opts.disableWeekends && isWeekend(day)) ||
                        (opts.disableDayFn && opts.disableDayFn(day));

                if (isEmpty) {
                    if (i < before) {
                        dayNumber = daysInPreviousMonth + dayNumber;
                        monthNumber = previousMonth;
                        yearNumber = yearOfPreviousMonth;
                    } else {
                        dayNumber = dayNumber - days;
                        monthNumber = nextMonth;
                        yearNumber = yearOfNextMonth;
                    }
                }

                var dayConfig = {
                    day: dayNumber,
                    month: monthNumber,
                    year: yearNumber,
                    hasEvent: hasEvent,
                    isSelected: isSelected,
                    isToday: isToday,
                    isDisabled: isDisabled,
                    isEmpty: isEmpty,
                    isStartRange: isStartRange,
                    isEndRange: isEndRange,
                    isInRange: isInRange,
                    showDaysInNextAndPreviousMonths: opts.showDaysInNextAndPreviousMonths,
                    enableSelectionDaysInNextAndPreviousMonths: opts.enableSelectionDaysInNextAndPreviousMonths
                };

                if (opts.pickWholeWeek && isSelected) {
                    isWeekSelected = true;
                }

                row.push(renderDay(dayConfig));

                if (++r === 7) {
                    if (opts.showWeekNumber) {
                        row.unshift(renderWeek(i - before, month, year));
                    }
                    data.push(renderRow(row, opts.isRTL, opts.pickWholeWeek, isWeekSelected));
                    row = [];
                    r = 0;
                    isWeekSelected = false;
                }
            }
            return renderTable(opts, data, randId);
        },

        isVisible: function () {
            return this._v;
        },

        show: function () {
            if (!this.isVisible()) {
                this._v = true;
                this.draw();
                removeClass(this.el, 'is-hidden');
                if (this._o.bound) {
                    addEvent(document, 'click', this._onClick);
                    this.adjustPosition();
                }
                if (typeof this._o.onOpen === 'function') {
                    this._o.onOpen.call(this);
                }
            }
        },

        hide: function () {
            var v = this._v;
            if (v !== false) {
                if (this._o.bound) {
                    removeEvent(document, 'click', this._onClick);
                }
                this.el.style.position = 'static'; // reset
                this.el.style.left = 'auto';
                this.el.style.top = 'auto';
                addClass(this.el, 'is-hidden');
                this._v = false;
                if (v !== undefined && typeof this._o.onClose === 'function') {
                    this._o.onClose.call(this);
                }
            }
        },

        /**
         * GAME OVER
         */
        destroy: function () {
            var opts = this._o;

            this.hide();
            removeEvent(this.el, 'mousedown', this._onMouseDown, true);
            removeEvent(this.el, 'touchend', this._onMouseDown, true);
            removeEvent(this.el, 'change', this._onChange);
            if (opts.keyboardInput) {
                removeEvent(document, 'keydown', this._onKeyChange);
            }
            if (opts.field) {
                removeEvent(opts.field, 'change', this._onInputChange);
                if (opts.bound) {
                    removeEvent(opts.trigger, 'click', this._onInputClick);
                    removeEvent(opts.trigger, 'focus', this._onInputFocus);
                    removeEvent(opts.trigger, 'blur', this._onInputBlur);
                }
            }
            if (this.el.parentNode) {
                this.el.parentNode.removeChild(this.el);
            }
        }

    };

    return Pikaday;
}));

/**
 * interact.js v1.2.8
 *
 * Copyright (c) 2012-2015 Taye Adeyemi <dev@taye.me>
 * Open source under the MIT License.
 * https://raw.github.com/taye/interact.js/master/LICENSE
 */
(function (realWindow) {
    'use strict';

    // return early if there's no window to work with (eg. Node.js)
    if (!realWindow) { return; }

    var // get wrapped window if using Shadow DOM polyfill
        window = (function () {
            // create a TextNode
            var el = realWindow.document.createTextNode('');

            // check if it's wrapped by a polyfill
            if (el.ownerDocument !== realWindow.document
                && typeof realWindow.wrap === 'function'
                && realWindow.wrap(el) === el) {
                // return wrapped window
                return realWindow.wrap(realWindow);
            }

            // no Shadow DOM polyfil or native implementation
            return realWindow;
        }()),

        document           = window.document,
        DocumentFragment   = window.DocumentFragment   || blank,
        SVGElement         = window.SVGElement         || blank,
        SVGSVGElement      = window.SVGSVGElement      || blank,
        SVGElementInstance = window.SVGElementInstance || blank,
        HTMLElement        = window.HTMLElement        || window.Element,

        PointerEvent = (window.PointerEvent || window.MSPointerEvent),
        pEventTypes,

        hypot = Math.hypot || function (x, y) { return Math.sqrt(x * x + y * y); },

        tmpXY = {},     // reduce object creation in getXY()

        documents       = [],   // all documents being listened to

        interactables   = [],   // all set interactables
        interactions    = [],   // all interactions

        dynamicDrop     = false,

        // {
        //      type: {
        //          selectors: ['selector', ...],
        //          contexts : [document, ...],
        //          listeners: [[listener, useCapture], ...]
        //      }
        //  }
        delegatedEvents = {},

        defaultOptions = {
            base: {
                accept        : null,
                actionChecker : null,
                styleCursor   : true,
                preventDefault: 'auto',
                origin        : { x: 0, y: 0 },
                deltaSource   : 'page',
                allowFrom     : null,
                ignoreFrom    : null,
                _context      : document,
                dropChecker   : null
            },

            drag: {
                enabled: false,
                manualStart: true,
                max: Infinity,
                maxPerElement: 1,

                snap: null,
                restrict: null,
                inertia: null,
                autoScroll: null,

                axis: 'xy'
            },

            drop: {
                enabled: false,
                accept: null,
                overlap: 'pointer'
            },

            resize: {
                enabled: false,
                manualStart: false,
                max: Infinity,
                maxPerElement: 1,

                snap: null,
                restrict: null,
                inertia: null,
                autoScroll: null,

                square: false,
                preserveAspectRatio: false,
                axis: 'xy',

                // use default margin
                margin: NaN,

                // object with props left, right, top, bottom which are
                // true/false values to resize when the pointer is over that edge,
                // CSS selectors to match the handles for each direction
                // or the Elements for each handle
                edges: null,

                // a value of 'none' will limit the resize rect to a minimum of 0x0
                // 'negate' will alow the rect to have negative width/height
                // 'reposition' will keep the width/height positive by swapping
                // the top and bottom edges and/or swapping the left and right edges
                invert: 'none'
            },

            gesture: {
                manualStart: false,
                enabled: false,
                max: Infinity,
                maxPerElement: 1,

                restrict: null
            },

            perAction: {
                manualStart: false,
                max: Infinity,
                maxPerElement: 1,

                snap: {
                    enabled     : false,
                    endOnly     : false,
                    range       : Infinity,
                    targets     : null,
                    offsets     : null,

                    relativePoints: null
                },

                restrict: {
                    enabled: false,
                    endOnly: false
                },

                autoScroll: {
                    enabled     : false,
                    container   : null,     // the item that is scrolled (Window or HTMLElement)
                    margin      : 60,
                    speed       : 300       // the scroll speed in pixels per second
                },

                inertia: {
                    enabled          : false,
                    resistance       : 10,    // the lambda in exponential decay
                    minSpeed         : 100,   // target speed must be above this for inertia to start
                    endSpeed         : 10,    // the speed at which inertia is slow enough to stop
                    allowResume      : true,  // allow resuming an action in inertia phase
                    zeroResumeDelta  : true,  // if an action is resumed after launch, set dx/dy to 0
                    smoothEndDuration: 300    // animate to snap/restrict endOnly if there's no inertia
                }
            },

            _holdDuration: 600
        },

        // Things related to autoScroll
        autoScroll = {
            interaction: null,
            i: null,    // the handle returned by window.setInterval
            x: 0, y: 0, // Direction each pulse is to scroll in

            // scroll the window by the values in scroll.x/y
            scroll: function () {
                var options = autoScroll.interaction.target.options[autoScroll.interaction.prepared.name].autoScroll,
                    container = options.container || getWindow(autoScroll.interaction.element),
                    now = new Date().getTime(),
                    // change in time in seconds
                    dtx = (now - autoScroll.prevTimeX) / 1000,
                    dty = (now - autoScroll.prevTimeY) / 1000,
                    vx, vy, sx, sy;

                // displacement
                if (options.velocity) {
                  vx = options.velocity.x;
                  vy = options.velocity.y;
                }
                else {
                  vx = vy = options.speed
                }
 
                sx = vx * dtx;
                sy = vy * dty;

                if (sx >= 1 || sy >= 1) {
                    if (isWindow(container)) {
                        container.scrollBy(autoScroll.x * sx, autoScroll.y * sy);
                    }
                    else if (container) {
                        container.scrollLeft += autoScroll.x * sx;
                        container.scrollTop  += autoScroll.y * sy;
                    }

                    if (sx >=1) autoScroll.prevTimeX = now;
                    if (sy >= 1) autoScroll.prevTimeY = now;
                }

                if (autoScroll.isScrolling) {
                    cancelFrame(autoScroll.i);
                    autoScroll.i = reqFrame(autoScroll.scroll);
                }
            },

            isScrolling: false,
            prevTimeX: 0,
            prevTimeY: 0,

            start: function (interaction) {
                autoScroll.isScrolling = true;
                cancelFrame(autoScroll.i);

                autoScroll.interaction = interaction;
                autoScroll.prevTimeX = new Date().getTime();
                autoScroll.prevTimeY = new Date().getTime();
                autoScroll.i = reqFrame(autoScroll.scroll);
            },

            stop: function () {
                autoScroll.isScrolling = false;
                cancelFrame(autoScroll.i);
            }
        },

        // Does the browser support touch input?
        supportsTouch = (('ontouchstart' in window) || window.DocumentTouch && document instanceof window.DocumentTouch),

        // Does the browser support PointerEvents
        // Avoid PointerEvent bugs introduced in Chrome 55
        supportsPointerEvent = PointerEvent && !/Chrome/.test(navigator.userAgent),

        // Less Precision with touch input
        margin = supportsTouch || supportsPointerEvent? 20: 10,

        pointerMoveTolerance = 1,

        // for ignoring browser's simulated mouse events
        prevTouchTime = 0,

        // Allow this many interactions to happen simultaneously
        maxInteractions = Infinity,

        // Check if is IE9 or older
        actionCursors = (document.all && !window.atob) ? {
            drag    : 'move',
            resizex : 'e-resize',
            resizey : 's-resize',
            resizexy: 'se-resize',

            resizetop        : 'n-resize',
            resizeleft       : 'w-resize',
            resizebottom     : 's-resize',
            resizeright      : 'e-resize',
            resizetopleft    : 'se-resize',
            resizebottomright: 'se-resize',
            resizetopright   : 'ne-resize',
            resizebottomleft : 'ne-resize',

            gesture : ''
        } : {
            drag    : 'move',
            resizex : 'ew-resize',
            resizey : 'ns-resize',
            resizexy: 'nwse-resize',

            resizetop        : 'ns-resize',
            resizeleft       : 'ew-resize',
            resizebottom     : 'ns-resize',
            resizeright      : 'ew-resize',
            resizetopleft    : 'nwse-resize',
            resizebottomright: 'nwse-resize',
            resizetopright   : 'nesw-resize',
            resizebottomleft : 'nesw-resize',

            gesture : ''
        },

        actionIsEnabled = {
            drag   : true,
            resize : true,
            gesture: true
        },

        // because Webkit and Opera still use 'mousewheel' event type
        wheelEvent = 'onmousewheel' in document? 'mousewheel': 'wheel',

        eventTypes = [
            'dragstart',
            'dragmove',
            'draginertiastart',
            'dragend',
            'dragenter',
            'dragleave',
            'dropactivate',
            'dropdeactivate',
            'dropmove',
            'drop',
            'resizestart',
            'resizemove',
            'resizeinertiastart',
            'resizeend',
            'gesturestart',
            'gesturemove',
            'gestureinertiastart',
            'gestureend',

            'down',
            'move',
            'up',
            'cancel',
            'tap',
            'doubletap',
            'hold'
        ],

        globalEvents = {},

        // Opera Mobile must be handled differently
        isOperaMobile = navigator.appName == 'Opera' &&
            supportsTouch &&
            navigator.userAgent.match('Presto'),

        // scrolling doesn't change the result of getClientRects on iOS 7
        isIOS7 = (/iP(hone|od|ad)/.test(navigator.platform)
                         && /OS 7[^\d]/.test(navigator.appVersion)),

        // prefix matchesSelector
        prefixedMatchesSelector = 'matches' in Element.prototype?
                'matches': 'webkitMatchesSelector' in Element.prototype?
                    'webkitMatchesSelector': 'mozMatchesSelector' in Element.prototype?
                        'mozMatchesSelector': 'oMatchesSelector' in Element.prototype?
                            'oMatchesSelector': 'msMatchesSelector',

        // will be polyfill function if browser is IE8
        ie8MatchesSelector,

        // native requestAnimationFrame or polyfill
        reqFrame = realWindow.requestAnimationFrame,
        cancelFrame = realWindow.cancelAnimationFrame,

        // Events wrapper
        events = (function () {
            var useAttachEvent = ('attachEvent' in window) && !('addEventListener' in window),
                addEvent       = useAttachEvent?  'attachEvent': 'addEventListener',
                removeEvent    = useAttachEvent?  'detachEvent': 'removeEventListener',
                on             = useAttachEvent? 'on': '',

                elements          = [],
                targets           = [],
                attachedListeners = [];

            function add (element, type, listener, useCapture) {
                var elementIndex = indexOf(elements, element),
                    target = targets[elementIndex];

                if (!target) {
                    target = {
                        events: {},
                        typeCount: 0
                    };

                    elementIndex = elements.push(element) - 1;
                    targets.push(target);

                    attachedListeners.push((useAttachEvent ? {
                            supplied: [],
                            wrapped : [],
                            useCount: []
                        } : null));
                }

                if (!target.events[type]) {
                    target.events[type] = [];
                    target.typeCount++;
                }

                if (!contains(target.events[type], listener)) {
                    var ret;

                    if (useAttachEvent) {
                        var listeners = attachedListeners[elementIndex],
                            listenerIndex = indexOf(listeners.supplied, listener);

                        var wrapped = listeners.wrapped[listenerIndex] || function (event) {
                            if (!event.immediatePropagationStopped) {
                                event.target = event.srcElement;
                                event.currentTarget = element;

                                event.preventDefault = event.preventDefault || preventDef;
                                event.stopPropagation = event.stopPropagation || stopProp;
                                event.stopImmediatePropagation = event.stopImmediatePropagation || stopImmProp;

                                if (/mouse|click/.test(event.type)) {
                                    event.pageX = event.clientX + getWindow(element).document.documentElement.scrollLeft;
                                    event.pageY = event.clientY + getWindow(element).document.documentElement.scrollTop;
                                }

                                listener(event);
                            }
                        };

                        ret = element[addEvent](on + type, wrapped, Boolean(useCapture));

                        if (listenerIndex === -1) {
                            listeners.supplied.push(listener);
                            listeners.wrapped.push(wrapped);
                            listeners.useCount.push(1);
                        }
                        else {
                            listeners.useCount[listenerIndex]++;
                        }
                    }
                    else {
                        ret = element[addEvent](type, listener, useCapture || false);
                    }
                    target.events[type].push(listener);

                    return ret;
                }
            }

            function remove (element, type, listener, useCapture) {
                var i,
                    elementIndex = indexOf(elements, element),
                    target = targets[elementIndex],
                    listeners,
                    listenerIndex,
                    wrapped = listener;

                if (!target || !target.events) {
                    return;
                }

                if (useAttachEvent) {
                    listeners = attachedListeners[elementIndex];
                    listenerIndex = indexOf(listeners.supplied, listener);
                    wrapped = listeners.wrapped[listenerIndex];
                }

                if (type === 'all') {
                    for (type in target.events) {
                        if (target.events.hasOwnProperty(type)) {
                            remove(element, type, 'all');
                        }
                    }
                    return;
                }

                if (target.events[type]) {
                    var len = target.events[type].length;

                    if (listener === 'all') {
                        for (i = 0; i < len; i++) {
                            remove(element, type, target.events[type][i], Boolean(useCapture));
                        }
                        return;
                    } else {
                        for (i = 0; i < len; i++) {
                            if (target.events[type][i] === listener) {
                                element[removeEvent](on + type, wrapped, useCapture || false);
                                target.events[type].splice(i, 1);

                                if (useAttachEvent && listeners) {
                                    listeners.useCount[listenerIndex]--;
                                    if (listeners.useCount[listenerIndex] === 0) {
                                        listeners.supplied.splice(listenerIndex, 1);
                                        listeners.wrapped.splice(listenerIndex, 1);
                                        listeners.useCount.splice(listenerIndex, 1);
                                    }
                                }

                                break;
                            }
                        }
                    }

                    if (target.events[type] && target.events[type].length === 0) {
                        target.events[type] = null;
                        target.typeCount--;
                    }
                }

                if (!target.typeCount) {
                    targets.splice(elementIndex, 1);
                    elements.splice(elementIndex, 1);
                    attachedListeners.splice(elementIndex, 1);
                }
            }

            function preventDef () {
                this.returnValue = false;
            }

            function stopProp () {
                this.cancelBubble = true;
            }

            function stopImmProp () {
                this.cancelBubble = true;
                this.immediatePropagationStopped = true;
            }

            return {
                add: add,
                remove: remove,
                useAttachEvent: useAttachEvent,

                _elements: elements,
                _targets: targets,
                _attachedListeners: attachedListeners
            };
        }());

    function blank () {}

    function isElement (o) {
        if (!o || (typeof o !== 'object')) { return false; }

        var _window = getWindow(o) || window;

        return (/object|function/.test(typeof _window.Element)
            ? o instanceof _window.Element //DOM2
            : o.nodeType === 1 && typeof o.nodeName === "string");
    }
    function isWindow (thing) { return thing === window || !!(thing && thing.Window) && (thing instanceof thing.Window); }
    function isDocFrag (thing) { return !!thing && thing instanceof DocumentFragment; }
    function isArray (thing) {
        return isObject(thing)
                && (typeof thing.length !== undefined)
                && isFunction(thing.splice);
    }
    function isObject   (thing) { return !!thing && (typeof thing === 'object'); }
    function isFunction (thing) { return typeof thing === 'function'; }
    function isNumber   (thing) { return typeof thing === 'number'  ; }
    function isBool     (thing) { return typeof thing === 'boolean' ; }
    function isString   (thing) { return typeof thing === 'string'  ; }

    function trySelector (value) {
        if (!isString(value)) { return false; }

        // an exception will be raised if it is invalid
        document.querySelector(value);
        return true;
    }

    function extend (dest, source) {
        for (var prop in source) {
            dest[prop] = source[prop];
        }
        return dest;
    }

    var prefixedPropREs = {
      webkit: /(Movement[XY]|Radius[XY]|RotationAngle|Force)$/
    };

    function pointerExtend (dest, source) {
        for (var prop in source) {
          var deprecated = false;

          // skip deprecated prefixed properties
          for (var vendor in prefixedPropREs) {
            if (prop.indexOf(vendor) === 0 && prefixedPropREs[vendor].test(prop)) {
              deprecated = true;
              break;
            }
          }

          if (!deprecated) {
            dest[prop] = source[prop];
          }
        }
        return dest;
    }

    function copyCoords (dest, src) {
        dest.page = dest.page || {};
        dest.page.x = src.page.x;
        dest.page.y = src.page.y;

        dest.client = dest.client || {};
        dest.client.x = src.client.x;
        dest.client.y = src.client.y;

        dest.timeStamp = src.timeStamp;
    }

    function setEventXY (targetObj, pointers, interaction) {
        var pointer = (pointers.length > 1
                       ? pointerAverage(pointers)
                       : pointers[0]);

        getPageXY(pointer, tmpXY, interaction);
        targetObj.page.x = tmpXY.x;
        targetObj.page.y = tmpXY.y;

        getClientXY(pointer, tmpXY, interaction);
        targetObj.client.x = tmpXY.x;
        targetObj.client.y = tmpXY.y;

        targetObj.timeStamp = new Date().getTime();
    }

    function setEventDeltas (targetObj, prev, cur) {
        targetObj.page.x     = cur.page.x      - prev.page.x;
        targetObj.page.y     = cur.page.y      - prev.page.y;
        targetObj.client.x   = cur.client.x    - prev.client.x;
        targetObj.client.y   = cur.client.y    - prev.client.y;
        targetObj.timeStamp = new Date().getTime() - prev.timeStamp;

        // set pointer velocity
        var dt = Math.max(targetObj.timeStamp / 1000, 0.001);
        targetObj.page.speed   = hypot(targetObj.page.x, targetObj.page.y) / dt;
        targetObj.page.vx      = targetObj.page.x / dt;
        targetObj.page.vy      = targetObj.page.y / dt;

        targetObj.client.speed = hypot(targetObj.client.x, targetObj.page.y) / dt;
        targetObj.client.vx    = targetObj.client.x / dt;
        targetObj.client.vy    = targetObj.client.y / dt;
    }

    function isNativePointer (pointer) {
        return (pointer instanceof window.Event
            || (supportsTouch && window.Touch && pointer instanceof window.Touch));
    }

    // Get specified X/Y coords for mouse or event.touches[0]
    function getXY (type, pointer, xy) {
        xy = xy || {};
        type = type || 'page';

        xy.x = pointer[type + 'X'];
        xy.y = pointer[type + 'Y'];

        return xy;
    }

    function getPageXY (pointer, page) {
        page = page || {};

        // Opera Mobile handles the viewport and scrolling oddly
        if (isOperaMobile && isNativePointer(pointer)) {
            getXY('screen', pointer, page);

            page.x += window.scrollX;
            page.y += window.scrollY;
        }
        else {
            getXY('page', pointer, page);
        }

        return page;
    }

    function getClientXY (pointer, client) {
        client = client || {};

        if (isOperaMobile && isNativePointer(pointer)) {
            // Opera Mobile handles the viewport and scrolling oddly
            getXY('screen', pointer, client);
        }
        else {
          getXY('client', pointer, client);
        }

        return client;
    }

    function getScrollXY (win) {
        win = win || window;
        return {
            x: win.scrollX || win.document.documentElement.scrollLeft,
            y: win.scrollY || win.document.documentElement.scrollTop
        };
    }

    function getPointerId (pointer) {
        return isNumber(pointer.pointerId)? pointer.pointerId : pointer.identifier;
    }

    function getActualElement (element) {
        return (element instanceof SVGElementInstance
            ? element.correspondingUseElement
            : element);
    }

    function getWindow (node) {
        if (isWindow(node)) {
            return node;
        }

        var rootNode = (node.ownerDocument || node);

        return rootNode.defaultView || rootNode.parentWindow || window;
    }

    function getElementClientRect (element) {
        var clientRect = (element instanceof SVGElement
                            ? element.getBoundingClientRect()
                            : element.getClientRects()[0]);

        return clientRect && {
            left  : clientRect.left,
            right : clientRect.right,
            top   : clientRect.top,
            bottom: clientRect.bottom,
            width : clientRect.width || clientRect.right - clientRect.left,
            height: clientRect.height || clientRect.bottom - clientRect.top
        };
    }

    function getElementRect (element) {
        var clientRect = getElementClientRect(element);

        if (!isIOS7 && clientRect) {
            var scroll = getScrollXY(getWindow(element));

            clientRect.left   += scroll.x;
            clientRect.right  += scroll.x;
            clientRect.top    += scroll.y;
            clientRect.bottom += scroll.y;
        }

        return clientRect;
    }

    function getTouchPair (event) {
        var touches = [];

        // array of touches is supplied
        if (isArray(event)) {
            touches[0] = event[0];
            touches[1] = event[1];
        }
        // an event
        else {
            if (event.type === 'touchend') {
                if (event.touches.length === 1) {
                    touches[0] = event.touches[0];
                    touches[1] = event.changedTouches[0];
                }
                else if (event.touches.length === 0) {
                    touches[0] = event.changedTouches[0];
                    touches[1] = event.changedTouches[1];
                }
            }
            else {
                touches[0] = event.touches[0];
                touches[1] = event.touches[1];
            }
        }

        return touches;
    }

    function pointerAverage (pointers) {
        var average = {
            pageX  : 0,
            pageY  : 0,
            clientX: 0,
            clientY: 0,
            screenX: 0,
            screenY: 0
        };
        var prop;

        for (var i = 0; i < pointers.length; i++) {
            for (prop in average) {
                average[prop] += pointers[i][prop];
            }
        }
        for (prop in average) {
            average[prop] /= pointers.length;
        }

        return average;
    }

    function touchBBox (event) {
        if (!event.length && !(event.touches && event.touches.length > 1)) {
            return;
        }

        var touches = getTouchPair(event),
            minX = Math.min(touches[0].pageX, touches[1].pageX),
            minY = Math.min(touches[0].pageY, touches[1].pageY),
            maxX = Math.max(touches[0].pageX, touches[1].pageX),
            maxY = Math.max(touches[0].pageY, touches[1].pageY);

        return {
            x: minX,
            y: minY,
            left: minX,
            top: minY,
            width: maxX - minX,
            height: maxY - minY
        };
    }

    function touchDistance (event, deltaSource) {
        deltaSource = deltaSource || defaultOptions.deltaSource;

        var sourceX = deltaSource + 'X',
            sourceY = deltaSource + 'Y',
            touches = getTouchPair(event);


        var dx = touches[0][sourceX] - touches[1][sourceX],
            dy = touches[0][sourceY] - touches[1][sourceY];

        return hypot(dx, dy);
    }

    function touchAngle (event, prevAngle, deltaSource) {
        deltaSource = deltaSource || defaultOptions.deltaSource;

        var sourceX = deltaSource + 'X',
            sourceY = deltaSource + 'Y',
            touches = getTouchPair(event),
            dx = touches[0][sourceX] - touches[1][sourceX],
            dy = touches[0][sourceY] - touches[1][sourceY],
            angle = 180 * Math.atan(dy / dx) / Math.PI;

        if (isNumber(prevAngle)) {
            var dr = angle - prevAngle,
                drClamped = dr % 360;

            if (drClamped > 315) {
                angle -= 360 + (angle / 360)|0 * 360;
            }
            else if (drClamped > 135) {
                angle -= 180 + (angle / 360)|0 * 360;
            }
            else if (drClamped < -315) {
                angle += 360 + (angle / 360)|0 * 360;
            }
            else if (drClamped < -135) {
                angle += 180 + (angle / 360)|0 * 360;
            }
        }

        return  angle;
    }

    function getOriginXY (interactable, element) {
        var origin = interactable
                ? interactable.options.origin
                : defaultOptions.origin;

        if (origin === 'parent') {
            origin = parentElement(element);
        }
        else if (origin === 'self') {
            origin = interactable.getRect(element);
        }
        else if (trySelector(origin)) {
            origin = closest(element, origin) || { x: 0, y: 0 };
        }

        if (isFunction(origin)) {
            origin = origin(interactable && element);
        }

        if (isElement(origin))  {
            origin = getElementRect(origin);
        }

        origin.x = ('x' in origin)? origin.x : origin.left;
        origin.y = ('y' in origin)? origin.y : origin.top;

        return origin;
    }

    // http://stackoverflow.com/a/5634528/2280888
    function _getQBezierValue(t, p1, p2, p3) {
        var iT = 1 - t;
        return iT * iT * p1 + 2 * iT * t * p2 + t * t * p3;
    }

    function getQuadraticCurvePoint(startX, startY, cpX, cpY, endX, endY, position) {
        return {
            x:  _getQBezierValue(position, startX, cpX, endX),
            y:  _getQBezierValue(position, startY, cpY, endY)
        };
    }

    // http://gizma.com/easing/
    function easeOutQuad (t, b, c, d) {
        t /= d;
        return -c * t*(t-2) + b;
    }

    function nodeContains (parent, child) {
        while (child) {
            if (child === parent) {
                return true;
            }

            child = child.parentNode;
        }

        return false;
    }

    function closest (child, selector) {
        var parent = parentElement(child);

        while (isElement(parent)) {
            if (matchesSelector(parent, selector)) { return parent; }

            parent = parentElement(parent);
        }

        return null;
    }

    function parentElement (node) {
        var parent = node.parentNode;

        if (isDocFrag(parent)) {
            // skip past #shado-root fragments
            while ((parent = parent.host) && isDocFrag(parent)) {}

            return parent;
        }

        return parent;
    }

    function inContext (interactable, element) {
        return interactable._context === element.ownerDocument
                || nodeContains(interactable._context, element);
    }

    function testIgnore (interactable, interactableElement, element) {
        var ignoreFrom = interactable.options.ignoreFrom;

        if (!ignoreFrom || !isElement(element)) { return false; }

        if (isString(ignoreFrom)) {
            return matchesUpTo(element, ignoreFrom, interactableElement);
        }
        else if (isElement(ignoreFrom)) {
            return nodeContains(ignoreFrom, element);
        }

        return false;
    }

    function testAllow (interactable, interactableElement, element) {
        var allowFrom = interactable.options.allowFrom;

        if (!allowFrom) { return true; }

        if (!isElement(element)) { return false; }

        if (isString(allowFrom)) {
            return matchesUpTo(element, allowFrom, interactableElement);
        }
        else if (isElement(allowFrom)) {
            return nodeContains(allowFrom, element);
        }

        return false;
    }

    function checkAxis (axis, interactable) {
        if (!interactable) { return false; }

        var thisAxis = interactable.options.drag.axis;

        return (axis === 'xy' || thisAxis === 'xy' || thisAxis === axis);
    }

    function checkSnap (interactable, action) {
        var options = interactable.options;

        if (/^resize/.test(action)) {
            action = 'resize';
        }

        return options[action].snap && options[action].snap.enabled;
    }

    function checkRestrict (interactable, action) {
        var options = interactable.options;

        if (/^resize/.test(action)) {
            action = 'resize';
        }

        return  options[action].restrict && options[action].restrict.enabled;
    }

    function checkAutoScroll (interactable, action) {
        var options = interactable.options;

        if (/^resize/.test(action)) {
            action = 'resize';
        }

        return  options[action].autoScroll && options[action].autoScroll.enabled;
    }

    function withinInteractionLimit (interactable, element, action) {
        var options = interactable.options,
            maxActions = options[action.name].max,
            maxPerElement = options[action.name].maxPerElement,
            activeInteractions = 0,
            targetCount = 0,
            targetElementCount = 0;

        for (var i = 0, len = interactions.length; i < len; i++) {
            var interaction = interactions[i],
                otherAction = interaction.prepared.name,
                active = interaction.interacting();

            if (!active) { continue; }

            activeInteractions++;

            if (activeInteractions >= maxInteractions) {
                return false;
            }

            if (interaction.target !== interactable) { continue; }

            targetCount += (otherAction === action.name)|0;

            if (targetCount >= maxActions) {
                return false;
            }

            if (interaction.element === element) {
                targetElementCount++;

                if (otherAction !== action.name || targetElementCount >= maxPerElement) {
                    return false;
                }
            }
        }

        return maxInteractions > 0;
    }

    // Test for the element that's "above" all other qualifiers
    function indexOfDeepestElement (elements) {
        var dropzone,
            deepestZone = elements[0],
            index = deepestZone? 0: -1,
            parent,
            deepestZoneParents = [],
            dropzoneParents = [],
            child,
            i,
            n;

        for (i = 1; i < elements.length; i++) {
            dropzone = elements[i];

            // an element might belong to multiple selector dropzones
            if (!dropzone || dropzone === deepestZone) {
                continue;
            }

            if (!deepestZone) {
                deepestZone = dropzone;
                index = i;
                continue;
            }

            // check if the deepest or current are document.documentElement or document.rootElement
            // - if the current dropzone is, do nothing and continue
            if (dropzone.parentNode === dropzone.ownerDocument) {
                continue;
            }
            // - if deepest is, update with the current dropzone and continue to next
            else if (deepestZone.parentNode === dropzone.ownerDocument) {
                deepestZone = dropzone;
                index = i;
                continue;
            }

            if (!deepestZoneParents.length) {
                parent = deepestZone;
                while (parent.parentNode && parent.parentNode !== parent.ownerDocument) {
                    deepestZoneParents.unshift(parent);
                    parent = parent.parentNode;
                }
            }

            // if this element is an svg element and the current deepest is
            // an HTMLElement
            if (deepestZone instanceof HTMLElement
                && dropzone instanceof SVGElement
                && !(dropzone instanceof SVGSVGElement)) {

                if (dropzone === deepestZone.parentNode) {
                    continue;
                }

                parent = dropzone.ownerSVGElement;
            }
            else {
                parent = dropzone;
            }

            dropzoneParents = [];

            while (parent.parentNode !== parent.ownerDocument) {
                dropzoneParents.unshift(parent);
                parent = parent.parentNode;
            }

            n = 0;

            // get (position of last common ancestor) + 1
            while (dropzoneParents[n] && dropzoneParents[n] === deepestZoneParents[n]) {
                n++;
            }

            var parents = [
                dropzoneParents[n - 1],
                dropzoneParents[n],
                deepestZoneParents[n]
            ];

            child = parents[0].lastChild;

            while (child) {
                if (child === parents[1]) {
                    deepestZone = dropzone;
                    index = i;
                    deepestZoneParents = [];

                    break;
                }
                else if (child === parents[2]) {
                    break;
                }

                child = child.previousSibling;
            }
        }

        return index;
    }

    function Interaction () {
        this.target          = null; // current interactable being interacted with
        this.element         = null; // the target element of the interactable
        this.dropTarget      = null; // the dropzone a drag target might be dropped into
        this.dropElement     = null; // the element at the time of checking
        this.prevDropTarget  = null; // the dropzone that was recently dragged away from
        this.prevDropElement = null; // the element at the time of checking

        this.prepared        = {     // action that's ready to be fired on next move event
            name : null,
            axis : null,
            edges: null
        };

        this.matches         = [];   // all selectors that are matched by target element
        this.matchElements   = [];   // corresponding elements

        this.inertiaStatus = {
            active       : false,
            smoothEnd    : false,
            ending       : false,

            startEvent: null,
            upCoords: {},

            xe: 0, ye: 0,
            sx: 0, sy: 0,

            t0: 0,
            vx0: 0, vys: 0,
            duration: 0,

            resumeDx: 0,
            resumeDy: 0,

            lambda_v0: 0,
            one_ve_v0: 0,
            i  : null
        };

        if (isFunction(Function.prototype.bind)) {
            this.boundInertiaFrame = this.inertiaFrame.bind(this);
            this.boundSmoothEndFrame = this.smoothEndFrame.bind(this);
        }
        else {
            var that = this;

            this.boundInertiaFrame = function () { return that.inertiaFrame(); };
            this.boundSmoothEndFrame = function () { return that.smoothEndFrame(); };
        }

        this.activeDrops = {
            dropzones: [],      // the dropzones that are mentioned below
            elements : [],      // elements of dropzones that accept the target draggable
            rects    : []       // the rects of the elements mentioned above
        };

        // keep track of added pointers
        this.pointers    = [];
        this.pointerIds  = [];
        this.downTargets = [];
        this.downTimes   = [];
        this.holdTimers  = [];

        // Previous native pointer move event coordinates
        this.prevCoords = {
            page     : { x: 0, y: 0 },
            client   : { x: 0, y: 0 },
            timeStamp: 0
        };
        // current native pointer move event coordinates
        this.curCoords = {
            page     : { x: 0, y: 0 },
            client   : { x: 0, y: 0 },
            timeStamp: 0
        };

        // Starting InteractEvent pointer coordinates
        this.startCoords = {
            page     : { x: 0, y: 0 },
            client   : { x: 0, y: 0 },
            timeStamp: 0
        };

        // Change in coordinates and time of the pointer
        this.pointerDelta = {
            page     : { x: 0, y: 0, vx: 0, vy: 0, speed: 0 },
            client   : { x: 0, y: 0, vx: 0, vy: 0, speed: 0 },
            timeStamp: 0
        };

        this.downEvent   = null;    // pointerdown/mousedown/touchstart event
        this.downPointer = {};

        this._eventTarget    = null;
        this._curEventTarget = null;

        this.prevEvent = null;      // previous action event
        this.tapTime   = 0;         // time of the most recent tap event
        this.prevTap   = null;

        this.startOffset    = { left: 0, right: 0, top: 0, bottom: 0 };
        this.restrictOffset = { left: 0, right: 0, top: 0, bottom: 0 };
        this.snapOffsets    = [];

        this.gesture = {
            start: { x: 0, y: 0 },

            startDistance: 0,   // distance between two touches of touchStart
            prevDistance : 0,
            distance     : 0,

            scale: 1,           // gesture.distance / gesture.startDistance

            startAngle: 0,      // angle of line joining two touches
            prevAngle : 0       // angle of the previous gesture event
        };

        this.snapStatus = {
            x       : 0, y       : 0,
            dx      : 0, dy      : 0,
            realX   : 0, realY   : 0,
            snappedX: 0, snappedY: 0,
            targets : [],
            locked  : false,
            changed : false
        };

        this.restrictStatus = {
            dx         : 0, dy         : 0,
            restrictedX: 0, restrictedY: 0,
            snap       : null,
            restricted : false,
            changed    : false
        };

        this.restrictStatus.snap = this.snapStatus;

        this.pointerIsDown   = false;
        this.pointerWasMoved = false;
        this.gesturing       = false;
        this.dragging        = false;
        this.resizing        = false;
        this.resizeAxes      = 'xy';

        this.mouse = false;

        interactions.push(this);
    }

    Interaction.prototype = {
        getPageXY  : function (pointer, xy) { return   getPageXY(pointer, xy, this); },
        getClientXY: function (pointer, xy) { return getClientXY(pointer, xy, this); },
        setEventXY : function (target, ptr) { return  setEventXY(target, ptr, this); },

        pointerOver: function (pointer, event, eventTarget) {
            if (this.prepared.name || !this.mouse) { return; }

            var curMatches = [],
                curMatchElements = [],
                prevTargetElement = this.element;

            this.addPointer(pointer);

            if (this.target
                && (testIgnore(this.target, this.element, eventTarget)
                    || !testAllow(this.target, this.element, eventTarget))) {
                // if the eventTarget should be ignored or shouldn't be allowed
                // clear the previous target
                this.target = null;
                this.element = null;
                this.matches = [];
                this.matchElements = [];
            }

            var elementInteractable = interactables.get(eventTarget),
                elementAction = (elementInteractable
                                 && !testIgnore(elementInteractable, eventTarget, eventTarget)
                                 && testAllow(elementInteractable, eventTarget, eventTarget)
                                 && validateAction(
                                     elementInteractable.getAction(pointer, event, this, eventTarget),
                                     elementInteractable));

            if (elementAction && !withinInteractionLimit(elementInteractable, eventTarget, elementAction)) {
                 elementAction = null;
            }

            function pushCurMatches (interactable, selector) {
                if (interactable
                    && inContext(interactable, eventTarget)
                    && !testIgnore(interactable, eventTarget, eventTarget)
                    && testAllow(interactable, eventTarget, eventTarget)
                    && matchesSelector(eventTarget, selector)) {

                    curMatches.push(interactable);
                    curMatchElements.push(eventTarget);
                }
            }

            if (elementAction) {
                this.target = elementInteractable;
                this.element = eventTarget;
                this.matches = [];
                this.matchElements = [];
            }
            else {
                interactables.forEachSelector(pushCurMatches);

                if (this.validateSelector(pointer, event, curMatches, curMatchElements)) {
                    this.matches = curMatches;
                    this.matchElements = curMatchElements;

                    this.pointerHover(pointer, event, this.matches, this.matchElements);
                    events.add(eventTarget,
                                        supportsPointerEvent? pEventTypes.move : 'mousemove',
                                        listeners.pointerHover);
                }
                else if (this.target) {
                    if (nodeContains(prevTargetElement, eventTarget)) {
                        this.pointerHover(pointer, event, this.matches, this.matchElements);
                        events.add(this.element,
                                            supportsPointerEvent? pEventTypes.move : 'mousemove',
                                            listeners.pointerHover);
                    }
                    else {
                        this.target = null;
                        this.element = null;
                        this.matches = [];
                        this.matchElements = [];
                    }
                }
            }
        },

        // Check what action would be performed on pointerMove target if a mouse
        // button were pressed and change the cursor accordingly
        pointerHover: function (pointer, event, eventTarget, curEventTarget, matches, matchElements) {
            var target = this.target;

            if (!this.prepared.name && this.mouse) {

                var action;

                // update pointer coords for defaultActionChecker to use
                this.setEventXY(this.curCoords, [pointer]);

                if (matches) {
                    action = this.validateSelector(pointer, event, matches, matchElements);
                }
                else if (target) {
                    action = validateAction(target.getAction(this.pointers[0], event, this, this.element), this.target);
                }

                if (target && target.options.styleCursor) {
                    if (action) {
                        target._doc.documentElement.style.cursor = getActionCursor(action);
                    }
                    else {
                        target._doc.documentElement.style.cursor = '';
                    }
                }
            }
            else if (this.prepared.name) {
                this.checkAndPreventDefault(event, target, this.element);
            }
        },

        pointerOut: function (pointer, event, eventTarget) {
            if (this.prepared.name) { return; }

            // Remove temporary event listeners for selector Interactables
            if (!interactables.get(eventTarget)) {
                events.remove(eventTarget,
                                       supportsPointerEvent? pEventTypes.move : 'mousemove',
                                       listeners.pointerHover);
            }

            if (this.target && this.target.options.styleCursor && !this.interacting()) {
                this.target._doc.documentElement.style.cursor = '';
            }
        },

        selectorDown: function (pointer, event, eventTarget, curEventTarget) {
            var that = this,
                // copy event to be used in timeout for IE8
                eventCopy = events.useAttachEvent? extend({}, event) : event,
                element = eventTarget,
                pointerIndex = this.addPointer(pointer),
                action;

            this.holdTimers[pointerIndex] = setTimeout(function () {
                that.pointerHold(events.useAttachEvent? eventCopy : pointer, eventCopy, eventTarget, curEventTarget);
            }, defaultOptions._holdDuration);

            this.pointerIsDown = true;

            // Check if the down event hits the current inertia target
            if (this.inertiaStatus.active && this.target.selector) {
                // climb up the DOM tree from the event target
                while (isElement(element)) {

                    // if this element is the current inertia target element
                    if (element === this.element
                        // and the prospective action is the same as the ongoing one
                        && validateAction(this.target.getAction(pointer, event, this, this.element), this.target).name === this.prepared.name) {

                        // stop inertia so that the next move will be a normal one
                        cancelFrame(this.inertiaStatus.i);
                        this.inertiaStatus.active = false;

                        this.collectEventTargets(pointer, event, eventTarget, 'down');
                        return;
                    }
                    element = parentElement(element);
                }
            }

            // do nothing if interacting
            if (this.interacting()) {
                this.collectEventTargets(pointer, event, eventTarget, 'down');
                return;
            }

            function pushMatches (interactable, selector, context) {
                var elements = ie8MatchesSelector
                    ? context.querySelectorAll(selector)
                    : undefined;

                if (inContext(interactable, element)
                    && !testIgnore(interactable, element, eventTarget)
                    && testAllow(interactable, element, eventTarget)
                    && matchesSelector(element, selector, elements)) {

                    that.matches.push(interactable);
                    that.matchElements.push(element);
                }
            }

            // update pointer coords for defaultActionChecker to use
            this.setEventXY(this.curCoords, [pointer]);
            this.downEvent = event;

            while (isElement(element) && !action) {
                this.matches = [];
                this.matchElements = [];

                interactables.forEachSelector(pushMatches);

                action = this.validateSelector(pointer, event, this.matches, this.matchElements);
                element = parentElement(element);
            }

            if (action) {
                this.prepared.name  = action.name;
                this.prepared.axis  = action.axis;
                this.prepared.edges = action.edges;

                this.collectEventTargets(pointer, event, eventTarget, 'down');

                return this.pointerDown(pointer, event, eventTarget, curEventTarget, action);
            }
            else {
                // do these now since pointerDown isn't being called from here
                this.downTimes[pointerIndex] = new Date().getTime();
                this.downTargets[pointerIndex] = eventTarget;
                pointerExtend(this.downPointer, pointer);

                copyCoords(this.prevCoords, this.curCoords);
                this.pointerWasMoved = false;
            }

            this.collectEventTargets(pointer, event, eventTarget, 'down');
        },

        // Determine action to be performed on next pointerMove and add appropriate
        // style and event Listeners
        pointerDown: function (pointer, event, eventTarget, curEventTarget, forceAction) {
            if (!forceAction && !this.inertiaStatus.active && this.pointerWasMoved && this.prepared.name) {
                this.checkAndPreventDefault(event, this.target, this.element);

                return;
            }

            this.pointerIsDown = true;
            this.downEvent = event;

            var pointerIndex = this.addPointer(pointer),
                action;

            // If it is the second touch of a multi-touch gesture, keep the
            // target the same and get a new action if a target was set by the
            // first touch
            if (this.pointerIds.length > 1 && this.target._element === this.element) {
                var newAction = validateAction(forceAction || this.target.getAction(pointer, event, this, this.element), this.target);

                if (withinInteractionLimit(this.target, this.element, newAction)) {
                    action = newAction;
                }

                this.prepared.name = null;
            }
            // Otherwise, set the target if there is no action prepared
            else if (!this.prepared.name) {
                var interactable = interactables.get(curEventTarget);

                if (interactable
                    && !testIgnore(interactable, curEventTarget, eventTarget)
                    && testAllow(interactable, curEventTarget, eventTarget)
                    && (action = validateAction(forceAction || interactable.getAction(pointer, event, this, curEventTarget), interactable, eventTarget))
                    && withinInteractionLimit(interactable, curEventTarget, action)) {
                    this.target = interactable;
                    this.element = curEventTarget;
                }
            }

            var target = this.target,
                options = target && target.options;

            if (target && (forceAction || !this.prepared.name)) {
                action = action || validateAction(forceAction || target.getAction(pointer, event, this, curEventTarget), target, this.element);

                this.setEventXY(this.startCoords, this.pointers);

                if (!action) { return; }

                if (options.styleCursor) {
                    target._doc.documentElement.style.cursor = getActionCursor(action);
                }

                this.resizeAxes = action.name === 'resize'? action.axis : null;

                if (action === 'gesture' && this.pointerIds.length < 2) {
                    action = null;
                }

                this.prepared.name  = action.name;
                this.prepared.axis  = action.axis;
                this.prepared.edges = action.edges;

                this.snapStatus.snappedX = this.snapStatus.snappedY =
                    this.restrictStatus.restrictedX = this.restrictStatus.restrictedY = NaN;

                this.downTimes[pointerIndex] = new Date().getTime();
                this.downTargets[pointerIndex] = eventTarget;
                pointerExtend(this.downPointer, pointer);

                copyCoords(this.prevCoords, this.startCoords);
                this.pointerWasMoved = false;

                this.checkAndPreventDefault(event, target, this.element);
            }
            // if inertia is active try to resume action
            else if (this.inertiaStatus.active
                && curEventTarget === this.element
                && validateAction(target.getAction(pointer, event, this, this.element), target).name === this.prepared.name) {

                cancelFrame(this.inertiaStatus.i);
                this.inertiaStatus.active = false;

                this.checkAndPreventDefault(event, target, this.element);
            }
        },

        setModifications: function (coords, preEnd) {
            var target         = this.target,
                shouldMove     = true,
                shouldSnap     = checkSnap(target, this.prepared.name)     && (!target.options[this.prepared.name].snap.endOnly     || preEnd),
                shouldRestrict = checkRestrict(target, this.prepared.name) && (!target.options[this.prepared.name].restrict.endOnly || preEnd);

            if (shouldSnap    ) { this.setSnapping   (coords); } else { this.snapStatus    .locked     = false; }
            if (shouldRestrict) { this.setRestriction(coords); } else { this.restrictStatus.restricted = false; }

            if (shouldSnap && this.snapStatus.locked && !this.snapStatus.changed) {
                shouldMove = shouldRestrict && this.restrictStatus.restricted && this.restrictStatus.changed;
            }
            else if (shouldRestrict && this.restrictStatus.restricted && !this.restrictStatus.changed) {
                shouldMove = false;
            }

            return shouldMove;
        },

        setStartOffsets: function (action, interactable, element) {
            var rect = interactable.getRect(element),
                origin = getOriginXY(interactable, element),
                snap = interactable.options[this.prepared.name].snap,
                restrict = interactable.options[this.prepared.name].restrict,
                width, height;

            if (rect) {
                this.startOffset.left = this.startCoords.page.x - rect.left;
                this.startOffset.top  = this.startCoords.page.y - rect.top;

                this.startOffset.right  = rect.right  - this.startCoords.page.x;
                this.startOffset.bottom = rect.bottom - this.startCoords.page.y;

                if ('width' in rect) { width = rect.width; }
                else { width = rect.right - rect.left; }
                if ('height' in rect) { height = rect.height; }
                else { height = rect.bottom - rect.top; }
            }
            else {
                this.startOffset.left = this.startOffset.top = this.startOffset.right = this.startOffset.bottom = 0;
            }

            this.snapOffsets.splice(0);

            var snapOffset = snap && snap.offset === 'startCoords'
                                ? {
                                    x: this.startCoords.page.x - origin.x,
                                    y: this.startCoords.page.y - origin.y
                                }
                                : snap && snap.offset || { x: 0, y: 0 };

            if (rect && snap && snap.relativePoints && snap.relativePoints.length) {
                for (var i = 0; i < snap.relativePoints.length; i++) {
                    this.snapOffsets.push({
                        x: this.startOffset.left - (width  * snap.relativePoints[i].x) + snapOffset.x,
                        y: this.startOffset.top  - (height * snap.relativePoints[i].y) + snapOffset.y
                    });
                }
            }
            else {
                this.snapOffsets.push(snapOffset);
            }

            if (rect && restrict.elementRect) {
                this.restrictOffset.left = this.startOffset.left - (width  * restrict.elementRect.left);
                this.restrictOffset.top  = this.startOffset.top  - (height * restrict.elementRect.top);

                this.restrictOffset.right  = this.startOffset.right  - (width  * (1 - restrict.elementRect.right));
                this.restrictOffset.bottom = this.startOffset.bottom - (height * (1 - restrict.elementRect.bottom));
            }
            else {
                this.restrictOffset.left = this.restrictOffset.top = this.restrictOffset.right = this.restrictOffset.bottom = 0;
            }
        },

        /*\
         * Interaction.start
         [ method ]
         *
         * Start an action with the given Interactable and Element as tartgets. The
         * action must be enabled for the target Interactable and an appropriate number
         * of pointers must be held down – 1 for drag/resize, 2 for gesture.
         *
         * Use it with `interactable.<action>able({ manualStart: false })` to always
         * [start actions manually](https://github.com/taye/interact.js/issues/114)
         *
         - action       (object)  The action to be performed - drag, resize, etc.
         - interactable (Interactable) The Interactable to target
         - element      (Element) The DOM Element to target
         = (object) interact
         **
         | interact(target)
         |   .draggable({
         |     // disable the default drag start by down->move
         |     manualStart: true
         |   })
         |   // start dragging after the user holds the pointer down
         |   .on('hold', function (event) {
         |     var interaction = event.interaction;
         |
         |     if (!interaction.interacting()) {
         |       interaction.start({ name: 'drag' },
         |                         event.interactable,
         |                         event.currentTarget);
         |     }
         | });
        \*/
        start: function (action, interactable, element) {
            if (this.interacting()
                || !this.pointerIsDown
                || this.pointerIds.length < (action.name === 'gesture'? 2 : 1)) {
                return;
            }

            // if this interaction had been removed after stopping
            // add it back
            if (indexOf(interactions, this) === -1) {
                interactions.push(this);
            }

            // set the startCoords if there was no prepared action
            if (!this.prepared.name) {
                this.setEventXY(this.startCoords, this.pointers);
            }

            this.prepared.name  = action.name;
            this.prepared.axis  = action.axis;
            this.prepared.edges = action.edges;
            this.target         = interactable;
            this.element        = element;

            this.setStartOffsets(action.name, interactable, element);
            this.setModifications(this.startCoords.page);

            this.prevEvent = this[this.prepared.name + 'Start'](this.downEvent);
        },

        pointerMove: function (pointer, event, eventTarget, curEventTarget, preEnd) {
            if (this.inertiaStatus.active) {
                var pageUp   = this.inertiaStatus.upCoords.page;
                var clientUp = this.inertiaStatus.upCoords.client;

                var inertiaPosition = {
                    pageX  : pageUp.x   + this.inertiaStatus.sx,
                    pageY  : pageUp.y   + this.inertiaStatus.sy,
                    clientX: clientUp.x + this.inertiaStatus.sx,
                    clientY: clientUp.y + this.inertiaStatus.sy
                };

                this.setEventXY(this.curCoords, [inertiaPosition]);
            }
            else {
                this.recordPointer(pointer);
                this.setEventXY(this.curCoords, this.pointers);
            }

            var duplicateMove = (this.curCoords.page.x === this.prevCoords.page.x
                                 && this.curCoords.page.y === this.prevCoords.page.y
                                 && this.curCoords.client.x === this.prevCoords.client.x
                                 && this.curCoords.client.y === this.prevCoords.client.y);

            var dx, dy,
                pointerIndex = this.mouse? 0 : indexOf(this.pointerIds, getPointerId(pointer));

            // register movement greater than pointerMoveTolerance
            if (this.pointerIsDown && !this.pointerWasMoved) {
                dx = this.curCoords.client.x - this.startCoords.client.x;
                dy = this.curCoords.client.y - this.startCoords.client.y;

                this.pointerWasMoved = hypot(dx, dy) > pointerMoveTolerance;
            }

            if (!duplicateMove && (!this.pointerIsDown || this.pointerWasMoved)) {
                if (this.pointerIsDown) {
                    clearTimeout(this.holdTimers[pointerIndex]);
                }

                this.collectEventTargets(pointer, event, eventTarget, 'move');
            }

            if (!this.pointerIsDown) { return; }

            if (duplicateMove && this.pointerWasMoved && !preEnd) {
                this.checkAndPreventDefault(event, this.target, this.element);
                return;
            }

            // set pointer coordinate, time changes and speeds
            setEventDeltas(this.pointerDelta, this.prevCoords, this.curCoords);

            if (!this.prepared.name) { return; }

            if (this.pointerWasMoved
                // ignore movement while inertia is active
                && (!this.inertiaStatus.active || (pointer instanceof InteractEvent && /inertiastart/.test(pointer.type)))) {

                // if just starting an action, calculate the pointer speed now
                if (!this.interacting()) {
                    setEventDeltas(this.pointerDelta, this.prevCoords, this.curCoords);

                    // check if a drag is in the correct axis
                    if (this.prepared.name === 'drag') {
                        var absX = Math.abs(dx),
                            absY = Math.abs(dy),
                            targetAxis = this.target.options.drag.axis,
                            axis = (absX > absY ? 'x' : absX < absY ? 'y' : 'xy');

                        // if the movement isn't in the axis of the interactable
                        if (axis !== 'xy' && targetAxis !== 'xy' && targetAxis !== axis) {
                            // cancel the prepared action
                            this.prepared.name = null;

                            // then try to get a drag from another ineractable

                            var element = eventTarget;

                            // check element interactables
                            while (isElement(element)) {
                                var elementInteractable = interactables.get(element);

                                if (elementInteractable
                                    && elementInteractable !== this.target
                                    && !elementInteractable.options.drag.manualStart
                                    && elementInteractable.getAction(this.downPointer, this.downEvent, this, element).name === 'drag'
                                    && checkAxis(axis, elementInteractable)) {

                                    this.prepared.name = 'drag';
                                    this.target = elementInteractable;
                                    this.element = element;
                                    break;
                                }

                                element = parentElement(element);
                            }

                            // if there's no drag from element interactables,
                            // check the selector interactables
                            if (!this.prepared.name) {
                                var thisInteraction = this;

                                var getDraggable = function (interactable, selector, context) {
                                    var elements = ie8MatchesSelector
                                        ? context.querySelectorAll(selector)
                                        : undefined;

                                    if (interactable === thisInteraction.target) { return; }

                                    if (inContext(interactable, eventTarget)
                                        && !interactable.options.drag.manualStart
                                        && !testIgnore(interactable, element, eventTarget)
                                        && testAllow(interactable, element, eventTarget)
                                        && matchesSelector(element, selector, elements)
                                        && interactable.getAction(thisInteraction.downPointer, thisInteraction.downEvent, thisInteraction, element).name === 'drag'
                                        && checkAxis(axis, interactable)
                                        && withinInteractionLimit(interactable, element, 'drag')) {

                                        return interactable;
                                    }
                                };

                                element = eventTarget;

                                while (isElement(element)) {
                                    var selectorInteractable = interactables.forEachSelector(getDraggable);

                                    if (selectorInteractable) {
                                        this.prepared.name = 'drag';
                                        this.target = selectorInteractable;
                                        this.element = element;
                                        break;
                                    }

                                    element = parentElement(element);
                                }
                            }
                        }
                    }
                }

                var starting = !!this.prepared.name && !this.interacting();

                if (starting
                    && (this.target.options[this.prepared.name].manualStart
                        || !withinInteractionLimit(this.target, this.element, this.prepared))) {
                    this.stop(event);
                    return;
                }

                if (this.prepared.name && this.target) {
                    if (starting) {
                        this.start(this.prepared, this.target, this.element);
                    }

                    var shouldMove = this.setModifications(this.curCoords.page, preEnd);

                    // move if snapping or restriction doesn't prevent it
                    if (shouldMove || starting) {
                        this.prevEvent = this[this.prepared.name + 'Move'](event);
                    }

                    this.checkAndPreventDefault(event, this.target, this.element);
                }
            }

            copyCoords(this.prevCoords, this.curCoords);

            if (this.dragging || this.resizing) {
                this.autoScrollMove(pointer);
            }
        },

        dragStart: function (event) {
            var dragEvent = new InteractEvent(this, event, 'drag', 'start', this.element);

            this.dragging = true;
            this.target.fire(dragEvent);

            // reset active dropzones
            this.activeDrops.dropzones = [];
            this.activeDrops.elements  = [];
            this.activeDrops.rects     = [];

            if (!this.dynamicDrop) {
                this.setActiveDrops(this.element);
            }

            var dropEvents = this.getDropEvents(event, dragEvent);

            if (dropEvents.activate) {
                this.fireActiveDrops(dropEvents.activate);
            }

            return dragEvent;
        },

        dragMove: function (event) {
            var target = this.target,
                dragEvent  = new InteractEvent(this, event, 'drag', 'move', this.element),
                draggableElement = this.element,
                drop = this.getDrop(dragEvent, event, draggableElement);

            this.dropTarget = drop.dropzone;
            this.dropElement = drop.element;

            var dropEvents = this.getDropEvents(event, dragEvent);

            target.fire(dragEvent);

            if (dropEvents.leave) { this.prevDropTarget.fire(dropEvents.leave); }
            if (dropEvents.enter) {     this.dropTarget.fire(dropEvents.enter); }
            if (dropEvents.move ) {     this.dropTarget.fire(dropEvents.move ); }

            this.prevDropTarget  = this.dropTarget;
            this.prevDropElement = this.dropElement;

            return dragEvent;
        },

        resizeStart: function (event) {
            var resizeEvent = new InteractEvent(this, event, 'resize', 'start', this.element);

            if (this.prepared.edges) {
                var startRect = this.target.getRect(this.element);

                /*
                 * When using the `resizable.square` or `resizable.preserveAspectRatio` options, resizing from one edge
                 * will affect another. E.g. with `resizable.square`, resizing to make the right edge larger will make
                 * the bottom edge larger by the same amount. We call these 'linked' edges. Any linked edges will depend
                 * on the active edges and the edge being interacted with.
                 */
                if (this.target.options.resize.square || this.target.options.resize.preserveAspectRatio) {
                    var linkedEdges = extend({}, this.prepared.edges);

                    linkedEdges.top    = linkedEdges.top    || (linkedEdges.left   && !linkedEdges.bottom);
                    linkedEdges.left   = linkedEdges.left   || (linkedEdges.top    && !linkedEdges.right );
                    linkedEdges.bottom = linkedEdges.bottom || (linkedEdges.right  && !linkedEdges.top   );
                    linkedEdges.right  = linkedEdges.right  || (linkedEdges.bottom && !linkedEdges.left  );

                    this.prepared._linkedEdges = linkedEdges;
                }
                else {
                    this.prepared._linkedEdges = null;
                }

                // if using `resizable.preserveAspectRatio` option, record aspect ratio at the start of the resize
                if (this.target.options.resize.preserveAspectRatio) {
                    this.resizeStartAspectRatio = startRect.width / startRect.height;
                }

                this.resizeRects = {
                    start     : startRect,
                    current   : extend({}, startRect),
                    restricted: extend({}, startRect),
                    previous  : extend({}, startRect),
                    delta     : {
                        left: 0, right : 0, width : 0,
                        top : 0, bottom: 0, height: 0
                    }
                };

                resizeEvent.rect = this.resizeRects.restricted;
                resizeEvent.deltaRect = this.resizeRects.delta;
            }

            this.target.fire(resizeEvent);

            this.resizing = true;

            return resizeEvent;
        },

        resizeMove: function (event) {
            var resizeEvent = new InteractEvent(this, event, 'resize', 'move', this.element);

            var edges = this.prepared.edges,
                invert = this.target.options.resize.invert,
                invertible = invert === 'reposition' || invert === 'negate';

            if (edges) {
                var dx = resizeEvent.dx,
                    dy = resizeEvent.dy,

                    start      = this.resizeRects.start,
                    current    = this.resizeRects.current,
                    restricted = this.resizeRects.restricted,
                    delta      = this.resizeRects.delta,
                    previous   = extend(this.resizeRects.previous, restricted),

                    originalEdges = edges;

                // `resize.preserveAspectRatio` takes precedence over `resize.square`
                if (this.target.options.resize.preserveAspectRatio) {
                    var resizeStartAspectRatio = this.resizeStartAspectRatio;

                    edges = this.prepared._linkedEdges;

                    if ((originalEdges.left && originalEdges.bottom)
                        || (originalEdges.right && originalEdges.top)) {
                        dy = -dx / resizeStartAspectRatio;
                    }
                    else if (originalEdges.left || originalEdges.right) { dy = dx / resizeStartAspectRatio; }
                    else if (originalEdges.top || originalEdges.bottom) { dx = dy * resizeStartAspectRatio; }
                }
                else if (this.target.options.resize.square) {
                    edges = this.prepared._linkedEdges;

                    if ((originalEdges.left && originalEdges.bottom)
                        || (originalEdges.right && originalEdges.top)) {
                        dy = -dx;
                    }
                    else if (originalEdges.left || originalEdges.right) { dy = dx; }
                    else if (originalEdges.top || originalEdges.bottom) { dx = dy; }
                }

                // update the 'current' rect without modifications
                if (edges.top   ) { current.top    += dy; }
                if (edges.bottom) { current.bottom += dy; }
                if (edges.left  ) { current.left   += dx; }
                if (edges.right ) { current.right  += dx; }

                if (invertible) {
                    // if invertible, copy the current rect
                    extend(restricted, current);

                    if (invert === 'reposition') {
                        // swap edge values if necessary to keep width/height positive
                        var swap;

                        if (restricted.top > restricted.bottom) {
                            swap = restricted.top;

                            restricted.top = restricted.bottom;
                            restricted.bottom = swap;
                        }
                        if (restricted.left > restricted.right) {
                            swap = restricted.left;

                            restricted.left = restricted.right;
                            restricted.right = swap;
                        }
                    }
                }
                else {
                    // if not invertible, restrict to minimum of 0x0 rect
                    restricted.top    = Math.min(current.top, start.bottom);
                    restricted.bottom = Math.max(current.bottom, start.top);
                    restricted.left   = Math.min(current.left, start.right);
                    restricted.right  = Math.max(current.right, start.left);
                }

                restricted.width  = restricted.right  - restricted.left;
                restricted.height = restricted.bottom - restricted.top ;

                for (var edge in restricted) {
                    delta[edge] = restricted[edge] - previous[edge];
                }

                resizeEvent.edges = this.prepared.edges;
                resizeEvent.rect = restricted;
                resizeEvent.deltaRect = delta;
            }

            this.target.fire(resizeEvent);

            return resizeEvent;
        },

        gestureStart: function (event) {
            var gestureEvent = new InteractEvent(this, event, 'gesture', 'start', this.element);

            gestureEvent.ds = 0;

            this.gesture.startDistance = this.gesture.prevDistance = gestureEvent.distance;
            this.gesture.startAngle = this.gesture.prevAngle = gestureEvent.angle;
            this.gesture.scale = 1;

            this.gesturing = true;

            this.target.fire(gestureEvent);

            return gestureEvent;
        },

        gestureMove: function (event) {
            if (!this.pointerIds.length) {
                return this.prevEvent;
            }

            var gestureEvent;

            gestureEvent = new InteractEvent(this, event, 'gesture', 'move', this.element);
            gestureEvent.ds = gestureEvent.scale - this.gesture.scale;

            this.target.fire(gestureEvent);

            this.gesture.prevAngle = gestureEvent.angle;
            this.gesture.prevDistance = gestureEvent.distance;

            if (gestureEvent.scale !== Infinity &&
                gestureEvent.scale !== null &&
                gestureEvent.scale !== undefined  &&
                !isNaN(gestureEvent.scale)) {

                this.gesture.scale = gestureEvent.scale;
            }

            return gestureEvent;
        },

        pointerHold: function (pointer, event, eventTarget) {
            this.collectEventTargets(pointer, event, eventTarget, 'hold');
        },

        pointerUp: function (pointer, event, eventTarget, curEventTarget) {
            var pointerIndex = this.mouse? 0 : indexOf(this.pointerIds, getPointerId(pointer));

            clearTimeout(this.holdTimers[pointerIndex]);

            this.collectEventTargets(pointer, event, eventTarget, 'up' );
            this.collectEventTargets(pointer, event, eventTarget, 'tap');

            this.pointerEnd(pointer, event, eventTarget, curEventTarget);

            this.removePointer(pointer);
        },

        pointerCancel: function (pointer, event, eventTarget, curEventTarget) {
            var pointerIndex = this.mouse? 0 : indexOf(this.pointerIds, getPointerId(pointer));

            clearTimeout(this.holdTimers[pointerIndex]);

            this.collectEventTargets(pointer, event, eventTarget, 'cancel');
            this.pointerEnd(pointer, event, eventTarget, curEventTarget);

            this.removePointer(pointer);
        },

        // http://www.quirksmode.org/dom/events/click.html
        // >Events leading to dblclick
        //
        // IE8 doesn't fire down event before dblclick.
        // This workaround tries to fire a tap and doubletap after dblclick
        ie8Dblclick: function (pointer, event, eventTarget) {
            if (this.prevTap
                && event.clientX === this.prevTap.clientX
                && event.clientY === this.prevTap.clientY
                && eventTarget   === this.prevTap.target) {

                this.downTargets[0] = eventTarget;
                this.downTimes[0] = new Date().getTime();
                this.collectEventTargets(pointer, event, eventTarget, 'tap');
            }
        },

        // End interact move events and stop auto-scroll unless inertia is enabled
        pointerEnd: function (pointer, event, eventTarget, curEventTarget) {
            var endEvent,
                target = this.target,
                options = target && target.options,
                inertiaOptions = options && this.prepared.name && options[this.prepared.name].inertia,
                inertiaStatus = this.inertiaStatus;

            if (this.interacting()) {

                if (inertiaStatus.active && !inertiaStatus.ending) { return; }

                var pointerSpeed,
                    now = new Date().getTime(),
                    inertiaPossible = false,
                    inertia = false,
                    smoothEnd = false,
                    endSnap = checkSnap(target, this.prepared.name) && options[this.prepared.name].snap.endOnly,
                    endRestrict = checkRestrict(target, this.prepared.name) && options[this.prepared.name].restrict.endOnly,
                    dx = 0,
                    dy = 0,
                    startEvent;

                if (this.dragging) {
                    if      (options.drag.axis === 'x' ) { pointerSpeed = Math.abs(this.pointerDelta.client.vx); }
                    else if (options.drag.axis === 'y' ) { pointerSpeed = Math.abs(this.pointerDelta.client.vy); }
                    else   /*options.drag.axis === 'xy'*/{ pointerSpeed = this.pointerDelta.client.speed; }
                }
                else {
                    pointerSpeed = this.pointerDelta.client.speed;
                }

                // check if inertia should be started
                inertiaPossible = (inertiaOptions && inertiaOptions.enabled
                                   && this.prepared.name !== 'gesture'
                                   && event !== inertiaStatus.startEvent);

                inertia = (inertiaPossible
                           && (now - this.curCoords.timeStamp) < 50
                           && pointerSpeed > inertiaOptions.minSpeed
                           && pointerSpeed > inertiaOptions.endSpeed);

                if (inertiaPossible && !inertia && (endSnap || endRestrict)) {

                    var snapRestrict = {};

                    snapRestrict.snap = snapRestrict.restrict = snapRestrict;

                    if (endSnap) {
                        this.setSnapping(this.curCoords.page, snapRestrict);
                        if (snapRestrict.locked) {
                            dx += snapRestrict.dx;
                            dy += snapRestrict.dy;
                        }
                    }

                    if (endRestrict) {
                        this.setRestriction(this.curCoords.page, snapRestrict);
                        if (snapRestrict.restricted) {
                            dx += snapRestrict.dx;
                            dy += snapRestrict.dy;
                        }
                    }

                    if (dx || dy) {
                        smoothEnd = true;
                    }
                }

                if (inertia || smoothEnd) {
                    copyCoords(inertiaStatus.upCoords, this.curCoords);

                    this.pointers[0] = inertiaStatus.startEvent = startEvent =
                        new InteractEvent(this, event, this.prepared.name, 'inertiastart', this.element);

                    inertiaStatus.t0 = now;

                    target.fire(inertiaStatus.startEvent);

                    if (inertia) {
                        inertiaStatus.vx0 = this.pointerDelta.client.vx;
                        inertiaStatus.vy0 = this.pointerDelta.client.vy;
                        inertiaStatus.v0 = pointerSpeed;

                        this.calcInertia(inertiaStatus);

                        var page = extend({}, this.curCoords.page),
                            origin = getOriginXY(target, this.element),
                            statusObject;

                        page.x = page.x + inertiaStatus.xe - origin.x;
                        page.y = page.y + inertiaStatus.ye - origin.y;

                        statusObject = {
                            useStatusXY: true,
                            x: page.x,
                            y: page.y,
                            dx: 0,
                            dy: 0,
                            snap: null
                        };

                        statusObject.snap = statusObject;

                        dx = dy = 0;

                        if (endSnap) {
                            var snap = this.setSnapping(this.curCoords.page, statusObject);

                            if (snap.locked) {
                                dx += snap.dx;
                                dy += snap.dy;
                            }
                        }

                        if (endRestrict) {
                            var restrict = this.setRestriction(this.curCoords.page, statusObject);

                            if (restrict.restricted) {
                                dx += restrict.dx;
                                dy += restrict.dy;
                            }
                        }

                        inertiaStatus.modifiedXe += dx;
                        inertiaStatus.modifiedYe += dy;

                        inertiaStatus.i = reqFrame(this.boundInertiaFrame);
                    }
                    else {
                        inertiaStatus.smoothEnd = true;
                        inertiaStatus.xe = dx;
                        inertiaStatus.ye = dy;

                        inertiaStatus.sx = inertiaStatus.sy = 0;

                        inertiaStatus.i = reqFrame(this.boundSmoothEndFrame);
                    }

                    inertiaStatus.active = true;
                    return;
                }

                if (endSnap || endRestrict) {
                    // fire a move event at the snapped coordinates
                    this.pointerMove(pointer, event, eventTarget, curEventTarget, true);
                }
            }

            if (this.dragging) {
                endEvent = new InteractEvent(this, event, 'drag', 'end', this.element);

                var draggableElement = this.element,
                    drop = this.getDrop(endEvent, event, draggableElement);

                this.dropTarget = drop.dropzone;
                this.dropElement = drop.element;

                var dropEvents = this.getDropEvents(event, endEvent);

                if (dropEvents.leave) { this.prevDropTarget.fire(dropEvents.leave); }
                if (dropEvents.enter) {     this.dropTarget.fire(dropEvents.enter); }
                if (dropEvents.drop ) {     this.dropTarget.fire(dropEvents.drop ); }
                if (dropEvents.deactivate) {
                    this.fireActiveDrops(dropEvents.deactivate);
                }

                target.fire(endEvent);
            }
            else if (this.resizing) {
                endEvent = new InteractEvent(this, event, 'resize', 'end', this.element);
                target.fire(endEvent);
            }
            else if (this.gesturing) {
                endEvent = new InteractEvent(this, event, 'gesture', 'end', this.element);
                target.fire(endEvent);
            }

            this.stop(event);
        },

        collectDrops: function (element) {
            var drops = [],
                elements = [],
                i;

            element = element || this.element;

            // collect all dropzones and their elements which qualify for a drop
            for (i = 0; i < interactables.length; i++) {
                if (!interactables[i].options.drop.enabled) { continue; }

                var current = interactables[i],
                    accept = current.options.drop.accept;

                // test the draggable element against the dropzone's accept setting
                if ((isElement(accept) && accept !== element)
                    || (isString(accept)
                        && !matchesSelector(element, accept))) {

                    continue;
                }

                // query for new elements if necessary
                var dropElements = current.selector? current._context.querySelectorAll(current.selector) : [current._element];

                for (var j = 0, len = dropElements.length; j < len; j++) {
                    var currentElement = dropElements[j];

                    if (currentElement === element) {
                        continue;
                    }

                    drops.push(current);
                    elements.push(currentElement);
                }
            }

            return {
                dropzones: drops,
                elements: elements
            };
        },

        fireActiveDrops: function (event) {
            var i,
                current,
                currentElement,
                prevElement;

            // loop through all active dropzones and trigger event
            for (i = 0; i < this.activeDrops.dropzones.length; i++) {
                current = this.activeDrops.dropzones[i];
                currentElement = this.activeDrops.elements [i];

                // prevent trigger of duplicate events on same element
                if (currentElement !== prevElement) {
                    // set current element as event target
                    event.target = currentElement;
                    current.fire(event);
                }
                prevElement = currentElement;
            }
        },

        // Collect a new set of possible drops and save them in activeDrops.
        // setActiveDrops should always be called when a drag has just started or a
        // drag event happens while dynamicDrop is true
        setActiveDrops: function (dragElement) {
            // get dropzones and their elements that could receive the draggable
            var possibleDrops = this.collectDrops(dragElement, true);

            this.activeDrops.dropzones = possibleDrops.dropzones;
            this.activeDrops.elements  = possibleDrops.elements;
            this.activeDrops.rects     = [];

            for (var i = 0; i < this.activeDrops.dropzones.length; i++) {
                this.activeDrops.rects[i] = this.activeDrops.dropzones[i].getRect(this.activeDrops.elements[i]);
            }
        },

        getDrop: function (dragEvent, event, dragElement) {
            var validDrops = [];

            if (dynamicDrop) {
                this.setActiveDrops(dragElement);
            }

            // collect all dropzones and their elements which qualify for a drop
            for (var j = 0; j < this.activeDrops.dropzones.length; j++) {
                var current        = this.activeDrops.dropzones[j],
                    currentElement = this.activeDrops.elements [j],
                    rect           = this.activeDrops.rects    [j];

                validDrops.push(current.dropCheck(dragEvent, event, this.target, dragElement, currentElement, rect)
                                ? currentElement
                                : null);
            }

            // get the most appropriate dropzone based on DOM depth and order
            var dropIndex = indexOfDeepestElement(validDrops),
                dropzone  = this.activeDrops.dropzones[dropIndex] || null,
                element   = this.activeDrops.elements [dropIndex] || null;

            return {
                dropzone: dropzone,
                element: element
            };
        },

        getDropEvents: function (pointerEvent, dragEvent) {
            var dropEvents = {
                enter     : null,
                leave     : null,
                activate  : null,
                deactivate: null,
                move      : null,
                drop      : null
            };

            if (this.dropElement !== this.prevDropElement) {
                // if there was a prevDropTarget, create a dragleave event
                if (this.prevDropTarget) {
                    dropEvents.leave = {
                        target       : this.prevDropElement,
                        dropzone     : this.prevDropTarget,
                        relatedTarget: dragEvent.target,
                        draggable    : dragEvent.interactable,
                        dragEvent    : dragEvent,
                        interaction  : this,
                        timeStamp    : dragEvent.timeStamp,
                        type         : 'dragleave'
                    };

                    dragEvent.dragLeave = this.prevDropElement;
                    dragEvent.prevDropzone = this.prevDropTarget;
                }
                // if the dropTarget is not null, create a dragenter event
                if (this.dropTarget) {
                    dropEvents.enter = {
                        target       : this.dropElement,
                        dropzone     : this.dropTarget,
                        relatedTarget: dragEvent.target,
                        draggable    : dragEvent.interactable,
                        dragEvent    : dragEvent,
                        interaction  : this,
                        timeStamp    : dragEvent.timeStamp,
                        type         : 'dragenter'
                    };

                    dragEvent.dragEnter = this.dropElement;
                    dragEvent.dropzone = this.dropTarget;
                }
            }

            if (dragEvent.type === 'dragend' && this.dropTarget) {
                dropEvents.drop = {
                    target       : this.dropElement,
                    dropzone     : this.dropTarget,
                    relatedTarget: dragEvent.target,
                    draggable    : dragEvent.interactable,
                    dragEvent    : dragEvent,
                    interaction  : this,
                    timeStamp    : dragEvent.timeStamp,
                    type         : 'drop'
                };

                dragEvent.dropzone = this.dropTarget;
            }
            if (dragEvent.type === 'dragstart') {
                dropEvents.activate = {
                    target       : null,
                    dropzone     : null,
                    relatedTarget: dragEvent.target,
                    draggable    : dragEvent.interactable,
                    dragEvent    : dragEvent,
                    interaction  : this,
                    timeStamp    : dragEvent.timeStamp,
                    type         : 'dropactivate'
                };
            }
            if (dragEvent.type === 'dragend') {
                dropEvents.deactivate = {
                    target       : null,
                    dropzone     : null,
                    relatedTarget: dragEvent.target,
                    draggable    : dragEvent.interactable,
                    dragEvent    : dragEvent,
                    interaction  : this,
                    timeStamp    : dragEvent.timeStamp,
                    type         : 'dropdeactivate'
                };
            }
            if (dragEvent.type === 'dragmove' && this.dropTarget) {
                dropEvents.move = {
                    target       : this.dropElement,
                    dropzone     : this.dropTarget,
                    relatedTarget: dragEvent.target,
                    draggable    : dragEvent.interactable,
                    dragEvent    : dragEvent,
                    interaction  : this,
                    dragmove     : dragEvent,
                    timeStamp    : dragEvent.timeStamp,
                    type         : 'dropmove'
                };
                dragEvent.dropzone = this.dropTarget;
            }

            return dropEvents;
        },

        currentAction: function () {
            return (this.dragging && 'drag') || (this.resizing && 'resize') || (this.gesturing && 'gesture') || null;
        },

        interacting: function () {
            return this.dragging || this.resizing || this.gesturing;
        },

        clearTargets: function () {
            this.target = this.element = null;

            this.dropTarget = this.dropElement = this.prevDropTarget = this.prevDropElement = null;
        },

        stop: function (event) {
            if (this.interacting()) {
                autoScroll.stop();
                this.matches = [];
                this.matchElements = [];

                var target = this.target;

                if (target.options.styleCursor) {
                    target._doc.documentElement.style.cursor = '';
                }

                // prevent Default only if were previously interacting
                if (event && isFunction(event.preventDefault)) {
                    this.checkAndPreventDefault(event, target, this.element);
                }

                if (this.dragging) {
                    this.activeDrops.dropzones = this.activeDrops.elements = this.activeDrops.rects = null;
                }
            }

            this.clearTargets();

            this.pointerIsDown = this.snapStatus.locked = this.dragging = this.resizing = this.gesturing = false;
            this.prepared.name = this.prevEvent = null;
            this.inertiaStatus.resumeDx = this.inertiaStatus.resumeDy = 0;

            // remove pointers if their ID isn't in this.pointerIds
            for (var i = 0; i < this.pointers.length; i++) {
                if (indexOf(this.pointerIds, getPointerId(this.pointers[i])) === -1) {
                    this.pointers.splice(i, 1);
                }
            }
        },

        inertiaFrame: function () {
            var inertiaStatus = this.inertiaStatus,
                options = this.target.options[this.prepared.name].inertia,
                lambda = options.resistance,
                t = new Date().getTime() / 1000 - inertiaStatus.t0;

            if (t < inertiaStatus.te) {

                var progress =  1 - (Math.exp(-lambda * t) - inertiaStatus.lambda_v0) / inertiaStatus.one_ve_v0;

                if (inertiaStatus.modifiedXe === inertiaStatus.xe && inertiaStatus.modifiedYe === inertiaStatus.ye) {
                    inertiaStatus.sx = inertiaStatus.xe * progress;
                    inertiaStatus.sy = inertiaStatus.ye * progress;
                }
                else {
                    var quadPoint = getQuadraticCurvePoint(
                            0, 0,
                            inertiaStatus.xe, inertiaStatus.ye,
                            inertiaStatus.modifiedXe, inertiaStatus.modifiedYe,
                            progress);

                    inertiaStatus.sx = quadPoint.x;
                    inertiaStatus.sy = quadPoint.y;
                }

                this.pointerMove(inertiaStatus.startEvent, inertiaStatus.startEvent);

                inertiaStatus.i = reqFrame(this.boundInertiaFrame);
            }
            else {
                inertiaStatus.ending = true;

                inertiaStatus.sx = inertiaStatus.modifiedXe;
                inertiaStatus.sy = inertiaStatus.modifiedYe;

                this.pointerMove(inertiaStatus.startEvent, inertiaStatus.startEvent);
                this.pointerEnd(inertiaStatus.startEvent, inertiaStatus.startEvent);

                inertiaStatus.active = inertiaStatus.ending = false;
            }
        },

        smoothEndFrame: function () {
            var inertiaStatus = this.inertiaStatus,
                t = new Date().getTime() - inertiaStatus.t0,
                duration = this.target.options[this.prepared.name].inertia.smoothEndDuration;

            if (t < duration) {
                inertiaStatus.sx = easeOutQuad(t, 0, inertiaStatus.xe, duration);
                inertiaStatus.sy = easeOutQuad(t, 0, inertiaStatus.ye, duration);

                this.pointerMove(inertiaStatus.startEvent, inertiaStatus.startEvent);

                inertiaStatus.i = reqFrame(this.boundSmoothEndFrame);
            }
            else {
                inertiaStatus.ending = true;

                inertiaStatus.sx = inertiaStatus.xe;
                inertiaStatus.sy = inertiaStatus.ye;

                this.pointerMove(inertiaStatus.startEvent, inertiaStatus.startEvent);
                this.pointerEnd(inertiaStatus.startEvent, inertiaStatus.startEvent);

                inertiaStatus.smoothEnd =
                  inertiaStatus.active = inertiaStatus.ending = false;
            }
        },

        addPointer: function (pointer) {
            var id = getPointerId(pointer),
                index = this.mouse? 0 : indexOf(this.pointerIds, id);

            if (index === -1) {
                index = this.pointerIds.length;
            }

            this.pointerIds[index] = id;
            this.pointers[index] = pointer;

            return index;
        },

        removePointer: function (pointer) {
            var id = getPointerId(pointer),
                index = this.mouse? 0 : indexOf(this.pointerIds, id);

            if (index === -1) { return; }

            this.pointers   .splice(index, 1);
            this.pointerIds .splice(index, 1);
            this.downTargets.splice(index, 1);
            this.downTimes  .splice(index, 1);
            this.holdTimers .splice(index, 1);
        },

        recordPointer: function (pointer) {
            var index = this.mouse? 0: indexOf(this.pointerIds, getPointerId(pointer));

            if (index === -1) { return; }

            this.pointers[index] = pointer;
        },

        collectEventTargets: function (pointer, event, eventTarget, eventType) {
            var pointerIndex = this.mouse? 0 : indexOf(this.pointerIds, getPointerId(pointer));

            // do not fire a tap event if the pointer was moved before being lifted
            if (eventType === 'tap' && (this.pointerWasMoved
                // or if the pointerup target is different to the pointerdown target
                || !(this.downTargets[pointerIndex] && this.downTargets[pointerIndex] === eventTarget))) {
                return;
            }

            var targets = [],
                elements = [],
                element = eventTarget;

            function collectSelectors (interactable, selector, context) {
                var els = ie8MatchesSelector
                        ? context.querySelectorAll(selector)
                        : undefined;

                if (interactable._iEvents[eventType]
                    && isElement(element)
                    && inContext(interactable, element)
                    && !testIgnore(interactable, element, eventTarget)
                    && testAllow(interactable, element, eventTarget)
                    && matchesSelector(element, selector, els)) {

                    targets.push(interactable);
                    elements.push(element);
                }
            }

            while (element) {
                if (interact.isSet(element) && interact(element)._iEvents[eventType]) {
                    targets.push(interact(element));
                    elements.push(element);
                }

                interactables.forEachSelector(collectSelectors);

                element = parentElement(element);
            }

            // create the tap event even if there are no listeners so that
            // doubletap can still be created and fired
            if (targets.length || eventType === 'tap') {
                this.firePointers(pointer, event, eventTarget, targets, elements, eventType);
            }
        },

        firePointers: function (pointer, event, eventTarget, targets, elements, eventType) {
            var pointerIndex = this.mouse? 0 : indexOf(this.pointerIds, getPointerId(pointer)),
                pointerEvent = {},
                i,
                // for tap events
                interval, createNewDoubleTap;

            // if it's a doubletap then the event properties would have been
            // copied from the tap event and provided as the pointer argument
            if (eventType === 'doubletap') {
                pointerEvent = pointer;
            }
            else {
                pointerExtend(pointerEvent, event);
                if (event !== pointer) {
                    pointerExtend(pointerEvent, pointer);
                }

                pointerEvent.preventDefault           = preventOriginalDefault;
                pointerEvent.stopPropagation          = InteractEvent.prototype.stopPropagation;
                pointerEvent.stopImmediatePropagation = InteractEvent.prototype.stopImmediatePropagation;
                pointerEvent.interaction              = this;

                pointerEvent.timeStamp       = new Date().getTime();
                pointerEvent.originalEvent   = event;
                pointerEvent.originalPointer = pointer;
                pointerEvent.type            = eventType;
                pointerEvent.pointerId       = getPointerId(pointer);
                pointerEvent.pointerType     = this.mouse? 'mouse' : !supportsPointerEvent? 'touch'
                                                    : isString(pointer.pointerType)
                                                        ? pointer.pointerType
                                                        : [,,'touch', 'pen', 'mouse'][pointer.pointerType];
            }

            if (eventType === 'tap') {
                pointerEvent.dt = pointerEvent.timeStamp - this.downTimes[pointerIndex];

                interval = pointerEvent.timeStamp - this.tapTime;
                createNewDoubleTap = !!(this.prevTap && this.prevTap.type !== 'doubletap'
                       && this.prevTap.target === pointerEvent.target
                       && interval < 500);

                pointerEvent.double = createNewDoubleTap;

                this.tapTime = pointerEvent.timeStamp;
            }

            for (i = 0; i < targets.length; i++) {
                pointerEvent.currentTarget = elements[i];
                pointerEvent.interactable = targets[i];
                targets[i].fire(pointerEvent);

                if (pointerEvent.immediatePropagationStopped
                    ||(pointerEvent.propagationStopped && elements[i + 1] !== pointerEvent.currentTarget)) {
                    break;
                }
            }

            if (createNewDoubleTap) {
                var doubleTap = {};

                extend(doubleTap, pointerEvent);

                doubleTap.dt   = interval;
                doubleTap.type = 'doubletap';

                this.collectEventTargets(doubleTap, event, eventTarget, 'doubletap');

                this.prevTap = doubleTap;
            }
            else if (eventType === 'tap') {
                this.prevTap = pointerEvent;
            }
        },

        validateSelector: function (pointer, event, matches, matchElements) {
            for (var i = 0, len = matches.length; i < len; i++) {
                var match = matches[i],
                    matchElement = matchElements[i],
                    action = validateAction(match.getAction(pointer, event, this, matchElement), match);

                if (action && withinInteractionLimit(match, matchElement, action)) {
                    this.target = match;
                    this.element = matchElement;

                    return action;
                }
            }
        },

        setSnapping: function (pageCoords, status) {
            var snap = this.target.options[this.prepared.name].snap,
                targets = [],
                target,
                page,
                i;

            status = status || this.snapStatus;

            if (status.useStatusXY) {
                page = { x: status.x, y: status.y };
            }
            else {
                var origin = getOriginXY(this.target, this.element);

                page = extend({}, pageCoords);

                page.x -= origin.x;
                page.y -= origin.y;
            }

            status.realX = page.x;
            status.realY = page.y;

            page.x = page.x - this.inertiaStatus.resumeDx;
            page.y = page.y - this.inertiaStatus.resumeDy;

            var len = snap.targets? snap.targets.length : 0;

            for (var relIndex = 0; relIndex < this.snapOffsets.length; relIndex++) {
                var relative = {
                    x: page.x - this.snapOffsets[relIndex].x,
                    y: page.y - this.snapOffsets[relIndex].y
                };

                for (i = 0; i < len; i++) {
                    if (isFunction(snap.targets[i])) {
                        target = snap.targets[i](relative.x, relative.y, this);
                    }
                    else {
                        target = snap.targets[i];
                    }

                    if (!target) { continue; }

                    targets.push({
                        x: isNumber(target.x) ? (target.x + this.snapOffsets[relIndex].x) : relative.x,
                        y: isNumber(target.y) ? (target.y + this.snapOffsets[relIndex].y) : relative.y,

                        range: isNumber(target.range)? target.range: snap.range
                    });
                }
            }

            var closest = {
                    target: null,
                    inRange: false,
                    distance: 0,
                    range: 0,
                    dx: 0,
                    dy: 0
                };

            for (i = 0, len = targets.length; i < len; i++) {
                target = targets[i];

                var range = target.range,
                    dx = target.x - page.x,
                    dy = target.y - page.y,
                    distance = hypot(dx, dy),
                    inRange = distance <= range;

                // Infinite targets count as being out of range
                // compared to non infinite ones that are in range
                if (range === Infinity && closest.inRange && closest.range !== Infinity) {
                    inRange = false;
                }

                if (!closest.target || (inRange
                    // is the closest target in range?
                    ? (closest.inRange && range !== Infinity
                        // the pointer is relatively deeper in this target
                        ? distance / range < closest.distance / closest.range
                        // this target has Infinite range and the closest doesn't
                        : (range === Infinity && closest.range !== Infinity)
                            // OR this target is closer that the previous closest
                            || distance < closest.distance)
                    // The other is not in range and the pointer is closer to this target
                    : (!closest.inRange && distance < closest.distance))) {

                    if (range === Infinity) {
                        inRange = true;
                    }

                    closest.target = target;
                    closest.distance = distance;
                    closest.range = range;
                    closest.inRange = inRange;
                    closest.dx = dx;
                    closest.dy = dy;

                    status.range = range;
                }
            }

            var snapChanged;

            if (closest.target) {
                snapChanged = (status.snappedX !== closest.target.x || status.snappedY !== closest.target.y);

                status.snappedX = closest.target.x;
                status.snappedY = closest.target.y;
            }
            else {
                snapChanged = true;

                status.snappedX = NaN;
                status.snappedY = NaN;
            }

            status.dx = closest.dx;
            status.dy = closest.dy;

            status.changed = (snapChanged || (closest.inRange && !status.locked));
            status.locked = closest.inRange;

            return status;
        },

        setRestriction: function (pageCoords, status) {
            var target = this.target,
                restrict = target && target.options[this.prepared.name].restrict,
                restriction = restrict && restrict.restriction,
                page;

            if (!restriction) {
                return status;
            }

            status = status || this.restrictStatus;

            page = status.useStatusXY
                    ? page = { x: status.x, y: status.y }
                    : page = extend({}, pageCoords);

            if (status.snap && status.snap.locked) {
                page.x += status.snap.dx || 0;
                page.y += status.snap.dy || 0;
            }

            page.x -= this.inertiaStatus.resumeDx;
            page.y -= this.inertiaStatus.resumeDy;

            status.dx = 0;
            status.dy = 0;
            status.restricted = false;

            var rect, restrictedX, restrictedY;

            if (isString(restriction)) {
                if (restriction === 'parent') {
                    restriction = parentElement(this.element);
                }
                else if (restriction === 'self') {
                    restriction = target.getRect(this.element);
                }
                else {
                    restriction = closest(this.element, restriction);
                }

                if (!restriction) { return status; }
            }

            if (isFunction(restriction)) {
                restriction = restriction(page.x, page.y, this.element);
            }

            if (isElement(restriction)) {
                restriction = getElementRect(restriction);
            }

            rect = restriction;

            if (!restriction) {
                restrictedX = page.x;
                restrictedY = page.y;
            }
            // object is assumed to have
            // x, y, width, height or
            // left, top, right, bottom
            else if ('x' in restriction && 'y' in restriction) {
                restrictedX = Math.max(Math.min(rect.x + rect.width  - this.restrictOffset.right , page.x), rect.x + this.restrictOffset.left);
                restrictedY = Math.max(Math.min(rect.y + rect.height - this.restrictOffset.bottom, page.y), rect.y + this.restrictOffset.top );
            }
            else {
                restrictedX = Math.max(Math.min(rect.right  - this.restrictOffset.right , page.x), rect.left + this.restrictOffset.left);
                restrictedY = Math.max(Math.min(rect.bottom - this.restrictOffset.bottom, page.y), rect.top  + this.restrictOffset.top );
            }

            status.dx = restrictedX - page.x;
            status.dy = restrictedY - page.y;

            status.changed = status.restrictedX !== restrictedX || status.restrictedY !== restrictedY;
            status.restricted = !!(status.dx || status.dy);

            status.restrictedX = restrictedX;
            status.restrictedY = restrictedY;

            return status;
        },

        checkAndPreventDefault: function (event, interactable, element) {
            if (!(interactable = interactable || this.target)) { return; }

            var options = interactable.options,
                prevent = options.preventDefault;

            if (prevent === 'auto' && element && !/^(input|select|textarea)$/i.test(event.target.nodeName)) {
                // do not preventDefault on pointerdown if the prepared action is a drag
                // and dragging can only start from a certain direction - this allows
                // a touch to pan the viewport if a drag isn't in the right direction
                if (/down|start/i.test(event.type)
                    && this.prepared.name === 'drag' && options.drag.axis !== 'xy') {

                    return;
                }

                // with manualStart, only preventDefault while interacting
                if (options[this.prepared.name] && options[this.prepared.name].manualStart
                    && !this.interacting()) {
                    return;
                }

                event.preventDefault();
                return;
            }

            if (prevent === 'always') {
                event.preventDefault();
                return;
            }
        },

        calcInertia: function (status) {
            var inertiaOptions = this.target.options[this.prepared.name].inertia,
                lambda = inertiaOptions.resistance,
                inertiaDur = -Math.log(inertiaOptions.endSpeed / status.v0) / lambda;

            status.x0 = this.prevEvent.pageX;
            status.y0 = this.prevEvent.pageY;
            status.t0 = status.startEvent.timeStamp / 1000;
            status.sx = status.sy = 0;

            status.modifiedXe = status.xe = (status.vx0 - inertiaDur) / lambda;
            status.modifiedYe = status.ye = (status.vy0 - inertiaDur) / lambda;
            status.te = inertiaDur;

            status.lambda_v0 = lambda / status.v0;
            status.one_ve_v0 = 1 - inertiaOptions.endSpeed / status.v0;
        },

        autoScrollMove: function (pointer) {
            if (!(this.interacting()
                && checkAutoScroll(this.target, this.prepared.name))) {
                return;
            }

            if (this.inertiaStatus.active) {
                autoScroll.x = autoScroll.y = 0;
                return;
            }

            var top,
                right,
                bottom,
                left,
                options = this.target.options[this.prepared.name].autoScroll,
                container = options.container || getWindow(this.element);

            if (isWindow(container)) {
                left   = pointer.clientX < autoScroll.margin;
                top    = pointer.clientY < autoScroll.margin;
                right  = pointer.clientX > container.innerWidth  - autoScroll.margin;
                bottom = pointer.clientY > container.innerHeight - autoScroll.margin;
            }
            else {
                var rect = getElementClientRect(container);

                left   = pointer.clientX < rect.left   + autoScroll.margin;
                top    = pointer.clientY < rect.top    + autoScroll.margin;
                right  = pointer.clientX > rect.right  - autoScroll.margin;
                bottom = pointer.clientY > rect.bottom - autoScroll.margin;
            }

            autoScroll.x = (right ? 1: left? -1: 0);
            autoScroll.y = (bottom? 1:  top? -1: 0);

            if (!autoScroll.isScrolling) {
                // set the autoScroll properties to those of the target
                autoScroll.margin = options.margin;
                autoScroll.speed  = options.speed;

                autoScroll.start(this);
            }
        },

        _updateEventTargets: function (target, currentTarget) {
            this._eventTarget    = target;
            this._curEventTarget = currentTarget;
        }

    };

    function getInteractionFromPointer (pointer, eventType, eventTarget) {
        var i = 0, len = interactions.length,
            mouseEvent = (/mouse/i.test(pointer.pointerType || eventType)
                          // MSPointerEvent.MSPOINTER_TYPE_MOUSE
                          || pointer.pointerType === 4),
            interaction;

        var id = getPointerId(pointer);

        // try to resume inertia with a new pointer
        if (/down|start/i.test(eventType)) {
            for (i = 0; i < len; i++) {
                interaction = interactions[i];

                var element = eventTarget;

                if (interaction.inertiaStatus.active && interaction.target.options[interaction.prepared.name].inertia.allowResume
                    && (interaction.mouse === mouseEvent)) {
                    while (element) {
                        // if the element is the interaction element
                        if (element === interaction.element) {
                            return interaction;
                        }
                        element = parentElement(element);
                    }
                }
            }
        }

        // if it's a mouse interaction
        if (mouseEvent || !(supportsTouch || supportsPointerEvent)) {

            // find a mouse interaction that's not in inertia phase
            for (i = 0; i < len; i++) {
                if (interactions[i].mouse && !interactions[i].inertiaStatus.active) {
                    return interactions[i];
                }
            }

            // find any interaction specifically for mouse.
            // if the eventType is a mousedown, and inertia is active
            // ignore the interaction
            for (i = 0; i < len; i++) {
                if (interactions[i].mouse && !(/down/.test(eventType) && interactions[i].inertiaStatus.active)) {
                    return interaction;
                }
            }

            // create a new interaction for mouse
            interaction = new Interaction();
            interaction.mouse = true;

            return interaction;
        }

        // get interaction that has this pointer
        for (i = 0; i < len; i++) {
            if (contains(interactions[i].pointerIds, id)) {
                return interactions[i];
            }
        }

        // at this stage, a pointerUp should not return an interaction
        if (/up|end|out/i.test(eventType)) {
            return null;
        }

        // get first idle interaction
        for (i = 0; i < len; i++) {
            interaction = interactions[i];

            if ((!interaction.prepared.name || (interaction.target.options.gesture.enabled))
                && !interaction.interacting()
                && !(!mouseEvent && interaction.mouse)) {

                return interaction;
            }
        }

        return new Interaction();
    }

    function doOnInteractions (method) {
        return (function (event) {
            var interaction,
                eventTarget = getActualElement(event.path
                                               ? event.path[0]
                                               : event.target),
                curEventTarget = getActualElement(event.currentTarget),
                i;

            if (supportsTouch && /touch/.test(event.type)) {
                prevTouchTime = new Date().getTime();

                for (i = 0; i < event.changedTouches.length; i++) {
                    var pointer = event.changedTouches[i];

                    interaction = getInteractionFromPointer(pointer, event.type, eventTarget);

                    if (!interaction) { continue; }

                    interaction._updateEventTargets(eventTarget, curEventTarget);

                    interaction[method](pointer, event, eventTarget, curEventTarget);
                }
            }
            else {
                if (!supportsPointerEvent && /mouse/.test(event.type)) {
                    // ignore mouse events while touch interactions are active
                    for (i = 0; i < interactions.length; i++) {
                        if (!interactions[i].mouse && interactions[i].pointerIsDown) {
                            return;
                        }
                    }

                    // try to ignore mouse events that are simulated by the browser
                    // after a touch event
                    if (new Date().getTime() - prevTouchTime < 500) {
                        return;
                    }
                }

                interaction = getInteractionFromPointer(event, event.type, eventTarget);

                if (!interaction) { return; }

                interaction._updateEventTargets(eventTarget, curEventTarget);

                interaction[method](event, event, eventTarget, curEventTarget);
            }
        });
    }

    function InteractEvent (interaction, event, action, phase, element, related) {
        var client,
            page,
            target      = interaction.target,
            snapStatus  = interaction.snapStatus,
            restrictStatus  = interaction.restrictStatus,
            pointers    = interaction.pointers,
            deltaSource = (target && target.options || defaultOptions).deltaSource,
            sourceX     = deltaSource + 'X',
            sourceY     = deltaSource + 'Y',
            options     = target? target.options: defaultOptions,
            origin      = getOriginXY(target, element),
            starting    = phase === 'start',
            ending      = phase === 'end',
            coords      = starting? interaction.startCoords : interaction.curCoords;

        element = element || interaction.element;

        page   = extend({}, coords.page);
        client = extend({}, coords.client);

        page.x -= origin.x;
        page.y -= origin.y;

        client.x -= origin.x;
        client.y -= origin.y;

        var relativePoints = options[action].snap && options[action].snap.relativePoints ;

        if (checkSnap(target, action) && !(starting && relativePoints && relativePoints.length)) {
            this.snap = {
                range  : snapStatus.range,
                locked : snapStatus.locked,
                x      : snapStatus.snappedX,
                y      : snapStatus.snappedY,
                realX  : snapStatus.realX,
                realY  : snapStatus.realY,
                dx     : snapStatus.dx,
                dy     : snapStatus.dy
            };

            if (snapStatus.locked) {
                page.x += snapStatus.dx;
                page.y += snapStatus.dy;
                client.x += snapStatus.dx;
                client.y += snapStatus.dy;
            }
        }

        if (checkRestrict(target, action) && !(starting && options[action].restrict.elementRect) && restrictStatus.restricted) {
            page.x += restrictStatus.dx;
            page.y += restrictStatus.dy;
            client.x += restrictStatus.dx;
            client.y += restrictStatus.dy;

            this.restrict = {
                dx: restrictStatus.dx,
                dy: restrictStatus.dy
            };
        }

        this.pageX     = page.x;
        this.pageY     = page.y;
        this.clientX   = client.x;
        this.clientY   = client.y;

        this.x0        = interaction.startCoords.page.x - origin.x;
        this.y0        = interaction.startCoords.page.y - origin.y;
        this.clientX0  = interaction.startCoords.client.x - origin.x;
        this.clientY0  = interaction.startCoords.client.y - origin.y;
        this.ctrlKey   = event.ctrlKey;
        this.altKey    = event.altKey;
        this.shiftKey  = event.shiftKey;
        this.metaKey   = event.metaKey;
        this.button    = event.button;
        this.buttons   = event.buttons;
        this.target    = element;
        this.t0        = interaction.downTimes[0];
        this.type      = action + (phase || '');

        this.interaction = interaction;
        this.interactable = target;

        var inertiaStatus = interaction.inertiaStatus;

        if (inertiaStatus.active) {
            this.detail = 'inertia';
        }

        if (related) {
            this.relatedTarget = related;
        }

        // end event dx, dy is difference between start and end points
        if (ending) {
            if (deltaSource === 'client') {
                this.dx = client.x - interaction.startCoords.client.x;
                this.dy = client.y - interaction.startCoords.client.y;
            }
            else {
                this.dx = page.x - interaction.startCoords.page.x;
                this.dy = page.y - interaction.startCoords.page.y;
            }
        }
        else if (starting) {
            this.dx = 0;
            this.dy = 0;
        }
        // copy properties from previousmove if starting inertia
        else if (phase === 'inertiastart') {
            this.dx = interaction.prevEvent.dx;
            this.dy = interaction.prevEvent.dy;
        }
        else {
            if (deltaSource === 'client') {
                this.dx = client.x - interaction.prevEvent.clientX;
                this.dy = client.y - interaction.prevEvent.clientY;
            }
            else {
                this.dx = page.x - interaction.prevEvent.pageX;
                this.dy = page.y - interaction.prevEvent.pageY;
            }
        }
        if (interaction.prevEvent && interaction.prevEvent.detail === 'inertia'
            && !inertiaStatus.active
            && options[action].inertia && options[action].inertia.zeroResumeDelta) {

            inertiaStatus.resumeDx += this.dx;
            inertiaStatus.resumeDy += this.dy;

            this.dx = this.dy = 0;
        }

        if (action === 'resize' && interaction.resizeAxes) {
            if (options.resize.square) {
                if (interaction.resizeAxes === 'y') {
                    this.dx = this.dy;
                }
                else {
                    this.dy = this.dx;
                }
                this.axes = 'xy';
            }
            else {
                this.axes = interaction.resizeAxes;

                if (interaction.resizeAxes === 'x') {
                    this.dy = 0;
                }
                else if (interaction.resizeAxes === 'y') {
                    this.dx = 0;
                }
            }
        }
        else if (action === 'gesture') {
            this.touches = [pointers[0], pointers[1]];

            if (starting) {
                this.distance = touchDistance(pointers, deltaSource);
                this.box      = touchBBox(pointers);
                this.scale    = 1;
                this.ds       = 0;
                this.angle    = touchAngle(pointers, undefined, deltaSource);
                this.da       = 0;
            }
            else if (ending || event instanceof InteractEvent) {
                this.distance = interaction.prevEvent.distance;
                this.box      = interaction.prevEvent.box;
                this.scale    = interaction.prevEvent.scale;
                this.ds       = this.scale - 1;
                this.angle    = interaction.prevEvent.angle;
                this.da       = this.angle - interaction.gesture.startAngle;
            }
            else {
                this.distance = touchDistance(pointers, deltaSource);
                this.box      = touchBBox(pointers);
                this.scale    = this.distance / interaction.gesture.startDistance;
                this.angle    = touchAngle(pointers, interaction.gesture.prevAngle, deltaSource);

                this.ds = this.scale - interaction.gesture.prevScale;
                this.da = this.angle - interaction.gesture.prevAngle;
            }
        }

        if (starting) {
            this.timeStamp = interaction.downTimes[0];
            this.dt        = 0;
            this.duration  = 0;
            this.speed     = 0;
            this.velocityX = 0;
            this.velocityY = 0;
        }
        else if (phase === 'inertiastart') {
            this.timeStamp = interaction.prevEvent.timeStamp;
            this.dt        = interaction.prevEvent.dt;
            this.duration  = interaction.prevEvent.duration;
            this.speed     = interaction.prevEvent.speed;
            this.velocityX = interaction.prevEvent.velocityX;
            this.velocityY = interaction.prevEvent.velocityY;
        }
        else {
            this.timeStamp = new Date().getTime();
            this.dt        = this.timeStamp - interaction.prevEvent.timeStamp;
            this.duration  = this.timeStamp - interaction.downTimes[0];

            if (event instanceof InteractEvent) {
                var dx = this[sourceX] - interaction.prevEvent[sourceX],
                    dy = this[sourceY] - interaction.prevEvent[sourceY],
                    dt = this.dt / 1000;

                this.speed = hypot(dx, dy) / dt;
                this.velocityX = dx / dt;
                this.velocityY = dy / dt;
            }
            // if normal move or end event, use previous user event coords
            else {
                // speed and velocity in pixels per second
                this.speed = interaction.pointerDelta[deltaSource].speed;
                this.velocityX = interaction.pointerDelta[deltaSource].vx;
                this.velocityY = interaction.pointerDelta[deltaSource].vy;
            }
        }

        if ((ending || phase === 'inertiastart')
            && interaction.prevEvent.speed > 600 && this.timeStamp - interaction.prevEvent.timeStamp < 150) {

            var angle = 180 * Math.atan2(interaction.prevEvent.velocityY, interaction.prevEvent.velocityX) / Math.PI,
                overlap = 22.5;

            if (angle < 0) {
                angle += 360;
            }

            var left = 135 - overlap <= angle && angle < 225 + overlap,
                up   = 225 - overlap <= angle && angle < 315 + overlap,

                right = !left && (315 - overlap <= angle || angle <  45 + overlap),
                down  = !up   &&   45 - overlap <= angle && angle < 135 + overlap;

            this.swipe = {
                up   : up,
                down : down,
                left : left,
                right: right,
                angle: angle,
                speed: interaction.prevEvent.speed,
                velocity: {
                    x: interaction.prevEvent.velocityX,
                    y: interaction.prevEvent.velocityY
                }
            };
        }
    }

    InteractEvent.prototype = {
        preventDefault: blank,
        stopImmediatePropagation: function () {
            this.immediatePropagationStopped = this.propagationStopped = true;
        },
        stopPropagation: function () {
            this.propagationStopped = true;
        }
    };

    function preventOriginalDefault () {
        this.originalEvent.preventDefault();
    }

    function getActionCursor (action) {
        var cursor = '';

        if (action.name === 'drag') {
            cursor =  actionCursors.drag;
        }
        if (action.name === 'resize') {
            if (action.axis) {
                cursor =  actionCursors[action.name + action.axis];
            }
            else if (action.edges) {
                var cursorKey = 'resize',
                    edgeNames = ['top', 'bottom', 'left', 'right'];

                for (var i = 0; i < 4; i++) {
                    if (action.edges[edgeNames[i]]) {
                        cursorKey += edgeNames[i];
                    }
                }

                cursor = actionCursors[cursorKey];
            }
        }

        return cursor;
    }

    function checkResizeEdge (name, value, page, element, interactableElement, rect, margin) {
        // false, '', undefined, null
        if (!value) { return false; }

        // true value, use pointer coords and element rect
        if (value === true) {
            // if dimensions are negative, "switch" edges
            var width = isNumber(rect.width)? rect.width : rect.right - rect.left,
                height = isNumber(rect.height)? rect.height : rect.bottom - rect.top;

            if (width < 0) {
                if      (name === 'left' ) { name = 'right'; }
                else if (name === 'right') { name = 'left' ; }
            }
            if (height < 0) {
                if      (name === 'top'   ) { name = 'bottom'; }
                else if (name === 'bottom') { name = 'top'   ; }
            }

            if (name === 'left'  ) { return page.x < ((width  >= 0? rect.left: rect.right ) + margin); }
            if (name === 'top'   ) { return page.y < ((height >= 0? rect.top : rect.bottom) + margin); }

            if (name === 'right' ) { return page.x > ((width  >= 0? rect.right : rect.left) - margin); }
            if (name === 'bottom') { return page.y > ((height >= 0? rect.bottom: rect.top ) - margin); }
        }

        // the remaining checks require an element
        if (!isElement(element)) { return false; }

        return isElement(value)
                    // the value is an element to use as a resize handle
                    ? value === element
                    // otherwise check if element matches value as selector
                    : matchesUpTo(element, value, interactableElement);
    }

    function defaultActionChecker (pointer, interaction, element) {
        var rect = this.getRect(element),
            shouldResize = false,
            action = null,
            resizeAxes = null,
            resizeEdges,
            page = extend({}, interaction.curCoords.page),
            options = this.options;

        if (!rect) { return null; }

        if (actionIsEnabled.resize && options.resize.enabled) {
            var resizeOptions = options.resize;

            resizeEdges = {
                left: false, right: false, top: false, bottom: false
            };

            // if using resize.edges
            if (isObject(resizeOptions.edges)) {
                for (var edge in resizeEdges) {
                    resizeEdges[edge] = checkResizeEdge(edge,
                                                        resizeOptions.edges[edge],
                                                        page,
                                                        interaction._eventTarget,
                                                        element,
                                                        rect,
                                                        resizeOptions.margin || margin);
                }

                resizeEdges.left = resizeEdges.left && !resizeEdges.right;
                resizeEdges.top  = resizeEdges.top  && !resizeEdges.bottom;

                shouldResize = resizeEdges.left || resizeEdges.right || resizeEdges.top || resizeEdges.bottom;
            }
            else {
                var right  = options.resize.axis !== 'y' && page.x > (rect.right  - margin),
                    bottom = options.resize.axis !== 'x' && page.y > (rect.bottom - margin);

                shouldResize = right || bottom;
                resizeAxes = (right? 'x' : '') + (bottom? 'y' : '');
            }
        }

        action = shouldResize
            ? 'resize'
            : actionIsEnabled.drag && options.drag.enabled
                ? 'drag'
                : null;

        if (actionIsEnabled.gesture
            && interaction.pointerIds.length >=2
            && !(interaction.dragging || interaction.resizing)) {
            action = 'gesture';
        }

        if (action) {
            return {
                name: action,
                axis: resizeAxes,
                edges: resizeEdges
            };
        }

        return null;
    }

    // Check if action is enabled globally and the current target supports it
    // If so, return the validated action. Otherwise, return null
    function validateAction (action, interactable) {
        if (!isObject(action)) { return null; }

        var actionName = action.name,
            options = interactable.options;

        if ((  (actionName  === 'resize'   && options.resize.enabled )
            || (actionName      === 'drag'     && options.drag.enabled  )
            || (actionName      === 'gesture'  && options.gesture.enabled))
            && actionIsEnabled[actionName]) {

            if (actionName === 'resize' || actionName === 'resizeyx') {
                actionName = 'resizexy';
            }

            return action;
        }
        return null;
    }

    var listeners = {},
        interactionListeners = [
            'dragStart', 'dragMove', 'resizeStart', 'resizeMove', 'gestureStart', 'gestureMove',
            'pointerOver', 'pointerOut', 'pointerHover', 'selectorDown',
            'pointerDown', 'pointerMove', 'pointerUp', 'pointerCancel', 'pointerEnd',
            'addPointer', 'removePointer', 'recordPointer', 'autoScrollMove'
        ];

    for (var i = 0, len = interactionListeners.length; i < len; i++) {
        var name = interactionListeners[i];

        listeners[name] = doOnInteractions(name);
    }

    // bound to the interactable context when a DOM event
    // listener is added to a selector interactable
    function delegateListener (event, useCapture) {
        var fakeEvent = {},
            delegated = delegatedEvents[event.type],
            eventTarget = getActualElement(event.path
                                           ? event.path[0]
                                           : event.target),
            element = eventTarget;

        useCapture = useCapture? true: false;

        // duplicate the event so that currentTarget can be changed
        for (var prop in event) {
            fakeEvent[prop] = event[prop];
        }

        fakeEvent.originalEvent = event;
        fakeEvent.preventDefault = preventOriginalDefault;

        // climb up document tree looking for selector matches
        while (isElement(element)) {
            for (var i = 0; i < delegated.selectors.length; i++) {
                var selector = delegated.selectors[i],
                    context = delegated.contexts[i];

                if (matchesSelector(element, selector)
                    && nodeContains(context, eventTarget)
                    && nodeContains(context, element)) {

                    var listeners = delegated.listeners[i];

                    fakeEvent.currentTarget = element;

                    for (var j = 0; j < listeners.length; j++) {
                        if (listeners[j][1] === useCapture) {
                            listeners[j][0](fakeEvent);
                        }
                    }
                }
            }

            element = parentElement(element);
        }
    }

    function delegateUseCapture (event) {
        return delegateListener.call(this, event, true);
    }

    interactables.indexOfElement = function indexOfElement (element, context) {
        context = context || document;

        for (var i = 0; i < this.length; i++) {
            var interactable = this[i];

            if ((interactable.selector === element
                && (interactable._context === context))
                || (!interactable.selector && interactable._element === element)) {

                return i;
            }
        }
        return -1;
    };

    interactables.get = function interactableGet (element, options) {
        return this[this.indexOfElement(element, options && options.context)];
    };

    interactables.forEachSelector = function (callback) {
        for (var i = 0; i < this.length; i++) {
            var interactable = this[i];

            if (!interactable.selector) {
                continue;
            }

            var ret = callback(interactable, interactable.selector, interactable._context, i, this);

            if (ret !== undefined) {
                return ret;
            }
        }
    };

    /*\
     * interact
     [ method ]
     *
     * The methods of this variable can be used to set elements as
     * interactables and also to change various default settings.
     *
     * Calling it as a function and passing an element or a valid CSS selector
     * string returns an Interactable object which has various methods to
     * configure it.
     *
     - element (Element | string) The HTML or SVG Element to interact with or CSS selector
     = (object) An @Interactable
     *
     > Usage
     | interact(document.getElementById('draggable')).draggable(true);
     |
     | var rectables = interact('rect');
     | rectables
     |     .gesturable(true)
     |     .on('gesturemove', function (event) {
     |         // something cool...
     |     })
     |     .autoScroll(true);
    \*/
    function interact (element, options) {
        return interactables.get(element, options) || new Interactable(element, options);
    }

    /*\
     * Interactable
     [ property ]
     **
     * Object type returned by @interact
    \*/
    function Interactable (element, options) {
        this._element = element;
        this._iEvents = this._iEvents || {};

        var _window;

        if (trySelector(element)) {
            this.selector = element;

            var context = options && options.context;

            _window = context? getWindow(context) : window;

            if (context && (_window.Node
                    ? context instanceof _window.Node
                    : (isElement(context) || context === _window.document))) {

                this._context = context;
            }
        }
        else {
            _window = getWindow(element);

            if (isElement(element, _window)) {

                if (supportsPointerEvent) {
                    events.add(this._element, pEventTypes.down, listeners.pointerDown );
                    events.add(this._element, pEventTypes.move, listeners.pointerHover);
                }
                else {
                    events.add(this._element, 'mousedown' , listeners.pointerDown );
                    events.add(this._element, 'mousemove' , listeners.pointerHover);
                    events.add(this._element, 'touchstart', listeners.pointerDown );
                    events.add(this._element, 'touchmove' , listeners.pointerHover);
                }
            }
        }

        this._doc = _window.document;

        if (!contains(documents, this._doc)) {
            listenToDocument(this._doc);
        }

        interactables.push(this);

        this.set(options);
    }

    Interactable.prototype = {
        setOnEvents: function (action, phases) {
            if (action === 'drop') {
                if (isFunction(phases.ondrop)          ) { this.ondrop           = phases.ondrop          ; }
                if (isFunction(phases.ondropactivate)  ) { this.ondropactivate   = phases.ondropactivate  ; }
                if (isFunction(phases.ondropdeactivate)) { this.ondropdeactivate = phases.ondropdeactivate; }
                if (isFunction(phases.ondragenter)     ) { this.ondragenter      = phases.ondragenter     ; }
                if (isFunction(phases.ondragleave)     ) { this.ondragleave      = phases.ondragleave     ; }
                if (isFunction(phases.ondropmove)      ) { this.ondropmove       = phases.ondropmove      ; }
            }
            else {
                action = 'on' + action;

                if (isFunction(phases.onstart)       ) { this[action + 'start'         ] = phases.onstart         ; }
                if (isFunction(phases.onmove)        ) { this[action + 'move'          ] = phases.onmove          ; }
                if (isFunction(phases.onend)         ) { this[action + 'end'           ] = phases.onend           ; }
                if (isFunction(phases.oninertiastart)) { this[action + 'inertiastart'  ] = phases.oninertiastart  ; }
            }

            return this;
        },

        /*\
         * Interactable.draggable
         [ method ]
         *
         * Gets or sets whether drag actions can be performed on the
         * Interactable
         *
         = (boolean) Indicates if this can be the target of drag events
         | var isDraggable = interact('ul li').draggable();
         * or
         - options (boolean | object) #optional true/false or An object with event listeners to be fired on drag events (object makes the Interactable draggable)
         = (object) This Interactable
         | interact(element).draggable({
         |     onstart: function (event) {},
         |     onmove : function (event) {},
         |     onend  : function (event) {},
         |
         |     // the axis in which the first movement must be
         |     // for the drag sequence to start
         |     // 'xy' by default - any direction
         |     axis: 'x' || 'y' || 'xy',
         |
         |     // max number of drags that can happen concurrently
         |     // with elements of this Interactable. Infinity by default
         |     max: Infinity,
         |
         |     // max number of drags that can target the same element+Interactable
         |     // 1 by default
         |     maxPerElement: 2
         | });
        \*/
        draggable: function (options) {
            if (isObject(options)) {
                this.options.drag.enabled = options.enabled === false? false: true;
                this.setPerAction('drag', options);
                this.setOnEvents('drag', options);

                if (/^x$|^y$|^xy$/.test(options.axis)) {
                    this.options.drag.axis = options.axis;
                }
                else if (options.axis === null) {
                    delete this.options.drag.axis;
                }

                return this;
            }

            if (isBool(options)) {
                this.options.drag.enabled = options;

                return this;
            }

            return this.options.drag;
        },

        setPerAction: function (action, options) {
            // for all the default per-action options
            for (var option in options) {
                // if this option exists for this action
                if (option in defaultOptions[action]) {
                    // if the option in the options arg is an object value
                    if (isObject(options[option])) {
                        // duplicate the object
                        this.options[action][option] = extend(this.options[action][option] || {}, options[option]);

                        if (isObject(defaultOptions.perAction[option]) && 'enabled' in defaultOptions.perAction[option]) {
                            this.options[action][option].enabled = options[option].enabled === false? false : true;
                        }
                    }
                    else if (isBool(options[option]) && isObject(defaultOptions.perAction[option])) {
                        this.options[action][option].enabled = options[option];
                    }
                    else if (options[option] !== undefined) {
                        // or if it's not undefined, do a plain assignment
                        this.options[action][option] = options[option];
                    }
                }
            }
        },

        /*\
         * Interactable.dropzone
         [ method ]
         *
         * Returns or sets whether elements can be dropped onto this
         * Interactable to trigger drop events
         *
         * Dropzones can receive the following events:
         *  - `dropactivate` and `dropdeactivate` when an acceptable drag starts and ends
         *  - `dragenter` and `dragleave` when a draggable enters and leaves the dropzone
         *  - `dragmove` when a draggable that has entered the dropzone is moved
         *  - `drop` when a draggable is dropped into this dropzone
         *
         *  Use the `accept` option to allow only elements that match the given CSS selector or element.
         *
         *  Use the `overlap` option to set how drops are checked for. The allowed values are:
         *   - `'pointer'`, the pointer must be over the dropzone (default)
         *   - `'center'`, the draggable element's center must be over the dropzone
         *   - a number from 0-1 which is the `(intersection area) / (draggable area)`.
         *       e.g. `0.5` for drop to happen when half of the area of the
         *       draggable is over the dropzone
         *
         - options (boolean | object | null) #optional The new value to be set.
         | interact('.drop').dropzone({
         |   accept: '.can-drop' || document.getElementById('single-drop'),
         |   overlap: 'pointer' || 'center' || zeroToOne
         | }
         = (boolean | object) The current setting or this Interactable
        \*/
        dropzone: function (options) {
            if (isObject(options)) {
                this.options.drop.enabled = options.enabled === false? false: true;
                this.setOnEvents('drop', options);

                if (/^(pointer|center)$/.test(options.overlap)) {
                    this.options.drop.overlap = options.overlap;
                }
                else if (isNumber(options.overlap)) {
                    this.options.drop.overlap = Math.max(Math.min(1, options.overlap), 0);
                }
                if ('accept' in options) {
                  this.options.drop.accept = options.accept;
                }
                if ('checker' in options) {
                  this.options.drop.checker = options.checker;
                }

                return this;
            }

            if (isBool(options)) {
                this.options.drop.enabled = options;

                return this;
            }

            return this.options.drop;
        },

        dropCheck: function (dragEvent, event, draggable, draggableElement, dropElement, rect) {
            var dropped = false;

            // if the dropzone has no rect (eg. display: none)
            // call the custom dropChecker or just return false
            if (!(rect = rect || this.getRect(dropElement))) {
                return (this.options.drop.checker
                    ? this.options.drop.checker(dragEvent, event, dropped, this, dropElement, draggable, draggableElement)
                    : false);
            }

            var dropOverlap = this.options.drop.overlap;

            if (dropOverlap === 'pointer') {
                var page = getPageXY(dragEvent),
                    origin = getOriginXY(draggable, draggableElement),
                    horizontal,
                    vertical;

                page.x += origin.x;
                page.y += origin.y;

                horizontal = (page.x > rect.left) && (page.x < rect.right);
                vertical   = (page.y > rect.top ) && (page.y < rect.bottom);

                dropped = horizontal && vertical;
            }

            var dragRect = draggable.getRect(draggableElement);

            if (dropOverlap === 'center') {
                var cx = dragRect.left + dragRect.width  / 2,
                    cy = dragRect.top  + dragRect.height / 2;

                dropped = cx >= rect.left && cx <= rect.right && cy >= rect.top && cy <= rect.bottom;
            }

            if (isNumber(dropOverlap)) {
                var overlapArea  = (Math.max(0, Math.min(rect.right , dragRect.right ) - Math.max(rect.left, dragRect.left))
                                  * Math.max(0, Math.min(rect.bottom, dragRect.bottom) - Math.max(rect.top , dragRect.top ))),
                    overlapRatio = overlapArea / (dragRect.width * dragRect.height);

                dropped = overlapRatio >= dropOverlap;
            }

            if (this.options.drop.checker) {
                dropped = this.options.drop.checker(dragEvent, event, dropped, this, dropElement, draggable, draggableElement);
            }

            return dropped;
        },

        /*\
         * Interactable.dropChecker
         [ method ]
         *
         * DEPRECATED. Use interactable.dropzone({ checker: function... }) instead.
         *
         * Gets or sets the function used to check if a dragged element is
         * over this Interactable.
         *
         - checker (function) #optional The function that will be called when checking for a drop
         = (Function | Interactable) The checker function or this Interactable
         *
         * The checker function takes the following arguments:
         *
         - dragEvent (InteractEvent) The related dragmove or dragend event
         - event (TouchEvent | PointerEvent | MouseEvent) The user move/up/end Event related to the dragEvent
         - dropped (boolean) The value from the default drop checker
         - dropzone (Interactable) The dropzone interactable
         - dropElement (Element) The dropzone element
         - draggable (Interactable) The Interactable being dragged
         - draggableElement (Element) The actual element that's being dragged
         *
         > Usage:
         | interact(target)
         | .dropChecker(function(dragEvent,         // related dragmove or dragend event
         |                       event,             // TouchEvent/PointerEvent/MouseEvent
         |                       dropped,           // bool result of the default checker
         |                       dropzone,          // dropzone Interactable
         |                       dropElement,       // dropzone elemnt
         |                       draggable,         // draggable Interactable
         |                       draggableElement) {// draggable element
         |
         |   return dropped && event.target.hasAttribute('allow-drop');
         | }
        \*/
        dropChecker: function (checker) {
            if (isFunction(checker)) {
                this.options.drop.checker = checker;

                return this;
            }
            if (checker === null) {
                delete this.options.getRect;

                return this;
            }

            return this.options.drop.checker;
        },

        /*\
         * Interactable.accept
         [ method ]
         *
         * Deprecated. add an `accept` property to the options object passed to
         * @Interactable.dropzone instead.
         *
         * Gets or sets the Element or CSS selector match that this
         * Interactable accepts if it is a dropzone.
         *
         - newValue (Element | string | null) #optional
         * If it is an Element, then only that element can be dropped into this dropzone.
         * If it is a string, the element being dragged must match it as a selector.
         * If it is null, the accept options is cleared - it accepts any element.
         *
         = (string | Element | null | Interactable) The current accept option if given `undefined` or this Interactable
        \*/
        accept: function (newValue) {
            if (isElement(newValue)) {
                this.options.drop.accept = newValue;

                return this;
            }

            // test if it is a valid CSS selector
            if (trySelector(newValue)) {
                this.options.drop.accept = newValue;

                return this;
            }

            if (newValue === null) {
                delete this.options.drop.accept;

                return this;
            }

            return this.options.drop.accept;
        },

        /*\
         * Interactable.resizable
         [ method ]
         *
         * Gets or sets whether resize actions can be performed on the
         * Interactable
         *
         = (boolean) Indicates if this can be the target of resize elements
         | var isResizeable = interact('input[type=text]').resizable();
         * or
         - options (boolean | object) #optional true/false or An object with event listeners to be fired on resize events (object makes the Interactable resizable)
         = (object) This Interactable
         | interact(element).resizable({
         |     onstart: function (event) {},
         |     onmove : function (event) {},
         |     onend  : function (event) {},
         |
         |     edges: {
         |       top   : true,       // Use pointer coords to check for resize.
         |       left  : false,      // Disable resizing from left edge.
         |       bottom: '.resize-s',// Resize if pointer target matches selector
         |       right : handleEl    // Resize if pointer target is the given Element
         |     },
         |
         |     // Width and height can be adjusted independently. When `true`, width and
         |     // height are adjusted at a 1:1 ratio.
         |     square: false,
         |
         |     // Width and height can be adjusted independently. When `true`, width and
         |     // height maintain the aspect ratio they had when resizing started.
         |     preserveAspectRatio: false,
         |
         |     // a value of 'none' will limit the resize rect to a minimum of 0x0
         |     // 'negate' will allow the rect to have negative width/height
         |     // 'reposition' will keep the width/height positive by swapping
         |     // the top and bottom edges and/or swapping the left and right edges
         |     invert: 'none' || 'negate' || 'reposition'
         |
         |     // limit multiple resizes.
         |     // See the explanation in the @Interactable.draggable example
         |     max: Infinity,
         |     maxPerElement: 1,
         | });
        \*/
        resizable: function (options) {
            if (isObject(options)) {
                this.options.resize.enabled = options.enabled === false? false: true;
                this.setPerAction('resize', options);
                this.setOnEvents('resize', options);

                if (/^x$|^y$|^xy$/.test(options.axis)) {
                    this.options.resize.axis = options.axis;
                }
                else if (options.axis === null) {
                    this.options.resize.axis = defaultOptions.resize.axis;
                }

                if (isBool(options.preserveAspectRatio)) {
                    this.options.resize.preserveAspectRatio = options.preserveAspectRatio;
                }
                else if (isBool(options.square)) {
                    this.options.resize.square = options.square;
                }

                return this;
            }
            if (isBool(options)) {
                this.options.resize.enabled = options;

                return this;
            }
            return this.options.resize;
        },

        /*\
         * Interactable.squareResize
         [ method ]
         *
         * Deprecated. Add a `square: true || false` property to @Interactable.resizable instead
         *
         * Gets or sets whether resizing is forced 1:1 aspect
         *
         = (boolean) Current setting
         *
         * or
         *
         - newValue (boolean) #optional
         = (object) this Interactable
        \*/
        squareResize: function (newValue) {
            if (isBool(newValue)) {
                this.options.resize.square = newValue;

                return this;
            }

            if (newValue === null) {
                delete this.options.resize.square;

                return this;
            }

            return this.options.resize.square;
        },

        /*\
         * Interactable.gesturable
         [ method ]
         *
         * Gets or sets whether multitouch gestures can be performed on the
         * Interactable's element
         *
         = (boolean) Indicates if this can be the target of gesture events
         | var isGestureable = interact(element).gesturable();
         * or
         - options (boolean | object) #optional true/false or An object with event listeners to be fired on gesture events (makes the Interactable gesturable)
         = (object) this Interactable
         | interact(element).gesturable({
         |     onstart: function (event) {},
         |     onmove : function (event) {},
         |     onend  : function (event) {},
         |
         |     // limit multiple gestures.
         |     // See the explanation in @Interactable.draggable example
         |     max: Infinity,
         |     maxPerElement: 1,
         | });
        \*/
        gesturable: function (options) {
            if (isObject(options)) {
                this.options.gesture.enabled = options.enabled === false? false: true;
                this.setPerAction('gesture', options);
                this.setOnEvents('gesture', options);

                return this;
            }

            if (isBool(options)) {
                this.options.gesture.enabled = options;

                return this;
            }

            return this.options.gesture;
        },

        /*\
         * Interactable.autoScroll
         [ method ]
         **
         * Deprecated. Add an `autoscroll` property to the options object
         * passed to @Interactable.draggable or @Interactable.resizable instead.
         *
         * Returns or sets whether dragging and resizing near the edges of the
         * window/container trigger autoScroll for this Interactable
         *
         = (object) Object with autoScroll properties
         *
         * or
         *
         - options (object | boolean) #optional
         * options can be:
         * - an object with margin, distance and interval properties,
         * - true or false to enable or disable autoScroll or
         = (Interactable) this Interactable
        \*/
        autoScroll: function (options) {
            if (isObject(options)) {
                options = extend({ actions: ['drag', 'resize']}, options);
            }
            else if (isBool(options)) {
                options = { actions: ['drag', 'resize'], enabled: options };
            }

            return this.setOptions('autoScroll', options);
        },

        /*\
         * Interactable.snap
         [ method ]
         **
         * Deprecated. Add a `snap` property to the options object passed
         * to @Interactable.draggable or @Interactable.resizable instead.
         *
         * Returns or sets if and how action coordinates are snapped. By
         * default, snapping is relative to the pointer coordinates. You can
         * change this by setting the
         * [`elementOrigin`](https://github.com/taye/interact.js/pull/72).
         **
         = (boolean | object) `false` if snap is disabled; object with snap properties if snap is enabled
         **
         * or
         **
         - options (object | boolean | null) #optional
         = (Interactable) this Interactable
         > Usage
         | interact(document.querySelector('#thing')).snap({
         |     targets: [
         |         // snap to this specific point
         |         {
         |             x: 100,
         |             y: 100,
         |             range: 25
         |         },
         |         // give this function the x and y page coords and snap to the object returned
         |         function (x, y) {
         |             return {
         |                 x: x,
         |                 y: (75 + 50 * Math.sin(x * 0.04)),
         |                 range: 40
         |             };
         |         },
         |         // create a function that snaps to a grid
         |         interact.createSnapGrid({
         |             x: 50,
         |             y: 50,
         |             range: 10,              // optional
         |             offset: { x: 5, y: 10 } // optional
         |         })
         |     ],
         |     // do not snap during normal movement.
         |     // Instead, trigger only one snapped move event
         |     // immediately before the end event.
         |     endOnly: true,
         |
         |     relativePoints: [
         |         { x: 0, y: 0 },  // snap relative to the top left of the element
         |         { x: 1, y: 1 },  // and also to the bottom right
         |     ],  
         |
         |     // offset the snap target coordinates
         |     // can be an object with x/y or 'startCoords'
         |     offset: { x: 50, y: 50 }
         |   }
         | });
        \*/
        snap: function (options) {
            var ret = this.setOptions('snap', options);

            if (ret === this) { return this; }

            return ret.drag;
        },

        setOptions: function (option, options) {
            var actions = options && isArray(options.actions)
                    ? options.actions
                    : ['drag'];

            var i;

            if (isObject(options) || isBool(options)) {
                for (i = 0; i < actions.length; i++) {
                    var action = /resize/.test(actions[i])? 'resize' : actions[i];

                    if (!isObject(this.options[action])) { continue; }

                    var thisOption = this.options[action][option];

                    if (isObject(options)) {
                        extend(thisOption, options);
                        thisOption.enabled = options.enabled === false? false: true;

                        if (option === 'snap') {
                            if (thisOption.mode === 'grid') {
                                thisOption.targets = [
                                    interact.createSnapGrid(extend({
                                        offset: thisOption.gridOffset || { x: 0, y: 0 }
                                    }, thisOption.grid || {}))
                                ];
                            }
                            else if (thisOption.mode === 'anchor') {
                                thisOption.targets = thisOption.anchors;
                            }
                            else if (thisOption.mode === 'path') {
                                thisOption.targets = thisOption.paths;
                            }

                            if ('elementOrigin' in options) {
                                thisOption.relativePoints = [options.elementOrigin];
                            }
                        }
                    }
                    else if (isBool(options)) {
                        thisOption.enabled = options;
                    }
                }

                return this;
            }

            var ret = {},
                allActions = ['drag', 'resize', 'gesture'];

            for (i = 0; i < allActions.length; i++) {
                if (option in defaultOptions[allActions[i]]) {
                    ret[allActions[i]] = this.options[allActions[i]][option];
                }
            }

            return ret;
        },


        /*\
         * Interactable.inertia
         [ method ]
         **
         * Deprecated. Add an `inertia` property to the options object passed
         * to @Interactable.draggable or @Interactable.resizable instead.
         *
         * Returns or sets if and how events continue to run after the pointer is released
         **
         = (boolean | object) `false` if inertia is disabled; `object` with inertia properties if inertia is enabled
         **
         * or
         **
         - options (object | boolean | null) #optional
         = (Interactable) this Interactable
         > Usage
         | // enable and use default settings
         | interact(element).inertia(true);
         |
         | // enable and use custom settings
         | interact(element).inertia({
         |     // value greater than 0
         |     // high values slow the object down more quickly
         |     resistance     : 16,
         |
         |     // the minimum launch speed (pixels per second) that results in inertia start
         |     minSpeed       : 200,
         |
         |     // inertia will stop when the object slows down to this speed
         |     endSpeed       : 20,
         |
         |     // boolean; should actions be resumed when the pointer goes down during inertia
         |     allowResume    : true,
         |
         |     // boolean; should the jump when resuming from inertia be ignored in event.dx/dy
         |     zeroResumeDelta: false,
         |
         |     // if snap/restrict are set to be endOnly and inertia is enabled, releasing
         |     // the pointer without triggering inertia will animate from the release
         |     // point to the snaped/restricted point in the given amount of time (ms)
         |     smoothEndDuration: 300,
         |
         |     // an array of action types that can have inertia (no gesture)
         |     actions        : ['drag', 'resize']
         | });
         |
         | // reset custom settings and use all defaults
         | interact(element).inertia(null);
        \*/
        inertia: function (options) {
            var ret = this.setOptions('inertia', options);

            if (ret === this) { return this; }

            return ret.drag;
        },

        getAction: function (pointer, event, interaction, element) {
            var action = this.defaultActionChecker(pointer, interaction, element);

            if (this.options.actionChecker) {
                return this.options.actionChecker(pointer, event, action, this, element, interaction);
            }

            return action;
        },

        defaultActionChecker: defaultActionChecker,

        /*\
         * Interactable.actionChecker
         [ method ]
         *
         * Gets or sets the function used to check action to be performed on
         * pointerDown
         *
         - checker (function | null) #optional A function which takes a pointer event, defaultAction string, interactable, element and interaction as parameters and returns an object with name property 'drag' 'resize' or 'gesture' and optionally an `edges` object with boolean 'top', 'left', 'bottom' and right props.
         = (Function | Interactable) The checker function or this Interactable
         *
         | interact('.resize-drag')
         |   .resizable(true)
         |   .draggable(true)
         |   .actionChecker(function (pointer, event, action, interactable, element, interaction) {
         |
         |   if (interact.matchesSelector(event.target, '.drag-handle') {
         |     // force drag with handle target
         |     action.name = drag;
         |   }
         |   else {
         |     // resize from the top and right edges
         |     action.name  = 'resize';
         |     action.edges = { top: true, right: true };
         |   }
         |
         |   return action;
         | });
        \*/
        actionChecker: function (checker) {
            if (isFunction(checker)) {
                this.options.actionChecker = checker;

                return this;
            }

            if (checker === null) {
                delete this.options.actionChecker;

                return this;
            }

            return this.options.actionChecker;
        },

        /*\
         * Interactable.getRect
         [ method ]
         *
         * The default function to get an Interactables bounding rect. Can be
         * overridden using @Interactable.rectChecker.
         *
         - element (Element) #optional The element to measure.
         = (object) The object's bounding rectangle.
         o {
         o     top   : 0,
         o     left  : 0,
         o     bottom: 0,
         o     right : 0,
         o     width : 0,
         o     height: 0
         o }
        \*/
        getRect: function rectCheck (element) {
            element = element || this._element;

            if (this.selector && !(isElement(element))) {
                element = this._context.querySelector(this.selector);
            }

            return getElementRect(element);
        },

        /*\
         * Interactable.rectChecker
         [ method ]
         *
         * Returns or sets the function used to calculate the interactable's
         * element's rectangle
         *
         - checker (function) #optional A function which returns this Interactable's bounding rectangle. See @Interactable.getRect
         = (function | object) The checker function or this Interactable
        \*/
        rectChecker: function (checker) {
            if (isFunction(checker)) {
                this.getRect = checker;

                return this;
            }

            if (checker === null) {
                delete this.options.getRect;

                return this;
            }

            return this.getRect;
        },

        /*\
         * Interactable.styleCursor
         [ method ]
         *
         * Returns or sets whether the action that would be performed when the
         * mouse on the element are checked on `mousemove` so that the cursor
         * may be styled appropriately
         *
         - newValue (boolean) #optional
         = (boolean | Interactable) The current setting or this Interactable
        \*/
        styleCursor: function (newValue) {
            if (isBool(newValue)) {
                this.options.styleCursor = newValue;

                return this;
            }

            if (newValue === null) {
                delete this.options.styleCursor;

                return this;
            }

            return this.options.styleCursor;
        },

        /*\
         * Interactable.preventDefault
         [ method ]
         *
         * Returns or sets whether to prevent the browser's default behaviour
         * in response to pointer events. Can be set to:
         *  - `'always'` to always prevent
         *  - `'never'` to never prevent
         *  - `'auto'` to let interact.js try to determine what would be best
         *
         - newValue (string) #optional `true`, `false` or `'auto'`
         = (string | Interactable) The current setting or this Interactable
        \*/
        preventDefault: function (newValue) {
            if (/^(always|never|auto)$/.test(newValue)) {
                this.options.preventDefault = newValue;
                return this;
            }

            if (isBool(newValue)) {
                this.options.preventDefault = newValue? 'always' : 'never';
                return this;
            }

            return this.options.preventDefault;
        },

        /*\
         * Interactable.origin
         [ method ]
         *
         * Gets or sets the origin of the Interactable's element.  The x and y
         * of the origin will be subtracted from action event coordinates.
         *
         - origin (object | string) #optional An object eg. { x: 0, y: 0 } or string 'parent', 'self' or any CSS selector
         * OR
         - origin (Element) #optional An HTML or SVG Element whose rect will be used
         **
         = (object) The current origin or this Interactable
        \*/
        origin: function (newValue) {
            if (trySelector(newValue)) {
                this.options.origin = newValue;
                return this;
            }
            else if (isObject(newValue)) {
                this.options.origin = newValue;
                return this;
            }

            return this.options.origin;
        },

        /*\
         * Interactable.deltaSource
         [ method ]
         *
         * Returns or sets the mouse coordinate types used to calculate the
         * movement of the pointer.
         *
         - newValue (string) #optional Use 'client' if you will be scrolling while interacting; Use 'page' if you want autoScroll to work
         = (string | object) The current deltaSource or this Interactable
        \*/
        deltaSource: function (newValue) {
            if (newValue === 'page' || newValue === 'client') {
                this.options.deltaSource = newValue;

                return this;
            }

            return this.options.deltaSource;
        },

        /*\
         * Interactable.restrict
         [ method ]
         **
         * Deprecated. Add a `restrict` property to the options object passed to
         * @Interactable.draggable, @Interactable.resizable or @Interactable.gesturable instead.
         *
         * Returns or sets the rectangles within which actions on this
         * interactable (after snap calculations) are restricted. By default,
         * restricting is relative to the pointer coordinates. You can change
         * this by setting the
         * [`elementRect`](https://github.com/taye/interact.js/pull/72).
         **
         - options (object) #optional an object with keys drag, resize, and/or gesture whose values are rects, Elements, CSS selectors, or 'parent' or 'self'
         = (object) The current restrictions object or this Interactable
         **
         | interact(element).restrict({
         |     // the rect will be `interact.getElementRect(element.parentNode)`
         |     drag: element.parentNode,
         |
         |     // x and y are relative to the the interactable's origin
         |     resize: { x: 100, y: 100, width: 200, height: 200 }
         | })
         |
         | interact('.draggable').restrict({
         |     // the rect will be the selected element's parent
         |     drag: 'parent',
         |
         |     // do not restrict during normal movement.
         |     // Instead, trigger only one restricted move event
         |     // immediately before the end event.
         |     endOnly: true,
         |
         |     // https://github.com/taye/interact.js/pull/72#issue-41813493
         |     elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
         | });
        \*/
        restrict: function (options) {
            if (!isObject(options)) {
                return this.setOptions('restrict', options);
            }

            var actions = ['drag', 'resize', 'gesture'],
                ret;

            for (var i = 0; i < actions.length; i++) {
                var action = actions[i];

                if (action in options) {
                    var perAction = extend({
                            actions: [action],
                            restriction: options[action]
                        }, options);

                    ret = this.setOptions('restrict', perAction);
                }
            }

            return ret;
        },

        /*\
         * Interactable.context
         [ method ]
         *
         * Gets the selector context Node of the Interactable. The default is `window.document`.
         *
         = (Node) The context Node of this Interactable
         **
        \*/
        context: function () {
            return this._context;
        },

        _context: document,

        /*\
         * Interactable.ignoreFrom
         [ method ]
         *
         * If the target of the `mousedown`, `pointerdown` or `touchstart`
         * event or any of it's parents match the given CSS selector or
         * Element, no drag/resize/gesture is started.
         *
         - newValue (string | Element | null) #optional a CSS selector string, an Element or `null` to not ignore any elements
         = (string | Element | object) The current ignoreFrom value or this Interactable
         **
         | interact(element, { ignoreFrom: document.getElementById('no-action') });
         | // or
         | interact(element).ignoreFrom('input, textarea, a');
        \*/
        ignoreFrom: function (newValue) {
            if (trySelector(newValue)) {            // CSS selector to match event.target
                this.options.ignoreFrom = newValue;
                return this;
            }

            if (isElement(newValue)) {              // specific element
                this.options.ignoreFrom = newValue;
                return this;
            }

            return this.options.ignoreFrom;
        },

        /*\
         * Interactable.allowFrom
         [ method ]
         *
         * A drag/resize/gesture is started only If the target of the
         * `mousedown`, `pointerdown` or `touchstart` event or any of it's
         * parents match the given CSS selector or Element.
         *
         - newValue (string | Element | null) #optional a CSS selector string, an Element or `null` to allow from any element
         = (string | Element | object) The current allowFrom value or this Interactable
         **
         | interact(element, { allowFrom: document.getElementById('drag-handle') });
         | // or
         | interact(element).allowFrom('.handle');
        \*/
        allowFrom: function (newValue) {
            if (trySelector(newValue)) {            // CSS selector to match event.target
                this.options.allowFrom = newValue;
                return this;
            }

            if (isElement(newValue)) {              // specific element
                this.options.allowFrom = newValue;
                return this;
            }

            return this.options.allowFrom;
        },

        /*\
         * Interactable.element
         [ method ]
         *
         * If this is not a selector Interactable, it returns the element this
         * interactable represents
         *
         = (Element) HTML / SVG Element
        \*/
        element: function () {
            return this._element;
        },

        /*\
         * Interactable.fire
         [ method ]
         *
         * Calls listeners for the given InteractEvent type bound globally
         * and directly to this Interactable
         *
         - iEvent (InteractEvent) The InteractEvent object to be fired on this Interactable
         = (Interactable) this Interactable
        \*/
        fire: function (iEvent) {
            if (!(iEvent && iEvent.type) || !contains(eventTypes, iEvent.type)) {
                return this;
            }

            var listeners,
                i,
                len,
                onEvent = 'on' + iEvent.type,
                funcName = '';

            // Interactable#on() listeners
            if (iEvent.type in this._iEvents) {
                listeners = this._iEvents[iEvent.type];

                for (i = 0, len = listeners.length; i < len && !iEvent.immediatePropagationStopped; i++) {
                    funcName = listeners[i].name;
                    listeners[i](iEvent);
                }
            }

            // interactable.onevent listener
            if (isFunction(this[onEvent])) {
                funcName = this[onEvent].name;
                this[onEvent](iEvent);
            }

            // interact.on() listeners
            if (iEvent.type in globalEvents && (listeners = globalEvents[iEvent.type]))  {

                for (i = 0, len = listeners.length; i < len && !iEvent.immediatePropagationStopped; i++) {
                    funcName = listeners[i].name;
                    listeners[i](iEvent);
                }
            }

            return this;
        },

        /*\
         * Interactable.on
         [ method ]
         *
         * Binds a listener for an InteractEvent or DOM event.
         *
         - eventType  (string | array | object) The types of events to listen for
         - listener   (function) The function to be called on the given event(s)
         - useCapture (boolean) #optional useCapture flag for addEventListener
         = (object) This Interactable
        \*/
        on: function (eventType, listener, useCapture) {
            var i;

            if (isString(eventType) && eventType.search(' ') !== -1) {
                eventType = eventType.trim().split(/ +/);
            }

            if (isArray(eventType)) {
                for (i = 0; i < eventType.length; i++) {
                    this.on(eventType[i], listener, useCapture);
                }

                return this;
            }

            if (isObject(eventType)) {
                for (var prop in eventType) {
                    this.on(prop, eventType[prop], listener);
                }

                return this;
            }

            if (eventType === 'wheel') {
                eventType = wheelEvent;
            }

            // convert to boolean
            useCapture = useCapture? true: false;

            if (contains(eventTypes, eventType)) {
                // if this type of event was never bound to this Interactable
                if (!(eventType in this._iEvents)) {
                    this._iEvents[eventType] = [listener];
                }
                else {
                    this._iEvents[eventType].push(listener);
                }
            }
            // delegated event for selector
            else if (this.selector) {
                if (!delegatedEvents[eventType]) {
                    delegatedEvents[eventType] = {
                        selectors: [],
                        contexts : [],
                        listeners: []
                    };

                    // add delegate listener functions
                    for (i = 0; i < documents.length; i++) {
                        events.add(documents[i], eventType, delegateListener);
                        events.add(documents[i], eventType, delegateUseCapture, true);
                    }
                }

                var delegated = delegatedEvents[eventType],
                    index;

                for (index = delegated.selectors.length - 1; index >= 0; index--) {
                    if (delegated.selectors[index] === this.selector
                        && delegated.contexts[index] === this._context) {
                        break;
                    }
                }

                if (index === -1) {
                    index = delegated.selectors.length;

                    delegated.selectors.push(this.selector);
                    delegated.contexts .push(this._context);
                    delegated.listeners.push([]);
                }

                // keep listener and useCapture flag
                delegated.listeners[index].push([listener, useCapture]);
            }
            else {
                events.add(this._element, eventType, listener, useCapture);
            }

            return this;
        },

        /*\
         * Interactable.off
         [ method ]
         *
         * Removes an InteractEvent or DOM event listener
         *
         - eventType  (string | array | object) The types of events that were listened for
         - listener   (function) The listener function to be removed
         - useCapture (boolean) #optional useCapture flag for removeEventListener
         = (object) This Interactable
        \*/
        off: function (eventType, listener, useCapture) {
            var i;

            if (isString(eventType) && eventType.search(' ') !== -1) {
                eventType = eventType.trim().split(/ +/);
            }

            if (isArray(eventType)) {
                for (i = 0; i < eventType.length; i++) {
                    this.off(eventType[i], listener, useCapture);
                }

                return this;
            }

            if (isObject(eventType)) {
                for (var prop in eventType) {
                    this.off(prop, eventType[prop], listener);
                }

                return this;
            }

            var eventList,
                index = -1;

            // convert to boolean
            useCapture = useCapture? true: false;

            if (eventType === 'wheel') {
                eventType = wheelEvent;
            }

            // if it is an action event type
            if (contains(eventTypes, eventType)) {
                eventList = this._iEvents[eventType];

                if (eventList && (index = indexOf(eventList, listener)) !== -1) {
                    this._iEvents[eventType].splice(index, 1);
                }
            }
            // delegated event
            else if (this.selector) {
                var delegated = delegatedEvents[eventType],
                    matchFound = false;

                if (!delegated) { return this; }

                // count from last index of delegated to 0
                for (index = delegated.selectors.length - 1; index >= 0; index--) {
                    // look for matching selector and context Node
                    if (delegated.selectors[index] === this.selector
                        && delegated.contexts[index] === this._context) {

                        var listeners = delegated.listeners[index];

                        // each item of the listeners array is an array: [function, useCaptureFlag]
                        for (i = listeners.length - 1; i >= 0; i--) {
                            var fn = listeners[i][0],
                                useCap = listeners[i][1];

                            // check if the listener functions and useCapture flags match
                            if (fn === listener && useCap === useCapture) {
                                // remove the listener from the array of listeners
                                listeners.splice(i, 1);

                                // if all listeners for this interactable have been removed
                                // remove the interactable from the delegated arrays
                                if (!listeners.length) {
                                    delegated.selectors.splice(index, 1);
                                    delegated.contexts .splice(index, 1);
                                    delegated.listeners.splice(index, 1);

                                    // remove delegate function from context
                                    events.remove(this._context, eventType, delegateListener);
                                    events.remove(this._context, eventType, delegateUseCapture, true);

                                    // remove the arrays if they are empty
                                    if (!delegated.selectors.length) {
                                        delegatedEvents[eventType] = null;
                                    }
                                }

                                // only remove one listener
                                matchFound = true;
                                break;
                            }
                        }

                        if (matchFound) { break; }
                    }
                }
            }
            // remove listener from this Interatable's element
            else {
                events.remove(this._element, eventType, listener, useCapture);
            }

            return this;
        },

        /*\
         * Interactable.set
         [ method ]
         *
         * Reset the options of this Interactable
         - options (object) The new settings to apply
         = (object) This Interactable
        \*/
        set: function (options) {
            if (!isObject(options)) {
                options = {};
            }

            this.options = extend({}, defaultOptions.base);

            var i,
                actions = ['drag', 'drop', 'resize', 'gesture'],
                methods = ['draggable', 'dropzone', 'resizable', 'gesturable'],
                perActions = extend(extend({}, defaultOptions.perAction), options[action] || {});

            for (i = 0; i < actions.length; i++) {
                var action = actions[i];

                this.options[action] = extend({}, defaultOptions[action]);

                this.setPerAction(action, perActions);

                this[methods[i]](options[action]);
            }

            var settings = [
                    'accept', 'actionChecker', 'allowFrom', 'deltaSource',
                    'dropChecker', 'ignoreFrom', 'origin', 'preventDefault',
                    'rectChecker', 'styleCursor'
                ];

            for (i = 0, len = settings.length; i < len; i++) {
                var setting = settings[i];

                this.options[setting] = defaultOptions.base[setting];

                if (setting in options) {
                    this[setting](options[setting]);
                }
            }

            return this;
        },

        /*\
         * Interactable.unset
         [ method ]
         *
         * Remove this interactable from the list of interactables and remove
         * it's drag, drop, resize and gesture capabilities
         *
         = (object) @interact
        \*/
        unset: function () {
            events.remove(this._element, 'all');

            if (!isString(this.selector)) {
                events.remove(this, 'all');
                if (this.options.styleCursor) {
                    this._element.style.cursor = '';
                }
            }
            else {
                // remove delegated events
                for (var type in delegatedEvents) {
                    var delegated = delegatedEvents[type];

                    for (var i = 0; i < delegated.selectors.length; i++) {
                        if (delegated.selectors[i] === this.selector
                            && delegated.contexts[i] === this._context) {

                            delegated.selectors.splice(i, 1);
                            delegated.contexts .splice(i, 1);
                            delegated.listeners.splice(i, 1);

                            // remove the arrays if they are empty
                            if (!delegated.selectors.length) {
                                delegatedEvents[type] = null;
                            }
                        }

                        events.remove(this._context, type, delegateListener);
                        events.remove(this._context, type, delegateUseCapture, true);

                        break;
                    }
                }
            }

            this.dropzone(false);

            interactables.splice(indexOf(interactables, this), 1);

            return interact;
        }
    };

    function warnOnce (method, message) {
        var warned = false;

        return function () {
            if (!warned) {
                window.console.warn(message);
                warned = true;
            }

            return method.apply(this, arguments);
        };
    }

    Interactable.prototype.snap = warnOnce(Interactable.prototype.snap,
         'Interactable#snap is deprecated. See the new documentation for snapping at http://interactjs.io/docs/snapping');
    Interactable.prototype.restrict = warnOnce(Interactable.prototype.restrict,
         'Interactable#restrict is deprecated. See the new documentation for resticting at http://interactjs.io/docs/restriction');
    Interactable.prototype.inertia = warnOnce(Interactable.prototype.inertia,
         'Interactable#inertia is deprecated. See the new documentation for inertia at http://interactjs.io/docs/inertia');
    Interactable.prototype.autoScroll = warnOnce(Interactable.prototype.autoScroll,
         'Interactable#autoScroll is deprecated. See the new documentation for autoScroll at http://interactjs.io/docs/#autoscroll');
    Interactable.prototype.squareResize = warnOnce(Interactable.prototype.squareResize,
         'Interactable#squareResize is deprecated. See http://interactjs.io/docs/#resize-square');

    Interactable.prototype.accept = warnOnce(Interactable.prototype.accept,
         'Interactable#accept is deprecated. use Interactable#dropzone({ accept: target }) instead');
    Interactable.prototype.dropChecker = warnOnce(Interactable.prototype.dropChecker,
         'Interactable#dropChecker is deprecated. use Interactable#dropzone({ dropChecker: checkerFunction }) instead');
    Interactable.prototype.context = warnOnce(Interactable.prototype.context,
         'Interactable#context as a method is deprecated. It will soon be a DOM Node instead');

    /*\
     * interact.isSet
     [ method ]
     *
     * Check if an element has been set
     - element (Element) The Element being searched for
     = (boolean) Indicates if the element or CSS selector was previously passed to interact
    \*/
    interact.isSet = function(element, options) {
        return interactables.indexOfElement(element, options && options.context) !== -1;
    };

    /*\
     * interact.on
     [ method ]
     *
     * Adds a global listener for an InteractEvent or adds a DOM event to
     * `document`
     *
     - type       (string | array | object) The types of events to listen for
     - listener   (function) The function to be called on the given event(s)
     - useCapture (boolean) #optional useCapture flag for addEventListener
     = (object) interact
    \*/
    interact.on = function (type, listener, useCapture) {
        if (isString(type) && type.search(' ') !== -1) {
            type = type.trim().split(/ +/);
        }

        if (isArray(type)) {
            for (var i = 0; i < type.length; i++) {
                interact.on(type[i], listener, useCapture);
            }

            return interact;
        }

        if (isObject(type)) {
            for (var prop in type) {
                interact.on(prop, type[prop], listener);
            }

            return interact;
        }

        // if it is an InteractEvent type, add listener to globalEvents
        if (contains(eventTypes, type)) {
            // if this type of event was never bound
            if (!globalEvents[type]) {
                globalEvents[type] = [listener];
            }
            else {
                globalEvents[type].push(listener);
            }
        }
        // If non InteractEvent type, addEventListener to document
        else {
            events.add(document, type, listener, useCapture);
        }

        return interact;
    };

    /*\
     * interact.off
     [ method ]
     *
     * Removes a global InteractEvent listener or DOM event from `document`
     *
     - type       (string | array | object) The types of events that were listened for
     - listener   (function) The listener function to be removed
     - useCapture (boolean) #optional useCapture flag for removeEventListener
     = (object) interact
     \*/
    interact.off = function (type, listener, useCapture) {
        if (isString(type) && type.search(' ') !== -1) {
            type = type.trim().split(/ +/);
        }

        if (isArray(type)) {
            for (var i = 0; i < type.length; i++) {
                interact.off(type[i], listener, useCapture);
            }

            return interact;
        }

        if (isObject(type)) {
            for (var prop in type) {
                interact.off(prop, type[prop], listener);
            }

            return interact;
        }

        if (!contains(eventTypes, type)) {
            events.remove(document, type, listener, useCapture);
        }
        else {
            var index;

            if (type in globalEvents
                && (index = indexOf(globalEvents[type], listener)) !== -1) {
                globalEvents[type].splice(index, 1);
            }
        }

        return interact;
    };

    /*\
     * interact.enableDragging
     [ method ]
     *
     * Deprecated.
     *
     * Returns or sets whether dragging is enabled for any Interactables
     *
     - newValue (boolean) #optional `true` to allow the action; `false` to disable action for all Interactables
     = (boolean | object) The current setting or interact
    \*/
    interact.enableDragging = warnOnce(function (newValue) {
        if (newValue !== null && newValue !== undefined) {
            actionIsEnabled.drag = newValue;

            return interact;
        }
        return actionIsEnabled.drag;
    }, 'interact.enableDragging is deprecated and will soon be removed.');

    /*\
     * interact.enableResizing
     [ method ]
     *
     * Deprecated.
     *
     * Returns or sets whether resizing is enabled for any Interactables
     *
     - newValue (boolean) #optional `true` to allow the action; `false` to disable action for all Interactables
     = (boolean | object) The current setting or interact
    \*/
    interact.enableResizing = warnOnce(function (newValue) {
        if (newValue !== null && newValue !== undefined) {
            actionIsEnabled.resize = newValue;

            return interact;
        }
        return actionIsEnabled.resize;
    }, 'interact.enableResizing is deprecated and will soon be removed.');

    /*\
     * interact.enableGesturing
     [ method ]
     *
     * Deprecated.
     *
     * Returns or sets whether gesturing is enabled for any Interactables
     *
     - newValue (boolean) #optional `true` to allow the action; `false` to disable action for all Interactables
     = (boolean | object) The current setting or interact
    \*/
    interact.enableGesturing = warnOnce(function (newValue) {
        if (newValue !== null && newValue !== undefined) {
            actionIsEnabled.gesture = newValue;

            return interact;
        }
        return actionIsEnabled.gesture;
    }, 'interact.enableGesturing is deprecated and will soon be removed.');

    interact.eventTypes = eventTypes;

    /*\
     * interact.debug
     [ method ]
     *
     * Returns debugging data
     = (object) An object with properties that outline the current state and expose internal functions and variables
    \*/
    interact.debug = function () {
        var interaction = interactions[0] || new Interaction();

        return {
            interactions          : interactions,
            target                : interaction.target,
            dragging              : interaction.dragging,
            resizing              : interaction.resizing,
            gesturing             : interaction.gesturing,
            prepared              : interaction.prepared,
            matches               : interaction.matches,
            matchElements         : interaction.matchElements,

            prevCoords            : interaction.prevCoords,
            startCoords           : interaction.startCoords,

            pointerIds            : interaction.pointerIds,
            pointers              : interaction.pointers,
            addPointer            : listeners.addPointer,
            removePointer         : listeners.removePointer,
            recordPointer        : listeners.recordPointer,

            snap                  : interaction.snapStatus,
            restrict              : interaction.restrictStatus,
            inertia               : interaction.inertiaStatus,

            downTime              : interaction.downTimes[0],
            downEvent             : interaction.downEvent,
            downPointer           : interaction.downPointer,
            prevEvent             : interaction.prevEvent,

            Interactable          : Interactable,
            interactables         : interactables,
            pointerIsDown         : interaction.pointerIsDown,
            defaultOptions        : defaultOptions,
            defaultActionChecker  : defaultActionChecker,

            actionCursors         : actionCursors,
            dragMove              : listeners.dragMove,
            resizeMove            : listeners.resizeMove,
            gestureMove           : listeners.gestureMove,
            pointerUp             : listeners.pointerUp,
            pointerDown           : listeners.pointerDown,
            pointerMove           : listeners.pointerMove,
            pointerHover          : listeners.pointerHover,

            eventTypes            : eventTypes,

            events                : events,
            globalEvents          : globalEvents,
            delegatedEvents       : delegatedEvents,

            prefixedPropREs       : prefixedPropREs
        };
    };

    // expose the functions used to calculate multi-touch properties
    interact.getPointerAverage = pointerAverage;
    interact.getTouchBBox     = touchBBox;
    interact.getTouchDistance = touchDistance;
    interact.getTouchAngle    = touchAngle;

    interact.getElementRect         = getElementRect;
    interact.getElementClientRect   = getElementClientRect;
    interact.matchesSelector        = matchesSelector;
    interact.closest                = closest;

    /*\
     * interact.margin
     [ method ]
     *
     * Deprecated. Use `interact(target).resizable({ margin: number });` instead.
     * Returns or sets the margin for autocheck resizing used in
     * @Interactable.getAction. That is the distance from the bottom and right
     * edges of an element clicking in which will start resizing
     *
     - newValue (number) #optional
     = (number | interact) The current margin value or interact
    \*/
    interact.margin = warnOnce(function (newvalue) {
        if (isNumber(newvalue)) {
            margin = newvalue;

            return interact;
        }
        return margin;
    },
    'interact.margin is deprecated. Use interact(target).resizable({ margin: number }); instead.') ;

    /*\
     * interact.supportsTouch
     [ method ]
     *
     = (boolean) Whether or not the browser supports touch input
    \*/
    interact.supportsTouch = function () {
        return supportsTouch;
    };

    /*\
     * interact.supportsPointerEvent
     [ method ]
     *
     = (boolean) Whether or not the browser supports PointerEvents
    \*/
    interact.supportsPointerEvent = function () {
        return supportsPointerEvent;
    };

    /*\
     * interact.stop
     [ method ]
     *
     * Cancels all interactions (end events are not fired)
     *
     - event (Event) An event on which to call preventDefault()
     = (object) interact
    \*/
    interact.stop = function (event) {
        for (var i = interactions.length - 1; i >= 0; i--) {
            interactions[i].stop(event);
        }

        return interact;
    };

    /*\
     * interact.dynamicDrop
     [ method ]
     *
     * Returns or sets whether the dimensions of dropzone elements are
     * calculated on every dragmove or only on dragstart for the default
     * dropChecker
     *
     - newValue (boolean) #optional True to check on each move. False to check only before start
     = (boolean | interact) The current setting or interact
    \*/
    interact.dynamicDrop = function (newValue) {
        if (isBool(newValue)) {
            //if (dragging && dynamicDrop !== newValue && !newValue) {
                //calcRects(dropzones);
            //}

            dynamicDrop = newValue;

            return interact;
        }
        return dynamicDrop;
    };

    /*\
     * interact.pointerMoveTolerance
     [ method ]
     * Returns or sets the distance the pointer must be moved before an action
     * sequence occurs. This also affects tolerance for tap events.
     *
     - newValue (number) #optional The movement from the start position must be greater than this value
     = (number | Interactable) The current setting or interact
    \*/
    interact.pointerMoveTolerance = function (newValue) {
        if (isNumber(newValue)) {
            pointerMoveTolerance = newValue;

            return this;
        }

        return pointerMoveTolerance;
    };

    /*\
     * interact.maxInteractions
     [ method ]
     **
     * Returns or sets the maximum number of concurrent interactions allowed.
     * By default only 1 interaction is allowed at a time (for backwards
     * compatibility). To allow multiple interactions on the same Interactables
     * and elements, you need to enable it in the draggable, resizable and
     * gesturable `'max'` and `'maxPerElement'` options.
     **
     - newValue (number) #optional Any number. newValue <= 0 means no interactions.
    \*/
    interact.maxInteractions = function (newValue) {
        if (isNumber(newValue)) {
            maxInteractions = newValue;

            return this;
        }

        return maxInteractions;
    };

    interact.createSnapGrid = function (grid) {
        return function (x, y) {
            var offsetX = 0,
                offsetY = 0;

            if (isObject(grid.offset)) {
                offsetX = grid.offset.x;
                offsetY = grid.offset.y;
            }

            var gridx = Math.round((x - offsetX) / grid.x),
                gridy = Math.round((y - offsetY) / grid.y),

                newX = gridx * grid.x + offsetX,
                newY = gridy * grid.y + offsetY;

            return {
                x: newX,
                y: newY,
                range: grid.range
            };
        };
    };

    function endAllInteractions (event) {
        for (var i = 0; i < interactions.length; i++) {
            interactions[i].pointerEnd(event, event);
        }
    }

    function listenToDocument (doc) {
        if (contains(documents, doc)) { return; }

        var win = doc.defaultView || doc.parentWindow;

        // add delegate event listener
        for (var eventType in delegatedEvents) {
            events.add(doc, eventType, delegateListener);
            events.add(doc, eventType, delegateUseCapture, true);
        }

        if (supportsPointerEvent) {
            if (PointerEvent === win.MSPointerEvent) {
                pEventTypes = {
                    up: 'MSPointerUp', down: 'MSPointerDown', over: 'mouseover',
                    out: 'mouseout', move: 'MSPointerMove', cancel: 'MSPointerCancel' };
            }
            else {
                pEventTypes = {
                    up: 'pointerup', down: 'pointerdown', over: 'pointerover',
                    out: 'pointerout', move: 'pointermove', cancel: 'pointercancel' };
            }

            events.add(doc, pEventTypes.down  , listeners.selectorDown );
            events.add(doc, pEventTypes.move  , listeners.pointerMove  );
            events.add(doc, pEventTypes.over  , listeners.pointerOver  );
            events.add(doc, pEventTypes.out   , listeners.pointerOut   );
            events.add(doc, pEventTypes.up    , listeners.pointerUp    );
            events.add(doc, pEventTypes.cancel, listeners.pointerCancel);

            // autoscroll
            events.add(doc, pEventTypes.move, listeners.autoScrollMove);
        }
        else {
            events.add(doc, 'mousedown', listeners.selectorDown);
            events.add(doc, 'mousemove', listeners.pointerMove );
            events.add(doc, 'mouseup'  , listeners.pointerUp   );
            events.add(doc, 'mouseover', listeners.pointerOver );
            events.add(doc, 'mouseout' , listeners.pointerOut  );

            events.add(doc, 'touchstart' , listeners.selectorDown );
            events.add(doc, 'touchmove'  , listeners.pointerMove  );
            events.add(doc, 'touchend'   , listeners.pointerUp    );
            events.add(doc, 'touchcancel', listeners.pointerCancel);

            // autoscroll
            events.add(doc, 'mousemove', listeners.autoScrollMove);
            events.add(doc, 'touchmove', listeners.autoScrollMove);
        }

        events.add(win, 'blur', endAllInteractions);

        try {
            if (win.frameElement) {
                var parentDoc = win.frameElement.ownerDocument,
                    parentWindow = parentDoc.defaultView;

                events.add(parentDoc   , 'mouseup'      , listeners.pointerEnd);
                events.add(parentDoc   , 'touchend'     , listeners.pointerEnd);
                events.add(parentDoc   , 'touchcancel'  , listeners.pointerEnd);
                events.add(parentDoc   , 'pointerup'    , listeners.pointerEnd);
                events.add(parentDoc   , 'MSPointerUp'  , listeners.pointerEnd);
                events.add(parentWindow, 'blur'         , endAllInteractions );
            }
        }
        catch (error) {
            interact.windowParentError = error;
        }

        // prevent native HTML5 drag on interact.js target elements
        events.add(doc, 'dragstart', function (event) {
            for (var i = 0; i < interactions.length; i++) {
                var interaction = interactions[i];

                if (interaction.element
                    && (interaction.element === event.target
                        || nodeContains(interaction.element, event.target))) {

                    interaction.checkAndPreventDefault(event, interaction.target, interaction.element);
                    return;
                }
            }
        });

        if (events.useAttachEvent) {
            // For IE's lack of Event#preventDefault
            events.add(doc, 'selectstart', function (event) {
                var interaction = interactions[0];

                if (interaction.currentAction()) {
                    interaction.checkAndPreventDefault(event);
                }
            });

            // For IE's bad dblclick event sequence
            events.add(doc, 'dblclick', doOnInteractions('ie8Dblclick'));
        }

        documents.push(doc);
    }

    listenToDocument(document);

    function indexOf (array, target) {
        for (var i = 0, len = array.length; i < len; i++) {
            if (array[i] === target) {
                return i;
            }
        }

        return -1;
    }

    function contains (array, target) {
        return indexOf(array, target) !== -1;
    }

    function matchesSelector (element, selector, nodeList) {
        if (ie8MatchesSelector) {
            return ie8MatchesSelector(element, selector, nodeList);
        }

        // remove /deep/ from selectors if shadowDOM polyfill is used
        if (window !== realWindow) {
            selector = selector.replace(/\/deep\//g, ' ');
        }

        return element[prefixedMatchesSelector](selector);
    }

    function matchesUpTo (element, selector, limit) {
        while (isElement(element)) {
            if (matchesSelector(element, selector)) {
                return true;
            }

            element = parentElement(element);

            if (element === limit) {
                return matchesSelector(element, selector);
            }
        }

        return false;
    }

    // For IE8's lack of an Element#matchesSelector
    // taken from http://tanalin.com/en/blog/2012/12/matches-selector-ie8/ and modified
    if (!(prefixedMatchesSelector in Element.prototype) || !isFunction(Element.prototype[prefixedMatchesSelector])) {
        ie8MatchesSelector = function (element, selector, elems) {
            elems = elems || element.parentNode.querySelectorAll(selector);

            for (var i = 0, len = elems.length; i < len; i++) {
                if (elems[i] === element) {
                    return true;
                }
            }

            return false;
        };
    }

    // requestAnimationFrame polyfill
    (function() {
        var lastTime = 0,
            vendors = ['ms', 'moz', 'webkit', 'o'];

        for(var x = 0; x < vendors.length && !realWindow.requestAnimationFrame; ++x) {
            reqFrame = realWindow[vendors[x]+'RequestAnimationFrame'];
            cancelFrame = realWindow[vendors[x]+'CancelAnimationFrame'] || realWindow[vendors[x]+'CancelRequestAnimationFrame'];
        }

        if (!reqFrame) {
            reqFrame = function(callback) {
                var currTime = new Date().getTime(),
                    timeToCall = Math.max(0, 16 - (currTime - lastTime)),
                    id = setTimeout(function() { callback(currTime + timeToCall); },
                  timeToCall);
                lastTime = currTime + timeToCall;
                return id;
            };
        }

        if (!cancelFrame) {
            cancelFrame = function(id) {
                clearTimeout(id);
            };
        }
    }());

    /* global exports: true, module, define */

    // http://documentcloud.github.io/underscore/docs/underscore.html#section-11
    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = interact;
        }
        exports.interact = interact;
    }
    // AMD
    else if (typeof define === 'function' && define.amd) {
        define('interact', function() {
            return interact;
        });
    }
    else {
        realWindow.interact = interact;
    }

} (typeof window === 'undefined'? undefined : window));

// Basic Grammar for HTML tables (Just to be thourough)
// _start -> <table>_top
// _top -> _top_top
// _top -> <thead>_rows
// _top -> <tbody>_rows
// _top -> <tfoot>_rows
// _top -> _rows
// _rows -> _rows_rows
// _rows -> <td>_cells
// _cells -> _cells_cells
// _cells -> <td>_content

/**
 * @typedef {Object} CellDef
 * @property {string} cell - the contents of the table cell
 * @property {number} span - the number of columns spanned by the cell
 */

/**
 * Select all dom elements with the given selector within the given element
 * and return them in a general javascript array object.
 *
 * @param {DOM} el - the element 
 * @param {string} selector - the selector used to choose child DOM objects
 * @return {DOM[]}
 */
function selAll(el, selector) {
    var els = el.querySelectorAll(selector);
    var items = [];
    els.forEach(function (d) {
        items.push(d);
    });
    return items;
}

/**
 * Convert top layer objects to an object for parsing.
 * @param {DOM} el - the containing element (table)
 * @return {CellDef[][]} - the cell definitions of the row
 */
function topStruct(el) {
    return selAll(el, 'tr').map(function (d) {
        var row = rowStruct(d);
        if (row === null) {
            throw Error();
        }
        return row;
    });
}

/**
 * Convert row layer objects to a set of object for parsing.
 * @param {DOM} row - the containing element (tr)
 * @return {CellDef[]} - the cell definitions of the row
 */
function rowStruct(row) {
    return selAll(row, 'td,th').map(function (d) {
        return {cell: d.textContent.replace(/<br>/g, "\n"), span: d.colSpan};
    });
}

/**
 * Converts a DOM table to an object. The table is determined by the given selector.
 * @param {string} selector - the selector for the table.
 * @return - the object definition for the table
 */
function tableStruct(selector) {
    var table = document.querySelector(selector);

    var topSelector = 'tbody,thead,tfoot'.split(",").map(function (d) {
        return selector + ' > ' + d;
    }).join(",");

    var items = selAll(table, topSelector).map(function (d) {
        var topLayer = topStruct(d);
        if (topLayer === null) {
            throw Error();
        }
        return topLayer;
    })


    items = items.concat(selAll(document, selector + ' > tr').map(function (d) {
        var row = rowStruct(d);
        if (row === null) {
            throw Error();
        }
        return row;
    }));

    return items;
}

/**
 * Export the given structure to a csv with the given name
 * 
 * @param {string} filename - the name of the file.
 * @param {Object} rows - the structure to convert to CSV
 *
 * @author Xavier John 
 * @source https://stackoverflow.com/questions/14964035/how-to-export-javascript-array-info-to-csv-on-client-side
 */
function exportCSVFile(filename, rows) {
    filename = filename + ".csv";
    var processRow = function (row) {
        var finalVal = '';
        for (var j = 0; j < row.length; j++) {
            var innerValue = (row[j] === null) ? '' : row[j].toString();
            if (row[j] instanceof Date) {
                innerValue = row[j].toLocaleString();
            }
            var result = innerValue.replace(/"/g, '""');
            if (result.search(/("|,|\n)/g) >= 0) {
                result = '"' + result + '"';
            }
            if (j > 0) {
                finalVal += ',';
            }
            finalVal += result;
        }
        return finalVal + '\n';
    };


    var csvFile = "\uFEFF"; // UTF-8 BOM (byte order mark)
    for (var i = 0; i < rows.length; i++) {
        csvFile += processRow(rows[i]);
    }
    //logMsg(csvFile);

    var blob = new Blob([csvFile], {type: 'text/csv;charset=utf-8;'});
    if (navigator.msSaveBlob) { // IE 10+
        navigator.msSaveBlob(blob, filename);
    } else {
        var link = document.createElement("a");
        if (link.download !== undefined) { // feature detection
            // Browsers that support HTML5 download attribute
            var url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", filename);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}

/**
 * Flatten out the given two dimensional CellDef structure into something 
 * useable by the export function.
 * @param {CellDef[][]|CellDef[][][]} cells - the cell definition structure
 * @return {string[][]}
 */
function flatten(cells) {
    if (cells.length == 1) {
        return flatten(cells[0]);
    }

    var items = [];
    cells.forEach(function (d) {
        if (d.hasOwnProperty("cell")) {
            items.push(d.cell);
            for (var i = 0; i < (d.span - 1); i++) {
                items.push("");
            }
        } else {
            items.push(flatten(d));
        }
    });
    return items;
}

/**
 * Convert the table with the given selector to a csv file and download it.
 * @param {string} tableSelector - the table selector
 * @return {string[][]} - the cells grouped by row
 * 
 * Example:
 * tableToCsv('#tableid');
 */
function tableToCsv(tableSelector, filename){
	
	var array = tableToArray(tableSelector.replace(/^#/, ""));
	arrayToCsv(array, filename);
	return array;
	
// 	var csv = tableStruct(tableSelector);
// 	console.log(csv);
// 	csv = flatten(csv);
// 	console.log(csv);
// 	exportCSVFile(filename, csv);
// 	return csv;
}

function arrayToCsv(array, filename)
{
	var csv = "\uFEFF" + array.map(function(row) { // UTF-8 BOM (byte order mark)
		return row.map(function(cell) {
			return '"' + cell.replace(/"/g, '""') + '"';
		}).join(",");
	}).join("\n") + "\n";
	
	var blob = new Blob([csv], {type: 'text/csv;charset=utf-8;'});
	if (navigator.msSaveBlob) { // IE 10+
		navigator.msSaveBlob(blob, filename);
	} else {
		var link = document.createElement("a");
		if (link.download !== undefined) { // feature detection
			// Browsers that support HTML5 download attribute
			var url = URL.createObjectURL(blob);
			link.setAttribute("href", url);
			link.setAttribute("download", filename + ".csv");
			link.style.visibility = 'hidden';
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		}
	}
}

function tableToArray(tableid)
{
	var table = document.getElementById(tableid);
	var trs = selAll(table, "tr");
	var array = trs.map(function(tr) {
		var tds = selAll(tr, "td,th");
		var row = [];
		tds.forEach(function(td) {
			if(td.style.display  === "none")
				return false;
			row.push(td.textContent.replace(/<br>/g, "\n").replace(/\u00a0+/g, " "));
			for(var i=1; i<td.colSpan; i++)
				row.push("");
		});
		return row;
	});
	return array;
}

var sensitivedata = { email: {}, realname: {}, timestamp: 0 };
var aeskey;
var resetpassphrasewarning = false;
var isresettingpassphrase = false;
var usinglocalkey = false;
var userId;
var MathJaxReady = false;
var mathjaxscriptloaded = false;
var allRostersData;
var savedtestData;
var editAssigned;
var assignedTestData;

var locater = new function () {
    this.createNewRoster = function () {
        var rosterLength = $('#newrosterlength').val();
        var rosterName = $('#newrostername').val();
        $('#newrosterlength').val("");
        $('#newrostername').val("");
        if (rosterName == "") {
            alert("ERROR: please specify a roster name.");
        }
        else if (!rosterLength) {
            alert("ERROR: please specify a class size.");
        }
        else {
            rosterModel.createRoster(userId, rosterName, rosterLength, function (resultJson) {
                if (resultJson.success == 'false') {
                    locater.alertMsg("The roster with name already exists for the user.", "error-OK-btn");
                } else {
                    rosterModel.getRostersByUserId(userId, function (data) {
                        $('#innerViewRostersdiv').remove();
                        $('#viewRosters').append(can.view('/assets/views/viewRosters.ejs', { viewRosters: data }));
                        allRostersData = data;
                        $('#locaterInnerdiv').remove();
                        $('#locaterTool').append(can.view('/assets/views/locater.ejs', {}));
                        $('#assignedtestsInner').remove();
                        $('#assignRosterToTestInner').remove();
                        $('#assignRosterToTest').append(can.view('/assets/views/assignLocaterView.ejs', { savedTests: savedtestData, rosters: allRostersData }));
                        $('#assignedtests').append(can.view('/assets/views/assignedTestsView.ejs', { assignedTests: assignedTestData, rosters: allRostersData }));

                    });
                }
            });
        }
    };


    this.deleteStudentFromRoster = function (rosterId, studentId, studentName) {
        showConfirmBox("Are you sure you want to remove the student <b>" + studentName + "</b> ?", 'rmv-std-yes-btn', rosterId, studentId);
    };


    function showConfirmBox(msg, btnName, input1, input2) { /*change*/
        var $content = "<div class='dialog-overlay' id='" + input1 + "'>" +
            "<div class='dialog' id='" + input2 + "'>" +
            "<i class='fa fa-close'></i>" +
            "<div class='dialog-msg'>" +
            " <p class='padding7'> " + msg + " </p> " +
            "</div>" +
            "<footer>" +
            "<div class='controls'>" +
            " <button id='confirm-OK' class='button " + btnName + " active' tabIndex='1' autofocus >OK</button>&nbsp;&nbsp;" +
            " <button class='button cancel-btn' tabIndex='2'>Cancel</button> " +
            "</div></footer>" +
            "</div>" +
            "</div>";
        $('body').prepend($content);
        $('#confirm-OK').trigger("focus");
        $('body').css('overflow', 'hidden');
    }

    this.deleteRoster = function (rosterId, rosterName) {
        showConfirmBox("Are you sure you want to remove <b>" + rosterName + "</b> ?", 'del-roster-yes-btn', rosterId, "0");

    }

    function showConfirmBoxWithInput(msg, btnName, input1, input2, tableId, stdLength) { /*change*/
        var $content = "<div class='dialog-overlay' id='" + input1 + "'>" +
            "<div class='dialog' id='" + input2 + "'>" +
            "<i class='fa fa-close'></i>" +
            "<div class='dialog-msg'>" +
            " <p> " + msg + " </p>" +
            "<input type='text' id='psuedo-id' style='width: 210px; height: 15px; padding: 2px; border-style: solid;" +
            "border-color: rgb(56, 135, 201);border-width:1px;'></input>" +
            "</div>" +
            "<footer id='ft_" + stdLength + "' class='ftaddexisting'>" +
            "<div class='controls'>" +
            " <button id='btn-add-existing' class='button " + btnName + " active'  tabIndex='1' autofocus>OK</button>" +
            " <button id='confirm-cancel-btn' class='cancel-btn'  tabIndex='2'>Cancel</button> " +
            "</div>" +
            "</footer>" +
            "</div>" +
            "</div>";
        $('body').prepend($content);
        $('#psuedo-id').trigger("focus");
        $('body').css('overflow', 'hidden');
    }

    this.showAlertMsg = function (msg, btnName) {
        var $content = "<div class='dialog-overlay'>" +
            "<div class='dialog' style='overflow:auto;'>" +
            "<i class='fa fa-close'></i>" +
            "<div class='dialog-msg' style='overflow:auto;word-wrap:break-word;'>" +
            " <p> " + msg + " </p>" +
            "</div>" +
            "<footer>" +
            "<div class='controls' style='text-alight:right;'>" +
            " <button id='alert-ok-btn' class='button " + btnName + " active' style='text-align:center;'>OK</button> " +
            "</div>" +
            "</footer>" +
            "</div>" +
            "</div>";
        $('.dialog-overlay').replaceWith($content);
        $('#alert-ok-btn').focus();
        return true;
    }

    this.alertMsg = function (msg, btnName) {
        $content = "<div class='dialog-overlay'>" +
            "<div id='dialogID' class='dialog' style='overflow:auto;'>" +
            "<i class='fa fa-close'></i>" +
            "<div class='dialog-msg'>" +
            " <p style='text-align:center'> " + msg + " </p><br>" +
            "</div>" +
            "<footer>" +
            "<div class='controls' style='text-alight:right;'>" +
            " <button id='alert-ok-btn' class='button " + btnName + " active' style='text-align:center;'>OK</button> " +
            "</div>" +
            "</footer>" +
            "</div>" +
            "</div>";
        $('body').prepend($content);
        $('#alert-ok-btn').focus();
        $('body').css('overflow', 'hidden');
    }

    this.addExistingStudent = function (rosterId, tableId, stdLength) {
        showConfirmBoxWithInput("Enter a student psuedonym.", "add-existing-std-btn", "addexisting", rosterId, tableId, stdLength);
    }





    this.sortNames = function (rosterId) {
        var table, rows, switching, i, x, y, shouldSwitch;
        table = document.getElementById("studenttable" + rosterId);
        switching = true;
        while (switching) {
            switching = false;
            rows = table.getElementsByTagName("TR");
            //row.length-3 to avoid last two Rows which are Add New Student and Add Existing studemt.
            for (i = 1; i < (rows.length - 3); i++) {
                shouldSwitch = false;
                //TD[2] will be column 2, which is realname.
                x = rows[i].getElementsByTagName("input")[1].value;
                y = rows[i + 1].getElementsByTagName("input")[1].value;
                if (x.toLowerCase() > y.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
            if (shouldSwitch) {
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
            }
        }
    }
    this.sortUsers = function (rosterId) {
        var table, rows, switching, i, x, y, shouldSwitch;
        table = document.getElementById("studenttable" + rosterId);
        switching = true;
        while (switching) {
            switching = false;
            rows = table.getElementsByTagName("TR");
            //row.length-3 to avoid last two Rows which are Add New Student and Add Existing studemt.
            for (i = 1; i < (rows.length - 3); i++) {
                shouldSwitch = false;
                //TD[2] will be column 3, which is psuedonym.
                x = rows[i].getElementsByTagName("TD")[2];
                y = rows[i + 1].getElementsByTagName("TD")[2];
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
            if (shouldSwitch) {
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
            }
        }
    }

    this.renameStudent = function (rosterId, studentId, studentName) {
        rosterModel.renameStudent(userId, rosterId, studentId, function (data) {
            // var userId = " axd ";
            if (data != null) {
                if (!data.renameStudentFlag) {
                    if (data.rosterdetails != null && Object.keys(data.rosterdetails).length > 0) {
                        var numberOfRosters = Object.keys(data.rosterdetails).length;
                        var rosternames = "";
                        for (var i = 0; i < numberOfRosters; i++) {
                            rosternames = rosternames + userId + " <b> " + data.rosterdetails[i].ROSTER_NAME + "</b><br/>";
                        }
                        var msg = "ERROR: student  <b>" + studentName + "</b> is enrolled in multiple classes:" + "<br/>" + rosternames + "<br/>" + "To change the student's pseudonym, contact EnhancedLM@ku.edu.";
                        var btnName = "error-rename-OK-btn";
                        locater.alertMsg(msg, btnName);
                    } else {
                        var msg = data.errorMsg;
                        var btnName = "error-rename-OK-btn";
                        locater.alertMsg(msg, btnName);
                    }
                } else {
                    var str1 = "'";
                    var str2 = data.STUDENT_NAME.toString();
                    var stdNameStr = str1.concat(str2, "'");
                    var tableBodyPtr = $('#rostertableID_' + rosterId).find('table tbody');
                    var rowPtr = tableBodyPtr.find('#studentID_' + studentId);
                    var $htmlRow = "<tr id='studentID_" + data.STUDENT_ID + "'>" +
                        " <td>" +
                        "<input id='studentcheck_" + rosterId + "_" + studentId + "' " +
                        "onchange='if(this.checked) locater.checkstudent(" + rosterId + "," + studentId + "); else locater.uncheckstudent(" + rosterId + "," + studentId + ");'" +
                        "type='checkbox' name='studentnames_" + rosterId + "'>" +
                        " </td>" +
                        " <td>" +
                        " <input id='realname' onkeydown='if(event.keyCode === 13) movedown(this);' oninput='this.style.backgroundColor = aeskey ? '#FFC' : '#FDD''" +
                        "value='' type='text' />" +
                        "</td >" +
                        "<td id='table_row" + data.STUDENT_ID + "' style='text-transform:capitalize;white-space:no-wrap; '>" +
                        "<i style='font-style:normal;'>" +
                        data.STUDENT_NAME +
                        " </i>" +
                        "<span style='float:right;font-weight:bold; '>" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
                        " <a onclick='locater.renameStudent(" + rosterId + "," + data.STUDENT_ID + ");' style='text-decoration:none;cursor: pointer;'" +
                        "title='rename student'>↺</a>&nbsp;&nbsp;&nbsp;" +
                        "<a style='text-decoration:none;cursor: pointer;' title='remove student' onclick='locater.deleteStudentFromRoster(" + rosterId + "," + data.STUDENT_ID + ");'>×</a>" +
                        "</span >" +
                        "</td >" +
                        "<td id='report_student_" + data.STUDENT_ID + "' style='text-align:center;'>" +
                        "<a href='#' style='display:none;' onclick='locater.getStudentReport(" + data.STUDENT_ID + ");'>View</a>" +
                        "</td>" +
                        "</tr>";
                    rowPtr.replaceWith($htmlRow);
                }
            };
        });


    }

    this.addNewStudent = function (rosterId, stdLength) {
        if (stdLength >= 99) {
            alert("Selected Roster already has 99 students, cant add more.");
            return;
        }
        rosterModel.addNewStudent(userId, rosterId, function (data) {
            var studentId = data.STUDENT_ID;
            var studentName = data.STUDENT_NAME;
            var reportVal = 0;
            locater.addStudent(studentId, studentName, rosterId, reportVal, stdLength);
        });
    }

    this.addStudent = function (studentId, studentName, rosterId, reportVal, stdLength) {
        var tableBodyPtr = $('#rostertableID_' + rosterId).find('table tbody');
        tableBodyPtr.find('tr:last').remove();
        tableBodyPtr.find('tr:last').remove();
        var str1 = "'";
        var str2 = studentName.toString();
        var stdNameStr = str1.concat(str2, "'");
        var $htmlRow = "<tr id='studentID_" + studentId + "'>" +
            " <td>" +
            "<input id='studentcheck_" + rosterId + "_" + studentId + "' " +
            "onchange='if(this.checked) locater.checkstudent(" + rosterId + "," + studentId + "," + stdLength + "); else locater.uncheckstudent(" + rosterId + "," + studentId + ");'" +
            "type='checkbox' name='studentnames_" + rosterId + "'>" +
            " </td>" +
            " <td>" +
            " <input id='realname' onkeydown='if(event.keyCode === 13) movedown(this);' oninput='this.style.backgroundColor = aeskey ? '#FFC' : '#FDD''" +
            "value='' type='text' />" +
            "</td >" +
            "<td id='table_row" + studentId + "' style='text-transform:capitalize;white-space:no-wrap; '>" +
            "<i style='font-style:normal;'>" + studentName +
            " </i>" +
            "<span style='float:right;font-weight:bold; '>" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
            " <a onclick='locater.renameStudent(" + rosterId + "," + studentId + ");' style='text-decoration:none;cursor: pointer;'" +
            "title='rename student'>↺</a>&nbsp;&nbsp;&nbsp;" +
            "<a style='text-decoration:none;cursor: pointer;' title='remove student' onclick='locater.deleteStudentFromRoster(" + rosterId + "," + studentId + ");'>×</a>" +
            "</span >" +
            "</td >" +
            "<td id='report_student_" + studentId + "' style='text-align:center;'>" +
            "<a id='report_view_" + studentId + "' href='#' onclick='locater.getStudentReport(" + studentId + ");'>View</a>" +
            "</td>" +
            "</tr>" +
            "<tr>" +
            "<td style='text-align:center;'>" +
            "<a id='addNewStd' style='font-weight:bold;text-decoration:none;cursor:pointer;' onclick='locater.addNewStudent(" + rosterId + "," + (parseInt(stdLength) + 1) + ");'>+</a>" +
            " </td >" +
            " <td>" +
            "<a id ='addNewStd' style = 'font-weight:bold;text-decoration:none;cursor:pointer' onclick = 'locater.addNewStudent(" + rosterId + "," + (parseInt(stdLength) + 1) + ");'> Add New Student</a >" +
            "</td >" +
            "</tr >" +
            "<tr>" +
            "<td style='text-align: center;'>" +
            "<a id='addExistingStd' style='font-weight:bold;text-decoration:none;cursor:pointer;' onclick='locater.addExistingStudent(" + rosterId + ",studenttable" + rosterId + "," + (parseInt(stdLength) + 1) + ");'>+</a>" +
            "</td >" +
            " <td >" +
            "<a id='addExistingStd' style='font-weight: bold;text-decoration: none; cursor: pointer; ' onclick='locater.addExistingStudent(" + rosterId + ",studenttable" + rosterId + "," + (parseInt(stdLength) + 1) + ");'> Add Existing Student</a > " +
            "</td >" +
            "</tr >";
        tableBodyPtr.append($htmlRow);
        if (reportVal == 0) {
            $('#report_view_' + studentId).css('display', 'none');
        }
        //Refresh so that real name will be added for Add existing user.
        $('#refreshdiv').trigger("click");
    }

    this.activateRoster = function (rosterName) {
        rosterModel.activateRoster(userId, rosterName, (function (data) {
            var removeRosterRowPtr = $('#removedRosterTable').find('tbody');
            removeRosterRowPtr.find('rm-roster-' + rosterName).remove();
            return function () {
                rosterModel.getRostersByUserId(userId, function (result1) {
                    allRostersData = result1;
                    $('#innerViewRostersdiv').remove();
                    $('#viewRosters').append(can.view('/assets/views/viewRosters.ejs', { viewRosters: result1 }));
                });
                rosterModel.getInActiveRostersByUserId(userId, function (result2) {
                    $('#removedInnerDiv').remove();
                    $('#removedRostersNStudents').append(can.view('/assets/views/removedRosters.ejs', { removedRosters: result2 }));
                });
                rosterModel.getAssignedTests(userId, function (data) {
                    if (data != null && data.length > 0) {
                        assignedTestData = data;
                        $('#locaterInnerdiv').remove();
                        $('#locaterTool').append(can.view('/assets/views/locater.ejs', {}));
                        $('#assignedtestsInner').remove();
                        $('#assignRosterToTestInner').remove();
                        $('#assignRosterToTest').append(can.view('/assets/views/assignLocaterView.ejs', { savedTests: savedtestData, rosters: allRostersData }));
                        $('#assignedtests').append(can.view('/assets/views/assignedTestsView.ejs', { assignedTests: assignedTestData, rosters: allRostersData }));

                    }
                });
            }
        })());
    }

    function removeRosterRow(userId, rosterName) {
        var removeRosterRowPtr = $('#removedRosterTable').find('tbody');
        var rosterRowName = removeRosterRowPtr.find('rm-roster-' + rosterName);
        rosterRowName.remove();
        rosterModel.getInActiveRostersByUserId(userId, function (result2) {
            $('#removedInnerDiv').remove();
            $('#removedRostersNStudents').append(can.view('/assets/views/removedRosters.ejs', { removedRosters: result2 }));

        });
        rosterModel.getRostersByUserId(userId, function (result1) {
            allRostersData = result1;
            $('#innerViewRostersdiv').remove();
            $('#viewRosters').append(can.view('/assets/views/viewRosters.ejs', { viewRosters: result1 }));
        });
        rosterModel.getAssignedTests(userId, function (data) {
            if (data != null && data.length > 0) {
                assignedTestData = data;
                $('#locaterInnerdiv').remove();
                $('#locaterTool').append(can.view('/assets/views/locater.ejs', {}));
                $('#assignedtestsInner').remove();
                $('#assignRosterToTestInner').remove();
                $('#assignRosterToTest').append(can.view('/assets/views/assignLocaterView.ejs', { savedTests: savedtestData, rosters: allRostersData }));
                $('#assignedtests').append(can.view('/assets/views/assignedTestsView.ejs', { assignedTests: assignedTestData, rosters: allRostersData }));
            }
        });

    }

    this.activateStudent = function (studentName, studentId, rosterId, rosterName, rosterFlag) {
        if (!rosterFlag) {
            showConfirmBox("Before you can restore the user <b>" + studentName + "</b>, you must restore the roster <b>" + rosterName + " </b> ", 'activate-std-yes-btn', rosterId, studentId);
        }
        else {
            rosterModel.activateStudent(userId, studentId, rosterId, function (data) {
                var removeRosterRowPtr = $('#removedStudentFromRoster').find('tbody');
                removeRosterRowPtr.find('rm-student-' + studentId).remove();
                rosterModel.getRostersByUserId(userId, function (result1) {
                    allRostersData = result1;
                    $('#innerViewRostersdiv').remove();
                    $('#viewRosters').append(can.view('/assets/views/viewRosters.ejs', { viewRosters: result1 }));
                });
                rosterModel.getInActiveRostersByUserId(userId, function (result2) {
                    $('#removedInnerDiv').remove();
                    $('#removedRostersNStudents').append(can.view('/assets/views/removedRosters.ejs', { removedRosters: result2 }));

                });
                rosterModel.getAssignedTests(userId, function (data) {
                    if (data != null && data.length > 0) {
                        assignedTestData = data;
                        $('#locaterInnerdiv').remove();
                        $('#locaterTool').append(can.view('/assets/views/locater.ejs', {}));
                        $('#assignedtestsInner').remove();
                        $('#assignRosterToTestInner').remove();
                        $('#assignRosterToTest').append(can.view('/assets/views/assignLocaterView.ejs', { savedTests: savedtestData, rosters: allRostersData }));
                        $('#assignedtests').append(can.view('/assets/views/assignedTestsView.ejs', { assignedTests: assignedTestData, rosters: allRostersData }));

                    }
                });
            });
        }

    }

    this.setDefaultStudent = function (selectId) {
        $('#studentlist_' + selectId).prop('selectedIndex', '0');;
    }

    this.checkOnRoster = function (rosterId) {
        // check the corresponding rosters in viewRoster.ejs and locater.ejs
        $('#rostercheckbox_' + rosterId).removeProp("indeterminate");
        $('#rostertablecheck_' + rosterId).removeProp("indeterminate");
        $('#rostercheckbox_' + rosterId).prop("checked", true);
        $('#rostertablecheck_' + rosterId).prop("checked", true);
        $('input:checkbox[name=studentnames_' + rosterId + ']').each(function () {
            // check each student inside the roster on check on roster
            var studentattrId = $(this).prop("id");
            $('#' + studentattrId).prop("checked", true);
        });

    }


    this.uncheckRoster = function (rosterId) {
        // uncheck each student inside the roster on check on roster
        $('input[name=studentnames_' + rosterId + ']').each(function () {
            var studentattrId = $(this).prop("id");
            $('#' + studentattrId).prop('checked', false);
        });
        //uncheck the clicked rosters 
        $('#rostercheckbox_' + rosterId).removeProp("indeterminate");
        $('#rostertablecheck_' + rosterId).removeProp("indeterminate");
        $('#rostertablecheck_' + rosterId).prop('checked', false);
        $('#rostercheckbox_' + rosterId).prop('checked', false);

    }


    this.checkstudent = function (rosterId, studentId, stdLength) {
        $('#rostertablecheck_' + rosterId).prop("indeterminate", "true");
        $('#rostercheckbox_' + rosterId).prop("indeterminate", "true");
        $('#studentcheck_' + rosterId + '_' + studentId).prop("checked", true);
        var checkedCount = 0;
        $('input:checkbox[name=studentnames_' + rosterId + ']:checked').each(function () {
            if (this.checked) {
                checkedCount = checkedCount + 1;
            }
        });
        if (checkedCount == parseInt(stdLength)) {
            $('#rostercheckbox_' + rosterId).removeProp("indeterminate");
            $('#rostertablecheck_' + rosterId).removeProp("indeterminate");
            $('#rostercheckbox_' + rosterId).prop("checked", "checked");
            $('#rostertablecheck_' + rosterId).prop("checked", "checked");
        }

    };

    this.uncheckstudent = function (rosterId, studentId) {
        var checkedCount = 0; // used to  track the number of checked students in other roster
        $('#studentcheck_' + rosterId + '_' + studentId).prop('checked', false);
        $('input:checkbox[name=studentnames_' + rosterId + ']:checked').each(function () {
            if (this.checked) {
                checkedCount = checkedCount + 1;
            }
        });
        if (checkedCount == 0) {
            $('#rostercheckbox_' + rosterId).removeProp("indeterminate");
            $('#rostertablecheck_' + rosterId).removeProp("indeterminate");
            $('#rostercheckbox_' + rosterId).prop('checked', false);
            $('#rostertablecheck_' + rosterId).prop('checked', false);
        } else {
            $('#rostercheckbox_' + rosterId).prop("indeterminate", "true");
            $('#rostertablecheck_' + rosterId).prop("indeterminate", "true");
        }
    }

    this.uncheckAll = function () {
        $('input[type=checkbox]').each(function () {
            if (this.checked) {
                this.checked = false;
            }
        });
    }


    this.editTestDetails = function (jsonString, rostersString) {
        $('#assignRosterToTest').css("display", "none");
        var jsonObj = JSON.parse(jsonString);
        var rosterObj = JSON.parse(rostersString);

        if (editAssigned == null) {
            // first time edit click for the session
            editAssigned = JSON.parse(jsonString);
            var html = can.view.render('/assets/views/editAssignedTest.ejs', { editAssigned: editAssigned, rosterObj: rosterObj });
        } else {
            // if already edit is opened for another assigned test close it and open edit for latest clicked test
            locater.replaceOld(JSON.stringify(editAssigned), JSON.stringify(rosterObj));
            editAssigned = JSON.parse(jsonString);
            var html = can.view.render('/assets/views/editAssignedTest.ejs', { editAssigned: editAssigned, rosterObj: rosterObj });
        }
        var testrow = $('#assignedRow_' + jsonObj.ID + '_' + jsonObj.PASSWORD_ID);
        testrow.replaceWith(html);
        if (!jsonObj.DUE_DATE || jsonObj.DUE_DATE == "") {
            $('#editdatepicker').val("");
            $('#edittimeselect').val("-1");
        } else {
            var timestamp = new Date(jsonObj.DUE_TIMESTAMP);
            var duedate = jsonObj.DUE_DATE;
            var dueTime = jsonObj.DUE_HOURS;
            var duetimeArr = dueTime.split(" ");
            var tempTime;
            if (duetimeArr[1] == 'PM') {
                if (parseInt(duetimeArr[0]) == 12) {
                    tempTime = duetimeArr[0];
                } else {
                    var timeArr = duetimeArr[0].split(":");
                    tempTime = parseInt(timeArr[0]) + parseInt(12) + ":00:00";
                }
                $('#edittimeselect').val(tempTime);
            } else {
                $('#edittimeselect').val(duetimeArr[0]);
            }
            var tempDate = duedate + " " + timestamp.getFullYear().toString();
            $('#editdatepicker').val(tempDate);

        }
        for (var i = 0; i < jsonObj.studentDetails.length; i++) {
            var rosterId = jsonObj.studentDetails[i].ROSTER_ID;
            var studentId = jsonObj.studentDetails[i].STUDENT_ID;
            $('#rostertablecheck_' + rosterId).prop("indeterminate", "true");
            $('#rostercheckbox_' + rosterId).prop("indeterminate", "true");
            $('#studentcheck_' + rosterId + '_' + studentId).prop('checked', true);;

        }
        for (var i = 0; i < jsonObj.studentDetails.length; i++) {
            var rosterId = jsonObj.studentDetails[i].ROSTER_ID;
            var checkedCount = 0;
            $('input:checkbox[name=studentnames_' + rosterId + ']:checked').each(function () {
                if (this.checked) {
                    checkedCount = checkedCount + 1;
                }
            });
            for (var j = 0; j < Object.keys(rosterObj).length; j++) {
                if (rosterObj[j].ROSTER_ID == rosterId) {
                    var stdLen = Object.keys(rosterObj[j].STUDENT_NAMES).length;
                    if (stdLen == checkedCount) {
                        $('#rostercheckbox_' + rosterId).removeProp("indeterminate");
                        $('#rostertablecheck_' + rosterId).removeProp("indeterminate");
                        $('#rostercheckbox_' + rosterId).prop("checked", "checked");
                        $('#rostertablecheck_' + rosterId).prop("checked", "checked");
                    }
                }

            }

        }
        newtestrow = $('#newassignedRow_' + jsonObj.ID + '_' + jsonObj.PASSWORD_ID);
        newtestrow.css("backgroundColor", "#E3F7FF");
    }



    this.replaceOld = function (jsonString, rosterString) {
        var jsonObj = JSON.parse(jsonString);
        var rosterObj = JSON.parse(rosterString);
        var html = can.view.render('/assets/views/restoreAssignedTest.ejs', { restoreAssigned: jsonObj, rosterObject: rosterObj });
        var testrowOriginal = $('#newassignedRow_' + jsonObj.ID + '_' + jsonObj.PASSWORD_ID);
        testrowOriginal.replaceWith(html);
        testrowOriginal.css("backgroundColor", "white");
        $('#assignRosterToTest').css("display", "block");
        locater.uncheckAll();
    }

    this.deleteAssignedTest = function (jsonObj) {
        var json = JSON.parse(jsonObj);
        var tempId = 0;
        rosterModel.deleteAssignedTest(json.PASSWORD_ID, function (result) {
            if (result != null) {
                if (result.deleteFlag != null && result.deleteFlag == 'false') {
                    locater.alertMsg("ERROR: Cannot remove the test.One or more selected students have already completed the test.", "error-OK-btn");
                } else {
                    rosterModel.getAssignedTests(tempId, function (data) {
                        if (data != null) {
                            assignedTestData = data;
                            $('#locaterInnerdiv').remove();
                            $('#locaterTool').append(can.view('/assets/views/locater.ejs', {}));
                            $('#assignedtestsInner').remove();
                            $('#assignRosterToTestInner').remove();
                            $('#assignRosterToTest').append(can.view('/assets/views/assignLocaterView.ejs', { savedTests: savedtestData, rosters: allRostersData }));
                            $('#assignedtests').append(can.view('/assets/views/assignedTestsView.ejs', { assignedTests: assignedTestData, rosters: allRostersData }));
                        }
                    });
                }
            }
        });
        $('#assignRosterToTest').css("display", "block");
        locater.uncheckAll();
    }

    this.saveAssignedTest = function (jsonObj) {
        var json = JSON.parse(jsonObj);
        var passwordChange = false;
        var flag = 1;
        var rosterChkArray = [];
        var rosterDetailsArray = [];
        var tempId = 0;
        // get all the student & roster details from the checked rosters/students tables
        $('input:checkbox[name=editrosternames]').each(function () {
            if (this.checked || this.indeterminate == true) {
                rosterChkArray.push($(this).parent().text().trim());
                var rosterName = $(this).parent().text().trim();
                var inputId = $(this).attr("id");
                var rosterId = inputId.slice("rostercheckbox_".length, inputId.length);
                $('input:checkbox[name=studentnames_' + rosterId + ']:checked').each(function () {
                    if (this.checked) {
                        var stdId = $(this).attr("id");
                        var stdIdSplit = stdId.split("_");
                        rosterDetailsArray.push({ rosterName: rosterName, rosterId: rosterId, studentId: stdIdSplit[2] });
                    }
                });
            }
        });
        // validate for empty password,test,date/time,students.If anyone of this is empty set flag to 0 and show alert message
        if ($('#edittestpassword').val() == "") {
            flag = 0;
            locater.alertMsg("Please enter a password for the selected locater tool.", "error-OK-btn");
            return;
        }
        else if ($('#editdatepicker').val() != "" || $('#edittimeselect option:selected').val() != -1) {
            if ($('#edittimeselect option:selected').val() == -1) {
                flag = 0;
                locater.alertMsg("The due date you entered is not valid. To set no due date, clear both the date and time fields", "error-OK-btn");
                return;
            }
            else if ($('#editdatepicker').val() == "") {
                flag = 0;
                locater.alertMsg("The due date you entered is not valid. To set no due date, clear both the date and time fields", "error-OK-btn");
                return;
            }
        }
        else if (rosterDetailsArray.length == 0) {
            flag = 0;
            locater.alertMsg("Please select at least one student.", "error-OK-btn");
            return;
        }

        // If flag is 1 then all the feilds are validated successfully for null/empty. Build final JSON
        if (flag == 1) {

            var editassignTestJson = {};
            editassignTestJson.testTitle = json.TEST_TITLE;
            editassignTestJson.testId = json.ID;

            // check for empty duedate feild .If not empty Format the Date Object 
            var dateString = $('#editdatepicker').val().trim();
            if (dateString != "") {
                var date = new Date(dateString);
                editassignTestJson.dueDate = date.getFullYear().toString() + "-" + (date.getMonth() + 1).toString() + "-" + date.getDate().toString();
            }
            else {
                editassignTestJson.dueDate = "";
            }
            // check for empty duetime. If not empty set the DUETIME 
            var dueTime = $('#edittimeselect option:selected').val();
            if (dueTime != -1) {
                editassignTestJson.dueTime = $('#edittimeselect option:selected').val().trim();
            }
            else {
                editassignTestJson.dueTime = "";
            }
            // set New Password flag .If password is changed we check DB if password already exists
            var newPwd = $('#edittestpassword').val().trim();
            var passwordObj = {};
            if (newPwd != json.PASSWORD) {
                passwordObj.passwordChange = true;
                passwordObj.newPassword = newPwd;
                passwordObj.oldPassword = json.PASSWORD;
                passwordObj.oldPasswordId = json.PASSWORD_ID;
            } else {
                passwordObj.passwordChange = false;
                passwordObj.oldPassword = json.PASSWORD;
                passwordObj.oldPasswordId = json.PASSWORD_ID;
            }
            editassignTestJson.oldPassword = json.PASSWORD;
            editassignTestJson.oldPasswordId = json.PASSWORD_ID;
            editassignTestJson.password = $('#edittestpassword').val().trim();
            editassignTestJson.selfNote = $('#edittestcomment').val().trim();
            editassignTestJson.elmNote = $('#edittestmessage').val().trim();
            editassignTestJson.rosterStudentDetails = rosterDetailsArray;

            passwordObj.elmNoteChange = false;
            passwordObj.elmNote = null;
            if (editassignTestJson.elmNote && editassignTestJson.elmNote != "" &&
                editassignTestJson.elmNote != json.NOTE_TO_ELM) {
                passwordObj.elmNoteChange = true;
                passwordObj.elmNote = editassignTestJson.elmNote;
            }

            // getting version A and version B test IDs
            var activeTestId;
            var companionId;
            var testVersion;

            rosterModel.getAssignedTestByPwdId(json.PASSWORD_ID, function (testAssignResult) {
                testVersion = testAssignResult.VERSION;
                companionId = testAssignResult.COMPANION_ID;
                activeTestId = testAssignResult.ACTIVE_TEST_ID;
                editassignTestJson.ASSIGNED_TEST_ID = json.studentDetails[0].ASSIGNED_TEST_ID;

                // separating the student records to be deleted and student records to be updated
                var deleteStudentsList = {};
                var deleteStdArray = [];
                var updateStdList = {};
                var updateStdArray = [];


                for (var i = 0; i < Object.keys(json.studentDetails).length; i++) { // students list before editing
                    var studentUpdateFlag = 0;
                    for (var j = 0; j < Object.keys(editassignTestJson.rosterStudentDetails).length; j++) {//students list after editing(new List)
                        if ((json.studentDetails[i].STUDENT_ID == editassignTestJson.rosterStudentDetails[j].studentId) && (json.studentDetails[i].ROSTER_ID == editassignTestJson.rosterStudentDetails[j].rosterId)) {
                            studentUpdateFlag = 1;
                            var updateStdObj = {};
                            updateStdObj.isComplete = ((json.studentDetails[i].ISCOMPLETE == true) ? 1 : 0);
                            updateStdObj.activeTestId = json.studentDetails[i].ACTIVE_TEST_ID;
                            updateStdObj.testVersion = json.studentDetails[i].TEST_VERSION;
                            updateStdObj.companionId = json.studentDetails[i].COMPANION_ID;
                            updateStdObj.rosterId = json.studentDetails[i].ROSTER_ID;
                            updateStdObj.studentId = json.studentDetails[i].STUDENT_ID;
                            updateStdObj.createdUser = json.CREATED_USER;
                            updateStdObj.dueDate = editassignTestJson.dueDate;
                            updateStdObj.dueTime = editassignTestJson.dueTime;
                            updateStdObj.selfNote = editassignTestJson.selfNote;
                            updateStdObj.elmNote = editassignTestJson.elmNote;
                            updateStdArray.push(updateStdObj);
                        }
                    }
                    if (studentUpdateFlag == 0) {
                        var stdObj = {};
                        stdObj.STUDENT_ID = json.studentDetails[i].STUDENT_ID;
                        stdObj.ROSTER_ID = json.studentDetails[i].ROSTER_ID;
                        stdObj.ACTIVE_TEST_ID = json.studentDetails[i].ACTIVE_TEST_ID;
                        stdObj.LOCATER_PASSWORD_ID = json.PASSWORD_ID;
                        deleteStdArray.push(stdObj);
                    }

                }
                deleteStudentsList = deleteStdArray;
                updateStdList = updateStdArray;
                var newStdFlag = 0;
                var count = 1;
                var insertStdList = {};
                var insertStdArray = [];

                //setting the new students object list and their test versions
                for (var k = 0; k < Object.keys(editassignTestJson.rosterStudentDetails).length; k++) {// studentList after editing(new List)
                    var newStdFlag = 1;
                    for (var l = 0; l < Object.keys(json.studentDetails).length; l++) {// studentList before editing(old list)
                        if ((editassignTestJson.rosterStudentDetails[k].studentId == json.studentDetails[l].STUDENT_ID) && (editassignTestJson.rosterStudentDetails[k].rosterId == json.studentDetails[l].ROSTER_ID)) {
                            newStdFlag = 0;
                        }
                    }
                    if (newStdFlag) {
                        var insertStdObj = {};
                        insertStdObj.isComplete = 0;
                        if (parseInt(editassignTestJson.rosterStudentDetails[k].studentId) % 2 == 0) {
                            insertStdObj.activeTestId = activeTestId;
                            insertStdObj.testVersion = testVersion;
                            insertStdObj.companionId = companionId;
                        } else {
                            insertStdObj.activeTestId = companionId;
                            insertStdObj.testVersion = (testVersion == 'A' ? 'B' : 'A');
                            insertStdObj.companionId = activeTestId;
                        }
                        insertStdObj.rosterId = editassignTestJson.rosterStudentDetails[k].rosterId;
                        insertStdObj.studentId = editassignTestJson.rosterStudentDetails[k].studentId;
                        insertStdObj.dueDate = editassignTestJson.dueDate;
                        insertStdObj.dueTime = editassignTestJson.dueTime;
                        insertStdObj.selfNote = editassignTestJson.selfNote;
                        insertStdObj.elmNote = editassignTestJson.elmNote;
                        insertStdObj.assignedTestId = json.ID;
                        insertStdArray.push(insertStdObj);
                        count = count + 1;

                    }
                }
                insertStdList = insertStdArray;
                // insert all the edited test details into DB
                rosterModel.saveEditAssignedTest(passwordObj, deleteStudentsList, updateStdList, insertStdList, function (json) {
                    if (json != null) {
                        if (json.Error == true) {
                            locater.alertMsg(json.Message, "error-OK-btn");
                            return;
                        }
                        if (json.passwordExistsFlag != null && json.passwordExistsFlag == true) {
                            locater.alertMsg("ERROR: The password entered is already in use. <br> <b> '" + passwordObj.newPassword + "' <b>", "error-OK-btn");
                        } else if (json.deleteFlag != null && json.deleteFlag == 'false') {
                            locater.alertMsg("ERROR: Cannot remove the students.One or more selected students have already started/completed the test.", "error-OK-btn");
                        } else if (json.responseExistsFlag != null && json.responseExistsFlag == 'true') {
                            locater.alertMsg("Cannot change the password.One or more students had already started the test. ", "error-OK-btn");
                        } else {
                            locater.uncheckAll();
                            rosterModel.getAssignedTests(tempId, function (data) {
                                if (data != null && data.length > 0) {
                                    assignedTestData = data;
                                    $('#locaterInnerdiv').remove();
                                    $('#locaterTool').append(can.view('/assets/views/locater.ejs', {}));
                                    $('#assignedtestsInner').remove();
                                    $('#assignRosterToTestInner').remove();
                                    $('#assignRosterToTest').append(can.view('/assets/views/assignLocaterView.ejs', { savedTests: savedtestData, rosters: allRostersData }));
                                    $('#assignedtests').append(can.view('/assets/views/assignedTestsView.ejs', { assignedTests: assignedTestData, rosters: allRostersData }));

                                }
                            });
                        }
                    }
                });
            });
        }
        $('#assignRosterToTest').css("display", "block");
    }


    /*
        View Test Report
    */
    this.viewTestReport = function (testObject) {
        var jsonTestObj = JSON.parse(testObject);
        var testId = jsonTestObj.ID;
        var passwordID = jsonTestObj.PASSWORD_ID;
        $('#studentreport').empty();
        $('#studentreport').css("display", "none");
        $('#testreport').empty();
        $('#testreport').css("display", "none");
        rosterModel.getTestReportDetails(testId, passwordID, function (reportObjJson) {
            var studentObject = getStudTestFromReportJSON(reportObjJson);
            $('#testreport').append(can.view('/assets/views/testreportview.ejs', { reportObj: reportObjJson, testObject: jsonTestObj, studentObj: studentObject }));
            $('#testreport').css("display", "block");
        });

    };

    function getStudTestFromReportJSON(reportObjJson) {
        var studentDetails = [];
        if (reportObjJson) {
            var studA = getTestFromReportJSON(reportObjJson.studentTestADetails, reportObjJson.PASSWORD_ID);
            var studB = getTestFromReportJSON(reportObjJson.studentTestBDetails, reportObjJson.PASSWORD_ID);
            studentDetails = studA.concat(studB);
        }
        return studentDetails;
    }

    function getTestFromReportJSON(studentTestDetails, passwordID) {
        var testDetails = [];
        if (studentTestDetails) {
            studentTestDetails.forEach(element => {
                var testDetail = {};
                testDetail.TEST_ID = element.TEST_ID;
                testDetail.PASSWORD_ID = passwordID;
                testDetail.STUDENT_ID = element.STUDENT_ID;
                testDetails.push(testDetail);
            });
        }
        return testDetails;
    }

    this.getQuestionReport = function (questionId, testId, passwordId, questionType, viewtype) {
        $('#itemreport').empty();
        $('#itemreport').css("display", "none");
        if (viewtype == 'testview') {
            $('#studentreport').empty();
            $('#studentreport').css("display", "none");

        } else if (viewtype == 'studentview') {
            $('#testreport').empty();
            $('#testreport').css("display", "none");
        }
        rosterModel.getQuestionReport(questionId, testId, passwordId, questionType, function (questionObjJson) {
            $('#itemreport').append(can.view('/assets/views/questionViewer.ejs', { quesObj: questionObjJson }));
            locater.unEscapeInnerHTML();
            $('#itemreport').css("display", "block");
        });
    };

    this.getStudentReport = function (studentId) {
        $('#studentreport').empty();
        $('#studentreport').css("display", "none");
        $('#testreport').empty();
        $('#testreport').css("display", "none");
        rosterModel.getStudentReport(studentId, function (stdTestJson) {
            $('#studentreport').append(can.view('/assets/views/studentReportView.ejs', { stdreportObj: stdTestJson }));
            $('#studentreport').css("display", "block");
        });
    }


    /* Export Roster Data to CSV
       -- Temporarily uses Student Id instead of Real Name
     */
    this.exportToCSV = function (rowId) {
        var jsonData = allRostersData;
        var exportData = [];
        exportData.push([jsonData[rowId].ROSTER_NAME, ""]);
        exportData.push(["Real Name", "Username"]);
        for (var j = 0; j < jsonData[rowId].STUDENT_NAMES.length; j++) {
            var stdName = jsonData[rowId].STUDENT_NAMES[j].STUDENT_NAME;
            var std = locater.getsensitive("realname", stdName, sensitivedata);
            exportData.push([std, jsonData[rowId].STUDENT_NAMES[j].STUDENT_NAME]);
        }
        arrayToCsv(exportData, jsonData[rowId].ROSTER_NAME);
    };

    this.exportQuestionToCSV = function (questionObjString) {
        var questionObj = JSON.parse(questionObjString);
        var optLen = Object.keys(questionObj.optionDetails).length;
        var exportData = [];
        exportData.push([questionObj.QUESTION_ORDER + questionObj.PART_ORDER + ". " + questionObj.QUESTION.toString()]);
        exportData.push([" "]);
        exportData.push(["Option", "Node(s)", "%answered"]);

        for (var i = 0; i < Object.keys(questionObj.optionDetails).length; i++) {
            var optionArr = [];
            var node = ((questionObj.optionDetails[i].NODES) ? questionObj.optionDetails[i].NODES : "");
            var percent = questionObj.optionDetails[i].PERCENT;
            if (percent == '0.0%') {
                percent = '0%';
            } else if (percent == '100.0%') {
                percent = '100%';
            }

            if (questionObj.optionDetails[i].ISVALID == true) {
                optionArr.push(questionObj.optionDetails[i].OPTION_ORDER + ". " + questionObj.optionDetails[i].OPTION_TITLE + "✓");
            } else {
                optionArr.push(questionObj.optionDetails[i].OPTION_ORDER + ". " + questionObj.optionDetails[i].OPTION_TITLE);
            }
            optionArr.push(node);
            optionArr.push(percent.toString());
            exportData.push(optionArr);
            if (i == (optLen - 1) && questionObj.QUESTION_TYPE == 'cr') {
                var otherpercent = questionObj.OTHER_PERCENT;
                if (otherpercent == '0.0%') {
                    otherpercent = '0%';
                } else if (otherpercent == '100.0%') {
                    otherpercent = '100%';
                }
                exportData.push(["Other", " ", otherpercent.toString()]);
            }

        }
        arrayToCsv(exportData, "Item Report_" + questionObj.QUESTION_ORDER);

    };

    this.exportStudentTestToCSV = function (studentTestObjStr) {
        var studentTestObj = JSON.parse(studentTestObjStr);
        var exportData = [];

        for (var i = 0; i < Object.keys(studentTestObj.studentTestDetails).length; i++) {
            var stdreportHeading = [];
            stdreportHeading.push("Locater Tool Name");
            stdreportHeading.push("Due Date");
            stdreportHeading.push("Date Finished");
            stdreportHeading.push("Outcome");
            var quesLength = Object.keys(studentTestObj.studentTestDetails[i].questionDetails).length;
            for (var j = 0; j < quesLength; j++) {
                stdreportHeading.push(studentTestObj.studentTestDetails[i].questionDetails[j].QUESTION_ORDER.toString() + studentTestObj.studentTestDetails[i].questionDetails[j].PART_ORDER.toString());
            }
            exportData.push(stdreportHeading);

            var stdTestArr = [];
            var outcome = studentTestObj.studentTestDetails[i].OUTCOME + " / " + studentTestObj.studentTestDetails[i].NOOFQUEST;
            var testDetails = studentTestObj.studentTestDetails[i].TEST_TITLE + "(" + studentTestObj.studentTestDetails[i].STUDENT_TITLE + " (" + studentTestObj.studentTestDetails[i].TEST_VERSION + "))";
            stdTestArr.push(testDetails);
            if (studentTestObj.studentTestDetails[i].DUE_DATE == null || studentTestObj.studentTestDetails[i].DUE_DATE == '') {
                stdTestArr.push(" ");
            } else {
                stdTestArr.push(studentTestObj.studentTestDetails[i].DUE_DATE + "   " + studentTestObj.studentTestDetails[i].DUE_TIME);
            }
            stdTestArr.push(studentTestObj.studentTestDetails[i].DATE_FINISHED.toString());
            stdTestArr.push(outcome);

            for (var k = 0; k < quesLength; k++) {
                if (studentTestObj.studentTestDetails[i].questionDetails[k].RESPONSE_VALID == true) {
                    stdTestArr.push("✓");
                } else {
                    stdTestArr.push(studentTestObj.studentTestDetails[i].questionDetails[k].RESPONSE.toString());
                }
            }
            exportData.push(stdTestArr);
            exportData.push(["  ", "  "]);
        }

        arrayToCsv(exportData, "Student Report_" + studentTestObj.studentTestDetails[0].STUDENT_NAME);

    };

    this.exportTestReportToCSV = function (reportviewObjString, testObjString) {
        var testReportObj = JSON.parse(reportviewObjString);
        var testObj = JSON.parse(testObjString);
        var exportData = [];
        var questionNumbers = [];
        var outcome;
        var dateStr;
        var percentA = [];
        var incorrectresponseA = [];
        var nodesA = [];
        var percentB = [];
        var incorrectresponseB = [];
        var nodesB = [];
        if (testReportObj.studentTestADetails != null && testReportObj.studentTestADetails.length > 0) {
            var questionLength = testReportObj.studentTestADetails[0].questionDetails.length;
            questionNumbers.push("Student");
            questionNumbers.push("Date Finished");
            questionNumbers.push("Outcome");
            for (var i = 0; i < questionLength; i++) {
                questionNumbers.push(testReportObj.studentTestADetails[0].questionDetails[i].QUESTION_ORDER.toString() + testReportObj.studentTestADetails[0].questionDetails[i].PART_ORDER.toString());
            }
            var testDetails = testReportObj.studentTestADetails[0].TEST_TITLE + "(" + testReportObj.studentTestADetails[0].STUDENT_TITLE + " (" + testReportObj.studentTestADetails[0].TEST_VERSION + "))";
            exportData.push([testDetails]);
            exportData.push(questionNumbers);
            for (var i = 0; i < Object.keys(testReportObj.studentTestADetails).length; i++) {
                var studentDetailsA = [];
                if (testReportObj.studentTestADetails[i].DATE_FINISHED == null || testReportObj.studentTestADetails[i].DATE_FINISHED == '') {
                    dateStr = " ";
                } else {
                    dateStr = testReportObj.studentTestADetails[i].DATE_FINISHED;
                }
                outcome = testReportObj.studentTestADetails[i].OUTCOME + " / " + testReportObj.studentTestADetails[i].NOOFQUEST;
                var stdname = testReportObj.studentTestADetails[i].STUDENT_NAME;
                var std = locater.getsensitive("realname", stdname, sensitivedata);
                var studentNameToPush = (std == "" ? stdname : std);
                studentDetailsA.push(studentNameToPush);
                studentDetailsA.push(dateStr);
                studentDetailsA.push(outcome.toString());

                for (var k = 0; k < questionLength; k++) {
                    var resp = testReportObj.studentTestADetails[i].questionDetails[k].RESPONSE;
                    if (resp == null || resp == '') {
                        resp = '  ';
                    }
                    if (testReportObj.studentTestADetails[i].questionDetails[k].ISVALID == true) {
                        studentDetailsA.push("✓");
                    } else {
                        studentDetailsA.push(resp.toString());
                    }
                }
                exportData.push(studentDetailsA);
            }
            percentA.push("% correct");
            percentA.push("");
            percentA.push("");
            incorrectresponseA.push("Most common incorrect response(s)");
            incorrectresponseA.push("");
            incorrectresponseA.push("");
            nodesA.push("Node(s) for common incorrect");
            nodesA.push("");
            nodesA.push("");
            for (var k = 0; k < questionLength; k++) {
                var nodeflag = 'notset';
                var respFlag = 'notset';
                var percent = testReportObj.studentTestADetails[0].questionDetails[k].PERCENT;
                if (percent == '0.0%') {
                    percent = '0%';
                } else if (percent == '100.0%') {
                    percent = '100%';
                };
                percentA.push(percent.toString());

                for (var m = 0; m < Object.keys(testReportObj.studentTestADetails[0].incorrectAResponse).length; m++) {
                    if (testReportObj.studentTestADetails[0].questionDetails[k].QUESTION_ID == testReportObj.studentTestADetails[0].incorrectAResponse[m].QUESTION_ID) {
                        respFlag = 'set';
                        nodeflag = "set";
                        var incorrectresp = testReportObj.studentTestADetails[0].incorrectAResponse[m].INCORRECT_RESPONSE;
                        if (incorrectresponseA) {
                            incorrectresponseA.push(incorrectresp);
                        } else {
                            incorrectresponseA.push(' ');
                        }
                        // setting common incorrect nodes
                        var nodelength = Object.keys(testReportObj.studentTestADetails[0].incorrectAResponse[m].commonNodes).length;
                        var node = "";
                        if (nodelength > 0) {
                            for (n = 0; n < nodelength; n++) {//common incorrect nodes loop
                                node = node + " " + testReportObj.studentTestADetails[0].incorrectAResponse[m].commonNodes[n].response + ":" + testReportObj.studentTestADetails[0].incorrectAResponse[m].commonNodes[n].nodes;
                            }
                            nodesA.push(node);
                        } else {
                            node = "";
                            nodesA.push(' ');
                        }
                    }
                }
                if (respFlag == 'notset') {
                    incorrectresponseA.push(" ");
                }
                if (nodeflag == 'notset') {
                    nodesA.push(" ");
                }
            }
            exportData.push(percentA);
            exportData.push(incorrectresponseA);
            exportData.push(nodesA);
            exportData.push([" ", " "]);
        }
        if (testReportObj.studentTestBDetails != null && testReportObj.studentTestBDetails.length > 0) {
            var questionNumbersB = [];
            var testDetailsB = testReportObj.studentTestBDetails[0].TEST_TITLE + "(" + testReportObj.studentTestBDetails[0].STUDENT_TITLE + " (" + testReportObj.studentTestBDetails[0].TEST_VERSION + "))";
            exportData.push([testDetailsB]);
            questionNumbersB.push("Student");
            questionNumbersB.push("Date Finished");
            questionNumbersB.push("Outcome");
            var quesLength = Object.keys(testReportObj.studentTestBDetails[0].questionDetails).length;
            for (var i = 0; i < quesLength; i++) {
                questionNumbersB.push(testReportObj.studentTestBDetails[0].questionDetails[i].QUESTION_ORDER.toString() + testReportObj.studentTestBDetails[0].questionDetails[i].PART_ORDER.toString());
            }
            exportData.push(questionNumbersB);

            for (var i = 0; i < Object.keys(testReportObj.studentTestBDetails).length; i++) {
                var studentDetailsB = [];

                if (testReportObj.studentTestBDetails[i].DATE_FINISHED == null || testReportObj.studentTestBDetails[i].DATE_FINISHED == '') {
                    dateStr = " ";
                } else {
                    dateStr = testReportObj.studentTestBDetails[i].DATE_FINISHED;
                }
                outcome = testReportObj.studentTestBDetails[i].OUTCOME + " / " + testReportObj.studentTestBDetails[i].NOOFQUEST;
                var stdname = testReportObj.studentTestBDetails[i].STUDENT_NAME;
                var std = locater.getsensitive("realname", stdname, sensitivedata);
                var studentNameToPush = (std == "" ? stdname : std);
                studentDetailsB.push(studentNameToPush);
                studentDetailsB.push(dateStr);
                studentDetailsB.push(outcome.toString());

                for (var k = 0; k < quesLength; k++) {
                    var responseB = testReportObj.studentTestBDetails[i].questionDetails[k].RESPONSE;
                    if (responseB == null || responseB == '') {
                        responseB = '  ';
                    }
                    if (testReportObj.studentTestBDetails[i].questionDetails[k].ISVALID == true) {
                        studentDetailsB.push("✓");
                    } else {
                        studentDetailsB.push(responseB);
                    }
                }
                exportData.push(studentDetailsB);

            }

            percentB.push("% correct");
            percentB.push(" ");
            percentB.push(" ");
            incorrectresponseB.push("Most common incorrect response(s)");
            incorrectresponseB.push(" ");
            incorrectresponseB.push(" ");
            nodesB.push("Node(s) for common incorrect");
            nodesB.push(" ");
            nodesB.push(" ");
            for (var l = 0; l < quesLength; l++) {
                var nodeflagb = 'notset';
                var respFlagb = 'notset';
                var percent = testReportObj.studentTestBDetails[0].questionDetails[l].PERCENT;
                if (percent == '0.0%') {
                    percent = '0%';
                } else if (percent == '100.0%') {
                    percent = '100%';
                };
                percentB.push(percent.toString());
                // common incorrect response loop
                for (var m = 0; m < Object.keys(testReportObj.studentTestBDetails[0].incorrectBResponse).length; m++) {
                    if (testReportObj.studentTestBDetails[0].questionDetails[l].QUESTION_ID == testReportObj.studentTestBDetails[0].incorrectBResponse[m].QUESTION_ID) {
                        nodeflagb = 'set';
                        respFlagb = 'set';
                        var incorrectresp = testReportObj.studentTestBDetails[0].incorrectBResponse[m].INCORRECT_RESPONSE;
                        if (incorrectresponseB) {
                            incorrectresponseB.push(incorrectresp);
                        } else {
                            incorrectresponseB.push(' ');
                        }
                        // setting common incorrect nodes
                        var nodelength = Object.keys(testReportObj.studentTestBDetails[0].incorrectBResponse[m].commonNodes).length;
                        var node = "";
                        if (nodelength > 0) {
                            for (n = 0; n < nodelength; n++) {//common incorrect nodes loop
                                node = node + " " + testReportObj.studentTestBDetails[0].incorrectBResponse[m].commonNodes[n].response + ":" + testReportObj.studentTestBDetails[0].incorrectBResponse[m].commonNodes[n].nodes;
                            }
                            nodesB.push(node);
                        } else {
                            node = "";
                            nodesB.push(' ');
                        }
                    }
                }
                if (respFlagb == 'notset') {
                    incorrectresponseB.push(" ");
                }
                if (nodeflagb == 'notset') {
                    nodesB.push(" ");
                }
            }
            exportData.push(percentB);
            exportData.push(incorrectresponseB);
            exportData.push(nodesB);
        }

        exportData.push([" ", " "]);
        var testStdLength = Object.keys(testObj.studentDetails).length;
        if (testStdLength != parseInt(testObj.studentsCompleted)) {
            exportData.push(["Incomplete"]);
            for (var j = 0; j < Object.keys(testObj.studentDetails).length; j++) {
                if (testObj.studentDetails[j].ISCOMPLETE == false) {
                    var stdname = testObj.studentDetails[j].USERNAME;
                    var std = locater.getsensitive("realname", stdname, sensitivedata);
                    var studentNameToPush = (std == "" ? stdname : std);
                    exportData.push([studentNameToPush]);
                }
            }
        }
        arrayToCsv(exportData, "Test Report_" + testReportObj.TEST_TITLE);
    }


    // /* Prints a DIV */
    this.printDiv = function (sourceDivId, printDivId, toPrint) {
        var sourceHTML, tempPrintHTML;
        if (sourceDivId == "testresultviewiframe") {
            sourceHTML = $('#' + sourceDivId).contents().find('body');
            tempPrintHTML = sourceHTML.find('#testform');
            document.getElementById(printDivId).innerHTML = tempPrintHTML.html();
        } else if (sourceDivId == "testpreviewiframe") {
            sourceHTML = $('#' + sourceDivId).contents().find('body');
            tempPrintHTML = sourceHTML.find('#testform');
            document.getElementById(printDivId).innerHTML = tempPrintHTML.html();
        }
        else {
            sourceHTML = document.getElementById(sourceDivId).innerHTML;
            tempPrintHTML = sourceHTML.replace(/id=(["'])([^"']+)\1/g, 'id="PRINT$2"');
            document.getElementById(printDivId).innerHTML = tempPrintHTML;
        }
        if (toPrint) {
            window.print();
        }
    };

    //This methid is triggerred before print - To set print div for Ctrl+P action
    window.onbeforeprint = function () {
        if (($('#studentreport').css('display') == 'block')) {
            if (($('#itemreport').css('display') == 'block')) {
                locater.printDiv('putitemreport', "printDiv", false);
            } else if ($('#report').css('display') == 'block') {
                locater.printDiv('testresultviewiframe', "printDiv", false);
            }
            else {
                locater.printDiv('putstdreport', "printDiv", false);
            }

        } else if (($('#testviewer').css('display') == 'block')) {
            if (($('#itemreport').css('display') == 'block')) {
                locater.printDiv('putitemreport', "printDiv", false);
            } else if ($('#report').css('display') == 'block') {
                locater.printDiv('testresultviewiframe', "printDiv", false);
            } else {
                locater.printDiv('puttestreport', "printDiv", false);
            }
        }
        else if ($('#testpreviewer').css('display') == 'block') {
            locater.printDiv('testpreviewiframe', "printDiv", false);
        }
        else {
            locater.printDiv('classrosterdiv', 'printDiv', false);
        }
    };

    //This meth0d is triggerred after print - To set print div back to empty
    window.onafterprint = function () {
        var tempPrintEl = document.getElementById('printDiv');
        if (tempPrintEl)
            tempPrintEl.innerHTML = '';
    };

    /* End of Print Methods */

    this.addpikaday = function (idVal) {
        var field = $("#" + idVal)[0];
        var picker = new Pikaday({
            field: field,
            onSelect: function (date) {
                var datestring = picker.toString();
                field.value = datestring;
            }
        });
        picker.show();
        document.getElementById(idVal).addEventListener('change', function () {
            if (field.value != null || field.value != '') {
                picker.destroy();
            }
        });
    };

    this.localPostfix = function () {
        var email = document.getElementById("emailinput")['value'];
        var splat = location.href.split("/");
        var instance = (!splat || splat.length < 5) ? "" : splat[splat.length - 3].replace(/_.*/, "");
        return "_" + email + "_" + instance;
    };

    this.stringToHex = function (string) {
        return string.split("").map(function (char) {
            return ("000" + (char.charCodeAt(0).toString(16))).slice(-4);
        }).join("");
    };

    this.bytesToHex = function (arrayBuffer) {
        var byteArray = new Uint8Array(arrayBuffer);
        var hexString = "";
        for (var i = 0; i < byteArray.byteLength; i++)
            hexString += ("0" + byteArray[i].toString(16)).slice(-2);
        return hexString;
    };

    this.hexToBytes = function (hexString) {
        if (typeof hexString !== 'string')
            return new Uint8Array();
        hexString = hexString.toLowerCase();
        if (!/^[0-9a-f]+$/.test(hexString))
            return new Uint8Array();

        if (hexString.length % 2 !== 0) {
            throw Error("Must have an even number of hex digits to convert to bytes");
        }
        var numBytes = hexString.length / 2;
        var byteArray = new Uint8Array(numBytes);
        for (var i = 0; i < numBytes; i++) {
            byteArray[i] = parseInt(hexString.substr(i * 2, 2), 16);
        }
        return byteArray;
    }

    this.hashpassphrase = function (uhexedpassphrase, callback, hidealerts, sendifnotfound) {
        var email = document.getElementById("emailinput")['value'];
        var rosterjwk = localStorage.getItem("rosterjwk" + locater.localPostfix());
        if (rosterjwk) {
            var parsedjwk = JSON.parse(rosterjwk);
            var cryptoPromise = crypto.subtle.importKey(
                "jwk", parsedjwk, { name: "AES-GCM" }, true, ["encrypt", "decrypt"]
            )
                .then(function (keyObject) {
                    aeskey = keyObject;
                    callback(hidealerts, sendifnotfound);
                });
            //Get sensitivedata from localStorage and assign to variable.
            sensitivedata = JSON.parse(localStorage.getItem("sensitive" + locater.localPostfix()));
            return cryptoPromise;
        }

        var passphrase = this.stringToHex(uhexedpassphrase);
        var salt = this.stringToHex(email + "some different salt \uD83D\uDF14"); // Using a different salt than the one used in the login page--the login page's PBKDF2 output gets sent to the server, and we don't want to (even temporarily) know the key used to encrypt student-identifiable information.
        var iterations = 1024 * 1024;

        var start = performance.now();
        var passBytes = (new TextEncoder("utf-8")).encode(passphrase);
        var cryptoPromise = crypto.subtle.importKey(
            "raw", passBytes, { name: "PBKDF2" }, false, ["deriveKey"]
        )
            .then(function (baseKey) {
                return crypto.subtle.deriveKey({
                    name: "PBKDF2",
                    salt: (new TextEncoder("utf-8")).encode(salt),
                    iterations: iterations,
                    hash: { name: "SHA-1" }
                }, baseKey, { name: "AES-GCM", length: 128 }, true, ["encrypt", "decrypt"]);
            })
            .then(function (keyObject) {
                aeskey = keyObject;
                callback(hidealerts, sendifnotfound);
                return crypto.subtle.exportKey("jwk", keyObject);
            })
            .then(function (jwk) {
                var email = document.getElementById("emailinput").value;
                localStorage.setItem("rosterjwk" + locater.localPostfix(), JSON.stringify(jwk));
            })
            .catch(function (e) {
                if (!hidealerts)
                    alert("Could not hash passphrase with the details provided.");
            });
        return cryptoPromise;
    };
    this.ajaxgetsensitive = function (hidealerts, sendifnotfound) {
        if (!aeskey)
            return alert("Please enter a passphrase.");

        var ajaxrequest = new XMLHttpRequest();
        ajaxrequest.open("GET", "/locatertool/getUserString", true);

        ajaxrequest.onreadystatechange = function () {
            if (ajaxrequest.readyState == 4 && ajaxrequest.status == 200) {
                if (!/NOTFOUND/.test(ajaxrequest.responseText) && !/ERROR/.test(ajaxrequest.responseText)) {
                    var stringResp = ajaxrequest.responseText.replace(/^\s+|\s+$/, "");
                    //string = JSON.parse(string);
                    var splitArray = stringResp.split("\t");
                    var ciphertext = splitArray[0];
                    var resetwarning = splitArray[1];
                    locater.decrypttext(ciphertext, locater.ajaxsetsensitive, hidealerts, resetwarning);
                }
                else if (!/NOTFOUND/.test(ajaxrequest.responseText)) {
                    if (!hidealerts)
                        alert(ajaxrequest.responseText);
                    locater.getsensitivefromstorage();
                }
                else {
                    document.getElementById("notencryptedwarning").style.display = "";
                    locater.getsensitivefromstorage();
                    if (sendifnotfound) {
                        locater.ajaxsetsensitive();
                    }
                    else
                        aeskey = null;
                }
            }
        }
        ajaxrequest.send();
    };
    this.getEmail = function () {
        $.ajax({
            url: '/locatertool/getEmail',
            type: "GET",
            dataType: 'text',
            success: function (email) {
                document.getElementById("emailinput")['value'] = email;
                setTimeout(function () {
                    var finalusername = document.getElementById("emailinput")['value'];
                    if (!finalusername) {
                        document.getElementById("emailinput")['value'] = finalusername;
                        document.getElementById("encryptingmessage").style.disabled = "true";
                    }

                    var splat = location.href.split("/");
                    var instance = (!splat || splat.length < 5) ? "" : splat[splat.length - 3].replace(/_.*/, "");
                    var rosterjwk = finalusername ? localStorage.getItem("rosterjwk_" + finalusername + "_" + instance) : false;
                    if (rosterjwk) {
                        usinglocalkey = true;
                        locater.hashpassphrase(null, locater.ajaxgetsensitive, false);
                    } else {
                        document.getElementById("passphrasediv").style.display = "";
                        document.getElementById("notencryptedwarning").style.display = "";
                    }
                    (function () {
                        if (typeof hub !== 'undefined')
                            document.getElementById("newtablink").style.display = "";
                    })();
                }, 200);
            },
            error: function (jqXHR) {
                console.log("Error in get email: : " + jqXHR.responseText);
            }
        });
    };
    this.getsensitive = function (field, pseudonym, sensitivedata) {
        if (sensitivedata != null && sensitivedata[field][pseudonym])
            return sensitivedata[field][pseudonym];
        return "";
    };

    this.encrypttext = function (plaintext, callback1, callback2) {
        var iv = new Uint8Array(16);
        crypto.getRandomValues(iv);
        var plainbytes = (new TextEncoder("utf-8")).encode(plaintext);
        if (!aeskey)
            return false;

        return crypto.subtle.encrypt({ name: "AES-GCM", iv: iv }, aeskey, plainbytes)
            .then(function (cipherbuffer) {
                var cipherbytes = new Uint8Array(cipherbuffer);
                var ciphercombined = new Uint8Array(16 + cipherbytes.length);

                for (var i = 0; i < 16; i++)
                    ciphercombined[i] = iv[i];
                for (var i = 0; i < cipherbytes.length; i++)
                    ciphercombined[i + 16] = cipherbytes[i];
                callback1(locater.bytesToHex(ciphercombined), callback2);
            })
            .catch(function (e) {
                alert("Error:\n\n" + e);
                console.log("Error in encrypttext: ", e);
            });
    };
    this.ajaxsetsensitive = function (encryptedtext, callback) {
        if (!encryptedtext) {
            var plaintext = JSON.stringify(sensitivedata);
            locater.encrypttext(plaintext, locater.ajaxsetsensitive, callback);
            return 0;
        }
        var datastring = encryptedtext;
        var hint = document.getElementById('hintinput')['value'];
        // var resetting = isresettingpassphrase ? "true" : "false";
        $.ajax({
            url: '/locatertool/postUserString',
            type: "POST",
            dataType: 'text',
            data: { stringVal: datastring, hint: hint, resetting: isresettingpassphrase },
            success: function () {
                document.getElementById("submitpassphrase").style.display = "none";
                document.getElementById("resetpassphrase").style.display = "none";
                document.getElementById("changepassphrase").style.display = "";
                document.getElementById("encryptingmessage").style.display = "";
                document.getElementById("passphraseinput")['value'] = "";
                document.getElementById("passphrasediv").style.display = "none";
            },
            error: function (jqXHR) {
                console.log("Error: : " + jqXHR.responseText);
            }
        });
    }
    this.getsensitivefromstorage = function () {
        var email = document.getElementById("emailinput")['value'];
        var storedsensitive = localStorage.getItem("sensitive" + locater.localPostfix());
        if (storedsensitive) {
            var localdata = JSON.parse(storedsensitive);
            var updateserver = false;
            if (typeof sensitivedata.timestamp === "number" && typeof localdata.timestamp === "number") {
                if (sensitivedata.timestamp === localdata.timestamp) {
                    return 0;
                }
                else if (sensitivedata.timestamp > localdata.timestamp) {
                    locater.setsensitivetostorage();
                    return 0;
                }
                else
                    updateserver = true;
            }
            sensitivedata = localdata;
            if (updateserver) {
                locater.ajaxsetsensitive();
            }
        }
        else if (sensitivedata) {
            locater.setsensitivetostorage();
        }
    };
    this.setsensitive = function (field, pseudonym, element) {
        var donotsend = false;
        var value = element.value;
        if (!sensitivedata) {
            sensitivedata = { email: {}, realname: {}, timestamp: 0 };
        }
        sensitivedata.timestamp = Date.now();

        var padbuffer = new Uint32Array(1);
        window.crypto.getRandomValues(padbuffer);
        sensitivedata.randompad = (new Array(padbuffer[0] % 2048)).join("X");

        element.style.backgroundColor = "";
        // if (!aeskey && value !== "" && false) {
        //     alert("To edit the real name and email fields, you must enter a passphrase.");
        //     element.value = "";
        //     element.style.backgroundColor = "";
        //     value = "";
        //     donotsend = true;
        //     // 					render();
        // }
        if (!aeskey && value === "") {
            element.style.backgroundColor = "";
            return 0;
        }
        if (value === sensitivedata[field][pseudonym] || (value === "" && sensitivedata[field][pseudonym] === undefined)) {
            element.style.backgroundColor = "";
            return false;
        }
        else if (value === "" && sensitivedata[field][pseudonym] !== undefined)
            delete sensitivedata[field][pseudonym];
        else if (value !== "")
            sensitivedata[field][pseudonym] = value;
        var underscored = pseudonym.split(" ").join("_");
        var inputstoupdate = document.getElementsByClassName(field + "_" + underscored);
        for (var i = 0; i < inputstoupdate.length; i++)
            inputstoupdate[i]['value'] = value;
        if (!donotsend && aeskey) {
            locater.ajaxsetsensitive(null, function () { element.style.backgroundColor = ""; });
        }
        //getassignedtests(false);
        locater.setsensitivetostorage(true);
    };

    this.setsensitivetostorage = function (fromSetSensitive) {
        if (sensitivedata) {
            localStorage.setItem("sensitive" + locater.localPostfix(), JSON.stringify(sensitivedata));
            if (!fromSetSensitive) {
                var test = JSON.parse(localStorage.getItem("sensitive" + locater.localPostfix()));
                test = test.realname;
                for (var pseudonym in test) {
                    var underscored = pseudonym.split(" ").join("_");
                    var inputstoupdate = document.getElementsByClassName("realname_" + underscored);
                    for (var i = 0; i < inputstoupdate.length; i++)
                        inputstoupdate[i]['value'] = test[pseudonym];
                }
            }
        }
    };

    this.decrypttext = function (ciphertext, callback, hidealerts, resetwarning) {
        var ciphercombined = locater.hexToBytes(ciphertext);
        var cipherbytes = new Uint8Array(ciphercombined.length - 16);
        var iv = new Uint8Array(16);

        for (var i = 0; i < 16; i++)
            iv[i] = ciphercombined[i];
        for (var i = 0; i < cipherbytes.length; i++)
            cipherbytes[i] = ciphercombined[i + 16];

        var decryptedOK = false;
        return crypto.subtle.decrypt({ name: "AES-GCM", iv: iv }, aeskey, cipherbytes)
            .then(function (plainbytes) {
                var plaintext = new TextDecoder("utf-8").decode(plainbytes);
                sensitivedata = JSON.parse(plaintext);
                locater.getsensitivefromstorage();
                document.getElementById("submitpassphrase").style.display = "none";
                document.getElementById("resetpassphrase").style.display = "none";
                document.getElementById("changepassphrase").style.display = "";
                document.getElementById("encryptingmessage").style.display = "";
                document.getElementById("passphraseinput")['value'] = "";
                document.getElementById("passphrasediv").style.display = "none";
                decryptedOK = true;
                callback();
                if (resetwarning) {
                    document.getElementById("passphrasediv").style.display = "";
                    resetpassphrasewarning = true;
                    document.getElementById("resetpassphrasewarning").style.display = "";
                    document.getElementById("notencryptedwarning").style.display = "none";
                    document.getElementById("badpassphrase").style.display = "none";
                    document.getElementById("encryptingmessage").style.display = "none";
                }
                return plaintext;
            })
            .catch(function (e) {
                aeskey = null;
                document.getElementById("resetpassphrase").style.display = "";
                document.getElementById("badpassphrase").style.display = "";
                document.getElementById("notencryptedwarning").style.display = "";
                document.getElementById("passphrasediv").style.display = "";
                console.log(e);
                // if (usinglocalkey && !decryptedOK) {
                localStorage.removeItem("rosterjwk" + locater.localPostfix());
                // 							setTimeout(function() {
                // 								var passphrase = document.getElementById("passphraseinput").value;
                // 								var email = document.getElementById("emailinput").value;
                // 								if(/[\S]+@[\S]+\.[\S]+/.test(email) && passphrase !== "")
                // 									hashpassphrase(passphrase, ajaxgetsensitive, true);
                // 							}, 500);
                // }
                locater.getsensitivefromstorage();
                if (!hidealerts)
                    alert("Error: most likely your passphrase is incorrect.");
            });
    };

    this.showFormAandBLinks = function (testId) {
        $('#previewlink').css('display', 'block');
        //Set testID as ID for the two links
        $('#previewlink .pseudolink').attr('id', testId);
    };
    this.displaytestA = function (id) {
        var url = "/locatertool/testtaker?testpreview=" + id;
        document.getElementById("putpreviewhere").innerHTML = "<iframe id='testpreviewiframe' src='" + url + "' width='100%' height='100%' frameborder='0'></iframe>";
        document.getElementById("testpreviewer").style.display = "";
    };
    this.displaytestB = function (id) {
        var url = "/locatertool/testtaker?companionpreview=" + id;
        document.getElementById("putpreviewhere").innerHTML = "<iframe id='testpreviewiframe' src='" + url + "' width='100%' height='100%' frameborder='0'></iframe>";
        document.getElementById("testpreviewer").style.display = "";
    };
    this.displayTest = function (testId, passwordId, studentId) {
        $('#report').empty();
        rosterModel.getCompletedStudents(passwordId, function (comStudJson) {
            $('#report').append(can.view('/assets/views/testpreview.ejs', { completedStudJSON: comStudJson, studentId: studentId }));
            var url = "/locatertool/testtaker?testpreview=" + testId + "&passwordId=" + passwordId + "&" + "studentId=" + studentId;
            $('#putresulthere').html("<iframe id='testresultviewiframe' src='" + url + "' width='100%' height='100%' frameborder='1'></iframe>");
            $('#testresultviewer').css('display', "");
            $('#report').css("display", "block");
        });

    };
    interact('.windowh3').draggable({
        // enable inertial throwing
        inertia: true,

        // call this function on every dragmove event
        onmove: dragMoveListener,
        // call this function on every dragend event
        onend: function (event) {
        },
        onstart: function (event) {
        }
    });

    interact('#itemviewer,#testviewer,#studentreportviewer').resizable({
        //preserveAspectRatio: false,
        edges: { left: true, right: true, bottom: true, top: true },
        restrictEdges: {
            outer: 'parent',
            endOnly: true,
        },
        restrictSize: {
            min: { width: 100, height: 50 },
        },
        inertia: true,
    }).on('resizemove', function (event) {
        var target = event.target,
            x = (parseFloat(target.getAttribute('data-x')) || 0),
            y = (parseFloat(target.getAttribute('data-y')) || 0);

        // update the element's style
        target.style.width = event.rect.width + 'px';
        target.style.height = event.rect.height + 'px';

        // translate when resizing from top or left edges
        x += event.deltaRect.left;
        y += event.deltaRect.top;

        target.style.webkitTransform = target.style.transform =
            'translate(' + x + 'px,' + y + 'px)';

        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);

    });

    function enableiframes(enabled) {
        var iframes = document.getElementsByTagName("iframe");
        for (var i = 0; i < iframes.length; i++) {
            iframes[i].style.pointerEvents = (enabled ? "" : "none");
        }
    }
    var lastz = 10;
    function moveToTop(element, updateprint) {
        lastz++;
        element.style.zIndex = lastz;
    }

    function dragMoveListener(event) {
        var target = event.target.parentNode,
            // keep the dragged position in the data-x/data-y attributes
            x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
            y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

        // translate the element
        target.style.webkitTransform =
            target.style.transform =
            'translate(' + x + 'px, ' + y + 'px)';

        // update the posiion attributes
        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);
    }

    window.dragMoveListener = dragMoveListener;

    this.getStudentName = function (userName) {
        try {
            var studentName = null;
            if (sensitivedata != null) {
                studentName = locater.getsensitive('realname', userName, sensitivedata);
            }
            if (!studentName) {
                studentName = userName;
            }
            return studentName;
        } catch (e) {
            return userName;
        }
    }

    this.loadStudentTestResults = function () {
        var studentDetails = JSON.parse($('#testResultStudentSelect').val());
        locater.displayTest(studentDetails.TEST_ID, studentDetails.PASSWORD_ID, studentDetails.STUDENT_ID);
    }

    this.loadMathJax = function (callback) {
        try {
            if (!MathJaxReady) {
                var mathJaxIntrvl = setInterval(function () {
                    try {
                        if (!mathjaxscriptloaded) {
                            var mathjaxscripttag = document.createElement('script');
                            mathjaxscripttag.setAttribute('src', '/assets/js/external/mathjax/MathJax.js?config=AM_HTMLorMML-full&delayStartupUntil=configured');
                            document.head.appendChild(mathjaxscripttag);
                            mathjaxscriptloaded = true;
                        }

                        MathJax.Hub.Config({ skipStartupTypeset: true, messageStyle: 'none' });
                        MathJax.Hub.Configured();
                        MathJaxReady = true;
                        clearInterval(mathJaxIntrvl);
                        callback();
                    } catch (e) {
                        return false;
                    }
                }, 100)
            } else {
                callback();
            }

        } catch (error) {
            return false;
        }
    };
    this.unEscapeInnerHTML = function () {
        $("div[id^=unEscape]").each(function () {
            var unEscapedHTML = $(this).text()
            $(this).html(unEscapedHTML);
            if (/`.+`/.test($(this).html())) {
                var obj = this;
                if (!MathJaxReady) {
                    locater.loadMathJax(function () { MathJax.Hub.Queue(["Typeset", MathJax.Hub, $(obj)[0]]); })
                } else {
                    MathJax.Hub.Queue(["Typeset", MathJax.Hub, $(this).attr('id')]);
                    //MathJax.Hub.Typeset();
                }
            }
        });
    };
}();

var rosterController = can.Control({
  defaults: {
    userId: '',
    studentId: '',
    rosterId: '',
    studentName: '',
  },
},
  {
    'init': function () {
      $('#createRoster').append(can.view('/assets/views/createRoster.ejs', {}));
      $('#restoreRosters').append(can.view('/assets/views/restoreRosters.ejs', {}));
      $('#locaterTool').append(can.view('/assets/views/locater.ejs', {}));
      //rosterModel.getSensitiveString(this.options.userId, this.proxy('setsensitiveString'));
      rosterModel.getRostersByUserId(this.options.userId, this.proxy('setMyRosterView'));
      locater.getEmail();
    },


    'setMyRosterView': function (json) {
      allRostersData = JSON.parse(JSON.stringify(json));
      rosterModel.getAllTests(this.options.userId, this.proxy('getlocaterTestsView'));
      $('#viewRosters').empty();
      $('#viewRosters').append(can.view('/assets/views/viewRosters.ejs', { viewRosters: json }));
    },

    'getlocaterTestsView': function (testsjson) {
      savedtestData = JSON.parse(JSON.stringify(testsjson));
      rosterModel.getAssignedTests(this.options.userId, this.proxy('getAssignedTestView'));
      var html = can.view.render('/assets/views/assignLocaterView.ejs', { savedTests: savedtestData, rosters: allRostersData });
      $('#assignRosterToTest').empty();
      $('#assignRosterToTest').append(html);
    },

    'getAssignedTestView': function (assignedTestjson) {
      assignedTestData = JSON.parse(JSON.stringify(assignedTestjson));
      var html = can.view.render('/assets/views/assignedTestsView.ejs', { assignedTests: assignedTestData, rosters: allRostersData });
      $('#assignedtests').empty();
      $('#assignedtests').append(html);
    },

    '#refreshdiv click': function () {
      rosterModel.getRostersByUserId(this.options.userId, this.proxy('setMyRosterView'));
    },

    '#restoreremoved click': function (el, ev) {
      rosterModel.getInActiveRostersByUserId(this.options.userId, this.proxy('setRestoreRosterView'));
    },

    'setRestoreRosterView': function (json) {
      $('#restoreInnerDiv').remove();
      $('#removedRostersNStudents').append(can.view('/assets/views/removedRosters.ejs', { removedRosters: json }));

    },

    '.del-roster-yes-btn click': function (el, ev) {
      $('body').css('overflow', 'scroll');
      var rosterId = $('.dialog-overlay').prop('id');
      this.options.rosterId = rosterId;
      var userId = this.options.userId;
      $('.dialog-overlay').parents().fadeOut(500, function () {
        $('.dialog-overlay').remove();
      });
      $('.dialog-overlay').parents().fadeIn();
      rosterModel.deleteRoster(this.options.userId, rosterId, (function (data) {
        var tempUserId = userId;
        var tempRosterId = rosterId;
        return function () {
          $('#rostertableID_' + tempRosterId).remove();
          $('#rostername_' + rosterId).remove();
          if ($('#removedInnerDiv').length) {
            rosterModel.getInActiveRostersByUserId(tempUserId, function (result) {
              $('#removedInnerDiv').remove();
              $('#removedRostersNStudents').append(can.view('/assets/views/removedRosters.ejs', { removedRosters: result }));
            });
            rosterModel.getAssignedTests(tempUserId, function (data) {
              if (data != null && data.length > 0) {
                assignedTestData = JSON.parse(JSON.stringify(data));
                $('#locaterInnerdiv').remove();
                $('#locaterTool').append(can.view('/assets/views/locater.ejs', {}));
                $('#assignedtestsInner').remove();
                $('#assignRosterToTestInner').remove();
                $('#assignRosterToTest').append(can.view('/assets/views/assignLocaterView.ejs', { savedTests: savedtestData, rosters: allRostersData }));
                $('#assignedtests').append(can.view('/assets/views/assignedTestsView.ejs', { assignedTests: assignedTestData, rosters: allRostersData }));

              }
            });
          }
          else {
            rosterModel.getRostersByUserId(userId, function (data) {
              $('#innerViewRostersdiv').remove();
              $('#viewRosters').append(can.view('/assets/views/viewRosters.ejs', { viewRosters: data }));
              allRostersData = JSON.parse(JSON.stringify(data));
            });
            rosterModel.getAssignedTests(tempUserId, function (data) {
              if (data != null && data.length > 0) {
                assignedTestData = JSON.parse(JSON.stringify(data));
                $('#locaterInnerdiv').remove();
                $('#locaterTool').append(can.view('/assets/views/locater.ejs', {}));
                $('#assignedtestsInner').remove();
                $('#assignRosterToTestInner').remove();
                $('#assignRosterToTest').append(can.view('/assets/views/assignLocaterView.ejs', { savedTests: savedtestData, rosters: allRostersData }));
                $('#assignedtests').append(can.view('/assets/views/assignedTestsView.ejs', { assignedTests: assignedTestData, rosters: allRostersData }));

              }
            });
          }
        };
      })());
    },
    '.rmv-std-yes-btn click': function (el, ev) {
      $('body').css('overflow', 'scroll');
      var rosterId = $('.dialog-overlay').prop('id');
      var studentId = $('.dialog').prop('id');
      this.options.rosterId = rosterId;
      this.options.studentId = studentId;
      var userId = this.options.userId;
      $('.dialog-overlay').parents().fadeOut(500, function () {
        $('.dialog-overlay').remove();
      });
      $('.dialog-overlay').parents().fadeIn();
      rosterModel.deleteStudentFromRoster(this.options.userId, rosterId, studentId, (function (data) {
        var tempUserId = userId;
        var tempStudentId = studentId;
        var tempRosterId = rosterId;
        return function () {
          var tableBodyPtr = $('#rostertableID_' + tempRosterId).find('table tbody');
          var rowPtr = tableBodyPtr.find('#studentID_' + tempStudentId);
          rowPtr.remove();
          if ($('#removedInnerDiv').length) {
            rosterModel.getInActiveRostersByUserId(tempUserId, function (result) {
              $('#removedInnerDiv').remove();
              $('#removedRostersNStudents').append(can.view('/assets/views/removedRosters.ejs', { removedRosters: result }));
            });
            rosterModel.getAssignedTests(tempUserId, function (data) {
              if (data != null && data.length > 0) {
                assignedTestData = JSON.parse(JSON.stringify(data));
                $('#locaterInnerdiv').remove();
                $('#locaterTool').append(can.view('/assets/views/locater.ejs', {}));
                $('#assignedtestsInner').remove();
                $('#assignRosterToTestInner').remove();
                $('#assignRosterToTest').append(can.view('/assets/views/assignLocaterView.ejs', { savedTests: savedtestData, rosters: allRostersData }));
                $('#assignedtests').append(can.view('/assets/views/assignedTestsView.ejs', { assignedTests: assignedTestData, rosters: allRostersData }));

              }
            });
          }
          else {
            rosterModel.getRostersByUserId(userId, function (data) {
              $('#innerViewRostersdiv').remove();
              $('#viewRosters').append(can.view('/assets/views/viewRosters.ejs', { viewRosters: data }));
              allRostersData = data;
            });
            rosterModel.getAssignedTests(tempUserId, function (data) {
              if (data != null && data.length > 0) {
                assignedTestData = JSON.parse(JSON.stringify(data));
                $('#locaterInnerdiv').remove();
                $('#locaterTool').append(can.view('/assets/views/locater.ejs', {}));
                $('#assignedtestsInner').remove();
                $('#assignRosterToTestInner').remove();
                $('#assignRosterToTest').append(can.view('/assets/views/assignLocaterView.ejs', { savedTests: savedtestData, rosters: allRostersData }));
                $('#assignedtests').append(can.view('/assets/views/assignedTestsView.ejs', { assignedTests: assignedTestData, rosters: allRostersData }));

              }
            });
          }
        };
      })());
    },

    '.activate-std-yes-btn click': function (el, ev) {
      var rosterId = $('.dialog-overlay').prop('id');
      var studentName = $('.dialog').prop('id');
      this.options.rosterId = rosterId;
      this.options.studentId = studentId;
      var userId = this.options.userId;
      $('.dialog-overlay').parents().fadeOut(500, function () {
        $('.dialog-overlay').remove();
      });
      $('.dialog-overlay').parents().fadeIn(200, function () { });
      rosterModel.activateStudent(this.options.userId, studentId, rosterId, (function (data) {
        var tempStudentId = studentId;
        var tempUserId = userId;
        return function () {
          var removeRosterRowPtr = $('#removedStudentFromRoster').find('tbody');
          removeRosterRowPtr.find('rm-student-' + tempStudentId).remove();
          rosterModel.getRostersByUserId(tempUserId, function (resultActiveRosters) {
            allRostersData = resultActiveRosters;
            $('#innerViewRostersdiv').remove();
            $('#viewRosters').append(can.view('/assets/views/viewRosters.ejs', { viewRosters: resultActiveRosters }));
          });
          rosterModel.getInActiveRostersByUserId(tempUserId, function (resultInActiveRosters) {
            $('#removedInnerDiv').remove();
            $('#removedRostersNStudents').append(can.view('/assets/views/removedRosters.ejs', { removedRosters: resultInActiveRosters }));
          });
          rosterModel.getAssignedTests(tempUserId, function (data) {
            assignedTestData = JSON.parse(JSON.stringify(data));
            if (data != null && data.length > 0) {
              $('#locaterInnerdiv').remove();
              $('#locaterTool').append(can.view('/assets/views/locater.ejs', {}));
              $('#assignedtestsInner').remove();
              $('#assignRosterToTestInner').remove();
              $('#assignRosterToTest').append(can.view('/assets/views/assignLocaterView.ejs', { savedTests: savedtestData, rosters: allRostersData }));
              $('#assignedtests').append(can.view('/assets/views/assignedTestsView.ejs', { assignedTests: assignedTestData, rosters: allRostersData }));

            }
          });
        };
      })());
    },

    '#btn-add-existing click': function (el, ev) {
      $('body').css('overflow', 'scroll');
      var footerId = $('.ftaddexisting').prop('id');
      var ftId = footerId.split("_");
      var rosterId = $('.dialog').prop('id');
      var psuedonym = $('.dialog').find('input').val();
      this.options.rosterId = rosterId;

      rosterModel.checkExistingStudent(this.options.userId, psuedonym, rosterId, function (result) {
        if (!result.addStudentFlag) {
          locater.showAlertMsg(result.errorMsg, "error-OK-btn");
        } else {
          if (Object.keys(result.rosterNames).length > 0) {
            var len = Object.keys(result.rosterNames).length;
            var rosternames = "";
            for (var i = 0; i < len; i++) {
              rosternames = rosternames + ((i == 0) ? "&nbsp;" : ",&nbsp;") + "<b>" + result.rosterNames[i].ROSTER_NAME + "</b>";
            }
            if (locater.showAlertMsg("The student <b>" + psuedonym + "</b> is also enrolled in the following classes:<br/>" + rosternames, "add-OK-btn")) {
              locater.addStudent(result.studentId, result.studentName, rosterId, result.reportVal, ftId[1]);
            }
          }
          else {
            locater.addStudent(result.studentId, result.studentName, rosterId, result.reportVal, ftId[1]);
            $('.dialog-overlay').parents().fadeOut(500, function () {
              $('.dialog-overlay').remove();
            });
            $('.dialog-overlay').parents().fadeIn(200, function () { });
          }
        }
      });
    },

    '#testselect change': function (el, ev) {
      var testOption = $('#testselect option:selected').val();
      if (testOption !== '-1') {
        $('#formdisplay').css("display", "block");
      } else {
        $('#formdisplay').css("display", "none");
      }
    },

    '#btn-add-existing keydown': function (el, ev) {
      if (ev.keyCode === 13) {
        $('#btn-add-existing').trigger("click");
      }
      else if (ev.keyCode === 37) {
        console.log("left key clicked");
        $('#btn-add-existing').blur();
        $('#confirm-cancel-btn').trigger("focus");
      }
    },

    '#confirm-cancel-btn keydown': function (el, ev) {
      if (ev.keyCode === 13) {
        $('#confirm-cancel-btn').trigger("click");
      }
      else if (ev.keyCode === 39) {
        console.log("right clicked");
        $('#confirm-cancel-btn').blur();
        $('#btn-add-existing').trigger("focus");

      }
    },

    '#psuedo-id keydown': function (el, ev) {
      if (ev.keyCode === 13) {
        $('#btn-add-existing').trigger("click");
      }
      else if (ev.keyCode === 9) {
        $('#btn-add-existing').trigger("focus");
      }
    },

    '#alert-ok-btn keydown': function (el, ev) {
      if (ev.keyCode === 13) {
        $('#alert-ok-btn').trigger("click");
      }
    },

    '#confirm-OK keydown': function (el, ev) {
      if (ev.keyCode === 13) {
        $('.del-roster-yes-btn').trigger("click");
      } else if (ev.keyCode == 37) {
        $('#confirm-OK').blur();
        $('.cancel-btn').trigger("focus");
      }
    },

    '.cancel-btn keydown': function (el, ev) {
      if (ev.keyCode === 13) {
        $('.cancel-btn').trigger("click");
      }
      else if (ev.keyCode === 39) {
        $('.cancel-btn').blur();
        $('#confirm-OK').trigger("focus");
      }
    },

    '.cancel-btn, .fa-close click': function (el, ev) {
      $('body').css('overflow', 'scroll');
      $('.dialog-overlay').parents().fadeOut(500, function () {
        $('.dialog-overlay').remove();
      });
      $('.dialog-overlay').parents().fadeIn(200, function () { });
    },

    '.error-OK-btn click': function (el, ev) {
      $('body').css('overflow', 'scroll');
      $('.dialog-overlay').parents().fadeOut(500, function () {
        $('.dialog-overlay').remove();
      });
      $('.dialog-overlay').parents().fadeIn(200, function () { });
    },

    '.error-rename-OK-btn click': function (el, ev) {
      $('body').css('overflow', 'scroll');
      $('.dialog-overlay').parents().fadeOut(500, function () {
        $('.dialog-overlay').remove();
      });
      $('.dialog-overlay').parents().fadeIn(200, function () { });
    },

    '.add-OK-btn click': function (el, ev) {
      $('body').css('overflow', 'scroll');
      $('.dialog-overlay').parents().fadeOut(500, function () {
        $('.dialog-overlay').remove();
      });
      $('.dialog-overlay').parents().fadeIn(200, function () { });
      return true;
    },



    //------contains events for Testbuilder and locater tool

    '#assignTest click': function (el, ev) {
      var flag = 1;
      var rosterChkArray = [];
      var rosterDetailsArray = [];
      $('input:checkbox[name=rosternames]').each(function () {
        if (this.checked || this.indeterminate == true) {
          rosterChkArray.push($(this).parent().text().trim());
          var rosterName = $(this).parent().text().trim();
          var inputId = $(this).attr("id");
          var rosterId = inputId.slice("rostercheckbox_".length, inputId.length);
          $('input:checkbox[name=studentnames_' + rosterId + ']:checked').each(function () {
            if (this.checked) {
              var stdId = $(this).attr("id");
              var stdIdSplit = stdId.split("_");
              rosterDetailsArray.push({ rosterName: rosterName, rosterId: rosterId, studentId: stdIdSplit[2] });
            }
          });
        }
      });
      var testOption = $('#testselect option:selected').val();
      if (testOption === '-1') {
        flag = 0;
        locater.alertMsg("Please select a test.", "error-OK-btn");
        return;
      }
      else if ($('#locatertestpassword').val() == "") {
        flag = 0;
        locater.alertMsg("Please enter a password for the selected locater tool.", "error-OK-btn");
        return;
      }
      else if ($('#datepicker').val() != "" || $('#timeselect option:selected').val() != -1) {
        if ($('#timeselect option:selected').val() == -1) {
          flag = 0;
          locater.alertMsg("The due date you entered is not valid. To set no due date, clear both the date and time fields", "error-OK-btn");
          return;
        }
        else if ($('#datepicker').val() == "") {
          flag = 0;
          locater.alertMsg("The due date you entered is not valid. To set no due date, clear both the date and time fields", "error-OK-btn");
          return;
        }
      }
      else if (rosterChkArray == null || rosterChkArray.length == 0) {
        flag = 0;
        locater.alertMsg("Please select at least one student.", "error-OK-btn");
        return;
      }
      if (flag == 1) {
        var assignTestJson = {};
        assignTestJson.testTitle = $('#testselect option:selected').text().trim();
        assignTestJson.testId = $('#testselect option:selected').val().trim();
        // check for null for duedate 
        var dateString = $('#datepicker').val().trim();
        if (dateString != "") {
          var date = new Date(dateString);
          assignTestJson.dueDate = date.getFullYear().toString() + "-" + (date.getMonth() + 1).toString() + "-" + date.getDate().toString();
        }
        else {
          assignTestJson.dueDate = '';
        }
        // check for null for duetime 
        var dueTime = $('#timeselect option:selected').val();
        if (dueTime != -1) {
          assignTestJson.dueTime = $('#timeselect option:selected').val().trim();
        }
        else {
          assignTestJson.dueTime = '';
        }

        assignTestJson.password = $('#locatertestpassword').val();
        assignTestJson.selfNote = $('#testcomment').val();
        assignTestJson.elmNote = $('#testmessage').val();
        var testData = JSON.parse(JSON.stringify(savedtestData));
        for (var i = 0; i < Object.keys(testData).length; i++) {
          if (parseInt(testData[i].ID) == parseInt(assignTestJson.testId.trim())) {
            assignTestJson.TEST_VERSION = testData[i].TEST_VERSION;
            assignTestJson.COMPANION_ID = testData[i].COMPANION_ID;
            assignTestJson.ACTIVE_TEST_ID = testData[i].ACTIVE_TEST_ID;
            assignTestJson.ASSIGNED_TEST_ID = parseInt(assignTestJson.testId.trim());
          }
        }
        assignTestJson.rosterStudentDetails = rosterDetailsArray;
      }
      var tempId = this.options.userId;
      rosterModel.assignTest(tempId, assignTestJson, function (jsonResponse) {
        if (jsonResponse != null) {
          if (jsonResponse.passwordExitsFlag != null && jsonResponse.passwordExitsFlag == true) {
            locater.alertMsg("ERROR: The password entered is already in use. <br> <b> '" + jsonResponse.password + "' <b>", "error-OK-btn");
            return;
          } else {
            $('#clearAssignTestForm').trigger("click");
            rosterModel.getAssignedTests(tempId, function (data) {
              if (data != null && data.length > 0) {
                assignedTestData = JSON.parse(JSON.stringify(data));
                $('#locaterInnerdiv').remove();
                $('#locaterTool').append(can.view('/assets/views/locater.ejs', {}));
                $('#assignedtestsInner').remove();
                $('#assignRosterToTestInner').remove();
                $('#assignRosterToTest').append(can.view('/assets/views/assignLocaterView.ejs', { savedTests: savedtestData, rosters: allRostersData }));
                $('#assignedtests').append(can.view('/assets/views/assignedTestsView.ejs', { assignedTests: assignedTestData, rosters: allRostersData }));

              }
            });
          }
        }

      });
    },

    '#clearAssignTestForm click': function (el, ev) {
      $('#testselect').val("-1");
      $('#timeselect').val("-1");
      $('#locatertestpassword').val("");
      $('#testcomment').val("");
      $('#testmessage').val("");
      $('#datepicker').val("");
      $('input[name=rosternames]:checked').each(function () {
        $(this).prop('checked', false);
        var inputId = $(this).attr("id");
        var rosterId = inputId.slice("rostercheckbox_".length, inputId.length);
        locater.uncheckRoster(rosterId);
      });
    },
    'setsensitiveString': function (response) {
      var setsensitiveStringVal = "";
      //console.log("aeskey: ", aeskey);
      if (response != null)
        setsensitiveStringVal = response.result;
      if (localStorage.getItem('rosterjwk' + locater.localPostfix()) != null) {
        // aeskey = JSON.parse(localStorage.getItem('rosterjwk' + locater.localPostfix()));
      }
      if (setsensitiveStringVal != "") {
        locater.decrypttext(setsensitiveStringVal, null, false, false);
      }
    },

    '#showhint click': function () {
      rosterModel.showHint(function (hintjson) {
        if (hintjson && hintjson.HINT) {
          $('input#hintinput').val(hintjson.HINT);
        } else {
          $('p#nohint').show();
        }
      });
    }

  });

var rosterModel = can.Model({

    createRoster: function (userId, rosterName, rosterLength, success) {

        $.ajax({
            url: '/locatertool/createRoster',
            dataType: 'json',
            type: "POST",
            data: {
                userId: userId,
                rosterName: rosterName,
                rosterLength: rosterLength
            },
            success: success
        });

    },

    getRostersByUserId: function (userId, success) {
        $.ajax({
            url: '/locatertool/getRostersByUserId',
            dataType: 'json',
            type: "POST",
            data: {
                userId: userId
            },
            success: success
        });
    },

    deleteStudentFromRoster: function (userId, rosterId, studentId, success) {
        $.ajax({
            url: '/locatertool/deleteStudentFromRoster',
            dataType: 'json',
            type: "POST",
            data: {
                userId: userId,
                rosterId: rosterId,
                studentId: studentId
            },
            success: success
        });
    },
    deleteRoster: function (userId, rosterId, success) {
        $.ajax({
            url: '/locatertool/deleteRoster',
            dataType: 'json',
            type: "POST",
            data: {
                userId: userId,
                rosterId: rosterId
            },
            success: success
        });
    },
    renameStudent: function (userId, rosterId, studentId, success) {
        $.ajax({
            url: '/locatertool/renameStudent',
            dataType: 'json',
            type: "POST",
            data: {
                userId: userId,
                rosterId: rosterId,
                studentId: studentId
            },
            success: success
        });
    },

    getRosterNamesofStudent: function (userId, studentId, success) {
        $.ajax({
            url: '/locatertool/getRosterNamesofStudent',
            dataType: 'json',
            type: "POST",
            data: {
                userId: userId,
                studentId: studentId
            },
            success: success
        });
    },

    getInActiveRostersByUserId: function (userId, success) {

        $.ajax({
            url: '/locatertool/getInActiveRostersByUserId',
            dataType: 'json',
            type: "POST",
            data: {
                userId: userId
            },
            success: success
        });

    },
    activateRoster: function (userId, rosterName, success) {
        $.ajax({
            url: '/locatertool/activateRoster',
            dataType: 'json',
            type: "POST",
            data: {
                userId: userId,
                rosterName: rosterName
            },
            success: success
        });
    },
    activateStudent: function (userId, studentId, rosterId, success) {
        $.ajax({
            url: '/locatertool/activateStudent',
            dataType: 'json',
            type: "POST",
            data: {
                userId: userId,
                studentId: studentId,
                rosterId: rosterId
            },
            success: success
        });
    },
    addNewStudent: function (userId, rosterId, success) {
        $.ajax({
            url: '/locatertool/addNewStudent',
            dataType: 'json',
            type: "POST",
            data: {
                userId: userId,
                rosterId: rosterId
            },
            success: success
        });
    },

    checkExistingStudent: function (userId, psuedonym, rosterId, success) {
        $.ajax({
            url: '/locatertool/checkExistingStudent',
            dataType: 'json',
            type: "POST",
            data: {
                userId: userId,
                psuedonym: psuedonym,
                rosterId: rosterId
            },
            success: success
        });
    },

    assignTest: function (userId, assignTestJson, success) {
        $.ajax({
            url: '/locatertool/assignTest',
            dataType: 'json',
            type: "POST",
            data: {
                userId: userId,
                jsonObj: assignTestJson
            },
            success: success
        });
    },
    checkEditedPassword: function (assignTestJson, success) {
        $.ajax({
            url: '/locatertool/checkEditedPassword',
            dataType: 'json',
            type: "POST",
            data: {
                jsonObj: assignTestJson
            },
            success: success
        });
    },
    saveEditAssignedTest: function (passwordObj, deleteStdList, updateStdList, insertStdList, success) {
        $.ajax({
            url: '/locatertool/saveEditAssignedTest',
            dataType: 'json',
            type: "POST",
            data: {
                passwordObj: passwordObj,
                deleteStdObj: deleteStdList,
                updateStdObj: updateStdList,
                insertStdObj: insertStdList
            },
            success: success
        });
    },

    checkTestForStudent: function (userId, assignTestJson, success) {
        $.ajax({
            url: '/locatertool/checkTestForStudent',
            dataType: 'json',
            type: "POST",
            data: {
                userId: userId,
                jsonObj: assignTestJson
            },
            success: success
        });
    },


    getAssignedTests: function (userId, success) {
        $.ajax({
            url: '/locatertool/getAssignedTests',
            dataType: 'json',
            type: "POST",
            data: {
                userId: userId,
            },
            success: success
        });

    },

    getAllTests: function (userId, success) {
        $.ajax({
            url: '/locatertool/getAllTests',
            dataType: 'json',
            type: "POST",
            data: {
                userId: userId
            },
            success: success
        });
    },
    deleteAssignedTest: function (passwordId, success) {
        $.ajax({
            url: '/locatertool/deleteAssignedTest',
            dataType: 'json',
            type: "POST",
            data: {
                passwordId: passwordId
            },
            success: success
        });
    },
    getTestReportDetails: function (testId, password, success) {
        $.ajax({
            url: '/locatertool/getTestReportDetails',
            dataType: 'json',
            type: "POST",
            data: {
                testId: testId,
                password: password
            },
            success: success
        });
    },
    getQuestionReport: function (questionId, testId, passwordId, questionType, success) {
        $.ajax({
            url: '/locatertool/getQuestionReport',
            dataType: 'json',
            type: "POST",
            data: {
                questionId: questionId,
                testId: testId,
                passwordId: passwordId,
                questionType: questionType
            },
            success: success
        });
    },
    getStudentReport: function (studentId, success) {
        $.ajax({
            url: '/locatertool/getStudentReport',
            dataType: 'json',
            type: "POST",
            data: {
                studentId: studentId
            },
            success: success
        });
    },
    getSensitiveString: function (userId, success) {
        $.ajax({
            url: '/locatertool/getUserString',
            dataType: 'json',
            type: "GET",
            data: {
                userId: userId
            },
            success: success
        });
    },

    showHint: function (success) {
        $.ajax({
            url: '/locatertool/getUserHint',
            dataType: 'json',
            type: "GET",
            success: success
        });
    },

    getCompletedStudents: function (passwordId, success) {
        $.ajax({
            url: '/locatertool/getCompletedStudents',
            dataType: 'json',
            type: "POST",
            data: {
                passwordId: passwordId
            },
            success: success
        });
    },
    getAssignedTestByPwdId: function (passwordId, success) {
        $.ajax({
            url: '/locatertool/getAssignedTestByPwdId',
            dataType: 'json',
            type: "POST",
            data: {
                passwordId: passwordId
            },
            success: success
        });
    }

}, {});