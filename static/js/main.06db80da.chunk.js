(this.webpackJsonpuntitled=this.webpackJsonpuntitled||[]).push([[0],{13:function(e,t,n){"use strict";var o=n(51),a=n(0),r=n.n(a),c=n(27),u=n.n(c);t.a=function(e){var t=e.theme,n=e.callback,a=e.disabled,c=Object(o.a)(e,["theme","callback","disabled"]).children;return r.a.createElement("button",{className:"".concat(u.a.btn," ").concat(u.a[t]),onClick:n,disabled:a},c)}},18:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var o=n(8),a={showPopup:function(e,t){return{type:"SHOW_POPUP",message:e,popupAct:t}},confirmPopup:function(e){return{type:"CONFIRM_POPUP",confirm:e}}},r=function(e){return function(t){switch(e.type){case"DELETE":t(o.a.deleteToDO(e.payload)),t(a.confirmPopup(!0));break;default:return}}}},20:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c}));var o=n(2),a=function(e,t,n){return{userId:n,id:e.todos[e.todos.length-1].id+1,title:t,completed:!1}},r=function(e,t,n){return e.todos.map((function(e){return e.id===t?Object(o.a)({},e,{completed:n}):e}))},c=function(e){return e.user.userId}},21:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return u}));var o=n(45),a=n.n(o),r={loadData:function(e){return a.a.get("https://jsonplaceholder.typicode.com/todos?userId=".concat(e)).then((function(e){return e.data}))}},c={loadTodosStatus:function(e){return{type:"LOAD_TODO_LIST",payload:e}},loadToDoListSuccess:function(e){return{type:"LOAD_TODO_SUCCESS",payload:e}},deleteToDO:function(e){return{type:"DELETE_TODO",id:e}},completeToDo:function(e){return{type:"COMPLETE_TODO",id:e}},uncompleteToDo:function(e){return{type:"UNCOMPLETE_TODO",id:e}},addToDo:function(e,t){return{type:"ADD_TODO",title:e,userId:t}}},u=function(e){return function(t){t(c.loadTodosStatus(!0)),r.loadData(e).then((function(e){t(c.loadToDoListSuccess(e))})).then((function(){return t(c.loadTodosStatus(!1))}))}}},23:function(e,t,n){e.exports={header:"Header_header__1VCKf",header__img:"Header_header__img__2Sa2s"}},25:function(e,t,n){e.exports={container:"Loader_container__3LFDG",lds_ripple:"Loader_lds_ripple__1-tX1"}},26:function(e,t,n){e.exports={hide:"Popup_hide__3fQiw",show:"Popup_show__1Iesk"}},27:function(e,t,n){e.exports={btn:"Button_btn__3xaJM",primary:"Button_primary__1mTxz",secondary:"Button_secondary__2t2Od",danger:"Button_danger__311uS"}},30:function(e,t,n){e.exports={container:"Authorization_container__3j9oq",select:"Authorization_select__3iwlh"}},31:function(e,t){},43:function(e,t,n){e.exports=n.p+"static/media/redux.85772647.svg"},52:function(e,t,n){e.exports=n(81)},57:function(e,t,n){},58:function(e,t,n){},8:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n(2),a=n(21),r=n(18),c=Object(o.a)({},a.b,{},{userLogin:function(e){return{type:"LOGIN",payload:e}}},{},r.b)},81:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(16),c=n.n(r),u=(n(57),n(58),n(23)),i=n.n(u),s=n(43),l=n.n(s),d=function(){return a.a.createElement("header",{className:i.a.header},a.a.createElement("img",{className:i.a.header__img,src:l.a,alt:"Redux"}),"TO-DO REDUX APP")},p=n(9),m=n(21),f=n(8),O=n(25),h=n.n(O),_=function(){return a.a.createElement("div",{className:h.a.container},a.a.createElement("div",{className:h.a.lds_ripple},a.a.createElement("div",null),a.a.createElement("div",null)))},b=(n(31),a.a.lazy((function(){return n.e(3).then(n.bind(null,84))}))),E=Object(p.b)((function(e){return{todos:e.todos.todos,userId:e.user.userId,isLoading:e.todos.isLoading}}),(function(e){return{load:function(t){return e(Object(m.a)(t))},deleteToDo:function(t){return e(f.a.deleteToDO(t))},completeToDo:function(t){return e(f.a.completeToDo(t))},uncompleteToDo:function(t){return e(f.a.uncompleteToDo(t))},showPopup:function(t,n){return e(f.a.showPopup(t,n))}}}))((function(e){var t=e.load,n=e.userId,r=e.isLoading,c=e.todos,u=e.deleteToDo,i=e.completeToDo,s=e.uncompleteToDo,l=e.showPopup;return Object(o.useEffect)((function(){t(n)}),[t,n]),r?a.a.createElement(_,null):a.a.createElement(o.Suspense,{fallback:a.a.createElement(_,null)},a.a.createElement(b,{todos:c,deleteToDo:u,completeToDo:i,uncompleteToDo:s,showPopup:l}))})),D=n(26),T=n.n(D),v=n(18),g=n(13),y=Object(p.b)((function(e){return{message:e.popup.message,confirm:e.popup.confirm,isShown:e.popup.isShown,popupAct:e.popup.popupAct}}),(function(e){return{onConfirm:function(t){return e(Object(v.a)(t))},onCancel:function(t){return e(f.a.confirmPopup(t))}}}))((function(e){var t=e.isShown,n=e.message,o=e.popupAct,r=e.onConfirm,c=e.onCancel,u=t?T.a.show:T.a.hide;return a.a.createElement("div",{className:u},n,a.a.createElement(g.a,{theme:"primary",callback:function(){return r(o)}},"OK"),a.a.createElement(g.a,{theme:"danger",callback:function(){return c(!1)}},"CANCEL"))})),j=n(6),L=Object(p.b)((function(e){return{userId:e.user.userId}}),null)((function(e){return 0===e.userId?a.a.createElement(j.a,{to:"/"}):a.a.createElement("div",{className:"App"},a.a.createElement(d,null),a.a.createElement(E,null),a.a.createElement(y,null))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w=n(11),S=n(50),P=n(2),A=n(20),I={todos:[],isLoading:!1},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_TODO_LIST":return Object(P.a)({},e,{isLoading:t.payload});case"LOAD_TODO_SUCCESS":return Object(P.a)({},e,{todos:t.payload});case"DELETE_TODO":var n=e.todos.filter((function(e){return e.id!==t.id}));return Object(P.a)({},e,{todos:n});case"COMPLETE_TODO":return Object(P.a)({},e,{todos:Object(A.a)(e,t.id,!0)});case"UNCOMPLETE_TODO":return Object(P.a)({},e,{todos:Object(A.a)(e,t.id,!1)});case"ADD_TODO":var o=Object(A.c)(e,t.title,t.userId);return Object(P.a)({},e,{todos:[].concat(Object(S.a)(e.todos),[o])});default:return e}},N=n(47),k=n(48),x={userId:0},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return Object(P.a)({},e,{userId:t.payload});default:return e}},U={message:"",confirm:!1,isShown:!1,popupAct:{type:"",payload:0}},B=Object(w.combineReducers)({todos:C,user:M,popup:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_POPUP":return Object(P.a)({},e,{message:t.message,isShown:!0,popupAct:Object(P.a)({},e.popupAct,{},t.popupAct)});case"CONFIRM_POPUP":return Object(P.a)({},e,{confirm:t.confirm,isShown:!1});default:return e}}}),R=Object(w.createStore)(B,Object(N.composeWithDevTools)(Object(w.applyMiddleware)(k.a))),W=n(49),z=n(42),H=n(30),F=n.n(H),G=Object(j.g)(Object(p.b)(null,(function(e){return{userLogin:function(t){return e(f.a.userLogin(t))}}}))((function(e){var t=e.userLogin,n=e.history,r=Object(o.useState)("1"),c=Object(z.a)(r,2),u=c[0],i=c[1];return a.a.createElement("div",{className:F.a.container},a.a.createElement("label",null,"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f:",a.a.createElement("select",{className:F.a.select,value:u,onChange:function(e){i(e.currentTarget.value)}},a.a.createElement("option",{value:"1"},"Alex"),a.a.createElement("option",{value:"2"},"Svetlana"),a.a.createElement("option",{value:"3"},"Evgeniy"),a.a.createElement("option",{value:"4"},"Elena"))),a.a.createElement(g.a,{theme:"primary",callback:function(){t(+u),n.push("/App")}},"Show To-Do List"))})));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(p.a,{store:R},a.a.createElement(W.a,null,a.a.createElement(j.d,null,a.a.createElement(j.b,{path:"/",component:G,exact:!0}),a.a.createElement(j.b,{path:"/App",component:L}))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[52,1,2]]]);
//# sourceMappingURL=main.06db80da.chunk.js.map