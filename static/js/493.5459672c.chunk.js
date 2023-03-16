"use strict";(self.webpackChunkauth_medium=self.webpackChunkauth_medium||[]).push([[493],{515:function(e,n,t){t.r(n),t.d(n,{default:function(){return de}});var r=t(2791),i=t(7022),a=t(2709),s=t(9140),c=t(9439),o=t(3360),l=t(1413),d=t(5987),u=t(1694),f=t.n(u),m=t(162),p=t(184),x=["bsPrefix","className","as"],h=r.forwardRef((function(e,n){var t=e.bsPrefix,r=e.className,i=e.as,a=void 0===i?"div":i,s=(0,d.Z)(e,x),c=(0,m.vE)(t,"row"),o=(0,m.pi)(),u=(0,m.zG)(),h="".concat(c,"-cols"),g=[];return o.forEach((function(e){var n,t=s[e];delete s[e],n=null!=t&&"object"===typeof t?t.cols:t;var r=e!==u?"-".concat(e):"";null!=n&&g.push("".concat(h).concat(r,"-").concat(n))})),(0,p.jsx)(a,(0,l.Z)((0,l.Z)({ref:n},s),{},{className:f().apply(void 0,[r,c].concat(g))}))}));h.displayName="Row";var g,b=h,Z=t(3070),j=t(7357),y=t(8376),v=t(6382);function N(e){if((!g&&0!==g||e)&&j.Z){var n=document.createElement("div");n.style.position="absolute",n.style.top="-9999px",n.style.width="50px",n.style.height="50px",n.style.overflow="scroll",document.body.appendChild(n),g=n.offsetWidth-n.clientWidth,document.body.removeChild(n)}return g}var w=t(8633),E=t(9007),k=t(3201),C=t(1683),F=t(3690),T=t(904),R=t(4382),P=t(6543),S=(0,P.Z)("modal-body"),D=t(9820),A=["bsPrefix","className","contentClassName","centered","size","fullscreen","children","scrollable"],H=r.forwardRef((function(e,n){var t=e.bsPrefix,r=e.className,i=e.contentClassName,a=e.centered,s=e.size,c=e.fullscreen,o=e.children,u=e.scrollable,x=(0,d.Z)(e,A);t=(0,m.vE)(t,"modal");var h="".concat(t,"-dialog"),g="string"===typeof c?"".concat(t,"-fullscreen-").concat(c):"".concat(t,"-fullscreen");return(0,p.jsx)("div",(0,l.Z)((0,l.Z)({},x),{},{ref:n,className:f()(h,r,s&&"".concat(t,"-").concat(s),a&&"".concat(h,"-centered"),u&&"".concat(h,"-scrollable"),c&&g),children:(0,p.jsx)("div",{className:f()("".concat(t,"-content"),i),children:o})}))}));H.displayName="ModalDialog";var O=H,z=(0,P.Z)("modal-footer"),B=t(8024),I=["bsPrefix","className"],M=r.forwardRef((function(e,n){var t=e.bsPrefix,r=e.className,i=(0,d.Z)(e,I);return t=(0,m.vE)(t,"modal-header"),(0,p.jsx)(B.Z,(0,l.Z)((0,l.Z)({ref:n},i),{},{className:f()(r,t)}))}));M.displayName="ModalHeader",M.defaultProps={closeLabel:"Close",closeButton:!1};var _=M,K=(0,t(7472).Z)("h4"),L=(0,P.Z)("modal-title",{Component:K}),U=["bsPrefix","className","style","dialogClassName","contentClassName","children","dialogAs","aria-labelledby","aria-describedby","aria-label","show","animation","backdrop","keyboard","onEscapeKeyDown","onShow","onHide","container","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","onEntered","onExit","onExiting","onEnter","onEntering","onExited","backdropClassName","manager"],W={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:O};function G(e){return(0,p.jsx)(a.Z,(0,l.Z)((0,l.Z)({},e),{},{timeout:null}))}function q(e){return(0,p.jsx)(a.Z,(0,l.Z)((0,l.Z)({},e),{},{timeout:null}))}var J=r.forwardRef((function(e,n){var t=e.bsPrefix,i=e.className,a=e.style,s=e.dialogClassName,o=e.contentClassName,u=e.children,x=e.dialogAs,h=e["aria-labelledby"],g=e["aria-describedby"],b=e["aria-label"],P=e.show,S=e.animation,A=e.backdrop,H=e.keyboard,O=e.onEscapeKeyDown,z=e.onShow,B=e.onHide,I=e.container,M=e.autoFocus,_=e.enforceFocus,K=e.restoreFocus,L=e.restoreFocusOptions,W=e.onEntered,J=e.onExit,Q=e.onExiting,V=e.onEnter,X=e.onEntering,Y=e.onExited,$=e.backdropClassName,ee=e.manager,ne=(0,d.Z)(e,U),te=(0,r.useState)({}),re=(0,c.Z)(te,2),ie=re[0],ae=re[1],se=(0,r.useState)(!1),ce=(0,c.Z)(se,2),oe=ce[0],le=ce[1],de=(0,r.useRef)(!1),ue=(0,r.useRef)(!1),fe=(0,r.useRef)(null),me=(0,w.Z)(),pe=(0,c.Z)(me,2),xe=pe[0],he=pe[1],ge=(0,k.Z)(n,he),be=(0,E.Z)(B),Ze=(0,m.SC)();t=(0,m.vE)(t,"modal");var je=(0,r.useMemo)((function(){return{onHide:be}}),[be]);function ye(){return ee||(0,R.t)({isRTL:Ze})}function ve(e){if(j.Z){var n=ye().getScrollbarWidth()>0,t=e.scrollHeight>(0,y.Z)(e).documentElement.clientHeight;ae({paddingRight:n&&!t?N():void 0,paddingLeft:!n&&t?N():void 0})}}var Ne=(0,E.Z)((function(){xe&&ve(xe.dialog)}));(0,C.Z)((function(){(0,v.Z)(window,"resize",Ne),null==fe.current||fe.current()}));var we=function(){de.current=!0},Ee=function(e){de.current&&xe&&e.target===xe.dialog&&(ue.current=!0),de.current=!1},ke=function(){le(!0),fe.current=(0,F.Z)(xe.dialog,(function(){le(!1)}))},Ce=function(e){"static"!==A?ue.current||e.target!==e.currentTarget?ue.current=!1:null==B||B():function(e){e.target===e.currentTarget&&ke()}(e)},Fe=(0,r.useCallback)((function(e){return(0,p.jsx)("div",(0,l.Z)((0,l.Z)({},e),{},{className:f()("".concat(t,"-backdrop"),$,!S&&"show")}))}),[S,$,t]),Te=(0,l.Z)((0,l.Z)({},a),ie);Te.display="block";return(0,p.jsx)(D.Z.Provider,{value:je,children:(0,p.jsx)(T.Z,{show:P,ref:ge,backdrop:A,container:I,keyboard:!0,autoFocus:M,enforceFocus:_,restoreFocus:K,restoreFocusOptions:L,onEscapeKeyDown:function(e){H?null==O||O(e):(e.preventDefault(),"static"===A&&ke())},onShow:z,onHide:B,onEnter:function(e,n){e&&ve(e),null==V||V(e,n)},onEntering:function(e,n){null==X||X(e,n),(0,Z.ZP)(window,"resize",Ne)},onEntered:W,onExit:function(e){null==fe.current||fe.current(),null==J||J(e)},onExiting:Q,onExited:function(e){e&&(e.style.display=""),null==Y||Y(e),(0,v.Z)(window,"resize",Ne)},manager:ye(),transition:S?G:void 0,backdropTransition:S?q:void 0,renderBackdrop:Fe,renderDialog:function(e){return(0,p.jsx)("div",(0,l.Z)((0,l.Z)({role:"dialog"},e),{},{style:Te,className:f()(i,t,oe&&"".concat(t,"-static"),!S&&"show"),onClick:A?Ce:void 0,onMouseUp:Ee,"aria-label":b,"aria-labelledby":h,"aria-describedby":g,children:(0,p.jsx)(x,(0,l.Z)((0,l.Z)({},ne),{},{onMouseDown:we,className:s,contentClassName:o,children:u}))}))}})})}));J.displayName="Modal",J.defaultProps=W;var Q=Object.assign(J,{Body:S,Header:_,Title:L,Footer:z,Dialog:O,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150}),V=function(e){var n=e.name,t=e.picture,i=e.ingredients,a=(0,r.useState)(!1),l=(0,c.Z)(a,2),d=l[0],u=l[1],f=function(){return u(!1)};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o.Z,{onClick:function(){return u(!0)},variant:"light",children:"\u0406\u041d\u0413\u0420E\u0414\u0406\u0404\u041d\u0422\u0418"}),(0,p.jsxs)(Q,{show:d,onHide:f,className:"d-flex align-items-center",children:[(0,p.jsx)(Q.Body,{children:(0,p.jsxs)(s.Z,{style:{border:"none"},children:[(0,p.jsx)(b,{children:(0,p.jsx)(Q.Title,{className:"d-flex justify-content-center",children:(0,p.jsx)(s.Z.Title,{children:n})})}),(0,p.jsx)(b,{children:(0,p.jsx)(s.Z.Img,{src:t})}),(0,p.jsx)(b,{children:(0,p.jsx)(s.Z.Body,{children:i||"\u041d\u0435\u043c\u0430\u0454 \u0434\u0430\u043d\u0438\u0445"})})]})}),(0,p.jsx)(Q.Footer,{children:(0,p.jsx)(o.Z,{variant:"secondary",onClick:f,children:"\u0417\u0410\u041a\u0420\u0418\u0422\u0418"})})]})]})},X=t(9797),Y=(0,r.lazy)((function(){return t.e(773).then(t.bind(t,2773))})),$=function(e){var n=e.picture,t=e.name,i=e.ingredients;return(0,p.jsx)(a.Z,{in:!0,children:(0,p.jsxs)(s.Z,{style:{width:"20rem",margin:"5px"},children:[(0,p.jsx)(r.Suspense,{fallback:(0,p.jsx)(X.Z,{}),children:(0,p.jsx)(Y,{image:n})}),(0,p.jsxs)(s.Z.Body,{children:[(0,p.jsx)(s.Z.Title,{className:"d-flex justify-content-center",children:t}),(0,p.jsx)("div",{className:"d-flex justify-content-end",children:(0,p.jsx)(V,{name:t,picture:n,ingredients:i})})]})]})})},ee=t.p+"static/media/fry-eggs.f262d094b05121d75d62.jpg",ne=t.p+"static/media/sweet-curd-fritter.13f939c9be33706c8de2.jpg",te=t.p+"static/media/solt-curd-fritter.81c9ee5286d8f348e6b7.jpg",re=t.p+"static/media/chicken-flippers.4bfb17397c4b36abb3a6.jpg",ie=t.p+"static/media/sweet-flippers.54261a520290c17fe810.jpg",ae=t.p+"static/media/cereal.5b2143313a4b4fdf6557.jpg",se=t.p+"static/media/plate-health.77ed537445f62e62aa5b.jpg",ce=t.p+"static/media/croissant-n-cutting.91e2cda9f7a6248ed03e.jpg",oe=function(){return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)(s.Z,{className:"d-flex justify-content-center align-items-center",style:{marginTop:"50px",border:"none"},children:[(0,p.jsx)(s.Z.Title,{style:{fontSize:"3rem"},children:"A la Carte"}),(0,p.jsx)(s.Z.Text,{children:"\u0421\u043d\u0456\u0434\u0430\u043d\u043a\u0438 \u043f\u043e\u0434\u0430\u044e\u0442\u044c \u0437 8:00 \u0434\u043e 11:00 \u0432 \u043a\u0430\u0444\u0435 \u043d\u0430 \u0447\u0435\u0442\u0432\u0435\u0440\u0442\u043e\u043c\u0443 \u043f\u043e\u0432\u0435\u0440\u0441\u0456."})]})})},le=[{id:1,name:"\u042f\u0454\u0448\u043d\u044f",picture:ee,ingredients:"\u044f\u0439\u0446\u0435, \u043f\u043e\u043c\u0456\u0434\u043e\u0440, \u043e\u0433\u0456\u0440\u043e\u043a, \u043b\u0438\u0441\u0442\u044f \u0441\u0430\u043b\u0430\u0442\u0443, \u0441\u043e\u0441\u0438\u0441\u043a\u0430, \u0431\u0443\u043b\u043a\u0430, \u043c\u0430\u0441\u043b\u043e."},{id:2,name:"\u0421\u043e\u043b\u043e\u0434\u043a\u0456 \u0441\u0438\u0440\u043d\u0438\u043a\u0438",picture:ne,ingredients:"\u0441\u0438\u0440 \u043a\u0438\u0441\u043b\u043e\u043c\u043e\u043b\u043e\u0447\u043d\u0438\u0439, \u043b\u0456\u0441\u043e\u0432\u0456 \u044f\u0433\u043e\u0434\u0438, \u044f\u0433\u0456\u0434\u043d\u0438\u0439 \u0434\u0436\u0435\u043c, \u0441\u043c\u0435\u0442\u0430\u043d\u0430."},{id:3,name:"\u0421\u043e\u043b\u0435\u043d\u0456 \u0441\u0438\u0440\u043d\u0438\u043a\u0438",picture:te,ingredients:"\u0441\u0438\u0440 \u043a\u0438\u0441\u043b\u043e\u043c\u043e\u043b\u043e\u0447\u043d\u0438\u0439, \u0437\u0435\u043b\u0435\u043d\u044c, \u0441\u043e\u0443\u0441 \u043f\u0435\u0441\u0442\u043e, \u0441\u043c\u0435\u0442\u0430\u043d\u0430."},{id:4,name:"\u041c\u043b\u0438\u043d\u0446\u0456 \u0437 \u043a\u0443\u0440\u043a\u043e\u044e \u0442\u0430 \u0433\u0440\u0438\u0431\u0430\u043c\u0438",picture:re,ingredients:"\u043c\u043b\u0438\u043d\u0446\u0456, \u043a\u0443\u0440\u043a\u0430, \u0433\u0440\u0438\u0431\u0438, \u0437\u0435\u043b\u0435\u043d\u044c, \u043f\u043e\u043c\u0456\u0434\u043e\u0440 \u0447\u0435\u0440\u0456, \u043a\u0435\u0442\u0447\u0443\u043f."},{id:5,name:"\u0421\u043e\u043b\u043e\u0434\u043a\u0456 \u043c\u043b\u0438\u043d\u0446\u0456",picture:ie,ingredients:"\u043c\u043b\u0438\u043d\u0446\u0456, \u0441\u0438\u0440 \u043a\u0438\u0441\u043b\u043e\u043c\u043e\u043b\u043e\u0447\u043d\u0438\u0439, \u043b\u0456\u0441\u043e\u0432\u0456 \u044f\u0433\u043e\u0434\u0438, \u0441\u043c\u0435\u0442\u0430\u043d\u0430."},{id:6,name:"\u0412\u0456\u0432\u0441\u044f\u043d\u043a\u0430",picture:ae,ingredients:"\u0432\u0456\u0432\u0441\u044f\u043d\u043a\u0430, \u0431\u0430\u043d\u0430\u043d, \u043c\u0430\u043b\u0438\u043d\u0430, \u0433\u043e\u0440\u0456\u0445."},{id:7,name:'\u0422\u0430\u0440\u0456\u043b\u043a\u0430 "\u0417\u0434\u043e\u0440\u043e\u0432\'\u044f"',picture:se,ingredients:"\u044f\u0439\u0446\u0435, \u043c\u0456\u043a\u0440\u043e \u0433\u0440\u0456\u043d, \u043f\u043e\u043c\u0456\u0434\u043e\u0440 \u0447\u0435\u0440\u0456."},{id:8,name:"\u041a\u0440\u0443\u0430\u0441\u0430\u043d \u0437 \u043d\u0430\u0440\u0456\u0437\u043a\u043e\u044e",picture:ce,ingredients:"\u043a\u0440\u0443\u0430\u0441\u0430\u043d, \u0441\u0438\u0440 \u0442\u0432\u0435\u0440\u0434\u0438\u0439, \u043f\u043e\u043c\u0456\u0434\u043e\u0440, \u043e\u0433\u0456\u0440\u043e\u043a, \u043b\u0438\u0441\u0442\u044f \u0441\u0430\u043b\u0430\u0442\u0443, \u043e\u043b\u0438\u0432\u043a\u0438, \u043c\u0430\u0441\u043b\u043e."}],de=function(){var e=le.map((function(e){return(0,p.jsx)("div",{children:(0,p.jsx)($,{name:e.name,picture:e.picture,ingredients:e.ingredients})},e.id)}));return(0,p.jsxs)(i.Z,{children:[(0,p.jsx)(oe,{}),(0,p.jsx)("div",{className:"d-flex flex-wrap justify-content-center",children:e})]})}}}]);
//# sourceMappingURL=493.5459672c.chunk.js.map