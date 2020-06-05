require=(function e(h,j,l){function m(a,c){if(!j[a]){if(!h[a]){var d=typeof require=="function"&&require;
if(!c&&d){return d(a,!0)}if(i){return i(a,!0)}throw new Error("Cannot find module '"+a+"'")
}var b=j[a]={exports:{}};h[a][0].call(b.exports,function(g){var f=h[a][1][g];return m(f?f:g)
},b,b.exports,e,h,j,l)}return j[a].exports}var i=typeof require=="function"&&require;
for(var k=0;k<l.length;k++){m(l[k])}return m})({1:[function(g,k,h){var i=g("./extend");
k.exports=function j(a,b){if(typeof a!=="object"){throw new TypeError("defaults: must provide a defaults object")
}b=b||{};if(typeof b!=="object"){throw new TypeError("defaults: options must be a typeof object")
}return i({},a,b)}},{"./extend":2}],2:[function(k,j,g){k("ac-polyfills/Array/prototype.forEach");
var h=Object.prototype.hasOwnProperty;j.exports=function i(){var a;var b;if(arguments.length<2){a=[{},arguments[0]]
}else{a=[].slice.call(arguments)}b=a.shift();a.forEach(function(c){if(c!=null){for(var d in c){if(h.call(c,d)){b[d]=c[d]
}}}});return b}},{"ac-polyfills/Array/prototype.forEach":3}],3:[function(f,i,g){if(!Array.prototype.forEach){Array.prototype.forEach=function h(a,b){var c=Object(this);
var l;var d;if(typeof a!=="function"){throw new TypeError("No function object passed to forEach.")
}for(l=0;l<this.length;l+=1){d=c[l];a.call(b,d,l,c)}}}},{}],4:[function(d,g,f){g.exports={WordJoiner:d("./ac-kr-word-joiner/WordJoiner")}
},{"./ac-kr-word-joiner/WordJoiner":5}],5:[function(u,v,r){var p=u("./isOnlyWhitespace");
var t=u("./createTreeWalker");var o=u("ac-object/defaults");var w="\u2060";var n=null;
var s={dataAttribute:"data-word-join",joinerCharacter:w,contextElement:document};
function m(a){this.options=o(s,a);this._treeWalkers=[];this.rootElements=[]}var q=m.prototype;
m.joinify=function(b,c){var f="";var d=0;var a=b.length;c=c||w;while(d<a){f+=b[d];
if(d<a-1&&!(p(b[d+1]))&&!(p(b[d]))){f+=c}d+=1}return f};m.shouldJoin=function(){if(n!==null){return n
}n=false;var a=document.createElement("div");if("querySelectorAll" in document&&"wordBreak" in a.style){a.style.wordBreak="keep-all";
if(a.style.wordBreak!=="keep-all"){n=true}}a=null;return n};q.destroy=function(){if(this._treeWalkers&&this._treeWalkers.length>0){this._treeWalkers.forEach(function(a){a=null
})}this._treeWalkers=null;this.rootElements=null;this.options=null};q.getRootElements=function(c,d){c=c||this.options.dataAttribute;
d=d||this.options.contextElement;var a="body";var b;if(c){a="["+c+"]"}b=[].slice.call(d.querySelectorAll(a));
return b};q.join=function(){if(this.rootElements.length===0){this.rootElements=this.getRootElements();
this._treeWalkers=this._createTreeWalkers()}if(this._treeWalkers&&this._treeWalkers.length>0){this._treeWalkers.forEach(function(b){var a=b.nextNode();
while(a){a.data=m.joinify(a.data,this.options.joinerCharacter);a=b.nextNode()}},this)
}};q._createTreeWalkers=function(){var a=[];if(this.rootElements&&this.rootElements.length>0){this.rootElements.forEach(function(b){a.push(t(b))
},this)}return a};v.exports=m},{"./createTreeWalker":6,"./isOnlyWhitespace":7,"ac-object/defaults":1}],6:[function(k,j,g){var h=k("./isOnlyWhitespace");
function i(b){var a=document.createTreeWalker(b,NodeFilter.SHOW_TEXT,{acceptNode:function(c){if(!(h(c.data))&&c.data.length>1){return NodeFilter.FILTER_ACCEPT
}}},false);return a}j.exports=i},{"./isOnlyWhitespace":7}],7:[function(i,h,f){function g(a){return/^\s*$/.test(a)
}h.exports=g},{}],autorun:[function(d,g,f){g.exports=d("ev7PSh")},{}],ev7PSh:[function(d,g,f){(function(){var a=d("./ac-kr-word-joiner").WordJoiner;
var b;if(a.shouldJoin()===true){b=new a();b.join();b.destroy()}}())},{"./ac-kr-word-joiner":4}]},{},["ev7PSh"]);