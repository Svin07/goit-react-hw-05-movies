"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[936],{497:function(e,t,n){n.d(t,{Ck:function(){return f},O_:function(){return o},Rh:function(){return p},Yh:function(){return l},zi:function(){return u}});var r=n(861),a=n(757),c=n.n(a),i=n(243);i.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="6d0bdb48df496425228df907b70af28f",u=function(){var e=(0,r.Z)(c().mark((function e(t,n){var r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.Z)("/search/movie?query=".concat(t,"&api_key=").concat(s));case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.Z)("/trending/movie/day?api_key=".concat(s));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.Z)("/movie/".concat(t,"?api_key=").concat(s));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.Z)("/movie/".concat(t,"/credits?api_key=").concat(s));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.Z)("/movie/".concat(t,"/reviews?api_key=").concat(s));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},854:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(101),a=n(184);function c(){return(0,a.jsx)(r.p2,{display:"flex",justifyContent:"center",alignItems:"center",height:"80",width:"80",color:"#4fa94d",ariaLabel:"circles-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}},743:function(e,t,n){n.d(t,{Z:function(){return l}});var r="MoviesList_movieslist__vOIs9",a=n(87),c="MoviesItem_movieGalleryItem__L558b",i="MoviesItem_imgWraper__WBHyw",s="MoviesItem_movieGalleryItemImage__ItP1c",u="MoviesItem_linkDetails__KOogq",o=n(689),p=n(184);function f(e){var t=e.image,n=e.title,r=e.rating,f=e.id,l=(0,o.TH)();return(0,p.jsxs)("li",{className:c,children:[(0,p.jsx)("div",{className:i,children:(0,p.jsx)("img",{src:t?"".concat("https://image.tmdb.org/t/p/w500").concat(t):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:n,className:s})}),(0,p.jsx)("h2",{children:n}),(0,p.jsxs)("h3",{children:["\u0420\u0435\u0439\u0442\u0438\u043d\u0433 \u2606 ",r]}),(0,p.jsx)(a.Link,{className:u,to:"/movies/".concat(f),state:l,children:"Details"})]})}function l(e){var t=e.movies;return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("div",{children:(0,p.jsx)("ul",{className:r,children:t.map((function(e){return(0,p.jsx)(f,{id:e.id,image:e.poster_path,title:e.title,rating:e.vote_average},e.id)}))})})})}},936:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(861),a=n(439),c=n(757),i=n.n(c),s=n(791),u=n(854),o=n(497),p=n(743),f="Home_pageBc__fH8+0",l=n(184),v=function(){var e=(0,s.useState)(!1),t=(0,a.Z)(e,2),n=t[0],c=t[1],v=(0,s.useState)(""),d=(0,a.Z)(v,2),m=d[0],h=d[1],x=(0,s.useState)([]),_=(0,a.Z)(x,2),g=_[0],w=_[1];return(0,s.useEffect)((function(){var e=function(){var e=(0,r.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c(!0),e.next=4,(0,o.O_)();case 4:t=e.sent,n=t.results,w(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),h(e.t0.response.data.status_message);case 12:return e.prev=12,c(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e(),w([])}),[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{children:n&&(0,l.jsx)(u.Z,{})}),m&&(0,l.jsx)("h2",{children:m}),(0,l.jsx)("div",{className:f,children:(0,l.jsx)(p.Z,{movies:g})})]})}}}]);
//# sourceMappingURL=936.d56a7424.chunk.js.map