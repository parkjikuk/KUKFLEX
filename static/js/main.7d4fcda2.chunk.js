(this.webpackJsonpmovieapp=this.webpackJsonpmovieapp||[]).push([[0],{18:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(11),i=c.n(a),s=c(6),j=c(1),o=c(5),u=c.n(o),b=c(7),l=c(4),d=c(9),m=c(2);var O=function(){var e=Object(j.g)().id,t=Object(d.useState)(!0),c=Object(l.a)(t,2),r=c[0],a=c[1],i=Object(d.useState)([]),s=Object(l.a)(i,2),o=s[0],O=s[1],h=Object(n.useCallback)(Object(b.a)(u.a.mark((function t(){var c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://yts.mx/api/v2/movie_details.json?movie_id=".concat(e));case 2:return t.next=4,t.sent.json();case 4:c=t.sent,O(c.data.movie),a(!1),console.log(c);case 8:case"end":return t.stop()}}),t)}))),[e]);return Object(d.useEffect)((function(){h()}),[h]),Object(m.jsx)("div",{children:r?Object(m.jsx)("h1",{children:"Loading..."}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("img",{src:o.large_cover_image,alt:o.title}),Object(m.jsx)("h1",{children:o.title}),Object(m.jsx)("h2",{children:"year: ".concat(o.year)}),Object(m.jsx)("h2",{children:"rating: ".concat(o.rating)}),Object(m.jsx)("p",{children:o.description_full})]})})};var h=function(e){var t=e.movieImg,c=e.title,n=e.summary,r=e.genres,a=e.id;return Object(m.jsxs)("div",{children:[Object(m.jsx)("img",{src:t,alt:c}),Object(m.jsx)("h2",{children:Object(m.jsx)(s.b,{to:"/movie/".concat(a),children:c})}),Object(m.jsx)("p",{children:n.length>235?"".concat(n.slice(0,235),"..."):n}),Object(m.jsx)("ul",{children:r.map((function(e){return Object(m.jsx)("li",{children:e},e)}))})]})};var x=function(){var e=Object(n.useState)(!0),t=Object(l.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)([]),i=Object(l.a)(a,2),s=i[0],j=i[1],o=function(){var e=Object(b.a)(u.a.mark((function e(){var t,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,j(c.data.movies),r(!1),console.log(c);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){o()}),[]),Object(m.jsx)("div",{children:c?Object(m.jsx)("h1",{children:"Loading"}):Object(m.jsx)("div",{children:s.map((function(e){return Object(m.jsx)(h,{id:e.id,movieImg:e.medium_cover_image,title:e.title,summary:e.summary,genres:e.genres},e.id)}))})})};var v=function(){return Object(m.jsx)(s.a,{basename:"/movie-react-app",children:Object(m.jsxs)(j.c,{children:[Object(m.jsx)(j.a,{path:"/movie/:id",element:Object(m.jsx)(O,{})}),Object(m.jsx)(j.a,{path:"/movie-react-app/",element:Object(m.jsx)(x,{})})]})})};i.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(v,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.7d4fcda2.chunk.js.map