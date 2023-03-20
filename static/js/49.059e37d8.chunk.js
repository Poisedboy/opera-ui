"use strict";(self.webpackChunkauth_medium=self.webpackChunkauth_medium||[]).push([[49],{537:function(e,n,t){t.r(n),t.d(n,{default:function(){return me}});var i=t(2791),r=t(7022),a=t(2709),c=t(9140),s=t(9439),o=t(3360),l=t(1413),d=t(5987),u=t(1694),f=t.n(u),m=t(162),p=t(184),g=["bsPrefix","className","as"],h=i.forwardRef((function(e,n){var t=e.bsPrefix,i=e.className,r=e.as,a=void 0===r?"div":r,c=(0,d.Z)(e,g),s=(0,m.vE)(t,"row"),o=(0,m.pi)(),u=(0,m.zG)(),h="".concat(s,"-cols"),x=[];return o.forEach((function(e){var n,t=c[e];delete c[e],n=null!=t&&"object"===typeof t?t.cols:t;var i=e!==u?"-".concat(e):"";null!=n&&x.push("".concat(h).concat(i,"-").concat(n))})),(0,p.jsx)(a,(0,l.Z)((0,l.Z)({ref:n},c),{},{className:f().apply(void 0,[i,s].concat(x))}))}));h.displayName="Row";var x,b=h,Z=t(3070),j=t(7357),y=t(8376),v=t(6382);function N(e){if((!x&&0!==x||e)&&j.Z){var n=document.createElement("div");n.style.position="absolute",n.style.top="-9999px",n.style.width="50px",n.style.height="50px",n.style.overflow="scroll",document.body.appendChild(n),x=n.offsetWidth-n.clientWidth,document.body.removeChild(n)}return x}var w=t(8633),E=t(9007),k=t(3201),C=t(1683),F=t(3690),T=t(904),R=t(4382),P=t(6543),S=(0,P.Z)("modal-body"),D=t(9820),A=["bsPrefix","className","contentClassName","centered","size","fullscreen","children","scrollable"],H=i.forwardRef((function(e,n){var t=e.bsPrefix,i=e.className,r=e.contentClassName,a=e.centered,c=e.size,s=e.fullscreen,o=e.children,u=e.scrollable,g=(0,d.Z)(e,A);t=(0,m.vE)(t,"modal");var h="".concat(t,"-dialog"),x="string"===typeof s?"".concat(t,"-fullscreen-").concat(s):"".concat(t,"-fullscreen");return(0,p.jsx)("div",(0,l.Z)((0,l.Z)({},g),{},{ref:n,className:f()(h,i,c&&"".concat(t,"-").concat(c),a&&"".concat(h,"-centered"),u&&"".concat(h,"-scrollable"),s&&x),children:(0,p.jsx)("div",{className:f()("".concat(t,"-content"),r),children:o})}))}));H.displayName="ModalDialog";var O=H,z=(0,P.Z)("modal-footer"),B=t(8024),I=["bsPrefix","className"],M=i.forwardRef((function(e,n){var t=e.bsPrefix,i=e.className,r=(0,d.Z)(e,I);return t=(0,m.vE)(t,"modal-header"),(0,p.jsx)(B.Z,(0,l.Z)((0,l.Z)({ref:n},r),{},{className:f()(i,t)}))}));M.displayName="ModalHeader",M.defaultProps={closeLabel:"Close",closeButton:!1};var _=M,K=(0,t(7472).Z)("h4"),L=(0,P.Z)("modal-title",{Component:K}),U=["bsPrefix","className","style","dialogClassName","contentClassName","children","dialogAs","aria-labelledby","aria-describedby","aria-label","show","animation","backdrop","keyboard","onEscapeKeyDown","onShow","onHide","container","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","onEntered","onExit","onExiting","onEnter","onEntering","onExited","backdropClassName","manager"],W={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:O};function G(e){return(0,p.jsx)(a.Z,(0,l.Z)((0,l.Z)({},e),{},{timeout:null}))}function q(e){return(0,p.jsx)(a.Z,(0,l.Z)((0,l.Z)({},e),{},{timeout:null}))}var J=i.forwardRef((function(e,n){var t=e.bsPrefix,r=e.className,a=e.style,c=e.dialogClassName,o=e.contentClassName,u=e.children,g=e.dialogAs,h=e["aria-labelledby"],x=e["aria-describedby"],b=e["aria-label"],P=e.show,S=e.animation,A=e.backdrop,H=e.keyboard,O=e.onEscapeKeyDown,z=e.onShow,B=e.onHide,I=e.container,M=e.autoFocus,_=e.enforceFocus,K=e.restoreFocus,L=e.restoreFocusOptions,W=e.onEntered,J=e.onExit,Q=e.onExiting,V=e.onEnter,X=e.onEntering,Y=e.onExited,$=e.backdropClassName,ee=e.manager,ne=(0,d.Z)(e,U),te=(0,i.useState)({}),ie=(0,s.Z)(te,2),re=ie[0],ae=ie[1],ce=(0,i.useState)(!1),se=(0,s.Z)(ce,2),oe=se[0],le=se[1],de=(0,i.useRef)(!1),ue=(0,i.useRef)(!1),fe=(0,i.useRef)(null),me=(0,w.Z)(),pe=(0,s.Z)(me,2),ge=pe[0],he=pe[1],xe=(0,k.Z)(n,he),be=(0,E.Z)(B),Ze=(0,m.SC)();t=(0,m.vE)(t,"modal");var je=(0,i.useMemo)((function(){return{onHide:be}}),[be]);function ye(){return ee||(0,R.t)({isRTL:Ze})}function ve(e){if(j.Z){var n=ye().getScrollbarWidth()>0,t=e.scrollHeight>(0,y.Z)(e).documentElement.clientHeight;ae({paddingRight:n&&!t?N():void 0,paddingLeft:!n&&t?N():void 0})}}var Ne=(0,E.Z)((function(){ge&&ve(ge.dialog)}));(0,C.Z)((function(){(0,v.Z)(window,"resize",Ne),null==fe.current||fe.current()}));var we=function(){de.current=!0},Ee=function(e){de.current&&ge&&e.target===ge.dialog&&(ue.current=!0),de.current=!1},ke=function(){le(!0),fe.current=(0,F.Z)(ge.dialog,(function(){le(!1)}))},Ce=function(e){"static"!==A?ue.current||e.target!==e.currentTarget?ue.current=!1:null==B||B():function(e){e.target===e.currentTarget&&ke()}(e)},Fe=(0,i.useCallback)((function(e){return(0,p.jsx)("div",(0,l.Z)((0,l.Z)({},e),{},{className:f()("".concat(t,"-backdrop"),$,!S&&"show")}))}),[S,$,t]),Te=(0,l.Z)((0,l.Z)({},a),re);Te.display="block";return(0,p.jsx)(D.Z.Provider,{value:je,children:(0,p.jsx)(T.Z,{show:P,ref:xe,backdrop:A,container:I,keyboard:!0,autoFocus:M,enforceFocus:_,restoreFocus:K,restoreFocusOptions:L,onEscapeKeyDown:function(e){H?null==O||O(e):(e.preventDefault(),"static"===A&&ke())},onShow:z,onHide:B,onEnter:function(e,n){e&&ve(e),null==V||V(e,n)},onEntering:function(e,n){null==X||X(e,n),(0,Z.ZP)(window,"resize",Ne)},onEntered:W,onExit:function(e){null==fe.current||fe.current(),null==J||J(e)},onExiting:Q,onExited:function(e){e&&(e.style.display=""),null==Y||Y(e),(0,v.Z)(window,"resize",Ne)},manager:ye(),transition:S?G:void 0,backdropTransition:S?q:void 0,renderBackdrop:Fe,renderDialog:function(e){return(0,p.jsx)("div",(0,l.Z)((0,l.Z)({role:"dialog"},e),{},{style:Te,className:f()(r,t,oe&&"".concat(t,"-static"),!S&&"show"),onClick:A?Ce:void 0,onMouseUp:Ee,"aria-label":b,"aria-labelledby":h,"aria-describedby":x,children:(0,p.jsx)(g,(0,l.Z)((0,l.Z)({},ne),{},{onMouseDown:we,className:c,contentClassName:o,children:u}))}))}})})}));J.displayName="Modal",J.defaultProps=W;var Q=Object.assign(J,{Body:S,Header:_,Title:L,Footer:z,Dialog:O,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150}),V=function(e){var n=e.name,t=e.picture,r=e.ingredients,a=(0,i.useState)(!1),l=(0,s.Z)(a,2),d=l[0],u=l[1],f=function(){return u(!1)};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o.Z,{onClick:function(){return u(!0)},variant:"light",children:"\u0406\u041d\u0413\u0420E\u0414\u0406\u0404\u041d\u0422\u0418"}),(0,p.jsxs)(Q,{show:d,onHide:f,className:"d-flex align-items-center",children:[(0,p.jsx)(Q.Body,{children:(0,p.jsxs)(c.Z,{style:{border:"none"},children:[(0,p.jsx)(b,{children:(0,p.jsx)(Q.Title,{className:"d-flex justify-content-center",children:(0,p.jsx)(c.Z.Title,{children:n})})}),(0,p.jsx)(b,{children:(0,p.jsx)(c.Z.Img,{src:t})}),(0,p.jsx)(b,{children:(0,p.jsx)(c.Z.Body,{children:r||"\u041d\u0435\u043c\u0430\u0454 \u0434\u0430\u043d\u0438\u0445"})})]})}),(0,p.jsx)(Q.Footer,{children:(0,p.jsx)(o.Z,{variant:"secondary",onClick:f,children:"\u0417\u0410\u041a\u0420\u0418\u0422\u0418"})})]})]})},X=t(9797),Y=(0,i.lazy)((function(){return t.e(773).then(t.bind(t,2773))})),$=function(e){var n=e.picture,t=e.name,r=e.ingredients;return(0,p.jsx)(a.Z,{in:!0,children:(0,p.jsxs)(c.Z,{style:{margin:"5px",width:"20rem"},children:[(0,p.jsx)(i.Suspense,{fallback:(0,p.jsx)(X.Z,{}),children:(0,p.jsx)(Y,{image:n})}),(0,p.jsxs)(c.Z.Body,{children:[(0,p.jsx)(c.Z.Title,{className:"d-flex justify-content-center",style:{height:"50px"},children:t}),(0,p.jsx)("div",{className:"d-flex justify-content-end",children:(0,p.jsx)(V,{name:t,picture:n,ingredients:r})})]})]})})},ee=t.p+"static/media/fry-eggs.f262d094b05121d75d62.jpg",ne=t.p+"static/media/sweet-curd-fritter.13f939c9be33706c8de2.jpg",te=t.p+"static/media/solt-curd-fritter.81c9ee5286d8f348e6b7.jpg",ie=t.p+"static/media/chicken-flippers.4bfb17397c4b36abb3a6.jpg",re=t.p+"static/media/sweet-flippers.54261a520290c17fe810.jpg",ae=t.p+"static/media/cereal.5b2143313a4b4fdf6557.jpg",ce=t.p+"static/media/plate-health.77ed537445f62e62aa5b.jpg",se=t.p+"static/media/croissant-n-cutting.91e2cda9f7a6248ed03e.jpg",oe=t.p+"static/media/pierogy-potato.b5d357767cebb817879d.jpg",le=t.p+"static/media/croissant-fruits.88a4c9b5cfbf00010187.jpg",de=t.p+"static/media/pierogy-cherry.ceea8b5d2bcd7a224aff.jpg",ue=function(){return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)(c.Z,{className:"d-flex justify-content-center align-items-center",style:{marginTop:"50px",border:"none"},children:[(0,p.jsx)(c.Z.Title,{style:{fontSize:"3rem"},children:"A la Carte"}),(0,p.jsx)(c.Z.Text,{children:"\u0421\u043d\u0456\u0434\u0430\u043d\u043a\u0438 \u043f\u043e\u0434\u0430\u044e\u0442\u044c \u0437 8:00 \u0434\u043e 11:00 \u0432 \u043a\u0430\u0444\u0435 \u043d\u0430 \u0447\u0435\u0442\u0432\u0435\u0440\u0442\u043e\u043c\u0443 \u043f\u043e\u0432\u0435\u0440\u0441\u0456."})]})})},fe=[{id:1,name:"\u042f\u0454\u0448\u043d\u044f",picture:ee,ingredients:"\u044f\u0439\u0446\u0435, \u043f\u043e\u043c\u0456\u0434\u043e\u0440, \u043e\u0433\u0456\u0440\u043e\u043a, \u043b\u0438\u0441\u0442\u044f \u0441\u0430\u043b\u0430\u0442\u0443, \u0441\u043e\u0441\u0438\u0441\u043a\u0430, \u0431\u0443\u043b\u043a\u0430, \u043c\u0430\u0441\u043b\u043e."},{id:2,name:"\u0421\u043e\u043b\u043e\u0434\u043a\u0456 \u0441\u0438\u0440\u043d\u0438\u043a\u0438",picture:ne,ingredients:"\u0441\u0438\u0440 \u043a\u0438\u0441\u043b\u043e\u043c\u043e\u043b\u043e\u0447\u043d\u0438\u0439, \u043b\u0456\u0441\u043e\u0432\u0456 \u044f\u0433\u043e\u0434\u0438, \u044f\u0433\u0456\u0434\u043d\u0438\u0439 \u0434\u0436\u0435\u043c, \u0441\u043c\u0435\u0442\u0430\u043d\u0430."},{id:3,name:"\u0421\u043e\u043b\u0435\u043d\u0456 \u0441\u0438\u0440\u043d\u0438\u043a\u0438",picture:te,ingredients:"\u0441\u0438\u0440 \u043a\u0438\u0441\u043b\u043e\u043c\u043e\u043b\u043e\u0447\u043d\u0438\u0439, \u0437\u0435\u043b\u0435\u043d\u044c, \u0441\u043e\u0443\u0441 \u043f\u0435\u0441\u0442\u043e, \u0441\u043c\u0435\u0442\u0430\u043d\u0430."},{id:4,name:"\u041c\u043b\u0438\u043d\u0446\u0456 \u0437 \u043a\u0443\u0440\u043a\u043e\u044e \u0442\u0430 \u0433\u0440\u0438\u0431\u0430\u043c\u0438",picture:ie,ingredients:"\u043c\u043b\u0438\u043d\u0446\u0456, \u043a\u0443\u0440\u043a\u0430, \u0433\u0440\u0438\u0431\u0438, \u0437\u0435\u043b\u0435\u043d\u044c, \u043f\u043e\u043c\u0456\u0434\u043e\u0440 \u0447\u0435\u0440\u0456, \u043a\u0435\u0442\u0447\u0443\u043f."},{id:5,name:"\u0421\u043e\u043b\u043e\u0434\u043a\u0456 \u043c\u043b\u0438\u043d\u0446\u0456",picture:re,ingredients:"\u043c\u043b\u0438\u043d\u0446\u0456, \u0441\u0438\u0440 \u043a\u0438\u0441\u043b\u043e\u043c\u043e\u043b\u043e\u0447\u043d\u0438\u0439, \u043b\u0456\u0441\u043e\u0432\u0456 \u044f\u0433\u043e\u0434\u0438, \u0441\u043c\u0435\u0442\u0430\u043d\u0430."},{id:6,name:"\u0412\u0456\u0432\u0441\u044f\u043d\u043a\u0430 \u0437 \u0441\u0435\u0437\u043e\u043d\u043d\u0438\u043c\u0438",picture:ae,ingredients:"\u0432\u0456\u0432\u0441\u044f\u043d\u043a\u0430, \u0441\u0435\u0437\u043e\u043d\u043d\u0456 \u0444\u0440\u0443\u043a\u0442\u0438 \u0442\u0430 \u044f\u0433\u043e\u0434\u0438."},{id:7,name:'\u0422\u0430\u0440\u0456\u043b\u043a\u0430 "\u0417\u0434\u043e\u0440\u043e\u0432\'\u044f"',picture:ce,ingredients:"\u044f\u0439\u0446\u0435, \u043c\u0456\u043a\u0440\u043e \u0433\u0440\u0456\u043d, \u043f\u043e\u043c\u0456\u0434\u043e\u0440 \u0447\u0435\u0440\u0456."},{id:8,name:"\u041a\u0440\u0443\u0430\u0441\u0430\u043d \u0437 \u043d\u0430\u0440\u0456\u0437\u043a\u043e\u044e",picture:se,ingredients:"\u043a\u0440\u0443\u0430\u0441\u0430\u043d, \u0441\u0438\u0440 \u0442\u0432\u0435\u0440\u0434\u0438\u0439, \u043f\u043e\u043c\u0456\u0434\u043e\u0440, \u043e\u0433\u0456\u0440\u043e\u043a, \u043b\u0438\u0441\u0442\u044f \u0441\u0430\u043b\u0430\u0442\u0443, \u043e\u043b\u0438\u0432\u043a\u0438, \u043c\u0430\u0441\u043b\u043e."},{id:9,name:"\u0412\u0430\u0440\u0435\u043d\u0438\u043a\u0438 \u0437 \u043a\u0430\u0440\u0442\u043e\u043f\u043b\u0435\u044e \u0442\u0430 \u0433\u0440\u0438\u0431\u0430\u043c\u0438",picture:oe,ingredients:""},{id:10,name:"\u0412\u0430\u0440\u0435\u043d\u0438\u043a\u0438 \u0437 \u0432\u0438\u0448\u043d\u044f\u043c\u0438",picture:de,ingredients:""},{id:11,name:"\u041a\u0440\u0443\u0430\u0441\u0430\u043d \u0437 \u0441\u0435\u0437\u043e\u043d\u043d\u0438\u043c\u0438 \u0444\u0440\u0443\u043a\u0442\u0430\u043c\u0438",picture:le,ingredients:""}],me=function(){var e=fe.map((function(e){return(0,p.jsx)("div",{children:(0,p.jsx)($,{name:e.name,picture:e.picture,ingredients:e.ingredients})},e.id)}));return(0,p.jsxs)(r.Z,{children:[(0,p.jsx)(ue,{}),(0,p.jsx)("div",{className:"d-flex flex-wrap justify-content-center",children:e})]})}}}]);
//# sourceMappingURL=49.059e37d8.chunk.js.map