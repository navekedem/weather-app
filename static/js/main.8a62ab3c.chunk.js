(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{36:function(e,t,c){},37:function(e,t,c){},39:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},74:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),r=c(10),i=c.n(r),s=(c(36),c(7)),o=(c(37),c(1)),l=function(){return Object(o.jsxs)("header",{className:"app-header flex flex-row justify-between bg-gray-500 shadow-md",children:[Object(o.jsx)("div",{className:"app-header-title",children:Object(o.jsx)("h1",{children:"Abra Weather App"})}),Object(o.jsxs)("div",{className:"app-header-btns inline-flex",children:[Object(o.jsx)(s.b,{to:"/",className:"bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l",children:"Home"}),Object(o.jsx)(s.b,{to:"/favourites",className:"bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r",children:"Favourites"})]})]})},d=(c(39),c(2)),u=c(4),j=c(12),b=c.n(j),h=c(17),x=c(27),f=c.n(x),m=(c(64),function(e){var t=e.apiKey,c=/^[a-zA-Z\s]*$/g,n=Object(a.useState)(""),r=Object(u.a)(n,2),i=r[0],s=r[1],l=Object(a.useState)([]),d=Object(u.a)(l,2),j=d[0],x=d[1],m=Object(a.useState)(""),O=Object(u.a)(m,2),v=O[0],y=O[1],p=Object(a.useRef)(null);return Object(o.jsx)("div",{className:"autocomplete-wrapper",children:Object(o.jsxs)("div",{className:"autocomplete-wrapper-item",children:[Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 search-icon",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),Object(o.jsx)(f.a,{getItemValue:function(e){return e.LocalizedName},items:j,renderMenu:function(e){return Object(o.jsx)("div",{className:"dropdown",children:e})},renderInput:function(e){return Object(o.jsx)("input",Object(h.a)(Object(h.a)({},e),{},{placeholder:"Search City",className:"autocomplete-input"}))},renderItem:function(e,t){return Object(o.jsx)("div",{className:"option",style:{background:t?"lightgray":"white"},children:e.LocalizedName},e.Key)},value:i,onChange:function(e){var a;!c.test(e.target.value)&&e.target.value.length>=0?(y("Only english letters please"),null===(a=p.current)||void 0===a||a.focus()):(y(""),e.target.value.length>3&&b.a.get("http://dataservice.accuweather.com/locations/v1/cities/autocomplete/?apikey="+t+"&q="+e.target.value).then((function(e){if(e.data.length>0){var t=e.data;x(t)}})).catch((function(e){var t;y("No data was found.. \n Try to search something else"),null===(t=p.current)||void 0===t||t.focus()})));s(e.target.value)},onSelect:function(t,c){return s(c.LocalizedName),e.setSelectedCity(c.Key,c.LocalizedName),c.LocalizedName}}),""!==v?Object(o.jsx)("div",{className:"text-red-700 px-4 py-3 relative error",ref:p,tabIndex:-1,role:"alert",children:Object(o.jsxs)("strong",{className:"font-bold",children:["*",v]})}):""]})})}),O=(c(65),function(e){return Object(o.jsxs)("div",{className:"day-card rounded-md shadow-lg border-4 border-light-blue-500 border-opacity-50 text-center","data-aos":"fade-right","data-aos-delay":e.indexAnimation+"50",children:[Object(o.jsx)("div",{className:"day-card-title",children:Object(o.jsx)("h3",{children:e.title})}),Object(o.jsxs)("div",{className:"day-card-desc",children:[Object(o.jsx)("span",{className:"font-bold",children:"Max"}),": ",e.temperature.Maximum.Value," \u2103 ",Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"font-bold",children:"Min"}),": ",e.temperature.Minimum.Value," \u2103"]})]})}),v=c.p+"static/media/city.61acb0f3.png",y=c(8),p=(c(69),function(){return Object(o.jsxs)("div",{className:"background",children:[Object(o.jsx)("svg",{className:"clouds cloud1",xmlns:"http://www.w3.org/2000/svg",version:"1.1",x:"0",y:"0",width:"512",height:"512",viewBox:"0 0 512 512",enableBackground:"new 0 0 512 512",children:Object(o.jsx)("path",{id:"cloud-icon",d:"M406.1 227.63c-8.23-103.65-144.71-137.8-200.49-49.05 -36.18-20.46-82.33 3.61-85.22 45.9C80.73 229.34 50 263.12 50 304.1c0 44.32 35.93 80.25 80.25 80.25h251.51c44.32 0 80.25-35.93 80.25-80.25C462 268.28 438.52 237.94 406.1 227.63z"})}),Object(o.jsx)("svg",{className:"clouds cloud2",xmlns:"http://www.w3.org/2000/svg",version:"1.1",x:"0",y:"0",width:"512",height:"512",viewBox:"0 0 512 512",enableBackground:"new 0 0 512 512",children:Object(o.jsx)("path",{id:"cloud-icon",d:"M406.1 227.63c-8.23-103.65-144.71-137.8-200.49-49.05 -36.18-20.46-82.33 3.61-85.22 45.9C80.73 229.34 50 263.12 50 304.1c0 44.32 35.93 80.25 80.25 80.25h251.51c44.32 0 80.25-35.93 80.25-80.25C462 268.28 438.52 237.94 406.1 227.63z"})})]})}),g=(c(70),"city-container-favourites-btn bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"),w=function(){var e="aGG8RdZC65ChyVHEgjdj1bpypGl4NElo",t="215854",c=Object(d.e)().state,n=Object(y.c)((function(e){return e})),r=c,i=Object(y.b)(),s=Object(a.useState)(),l=Object(u.a)(s,2),j=l[0],h=l[1],x=Object(a.useState)(!1),f=Object(u.a)(x,2),w=f[0],N=f[1],k=Object(a.useState)([]),C=Object(u.a)(k,2),A=C[0],F=C[1],L=Object(a.useState)(""),S=Object(u.a)(L,2),T=S[0],M=S[1];Object(a.useEffect)((function(){r?(h(r.city),N(!0),E(r.city.cityKey,r.city.cityName,!1)):E("","Tel Aviv")}),[]);var E=function(c,a){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=t;""!==c&&(r=c),n&&K(c,a),b.a.get("http://dataservice.accuweather.com/forecasts/v1/daily/5day/"+r+"?apikey="+e+"&metric=true").then((function(e){if(e.data){var t=e.data.DailyForecasts;F(t)}})).catch((function(e){M("No Data About 5 day forecasts please try different locations")}))},z=function(e){var t=j;t&&(t.favourite=e,N(e),h(t))},K=function(c,a){var r=t;""!==c&&(r=c),b.a.get("http://dataservice.accuweather.com/currentconditions/v1/"+r+"?apikey="+e).then((function(e){if(e.data){var t=function(e){return!!n.find((function(t){return t.cityKey===e}))}(r),c={cityKey:r,cityName:a,temperature:e.data[0].Temperature.Metric.Value,weatherText:e.data[0].WeatherText,favourite:t};N(t),h(c)}})).catch((function(e){M("No Data About Location please try different locations")}))};return Object(o.jsxs)("section",{className:"home",children:[Object(o.jsx)(m,{apiKey:e,setSelectedCity:E}),""!==T?Object(o.jsx)("div",{className:"container error-container mx-auto",children:T}):Object(o.jsxs)("div",{className:"container mx-auto city-container",children:[Object(o.jsxs)("div",{className:"city-container-title flex flex-row justify-between",children:[Object(o.jsxs)("h2",{className:"font-bold","data-aos":"fade-right",children:[Object(o.jsx)("img",{src:v,alt:"city icon"}),j?Object(o.jsxs)("span",{children:[j.cityName," ",Object(o.jsx)("br",{})," ",j.temperature," \u2103"]}):""]}),Object(o.jsxs)("div",{className:"city-container-favourites","data-aos":"fade-left",children:[Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:w?"#000":"#fff",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})}),w?Object(o.jsx)("button",{onClick:function(){j&&(z(!1),console.log(j.cityKey),i({type:"REMOVE_FAVOURITE",city:j}))},className:g,children:"Remove From Favourites"}):Object(o.jsx)("button",{onClick:function(){j&&(z(!0),i({type:"ADD_FAVOURITE",city:j}))},className:g,children:"Add To Favourites"})]})]}),Object(o.jsx)("div",{className:"city-container-image",children:Object(o.jsx)(p,{})}),Object(o.jsx)("div",{className:"city-container-days flex flex-row justify-between",children:A.length>0?A.map((function(e,t){var c=new Date(e.Date).toString().split(" ")[0];return Object(o.jsx)(O,{title:c,temperature:e.Temperature,indexAnimation:t},c+t)})):""})]})]})},N=(c(71),function(e){return Object(o.jsxs)("div",{className:"max-w-sm rounded overflow-hidden shadow-lg favourite-card text-center",onClick:function(){e.handleFavouriteClick(e.city)},"data-aos":"zoom-in",children:[Object(o.jsx)("div",{className:"font-bold text-xl mb-2",children:Object(o.jsx)("h3",{className:"favourite-card-title",children:e.city.cityName})}),Object(o.jsx)("p",{className:"text-gray-700 text-base favourite-card-weather",children:e.city.weatherText}),Object(o.jsxs)("p",{className:"text-gray-700 text-base favourite-card-temperture",children:[e.city.temperature," \u2103"]})]})}),k=(c(72),function(){var e=Object(y.c)((function(e){return e})),t=Object(d.f)(),c=function(e){t("/",{state:{city:e}})};return Object(o.jsxs)("section",{className:"favourites",children:[Object(o.jsx)("div",{className:"container favourites-title text-center",children:Object(o.jsx)("h2",{className:"font-bold",children:"Your Favourites"})}),Object(o.jsx)("div",{className:"favourites-container container mx-auto",children:Object(o.jsx)("div",{className:"grid sm:grid-cols-3 grid-cols-1 gap-4",children:e.length>0?e.map((function(e){return Object(o.jsx)(N,{city:e,handleFavouriteClick:c},e.cityKey)})):""})})]})}),C=c(29),A=c.n(C);c(73);var F=function(){return A.a.init(),Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(s.a,{children:[Object(o.jsx)(l,{}),Object(o.jsx)("main",{children:Object(o.jsxs)(d.c,{children:[Object(o.jsx)(d.a,{path:"/favourites",element:Object(o.jsx)(k,{})}),Object(o.jsx)(d.a,{path:"/",element:Object(o.jsx)(w,{})})]})})]})})},L=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,75)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),r(e),i(e)}))},S=c(31),T=c(30),M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_FAVOURITE":return[].concat(Object(T.a)(e),[t.city]);case"REMOVE_FAVOURITE":return e.filter((function(e){return e.cityKey!==t.city.cityKey}));default:return e}},E=Object(S.a)(M);i.a.render(Object(o.jsx)(y.a,{store:E,children:Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(F,{})})}),document.getElementById("root")),L()}},[[74,1,2]]]);
//# sourceMappingURL=main.8a62ab3c.chunk.js.map