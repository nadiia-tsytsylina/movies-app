"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[853],{146:function(e,t,n){n.d(t,{Z:function(){return h}});var o,r,a,i,s=n(689),c=n(340),u=n(168),l=n(706),d=n(87),f=(0,l.Z)("div")(o||(o=(0,u.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 24px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),p=(0,l.Z)(d.rU)(r||(r=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-self: flex-end;\n  color: #111111;\n  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08);\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    transform: scale(1.03);\n    color: #31d0aa;\n    box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),\n      0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);\n  }\n"]))),m=(0,l.Z)("h2")(a||(a=(0,u.Z)(["\n  text-align: center;\n  margin-bottom: 8px;\n"]))),v=(0,l.Z)("img")(i||(i=(0,u.Z)(["\n  height: 400px;\n  object-fit: cover;\n"]))),g=n(184),h=function(e){var t=e.movies,n=e.path,o=(0,s.TH)();return(0,g.jsx)(f,{children:t.map((function(e){return(0,g.jsxs)(p,{to:"".concat(n).concat(e.id),state:{from:o},children:[(0,g.jsx)(m,{children:e.title}),e.poster_path?(0,g.jsx)(v,{src:"https://image.tmdb.org/t/p/w500".concat(e.poster_path),alt:e.title}):(0,g.jsx)(v,{src:c,alt:e.title})]},e.id)}))})}},853:function(e,t,n){n.r(t),n.d(t,{default:function(){return ie}});var o=n(439),r=n(142);function a(e,t,n){return(t=(0,r.Z)(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=n(433),l=n(791);function d(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=d(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}var f=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=d(e))&&(o&&(o+=" "),o+=t);return o},p=["theme","type"],m=["delay","staleId"],v=function(e){return"number"==typeof e&&!isNaN(e)},g=function(e){return"string"==typeof e},h=function(e){return"function"==typeof e},y=function(e){return g(e)||h(e)?e:null},b=function(e){return(0,l.isValidElement)(e)||g(e)||h(e)||v(e)};function T(e){var t=e.enter,n=e.exit,o=e.appendPosition,r=void 0!==o&&o,a=e.collapse,i=void 0===a||a,s=e.collapseDuration,c=void 0===s?300:s;return function(e){var o=e.children,a=e.position,s=e.preventExitTransition,d=e.done,f=e.nodeRef,p=e.isIn,m=r?"".concat(t,"--").concat(a):t,v=r?"".concat(n,"--").concat(a):n,g=(0,l.useRef)(0);return(0,l.useLayoutEffect)((function(){var e,t=f.current,n=m.split(" "),o=function e(o){var r;o.target===f.current&&(t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",e),t.removeEventListener("animationcancel",e),0===g.current&&"animationcancel"!==o.type&&(r=t.classList).remove.apply(r,(0,u.Z)(n)))};(e=t.classList).add.apply(e,(0,u.Z)(n)),t.addEventListener("animationend",o),t.addEventListener("animationcancel",o)}),[]),(0,l.useEffect)((function(){var e=f.current,t=function t(){e.removeEventListener("animationend",t),i?function(e,t,n){void 0===n&&(n=300);var o=e.scrollHeight,r=e.style;requestAnimationFrame((function(){r.minHeight="initial",r.height=o+"px",r.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){r.height="0",r.padding="0",r.margin="0",setTimeout(t,n)}))}))}(e,d,c):d()};p||(s?t():(g.current=1,e.className+=" ".concat(v),e.addEventListener("animationend",t)))}),[p]),l.createElement(l.Fragment,null,o)}}function E(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}var x={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(o){var r=setTimeout((function(){o.apply(void 0,(0,u.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(r)}))}},O=function(e){var t=e.theme,n=e.type,o=c(e,p);return l.createElement("svg",s({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-".concat(n,")")},o))},C={info:function(e){return l.createElement(O,s({},e),l.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return l.createElement(O,s({},e),l.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return l.createElement(O,s({},e),l.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return l.createElement(O,s({},e),l.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return l.createElement("div",{className:"Toastify__spinner"})}};function _(e){var t=(0,l.useReducer)((function(e){return e+1}),0),n=(0,o.Z)(t,2)[1],r=(0,l.useState)([]),a=(0,o.Z)(r,2),i=a[0],d=a[1],f=(0,l.useRef)(null),p=(0,l.useRef)(new Map).current,T=function(e){return-1!==i.indexOf(e)},O=(0,l.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:T,getToast:function(e){return p.get(e)}}).current;function _(e){var t=e.containerId;!O.props.limit||t&&O.containerId!==t||(O.count-=O.queue.length,O.queue=[])}function w(e){d((function(t){return null==e?[]:t.filter((function(t){return t!==e}))}))}function I(){var e=O.queue.shift();k(e.toastContent,e.toastProps,e.staleId)}function L(e,t){var r=t.delay,a=t.staleId,i=c(t,m);if(b(e)&&!function(e){return!f.current||O.props.enableMultiContainer&&e.containerId!==O.props.containerId||p.has(e.toastId)&&null==e.updateId}(i)){var u=i.toastId,d=i.updateId,T=i.data,_=O.props,L=function(){return w(u)},N=null==d;N&&O.count++;var R,P,j=s(s(s({},_),{},{style:_.toastStyle,key:O.toastKey++},Object.fromEntries(Object.entries(i).filter((function(e){var t=(0,o.Z)(e,2);t[0];return null!=t[1]})))),{},{toastId:u,updateId:d,data:T,closeToast:L,isIn:!1,className:y(i.className||_.toastClassName),bodyClassName:y(i.bodyClassName||_.bodyClassName),progressClassName:y(i.progressClassName||_.progressClassName),autoClose:!i.isLoading&&(R=i.autoClose,P=_.autoClose,!1===R||v(R)&&R>0?R:P),deleteToast:function(){var e=E(p.get(u),"removed");p.delete(u),x.emit(4,e);var t=O.queue.length;if(O.count=null==u?O.count-O.displayedToast:O.count-1,O.count<0&&(O.count=0),t>0){var o=null==u?O.props.limit:1;if(1===t||1===o)O.displayedToast++,I();else{var r=o>t?t:o;O.displayedToast=r;for(var a=0;a<r;a++)I()}}else n()}});j.iconOut=function(e){var t=e.theme,n=e.type,o=e.isLoading,r=e.icon,a=null,i={theme:t,type:n};return!1===r||(h(r)?a=r(i):(0,l.isValidElement)(r)?a=(0,l.cloneElement)(r,i):g(r)||v(r)?a=r:o?a=C.spinner():function(e){return e in C}(n)&&(a=C[n](i))),a}(j),h(i.onOpen)&&(j.onOpen=i.onOpen),h(i.onClose)&&(j.onClose=i.onClose),j.closeButton=_.closeButton,!1===i.closeButton||b(i.closeButton)?j.closeButton=i.closeButton:!0===i.closeButton&&(j.closeButton=!b(_.closeButton)||_.closeButton);var Z=e;(0,l.isValidElement)(e)&&!g(e.type)?Z=(0,l.cloneElement)(e,{closeToast:L,toastProps:j,data:T}):h(e)&&(Z=e({closeToast:L,toastProps:j,data:T})),_.limit&&_.limit>0&&O.count>_.limit&&N?O.queue.push({toastContent:Z,toastProps:j,staleId:a}):v(r)?setTimeout((function(){k(Z,j,a)}),r):k(Z,j,a)}}function k(e,t,n){var o=t.toastId;n&&p.delete(n);var r={content:e,props:t};p.set(o,r),d((function(e){return[].concat((0,u.Z)(e),[o]).filter((function(e){return e!==n}))})),x.emit(4,E(r,null==r.props.updateId?"added":"updated"))}return(0,l.useEffect)((function(){return O.containerId=e.containerId,x.cancelEmit(3).on(0,L).on(1,(function(e){return f.current&&w(e)})).on(5,_).emit(2,O),function(){p.clear(),x.emit(3,O)}}),[]),(0,l.useEffect)((function(){O.props=e,O.isToastActive=T,O.displayedToast=i.length})),{getToastToRender:function(t){var n=new Map,o=Array.from(p.values());return e.newestOnTop&&o.reverse(),o.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:f,isToastActive:T}}function w(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function I(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function L(e){var t=(0,l.useState)(!1),n=(0,o.Z)(t,2),r=n[0],a=n[1],i=(0,l.useState)(!1),s=(0,o.Z)(i,2),c=s[0],u=s[1],d=(0,l.useRef)(null),f=(0,l.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,l.useRef)(e),m=e.autoClose,v=e.pauseOnHover,g=e.closeToast,y=e.onClick,b=e.closeOnClick;function T(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),f.didMove=!1,document.addEventListener("mousemove",C),document.addEventListener("mouseup",_),document.addEventListener("touchmove",C),document.addEventListener("touchend",_);var n=d.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=n.getBoundingClientRect(),n.style.transition="",f.x=w(t.nativeEvent),f.y=I(t.nativeEvent),"x"===e.draggableDirection?(f.start=f.x,f.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(f.start=f.y,f.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function E(t){if(f.boundingRect){var n=f.boundingRect,o=n.top,r=n.bottom,a=n.left,i=n.right;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&f.x>=a&&f.x<=i&&f.y>=o&&f.y<=r?O():x()}}function x(){a(!0)}function O(){a(!1)}function C(t){var n=d.current;f.canDrag&&n&&(f.didMove=!0,r&&O(),f.x=w(t),f.y=I(t),f.delta="x"===e.draggableDirection?f.x-f.start:f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),n.style.transform="translate".concat(e.draggableDirection,"(").concat(f.delta,"px)"),n.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function _(){document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",_),document.removeEventListener("touchmove",C),document.removeEventListener("touchend",_);var t=d.current;if(f.canDrag&&f.didMove&&t){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return u(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate".concat(e.draggableDirection,"(0)"),t.style.opacity="1"}}(0,l.useEffect)((function(){p.current=e})),(0,l.useEffect)((function(){return d.current&&d.current.addEventListener("d",x,{once:!0}),h(e.onOpen)&&e.onOpen((0,l.isValidElement)(e.children)&&e.children.props),function(){var e=p.current;h(e.onClose)&&e.onClose((0,l.isValidElement)(e.children)&&e.children.props)}}),[]),(0,l.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||O(),window.addEventListener("focus",x),window.addEventListener("blur",O)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",x),window.removeEventListener("blur",O))}}),[e.pauseOnFocusLoss]);var L={onMouseDown:T,onTouchStart:T,onMouseUp:E,onTouchEnd:E};return m&&v&&(L.onMouseEnter=O,L.onMouseLeave=x),b&&(L.onClick=function(e){y&&y(e),f.canCloseOnClick&&g()}),{playToast:x,pauseToast:O,isRunning:r,preventExitTransition:c,toastRef:d,eventHandlers:L}}function k(e){var t=e.closeToast,n=e.theme,o=e.ariaLabel,r=void 0===o?"close":o;return l.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":r},l.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},l.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function N(e){var t=e.delay,n=e.isRunning,o=e.closeToast,r=e.type,i=void 0===r?"default":r,c=e.hide,u=e.className,d=e.style,p=e.controlledProgress,m=e.progress,v=e.rtl,g=e.isIn,y=e.theme,b=c||p&&0===m,T=s(s({},d),{},{animationDuration:"".concat(t,"ms"),animationPlayState:n?"running":"paused",opacity:b?0:1});p&&(T.transform="scaleX(".concat(m,")"));var E=f("Toastify__progress-bar",p?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(y),"Toastify__progress-bar--".concat(i),{"Toastify__progress-bar--rtl":v}),x=h(u)?u({rtl:v,type:i,defaultClassName:E}):f(E,u);return l.createElement("div",a({role:"progressbar","aria-hidden":b?"true":"false","aria-label":"notification timer",className:x,style:T},p&&m>=1?"onTransitionEnd":"onAnimationEnd",p&&m<1?null:function(){g&&o()}))}var R=function(e){var t=L(e),n=t.isRunning,o=t.preventExitTransition,r=t.toastRef,a=t.eventHandlers,i=e.closeButton,c=e.children,u=e.autoClose,d=e.onClick,p=e.type,m=e.hideProgressBar,v=e.closeToast,g=e.transition,y=e.position,b=e.className,T=e.style,E=e.bodyClassName,x=e.bodyStyle,O=e.progressClassName,C=e.progressStyle,_=e.updateId,w=e.role,I=e.progress,R=e.rtl,P=e.toastId,j=e.deleteToast,Z=e.isIn,M=e.isLoading,D=e.iconOut,z=e.closeOnClick,S=e.theme,B=f("Toastify__toast","Toastify__toast-theme--".concat(S),"Toastify__toast--".concat(p),{"Toastify__toast--rtl":R},{"Toastify__toast--close-on-click":z}),A=h(b)?b({rtl:R,position:y,type:p,defaultClassName:B}):f(B,b),F=!!I||!u,H={closeToast:v,type:p,theme:S},q=null;return!1===i||(q=h(i)?i(H):(0,l.isValidElement)(i)?(0,l.cloneElement)(i,H):k(H)),l.createElement(g,{isIn:Z,done:j,position:y,preventExitTransition:o,nodeRef:r},l.createElement("div",s(s({id:P,onClick:d,className:A},a),{},{style:T,ref:r}),l.createElement("div",s(s({},Z&&{role:w}),{},{className:h(E)?E({type:p}):f("Toastify__toast-body",E),style:x}),null!=D&&l.createElement("div",{className:f("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!M})},D),l.createElement("div",null,c)),q,l.createElement(N,s(s({},_&&!F?{key:"pb-".concat(_)}:{}),{},{rtl:R,theme:S,delay:u,isRunning:n,isIn:Z,closeToast:v,hide:m,type:p,style:C,className:O,controlledProgress:F,progress:I||0}))))},P=function(e,t){return void 0===t&&(t=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:t}},j=T(P("bounce",!0)),Z=(T(P("slide",!0)),T(P("zoom")),T(P("flip")),(0,l.forwardRef)((function(e,t){var n=_(e),o=n.getToastToRender,r=n.containerRef,a=n.isToastActive,i=e.className,c=e.style,u=e.rtl,d=e.containerId;function p(e){var t=f("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":u});return h(i)?i({position:e,rtl:u,defaultClassName:t}):f(t,y(i))}return(0,l.useEffect)((function(){t&&(t.current=r.current)}),[]),l.createElement("div",{ref:r,className:"Toastify",id:d},o((function(e,t){var n=t.length?s({},c):s(s({},c),{},{pointerEvents:"none"});return l.createElement("div",{className:p(e),style:n,key:"container-".concat(e)},t.map((function(e,n){var o=e.content,r=e.props;return l.createElement(R,s(s({},r),{},{isIn:a(r.toastId),style:s(s({},r.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-".concat(r.key)}),o)})))})))})));Z.displayName="ToastContainer",Z.defaultProps={position:"top-right",transition:j,autoClose:5e3,closeButton:k,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var M,D=new Map,z=[],S=1;function B(){return""+S++}function A(e){return e&&(g(e.toastId)||v(e.toastId))?e.toastId:B()}function F(e,t){return D.size>0?x.emit(0,e,t):z.push({content:e,options:t}),t.toastId}function H(e,t){return s(s({},t),{},{type:t&&t.type||e,toastId:A(t)})}function q(e){return function(t,n){return F(t,H(e,n))}}function Q(e,t){return F(e,H("default",t))}Q.loading=function(e,t){return F(e,H("default",s({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},Q.promise=function(e,t,n){var o,r=t.pending,a=t.error,i=t.success;r&&(o=g(r)?Q.loading(r,n):Q.loading(r.render,s(s({},n),r)));var c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},u=function(e,t,r){if(null!=t){var a=s(s(s({type:e},c),n),{},{data:r}),i=g(t)?{render:t}:t;return o?Q.update(o,s(s({},a),i)):Q(i.render,s(s({},a),i)),r}Q.dismiss(o)},l=h(e)?e():e;return l.then((function(e){return u("success",i,e)})).catch((function(e){return u("error",a,e)})),l},Q.success=q("success"),Q.info=q("info"),Q.error=q("error"),Q.warning=q("warning"),Q.warn=Q.warning,Q.dark=function(e,t){return F(e,H("default",s({theme:"dark"},t)))},Q.dismiss=function(e){D.size>0?x.emit(1,e):z=z.filter((function(t){return null!=e&&t.options.toastId!==e}))},Q.clearWaitingQueue=function(e){return void 0===e&&(e={}),x.emit(5,e)},Q.isActive=function(e){var t=!1;return D.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},Q.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,o=D.get(n||M);return o&&o.getToast(e)}(e,t);if(n){var o=n.props,r=n.content,a=s(s(s({delay:100},o),t),{},{toastId:t.toastId||e,updateId:B()});a.toastId!==e&&(a.staleId=e);var i=a.render||r;delete a.render,F(i,a)}}),0)},Q.done=function(e){Q.update(e,{progress:1})},Q.onChange=function(e){return x.on(4,e),function(){x.off(4,e)}},Q.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},Q.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},x.on(2,(function(e){M=e.containerId||e,D.set(M,e),z.forEach((function(e){x.emit(0,e.content,e.options)})),z=[]})).on(3,(function(e){D.delete(e.containerId||e),0===D.size&&x.off(0).off(1).off(5)}));var V,U,G,W=n(87),X=n(689),Y=n(54),K=n(168),J=n(706),$=(0,J.Z)("form")(V||(V=(0,K.Z)(["\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 24px;\n  background-color: #fff;\n  width: 100%;\n  max-width: 600px;\n  border-radius: 12px;\n  border: 1px solid #e7e9fc;\n  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),\n    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);\n  overflow: hidden;\n"]))),ee=(0,J.Z)("input")(U||(U=(0,K.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  line-height: 1.2;\n  border: none;\n  outline: none;\n  padding: 8px 16px;\n  background-color: #fff;\n  color: #111111;\n\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),te=(0,J.Z)("button")(G||(G=(0,K.Z)(["\n  display: inline-block;\n  background-color: #31d0aa;\n  color: #111111;\n  opacity: 0.8;\n  font-size: 16px;\n  font-weight: 600;\n  width: 80px;\n  height: 48px;\n  border: 0;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n\n  &:hover {\n    opacity: 1;\n  }\n"]))),ne=n(184),oe=function(e){var t=e.onSubmit,n=(0,l.useState)(""),r=(0,o.Z)(n,2),a=r[0],i=r[1];return(0,ne.jsxs)($,{onSubmit:function(e){e.preventDefault(),""!==a.trim()?(t(a),i("")):Q.error("Please input name for searching movies")},children:[(0,ne.jsx)(ee,{value:a,onChange:function(e){i(e.currentTarget.value.toLowerCase())},name:"query",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies"}),(0,ne.jsx)(te,{type:"submit",children:"Search"})]})},re=n(445),ae=n(146),ie=function(){var e,t=(0,l.useState)(null),n=(0,o.Z)(t,2),r=n[0],a=n[1],i=(0,l.useState)(!1),s=(0,o.Z)(i,2),c=s[0],u=s[1],d=(0,W.lr)(),f=(0,o.Z)(d,2),p=f[0],m=f[1],v=null!==(e=p.get("query"))&&void 0!==e?e:"",g=(0,X.TH)();(0,l.useEffect)((function(){""!==v&&(u(!0),a(null),(0,Y.IR)(v).then((function(e){if(e.results.length<1)return a(null),Q.error("There are no movies with name ".concat(v)),void u(!1);a(e.results),u(!1)})).catch((function(e){return console.error(e)})))}),[v]);return(0,ne.jsxs)(ne.Fragment,{children:[(0,ne.jsx)(oe,{onSubmit:function(e){m({query:e})}}),r&&(0,ne.jsx)(ae.Z,{movies:r,path:"",state:{from:g}}),c&&(0,ne.jsx)(re.Z,{}),(0,ne.jsx)(Z,{position:"bottom-right",autoClose:2e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"})]})}}}]);
//# sourceMappingURL=853.a78f0fb4.chunk.js.map