(function(e){function t(t){for(var r,s,o=t[0],c=t[1],u=t[2],d=0,h=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&h.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(h.length)h.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},i=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/notes/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cont--flex cont--flex--center",attrs:{id:"app"}},[e.didLoad?e._e():n("div",{staticClass:"loader cont--flex cont--flex--col cont--flex--center"},[e.isError?n("p",{staticClass:"text--center"},[n("strong",[e._v("Oops...")]),n("br"),n("br"),e._v(" Something went wrong. ")]):n("div")]),e.didLoad?n("Frame",{attrs:{content:e.content}}):e._e()],1)},i=[],s=(n("d3b7"),n("96cf"),n("1da1")),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{staticClass:"frame"},[n("frame-input",{attrs:{filterId:"searchbar",queries:e.queries,matches:e.matches},on:{open:e.handleChannelOpen,query:e.handleIncomingQuery,clear:e.handleFilterClear,close:e.handleChannelClose,invoke:e.handleFeatureInvoke}}),n("transition",{attrs:{appear:""}},[e.filters.entry.isSeen?n("router-view",{staticClass:"border--thin",attrs:{filterId:"entry",entry:e.entry},on:{open:e.handleChannelOpen,query:e.handleIncomingQuery}}):e._e()],1),n("transition",{attrs:{appear:""}},[e.indexIsSeen?n("frame-index",{attrs:{queries:e.queries,matches:e.matches,channelNature:e.channelNature},on:{untoggle:e.handleUntoggle}}):e._e()],1)],1)},c=[],u=(n("99af"),n("4de4"),n("4160"),n("caad"),n("c975"),n("d81d"),n("fb6a"),n("a434"),n("b0c0"),n("a9e3"),n("b64b"),n("ac1f"),n("2532"),n("5319"),n("159b"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"frame-input cont--flex",attrs:{id:e.filterId}},[n("label",{staticClass:"visually-hidden",attrs:{for:"frame-input-bar"}},[e._v(" filter notes ")]),n("input",{attrs:{id:"frame-input-bar",type:"text",placeholder:"","data-toggled":!1},on:{focus:e.handleInputBarFocus,keyup:e.handleInputBarKeyup}}),n("div",{staticClass:"filter--dot area--secondary",attrs:{role:"presentation"}}),n("button",{attrs:{"aria-pressed":e.ariaPressed},on:{click:e.handleShowAllBtnClick}},[e._v(" "+e._s(e.matchCount)+" ")]),n("button",{on:{click:e.handleClearBtnClick}},[n("svg",{attrs:{viewBox:"0 0 10 10"}},[n("path",{attrs:{d:"M1,1 L9,9 M1,9 L9,1"}})])])])}),l=[],d={nature:"single",anchor:"INPUT",typing:HTMLInputElement,status:"data-toggled",source:"value",isSeen:!0},h=r["a"].extend({name:"FrameInput",props:{filterId:String,queries:Array,matches:Object},data:function(){return{isIndexInvoked:!1}},computed:{matchCount:function(){return Object.keys(this.matches).length},ariaPressed:function(){return this.$data.isIndexInvoked||!!this.queries[0]}},watch:{$route:function(){this.$data.isIndexInvoked=!1}},methods:{handleInputBarFocus:function(){this.$data.isIndexInvoked&&this.revokeIndex(),this.toggleFilterOn(),this.$emit("open",d,this.filterId)},handleInputBarKeyup:function(e){var t=e.target;t.value?this.$emit("query",this.filterId):this.$emit("clear",[this.filterId])},handleShowAllBtnClick:function(){this.ariaPressed||this.$data.isIndexInvoked?this.$data.isIndexInvoked&&this.revokeIndex():this.invokeIndex()},handleClearBtnClick:function(){this.$data.isIndexInvoked&&this.revokeIndex(),this.$parent.$data.channel!=this.filterId&&this.$emit("open",d,this.filterId),this.$emit("clear",[this.filterId]),this.$emit("close",this.filterId)},invokeIndex:function(){this.$data.isIndexInvoked=!0,this.$emit("invoke","index")},revokeIndex:function(){this.$data.isIndexInvoked=!1,this.$emit("invoke","index")},toggleFilterOn:function(){var e="#".concat(this.filterId," > input"),t=document.querySelector(e);t.setAttribute(d.status,"true")}}}),f=h,p=n("2877"),m=Object(p["a"])(f,u,l,!1,null,"1952dae0",null),b=m.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",{staticClass:"frame-entry",attrs:{id:e.filterId},on:{click:e.handleClick}},[n("div",{staticClass:"filter--dot area--secondary",attrs:{role:"presentation"}}),e.entry.name?n("h1",[e._v(" "+e._s(e.entry.name)+" ")]):e._e(),n("section",{domProps:{innerHTML:e._s(e.entry.body)}})])},g=[],y=(n("18a5"),{nature:"multi",anchor:"BUTTON",typing:HTMLButtonElement,status:"aria-pressed",source:"textContent",isSeen:!0}),x=r["a"].extend({name:"FrameEntry",props:{filterId:String,entry:Object},methods:{handleClick:function(e){var t=e.target;t.nodeName===y.anchor&&(this.toggleButton(t),this.$emit("open",y,this.filterId),this.$emit("query",this.filterId))},toggleButton:function(e){var t="true"===e.getAttribute(y.status);e.setAttribute(y.status,String(!t))}}}),$=x,k=Object(p["a"])($,v,g,!1,null,"6fbd2b38",null),O=k.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"frame-index"},[n("transition",{attrs:{appear:""}},[e.batchIsSeen?n("frame-index-batch",{attrs:{queries:e.queries},on:{untoggle:e.handleUntoggle}}):e._e()],1),e.hasMatches?n("ul",{staticClass:"border--thin"},e._l(e.matches,(function(e){return n("frame-index-entry",{key:e.view.index,attrs:{match:e}})})),1):n("p",{staticClass:"border--thin"},[e._v(" No entries found. ")])],1)},E=[],w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"frame-batch"},[n("ul",{staticClass:"cont--flex"},[n("transition-group",{attrs:{appear:""}},e._l(e.queries,(function(t){return n("li",{key:t,staticClass:"border--thin cont--flex cont--flex--center",attrs:{tabindex:"0"},on:{click:e.handleLabelClick,keyup:e.handleLabelKeyup}},[e._v(" "+e._s(t)+" "),n("svg",{attrs:{viewBox:"0 0 10 10"}},[n("path",{attrs:{d:"M1,1 L9,9 M1,9 L9,1"}})])])})),0)],1)])},j=[],C=(n("498a"),r["a"].extend({name:"FrameBatch",props:{queries:Array},methods:{handleLabelClick:function(e){var t=e.target,n=t.textContent;this.$emit("untoggle",n.trim())},handleLabelKeyup:function(e){13!==e.keyCode&&32!==e.keyCode||(e.preventDefault(),this.handleLabelClick(e))}}})),_=C,S=Object(p["a"])(_,w,j,!1,null,"d54bfb06",null),T=S.exports,F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{attrs:{tabindex:"-1"}},[n("router-link",{attrs:{to:e.match.view.route}},[n("article",{staticClass:"frame-index-entry border--thin"},[n("h1",{domProps:{innerHTML:e._s(e.match.name)}}),n("div",{attrs:{role:"presentation"}}),n("section",{domProps:{innerHTML:e._s(e.renderUntabbable(e.match.body))}})])])],1)},q=[],L=/(?<=tabindex=")-?\d+(?=")/g,B=/(?<=<)(button|input|select|textarea|area|object|audio|video|code|summary|link)(?=\s+|\/?>)/g,N=/(?<=<)a(?=.+|\/?>)/g,M=r["a"].extend({name:"FrameIndexEntry",props:{match:Object},methods:{renumberTabindex:function(){return"-1"},addFalseTabindex:function(e){return e+' tabindex="-1"'},setElementToNull:function(){return"null"},renderUntabbable:function(e){return e.replace(L,this.renumberTabindex).replace(B,this.addFalseTabindex).replace(N,this.setElementToNull)}}}),A=M,P=Object(p["a"])(A,F,q,!1,null,"497730bc",null),R=P.exports,Q=r["a"].extend({name:"FrameIndex",components:{FrameIndexBatch:T,FrameIndexEntry:R},props:{queries:Array,matches:Object,channelNature:String},computed:{hasMatches:function(){return Object.keys(this.matches).length>0},batchIsSeen:function(){return""!=this.queries[0]&&"multi"===this.channelNature}},methods:{handleUntoggle:function(e){this.$emit("untoggle",e)}}}),z=Q,U=Object(p["a"])(z,I,E,!1,null,"4542ffa0",null),V=U.exports,H=function(e,t){var n;return function(){var r=this,a=arguments,i=function(){e.apply(r,a)};clearTimeout(n),n=setTimeout(i,t)}},W=(n("4fad"),n("c1f9"),n("5530")),J=n("d4ec"),K=n("bee2"),D={start:{name:"Get started",body:"Start browsing..."},error:{name:"Oops",body:"Something seems off..."}},G=D,X=function(e){return e.replace(/\W/g,"-").replace(/-+/g,"-").replace(/^-+|-+$/g,"")},Y=X,Z=/(?<=<t>).*?(?=<\/t>)/g,ee=Z,te=function(){function e(t){var n=this;Object(J["a"])(this,e),this.entriesObj={},this.baseNumber=Object.keys(G).length,this.keyEntriesByName=function(){var e={},t="";return n.entriesArr.forEach((function(r){r.meta&&"start"===r.meta?G.start=n.ensureEntryView("start",r,-1):(t=r.name,t.toLowerCase(),e[t]=r)})),e},this.ensureEntryView=function(e,t,n){t.view||(t.view={});var r=t.view;return t.view={index:n,route:r.route||Y(e),isSet:r.isSet||!1},t},this.appendEntriesToBase=function(e){return Object(W["a"])(Object(W["a"])({},G),e)},this.finalizeEntries=function(){var e=n.keyEntriesByName(),t=Object.keys(e).sort(),r=e;return t.forEach((function(t,a){r[t]=n.ensureEntryView(t,e[t],a)})),n.entriesObj=n.appendEntriesToBase(r),n.entriesObj},this.getQueryEntryMatches=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[""],t=Object.entries(n.entriesObj).slice(n.baseNumber);return e.forEach((function(e){t=t.filter((function(t){return t[0].toLowerCase().includes(e.toLowerCase())}))})),Object.fromEntries(t)},this.setEntryTerm=function(e){var t=n.getQueryEntryMatches([e]),r=y.anchor,a=y.status,i=r.toLowerCase();return Object.keys(t).length>0?"<".concat(i," ").concat(a,'="false">').concat(e,"</").concat(i,">"):e},this.replaceEntryTerms=function(e){var t=n.entriesObj[e];t.body=t.body.replace(ee,n.setEntryTerm);var r=t.view;return r.isSet=!0,t.view=r,t},this.entriesArr=t}return Object(K["a"])(e,[{key:"computeRoutes",value:function(){var e=this,t={};return Object.keys(this.entriesObj).slice(this.baseNumber).forEach((function(n){var r=e.entriesObj[n].view;t[r.route]=n})),t}},{key:"getEntries",value:function(){return this.entriesObj}},{key:"getEntry",value:function(e,t){var n=t[e]||"start";if(!this.entriesObj[n])return this.entriesObj["error"];var r=this.entriesObj[n].view;if(!0===r.isSet)return this.entriesObj[n];var a=this.entriesObj[n];return a=this.replaceEntryTerms(n),a}}]),e}(),ne=JSON.parse(JSON.stringify(d)),re=r["a"].extend({name:"Frame",components:{FrameInput:b,FrameIndex:V},props:{content:Array},data:function(){return{storage:new te(this.$props.content),filters:{searchbar:ne,entry:y},channel:"",queries:[],invoked:[],columns:0}},computed:{entry:function(){return this.$data.storage.getEntry(this.$route.params.name,this.routes)},routes:function(){return this.$data.storage.computeRoutes()},matches:function(){return this.$data.storage.getQueryEntryMatches(this.$data.queries)},indexIsSeen:function(){return this.$data.invoked.includes("index")||!!this.$data.queries[0]},channelNature:function(){var e;return(null===(e=this.$data.filters[this.$data.channel])||void 0===e?void 0:e.nature)||""}},watch:{$route:function(){this.handleFilterClear(Object.keys(this.$data.filters)),this.handleChannelClose(this.$data.channel)},invoked:function(){this.$data.invoked.includes("index")&&this.$data.columns<=1?this.setFiltersSeen([]):this.$data.invoked.includes("index")&&this.$data.columns>1?this.setFiltersSeen(["entry"]):this.setFiltersSeen(Object.keys(this.$data.filters))}},created:function(){this.$data.storage.finalizeEntries(),this.handleWindowResize()},mounted:function(){window.addEventListener("resize",H(this.handleWindowResize,500))},beforeDestroy:function(){window.removeEventListener("resize",H(this.handleWindowResize,500))},methods:{handleChannelOpen:function(e,t){if(this.$data.channel!=t){var n=Object.keys(this.$data.filters).filter((function(e){return e!=t}));this.resetToggledElements(n),this.clearFilterValues(n),this.$data.channel=t}},handleIncomingQuery:function(e){this.$data.columns>1?this.setFiltersSeen([e,"entry"]):this.setFiltersSeen([e]),this.extractQueries(e,this.$data.filters[this.$data.channel])},handleFilterClear:function(e){this.clearFilterValues(e),this.setFiltersSeen(Object.keys(this.$data.filters)),this.$data.queries=[""]},handleChannelClose:function(e){e&&(this.resetToggledElements([e]),this.$data.channel=""),this.$data.invoked=[]},handleUntoggle:function(e){this.resetToggledElement(this.$data.channel,e),this.clearQuery(e)},handleFeatureInvoke:function(e){-1!=this.$data.invoked.indexOf(e)?this.$data.invoked.splice(this.$data.invoked.indexOf(e),1):this.$data.invoked.splice(-1,0,e)},handleWindowResize:function(){var e=Number(getComputedStyle(document.body,"::before").content.replace(/\"/g,"").replace(/-column/,""));this.$data.columns=e},getToggledElements:function(e,t){var n="#".concat(e," [").concat(t.status,'="true"]'),r=document.querySelectorAll(n);return Array.prototype.slice.call(r)},resetToggledElement:function(e,t){var n=this.$data.filters[e],r=this.getToggledElements(e,n);r.forEach((function(e){e[n.source]===t&&e.setAttribute(n.status,"false")}))},resetToggledElements:function(e){var t=this;e.forEach((function(e){var n=t.$data.filters[e],r=t.getToggledElements(e,n);r.forEach((function(e){return e.setAttribute(n.status,"false")}))}))},clearFilterValues:function(e){var t=this;e.forEach((function(e){var n=t.$data.filters[e],r=t.getToggledElements(e,n);"value"===n.source&&r.forEach((function(e){return e.value=""}))}))},setFiltersSeen:function(e){var t=this,n=Object.keys(this.$data.filters);n.forEach((function(n){t.$data.filters[n].isSeen=!!e.includes(n)}))},extractQueries:function(e,t){var n=this.getToggledElements(e,t),r=n.map((function(e){return e[t.source]||""}));this.$data.queries=r},clearQuery:function(e){this.$data.queries.splice(this.$data.queries.indexOf(e),1)}}}),ae=re,ie=Object(p["a"])(ae,o,c,!1,null,"8c028ef2",null),se=ie.exports,oe="./",ce={default:"entries.json"},ue=oe+ce.default,le=r["a"].extend({name:"App",components:{Frame:se},data:function(){return{isError:!1,content:[]}},computed:{didLoad:function(){return this.$data.content.length>0}},created:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchResource(ue);case 2:n=t.sent,e.$data.content=n||[];case 4:case"end":return t.stop()}}),t)})))()},methods:{fetchResource:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.abrupt("return",fetch(e).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).catch((function(){t.$data.isError=!0})));case 1:case"end":return n.stop()}}),n)})))()}}}),de=le,he=Object(p["a"])(de,a,i,!1,null,"547f0f26",null),fe=he.exports,pe=n("8c4f");r["a"].use(pe["a"]);var me=[{path:"/",component:O},{path:"/:name",component:O}],be=new pe["a"]({routes:me,scrollBehavior:function(){return{x:0,y:0,behavior:"smooth"}}}),ve=be;r["a"].config.productionTip=!1,new r["a"]({router:ve,render:function(e){return e(fe)}}).$mount("#app")}});
//# sourceMappingURL=app.e6230d89.js.map