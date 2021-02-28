(function(e){function t(t){for(var r,s,o=t[0],c=t[1],u=t[2],d=0,h=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&h.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(h.length)h.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},i=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/notes/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cont--flex cont--flex--center",attrs:{id:"app"}},[e.didLoad?e._e():n("div",{staticClass:"loader cont--flex cont--flex--col cont--flex--center"},[e.isError?n("p",{staticClass:"text--center"},[n("strong",[e._v("Oops...")]),n("br"),n("br"),e._v(" Something went wrong. ")]):n("div")]),e.didLoad?n("Frame",{attrs:{content:e.content}}):e._e()],1)},i=[],s=(n("d3b7"),n("96cf"),n("1da1")),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{staticClass:"frame"},[n("frame-input",{attrs:{queries:e.queries,matches:e.matches},on:{open:e.handleChannelOpen,query:e.handleIncomingQuery,clear:e.handleFilterClear,close:e.handleChannelClose,invoke:e.handleFeatureInvoke}}),n("transition",{attrs:{appear:""}},[e.filters.entry.isSeen?n("router-view",{staticClass:"border--thin",attrs:{entry:e.entry},on:{open:e.handleChannelOpen,query:e.handleIncomingQuery}}):e._e()],1),n("transition",{attrs:{appear:""}},[e.indexIsSeen?n("frame-index",{staticClass:"border--thin",attrs:{matches:e.matches}}):e._e()],1)],1)},c=[],u=(n("99af"),n("4de4"),n("4160"),n("caad"),n("c975"),n("d81d"),n("fb6a"),n("a434"),n("b0c0"),n("4fad"),n("c1f9"),n("b64b"),n("2532"),n("18a5"),n("159b"),n("ddb0"),n("5530")),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"frame-input cont--flex"},[n("label",{staticClass:"visually-hidden",attrs:{for:"frame-input-bar"}},[e._v(" explore ")]),n("input",{attrs:{id:"frame-input-bar",type:"text",placeholder:"Explore","data-toggled":!1},on:{focus:e.handleInputBarFocus,keyup:e.handleInputBarKeyup}}),n("button",{attrs:{"aria-pressed":e.ariaPressed},on:{click:e.handleShowAllBtnClick}},[e._v(" "+e._s(e.matchCount)+" ")]),n("button",{on:{click:e.handleClearBtnClick}},[n("svg",{attrs:{viewBox:"0 0 10 10"}},[n("path",{attrs:{d:"M1,1 L9,9 M1,9 L9,1"}})])])])},d=[],h={anchor:"INPUT",typing:HTMLInputElement,status:"data-toggled",source:"value",isSeen:!0},f=r["a"].extend({name:"FrameInput",props:{queries:Array,matches:Object},data:function(){return{isIndexInvoked:!1}},computed:{matchCount:function(){return Object.keys(this.matches).length},ariaPressed:function(){return this.$data.isIndexInvoked||!!this.queries[0]}},watch:{$route:function(){this.$data.isIndexInvoked=!1}},methods:{handleInputBarFocus:function(){this.$data.isIndexInvoked&&this.revokeIndex(),this.toggleFilterOn(),this.$emit("open",h,"input")},handleInputBarKeyup:function(e){var t=e.target;t.value?this.$emit("query","input"):this.$emit("clear",["input"])},handleShowAllBtnClick:function(){this.ariaPressed||this.$data.isIndexInvoked?this.$data.isIndexInvoked&&this.revokeIndex():this.invokeIndex()},handleClearBtnClick:function(){this.$data.isIndexInvoked&&this.revokeIndex(),"input"!=this.$parent.$data.channel&&this.$emit("open",h,"input"),this.$emit("clear",["input"]),this.$emit("close","input")},invokeIndex:function(){this.$data.isIndexInvoked=!0,this.$emit("invoke","index")},revokeIndex:function(){this.$data.isIndexInvoked=!1,this.$emit("invoke","index")},toggleFilterOn:function(){var e=document.querySelector("#frame-input-bar");e.setAttribute(h.status,"true")}}}),p=f,m=n("2877"),v=Object(m["a"])(p,l,d,!1,null,"5767fc1c",null),g=v.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",{staticClass:"frame-entry",on:{click:e.handleClick}},[n("h1",[e._v(" "+e._s(e.entry.name)+" ")]),n("section",{domProps:{innerHTML:e._s(e.entry.body)}})])},y=[],x={anchor:"BUTTON",typing:HTMLButtonElement,status:"aria-pressed",source:"textContent",isSeen:!0},$=r["a"].extend({name:"FrameEntry",props:{entry:Object},methods:{handleClick:function(e){var t=e.target;t.nodeName===x.anchor&&(this.toggleButton(t),this.$emit("open",x,"entry"),this.$emit("query","entry"))},toggleButton:function(e){var t="true"===e.getAttribute(x.status);e.setAttribute(x.status,String(!t))}}}),k=$,O=Object(m["a"])(k,b,y,!1,null,"756433f8",null),I=O.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"frame-index"},[e.hasMatches?n("ul",e._l(e.matches,(function(t,r){return n("li",{key:t.index},[n("router-link",{attrs:{to:t.route}},[e._v(" "+e._s(r)+" ")])],1)})),0):n("p",[e._v(" No entries found. ")])])},C=[],j=r["a"].extend({name:"FrameIndex",props:{matches:Object},computed:{hasMatches:function(){return Object.keys(this.matches).length>0}}}),E=j,_=Object(m["a"])(E,w,C,!1,null,"2c039a1b",null),S=_.exports,F={start:{name:"Get started",body:"Start browsing..."},error:{name:"Oops",body:"Something seems off..."}},T=/(<\/?t\/?>)([\s\w.]*)(<\/?t\/?>)/g,q=function(e){return e.replaceAll(/\W/g,"-").replaceAll(/-+/g,"-")},A=r["a"].extend({name:"Frame",components:{FrameInput:g,FrameIndex:S},props:{content:Array},data:function(){return{entries:{},filters:{input:h,entry:x},channel:"",queries:[],invoked:[]}},computed:{entry:function(){return this.getEntry(this.$data.entries,this.$route.params.name)},views:function(){var e=Object.keys(this.$data.entries).slice(2).sort(),t={};return e.forEach((function(e,n){t[e]={index:n,route:q(e),isSet:!1}})),t},routes:function(){var e={};return Object.keys(this.views).forEach((function(t){e[q(t)]=t})),e},matches:function(){return this.getMatches(this.views,this.$data.queries)},indexIsSeen:function(){return this.$data.invoked.includes("index")||!!this.$data.queries[0]}},watch:{$route:function(){this.handleFilterClear(Object.keys(this.$data.filters)),this.handleChannelClose(this.$data.channel)},invoked:function(){this.$data.invoked.includes("index")?this.setFiltersSeen([]):this.setFiltersSeen(Object.keys(this.$data.filters))}},created:function(){var e=this.$props.content,t={},n="";e.forEach((function(e){e.meta&&"start"===e.meta?F.start=e:(n=e.name,n.toLowerCase(),t[n]=e)})),this.$data.entries=Object(u["a"])(Object(u["a"])({},F),t)},methods:{handleChannelOpen:function(e,t){if(this.$data.channel!=t){var n=Object.keys(this.$data.filters).filter((function(e){return e!=t}));this.resetToggledElements(n),this.clearFilterValues(n),this.$data.channel=t}},handleIncomingQuery:function(e){this.setFiltersSeen([e]),this.extractQueries(e,this.$data.filters[this.$data.channel])},handleFilterClear:function(e){this.clearFilterValues(e),this.setFiltersSeen(Object.keys(this.$data.filters)),this.$data.queries=[""]},handleChannelClose:function(e){e&&(this.resetToggledElements([e]),this.$data.channel=""),this.$data.invoked=[]},handleFeatureInvoke:function(e){-1!=this.$data.invoked.indexOf(e)?this.$data.invoked.splice(this.$data.invoked.indexOf(e),1):this.$data.invoked.splice(-1,0,e)},getToggledElements:function(e,t){var n=".frame-".concat(e," [").concat(t.status,'="true"]'),r=document.querySelectorAll(n);return Array.prototype.slice.call(r)},resetToggledElements:function(e){var t=this;e.forEach((function(e){var n=t.$data.filters[e],r=t.getToggledElements(e,n);r.forEach((function(e){return e.setAttribute(n.status,"false")}))}))},clearFilterValues:function(e){var t=this;e.forEach((function(e){var n=t.$data.filters[e],r=t.getToggledElements(e,n);"value"===n.source&&r.forEach((function(e){return e.value=""}))}))},setFiltersSeen:function(e){var t=this,n=Object.keys(this.$data.filters);n.forEach((function(n){t.$data.filters[n].isSeen=!!e.includes(n)}))},getEntry:function(e,t){var n=this.routes[t]||"start";return e[n]?"start"===n?this.$data.entries["start"]:(e[n]&&!0===this.views[n].isSet||(e[n].body=e[n].body.replaceAll(T,this.setTerms),this.views[n].isSet=!0),e[n]):this.$data.entries["error"]},setTerms:function(e,t,n){var r=this.getMatches(this.views,[n]),a=this.$data.filters.entry,i=a.anchor,s=a.status,o=i.toLowerCase();return Object.keys(r).length>0?"<".concat(o," ").concat(s,'="false">').concat(n,"</").concat(o,">"):n},getMatches:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[""],n=Object.entries(e);return t.forEach((function(e){n=n.filter((function(t){return t[0].toLowerCase().includes(e.toLowerCase())}))})),Object.fromEntries(n)},extractQueries:function(e,t){var n=this.getToggledElements(e,t),r=n.map((function(e){return e[t.source]||""}));this.$data.queries=r}}}),B=A,M=Object(m["a"])(B,o,c,!1,null,"d48565a8",null),L=M.exports,P="./",R={default:"entries.json"},Q=P+R.default,N=r["a"].extend({name:"App",components:{Frame:L},data:function(){return{isError:!1,content:[]}},computed:{didLoad:function(){return this.$data.content.length>0}},created:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchResource(Q);case 2:n=t.sent,e.$data.content=n||[];case 4:case"end":return t.stop()}}),t)})))()},methods:{fetchResource:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.abrupt("return",fetch(e).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).catch((function(){t.$data.isError=!0})));case 1:case"end":return n.stop()}}),n)})))()}}}),H=N,V=Object(m["a"])(H,a,i,!1,null,"547f0f26",null),J=V.exports,K=n("8c4f");r["a"].use(K["a"]);var U=[{path:"/",component:I},{path:"/:name",component:I}],G=new K["a"]({routes:U,scrollBehavior:function(){return{x:0,y:0,behavior:"smooth"}}}),W=G;r["a"].config.productionTip=!1,new r["a"]({router:W,render:function(e){return e(J)}}).$mount("#app")}});
//# sourceMappingURL=app.674ece17.js.map