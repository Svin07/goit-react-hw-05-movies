"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{497:function(e,t,r){r.d(t,{Ck:function(){return f},O_:function(){return o},Rh:function(){return p},Yh:function(){return l},zi:function(){return u}});var n=r(861),a=r(757),i=r.n(a),c=r(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="6d0bdb48df496425228df907b70af28f",u=function(){var e=(0,n.Z)(i().mark((function e(t,r){var n,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.Z)("/search/movie?query=".concat(t,"&api_key=").concat(s));case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(i().mark((function e(){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.Z)("/trending/movie/day?api_key=".concat(s));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.Z)("/movie/".concat(t,"?api_key=").concat(s));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.Z)("/movie/".concat(t,"/credits?api_key=").concat(s));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.Z)("/movie/".concat(t,"/reviews?api_key=").concat(s));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},854:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(101),a=r(184);function i(){return(0,a.jsx)(n.p2,{display:"flex",justifyContent:"center",alignItems:"center",height:"80",width:"80",color:"#4fa94d",ariaLabel:"circles-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}},743:function(e,t,r){r.d(t,{Z:function(){return l}});var n="MoviesList_movieslist__vOIs9",a=r(87),i="MoviesItem_movieGalleryItem__L558b",c="MoviesItem_imgWraper__WBHyw",s="MoviesItem_movieGalleryItemImage__ItP1c",u="MoviesItem_linkDetails__KOogq",o=r(689),p=r(184);function f(e){var t=e.image,r=e.title,n=e.rating,f=e.id,l=(0,o.TH)();return(0,p.jsxs)("li",{className:i,children:[(0,p.jsx)("div",{className:c,children:(0,p.jsx)("img",{src:t?"".concat("https://image.tmdb.org/t/p/w500").concat(t):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:r,className:s})}),(0,p.jsx)("h2",{children:r}),(0,p.jsxs)("h3",{children:["\u0420\u0435\u0439\u0442\u0438\u043d\u0433 \u2606 ",n]}),(0,p.jsx)(a.Link,{className:u,to:f.toString(),state:l,children:"Details"})]})}function l(e){var t=e.movies;return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("div",{children:(0,p.jsx)("ul",{className:n,children:t.map((function(e){return(0,p.jsx)(f,{id:e.id,image:e.poster_path,title:e.title,rating:e.vote_average},e.id)}))})})})}},544:function(e,t,r){r.r(t);var n=r(861),a=r(439),i=r(757),c=r.n(i),s=r(791),u=r(854),o=r(497),p=r(743),f=r(184);t.default=function(){var e=(0,s.useState)(!1),t=(0,a.Z)(e,2),r=t[0],i=t[1],l=(0,s.useState)(""),v=(0,a.Z)(l,2),d=v[0],m=v[1],h=(0,s.useState)([]),x=(0,a.Z)(h,2),_=x[0],g=x[1],w=!0;return(0,s.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i(!0),e.next=4,(0,o.O_)(w);case 4:t=e.sent,r=t.results,g(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),m(e.t0.response.data.status_message);case 12:return e.prev=12,i(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e(),g([])}),[w]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{children:r&&(0,f.jsx)(u.Z,{})}),d&&(0,f.jsx)("h2",{children:d}),(0,f.jsx)("div",{children:(0,f.jsx)(p.Z,{movies:_})})]})}}}]);
//# sourceMappingURL=544.5b4f5a96.chunk.js.map