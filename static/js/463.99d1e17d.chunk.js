"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[463],{497:function(e,t,r){r.d(t,{Ck:function(){return f},O_:function(){return o},Rh:function(){return l},Yh:function(){return p},zi:function(){return u}});var n=r(861),a=r(757),c=r.n(a),s=r(243);s.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="6d0bdb48df496425228df907b70af28f",u=function(){var e=(0,n.Z)(c().mark((function e(t,r){var n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("/search/movie?query=".concat(t,"&api_key=").concat(i));case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("/trending/movie/day?api_key=".concat(i));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("/movie/".concat(t,"?api_key=").concat(i));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("/movie/".concat(t,"/credits?api_key=").concat(i));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("/movie/".concat(t,"/reviews?api_key=").concat(i));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},854:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(101),a=r(184);function c(){return(0,a.jsx)(n.p2,{display:"flex",justifyContent:"center",alignItems:"center",height:"80",width:"80",color:"#4fa94d",ariaLabel:"circles-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}},743:function(e,t,r){r.d(t,{Z:function(){return p}});var n="MoviesList_movieslist__vOIs9",a=r(87),c="MoviesItem_movieGalleryItem__L558b",s="MoviesItem_imgWraper__WBHyw",i="MoviesItem_movieGalleryItemImage__ItP1c",u="MoviesItem_linkDetails__KOogq",o=r(689),l=r(184);function f(e){var t=e.image,r=e.title,n=e.rating,f=e.id,p=(0,o.TH)();return(0,l.jsxs)("li",{className:c,children:[(0,l.jsx)("div",{className:s,children:(0,l.jsx)("img",{src:t?"".concat("https://image.tmdb.org/t/p/w500").concat(t):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:r,className:i})}),(0,l.jsx)("h2",{children:r}),(0,l.jsxs)("h3",{children:["\u0420\u0435\u0439\u0442\u0438\u043d\u0433 \u2606 ",n]}),(0,l.jsx)(a.Link,{className:u,to:f.toString(),state:p,children:"Details"})]})}function p(e){var t=e.movies;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{children:(0,l.jsx)("ul",{className:n,children:t.map((function(e){return(0,l.jsx)(f,{id:e.id,image:e.poster_path,title:e.title,rating:e.vote_average},e.id)}))})})})}},475:function(e,t,r){r.r(t),r.d(t,{default:function(){return _}});var n=r(861),a=r(439),c=r(757),s=r.n(c),i=r(791),u=r(854),o=r(743),l=r(497),f="Search_searchform__E5En1",p="Search_searchbar__uR8cQ",h="Search_searchformbutton__5mLfq",v="Search_searchforminput__GD4dT",d=r(184);function m(e){var t=e.handlySetSearchQuery,r=(0,i.useState)(""),n=(0,a.Z)(r,2),c=n[0],s=n[1];return(0,d.jsx)("div",{className:p,children:(0,d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(c)},className:f,children:[(0,d.jsx)("button",{type:"submit",className:h,children:"Search"}),(0,d.jsx)("input",{className:v,type:"text",onChange:function(e){var t=e.target.value;s(t)},placeholder:"Search movies",value:c})]})})}var x=r(87);function _(){var e=(0,i.useState)(!1),t=(0,a.Z)(e,2),r=t[0],c=t[1],f=(0,i.useState)(""),p=(0,a.Z)(f,2),h=p[0],v=p[1],_=(0,i.useState)([]),y=(0,a.Z)(_,2),g=y[0],j=y[1],b=(0,x.useSearchParams)(),w=(0,a.Z)(b,2),k=w[0],Z=w[1],S=k.get("query");(0,i.useEffect)((function(){if(S){var e=function(){var e=(0,n.Z)(s().mark((function e(){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c(!0),e.next=4,(0,l.zi)(S);case 4:t=e.sent,r=t.results,j(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),v(e.t0.response.data.status_message);case 12:return e.prev=12,c(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e(),j([])}}),[S]);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{children:(0,d.jsx)(m,{handlySetSearchQuery:function(e){Z({query:e})}})}),(0,d.jsx)("div",{children:r&&(0,d.jsx)(u.Z,{})}),h&&(0,d.jsx)("h2",{children:h}),(0,d.jsx)("div",{children:(0,d.jsx)(o.Z,{movies:g})})]})}}}]);
//# sourceMappingURL=463.99d1e17d.chunk.js.map