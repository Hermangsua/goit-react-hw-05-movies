"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[105],{105:function(t,n,e){e.r(n),e.d(n,{default:function(){return v}});var r,a,c=e(168),u=e(439),i=e(791),s=e(689),o=e(444),p=e(184),f=function(t){var n=t.name,e=t.character,r=t.photo,a="".concat("https://image.tmdb.org/t/p/w200/").concat(r);return(0,p.jsxs)(d,{children:[(0,p.jsx)("img",{src:a,alt:"Actor ".concat(n)}),(0,p.jsx)("p",{children:n}),(0,p.jsx)("p",{children:e})]})},d=o.ZP.div(r||(r=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  width: 250px;\n"]))),h=e(86),v=function(){var t=(0,i.useState)([]),n=(0,u.Z)(t,2),e=n[0],r=n[1],a=(0,s.UO)().movieId;return(0,i.useEffect)((function(){(0,h.sk)(a).then((function(t){return r(t)}))}),[a]),(0,p.jsx)(l,{children:e.length>0?e.map((function(t){var n=t.credit_id,e=t.name,r=t.character,a=t.profile_path;return(0,p.jsx)(f,{name:e,character:r,photo:a},n)})):(0,p.jsx)("div",{children:"We have no information about cast in this movie"})})},l=o.ZP.div(a||(a=(0,c.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10px;\n"])))},86:function(t,n,e){e.d(n,{Df:function(){return i},QS:function(){return f},Xm:function(){return p},sk:function(){return o},vq:function(){return s}});var r=e(861),a=e(757),c=e.n(a),u=e(912);u.Z.defaults.baseURL="https://api.themoviedb.org/3",u.Z.defaults.params={api_key:"88a9b9553cef5a4da6c5262b0ee8a891"};var i=function(){var t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/trending/movie/week");case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(n));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(n,"/credits"));case 2:return e=t.sent,t.abrupt("return",e.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(n,"/reviews"));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/search/movie",{params:{query:n}});case 2:return e=t.sent,console.log(e.data.results),t.abrupt("return",e.data.results);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=105.295a4797.chunk.js.map