(this.webpackJsonpmovieapp=this.webpackJsonpmovieapp||[]).push([[0],{18:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),i=c(11),s=c.n(i),a=c(6),j=c(1),o=c(5),u=c.n(o),b=c(7),l=c(4),d=c(9),O=c(2);var m=function(){var e=Object(j.g)().id,t=Object(d.useState)(!0),c=Object(l.a)(t,2),r=c[0],i=c[1],s=Object(d.useState)([]),a=Object(l.a)(s,2),o=a[0],m=a[1],h=Object(n.useCallback)(Object(b.a)(u.a.mark((function t(){var c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://yts.mx/api/v2/movie_details.json?movie_id=".concat(e));case 2:return t.next=4,t.sent.json();case 4:c=t.sent,m(c.data.movie),i(!1),console.log(c);case 8:case"end":return t.stop()}}),t)}))),[e]);return Object(d.useEffect)((function(){h()}),[h]),Object(O.jsx)("div",{children:r?Object(O.jsx)("h1",{children:"Loading..."}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("img",{src:o.large_cover_image,alt:o.title}),Object(O.jsx)("h1",{children:o.title}),Object(O.jsx)("h2",{children:"year: ".concat(o.year)}),Object(O.jsx)("h2",{children:"rating: ".concat(o.rating)}),Object(O.jsx)("p",{children:o.description_full})]})})};var h=function(e){var t=e.movieImg,c=e.title,n=e.summary,r=e.genres,i=e.id;return Object(O.jsxs)("div",{children:[Object(O.jsx)("img",{src:t,alt:c}),Object(O.jsx)("h2",{children:Object(O.jsx)(a.b,{to:"/movie/".concat(i),children:c})}),Object(O.jsx)("p",{children:n.length>235?"".concat(n.slice(0,235),"..."):n}),Object(O.jsx)("ul",{children:r.map((function(e){return Object(O.jsx)("li",{children:e},e)}))})]})};var x=function(){var e=Object(n.useState)(!0),t=Object(l.a)(e,2),c=t[0],r=t[1],i=Object(n.useState)([]),s=Object(l.a)(i,2),a=s[0],j=s[1],o=function(){var e=Object(b.a)(u.a.mark((function e(){var t,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,j(c.data.movies),r(!1),console.log(c);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){o()}),[]),Object(O.jsx)("div",{children:c?Object(O.jsx)("h1",{children:"Loading"}):Object(O.jsx)("div",{children:a.map((function(e){return Object(O.jsx)(h,{id:e.id,movieImg:e.medium_cover_image,title:e.title,summary:e.summary,genres:e.genres},e.id)}))})})};var v=function(){return Object(O.jsx)(a.a,{children:Object(O.jsxs)(j.c,{children:[Object(O.jsx)(j.a,{path:"/movie/:id",element:Object(O.jsx)(m,{})}),Object(O.jsx)(j.a,{path:"/",element:Object(O.jsx)(x,{})})]})})};s.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(v,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.c3e1ea39.chunk.js.map