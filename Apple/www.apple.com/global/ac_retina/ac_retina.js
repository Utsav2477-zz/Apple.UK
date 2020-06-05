AC.Retina=AC.Class();AC.Retina.prototype={__defaultOptions:{attribute:"data-hires",recursive:true,queueSize:8,publishNotifications:true},initialize:function ac_initialize(b){this._benchmarkTimer=new Date();this._options={};this._globalBlacklist=null;this._tagNameBlacklist=null;this._images=[];this._paused=false;this._deferredQueue=null;this.__queues=[];AC.Object.synthesize(this);if(typeof b!=="object"){b={}}this.setOptions(AC.Object.extend(AC.Object.clone(this.__defaultOptions),b));this.__setupGlobalBlacklists();if(!AC.Retina.Debug&&this.globalBlacklist().isBlacklisted()){this.replace=AC.Function.emptyFunction;return false}if(typeof AC.Retina.imageComponentRegistry==="undefined"){AC.Retina.imageComponentRegistry=new AC.Registry(AC.Retina.classNamePrefix())}this.__listenToMediaQueryChange();if(AC.Retina.windowHasLoaded){this.__setup()}else{var a=this.__setup.bind(this);AC.Element.addEventListener(window,"load",a)}},shouldReplace:function ac_shouldReplace(a,h,d){var c;var b;var g=new AC.Retina.Image(null,d);if(typeof a==="undefined"){try{console.warn("AC.Retina.shouldReplace() expects an argument.")}catch(f){}}if(!this.globalBlacklist().isBlacklisted()){if(typeof a==="string"){c=AC.Retina.imageComponentRegistry.lookup(a)}else{if(AC.Element.isElement(a)){c=AC.Retina.imageComponentRegistry.match(a)}else{if(a!==null&&typeof a==="object"&&AC.Retina.imageComponentRegistry.hasComponent(a)){c=a}else{c=AC.Retina.imageComponentRegistry.lookup("img-tag")}}}g.setSrc(h||"/global/elements/blank.gif");g.setComponent(c);if(c!==null&&typeof c==="object"&&typeof c.context==="function"){b=c.context("blacklist");if(b&&typeof b==="object"){return !b.isBlacklisted(null,g)}}}return false},bestSrc:function ac_bestSrc(e,b,d,a){if(typeof e!=="string"){throw"Need a source string to get hires src."}var c=new AC.Retina.Image(null,a);if(typeof b==="string"){b=AC.Retina.imageComponentRegistry.lookup(b)}if(b===null||!(typeof b==="object"&&AC.Retina.imageComponentRegistry.hasComponent(b))){b=AC.Retina.imageComponentRegistry.lookup("img-tag")}c.setSrc(e);c.setComponent(b);if(typeof d==="function"){c.checkExists(d,e)}if(!c.isHires()&&!c.ignored()&&this.shouldReplace(b,e,b)){return c.hiresSrc()}else{return e}},replace:function ac_replace(c,b){if(typeof this.__boundAddToQueue==="undefined"){this.__boundAddToQueue=this.__addToQueue.bind(this)}var a;c=AC.Element.getElementById(c);b=AC.Element.getElementById(b);if(!AC.Element.isElement(c)){throw"Cannot replace content because scopeElement is not valid"}a=this.__findDenotedElements(c,b);if(a.length<1){return}this.__filterDenotedImages(a);this.__filterChildImages(a);this.__replaceQueues()},paused:function ac_paused(){if(this._paused===true&&!this.deferredQueue()){this.setDeferredQueue(new AC.DeferredQueue())}return this._paused},pause:function ac_pause(){if(this.paused()){return}this.setPaused(true)},resume:function ac_resume(){if(!this.paused()){return}this.setPaused(false);if(this.deferredQueue()){this.deferredQueue().start();this.setDeferredQueue(null)}},publishNotification:function ac_publishNotification(a,b){if(typeof AC.NotificationCenter==="object"&&this.options().publishNotifications===true){AC.NotificationCenter.publish(AC.Retina.classNamePrefix()+a,{target:this,data:b})}},subscribeToNotification:function ac_subscribeToNotification(a,b){if(typeof AC.NotificationCenter==="object"&&this.options().publishNotifications===true){AC.NotificationCenter.subscribe(AC.Retina.classNamePrefix()+a,b,this)}}};AC.Retina.rasterImageFormatRegExp=function(){return AC.Retina._rasterImageFormatRegExp};AC.Retina._rasterImageFormatRegExp=/(\.jpg($|#.*|\?.*)|\.png($|#.*|\?.*)|\.gif($|#.*|\?.*))/;AC.Retina.devicePixelRatio=function(){if(typeof AC.Retina._devicePixelRatio!=="undefined"){return AC.Retina._devicePixelRatio}var b=false;var a=null;if(AC.Retina.minDPRMediaQuery()!==null){a=window.matchMedia("("+AC.Retina.minDPRMediaQuery()+": "+AC.Retina.minDPR()+")");b=a.matches}if(a===null){b=(typeof window.devicePixelRatio!=="undefined"&&window.devicePixelRatio>=AC.Retina.minDPR())}if(AC.Retina.Debug||b===true){AC.Retina._devicePixelRatio=2}else{AC.Retina._devicePixelRatio=1}return AC.Retina._devicePixelRatio};AC.Retina.minDPRMediaQuery=function(){if(typeof AC.Retina._minDPRMediaQuery!=="undefined"){return AC.Retina._minDPRMediaQuery}var c=["min-device-pixel-ratio","-webkit-min-device-pixel-ratio","min--moz-device-pixel-ratio","-o-min-device-pixel-ratio"];var b;var a;if(typeof window.matchMedia!=="undefined"){for(b=0;b<c.length;b+=1){a=window.matchMedia("("+c[b]+": 0)");if(a.matches===true){AC.Retina._minDPRMediaQuery=c[b];return AC.Retina._minDPRMediaQuery}}}AC.Retina._minDPRMediaQuery=null;return AC.Retina._minDPRMediaQuery};AC.Retina.classNamePrefix=function(){return AC.Retina._classNamePrefix};AC.Retina._classNamePrefix="ac-retina-";AC.Retina.minDPR=function(){return AC.Retina._minDPR};AC.Retina._minDPR=1.5;AC.Retina.windowHasLoaded=false;AC.Element.addEventListener(window,"load",function(){AC.Retina.windowHasLoaded=true});AC.Retina.iOSHandheld=function(){AC.log("AC.Retina.iOSHandheld is deprecated. For use outside of AC.Retina, use AC.Environment methods instead.");return AC.Retina.Blacklist.Qualifiers.iOSHandheld()};AC.Object.extend(AC.Retina.prototype,{__setupGlobalBlacklists:function ac___setupGlobalBlacklists(){this.setGlobalBlacklist(new AC.Retina.Blacklist([AC.Retina.Blacklist.Qualifiers.iOSHandheld,AC.Retina.Blacklist.Qualifiers.antiquatedBrowser]));this.setTagNameBlacklist(new AC.Retina.Blacklist([AC.Retina.Blacklist.Qualifiers.restrictedTagName]))},__listenToMediaQueryChange:function ac___listenToMediaQueryChange(){var b=this;var a;var c=function(){if(a.matches===true){delete AC.Retina._devicePixelRatio;if(AC.Retina.windowHasLoaded){b.replace(document.body)}a.removeListener(c)}};if(AC.Retina.devicePixelRatio()<AC.Retina.minDPR()&&AC.Retina.minDPRMediaQuery()!==null){a=window.matchMedia("("+AC.Retina.minDPRMediaQuery()+": "+AC.Retina.minDPR()+")");if(typeof a.addListener==="function"&&a.matches===false){a.addListener(c)}}},__setup:function ac___setup(){this.replace(document.body)},__findDenotedElements:function ac___findDenotedElements(c,b){var a=this.__denotedElements(c);if(AC.Element.isElement(b)){if(AC.Retina.__isRecursivelyDenoted(b,this.options().attribute)){a.push(c)}}else{if(AC.Retina.__nearestAncestorHasAttribute(c,this.options().attribute,"true")){a.push(c)}}this.publishNotification("foundDenotedElements",a);return a},__filterDenotedImages:function ac___filterDenotedImages(a){var b=this.__filterElements(a);this.publishNotification("filteredDenotedImages",b);if(b.length>0){b.forEach(this.__boundAddToQueue);this.publishNotification("queuedDenotedImages",this.__queues[this.__queues.length-1])}},__filterChildImages:function ac___filterChildImages(b){var a;var c;if(this.options().recursive===true){for(c=0;c<b.length;c+=1){a=this.__imagesWithinElement(b[c]);this.publishNotification("filteredChildImages",a);if(a.length>0){this.__createQueue();a.forEach(this.__boundAddToQueue);this.publishNotification("queuedChildImages",this.__queues[this.__queues.length-1])}}}},__createQueue:function ac___createQueue(){var a=new AC.Retina.Queue(this.options().queueSize);this.__queues.push(a)},__addToQueue:function ac___addToQueue(a){if(this.__queues.length===0||this.__queues[this.__queues.length-1].ran()===true){this.__createQueue()}this.__queues[this.__queues.length-1].add(a)},__isInQueue:function ac___isInQueue(b){var a;for(a=0;a<this.__queues.length;a+=1){if(this.__queues[a].queue().indexOf(b)!==-1){return true}}return false},__denotedElements:function ac___denotedElements(b){if(typeof b==="undefined"){b=document.body}else{b=AC.Element.getElementById(b)}var a=AC.Element.selectAll("["+this.options().attribute+'="true"]',b);return a},__imagesWithinElement:function ac___imagesWithinElement(f){var e=this.__filterElement.bind(this);var a=this.tagNameBlacklist();var c=[];var b;var d;f=AC.Element.getElementById(f);b=function b(g){if(!a.isBlacklisted(g)&&e(g)){return NodeFilter.FILTER_ACCEPT}return NodeFilter.FILTER_SKIP};b.acceptNode=b;d=document.createTreeWalker(f,NodeFilter.SHOW_ELEMENT,b,false);while(d.nextNode()){if(AC.Retina.Image.isImage(d.currentNode.ac_retina_image)){c.push(d.currentNode.ac_retina_image)}}return c},__filterElements:function ac___filterElements(a){var c;var b=[];for(c=0;c<a.length;c+=1){if(this.__filterElement(a[c])){b.push(a[c].ac_retina_image)}}return b},__filterElement:function ac___filterElement(b){var c=b.ac_retina_image;var a;if(!AC.Retina.__isRecursivelyDenoted(b,this.options().attribute)){return false}if(AC.Retina.Image.isImage(c)===false){a=this.__optionsFromElement(b);c=new AC.Retina.Image(b,a);b.ac_retina_image=c}else{if(c.replaced()){return false}}if(this.__matchComponentToElement(b)===false){return false}if(this.__filterImage(c)){this.images().push(c);return true}return false},__matchComponentToElement:function ac___matchComponentToElement(b){var c=b.ac_retina_image;var a;if(AC.Retina.Image.isImage(c)===false){throw"Element is missing AC.Retina.Image object."}a=AC.Retina.imageComponentRegistry.match(b);if(a&&a.name()!=="_base"){c.setStatus("is-image");c.setComponent(a);return true}else{c.setStatus("not-image");return false}},__filterImage:function ac___filterImage(b){var a;if(AC.Retina.Image.isImage(b)===false){throw"Element is missing AC.Retina.Image object."}if(b.isHires()){b.setStatus("already-hires");return false}if(b.ignored()){b.setStatus("ignored");return false}a=b.component().context("blacklist");if(AC.Retina.Blacklist.isBlacklist(a)&&a.isBlacklisted(b.element(),b)){b.setStatus("blacklisted");return false}return true},__optionsFromElement:function ac___optionsFromElement(d){var b={};var a=d.getAttribute(this.options().attribute+"-options");var c;if(a){a=a.split(",");for(c=0;c<a.length;c+=1){a[c]=a[c].split(":");b[a[c][0]]=a[c][1];try{b[a[c][0]]=JSON.parse(b[a[c][0]])}catch(f){}b[a[c][0].camelize()]=b[a[c][0]]}}return b},__replaceQueues:function ac___replaceQueues(){if(typeof this.__boundReplaceQueues!=="function"){this.__boundReplaceQueues=this.__replaceQueues.bind(this)}var a;if(this.__queues.length>0){a=this.__queues[0];this.__queues.splice(0,1);a.run("replace",this.__boundReplaceQueues)}}});AC.Retina.__isRecursivelyDenoted=function(b,a){if((b.getAttribute(a)==="true")||(AC.Retina.__nearestAncestorHasAttribute(b,a,"true")&&b.getAttribute(a)!=="false")){return true}return false};AC.Retina.__nearestAncestorHasAttribute=function(c,a,e){var d=AC.Retina.__ancestors(c);var b;for(b=0;b<d.length;b+=1){if(d[b].hasAttribute(a)){if(typeof e==="undefined"||d[b].getAttribute(a)===e){return d[b]}else{return null}}}return null};AC.Retina.__ancestors=function(a){a=AC.Element.getElementById(a);var b=[];if(AC.Element.isElement(a.parentNode)){while(a=a.parentNode){if(AC.Element.isElement(a)){b.push(a)}}}return b};AC.Retina.Blacklist=AC.Class();AC.Retina.Blacklist.prototype={initialize:function ac_initialize(a){this._qualifiers=[];AC.Object.synthesize(this);if(typeof a!=="undefined"){this.addQualifier(a)}},addQualifier:function ac_addQualifier(b){var a;if(typeof b==="function"){this.qualifiers().push(b)}else{if(Array.isArray(b)&&b.length>0){for(a=0;a<b.length;a++){this.addQualifier(b[a])}}}},isBlacklisted:function ac_isBlacklisted(b,c){var a;for(a=0;a<this.qualifiers().length;a++){if(this.qualifiers()[a].call(c||this,b)){return true}}return false}};AC.Retina.Blacklist.isBlacklist=function(a){return(a instanceof AC.Retina.Blacklist)};AC.Retina.Blacklist.Qualifiers={};AC.Retina.Blacklist.Qualifiers.DPRLessThanMinAndNotSVG=function(a){return(this.options().hiresFormat!=="svg")&&(AC.Retina.devicePixelRatio()<AC.Retina.minDPR())};AC.Retina.Blacklist.Qualifiers.iOSHandheld=function(){return(AC.Environment.Feature.isHandheld()&&AC.Environment.Browser.os==="iOS")};AC.Retina.Blacklist.Qualifiers.antiquatedBrowser=function(){if(((AC.Environment.Browser.name.indexOf("Safari")!==-1)&&(AC.Environment.Browser.version<5))||((AC.Environment.Browser.name==="IE")&&(AC.Environment.Browser.version<9))||((AC.Environment.Browser.name==="Firefox")&&(AC.Environment.Browser.version<5))||((AC.Environment.Browser.name==="Chrome")&&(AC.Environment.Browser.version<16))){return true}return false};AC.Retina.Blacklist.Qualifiers.restrictedTagName=function(a){var b=["object","param","embed","source"];if((!AC.Element.isElement(a))||(b.indexOf(a.tagName.toLowerCase())>=0)){return true}return false};AC.Retina.Image=AC.Class();AC.Retina.Image.prototype={initialize:function ac_initialize(b,a){this._options=a||{};this._element=AC.Element.getElementById(b);this._component=null;this._status="considered";this._isPreloaded=false;this._replaced=false;this._exists=null;this._ignored=null;this._src=null;this._hiresSrc=null;this._srcFormat=null;this._isHires=null;this._width=null;this._height=null;AC.Object.synthesize(this);if(AC.Element.isElement(this.element())&&this.element().tagName.toLowerCase()==="img"){if(typeof this.element().naturalWidth!=="undefined"&&this.element().naturalWidth!==0){this.setWidth(this.element().naturalWidth)}if(typeof this.element().naturalWidth!=="naturalHeight"&&this.element().naturalHeight!==0){this.setHeight(this.element().naturalHeight)}}},setComponent:function ac_setComponent(a){if(typeof a==="object"&&this.component()===null){this._component=a;this.setOptions(AC.Object.extend(AC.Retina.Image.convertParametersToObject(this.src()),this.options()));this.setOptions(AC.Object.extend(AC.Object.clone(a.properties()),this.options()));if(typeof this.options().hiResFormat!=="undefined"){this.options().hiresFormat=this.options().hiResFormat}return this.component()}},setStatus:function ac_setStatus(a){if(typeof a!=="string"){return false}if(typeof AC.Retina.Debug!=="undefined"){AC.Retina.Debug.sharedInstance().addStatus(a);if(AC.Element.isElement(this.element())){this.element().setAttribute("data-hires-status",a)}}this._status=a;return this._status},__memoizedContextGetter:function ac___memoizedContextGetter(a){if(this.component()){if(typeof this["__"+a]!=="function"){var b=this.component().context(a);this["__"+a]=typeof b==="function"?b.bind(this):AC.Function.emptyFunction}return this["__"+a]()}else{throw"Component not assigned yet."}},src:function ac_src(){if(this._src!==null){return this._src}this.setSrc(this.__memoizedContextGetter("src"));return this._src},hiresSrc:function ac_hiresSrc(){if(this._hiresSrc!==null){return this._hiresSrc}if(this.ignored()){this.setHiresSrc(this.src());return this._hiresSrc}var a=this.__memoizedContextGetter("hiresSrc");if(this.options().cleanHiresSrc===true){a=a.replace(/((\?.*)|(#.*))$/,"")}this.setHiresSrc(a);return this._hiresSrc},srcFormat:function ac_srcFormat(){if(this._srcFormat!==null){return this._srcFormat}var a=this.src().match(/^.*\.([a-z]*)($|#.*|\?.*)/i);this.setSrcFormat((a===null)?null:a[1]);return this._srcFormat},isHires:function ac_isHires(){if(this._isHires===true){return this._isHires}var a=this.src();if((a.match(AC.Retina.rasterImageFormatRegExp())===null)||(this.replaced()===true)){this.setIsHires(true);return this._isHires}this.setIsHires(false);return this._isHires},ignored:function ac_ignored(){if(this.replaced()){this.setIgnored(false);return this._ignored}if(this._ignored!==null){return this._ignored}this.setIgnored(!!this.src().match(this.options().ignoreRegex));return this._ignored},replace:function ac_replace(c){var a=this;var b;if(a.replaced()===true||a.exists()===false){return c()}else{if(a.options().checkExists===true&&typeof a.exists()!=="boolean"){a.checkExists.call(a,function(d){a.setExists(d);if(!a.exists()){a.setStatus("404")}a.replace(c)});return}}b=function b(e){var d=function(){a.__memoizedContextGetter("replace");a.setStatus("replaced");a.setReplaced(true)};if(e){if(AC.Retina.sharedInstance().paused()){AC.Retina.sharedInstance().deferredQueue().add(d)}else{d()}}if(typeof c==="function"){c()}};a.setStatus("replacing");if(a.options().preload||(a.options().preloadIfNoDimensions&&(!a.width()||!a.height()))){a.preload(b)}else{b(true)}},checkExists:function ac_checkExists(c,b){var a=this;if(typeof b==="undefined"){b=a.hiresSrc()}if(a.options().checkAsRootRelative===true||(b.indexOf(window.location.origin)===0||b.indexOf("https://www.apple.com/")===0)){b=(a.options().checkAsRootRelative===true)?b.replace(/^https?:\/\/[^\/]*\//,"/"):b;if(typeof AC.Ajax==="object"){AC.Ajax.checkURL(b,c)}}},preload:function ac_preload(c){var b=this;var a;if(b.isPreloaded()===true){return c(true)}if(b.exists()===false){return c(false)}b.setStatus("loading");a=new Image();AC.Element.addEventListener(a,"load",function(){b.setIsPreloaded(true);b.setWidth(a.width/AC.Retina.devicePixelRatio(AC.Retina.minDPR()));b.setHeight(a.height/AC.Retina.devicePixelRatio(AC.Retina.minDPR()));b.setStatus("loaded");if(typeof c==="function"){c(true)}});if(b.options().checkExists===true){AC.Element.addEventListener(a,"error",function(){b.setStatus("404");b.setExists(false);if(typeof c==="function"){c(false)}})}a.src=b.hiresSrc()}};AC.Retina.Image.isImage=function(a){return(a instanceof AC.Retina.Image)};AC.Retina.Image.removeCSSURLSyntax=function(a){var b;if(typeof a==="string"&&typeof a.replace==="function"){b=a.match(/url\((\'|\")?([^\"\'\)]+)(\'|\")?\)/i);if(b){return b[2]}}return""};AC.Retina.Image.replaceExtension=function(a,c){var b=a.match(/^(.*)((\.[a-z]{3})($|#.*|\?.*))/i);if(b!==null&&b.length>1){return b[1]+"."+c+(b[4]||"")}};AC.Retina.Image.convertParametersToObject=function(b){if(typeof b==="string"&&typeof b.toQueryParams==="function"){var a={};var c=b.toQueryParams();var d;for(d in c){if(c.hasOwnProperty(d)&&typeof c[d]!=="undefined"){a[d.camelize()]=c[d]}}return a}return{}};AC.Retina.Queue=AC.Class();AC.Retina.Queue.prototype={initialize:function ac_initialize(a,b){this._threadCount=a;this._queue=[];if(typeof b!=="undefined"){this.add(b)}this._ran=false;AC.Object.synthesize(this)},add:function ac_add(b){if(this._ran===true){return}var a;if(Array.isArray(b)){for(a=0;a<b.length;a++){this.add(b[a])}}else{if(AC.Retina.Image.isImage(b)){this._queue.push(b);if(typeof b.setStatus==="function"){b.setStatus("queued")}}}},run:function ac_run(h,g){if(this._ran===true){return}var c=this;var a=c._queue.slice(0).reverse();var f=(a.length<c._threadCount)?a.length:c._threadCount;var d=f;c._ran=true;var b=function b(){var i=a.pop();if(typeof i==="undefined"){d--;if(d===0){if(typeof g==="function"){g()}AC.Retina.sharedInstance().publishNotification("queueEmptied",c);return}}else{if(typeof h==="function"){h.apply(i,[i,b])}else{if(typeof h==="string"&&typeof i[h]==="function"){i[h].apply(i,[b])}}}};var e=function e(){var j;for(j=0;j<f;j++){b()}};window.setTimeout(e,10)}};AC.Retina.version="3.0";if(typeof AC.Retina.imageComponentRegistry==="undefined"){AC.Retina.imageComponentRegistry=new AC.Registry(AC.Retina.classNamePrefix(),{contextInherits:["src","hiresSrc","replace","blacklist"]})}AC.Retina.imageComponentRegistry.addComponent("_base",{ignoreRegex:/(^http:\/\/movies\.apple\.com\/|\/105\/|\/media\/|\/global(\/ac_media_player)?\/elements\/quicktime\/|_(([2-9]|[1-9][0-9]+)x|nohires)(\.[a-z]+)($|#.*|\?.*))/i,filenameRegex:/(.*)(\.[a-z]{3}($|#.*|\?.*))/i,filenameInsert:"_☃x",hiresFormat:false,cleanHiresSrc:true,preload:false,checkExists:true,checkAsRootRelative:true},AC.Function.emptyFunction,null,{src:function ac_src(){return""},hiresSrc:function ac_hiresSrc(){var a;var c=this.src();var b=this.options().hiresFormat;var d=this.srcFormat();if(typeof b==="string"&&b!==d){return AC.Retina.Image.replaceExtension(c,b)}a=this.src().match(this.options().filenameRegex);if(a===null){return null}else{return a[1]+this.options().filenameInsert.replace("☃",AC.Retina.devicePixelRatio(AC.Retina.minDPR()))+a[2]}},replace:AC.Function.emptyFunction,blacklist:new AC.Retina.Blacklist()});AC.Retina.imageComponentRegistry.addComponent("background-image",{preload:true},function(b,c){var a=AC.Element.getStyle(b,"background-image");return(b.tagName.toLowerCase()!=="img")&&(a)&&(!!a.match(/^url\(([^\)]+)\)$/i))},"_base",{src:function ac_src(){return AC.Retina.Image.removeCSSURLSyntax(AC.Element.getStyle(this.element(),"background-image"))},replace:function ac_replace(){var a=AC.Element.getStyle(this.element(),"background-size");if(!a||!!a.match("auto")){AC.Element.setStyle(this.element(),"background-size:"+(this.width())+"px "+(this.height())+"px;")}AC.Element.setStyle(this.element(),"background-image:url("+this.hiresSrc()+");")},blacklist:new AC.Retina.Blacklist([AC.Retina.Blacklist.Qualifiers.DPRLessThanMinAndNotSVG])});AC.Retina.imageComponentRegistry.addComponent("img-tag",{preloadIfNoDimensions:true},function(a,b){return(a.tagName.toLowerCase()==="img")&&(!!a.getAttribute("src"))},"_base",{src:function ac_src(){return this.element().getAttribute("src")},replace:function ac_replace(){if(isNaN(parseInt(this.element().getAttribute("width"),10))&&this.width()){this.element().setAttribute("width",this.width())}if(isNaN(parseInt(this.element().getAttribute("height"),10))&&this.height()){this.element().setAttribute("height",this.height())}this.element().setAttribute("src",this.hiresSrc())},blacklist:new AC.Retina.Blacklist([AC.Retina.Blacklist.Qualifiers.DPRLessThanMinAndNotSVG])});AC.Retina.sharedInstance();
