!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e(require("phylocanvas"));else if("function"==typeof define&&define.amd)define(["phylocanvas"],e);else{var n=e("object"==typeof exports?require("phylocanvas"):t.phylocanvas);for(var r in n)("object"==typeof exports?exports:t)[r]=n[r]}}(this,function(t){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),n(1);var o=n(6),i=r(o);e["default"]=i["default"]},function(t,e,n){var r=n(2);"string"==typeof r&&(r=[[t.id,r,""]]);n(5)(r,{});r.locals&&(t.exports=r.locals)},function(t,e,n){e=t.exports=n(3)(),e.push([t.id,".phylocanvas-history{position:absolute;top:0;bottom:0;left:0;z-index:1;box-sizing:border-box;width:240px;background:#fff;transform:translateX(-240px);transform-style:preserve-3d;will-change:transform;transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-property:transform;border:1px solid #e7e7e7;border-left:none}.phylocanvas-history--open{transform:translateX(0);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)}.phylocanvas-history-title{box-sizing:border-box;text-align:center;font-family:Helvetica,Arial,sans-serif;font-size:14px;color:#666;padding:8px;border-bottom:1px solid #e7e7e7}.phylocanvas-history-button{border:none;font-size:24px;height:48px;margin:auto;min-width:24px;width:26px;padding:0;overflow:hidden;background:#3c7383;color:#fff;box-shadow:0 1px 1.5px 0 rgba(0,0,0,.12),0 1px 1px 0 rgba(0,0,0,.24);position:relative;line-height:normal;position:absolute;bottom:32px;right:-27px;z-index:1;outline:none;cursor:pointer;border-radius:0 2px 2px 0;background-image:url("+n(4)+');background-repeat:no-repeat;background-position:0}.phylocanvas-history-snapshots{position:absolute;top:33px;bottom:0;margin:0;padding:0;overflow-x:hidden;overflow-y:scroll}.phylocanvas-history-snapshot{list-style:none;border-bottom:1px solid #e7e7e7;cursor:pointer;box-sizing:border-box;display:block;position:relative;height:128px}.phylocanvas-history-snapshot:after{content:"";position:absolute;top:0;bottom:0;right:0;width:3px;background-color:transparent;transition:background-color .2s cubic-bezier(.4,0,.2,1)}.phylocanvas-history-snapshot--selected:after,.phylocanvas-history-snapshot:hover:after{background-color:#3c7383}.phylocanvas-history-snapshot>img{width:100%;height:128px;object-fit:contain}',""])},function(t,e){"use strict";t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var s=e[o];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+CiAgPHBhdGggZD0iTTEzIDNjLTQuOTcgMC05IDQuMDMtOSA5SDFsMy44OSAzLjg5LjA3LjE0TDkgMTJINmMwLTMuODcgMy4xMy03IDctN3M3IDMuMTMgNyA3LTMuMTMgNy03IDdjLTEuOTMgMC0zLjY4LS43OS00Ljk0LTIuMDZsLTEuNDIgMS40MkM4LjI3IDE5Ljk5IDEwLjUxIDIxIDEzIDIxYzQuOTcgMCA5LTQuMDMgOS05cy00LjAzLTktOS05em0tMSA1djVsNC4yOCAyLjU0LjcyLTEuMjEtMy41LTIuMDhWOEgxMnoiLz4KPC9zdmc+Cg=="},function(t,e,n){function r(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=h[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(l(r.parts[i],e))}else{for(var s=[],i=0;i<r.parts.length;i++)s.push(l(r.parts[i],e));h[r.id]={id:r.id,refs:1,parts:s}}}}function o(t){for(var e=[],n={},r=0;r<t.length;r++){var o=t[r],i=o[0],s=o[1],a=o[2],c=o[3],l={css:s,media:a,sourceMap:c};n[i]?n[i].parts.push(l):e.push(n[i]={id:i,parts:[l]})}return e}function i(t,e){var n=v(),r=m[m.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),m.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function s(t){t.parentNode.removeChild(t);var e=m.indexOf(t);e>=0&&m.splice(e,1)}function a(t){var e=document.createElement("style");return e.type="text/css",i(t,e),e}function c(t){var e=document.createElement("link");return e.rel="stylesheet",i(t,e),e}function l(t,e){var n,r,o;if(e.singleton){var i=g++;n=b||(b=a(e)),r=u.bind(null,n,i,!1),o=u.bind(null,n,i,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(e),r=d.bind(null,n),o=function(){s(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(e),r=p.bind(null,n),o=function(){s(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}function u(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=x(e,o);else{var i=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}function p(t,e){var n=e.css,r=e.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function d(t,e){var n=e.css,r=e.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),i=t.href;t.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}var h={},f=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},y=f(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),v=f(function(){return document.head||document.getElementsByTagName("head")[0]}),b=null,g=0,m=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=y()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var n=o(t);return r(n,e),function(t){for(var i=[],s=0;s<n.length;s++){var a=n[s],c=h[a.id];c.refs--,i.push(c)}if(t){var l=o(t);r(l,e)}for(var s=0;s<i.length;s++){var c=i[s];if(0===c.refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete h[c.id]}}}};var x=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e,n){"use strict";function r(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t){t(this,"createTree",function(t,e){var n=t.apply(void 0,r(e)),o=s(e,2),i=o[1],a=void 0===i?{}:i;return n.history=new g(n,a.history||{}),n}),this.History=g}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var s,a=t[Symbol.iterator]();!(r=(s=a.next()).done)&&(n.push(s.value),!e||n.length!==e);r=!0);}catch(c){o=!0,i=c}finally{try{!r&&a["return"]&&a["return"]()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();e["default"]=i;var c=n(7),l=c.utils.dom,u=l.addClass,p=l.removeClass,d=c.utils.events,h=d.fireEvent,f=d.addEvent,y=d.killEvent,v="phylocanvas-history-snapshot",b=v+"--selected",g=function(){function t(e,n){var r=this,i=n.parentElement,s=void 0===i?e.containerElement:i;o(this,t),this.tree=e,this.snapshots=[],this.isOpen=!1,this.container=this.createElements(s),this.tree.addListener("subtree",function(t){var e=t.node;return r.addSnapshot(e)}),this.tree.addListener("loaded",function(){return r.addSnapshot(r.tree.root.id)}),this.tree.addListener("typechanged",function(){return r.addSnapshot(r.tree.root.id)})}return a(t,[{key:"toggle",value:function(){this.isOpen=!this.isOpen,(this.isOpen?u:p)(this.container,"phylocanvas-history--open"),h(this.tree.containerElement,"historytoggle",{isOpen:this.isOpen})}},{key:"createElements",value:function(t){var e=document.createElement("div");e.className="phylocanvas-history",f(e,"click",y),f(e,"contextmenu",y);var n=document.createElement("div");n.innerHTML="History",n.className="phylocanvas-history-title",e.appendChild(n);var r=document.createElement("button");r.className="phylocanvas-history-button",r.title="History",f(r,"click",this.toggle.bind(this)),e.appendChild(r),this.button=r;var o=document.createElement("ul");return o.className="phylocanvas-history-snapshots",e.appendChild(o),this.snapshotList=o,t.appendChild(e),e}},{key:"addSnapshot",value:function(t){if(t){var e=this.tree.treeType,n=!1;if(this.snapshots.forEach(function(r){p(r,b),r.getAttribute("data-tree-root")===t&&r.getAttribute("data-tree-type")===e&&(n=!0,u(r,b))}),!n){var r=this.tree.getPngUrl(),o=document.createElement("li");o.className=v+" "+b,o.setAttribute("data-tree-root",t),o.setAttribute("data-tree-type",this.tree.treeType),o.className=v+" "+b;var i=document.createElement("img");i.src=r,this.snapshots.push(o),o.appendChild(i),this.snapshotList.appendChild(o),f(o,"click",this.goBackTo.bind(this,o))}}}},{key:"clear",value:function(){for(var t=this.snapshots.length;t--;)this.snapshotList.removeChild(this.snapshots[0]);this.snapshots.length=0}},{key:"goBackTo",value:function(t){var e=t.getAttribute("data-tree-root");this.tree.setTreeType(t.getAttribute("data-tree-type"),!0),this.tree.redrawFromBranch(this.tree.originalTree.branches[e])}}]),t}()},function(e,n){e.exports=t}])});