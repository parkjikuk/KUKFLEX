(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports={background:"MovieDetail_background__2xKHb",show:"MovieDetail_show__1Xy1H",shortView:"MovieDetail_shortView__2SJBI",shortView_Img:"MovieDetail_shortView_Img__GvJ6L",shortView_letters:"MovieDetail_shortView_letters__2Vi4t",descript:"MovieDetail_descript__1SvSM",Detail_bg:"MovieDetail_Detail_bg__F3r_u",movie_url:"MovieDetail_movie_url__1zPnk"}},11:function(e,t,a){e.exports={container:"Nav_container__2K4cI",title:"Nav_title__2fwVF",movie_title:"Nav_movie_title__1jSQF",logo:"Nav_logo__2JhIk",menuIcon:"Nav_menuIcon__23d6k",openMenu:"Nav_openMenu__Z-adc",closeMenu:"Nav_closeMenu__1zHhx",menuItem:"Nav_menuItem__3fPgf",menu:"Nav_menu__26d5s"}},14:function(e,t,a){e.exports={movie:"MovieGroup_movie__3wi7u",movie_img:"MovieGroup_movie_img__3BgHU",movie_title:"MovieGroup_movie_title__IMhmo",movie_year:"MovieGroup_movie_year__3CVHw",movie_genres:"MovieGroup_movie_genres__2iiWU",movie_info:"MovieGroup_movie_info__2WZF0"}},16:function(e,t,a){e.exports={container:"Home_container__1V3R2",slideBox:"Home_slideBox__2sIgF",slideTitle:"Home_slideTitle__1Y2Se",titleIcon:"Home_titleIcon__1W2x0"}},18:function(e,t,a){e.exports={container:"Group_container__2GfuS",movies:"Group_movies__2Tcg_",pagination:"Group_pagination__1UzmG",focusing:"Group_focusing__24ioY"}},24:function(e,t,a){e.exports={load:"Load_load__17Qq9"}},25:function(e,t,a){e.exports=a(46)},44:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),c=a(19),l=a.n(c),r=a(5),o=a(0),m=a(4),s=a.n(m),u=a(9),_=a(2),v=a(13),d=a(3),g=a.n(d),E=a(10),p=a.n(E);function f(e){var t=e.background_image_original,a=e.coverImg,n=e.rating,c=e.runtime,l=e.description_full,r=e.title,o=e.url;return i.a.createElement("div",{className:p.a.movie},i.a.createElement("div",{className:p.a.background},i.a.createElement("img",{className:p.a.Detail_bg,src:t,alt:""})),i.a.createElement("div",{className:p.a.show},i.a.createElement("div",{className:p.a.shortView},i.a.createElement("div",{className:p.a.shortView_Img},i.a.createElement("img",{src:a,alt:r})),i.a.createElement("div",{className:p.a.shortView_letters},i.a.createElement("h3",null,r),i.a.createElement("p",null,n?"rating: ".concat(n," / 10"):null),i.a.createElement("p",null,c?"runtime: ".concat(c," (min)"):null),i.a.createElement("h3",{className:p.a.movie_url},i.a.createElement("a",{href:o,target:"_blank",rel:"noreferrer"},"SEE THE MOVIE")))),l?i.a.createElement("div",{className:p.a.descript},i.a.createElement("p",null,l)):null))}f.prototypes={background_image_original:g.a.string.isRequired,rating:g.a.number,runtime:g.a.number,coverImg:g.a.string.isRequired,title:g.a.string.isRequired,description_full:g.a.string,genres:g.a.arrayOf(g.a.string).isRequired};var b=f,h=a(24),N=a.n(h);var j=function(){return i.a.createElement("div",{className:N.a.load},i.a.createElement("h1",null,"Loading ..."))};var O=function(){var e=Object(o.g)().id,t=Object(v.useState)(!0),a=Object(_.a)(t,2),c=a[0],l=a[1],r=Object(v.useState)([]),m=Object(_.a)(r,2),d=m[0],g=m[1],E=Object(n.useCallback)(Object(u.a)(s.a.mark(function t(){var a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://yts.mx/api/v2/movie_details.json?movie_id=".concat(e));case 2:return t.next=4,t.sent.json();case 4:a=t.sent,g(a.data.movie),l(!1);case 7:case"end":return t.stop()}},t)})),[e]);return Object(v.useEffect)(function(){E()},[E]),i.a.createElement("div",null,c?i.a.createElement(j,null):i.a.createElement("div",null,i.a.createElement(b,{background_image_original:d.background_image_original,key:d.id,id:d.id,coverImg:d.medium_cover_image,rating:d.rating,runtime:d.runtime,description_full:d.description_full,title:d.title_long,url:d.url})))},k=a(16),y=a.n(k),w=a(8),x=a.n(w),S=a(15),I=a(12);var M=function(e){var t=e.ytsApi,a=Object(n.useState)([]),c=Object(_.a)(a,2),l=c[0],o=c[1],m=Object(n.useState)(0),v=Object(_.a)(m,2),d=v[0],g=v[1],E=Object(n.useCallback)(Object(u.a)(s.a.mark(function e(){var a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return e.next=4,e.sent.json();case 4:a=e.sent,o(a.data.movies);case 6:case"end":return e.stop()}},e)})),[t]);return Object(n.useEffect)(function(){E()},[E]),i.a.createElement("div",{className:x.a.container},i.a.createElement("div",{className:x.a.slide_show},i.a.createElement("div",{className:x.a.slides,style:{transform:"translateX(".concat(d,"px)")}},l.map(function(e){if(null!==e.medium_cover_image)return i.a.createElement("div",{className:x.a.movie,key:e.id},i.a.createElement(r.b,{to:"/movie/".concat(e.id)},i.a.createElement("img",{src:e.medium_cover_image,alt:e.title})),i.a.createElement("div",{className:x.a.letters},i.a.createElement("div",{className:x.a.title},i.a.createElement("div",null,i.a.createElement("h3",{className:x.a.movieName},i.a.createElement(r.b,{to:"/movie/".concat(e.id)},e.title.length>30?"".concat(e.title.slice(0,30),"..."):e.title)))),i.a.createElement("span",null,e.rating?"rating: ".concat(e.rating," / 10"):null),i.a.createElement("p",null,e.runtime?"runtime: ".concat(e.runtime," (min)"):null)))}))),i.a.createElement("div",{className:x.a.controller},i.a.createElement("button",{className:x.a.left,onClick:function(){d>=0||g(function(e){return e+460})}},i.a.createElement(S.a,{icon:I.b})),i.a.createElement("button",{className:x.a.right,onClick:function(){d<=-1380||g(function(e){return e-460})}},i.a.createElement(S.a,{icon:I.c}))))},F=[{title:"High Rating",path:"minimum_rating=8"},{title:"Romance",path:"genre=romance"},{title:"Thriller",path:"genre=thriller"},{title:"Animation",path:"genre=animation"}];var H=function(){var e=Object(n.useState)(!0),t=Object(_.a)(e,2),a=t[0],c=t[1],l=Object(n.useCallback)(Object(u.a)(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/list_movies.json?limit=10");case 2:return e.next=4,e.sent.json();case 4:c(!1);case 5:case"end":return e.stop()}},e)})),[]);return Object(n.useEffect)(function(){c(!0),l()},[]),i.a.createElement("div",{className:y.a.container},a?i.a.createElement(j,null):F.map(function(e){return i.a.createElement("div",{className:y.a.slideBox,key:e.title},i.a.createElement("div",{className:y.a.slideTitle},i.a.createElement(r.b,{to:"/page/".concat(e.path,"/1")},i.a.createElement("div",{className:y.a.titleIcon},i.a.createElement(S.a,{icon:I.d})),i.a.createElement("div",null,i.a.createElement("span",null,e.title)))),i.a.createElement(M,{ytsApi:"https://yts.mx/api/v2/list_movies.json?limit=10&".concat(e.path,"&sort_by=year")}))}))},V=a(14),C=a.n(V);var D=function(e){var t=e.id,a=e.coverImg,n=e.genres,c=e.summary,l=e.title,o=e.year;return i.a.createElement(r.b,{to:"/movie/".concat(t)},i.a.createElement("div",{className:C.a.movie},i.a.createElement("img",{src:a,className:C.a.movie_img,alt:l}),i.a.createElement("div",null,i.a.createElement("h2",{className:C.a.movie_title},l.length>35?"".concat(l.slice(0,35)):l),i.a.createElement("div",{className:C.a.movie_info},i.a.createElement("h3",{className:C.a.movie_year},o),i.a.createElement("p",{className:C.a.movie_summary},c?c.length>180?"".concat(c.slice(0,180),"..."):c:null),i.a.createElement("ul",{className:C.a.movie_genres},n.map(function(e){return i.a.createElement("li",{key:e},e)}))))))},G=a(7),R=Object(G.b)({key:"listPageReLoading",default:!1}),T=Object(G.b)({key:"focusNav",default:""}),Y=a(18),z=a.n(Y),B=[1,2,3,4,5,6,7,8,9,10];var K=function(){var e=Object(o.g)(),t=e.page,a=e.group,c=Object(v.useState)(!0),l=Object(_.a)(c,2),m=l[0],d=l[1],g=Object(v.useState)([]),E=Object(_.a)(g,2),p=E[0],f=E[1],b=Object(G.c)(R),h=Object(_.a)(b,2),N=(h[0],h[1]),O=Object(G.d)(T),k=Object(n.useCallback)(Object(u.a)(s.a.mark(function e(){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/list_movies.json?page=".concat(t,"&").concat(a,"&sort_by=rating"));case 2:return e.next=4,e.sent.json();case 4:n=e.sent,f(n.data.movies),d(!1),console.log(p);case 8:case"end":return e.stop()}},e)})),[a,t]);return Object(v.useEffect)(function(){k(),O(a),d(!0)},[k]),i.a.createElement("div",{className:z.a.container},m?i.a.createElement(j,null):i.a.createElement("div",{className:z.a.movies},p.map(function(e){return i.a.createElement(D,{key:e.id,id:e.id,coverImg:e.medium_cover_image,summary:e.summary,title:e.title,genres:e.genres,year:e.year})})),i.a.createElement("ul",{className:z.a.pagination},m?null:B.map(function(e){return i.a.createElement("li",{key:e},i.a.createElement(r.b,{to:"/page/".concat(a,"/").concat(e),onClick:function(){return N(!0)},className:e==t?z.a.focusing:null},e))})))},L=a(11),q=a.n(L);var J=function(){var e=Object(G.d)(R),t=Object(G.c)(T),a=Object(_.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(!1),m=Object(_.a)(o,2),s=m[0],u=m[1],v=function(){e(!0),u(!1),console.log(c)};return i.a.createElement("div",{className:q.a.container},i.a.createElement("div",{className:q.a.logo},i.a.createElement(r.b,{to:"/",onClick:function(){return l("")}},"KUKFLEX")),i.a.createElement("div",{className:q.a.title},i.a.createElement("ul",{className:q.a.movie_title},F.map(function(e){var t=e.title,a=e.path;return i.a.createElement("li",{key:t},i.a.createElement(r.b,{to:"/page/".concat(a,"/1"),onClick:c!==a?v:null,style:c!==a?null:{color:"#00FFFF"}},t))})),i.a.createElement("div",{className:q.a.menu},i.a.createElement("button",{className:q.a.menuIcon,onClick:function(){return u(function(e){return!e}),void console.log(s)}},i.a.createElement(S.a,{icon:I.a,size:"2x"})),i.a.createElement("ul",{className:"".concat(s?q.a.openMenu:q.a.closeMenu)},F.map(function(e){var t=e.title,a=e.path;return i.a.createElement("li",{className:q.a.menuItem,key:t},i.a.createElement(r.b,{to:"/page/".concat(a,"/1"),onClick:c!==a?v:null,style:c!==a?null:{color:"#00FFFF"}},t))})))))};var U=function(){return i.a.createElement(G.a,null,i.a.createElement(r.a,{basename:"/KUKFLEX"},i.a.createElement(J,null),i.a.createElement(o.c,null,i.a.createElement(o.a,{path:"/",element:i.a.createElement(H,null)}),i.a.createElement(o.a,{path:"/page/:group/:page",element:i.a.createElement(K,null)}),i.a.createElement(o.a,{path:"/movie/:id",element:i.a.createElement(O,null)}))))};a(44);l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(U,null)),document.getElementById("root"))},8:function(e,t,a){e.exports={container:"Slide_container__1g4H7",slide_show:"Slide_slide_show__OeOYT",slides:"Slide_slides__WEz5X",controller:"Slide_controller__1nSFY",left:"Slide_left__NCWj-",right:"Slide_right__1kdDH",movie:"Slide_movie__31YNF",movieName:"Slide_movieName__20DHY",letters:"Slide_letters__3Zch0",title:"Slide_title__z63Yp"}}},[[25,2,1]]]);
//# sourceMappingURL=main.97a65087.chunk.js.map