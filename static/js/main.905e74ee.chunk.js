(this.webpackJsonppwa=this.webpackJsonppwa||[]).push([[0],{43:function(e,t,n){},44:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),s=n(32),a=n.n(s),i=(n(43),n(44),n(70)),o=n(71),l=n(72),d=n(68),j=n(24),p=n.n(j),b=n(33),h=n(34);function u(e){var t=Object(r.useState)(null),n=Object(h.a)(t,2),c=n[0],s=n[1];return Object(r.useEffect)((function(){function t(){return(t=Object(b.a)(p.a.mark((function t(){var n,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:if((n=t.sent).ok){t.next=5;break}return t.abrupt("return");case 5:return t.next=7,n.json();case 7:r=t.sent,s(r);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),c}var x=n(2);function m(){var e=u("https://www.brain2brain.de/RAW-WP/wp-json/wp/v2/vorspeisen");return Object(x.jsx)(d.a,{container:!0,spacing:2,children:e&&e.map((function(e,t){return Object(x.jsx)(d.a,{item:!0,xs:4,children:Object(x.jsx)(i.a,{children:Object(x.jsxs)(o.a,{children:[Object(x.jsx)(l.a,{color:"textSecondary",gutterBottom:!0,dangerouslySetInnerHTML:{__html:e.title.rendered}}),Object(x.jsx)(l.a,{variant:"body2",component:"p",dangerouslySetInnerHTML:{__html:e.content.rendered}})]})})},t)}))})}function g(){var e=u("https://www.brain2brain.de/RAW-WP/wp-json/wp/v2/hauptspeisen");return Object(x.jsx)(d.a,{container:!0,spacing:2,children:e&&e.map((function(e,t){return Object(x.jsx)(d.a,{item:!0,xs:4,children:Object(x.jsx)(i.a,{children:Object(x.jsxs)(o.a,{children:[Object(x.jsx)(l.a,{color:"textSecondary",gutterBottom:!0,dangerouslySetInnerHTML:{__html:e.title.rendered}}),Object(x.jsx)(l.a,{variant:"body2",component:"p",dangerouslySetInnerHTML:{__html:e.content.rendered}})]})})},t)}))})}function O(){var e=u("https://www.brain2brain.de/RAW-WP/wp-json/wp/v2/nachspeisen");return Object(x.jsx)(d.a,{container:!0,spacing:2,children:e&&e.map((function(e,t){return Object(x.jsx)(d.a,{item:!0,xs:4,children:Object(x.jsx)(i.a,{children:Object(x.jsxs)(o.a,{children:[Object(x.jsx)(l.a,{color:"textSecondary",gutterBottom:!0,dangerouslySetInnerHTML:{__html:e.title.rendered}}),Object(x.jsx)(l.a,{variant:"body2",component:"p",dangerouslySetInnerHTML:{__html:e.content.rendered}})]})})},t)}))})}var f=n(74),v=n(75),w=n(73),y=n(16),S=n.p+"static/media/logo.8e152f3d.png",N=n.p+"static/media/logovorspeisen.9a34c902.png",k=n.p+"static/media/logohauptspeisen.7d9078f8.png",_=n.p+"static/media/logonachspeisen.01f5bb6a.png",W=Object(w.a)((function(e){return{root:{flexGrow:1,width:"100%"},farbe:{backgroundColor:"#8ab8c5"},div1:{float:"left",width:"33.33%",padding:"20px",fontFamily:"Source Sans Pro",color:"white"},bild:{width:"40%",height:"40%"},bild2:{width:"50%",height:"50%"}}}));function L(){var e=W();return Object(x.jsx)("div",{className:e.root,children:Object(x.jsx)(f.a,{position:"static",children:Object(x.jsxs)(v.a,{className:e.farbe,children:[Object(x.jsx)(y.b,{className:e.div1,to:"/",children:Object(x.jsx)("img",{src:S,className:"App-logo",alt:"Logo HTWK K\xf6stlichkeiten"})}),Object(x.jsx)(y.b,{className:e.div1,to:"/vorspeisen",children:Object(x.jsx)("img",{src:N,className:e.bild,alt:"Vorspeisenbild"})}),Object(x.jsx)(y.b,{className:e.div1,to:"/hauptspeisen",children:Object(x.jsx)("img",{src:k,className:e.bild2,alt:"Hauptspeisenbild"})}),Object(x.jsx)(y.b,{className:e.div1,to:"/nachspeisen",children:Object(x.jsx)("img",{src:_,className:e.bild,alt:"Nachspeisenbild"})})]})})})}var T=n(4);"serviceWorker"in navigator&&navigator.serviceWorker.register("./service-worker.js").then((function(){console.log("Der Service Worker wurde erfolgreich registriert")})).catch((function(e){console.log("Die Registrierung des Service Workers ist fehlgeschlagen mit dem folgenden Fehler: "+e)}));var H=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsxs)(y.a,{children:[Object(x.jsxs)("header",{className:"App-header",children:[Object(x.jsx)(L,{}),Object(x.jsx)("p",{className:"Nachricht",children:"Viel Freude beim Durchst\xf6bern unserer Rezepte!"})]}),Object(x.jsx)("main",{}),Object(x.jsxs)(T.c,{children:[Object(x.jsx)(T.a,{path:"/vorspeisen",component:m}),Object(x.jsx)(T.a,{path:"/hauptspeisen",component:g}),Object(x.jsx)(T.a,{path:"/nachspeisen",component:O})]})]})})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,77)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))};a.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(H,{})}),document.getElementById("root")),I()}},[[52,1,2]]]);
//# sourceMappingURL=main.905e74ee.chunk.js.map