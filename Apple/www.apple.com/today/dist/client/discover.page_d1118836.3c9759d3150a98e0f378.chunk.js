(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1573:function(e,t,n){},1574:function(e,t,n){},1575:function(e,t,n){},1576:function(e,t,n){},1577:function(e,t,n){},1578:function(e,t,n){},1579:function(e,t,n){},719:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(2),i=n(1558),c=n(457),l=n(68),s=Object(l.c)({areStoresAvailable:c.a}),u=n(1564),d=n(128),p=n(1559),f=n(134),m=n(4),y=n.n(m),h=n(5),g=n(259),S=n(21);n(1573);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function N(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var A=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=function(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?N(e):t}(this,E(t).apply(this,arguments))).spanRef=a.a.createRef(),e.initialTextSize=-1,e.currentTextSize=-1,e.intervalDelay=200,e.intervalID=null,e.detectZoom=function(){var t=e.getTextSize();if(t!==e.currentTextSize){var n=e.props.listener;e.currentTextSize=t,n(N(N(e)))}},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,a.a.Component),function(e,t,n){t&&v(e.prototype,t),n&&v(e,n)}(t,[{key:"componentDidMount",value:function(){var e=this.props.listener;this.initialTextSize=this.currentTextSize=this.getTextSize(),e(this),this.beginZoomDetection()}},{key:"render",value:function(){return a.a.createElement("span",{id:"text-zoom-detector",ref:this.spanRef}," ")}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.intervalID),this.intervalID=null}},{key:"getTextSize",value:function(){if(this.spanRef.current)return this.spanRef.current.offsetHeight}},{key:"beginZoomDetection",value:function(){this.intervalID||(this.intervalID=window.setInterval(this.detectZoom,this.intervalDelay))}}]),t}(),_=n(16),w=n(3),L=n(8),M=n(7),T=n(1),I=n(55),R=n(41),D=n(35),j=n(77),x=n(14);n(1574);function z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(e,t){return!t||"object"!==C(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function U(e,t){return(U=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var G,V,F,B,H=function(e,t,n,r){var a,o=arguments.length,i=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"==typeof Reflect?"undefined":C(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(a=e[c])&&(i=(o<3?a(i):o>3?a(t,n,i):a(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i},X=Object(_.c)(x.a),Z=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=P(this,k(t).call(this,e))).DEFAULT_IMAGE_SIZE=650,n.media=a.a.createRef(),n.state={tileAnim:!1,loadImages:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&U(e,t)}(t,a.a.PureComponent),function(e,t,n){t&&z(e.prototype,t),n&&z(e,n)}(t,[{key:"render",value:function(){var e=this.props,t=e.schedule,n=e.forceImage,r=e.playOnHover,o=void 0===r||r,i=e.standAlone,c=e.cardSize,l=e.i18n,s=e.allLocales,u=this.props.configManager.getPageRoute(T.PageName.EVENT),d=s.currentLocale.urlStageRootPath||void 0,p=t.type===I.a.SPECIAL_EVENTS?Object(M.a)(Object(M.l)(u,{courseSlug:t.urlTitle,scheduleId:t.id,stageRootPath:d}),t.storeNum):Object(M.l)(u,{courseSlug:t.urlTitle,stageRootPath:d}),f=y()("tile","".concat(c),{active:this.state.tileAnim}),m=o?R.a.DEFAULTS.HERO_GALLERY:R.a.DEFAULTS.MEDIA,h=c===g.a.LARGE?D.a.INLINE_VIDEO_DEFAULTS.SCHEDULE_TILE_LARGE_VIDEO_MAPPINGS:D.a.INLINE_VIDEO_DEFAULTS.SCHEDULE_TILE_MEDIUM_VIDEO_MAPPINGS,b=i?j.e:j.f;return a.a.createElement("div",{className:f},a.a.createElement(R.a,{config:[{eventName:"tile-animation-"+t.id,start:"-100vh + 85px",eventType:S.AnimSystemEventType.INSTANT,callback:this.updateTileAnim,once:!0}],className:"outer-anim-system-wrapper"},a.a.createElement(X,{href:"".concat(p),analyticsAttr:'{"prop3":"t@a - details - {{scheduleName}} - {{mediaType}}", "eVar80": "{{storeNum}}", "eVar81": "{{programName}}", "eVar82": "{{scheduleName}}", "eVar83": "{{sessionTime}}"}',analyticsData:{scheduleName:t.name,programName:t.prefix,storeNum:t.storeNum,mediaType:this.getTileType(),sessionTime:new Date(t.startTime).toUTCString()}},a.a.createElement("div",{className:"tile-content-wrapper"},a.a.createElement(R.a,{config:m},a.a.createElement(D.b,{cardSize:i?null:c,mediaData:t.backgroundMedia,ref:this.media,forceImage:n,loadOnDemand:!0,videoConfig:{looping:!1,autoplay:!0},imageConfig:{imageSize:this.DEFAULT_IMAGE_SIZE},loadImages:this.state.loadImages,viewportInlineVideoMappings:h,viewportImageOrientationMappings:b,playOnHover:o})),a.a.createElement("div",{className:"schedule-caption"},a.a.createElement("p",{className:"schedule-caption-name"},t.prefix),a.a.createElement("p",{className:"schedule-caption-description"},t.title),t.type!==I.a.SPECIAL_EVENTS||i?a.a.createElement("span",{className:"schedule-caption-link typography-body-reduced"},l.value("global.cta-see-times-locations")):a.a.createElement(a.a.Fragment,null,a.a.createElement("span",{className:"schedule-caption-date typography-body-reduced"},t.displayDate[0].dateTime),a.a.createElement("span",{className:"schedule-caption-store-name typography-body-reduced"},t.storeTitle)))))))}},{key:"updateTileAnim",value:function(){this.setState({tileAnim:!0,loadImages:!0})}},{key:"play",value:function(){this.media&&this.media.current&&this.media.current.play&&this.media.current.play()}},{key:"pause",value:function(){this.media&&this.media.current&&this.media.current.pause&&this.media.current.pause()}},{key:"reset",value:function(){this.media&&this.media.current&&this.media.current.reset&&this.media.current.reset()}},{key:"getTileType",value:function(){if(this.media&&this.media.current)return this.media.current.getType()}}]),t}();function Y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}H([o.a],Z.prototype,"updateTileAnim",null),H([o.a],Z.prototype,"play",null),H([o.a],Z.prototype,"pause",null),H([o.a],Z.prototype,"reset",null),H([o.a],Z.prototype,"getTileType",null),Z=H([Object(L.a)(w.b.I18N,w.b.CONFIG_MANAGER,w.b.ALL_LOCALES)],Z),function(e){e.STANDARD="standard",e.ALT="alt"}(B||(B={}));var W=(Y(F={},T.ViewportSizes.XLARGE,(Y(G={},B.STANDARD,{fiveStaggered:[{index:1,cardSize:g.a.MEDIUM},{index:3,cardSize:g.a.SMALL},{index:0,cardSize:g.a.LARGE},{index:4,cardSize:g.a.SMALL},{index:2,cardSize:g.a.MEDIUM}],fourStaggered:[{index:0,cardSize:g.a.LARGE},{index:3,cardSize:g.a.SMALL},{index:2,cardSize:g.a.MEDIUM},{index:1,cardSize:g.a.LARGE}],threeStaggered:[{index:0,cardSize:g.a.LARGE},{index:1,cardSize:g.a.MEDIUM},{index:2,cardSize:g.a.SMALL}],twoStaggered:[{index:0,cardSize:g.a.LARGE},{index:1,cardSize:g.a.MEDIUM}],oneStaggered:[{index:0,cardSize:g.a.MEDIUM}]}),Y(G,B.ALT,{fiveStaggered:[{index:0,cardSize:g.a.LARGE},{index:2,cardSize:g.a.MEDIUM},{index:4,cardSize:g.a.SMALL},{index:3,cardSize:g.a.SMALL},{index:1,cardSize:g.a.MEDIUM}],fourStaggered:[{index:0,cardSize:g.a.LARGE},{index:2,cardSize:g.a.MEDIUM},{index:3,cardSize:g.a.SMALL},{index:1,cardSize:g.a.LARGE}],threeStaggered:[{index:1,cardSize:g.a.MEDIUM},{index:0,cardSize:g.a.LARGE},{index:2,cardSize:g.a.SMALL}],twoStaggered:[{index:1,cardSize:g.a.MEDIUM},{index:0,cardSize:g.a.LARGE}],oneStaggered:[{index:0,cardSize:g.a.MEDIUM}]}),G)),Y(F,T.ViewportSizes.LARGE,(Y(V={},B.STANDARD,{fiveStaggered:[{index:0,cardSize:g.a.LARGE},{index:4,cardSize:g.a.SMALL},{index:1,cardSize:g.a.MEDIUM},{index:3,cardSize:g.a.SMALL},{index:2,cardSize:g.a.MEDIUM}],fourStaggered:[{index:0,cardSize:g.a.LARGE},{index:3,cardSize:g.a.SMALL},{index:2,cardSize:g.a.MEDIUM},{index:1,cardSize:g.a.LARGE}],threeStaggered:[{index:0,cardSize:g.a.LARGE},{index:1,cardSize:g.a.MEDIUM},{index:2,cardSize:g.a.SMALL}],twoStaggered:[{index:0,cardSize:g.a.LARGE},{index:1,cardSize:g.a.MEDIUM}],oneStaggered:[{index:0,cardSize:g.a.MEDIUM}]}),Y(V,B.ALT,{fiveStaggered:[{index:1,cardSize:g.a.MEDIUM},{index:3,cardSize:g.a.SMALL},{index:2,cardSize:g.a.MEDIUM},{index:0,cardSize:g.a.LARGE},{index:4,cardSize:g.a.SMALL}],fourStaggered:[{index:2,cardSize:g.a.MEDIUM},{index:1,cardSize:g.a.LARGE},{index:0,cardSize:g.a.LARGE},{index:3,cardSize:g.a.SMALL}],threeStaggered:[{index:1,cardSize:g.a.MEDIUM},{index:2,cardSize:g.a.SMALL},{index:0,cardSize:g.a.LARGE}],twoStaggered:[{index:1,cardSize:g.a.MEDIUM},{index:0,cardSize:g.a.LARGE}],oneStaggered:[{index:0,cardSize:g.a.MEDIUM}]}),V)),F);n(1575);function Q(e){return(Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){q(e,t,n[t])})}return e}function q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function K(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function $(e,t){return!t||"object"!==Q(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ee(e){return(ee=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function te(e,t){return(te=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var ne="schedules-grid",re=Object.freeze({textSizeExceeds200:!1}),ae=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=$(this,ee(t).apply(this,arguments))).state=re,e.TEXT_SIZE_AT_200_ZOOM=42,e.MAX_STANDARD_PASSION_QUANTITY=5,e.MAX_FORCE_SMALL_PASSION_QUANTITY=4,e.PASSION_NUMBER_TO_WORD_MAP={1:"oneStaggered",2:"twoStaggered",3:"threeStaggered",4:"fourStaggered",5:"fiveStaggered"},e.textZoomUpdate=function(t){var n=t.currentTextSize;e.setState({textSizeExceeds200:n>=e.TEXT_SIZE_AT_200_ZOOM})},e.getClassNames=function(t,n){var r,a=e.props.standAlone,o=e.state.textSizeExceeds200;return y()(ne,"".concat(ne,"--container-").concat(t,"-items"),(q(r={alt:n===B.ALT},"".concat(ne,"--stand-alone"),a),q(r,"".concat(ne,"--a11y-zoom-override"),o),r))},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&te(e,t)}(t,a.a.Component),function(e,t,n){t&&K(e.prototype,t),n&&K(e,n)}(t,[{key:"render",value:function(){var e=this.props,t=e.passion,n=e.standAlone,r=e.standard,o=e.viewportData;if(!t.schedules.length)return null;var i=o.viewport!==h.b.XLARGE||n?h.b.LARGE:h.b.XLARGE,c=t.schedules.length<=this.MAX_STANDARD_PASSION_QUANTITY?t.schedules.length:this.MAX_STANDARD_PASSION_QUANTITY,l=this.PASSION_NUMBER_TO_WORD_MAP[c],s=r&&!n?B.ALT:B.STANDARD,u=W[i][s][l],d=this.formatSchedules({schedules:t.schedules,sizeMap:u,standAlone:n});return a.a.createElement(a.a.Fragment,null,a.a.createElement(A,{listener:this.textZoomUpdate}),a.a.createElement("div",{className:this.getClassNames(c,s)},n?this.renderStandAlone(t.schedules):this.renderSchedulesWithVideo(d,o.viewport),S.AnimSystem.initiateAnimSystemForceUpdate()))}},{key:"formatSchedules",value:function(e){for(var t=e.schedules,n=e.sizeMap,r=e.standAlone,a=0,o=[],i=0;i<t.length&&i<this.MAX_STANDARD_PASSION_QUANTITY;i++){var c=J({},t[n[i].index],{forceImage:!0,cardSize:r?g.a.SMALL:n[i].cardSize}),l=c.cardSize!==g.a.SMALL;c.backgroundMedia.ambientVideo&&a<2&&l&&(c.forceImage=!1,a++),o.push(c)}return o}},{key:"renderStandAlone",value:function(e){var t=this.state.textSizeExceeds200;return(e||[]).slice(0,this.MAX_FORCE_SMALL_PASSION_QUANTITY).map(function(e){return a.a.createElement(Z,{key:e.id,schedule:e,cardSize:t?g.a.MEDIUM:g.a.SMALL,playOnHover:!1,forceImage:!0,standAlone:!0})})}},{key:"renderSchedulesWithVideo",value:function(e,t){var n=this;return e.map(function(e){return a.a.createElement(Z,{key:e.id,schedule:e,cardSize:n.determineScheduleTileSize(e),forceImage:e.forceImage,playOnHover:!0,viewport:t})})}},{key:"determineScheduleTileSize",value:function(e){var t=this.state.textSizeExceeds200;return e.cardSize===g.a.SMALL&&t?g.a.MEDIUM:e.cardSize}}]),t}(),oe=Object(S.WithViewportEmitter)(ae);n(1576);function ie(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ce(e,t){return!t||"object"!==ue(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function le(e){return(le=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function se(e,t){return(se=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ue(e){return(ue="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var de=function(e,t,n,r){var a,o=arguments.length,i=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"==typeof Reflect?"undefined":ue(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(a=e[c])&&(i=(o<3?a(i):o>3?a(t,n,i):a(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i},pe=Object(_.c)(d.a),fe=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=ce(this,le(t).apply(this,arguments))).sectionClassNames=y()("tag-section",e.props.standAlone&&"stand-alone large-centered"),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&se(e,t)}(t,r["Component"]),function(e,t,n){t&&ie(e.prototype,t),n&&ie(e,n)}(t,[{key:"renderUpcomingSessionsInformation",value:function(e){var t=this.props,n=t.i18n,a=t.tagData,o=n.value("global.cta-view-calendar");return r.createElement("div",{className:"section-content"},r.createElement("article",{className:"row tag-section__footnote"},r.createElement(p.a,{className:"column large-8 small-10 large-centered typography-eyebrow-reduced u-font-weight-semibold"},n.compileValue("discover.see-upcoming-tagged-sessions",{tagName:a.hero.title})),r.createElement(pe,{className:"typography-body-reduced tag-section__calendar-button",analyticsAttr:'{"prop3":"t@a - view calendar: {{sectionName}}"}',ariaLabel:o+" - "+a.hero.title,href:this.getCalendarUrl(e)},r.createElement("span",{"aria-hidden":"true"},o))))}},{key:"render",value:function(){var e=this.props,t=e.tagData,n=e.standAlone,a=e.index,o=e.forceImage;return r.createElement("section",{className:this.sectionClassNames,"data-analytics-activitymap-region-id":t.collId},n?r.createElement(r.Fragment,null,r.createElement("h2",{className:"typography-headline-elevated large-8 small-10 large-centered"},t.hero.title),r.createElement("p",{className:"typography-intro-elevated large-8 small-10 large-centered"},t.mediumDescription),r.createElement(oe,{standAlone:n,passion:t,standard:a%2}),this.renderUpcomingSessionsInformation()):r.createElement(r.Fragment,null,r.createElement(f.e,{heroData:t.hero,forceImage:o,hideCaptions:!1}),r.createElement("div",{className:"section-content"},r.createElement("article",{className:"row tag-section__description"},r.createElement("p",{className:"column large-8 small-10 large-centered typography-headline-description"},t.mediumDescription))),r.createElement(oe,{passion:t,standard:this.props.index%2}),this.renderUpcomingSessionsInformation(t.collId)))}},{key:"getCalendarUrl",value:function(e){var t=this.props,n=t.configManager,r=t.sessionStorage,a=new URLSearchParams;return e?(a.set("topics",e),a.set("showHero","true")):a.set("topics","products-passion"),r.getNearbyFlag()?a.set(M.m.NEAR_BY,"true"):a.delete(M.m.NEAR_BY),{pathname:n.getPageRoute(T.PageName.CALENDAR),search:a.toString()}}}]),t}();fe=de([Object(L.a)(w.b.I18N,w.b.CONFIG_MANAGER,w.b.SESSION_STORAGE),Object(_.e)(function(e){return{sectionName:e.tagData.collId}},"name: {{sectionName}}")],fe);var me=n(392),ye=n(95),he=n(57),ge=n(669),Se=n(194),be=n(71),ve=n(402),Ee=n(1566);n(1577);function Oe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ne(e,t){return!t||"object"!==we(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Ae(e){return(Ae=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _e(e,t){return(_e=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function we(e){return(we="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var Le=function(e,t,n,r){var a,o=arguments.length,i=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"==typeof Reflect?"undefined":we(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(a=e[c])&&(i=(o<3?a(i):o>3?a(t,n,i):a(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i},Me=new _.b,Te=Object(_.c)(ve.a),Ie=Object(_.c)(d.a),Re=Me.withEventDetails().build(),De=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=Ne(this,Ae(t).call(this,e))).dateHeadline=new Ee.a(e.i18n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_e(e,t)}(t,r["Component"]),function(e,t,n){t&&Oe(e.prototype,t),n&&Oe(e,n)}(t,[{key:"renderItems",value:function(){var e=this,t=null,n="";return this.props.schedules.map(function(a,o){var i=e.dateHeadline.getDateHeadline(a);return n=i!==t?i:"",t=i,r.createElement(Te,{key:o,index:o,schedule:a,displayMedia:!1,displayDate:n,displayDateHeadingLevel:3,analyticsAttr:{"data-analytics-click":Re,"data-analytics-activitymap-region-id":"upcoming near you"},analyticsData:{storeNum:a.storeNum,programName:a.prefix,scheduleName:a.name,sessionTime:new Date(a.startTime).toUTCString()}})})}},{key:"render",value:function(){var e=this.props.i18n,t=e.value("discover.upcoming-near-you"),n=e.value("discover.see-upcoming-sessions"),a=e.value("global.cta-view-calendar"),o="".concat(a," - ").concat(n);return r.createElement("div",{role:"group","aria-label":t},r.createElement("section",{className:"schedule-list-mini-container"},r.createElement("h2",{className:"typography-headline large-8 small-10 large-centered schedule-list-mini-headline"},t),r.createElement("div",{className:"section-content"},this.renderItems()),r.createElement("div",{className:"section-content"},r.createElement("div",{className:"schedule-list-mini"},r.createElement("article",{className:"row schedule-list-mini__footnote"},r.createElement(p.a,{className:"column large-8 small-10 large-centered typography-eyebrow-reduced"},e.value("discover.see-upcoming-sessions")),r.createElement(Ie,{addLocation:!0,className:"typography-body-reduced schedule-list-mini__calendar-button",href:this.props.configManager.getPageRoute(T.PageName.CALENDAR),analyticsAttr:'{"prop3":"t@a - view calendar: upcoming near you"}'},r.createElement("span",{className:"a11y"},o),r.createElement("span",{"aria-hidden":"true"},a)))))))}}]),t}();De=Le([Object(L.a)(w.b.I18N,w.b.CONFIG_MANAGER),Object(_.e)({sectionName:"Upcoming near you"},"name: {{sectionName}}")],De);var je=n(400),xe=n(403),ze=n(195),Pe=n(407),ke=n(197),Ue=n(94),Ce=n(196);n(1578);function Ge(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ve(e,t){return!t||"object"!==He(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Fe(e){return(Fe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Be(e,t){return(Be=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function He(e){return(He="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var Xe=function(e,t,n,r){var a,o=arguments.length,i=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"==typeof Reflect?"undefined":He(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(a=e[c])&&(i=(o<3?a(i):o>3?a(t,n,i):a(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i},Ze=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Ve(this,Fe(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Be(e,t)}(t,r["Component"]),function(e,t,n){t&&Ge(e.prototype,t),n&&Ge(e,n)}(t,[{key:"render",value:function(){var e=this.props.i18n,t=this.props.i18n.value("staticEvents.today-at-home-url"),n=y()("".concat("today-at-home","__container")),a=y()("".concat("today-at-home","__wrapper"),"typography-headline-description","column large-8 medium-10 small-12 large-centered"),o=y()("".concat("today-at-home","__description")),i=y()("".concat("today-at-home","__cta"),"more");return t?r.createElement("article",{className:n},r.createElement("hr",null),r.createElement("div",{className:a},r.createElement("figure",{className:"".concat("today-at-home","__logo")},r.createElement("span",{className:"visuallyhidden"},e.value("global.today-at-home"))),r.createElement("p",{className:o},e.value("error.today-at-home-fallback")),r.createElement(x.a,{addLocation:!0,href:t,className:i},e.value("global.cta-watch-videos")))):null}}]),t}();Ze=Xe([Object(L.a)(w.b.I18N)],Ze);n(1579);var Ye=n(406);function We(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function Qe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Je(e,t){return!t||"object"!==tt(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function qe(e){return(qe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Ke(e,t){return(Ke=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function $e(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){et(e,t,n[t])})}return e}function et(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function tt(e){return(tt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var nt=function(e,t,n,r){var a,o=arguments.length,i=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"==typeof Reflect?"undefined":tt(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(a=e[c])&&(i=(o<3?a(i):o>3?a(t,n,i):a(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i},rt=Object(xe.a)({sectionName:"Hero"},"name: {{sectionName}}")(f.b),at=Object(Ce.a)(ze.a),ot=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=Je(this,qe(t).call(this,e))).state={hiModalVisible:!1,errorModal:{},announceContentLoaded:!1},n.navigationBar=a.a.createRef(),n.locationUpdateStrategy=new ke.DefaultLocationUpdateStrategy(n.props),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ke(e,t)}(t,a.a.Component),function(e,t,n){t&&Qe(e.prototype,t),n&&Qe(e,n)}(t,[{key:"setSectionNavActiveItem",value:function(e){var t=this;return function(){t.navigationBar.current&&t.navigationBar.current.setSectionNavActiveItem(e)}}},{key:"hideNavigationBar",value:function(){this.navigationBar.current&&this.navigationBar.current.updateSectionNavVisibility(!1)}},{key:"showNavigationBar",value:function(){this.navigationBar.current&&this.navigationBar.current.updateSectionNavVisibility(!0)}},{key:"enableSectionNav",value:function(){var e=this.props,t=e.passions,n=e.standaloneTag;return t.length>1||1===t.length&&n[0].schedules.length>1}},{key:"renderSectionNav",value:function(){var e=this.props,t=e.featureDetection,n=e.i18n,r=e.passions,o=e.standaloneTag,i=t.getFeatureSupport("touchAvailable");if(!this.enableSectionNav())return null;var c=r.filter(function(e){return e.schedules.length});o[0]&&o[0].schedules.length>1&&c.push(o[0]);var l={eventName:"session-nav-visibility",start:"-30vh",end:"100rh - 100%",relativeTo:"#section-passions"};return a.a.createElement(R.a,{config:[$e({},l,{eventType:be.a.ENTER,callback:this.showNavigationBar}),$e({},l,{eventType:be.a.EXIT,callback:this.hideNavigationBar})]},a.a.createElement(u.a,{items:c,ref:this.navigationBar,i18n:n,isTouchDevice:i}))}},{key:"renderStandAlone",value:function(e,t){return!e||e.schedules.length<2?null:this.renderTagSection(e,0,!0)}},{key:"renderPassions",value:function(){var e=this;return this.props.passions.map(function(t,n){return t.schedules.length?e.renderTagSection(t,n):null})}},{key:"modalVideoOverrideCallback",value:function(e){return!!e.collId}},{key:"render",value:function(){var e=this.props,t=e.heroGallery,n=e.passions,r=e.standaloneTag,o=e.schedules,i=e.pageDescription,c=e.userLocation,l=e.i18n,s=e.globalState.hasNavigatedFromLocalNav,u=!(!o||!o.length),d=!(!n||!n.length),p=this.state.errorModal,f=p.isVisible,m=p.message,y=l.value("global.a11y-content-updated");return a.a.createElement(a.a.Fragment,null,a.a.createElement(Ye.a,{announcementContent:y,callbackOnAnnouncementComplete:this.resetSetNavigatedFromLocalNav,initiateAnnouncement:s}),a.a.createElement(S.Modal,{type:S.ModalType.STANDARD,isOpened:f,onClose:this.resetErrorModal,ariaLabel:m},a.a.createElement("div",{className:"text-centered signup-modal"},a.a.createElement("p",{className:"typography-label"},m),a.a.createElement("div",{className:"button-bar"},a.a.createElement("button",{className:"button pill-large",onClick:this.resetErrorModal},l.value("global.cta-ok-got-it"))))),a.a.createElement(me.a,null,this.renderSectionNav(),a.a.createElement(rt,{forceImages:!1,heroGalleryIgnoreModalCallback:this.modalVideoOverrideCallback,heroGalleryData:t,id:"hero-release-sticky",showCaptions:!0}),a.a.createElement("section",{className:"".concat("discover-page","__header-container")},a.a.createElement("div",{className:"section-content"},a.a.createElement("header",{className:"row ".concat("discover-page","__header-content")},a.a.createElement("h1",{className:"visuallyhidden"},"Today at Apple"),i&&i.description&&a.a.createElement("p",{className:"".concat("discover-page","__header-description typography-headline-description column large-8 small-10 large-centered")},i.description),a.a.createElement("div",{className:"column large-8 small-10 large-centered typography-eyebrow-elevated"},a.a.createElement(at,{resetAccessibilityFocusTargetId:"#current-location-button",wrappedComponentRef:this.updateLocationSelector,userLocation:c,shouldConcreteStoreBeSelected:Object(M.h)(this.props),locationUpdateStrategy:this.locationUpdateStrategy}))),a.a.createElement(Ze,null))),d&&a.a.createElement("div",{id:"section-passions"},this.renderPassions(),this.renderStandAlone(r[0],n.length)),!u&&this.getNoSessionsErrorMessage(),u&&a.a.createElement(De,{schedules:o})))}},{key:"updateLocationSelector",value:function(e){this.locationSelector=e}},{key:"resetSetNavigatedFromLocalNav",value:function(){this.props.globalActions.setNavigatedFromLocalNav(!1)}},{key:"componentDidMount",value:function(){this.processErrorRedirect();var e=this.props,t=e.location,n=e.sessionStorage;if(t.state){var r=t.state.from;r!==T.PageName.EVENT&&r!==T.PageName.EDITORIAL||this.scrollTop()}n.remove(Ue.b.CALENDAR_SELECTED_DATE)}},{key:"renderTagSection",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.a.createElement(me.c,{id:e.id,offset:52,key:e.id},a.a.createElement(R.a,{config:{eventName:"active-session",eventType:be.a.ENTER,start:"-30vh",end:"70%",callback:this.setSectionNavActiveItem(e.id)}},a.a.createElement(fe,{tagData:e,index:t,standAlone:n,forceImage:!1})))}},{key:"getNoSessionsErrorMessage",value:function(){var e=this.props,t=e.derivedState,n=e.schedules,r=t.areStoresAvailable;if(n&&n.length>0)return null;var o="error.no-results-for-location";return r||(o="error.no-sessions-here-try-store"),a.a.createElement(Pe.a,{path:o,onChangeLocationClick:this.showLocationModal})}},{key:"processErrorRedirect",value:function(){var e=this.props.history,t=We(location.href.split("?"),2),n=t[0],r=t[1],a=new URLSearchParams(r),o=a.get(M.m.ERROR),i=e.location.state&&e.location.state[M.m.ERROR];if(this.isErrorURLValue(o)){a.delete(M.m.ERROR);var c=a.toString();window.history.replaceState({},document.title,"".concat(n).concat(c?"?"+c:"")),this.setState({errorModal:{isVisible:!0,message:this.getErrorModalMessage(o)}})}else this.isErrorURLValue(i)&&this.setState({errorModal:{isVisible:!0,message:this.getErrorModalMessage(i)}})}},{key:"isErrorURLValue",value:function(e){return[M.n.COURSE_NOT_FOUND,M.n.SESSION_NOT_FOUND,M.n.HOLD_SESSION_FULL].includes(e)}},{key:"getErrorModalMessage",value:function(e){var t=this.props.i18n;switch(e){case M.n.COURSE_NOT_FOUND:case M.n.SESSION_NOT_FOUND:return t.value("error.session-not-available-more-discover");case M.n.HOLD_SESSION_FULL:return t.value("error.camp-waitlist-full");default:return}}},{key:"showLocationModal",value:function(){this.locationSelector&&this.locationSelector.showModal()}},{key:"resetErrorModal",value:function(){this.setState({errorModal:{}})}},{key:"scrollTop",value:function(){this.props.browserService.windowScrollToY(0,{withAnimation:!0})}}]),t}();nt([o.a],ot.prototype,"setSectionNavActiveItem",null),nt([o.a],ot.prototype,"hideNavigationBar",null),nt([o.a],ot.prototype,"showNavigationBar",null),nt([o.a],ot.prototype,"updateLocationSelector",null),nt([o.a],ot.prototype,"resetSetNavigatedFromLocalNav",null),nt([o.a],ot.prototype,"processErrorRedirect",null),nt([o.a],ot.prototype,"getErrorModalMessage",null),nt([o.a],ot.prototype,"showLocationModal",null),nt([o.a],ot.prototype,"resetErrorModal",null),ot=nt([Object(L.a)(w.b.FEATURE_DETECTION,w.b.BROWSER_SERVICE,w.b.SESSION_STORAGE),Object(ye.b)(function(e){var t=s(e.discoverState);return $e({},e.discoverState,{globalState:e.globalState,derivedState:t})},function(e){return{actions:Object(he.b)(ge,e),globalActions:Object(he.b)(Se,e)}}),Object(i.a)({stickyConnectionId:"hero-release-sticky",isLocalNavSticky:!0,pageClassName:"discover-page",wrappedPageName:T.PageName.DISCOVER,getBreadcrumbTitle:function(){return null}}),Object(je.a)({pageName:"today - discover"})],ot),n.d(t,"DiscoverPage",function(){return ot})}}]);