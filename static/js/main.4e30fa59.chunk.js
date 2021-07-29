(this["webpackJsonptravel-info"]=this["webpackJsonptravel-info"]||[]).push([[0],{42:function(e,t,c){},43:function(e,t,c){},66:function(e,t,c){},74:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c.n(a),r=c(10),n=c.n(r),i=(c(42),c(11)),l=(c(43),c(78)),o=c(77),d=c(34),u=c(9),p=c.n(u),f=c(13),j=c(16),m=[{featureType:"all",elementType:"geometry.fill",stylers:[{weight:"2.00"}]},{featureType:"all",elementType:"geometry.stroke",stylers:[{color:"#9c9c9c"}]},{featureType:"all",elementType:"labels.text",stylers:[{visibility:"on"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"landscape",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"landscape.man_made",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:"#eeeeee"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#7b7b7b"}]},{featureType:"road",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{color:"#46bcec"},{visibility:"on"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#c8d7d4"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#070707"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"}]}],h=c(76),y=c(79),b=c(1);function g(e){return Object(b.jsx)(h.a,{style:{background:"rgb(200, 0, 0, 0.8)"},className:"p-1 info-box",children:Object(b.jsx)(y.a,{border:"light",children:Object(b.jsxs)(y.a.Body,{children:[Object(b.jsxs)(y.a.Title,{className:"date",children:[e.date,"\u65e5"]}),Object(b.jsx)(y.a.Img,{variant:"top",src:"http://openweathermap.org/img/wn/"+e.icon+"@2x.png"}),Object(b.jsx)("small",{className:"text-muted description",children:e.description}),Object(b.jsxs)(y.a.Text,{children:[" ",e.temp,"\xb0 C "]})]})})})}var x=c(35),v=c(31),O=c.n(v),N="4254d70141a6e3a69a76315be6006bcf";function w(e,t){return C.apply(this,arguments)}function C(){return(C=Object(f.a)(p.a.mark((function e(t,c){var a,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("https://api.openweathermap.org/data/2.5/onecall","exclude=minutely,hourly,alerts",s=null===c?"":c,null==t){e.next=9;break}return e.next=6,fetch("".concat("https://api.openweathermap.org/data/2.5/onecall","?lat=").concat(t.lat,"&lon=").concat(t.lng,"&\n        ").concat("exclude=minutely,hourly,alerts","&units=metric&&appid=").concat(N)).then((function(e){return e.json()})).then((function(e){return console.log("api call result: "),console.log(e),{weatherType:T(e,s),foreCast:P(e,s)}}),(function(e){return console.log("error triggered"),console.log("error: "+e),{}}));case 6:a=e.sent,e.next=11;break;case 9:return console.log("null coords were fed into weather api call"),e.abrupt("return",{});case 11:return e.abrupt("return",a);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e,t){return t?{description:e.current.weather[0].description,icon:e.current.weather[0].icon,temp:e.current.temp,city:t,date:new Date(1e3*e.current.dt+324e5).getDate(),time:"".concat(new Date(1e3*e.current.dt+32400).getHours(),":  ").concat(new Date(1e3*e.current.dt+32400).getMinutes())}:{description:e.current.weather[0].description,icon:e.current.weather[0].icon,temp:e.current.temp,date:new Date(1e3*e.current.dt+324e5).getDate(),time:"".concat(new Date(1e3*e.current.dt+32400).getHours(),":  ").concat(new Date(1e3*e.current.dt+32400).getMinutes())}}function P(e,t){for(var c=[],a=1;a<e.daily.length;a++){var s=e.daily[a],r={description:s.weather[0].description,icon:s.weather[0].icon,temp:s.temp.day,city:t,date:new Date(1e3*s.dt+32400).getDate()};c.push(r)}return c}function q(e,t,c){return k.apply(this,arguments)}function k(){return(k=Object(f.a)(p.a.mark((function e(t,c,a){var s,r,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=c?"https://api.foursquare.com/v2/venues/search?":"https://api.foursquare.com/v2/venues/explore?",r={client_id:"10SUYPMXPZEAXL54BDFNAHBXXFEAWXMM23BHLLZU5BUIQY3F",client_secret:"1YDGPQXN0AX1ZA02ECYS3DKQPP2THXTU4O13CI3R5NX4HUA0",ll:"".concat(t.lat,",").concat(t.lng),query:c||"",radius:"10000",limit:"5",v:"20210101",locale:a||"en"},e.next=4,O.a.get(s+new URLSearchParams(r)).then((function(e){return A(e)})).catch((function(e){return console.log("axios get call error"),console.log(e),{}}));case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e){var t=[],c=e.data.response;return(c.venues?c.venues:c.groups[0].items).map((function(e){var a=c.venues?{name:e.name,address:e.location.address,coords:{lat:e.location.lat,lng:e.location.lng},icon:e.categories[0].icon.prefix,cat:e.categories[0].name}:{name:e.venue.name,address:e.venue.location.address,coords:{lat:e.venue.location.lat,lng:e.venue.location.lng},icon:e.venue.categories[0].icon.prefix,cat:e.venue.categories[0].name};return t.push(a),a})),t}var S=c(22),D=c.n(S),E=["places"];function L(e){var t=Object(j.d)({googleMapsApiKey:"AIzaSyAuohSHs-AAUhv99MfrNRt876sNgmkX3ek",libraries:E}),c=t.isLoaded,a=t.loadError,r={styles:m,disableDefaultUI:!1,zoomControl:!0},n=[{coords:{lat:35.689499,lng:139.691711},name:"Tokyo"},{coords:{lat:35.447781,lng:139.642502},name:"Yokohama"},{coords:{lat:35.021069,lng:135.753845},name:"Kyoto"},{coords:{lat:34.693741,lng:135.502182},name:"Osaka"},{coords:{lat:43.064171,lng:141.346939},name:"Sapporo"},{coords:{lat:35.181469,lng:136.906403},name:"Nagoya"}],l=s.a.useState(n),o=Object(i.a)(l,2),u=o[0],h=o[1],y=s.a.useState({}),v=Object(i.a)(y,2),O=v[0],N=v[1],C=s.a.useState({}),T=Object(i.a)(C,2),P=T[0],k=T[1],A=s.a.useState([]),S=Object(i.a)(A,2),L=S[0],M=S[1],W=s.a.useState({}),X=Object(i.a)(W,2),F=X[0],H=X[1];function I(e){return U.apply(this,arguments)}function U(){return(U=Object(f.a)(p.a.mark((function e(t){var c,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=w(t,null),e.next=3,c.then((function(e){return console.log(e.weatherType),console.log("oneCallForecast"),e.weatherType&&e.foreCast&&(k(e.weatherType),M(e.foreCast)),e.foreCast}));case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(e,t,c){return K.apply(this,arguments)}function K(){return(K=Object(f.a)(p.a.mark((function e(t,c,a){var s,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=q(t,c,a),e.next=3,s.then((function(e){return H(e),e}));case 3:return r=e.sent,console.log("fsCall value: "),console.log(r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}s.a.useEffect((function(){console.log("selected city has changed"),console.log(O),D.a.isEmpty(O)||(O.currWeather=P,O.foreCast=L,O.foursquarePlaces=F,e.theCity(O))}),[O]),s.a.useEffect((function(){if(u.length>7)u.pop();console.log(O)}),[u]);var z=s.a.useCallback((function(e){console.log("onMapClicked func is called!"),console.log({lat:e.latLng.lat(),lng:e.latLng.lng()});var t={name:"user"};t.coords={lat:e.latLng.lat(),lng:e.latLng.lng()},h(n.concat(t))}),[]),Y=s.a.useRef(),J=s.a.useCallback((function(e){Y.current=e}),[]);return a?Object(b.jsx)("div",{children:'"Error"'}):c?Object(b.jsxs)(j.a,{mapContainerStyle:{height:"93.5vh",width:"100%"},zoom:6,center:{lat:38.6762,lng:139.6503},options:r,onLoad:J,onClick:z,children:[u.map((function(e){return Object(b.jsx)(j.c,{position:e.coords,icon:{origin:new window.google.maps.Point(0,0),anchor:new window.google.maps.Point(40,30),scaledSize:new window.google.maps.Size(80,60)},opacity:"user"===e.name?1:.5,title:e.name,onClick:Object(f.a)(p.a.mark((function t(){var c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I(e.coords);case 2:return t.next=4,B(e.coords);case 4:N(e),c=u.map((function(t){return t.coords===e.coords&&(t=e),t})),h(c);case 7:case"end":return t.stop()}}),t)})))},Object(x.a)())})),O&&!D.a.isEmpty(O.currWeather)?Object(b.jsx)(j.b,{position:O.coords,onCloseClick:function(){N({})},children:Object(b.jsx)("div",{children:Object(b.jsx)(g,Object(d.a)({},P))})}):Object(b.jsx)("div",{children:" Hello Joe "})]}):Object(b.jsx)("div",{children:'"Loading...."'})}c(66);var M=function(e){return Object(a.useEffect)((function(){console.log("child props: ... "),console.log(e)})),Object(b.jsxs)("div",{className:"uber-container",children:[Object(b.jsx)("div",{className:"top-container",children:Object(b.jsxs)("div",{className:"current-weather-time",children:[Object(b.jsxs)("div",{className:"date-container",children:[e.city.currWeather?Object(b.jsxs)("div",{className:"time",children:[" ",e.city.currWeather.time," "]}):Object(b.jsx)("div",{}),Object(b.jsx)("div",{className:"others",children:"Asia/Tokyo, JP"})]}),e.city.currWeather?Object(b.jsxs)("div",{className:"date-weather-container",children:[Object(b.jsxs)("div",{className:"city-name",children:[" ",e.city.currWeather.city," "]}),Object(b.jsx)("img",{src:"http://openweathermap.org/img/wn/"+e.city.currWeather.icon+"@2x.png",alt:"icon"}),Object(b.jsxs)("div",{className:"other",children:[Object(b.jsx)("div",{className:"description",children:e.city.currWeather.description}),Object(b.jsxs)("div",{className:"temp",children:["Temperature: ",e.city.currWeather.temp,"\xb0 C"]})]})]}):null]})}),Object(b.jsx)("div",{className:"mid-container",children:Object(b.jsx)("div",{className:"foursquare",children:e.city.foreCast&&e.city.foreCast.length>1&&e.city.foursquarePlaces?Object(b.jsxs)("div",{className:"foursquare-places",children:[Object(b.jsxs)("div",{className:"place",children:[Object(b.jsx)("div",{className:"date",children:e.city.foursquarePlaces[0].name}),Object(b.jsx)("img",{src:e.city.foursquarePlaces[0].icon+"64.png",alt:"icon"}),Object(b.jsxs)("div",{className:"description",children:["Addrs: ",e.city.foursquarePlaces[0].address]}),Object(b.jsx)("div",{className:"temp",children:e.city.foursquarePlaces[0].cat})]}),Object(b.jsxs)("div",{className:"place",children:[Object(b.jsx)("div",{className:"date",children:e.city.foursquarePlaces[1].name}),Object(b.jsx)("img",{src:e.city.foursquarePlaces[1].icon+"64.png",alt:"icon"}),Object(b.jsxs)("div",{className:"description",children:["Addrs: ",e.city.foursquarePlaces[1].address]}),Object(b.jsx)("div",{className:"temp",children:e.city.foursquarePlaces[1].cat})]}),Object(b.jsxs)("div",{className:"place",children:[Object(b.jsx)("div",{className:"date",children:e.city.foursquarePlaces[2].name}),Object(b.jsx)("img",{src:e.city.foursquarePlaces[2].icon+"64.png",alt:"icon"}),Object(b.jsxs)("div",{className:"description",children:["Addrs: ",e.city.foursquarePlaces[2].address]}),Object(b.jsx)("div",{className:"temp",children:e.city.foursquarePlaces[2].cat})]}),Object(b.jsxs)("div",{className:"place",children:[Object(b.jsx)("div",{className:"date",children:e.city.foursquarePlaces[3].name}),Object(b.jsx)("img",{src:e.city.foursquarePlaces[3].icon+"64.png",alt:"icon"}),Object(b.jsxs)("div",{className:"description",children:["Addrs: ",e.city.foursquarePlaces[3].address]}),Object(b.jsx)("div",{className:"temp",children:e.city.foursquarePlaces[3].cat})]}),Object(b.jsxs)("div",{className:"place",children:[Object(b.jsx)("div",{className:"date",children:e.city.foursquarePlaces[4].name}),Object(b.jsx)("img",{src:e.city.foursquarePlaces[4].icon+"64.png",alt:"icon"}),Object(b.jsxs)("div",{className:"description",children:["Addrs: ",e.city.foursquarePlaces[4].address]}),Object(b.jsx)("div",{className:"temp",children:e.city.foursquarePlaces[4].cat})]})]}):Object(b.jsx)("div",{children:"Select a City"})})}),Object(b.jsx)("div",{className:"bottom-container",children:Object(b.jsx)("div",{className:"future-weather",children:e.city.foreCast&&e.city.foreCast.length>1?Object(b.jsxs)("div",{className:"weather-forecast",children:[Object(b.jsxs)("div",{className:"forecast-day",children:[Object(b.jsxs)("div",{className:"date",children:[e.city.foreCast[0].date,"\u65e5"]}),Object(b.jsx)("img",{src:"http://openweathermap.org/img/wn/"+e.city.foreCast[0].icon+"@2x.png",alt:"icon"}),Object(b.jsx)("div",{className:"description",children:e.city.foreCast[0].description}),Object(b.jsxs)("div",{className:"temp",children:[e.city.foreCast[0].temp,"\xb0 C"]})]}),Object(b.jsxs)("div",{className:"forecast-day",children:[Object(b.jsxs)("div",{className:"date",children:[e.city.foreCast[1].date,"\u65e5"]}),Object(b.jsx)("img",{src:"http://openweathermap.org/img/wn/"+e.city.foreCast[1].icon+"@2x.png",alt:"icon"}),Object(b.jsx)("div",{className:"description",children:e.city.foreCast[1].description}),Object(b.jsxs)("div",{className:"temp",children:[e.city.foreCast[1].temp,"\xb0 C"]})]}),Object(b.jsxs)("div",{className:"forecast-day",children:[Object(b.jsxs)("div",{className:"date",children:[e.city.foreCast[2].date,"\u65e5"]}),Object(b.jsx)("img",{src:"http://openweathermap.org/img/wn/"+e.city.foreCast[2].icon+"@2x.png",alt:"icon"}),Object(b.jsx)("div",{className:"description",children:e.city.foreCast[2].description}),Object(b.jsxs)("div",{className:"temp",children:[e.city.foreCast[2].temp,"\xb0 C"]})]}),Object(b.jsxs)("div",{className:"forecast-day",children:[Object(b.jsxs)("div",{className:"date",children:[e.city.foreCast[3].date,"\u65e5"]}),Object(b.jsx)("img",{src:"http://openweathermap.org/img/wn/"+e.city.foreCast[3].icon+"@2x.png",alt:"icon"}),Object(b.jsx)("div",{className:"description",children:e.city.foreCast[3].description}),Object(b.jsxs)("div",{className:"temp",children:[e.city.foreCast[3].temp,"\xb0 C"]})]}),Object(b.jsxs)("div",{className:"forecast-day",children:[Object(b.jsxs)("div",{className:"date",children:[e.city.foreCast[4].date,"\u65e5"]}),Object(b.jsx)("img",{src:"http://openweathermap.org/img/wn/"+e.city.foreCast[4].icon+"@2x.png",alt:"icon"}),Object(b.jsx)("div",{className:"description",children:e.city.foreCast[4].description}),Object(b.jsxs)("div",{className:"temp",children:[e.city.foreCast[4].temp,"\xb0 C"]})]})]}):Object(b.jsx)("div",{children:"Select a City"})})})]})};var W=function(){var e=s.a.useState({}),t=Object(i.a)(e,2),c=t[0],a=t[1];return s.a.useEffect((function(){console.log("Parent Effect fired ...."),console.log(c)}),[c]),Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(l.a,{defaultActiveKey:"map",id:"uncontrolled-tab-example",className:"tabber",children:[Object(b.jsx)(o.a,{eventKey:"map",title:"Map",className:"",children:Object(b.jsx)("div",{className:"left-side",children:Object(b.jsx)(L,{theCity:function(e){console.log("sendDataToParent callback fired ...."),console.log(e),a(e)}})})}),Object(b.jsx)(o.a,{eventKey:"info",title:"Info",children:Object(b.jsx)("div",{className:"right-side",children:Object(b.jsx)(M,{city:c})})})]})})},X=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,80)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,n=t.getTTFB;c(e),a(e),s(e),r(e),n(e)}))};n.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(W,{})}),document.getElementById("root")),X()}},[[74,1,2]]]);
//# sourceMappingURL=main.4e30fa59.chunk.js.map