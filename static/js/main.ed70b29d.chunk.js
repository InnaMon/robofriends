(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports=n(29)},26:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),c=n.n(o),i=n(8),l=n(4),s=(n(26),n(5)),u=n(6),h=n(9),d=n(7),m=n(10),b=function(e){var t=e.name,n=e.email,a=e.id;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(a,"?200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,n)))},p=function(e){var t=e.robots;return r.a.createElement("div",null,t.map(function(e,n){return r.a.createElement(b,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})}))},f=function(e){e.searchfield;var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},E=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px",width:"100vw"}},e.children)},v=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={hasError:!1},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oooops. That is not good"):this.props.children}}]),t}(a.Component),g=(n(27),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(h.a)(this,Object(d.a)(t).call(this))).state={robots:[]},e}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e.setState({robots:t})})}},{key:"render",value:function(){var e=this.state.robots,t=this.props,n=t.searchField,a=t.onSearchChange,o=e.filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())});return this.state.robots.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"RoboFriends"),r.a.createElement(f,{searchChange:a}),r.a.createElement(E,null,r.a.createElement(v,null,r.a.createElement(p,{robots:o})))):r.a.createElement("h1",null,"Loading")}}]),t}(a.Component)),w=Object(i.b)(function(e){return{searchField:e.searchField}},function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})}}})(g);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j={searchField:""},y=(n(28),Object(l.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}}));c.a.render(r.a.createElement(i.a,{store:y},r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.ed70b29d.chunk.js.map