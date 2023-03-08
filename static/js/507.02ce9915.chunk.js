"use strict";(self.webpackChunkauth_medium=self.webpackChunkauth_medium||[]).push([[507],{8313:function(e,n,t){t.r(n),t.d(n,{default:function(){return ue}});var r=t(2791),a=t(7022),i=t(2709),s=t(9140),c=t(9439),o=t(1413),l=t(5987),d=t(1694),u=t.n(d),f=t(5341),m=t(162),p=t(184),g=["as","bsPrefix","variant","size","active","className"],x=r.forwardRef((function(e,n){var t=e.as,r=e.bsPrefix,a=e.variant,i=e.size,s=e.active,d=e.className,x=(0,l.Z)(e,g),h=(0,m.vE)(r,"btn"),b=(0,f.FT)((0,o.Z)({tagName:t},x)),Z=(0,c.Z)(b,2),j=Z[0],v=Z[1].tagName;return(0,p.jsx)(v,(0,o.Z)((0,o.Z)((0,o.Z)({},j),x),{},{ref:n,className:u()(d,h,s&&"active",a&&"".concat(h,"-").concat(a),i&&"".concat(h,"-").concat(i),x.href&&x.disabled&&"disabled")}))}));x.displayName="Button",x.defaultProps={variant:"primary",active:!1,disabled:!1};var h,b=x,Z=t(9743),j=t(3070),v=t(7357),y=t(8376),N=t(6382);function w(e){if((!h&&0!==h||e)&&v.Z){var n=document.createElement("div");n.style.position="absolute",n.style.top="-9999px",n.style.width="50px",n.style.height="50px",n.style.overflow="scroll",document.body.appendChild(n),h=n.offsetWidth-n.clientWidth,document.body.removeChild(n)}return h}var E=t(8633),k=t(9007),C=t(3201),F=t(1683),T=t(3690),P=t(904),R=t(4382),S=t(6543),D=(0,S.Z)("modal-body"),z=t(9820),A=["bsPrefix","className","contentClassName","centered","size","fullscreen","children","scrollable"],H=r.forwardRef((function(e,n){var t=e.bsPrefix,r=e.className,a=e.contentClassName,i=e.centered,s=e.size,c=e.fullscreen,d=e.children,f=e.scrollable,g=(0,l.Z)(e,A);t=(0,m.vE)(t,"modal");var x="".concat(t,"-dialog"),h="string"===typeof c?"".concat(t,"-fullscreen-").concat(c):"".concat(t,"-fullscreen");return(0,p.jsx)("div",(0,o.Z)((0,o.Z)({},g),{},{ref:n,className:u()(x,r,s&&"".concat(t,"-").concat(s),i&&"".concat(x,"-centered"),f&&"".concat(x,"-scrollable"),c&&h),children:(0,p.jsx)("div",{className:u()("".concat(t,"-content"),a),children:d})}))}));H.displayName="ModalDialog";var O=H,B=(0,S.Z)("modal-footer"),I=t(8024),M=["bsPrefix","className"],_=r.forwardRef((function(e,n){var t=e.bsPrefix,r=e.className,a=(0,l.Z)(e,M);return t=(0,m.vE)(t,"modal-header"),(0,p.jsx)(I.Z,(0,o.Z)((0,o.Z)({ref:n},a),{},{className:u()(r,t)}))}));_.displayName="ModalHeader",_.defaultProps={closeLabel:"Close",closeButton:!1};var K=_,L=(0,t(7472).Z)("h4"),U=(0,S.Z)("modal-title",{Component:L}),W=["bsPrefix","className","style","dialogClassName","contentClassName","children","dialogAs","aria-labelledby","aria-describedby","aria-label","show","animation","backdrop","keyboard","onEscapeKeyDown","onShow","onHide","container","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","onEntered","onExit","onExiting","onEnter","onEntering","onExited","backdropClassName","manager"],q={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:O};function G(e){return(0,p.jsx)(i.Z,(0,o.Z)((0,o.Z)({},e),{},{timeout:null}))}function J(e){return(0,p.jsx)(i.Z,(0,o.Z)((0,o.Z)({},e),{},{timeout:null}))}var Q=r.forwardRef((function(e,n){var t=e.bsPrefix,a=e.className,i=e.style,s=e.dialogClassName,d=e.contentClassName,f=e.children,g=e.dialogAs,x=e["aria-labelledby"],h=e["aria-describedby"],b=e["aria-label"],Z=e.show,S=e.animation,D=e.backdrop,A=e.keyboard,H=e.onEscapeKeyDown,O=e.onShow,B=e.onHide,I=e.container,M=e.autoFocus,_=e.enforceFocus,K=e.restoreFocus,L=e.restoreFocusOptions,U=e.onEntered,q=e.onExit,Q=e.onExiting,V=e.onEnter,X=e.onEntering,Y=e.onExited,$=e.backdropClassName,ee=e.manager,ne=(0,l.Z)(e,W),te=(0,r.useState)({}),re=(0,c.Z)(te,2),ae=re[0],ie=re[1],se=(0,r.useState)(!1),ce=(0,c.Z)(se,2),oe=ce[0],le=ce[1],de=(0,r.useRef)(!1),ue=(0,r.useRef)(!1),fe=(0,r.useRef)(null),me=(0,E.Z)(),pe=(0,c.Z)(me,2),ge=pe[0],xe=pe[1],he=(0,C.Z)(n,xe),be=(0,k.Z)(B),Ze=(0,m.SC)();t=(0,m.vE)(t,"modal");var je=(0,r.useMemo)((function(){return{onHide:be}}),[be]);function ve(){return ee||(0,R.t)({isRTL:Ze})}function ye(e){if(v.Z){var n=ve().getScrollbarWidth()>0,t=e.scrollHeight>(0,y.Z)(e).documentElement.clientHeight;ie({paddingRight:n&&!t?w():void 0,paddingLeft:!n&&t?w():void 0})}}var Ne=(0,k.Z)((function(){ge&&ye(ge.dialog)}));(0,F.Z)((function(){(0,N.Z)(window,"resize",Ne),null==fe.current||fe.current()}));var we=function(){de.current=!0},Ee=function(e){de.current&&ge&&e.target===ge.dialog&&(ue.current=!0),de.current=!1},ke=function(){le(!0),fe.current=(0,T.Z)(ge.dialog,(function(){le(!1)}))},Ce=function(e){"static"!==D?ue.current||e.target!==e.currentTarget?ue.current=!1:null==B||B():function(e){e.target===e.currentTarget&&ke()}(e)},Fe=(0,r.useCallback)((function(e){return(0,p.jsx)("div",(0,o.Z)((0,o.Z)({},e),{},{className:u()("".concat(t,"-backdrop"),$,!S&&"show")}))}),[S,$,t]),Te=(0,o.Z)((0,o.Z)({},i),ae);Te.display="block";return(0,p.jsx)(z.Z.Provider,{value:je,children:(0,p.jsx)(P.Z,{show:Z,ref:he,backdrop:D,container:I,keyboard:!0,autoFocus:M,enforceFocus:_,restoreFocus:K,restoreFocusOptions:L,onEscapeKeyDown:function(e){A?null==H||H(e):(e.preventDefault(),"static"===D&&ke())},onShow:O,onHide:B,onEnter:function(e,n){e&&ye(e),null==V||V(e,n)},onEntering:function(e,n){null==X||X(e,n),(0,j.ZP)(window,"resize",Ne)},onEntered:U,onExit:function(e){null==fe.current||fe.current(),null==q||q(e)},onExiting:Q,onExited:function(e){e&&(e.style.display=""),null==Y||Y(e),(0,N.Z)(window,"resize",Ne)},manager:ve(),transition:S?G:void 0,backdropTransition:S?J:void 0,renderBackdrop:Fe,renderDialog:function(e){return(0,p.jsx)("div",(0,o.Z)((0,o.Z)({role:"dialog"},e),{},{style:Te,className:u()(a,t,oe&&"".concat(t,"-static"),!S&&"show"),onClick:D?Ce:void 0,onMouseUp:Ee,"aria-label":b,"aria-labelledby":x,"aria-describedby":h,children:(0,p.jsx)(g,(0,o.Z)((0,o.Z)({},ne),{},{onMouseDown:we,className:s,contentClassName:d,children:f}))}))}})})}));Q.displayName="Modal",Q.defaultProps=q;var V=Object.assign(Q,{Body:D,Header:K,Title:U,Footer:B,Dialog:O,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150}),X=function(e){var n=e.name,t=e.picture,a=e.ingredients,i=(0,r.useState)(!1),o=(0,c.Z)(i,2),l=o[0],d=o[1],u=function(){return d(!1)};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(b,{onClick:function(){return d(!0)},variant:"light",children:"\u0414\u0415\u0422\u0410\u041b\u0406"}),(0,p.jsxs)(V,{show:l,onHide:u,className:"d-flex align-items-center",children:[(0,p.jsx)(V.Body,{children:(0,p.jsxs)(s.Z,{style:{border:"none"},children:[(0,p.jsx)(Z.Z,{children:(0,p.jsx)(V.Title,{className:"d-flex justify-content-center",children:(0,p.jsx)(s.Z.Title,{children:n})})}),(0,p.jsx)(Z.Z,{children:(0,p.jsx)(s.Z.Img,{src:t})}),(0,p.jsx)(Z.Z,{children:(0,p.jsx)(s.Z.Body,{children:a||"\u041d\u0435\u043c\u0430\u0454 \u0434\u0430\u043d\u0438\u0445"})})]})}),(0,p.jsx)(V.Footer,{children:(0,p.jsx)(b,{variant:"secondary",onClick:u,children:"\u0417\u0410\u041a\u0420\u0418\u0422\u0418"})})]})]})},Y=t(9797),$=(0,r.lazy)((function(){return t.e(773).then(t.bind(t,2773))})),ee=function(e){var n=e.picture,t=e.name,a=e.ingredients;return(0,p.jsx)(i.Z,{in:!0,children:(0,p.jsxs)(s.Z,{style:{width:"20rem",margin:"5px"},children:[(0,p.jsx)(r.Suspense,{fallback:(0,p.jsx)(Y.Z,{}),children:(0,p.jsx)($,{image:n})}),(0,p.jsxs)(s.Z.Body,{children:[(0,p.jsx)(s.Z.Title,{children:t}),(0,p.jsx)(X,{name:t,picture:n,ingredients:a})]})]})})},ne=t.p+"static/media/fry-eggs.f262d094b05121d75d62.jpg",te=t.p+"static/media/sweet-curd-fritter.13f939c9be33706c8de2.jpg",re=t.p+"static/media/solt-curd-fritter.81c9ee5286d8f348e6b7.jpg",ae=t.p+"static/media/chicken-flippers.4bfb17397c4b36abb3a6.jpg",ie=t.p+"static/media/sweet-flippers.54261a520290c17fe810.jpg",se=t.p+"static/media/cereal.5b2143313a4b4fdf6557.jpg",ce=t.p+"static/media/plate-health.77ed537445f62e62aa5b.jpg",oe=t.p+"static/media/croissant-n-cutting.91e2cda9f7a6248ed03e.jpg",le=function(){return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)(s.Z,{className:"d-flex justify-content-center align-items-center",style:{marginTop:"50px",border:"none"},children:[(0,p.jsx)(s.Z.Title,{style:{fontSize:"3rem"},children:"A la Carte"}),(0,p.jsx)(s.Z.Text,{children:"\u0421\u043d\u0456\u0434\u0430\u043d\u043a\u0438 \u043f\u043e\u0434\u0430\u044e\u0442\u044c \u0437 8:00 \u0434\u043e 11:00 \u0432 \u043a\u0430\u0444\u0435 \u043d\u0430 \u0447\u0435\u0442\u0432\u0435\u0440\u0442\u043e\u043c\u0443 \u043f\u043e\u0432\u0435\u0440\u0441\u0456."})]})})},de=[{id:1,name:"\u042f\u0454\u0448\u043d\u044f",picture:ne,ingredients:"\u044f\u0439\u0446\u0435, \u043f\u043e\u043c\u0456\u0434\u043e\u0440, \u043e\u0433\u0456\u0440\u043e\u043a, \u043b\u0438\u0441\u0442\u044f \u0441\u0430\u043b\u0430\u0442\u0443, \u0441\u043e\u0441\u0438\u0441\u043a\u0430, \u0431\u0443\u043b\u043a\u0430, \u043c\u0430\u0441\u043b\u043e."},{id:2,name:"\u0421\u043e\u043b\u043e\u0434\u043a\u0456 \u0441\u0438\u0440\u043d\u0438\u043a\u0438",picture:te,ingredients:"\u0441\u0438\u0440 \u043a\u0438\u0441\u043b\u043e\u043c\u043e\u043b\u043e\u0447\u043d\u0438\u0439, \u043b\u0456\u0441\u043e\u0432\u0456 \u044f\u0433\u043e\u0434\u0438, \u044f\u0433\u0456\u0434\u043d\u0438\u0439 \u0434\u0436\u0435\u043c, \u0441\u043c\u0435\u0442\u0430\u043d\u0430."},{id:3,name:"\u0421\u043e\u043b\u0435\u043d\u0456 \u0441\u0438\u0440\u043d\u0438\u043a\u0438",picture:re,ingredients:"\u0441\u0438\u0440 \u043a\u0438\u0441\u043b\u043e\u043c\u043e\u043b\u043e\u0447\u043d\u0438\u0439, \u0437\u0435\u043b\u0435\u043d\u044c, \u0441\u043e\u0443\u0441 \u043f\u0435\u0441\u0442\u043e, \u0441\u043c\u0435\u0442\u0430\u043d\u0430."},{id:4,name:"\u041c\u043b\u0438\u043d\u0446\u0456 \u0437 \u043a\u0443\u0440\u043a\u043e\u044e \u0442\u0430 \u0433\u0440\u0438\u0431\u0430\u043c\u0438",picture:ae,ingredients:"\u043c\u043b\u0438\u043d\u0446\u0456, \u043a\u0443\u0440\u043a\u0430, \u0433\u0440\u0438\u0431\u0438, \u0437\u0435\u043b\u0435\u043d\u044c, \u043f\u043e\u043c\u0456\u0434\u043e\u0440 \u0447\u0435\u0440\u0456, \u043a\u0435\u0442\u0447\u0443\u043f."},{id:5,name:"\u0421\u043e\u043b\u043e\u0434\u043a\u0456 \u043c\u043b\u0438\u043d\u0446\u0456",picture:ie,ingredients:"\u043c\u043b\u0438\u043d\u0446\u0456, \u0441\u0438\u0440 \u043a\u0438\u0441\u043b\u043e\u043c\u043e\u043b\u043e\u0447\u043d\u0438\u0439, \u043b\u0456\u0441\u043e\u0432\u0456 \u044f\u0433\u043e\u0434\u0438, \u0441\u043c\u0435\u0442\u0430\u043d\u0430."},{id:6,name:"\u0412\u0456\u0432\u0441\u044f\u043d\u043a\u0430",picture:se,ingredients:"\u0432\u0456\u0432\u0441\u044f\u043d\u043a\u0430, \u0431\u0430\u043d\u0430\u043d, \u043c\u0430\u043b\u0438\u043d\u0430, \u0433\u043e\u0440\u0456\u0445."},{id:7,name:'\u0422\u0430\u0440\u0456\u043b\u043a\u0430 "\u0417\u0434\u043e\u0440\u043e\u0432\'\u044f"',picture:ce,ingredients:"\u044f\u0439\u0446\u0435, \u043c\u0456\u043a\u0440\u043e \u0433\u0440\u0456\u043d, \u043f\u043e\u043c\u0456\u0434\u043e\u0440 \u0447\u0435\u0440\u0456."},{id:8,name:"\u041a\u0440\u0443\u0430\u0441\u0430\u043d \u0437 \u043d\u0430\u0440\u0456\u0437\u043a\u043e\u044e",picture:oe,ingredients:"\u043a\u0440\u0443\u0430\u0441\u0430\u043d, \u0441\u0438\u0440 \u0442\u0432\u0435\u0440\u0434\u0438\u0439, \u043f\u043e\u043c\u0456\u0434\u043e\u0440, \u043e\u0433\u0456\u0440\u043e\u043a, \u043b\u0438\u0441\u0442\u044f \u0441\u0430\u043b\u0430\u0442\u0443, \u043e\u043b\u0438\u0432\u043a\u0438, \u043c\u0430\u0441\u043b\u043e."}],ue=function(){var e=de.map((function(e){return(0,p.jsx)("div",{children:(0,p.jsx)(ee,{name:e.name,picture:e.picture,ingredients:e.ingredients})},e.id)}));return(0,p.jsxs)(a.Z,{children:[(0,p.jsx)(le,{}),(0,p.jsx)("div",{className:"d-flex flex-wrap justify-content-center",children:e})]})}}}]);
//# sourceMappingURL=507.02ce9915.chunk.js.map