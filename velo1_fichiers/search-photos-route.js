(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"++O4":function(e,t,n){"use strict";var o=n("17x9"),r=n.n(o),i=n("q1tI"),a=n.n(i),c=n("xCPo"),l=n.n(c),u={type:r.a.oneOf(["photos","collections","users","photo-likes","collection-photos"]).isRequired},s=function(e){var t=e.type;return a.a.createElement("div",{className:l.a.emptyStateContainer},a.a.createElement("img",{alt:"No content available",className:l.a.emptyStateImg,src:"/a/img/empty-states/".concat(t,".png")}))};s.displayName="EmptyState",s.propTypes=u;var f=s;n.d(t,"a",function(){return f})},"4/DZ":function(e,t,n){"use strict";var o=n("q1tI"),r=n.n(o),i=n("2iEm"),a=n("gcgR"),c=n("YalI"),l=n("s3D0"),u=n.n(l);function s(){return r.a.createElement("div",{className:u.a.container},r.a.createElement(i.a,{to:a.p},r.a.createElement(c.a,{className:u.a.logo})),r.a.createElement("p",{className:u.a.text},"Make something awesome"))}n.d(t,"a",function(){return s})},"4gzW":function(e,t,n){"use strict";n.r(t);var o=n("6l12"),i=n("q1tI"),a=n.n(i),r=n("/MKj"),l=n("b2r9"),u=n("acyj"),c=n("OcE/"),s=n("pq3u"),f=n("acC3"),p=n("QH2T"),h=n("X3Fk"),b=n("++O4"),d=n("DUaC");function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function v(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var S=Object(c.e)("searchPhotos"),w=Object(o.a)(function(){return a.a.createElement(b.a,{type:"photos"})}),j=function(e){function t(){var c;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(c=v(this,O(t).apply(this,arguments))).handleFetch=function(e,t){var n=c.props,o=n.routeData,r=n.searchXps,i=o.query;return u.a.search.getSearchPhotos({query:i,page:e,perPage:t,searchXps:r}).toPromise()},c.handleFetchResponse=function(e){var t=c.props,n=t.dispatch,o=t.routeData,r=S(e),i=r.entities,a=r.result;n(l.a.BatchActions({actions:[Object(l.Y)(i),l.a.HandleNextPhotoFeedPageResponse({feedId:Object(f.b)(o),photoIds:a.results})]}))},c}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,i["Component"]),n=t,(o=[{key:"render",value:function(){var e=this.props.routeData;return a.a.createElement("div",{"data-test":p.q},a.a.createElement(d.a,{feedId:Object(f.b)(e),handleFetch:this.handleFetch,handleFetchResponse:this.handleFetchResponse,getNoContentEl:w}))}}])&&m(n.prototype,o),r&&m(n,r),t}();j.displayName="SearchPhotos";var I=Object(s.c)()(function(e){return{searchXps:Object(h.b)(e)}}),_=Object(r.connect)(I)(j);n.d(t,"default",function(){return _})},"6Dux":function(e,t,n){"use strict";n.d(t,"a",function(){return o});var o=function(t){return function(e){return t.username===e.username}}},ALSr:function(e,t,n){"use strict";var i=n("7H/G"),a=n("q1tI"),m=n.n(a),v=n("JKmW"),o=n("wIs1"),c=n("26FU"),s=n("lYZG"),l=n("bne5"),u=n("dzgT"),f=n("5tAl"),p=n("VnD/"),h=n("mrSG"),r=n("MGBS"),b=n("zotm");var d=function(){function e(e,t){this.keySelector=e,this.flushes=t}return e.prototype.call=function(e,t){return t.subscribe(new y(e,this.keySelector,this.flushes))},e}(),y=function(r){function e(e,t,n){var o=r.call(this,e)||this;return o.keySelector=t,o.values=new Set,n&&o.add(Object(b.a)(o,n)),o}return h.a(e,r),e.prototype.notifyNext=function(e,t,n,o,r){this.values.clear()},e.prototype.notifyError=function(e,t){this._error(e)},e.prototype._next=function(e){this.keySelector?this._useKeySelector(e):this._finalizeNext(e,e)},e.prototype._useKeySelector=function(e){var t,n=this.destination;try{t=this.keySelector(e)}catch(e){return void n.error(e)}this._finalizeNext(t,e)},e.prototype._finalizeNext=function(e,t){var n=this.values;n.has(e)||(n.add(e),this.destination.next(t))},e}(r.a),O=n("Sh83"),g=n("wDsy"),S=n("nVTw"),w=n("2Fwo");function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(o=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==c.return||c.return()}finally{if(r)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function _(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function E(e,t){return!t||"object"!==j(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function F(e){return(F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var C=Object(S.a)()({shouldDisableInfiniteScroll:!1}),P=function(e){function t(){var u;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(u=E(this,F(t).apply(this,arguments))).shouldDisableInfiniteScrollSubject=new c.a(u.props.shouldDisableInfiniteScroll),u.shouldDisableInfiniteScroll$=u.shouldDisableInfiniteScrollSubject.asObservable(),u.invokeSuppliedFetchMethod=function(){var e=u.props,t=e.handleFetch,n=e.handleFetchArgs,o=e.handleFetchResponse,r=e.handleFetchError;if(!e.isDoneFetching){var i=n.nextPage,a=n.perPage,c=n.orderBy,l=Object(s.a)(function(){return t(i,a,c)}).pipe(Object(f.a)(3));u.fetchSubscription=l.subscribe(o,r)}},u}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(t,a["Component"]),n=t,(o=[{key:"componentDidMount",value:function(){this.addLoadMoreSubscription()}},{key:"componentWillReceiveProps",value:function(e){e.shouldDisableInfiniteScroll!==this.props.shouldDisableInfiniteScroll&&this.shouldDisableInfiniteScrollSubject.next(e.shouldDisableInfiniteScroll)}},{key:"componentWillUnmount",value:function(){this.removeLoadMoreSubscription()}},{key:"addLoadMoreSubscription",value:function(){var t,n,e=this,o=Object(l.a)(window,"scroll").pipe(Object(p.a)(O.p)),r=Object(u.a)(o,this.shouldDisableInfiniteScroll$).pipe(Object(p.a)(function(e){var t=I(e,2),n=t[0],o=t[1];return n&&!o}),(t=function(){return e.props.handleFetchArgs.nextPage},function(e){return e.lift(new d(t,n))}));this.loadMoreSubscription=r.subscribe(this.invokeSuppliedFetchMethod)}},{key:"removeLoadMoreSubscription",value:function(){Object(g.j)(this.loadMoreSubscription).unsubscribe(),i.a.of(this.fetchSubscription).forEach(function(e){return e.unsubscribe()})}},{key:"render",value:function(){return this.props.children}}])&&_(n.prototype,o),r&&_(n,r),t}();P.displayName="FeedScrollHandler";var N=Object(w.a)(Object(o.a)(P),C),x=n("4/DZ"),R=n("OjOI"),T=n.n(R);function D(e){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function q(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function B(e,t){return!t||"object"!==D(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function U(e){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var L=function(e){var t=e.content;return m.a.createElement("div",{className:T.a.container},t)},A=function(e){function t(){var y;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(y=B(this,U(t).apply(this,arguments))).renderFeed=function(e,t){var n=y.props,o=n.handleFetch,r=n.handleFetchResponse,i=n.shouldDisableInfiniteScroll,a=n.renderItems,c=n.getScrollFooterEl,l=e.lastPageFetched,u=e.perPage,s=e.orderBy,f=e.total,p={nextPage:l+1,perPage:u,orderBy:s},h=Object(v.b)({total:f,perPage:e.perPage})<=l,b=h?m.a.createElement(x.a,null):c(),d=m.a.createElement(m.a.Fragment,null,a(t),b);return m.a.createElement(N,{handleFetch:o,handleFetchArgs:p,handleFetchResponse:r,isDoneFetching:h,shouldDisableInfiniteScroll:i},L({content:d}))},y.renderFeedOrNoContent=function(e,t){return 0===t.length?y.props.getNoContentEl():y.renderFeed(e,t)},y.renderPlaceholder=function(){return L({content:y.props.getPlaceholderEl()})},y}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}(t,a["Component"]),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.feedOption,n=e.feedItemsOption;return i.a.map2(t,n,this.renderFeedOrNoContent).getOrElseL(this.renderPlaceholder)}}])&&q(n.prototype,o),r&&q(n,r),t}();A.displayName="Feed";var G=A;n.d(t,"a",function(){return G})},BUGo:function(e,t,n){e.exports={colorWhite:"#fff",colorLightGrey:"#ddd",colorGrey:"#999",colorDarkGrey:"#777",colorBlue:"#007fff",colorDarkBlue:"#006aff",colorBlack:"#000",followButton:"_3nDcb",isFollowing:"_2br-F",followIcon:"_2BKrY"}},DUaC:function(e,t,n){"use strict";var p=n("7H/G"),o=n("56YH"),r=n.n(o),i=n("vN+2"),a=n.n(i),c=n("WjpJ"),l=n.n(c),h=n("6l12"),u=n("q1tI"),b=n.n(u),s=n("/MKj"),f=n("QFtp"),d=n("nVTw"),y=n("2Fwo"),m=n("xOrC"),v=n("5hI/"),O=n("6kA8"),g=n("ALSr"),S=n("W/VI"),w=n("csaK"),j=n("JQ16"),I=n.n(j);function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function F(e,t){return!t||"object"!==_(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var P=w.a.Responsive({multi:{},single:{}}),N=Object(h.a)(function(){return b.a.createElement("div",{className:I.a.placeholdersContainer},b.a.createElement("div",{className:I.a.placeholderItemsContainer},l()(9).map(function(e){return b.a.createElement("div",{key:e,className:I.a.placeholderItemContainer},b.a.createElement("div",{className:I.a.placeholderItem}))})))}),x=Object(d.a)()({shouldRequireInfiniteScrollOptIn:!1,getNoContentEl:Object(h.a)(function(){return null})}),R=Object(f.unionize)({OptInRequired:Object(f.ofType)(),Enabled:Object(f.ofType)()}),T=function(e){function t(){var o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(o=F(this,k(t).apply(this,arguments))).state={infiniteScrollSetting:o.props.shouldRequireInfiniteScrollOptIn?R.OptInRequired({optedIn:!1}):R.Enabled({})},o.toggleInfiniteScrollOptIn=function(){var e=o.state.infiniteScrollSetting;R.match({OptInRequired:function(e){var t=e.optedIn,n=R.OptInRequired({optedIn:!t});o.setState({infiniteScrollSetting:n})}},a.a)(e)},o.defaultRenderChildren=function(e){return b.a.createElement(w.b,{photos:e,mode:P})},o}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(t,u["Component"]),n=t,(o=[{key:"componentWillReceiveProps",value:function(e){var t=e.shouldRequireInfiniteScrollOptIn;if(e.shouldRequireInfiniteScrollOptIn!==this.props.shouldRequireInfiniteScrollOptIn){var n=t?R.OptInRequired({optedIn:!1}):R.Enabled({});this.setState({infiniteScrollSetting:n})}}},{key:"render",value:function(){var t=this,e=this.props,n=e.handleFetch,o=e.handleFetchResponse,r=e.photoFeedOption,i=e.photosOption,a=e.children,c=e.getNoContentEl,l=this.state.infiniteScrollSetting,u=!R.match({OptInRequired:function(e){return e.optedIn},Enabled:function(){return!0}})(l),s=p.a.of(a).getOrElse(this.defaultRenderChildren),f=Object(h.a)(function(){return R.match({OptInRequired:function(e){return e.optedIn?b.a.createElement(S.a,null):b.a.createElement("div",{className:I.a.buttonFooterContainer},b.a.createElement(O.a,{tag:"button",buttonType:"outline",onClick:t.toggleInfiniteScrollOptIn},"Load more photos"))},Enabled:function(){return b.a.createElement(S.a,null)}})(l)});return b.a.createElement(g.a,{renderItems:s,feedItemsOption:i,feedOption:r,getScrollFooterEl:f,getNoContentEl:c,getPlaceholderEl:N,shouldDisableInfiniteScroll:u,handleFetch:n,handleFetchResponse:o})}}])&&E(n.prototype,o),r&&E(n,r),t}();T.displayName="PhotoFeed";var D=Object(y.a)(r()(Object(s.connect)(function(e,t){return{photoFeedOption:Object(v.b)(e,t.feedId),photosOption:Object(v.a)(e,t.feedId)}}),m.b)(T),x);n.d(t,"a",function(){return D})},JQ16:function(e,t,n){e.exports={clearfix:"_2KLco",container:"_2sCnE PrOBO _1CR66","col-12":"wRfkF","sm-col-6":"_2cVF0","md-col-4":"_1hITE",floatLeft:"_2T3hc",floatRight:"_3pmDG",spacingUnit:"4px","--sm-min":"(--sm-min)",colorLightGrey:"#ddd",placeholderBackground:"_2VWD4",placeholderGutter:"24px",buttonFooterContainer:"_3sS4m",placeholdersContainer:"ILvgD",placeholderItemsContainer:"vbiZb",placeholderItemContainer:"_1fA3Q wRfkF _2cVF0 _1hITE",placeholderItem:"IjvFe _2VWD4"}},KScQ:function(e,t,n){"use strict";var o=n("TSYQ"),u=n.n(o),r=n("56YH"),i=n.n(r),a=n("mwIZ"),c=n.n(a),l=n("q1tI"),s=n.n(l),f=n("/MKj"),p=n("wIs1"),h=n("5tAl"),b=n("t9fZ"),d=n("b2r9"),y=n("acyj"),m=n("d8i8"),v=n("nVTw"),O=n("2Fwo"),g=n("GBJA"),S=Object(g.a)("M31.2 12.8h-2.4v-2.4c0-.4-.4-.8-.8-.8h-1.6c-.4 0-.8.4-.8.8v2.4h-2.4c-.4 0-.8.4-.8.8v1.6c0 .4.4.8.8.8h2.4v2.4c0 .4.4.8.8.8h1.6c.4 0 .8-.4.8-.8v-2.4h2.4c.4 0 .8-.4.8-.8v-1.6c0-.4-.4-.8-.8-.8zm-15.2 5.1v-1.2c1.9-1.1 3.2-3.1 3.2-5.5v-1.6c0-3.5-2.9-6.4-6.4-6.4s-6.4 2.9-6.4 6.4v1.6c0 2.4 1.3 4.4 3.2 5.5v1.2c-5.5.9-9.6 4-9.6 7.7v1.6c0 .9.7 1.6 1.6 1.6h22.4c.9 0 1.6-.7 1.6-1.6v-1.6c0-3.7-4.1-6.8-9.6-7.7z"),w=n("MH8j"),j=n("XqAV"),I=n("6kA8"),_=n("BUGo"),E=n.n(_);function F(e){return(F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function C(e,t){return!t||"object"!==F(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var x=Object(v.a)()({labelText:{isFollowing:"Following",isNotFollowing:"Follow"}}),R=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),C(this,P(t).apply(this,arguments))}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(t,l["Component"]),n=t,(o=[{key:"componentWillUnmount",value:function(){this.followSubscription&&this.followSubscription.unsubscribe()}},{key:"getLabelText",value:function(){var e=this.props.labelText;return this.props.user.followed_by_user?e.isFollowing:e.isNotFollowing}},{key:"buildToLink",value:function(){var e=this.props,t=e.location,n=e.user;return Object(m.a)(t)(j.c.Login(j.b.Follow({userId:n.id})))}},{key:"buildClickHandler",value:function(){var t=this,e=this.props,n=e.authUser,o=e.user,r=e.followUser,i=e.unfollowUser,a=e.trackFollowButtonClick,c=e.trackUnfollowButtonClick,l=e.buttonType;if(!n)return function(){return a(o.id,l)};var u=o.username,s=o.followed_by_user,f=(s?y.a.users.unfollowUser:y.a.users.followUser)({username:u}).pipe(Object(h.a)(3),Object(b.a)(1));return function(e){e.stopPropagation(),s?(i(o.id),c(o.id,l)):(r(o.id),a(o.id,l)),t.followSubscription=f.subscribe()}}},{key:"renderContainer",value:function(e){var t=this.props,n=t.user,o=t.className,r=t.authUser,i=this.buildClickHandler(),a=n.followed_by_user,c=!r,l={className:u()(E.a.followButton,a&&E.a.isFollowing,o),buttonSize:"small"};return c?s.a.createElement(I.a,Object.assign({tag:"link",to:this.buildToLink(),onMouseUp:i},l),e):s.a.createElement(I.a,Object.assign({tag:"button",onMouseUp:i},l),e)}},{key:"render",value:function(){var e=this.props,t=e.user,n=e.authUser;return c()(n,"username")===t.username?s.a.createElement("div",null):this.renderContainer(s.a.createElement("span",null,s.a.createElement(S,{className:E.a.followIcon}),this.getLabelText()))}}])&&k(n.prototype,o),r&&k(n,r),t}();R.displayName="FollowButton";Object(O.a)(R,x);var T={trackFollowButtonClick:d.I,trackUnfollowButtonClick:d.T,followUser:d.j,unfollowUser:d.W},D=Object(O.a)(i()(Object(f.connect)(function(e){return{authUser:Object(w.d)(e)}},T),p.a)(R),x);n.d(t,"a",function(){return D})},OjOI:function(e,t,n){e.exports={container:"_2HheS _2sCnE PrOBO _1CR66"}},eSEV:function(e,t,n){"use strict";var o=n("Xp7I"),r=n.n(o),i=n("q1tI"),a=n.n(i),c=n("TSYQ"),l=n.n(c),u=n("/MKj"),s=n("2iEm"),f=n("b2r9"),p=n("g9Q9"),h=n("fO8F"),b=n.n(h),d=function(e){var t=e.tag,n=e.emplacement,o=e.trackSearchSuggestionClick,r=e.className,i="linkUrl"in t?t.linkUrl:Object(p.e)(t.title);return a.a.createElement(s.a,{className:l()(b.a.smallTag,r),to:i,title:"".concat(t.title," images"),onClick:function(){return o(t.title.toLowerCase(),n)}},t.title)};d.displayName="SmallTag";var y={trackSearchSuggestionClick:f.R},m=Object(u.connect)(null,y)(d),v=n("hBm8"),O=n.n(v),g=function(e){var t=e.tags,n=e.emplacement,o=e.takeN;return a.a.createElement("div",{className:O.a.tagsContainer},(o?r()(t,o):t).map(function(e){return a.a.createElement("div",{key:e.title,className:O.a.tagItem},a.a.createElement(m,{tag:e,emplacement:n}))}))};g.displayName="SmallTagsList";var S=g;n.d(t,"a",function(){return S})},fO8F:function(e,t,n){e.exports={smallTag:"_6PxCM"}},hBm8:function(e,t,n){e.exports={gutter:"8px",tagsContainer:"_2_OE1",tagItem:"_3Z-ua"}},s3D0:function(e,t,n){e.exports={colorGrey:"#999","--sm":"(--sm)","--md-min":"(--md-min)",container:"_2WMKE",logo:"_1Ig-9",text:"_1cQDt"}},xCPo:function(e,t,n){e.exports={emptyStateContainer:"_1SdCr",emptyStateImg:"_3AIC0"}}}]);
//# sourceMappingURL=search-photos-route.30bac.js.map